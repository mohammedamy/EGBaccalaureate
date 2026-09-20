import type { ChapterDatabank } from '../../../types/curriculum';

export const egbac_ai_data_science_ch4Databank: ChapterDatabank = {
  "easy": [
    {
      "id": "egbac_ai_data_science_ch4_easy_1",
      "titleEn": "[EASY] Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO) - Review 1",
      "titleAr": "[مستوى أساسي] التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO - سؤال 1",
      "questionEn": "[AI & Data Science Core Concept] Regarding Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO), which of the following statements is theoretically and mathematically sound? (Variant 1)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 1)",
      "optionsEn": [
        "Distributed Data Parallelism (DDP) replicates model parameters across multiple GPUs, processing distinct mini-batch slices in parallel and synchronizing gradients via All-Reduce collectives.",
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "تكرر الموازاة الموزعة للبيانات (DDP) معاملات النموذج عبر وحدات GPU متعددة، فتعالج حزم البيانات بالتوازي وتزامن التدرجات بعملية All-Reduce.",
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "Distributed Data Parallelism (DDP) replicates model parameters across multiple GPUs, processing distinct mini-batch slices in parallel and synchronizing gradients via All-Reduce collectives.",
      "correctAnswerEn": "Distributed Data Parallelism (DDP) replicates model parameters across multiple GPUs, processing distinct mini-batch slices in parallel and synchronizing gradients via All-Reduce collectives.",
      "correctAnswerAr": "تكرر الموازاة الموزعة للبيانات (DDP) معاملات النموذج عبر وحدات GPU متعددة، فتعالج حزم البيانات بالتوازي وتزامن التدرجات بعملية All-Reduce.",
      "correctIndex": 0,
      "explanationEn": "Correct Theoretical Formulation: Distributed Data Parallelism (DDP) replicates model parameters across multiple GPUs, processing distinct mini-batch slices in parallel and synchronizing gradients via All-Reduce collectives.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تكرر الموازاة الموزعة للبيانات (DDP) معاملات النموذج عبر وحدات GPU متعددة، فتعالج حزم البيانات بالتوازي وتزامن التدرجات بعملية All-Reduce.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Distributed Data Parallelism (DDP) replicates model parameters across multiple GPUs, processing distinct mini-batch slices in parallel and synchronizing gradients via All-Reduce collectives.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تكرر الموازاة الموزعة للبيانات (DDP) معاملات النموذج عبر وحدات GPU متعددة، فتعالج حزم البيانات بالتوازي وتزامن التدرجات بعملية All-Reduce.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch4_easy_2",
      "titleEn": "[EASY] Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning - Review 2",
      "titleAr": "[مستوى أساسي] ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات - سؤال 2",
      "questionEn": "[AI & Data Science Core Concept] Regarding Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning, which of the following statements is theoretically and mathematically sound? (Variant 2)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 2)",
      "optionsEn": [
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "Model quantization converts 32-bit floating-point parameters (FP32) into low-bitwidth integers (INT8 or FP4), accelerating inference execution and reducing memory bandwidth demand.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "يحول تكميم النماذج معاملات الأوزان ذات الدقة 32 بت العائمة (FP32) إلى أعداد صحيحة منخفضة العرض (INT8 أو FP4)، مسرعاً الاستدلال ومقلصاً استهلاك الذاكرة.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "Model quantization converts 32-bit floating-point parameters (FP32) into low-bitwidth integers (INT8 or FP4), accelerating inference execution and reducing memory bandwidth demand.",
      "correctAnswerEn": "Model quantization converts 32-bit floating-point parameters (FP32) into low-bitwidth integers (INT8 or FP4), accelerating inference execution and reducing memory bandwidth demand.",
      "correctAnswerAr": "يحول تكميم النماذج معاملات الأوزان ذات الدقة 32 بت العائمة (FP32) إلى أعداد صحيحة منخفضة العرض (INT8 أو FP4)، مسرعاً الاستدلال ومقلصاً استهلاك الذاكرة.",
      "correctIndex": 1,
      "explanationEn": "Correct Theoretical Formulation: Model quantization converts 32-bit floating-point parameters (FP32) into low-bitwidth integers (INT8 or FP4), accelerating inference execution and reducing memory bandwidth demand.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يحول تكميم النماذج معاملات الأوزان ذات الدقة 32 بت العائمة (FP32) إلى أعداد صحيحة منخفضة العرض (INT8 أو FP4)، مسرعاً الاستدلال ومقلصاً استهلاك الذاكرة.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Model quantization converts 32-bit floating-point parameters (FP32) into low-bitwidth integers (INT8 or FP4), accelerating inference execution and reducing memory bandwidth demand.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يحول تكميم النماذج معاملات الأوزان ذات الدقة 32 بت العائمة (FP32) إلى أعداد صحيحة منخفضة العرض (INT8 أو FP4)، مسرعاً الاستدلال ومقلصاً استهلاك الذاكرة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch4_easy_3",
      "titleEn": "[EASY] Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance - Review 3",
      "titleAr": "[مستوى أساسي] العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة - سؤال 3",
      "questionEn": "[AI & Data Science Core Concept] Regarding Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance, which of the following statements is theoretically and mathematically sound? (Variant 3)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 3)",
      "optionsEn": [
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Explainable AI (XAI) techniques interpret and audit complex black-box machine learning predictions, ensuring transparency, ethical accountability, and compliance with data protection laws.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تفسر تقنيات الذكاء الاصطناعي القابل للتفسير (XAI) وتدقق تنبؤات النماذج المعقدة، محققة الشفافية والمساءلة الأخلاقية والامتثال لقوانين حماية البيانات.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "Explainable AI (XAI) techniques interpret and audit complex black-box machine learning predictions, ensuring transparency, ethical accountability, and compliance with data protection laws.",
      "correctAnswerEn": "Explainable AI (XAI) techniques interpret and audit complex black-box machine learning predictions, ensuring transparency, ethical accountability, and compliance with data protection laws.",
      "correctAnswerAr": "تفسر تقنيات الذكاء الاصطناعي القابل للتفسير (XAI) وتدقق تنبؤات النماذج المعقدة، محققة الشفافية والمساءلة الأخلاقية والامتثال لقوانين حماية البيانات.",
      "correctIndex": 2,
      "explanationEn": "Correct Theoretical Formulation: Explainable AI (XAI) techniques interpret and audit complex black-box machine learning predictions, ensuring transparency, ethical accountability, and compliance with data protection laws.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تفسر تقنيات الذكاء الاصطناعي القابل للتفسير (XAI) وتدقق تنبؤات النماذج المعقدة، محققة الشفافية والمساءلة الأخلاقية والامتثال لقوانين حماية البيانات.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Explainable AI (XAI) techniques interpret and audit complex black-box machine learning predictions, ensuring transparency, ethical accountability, and compliance with data protection laws.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تفسر تقنيات الذكاء الاصطناعي القابل للتفسير (XAI) وتدقق تنبؤات النماذج المعقدة، محققة الشفافية والمساءلة الأخلاقية والامتثال لقوانين حماية البيانات.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch4_easy_4",
      "titleEn": "[EASY] Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO) - Review 4",
      "titleAr": "[مستوى أساسي] التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO - سؤال 4",
      "questionEn": "[AI & Data Science Core Concept] Regarding Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO), which of the following statements is theoretically and mathematically sound? (Variant 4)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 4)",
      "optionsEn": [
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "Distributed Data Parallelism (DDP) replicates model parameters across multiple GPUs, processing distinct mini-batch slices in parallel and synchronizing gradients via All-Reduce collectives."
      ],
      "optionsAr": [
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تكرر الموازاة الموزعة للبيانات (DDP) معاملات النموذج عبر وحدات GPU متعددة، فتعالج حزم البيانات بالتوازي وتزامن التدرجات بعملية All-Reduce."
      ],
      "correctAnswer": "Distributed Data Parallelism (DDP) replicates model parameters across multiple GPUs, processing distinct mini-batch slices in parallel and synchronizing gradients via All-Reduce collectives.",
      "correctAnswerEn": "Distributed Data Parallelism (DDP) replicates model parameters across multiple GPUs, processing distinct mini-batch slices in parallel and synchronizing gradients via All-Reduce collectives.",
      "correctAnswerAr": "تكرر الموازاة الموزعة للبيانات (DDP) معاملات النموذج عبر وحدات GPU متعددة، فتعالج حزم البيانات بالتوازي وتزامن التدرجات بعملية All-Reduce.",
      "correctIndex": 3,
      "explanationEn": "Correct Theoretical Formulation: Distributed Data Parallelism (DDP) replicates model parameters across multiple GPUs, processing distinct mini-batch slices in parallel and synchronizing gradients via All-Reduce collectives.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تكرر الموازاة الموزعة للبيانات (DDP) معاملات النموذج عبر وحدات GPU متعددة، فتعالج حزم البيانات بالتوازي وتزامن التدرجات بعملية All-Reduce.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Distributed Data Parallelism (DDP) replicates model parameters across multiple GPUs, processing distinct mini-batch slices in parallel and synchronizing gradients via All-Reduce collectives.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تكرر الموازاة الموزعة للبيانات (DDP) معاملات النموذج عبر وحدات GPU متعددة، فتعالج حزم البيانات بالتوازي وتزامن التدرجات بعملية All-Reduce.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch4_easy_5",
      "titleEn": "[EASY] Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning - Review 5",
      "titleAr": "[مستوى أساسي] ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات - سؤال 5",
      "questionEn": "[AI & Data Science Core Concept] Regarding Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning, which of the following statements is theoretically and mathematically sound? (Variant 5)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 5)",
      "optionsEn": [
        "Model quantization converts 32-bit floating-point parameters (FP32) into low-bitwidth integers (INT8 or FP4), accelerating inference execution and reducing memory bandwidth demand.",
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "يحول تكميم النماذج معاملات الأوزان ذات الدقة 32 بت العائمة (FP32) إلى أعداد صحيحة منخفضة العرض (INT8 أو FP4)، مسرعاً الاستدلال ومقلصاً استهلاك الذاكرة.",
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "Model quantization converts 32-bit floating-point parameters (FP32) into low-bitwidth integers (INT8 or FP4), accelerating inference execution and reducing memory bandwidth demand.",
      "correctAnswerEn": "Model quantization converts 32-bit floating-point parameters (FP32) into low-bitwidth integers (INT8 or FP4), accelerating inference execution and reducing memory bandwidth demand.",
      "correctAnswerAr": "يحول تكميم النماذج معاملات الأوزان ذات الدقة 32 بت العائمة (FP32) إلى أعداد صحيحة منخفضة العرض (INT8 أو FP4)، مسرعاً الاستدلال ومقلصاً استهلاك الذاكرة.",
      "correctIndex": 0,
      "explanationEn": "Correct Theoretical Formulation: Model quantization converts 32-bit floating-point parameters (FP32) into low-bitwidth integers (INT8 or FP4), accelerating inference execution and reducing memory bandwidth demand.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يحول تكميم النماذج معاملات الأوزان ذات الدقة 32 بت العائمة (FP32) إلى أعداد صحيحة منخفضة العرض (INT8 أو FP4)، مسرعاً الاستدلال ومقلصاً استهلاك الذاكرة.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Model quantization converts 32-bit floating-point parameters (FP32) into low-bitwidth integers (INT8 or FP4), accelerating inference execution and reducing memory bandwidth demand.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يحول تكميم النماذج معاملات الأوزان ذات الدقة 32 بت العائمة (FP32) إلى أعداد صحيحة منخفضة العرض (INT8 أو FP4)، مسرعاً الاستدلال ومقلصاً استهلاك الذاكرة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch4_easy_6",
      "titleEn": "[EASY] Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance - Review 6",
      "titleAr": "[مستوى أساسي] العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة - سؤال 6",
      "questionEn": "[AI & Data Science Core Concept] Regarding Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance, which of the following statements is theoretically and mathematically sound? (Variant 6)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 6)",
      "optionsEn": [
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Explainable AI (XAI) techniques interpret and audit complex black-box machine learning predictions, ensuring transparency, ethical accountability, and compliance with data protection laws.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "تفسر تقنيات الذكاء الاصطناعي القابل للتفسير (XAI) وتدقق تنبؤات النماذج المعقدة، محققة الشفافية والمساءلة الأخلاقية والامتثال لقوانين حماية البيانات.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "Explainable AI (XAI) techniques interpret and audit complex black-box machine learning predictions, ensuring transparency, ethical accountability, and compliance with data protection laws.",
      "correctAnswerEn": "Explainable AI (XAI) techniques interpret and audit complex black-box machine learning predictions, ensuring transparency, ethical accountability, and compliance with data protection laws.",
      "correctAnswerAr": "تفسر تقنيات الذكاء الاصطناعي القابل للتفسير (XAI) وتدقق تنبؤات النماذج المعقدة، محققة الشفافية والمساءلة الأخلاقية والامتثال لقوانين حماية البيانات.",
      "correctIndex": 1,
      "explanationEn": "Correct Theoretical Formulation: Explainable AI (XAI) techniques interpret and audit complex black-box machine learning predictions, ensuring transparency, ethical accountability, and compliance with data protection laws.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تفسر تقنيات الذكاء الاصطناعي القابل للتفسير (XAI) وتدقق تنبؤات النماذج المعقدة، محققة الشفافية والمساءلة الأخلاقية والامتثال لقوانين حماية البيانات.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Explainable AI (XAI) techniques interpret and audit complex black-box machine learning predictions, ensuring transparency, ethical accountability, and compliance with data protection laws.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تفسر تقنيات الذكاء الاصطناعي القابل للتفسير (XAI) وتدقق تنبؤات النماذج المعقدة، محققة الشفافية والمساءلة الأخلاقية والامتثال لقوانين حماية البيانات.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch4_easy_7",
      "titleEn": "[EASY] Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO) - Review 7",
      "titleAr": "[مستوى أساسي] التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO - سؤال 7",
      "questionEn": "[AI & Data Science Core Concept] Regarding Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO), which of the following statements is theoretically and mathematically sound? (Variant 7)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 7)",
      "optionsEn": [
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Distributed Data Parallelism (DDP) replicates model parameters across multiple GPUs, processing distinct mini-batch slices in parallel and synchronizing gradients via All-Reduce collectives.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تكرر الموازاة الموزعة للبيانات (DDP) معاملات النموذج عبر وحدات GPU متعددة، فتعالج حزم البيانات بالتوازي وتزامن التدرجات بعملية All-Reduce.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "Distributed Data Parallelism (DDP) replicates model parameters across multiple GPUs, processing distinct mini-batch slices in parallel and synchronizing gradients via All-Reduce collectives.",
      "correctAnswerEn": "Distributed Data Parallelism (DDP) replicates model parameters across multiple GPUs, processing distinct mini-batch slices in parallel and synchronizing gradients via All-Reduce collectives.",
      "correctAnswerAr": "تكرر الموازاة الموزعة للبيانات (DDP) معاملات النموذج عبر وحدات GPU متعددة، فتعالج حزم البيانات بالتوازي وتزامن التدرجات بعملية All-Reduce.",
      "correctIndex": 2,
      "explanationEn": "Correct Theoretical Formulation: Distributed Data Parallelism (DDP) replicates model parameters across multiple GPUs, processing distinct mini-batch slices in parallel and synchronizing gradients via All-Reduce collectives.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تكرر الموازاة الموزعة للبيانات (DDP) معاملات النموذج عبر وحدات GPU متعددة، فتعالج حزم البيانات بالتوازي وتزامن التدرجات بعملية All-Reduce.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Distributed Data Parallelism (DDP) replicates model parameters across multiple GPUs, processing distinct mini-batch slices in parallel and synchronizing gradients via All-Reduce collectives.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تكرر الموازاة الموزعة للبيانات (DDP) معاملات النموذج عبر وحدات GPU متعددة، فتعالج حزم البيانات بالتوازي وتزامن التدرجات بعملية All-Reduce.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch4_easy_8",
      "titleEn": "[EASY] Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning - Review 8",
      "titleAr": "[مستوى أساسي] ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات - سؤال 8",
      "questionEn": "[AI & Data Science Core Concept] Regarding Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning, which of the following statements is theoretically and mathematically sound? (Variant 8)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 8)",
      "optionsEn": [
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "Model quantization converts 32-bit floating-point parameters (FP32) into low-bitwidth integers (INT8 or FP4), accelerating inference execution and reducing memory bandwidth demand."
      ],
      "optionsAr": [
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "يحول تكميم النماذج معاملات الأوزان ذات الدقة 32 بت العائمة (FP32) إلى أعداد صحيحة منخفضة العرض (INT8 أو FP4)، مسرعاً الاستدلال ومقلصاً استهلاك الذاكرة."
      ],
      "correctAnswer": "Model quantization converts 32-bit floating-point parameters (FP32) into low-bitwidth integers (INT8 or FP4), accelerating inference execution and reducing memory bandwidth demand.",
      "correctAnswerEn": "Model quantization converts 32-bit floating-point parameters (FP32) into low-bitwidth integers (INT8 or FP4), accelerating inference execution and reducing memory bandwidth demand.",
      "correctAnswerAr": "يحول تكميم النماذج معاملات الأوزان ذات الدقة 32 بت العائمة (FP32) إلى أعداد صحيحة منخفضة العرض (INT8 أو FP4)، مسرعاً الاستدلال ومقلصاً استهلاك الذاكرة.",
      "correctIndex": 3,
      "explanationEn": "Correct Theoretical Formulation: Model quantization converts 32-bit floating-point parameters (FP32) into low-bitwidth integers (INT8 or FP4), accelerating inference execution and reducing memory bandwidth demand.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يحول تكميم النماذج معاملات الأوزان ذات الدقة 32 بت العائمة (FP32) إلى أعداد صحيحة منخفضة العرض (INT8 أو FP4)، مسرعاً الاستدلال ومقلصاً استهلاك الذاكرة.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Model quantization converts 32-bit floating-point parameters (FP32) into low-bitwidth integers (INT8 or FP4), accelerating inference execution and reducing memory bandwidth demand.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يحول تكميم النماذج معاملات الأوزان ذات الدقة 32 بت العائمة (FP32) إلى أعداد صحيحة منخفضة العرض (INT8 أو FP4)، مسرعاً الاستدلال ومقلصاً استهلاك الذاكرة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch4_easy_9",
      "titleEn": "[EASY] Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance - Review 9",
      "titleAr": "[مستوى أساسي] العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة - سؤال 9",
      "questionEn": "[AI & Data Science Core Concept] Regarding Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance, which of the following statements is theoretically and mathematically sound? (Variant 9)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 9)",
      "optionsEn": [
        "Explainable AI (XAI) techniques interpret and audit complex black-box machine learning predictions, ensuring transparency, ethical accountability, and compliance with data protection laws.",
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "تفسر تقنيات الذكاء الاصطناعي القابل للتفسير (XAI) وتدقق تنبؤات النماذج المعقدة، محققة الشفافية والمساءلة الأخلاقية والامتثال لقوانين حماية البيانات.",
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "Explainable AI (XAI) techniques interpret and audit complex black-box machine learning predictions, ensuring transparency, ethical accountability, and compliance with data protection laws.",
      "correctAnswerEn": "Explainable AI (XAI) techniques interpret and audit complex black-box machine learning predictions, ensuring transparency, ethical accountability, and compliance with data protection laws.",
      "correctAnswerAr": "تفسر تقنيات الذكاء الاصطناعي القابل للتفسير (XAI) وتدقق تنبؤات النماذج المعقدة، محققة الشفافية والمساءلة الأخلاقية والامتثال لقوانين حماية البيانات.",
      "correctIndex": 0,
      "explanationEn": "Correct Theoretical Formulation: Explainable AI (XAI) techniques interpret and audit complex black-box machine learning predictions, ensuring transparency, ethical accountability, and compliance with data protection laws.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تفسر تقنيات الذكاء الاصطناعي القابل للتفسير (XAI) وتدقق تنبؤات النماذج المعقدة، محققة الشفافية والمساءلة الأخلاقية والامتثال لقوانين حماية البيانات.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Explainable AI (XAI) techniques interpret and audit complex black-box machine learning predictions, ensuring transparency, ethical accountability, and compliance with data protection laws.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تفسر تقنيات الذكاء الاصطناعي القابل للتفسير (XAI) وتدقق تنبؤات النماذج المعقدة، محققة الشفافية والمساءلة الأخلاقية والامتثال لقوانين حماية البيانات.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch4_easy_10",
      "titleEn": "[EASY] Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO) - Review 10",
      "titleAr": "[مستوى أساسي] التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO - سؤال 10",
      "questionEn": "[AI & Data Science Core Concept] Regarding Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO), which of the following statements is theoretically and mathematically sound? (Variant 10)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 10)",
      "optionsEn": [
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "Distributed Data Parallelism (DDP) replicates model parameters across multiple GPUs, processing distinct mini-batch slices in parallel and synchronizing gradients via All-Reduce collectives.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تكرر الموازاة الموزعة للبيانات (DDP) معاملات النموذج عبر وحدات GPU متعددة، فتعالج حزم البيانات بالتوازي وتزامن التدرجات بعملية All-Reduce.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "Distributed Data Parallelism (DDP) replicates model parameters across multiple GPUs, processing distinct mini-batch slices in parallel and synchronizing gradients via All-Reduce collectives.",
      "correctAnswerEn": "Distributed Data Parallelism (DDP) replicates model parameters across multiple GPUs, processing distinct mini-batch slices in parallel and synchronizing gradients via All-Reduce collectives.",
      "correctAnswerAr": "تكرر الموازاة الموزعة للبيانات (DDP) معاملات النموذج عبر وحدات GPU متعددة، فتعالج حزم البيانات بالتوازي وتزامن التدرجات بعملية All-Reduce.",
      "correctIndex": 1,
      "explanationEn": "Correct Theoretical Formulation: Distributed Data Parallelism (DDP) replicates model parameters across multiple GPUs, processing distinct mini-batch slices in parallel and synchronizing gradients via All-Reduce collectives.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تكرر الموازاة الموزعة للبيانات (DDP) معاملات النموذج عبر وحدات GPU متعددة، فتعالج حزم البيانات بالتوازي وتزامن التدرجات بعملية All-Reduce.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Distributed Data Parallelism (DDP) replicates model parameters across multiple GPUs, processing distinct mini-batch slices in parallel and synchronizing gradients via All-Reduce collectives.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تكرر الموازاة الموزعة للبيانات (DDP) معاملات النموذج عبر وحدات GPU متعددة، فتعالج حزم البيانات بالتوازي وتزامن التدرجات بعملية All-Reduce.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch4_easy_11",
      "titleEn": "[EASY] Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning - Review 11",
      "titleAr": "[مستوى أساسي] ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات - سؤال 11",
      "questionEn": "[AI & Data Science Core Concept] Regarding Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning, which of the following statements is theoretically and mathematically sound? (Variant 11)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 11)",
      "optionsEn": [
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "Model quantization converts 32-bit floating-point parameters (FP32) into low-bitwidth integers (INT8 or FP4), accelerating inference execution and reducing memory bandwidth demand.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحول تكميم النماذج معاملات الأوزان ذات الدقة 32 بت العائمة (FP32) إلى أعداد صحيحة منخفضة العرض (INT8 أو FP4)، مسرعاً الاستدلال ومقلصاً استهلاك الذاكرة.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "Model quantization converts 32-bit floating-point parameters (FP32) into low-bitwidth integers (INT8 or FP4), accelerating inference execution and reducing memory bandwidth demand.",
      "correctAnswerEn": "Model quantization converts 32-bit floating-point parameters (FP32) into low-bitwidth integers (INT8 or FP4), accelerating inference execution and reducing memory bandwidth demand.",
      "correctAnswerAr": "يحول تكميم النماذج معاملات الأوزان ذات الدقة 32 بت العائمة (FP32) إلى أعداد صحيحة منخفضة العرض (INT8 أو FP4)، مسرعاً الاستدلال ومقلصاً استهلاك الذاكرة.",
      "correctIndex": 2,
      "explanationEn": "Correct Theoretical Formulation: Model quantization converts 32-bit floating-point parameters (FP32) into low-bitwidth integers (INT8 or FP4), accelerating inference execution and reducing memory bandwidth demand.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يحول تكميم النماذج معاملات الأوزان ذات الدقة 32 بت العائمة (FP32) إلى أعداد صحيحة منخفضة العرض (INT8 أو FP4)، مسرعاً الاستدلال ومقلصاً استهلاك الذاكرة.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Model quantization converts 32-bit floating-point parameters (FP32) into low-bitwidth integers (INT8 or FP4), accelerating inference execution and reducing memory bandwidth demand.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يحول تكميم النماذج معاملات الأوزان ذات الدقة 32 بت العائمة (FP32) إلى أعداد صحيحة منخفضة العرض (INT8 أو FP4)، مسرعاً الاستدلال ومقلصاً استهلاك الذاكرة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch4_easy_12",
      "titleEn": "[EASY] Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance - Review 12",
      "titleAr": "[مستوى أساسي] العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة - سؤال 12",
      "questionEn": "[AI & Data Science Core Concept] Regarding Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance, which of the following statements is theoretically and mathematically sound? (Variant 12)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 12)",
      "optionsEn": [
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "Explainable AI (XAI) techniques interpret and audit complex black-box machine learning predictions, ensuring transparency, ethical accountability, and compliance with data protection laws."
      ],
      "optionsAr": [
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "تفسر تقنيات الذكاء الاصطناعي القابل للتفسير (XAI) وتدقق تنبؤات النماذج المعقدة، محققة الشفافية والمساءلة الأخلاقية والامتثال لقوانين حماية البيانات."
      ],
      "correctAnswer": "Explainable AI (XAI) techniques interpret and audit complex black-box machine learning predictions, ensuring transparency, ethical accountability, and compliance with data protection laws.",
      "correctAnswerEn": "Explainable AI (XAI) techniques interpret and audit complex black-box machine learning predictions, ensuring transparency, ethical accountability, and compliance with data protection laws.",
      "correctAnswerAr": "تفسر تقنيات الذكاء الاصطناعي القابل للتفسير (XAI) وتدقق تنبؤات النماذج المعقدة، محققة الشفافية والمساءلة الأخلاقية والامتثال لقوانين حماية البيانات.",
      "correctIndex": 3,
      "explanationEn": "Correct Theoretical Formulation: Explainable AI (XAI) techniques interpret and audit complex black-box machine learning predictions, ensuring transparency, ethical accountability, and compliance with data protection laws.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تفسر تقنيات الذكاء الاصطناعي القابل للتفسير (XAI) وتدقق تنبؤات النماذج المعقدة، محققة الشفافية والمساءلة الأخلاقية والامتثال لقوانين حماية البيانات.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Explainable AI (XAI) techniques interpret and audit complex black-box machine learning predictions, ensuring transparency, ethical accountability, and compliance with data protection laws.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تفسر تقنيات الذكاء الاصطناعي القابل للتفسير (XAI) وتدقق تنبؤات النماذج المعقدة، محققة الشفافية والمساءلة الأخلاقية والامتثال لقوانين حماية البيانات.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch4_easy_13",
      "titleEn": "[EASY] Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO) - Review 13",
      "titleAr": "[مستوى أساسي] التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO - سؤال 13",
      "questionEn": "[AI & Data Science Core Concept] Regarding Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO), which of the following statements is theoretically and mathematically sound? (Variant 13)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 13)",
      "optionsEn": [
        "Distributed Data Parallelism (DDP) replicates model parameters across multiple GPUs, processing distinct mini-batch slices in parallel and synchronizing gradients via All-Reduce collectives.",
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "تكرر الموازاة الموزعة للبيانات (DDP) معاملات النموذج عبر وحدات GPU متعددة، فتعالج حزم البيانات بالتوازي وتزامن التدرجات بعملية All-Reduce.",
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "Distributed Data Parallelism (DDP) replicates model parameters across multiple GPUs, processing distinct mini-batch slices in parallel and synchronizing gradients via All-Reduce collectives.",
      "correctAnswerEn": "Distributed Data Parallelism (DDP) replicates model parameters across multiple GPUs, processing distinct mini-batch slices in parallel and synchronizing gradients via All-Reduce collectives.",
      "correctAnswerAr": "تكرر الموازاة الموزعة للبيانات (DDP) معاملات النموذج عبر وحدات GPU متعددة، فتعالج حزم البيانات بالتوازي وتزامن التدرجات بعملية All-Reduce.",
      "correctIndex": 0,
      "explanationEn": "Correct Theoretical Formulation: Distributed Data Parallelism (DDP) replicates model parameters across multiple GPUs, processing distinct mini-batch slices in parallel and synchronizing gradients via All-Reduce collectives.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تكرر الموازاة الموزعة للبيانات (DDP) معاملات النموذج عبر وحدات GPU متعددة، فتعالج حزم البيانات بالتوازي وتزامن التدرجات بعملية All-Reduce.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Distributed Data Parallelism (DDP) replicates model parameters across multiple GPUs, processing distinct mini-batch slices in parallel and synchronizing gradients via All-Reduce collectives.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تكرر الموازاة الموزعة للبيانات (DDP) معاملات النموذج عبر وحدات GPU متعددة، فتعالج حزم البيانات بالتوازي وتزامن التدرجات بعملية All-Reduce.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch4_easy_14",
      "titleEn": "[EASY] Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning - Review 14",
      "titleAr": "[مستوى أساسي] ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات - سؤال 14",
      "questionEn": "[AI & Data Science Core Concept] Regarding Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning, which of the following statements is theoretically and mathematically sound? (Variant 14)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 14)",
      "optionsEn": [
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "Model quantization converts 32-bit floating-point parameters (FP32) into low-bitwidth integers (INT8 or FP4), accelerating inference execution and reducing memory bandwidth demand.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "يحول تكميم النماذج معاملات الأوزان ذات الدقة 32 بت العائمة (FP32) إلى أعداد صحيحة منخفضة العرض (INT8 أو FP4)، مسرعاً الاستدلال ومقلصاً استهلاك الذاكرة.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "Model quantization converts 32-bit floating-point parameters (FP32) into low-bitwidth integers (INT8 or FP4), accelerating inference execution and reducing memory bandwidth demand.",
      "correctAnswerEn": "Model quantization converts 32-bit floating-point parameters (FP32) into low-bitwidth integers (INT8 or FP4), accelerating inference execution and reducing memory bandwidth demand.",
      "correctAnswerAr": "يحول تكميم النماذج معاملات الأوزان ذات الدقة 32 بت العائمة (FP32) إلى أعداد صحيحة منخفضة العرض (INT8 أو FP4)، مسرعاً الاستدلال ومقلصاً استهلاك الذاكرة.",
      "correctIndex": 1,
      "explanationEn": "Correct Theoretical Formulation: Model quantization converts 32-bit floating-point parameters (FP32) into low-bitwidth integers (INT8 or FP4), accelerating inference execution and reducing memory bandwidth demand.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يحول تكميم النماذج معاملات الأوزان ذات الدقة 32 بت العائمة (FP32) إلى أعداد صحيحة منخفضة العرض (INT8 أو FP4)، مسرعاً الاستدلال ومقلصاً استهلاك الذاكرة.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Model quantization converts 32-bit floating-point parameters (FP32) into low-bitwidth integers (INT8 or FP4), accelerating inference execution and reducing memory bandwidth demand.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يحول تكميم النماذج معاملات الأوزان ذات الدقة 32 بت العائمة (FP32) إلى أعداد صحيحة منخفضة العرض (INT8 أو FP4)، مسرعاً الاستدلال ومقلصاً استهلاك الذاكرة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch4_easy_15",
      "titleEn": "[EASY] Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance - Review 15",
      "titleAr": "[مستوى أساسي] العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة - سؤال 15",
      "questionEn": "[AI & Data Science Core Concept] Regarding Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance, which of the following statements is theoretically and mathematically sound? (Variant 15)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 15)",
      "optionsEn": [
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Explainable AI (XAI) techniques interpret and audit complex black-box machine learning predictions, ensuring transparency, ethical accountability, and compliance with data protection laws.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تفسر تقنيات الذكاء الاصطناعي القابل للتفسير (XAI) وتدقق تنبؤات النماذج المعقدة، محققة الشفافية والمساءلة الأخلاقية والامتثال لقوانين حماية البيانات.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "Explainable AI (XAI) techniques interpret and audit complex black-box machine learning predictions, ensuring transparency, ethical accountability, and compliance with data protection laws.",
      "correctAnswerEn": "Explainable AI (XAI) techniques interpret and audit complex black-box machine learning predictions, ensuring transparency, ethical accountability, and compliance with data protection laws.",
      "correctAnswerAr": "تفسر تقنيات الذكاء الاصطناعي القابل للتفسير (XAI) وتدقق تنبؤات النماذج المعقدة، محققة الشفافية والمساءلة الأخلاقية والامتثال لقوانين حماية البيانات.",
      "correctIndex": 2,
      "explanationEn": "Correct Theoretical Formulation: Explainable AI (XAI) techniques interpret and audit complex black-box machine learning predictions, ensuring transparency, ethical accountability, and compliance with data protection laws.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تفسر تقنيات الذكاء الاصطناعي القابل للتفسير (XAI) وتدقق تنبؤات النماذج المعقدة، محققة الشفافية والمساءلة الأخلاقية والامتثال لقوانين حماية البيانات.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Explainable AI (XAI) techniques interpret and audit complex black-box machine learning predictions, ensuring transparency, ethical accountability, and compliance with data protection laws.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تفسر تقنيات الذكاء الاصطناعي القابل للتفسير (XAI) وتدقق تنبؤات النماذج المعقدة، محققة الشفافية والمساءلة الأخلاقية والامتثال لقوانين حماية البيانات.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch4_easy_16",
      "titleEn": "[EASY] Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO) - Review 16",
      "titleAr": "[مستوى أساسي] التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO - سؤال 16",
      "questionEn": "[AI & Data Science Core Concept] Regarding Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO), which of the following statements is theoretically and mathematically sound? (Variant 16)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 16)",
      "optionsEn": [
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "Distributed Data Parallelism (DDP) replicates model parameters across multiple GPUs, processing distinct mini-batch slices in parallel and synchronizing gradients via All-Reduce collectives."
      ],
      "optionsAr": [
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تكرر الموازاة الموزعة للبيانات (DDP) معاملات النموذج عبر وحدات GPU متعددة، فتعالج حزم البيانات بالتوازي وتزامن التدرجات بعملية All-Reduce."
      ],
      "correctAnswer": "Distributed Data Parallelism (DDP) replicates model parameters across multiple GPUs, processing distinct mini-batch slices in parallel and synchronizing gradients via All-Reduce collectives.",
      "correctAnswerEn": "Distributed Data Parallelism (DDP) replicates model parameters across multiple GPUs, processing distinct mini-batch slices in parallel and synchronizing gradients via All-Reduce collectives.",
      "correctAnswerAr": "تكرر الموازاة الموزعة للبيانات (DDP) معاملات النموذج عبر وحدات GPU متعددة، فتعالج حزم البيانات بالتوازي وتزامن التدرجات بعملية All-Reduce.",
      "correctIndex": 3,
      "explanationEn": "Correct Theoretical Formulation: Distributed Data Parallelism (DDP) replicates model parameters across multiple GPUs, processing distinct mini-batch slices in parallel and synchronizing gradients via All-Reduce collectives.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تكرر الموازاة الموزعة للبيانات (DDP) معاملات النموذج عبر وحدات GPU متعددة، فتعالج حزم البيانات بالتوازي وتزامن التدرجات بعملية All-Reduce.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Distributed Data Parallelism (DDP) replicates model parameters across multiple GPUs, processing distinct mini-batch slices in parallel and synchronizing gradients via All-Reduce collectives.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تكرر الموازاة الموزعة للبيانات (DDP) معاملات النموذج عبر وحدات GPU متعددة، فتعالج حزم البيانات بالتوازي وتزامن التدرجات بعملية All-Reduce.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch4_easy_17",
      "titleEn": "[EASY] Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning - Review 17",
      "titleAr": "[مستوى أساسي] ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات - سؤال 17",
      "questionEn": "[AI & Data Science Core Concept] Regarding Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning, which of the following statements is theoretically and mathematically sound? (Variant 17)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 17)",
      "optionsEn": [
        "Model quantization converts 32-bit floating-point parameters (FP32) into low-bitwidth integers (INT8 or FP4), accelerating inference execution and reducing memory bandwidth demand.",
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "يحول تكميم النماذج معاملات الأوزان ذات الدقة 32 بت العائمة (FP32) إلى أعداد صحيحة منخفضة العرض (INT8 أو FP4)، مسرعاً الاستدلال ومقلصاً استهلاك الذاكرة.",
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "Model quantization converts 32-bit floating-point parameters (FP32) into low-bitwidth integers (INT8 or FP4), accelerating inference execution and reducing memory bandwidth demand.",
      "correctAnswerEn": "Model quantization converts 32-bit floating-point parameters (FP32) into low-bitwidth integers (INT8 or FP4), accelerating inference execution and reducing memory bandwidth demand.",
      "correctAnswerAr": "يحول تكميم النماذج معاملات الأوزان ذات الدقة 32 بت العائمة (FP32) إلى أعداد صحيحة منخفضة العرض (INT8 أو FP4)، مسرعاً الاستدلال ومقلصاً استهلاك الذاكرة.",
      "correctIndex": 0,
      "explanationEn": "Correct Theoretical Formulation: Model quantization converts 32-bit floating-point parameters (FP32) into low-bitwidth integers (INT8 or FP4), accelerating inference execution and reducing memory bandwidth demand.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يحول تكميم النماذج معاملات الأوزان ذات الدقة 32 بت العائمة (FP32) إلى أعداد صحيحة منخفضة العرض (INT8 أو FP4)، مسرعاً الاستدلال ومقلصاً استهلاك الذاكرة.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Model quantization converts 32-bit floating-point parameters (FP32) into low-bitwidth integers (INT8 or FP4), accelerating inference execution and reducing memory bandwidth demand.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يحول تكميم النماذج معاملات الأوزان ذات الدقة 32 بت العائمة (FP32) إلى أعداد صحيحة منخفضة العرض (INT8 أو FP4)، مسرعاً الاستدلال ومقلصاً استهلاك الذاكرة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch4_easy_18",
      "titleEn": "[EASY] Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance - Review 18",
      "titleAr": "[مستوى أساسي] العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة - سؤال 18",
      "questionEn": "[AI & Data Science Core Concept] Regarding Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance, which of the following statements is theoretically and mathematically sound? (Variant 18)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 18)",
      "optionsEn": [
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "Explainable AI (XAI) techniques interpret and audit complex black-box machine learning predictions, ensuring transparency, ethical accountability, and compliance with data protection laws.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تفسر تقنيات الذكاء الاصطناعي القابل للتفسير (XAI) وتدقق تنبؤات النماذج المعقدة، محققة الشفافية والمساءلة الأخلاقية والامتثال لقوانين حماية البيانات.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "Explainable AI (XAI) techniques interpret and audit complex black-box machine learning predictions, ensuring transparency, ethical accountability, and compliance with data protection laws.",
      "correctAnswerEn": "Explainable AI (XAI) techniques interpret and audit complex black-box machine learning predictions, ensuring transparency, ethical accountability, and compliance with data protection laws.",
      "correctAnswerAr": "تفسر تقنيات الذكاء الاصطناعي القابل للتفسير (XAI) وتدقق تنبؤات النماذج المعقدة، محققة الشفافية والمساءلة الأخلاقية والامتثال لقوانين حماية البيانات.",
      "correctIndex": 1,
      "explanationEn": "Correct Theoretical Formulation: Explainable AI (XAI) techniques interpret and audit complex black-box machine learning predictions, ensuring transparency, ethical accountability, and compliance with data protection laws.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تفسر تقنيات الذكاء الاصطناعي القابل للتفسير (XAI) وتدقق تنبؤات النماذج المعقدة، محققة الشفافية والمساءلة الأخلاقية والامتثال لقوانين حماية البيانات.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Explainable AI (XAI) techniques interpret and audit complex black-box machine learning predictions, ensuring transparency, ethical accountability, and compliance with data protection laws.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تفسر تقنيات الذكاء الاصطناعي القابل للتفسير (XAI) وتدقق تنبؤات النماذج المعقدة، محققة الشفافية والمساءلة الأخلاقية والامتثال لقوانين حماية البيانات.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch4_easy_19",
      "titleEn": "[EASY] Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO) - Review 19",
      "titleAr": "[مستوى أساسي] التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO - سؤال 19",
      "questionEn": "[AI & Data Science Core Concept] Regarding Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO), which of the following statements is theoretically and mathematically sound? (Variant 19)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 19)",
      "optionsEn": [
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "Distributed Data Parallelism (DDP) replicates model parameters across multiple GPUs, processing distinct mini-batch slices in parallel and synchronizing gradients via All-Reduce collectives.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تكرر الموازاة الموزعة للبيانات (DDP) معاملات النموذج عبر وحدات GPU متعددة، فتعالج حزم البيانات بالتوازي وتزامن التدرجات بعملية All-Reduce.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "Distributed Data Parallelism (DDP) replicates model parameters across multiple GPUs, processing distinct mini-batch slices in parallel and synchronizing gradients via All-Reduce collectives.",
      "correctAnswerEn": "Distributed Data Parallelism (DDP) replicates model parameters across multiple GPUs, processing distinct mini-batch slices in parallel and synchronizing gradients via All-Reduce collectives.",
      "correctAnswerAr": "تكرر الموازاة الموزعة للبيانات (DDP) معاملات النموذج عبر وحدات GPU متعددة، فتعالج حزم البيانات بالتوازي وتزامن التدرجات بعملية All-Reduce.",
      "correctIndex": 2,
      "explanationEn": "Correct Theoretical Formulation: Distributed Data Parallelism (DDP) replicates model parameters across multiple GPUs, processing distinct mini-batch slices in parallel and synchronizing gradients via All-Reduce collectives.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تكرر الموازاة الموزعة للبيانات (DDP) معاملات النموذج عبر وحدات GPU متعددة، فتعالج حزم البيانات بالتوازي وتزامن التدرجات بعملية All-Reduce.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Distributed Data Parallelism (DDP) replicates model parameters across multiple GPUs, processing distinct mini-batch slices in parallel and synchronizing gradients via All-Reduce collectives.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تكرر الموازاة الموزعة للبيانات (DDP) معاملات النموذج عبر وحدات GPU متعددة، فتعالج حزم البيانات بالتوازي وتزامن التدرجات بعملية All-Reduce.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch4_easy_20",
      "titleEn": "[EASY] Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning - Review 20",
      "titleAr": "[مستوى أساسي] ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات - سؤال 20",
      "questionEn": "[AI & Data Science Core Concept] Regarding Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning, which of the following statements is theoretically and mathematically sound? (Variant 20)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 20)",
      "optionsEn": [
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Model quantization converts 32-bit floating-point parameters (FP32) into low-bitwidth integers (INT8 or FP4), accelerating inference execution and reducing memory bandwidth demand."
      ],
      "optionsAr": [
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يحول تكميم النماذج معاملات الأوزان ذات الدقة 32 بت العائمة (FP32) إلى أعداد صحيحة منخفضة العرض (INT8 أو FP4)، مسرعاً الاستدلال ومقلصاً استهلاك الذاكرة."
      ],
      "correctAnswer": "Model quantization converts 32-bit floating-point parameters (FP32) into low-bitwidth integers (INT8 or FP4), accelerating inference execution and reducing memory bandwidth demand.",
      "correctAnswerEn": "Model quantization converts 32-bit floating-point parameters (FP32) into low-bitwidth integers (INT8 or FP4), accelerating inference execution and reducing memory bandwidth demand.",
      "correctAnswerAr": "يحول تكميم النماذج معاملات الأوزان ذات الدقة 32 بت العائمة (FP32) إلى أعداد صحيحة منخفضة العرض (INT8 أو FP4)، مسرعاً الاستدلال ومقلصاً استهلاك الذاكرة.",
      "correctIndex": 3,
      "explanationEn": "Correct Theoretical Formulation: Model quantization converts 32-bit floating-point parameters (FP32) into low-bitwidth integers (INT8 or FP4), accelerating inference execution and reducing memory bandwidth demand.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يحول تكميم النماذج معاملات الأوزان ذات الدقة 32 بت العائمة (FP32) إلى أعداد صحيحة منخفضة العرض (INT8 أو FP4)، مسرعاً الاستدلال ومقلصاً استهلاك الذاكرة.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Model quantization converts 32-bit floating-point parameters (FP32) into low-bitwidth integers (INT8 or FP4), accelerating inference execution and reducing memory bandwidth demand.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يحول تكميم النماذج معاملات الأوزان ذات الدقة 32 بت العائمة (FP32) إلى أعداد صحيحة منخفضة العرض (INT8 أو FP4)، مسرعاً الاستدلال ومقلصاً استهلاك الذاكرة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch4_easy_21",
      "titleEn": "[EASY] Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance - Review 21",
      "titleAr": "[مستوى أساسي] العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة - سؤال 21",
      "questionEn": "[AI & Data Science Core Concept] Regarding Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance, which of the following statements is theoretically and mathematically sound? (Variant 21)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 21)",
      "optionsEn": [
        "Explainable AI (XAI) techniques interpret and audit complex black-box machine learning predictions, ensuring transparency, ethical accountability, and compliance with data protection laws.",
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "تفسر تقنيات الذكاء الاصطناعي القابل للتفسير (XAI) وتدقق تنبؤات النماذج المعقدة، محققة الشفافية والمساءلة الأخلاقية والامتثال لقوانين حماية البيانات.",
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "Explainable AI (XAI) techniques interpret and audit complex black-box machine learning predictions, ensuring transparency, ethical accountability, and compliance with data protection laws.",
      "correctAnswerEn": "Explainable AI (XAI) techniques interpret and audit complex black-box machine learning predictions, ensuring transparency, ethical accountability, and compliance with data protection laws.",
      "correctAnswerAr": "تفسر تقنيات الذكاء الاصطناعي القابل للتفسير (XAI) وتدقق تنبؤات النماذج المعقدة، محققة الشفافية والمساءلة الأخلاقية والامتثال لقوانين حماية البيانات.",
      "correctIndex": 0,
      "explanationEn": "Correct Theoretical Formulation: Explainable AI (XAI) techniques interpret and audit complex black-box machine learning predictions, ensuring transparency, ethical accountability, and compliance with data protection laws.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تفسر تقنيات الذكاء الاصطناعي القابل للتفسير (XAI) وتدقق تنبؤات النماذج المعقدة، محققة الشفافية والمساءلة الأخلاقية والامتثال لقوانين حماية البيانات.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Explainable AI (XAI) techniques interpret and audit complex black-box machine learning predictions, ensuring transparency, ethical accountability, and compliance with data protection laws.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تفسر تقنيات الذكاء الاصطناعي القابل للتفسير (XAI) وتدقق تنبؤات النماذج المعقدة، محققة الشفافية والمساءلة الأخلاقية والامتثال لقوانين حماية البيانات.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch4_easy_22",
      "titleEn": "[EASY] Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO) - Review 22",
      "titleAr": "[مستوى أساسي] التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO - سؤال 22",
      "questionEn": "[AI & Data Science Core Concept] Regarding Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO), which of the following statements is theoretically and mathematically sound? (Variant 22)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 22)",
      "optionsEn": [
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "Distributed Data Parallelism (DDP) replicates model parameters across multiple GPUs, processing distinct mini-batch slices in parallel and synchronizing gradients via All-Reduce collectives.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تكرر الموازاة الموزعة للبيانات (DDP) معاملات النموذج عبر وحدات GPU متعددة، فتعالج حزم البيانات بالتوازي وتزامن التدرجات بعملية All-Reduce.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "Distributed Data Parallelism (DDP) replicates model parameters across multiple GPUs, processing distinct mini-batch slices in parallel and synchronizing gradients via All-Reduce collectives.",
      "correctAnswerEn": "Distributed Data Parallelism (DDP) replicates model parameters across multiple GPUs, processing distinct mini-batch slices in parallel and synchronizing gradients via All-Reduce collectives.",
      "correctAnswerAr": "تكرر الموازاة الموزعة للبيانات (DDP) معاملات النموذج عبر وحدات GPU متعددة، فتعالج حزم البيانات بالتوازي وتزامن التدرجات بعملية All-Reduce.",
      "correctIndex": 1,
      "explanationEn": "Correct Theoretical Formulation: Distributed Data Parallelism (DDP) replicates model parameters across multiple GPUs, processing distinct mini-batch slices in parallel and synchronizing gradients via All-Reduce collectives.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تكرر الموازاة الموزعة للبيانات (DDP) معاملات النموذج عبر وحدات GPU متعددة، فتعالج حزم البيانات بالتوازي وتزامن التدرجات بعملية All-Reduce.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Distributed Data Parallelism (DDP) replicates model parameters across multiple GPUs, processing distinct mini-batch slices in parallel and synchronizing gradients via All-Reduce collectives.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تكرر الموازاة الموزعة للبيانات (DDP) معاملات النموذج عبر وحدات GPU متعددة، فتعالج حزم البيانات بالتوازي وتزامن التدرجات بعملية All-Reduce.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch4_easy_23",
      "titleEn": "[EASY] Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning - Review 23",
      "titleAr": "[مستوى أساسي] ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات - سؤال 23",
      "questionEn": "[AI & Data Science Core Concept] Regarding Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning, which of the following statements is theoretically and mathematically sound? (Variant 23)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 23)",
      "optionsEn": [
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Model quantization converts 32-bit floating-point parameters (FP32) into low-bitwidth integers (INT8 or FP4), accelerating inference execution and reducing memory bandwidth demand.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "يحول تكميم النماذج معاملات الأوزان ذات الدقة 32 بت العائمة (FP32) إلى أعداد صحيحة منخفضة العرض (INT8 أو FP4)، مسرعاً الاستدلال ومقلصاً استهلاك الذاكرة.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "Model quantization converts 32-bit floating-point parameters (FP32) into low-bitwidth integers (INT8 or FP4), accelerating inference execution and reducing memory bandwidth demand.",
      "correctAnswerEn": "Model quantization converts 32-bit floating-point parameters (FP32) into low-bitwidth integers (INT8 or FP4), accelerating inference execution and reducing memory bandwidth demand.",
      "correctAnswerAr": "يحول تكميم النماذج معاملات الأوزان ذات الدقة 32 بت العائمة (FP32) إلى أعداد صحيحة منخفضة العرض (INT8 أو FP4)، مسرعاً الاستدلال ومقلصاً استهلاك الذاكرة.",
      "correctIndex": 2,
      "explanationEn": "Correct Theoretical Formulation: Model quantization converts 32-bit floating-point parameters (FP32) into low-bitwidth integers (INT8 or FP4), accelerating inference execution and reducing memory bandwidth demand.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يحول تكميم النماذج معاملات الأوزان ذات الدقة 32 بت العائمة (FP32) إلى أعداد صحيحة منخفضة العرض (INT8 أو FP4)، مسرعاً الاستدلال ومقلصاً استهلاك الذاكرة.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Model quantization converts 32-bit floating-point parameters (FP32) into low-bitwidth integers (INT8 or FP4), accelerating inference execution and reducing memory bandwidth demand.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يحول تكميم النماذج معاملات الأوزان ذات الدقة 32 بت العائمة (FP32) إلى أعداد صحيحة منخفضة العرض (INT8 أو FP4)، مسرعاً الاستدلال ومقلصاً استهلاك الذاكرة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch4_easy_24",
      "titleEn": "[EASY] Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance - Review 24",
      "titleAr": "[مستوى أساسي] العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة - سؤال 24",
      "questionEn": "[AI & Data Science Core Concept] Regarding Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance, which of the following statements is theoretically and mathematically sound? (Variant 24)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 24)",
      "optionsEn": [
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "Explainable AI (XAI) techniques interpret and audit complex black-box machine learning predictions, ensuring transparency, ethical accountability, and compliance with data protection laws."
      ],
      "optionsAr": [
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تفسر تقنيات الذكاء الاصطناعي القابل للتفسير (XAI) وتدقق تنبؤات النماذج المعقدة، محققة الشفافية والمساءلة الأخلاقية والامتثال لقوانين حماية البيانات."
      ],
      "correctAnswer": "Explainable AI (XAI) techniques interpret and audit complex black-box machine learning predictions, ensuring transparency, ethical accountability, and compliance with data protection laws.",
      "correctAnswerEn": "Explainable AI (XAI) techniques interpret and audit complex black-box machine learning predictions, ensuring transparency, ethical accountability, and compliance with data protection laws.",
      "correctAnswerAr": "تفسر تقنيات الذكاء الاصطناعي القابل للتفسير (XAI) وتدقق تنبؤات النماذج المعقدة، محققة الشفافية والمساءلة الأخلاقية والامتثال لقوانين حماية البيانات.",
      "correctIndex": 3,
      "explanationEn": "Correct Theoretical Formulation: Explainable AI (XAI) techniques interpret and audit complex black-box machine learning predictions, ensuring transparency, ethical accountability, and compliance with data protection laws.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تفسر تقنيات الذكاء الاصطناعي القابل للتفسير (XAI) وتدقق تنبؤات النماذج المعقدة، محققة الشفافية والمساءلة الأخلاقية والامتثال لقوانين حماية البيانات.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Explainable AI (XAI) techniques interpret and audit complex black-box machine learning predictions, ensuring transparency, ethical accountability, and compliance with data protection laws.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تفسر تقنيات الذكاء الاصطناعي القابل للتفسير (XAI) وتدقق تنبؤات النماذج المعقدة، محققة الشفافية والمساءلة الأخلاقية والامتثال لقوانين حماية البيانات.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch4_easy_25",
      "titleEn": "[EASY] Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO) - Review 25",
      "titleAr": "[مستوى أساسي] التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO - سؤال 25",
      "questionEn": "[AI & Data Science Core Concept] Regarding Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO), which of the following statements is theoretically and mathematically sound? (Variant 25)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 25)",
      "optionsEn": [
        "Distributed Data Parallelism (DDP) replicates model parameters across multiple GPUs, processing distinct mini-batch slices in parallel and synchronizing gradients via All-Reduce collectives.",
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تكرر الموازاة الموزعة للبيانات (DDP) معاملات النموذج عبر وحدات GPU متعددة، فتعالج حزم البيانات بالتوازي وتزامن التدرجات بعملية All-Reduce.",
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "Distributed Data Parallelism (DDP) replicates model parameters across multiple GPUs, processing distinct mini-batch slices in parallel and synchronizing gradients via All-Reduce collectives.",
      "correctAnswerEn": "Distributed Data Parallelism (DDP) replicates model parameters across multiple GPUs, processing distinct mini-batch slices in parallel and synchronizing gradients via All-Reduce collectives.",
      "correctAnswerAr": "تكرر الموازاة الموزعة للبيانات (DDP) معاملات النموذج عبر وحدات GPU متعددة، فتعالج حزم البيانات بالتوازي وتزامن التدرجات بعملية All-Reduce.",
      "correctIndex": 0,
      "explanationEn": "Correct Theoretical Formulation: Distributed Data Parallelism (DDP) replicates model parameters across multiple GPUs, processing distinct mini-batch slices in parallel and synchronizing gradients via All-Reduce collectives.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تكرر الموازاة الموزعة للبيانات (DDP) معاملات النموذج عبر وحدات GPU متعددة، فتعالج حزم البيانات بالتوازي وتزامن التدرجات بعملية All-Reduce.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Distributed Data Parallelism (DDP) replicates model parameters across multiple GPUs, processing distinct mini-batch slices in parallel and synchronizing gradients via All-Reduce collectives.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تكرر الموازاة الموزعة للبيانات (DDP) معاملات النموذج عبر وحدات GPU متعددة، فتعالج حزم البيانات بالتوازي وتزامن التدرجات بعملية All-Reduce.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch4_easy_26",
      "titleEn": "[EASY] Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning - Review 26",
      "titleAr": "[مستوى أساسي] ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات - سؤال 26",
      "questionEn": "[AI & Data Science Core Concept] Regarding Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning, which of the following statements is theoretically and mathematically sound? (Variant 26)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 26)",
      "optionsEn": [
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Model quantization converts 32-bit floating-point parameters (FP32) into low-bitwidth integers (INT8 or FP4), accelerating inference execution and reducing memory bandwidth demand.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يحول تكميم النماذج معاملات الأوزان ذات الدقة 32 بت العائمة (FP32) إلى أعداد صحيحة منخفضة العرض (INT8 أو FP4)، مسرعاً الاستدلال ومقلصاً استهلاك الذاكرة.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "Model quantization converts 32-bit floating-point parameters (FP32) into low-bitwidth integers (INT8 or FP4), accelerating inference execution and reducing memory bandwidth demand.",
      "correctAnswerEn": "Model quantization converts 32-bit floating-point parameters (FP32) into low-bitwidth integers (INT8 or FP4), accelerating inference execution and reducing memory bandwidth demand.",
      "correctAnswerAr": "يحول تكميم النماذج معاملات الأوزان ذات الدقة 32 بت العائمة (FP32) إلى أعداد صحيحة منخفضة العرض (INT8 أو FP4)، مسرعاً الاستدلال ومقلصاً استهلاك الذاكرة.",
      "correctIndex": 1,
      "explanationEn": "Correct Theoretical Formulation: Model quantization converts 32-bit floating-point parameters (FP32) into low-bitwidth integers (INT8 or FP4), accelerating inference execution and reducing memory bandwidth demand.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يحول تكميم النماذج معاملات الأوزان ذات الدقة 32 بت العائمة (FP32) إلى أعداد صحيحة منخفضة العرض (INT8 أو FP4)، مسرعاً الاستدلال ومقلصاً استهلاك الذاكرة.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Model quantization converts 32-bit floating-point parameters (FP32) into low-bitwidth integers (INT8 or FP4), accelerating inference execution and reducing memory bandwidth demand.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يحول تكميم النماذج معاملات الأوزان ذات الدقة 32 بت العائمة (FP32) إلى أعداد صحيحة منخفضة العرض (INT8 أو FP4)، مسرعاً الاستدلال ومقلصاً استهلاك الذاكرة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch4_easy_27",
      "titleEn": "[EASY] Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance - Review 27",
      "titleAr": "[مستوى أساسي] العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة - سؤال 27",
      "questionEn": "[AI & Data Science Core Concept] Regarding Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance, which of the following statements is theoretically and mathematically sound? (Variant 27)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 27)",
      "optionsEn": [
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Explainable AI (XAI) techniques interpret and audit complex black-box machine learning predictions, ensuring transparency, ethical accountability, and compliance with data protection laws.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تفسر تقنيات الذكاء الاصطناعي القابل للتفسير (XAI) وتدقق تنبؤات النماذج المعقدة، محققة الشفافية والمساءلة الأخلاقية والامتثال لقوانين حماية البيانات.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "Explainable AI (XAI) techniques interpret and audit complex black-box machine learning predictions, ensuring transparency, ethical accountability, and compliance with data protection laws.",
      "correctAnswerEn": "Explainable AI (XAI) techniques interpret and audit complex black-box machine learning predictions, ensuring transparency, ethical accountability, and compliance with data protection laws.",
      "correctAnswerAr": "تفسر تقنيات الذكاء الاصطناعي القابل للتفسير (XAI) وتدقق تنبؤات النماذج المعقدة، محققة الشفافية والمساءلة الأخلاقية والامتثال لقوانين حماية البيانات.",
      "correctIndex": 2,
      "explanationEn": "Correct Theoretical Formulation: Explainable AI (XAI) techniques interpret and audit complex black-box machine learning predictions, ensuring transparency, ethical accountability, and compliance with data protection laws.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تفسر تقنيات الذكاء الاصطناعي القابل للتفسير (XAI) وتدقق تنبؤات النماذج المعقدة، محققة الشفافية والمساءلة الأخلاقية والامتثال لقوانين حماية البيانات.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Explainable AI (XAI) techniques interpret and audit complex black-box machine learning predictions, ensuring transparency, ethical accountability, and compliance with data protection laws.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تفسر تقنيات الذكاء الاصطناعي القابل للتفسير (XAI) وتدقق تنبؤات النماذج المعقدة، محققة الشفافية والمساءلة الأخلاقية والامتثال لقوانين حماية البيانات.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch4_easy_28",
      "titleEn": "[EASY] Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO) - Review 28",
      "titleAr": "[مستوى أساسي] التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO - سؤال 28",
      "questionEn": "[AI & Data Science Core Concept] Regarding Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO), which of the following statements is theoretically and mathematically sound? (Variant 28)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 28)",
      "optionsEn": [
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "Distributed Data Parallelism (DDP) replicates model parameters across multiple GPUs, processing distinct mini-batch slices in parallel and synchronizing gradients via All-Reduce collectives."
      ],
      "optionsAr": [
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "تكرر الموازاة الموزعة للبيانات (DDP) معاملات النموذج عبر وحدات GPU متعددة، فتعالج حزم البيانات بالتوازي وتزامن التدرجات بعملية All-Reduce."
      ],
      "correctAnswer": "Distributed Data Parallelism (DDP) replicates model parameters across multiple GPUs, processing distinct mini-batch slices in parallel and synchronizing gradients via All-Reduce collectives.",
      "correctAnswerEn": "Distributed Data Parallelism (DDP) replicates model parameters across multiple GPUs, processing distinct mini-batch slices in parallel and synchronizing gradients via All-Reduce collectives.",
      "correctAnswerAr": "تكرر الموازاة الموزعة للبيانات (DDP) معاملات النموذج عبر وحدات GPU متعددة، فتعالج حزم البيانات بالتوازي وتزامن التدرجات بعملية All-Reduce.",
      "correctIndex": 3,
      "explanationEn": "Correct Theoretical Formulation: Distributed Data Parallelism (DDP) replicates model parameters across multiple GPUs, processing distinct mini-batch slices in parallel and synchronizing gradients via All-Reduce collectives.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تكرر الموازاة الموزعة للبيانات (DDP) معاملات النموذج عبر وحدات GPU متعددة، فتعالج حزم البيانات بالتوازي وتزامن التدرجات بعملية All-Reduce.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Distributed Data Parallelism (DDP) replicates model parameters across multiple GPUs, processing distinct mini-batch slices in parallel and synchronizing gradients via All-Reduce collectives.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تكرر الموازاة الموزعة للبيانات (DDP) معاملات النموذج عبر وحدات GPU متعددة، فتعالج حزم البيانات بالتوازي وتزامن التدرجات بعملية All-Reduce.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch4_easy_29",
      "titleEn": "[EASY] Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning - Review 29",
      "titleAr": "[مستوى أساسي] ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات - سؤال 29",
      "questionEn": "[AI & Data Science Core Concept] Regarding Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning, which of the following statements is theoretically and mathematically sound? (Variant 29)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 29)",
      "optionsEn": [
        "Model quantization converts 32-bit floating-point parameters (FP32) into low-bitwidth integers (INT8 or FP4), accelerating inference execution and reducing memory bandwidth demand.",
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "يحول تكميم النماذج معاملات الأوزان ذات الدقة 32 بت العائمة (FP32) إلى أعداد صحيحة منخفضة العرض (INT8 أو FP4)، مسرعاً الاستدلال ومقلصاً استهلاك الذاكرة.",
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "Model quantization converts 32-bit floating-point parameters (FP32) into low-bitwidth integers (INT8 or FP4), accelerating inference execution and reducing memory bandwidth demand.",
      "correctAnswerEn": "Model quantization converts 32-bit floating-point parameters (FP32) into low-bitwidth integers (INT8 or FP4), accelerating inference execution and reducing memory bandwidth demand.",
      "correctAnswerAr": "يحول تكميم النماذج معاملات الأوزان ذات الدقة 32 بت العائمة (FP32) إلى أعداد صحيحة منخفضة العرض (INT8 أو FP4)، مسرعاً الاستدلال ومقلصاً استهلاك الذاكرة.",
      "correctIndex": 0,
      "explanationEn": "Correct Theoretical Formulation: Model quantization converts 32-bit floating-point parameters (FP32) into low-bitwidth integers (INT8 or FP4), accelerating inference execution and reducing memory bandwidth demand.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يحول تكميم النماذج معاملات الأوزان ذات الدقة 32 بت العائمة (FP32) إلى أعداد صحيحة منخفضة العرض (INT8 أو FP4)، مسرعاً الاستدلال ومقلصاً استهلاك الذاكرة.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Model quantization converts 32-bit floating-point parameters (FP32) into low-bitwidth integers (INT8 or FP4), accelerating inference execution and reducing memory bandwidth demand.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يحول تكميم النماذج معاملات الأوزان ذات الدقة 32 بت العائمة (FP32) إلى أعداد صحيحة منخفضة العرض (INT8 أو FP4)، مسرعاً الاستدلال ومقلصاً استهلاك الذاكرة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch4_easy_30",
      "titleEn": "[EASY] Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance - Review 30",
      "titleAr": "[مستوى أساسي] العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة - سؤال 30",
      "questionEn": "[AI & Data Science Core Concept] Regarding Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance, which of the following statements is theoretically and mathematically sound? (Variant 30)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 30)",
      "optionsEn": [
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "Explainable AI (XAI) techniques interpret and audit complex black-box machine learning predictions, ensuring transparency, ethical accountability, and compliance with data protection laws.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تفسر تقنيات الذكاء الاصطناعي القابل للتفسير (XAI) وتدقق تنبؤات النماذج المعقدة، محققة الشفافية والمساءلة الأخلاقية والامتثال لقوانين حماية البيانات.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "Explainable AI (XAI) techniques interpret and audit complex black-box machine learning predictions, ensuring transparency, ethical accountability, and compliance with data protection laws.",
      "correctAnswerEn": "Explainable AI (XAI) techniques interpret and audit complex black-box machine learning predictions, ensuring transparency, ethical accountability, and compliance with data protection laws.",
      "correctAnswerAr": "تفسر تقنيات الذكاء الاصطناعي القابل للتفسير (XAI) وتدقق تنبؤات النماذج المعقدة، محققة الشفافية والمساءلة الأخلاقية والامتثال لقوانين حماية البيانات.",
      "correctIndex": 1,
      "explanationEn": "Correct Theoretical Formulation: Explainable AI (XAI) techniques interpret and audit complex black-box machine learning predictions, ensuring transparency, ethical accountability, and compliance with data protection laws.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تفسر تقنيات الذكاء الاصطناعي القابل للتفسير (XAI) وتدقق تنبؤات النماذج المعقدة، محققة الشفافية والمساءلة الأخلاقية والامتثال لقوانين حماية البيانات.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Explainable AI (XAI) techniques interpret and audit complex black-box machine learning predictions, ensuring transparency, ethical accountability, and compliance with data protection laws.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تفسر تقنيات الذكاء الاصطناعي القابل للتفسير (XAI) وتدقق تنبؤات النماذج المعقدة، محققة الشفافية والمساءلة الأخلاقية والامتثال لقوانين حماية البيانات.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch4_easy_31",
      "titleEn": "[EASY] Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO) - Review 31",
      "titleAr": "[مستوى أساسي] التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO - سؤال 31",
      "questionEn": "[AI & Data Science Core Concept] Regarding Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO), which of the following statements is theoretically and mathematically sound? (Variant 31)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 31)",
      "optionsEn": [
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "Distributed Data Parallelism (DDP) replicates model parameters across multiple GPUs, processing distinct mini-batch slices in parallel and synchronizing gradients via All-Reduce collectives.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "تكرر الموازاة الموزعة للبيانات (DDP) معاملات النموذج عبر وحدات GPU متعددة، فتعالج حزم البيانات بالتوازي وتزامن التدرجات بعملية All-Reduce.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "Distributed Data Parallelism (DDP) replicates model parameters across multiple GPUs, processing distinct mini-batch slices in parallel and synchronizing gradients via All-Reduce collectives.",
      "correctAnswerEn": "Distributed Data Parallelism (DDP) replicates model parameters across multiple GPUs, processing distinct mini-batch slices in parallel and synchronizing gradients via All-Reduce collectives.",
      "correctAnswerAr": "تكرر الموازاة الموزعة للبيانات (DDP) معاملات النموذج عبر وحدات GPU متعددة، فتعالج حزم البيانات بالتوازي وتزامن التدرجات بعملية All-Reduce.",
      "correctIndex": 2,
      "explanationEn": "Correct Theoretical Formulation: Distributed Data Parallelism (DDP) replicates model parameters across multiple GPUs, processing distinct mini-batch slices in parallel and synchronizing gradients via All-Reduce collectives.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تكرر الموازاة الموزعة للبيانات (DDP) معاملات النموذج عبر وحدات GPU متعددة، فتعالج حزم البيانات بالتوازي وتزامن التدرجات بعملية All-Reduce.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Distributed Data Parallelism (DDP) replicates model parameters across multiple GPUs, processing distinct mini-batch slices in parallel and synchronizing gradients via All-Reduce collectives.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تكرر الموازاة الموزعة للبيانات (DDP) معاملات النموذج عبر وحدات GPU متعددة، فتعالج حزم البيانات بالتوازي وتزامن التدرجات بعملية All-Reduce.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch4_easy_32",
      "titleEn": "[EASY] Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning - Review 32",
      "titleAr": "[مستوى أساسي] ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات - سؤال 32",
      "questionEn": "[AI & Data Science Core Concept] Regarding Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning, which of the following statements is theoretically and mathematically sound? (Variant 32)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 32)",
      "optionsEn": [
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "Model quantization converts 32-bit floating-point parameters (FP32) into low-bitwidth integers (INT8 or FP4), accelerating inference execution and reducing memory bandwidth demand."
      ],
      "optionsAr": [
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "يحول تكميم النماذج معاملات الأوزان ذات الدقة 32 بت العائمة (FP32) إلى أعداد صحيحة منخفضة العرض (INT8 أو FP4)، مسرعاً الاستدلال ومقلصاً استهلاك الذاكرة."
      ],
      "correctAnswer": "Model quantization converts 32-bit floating-point parameters (FP32) into low-bitwidth integers (INT8 or FP4), accelerating inference execution and reducing memory bandwidth demand.",
      "correctAnswerEn": "Model quantization converts 32-bit floating-point parameters (FP32) into low-bitwidth integers (INT8 or FP4), accelerating inference execution and reducing memory bandwidth demand.",
      "correctAnswerAr": "يحول تكميم النماذج معاملات الأوزان ذات الدقة 32 بت العائمة (FP32) إلى أعداد صحيحة منخفضة العرض (INT8 أو FP4)، مسرعاً الاستدلال ومقلصاً استهلاك الذاكرة.",
      "correctIndex": 3,
      "explanationEn": "Correct Theoretical Formulation: Model quantization converts 32-bit floating-point parameters (FP32) into low-bitwidth integers (INT8 or FP4), accelerating inference execution and reducing memory bandwidth demand.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يحول تكميم النماذج معاملات الأوزان ذات الدقة 32 بت العائمة (FP32) إلى أعداد صحيحة منخفضة العرض (INT8 أو FP4)، مسرعاً الاستدلال ومقلصاً استهلاك الذاكرة.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Model quantization converts 32-bit floating-point parameters (FP32) into low-bitwidth integers (INT8 or FP4), accelerating inference execution and reducing memory bandwidth demand.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يحول تكميم النماذج معاملات الأوزان ذات الدقة 32 بت العائمة (FP32) إلى أعداد صحيحة منخفضة العرض (INT8 أو FP4)، مسرعاً الاستدلال ومقلصاً استهلاك الذاكرة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch4_easy_33",
      "titleEn": "[EASY] Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance - Review 33",
      "titleAr": "[مستوى أساسي] العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة - سؤال 33",
      "questionEn": "[AI & Data Science Core Concept] Regarding Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance, which of the following statements is theoretically and mathematically sound? (Variant 33)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 33)",
      "optionsEn": [
        "Explainable AI (XAI) techniques interpret and audit complex black-box machine learning predictions, ensuring transparency, ethical accountability, and compliance with data protection laws.",
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "تفسر تقنيات الذكاء الاصطناعي القابل للتفسير (XAI) وتدقق تنبؤات النماذج المعقدة، محققة الشفافية والمساءلة الأخلاقية والامتثال لقوانين حماية البيانات.",
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "Explainable AI (XAI) techniques interpret and audit complex black-box machine learning predictions, ensuring transparency, ethical accountability, and compliance with data protection laws.",
      "correctAnswerEn": "Explainable AI (XAI) techniques interpret and audit complex black-box machine learning predictions, ensuring transparency, ethical accountability, and compliance with data protection laws.",
      "correctAnswerAr": "تفسر تقنيات الذكاء الاصطناعي القابل للتفسير (XAI) وتدقق تنبؤات النماذج المعقدة، محققة الشفافية والمساءلة الأخلاقية والامتثال لقوانين حماية البيانات.",
      "correctIndex": 0,
      "explanationEn": "Correct Theoretical Formulation: Explainable AI (XAI) techniques interpret and audit complex black-box machine learning predictions, ensuring transparency, ethical accountability, and compliance with data protection laws.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تفسر تقنيات الذكاء الاصطناعي القابل للتفسير (XAI) وتدقق تنبؤات النماذج المعقدة، محققة الشفافية والمساءلة الأخلاقية والامتثال لقوانين حماية البيانات.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Explainable AI (XAI) techniques interpret and audit complex black-box machine learning predictions, ensuring transparency, ethical accountability, and compliance with data protection laws.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تفسر تقنيات الذكاء الاصطناعي القابل للتفسير (XAI) وتدقق تنبؤات النماذج المعقدة، محققة الشفافية والمساءلة الأخلاقية والامتثال لقوانين حماية البيانات.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch4_easy_34",
      "titleEn": "[EASY] Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO) - Review 34",
      "titleAr": "[مستوى أساسي] التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO - سؤال 34",
      "questionEn": "[AI & Data Science Core Concept] Regarding Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO), which of the following statements is theoretically and mathematically sound? (Variant 34)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 34)",
      "optionsEn": [
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "Distributed Data Parallelism (DDP) replicates model parameters across multiple GPUs, processing distinct mini-batch slices in parallel and synchronizing gradients via All-Reduce collectives.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "تكرر الموازاة الموزعة للبيانات (DDP) معاملات النموذج عبر وحدات GPU متعددة، فتعالج حزم البيانات بالتوازي وتزامن التدرجات بعملية All-Reduce.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "Distributed Data Parallelism (DDP) replicates model parameters across multiple GPUs, processing distinct mini-batch slices in parallel and synchronizing gradients via All-Reduce collectives.",
      "correctAnswerEn": "Distributed Data Parallelism (DDP) replicates model parameters across multiple GPUs, processing distinct mini-batch slices in parallel and synchronizing gradients via All-Reduce collectives.",
      "correctAnswerAr": "تكرر الموازاة الموزعة للبيانات (DDP) معاملات النموذج عبر وحدات GPU متعددة، فتعالج حزم البيانات بالتوازي وتزامن التدرجات بعملية All-Reduce.",
      "correctIndex": 1,
      "explanationEn": "Correct Theoretical Formulation: Distributed Data Parallelism (DDP) replicates model parameters across multiple GPUs, processing distinct mini-batch slices in parallel and synchronizing gradients via All-Reduce collectives.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تكرر الموازاة الموزعة للبيانات (DDP) معاملات النموذج عبر وحدات GPU متعددة، فتعالج حزم البيانات بالتوازي وتزامن التدرجات بعملية All-Reduce.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Distributed Data Parallelism (DDP) replicates model parameters across multiple GPUs, processing distinct mini-batch slices in parallel and synchronizing gradients via All-Reduce collectives.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تكرر الموازاة الموزعة للبيانات (DDP) معاملات النموذج عبر وحدات GPU متعددة، فتعالج حزم البيانات بالتوازي وتزامن التدرجات بعملية All-Reduce.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch4_easy_35",
      "titleEn": "[EASY] Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning - Review 35",
      "titleAr": "[مستوى أساسي] ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات - سؤال 35",
      "questionEn": "[AI & Data Science Core Concept] Regarding Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning, which of the following statements is theoretically and mathematically sound? (Variant 35)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 35)",
      "optionsEn": [
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Model quantization converts 32-bit floating-point parameters (FP32) into low-bitwidth integers (INT8 or FP4), accelerating inference execution and reducing memory bandwidth demand.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "يحول تكميم النماذج معاملات الأوزان ذات الدقة 32 بت العائمة (FP32) إلى أعداد صحيحة منخفضة العرض (INT8 أو FP4)، مسرعاً الاستدلال ومقلصاً استهلاك الذاكرة.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "Model quantization converts 32-bit floating-point parameters (FP32) into low-bitwidth integers (INT8 or FP4), accelerating inference execution and reducing memory bandwidth demand.",
      "correctAnswerEn": "Model quantization converts 32-bit floating-point parameters (FP32) into low-bitwidth integers (INT8 or FP4), accelerating inference execution and reducing memory bandwidth demand.",
      "correctAnswerAr": "يحول تكميم النماذج معاملات الأوزان ذات الدقة 32 بت العائمة (FP32) إلى أعداد صحيحة منخفضة العرض (INT8 أو FP4)، مسرعاً الاستدلال ومقلصاً استهلاك الذاكرة.",
      "correctIndex": 2,
      "explanationEn": "Correct Theoretical Formulation: Model quantization converts 32-bit floating-point parameters (FP32) into low-bitwidth integers (INT8 or FP4), accelerating inference execution and reducing memory bandwidth demand.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يحول تكميم النماذج معاملات الأوزان ذات الدقة 32 بت العائمة (FP32) إلى أعداد صحيحة منخفضة العرض (INT8 أو FP4)، مسرعاً الاستدلال ومقلصاً استهلاك الذاكرة.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Model quantization converts 32-bit floating-point parameters (FP32) into low-bitwidth integers (INT8 or FP4), accelerating inference execution and reducing memory bandwidth demand.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يحول تكميم النماذج معاملات الأوزان ذات الدقة 32 بت العائمة (FP32) إلى أعداد صحيحة منخفضة العرض (INT8 أو FP4)، مسرعاً الاستدلال ومقلصاً استهلاك الذاكرة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch4_easy_36",
      "titleEn": "[EASY] Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance - Review 36",
      "titleAr": "[مستوى أساسي] العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة - سؤال 36",
      "questionEn": "[AI & Data Science Core Concept] Regarding Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance, which of the following statements is theoretically and mathematically sound? (Variant 36)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 36)",
      "optionsEn": [
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "Explainable AI (XAI) techniques interpret and audit complex black-box machine learning predictions, ensuring transparency, ethical accountability, and compliance with data protection laws."
      ],
      "optionsAr": [
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تفسر تقنيات الذكاء الاصطناعي القابل للتفسير (XAI) وتدقق تنبؤات النماذج المعقدة، محققة الشفافية والمساءلة الأخلاقية والامتثال لقوانين حماية البيانات."
      ],
      "correctAnswer": "Explainable AI (XAI) techniques interpret and audit complex black-box machine learning predictions, ensuring transparency, ethical accountability, and compliance with data protection laws.",
      "correctAnswerEn": "Explainable AI (XAI) techniques interpret and audit complex black-box machine learning predictions, ensuring transparency, ethical accountability, and compliance with data protection laws.",
      "correctAnswerAr": "تفسر تقنيات الذكاء الاصطناعي القابل للتفسير (XAI) وتدقق تنبؤات النماذج المعقدة، محققة الشفافية والمساءلة الأخلاقية والامتثال لقوانين حماية البيانات.",
      "correctIndex": 3,
      "explanationEn": "Correct Theoretical Formulation: Explainable AI (XAI) techniques interpret and audit complex black-box machine learning predictions, ensuring transparency, ethical accountability, and compliance with data protection laws.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تفسر تقنيات الذكاء الاصطناعي القابل للتفسير (XAI) وتدقق تنبؤات النماذج المعقدة، محققة الشفافية والمساءلة الأخلاقية والامتثال لقوانين حماية البيانات.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Explainable AI (XAI) techniques interpret and audit complex black-box machine learning predictions, ensuring transparency, ethical accountability, and compliance with data protection laws.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تفسر تقنيات الذكاء الاصطناعي القابل للتفسير (XAI) وتدقق تنبؤات النماذج المعقدة، محققة الشفافية والمساءلة الأخلاقية والامتثال لقوانين حماية البيانات.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch4_easy_37",
      "titleEn": "[EASY] Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO) - Review 37",
      "titleAr": "[مستوى أساسي] التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO - سؤال 37",
      "questionEn": "[AI & Data Science Core Concept] Regarding Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO), which of the following statements is theoretically and mathematically sound? (Variant 37)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 37)",
      "optionsEn": [
        "Distributed Data Parallelism (DDP) replicates model parameters across multiple GPUs, processing distinct mini-batch slices in parallel and synchronizing gradients via All-Reduce collectives.",
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "تكرر الموازاة الموزعة للبيانات (DDP) معاملات النموذج عبر وحدات GPU متعددة، فتعالج حزم البيانات بالتوازي وتزامن التدرجات بعملية All-Reduce.",
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "Distributed Data Parallelism (DDP) replicates model parameters across multiple GPUs, processing distinct mini-batch slices in parallel and synchronizing gradients via All-Reduce collectives.",
      "correctAnswerEn": "Distributed Data Parallelism (DDP) replicates model parameters across multiple GPUs, processing distinct mini-batch slices in parallel and synchronizing gradients via All-Reduce collectives.",
      "correctAnswerAr": "تكرر الموازاة الموزعة للبيانات (DDP) معاملات النموذج عبر وحدات GPU متعددة، فتعالج حزم البيانات بالتوازي وتزامن التدرجات بعملية All-Reduce.",
      "correctIndex": 0,
      "explanationEn": "Correct Theoretical Formulation: Distributed Data Parallelism (DDP) replicates model parameters across multiple GPUs, processing distinct mini-batch slices in parallel and synchronizing gradients via All-Reduce collectives.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تكرر الموازاة الموزعة للبيانات (DDP) معاملات النموذج عبر وحدات GPU متعددة، فتعالج حزم البيانات بالتوازي وتزامن التدرجات بعملية All-Reduce.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Distributed Data Parallelism (DDP) replicates model parameters across multiple GPUs, processing distinct mini-batch slices in parallel and synchronizing gradients via All-Reduce collectives.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تكرر الموازاة الموزعة للبيانات (DDP) معاملات النموذج عبر وحدات GPU متعددة، فتعالج حزم البيانات بالتوازي وتزامن التدرجات بعملية All-Reduce.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch4_easy_38",
      "titleEn": "[EASY] Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning - Review 38",
      "titleAr": "[مستوى أساسي] ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات - سؤال 38",
      "questionEn": "[AI & Data Science Core Concept] Regarding Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning, which of the following statements is theoretically and mathematically sound? (Variant 38)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 38)",
      "optionsEn": [
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "Model quantization converts 32-bit floating-point parameters (FP32) into low-bitwidth integers (INT8 or FP4), accelerating inference execution and reducing memory bandwidth demand.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "يحول تكميم النماذج معاملات الأوزان ذات الدقة 32 بت العائمة (FP32) إلى أعداد صحيحة منخفضة العرض (INT8 أو FP4)، مسرعاً الاستدلال ومقلصاً استهلاك الذاكرة.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "Model quantization converts 32-bit floating-point parameters (FP32) into low-bitwidth integers (INT8 or FP4), accelerating inference execution and reducing memory bandwidth demand.",
      "correctAnswerEn": "Model quantization converts 32-bit floating-point parameters (FP32) into low-bitwidth integers (INT8 or FP4), accelerating inference execution and reducing memory bandwidth demand.",
      "correctAnswerAr": "يحول تكميم النماذج معاملات الأوزان ذات الدقة 32 بت العائمة (FP32) إلى أعداد صحيحة منخفضة العرض (INT8 أو FP4)، مسرعاً الاستدلال ومقلصاً استهلاك الذاكرة.",
      "correctIndex": 1,
      "explanationEn": "Correct Theoretical Formulation: Model quantization converts 32-bit floating-point parameters (FP32) into low-bitwidth integers (INT8 or FP4), accelerating inference execution and reducing memory bandwidth demand.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يحول تكميم النماذج معاملات الأوزان ذات الدقة 32 بت العائمة (FP32) إلى أعداد صحيحة منخفضة العرض (INT8 أو FP4)، مسرعاً الاستدلال ومقلصاً استهلاك الذاكرة.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Model quantization converts 32-bit floating-point parameters (FP32) into low-bitwidth integers (INT8 or FP4), accelerating inference execution and reducing memory bandwidth demand.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يحول تكميم النماذج معاملات الأوزان ذات الدقة 32 بت العائمة (FP32) إلى أعداد صحيحة منخفضة العرض (INT8 أو FP4)، مسرعاً الاستدلال ومقلصاً استهلاك الذاكرة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch4_easy_39",
      "titleEn": "[EASY] Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance - Review 39",
      "titleAr": "[مستوى أساسي] العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة - سؤال 39",
      "questionEn": "[AI & Data Science Core Concept] Regarding Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance, which of the following statements is theoretically and mathematically sound? (Variant 39)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 39)",
      "optionsEn": [
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "Explainable AI (XAI) techniques interpret and audit complex black-box machine learning predictions, ensuring transparency, ethical accountability, and compliance with data protection laws.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تفسر تقنيات الذكاء الاصطناعي القابل للتفسير (XAI) وتدقق تنبؤات النماذج المعقدة، محققة الشفافية والمساءلة الأخلاقية والامتثال لقوانين حماية البيانات.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "Explainable AI (XAI) techniques interpret and audit complex black-box machine learning predictions, ensuring transparency, ethical accountability, and compliance with data protection laws.",
      "correctAnswerEn": "Explainable AI (XAI) techniques interpret and audit complex black-box machine learning predictions, ensuring transparency, ethical accountability, and compliance with data protection laws.",
      "correctAnswerAr": "تفسر تقنيات الذكاء الاصطناعي القابل للتفسير (XAI) وتدقق تنبؤات النماذج المعقدة، محققة الشفافية والمساءلة الأخلاقية والامتثال لقوانين حماية البيانات.",
      "correctIndex": 2,
      "explanationEn": "Correct Theoretical Formulation: Explainable AI (XAI) techniques interpret and audit complex black-box machine learning predictions, ensuring transparency, ethical accountability, and compliance with data protection laws.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تفسر تقنيات الذكاء الاصطناعي القابل للتفسير (XAI) وتدقق تنبؤات النماذج المعقدة، محققة الشفافية والمساءلة الأخلاقية والامتثال لقوانين حماية البيانات.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Explainable AI (XAI) techniques interpret and audit complex black-box machine learning predictions, ensuring transparency, ethical accountability, and compliance with data protection laws.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تفسر تقنيات الذكاء الاصطناعي القابل للتفسير (XAI) وتدقق تنبؤات النماذج المعقدة، محققة الشفافية والمساءلة الأخلاقية والامتثال لقوانين حماية البيانات.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch4_easy_40",
      "titleEn": "[EASY] Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO) - Review 40",
      "titleAr": "[مستوى أساسي] التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO - سؤال 40",
      "questionEn": "[AI & Data Science Core Concept] Regarding Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO), which of the following statements is theoretically and mathematically sound? (Variant 40)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 40)",
      "optionsEn": [
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Distributed Data Parallelism (DDP) replicates model parameters across multiple GPUs, processing distinct mini-batch slices in parallel and synchronizing gradients via All-Reduce collectives."
      ],
      "optionsAr": [
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "تكرر الموازاة الموزعة للبيانات (DDP) معاملات النموذج عبر وحدات GPU متعددة، فتعالج حزم البيانات بالتوازي وتزامن التدرجات بعملية All-Reduce."
      ],
      "correctAnswer": "Distributed Data Parallelism (DDP) replicates model parameters across multiple GPUs, processing distinct mini-batch slices in parallel and synchronizing gradients via All-Reduce collectives.",
      "correctAnswerEn": "Distributed Data Parallelism (DDP) replicates model parameters across multiple GPUs, processing distinct mini-batch slices in parallel and synchronizing gradients via All-Reduce collectives.",
      "correctAnswerAr": "تكرر الموازاة الموزعة للبيانات (DDP) معاملات النموذج عبر وحدات GPU متعددة، فتعالج حزم البيانات بالتوازي وتزامن التدرجات بعملية All-Reduce.",
      "correctIndex": 3,
      "explanationEn": "Correct Theoretical Formulation: Distributed Data Parallelism (DDP) replicates model parameters across multiple GPUs, processing distinct mini-batch slices in parallel and synchronizing gradients via All-Reduce collectives.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تكرر الموازاة الموزعة للبيانات (DDP) معاملات النموذج عبر وحدات GPU متعددة، فتعالج حزم البيانات بالتوازي وتزامن التدرجات بعملية All-Reduce.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Distributed Data Parallelism (DDP) replicates model parameters across multiple GPUs, processing distinct mini-batch slices in parallel and synchronizing gradients via All-Reduce collectives.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تكرر الموازاة الموزعة للبيانات (DDP) معاملات النموذج عبر وحدات GPU متعددة، فتعالج حزم البيانات بالتوازي وتزامن التدرجات بعملية All-Reduce.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch4_easy_41",
      "titleEn": "[EASY] Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning - Review 41",
      "titleAr": "[مستوى أساسي] ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات - سؤال 41",
      "questionEn": "[AI & Data Science Core Concept] Regarding Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning, which of the following statements is theoretically and mathematically sound? (Variant 41)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 41)",
      "optionsEn": [
        "Model quantization converts 32-bit floating-point parameters (FP32) into low-bitwidth integers (INT8 or FP4), accelerating inference execution and reducing memory bandwidth demand.",
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "يحول تكميم النماذج معاملات الأوزان ذات الدقة 32 بت العائمة (FP32) إلى أعداد صحيحة منخفضة العرض (INT8 أو FP4)، مسرعاً الاستدلال ومقلصاً استهلاك الذاكرة.",
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "Model quantization converts 32-bit floating-point parameters (FP32) into low-bitwidth integers (INT8 or FP4), accelerating inference execution and reducing memory bandwidth demand.",
      "correctAnswerEn": "Model quantization converts 32-bit floating-point parameters (FP32) into low-bitwidth integers (INT8 or FP4), accelerating inference execution and reducing memory bandwidth demand.",
      "correctAnswerAr": "يحول تكميم النماذج معاملات الأوزان ذات الدقة 32 بت العائمة (FP32) إلى أعداد صحيحة منخفضة العرض (INT8 أو FP4)، مسرعاً الاستدلال ومقلصاً استهلاك الذاكرة.",
      "correctIndex": 0,
      "explanationEn": "Correct Theoretical Formulation: Model quantization converts 32-bit floating-point parameters (FP32) into low-bitwidth integers (INT8 or FP4), accelerating inference execution and reducing memory bandwidth demand.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يحول تكميم النماذج معاملات الأوزان ذات الدقة 32 بت العائمة (FP32) إلى أعداد صحيحة منخفضة العرض (INT8 أو FP4)، مسرعاً الاستدلال ومقلصاً استهلاك الذاكرة.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Model quantization converts 32-bit floating-point parameters (FP32) into low-bitwidth integers (INT8 or FP4), accelerating inference execution and reducing memory bandwidth demand.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يحول تكميم النماذج معاملات الأوزان ذات الدقة 32 بت العائمة (FP32) إلى أعداد صحيحة منخفضة العرض (INT8 أو FP4)، مسرعاً الاستدلال ومقلصاً استهلاك الذاكرة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch4_easy_42",
      "titleEn": "[EASY] Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance - Review 42",
      "titleAr": "[مستوى أساسي] العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة - سؤال 42",
      "questionEn": "[AI & Data Science Core Concept] Regarding Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance, which of the following statements is theoretically and mathematically sound? (Variant 42)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 42)",
      "optionsEn": [
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "Explainable AI (XAI) techniques interpret and audit complex black-box machine learning predictions, ensuring transparency, ethical accountability, and compliance with data protection laws.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تفسر تقنيات الذكاء الاصطناعي القابل للتفسير (XAI) وتدقق تنبؤات النماذج المعقدة، محققة الشفافية والمساءلة الأخلاقية والامتثال لقوانين حماية البيانات.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "Explainable AI (XAI) techniques interpret and audit complex black-box machine learning predictions, ensuring transparency, ethical accountability, and compliance with data protection laws.",
      "correctAnswerEn": "Explainable AI (XAI) techniques interpret and audit complex black-box machine learning predictions, ensuring transparency, ethical accountability, and compliance with data protection laws.",
      "correctAnswerAr": "تفسر تقنيات الذكاء الاصطناعي القابل للتفسير (XAI) وتدقق تنبؤات النماذج المعقدة، محققة الشفافية والمساءلة الأخلاقية والامتثال لقوانين حماية البيانات.",
      "correctIndex": 1,
      "explanationEn": "Correct Theoretical Formulation: Explainable AI (XAI) techniques interpret and audit complex black-box machine learning predictions, ensuring transparency, ethical accountability, and compliance with data protection laws.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تفسر تقنيات الذكاء الاصطناعي القابل للتفسير (XAI) وتدقق تنبؤات النماذج المعقدة، محققة الشفافية والمساءلة الأخلاقية والامتثال لقوانين حماية البيانات.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Explainable AI (XAI) techniques interpret and audit complex black-box machine learning predictions, ensuring transparency, ethical accountability, and compliance with data protection laws.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تفسر تقنيات الذكاء الاصطناعي القابل للتفسير (XAI) وتدقق تنبؤات النماذج المعقدة، محققة الشفافية والمساءلة الأخلاقية والامتثال لقوانين حماية البيانات.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch4_easy_43",
      "titleEn": "[EASY] Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO) - Review 43",
      "titleAr": "[مستوى أساسي] التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO - سؤال 43",
      "questionEn": "[AI & Data Science Core Concept] Regarding Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO), which of the following statements is theoretically and mathematically sound? (Variant 43)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 43)",
      "optionsEn": [
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Distributed Data Parallelism (DDP) replicates model parameters across multiple GPUs, processing distinct mini-batch slices in parallel and synchronizing gradients via All-Reduce collectives.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تكرر الموازاة الموزعة للبيانات (DDP) معاملات النموذج عبر وحدات GPU متعددة، فتعالج حزم البيانات بالتوازي وتزامن التدرجات بعملية All-Reduce.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "Distributed Data Parallelism (DDP) replicates model parameters across multiple GPUs, processing distinct mini-batch slices in parallel and synchronizing gradients via All-Reduce collectives.",
      "correctAnswerEn": "Distributed Data Parallelism (DDP) replicates model parameters across multiple GPUs, processing distinct mini-batch slices in parallel and synchronizing gradients via All-Reduce collectives.",
      "correctAnswerAr": "تكرر الموازاة الموزعة للبيانات (DDP) معاملات النموذج عبر وحدات GPU متعددة، فتعالج حزم البيانات بالتوازي وتزامن التدرجات بعملية All-Reduce.",
      "correctIndex": 2,
      "explanationEn": "Correct Theoretical Formulation: Distributed Data Parallelism (DDP) replicates model parameters across multiple GPUs, processing distinct mini-batch slices in parallel and synchronizing gradients via All-Reduce collectives.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تكرر الموازاة الموزعة للبيانات (DDP) معاملات النموذج عبر وحدات GPU متعددة، فتعالج حزم البيانات بالتوازي وتزامن التدرجات بعملية All-Reduce.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Distributed Data Parallelism (DDP) replicates model parameters across multiple GPUs, processing distinct mini-batch slices in parallel and synchronizing gradients via All-Reduce collectives.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تكرر الموازاة الموزعة للبيانات (DDP) معاملات النموذج عبر وحدات GPU متعددة، فتعالج حزم البيانات بالتوازي وتزامن التدرجات بعملية All-Reduce.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch4_easy_44",
      "titleEn": "[EASY] Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning - Review 44",
      "titleAr": "[مستوى أساسي] ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات - سؤال 44",
      "questionEn": "[AI & Data Science Core Concept] Regarding Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning, which of the following statements is theoretically and mathematically sound? (Variant 44)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 44)",
      "optionsEn": [
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "Model quantization converts 32-bit floating-point parameters (FP32) into low-bitwidth integers (INT8 or FP4), accelerating inference execution and reducing memory bandwidth demand."
      ],
      "optionsAr": [
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "يحول تكميم النماذج معاملات الأوزان ذات الدقة 32 بت العائمة (FP32) إلى أعداد صحيحة منخفضة العرض (INT8 أو FP4)، مسرعاً الاستدلال ومقلصاً استهلاك الذاكرة."
      ],
      "correctAnswer": "Model quantization converts 32-bit floating-point parameters (FP32) into low-bitwidth integers (INT8 or FP4), accelerating inference execution and reducing memory bandwidth demand.",
      "correctAnswerEn": "Model quantization converts 32-bit floating-point parameters (FP32) into low-bitwidth integers (INT8 or FP4), accelerating inference execution and reducing memory bandwidth demand.",
      "correctAnswerAr": "يحول تكميم النماذج معاملات الأوزان ذات الدقة 32 بت العائمة (FP32) إلى أعداد صحيحة منخفضة العرض (INT8 أو FP4)، مسرعاً الاستدلال ومقلصاً استهلاك الذاكرة.",
      "correctIndex": 3,
      "explanationEn": "Correct Theoretical Formulation: Model quantization converts 32-bit floating-point parameters (FP32) into low-bitwidth integers (INT8 or FP4), accelerating inference execution and reducing memory bandwidth demand.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يحول تكميم النماذج معاملات الأوزان ذات الدقة 32 بت العائمة (FP32) إلى أعداد صحيحة منخفضة العرض (INT8 أو FP4)، مسرعاً الاستدلال ومقلصاً استهلاك الذاكرة.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Model quantization converts 32-bit floating-point parameters (FP32) into low-bitwidth integers (INT8 or FP4), accelerating inference execution and reducing memory bandwidth demand.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يحول تكميم النماذج معاملات الأوزان ذات الدقة 32 بت العائمة (FP32) إلى أعداد صحيحة منخفضة العرض (INT8 أو FP4)، مسرعاً الاستدلال ومقلصاً استهلاك الذاكرة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch4_easy_45",
      "titleEn": "[EASY] Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance - Review 45",
      "titleAr": "[مستوى أساسي] العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة - سؤال 45",
      "questionEn": "[AI & Data Science Core Concept] Regarding Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance, which of the following statements is theoretically and mathematically sound? (Variant 45)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 45)",
      "optionsEn": [
        "Explainable AI (XAI) techniques interpret and audit complex black-box machine learning predictions, ensuring transparency, ethical accountability, and compliance with data protection laws.",
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تفسر تقنيات الذكاء الاصطناعي القابل للتفسير (XAI) وتدقق تنبؤات النماذج المعقدة، محققة الشفافية والمساءلة الأخلاقية والامتثال لقوانين حماية البيانات.",
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "Explainable AI (XAI) techniques interpret and audit complex black-box machine learning predictions, ensuring transparency, ethical accountability, and compliance with data protection laws.",
      "correctAnswerEn": "Explainable AI (XAI) techniques interpret and audit complex black-box machine learning predictions, ensuring transparency, ethical accountability, and compliance with data protection laws.",
      "correctAnswerAr": "تفسر تقنيات الذكاء الاصطناعي القابل للتفسير (XAI) وتدقق تنبؤات النماذج المعقدة، محققة الشفافية والمساءلة الأخلاقية والامتثال لقوانين حماية البيانات.",
      "correctIndex": 0,
      "explanationEn": "Correct Theoretical Formulation: Explainable AI (XAI) techniques interpret and audit complex black-box machine learning predictions, ensuring transparency, ethical accountability, and compliance with data protection laws.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تفسر تقنيات الذكاء الاصطناعي القابل للتفسير (XAI) وتدقق تنبؤات النماذج المعقدة، محققة الشفافية والمساءلة الأخلاقية والامتثال لقوانين حماية البيانات.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Explainable AI (XAI) techniques interpret and audit complex black-box machine learning predictions, ensuring transparency, ethical accountability, and compliance with data protection laws.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تفسر تقنيات الذكاء الاصطناعي القابل للتفسير (XAI) وتدقق تنبؤات النماذج المعقدة، محققة الشفافية والمساءلة الأخلاقية والامتثال لقوانين حماية البيانات.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch4_easy_46",
      "titleEn": "[EASY] Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO) - Review 46",
      "titleAr": "[مستوى أساسي] التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO - سؤال 46",
      "questionEn": "[AI & Data Science Core Concept] Regarding Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO), which of the following statements is theoretically and mathematically sound? (Variant 46)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 46)",
      "optionsEn": [
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Distributed Data Parallelism (DDP) replicates model parameters across multiple GPUs, processing distinct mini-batch slices in parallel and synchronizing gradients via All-Reduce collectives.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "تكرر الموازاة الموزعة للبيانات (DDP) معاملات النموذج عبر وحدات GPU متعددة، فتعالج حزم البيانات بالتوازي وتزامن التدرجات بعملية All-Reduce.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "Distributed Data Parallelism (DDP) replicates model parameters across multiple GPUs, processing distinct mini-batch slices in parallel and synchronizing gradients via All-Reduce collectives.",
      "correctAnswerEn": "Distributed Data Parallelism (DDP) replicates model parameters across multiple GPUs, processing distinct mini-batch slices in parallel and synchronizing gradients via All-Reduce collectives.",
      "correctAnswerAr": "تكرر الموازاة الموزعة للبيانات (DDP) معاملات النموذج عبر وحدات GPU متعددة، فتعالج حزم البيانات بالتوازي وتزامن التدرجات بعملية All-Reduce.",
      "correctIndex": 1,
      "explanationEn": "Correct Theoretical Formulation: Distributed Data Parallelism (DDP) replicates model parameters across multiple GPUs, processing distinct mini-batch slices in parallel and synchronizing gradients via All-Reduce collectives.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تكرر الموازاة الموزعة للبيانات (DDP) معاملات النموذج عبر وحدات GPU متعددة، فتعالج حزم البيانات بالتوازي وتزامن التدرجات بعملية All-Reduce.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Distributed Data Parallelism (DDP) replicates model parameters across multiple GPUs, processing distinct mini-batch slices in parallel and synchronizing gradients via All-Reduce collectives.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تكرر الموازاة الموزعة للبيانات (DDP) معاملات النموذج عبر وحدات GPU متعددة، فتعالج حزم البيانات بالتوازي وتزامن التدرجات بعملية All-Reduce.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch4_easy_47",
      "titleEn": "[EASY] Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning - Review 47",
      "titleAr": "[مستوى أساسي] ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات - سؤال 47",
      "questionEn": "[AI & Data Science Core Concept] Regarding Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning, which of the following statements is theoretically and mathematically sound? (Variant 47)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 47)",
      "optionsEn": [
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Model quantization converts 32-bit floating-point parameters (FP32) into low-bitwidth integers (INT8 or FP4), accelerating inference execution and reducing memory bandwidth demand.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "يحول تكميم النماذج معاملات الأوزان ذات الدقة 32 بت العائمة (FP32) إلى أعداد صحيحة منخفضة العرض (INT8 أو FP4)، مسرعاً الاستدلال ومقلصاً استهلاك الذاكرة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "Model quantization converts 32-bit floating-point parameters (FP32) into low-bitwidth integers (INT8 or FP4), accelerating inference execution and reducing memory bandwidth demand.",
      "correctAnswerEn": "Model quantization converts 32-bit floating-point parameters (FP32) into low-bitwidth integers (INT8 or FP4), accelerating inference execution and reducing memory bandwidth demand.",
      "correctAnswerAr": "يحول تكميم النماذج معاملات الأوزان ذات الدقة 32 بت العائمة (FP32) إلى أعداد صحيحة منخفضة العرض (INT8 أو FP4)، مسرعاً الاستدلال ومقلصاً استهلاك الذاكرة.",
      "correctIndex": 2,
      "explanationEn": "Correct Theoretical Formulation: Model quantization converts 32-bit floating-point parameters (FP32) into low-bitwidth integers (INT8 or FP4), accelerating inference execution and reducing memory bandwidth demand.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يحول تكميم النماذج معاملات الأوزان ذات الدقة 32 بت العائمة (FP32) إلى أعداد صحيحة منخفضة العرض (INT8 أو FP4)، مسرعاً الاستدلال ومقلصاً استهلاك الذاكرة.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Model quantization converts 32-bit floating-point parameters (FP32) into low-bitwidth integers (INT8 or FP4), accelerating inference execution and reducing memory bandwidth demand.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يحول تكميم النماذج معاملات الأوزان ذات الدقة 32 بت العائمة (FP32) إلى أعداد صحيحة منخفضة العرض (INT8 أو FP4)، مسرعاً الاستدلال ومقلصاً استهلاك الذاكرة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch4_easy_48",
      "titleEn": "[EASY] Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance - Review 48",
      "titleAr": "[مستوى أساسي] العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة - سؤال 48",
      "questionEn": "[AI & Data Science Core Concept] Regarding Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance, which of the following statements is theoretically and mathematically sound? (Variant 48)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 48)",
      "optionsEn": [
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "Explainable AI (XAI) techniques interpret and audit complex black-box machine learning predictions, ensuring transparency, ethical accountability, and compliance with data protection laws."
      ],
      "optionsAr": [
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "تفسر تقنيات الذكاء الاصطناعي القابل للتفسير (XAI) وتدقق تنبؤات النماذج المعقدة، محققة الشفافية والمساءلة الأخلاقية والامتثال لقوانين حماية البيانات."
      ],
      "correctAnswer": "Explainable AI (XAI) techniques interpret and audit complex black-box machine learning predictions, ensuring transparency, ethical accountability, and compliance with data protection laws.",
      "correctAnswerEn": "Explainable AI (XAI) techniques interpret and audit complex black-box machine learning predictions, ensuring transparency, ethical accountability, and compliance with data protection laws.",
      "correctAnswerAr": "تفسر تقنيات الذكاء الاصطناعي القابل للتفسير (XAI) وتدقق تنبؤات النماذج المعقدة، محققة الشفافية والمساءلة الأخلاقية والامتثال لقوانين حماية البيانات.",
      "correctIndex": 3,
      "explanationEn": "Correct Theoretical Formulation: Explainable AI (XAI) techniques interpret and audit complex black-box machine learning predictions, ensuring transparency, ethical accountability, and compliance with data protection laws.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تفسر تقنيات الذكاء الاصطناعي القابل للتفسير (XAI) وتدقق تنبؤات النماذج المعقدة، محققة الشفافية والمساءلة الأخلاقية والامتثال لقوانين حماية البيانات.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Explainable AI (XAI) techniques interpret and audit complex black-box machine learning predictions, ensuring transparency, ethical accountability, and compliance with data protection laws.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تفسر تقنيات الذكاء الاصطناعي القابل للتفسير (XAI) وتدقق تنبؤات النماذج المعقدة، محققة الشفافية والمساءلة الأخلاقية والامتثال لقوانين حماية البيانات.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch4_easy_49",
      "titleEn": "[EASY] Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO) - Review 49",
      "titleAr": "[مستوى أساسي] التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO - سؤال 49",
      "questionEn": "[AI & Data Science Core Concept] Regarding Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO), which of the following statements is theoretically and mathematically sound? (Variant 49)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 49)",
      "optionsEn": [
        "Distributed Data Parallelism (DDP) replicates model parameters across multiple GPUs, processing distinct mini-batch slices in parallel and synchronizing gradients via All-Reduce collectives.",
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "تكرر الموازاة الموزعة للبيانات (DDP) معاملات النموذج عبر وحدات GPU متعددة، فتعالج حزم البيانات بالتوازي وتزامن التدرجات بعملية All-Reduce.",
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "Distributed Data Parallelism (DDP) replicates model parameters across multiple GPUs, processing distinct mini-batch slices in parallel and synchronizing gradients via All-Reduce collectives.",
      "correctAnswerEn": "Distributed Data Parallelism (DDP) replicates model parameters across multiple GPUs, processing distinct mini-batch slices in parallel and synchronizing gradients via All-Reduce collectives.",
      "correctAnswerAr": "تكرر الموازاة الموزعة للبيانات (DDP) معاملات النموذج عبر وحدات GPU متعددة، فتعالج حزم البيانات بالتوازي وتزامن التدرجات بعملية All-Reduce.",
      "correctIndex": 0,
      "explanationEn": "Correct Theoretical Formulation: Distributed Data Parallelism (DDP) replicates model parameters across multiple GPUs, processing distinct mini-batch slices in parallel and synchronizing gradients via All-Reduce collectives.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تكرر الموازاة الموزعة للبيانات (DDP) معاملات النموذج عبر وحدات GPU متعددة، فتعالج حزم البيانات بالتوازي وتزامن التدرجات بعملية All-Reduce.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Distributed Data Parallelism (DDP) replicates model parameters across multiple GPUs, processing distinct mini-batch slices in parallel and synchronizing gradients via All-Reduce collectives.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تكرر الموازاة الموزعة للبيانات (DDP) معاملات النموذج عبر وحدات GPU متعددة، فتعالج حزم البيانات بالتوازي وتزامن التدرجات بعملية All-Reduce.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch4_easy_50",
      "titleEn": "[EASY] Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning - Review 50",
      "titleAr": "[مستوى أساسي] ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات - سؤال 50",
      "questionEn": "[AI & Data Science Core Concept] Regarding Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning, which of the following statements is theoretically and mathematically sound? (Variant 50)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 50)",
      "optionsEn": [
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "Model quantization converts 32-bit floating-point parameters (FP32) into low-bitwidth integers (INT8 or FP4), accelerating inference execution and reducing memory bandwidth demand.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "يحول تكميم النماذج معاملات الأوزان ذات الدقة 32 بت العائمة (FP32) إلى أعداد صحيحة منخفضة العرض (INT8 أو FP4)، مسرعاً الاستدلال ومقلصاً استهلاك الذاكرة.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "Model quantization converts 32-bit floating-point parameters (FP32) into low-bitwidth integers (INT8 or FP4), accelerating inference execution and reducing memory bandwidth demand.",
      "correctAnswerEn": "Model quantization converts 32-bit floating-point parameters (FP32) into low-bitwidth integers (INT8 or FP4), accelerating inference execution and reducing memory bandwidth demand.",
      "correctAnswerAr": "يحول تكميم النماذج معاملات الأوزان ذات الدقة 32 بت العائمة (FP32) إلى أعداد صحيحة منخفضة العرض (INT8 أو FP4)، مسرعاً الاستدلال ومقلصاً استهلاك الذاكرة.",
      "correctIndex": 1,
      "explanationEn": "Correct Theoretical Formulation: Model quantization converts 32-bit floating-point parameters (FP32) into low-bitwidth integers (INT8 or FP4), accelerating inference execution and reducing memory bandwidth demand.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يحول تكميم النماذج معاملات الأوزان ذات الدقة 32 بت العائمة (FP32) إلى أعداد صحيحة منخفضة العرض (INT8 أو FP4)، مسرعاً الاستدلال ومقلصاً استهلاك الذاكرة.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Model quantization converts 32-bit floating-point parameters (FP32) into low-bitwidth integers (INT8 or FP4), accelerating inference execution and reducing memory bandwidth demand.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يحول تكميم النماذج معاملات الأوزان ذات الدقة 32 بت العائمة (FP32) إلى أعداد صحيحة منخفضة العرض (INT8 أو FP4)، مسرعاً الاستدلال ومقلصاً استهلاك الذاكرة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch4_easy_51",
      "titleEn": "[EASY] Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance - Review 51",
      "titleAr": "[مستوى أساسي] العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة - سؤال 51",
      "questionEn": "[AI & Data Science Core Concept] Regarding Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance, which of the following statements is theoretically and mathematically sound? (Variant 51)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 51)",
      "optionsEn": [
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "Explainable AI (XAI) techniques interpret and audit complex black-box machine learning predictions, ensuring transparency, ethical accountability, and compliance with data protection laws.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "تفسر تقنيات الذكاء الاصطناعي القابل للتفسير (XAI) وتدقق تنبؤات النماذج المعقدة، محققة الشفافية والمساءلة الأخلاقية والامتثال لقوانين حماية البيانات.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "Explainable AI (XAI) techniques interpret and audit complex black-box machine learning predictions, ensuring transparency, ethical accountability, and compliance with data protection laws.",
      "correctAnswerEn": "Explainable AI (XAI) techniques interpret and audit complex black-box machine learning predictions, ensuring transparency, ethical accountability, and compliance with data protection laws.",
      "correctAnswerAr": "تفسر تقنيات الذكاء الاصطناعي القابل للتفسير (XAI) وتدقق تنبؤات النماذج المعقدة، محققة الشفافية والمساءلة الأخلاقية والامتثال لقوانين حماية البيانات.",
      "correctIndex": 2,
      "explanationEn": "Correct Theoretical Formulation: Explainable AI (XAI) techniques interpret and audit complex black-box machine learning predictions, ensuring transparency, ethical accountability, and compliance with data protection laws.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تفسر تقنيات الذكاء الاصطناعي القابل للتفسير (XAI) وتدقق تنبؤات النماذج المعقدة، محققة الشفافية والمساءلة الأخلاقية والامتثال لقوانين حماية البيانات.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Explainable AI (XAI) techniques interpret and audit complex black-box machine learning predictions, ensuring transparency, ethical accountability, and compliance with data protection laws.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تفسر تقنيات الذكاء الاصطناعي القابل للتفسير (XAI) وتدقق تنبؤات النماذج المعقدة، محققة الشفافية والمساءلة الأخلاقية والامتثال لقوانين حماية البيانات.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch4_easy_52",
      "titleEn": "[EASY] Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO) - Review 52",
      "titleAr": "[مستوى أساسي] التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO - سؤال 52",
      "questionEn": "[AI & Data Science Core Concept] Regarding Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO), which of the following statements is theoretically and mathematically sound? (Variant 52)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 52)",
      "optionsEn": [
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "Distributed Data Parallelism (DDP) replicates model parameters across multiple GPUs, processing distinct mini-batch slices in parallel and synchronizing gradients via All-Reduce collectives."
      ],
      "optionsAr": [
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "تكرر الموازاة الموزعة للبيانات (DDP) معاملات النموذج عبر وحدات GPU متعددة، فتعالج حزم البيانات بالتوازي وتزامن التدرجات بعملية All-Reduce."
      ],
      "correctAnswer": "Distributed Data Parallelism (DDP) replicates model parameters across multiple GPUs, processing distinct mini-batch slices in parallel and synchronizing gradients via All-Reduce collectives.",
      "correctAnswerEn": "Distributed Data Parallelism (DDP) replicates model parameters across multiple GPUs, processing distinct mini-batch slices in parallel and synchronizing gradients via All-Reduce collectives.",
      "correctAnswerAr": "تكرر الموازاة الموزعة للبيانات (DDP) معاملات النموذج عبر وحدات GPU متعددة، فتعالج حزم البيانات بالتوازي وتزامن التدرجات بعملية All-Reduce.",
      "correctIndex": 3,
      "explanationEn": "Correct Theoretical Formulation: Distributed Data Parallelism (DDP) replicates model parameters across multiple GPUs, processing distinct mini-batch slices in parallel and synchronizing gradients via All-Reduce collectives.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تكرر الموازاة الموزعة للبيانات (DDP) معاملات النموذج عبر وحدات GPU متعددة، فتعالج حزم البيانات بالتوازي وتزامن التدرجات بعملية All-Reduce.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Distributed Data Parallelism (DDP) replicates model parameters across multiple GPUs, processing distinct mini-batch slices in parallel and synchronizing gradients via All-Reduce collectives.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تكرر الموازاة الموزعة للبيانات (DDP) معاملات النموذج عبر وحدات GPU متعددة، فتعالج حزم البيانات بالتوازي وتزامن التدرجات بعملية All-Reduce.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch4_easy_53",
      "titleEn": "[EASY] Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning - Review 53",
      "titleAr": "[مستوى أساسي] ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات - سؤال 53",
      "questionEn": "[AI & Data Science Core Concept] Regarding Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning, which of the following statements is theoretically and mathematically sound? (Variant 53)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 53)",
      "optionsEn": [
        "Model quantization converts 32-bit floating-point parameters (FP32) into low-bitwidth integers (INT8 or FP4), accelerating inference execution and reducing memory bandwidth demand.",
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "يحول تكميم النماذج معاملات الأوزان ذات الدقة 32 بت العائمة (FP32) إلى أعداد صحيحة منخفضة العرض (INT8 أو FP4)، مسرعاً الاستدلال ومقلصاً استهلاك الذاكرة.",
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "Model quantization converts 32-bit floating-point parameters (FP32) into low-bitwidth integers (INT8 or FP4), accelerating inference execution and reducing memory bandwidth demand.",
      "correctAnswerEn": "Model quantization converts 32-bit floating-point parameters (FP32) into low-bitwidth integers (INT8 or FP4), accelerating inference execution and reducing memory bandwidth demand.",
      "correctAnswerAr": "يحول تكميم النماذج معاملات الأوزان ذات الدقة 32 بت العائمة (FP32) إلى أعداد صحيحة منخفضة العرض (INT8 أو FP4)، مسرعاً الاستدلال ومقلصاً استهلاك الذاكرة.",
      "correctIndex": 0,
      "explanationEn": "Correct Theoretical Formulation: Model quantization converts 32-bit floating-point parameters (FP32) into low-bitwidth integers (INT8 or FP4), accelerating inference execution and reducing memory bandwidth demand.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يحول تكميم النماذج معاملات الأوزان ذات الدقة 32 بت العائمة (FP32) إلى أعداد صحيحة منخفضة العرض (INT8 أو FP4)، مسرعاً الاستدلال ومقلصاً استهلاك الذاكرة.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Model quantization converts 32-bit floating-point parameters (FP32) into low-bitwidth integers (INT8 or FP4), accelerating inference execution and reducing memory bandwidth demand.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يحول تكميم النماذج معاملات الأوزان ذات الدقة 32 بت العائمة (FP32) إلى أعداد صحيحة منخفضة العرض (INT8 أو FP4)، مسرعاً الاستدلال ومقلصاً استهلاك الذاكرة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch4_easy_54",
      "titleEn": "[EASY] Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance - Review 54",
      "titleAr": "[مستوى أساسي] العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة - سؤال 54",
      "questionEn": "[AI & Data Science Core Concept] Regarding Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance, which of the following statements is theoretically and mathematically sound? (Variant 54)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 54)",
      "optionsEn": [
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "Explainable AI (XAI) techniques interpret and audit complex black-box machine learning predictions, ensuring transparency, ethical accountability, and compliance with data protection laws.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "تفسر تقنيات الذكاء الاصطناعي القابل للتفسير (XAI) وتدقق تنبؤات النماذج المعقدة، محققة الشفافية والمساءلة الأخلاقية والامتثال لقوانين حماية البيانات.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "Explainable AI (XAI) techniques interpret and audit complex black-box machine learning predictions, ensuring transparency, ethical accountability, and compliance with data protection laws.",
      "correctAnswerEn": "Explainable AI (XAI) techniques interpret and audit complex black-box machine learning predictions, ensuring transparency, ethical accountability, and compliance with data protection laws.",
      "correctAnswerAr": "تفسر تقنيات الذكاء الاصطناعي القابل للتفسير (XAI) وتدقق تنبؤات النماذج المعقدة، محققة الشفافية والمساءلة الأخلاقية والامتثال لقوانين حماية البيانات.",
      "correctIndex": 1,
      "explanationEn": "Correct Theoretical Formulation: Explainable AI (XAI) techniques interpret and audit complex black-box machine learning predictions, ensuring transparency, ethical accountability, and compliance with data protection laws.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تفسر تقنيات الذكاء الاصطناعي القابل للتفسير (XAI) وتدقق تنبؤات النماذج المعقدة، محققة الشفافية والمساءلة الأخلاقية والامتثال لقوانين حماية البيانات.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Explainable AI (XAI) techniques interpret and audit complex black-box machine learning predictions, ensuring transparency, ethical accountability, and compliance with data protection laws.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تفسر تقنيات الذكاء الاصطناعي القابل للتفسير (XAI) وتدقق تنبؤات النماذج المعقدة، محققة الشفافية والمساءلة الأخلاقية والامتثال لقوانين حماية البيانات.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch4_easy_55",
      "titleEn": "[EASY] Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO) - Review 55",
      "titleAr": "[مستوى أساسي] التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO - سؤال 55",
      "questionEn": "[AI & Data Science Core Concept] Regarding Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO), which of the following statements is theoretically and mathematically sound? (Variant 55)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 55)",
      "optionsEn": [
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Distributed Data Parallelism (DDP) replicates model parameters across multiple GPUs, processing distinct mini-batch slices in parallel and synchronizing gradients via All-Reduce collectives.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تكرر الموازاة الموزعة للبيانات (DDP) معاملات النموذج عبر وحدات GPU متعددة، فتعالج حزم البيانات بالتوازي وتزامن التدرجات بعملية All-Reduce.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "Distributed Data Parallelism (DDP) replicates model parameters across multiple GPUs, processing distinct mini-batch slices in parallel and synchronizing gradients via All-Reduce collectives.",
      "correctAnswerEn": "Distributed Data Parallelism (DDP) replicates model parameters across multiple GPUs, processing distinct mini-batch slices in parallel and synchronizing gradients via All-Reduce collectives.",
      "correctAnswerAr": "تكرر الموازاة الموزعة للبيانات (DDP) معاملات النموذج عبر وحدات GPU متعددة، فتعالج حزم البيانات بالتوازي وتزامن التدرجات بعملية All-Reduce.",
      "correctIndex": 2,
      "explanationEn": "Correct Theoretical Formulation: Distributed Data Parallelism (DDP) replicates model parameters across multiple GPUs, processing distinct mini-batch slices in parallel and synchronizing gradients via All-Reduce collectives.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تكرر الموازاة الموزعة للبيانات (DDP) معاملات النموذج عبر وحدات GPU متعددة، فتعالج حزم البيانات بالتوازي وتزامن التدرجات بعملية All-Reduce.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Distributed Data Parallelism (DDP) replicates model parameters across multiple GPUs, processing distinct mini-batch slices in parallel and synchronizing gradients via All-Reduce collectives.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تكرر الموازاة الموزعة للبيانات (DDP) معاملات النموذج عبر وحدات GPU متعددة، فتعالج حزم البيانات بالتوازي وتزامن التدرجات بعملية All-Reduce.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch4_easy_56",
      "titleEn": "[EASY] Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning - Review 56",
      "titleAr": "[مستوى أساسي] ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات - سؤال 56",
      "questionEn": "[AI & Data Science Core Concept] Regarding Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning, which of the following statements is theoretically and mathematically sound? (Variant 56)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 56)",
      "optionsEn": [
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "Model quantization converts 32-bit floating-point parameters (FP32) into low-bitwidth integers (INT8 or FP4), accelerating inference execution and reducing memory bandwidth demand."
      ],
      "optionsAr": [
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "يحول تكميم النماذج معاملات الأوزان ذات الدقة 32 بت العائمة (FP32) إلى أعداد صحيحة منخفضة العرض (INT8 أو FP4)، مسرعاً الاستدلال ومقلصاً استهلاك الذاكرة."
      ],
      "correctAnswer": "Model quantization converts 32-bit floating-point parameters (FP32) into low-bitwidth integers (INT8 or FP4), accelerating inference execution and reducing memory bandwidth demand.",
      "correctAnswerEn": "Model quantization converts 32-bit floating-point parameters (FP32) into low-bitwidth integers (INT8 or FP4), accelerating inference execution and reducing memory bandwidth demand.",
      "correctAnswerAr": "يحول تكميم النماذج معاملات الأوزان ذات الدقة 32 بت العائمة (FP32) إلى أعداد صحيحة منخفضة العرض (INT8 أو FP4)، مسرعاً الاستدلال ومقلصاً استهلاك الذاكرة.",
      "correctIndex": 3,
      "explanationEn": "Correct Theoretical Formulation: Model quantization converts 32-bit floating-point parameters (FP32) into low-bitwidth integers (INT8 or FP4), accelerating inference execution and reducing memory bandwidth demand.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يحول تكميم النماذج معاملات الأوزان ذات الدقة 32 بت العائمة (FP32) إلى أعداد صحيحة منخفضة العرض (INT8 أو FP4)، مسرعاً الاستدلال ومقلصاً استهلاك الذاكرة.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Model quantization converts 32-bit floating-point parameters (FP32) into low-bitwidth integers (INT8 or FP4), accelerating inference execution and reducing memory bandwidth demand.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يحول تكميم النماذج معاملات الأوزان ذات الدقة 32 بت العائمة (FP32) إلى أعداد صحيحة منخفضة العرض (INT8 أو FP4)، مسرعاً الاستدلال ومقلصاً استهلاك الذاكرة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch4_easy_57",
      "titleEn": "[EASY] Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance - Review 57",
      "titleAr": "[مستوى أساسي] العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة - سؤال 57",
      "questionEn": "[AI & Data Science Core Concept] Regarding Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance, which of the following statements is theoretically and mathematically sound? (Variant 57)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 57)",
      "optionsEn": [
        "Explainable AI (XAI) techniques interpret and audit complex black-box machine learning predictions, ensuring transparency, ethical accountability, and compliance with data protection laws.",
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "تفسر تقنيات الذكاء الاصطناعي القابل للتفسير (XAI) وتدقق تنبؤات النماذج المعقدة، محققة الشفافية والمساءلة الأخلاقية والامتثال لقوانين حماية البيانات.",
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "Explainable AI (XAI) techniques interpret and audit complex black-box machine learning predictions, ensuring transparency, ethical accountability, and compliance with data protection laws.",
      "correctAnswerEn": "Explainable AI (XAI) techniques interpret and audit complex black-box machine learning predictions, ensuring transparency, ethical accountability, and compliance with data protection laws.",
      "correctAnswerAr": "تفسر تقنيات الذكاء الاصطناعي القابل للتفسير (XAI) وتدقق تنبؤات النماذج المعقدة، محققة الشفافية والمساءلة الأخلاقية والامتثال لقوانين حماية البيانات.",
      "correctIndex": 0,
      "explanationEn": "Correct Theoretical Formulation: Explainable AI (XAI) techniques interpret and audit complex black-box machine learning predictions, ensuring transparency, ethical accountability, and compliance with data protection laws.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تفسر تقنيات الذكاء الاصطناعي القابل للتفسير (XAI) وتدقق تنبؤات النماذج المعقدة، محققة الشفافية والمساءلة الأخلاقية والامتثال لقوانين حماية البيانات.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Explainable AI (XAI) techniques interpret and audit complex black-box machine learning predictions, ensuring transparency, ethical accountability, and compliance with data protection laws.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تفسر تقنيات الذكاء الاصطناعي القابل للتفسير (XAI) وتدقق تنبؤات النماذج المعقدة، محققة الشفافية والمساءلة الأخلاقية والامتثال لقوانين حماية البيانات.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch4_easy_58",
      "titleEn": "[EASY] Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO) - Review 58",
      "titleAr": "[مستوى أساسي] التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO - سؤال 58",
      "questionEn": "[AI & Data Science Core Concept] Regarding Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO), which of the following statements is theoretically and mathematically sound? (Variant 58)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 58)",
      "optionsEn": [
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "Distributed Data Parallelism (DDP) replicates model parameters across multiple GPUs, processing distinct mini-batch slices in parallel and synchronizing gradients via All-Reduce collectives.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تكرر الموازاة الموزعة للبيانات (DDP) معاملات النموذج عبر وحدات GPU متعددة، فتعالج حزم البيانات بالتوازي وتزامن التدرجات بعملية All-Reduce.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "Distributed Data Parallelism (DDP) replicates model parameters across multiple GPUs, processing distinct mini-batch slices in parallel and synchronizing gradients via All-Reduce collectives.",
      "correctAnswerEn": "Distributed Data Parallelism (DDP) replicates model parameters across multiple GPUs, processing distinct mini-batch slices in parallel and synchronizing gradients via All-Reduce collectives.",
      "correctAnswerAr": "تكرر الموازاة الموزعة للبيانات (DDP) معاملات النموذج عبر وحدات GPU متعددة، فتعالج حزم البيانات بالتوازي وتزامن التدرجات بعملية All-Reduce.",
      "correctIndex": 1,
      "explanationEn": "Correct Theoretical Formulation: Distributed Data Parallelism (DDP) replicates model parameters across multiple GPUs, processing distinct mini-batch slices in parallel and synchronizing gradients via All-Reduce collectives.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تكرر الموازاة الموزعة للبيانات (DDP) معاملات النموذج عبر وحدات GPU متعددة، فتعالج حزم البيانات بالتوازي وتزامن التدرجات بعملية All-Reduce.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Distributed Data Parallelism (DDP) replicates model parameters across multiple GPUs, processing distinct mini-batch slices in parallel and synchronizing gradients via All-Reduce collectives.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تكرر الموازاة الموزعة للبيانات (DDP) معاملات النموذج عبر وحدات GPU متعددة، فتعالج حزم البيانات بالتوازي وتزامن التدرجات بعملية All-Reduce.."
      ],
      "difficulty": "easy"
    }
  ],
  "medium": [
    {
      "id": "egbac_ai_data_science_ch4_med_1",
      "titleEn": "[MEDIUM] Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO) - Analysis 1",
      "titleAr": "[مستوى متوسط] التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO - تحليل 1",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO), what is the precise analytical formulation or operative rule? (Item 1)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 1)",
      "optionsEn": [
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves."
      ],
      "optionsAr": [
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يقوم محسن انعدام التكرار (ZeRO) بتجزئة حالات المحسن (المرحلة 1)، والتدرجات (المرحلة 2)، ومعاملات النموذج (المرحلة 3) عبر كروت GPU، ملغياً هدر الذاكرة ومحافظاً على نفس حجم الاتصال.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية."
      ],
      "correctAnswer": "The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.",
      "correctAnswerEn": "The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.",
      "correctAnswerAr": "يقوم محسن انعدام التكرار (ZeRO) بتجزئة حالات المحسن (المرحلة 1)، والتدرجات (المرحلة 2)، ومعاملات النموذج (المرحلة 3) عبر كروت GPU، ملغياً هدر الذاكرة ومحافظاً على نفس حجم الاتصال.",
      "correctIndex": 1,
      "explanationEn": "Analytical Derivation & Properties: The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يقوم محسن انعدام التكرار (ZeRO) بتجزئة حالات المحسن (المرحلة 1)، والتدرجات (المرحلة 2)، ومعاملات النموذج (المرحلة 3) عبر كروت GPU، ملغياً هدر الذاكرة ومحافظاً على نفس حجم الاتصال.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يقوم محسن انعدام التكرار (ZeRO) بتجزئة حالات المحسن (المرحلة 1)، والتدرجات (المرحلة 2)، ومعاملات النموذج (المرحلة 3) عبر كروت GPU، ملغياً هدر الذاكرة ومحافظاً على نفس حجم الاتصال.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch4_med_2",
      "titleEn": "[MEDIUM] Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning - Analysis 2",
      "titleAr": "[مستوى متوسط] ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات - تحليل 2",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning, what is the precise analytical formulation or operative rule? (Item 2)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 2)",
      "optionsEn": [
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "يرسم التكميم المتناظر القيم الحقيقية $r$ إلى عدد مكمم $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z\\right)$، بمقياس $S$ ونقطة صفر $Z$.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.",
      "correctAnswerEn": "Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.",
      "correctAnswerAr": "يرسم التكميم المتناظر القيم الحقيقية $r$ إلى عدد مكمم $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z\\right)$، بمقياس $S$ ونقطة صفر $Z$.",
      "correctIndex": 2,
      "explanationEn": "Analytical Derivation & Properties: Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يرسم التكميم المتناظر القيم الحقيقية $r$ إلى عدد مكمم $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z\\right)$، بمقياس $S$ ونقطة صفر $Z$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يرسم التكميم المتناظر القيم الحقيقية $r$ إلى عدد مكمم $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z\\right)$، بمقياس $S$ ونقطة صفر $Z$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch4_med_3",
      "titleEn": "[MEDIUM] Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance - Analysis 3",
      "titleAr": "[مستوى متوسط] العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة - تحليل 3",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance, what is the precise analytical formulation or operative rule? (Item 3)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 3)",
      "optionsEn": [
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms."
      ],
      "optionsAr": [
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحسب قيم SHAP الإسهامات الهامشية العادلة للخصائص بالاستناد إلى نظرية الألعاب التعاونية: $\\phi_i = \\sum \\text{weights} [f(S \\cup \\{i\\}) - f(S)]$، محققة بديهيات الكفاءة والتناظر والتجميع."
      ],
      "correctAnswer": "SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.",
      "correctAnswerEn": "SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.",
      "correctAnswerAr": "تحسب قيم SHAP الإسهامات الهامشية العادلة للخصائص بالاستناد إلى نظرية الألعاب التعاونية: $\\phi_i = \\sum \\text{weights} [f(S \\cup \\{i\\}) - f(S)]$، محققة بديهيات الكفاءة والتناظر والتجميع.",
      "correctIndex": 3,
      "explanationEn": "Analytical Derivation & Properties: SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تحسب قيم SHAP الإسهامات الهامشية العادلة للخصائص بالاستناد إلى نظرية الألعاب التعاونية: $\\phi_i = \\sum \\text{weights} [f(S \\cup \\{i\\}) - f(S)]$، محققة بديهيات الكفاءة والتناظر والتجميع.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تحسب قيم SHAP الإسهامات الهامشية العادلة للخصائص بالاستناد إلى نظرية الألعاب التعاونية: $\\phi_i = \\sum \\text{weights} [f(S \\cup \\{i\\}) - f(S)]$، محققة بديهيات الكفاءة والتناظر والتجميع.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch4_med_4",
      "titleEn": "[MEDIUM] Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO) - Analysis 4",
      "titleAr": "[مستوى متوسط] التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO - تحليل 4",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO), what is the precise analytical formulation or operative rule? (Item 4)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 4)",
      "optionsEn": [
        "The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent."
      ],
      "optionsAr": [
        "يقوم محسن انعدام التكرار (ZeRO) بتجزئة حالات المحسن (المرحلة 1)، والتدرجات (المرحلة 2)، ومعاملات النموذج (المرحلة 3) عبر كروت GPU، ملغياً هدر الذاكرة ومحافظاً على نفس حجم الاتصال.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة."
      ],
      "correctAnswer": "The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.",
      "correctAnswerEn": "The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.",
      "correctAnswerAr": "يقوم محسن انعدام التكرار (ZeRO) بتجزئة حالات المحسن (المرحلة 1)، والتدرجات (المرحلة 2)، ومعاملات النموذج (المرحلة 3) عبر كروت GPU، ملغياً هدر الذاكرة ومحافظاً على نفس حجم الاتصال.",
      "correctIndex": 0,
      "explanationEn": "Analytical Derivation & Properties: The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يقوم محسن انعدام التكرار (ZeRO) بتجزئة حالات المحسن (المرحلة 1)، والتدرجات (المرحلة 2)، ومعاملات النموذج (المرحلة 3) عبر كروت GPU، ملغياً هدر الذاكرة ومحافظاً على نفس حجم الاتصال.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يقوم محسن انعدام التكرار (ZeRO) بتجزئة حالات المحسن (المرحلة 1)، والتدرجات (المرحلة 2)، ومعاملات النموذج (المرحلة 3) عبر كروت GPU، ملغياً هدر الذاكرة ومحافظاً على نفس حجم الاتصال.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch4_med_5",
      "titleEn": "[MEDIUM] Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning - Analysis 5",
      "titleAr": "[مستوى متوسط] ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات - تحليل 5",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning, what is the precise analytical formulation or operative rule? (Item 5)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 5)",
      "optionsEn": [
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "يرسم التكميم المتناظر القيم الحقيقية $r$ إلى عدد مكمم $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z\\right)$، بمقياس $S$ ونقطة صفر $Z$.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.",
      "correctAnswerEn": "Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.",
      "correctAnswerAr": "يرسم التكميم المتناظر القيم الحقيقية $r$ إلى عدد مكمم $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z\\right)$، بمقياس $S$ ونقطة صفر $Z$.",
      "correctIndex": 1,
      "explanationEn": "Analytical Derivation & Properties: Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يرسم التكميم المتناظر القيم الحقيقية $r$ إلى عدد مكمم $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z\\right)$، بمقياس $S$ ونقطة صفر $Z$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يرسم التكميم المتناظر القيم الحقيقية $r$ إلى عدد مكمم $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z\\right)$، بمقياس $S$ ونقطة صفر $Z$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch4_med_6",
      "titleEn": "[MEDIUM] Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance - Analysis 6",
      "titleAr": "[مستوى متوسط] العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة - تحليل 6",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance, what is the precise analytical formulation or operative rule? (Item 6)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 6)",
      "optionsEn": [
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step."
      ],
      "optionsAr": [
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تحسب قيم SHAP الإسهامات الهامشية العادلة للخصائص بالاستناد إلى نظرية الألعاب التعاونية: $\\phi_i = \\sum \\text{weights} [f(S \\cup \\{i\\}) - f(S)]$، محققة بديهيات الكفاءة والتناظر والتجميع.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين."
      ],
      "correctAnswer": "SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.",
      "correctAnswerEn": "SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.",
      "correctAnswerAr": "تحسب قيم SHAP الإسهامات الهامشية العادلة للخصائص بالاستناد إلى نظرية الألعاب التعاونية: $\\phi_i = \\sum \\text{weights} [f(S \\cup \\{i\\}) - f(S)]$، محققة بديهيات الكفاءة والتناظر والتجميع.",
      "correctIndex": 2,
      "explanationEn": "Analytical Derivation & Properties: SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تحسب قيم SHAP الإسهامات الهامشية العادلة للخصائص بالاستناد إلى نظرية الألعاب التعاونية: $\\phi_i = \\sum \\text{weights} [f(S \\cup \\{i\\}) - f(S)]$، محققة بديهيات الكفاءة والتناظر والتجميع.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تحسب قيم SHAP الإسهامات الهامشية العادلة للخصائص بالاستناد إلى نظرية الألعاب التعاونية: $\\phi_i = \\sum \\text{weights} [f(S \\cup \\{i\\}) - f(S)]$، محققة بديهيات الكفاءة والتناظر والتجميع.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch4_med_7",
      "titleEn": "[MEDIUM] Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO) - Analysis 7",
      "titleAr": "[مستوى متوسط] التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO - تحليل 7",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO), what is the precise analytical formulation or operative rule? (Item 7)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 7)",
      "optionsEn": [
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume."
      ],
      "optionsAr": [
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يقوم محسن انعدام التكرار (ZeRO) بتجزئة حالات المحسن (المرحلة 1)، والتدرجات (المرحلة 2)، ومعاملات النموذج (المرحلة 3) عبر كروت GPU، ملغياً هدر الذاكرة ومحافظاً على نفس حجم الاتصال."
      ],
      "correctAnswer": "The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.",
      "correctAnswerEn": "The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.",
      "correctAnswerAr": "يقوم محسن انعدام التكرار (ZeRO) بتجزئة حالات المحسن (المرحلة 1)، والتدرجات (المرحلة 2)، ومعاملات النموذج (المرحلة 3) عبر كروت GPU، ملغياً هدر الذاكرة ومحافظاً على نفس حجم الاتصال.",
      "correctIndex": 3,
      "explanationEn": "Analytical Derivation & Properties: The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يقوم محسن انعدام التكرار (ZeRO) بتجزئة حالات المحسن (المرحلة 1)، والتدرجات (المرحلة 2)، ومعاملات النموذج (المرحلة 3) عبر كروت GPU، ملغياً هدر الذاكرة ومحافظاً على نفس حجم الاتصال.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يقوم محسن انعدام التكرار (ZeRO) بتجزئة حالات المحسن (المرحلة 1)، والتدرجات (المرحلة 2)، ومعاملات النموذج (المرحلة 3) عبر كروت GPU، ملغياً هدر الذاكرة ومحافظاً على نفس حجم الاتصال.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch4_med_8",
      "titleEn": "[MEDIUM] Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning - Analysis 8",
      "titleAr": "[مستوى متوسط] ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات - تحليل 8",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning, what is the precise analytical formulation or operative rule? (Item 8)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 8)",
      "optionsEn": [
        "Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.",
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "يرسم التكميم المتناظر القيم الحقيقية $r$ إلى عدد مكمم $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z\\right)$، بمقياس $S$ ونقطة صفر $Z$.",
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.",
      "correctAnswerEn": "Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.",
      "correctAnswerAr": "يرسم التكميم المتناظر القيم الحقيقية $r$ إلى عدد مكمم $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z\\right)$، بمقياس $S$ ونقطة صفر $Z$.",
      "correctIndex": 0,
      "explanationEn": "Analytical Derivation & Properties: Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يرسم التكميم المتناظر القيم الحقيقية $r$ إلى عدد مكمم $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z\\right)$، بمقياس $S$ ونقطة صفر $Z$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يرسم التكميم المتناظر القيم الحقيقية $r$ إلى عدد مكمم $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z\\right)$، بمقياس $S$ ونقطة صفر $Z$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch4_med_9",
      "titleEn": "[MEDIUM] Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance - Analysis 9",
      "titleAr": "[مستوى متوسط] العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة - تحليل 9",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance, what is the precise analytical formulation or operative rule? (Item 9)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 9)",
      "optionsEn": [
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.",
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs."
      ],
      "optionsAr": [
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تحسب قيم SHAP الإسهامات الهامشية العادلة للخصائص بالاستناد إلى نظرية الألعاب التعاونية: $\\phi_i = \\sum \\text{weights} [f(S \\cup \\{i\\}) - f(S)]$، محققة بديهيات الكفاءة والتناظر والتجميع.",
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة."
      ],
      "correctAnswer": "SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.",
      "correctAnswerEn": "SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.",
      "correctAnswerAr": "تحسب قيم SHAP الإسهامات الهامشية العادلة للخصائص بالاستناد إلى نظرية الألعاب التعاونية: $\\phi_i = \\sum \\text{weights} [f(S \\cup \\{i\\}) - f(S)]$، محققة بديهيات الكفاءة والتناظر والتجميع.",
      "correctIndex": 1,
      "explanationEn": "Analytical Derivation & Properties: SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تحسب قيم SHAP الإسهامات الهامشية العادلة للخصائص بالاستناد إلى نظرية الألعاب التعاونية: $\\phi_i = \\sum \\text{weights} [f(S \\cup \\{i\\}) - f(S)]$، محققة بديهيات الكفاءة والتناظر والتجميع.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تحسب قيم SHAP الإسهامات الهامشية العادلة للخصائص بالاستناد إلى نظرية الألعاب التعاونية: $\\phi_i = \\sum \\text{weights} [f(S \\cup \\{i\\}) - f(S)]$، محققة بديهيات الكفاءة والتناظر والتجميع.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch4_med_10",
      "titleEn": "[MEDIUM] Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO) - Analysis 10",
      "titleAr": "[مستوى متوسط] التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO - تحليل 10",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO), what is the precise analytical formulation or operative rule? (Item 10)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 10)",
      "optionsEn": [
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.",
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence."
      ],
      "optionsAr": [
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "يقوم محسن انعدام التكرار (ZeRO) بتجزئة حالات المحسن (المرحلة 1)، والتدرجات (المرحلة 2)، ومعاملات النموذج (المرحلة 3) عبر كروت GPU، ملغياً هدر الذاكرة ومحافظاً على نفس حجم الاتصال.",
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية."
      ],
      "correctAnswer": "The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.",
      "correctAnswerEn": "The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.",
      "correctAnswerAr": "يقوم محسن انعدام التكرار (ZeRO) بتجزئة حالات المحسن (المرحلة 1)، والتدرجات (المرحلة 2)، ومعاملات النموذج (المرحلة 3) عبر كروت GPU، ملغياً هدر الذاكرة ومحافظاً على نفس حجم الاتصال.",
      "correctIndex": 2,
      "explanationEn": "Analytical Derivation & Properties: The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يقوم محسن انعدام التكرار (ZeRO) بتجزئة حالات المحسن (المرحلة 1)، والتدرجات (المرحلة 2)، ومعاملات النموذج (المرحلة 3) عبر كروت GPU، ملغياً هدر الذاكرة ومحافظاً على نفس حجم الاتصال.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يقوم محسن انعدام التكرار (ZeRO) بتجزئة حالات المحسن (المرحلة 1)، والتدرجات (المرحلة 2)، ومعاملات النموذج (المرحلة 3) عبر كروت GPU، ملغياً هدر الذاكرة ومحافظاً على نفس حجم الاتصال.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch4_med_11",
      "titleEn": "[MEDIUM] Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning - Analysis 11",
      "titleAr": "[مستوى متوسط] ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات - تحليل 11",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning, what is the precise analytical formulation or operative rule? (Item 11)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 11)",
      "optionsEn": [
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$."
      ],
      "optionsAr": [
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "يرسم التكميم المتناظر القيم الحقيقية $r$ إلى عدد مكمم $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z\\right)$، بمقياس $S$ ونقطة صفر $Z$."
      ],
      "correctAnswer": "Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.",
      "correctAnswerEn": "Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.",
      "correctAnswerAr": "يرسم التكميم المتناظر القيم الحقيقية $r$ إلى عدد مكمم $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z\\right)$، بمقياس $S$ ونقطة صفر $Z$.",
      "correctIndex": 3,
      "explanationEn": "Analytical Derivation & Properties: Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يرسم التكميم المتناظر القيم الحقيقية $r$ إلى عدد مكمم $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z\\right)$، بمقياس $S$ ونقطة صفر $Z$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يرسم التكميم المتناظر القيم الحقيقية $r$ إلى عدد مكمم $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z\\right)$، بمقياس $S$ ونقطة صفر $Z$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch4_med_12",
      "titleEn": "[MEDIUM] Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance - Analysis 12",
      "titleAr": "[مستوى متوسط] العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة - تحليل 12",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance, what is the precise analytical formulation or operative rule? (Item 12)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 12)",
      "optionsEn": [
        "SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data."
      ],
      "optionsAr": [
        "تحسب قيم SHAP الإسهامات الهامشية العادلة للخصائص بالاستناد إلى نظرية الألعاب التعاونية: $\\phi_i = \\sum \\text{weights} [f(S \\cup \\{i\\}) - f(S)]$، محققة بديهيات الكفاءة والتناظر والتجميع.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش."
      ],
      "correctAnswer": "SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.",
      "correctAnswerEn": "SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.",
      "correctAnswerAr": "تحسب قيم SHAP الإسهامات الهامشية العادلة للخصائص بالاستناد إلى نظرية الألعاب التعاونية: $\\phi_i = \\sum \\text{weights} [f(S \\cup \\{i\\}) - f(S)]$، محققة بديهيات الكفاءة والتناظر والتجميع.",
      "correctIndex": 0,
      "explanationEn": "Analytical Derivation & Properties: SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تحسب قيم SHAP الإسهامات الهامشية العادلة للخصائص بالاستناد إلى نظرية الألعاب التعاونية: $\\phi_i = \\sum \\text{weights} [f(S \\cup \\{i\\}) - f(S)]$، محققة بديهيات الكفاءة والتناظر والتجميع.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تحسب قيم SHAP الإسهامات الهامشية العادلة للخصائص بالاستناد إلى نظرية الألعاب التعاونية: $\\phi_i = \\sum \\text{weights} [f(S \\cup \\{i\\}) - f(S)]$، محققة بديهيات الكفاءة والتناظر والتجميع.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch4_med_13",
      "titleEn": "[MEDIUM] Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO) - Analysis 13",
      "titleAr": "[مستوى متوسط] التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO - تحليل 13",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO), what is the precise analytical formulation or operative rule? (Item 13)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 13)",
      "optionsEn": [
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan."
      ],
      "optionsAr": [
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "يقوم محسن انعدام التكرار (ZeRO) بتجزئة حالات المحسن (المرحلة 1)، والتدرجات (المرحلة 2)، ومعاملات النموذج (المرحلة 3) عبر كروت GPU، ملغياً هدر الذاكرة ومحافظاً على نفس حجم الاتصال.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG)."
      ],
      "correctAnswer": "The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.",
      "correctAnswerEn": "The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.",
      "correctAnswerAr": "يقوم محسن انعدام التكرار (ZeRO) بتجزئة حالات المحسن (المرحلة 1)، والتدرجات (المرحلة 2)، ومعاملات النموذج (المرحلة 3) عبر كروت GPU، ملغياً هدر الذاكرة ومحافظاً على نفس حجم الاتصال.",
      "correctIndex": 1,
      "explanationEn": "Analytical Derivation & Properties: The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يقوم محسن انعدام التكرار (ZeRO) بتجزئة حالات المحسن (المرحلة 1)، والتدرجات (المرحلة 2)، ومعاملات النموذج (المرحلة 3) عبر كروت GPU، ملغياً هدر الذاكرة ومحافظاً على نفس حجم الاتصال.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يقوم محسن انعدام التكرار (ZeRO) بتجزئة حالات المحسن (المرحلة 1)، والتدرجات (المرحلة 2)، ومعاملات النموذج (المرحلة 3) عبر كروت GPU، ملغياً هدر الذاكرة ومحافظاً على نفس حجم الاتصال.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch4_med_14",
      "titleEn": "[MEDIUM] Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning - Analysis 14",
      "titleAr": "[مستوى متوسط] ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات - تحليل 14",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning, what is the precise analytical formulation or operative rule? (Item 14)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 14)",
      "optionsEn": [
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "يرسم التكميم المتناظر القيم الحقيقية $r$ إلى عدد مكمم $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z\\right)$، بمقياس $S$ ونقطة صفر $Z$.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.",
      "correctAnswerEn": "Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.",
      "correctAnswerAr": "يرسم التكميم المتناظر القيم الحقيقية $r$ إلى عدد مكمم $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z\\right)$، بمقياس $S$ ونقطة صفر $Z$.",
      "correctIndex": 2,
      "explanationEn": "Analytical Derivation & Properties: Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يرسم التكميم المتناظر القيم الحقيقية $r$ إلى عدد مكمم $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z\\right)$، بمقياس $S$ ونقطة صفر $Z$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يرسم التكميم المتناظر القيم الحقيقية $r$ إلى عدد مكمم $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z\\right)$، بمقياس $S$ ونقطة صفر $Z$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch4_med_15",
      "titleEn": "[MEDIUM] Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance - Analysis 15",
      "titleAr": "[مستوى متوسط] العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة - تحليل 15",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance, what is the precise analytical formulation or operative rule? (Item 15)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 15)",
      "optionsEn": [
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms."
      ],
      "optionsAr": [
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "تحسب قيم SHAP الإسهامات الهامشية العادلة للخصائص بالاستناد إلى نظرية الألعاب التعاونية: $\\phi_i = \\sum \\text{weights} [f(S \\cup \\{i\\}) - f(S)]$، محققة بديهيات الكفاءة والتناظر والتجميع."
      ],
      "correctAnswer": "SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.",
      "correctAnswerEn": "SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.",
      "correctAnswerAr": "تحسب قيم SHAP الإسهامات الهامشية العادلة للخصائص بالاستناد إلى نظرية الألعاب التعاونية: $\\phi_i = \\sum \\text{weights} [f(S \\cup \\{i\\}) - f(S)]$، محققة بديهيات الكفاءة والتناظر والتجميع.",
      "correctIndex": 3,
      "explanationEn": "Analytical Derivation & Properties: SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تحسب قيم SHAP الإسهامات الهامشية العادلة للخصائص بالاستناد إلى نظرية الألعاب التعاونية: $\\phi_i = \\sum \\text{weights} [f(S \\cup \\{i\\}) - f(S)]$، محققة بديهيات الكفاءة والتناظر والتجميع.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تحسب قيم SHAP الإسهامات الهامشية العادلة للخصائص بالاستناد إلى نظرية الألعاب التعاونية: $\\phi_i = \\sum \\text{weights} [f(S \\cup \\{i\\}) - f(S)]$، محققة بديهيات الكفاءة والتناظر والتجميع.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch4_med_16",
      "titleEn": "[MEDIUM] Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO) - Analysis 16",
      "titleAr": "[مستوى متوسط] التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO - تحليل 16",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO), what is the precise analytical formulation or operative rule? (Item 16)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 16)",
      "optionsEn": [
        "The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves."
      ],
      "optionsAr": [
        "يقوم محسن انعدام التكرار (ZeRO) بتجزئة حالات المحسن (المرحلة 1)، والتدرجات (المرحلة 2)، ومعاملات النموذج (المرحلة 3) عبر كروت GPU، ملغياً هدر الذاكرة ومحافظاً على نفس حجم الاتصال.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية."
      ],
      "correctAnswer": "The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.",
      "correctAnswerEn": "The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.",
      "correctAnswerAr": "يقوم محسن انعدام التكرار (ZeRO) بتجزئة حالات المحسن (المرحلة 1)، والتدرجات (المرحلة 2)، ومعاملات النموذج (المرحلة 3) عبر كروت GPU، ملغياً هدر الذاكرة ومحافظاً على نفس حجم الاتصال.",
      "correctIndex": 0,
      "explanationEn": "Analytical Derivation & Properties: The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يقوم محسن انعدام التكرار (ZeRO) بتجزئة حالات المحسن (المرحلة 1)، والتدرجات (المرحلة 2)، ومعاملات النموذج (المرحلة 3) عبر كروت GPU، ملغياً هدر الذاكرة ومحافظاً على نفس حجم الاتصال.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يقوم محسن انعدام التكرار (ZeRO) بتجزئة حالات المحسن (المرحلة 1)، والتدرجات (المرحلة 2)، ومعاملات النموذج (المرحلة 3) عبر كروت GPU، ملغياً هدر الذاكرة ومحافظاً على نفس حجم الاتصال.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch4_med_17",
      "titleEn": "[MEDIUM] Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning - Analysis 17",
      "titleAr": "[مستوى متوسط] ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات - تحليل 17",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning, what is the precise analytical formulation or operative rule? (Item 17)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 17)",
      "optionsEn": [
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "يرسم التكميم المتناظر القيم الحقيقية $r$ إلى عدد مكمم $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z\\right)$، بمقياس $S$ ونقطة صفر $Z$.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.",
      "correctAnswerEn": "Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.",
      "correctAnswerAr": "يرسم التكميم المتناظر القيم الحقيقية $r$ إلى عدد مكمم $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z\\right)$، بمقياس $S$ ونقطة صفر $Z$.",
      "correctIndex": 1,
      "explanationEn": "Analytical Derivation & Properties: Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يرسم التكميم المتناظر القيم الحقيقية $r$ إلى عدد مكمم $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z\\right)$، بمقياس $S$ ونقطة صفر $Z$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يرسم التكميم المتناظر القيم الحقيقية $r$ إلى عدد مكمم $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z\\right)$، بمقياس $S$ ونقطة صفر $Z$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch4_med_18",
      "titleEn": "[MEDIUM] Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance - Analysis 18",
      "titleAr": "[مستوى متوسط] العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة - تحليل 18",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance, what is the precise analytical formulation or operative rule? (Item 18)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 18)",
      "optionsEn": [
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation."
      ],
      "optionsAr": [
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تحسب قيم SHAP الإسهامات الهامشية العادلة للخصائص بالاستناد إلى نظرية الألعاب التعاونية: $\\phi_i = \\sum \\text{weights} [f(S \\cup \\{i\\}) - f(S)]$، محققة بديهيات الكفاءة والتناظر والتجميع.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي."
      ],
      "correctAnswer": "SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.",
      "correctAnswerEn": "SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.",
      "correctAnswerAr": "تحسب قيم SHAP الإسهامات الهامشية العادلة للخصائص بالاستناد إلى نظرية الألعاب التعاونية: $\\phi_i = \\sum \\text{weights} [f(S \\cup \\{i\\}) - f(S)]$، محققة بديهيات الكفاءة والتناظر والتجميع.",
      "correctIndex": 2,
      "explanationEn": "Analytical Derivation & Properties: SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تحسب قيم SHAP الإسهامات الهامشية العادلة للخصائص بالاستناد إلى نظرية الألعاب التعاونية: $\\phi_i = \\sum \\text{weights} [f(S \\cup \\{i\\}) - f(S)]$، محققة بديهيات الكفاءة والتناظر والتجميع.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تحسب قيم SHAP الإسهامات الهامشية العادلة للخصائص بالاستناد إلى نظرية الألعاب التعاونية: $\\phi_i = \\sum \\text{weights} [f(S \\cup \\{i\\}) - f(S)]$، محققة بديهيات الكفاءة والتناظر والتجميع.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch4_med_19",
      "titleEn": "[MEDIUM] Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO) - Analysis 19",
      "titleAr": "[مستوى متوسط] التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO - تحليل 19",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO), what is the precise analytical formulation or operative rule? (Item 19)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 19)",
      "optionsEn": [
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume."
      ],
      "optionsAr": [
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "يقوم محسن انعدام التكرار (ZeRO) بتجزئة حالات المحسن (المرحلة 1)، والتدرجات (المرحلة 2)، ومعاملات النموذج (المرحلة 3) عبر كروت GPU، ملغياً هدر الذاكرة ومحافظاً على نفس حجم الاتصال."
      ],
      "correctAnswer": "The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.",
      "correctAnswerEn": "The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.",
      "correctAnswerAr": "يقوم محسن انعدام التكرار (ZeRO) بتجزئة حالات المحسن (المرحلة 1)، والتدرجات (المرحلة 2)، ومعاملات النموذج (المرحلة 3) عبر كروت GPU، ملغياً هدر الذاكرة ومحافظاً على نفس حجم الاتصال.",
      "correctIndex": 3,
      "explanationEn": "Analytical Derivation & Properties: The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يقوم محسن انعدام التكرار (ZeRO) بتجزئة حالات المحسن (المرحلة 1)، والتدرجات (المرحلة 2)، ومعاملات النموذج (المرحلة 3) عبر كروت GPU، ملغياً هدر الذاكرة ومحافظاً على نفس حجم الاتصال.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يقوم محسن انعدام التكرار (ZeRO) بتجزئة حالات المحسن (المرحلة 1)، والتدرجات (المرحلة 2)، ومعاملات النموذج (المرحلة 3) عبر كروت GPU، ملغياً هدر الذاكرة ومحافظاً على نفس حجم الاتصال.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch4_med_20",
      "titleEn": "[MEDIUM] Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning - Analysis 20",
      "titleAr": "[مستوى متوسط] ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات - تحليل 20",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning, what is the precise analytical formulation or operative rule? (Item 20)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 20)",
      "optionsEn": [
        "Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.",
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "يرسم التكميم المتناظر القيم الحقيقية $r$ إلى عدد مكمم $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z\\right)$، بمقياس $S$ ونقطة صفر $Z$.",
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.",
      "correctAnswerEn": "Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.",
      "correctAnswerAr": "يرسم التكميم المتناظر القيم الحقيقية $r$ إلى عدد مكمم $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z\\right)$، بمقياس $S$ ونقطة صفر $Z$.",
      "correctIndex": 0,
      "explanationEn": "Analytical Derivation & Properties: Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يرسم التكميم المتناظر القيم الحقيقية $r$ إلى عدد مكمم $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z\\right)$، بمقياس $S$ ونقطة صفر $Z$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يرسم التكميم المتناظر القيم الحقيقية $r$ إلى عدد مكمم $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z\\right)$، بمقياس $S$ ونقطة صفر $Z$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch4_med_21",
      "titleEn": "[MEDIUM] Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance - Analysis 21",
      "titleAr": "[مستوى متوسط] العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة - تحليل 21",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance, what is the precise analytical formulation or operative rule? (Item 21)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 21)",
      "optionsEn": [
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.",
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step."
      ],
      "optionsAr": [
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تحسب قيم SHAP الإسهامات الهامشية العادلة للخصائص بالاستناد إلى نظرية الألعاب التعاونية: $\\phi_i = \\sum \\text{weights} [f(S \\cup \\{i\\}) - f(S)]$، محققة بديهيات الكفاءة والتناظر والتجميع.",
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين."
      ],
      "correctAnswer": "SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.",
      "correctAnswerEn": "SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.",
      "correctAnswerAr": "تحسب قيم SHAP الإسهامات الهامشية العادلة للخصائص بالاستناد إلى نظرية الألعاب التعاونية: $\\phi_i = \\sum \\text{weights} [f(S \\cup \\{i\\}) - f(S)]$، محققة بديهيات الكفاءة والتناظر والتجميع.",
      "correctIndex": 1,
      "explanationEn": "Analytical Derivation & Properties: SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تحسب قيم SHAP الإسهامات الهامشية العادلة للخصائص بالاستناد إلى نظرية الألعاب التعاونية: $\\phi_i = \\sum \\text{weights} [f(S \\cup \\{i\\}) - f(S)]$، محققة بديهيات الكفاءة والتناظر والتجميع.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تحسب قيم SHAP الإسهامات الهامشية العادلة للخصائص بالاستناد إلى نظرية الألعاب التعاونية: $\\phi_i = \\sum \\text{weights} [f(S \\cup \\{i\\}) - f(S)]$، محققة بديهيات الكفاءة والتناظر والتجميع.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch4_med_22",
      "titleEn": "[MEDIUM] Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO) - Analysis 22",
      "titleAr": "[مستوى متوسط] التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO - تحليل 22",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO), what is the precise analytical formulation or operative rule? (Item 22)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 22)",
      "optionsEn": [
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.",
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance."
      ],
      "optionsAr": [
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يقوم محسن انعدام التكرار (ZeRO) بتجزئة حالات المحسن (المرحلة 1)، والتدرجات (المرحلة 2)، ومعاملات النموذج (المرحلة 3) عبر كروت GPU، ملغياً هدر الذاكرة ومحافظاً على نفس حجم الاتصال.",
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر."
      ],
      "correctAnswer": "The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.",
      "correctAnswerEn": "The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.",
      "correctAnswerAr": "يقوم محسن انعدام التكرار (ZeRO) بتجزئة حالات المحسن (المرحلة 1)، والتدرجات (المرحلة 2)، ومعاملات النموذج (المرحلة 3) عبر كروت GPU، ملغياً هدر الذاكرة ومحافظاً على نفس حجم الاتصال.",
      "correctIndex": 2,
      "explanationEn": "Analytical Derivation & Properties: The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يقوم محسن انعدام التكرار (ZeRO) بتجزئة حالات المحسن (المرحلة 1)، والتدرجات (المرحلة 2)، ومعاملات النموذج (المرحلة 3) عبر كروت GPU، ملغياً هدر الذاكرة ومحافظاً على نفس حجم الاتصال.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يقوم محسن انعدام التكرار (ZeRO) بتجزئة حالات المحسن (المرحلة 1)، والتدرجات (المرحلة 2)، ومعاملات النموذج (المرحلة 3) عبر كروت GPU، ملغياً هدر الذاكرة ومحافظاً على نفس حجم الاتصال.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch4_med_23",
      "titleEn": "[MEDIUM] Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning - Analysis 23",
      "titleAr": "[مستوى متوسط] ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات - تحليل 23",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning, what is the precise analytical formulation or operative rule? (Item 23)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 23)",
      "optionsEn": [
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$."
      ],
      "optionsAr": [
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "يرسم التكميم المتناظر القيم الحقيقية $r$ إلى عدد مكمم $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z\\right)$، بمقياس $S$ ونقطة صفر $Z$."
      ],
      "correctAnswer": "Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.",
      "correctAnswerEn": "Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.",
      "correctAnswerAr": "يرسم التكميم المتناظر القيم الحقيقية $r$ إلى عدد مكمم $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z\\right)$، بمقياس $S$ ونقطة صفر $Z$.",
      "correctIndex": 3,
      "explanationEn": "Analytical Derivation & Properties: Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يرسم التكميم المتناظر القيم الحقيقية $r$ إلى عدد مكمم $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z\\right)$، بمقياس $S$ ونقطة صفر $Z$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يرسم التكميم المتناظر القيم الحقيقية $r$ إلى عدد مكمم $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z\\right)$، بمقياس $S$ ونقطة صفر $Z$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch4_med_24",
      "titleEn": "[MEDIUM] Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance - Analysis 24",
      "titleAr": "[مستوى متوسط] العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة - تحليل 24",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance, what is the precise analytical formulation or operative rule? (Item 24)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 24)",
      "optionsEn": [
        "SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs."
      ],
      "optionsAr": [
        "تحسب قيم SHAP الإسهامات الهامشية العادلة للخصائص بالاستناد إلى نظرية الألعاب التعاونية: $\\phi_i = \\sum \\text{weights} [f(S \\cup \\{i\\}) - f(S)]$، محققة بديهيات الكفاءة والتناظر والتجميع.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة."
      ],
      "correctAnswer": "SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.",
      "correctAnswerEn": "SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.",
      "correctAnswerAr": "تحسب قيم SHAP الإسهامات الهامشية العادلة للخصائص بالاستناد إلى نظرية الألعاب التعاونية: $\\phi_i = \\sum \\text{weights} [f(S \\cup \\{i\\}) - f(S)]$، محققة بديهيات الكفاءة والتناظر والتجميع.",
      "correctIndex": 0,
      "explanationEn": "Analytical Derivation & Properties: SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تحسب قيم SHAP الإسهامات الهامشية العادلة للخصائص بالاستناد إلى نظرية الألعاب التعاونية: $\\phi_i = \\sum \\text{weights} [f(S \\cup \\{i\\}) - f(S)]$، محققة بديهيات الكفاءة والتناظر والتجميع.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تحسب قيم SHAP الإسهامات الهامشية العادلة للخصائص بالاستناد إلى نظرية الألعاب التعاونية: $\\phi_i = \\sum \\text{weights} [f(S \\cup \\{i\\}) - f(S)]$، محققة بديهيات الكفاءة والتناظر والتجميع.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch4_med_25",
      "titleEn": "[MEDIUM] Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO) - Analysis 25",
      "titleAr": "[مستوى متوسط] التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO - تحليل 25",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO), what is the precise analytical formulation or operative rule? (Item 25)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 25)",
      "optionsEn": [
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence."
      ],
      "optionsAr": [
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "يقوم محسن انعدام التكرار (ZeRO) بتجزئة حالات المحسن (المرحلة 1)، والتدرجات (المرحلة 2)، ومعاملات النموذج (المرحلة 3) عبر كروت GPU، ملغياً هدر الذاكرة ومحافظاً على نفس حجم الاتصال.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية."
      ],
      "correctAnswer": "The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.",
      "correctAnswerEn": "The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.",
      "correctAnswerAr": "يقوم محسن انعدام التكرار (ZeRO) بتجزئة حالات المحسن (المرحلة 1)، والتدرجات (المرحلة 2)، ومعاملات النموذج (المرحلة 3) عبر كروت GPU، ملغياً هدر الذاكرة ومحافظاً على نفس حجم الاتصال.",
      "correctIndex": 1,
      "explanationEn": "Analytical Derivation & Properties: The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يقوم محسن انعدام التكرار (ZeRO) بتجزئة حالات المحسن (المرحلة 1)، والتدرجات (المرحلة 2)، ومعاملات النموذج (المرحلة 3) عبر كروت GPU، ملغياً هدر الذاكرة ومحافظاً على نفس حجم الاتصال.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يقوم محسن انعدام التكرار (ZeRO) بتجزئة حالات المحسن (المرحلة 1)، والتدرجات (المرحلة 2)، ومعاملات النموذج (المرحلة 3) عبر كروت GPU، ملغياً هدر الذاكرة ومحافظاً على نفس حجم الاتصال.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch4_med_26",
      "titleEn": "[MEDIUM] Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning - Analysis 26",
      "titleAr": "[مستوى متوسط] ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات - تحليل 26",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning, what is the precise analytical formulation or operative rule? (Item 26)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 26)",
      "optionsEn": [
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "يرسم التكميم المتناظر القيم الحقيقية $r$ إلى عدد مكمم $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z\\right)$، بمقياس $S$ ونقطة صفر $Z$.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.",
      "correctAnswerEn": "Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.",
      "correctAnswerAr": "يرسم التكميم المتناظر القيم الحقيقية $r$ إلى عدد مكمم $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z\\right)$، بمقياس $S$ ونقطة صفر $Z$.",
      "correctIndex": 2,
      "explanationEn": "Analytical Derivation & Properties: Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يرسم التكميم المتناظر القيم الحقيقية $r$ إلى عدد مكمم $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z\\right)$، بمقياس $S$ ونقطة صفر $Z$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يرسم التكميم المتناظر القيم الحقيقية $r$ إلى عدد مكمم $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z\\right)$، بمقياس $S$ ونقطة صفر $Z$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch4_med_27",
      "titleEn": "[MEDIUM] Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance - Analysis 27",
      "titleAr": "[مستوى متوسط] العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة - تحليل 27",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance, what is the precise analytical formulation or operative rule? (Item 27)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 27)",
      "optionsEn": [
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms."
      ],
      "optionsAr": [
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تحسب قيم SHAP الإسهامات الهامشية العادلة للخصائص بالاستناد إلى نظرية الألعاب التعاونية: $\\phi_i = \\sum \\text{weights} [f(S \\cup \\{i\\}) - f(S)]$، محققة بديهيات الكفاءة والتناظر والتجميع."
      ],
      "correctAnswer": "SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.",
      "correctAnswerEn": "SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.",
      "correctAnswerAr": "تحسب قيم SHAP الإسهامات الهامشية العادلة للخصائص بالاستناد إلى نظرية الألعاب التعاونية: $\\phi_i = \\sum \\text{weights} [f(S \\cup \\{i\\}) - f(S)]$، محققة بديهيات الكفاءة والتناظر والتجميع.",
      "correctIndex": 3,
      "explanationEn": "Analytical Derivation & Properties: SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تحسب قيم SHAP الإسهامات الهامشية العادلة للخصائص بالاستناد إلى نظرية الألعاب التعاونية: $\\phi_i = \\sum \\text{weights} [f(S \\cup \\{i\\}) - f(S)]$، محققة بديهيات الكفاءة والتناظر والتجميع.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تحسب قيم SHAP الإسهامات الهامشية العادلة للخصائص بالاستناد إلى نظرية الألعاب التعاونية: $\\phi_i = \\sum \\text{weights} [f(S \\cup \\{i\\}) - f(S)]$، محققة بديهيات الكفاءة والتناظر والتجميع.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch4_med_28",
      "titleEn": "[MEDIUM] Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO) - Analysis 28",
      "titleAr": "[مستوى متوسط] التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO - تحليل 28",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO), what is the precise analytical formulation or operative rule? (Item 28)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 28)",
      "optionsEn": [
        "The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan."
      ],
      "optionsAr": [
        "يقوم محسن انعدام التكرار (ZeRO) بتجزئة حالات المحسن (المرحلة 1)، والتدرجات (المرحلة 2)، ومعاملات النموذج (المرحلة 3) عبر كروت GPU، ملغياً هدر الذاكرة ومحافظاً على نفس حجم الاتصال.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG)."
      ],
      "correctAnswer": "The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.",
      "correctAnswerEn": "The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.",
      "correctAnswerAr": "يقوم محسن انعدام التكرار (ZeRO) بتجزئة حالات المحسن (المرحلة 1)، والتدرجات (المرحلة 2)، ومعاملات النموذج (المرحلة 3) عبر كروت GPU، ملغياً هدر الذاكرة ومحافظاً على نفس حجم الاتصال.",
      "correctIndex": 0,
      "explanationEn": "Analytical Derivation & Properties: The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يقوم محسن انعدام التكرار (ZeRO) بتجزئة حالات المحسن (المرحلة 1)، والتدرجات (المرحلة 2)، ومعاملات النموذج (المرحلة 3) عبر كروت GPU، ملغياً هدر الذاكرة ومحافظاً على نفس حجم الاتصال.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يقوم محسن انعدام التكرار (ZeRO) بتجزئة حالات المحسن (المرحلة 1)، والتدرجات (المرحلة 2)، ومعاملات النموذج (المرحلة 3) عبر كروت GPU، ملغياً هدر الذاكرة ومحافظاً على نفس حجم الاتصال.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch4_med_29",
      "titleEn": "[MEDIUM] Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning - Analysis 29",
      "titleAr": "[مستوى متوسط] ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات - تحليل 29",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning, what is the precise analytical formulation or operative rule? (Item 29)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 29)",
      "optionsEn": [
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "يرسم التكميم المتناظر القيم الحقيقية $r$ إلى عدد مكمم $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z\\right)$، بمقياس $S$ ونقطة صفر $Z$.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.",
      "correctAnswerEn": "Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.",
      "correctAnswerAr": "يرسم التكميم المتناظر القيم الحقيقية $r$ إلى عدد مكمم $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z\\right)$، بمقياس $S$ ونقطة صفر $Z$.",
      "correctIndex": 1,
      "explanationEn": "Analytical Derivation & Properties: Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يرسم التكميم المتناظر القيم الحقيقية $r$ إلى عدد مكمم $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z\\right)$، بمقياس $S$ ونقطة صفر $Z$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يرسم التكميم المتناظر القيم الحقيقية $r$ إلى عدد مكمم $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z\\right)$، بمقياس $S$ ونقطة صفر $Z$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch4_med_30",
      "titleEn": "[MEDIUM] Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance - Analysis 30",
      "titleAr": "[مستوى متوسط] العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة - تحليل 30",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance, what is the precise analytical formulation or operative rule? (Item 30)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 30)",
      "optionsEn": [
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate."
      ],
      "optionsAr": [
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "تحسب قيم SHAP الإسهامات الهامشية العادلة للخصائص بالاستناد إلى نظرية الألعاب التعاونية: $\\phi_i = \\sum \\text{weights} [f(S \\cup \\{i\\}) - f(S)]$، محققة بديهيات الكفاءة والتناظر والتجميع.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم."
      ],
      "correctAnswer": "SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.",
      "correctAnswerEn": "SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.",
      "correctAnswerAr": "تحسب قيم SHAP الإسهامات الهامشية العادلة للخصائص بالاستناد إلى نظرية الألعاب التعاونية: $\\phi_i = \\sum \\text{weights} [f(S \\cup \\{i\\}) - f(S)]$، محققة بديهيات الكفاءة والتناظر والتجميع.",
      "correctIndex": 2,
      "explanationEn": "Analytical Derivation & Properties: SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تحسب قيم SHAP الإسهامات الهامشية العادلة للخصائص بالاستناد إلى نظرية الألعاب التعاونية: $\\phi_i = \\sum \\text{weights} [f(S \\cup \\{i\\}) - f(S)]$، محققة بديهيات الكفاءة والتناظر والتجميع.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تحسب قيم SHAP الإسهامات الهامشية العادلة للخصائص بالاستناد إلى نظرية الألعاب التعاونية: $\\phi_i = \\sum \\text{weights} [f(S \\cup \\{i\\}) - f(S)]$، محققة بديهيات الكفاءة والتناظر والتجميع.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch4_med_31",
      "titleEn": "[MEDIUM] Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO) - Analysis 31",
      "titleAr": "[مستوى متوسط] التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO - تحليل 31",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO), what is the precise analytical formulation or operative rule? (Item 31)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 31)",
      "optionsEn": [
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume."
      ],
      "optionsAr": [
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "يقوم محسن انعدام التكرار (ZeRO) بتجزئة حالات المحسن (المرحلة 1)، والتدرجات (المرحلة 2)، ومعاملات النموذج (المرحلة 3) عبر كروت GPU، ملغياً هدر الذاكرة ومحافظاً على نفس حجم الاتصال."
      ],
      "correctAnswer": "The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.",
      "correctAnswerEn": "The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.",
      "correctAnswerAr": "يقوم محسن انعدام التكرار (ZeRO) بتجزئة حالات المحسن (المرحلة 1)، والتدرجات (المرحلة 2)، ومعاملات النموذج (المرحلة 3) عبر كروت GPU، ملغياً هدر الذاكرة ومحافظاً على نفس حجم الاتصال.",
      "correctIndex": 3,
      "explanationEn": "Analytical Derivation & Properties: The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يقوم محسن انعدام التكرار (ZeRO) بتجزئة حالات المحسن (المرحلة 1)، والتدرجات (المرحلة 2)، ومعاملات النموذج (المرحلة 3) عبر كروت GPU، ملغياً هدر الذاكرة ومحافظاً على نفس حجم الاتصال.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يقوم محسن انعدام التكرار (ZeRO) بتجزئة حالات المحسن (المرحلة 1)، والتدرجات (المرحلة 2)، ومعاملات النموذج (المرحلة 3) عبر كروت GPU، ملغياً هدر الذاكرة ومحافظاً على نفس حجم الاتصال.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch4_med_32",
      "titleEn": "[MEDIUM] Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning - Analysis 32",
      "titleAr": "[مستوى متوسط] ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات - تحليل 32",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning, what is the precise analytical formulation or operative rule? (Item 32)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 32)",
      "optionsEn": [
        "Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.",
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "يرسم التكميم المتناظر القيم الحقيقية $r$ إلى عدد مكمم $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z\\right)$، بمقياس $S$ ونقطة صفر $Z$.",
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.",
      "correctAnswerEn": "Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.",
      "correctAnswerAr": "يرسم التكميم المتناظر القيم الحقيقية $r$ إلى عدد مكمم $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z\\right)$، بمقياس $S$ ونقطة صفر $Z$.",
      "correctIndex": 0,
      "explanationEn": "Analytical Derivation & Properties: Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يرسم التكميم المتناظر القيم الحقيقية $r$ إلى عدد مكمم $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z\\right)$، بمقياس $S$ ونقطة صفر $Z$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يرسم التكميم المتناظر القيم الحقيقية $r$ إلى عدد مكمم $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z\\right)$، بمقياس $S$ ونقطة صفر $Z$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch4_med_33",
      "titleEn": "[MEDIUM] Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance - Analysis 33",
      "titleAr": "[مستوى متوسط] العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة - تحليل 33",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance, what is the precise analytical formulation or operative rule? (Item 33)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 33)",
      "optionsEn": [
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.",
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation."
      ],
      "optionsAr": [
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "تحسب قيم SHAP الإسهامات الهامشية العادلة للخصائص بالاستناد إلى نظرية الألعاب التعاونية: $\\phi_i = \\sum \\text{weights} [f(S \\cup \\{i\\}) - f(S)]$، محققة بديهيات الكفاءة والتناظر والتجميع.",
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي."
      ],
      "correctAnswer": "SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.",
      "correctAnswerEn": "SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.",
      "correctAnswerAr": "تحسب قيم SHAP الإسهامات الهامشية العادلة للخصائص بالاستناد إلى نظرية الألعاب التعاونية: $\\phi_i = \\sum \\text{weights} [f(S \\cup \\{i\\}) - f(S)]$، محققة بديهيات الكفاءة والتناظر والتجميع.",
      "correctIndex": 1,
      "explanationEn": "Analytical Derivation & Properties: SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تحسب قيم SHAP الإسهامات الهامشية العادلة للخصائص بالاستناد إلى نظرية الألعاب التعاونية: $\\phi_i = \\sum \\text{weights} [f(S \\cup \\{i\\}) - f(S)]$، محققة بديهيات الكفاءة والتناظر والتجميع.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تحسب قيم SHAP الإسهامات الهامشية العادلة للخصائص بالاستناد إلى نظرية الألعاب التعاونية: $\\phi_i = \\sum \\text{weights} [f(S \\cup \\{i\\}) - f(S)]$، محققة بديهيات الكفاءة والتناظر والتجميع.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch4_med_34",
      "titleEn": "[MEDIUM] Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO) - Analysis 34",
      "titleAr": "[مستوى متوسط] التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO - تحليل 34",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO), what is the precise analytical formulation or operative rule? (Item 34)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 34)",
      "optionsEn": [
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.",
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent."
      ],
      "optionsAr": [
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "يقوم محسن انعدام التكرار (ZeRO) بتجزئة حالات المحسن (المرحلة 1)، والتدرجات (المرحلة 2)، ومعاملات النموذج (المرحلة 3) عبر كروت GPU، ملغياً هدر الذاكرة ومحافظاً على نفس حجم الاتصال.",
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة."
      ],
      "correctAnswer": "The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.",
      "correctAnswerEn": "The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.",
      "correctAnswerAr": "يقوم محسن انعدام التكرار (ZeRO) بتجزئة حالات المحسن (المرحلة 1)، والتدرجات (المرحلة 2)، ومعاملات النموذج (المرحلة 3) عبر كروت GPU، ملغياً هدر الذاكرة ومحافظاً على نفس حجم الاتصال.",
      "correctIndex": 2,
      "explanationEn": "Analytical Derivation & Properties: The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يقوم محسن انعدام التكرار (ZeRO) بتجزئة حالات المحسن (المرحلة 1)، والتدرجات (المرحلة 2)، ومعاملات النموذج (المرحلة 3) عبر كروت GPU، ملغياً هدر الذاكرة ومحافظاً على نفس حجم الاتصال.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يقوم محسن انعدام التكرار (ZeRO) بتجزئة حالات المحسن (المرحلة 1)، والتدرجات (المرحلة 2)، ومعاملات النموذج (المرحلة 3) عبر كروت GPU، ملغياً هدر الذاكرة ومحافظاً على نفس حجم الاتصال.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch4_med_35",
      "titleEn": "[MEDIUM] Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning - Analysis 35",
      "titleAr": "[مستوى متوسط] ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات - تحليل 35",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning, what is the precise analytical formulation or operative rule? (Item 35)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 35)",
      "optionsEn": [
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$."
      ],
      "optionsAr": [
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "يرسم التكميم المتناظر القيم الحقيقية $r$ إلى عدد مكمم $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z\\right)$، بمقياس $S$ ونقطة صفر $Z$."
      ],
      "correctAnswer": "Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.",
      "correctAnswerEn": "Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.",
      "correctAnswerAr": "يرسم التكميم المتناظر القيم الحقيقية $r$ إلى عدد مكمم $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z\\right)$، بمقياس $S$ ونقطة صفر $Z$.",
      "correctIndex": 3,
      "explanationEn": "Analytical Derivation & Properties: Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يرسم التكميم المتناظر القيم الحقيقية $r$ إلى عدد مكمم $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z\\right)$، بمقياس $S$ ونقطة صفر $Z$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يرسم التكميم المتناظر القيم الحقيقية $r$ إلى عدد مكمم $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z\\right)$، بمقياس $S$ ونقطة صفر $Z$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch4_med_36",
      "titleEn": "[MEDIUM] Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance - Analysis 36",
      "titleAr": "[مستوى متوسط] العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة - تحليل 36",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance, what is the precise analytical formulation or operative rule? (Item 36)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 36)",
      "optionsEn": [
        "SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step."
      ],
      "optionsAr": [
        "تحسب قيم SHAP الإسهامات الهامشية العادلة للخصائص بالاستناد إلى نظرية الألعاب التعاونية: $\\phi_i = \\sum \\text{weights} [f(S \\cup \\{i\\}) - f(S)]$، محققة بديهيات الكفاءة والتناظر والتجميع.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين."
      ],
      "correctAnswer": "SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.",
      "correctAnswerEn": "SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.",
      "correctAnswerAr": "تحسب قيم SHAP الإسهامات الهامشية العادلة للخصائص بالاستناد إلى نظرية الألعاب التعاونية: $\\phi_i = \\sum \\text{weights} [f(S \\cup \\{i\\}) - f(S)]$، محققة بديهيات الكفاءة والتناظر والتجميع.",
      "correctIndex": 0,
      "explanationEn": "Analytical Derivation & Properties: SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تحسب قيم SHAP الإسهامات الهامشية العادلة للخصائص بالاستناد إلى نظرية الألعاب التعاونية: $\\phi_i = \\sum \\text{weights} [f(S \\cup \\{i\\}) - f(S)]$، محققة بديهيات الكفاءة والتناظر والتجميع.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تحسب قيم SHAP الإسهامات الهامشية العادلة للخصائص بالاستناد إلى نظرية الألعاب التعاونية: $\\phi_i = \\sum \\text{weights} [f(S \\cup \\{i\\}) - f(S)]$، محققة بديهيات الكفاءة والتناظر والتجميع.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch4_med_37",
      "titleEn": "[MEDIUM] Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO) - Analysis 37",
      "titleAr": "[مستوى متوسط] التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO - تحليل 37",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO), what is the precise analytical formulation or operative rule? (Item 37)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 37)",
      "optionsEn": [
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance."
      ],
      "optionsAr": [
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "يقوم محسن انعدام التكرار (ZeRO) بتجزئة حالات المحسن (المرحلة 1)، والتدرجات (المرحلة 2)، ومعاملات النموذج (المرحلة 3) عبر كروت GPU، ملغياً هدر الذاكرة ومحافظاً على نفس حجم الاتصال.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر."
      ],
      "correctAnswer": "The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.",
      "correctAnswerEn": "The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.",
      "correctAnswerAr": "يقوم محسن انعدام التكرار (ZeRO) بتجزئة حالات المحسن (المرحلة 1)، والتدرجات (المرحلة 2)، ومعاملات النموذج (المرحلة 3) عبر كروت GPU، ملغياً هدر الذاكرة ومحافظاً على نفس حجم الاتصال.",
      "correctIndex": 1,
      "explanationEn": "Analytical Derivation & Properties: The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يقوم محسن انعدام التكرار (ZeRO) بتجزئة حالات المحسن (المرحلة 1)، والتدرجات (المرحلة 2)، ومعاملات النموذج (المرحلة 3) عبر كروت GPU، ملغياً هدر الذاكرة ومحافظاً على نفس حجم الاتصال.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يقوم محسن انعدام التكرار (ZeRO) بتجزئة حالات المحسن (المرحلة 1)، والتدرجات (المرحلة 2)، ومعاملات النموذج (المرحلة 3) عبر كروت GPU، ملغياً هدر الذاكرة ومحافظاً على نفس حجم الاتصال.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch4_med_38",
      "titleEn": "[MEDIUM] Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning - Analysis 38",
      "titleAr": "[مستوى متوسط] ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات - تحليل 38",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning, what is the precise analytical formulation or operative rule? (Item 38)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 38)",
      "optionsEn": [
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يرسم التكميم المتناظر القيم الحقيقية $r$ إلى عدد مكمم $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z\\right)$، بمقياس $S$ ونقطة صفر $Z$.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.",
      "correctAnswerEn": "Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.",
      "correctAnswerAr": "يرسم التكميم المتناظر القيم الحقيقية $r$ إلى عدد مكمم $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z\\right)$، بمقياس $S$ ونقطة صفر $Z$.",
      "correctIndex": 2,
      "explanationEn": "Analytical Derivation & Properties: Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يرسم التكميم المتناظر القيم الحقيقية $r$ إلى عدد مكمم $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z\\right)$، بمقياس $S$ ونقطة صفر $Z$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يرسم التكميم المتناظر القيم الحقيقية $r$ إلى عدد مكمم $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z\\right)$، بمقياس $S$ ونقطة صفر $Z$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch4_med_39",
      "titleEn": "[MEDIUM] Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance - Analysis 39",
      "titleAr": "[مستوى متوسط] العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة - تحليل 39",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance, what is the precise analytical formulation or operative rule? (Item 39)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 39)",
      "optionsEn": [
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms."
      ],
      "optionsAr": [
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تحسب قيم SHAP الإسهامات الهامشية العادلة للخصائص بالاستناد إلى نظرية الألعاب التعاونية: $\\phi_i = \\sum \\text{weights} [f(S \\cup \\{i\\}) - f(S)]$، محققة بديهيات الكفاءة والتناظر والتجميع."
      ],
      "correctAnswer": "SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.",
      "correctAnswerEn": "SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.",
      "correctAnswerAr": "تحسب قيم SHAP الإسهامات الهامشية العادلة للخصائص بالاستناد إلى نظرية الألعاب التعاونية: $\\phi_i = \\sum \\text{weights} [f(S \\cup \\{i\\}) - f(S)]$، محققة بديهيات الكفاءة والتناظر والتجميع.",
      "correctIndex": 3,
      "explanationEn": "Analytical Derivation & Properties: SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تحسب قيم SHAP الإسهامات الهامشية العادلة للخصائص بالاستناد إلى نظرية الألعاب التعاونية: $\\phi_i = \\sum \\text{weights} [f(S \\cup \\{i\\}) - f(S)]$، محققة بديهيات الكفاءة والتناظر والتجميع.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تحسب قيم SHAP الإسهامات الهامشية العادلة للخصائص بالاستناد إلى نظرية الألعاب التعاونية: $\\phi_i = \\sum \\text{weights} [f(S \\cup \\{i\\}) - f(S)]$، محققة بديهيات الكفاءة والتناظر والتجميع.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch4_med_40",
      "titleEn": "[MEDIUM] Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO) - Analysis 40",
      "titleAr": "[مستوى متوسط] التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO - تحليل 40",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO), what is the precise analytical formulation or operative rule? (Item 40)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 40)",
      "optionsEn": [
        "The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence."
      ],
      "optionsAr": [
        "يقوم محسن انعدام التكرار (ZeRO) بتجزئة حالات المحسن (المرحلة 1)، والتدرجات (المرحلة 2)، ومعاملات النموذج (المرحلة 3) عبر كروت GPU، ملغياً هدر الذاكرة ومحافظاً على نفس حجم الاتصال.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية."
      ],
      "correctAnswer": "The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.",
      "correctAnswerEn": "The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.",
      "correctAnswerAr": "يقوم محسن انعدام التكرار (ZeRO) بتجزئة حالات المحسن (المرحلة 1)، والتدرجات (المرحلة 2)، ومعاملات النموذج (المرحلة 3) عبر كروت GPU، ملغياً هدر الذاكرة ومحافظاً على نفس حجم الاتصال.",
      "correctIndex": 0,
      "explanationEn": "Analytical Derivation & Properties: The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يقوم محسن انعدام التكرار (ZeRO) بتجزئة حالات المحسن (المرحلة 1)، والتدرجات (المرحلة 2)، ومعاملات النموذج (المرحلة 3) عبر كروت GPU، ملغياً هدر الذاكرة ومحافظاً على نفس حجم الاتصال.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يقوم محسن انعدام التكرار (ZeRO) بتجزئة حالات المحسن (المرحلة 1)، والتدرجات (المرحلة 2)، ومعاملات النموذج (المرحلة 3) عبر كروت GPU، ملغياً هدر الذاكرة ومحافظاً على نفس حجم الاتصال.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch4_med_41",
      "titleEn": "[MEDIUM] Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning - Analysis 41",
      "titleAr": "[مستوى متوسط] ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات - تحليل 41",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning, what is the precise analytical formulation or operative rule? (Item 41)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 41)",
      "optionsEn": [
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "يرسم التكميم المتناظر القيم الحقيقية $r$ إلى عدد مكمم $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z\\right)$، بمقياس $S$ ونقطة صفر $Z$.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.",
      "correctAnswerEn": "Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.",
      "correctAnswerAr": "يرسم التكميم المتناظر القيم الحقيقية $r$ إلى عدد مكمم $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z\\right)$، بمقياس $S$ ونقطة صفر $Z$.",
      "correctIndex": 1,
      "explanationEn": "Analytical Derivation & Properties: Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يرسم التكميم المتناظر القيم الحقيقية $r$ إلى عدد مكمم $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z\\right)$، بمقياس $S$ ونقطة صفر $Z$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يرسم التكميم المتناظر القيم الحقيقية $r$ إلى عدد مكمم $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z\\right)$، بمقياس $S$ ونقطة صفر $Z$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch4_med_42",
      "titleEn": "[MEDIUM] Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance - Analysis 42",
      "titleAr": "[مستوى متوسط] العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة - تحليل 42",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance, what is the precise analytical formulation or operative rule? (Item 42)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 42)",
      "optionsEn": [
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data."
      ],
      "optionsAr": [
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "تحسب قيم SHAP الإسهامات الهامشية العادلة للخصائص بالاستناد إلى نظرية الألعاب التعاونية: $\\phi_i = \\sum \\text{weights} [f(S \\cup \\{i\\}) - f(S)]$، محققة بديهيات الكفاءة والتناظر والتجميع.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش."
      ],
      "correctAnswer": "SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.",
      "correctAnswerEn": "SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.",
      "correctAnswerAr": "تحسب قيم SHAP الإسهامات الهامشية العادلة للخصائص بالاستناد إلى نظرية الألعاب التعاونية: $\\phi_i = \\sum \\text{weights} [f(S \\cup \\{i\\}) - f(S)]$، محققة بديهيات الكفاءة والتناظر والتجميع.",
      "correctIndex": 2,
      "explanationEn": "Analytical Derivation & Properties: SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تحسب قيم SHAP الإسهامات الهامشية العادلة للخصائص بالاستناد إلى نظرية الألعاب التعاونية: $\\phi_i = \\sum \\text{weights} [f(S \\cup \\{i\\}) - f(S)]$، محققة بديهيات الكفاءة والتناظر والتجميع.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تحسب قيم SHAP الإسهامات الهامشية العادلة للخصائص بالاستناد إلى نظرية الألعاب التعاونية: $\\phi_i = \\sum \\text{weights} [f(S \\cup \\{i\\}) - f(S)]$، محققة بديهيات الكفاءة والتناظر والتجميع.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch4_med_43",
      "titleEn": "[MEDIUM] Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO) - Analysis 43",
      "titleAr": "[مستوى متوسط] التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO - تحليل 43",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO), what is the precise analytical formulation or operative rule? (Item 43)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 43)",
      "optionsEn": [
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume."
      ],
      "optionsAr": [
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "يقوم محسن انعدام التكرار (ZeRO) بتجزئة حالات المحسن (المرحلة 1)، والتدرجات (المرحلة 2)، ومعاملات النموذج (المرحلة 3) عبر كروت GPU، ملغياً هدر الذاكرة ومحافظاً على نفس حجم الاتصال."
      ],
      "correctAnswer": "The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.",
      "correctAnswerEn": "The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.",
      "correctAnswerAr": "يقوم محسن انعدام التكرار (ZeRO) بتجزئة حالات المحسن (المرحلة 1)، والتدرجات (المرحلة 2)، ومعاملات النموذج (المرحلة 3) عبر كروت GPU، ملغياً هدر الذاكرة ومحافظاً على نفس حجم الاتصال.",
      "correctIndex": 3,
      "explanationEn": "Analytical Derivation & Properties: The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يقوم محسن انعدام التكرار (ZeRO) بتجزئة حالات المحسن (المرحلة 1)، والتدرجات (المرحلة 2)، ومعاملات النموذج (المرحلة 3) عبر كروت GPU، ملغياً هدر الذاكرة ومحافظاً على نفس حجم الاتصال.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يقوم محسن انعدام التكرار (ZeRO) بتجزئة حالات المحسن (المرحلة 1)، والتدرجات (المرحلة 2)، ومعاملات النموذج (المرحلة 3) عبر كروت GPU، ملغياً هدر الذاكرة ومحافظاً على نفس حجم الاتصال.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch4_med_44",
      "titleEn": "[MEDIUM] Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning - Analysis 44",
      "titleAr": "[مستوى متوسط] ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات - تحليل 44",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning, what is the precise analytical formulation or operative rule? (Item 44)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 44)",
      "optionsEn": [
        "Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.",
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "يرسم التكميم المتناظر القيم الحقيقية $r$ إلى عدد مكمم $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z\\right)$، بمقياس $S$ ونقطة صفر $Z$.",
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.",
      "correctAnswerEn": "Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.",
      "correctAnswerAr": "يرسم التكميم المتناظر القيم الحقيقية $r$ إلى عدد مكمم $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z\\right)$، بمقياس $S$ ونقطة صفر $Z$.",
      "correctIndex": 0,
      "explanationEn": "Analytical Derivation & Properties: Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يرسم التكميم المتناظر القيم الحقيقية $r$ إلى عدد مكمم $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z\\right)$، بمقياس $S$ ونقطة صفر $Z$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يرسم التكميم المتناظر القيم الحقيقية $r$ إلى عدد مكمم $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z\\right)$، بمقياس $S$ ونقطة صفر $Z$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch4_med_45",
      "titleEn": "[MEDIUM] Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance - Analysis 45",
      "titleAr": "[مستوى متوسط] العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة - تحليل 45",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance, what is the precise analytical formulation or operative rule? (Item 45)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 45)",
      "optionsEn": [
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.",
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate."
      ],
      "optionsAr": [
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "تحسب قيم SHAP الإسهامات الهامشية العادلة للخصائص بالاستناد إلى نظرية الألعاب التعاونية: $\\phi_i = \\sum \\text{weights} [f(S \\cup \\{i\\}) - f(S)]$، محققة بديهيات الكفاءة والتناظر والتجميع.",
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم."
      ],
      "correctAnswer": "SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.",
      "correctAnswerEn": "SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.",
      "correctAnswerAr": "تحسب قيم SHAP الإسهامات الهامشية العادلة للخصائص بالاستناد إلى نظرية الألعاب التعاونية: $\\phi_i = \\sum \\text{weights} [f(S \\cup \\{i\\}) - f(S)]$، محققة بديهيات الكفاءة والتناظر والتجميع.",
      "correctIndex": 1,
      "explanationEn": "Analytical Derivation & Properties: SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تحسب قيم SHAP الإسهامات الهامشية العادلة للخصائص بالاستناد إلى نظرية الألعاب التعاونية: $\\phi_i = \\sum \\text{weights} [f(S \\cup \\{i\\}) - f(S)]$، محققة بديهيات الكفاءة والتناظر والتجميع.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تحسب قيم SHAP الإسهامات الهامشية العادلة للخصائص بالاستناد إلى نظرية الألعاب التعاونية: $\\phi_i = \\sum \\text{weights} [f(S \\cup \\{i\\}) - f(S)]$، محققة بديهيات الكفاءة والتناظر والتجميع.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch4_med_46",
      "titleEn": "[MEDIUM] Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO) - Analysis 46",
      "titleAr": "[مستوى متوسط] التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO - تحليل 46",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO), what is the precise analytical formulation or operative rule? (Item 46)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 46)",
      "optionsEn": [
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.",
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves."
      ],
      "optionsAr": [
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "يقوم محسن انعدام التكرار (ZeRO) بتجزئة حالات المحسن (المرحلة 1)، والتدرجات (المرحلة 2)، ومعاملات النموذج (المرحلة 3) عبر كروت GPU، ملغياً هدر الذاكرة ومحافظاً على نفس حجم الاتصال.",
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية."
      ],
      "correctAnswer": "The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.",
      "correctAnswerEn": "The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.",
      "correctAnswerAr": "يقوم محسن انعدام التكرار (ZeRO) بتجزئة حالات المحسن (المرحلة 1)، والتدرجات (المرحلة 2)، ومعاملات النموذج (المرحلة 3) عبر كروت GPU، ملغياً هدر الذاكرة ومحافظاً على نفس حجم الاتصال.",
      "correctIndex": 2,
      "explanationEn": "Analytical Derivation & Properties: The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يقوم محسن انعدام التكرار (ZeRO) بتجزئة حالات المحسن (المرحلة 1)، والتدرجات (المرحلة 2)، ومعاملات النموذج (المرحلة 3) عبر كروت GPU، ملغياً هدر الذاكرة ومحافظاً على نفس حجم الاتصال.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يقوم محسن انعدام التكرار (ZeRO) بتجزئة حالات المحسن (المرحلة 1)، والتدرجات (المرحلة 2)، ومعاملات النموذج (المرحلة 3) عبر كروت GPU، ملغياً هدر الذاكرة ومحافظاً على نفس حجم الاتصال.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch4_med_47",
      "titleEn": "[MEDIUM] Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning - Analysis 47",
      "titleAr": "[مستوى متوسط] ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات - تحليل 47",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning, what is the precise analytical formulation or operative rule? (Item 47)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 47)",
      "optionsEn": [
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$."
      ],
      "optionsAr": [
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "يرسم التكميم المتناظر القيم الحقيقية $r$ إلى عدد مكمم $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z\\right)$، بمقياس $S$ ونقطة صفر $Z$."
      ],
      "correctAnswer": "Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.",
      "correctAnswerEn": "Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.",
      "correctAnswerAr": "يرسم التكميم المتناظر القيم الحقيقية $r$ إلى عدد مكمم $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z\\right)$، بمقياس $S$ ونقطة صفر $Z$.",
      "correctIndex": 3,
      "explanationEn": "Analytical Derivation & Properties: Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يرسم التكميم المتناظر القيم الحقيقية $r$ إلى عدد مكمم $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z\\right)$، بمقياس $S$ ونقطة صفر $Z$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يرسم التكميم المتناظر القيم الحقيقية $r$ إلى عدد مكمم $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z\\right)$، بمقياس $S$ ونقطة صفر $Z$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch4_med_48",
      "titleEn": "[MEDIUM] Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance - Analysis 48",
      "titleAr": "[مستوى متوسط] العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة - تحليل 48",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance, what is the precise analytical formulation or operative rule? (Item 48)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 48)",
      "optionsEn": [
        "SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation."
      ],
      "optionsAr": [
        "تحسب قيم SHAP الإسهامات الهامشية العادلة للخصائص بالاستناد إلى نظرية الألعاب التعاونية: $\\phi_i = \\sum \\text{weights} [f(S \\cup \\{i\\}) - f(S)]$، محققة بديهيات الكفاءة والتناظر والتجميع.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي."
      ],
      "correctAnswer": "SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.",
      "correctAnswerEn": "SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.",
      "correctAnswerAr": "تحسب قيم SHAP الإسهامات الهامشية العادلة للخصائص بالاستناد إلى نظرية الألعاب التعاونية: $\\phi_i = \\sum \\text{weights} [f(S \\cup \\{i\\}) - f(S)]$، محققة بديهيات الكفاءة والتناظر والتجميع.",
      "correctIndex": 0,
      "explanationEn": "Analytical Derivation & Properties: SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تحسب قيم SHAP الإسهامات الهامشية العادلة للخصائص بالاستناد إلى نظرية الألعاب التعاونية: $\\phi_i = \\sum \\text{weights} [f(S \\cup \\{i\\}) - f(S)]$، محققة بديهيات الكفاءة والتناظر والتجميع.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تحسب قيم SHAP الإسهامات الهامشية العادلة للخصائص بالاستناد إلى نظرية الألعاب التعاونية: $\\phi_i = \\sum \\text{weights} [f(S \\cup \\{i\\}) - f(S)]$، محققة بديهيات الكفاءة والتناظر والتجميع.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch4_med_49",
      "titleEn": "[MEDIUM] Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO) - Analysis 49",
      "titleAr": "[مستوى متوسط] التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO - تحليل 49",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO), what is the precise analytical formulation or operative rule? (Item 49)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 49)",
      "optionsEn": [
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent."
      ],
      "optionsAr": [
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "يقوم محسن انعدام التكرار (ZeRO) بتجزئة حالات المحسن (المرحلة 1)، والتدرجات (المرحلة 2)، ومعاملات النموذج (المرحلة 3) عبر كروت GPU، ملغياً هدر الذاكرة ومحافظاً على نفس حجم الاتصال.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة."
      ],
      "correctAnswer": "The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.",
      "correctAnswerEn": "The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.",
      "correctAnswerAr": "يقوم محسن انعدام التكرار (ZeRO) بتجزئة حالات المحسن (المرحلة 1)، والتدرجات (المرحلة 2)، ومعاملات النموذج (المرحلة 3) عبر كروت GPU، ملغياً هدر الذاكرة ومحافظاً على نفس حجم الاتصال.",
      "correctIndex": 1,
      "explanationEn": "Analytical Derivation & Properties: The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يقوم محسن انعدام التكرار (ZeRO) بتجزئة حالات المحسن (المرحلة 1)، والتدرجات (المرحلة 2)، ومعاملات النموذج (المرحلة 3) عبر كروت GPU، ملغياً هدر الذاكرة ومحافظاً على نفس حجم الاتصال.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يقوم محسن انعدام التكرار (ZeRO) بتجزئة حالات المحسن (المرحلة 1)، والتدرجات (المرحلة 2)، ومعاملات النموذج (المرحلة 3) عبر كروت GPU، ملغياً هدر الذاكرة ومحافظاً على نفس حجم الاتصال.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch4_med_50",
      "titleEn": "[MEDIUM] Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning - Analysis 50",
      "titleAr": "[مستوى متوسط] ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات - تحليل 50",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning, what is the precise analytical formulation or operative rule? (Item 50)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 50)",
      "optionsEn": [
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "يرسم التكميم المتناظر القيم الحقيقية $r$ إلى عدد مكمم $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z\\right)$، بمقياس $S$ ونقطة صفر $Z$.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.",
      "correctAnswerEn": "Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.",
      "correctAnswerAr": "يرسم التكميم المتناظر القيم الحقيقية $r$ إلى عدد مكمم $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z\\right)$، بمقياس $S$ ونقطة صفر $Z$.",
      "correctIndex": 2,
      "explanationEn": "Analytical Derivation & Properties: Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يرسم التكميم المتناظر القيم الحقيقية $r$ إلى عدد مكمم $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z\\right)$، بمقياس $S$ ونقطة صفر $Z$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يرسم التكميم المتناظر القيم الحقيقية $r$ إلى عدد مكمم $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z\\right)$، بمقياس $S$ ونقطة صفر $Z$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch4_med_51",
      "titleEn": "[MEDIUM] Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance - Analysis 51",
      "titleAr": "[مستوى متوسط] العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة - تحليل 51",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance, what is the precise analytical formulation or operative rule? (Item 51)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 51)",
      "optionsEn": [
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms."
      ],
      "optionsAr": [
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تحسب قيم SHAP الإسهامات الهامشية العادلة للخصائص بالاستناد إلى نظرية الألعاب التعاونية: $\\phi_i = \\sum \\text{weights} [f(S \\cup \\{i\\}) - f(S)]$، محققة بديهيات الكفاءة والتناظر والتجميع."
      ],
      "correctAnswer": "SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.",
      "correctAnswerEn": "SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.",
      "correctAnswerAr": "تحسب قيم SHAP الإسهامات الهامشية العادلة للخصائص بالاستناد إلى نظرية الألعاب التعاونية: $\\phi_i = \\sum \\text{weights} [f(S \\cup \\{i\\}) - f(S)]$، محققة بديهيات الكفاءة والتناظر والتجميع.",
      "correctIndex": 3,
      "explanationEn": "Analytical Derivation & Properties: SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تحسب قيم SHAP الإسهامات الهامشية العادلة للخصائص بالاستناد إلى نظرية الألعاب التعاونية: $\\phi_i = \\sum \\text{weights} [f(S \\cup \\{i\\}) - f(S)]$، محققة بديهيات الكفاءة والتناظر والتجميع.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تحسب قيم SHAP الإسهامات الهامشية العادلة للخصائص بالاستناد إلى نظرية الألعاب التعاونية: $\\phi_i = \\sum \\text{weights} [f(S \\cup \\{i\\}) - f(S)]$، محققة بديهيات الكفاءة والتناظر والتجميع.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch4_med_52",
      "titleEn": "[MEDIUM] Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO) - Analysis 52",
      "titleAr": "[مستوى متوسط] التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO - تحليل 52",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO), what is the precise analytical formulation or operative rule? (Item 52)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 52)",
      "optionsEn": [
        "The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance."
      ],
      "optionsAr": [
        "يقوم محسن انعدام التكرار (ZeRO) بتجزئة حالات المحسن (المرحلة 1)، والتدرجات (المرحلة 2)، ومعاملات النموذج (المرحلة 3) عبر كروت GPU، ملغياً هدر الذاكرة ومحافظاً على نفس حجم الاتصال.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر."
      ],
      "correctAnswer": "The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.",
      "correctAnswerEn": "The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.",
      "correctAnswerAr": "يقوم محسن انعدام التكرار (ZeRO) بتجزئة حالات المحسن (المرحلة 1)، والتدرجات (المرحلة 2)، ومعاملات النموذج (المرحلة 3) عبر كروت GPU، ملغياً هدر الذاكرة ومحافظاً على نفس حجم الاتصال.",
      "correctIndex": 0,
      "explanationEn": "Analytical Derivation & Properties: The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يقوم محسن انعدام التكرار (ZeRO) بتجزئة حالات المحسن (المرحلة 1)، والتدرجات (المرحلة 2)، ومعاملات النموذج (المرحلة 3) عبر كروت GPU، ملغياً هدر الذاكرة ومحافظاً على نفس حجم الاتصال.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يقوم محسن انعدام التكرار (ZeRO) بتجزئة حالات المحسن (المرحلة 1)، والتدرجات (المرحلة 2)، ومعاملات النموذج (المرحلة 3) عبر كروت GPU، ملغياً هدر الذاكرة ومحافظاً على نفس حجم الاتصال.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch4_med_53",
      "titleEn": "[MEDIUM] Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning - Analysis 53",
      "titleAr": "[مستوى متوسط] ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات - تحليل 53",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning, what is the precise analytical formulation or operative rule? (Item 53)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 53)",
      "optionsEn": [
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يرسم التكميم المتناظر القيم الحقيقية $r$ إلى عدد مكمم $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z\\right)$، بمقياس $S$ ونقطة صفر $Z$.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.",
      "correctAnswerEn": "Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.",
      "correctAnswerAr": "يرسم التكميم المتناظر القيم الحقيقية $r$ إلى عدد مكمم $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z\\right)$، بمقياس $S$ ونقطة صفر $Z$.",
      "correctIndex": 1,
      "explanationEn": "Analytical Derivation & Properties: Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يرسم التكميم المتناظر القيم الحقيقية $r$ إلى عدد مكمم $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z\\right)$، بمقياس $S$ ونقطة صفر $Z$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يرسم التكميم المتناظر القيم الحقيقية $r$ إلى عدد مكمم $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z\\right)$، بمقياس $S$ ونقطة صفر $Z$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch4_med_54",
      "titleEn": "[MEDIUM] Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance - Analysis 54",
      "titleAr": "[مستوى متوسط] العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة - تحليل 54",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance, what is the precise analytical formulation or operative rule? (Item 54)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 54)",
      "optionsEn": [
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs."
      ],
      "optionsAr": [
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تحسب قيم SHAP الإسهامات الهامشية العادلة للخصائص بالاستناد إلى نظرية الألعاب التعاونية: $\\phi_i = \\sum \\text{weights} [f(S \\cup \\{i\\}) - f(S)]$، محققة بديهيات الكفاءة والتناظر والتجميع.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة."
      ],
      "correctAnswer": "SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.",
      "correctAnswerEn": "SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.",
      "correctAnswerAr": "تحسب قيم SHAP الإسهامات الهامشية العادلة للخصائص بالاستناد إلى نظرية الألعاب التعاونية: $\\phi_i = \\sum \\text{weights} [f(S \\cup \\{i\\}) - f(S)]$، محققة بديهيات الكفاءة والتناظر والتجميع.",
      "correctIndex": 2,
      "explanationEn": "Analytical Derivation & Properties: SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تحسب قيم SHAP الإسهامات الهامشية العادلة للخصائص بالاستناد إلى نظرية الألعاب التعاونية: $\\phi_i = \\sum \\text{weights} [f(S \\cup \\{i\\}) - f(S)]$، محققة بديهيات الكفاءة والتناظر والتجميع.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تحسب قيم SHAP الإسهامات الهامشية العادلة للخصائص بالاستناد إلى نظرية الألعاب التعاونية: $\\phi_i = \\sum \\text{weights} [f(S \\cup \\{i\\}) - f(S)]$، محققة بديهيات الكفاءة والتناظر والتجميع.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch4_med_55",
      "titleEn": "[MEDIUM] Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO) - Analysis 55",
      "titleAr": "[مستوى متوسط] التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO - تحليل 55",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO), what is the precise analytical formulation or operative rule? (Item 55)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 55)",
      "optionsEn": [
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume."
      ],
      "optionsAr": [
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "يقوم محسن انعدام التكرار (ZeRO) بتجزئة حالات المحسن (المرحلة 1)، والتدرجات (المرحلة 2)، ومعاملات النموذج (المرحلة 3) عبر كروت GPU، ملغياً هدر الذاكرة ومحافظاً على نفس حجم الاتصال."
      ],
      "correctAnswer": "The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.",
      "correctAnswerEn": "The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.",
      "correctAnswerAr": "يقوم محسن انعدام التكرار (ZeRO) بتجزئة حالات المحسن (المرحلة 1)، والتدرجات (المرحلة 2)، ومعاملات النموذج (المرحلة 3) عبر كروت GPU، ملغياً هدر الذاكرة ومحافظاً على نفس حجم الاتصال.",
      "correctIndex": 3,
      "explanationEn": "Analytical Derivation & Properties: The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يقوم محسن انعدام التكرار (ZeRO) بتجزئة حالات المحسن (المرحلة 1)، والتدرجات (المرحلة 2)، ومعاملات النموذج (المرحلة 3) عبر كروت GPU، ملغياً هدر الذاكرة ومحافظاً على نفس حجم الاتصال.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يقوم محسن انعدام التكرار (ZeRO) بتجزئة حالات المحسن (المرحلة 1)، والتدرجات (المرحلة 2)، ومعاملات النموذج (المرحلة 3) عبر كروت GPU، ملغياً هدر الذاكرة ومحافظاً على نفس حجم الاتصال.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch4_med_56",
      "titleEn": "[MEDIUM] Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning - Analysis 56",
      "titleAr": "[مستوى متوسط] ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات - تحليل 56",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning, what is the precise analytical formulation or operative rule? (Item 56)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 56)",
      "optionsEn": [
        "Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.",
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "يرسم التكميم المتناظر القيم الحقيقية $r$ إلى عدد مكمم $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z\\right)$، بمقياس $S$ ونقطة صفر $Z$.",
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.",
      "correctAnswerEn": "Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.",
      "correctAnswerAr": "يرسم التكميم المتناظر القيم الحقيقية $r$ إلى عدد مكمم $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z\\right)$، بمقياس $S$ ونقطة صفر $Z$.",
      "correctIndex": 0,
      "explanationEn": "Analytical Derivation & Properties: Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يرسم التكميم المتناظر القيم الحقيقية $r$ إلى عدد مكمم $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z\\right)$، بمقياس $S$ ونقطة صفر $Z$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يرسم التكميم المتناظر القيم الحقيقية $r$ إلى عدد مكمم $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z\\right)$، بمقياس $S$ ونقطة صفر $Z$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch4_med_57",
      "titleEn": "[MEDIUM] Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance - Analysis 57",
      "titleAr": "[مستوى متوسط] العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة - تحليل 57",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance, what is the precise analytical formulation or operative rule? (Item 57)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 57)",
      "optionsEn": [
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.",
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data."
      ],
      "optionsAr": [
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "تحسب قيم SHAP الإسهامات الهامشية العادلة للخصائص بالاستناد إلى نظرية الألعاب التعاونية: $\\phi_i = \\sum \\text{weights} [f(S \\cup \\{i\\}) - f(S)]$، محققة بديهيات الكفاءة والتناظر والتجميع.",
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش."
      ],
      "correctAnswer": "SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.",
      "correctAnswerEn": "SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.",
      "correctAnswerAr": "تحسب قيم SHAP الإسهامات الهامشية العادلة للخصائص بالاستناد إلى نظرية الألعاب التعاونية: $\\phi_i = \\sum \\text{weights} [f(S \\cup \\{i\\}) - f(S)]$، محققة بديهيات الكفاءة والتناظر والتجميع.",
      "correctIndex": 1,
      "explanationEn": "Analytical Derivation & Properties: SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تحسب قيم SHAP الإسهامات الهامشية العادلة للخصائص بالاستناد إلى نظرية الألعاب التعاونية: $\\phi_i = \\sum \\text{weights} [f(S \\cup \\{i\\}) - f(S)]$، محققة بديهيات الكفاءة والتناظر والتجميع.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تحسب قيم SHAP الإسهامات الهامشية العادلة للخصائص بالاستناد إلى نظرية الألعاب التعاونية: $\\phi_i = \\sum \\text{weights} [f(S \\cup \\{i\\}) - f(S)]$، محققة بديهيات الكفاءة والتناظر والتجميع.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch4_med_58",
      "titleEn": "[MEDIUM] Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO) - Analysis 58",
      "titleAr": "[مستوى متوسط] التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO - تحليل 58",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO), what is the precise analytical formulation or operative rule? (Item 58)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 58)",
      "optionsEn": [
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.",
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan."
      ],
      "optionsAr": [
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "يقوم محسن انعدام التكرار (ZeRO) بتجزئة حالات المحسن (المرحلة 1)، والتدرجات (المرحلة 2)، ومعاملات النموذج (المرحلة 3) عبر كروت GPU، ملغياً هدر الذاكرة ومحافظاً على نفس حجم الاتصال.",
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG)."
      ],
      "correctAnswer": "The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.",
      "correctAnswerEn": "The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.",
      "correctAnswerAr": "يقوم محسن انعدام التكرار (ZeRO) بتجزئة حالات المحسن (المرحلة 1)، والتدرجات (المرحلة 2)، ومعاملات النموذج (المرحلة 3) عبر كروت GPU، ملغياً هدر الذاكرة ومحافظاً على نفس حجم الاتصال.",
      "correctIndex": 2,
      "explanationEn": "Analytical Derivation & Properties: The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يقوم محسن انعدام التكرار (ZeRO) بتجزئة حالات المحسن (المرحلة 1)، والتدرجات (المرحلة 2)، ومعاملات النموذج (المرحلة 3) عبر كروت GPU، ملغياً هدر الذاكرة ومحافظاً على نفس حجم الاتصال.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يقوم محسن انعدام التكرار (ZeRO) بتجزئة حالات المحسن (المرحلة 1)، والتدرجات (المرحلة 2)، ومعاملات النموذج (المرحلة 3) عبر كروت GPU، ملغياً هدر الذاكرة ومحافظاً على نفس حجم الاتصال.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch4_med_59",
      "titleEn": "[MEDIUM] Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning - Analysis 59",
      "titleAr": "[مستوى متوسط] ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات - تحليل 59",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning, what is the precise analytical formulation or operative rule? (Item 59)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 59)",
      "optionsEn": [
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$."
      ],
      "optionsAr": [
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يرسم التكميم المتناظر القيم الحقيقية $r$ إلى عدد مكمم $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z\\right)$، بمقياس $S$ ونقطة صفر $Z$."
      ],
      "correctAnswer": "Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.",
      "correctAnswerEn": "Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.",
      "correctAnswerAr": "يرسم التكميم المتناظر القيم الحقيقية $r$ إلى عدد مكمم $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z\\right)$، بمقياس $S$ ونقطة صفر $Z$.",
      "correctIndex": 3,
      "explanationEn": "Analytical Derivation & Properties: Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يرسم التكميم المتناظر القيم الحقيقية $r$ إلى عدد مكمم $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z\\right)$، بمقياس $S$ ونقطة صفر $Z$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يرسم التكميم المتناظر القيم الحقيقية $r$ إلى عدد مكمم $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z\\right)$، بمقياس $S$ ونقطة صفر $Z$.."
      ],
      "difficulty": "medium"
    }
  ],
  "hots": [
    {
      "id": "egbac_ai_data_science_ch4_hots_1",
      "titleEn": "[HOTS] Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO) - Evaluation 1",
      "titleAr": "[تفكير عليا] التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO - تقييم 1",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO): (Problem 1)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO: (مسألة 1)",
      "optionsEn": [
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "يتطلب تدريب نموذج لغوي بـ 70 مليار معامل بدقة FP16 ذاكرة 1,120 جيجابايت للأوزان والتدرجات ومحسن Adam. بتطبيق ZeRO Stage 3 عبر 64 كارت A100، ينخفض نصيب كل معالج إلى $17.5\\text{ GB}$، ملائماً سعة الذاكرة تماماً.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.",
      "correctAnswerEn": "Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.",
      "correctAnswerAr": "يتطلب تدريب نموذج لغوي بـ 70 مليار معامل بدقة FP16 ذاكرة 1,120 جيجابايت للأوزان والتدرجات ومحسن Adam. بتطبيق ZeRO Stage 3 عبر 64 كارت A100، ينخفض نصيب كل معالج إلى $17.5\\text{ GB}$، ملائماً سعة الذاكرة تماماً.",
      "correctIndex": 2,
      "explanationEn": "Detailed Solution & Numerical Evaluation: Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: يتطلب تدريب نموذج لغوي بـ 70 مليار معامل بدقة FP16 ذاكرة 1,120 جيجابايت للأوزان والتدرجات ومحسن Adam. بتطبيق ZeRO Stage 3 عبر 64 كارت A100، ينخفض نصيب كل معالج إلى $17.5\\text{ GB}$، ملائماً سعة الذاكرة تماماً.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: يتطلب تدريب نموذج لغوي بـ 70 مليار معامل بدقة FP16 ذاكرة 1,120 جيجابايت للأوزان والتدرجات ومحسن Adam. بتطبيق ZeRO Stage 3 عبر 64 كارت A100، ينخفض نصيب كل معالج إلى $17.5\\text{ GB}$، ملائماً سعة الذاكرة تماماً.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch4_hots_2",
      "titleEn": "[HOTS] Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning - Evaluation 2",
      "titleAr": "[تفكير عليا] ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات - تقييم 2",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning: (Problem 2)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات: (مسألة 2)",
      "optionsEn": [
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy."
      ],
      "optionsAr": [
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "يؤدي تكميم نموذج رؤية حاسوبية من 14 جيجابايت بدقة FP32 إلى INT8 إلى تقليص حجمه إلى $3.5\\text{ GB}$ (بنسبة ضغط $75\\%$) ورفع سرعة المعالجة من 42 إلى 178 إطار/ثانية بتراجع هامشي في الدقة $<0.35\\%$."
      ],
      "correctAnswer": "Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy.",
      "correctAnswerEn": "Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy.",
      "correctAnswerAr": "يؤدي تكميم نموذج رؤية حاسوبية من 14 جيجابايت بدقة FP32 إلى INT8 إلى تقليص حجمه إلى $3.5\\text{ GB}$ (بنسبة ضغط $75\\%$) ورفع سرعة المعالجة من 42 إلى 178 إطار/ثانية بتراجع هامشي في الدقة $<0.35\\%$.",
      "correctIndex": 3,
      "explanationEn": "Detailed Solution & Numerical Evaluation: Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: يؤدي تكميم نموذج رؤية حاسوبية من 14 جيجابايت بدقة FP32 إلى INT8 إلى تقليص حجمه إلى $3.5\\text{ GB}$ (بنسبة ضغط $75\\%$) ورفع سرعة المعالجة من 42 إلى 178 إطار/ثانية بتراجع هامشي في الدقة $<0.35\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: يؤدي تكميم نموذج رؤية حاسوبية من 14 جيجابايت بدقة FP32 إلى INT8 إلى تقليص حجمه إلى $3.5\\text{ GB}$ (بنسبة ضغط $75\\%$) ورفع سرعة المعالجة من 42 إلى 178 إطار/ثانية بتراجع هامشي في الدقة $<0.35\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch4_hots_3",
      "titleEn": "[HOTS] Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance - Evaluation 3",
      "titleAr": "[تفكير عليا] العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة - تقييم 3",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance: (Problem 3)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة: (مسألة 3)",
      "optionsEn": [
        "In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "في تدقيق نموذج ائتماني ذكي في مصر، كشف تحليل SHAP أن خاصية الرمز البريدي عملت كوكيل غير دستوري لتحيز ديموغرافي بقيمة $\\phi = -0.42$؛ واستبعادها حقق التكافؤ العادل مع الحفاظ على دقة $94.8\\%$.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC.",
      "correctAnswerEn": "In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC.",
      "correctAnswerAr": "في تدقيق نموذج ائتماني ذكي في مصر، كشف تحليل SHAP أن خاصية الرمز البريدي عملت كوكيل غير دستوري لتحيز ديموغرافي بقيمة $\\phi = -0.42$؛ واستبعادها حقق التكافؤ العادل مع الحفاظ على دقة $94.8\\%$.",
      "correctIndex": 0,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في تدقيق نموذج ائتماني ذكي في مصر، كشف تحليل SHAP أن خاصية الرمز البريدي عملت كوكيل غير دستوري لتحيز ديموغرافي بقيمة $\\phi = -0.42$؛ واستبعادها حقق التكافؤ العادل مع الحفاظ على دقة $94.8\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في تدقيق نموذج ائتماني ذكي في مصر، كشف تحليل SHAP أن خاصية الرمز البريدي عملت كوكيل غير دستوري لتحيز ديموغرافي بقيمة $\\phi = -0.42$؛ واستبعادها حقق التكافؤ العادل مع الحفاظ على دقة $94.8\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch4_hots_4",
      "titleEn": "[HOTS] Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO) - Evaluation 4",
      "titleAr": "[تفكير عليا] التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO - تقييم 4",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO): (Problem 4)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO: (مسألة 4)",
      "optionsEn": [
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "يتطلب تدريب نموذج لغوي بـ 70 مليار معامل بدقة FP16 ذاكرة 1,120 جيجابايت للأوزان والتدرجات ومحسن Adam. بتطبيق ZeRO Stage 3 عبر 64 كارت A100، ينخفض نصيب كل معالج إلى $17.5\\text{ GB}$، ملائماً سعة الذاكرة تماماً.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.",
      "correctAnswerEn": "Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.",
      "correctAnswerAr": "يتطلب تدريب نموذج لغوي بـ 70 مليار معامل بدقة FP16 ذاكرة 1,120 جيجابايت للأوزان والتدرجات ومحسن Adam. بتطبيق ZeRO Stage 3 عبر 64 كارت A100، ينخفض نصيب كل معالج إلى $17.5\\text{ GB}$، ملائماً سعة الذاكرة تماماً.",
      "correctIndex": 1,
      "explanationEn": "Detailed Solution & Numerical Evaluation: Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: يتطلب تدريب نموذج لغوي بـ 70 مليار معامل بدقة FP16 ذاكرة 1,120 جيجابايت للأوزان والتدرجات ومحسن Adam. بتطبيق ZeRO Stage 3 عبر 64 كارت A100، ينخفض نصيب كل معالج إلى $17.5\\text{ GB}$، ملائماً سعة الذاكرة تماماً.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: يتطلب تدريب نموذج لغوي بـ 70 مليار معامل بدقة FP16 ذاكرة 1,120 جيجابايت للأوزان والتدرجات ومحسن Adam. بتطبيق ZeRO Stage 3 عبر 64 كارت A100، ينخفض نصيب كل معالج إلى $17.5\\text{ GB}$، ملائماً سعة الذاكرة تماماً.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch4_hots_5",
      "titleEn": "[HOTS] Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning - Evaluation 5",
      "titleAr": "[تفكير عليا] ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات - تقييم 5",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning: (Problem 5)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات: (مسألة 5)",
      "optionsEn": [
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يؤدي تكميم نموذج رؤية حاسوبية من 14 جيجابايت بدقة FP32 إلى INT8 إلى تقليص حجمه إلى $3.5\\text{ GB}$ (بنسبة ضغط $75\\%$) ورفع سرعة المعالجة من 42 إلى 178 إطار/ثانية بتراجع هامشي في الدقة $<0.35\\%$.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy.",
      "correctAnswerEn": "Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy.",
      "correctAnswerAr": "يؤدي تكميم نموذج رؤية حاسوبية من 14 جيجابايت بدقة FP32 إلى INT8 إلى تقليص حجمه إلى $3.5\\text{ GB}$ (بنسبة ضغط $75\\%$) ورفع سرعة المعالجة من 42 إلى 178 إطار/ثانية بتراجع هامشي في الدقة $<0.35\\%$.",
      "correctIndex": 2,
      "explanationEn": "Detailed Solution & Numerical Evaluation: Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: يؤدي تكميم نموذج رؤية حاسوبية من 14 جيجابايت بدقة FP32 إلى INT8 إلى تقليص حجمه إلى $3.5\\text{ GB}$ (بنسبة ضغط $75\\%$) ورفع سرعة المعالجة من 42 إلى 178 إطار/ثانية بتراجع هامشي في الدقة $<0.35\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: يؤدي تكميم نموذج رؤية حاسوبية من 14 جيجابايت بدقة FP32 إلى INT8 إلى تقليص حجمه إلى $3.5\\text{ GB}$ (بنسبة ضغط $75\\%$) ورفع سرعة المعالجة من 42 إلى 178 إطار/ثانية بتراجع هامشي في الدقة $<0.35\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch4_hots_6",
      "titleEn": "[HOTS] Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance - Evaluation 6",
      "titleAr": "[تفكير عليا] العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة - تقييم 6",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance: (Problem 6)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة: (مسألة 6)",
      "optionsEn": [
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC."
      ],
      "optionsAr": [
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "في تدقيق نموذج ائتماني ذكي في مصر، كشف تحليل SHAP أن خاصية الرمز البريدي عملت كوكيل غير دستوري لتحيز ديموغرافي بقيمة $\\phi = -0.42$؛ واستبعادها حقق التكافؤ العادل مع الحفاظ على دقة $94.8\\%$."
      ],
      "correctAnswer": "In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC.",
      "correctAnswerEn": "In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC.",
      "correctAnswerAr": "في تدقيق نموذج ائتماني ذكي في مصر، كشف تحليل SHAP أن خاصية الرمز البريدي عملت كوكيل غير دستوري لتحيز ديموغرافي بقيمة $\\phi = -0.42$؛ واستبعادها حقق التكافؤ العادل مع الحفاظ على دقة $94.8\\%$.",
      "correctIndex": 3,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في تدقيق نموذج ائتماني ذكي في مصر، كشف تحليل SHAP أن خاصية الرمز البريدي عملت كوكيل غير دستوري لتحيز ديموغرافي بقيمة $\\phi = -0.42$؛ واستبعادها حقق التكافؤ العادل مع الحفاظ على دقة $94.8\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في تدقيق نموذج ائتماني ذكي في مصر، كشف تحليل SHAP أن خاصية الرمز البريدي عملت كوكيل غير دستوري لتحيز ديموغرافي بقيمة $\\phi = -0.42$؛ واستبعادها حقق التكافؤ العادل مع الحفاظ على دقة $94.8\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch4_hots_7",
      "titleEn": "[HOTS] Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO) - Evaluation 7",
      "titleAr": "[تفكير عليا] التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO - تقييم 7",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO): (Problem 7)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO: (مسألة 7)",
      "optionsEn": [
        "Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "يتطلب تدريب نموذج لغوي بـ 70 مليار معامل بدقة FP16 ذاكرة 1,120 جيجابايت للأوزان والتدرجات ومحسن Adam. بتطبيق ZeRO Stage 3 عبر 64 كارت A100، ينخفض نصيب كل معالج إلى $17.5\\text{ GB}$، ملائماً سعة الذاكرة تماماً.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.",
      "correctAnswerEn": "Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.",
      "correctAnswerAr": "يتطلب تدريب نموذج لغوي بـ 70 مليار معامل بدقة FP16 ذاكرة 1,120 جيجابايت للأوزان والتدرجات ومحسن Adam. بتطبيق ZeRO Stage 3 عبر 64 كارت A100، ينخفض نصيب كل معالج إلى $17.5\\text{ GB}$، ملائماً سعة الذاكرة تماماً.",
      "correctIndex": 0,
      "explanationEn": "Detailed Solution & Numerical Evaluation: Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: يتطلب تدريب نموذج لغوي بـ 70 مليار معامل بدقة FP16 ذاكرة 1,120 جيجابايت للأوزان والتدرجات ومحسن Adam. بتطبيق ZeRO Stage 3 عبر 64 كارت A100، ينخفض نصيب كل معالج إلى $17.5\\text{ GB}$، ملائماً سعة الذاكرة تماماً.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: يتطلب تدريب نموذج لغوي بـ 70 مليار معامل بدقة FP16 ذاكرة 1,120 جيجابايت للأوزان والتدرجات ومحسن Adam. بتطبيق ZeRO Stage 3 عبر 64 كارت A100، ينخفض نصيب كل معالج إلى $17.5\\text{ GB}$، ملائماً سعة الذاكرة تماماً.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch4_hots_8",
      "titleEn": "[HOTS] Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning - Evaluation 8",
      "titleAr": "[تفكير عليا] ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات - تقييم 8",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning: (Problem 8)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات: (مسألة 8)",
      "optionsEn": [
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "يؤدي تكميم نموذج رؤية حاسوبية من 14 جيجابايت بدقة FP32 إلى INT8 إلى تقليص حجمه إلى $3.5\\text{ GB}$ (بنسبة ضغط $75\\%$) ورفع سرعة المعالجة من 42 إلى 178 إطار/ثانية بتراجع هامشي في الدقة $<0.35\\%$.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy.",
      "correctAnswerEn": "Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy.",
      "correctAnswerAr": "يؤدي تكميم نموذج رؤية حاسوبية من 14 جيجابايت بدقة FP32 إلى INT8 إلى تقليص حجمه إلى $3.5\\text{ GB}$ (بنسبة ضغط $75\\%$) ورفع سرعة المعالجة من 42 إلى 178 إطار/ثانية بتراجع هامشي في الدقة $<0.35\\%$.",
      "correctIndex": 1,
      "explanationEn": "Detailed Solution & Numerical Evaluation: Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: يؤدي تكميم نموذج رؤية حاسوبية من 14 جيجابايت بدقة FP32 إلى INT8 إلى تقليص حجمه إلى $3.5\\text{ GB}$ (بنسبة ضغط $75\\%$) ورفع سرعة المعالجة من 42 إلى 178 إطار/ثانية بتراجع هامشي في الدقة $<0.35\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: يؤدي تكميم نموذج رؤية حاسوبية من 14 جيجابايت بدقة FP32 إلى INT8 إلى تقليص حجمه إلى $3.5\\text{ GB}$ (بنسبة ضغط $75\\%$) ورفع سرعة المعالجة من 42 إلى 178 إطار/ثانية بتراجع هامشي في الدقة $<0.35\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch4_hots_9",
      "titleEn": "[HOTS] Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance - Evaluation 9",
      "titleAr": "[تفكير عليا] العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة - تقييم 9",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance: (Problem 9)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة: (مسألة 9)",
      "optionsEn": [
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "في تدقيق نموذج ائتماني ذكي في مصر، كشف تحليل SHAP أن خاصية الرمز البريدي عملت كوكيل غير دستوري لتحيز ديموغرافي بقيمة $\\phi = -0.42$؛ واستبعادها حقق التكافؤ العادل مع الحفاظ على دقة $94.8\\%$.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC.",
      "correctAnswerEn": "In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC.",
      "correctAnswerAr": "في تدقيق نموذج ائتماني ذكي في مصر، كشف تحليل SHAP أن خاصية الرمز البريدي عملت كوكيل غير دستوري لتحيز ديموغرافي بقيمة $\\phi = -0.42$؛ واستبعادها حقق التكافؤ العادل مع الحفاظ على دقة $94.8\\%$.",
      "correctIndex": 2,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في تدقيق نموذج ائتماني ذكي في مصر، كشف تحليل SHAP أن خاصية الرمز البريدي عملت كوكيل غير دستوري لتحيز ديموغرافي بقيمة $\\phi = -0.42$؛ واستبعادها حقق التكافؤ العادل مع الحفاظ على دقة $94.8\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في تدقيق نموذج ائتماني ذكي في مصر، كشف تحليل SHAP أن خاصية الرمز البريدي عملت كوكيل غير دستوري لتحيز ديموغرافي بقيمة $\\phi = -0.42$؛ واستبعادها حقق التكافؤ العادل مع الحفاظ على دقة $94.8\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch4_hots_10",
      "titleEn": "[HOTS] Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO) - Evaluation 10",
      "titleAr": "[تفكير عليا] التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO - تقييم 10",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO): (Problem 10)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO: (مسألة 10)",
      "optionsEn": [
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits."
      ],
      "optionsAr": [
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "يتطلب تدريب نموذج لغوي بـ 70 مليار معامل بدقة FP16 ذاكرة 1,120 جيجابايت للأوزان والتدرجات ومحسن Adam. بتطبيق ZeRO Stage 3 عبر 64 كارت A100، ينخفض نصيب كل معالج إلى $17.5\\text{ GB}$، ملائماً سعة الذاكرة تماماً."
      ],
      "correctAnswer": "Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.",
      "correctAnswerEn": "Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.",
      "correctAnswerAr": "يتطلب تدريب نموذج لغوي بـ 70 مليار معامل بدقة FP16 ذاكرة 1,120 جيجابايت للأوزان والتدرجات ومحسن Adam. بتطبيق ZeRO Stage 3 عبر 64 كارت A100، ينخفض نصيب كل معالج إلى $17.5\\text{ GB}$، ملائماً سعة الذاكرة تماماً.",
      "correctIndex": 3,
      "explanationEn": "Detailed Solution & Numerical Evaluation: Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: يتطلب تدريب نموذج لغوي بـ 70 مليار معامل بدقة FP16 ذاكرة 1,120 جيجابايت للأوزان والتدرجات ومحسن Adam. بتطبيق ZeRO Stage 3 عبر 64 كارت A100، ينخفض نصيب كل معالج إلى $17.5\\text{ GB}$، ملائماً سعة الذاكرة تماماً.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: يتطلب تدريب نموذج لغوي بـ 70 مليار معامل بدقة FP16 ذاكرة 1,120 جيجابايت للأوزان والتدرجات ومحسن Adam. بتطبيق ZeRO Stage 3 عبر 64 كارت A100، ينخفض نصيب كل معالج إلى $17.5\\text{ GB}$، ملائماً سعة الذاكرة تماماً.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch4_hots_11",
      "titleEn": "[HOTS] Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning - Evaluation 11",
      "titleAr": "[تفكير عليا] ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات - تقييم 11",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning: (Problem 11)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات: (مسألة 11)",
      "optionsEn": [
        "Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "يؤدي تكميم نموذج رؤية حاسوبية من 14 جيجابايت بدقة FP32 إلى INT8 إلى تقليص حجمه إلى $3.5\\text{ GB}$ (بنسبة ضغط $75\\%$) ورفع سرعة المعالجة من 42 إلى 178 إطار/ثانية بتراجع هامشي في الدقة $<0.35\\%$.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy.",
      "correctAnswerEn": "Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy.",
      "correctAnswerAr": "يؤدي تكميم نموذج رؤية حاسوبية من 14 جيجابايت بدقة FP32 إلى INT8 إلى تقليص حجمه إلى $3.5\\text{ GB}$ (بنسبة ضغط $75\\%$) ورفع سرعة المعالجة من 42 إلى 178 إطار/ثانية بتراجع هامشي في الدقة $<0.35\\%$.",
      "correctIndex": 0,
      "explanationEn": "Detailed Solution & Numerical Evaluation: Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: يؤدي تكميم نموذج رؤية حاسوبية من 14 جيجابايت بدقة FP32 إلى INT8 إلى تقليص حجمه إلى $3.5\\text{ GB}$ (بنسبة ضغط $75\\%$) ورفع سرعة المعالجة من 42 إلى 178 إطار/ثانية بتراجع هامشي في الدقة $<0.35\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: يؤدي تكميم نموذج رؤية حاسوبية من 14 جيجابايت بدقة FP32 إلى INT8 إلى تقليص حجمه إلى $3.5\\text{ GB}$ (بنسبة ضغط $75\\%$) ورفع سرعة المعالجة من 42 إلى 178 إطار/ثانية بتراجع هامشي في الدقة $<0.35\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch4_hots_12",
      "titleEn": "[HOTS] Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance - Evaluation 12",
      "titleAr": "[تفكير عليا] العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة - تقييم 12",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance: (Problem 12)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة: (مسألة 12)",
      "optionsEn": [
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "في تدقيق نموذج ائتماني ذكي في مصر، كشف تحليل SHAP أن خاصية الرمز البريدي عملت كوكيل غير دستوري لتحيز ديموغرافي بقيمة $\\phi = -0.42$؛ واستبعادها حقق التكافؤ العادل مع الحفاظ على دقة $94.8\\%$.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC.",
      "correctAnswerEn": "In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC.",
      "correctAnswerAr": "في تدقيق نموذج ائتماني ذكي في مصر، كشف تحليل SHAP أن خاصية الرمز البريدي عملت كوكيل غير دستوري لتحيز ديموغرافي بقيمة $\\phi = -0.42$؛ واستبعادها حقق التكافؤ العادل مع الحفاظ على دقة $94.8\\%$.",
      "correctIndex": 1,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في تدقيق نموذج ائتماني ذكي في مصر، كشف تحليل SHAP أن خاصية الرمز البريدي عملت كوكيل غير دستوري لتحيز ديموغرافي بقيمة $\\phi = -0.42$؛ واستبعادها حقق التكافؤ العادل مع الحفاظ على دقة $94.8\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في تدقيق نموذج ائتماني ذكي في مصر، كشف تحليل SHAP أن خاصية الرمز البريدي عملت كوكيل غير دستوري لتحيز ديموغرافي بقيمة $\\phi = -0.42$؛ واستبعادها حقق التكافؤ العادل مع الحفاظ على دقة $94.8\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch4_hots_13",
      "titleEn": "[HOTS] Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO) - Evaluation 13",
      "titleAr": "[تفكير عليا] التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO - تقييم 13",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO): (Problem 13)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO: (مسألة 13)",
      "optionsEn": [
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "يتطلب تدريب نموذج لغوي بـ 70 مليار معامل بدقة FP16 ذاكرة 1,120 جيجابايت للأوزان والتدرجات ومحسن Adam. بتطبيق ZeRO Stage 3 عبر 64 كارت A100، ينخفض نصيب كل معالج إلى $17.5\\text{ GB}$، ملائماً سعة الذاكرة تماماً.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.",
      "correctAnswerEn": "Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.",
      "correctAnswerAr": "يتطلب تدريب نموذج لغوي بـ 70 مليار معامل بدقة FP16 ذاكرة 1,120 جيجابايت للأوزان والتدرجات ومحسن Adam. بتطبيق ZeRO Stage 3 عبر 64 كارت A100، ينخفض نصيب كل معالج إلى $17.5\\text{ GB}$، ملائماً سعة الذاكرة تماماً.",
      "correctIndex": 2,
      "explanationEn": "Detailed Solution & Numerical Evaluation: Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: يتطلب تدريب نموذج لغوي بـ 70 مليار معامل بدقة FP16 ذاكرة 1,120 جيجابايت للأوزان والتدرجات ومحسن Adam. بتطبيق ZeRO Stage 3 عبر 64 كارت A100، ينخفض نصيب كل معالج إلى $17.5\\text{ GB}$، ملائماً سعة الذاكرة تماماً.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: يتطلب تدريب نموذج لغوي بـ 70 مليار معامل بدقة FP16 ذاكرة 1,120 جيجابايت للأوزان والتدرجات ومحسن Adam. بتطبيق ZeRO Stage 3 عبر 64 كارت A100، ينخفض نصيب كل معالج إلى $17.5\\text{ GB}$، ملائماً سعة الذاكرة تماماً.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch4_hots_14",
      "titleEn": "[HOTS] Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning - Evaluation 14",
      "titleAr": "[تفكير عليا] ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات - تقييم 14",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning: (Problem 14)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات: (مسألة 14)",
      "optionsEn": [
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy."
      ],
      "optionsAr": [
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يؤدي تكميم نموذج رؤية حاسوبية من 14 جيجابايت بدقة FP32 إلى INT8 إلى تقليص حجمه إلى $3.5\\text{ GB}$ (بنسبة ضغط $75\\%$) ورفع سرعة المعالجة من 42 إلى 178 إطار/ثانية بتراجع هامشي في الدقة $<0.35\\%$."
      ],
      "correctAnswer": "Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy.",
      "correctAnswerEn": "Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy.",
      "correctAnswerAr": "يؤدي تكميم نموذج رؤية حاسوبية من 14 جيجابايت بدقة FP32 إلى INT8 إلى تقليص حجمه إلى $3.5\\text{ GB}$ (بنسبة ضغط $75\\%$) ورفع سرعة المعالجة من 42 إلى 178 إطار/ثانية بتراجع هامشي في الدقة $<0.35\\%$.",
      "correctIndex": 3,
      "explanationEn": "Detailed Solution & Numerical Evaluation: Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: يؤدي تكميم نموذج رؤية حاسوبية من 14 جيجابايت بدقة FP32 إلى INT8 إلى تقليص حجمه إلى $3.5\\text{ GB}$ (بنسبة ضغط $75\\%$) ورفع سرعة المعالجة من 42 إلى 178 إطار/ثانية بتراجع هامشي في الدقة $<0.35\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: يؤدي تكميم نموذج رؤية حاسوبية من 14 جيجابايت بدقة FP32 إلى INT8 إلى تقليص حجمه إلى $3.5\\text{ GB}$ (بنسبة ضغط $75\\%$) ورفع سرعة المعالجة من 42 إلى 178 إطار/ثانية بتراجع هامشي في الدقة $<0.35\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch4_hots_15",
      "titleEn": "[HOTS] Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance - Evaluation 15",
      "titleAr": "[تفكير عليا] العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة - تقييم 15",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance: (Problem 15)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة: (مسألة 15)",
      "optionsEn": [
        "In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "في تدقيق نموذج ائتماني ذكي في مصر، كشف تحليل SHAP أن خاصية الرمز البريدي عملت كوكيل غير دستوري لتحيز ديموغرافي بقيمة $\\phi = -0.42$؛ واستبعادها حقق التكافؤ العادل مع الحفاظ على دقة $94.8\\%$.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC.",
      "correctAnswerEn": "In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC.",
      "correctAnswerAr": "في تدقيق نموذج ائتماني ذكي في مصر، كشف تحليل SHAP أن خاصية الرمز البريدي عملت كوكيل غير دستوري لتحيز ديموغرافي بقيمة $\\phi = -0.42$؛ واستبعادها حقق التكافؤ العادل مع الحفاظ على دقة $94.8\\%$.",
      "correctIndex": 0,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في تدقيق نموذج ائتماني ذكي في مصر، كشف تحليل SHAP أن خاصية الرمز البريدي عملت كوكيل غير دستوري لتحيز ديموغرافي بقيمة $\\phi = -0.42$؛ واستبعادها حقق التكافؤ العادل مع الحفاظ على دقة $94.8\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في تدقيق نموذج ائتماني ذكي في مصر، كشف تحليل SHAP أن خاصية الرمز البريدي عملت كوكيل غير دستوري لتحيز ديموغرافي بقيمة $\\phi = -0.42$؛ واستبعادها حقق التكافؤ العادل مع الحفاظ على دقة $94.8\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch4_hots_16",
      "titleEn": "[HOTS] Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO) - Evaluation 16",
      "titleAr": "[تفكير عليا] التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO - تقييم 16",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO): (Problem 16)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO: (مسألة 16)",
      "optionsEn": [
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "يتطلب تدريب نموذج لغوي بـ 70 مليار معامل بدقة FP16 ذاكرة 1,120 جيجابايت للأوزان والتدرجات ومحسن Adam. بتطبيق ZeRO Stage 3 عبر 64 كارت A100، ينخفض نصيب كل معالج إلى $17.5\\text{ GB}$، ملائماً سعة الذاكرة تماماً.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.",
      "correctAnswerEn": "Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.",
      "correctAnswerAr": "يتطلب تدريب نموذج لغوي بـ 70 مليار معامل بدقة FP16 ذاكرة 1,120 جيجابايت للأوزان والتدرجات ومحسن Adam. بتطبيق ZeRO Stage 3 عبر 64 كارت A100، ينخفض نصيب كل معالج إلى $17.5\\text{ GB}$، ملائماً سعة الذاكرة تماماً.",
      "correctIndex": 1,
      "explanationEn": "Detailed Solution & Numerical Evaluation: Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: يتطلب تدريب نموذج لغوي بـ 70 مليار معامل بدقة FP16 ذاكرة 1,120 جيجابايت للأوزان والتدرجات ومحسن Adam. بتطبيق ZeRO Stage 3 عبر 64 كارت A100، ينخفض نصيب كل معالج إلى $17.5\\text{ GB}$، ملائماً سعة الذاكرة تماماً.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: يتطلب تدريب نموذج لغوي بـ 70 مليار معامل بدقة FP16 ذاكرة 1,120 جيجابايت للأوزان والتدرجات ومحسن Adam. بتطبيق ZeRO Stage 3 عبر 64 كارت A100، ينخفض نصيب كل معالج إلى $17.5\\text{ GB}$، ملائماً سعة الذاكرة تماماً.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch4_hots_17",
      "titleEn": "[HOTS] Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning - Evaluation 17",
      "titleAr": "[تفكير عليا] ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات - تقييم 17",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning: (Problem 17)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات: (مسألة 17)",
      "optionsEn": [
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "يؤدي تكميم نموذج رؤية حاسوبية من 14 جيجابايت بدقة FP32 إلى INT8 إلى تقليص حجمه إلى $3.5\\text{ GB}$ (بنسبة ضغط $75\\%$) ورفع سرعة المعالجة من 42 إلى 178 إطار/ثانية بتراجع هامشي في الدقة $<0.35\\%$.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy.",
      "correctAnswerEn": "Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy.",
      "correctAnswerAr": "يؤدي تكميم نموذج رؤية حاسوبية من 14 جيجابايت بدقة FP32 إلى INT8 إلى تقليص حجمه إلى $3.5\\text{ GB}$ (بنسبة ضغط $75\\%$) ورفع سرعة المعالجة من 42 إلى 178 إطار/ثانية بتراجع هامشي في الدقة $<0.35\\%$.",
      "correctIndex": 2,
      "explanationEn": "Detailed Solution & Numerical Evaluation: Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: يؤدي تكميم نموذج رؤية حاسوبية من 14 جيجابايت بدقة FP32 إلى INT8 إلى تقليص حجمه إلى $3.5\\text{ GB}$ (بنسبة ضغط $75\\%$) ورفع سرعة المعالجة من 42 إلى 178 إطار/ثانية بتراجع هامشي في الدقة $<0.35\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: يؤدي تكميم نموذج رؤية حاسوبية من 14 جيجابايت بدقة FP32 إلى INT8 إلى تقليص حجمه إلى $3.5\\text{ GB}$ (بنسبة ضغط $75\\%$) ورفع سرعة المعالجة من 42 إلى 178 إطار/ثانية بتراجع هامشي في الدقة $<0.35\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch4_hots_18",
      "titleEn": "[HOTS] Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance - Evaluation 18",
      "titleAr": "[تفكير عليا] العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة - تقييم 18",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance: (Problem 18)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة: (مسألة 18)",
      "optionsEn": [
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC."
      ],
      "optionsAr": [
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "في تدقيق نموذج ائتماني ذكي في مصر، كشف تحليل SHAP أن خاصية الرمز البريدي عملت كوكيل غير دستوري لتحيز ديموغرافي بقيمة $\\phi = -0.42$؛ واستبعادها حقق التكافؤ العادل مع الحفاظ على دقة $94.8\\%$."
      ],
      "correctAnswer": "In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC.",
      "correctAnswerEn": "In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC.",
      "correctAnswerAr": "في تدقيق نموذج ائتماني ذكي في مصر، كشف تحليل SHAP أن خاصية الرمز البريدي عملت كوكيل غير دستوري لتحيز ديموغرافي بقيمة $\\phi = -0.42$؛ واستبعادها حقق التكافؤ العادل مع الحفاظ على دقة $94.8\\%$.",
      "correctIndex": 3,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في تدقيق نموذج ائتماني ذكي في مصر، كشف تحليل SHAP أن خاصية الرمز البريدي عملت كوكيل غير دستوري لتحيز ديموغرافي بقيمة $\\phi = -0.42$؛ واستبعادها حقق التكافؤ العادل مع الحفاظ على دقة $94.8\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في تدقيق نموذج ائتماني ذكي في مصر، كشف تحليل SHAP أن خاصية الرمز البريدي عملت كوكيل غير دستوري لتحيز ديموغرافي بقيمة $\\phi = -0.42$؛ واستبعادها حقق التكافؤ العادل مع الحفاظ على دقة $94.8\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch4_hots_19",
      "titleEn": "[HOTS] Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO) - Evaluation 19",
      "titleAr": "[تفكير عليا] التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO - تقييم 19",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO): (Problem 19)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO: (مسألة 19)",
      "optionsEn": [
        "Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "يتطلب تدريب نموذج لغوي بـ 70 مليار معامل بدقة FP16 ذاكرة 1,120 جيجابايت للأوزان والتدرجات ومحسن Adam. بتطبيق ZeRO Stage 3 عبر 64 كارت A100، ينخفض نصيب كل معالج إلى $17.5\\text{ GB}$، ملائماً سعة الذاكرة تماماً.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.",
      "correctAnswerEn": "Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.",
      "correctAnswerAr": "يتطلب تدريب نموذج لغوي بـ 70 مليار معامل بدقة FP16 ذاكرة 1,120 جيجابايت للأوزان والتدرجات ومحسن Adam. بتطبيق ZeRO Stage 3 عبر 64 كارت A100، ينخفض نصيب كل معالج إلى $17.5\\text{ GB}$، ملائماً سعة الذاكرة تماماً.",
      "correctIndex": 0,
      "explanationEn": "Detailed Solution & Numerical Evaluation: Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: يتطلب تدريب نموذج لغوي بـ 70 مليار معامل بدقة FP16 ذاكرة 1,120 جيجابايت للأوزان والتدرجات ومحسن Adam. بتطبيق ZeRO Stage 3 عبر 64 كارت A100، ينخفض نصيب كل معالج إلى $17.5\\text{ GB}$، ملائماً سعة الذاكرة تماماً.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: يتطلب تدريب نموذج لغوي بـ 70 مليار معامل بدقة FP16 ذاكرة 1,120 جيجابايت للأوزان والتدرجات ومحسن Adam. بتطبيق ZeRO Stage 3 عبر 64 كارت A100، ينخفض نصيب كل معالج إلى $17.5\\text{ GB}$، ملائماً سعة الذاكرة تماماً.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch4_hots_20",
      "titleEn": "[HOTS] Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning - Evaluation 20",
      "titleAr": "[تفكير عليا] ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات - تقييم 20",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning: (Problem 20)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات: (مسألة 20)",
      "optionsEn": [
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يؤدي تكميم نموذج رؤية حاسوبية من 14 جيجابايت بدقة FP32 إلى INT8 إلى تقليص حجمه إلى $3.5\\text{ GB}$ (بنسبة ضغط $75\\%$) ورفع سرعة المعالجة من 42 إلى 178 إطار/ثانية بتراجع هامشي في الدقة $<0.35\\%$.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy.",
      "correctAnswerEn": "Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy.",
      "correctAnswerAr": "يؤدي تكميم نموذج رؤية حاسوبية من 14 جيجابايت بدقة FP32 إلى INT8 إلى تقليص حجمه إلى $3.5\\text{ GB}$ (بنسبة ضغط $75\\%$) ورفع سرعة المعالجة من 42 إلى 178 إطار/ثانية بتراجع هامشي في الدقة $<0.35\\%$.",
      "correctIndex": 1,
      "explanationEn": "Detailed Solution & Numerical Evaluation: Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: يؤدي تكميم نموذج رؤية حاسوبية من 14 جيجابايت بدقة FP32 إلى INT8 إلى تقليص حجمه إلى $3.5\\text{ GB}$ (بنسبة ضغط $75\\%$) ورفع سرعة المعالجة من 42 إلى 178 إطار/ثانية بتراجع هامشي في الدقة $<0.35\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: يؤدي تكميم نموذج رؤية حاسوبية من 14 جيجابايت بدقة FP32 إلى INT8 إلى تقليص حجمه إلى $3.5\\text{ GB}$ (بنسبة ضغط $75\\%$) ورفع سرعة المعالجة من 42 إلى 178 إطار/ثانية بتراجع هامشي في الدقة $<0.35\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch4_hots_21",
      "titleEn": "[HOTS] Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance - Evaluation 21",
      "titleAr": "[تفكير عليا] العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة - تقييم 21",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance: (Problem 21)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة: (مسألة 21)",
      "optionsEn": [
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "في تدقيق نموذج ائتماني ذكي في مصر، كشف تحليل SHAP أن خاصية الرمز البريدي عملت كوكيل غير دستوري لتحيز ديموغرافي بقيمة $\\phi = -0.42$؛ واستبعادها حقق التكافؤ العادل مع الحفاظ على دقة $94.8\\%$.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC.",
      "correctAnswerEn": "In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC.",
      "correctAnswerAr": "في تدقيق نموذج ائتماني ذكي في مصر، كشف تحليل SHAP أن خاصية الرمز البريدي عملت كوكيل غير دستوري لتحيز ديموغرافي بقيمة $\\phi = -0.42$؛ واستبعادها حقق التكافؤ العادل مع الحفاظ على دقة $94.8\\%$.",
      "correctIndex": 2,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في تدقيق نموذج ائتماني ذكي في مصر، كشف تحليل SHAP أن خاصية الرمز البريدي عملت كوكيل غير دستوري لتحيز ديموغرافي بقيمة $\\phi = -0.42$؛ واستبعادها حقق التكافؤ العادل مع الحفاظ على دقة $94.8\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في تدقيق نموذج ائتماني ذكي في مصر، كشف تحليل SHAP أن خاصية الرمز البريدي عملت كوكيل غير دستوري لتحيز ديموغرافي بقيمة $\\phi = -0.42$؛ واستبعادها حقق التكافؤ العادل مع الحفاظ على دقة $94.8\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch4_hots_22",
      "titleEn": "[HOTS] Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO) - Evaluation 22",
      "titleAr": "[تفكير عليا] التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO - تقييم 22",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO): (Problem 22)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO: (مسألة 22)",
      "optionsEn": [
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits."
      ],
      "optionsAr": [
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "يتطلب تدريب نموذج لغوي بـ 70 مليار معامل بدقة FP16 ذاكرة 1,120 جيجابايت للأوزان والتدرجات ومحسن Adam. بتطبيق ZeRO Stage 3 عبر 64 كارت A100، ينخفض نصيب كل معالج إلى $17.5\\text{ GB}$، ملائماً سعة الذاكرة تماماً."
      ],
      "correctAnswer": "Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.",
      "correctAnswerEn": "Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.",
      "correctAnswerAr": "يتطلب تدريب نموذج لغوي بـ 70 مليار معامل بدقة FP16 ذاكرة 1,120 جيجابايت للأوزان والتدرجات ومحسن Adam. بتطبيق ZeRO Stage 3 عبر 64 كارت A100، ينخفض نصيب كل معالج إلى $17.5\\text{ GB}$، ملائماً سعة الذاكرة تماماً.",
      "correctIndex": 3,
      "explanationEn": "Detailed Solution & Numerical Evaluation: Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: يتطلب تدريب نموذج لغوي بـ 70 مليار معامل بدقة FP16 ذاكرة 1,120 جيجابايت للأوزان والتدرجات ومحسن Adam. بتطبيق ZeRO Stage 3 عبر 64 كارت A100، ينخفض نصيب كل معالج إلى $17.5\\text{ GB}$، ملائماً سعة الذاكرة تماماً.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: يتطلب تدريب نموذج لغوي بـ 70 مليار معامل بدقة FP16 ذاكرة 1,120 جيجابايت للأوزان والتدرجات ومحسن Adam. بتطبيق ZeRO Stage 3 عبر 64 كارت A100، ينخفض نصيب كل معالج إلى $17.5\\text{ GB}$، ملائماً سعة الذاكرة تماماً.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch4_hots_23",
      "titleEn": "[HOTS] Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning - Evaluation 23",
      "titleAr": "[تفكير عليا] ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات - تقييم 23",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning: (Problem 23)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات: (مسألة 23)",
      "optionsEn": [
        "Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "يؤدي تكميم نموذج رؤية حاسوبية من 14 جيجابايت بدقة FP32 إلى INT8 إلى تقليص حجمه إلى $3.5\\text{ GB}$ (بنسبة ضغط $75\\%$) ورفع سرعة المعالجة من 42 إلى 178 إطار/ثانية بتراجع هامشي في الدقة $<0.35\\%$.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy.",
      "correctAnswerEn": "Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy.",
      "correctAnswerAr": "يؤدي تكميم نموذج رؤية حاسوبية من 14 جيجابايت بدقة FP32 إلى INT8 إلى تقليص حجمه إلى $3.5\\text{ GB}$ (بنسبة ضغط $75\\%$) ورفع سرعة المعالجة من 42 إلى 178 إطار/ثانية بتراجع هامشي في الدقة $<0.35\\%$.",
      "correctIndex": 0,
      "explanationEn": "Detailed Solution & Numerical Evaluation: Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: يؤدي تكميم نموذج رؤية حاسوبية من 14 جيجابايت بدقة FP32 إلى INT8 إلى تقليص حجمه إلى $3.5\\text{ GB}$ (بنسبة ضغط $75\\%$) ورفع سرعة المعالجة من 42 إلى 178 إطار/ثانية بتراجع هامشي في الدقة $<0.35\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: يؤدي تكميم نموذج رؤية حاسوبية من 14 جيجابايت بدقة FP32 إلى INT8 إلى تقليص حجمه إلى $3.5\\text{ GB}$ (بنسبة ضغط $75\\%$) ورفع سرعة المعالجة من 42 إلى 178 إطار/ثانية بتراجع هامشي في الدقة $<0.35\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch4_hots_24",
      "titleEn": "[HOTS] Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance - Evaluation 24",
      "titleAr": "[تفكير عليا] العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة - تقييم 24",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance: (Problem 24)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة: (مسألة 24)",
      "optionsEn": [
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "في تدقيق نموذج ائتماني ذكي في مصر، كشف تحليل SHAP أن خاصية الرمز البريدي عملت كوكيل غير دستوري لتحيز ديموغرافي بقيمة $\\phi = -0.42$؛ واستبعادها حقق التكافؤ العادل مع الحفاظ على دقة $94.8\\%$.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC.",
      "correctAnswerEn": "In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC.",
      "correctAnswerAr": "في تدقيق نموذج ائتماني ذكي في مصر، كشف تحليل SHAP أن خاصية الرمز البريدي عملت كوكيل غير دستوري لتحيز ديموغرافي بقيمة $\\phi = -0.42$؛ واستبعادها حقق التكافؤ العادل مع الحفاظ على دقة $94.8\\%$.",
      "correctIndex": 1,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في تدقيق نموذج ائتماني ذكي في مصر، كشف تحليل SHAP أن خاصية الرمز البريدي عملت كوكيل غير دستوري لتحيز ديموغرافي بقيمة $\\phi = -0.42$؛ واستبعادها حقق التكافؤ العادل مع الحفاظ على دقة $94.8\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في تدقيق نموذج ائتماني ذكي في مصر، كشف تحليل SHAP أن خاصية الرمز البريدي عملت كوكيل غير دستوري لتحيز ديموغرافي بقيمة $\\phi = -0.42$؛ واستبعادها حقق التكافؤ العادل مع الحفاظ على دقة $94.8\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch4_hots_25",
      "titleEn": "[HOTS] Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO) - Evaluation 25",
      "titleAr": "[تفكير عليا] التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO - تقييم 25",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO): (Problem 25)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO: (مسألة 25)",
      "optionsEn": [
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يتطلب تدريب نموذج لغوي بـ 70 مليار معامل بدقة FP16 ذاكرة 1,120 جيجابايت للأوزان والتدرجات ومحسن Adam. بتطبيق ZeRO Stage 3 عبر 64 كارت A100، ينخفض نصيب كل معالج إلى $17.5\\text{ GB}$، ملائماً سعة الذاكرة تماماً.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.",
      "correctAnswerEn": "Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.",
      "correctAnswerAr": "يتطلب تدريب نموذج لغوي بـ 70 مليار معامل بدقة FP16 ذاكرة 1,120 جيجابايت للأوزان والتدرجات ومحسن Adam. بتطبيق ZeRO Stage 3 عبر 64 كارت A100، ينخفض نصيب كل معالج إلى $17.5\\text{ GB}$، ملائماً سعة الذاكرة تماماً.",
      "correctIndex": 2,
      "explanationEn": "Detailed Solution & Numerical Evaluation: Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: يتطلب تدريب نموذج لغوي بـ 70 مليار معامل بدقة FP16 ذاكرة 1,120 جيجابايت للأوزان والتدرجات ومحسن Adam. بتطبيق ZeRO Stage 3 عبر 64 كارت A100، ينخفض نصيب كل معالج إلى $17.5\\text{ GB}$، ملائماً سعة الذاكرة تماماً.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: يتطلب تدريب نموذج لغوي بـ 70 مليار معامل بدقة FP16 ذاكرة 1,120 جيجابايت للأوزان والتدرجات ومحسن Adam. بتطبيق ZeRO Stage 3 عبر 64 كارت A100، ينخفض نصيب كل معالج إلى $17.5\\text{ GB}$، ملائماً سعة الذاكرة تماماً.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch4_hots_26",
      "titleEn": "[HOTS] Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning - Evaluation 26",
      "titleAr": "[تفكير عليا] ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات - تقييم 26",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning: (Problem 26)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات: (مسألة 26)",
      "optionsEn": [
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy."
      ],
      "optionsAr": [
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "يؤدي تكميم نموذج رؤية حاسوبية من 14 جيجابايت بدقة FP32 إلى INT8 إلى تقليص حجمه إلى $3.5\\text{ GB}$ (بنسبة ضغط $75\\%$) ورفع سرعة المعالجة من 42 إلى 178 إطار/ثانية بتراجع هامشي في الدقة $<0.35\\%$."
      ],
      "correctAnswer": "Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy.",
      "correctAnswerEn": "Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy.",
      "correctAnswerAr": "يؤدي تكميم نموذج رؤية حاسوبية من 14 جيجابايت بدقة FP32 إلى INT8 إلى تقليص حجمه إلى $3.5\\text{ GB}$ (بنسبة ضغط $75\\%$) ورفع سرعة المعالجة من 42 إلى 178 إطار/ثانية بتراجع هامشي في الدقة $<0.35\\%$.",
      "correctIndex": 3,
      "explanationEn": "Detailed Solution & Numerical Evaluation: Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: يؤدي تكميم نموذج رؤية حاسوبية من 14 جيجابايت بدقة FP32 إلى INT8 إلى تقليص حجمه إلى $3.5\\text{ GB}$ (بنسبة ضغط $75\\%$) ورفع سرعة المعالجة من 42 إلى 178 إطار/ثانية بتراجع هامشي في الدقة $<0.35\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: يؤدي تكميم نموذج رؤية حاسوبية من 14 جيجابايت بدقة FP32 إلى INT8 إلى تقليص حجمه إلى $3.5\\text{ GB}$ (بنسبة ضغط $75\\%$) ورفع سرعة المعالجة من 42 إلى 178 إطار/ثانية بتراجع هامشي في الدقة $<0.35\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch4_hots_27",
      "titleEn": "[HOTS] Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance - Evaluation 27",
      "titleAr": "[تفكير عليا] العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة - تقييم 27",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance: (Problem 27)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة: (مسألة 27)",
      "optionsEn": [
        "In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "في تدقيق نموذج ائتماني ذكي في مصر، كشف تحليل SHAP أن خاصية الرمز البريدي عملت كوكيل غير دستوري لتحيز ديموغرافي بقيمة $\\phi = -0.42$؛ واستبعادها حقق التكافؤ العادل مع الحفاظ على دقة $94.8\\%$.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC.",
      "correctAnswerEn": "In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC.",
      "correctAnswerAr": "في تدقيق نموذج ائتماني ذكي في مصر، كشف تحليل SHAP أن خاصية الرمز البريدي عملت كوكيل غير دستوري لتحيز ديموغرافي بقيمة $\\phi = -0.42$؛ واستبعادها حقق التكافؤ العادل مع الحفاظ على دقة $94.8\\%$.",
      "correctIndex": 0,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في تدقيق نموذج ائتماني ذكي في مصر، كشف تحليل SHAP أن خاصية الرمز البريدي عملت كوكيل غير دستوري لتحيز ديموغرافي بقيمة $\\phi = -0.42$؛ واستبعادها حقق التكافؤ العادل مع الحفاظ على دقة $94.8\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في تدقيق نموذج ائتماني ذكي في مصر، كشف تحليل SHAP أن خاصية الرمز البريدي عملت كوكيل غير دستوري لتحيز ديموغرافي بقيمة $\\phi = -0.42$؛ واستبعادها حقق التكافؤ العادل مع الحفاظ على دقة $94.8\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch4_hots_28",
      "titleEn": "[HOTS] Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO) - Evaluation 28",
      "titleAr": "[تفكير عليا] التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO - تقييم 28",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO): (Problem 28)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO: (مسألة 28)",
      "optionsEn": [
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "يتطلب تدريب نموذج لغوي بـ 70 مليار معامل بدقة FP16 ذاكرة 1,120 جيجابايت للأوزان والتدرجات ومحسن Adam. بتطبيق ZeRO Stage 3 عبر 64 كارت A100، ينخفض نصيب كل معالج إلى $17.5\\text{ GB}$، ملائماً سعة الذاكرة تماماً.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.",
      "correctAnswerEn": "Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.",
      "correctAnswerAr": "يتطلب تدريب نموذج لغوي بـ 70 مليار معامل بدقة FP16 ذاكرة 1,120 جيجابايت للأوزان والتدرجات ومحسن Adam. بتطبيق ZeRO Stage 3 عبر 64 كارت A100، ينخفض نصيب كل معالج إلى $17.5\\text{ GB}$، ملائماً سعة الذاكرة تماماً.",
      "correctIndex": 1,
      "explanationEn": "Detailed Solution & Numerical Evaluation: Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: يتطلب تدريب نموذج لغوي بـ 70 مليار معامل بدقة FP16 ذاكرة 1,120 جيجابايت للأوزان والتدرجات ومحسن Adam. بتطبيق ZeRO Stage 3 عبر 64 كارت A100، ينخفض نصيب كل معالج إلى $17.5\\text{ GB}$، ملائماً سعة الذاكرة تماماً.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: يتطلب تدريب نموذج لغوي بـ 70 مليار معامل بدقة FP16 ذاكرة 1,120 جيجابايت للأوزان والتدرجات ومحسن Adam. بتطبيق ZeRO Stage 3 عبر 64 كارت A100، ينخفض نصيب كل معالج إلى $17.5\\text{ GB}$، ملائماً سعة الذاكرة تماماً.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch4_hots_29",
      "titleEn": "[HOTS] Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning - Evaluation 29",
      "titleAr": "[تفكير عليا] ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات - تقييم 29",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning: (Problem 29)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات: (مسألة 29)",
      "optionsEn": [
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "يؤدي تكميم نموذج رؤية حاسوبية من 14 جيجابايت بدقة FP32 إلى INT8 إلى تقليص حجمه إلى $3.5\\text{ GB}$ (بنسبة ضغط $75\\%$) ورفع سرعة المعالجة من 42 إلى 178 إطار/ثانية بتراجع هامشي في الدقة $<0.35\\%$.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy.",
      "correctAnswerEn": "Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy.",
      "correctAnswerAr": "يؤدي تكميم نموذج رؤية حاسوبية من 14 جيجابايت بدقة FP32 إلى INT8 إلى تقليص حجمه إلى $3.5\\text{ GB}$ (بنسبة ضغط $75\\%$) ورفع سرعة المعالجة من 42 إلى 178 إطار/ثانية بتراجع هامشي في الدقة $<0.35\\%$.",
      "correctIndex": 2,
      "explanationEn": "Detailed Solution & Numerical Evaluation: Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: يؤدي تكميم نموذج رؤية حاسوبية من 14 جيجابايت بدقة FP32 إلى INT8 إلى تقليص حجمه إلى $3.5\\text{ GB}$ (بنسبة ضغط $75\\%$) ورفع سرعة المعالجة من 42 إلى 178 إطار/ثانية بتراجع هامشي في الدقة $<0.35\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: يؤدي تكميم نموذج رؤية حاسوبية من 14 جيجابايت بدقة FP32 إلى INT8 إلى تقليص حجمه إلى $3.5\\text{ GB}$ (بنسبة ضغط $75\\%$) ورفع سرعة المعالجة من 42 إلى 178 إطار/ثانية بتراجع هامشي في الدقة $<0.35\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch4_hots_30",
      "titleEn": "[HOTS] Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance - Evaluation 30",
      "titleAr": "[تفكير عليا] العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة - تقييم 30",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance: (Problem 30)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة: (مسألة 30)",
      "optionsEn": [
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC."
      ],
      "optionsAr": [
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "في تدقيق نموذج ائتماني ذكي في مصر، كشف تحليل SHAP أن خاصية الرمز البريدي عملت كوكيل غير دستوري لتحيز ديموغرافي بقيمة $\\phi = -0.42$؛ واستبعادها حقق التكافؤ العادل مع الحفاظ على دقة $94.8\\%$."
      ],
      "correctAnswer": "In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC.",
      "correctAnswerEn": "In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC.",
      "correctAnswerAr": "في تدقيق نموذج ائتماني ذكي في مصر، كشف تحليل SHAP أن خاصية الرمز البريدي عملت كوكيل غير دستوري لتحيز ديموغرافي بقيمة $\\phi = -0.42$؛ واستبعادها حقق التكافؤ العادل مع الحفاظ على دقة $94.8\\%$.",
      "correctIndex": 3,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في تدقيق نموذج ائتماني ذكي في مصر، كشف تحليل SHAP أن خاصية الرمز البريدي عملت كوكيل غير دستوري لتحيز ديموغرافي بقيمة $\\phi = -0.42$؛ واستبعادها حقق التكافؤ العادل مع الحفاظ على دقة $94.8\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في تدقيق نموذج ائتماني ذكي في مصر، كشف تحليل SHAP أن خاصية الرمز البريدي عملت كوكيل غير دستوري لتحيز ديموغرافي بقيمة $\\phi = -0.42$؛ واستبعادها حقق التكافؤ العادل مع الحفاظ على دقة $94.8\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch4_hots_31",
      "titleEn": "[HOTS] Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO) - Evaluation 31",
      "titleAr": "[تفكير عليا] التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO - تقييم 31",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO): (Problem 31)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO: (مسألة 31)",
      "optionsEn": [
        "Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "يتطلب تدريب نموذج لغوي بـ 70 مليار معامل بدقة FP16 ذاكرة 1,120 جيجابايت للأوزان والتدرجات ومحسن Adam. بتطبيق ZeRO Stage 3 عبر 64 كارت A100، ينخفض نصيب كل معالج إلى $17.5\\text{ GB}$، ملائماً سعة الذاكرة تماماً.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.",
      "correctAnswerEn": "Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.",
      "correctAnswerAr": "يتطلب تدريب نموذج لغوي بـ 70 مليار معامل بدقة FP16 ذاكرة 1,120 جيجابايت للأوزان والتدرجات ومحسن Adam. بتطبيق ZeRO Stage 3 عبر 64 كارت A100، ينخفض نصيب كل معالج إلى $17.5\\text{ GB}$، ملائماً سعة الذاكرة تماماً.",
      "correctIndex": 0,
      "explanationEn": "Detailed Solution & Numerical Evaluation: Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: يتطلب تدريب نموذج لغوي بـ 70 مليار معامل بدقة FP16 ذاكرة 1,120 جيجابايت للأوزان والتدرجات ومحسن Adam. بتطبيق ZeRO Stage 3 عبر 64 كارت A100، ينخفض نصيب كل معالج إلى $17.5\\text{ GB}$، ملائماً سعة الذاكرة تماماً.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: يتطلب تدريب نموذج لغوي بـ 70 مليار معامل بدقة FP16 ذاكرة 1,120 جيجابايت للأوزان والتدرجات ومحسن Adam. بتطبيق ZeRO Stage 3 عبر 64 كارت A100، ينخفض نصيب كل معالج إلى $17.5\\text{ GB}$، ملائماً سعة الذاكرة تماماً.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch4_hots_32",
      "titleEn": "[HOTS] Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning - Evaluation 32",
      "titleAr": "[تفكير عليا] ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات - تقييم 32",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning: (Problem 32)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات: (مسألة 32)",
      "optionsEn": [
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "يؤدي تكميم نموذج رؤية حاسوبية من 14 جيجابايت بدقة FP32 إلى INT8 إلى تقليص حجمه إلى $3.5\\text{ GB}$ (بنسبة ضغط $75\\%$) ورفع سرعة المعالجة من 42 إلى 178 إطار/ثانية بتراجع هامشي في الدقة $<0.35\\%$.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy.",
      "correctAnswerEn": "Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy.",
      "correctAnswerAr": "يؤدي تكميم نموذج رؤية حاسوبية من 14 جيجابايت بدقة FP32 إلى INT8 إلى تقليص حجمه إلى $3.5\\text{ GB}$ (بنسبة ضغط $75\\%$) ورفع سرعة المعالجة من 42 إلى 178 إطار/ثانية بتراجع هامشي في الدقة $<0.35\\%$.",
      "correctIndex": 1,
      "explanationEn": "Detailed Solution & Numerical Evaluation: Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: يؤدي تكميم نموذج رؤية حاسوبية من 14 جيجابايت بدقة FP32 إلى INT8 إلى تقليص حجمه إلى $3.5\\text{ GB}$ (بنسبة ضغط $75\\%$) ورفع سرعة المعالجة من 42 إلى 178 إطار/ثانية بتراجع هامشي في الدقة $<0.35\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: يؤدي تكميم نموذج رؤية حاسوبية من 14 جيجابايت بدقة FP32 إلى INT8 إلى تقليص حجمه إلى $3.5\\text{ GB}$ (بنسبة ضغط $75\\%$) ورفع سرعة المعالجة من 42 إلى 178 إطار/ثانية بتراجع هامشي في الدقة $<0.35\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch4_hots_33",
      "titleEn": "[HOTS] Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance - Evaluation 33",
      "titleAr": "[تفكير عليا] العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة - تقييم 33",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance: (Problem 33)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة: (مسألة 33)",
      "optionsEn": [
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "في تدقيق نموذج ائتماني ذكي في مصر، كشف تحليل SHAP أن خاصية الرمز البريدي عملت كوكيل غير دستوري لتحيز ديموغرافي بقيمة $\\phi = -0.42$؛ واستبعادها حقق التكافؤ العادل مع الحفاظ على دقة $94.8\\%$.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC.",
      "correctAnswerEn": "In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC.",
      "correctAnswerAr": "في تدقيق نموذج ائتماني ذكي في مصر، كشف تحليل SHAP أن خاصية الرمز البريدي عملت كوكيل غير دستوري لتحيز ديموغرافي بقيمة $\\phi = -0.42$؛ واستبعادها حقق التكافؤ العادل مع الحفاظ على دقة $94.8\\%$.",
      "correctIndex": 2,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في تدقيق نموذج ائتماني ذكي في مصر، كشف تحليل SHAP أن خاصية الرمز البريدي عملت كوكيل غير دستوري لتحيز ديموغرافي بقيمة $\\phi = -0.42$؛ واستبعادها حقق التكافؤ العادل مع الحفاظ على دقة $94.8\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في تدقيق نموذج ائتماني ذكي في مصر، كشف تحليل SHAP أن خاصية الرمز البريدي عملت كوكيل غير دستوري لتحيز ديموغرافي بقيمة $\\phi = -0.42$؛ واستبعادها حقق التكافؤ العادل مع الحفاظ على دقة $94.8\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch4_hots_34",
      "titleEn": "[HOTS] Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO) - Evaluation 34",
      "titleAr": "[تفكير عليا] التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO - تقييم 34",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO): (Problem 34)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO: (مسألة 34)",
      "optionsEn": [
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits."
      ],
      "optionsAr": [
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يتطلب تدريب نموذج لغوي بـ 70 مليار معامل بدقة FP16 ذاكرة 1,120 جيجابايت للأوزان والتدرجات ومحسن Adam. بتطبيق ZeRO Stage 3 عبر 64 كارت A100، ينخفض نصيب كل معالج إلى $17.5\\text{ GB}$، ملائماً سعة الذاكرة تماماً."
      ],
      "correctAnswer": "Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.",
      "correctAnswerEn": "Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.",
      "correctAnswerAr": "يتطلب تدريب نموذج لغوي بـ 70 مليار معامل بدقة FP16 ذاكرة 1,120 جيجابايت للأوزان والتدرجات ومحسن Adam. بتطبيق ZeRO Stage 3 عبر 64 كارت A100، ينخفض نصيب كل معالج إلى $17.5\\text{ GB}$، ملائماً سعة الذاكرة تماماً.",
      "correctIndex": 3,
      "explanationEn": "Detailed Solution & Numerical Evaluation: Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: يتطلب تدريب نموذج لغوي بـ 70 مليار معامل بدقة FP16 ذاكرة 1,120 جيجابايت للأوزان والتدرجات ومحسن Adam. بتطبيق ZeRO Stage 3 عبر 64 كارت A100، ينخفض نصيب كل معالج إلى $17.5\\text{ GB}$، ملائماً سعة الذاكرة تماماً.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: يتطلب تدريب نموذج لغوي بـ 70 مليار معامل بدقة FP16 ذاكرة 1,120 جيجابايت للأوزان والتدرجات ومحسن Adam. بتطبيق ZeRO Stage 3 عبر 64 كارت A100، ينخفض نصيب كل معالج إلى $17.5\\text{ GB}$، ملائماً سعة الذاكرة تماماً.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch4_hots_35",
      "titleEn": "[HOTS] Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning - Evaluation 35",
      "titleAr": "[تفكير عليا] ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات - تقييم 35",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning: (Problem 35)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات: (مسألة 35)",
      "optionsEn": [
        "Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "يؤدي تكميم نموذج رؤية حاسوبية من 14 جيجابايت بدقة FP32 إلى INT8 إلى تقليص حجمه إلى $3.5\\text{ GB}$ (بنسبة ضغط $75\\%$) ورفع سرعة المعالجة من 42 إلى 178 إطار/ثانية بتراجع هامشي في الدقة $<0.35\\%$.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy.",
      "correctAnswerEn": "Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy.",
      "correctAnswerAr": "يؤدي تكميم نموذج رؤية حاسوبية من 14 جيجابايت بدقة FP32 إلى INT8 إلى تقليص حجمه إلى $3.5\\text{ GB}$ (بنسبة ضغط $75\\%$) ورفع سرعة المعالجة من 42 إلى 178 إطار/ثانية بتراجع هامشي في الدقة $<0.35\\%$.",
      "correctIndex": 0,
      "explanationEn": "Detailed Solution & Numerical Evaluation: Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: يؤدي تكميم نموذج رؤية حاسوبية من 14 جيجابايت بدقة FP32 إلى INT8 إلى تقليص حجمه إلى $3.5\\text{ GB}$ (بنسبة ضغط $75\\%$) ورفع سرعة المعالجة من 42 إلى 178 إطار/ثانية بتراجع هامشي في الدقة $<0.35\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: يؤدي تكميم نموذج رؤية حاسوبية من 14 جيجابايت بدقة FP32 إلى INT8 إلى تقليص حجمه إلى $3.5\\text{ GB}$ (بنسبة ضغط $75\\%$) ورفع سرعة المعالجة من 42 إلى 178 إطار/ثانية بتراجع هامشي في الدقة $<0.35\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch4_hots_36",
      "titleEn": "[HOTS] Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance - Evaluation 36",
      "titleAr": "[تفكير عليا] العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة - تقييم 36",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance: (Problem 36)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة: (مسألة 36)",
      "optionsEn": [
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "في تدقيق نموذج ائتماني ذكي في مصر، كشف تحليل SHAP أن خاصية الرمز البريدي عملت كوكيل غير دستوري لتحيز ديموغرافي بقيمة $\\phi = -0.42$؛ واستبعادها حقق التكافؤ العادل مع الحفاظ على دقة $94.8\\%$.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC.",
      "correctAnswerEn": "In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC.",
      "correctAnswerAr": "في تدقيق نموذج ائتماني ذكي في مصر، كشف تحليل SHAP أن خاصية الرمز البريدي عملت كوكيل غير دستوري لتحيز ديموغرافي بقيمة $\\phi = -0.42$؛ واستبعادها حقق التكافؤ العادل مع الحفاظ على دقة $94.8\\%$.",
      "correctIndex": 1,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في تدقيق نموذج ائتماني ذكي في مصر، كشف تحليل SHAP أن خاصية الرمز البريدي عملت كوكيل غير دستوري لتحيز ديموغرافي بقيمة $\\phi = -0.42$؛ واستبعادها حقق التكافؤ العادل مع الحفاظ على دقة $94.8\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في تدقيق نموذج ائتماني ذكي في مصر، كشف تحليل SHAP أن خاصية الرمز البريدي عملت كوكيل غير دستوري لتحيز ديموغرافي بقيمة $\\phi = -0.42$؛ واستبعادها حقق التكافؤ العادل مع الحفاظ على دقة $94.8\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch4_hots_37",
      "titleEn": "[HOTS] Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO) - Evaluation 37",
      "titleAr": "[تفكير عليا] التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO - تقييم 37",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO): (Problem 37)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO: (مسألة 37)",
      "optionsEn": [
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "يتطلب تدريب نموذج لغوي بـ 70 مليار معامل بدقة FP16 ذاكرة 1,120 جيجابايت للأوزان والتدرجات ومحسن Adam. بتطبيق ZeRO Stage 3 عبر 64 كارت A100، ينخفض نصيب كل معالج إلى $17.5\\text{ GB}$، ملائماً سعة الذاكرة تماماً.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.",
      "correctAnswerEn": "Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.",
      "correctAnswerAr": "يتطلب تدريب نموذج لغوي بـ 70 مليار معامل بدقة FP16 ذاكرة 1,120 جيجابايت للأوزان والتدرجات ومحسن Adam. بتطبيق ZeRO Stage 3 عبر 64 كارت A100، ينخفض نصيب كل معالج إلى $17.5\\text{ GB}$، ملائماً سعة الذاكرة تماماً.",
      "correctIndex": 2,
      "explanationEn": "Detailed Solution & Numerical Evaluation: Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: يتطلب تدريب نموذج لغوي بـ 70 مليار معامل بدقة FP16 ذاكرة 1,120 جيجابايت للأوزان والتدرجات ومحسن Adam. بتطبيق ZeRO Stage 3 عبر 64 كارت A100، ينخفض نصيب كل معالج إلى $17.5\\text{ GB}$، ملائماً سعة الذاكرة تماماً.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: يتطلب تدريب نموذج لغوي بـ 70 مليار معامل بدقة FP16 ذاكرة 1,120 جيجابايت للأوزان والتدرجات ومحسن Adam. بتطبيق ZeRO Stage 3 عبر 64 كارت A100، ينخفض نصيب كل معالج إلى $17.5\\text{ GB}$، ملائماً سعة الذاكرة تماماً.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch4_hots_38",
      "titleEn": "[HOTS] Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning - Evaluation 38",
      "titleAr": "[تفكير عليا] ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات - تقييم 38",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning: (Problem 38)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات: (مسألة 38)",
      "optionsEn": [
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy."
      ],
      "optionsAr": [
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "يؤدي تكميم نموذج رؤية حاسوبية من 14 جيجابايت بدقة FP32 إلى INT8 إلى تقليص حجمه إلى $3.5\\text{ GB}$ (بنسبة ضغط $75\\%$) ورفع سرعة المعالجة من 42 إلى 178 إطار/ثانية بتراجع هامشي في الدقة $<0.35\\%$."
      ],
      "correctAnswer": "Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy.",
      "correctAnswerEn": "Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy.",
      "correctAnswerAr": "يؤدي تكميم نموذج رؤية حاسوبية من 14 جيجابايت بدقة FP32 إلى INT8 إلى تقليص حجمه إلى $3.5\\text{ GB}$ (بنسبة ضغط $75\\%$) ورفع سرعة المعالجة من 42 إلى 178 إطار/ثانية بتراجع هامشي في الدقة $<0.35\\%$.",
      "correctIndex": 3,
      "explanationEn": "Detailed Solution & Numerical Evaluation: Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: يؤدي تكميم نموذج رؤية حاسوبية من 14 جيجابايت بدقة FP32 إلى INT8 إلى تقليص حجمه إلى $3.5\\text{ GB}$ (بنسبة ضغط $75\\%$) ورفع سرعة المعالجة من 42 إلى 178 إطار/ثانية بتراجع هامشي في الدقة $<0.35\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: يؤدي تكميم نموذج رؤية حاسوبية من 14 جيجابايت بدقة FP32 إلى INT8 إلى تقليص حجمه إلى $3.5\\text{ GB}$ (بنسبة ضغط $75\\%$) ورفع سرعة المعالجة من 42 إلى 178 إطار/ثانية بتراجع هامشي في الدقة $<0.35\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch4_hots_39",
      "titleEn": "[HOTS] Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance - Evaluation 39",
      "titleAr": "[تفكير عليا] العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة - تقييم 39",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance: (Problem 39)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة: (مسألة 39)",
      "optionsEn": [
        "In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "في تدقيق نموذج ائتماني ذكي في مصر، كشف تحليل SHAP أن خاصية الرمز البريدي عملت كوكيل غير دستوري لتحيز ديموغرافي بقيمة $\\phi = -0.42$؛ واستبعادها حقق التكافؤ العادل مع الحفاظ على دقة $94.8\\%$.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC.",
      "correctAnswerEn": "In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC.",
      "correctAnswerAr": "في تدقيق نموذج ائتماني ذكي في مصر، كشف تحليل SHAP أن خاصية الرمز البريدي عملت كوكيل غير دستوري لتحيز ديموغرافي بقيمة $\\phi = -0.42$؛ واستبعادها حقق التكافؤ العادل مع الحفاظ على دقة $94.8\\%$.",
      "correctIndex": 0,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في تدقيق نموذج ائتماني ذكي في مصر، كشف تحليل SHAP أن خاصية الرمز البريدي عملت كوكيل غير دستوري لتحيز ديموغرافي بقيمة $\\phi = -0.42$؛ واستبعادها حقق التكافؤ العادل مع الحفاظ على دقة $94.8\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في تدقيق نموذج ائتماني ذكي في مصر، كشف تحليل SHAP أن خاصية الرمز البريدي عملت كوكيل غير دستوري لتحيز ديموغرافي بقيمة $\\phi = -0.42$؛ واستبعادها حقق التكافؤ العادل مع الحفاظ على دقة $94.8\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch4_hots_40",
      "titleEn": "[HOTS] Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO) - Evaluation 40",
      "titleAr": "[تفكير عليا] التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO - تقييم 40",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO): (Problem 40)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO: (مسألة 40)",
      "optionsEn": [
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يتطلب تدريب نموذج لغوي بـ 70 مليار معامل بدقة FP16 ذاكرة 1,120 جيجابايت للأوزان والتدرجات ومحسن Adam. بتطبيق ZeRO Stage 3 عبر 64 كارت A100، ينخفض نصيب كل معالج إلى $17.5\\text{ GB}$، ملائماً سعة الذاكرة تماماً.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.",
      "correctAnswerEn": "Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.",
      "correctAnswerAr": "يتطلب تدريب نموذج لغوي بـ 70 مليار معامل بدقة FP16 ذاكرة 1,120 جيجابايت للأوزان والتدرجات ومحسن Adam. بتطبيق ZeRO Stage 3 عبر 64 كارت A100، ينخفض نصيب كل معالج إلى $17.5\\text{ GB}$، ملائماً سعة الذاكرة تماماً.",
      "correctIndex": 1,
      "explanationEn": "Detailed Solution & Numerical Evaluation: Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: يتطلب تدريب نموذج لغوي بـ 70 مليار معامل بدقة FP16 ذاكرة 1,120 جيجابايت للأوزان والتدرجات ومحسن Adam. بتطبيق ZeRO Stage 3 عبر 64 كارت A100، ينخفض نصيب كل معالج إلى $17.5\\text{ GB}$، ملائماً سعة الذاكرة تماماً.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: يتطلب تدريب نموذج لغوي بـ 70 مليار معامل بدقة FP16 ذاكرة 1,120 جيجابايت للأوزان والتدرجات ومحسن Adam. بتطبيق ZeRO Stage 3 عبر 64 كارت A100، ينخفض نصيب كل معالج إلى $17.5\\text{ GB}$، ملائماً سعة الذاكرة تماماً.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch4_hots_41",
      "titleEn": "[HOTS] Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning - Evaluation 41",
      "titleAr": "[تفكير عليا] ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات - تقييم 41",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning: (Problem 41)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات: (مسألة 41)",
      "optionsEn": [
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "يؤدي تكميم نموذج رؤية حاسوبية من 14 جيجابايت بدقة FP32 إلى INT8 إلى تقليص حجمه إلى $3.5\\text{ GB}$ (بنسبة ضغط $75\\%$) ورفع سرعة المعالجة من 42 إلى 178 إطار/ثانية بتراجع هامشي في الدقة $<0.35\\%$.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy.",
      "correctAnswerEn": "Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy.",
      "correctAnswerAr": "يؤدي تكميم نموذج رؤية حاسوبية من 14 جيجابايت بدقة FP32 إلى INT8 إلى تقليص حجمه إلى $3.5\\text{ GB}$ (بنسبة ضغط $75\\%$) ورفع سرعة المعالجة من 42 إلى 178 إطار/ثانية بتراجع هامشي في الدقة $<0.35\\%$.",
      "correctIndex": 2,
      "explanationEn": "Detailed Solution & Numerical Evaluation: Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: يؤدي تكميم نموذج رؤية حاسوبية من 14 جيجابايت بدقة FP32 إلى INT8 إلى تقليص حجمه إلى $3.5\\text{ GB}$ (بنسبة ضغط $75\\%$) ورفع سرعة المعالجة من 42 إلى 178 إطار/ثانية بتراجع هامشي في الدقة $<0.35\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: يؤدي تكميم نموذج رؤية حاسوبية من 14 جيجابايت بدقة FP32 إلى INT8 إلى تقليص حجمه إلى $3.5\\text{ GB}$ (بنسبة ضغط $75\\%$) ورفع سرعة المعالجة من 42 إلى 178 إطار/ثانية بتراجع هامشي في الدقة $<0.35\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch4_hots_42",
      "titleEn": "[HOTS] Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance - Evaluation 42",
      "titleAr": "[تفكير عليا] العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة - تقييم 42",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance: (Problem 42)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة: (مسألة 42)",
      "optionsEn": [
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC."
      ],
      "optionsAr": [
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "في تدقيق نموذج ائتماني ذكي في مصر، كشف تحليل SHAP أن خاصية الرمز البريدي عملت كوكيل غير دستوري لتحيز ديموغرافي بقيمة $\\phi = -0.42$؛ واستبعادها حقق التكافؤ العادل مع الحفاظ على دقة $94.8\\%$."
      ],
      "correctAnswer": "In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC.",
      "correctAnswerEn": "In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC.",
      "correctAnswerAr": "في تدقيق نموذج ائتماني ذكي في مصر، كشف تحليل SHAP أن خاصية الرمز البريدي عملت كوكيل غير دستوري لتحيز ديموغرافي بقيمة $\\phi = -0.42$؛ واستبعادها حقق التكافؤ العادل مع الحفاظ على دقة $94.8\\%$.",
      "correctIndex": 3,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في تدقيق نموذج ائتماني ذكي في مصر، كشف تحليل SHAP أن خاصية الرمز البريدي عملت كوكيل غير دستوري لتحيز ديموغرافي بقيمة $\\phi = -0.42$؛ واستبعادها حقق التكافؤ العادل مع الحفاظ على دقة $94.8\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في تدقيق نموذج ائتماني ذكي في مصر، كشف تحليل SHAP أن خاصية الرمز البريدي عملت كوكيل غير دستوري لتحيز ديموغرافي بقيمة $\\phi = -0.42$؛ واستبعادها حقق التكافؤ العادل مع الحفاظ على دقة $94.8\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch4_hots_43",
      "titleEn": "[HOTS] Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO) - Evaluation 43",
      "titleAr": "[تفكير عليا] التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO - تقييم 43",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO): (Problem 43)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO: (مسألة 43)",
      "optionsEn": [
        "Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "يتطلب تدريب نموذج لغوي بـ 70 مليار معامل بدقة FP16 ذاكرة 1,120 جيجابايت للأوزان والتدرجات ومحسن Adam. بتطبيق ZeRO Stage 3 عبر 64 كارت A100، ينخفض نصيب كل معالج إلى $17.5\\text{ GB}$، ملائماً سعة الذاكرة تماماً.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.",
      "correctAnswerEn": "Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.",
      "correctAnswerAr": "يتطلب تدريب نموذج لغوي بـ 70 مليار معامل بدقة FP16 ذاكرة 1,120 جيجابايت للأوزان والتدرجات ومحسن Adam. بتطبيق ZeRO Stage 3 عبر 64 كارت A100، ينخفض نصيب كل معالج إلى $17.5\\text{ GB}$، ملائماً سعة الذاكرة تماماً.",
      "correctIndex": 0,
      "explanationEn": "Detailed Solution & Numerical Evaluation: Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: يتطلب تدريب نموذج لغوي بـ 70 مليار معامل بدقة FP16 ذاكرة 1,120 جيجابايت للأوزان والتدرجات ومحسن Adam. بتطبيق ZeRO Stage 3 عبر 64 كارت A100، ينخفض نصيب كل معالج إلى $17.5\\text{ GB}$، ملائماً سعة الذاكرة تماماً.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: يتطلب تدريب نموذج لغوي بـ 70 مليار معامل بدقة FP16 ذاكرة 1,120 جيجابايت للأوزان والتدرجات ومحسن Adam. بتطبيق ZeRO Stage 3 عبر 64 كارت A100، ينخفض نصيب كل معالج إلى $17.5\\text{ GB}$، ملائماً سعة الذاكرة تماماً.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch4_hots_44",
      "titleEn": "[HOTS] Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning - Evaluation 44",
      "titleAr": "[تفكير عليا] ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات - تقييم 44",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning: (Problem 44)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات: (مسألة 44)",
      "optionsEn": [
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "يؤدي تكميم نموذج رؤية حاسوبية من 14 جيجابايت بدقة FP32 إلى INT8 إلى تقليص حجمه إلى $3.5\\text{ GB}$ (بنسبة ضغط $75\\%$) ورفع سرعة المعالجة من 42 إلى 178 إطار/ثانية بتراجع هامشي في الدقة $<0.35\\%$.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy.",
      "correctAnswerEn": "Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy.",
      "correctAnswerAr": "يؤدي تكميم نموذج رؤية حاسوبية من 14 جيجابايت بدقة FP32 إلى INT8 إلى تقليص حجمه إلى $3.5\\text{ GB}$ (بنسبة ضغط $75\\%$) ورفع سرعة المعالجة من 42 إلى 178 إطار/ثانية بتراجع هامشي في الدقة $<0.35\\%$.",
      "correctIndex": 1,
      "explanationEn": "Detailed Solution & Numerical Evaluation: Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: يؤدي تكميم نموذج رؤية حاسوبية من 14 جيجابايت بدقة FP32 إلى INT8 إلى تقليص حجمه إلى $3.5\\text{ GB}$ (بنسبة ضغط $75\\%$) ورفع سرعة المعالجة من 42 إلى 178 إطار/ثانية بتراجع هامشي في الدقة $<0.35\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: يؤدي تكميم نموذج رؤية حاسوبية من 14 جيجابايت بدقة FP32 إلى INT8 إلى تقليص حجمه إلى $3.5\\text{ GB}$ (بنسبة ضغط $75\\%$) ورفع سرعة المعالجة من 42 إلى 178 إطار/ثانية بتراجع هامشي في الدقة $<0.35\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch4_hots_45",
      "titleEn": "[HOTS] Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance - Evaluation 45",
      "titleAr": "[تفكير عليا] العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة - تقييم 45",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance: (Problem 45)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة: (مسألة 45)",
      "optionsEn": [
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "في تدقيق نموذج ائتماني ذكي في مصر، كشف تحليل SHAP أن خاصية الرمز البريدي عملت كوكيل غير دستوري لتحيز ديموغرافي بقيمة $\\phi = -0.42$؛ واستبعادها حقق التكافؤ العادل مع الحفاظ على دقة $94.8\\%$.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC.",
      "correctAnswerEn": "In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC.",
      "correctAnswerAr": "في تدقيق نموذج ائتماني ذكي في مصر، كشف تحليل SHAP أن خاصية الرمز البريدي عملت كوكيل غير دستوري لتحيز ديموغرافي بقيمة $\\phi = -0.42$؛ واستبعادها حقق التكافؤ العادل مع الحفاظ على دقة $94.8\\%$.",
      "correctIndex": 2,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في تدقيق نموذج ائتماني ذكي في مصر، كشف تحليل SHAP أن خاصية الرمز البريدي عملت كوكيل غير دستوري لتحيز ديموغرافي بقيمة $\\phi = -0.42$؛ واستبعادها حقق التكافؤ العادل مع الحفاظ على دقة $94.8\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في تدقيق نموذج ائتماني ذكي في مصر، كشف تحليل SHAP أن خاصية الرمز البريدي عملت كوكيل غير دستوري لتحيز ديموغرافي بقيمة $\\phi = -0.42$؛ واستبعادها حقق التكافؤ العادل مع الحفاظ على دقة $94.8\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch4_hots_46",
      "titleEn": "[HOTS] Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO) - Evaluation 46",
      "titleAr": "[تفكير عليا] التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO - تقييم 46",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO): (Problem 46)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO: (مسألة 46)",
      "optionsEn": [
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits."
      ],
      "optionsAr": [
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "يتطلب تدريب نموذج لغوي بـ 70 مليار معامل بدقة FP16 ذاكرة 1,120 جيجابايت للأوزان والتدرجات ومحسن Adam. بتطبيق ZeRO Stage 3 عبر 64 كارت A100، ينخفض نصيب كل معالج إلى $17.5\\text{ GB}$، ملائماً سعة الذاكرة تماماً."
      ],
      "correctAnswer": "Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.",
      "correctAnswerEn": "Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.",
      "correctAnswerAr": "يتطلب تدريب نموذج لغوي بـ 70 مليار معامل بدقة FP16 ذاكرة 1,120 جيجابايت للأوزان والتدرجات ومحسن Adam. بتطبيق ZeRO Stage 3 عبر 64 كارت A100، ينخفض نصيب كل معالج إلى $17.5\\text{ GB}$، ملائماً سعة الذاكرة تماماً.",
      "correctIndex": 3,
      "explanationEn": "Detailed Solution & Numerical Evaluation: Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: يتطلب تدريب نموذج لغوي بـ 70 مليار معامل بدقة FP16 ذاكرة 1,120 جيجابايت للأوزان والتدرجات ومحسن Adam. بتطبيق ZeRO Stage 3 عبر 64 كارت A100، ينخفض نصيب كل معالج إلى $17.5\\text{ GB}$، ملائماً سعة الذاكرة تماماً.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: يتطلب تدريب نموذج لغوي بـ 70 مليار معامل بدقة FP16 ذاكرة 1,120 جيجابايت للأوزان والتدرجات ومحسن Adam. بتطبيق ZeRO Stage 3 عبر 64 كارت A100، ينخفض نصيب كل معالج إلى $17.5\\text{ GB}$، ملائماً سعة الذاكرة تماماً.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch4_hots_47",
      "titleEn": "[HOTS] Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning - Evaluation 47",
      "titleAr": "[تفكير عليا] ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات - تقييم 47",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning: (Problem 47)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات: (مسألة 47)",
      "optionsEn": [
        "Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "يؤدي تكميم نموذج رؤية حاسوبية من 14 جيجابايت بدقة FP32 إلى INT8 إلى تقليص حجمه إلى $3.5\\text{ GB}$ (بنسبة ضغط $75\\%$) ورفع سرعة المعالجة من 42 إلى 178 إطار/ثانية بتراجع هامشي في الدقة $<0.35\\%$.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy.",
      "correctAnswerEn": "Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy.",
      "correctAnswerAr": "يؤدي تكميم نموذج رؤية حاسوبية من 14 جيجابايت بدقة FP32 إلى INT8 إلى تقليص حجمه إلى $3.5\\text{ GB}$ (بنسبة ضغط $75\\%$) ورفع سرعة المعالجة من 42 إلى 178 إطار/ثانية بتراجع هامشي في الدقة $<0.35\\%$.",
      "correctIndex": 0,
      "explanationEn": "Detailed Solution & Numerical Evaluation: Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: يؤدي تكميم نموذج رؤية حاسوبية من 14 جيجابايت بدقة FP32 إلى INT8 إلى تقليص حجمه إلى $3.5\\text{ GB}$ (بنسبة ضغط $75\\%$) ورفع سرعة المعالجة من 42 إلى 178 إطار/ثانية بتراجع هامشي في الدقة $<0.35\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: يؤدي تكميم نموذج رؤية حاسوبية من 14 جيجابايت بدقة FP32 إلى INT8 إلى تقليص حجمه إلى $3.5\\text{ GB}$ (بنسبة ضغط $75\\%$) ورفع سرعة المعالجة من 42 إلى 178 إطار/ثانية بتراجع هامشي في الدقة $<0.35\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch4_hots_48",
      "titleEn": "[HOTS] Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance - Evaluation 48",
      "titleAr": "[تفكير عليا] العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة - تقييم 48",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance: (Problem 48)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة: (مسألة 48)",
      "optionsEn": [
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "في تدقيق نموذج ائتماني ذكي في مصر، كشف تحليل SHAP أن خاصية الرمز البريدي عملت كوكيل غير دستوري لتحيز ديموغرافي بقيمة $\\phi = -0.42$؛ واستبعادها حقق التكافؤ العادل مع الحفاظ على دقة $94.8\\%$.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC.",
      "correctAnswerEn": "In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC.",
      "correctAnswerAr": "في تدقيق نموذج ائتماني ذكي في مصر، كشف تحليل SHAP أن خاصية الرمز البريدي عملت كوكيل غير دستوري لتحيز ديموغرافي بقيمة $\\phi = -0.42$؛ واستبعادها حقق التكافؤ العادل مع الحفاظ على دقة $94.8\\%$.",
      "correctIndex": 1,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في تدقيق نموذج ائتماني ذكي في مصر، كشف تحليل SHAP أن خاصية الرمز البريدي عملت كوكيل غير دستوري لتحيز ديموغرافي بقيمة $\\phi = -0.42$؛ واستبعادها حقق التكافؤ العادل مع الحفاظ على دقة $94.8\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في تدقيق نموذج ائتماني ذكي في مصر، كشف تحليل SHAP أن خاصية الرمز البريدي عملت كوكيل غير دستوري لتحيز ديموغرافي بقيمة $\\phi = -0.42$؛ واستبعادها حقق التكافؤ العادل مع الحفاظ على دقة $94.8\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch4_hots_49",
      "titleEn": "[HOTS] Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO) - Evaluation 49",
      "titleAr": "[تفكير عليا] التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO - تقييم 49",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO): (Problem 49)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO: (مسألة 49)",
      "optionsEn": [
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "يتطلب تدريب نموذج لغوي بـ 70 مليار معامل بدقة FP16 ذاكرة 1,120 جيجابايت للأوزان والتدرجات ومحسن Adam. بتطبيق ZeRO Stage 3 عبر 64 كارت A100، ينخفض نصيب كل معالج إلى $17.5\\text{ GB}$، ملائماً سعة الذاكرة تماماً.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.",
      "correctAnswerEn": "Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.",
      "correctAnswerAr": "يتطلب تدريب نموذج لغوي بـ 70 مليار معامل بدقة FP16 ذاكرة 1,120 جيجابايت للأوزان والتدرجات ومحسن Adam. بتطبيق ZeRO Stage 3 عبر 64 كارت A100، ينخفض نصيب كل معالج إلى $17.5\\text{ GB}$، ملائماً سعة الذاكرة تماماً.",
      "correctIndex": 2,
      "explanationEn": "Detailed Solution & Numerical Evaluation: Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: يتطلب تدريب نموذج لغوي بـ 70 مليار معامل بدقة FP16 ذاكرة 1,120 جيجابايت للأوزان والتدرجات ومحسن Adam. بتطبيق ZeRO Stage 3 عبر 64 كارت A100، ينخفض نصيب كل معالج إلى $17.5\\text{ GB}$، ملائماً سعة الذاكرة تماماً.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: يتطلب تدريب نموذج لغوي بـ 70 مليار معامل بدقة FP16 ذاكرة 1,120 جيجابايت للأوزان والتدرجات ومحسن Adam. بتطبيق ZeRO Stage 3 عبر 64 كارت A100، ينخفض نصيب كل معالج إلى $17.5\\text{ GB}$، ملائماً سعة الذاكرة تماماً.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch4_hots_50",
      "titleEn": "[HOTS] Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning - Evaluation 50",
      "titleAr": "[تفكير عليا] ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات - تقييم 50",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning: (Problem 50)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات: (مسألة 50)",
      "optionsEn": [
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy."
      ],
      "optionsAr": [
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "يؤدي تكميم نموذج رؤية حاسوبية من 14 جيجابايت بدقة FP32 إلى INT8 إلى تقليص حجمه إلى $3.5\\text{ GB}$ (بنسبة ضغط $75\\%$) ورفع سرعة المعالجة من 42 إلى 178 إطار/ثانية بتراجع هامشي في الدقة $<0.35\\%$."
      ],
      "correctAnswer": "Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy.",
      "correctAnswerEn": "Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy.",
      "correctAnswerAr": "يؤدي تكميم نموذج رؤية حاسوبية من 14 جيجابايت بدقة FP32 إلى INT8 إلى تقليص حجمه إلى $3.5\\text{ GB}$ (بنسبة ضغط $75\\%$) ورفع سرعة المعالجة من 42 إلى 178 إطار/ثانية بتراجع هامشي في الدقة $<0.35\\%$.",
      "correctIndex": 3,
      "explanationEn": "Detailed Solution & Numerical Evaluation: Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: يؤدي تكميم نموذج رؤية حاسوبية من 14 جيجابايت بدقة FP32 إلى INT8 إلى تقليص حجمه إلى $3.5\\text{ GB}$ (بنسبة ضغط $75\\%$) ورفع سرعة المعالجة من 42 إلى 178 إطار/ثانية بتراجع هامشي في الدقة $<0.35\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: يؤدي تكميم نموذج رؤية حاسوبية من 14 جيجابايت بدقة FP32 إلى INT8 إلى تقليص حجمه إلى $3.5\\text{ GB}$ (بنسبة ضغط $75\\%$) ورفع سرعة المعالجة من 42 إلى 178 إطار/ثانية بتراجع هامشي في الدقة $<0.35\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch4_hots_51",
      "titleEn": "[HOTS] Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance - Evaluation 51",
      "titleAr": "[تفكير عليا] العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة - تقييم 51",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance: (Problem 51)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة: (مسألة 51)",
      "optionsEn": [
        "In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "في تدقيق نموذج ائتماني ذكي في مصر، كشف تحليل SHAP أن خاصية الرمز البريدي عملت كوكيل غير دستوري لتحيز ديموغرافي بقيمة $\\phi = -0.42$؛ واستبعادها حقق التكافؤ العادل مع الحفاظ على دقة $94.8\\%$.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC.",
      "correctAnswerEn": "In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC.",
      "correctAnswerAr": "في تدقيق نموذج ائتماني ذكي في مصر، كشف تحليل SHAP أن خاصية الرمز البريدي عملت كوكيل غير دستوري لتحيز ديموغرافي بقيمة $\\phi = -0.42$؛ واستبعادها حقق التكافؤ العادل مع الحفاظ على دقة $94.8\\%$.",
      "correctIndex": 0,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في تدقيق نموذج ائتماني ذكي في مصر، كشف تحليل SHAP أن خاصية الرمز البريدي عملت كوكيل غير دستوري لتحيز ديموغرافي بقيمة $\\phi = -0.42$؛ واستبعادها حقق التكافؤ العادل مع الحفاظ على دقة $94.8\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في تدقيق نموذج ائتماني ذكي في مصر، كشف تحليل SHAP أن خاصية الرمز البريدي عملت كوكيل غير دستوري لتحيز ديموغرافي بقيمة $\\phi = -0.42$؛ واستبعادها حقق التكافؤ العادل مع الحفاظ على دقة $94.8\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch4_hots_52",
      "titleEn": "[HOTS] Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO) - Evaluation 52",
      "titleAr": "[تفكير عليا] التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO - تقييم 52",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO): (Problem 52)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO: (مسألة 52)",
      "optionsEn": [
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "يتطلب تدريب نموذج لغوي بـ 70 مليار معامل بدقة FP16 ذاكرة 1,120 جيجابايت للأوزان والتدرجات ومحسن Adam. بتطبيق ZeRO Stage 3 عبر 64 كارت A100، ينخفض نصيب كل معالج إلى $17.5\\text{ GB}$، ملائماً سعة الذاكرة تماماً.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.",
      "correctAnswerEn": "Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.",
      "correctAnswerAr": "يتطلب تدريب نموذج لغوي بـ 70 مليار معامل بدقة FP16 ذاكرة 1,120 جيجابايت للأوزان والتدرجات ومحسن Adam. بتطبيق ZeRO Stage 3 عبر 64 كارت A100، ينخفض نصيب كل معالج إلى $17.5\\text{ GB}$، ملائماً سعة الذاكرة تماماً.",
      "correctIndex": 1,
      "explanationEn": "Detailed Solution & Numerical Evaluation: Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: يتطلب تدريب نموذج لغوي بـ 70 مليار معامل بدقة FP16 ذاكرة 1,120 جيجابايت للأوزان والتدرجات ومحسن Adam. بتطبيق ZeRO Stage 3 عبر 64 كارت A100، ينخفض نصيب كل معالج إلى $17.5\\text{ GB}$، ملائماً سعة الذاكرة تماماً.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: يتطلب تدريب نموذج لغوي بـ 70 مليار معامل بدقة FP16 ذاكرة 1,120 جيجابايت للأوزان والتدرجات ومحسن Adam. بتطبيق ZeRO Stage 3 عبر 64 كارت A100، ينخفض نصيب كل معالج إلى $17.5\\text{ GB}$، ملائماً سعة الذاكرة تماماً.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch4_hots_53",
      "titleEn": "[HOTS] Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning - Evaluation 53",
      "titleAr": "[تفكير عليا] ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات - تقييم 53",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning: (Problem 53)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات: (مسألة 53)",
      "optionsEn": [
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "يؤدي تكميم نموذج رؤية حاسوبية من 14 جيجابايت بدقة FP32 إلى INT8 إلى تقليص حجمه إلى $3.5\\text{ GB}$ (بنسبة ضغط $75\\%$) ورفع سرعة المعالجة من 42 إلى 178 إطار/ثانية بتراجع هامشي في الدقة $<0.35\\%$.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy.",
      "correctAnswerEn": "Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy.",
      "correctAnswerAr": "يؤدي تكميم نموذج رؤية حاسوبية من 14 جيجابايت بدقة FP32 إلى INT8 إلى تقليص حجمه إلى $3.5\\text{ GB}$ (بنسبة ضغط $75\\%$) ورفع سرعة المعالجة من 42 إلى 178 إطار/ثانية بتراجع هامشي في الدقة $<0.35\\%$.",
      "correctIndex": 2,
      "explanationEn": "Detailed Solution & Numerical Evaluation: Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: يؤدي تكميم نموذج رؤية حاسوبية من 14 جيجابايت بدقة FP32 إلى INT8 إلى تقليص حجمه إلى $3.5\\text{ GB}$ (بنسبة ضغط $75\\%$) ورفع سرعة المعالجة من 42 إلى 178 إطار/ثانية بتراجع هامشي في الدقة $<0.35\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: يؤدي تكميم نموذج رؤية حاسوبية من 14 جيجابايت بدقة FP32 إلى INT8 إلى تقليص حجمه إلى $3.5\\text{ GB}$ (بنسبة ضغط $75\\%$) ورفع سرعة المعالجة من 42 إلى 178 إطار/ثانية بتراجع هامشي في الدقة $<0.35\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch4_hots_54",
      "titleEn": "[HOTS] Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance - Evaluation 54",
      "titleAr": "[تفكير عليا] العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة - تقييم 54",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance: (Problem 54)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة: (مسألة 54)",
      "optionsEn": [
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC."
      ],
      "optionsAr": [
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "في تدقيق نموذج ائتماني ذكي في مصر، كشف تحليل SHAP أن خاصية الرمز البريدي عملت كوكيل غير دستوري لتحيز ديموغرافي بقيمة $\\phi = -0.42$؛ واستبعادها حقق التكافؤ العادل مع الحفاظ على دقة $94.8\\%$."
      ],
      "correctAnswer": "In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC.",
      "correctAnswerEn": "In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC.",
      "correctAnswerAr": "في تدقيق نموذج ائتماني ذكي في مصر، كشف تحليل SHAP أن خاصية الرمز البريدي عملت كوكيل غير دستوري لتحيز ديموغرافي بقيمة $\\phi = -0.42$؛ واستبعادها حقق التكافؤ العادل مع الحفاظ على دقة $94.8\\%$.",
      "correctIndex": 3,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في تدقيق نموذج ائتماني ذكي في مصر، كشف تحليل SHAP أن خاصية الرمز البريدي عملت كوكيل غير دستوري لتحيز ديموغرافي بقيمة $\\phi = -0.42$؛ واستبعادها حقق التكافؤ العادل مع الحفاظ على دقة $94.8\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في تدقيق نموذج ائتماني ذكي في مصر، كشف تحليل SHAP أن خاصية الرمز البريدي عملت كوكيل غير دستوري لتحيز ديموغرافي بقيمة $\\phi = -0.42$؛ واستبعادها حقق التكافؤ العادل مع الحفاظ على دقة $94.8\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch4_hots_55",
      "titleEn": "[HOTS] Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO) - Evaluation 55",
      "titleAr": "[تفكير عليا] التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO - تقييم 55",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO): (Problem 55)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO: (مسألة 55)",
      "optionsEn": [
        "Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "يتطلب تدريب نموذج لغوي بـ 70 مليار معامل بدقة FP16 ذاكرة 1,120 جيجابايت للأوزان والتدرجات ومحسن Adam. بتطبيق ZeRO Stage 3 عبر 64 كارت A100، ينخفض نصيب كل معالج إلى $17.5\\text{ GB}$، ملائماً سعة الذاكرة تماماً.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.",
      "correctAnswerEn": "Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.",
      "correctAnswerAr": "يتطلب تدريب نموذج لغوي بـ 70 مليار معامل بدقة FP16 ذاكرة 1,120 جيجابايت للأوزان والتدرجات ومحسن Adam. بتطبيق ZeRO Stage 3 عبر 64 كارت A100، ينخفض نصيب كل معالج إلى $17.5\\text{ GB}$، ملائماً سعة الذاكرة تماماً.",
      "correctIndex": 0,
      "explanationEn": "Detailed Solution & Numerical Evaluation: Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: يتطلب تدريب نموذج لغوي بـ 70 مليار معامل بدقة FP16 ذاكرة 1,120 جيجابايت للأوزان والتدرجات ومحسن Adam. بتطبيق ZeRO Stage 3 عبر 64 كارت A100، ينخفض نصيب كل معالج إلى $17.5\\text{ GB}$، ملائماً سعة الذاكرة تماماً.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: يتطلب تدريب نموذج لغوي بـ 70 مليار معامل بدقة FP16 ذاكرة 1,120 جيجابايت للأوزان والتدرجات ومحسن Adam. بتطبيق ZeRO Stage 3 عبر 64 كارت A100، ينخفض نصيب كل معالج إلى $17.5\\text{ GB}$، ملائماً سعة الذاكرة تماماً.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch4_hots_56",
      "titleEn": "[HOTS] Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning - Evaluation 56",
      "titleAr": "[تفكير عليا] ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات - تقييم 56",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning: (Problem 56)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات: (مسألة 56)",
      "optionsEn": [
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "يؤدي تكميم نموذج رؤية حاسوبية من 14 جيجابايت بدقة FP32 إلى INT8 إلى تقليص حجمه إلى $3.5\\text{ GB}$ (بنسبة ضغط $75\\%$) ورفع سرعة المعالجة من 42 إلى 178 إطار/ثانية بتراجع هامشي في الدقة $<0.35\\%$.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy.",
      "correctAnswerEn": "Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy.",
      "correctAnswerAr": "يؤدي تكميم نموذج رؤية حاسوبية من 14 جيجابايت بدقة FP32 إلى INT8 إلى تقليص حجمه إلى $3.5\\text{ GB}$ (بنسبة ضغط $75\\%$) ورفع سرعة المعالجة من 42 إلى 178 إطار/ثانية بتراجع هامشي في الدقة $<0.35\\%$.",
      "correctIndex": 1,
      "explanationEn": "Detailed Solution & Numerical Evaluation: Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: يؤدي تكميم نموذج رؤية حاسوبية من 14 جيجابايت بدقة FP32 إلى INT8 إلى تقليص حجمه إلى $3.5\\text{ GB}$ (بنسبة ضغط $75\\%$) ورفع سرعة المعالجة من 42 إلى 178 إطار/ثانية بتراجع هامشي في الدقة $<0.35\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: يؤدي تكميم نموذج رؤية حاسوبية من 14 جيجابايت بدقة FP32 إلى INT8 إلى تقليص حجمه إلى $3.5\\text{ GB}$ (بنسبة ضغط $75\\%$) ورفع سرعة المعالجة من 42 إلى 178 إطار/ثانية بتراجع هامشي في الدقة $<0.35\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch4_hots_57",
      "titleEn": "[HOTS] Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance - Evaluation 57",
      "titleAr": "[تفكير عليا] العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة - تقييم 57",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance: (Problem 57)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة: (مسألة 57)",
      "optionsEn": [
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "في تدقيق نموذج ائتماني ذكي في مصر، كشف تحليل SHAP أن خاصية الرمز البريدي عملت كوكيل غير دستوري لتحيز ديموغرافي بقيمة $\\phi = -0.42$؛ واستبعادها حقق التكافؤ العادل مع الحفاظ على دقة $94.8\\%$.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC.",
      "correctAnswerEn": "In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC.",
      "correctAnswerAr": "في تدقيق نموذج ائتماني ذكي في مصر، كشف تحليل SHAP أن خاصية الرمز البريدي عملت كوكيل غير دستوري لتحيز ديموغرافي بقيمة $\\phi = -0.42$؛ واستبعادها حقق التكافؤ العادل مع الحفاظ على دقة $94.8\\%$.",
      "correctIndex": 2,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في تدقيق نموذج ائتماني ذكي في مصر، كشف تحليل SHAP أن خاصية الرمز البريدي عملت كوكيل غير دستوري لتحيز ديموغرافي بقيمة $\\phi = -0.42$؛ واستبعادها حقق التكافؤ العادل مع الحفاظ على دقة $94.8\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في تدقيق نموذج ائتماني ذكي في مصر، كشف تحليل SHAP أن خاصية الرمز البريدي عملت كوكيل غير دستوري لتحيز ديموغرافي بقيمة $\\phi = -0.42$؛ واستبعادها حقق التكافؤ العادل مع الحفاظ على دقة $94.8\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch4_hots_58",
      "titleEn": "[HOTS] Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO) - Evaluation 58",
      "titleAr": "[تفكير عليا] التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO - تقييم 58",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO): (Problem 58)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO: (مسألة 58)",
      "optionsEn": [
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits."
      ],
      "optionsAr": [
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "يتطلب تدريب نموذج لغوي بـ 70 مليار معامل بدقة FP16 ذاكرة 1,120 جيجابايت للأوزان والتدرجات ومحسن Adam. بتطبيق ZeRO Stage 3 عبر 64 كارت A100، ينخفض نصيب كل معالج إلى $17.5\\text{ GB}$، ملائماً سعة الذاكرة تماماً."
      ],
      "correctAnswer": "Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.",
      "correctAnswerEn": "Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.",
      "correctAnswerAr": "يتطلب تدريب نموذج لغوي بـ 70 مليار معامل بدقة FP16 ذاكرة 1,120 جيجابايت للأوزان والتدرجات ومحسن Adam. بتطبيق ZeRO Stage 3 عبر 64 كارت A100، ينخفض نصيب كل معالج إلى $17.5\\text{ GB}$، ملائماً سعة الذاكرة تماماً.",
      "correctIndex": 3,
      "explanationEn": "Detailed Solution & Numerical Evaluation: Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: يتطلب تدريب نموذج لغوي بـ 70 مليار معامل بدقة FP16 ذاكرة 1,120 جيجابايت للأوزان والتدرجات ومحسن Adam. بتطبيق ZeRO Stage 3 عبر 64 كارت A100، ينخفض نصيب كل معالج إلى $17.5\\text{ GB}$، ملائماً سعة الذاكرة تماماً.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: يتطلب تدريب نموذج لغوي بـ 70 مليار معامل بدقة FP16 ذاكرة 1,120 جيجابايت للأوزان والتدرجات ومحسن Adam. بتطبيق ZeRO Stage 3 عبر 64 كارت A100، ينخفض نصيب كل معالج إلى $17.5\\text{ GB}$، ملائماً سعة الذاكرة تماماً.."
      ],
      "difficulty": "hots"
    }
  ]
};
