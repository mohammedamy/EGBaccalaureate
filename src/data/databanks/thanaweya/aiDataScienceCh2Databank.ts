import type { ChapterDatabank } from '../../../types/curriculum';

export const th_ai_data_science_ch2Databank: ChapterDatabank = {
  "easy": [
    {
      "id": "th_ai_data_science_ch2_easy_1",
      "titleEn": "[EASY] Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions - Review 1",
      "titleAr": "[مستوى أساسي] الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج - سؤال 1",
      "questionEn": "[AI & Data Science Core Concept] Regarding Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions, which of the following statements is theoretically and mathematically sound? (Variant 1)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 1)",
      "optionsEn": [
        "Backpropagation uses the calculus chain rule to propagate error gradients backwards from the output loss layer through hidden layers to update synaptic connection weights.",
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "يستخدم الانتشار الخلفي للأخطاء قاعدة السلسلة الرياضية لنقل تدرجات الخطأ عكسياً من طبقة الخسارة عبر الطبقات الخفية لتحديث أوزان الاتصالات العصبية.",
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "Backpropagation uses the calculus chain rule to propagate error gradients backwards from the output loss layer through hidden layers to update synaptic connection weights.",
      "correctAnswerEn": "Backpropagation uses the calculus chain rule to propagate error gradients backwards from the output loss layer through hidden layers to update synaptic connection weights.",
      "correctAnswerAr": "يستخدم الانتشار الخلفي للأخطاء قاعدة السلسلة الرياضية لنقل تدرجات الخطأ عكسياً من طبقة الخسارة عبر الطبقات الخفية لتحديث أوزان الاتصالات العصبية.",
      "correctIndex": 0,
      "explanationEn": "Correct Theoretical Formulation: Backpropagation uses the calculus chain rule to propagate error gradients backwards from the output loss layer through hidden layers to update synaptic connection weights.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يستخدم الانتشار الخلفي للأخطاء قاعدة السلسلة الرياضية لنقل تدرجات الخطأ عكسياً من طبقة الخسارة عبر الطبقات الخفية لتحديث أوزان الاتصالات العصبية.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Backpropagation uses the calculus chain rule to propagate error gradients backwards from the output loss layer through hidden layers to update synaptic connection weights.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يستخدم الانتشار الخلفي للأخطاء قاعدة السلسلة الرياضية لنقل تدرجات الخطأ عكسياً من طبقة الخسارة عبر الطبقات الخفية لتحديث أوزان الاتصالات العصبية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch2_easy_2",
      "titleEn": "[EASY] Convolutional Layers, Pooling & ResNet Skip Connections - Review 2",
      "titleAr": "[مستوى أساسي] الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet - سؤال 2",
      "questionEn": "[AI & Data Science Core Concept] Regarding Convolutional Layers, Pooling & ResNet Skip Connections, which of the following statements is theoretically and mathematically sound? (Variant 2)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 2)",
      "optionsEn": [
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "A 2D convolutional layer slides spatial filter kernels across input feature maps to capture local spatial hierarchies, translation invariance, and weight sharing.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تنزلق نواة الترشيح في الطبقة الالتفافية ثنائية الأبعاد عبر خريطة الخصائص لالتقاط الأنماط المكانية الموضعية، مع ميزة التشارك في الأوزان ومقاومة الإزاحة.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "A 2D convolutional layer slides spatial filter kernels across input feature maps to capture local spatial hierarchies, translation invariance, and weight sharing.",
      "correctAnswerEn": "A 2D convolutional layer slides spatial filter kernels across input feature maps to capture local spatial hierarchies, translation invariance, and weight sharing.",
      "correctAnswerAr": "تنزلق نواة الترشيح في الطبقة الالتفافية ثنائية الأبعاد عبر خريطة الخصائص لالتقاط الأنماط المكانية الموضعية، مع ميزة التشارك في الأوزان ومقاومة الإزاحة.",
      "correctIndex": 1,
      "explanationEn": "Correct Theoretical Formulation: A 2D convolutional layer slides spatial filter kernels across input feature maps to capture local spatial hierarchies, translation invariance, and weight sharing.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تنزلق نواة الترشيح في الطبقة الالتفافية ثنائية الأبعاد عبر خريطة الخصائص لالتقاط الأنماط المكانية الموضعية، مع ميزة التشارك في الأوزان ومقاومة الإزاحة.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Convolutional Layers, Pooling & ResNet Skip Connections.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: A 2D convolutional layer slides spatial filter kernels across input feature maps to capture local spatial hierarchies, translation invariance, and weight sharing.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تنزلق نواة الترشيح في الطبقة الالتفافية ثنائية الأبعاد عبر خريطة الخصائص لالتقاط الأنماط المكانية الموضعية، مع ميزة التشارك في الأوزان ومقاومة الإزاحة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch2_easy_3",
      "titleEn": "[EASY] Object Detection Pipelines, YOLO Architecture & IoU Metrics - Review 3",
      "titleAr": "[مستوى أساسي] خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU - سؤال 3",
      "questionEn": "[AI & Data Science Core Concept] Regarding Object Detection Pipelines, YOLO Architecture & IoU Metrics, which of the following statements is theoretically and mathematically sound? (Variant 3)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 3)",
      "optionsEn": [
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Object detection models predict both the bounding box spatial coordinates ($x, y, w, h$) and categorical classification probabilities for multiple objects simultaneously within an image.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تتنبأ نماذج كشف الكائنات بكل من الإحداثيات المكانية لصناديق الإحاطة ($x, y, w, h$) واحتماليات الفئات التصنيفية لعدة أجسام في آن واحد داخل الصورة.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "Object detection models predict both the bounding box spatial coordinates ($x, y, w, h$) and categorical classification probabilities for multiple objects simultaneously within an image.",
      "correctAnswerEn": "Object detection models predict both the bounding box spatial coordinates ($x, y, w, h$) and categorical classification probabilities for multiple objects simultaneously within an image.",
      "correctAnswerAr": "تتنبأ نماذج كشف الكائنات بكل من الإحداثيات المكانية لصناديق الإحاطة ($x, y, w, h$) واحتماليات الفئات التصنيفية لعدة أجسام في آن واحد داخل الصورة.",
      "correctIndex": 2,
      "explanationEn": "Correct Theoretical Formulation: Object detection models predict both the bounding box spatial coordinates ($x, y, w, h$) and categorical classification probabilities for multiple objects simultaneously within an image.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تتنبأ نماذج كشف الكائنات بكل من الإحداثيات المكانية لصناديق الإحاطة ($x, y, w, h$) واحتماليات الفئات التصنيفية لعدة أجسام في آن واحد داخل الصورة.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Object Detection Pipelines, YOLO Architecture & IoU Metrics.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Object detection models predict both the bounding box spatial coordinates ($x, y, w, h$) and categorical classification probabilities for multiple objects simultaneously within an image.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تتنبأ نماذج كشف الكائنات بكل من الإحداثيات المكانية لصناديق الإحاطة ($x, y, w, h$) واحتماليات الفئات التصنيفية لعدة أجسام في آن واحد داخل الصورة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch2_easy_4",
      "titleEn": "[EASY] Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions - Review 4",
      "titleAr": "[مستوى أساسي] الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج - سؤال 4",
      "questionEn": "[AI & Data Science Core Concept] Regarding Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions, which of the following statements is theoretically and mathematically sound? (Variant 4)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 4)",
      "optionsEn": [
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "Backpropagation uses the calculus chain rule to propagate error gradients backwards from the output loss layer through hidden layers to update synaptic connection weights."
      ],
      "optionsAr": [
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "يستخدم الانتشار الخلفي للأخطاء قاعدة السلسلة الرياضية لنقل تدرجات الخطأ عكسياً من طبقة الخسارة عبر الطبقات الخفية لتحديث أوزان الاتصالات العصبية."
      ],
      "correctAnswer": "Backpropagation uses the calculus chain rule to propagate error gradients backwards from the output loss layer through hidden layers to update synaptic connection weights.",
      "correctAnswerEn": "Backpropagation uses the calculus chain rule to propagate error gradients backwards from the output loss layer through hidden layers to update synaptic connection weights.",
      "correctAnswerAr": "يستخدم الانتشار الخلفي للأخطاء قاعدة السلسلة الرياضية لنقل تدرجات الخطأ عكسياً من طبقة الخسارة عبر الطبقات الخفية لتحديث أوزان الاتصالات العصبية.",
      "correctIndex": 3,
      "explanationEn": "Correct Theoretical Formulation: Backpropagation uses the calculus chain rule to propagate error gradients backwards from the output loss layer through hidden layers to update synaptic connection weights.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يستخدم الانتشار الخلفي للأخطاء قاعدة السلسلة الرياضية لنقل تدرجات الخطأ عكسياً من طبقة الخسارة عبر الطبقات الخفية لتحديث أوزان الاتصالات العصبية.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Backpropagation uses the calculus chain rule to propagate error gradients backwards from the output loss layer through hidden layers to update synaptic connection weights.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يستخدم الانتشار الخلفي للأخطاء قاعدة السلسلة الرياضية لنقل تدرجات الخطأ عكسياً من طبقة الخسارة عبر الطبقات الخفية لتحديث أوزان الاتصالات العصبية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch2_easy_5",
      "titleEn": "[EASY] Convolutional Layers, Pooling & ResNet Skip Connections - Review 5",
      "titleAr": "[مستوى أساسي] الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet - سؤال 5",
      "questionEn": "[AI & Data Science Core Concept] Regarding Convolutional Layers, Pooling & ResNet Skip Connections, which of the following statements is theoretically and mathematically sound? (Variant 5)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 5)",
      "optionsEn": [
        "A 2D convolutional layer slides spatial filter kernels across input feature maps to capture local spatial hierarchies, translation invariance, and weight sharing.",
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تنزلق نواة الترشيح في الطبقة الالتفافية ثنائية الأبعاد عبر خريطة الخصائص لالتقاط الأنماط المكانية الموضعية، مع ميزة التشارك في الأوزان ومقاومة الإزاحة.",
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "A 2D convolutional layer slides spatial filter kernels across input feature maps to capture local spatial hierarchies, translation invariance, and weight sharing.",
      "correctAnswerEn": "A 2D convolutional layer slides spatial filter kernels across input feature maps to capture local spatial hierarchies, translation invariance, and weight sharing.",
      "correctAnswerAr": "تنزلق نواة الترشيح في الطبقة الالتفافية ثنائية الأبعاد عبر خريطة الخصائص لالتقاط الأنماط المكانية الموضعية، مع ميزة التشارك في الأوزان ومقاومة الإزاحة.",
      "correctIndex": 0,
      "explanationEn": "Correct Theoretical Formulation: A 2D convolutional layer slides spatial filter kernels across input feature maps to capture local spatial hierarchies, translation invariance, and weight sharing.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تنزلق نواة الترشيح في الطبقة الالتفافية ثنائية الأبعاد عبر خريطة الخصائص لالتقاط الأنماط المكانية الموضعية، مع ميزة التشارك في الأوزان ومقاومة الإزاحة.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Convolutional Layers, Pooling & ResNet Skip Connections.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: A 2D convolutional layer slides spatial filter kernels across input feature maps to capture local spatial hierarchies, translation invariance, and weight sharing.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تنزلق نواة الترشيح في الطبقة الالتفافية ثنائية الأبعاد عبر خريطة الخصائص لالتقاط الأنماط المكانية الموضعية، مع ميزة التشارك في الأوزان ومقاومة الإزاحة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch2_easy_6",
      "titleEn": "[EASY] Object Detection Pipelines, YOLO Architecture & IoU Metrics - Review 6",
      "titleAr": "[مستوى أساسي] خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU - سؤال 6",
      "questionEn": "[AI & Data Science Core Concept] Regarding Object Detection Pipelines, YOLO Architecture & IoU Metrics, which of the following statements is theoretically and mathematically sound? (Variant 6)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 6)",
      "optionsEn": [
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Object detection models predict both the bounding box spatial coordinates ($x, y, w, h$) and categorical classification probabilities for multiple objects simultaneously within an image.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "تتنبأ نماذج كشف الكائنات بكل من الإحداثيات المكانية لصناديق الإحاطة ($x, y, w, h$) واحتماليات الفئات التصنيفية لعدة أجسام في آن واحد داخل الصورة.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "Object detection models predict both the bounding box spatial coordinates ($x, y, w, h$) and categorical classification probabilities for multiple objects simultaneously within an image.",
      "correctAnswerEn": "Object detection models predict both the bounding box spatial coordinates ($x, y, w, h$) and categorical classification probabilities for multiple objects simultaneously within an image.",
      "correctAnswerAr": "تتنبأ نماذج كشف الكائنات بكل من الإحداثيات المكانية لصناديق الإحاطة ($x, y, w, h$) واحتماليات الفئات التصنيفية لعدة أجسام في آن واحد داخل الصورة.",
      "correctIndex": 1,
      "explanationEn": "Correct Theoretical Formulation: Object detection models predict both the bounding box spatial coordinates ($x, y, w, h$) and categorical classification probabilities for multiple objects simultaneously within an image.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تتنبأ نماذج كشف الكائنات بكل من الإحداثيات المكانية لصناديق الإحاطة ($x, y, w, h$) واحتماليات الفئات التصنيفية لعدة أجسام في آن واحد داخل الصورة.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Object Detection Pipelines, YOLO Architecture & IoU Metrics.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Object detection models predict both the bounding box spatial coordinates ($x, y, w, h$) and categorical classification probabilities for multiple objects simultaneously within an image.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تتنبأ نماذج كشف الكائنات بكل من الإحداثيات المكانية لصناديق الإحاطة ($x, y, w, h$) واحتماليات الفئات التصنيفية لعدة أجسام في آن واحد داخل الصورة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch2_easy_7",
      "titleEn": "[EASY] Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions - Review 7",
      "titleAr": "[مستوى أساسي] الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج - سؤال 7",
      "questionEn": "[AI & Data Science Core Concept] Regarding Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions, which of the following statements is theoretically and mathematically sound? (Variant 7)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 7)",
      "optionsEn": [
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Backpropagation uses the calculus chain rule to propagate error gradients backwards from the output loss layer through hidden layers to update synaptic connection weights.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "يستخدم الانتشار الخلفي للأخطاء قاعدة السلسلة الرياضية لنقل تدرجات الخطأ عكسياً من طبقة الخسارة عبر الطبقات الخفية لتحديث أوزان الاتصالات العصبية.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "Backpropagation uses the calculus chain rule to propagate error gradients backwards from the output loss layer through hidden layers to update synaptic connection weights.",
      "correctAnswerEn": "Backpropagation uses the calculus chain rule to propagate error gradients backwards from the output loss layer through hidden layers to update synaptic connection weights.",
      "correctAnswerAr": "يستخدم الانتشار الخلفي للأخطاء قاعدة السلسلة الرياضية لنقل تدرجات الخطأ عكسياً من طبقة الخسارة عبر الطبقات الخفية لتحديث أوزان الاتصالات العصبية.",
      "correctIndex": 2,
      "explanationEn": "Correct Theoretical Formulation: Backpropagation uses the calculus chain rule to propagate error gradients backwards from the output loss layer through hidden layers to update synaptic connection weights.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يستخدم الانتشار الخلفي للأخطاء قاعدة السلسلة الرياضية لنقل تدرجات الخطأ عكسياً من طبقة الخسارة عبر الطبقات الخفية لتحديث أوزان الاتصالات العصبية.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Backpropagation uses the calculus chain rule to propagate error gradients backwards from the output loss layer through hidden layers to update synaptic connection weights.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يستخدم الانتشار الخلفي للأخطاء قاعدة السلسلة الرياضية لنقل تدرجات الخطأ عكسياً من طبقة الخسارة عبر الطبقات الخفية لتحديث أوزان الاتصالات العصبية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch2_easy_8",
      "titleEn": "[EASY] Convolutional Layers, Pooling & ResNet Skip Connections - Review 8",
      "titleAr": "[مستوى أساسي] الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet - سؤال 8",
      "questionEn": "[AI & Data Science Core Concept] Regarding Convolutional Layers, Pooling & ResNet Skip Connections, which of the following statements is theoretically and mathematically sound? (Variant 8)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 8)",
      "optionsEn": [
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "A 2D convolutional layer slides spatial filter kernels across input feature maps to capture local spatial hierarchies, translation invariance, and weight sharing."
      ],
      "optionsAr": [
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "تنزلق نواة الترشيح في الطبقة الالتفافية ثنائية الأبعاد عبر خريطة الخصائص لالتقاط الأنماط المكانية الموضعية، مع ميزة التشارك في الأوزان ومقاومة الإزاحة."
      ],
      "correctAnswer": "A 2D convolutional layer slides spatial filter kernels across input feature maps to capture local spatial hierarchies, translation invariance, and weight sharing.",
      "correctAnswerEn": "A 2D convolutional layer slides spatial filter kernels across input feature maps to capture local spatial hierarchies, translation invariance, and weight sharing.",
      "correctAnswerAr": "تنزلق نواة الترشيح في الطبقة الالتفافية ثنائية الأبعاد عبر خريطة الخصائص لالتقاط الأنماط المكانية الموضعية، مع ميزة التشارك في الأوزان ومقاومة الإزاحة.",
      "correctIndex": 3,
      "explanationEn": "Correct Theoretical Formulation: A 2D convolutional layer slides spatial filter kernels across input feature maps to capture local spatial hierarchies, translation invariance, and weight sharing.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تنزلق نواة الترشيح في الطبقة الالتفافية ثنائية الأبعاد عبر خريطة الخصائص لالتقاط الأنماط المكانية الموضعية، مع ميزة التشارك في الأوزان ومقاومة الإزاحة.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Convolutional Layers, Pooling & ResNet Skip Connections.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: A 2D convolutional layer slides spatial filter kernels across input feature maps to capture local spatial hierarchies, translation invariance, and weight sharing.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تنزلق نواة الترشيح في الطبقة الالتفافية ثنائية الأبعاد عبر خريطة الخصائص لالتقاط الأنماط المكانية الموضعية، مع ميزة التشارك في الأوزان ومقاومة الإزاحة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch2_easy_9",
      "titleEn": "[EASY] Object Detection Pipelines, YOLO Architecture & IoU Metrics - Review 9",
      "titleAr": "[مستوى أساسي] خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU - سؤال 9",
      "questionEn": "[AI & Data Science Core Concept] Regarding Object Detection Pipelines, YOLO Architecture & IoU Metrics, which of the following statements is theoretically and mathematically sound? (Variant 9)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 9)",
      "optionsEn": [
        "Object detection models predict both the bounding box spatial coordinates ($x, y, w, h$) and categorical classification probabilities for multiple objects simultaneously within an image.",
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "تتنبأ نماذج كشف الكائنات بكل من الإحداثيات المكانية لصناديق الإحاطة ($x, y, w, h$) واحتماليات الفئات التصنيفية لعدة أجسام في آن واحد داخل الصورة.",
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "Object detection models predict both the bounding box spatial coordinates ($x, y, w, h$) and categorical classification probabilities for multiple objects simultaneously within an image.",
      "correctAnswerEn": "Object detection models predict both the bounding box spatial coordinates ($x, y, w, h$) and categorical classification probabilities for multiple objects simultaneously within an image.",
      "correctAnswerAr": "تتنبأ نماذج كشف الكائنات بكل من الإحداثيات المكانية لصناديق الإحاطة ($x, y, w, h$) واحتماليات الفئات التصنيفية لعدة أجسام في آن واحد داخل الصورة.",
      "correctIndex": 0,
      "explanationEn": "Correct Theoretical Formulation: Object detection models predict both the bounding box spatial coordinates ($x, y, w, h$) and categorical classification probabilities for multiple objects simultaneously within an image.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تتنبأ نماذج كشف الكائنات بكل من الإحداثيات المكانية لصناديق الإحاطة ($x, y, w, h$) واحتماليات الفئات التصنيفية لعدة أجسام في آن واحد داخل الصورة.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Object Detection Pipelines, YOLO Architecture & IoU Metrics.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Object detection models predict both the bounding box spatial coordinates ($x, y, w, h$) and categorical classification probabilities for multiple objects simultaneously within an image.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تتنبأ نماذج كشف الكائنات بكل من الإحداثيات المكانية لصناديق الإحاطة ($x, y, w, h$) واحتماليات الفئات التصنيفية لعدة أجسام في آن واحد داخل الصورة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch2_easy_10",
      "titleEn": "[EASY] Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions - Review 10",
      "titleAr": "[مستوى أساسي] الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج - سؤال 10",
      "questionEn": "[AI & Data Science Core Concept] Regarding Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions, which of the following statements is theoretically and mathematically sound? (Variant 10)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 10)",
      "optionsEn": [
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "Backpropagation uses the calculus chain rule to propagate error gradients backwards from the output loss layer through hidden layers to update synaptic connection weights.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "يستخدم الانتشار الخلفي للأخطاء قاعدة السلسلة الرياضية لنقل تدرجات الخطأ عكسياً من طبقة الخسارة عبر الطبقات الخفية لتحديث أوزان الاتصالات العصبية.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "Backpropagation uses the calculus chain rule to propagate error gradients backwards from the output loss layer through hidden layers to update synaptic connection weights.",
      "correctAnswerEn": "Backpropagation uses the calculus chain rule to propagate error gradients backwards from the output loss layer through hidden layers to update synaptic connection weights.",
      "correctAnswerAr": "يستخدم الانتشار الخلفي للأخطاء قاعدة السلسلة الرياضية لنقل تدرجات الخطأ عكسياً من طبقة الخسارة عبر الطبقات الخفية لتحديث أوزان الاتصالات العصبية.",
      "correctIndex": 1,
      "explanationEn": "Correct Theoretical Formulation: Backpropagation uses the calculus chain rule to propagate error gradients backwards from the output loss layer through hidden layers to update synaptic connection weights.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يستخدم الانتشار الخلفي للأخطاء قاعدة السلسلة الرياضية لنقل تدرجات الخطأ عكسياً من طبقة الخسارة عبر الطبقات الخفية لتحديث أوزان الاتصالات العصبية.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Backpropagation uses the calculus chain rule to propagate error gradients backwards from the output loss layer through hidden layers to update synaptic connection weights.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يستخدم الانتشار الخلفي للأخطاء قاعدة السلسلة الرياضية لنقل تدرجات الخطأ عكسياً من طبقة الخسارة عبر الطبقات الخفية لتحديث أوزان الاتصالات العصبية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch2_easy_11",
      "titleEn": "[EASY] Convolutional Layers, Pooling & ResNet Skip Connections - Review 11",
      "titleAr": "[مستوى أساسي] الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet - سؤال 11",
      "questionEn": "[AI & Data Science Core Concept] Regarding Convolutional Layers, Pooling & ResNet Skip Connections, which of the following statements is theoretically and mathematically sound? (Variant 11)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 11)",
      "optionsEn": [
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "A 2D convolutional layer slides spatial filter kernels across input feature maps to capture local spatial hierarchies, translation invariance, and weight sharing.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "تنزلق نواة الترشيح في الطبقة الالتفافية ثنائية الأبعاد عبر خريطة الخصائص لالتقاط الأنماط المكانية الموضعية، مع ميزة التشارك في الأوزان ومقاومة الإزاحة.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "A 2D convolutional layer slides spatial filter kernels across input feature maps to capture local spatial hierarchies, translation invariance, and weight sharing.",
      "correctAnswerEn": "A 2D convolutional layer slides spatial filter kernels across input feature maps to capture local spatial hierarchies, translation invariance, and weight sharing.",
      "correctAnswerAr": "تنزلق نواة الترشيح في الطبقة الالتفافية ثنائية الأبعاد عبر خريطة الخصائص لالتقاط الأنماط المكانية الموضعية، مع ميزة التشارك في الأوزان ومقاومة الإزاحة.",
      "correctIndex": 2,
      "explanationEn": "Correct Theoretical Formulation: A 2D convolutional layer slides spatial filter kernels across input feature maps to capture local spatial hierarchies, translation invariance, and weight sharing.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تنزلق نواة الترشيح في الطبقة الالتفافية ثنائية الأبعاد عبر خريطة الخصائص لالتقاط الأنماط المكانية الموضعية، مع ميزة التشارك في الأوزان ومقاومة الإزاحة.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Convolutional Layers, Pooling & ResNet Skip Connections.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: A 2D convolutional layer slides spatial filter kernels across input feature maps to capture local spatial hierarchies, translation invariance, and weight sharing.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تنزلق نواة الترشيح في الطبقة الالتفافية ثنائية الأبعاد عبر خريطة الخصائص لالتقاط الأنماط المكانية الموضعية، مع ميزة التشارك في الأوزان ومقاومة الإزاحة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch2_easy_12",
      "titleEn": "[EASY] Object Detection Pipelines, YOLO Architecture & IoU Metrics - Review 12",
      "titleAr": "[مستوى أساسي] خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU - سؤال 12",
      "questionEn": "[AI & Data Science Core Concept] Regarding Object Detection Pipelines, YOLO Architecture & IoU Metrics, which of the following statements is theoretically and mathematically sound? (Variant 12)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 12)",
      "optionsEn": [
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "Object detection models predict both the bounding box spatial coordinates ($x, y, w, h$) and categorical classification probabilities for multiple objects simultaneously within an image."
      ],
      "optionsAr": [
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "تتنبأ نماذج كشف الكائنات بكل من الإحداثيات المكانية لصناديق الإحاطة ($x, y, w, h$) واحتماليات الفئات التصنيفية لعدة أجسام في آن واحد داخل الصورة."
      ],
      "correctAnswer": "Object detection models predict both the bounding box spatial coordinates ($x, y, w, h$) and categorical classification probabilities for multiple objects simultaneously within an image.",
      "correctAnswerEn": "Object detection models predict both the bounding box spatial coordinates ($x, y, w, h$) and categorical classification probabilities for multiple objects simultaneously within an image.",
      "correctAnswerAr": "تتنبأ نماذج كشف الكائنات بكل من الإحداثيات المكانية لصناديق الإحاطة ($x, y, w, h$) واحتماليات الفئات التصنيفية لعدة أجسام في آن واحد داخل الصورة.",
      "correctIndex": 3,
      "explanationEn": "Correct Theoretical Formulation: Object detection models predict both the bounding box spatial coordinates ($x, y, w, h$) and categorical classification probabilities for multiple objects simultaneously within an image.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تتنبأ نماذج كشف الكائنات بكل من الإحداثيات المكانية لصناديق الإحاطة ($x, y, w, h$) واحتماليات الفئات التصنيفية لعدة أجسام في آن واحد داخل الصورة.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Object Detection Pipelines, YOLO Architecture & IoU Metrics.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Object detection models predict both the bounding box spatial coordinates ($x, y, w, h$) and categorical classification probabilities for multiple objects simultaneously within an image.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تتنبأ نماذج كشف الكائنات بكل من الإحداثيات المكانية لصناديق الإحاطة ($x, y, w, h$) واحتماليات الفئات التصنيفية لعدة أجسام في آن واحد داخل الصورة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch2_easy_13",
      "titleEn": "[EASY] Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions - Review 13",
      "titleAr": "[مستوى أساسي] الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج - سؤال 13",
      "questionEn": "[AI & Data Science Core Concept] Regarding Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions, which of the following statements is theoretically and mathematically sound? (Variant 13)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 13)",
      "optionsEn": [
        "Backpropagation uses the calculus chain rule to propagate error gradients backwards from the output loss layer through hidden layers to update synaptic connection weights.",
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "يستخدم الانتشار الخلفي للأخطاء قاعدة السلسلة الرياضية لنقل تدرجات الخطأ عكسياً من طبقة الخسارة عبر الطبقات الخفية لتحديث أوزان الاتصالات العصبية.",
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "Backpropagation uses the calculus chain rule to propagate error gradients backwards from the output loss layer through hidden layers to update synaptic connection weights.",
      "correctAnswerEn": "Backpropagation uses the calculus chain rule to propagate error gradients backwards from the output loss layer through hidden layers to update synaptic connection weights.",
      "correctAnswerAr": "يستخدم الانتشار الخلفي للأخطاء قاعدة السلسلة الرياضية لنقل تدرجات الخطأ عكسياً من طبقة الخسارة عبر الطبقات الخفية لتحديث أوزان الاتصالات العصبية.",
      "correctIndex": 0,
      "explanationEn": "Correct Theoretical Formulation: Backpropagation uses the calculus chain rule to propagate error gradients backwards from the output loss layer through hidden layers to update synaptic connection weights.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يستخدم الانتشار الخلفي للأخطاء قاعدة السلسلة الرياضية لنقل تدرجات الخطأ عكسياً من طبقة الخسارة عبر الطبقات الخفية لتحديث أوزان الاتصالات العصبية.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Backpropagation uses the calculus chain rule to propagate error gradients backwards from the output loss layer through hidden layers to update synaptic connection weights.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يستخدم الانتشار الخلفي للأخطاء قاعدة السلسلة الرياضية لنقل تدرجات الخطأ عكسياً من طبقة الخسارة عبر الطبقات الخفية لتحديث أوزان الاتصالات العصبية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch2_easy_14",
      "titleEn": "[EASY] Convolutional Layers, Pooling & ResNet Skip Connections - Review 14",
      "titleAr": "[مستوى أساسي] الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet - سؤال 14",
      "questionEn": "[AI & Data Science Core Concept] Regarding Convolutional Layers, Pooling & ResNet Skip Connections, which of the following statements is theoretically and mathematically sound? (Variant 14)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 14)",
      "optionsEn": [
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "A 2D convolutional layer slides spatial filter kernels across input feature maps to capture local spatial hierarchies, translation invariance, and weight sharing.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "تنزلق نواة الترشيح في الطبقة الالتفافية ثنائية الأبعاد عبر خريطة الخصائص لالتقاط الأنماط المكانية الموضعية، مع ميزة التشارك في الأوزان ومقاومة الإزاحة.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "A 2D convolutional layer slides spatial filter kernels across input feature maps to capture local spatial hierarchies, translation invariance, and weight sharing.",
      "correctAnswerEn": "A 2D convolutional layer slides spatial filter kernels across input feature maps to capture local spatial hierarchies, translation invariance, and weight sharing.",
      "correctAnswerAr": "تنزلق نواة الترشيح في الطبقة الالتفافية ثنائية الأبعاد عبر خريطة الخصائص لالتقاط الأنماط المكانية الموضعية، مع ميزة التشارك في الأوزان ومقاومة الإزاحة.",
      "correctIndex": 1,
      "explanationEn": "Correct Theoretical Formulation: A 2D convolutional layer slides spatial filter kernels across input feature maps to capture local spatial hierarchies, translation invariance, and weight sharing.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تنزلق نواة الترشيح في الطبقة الالتفافية ثنائية الأبعاد عبر خريطة الخصائص لالتقاط الأنماط المكانية الموضعية، مع ميزة التشارك في الأوزان ومقاومة الإزاحة.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Convolutional Layers, Pooling & ResNet Skip Connections.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: A 2D convolutional layer slides spatial filter kernels across input feature maps to capture local spatial hierarchies, translation invariance, and weight sharing.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تنزلق نواة الترشيح في الطبقة الالتفافية ثنائية الأبعاد عبر خريطة الخصائص لالتقاط الأنماط المكانية الموضعية، مع ميزة التشارك في الأوزان ومقاومة الإزاحة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch2_easy_15",
      "titleEn": "[EASY] Object Detection Pipelines, YOLO Architecture & IoU Metrics - Review 15",
      "titleAr": "[مستوى أساسي] خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU - سؤال 15",
      "questionEn": "[AI & Data Science Core Concept] Regarding Object Detection Pipelines, YOLO Architecture & IoU Metrics, which of the following statements is theoretically and mathematically sound? (Variant 15)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 15)",
      "optionsEn": [
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Object detection models predict both the bounding box spatial coordinates ($x, y, w, h$) and categorical classification probabilities for multiple objects simultaneously within an image.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تتنبأ نماذج كشف الكائنات بكل من الإحداثيات المكانية لصناديق الإحاطة ($x, y, w, h$) واحتماليات الفئات التصنيفية لعدة أجسام في آن واحد داخل الصورة.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "Object detection models predict both the bounding box spatial coordinates ($x, y, w, h$) and categorical classification probabilities for multiple objects simultaneously within an image.",
      "correctAnswerEn": "Object detection models predict both the bounding box spatial coordinates ($x, y, w, h$) and categorical classification probabilities for multiple objects simultaneously within an image.",
      "correctAnswerAr": "تتنبأ نماذج كشف الكائنات بكل من الإحداثيات المكانية لصناديق الإحاطة ($x, y, w, h$) واحتماليات الفئات التصنيفية لعدة أجسام في آن واحد داخل الصورة.",
      "correctIndex": 2,
      "explanationEn": "Correct Theoretical Formulation: Object detection models predict both the bounding box spatial coordinates ($x, y, w, h$) and categorical classification probabilities for multiple objects simultaneously within an image.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تتنبأ نماذج كشف الكائنات بكل من الإحداثيات المكانية لصناديق الإحاطة ($x, y, w, h$) واحتماليات الفئات التصنيفية لعدة أجسام في آن واحد داخل الصورة.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Object Detection Pipelines, YOLO Architecture & IoU Metrics.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Object detection models predict both the bounding box spatial coordinates ($x, y, w, h$) and categorical classification probabilities for multiple objects simultaneously within an image.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تتنبأ نماذج كشف الكائنات بكل من الإحداثيات المكانية لصناديق الإحاطة ($x, y, w, h$) واحتماليات الفئات التصنيفية لعدة أجسام في آن واحد داخل الصورة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch2_easy_16",
      "titleEn": "[EASY] Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions - Review 16",
      "titleAr": "[مستوى أساسي] الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج - سؤال 16",
      "questionEn": "[AI & Data Science Core Concept] Regarding Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions, which of the following statements is theoretically and mathematically sound? (Variant 16)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 16)",
      "optionsEn": [
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "Backpropagation uses the calculus chain rule to propagate error gradients backwards from the output loss layer through hidden layers to update synaptic connection weights."
      ],
      "optionsAr": [
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "يستخدم الانتشار الخلفي للأخطاء قاعدة السلسلة الرياضية لنقل تدرجات الخطأ عكسياً من طبقة الخسارة عبر الطبقات الخفية لتحديث أوزان الاتصالات العصبية."
      ],
      "correctAnswer": "Backpropagation uses the calculus chain rule to propagate error gradients backwards from the output loss layer through hidden layers to update synaptic connection weights.",
      "correctAnswerEn": "Backpropagation uses the calculus chain rule to propagate error gradients backwards from the output loss layer through hidden layers to update synaptic connection weights.",
      "correctAnswerAr": "يستخدم الانتشار الخلفي للأخطاء قاعدة السلسلة الرياضية لنقل تدرجات الخطأ عكسياً من طبقة الخسارة عبر الطبقات الخفية لتحديث أوزان الاتصالات العصبية.",
      "correctIndex": 3,
      "explanationEn": "Correct Theoretical Formulation: Backpropagation uses the calculus chain rule to propagate error gradients backwards from the output loss layer through hidden layers to update synaptic connection weights.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يستخدم الانتشار الخلفي للأخطاء قاعدة السلسلة الرياضية لنقل تدرجات الخطأ عكسياً من طبقة الخسارة عبر الطبقات الخفية لتحديث أوزان الاتصالات العصبية.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Backpropagation uses the calculus chain rule to propagate error gradients backwards from the output loss layer through hidden layers to update synaptic connection weights.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يستخدم الانتشار الخلفي للأخطاء قاعدة السلسلة الرياضية لنقل تدرجات الخطأ عكسياً من طبقة الخسارة عبر الطبقات الخفية لتحديث أوزان الاتصالات العصبية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch2_easy_17",
      "titleEn": "[EASY] Convolutional Layers, Pooling & ResNet Skip Connections - Review 17",
      "titleAr": "[مستوى أساسي] الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet - سؤال 17",
      "questionEn": "[AI & Data Science Core Concept] Regarding Convolutional Layers, Pooling & ResNet Skip Connections, which of the following statements is theoretically and mathematically sound? (Variant 17)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 17)",
      "optionsEn": [
        "A 2D convolutional layer slides spatial filter kernels across input feature maps to capture local spatial hierarchies, translation invariance, and weight sharing.",
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "تنزلق نواة الترشيح في الطبقة الالتفافية ثنائية الأبعاد عبر خريطة الخصائص لالتقاط الأنماط المكانية الموضعية، مع ميزة التشارك في الأوزان ومقاومة الإزاحة.",
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "A 2D convolutional layer slides spatial filter kernels across input feature maps to capture local spatial hierarchies, translation invariance, and weight sharing.",
      "correctAnswerEn": "A 2D convolutional layer slides spatial filter kernels across input feature maps to capture local spatial hierarchies, translation invariance, and weight sharing.",
      "correctAnswerAr": "تنزلق نواة الترشيح في الطبقة الالتفافية ثنائية الأبعاد عبر خريطة الخصائص لالتقاط الأنماط المكانية الموضعية، مع ميزة التشارك في الأوزان ومقاومة الإزاحة.",
      "correctIndex": 0,
      "explanationEn": "Correct Theoretical Formulation: A 2D convolutional layer slides spatial filter kernels across input feature maps to capture local spatial hierarchies, translation invariance, and weight sharing.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تنزلق نواة الترشيح في الطبقة الالتفافية ثنائية الأبعاد عبر خريطة الخصائص لالتقاط الأنماط المكانية الموضعية، مع ميزة التشارك في الأوزان ومقاومة الإزاحة.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Convolutional Layers, Pooling & ResNet Skip Connections.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: A 2D convolutional layer slides spatial filter kernels across input feature maps to capture local spatial hierarchies, translation invariance, and weight sharing.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تنزلق نواة الترشيح في الطبقة الالتفافية ثنائية الأبعاد عبر خريطة الخصائص لالتقاط الأنماط المكانية الموضعية، مع ميزة التشارك في الأوزان ومقاومة الإزاحة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch2_easy_18",
      "titleEn": "[EASY] Object Detection Pipelines, YOLO Architecture & IoU Metrics - Review 18",
      "titleAr": "[مستوى أساسي] خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU - سؤال 18",
      "questionEn": "[AI & Data Science Core Concept] Regarding Object Detection Pipelines, YOLO Architecture & IoU Metrics, which of the following statements is theoretically and mathematically sound? (Variant 18)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 18)",
      "optionsEn": [
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "Object detection models predict both the bounding box spatial coordinates ($x, y, w, h$) and categorical classification probabilities for multiple objects simultaneously within an image.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تتنبأ نماذج كشف الكائنات بكل من الإحداثيات المكانية لصناديق الإحاطة ($x, y, w, h$) واحتماليات الفئات التصنيفية لعدة أجسام في آن واحد داخل الصورة.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "Object detection models predict both the bounding box spatial coordinates ($x, y, w, h$) and categorical classification probabilities for multiple objects simultaneously within an image.",
      "correctAnswerEn": "Object detection models predict both the bounding box spatial coordinates ($x, y, w, h$) and categorical classification probabilities for multiple objects simultaneously within an image.",
      "correctAnswerAr": "تتنبأ نماذج كشف الكائنات بكل من الإحداثيات المكانية لصناديق الإحاطة ($x, y, w, h$) واحتماليات الفئات التصنيفية لعدة أجسام في آن واحد داخل الصورة.",
      "correctIndex": 1,
      "explanationEn": "Correct Theoretical Formulation: Object detection models predict both the bounding box spatial coordinates ($x, y, w, h$) and categorical classification probabilities for multiple objects simultaneously within an image.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تتنبأ نماذج كشف الكائنات بكل من الإحداثيات المكانية لصناديق الإحاطة ($x, y, w, h$) واحتماليات الفئات التصنيفية لعدة أجسام في آن واحد داخل الصورة.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Object Detection Pipelines, YOLO Architecture & IoU Metrics.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Object detection models predict both the bounding box spatial coordinates ($x, y, w, h$) and categorical classification probabilities for multiple objects simultaneously within an image.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تتنبأ نماذج كشف الكائنات بكل من الإحداثيات المكانية لصناديق الإحاطة ($x, y, w, h$) واحتماليات الفئات التصنيفية لعدة أجسام في آن واحد داخل الصورة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch2_easy_19",
      "titleEn": "[EASY] Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions - Review 19",
      "titleAr": "[مستوى أساسي] الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج - سؤال 19",
      "questionEn": "[AI & Data Science Core Concept] Regarding Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions, which of the following statements is theoretically and mathematically sound? (Variant 19)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 19)",
      "optionsEn": [
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "Backpropagation uses the calculus chain rule to propagate error gradients backwards from the output loss layer through hidden layers to update synaptic connection weights.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "يستخدم الانتشار الخلفي للأخطاء قاعدة السلسلة الرياضية لنقل تدرجات الخطأ عكسياً من طبقة الخسارة عبر الطبقات الخفية لتحديث أوزان الاتصالات العصبية.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "Backpropagation uses the calculus chain rule to propagate error gradients backwards from the output loss layer through hidden layers to update synaptic connection weights.",
      "correctAnswerEn": "Backpropagation uses the calculus chain rule to propagate error gradients backwards from the output loss layer through hidden layers to update synaptic connection weights.",
      "correctAnswerAr": "يستخدم الانتشار الخلفي للأخطاء قاعدة السلسلة الرياضية لنقل تدرجات الخطأ عكسياً من طبقة الخسارة عبر الطبقات الخفية لتحديث أوزان الاتصالات العصبية.",
      "correctIndex": 2,
      "explanationEn": "Correct Theoretical Formulation: Backpropagation uses the calculus chain rule to propagate error gradients backwards from the output loss layer through hidden layers to update synaptic connection weights.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يستخدم الانتشار الخلفي للأخطاء قاعدة السلسلة الرياضية لنقل تدرجات الخطأ عكسياً من طبقة الخسارة عبر الطبقات الخفية لتحديث أوزان الاتصالات العصبية.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Backpropagation uses the calculus chain rule to propagate error gradients backwards from the output loss layer through hidden layers to update synaptic connection weights.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يستخدم الانتشار الخلفي للأخطاء قاعدة السلسلة الرياضية لنقل تدرجات الخطأ عكسياً من طبقة الخسارة عبر الطبقات الخفية لتحديث أوزان الاتصالات العصبية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch2_easy_20",
      "titleEn": "[EASY] Convolutional Layers, Pooling & ResNet Skip Connections - Review 20",
      "titleAr": "[مستوى أساسي] الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet - سؤال 20",
      "questionEn": "[AI & Data Science Core Concept] Regarding Convolutional Layers, Pooling & ResNet Skip Connections, which of the following statements is theoretically and mathematically sound? (Variant 20)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 20)",
      "optionsEn": [
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "A 2D convolutional layer slides spatial filter kernels across input feature maps to capture local spatial hierarchies, translation invariance, and weight sharing."
      ],
      "optionsAr": [
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "تنزلق نواة الترشيح في الطبقة الالتفافية ثنائية الأبعاد عبر خريطة الخصائص لالتقاط الأنماط المكانية الموضعية، مع ميزة التشارك في الأوزان ومقاومة الإزاحة."
      ],
      "correctAnswer": "A 2D convolutional layer slides spatial filter kernels across input feature maps to capture local spatial hierarchies, translation invariance, and weight sharing.",
      "correctAnswerEn": "A 2D convolutional layer slides spatial filter kernels across input feature maps to capture local spatial hierarchies, translation invariance, and weight sharing.",
      "correctAnswerAr": "تنزلق نواة الترشيح في الطبقة الالتفافية ثنائية الأبعاد عبر خريطة الخصائص لالتقاط الأنماط المكانية الموضعية، مع ميزة التشارك في الأوزان ومقاومة الإزاحة.",
      "correctIndex": 3,
      "explanationEn": "Correct Theoretical Formulation: A 2D convolutional layer slides spatial filter kernels across input feature maps to capture local spatial hierarchies, translation invariance, and weight sharing.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تنزلق نواة الترشيح في الطبقة الالتفافية ثنائية الأبعاد عبر خريطة الخصائص لالتقاط الأنماط المكانية الموضعية، مع ميزة التشارك في الأوزان ومقاومة الإزاحة.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Convolutional Layers, Pooling & ResNet Skip Connections.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: A 2D convolutional layer slides spatial filter kernels across input feature maps to capture local spatial hierarchies, translation invariance, and weight sharing.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تنزلق نواة الترشيح في الطبقة الالتفافية ثنائية الأبعاد عبر خريطة الخصائص لالتقاط الأنماط المكانية الموضعية، مع ميزة التشارك في الأوزان ومقاومة الإزاحة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch2_easy_21",
      "titleEn": "[EASY] Object Detection Pipelines, YOLO Architecture & IoU Metrics - Review 21",
      "titleAr": "[مستوى أساسي] خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU - سؤال 21",
      "questionEn": "[AI & Data Science Core Concept] Regarding Object Detection Pipelines, YOLO Architecture & IoU Metrics, which of the following statements is theoretically and mathematically sound? (Variant 21)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 21)",
      "optionsEn": [
        "Object detection models predict both the bounding box spatial coordinates ($x, y, w, h$) and categorical classification probabilities for multiple objects simultaneously within an image.",
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "تتنبأ نماذج كشف الكائنات بكل من الإحداثيات المكانية لصناديق الإحاطة ($x, y, w, h$) واحتماليات الفئات التصنيفية لعدة أجسام في آن واحد داخل الصورة.",
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "Object detection models predict both the bounding box spatial coordinates ($x, y, w, h$) and categorical classification probabilities for multiple objects simultaneously within an image.",
      "correctAnswerEn": "Object detection models predict both the bounding box spatial coordinates ($x, y, w, h$) and categorical classification probabilities for multiple objects simultaneously within an image.",
      "correctAnswerAr": "تتنبأ نماذج كشف الكائنات بكل من الإحداثيات المكانية لصناديق الإحاطة ($x, y, w, h$) واحتماليات الفئات التصنيفية لعدة أجسام في آن واحد داخل الصورة.",
      "correctIndex": 0,
      "explanationEn": "Correct Theoretical Formulation: Object detection models predict both the bounding box spatial coordinates ($x, y, w, h$) and categorical classification probabilities for multiple objects simultaneously within an image.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تتنبأ نماذج كشف الكائنات بكل من الإحداثيات المكانية لصناديق الإحاطة ($x, y, w, h$) واحتماليات الفئات التصنيفية لعدة أجسام في آن واحد داخل الصورة.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Object Detection Pipelines, YOLO Architecture & IoU Metrics.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Object detection models predict both the bounding box spatial coordinates ($x, y, w, h$) and categorical classification probabilities for multiple objects simultaneously within an image.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تتنبأ نماذج كشف الكائنات بكل من الإحداثيات المكانية لصناديق الإحاطة ($x, y, w, h$) واحتماليات الفئات التصنيفية لعدة أجسام في آن واحد داخل الصورة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch2_easy_22",
      "titleEn": "[EASY] Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions - Review 22",
      "titleAr": "[مستوى أساسي] الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج - سؤال 22",
      "questionEn": "[AI & Data Science Core Concept] Regarding Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions, which of the following statements is theoretically and mathematically sound? (Variant 22)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 22)",
      "optionsEn": [
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "Backpropagation uses the calculus chain rule to propagate error gradients backwards from the output loss layer through hidden layers to update synaptic connection weights.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "يستخدم الانتشار الخلفي للأخطاء قاعدة السلسلة الرياضية لنقل تدرجات الخطأ عكسياً من طبقة الخسارة عبر الطبقات الخفية لتحديث أوزان الاتصالات العصبية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "Backpropagation uses the calculus chain rule to propagate error gradients backwards from the output loss layer through hidden layers to update synaptic connection weights.",
      "correctAnswerEn": "Backpropagation uses the calculus chain rule to propagate error gradients backwards from the output loss layer through hidden layers to update synaptic connection weights.",
      "correctAnswerAr": "يستخدم الانتشار الخلفي للأخطاء قاعدة السلسلة الرياضية لنقل تدرجات الخطأ عكسياً من طبقة الخسارة عبر الطبقات الخفية لتحديث أوزان الاتصالات العصبية.",
      "correctIndex": 1,
      "explanationEn": "Correct Theoretical Formulation: Backpropagation uses the calculus chain rule to propagate error gradients backwards from the output loss layer through hidden layers to update synaptic connection weights.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يستخدم الانتشار الخلفي للأخطاء قاعدة السلسلة الرياضية لنقل تدرجات الخطأ عكسياً من طبقة الخسارة عبر الطبقات الخفية لتحديث أوزان الاتصالات العصبية.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Backpropagation uses the calculus chain rule to propagate error gradients backwards from the output loss layer through hidden layers to update synaptic connection weights.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يستخدم الانتشار الخلفي للأخطاء قاعدة السلسلة الرياضية لنقل تدرجات الخطأ عكسياً من طبقة الخسارة عبر الطبقات الخفية لتحديث أوزان الاتصالات العصبية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch2_easy_23",
      "titleEn": "[EASY] Convolutional Layers, Pooling & ResNet Skip Connections - Review 23",
      "titleAr": "[مستوى أساسي] الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet - سؤال 23",
      "questionEn": "[AI & Data Science Core Concept] Regarding Convolutional Layers, Pooling & ResNet Skip Connections, which of the following statements is theoretically and mathematically sound? (Variant 23)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 23)",
      "optionsEn": [
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "A 2D convolutional layer slides spatial filter kernels across input feature maps to capture local spatial hierarchies, translation invariance, and weight sharing.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تنزلق نواة الترشيح في الطبقة الالتفافية ثنائية الأبعاد عبر خريطة الخصائص لالتقاط الأنماط المكانية الموضعية، مع ميزة التشارك في الأوزان ومقاومة الإزاحة.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "A 2D convolutional layer slides spatial filter kernels across input feature maps to capture local spatial hierarchies, translation invariance, and weight sharing.",
      "correctAnswerEn": "A 2D convolutional layer slides spatial filter kernels across input feature maps to capture local spatial hierarchies, translation invariance, and weight sharing.",
      "correctAnswerAr": "تنزلق نواة الترشيح في الطبقة الالتفافية ثنائية الأبعاد عبر خريطة الخصائص لالتقاط الأنماط المكانية الموضعية، مع ميزة التشارك في الأوزان ومقاومة الإزاحة.",
      "correctIndex": 2,
      "explanationEn": "Correct Theoretical Formulation: A 2D convolutional layer slides spatial filter kernels across input feature maps to capture local spatial hierarchies, translation invariance, and weight sharing.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تنزلق نواة الترشيح في الطبقة الالتفافية ثنائية الأبعاد عبر خريطة الخصائص لالتقاط الأنماط المكانية الموضعية، مع ميزة التشارك في الأوزان ومقاومة الإزاحة.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Convolutional Layers, Pooling & ResNet Skip Connections.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: A 2D convolutional layer slides spatial filter kernels across input feature maps to capture local spatial hierarchies, translation invariance, and weight sharing.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تنزلق نواة الترشيح في الطبقة الالتفافية ثنائية الأبعاد عبر خريطة الخصائص لالتقاط الأنماط المكانية الموضعية، مع ميزة التشارك في الأوزان ومقاومة الإزاحة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch2_easy_24",
      "titleEn": "[EASY] Object Detection Pipelines, YOLO Architecture & IoU Metrics - Review 24",
      "titleAr": "[مستوى أساسي] خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU - سؤال 24",
      "questionEn": "[AI & Data Science Core Concept] Regarding Object Detection Pipelines, YOLO Architecture & IoU Metrics, which of the following statements is theoretically and mathematically sound? (Variant 24)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 24)",
      "optionsEn": [
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "Object detection models predict both the bounding box spatial coordinates ($x, y, w, h$) and categorical classification probabilities for multiple objects simultaneously within an image."
      ],
      "optionsAr": [
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تتنبأ نماذج كشف الكائنات بكل من الإحداثيات المكانية لصناديق الإحاطة ($x, y, w, h$) واحتماليات الفئات التصنيفية لعدة أجسام في آن واحد داخل الصورة."
      ],
      "correctAnswer": "Object detection models predict both the bounding box spatial coordinates ($x, y, w, h$) and categorical classification probabilities for multiple objects simultaneously within an image.",
      "correctAnswerEn": "Object detection models predict both the bounding box spatial coordinates ($x, y, w, h$) and categorical classification probabilities for multiple objects simultaneously within an image.",
      "correctAnswerAr": "تتنبأ نماذج كشف الكائنات بكل من الإحداثيات المكانية لصناديق الإحاطة ($x, y, w, h$) واحتماليات الفئات التصنيفية لعدة أجسام في آن واحد داخل الصورة.",
      "correctIndex": 3,
      "explanationEn": "Correct Theoretical Formulation: Object detection models predict both the bounding box spatial coordinates ($x, y, w, h$) and categorical classification probabilities for multiple objects simultaneously within an image.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تتنبأ نماذج كشف الكائنات بكل من الإحداثيات المكانية لصناديق الإحاطة ($x, y, w, h$) واحتماليات الفئات التصنيفية لعدة أجسام في آن واحد داخل الصورة.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Object Detection Pipelines, YOLO Architecture & IoU Metrics.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Object detection models predict both the bounding box spatial coordinates ($x, y, w, h$) and categorical classification probabilities for multiple objects simultaneously within an image.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تتنبأ نماذج كشف الكائنات بكل من الإحداثيات المكانية لصناديق الإحاطة ($x, y, w, h$) واحتماليات الفئات التصنيفية لعدة أجسام في آن واحد داخل الصورة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch2_easy_25",
      "titleEn": "[EASY] Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions - Review 25",
      "titleAr": "[مستوى أساسي] الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج - سؤال 25",
      "questionEn": "[AI & Data Science Core Concept] Regarding Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions, which of the following statements is theoretically and mathematically sound? (Variant 25)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 25)",
      "optionsEn": [
        "Backpropagation uses the calculus chain rule to propagate error gradients backwards from the output loss layer through hidden layers to update synaptic connection weights.",
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "يستخدم الانتشار الخلفي للأخطاء قاعدة السلسلة الرياضية لنقل تدرجات الخطأ عكسياً من طبقة الخسارة عبر الطبقات الخفية لتحديث أوزان الاتصالات العصبية.",
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "Backpropagation uses the calculus chain rule to propagate error gradients backwards from the output loss layer through hidden layers to update synaptic connection weights.",
      "correctAnswerEn": "Backpropagation uses the calculus chain rule to propagate error gradients backwards from the output loss layer through hidden layers to update synaptic connection weights.",
      "correctAnswerAr": "يستخدم الانتشار الخلفي للأخطاء قاعدة السلسلة الرياضية لنقل تدرجات الخطأ عكسياً من طبقة الخسارة عبر الطبقات الخفية لتحديث أوزان الاتصالات العصبية.",
      "correctIndex": 0,
      "explanationEn": "Correct Theoretical Formulation: Backpropagation uses the calculus chain rule to propagate error gradients backwards from the output loss layer through hidden layers to update synaptic connection weights.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يستخدم الانتشار الخلفي للأخطاء قاعدة السلسلة الرياضية لنقل تدرجات الخطأ عكسياً من طبقة الخسارة عبر الطبقات الخفية لتحديث أوزان الاتصالات العصبية.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Backpropagation uses the calculus chain rule to propagate error gradients backwards from the output loss layer through hidden layers to update synaptic connection weights.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يستخدم الانتشار الخلفي للأخطاء قاعدة السلسلة الرياضية لنقل تدرجات الخطأ عكسياً من طبقة الخسارة عبر الطبقات الخفية لتحديث أوزان الاتصالات العصبية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch2_easy_26",
      "titleEn": "[EASY] Convolutional Layers, Pooling & ResNet Skip Connections - Review 26",
      "titleAr": "[مستوى أساسي] الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet - سؤال 26",
      "questionEn": "[AI & Data Science Core Concept] Regarding Convolutional Layers, Pooling & ResNet Skip Connections, which of the following statements is theoretically and mathematically sound? (Variant 26)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 26)",
      "optionsEn": [
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "A 2D convolutional layer slides spatial filter kernels across input feature maps to capture local spatial hierarchies, translation invariance, and weight sharing.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "تنزلق نواة الترشيح في الطبقة الالتفافية ثنائية الأبعاد عبر خريطة الخصائص لالتقاط الأنماط المكانية الموضعية، مع ميزة التشارك في الأوزان ومقاومة الإزاحة.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "A 2D convolutional layer slides spatial filter kernels across input feature maps to capture local spatial hierarchies, translation invariance, and weight sharing.",
      "correctAnswerEn": "A 2D convolutional layer slides spatial filter kernels across input feature maps to capture local spatial hierarchies, translation invariance, and weight sharing.",
      "correctAnswerAr": "تنزلق نواة الترشيح في الطبقة الالتفافية ثنائية الأبعاد عبر خريطة الخصائص لالتقاط الأنماط المكانية الموضعية، مع ميزة التشارك في الأوزان ومقاومة الإزاحة.",
      "correctIndex": 1,
      "explanationEn": "Correct Theoretical Formulation: A 2D convolutional layer slides spatial filter kernels across input feature maps to capture local spatial hierarchies, translation invariance, and weight sharing.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تنزلق نواة الترشيح في الطبقة الالتفافية ثنائية الأبعاد عبر خريطة الخصائص لالتقاط الأنماط المكانية الموضعية، مع ميزة التشارك في الأوزان ومقاومة الإزاحة.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Convolutional Layers, Pooling & ResNet Skip Connections.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: A 2D convolutional layer slides spatial filter kernels across input feature maps to capture local spatial hierarchies, translation invariance, and weight sharing.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تنزلق نواة الترشيح في الطبقة الالتفافية ثنائية الأبعاد عبر خريطة الخصائص لالتقاط الأنماط المكانية الموضعية، مع ميزة التشارك في الأوزان ومقاومة الإزاحة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch2_easy_27",
      "titleEn": "[EASY] Object Detection Pipelines, YOLO Architecture & IoU Metrics - Review 27",
      "titleAr": "[مستوى أساسي] خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU - سؤال 27",
      "questionEn": "[AI & Data Science Core Concept] Regarding Object Detection Pipelines, YOLO Architecture & IoU Metrics, which of the following statements is theoretically and mathematically sound? (Variant 27)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 27)",
      "optionsEn": [
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Object detection models predict both the bounding box spatial coordinates ($x, y, w, h$) and categorical classification probabilities for multiple objects simultaneously within an image.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتنبأ نماذج كشف الكائنات بكل من الإحداثيات المكانية لصناديق الإحاطة ($x, y, w, h$) واحتماليات الفئات التصنيفية لعدة أجسام في آن واحد داخل الصورة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "Object detection models predict both the bounding box spatial coordinates ($x, y, w, h$) and categorical classification probabilities for multiple objects simultaneously within an image.",
      "correctAnswerEn": "Object detection models predict both the bounding box spatial coordinates ($x, y, w, h$) and categorical classification probabilities for multiple objects simultaneously within an image.",
      "correctAnswerAr": "تتنبأ نماذج كشف الكائنات بكل من الإحداثيات المكانية لصناديق الإحاطة ($x, y, w, h$) واحتماليات الفئات التصنيفية لعدة أجسام في آن واحد داخل الصورة.",
      "correctIndex": 2,
      "explanationEn": "Correct Theoretical Formulation: Object detection models predict both the bounding box spatial coordinates ($x, y, w, h$) and categorical classification probabilities for multiple objects simultaneously within an image.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تتنبأ نماذج كشف الكائنات بكل من الإحداثيات المكانية لصناديق الإحاطة ($x, y, w, h$) واحتماليات الفئات التصنيفية لعدة أجسام في آن واحد داخل الصورة.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Object Detection Pipelines, YOLO Architecture & IoU Metrics.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Object detection models predict both the bounding box spatial coordinates ($x, y, w, h$) and categorical classification probabilities for multiple objects simultaneously within an image.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تتنبأ نماذج كشف الكائنات بكل من الإحداثيات المكانية لصناديق الإحاطة ($x, y, w, h$) واحتماليات الفئات التصنيفية لعدة أجسام في آن واحد داخل الصورة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch2_easy_28",
      "titleEn": "[EASY] Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions - Review 28",
      "titleAr": "[مستوى أساسي] الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج - سؤال 28",
      "questionEn": "[AI & Data Science Core Concept] Regarding Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions, which of the following statements is theoretically and mathematically sound? (Variant 28)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 28)",
      "optionsEn": [
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "Backpropagation uses the calculus chain rule to propagate error gradients backwards from the output loss layer through hidden layers to update synaptic connection weights."
      ],
      "optionsAr": [
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "يستخدم الانتشار الخلفي للأخطاء قاعدة السلسلة الرياضية لنقل تدرجات الخطأ عكسياً من طبقة الخسارة عبر الطبقات الخفية لتحديث أوزان الاتصالات العصبية."
      ],
      "correctAnswer": "Backpropagation uses the calculus chain rule to propagate error gradients backwards from the output loss layer through hidden layers to update synaptic connection weights.",
      "correctAnswerEn": "Backpropagation uses the calculus chain rule to propagate error gradients backwards from the output loss layer through hidden layers to update synaptic connection weights.",
      "correctAnswerAr": "يستخدم الانتشار الخلفي للأخطاء قاعدة السلسلة الرياضية لنقل تدرجات الخطأ عكسياً من طبقة الخسارة عبر الطبقات الخفية لتحديث أوزان الاتصالات العصبية.",
      "correctIndex": 3,
      "explanationEn": "Correct Theoretical Formulation: Backpropagation uses the calculus chain rule to propagate error gradients backwards from the output loss layer through hidden layers to update synaptic connection weights.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يستخدم الانتشار الخلفي للأخطاء قاعدة السلسلة الرياضية لنقل تدرجات الخطأ عكسياً من طبقة الخسارة عبر الطبقات الخفية لتحديث أوزان الاتصالات العصبية.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Backpropagation uses the calculus chain rule to propagate error gradients backwards from the output loss layer through hidden layers to update synaptic connection weights.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يستخدم الانتشار الخلفي للأخطاء قاعدة السلسلة الرياضية لنقل تدرجات الخطأ عكسياً من طبقة الخسارة عبر الطبقات الخفية لتحديث أوزان الاتصالات العصبية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch2_easy_29",
      "titleEn": "[EASY] Convolutional Layers, Pooling & ResNet Skip Connections - Review 29",
      "titleAr": "[مستوى أساسي] الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet - سؤال 29",
      "questionEn": "[AI & Data Science Core Concept] Regarding Convolutional Layers, Pooling & ResNet Skip Connections, which of the following statements is theoretically and mathematically sound? (Variant 29)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 29)",
      "optionsEn": [
        "A 2D convolutional layer slides spatial filter kernels across input feature maps to capture local spatial hierarchies, translation invariance, and weight sharing.",
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "تنزلق نواة الترشيح في الطبقة الالتفافية ثنائية الأبعاد عبر خريطة الخصائص لالتقاط الأنماط المكانية الموضعية، مع ميزة التشارك في الأوزان ومقاومة الإزاحة.",
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "A 2D convolutional layer slides spatial filter kernels across input feature maps to capture local spatial hierarchies, translation invariance, and weight sharing.",
      "correctAnswerEn": "A 2D convolutional layer slides spatial filter kernels across input feature maps to capture local spatial hierarchies, translation invariance, and weight sharing.",
      "correctAnswerAr": "تنزلق نواة الترشيح في الطبقة الالتفافية ثنائية الأبعاد عبر خريطة الخصائص لالتقاط الأنماط المكانية الموضعية، مع ميزة التشارك في الأوزان ومقاومة الإزاحة.",
      "correctIndex": 0,
      "explanationEn": "Correct Theoretical Formulation: A 2D convolutional layer slides spatial filter kernels across input feature maps to capture local spatial hierarchies, translation invariance, and weight sharing.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تنزلق نواة الترشيح في الطبقة الالتفافية ثنائية الأبعاد عبر خريطة الخصائص لالتقاط الأنماط المكانية الموضعية، مع ميزة التشارك في الأوزان ومقاومة الإزاحة.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Convolutional Layers, Pooling & ResNet Skip Connections.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: A 2D convolutional layer slides spatial filter kernels across input feature maps to capture local spatial hierarchies, translation invariance, and weight sharing.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تنزلق نواة الترشيح في الطبقة الالتفافية ثنائية الأبعاد عبر خريطة الخصائص لالتقاط الأنماط المكانية الموضعية، مع ميزة التشارك في الأوزان ومقاومة الإزاحة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch2_easy_30",
      "titleEn": "[EASY] Object Detection Pipelines, YOLO Architecture & IoU Metrics - Review 30",
      "titleAr": "[مستوى أساسي] خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU - سؤال 30",
      "questionEn": "[AI & Data Science Core Concept] Regarding Object Detection Pipelines, YOLO Architecture & IoU Metrics, which of the following statements is theoretically and mathematically sound? (Variant 30)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 30)",
      "optionsEn": [
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "Object detection models predict both the bounding box spatial coordinates ($x, y, w, h$) and categorical classification probabilities for multiple objects simultaneously within an image.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تتنبأ نماذج كشف الكائنات بكل من الإحداثيات المكانية لصناديق الإحاطة ($x, y, w, h$) واحتماليات الفئات التصنيفية لعدة أجسام في آن واحد داخل الصورة.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "Object detection models predict both the bounding box spatial coordinates ($x, y, w, h$) and categorical classification probabilities for multiple objects simultaneously within an image.",
      "correctAnswerEn": "Object detection models predict both the bounding box spatial coordinates ($x, y, w, h$) and categorical classification probabilities for multiple objects simultaneously within an image.",
      "correctAnswerAr": "تتنبأ نماذج كشف الكائنات بكل من الإحداثيات المكانية لصناديق الإحاطة ($x, y, w, h$) واحتماليات الفئات التصنيفية لعدة أجسام في آن واحد داخل الصورة.",
      "correctIndex": 1,
      "explanationEn": "Correct Theoretical Formulation: Object detection models predict both the bounding box spatial coordinates ($x, y, w, h$) and categorical classification probabilities for multiple objects simultaneously within an image.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تتنبأ نماذج كشف الكائنات بكل من الإحداثيات المكانية لصناديق الإحاطة ($x, y, w, h$) واحتماليات الفئات التصنيفية لعدة أجسام في آن واحد داخل الصورة.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Object Detection Pipelines, YOLO Architecture & IoU Metrics.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Object detection models predict both the bounding box spatial coordinates ($x, y, w, h$) and categorical classification probabilities for multiple objects simultaneously within an image.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تتنبأ نماذج كشف الكائنات بكل من الإحداثيات المكانية لصناديق الإحاطة ($x, y, w, h$) واحتماليات الفئات التصنيفية لعدة أجسام في آن واحد داخل الصورة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch2_easy_31",
      "titleEn": "[EASY] Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions - Review 31",
      "titleAr": "[مستوى أساسي] الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج - سؤال 31",
      "questionEn": "[AI & Data Science Core Concept] Regarding Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions, which of the following statements is theoretically and mathematically sound? (Variant 31)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 31)",
      "optionsEn": [
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "Backpropagation uses the calculus chain rule to propagate error gradients backwards from the output loss layer through hidden layers to update synaptic connection weights.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يستخدم الانتشار الخلفي للأخطاء قاعدة السلسلة الرياضية لنقل تدرجات الخطأ عكسياً من طبقة الخسارة عبر الطبقات الخفية لتحديث أوزان الاتصالات العصبية.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "Backpropagation uses the calculus chain rule to propagate error gradients backwards from the output loss layer through hidden layers to update synaptic connection weights.",
      "correctAnswerEn": "Backpropagation uses the calculus chain rule to propagate error gradients backwards from the output loss layer through hidden layers to update synaptic connection weights.",
      "correctAnswerAr": "يستخدم الانتشار الخلفي للأخطاء قاعدة السلسلة الرياضية لنقل تدرجات الخطأ عكسياً من طبقة الخسارة عبر الطبقات الخفية لتحديث أوزان الاتصالات العصبية.",
      "correctIndex": 2,
      "explanationEn": "Correct Theoretical Formulation: Backpropagation uses the calculus chain rule to propagate error gradients backwards from the output loss layer through hidden layers to update synaptic connection weights.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يستخدم الانتشار الخلفي للأخطاء قاعدة السلسلة الرياضية لنقل تدرجات الخطأ عكسياً من طبقة الخسارة عبر الطبقات الخفية لتحديث أوزان الاتصالات العصبية.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Backpropagation uses the calculus chain rule to propagate error gradients backwards from the output loss layer through hidden layers to update synaptic connection weights.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يستخدم الانتشار الخلفي للأخطاء قاعدة السلسلة الرياضية لنقل تدرجات الخطأ عكسياً من طبقة الخسارة عبر الطبقات الخفية لتحديث أوزان الاتصالات العصبية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch2_easy_32",
      "titleEn": "[EASY] Convolutional Layers, Pooling & ResNet Skip Connections - Review 32",
      "titleAr": "[مستوى أساسي] الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet - سؤال 32",
      "questionEn": "[AI & Data Science Core Concept] Regarding Convolutional Layers, Pooling & ResNet Skip Connections, which of the following statements is theoretically and mathematically sound? (Variant 32)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 32)",
      "optionsEn": [
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "A 2D convolutional layer slides spatial filter kernels across input feature maps to capture local spatial hierarchies, translation invariance, and weight sharing."
      ],
      "optionsAr": [
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "تنزلق نواة الترشيح في الطبقة الالتفافية ثنائية الأبعاد عبر خريطة الخصائص لالتقاط الأنماط المكانية الموضعية، مع ميزة التشارك في الأوزان ومقاومة الإزاحة."
      ],
      "correctAnswer": "A 2D convolutional layer slides spatial filter kernels across input feature maps to capture local spatial hierarchies, translation invariance, and weight sharing.",
      "correctAnswerEn": "A 2D convolutional layer slides spatial filter kernels across input feature maps to capture local spatial hierarchies, translation invariance, and weight sharing.",
      "correctAnswerAr": "تنزلق نواة الترشيح في الطبقة الالتفافية ثنائية الأبعاد عبر خريطة الخصائص لالتقاط الأنماط المكانية الموضعية، مع ميزة التشارك في الأوزان ومقاومة الإزاحة.",
      "correctIndex": 3,
      "explanationEn": "Correct Theoretical Formulation: A 2D convolutional layer slides spatial filter kernels across input feature maps to capture local spatial hierarchies, translation invariance, and weight sharing.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تنزلق نواة الترشيح في الطبقة الالتفافية ثنائية الأبعاد عبر خريطة الخصائص لالتقاط الأنماط المكانية الموضعية، مع ميزة التشارك في الأوزان ومقاومة الإزاحة.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Convolutional Layers, Pooling & ResNet Skip Connections.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: A 2D convolutional layer slides spatial filter kernels across input feature maps to capture local spatial hierarchies, translation invariance, and weight sharing.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تنزلق نواة الترشيح في الطبقة الالتفافية ثنائية الأبعاد عبر خريطة الخصائص لالتقاط الأنماط المكانية الموضعية، مع ميزة التشارك في الأوزان ومقاومة الإزاحة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch2_easy_33",
      "titleEn": "[EASY] Object Detection Pipelines, YOLO Architecture & IoU Metrics - Review 33",
      "titleAr": "[مستوى أساسي] خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU - سؤال 33",
      "questionEn": "[AI & Data Science Core Concept] Regarding Object Detection Pipelines, YOLO Architecture & IoU Metrics, which of the following statements is theoretically and mathematically sound? (Variant 33)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 33)",
      "optionsEn": [
        "Object detection models predict both the bounding box spatial coordinates ($x, y, w, h$) and categorical classification probabilities for multiple objects simultaneously within an image.",
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "تتنبأ نماذج كشف الكائنات بكل من الإحداثيات المكانية لصناديق الإحاطة ($x, y, w, h$) واحتماليات الفئات التصنيفية لعدة أجسام في آن واحد داخل الصورة.",
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "Object detection models predict both the bounding box spatial coordinates ($x, y, w, h$) and categorical classification probabilities for multiple objects simultaneously within an image.",
      "correctAnswerEn": "Object detection models predict both the bounding box spatial coordinates ($x, y, w, h$) and categorical classification probabilities for multiple objects simultaneously within an image.",
      "correctAnswerAr": "تتنبأ نماذج كشف الكائنات بكل من الإحداثيات المكانية لصناديق الإحاطة ($x, y, w, h$) واحتماليات الفئات التصنيفية لعدة أجسام في آن واحد داخل الصورة.",
      "correctIndex": 0,
      "explanationEn": "Correct Theoretical Formulation: Object detection models predict both the bounding box spatial coordinates ($x, y, w, h$) and categorical classification probabilities for multiple objects simultaneously within an image.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تتنبأ نماذج كشف الكائنات بكل من الإحداثيات المكانية لصناديق الإحاطة ($x, y, w, h$) واحتماليات الفئات التصنيفية لعدة أجسام في آن واحد داخل الصورة.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Object Detection Pipelines, YOLO Architecture & IoU Metrics.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Object detection models predict both the bounding box spatial coordinates ($x, y, w, h$) and categorical classification probabilities for multiple objects simultaneously within an image.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تتنبأ نماذج كشف الكائنات بكل من الإحداثيات المكانية لصناديق الإحاطة ($x, y, w, h$) واحتماليات الفئات التصنيفية لعدة أجسام في آن واحد داخل الصورة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch2_easy_34",
      "titleEn": "[EASY] Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions - Review 34",
      "titleAr": "[مستوى أساسي] الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج - سؤال 34",
      "questionEn": "[AI & Data Science Core Concept] Regarding Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions, which of the following statements is theoretically and mathematically sound? (Variant 34)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 34)",
      "optionsEn": [
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "Backpropagation uses the calculus chain rule to propagate error gradients backwards from the output loss layer through hidden layers to update synaptic connection weights.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "يستخدم الانتشار الخلفي للأخطاء قاعدة السلسلة الرياضية لنقل تدرجات الخطأ عكسياً من طبقة الخسارة عبر الطبقات الخفية لتحديث أوزان الاتصالات العصبية.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "Backpropagation uses the calculus chain rule to propagate error gradients backwards from the output loss layer through hidden layers to update synaptic connection weights.",
      "correctAnswerEn": "Backpropagation uses the calculus chain rule to propagate error gradients backwards from the output loss layer through hidden layers to update synaptic connection weights.",
      "correctAnswerAr": "يستخدم الانتشار الخلفي للأخطاء قاعدة السلسلة الرياضية لنقل تدرجات الخطأ عكسياً من طبقة الخسارة عبر الطبقات الخفية لتحديث أوزان الاتصالات العصبية.",
      "correctIndex": 1,
      "explanationEn": "Correct Theoretical Formulation: Backpropagation uses the calculus chain rule to propagate error gradients backwards from the output loss layer through hidden layers to update synaptic connection weights.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يستخدم الانتشار الخلفي للأخطاء قاعدة السلسلة الرياضية لنقل تدرجات الخطأ عكسياً من طبقة الخسارة عبر الطبقات الخفية لتحديث أوزان الاتصالات العصبية.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Backpropagation uses the calculus chain rule to propagate error gradients backwards from the output loss layer through hidden layers to update synaptic connection weights.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يستخدم الانتشار الخلفي للأخطاء قاعدة السلسلة الرياضية لنقل تدرجات الخطأ عكسياً من طبقة الخسارة عبر الطبقات الخفية لتحديث أوزان الاتصالات العصبية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch2_easy_35",
      "titleEn": "[EASY] Convolutional Layers, Pooling & ResNet Skip Connections - Review 35",
      "titleAr": "[مستوى أساسي] الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet - سؤال 35",
      "questionEn": "[AI & Data Science Core Concept] Regarding Convolutional Layers, Pooling & ResNet Skip Connections, which of the following statements is theoretically and mathematically sound? (Variant 35)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 35)",
      "optionsEn": [
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "A 2D convolutional layer slides spatial filter kernels across input feature maps to capture local spatial hierarchies, translation invariance, and weight sharing.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تنزلق نواة الترشيح في الطبقة الالتفافية ثنائية الأبعاد عبر خريطة الخصائص لالتقاط الأنماط المكانية الموضعية، مع ميزة التشارك في الأوزان ومقاومة الإزاحة.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "A 2D convolutional layer slides spatial filter kernels across input feature maps to capture local spatial hierarchies, translation invariance, and weight sharing.",
      "correctAnswerEn": "A 2D convolutional layer slides spatial filter kernels across input feature maps to capture local spatial hierarchies, translation invariance, and weight sharing.",
      "correctAnswerAr": "تنزلق نواة الترشيح في الطبقة الالتفافية ثنائية الأبعاد عبر خريطة الخصائص لالتقاط الأنماط المكانية الموضعية، مع ميزة التشارك في الأوزان ومقاومة الإزاحة.",
      "correctIndex": 2,
      "explanationEn": "Correct Theoretical Formulation: A 2D convolutional layer slides spatial filter kernels across input feature maps to capture local spatial hierarchies, translation invariance, and weight sharing.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تنزلق نواة الترشيح في الطبقة الالتفافية ثنائية الأبعاد عبر خريطة الخصائص لالتقاط الأنماط المكانية الموضعية، مع ميزة التشارك في الأوزان ومقاومة الإزاحة.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Convolutional Layers, Pooling & ResNet Skip Connections.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: A 2D convolutional layer slides spatial filter kernels across input feature maps to capture local spatial hierarchies, translation invariance, and weight sharing.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تنزلق نواة الترشيح في الطبقة الالتفافية ثنائية الأبعاد عبر خريطة الخصائص لالتقاط الأنماط المكانية الموضعية، مع ميزة التشارك في الأوزان ومقاومة الإزاحة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch2_easy_36",
      "titleEn": "[EASY] Object Detection Pipelines, YOLO Architecture & IoU Metrics - Review 36",
      "titleAr": "[مستوى أساسي] خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU - سؤال 36",
      "questionEn": "[AI & Data Science Core Concept] Regarding Object Detection Pipelines, YOLO Architecture & IoU Metrics, which of the following statements is theoretically and mathematically sound? (Variant 36)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 36)",
      "optionsEn": [
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "Object detection models predict both the bounding box spatial coordinates ($x, y, w, h$) and categorical classification probabilities for multiple objects simultaneously within an image."
      ],
      "optionsAr": [
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تتنبأ نماذج كشف الكائنات بكل من الإحداثيات المكانية لصناديق الإحاطة ($x, y, w, h$) واحتماليات الفئات التصنيفية لعدة أجسام في آن واحد داخل الصورة."
      ],
      "correctAnswer": "Object detection models predict both the bounding box spatial coordinates ($x, y, w, h$) and categorical classification probabilities for multiple objects simultaneously within an image.",
      "correctAnswerEn": "Object detection models predict both the bounding box spatial coordinates ($x, y, w, h$) and categorical classification probabilities for multiple objects simultaneously within an image.",
      "correctAnswerAr": "تتنبأ نماذج كشف الكائنات بكل من الإحداثيات المكانية لصناديق الإحاطة ($x, y, w, h$) واحتماليات الفئات التصنيفية لعدة أجسام في آن واحد داخل الصورة.",
      "correctIndex": 3,
      "explanationEn": "Correct Theoretical Formulation: Object detection models predict both the bounding box spatial coordinates ($x, y, w, h$) and categorical classification probabilities for multiple objects simultaneously within an image.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تتنبأ نماذج كشف الكائنات بكل من الإحداثيات المكانية لصناديق الإحاطة ($x, y, w, h$) واحتماليات الفئات التصنيفية لعدة أجسام في آن واحد داخل الصورة.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Object Detection Pipelines, YOLO Architecture & IoU Metrics.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Object detection models predict both the bounding box spatial coordinates ($x, y, w, h$) and categorical classification probabilities for multiple objects simultaneously within an image.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تتنبأ نماذج كشف الكائنات بكل من الإحداثيات المكانية لصناديق الإحاطة ($x, y, w, h$) واحتماليات الفئات التصنيفية لعدة أجسام في آن واحد داخل الصورة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch2_easy_37",
      "titleEn": "[EASY] Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions - Review 37",
      "titleAr": "[مستوى أساسي] الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج - سؤال 37",
      "questionEn": "[AI & Data Science Core Concept] Regarding Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions, which of the following statements is theoretically and mathematically sound? (Variant 37)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 37)",
      "optionsEn": [
        "Backpropagation uses the calculus chain rule to propagate error gradients backwards from the output loss layer through hidden layers to update synaptic connection weights.",
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "يستخدم الانتشار الخلفي للأخطاء قاعدة السلسلة الرياضية لنقل تدرجات الخطأ عكسياً من طبقة الخسارة عبر الطبقات الخفية لتحديث أوزان الاتصالات العصبية.",
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "Backpropagation uses the calculus chain rule to propagate error gradients backwards from the output loss layer through hidden layers to update synaptic connection weights.",
      "correctAnswerEn": "Backpropagation uses the calculus chain rule to propagate error gradients backwards from the output loss layer through hidden layers to update synaptic connection weights.",
      "correctAnswerAr": "يستخدم الانتشار الخلفي للأخطاء قاعدة السلسلة الرياضية لنقل تدرجات الخطأ عكسياً من طبقة الخسارة عبر الطبقات الخفية لتحديث أوزان الاتصالات العصبية.",
      "correctIndex": 0,
      "explanationEn": "Correct Theoretical Formulation: Backpropagation uses the calculus chain rule to propagate error gradients backwards from the output loss layer through hidden layers to update synaptic connection weights.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يستخدم الانتشار الخلفي للأخطاء قاعدة السلسلة الرياضية لنقل تدرجات الخطأ عكسياً من طبقة الخسارة عبر الطبقات الخفية لتحديث أوزان الاتصالات العصبية.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Backpropagation uses the calculus chain rule to propagate error gradients backwards from the output loss layer through hidden layers to update synaptic connection weights.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يستخدم الانتشار الخلفي للأخطاء قاعدة السلسلة الرياضية لنقل تدرجات الخطأ عكسياً من طبقة الخسارة عبر الطبقات الخفية لتحديث أوزان الاتصالات العصبية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch2_easy_38",
      "titleEn": "[EASY] Convolutional Layers, Pooling & ResNet Skip Connections - Review 38",
      "titleAr": "[مستوى أساسي] الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet - سؤال 38",
      "questionEn": "[AI & Data Science Core Concept] Regarding Convolutional Layers, Pooling & ResNet Skip Connections, which of the following statements is theoretically and mathematically sound? (Variant 38)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 38)",
      "optionsEn": [
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "A 2D convolutional layer slides spatial filter kernels across input feature maps to capture local spatial hierarchies, translation invariance, and weight sharing.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تنزلق نواة الترشيح في الطبقة الالتفافية ثنائية الأبعاد عبر خريطة الخصائص لالتقاط الأنماط المكانية الموضعية، مع ميزة التشارك في الأوزان ومقاومة الإزاحة.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "A 2D convolutional layer slides spatial filter kernels across input feature maps to capture local spatial hierarchies, translation invariance, and weight sharing.",
      "correctAnswerEn": "A 2D convolutional layer slides spatial filter kernels across input feature maps to capture local spatial hierarchies, translation invariance, and weight sharing.",
      "correctAnswerAr": "تنزلق نواة الترشيح في الطبقة الالتفافية ثنائية الأبعاد عبر خريطة الخصائص لالتقاط الأنماط المكانية الموضعية، مع ميزة التشارك في الأوزان ومقاومة الإزاحة.",
      "correctIndex": 1,
      "explanationEn": "Correct Theoretical Formulation: A 2D convolutional layer slides spatial filter kernels across input feature maps to capture local spatial hierarchies, translation invariance, and weight sharing.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تنزلق نواة الترشيح في الطبقة الالتفافية ثنائية الأبعاد عبر خريطة الخصائص لالتقاط الأنماط المكانية الموضعية، مع ميزة التشارك في الأوزان ومقاومة الإزاحة.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Convolutional Layers, Pooling & ResNet Skip Connections.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: A 2D convolutional layer slides spatial filter kernels across input feature maps to capture local spatial hierarchies, translation invariance, and weight sharing.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تنزلق نواة الترشيح في الطبقة الالتفافية ثنائية الأبعاد عبر خريطة الخصائص لالتقاط الأنماط المكانية الموضعية، مع ميزة التشارك في الأوزان ومقاومة الإزاحة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch2_easy_39",
      "titleEn": "[EASY] Object Detection Pipelines, YOLO Architecture & IoU Metrics - Review 39",
      "titleAr": "[مستوى أساسي] خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU - سؤال 39",
      "questionEn": "[AI & Data Science Core Concept] Regarding Object Detection Pipelines, YOLO Architecture & IoU Metrics, which of the following statements is theoretically and mathematically sound? (Variant 39)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 39)",
      "optionsEn": [
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "Object detection models predict both the bounding box spatial coordinates ($x, y, w, h$) and categorical classification probabilities for multiple objects simultaneously within an image.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تتنبأ نماذج كشف الكائنات بكل من الإحداثيات المكانية لصناديق الإحاطة ($x, y, w, h$) واحتماليات الفئات التصنيفية لعدة أجسام في آن واحد داخل الصورة.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "Object detection models predict both the bounding box spatial coordinates ($x, y, w, h$) and categorical classification probabilities for multiple objects simultaneously within an image.",
      "correctAnswerEn": "Object detection models predict both the bounding box spatial coordinates ($x, y, w, h$) and categorical classification probabilities for multiple objects simultaneously within an image.",
      "correctAnswerAr": "تتنبأ نماذج كشف الكائنات بكل من الإحداثيات المكانية لصناديق الإحاطة ($x, y, w, h$) واحتماليات الفئات التصنيفية لعدة أجسام في آن واحد داخل الصورة.",
      "correctIndex": 2,
      "explanationEn": "Correct Theoretical Formulation: Object detection models predict both the bounding box spatial coordinates ($x, y, w, h$) and categorical classification probabilities for multiple objects simultaneously within an image.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تتنبأ نماذج كشف الكائنات بكل من الإحداثيات المكانية لصناديق الإحاطة ($x, y, w, h$) واحتماليات الفئات التصنيفية لعدة أجسام في آن واحد داخل الصورة.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Object Detection Pipelines, YOLO Architecture & IoU Metrics.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Object detection models predict both the bounding box spatial coordinates ($x, y, w, h$) and categorical classification probabilities for multiple objects simultaneously within an image.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تتنبأ نماذج كشف الكائنات بكل من الإحداثيات المكانية لصناديق الإحاطة ($x, y, w, h$) واحتماليات الفئات التصنيفية لعدة أجسام في آن واحد داخل الصورة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch2_easy_40",
      "titleEn": "[EASY] Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions - Review 40",
      "titleAr": "[مستوى أساسي] الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج - سؤال 40",
      "questionEn": "[AI & Data Science Core Concept] Regarding Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions, which of the following statements is theoretically and mathematically sound? (Variant 40)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 40)",
      "optionsEn": [
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Backpropagation uses the calculus chain rule to propagate error gradients backwards from the output loss layer through hidden layers to update synaptic connection weights."
      ],
      "optionsAr": [
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يستخدم الانتشار الخلفي للأخطاء قاعدة السلسلة الرياضية لنقل تدرجات الخطأ عكسياً من طبقة الخسارة عبر الطبقات الخفية لتحديث أوزان الاتصالات العصبية."
      ],
      "correctAnswer": "Backpropagation uses the calculus chain rule to propagate error gradients backwards from the output loss layer through hidden layers to update synaptic connection weights.",
      "correctAnswerEn": "Backpropagation uses the calculus chain rule to propagate error gradients backwards from the output loss layer through hidden layers to update synaptic connection weights.",
      "correctAnswerAr": "يستخدم الانتشار الخلفي للأخطاء قاعدة السلسلة الرياضية لنقل تدرجات الخطأ عكسياً من طبقة الخسارة عبر الطبقات الخفية لتحديث أوزان الاتصالات العصبية.",
      "correctIndex": 3,
      "explanationEn": "Correct Theoretical Formulation: Backpropagation uses the calculus chain rule to propagate error gradients backwards from the output loss layer through hidden layers to update synaptic connection weights.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يستخدم الانتشار الخلفي للأخطاء قاعدة السلسلة الرياضية لنقل تدرجات الخطأ عكسياً من طبقة الخسارة عبر الطبقات الخفية لتحديث أوزان الاتصالات العصبية.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Backpropagation uses the calculus chain rule to propagate error gradients backwards from the output loss layer through hidden layers to update synaptic connection weights.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يستخدم الانتشار الخلفي للأخطاء قاعدة السلسلة الرياضية لنقل تدرجات الخطأ عكسياً من طبقة الخسارة عبر الطبقات الخفية لتحديث أوزان الاتصالات العصبية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch2_easy_41",
      "titleEn": "[EASY] Convolutional Layers, Pooling & ResNet Skip Connections - Review 41",
      "titleAr": "[مستوى أساسي] الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet - سؤال 41",
      "questionEn": "[AI & Data Science Core Concept] Regarding Convolutional Layers, Pooling & ResNet Skip Connections, which of the following statements is theoretically and mathematically sound? (Variant 41)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 41)",
      "optionsEn": [
        "A 2D convolutional layer slides spatial filter kernels across input feature maps to capture local spatial hierarchies, translation invariance, and weight sharing.",
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "تنزلق نواة الترشيح في الطبقة الالتفافية ثنائية الأبعاد عبر خريطة الخصائص لالتقاط الأنماط المكانية الموضعية، مع ميزة التشارك في الأوزان ومقاومة الإزاحة.",
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "A 2D convolutional layer slides spatial filter kernels across input feature maps to capture local spatial hierarchies, translation invariance, and weight sharing.",
      "correctAnswerEn": "A 2D convolutional layer slides spatial filter kernels across input feature maps to capture local spatial hierarchies, translation invariance, and weight sharing.",
      "correctAnswerAr": "تنزلق نواة الترشيح في الطبقة الالتفافية ثنائية الأبعاد عبر خريطة الخصائص لالتقاط الأنماط المكانية الموضعية، مع ميزة التشارك في الأوزان ومقاومة الإزاحة.",
      "correctIndex": 0,
      "explanationEn": "Correct Theoretical Formulation: A 2D convolutional layer slides spatial filter kernels across input feature maps to capture local spatial hierarchies, translation invariance, and weight sharing.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تنزلق نواة الترشيح في الطبقة الالتفافية ثنائية الأبعاد عبر خريطة الخصائص لالتقاط الأنماط المكانية الموضعية، مع ميزة التشارك في الأوزان ومقاومة الإزاحة.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Convolutional Layers, Pooling & ResNet Skip Connections.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: A 2D convolutional layer slides spatial filter kernels across input feature maps to capture local spatial hierarchies, translation invariance, and weight sharing.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تنزلق نواة الترشيح في الطبقة الالتفافية ثنائية الأبعاد عبر خريطة الخصائص لالتقاط الأنماط المكانية الموضعية، مع ميزة التشارك في الأوزان ومقاومة الإزاحة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch2_easy_42",
      "titleEn": "[EASY] Object Detection Pipelines, YOLO Architecture & IoU Metrics - Review 42",
      "titleAr": "[مستوى أساسي] خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU - سؤال 42",
      "questionEn": "[AI & Data Science Core Concept] Regarding Object Detection Pipelines, YOLO Architecture & IoU Metrics, which of the following statements is theoretically and mathematically sound? (Variant 42)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 42)",
      "optionsEn": [
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "Object detection models predict both the bounding box spatial coordinates ($x, y, w, h$) and categorical classification probabilities for multiple objects simultaneously within an image.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تتنبأ نماذج كشف الكائنات بكل من الإحداثيات المكانية لصناديق الإحاطة ($x, y, w, h$) واحتماليات الفئات التصنيفية لعدة أجسام في آن واحد داخل الصورة.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "Object detection models predict both the bounding box spatial coordinates ($x, y, w, h$) and categorical classification probabilities for multiple objects simultaneously within an image.",
      "correctAnswerEn": "Object detection models predict both the bounding box spatial coordinates ($x, y, w, h$) and categorical classification probabilities for multiple objects simultaneously within an image.",
      "correctAnswerAr": "تتنبأ نماذج كشف الكائنات بكل من الإحداثيات المكانية لصناديق الإحاطة ($x, y, w, h$) واحتماليات الفئات التصنيفية لعدة أجسام في آن واحد داخل الصورة.",
      "correctIndex": 1,
      "explanationEn": "Correct Theoretical Formulation: Object detection models predict both the bounding box spatial coordinates ($x, y, w, h$) and categorical classification probabilities for multiple objects simultaneously within an image.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تتنبأ نماذج كشف الكائنات بكل من الإحداثيات المكانية لصناديق الإحاطة ($x, y, w, h$) واحتماليات الفئات التصنيفية لعدة أجسام في آن واحد داخل الصورة.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Object Detection Pipelines, YOLO Architecture & IoU Metrics.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Object detection models predict both the bounding box spatial coordinates ($x, y, w, h$) and categorical classification probabilities for multiple objects simultaneously within an image.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تتنبأ نماذج كشف الكائنات بكل من الإحداثيات المكانية لصناديق الإحاطة ($x, y, w, h$) واحتماليات الفئات التصنيفية لعدة أجسام في آن واحد داخل الصورة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch2_easy_43",
      "titleEn": "[EASY] Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions - Review 43",
      "titleAr": "[مستوى أساسي] الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج - سؤال 43",
      "questionEn": "[AI & Data Science Core Concept] Regarding Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions, which of the following statements is theoretically and mathematically sound? (Variant 43)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 43)",
      "optionsEn": [
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Backpropagation uses the calculus chain rule to propagate error gradients backwards from the output loss layer through hidden layers to update synaptic connection weights.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "يستخدم الانتشار الخلفي للأخطاء قاعدة السلسلة الرياضية لنقل تدرجات الخطأ عكسياً من طبقة الخسارة عبر الطبقات الخفية لتحديث أوزان الاتصالات العصبية.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "Backpropagation uses the calculus chain rule to propagate error gradients backwards from the output loss layer through hidden layers to update synaptic connection weights.",
      "correctAnswerEn": "Backpropagation uses the calculus chain rule to propagate error gradients backwards from the output loss layer through hidden layers to update synaptic connection weights.",
      "correctAnswerAr": "يستخدم الانتشار الخلفي للأخطاء قاعدة السلسلة الرياضية لنقل تدرجات الخطأ عكسياً من طبقة الخسارة عبر الطبقات الخفية لتحديث أوزان الاتصالات العصبية.",
      "correctIndex": 2,
      "explanationEn": "Correct Theoretical Formulation: Backpropagation uses the calculus chain rule to propagate error gradients backwards from the output loss layer through hidden layers to update synaptic connection weights.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يستخدم الانتشار الخلفي للأخطاء قاعدة السلسلة الرياضية لنقل تدرجات الخطأ عكسياً من طبقة الخسارة عبر الطبقات الخفية لتحديث أوزان الاتصالات العصبية.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Backpropagation uses the calculus chain rule to propagate error gradients backwards from the output loss layer through hidden layers to update synaptic connection weights.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يستخدم الانتشار الخلفي للأخطاء قاعدة السلسلة الرياضية لنقل تدرجات الخطأ عكسياً من طبقة الخسارة عبر الطبقات الخفية لتحديث أوزان الاتصالات العصبية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch2_easy_44",
      "titleEn": "[EASY] Convolutional Layers, Pooling & ResNet Skip Connections - Review 44",
      "titleAr": "[مستوى أساسي] الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet - سؤال 44",
      "questionEn": "[AI & Data Science Core Concept] Regarding Convolutional Layers, Pooling & ResNet Skip Connections, which of the following statements is theoretically and mathematically sound? (Variant 44)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 44)",
      "optionsEn": [
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "A 2D convolutional layer slides spatial filter kernels across input feature maps to capture local spatial hierarchies, translation invariance, and weight sharing."
      ],
      "optionsAr": [
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تنزلق نواة الترشيح في الطبقة الالتفافية ثنائية الأبعاد عبر خريطة الخصائص لالتقاط الأنماط المكانية الموضعية، مع ميزة التشارك في الأوزان ومقاومة الإزاحة."
      ],
      "correctAnswer": "A 2D convolutional layer slides spatial filter kernels across input feature maps to capture local spatial hierarchies, translation invariance, and weight sharing.",
      "correctAnswerEn": "A 2D convolutional layer slides spatial filter kernels across input feature maps to capture local spatial hierarchies, translation invariance, and weight sharing.",
      "correctAnswerAr": "تنزلق نواة الترشيح في الطبقة الالتفافية ثنائية الأبعاد عبر خريطة الخصائص لالتقاط الأنماط المكانية الموضعية، مع ميزة التشارك في الأوزان ومقاومة الإزاحة.",
      "correctIndex": 3,
      "explanationEn": "Correct Theoretical Formulation: A 2D convolutional layer slides spatial filter kernels across input feature maps to capture local spatial hierarchies, translation invariance, and weight sharing.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تنزلق نواة الترشيح في الطبقة الالتفافية ثنائية الأبعاد عبر خريطة الخصائص لالتقاط الأنماط المكانية الموضعية، مع ميزة التشارك في الأوزان ومقاومة الإزاحة.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Convolutional Layers, Pooling & ResNet Skip Connections.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: A 2D convolutional layer slides spatial filter kernels across input feature maps to capture local spatial hierarchies, translation invariance, and weight sharing.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تنزلق نواة الترشيح في الطبقة الالتفافية ثنائية الأبعاد عبر خريطة الخصائص لالتقاط الأنماط المكانية الموضعية، مع ميزة التشارك في الأوزان ومقاومة الإزاحة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch2_easy_45",
      "titleEn": "[EASY] Object Detection Pipelines, YOLO Architecture & IoU Metrics - Review 45",
      "titleAr": "[مستوى أساسي] خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU - سؤال 45",
      "questionEn": "[AI & Data Science Core Concept] Regarding Object Detection Pipelines, YOLO Architecture & IoU Metrics, which of the following statements is theoretically and mathematically sound? (Variant 45)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 45)",
      "optionsEn": [
        "Object detection models predict both the bounding box spatial coordinates ($x, y, w, h$) and categorical classification probabilities for multiple objects simultaneously within an image.",
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تتنبأ نماذج كشف الكائنات بكل من الإحداثيات المكانية لصناديق الإحاطة ($x, y, w, h$) واحتماليات الفئات التصنيفية لعدة أجسام في آن واحد داخل الصورة.",
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "Object detection models predict both the bounding box spatial coordinates ($x, y, w, h$) and categorical classification probabilities for multiple objects simultaneously within an image.",
      "correctAnswerEn": "Object detection models predict both the bounding box spatial coordinates ($x, y, w, h$) and categorical classification probabilities for multiple objects simultaneously within an image.",
      "correctAnswerAr": "تتنبأ نماذج كشف الكائنات بكل من الإحداثيات المكانية لصناديق الإحاطة ($x, y, w, h$) واحتماليات الفئات التصنيفية لعدة أجسام في آن واحد داخل الصورة.",
      "correctIndex": 0,
      "explanationEn": "Correct Theoretical Formulation: Object detection models predict both the bounding box spatial coordinates ($x, y, w, h$) and categorical classification probabilities for multiple objects simultaneously within an image.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تتنبأ نماذج كشف الكائنات بكل من الإحداثيات المكانية لصناديق الإحاطة ($x, y, w, h$) واحتماليات الفئات التصنيفية لعدة أجسام في آن واحد داخل الصورة.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Object Detection Pipelines, YOLO Architecture & IoU Metrics.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Object detection models predict both the bounding box spatial coordinates ($x, y, w, h$) and categorical classification probabilities for multiple objects simultaneously within an image.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تتنبأ نماذج كشف الكائنات بكل من الإحداثيات المكانية لصناديق الإحاطة ($x, y, w, h$) واحتماليات الفئات التصنيفية لعدة أجسام في آن واحد داخل الصورة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch2_easy_46",
      "titleEn": "[EASY] Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions - Review 46",
      "titleAr": "[مستوى أساسي] الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج - سؤال 46",
      "questionEn": "[AI & Data Science Core Concept] Regarding Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions, which of the following statements is theoretically and mathematically sound? (Variant 46)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 46)",
      "optionsEn": [
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Backpropagation uses the calculus chain rule to propagate error gradients backwards from the output loss layer through hidden layers to update synaptic connection weights.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يستخدم الانتشار الخلفي للأخطاء قاعدة السلسلة الرياضية لنقل تدرجات الخطأ عكسياً من طبقة الخسارة عبر الطبقات الخفية لتحديث أوزان الاتصالات العصبية.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "Backpropagation uses the calculus chain rule to propagate error gradients backwards from the output loss layer through hidden layers to update synaptic connection weights.",
      "correctAnswerEn": "Backpropagation uses the calculus chain rule to propagate error gradients backwards from the output loss layer through hidden layers to update synaptic connection weights.",
      "correctAnswerAr": "يستخدم الانتشار الخلفي للأخطاء قاعدة السلسلة الرياضية لنقل تدرجات الخطأ عكسياً من طبقة الخسارة عبر الطبقات الخفية لتحديث أوزان الاتصالات العصبية.",
      "correctIndex": 1,
      "explanationEn": "Correct Theoretical Formulation: Backpropagation uses the calculus chain rule to propagate error gradients backwards from the output loss layer through hidden layers to update synaptic connection weights.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يستخدم الانتشار الخلفي للأخطاء قاعدة السلسلة الرياضية لنقل تدرجات الخطأ عكسياً من طبقة الخسارة عبر الطبقات الخفية لتحديث أوزان الاتصالات العصبية.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Backpropagation uses the calculus chain rule to propagate error gradients backwards from the output loss layer through hidden layers to update synaptic connection weights.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يستخدم الانتشار الخلفي للأخطاء قاعدة السلسلة الرياضية لنقل تدرجات الخطأ عكسياً من طبقة الخسارة عبر الطبقات الخفية لتحديث أوزان الاتصالات العصبية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch2_easy_47",
      "titleEn": "[EASY] Convolutional Layers, Pooling & ResNet Skip Connections - Review 47",
      "titleAr": "[مستوى أساسي] الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet - سؤال 47",
      "questionEn": "[AI & Data Science Core Concept] Regarding Convolutional Layers, Pooling & ResNet Skip Connections, which of the following statements is theoretically and mathematically sound? (Variant 47)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 47)",
      "optionsEn": [
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "A 2D convolutional layer slides spatial filter kernels across input feature maps to capture local spatial hierarchies, translation invariance, and weight sharing.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تنزلق نواة الترشيح في الطبقة الالتفافية ثنائية الأبعاد عبر خريطة الخصائص لالتقاط الأنماط المكانية الموضعية، مع ميزة التشارك في الأوزان ومقاومة الإزاحة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "A 2D convolutional layer slides spatial filter kernels across input feature maps to capture local spatial hierarchies, translation invariance, and weight sharing.",
      "correctAnswerEn": "A 2D convolutional layer slides spatial filter kernels across input feature maps to capture local spatial hierarchies, translation invariance, and weight sharing.",
      "correctAnswerAr": "تنزلق نواة الترشيح في الطبقة الالتفافية ثنائية الأبعاد عبر خريطة الخصائص لالتقاط الأنماط المكانية الموضعية، مع ميزة التشارك في الأوزان ومقاومة الإزاحة.",
      "correctIndex": 2,
      "explanationEn": "Correct Theoretical Formulation: A 2D convolutional layer slides spatial filter kernels across input feature maps to capture local spatial hierarchies, translation invariance, and weight sharing.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تنزلق نواة الترشيح في الطبقة الالتفافية ثنائية الأبعاد عبر خريطة الخصائص لالتقاط الأنماط المكانية الموضعية، مع ميزة التشارك في الأوزان ومقاومة الإزاحة.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Convolutional Layers, Pooling & ResNet Skip Connections.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: A 2D convolutional layer slides spatial filter kernels across input feature maps to capture local spatial hierarchies, translation invariance, and weight sharing.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تنزلق نواة الترشيح في الطبقة الالتفافية ثنائية الأبعاد عبر خريطة الخصائص لالتقاط الأنماط المكانية الموضعية، مع ميزة التشارك في الأوزان ومقاومة الإزاحة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch2_easy_48",
      "titleEn": "[EASY] Object Detection Pipelines, YOLO Architecture & IoU Metrics - Review 48",
      "titleAr": "[مستوى أساسي] خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU - سؤال 48",
      "questionEn": "[AI & Data Science Core Concept] Regarding Object Detection Pipelines, YOLO Architecture & IoU Metrics, which of the following statements is theoretically and mathematically sound? (Variant 48)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 48)",
      "optionsEn": [
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "Object detection models predict both the bounding box spatial coordinates ($x, y, w, h$) and categorical classification probabilities for multiple objects simultaneously within an image."
      ],
      "optionsAr": [
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "تتنبأ نماذج كشف الكائنات بكل من الإحداثيات المكانية لصناديق الإحاطة ($x, y, w, h$) واحتماليات الفئات التصنيفية لعدة أجسام في آن واحد داخل الصورة."
      ],
      "correctAnswer": "Object detection models predict both the bounding box spatial coordinates ($x, y, w, h$) and categorical classification probabilities for multiple objects simultaneously within an image.",
      "correctAnswerEn": "Object detection models predict both the bounding box spatial coordinates ($x, y, w, h$) and categorical classification probabilities for multiple objects simultaneously within an image.",
      "correctAnswerAr": "تتنبأ نماذج كشف الكائنات بكل من الإحداثيات المكانية لصناديق الإحاطة ($x, y, w, h$) واحتماليات الفئات التصنيفية لعدة أجسام في آن واحد داخل الصورة.",
      "correctIndex": 3,
      "explanationEn": "Correct Theoretical Formulation: Object detection models predict both the bounding box spatial coordinates ($x, y, w, h$) and categorical classification probabilities for multiple objects simultaneously within an image.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تتنبأ نماذج كشف الكائنات بكل من الإحداثيات المكانية لصناديق الإحاطة ($x, y, w, h$) واحتماليات الفئات التصنيفية لعدة أجسام في آن واحد داخل الصورة.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Object Detection Pipelines, YOLO Architecture & IoU Metrics.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Object detection models predict both the bounding box spatial coordinates ($x, y, w, h$) and categorical classification probabilities for multiple objects simultaneously within an image.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تتنبأ نماذج كشف الكائنات بكل من الإحداثيات المكانية لصناديق الإحاطة ($x, y, w, h$) واحتماليات الفئات التصنيفية لعدة أجسام في آن واحد داخل الصورة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch2_easy_49",
      "titleEn": "[EASY] Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions - Review 49",
      "titleAr": "[مستوى أساسي] الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج - سؤال 49",
      "questionEn": "[AI & Data Science Core Concept] Regarding Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions, which of the following statements is theoretically and mathematically sound? (Variant 49)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 49)",
      "optionsEn": [
        "Backpropagation uses the calculus chain rule to propagate error gradients backwards from the output loss layer through hidden layers to update synaptic connection weights.",
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "يستخدم الانتشار الخلفي للأخطاء قاعدة السلسلة الرياضية لنقل تدرجات الخطأ عكسياً من طبقة الخسارة عبر الطبقات الخفية لتحديث أوزان الاتصالات العصبية.",
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "Backpropagation uses the calculus chain rule to propagate error gradients backwards from the output loss layer through hidden layers to update synaptic connection weights.",
      "correctAnswerEn": "Backpropagation uses the calculus chain rule to propagate error gradients backwards from the output loss layer through hidden layers to update synaptic connection weights.",
      "correctAnswerAr": "يستخدم الانتشار الخلفي للأخطاء قاعدة السلسلة الرياضية لنقل تدرجات الخطأ عكسياً من طبقة الخسارة عبر الطبقات الخفية لتحديث أوزان الاتصالات العصبية.",
      "correctIndex": 0,
      "explanationEn": "Correct Theoretical Formulation: Backpropagation uses the calculus chain rule to propagate error gradients backwards from the output loss layer through hidden layers to update synaptic connection weights.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يستخدم الانتشار الخلفي للأخطاء قاعدة السلسلة الرياضية لنقل تدرجات الخطأ عكسياً من طبقة الخسارة عبر الطبقات الخفية لتحديث أوزان الاتصالات العصبية.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Backpropagation uses the calculus chain rule to propagate error gradients backwards from the output loss layer through hidden layers to update synaptic connection weights.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يستخدم الانتشار الخلفي للأخطاء قاعدة السلسلة الرياضية لنقل تدرجات الخطأ عكسياً من طبقة الخسارة عبر الطبقات الخفية لتحديث أوزان الاتصالات العصبية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch2_easy_50",
      "titleEn": "[EASY] Convolutional Layers, Pooling & ResNet Skip Connections - Review 50",
      "titleAr": "[مستوى أساسي] الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet - سؤال 50",
      "questionEn": "[AI & Data Science Core Concept] Regarding Convolutional Layers, Pooling & ResNet Skip Connections, which of the following statements is theoretically and mathematically sound? (Variant 50)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 50)",
      "optionsEn": [
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "A 2D convolutional layer slides spatial filter kernels across input feature maps to capture local spatial hierarchies, translation invariance, and weight sharing.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تنزلق نواة الترشيح في الطبقة الالتفافية ثنائية الأبعاد عبر خريطة الخصائص لالتقاط الأنماط المكانية الموضعية، مع ميزة التشارك في الأوزان ومقاومة الإزاحة.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "A 2D convolutional layer slides spatial filter kernels across input feature maps to capture local spatial hierarchies, translation invariance, and weight sharing.",
      "correctAnswerEn": "A 2D convolutional layer slides spatial filter kernels across input feature maps to capture local spatial hierarchies, translation invariance, and weight sharing.",
      "correctAnswerAr": "تنزلق نواة الترشيح في الطبقة الالتفافية ثنائية الأبعاد عبر خريطة الخصائص لالتقاط الأنماط المكانية الموضعية، مع ميزة التشارك في الأوزان ومقاومة الإزاحة.",
      "correctIndex": 1,
      "explanationEn": "Correct Theoretical Formulation: A 2D convolutional layer slides spatial filter kernels across input feature maps to capture local spatial hierarchies, translation invariance, and weight sharing.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تنزلق نواة الترشيح في الطبقة الالتفافية ثنائية الأبعاد عبر خريطة الخصائص لالتقاط الأنماط المكانية الموضعية، مع ميزة التشارك في الأوزان ومقاومة الإزاحة.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Convolutional Layers, Pooling & ResNet Skip Connections.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: A 2D convolutional layer slides spatial filter kernels across input feature maps to capture local spatial hierarchies, translation invariance, and weight sharing.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تنزلق نواة الترشيح في الطبقة الالتفافية ثنائية الأبعاد عبر خريطة الخصائص لالتقاط الأنماط المكانية الموضعية، مع ميزة التشارك في الأوزان ومقاومة الإزاحة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch2_easy_51",
      "titleEn": "[EASY] Object Detection Pipelines, YOLO Architecture & IoU Metrics - Review 51",
      "titleAr": "[مستوى أساسي] خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU - سؤال 51",
      "questionEn": "[AI & Data Science Core Concept] Regarding Object Detection Pipelines, YOLO Architecture & IoU Metrics, which of the following statements is theoretically and mathematically sound? (Variant 51)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 51)",
      "optionsEn": [
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "Object detection models predict both the bounding box spatial coordinates ($x, y, w, h$) and categorical classification probabilities for multiple objects simultaneously within an image.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "تتنبأ نماذج كشف الكائنات بكل من الإحداثيات المكانية لصناديق الإحاطة ($x, y, w, h$) واحتماليات الفئات التصنيفية لعدة أجسام في آن واحد داخل الصورة.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "Object detection models predict both the bounding box spatial coordinates ($x, y, w, h$) and categorical classification probabilities for multiple objects simultaneously within an image.",
      "correctAnswerEn": "Object detection models predict both the bounding box spatial coordinates ($x, y, w, h$) and categorical classification probabilities for multiple objects simultaneously within an image.",
      "correctAnswerAr": "تتنبأ نماذج كشف الكائنات بكل من الإحداثيات المكانية لصناديق الإحاطة ($x, y, w, h$) واحتماليات الفئات التصنيفية لعدة أجسام في آن واحد داخل الصورة.",
      "correctIndex": 2,
      "explanationEn": "Correct Theoretical Formulation: Object detection models predict both the bounding box spatial coordinates ($x, y, w, h$) and categorical classification probabilities for multiple objects simultaneously within an image.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تتنبأ نماذج كشف الكائنات بكل من الإحداثيات المكانية لصناديق الإحاطة ($x, y, w, h$) واحتماليات الفئات التصنيفية لعدة أجسام في آن واحد داخل الصورة.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Object Detection Pipelines, YOLO Architecture & IoU Metrics.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Object detection models predict both the bounding box spatial coordinates ($x, y, w, h$) and categorical classification probabilities for multiple objects simultaneously within an image.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تتنبأ نماذج كشف الكائنات بكل من الإحداثيات المكانية لصناديق الإحاطة ($x, y, w, h$) واحتماليات الفئات التصنيفية لعدة أجسام في آن واحد داخل الصورة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch2_easy_52",
      "titleEn": "[EASY] Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions - Review 52",
      "titleAr": "[مستوى أساسي] الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج - سؤال 52",
      "questionEn": "[AI & Data Science Core Concept] Regarding Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions, which of the following statements is theoretically and mathematically sound? (Variant 52)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 52)",
      "optionsEn": [
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "Backpropagation uses the calculus chain rule to propagate error gradients backwards from the output loss layer through hidden layers to update synaptic connection weights."
      ],
      "optionsAr": [
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "يستخدم الانتشار الخلفي للأخطاء قاعدة السلسلة الرياضية لنقل تدرجات الخطأ عكسياً من طبقة الخسارة عبر الطبقات الخفية لتحديث أوزان الاتصالات العصبية."
      ],
      "correctAnswer": "Backpropagation uses the calculus chain rule to propagate error gradients backwards from the output loss layer through hidden layers to update synaptic connection weights.",
      "correctAnswerEn": "Backpropagation uses the calculus chain rule to propagate error gradients backwards from the output loss layer through hidden layers to update synaptic connection weights.",
      "correctAnswerAr": "يستخدم الانتشار الخلفي للأخطاء قاعدة السلسلة الرياضية لنقل تدرجات الخطأ عكسياً من طبقة الخسارة عبر الطبقات الخفية لتحديث أوزان الاتصالات العصبية.",
      "correctIndex": 3,
      "explanationEn": "Correct Theoretical Formulation: Backpropagation uses the calculus chain rule to propagate error gradients backwards from the output loss layer through hidden layers to update synaptic connection weights.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يستخدم الانتشار الخلفي للأخطاء قاعدة السلسلة الرياضية لنقل تدرجات الخطأ عكسياً من طبقة الخسارة عبر الطبقات الخفية لتحديث أوزان الاتصالات العصبية.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Backpropagation uses the calculus chain rule to propagate error gradients backwards from the output loss layer through hidden layers to update synaptic connection weights.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يستخدم الانتشار الخلفي للأخطاء قاعدة السلسلة الرياضية لنقل تدرجات الخطأ عكسياً من طبقة الخسارة عبر الطبقات الخفية لتحديث أوزان الاتصالات العصبية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch2_easy_53",
      "titleEn": "[EASY] Convolutional Layers, Pooling & ResNet Skip Connections - Review 53",
      "titleAr": "[مستوى أساسي] الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet - سؤال 53",
      "questionEn": "[AI & Data Science Core Concept] Regarding Convolutional Layers, Pooling & ResNet Skip Connections, which of the following statements is theoretically and mathematically sound? (Variant 53)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 53)",
      "optionsEn": [
        "A 2D convolutional layer slides spatial filter kernels across input feature maps to capture local spatial hierarchies, translation invariance, and weight sharing.",
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "تنزلق نواة الترشيح في الطبقة الالتفافية ثنائية الأبعاد عبر خريطة الخصائص لالتقاط الأنماط المكانية الموضعية، مع ميزة التشارك في الأوزان ومقاومة الإزاحة.",
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "A 2D convolutional layer slides spatial filter kernels across input feature maps to capture local spatial hierarchies, translation invariance, and weight sharing.",
      "correctAnswerEn": "A 2D convolutional layer slides spatial filter kernels across input feature maps to capture local spatial hierarchies, translation invariance, and weight sharing.",
      "correctAnswerAr": "تنزلق نواة الترشيح في الطبقة الالتفافية ثنائية الأبعاد عبر خريطة الخصائص لالتقاط الأنماط المكانية الموضعية، مع ميزة التشارك في الأوزان ومقاومة الإزاحة.",
      "correctIndex": 0,
      "explanationEn": "Correct Theoretical Formulation: A 2D convolutional layer slides spatial filter kernels across input feature maps to capture local spatial hierarchies, translation invariance, and weight sharing.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تنزلق نواة الترشيح في الطبقة الالتفافية ثنائية الأبعاد عبر خريطة الخصائص لالتقاط الأنماط المكانية الموضعية، مع ميزة التشارك في الأوزان ومقاومة الإزاحة.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Convolutional Layers, Pooling & ResNet Skip Connections.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: A 2D convolutional layer slides spatial filter kernels across input feature maps to capture local spatial hierarchies, translation invariance, and weight sharing.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تنزلق نواة الترشيح في الطبقة الالتفافية ثنائية الأبعاد عبر خريطة الخصائص لالتقاط الأنماط المكانية الموضعية، مع ميزة التشارك في الأوزان ومقاومة الإزاحة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch2_easy_54",
      "titleEn": "[EASY] Object Detection Pipelines, YOLO Architecture & IoU Metrics - Review 54",
      "titleAr": "[مستوى أساسي] خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU - سؤال 54",
      "questionEn": "[AI & Data Science Core Concept] Regarding Object Detection Pipelines, YOLO Architecture & IoU Metrics, which of the following statements is theoretically and mathematically sound? (Variant 54)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 54)",
      "optionsEn": [
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "Object detection models predict both the bounding box spatial coordinates ($x, y, w, h$) and categorical classification probabilities for multiple objects simultaneously within an image.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "تتنبأ نماذج كشف الكائنات بكل من الإحداثيات المكانية لصناديق الإحاطة ($x, y, w, h$) واحتماليات الفئات التصنيفية لعدة أجسام في آن واحد داخل الصورة.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "Object detection models predict both the bounding box spatial coordinates ($x, y, w, h$) and categorical classification probabilities for multiple objects simultaneously within an image.",
      "correctAnswerEn": "Object detection models predict both the bounding box spatial coordinates ($x, y, w, h$) and categorical classification probabilities for multiple objects simultaneously within an image.",
      "correctAnswerAr": "تتنبأ نماذج كشف الكائنات بكل من الإحداثيات المكانية لصناديق الإحاطة ($x, y, w, h$) واحتماليات الفئات التصنيفية لعدة أجسام في آن واحد داخل الصورة.",
      "correctIndex": 1,
      "explanationEn": "Correct Theoretical Formulation: Object detection models predict both the bounding box spatial coordinates ($x, y, w, h$) and categorical classification probabilities for multiple objects simultaneously within an image.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تتنبأ نماذج كشف الكائنات بكل من الإحداثيات المكانية لصناديق الإحاطة ($x, y, w, h$) واحتماليات الفئات التصنيفية لعدة أجسام في آن واحد داخل الصورة.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Object Detection Pipelines, YOLO Architecture & IoU Metrics.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Object detection models predict both the bounding box spatial coordinates ($x, y, w, h$) and categorical classification probabilities for multiple objects simultaneously within an image.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تتنبأ نماذج كشف الكائنات بكل من الإحداثيات المكانية لصناديق الإحاطة ($x, y, w, h$) واحتماليات الفئات التصنيفية لعدة أجسام في آن واحد داخل الصورة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch2_easy_55",
      "titleEn": "[EASY] Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions - Review 55",
      "titleAr": "[مستوى أساسي] الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج - سؤال 55",
      "questionEn": "[AI & Data Science Core Concept] Regarding Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions, which of the following statements is theoretically and mathematically sound? (Variant 55)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 55)",
      "optionsEn": [
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Backpropagation uses the calculus chain rule to propagate error gradients backwards from the output loss layer through hidden layers to update synaptic connection weights.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "يستخدم الانتشار الخلفي للأخطاء قاعدة السلسلة الرياضية لنقل تدرجات الخطأ عكسياً من طبقة الخسارة عبر الطبقات الخفية لتحديث أوزان الاتصالات العصبية.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "Backpropagation uses the calculus chain rule to propagate error gradients backwards from the output loss layer through hidden layers to update synaptic connection weights.",
      "correctAnswerEn": "Backpropagation uses the calculus chain rule to propagate error gradients backwards from the output loss layer through hidden layers to update synaptic connection weights.",
      "correctAnswerAr": "يستخدم الانتشار الخلفي للأخطاء قاعدة السلسلة الرياضية لنقل تدرجات الخطأ عكسياً من طبقة الخسارة عبر الطبقات الخفية لتحديث أوزان الاتصالات العصبية.",
      "correctIndex": 2,
      "explanationEn": "Correct Theoretical Formulation: Backpropagation uses the calculus chain rule to propagate error gradients backwards from the output loss layer through hidden layers to update synaptic connection weights.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يستخدم الانتشار الخلفي للأخطاء قاعدة السلسلة الرياضية لنقل تدرجات الخطأ عكسياً من طبقة الخسارة عبر الطبقات الخفية لتحديث أوزان الاتصالات العصبية.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Backpropagation uses the calculus chain rule to propagate error gradients backwards from the output loss layer through hidden layers to update synaptic connection weights.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يستخدم الانتشار الخلفي للأخطاء قاعدة السلسلة الرياضية لنقل تدرجات الخطأ عكسياً من طبقة الخسارة عبر الطبقات الخفية لتحديث أوزان الاتصالات العصبية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch2_easy_56",
      "titleEn": "[EASY] Convolutional Layers, Pooling & ResNet Skip Connections - Review 56",
      "titleAr": "[مستوى أساسي] الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet - سؤال 56",
      "questionEn": "[AI & Data Science Core Concept] Regarding Convolutional Layers, Pooling & ResNet Skip Connections, which of the following statements is theoretically and mathematically sound? (Variant 56)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 56)",
      "optionsEn": [
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "A 2D convolutional layer slides spatial filter kernels across input feature maps to capture local spatial hierarchies, translation invariance, and weight sharing."
      ],
      "optionsAr": [
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تنزلق نواة الترشيح في الطبقة الالتفافية ثنائية الأبعاد عبر خريطة الخصائص لالتقاط الأنماط المكانية الموضعية، مع ميزة التشارك في الأوزان ومقاومة الإزاحة."
      ],
      "correctAnswer": "A 2D convolutional layer slides spatial filter kernels across input feature maps to capture local spatial hierarchies, translation invariance, and weight sharing.",
      "correctAnswerEn": "A 2D convolutional layer slides spatial filter kernels across input feature maps to capture local spatial hierarchies, translation invariance, and weight sharing.",
      "correctAnswerAr": "تنزلق نواة الترشيح في الطبقة الالتفافية ثنائية الأبعاد عبر خريطة الخصائص لالتقاط الأنماط المكانية الموضعية، مع ميزة التشارك في الأوزان ومقاومة الإزاحة.",
      "correctIndex": 3,
      "explanationEn": "Correct Theoretical Formulation: A 2D convolutional layer slides spatial filter kernels across input feature maps to capture local spatial hierarchies, translation invariance, and weight sharing.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تنزلق نواة الترشيح في الطبقة الالتفافية ثنائية الأبعاد عبر خريطة الخصائص لالتقاط الأنماط المكانية الموضعية، مع ميزة التشارك في الأوزان ومقاومة الإزاحة.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Convolutional Layers, Pooling & ResNet Skip Connections.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: A 2D convolutional layer slides spatial filter kernels across input feature maps to capture local spatial hierarchies, translation invariance, and weight sharing.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تنزلق نواة الترشيح في الطبقة الالتفافية ثنائية الأبعاد عبر خريطة الخصائص لالتقاط الأنماط المكانية الموضعية، مع ميزة التشارك في الأوزان ومقاومة الإزاحة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch2_easy_57",
      "titleEn": "[EASY] Object Detection Pipelines, YOLO Architecture & IoU Metrics - Review 57",
      "titleAr": "[مستوى أساسي] خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU - سؤال 57",
      "questionEn": "[AI & Data Science Core Concept] Regarding Object Detection Pipelines, YOLO Architecture & IoU Metrics, which of the following statements is theoretically and mathematically sound? (Variant 57)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 57)",
      "optionsEn": [
        "Object detection models predict both the bounding box spatial coordinates ($x, y, w, h$) and categorical classification probabilities for multiple objects simultaneously within an image.",
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "تتنبأ نماذج كشف الكائنات بكل من الإحداثيات المكانية لصناديق الإحاطة ($x, y, w, h$) واحتماليات الفئات التصنيفية لعدة أجسام في آن واحد داخل الصورة.",
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "Object detection models predict both the bounding box spatial coordinates ($x, y, w, h$) and categorical classification probabilities for multiple objects simultaneously within an image.",
      "correctAnswerEn": "Object detection models predict both the bounding box spatial coordinates ($x, y, w, h$) and categorical classification probabilities for multiple objects simultaneously within an image.",
      "correctAnswerAr": "تتنبأ نماذج كشف الكائنات بكل من الإحداثيات المكانية لصناديق الإحاطة ($x, y, w, h$) واحتماليات الفئات التصنيفية لعدة أجسام في آن واحد داخل الصورة.",
      "correctIndex": 0,
      "explanationEn": "Correct Theoretical Formulation: Object detection models predict both the bounding box spatial coordinates ($x, y, w, h$) and categorical classification probabilities for multiple objects simultaneously within an image.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تتنبأ نماذج كشف الكائنات بكل من الإحداثيات المكانية لصناديق الإحاطة ($x, y, w, h$) واحتماليات الفئات التصنيفية لعدة أجسام في آن واحد داخل الصورة.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Object Detection Pipelines, YOLO Architecture & IoU Metrics.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Object detection models predict both the bounding box spatial coordinates ($x, y, w, h$) and categorical classification probabilities for multiple objects simultaneously within an image.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تتنبأ نماذج كشف الكائنات بكل من الإحداثيات المكانية لصناديق الإحاطة ($x, y, w, h$) واحتماليات الفئات التصنيفية لعدة أجسام في آن واحد داخل الصورة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch2_easy_58",
      "titleEn": "[EASY] Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions - Review 58",
      "titleAr": "[مستوى أساسي] الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج - سؤال 58",
      "questionEn": "[AI & Data Science Core Concept] Regarding Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions, which of the following statements is theoretically and mathematically sound? (Variant 58)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 58)",
      "optionsEn": [
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "Backpropagation uses the calculus chain rule to propagate error gradients backwards from the output loss layer through hidden layers to update synaptic connection weights.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "يستخدم الانتشار الخلفي للأخطاء قاعدة السلسلة الرياضية لنقل تدرجات الخطأ عكسياً من طبقة الخسارة عبر الطبقات الخفية لتحديث أوزان الاتصالات العصبية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "Backpropagation uses the calculus chain rule to propagate error gradients backwards from the output loss layer through hidden layers to update synaptic connection weights.",
      "correctAnswerEn": "Backpropagation uses the calculus chain rule to propagate error gradients backwards from the output loss layer through hidden layers to update synaptic connection weights.",
      "correctAnswerAr": "يستخدم الانتشار الخلفي للأخطاء قاعدة السلسلة الرياضية لنقل تدرجات الخطأ عكسياً من طبقة الخسارة عبر الطبقات الخفية لتحديث أوزان الاتصالات العصبية.",
      "correctIndex": 1,
      "explanationEn": "Correct Theoretical Formulation: Backpropagation uses the calculus chain rule to propagate error gradients backwards from the output loss layer through hidden layers to update synaptic connection weights.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يستخدم الانتشار الخلفي للأخطاء قاعدة السلسلة الرياضية لنقل تدرجات الخطأ عكسياً من طبقة الخسارة عبر الطبقات الخفية لتحديث أوزان الاتصالات العصبية.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Backpropagation uses the calculus chain rule to propagate error gradients backwards from the output loss layer through hidden layers to update synaptic connection weights.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يستخدم الانتشار الخلفي للأخطاء قاعدة السلسلة الرياضية لنقل تدرجات الخطأ عكسياً من طبقة الخسارة عبر الطبقات الخفية لتحديث أوزان الاتصالات العصبية.."
      ],
      "difficulty": "easy"
    }
  ],
  "medium": [
    {
      "id": "th_ai_data_science_ch2_med_1",
      "titleEn": "[MEDIUM] Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions - Analysis 1",
      "titleAr": "[مستوى متوسط] الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج - تحليل 1",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions, what is the precise analytical formulation or operative rule? (Item 1)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 1)",
      "optionsEn": [
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves."
      ],
      "optionsAr": [
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "تتسبب دوال التنشيط المشبعة كدالة سيجمويد (مشتقاتها $\\le 0.25$) في تلاشي التدرجات أسياً؛ واستبدالها بوحدات التقويم الخطي $\\text{ReLU}(z) = \\max(0, z)$ يحافظ على تدرج ثابت قدره 1 للمدخلات الموجبة.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية."
      ],
      "correctAnswer": "Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.",
      "correctAnswerEn": "Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.",
      "correctAnswerAr": "تتسبب دوال التنشيط المشبعة كدالة سيجمويد (مشتقاتها $\\le 0.25$) في تلاشي التدرجات أسياً؛ واستبدالها بوحدات التقويم الخطي $\\text{ReLU}(z) = \\max(0, z)$ يحافظ على تدرج ثابت قدره 1 للمدخلات الموجبة.",
      "correctIndex": 1,
      "explanationEn": "Analytical Derivation & Properties: Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تتسبب دوال التنشيط المشبعة كدالة سيجمويد (مشتقاتها $\\le 0.25$) في تلاشي التدرجات أسياً؛ واستبدالها بوحدات التقويم الخطي $\\text{ReLU}(z) = \\max(0, z)$ يحافظ على تدرج ثابت قدره 1 للمدخلات الموجبة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تتسبب دوال التنشيط المشبعة كدالة سيجمويد (مشتقاتها $\\le 0.25$) في تلاشي التدرجات أسياً؛ واستبدالها بوحدات التقويم الخطي $\\text{ReLU}(z) = \\max(0, z)$ يحافظ على تدرج ثابت قدره 1 للمدخلات الموجبة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch2_med_2",
      "titleEn": "[MEDIUM] Convolutional Layers, Pooling & ResNet Skip Connections - Analysis 2",
      "titleAr": "[مستوى متوسط] الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet - تحليل 2",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Convolutional Layers, Pooling & ResNet Skip Connections, what is the precise analytical formulation or operative rule? (Item 2)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 2)",
      "optionsEn": [
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "لحجم دخل $W$ ونواة $K$ وحشو $P$ وخطوة $S$، يكون بعد الخرج $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$؛ وتضيف شبكات ResNet مسارات هوية مباشرة $\\mathcal{F}(x) + x$ لتمرير التدرجات دون عوائق.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.",
      "correctAnswerEn": "Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.",
      "correctAnswerAr": "لحجم دخل $W$ ونواة $K$ وحشو $P$ وخطوة $S$، يكون بعد الخرج $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$؛ وتضيف شبكات ResNet مسارات هوية مباشرة $\\mathcal{F}(x) + x$ لتمرير التدرجات دون عوائق.",
      "correctIndex": 2,
      "explanationEn": "Analytical Derivation & Properties: Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: لحجم دخل $W$ ونواة $K$ وحشو $P$ وخطوة $S$، يكون بعد الخرج $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$؛ وتضيف شبكات ResNet مسارات هوية مباشرة $\\mathcal{F}(x) + x$ لتمرير التدرجات دون عوائق.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Convolutional Layers, Pooling & ResNet Skip Connections.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: لحجم دخل $W$ ونواة $K$ وحشو $P$ وخطوة $S$، يكون بعد الخرج $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$؛ وتضيف شبكات ResNet مسارات هوية مباشرة $\\mathcal{F}(x) + x$ لتمرير التدرجات دون عوائق.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch2_med_3",
      "titleEn": "[MEDIUM] Object Detection Pipelines, YOLO Architecture & IoU Metrics - Analysis 3",
      "titleAr": "[مستوى متوسط] خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU - تحليل 3",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Object Detection Pipelines, YOLO Architecture & IoU Metrics, what is the precise analytical formulation or operative rule? (Item 3)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 3)",
      "optionsEn": [
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category."
      ],
      "optionsAr": [
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "يقيس تقاطع الاتحاد (IoU) دقة تحديد صندوق الإحاطة بالعلاقة $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$، وتعتبر العينة إيجابية حقيقية إذا تجاوز IoU عتبة $0.50$ وتطابقت الفئة."
      ],
      "correctAnswer": "Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.",
      "correctAnswerEn": "Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.",
      "correctAnswerAr": "يقيس تقاطع الاتحاد (IoU) دقة تحديد صندوق الإحاطة بالعلاقة $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$، وتعتبر العينة إيجابية حقيقية إذا تجاوز IoU عتبة $0.50$ وتطابقت الفئة.",
      "correctIndex": 3,
      "explanationEn": "Analytical Derivation & Properties: Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يقيس تقاطع الاتحاد (IoU) دقة تحديد صندوق الإحاطة بالعلاقة $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$، وتعتبر العينة إيجابية حقيقية إذا تجاوز IoU عتبة $0.50$ وتطابقت الفئة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Object Detection Pipelines, YOLO Architecture & IoU Metrics.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يقيس تقاطع الاتحاد (IoU) دقة تحديد صندوق الإحاطة بالعلاقة $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$، وتعتبر العينة إيجابية حقيقية إذا تجاوز IoU عتبة $0.50$ وتطابقت الفئة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch2_med_4",
      "titleEn": "[MEDIUM] Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions - Analysis 4",
      "titleAr": "[مستوى متوسط] الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج - تحليل 4",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions, what is the precise analytical formulation or operative rule? (Item 4)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 4)",
      "optionsEn": [
        "Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent."
      ],
      "optionsAr": [
        "تتسبب دوال التنشيط المشبعة كدالة سيجمويد (مشتقاتها $\\le 0.25$) في تلاشي التدرجات أسياً؛ واستبدالها بوحدات التقويم الخطي $\\text{ReLU}(z) = \\max(0, z)$ يحافظ على تدرج ثابت قدره 1 للمدخلات الموجبة.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة."
      ],
      "correctAnswer": "Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.",
      "correctAnswerEn": "Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.",
      "correctAnswerAr": "تتسبب دوال التنشيط المشبعة كدالة سيجمويد (مشتقاتها $\\le 0.25$) في تلاشي التدرجات أسياً؛ واستبدالها بوحدات التقويم الخطي $\\text{ReLU}(z) = \\max(0, z)$ يحافظ على تدرج ثابت قدره 1 للمدخلات الموجبة.",
      "correctIndex": 0,
      "explanationEn": "Analytical Derivation & Properties: Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تتسبب دوال التنشيط المشبعة كدالة سيجمويد (مشتقاتها $\\le 0.25$) في تلاشي التدرجات أسياً؛ واستبدالها بوحدات التقويم الخطي $\\text{ReLU}(z) = \\max(0, z)$ يحافظ على تدرج ثابت قدره 1 للمدخلات الموجبة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تتسبب دوال التنشيط المشبعة كدالة سيجمويد (مشتقاتها $\\le 0.25$) في تلاشي التدرجات أسياً؛ واستبدالها بوحدات التقويم الخطي $\\text{ReLU}(z) = \\max(0, z)$ يحافظ على تدرج ثابت قدره 1 للمدخلات الموجبة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch2_med_5",
      "titleEn": "[MEDIUM] Convolutional Layers, Pooling & ResNet Skip Connections - Analysis 5",
      "titleAr": "[مستوى متوسط] الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet - تحليل 5",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Convolutional Layers, Pooling & ResNet Skip Connections, what is the precise analytical formulation or operative rule? (Item 5)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 5)",
      "optionsEn": [
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "لحجم دخل $W$ ونواة $K$ وحشو $P$ وخطوة $S$، يكون بعد الخرج $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$؛ وتضيف شبكات ResNet مسارات هوية مباشرة $\\mathcal{F}(x) + x$ لتمرير التدرجات دون عوائق.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.",
      "correctAnswerEn": "Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.",
      "correctAnswerAr": "لحجم دخل $W$ ونواة $K$ وحشو $P$ وخطوة $S$، يكون بعد الخرج $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$؛ وتضيف شبكات ResNet مسارات هوية مباشرة $\\mathcal{F}(x) + x$ لتمرير التدرجات دون عوائق.",
      "correctIndex": 1,
      "explanationEn": "Analytical Derivation & Properties: Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: لحجم دخل $W$ ونواة $K$ وحشو $P$ وخطوة $S$، يكون بعد الخرج $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$؛ وتضيف شبكات ResNet مسارات هوية مباشرة $\\mathcal{F}(x) + x$ لتمرير التدرجات دون عوائق.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Convolutional Layers, Pooling & ResNet Skip Connections.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: لحجم دخل $W$ ونواة $K$ وحشو $P$ وخطوة $S$، يكون بعد الخرج $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$؛ وتضيف شبكات ResNet مسارات هوية مباشرة $\\mathcal{F}(x) + x$ لتمرير التدرجات دون عوائق.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch2_med_6",
      "titleEn": "[MEDIUM] Object Detection Pipelines, YOLO Architecture & IoU Metrics - Analysis 6",
      "titleAr": "[مستوى متوسط] خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU - تحليل 6",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Object Detection Pipelines, YOLO Architecture & IoU Metrics, what is the precise analytical formulation or operative rule? (Item 6)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 6)",
      "optionsEn": [
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step."
      ],
      "optionsAr": [
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "يقيس تقاطع الاتحاد (IoU) دقة تحديد صندوق الإحاطة بالعلاقة $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$، وتعتبر العينة إيجابية حقيقية إذا تجاوز IoU عتبة $0.50$ وتطابقت الفئة.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين."
      ],
      "correctAnswer": "Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.",
      "correctAnswerEn": "Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.",
      "correctAnswerAr": "يقيس تقاطع الاتحاد (IoU) دقة تحديد صندوق الإحاطة بالعلاقة $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$، وتعتبر العينة إيجابية حقيقية إذا تجاوز IoU عتبة $0.50$ وتطابقت الفئة.",
      "correctIndex": 2,
      "explanationEn": "Analytical Derivation & Properties: Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يقيس تقاطع الاتحاد (IoU) دقة تحديد صندوق الإحاطة بالعلاقة $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$، وتعتبر العينة إيجابية حقيقية إذا تجاوز IoU عتبة $0.50$ وتطابقت الفئة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Object Detection Pipelines, YOLO Architecture & IoU Metrics.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يقيس تقاطع الاتحاد (IoU) دقة تحديد صندوق الإحاطة بالعلاقة $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$، وتعتبر العينة إيجابية حقيقية إذا تجاوز IoU عتبة $0.50$ وتطابقت الفئة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch2_med_7",
      "titleEn": "[MEDIUM] Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions - Analysis 7",
      "titleAr": "[مستوى متوسط] الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج - تحليل 7",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions, what is the precise analytical formulation or operative rule? (Item 7)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 7)",
      "optionsEn": [
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations."
      ],
      "optionsAr": [
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "تتسبب دوال التنشيط المشبعة كدالة سيجمويد (مشتقاتها $\\le 0.25$) في تلاشي التدرجات أسياً؛ واستبدالها بوحدات التقويم الخطي $\\text{ReLU}(z) = \\max(0, z)$ يحافظ على تدرج ثابت قدره 1 للمدخلات الموجبة."
      ],
      "correctAnswer": "Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.",
      "correctAnswerEn": "Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.",
      "correctAnswerAr": "تتسبب دوال التنشيط المشبعة كدالة سيجمويد (مشتقاتها $\\le 0.25$) في تلاشي التدرجات أسياً؛ واستبدالها بوحدات التقويم الخطي $\\text{ReLU}(z) = \\max(0, z)$ يحافظ على تدرج ثابت قدره 1 للمدخلات الموجبة.",
      "correctIndex": 3,
      "explanationEn": "Analytical Derivation & Properties: Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تتسبب دوال التنشيط المشبعة كدالة سيجمويد (مشتقاتها $\\le 0.25$) في تلاشي التدرجات أسياً؛ واستبدالها بوحدات التقويم الخطي $\\text{ReLU}(z) = \\max(0, z)$ يحافظ على تدرج ثابت قدره 1 للمدخلات الموجبة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تتسبب دوال التنشيط المشبعة كدالة سيجمويد (مشتقاتها $\\le 0.25$) في تلاشي التدرجات أسياً؛ واستبدالها بوحدات التقويم الخطي $\\text{ReLU}(z) = \\max(0, z)$ يحافظ على تدرج ثابت قدره 1 للمدخلات الموجبة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch2_med_8",
      "titleEn": "[MEDIUM] Convolutional Layers, Pooling & ResNet Skip Connections - Analysis 8",
      "titleAr": "[مستوى متوسط] الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet - تحليل 8",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Convolutional Layers, Pooling & ResNet Skip Connections, what is the precise analytical formulation or operative rule? (Item 8)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 8)",
      "optionsEn": [
        "Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.",
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "لحجم دخل $W$ ونواة $K$ وحشو $P$ وخطوة $S$، يكون بعد الخرج $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$؛ وتضيف شبكات ResNet مسارات هوية مباشرة $\\mathcal{F}(x) + x$ لتمرير التدرجات دون عوائق.",
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.",
      "correctAnswerEn": "Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.",
      "correctAnswerAr": "لحجم دخل $W$ ونواة $K$ وحشو $P$ وخطوة $S$، يكون بعد الخرج $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$؛ وتضيف شبكات ResNet مسارات هوية مباشرة $\\mathcal{F}(x) + x$ لتمرير التدرجات دون عوائق.",
      "correctIndex": 0,
      "explanationEn": "Analytical Derivation & Properties: Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: لحجم دخل $W$ ونواة $K$ وحشو $P$ وخطوة $S$، يكون بعد الخرج $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$؛ وتضيف شبكات ResNet مسارات هوية مباشرة $\\mathcal{F}(x) + x$ لتمرير التدرجات دون عوائق.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Convolutional Layers, Pooling & ResNet Skip Connections.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: لحجم دخل $W$ ونواة $K$ وحشو $P$ وخطوة $S$، يكون بعد الخرج $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$؛ وتضيف شبكات ResNet مسارات هوية مباشرة $\\mathcal{F}(x) + x$ لتمرير التدرجات دون عوائق.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch2_med_9",
      "titleEn": "[MEDIUM] Object Detection Pipelines, YOLO Architecture & IoU Metrics - Analysis 9",
      "titleAr": "[مستوى متوسط] خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU - تحليل 9",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Object Detection Pipelines, YOLO Architecture & IoU Metrics, what is the precise analytical formulation or operative rule? (Item 9)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 9)",
      "optionsEn": [
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.",
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs."
      ],
      "optionsAr": [
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "يقيس تقاطع الاتحاد (IoU) دقة تحديد صندوق الإحاطة بالعلاقة $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$، وتعتبر العينة إيجابية حقيقية إذا تجاوز IoU عتبة $0.50$ وتطابقت الفئة.",
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة."
      ],
      "correctAnswer": "Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.",
      "correctAnswerEn": "Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.",
      "correctAnswerAr": "يقيس تقاطع الاتحاد (IoU) دقة تحديد صندوق الإحاطة بالعلاقة $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$، وتعتبر العينة إيجابية حقيقية إذا تجاوز IoU عتبة $0.50$ وتطابقت الفئة.",
      "correctIndex": 1,
      "explanationEn": "Analytical Derivation & Properties: Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يقيس تقاطع الاتحاد (IoU) دقة تحديد صندوق الإحاطة بالعلاقة $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$، وتعتبر العينة إيجابية حقيقية إذا تجاوز IoU عتبة $0.50$ وتطابقت الفئة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Object Detection Pipelines, YOLO Architecture & IoU Metrics.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يقيس تقاطع الاتحاد (IoU) دقة تحديد صندوق الإحاطة بالعلاقة $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$، وتعتبر العينة إيجابية حقيقية إذا تجاوز IoU عتبة $0.50$ وتطابقت الفئة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch2_med_10",
      "titleEn": "[MEDIUM] Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions - Analysis 10",
      "titleAr": "[مستوى متوسط] الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج - تحليل 10",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions, what is the precise analytical formulation or operative rule? (Item 10)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 10)",
      "optionsEn": [
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.",
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence."
      ],
      "optionsAr": [
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "تتسبب دوال التنشيط المشبعة كدالة سيجمويد (مشتقاتها $\\le 0.25$) في تلاشي التدرجات أسياً؛ واستبدالها بوحدات التقويم الخطي $\\text{ReLU}(z) = \\max(0, z)$ يحافظ على تدرج ثابت قدره 1 للمدخلات الموجبة.",
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية."
      ],
      "correctAnswer": "Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.",
      "correctAnswerEn": "Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.",
      "correctAnswerAr": "تتسبب دوال التنشيط المشبعة كدالة سيجمويد (مشتقاتها $\\le 0.25$) في تلاشي التدرجات أسياً؛ واستبدالها بوحدات التقويم الخطي $\\text{ReLU}(z) = \\max(0, z)$ يحافظ على تدرج ثابت قدره 1 للمدخلات الموجبة.",
      "correctIndex": 2,
      "explanationEn": "Analytical Derivation & Properties: Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تتسبب دوال التنشيط المشبعة كدالة سيجمويد (مشتقاتها $\\le 0.25$) في تلاشي التدرجات أسياً؛ واستبدالها بوحدات التقويم الخطي $\\text{ReLU}(z) = \\max(0, z)$ يحافظ على تدرج ثابت قدره 1 للمدخلات الموجبة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تتسبب دوال التنشيط المشبعة كدالة سيجمويد (مشتقاتها $\\le 0.25$) في تلاشي التدرجات أسياً؛ واستبدالها بوحدات التقويم الخطي $\\text{ReLU}(z) = \\max(0, z)$ يحافظ على تدرج ثابت قدره 1 للمدخلات الموجبة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch2_med_11",
      "titleEn": "[MEDIUM] Convolutional Layers, Pooling & ResNet Skip Connections - Analysis 11",
      "titleAr": "[مستوى متوسط] الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet - تحليل 11",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Convolutional Layers, Pooling & ResNet Skip Connections, what is the precise analytical formulation or operative rule? (Item 11)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 11)",
      "optionsEn": [
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations."
      ],
      "optionsAr": [
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "لحجم دخل $W$ ونواة $K$ وحشو $P$ وخطوة $S$، يكون بعد الخرج $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$؛ وتضيف شبكات ResNet مسارات هوية مباشرة $\\mathcal{F}(x) + x$ لتمرير التدرجات دون عوائق."
      ],
      "correctAnswer": "Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.",
      "correctAnswerEn": "Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.",
      "correctAnswerAr": "لحجم دخل $W$ ونواة $K$ وحشو $P$ وخطوة $S$، يكون بعد الخرج $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$؛ وتضيف شبكات ResNet مسارات هوية مباشرة $\\mathcal{F}(x) + x$ لتمرير التدرجات دون عوائق.",
      "correctIndex": 3,
      "explanationEn": "Analytical Derivation & Properties: Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: لحجم دخل $W$ ونواة $K$ وحشو $P$ وخطوة $S$، يكون بعد الخرج $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$؛ وتضيف شبكات ResNet مسارات هوية مباشرة $\\mathcal{F}(x) + x$ لتمرير التدرجات دون عوائق.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Convolutional Layers, Pooling & ResNet Skip Connections.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: لحجم دخل $W$ ونواة $K$ وحشو $P$ وخطوة $S$، يكون بعد الخرج $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$؛ وتضيف شبكات ResNet مسارات هوية مباشرة $\\mathcal{F}(x) + x$ لتمرير التدرجات دون عوائق.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch2_med_12",
      "titleEn": "[MEDIUM] Object Detection Pipelines, YOLO Architecture & IoU Metrics - Analysis 12",
      "titleAr": "[مستوى متوسط] خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU - تحليل 12",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Object Detection Pipelines, YOLO Architecture & IoU Metrics, what is the precise analytical formulation or operative rule? (Item 12)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 12)",
      "optionsEn": [
        "Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data."
      ],
      "optionsAr": [
        "يقيس تقاطع الاتحاد (IoU) دقة تحديد صندوق الإحاطة بالعلاقة $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$، وتعتبر العينة إيجابية حقيقية إذا تجاوز IoU عتبة $0.50$ وتطابقت الفئة.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش."
      ],
      "correctAnswer": "Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.",
      "correctAnswerEn": "Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.",
      "correctAnswerAr": "يقيس تقاطع الاتحاد (IoU) دقة تحديد صندوق الإحاطة بالعلاقة $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$، وتعتبر العينة إيجابية حقيقية إذا تجاوز IoU عتبة $0.50$ وتطابقت الفئة.",
      "correctIndex": 0,
      "explanationEn": "Analytical Derivation & Properties: Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يقيس تقاطع الاتحاد (IoU) دقة تحديد صندوق الإحاطة بالعلاقة $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$، وتعتبر العينة إيجابية حقيقية إذا تجاوز IoU عتبة $0.50$ وتطابقت الفئة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Object Detection Pipelines, YOLO Architecture & IoU Metrics.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يقيس تقاطع الاتحاد (IoU) دقة تحديد صندوق الإحاطة بالعلاقة $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$، وتعتبر العينة إيجابية حقيقية إذا تجاوز IoU عتبة $0.50$ وتطابقت الفئة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch2_med_13",
      "titleEn": "[MEDIUM] Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions - Analysis 13",
      "titleAr": "[مستوى متوسط] الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج - تحليل 13",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions, what is the precise analytical formulation or operative rule? (Item 13)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 13)",
      "optionsEn": [
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan."
      ],
      "optionsAr": [
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تتسبب دوال التنشيط المشبعة كدالة سيجمويد (مشتقاتها $\\le 0.25$) في تلاشي التدرجات أسياً؛ واستبدالها بوحدات التقويم الخطي $\\text{ReLU}(z) = \\max(0, z)$ يحافظ على تدرج ثابت قدره 1 للمدخلات الموجبة.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG)."
      ],
      "correctAnswer": "Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.",
      "correctAnswerEn": "Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.",
      "correctAnswerAr": "تتسبب دوال التنشيط المشبعة كدالة سيجمويد (مشتقاتها $\\le 0.25$) في تلاشي التدرجات أسياً؛ واستبدالها بوحدات التقويم الخطي $\\text{ReLU}(z) = \\max(0, z)$ يحافظ على تدرج ثابت قدره 1 للمدخلات الموجبة.",
      "correctIndex": 1,
      "explanationEn": "Analytical Derivation & Properties: Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تتسبب دوال التنشيط المشبعة كدالة سيجمويد (مشتقاتها $\\le 0.25$) في تلاشي التدرجات أسياً؛ واستبدالها بوحدات التقويم الخطي $\\text{ReLU}(z) = \\max(0, z)$ يحافظ على تدرج ثابت قدره 1 للمدخلات الموجبة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تتسبب دوال التنشيط المشبعة كدالة سيجمويد (مشتقاتها $\\le 0.25$) في تلاشي التدرجات أسياً؛ واستبدالها بوحدات التقويم الخطي $\\text{ReLU}(z) = \\max(0, z)$ يحافظ على تدرج ثابت قدره 1 للمدخلات الموجبة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch2_med_14",
      "titleEn": "[MEDIUM] Convolutional Layers, Pooling & ResNet Skip Connections - Analysis 14",
      "titleAr": "[مستوى متوسط] الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet - تحليل 14",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Convolutional Layers, Pooling & ResNet Skip Connections, what is the precise analytical formulation or operative rule? (Item 14)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 14)",
      "optionsEn": [
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "لحجم دخل $W$ ونواة $K$ وحشو $P$ وخطوة $S$، يكون بعد الخرج $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$؛ وتضيف شبكات ResNet مسارات هوية مباشرة $\\mathcal{F}(x) + x$ لتمرير التدرجات دون عوائق.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.",
      "correctAnswerEn": "Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.",
      "correctAnswerAr": "لحجم دخل $W$ ونواة $K$ وحشو $P$ وخطوة $S$، يكون بعد الخرج $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$؛ وتضيف شبكات ResNet مسارات هوية مباشرة $\\mathcal{F}(x) + x$ لتمرير التدرجات دون عوائق.",
      "correctIndex": 2,
      "explanationEn": "Analytical Derivation & Properties: Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: لحجم دخل $W$ ونواة $K$ وحشو $P$ وخطوة $S$، يكون بعد الخرج $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$؛ وتضيف شبكات ResNet مسارات هوية مباشرة $\\mathcal{F}(x) + x$ لتمرير التدرجات دون عوائق.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Convolutional Layers, Pooling & ResNet Skip Connections.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: لحجم دخل $W$ ونواة $K$ وحشو $P$ وخطوة $S$، يكون بعد الخرج $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$؛ وتضيف شبكات ResNet مسارات هوية مباشرة $\\mathcal{F}(x) + x$ لتمرير التدرجات دون عوائق.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch2_med_15",
      "titleEn": "[MEDIUM] Object Detection Pipelines, YOLO Architecture & IoU Metrics - Analysis 15",
      "titleAr": "[مستوى متوسط] خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU - تحليل 15",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Object Detection Pipelines, YOLO Architecture & IoU Metrics, what is the precise analytical formulation or operative rule? (Item 15)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 15)",
      "optionsEn": [
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category."
      ],
      "optionsAr": [
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يقيس تقاطع الاتحاد (IoU) دقة تحديد صندوق الإحاطة بالعلاقة $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$، وتعتبر العينة إيجابية حقيقية إذا تجاوز IoU عتبة $0.50$ وتطابقت الفئة."
      ],
      "correctAnswer": "Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.",
      "correctAnswerEn": "Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.",
      "correctAnswerAr": "يقيس تقاطع الاتحاد (IoU) دقة تحديد صندوق الإحاطة بالعلاقة $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$، وتعتبر العينة إيجابية حقيقية إذا تجاوز IoU عتبة $0.50$ وتطابقت الفئة.",
      "correctIndex": 3,
      "explanationEn": "Analytical Derivation & Properties: Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يقيس تقاطع الاتحاد (IoU) دقة تحديد صندوق الإحاطة بالعلاقة $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$، وتعتبر العينة إيجابية حقيقية إذا تجاوز IoU عتبة $0.50$ وتطابقت الفئة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Object Detection Pipelines, YOLO Architecture & IoU Metrics.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يقيس تقاطع الاتحاد (IoU) دقة تحديد صندوق الإحاطة بالعلاقة $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$، وتعتبر العينة إيجابية حقيقية إذا تجاوز IoU عتبة $0.50$ وتطابقت الفئة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch2_med_16",
      "titleEn": "[MEDIUM] Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions - Analysis 16",
      "titleAr": "[مستوى متوسط] الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج - تحليل 16",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions, what is the precise analytical formulation or operative rule? (Item 16)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 16)",
      "optionsEn": [
        "Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves."
      ],
      "optionsAr": [
        "تتسبب دوال التنشيط المشبعة كدالة سيجمويد (مشتقاتها $\\le 0.25$) في تلاشي التدرجات أسياً؛ واستبدالها بوحدات التقويم الخطي $\\text{ReLU}(z) = \\max(0, z)$ يحافظ على تدرج ثابت قدره 1 للمدخلات الموجبة.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية."
      ],
      "correctAnswer": "Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.",
      "correctAnswerEn": "Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.",
      "correctAnswerAr": "تتسبب دوال التنشيط المشبعة كدالة سيجمويد (مشتقاتها $\\le 0.25$) في تلاشي التدرجات أسياً؛ واستبدالها بوحدات التقويم الخطي $\\text{ReLU}(z) = \\max(0, z)$ يحافظ على تدرج ثابت قدره 1 للمدخلات الموجبة.",
      "correctIndex": 0,
      "explanationEn": "Analytical Derivation & Properties: Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تتسبب دوال التنشيط المشبعة كدالة سيجمويد (مشتقاتها $\\le 0.25$) في تلاشي التدرجات أسياً؛ واستبدالها بوحدات التقويم الخطي $\\text{ReLU}(z) = \\max(0, z)$ يحافظ على تدرج ثابت قدره 1 للمدخلات الموجبة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تتسبب دوال التنشيط المشبعة كدالة سيجمويد (مشتقاتها $\\le 0.25$) في تلاشي التدرجات أسياً؛ واستبدالها بوحدات التقويم الخطي $\\text{ReLU}(z) = \\max(0, z)$ يحافظ على تدرج ثابت قدره 1 للمدخلات الموجبة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch2_med_17",
      "titleEn": "[MEDIUM] Convolutional Layers, Pooling & ResNet Skip Connections - Analysis 17",
      "titleAr": "[مستوى متوسط] الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet - تحليل 17",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Convolutional Layers, Pooling & ResNet Skip Connections, what is the precise analytical formulation or operative rule? (Item 17)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 17)",
      "optionsEn": [
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "لحجم دخل $W$ ونواة $K$ وحشو $P$ وخطوة $S$، يكون بعد الخرج $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$؛ وتضيف شبكات ResNet مسارات هوية مباشرة $\\mathcal{F}(x) + x$ لتمرير التدرجات دون عوائق.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.",
      "correctAnswerEn": "Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.",
      "correctAnswerAr": "لحجم دخل $W$ ونواة $K$ وحشو $P$ وخطوة $S$، يكون بعد الخرج $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$؛ وتضيف شبكات ResNet مسارات هوية مباشرة $\\mathcal{F}(x) + x$ لتمرير التدرجات دون عوائق.",
      "correctIndex": 1,
      "explanationEn": "Analytical Derivation & Properties: Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: لحجم دخل $W$ ونواة $K$ وحشو $P$ وخطوة $S$، يكون بعد الخرج $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$؛ وتضيف شبكات ResNet مسارات هوية مباشرة $\\mathcal{F}(x) + x$ لتمرير التدرجات دون عوائق.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Convolutional Layers, Pooling & ResNet Skip Connections.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: لحجم دخل $W$ ونواة $K$ وحشو $P$ وخطوة $S$، يكون بعد الخرج $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$؛ وتضيف شبكات ResNet مسارات هوية مباشرة $\\mathcal{F}(x) + x$ لتمرير التدرجات دون عوائق.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch2_med_18",
      "titleEn": "[MEDIUM] Object Detection Pipelines, YOLO Architecture & IoU Metrics - Analysis 18",
      "titleAr": "[مستوى متوسط] خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU - تحليل 18",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Object Detection Pipelines, YOLO Architecture & IoU Metrics, what is the precise analytical formulation or operative rule? (Item 18)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 18)",
      "optionsEn": [
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation."
      ],
      "optionsAr": [
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "يقيس تقاطع الاتحاد (IoU) دقة تحديد صندوق الإحاطة بالعلاقة $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$، وتعتبر العينة إيجابية حقيقية إذا تجاوز IoU عتبة $0.50$ وتطابقت الفئة.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي."
      ],
      "correctAnswer": "Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.",
      "correctAnswerEn": "Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.",
      "correctAnswerAr": "يقيس تقاطع الاتحاد (IoU) دقة تحديد صندوق الإحاطة بالعلاقة $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$، وتعتبر العينة إيجابية حقيقية إذا تجاوز IoU عتبة $0.50$ وتطابقت الفئة.",
      "correctIndex": 2,
      "explanationEn": "Analytical Derivation & Properties: Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يقيس تقاطع الاتحاد (IoU) دقة تحديد صندوق الإحاطة بالعلاقة $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$، وتعتبر العينة إيجابية حقيقية إذا تجاوز IoU عتبة $0.50$ وتطابقت الفئة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Object Detection Pipelines, YOLO Architecture & IoU Metrics.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يقيس تقاطع الاتحاد (IoU) دقة تحديد صندوق الإحاطة بالعلاقة $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$، وتعتبر العينة إيجابية حقيقية إذا تجاوز IoU عتبة $0.50$ وتطابقت الفئة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch2_med_19",
      "titleEn": "[MEDIUM] Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions - Analysis 19",
      "titleAr": "[مستوى متوسط] الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج - تحليل 19",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions, what is the precise analytical formulation or operative rule? (Item 19)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 19)",
      "optionsEn": [
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations."
      ],
      "optionsAr": [
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "تتسبب دوال التنشيط المشبعة كدالة سيجمويد (مشتقاتها $\\le 0.25$) في تلاشي التدرجات أسياً؛ واستبدالها بوحدات التقويم الخطي $\\text{ReLU}(z) = \\max(0, z)$ يحافظ على تدرج ثابت قدره 1 للمدخلات الموجبة."
      ],
      "correctAnswer": "Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.",
      "correctAnswerEn": "Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.",
      "correctAnswerAr": "تتسبب دوال التنشيط المشبعة كدالة سيجمويد (مشتقاتها $\\le 0.25$) في تلاشي التدرجات أسياً؛ واستبدالها بوحدات التقويم الخطي $\\text{ReLU}(z) = \\max(0, z)$ يحافظ على تدرج ثابت قدره 1 للمدخلات الموجبة.",
      "correctIndex": 3,
      "explanationEn": "Analytical Derivation & Properties: Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تتسبب دوال التنشيط المشبعة كدالة سيجمويد (مشتقاتها $\\le 0.25$) في تلاشي التدرجات أسياً؛ واستبدالها بوحدات التقويم الخطي $\\text{ReLU}(z) = \\max(0, z)$ يحافظ على تدرج ثابت قدره 1 للمدخلات الموجبة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تتسبب دوال التنشيط المشبعة كدالة سيجمويد (مشتقاتها $\\le 0.25$) في تلاشي التدرجات أسياً؛ واستبدالها بوحدات التقويم الخطي $\\text{ReLU}(z) = \\max(0, z)$ يحافظ على تدرج ثابت قدره 1 للمدخلات الموجبة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch2_med_20",
      "titleEn": "[MEDIUM] Convolutional Layers, Pooling & ResNet Skip Connections - Analysis 20",
      "titleAr": "[مستوى متوسط] الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet - تحليل 20",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Convolutional Layers, Pooling & ResNet Skip Connections, what is the precise analytical formulation or operative rule? (Item 20)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 20)",
      "optionsEn": [
        "Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.",
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "لحجم دخل $W$ ونواة $K$ وحشو $P$ وخطوة $S$، يكون بعد الخرج $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$؛ وتضيف شبكات ResNet مسارات هوية مباشرة $\\mathcal{F}(x) + x$ لتمرير التدرجات دون عوائق.",
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.",
      "correctAnswerEn": "Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.",
      "correctAnswerAr": "لحجم دخل $W$ ونواة $K$ وحشو $P$ وخطوة $S$، يكون بعد الخرج $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$؛ وتضيف شبكات ResNet مسارات هوية مباشرة $\\mathcal{F}(x) + x$ لتمرير التدرجات دون عوائق.",
      "correctIndex": 0,
      "explanationEn": "Analytical Derivation & Properties: Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: لحجم دخل $W$ ونواة $K$ وحشو $P$ وخطوة $S$، يكون بعد الخرج $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$؛ وتضيف شبكات ResNet مسارات هوية مباشرة $\\mathcal{F}(x) + x$ لتمرير التدرجات دون عوائق.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Convolutional Layers, Pooling & ResNet Skip Connections.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: لحجم دخل $W$ ونواة $K$ وحشو $P$ وخطوة $S$، يكون بعد الخرج $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$؛ وتضيف شبكات ResNet مسارات هوية مباشرة $\\mathcal{F}(x) + x$ لتمرير التدرجات دون عوائق.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch2_med_21",
      "titleEn": "[MEDIUM] Object Detection Pipelines, YOLO Architecture & IoU Metrics - Analysis 21",
      "titleAr": "[مستوى متوسط] خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU - تحليل 21",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Object Detection Pipelines, YOLO Architecture & IoU Metrics, what is the precise analytical formulation or operative rule? (Item 21)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 21)",
      "optionsEn": [
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.",
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step."
      ],
      "optionsAr": [
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "يقيس تقاطع الاتحاد (IoU) دقة تحديد صندوق الإحاطة بالعلاقة $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$، وتعتبر العينة إيجابية حقيقية إذا تجاوز IoU عتبة $0.50$ وتطابقت الفئة.",
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين."
      ],
      "correctAnswer": "Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.",
      "correctAnswerEn": "Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.",
      "correctAnswerAr": "يقيس تقاطع الاتحاد (IoU) دقة تحديد صندوق الإحاطة بالعلاقة $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$، وتعتبر العينة إيجابية حقيقية إذا تجاوز IoU عتبة $0.50$ وتطابقت الفئة.",
      "correctIndex": 1,
      "explanationEn": "Analytical Derivation & Properties: Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يقيس تقاطع الاتحاد (IoU) دقة تحديد صندوق الإحاطة بالعلاقة $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$، وتعتبر العينة إيجابية حقيقية إذا تجاوز IoU عتبة $0.50$ وتطابقت الفئة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Object Detection Pipelines, YOLO Architecture & IoU Metrics.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يقيس تقاطع الاتحاد (IoU) دقة تحديد صندوق الإحاطة بالعلاقة $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$، وتعتبر العينة إيجابية حقيقية إذا تجاوز IoU عتبة $0.50$ وتطابقت الفئة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch2_med_22",
      "titleEn": "[MEDIUM] Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions - Analysis 22",
      "titleAr": "[مستوى متوسط] الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج - تحليل 22",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions, what is the precise analytical formulation or operative rule? (Item 22)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 22)",
      "optionsEn": [
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.",
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance."
      ],
      "optionsAr": [
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "تتسبب دوال التنشيط المشبعة كدالة سيجمويد (مشتقاتها $\\le 0.25$) في تلاشي التدرجات أسياً؛ واستبدالها بوحدات التقويم الخطي $\\text{ReLU}(z) = \\max(0, z)$ يحافظ على تدرج ثابت قدره 1 للمدخلات الموجبة.",
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر."
      ],
      "correctAnswer": "Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.",
      "correctAnswerEn": "Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.",
      "correctAnswerAr": "تتسبب دوال التنشيط المشبعة كدالة سيجمويد (مشتقاتها $\\le 0.25$) في تلاشي التدرجات أسياً؛ واستبدالها بوحدات التقويم الخطي $\\text{ReLU}(z) = \\max(0, z)$ يحافظ على تدرج ثابت قدره 1 للمدخلات الموجبة.",
      "correctIndex": 2,
      "explanationEn": "Analytical Derivation & Properties: Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تتسبب دوال التنشيط المشبعة كدالة سيجمويد (مشتقاتها $\\le 0.25$) في تلاشي التدرجات أسياً؛ واستبدالها بوحدات التقويم الخطي $\\text{ReLU}(z) = \\max(0, z)$ يحافظ على تدرج ثابت قدره 1 للمدخلات الموجبة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تتسبب دوال التنشيط المشبعة كدالة سيجمويد (مشتقاتها $\\le 0.25$) في تلاشي التدرجات أسياً؛ واستبدالها بوحدات التقويم الخطي $\\text{ReLU}(z) = \\max(0, z)$ يحافظ على تدرج ثابت قدره 1 للمدخلات الموجبة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch2_med_23",
      "titleEn": "[MEDIUM] Convolutional Layers, Pooling & ResNet Skip Connections - Analysis 23",
      "titleAr": "[مستوى متوسط] الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet - تحليل 23",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Convolutional Layers, Pooling & ResNet Skip Connections, what is the precise analytical formulation or operative rule? (Item 23)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 23)",
      "optionsEn": [
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations."
      ],
      "optionsAr": [
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "لحجم دخل $W$ ونواة $K$ وحشو $P$ وخطوة $S$، يكون بعد الخرج $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$؛ وتضيف شبكات ResNet مسارات هوية مباشرة $\\mathcal{F}(x) + x$ لتمرير التدرجات دون عوائق."
      ],
      "correctAnswer": "Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.",
      "correctAnswerEn": "Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.",
      "correctAnswerAr": "لحجم دخل $W$ ونواة $K$ وحشو $P$ وخطوة $S$، يكون بعد الخرج $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$؛ وتضيف شبكات ResNet مسارات هوية مباشرة $\\mathcal{F}(x) + x$ لتمرير التدرجات دون عوائق.",
      "correctIndex": 3,
      "explanationEn": "Analytical Derivation & Properties: Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: لحجم دخل $W$ ونواة $K$ وحشو $P$ وخطوة $S$، يكون بعد الخرج $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$؛ وتضيف شبكات ResNet مسارات هوية مباشرة $\\mathcal{F}(x) + x$ لتمرير التدرجات دون عوائق.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Convolutional Layers, Pooling & ResNet Skip Connections.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: لحجم دخل $W$ ونواة $K$ وحشو $P$ وخطوة $S$، يكون بعد الخرج $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$؛ وتضيف شبكات ResNet مسارات هوية مباشرة $\\mathcal{F}(x) + x$ لتمرير التدرجات دون عوائق.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch2_med_24",
      "titleEn": "[MEDIUM] Object Detection Pipelines, YOLO Architecture & IoU Metrics - Analysis 24",
      "titleAr": "[مستوى متوسط] خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU - تحليل 24",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Object Detection Pipelines, YOLO Architecture & IoU Metrics, what is the precise analytical formulation or operative rule? (Item 24)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 24)",
      "optionsEn": [
        "Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs."
      ],
      "optionsAr": [
        "يقيس تقاطع الاتحاد (IoU) دقة تحديد صندوق الإحاطة بالعلاقة $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$، وتعتبر العينة إيجابية حقيقية إذا تجاوز IoU عتبة $0.50$ وتطابقت الفئة.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة."
      ],
      "correctAnswer": "Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.",
      "correctAnswerEn": "Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.",
      "correctAnswerAr": "يقيس تقاطع الاتحاد (IoU) دقة تحديد صندوق الإحاطة بالعلاقة $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$، وتعتبر العينة إيجابية حقيقية إذا تجاوز IoU عتبة $0.50$ وتطابقت الفئة.",
      "correctIndex": 0,
      "explanationEn": "Analytical Derivation & Properties: Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يقيس تقاطع الاتحاد (IoU) دقة تحديد صندوق الإحاطة بالعلاقة $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$، وتعتبر العينة إيجابية حقيقية إذا تجاوز IoU عتبة $0.50$ وتطابقت الفئة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Object Detection Pipelines, YOLO Architecture & IoU Metrics.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يقيس تقاطع الاتحاد (IoU) دقة تحديد صندوق الإحاطة بالعلاقة $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$، وتعتبر العينة إيجابية حقيقية إذا تجاوز IoU عتبة $0.50$ وتطابقت الفئة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch2_med_25",
      "titleEn": "[MEDIUM] Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions - Analysis 25",
      "titleAr": "[مستوى متوسط] الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج - تحليل 25",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions, what is the precise analytical formulation or operative rule? (Item 25)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 25)",
      "optionsEn": [
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence."
      ],
      "optionsAr": [
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتسبب دوال التنشيط المشبعة كدالة سيجمويد (مشتقاتها $\\le 0.25$) في تلاشي التدرجات أسياً؛ واستبدالها بوحدات التقويم الخطي $\\text{ReLU}(z) = \\max(0, z)$ يحافظ على تدرج ثابت قدره 1 للمدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية."
      ],
      "correctAnswer": "Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.",
      "correctAnswerEn": "Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.",
      "correctAnswerAr": "تتسبب دوال التنشيط المشبعة كدالة سيجمويد (مشتقاتها $\\le 0.25$) في تلاشي التدرجات أسياً؛ واستبدالها بوحدات التقويم الخطي $\\text{ReLU}(z) = \\max(0, z)$ يحافظ على تدرج ثابت قدره 1 للمدخلات الموجبة.",
      "correctIndex": 1,
      "explanationEn": "Analytical Derivation & Properties: Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تتسبب دوال التنشيط المشبعة كدالة سيجمويد (مشتقاتها $\\le 0.25$) في تلاشي التدرجات أسياً؛ واستبدالها بوحدات التقويم الخطي $\\text{ReLU}(z) = \\max(0, z)$ يحافظ على تدرج ثابت قدره 1 للمدخلات الموجبة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تتسبب دوال التنشيط المشبعة كدالة سيجمويد (مشتقاتها $\\le 0.25$) في تلاشي التدرجات أسياً؛ واستبدالها بوحدات التقويم الخطي $\\text{ReLU}(z) = \\max(0, z)$ يحافظ على تدرج ثابت قدره 1 للمدخلات الموجبة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch2_med_26",
      "titleEn": "[MEDIUM] Convolutional Layers, Pooling & ResNet Skip Connections - Analysis 26",
      "titleAr": "[مستوى متوسط] الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet - تحليل 26",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Convolutional Layers, Pooling & ResNet Skip Connections, what is the precise analytical formulation or operative rule? (Item 26)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 26)",
      "optionsEn": [
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "لحجم دخل $W$ ونواة $K$ وحشو $P$ وخطوة $S$، يكون بعد الخرج $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$؛ وتضيف شبكات ResNet مسارات هوية مباشرة $\\mathcal{F}(x) + x$ لتمرير التدرجات دون عوائق.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.",
      "correctAnswerEn": "Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.",
      "correctAnswerAr": "لحجم دخل $W$ ونواة $K$ وحشو $P$ وخطوة $S$، يكون بعد الخرج $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$؛ وتضيف شبكات ResNet مسارات هوية مباشرة $\\mathcal{F}(x) + x$ لتمرير التدرجات دون عوائق.",
      "correctIndex": 2,
      "explanationEn": "Analytical Derivation & Properties: Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: لحجم دخل $W$ ونواة $K$ وحشو $P$ وخطوة $S$، يكون بعد الخرج $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$؛ وتضيف شبكات ResNet مسارات هوية مباشرة $\\mathcal{F}(x) + x$ لتمرير التدرجات دون عوائق.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Convolutional Layers, Pooling & ResNet Skip Connections.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: لحجم دخل $W$ ونواة $K$ وحشو $P$ وخطوة $S$، يكون بعد الخرج $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$؛ وتضيف شبكات ResNet مسارات هوية مباشرة $\\mathcal{F}(x) + x$ لتمرير التدرجات دون عوائق.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch2_med_27",
      "titleEn": "[MEDIUM] Object Detection Pipelines, YOLO Architecture & IoU Metrics - Analysis 27",
      "titleAr": "[مستوى متوسط] خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU - تحليل 27",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Object Detection Pipelines, YOLO Architecture & IoU Metrics, what is the precise analytical formulation or operative rule? (Item 27)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 27)",
      "optionsEn": [
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category."
      ],
      "optionsAr": [
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "يقيس تقاطع الاتحاد (IoU) دقة تحديد صندوق الإحاطة بالعلاقة $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$، وتعتبر العينة إيجابية حقيقية إذا تجاوز IoU عتبة $0.50$ وتطابقت الفئة."
      ],
      "correctAnswer": "Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.",
      "correctAnswerEn": "Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.",
      "correctAnswerAr": "يقيس تقاطع الاتحاد (IoU) دقة تحديد صندوق الإحاطة بالعلاقة $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$، وتعتبر العينة إيجابية حقيقية إذا تجاوز IoU عتبة $0.50$ وتطابقت الفئة.",
      "correctIndex": 3,
      "explanationEn": "Analytical Derivation & Properties: Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يقيس تقاطع الاتحاد (IoU) دقة تحديد صندوق الإحاطة بالعلاقة $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$، وتعتبر العينة إيجابية حقيقية إذا تجاوز IoU عتبة $0.50$ وتطابقت الفئة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Object Detection Pipelines, YOLO Architecture & IoU Metrics.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يقيس تقاطع الاتحاد (IoU) دقة تحديد صندوق الإحاطة بالعلاقة $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$، وتعتبر العينة إيجابية حقيقية إذا تجاوز IoU عتبة $0.50$ وتطابقت الفئة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch2_med_28",
      "titleEn": "[MEDIUM] Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions - Analysis 28",
      "titleAr": "[مستوى متوسط] الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج - تحليل 28",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions, what is the precise analytical formulation or operative rule? (Item 28)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 28)",
      "optionsEn": [
        "Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan."
      ],
      "optionsAr": [
        "تتسبب دوال التنشيط المشبعة كدالة سيجمويد (مشتقاتها $\\le 0.25$) في تلاشي التدرجات أسياً؛ واستبدالها بوحدات التقويم الخطي $\\text{ReLU}(z) = \\max(0, z)$ يحافظ على تدرج ثابت قدره 1 للمدخلات الموجبة.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG)."
      ],
      "correctAnswer": "Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.",
      "correctAnswerEn": "Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.",
      "correctAnswerAr": "تتسبب دوال التنشيط المشبعة كدالة سيجمويد (مشتقاتها $\\le 0.25$) في تلاشي التدرجات أسياً؛ واستبدالها بوحدات التقويم الخطي $\\text{ReLU}(z) = \\max(0, z)$ يحافظ على تدرج ثابت قدره 1 للمدخلات الموجبة.",
      "correctIndex": 0,
      "explanationEn": "Analytical Derivation & Properties: Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تتسبب دوال التنشيط المشبعة كدالة سيجمويد (مشتقاتها $\\le 0.25$) في تلاشي التدرجات أسياً؛ واستبدالها بوحدات التقويم الخطي $\\text{ReLU}(z) = \\max(0, z)$ يحافظ على تدرج ثابت قدره 1 للمدخلات الموجبة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تتسبب دوال التنشيط المشبعة كدالة سيجمويد (مشتقاتها $\\le 0.25$) في تلاشي التدرجات أسياً؛ واستبدالها بوحدات التقويم الخطي $\\text{ReLU}(z) = \\max(0, z)$ يحافظ على تدرج ثابت قدره 1 للمدخلات الموجبة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch2_med_29",
      "titleEn": "[MEDIUM] Convolutional Layers, Pooling & ResNet Skip Connections - Analysis 29",
      "titleAr": "[مستوى متوسط] الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet - تحليل 29",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Convolutional Layers, Pooling & ResNet Skip Connections, what is the precise analytical formulation or operative rule? (Item 29)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 29)",
      "optionsEn": [
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "لحجم دخل $W$ ونواة $K$ وحشو $P$ وخطوة $S$، يكون بعد الخرج $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$؛ وتضيف شبكات ResNet مسارات هوية مباشرة $\\mathcal{F}(x) + x$ لتمرير التدرجات دون عوائق.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.",
      "correctAnswerEn": "Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.",
      "correctAnswerAr": "لحجم دخل $W$ ونواة $K$ وحشو $P$ وخطوة $S$، يكون بعد الخرج $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$؛ وتضيف شبكات ResNet مسارات هوية مباشرة $\\mathcal{F}(x) + x$ لتمرير التدرجات دون عوائق.",
      "correctIndex": 1,
      "explanationEn": "Analytical Derivation & Properties: Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: لحجم دخل $W$ ونواة $K$ وحشو $P$ وخطوة $S$، يكون بعد الخرج $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$؛ وتضيف شبكات ResNet مسارات هوية مباشرة $\\mathcal{F}(x) + x$ لتمرير التدرجات دون عوائق.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Convolutional Layers, Pooling & ResNet Skip Connections.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: لحجم دخل $W$ ونواة $K$ وحشو $P$ وخطوة $S$، يكون بعد الخرج $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$؛ وتضيف شبكات ResNet مسارات هوية مباشرة $\\mathcal{F}(x) + x$ لتمرير التدرجات دون عوائق.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch2_med_30",
      "titleEn": "[MEDIUM] Object Detection Pipelines, YOLO Architecture & IoU Metrics - Analysis 30",
      "titleAr": "[مستوى متوسط] خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU - تحليل 30",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Object Detection Pipelines, YOLO Architecture & IoU Metrics, what is the precise analytical formulation or operative rule? (Item 30)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 30)",
      "optionsEn": [
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate."
      ],
      "optionsAr": [
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يقيس تقاطع الاتحاد (IoU) دقة تحديد صندوق الإحاطة بالعلاقة $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$، وتعتبر العينة إيجابية حقيقية إذا تجاوز IoU عتبة $0.50$ وتطابقت الفئة.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم."
      ],
      "correctAnswer": "Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.",
      "correctAnswerEn": "Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.",
      "correctAnswerAr": "يقيس تقاطع الاتحاد (IoU) دقة تحديد صندوق الإحاطة بالعلاقة $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$، وتعتبر العينة إيجابية حقيقية إذا تجاوز IoU عتبة $0.50$ وتطابقت الفئة.",
      "correctIndex": 2,
      "explanationEn": "Analytical Derivation & Properties: Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يقيس تقاطع الاتحاد (IoU) دقة تحديد صندوق الإحاطة بالعلاقة $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$، وتعتبر العينة إيجابية حقيقية إذا تجاوز IoU عتبة $0.50$ وتطابقت الفئة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Object Detection Pipelines, YOLO Architecture & IoU Metrics.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يقيس تقاطع الاتحاد (IoU) دقة تحديد صندوق الإحاطة بالعلاقة $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$، وتعتبر العينة إيجابية حقيقية إذا تجاوز IoU عتبة $0.50$ وتطابقت الفئة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch2_med_31",
      "titleEn": "[MEDIUM] Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions - Analysis 31",
      "titleAr": "[مستوى متوسط] الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج - تحليل 31",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions, what is the precise analytical formulation or operative rule? (Item 31)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 31)",
      "optionsEn": [
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations."
      ],
      "optionsAr": [
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تتسبب دوال التنشيط المشبعة كدالة سيجمويد (مشتقاتها $\\le 0.25$) في تلاشي التدرجات أسياً؛ واستبدالها بوحدات التقويم الخطي $\\text{ReLU}(z) = \\max(0, z)$ يحافظ على تدرج ثابت قدره 1 للمدخلات الموجبة."
      ],
      "correctAnswer": "Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.",
      "correctAnswerEn": "Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.",
      "correctAnswerAr": "تتسبب دوال التنشيط المشبعة كدالة سيجمويد (مشتقاتها $\\le 0.25$) في تلاشي التدرجات أسياً؛ واستبدالها بوحدات التقويم الخطي $\\text{ReLU}(z) = \\max(0, z)$ يحافظ على تدرج ثابت قدره 1 للمدخلات الموجبة.",
      "correctIndex": 3,
      "explanationEn": "Analytical Derivation & Properties: Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تتسبب دوال التنشيط المشبعة كدالة سيجمويد (مشتقاتها $\\le 0.25$) في تلاشي التدرجات أسياً؛ واستبدالها بوحدات التقويم الخطي $\\text{ReLU}(z) = \\max(0, z)$ يحافظ على تدرج ثابت قدره 1 للمدخلات الموجبة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تتسبب دوال التنشيط المشبعة كدالة سيجمويد (مشتقاتها $\\le 0.25$) في تلاشي التدرجات أسياً؛ واستبدالها بوحدات التقويم الخطي $\\text{ReLU}(z) = \\max(0, z)$ يحافظ على تدرج ثابت قدره 1 للمدخلات الموجبة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch2_med_32",
      "titleEn": "[MEDIUM] Convolutional Layers, Pooling & ResNet Skip Connections - Analysis 32",
      "titleAr": "[مستوى متوسط] الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet - تحليل 32",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Convolutional Layers, Pooling & ResNet Skip Connections, what is the precise analytical formulation or operative rule? (Item 32)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 32)",
      "optionsEn": [
        "Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.",
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "لحجم دخل $W$ ونواة $K$ وحشو $P$ وخطوة $S$، يكون بعد الخرج $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$؛ وتضيف شبكات ResNet مسارات هوية مباشرة $\\mathcal{F}(x) + x$ لتمرير التدرجات دون عوائق.",
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.",
      "correctAnswerEn": "Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.",
      "correctAnswerAr": "لحجم دخل $W$ ونواة $K$ وحشو $P$ وخطوة $S$، يكون بعد الخرج $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$؛ وتضيف شبكات ResNet مسارات هوية مباشرة $\\mathcal{F}(x) + x$ لتمرير التدرجات دون عوائق.",
      "correctIndex": 0,
      "explanationEn": "Analytical Derivation & Properties: Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: لحجم دخل $W$ ونواة $K$ وحشو $P$ وخطوة $S$، يكون بعد الخرج $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$؛ وتضيف شبكات ResNet مسارات هوية مباشرة $\\mathcal{F}(x) + x$ لتمرير التدرجات دون عوائق.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Convolutional Layers, Pooling & ResNet Skip Connections.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: لحجم دخل $W$ ونواة $K$ وحشو $P$ وخطوة $S$، يكون بعد الخرج $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$؛ وتضيف شبكات ResNet مسارات هوية مباشرة $\\mathcal{F}(x) + x$ لتمرير التدرجات دون عوائق.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch2_med_33",
      "titleEn": "[MEDIUM] Object Detection Pipelines, YOLO Architecture & IoU Metrics - Analysis 33",
      "titleAr": "[مستوى متوسط] خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU - تحليل 33",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Object Detection Pipelines, YOLO Architecture & IoU Metrics, what is the precise analytical formulation or operative rule? (Item 33)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 33)",
      "optionsEn": [
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.",
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation."
      ],
      "optionsAr": [
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "يقيس تقاطع الاتحاد (IoU) دقة تحديد صندوق الإحاطة بالعلاقة $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$، وتعتبر العينة إيجابية حقيقية إذا تجاوز IoU عتبة $0.50$ وتطابقت الفئة.",
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي."
      ],
      "correctAnswer": "Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.",
      "correctAnswerEn": "Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.",
      "correctAnswerAr": "يقيس تقاطع الاتحاد (IoU) دقة تحديد صندوق الإحاطة بالعلاقة $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$، وتعتبر العينة إيجابية حقيقية إذا تجاوز IoU عتبة $0.50$ وتطابقت الفئة.",
      "correctIndex": 1,
      "explanationEn": "Analytical Derivation & Properties: Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يقيس تقاطع الاتحاد (IoU) دقة تحديد صندوق الإحاطة بالعلاقة $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$، وتعتبر العينة إيجابية حقيقية إذا تجاوز IoU عتبة $0.50$ وتطابقت الفئة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Object Detection Pipelines, YOLO Architecture & IoU Metrics.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يقيس تقاطع الاتحاد (IoU) دقة تحديد صندوق الإحاطة بالعلاقة $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$، وتعتبر العينة إيجابية حقيقية إذا تجاوز IoU عتبة $0.50$ وتطابقت الفئة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch2_med_34",
      "titleEn": "[MEDIUM] Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions - Analysis 34",
      "titleAr": "[مستوى متوسط] الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج - تحليل 34",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions, what is the precise analytical formulation or operative rule? (Item 34)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 34)",
      "optionsEn": [
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.",
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent."
      ],
      "optionsAr": [
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "تتسبب دوال التنشيط المشبعة كدالة سيجمويد (مشتقاتها $\\le 0.25$) في تلاشي التدرجات أسياً؛ واستبدالها بوحدات التقويم الخطي $\\text{ReLU}(z) = \\max(0, z)$ يحافظ على تدرج ثابت قدره 1 للمدخلات الموجبة.",
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة."
      ],
      "correctAnswer": "Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.",
      "correctAnswerEn": "Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.",
      "correctAnswerAr": "تتسبب دوال التنشيط المشبعة كدالة سيجمويد (مشتقاتها $\\le 0.25$) في تلاشي التدرجات أسياً؛ واستبدالها بوحدات التقويم الخطي $\\text{ReLU}(z) = \\max(0, z)$ يحافظ على تدرج ثابت قدره 1 للمدخلات الموجبة.",
      "correctIndex": 2,
      "explanationEn": "Analytical Derivation & Properties: Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تتسبب دوال التنشيط المشبعة كدالة سيجمويد (مشتقاتها $\\le 0.25$) في تلاشي التدرجات أسياً؛ واستبدالها بوحدات التقويم الخطي $\\text{ReLU}(z) = \\max(0, z)$ يحافظ على تدرج ثابت قدره 1 للمدخلات الموجبة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تتسبب دوال التنشيط المشبعة كدالة سيجمويد (مشتقاتها $\\le 0.25$) في تلاشي التدرجات أسياً؛ واستبدالها بوحدات التقويم الخطي $\\text{ReLU}(z) = \\max(0, z)$ يحافظ على تدرج ثابت قدره 1 للمدخلات الموجبة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch2_med_35",
      "titleEn": "[MEDIUM] Convolutional Layers, Pooling & ResNet Skip Connections - Analysis 35",
      "titleAr": "[مستوى متوسط] الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet - تحليل 35",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Convolutional Layers, Pooling & ResNet Skip Connections, what is the precise analytical formulation or operative rule? (Item 35)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 35)",
      "optionsEn": [
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations."
      ],
      "optionsAr": [
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "لحجم دخل $W$ ونواة $K$ وحشو $P$ وخطوة $S$، يكون بعد الخرج $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$؛ وتضيف شبكات ResNet مسارات هوية مباشرة $\\mathcal{F}(x) + x$ لتمرير التدرجات دون عوائق."
      ],
      "correctAnswer": "Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.",
      "correctAnswerEn": "Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.",
      "correctAnswerAr": "لحجم دخل $W$ ونواة $K$ وحشو $P$ وخطوة $S$، يكون بعد الخرج $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$؛ وتضيف شبكات ResNet مسارات هوية مباشرة $\\mathcal{F}(x) + x$ لتمرير التدرجات دون عوائق.",
      "correctIndex": 3,
      "explanationEn": "Analytical Derivation & Properties: Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: لحجم دخل $W$ ونواة $K$ وحشو $P$ وخطوة $S$، يكون بعد الخرج $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$؛ وتضيف شبكات ResNet مسارات هوية مباشرة $\\mathcal{F}(x) + x$ لتمرير التدرجات دون عوائق.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Convolutional Layers, Pooling & ResNet Skip Connections.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: لحجم دخل $W$ ونواة $K$ وحشو $P$ وخطوة $S$، يكون بعد الخرج $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$؛ وتضيف شبكات ResNet مسارات هوية مباشرة $\\mathcal{F}(x) + x$ لتمرير التدرجات دون عوائق.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch2_med_36",
      "titleEn": "[MEDIUM] Object Detection Pipelines, YOLO Architecture & IoU Metrics - Analysis 36",
      "titleAr": "[مستوى متوسط] خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU - تحليل 36",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Object Detection Pipelines, YOLO Architecture & IoU Metrics, what is the precise analytical formulation or operative rule? (Item 36)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 36)",
      "optionsEn": [
        "Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step."
      ],
      "optionsAr": [
        "يقيس تقاطع الاتحاد (IoU) دقة تحديد صندوق الإحاطة بالعلاقة $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$، وتعتبر العينة إيجابية حقيقية إذا تجاوز IoU عتبة $0.50$ وتطابقت الفئة.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين."
      ],
      "correctAnswer": "Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.",
      "correctAnswerEn": "Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.",
      "correctAnswerAr": "يقيس تقاطع الاتحاد (IoU) دقة تحديد صندوق الإحاطة بالعلاقة $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$، وتعتبر العينة إيجابية حقيقية إذا تجاوز IoU عتبة $0.50$ وتطابقت الفئة.",
      "correctIndex": 0,
      "explanationEn": "Analytical Derivation & Properties: Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يقيس تقاطع الاتحاد (IoU) دقة تحديد صندوق الإحاطة بالعلاقة $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$، وتعتبر العينة إيجابية حقيقية إذا تجاوز IoU عتبة $0.50$ وتطابقت الفئة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Object Detection Pipelines, YOLO Architecture & IoU Metrics.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يقيس تقاطع الاتحاد (IoU) دقة تحديد صندوق الإحاطة بالعلاقة $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$، وتعتبر العينة إيجابية حقيقية إذا تجاوز IoU عتبة $0.50$ وتطابقت الفئة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch2_med_37",
      "titleEn": "[MEDIUM] Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions - Analysis 37",
      "titleAr": "[مستوى متوسط] الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج - تحليل 37",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions, what is the precise analytical formulation or operative rule? (Item 37)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 37)",
      "optionsEn": [
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance."
      ],
      "optionsAr": [
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تتسبب دوال التنشيط المشبعة كدالة سيجمويد (مشتقاتها $\\le 0.25$) في تلاشي التدرجات أسياً؛ واستبدالها بوحدات التقويم الخطي $\\text{ReLU}(z) = \\max(0, z)$ يحافظ على تدرج ثابت قدره 1 للمدخلات الموجبة.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر."
      ],
      "correctAnswer": "Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.",
      "correctAnswerEn": "Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.",
      "correctAnswerAr": "تتسبب دوال التنشيط المشبعة كدالة سيجمويد (مشتقاتها $\\le 0.25$) في تلاشي التدرجات أسياً؛ واستبدالها بوحدات التقويم الخطي $\\text{ReLU}(z) = \\max(0, z)$ يحافظ على تدرج ثابت قدره 1 للمدخلات الموجبة.",
      "correctIndex": 1,
      "explanationEn": "Analytical Derivation & Properties: Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تتسبب دوال التنشيط المشبعة كدالة سيجمويد (مشتقاتها $\\le 0.25$) في تلاشي التدرجات أسياً؛ واستبدالها بوحدات التقويم الخطي $\\text{ReLU}(z) = \\max(0, z)$ يحافظ على تدرج ثابت قدره 1 للمدخلات الموجبة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تتسبب دوال التنشيط المشبعة كدالة سيجمويد (مشتقاتها $\\le 0.25$) في تلاشي التدرجات أسياً؛ واستبدالها بوحدات التقويم الخطي $\\text{ReLU}(z) = \\max(0, z)$ يحافظ على تدرج ثابت قدره 1 للمدخلات الموجبة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch2_med_38",
      "titleEn": "[MEDIUM] Convolutional Layers, Pooling & ResNet Skip Connections - Analysis 38",
      "titleAr": "[مستوى متوسط] الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet - تحليل 38",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Convolutional Layers, Pooling & ResNet Skip Connections, what is the precise analytical formulation or operative rule? (Item 38)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 38)",
      "optionsEn": [
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "لحجم دخل $W$ ونواة $K$ وحشو $P$ وخطوة $S$، يكون بعد الخرج $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$؛ وتضيف شبكات ResNet مسارات هوية مباشرة $\\mathcal{F}(x) + x$ لتمرير التدرجات دون عوائق.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.",
      "correctAnswerEn": "Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.",
      "correctAnswerAr": "لحجم دخل $W$ ونواة $K$ وحشو $P$ وخطوة $S$، يكون بعد الخرج $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$؛ وتضيف شبكات ResNet مسارات هوية مباشرة $\\mathcal{F}(x) + x$ لتمرير التدرجات دون عوائق.",
      "correctIndex": 2,
      "explanationEn": "Analytical Derivation & Properties: Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: لحجم دخل $W$ ونواة $K$ وحشو $P$ وخطوة $S$، يكون بعد الخرج $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$؛ وتضيف شبكات ResNet مسارات هوية مباشرة $\\mathcal{F}(x) + x$ لتمرير التدرجات دون عوائق.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Convolutional Layers, Pooling & ResNet Skip Connections.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: لحجم دخل $W$ ونواة $K$ وحشو $P$ وخطوة $S$، يكون بعد الخرج $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$؛ وتضيف شبكات ResNet مسارات هوية مباشرة $\\mathcal{F}(x) + x$ لتمرير التدرجات دون عوائق.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch2_med_39",
      "titleEn": "[MEDIUM] Object Detection Pipelines, YOLO Architecture & IoU Metrics - Analysis 39",
      "titleAr": "[مستوى متوسط] خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU - تحليل 39",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Object Detection Pipelines, YOLO Architecture & IoU Metrics, what is the precise analytical formulation or operative rule? (Item 39)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 39)",
      "optionsEn": [
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category."
      ],
      "optionsAr": [
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "يقيس تقاطع الاتحاد (IoU) دقة تحديد صندوق الإحاطة بالعلاقة $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$، وتعتبر العينة إيجابية حقيقية إذا تجاوز IoU عتبة $0.50$ وتطابقت الفئة."
      ],
      "correctAnswer": "Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.",
      "correctAnswerEn": "Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.",
      "correctAnswerAr": "يقيس تقاطع الاتحاد (IoU) دقة تحديد صندوق الإحاطة بالعلاقة $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$، وتعتبر العينة إيجابية حقيقية إذا تجاوز IoU عتبة $0.50$ وتطابقت الفئة.",
      "correctIndex": 3,
      "explanationEn": "Analytical Derivation & Properties: Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يقيس تقاطع الاتحاد (IoU) دقة تحديد صندوق الإحاطة بالعلاقة $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$، وتعتبر العينة إيجابية حقيقية إذا تجاوز IoU عتبة $0.50$ وتطابقت الفئة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Object Detection Pipelines, YOLO Architecture & IoU Metrics.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يقيس تقاطع الاتحاد (IoU) دقة تحديد صندوق الإحاطة بالعلاقة $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$، وتعتبر العينة إيجابية حقيقية إذا تجاوز IoU عتبة $0.50$ وتطابقت الفئة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch2_med_40",
      "titleEn": "[MEDIUM] Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions - Analysis 40",
      "titleAr": "[مستوى متوسط] الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج - تحليل 40",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions, what is the precise analytical formulation or operative rule? (Item 40)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 40)",
      "optionsEn": [
        "Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence."
      ],
      "optionsAr": [
        "تتسبب دوال التنشيط المشبعة كدالة سيجمويد (مشتقاتها $\\le 0.25$) في تلاشي التدرجات أسياً؛ واستبدالها بوحدات التقويم الخطي $\\text{ReLU}(z) = \\max(0, z)$ يحافظ على تدرج ثابت قدره 1 للمدخلات الموجبة.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية."
      ],
      "correctAnswer": "Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.",
      "correctAnswerEn": "Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.",
      "correctAnswerAr": "تتسبب دوال التنشيط المشبعة كدالة سيجمويد (مشتقاتها $\\le 0.25$) في تلاشي التدرجات أسياً؛ واستبدالها بوحدات التقويم الخطي $\\text{ReLU}(z) = \\max(0, z)$ يحافظ على تدرج ثابت قدره 1 للمدخلات الموجبة.",
      "correctIndex": 0,
      "explanationEn": "Analytical Derivation & Properties: Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تتسبب دوال التنشيط المشبعة كدالة سيجمويد (مشتقاتها $\\le 0.25$) في تلاشي التدرجات أسياً؛ واستبدالها بوحدات التقويم الخطي $\\text{ReLU}(z) = \\max(0, z)$ يحافظ على تدرج ثابت قدره 1 للمدخلات الموجبة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تتسبب دوال التنشيط المشبعة كدالة سيجمويد (مشتقاتها $\\le 0.25$) في تلاشي التدرجات أسياً؛ واستبدالها بوحدات التقويم الخطي $\\text{ReLU}(z) = \\max(0, z)$ يحافظ على تدرج ثابت قدره 1 للمدخلات الموجبة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch2_med_41",
      "titleEn": "[MEDIUM] Convolutional Layers, Pooling & ResNet Skip Connections - Analysis 41",
      "titleAr": "[مستوى متوسط] الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet - تحليل 41",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Convolutional Layers, Pooling & ResNet Skip Connections, what is the precise analytical formulation or operative rule? (Item 41)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 41)",
      "optionsEn": [
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "لحجم دخل $W$ ونواة $K$ وحشو $P$ وخطوة $S$، يكون بعد الخرج $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$؛ وتضيف شبكات ResNet مسارات هوية مباشرة $\\mathcal{F}(x) + x$ لتمرير التدرجات دون عوائق.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.",
      "correctAnswerEn": "Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.",
      "correctAnswerAr": "لحجم دخل $W$ ونواة $K$ وحشو $P$ وخطوة $S$، يكون بعد الخرج $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$؛ وتضيف شبكات ResNet مسارات هوية مباشرة $\\mathcal{F}(x) + x$ لتمرير التدرجات دون عوائق.",
      "correctIndex": 1,
      "explanationEn": "Analytical Derivation & Properties: Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: لحجم دخل $W$ ونواة $K$ وحشو $P$ وخطوة $S$، يكون بعد الخرج $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$؛ وتضيف شبكات ResNet مسارات هوية مباشرة $\\mathcal{F}(x) + x$ لتمرير التدرجات دون عوائق.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Convolutional Layers, Pooling & ResNet Skip Connections.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: لحجم دخل $W$ ونواة $K$ وحشو $P$ وخطوة $S$، يكون بعد الخرج $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$؛ وتضيف شبكات ResNet مسارات هوية مباشرة $\\mathcal{F}(x) + x$ لتمرير التدرجات دون عوائق.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch2_med_42",
      "titleEn": "[MEDIUM] Object Detection Pipelines, YOLO Architecture & IoU Metrics - Analysis 42",
      "titleAr": "[مستوى متوسط] خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU - تحليل 42",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Object Detection Pipelines, YOLO Architecture & IoU Metrics, what is the precise analytical formulation or operative rule? (Item 42)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 42)",
      "optionsEn": [
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data."
      ],
      "optionsAr": [
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "يقيس تقاطع الاتحاد (IoU) دقة تحديد صندوق الإحاطة بالعلاقة $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$، وتعتبر العينة إيجابية حقيقية إذا تجاوز IoU عتبة $0.50$ وتطابقت الفئة.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش."
      ],
      "correctAnswer": "Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.",
      "correctAnswerEn": "Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.",
      "correctAnswerAr": "يقيس تقاطع الاتحاد (IoU) دقة تحديد صندوق الإحاطة بالعلاقة $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$، وتعتبر العينة إيجابية حقيقية إذا تجاوز IoU عتبة $0.50$ وتطابقت الفئة.",
      "correctIndex": 2,
      "explanationEn": "Analytical Derivation & Properties: Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يقيس تقاطع الاتحاد (IoU) دقة تحديد صندوق الإحاطة بالعلاقة $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$، وتعتبر العينة إيجابية حقيقية إذا تجاوز IoU عتبة $0.50$ وتطابقت الفئة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Object Detection Pipelines, YOLO Architecture & IoU Metrics.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يقيس تقاطع الاتحاد (IoU) دقة تحديد صندوق الإحاطة بالعلاقة $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$، وتعتبر العينة إيجابية حقيقية إذا تجاوز IoU عتبة $0.50$ وتطابقت الفئة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch2_med_43",
      "titleEn": "[MEDIUM] Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions - Analysis 43",
      "titleAr": "[مستوى متوسط] الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج - تحليل 43",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions, what is the precise analytical formulation or operative rule? (Item 43)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 43)",
      "optionsEn": [
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations."
      ],
      "optionsAr": [
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تتسبب دوال التنشيط المشبعة كدالة سيجمويد (مشتقاتها $\\le 0.25$) في تلاشي التدرجات أسياً؛ واستبدالها بوحدات التقويم الخطي $\\text{ReLU}(z) = \\max(0, z)$ يحافظ على تدرج ثابت قدره 1 للمدخلات الموجبة."
      ],
      "correctAnswer": "Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.",
      "correctAnswerEn": "Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.",
      "correctAnswerAr": "تتسبب دوال التنشيط المشبعة كدالة سيجمويد (مشتقاتها $\\le 0.25$) في تلاشي التدرجات أسياً؛ واستبدالها بوحدات التقويم الخطي $\\text{ReLU}(z) = \\max(0, z)$ يحافظ على تدرج ثابت قدره 1 للمدخلات الموجبة.",
      "correctIndex": 3,
      "explanationEn": "Analytical Derivation & Properties: Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تتسبب دوال التنشيط المشبعة كدالة سيجمويد (مشتقاتها $\\le 0.25$) في تلاشي التدرجات أسياً؛ واستبدالها بوحدات التقويم الخطي $\\text{ReLU}(z) = \\max(0, z)$ يحافظ على تدرج ثابت قدره 1 للمدخلات الموجبة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تتسبب دوال التنشيط المشبعة كدالة سيجمويد (مشتقاتها $\\le 0.25$) في تلاشي التدرجات أسياً؛ واستبدالها بوحدات التقويم الخطي $\\text{ReLU}(z) = \\max(0, z)$ يحافظ على تدرج ثابت قدره 1 للمدخلات الموجبة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch2_med_44",
      "titleEn": "[MEDIUM] Convolutional Layers, Pooling & ResNet Skip Connections - Analysis 44",
      "titleAr": "[مستوى متوسط] الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet - تحليل 44",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Convolutional Layers, Pooling & ResNet Skip Connections, what is the precise analytical formulation or operative rule? (Item 44)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 44)",
      "optionsEn": [
        "Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.",
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "لحجم دخل $W$ ونواة $K$ وحشو $P$ وخطوة $S$، يكون بعد الخرج $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$؛ وتضيف شبكات ResNet مسارات هوية مباشرة $\\mathcal{F}(x) + x$ لتمرير التدرجات دون عوائق.",
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.",
      "correctAnswerEn": "Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.",
      "correctAnswerAr": "لحجم دخل $W$ ونواة $K$ وحشو $P$ وخطوة $S$، يكون بعد الخرج $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$؛ وتضيف شبكات ResNet مسارات هوية مباشرة $\\mathcal{F}(x) + x$ لتمرير التدرجات دون عوائق.",
      "correctIndex": 0,
      "explanationEn": "Analytical Derivation & Properties: Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: لحجم دخل $W$ ونواة $K$ وحشو $P$ وخطوة $S$، يكون بعد الخرج $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$؛ وتضيف شبكات ResNet مسارات هوية مباشرة $\\mathcal{F}(x) + x$ لتمرير التدرجات دون عوائق.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Convolutional Layers, Pooling & ResNet Skip Connections.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: لحجم دخل $W$ ونواة $K$ وحشو $P$ وخطوة $S$، يكون بعد الخرج $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$؛ وتضيف شبكات ResNet مسارات هوية مباشرة $\\mathcal{F}(x) + x$ لتمرير التدرجات دون عوائق.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch2_med_45",
      "titleEn": "[MEDIUM] Object Detection Pipelines, YOLO Architecture & IoU Metrics - Analysis 45",
      "titleAr": "[مستوى متوسط] خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU - تحليل 45",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Object Detection Pipelines, YOLO Architecture & IoU Metrics, what is the precise analytical formulation or operative rule? (Item 45)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 45)",
      "optionsEn": [
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.",
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate."
      ],
      "optionsAr": [
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يقيس تقاطع الاتحاد (IoU) دقة تحديد صندوق الإحاطة بالعلاقة $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$، وتعتبر العينة إيجابية حقيقية إذا تجاوز IoU عتبة $0.50$ وتطابقت الفئة.",
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم."
      ],
      "correctAnswer": "Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.",
      "correctAnswerEn": "Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.",
      "correctAnswerAr": "يقيس تقاطع الاتحاد (IoU) دقة تحديد صندوق الإحاطة بالعلاقة $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$، وتعتبر العينة إيجابية حقيقية إذا تجاوز IoU عتبة $0.50$ وتطابقت الفئة.",
      "correctIndex": 1,
      "explanationEn": "Analytical Derivation & Properties: Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يقيس تقاطع الاتحاد (IoU) دقة تحديد صندوق الإحاطة بالعلاقة $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$، وتعتبر العينة إيجابية حقيقية إذا تجاوز IoU عتبة $0.50$ وتطابقت الفئة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Object Detection Pipelines, YOLO Architecture & IoU Metrics.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يقيس تقاطع الاتحاد (IoU) دقة تحديد صندوق الإحاطة بالعلاقة $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$، وتعتبر العينة إيجابية حقيقية إذا تجاوز IoU عتبة $0.50$ وتطابقت الفئة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch2_med_46",
      "titleEn": "[MEDIUM] Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions - Analysis 46",
      "titleAr": "[مستوى متوسط] الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج - تحليل 46",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions, what is the precise analytical formulation or operative rule? (Item 46)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 46)",
      "optionsEn": [
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.",
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves."
      ],
      "optionsAr": [
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تتسبب دوال التنشيط المشبعة كدالة سيجمويد (مشتقاتها $\\le 0.25$) في تلاشي التدرجات أسياً؛ واستبدالها بوحدات التقويم الخطي $\\text{ReLU}(z) = \\max(0, z)$ يحافظ على تدرج ثابت قدره 1 للمدخلات الموجبة.",
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية."
      ],
      "correctAnswer": "Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.",
      "correctAnswerEn": "Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.",
      "correctAnswerAr": "تتسبب دوال التنشيط المشبعة كدالة سيجمويد (مشتقاتها $\\le 0.25$) في تلاشي التدرجات أسياً؛ واستبدالها بوحدات التقويم الخطي $\\text{ReLU}(z) = \\max(0, z)$ يحافظ على تدرج ثابت قدره 1 للمدخلات الموجبة.",
      "correctIndex": 2,
      "explanationEn": "Analytical Derivation & Properties: Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تتسبب دوال التنشيط المشبعة كدالة سيجمويد (مشتقاتها $\\le 0.25$) في تلاشي التدرجات أسياً؛ واستبدالها بوحدات التقويم الخطي $\\text{ReLU}(z) = \\max(0, z)$ يحافظ على تدرج ثابت قدره 1 للمدخلات الموجبة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تتسبب دوال التنشيط المشبعة كدالة سيجمويد (مشتقاتها $\\le 0.25$) في تلاشي التدرجات أسياً؛ واستبدالها بوحدات التقويم الخطي $\\text{ReLU}(z) = \\max(0, z)$ يحافظ على تدرج ثابت قدره 1 للمدخلات الموجبة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch2_med_47",
      "titleEn": "[MEDIUM] Convolutional Layers, Pooling & ResNet Skip Connections - Analysis 47",
      "titleAr": "[مستوى متوسط] الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet - تحليل 47",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Convolutional Layers, Pooling & ResNet Skip Connections, what is the precise analytical formulation or operative rule? (Item 47)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 47)",
      "optionsEn": [
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations."
      ],
      "optionsAr": [
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "لحجم دخل $W$ ونواة $K$ وحشو $P$ وخطوة $S$، يكون بعد الخرج $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$؛ وتضيف شبكات ResNet مسارات هوية مباشرة $\\mathcal{F}(x) + x$ لتمرير التدرجات دون عوائق."
      ],
      "correctAnswer": "Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.",
      "correctAnswerEn": "Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.",
      "correctAnswerAr": "لحجم دخل $W$ ونواة $K$ وحشو $P$ وخطوة $S$، يكون بعد الخرج $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$؛ وتضيف شبكات ResNet مسارات هوية مباشرة $\\mathcal{F}(x) + x$ لتمرير التدرجات دون عوائق.",
      "correctIndex": 3,
      "explanationEn": "Analytical Derivation & Properties: Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: لحجم دخل $W$ ونواة $K$ وحشو $P$ وخطوة $S$، يكون بعد الخرج $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$؛ وتضيف شبكات ResNet مسارات هوية مباشرة $\\mathcal{F}(x) + x$ لتمرير التدرجات دون عوائق.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Convolutional Layers, Pooling & ResNet Skip Connections.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: لحجم دخل $W$ ونواة $K$ وحشو $P$ وخطوة $S$، يكون بعد الخرج $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$؛ وتضيف شبكات ResNet مسارات هوية مباشرة $\\mathcal{F}(x) + x$ لتمرير التدرجات دون عوائق.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch2_med_48",
      "titleEn": "[MEDIUM] Object Detection Pipelines, YOLO Architecture & IoU Metrics - Analysis 48",
      "titleAr": "[مستوى متوسط] خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU - تحليل 48",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Object Detection Pipelines, YOLO Architecture & IoU Metrics, what is the precise analytical formulation or operative rule? (Item 48)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 48)",
      "optionsEn": [
        "Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation."
      ],
      "optionsAr": [
        "يقيس تقاطع الاتحاد (IoU) دقة تحديد صندوق الإحاطة بالعلاقة $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$، وتعتبر العينة إيجابية حقيقية إذا تجاوز IoU عتبة $0.50$ وتطابقت الفئة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي."
      ],
      "correctAnswer": "Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.",
      "correctAnswerEn": "Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.",
      "correctAnswerAr": "يقيس تقاطع الاتحاد (IoU) دقة تحديد صندوق الإحاطة بالعلاقة $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$، وتعتبر العينة إيجابية حقيقية إذا تجاوز IoU عتبة $0.50$ وتطابقت الفئة.",
      "correctIndex": 0,
      "explanationEn": "Analytical Derivation & Properties: Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يقيس تقاطع الاتحاد (IoU) دقة تحديد صندوق الإحاطة بالعلاقة $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$، وتعتبر العينة إيجابية حقيقية إذا تجاوز IoU عتبة $0.50$ وتطابقت الفئة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Object Detection Pipelines, YOLO Architecture & IoU Metrics.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يقيس تقاطع الاتحاد (IoU) دقة تحديد صندوق الإحاطة بالعلاقة $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$، وتعتبر العينة إيجابية حقيقية إذا تجاوز IoU عتبة $0.50$ وتطابقت الفئة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch2_med_49",
      "titleEn": "[MEDIUM] Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions - Analysis 49",
      "titleAr": "[مستوى متوسط] الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج - تحليل 49",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions, what is the precise analytical formulation or operative rule? (Item 49)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 49)",
      "optionsEn": [
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent."
      ],
      "optionsAr": [
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تتسبب دوال التنشيط المشبعة كدالة سيجمويد (مشتقاتها $\\le 0.25$) في تلاشي التدرجات أسياً؛ واستبدالها بوحدات التقويم الخطي $\\text{ReLU}(z) = \\max(0, z)$ يحافظ على تدرج ثابت قدره 1 للمدخلات الموجبة.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة."
      ],
      "correctAnswer": "Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.",
      "correctAnswerEn": "Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.",
      "correctAnswerAr": "تتسبب دوال التنشيط المشبعة كدالة سيجمويد (مشتقاتها $\\le 0.25$) في تلاشي التدرجات أسياً؛ واستبدالها بوحدات التقويم الخطي $\\text{ReLU}(z) = \\max(0, z)$ يحافظ على تدرج ثابت قدره 1 للمدخلات الموجبة.",
      "correctIndex": 1,
      "explanationEn": "Analytical Derivation & Properties: Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تتسبب دوال التنشيط المشبعة كدالة سيجمويد (مشتقاتها $\\le 0.25$) في تلاشي التدرجات أسياً؛ واستبدالها بوحدات التقويم الخطي $\\text{ReLU}(z) = \\max(0, z)$ يحافظ على تدرج ثابت قدره 1 للمدخلات الموجبة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تتسبب دوال التنشيط المشبعة كدالة سيجمويد (مشتقاتها $\\le 0.25$) في تلاشي التدرجات أسياً؛ واستبدالها بوحدات التقويم الخطي $\\text{ReLU}(z) = \\max(0, z)$ يحافظ على تدرج ثابت قدره 1 للمدخلات الموجبة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch2_med_50",
      "titleEn": "[MEDIUM] Convolutional Layers, Pooling & ResNet Skip Connections - Analysis 50",
      "titleAr": "[مستوى متوسط] الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet - تحليل 50",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Convolutional Layers, Pooling & ResNet Skip Connections, what is the precise analytical formulation or operative rule? (Item 50)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 50)",
      "optionsEn": [
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "لحجم دخل $W$ ونواة $K$ وحشو $P$ وخطوة $S$، يكون بعد الخرج $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$؛ وتضيف شبكات ResNet مسارات هوية مباشرة $\\mathcal{F}(x) + x$ لتمرير التدرجات دون عوائق.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.",
      "correctAnswerEn": "Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.",
      "correctAnswerAr": "لحجم دخل $W$ ونواة $K$ وحشو $P$ وخطوة $S$، يكون بعد الخرج $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$؛ وتضيف شبكات ResNet مسارات هوية مباشرة $\\mathcal{F}(x) + x$ لتمرير التدرجات دون عوائق.",
      "correctIndex": 2,
      "explanationEn": "Analytical Derivation & Properties: Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: لحجم دخل $W$ ونواة $K$ وحشو $P$ وخطوة $S$، يكون بعد الخرج $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$؛ وتضيف شبكات ResNet مسارات هوية مباشرة $\\mathcal{F}(x) + x$ لتمرير التدرجات دون عوائق.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Convolutional Layers, Pooling & ResNet Skip Connections.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: لحجم دخل $W$ ونواة $K$ وحشو $P$ وخطوة $S$، يكون بعد الخرج $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$؛ وتضيف شبكات ResNet مسارات هوية مباشرة $\\mathcal{F}(x) + x$ لتمرير التدرجات دون عوائق.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch2_med_51",
      "titleEn": "[MEDIUM] Object Detection Pipelines, YOLO Architecture & IoU Metrics - Analysis 51",
      "titleAr": "[مستوى متوسط] خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU - تحليل 51",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Object Detection Pipelines, YOLO Architecture & IoU Metrics, what is the precise analytical formulation or operative rule? (Item 51)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 51)",
      "optionsEn": [
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category."
      ],
      "optionsAr": [
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "يقيس تقاطع الاتحاد (IoU) دقة تحديد صندوق الإحاطة بالعلاقة $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$، وتعتبر العينة إيجابية حقيقية إذا تجاوز IoU عتبة $0.50$ وتطابقت الفئة."
      ],
      "correctAnswer": "Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.",
      "correctAnswerEn": "Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.",
      "correctAnswerAr": "يقيس تقاطع الاتحاد (IoU) دقة تحديد صندوق الإحاطة بالعلاقة $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$، وتعتبر العينة إيجابية حقيقية إذا تجاوز IoU عتبة $0.50$ وتطابقت الفئة.",
      "correctIndex": 3,
      "explanationEn": "Analytical Derivation & Properties: Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يقيس تقاطع الاتحاد (IoU) دقة تحديد صندوق الإحاطة بالعلاقة $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$، وتعتبر العينة إيجابية حقيقية إذا تجاوز IoU عتبة $0.50$ وتطابقت الفئة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Object Detection Pipelines, YOLO Architecture & IoU Metrics.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يقيس تقاطع الاتحاد (IoU) دقة تحديد صندوق الإحاطة بالعلاقة $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$، وتعتبر العينة إيجابية حقيقية إذا تجاوز IoU عتبة $0.50$ وتطابقت الفئة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch2_med_52",
      "titleEn": "[MEDIUM] Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions - Analysis 52",
      "titleAr": "[مستوى متوسط] الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج - تحليل 52",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions, what is the precise analytical formulation or operative rule? (Item 52)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 52)",
      "optionsEn": [
        "Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance."
      ],
      "optionsAr": [
        "تتسبب دوال التنشيط المشبعة كدالة سيجمويد (مشتقاتها $\\le 0.25$) في تلاشي التدرجات أسياً؛ واستبدالها بوحدات التقويم الخطي $\\text{ReLU}(z) = \\max(0, z)$ يحافظ على تدرج ثابت قدره 1 للمدخلات الموجبة.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر."
      ],
      "correctAnswer": "Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.",
      "correctAnswerEn": "Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.",
      "correctAnswerAr": "تتسبب دوال التنشيط المشبعة كدالة سيجمويد (مشتقاتها $\\le 0.25$) في تلاشي التدرجات أسياً؛ واستبدالها بوحدات التقويم الخطي $\\text{ReLU}(z) = \\max(0, z)$ يحافظ على تدرج ثابت قدره 1 للمدخلات الموجبة.",
      "correctIndex": 0,
      "explanationEn": "Analytical Derivation & Properties: Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تتسبب دوال التنشيط المشبعة كدالة سيجمويد (مشتقاتها $\\le 0.25$) في تلاشي التدرجات أسياً؛ واستبدالها بوحدات التقويم الخطي $\\text{ReLU}(z) = \\max(0, z)$ يحافظ على تدرج ثابت قدره 1 للمدخلات الموجبة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تتسبب دوال التنشيط المشبعة كدالة سيجمويد (مشتقاتها $\\le 0.25$) في تلاشي التدرجات أسياً؛ واستبدالها بوحدات التقويم الخطي $\\text{ReLU}(z) = \\max(0, z)$ يحافظ على تدرج ثابت قدره 1 للمدخلات الموجبة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch2_med_53",
      "titleEn": "[MEDIUM] Convolutional Layers, Pooling & ResNet Skip Connections - Analysis 53",
      "titleAr": "[مستوى متوسط] الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet - تحليل 53",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Convolutional Layers, Pooling & ResNet Skip Connections, what is the precise analytical formulation or operative rule? (Item 53)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 53)",
      "optionsEn": [
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "لحجم دخل $W$ ونواة $K$ وحشو $P$ وخطوة $S$، يكون بعد الخرج $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$؛ وتضيف شبكات ResNet مسارات هوية مباشرة $\\mathcal{F}(x) + x$ لتمرير التدرجات دون عوائق.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.",
      "correctAnswerEn": "Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.",
      "correctAnswerAr": "لحجم دخل $W$ ونواة $K$ وحشو $P$ وخطوة $S$، يكون بعد الخرج $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$؛ وتضيف شبكات ResNet مسارات هوية مباشرة $\\mathcal{F}(x) + x$ لتمرير التدرجات دون عوائق.",
      "correctIndex": 1,
      "explanationEn": "Analytical Derivation & Properties: Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: لحجم دخل $W$ ونواة $K$ وحشو $P$ وخطوة $S$، يكون بعد الخرج $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$؛ وتضيف شبكات ResNet مسارات هوية مباشرة $\\mathcal{F}(x) + x$ لتمرير التدرجات دون عوائق.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Convolutional Layers, Pooling & ResNet Skip Connections.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: لحجم دخل $W$ ونواة $K$ وحشو $P$ وخطوة $S$، يكون بعد الخرج $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$؛ وتضيف شبكات ResNet مسارات هوية مباشرة $\\mathcal{F}(x) + x$ لتمرير التدرجات دون عوائق.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch2_med_54",
      "titleEn": "[MEDIUM] Object Detection Pipelines, YOLO Architecture & IoU Metrics - Analysis 54",
      "titleAr": "[مستوى متوسط] خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU - تحليل 54",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Object Detection Pipelines, YOLO Architecture & IoU Metrics, what is the precise analytical formulation or operative rule? (Item 54)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 54)",
      "optionsEn": [
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs."
      ],
      "optionsAr": [
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "يقيس تقاطع الاتحاد (IoU) دقة تحديد صندوق الإحاطة بالعلاقة $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$، وتعتبر العينة إيجابية حقيقية إذا تجاوز IoU عتبة $0.50$ وتطابقت الفئة.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة."
      ],
      "correctAnswer": "Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.",
      "correctAnswerEn": "Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.",
      "correctAnswerAr": "يقيس تقاطع الاتحاد (IoU) دقة تحديد صندوق الإحاطة بالعلاقة $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$، وتعتبر العينة إيجابية حقيقية إذا تجاوز IoU عتبة $0.50$ وتطابقت الفئة.",
      "correctIndex": 2,
      "explanationEn": "Analytical Derivation & Properties: Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يقيس تقاطع الاتحاد (IoU) دقة تحديد صندوق الإحاطة بالعلاقة $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$، وتعتبر العينة إيجابية حقيقية إذا تجاوز IoU عتبة $0.50$ وتطابقت الفئة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Object Detection Pipelines, YOLO Architecture & IoU Metrics.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يقيس تقاطع الاتحاد (IoU) دقة تحديد صندوق الإحاطة بالعلاقة $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$، وتعتبر العينة إيجابية حقيقية إذا تجاوز IoU عتبة $0.50$ وتطابقت الفئة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch2_med_55",
      "titleEn": "[MEDIUM] Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions - Analysis 55",
      "titleAr": "[مستوى متوسط] الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج - تحليل 55",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions, what is the precise analytical formulation or operative rule? (Item 55)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 55)",
      "optionsEn": [
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations."
      ],
      "optionsAr": [
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تتسبب دوال التنشيط المشبعة كدالة سيجمويد (مشتقاتها $\\le 0.25$) في تلاشي التدرجات أسياً؛ واستبدالها بوحدات التقويم الخطي $\\text{ReLU}(z) = \\max(0, z)$ يحافظ على تدرج ثابت قدره 1 للمدخلات الموجبة."
      ],
      "correctAnswer": "Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.",
      "correctAnswerEn": "Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.",
      "correctAnswerAr": "تتسبب دوال التنشيط المشبعة كدالة سيجمويد (مشتقاتها $\\le 0.25$) في تلاشي التدرجات أسياً؛ واستبدالها بوحدات التقويم الخطي $\\text{ReLU}(z) = \\max(0, z)$ يحافظ على تدرج ثابت قدره 1 للمدخلات الموجبة.",
      "correctIndex": 3,
      "explanationEn": "Analytical Derivation & Properties: Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تتسبب دوال التنشيط المشبعة كدالة سيجمويد (مشتقاتها $\\le 0.25$) في تلاشي التدرجات أسياً؛ واستبدالها بوحدات التقويم الخطي $\\text{ReLU}(z) = \\max(0, z)$ يحافظ على تدرج ثابت قدره 1 للمدخلات الموجبة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تتسبب دوال التنشيط المشبعة كدالة سيجمويد (مشتقاتها $\\le 0.25$) في تلاشي التدرجات أسياً؛ واستبدالها بوحدات التقويم الخطي $\\text{ReLU}(z) = \\max(0, z)$ يحافظ على تدرج ثابت قدره 1 للمدخلات الموجبة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch2_med_56",
      "titleEn": "[MEDIUM] Convolutional Layers, Pooling & ResNet Skip Connections - Analysis 56",
      "titleAr": "[مستوى متوسط] الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet - تحليل 56",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Convolutional Layers, Pooling & ResNet Skip Connections, what is the precise analytical formulation or operative rule? (Item 56)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 56)",
      "optionsEn": [
        "Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.",
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "لحجم دخل $W$ ونواة $K$ وحشو $P$ وخطوة $S$، يكون بعد الخرج $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$؛ وتضيف شبكات ResNet مسارات هوية مباشرة $\\mathcal{F}(x) + x$ لتمرير التدرجات دون عوائق.",
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.",
      "correctAnswerEn": "Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.",
      "correctAnswerAr": "لحجم دخل $W$ ونواة $K$ وحشو $P$ وخطوة $S$، يكون بعد الخرج $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$؛ وتضيف شبكات ResNet مسارات هوية مباشرة $\\mathcal{F}(x) + x$ لتمرير التدرجات دون عوائق.",
      "correctIndex": 0,
      "explanationEn": "Analytical Derivation & Properties: Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: لحجم دخل $W$ ونواة $K$ وحشو $P$ وخطوة $S$، يكون بعد الخرج $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$؛ وتضيف شبكات ResNet مسارات هوية مباشرة $\\mathcal{F}(x) + x$ لتمرير التدرجات دون عوائق.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Convolutional Layers, Pooling & ResNet Skip Connections.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: لحجم دخل $W$ ونواة $K$ وحشو $P$ وخطوة $S$، يكون بعد الخرج $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$؛ وتضيف شبكات ResNet مسارات هوية مباشرة $\\mathcal{F}(x) + x$ لتمرير التدرجات دون عوائق.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch2_med_57",
      "titleEn": "[MEDIUM] Object Detection Pipelines, YOLO Architecture & IoU Metrics - Analysis 57",
      "titleAr": "[مستوى متوسط] خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU - تحليل 57",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Object Detection Pipelines, YOLO Architecture & IoU Metrics, what is the precise analytical formulation or operative rule? (Item 57)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 57)",
      "optionsEn": [
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.",
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data."
      ],
      "optionsAr": [
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "يقيس تقاطع الاتحاد (IoU) دقة تحديد صندوق الإحاطة بالعلاقة $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$، وتعتبر العينة إيجابية حقيقية إذا تجاوز IoU عتبة $0.50$ وتطابقت الفئة.",
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش."
      ],
      "correctAnswer": "Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.",
      "correctAnswerEn": "Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.",
      "correctAnswerAr": "يقيس تقاطع الاتحاد (IoU) دقة تحديد صندوق الإحاطة بالعلاقة $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$، وتعتبر العينة إيجابية حقيقية إذا تجاوز IoU عتبة $0.50$ وتطابقت الفئة.",
      "correctIndex": 1,
      "explanationEn": "Analytical Derivation & Properties: Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يقيس تقاطع الاتحاد (IoU) دقة تحديد صندوق الإحاطة بالعلاقة $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$، وتعتبر العينة إيجابية حقيقية إذا تجاوز IoU عتبة $0.50$ وتطابقت الفئة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Object Detection Pipelines, YOLO Architecture & IoU Metrics.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Intersection-over-Union measures bounding box localization accuracy as $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$, where a detection is considered a True Positive if $\\text{IoU} \\ge 0.50$ (or $0.75$) matching ground truth category.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يقيس تقاطع الاتحاد (IoU) دقة تحديد صندوق الإحاطة بالعلاقة $\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$، وتعتبر العينة إيجابية حقيقية إذا تجاوز IoU عتبة $0.50$ وتطابقت الفئة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch2_med_58",
      "titleEn": "[MEDIUM] Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions - Analysis 58",
      "titleAr": "[مستوى متوسط] الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج - تحليل 58",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions, what is the precise analytical formulation or operative rule? (Item 58)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 58)",
      "optionsEn": [
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.",
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan."
      ],
      "optionsAr": [
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تتسبب دوال التنشيط المشبعة كدالة سيجمويد (مشتقاتها $\\le 0.25$) في تلاشي التدرجات أسياً؛ واستبدالها بوحدات التقويم الخطي $\\text{ReLU}(z) = \\max(0, z)$ يحافظ على تدرج ثابت قدره 1 للمدخلات الموجبة.",
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG)."
      ],
      "correctAnswer": "Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.",
      "correctAnswerEn": "Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.",
      "correctAnswerAr": "تتسبب دوال التنشيط المشبعة كدالة سيجمويد (مشتقاتها $\\le 0.25$) في تلاشي التدرجات أسياً؛ واستبدالها بوحدات التقويم الخطي $\\text{ReLU}(z) = \\max(0, z)$ يحافظ على تدرج ثابت قدره 1 للمدخلات الموجبة.",
      "correctIndex": 2,
      "explanationEn": "Analytical Derivation & Properties: Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تتسبب دوال التنشيط المشبعة كدالة سيجمويد (مشتقاتها $\\le 0.25$) في تلاشي التدرجات أسياً؛ واستبدالها بوحدات التقويم الخطي $\\text{ReLU}(z) = \\max(0, z)$ يحافظ على تدرج ثابت قدره 1 للمدخلات الموجبة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Saturating activation functions like Sigmoid ($\\sigma'(z) \\le 0.25$) cause gradients to vanish exponentially across deep layers; replacing them with Rectified Linear Units ($\\text{ReLU}(z) = \\max(0, z)$) maintains unit gradient for positive activations.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تتسبب دوال التنشيط المشبعة كدالة سيجمويد (مشتقاتها $\\le 0.25$) في تلاشي التدرجات أسياً؛ واستبدالها بوحدات التقويم الخطي $\\text{ReLU}(z) = \\max(0, z)$ يحافظ على تدرج ثابت قدره 1 للمدخلات الموجبة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch2_med_59",
      "titleEn": "[MEDIUM] Convolutional Layers, Pooling & ResNet Skip Connections - Analysis 59",
      "titleAr": "[مستوى متوسط] الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet - تحليل 59",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Convolutional Layers, Pooling & ResNet Skip Connections, what is the precise analytical formulation or operative rule? (Item 59)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 59)",
      "optionsEn": [
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations."
      ],
      "optionsAr": [
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "لحجم دخل $W$ ونواة $K$ وحشو $P$ وخطوة $S$، يكون بعد الخرج $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$؛ وتضيف شبكات ResNet مسارات هوية مباشرة $\\mathcal{F}(x) + x$ لتمرير التدرجات دون عوائق."
      ],
      "correctAnswer": "Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.",
      "correctAnswerEn": "Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.",
      "correctAnswerAr": "لحجم دخل $W$ ونواة $K$ وحشو $P$ وخطوة $S$، يكون بعد الخرج $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$؛ وتضيف شبكات ResNet مسارات هوية مباشرة $\\mathcal{F}(x) + x$ لتمرير التدرجات دون عوائق.",
      "correctIndex": 3,
      "explanationEn": "Analytical Derivation & Properties: Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: لحجم دخل $W$ ونواة $K$ وحشو $P$ وخطوة $S$، يكون بعد الخرج $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$؛ وتضيف شبكات ResNet مسارات هوية مباشرة $\\mathcal{F}(x) + x$ لتمرير التدرجات دون عوائق.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Convolutional Layers, Pooling & ResNet Skip Connections.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Given input size $W$, kernel size $K$, padding $P$, and stride $S$, the output feature map dimension is $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$; ResNet blocks add identity shortcuts $\\mathcal{F}(x) + x$ allowing gradients to bypass nonlinear transformations.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: لحجم دخل $W$ ونواة $K$ وحشو $P$ وخطوة $S$، يكون بعد الخرج $W_{out} = \\lfloor \\frac{W - K + 2P}{S} \\rfloor + 1$؛ وتضيف شبكات ResNet مسارات هوية مباشرة $\\mathcal{F}(x) + x$ لتمرير التدرجات دون عوائق.."
      ],
      "difficulty": "medium"
    }
  ],
  "hots": [
    {
      "id": "th_ai_data_science_ch2_hots_1",
      "titleEn": "[HOTS] Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions - Evaluation 1",
      "titleAr": "[تفكير عليا] الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج - تقييم 1",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions: (Problem 1)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج: (مسألة 1)",
      "optionsEn": [
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "في شبكة عميقة من 10 طبقات بدالة سيجمويد، يتقلص التدرج بعامل $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$ مما يوقف التعلم؛ بينما يحافظ تهيئة He مع Leaky ReLU على تباين التدرج قريباً من $1.0$.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.",
      "correctAnswerEn": "In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.",
      "correctAnswerAr": "في شبكة عميقة من 10 طبقات بدالة سيجمويد، يتقلص التدرج بعامل $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$ مما يوقف التعلم؛ بينما يحافظ تهيئة He مع Leaky ReLU على تباين التدرج قريباً من $1.0$.",
      "correctIndex": 2,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في شبكة عميقة من 10 طبقات بدالة سيجمويد، يتقلص التدرج بعامل $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$ مما يوقف التعلم؛ بينما يحافظ تهيئة He مع Leaky ReLU على تباين التدرج قريباً من $1.0$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في شبكة عميقة من 10 طبقات بدالة سيجمويد، يتقلص التدرج بعامل $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$ مما يوقف التعلم؛ بينما يحافظ تهيئة He مع Leaky ReLU على تباين التدرج قريباً من $1.0$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch2_hots_2",
      "titleEn": "[HOTS] Convolutional Layers, Pooling & ResNet Skip Connections - Evaluation 2",
      "titleAr": "[تفكير عليا] الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet - تقييم 2",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Convolutional Layers, Pooling & ResNet Skip Connections: (Problem 2)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet: (مسألة 2)",
      "optionsEn": [
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$."
      ],
      "optionsAr": [
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "صورة بحجم $224 \\times 224 \\times 3$ تُمرر في طبقة التفافية بـ 64 مرشح بحجم $7 \\times 7$ وخطوة $S=2$ وحشو $P=3$، تنتج خريطة خصائص بأبعاد $\\frac{224 - 7 + 6}{2} + 1 = 112 \\times 112 \\times 64$."
      ],
      "correctAnswer": "An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$.",
      "correctAnswerEn": "An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$.",
      "correctAnswerAr": "صورة بحجم $224 \\times 224 \\times 3$ تُمرر في طبقة التفافية بـ 64 مرشح بحجم $7 \\times 7$ وخطوة $S=2$ وحشو $P=3$، تنتج خريطة خصائص بأبعاد $\\frac{224 - 7 + 6}{2} + 1 = 112 \\times 112 \\times 64$.",
      "correctIndex": 3,
      "explanationEn": "Detailed Solution & Numerical Evaluation: An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: صورة بحجم $224 \\times 224 \\times 3$ تُمرر في طبقة التفافية بـ 64 مرشح بحجم $7 \\times 7$ وخطوة $S=2$ وحشو $P=3$، تنتج خريطة خصائص بأبعاد $\\frac{224 - 7 + 6}{2} + 1 = 112 \\times 112 \\times 64$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Convolutional Layers, Pooling & ResNet Skip Connections.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: صورة بحجم $224 \\times 224 \\times 3$ تُمرر في طبقة التفافية بـ 64 مرشح بحجم $7 \\times 7$ وخطوة $S=2$ وحشو $P=3$، تنتج خريطة خصائص بأبعاد $\\frac{224 - 7 + 6}{2} + 1 = 112 \\times 112 \\times 64$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch2_hots_3",
      "titleEn": "[HOTS] Object Detection Pipelines, YOLO Architecture & IoU Metrics - Evaluation 3",
      "titleAr": "[تفكير عليا] خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU - تقييم 3",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Object Detection Pipelines, YOLO Architecture & IoU Metrics: (Problem 3)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU: (مسألة 3)",
      "optionsEn": [
        "For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "لكاميرا مركبة ذاتية القيادة رصدت عائقاً بصندوق حقيقي $10,000\\text{ px}^2$ وصندوق متوقع $10,000\\text{ px}^2$ وتداخل $6,400\\text{ px}^2$، تبلغ مساحة الاتحاد $13,600\\text{ px}^2$ ويكون $\\text{IoU} = 0.4706$ وهو دون عتبة القبول $0.50$.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold.",
      "correctAnswerEn": "For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold.",
      "correctAnswerAr": "لكاميرا مركبة ذاتية القيادة رصدت عائقاً بصندوق حقيقي $10,000\\text{ px}^2$ وصندوق متوقع $10,000\\text{ px}^2$ وتداخل $6,400\\text{ px}^2$، تبلغ مساحة الاتحاد $13,600\\text{ px}^2$ ويكون $\\text{IoU} = 0.4706$ وهو دون عتبة القبول $0.50$.",
      "correctIndex": 0,
      "explanationEn": "Detailed Solution & Numerical Evaluation: For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: لكاميرا مركبة ذاتية القيادة رصدت عائقاً بصندوق حقيقي $10,000\\text{ px}^2$ وصندوق متوقع $10,000\\text{ px}^2$ وتداخل $6,400\\text{ px}^2$، تبلغ مساحة الاتحاد $13,600\\text{ px}^2$ ويكون $\\text{IoU} = 0.4706$ وهو دون عتبة القبول $0.50$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Object Detection Pipelines, YOLO Architecture & IoU Metrics.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: لكاميرا مركبة ذاتية القيادة رصدت عائقاً بصندوق حقيقي $10,000\\text{ px}^2$ وصندوق متوقع $10,000\\text{ px}^2$ وتداخل $6,400\\text{ px}^2$، تبلغ مساحة الاتحاد $13,600\\text{ px}^2$ ويكون $\\text{IoU} = 0.4706$ وهو دون عتبة القبول $0.50$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch2_hots_4",
      "titleEn": "[HOTS] Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions - Evaluation 4",
      "titleAr": "[تفكير عليا] الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج - تقييم 4",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions: (Problem 4)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج: (مسألة 4)",
      "optionsEn": [
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "في شبكة عميقة من 10 طبقات بدالة سيجمويد، يتقلص التدرج بعامل $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$ مما يوقف التعلم؛ بينما يحافظ تهيئة He مع Leaky ReLU على تباين التدرج قريباً من $1.0$.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.",
      "correctAnswerEn": "In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.",
      "correctAnswerAr": "في شبكة عميقة من 10 طبقات بدالة سيجمويد، يتقلص التدرج بعامل $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$ مما يوقف التعلم؛ بينما يحافظ تهيئة He مع Leaky ReLU على تباين التدرج قريباً من $1.0$.",
      "correctIndex": 1,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في شبكة عميقة من 10 طبقات بدالة سيجمويد، يتقلص التدرج بعامل $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$ مما يوقف التعلم؛ بينما يحافظ تهيئة He مع Leaky ReLU على تباين التدرج قريباً من $1.0$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في شبكة عميقة من 10 طبقات بدالة سيجمويد، يتقلص التدرج بعامل $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$ مما يوقف التعلم؛ بينما يحافظ تهيئة He مع Leaky ReLU على تباين التدرج قريباً من $1.0$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch2_hots_5",
      "titleEn": "[HOTS] Convolutional Layers, Pooling & ResNet Skip Connections - Evaluation 5",
      "titleAr": "[تفكير عليا] الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet - تقييم 5",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Convolutional Layers, Pooling & ResNet Skip Connections: (Problem 5)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet: (مسألة 5)",
      "optionsEn": [
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "صورة بحجم $224 \\times 224 \\times 3$ تُمرر في طبقة التفافية بـ 64 مرشح بحجم $7 \\times 7$ وخطوة $S=2$ وحشو $P=3$، تنتج خريطة خصائص بأبعاد $\\frac{224 - 7 + 6}{2} + 1 = 112 \\times 112 \\times 64$.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$.",
      "correctAnswerEn": "An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$.",
      "correctAnswerAr": "صورة بحجم $224 \\times 224 \\times 3$ تُمرر في طبقة التفافية بـ 64 مرشح بحجم $7 \\times 7$ وخطوة $S=2$ وحشو $P=3$، تنتج خريطة خصائص بأبعاد $\\frac{224 - 7 + 6}{2} + 1 = 112 \\times 112 \\times 64$.",
      "correctIndex": 2,
      "explanationEn": "Detailed Solution & Numerical Evaluation: An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: صورة بحجم $224 \\times 224 \\times 3$ تُمرر في طبقة التفافية بـ 64 مرشح بحجم $7 \\times 7$ وخطوة $S=2$ وحشو $P=3$، تنتج خريطة خصائص بأبعاد $\\frac{224 - 7 + 6}{2} + 1 = 112 \\times 112 \\times 64$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Convolutional Layers, Pooling & ResNet Skip Connections.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: صورة بحجم $224 \\times 224 \\times 3$ تُمرر في طبقة التفافية بـ 64 مرشح بحجم $7 \\times 7$ وخطوة $S=2$ وحشو $P=3$، تنتج خريطة خصائص بأبعاد $\\frac{224 - 7 + 6}{2} + 1 = 112 \\times 112 \\times 64$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch2_hots_6",
      "titleEn": "[HOTS] Object Detection Pipelines, YOLO Architecture & IoU Metrics - Evaluation 6",
      "titleAr": "[تفكير عليا] خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU - تقييم 6",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Object Detection Pipelines, YOLO Architecture & IoU Metrics: (Problem 6)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU: (مسألة 6)",
      "optionsEn": [
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold."
      ],
      "optionsAr": [
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "لكاميرا مركبة ذاتية القيادة رصدت عائقاً بصندوق حقيقي $10,000\\text{ px}^2$ وصندوق متوقع $10,000\\text{ px}^2$ وتداخل $6,400\\text{ px}^2$، تبلغ مساحة الاتحاد $13,600\\text{ px}^2$ ويكون $\\text{IoU} = 0.4706$ وهو دون عتبة القبول $0.50$."
      ],
      "correctAnswer": "For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold.",
      "correctAnswerEn": "For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold.",
      "correctAnswerAr": "لكاميرا مركبة ذاتية القيادة رصدت عائقاً بصندوق حقيقي $10,000\\text{ px}^2$ وصندوق متوقع $10,000\\text{ px}^2$ وتداخل $6,400\\text{ px}^2$، تبلغ مساحة الاتحاد $13,600\\text{ px}^2$ ويكون $\\text{IoU} = 0.4706$ وهو دون عتبة القبول $0.50$.",
      "correctIndex": 3,
      "explanationEn": "Detailed Solution & Numerical Evaluation: For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: لكاميرا مركبة ذاتية القيادة رصدت عائقاً بصندوق حقيقي $10,000\\text{ px}^2$ وصندوق متوقع $10,000\\text{ px}^2$ وتداخل $6,400\\text{ px}^2$، تبلغ مساحة الاتحاد $13,600\\text{ px}^2$ ويكون $\\text{IoU} = 0.4706$ وهو دون عتبة القبول $0.50$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Object Detection Pipelines, YOLO Architecture & IoU Metrics.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: لكاميرا مركبة ذاتية القيادة رصدت عائقاً بصندوق حقيقي $10,000\\text{ px}^2$ وصندوق متوقع $10,000\\text{ px}^2$ وتداخل $6,400\\text{ px}^2$، تبلغ مساحة الاتحاد $13,600\\text{ px}^2$ ويكون $\\text{IoU} = 0.4706$ وهو دون عتبة القبول $0.50$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch2_hots_7",
      "titleEn": "[HOTS] Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions - Evaluation 7",
      "titleAr": "[تفكير عليا] الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج - تقييم 7",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions: (Problem 7)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج: (مسألة 7)",
      "optionsEn": [
        "In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "في شبكة عميقة من 10 طبقات بدالة سيجمويد، يتقلص التدرج بعامل $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$ مما يوقف التعلم؛ بينما يحافظ تهيئة He مع Leaky ReLU على تباين التدرج قريباً من $1.0$.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.",
      "correctAnswerEn": "In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.",
      "correctAnswerAr": "في شبكة عميقة من 10 طبقات بدالة سيجمويد، يتقلص التدرج بعامل $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$ مما يوقف التعلم؛ بينما يحافظ تهيئة He مع Leaky ReLU على تباين التدرج قريباً من $1.0$.",
      "correctIndex": 0,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في شبكة عميقة من 10 طبقات بدالة سيجمويد، يتقلص التدرج بعامل $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$ مما يوقف التعلم؛ بينما يحافظ تهيئة He مع Leaky ReLU على تباين التدرج قريباً من $1.0$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في شبكة عميقة من 10 طبقات بدالة سيجمويد، يتقلص التدرج بعامل $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$ مما يوقف التعلم؛ بينما يحافظ تهيئة He مع Leaky ReLU على تباين التدرج قريباً من $1.0$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch2_hots_8",
      "titleEn": "[HOTS] Convolutional Layers, Pooling & ResNet Skip Connections - Evaluation 8",
      "titleAr": "[تفكير عليا] الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet - تقييم 8",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Convolutional Layers, Pooling & ResNet Skip Connections: (Problem 8)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet: (مسألة 8)",
      "optionsEn": [
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "صورة بحجم $224 \\times 224 \\times 3$ تُمرر في طبقة التفافية بـ 64 مرشح بحجم $7 \\times 7$ وخطوة $S=2$ وحشو $P=3$، تنتج خريطة خصائص بأبعاد $\\frac{224 - 7 + 6}{2} + 1 = 112 \\times 112 \\times 64$.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$.",
      "correctAnswerEn": "An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$.",
      "correctAnswerAr": "صورة بحجم $224 \\times 224 \\times 3$ تُمرر في طبقة التفافية بـ 64 مرشح بحجم $7 \\times 7$ وخطوة $S=2$ وحشو $P=3$، تنتج خريطة خصائص بأبعاد $\\frac{224 - 7 + 6}{2} + 1 = 112 \\times 112 \\times 64$.",
      "correctIndex": 1,
      "explanationEn": "Detailed Solution & Numerical Evaluation: An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: صورة بحجم $224 \\times 224 \\times 3$ تُمرر في طبقة التفافية بـ 64 مرشح بحجم $7 \\times 7$ وخطوة $S=2$ وحشو $P=3$، تنتج خريطة خصائص بأبعاد $\\frac{224 - 7 + 6}{2} + 1 = 112 \\times 112 \\times 64$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Convolutional Layers, Pooling & ResNet Skip Connections.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: صورة بحجم $224 \\times 224 \\times 3$ تُمرر في طبقة التفافية بـ 64 مرشح بحجم $7 \\times 7$ وخطوة $S=2$ وحشو $P=3$، تنتج خريطة خصائص بأبعاد $\\frac{224 - 7 + 6}{2} + 1 = 112 \\times 112 \\times 64$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch2_hots_9",
      "titleEn": "[HOTS] Object Detection Pipelines, YOLO Architecture & IoU Metrics - Evaluation 9",
      "titleAr": "[تفكير عليا] خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU - تقييم 9",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Object Detection Pipelines, YOLO Architecture & IoU Metrics: (Problem 9)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU: (مسألة 9)",
      "optionsEn": [
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "لكاميرا مركبة ذاتية القيادة رصدت عائقاً بصندوق حقيقي $10,000\\text{ px}^2$ وصندوق متوقع $10,000\\text{ px}^2$ وتداخل $6,400\\text{ px}^2$، تبلغ مساحة الاتحاد $13,600\\text{ px}^2$ ويكون $\\text{IoU} = 0.4706$ وهو دون عتبة القبول $0.50$.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold.",
      "correctAnswerEn": "For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold.",
      "correctAnswerAr": "لكاميرا مركبة ذاتية القيادة رصدت عائقاً بصندوق حقيقي $10,000\\text{ px}^2$ وصندوق متوقع $10,000\\text{ px}^2$ وتداخل $6,400\\text{ px}^2$، تبلغ مساحة الاتحاد $13,600\\text{ px}^2$ ويكون $\\text{IoU} = 0.4706$ وهو دون عتبة القبول $0.50$.",
      "correctIndex": 2,
      "explanationEn": "Detailed Solution & Numerical Evaluation: For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: لكاميرا مركبة ذاتية القيادة رصدت عائقاً بصندوق حقيقي $10,000\\text{ px}^2$ وصندوق متوقع $10,000\\text{ px}^2$ وتداخل $6,400\\text{ px}^2$، تبلغ مساحة الاتحاد $13,600\\text{ px}^2$ ويكون $\\text{IoU} = 0.4706$ وهو دون عتبة القبول $0.50$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Object Detection Pipelines, YOLO Architecture & IoU Metrics.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: لكاميرا مركبة ذاتية القيادة رصدت عائقاً بصندوق حقيقي $10,000\\text{ px}^2$ وصندوق متوقع $10,000\\text{ px}^2$ وتداخل $6,400\\text{ px}^2$، تبلغ مساحة الاتحاد $13,600\\text{ px}^2$ ويكون $\\text{IoU} = 0.4706$ وهو دون عتبة القبول $0.50$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch2_hots_10",
      "titleEn": "[HOTS] Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions - Evaluation 10",
      "titleAr": "[تفكير عليا] الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج - تقييم 10",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions: (Problem 10)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج: (مسألة 10)",
      "optionsEn": [
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers."
      ],
      "optionsAr": [
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "في شبكة عميقة من 10 طبقات بدالة سيجمويد، يتقلص التدرج بعامل $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$ مما يوقف التعلم؛ بينما يحافظ تهيئة He مع Leaky ReLU على تباين التدرج قريباً من $1.0$."
      ],
      "correctAnswer": "In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.",
      "correctAnswerEn": "In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.",
      "correctAnswerAr": "في شبكة عميقة من 10 طبقات بدالة سيجمويد، يتقلص التدرج بعامل $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$ مما يوقف التعلم؛ بينما يحافظ تهيئة He مع Leaky ReLU على تباين التدرج قريباً من $1.0$.",
      "correctIndex": 3,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في شبكة عميقة من 10 طبقات بدالة سيجمويد، يتقلص التدرج بعامل $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$ مما يوقف التعلم؛ بينما يحافظ تهيئة He مع Leaky ReLU على تباين التدرج قريباً من $1.0$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في شبكة عميقة من 10 طبقات بدالة سيجمويد، يتقلص التدرج بعامل $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$ مما يوقف التعلم؛ بينما يحافظ تهيئة He مع Leaky ReLU على تباين التدرج قريباً من $1.0$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch2_hots_11",
      "titleEn": "[HOTS] Convolutional Layers, Pooling & ResNet Skip Connections - Evaluation 11",
      "titleAr": "[تفكير عليا] الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet - تقييم 11",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Convolutional Layers, Pooling & ResNet Skip Connections: (Problem 11)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet: (مسألة 11)",
      "optionsEn": [
        "An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "صورة بحجم $224 \\times 224 \\times 3$ تُمرر في طبقة التفافية بـ 64 مرشح بحجم $7 \\times 7$ وخطوة $S=2$ وحشو $P=3$، تنتج خريطة خصائص بأبعاد $\\frac{224 - 7 + 6}{2} + 1 = 112 \\times 112 \\times 64$.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$.",
      "correctAnswerEn": "An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$.",
      "correctAnswerAr": "صورة بحجم $224 \\times 224 \\times 3$ تُمرر في طبقة التفافية بـ 64 مرشح بحجم $7 \\times 7$ وخطوة $S=2$ وحشو $P=3$، تنتج خريطة خصائص بأبعاد $\\frac{224 - 7 + 6}{2} + 1 = 112 \\times 112 \\times 64$.",
      "correctIndex": 0,
      "explanationEn": "Detailed Solution & Numerical Evaluation: An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: صورة بحجم $224 \\times 224 \\times 3$ تُمرر في طبقة التفافية بـ 64 مرشح بحجم $7 \\times 7$ وخطوة $S=2$ وحشو $P=3$، تنتج خريطة خصائص بأبعاد $\\frac{224 - 7 + 6}{2} + 1 = 112 \\times 112 \\times 64$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Convolutional Layers, Pooling & ResNet Skip Connections.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: صورة بحجم $224 \\times 224 \\times 3$ تُمرر في طبقة التفافية بـ 64 مرشح بحجم $7 \\times 7$ وخطوة $S=2$ وحشو $P=3$، تنتج خريطة خصائص بأبعاد $\\frac{224 - 7 + 6}{2} + 1 = 112 \\times 112 \\times 64$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch2_hots_12",
      "titleEn": "[HOTS] Object Detection Pipelines, YOLO Architecture & IoU Metrics - Evaluation 12",
      "titleAr": "[تفكير عليا] خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU - تقييم 12",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Object Detection Pipelines, YOLO Architecture & IoU Metrics: (Problem 12)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU: (مسألة 12)",
      "optionsEn": [
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "لكاميرا مركبة ذاتية القيادة رصدت عائقاً بصندوق حقيقي $10,000\\text{ px}^2$ وصندوق متوقع $10,000\\text{ px}^2$ وتداخل $6,400\\text{ px}^2$، تبلغ مساحة الاتحاد $13,600\\text{ px}^2$ ويكون $\\text{IoU} = 0.4706$ وهو دون عتبة القبول $0.50$.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold.",
      "correctAnswerEn": "For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold.",
      "correctAnswerAr": "لكاميرا مركبة ذاتية القيادة رصدت عائقاً بصندوق حقيقي $10,000\\text{ px}^2$ وصندوق متوقع $10,000\\text{ px}^2$ وتداخل $6,400\\text{ px}^2$، تبلغ مساحة الاتحاد $13,600\\text{ px}^2$ ويكون $\\text{IoU} = 0.4706$ وهو دون عتبة القبول $0.50$.",
      "correctIndex": 1,
      "explanationEn": "Detailed Solution & Numerical Evaluation: For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: لكاميرا مركبة ذاتية القيادة رصدت عائقاً بصندوق حقيقي $10,000\\text{ px}^2$ وصندوق متوقع $10,000\\text{ px}^2$ وتداخل $6,400\\text{ px}^2$، تبلغ مساحة الاتحاد $13,600\\text{ px}^2$ ويكون $\\text{IoU} = 0.4706$ وهو دون عتبة القبول $0.50$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Object Detection Pipelines, YOLO Architecture & IoU Metrics.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: لكاميرا مركبة ذاتية القيادة رصدت عائقاً بصندوق حقيقي $10,000\\text{ px}^2$ وصندوق متوقع $10,000\\text{ px}^2$ وتداخل $6,400\\text{ px}^2$، تبلغ مساحة الاتحاد $13,600\\text{ px}^2$ ويكون $\\text{IoU} = 0.4706$ وهو دون عتبة القبول $0.50$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch2_hots_13",
      "titleEn": "[HOTS] Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions - Evaluation 13",
      "titleAr": "[تفكير عليا] الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج - تقييم 13",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions: (Problem 13)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج: (مسألة 13)",
      "optionsEn": [
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "في شبكة عميقة من 10 طبقات بدالة سيجمويد، يتقلص التدرج بعامل $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$ مما يوقف التعلم؛ بينما يحافظ تهيئة He مع Leaky ReLU على تباين التدرج قريباً من $1.0$.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.",
      "correctAnswerEn": "In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.",
      "correctAnswerAr": "في شبكة عميقة من 10 طبقات بدالة سيجمويد، يتقلص التدرج بعامل $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$ مما يوقف التعلم؛ بينما يحافظ تهيئة He مع Leaky ReLU على تباين التدرج قريباً من $1.0$.",
      "correctIndex": 2,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في شبكة عميقة من 10 طبقات بدالة سيجمويد، يتقلص التدرج بعامل $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$ مما يوقف التعلم؛ بينما يحافظ تهيئة He مع Leaky ReLU على تباين التدرج قريباً من $1.0$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في شبكة عميقة من 10 طبقات بدالة سيجمويد، يتقلص التدرج بعامل $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$ مما يوقف التعلم؛ بينما يحافظ تهيئة He مع Leaky ReLU على تباين التدرج قريباً من $1.0$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch2_hots_14",
      "titleEn": "[HOTS] Convolutional Layers, Pooling & ResNet Skip Connections - Evaluation 14",
      "titleAr": "[تفكير عليا] الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet - تقييم 14",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Convolutional Layers, Pooling & ResNet Skip Connections: (Problem 14)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet: (مسألة 14)",
      "optionsEn": [
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$."
      ],
      "optionsAr": [
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "صورة بحجم $224 \\times 224 \\times 3$ تُمرر في طبقة التفافية بـ 64 مرشح بحجم $7 \\times 7$ وخطوة $S=2$ وحشو $P=3$، تنتج خريطة خصائص بأبعاد $\\frac{224 - 7 + 6}{2} + 1 = 112 \\times 112 \\times 64$."
      ],
      "correctAnswer": "An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$.",
      "correctAnswerEn": "An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$.",
      "correctAnswerAr": "صورة بحجم $224 \\times 224 \\times 3$ تُمرر في طبقة التفافية بـ 64 مرشح بحجم $7 \\times 7$ وخطوة $S=2$ وحشو $P=3$، تنتج خريطة خصائص بأبعاد $\\frac{224 - 7 + 6}{2} + 1 = 112 \\times 112 \\times 64$.",
      "correctIndex": 3,
      "explanationEn": "Detailed Solution & Numerical Evaluation: An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: صورة بحجم $224 \\times 224 \\times 3$ تُمرر في طبقة التفافية بـ 64 مرشح بحجم $7 \\times 7$ وخطوة $S=2$ وحشو $P=3$، تنتج خريطة خصائص بأبعاد $\\frac{224 - 7 + 6}{2} + 1 = 112 \\times 112 \\times 64$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Convolutional Layers, Pooling & ResNet Skip Connections.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: صورة بحجم $224 \\times 224 \\times 3$ تُمرر في طبقة التفافية بـ 64 مرشح بحجم $7 \\times 7$ وخطوة $S=2$ وحشو $P=3$، تنتج خريطة خصائص بأبعاد $\\frac{224 - 7 + 6}{2} + 1 = 112 \\times 112 \\times 64$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch2_hots_15",
      "titleEn": "[HOTS] Object Detection Pipelines, YOLO Architecture & IoU Metrics - Evaluation 15",
      "titleAr": "[تفكير عليا] خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU - تقييم 15",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Object Detection Pipelines, YOLO Architecture & IoU Metrics: (Problem 15)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU: (مسألة 15)",
      "optionsEn": [
        "For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "لكاميرا مركبة ذاتية القيادة رصدت عائقاً بصندوق حقيقي $10,000\\text{ px}^2$ وصندوق متوقع $10,000\\text{ px}^2$ وتداخل $6,400\\text{ px}^2$، تبلغ مساحة الاتحاد $13,600\\text{ px}^2$ ويكون $\\text{IoU} = 0.4706$ وهو دون عتبة القبول $0.50$.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold.",
      "correctAnswerEn": "For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold.",
      "correctAnswerAr": "لكاميرا مركبة ذاتية القيادة رصدت عائقاً بصندوق حقيقي $10,000\\text{ px}^2$ وصندوق متوقع $10,000\\text{ px}^2$ وتداخل $6,400\\text{ px}^2$، تبلغ مساحة الاتحاد $13,600\\text{ px}^2$ ويكون $\\text{IoU} = 0.4706$ وهو دون عتبة القبول $0.50$.",
      "correctIndex": 0,
      "explanationEn": "Detailed Solution & Numerical Evaluation: For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: لكاميرا مركبة ذاتية القيادة رصدت عائقاً بصندوق حقيقي $10,000\\text{ px}^2$ وصندوق متوقع $10,000\\text{ px}^2$ وتداخل $6,400\\text{ px}^2$، تبلغ مساحة الاتحاد $13,600\\text{ px}^2$ ويكون $\\text{IoU} = 0.4706$ وهو دون عتبة القبول $0.50$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Object Detection Pipelines, YOLO Architecture & IoU Metrics.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: لكاميرا مركبة ذاتية القيادة رصدت عائقاً بصندوق حقيقي $10,000\\text{ px}^2$ وصندوق متوقع $10,000\\text{ px}^2$ وتداخل $6,400\\text{ px}^2$، تبلغ مساحة الاتحاد $13,600\\text{ px}^2$ ويكون $\\text{IoU} = 0.4706$ وهو دون عتبة القبول $0.50$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch2_hots_16",
      "titleEn": "[HOTS] Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions - Evaluation 16",
      "titleAr": "[تفكير عليا] الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج - تقييم 16",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions: (Problem 16)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج: (مسألة 16)",
      "optionsEn": [
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "في شبكة عميقة من 10 طبقات بدالة سيجمويد، يتقلص التدرج بعامل $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$ مما يوقف التعلم؛ بينما يحافظ تهيئة He مع Leaky ReLU على تباين التدرج قريباً من $1.0$.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.",
      "correctAnswerEn": "In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.",
      "correctAnswerAr": "في شبكة عميقة من 10 طبقات بدالة سيجمويد، يتقلص التدرج بعامل $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$ مما يوقف التعلم؛ بينما يحافظ تهيئة He مع Leaky ReLU على تباين التدرج قريباً من $1.0$.",
      "correctIndex": 1,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في شبكة عميقة من 10 طبقات بدالة سيجمويد، يتقلص التدرج بعامل $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$ مما يوقف التعلم؛ بينما يحافظ تهيئة He مع Leaky ReLU على تباين التدرج قريباً من $1.0$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في شبكة عميقة من 10 طبقات بدالة سيجمويد، يتقلص التدرج بعامل $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$ مما يوقف التعلم؛ بينما يحافظ تهيئة He مع Leaky ReLU على تباين التدرج قريباً من $1.0$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch2_hots_17",
      "titleEn": "[HOTS] Convolutional Layers, Pooling & ResNet Skip Connections - Evaluation 17",
      "titleAr": "[تفكير عليا] الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet - تقييم 17",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Convolutional Layers, Pooling & ResNet Skip Connections: (Problem 17)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet: (مسألة 17)",
      "optionsEn": [
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "صورة بحجم $224 \\times 224 \\times 3$ تُمرر في طبقة التفافية بـ 64 مرشح بحجم $7 \\times 7$ وخطوة $S=2$ وحشو $P=3$، تنتج خريطة خصائص بأبعاد $\\frac{224 - 7 + 6}{2} + 1 = 112 \\times 112 \\times 64$.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$.",
      "correctAnswerEn": "An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$.",
      "correctAnswerAr": "صورة بحجم $224 \\times 224 \\times 3$ تُمرر في طبقة التفافية بـ 64 مرشح بحجم $7 \\times 7$ وخطوة $S=2$ وحشو $P=3$، تنتج خريطة خصائص بأبعاد $\\frac{224 - 7 + 6}{2} + 1 = 112 \\times 112 \\times 64$.",
      "correctIndex": 2,
      "explanationEn": "Detailed Solution & Numerical Evaluation: An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: صورة بحجم $224 \\times 224 \\times 3$ تُمرر في طبقة التفافية بـ 64 مرشح بحجم $7 \\times 7$ وخطوة $S=2$ وحشو $P=3$، تنتج خريطة خصائص بأبعاد $\\frac{224 - 7 + 6}{2} + 1 = 112 \\times 112 \\times 64$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Convolutional Layers, Pooling & ResNet Skip Connections.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: صورة بحجم $224 \\times 224 \\times 3$ تُمرر في طبقة التفافية بـ 64 مرشح بحجم $7 \\times 7$ وخطوة $S=2$ وحشو $P=3$، تنتج خريطة خصائص بأبعاد $\\frac{224 - 7 + 6}{2} + 1 = 112 \\times 112 \\times 64$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch2_hots_18",
      "titleEn": "[HOTS] Object Detection Pipelines, YOLO Architecture & IoU Metrics - Evaluation 18",
      "titleAr": "[تفكير عليا] خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU - تقييم 18",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Object Detection Pipelines, YOLO Architecture & IoU Metrics: (Problem 18)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU: (مسألة 18)",
      "optionsEn": [
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold."
      ],
      "optionsAr": [
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "لكاميرا مركبة ذاتية القيادة رصدت عائقاً بصندوق حقيقي $10,000\\text{ px}^2$ وصندوق متوقع $10,000\\text{ px}^2$ وتداخل $6,400\\text{ px}^2$، تبلغ مساحة الاتحاد $13,600\\text{ px}^2$ ويكون $\\text{IoU} = 0.4706$ وهو دون عتبة القبول $0.50$."
      ],
      "correctAnswer": "For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold.",
      "correctAnswerEn": "For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold.",
      "correctAnswerAr": "لكاميرا مركبة ذاتية القيادة رصدت عائقاً بصندوق حقيقي $10,000\\text{ px}^2$ وصندوق متوقع $10,000\\text{ px}^2$ وتداخل $6,400\\text{ px}^2$، تبلغ مساحة الاتحاد $13,600\\text{ px}^2$ ويكون $\\text{IoU} = 0.4706$ وهو دون عتبة القبول $0.50$.",
      "correctIndex": 3,
      "explanationEn": "Detailed Solution & Numerical Evaluation: For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: لكاميرا مركبة ذاتية القيادة رصدت عائقاً بصندوق حقيقي $10,000\\text{ px}^2$ وصندوق متوقع $10,000\\text{ px}^2$ وتداخل $6,400\\text{ px}^2$، تبلغ مساحة الاتحاد $13,600\\text{ px}^2$ ويكون $\\text{IoU} = 0.4706$ وهو دون عتبة القبول $0.50$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Object Detection Pipelines, YOLO Architecture & IoU Metrics.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: لكاميرا مركبة ذاتية القيادة رصدت عائقاً بصندوق حقيقي $10,000\\text{ px}^2$ وصندوق متوقع $10,000\\text{ px}^2$ وتداخل $6,400\\text{ px}^2$، تبلغ مساحة الاتحاد $13,600\\text{ px}^2$ ويكون $\\text{IoU} = 0.4706$ وهو دون عتبة القبول $0.50$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch2_hots_19",
      "titleEn": "[HOTS] Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions - Evaluation 19",
      "titleAr": "[تفكير عليا] الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج - تقييم 19",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions: (Problem 19)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج: (مسألة 19)",
      "optionsEn": [
        "In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "في شبكة عميقة من 10 طبقات بدالة سيجمويد، يتقلص التدرج بعامل $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$ مما يوقف التعلم؛ بينما يحافظ تهيئة He مع Leaky ReLU على تباين التدرج قريباً من $1.0$.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.",
      "correctAnswerEn": "In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.",
      "correctAnswerAr": "في شبكة عميقة من 10 طبقات بدالة سيجمويد، يتقلص التدرج بعامل $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$ مما يوقف التعلم؛ بينما يحافظ تهيئة He مع Leaky ReLU على تباين التدرج قريباً من $1.0$.",
      "correctIndex": 0,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في شبكة عميقة من 10 طبقات بدالة سيجمويد، يتقلص التدرج بعامل $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$ مما يوقف التعلم؛ بينما يحافظ تهيئة He مع Leaky ReLU على تباين التدرج قريباً من $1.0$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في شبكة عميقة من 10 طبقات بدالة سيجمويد، يتقلص التدرج بعامل $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$ مما يوقف التعلم؛ بينما يحافظ تهيئة He مع Leaky ReLU على تباين التدرج قريباً من $1.0$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch2_hots_20",
      "titleEn": "[HOTS] Convolutional Layers, Pooling & ResNet Skip Connections - Evaluation 20",
      "titleAr": "[تفكير عليا] الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet - تقييم 20",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Convolutional Layers, Pooling & ResNet Skip Connections: (Problem 20)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet: (مسألة 20)",
      "optionsEn": [
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "صورة بحجم $224 \\times 224 \\times 3$ تُمرر في طبقة التفافية بـ 64 مرشح بحجم $7 \\times 7$ وخطوة $S=2$ وحشو $P=3$، تنتج خريطة خصائص بأبعاد $\\frac{224 - 7 + 6}{2} + 1 = 112 \\times 112 \\times 64$.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$.",
      "correctAnswerEn": "An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$.",
      "correctAnswerAr": "صورة بحجم $224 \\times 224 \\times 3$ تُمرر في طبقة التفافية بـ 64 مرشح بحجم $7 \\times 7$ وخطوة $S=2$ وحشو $P=3$، تنتج خريطة خصائص بأبعاد $\\frac{224 - 7 + 6}{2} + 1 = 112 \\times 112 \\times 64$.",
      "correctIndex": 1,
      "explanationEn": "Detailed Solution & Numerical Evaluation: An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: صورة بحجم $224 \\times 224 \\times 3$ تُمرر في طبقة التفافية بـ 64 مرشح بحجم $7 \\times 7$ وخطوة $S=2$ وحشو $P=3$، تنتج خريطة خصائص بأبعاد $\\frac{224 - 7 + 6}{2} + 1 = 112 \\times 112 \\times 64$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Convolutional Layers, Pooling & ResNet Skip Connections.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: صورة بحجم $224 \\times 224 \\times 3$ تُمرر في طبقة التفافية بـ 64 مرشح بحجم $7 \\times 7$ وخطوة $S=2$ وحشو $P=3$، تنتج خريطة خصائص بأبعاد $\\frac{224 - 7 + 6}{2} + 1 = 112 \\times 112 \\times 64$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch2_hots_21",
      "titleEn": "[HOTS] Object Detection Pipelines, YOLO Architecture & IoU Metrics - Evaluation 21",
      "titleAr": "[تفكير عليا] خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU - تقييم 21",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Object Detection Pipelines, YOLO Architecture & IoU Metrics: (Problem 21)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU: (مسألة 21)",
      "optionsEn": [
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "لكاميرا مركبة ذاتية القيادة رصدت عائقاً بصندوق حقيقي $10,000\\text{ px}^2$ وصندوق متوقع $10,000\\text{ px}^2$ وتداخل $6,400\\text{ px}^2$، تبلغ مساحة الاتحاد $13,600\\text{ px}^2$ ويكون $\\text{IoU} = 0.4706$ وهو دون عتبة القبول $0.50$.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold.",
      "correctAnswerEn": "For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold.",
      "correctAnswerAr": "لكاميرا مركبة ذاتية القيادة رصدت عائقاً بصندوق حقيقي $10,000\\text{ px}^2$ وصندوق متوقع $10,000\\text{ px}^2$ وتداخل $6,400\\text{ px}^2$، تبلغ مساحة الاتحاد $13,600\\text{ px}^2$ ويكون $\\text{IoU} = 0.4706$ وهو دون عتبة القبول $0.50$.",
      "correctIndex": 2,
      "explanationEn": "Detailed Solution & Numerical Evaluation: For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: لكاميرا مركبة ذاتية القيادة رصدت عائقاً بصندوق حقيقي $10,000\\text{ px}^2$ وصندوق متوقع $10,000\\text{ px}^2$ وتداخل $6,400\\text{ px}^2$، تبلغ مساحة الاتحاد $13,600\\text{ px}^2$ ويكون $\\text{IoU} = 0.4706$ وهو دون عتبة القبول $0.50$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Object Detection Pipelines, YOLO Architecture & IoU Metrics.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: لكاميرا مركبة ذاتية القيادة رصدت عائقاً بصندوق حقيقي $10,000\\text{ px}^2$ وصندوق متوقع $10,000\\text{ px}^2$ وتداخل $6,400\\text{ px}^2$، تبلغ مساحة الاتحاد $13,600\\text{ px}^2$ ويكون $\\text{IoU} = 0.4706$ وهو دون عتبة القبول $0.50$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch2_hots_22",
      "titleEn": "[HOTS] Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions - Evaluation 22",
      "titleAr": "[تفكير عليا] الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج - تقييم 22",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions: (Problem 22)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج: (مسألة 22)",
      "optionsEn": [
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers."
      ],
      "optionsAr": [
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "في شبكة عميقة من 10 طبقات بدالة سيجمويد، يتقلص التدرج بعامل $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$ مما يوقف التعلم؛ بينما يحافظ تهيئة He مع Leaky ReLU على تباين التدرج قريباً من $1.0$."
      ],
      "correctAnswer": "In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.",
      "correctAnswerEn": "In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.",
      "correctAnswerAr": "في شبكة عميقة من 10 طبقات بدالة سيجمويد، يتقلص التدرج بعامل $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$ مما يوقف التعلم؛ بينما يحافظ تهيئة He مع Leaky ReLU على تباين التدرج قريباً من $1.0$.",
      "correctIndex": 3,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في شبكة عميقة من 10 طبقات بدالة سيجمويد، يتقلص التدرج بعامل $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$ مما يوقف التعلم؛ بينما يحافظ تهيئة He مع Leaky ReLU على تباين التدرج قريباً من $1.0$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في شبكة عميقة من 10 طبقات بدالة سيجمويد، يتقلص التدرج بعامل $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$ مما يوقف التعلم؛ بينما يحافظ تهيئة He مع Leaky ReLU على تباين التدرج قريباً من $1.0$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch2_hots_23",
      "titleEn": "[HOTS] Convolutional Layers, Pooling & ResNet Skip Connections - Evaluation 23",
      "titleAr": "[تفكير عليا] الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet - تقييم 23",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Convolutional Layers, Pooling & ResNet Skip Connections: (Problem 23)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet: (مسألة 23)",
      "optionsEn": [
        "An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "صورة بحجم $224 \\times 224 \\times 3$ تُمرر في طبقة التفافية بـ 64 مرشح بحجم $7 \\times 7$ وخطوة $S=2$ وحشو $P=3$، تنتج خريطة خصائص بأبعاد $\\frac{224 - 7 + 6}{2} + 1 = 112 \\times 112 \\times 64$.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$.",
      "correctAnswerEn": "An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$.",
      "correctAnswerAr": "صورة بحجم $224 \\times 224 \\times 3$ تُمرر في طبقة التفافية بـ 64 مرشح بحجم $7 \\times 7$ وخطوة $S=2$ وحشو $P=3$، تنتج خريطة خصائص بأبعاد $\\frac{224 - 7 + 6}{2} + 1 = 112 \\times 112 \\times 64$.",
      "correctIndex": 0,
      "explanationEn": "Detailed Solution & Numerical Evaluation: An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: صورة بحجم $224 \\times 224 \\times 3$ تُمرر في طبقة التفافية بـ 64 مرشح بحجم $7 \\times 7$ وخطوة $S=2$ وحشو $P=3$، تنتج خريطة خصائص بأبعاد $\\frac{224 - 7 + 6}{2} + 1 = 112 \\times 112 \\times 64$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Convolutional Layers, Pooling & ResNet Skip Connections.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: صورة بحجم $224 \\times 224 \\times 3$ تُمرر في طبقة التفافية بـ 64 مرشح بحجم $7 \\times 7$ وخطوة $S=2$ وحشو $P=3$، تنتج خريطة خصائص بأبعاد $\\frac{224 - 7 + 6}{2} + 1 = 112 \\times 112 \\times 64$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch2_hots_24",
      "titleEn": "[HOTS] Object Detection Pipelines, YOLO Architecture & IoU Metrics - Evaluation 24",
      "titleAr": "[تفكير عليا] خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU - تقييم 24",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Object Detection Pipelines, YOLO Architecture & IoU Metrics: (Problem 24)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU: (مسألة 24)",
      "optionsEn": [
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "لكاميرا مركبة ذاتية القيادة رصدت عائقاً بصندوق حقيقي $10,000\\text{ px}^2$ وصندوق متوقع $10,000\\text{ px}^2$ وتداخل $6,400\\text{ px}^2$، تبلغ مساحة الاتحاد $13,600\\text{ px}^2$ ويكون $\\text{IoU} = 0.4706$ وهو دون عتبة القبول $0.50$.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold.",
      "correctAnswerEn": "For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold.",
      "correctAnswerAr": "لكاميرا مركبة ذاتية القيادة رصدت عائقاً بصندوق حقيقي $10,000\\text{ px}^2$ وصندوق متوقع $10,000\\text{ px}^2$ وتداخل $6,400\\text{ px}^2$، تبلغ مساحة الاتحاد $13,600\\text{ px}^2$ ويكون $\\text{IoU} = 0.4706$ وهو دون عتبة القبول $0.50$.",
      "correctIndex": 1,
      "explanationEn": "Detailed Solution & Numerical Evaluation: For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: لكاميرا مركبة ذاتية القيادة رصدت عائقاً بصندوق حقيقي $10,000\\text{ px}^2$ وصندوق متوقع $10,000\\text{ px}^2$ وتداخل $6,400\\text{ px}^2$، تبلغ مساحة الاتحاد $13,600\\text{ px}^2$ ويكون $\\text{IoU} = 0.4706$ وهو دون عتبة القبول $0.50$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Object Detection Pipelines, YOLO Architecture & IoU Metrics.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: لكاميرا مركبة ذاتية القيادة رصدت عائقاً بصندوق حقيقي $10,000\\text{ px}^2$ وصندوق متوقع $10,000\\text{ px}^2$ وتداخل $6,400\\text{ px}^2$، تبلغ مساحة الاتحاد $13,600\\text{ px}^2$ ويكون $\\text{IoU} = 0.4706$ وهو دون عتبة القبول $0.50$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch2_hots_25",
      "titleEn": "[HOTS] Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions - Evaluation 25",
      "titleAr": "[تفكير عليا] الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج - تقييم 25",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions: (Problem 25)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج: (مسألة 25)",
      "optionsEn": [
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "في شبكة عميقة من 10 طبقات بدالة سيجمويد، يتقلص التدرج بعامل $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$ مما يوقف التعلم؛ بينما يحافظ تهيئة He مع Leaky ReLU على تباين التدرج قريباً من $1.0$.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.",
      "correctAnswerEn": "In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.",
      "correctAnswerAr": "في شبكة عميقة من 10 طبقات بدالة سيجمويد، يتقلص التدرج بعامل $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$ مما يوقف التعلم؛ بينما يحافظ تهيئة He مع Leaky ReLU على تباين التدرج قريباً من $1.0$.",
      "correctIndex": 2,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في شبكة عميقة من 10 طبقات بدالة سيجمويد، يتقلص التدرج بعامل $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$ مما يوقف التعلم؛ بينما يحافظ تهيئة He مع Leaky ReLU على تباين التدرج قريباً من $1.0$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في شبكة عميقة من 10 طبقات بدالة سيجمويد، يتقلص التدرج بعامل $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$ مما يوقف التعلم؛ بينما يحافظ تهيئة He مع Leaky ReLU على تباين التدرج قريباً من $1.0$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch2_hots_26",
      "titleEn": "[HOTS] Convolutional Layers, Pooling & ResNet Skip Connections - Evaluation 26",
      "titleAr": "[تفكير عليا] الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet - تقييم 26",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Convolutional Layers, Pooling & ResNet Skip Connections: (Problem 26)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet: (مسألة 26)",
      "optionsEn": [
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$."
      ],
      "optionsAr": [
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "صورة بحجم $224 \\times 224 \\times 3$ تُمرر في طبقة التفافية بـ 64 مرشح بحجم $7 \\times 7$ وخطوة $S=2$ وحشو $P=3$، تنتج خريطة خصائص بأبعاد $\\frac{224 - 7 + 6}{2} + 1 = 112 \\times 112 \\times 64$."
      ],
      "correctAnswer": "An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$.",
      "correctAnswerEn": "An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$.",
      "correctAnswerAr": "صورة بحجم $224 \\times 224 \\times 3$ تُمرر في طبقة التفافية بـ 64 مرشح بحجم $7 \\times 7$ وخطوة $S=2$ وحشو $P=3$، تنتج خريطة خصائص بأبعاد $\\frac{224 - 7 + 6}{2} + 1 = 112 \\times 112 \\times 64$.",
      "correctIndex": 3,
      "explanationEn": "Detailed Solution & Numerical Evaluation: An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: صورة بحجم $224 \\times 224 \\times 3$ تُمرر في طبقة التفافية بـ 64 مرشح بحجم $7 \\times 7$ وخطوة $S=2$ وحشو $P=3$، تنتج خريطة خصائص بأبعاد $\\frac{224 - 7 + 6}{2} + 1 = 112 \\times 112 \\times 64$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Convolutional Layers, Pooling & ResNet Skip Connections.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: صورة بحجم $224 \\times 224 \\times 3$ تُمرر في طبقة التفافية بـ 64 مرشح بحجم $7 \\times 7$ وخطوة $S=2$ وحشو $P=3$، تنتج خريطة خصائص بأبعاد $\\frac{224 - 7 + 6}{2} + 1 = 112 \\times 112 \\times 64$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch2_hots_27",
      "titleEn": "[HOTS] Object Detection Pipelines, YOLO Architecture & IoU Metrics - Evaluation 27",
      "titleAr": "[تفكير عليا] خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU - تقييم 27",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Object Detection Pipelines, YOLO Architecture & IoU Metrics: (Problem 27)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU: (مسألة 27)",
      "optionsEn": [
        "For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "لكاميرا مركبة ذاتية القيادة رصدت عائقاً بصندوق حقيقي $10,000\\text{ px}^2$ وصندوق متوقع $10,000\\text{ px}^2$ وتداخل $6,400\\text{ px}^2$، تبلغ مساحة الاتحاد $13,600\\text{ px}^2$ ويكون $\\text{IoU} = 0.4706$ وهو دون عتبة القبول $0.50$.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold.",
      "correctAnswerEn": "For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold.",
      "correctAnswerAr": "لكاميرا مركبة ذاتية القيادة رصدت عائقاً بصندوق حقيقي $10,000\\text{ px}^2$ وصندوق متوقع $10,000\\text{ px}^2$ وتداخل $6,400\\text{ px}^2$، تبلغ مساحة الاتحاد $13,600\\text{ px}^2$ ويكون $\\text{IoU} = 0.4706$ وهو دون عتبة القبول $0.50$.",
      "correctIndex": 0,
      "explanationEn": "Detailed Solution & Numerical Evaluation: For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: لكاميرا مركبة ذاتية القيادة رصدت عائقاً بصندوق حقيقي $10,000\\text{ px}^2$ وصندوق متوقع $10,000\\text{ px}^2$ وتداخل $6,400\\text{ px}^2$، تبلغ مساحة الاتحاد $13,600\\text{ px}^2$ ويكون $\\text{IoU} = 0.4706$ وهو دون عتبة القبول $0.50$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Object Detection Pipelines, YOLO Architecture & IoU Metrics.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: لكاميرا مركبة ذاتية القيادة رصدت عائقاً بصندوق حقيقي $10,000\\text{ px}^2$ وصندوق متوقع $10,000\\text{ px}^2$ وتداخل $6,400\\text{ px}^2$، تبلغ مساحة الاتحاد $13,600\\text{ px}^2$ ويكون $\\text{IoU} = 0.4706$ وهو دون عتبة القبول $0.50$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch2_hots_28",
      "titleEn": "[HOTS] Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions - Evaluation 28",
      "titleAr": "[تفكير عليا] الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج - تقييم 28",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions: (Problem 28)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج: (مسألة 28)",
      "optionsEn": [
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "في شبكة عميقة من 10 طبقات بدالة سيجمويد، يتقلص التدرج بعامل $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$ مما يوقف التعلم؛ بينما يحافظ تهيئة He مع Leaky ReLU على تباين التدرج قريباً من $1.0$.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.",
      "correctAnswerEn": "In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.",
      "correctAnswerAr": "في شبكة عميقة من 10 طبقات بدالة سيجمويد، يتقلص التدرج بعامل $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$ مما يوقف التعلم؛ بينما يحافظ تهيئة He مع Leaky ReLU على تباين التدرج قريباً من $1.0$.",
      "correctIndex": 1,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في شبكة عميقة من 10 طبقات بدالة سيجمويد، يتقلص التدرج بعامل $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$ مما يوقف التعلم؛ بينما يحافظ تهيئة He مع Leaky ReLU على تباين التدرج قريباً من $1.0$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في شبكة عميقة من 10 طبقات بدالة سيجمويد، يتقلص التدرج بعامل $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$ مما يوقف التعلم؛ بينما يحافظ تهيئة He مع Leaky ReLU على تباين التدرج قريباً من $1.0$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch2_hots_29",
      "titleEn": "[HOTS] Convolutional Layers, Pooling & ResNet Skip Connections - Evaluation 29",
      "titleAr": "[تفكير عليا] الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet - تقييم 29",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Convolutional Layers, Pooling & ResNet Skip Connections: (Problem 29)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet: (مسألة 29)",
      "optionsEn": [
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "صورة بحجم $224 \\times 224 \\times 3$ تُمرر في طبقة التفافية بـ 64 مرشح بحجم $7 \\times 7$ وخطوة $S=2$ وحشو $P=3$، تنتج خريطة خصائص بأبعاد $\\frac{224 - 7 + 6}{2} + 1 = 112 \\times 112 \\times 64$.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$.",
      "correctAnswerEn": "An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$.",
      "correctAnswerAr": "صورة بحجم $224 \\times 224 \\times 3$ تُمرر في طبقة التفافية بـ 64 مرشح بحجم $7 \\times 7$ وخطوة $S=2$ وحشو $P=3$، تنتج خريطة خصائص بأبعاد $\\frac{224 - 7 + 6}{2} + 1 = 112 \\times 112 \\times 64$.",
      "correctIndex": 2,
      "explanationEn": "Detailed Solution & Numerical Evaluation: An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: صورة بحجم $224 \\times 224 \\times 3$ تُمرر في طبقة التفافية بـ 64 مرشح بحجم $7 \\times 7$ وخطوة $S=2$ وحشو $P=3$، تنتج خريطة خصائص بأبعاد $\\frac{224 - 7 + 6}{2} + 1 = 112 \\times 112 \\times 64$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Convolutional Layers, Pooling & ResNet Skip Connections.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: صورة بحجم $224 \\times 224 \\times 3$ تُمرر في طبقة التفافية بـ 64 مرشح بحجم $7 \\times 7$ وخطوة $S=2$ وحشو $P=3$، تنتج خريطة خصائص بأبعاد $\\frac{224 - 7 + 6}{2} + 1 = 112 \\times 112 \\times 64$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch2_hots_30",
      "titleEn": "[HOTS] Object Detection Pipelines, YOLO Architecture & IoU Metrics - Evaluation 30",
      "titleAr": "[تفكير عليا] خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU - تقييم 30",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Object Detection Pipelines, YOLO Architecture & IoU Metrics: (Problem 30)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU: (مسألة 30)",
      "optionsEn": [
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold."
      ],
      "optionsAr": [
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "لكاميرا مركبة ذاتية القيادة رصدت عائقاً بصندوق حقيقي $10,000\\text{ px}^2$ وصندوق متوقع $10,000\\text{ px}^2$ وتداخل $6,400\\text{ px}^2$، تبلغ مساحة الاتحاد $13,600\\text{ px}^2$ ويكون $\\text{IoU} = 0.4706$ وهو دون عتبة القبول $0.50$."
      ],
      "correctAnswer": "For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold.",
      "correctAnswerEn": "For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold.",
      "correctAnswerAr": "لكاميرا مركبة ذاتية القيادة رصدت عائقاً بصندوق حقيقي $10,000\\text{ px}^2$ وصندوق متوقع $10,000\\text{ px}^2$ وتداخل $6,400\\text{ px}^2$، تبلغ مساحة الاتحاد $13,600\\text{ px}^2$ ويكون $\\text{IoU} = 0.4706$ وهو دون عتبة القبول $0.50$.",
      "correctIndex": 3,
      "explanationEn": "Detailed Solution & Numerical Evaluation: For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: لكاميرا مركبة ذاتية القيادة رصدت عائقاً بصندوق حقيقي $10,000\\text{ px}^2$ وصندوق متوقع $10,000\\text{ px}^2$ وتداخل $6,400\\text{ px}^2$، تبلغ مساحة الاتحاد $13,600\\text{ px}^2$ ويكون $\\text{IoU} = 0.4706$ وهو دون عتبة القبول $0.50$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Object Detection Pipelines, YOLO Architecture & IoU Metrics.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: لكاميرا مركبة ذاتية القيادة رصدت عائقاً بصندوق حقيقي $10,000\\text{ px}^2$ وصندوق متوقع $10,000\\text{ px}^2$ وتداخل $6,400\\text{ px}^2$، تبلغ مساحة الاتحاد $13,600\\text{ px}^2$ ويكون $\\text{IoU} = 0.4706$ وهو دون عتبة القبول $0.50$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch2_hots_31",
      "titleEn": "[HOTS] Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions - Evaluation 31",
      "titleAr": "[تفكير عليا] الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج - تقييم 31",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions: (Problem 31)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج: (مسألة 31)",
      "optionsEn": [
        "In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "في شبكة عميقة من 10 طبقات بدالة سيجمويد، يتقلص التدرج بعامل $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$ مما يوقف التعلم؛ بينما يحافظ تهيئة He مع Leaky ReLU على تباين التدرج قريباً من $1.0$.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.",
      "correctAnswerEn": "In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.",
      "correctAnswerAr": "في شبكة عميقة من 10 طبقات بدالة سيجمويد، يتقلص التدرج بعامل $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$ مما يوقف التعلم؛ بينما يحافظ تهيئة He مع Leaky ReLU على تباين التدرج قريباً من $1.0$.",
      "correctIndex": 0,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في شبكة عميقة من 10 طبقات بدالة سيجمويد، يتقلص التدرج بعامل $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$ مما يوقف التعلم؛ بينما يحافظ تهيئة He مع Leaky ReLU على تباين التدرج قريباً من $1.0$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في شبكة عميقة من 10 طبقات بدالة سيجمويد، يتقلص التدرج بعامل $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$ مما يوقف التعلم؛ بينما يحافظ تهيئة He مع Leaky ReLU على تباين التدرج قريباً من $1.0$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch2_hots_32",
      "titleEn": "[HOTS] Convolutional Layers, Pooling & ResNet Skip Connections - Evaluation 32",
      "titleAr": "[تفكير عليا] الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet - تقييم 32",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Convolutional Layers, Pooling & ResNet Skip Connections: (Problem 32)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet: (مسألة 32)",
      "optionsEn": [
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "صورة بحجم $224 \\times 224 \\times 3$ تُمرر في طبقة التفافية بـ 64 مرشح بحجم $7 \\times 7$ وخطوة $S=2$ وحشو $P=3$، تنتج خريطة خصائص بأبعاد $\\frac{224 - 7 + 6}{2} + 1 = 112 \\times 112 \\times 64$.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$.",
      "correctAnswerEn": "An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$.",
      "correctAnswerAr": "صورة بحجم $224 \\times 224 \\times 3$ تُمرر في طبقة التفافية بـ 64 مرشح بحجم $7 \\times 7$ وخطوة $S=2$ وحشو $P=3$، تنتج خريطة خصائص بأبعاد $\\frac{224 - 7 + 6}{2} + 1 = 112 \\times 112 \\times 64$.",
      "correctIndex": 1,
      "explanationEn": "Detailed Solution & Numerical Evaluation: An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: صورة بحجم $224 \\times 224 \\times 3$ تُمرر في طبقة التفافية بـ 64 مرشح بحجم $7 \\times 7$ وخطوة $S=2$ وحشو $P=3$، تنتج خريطة خصائص بأبعاد $\\frac{224 - 7 + 6}{2} + 1 = 112 \\times 112 \\times 64$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Convolutional Layers, Pooling & ResNet Skip Connections.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: صورة بحجم $224 \\times 224 \\times 3$ تُمرر في طبقة التفافية بـ 64 مرشح بحجم $7 \\times 7$ وخطوة $S=2$ وحشو $P=3$، تنتج خريطة خصائص بأبعاد $\\frac{224 - 7 + 6}{2} + 1 = 112 \\times 112 \\times 64$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch2_hots_33",
      "titleEn": "[HOTS] Object Detection Pipelines, YOLO Architecture & IoU Metrics - Evaluation 33",
      "titleAr": "[تفكير عليا] خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU - تقييم 33",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Object Detection Pipelines, YOLO Architecture & IoU Metrics: (Problem 33)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU: (مسألة 33)",
      "optionsEn": [
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "لكاميرا مركبة ذاتية القيادة رصدت عائقاً بصندوق حقيقي $10,000\\text{ px}^2$ وصندوق متوقع $10,000\\text{ px}^2$ وتداخل $6,400\\text{ px}^2$، تبلغ مساحة الاتحاد $13,600\\text{ px}^2$ ويكون $\\text{IoU} = 0.4706$ وهو دون عتبة القبول $0.50$.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold.",
      "correctAnswerEn": "For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold.",
      "correctAnswerAr": "لكاميرا مركبة ذاتية القيادة رصدت عائقاً بصندوق حقيقي $10,000\\text{ px}^2$ وصندوق متوقع $10,000\\text{ px}^2$ وتداخل $6,400\\text{ px}^2$، تبلغ مساحة الاتحاد $13,600\\text{ px}^2$ ويكون $\\text{IoU} = 0.4706$ وهو دون عتبة القبول $0.50$.",
      "correctIndex": 2,
      "explanationEn": "Detailed Solution & Numerical Evaluation: For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: لكاميرا مركبة ذاتية القيادة رصدت عائقاً بصندوق حقيقي $10,000\\text{ px}^2$ وصندوق متوقع $10,000\\text{ px}^2$ وتداخل $6,400\\text{ px}^2$، تبلغ مساحة الاتحاد $13,600\\text{ px}^2$ ويكون $\\text{IoU} = 0.4706$ وهو دون عتبة القبول $0.50$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Object Detection Pipelines, YOLO Architecture & IoU Metrics.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: لكاميرا مركبة ذاتية القيادة رصدت عائقاً بصندوق حقيقي $10,000\\text{ px}^2$ وصندوق متوقع $10,000\\text{ px}^2$ وتداخل $6,400\\text{ px}^2$، تبلغ مساحة الاتحاد $13,600\\text{ px}^2$ ويكون $\\text{IoU} = 0.4706$ وهو دون عتبة القبول $0.50$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch2_hots_34",
      "titleEn": "[HOTS] Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions - Evaluation 34",
      "titleAr": "[تفكير عليا] الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج - تقييم 34",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions: (Problem 34)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج: (مسألة 34)",
      "optionsEn": [
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers."
      ],
      "optionsAr": [
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "في شبكة عميقة من 10 طبقات بدالة سيجمويد، يتقلص التدرج بعامل $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$ مما يوقف التعلم؛ بينما يحافظ تهيئة He مع Leaky ReLU على تباين التدرج قريباً من $1.0$."
      ],
      "correctAnswer": "In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.",
      "correctAnswerEn": "In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.",
      "correctAnswerAr": "في شبكة عميقة من 10 طبقات بدالة سيجمويد، يتقلص التدرج بعامل $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$ مما يوقف التعلم؛ بينما يحافظ تهيئة He مع Leaky ReLU على تباين التدرج قريباً من $1.0$.",
      "correctIndex": 3,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في شبكة عميقة من 10 طبقات بدالة سيجمويد، يتقلص التدرج بعامل $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$ مما يوقف التعلم؛ بينما يحافظ تهيئة He مع Leaky ReLU على تباين التدرج قريباً من $1.0$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في شبكة عميقة من 10 طبقات بدالة سيجمويد، يتقلص التدرج بعامل $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$ مما يوقف التعلم؛ بينما يحافظ تهيئة He مع Leaky ReLU على تباين التدرج قريباً من $1.0$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch2_hots_35",
      "titleEn": "[HOTS] Convolutional Layers, Pooling & ResNet Skip Connections - Evaluation 35",
      "titleAr": "[تفكير عليا] الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet - تقييم 35",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Convolutional Layers, Pooling & ResNet Skip Connections: (Problem 35)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet: (مسألة 35)",
      "optionsEn": [
        "An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "صورة بحجم $224 \\times 224 \\times 3$ تُمرر في طبقة التفافية بـ 64 مرشح بحجم $7 \\times 7$ وخطوة $S=2$ وحشو $P=3$، تنتج خريطة خصائص بأبعاد $\\frac{224 - 7 + 6}{2} + 1 = 112 \\times 112 \\times 64$.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$.",
      "correctAnswerEn": "An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$.",
      "correctAnswerAr": "صورة بحجم $224 \\times 224 \\times 3$ تُمرر في طبقة التفافية بـ 64 مرشح بحجم $7 \\times 7$ وخطوة $S=2$ وحشو $P=3$، تنتج خريطة خصائص بأبعاد $\\frac{224 - 7 + 6}{2} + 1 = 112 \\times 112 \\times 64$.",
      "correctIndex": 0,
      "explanationEn": "Detailed Solution & Numerical Evaluation: An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: صورة بحجم $224 \\times 224 \\times 3$ تُمرر في طبقة التفافية بـ 64 مرشح بحجم $7 \\times 7$ وخطوة $S=2$ وحشو $P=3$، تنتج خريطة خصائص بأبعاد $\\frac{224 - 7 + 6}{2} + 1 = 112 \\times 112 \\times 64$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Convolutional Layers, Pooling & ResNet Skip Connections.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: صورة بحجم $224 \\times 224 \\times 3$ تُمرر في طبقة التفافية بـ 64 مرشح بحجم $7 \\times 7$ وخطوة $S=2$ وحشو $P=3$، تنتج خريطة خصائص بأبعاد $\\frac{224 - 7 + 6}{2} + 1 = 112 \\times 112 \\times 64$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch2_hots_36",
      "titleEn": "[HOTS] Object Detection Pipelines, YOLO Architecture & IoU Metrics - Evaluation 36",
      "titleAr": "[تفكير عليا] خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU - تقييم 36",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Object Detection Pipelines, YOLO Architecture & IoU Metrics: (Problem 36)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU: (مسألة 36)",
      "optionsEn": [
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "لكاميرا مركبة ذاتية القيادة رصدت عائقاً بصندوق حقيقي $10,000\\text{ px}^2$ وصندوق متوقع $10,000\\text{ px}^2$ وتداخل $6,400\\text{ px}^2$، تبلغ مساحة الاتحاد $13,600\\text{ px}^2$ ويكون $\\text{IoU} = 0.4706$ وهو دون عتبة القبول $0.50$.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold.",
      "correctAnswerEn": "For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold.",
      "correctAnswerAr": "لكاميرا مركبة ذاتية القيادة رصدت عائقاً بصندوق حقيقي $10,000\\text{ px}^2$ وصندوق متوقع $10,000\\text{ px}^2$ وتداخل $6,400\\text{ px}^2$، تبلغ مساحة الاتحاد $13,600\\text{ px}^2$ ويكون $\\text{IoU} = 0.4706$ وهو دون عتبة القبول $0.50$.",
      "correctIndex": 1,
      "explanationEn": "Detailed Solution & Numerical Evaluation: For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: لكاميرا مركبة ذاتية القيادة رصدت عائقاً بصندوق حقيقي $10,000\\text{ px}^2$ وصندوق متوقع $10,000\\text{ px}^2$ وتداخل $6,400\\text{ px}^2$، تبلغ مساحة الاتحاد $13,600\\text{ px}^2$ ويكون $\\text{IoU} = 0.4706$ وهو دون عتبة القبول $0.50$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Object Detection Pipelines, YOLO Architecture & IoU Metrics.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: لكاميرا مركبة ذاتية القيادة رصدت عائقاً بصندوق حقيقي $10,000\\text{ px}^2$ وصندوق متوقع $10,000\\text{ px}^2$ وتداخل $6,400\\text{ px}^2$، تبلغ مساحة الاتحاد $13,600\\text{ px}^2$ ويكون $\\text{IoU} = 0.4706$ وهو دون عتبة القبول $0.50$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch2_hots_37",
      "titleEn": "[HOTS] Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions - Evaluation 37",
      "titleAr": "[تفكير عليا] الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج - تقييم 37",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions: (Problem 37)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج: (مسألة 37)",
      "optionsEn": [
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "في شبكة عميقة من 10 طبقات بدالة سيجمويد، يتقلص التدرج بعامل $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$ مما يوقف التعلم؛ بينما يحافظ تهيئة He مع Leaky ReLU على تباين التدرج قريباً من $1.0$.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.",
      "correctAnswerEn": "In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.",
      "correctAnswerAr": "في شبكة عميقة من 10 طبقات بدالة سيجمويد، يتقلص التدرج بعامل $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$ مما يوقف التعلم؛ بينما يحافظ تهيئة He مع Leaky ReLU على تباين التدرج قريباً من $1.0$.",
      "correctIndex": 2,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في شبكة عميقة من 10 طبقات بدالة سيجمويد، يتقلص التدرج بعامل $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$ مما يوقف التعلم؛ بينما يحافظ تهيئة He مع Leaky ReLU على تباين التدرج قريباً من $1.0$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في شبكة عميقة من 10 طبقات بدالة سيجمويد، يتقلص التدرج بعامل $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$ مما يوقف التعلم؛ بينما يحافظ تهيئة He مع Leaky ReLU على تباين التدرج قريباً من $1.0$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch2_hots_38",
      "titleEn": "[HOTS] Convolutional Layers, Pooling & ResNet Skip Connections - Evaluation 38",
      "titleAr": "[تفكير عليا] الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet - تقييم 38",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Convolutional Layers, Pooling & ResNet Skip Connections: (Problem 38)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet: (مسألة 38)",
      "optionsEn": [
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$."
      ],
      "optionsAr": [
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "صورة بحجم $224 \\times 224 \\times 3$ تُمرر في طبقة التفافية بـ 64 مرشح بحجم $7 \\times 7$ وخطوة $S=2$ وحشو $P=3$، تنتج خريطة خصائص بأبعاد $\\frac{224 - 7 + 6}{2} + 1 = 112 \\times 112 \\times 64$."
      ],
      "correctAnswer": "An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$.",
      "correctAnswerEn": "An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$.",
      "correctAnswerAr": "صورة بحجم $224 \\times 224 \\times 3$ تُمرر في طبقة التفافية بـ 64 مرشح بحجم $7 \\times 7$ وخطوة $S=2$ وحشو $P=3$، تنتج خريطة خصائص بأبعاد $\\frac{224 - 7 + 6}{2} + 1 = 112 \\times 112 \\times 64$.",
      "correctIndex": 3,
      "explanationEn": "Detailed Solution & Numerical Evaluation: An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: صورة بحجم $224 \\times 224 \\times 3$ تُمرر في طبقة التفافية بـ 64 مرشح بحجم $7 \\times 7$ وخطوة $S=2$ وحشو $P=3$، تنتج خريطة خصائص بأبعاد $\\frac{224 - 7 + 6}{2} + 1 = 112 \\times 112 \\times 64$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Convolutional Layers, Pooling & ResNet Skip Connections.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: صورة بحجم $224 \\times 224 \\times 3$ تُمرر في طبقة التفافية بـ 64 مرشح بحجم $7 \\times 7$ وخطوة $S=2$ وحشو $P=3$، تنتج خريطة خصائص بأبعاد $\\frac{224 - 7 + 6}{2} + 1 = 112 \\times 112 \\times 64$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch2_hots_39",
      "titleEn": "[HOTS] Object Detection Pipelines, YOLO Architecture & IoU Metrics - Evaluation 39",
      "titleAr": "[تفكير عليا] خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU - تقييم 39",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Object Detection Pipelines, YOLO Architecture & IoU Metrics: (Problem 39)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU: (مسألة 39)",
      "optionsEn": [
        "For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "لكاميرا مركبة ذاتية القيادة رصدت عائقاً بصندوق حقيقي $10,000\\text{ px}^2$ وصندوق متوقع $10,000\\text{ px}^2$ وتداخل $6,400\\text{ px}^2$، تبلغ مساحة الاتحاد $13,600\\text{ px}^2$ ويكون $\\text{IoU} = 0.4706$ وهو دون عتبة القبول $0.50$.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold.",
      "correctAnswerEn": "For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold.",
      "correctAnswerAr": "لكاميرا مركبة ذاتية القيادة رصدت عائقاً بصندوق حقيقي $10,000\\text{ px}^2$ وصندوق متوقع $10,000\\text{ px}^2$ وتداخل $6,400\\text{ px}^2$، تبلغ مساحة الاتحاد $13,600\\text{ px}^2$ ويكون $\\text{IoU} = 0.4706$ وهو دون عتبة القبول $0.50$.",
      "correctIndex": 0,
      "explanationEn": "Detailed Solution & Numerical Evaluation: For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: لكاميرا مركبة ذاتية القيادة رصدت عائقاً بصندوق حقيقي $10,000\\text{ px}^2$ وصندوق متوقع $10,000\\text{ px}^2$ وتداخل $6,400\\text{ px}^2$، تبلغ مساحة الاتحاد $13,600\\text{ px}^2$ ويكون $\\text{IoU} = 0.4706$ وهو دون عتبة القبول $0.50$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Object Detection Pipelines, YOLO Architecture & IoU Metrics.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: لكاميرا مركبة ذاتية القيادة رصدت عائقاً بصندوق حقيقي $10,000\\text{ px}^2$ وصندوق متوقع $10,000\\text{ px}^2$ وتداخل $6,400\\text{ px}^2$، تبلغ مساحة الاتحاد $13,600\\text{ px}^2$ ويكون $\\text{IoU} = 0.4706$ وهو دون عتبة القبول $0.50$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch2_hots_40",
      "titleEn": "[HOTS] Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions - Evaluation 40",
      "titleAr": "[تفكير عليا] الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج - تقييم 40",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions: (Problem 40)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج: (مسألة 40)",
      "optionsEn": [
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "في شبكة عميقة من 10 طبقات بدالة سيجمويد، يتقلص التدرج بعامل $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$ مما يوقف التعلم؛ بينما يحافظ تهيئة He مع Leaky ReLU على تباين التدرج قريباً من $1.0$.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.",
      "correctAnswerEn": "In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.",
      "correctAnswerAr": "في شبكة عميقة من 10 طبقات بدالة سيجمويد، يتقلص التدرج بعامل $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$ مما يوقف التعلم؛ بينما يحافظ تهيئة He مع Leaky ReLU على تباين التدرج قريباً من $1.0$.",
      "correctIndex": 1,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في شبكة عميقة من 10 طبقات بدالة سيجمويد، يتقلص التدرج بعامل $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$ مما يوقف التعلم؛ بينما يحافظ تهيئة He مع Leaky ReLU على تباين التدرج قريباً من $1.0$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في شبكة عميقة من 10 طبقات بدالة سيجمويد، يتقلص التدرج بعامل $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$ مما يوقف التعلم؛ بينما يحافظ تهيئة He مع Leaky ReLU على تباين التدرج قريباً من $1.0$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch2_hots_41",
      "titleEn": "[HOTS] Convolutional Layers, Pooling & ResNet Skip Connections - Evaluation 41",
      "titleAr": "[تفكير عليا] الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet - تقييم 41",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Convolutional Layers, Pooling & ResNet Skip Connections: (Problem 41)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet: (مسألة 41)",
      "optionsEn": [
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "صورة بحجم $224 \\times 224 \\times 3$ تُمرر في طبقة التفافية بـ 64 مرشح بحجم $7 \\times 7$ وخطوة $S=2$ وحشو $P=3$، تنتج خريطة خصائص بأبعاد $\\frac{224 - 7 + 6}{2} + 1 = 112 \\times 112 \\times 64$.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$.",
      "correctAnswerEn": "An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$.",
      "correctAnswerAr": "صورة بحجم $224 \\times 224 \\times 3$ تُمرر في طبقة التفافية بـ 64 مرشح بحجم $7 \\times 7$ وخطوة $S=2$ وحشو $P=3$، تنتج خريطة خصائص بأبعاد $\\frac{224 - 7 + 6}{2} + 1 = 112 \\times 112 \\times 64$.",
      "correctIndex": 2,
      "explanationEn": "Detailed Solution & Numerical Evaluation: An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: صورة بحجم $224 \\times 224 \\times 3$ تُمرر في طبقة التفافية بـ 64 مرشح بحجم $7 \\times 7$ وخطوة $S=2$ وحشو $P=3$، تنتج خريطة خصائص بأبعاد $\\frac{224 - 7 + 6}{2} + 1 = 112 \\times 112 \\times 64$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Convolutional Layers, Pooling & ResNet Skip Connections.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: صورة بحجم $224 \\times 224 \\times 3$ تُمرر في طبقة التفافية بـ 64 مرشح بحجم $7 \\times 7$ وخطوة $S=2$ وحشو $P=3$، تنتج خريطة خصائص بأبعاد $\\frac{224 - 7 + 6}{2} + 1 = 112 \\times 112 \\times 64$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch2_hots_42",
      "titleEn": "[HOTS] Object Detection Pipelines, YOLO Architecture & IoU Metrics - Evaluation 42",
      "titleAr": "[تفكير عليا] خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU - تقييم 42",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Object Detection Pipelines, YOLO Architecture & IoU Metrics: (Problem 42)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU: (مسألة 42)",
      "optionsEn": [
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold."
      ],
      "optionsAr": [
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "لكاميرا مركبة ذاتية القيادة رصدت عائقاً بصندوق حقيقي $10,000\\text{ px}^2$ وصندوق متوقع $10,000\\text{ px}^2$ وتداخل $6,400\\text{ px}^2$، تبلغ مساحة الاتحاد $13,600\\text{ px}^2$ ويكون $\\text{IoU} = 0.4706$ وهو دون عتبة القبول $0.50$."
      ],
      "correctAnswer": "For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold.",
      "correctAnswerEn": "For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold.",
      "correctAnswerAr": "لكاميرا مركبة ذاتية القيادة رصدت عائقاً بصندوق حقيقي $10,000\\text{ px}^2$ وصندوق متوقع $10,000\\text{ px}^2$ وتداخل $6,400\\text{ px}^2$، تبلغ مساحة الاتحاد $13,600\\text{ px}^2$ ويكون $\\text{IoU} = 0.4706$ وهو دون عتبة القبول $0.50$.",
      "correctIndex": 3,
      "explanationEn": "Detailed Solution & Numerical Evaluation: For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: لكاميرا مركبة ذاتية القيادة رصدت عائقاً بصندوق حقيقي $10,000\\text{ px}^2$ وصندوق متوقع $10,000\\text{ px}^2$ وتداخل $6,400\\text{ px}^2$، تبلغ مساحة الاتحاد $13,600\\text{ px}^2$ ويكون $\\text{IoU} = 0.4706$ وهو دون عتبة القبول $0.50$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Object Detection Pipelines, YOLO Architecture & IoU Metrics.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: لكاميرا مركبة ذاتية القيادة رصدت عائقاً بصندوق حقيقي $10,000\\text{ px}^2$ وصندوق متوقع $10,000\\text{ px}^2$ وتداخل $6,400\\text{ px}^2$، تبلغ مساحة الاتحاد $13,600\\text{ px}^2$ ويكون $\\text{IoU} = 0.4706$ وهو دون عتبة القبول $0.50$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch2_hots_43",
      "titleEn": "[HOTS] Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions - Evaluation 43",
      "titleAr": "[تفكير عليا] الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج - تقييم 43",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions: (Problem 43)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج: (مسألة 43)",
      "optionsEn": [
        "In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "في شبكة عميقة من 10 طبقات بدالة سيجمويد، يتقلص التدرج بعامل $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$ مما يوقف التعلم؛ بينما يحافظ تهيئة He مع Leaky ReLU على تباين التدرج قريباً من $1.0$.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.",
      "correctAnswerEn": "In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.",
      "correctAnswerAr": "في شبكة عميقة من 10 طبقات بدالة سيجمويد، يتقلص التدرج بعامل $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$ مما يوقف التعلم؛ بينما يحافظ تهيئة He مع Leaky ReLU على تباين التدرج قريباً من $1.0$.",
      "correctIndex": 0,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في شبكة عميقة من 10 طبقات بدالة سيجمويد، يتقلص التدرج بعامل $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$ مما يوقف التعلم؛ بينما يحافظ تهيئة He مع Leaky ReLU على تباين التدرج قريباً من $1.0$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في شبكة عميقة من 10 طبقات بدالة سيجمويد، يتقلص التدرج بعامل $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$ مما يوقف التعلم؛ بينما يحافظ تهيئة He مع Leaky ReLU على تباين التدرج قريباً من $1.0$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch2_hots_44",
      "titleEn": "[HOTS] Convolutional Layers, Pooling & ResNet Skip Connections - Evaluation 44",
      "titleAr": "[تفكير عليا] الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet - تقييم 44",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Convolutional Layers, Pooling & ResNet Skip Connections: (Problem 44)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet: (مسألة 44)",
      "optionsEn": [
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "صورة بحجم $224 \\times 224 \\times 3$ تُمرر في طبقة التفافية بـ 64 مرشح بحجم $7 \\times 7$ وخطوة $S=2$ وحشو $P=3$، تنتج خريطة خصائص بأبعاد $\\frac{224 - 7 + 6}{2} + 1 = 112 \\times 112 \\times 64$.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$.",
      "correctAnswerEn": "An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$.",
      "correctAnswerAr": "صورة بحجم $224 \\times 224 \\times 3$ تُمرر في طبقة التفافية بـ 64 مرشح بحجم $7 \\times 7$ وخطوة $S=2$ وحشو $P=3$، تنتج خريطة خصائص بأبعاد $\\frac{224 - 7 + 6}{2} + 1 = 112 \\times 112 \\times 64$.",
      "correctIndex": 1,
      "explanationEn": "Detailed Solution & Numerical Evaluation: An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: صورة بحجم $224 \\times 224 \\times 3$ تُمرر في طبقة التفافية بـ 64 مرشح بحجم $7 \\times 7$ وخطوة $S=2$ وحشو $P=3$، تنتج خريطة خصائص بأبعاد $\\frac{224 - 7 + 6}{2} + 1 = 112 \\times 112 \\times 64$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Convolutional Layers, Pooling & ResNet Skip Connections.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: صورة بحجم $224 \\times 224 \\times 3$ تُمرر في طبقة التفافية بـ 64 مرشح بحجم $7 \\times 7$ وخطوة $S=2$ وحشو $P=3$، تنتج خريطة خصائص بأبعاد $\\frac{224 - 7 + 6}{2} + 1 = 112 \\times 112 \\times 64$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch2_hots_45",
      "titleEn": "[HOTS] Object Detection Pipelines, YOLO Architecture & IoU Metrics - Evaluation 45",
      "titleAr": "[تفكير عليا] خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU - تقييم 45",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Object Detection Pipelines, YOLO Architecture & IoU Metrics: (Problem 45)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU: (مسألة 45)",
      "optionsEn": [
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "لكاميرا مركبة ذاتية القيادة رصدت عائقاً بصندوق حقيقي $10,000\\text{ px}^2$ وصندوق متوقع $10,000\\text{ px}^2$ وتداخل $6,400\\text{ px}^2$، تبلغ مساحة الاتحاد $13,600\\text{ px}^2$ ويكون $\\text{IoU} = 0.4706$ وهو دون عتبة القبول $0.50$.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold.",
      "correctAnswerEn": "For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold.",
      "correctAnswerAr": "لكاميرا مركبة ذاتية القيادة رصدت عائقاً بصندوق حقيقي $10,000\\text{ px}^2$ وصندوق متوقع $10,000\\text{ px}^2$ وتداخل $6,400\\text{ px}^2$، تبلغ مساحة الاتحاد $13,600\\text{ px}^2$ ويكون $\\text{IoU} = 0.4706$ وهو دون عتبة القبول $0.50$.",
      "correctIndex": 2,
      "explanationEn": "Detailed Solution & Numerical Evaluation: For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: لكاميرا مركبة ذاتية القيادة رصدت عائقاً بصندوق حقيقي $10,000\\text{ px}^2$ وصندوق متوقع $10,000\\text{ px}^2$ وتداخل $6,400\\text{ px}^2$، تبلغ مساحة الاتحاد $13,600\\text{ px}^2$ ويكون $\\text{IoU} = 0.4706$ وهو دون عتبة القبول $0.50$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Object Detection Pipelines, YOLO Architecture & IoU Metrics.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: لكاميرا مركبة ذاتية القيادة رصدت عائقاً بصندوق حقيقي $10,000\\text{ px}^2$ وصندوق متوقع $10,000\\text{ px}^2$ وتداخل $6,400\\text{ px}^2$، تبلغ مساحة الاتحاد $13,600\\text{ px}^2$ ويكون $\\text{IoU} = 0.4706$ وهو دون عتبة القبول $0.50$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch2_hots_46",
      "titleEn": "[HOTS] Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions - Evaluation 46",
      "titleAr": "[تفكير عليا] الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج - تقييم 46",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions: (Problem 46)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج: (مسألة 46)",
      "optionsEn": [
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers."
      ],
      "optionsAr": [
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "في شبكة عميقة من 10 طبقات بدالة سيجمويد، يتقلص التدرج بعامل $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$ مما يوقف التعلم؛ بينما يحافظ تهيئة He مع Leaky ReLU على تباين التدرج قريباً من $1.0$."
      ],
      "correctAnswer": "In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.",
      "correctAnswerEn": "In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.",
      "correctAnswerAr": "في شبكة عميقة من 10 طبقات بدالة سيجمويد، يتقلص التدرج بعامل $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$ مما يوقف التعلم؛ بينما يحافظ تهيئة He مع Leaky ReLU على تباين التدرج قريباً من $1.0$.",
      "correctIndex": 3,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في شبكة عميقة من 10 طبقات بدالة سيجمويد، يتقلص التدرج بعامل $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$ مما يوقف التعلم؛ بينما يحافظ تهيئة He مع Leaky ReLU على تباين التدرج قريباً من $1.0$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في شبكة عميقة من 10 طبقات بدالة سيجمويد، يتقلص التدرج بعامل $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$ مما يوقف التعلم؛ بينما يحافظ تهيئة He مع Leaky ReLU على تباين التدرج قريباً من $1.0$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch2_hots_47",
      "titleEn": "[HOTS] Convolutional Layers, Pooling & ResNet Skip Connections - Evaluation 47",
      "titleAr": "[تفكير عليا] الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet - تقييم 47",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Convolutional Layers, Pooling & ResNet Skip Connections: (Problem 47)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet: (مسألة 47)",
      "optionsEn": [
        "An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "صورة بحجم $224 \\times 224 \\times 3$ تُمرر في طبقة التفافية بـ 64 مرشح بحجم $7 \\times 7$ وخطوة $S=2$ وحشو $P=3$، تنتج خريطة خصائص بأبعاد $\\frac{224 - 7 + 6}{2} + 1 = 112 \\times 112 \\times 64$.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$.",
      "correctAnswerEn": "An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$.",
      "correctAnswerAr": "صورة بحجم $224 \\times 224 \\times 3$ تُمرر في طبقة التفافية بـ 64 مرشح بحجم $7 \\times 7$ وخطوة $S=2$ وحشو $P=3$، تنتج خريطة خصائص بأبعاد $\\frac{224 - 7 + 6}{2} + 1 = 112 \\times 112 \\times 64$.",
      "correctIndex": 0,
      "explanationEn": "Detailed Solution & Numerical Evaluation: An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: صورة بحجم $224 \\times 224 \\times 3$ تُمرر في طبقة التفافية بـ 64 مرشح بحجم $7 \\times 7$ وخطوة $S=2$ وحشو $P=3$، تنتج خريطة خصائص بأبعاد $\\frac{224 - 7 + 6}{2} + 1 = 112 \\times 112 \\times 64$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Convolutional Layers, Pooling & ResNet Skip Connections.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: صورة بحجم $224 \\times 224 \\times 3$ تُمرر في طبقة التفافية بـ 64 مرشح بحجم $7 \\times 7$ وخطوة $S=2$ وحشو $P=3$، تنتج خريطة خصائص بأبعاد $\\frac{224 - 7 + 6}{2} + 1 = 112 \\times 112 \\times 64$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch2_hots_48",
      "titleEn": "[HOTS] Object Detection Pipelines, YOLO Architecture & IoU Metrics - Evaluation 48",
      "titleAr": "[تفكير عليا] خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU - تقييم 48",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Object Detection Pipelines, YOLO Architecture & IoU Metrics: (Problem 48)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU: (مسألة 48)",
      "optionsEn": [
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "لكاميرا مركبة ذاتية القيادة رصدت عائقاً بصندوق حقيقي $10,000\\text{ px}^2$ وصندوق متوقع $10,000\\text{ px}^2$ وتداخل $6,400\\text{ px}^2$، تبلغ مساحة الاتحاد $13,600\\text{ px}^2$ ويكون $\\text{IoU} = 0.4706$ وهو دون عتبة القبول $0.50$.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold.",
      "correctAnswerEn": "For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold.",
      "correctAnswerAr": "لكاميرا مركبة ذاتية القيادة رصدت عائقاً بصندوق حقيقي $10,000\\text{ px}^2$ وصندوق متوقع $10,000\\text{ px}^2$ وتداخل $6,400\\text{ px}^2$، تبلغ مساحة الاتحاد $13,600\\text{ px}^2$ ويكون $\\text{IoU} = 0.4706$ وهو دون عتبة القبول $0.50$.",
      "correctIndex": 1,
      "explanationEn": "Detailed Solution & Numerical Evaluation: For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: لكاميرا مركبة ذاتية القيادة رصدت عائقاً بصندوق حقيقي $10,000\\text{ px}^2$ وصندوق متوقع $10,000\\text{ px}^2$ وتداخل $6,400\\text{ px}^2$، تبلغ مساحة الاتحاد $13,600\\text{ px}^2$ ويكون $\\text{IoU} = 0.4706$ وهو دون عتبة القبول $0.50$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Object Detection Pipelines, YOLO Architecture & IoU Metrics.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: لكاميرا مركبة ذاتية القيادة رصدت عائقاً بصندوق حقيقي $10,000\\text{ px}^2$ وصندوق متوقع $10,000\\text{ px}^2$ وتداخل $6,400\\text{ px}^2$، تبلغ مساحة الاتحاد $13,600\\text{ px}^2$ ويكون $\\text{IoU} = 0.4706$ وهو دون عتبة القبول $0.50$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch2_hots_49",
      "titleEn": "[HOTS] Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions - Evaluation 49",
      "titleAr": "[تفكير عليا] الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج - تقييم 49",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions: (Problem 49)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج: (مسألة 49)",
      "optionsEn": [
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "في شبكة عميقة من 10 طبقات بدالة سيجمويد، يتقلص التدرج بعامل $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$ مما يوقف التعلم؛ بينما يحافظ تهيئة He مع Leaky ReLU على تباين التدرج قريباً من $1.0$.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.",
      "correctAnswerEn": "In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.",
      "correctAnswerAr": "في شبكة عميقة من 10 طبقات بدالة سيجمويد، يتقلص التدرج بعامل $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$ مما يوقف التعلم؛ بينما يحافظ تهيئة He مع Leaky ReLU على تباين التدرج قريباً من $1.0$.",
      "correctIndex": 2,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في شبكة عميقة من 10 طبقات بدالة سيجمويد، يتقلص التدرج بعامل $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$ مما يوقف التعلم؛ بينما يحافظ تهيئة He مع Leaky ReLU على تباين التدرج قريباً من $1.0$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في شبكة عميقة من 10 طبقات بدالة سيجمويد، يتقلص التدرج بعامل $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$ مما يوقف التعلم؛ بينما يحافظ تهيئة He مع Leaky ReLU على تباين التدرج قريباً من $1.0$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch2_hots_50",
      "titleEn": "[HOTS] Convolutional Layers, Pooling & ResNet Skip Connections - Evaluation 50",
      "titleAr": "[تفكير عليا] الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet - تقييم 50",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Convolutional Layers, Pooling & ResNet Skip Connections: (Problem 50)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet: (مسألة 50)",
      "optionsEn": [
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$."
      ],
      "optionsAr": [
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "صورة بحجم $224 \\times 224 \\times 3$ تُمرر في طبقة التفافية بـ 64 مرشح بحجم $7 \\times 7$ وخطوة $S=2$ وحشو $P=3$، تنتج خريطة خصائص بأبعاد $\\frac{224 - 7 + 6}{2} + 1 = 112 \\times 112 \\times 64$."
      ],
      "correctAnswer": "An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$.",
      "correctAnswerEn": "An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$.",
      "correctAnswerAr": "صورة بحجم $224 \\times 224 \\times 3$ تُمرر في طبقة التفافية بـ 64 مرشح بحجم $7 \\times 7$ وخطوة $S=2$ وحشو $P=3$، تنتج خريطة خصائص بأبعاد $\\frac{224 - 7 + 6}{2} + 1 = 112 \\times 112 \\times 64$.",
      "correctIndex": 3,
      "explanationEn": "Detailed Solution & Numerical Evaluation: An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: صورة بحجم $224 \\times 224 \\times 3$ تُمرر في طبقة التفافية بـ 64 مرشح بحجم $7 \\times 7$ وخطوة $S=2$ وحشو $P=3$، تنتج خريطة خصائص بأبعاد $\\frac{224 - 7 + 6}{2} + 1 = 112 \\times 112 \\times 64$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Convolutional Layers, Pooling & ResNet Skip Connections.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: صورة بحجم $224 \\times 224 \\times 3$ تُمرر في طبقة التفافية بـ 64 مرشح بحجم $7 \\times 7$ وخطوة $S=2$ وحشو $P=3$، تنتج خريطة خصائص بأبعاد $\\frac{224 - 7 + 6}{2} + 1 = 112 \\times 112 \\times 64$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch2_hots_51",
      "titleEn": "[HOTS] Object Detection Pipelines, YOLO Architecture & IoU Metrics - Evaluation 51",
      "titleAr": "[تفكير عليا] خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU - تقييم 51",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Object Detection Pipelines, YOLO Architecture & IoU Metrics: (Problem 51)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU: (مسألة 51)",
      "optionsEn": [
        "For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "لكاميرا مركبة ذاتية القيادة رصدت عائقاً بصندوق حقيقي $10,000\\text{ px}^2$ وصندوق متوقع $10,000\\text{ px}^2$ وتداخل $6,400\\text{ px}^2$، تبلغ مساحة الاتحاد $13,600\\text{ px}^2$ ويكون $\\text{IoU} = 0.4706$ وهو دون عتبة القبول $0.50$.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold.",
      "correctAnswerEn": "For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold.",
      "correctAnswerAr": "لكاميرا مركبة ذاتية القيادة رصدت عائقاً بصندوق حقيقي $10,000\\text{ px}^2$ وصندوق متوقع $10,000\\text{ px}^2$ وتداخل $6,400\\text{ px}^2$، تبلغ مساحة الاتحاد $13,600\\text{ px}^2$ ويكون $\\text{IoU} = 0.4706$ وهو دون عتبة القبول $0.50$.",
      "correctIndex": 0,
      "explanationEn": "Detailed Solution & Numerical Evaluation: For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: لكاميرا مركبة ذاتية القيادة رصدت عائقاً بصندوق حقيقي $10,000\\text{ px}^2$ وصندوق متوقع $10,000\\text{ px}^2$ وتداخل $6,400\\text{ px}^2$، تبلغ مساحة الاتحاد $13,600\\text{ px}^2$ ويكون $\\text{IoU} = 0.4706$ وهو دون عتبة القبول $0.50$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Object Detection Pipelines, YOLO Architecture & IoU Metrics.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: لكاميرا مركبة ذاتية القيادة رصدت عائقاً بصندوق حقيقي $10,000\\text{ px}^2$ وصندوق متوقع $10,000\\text{ px}^2$ وتداخل $6,400\\text{ px}^2$، تبلغ مساحة الاتحاد $13,600\\text{ px}^2$ ويكون $\\text{IoU} = 0.4706$ وهو دون عتبة القبول $0.50$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch2_hots_52",
      "titleEn": "[HOTS] Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions - Evaluation 52",
      "titleAr": "[تفكير عليا] الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج - تقييم 52",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions: (Problem 52)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج: (مسألة 52)",
      "optionsEn": [
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "في شبكة عميقة من 10 طبقات بدالة سيجمويد، يتقلص التدرج بعامل $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$ مما يوقف التعلم؛ بينما يحافظ تهيئة He مع Leaky ReLU على تباين التدرج قريباً من $1.0$.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.",
      "correctAnswerEn": "In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.",
      "correctAnswerAr": "في شبكة عميقة من 10 طبقات بدالة سيجمويد، يتقلص التدرج بعامل $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$ مما يوقف التعلم؛ بينما يحافظ تهيئة He مع Leaky ReLU على تباين التدرج قريباً من $1.0$.",
      "correctIndex": 1,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في شبكة عميقة من 10 طبقات بدالة سيجمويد، يتقلص التدرج بعامل $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$ مما يوقف التعلم؛ بينما يحافظ تهيئة He مع Leaky ReLU على تباين التدرج قريباً من $1.0$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في شبكة عميقة من 10 طبقات بدالة سيجمويد، يتقلص التدرج بعامل $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$ مما يوقف التعلم؛ بينما يحافظ تهيئة He مع Leaky ReLU على تباين التدرج قريباً من $1.0$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch2_hots_53",
      "titleEn": "[HOTS] Convolutional Layers, Pooling & ResNet Skip Connections - Evaluation 53",
      "titleAr": "[تفكير عليا] الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet - تقييم 53",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Convolutional Layers, Pooling & ResNet Skip Connections: (Problem 53)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet: (مسألة 53)",
      "optionsEn": [
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "صورة بحجم $224 \\times 224 \\times 3$ تُمرر في طبقة التفافية بـ 64 مرشح بحجم $7 \\times 7$ وخطوة $S=2$ وحشو $P=3$، تنتج خريطة خصائص بأبعاد $\\frac{224 - 7 + 6}{2} + 1 = 112 \\times 112 \\times 64$.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$.",
      "correctAnswerEn": "An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$.",
      "correctAnswerAr": "صورة بحجم $224 \\times 224 \\times 3$ تُمرر في طبقة التفافية بـ 64 مرشح بحجم $7 \\times 7$ وخطوة $S=2$ وحشو $P=3$، تنتج خريطة خصائص بأبعاد $\\frac{224 - 7 + 6}{2} + 1 = 112 \\times 112 \\times 64$.",
      "correctIndex": 2,
      "explanationEn": "Detailed Solution & Numerical Evaluation: An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: صورة بحجم $224 \\times 224 \\times 3$ تُمرر في طبقة التفافية بـ 64 مرشح بحجم $7 \\times 7$ وخطوة $S=2$ وحشو $P=3$، تنتج خريطة خصائص بأبعاد $\\frac{224 - 7 + 6}{2} + 1 = 112 \\times 112 \\times 64$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Convolutional Layers, Pooling & ResNet Skip Connections.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: صورة بحجم $224 \\times 224 \\times 3$ تُمرر في طبقة التفافية بـ 64 مرشح بحجم $7 \\times 7$ وخطوة $S=2$ وحشو $P=3$، تنتج خريطة خصائص بأبعاد $\\frac{224 - 7 + 6}{2} + 1 = 112 \\times 112 \\times 64$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch2_hots_54",
      "titleEn": "[HOTS] Object Detection Pipelines, YOLO Architecture & IoU Metrics - Evaluation 54",
      "titleAr": "[تفكير عليا] خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU - تقييم 54",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Object Detection Pipelines, YOLO Architecture & IoU Metrics: (Problem 54)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU: (مسألة 54)",
      "optionsEn": [
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold."
      ],
      "optionsAr": [
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "لكاميرا مركبة ذاتية القيادة رصدت عائقاً بصندوق حقيقي $10,000\\text{ px}^2$ وصندوق متوقع $10,000\\text{ px}^2$ وتداخل $6,400\\text{ px}^2$، تبلغ مساحة الاتحاد $13,600\\text{ px}^2$ ويكون $\\text{IoU} = 0.4706$ وهو دون عتبة القبول $0.50$."
      ],
      "correctAnswer": "For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold.",
      "correctAnswerEn": "For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold.",
      "correctAnswerAr": "لكاميرا مركبة ذاتية القيادة رصدت عائقاً بصندوق حقيقي $10,000\\text{ px}^2$ وصندوق متوقع $10,000\\text{ px}^2$ وتداخل $6,400\\text{ px}^2$، تبلغ مساحة الاتحاد $13,600\\text{ px}^2$ ويكون $\\text{IoU} = 0.4706$ وهو دون عتبة القبول $0.50$.",
      "correctIndex": 3,
      "explanationEn": "Detailed Solution & Numerical Evaluation: For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: لكاميرا مركبة ذاتية القيادة رصدت عائقاً بصندوق حقيقي $10,000\\text{ px}^2$ وصندوق متوقع $10,000\\text{ px}^2$ وتداخل $6,400\\text{ px}^2$، تبلغ مساحة الاتحاد $13,600\\text{ px}^2$ ويكون $\\text{IoU} = 0.4706$ وهو دون عتبة القبول $0.50$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Object Detection Pipelines, YOLO Architecture & IoU Metrics.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: لكاميرا مركبة ذاتية القيادة رصدت عائقاً بصندوق حقيقي $10,000\\text{ px}^2$ وصندوق متوقع $10,000\\text{ px}^2$ وتداخل $6,400\\text{ px}^2$، تبلغ مساحة الاتحاد $13,600\\text{ px}^2$ ويكون $\\text{IoU} = 0.4706$ وهو دون عتبة القبول $0.50$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch2_hots_55",
      "titleEn": "[HOTS] Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions - Evaluation 55",
      "titleAr": "[تفكير عليا] الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج - تقييم 55",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions: (Problem 55)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج: (مسألة 55)",
      "optionsEn": [
        "In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "في شبكة عميقة من 10 طبقات بدالة سيجمويد، يتقلص التدرج بعامل $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$ مما يوقف التعلم؛ بينما يحافظ تهيئة He مع Leaky ReLU على تباين التدرج قريباً من $1.0$.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.",
      "correctAnswerEn": "In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.",
      "correctAnswerAr": "في شبكة عميقة من 10 طبقات بدالة سيجمويد، يتقلص التدرج بعامل $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$ مما يوقف التعلم؛ بينما يحافظ تهيئة He مع Leaky ReLU على تباين التدرج قريباً من $1.0$.",
      "correctIndex": 0,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في شبكة عميقة من 10 طبقات بدالة سيجمويد، يتقلص التدرج بعامل $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$ مما يوقف التعلم؛ بينما يحافظ تهيئة He مع Leaky ReLU على تباين التدرج قريباً من $1.0$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في شبكة عميقة من 10 طبقات بدالة سيجمويد، يتقلص التدرج بعامل $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$ مما يوقف التعلم؛ بينما يحافظ تهيئة He مع Leaky ReLU على تباين التدرج قريباً من $1.0$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch2_hots_56",
      "titleEn": "[HOTS] Convolutional Layers, Pooling & ResNet Skip Connections - Evaluation 56",
      "titleAr": "[تفكير عليا] الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet - تقييم 56",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Convolutional Layers, Pooling & ResNet Skip Connections: (Problem 56)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet: (مسألة 56)",
      "optionsEn": [
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "صورة بحجم $224 \\times 224 \\times 3$ تُمرر في طبقة التفافية بـ 64 مرشح بحجم $7 \\times 7$ وخطوة $S=2$ وحشو $P=3$، تنتج خريطة خصائص بأبعاد $\\frac{224 - 7 + 6}{2} + 1 = 112 \\times 112 \\times 64$.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$.",
      "correctAnswerEn": "An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$.",
      "correctAnswerAr": "صورة بحجم $224 \\times 224 \\times 3$ تُمرر في طبقة التفافية بـ 64 مرشح بحجم $7 \\times 7$ وخطوة $S=2$ وحشو $P=3$، تنتج خريطة خصائص بأبعاد $\\frac{224 - 7 + 6}{2} + 1 = 112 \\times 112 \\times 64$.",
      "correctIndex": 1,
      "explanationEn": "Detailed Solution & Numerical Evaluation: An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: صورة بحجم $224 \\times 224 \\times 3$ تُمرر في طبقة التفافية بـ 64 مرشح بحجم $7 \\times 7$ وخطوة $S=2$ وحشو $P=3$، تنتج خريطة خصائص بأبعاد $\\frac{224 - 7 + 6}{2} + 1 = 112 \\times 112 \\times 64$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Convolutional Layers, Pooling & ResNet Skip Connections.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: An input image of dimension $224 \\times 224 \\times 3$ processed by a convolutional layer with 64 filters of size $7 \\times 7$, stride $S=2$, and padding $P=3$ produces an output spatial feature map of dimension $\\frac{224 - 7 + 2(3)}{2} + 1 = \\frac{223}{2} + 1 = 112 \\times 112 \\times 64$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ الطبقات الالتفافية، التجميع والوصلات التخطيّة في شبكات ResNet.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: صورة بحجم $224 \\times 224 \\times 3$ تُمرر في طبقة التفافية بـ 64 مرشح بحجم $7 \\times 7$ وخطوة $S=2$ وحشو $P=3$، تنتج خريطة خصائص بأبعاد $\\frac{224 - 7 + 6}{2} + 1 = 112 \\times 112 \\times 64$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch2_hots_57",
      "titleEn": "[HOTS] Object Detection Pipelines, YOLO Architecture & IoU Metrics - Evaluation 57",
      "titleAr": "[تفكير عليا] خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU - تقييم 57",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Object Detection Pipelines, YOLO Architecture & IoU Metrics: (Problem 57)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU: (مسألة 57)",
      "optionsEn": [
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "لكاميرا مركبة ذاتية القيادة رصدت عائقاً بصندوق حقيقي $10,000\\text{ px}^2$ وصندوق متوقع $10,000\\text{ px}^2$ وتداخل $6,400\\text{ px}^2$، تبلغ مساحة الاتحاد $13,600\\text{ px}^2$ ويكون $\\text{IoU} = 0.4706$ وهو دون عتبة القبول $0.50$.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold.",
      "correctAnswerEn": "For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold.",
      "correctAnswerAr": "لكاميرا مركبة ذاتية القيادة رصدت عائقاً بصندوق حقيقي $10,000\\text{ px}^2$ وصندوق متوقع $10,000\\text{ px}^2$ وتداخل $6,400\\text{ px}^2$، تبلغ مساحة الاتحاد $13,600\\text{ px}^2$ ويكون $\\text{IoU} = 0.4706$ وهو دون عتبة القبول $0.50$.",
      "correctIndex": 2,
      "explanationEn": "Detailed Solution & Numerical Evaluation: For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: لكاميرا مركبة ذاتية القيادة رصدت عائقاً بصندوق حقيقي $10,000\\text{ px}^2$ وصندوق متوقع $10,000\\text{ px}^2$ وتداخل $6,400\\text{ px}^2$، تبلغ مساحة الاتحاد $13,600\\text{ px}^2$ ويكون $\\text{IoU} = 0.4706$ وهو دون عتبة القبول $0.50$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Object Detection Pipelines, YOLO Architecture & IoU Metrics.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: For an autonomous vehicle camera detecting an obstacle where ground truth box is $100 \\times 100$ ($10,000\\text{ px}^2$), predicted box is $100 \\times 100$, and intersection overlap is $80 \\times 80 = 6,400\\text{ px}^2$, the union area is $10000 + 10000 - 6400 = 13,600\\text{ px}^2$, giving $\\text{IoU} = \\frac{6400}{13600} \\approx 0.4706$, falling short of the standard $0.50$ acceptance threshold.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ خطوط كشف الكائنات، معمارية YOLO ومقاييس تقاطع الاتحاد IoU.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: لكاميرا مركبة ذاتية القيادة رصدت عائقاً بصندوق حقيقي $10,000\\text{ px}^2$ وصندوق متوقع $10,000\\text{ px}^2$ وتداخل $6,400\\text{ px}^2$، تبلغ مساحة الاتحاد $13,600\\text{ px}^2$ ويكون $\\text{IoU} = 0.4706$ وهو دون عتبة القبول $0.50$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch2_hots_58",
      "titleEn": "[HOTS] Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions - Evaluation 58",
      "titleAr": "[تفكير عليا] الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج - تقييم 58",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions: (Problem 58)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج: (مسألة 58)",
      "optionsEn": [
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers."
      ],
      "optionsAr": [
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "في شبكة عميقة من 10 طبقات بدالة سيجمويد، يتقلص التدرج بعامل $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$ مما يوقف التعلم؛ بينما يحافظ تهيئة He مع Leaky ReLU على تباين التدرج قريباً من $1.0$."
      ],
      "correctAnswer": "In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.",
      "correctAnswerEn": "In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.",
      "correctAnswerAr": "في شبكة عميقة من 10 طبقات بدالة سيجمويد، يتقلص التدرج بعامل $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$ مما يوقف التعلم؛ بينما يحافظ تهيئة He مع Leaky ReLU على تباين التدرج قريباً من $1.0$.",
      "correctIndex": 3,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في شبكة عميقة من 10 طبقات بدالة سيجمويد، يتقلص التدرج بعامل $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$ مما يوقف التعلم؛ بينما يحافظ تهيئة He مع Leaky ReLU على تباين التدرج قريباً من $1.0$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Multilayer Perceptron Backpropagation & Vanishing Gradient Solutions.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In a 10-layer network initialized with standard Sigmoid, backpropagation scales the gradient by factor $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$, halting learning in early layers; switching to He initialization with Leaky ReLU maintains gradient variance ratio $\\approx 1.0$ across all 10 layers.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ الانتشار الخلفي في الشبكات متعددة الطبقات وحلول تلاشي التدرج.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في شبكة عميقة من 10 طبقات بدالة سيجمويد، يتقلص التدرج بعامل $(0.25)^{10} \\approx 9.54 \\times 10^{-7}$ مما يوقف التعلم؛ بينما يحافظ تهيئة He مع Leaky ReLU على تباين التدرج قريباً من $1.0$.."
      ],
      "difficulty": "hots"
    }
  ]
};
