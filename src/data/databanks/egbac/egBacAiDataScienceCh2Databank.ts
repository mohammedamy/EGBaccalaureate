import type { ChapterDatabank } from '../../../types/curriculum';

export const egbac_ai_data_science_ch2Databank: ChapterDatabank = {
  "easy": [
    {
      "id": "egbac_ai_data_science_ch2_easy_1",
      "titleEn": "[EASY] Variational Autoencoders (VAEs) & Reparameterization Trick - Review 1",
      "titleAr": "[مستوى أساسي] المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick) - سؤال 1",
      "questionEn": "[AI & Data Science Core Concept] Regarding Variational Autoencoders (VAEs) & Reparameterization Trick, which of the following statements is theoretically and mathematically sound? (Variant 1)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 1)",
      "optionsEn": [
        "Variational Autoencoders (VAEs) map high-dimensional data into a continuous, smooth probabilistic latent distribution parameterized by mean vector $\\mu$ and variance vector $\\sigma^2$.",
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "ترسم المشفرات التلقائية المتغيرة (VAEs) البيانات عالية الأبعاد في فضاء كامن احتمالي أملس ومستمر مُعرّف بمتجه المتوسطات $\\mu$ ومتجه التباين $\\sigma^2$.",
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "Variational Autoencoders (VAEs) map high-dimensional data into a continuous, smooth probabilistic latent distribution parameterized by mean vector $\\mu$ and variance vector $\\sigma^2$.",
      "correctAnswerEn": "Variational Autoencoders (VAEs) map high-dimensional data into a continuous, smooth probabilistic latent distribution parameterized by mean vector $\\mu$ and variance vector $\\sigma^2$.",
      "correctAnswerAr": "ترسم المشفرات التلقائية المتغيرة (VAEs) البيانات عالية الأبعاد في فضاء كامن احتمالي أملس ومستمر مُعرّف بمتجه المتوسطات $\\mu$ ومتجه التباين $\\sigma^2$.",
      "correctIndex": 0,
      "explanationEn": "Correct Theoretical Formulation: Variational Autoencoders (VAEs) map high-dimensional data into a continuous, smooth probabilistic latent distribution parameterized by mean vector $\\mu$ and variance vector $\\sigma^2$.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: ترسم المشفرات التلقائية المتغيرة (VAEs) البيانات عالية الأبعاد في فضاء كامن احتمالي أملس ومستمر مُعرّف بمتجه المتوسطات $\\mu$ ومتجه التباين $\\sigma^2$.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Variational Autoencoders (VAEs) & Reparameterization Trick.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Variational Autoencoders (VAEs) map high-dimensional data into a continuous, smooth probabilistic latent distribution parameterized by mean vector $\\mu$ and variance vector $\\sigma^2$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: ترسم المشفرات التلقائية المتغيرة (VAEs) البيانات عالية الأبعاد في فضاء كامن احتمالي أملس ومستمر مُعرّف بمتجه المتوسطات $\\mu$ ومتجه التباين $\\sigma^2$.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch2_easy_2",
      "titleEn": "[EASY] Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM) - Review 2",
      "titleAr": "[مستوى أساسي] النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM) - سؤال 2",
      "questionEn": "[AI & Data Science Core Concept] Regarding Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM), which of the following statements is theoretically and mathematically sound? (Variant 2)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 2)",
      "optionsEn": [
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "Denoising Diffusion Probabilistic Models generate high-fidelity images by learning the reverse process of a forward Markov chain that gradually corrupts data with Gaussian noise over $T$ timesteps.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تولد نماذج الانتشار لإزالة الضوضاء صوراً فائقة الجودة بتعلم العملية العكسية لسلسلة ماركوف الأمامية التي تضيف تدريجياً ضوضاء غاوسية عبر $T$ خطوة زمنية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "Denoising Diffusion Probabilistic Models generate high-fidelity images by learning the reverse process of a forward Markov chain that gradually corrupts data with Gaussian noise over $T$ timesteps.",
      "correctAnswerEn": "Denoising Diffusion Probabilistic Models generate high-fidelity images by learning the reverse process of a forward Markov chain that gradually corrupts data with Gaussian noise over $T$ timesteps.",
      "correctAnswerAr": "تولد نماذج الانتشار لإزالة الضوضاء صوراً فائقة الجودة بتعلم العملية العكسية لسلسلة ماركوف الأمامية التي تضيف تدريجياً ضوضاء غاوسية عبر $T$ خطوة زمنية.",
      "correctIndex": 1,
      "explanationEn": "Correct Theoretical Formulation: Denoising Diffusion Probabilistic Models generate high-fidelity images by learning the reverse process of a forward Markov chain that gradually corrupts data with Gaussian noise over $T$ timesteps.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تولد نماذج الانتشار لإزالة الضوضاء صوراً فائقة الجودة بتعلم العملية العكسية لسلسلة ماركوف الأمامية التي تضيف تدريجياً ضوضاء غاوسية عبر $T$ خطوة زمنية.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Denoising Diffusion Probabilistic Models generate high-fidelity images by learning the reverse process of a forward Markov chain that gradually corrupts data with Gaussian noise over $T$ timesteps.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تولد نماذج الانتشار لإزالة الضوضاء صوراً فائقة الجودة بتعلم العملية العكسية لسلسلة ماركوف الأمامية التي تضيف تدريجياً ضوضاء غاوسية عبر $T$ خطوة زمنية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch2_easy_3",
      "titleEn": "[EASY] Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment - Review 3",
      "titleAr": "[مستوى أساسي] التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط - سؤال 3",
      "questionEn": "[AI & Data Science Core Concept] Regarding Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment, which of the following statements is theoretically and mathematically sound? (Variant 3)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 3)",
      "optionsEn": [
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "CLIP aligns visual representations and textual descriptions by training a vision encoder and text encoder jointly using a symmetric contrastive cross-entropy loss over large-scale paired datasets.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "يحاذي نموذج CLIP بين التمثيلات البصرية والنصوص عبر تدريب مشفر الرؤية ومشفر النصوص معاً باستخدام دالة خسارة تباينية متناظرة للإنتروبيا المتقاطعة على أزواج البيانات.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "CLIP aligns visual representations and textual descriptions by training a vision encoder and text encoder jointly using a symmetric contrastive cross-entropy loss over large-scale paired datasets.",
      "correctAnswerEn": "CLIP aligns visual representations and textual descriptions by training a vision encoder and text encoder jointly using a symmetric contrastive cross-entropy loss over large-scale paired datasets.",
      "correctAnswerAr": "يحاذي نموذج CLIP بين التمثيلات البصرية والنصوص عبر تدريب مشفر الرؤية ومشفر النصوص معاً باستخدام دالة خسارة تباينية متناظرة للإنتروبيا المتقاطعة على أزواج البيانات.",
      "correctIndex": 2,
      "explanationEn": "Correct Theoretical Formulation: CLIP aligns visual representations and textual descriptions by training a vision encoder and text encoder jointly using a symmetric contrastive cross-entropy loss over large-scale paired datasets.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يحاذي نموذج CLIP بين التمثيلات البصرية والنصوص عبر تدريب مشفر الرؤية ومشفر النصوص معاً باستخدام دالة خسارة تباينية متناظرة للإنتروبيا المتقاطعة على أزواج البيانات.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: CLIP aligns visual representations and textual descriptions by training a vision encoder and text encoder jointly using a symmetric contrastive cross-entropy loss over large-scale paired datasets.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يحاذي نموذج CLIP بين التمثيلات البصرية والنصوص عبر تدريب مشفر الرؤية ومشفر النصوص معاً باستخدام دالة خسارة تباينية متناظرة للإنتروبيا المتقاطعة على أزواج البيانات.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch2_easy_4",
      "titleEn": "[EASY] Variational Autoencoders (VAEs) & Reparameterization Trick - Review 4",
      "titleAr": "[مستوى أساسي] المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick) - سؤال 4",
      "questionEn": "[AI & Data Science Core Concept] Regarding Variational Autoencoders (VAEs) & Reparameterization Trick, which of the following statements is theoretically and mathematically sound? (Variant 4)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 4)",
      "optionsEn": [
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "Variational Autoencoders (VAEs) map high-dimensional data into a continuous, smooth probabilistic latent distribution parameterized by mean vector $\\mu$ and variance vector $\\sigma^2$."
      ],
      "optionsAr": [
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "ترسم المشفرات التلقائية المتغيرة (VAEs) البيانات عالية الأبعاد في فضاء كامن احتمالي أملس ومستمر مُعرّف بمتجه المتوسطات $\\mu$ ومتجه التباين $\\sigma^2$."
      ],
      "correctAnswer": "Variational Autoencoders (VAEs) map high-dimensional data into a continuous, smooth probabilistic latent distribution parameterized by mean vector $\\mu$ and variance vector $\\sigma^2$.",
      "correctAnswerEn": "Variational Autoencoders (VAEs) map high-dimensional data into a continuous, smooth probabilistic latent distribution parameterized by mean vector $\\mu$ and variance vector $\\sigma^2$.",
      "correctAnswerAr": "ترسم المشفرات التلقائية المتغيرة (VAEs) البيانات عالية الأبعاد في فضاء كامن احتمالي أملس ومستمر مُعرّف بمتجه المتوسطات $\\mu$ ومتجه التباين $\\sigma^2$.",
      "correctIndex": 3,
      "explanationEn": "Correct Theoretical Formulation: Variational Autoencoders (VAEs) map high-dimensional data into a continuous, smooth probabilistic latent distribution parameterized by mean vector $\\mu$ and variance vector $\\sigma^2$.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: ترسم المشفرات التلقائية المتغيرة (VAEs) البيانات عالية الأبعاد في فضاء كامن احتمالي أملس ومستمر مُعرّف بمتجه المتوسطات $\\mu$ ومتجه التباين $\\sigma^2$.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Variational Autoencoders (VAEs) & Reparameterization Trick.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Variational Autoencoders (VAEs) map high-dimensional data into a continuous, smooth probabilistic latent distribution parameterized by mean vector $\\mu$ and variance vector $\\sigma^2$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: ترسم المشفرات التلقائية المتغيرة (VAEs) البيانات عالية الأبعاد في فضاء كامن احتمالي أملس ومستمر مُعرّف بمتجه المتوسطات $\\mu$ ومتجه التباين $\\sigma^2$.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch2_easy_5",
      "titleEn": "[EASY] Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM) - Review 5",
      "titleAr": "[مستوى أساسي] النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM) - سؤال 5",
      "questionEn": "[AI & Data Science Core Concept] Regarding Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM), which of the following statements is theoretically and mathematically sound? (Variant 5)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 5)",
      "optionsEn": [
        "Denoising Diffusion Probabilistic Models generate high-fidelity images by learning the reverse process of a forward Markov chain that gradually corrupts data with Gaussian noise over $T$ timesteps.",
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تولد نماذج الانتشار لإزالة الضوضاء صوراً فائقة الجودة بتعلم العملية العكسية لسلسلة ماركوف الأمامية التي تضيف تدريجياً ضوضاء غاوسية عبر $T$ خطوة زمنية.",
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "Denoising Diffusion Probabilistic Models generate high-fidelity images by learning the reverse process of a forward Markov chain that gradually corrupts data with Gaussian noise over $T$ timesteps.",
      "correctAnswerEn": "Denoising Diffusion Probabilistic Models generate high-fidelity images by learning the reverse process of a forward Markov chain that gradually corrupts data with Gaussian noise over $T$ timesteps.",
      "correctAnswerAr": "تولد نماذج الانتشار لإزالة الضوضاء صوراً فائقة الجودة بتعلم العملية العكسية لسلسلة ماركوف الأمامية التي تضيف تدريجياً ضوضاء غاوسية عبر $T$ خطوة زمنية.",
      "correctIndex": 0,
      "explanationEn": "Correct Theoretical Formulation: Denoising Diffusion Probabilistic Models generate high-fidelity images by learning the reverse process of a forward Markov chain that gradually corrupts data with Gaussian noise over $T$ timesteps.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تولد نماذج الانتشار لإزالة الضوضاء صوراً فائقة الجودة بتعلم العملية العكسية لسلسلة ماركوف الأمامية التي تضيف تدريجياً ضوضاء غاوسية عبر $T$ خطوة زمنية.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Denoising Diffusion Probabilistic Models generate high-fidelity images by learning the reverse process of a forward Markov chain that gradually corrupts data with Gaussian noise over $T$ timesteps.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تولد نماذج الانتشار لإزالة الضوضاء صوراً فائقة الجودة بتعلم العملية العكسية لسلسلة ماركوف الأمامية التي تضيف تدريجياً ضوضاء غاوسية عبر $T$ خطوة زمنية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch2_easy_6",
      "titleEn": "[EASY] Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment - Review 6",
      "titleAr": "[مستوى أساسي] التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط - سؤال 6",
      "questionEn": "[AI & Data Science Core Concept] Regarding Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment, which of the following statements is theoretically and mathematically sound? (Variant 6)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 6)",
      "optionsEn": [
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "CLIP aligns visual representations and textual descriptions by training a vision encoder and text encoder jointly using a symmetric contrastive cross-entropy loss over large-scale paired datasets.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يحاذي نموذج CLIP بين التمثيلات البصرية والنصوص عبر تدريب مشفر الرؤية ومشفر النصوص معاً باستخدام دالة خسارة تباينية متناظرة للإنتروبيا المتقاطعة على أزواج البيانات.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "CLIP aligns visual representations and textual descriptions by training a vision encoder and text encoder jointly using a symmetric contrastive cross-entropy loss over large-scale paired datasets.",
      "correctAnswerEn": "CLIP aligns visual representations and textual descriptions by training a vision encoder and text encoder jointly using a symmetric contrastive cross-entropy loss over large-scale paired datasets.",
      "correctAnswerAr": "يحاذي نموذج CLIP بين التمثيلات البصرية والنصوص عبر تدريب مشفر الرؤية ومشفر النصوص معاً باستخدام دالة خسارة تباينية متناظرة للإنتروبيا المتقاطعة على أزواج البيانات.",
      "correctIndex": 1,
      "explanationEn": "Correct Theoretical Formulation: CLIP aligns visual representations and textual descriptions by training a vision encoder and text encoder jointly using a symmetric contrastive cross-entropy loss over large-scale paired datasets.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يحاذي نموذج CLIP بين التمثيلات البصرية والنصوص عبر تدريب مشفر الرؤية ومشفر النصوص معاً باستخدام دالة خسارة تباينية متناظرة للإنتروبيا المتقاطعة على أزواج البيانات.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: CLIP aligns visual representations and textual descriptions by training a vision encoder and text encoder jointly using a symmetric contrastive cross-entropy loss over large-scale paired datasets.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يحاذي نموذج CLIP بين التمثيلات البصرية والنصوص عبر تدريب مشفر الرؤية ومشفر النصوص معاً باستخدام دالة خسارة تباينية متناظرة للإنتروبيا المتقاطعة على أزواج البيانات.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch2_easy_7",
      "titleEn": "[EASY] Variational Autoencoders (VAEs) & Reparameterization Trick - Review 7",
      "titleAr": "[مستوى أساسي] المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick) - سؤال 7",
      "questionEn": "[AI & Data Science Core Concept] Regarding Variational Autoencoders (VAEs) & Reparameterization Trick, which of the following statements is theoretically and mathematically sound? (Variant 7)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 7)",
      "optionsEn": [
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Variational Autoencoders (VAEs) map high-dimensional data into a continuous, smooth probabilistic latent distribution parameterized by mean vector $\\mu$ and variance vector $\\sigma^2$.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "ترسم المشفرات التلقائية المتغيرة (VAEs) البيانات عالية الأبعاد في فضاء كامن احتمالي أملس ومستمر مُعرّف بمتجه المتوسطات $\\mu$ ومتجه التباين $\\sigma^2$.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "Variational Autoencoders (VAEs) map high-dimensional data into a continuous, smooth probabilistic latent distribution parameterized by mean vector $\\mu$ and variance vector $\\sigma^2$.",
      "correctAnswerEn": "Variational Autoencoders (VAEs) map high-dimensional data into a continuous, smooth probabilistic latent distribution parameterized by mean vector $\\mu$ and variance vector $\\sigma^2$.",
      "correctAnswerAr": "ترسم المشفرات التلقائية المتغيرة (VAEs) البيانات عالية الأبعاد في فضاء كامن احتمالي أملس ومستمر مُعرّف بمتجه المتوسطات $\\mu$ ومتجه التباين $\\sigma^2$.",
      "correctIndex": 2,
      "explanationEn": "Correct Theoretical Formulation: Variational Autoencoders (VAEs) map high-dimensional data into a continuous, smooth probabilistic latent distribution parameterized by mean vector $\\mu$ and variance vector $\\sigma^2$.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: ترسم المشفرات التلقائية المتغيرة (VAEs) البيانات عالية الأبعاد في فضاء كامن احتمالي أملس ومستمر مُعرّف بمتجه المتوسطات $\\mu$ ومتجه التباين $\\sigma^2$.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Variational Autoencoders (VAEs) & Reparameterization Trick.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Variational Autoencoders (VAEs) map high-dimensional data into a continuous, smooth probabilistic latent distribution parameterized by mean vector $\\mu$ and variance vector $\\sigma^2$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: ترسم المشفرات التلقائية المتغيرة (VAEs) البيانات عالية الأبعاد في فضاء كامن احتمالي أملس ومستمر مُعرّف بمتجه المتوسطات $\\mu$ ومتجه التباين $\\sigma^2$.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch2_easy_8",
      "titleEn": "[EASY] Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM) - Review 8",
      "titleAr": "[مستوى أساسي] النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM) - سؤال 8",
      "questionEn": "[AI & Data Science Core Concept] Regarding Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM), which of the following statements is theoretically and mathematically sound? (Variant 8)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 8)",
      "optionsEn": [
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "Denoising Diffusion Probabilistic Models generate high-fidelity images by learning the reverse process of a forward Markov chain that gradually corrupts data with Gaussian noise over $T$ timesteps."
      ],
      "optionsAr": [
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "تولد نماذج الانتشار لإزالة الضوضاء صوراً فائقة الجودة بتعلم العملية العكسية لسلسلة ماركوف الأمامية التي تضيف تدريجياً ضوضاء غاوسية عبر $T$ خطوة زمنية."
      ],
      "correctAnswer": "Denoising Diffusion Probabilistic Models generate high-fidelity images by learning the reverse process of a forward Markov chain that gradually corrupts data with Gaussian noise over $T$ timesteps.",
      "correctAnswerEn": "Denoising Diffusion Probabilistic Models generate high-fidelity images by learning the reverse process of a forward Markov chain that gradually corrupts data with Gaussian noise over $T$ timesteps.",
      "correctAnswerAr": "تولد نماذج الانتشار لإزالة الضوضاء صوراً فائقة الجودة بتعلم العملية العكسية لسلسلة ماركوف الأمامية التي تضيف تدريجياً ضوضاء غاوسية عبر $T$ خطوة زمنية.",
      "correctIndex": 3,
      "explanationEn": "Correct Theoretical Formulation: Denoising Diffusion Probabilistic Models generate high-fidelity images by learning the reverse process of a forward Markov chain that gradually corrupts data with Gaussian noise over $T$ timesteps.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تولد نماذج الانتشار لإزالة الضوضاء صوراً فائقة الجودة بتعلم العملية العكسية لسلسلة ماركوف الأمامية التي تضيف تدريجياً ضوضاء غاوسية عبر $T$ خطوة زمنية.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Denoising Diffusion Probabilistic Models generate high-fidelity images by learning the reverse process of a forward Markov chain that gradually corrupts data with Gaussian noise over $T$ timesteps.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تولد نماذج الانتشار لإزالة الضوضاء صوراً فائقة الجودة بتعلم العملية العكسية لسلسلة ماركوف الأمامية التي تضيف تدريجياً ضوضاء غاوسية عبر $T$ خطوة زمنية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch2_easy_9",
      "titleEn": "[EASY] Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment - Review 9",
      "titleAr": "[مستوى أساسي] التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط - سؤال 9",
      "questionEn": "[AI & Data Science Core Concept] Regarding Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment, which of the following statements is theoretically and mathematically sound? (Variant 9)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 9)",
      "optionsEn": [
        "CLIP aligns visual representations and textual descriptions by training a vision encoder and text encoder jointly using a symmetric contrastive cross-entropy loss over large-scale paired datasets.",
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "يحاذي نموذج CLIP بين التمثيلات البصرية والنصوص عبر تدريب مشفر الرؤية ومشفر النصوص معاً باستخدام دالة خسارة تباينية متناظرة للإنتروبيا المتقاطعة على أزواج البيانات.",
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "CLIP aligns visual representations and textual descriptions by training a vision encoder and text encoder jointly using a symmetric contrastive cross-entropy loss over large-scale paired datasets.",
      "correctAnswerEn": "CLIP aligns visual representations and textual descriptions by training a vision encoder and text encoder jointly using a symmetric contrastive cross-entropy loss over large-scale paired datasets.",
      "correctAnswerAr": "يحاذي نموذج CLIP بين التمثيلات البصرية والنصوص عبر تدريب مشفر الرؤية ومشفر النصوص معاً باستخدام دالة خسارة تباينية متناظرة للإنتروبيا المتقاطعة على أزواج البيانات.",
      "correctIndex": 0,
      "explanationEn": "Correct Theoretical Formulation: CLIP aligns visual representations and textual descriptions by training a vision encoder and text encoder jointly using a symmetric contrastive cross-entropy loss over large-scale paired datasets.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يحاذي نموذج CLIP بين التمثيلات البصرية والنصوص عبر تدريب مشفر الرؤية ومشفر النصوص معاً باستخدام دالة خسارة تباينية متناظرة للإنتروبيا المتقاطعة على أزواج البيانات.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: CLIP aligns visual representations and textual descriptions by training a vision encoder and text encoder jointly using a symmetric contrastive cross-entropy loss over large-scale paired datasets.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يحاذي نموذج CLIP بين التمثيلات البصرية والنصوص عبر تدريب مشفر الرؤية ومشفر النصوص معاً باستخدام دالة خسارة تباينية متناظرة للإنتروبيا المتقاطعة على أزواج البيانات.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch2_easy_10",
      "titleEn": "[EASY] Variational Autoencoders (VAEs) & Reparameterization Trick - Review 10",
      "titleAr": "[مستوى أساسي] المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick) - سؤال 10",
      "questionEn": "[AI & Data Science Core Concept] Regarding Variational Autoencoders (VAEs) & Reparameterization Trick, which of the following statements is theoretically and mathematically sound? (Variant 10)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 10)",
      "optionsEn": [
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "Variational Autoencoders (VAEs) map high-dimensional data into a continuous, smooth probabilistic latent distribution parameterized by mean vector $\\mu$ and variance vector $\\sigma^2$.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "ترسم المشفرات التلقائية المتغيرة (VAEs) البيانات عالية الأبعاد في فضاء كامن احتمالي أملس ومستمر مُعرّف بمتجه المتوسطات $\\mu$ ومتجه التباين $\\sigma^2$.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "Variational Autoencoders (VAEs) map high-dimensional data into a continuous, smooth probabilistic latent distribution parameterized by mean vector $\\mu$ and variance vector $\\sigma^2$.",
      "correctAnswerEn": "Variational Autoencoders (VAEs) map high-dimensional data into a continuous, smooth probabilistic latent distribution parameterized by mean vector $\\mu$ and variance vector $\\sigma^2$.",
      "correctAnswerAr": "ترسم المشفرات التلقائية المتغيرة (VAEs) البيانات عالية الأبعاد في فضاء كامن احتمالي أملس ومستمر مُعرّف بمتجه المتوسطات $\\mu$ ومتجه التباين $\\sigma^2$.",
      "correctIndex": 1,
      "explanationEn": "Correct Theoretical Formulation: Variational Autoencoders (VAEs) map high-dimensional data into a continuous, smooth probabilistic latent distribution parameterized by mean vector $\\mu$ and variance vector $\\sigma^2$.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: ترسم المشفرات التلقائية المتغيرة (VAEs) البيانات عالية الأبعاد في فضاء كامن احتمالي أملس ومستمر مُعرّف بمتجه المتوسطات $\\mu$ ومتجه التباين $\\sigma^2$.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Variational Autoencoders (VAEs) & Reparameterization Trick.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Variational Autoencoders (VAEs) map high-dimensional data into a continuous, smooth probabilistic latent distribution parameterized by mean vector $\\mu$ and variance vector $\\sigma^2$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: ترسم المشفرات التلقائية المتغيرة (VAEs) البيانات عالية الأبعاد في فضاء كامن احتمالي أملس ومستمر مُعرّف بمتجه المتوسطات $\\mu$ ومتجه التباين $\\sigma^2$.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch2_easy_11",
      "titleEn": "[EASY] Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM) - Review 11",
      "titleAr": "[مستوى أساسي] النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM) - سؤال 11",
      "questionEn": "[AI & Data Science Core Concept] Regarding Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM), which of the following statements is theoretically and mathematically sound? (Variant 11)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 11)",
      "optionsEn": [
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "Denoising Diffusion Probabilistic Models generate high-fidelity images by learning the reverse process of a forward Markov chain that gradually corrupts data with Gaussian noise over $T$ timesteps.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "تولد نماذج الانتشار لإزالة الضوضاء صوراً فائقة الجودة بتعلم العملية العكسية لسلسلة ماركوف الأمامية التي تضيف تدريجياً ضوضاء غاوسية عبر $T$ خطوة زمنية.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "Denoising Diffusion Probabilistic Models generate high-fidelity images by learning the reverse process of a forward Markov chain that gradually corrupts data with Gaussian noise over $T$ timesteps.",
      "correctAnswerEn": "Denoising Diffusion Probabilistic Models generate high-fidelity images by learning the reverse process of a forward Markov chain that gradually corrupts data with Gaussian noise over $T$ timesteps.",
      "correctAnswerAr": "تولد نماذج الانتشار لإزالة الضوضاء صوراً فائقة الجودة بتعلم العملية العكسية لسلسلة ماركوف الأمامية التي تضيف تدريجياً ضوضاء غاوسية عبر $T$ خطوة زمنية.",
      "correctIndex": 2,
      "explanationEn": "Correct Theoretical Formulation: Denoising Diffusion Probabilistic Models generate high-fidelity images by learning the reverse process of a forward Markov chain that gradually corrupts data with Gaussian noise over $T$ timesteps.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تولد نماذج الانتشار لإزالة الضوضاء صوراً فائقة الجودة بتعلم العملية العكسية لسلسلة ماركوف الأمامية التي تضيف تدريجياً ضوضاء غاوسية عبر $T$ خطوة زمنية.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Denoising Diffusion Probabilistic Models generate high-fidelity images by learning the reverse process of a forward Markov chain that gradually corrupts data with Gaussian noise over $T$ timesteps.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تولد نماذج الانتشار لإزالة الضوضاء صوراً فائقة الجودة بتعلم العملية العكسية لسلسلة ماركوف الأمامية التي تضيف تدريجياً ضوضاء غاوسية عبر $T$ خطوة زمنية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch2_easy_12",
      "titleEn": "[EASY] Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment - Review 12",
      "titleAr": "[مستوى أساسي] التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط - سؤال 12",
      "questionEn": "[AI & Data Science Core Concept] Regarding Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment, which of the following statements is theoretically and mathematically sound? (Variant 12)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 12)",
      "optionsEn": [
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "CLIP aligns visual representations and textual descriptions by training a vision encoder and text encoder jointly using a symmetric contrastive cross-entropy loss over large-scale paired datasets."
      ],
      "optionsAr": [
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "يحاذي نموذج CLIP بين التمثيلات البصرية والنصوص عبر تدريب مشفر الرؤية ومشفر النصوص معاً باستخدام دالة خسارة تباينية متناظرة للإنتروبيا المتقاطعة على أزواج البيانات."
      ],
      "correctAnswer": "CLIP aligns visual representations and textual descriptions by training a vision encoder and text encoder jointly using a symmetric contrastive cross-entropy loss over large-scale paired datasets.",
      "correctAnswerEn": "CLIP aligns visual representations and textual descriptions by training a vision encoder and text encoder jointly using a symmetric contrastive cross-entropy loss over large-scale paired datasets.",
      "correctAnswerAr": "يحاذي نموذج CLIP بين التمثيلات البصرية والنصوص عبر تدريب مشفر الرؤية ومشفر النصوص معاً باستخدام دالة خسارة تباينية متناظرة للإنتروبيا المتقاطعة على أزواج البيانات.",
      "correctIndex": 3,
      "explanationEn": "Correct Theoretical Formulation: CLIP aligns visual representations and textual descriptions by training a vision encoder and text encoder jointly using a symmetric contrastive cross-entropy loss over large-scale paired datasets.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يحاذي نموذج CLIP بين التمثيلات البصرية والنصوص عبر تدريب مشفر الرؤية ومشفر النصوص معاً باستخدام دالة خسارة تباينية متناظرة للإنتروبيا المتقاطعة على أزواج البيانات.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: CLIP aligns visual representations and textual descriptions by training a vision encoder and text encoder jointly using a symmetric contrastive cross-entropy loss over large-scale paired datasets.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يحاذي نموذج CLIP بين التمثيلات البصرية والنصوص عبر تدريب مشفر الرؤية ومشفر النصوص معاً باستخدام دالة خسارة تباينية متناظرة للإنتروبيا المتقاطعة على أزواج البيانات.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch2_easy_13",
      "titleEn": "[EASY] Variational Autoencoders (VAEs) & Reparameterization Trick - Review 13",
      "titleAr": "[مستوى أساسي] المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick) - سؤال 13",
      "questionEn": "[AI & Data Science Core Concept] Regarding Variational Autoencoders (VAEs) & Reparameterization Trick, which of the following statements is theoretically and mathematically sound? (Variant 13)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 13)",
      "optionsEn": [
        "Variational Autoencoders (VAEs) map high-dimensional data into a continuous, smooth probabilistic latent distribution parameterized by mean vector $\\mu$ and variance vector $\\sigma^2$.",
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "ترسم المشفرات التلقائية المتغيرة (VAEs) البيانات عالية الأبعاد في فضاء كامن احتمالي أملس ومستمر مُعرّف بمتجه المتوسطات $\\mu$ ومتجه التباين $\\sigma^2$.",
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "Variational Autoencoders (VAEs) map high-dimensional data into a continuous, smooth probabilistic latent distribution parameterized by mean vector $\\mu$ and variance vector $\\sigma^2$.",
      "correctAnswerEn": "Variational Autoencoders (VAEs) map high-dimensional data into a continuous, smooth probabilistic latent distribution parameterized by mean vector $\\mu$ and variance vector $\\sigma^2$.",
      "correctAnswerAr": "ترسم المشفرات التلقائية المتغيرة (VAEs) البيانات عالية الأبعاد في فضاء كامن احتمالي أملس ومستمر مُعرّف بمتجه المتوسطات $\\mu$ ومتجه التباين $\\sigma^2$.",
      "correctIndex": 0,
      "explanationEn": "Correct Theoretical Formulation: Variational Autoencoders (VAEs) map high-dimensional data into a continuous, smooth probabilistic latent distribution parameterized by mean vector $\\mu$ and variance vector $\\sigma^2$.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: ترسم المشفرات التلقائية المتغيرة (VAEs) البيانات عالية الأبعاد في فضاء كامن احتمالي أملس ومستمر مُعرّف بمتجه المتوسطات $\\mu$ ومتجه التباين $\\sigma^2$.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Variational Autoencoders (VAEs) & Reparameterization Trick.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Variational Autoencoders (VAEs) map high-dimensional data into a continuous, smooth probabilistic latent distribution parameterized by mean vector $\\mu$ and variance vector $\\sigma^2$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: ترسم المشفرات التلقائية المتغيرة (VAEs) البيانات عالية الأبعاد في فضاء كامن احتمالي أملس ومستمر مُعرّف بمتجه المتوسطات $\\mu$ ومتجه التباين $\\sigma^2$.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch2_easy_14",
      "titleEn": "[EASY] Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM) - Review 14",
      "titleAr": "[مستوى أساسي] النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM) - سؤال 14",
      "questionEn": "[AI & Data Science Core Concept] Regarding Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM), which of the following statements is theoretically and mathematically sound? (Variant 14)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 14)",
      "optionsEn": [
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "Denoising Diffusion Probabilistic Models generate high-fidelity images by learning the reverse process of a forward Markov chain that gradually corrupts data with Gaussian noise over $T$ timesteps.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "تولد نماذج الانتشار لإزالة الضوضاء صوراً فائقة الجودة بتعلم العملية العكسية لسلسلة ماركوف الأمامية التي تضيف تدريجياً ضوضاء غاوسية عبر $T$ خطوة زمنية.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "Denoising Diffusion Probabilistic Models generate high-fidelity images by learning the reverse process of a forward Markov chain that gradually corrupts data with Gaussian noise over $T$ timesteps.",
      "correctAnswerEn": "Denoising Diffusion Probabilistic Models generate high-fidelity images by learning the reverse process of a forward Markov chain that gradually corrupts data with Gaussian noise over $T$ timesteps.",
      "correctAnswerAr": "تولد نماذج الانتشار لإزالة الضوضاء صوراً فائقة الجودة بتعلم العملية العكسية لسلسلة ماركوف الأمامية التي تضيف تدريجياً ضوضاء غاوسية عبر $T$ خطوة زمنية.",
      "correctIndex": 1,
      "explanationEn": "Correct Theoretical Formulation: Denoising Diffusion Probabilistic Models generate high-fidelity images by learning the reverse process of a forward Markov chain that gradually corrupts data with Gaussian noise over $T$ timesteps.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تولد نماذج الانتشار لإزالة الضوضاء صوراً فائقة الجودة بتعلم العملية العكسية لسلسلة ماركوف الأمامية التي تضيف تدريجياً ضوضاء غاوسية عبر $T$ خطوة زمنية.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Denoising Diffusion Probabilistic Models generate high-fidelity images by learning the reverse process of a forward Markov chain that gradually corrupts data with Gaussian noise over $T$ timesteps.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تولد نماذج الانتشار لإزالة الضوضاء صوراً فائقة الجودة بتعلم العملية العكسية لسلسلة ماركوف الأمامية التي تضيف تدريجياً ضوضاء غاوسية عبر $T$ خطوة زمنية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch2_easy_15",
      "titleEn": "[EASY] Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment - Review 15",
      "titleAr": "[مستوى أساسي] التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط - سؤال 15",
      "questionEn": "[AI & Data Science Core Concept] Regarding Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment, which of the following statements is theoretically and mathematically sound? (Variant 15)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 15)",
      "optionsEn": [
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "CLIP aligns visual representations and textual descriptions by training a vision encoder and text encoder jointly using a symmetric contrastive cross-entropy loss over large-scale paired datasets.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "يحاذي نموذج CLIP بين التمثيلات البصرية والنصوص عبر تدريب مشفر الرؤية ومشفر النصوص معاً باستخدام دالة خسارة تباينية متناظرة للإنتروبيا المتقاطعة على أزواج البيانات.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "CLIP aligns visual representations and textual descriptions by training a vision encoder and text encoder jointly using a symmetric contrastive cross-entropy loss over large-scale paired datasets.",
      "correctAnswerEn": "CLIP aligns visual representations and textual descriptions by training a vision encoder and text encoder jointly using a symmetric contrastive cross-entropy loss over large-scale paired datasets.",
      "correctAnswerAr": "يحاذي نموذج CLIP بين التمثيلات البصرية والنصوص عبر تدريب مشفر الرؤية ومشفر النصوص معاً باستخدام دالة خسارة تباينية متناظرة للإنتروبيا المتقاطعة على أزواج البيانات.",
      "correctIndex": 2,
      "explanationEn": "Correct Theoretical Formulation: CLIP aligns visual representations and textual descriptions by training a vision encoder and text encoder jointly using a symmetric contrastive cross-entropy loss over large-scale paired datasets.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يحاذي نموذج CLIP بين التمثيلات البصرية والنصوص عبر تدريب مشفر الرؤية ومشفر النصوص معاً باستخدام دالة خسارة تباينية متناظرة للإنتروبيا المتقاطعة على أزواج البيانات.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: CLIP aligns visual representations and textual descriptions by training a vision encoder and text encoder jointly using a symmetric contrastive cross-entropy loss over large-scale paired datasets.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يحاذي نموذج CLIP بين التمثيلات البصرية والنصوص عبر تدريب مشفر الرؤية ومشفر النصوص معاً باستخدام دالة خسارة تباينية متناظرة للإنتروبيا المتقاطعة على أزواج البيانات.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch2_easy_16",
      "titleEn": "[EASY] Variational Autoencoders (VAEs) & Reparameterization Trick - Review 16",
      "titleAr": "[مستوى أساسي] المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick) - سؤال 16",
      "questionEn": "[AI & Data Science Core Concept] Regarding Variational Autoencoders (VAEs) & Reparameterization Trick, which of the following statements is theoretically and mathematically sound? (Variant 16)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 16)",
      "optionsEn": [
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "Variational Autoencoders (VAEs) map high-dimensional data into a continuous, smooth probabilistic latent distribution parameterized by mean vector $\\mu$ and variance vector $\\sigma^2$."
      ],
      "optionsAr": [
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "ترسم المشفرات التلقائية المتغيرة (VAEs) البيانات عالية الأبعاد في فضاء كامن احتمالي أملس ومستمر مُعرّف بمتجه المتوسطات $\\mu$ ومتجه التباين $\\sigma^2$."
      ],
      "correctAnswer": "Variational Autoencoders (VAEs) map high-dimensional data into a continuous, smooth probabilistic latent distribution parameterized by mean vector $\\mu$ and variance vector $\\sigma^2$.",
      "correctAnswerEn": "Variational Autoencoders (VAEs) map high-dimensional data into a continuous, smooth probabilistic latent distribution parameterized by mean vector $\\mu$ and variance vector $\\sigma^2$.",
      "correctAnswerAr": "ترسم المشفرات التلقائية المتغيرة (VAEs) البيانات عالية الأبعاد في فضاء كامن احتمالي أملس ومستمر مُعرّف بمتجه المتوسطات $\\mu$ ومتجه التباين $\\sigma^2$.",
      "correctIndex": 3,
      "explanationEn": "Correct Theoretical Formulation: Variational Autoencoders (VAEs) map high-dimensional data into a continuous, smooth probabilistic latent distribution parameterized by mean vector $\\mu$ and variance vector $\\sigma^2$.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: ترسم المشفرات التلقائية المتغيرة (VAEs) البيانات عالية الأبعاد في فضاء كامن احتمالي أملس ومستمر مُعرّف بمتجه المتوسطات $\\mu$ ومتجه التباين $\\sigma^2$.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Variational Autoencoders (VAEs) & Reparameterization Trick.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Variational Autoencoders (VAEs) map high-dimensional data into a continuous, smooth probabilistic latent distribution parameterized by mean vector $\\mu$ and variance vector $\\sigma^2$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: ترسم المشفرات التلقائية المتغيرة (VAEs) البيانات عالية الأبعاد في فضاء كامن احتمالي أملس ومستمر مُعرّف بمتجه المتوسطات $\\mu$ ومتجه التباين $\\sigma^2$.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch2_easy_17",
      "titleEn": "[EASY] Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM) - Review 17",
      "titleAr": "[مستوى أساسي] النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM) - سؤال 17",
      "questionEn": "[AI & Data Science Core Concept] Regarding Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM), which of the following statements is theoretically and mathematically sound? (Variant 17)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 17)",
      "optionsEn": [
        "Denoising Diffusion Probabilistic Models generate high-fidelity images by learning the reverse process of a forward Markov chain that gradually corrupts data with Gaussian noise over $T$ timesteps.",
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "تولد نماذج الانتشار لإزالة الضوضاء صوراً فائقة الجودة بتعلم العملية العكسية لسلسلة ماركوف الأمامية التي تضيف تدريجياً ضوضاء غاوسية عبر $T$ خطوة زمنية.",
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "Denoising Diffusion Probabilistic Models generate high-fidelity images by learning the reverse process of a forward Markov chain that gradually corrupts data with Gaussian noise over $T$ timesteps.",
      "correctAnswerEn": "Denoising Diffusion Probabilistic Models generate high-fidelity images by learning the reverse process of a forward Markov chain that gradually corrupts data with Gaussian noise over $T$ timesteps.",
      "correctAnswerAr": "تولد نماذج الانتشار لإزالة الضوضاء صوراً فائقة الجودة بتعلم العملية العكسية لسلسلة ماركوف الأمامية التي تضيف تدريجياً ضوضاء غاوسية عبر $T$ خطوة زمنية.",
      "correctIndex": 0,
      "explanationEn": "Correct Theoretical Formulation: Denoising Diffusion Probabilistic Models generate high-fidelity images by learning the reverse process of a forward Markov chain that gradually corrupts data with Gaussian noise over $T$ timesteps.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تولد نماذج الانتشار لإزالة الضوضاء صوراً فائقة الجودة بتعلم العملية العكسية لسلسلة ماركوف الأمامية التي تضيف تدريجياً ضوضاء غاوسية عبر $T$ خطوة زمنية.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Denoising Diffusion Probabilistic Models generate high-fidelity images by learning the reverse process of a forward Markov chain that gradually corrupts data with Gaussian noise over $T$ timesteps.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تولد نماذج الانتشار لإزالة الضوضاء صوراً فائقة الجودة بتعلم العملية العكسية لسلسلة ماركوف الأمامية التي تضيف تدريجياً ضوضاء غاوسية عبر $T$ خطوة زمنية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch2_easy_18",
      "titleEn": "[EASY] Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment - Review 18",
      "titleAr": "[مستوى أساسي] التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط - سؤال 18",
      "questionEn": "[AI & Data Science Core Concept] Regarding Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment, which of the following statements is theoretically and mathematically sound? (Variant 18)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 18)",
      "optionsEn": [
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "CLIP aligns visual representations and textual descriptions by training a vision encoder and text encoder jointly using a symmetric contrastive cross-entropy loss over large-scale paired datasets.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "يحاذي نموذج CLIP بين التمثيلات البصرية والنصوص عبر تدريب مشفر الرؤية ومشفر النصوص معاً باستخدام دالة خسارة تباينية متناظرة للإنتروبيا المتقاطعة على أزواج البيانات.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "CLIP aligns visual representations and textual descriptions by training a vision encoder and text encoder jointly using a symmetric contrastive cross-entropy loss over large-scale paired datasets.",
      "correctAnswerEn": "CLIP aligns visual representations and textual descriptions by training a vision encoder and text encoder jointly using a symmetric contrastive cross-entropy loss over large-scale paired datasets.",
      "correctAnswerAr": "يحاذي نموذج CLIP بين التمثيلات البصرية والنصوص عبر تدريب مشفر الرؤية ومشفر النصوص معاً باستخدام دالة خسارة تباينية متناظرة للإنتروبيا المتقاطعة على أزواج البيانات.",
      "correctIndex": 1,
      "explanationEn": "Correct Theoretical Formulation: CLIP aligns visual representations and textual descriptions by training a vision encoder and text encoder jointly using a symmetric contrastive cross-entropy loss over large-scale paired datasets.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يحاذي نموذج CLIP بين التمثيلات البصرية والنصوص عبر تدريب مشفر الرؤية ومشفر النصوص معاً باستخدام دالة خسارة تباينية متناظرة للإنتروبيا المتقاطعة على أزواج البيانات.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: CLIP aligns visual representations and textual descriptions by training a vision encoder and text encoder jointly using a symmetric contrastive cross-entropy loss over large-scale paired datasets.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يحاذي نموذج CLIP بين التمثيلات البصرية والنصوص عبر تدريب مشفر الرؤية ومشفر النصوص معاً باستخدام دالة خسارة تباينية متناظرة للإنتروبيا المتقاطعة على أزواج البيانات.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch2_easy_19",
      "titleEn": "[EASY] Variational Autoencoders (VAEs) & Reparameterization Trick - Review 19",
      "titleAr": "[مستوى أساسي] المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick) - سؤال 19",
      "questionEn": "[AI & Data Science Core Concept] Regarding Variational Autoencoders (VAEs) & Reparameterization Trick, which of the following statements is theoretically and mathematically sound? (Variant 19)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 19)",
      "optionsEn": [
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "Variational Autoencoders (VAEs) map high-dimensional data into a continuous, smooth probabilistic latent distribution parameterized by mean vector $\\mu$ and variance vector $\\sigma^2$.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "ترسم المشفرات التلقائية المتغيرة (VAEs) البيانات عالية الأبعاد في فضاء كامن احتمالي أملس ومستمر مُعرّف بمتجه المتوسطات $\\mu$ ومتجه التباين $\\sigma^2$.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "Variational Autoencoders (VAEs) map high-dimensional data into a continuous, smooth probabilistic latent distribution parameterized by mean vector $\\mu$ and variance vector $\\sigma^2$.",
      "correctAnswerEn": "Variational Autoencoders (VAEs) map high-dimensional data into a continuous, smooth probabilistic latent distribution parameterized by mean vector $\\mu$ and variance vector $\\sigma^2$.",
      "correctAnswerAr": "ترسم المشفرات التلقائية المتغيرة (VAEs) البيانات عالية الأبعاد في فضاء كامن احتمالي أملس ومستمر مُعرّف بمتجه المتوسطات $\\mu$ ومتجه التباين $\\sigma^2$.",
      "correctIndex": 2,
      "explanationEn": "Correct Theoretical Formulation: Variational Autoencoders (VAEs) map high-dimensional data into a continuous, smooth probabilistic latent distribution parameterized by mean vector $\\mu$ and variance vector $\\sigma^2$.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: ترسم المشفرات التلقائية المتغيرة (VAEs) البيانات عالية الأبعاد في فضاء كامن احتمالي أملس ومستمر مُعرّف بمتجه المتوسطات $\\mu$ ومتجه التباين $\\sigma^2$.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Variational Autoencoders (VAEs) & Reparameterization Trick.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Variational Autoencoders (VAEs) map high-dimensional data into a continuous, smooth probabilistic latent distribution parameterized by mean vector $\\mu$ and variance vector $\\sigma^2$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: ترسم المشفرات التلقائية المتغيرة (VAEs) البيانات عالية الأبعاد في فضاء كامن احتمالي أملس ومستمر مُعرّف بمتجه المتوسطات $\\mu$ ومتجه التباين $\\sigma^2$.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch2_easy_20",
      "titleEn": "[EASY] Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM) - Review 20",
      "titleAr": "[مستوى أساسي] النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM) - سؤال 20",
      "questionEn": "[AI & Data Science Core Concept] Regarding Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM), which of the following statements is theoretically and mathematically sound? (Variant 20)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 20)",
      "optionsEn": [
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Denoising Diffusion Probabilistic Models generate high-fidelity images by learning the reverse process of a forward Markov chain that gradually corrupts data with Gaussian noise over $T$ timesteps."
      ],
      "optionsAr": [
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "تولد نماذج الانتشار لإزالة الضوضاء صوراً فائقة الجودة بتعلم العملية العكسية لسلسلة ماركوف الأمامية التي تضيف تدريجياً ضوضاء غاوسية عبر $T$ خطوة زمنية."
      ],
      "correctAnswer": "Denoising Diffusion Probabilistic Models generate high-fidelity images by learning the reverse process of a forward Markov chain that gradually corrupts data with Gaussian noise over $T$ timesteps.",
      "correctAnswerEn": "Denoising Diffusion Probabilistic Models generate high-fidelity images by learning the reverse process of a forward Markov chain that gradually corrupts data with Gaussian noise over $T$ timesteps.",
      "correctAnswerAr": "تولد نماذج الانتشار لإزالة الضوضاء صوراً فائقة الجودة بتعلم العملية العكسية لسلسلة ماركوف الأمامية التي تضيف تدريجياً ضوضاء غاوسية عبر $T$ خطوة زمنية.",
      "correctIndex": 3,
      "explanationEn": "Correct Theoretical Formulation: Denoising Diffusion Probabilistic Models generate high-fidelity images by learning the reverse process of a forward Markov chain that gradually corrupts data with Gaussian noise over $T$ timesteps.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تولد نماذج الانتشار لإزالة الضوضاء صوراً فائقة الجودة بتعلم العملية العكسية لسلسلة ماركوف الأمامية التي تضيف تدريجياً ضوضاء غاوسية عبر $T$ خطوة زمنية.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Denoising Diffusion Probabilistic Models generate high-fidelity images by learning the reverse process of a forward Markov chain that gradually corrupts data with Gaussian noise over $T$ timesteps.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تولد نماذج الانتشار لإزالة الضوضاء صوراً فائقة الجودة بتعلم العملية العكسية لسلسلة ماركوف الأمامية التي تضيف تدريجياً ضوضاء غاوسية عبر $T$ خطوة زمنية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch2_easy_21",
      "titleEn": "[EASY] Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment - Review 21",
      "titleAr": "[مستوى أساسي] التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط - سؤال 21",
      "questionEn": "[AI & Data Science Core Concept] Regarding Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment, which of the following statements is theoretically and mathematically sound? (Variant 21)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 21)",
      "optionsEn": [
        "CLIP aligns visual representations and textual descriptions by training a vision encoder and text encoder jointly using a symmetric contrastive cross-entropy loss over large-scale paired datasets.",
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "يحاذي نموذج CLIP بين التمثيلات البصرية والنصوص عبر تدريب مشفر الرؤية ومشفر النصوص معاً باستخدام دالة خسارة تباينية متناظرة للإنتروبيا المتقاطعة على أزواج البيانات.",
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "CLIP aligns visual representations and textual descriptions by training a vision encoder and text encoder jointly using a symmetric contrastive cross-entropy loss over large-scale paired datasets.",
      "correctAnswerEn": "CLIP aligns visual representations and textual descriptions by training a vision encoder and text encoder jointly using a symmetric contrastive cross-entropy loss over large-scale paired datasets.",
      "correctAnswerAr": "يحاذي نموذج CLIP بين التمثيلات البصرية والنصوص عبر تدريب مشفر الرؤية ومشفر النصوص معاً باستخدام دالة خسارة تباينية متناظرة للإنتروبيا المتقاطعة على أزواج البيانات.",
      "correctIndex": 0,
      "explanationEn": "Correct Theoretical Formulation: CLIP aligns visual representations and textual descriptions by training a vision encoder and text encoder jointly using a symmetric contrastive cross-entropy loss over large-scale paired datasets.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يحاذي نموذج CLIP بين التمثيلات البصرية والنصوص عبر تدريب مشفر الرؤية ومشفر النصوص معاً باستخدام دالة خسارة تباينية متناظرة للإنتروبيا المتقاطعة على أزواج البيانات.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: CLIP aligns visual representations and textual descriptions by training a vision encoder and text encoder jointly using a symmetric contrastive cross-entropy loss over large-scale paired datasets.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يحاذي نموذج CLIP بين التمثيلات البصرية والنصوص عبر تدريب مشفر الرؤية ومشفر النصوص معاً باستخدام دالة خسارة تباينية متناظرة للإنتروبيا المتقاطعة على أزواج البيانات.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch2_easy_22",
      "titleEn": "[EASY] Variational Autoencoders (VAEs) & Reparameterization Trick - Review 22",
      "titleAr": "[مستوى أساسي] المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick) - سؤال 22",
      "questionEn": "[AI & Data Science Core Concept] Regarding Variational Autoencoders (VAEs) & Reparameterization Trick, which of the following statements is theoretically and mathematically sound? (Variant 22)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 22)",
      "optionsEn": [
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "Variational Autoencoders (VAEs) map high-dimensional data into a continuous, smooth probabilistic latent distribution parameterized by mean vector $\\mu$ and variance vector $\\sigma^2$.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "ترسم المشفرات التلقائية المتغيرة (VAEs) البيانات عالية الأبعاد في فضاء كامن احتمالي أملس ومستمر مُعرّف بمتجه المتوسطات $\\mu$ ومتجه التباين $\\sigma^2$.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "Variational Autoencoders (VAEs) map high-dimensional data into a continuous, smooth probabilistic latent distribution parameterized by mean vector $\\mu$ and variance vector $\\sigma^2$.",
      "correctAnswerEn": "Variational Autoencoders (VAEs) map high-dimensional data into a continuous, smooth probabilistic latent distribution parameterized by mean vector $\\mu$ and variance vector $\\sigma^2$.",
      "correctAnswerAr": "ترسم المشفرات التلقائية المتغيرة (VAEs) البيانات عالية الأبعاد في فضاء كامن احتمالي أملس ومستمر مُعرّف بمتجه المتوسطات $\\mu$ ومتجه التباين $\\sigma^2$.",
      "correctIndex": 1,
      "explanationEn": "Correct Theoretical Formulation: Variational Autoencoders (VAEs) map high-dimensional data into a continuous, smooth probabilistic latent distribution parameterized by mean vector $\\mu$ and variance vector $\\sigma^2$.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: ترسم المشفرات التلقائية المتغيرة (VAEs) البيانات عالية الأبعاد في فضاء كامن احتمالي أملس ومستمر مُعرّف بمتجه المتوسطات $\\mu$ ومتجه التباين $\\sigma^2$.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Variational Autoencoders (VAEs) & Reparameterization Trick.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Variational Autoencoders (VAEs) map high-dimensional data into a continuous, smooth probabilistic latent distribution parameterized by mean vector $\\mu$ and variance vector $\\sigma^2$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: ترسم المشفرات التلقائية المتغيرة (VAEs) البيانات عالية الأبعاد في فضاء كامن احتمالي أملس ومستمر مُعرّف بمتجه المتوسطات $\\mu$ ومتجه التباين $\\sigma^2$.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch2_easy_23",
      "titleEn": "[EASY] Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM) - Review 23",
      "titleAr": "[مستوى أساسي] النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM) - سؤال 23",
      "questionEn": "[AI & Data Science Core Concept] Regarding Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM), which of the following statements is theoretically and mathematically sound? (Variant 23)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 23)",
      "optionsEn": [
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Denoising Diffusion Probabilistic Models generate high-fidelity images by learning the reverse process of a forward Markov chain that gradually corrupts data with Gaussian noise over $T$ timesteps.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تولد نماذج الانتشار لإزالة الضوضاء صوراً فائقة الجودة بتعلم العملية العكسية لسلسلة ماركوف الأمامية التي تضيف تدريجياً ضوضاء غاوسية عبر $T$ خطوة زمنية.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "Denoising Diffusion Probabilistic Models generate high-fidelity images by learning the reverse process of a forward Markov chain that gradually corrupts data with Gaussian noise over $T$ timesteps.",
      "correctAnswerEn": "Denoising Diffusion Probabilistic Models generate high-fidelity images by learning the reverse process of a forward Markov chain that gradually corrupts data with Gaussian noise over $T$ timesteps.",
      "correctAnswerAr": "تولد نماذج الانتشار لإزالة الضوضاء صوراً فائقة الجودة بتعلم العملية العكسية لسلسلة ماركوف الأمامية التي تضيف تدريجياً ضوضاء غاوسية عبر $T$ خطوة زمنية.",
      "correctIndex": 2,
      "explanationEn": "Correct Theoretical Formulation: Denoising Diffusion Probabilistic Models generate high-fidelity images by learning the reverse process of a forward Markov chain that gradually corrupts data with Gaussian noise over $T$ timesteps.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تولد نماذج الانتشار لإزالة الضوضاء صوراً فائقة الجودة بتعلم العملية العكسية لسلسلة ماركوف الأمامية التي تضيف تدريجياً ضوضاء غاوسية عبر $T$ خطوة زمنية.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Denoising Diffusion Probabilistic Models generate high-fidelity images by learning the reverse process of a forward Markov chain that gradually corrupts data with Gaussian noise over $T$ timesteps.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تولد نماذج الانتشار لإزالة الضوضاء صوراً فائقة الجودة بتعلم العملية العكسية لسلسلة ماركوف الأمامية التي تضيف تدريجياً ضوضاء غاوسية عبر $T$ خطوة زمنية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch2_easy_24",
      "titleEn": "[EASY] Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment - Review 24",
      "titleAr": "[مستوى أساسي] التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط - سؤال 24",
      "questionEn": "[AI & Data Science Core Concept] Regarding Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment, which of the following statements is theoretically and mathematically sound? (Variant 24)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 24)",
      "optionsEn": [
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "CLIP aligns visual representations and textual descriptions by training a vision encoder and text encoder jointly using a symmetric contrastive cross-entropy loss over large-scale paired datasets."
      ],
      "optionsAr": [
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "يحاذي نموذج CLIP بين التمثيلات البصرية والنصوص عبر تدريب مشفر الرؤية ومشفر النصوص معاً باستخدام دالة خسارة تباينية متناظرة للإنتروبيا المتقاطعة على أزواج البيانات."
      ],
      "correctAnswer": "CLIP aligns visual representations and textual descriptions by training a vision encoder and text encoder jointly using a symmetric contrastive cross-entropy loss over large-scale paired datasets.",
      "correctAnswerEn": "CLIP aligns visual representations and textual descriptions by training a vision encoder and text encoder jointly using a symmetric contrastive cross-entropy loss over large-scale paired datasets.",
      "correctAnswerAr": "يحاذي نموذج CLIP بين التمثيلات البصرية والنصوص عبر تدريب مشفر الرؤية ومشفر النصوص معاً باستخدام دالة خسارة تباينية متناظرة للإنتروبيا المتقاطعة على أزواج البيانات.",
      "correctIndex": 3,
      "explanationEn": "Correct Theoretical Formulation: CLIP aligns visual representations and textual descriptions by training a vision encoder and text encoder jointly using a symmetric contrastive cross-entropy loss over large-scale paired datasets.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يحاذي نموذج CLIP بين التمثيلات البصرية والنصوص عبر تدريب مشفر الرؤية ومشفر النصوص معاً باستخدام دالة خسارة تباينية متناظرة للإنتروبيا المتقاطعة على أزواج البيانات.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: CLIP aligns visual representations and textual descriptions by training a vision encoder and text encoder jointly using a symmetric contrastive cross-entropy loss over large-scale paired datasets.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يحاذي نموذج CLIP بين التمثيلات البصرية والنصوص عبر تدريب مشفر الرؤية ومشفر النصوص معاً باستخدام دالة خسارة تباينية متناظرة للإنتروبيا المتقاطعة على أزواج البيانات.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch2_easy_25",
      "titleEn": "[EASY] Variational Autoencoders (VAEs) & Reparameterization Trick - Review 25",
      "titleAr": "[مستوى أساسي] المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick) - سؤال 25",
      "questionEn": "[AI & Data Science Core Concept] Regarding Variational Autoencoders (VAEs) & Reparameterization Trick, which of the following statements is theoretically and mathematically sound? (Variant 25)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 25)",
      "optionsEn": [
        "Variational Autoencoders (VAEs) map high-dimensional data into a continuous, smooth probabilistic latent distribution parameterized by mean vector $\\mu$ and variance vector $\\sigma^2$.",
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "ترسم المشفرات التلقائية المتغيرة (VAEs) البيانات عالية الأبعاد في فضاء كامن احتمالي أملس ومستمر مُعرّف بمتجه المتوسطات $\\mu$ ومتجه التباين $\\sigma^2$.",
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "Variational Autoencoders (VAEs) map high-dimensional data into a continuous, smooth probabilistic latent distribution parameterized by mean vector $\\mu$ and variance vector $\\sigma^2$.",
      "correctAnswerEn": "Variational Autoencoders (VAEs) map high-dimensional data into a continuous, smooth probabilistic latent distribution parameterized by mean vector $\\mu$ and variance vector $\\sigma^2$.",
      "correctAnswerAr": "ترسم المشفرات التلقائية المتغيرة (VAEs) البيانات عالية الأبعاد في فضاء كامن احتمالي أملس ومستمر مُعرّف بمتجه المتوسطات $\\mu$ ومتجه التباين $\\sigma^2$.",
      "correctIndex": 0,
      "explanationEn": "Correct Theoretical Formulation: Variational Autoencoders (VAEs) map high-dimensional data into a continuous, smooth probabilistic latent distribution parameterized by mean vector $\\mu$ and variance vector $\\sigma^2$.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: ترسم المشفرات التلقائية المتغيرة (VAEs) البيانات عالية الأبعاد في فضاء كامن احتمالي أملس ومستمر مُعرّف بمتجه المتوسطات $\\mu$ ومتجه التباين $\\sigma^2$.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Variational Autoencoders (VAEs) & Reparameterization Trick.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Variational Autoencoders (VAEs) map high-dimensional data into a continuous, smooth probabilistic latent distribution parameterized by mean vector $\\mu$ and variance vector $\\sigma^2$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: ترسم المشفرات التلقائية المتغيرة (VAEs) البيانات عالية الأبعاد في فضاء كامن احتمالي أملس ومستمر مُعرّف بمتجه المتوسطات $\\mu$ ومتجه التباين $\\sigma^2$.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch2_easy_26",
      "titleEn": "[EASY] Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM) - Review 26",
      "titleAr": "[مستوى أساسي] النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM) - سؤال 26",
      "questionEn": "[AI & Data Science Core Concept] Regarding Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM), which of the following statements is theoretically and mathematically sound? (Variant 26)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 26)",
      "optionsEn": [
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Denoising Diffusion Probabilistic Models generate high-fidelity images by learning the reverse process of a forward Markov chain that gradually corrupts data with Gaussian noise over $T$ timesteps.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "تولد نماذج الانتشار لإزالة الضوضاء صوراً فائقة الجودة بتعلم العملية العكسية لسلسلة ماركوف الأمامية التي تضيف تدريجياً ضوضاء غاوسية عبر $T$ خطوة زمنية.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "Denoising Diffusion Probabilistic Models generate high-fidelity images by learning the reverse process of a forward Markov chain that gradually corrupts data with Gaussian noise over $T$ timesteps.",
      "correctAnswerEn": "Denoising Diffusion Probabilistic Models generate high-fidelity images by learning the reverse process of a forward Markov chain that gradually corrupts data with Gaussian noise over $T$ timesteps.",
      "correctAnswerAr": "تولد نماذج الانتشار لإزالة الضوضاء صوراً فائقة الجودة بتعلم العملية العكسية لسلسلة ماركوف الأمامية التي تضيف تدريجياً ضوضاء غاوسية عبر $T$ خطوة زمنية.",
      "correctIndex": 1,
      "explanationEn": "Correct Theoretical Formulation: Denoising Diffusion Probabilistic Models generate high-fidelity images by learning the reverse process of a forward Markov chain that gradually corrupts data with Gaussian noise over $T$ timesteps.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تولد نماذج الانتشار لإزالة الضوضاء صوراً فائقة الجودة بتعلم العملية العكسية لسلسلة ماركوف الأمامية التي تضيف تدريجياً ضوضاء غاوسية عبر $T$ خطوة زمنية.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Denoising Diffusion Probabilistic Models generate high-fidelity images by learning the reverse process of a forward Markov chain that gradually corrupts data with Gaussian noise over $T$ timesteps.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تولد نماذج الانتشار لإزالة الضوضاء صوراً فائقة الجودة بتعلم العملية العكسية لسلسلة ماركوف الأمامية التي تضيف تدريجياً ضوضاء غاوسية عبر $T$ خطوة زمنية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch2_easy_27",
      "titleEn": "[EASY] Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment - Review 27",
      "titleAr": "[مستوى أساسي] التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط - سؤال 27",
      "questionEn": "[AI & Data Science Core Concept] Regarding Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment, which of the following statements is theoretically and mathematically sound? (Variant 27)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 27)",
      "optionsEn": [
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "CLIP aligns visual representations and textual descriptions by training a vision encoder and text encoder jointly using a symmetric contrastive cross-entropy loss over large-scale paired datasets.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "يحاذي نموذج CLIP بين التمثيلات البصرية والنصوص عبر تدريب مشفر الرؤية ومشفر النصوص معاً باستخدام دالة خسارة تباينية متناظرة للإنتروبيا المتقاطعة على أزواج البيانات.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "CLIP aligns visual representations and textual descriptions by training a vision encoder and text encoder jointly using a symmetric contrastive cross-entropy loss over large-scale paired datasets.",
      "correctAnswerEn": "CLIP aligns visual representations and textual descriptions by training a vision encoder and text encoder jointly using a symmetric contrastive cross-entropy loss over large-scale paired datasets.",
      "correctAnswerAr": "يحاذي نموذج CLIP بين التمثيلات البصرية والنصوص عبر تدريب مشفر الرؤية ومشفر النصوص معاً باستخدام دالة خسارة تباينية متناظرة للإنتروبيا المتقاطعة على أزواج البيانات.",
      "correctIndex": 2,
      "explanationEn": "Correct Theoretical Formulation: CLIP aligns visual representations and textual descriptions by training a vision encoder and text encoder jointly using a symmetric contrastive cross-entropy loss over large-scale paired datasets.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يحاذي نموذج CLIP بين التمثيلات البصرية والنصوص عبر تدريب مشفر الرؤية ومشفر النصوص معاً باستخدام دالة خسارة تباينية متناظرة للإنتروبيا المتقاطعة على أزواج البيانات.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: CLIP aligns visual representations and textual descriptions by training a vision encoder and text encoder jointly using a symmetric contrastive cross-entropy loss over large-scale paired datasets.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يحاذي نموذج CLIP بين التمثيلات البصرية والنصوص عبر تدريب مشفر الرؤية ومشفر النصوص معاً باستخدام دالة خسارة تباينية متناظرة للإنتروبيا المتقاطعة على أزواج البيانات.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch2_easy_28",
      "titleEn": "[EASY] Variational Autoencoders (VAEs) & Reparameterization Trick - Review 28",
      "titleAr": "[مستوى أساسي] المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick) - سؤال 28",
      "questionEn": "[AI & Data Science Core Concept] Regarding Variational Autoencoders (VAEs) & Reparameterization Trick, which of the following statements is theoretically and mathematically sound? (Variant 28)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 28)",
      "optionsEn": [
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "Variational Autoencoders (VAEs) map high-dimensional data into a continuous, smooth probabilistic latent distribution parameterized by mean vector $\\mu$ and variance vector $\\sigma^2$."
      ],
      "optionsAr": [
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "ترسم المشفرات التلقائية المتغيرة (VAEs) البيانات عالية الأبعاد في فضاء كامن احتمالي أملس ومستمر مُعرّف بمتجه المتوسطات $\\mu$ ومتجه التباين $\\sigma^2$."
      ],
      "correctAnswer": "Variational Autoencoders (VAEs) map high-dimensional data into a continuous, smooth probabilistic latent distribution parameterized by mean vector $\\mu$ and variance vector $\\sigma^2$.",
      "correctAnswerEn": "Variational Autoencoders (VAEs) map high-dimensional data into a continuous, smooth probabilistic latent distribution parameterized by mean vector $\\mu$ and variance vector $\\sigma^2$.",
      "correctAnswerAr": "ترسم المشفرات التلقائية المتغيرة (VAEs) البيانات عالية الأبعاد في فضاء كامن احتمالي أملس ومستمر مُعرّف بمتجه المتوسطات $\\mu$ ومتجه التباين $\\sigma^2$.",
      "correctIndex": 3,
      "explanationEn": "Correct Theoretical Formulation: Variational Autoencoders (VAEs) map high-dimensional data into a continuous, smooth probabilistic latent distribution parameterized by mean vector $\\mu$ and variance vector $\\sigma^2$.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: ترسم المشفرات التلقائية المتغيرة (VAEs) البيانات عالية الأبعاد في فضاء كامن احتمالي أملس ومستمر مُعرّف بمتجه المتوسطات $\\mu$ ومتجه التباين $\\sigma^2$.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Variational Autoencoders (VAEs) & Reparameterization Trick.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Variational Autoencoders (VAEs) map high-dimensional data into a continuous, smooth probabilistic latent distribution parameterized by mean vector $\\mu$ and variance vector $\\sigma^2$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: ترسم المشفرات التلقائية المتغيرة (VAEs) البيانات عالية الأبعاد في فضاء كامن احتمالي أملس ومستمر مُعرّف بمتجه المتوسطات $\\mu$ ومتجه التباين $\\sigma^2$.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch2_easy_29",
      "titleEn": "[EASY] Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM) - Review 29",
      "titleAr": "[مستوى أساسي] النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM) - سؤال 29",
      "questionEn": "[AI & Data Science Core Concept] Regarding Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM), which of the following statements is theoretically and mathematically sound? (Variant 29)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 29)",
      "optionsEn": [
        "Denoising Diffusion Probabilistic Models generate high-fidelity images by learning the reverse process of a forward Markov chain that gradually corrupts data with Gaussian noise over $T$ timesteps.",
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "تولد نماذج الانتشار لإزالة الضوضاء صوراً فائقة الجودة بتعلم العملية العكسية لسلسلة ماركوف الأمامية التي تضيف تدريجياً ضوضاء غاوسية عبر $T$ خطوة زمنية.",
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "Denoising Diffusion Probabilistic Models generate high-fidelity images by learning the reverse process of a forward Markov chain that gradually corrupts data with Gaussian noise over $T$ timesteps.",
      "correctAnswerEn": "Denoising Diffusion Probabilistic Models generate high-fidelity images by learning the reverse process of a forward Markov chain that gradually corrupts data with Gaussian noise over $T$ timesteps.",
      "correctAnswerAr": "تولد نماذج الانتشار لإزالة الضوضاء صوراً فائقة الجودة بتعلم العملية العكسية لسلسلة ماركوف الأمامية التي تضيف تدريجياً ضوضاء غاوسية عبر $T$ خطوة زمنية.",
      "correctIndex": 0,
      "explanationEn": "Correct Theoretical Formulation: Denoising Diffusion Probabilistic Models generate high-fidelity images by learning the reverse process of a forward Markov chain that gradually corrupts data with Gaussian noise over $T$ timesteps.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تولد نماذج الانتشار لإزالة الضوضاء صوراً فائقة الجودة بتعلم العملية العكسية لسلسلة ماركوف الأمامية التي تضيف تدريجياً ضوضاء غاوسية عبر $T$ خطوة زمنية.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Denoising Diffusion Probabilistic Models generate high-fidelity images by learning the reverse process of a forward Markov chain that gradually corrupts data with Gaussian noise over $T$ timesteps.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تولد نماذج الانتشار لإزالة الضوضاء صوراً فائقة الجودة بتعلم العملية العكسية لسلسلة ماركوف الأمامية التي تضيف تدريجياً ضوضاء غاوسية عبر $T$ خطوة زمنية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch2_easy_30",
      "titleEn": "[EASY] Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment - Review 30",
      "titleAr": "[مستوى أساسي] التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط - سؤال 30",
      "questionEn": "[AI & Data Science Core Concept] Regarding Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment, which of the following statements is theoretically and mathematically sound? (Variant 30)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 30)",
      "optionsEn": [
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "CLIP aligns visual representations and textual descriptions by training a vision encoder and text encoder jointly using a symmetric contrastive cross-entropy loss over large-scale paired datasets.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "يحاذي نموذج CLIP بين التمثيلات البصرية والنصوص عبر تدريب مشفر الرؤية ومشفر النصوص معاً باستخدام دالة خسارة تباينية متناظرة للإنتروبيا المتقاطعة على أزواج البيانات.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "CLIP aligns visual representations and textual descriptions by training a vision encoder and text encoder jointly using a symmetric contrastive cross-entropy loss over large-scale paired datasets.",
      "correctAnswerEn": "CLIP aligns visual representations and textual descriptions by training a vision encoder and text encoder jointly using a symmetric contrastive cross-entropy loss over large-scale paired datasets.",
      "correctAnswerAr": "يحاذي نموذج CLIP بين التمثيلات البصرية والنصوص عبر تدريب مشفر الرؤية ومشفر النصوص معاً باستخدام دالة خسارة تباينية متناظرة للإنتروبيا المتقاطعة على أزواج البيانات.",
      "correctIndex": 1,
      "explanationEn": "Correct Theoretical Formulation: CLIP aligns visual representations and textual descriptions by training a vision encoder and text encoder jointly using a symmetric contrastive cross-entropy loss over large-scale paired datasets.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يحاذي نموذج CLIP بين التمثيلات البصرية والنصوص عبر تدريب مشفر الرؤية ومشفر النصوص معاً باستخدام دالة خسارة تباينية متناظرة للإنتروبيا المتقاطعة على أزواج البيانات.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: CLIP aligns visual representations and textual descriptions by training a vision encoder and text encoder jointly using a symmetric contrastive cross-entropy loss over large-scale paired datasets.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يحاذي نموذج CLIP بين التمثيلات البصرية والنصوص عبر تدريب مشفر الرؤية ومشفر النصوص معاً باستخدام دالة خسارة تباينية متناظرة للإنتروبيا المتقاطعة على أزواج البيانات.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch2_easy_31",
      "titleEn": "[EASY] Variational Autoencoders (VAEs) & Reparameterization Trick - Review 31",
      "titleAr": "[مستوى أساسي] المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick) - سؤال 31",
      "questionEn": "[AI & Data Science Core Concept] Regarding Variational Autoencoders (VAEs) & Reparameterization Trick, which of the following statements is theoretically and mathematically sound? (Variant 31)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 31)",
      "optionsEn": [
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "Variational Autoencoders (VAEs) map high-dimensional data into a continuous, smooth probabilistic latent distribution parameterized by mean vector $\\mu$ and variance vector $\\sigma^2$.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "ترسم المشفرات التلقائية المتغيرة (VAEs) البيانات عالية الأبعاد في فضاء كامن احتمالي أملس ومستمر مُعرّف بمتجه المتوسطات $\\mu$ ومتجه التباين $\\sigma^2$.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "Variational Autoencoders (VAEs) map high-dimensional data into a continuous, smooth probabilistic latent distribution parameterized by mean vector $\\mu$ and variance vector $\\sigma^2$.",
      "correctAnswerEn": "Variational Autoencoders (VAEs) map high-dimensional data into a continuous, smooth probabilistic latent distribution parameterized by mean vector $\\mu$ and variance vector $\\sigma^2$.",
      "correctAnswerAr": "ترسم المشفرات التلقائية المتغيرة (VAEs) البيانات عالية الأبعاد في فضاء كامن احتمالي أملس ومستمر مُعرّف بمتجه المتوسطات $\\mu$ ومتجه التباين $\\sigma^2$.",
      "correctIndex": 2,
      "explanationEn": "Correct Theoretical Formulation: Variational Autoencoders (VAEs) map high-dimensional data into a continuous, smooth probabilistic latent distribution parameterized by mean vector $\\mu$ and variance vector $\\sigma^2$.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: ترسم المشفرات التلقائية المتغيرة (VAEs) البيانات عالية الأبعاد في فضاء كامن احتمالي أملس ومستمر مُعرّف بمتجه المتوسطات $\\mu$ ومتجه التباين $\\sigma^2$.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Variational Autoencoders (VAEs) & Reparameterization Trick.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Variational Autoencoders (VAEs) map high-dimensional data into a continuous, smooth probabilistic latent distribution parameterized by mean vector $\\mu$ and variance vector $\\sigma^2$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: ترسم المشفرات التلقائية المتغيرة (VAEs) البيانات عالية الأبعاد في فضاء كامن احتمالي أملس ومستمر مُعرّف بمتجه المتوسطات $\\mu$ ومتجه التباين $\\sigma^2$.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch2_easy_32",
      "titleEn": "[EASY] Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM) - Review 32",
      "titleAr": "[مستوى أساسي] النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM) - سؤال 32",
      "questionEn": "[AI & Data Science Core Concept] Regarding Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM), which of the following statements is theoretically and mathematically sound? (Variant 32)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 32)",
      "optionsEn": [
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "Denoising Diffusion Probabilistic Models generate high-fidelity images by learning the reverse process of a forward Markov chain that gradually corrupts data with Gaussian noise over $T$ timesteps."
      ],
      "optionsAr": [
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "تولد نماذج الانتشار لإزالة الضوضاء صوراً فائقة الجودة بتعلم العملية العكسية لسلسلة ماركوف الأمامية التي تضيف تدريجياً ضوضاء غاوسية عبر $T$ خطوة زمنية."
      ],
      "correctAnswer": "Denoising Diffusion Probabilistic Models generate high-fidelity images by learning the reverse process of a forward Markov chain that gradually corrupts data with Gaussian noise over $T$ timesteps.",
      "correctAnswerEn": "Denoising Diffusion Probabilistic Models generate high-fidelity images by learning the reverse process of a forward Markov chain that gradually corrupts data with Gaussian noise over $T$ timesteps.",
      "correctAnswerAr": "تولد نماذج الانتشار لإزالة الضوضاء صوراً فائقة الجودة بتعلم العملية العكسية لسلسلة ماركوف الأمامية التي تضيف تدريجياً ضوضاء غاوسية عبر $T$ خطوة زمنية.",
      "correctIndex": 3,
      "explanationEn": "Correct Theoretical Formulation: Denoising Diffusion Probabilistic Models generate high-fidelity images by learning the reverse process of a forward Markov chain that gradually corrupts data with Gaussian noise over $T$ timesteps.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تولد نماذج الانتشار لإزالة الضوضاء صوراً فائقة الجودة بتعلم العملية العكسية لسلسلة ماركوف الأمامية التي تضيف تدريجياً ضوضاء غاوسية عبر $T$ خطوة زمنية.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Denoising Diffusion Probabilistic Models generate high-fidelity images by learning the reverse process of a forward Markov chain that gradually corrupts data with Gaussian noise over $T$ timesteps.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تولد نماذج الانتشار لإزالة الضوضاء صوراً فائقة الجودة بتعلم العملية العكسية لسلسلة ماركوف الأمامية التي تضيف تدريجياً ضوضاء غاوسية عبر $T$ خطوة زمنية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch2_easy_33",
      "titleEn": "[EASY] Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment - Review 33",
      "titleAr": "[مستوى أساسي] التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط - سؤال 33",
      "questionEn": "[AI & Data Science Core Concept] Regarding Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment, which of the following statements is theoretically and mathematically sound? (Variant 33)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 33)",
      "optionsEn": [
        "CLIP aligns visual representations and textual descriptions by training a vision encoder and text encoder jointly using a symmetric contrastive cross-entropy loss over large-scale paired datasets.",
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "يحاذي نموذج CLIP بين التمثيلات البصرية والنصوص عبر تدريب مشفر الرؤية ومشفر النصوص معاً باستخدام دالة خسارة تباينية متناظرة للإنتروبيا المتقاطعة على أزواج البيانات.",
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "CLIP aligns visual representations and textual descriptions by training a vision encoder and text encoder jointly using a symmetric contrastive cross-entropy loss over large-scale paired datasets.",
      "correctAnswerEn": "CLIP aligns visual representations and textual descriptions by training a vision encoder and text encoder jointly using a symmetric contrastive cross-entropy loss over large-scale paired datasets.",
      "correctAnswerAr": "يحاذي نموذج CLIP بين التمثيلات البصرية والنصوص عبر تدريب مشفر الرؤية ومشفر النصوص معاً باستخدام دالة خسارة تباينية متناظرة للإنتروبيا المتقاطعة على أزواج البيانات.",
      "correctIndex": 0,
      "explanationEn": "Correct Theoretical Formulation: CLIP aligns visual representations and textual descriptions by training a vision encoder and text encoder jointly using a symmetric contrastive cross-entropy loss over large-scale paired datasets.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يحاذي نموذج CLIP بين التمثيلات البصرية والنصوص عبر تدريب مشفر الرؤية ومشفر النصوص معاً باستخدام دالة خسارة تباينية متناظرة للإنتروبيا المتقاطعة على أزواج البيانات.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: CLIP aligns visual representations and textual descriptions by training a vision encoder and text encoder jointly using a symmetric contrastive cross-entropy loss over large-scale paired datasets.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يحاذي نموذج CLIP بين التمثيلات البصرية والنصوص عبر تدريب مشفر الرؤية ومشفر النصوص معاً باستخدام دالة خسارة تباينية متناظرة للإنتروبيا المتقاطعة على أزواج البيانات.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch2_easy_34",
      "titleEn": "[EASY] Variational Autoencoders (VAEs) & Reparameterization Trick - Review 34",
      "titleAr": "[مستوى أساسي] المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick) - سؤال 34",
      "questionEn": "[AI & Data Science Core Concept] Regarding Variational Autoencoders (VAEs) & Reparameterization Trick, which of the following statements is theoretically and mathematically sound? (Variant 34)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 34)",
      "optionsEn": [
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "Variational Autoencoders (VAEs) map high-dimensional data into a continuous, smooth probabilistic latent distribution parameterized by mean vector $\\mu$ and variance vector $\\sigma^2$.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "ترسم المشفرات التلقائية المتغيرة (VAEs) البيانات عالية الأبعاد في فضاء كامن احتمالي أملس ومستمر مُعرّف بمتجه المتوسطات $\\mu$ ومتجه التباين $\\sigma^2$.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "Variational Autoencoders (VAEs) map high-dimensional data into a continuous, smooth probabilistic latent distribution parameterized by mean vector $\\mu$ and variance vector $\\sigma^2$.",
      "correctAnswerEn": "Variational Autoencoders (VAEs) map high-dimensional data into a continuous, smooth probabilistic latent distribution parameterized by mean vector $\\mu$ and variance vector $\\sigma^2$.",
      "correctAnswerAr": "ترسم المشفرات التلقائية المتغيرة (VAEs) البيانات عالية الأبعاد في فضاء كامن احتمالي أملس ومستمر مُعرّف بمتجه المتوسطات $\\mu$ ومتجه التباين $\\sigma^2$.",
      "correctIndex": 1,
      "explanationEn": "Correct Theoretical Formulation: Variational Autoencoders (VAEs) map high-dimensional data into a continuous, smooth probabilistic latent distribution parameterized by mean vector $\\mu$ and variance vector $\\sigma^2$.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: ترسم المشفرات التلقائية المتغيرة (VAEs) البيانات عالية الأبعاد في فضاء كامن احتمالي أملس ومستمر مُعرّف بمتجه المتوسطات $\\mu$ ومتجه التباين $\\sigma^2$.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Variational Autoencoders (VAEs) & Reparameterization Trick.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Variational Autoencoders (VAEs) map high-dimensional data into a continuous, smooth probabilistic latent distribution parameterized by mean vector $\\mu$ and variance vector $\\sigma^2$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: ترسم المشفرات التلقائية المتغيرة (VAEs) البيانات عالية الأبعاد في فضاء كامن احتمالي أملس ومستمر مُعرّف بمتجه المتوسطات $\\mu$ ومتجه التباين $\\sigma^2$.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch2_easy_35",
      "titleEn": "[EASY] Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM) - Review 35",
      "titleAr": "[مستوى أساسي] النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM) - سؤال 35",
      "questionEn": "[AI & Data Science Core Concept] Regarding Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM), which of the following statements is theoretically and mathematically sound? (Variant 35)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 35)",
      "optionsEn": [
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Denoising Diffusion Probabilistic Models generate high-fidelity images by learning the reverse process of a forward Markov chain that gradually corrupts data with Gaussian noise over $T$ timesteps.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تولد نماذج الانتشار لإزالة الضوضاء صوراً فائقة الجودة بتعلم العملية العكسية لسلسلة ماركوف الأمامية التي تضيف تدريجياً ضوضاء غاوسية عبر $T$ خطوة زمنية.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "Denoising Diffusion Probabilistic Models generate high-fidelity images by learning the reverse process of a forward Markov chain that gradually corrupts data with Gaussian noise over $T$ timesteps.",
      "correctAnswerEn": "Denoising Diffusion Probabilistic Models generate high-fidelity images by learning the reverse process of a forward Markov chain that gradually corrupts data with Gaussian noise over $T$ timesteps.",
      "correctAnswerAr": "تولد نماذج الانتشار لإزالة الضوضاء صوراً فائقة الجودة بتعلم العملية العكسية لسلسلة ماركوف الأمامية التي تضيف تدريجياً ضوضاء غاوسية عبر $T$ خطوة زمنية.",
      "correctIndex": 2,
      "explanationEn": "Correct Theoretical Formulation: Denoising Diffusion Probabilistic Models generate high-fidelity images by learning the reverse process of a forward Markov chain that gradually corrupts data with Gaussian noise over $T$ timesteps.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تولد نماذج الانتشار لإزالة الضوضاء صوراً فائقة الجودة بتعلم العملية العكسية لسلسلة ماركوف الأمامية التي تضيف تدريجياً ضوضاء غاوسية عبر $T$ خطوة زمنية.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Denoising Diffusion Probabilistic Models generate high-fidelity images by learning the reverse process of a forward Markov chain that gradually corrupts data with Gaussian noise over $T$ timesteps.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تولد نماذج الانتشار لإزالة الضوضاء صوراً فائقة الجودة بتعلم العملية العكسية لسلسلة ماركوف الأمامية التي تضيف تدريجياً ضوضاء غاوسية عبر $T$ خطوة زمنية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch2_easy_36",
      "titleEn": "[EASY] Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment - Review 36",
      "titleAr": "[مستوى أساسي] التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط - سؤال 36",
      "questionEn": "[AI & Data Science Core Concept] Regarding Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment, which of the following statements is theoretically and mathematically sound? (Variant 36)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 36)",
      "optionsEn": [
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "CLIP aligns visual representations and textual descriptions by training a vision encoder and text encoder jointly using a symmetric contrastive cross-entropy loss over large-scale paired datasets."
      ],
      "optionsAr": [
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "يحاذي نموذج CLIP بين التمثيلات البصرية والنصوص عبر تدريب مشفر الرؤية ومشفر النصوص معاً باستخدام دالة خسارة تباينية متناظرة للإنتروبيا المتقاطعة على أزواج البيانات."
      ],
      "correctAnswer": "CLIP aligns visual representations and textual descriptions by training a vision encoder and text encoder jointly using a symmetric contrastive cross-entropy loss over large-scale paired datasets.",
      "correctAnswerEn": "CLIP aligns visual representations and textual descriptions by training a vision encoder and text encoder jointly using a symmetric contrastive cross-entropy loss over large-scale paired datasets.",
      "correctAnswerAr": "يحاذي نموذج CLIP بين التمثيلات البصرية والنصوص عبر تدريب مشفر الرؤية ومشفر النصوص معاً باستخدام دالة خسارة تباينية متناظرة للإنتروبيا المتقاطعة على أزواج البيانات.",
      "correctIndex": 3,
      "explanationEn": "Correct Theoretical Formulation: CLIP aligns visual representations and textual descriptions by training a vision encoder and text encoder jointly using a symmetric contrastive cross-entropy loss over large-scale paired datasets.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يحاذي نموذج CLIP بين التمثيلات البصرية والنصوص عبر تدريب مشفر الرؤية ومشفر النصوص معاً باستخدام دالة خسارة تباينية متناظرة للإنتروبيا المتقاطعة على أزواج البيانات.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: CLIP aligns visual representations and textual descriptions by training a vision encoder and text encoder jointly using a symmetric contrastive cross-entropy loss over large-scale paired datasets.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يحاذي نموذج CLIP بين التمثيلات البصرية والنصوص عبر تدريب مشفر الرؤية ومشفر النصوص معاً باستخدام دالة خسارة تباينية متناظرة للإنتروبيا المتقاطعة على أزواج البيانات.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch2_easy_37",
      "titleEn": "[EASY] Variational Autoencoders (VAEs) & Reparameterization Trick - Review 37",
      "titleAr": "[مستوى أساسي] المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick) - سؤال 37",
      "questionEn": "[AI & Data Science Core Concept] Regarding Variational Autoencoders (VAEs) & Reparameterization Trick, which of the following statements is theoretically and mathematically sound? (Variant 37)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 37)",
      "optionsEn": [
        "Variational Autoencoders (VAEs) map high-dimensional data into a continuous, smooth probabilistic latent distribution parameterized by mean vector $\\mu$ and variance vector $\\sigma^2$.",
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "ترسم المشفرات التلقائية المتغيرة (VAEs) البيانات عالية الأبعاد في فضاء كامن احتمالي أملس ومستمر مُعرّف بمتجه المتوسطات $\\mu$ ومتجه التباين $\\sigma^2$.",
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "Variational Autoencoders (VAEs) map high-dimensional data into a continuous, smooth probabilistic latent distribution parameterized by mean vector $\\mu$ and variance vector $\\sigma^2$.",
      "correctAnswerEn": "Variational Autoencoders (VAEs) map high-dimensional data into a continuous, smooth probabilistic latent distribution parameterized by mean vector $\\mu$ and variance vector $\\sigma^2$.",
      "correctAnswerAr": "ترسم المشفرات التلقائية المتغيرة (VAEs) البيانات عالية الأبعاد في فضاء كامن احتمالي أملس ومستمر مُعرّف بمتجه المتوسطات $\\mu$ ومتجه التباين $\\sigma^2$.",
      "correctIndex": 0,
      "explanationEn": "Correct Theoretical Formulation: Variational Autoencoders (VAEs) map high-dimensional data into a continuous, smooth probabilistic latent distribution parameterized by mean vector $\\mu$ and variance vector $\\sigma^2$.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: ترسم المشفرات التلقائية المتغيرة (VAEs) البيانات عالية الأبعاد في فضاء كامن احتمالي أملس ومستمر مُعرّف بمتجه المتوسطات $\\mu$ ومتجه التباين $\\sigma^2$.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Variational Autoencoders (VAEs) & Reparameterization Trick.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Variational Autoencoders (VAEs) map high-dimensional data into a continuous, smooth probabilistic latent distribution parameterized by mean vector $\\mu$ and variance vector $\\sigma^2$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: ترسم المشفرات التلقائية المتغيرة (VAEs) البيانات عالية الأبعاد في فضاء كامن احتمالي أملس ومستمر مُعرّف بمتجه المتوسطات $\\mu$ ومتجه التباين $\\sigma^2$.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch2_easy_38",
      "titleEn": "[EASY] Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM) - Review 38",
      "titleAr": "[مستوى أساسي] النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM) - سؤال 38",
      "questionEn": "[AI & Data Science Core Concept] Regarding Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM), which of the following statements is theoretically and mathematically sound? (Variant 38)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 38)",
      "optionsEn": [
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "Denoising Diffusion Probabilistic Models generate high-fidelity images by learning the reverse process of a forward Markov chain that gradually corrupts data with Gaussian noise over $T$ timesteps.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تولد نماذج الانتشار لإزالة الضوضاء صوراً فائقة الجودة بتعلم العملية العكسية لسلسلة ماركوف الأمامية التي تضيف تدريجياً ضوضاء غاوسية عبر $T$ خطوة زمنية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "Denoising Diffusion Probabilistic Models generate high-fidelity images by learning the reverse process of a forward Markov chain that gradually corrupts data with Gaussian noise over $T$ timesteps.",
      "correctAnswerEn": "Denoising Diffusion Probabilistic Models generate high-fidelity images by learning the reverse process of a forward Markov chain that gradually corrupts data with Gaussian noise over $T$ timesteps.",
      "correctAnswerAr": "تولد نماذج الانتشار لإزالة الضوضاء صوراً فائقة الجودة بتعلم العملية العكسية لسلسلة ماركوف الأمامية التي تضيف تدريجياً ضوضاء غاوسية عبر $T$ خطوة زمنية.",
      "correctIndex": 1,
      "explanationEn": "Correct Theoretical Formulation: Denoising Diffusion Probabilistic Models generate high-fidelity images by learning the reverse process of a forward Markov chain that gradually corrupts data with Gaussian noise over $T$ timesteps.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تولد نماذج الانتشار لإزالة الضوضاء صوراً فائقة الجودة بتعلم العملية العكسية لسلسلة ماركوف الأمامية التي تضيف تدريجياً ضوضاء غاوسية عبر $T$ خطوة زمنية.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Denoising Diffusion Probabilistic Models generate high-fidelity images by learning the reverse process of a forward Markov chain that gradually corrupts data with Gaussian noise over $T$ timesteps.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تولد نماذج الانتشار لإزالة الضوضاء صوراً فائقة الجودة بتعلم العملية العكسية لسلسلة ماركوف الأمامية التي تضيف تدريجياً ضوضاء غاوسية عبر $T$ خطوة زمنية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch2_easy_39",
      "titleEn": "[EASY] Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment - Review 39",
      "titleAr": "[مستوى أساسي] التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط - سؤال 39",
      "questionEn": "[AI & Data Science Core Concept] Regarding Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment, which of the following statements is theoretically and mathematically sound? (Variant 39)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 39)",
      "optionsEn": [
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "CLIP aligns visual representations and textual descriptions by training a vision encoder and text encoder jointly using a symmetric contrastive cross-entropy loss over large-scale paired datasets.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "يحاذي نموذج CLIP بين التمثيلات البصرية والنصوص عبر تدريب مشفر الرؤية ومشفر النصوص معاً باستخدام دالة خسارة تباينية متناظرة للإنتروبيا المتقاطعة على أزواج البيانات.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "CLIP aligns visual representations and textual descriptions by training a vision encoder and text encoder jointly using a symmetric contrastive cross-entropy loss over large-scale paired datasets.",
      "correctAnswerEn": "CLIP aligns visual representations and textual descriptions by training a vision encoder and text encoder jointly using a symmetric contrastive cross-entropy loss over large-scale paired datasets.",
      "correctAnswerAr": "يحاذي نموذج CLIP بين التمثيلات البصرية والنصوص عبر تدريب مشفر الرؤية ومشفر النصوص معاً باستخدام دالة خسارة تباينية متناظرة للإنتروبيا المتقاطعة على أزواج البيانات.",
      "correctIndex": 2,
      "explanationEn": "Correct Theoretical Formulation: CLIP aligns visual representations and textual descriptions by training a vision encoder and text encoder jointly using a symmetric contrastive cross-entropy loss over large-scale paired datasets.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يحاذي نموذج CLIP بين التمثيلات البصرية والنصوص عبر تدريب مشفر الرؤية ومشفر النصوص معاً باستخدام دالة خسارة تباينية متناظرة للإنتروبيا المتقاطعة على أزواج البيانات.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: CLIP aligns visual representations and textual descriptions by training a vision encoder and text encoder jointly using a symmetric contrastive cross-entropy loss over large-scale paired datasets.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يحاذي نموذج CLIP بين التمثيلات البصرية والنصوص عبر تدريب مشفر الرؤية ومشفر النصوص معاً باستخدام دالة خسارة تباينية متناظرة للإنتروبيا المتقاطعة على أزواج البيانات.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch2_easy_40",
      "titleEn": "[EASY] Variational Autoencoders (VAEs) & Reparameterization Trick - Review 40",
      "titleAr": "[مستوى أساسي] المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick) - سؤال 40",
      "questionEn": "[AI & Data Science Core Concept] Regarding Variational Autoencoders (VAEs) & Reparameterization Trick, which of the following statements is theoretically and mathematically sound? (Variant 40)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 40)",
      "optionsEn": [
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Variational Autoencoders (VAEs) map high-dimensional data into a continuous, smooth probabilistic latent distribution parameterized by mean vector $\\mu$ and variance vector $\\sigma^2$."
      ],
      "optionsAr": [
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "ترسم المشفرات التلقائية المتغيرة (VAEs) البيانات عالية الأبعاد في فضاء كامن احتمالي أملس ومستمر مُعرّف بمتجه المتوسطات $\\mu$ ومتجه التباين $\\sigma^2$."
      ],
      "correctAnswer": "Variational Autoencoders (VAEs) map high-dimensional data into a continuous, smooth probabilistic latent distribution parameterized by mean vector $\\mu$ and variance vector $\\sigma^2$.",
      "correctAnswerEn": "Variational Autoencoders (VAEs) map high-dimensional data into a continuous, smooth probabilistic latent distribution parameterized by mean vector $\\mu$ and variance vector $\\sigma^2$.",
      "correctAnswerAr": "ترسم المشفرات التلقائية المتغيرة (VAEs) البيانات عالية الأبعاد في فضاء كامن احتمالي أملس ومستمر مُعرّف بمتجه المتوسطات $\\mu$ ومتجه التباين $\\sigma^2$.",
      "correctIndex": 3,
      "explanationEn": "Correct Theoretical Formulation: Variational Autoencoders (VAEs) map high-dimensional data into a continuous, smooth probabilistic latent distribution parameterized by mean vector $\\mu$ and variance vector $\\sigma^2$.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: ترسم المشفرات التلقائية المتغيرة (VAEs) البيانات عالية الأبعاد في فضاء كامن احتمالي أملس ومستمر مُعرّف بمتجه المتوسطات $\\mu$ ومتجه التباين $\\sigma^2$.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Variational Autoencoders (VAEs) & Reparameterization Trick.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Variational Autoencoders (VAEs) map high-dimensional data into a continuous, smooth probabilistic latent distribution parameterized by mean vector $\\mu$ and variance vector $\\sigma^2$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: ترسم المشفرات التلقائية المتغيرة (VAEs) البيانات عالية الأبعاد في فضاء كامن احتمالي أملس ومستمر مُعرّف بمتجه المتوسطات $\\mu$ ومتجه التباين $\\sigma^2$.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch2_easy_41",
      "titleEn": "[EASY] Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM) - Review 41",
      "titleAr": "[مستوى أساسي] النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM) - سؤال 41",
      "questionEn": "[AI & Data Science Core Concept] Regarding Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM), which of the following statements is theoretically and mathematically sound? (Variant 41)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 41)",
      "optionsEn": [
        "Denoising Diffusion Probabilistic Models generate high-fidelity images by learning the reverse process of a forward Markov chain that gradually corrupts data with Gaussian noise over $T$ timesteps.",
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "تولد نماذج الانتشار لإزالة الضوضاء صوراً فائقة الجودة بتعلم العملية العكسية لسلسلة ماركوف الأمامية التي تضيف تدريجياً ضوضاء غاوسية عبر $T$ خطوة زمنية.",
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "Denoising Diffusion Probabilistic Models generate high-fidelity images by learning the reverse process of a forward Markov chain that gradually corrupts data with Gaussian noise over $T$ timesteps.",
      "correctAnswerEn": "Denoising Diffusion Probabilistic Models generate high-fidelity images by learning the reverse process of a forward Markov chain that gradually corrupts data with Gaussian noise over $T$ timesteps.",
      "correctAnswerAr": "تولد نماذج الانتشار لإزالة الضوضاء صوراً فائقة الجودة بتعلم العملية العكسية لسلسلة ماركوف الأمامية التي تضيف تدريجياً ضوضاء غاوسية عبر $T$ خطوة زمنية.",
      "correctIndex": 0,
      "explanationEn": "Correct Theoretical Formulation: Denoising Diffusion Probabilistic Models generate high-fidelity images by learning the reverse process of a forward Markov chain that gradually corrupts data with Gaussian noise over $T$ timesteps.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تولد نماذج الانتشار لإزالة الضوضاء صوراً فائقة الجودة بتعلم العملية العكسية لسلسلة ماركوف الأمامية التي تضيف تدريجياً ضوضاء غاوسية عبر $T$ خطوة زمنية.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Denoising Diffusion Probabilistic Models generate high-fidelity images by learning the reverse process of a forward Markov chain that gradually corrupts data with Gaussian noise over $T$ timesteps.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تولد نماذج الانتشار لإزالة الضوضاء صوراً فائقة الجودة بتعلم العملية العكسية لسلسلة ماركوف الأمامية التي تضيف تدريجياً ضوضاء غاوسية عبر $T$ خطوة زمنية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch2_easy_42",
      "titleEn": "[EASY] Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment - Review 42",
      "titleAr": "[مستوى أساسي] التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط - سؤال 42",
      "questionEn": "[AI & Data Science Core Concept] Regarding Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment, which of the following statements is theoretically and mathematically sound? (Variant 42)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 42)",
      "optionsEn": [
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "CLIP aligns visual representations and textual descriptions by training a vision encoder and text encoder jointly using a symmetric contrastive cross-entropy loss over large-scale paired datasets.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "يحاذي نموذج CLIP بين التمثيلات البصرية والنصوص عبر تدريب مشفر الرؤية ومشفر النصوص معاً باستخدام دالة خسارة تباينية متناظرة للإنتروبيا المتقاطعة على أزواج البيانات.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "CLIP aligns visual representations and textual descriptions by training a vision encoder and text encoder jointly using a symmetric contrastive cross-entropy loss over large-scale paired datasets.",
      "correctAnswerEn": "CLIP aligns visual representations and textual descriptions by training a vision encoder and text encoder jointly using a symmetric contrastive cross-entropy loss over large-scale paired datasets.",
      "correctAnswerAr": "يحاذي نموذج CLIP بين التمثيلات البصرية والنصوص عبر تدريب مشفر الرؤية ومشفر النصوص معاً باستخدام دالة خسارة تباينية متناظرة للإنتروبيا المتقاطعة على أزواج البيانات.",
      "correctIndex": 1,
      "explanationEn": "Correct Theoretical Formulation: CLIP aligns visual representations and textual descriptions by training a vision encoder and text encoder jointly using a symmetric contrastive cross-entropy loss over large-scale paired datasets.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يحاذي نموذج CLIP بين التمثيلات البصرية والنصوص عبر تدريب مشفر الرؤية ومشفر النصوص معاً باستخدام دالة خسارة تباينية متناظرة للإنتروبيا المتقاطعة على أزواج البيانات.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: CLIP aligns visual representations and textual descriptions by training a vision encoder and text encoder jointly using a symmetric contrastive cross-entropy loss over large-scale paired datasets.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يحاذي نموذج CLIP بين التمثيلات البصرية والنصوص عبر تدريب مشفر الرؤية ومشفر النصوص معاً باستخدام دالة خسارة تباينية متناظرة للإنتروبيا المتقاطعة على أزواج البيانات.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch2_easy_43",
      "titleEn": "[EASY] Variational Autoencoders (VAEs) & Reparameterization Trick - Review 43",
      "titleAr": "[مستوى أساسي] المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick) - سؤال 43",
      "questionEn": "[AI & Data Science Core Concept] Regarding Variational Autoencoders (VAEs) & Reparameterization Trick, which of the following statements is theoretically and mathematically sound? (Variant 43)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 43)",
      "optionsEn": [
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Variational Autoencoders (VAEs) map high-dimensional data into a continuous, smooth probabilistic latent distribution parameterized by mean vector $\\mu$ and variance vector $\\sigma^2$.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "ترسم المشفرات التلقائية المتغيرة (VAEs) البيانات عالية الأبعاد في فضاء كامن احتمالي أملس ومستمر مُعرّف بمتجه المتوسطات $\\mu$ ومتجه التباين $\\sigma^2$.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "Variational Autoencoders (VAEs) map high-dimensional data into a continuous, smooth probabilistic latent distribution parameterized by mean vector $\\mu$ and variance vector $\\sigma^2$.",
      "correctAnswerEn": "Variational Autoencoders (VAEs) map high-dimensional data into a continuous, smooth probabilistic latent distribution parameterized by mean vector $\\mu$ and variance vector $\\sigma^2$.",
      "correctAnswerAr": "ترسم المشفرات التلقائية المتغيرة (VAEs) البيانات عالية الأبعاد في فضاء كامن احتمالي أملس ومستمر مُعرّف بمتجه المتوسطات $\\mu$ ومتجه التباين $\\sigma^2$.",
      "correctIndex": 2,
      "explanationEn": "Correct Theoretical Formulation: Variational Autoencoders (VAEs) map high-dimensional data into a continuous, smooth probabilistic latent distribution parameterized by mean vector $\\mu$ and variance vector $\\sigma^2$.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: ترسم المشفرات التلقائية المتغيرة (VAEs) البيانات عالية الأبعاد في فضاء كامن احتمالي أملس ومستمر مُعرّف بمتجه المتوسطات $\\mu$ ومتجه التباين $\\sigma^2$.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Variational Autoencoders (VAEs) & Reparameterization Trick.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Variational Autoencoders (VAEs) map high-dimensional data into a continuous, smooth probabilistic latent distribution parameterized by mean vector $\\mu$ and variance vector $\\sigma^2$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: ترسم المشفرات التلقائية المتغيرة (VAEs) البيانات عالية الأبعاد في فضاء كامن احتمالي أملس ومستمر مُعرّف بمتجه المتوسطات $\\mu$ ومتجه التباين $\\sigma^2$.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch2_easy_44",
      "titleEn": "[EASY] Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM) - Review 44",
      "titleAr": "[مستوى أساسي] النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM) - سؤال 44",
      "questionEn": "[AI & Data Science Core Concept] Regarding Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM), which of the following statements is theoretically and mathematically sound? (Variant 44)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 44)",
      "optionsEn": [
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "Denoising Diffusion Probabilistic Models generate high-fidelity images by learning the reverse process of a forward Markov chain that gradually corrupts data with Gaussian noise over $T$ timesteps."
      ],
      "optionsAr": [
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تولد نماذج الانتشار لإزالة الضوضاء صوراً فائقة الجودة بتعلم العملية العكسية لسلسلة ماركوف الأمامية التي تضيف تدريجياً ضوضاء غاوسية عبر $T$ خطوة زمنية."
      ],
      "correctAnswer": "Denoising Diffusion Probabilistic Models generate high-fidelity images by learning the reverse process of a forward Markov chain that gradually corrupts data with Gaussian noise over $T$ timesteps.",
      "correctAnswerEn": "Denoising Diffusion Probabilistic Models generate high-fidelity images by learning the reverse process of a forward Markov chain that gradually corrupts data with Gaussian noise over $T$ timesteps.",
      "correctAnswerAr": "تولد نماذج الانتشار لإزالة الضوضاء صوراً فائقة الجودة بتعلم العملية العكسية لسلسلة ماركوف الأمامية التي تضيف تدريجياً ضوضاء غاوسية عبر $T$ خطوة زمنية.",
      "correctIndex": 3,
      "explanationEn": "Correct Theoretical Formulation: Denoising Diffusion Probabilistic Models generate high-fidelity images by learning the reverse process of a forward Markov chain that gradually corrupts data with Gaussian noise over $T$ timesteps.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تولد نماذج الانتشار لإزالة الضوضاء صوراً فائقة الجودة بتعلم العملية العكسية لسلسلة ماركوف الأمامية التي تضيف تدريجياً ضوضاء غاوسية عبر $T$ خطوة زمنية.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Denoising Diffusion Probabilistic Models generate high-fidelity images by learning the reverse process of a forward Markov chain that gradually corrupts data with Gaussian noise over $T$ timesteps.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تولد نماذج الانتشار لإزالة الضوضاء صوراً فائقة الجودة بتعلم العملية العكسية لسلسلة ماركوف الأمامية التي تضيف تدريجياً ضوضاء غاوسية عبر $T$ خطوة زمنية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch2_easy_45",
      "titleEn": "[EASY] Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment - Review 45",
      "titleAr": "[مستوى أساسي] التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط - سؤال 45",
      "questionEn": "[AI & Data Science Core Concept] Regarding Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment, which of the following statements is theoretically and mathematically sound? (Variant 45)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 45)",
      "optionsEn": [
        "CLIP aligns visual representations and textual descriptions by training a vision encoder and text encoder jointly using a symmetric contrastive cross-entropy loss over large-scale paired datasets.",
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "يحاذي نموذج CLIP بين التمثيلات البصرية والنصوص عبر تدريب مشفر الرؤية ومشفر النصوص معاً باستخدام دالة خسارة تباينية متناظرة للإنتروبيا المتقاطعة على أزواج البيانات.",
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "CLIP aligns visual representations and textual descriptions by training a vision encoder and text encoder jointly using a symmetric contrastive cross-entropy loss over large-scale paired datasets.",
      "correctAnswerEn": "CLIP aligns visual representations and textual descriptions by training a vision encoder and text encoder jointly using a symmetric contrastive cross-entropy loss over large-scale paired datasets.",
      "correctAnswerAr": "يحاذي نموذج CLIP بين التمثيلات البصرية والنصوص عبر تدريب مشفر الرؤية ومشفر النصوص معاً باستخدام دالة خسارة تباينية متناظرة للإنتروبيا المتقاطعة على أزواج البيانات.",
      "correctIndex": 0,
      "explanationEn": "Correct Theoretical Formulation: CLIP aligns visual representations and textual descriptions by training a vision encoder and text encoder jointly using a symmetric contrastive cross-entropy loss over large-scale paired datasets.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يحاذي نموذج CLIP بين التمثيلات البصرية والنصوص عبر تدريب مشفر الرؤية ومشفر النصوص معاً باستخدام دالة خسارة تباينية متناظرة للإنتروبيا المتقاطعة على أزواج البيانات.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: CLIP aligns visual representations and textual descriptions by training a vision encoder and text encoder jointly using a symmetric contrastive cross-entropy loss over large-scale paired datasets.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يحاذي نموذج CLIP بين التمثيلات البصرية والنصوص عبر تدريب مشفر الرؤية ومشفر النصوص معاً باستخدام دالة خسارة تباينية متناظرة للإنتروبيا المتقاطعة على أزواج البيانات.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch2_easy_46",
      "titleEn": "[EASY] Variational Autoencoders (VAEs) & Reparameterization Trick - Review 46",
      "titleAr": "[مستوى أساسي] المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick) - سؤال 46",
      "questionEn": "[AI & Data Science Core Concept] Regarding Variational Autoencoders (VAEs) & Reparameterization Trick, which of the following statements is theoretically and mathematically sound? (Variant 46)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 46)",
      "optionsEn": [
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Variational Autoencoders (VAEs) map high-dimensional data into a continuous, smooth probabilistic latent distribution parameterized by mean vector $\\mu$ and variance vector $\\sigma^2$.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "ترسم المشفرات التلقائية المتغيرة (VAEs) البيانات عالية الأبعاد في فضاء كامن احتمالي أملس ومستمر مُعرّف بمتجه المتوسطات $\\mu$ ومتجه التباين $\\sigma^2$.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "Variational Autoencoders (VAEs) map high-dimensional data into a continuous, smooth probabilistic latent distribution parameterized by mean vector $\\mu$ and variance vector $\\sigma^2$.",
      "correctAnswerEn": "Variational Autoencoders (VAEs) map high-dimensional data into a continuous, smooth probabilistic latent distribution parameterized by mean vector $\\mu$ and variance vector $\\sigma^2$.",
      "correctAnswerAr": "ترسم المشفرات التلقائية المتغيرة (VAEs) البيانات عالية الأبعاد في فضاء كامن احتمالي أملس ومستمر مُعرّف بمتجه المتوسطات $\\mu$ ومتجه التباين $\\sigma^2$.",
      "correctIndex": 1,
      "explanationEn": "Correct Theoretical Formulation: Variational Autoencoders (VAEs) map high-dimensional data into a continuous, smooth probabilistic latent distribution parameterized by mean vector $\\mu$ and variance vector $\\sigma^2$.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: ترسم المشفرات التلقائية المتغيرة (VAEs) البيانات عالية الأبعاد في فضاء كامن احتمالي أملس ومستمر مُعرّف بمتجه المتوسطات $\\mu$ ومتجه التباين $\\sigma^2$.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Variational Autoencoders (VAEs) & Reparameterization Trick.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Variational Autoencoders (VAEs) map high-dimensional data into a continuous, smooth probabilistic latent distribution parameterized by mean vector $\\mu$ and variance vector $\\sigma^2$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: ترسم المشفرات التلقائية المتغيرة (VAEs) البيانات عالية الأبعاد في فضاء كامن احتمالي أملس ومستمر مُعرّف بمتجه المتوسطات $\\mu$ ومتجه التباين $\\sigma^2$.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch2_easy_47",
      "titleEn": "[EASY] Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM) - Review 47",
      "titleAr": "[مستوى أساسي] النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM) - سؤال 47",
      "questionEn": "[AI & Data Science Core Concept] Regarding Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM), which of the following statements is theoretically and mathematically sound? (Variant 47)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 47)",
      "optionsEn": [
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Denoising Diffusion Probabilistic Models generate high-fidelity images by learning the reverse process of a forward Markov chain that gradually corrupts data with Gaussian noise over $T$ timesteps.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تولد نماذج الانتشار لإزالة الضوضاء صوراً فائقة الجودة بتعلم العملية العكسية لسلسلة ماركوف الأمامية التي تضيف تدريجياً ضوضاء غاوسية عبر $T$ خطوة زمنية.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "Denoising Diffusion Probabilistic Models generate high-fidelity images by learning the reverse process of a forward Markov chain that gradually corrupts data with Gaussian noise over $T$ timesteps.",
      "correctAnswerEn": "Denoising Diffusion Probabilistic Models generate high-fidelity images by learning the reverse process of a forward Markov chain that gradually corrupts data with Gaussian noise over $T$ timesteps.",
      "correctAnswerAr": "تولد نماذج الانتشار لإزالة الضوضاء صوراً فائقة الجودة بتعلم العملية العكسية لسلسلة ماركوف الأمامية التي تضيف تدريجياً ضوضاء غاوسية عبر $T$ خطوة زمنية.",
      "correctIndex": 2,
      "explanationEn": "Correct Theoretical Formulation: Denoising Diffusion Probabilistic Models generate high-fidelity images by learning the reverse process of a forward Markov chain that gradually corrupts data with Gaussian noise over $T$ timesteps.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تولد نماذج الانتشار لإزالة الضوضاء صوراً فائقة الجودة بتعلم العملية العكسية لسلسلة ماركوف الأمامية التي تضيف تدريجياً ضوضاء غاوسية عبر $T$ خطوة زمنية.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Denoising Diffusion Probabilistic Models generate high-fidelity images by learning the reverse process of a forward Markov chain that gradually corrupts data with Gaussian noise over $T$ timesteps.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تولد نماذج الانتشار لإزالة الضوضاء صوراً فائقة الجودة بتعلم العملية العكسية لسلسلة ماركوف الأمامية التي تضيف تدريجياً ضوضاء غاوسية عبر $T$ خطوة زمنية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch2_easy_48",
      "titleEn": "[EASY] Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment - Review 48",
      "titleAr": "[مستوى أساسي] التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط - سؤال 48",
      "questionEn": "[AI & Data Science Core Concept] Regarding Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment, which of the following statements is theoretically and mathematically sound? (Variant 48)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 48)",
      "optionsEn": [
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "CLIP aligns visual representations and textual descriptions by training a vision encoder and text encoder jointly using a symmetric contrastive cross-entropy loss over large-scale paired datasets."
      ],
      "optionsAr": [
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "يحاذي نموذج CLIP بين التمثيلات البصرية والنصوص عبر تدريب مشفر الرؤية ومشفر النصوص معاً باستخدام دالة خسارة تباينية متناظرة للإنتروبيا المتقاطعة على أزواج البيانات."
      ],
      "correctAnswer": "CLIP aligns visual representations and textual descriptions by training a vision encoder and text encoder jointly using a symmetric contrastive cross-entropy loss over large-scale paired datasets.",
      "correctAnswerEn": "CLIP aligns visual representations and textual descriptions by training a vision encoder and text encoder jointly using a symmetric contrastive cross-entropy loss over large-scale paired datasets.",
      "correctAnswerAr": "يحاذي نموذج CLIP بين التمثيلات البصرية والنصوص عبر تدريب مشفر الرؤية ومشفر النصوص معاً باستخدام دالة خسارة تباينية متناظرة للإنتروبيا المتقاطعة على أزواج البيانات.",
      "correctIndex": 3,
      "explanationEn": "Correct Theoretical Formulation: CLIP aligns visual representations and textual descriptions by training a vision encoder and text encoder jointly using a symmetric contrastive cross-entropy loss over large-scale paired datasets.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يحاذي نموذج CLIP بين التمثيلات البصرية والنصوص عبر تدريب مشفر الرؤية ومشفر النصوص معاً باستخدام دالة خسارة تباينية متناظرة للإنتروبيا المتقاطعة على أزواج البيانات.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: CLIP aligns visual representations and textual descriptions by training a vision encoder and text encoder jointly using a symmetric contrastive cross-entropy loss over large-scale paired datasets.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يحاذي نموذج CLIP بين التمثيلات البصرية والنصوص عبر تدريب مشفر الرؤية ومشفر النصوص معاً باستخدام دالة خسارة تباينية متناظرة للإنتروبيا المتقاطعة على أزواج البيانات.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch2_easy_49",
      "titleEn": "[EASY] Variational Autoencoders (VAEs) & Reparameterization Trick - Review 49",
      "titleAr": "[مستوى أساسي] المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick) - سؤال 49",
      "questionEn": "[AI & Data Science Core Concept] Regarding Variational Autoencoders (VAEs) & Reparameterization Trick, which of the following statements is theoretically and mathematically sound? (Variant 49)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 49)",
      "optionsEn": [
        "Variational Autoencoders (VAEs) map high-dimensional data into a continuous, smooth probabilistic latent distribution parameterized by mean vector $\\mu$ and variance vector $\\sigma^2$.",
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "ترسم المشفرات التلقائية المتغيرة (VAEs) البيانات عالية الأبعاد في فضاء كامن احتمالي أملس ومستمر مُعرّف بمتجه المتوسطات $\\mu$ ومتجه التباين $\\sigma^2$.",
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "Variational Autoencoders (VAEs) map high-dimensional data into a continuous, smooth probabilistic latent distribution parameterized by mean vector $\\mu$ and variance vector $\\sigma^2$.",
      "correctAnswerEn": "Variational Autoencoders (VAEs) map high-dimensional data into a continuous, smooth probabilistic latent distribution parameterized by mean vector $\\mu$ and variance vector $\\sigma^2$.",
      "correctAnswerAr": "ترسم المشفرات التلقائية المتغيرة (VAEs) البيانات عالية الأبعاد في فضاء كامن احتمالي أملس ومستمر مُعرّف بمتجه المتوسطات $\\mu$ ومتجه التباين $\\sigma^2$.",
      "correctIndex": 0,
      "explanationEn": "Correct Theoretical Formulation: Variational Autoencoders (VAEs) map high-dimensional data into a continuous, smooth probabilistic latent distribution parameterized by mean vector $\\mu$ and variance vector $\\sigma^2$.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: ترسم المشفرات التلقائية المتغيرة (VAEs) البيانات عالية الأبعاد في فضاء كامن احتمالي أملس ومستمر مُعرّف بمتجه المتوسطات $\\mu$ ومتجه التباين $\\sigma^2$.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Variational Autoencoders (VAEs) & Reparameterization Trick.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Variational Autoencoders (VAEs) map high-dimensional data into a continuous, smooth probabilistic latent distribution parameterized by mean vector $\\mu$ and variance vector $\\sigma^2$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: ترسم المشفرات التلقائية المتغيرة (VAEs) البيانات عالية الأبعاد في فضاء كامن احتمالي أملس ومستمر مُعرّف بمتجه المتوسطات $\\mu$ ومتجه التباين $\\sigma^2$.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch2_easy_50",
      "titleEn": "[EASY] Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM) - Review 50",
      "titleAr": "[مستوى أساسي] النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM) - سؤال 50",
      "questionEn": "[AI & Data Science Core Concept] Regarding Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM), which of the following statements is theoretically and mathematically sound? (Variant 50)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 50)",
      "optionsEn": [
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "Denoising Diffusion Probabilistic Models generate high-fidelity images by learning the reverse process of a forward Markov chain that gradually corrupts data with Gaussian noise over $T$ timesteps.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تولد نماذج الانتشار لإزالة الضوضاء صوراً فائقة الجودة بتعلم العملية العكسية لسلسلة ماركوف الأمامية التي تضيف تدريجياً ضوضاء غاوسية عبر $T$ خطوة زمنية.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "Denoising Diffusion Probabilistic Models generate high-fidelity images by learning the reverse process of a forward Markov chain that gradually corrupts data with Gaussian noise over $T$ timesteps.",
      "correctAnswerEn": "Denoising Diffusion Probabilistic Models generate high-fidelity images by learning the reverse process of a forward Markov chain that gradually corrupts data with Gaussian noise over $T$ timesteps.",
      "correctAnswerAr": "تولد نماذج الانتشار لإزالة الضوضاء صوراً فائقة الجودة بتعلم العملية العكسية لسلسلة ماركوف الأمامية التي تضيف تدريجياً ضوضاء غاوسية عبر $T$ خطوة زمنية.",
      "correctIndex": 1,
      "explanationEn": "Correct Theoretical Formulation: Denoising Diffusion Probabilistic Models generate high-fidelity images by learning the reverse process of a forward Markov chain that gradually corrupts data with Gaussian noise over $T$ timesteps.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تولد نماذج الانتشار لإزالة الضوضاء صوراً فائقة الجودة بتعلم العملية العكسية لسلسلة ماركوف الأمامية التي تضيف تدريجياً ضوضاء غاوسية عبر $T$ خطوة زمنية.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Denoising Diffusion Probabilistic Models generate high-fidelity images by learning the reverse process of a forward Markov chain that gradually corrupts data with Gaussian noise over $T$ timesteps.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تولد نماذج الانتشار لإزالة الضوضاء صوراً فائقة الجودة بتعلم العملية العكسية لسلسلة ماركوف الأمامية التي تضيف تدريجياً ضوضاء غاوسية عبر $T$ خطوة زمنية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch2_easy_51",
      "titleEn": "[EASY] Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment - Review 51",
      "titleAr": "[مستوى أساسي] التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط - سؤال 51",
      "questionEn": "[AI & Data Science Core Concept] Regarding Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment, which of the following statements is theoretically and mathematically sound? (Variant 51)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 51)",
      "optionsEn": [
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "CLIP aligns visual representations and textual descriptions by training a vision encoder and text encoder jointly using a symmetric contrastive cross-entropy loss over large-scale paired datasets.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحاذي نموذج CLIP بين التمثيلات البصرية والنصوص عبر تدريب مشفر الرؤية ومشفر النصوص معاً باستخدام دالة خسارة تباينية متناظرة للإنتروبيا المتقاطعة على أزواج البيانات.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "CLIP aligns visual representations and textual descriptions by training a vision encoder and text encoder jointly using a symmetric contrastive cross-entropy loss over large-scale paired datasets.",
      "correctAnswerEn": "CLIP aligns visual representations and textual descriptions by training a vision encoder and text encoder jointly using a symmetric contrastive cross-entropy loss over large-scale paired datasets.",
      "correctAnswerAr": "يحاذي نموذج CLIP بين التمثيلات البصرية والنصوص عبر تدريب مشفر الرؤية ومشفر النصوص معاً باستخدام دالة خسارة تباينية متناظرة للإنتروبيا المتقاطعة على أزواج البيانات.",
      "correctIndex": 2,
      "explanationEn": "Correct Theoretical Formulation: CLIP aligns visual representations and textual descriptions by training a vision encoder and text encoder jointly using a symmetric contrastive cross-entropy loss over large-scale paired datasets.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يحاذي نموذج CLIP بين التمثيلات البصرية والنصوص عبر تدريب مشفر الرؤية ومشفر النصوص معاً باستخدام دالة خسارة تباينية متناظرة للإنتروبيا المتقاطعة على أزواج البيانات.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: CLIP aligns visual representations and textual descriptions by training a vision encoder and text encoder jointly using a symmetric contrastive cross-entropy loss over large-scale paired datasets.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يحاذي نموذج CLIP بين التمثيلات البصرية والنصوص عبر تدريب مشفر الرؤية ومشفر النصوص معاً باستخدام دالة خسارة تباينية متناظرة للإنتروبيا المتقاطعة على أزواج البيانات.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch2_easy_52",
      "titleEn": "[EASY] Variational Autoencoders (VAEs) & Reparameterization Trick - Review 52",
      "titleAr": "[مستوى أساسي] المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick) - سؤال 52",
      "questionEn": "[AI & Data Science Core Concept] Regarding Variational Autoencoders (VAEs) & Reparameterization Trick, which of the following statements is theoretically and mathematically sound? (Variant 52)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 52)",
      "optionsEn": [
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "Variational Autoencoders (VAEs) map high-dimensional data into a continuous, smooth probabilistic latent distribution parameterized by mean vector $\\mu$ and variance vector $\\sigma^2$."
      ],
      "optionsAr": [
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "ترسم المشفرات التلقائية المتغيرة (VAEs) البيانات عالية الأبعاد في فضاء كامن احتمالي أملس ومستمر مُعرّف بمتجه المتوسطات $\\mu$ ومتجه التباين $\\sigma^2$."
      ],
      "correctAnswer": "Variational Autoencoders (VAEs) map high-dimensional data into a continuous, smooth probabilistic latent distribution parameterized by mean vector $\\mu$ and variance vector $\\sigma^2$.",
      "correctAnswerEn": "Variational Autoencoders (VAEs) map high-dimensional data into a continuous, smooth probabilistic latent distribution parameterized by mean vector $\\mu$ and variance vector $\\sigma^2$.",
      "correctAnswerAr": "ترسم المشفرات التلقائية المتغيرة (VAEs) البيانات عالية الأبعاد في فضاء كامن احتمالي أملس ومستمر مُعرّف بمتجه المتوسطات $\\mu$ ومتجه التباين $\\sigma^2$.",
      "correctIndex": 3,
      "explanationEn": "Correct Theoretical Formulation: Variational Autoencoders (VAEs) map high-dimensional data into a continuous, smooth probabilistic latent distribution parameterized by mean vector $\\mu$ and variance vector $\\sigma^2$.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: ترسم المشفرات التلقائية المتغيرة (VAEs) البيانات عالية الأبعاد في فضاء كامن احتمالي أملس ومستمر مُعرّف بمتجه المتوسطات $\\mu$ ومتجه التباين $\\sigma^2$.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Variational Autoencoders (VAEs) & Reparameterization Trick.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Variational Autoencoders (VAEs) map high-dimensional data into a continuous, smooth probabilistic latent distribution parameterized by mean vector $\\mu$ and variance vector $\\sigma^2$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: ترسم المشفرات التلقائية المتغيرة (VAEs) البيانات عالية الأبعاد في فضاء كامن احتمالي أملس ومستمر مُعرّف بمتجه المتوسطات $\\mu$ ومتجه التباين $\\sigma^2$.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch2_easy_53",
      "titleEn": "[EASY] Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM) - Review 53",
      "titleAr": "[مستوى أساسي] النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM) - سؤال 53",
      "questionEn": "[AI & Data Science Core Concept] Regarding Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM), which of the following statements is theoretically and mathematically sound? (Variant 53)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 53)",
      "optionsEn": [
        "Denoising Diffusion Probabilistic Models generate high-fidelity images by learning the reverse process of a forward Markov chain that gradually corrupts data with Gaussian noise over $T$ timesteps.",
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "تولد نماذج الانتشار لإزالة الضوضاء صوراً فائقة الجودة بتعلم العملية العكسية لسلسلة ماركوف الأمامية التي تضيف تدريجياً ضوضاء غاوسية عبر $T$ خطوة زمنية.",
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "Denoising Diffusion Probabilistic Models generate high-fidelity images by learning the reverse process of a forward Markov chain that gradually corrupts data with Gaussian noise over $T$ timesteps.",
      "correctAnswerEn": "Denoising Diffusion Probabilistic Models generate high-fidelity images by learning the reverse process of a forward Markov chain that gradually corrupts data with Gaussian noise over $T$ timesteps.",
      "correctAnswerAr": "تولد نماذج الانتشار لإزالة الضوضاء صوراً فائقة الجودة بتعلم العملية العكسية لسلسلة ماركوف الأمامية التي تضيف تدريجياً ضوضاء غاوسية عبر $T$ خطوة زمنية.",
      "correctIndex": 0,
      "explanationEn": "Correct Theoretical Formulation: Denoising Diffusion Probabilistic Models generate high-fidelity images by learning the reverse process of a forward Markov chain that gradually corrupts data with Gaussian noise over $T$ timesteps.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تولد نماذج الانتشار لإزالة الضوضاء صوراً فائقة الجودة بتعلم العملية العكسية لسلسلة ماركوف الأمامية التي تضيف تدريجياً ضوضاء غاوسية عبر $T$ خطوة زمنية.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Denoising Diffusion Probabilistic Models generate high-fidelity images by learning the reverse process of a forward Markov chain that gradually corrupts data with Gaussian noise over $T$ timesteps.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تولد نماذج الانتشار لإزالة الضوضاء صوراً فائقة الجودة بتعلم العملية العكسية لسلسلة ماركوف الأمامية التي تضيف تدريجياً ضوضاء غاوسية عبر $T$ خطوة زمنية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch2_easy_54",
      "titleEn": "[EASY] Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment - Review 54",
      "titleAr": "[مستوى أساسي] التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط - سؤال 54",
      "questionEn": "[AI & Data Science Core Concept] Regarding Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment, which of the following statements is theoretically and mathematically sound? (Variant 54)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 54)",
      "optionsEn": [
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "CLIP aligns visual representations and textual descriptions by training a vision encoder and text encoder jointly using a symmetric contrastive cross-entropy loss over large-scale paired datasets.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "يحاذي نموذج CLIP بين التمثيلات البصرية والنصوص عبر تدريب مشفر الرؤية ومشفر النصوص معاً باستخدام دالة خسارة تباينية متناظرة للإنتروبيا المتقاطعة على أزواج البيانات.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "CLIP aligns visual representations and textual descriptions by training a vision encoder and text encoder jointly using a symmetric contrastive cross-entropy loss over large-scale paired datasets.",
      "correctAnswerEn": "CLIP aligns visual representations and textual descriptions by training a vision encoder and text encoder jointly using a symmetric contrastive cross-entropy loss over large-scale paired datasets.",
      "correctAnswerAr": "يحاذي نموذج CLIP بين التمثيلات البصرية والنصوص عبر تدريب مشفر الرؤية ومشفر النصوص معاً باستخدام دالة خسارة تباينية متناظرة للإنتروبيا المتقاطعة على أزواج البيانات.",
      "correctIndex": 1,
      "explanationEn": "Correct Theoretical Formulation: CLIP aligns visual representations and textual descriptions by training a vision encoder and text encoder jointly using a symmetric contrastive cross-entropy loss over large-scale paired datasets.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يحاذي نموذج CLIP بين التمثيلات البصرية والنصوص عبر تدريب مشفر الرؤية ومشفر النصوص معاً باستخدام دالة خسارة تباينية متناظرة للإنتروبيا المتقاطعة على أزواج البيانات.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: CLIP aligns visual representations and textual descriptions by training a vision encoder and text encoder jointly using a symmetric contrastive cross-entropy loss over large-scale paired datasets.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يحاذي نموذج CLIP بين التمثيلات البصرية والنصوص عبر تدريب مشفر الرؤية ومشفر النصوص معاً باستخدام دالة خسارة تباينية متناظرة للإنتروبيا المتقاطعة على أزواج البيانات.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch2_easy_55",
      "titleEn": "[EASY] Variational Autoencoders (VAEs) & Reparameterization Trick - Review 55",
      "titleAr": "[مستوى أساسي] المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick) - سؤال 55",
      "questionEn": "[AI & Data Science Core Concept] Regarding Variational Autoencoders (VAEs) & Reparameterization Trick, which of the following statements is theoretically and mathematically sound? (Variant 55)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 55)",
      "optionsEn": [
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Variational Autoencoders (VAEs) map high-dimensional data into a continuous, smooth probabilistic latent distribution parameterized by mean vector $\\mu$ and variance vector $\\sigma^2$.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "ترسم المشفرات التلقائية المتغيرة (VAEs) البيانات عالية الأبعاد في فضاء كامن احتمالي أملس ومستمر مُعرّف بمتجه المتوسطات $\\mu$ ومتجه التباين $\\sigma^2$.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "Variational Autoencoders (VAEs) map high-dimensional data into a continuous, smooth probabilistic latent distribution parameterized by mean vector $\\mu$ and variance vector $\\sigma^2$.",
      "correctAnswerEn": "Variational Autoencoders (VAEs) map high-dimensional data into a continuous, smooth probabilistic latent distribution parameterized by mean vector $\\mu$ and variance vector $\\sigma^2$.",
      "correctAnswerAr": "ترسم المشفرات التلقائية المتغيرة (VAEs) البيانات عالية الأبعاد في فضاء كامن احتمالي أملس ومستمر مُعرّف بمتجه المتوسطات $\\mu$ ومتجه التباين $\\sigma^2$.",
      "correctIndex": 2,
      "explanationEn": "Correct Theoretical Formulation: Variational Autoencoders (VAEs) map high-dimensional data into a continuous, smooth probabilistic latent distribution parameterized by mean vector $\\mu$ and variance vector $\\sigma^2$.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: ترسم المشفرات التلقائية المتغيرة (VAEs) البيانات عالية الأبعاد في فضاء كامن احتمالي أملس ومستمر مُعرّف بمتجه المتوسطات $\\mu$ ومتجه التباين $\\sigma^2$.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Variational Autoencoders (VAEs) & Reparameterization Trick.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Variational Autoencoders (VAEs) map high-dimensional data into a continuous, smooth probabilistic latent distribution parameterized by mean vector $\\mu$ and variance vector $\\sigma^2$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: ترسم المشفرات التلقائية المتغيرة (VAEs) البيانات عالية الأبعاد في فضاء كامن احتمالي أملس ومستمر مُعرّف بمتجه المتوسطات $\\mu$ ومتجه التباين $\\sigma^2$.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch2_easy_56",
      "titleEn": "[EASY] Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM) - Review 56",
      "titleAr": "[مستوى أساسي] النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM) - سؤال 56",
      "questionEn": "[AI & Data Science Core Concept] Regarding Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM), which of the following statements is theoretically and mathematically sound? (Variant 56)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 56)",
      "optionsEn": [
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "Denoising Diffusion Probabilistic Models generate high-fidelity images by learning the reverse process of a forward Markov chain that gradually corrupts data with Gaussian noise over $T$ timesteps."
      ],
      "optionsAr": [
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تولد نماذج الانتشار لإزالة الضوضاء صوراً فائقة الجودة بتعلم العملية العكسية لسلسلة ماركوف الأمامية التي تضيف تدريجياً ضوضاء غاوسية عبر $T$ خطوة زمنية."
      ],
      "correctAnswer": "Denoising Diffusion Probabilistic Models generate high-fidelity images by learning the reverse process of a forward Markov chain that gradually corrupts data with Gaussian noise over $T$ timesteps.",
      "correctAnswerEn": "Denoising Diffusion Probabilistic Models generate high-fidelity images by learning the reverse process of a forward Markov chain that gradually corrupts data with Gaussian noise over $T$ timesteps.",
      "correctAnswerAr": "تولد نماذج الانتشار لإزالة الضوضاء صوراً فائقة الجودة بتعلم العملية العكسية لسلسلة ماركوف الأمامية التي تضيف تدريجياً ضوضاء غاوسية عبر $T$ خطوة زمنية.",
      "correctIndex": 3,
      "explanationEn": "Correct Theoretical Formulation: Denoising Diffusion Probabilistic Models generate high-fidelity images by learning the reverse process of a forward Markov chain that gradually corrupts data with Gaussian noise over $T$ timesteps.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تولد نماذج الانتشار لإزالة الضوضاء صوراً فائقة الجودة بتعلم العملية العكسية لسلسلة ماركوف الأمامية التي تضيف تدريجياً ضوضاء غاوسية عبر $T$ خطوة زمنية.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Denoising Diffusion Probabilistic Models generate high-fidelity images by learning the reverse process of a forward Markov chain that gradually corrupts data with Gaussian noise over $T$ timesteps.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تولد نماذج الانتشار لإزالة الضوضاء صوراً فائقة الجودة بتعلم العملية العكسية لسلسلة ماركوف الأمامية التي تضيف تدريجياً ضوضاء غاوسية عبر $T$ خطوة زمنية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch2_easy_57",
      "titleEn": "[EASY] Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment - Review 57",
      "titleAr": "[مستوى أساسي] التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط - سؤال 57",
      "questionEn": "[AI & Data Science Core Concept] Regarding Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment, which of the following statements is theoretically and mathematically sound? (Variant 57)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 57)",
      "optionsEn": [
        "CLIP aligns visual representations and textual descriptions by training a vision encoder and text encoder jointly using a symmetric contrastive cross-entropy loss over large-scale paired datasets.",
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "يحاذي نموذج CLIP بين التمثيلات البصرية والنصوص عبر تدريب مشفر الرؤية ومشفر النصوص معاً باستخدام دالة خسارة تباينية متناظرة للإنتروبيا المتقاطعة على أزواج البيانات.",
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "CLIP aligns visual representations and textual descriptions by training a vision encoder and text encoder jointly using a symmetric contrastive cross-entropy loss over large-scale paired datasets.",
      "correctAnswerEn": "CLIP aligns visual representations and textual descriptions by training a vision encoder and text encoder jointly using a symmetric contrastive cross-entropy loss over large-scale paired datasets.",
      "correctAnswerAr": "يحاذي نموذج CLIP بين التمثيلات البصرية والنصوص عبر تدريب مشفر الرؤية ومشفر النصوص معاً باستخدام دالة خسارة تباينية متناظرة للإنتروبيا المتقاطعة على أزواج البيانات.",
      "correctIndex": 0,
      "explanationEn": "Correct Theoretical Formulation: CLIP aligns visual representations and textual descriptions by training a vision encoder and text encoder jointly using a symmetric contrastive cross-entropy loss over large-scale paired datasets.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يحاذي نموذج CLIP بين التمثيلات البصرية والنصوص عبر تدريب مشفر الرؤية ومشفر النصوص معاً باستخدام دالة خسارة تباينية متناظرة للإنتروبيا المتقاطعة على أزواج البيانات.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: CLIP aligns visual representations and textual descriptions by training a vision encoder and text encoder jointly using a symmetric contrastive cross-entropy loss over large-scale paired datasets.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يحاذي نموذج CLIP بين التمثيلات البصرية والنصوص عبر تدريب مشفر الرؤية ومشفر النصوص معاً باستخدام دالة خسارة تباينية متناظرة للإنتروبيا المتقاطعة على أزواج البيانات.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch2_easy_58",
      "titleEn": "[EASY] Variational Autoencoders (VAEs) & Reparameterization Trick - Review 58",
      "titleAr": "[مستوى أساسي] المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick) - سؤال 58",
      "questionEn": "[AI & Data Science Core Concept] Regarding Variational Autoencoders (VAEs) & Reparameterization Trick, which of the following statements is theoretically and mathematically sound? (Variant 58)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 58)",
      "optionsEn": [
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "Variational Autoencoders (VAEs) map high-dimensional data into a continuous, smooth probabilistic latent distribution parameterized by mean vector $\\mu$ and variance vector $\\sigma^2$.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "ترسم المشفرات التلقائية المتغيرة (VAEs) البيانات عالية الأبعاد في فضاء كامن احتمالي أملس ومستمر مُعرّف بمتجه المتوسطات $\\mu$ ومتجه التباين $\\sigma^2$.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "Variational Autoencoders (VAEs) map high-dimensional data into a continuous, smooth probabilistic latent distribution parameterized by mean vector $\\mu$ and variance vector $\\sigma^2$.",
      "correctAnswerEn": "Variational Autoencoders (VAEs) map high-dimensional data into a continuous, smooth probabilistic latent distribution parameterized by mean vector $\\mu$ and variance vector $\\sigma^2$.",
      "correctAnswerAr": "ترسم المشفرات التلقائية المتغيرة (VAEs) البيانات عالية الأبعاد في فضاء كامن احتمالي أملس ومستمر مُعرّف بمتجه المتوسطات $\\mu$ ومتجه التباين $\\sigma^2$.",
      "correctIndex": 1,
      "explanationEn": "Correct Theoretical Formulation: Variational Autoencoders (VAEs) map high-dimensional data into a continuous, smooth probabilistic latent distribution parameterized by mean vector $\\mu$ and variance vector $\\sigma^2$.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: ترسم المشفرات التلقائية المتغيرة (VAEs) البيانات عالية الأبعاد في فضاء كامن احتمالي أملس ومستمر مُعرّف بمتجه المتوسطات $\\mu$ ومتجه التباين $\\sigma^2$.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Variational Autoencoders (VAEs) & Reparameterization Trick.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Variational Autoencoders (VAEs) map high-dimensional data into a continuous, smooth probabilistic latent distribution parameterized by mean vector $\\mu$ and variance vector $\\sigma^2$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: ترسم المشفرات التلقائية المتغيرة (VAEs) البيانات عالية الأبعاد في فضاء كامن احتمالي أملس ومستمر مُعرّف بمتجه المتوسطات $\\mu$ ومتجه التباين $\\sigma^2$.."
      ],
      "difficulty": "easy"
    }
  ],
  "medium": [
    {
      "id": "egbac_ai_data_science_ch2_med_1",
      "titleEn": "[MEDIUM] Variational Autoencoders (VAEs) & Reparameterization Trick - Analysis 1",
      "titleAr": "[مستوى متوسط] المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick) - تحليل 1",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Variational Autoencoders (VAEs) & Reparameterization Trick, what is the precise analytical formulation or operative rule? (Item 1)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 1)",
      "optionsEn": [
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves."
      ],
      "optionsAr": [
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "تمكن حيلة إعادة المعلمة من تدفق التدرجات عبر العينات العشوائية بصياغة المتجه الكامن $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$، حيث $\\epsilon \\sim \\mathcal{N}(0, I)$ عينة ضوضاء عشوائية خارجية ثابتة.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية."
      ],
      "correctAnswer": "The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.",
      "correctAnswerEn": "The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.",
      "correctAnswerAr": "تمكن حيلة إعادة المعلمة من تدفق التدرجات عبر العينات العشوائية بصياغة المتجه الكامن $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$، حيث $\\epsilon \\sim \\mathcal{N}(0, I)$ عينة ضوضاء عشوائية خارجية ثابتة.",
      "correctIndex": 1,
      "explanationEn": "Analytical Derivation & Properties: The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تمكن حيلة إعادة المعلمة من تدفق التدرجات عبر العينات العشوائية بصياغة المتجه الكامن $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$، حيث $\\epsilon \\sim \\mathcal{N}(0, I)$ عينة ضوضاء عشوائية خارجية ثابتة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Variational Autoencoders (VAEs) & Reparameterization Trick.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تمكن حيلة إعادة المعلمة من تدفق التدرجات عبر العينات العشوائية بصياغة المتجه الكامن $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$، حيث $\\epsilon \\sim \\mathcal{N}(0, I)$ عينة ضوضاء عشوائية خارجية ثابتة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch2_med_2",
      "titleEn": "[MEDIUM] Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM) - Analysis 2",
      "titleAr": "[مستوى متوسط] النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM) - تحليل 2",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM), what is the precise analytical formulation or operative rule? (Item 2)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 2)",
      "optionsEn": [
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتبع العملية الأمامية التوزيع $q(x_t | x_{t-1}) = \\mathcal{N}(\\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$، وتتيح أخذ العينات مباشرة عند أي خطوة $t$ عبر $q(x_t | x_0) = \\mathcal{N}(\\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.",
      "correctAnswerEn": "The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.",
      "correctAnswerAr": "تتبع العملية الأمامية التوزيع $q(x_t | x_{t-1}) = \\mathcal{N}(\\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$، وتتيح أخذ العينات مباشرة عند أي خطوة $t$ عبر $q(x_t | x_0) = \\mathcal{N}(\\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$.",
      "correctIndex": 2,
      "explanationEn": "Analytical Derivation & Properties: The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تتبع العملية الأمامية التوزيع $q(x_t | x_{t-1}) = \\mathcal{N}(\\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$، وتتيح أخذ العينات مباشرة عند أي خطوة $t$ عبر $q(x_t | x_0) = \\mathcal{N}(\\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تتبع العملية الأمامية التوزيع $q(x_t | x_{t-1}) = \\mathcal{N}(\\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$، وتتيح أخذ العينات مباشرة عند أي خطوة $t$ عبر $q(x_t | x_0) = \\mathcal{N}(\\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch2_med_3",
      "titleEn": "[MEDIUM] Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment - Analysis 3",
      "titleAr": "[مستوى متوسط] التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط - تحليل 3",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment, what is the precise analytical formulation or operative rule? (Item 3)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 3)",
      "optionsEn": [
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs."
      ],
      "optionsAr": [
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "لحزمة من $N$ زوجاً من الصور والنصوص بتضمينات معيرة $I_i$ و $T_j$، تكون مصفوفة التشابه $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$، فتعظم عناصر القطر المتطابقة وتعاقب كافة الأزواج غير المتطابقة."
      ],
      "correctAnswer": "For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.",
      "correctAnswerEn": "For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.",
      "correctAnswerAr": "لحزمة من $N$ زوجاً من الصور والنصوص بتضمينات معيرة $I_i$ و $T_j$، تكون مصفوفة التشابه $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$، فتعظم عناصر القطر المتطابقة وتعاقب كافة الأزواج غير المتطابقة.",
      "correctIndex": 3,
      "explanationEn": "Analytical Derivation & Properties: For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: لحزمة من $N$ زوجاً من الصور والنصوص بتضمينات معيرة $I_i$ و $T_j$، تكون مصفوفة التشابه $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$، فتعظم عناصر القطر المتطابقة وتعاقب كافة الأزواج غير المتطابقة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: لحزمة من $N$ زوجاً من الصور والنصوص بتضمينات معيرة $I_i$ و $T_j$، تكون مصفوفة التشابه $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$، فتعظم عناصر القطر المتطابقة وتعاقب كافة الأزواج غير المتطابقة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch2_med_4",
      "titleEn": "[MEDIUM] Variational Autoencoders (VAEs) & Reparameterization Trick - Analysis 4",
      "titleAr": "[مستوى متوسط] المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick) - تحليل 4",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Variational Autoencoders (VAEs) & Reparameterization Trick, what is the precise analytical formulation or operative rule? (Item 4)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 4)",
      "optionsEn": [
        "The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent."
      ],
      "optionsAr": [
        "تمكن حيلة إعادة المعلمة من تدفق التدرجات عبر العينات العشوائية بصياغة المتجه الكامن $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$، حيث $\\epsilon \\sim \\mathcal{N}(0, I)$ عينة ضوضاء عشوائية خارجية ثابتة.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة."
      ],
      "correctAnswer": "The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.",
      "correctAnswerEn": "The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.",
      "correctAnswerAr": "تمكن حيلة إعادة المعلمة من تدفق التدرجات عبر العينات العشوائية بصياغة المتجه الكامن $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$، حيث $\\epsilon \\sim \\mathcal{N}(0, I)$ عينة ضوضاء عشوائية خارجية ثابتة.",
      "correctIndex": 0,
      "explanationEn": "Analytical Derivation & Properties: The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تمكن حيلة إعادة المعلمة من تدفق التدرجات عبر العينات العشوائية بصياغة المتجه الكامن $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$، حيث $\\epsilon \\sim \\mathcal{N}(0, I)$ عينة ضوضاء عشوائية خارجية ثابتة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Variational Autoencoders (VAEs) & Reparameterization Trick.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تمكن حيلة إعادة المعلمة من تدفق التدرجات عبر العينات العشوائية بصياغة المتجه الكامن $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$، حيث $\\epsilon \\sim \\mathcal{N}(0, I)$ عينة ضوضاء عشوائية خارجية ثابتة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch2_med_5",
      "titleEn": "[MEDIUM] Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM) - Analysis 5",
      "titleAr": "[مستوى متوسط] النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM) - تحليل 5",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM), what is the precise analytical formulation or operative rule? (Item 5)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 5)",
      "optionsEn": [
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "تتبع العملية الأمامية التوزيع $q(x_t | x_{t-1}) = \\mathcal{N}(\\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$، وتتيح أخذ العينات مباشرة عند أي خطوة $t$ عبر $q(x_t | x_0) = \\mathcal{N}(\\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.",
      "correctAnswerEn": "The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.",
      "correctAnswerAr": "تتبع العملية الأمامية التوزيع $q(x_t | x_{t-1}) = \\mathcal{N}(\\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$، وتتيح أخذ العينات مباشرة عند أي خطوة $t$ عبر $q(x_t | x_0) = \\mathcal{N}(\\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$.",
      "correctIndex": 1,
      "explanationEn": "Analytical Derivation & Properties: The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تتبع العملية الأمامية التوزيع $q(x_t | x_{t-1}) = \\mathcal{N}(\\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$، وتتيح أخذ العينات مباشرة عند أي خطوة $t$ عبر $q(x_t | x_0) = \\mathcal{N}(\\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تتبع العملية الأمامية التوزيع $q(x_t | x_{t-1}) = \\mathcal{N}(\\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$، وتتيح أخذ العينات مباشرة عند أي خطوة $t$ عبر $q(x_t | x_0) = \\mathcal{N}(\\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch2_med_6",
      "titleEn": "[MEDIUM] Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment - Analysis 6",
      "titleAr": "[مستوى متوسط] التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط - تحليل 6",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment, what is the precise analytical formulation or operative rule? (Item 6)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 6)",
      "optionsEn": [
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step."
      ],
      "optionsAr": [
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "لحزمة من $N$ زوجاً من الصور والنصوص بتضمينات معيرة $I_i$ و $T_j$، تكون مصفوفة التشابه $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$، فتعظم عناصر القطر المتطابقة وتعاقب كافة الأزواج غير المتطابقة.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين."
      ],
      "correctAnswer": "For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.",
      "correctAnswerEn": "For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.",
      "correctAnswerAr": "لحزمة من $N$ زوجاً من الصور والنصوص بتضمينات معيرة $I_i$ و $T_j$، تكون مصفوفة التشابه $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$، فتعظم عناصر القطر المتطابقة وتعاقب كافة الأزواج غير المتطابقة.",
      "correctIndex": 2,
      "explanationEn": "Analytical Derivation & Properties: For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: لحزمة من $N$ زوجاً من الصور والنصوص بتضمينات معيرة $I_i$ و $T_j$، تكون مصفوفة التشابه $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$، فتعظم عناصر القطر المتطابقة وتعاقب كافة الأزواج غير المتطابقة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: لحزمة من $N$ زوجاً من الصور والنصوص بتضمينات معيرة $I_i$ و $T_j$، تكون مصفوفة التشابه $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$، فتعظم عناصر القطر المتطابقة وتعاقب كافة الأزواج غير المتطابقة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch2_med_7",
      "titleEn": "[MEDIUM] Variational Autoencoders (VAEs) & Reparameterization Trick - Analysis 7",
      "titleAr": "[مستوى متوسط] المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick) - تحليل 7",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Variational Autoencoders (VAEs) & Reparameterization Trick, what is the precise analytical formulation or operative rule? (Item 7)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 7)",
      "optionsEn": [
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample."
      ],
      "optionsAr": [
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "تمكن حيلة إعادة المعلمة من تدفق التدرجات عبر العينات العشوائية بصياغة المتجه الكامن $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$، حيث $\\epsilon \\sim \\mathcal{N}(0, I)$ عينة ضوضاء عشوائية خارجية ثابتة."
      ],
      "correctAnswer": "The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.",
      "correctAnswerEn": "The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.",
      "correctAnswerAr": "تمكن حيلة إعادة المعلمة من تدفق التدرجات عبر العينات العشوائية بصياغة المتجه الكامن $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$، حيث $\\epsilon \\sim \\mathcal{N}(0, I)$ عينة ضوضاء عشوائية خارجية ثابتة.",
      "correctIndex": 3,
      "explanationEn": "Analytical Derivation & Properties: The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تمكن حيلة إعادة المعلمة من تدفق التدرجات عبر العينات العشوائية بصياغة المتجه الكامن $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$، حيث $\\epsilon \\sim \\mathcal{N}(0, I)$ عينة ضوضاء عشوائية خارجية ثابتة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Variational Autoencoders (VAEs) & Reparameterization Trick.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تمكن حيلة إعادة المعلمة من تدفق التدرجات عبر العينات العشوائية بصياغة المتجه الكامن $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$، حيث $\\epsilon \\sim \\mathcal{N}(0, I)$ عينة ضوضاء عشوائية خارجية ثابتة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch2_med_8",
      "titleEn": "[MEDIUM] Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM) - Analysis 8",
      "titleAr": "[مستوى متوسط] النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM) - تحليل 8",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM), what is the precise analytical formulation or operative rule? (Item 8)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 8)",
      "optionsEn": [
        "The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.",
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "تتبع العملية الأمامية التوزيع $q(x_t | x_{t-1}) = \\mathcal{N}(\\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$، وتتيح أخذ العينات مباشرة عند أي خطوة $t$ عبر $q(x_t | x_0) = \\mathcal{N}(\\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$.",
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.",
      "correctAnswerEn": "The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.",
      "correctAnswerAr": "تتبع العملية الأمامية التوزيع $q(x_t | x_{t-1}) = \\mathcal{N}(\\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$، وتتيح أخذ العينات مباشرة عند أي خطوة $t$ عبر $q(x_t | x_0) = \\mathcal{N}(\\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$.",
      "correctIndex": 0,
      "explanationEn": "Analytical Derivation & Properties: The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تتبع العملية الأمامية التوزيع $q(x_t | x_{t-1}) = \\mathcal{N}(\\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$، وتتيح أخذ العينات مباشرة عند أي خطوة $t$ عبر $q(x_t | x_0) = \\mathcal{N}(\\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تتبع العملية الأمامية التوزيع $q(x_t | x_{t-1}) = \\mathcal{N}(\\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$، وتتيح أخذ العينات مباشرة عند أي خطوة $t$ عبر $q(x_t | x_0) = \\mathcal{N}(\\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch2_med_9",
      "titleEn": "[MEDIUM] Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment - Analysis 9",
      "titleAr": "[مستوى متوسط] التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط - تحليل 9",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment, what is the precise analytical formulation or operative rule? (Item 9)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 9)",
      "optionsEn": [
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.",
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs."
      ],
      "optionsAr": [
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "لحزمة من $N$ زوجاً من الصور والنصوص بتضمينات معيرة $I_i$ و $T_j$، تكون مصفوفة التشابه $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$، فتعظم عناصر القطر المتطابقة وتعاقب كافة الأزواج غير المتطابقة.",
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة."
      ],
      "correctAnswer": "For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.",
      "correctAnswerEn": "For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.",
      "correctAnswerAr": "لحزمة من $N$ زوجاً من الصور والنصوص بتضمينات معيرة $I_i$ و $T_j$، تكون مصفوفة التشابه $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$، فتعظم عناصر القطر المتطابقة وتعاقب كافة الأزواج غير المتطابقة.",
      "correctIndex": 1,
      "explanationEn": "Analytical Derivation & Properties: For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: لحزمة من $N$ زوجاً من الصور والنصوص بتضمينات معيرة $I_i$ و $T_j$، تكون مصفوفة التشابه $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$، فتعظم عناصر القطر المتطابقة وتعاقب كافة الأزواج غير المتطابقة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: لحزمة من $N$ زوجاً من الصور والنصوص بتضمينات معيرة $I_i$ و $T_j$، تكون مصفوفة التشابه $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$، فتعظم عناصر القطر المتطابقة وتعاقب كافة الأزواج غير المتطابقة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch2_med_10",
      "titleEn": "[MEDIUM] Variational Autoencoders (VAEs) & Reparameterization Trick - Analysis 10",
      "titleAr": "[مستوى متوسط] المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick) - تحليل 10",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Variational Autoencoders (VAEs) & Reparameterization Trick, what is the precise analytical formulation or operative rule? (Item 10)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 10)",
      "optionsEn": [
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.",
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence."
      ],
      "optionsAr": [
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "تمكن حيلة إعادة المعلمة من تدفق التدرجات عبر العينات العشوائية بصياغة المتجه الكامن $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$، حيث $\\epsilon \\sim \\mathcal{N}(0, I)$ عينة ضوضاء عشوائية خارجية ثابتة.",
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية."
      ],
      "correctAnswer": "The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.",
      "correctAnswerEn": "The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.",
      "correctAnswerAr": "تمكن حيلة إعادة المعلمة من تدفق التدرجات عبر العينات العشوائية بصياغة المتجه الكامن $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$، حيث $\\epsilon \\sim \\mathcal{N}(0, I)$ عينة ضوضاء عشوائية خارجية ثابتة.",
      "correctIndex": 2,
      "explanationEn": "Analytical Derivation & Properties: The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تمكن حيلة إعادة المعلمة من تدفق التدرجات عبر العينات العشوائية بصياغة المتجه الكامن $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$، حيث $\\epsilon \\sim \\mathcal{N}(0, I)$ عينة ضوضاء عشوائية خارجية ثابتة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Variational Autoencoders (VAEs) & Reparameterization Trick.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تمكن حيلة إعادة المعلمة من تدفق التدرجات عبر العينات العشوائية بصياغة المتجه الكامن $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$، حيث $\\epsilon \\sim \\mathcal{N}(0, I)$ عينة ضوضاء عشوائية خارجية ثابتة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch2_med_11",
      "titleEn": "[MEDIUM] Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM) - Analysis 11",
      "titleAr": "[مستوى متوسط] النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM) - تحليل 11",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM), what is the precise analytical formulation or operative rule? (Item 11)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 11)",
      "optionsEn": [
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$."
      ],
      "optionsAr": [
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "تتبع العملية الأمامية التوزيع $q(x_t | x_{t-1}) = \\mathcal{N}(\\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$، وتتيح أخذ العينات مباشرة عند أي خطوة $t$ عبر $q(x_t | x_0) = \\mathcal{N}(\\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$."
      ],
      "correctAnswer": "The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.",
      "correctAnswerEn": "The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.",
      "correctAnswerAr": "تتبع العملية الأمامية التوزيع $q(x_t | x_{t-1}) = \\mathcal{N}(\\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$، وتتيح أخذ العينات مباشرة عند أي خطوة $t$ عبر $q(x_t | x_0) = \\mathcal{N}(\\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$.",
      "correctIndex": 3,
      "explanationEn": "Analytical Derivation & Properties: The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تتبع العملية الأمامية التوزيع $q(x_t | x_{t-1}) = \\mathcal{N}(\\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$، وتتيح أخذ العينات مباشرة عند أي خطوة $t$ عبر $q(x_t | x_0) = \\mathcal{N}(\\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تتبع العملية الأمامية التوزيع $q(x_t | x_{t-1}) = \\mathcal{N}(\\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$، وتتيح أخذ العينات مباشرة عند أي خطوة $t$ عبر $q(x_t | x_0) = \\mathcal{N}(\\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch2_med_12",
      "titleEn": "[MEDIUM] Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment - Analysis 12",
      "titleAr": "[مستوى متوسط] التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط - تحليل 12",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment, what is the precise analytical formulation or operative rule? (Item 12)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 12)",
      "optionsEn": [
        "For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data."
      ],
      "optionsAr": [
        "لحزمة من $N$ زوجاً من الصور والنصوص بتضمينات معيرة $I_i$ و $T_j$، تكون مصفوفة التشابه $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$، فتعظم عناصر القطر المتطابقة وتعاقب كافة الأزواج غير المتطابقة.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش."
      ],
      "correctAnswer": "For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.",
      "correctAnswerEn": "For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.",
      "correctAnswerAr": "لحزمة من $N$ زوجاً من الصور والنصوص بتضمينات معيرة $I_i$ و $T_j$، تكون مصفوفة التشابه $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$، فتعظم عناصر القطر المتطابقة وتعاقب كافة الأزواج غير المتطابقة.",
      "correctIndex": 0,
      "explanationEn": "Analytical Derivation & Properties: For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: لحزمة من $N$ زوجاً من الصور والنصوص بتضمينات معيرة $I_i$ و $T_j$، تكون مصفوفة التشابه $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$، فتعظم عناصر القطر المتطابقة وتعاقب كافة الأزواج غير المتطابقة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: لحزمة من $N$ زوجاً من الصور والنصوص بتضمينات معيرة $I_i$ و $T_j$، تكون مصفوفة التشابه $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$، فتعظم عناصر القطر المتطابقة وتعاقب كافة الأزواج غير المتطابقة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch2_med_13",
      "titleEn": "[MEDIUM] Variational Autoencoders (VAEs) & Reparameterization Trick - Analysis 13",
      "titleAr": "[مستوى متوسط] المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick) - تحليل 13",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Variational Autoencoders (VAEs) & Reparameterization Trick, what is the precise analytical formulation or operative rule? (Item 13)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 13)",
      "optionsEn": [
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan."
      ],
      "optionsAr": [
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمكن حيلة إعادة المعلمة من تدفق التدرجات عبر العينات العشوائية بصياغة المتجه الكامن $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$، حيث $\\epsilon \\sim \\mathcal{N}(0, I)$ عينة ضوضاء عشوائية خارجية ثابتة.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG)."
      ],
      "correctAnswer": "The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.",
      "correctAnswerEn": "The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.",
      "correctAnswerAr": "تمكن حيلة إعادة المعلمة من تدفق التدرجات عبر العينات العشوائية بصياغة المتجه الكامن $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$، حيث $\\epsilon \\sim \\mathcal{N}(0, I)$ عينة ضوضاء عشوائية خارجية ثابتة.",
      "correctIndex": 1,
      "explanationEn": "Analytical Derivation & Properties: The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تمكن حيلة إعادة المعلمة من تدفق التدرجات عبر العينات العشوائية بصياغة المتجه الكامن $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$، حيث $\\epsilon \\sim \\mathcal{N}(0, I)$ عينة ضوضاء عشوائية خارجية ثابتة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Variational Autoencoders (VAEs) & Reparameterization Trick.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تمكن حيلة إعادة المعلمة من تدفق التدرجات عبر العينات العشوائية بصياغة المتجه الكامن $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$، حيث $\\epsilon \\sim \\mathcal{N}(0, I)$ عينة ضوضاء عشوائية خارجية ثابتة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch2_med_14",
      "titleEn": "[MEDIUM] Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM) - Analysis 14",
      "titleAr": "[مستوى متوسط] النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM) - تحليل 14",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM), what is the precise analytical formulation or operative rule? (Item 14)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 14)",
      "optionsEn": [
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تتبع العملية الأمامية التوزيع $q(x_t | x_{t-1}) = \\mathcal{N}(\\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$، وتتيح أخذ العينات مباشرة عند أي خطوة $t$ عبر $q(x_t | x_0) = \\mathcal{N}(\\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.",
      "correctAnswerEn": "The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.",
      "correctAnswerAr": "تتبع العملية الأمامية التوزيع $q(x_t | x_{t-1}) = \\mathcal{N}(\\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$، وتتيح أخذ العينات مباشرة عند أي خطوة $t$ عبر $q(x_t | x_0) = \\mathcal{N}(\\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$.",
      "correctIndex": 2,
      "explanationEn": "Analytical Derivation & Properties: The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تتبع العملية الأمامية التوزيع $q(x_t | x_{t-1}) = \\mathcal{N}(\\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$، وتتيح أخذ العينات مباشرة عند أي خطوة $t$ عبر $q(x_t | x_0) = \\mathcal{N}(\\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تتبع العملية الأمامية التوزيع $q(x_t | x_{t-1}) = \\mathcal{N}(\\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$، وتتيح أخذ العينات مباشرة عند أي خطوة $t$ عبر $q(x_t | x_0) = \\mathcal{N}(\\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch2_med_15",
      "titleEn": "[MEDIUM] Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment - Analysis 15",
      "titleAr": "[مستوى متوسط] التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط - تحليل 15",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment, what is the precise analytical formulation or operative rule? (Item 15)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 15)",
      "optionsEn": [
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs."
      ],
      "optionsAr": [
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "لحزمة من $N$ زوجاً من الصور والنصوص بتضمينات معيرة $I_i$ و $T_j$، تكون مصفوفة التشابه $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$، فتعظم عناصر القطر المتطابقة وتعاقب كافة الأزواج غير المتطابقة."
      ],
      "correctAnswer": "For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.",
      "correctAnswerEn": "For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.",
      "correctAnswerAr": "لحزمة من $N$ زوجاً من الصور والنصوص بتضمينات معيرة $I_i$ و $T_j$، تكون مصفوفة التشابه $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$، فتعظم عناصر القطر المتطابقة وتعاقب كافة الأزواج غير المتطابقة.",
      "correctIndex": 3,
      "explanationEn": "Analytical Derivation & Properties: For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: لحزمة من $N$ زوجاً من الصور والنصوص بتضمينات معيرة $I_i$ و $T_j$، تكون مصفوفة التشابه $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$، فتعظم عناصر القطر المتطابقة وتعاقب كافة الأزواج غير المتطابقة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: لحزمة من $N$ زوجاً من الصور والنصوص بتضمينات معيرة $I_i$ و $T_j$، تكون مصفوفة التشابه $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$، فتعظم عناصر القطر المتطابقة وتعاقب كافة الأزواج غير المتطابقة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch2_med_16",
      "titleEn": "[MEDIUM] Variational Autoencoders (VAEs) & Reparameterization Trick - Analysis 16",
      "titleAr": "[مستوى متوسط] المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick) - تحليل 16",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Variational Autoencoders (VAEs) & Reparameterization Trick, what is the precise analytical formulation or operative rule? (Item 16)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 16)",
      "optionsEn": [
        "The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves."
      ],
      "optionsAr": [
        "تمكن حيلة إعادة المعلمة من تدفق التدرجات عبر العينات العشوائية بصياغة المتجه الكامن $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$، حيث $\\epsilon \\sim \\mathcal{N}(0, I)$ عينة ضوضاء عشوائية خارجية ثابتة.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية."
      ],
      "correctAnswer": "The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.",
      "correctAnswerEn": "The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.",
      "correctAnswerAr": "تمكن حيلة إعادة المعلمة من تدفق التدرجات عبر العينات العشوائية بصياغة المتجه الكامن $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$، حيث $\\epsilon \\sim \\mathcal{N}(0, I)$ عينة ضوضاء عشوائية خارجية ثابتة.",
      "correctIndex": 0,
      "explanationEn": "Analytical Derivation & Properties: The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تمكن حيلة إعادة المعلمة من تدفق التدرجات عبر العينات العشوائية بصياغة المتجه الكامن $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$، حيث $\\epsilon \\sim \\mathcal{N}(0, I)$ عينة ضوضاء عشوائية خارجية ثابتة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Variational Autoencoders (VAEs) & Reparameterization Trick.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تمكن حيلة إعادة المعلمة من تدفق التدرجات عبر العينات العشوائية بصياغة المتجه الكامن $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$، حيث $\\epsilon \\sim \\mathcal{N}(0, I)$ عينة ضوضاء عشوائية خارجية ثابتة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch2_med_17",
      "titleEn": "[MEDIUM] Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM) - Analysis 17",
      "titleAr": "[مستوى متوسط] النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM) - تحليل 17",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM), what is the precise analytical formulation or operative rule? (Item 17)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 17)",
      "optionsEn": [
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تتبع العملية الأمامية التوزيع $q(x_t | x_{t-1}) = \\mathcal{N}(\\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$، وتتيح أخذ العينات مباشرة عند أي خطوة $t$ عبر $q(x_t | x_0) = \\mathcal{N}(\\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.",
      "correctAnswerEn": "The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.",
      "correctAnswerAr": "تتبع العملية الأمامية التوزيع $q(x_t | x_{t-1}) = \\mathcal{N}(\\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$، وتتيح أخذ العينات مباشرة عند أي خطوة $t$ عبر $q(x_t | x_0) = \\mathcal{N}(\\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$.",
      "correctIndex": 1,
      "explanationEn": "Analytical Derivation & Properties: The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تتبع العملية الأمامية التوزيع $q(x_t | x_{t-1}) = \\mathcal{N}(\\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$، وتتيح أخذ العينات مباشرة عند أي خطوة $t$ عبر $q(x_t | x_0) = \\mathcal{N}(\\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تتبع العملية الأمامية التوزيع $q(x_t | x_{t-1}) = \\mathcal{N}(\\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$، وتتيح أخذ العينات مباشرة عند أي خطوة $t$ عبر $q(x_t | x_0) = \\mathcal{N}(\\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch2_med_18",
      "titleEn": "[MEDIUM] Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment - Analysis 18",
      "titleAr": "[مستوى متوسط] التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط - تحليل 18",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment, what is the precise analytical formulation or operative rule? (Item 18)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 18)",
      "optionsEn": [
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation."
      ],
      "optionsAr": [
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "لحزمة من $N$ زوجاً من الصور والنصوص بتضمينات معيرة $I_i$ و $T_j$، تكون مصفوفة التشابه $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$، فتعظم عناصر القطر المتطابقة وتعاقب كافة الأزواج غير المتطابقة.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي."
      ],
      "correctAnswer": "For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.",
      "correctAnswerEn": "For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.",
      "correctAnswerAr": "لحزمة من $N$ زوجاً من الصور والنصوص بتضمينات معيرة $I_i$ و $T_j$، تكون مصفوفة التشابه $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$، فتعظم عناصر القطر المتطابقة وتعاقب كافة الأزواج غير المتطابقة.",
      "correctIndex": 2,
      "explanationEn": "Analytical Derivation & Properties: For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: لحزمة من $N$ زوجاً من الصور والنصوص بتضمينات معيرة $I_i$ و $T_j$، تكون مصفوفة التشابه $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$، فتعظم عناصر القطر المتطابقة وتعاقب كافة الأزواج غير المتطابقة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: لحزمة من $N$ زوجاً من الصور والنصوص بتضمينات معيرة $I_i$ و $T_j$، تكون مصفوفة التشابه $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$، فتعظم عناصر القطر المتطابقة وتعاقب كافة الأزواج غير المتطابقة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch2_med_19",
      "titleEn": "[MEDIUM] Variational Autoencoders (VAEs) & Reparameterization Trick - Analysis 19",
      "titleAr": "[مستوى متوسط] المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick) - تحليل 19",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Variational Autoencoders (VAEs) & Reparameterization Trick, what is the precise analytical formulation or operative rule? (Item 19)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 19)",
      "optionsEn": [
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample."
      ],
      "optionsAr": [
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "تمكن حيلة إعادة المعلمة من تدفق التدرجات عبر العينات العشوائية بصياغة المتجه الكامن $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$، حيث $\\epsilon \\sim \\mathcal{N}(0, I)$ عينة ضوضاء عشوائية خارجية ثابتة."
      ],
      "correctAnswer": "The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.",
      "correctAnswerEn": "The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.",
      "correctAnswerAr": "تمكن حيلة إعادة المعلمة من تدفق التدرجات عبر العينات العشوائية بصياغة المتجه الكامن $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$، حيث $\\epsilon \\sim \\mathcal{N}(0, I)$ عينة ضوضاء عشوائية خارجية ثابتة.",
      "correctIndex": 3,
      "explanationEn": "Analytical Derivation & Properties: The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تمكن حيلة إعادة المعلمة من تدفق التدرجات عبر العينات العشوائية بصياغة المتجه الكامن $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$، حيث $\\epsilon \\sim \\mathcal{N}(0, I)$ عينة ضوضاء عشوائية خارجية ثابتة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Variational Autoencoders (VAEs) & Reparameterization Trick.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تمكن حيلة إعادة المعلمة من تدفق التدرجات عبر العينات العشوائية بصياغة المتجه الكامن $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$، حيث $\\epsilon \\sim \\mathcal{N}(0, I)$ عينة ضوضاء عشوائية خارجية ثابتة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch2_med_20",
      "titleEn": "[MEDIUM] Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM) - Analysis 20",
      "titleAr": "[مستوى متوسط] النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM) - تحليل 20",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM), what is the precise analytical formulation or operative rule? (Item 20)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 20)",
      "optionsEn": [
        "The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.",
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "تتبع العملية الأمامية التوزيع $q(x_t | x_{t-1}) = \\mathcal{N}(\\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$، وتتيح أخذ العينات مباشرة عند أي خطوة $t$ عبر $q(x_t | x_0) = \\mathcal{N}(\\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$.",
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.",
      "correctAnswerEn": "The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.",
      "correctAnswerAr": "تتبع العملية الأمامية التوزيع $q(x_t | x_{t-1}) = \\mathcal{N}(\\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$، وتتيح أخذ العينات مباشرة عند أي خطوة $t$ عبر $q(x_t | x_0) = \\mathcal{N}(\\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$.",
      "correctIndex": 0,
      "explanationEn": "Analytical Derivation & Properties: The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تتبع العملية الأمامية التوزيع $q(x_t | x_{t-1}) = \\mathcal{N}(\\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$، وتتيح أخذ العينات مباشرة عند أي خطوة $t$ عبر $q(x_t | x_0) = \\mathcal{N}(\\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تتبع العملية الأمامية التوزيع $q(x_t | x_{t-1}) = \\mathcal{N}(\\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$، وتتيح أخذ العينات مباشرة عند أي خطوة $t$ عبر $q(x_t | x_0) = \\mathcal{N}(\\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch2_med_21",
      "titleEn": "[MEDIUM] Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment - Analysis 21",
      "titleAr": "[مستوى متوسط] التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط - تحليل 21",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment, what is the precise analytical formulation or operative rule? (Item 21)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 21)",
      "optionsEn": [
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.",
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step."
      ],
      "optionsAr": [
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "لحزمة من $N$ زوجاً من الصور والنصوص بتضمينات معيرة $I_i$ و $T_j$، تكون مصفوفة التشابه $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$، فتعظم عناصر القطر المتطابقة وتعاقب كافة الأزواج غير المتطابقة.",
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين."
      ],
      "correctAnswer": "For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.",
      "correctAnswerEn": "For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.",
      "correctAnswerAr": "لحزمة من $N$ زوجاً من الصور والنصوص بتضمينات معيرة $I_i$ و $T_j$، تكون مصفوفة التشابه $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$، فتعظم عناصر القطر المتطابقة وتعاقب كافة الأزواج غير المتطابقة.",
      "correctIndex": 1,
      "explanationEn": "Analytical Derivation & Properties: For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: لحزمة من $N$ زوجاً من الصور والنصوص بتضمينات معيرة $I_i$ و $T_j$، تكون مصفوفة التشابه $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$، فتعظم عناصر القطر المتطابقة وتعاقب كافة الأزواج غير المتطابقة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: لحزمة من $N$ زوجاً من الصور والنصوص بتضمينات معيرة $I_i$ و $T_j$، تكون مصفوفة التشابه $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$، فتعظم عناصر القطر المتطابقة وتعاقب كافة الأزواج غير المتطابقة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch2_med_22",
      "titleEn": "[MEDIUM] Variational Autoencoders (VAEs) & Reparameterization Trick - Analysis 22",
      "titleAr": "[مستوى متوسط] المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick) - تحليل 22",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Variational Autoencoders (VAEs) & Reparameterization Trick, what is the precise analytical formulation or operative rule? (Item 22)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 22)",
      "optionsEn": [
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.",
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance."
      ],
      "optionsAr": [
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "تمكن حيلة إعادة المعلمة من تدفق التدرجات عبر العينات العشوائية بصياغة المتجه الكامن $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$، حيث $\\epsilon \\sim \\mathcal{N}(0, I)$ عينة ضوضاء عشوائية خارجية ثابتة.",
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر."
      ],
      "correctAnswer": "The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.",
      "correctAnswerEn": "The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.",
      "correctAnswerAr": "تمكن حيلة إعادة المعلمة من تدفق التدرجات عبر العينات العشوائية بصياغة المتجه الكامن $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$، حيث $\\epsilon \\sim \\mathcal{N}(0, I)$ عينة ضوضاء عشوائية خارجية ثابتة.",
      "correctIndex": 2,
      "explanationEn": "Analytical Derivation & Properties: The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تمكن حيلة إعادة المعلمة من تدفق التدرجات عبر العينات العشوائية بصياغة المتجه الكامن $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$، حيث $\\epsilon \\sim \\mathcal{N}(0, I)$ عينة ضوضاء عشوائية خارجية ثابتة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Variational Autoencoders (VAEs) & Reparameterization Trick.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تمكن حيلة إعادة المعلمة من تدفق التدرجات عبر العينات العشوائية بصياغة المتجه الكامن $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$، حيث $\\epsilon \\sim \\mathcal{N}(0, I)$ عينة ضوضاء عشوائية خارجية ثابتة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch2_med_23",
      "titleEn": "[MEDIUM] Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM) - Analysis 23",
      "titleAr": "[مستوى متوسط] النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM) - تحليل 23",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM), what is the precise analytical formulation or operative rule? (Item 23)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 23)",
      "optionsEn": [
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$."
      ],
      "optionsAr": [
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تتبع العملية الأمامية التوزيع $q(x_t | x_{t-1}) = \\mathcal{N}(\\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$، وتتيح أخذ العينات مباشرة عند أي خطوة $t$ عبر $q(x_t | x_0) = \\mathcal{N}(\\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$."
      ],
      "correctAnswer": "The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.",
      "correctAnswerEn": "The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.",
      "correctAnswerAr": "تتبع العملية الأمامية التوزيع $q(x_t | x_{t-1}) = \\mathcal{N}(\\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$، وتتيح أخذ العينات مباشرة عند أي خطوة $t$ عبر $q(x_t | x_0) = \\mathcal{N}(\\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$.",
      "correctIndex": 3,
      "explanationEn": "Analytical Derivation & Properties: The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تتبع العملية الأمامية التوزيع $q(x_t | x_{t-1}) = \\mathcal{N}(\\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$، وتتيح أخذ العينات مباشرة عند أي خطوة $t$ عبر $q(x_t | x_0) = \\mathcal{N}(\\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تتبع العملية الأمامية التوزيع $q(x_t | x_{t-1}) = \\mathcal{N}(\\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$، وتتيح أخذ العينات مباشرة عند أي خطوة $t$ عبر $q(x_t | x_0) = \\mathcal{N}(\\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch2_med_24",
      "titleEn": "[MEDIUM] Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment - Analysis 24",
      "titleAr": "[مستوى متوسط] التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط - تحليل 24",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment, what is the precise analytical formulation or operative rule? (Item 24)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 24)",
      "optionsEn": [
        "For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs."
      ],
      "optionsAr": [
        "لحزمة من $N$ زوجاً من الصور والنصوص بتضمينات معيرة $I_i$ و $T_j$، تكون مصفوفة التشابه $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$، فتعظم عناصر القطر المتطابقة وتعاقب كافة الأزواج غير المتطابقة.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة."
      ],
      "correctAnswer": "For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.",
      "correctAnswerEn": "For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.",
      "correctAnswerAr": "لحزمة من $N$ زوجاً من الصور والنصوص بتضمينات معيرة $I_i$ و $T_j$، تكون مصفوفة التشابه $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$، فتعظم عناصر القطر المتطابقة وتعاقب كافة الأزواج غير المتطابقة.",
      "correctIndex": 0,
      "explanationEn": "Analytical Derivation & Properties: For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: لحزمة من $N$ زوجاً من الصور والنصوص بتضمينات معيرة $I_i$ و $T_j$، تكون مصفوفة التشابه $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$، فتعظم عناصر القطر المتطابقة وتعاقب كافة الأزواج غير المتطابقة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: لحزمة من $N$ زوجاً من الصور والنصوص بتضمينات معيرة $I_i$ و $T_j$، تكون مصفوفة التشابه $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$، فتعظم عناصر القطر المتطابقة وتعاقب كافة الأزواج غير المتطابقة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch2_med_25",
      "titleEn": "[MEDIUM] Variational Autoencoders (VAEs) & Reparameterization Trick - Analysis 25",
      "titleAr": "[مستوى متوسط] المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick) - تحليل 25",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Variational Autoencoders (VAEs) & Reparameterization Trick, what is the precise analytical formulation or operative rule? (Item 25)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 25)",
      "optionsEn": [
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence."
      ],
      "optionsAr": [
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تمكن حيلة إعادة المعلمة من تدفق التدرجات عبر العينات العشوائية بصياغة المتجه الكامن $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$، حيث $\\epsilon \\sim \\mathcal{N}(0, I)$ عينة ضوضاء عشوائية خارجية ثابتة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية."
      ],
      "correctAnswer": "The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.",
      "correctAnswerEn": "The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.",
      "correctAnswerAr": "تمكن حيلة إعادة المعلمة من تدفق التدرجات عبر العينات العشوائية بصياغة المتجه الكامن $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$، حيث $\\epsilon \\sim \\mathcal{N}(0, I)$ عينة ضوضاء عشوائية خارجية ثابتة.",
      "correctIndex": 1,
      "explanationEn": "Analytical Derivation & Properties: The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تمكن حيلة إعادة المعلمة من تدفق التدرجات عبر العينات العشوائية بصياغة المتجه الكامن $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$، حيث $\\epsilon \\sim \\mathcal{N}(0, I)$ عينة ضوضاء عشوائية خارجية ثابتة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Variational Autoencoders (VAEs) & Reparameterization Trick.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تمكن حيلة إعادة المعلمة من تدفق التدرجات عبر العينات العشوائية بصياغة المتجه الكامن $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$، حيث $\\epsilon \\sim \\mathcal{N}(0, I)$ عينة ضوضاء عشوائية خارجية ثابتة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch2_med_26",
      "titleEn": "[MEDIUM] Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM) - Analysis 26",
      "titleAr": "[مستوى متوسط] النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM) - تحليل 26",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM), what is the precise analytical formulation or operative rule? (Item 26)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 26)",
      "optionsEn": [
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تتبع العملية الأمامية التوزيع $q(x_t | x_{t-1}) = \\mathcal{N}(\\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$، وتتيح أخذ العينات مباشرة عند أي خطوة $t$ عبر $q(x_t | x_0) = \\mathcal{N}(\\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.",
      "correctAnswerEn": "The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.",
      "correctAnswerAr": "تتبع العملية الأمامية التوزيع $q(x_t | x_{t-1}) = \\mathcal{N}(\\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$، وتتيح أخذ العينات مباشرة عند أي خطوة $t$ عبر $q(x_t | x_0) = \\mathcal{N}(\\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$.",
      "correctIndex": 2,
      "explanationEn": "Analytical Derivation & Properties: The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تتبع العملية الأمامية التوزيع $q(x_t | x_{t-1}) = \\mathcal{N}(\\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$، وتتيح أخذ العينات مباشرة عند أي خطوة $t$ عبر $q(x_t | x_0) = \\mathcal{N}(\\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تتبع العملية الأمامية التوزيع $q(x_t | x_{t-1}) = \\mathcal{N}(\\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$، وتتيح أخذ العينات مباشرة عند أي خطوة $t$ عبر $q(x_t | x_0) = \\mathcal{N}(\\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch2_med_27",
      "titleEn": "[MEDIUM] Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment - Analysis 27",
      "titleAr": "[مستوى متوسط] التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط - تحليل 27",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment, what is the precise analytical formulation or operative rule? (Item 27)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 27)",
      "optionsEn": [
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs."
      ],
      "optionsAr": [
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "لحزمة من $N$ زوجاً من الصور والنصوص بتضمينات معيرة $I_i$ و $T_j$، تكون مصفوفة التشابه $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$، فتعظم عناصر القطر المتطابقة وتعاقب كافة الأزواج غير المتطابقة."
      ],
      "correctAnswer": "For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.",
      "correctAnswerEn": "For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.",
      "correctAnswerAr": "لحزمة من $N$ زوجاً من الصور والنصوص بتضمينات معيرة $I_i$ و $T_j$، تكون مصفوفة التشابه $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$، فتعظم عناصر القطر المتطابقة وتعاقب كافة الأزواج غير المتطابقة.",
      "correctIndex": 3,
      "explanationEn": "Analytical Derivation & Properties: For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: لحزمة من $N$ زوجاً من الصور والنصوص بتضمينات معيرة $I_i$ و $T_j$، تكون مصفوفة التشابه $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$، فتعظم عناصر القطر المتطابقة وتعاقب كافة الأزواج غير المتطابقة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: لحزمة من $N$ زوجاً من الصور والنصوص بتضمينات معيرة $I_i$ و $T_j$، تكون مصفوفة التشابه $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$، فتعظم عناصر القطر المتطابقة وتعاقب كافة الأزواج غير المتطابقة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch2_med_28",
      "titleEn": "[MEDIUM] Variational Autoencoders (VAEs) & Reparameterization Trick - Analysis 28",
      "titleAr": "[مستوى متوسط] المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick) - تحليل 28",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Variational Autoencoders (VAEs) & Reparameterization Trick, what is the precise analytical formulation or operative rule? (Item 28)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 28)",
      "optionsEn": [
        "The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan."
      ],
      "optionsAr": [
        "تمكن حيلة إعادة المعلمة من تدفق التدرجات عبر العينات العشوائية بصياغة المتجه الكامن $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$، حيث $\\epsilon \\sim \\mathcal{N}(0, I)$ عينة ضوضاء عشوائية خارجية ثابتة.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG)."
      ],
      "correctAnswer": "The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.",
      "correctAnswerEn": "The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.",
      "correctAnswerAr": "تمكن حيلة إعادة المعلمة من تدفق التدرجات عبر العينات العشوائية بصياغة المتجه الكامن $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$، حيث $\\epsilon \\sim \\mathcal{N}(0, I)$ عينة ضوضاء عشوائية خارجية ثابتة.",
      "correctIndex": 0,
      "explanationEn": "Analytical Derivation & Properties: The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تمكن حيلة إعادة المعلمة من تدفق التدرجات عبر العينات العشوائية بصياغة المتجه الكامن $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$، حيث $\\epsilon \\sim \\mathcal{N}(0, I)$ عينة ضوضاء عشوائية خارجية ثابتة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Variational Autoencoders (VAEs) & Reparameterization Trick.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تمكن حيلة إعادة المعلمة من تدفق التدرجات عبر العينات العشوائية بصياغة المتجه الكامن $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$، حيث $\\epsilon \\sim \\mathcal{N}(0, I)$ عينة ضوضاء عشوائية خارجية ثابتة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch2_med_29",
      "titleEn": "[MEDIUM] Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM) - Analysis 29",
      "titleAr": "[مستوى متوسط] النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM) - تحليل 29",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM), what is the precise analytical formulation or operative rule? (Item 29)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 29)",
      "optionsEn": [
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تتبع العملية الأمامية التوزيع $q(x_t | x_{t-1}) = \\mathcal{N}(\\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$، وتتيح أخذ العينات مباشرة عند أي خطوة $t$ عبر $q(x_t | x_0) = \\mathcal{N}(\\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.",
      "correctAnswerEn": "The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.",
      "correctAnswerAr": "تتبع العملية الأمامية التوزيع $q(x_t | x_{t-1}) = \\mathcal{N}(\\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$، وتتيح أخذ العينات مباشرة عند أي خطوة $t$ عبر $q(x_t | x_0) = \\mathcal{N}(\\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$.",
      "correctIndex": 1,
      "explanationEn": "Analytical Derivation & Properties: The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تتبع العملية الأمامية التوزيع $q(x_t | x_{t-1}) = \\mathcal{N}(\\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$، وتتيح أخذ العينات مباشرة عند أي خطوة $t$ عبر $q(x_t | x_0) = \\mathcal{N}(\\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تتبع العملية الأمامية التوزيع $q(x_t | x_{t-1}) = \\mathcal{N}(\\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$، وتتيح أخذ العينات مباشرة عند أي خطوة $t$ عبر $q(x_t | x_0) = \\mathcal{N}(\\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch2_med_30",
      "titleEn": "[MEDIUM] Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment - Analysis 30",
      "titleAr": "[مستوى متوسط] التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط - تحليل 30",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment, what is the precise analytical formulation or operative rule? (Item 30)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 30)",
      "optionsEn": [
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate."
      ],
      "optionsAr": [
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "لحزمة من $N$ زوجاً من الصور والنصوص بتضمينات معيرة $I_i$ و $T_j$، تكون مصفوفة التشابه $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$، فتعظم عناصر القطر المتطابقة وتعاقب كافة الأزواج غير المتطابقة.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم."
      ],
      "correctAnswer": "For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.",
      "correctAnswerEn": "For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.",
      "correctAnswerAr": "لحزمة من $N$ زوجاً من الصور والنصوص بتضمينات معيرة $I_i$ و $T_j$، تكون مصفوفة التشابه $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$، فتعظم عناصر القطر المتطابقة وتعاقب كافة الأزواج غير المتطابقة.",
      "correctIndex": 2,
      "explanationEn": "Analytical Derivation & Properties: For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: لحزمة من $N$ زوجاً من الصور والنصوص بتضمينات معيرة $I_i$ و $T_j$، تكون مصفوفة التشابه $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$، فتعظم عناصر القطر المتطابقة وتعاقب كافة الأزواج غير المتطابقة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: لحزمة من $N$ زوجاً من الصور والنصوص بتضمينات معيرة $I_i$ و $T_j$، تكون مصفوفة التشابه $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$، فتعظم عناصر القطر المتطابقة وتعاقب كافة الأزواج غير المتطابقة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch2_med_31",
      "titleEn": "[MEDIUM] Variational Autoencoders (VAEs) & Reparameterization Trick - Analysis 31",
      "titleAr": "[مستوى متوسط] المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick) - تحليل 31",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Variational Autoencoders (VAEs) & Reparameterization Trick, what is the precise analytical formulation or operative rule? (Item 31)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 31)",
      "optionsEn": [
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample."
      ],
      "optionsAr": [
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تمكن حيلة إعادة المعلمة من تدفق التدرجات عبر العينات العشوائية بصياغة المتجه الكامن $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$، حيث $\\epsilon \\sim \\mathcal{N}(0, I)$ عينة ضوضاء عشوائية خارجية ثابتة."
      ],
      "correctAnswer": "The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.",
      "correctAnswerEn": "The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.",
      "correctAnswerAr": "تمكن حيلة إعادة المعلمة من تدفق التدرجات عبر العينات العشوائية بصياغة المتجه الكامن $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$، حيث $\\epsilon \\sim \\mathcal{N}(0, I)$ عينة ضوضاء عشوائية خارجية ثابتة.",
      "correctIndex": 3,
      "explanationEn": "Analytical Derivation & Properties: The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تمكن حيلة إعادة المعلمة من تدفق التدرجات عبر العينات العشوائية بصياغة المتجه الكامن $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$، حيث $\\epsilon \\sim \\mathcal{N}(0, I)$ عينة ضوضاء عشوائية خارجية ثابتة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Variational Autoencoders (VAEs) & Reparameterization Trick.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تمكن حيلة إعادة المعلمة من تدفق التدرجات عبر العينات العشوائية بصياغة المتجه الكامن $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$، حيث $\\epsilon \\sim \\mathcal{N}(0, I)$ عينة ضوضاء عشوائية خارجية ثابتة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch2_med_32",
      "titleEn": "[MEDIUM] Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM) - Analysis 32",
      "titleAr": "[مستوى متوسط] النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM) - تحليل 32",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM), what is the precise analytical formulation or operative rule? (Item 32)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 32)",
      "optionsEn": [
        "The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.",
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "تتبع العملية الأمامية التوزيع $q(x_t | x_{t-1}) = \\mathcal{N}(\\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$، وتتيح أخذ العينات مباشرة عند أي خطوة $t$ عبر $q(x_t | x_0) = \\mathcal{N}(\\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$.",
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.",
      "correctAnswerEn": "The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.",
      "correctAnswerAr": "تتبع العملية الأمامية التوزيع $q(x_t | x_{t-1}) = \\mathcal{N}(\\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$، وتتيح أخذ العينات مباشرة عند أي خطوة $t$ عبر $q(x_t | x_0) = \\mathcal{N}(\\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$.",
      "correctIndex": 0,
      "explanationEn": "Analytical Derivation & Properties: The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تتبع العملية الأمامية التوزيع $q(x_t | x_{t-1}) = \\mathcal{N}(\\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$، وتتيح أخذ العينات مباشرة عند أي خطوة $t$ عبر $q(x_t | x_0) = \\mathcal{N}(\\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تتبع العملية الأمامية التوزيع $q(x_t | x_{t-1}) = \\mathcal{N}(\\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$، وتتيح أخذ العينات مباشرة عند أي خطوة $t$ عبر $q(x_t | x_0) = \\mathcal{N}(\\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch2_med_33",
      "titleEn": "[MEDIUM] Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment - Analysis 33",
      "titleAr": "[مستوى متوسط] التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط - تحليل 33",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment, what is the precise analytical formulation or operative rule? (Item 33)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 33)",
      "optionsEn": [
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.",
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation."
      ],
      "optionsAr": [
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "لحزمة من $N$ زوجاً من الصور والنصوص بتضمينات معيرة $I_i$ و $T_j$، تكون مصفوفة التشابه $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$، فتعظم عناصر القطر المتطابقة وتعاقب كافة الأزواج غير المتطابقة.",
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي."
      ],
      "correctAnswer": "For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.",
      "correctAnswerEn": "For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.",
      "correctAnswerAr": "لحزمة من $N$ زوجاً من الصور والنصوص بتضمينات معيرة $I_i$ و $T_j$، تكون مصفوفة التشابه $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$، فتعظم عناصر القطر المتطابقة وتعاقب كافة الأزواج غير المتطابقة.",
      "correctIndex": 1,
      "explanationEn": "Analytical Derivation & Properties: For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: لحزمة من $N$ زوجاً من الصور والنصوص بتضمينات معيرة $I_i$ و $T_j$، تكون مصفوفة التشابه $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$، فتعظم عناصر القطر المتطابقة وتعاقب كافة الأزواج غير المتطابقة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: لحزمة من $N$ زوجاً من الصور والنصوص بتضمينات معيرة $I_i$ و $T_j$، تكون مصفوفة التشابه $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$، فتعظم عناصر القطر المتطابقة وتعاقب كافة الأزواج غير المتطابقة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch2_med_34",
      "titleEn": "[MEDIUM] Variational Autoencoders (VAEs) & Reparameterization Trick - Analysis 34",
      "titleAr": "[مستوى متوسط] المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick) - تحليل 34",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Variational Autoencoders (VAEs) & Reparameterization Trick, what is the precise analytical formulation or operative rule? (Item 34)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 34)",
      "optionsEn": [
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.",
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent."
      ],
      "optionsAr": [
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "تمكن حيلة إعادة المعلمة من تدفق التدرجات عبر العينات العشوائية بصياغة المتجه الكامن $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$، حيث $\\epsilon \\sim \\mathcal{N}(0, I)$ عينة ضوضاء عشوائية خارجية ثابتة.",
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة."
      ],
      "correctAnswer": "The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.",
      "correctAnswerEn": "The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.",
      "correctAnswerAr": "تمكن حيلة إعادة المعلمة من تدفق التدرجات عبر العينات العشوائية بصياغة المتجه الكامن $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$، حيث $\\epsilon \\sim \\mathcal{N}(0, I)$ عينة ضوضاء عشوائية خارجية ثابتة.",
      "correctIndex": 2,
      "explanationEn": "Analytical Derivation & Properties: The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تمكن حيلة إعادة المعلمة من تدفق التدرجات عبر العينات العشوائية بصياغة المتجه الكامن $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$، حيث $\\epsilon \\sim \\mathcal{N}(0, I)$ عينة ضوضاء عشوائية خارجية ثابتة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Variational Autoencoders (VAEs) & Reparameterization Trick.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تمكن حيلة إعادة المعلمة من تدفق التدرجات عبر العينات العشوائية بصياغة المتجه الكامن $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$، حيث $\\epsilon \\sim \\mathcal{N}(0, I)$ عينة ضوضاء عشوائية خارجية ثابتة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch2_med_35",
      "titleEn": "[MEDIUM] Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM) - Analysis 35",
      "titleAr": "[مستوى متوسط] النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM) - تحليل 35",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM), what is the precise analytical formulation or operative rule? (Item 35)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 35)",
      "optionsEn": [
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$."
      ],
      "optionsAr": [
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تتبع العملية الأمامية التوزيع $q(x_t | x_{t-1}) = \\mathcal{N}(\\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$، وتتيح أخذ العينات مباشرة عند أي خطوة $t$ عبر $q(x_t | x_0) = \\mathcal{N}(\\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$."
      ],
      "correctAnswer": "The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.",
      "correctAnswerEn": "The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.",
      "correctAnswerAr": "تتبع العملية الأمامية التوزيع $q(x_t | x_{t-1}) = \\mathcal{N}(\\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$، وتتيح أخذ العينات مباشرة عند أي خطوة $t$ عبر $q(x_t | x_0) = \\mathcal{N}(\\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$.",
      "correctIndex": 3,
      "explanationEn": "Analytical Derivation & Properties: The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تتبع العملية الأمامية التوزيع $q(x_t | x_{t-1}) = \\mathcal{N}(\\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$، وتتيح أخذ العينات مباشرة عند أي خطوة $t$ عبر $q(x_t | x_0) = \\mathcal{N}(\\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تتبع العملية الأمامية التوزيع $q(x_t | x_{t-1}) = \\mathcal{N}(\\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$، وتتيح أخذ العينات مباشرة عند أي خطوة $t$ عبر $q(x_t | x_0) = \\mathcal{N}(\\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch2_med_36",
      "titleEn": "[MEDIUM] Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment - Analysis 36",
      "titleAr": "[مستوى متوسط] التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط - تحليل 36",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment, what is the precise analytical formulation or operative rule? (Item 36)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 36)",
      "optionsEn": [
        "For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step."
      ],
      "optionsAr": [
        "لحزمة من $N$ زوجاً من الصور والنصوص بتضمينات معيرة $I_i$ و $T_j$، تكون مصفوفة التشابه $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$، فتعظم عناصر القطر المتطابقة وتعاقب كافة الأزواج غير المتطابقة.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين."
      ],
      "correctAnswer": "For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.",
      "correctAnswerEn": "For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.",
      "correctAnswerAr": "لحزمة من $N$ زوجاً من الصور والنصوص بتضمينات معيرة $I_i$ و $T_j$، تكون مصفوفة التشابه $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$، فتعظم عناصر القطر المتطابقة وتعاقب كافة الأزواج غير المتطابقة.",
      "correctIndex": 0,
      "explanationEn": "Analytical Derivation & Properties: For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: لحزمة من $N$ زوجاً من الصور والنصوص بتضمينات معيرة $I_i$ و $T_j$، تكون مصفوفة التشابه $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$، فتعظم عناصر القطر المتطابقة وتعاقب كافة الأزواج غير المتطابقة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: لحزمة من $N$ زوجاً من الصور والنصوص بتضمينات معيرة $I_i$ و $T_j$، تكون مصفوفة التشابه $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$، فتعظم عناصر القطر المتطابقة وتعاقب كافة الأزواج غير المتطابقة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch2_med_37",
      "titleEn": "[MEDIUM] Variational Autoencoders (VAEs) & Reparameterization Trick - Analysis 37",
      "titleAr": "[مستوى متوسط] المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick) - تحليل 37",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Variational Autoencoders (VAEs) & Reparameterization Trick, what is the precise analytical formulation or operative rule? (Item 37)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 37)",
      "optionsEn": [
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance."
      ],
      "optionsAr": [
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تمكن حيلة إعادة المعلمة من تدفق التدرجات عبر العينات العشوائية بصياغة المتجه الكامن $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$، حيث $\\epsilon \\sim \\mathcal{N}(0, I)$ عينة ضوضاء عشوائية خارجية ثابتة.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر."
      ],
      "correctAnswer": "The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.",
      "correctAnswerEn": "The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.",
      "correctAnswerAr": "تمكن حيلة إعادة المعلمة من تدفق التدرجات عبر العينات العشوائية بصياغة المتجه الكامن $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$، حيث $\\epsilon \\sim \\mathcal{N}(0, I)$ عينة ضوضاء عشوائية خارجية ثابتة.",
      "correctIndex": 1,
      "explanationEn": "Analytical Derivation & Properties: The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تمكن حيلة إعادة المعلمة من تدفق التدرجات عبر العينات العشوائية بصياغة المتجه الكامن $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$، حيث $\\epsilon \\sim \\mathcal{N}(0, I)$ عينة ضوضاء عشوائية خارجية ثابتة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Variational Autoencoders (VAEs) & Reparameterization Trick.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تمكن حيلة إعادة المعلمة من تدفق التدرجات عبر العينات العشوائية بصياغة المتجه الكامن $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$، حيث $\\epsilon \\sim \\mathcal{N}(0, I)$ عينة ضوضاء عشوائية خارجية ثابتة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch2_med_38",
      "titleEn": "[MEDIUM] Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM) - Analysis 38",
      "titleAr": "[مستوى متوسط] النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM) - تحليل 38",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM), what is the precise analytical formulation or operative rule? (Item 38)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 38)",
      "optionsEn": [
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "تتبع العملية الأمامية التوزيع $q(x_t | x_{t-1}) = \\mathcal{N}(\\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$، وتتيح أخذ العينات مباشرة عند أي خطوة $t$ عبر $q(x_t | x_0) = \\mathcal{N}(\\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.",
      "correctAnswerEn": "The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.",
      "correctAnswerAr": "تتبع العملية الأمامية التوزيع $q(x_t | x_{t-1}) = \\mathcal{N}(\\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$، وتتيح أخذ العينات مباشرة عند أي خطوة $t$ عبر $q(x_t | x_0) = \\mathcal{N}(\\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$.",
      "correctIndex": 2,
      "explanationEn": "Analytical Derivation & Properties: The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تتبع العملية الأمامية التوزيع $q(x_t | x_{t-1}) = \\mathcal{N}(\\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$، وتتيح أخذ العينات مباشرة عند أي خطوة $t$ عبر $q(x_t | x_0) = \\mathcal{N}(\\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تتبع العملية الأمامية التوزيع $q(x_t | x_{t-1}) = \\mathcal{N}(\\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$، وتتيح أخذ العينات مباشرة عند أي خطوة $t$ عبر $q(x_t | x_0) = \\mathcal{N}(\\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch2_med_39",
      "titleEn": "[MEDIUM] Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment - Analysis 39",
      "titleAr": "[مستوى متوسط] التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط - تحليل 39",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment, what is the precise analytical formulation or operative rule? (Item 39)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 39)",
      "optionsEn": [
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs."
      ],
      "optionsAr": [
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "لحزمة من $N$ زوجاً من الصور والنصوص بتضمينات معيرة $I_i$ و $T_j$، تكون مصفوفة التشابه $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$، فتعظم عناصر القطر المتطابقة وتعاقب كافة الأزواج غير المتطابقة."
      ],
      "correctAnswer": "For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.",
      "correctAnswerEn": "For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.",
      "correctAnswerAr": "لحزمة من $N$ زوجاً من الصور والنصوص بتضمينات معيرة $I_i$ و $T_j$، تكون مصفوفة التشابه $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$، فتعظم عناصر القطر المتطابقة وتعاقب كافة الأزواج غير المتطابقة.",
      "correctIndex": 3,
      "explanationEn": "Analytical Derivation & Properties: For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: لحزمة من $N$ زوجاً من الصور والنصوص بتضمينات معيرة $I_i$ و $T_j$، تكون مصفوفة التشابه $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$، فتعظم عناصر القطر المتطابقة وتعاقب كافة الأزواج غير المتطابقة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: لحزمة من $N$ زوجاً من الصور والنصوص بتضمينات معيرة $I_i$ و $T_j$، تكون مصفوفة التشابه $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$، فتعظم عناصر القطر المتطابقة وتعاقب كافة الأزواج غير المتطابقة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch2_med_40",
      "titleEn": "[MEDIUM] Variational Autoencoders (VAEs) & Reparameterization Trick - Analysis 40",
      "titleAr": "[مستوى متوسط] المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick) - تحليل 40",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Variational Autoencoders (VAEs) & Reparameterization Trick, what is the precise analytical formulation or operative rule? (Item 40)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 40)",
      "optionsEn": [
        "The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence."
      ],
      "optionsAr": [
        "تمكن حيلة إعادة المعلمة من تدفق التدرجات عبر العينات العشوائية بصياغة المتجه الكامن $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$، حيث $\\epsilon \\sim \\mathcal{N}(0, I)$ عينة ضوضاء عشوائية خارجية ثابتة.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية."
      ],
      "correctAnswer": "The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.",
      "correctAnswerEn": "The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.",
      "correctAnswerAr": "تمكن حيلة إعادة المعلمة من تدفق التدرجات عبر العينات العشوائية بصياغة المتجه الكامن $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$، حيث $\\epsilon \\sim \\mathcal{N}(0, I)$ عينة ضوضاء عشوائية خارجية ثابتة.",
      "correctIndex": 0,
      "explanationEn": "Analytical Derivation & Properties: The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تمكن حيلة إعادة المعلمة من تدفق التدرجات عبر العينات العشوائية بصياغة المتجه الكامن $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$، حيث $\\epsilon \\sim \\mathcal{N}(0, I)$ عينة ضوضاء عشوائية خارجية ثابتة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Variational Autoencoders (VAEs) & Reparameterization Trick.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تمكن حيلة إعادة المعلمة من تدفق التدرجات عبر العينات العشوائية بصياغة المتجه الكامن $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$، حيث $\\epsilon \\sim \\mathcal{N}(0, I)$ عينة ضوضاء عشوائية خارجية ثابتة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch2_med_41",
      "titleEn": "[MEDIUM] Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM) - Analysis 41",
      "titleAr": "[مستوى متوسط] النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM) - تحليل 41",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM), what is the precise analytical formulation or operative rule? (Item 41)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 41)",
      "optionsEn": [
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تتبع العملية الأمامية التوزيع $q(x_t | x_{t-1}) = \\mathcal{N}(\\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$، وتتيح أخذ العينات مباشرة عند أي خطوة $t$ عبر $q(x_t | x_0) = \\mathcal{N}(\\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.",
      "correctAnswerEn": "The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.",
      "correctAnswerAr": "تتبع العملية الأمامية التوزيع $q(x_t | x_{t-1}) = \\mathcal{N}(\\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$، وتتيح أخذ العينات مباشرة عند أي خطوة $t$ عبر $q(x_t | x_0) = \\mathcal{N}(\\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$.",
      "correctIndex": 1,
      "explanationEn": "Analytical Derivation & Properties: The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تتبع العملية الأمامية التوزيع $q(x_t | x_{t-1}) = \\mathcal{N}(\\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$، وتتيح أخذ العينات مباشرة عند أي خطوة $t$ عبر $q(x_t | x_0) = \\mathcal{N}(\\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تتبع العملية الأمامية التوزيع $q(x_t | x_{t-1}) = \\mathcal{N}(\\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$، وتتيح أخذ العينات مباشرة عند أي خطوة $t$ عبر $q(x_t | x_0) = \\mathcal{N}(\\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch2_med_42",
      "titleEn": "[MEDIUM] Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment - Analysis 42",
      "titleAr": "[مستوى متوسط] التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط - تحليل 42",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment, what is the precise analytical formulation or operative rule? (Item 42)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 42)",
      "optionsEn": [
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data."
      ],
      "optionsAr": [
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "لحزمة من $N$ زوجاً من الصور والنصوص بتضمينات معيرة $I_i$ و $T_j$، تكون مصفوفة التشابه $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$، فتعظم عناصر القطر المتطابقة وتعاقب كافة الأزواج غير المتطابقة.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش."
      ],
      "correctAnswer": "For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.",
      "correctAnswerEn": "For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.",
      "correctAnswerAr": "لحزمة من $N$ زوجاً من الصور والنصوص بتضمينات معيرة $I_i$ و $T_j$، تكون مصفوفة التشابه $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$، فتعظم عناصر القطر المتطابقة وتعاقب كافة الأزواج غير المتطابقة.",
      "correctIndex": 2,
      "explanationEn": "Analytical Derivation & Properties: For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: لحزمة من $N$ زوجاً من الصور والنصوص بتضمينات معيرة $I_i$ و $T_j$، تكون مصفوفة التشابه $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$، فتعظم عناصر القطر المتطابقة وتعاقب كافة الأزواج غير المتطابقة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: لحزمة من $N$ زوجاً من الصور والنصوص بتضمينات معيرة $I_i$ و $T_j$، تكون مصفوفة التشابه $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$، فتعظم عناصر القطر المتطابقة وتعاقب كافة الأزواج غير المتطابقة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch2_med_43",
      "titleEn": "[MEDIUM] Variational Autoencoders (VAEs) & Reparameterization Trick - Analysis 43",
      "titleAr": "[مستوى متوسط] المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick) - تحليل 43",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Variational Autoencoders (VAEs) & Reparameterization Trick, what is the precise analytical formulation or operative rule? (Item 43)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 43)",
      "optionsEn": [
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample."
      ],
      "optionsAr": [
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تمكن حيلة إعادة المعلمة من تدفق التدرجات عبر العينات العشوائية بصياغة المتجه الكامن $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$، حيث $\\epsilon \\sim \\mathcal{N}(0, I)$ عينة ضوضاء عشوائية خارجية ثابتة."
      ],
      "correctAnswer": "The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.",
      "correctAnswerEn": "The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.",
      "correctAnswerAr": "تمكن حيلة إعادة المعلمة من تدفق التدرجات عبر العينات العشوائية بصياغة المتجه الكامن $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$، حيث $\\epsilon \\sim \\mathcal{N}(0, I)$ عينة ضوضاء عشوائية خارجية ثابتة.",
      "correctIndex": 3,
      "explanationEn": "Analytical Derivation & Properties: The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تمكن حيلة إعادة المعلمة من تدفق التدرجات عبر العينات العشوائية بصياغة المتجه الكامن $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$، حيث $\\epsilon \\sim \\mathcal{N}(0, I)$ عينة ضوضاء عشوائية خارجية ثابتة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Variational Autoencoders (VAEs) & Reparameterization Trick.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تمكن حيلة إعادة المعلمة من تدفق التدرجات عبر العينات العشوائية بصياغة المتجه الكامن $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$، حيث $\\epsilon \\sim \\mathcal{N}(0, I)$ عينة ضوضاء عشوائية خارجية ثابتة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch2_med_44",
      "titleEn": "[MEDIUM] Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM) - Analysis 44",
      "titleAr": "[مستوى متوسط] النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM) - تحليل 44",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM), what is the precise analytical formulation or operative rule? (Item 44)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 44)",
      "optionsEn": [
        "The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.",
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تتبع العملية الأمامية التوزيع $q(x_t | x_{t-1}) = \\mathcal{N}(\\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$، وتتيح أخذ العينات مباشرة عند أي خطوة $t$ عبر $q(x_t | x_0) = \\mathcal{N}(\\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$.",
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.",
      "correctAnswerEn": "The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.",
      "correctAnswerAr": "تتبع العملية الأمامية التوزيع $q(x_t | x_{t-1}) = \\mathcal{N}(\\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$، وتتيح أخذ العينات مباشرة عند أي خطوة $t$ عبر $q(x_t | x_0) = \\mathcal{N}(\\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$.",
      "correctIndex": 0,
      "explanationEn": "Analytical Derivation & Properties: The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تتبع العملية الأمامية التوزيع $q(x_t | x_{t-1}) = \\mathcal{N}(\\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$، وتتيح أخذ العينات مباشرة عند أي خطوة $t$ عبر $q(x_t | x_0) = \\mathcal{N}(\\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تتبع العملية الأمامية التوزيع $q(x_t | x_{t-1}) = \\mathcal{N}(\\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$، وتتيح أخذ العينات مباشرة عند أي خطوة $t$ عبر $q(x_t | x_0) = \\mathcal{N}(\\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch2_med_45",
      "titleEn": "[MEDIUM] Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment - Analysis 45",
      "titleAr": "[مستوى متوسط] التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط - تحليل 45",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment, what is the precise analytical formulation or operative rule? (Item 45)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 45)",
      "optionsEn": [
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.",
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate."
      ],
      "optionsAr": [
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "لحزمة من $N$ زوجاً من الصور والنصوص بتضمينات معيرة $I_i$ و $T_j$، تكون مصفوفة التشابه $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$، فتعظم عناصر القطر المتطابقة وتعاقب كافة الأزواج غير المتطابقة.",
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم."
      ],
      "correctAnswer": "For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.",
      "correctAnswerEn": "For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.",
      "correctAnswerAr": "لحزمة من $N$ زوجاً من الصور والنصوص بتضمينات معيرة $I_i$ و $T_j$، تكون مصفوفة التشابه $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$، فتعظم عناصر القطر المتطابقة وتعاقب كافة الأزواج غير المتطابقة.",
      "correctIndex": 1,
      "explanationEn": "Analytical Derivation & Properties: For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: لحزمة من $N$ زوجاً من الصور والنصوص بتضمينات معيرة $I_i$ و $T_j$، تكون مصفوفة التشابه $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$، فتعظم عناصر القطر المتطابقة وتعاقب كافة الأزواج غير المتطابقة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: لحزمة من $N$ زوجاً من الصور والنصوص بتضمينات معيرة $I_i$ و $T_j$، تكون مصفوفة التشابه $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$، فتعظم عناصر القطر المتطابقة وتعاقب كافة الأزواج غير المتطابقة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch2_med_46",
      "titleEn": "[MEDIUM] Variational Autoencoders (VAEs) & Reparameterization Trick - Analysis 46",
      "titleAr": "[مستوى متوسط] المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick) - تحليل 46",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Variational Autoencoders (VAEs) & Reparameterization Trick, what is the precise analytical formulation or operative rule? (Item 46)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 46)",
      "optionsEn": [
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.",
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves."
      ],
      "optionsAr": [
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تمكن حيلة إعادة المعلمة من تدفق التدرجات عبر العينات العشوائية بصياغة المتجه الكامن $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$، حيث $\\epsilon \\sim \\mathcal{N}(0, I)$ عينة ضوضاء عشوائية خارجية ثابتة.",
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية."
      ],
      "correctAnswer": "The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.",
      "correctAnswerEn": "The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.",
      "correctAnswerAr": "تمكن حيلة إعادة المعلمة من تدفق التدرجات عبر العينات العشوائية بصياغة المتجه الكامن $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$، حيث $\\epsilon \\sim \\mathcal{N}(0, I)$ عينة ضوضاء عشوائية خارجية ثابتة.",
      "correctIndex": 2,
      "explanationEn": "Analytical Derivation & Properties: The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تمكن حيلة إعادة المعلمة من تدفق التدرجات عبر العينات العشوائية بصياغة المتجه الكامن $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$، حيث $\\epsilon \\sim \\mathcal{N}(0, I)$ عينة ضوضاء عشوائية خارجية ثابتة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Variational Autoencoders (VAEs) & Reparameterization Trick.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تمكن حيلة إعادة المعلمة من تدفق التدرجات عبر العينات العشوائية بصياغة المتجه الكامن $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$، حيث $\\epsilon \\sim \\mathcal{N}(0, I)$ عينة ضوضاء عشوائية خارجية ثابتة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch2_med_47",
      "titleEn": "[MEDIUM] Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM) - Analysis 47",
      "titleAr": "[مستوى متوسط] النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM) - تحليل 47",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM), what is the precise analytical formulation or operative rule? (Item 47)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 47)",
      "optionsEn": [
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$."
      ],
      "optionsAr": [
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "تتبع العملية الأمامية التوزيع $q(x_t | x_{t-1}) = \\mathcal{N}(\\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$، وتتيح أخذ العينات مباشرة عند أي خطوة $t$ عبر $q(x_t | x_0) = \\mathcal{N}(\\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$."
      ],
      "correctAnswer": "The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.",
      "correctAnswerEn": "The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.",
      "correctAnswerAr": "تتبع العملية الأمامية التوزيع $q(x_t | x_{t-1}) = \\mathcal{N}(\\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$، وتتيح أخذ العينات مباشرة عند أي خطوة $t$ عبر $q(x_t | x_0) = \\mathcal{N}(\\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$.",
      "correctIndex": 3,
      "explanationEn": "Analytical Derivation & Properties: The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تتبع العملية الأمامية التوزيع $q(x_t | x_{t-1}) = \\mathcal{N}(\\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$، وتتيح أخذ العينات مباشرة عند أي خطوة $t$ عبر $q(x_t | x_0) = \\mathcal{N}(\\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تتبع العملية الأمامية التوزيع $q(x_t | x_{t-1}) = \\mathcal{N}(\\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$، وتتيح أخذ العينات مباشرة عند أي خطوة $t$ عبر $q(x_t | x_0) = \\mathcal{N}(\\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch2_med_48",
      "titleEn": "[MEDIUM] Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment - Analysis 48",
      "titleAr": "[مستوى متوسط] التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط - تحليل 48",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment, what is the precise analytical formulation or operative rule? (Item 48)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 48)",
      "optionsEn": [
        "For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation."
      ],
      "optionsAr": [
        "لحزمة من $N$ زوجاً من الصور والنصوص بتضمينات معيرة $I_i$ و $T_j$، تكون مصفوفة التشابه $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$، فتعظم عناصر القطر المتطابقة وتعاقب كافة الأزواج غير المتطابقة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي."
      ],
      "correctAnswer": "For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.",
      "correctAnswerEn": "For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.",
      "correctAnswerAr": "لحزمة من $N$ زوجاً من الصور والنصوص بتضمينات معيرة $I_i$ و $T_j$، تكون مصفوفة التشابه $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$، فتعظم عناصر القطر المتطابقة وتعاقب كافة الأزواج غير المتطابقة.",
      "correctIndex": 0,
      "explanationEn": "Analytical Derivation & Properties: For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: لحزمة من $N$ زوجاً من الصور والنصوص بتضمينات معيرة $I_i$ و $T_j$، تكون مصفوفة التشابه $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$، فتعظم عناصر القطر المتطابقة وتعاقب كافة الأزواج غير المتطابقة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: لحزمة من $N$ زوجاً من الصور والنصوص بتضمينات معيرة $I_i$ و $T_j$، تكون مصفوفة التشابه $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$، فتعظم عناصر القطر المتطابقة وتعاقب كافة الأزواج غير المتطابقة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch2_med_49",
      "titleEn": "[MEDIUM] Variational Autoencoders (VAEs) & Reparameterization Trick - Analysis 49",
      "titleAr": "[مستوى متوسط] المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick) - تحليل 49",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Variational Autoencoders (VAEs) & Reparameterization Trick, what is the precise analytical formulation or operative rule? (Item 49)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 49)",
      "optionsEn": [
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent."
      ],
      "optionsAr": [
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تمكن حيلة إعادة المعلمة من تدفق التدرجات عبر العينات العشوائية بصياغة المتجه الكامن $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$، حيث $\\epsilon \\sim \\mathcal{N}(0, I)$ عينة ضوضاء عشوائية خارجية ثابتة.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة."
      ],
      "correctAnswer": "The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.",
      "correctAnswerEn": "The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.",
      "correctAnswerAr": "تمكن حيلة إعادة المعلمة من تدفق التدرجات عبر العينات العشوائية بصياغة المتجه الكامن $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$، حيث $\\epsilon \\sim \\mathcal{N}(0, I)$ عينة ضوضاء عشوائية خارجية ثابتة.",
      "correctIndex": 1,
      "explanationEn": "Analytical Derivation & Properties: The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تمكن حيلة إعادة المعلمة من تدفق التدرجات عبر العينات العشوائية بصياغة المتجه الكامن $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$، حيث $\\epsilon \\sim \\mathcal{N}(0, I)$ عينة ضوضاء عشوائية خارجية ثابتة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Variational Autoencoders (VAEs) & Reparameterization Trick.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تمكن حيلة إعادة المعلمة من تدفق التدرجات عبر العينات العشوائية بصياغة المتجه الكامن $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$، حيث $\\epsilon \\sim \\mathcal{N}(0, I)$ عينة ضوضاء عشوائية خارجية ثابتة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch2_med_50",
      "titleEn": "[MEDIUM] Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM) - Analysis 50",
      "titleAr": "[مستوى متوسط] النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM) - تحليل 50",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM), what is the precise analytical formulation or operative rule? (Item 50)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 50)",
      "optionsEn": [
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تتبع العملية الأمامية التوزيع $q(x_t | x_{t-1}) = \\mathcal{N}(\\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$، وتتيح أخذ العينات مباشرة عند أي خطوة $t$ عبر $q(x_t | x_0) = \\mathcal{N}(\\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.",
      "correctAnswerEn": "The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.",
      "correctAnswerAr": "تتبع العملية الأمامية التوزيع $q(x_t | x_{t-1}) = \\mathcal{N}(\\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$، وتتيح أخذ العينات مباشرة عند أي خطوة $t$ عبر $q(x_t | x_0) = \\mathcal{N}(\\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$.",
      "correctIndex": 2,
      "explanationEn": "Analytical Derivation & Properties: The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تتبع العملية الأمامية التوزيع $q(x_t | x_{t-1}) = \\mathcal{N}(\\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$، وتتيح أخذ العينات مباشرة عند أي خطوة $t$ عبر $q(x_t | x_0) = \\mathcal{N}(\\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تتبع العملية الأمامية التوزيع $q(x_t | x_{t-1}) = \\mathcal{N}(\\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$، وتتيح أخذ العينات مباشرة عند أي خطوة $t$ عبر $q(x_t | x_0) = \\mathcal{N}(\\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch2_med_51",
      "titleEn": "[MEDIUM] Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment - Analysis 51",
      "titleAr": "[مستوى متوسط] التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط - تحليل 51",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment, what is the precise analytical formulation or operative rule? (Item 51)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 51)",
      "optionsEn": [
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs."
      ],
      "optionsAr": [
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "لحزمة من $N$ زوجاً من الصور والنصوص بتضمينات معيرة $I_i$ و $T_j$، تكون مصفوفة التشابه $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$، فتعظم عناصر القطر المتطابقة وتعاقب كافة الأزواج غير المتطابقة."
      ],
      "correctAnswer": "For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.",
      "correctAnswerEn": "For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.",
      "correctAnswerAr": "لحزمة من $N$ زوجاً من الصور والنصوص بتضمينات معيرة $I_i$ و $T_j$، تكون مصفوفة التشابه $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$، فتعظم عناصر القطر المتطابقة وتعاقب كافة الأزواج غير المتطابقة.",
      "correctIndex": 3,
      "explanationEn": "Analytical Derivation & Properties: For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: لحزمة من $N$ زوجاً من الصور والنصوص بتضمينات معيرة $I_i$ و $T_j$، تكون مصفوفة التشابه $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$، فتعظم عناصر القطر المتطابقة وتعاقب كافة الأزواج غير المتطابقة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: لحزمة من $N$ زوجاً من الصور والنصوص بتضمينات معيرة $I_i$ و $T_j$، تكون مصفوفة التشابه $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$، فتعظم عناصر القطر المتطابقة وتعاقب كافة الأزواج غير المتطابقة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch2_med_52",
      "titleEn": "[MEDIUM] Variational Autoencoders (VAEs) & Reparameterization Trick - Analysis 52",
      "titleAr": "[مستوى متوسط] المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick) - تحليل 52",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Variational Autoencoders (VAEs) & Reparameterization Trick, what is the precise analytical formulation or operative rule? (Item 52)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 52)",
      "optionsEn": [
        "The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance."
      ],
      "optionsAr": [
        "تمكن حيلة إعادة المعلمة من تدفق التدرجات عبر العينات العشوائية بصياغة المتجه الكامن $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$، حيث $\\epsilon \\sim \\mathcal{N}(0, I)$ عينة ضوضاء عشوائية خارجية ثابتة.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر."
      ],
      "correctAnswer": "The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.",
      "correctAnswerEn": "The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.",
      "correctAnswerAr": "تمكن حيلة إعادة المعلمة من تدفق التدرجات عبر العينات العشوائية بصياغة المتجه الكامن $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$، حيث $\\epsilon \\sim \\mathcal{N}(0, I)$ عينة ضوضاء عشوائية خارجية ثابتة.",
      "correctIndex": 0,
      "explanationEn": "Analytical Derivation & Properties: The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تمكن حيلة إعادة المعلمة من تدفق التدرجات عبر العينات العشوائية بصياغة المتجه الكامن $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$، حيث $\\epsilon \\sim \\mathcal{N}(0, I)$ عينة ضوضاء عشوائية خارجية ثابتة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Variational Autoencoders (VAEs) & Reparameterization Trick.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تمكن حيلة إعادة المعلمة من تدفق التدرجات عبر العينات العشوائية بصياغة المتجه الكامن $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$، حيث $\\epsilon \\sim \\mathcal{N}(0, I)$ عينة ضوضاء عشوائية خارجية ثابتة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch2_med_53",
      "titleEn": "[MEDIUM] Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM) - Analysis 53",
      "titleAr": "[مستوى متوسط] النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM) - تحليل 53",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM), what is the precise analytical formulation or operative rule? (Item 53)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 53)",
      "optionsEn": [
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "تتبع العملية الأمامية التوزيع $q(x_t | x_{t-1}) = \\mathcal{N}(\\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$، وتتيح أخذ العينات مباشرة عند أي خطوة $t$ عبر $q(x_t | x_0) = \\mathcal{N}(\\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.",
      "correctAnswerEn": "The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.",
      "correctAnswerAr": "تتبع العملية الأمامية التوزيع $q(x_t | x_{t-1}) = \\mathcal{N}(\\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$، وتتيح أخذ العينات مباشرة عند أي خطوة $t$ عبر $q(x_t | x_0) = \\mathcal{N}(\\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$.",
      "correctIndex": 1,
      "explanationEn": "Analytical Derivation & Properties: The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تتبع العملية الأمامية التوزيع $q(x_t | x_{t-1}) = \\mathcal{N}(\\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$، وتتيح أخذ العينات مباشرة عند أي خطوة $t$ عبر $q(x_t | x_0) = \\mathcal{N}(\\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تتبع العملية الأمامية التوزيع $q(x_t | x_{t-1}) = \\mathcal{N}(\\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$، وتتيح أخذ العينات مباشرة عند أي خطوة $t$ عبر $q(x_t | x_0) = \\mathcal{N}(\\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch2_med_54",
      "titleEn": "[MEDIUM] Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment - Analysis 54",
      "titleAr": "[مستوى متوسط] التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط - تحليل 54",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment, what is the precise analytical formulation or operative rule? (Item 54)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 54)",
      "optionsEn": [
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs."
      ],
      "optionsAr": [
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "لحزمة من $N$ زوجاً من الصور والنصوص بتضمينات معيرة $I_i$ و $T_j$، تكون مصفوفة التشابه $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$، فتعظم عناصر القطر المتطابقة وتعاقب كافة الأزواج غير المتطابقة.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة."
      ],
      "correctAnswer": "For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.",
      "correctAnswerEn": "For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.",
      "correctAnswerAr": "لحزمة من $N$ زوجاً من الصور والنصوص بتضمينات معيرة $I_i$ و $T_j$، تكون مصفوفة التشابه $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$، فتعظم عناصر القطر المتطابقة وتعاقب كافة الأزواج غير المتطابقة.",
      "correctIndex": 2,
      "explanationEn": "Analytical Derivation & Properties: For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: لحزمة من $N$ زوجاً من الصور والنصوص بتضمينات معيرة $I_i$ و $T_j$، تكون مصفوفة التشابه $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$، فتعظم عناصر القطر المتطابقة وتعاقب كافة الأزواج غير المتطابقة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: لحزمة من $N$ زوجاً من الصور والنصوص بتضمينات معيرة $I_i$ و $T_j$، تكون مصفوفة التشابه $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$، فتعظم عناصر القطر المتطابقة وتعاقب كافة الأزواج غير المتطابقة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch2_med_55",
      "titleEn": "[MEDIUM] Variational Autoencoders (VAEs) & Reparameterization Trick - Analysis 55",
      "titleAr": "[مستوى متوسط] المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick) - تحليل 55",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Variational Autoencoders (VAEs) & Reparameterization Trick, what is the precise analytical formulation or operative rule? (Item 55)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 55)",
      "optionsEn": [
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample."
      ],
      "optionsAr": [
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تمكن حيلة إعادة المعلمة من تدفق التدرجات عبر العينات العشوائية بصياغة المتجه الكامن $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$، حيث $\\epsilon \\sim \\mathcal{N}(0, I)$ عينة ضوضاء عشوائية خارجية ثابتة."
      ],
      "correctAnswer": "The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.",
      "correctAnswerEn": "The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.",
      "correctAnswerAr": "تمكن حيلة إعادة المعلمة من تدفق التدرجات عبر العينات العشوائية بصياغة المتجه الكامن $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$، حيث $\\epsilon \\sim \\mathcal{N}(0, I)$ عينة ضوضاء عشوائية خارجية ثابتة.",
      "correctIndex": 3,
      "explanationEn": "Analytical Derivation & Properties: The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تمكن حيلة إعادة المعلمة من تدفق التدرجات عبر العينات العشوائية بصياغة المتجه الكامن $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$، حيث $\\epsilon \\sim \\mathcal{N}(0, I)$ عينة ضوضاء عشوائية خارجية ثابتة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Variational Autoencoders (VAEs) & Reparameterization Trick.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تمكن حيلة إعادة المعلمة من تدفق التدرجات عبر العينات العشوائية بصياغة المتجه الكامن $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$، حيث $\\epsilon \\sim \\mathcal{N}(0, I)$ عينة ضوضاء عشوائية خارجية ثابتة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch2_med_56",
      "titleEn": "[MEDIUM] Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM) - Analysis 56",
      "titleAr": "[مستوى متوسط] النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM) - تحليل 56",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM), what is the precise analytical formulation or operative rule? (Item 56)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 56)",
      "optionsEn": [
        "The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.",
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "تتبع العملية الأمامية التوزيع $q(x_t | x_{t-1}) = \\mathcal{N}(\\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$، وتتيح أخذ العينات مباشرة عند أي خطوة $t$ عبر $q(x_t | x_0) = \\mathcal{N}(\\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$.",
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.",
      "correctAnswerEn": "The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.",
      "correctAnswerAr": "تتبع العملية الأمامية التوزيع $q(x_t | x_{t-1}) = \\mathcal{N}(\\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$، وتتيح أخذ العينات مباشرة عند أي خطوة $t$ عبر $q(x_t | x_0) = \\mathcal{N}(\\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$.",
      "correctIndex": 0,
      "explanationEn": "Analytical Derivation & Properties: The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تتبع العملية الأمامية التوزيع $q(x_t | x_{t-1}) = \\mathcal{N}(\\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$، وتتيح أخذ العينات مباشرة عند أي خطوة $t$ عبر $q(x_t | x_0) = \\mathcal{N}(\\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تتبع العملية الأمامية التوزيع $q(x_t | x_{t-1}) = \\mathcal{N}(\\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$، وتتيح أخذ العينات مباشرة عند أي خطوة $t$ عبر $q(x_t | x_0) = \\mathcal{N}(\\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch2_med_57",
      "titleEn": "[MEDIUM] Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment - Analysis 57",
      "titleAr": "[مستوى متوسط] التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط - تحليل 57",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment, what is the precise analytical formulation or operative rule? (Item 57)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 57)",
      "optionsEn": [
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.",
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data."
      ],
      "optionsAr": [
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "لحزمة من $N$ زوجاً من الصور والنصوص بتضمينات معيرة $I_i$ و $T_j$، تكون مصفوفة التشابه $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$، فتعظم عناصر القطر المتطابقة وتعاقب كافة الأزواج غير المتطابقة.",
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش."
      ],
      "correctAnswer": "For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.",
      "correctAnswerEn": "For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.",
      "correctAnswerAr": "لحزمة من $N$ زوجاً من الصور والنصوص بتضمينات معيرة $I_i$ و $T_j$، تكون مصفوفة التشابه $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$، فتعظم عناصر القطر المتطابقة وتعاقب كافة الأزواج غير المتطابقة.",
      "correctIndex": 1,
      "explanationEn": "Analytical Derivation & Properties: For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: لحزمة من $N$ زوجاً من الصور والنصوص بتضمينات معيرة $I_i$ و $T_j$، تكون مصفوفة التشابه $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$، فتعظم عناصر القطر المتطابقة وتعاقب كافة الأزواج غير المتطابقة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: لحزمة من $N$ زوجاً من الصور والنصوص بتضمينات معيرة $I_i$ و $T_j$، تكون مصفوفة التشابه $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$، فتعظم عناصر القطر المتطابقة وتعاقب كافة الأزواج غير المتطابقة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch2_med_58",
      "titleEn": "[MEDIUM] Variational Autoencoders (VAEs) & Reparameterization Trick - Analysis 58",
      "titleAr": "[مستوى متوسط] المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick) - تحليل 58",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Variational Autoencoders (VAEs) & Reparameterization Trick, what is the precise analytical formulation or operative rule? (Item 58)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 58)",
      "optionsEn": [
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.",
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan."
      ],
      "optionsAr": [
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تمكن حيلة إعادة المعلمة من تدفق التدرجات عبر العينات العشوائية بصياغة المتجه الكامن $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$، حيث $\\epsilon \\sim \\mathcal{N}(0, I)$ عينة ضوضاء عشوائية خارجية ثابتة.",
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG)."
      ],
      "correctAnswer": "The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.",
      "correctAnswerEn": "The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.",
      "correctAnswerAr": "تمكن حيلة إعادة المعلمة من تدفق التدرجات عبر العينات العشوائية بصياغة المتجه الكامن $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$، حيث $\\epsilon \\sim \\mathcal{N}(0, I)$ عينة ضوضاء عشوائية خارجية ثابتة.",
      "correctIndex": 2,
      "explanationEn": "Analytical Derivation & Properties: The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تمكن حيلة إعادة المعلمة من تدفق التدرجات عبر العينات العشوائية بصياغة المتجه الكامن $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$، حيث $\\epsilon \\sim \\mathcal{N}(0, I)$ عينة ضوضاء عشوائية خارجية ثابتة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Variational Autoencoders (VAEs) & Reparameterization Trick.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تمكن حيلة إعادة المعلمة من تدفق التدرجات عبر العينات العشوائية بصياغة المتجه الكامن $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$، حيث $\\epsilon \\sim \\mathcal{N}(0, I)$ عينة ضوضاء عشوائية خارجية ثابتة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch2_med_59",
      "titleEn": "[MEDIUM] Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM) - Analysis 59",
      "titleAr": "[مستوى متوسط] النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM) - تحليل 59",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM), what is the precise analytical formulation or operative rule? (Item 59)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 59)",
      "optionsEn": [
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$."
      ],
      "optionsAr": [
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "تتبع العملية الأمامية التوزيع $q(x_t | x_{t-1}) = \\mathcal{N}(\\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$، وتتيح أخذ العينات مباشرة عند أي خطوة $t$ عبر $q(x_t | x_0) = \\mathcal{N}(\\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$."
      ],
      "correctAnswer": "The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.",
      "correctAnswerEn": "The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.",
      "correctAnswerAr": "تتبع العملية الأمامية التوزيع $q(x_t | x_{t-1}) = \\mathcal{N}(\\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$، وتتيح أخذ العينات مباشرة عند أي خطوة $t$ عبر $q(x_t | x_0) = \\mathcal{N}(\\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$.",
      "correctIndex": 3,
      "explanationEn": "Analytical Derivation & Properties: The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تتبع العملية الأمامية التوزيع $q(x_t | x_{t-1}) = \\mathcal{N}(\\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$، وتتيح أخذ العينات مباشرة عند أي خطوة $t$ عبر $q(x_t | x_0) = \\mathcal{N}(\\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تتبع العملية الأمامية التوزيع $q(x_t | x_{t-1}) = \\mathcal{N}(\\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$، وتتيح أخذ العينات مباشرة عند أي خطوة $t$ عبر $q(x_t | x_0) = \\mathcal{N}(\\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$.."
      ],
      "difficulty": "medium"
    }
  ],
  "hots": [
    {
      "id": "egbac_ai_data_science_ch2_hots_1",
      "titleEn": "[HOTS] Variational Autoencoders (VAEs) & Reparameterization Trick - Evaluation 1",
      "titleAr": "[تفكير عليا] المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick) - تقييم 1",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Variational Autoencoders (VAEs) & Reparameterization Trick: (Problem 1)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick): (مسألة 1)",
      "optionsEn": [
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "في تدريب VAE لتوليد الوجوه، تجمع دالة الخسارة الإجمالية بين خطأ إعادة البناء وعقوبة تباعد كولباك-ليبلر التحليلية $D_{KL} = -\\frac{1}{2} \\sum (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$ لفرض انتظام الفضاء الكامن.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.",
      "correctAnswerEn": "In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.",
      "correctAnswerAr": "في تدريب VAE لتوليد الوجوه، تجمع دالة الخسارة الإجمالية بين خطأ إعادة البناء وعقوبة تباعد كولباك-ليبلر التحليلية $D_{KL} = -\\frac{1}{2} \\sum (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$ لفرض انتظام الفضاء الكامن.",
      "correctIndex": 2,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في تدريب VAE لتوليد الوجوه، تجمع دالة الخسارة الإجمالية بين خطأ إعادة البناء وعقوبة تباعد كولباك-ليبلر التحليلية $D_{KL} = -\\frac{1}{2} \\sum (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$ لفرض انتظام الفضاء الكامن.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Variational Autoencoders (VAEs) & Reparameterization Trick.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في تدريب VAE لتوليد الوجوه، تجمع دالة الخسارة الإجمالية بين خطأ إعادة البناء وعقوبة تباعد كولباك-ليبلر التحليلية $D_{KL} = -\\frac{1}{2} \\sum (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$ لفرض انتظام الفضاء الكامن.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch2_hots_2",
      "titleEn": "[HOTS] Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM) - Evaluation 2",
      "titleAr": "[تفكير عليا] النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM) - تقييم 2",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM): (Problem 2)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM): (مسألة 2)",
      "optionsEn": [
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise."
      ],
      "optionsAr": [
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "أثناء الاستدلال، تتنبأ الشبكة العصبية $\\epsilon_\\theta(x_t, t)$ بمركبة الضوضاء المضافة، وتحسب الخطوة العكسية عينة الخطوة السابقة $x_{t-1}$، مسترجعة تفاصيل الصورة الطبيعية من ضوضاء بيضاء نقية."
      ],
      "correctAnswer": "During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise.",
      "correctAnswerEn": "During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise.",
      "correctAnswerAr": "أثناء الاستدلال، تتنبأ الشبكة العصبية $\\epsilon_\\theta(x_t, t)$ بمركبة الضوضاء المضافة، وتحسب الخطوة العكسية عينة الخطوة السابقة $x_{t-1}$، مسترجعة تفاصيل الصورة الطبيعية من ضوضاء بيضاء نقية.",
      "correctIndex": 3,
      "explanationEn": "Detailed Solution & Numerical Evaluation: During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: أثناء الاستدلال، تتنبأ الشبكة العصبية $\\epsilon_\\theta(x_t, t)$ بمركبة الضوضاء المضافة، وتحسب الخطوة العكسية عينة الخطوة السابقة $x_{t-1}$، مسترجعة تفاصيل الصورة الطبيعية من ضوضاء بيضاء نقية.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: أثناء الاستدلال، تتنبأ الشبكة العصبية $\\epsilon_\\theta(x_t, t)$ بمركبة الضوضاء المضافة، وتحسب الخطوة العكسية عينة الخطوة السابقة $x_{t-1}$، مسترجعة تفاصيل الصورة الطبيعية من ضوضاء بيضاء نقية.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch2_hots_3",
      "titleEn": "[HOTS] Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment - Evaluation 3",
      "titleAr": "[تفكير عليا] التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط - تقييم 3",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment: (Problem 3)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط: (مسألة 3)",
      "optionsEn": [
        "In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "في مهمة تصنيف دون تدريب مسبق (Zero-Shot) عبر 1000 فئة، يحسب CLIP تشابه جيب التمام بين تضمين الصورة و1000 تضمين نصي للأنماط الموجهة، محققاً تعميماً متميزاً دون تعديل أوزان المصنف.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights.",
      "correctAnswerEn": "In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights.",
      "correctAnswerAr": "في مهمة تصنيف دون تدريب مسبق (Zero-Shot) عبر 1000 فئة، يحسب CLIP تشابه جيب التمام بين تضمين الصورة و1000 تضمين نصي للأنماط الموجهة، محققاً تعميماً متميزاً دون تعديل أوزان المصنف.",
      "correctIndex": 0,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في مهمة تصنيف دون تدريب مسبق (Zero-Shot) عبر 1000 فئة، يحسب CLIP تشابه جيب التمام بين تضمين الصورة و1000 تضمين نصي للأنماط الموجهة، محققاً تعميماً متميزاً دون تعديل أوزان المصنف.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في مهمة تصنيف دون تدريب مسبق (Zero-Shot) عبر 1000 فئة، يحسب CLIP تشابه جيب التمام بين تضمين الصورة و1000 تضمين نصي للأنماط الموجهة، محققاً تعميماً متميزاً دون تعديل أوزان المصنف.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch2_hots_4",
      "titleEn": "[HOTS] Variational Autoencoders (VAEs) & Reparameterization Trick - Evaluation 4",
      "titleAr": "[تفكير عليا] المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick) - تقييم 4",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Variational Autoencoders (VAEs) & Reparameterization Trick: (Problem 4)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick): (مسألة 4)",
      "optionsEn": [
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "في تدريب VAE لتوليد الوجوه، تجمع دالة الخسارة الإجمالية بين خطأ إعادة البناء وعقوبة تباعد كولباك-ليبلر التحليلية $D_{KL} = -\\frac{1}{2} \\sum (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$ لفرض انتظام الفضاء الكامن.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.",
      "correctAnswerEn": "In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.",
      "correctAnswerAr": "في تدريب VAE لتوليد الوجوه، تجمع دالة الخسارة الإجمالية بين خطأ إعادة البناء وعقوبة تباعد كولباك-ليبلر التحليلية $D_{KL} = -\\frac{1}{2} \\sum (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$ لفرض انتظام الفضاء الكامن.",
      "correctIndex": 1,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في تدريب VAE لتوليد الوجوه، تجمع دالة الخسارة الإجمالية بين خطأ إعادة البناء وعقوبة تباعد كولباك-ليبلر التحليلية $D_{KL} = -\\frac{1}{2} \\sum (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$ لفرض انتظام الفضاء الكامن.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Variational Autoencoders (VAEs) & Reparameterization Trick.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في تدريب VAE لتوليد الوجوه، تجمع دالة الخسارة الإجمالية بين خطأ إعادة البناء وعقوبة تباعد كولباك-ليبلر التحليلية $D_{KL} = -\\frac{1}{2} \\sum (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$ لفرض انتظام الفضاء الكامن.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch2_hots_5",
      "titleEn": "[HOTS] Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM) - Evaluation 5",
      "titleAr": "[تفكير عليا] النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM) - تقييم 5",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM): (Problem 5)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM): (مسألة 5)",
      "optionsEn": [
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "أثناء الاستدلال، تتنبأ الشبكة العصبية $\\epsilon_\\theta(x_t, t)$ بمركبة الضوضاء المضافة، وتحسب الخطوة العكسية عينة الخطوة السابقة $x_{t-1}$، مسترجعة تفاصيل الصورة الطبيعية من ضوضاء بيضاء نقية.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise.",
      "correctAnswerEn": "During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise.",
      "correctAnswerAr": "أثناء الاستدلال، تتنبأ الشبكة العصبية $\\epsilon_\\theta(x_t, t)$ بمركبة الضوضاء المضافة، وتحسب الخطوة العكسية عينة الخطوة السابقة $x_{t-1}$، مسترجعة تفاصيل الصورة الطبيعية من ضوضاء بيضاء نقية.",
      "correctIndex": 2,
      "explanationEn": "Detailed Solution & Numerical Evaluation: During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: أثناء الاستدلال، تتنبأ الشبكة العصبية $\\epsilon_\\theta(x_t, t)$ بمركبة الضوضاء المضافة، وتحسب الخطوة العكسية عينة الخطوة السابقة $x_{t-1}$، مسترجعة تفاصيل الصورة الطبيعية من ضوضاء بيضاء نقية.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: أثناء الاستدلال، تتنبأ الشبكة العصبية $\\epsilon_\\theta(x_t, t)$ بمركبة الضوضاء المضافة، وتحسب الخطوة العكسية عينة الخطوة السابقة $x_{t-1}$، مسترجعة تفاصيل الصورة الطبيعية من ضوضاء بيضاء نقية.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch2_hots_6",
      "titleEn": "[HOTS] Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment - Evaluation 6",
      "titleAr": "[تفكير عليا] التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط - تقييم 6",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment: (Problem 6)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط: (مسألة 6)",
      "optionsEn": [
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights."
      ],
      "optionsAr": [
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "في مهمة تصنيف دون تدريب مسبق (Zero-Shot) عبر 1000 فئة، يحسب CLIP تشابه جيب التمام بين تضمين الصورة و1000 تضمين نصي للأنماط الموجهة، محققاً تعميماً متميزاً دون تعديل أوزان المصنف."
      ],
      "correctAnswer": "In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights.",
      "correctAnswerEn": "In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights.",
      "correctAnswerAr": "في مهمة تصنيف دون تدريب مسبق (Zero-Shot) عبر 1000 فئة، يحسب CLIP تشابه جيب التمام بين تضمين الصورة و1000 تضمين نصي للأنماط الموجهة، محققاً تعميماً متميزاً دون تعديل أوزان المصنف.",
      "correctIndex": 3,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في مهمة تصنيف دون تدريب مسبق (Zero-Shot) عبر 1000 فئة، يحسب CLIP تشابه جيب التمام بين تضمين الصورة و1000 تضمين نصي للأنماط الموجهة، محققاً تعميماً متميزاً دون تعديل أوزان المصنف.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في مهمة تصنيف دون تدريب مسبق (Zero-Shot) عبر 1000 فئة، يحسب CLIP تشابه جيب التمام بين تضمين الصورة و1000 تضمين نصي للأنماط الموجهة، محققاً تعميماً متميزاً دون تعديل أوزان المصنف.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch2_hots_7",
      "titleEn": "[HOTS] Variational Autoencoders (VAEs) & Reparameterization Trick - Evaluation 7",
      "titleAr": "[تفكير عليا] المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick) - تقييم 7",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Variational Autoencoders (VAEs) & Reparameterization Trick: (Problem 7)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick): (مسألة 7)",
      "optionsEn": [
        "In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "في تدريب VAE لتوليد الوجوه، تجمع دالة الخسارة الإجمالية بين خطأ إعادة البناء وعقوبة تباعد كولباك-ليبلر التحليلية $D_{KL} = -\\frac{1}{2} \\sum (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$ لفرض انتظام الفضاء الكامن.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.",
      "correctAnswerEn": "In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.",
      "correctAnswerAr": "في تدريب VAE لتوليد الوجوه، تجمع دالة الخسارة الإجمالية بين خطأ إعادة البناء وعقوبة تباعد كولباك-ليبلر التحليلية $D_{KL} = -\\frac{1}{2} \\sum (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$ لفرض انتظام الفضاء الكامن.",
      "correctIndex": 0,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في تدريب VAE لتوليد الوجوه، تجمع دالة الخسارة الإجمالية بين خطأ إعادة البناء وعقوبة تباعد كولباك-ليبلر التحليلية $D_{KL} = -\\frac{1}{2} \\sum (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$ لفرض انتظام الفضاء الكامن.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Variational Autoencoders (VAEs) & Reparameterization Trick.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في تدريب VAE لتوليد الوجوه، تجمع دالة الخسارة الإجمالية بين خطأ إعادة البناء وعقوبة تباعد كولباك-ليبلر التحليلية $D_{KL} = -\\frac{1}{2} \\sum (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$ لفرض انتظام الفضاء الكامن.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch2_hots_8",
      "titleEn": "[HOTS] Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM) - Evaluation 8",
      "titleAr": "[تفكير عليا] النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM) - تقييم 8",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM): (Problem 8)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM): (مسألة 8)",
      "optionsEn": [
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "أثناء الاستدلال، تتنبأ الشبكة العصبية $\\epsilon_\\theta(x_t, t)$ بمركبة الضوضاء المضافة، وتحسب الخطوة العكسية عينة الخطوة السابقة $x_{t-1}$، مسترجعة تفاصيل الصورة الطبيعية من ضوضاء بيضاء نقية.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise.",
      "correctAnswerEn": "During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise.",
      "correctAnswerAr": "أثناء الاستدلال، تتنبأ الشبكة العصبية $\\epsilon_\\theta(x_t, t)$ بمركبة الضوضاء المضافة، وتحسب الخطوة العكسية عينة الخطوة السابقة $x_{t-1}$، مسترجعة تفاصيل الصورة الطبيعية من ضوضاء بيضاء نقية.",
      "correctIndex": 1,
      "explanationEn": "Detailed Solution & Numerical Evaluation: During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: أثناء الاستدلال، تتنبأ الشبكة العصبية $\\epsilon_\\theta(x_t, t)$ بمركبة الضوضاء المضافة، وتحسب الخطوة العكسية عينة الخطوة السابقة $x_{t-1}$، مسترجعة تفاصيل الصورة الطبيعية من ضوضاء بيضاء نقية.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: أثناء الاستدلال، تتنبأ الشبكة العصبية $\\epsilon_\\theta(x_t, t)$ بمركبة الضوضاء المضافة، وتحسب الخطوة العكسية عينة الخطوة السابقة $x_{t-1}$، مسترجعة تفاصيل الصورة الطبيعية من ضوضاء بيضاء نقية.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch2_hots_9",
      "titleEn": "[HOTS] Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment - Evaluation 9",
      "titleAr": "[تفكير عليا] التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط - تقييم 9",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment: (Problem 9)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط: (مسألة 9)",
      "optionsEn": [
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "في مهمة تصنيف دون تدريب مسبق (Zero-Shot) عبر 1000 فئة، يحسب CLIP تشابه جيب التمام بين تضمين الصورة و1000 تضمين نصي للأنماط الموجهة، محققاً تعميماً متميزاً دون تعديل أوزان المصنف.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights.",
      "correctAnswerEn": "In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights.",
      "correctAnswerAr": "في مهمة تصنيف دون تدريب مسبق (Zero-Shot) عبر 1000 فئة، يحسب CLIP تشابه جيب التمام بين تضمين الصورة و1000 تضمين نصي للأنماط الموجهة، محققاً تعميماً متميزاً دون تعديل أوزان المصنف.",
      "correctIndex": 2,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في مهمة تصنيف دون تدريب مسبق (Zero-Shot) عبر 1000 فئة، يحسب CLIP تشابه جيب التمام بين تضمين الصورة و1000 تضمين نصي للأنماط الموجهة، محققاً تعميماً متميزاً دون تعديل أوزان المصنف.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في مهمة تصنيف دون تدريب مسبق (Zero-Shot) عبر 1000 فئة، يحسب CLIP تشابه جيب التمام بين تضمين الصورة و1000 تضمين نصي للأنماط الموجهة، محققاً تعميماً متميزاً دون تعديل أوزان المصنف.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch2_hots_10",
      "titleEn": "[HOTS] Variational Autoencoders (VAEs) & Reparameterization Trick - Evaluation 10",
      "titleAr": "[تفكير عليا] المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick) - تقييم 10",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Variational Autoencoders (VAEs) & Reparameterization Trick: (Problem 10)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick): (مسألة 10)",
      "optionsEn": [
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity."
      ],
      "optionsAr": [
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "في تدريب VAE لتوليد الوجوه، تجمع دالة الخسارة الإجمالية بين خطأ إعادة البناء وعقوبة تباعد كولباك-ليبلر التحليلية $D_{KL} = -\\frac{1}{2} \\sum (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$ لفرض انتظام الفضاء الكامن."
      ],
      "correctAnswer": "In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.",
      "correctAnswerEn": "In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.",
      "correctAnswerAr": "في تدريب VAE لتوليد الوجوه، تجمع دالة الخسارة الإجمالية بين خطأ إعادة البناء وعقوبة تباعد كولباك-ليبلر التحليلية $D_{KL} = -\\frac{1}{2} \\sum (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$ لفرض انتظام الفضاء الكامن.",
      "correctIndex": 3,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في تدريب VAE لتوليد الوجوه، تجمع دالة الخسارة الإجمالية بين خطأ إعادة البناء وعقوبة تباعد كولباك-ليبلر التحليلية $D_{KL} = -\\frac{1}{2} \\sum (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$ لفرض انتظام الفضاء الكامن.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Variational Autoencoders (VAEs) & Reparameterization Trick.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في تدريب VAE لتوليد الوجوه، تجمع دالة الخسارة الإجمالية بين خطأ إعادة البناء وعقوبة تباعد كولباك-ليبلر التحليلية $D_{KL} = -\\frac{1}{2} \\sum (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$ لفرض انتظام الفضاء الكامن.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch2_hots_11",
      "titleEn": "[HOTS] Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM) - Evaluation 11",
      "titleAr": "[تفكير عليا] النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM) - تقييم 11",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM): (Problem 11)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM): (مسألة 11)",
      "optionsEn": [
        "During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "أثناء الاستدلال، تتنبأ الشبكة العصبية $\\epsilon_\\theta(x_t, t)$ بمركبة الضوضاء المضافة، وتحسب الخطوة العكسية عينة الخطوة السابقة $x_{t-1}$، مسترجعة تفاصيل الصورة الطبيعية من ضوضاء بيضاء نقية.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise.",
      "correctAnswerEn": "During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise.",
      "correctAnswerAr": "أثناء الاستدلال، تتنبأ الشبكة العصبية $\\epsilon_\\theta(x_t, t)$ بمركبة الضوضاء المضافة، وتحسب الخطوة العكسية عينة الخطوة السابقة $x_{t-1}$، مسترجعة تفاصيل الصورة الطبيعية من ضوضاء بيضاء نقية.",
      "correctIndex": 0,
      "explanationEn": "Detailed Solution & Numerical Evaluation: During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: أثناء الاستدلال، تتنبأ الشبكة العصبية $\\epsilon_\\theta(x_t, t)$ بمركبة الضوضاء المضافة، وتحسب الخطوة العكسية عينة الخطوة السابقة $x_{t-1}$، مسترجعة تفاصيل الصورة الطبيعية من ضوضاء بيضاء نقية.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: أثناء الاستدلال، تتنبأ الشبكة العصبية $\\epsilon_\\theta(x_t, t)$ بمركبة الضوضاء المضافة، وتحسب الخطوة العكسية عينة الخطوة السابقة $x_{t-1}$، مسترجعة تفاصيل الصورة الطبيعية من ضوضاء بيضاء نقية.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch2_hots_12",
      "titleEn": "[HOTS] Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment - Evaluation 12",
      "titleAr": "[تفكير عليا] التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط - تقييم 12",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment: (Problem 12)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط: (مسألة 12)",
      "optionsEn": [
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "في مهمة تصنيف دون تدريب مسبق (Zero-Shot) عبر 1000 فئة، يحسب CLIP تشابه جيب التمام بين تضمين الصورة و1000 تضمين نصي للأنماط الموجهة، محققاً تعميماً متميزاً دون تعديل أوزان المصنف.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights.",
      "correctAnswerEn": "In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights.",
      "correctAnswerAr": "في مهمة تصنيف دون تدريب مسبق (Zero-Shot) عبر 1000 فئة، يحسب CLIP تشابه جيب التمام بين تضمين الصورة و1000 تضمين نصي للأنماط الموجهة، محققاً تعميماً متميزاً دون تعديل أوزان المصنف.",
      "correctIndex": 1,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في مهمة تصنيف دون تدريب مسبق (Zero-Shot) عبر 1000 فئة، يحسب CLIP تشابه جيب التمام بين تضمين الصورة و1000 تضمين نصي للأنماط الموجهة، محققاً تعميماً متميزاً دون تعديل أوزان المصنف.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في مهمة تصنيف دون تدريب مسبق (Zero-Shot) عبر 1000 فئة، يحسب CLIP تشابه جيب التمام بين تضمين الصورة و1000 تضمين نصي للأنماط الموجهة، محققاً تعميماً متميزاً دون تعديل أوزان المصنف.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch2_hots_13",
      "titleEn": "[HOTS] Variational Autoencoders (VAEs) & Reparameterization Trick - Evaluation 13",
      "titleAr": "[تفكير عليا] المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick) - تقييم 13",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Variational Autoencoders (VAEs) & Reparameterization Trick: (Problem 13)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick): (مسألة 13)",
      "optionsEn": [
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "في تدريب VAE لتوليد الوجوه، تجمع دالة الخسارة الإجمالية بين خطأ إعادة البناء وعقوبة تباعد كولباك-ليبلر التحليلية $D_{KL} = -\\frac{1}{2} \\sum (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$ لفرض انتظام الفضاء الكامن.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.",
      "correctAnswerEn": "In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.",
      "correctAnswerAr": "في تدريب VAE لتوليد الوجوه، تجمع دالة الخسارة الإجمالية بين خطأ إعادة البناء وعقوبة تباعد كولباك-ليبلر التحليلية $D_{KL} = -\\frac{1}{2} \\sum (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$ لفرض انتظام الفضاء الكامن.",
      "correctIndex": 2,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في تدريب VAE لتوليد الوجوه، تجمع دالة الخسارة الإجمالية بين خطأ إعادة البناء وعقوبة تباعد كولباك-ليبلر التحليلية $D_{KL} = -\\frac{1}{2} \\sum (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$ لفرض انتظام الفضاء الكامن.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Variational Autoencoders (VAEs) & Reparameterization Trick.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في تدريب VAE لتوليد الوجوه، تجمع دالة الخسارة الإجمالية بين خطأ إعادة البناء وعقوبة تباعد كولباك-ليبلر التحليلية $D_{KL} = -\\frac{1}{2} \\sum (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$ لفرض انتظام الفضاء الكامن.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch2_hots_14",
      "titleEn": "[HOTS] Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM) - Evaluation 14",
      "titleAr": "[تفكير عليا] النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM) - تقييم 14",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM): (Problem 14)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM): (مسألة 14)",
      "optionsEn": [
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise."
      ],
      "optionsAr": [
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "أثناء الاستدلال، تتنبأ الشبكة العصبية $\\epsilon_\\theta(x_t, t)$ بمركبة الضوضاء المضافة، وتحسب الخطوة العكسية عينة الخطوة السابقة $x_{t-1}$، مسترجعة تفاصيل الصورة الطبيعية من ضوضاء بيضاء نقية."
      ],
      "correctAnswer": "During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise.",
      "correctAnswerEn": "During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise.",
      "correctAnswerAr": "أثناء الاستدلال، تتنبأ الشبكة العصبية $\\epsilon_\\theta(x_t, t)$ بمركبة الضوضاء المضافة، وتحسب الخطوة العكسية عينة الخطوة السابقة $x_{t-1}$، مسترجعة تفاصيل الصورة الطبيعية من ضوضاء بيضاء نقية.",
      "correctIndex": 3,
      "explanationEn": "Detailed Solution & Numerical Evaluation: During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: أثناء الاستدلال، تتنبأ الشبكة العصبية $\\epsilon_\\theta(x_t, t)$ بمركبة الضوضاء المضافة، وتحسب الخطوة العكسية عينة الخطوة السابقة $x_{t-1}$، مسترجعة تفاصيل الصورة الطبيعية من ضوضاء بيضاء نقية.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: أثناء الاستدلال، تتنبأ الشبكة العصبية $\\epsilon_\\theta(x_t, t)$ بمركبة الضوضاء المضافة، وتحسب الخطوة العكسية عينة الخطوة السابقة $x_{t-1}$، مسترجعة تفاصيل الصورة الطبيعية من ضوضاء بيضاء نقية.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch2_hots_15",
      "titleEn": "[HOTS] Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment - Evaluation 15",
      "titleAr": "[تفكير عليا] التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط - تقييم 15",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment: (Problem 15)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط: (مسألة 15)",
      "optionsEn": [
        "In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "في مهمة تصنيف دون تدريب مسبق (Zero-Shot) عبر 1000 فئة، يحسب CLIP تشابه جيب التمام بين تضمين الصورة و1000 تضمين نصي للأنماط الموجهة، محققاً تعميماً متميزاً دون تعديل أوزان المصنف.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights.",
      "correctAnswerEn": "In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights.",
      "correctAnswerAr": "في مهمة تصنيف دون تدريب مسبق (Zero-Shot) عبر 1000 فئة، يحسب CLIP تشابه جيب التمام بين تضمين الصورة و1000 تضمين نصي للأنماط الموجهة، محققاً تعميماً متميزاً دون تعديل أوزان المصنف.",
      "correctIndex": 0,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في مهمة تصنيف دون تدريب مسبق (Zero-Shot) عبر 1000 فئة، يحسب CLIP تشابه جيب التمام بين تضمين الصورة و1000 تضمين نصي للأنماط الموجهة، محققاً تعميماً متميزاً دون تعديل أوزان المصنف.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في مهمة تصنيف دون تدريب مسبق (Zero-Shot) عبر 1000 فئة، يحسب CLIP تشابه جيب التمام بين تضمين الصورة و1000 تضمين نصي للأنماط الموجهة، محققاً تعميماً متميزاً دون تعديل أوزان المصنف.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch2_hots_16",
      "titleEn": "[HOTS] Variational Autoencoders (VAEs) & Reparameterization Trick - Evaluation 16",
      "titleAr": "[تفكير عليا] المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick) - تقييم 16",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Variational Autoencoders (VAEs) & Reparameterization Trick: (Problem 16)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick): (مسألة 16)",
      "optionsEn": [
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "في تدريب VAE لتوليد الوجوه، تجمع دالة الخسارة الإجمالية بين خطأ إعادة البناء وعقوبة تباعد كولباك-ليبلر التحليلية $D_{KL} = -\\frac{1}{2} \\sum (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$ لفرض انتظام الفضاء الكامن.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.",
      "correctAnswerEn": "In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.",
      "correctAnswerAr": "في تدريب VAE لتوليد الوجوه، تجمع دالة الخسارة الإجمالية بين خطأ إعادة البناء وعقوبة تباعد كولباك-ليبلر التحليلية $D_{KL} = -\\frac{1}{2} \\sum (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$ لفرض انتظام الفضاء الكامن.",
      "correctIndex": 1,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في تدريب VAE لتوليد الوجوه، تجمع دالة الخسارة الإجمالية بين خطأ إعادة البناء وعقوبة تباعد كولباك-ليبلر التحليلية $D_{KL} = -\\frac{1}{2} \\sum (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$ لفرض انتظام الفضاء الكامن.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Variational Autoencoders (VAEs) & Reparameterization Trick.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في تدريب VAE لتوليد الوجوه، تجمع دالة الخسارة الإجمالية بين خطأ إعادة البناء وعقوبة تباعد كولباك-ليبلر التحليلية $D_{KL} = -\\frac{1}{2} \\sum (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$ لفرض انتظام الفضاء الكامن.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch2_hots_17",
      "titleEn": "[HOTS] Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM) - Evaluation 17",
      "titleAr": "[تفكير عليا] النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM) - تقييم 17",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM): (Problem 17)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM): (مسألة 17)",
      "optionsEn": [
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "أثناء الاستدلال، تتنبأ الشبكة العصبية $\\epsilon_\\theta(x_t, t)$ بمركبة الضوضاء المضافة، وتحسب الخطوة العكسية عينة الخطوة السابقة $x_{t-1}$، مسترجعة تفاصيل الصورة الطبيعية من ضوضاء بيضاء نقية.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise.",
      "correctAnswerEn": "During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise.",
      "correctAnswerAr": "أثناء الاستدلال، تتنبأ الشبكة العصبية $\\epsilon_\\theta(x_t, t)$ بمركبة الضوضاء المضافة، وتحسب الخطوة العكسية عينة الخطوة السابقة $x_{t-1}$، مسترجعة تفاصيل الصورة الطبيعية من ضوضاء بيضاء نقية.",
      "correctIndex": 2,
      "explanationEn": "Detailed Solution & Numerical Evaluation: During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: أثناء الاستدلال، تتنبأ الشبكة العصبية $\\epsilon_\\theta(x_t, t)$ بمركبة الضوضاء المضافة، وتحسب الخطوة العكسية عينة الخطوة السابقة $x_{t-1}$، مسترجعة تفاصيل الصورة الطبيعية من ضوضاء بيضاء نقية.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: أثناء الاستدلال، تتنبأ الشبكة العصبية $\\epsilon_\\theta(x_t, t)$ بمركبة الضوضاء المضافة، وتحسب الخطوة العكسية عينة الخطوة السابقة $x_{t-1}$، مسترجعة تفاصيل الصورة الطبيعية من ضوضاء بيضاء نقية.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch2_hots_18",
      "titleEn": "[HOTS] Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment - Evaluation 18",
      "titleAr": "[تفكير عليا] التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط - تقييم 18",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment: (Problem 18)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط: (مسألة 18)",
      "optionsEn": [
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights."
      ],
      "optionsAr": [
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "في مهمة تصنيف دون تدريب مسبق (Zero-Shot) عبر 1000 فئة، يحسب CLIP تشابه جيب التمام بين تضمين الصورة و1000 تضمين نصي للأنماط الموجهة، محققاً تعميماً متميزاً دون تعديل أوزان المصنف."
      ],
      "correctAnswer": "In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights.",
      "correctAnswerEn": "In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights.",
      "correctAnswerAr": "في مهمة تصنيف دون تدريب مسبق (Zero-Shot) عبر 1000 فئة، يحسب CLIP تشابه جيب التمام بين تضمين الصورة و1000 تضمين نصي للأنماط الموجهة، محققاً تعميماً متميزاً دون تعديل أوزان المصنف.",
      "correctIndex": 3,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في مهمة تصنيف دون تدريب مسبق (Zero-Shot) عبر 1000 فئة، يحسب CLIP تشابه جيب التمام بين تضمين الصورة و1000 تضمين نصي للأنماط الموجهة، محققاً تعميماً متميزاً دون تعديل أوزان المصنف.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في مهمة تصنيف دون تدريب مسبق (Zero-Shot) عبر 1000 فئة، يحسب CLIP تشابه جيب التمام بين تضمين الصورة و1000 تضمين نصي للأنماط الموجهة، محققاً تعميماً متميزاً دون تعديل أوزان المصنف.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch2_hots_19",
      "titleEn": "[HOTS] Variational Autoencoders (VAEs) & Reparameterization Trick - Evaluation 19",
      "titleAr": "[تفكير عليا] المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick) - تقييم 19",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Variational Autoencoders (VAEs) & Reparameterization Trick: (Problem 19)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick): (مسألة 19)",
      "optionsEn": [
        "In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "في تدريب VAE لتوليد الوجوه، تجمع دالة الخسارة الإجمالية بين خطأ إعادة البناء وعقوبة تباعد كولباك-ليبلر التحليلية $D_{KL} = -\\frac{1}{2} \\sum (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$ لفرض انتظام الفضاء الكامن.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.",
      "correctAnswerEn": "In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.",
      "correctAnswerAr": "في تدريب VAE لتوليد الوجوه، تجمع دالة الخسارة الإجمالية بين خطأ إعادة البناء وعقوبة تباعد كولباك-ليبلر التحليلية $D_{KL} = -\\frac{1}{2} \\sum (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$ لفرض انتظام الفضاء الكامن.",
      "correctIndex": 0,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في تدريب VAE لتوليد الوجوه، تجمع دالة الخسارة الإجمالية بين خطأ إعادة البناء وعقوبة تباعد كولباك-ليبلر التحليلية $D_{KL} = -\\frac{1}{2} \\sum (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$ لفرض انتظام الفضاء الكامن.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Variational Autoencoders (VAEs) & Reparameterization Trick.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في تدريب VAE لتوليد الوجوه، تجمع دالة الخسارة الإجمالية بين خطأ إعادة البناء وعقوبة تباعد كولباك-ليبلر التحليلية $D_{KL} = -\\frac{1}{2} \\sum (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$ لفرض انتظام الفضاء الكامن.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch2_hots_20",
      "titleEn": "[HOTS] Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM) - Evaluation 20",
      "titleAr": "[تفكير عليا] النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM) - تقييم 20",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM): (Problem 20)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM): (مسألة 20)",
      "optionsEn": [
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "أثناء الاستدلال، تتنبأ الشبكة العصبية $\\epsilon_\\theta(x_t, t)$ بمركبة الضوضاء المضافة، وتحسب الخطوة العكسية عينة الخطوة السابقة $x_{t-1}$، مسترجعة تفاصيل الصورة الطبيعية من ضوضاء بيضاء نقية.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise.",
      "correctAnswerEn": "During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise.",
      "correctAnswerAr": "أثناء الاستدلال، تتنبأ الشبكة العصبية $\\epsilon_\\theta(x_t, t)$ بمركبة الضوضاء المضافة، وتحسب الخطوة العكسية عينة الخطوة السابقة $x_{t-1}$، مسترجعة تفاصيل الصورة الطبيعية من ضوضاء بيضاء نقية.",
      "correctIndex": 1,
      "explanationEn": "Detailed Solution & Numerical Evaluation: During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: أثناء الاستدلال، تتنبأ الشبكة العصبية $\\epsilon_\\theta(x_t, t)$ بمركبة الضوضاء المضافة، وتحسب الخطوة العكسية عينة الخطوة السابقة $x_{t-1}$، مسترجعة تفاصيل الصورة الطبيعية من ضوضاء بيضاء نقية.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: أثناء الاستدلال، تتنبأ الشبكة العصبية $\\epsilon_\\theta(x_t, t)$ بمركبة الضوضاء المضافة، وتحسب الخطوة العكسية عينة الخطوة السابقة $x_{t-1}$، مسترجعة تفاصيل الصورة الطبيعية من ضوضاء بيضاء نقية.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch2_hots_21",
      "titleEn": "[HOTS] Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment - Evaluation 21",
      "titleAr": "[تفكير عليا] التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط - تقييم 21",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment: (Problem 21)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط: (مسألة 21)",
      "optionsEn": [
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "في مهمة تصنيف دون تدريب مسبق (Zero-Shot) عبر 1000 فئة، يحسب CLIP تشابه جيب التمام بين تضمين الصورة و1000 تضمين نصي للأنماط الموجهة، محققاً تعميماً متميزاً دون تعديل أوزان المصنف.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights.",
      "correctAnswerEn": "In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights.",
      "correctAnswerAr": "في مهمة تصنيف دون تدريب مسبق (Zero-Shot) عبر 1000 فئة، يحسب CLIP تشابه جيب التمام بين تضمين الصورة و1000 تضمين نصي للأنماط الموجهة، محققاً تعميماً متميزاً دون تعديل أوزان المصنف.",
      "correctIndex": 2,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في مهمة تصنيف دون تدريب مسبق (Zero-Shot) عبر 1000 فئة، يحسب CLIP تشابه جيب التمام بين تضمين الصورة و1000 تضمين نصي للأنماط الموجهة، محققاً تعميماً متميزاً دون تعديل أوزان المصنف.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في مهمة تصنيف دون تدريب مسبق (Zero-Shot) عبر 1000 فئة، يحسب CLIP تشابه جيب التمام بين تضمين الصورة و1000 تضمين نصي للأنماط الموجهة، محققاً تعميماً متميزاً دون تعديل أوزان المصنف.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch2_hots_22",
      "titleEn": "[HOTS] Variational Autoencoders (VAEs) & Reparameterization Trick - Evaluation 22",
      "titleAr": "[تفكير عليا] المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick) - تقييم 22",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Variational Autoencoders (VAEs) & Reparameterization Trick: (Problem 22)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick): (مسألة 22)",
      "optionsEn": [
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity."
      ],
      "optionsAr": [
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "في تدريب VAE لتوليد الوجوه، تجمع دالة الخسارة الإجمالية بين خطأ إعادة البناء وعقوبة تباعد كولباك-ليبلر التحليلية $D_{KL} = -\\frac{1}{2} \\sum (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$ لفرض انتظام الفضاء الكامن."
      ],
      "correctAnswer": "In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.",
      "correctAnswerEn": "In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.",
      "correctAnswerAr": "في تدريب VAE لتوليد الوجوه، تجمع دالة الخسارة الإجمالية بين خطأ إعادة البناء وعقوبة تباعد كولباك-ليبلر التحليلية $D_{KL} = -\\frac{1}{2} \\sum (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$ لفرض انتظام الفضاء الكامن.",
      "correctIndex": 3,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في تدريب VAE لتوليد الوجوه، تجمع دالة الخسارة الإجمالية بين خطأ إعادة البناء وعقوبة تباعد كولباك-ليبلر التحليلية $D_{KL} = -\\frac{1}{2} \\sum (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$ لفرض انتظام الفضاء الكامن.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Variational Autoencoders (VAEs) & Reparameterization Trick.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في تدريب VAE لتوليد الوجوه، تجمع دالة الخسارة الإجمالية بين خطأ إعادة البناء وعقوبة تباعد كولباك-ليبلر التحليلية $D_{KL} = -\\frac{1}{2} \\sum (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$ لفرض انتظام الفضاء الكامن.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch2_hots_23",
      "titleEn": "[HOTS] Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM) - Evaluation 23",
      "titleAr": "[تفكير عليا] النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM) - تقييم 23",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM): (Problem 23)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM): (مسألة 23)",
      "optionsEn": [
        "During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "أثناء الاستدلال، تتنبأ الشبكة العصبية $\\epsilon_\\theta(x_t, t)$ بمركبة الضوضاء المضافة، وتحسب الخطوة العكسية عينة الخطوة السابقة $x_{t-1}$، مسترجعة تفاصيل الصورة الطبيعية من ضوضاء بيضاء نقية.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise.",
      "correctAnswerEn": "During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise.",
      "correctAnswerAr": "أثناء الاستدلال، تتنبأ الشبكة العصبية $\\epsilon_\\theta(x_t, t)$ بمركبة الضوضاء المضافة، وتحسب الخطوة العكسية عينة الخطوة السابقة $x_{t-1}$، مسترجعة تفاصيل الصورة الطبيعية من ضوضاء بيضاء نقية.",
      "correctIndex": 0,
      "explanationEn": "Detailed Solution & Numerical Evaluation: During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: أثناء الاستدلال، تتنبأ الشبكة العصبية $\\epsilon_\\theta(x_t, t)$ بمركبة الضوضاء المضافة، وتحسب الخطوة العكسية عينة الخطوة السابقة $x_{t-1}$، مسترجعة تفاصيل الصورة الطبيعية من ضوضاء بيضاء نقية.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: أثناء الاستدلال، تتنبأ الشبكة العصبية $\\epsilon_\\theta(x_t, t)$ بمركبة الضوضاء المضافة، وتحسب الخطوة العكسية عينة الخطوة السابقة $x_{t-1}$، مسترجعة تفاصيل الصورة الطبيعية من ضوضاء بيضاء نقية.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch2_hots_24",
      "titleEn": "[HOTS] Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment - Evaluation 24",
      "titleAr": "[تفكير عليا] التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط - تقييم 24",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment: (Problem 24)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط: (مسألة 24)",
      "optionsEn": [
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "في مهمة تصنيف دون تدريب مسبق (Zero-Shot) عبر 1000 فئة، يحسب CLIP تشابه جيب التمام بين تضمين الصورة و1000 تضمين نصي للأنماط الموجهة، محققاً تعميماً متميزاً دون تعديل أوزان المصنف.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights.",
      "correctAnswerEn": "In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights.",
      "correctAnswerAr": "في مهمة تصنيف دون تدريب مسبق (Zero-Shot) عبر 1000 فئة، يحسب CLIP تشابه جيب التمام بين تضمين الصورة و1000 تضمين نصي للأنماط الموجهة، محققاً تعميماً متميزاً دون تعديل أوزان المصنف.",
      "correctIndex": 1,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في مهمة تصنيف دون تدريب مسبق (Zero-Shot) عبر 1000 فئة، يحسب CLIP تشابه جيب التمام بين تضمين الصورة و1000 تضمين نصي للأنماط الموجهة، محققاً تعميماً متميزاً دون تعديل أوزان المصنف.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في مهمة تصنيف دون تدريب مسبق (Zero-Shot) عبر 1000 فئة، يحسب CLIP تشابه جيب التمام بين تضمين الصورة و1000 تضمين نصي للأنماط الموجهة، محققاً تعميماً متميزاً دون تعديل أوزان المصنف.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch2_hots_25",
      "titleEn": "[HOTS] Variational Autoencoders (VAEs) & Reparameterization Trick - Evaluation 25",
      "titleAr": "[تفكير عليا] المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick) - تقييم 25",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Variational Autoencoders (VAEs) & Reparameterization Trick: (Problem 25)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick): (مسألة 25)",
      "optionsEn": [
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "في تدريب VAE لتوليد الوجوه، تجمع دالة الخسارة الإجمالية بين خطأ إعادة البناء وعقوبة تباعد كولباك-ليبلر التحليلية $D_{KL} = -\\frac{1}{2} \\sum (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$ لفرض انتظام الفضاء الكامن.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.",
      "correctAnswerEn": "In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.",
      "correctAnswerAr": "في تدريب VAE لتوليد الوجوه، تجمع دالة الخسارة الإجمالية بين خطأ إعادة البناء وعقوبة تباعد كولباك-ليبلر التحليلية $D_{KL} = -\\frac{1}{2} \\sum (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$ لفرض انتظام الفضاء الكامن.",
      "correctIndex": 2,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في تدريب VAE لتوليد الوجوه، تجمع دالة الخسارة الإجمالية بين خطأ إعادة البناء وعقوبة تباعد كولباك-ليبلر التحليلية $D_{KL} = -\\frac{1}{2} \\sum (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$ لفرض انتظام الفضاء الكامن.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Variational Autoencoders (VAEs) & Reparameterization Trick.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في تدريب VAE لتوليد الوجوه، تجمع دالة الخسارة الإجمالية بين خطأ إعادة البناء وعقوبة تباعد كولباك-ليبلر التحليلية $D_{KL} = -\\frac{1}{2} \\sum (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$ لفرض انتظام الفضاء الكامن.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch2_hots_26",
      "titleEn": "[HOTS] Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM) - Evaluation 26",
      "titleAr": "[تفكير عليا] النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM) - تقييم 26",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM): (Problem 26)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM): (مسألة 26)",
      "optionsEn": [
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise."
      ],
      "optionsAr": [
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "أثناء الاستدلال، تتنبأ الشبكة العصبية $\\epsilon_\\theta(x_t, t)$ بمركبة الضوضاء المضافة، وتحسب الخطوة العكسية عينة الخطوة السابقة $x_{t-1}$، مسترجعة تفاصيل الصورة الطبيعية من ضوضاء بيضاء نقية."
      ],
      "correctAnswer": "During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise.",
      "correctAnswerEn": "During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise.",
      "correctAnswerAr": "أثناء الاستدلال، تتنبأ الشبكة العصبية $\\epsilon_\\theta(x_t, t)$ بمركبة الضوضاء المضافة، وتحسب الخطوة العكسية عينة الخطوة السابقة $x_{t-1}$، مسترجعة تفاصيل الصورة الطبيعية من ضوضاء بيضاء نقية.",
      "correctIndex": 3,
      "explanationEn": "Detailed Solution & Numerical Evaluation: During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: أثناء الاستدلال، تتنبأ الشبكة العصبية $\\epsilon_\\theta(x_t, t)$ بمركبة الضوضاء المضافة، وتحسب الخطوة العكسية عينة الخطوة السابقة $x_{t-1}$، مسترجعة تفاصيل الصورة الطبيعية من ضوضاء بيضاء نقية.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: أثناء الاستدلال، تتنبأ الشبكة العصبية $\\epsilon_\\theta(x_t, t)$ بمركبة الضوضاء المضافة، وتحسب الخطوة العكسية عينة الخطوة السابقة $x_{t-1}$، مسترجعة تفاصيل الصورة الطبيعية من ضوضاء بيضاء نقية.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch2_hots_27",
      "titleEn": "[HOTS] Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment - Evaluation 27",
      "titleAr": "[تفكير عليا] التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط - تقييم 27",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment: (Problem 27)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط: (مسألة 27)",
      "optionsEn": [
        "In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "في مهمة تصنيف دون تدريب مسبق (Zero-Shot) عبر 1000 فئة، يحسب CLIP تشابه جيب التمام بين تضمين الصورة و1000 تضمين نصي للأنماط الموجهة، محققاً تعميماً متميزاً دون تعديل أوزان المصنف.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights.",
      "correctAnswerEn": "In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights.",
      "correctAnswerAr": "في مهمة تصنيف دون تدريب مسبق (Zero-Shot) عبر 1000 فئة، يحسب CLIP تشابه جيب التمام بين تضمين الصورة و1000 تضمين نصي للأنماط الموجهة، محققاً تعميماً متميزاً دون تعديل أوزان المصنف.",
      "correctIndex": 0,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في مهمة تصنيف دون تدريب مسبق (Zero-Shot) عبر 1000 فئة، يحسب CLIP تشابه جيب التمام بين تضمين الصورة و1000 تضمين نصي للأنماط الموجهة، محققاً تعميماً متميزاً دون تعديل أوزان المصنف.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في مهمة تصنيف دون تدريب مسبق (Zero-Shot) عبر 1000 فئة، يحسب CLIP تشابه جيب التمام بين تضمين الصورة و1000 تضمين نصي للأنماط الموجهة، محققاً تعميماً متميزاً دون تعديل أوزان المصنف.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch2_hots_28",
      "titleEn": "[HOTS] Variational Autoencoders (VAEs) & Reparameterization Trick - Evaluation 28",
      "titleAr": "[تفكير عليا] المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick) - تقييم 28",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Variational Autoencoders (VAEs) & Reparameterization Trick: (Problem 28)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick): (مسألة 28)",
      "optionsEn": [
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "في تدريب VAE لتوليد الوجوه، تجمع دالة الخسارة الإجمالية بين خطأ إعادة البناء وعقوبة تباعد كولباك-ليبلر التحليلية $D_{KL} = -\\frac{1}{2} \\sum (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$ لفرض انتظام الفضاء الكامن.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.",
      "correctAnswerEn": "In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.",
      "correctAnswerAr": "في تدريب VAE لتوليد الوجوه، تجمع دالة الخسارة الإجمالية بين خطأ إعادة البناء وعقوبة تباعد كولباك-ليبلر التحليلية $D_{KL} = -\\frac{1}{2} \\sum (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$ لفرض انتظام الفضاء الكامن.",
      "correctIndex": 1,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في تدريب VAE لتوليد الوجوه، تجمع دالة الخسارة الإجمالية بين خطأ إعادة البناء وعقوبة تباعد كولباك-ليبلر التحليلية $D_{KL} = -\\frac{1}{2} \\sum (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$ لفرض انتظام الفضاء الكامن.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Variational Autoencoders (VAEs) & Reparameterization Trick.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في تدريب VAE لتوليد الوجوه، تجمع دالة الخسارة الإجمالية بين خطأ إعادة البناء وعقوبة تباعد كولباك-ليبلر التحليلية $D_{KL} = -\\frac{1}{2} \\sum (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$ لفرض انتظام الفضاء الكامن.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch2_hots_29",
      "titleEn": "[HOTS] Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM) - Evaluation 29",
      "titleAr": "[تفكير عليا] النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM) - تقييم 29",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM): (Problem 29)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM): (مسألة 29)",
      "optionsEn": [
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "أثناء الاستدلال، تتنبأ الشبكة العصبية $\\epsilon_\\theta(x_t, t)$ بمركبة الضوضاء المضافة، وتحسب الخطوة العكسية عينة الخطوة السابقة $x_{t-1}$، مسترجعة تفاصيل الصورة الطبيعية من ضوضاء بيضاء نقية.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise.",
      "correctAnswerEn": "During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise.",
      "correctAnswerAr": "أثناء الاستدلال، تتنبأ الشبكة العصبية $\\epsilon_\\theta(x_t, t)$ بمركبة الضوضاء المضافة، وتحسب الخطوة العكسية عينة الخطوة السابقة $x_{t-1}$، مسترجعة تفاصيل الصورة الطبيعية من ضوضاء بيضاء نقية.",
      "correctIndex": 2,
      "explanationEn": "Detailed Solution & Numerical Evaluation: During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: أثناء الاستدلال، تتنبأ الشبكة العصبية $\\epsilon_\\theta(x_t, t)$ بمركبة الضوضاء المضافة، وتحسب الخطوة العكسية عينة الخطوة السابقة $x_{t-1}$، مسترجعة تفاصيل الصورة الطبيعية من ضوضاء بيضاء نقية.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: أثناء الاستدلال، تتنبأ الشبكة العصبية $\\epsilon_\\theta(x_t, t)$ بمركبة الضوضاء المضافة، وتحسب الخطوة العكسية عينة الخطوة السابقة $x_{t-1}$، مسترجعة تفاصيل الصورة الطبيعية من ضوضاء بيضاء نقية.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch2_hots_30",
      "titleEn": "[HOTS] Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment - Evaluation 30",
      "titleAr": "[تفكير عليا] التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط - تقييم 30",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment: (Problem 30)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط: (مسألة 30)",
      "optionsEn": [
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights."
      ],
      "optionsAr": [
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "في مهمة تصنيف دون تدريب مسبق (Zero-Shot) عبر 1000 فئة، يحسب CLIP تشابه جيب التمام بين تضمين الصورة و1000 تضمين نصي للأنماط الموجهة، محققاً تعميماً متميزاً دون تعديل أوزان المصنف."
      ],
      "correctAnswer": "In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights.",
      "correctAnswerEn": "In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights.",
      "correctAnswerAr": "في مهمة تصنيف دون تدريب مسبق (Zero-Shot) عبر 1000 فئة، يحسب CLIP تشابه جيب التمام بين تضمين الصورة و1000 تضمين نصي للأنماط الموجهة، محققاً تعميماً متميزاً دون تعديل أوزان المصنف.",
      "correctIndex": 3,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في مهمة تصنيف دون تدريب مسبق (Zero-Shot) عبر 1000 فئة، يحسب CLIP تشابه جيب التمام بين تضمين الصورة و1000 تضمين نصي للأنماط الموجهة، محققاً تعميماً متميزاً دون تعديل أوزان المصنف.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في مهمة تصنيف دون تدريب مسبق (Zero-Shot) عبر 1000 فئة، يحسب CLIP تشابه جيب التمام بين تضمين الصورة و1000 تضمين نصي للأنماط الموجهة، محققاً تعميماً متميزاً دون تعديل أوزان المصنف.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch2_hots_31",
      "titleEn": "[HOTS] Variational Autoencoders (VAEs) & Reparameterization Trick - Evaluation 31",
      "titleAr": "[تفكير عليا] المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick) - تقييم 31",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Variational Autoencoders (VAEs) & Reparameterization Trick: (Problem 31)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick): (مسألة 31)",
      "optionsEn": [
        "In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "في تدريب VAE لتوليد الوجوه، تجمع دالة الخسارة الإجمالية بين خطأ إعادة البناء وعقوبة تباعد كولباك-ليبلر التحليلية $D_{KL} = -\\frac{1}{2} \\sum (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$ لفرض انتظام الفضاء الكامن.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.",
      "correctAnswerEn": "In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.",
      "correctAnswerAr": "في تدريب VAE لتوليد الوجوه، تجمع دالة الخسارة الإجمالية بين خطأ إعادة البناء وعقوبة تباعد كولباك-ليبلر التحليلية $D_{KL} = -\\frac{1}{2} \\sum (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$ لفرض انتظام الفضاء الكامن.",
      "correctIndex": 0,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في تدريب VAE لتوليد الوجوه، تجمع دالة الخسارة الإجمالية بين خطأ إعادة البناء وعقوبة تباعد كولباك-ليبلر التحليلية $D_{KL} = -\\frac{1}{2} \\sum (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$ لفرض انتظام الفضاء الكامن.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Variational Autoencoders (VAEs) & Reparameterization Trick.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في تدريب VAE لتوليد الوجوه، تجمع دالة الخسارة الإجمالية بين خطأ إعادة البناء وعقوبة تباعد كولباك-ليبلر التحليلية $D_{KL} = -\\frac{1}{2} \\sum (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$ لفرض انتظام الفضاء الكامن.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch2_hots_32",
      "titleEn": "[HOTS] Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM) - Evaluation 32",
      "titleAr": "[تفكير عليا] النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM) - تقييم 32",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM): (Problem 32)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM): (مسألة 32)",
      "optionsEn": [
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "أثناء الاستدلال، تتنبأ الشبكة العصبية $\\epsilon_\\theta(x_t, t)$ بمركبة الضوضاء المضافة، وتحسب الخطوة العكسية عينة الخطوة السابقة $x_{t-1}$، مسترجعة تفاصيل الصورة الطبيعية من ضوضاء بيضاء نقية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise.",
      "correctAnswerEn": "During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise.",
      "correctAnswerAr": "أثناء الاستدلال، تتنبأ الشبكة العصبية $\\epsilon_\\theta(x_t, t)$ بمركبة الضوضاء المضافة، وتحسب الخطوة العكسية عينة الخطوة السابقة $x_{t-1}$، مسترجعة تفاصيل الصورة الطبيعية من ضوضاء بيضاء نقية.",
      "correctIndex": 1,
      "explanationEn": "Detailed Solution & Numerical Evaluation: During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: أثناء الاستدلال، تتنبأ الشبكة العصبية $\\epsilon_\\theta(x_t, t)$ بمركبة الضوضاء المضافة، وتحسب الخطوة العكسية عينة الخطوة السابقة $x_{t-1}$، مسترجعة تفاصيل الصورة الطبيعية من ضوضاء بيضاء نقية.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: أثناء الاستدلال، تتنبأ الشبكة العصبية $\\epsilon_\\theta(x_t, t)$ بمركبة الضوضاء المضافة، وتحسب الخطوة العكسية عينة الخطوة السابقة $x_{t-1}$، مسترجعة تفاصيل الصورة الطبيعية من ضوضاء بيضاء نقية.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch2_hots_33",
      "titleEn": "[HOTS] Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment - Evaluation 33",
      "titleAr": "[تفكير عليا] التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط - تقييم 33",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment: (Problem 33)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط: (مسألة 33)",
      "optionsEn": [
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "في مهمة تصنيف دون تدريب مسبق (Zero-Shot) عبر 1000 فئة، يحسب CLIP تشابه جيب التمام بين تضمين الصورة و1000 تضمين نصي للأنماط الموجهة، محققاً تعميماً متميزاً دون تعديل أوزان المصنف.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights.",
      "correctAnswerEn": "In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights.",
      "correctAnswerAr": "في مهمة تصنيف دون تدريب مسبق (Zero-Shot) عبر 1000 فئة، يحسب CLIP تشابه جيب التمام بين تضمين الصورة و1000 تضمين نصي للأنماط الموجهة، محققاً تعميماً متميزاً دون تعديل أوزان المصنف.",
      "correctIndex": 2,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في مهمة تصنيف دون تدريب مسبق (Zero-Shot) عبر 1000 فئة، يحسب CLIP تشابه جيب التمام بين تضمين الصورة و1000 تضمين نصي للأنماط الموجهة، محققاً تعميماً متميزاً دون تعديل أوزان المصنف.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في مهمة تصنيف دون تدريب مسبق (Zero-Shot) عبر 1000 فئة، يحسب CLIP تشابه جيب التمام بين تضمين الصورة و1000 تضمين نصي للأنماط الموجهة، محققاً تعميماً متميزاً دون تعديل أوزان المصنف.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch2_hots_34",
      "titleEn": "[HOTS] Variational Autoencoders (VAEs) & Reparameterization Trick - Evaluation 34",
      "titleAr": "[تفكير عليا] المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick) - تقييم 34",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Variational Autoencoders (VAEs) & Reparameterization Trick: (Problem 34)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick): (مسألة 34)",
      "optionsEn": [
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity."
      ],
      "optionsAr": [
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "في تدريب VAE لتوليد الوجوه، تجمع دالة الخسارة الإجمالية بين خطأ إعادة البناء وعقوبة تباعد كولباك-ليبلر التحليلية $D_{KL} = -\\frac{1}{2} \\sum (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$ لفرض انتظام الفضاء الكامن."
      ],
      "correctAnswer": "In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.",
      "correctAnswerEn": "In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.",
      "correctAnswerAr": "في تدريب VAE لتوليد الوجوه، تجمع دالة الخسارة الإجمالية بين خطأ إعادة البناء وعقوبة تباعد كولباك-ليبلر التحليلية $D_{KL} = -\\frac{1}{2} \\sum (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$ لفرض انتظام الفضاء الكامن.",
      "correctIndex": 3,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في تدريب VAE لتوليد الوجوه، تجمع دالة الخسارة الإجمالية بين خطأ إعادة البناء وعقوبة تباعد كولباك-ليبلر التحليلية $D_{KL} = -\\frac{1}{2} \\sum (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$ لفرض انتظام الفضاء الكامن.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Variational Autoencoders (VAEs) & Reparameterization Trick.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في تدريب VAE لتوليد الوجوه، تجمع دالة الخسارة الإجمالية بين خطأ إعادة البناء وعقوبة تباعد كولباك-ليبلر التحليلية $D_{KL} = -\\frac{1}{2} \\sum (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$ لفرض انتظام الفضاء الكامن.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch2_hots_35",
      "titleEn": "[HOTS] Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM) - Evaluation 35",
      "titleAr": "[تفكير عليا] النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM) - تقييم 35",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM): (Problem 35)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM): (مسألة 35)",
      "optionsEn": [
        "During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "أثناء الاستدلال، تتنبأ الشبكة العصبية $\\epsilon_\\theta(x_t, t)$ بمركبة الضوضاء المضافة، وتحسب الخطوة العكسية عينة الخطوة السابقة $x_{t-1}$، مسترجعة تفاصيل الصورة الطبيعية من ضوضاء بيضاء نقية.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise.",
      "correctAnswerEn": "During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise.",
      "correctAnswerAr": "أثناء الاستدلال، تتنبأ الشبكة العصبية $\\epsilon_\\theta(x_t, t)$ بمركبة الضوضاء المضافة، وتحسب الخطوة العكسية عينة الخطوة السابقة $x_{t-1}$، مسترجعة تفاصيل الصورة الطبيعية من ضوضاء بيضاء نقية.",
      "correctIndex": 0,
      "explanationEn": "Detailed Solution & Numerical Evaluation: During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: أثناء الاستدلال، تتنبأ الشبكة العصبية $\\epsilon_\\theta(x_t, t)$ بمركبة الضوضاء المضافة، وتحسب الخطوة العكسية عينة الخطوة السابقة $x_{t-1}$، مسترجعة تفاصيل الصورة الطبيعية من ضوضاء بيضاء نقية.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: أثناء الاستدلال، تتنبأ الشبكة العصبية $\\epsilon_\\theta(x_t, t)$ بمركبة الضوضاء المضافة، وتحسب الخطوة العكسية عينة الخطوة السابقة $x_{t-1}$، مسترجعة تفاصيل الصورة الطبيعية من ضوضاء بيضاء نقية.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch2_hots_36",
      "titleEn": "[HOTS] Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment - Evaluation 36",
      "titleAr": "[تفكير عليا] التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط - تقييم 36",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment: (Problem 36)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط: (مسألة 36)",
      "optionsEn": [
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "في مهمة تصنيف دون تدريب مسبق (Zero-Shot) عبر 1000 فئة، يحسب CLIP تشابه جيب التمام بين تضمين الصورة و1000 تضمين نصي للأنماط الموجهة، محققاً تعميماً متميزاً دون تعديل أوزان المصنف.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights.",
      "correctAnswerEn": "In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights.",
      "correctAnswerAr": "في مهمة تصنيف دون تدريب مسبق (Zero-Shot) عبر 1000 فئة، يحسب CLIP تشابه جيب التمام بين تضمين الصورة و1000 تضمين نصي للأنماط الموجهة، محققاً تعميماً متميزاً دون تعديل أوزان المصنف.",
      "correctIndex": 1,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في مهمة تصنيف دون تدريب مسبق (Zero-Shot) عبر 1000 فئة، يحسب CLIP تشابه جيب التمام بين تضمين الصورة و1000 تضمين نصي للأنماط الموجهة، محققاً تعميماً متميزاً دون تعديل أوزان المصنف.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في مهمة تصنيف دون تدريب مسبق (Zero-Shot) عبر 1000 فئة، يحسب CLIP تشابه جيب التمام بين تضمين الصورة و1000 تضمين نصي للأنماط الموجهة، محققاً تعميماً متميزاً دون تعديل أوزان المصنف.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch2_hots_37",
      "titleEn": "[HOTS] Variational Autoencoders (VAEs) & Reparameterization Trick - Evaluation 37",
      "titleAr": "[تفكير عليا] المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick) - تقييم 37",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Variational Autoencoders (VAEs) & Reparameterization Trick: (Problem 37)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick): (مسألة 37)",
      "optionsEn": [
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "في تدريب VAE لتوليد الوجوه، تجمع دالة الخسارة الإجمالية بين خطأ إعادة البناء وعقوبة تباعد كولباك-ليبلر التحليلية $D_{KL} = -\\frac{1}{2} \\sum (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$ لفرض انتظام الفضاء الكامن.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.",
      "correctAnswerEn": "In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.",
      "correctAnswerAr": "في تدريب VAE لتوليد الوجوه، تجمع دالة الخسارة الإجمالية بين خطأ إعادة البناء وعقوبة تباعد كولباك-ليبلر التحليلية $D_{KL} = -\\frac{1}{2} \\sum (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$ لفرض انتظام الفضاء الكامن.",
      "correctIndex": 2,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في تدريب VAE لتوليد الوجوه، تجمع دالة الخسارة الإجمالية بين خطأ إعادة البناء وعقوبة تباعد كولباك-ليبلر التحليلية $D_{KL} = -\\frac{1}{2} \\sum (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$ لفرض انتظام الفضاء الكامن.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Variational Autoencoders (VAEs) & Reparameterization Trick.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في تدريب VAE لتوليد الوجوه، تجمع دالة الخسارة الإجمالية بين خطأ إعادة البناء وعقوبة تباعد كولباك-ليبلر التحليلية $D_{KL} = -\\frac{1}{2} \\sum (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$ لفرض انتظام الفضاء الكامن.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch2_hots_38",
      "titleEn": "[HOTS] Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM) - Evaluation 38",
      "titleAr": "[تفكير عليا] النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM) - تقييم 38",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM): (Problem 38)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM): (مسألة 38)",
      "optionsEn": [
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise."
      ],
      "optionsAr": [
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "أثناء الاستدلال، تتنبأ الشبكة العصبية $\\epsilon_\\theta(x_t, t)$ بمركبة الضوضاء المضافة، وتحسب الخطوة العكسية عينة الخطوة السابقة $x_{t-1}$، مسترجعة تفاصيل الصورة الطبيعية من ضوضاء بيضاء نقية."
      ],
      "correctAnswer": "During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise.",
      "correctAnswerEn": "During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise.",
      "correctAnswerAr": "أثناء الاستدلال، تتنبأ الشبكة العصبية $\\epsilon_\\theta(x_t, t)$ بمركبة الضوضاء المضافة، وتحسب الخطوة العكسية عينة الخطوة السابقة $x_{t-1}$، مسترجعة تفاصيل الصورة الطبيعية من ضوضاء بيضاء نقية.",
      "correctIndex": 3,
      "explanationEn": "Detailed Solution & Numerical Evaluation: During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: أثناء الاستدلال، تتنبأ الشبكة العصبية $\\epsilon_\\theta(x_t, t)$ بمركبة الضوضاء المضافة، وتحسب الخطوة العكسية عينة الخطوة السابقة $x_{t-1}$، مسترجعة تفاصيل الصورة الطبيعية من ضوضاء بيضاء نقية.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: أثناء الاستدلال، تتنبأ الشبكة العصبية $\\epsilon_\\theta(x_t, t)$ بمركبة الضوضاء المضافة، وتحسب الخطوة العكسية عينة الخطوة السابقة $x_{t-1}$، مسترجعة تفاصيل الصورة الطبيعية من ضوضاء بيضاء نقية.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch2_hots_39",
      "titleEn": "[HOTS] Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment - Evaluation 39",
      "titleAr": "[تفكير عليا] التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط - تقييم 39",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment: (Problem 39)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط: (مسألة 39)",
      "optionsEn": [
        "In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "في مهمة تصنيف دون تدريب مسبق (Zero-Shot) عبر 1000 فئة، يحسب CLIP تشابه جيب التمام بين تضمين الصورة و1000 تضمين نصي للأنماط الموجهة، محققاً تعميماً متميزاً دون تعديل أوزان المصنف.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights.",
      "correctAnswerEn": "In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights.",
      "correctAnswerAr": "في مهمة تصنيف دون تدريب مسبق (Zero-Shot) عبر 1000 فئة، يحسب CLIP تشابه جيب التمام بين تضمين الصورة و1000 تضمين نصي للأنماط الموجهة، محققاً تعميماً متميزاً دون تعديل أوزان المصنف.",
      "correctIndex": 0,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في مهمة تصنيف دون تدريب مسبق (Zero-Shot) عبر 1000 فئة، يحسب CLIP تشابه جيب التمام بين تضمين الصورة و1000 تضمين نصي للأنماط الموجهة، محققاً تعميماً متميزاً دون تعديل أوزان المصنف.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في مهمة تصنيف دون تدريب مسبق (Zero-Shot) عبر 1000 فئة، يحسب CLIP تشابه جيب التمام بين تضمين الصورة و1000 تضمين نصي للأنماط الموجهة، محققاً تعميماً متميزاً دون تعديل أوزان المصنف.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch2_hots_40",
      "titleEn": "[HOTS] Variational Autoencoders (VAEs) & Reparameterization Trick - Evaluation 40",
      "titleAr": "[تفكير عليا] المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick) - تقييم 40",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Variational Autoencoders (VAEs) & Reparameterization Trick: (Problem 40)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick): (مسألة 40)",
      "optionsEn": [
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "في تدريب VAE لتوليد الوجوه، تجمع دالة الخسارة الإجمالية بين خطأ إعادة البناء وعقوبة تباعد كولباك-ليبلر التحليلية $D_{KL} = -\\frac{1}{2} \\sum (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$ لفرض انتظام الفضاء الكامن.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.",
      "correctAnswerEn": "In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.",
      "correctAnswerAr": "في تدريب VAE لتوليد الوجوه، تجمع دالة الخسارة الإجمالية بين خطأ إعادة البناء وعقوبة تباعد كولباك-ليبلر التحليلية $D_{KL} = -\\frac{1}{2} \\sum (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$ لفرض انتظام الفضاء الكامن.",
      "correctIndex": 1,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في تدريب VAE لتوليد الوجوه، تجمع دالة الخسارة الإجمالية بين خطأ إعادة البناء وعقوبة تباعد كولباك-ليبلر التحليلية $D_{KL} = -\\frac{1}{2} \\sum (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$ لفرض انتظام الفضاء الكامن.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Variational Autoencoders (VAEs) & Reparameterization Trick.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في تدريب VAE لتوليد الوجوه، تجمع دالة الخسارة الإجمالية بين خطأ إعادة البناء وعقوبة تباعد كولباك-ليبلر التحليلية $D_{KL} = -\\frac{1}{2} \\sum (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$ لفرض انتظام الفضاء الكامن.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch2_hots_41",
      "titleEn": "[HOTS] Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM) - Evaluation 41",
      "titleAr": "[تفكير عليا] النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM) - تقييم 41",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM): (Problem 41)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM): (مسألة 41)",
      "optionsEn": [
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "أثناء الاستدلال، تتنبأ الشبكة العصبية $\\epsilon_\\theta(x_t, t)$ بمركبة الضوضاء المضافة، وتحسب الخطوة العكسية عينة الخطوة السابقة $x_{t-1}$، مسترجعة تفاصيل الصورة الطبيعية من ضوضاء بيضاء نقية.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise.",
      "correctAnswerEn": "During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise.",
      "correctAnswerAr": "أثناء الاستدلال، تتنبأ الشبكة العصبية $\\epsilon_\\theta(x_t, t)$ بمركبة الضوضاء المضافة، وتحسب الخطوة العكسية عينة الخطوة السابقة $x_{t-1}$، مسترجعة تفاصيل الصورة الطبيعية من ضوضاء بيضاء نقية.",
      "correctIndex": 2,
      "explanationEn": "Detailed Solution & Numerical Evaluation: During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: أثناء الاستدلال، تتنبأ الشبكة العصبية $\\epsilon_\\theta(x_t, t)$ بمركبة الضوضاء المضافة، وتحسب الخطوة العكسية عينة الخطوة السابقة $x_{t-1}$، مسترجعة تفاصيل الصورة الطبيعية من ضوضاء بيضاء نقية.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: أثناء الاستدلال، تتنبأ الشبكة العصبية $\\epsilon_\\theta(x_t, t)$ بمركبة الضوضاء المضافة، وتحسب الخطوة العكسية عينة الخطوة السابقة $x_{t-1}$، مسترجعة تفاصيل الصورة الطبيعية من ضوضاء بيضاء نقية.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch2_hots_42",
      "titleEn": "[HOTS] Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment - Evaluation 42",
      "titleAr": "[تفكير عليا] التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط - تقييم 42",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment: (Problem 42)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط: (مسألة 42)",
      "optionsEn": [
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights."
      ],
      "optionsAr": [
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "في مهمة تصنيف دون تدريب مسبق (Zero-Shot) عبر 1000 فئة، يحسب CLIP تشابه جيب التمام بين تضمين الصورة و1000 تضمين نصي للأنماط الموجهة، محققاً تعميماً متميزاً دون تعديل أوزان المصنف."
      ],
      "correctAnswer": "In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights.",
      "correctAnswerEn": "In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights.",
      "correctAnswerAr": "في مهمة تصنيف دون تدريب مسبق (Zero-Shot) عبر 1000 فئة، يحسب CLIP تشابه جيب التمام بين تضمين الصورة و1000 تضمين نصي للأنماط الموجهة، محققاً تعميماً متميزاً دون تعديل أوزان المصنف.",
      "correctIndex": 3,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في مهمة تصنيف دون تدريب مسبق (Zero-Shot) عبر 1000 فئة، يحسب CLIP تشابه جيب التمام بين تضمين الصورة و1000 تضمين نصي للأنماط الموجهة، محققاً تعميماً متميزاً دون تعديل أوزان المصنف.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في مهمة تصنيف دون تدريب مسبق (Zero-Shot) عبر 1000 فئة، يحسب CLIP تشابه جيب التمام بين تضمين الصورة و1000 تضمين نصي للأنماط الموجهة، محققاً تعميماً متميزاً دون تعديل أوزان المصنف.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch2_hots_43",
      "titleEn": "[HOTS] Variational Autoencoders (VAEs) & Reparameterization Trick - Evaluation 43",
      "titleAr": "[تفكير عليا] المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick) - تقييم 43",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Variational Autoencoders (VAEs) & Reparameterization Trick: (Problem 43)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick): (مسألة 43)",
      "optionsEn": [
        "In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "في تدريب VAE لتوليد الوجوه، تجمع دالة الخسارة الإجمالية بين خطأ إعادة البناء وعقوبة تباعد كولباك-ليبلر التحليلية $D_{KL} = -\\frac{1}{2} \\sum (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$ لفرض انتظام الفضاء الكامن.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.",
      "correctAnswerEn": "In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.",
      "correctAnswerAr": "في تدريب VAE لتوليد الوجوه، تجمع دالة الخسارة الإجمالية بين خطأ إعادة البناء وعقوبة تباعد كولباك-ليبلر التحليلية $D_{KL} = -\\frac{1}{2} \\sum (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$ لفرض انتظام الفضاء الكامن.",
      "correctIndex": 0,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في تدريب VAE لتوليد الوجوه، تجمع دالة الخسارة الإجمالية بين خطأ إعادة البناء وعقوبة تباعد كولباك-ليبلر التحليلية $D_{KL} = -\\frac{1}{2} \\sum (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$ لفرض انتظام الفضاء الكامن.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Variational Autoencoders (VAEs) & Reparameterization Trick.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في تدريب VAE لتوليد الوجوه، تجمع دالة الخسارة الإجمالية بين خطأ إعادة البناء وعقوبة تباعد كولباك-ليبلر التحليلية $D_{KL} = -\\frac{1}{2} \\sum (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$ لفرض انتظام الفضاء الكامن.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch2_hots_44",
      "titleEn": "[HOTS] Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM) - Evaluation 44",
      "titleAr": "[تفكير عليا] النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM) - تقييم 44",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM): (Problem 44)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM): (مسألة 44)",
      "optionsEn": [
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "أثناء الاستدلال، تتنبأ الشبكة العصبية $\\epsilon_\\theta(x_t, t)$ بمركبة الضوضاء المضافة، وتحسب الخطوة العكسية عينة الخطوة السابقة $x_{t-1}$، مسترجعة تفاصيل الصورة الطبيعية من ضوضاء بيضاء نقية.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise.",
      "correctAnswerEn": "During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise.",
      "correctAnswerAr": "أثناء الاستدلال، تتنبأ الشبكة العصبية $\\epsilon_\\theta(x_t, t)$ بمركبة الضوضاء المضافة، وتحسب الخطوة العكسية عينة الخطوة السابقة $x_{t-1}$، مسترجعة تفاصيل الصورة الطبيعية من ضوضاء بيضاء نقية.",
      "correctIndex": 1,
      "explanationEn": "Detailed Solution & Numerical Evaluation: During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: أثناء الاستدلال، تتنبأ الشبكة العصبية $\\epsilon_\\theta(x_t, t)$ بمركبة الضوضاء المضافة، وتحسب الخطوة العكسية عينة الخطوة السابقة $x_{t-1}$، مسترجعة تفاصيل الصورة الطبيعية من ضوضاء بيضاء نقية.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: أثناء الاستدلال، تتنبأ الشبكة العصبية $\\epsilon_\\theta(x_t, t)$ بمركبة الضوضاء المضافة، وتحسب الخطوة العكسية عينة الخطوة السابقة $x_{t-1}$، مسترجعة تفاصيل الصورة الطبيعية من ضوضاء بيضاء نقية.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch2_hots_45",
      "titleEn": "[HOTS] Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment - Evaluation 45",
      "titleAr": "[تفكير عليا] التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط - تقييم 45",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment: (Problem 45)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط: (مسألة 45)",
      "optionsEn": [
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "في مهمة تصنيف دون تدريب مسبق (Zero-Shot) عبر 1000 فئة، يحسب CLIP تشابه جيب التمام بين تضمين الصورة و1000 تضمين نصي للأنماط الموجهة، محققاً تعميماً متميزاً دون تعديل أوزان المصنف.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights.",
      "correctAnswerEn": "In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights.",
      "correctAnswerAr": "في مهمة تصنيف دون تدريب مسبق (Zero-Shot) عبر 1000 فئة، يحسب CLIP تشابه جيب التمام بين تضمين الصورة و1000 تضمين نصي للأنماط الموجهة، محققاً تعميماً متميزاً دون تعديل أوزان المصنف.",
      "correctIndex": 2,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في مهمة تصنيف دون تدريب مسبق (Zero-Shot) عبر 1000 فئة، يحسب CLIP تشابه جيب التمام بين تضمين الصورة و1000 تضمين نصي للأنماط الموجهة، محققاً تعميماً متميزاً دون تعديل أوزان المصنف.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في مهمة تصنيف دون تدريب مسبق (Zero-Shot) عبر 1000 فئة، يحسب CLIP تشابه جيب التمام بين تضمين الصورة و1000 تضمين نصي للأنماط الموجهة، محققاً تعميماً متميزاً دون تعديل أوزان المصنف.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch2_hots_46",
      "titleEn": "[HOTS] Variational Autoencoders (VAEs) & Reparameterization Trick - Evaluation 46",
      "titleAr": "[تفكير عليا] المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick) - تقييم 46",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Variational Autoencoders (VAEs) & Reparameterization Trick: (Problem 46)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick): (مسألة 46)",
      "optionsEn": [
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity."
      ],
      "optionsAr": [
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "في تدريب VAE لتوليد الوجوه، تجمع دالة الخسارة الإجمالية بين خطأ إعادة البناء وعقوبة تباعد كولباك-ليبلر التحليلية $D_{KL} = -\\frac{1}{2} \\sum (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$ لفرض انتظام الفضاء الكامن."
      ],
      "correctAnswer": "In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.",
      "correctAnswerEn": "In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.",
      "correctAnswerAr": "في تدريب VAE لتوليد الوجوه، تجمع دالة الخسارة الإجمالية بين خطأ إعادة البناء وعقوبة تباعد كولباك-ليبلر التحليلية $D_{KL} = -\\frac{1}{2} \\sum (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$ لفرض انتظام الفضاء الكامن.",
      "correctIndex": 3,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في تدريب VAE لتوليد الوجوه، تجمع دالة الخسارة الإجمالية بين خطأ إعادة البناء وعقوبة تباعد كولباك-ليبلر التحليلية $D_{KL} = -\\frac{1}{2} \\sum (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$ لفرض انتظام الفضاء الكامن.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Variational Autoencoders (VAEs) & Reparameterization Trick.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في تدريب VAE لتوليد الوجوه، تجمع دالة الخسارة الإجمالية بين خطأ إعادة البناء وعقوبة تباعد كولباك-ليبلر التحليلية $D_{KL} = -\\frac{1}{2} \\sum (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$ لفرض انتظام الفضاء الكامن.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch2_hots_47",
      "titleEn": "[HOTS] Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM) - Evaluation 47",
      "titleAr": "[تفكير عليا] النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM) - تقييم 47",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM): (Problem 47)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM): (مسألة 47)",
      "optionsEn": [
        "During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "أثناء الاستدلال، تتنبأ الشبكة العصبية $\\epsilon_\\theta(x_t, t)$ بمركبة الضوضاء المضافة، وتحسب الخطوة العكسية عينة الخطوة السابقة $x_{t-1}$، مسترجعة تفاصيل الصورة الطبيعية من ضوضاء بيضاء نقية.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise.",
      "correctAnswerEn": "During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise.",
      "correctAnswerAr": "أثناء الاستدلال، تتنبأ الشبكة العصبية $\\epsilon_\\theta(x_t, t)$ بمركبة الضوضاء المضافة، وتحسب الخطوة العكسية عينة الخطوة السابقة $x_{t-1}$، مسترجعة تفاصيل الصورة الطبيعية من ضوضاء بيضاء نقية.",
      "correctIndex": 0,
      "explanationEn": "Detailed Solution & Numerical Evaluation: During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: أثناء الاستدلال، تتنبأ الشبكة العصبية $\\epsilon_\\theta(x_t, t)$ بمركبة الضوضاء المضافة، وتحسب الخطوة العكسية عينة الخطوة السابقة $x_{t-1}$، مسترجعة تفاصيل الصورة الطبيعية من ضوضاء بيضاء نقية.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: أثناء الاستدلال، تتنبأ الشبكة العصبية $\\epsilon_\\theta(x_t, t)$ بمركبة الضوضاء المضافة، وتحسب الخطوة العكسية عينة الخطوة السابقة $x_{t-1}$، مسترجعة تفاصيل الصورة الطبيعية من ضوضاء بيضاء نقية.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch2_hots_48",
      "titleEn": "[HOTS] Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment - Evaluation 48",
      "titleAr": "[تفكير عليا] التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط - تقييم 48",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment: (Problem 48)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط: (مسألة 48)",
      "optionsEn": [
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "في مهمة تصنيف دون تدريب مسبق (Zero-Shot) عبر 1000 فئة، يحسب CLIP تشابه جيب التمام بين تضمين الصورة و1000 تضمين نصي للأنماط الموجهة، محققاً تعميماً متميزاً دون تعديل أوزان المصنف.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights.",
      "correctAnswerEn": "In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights.",
      "correctAnswerAr": "في مهمة تصنيف دون تدريب مسبق (Zero-Shot) عبر 1000 فئة، يحسب CLIP تشابه جيب التمام بين تضمين الصورة و1000 تضمين نصي للأنماط الموجهة، محققاً تعميماً متميزاً دون تعديل أوزان المصنف.",
      "correctIndex": 1,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في مهمة تصنيف دون تدريب مسبق (Zero-Shot) عبر 1000 فئة، يحسب CLIP تشابه جيب التمام بين تضمين الصورة و1000 تضمين نصي للأنماط الموجهة، محققاً تعميماً متميزاً دون تعديل أوزان المصنف.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في مهمة تصنيف دون تدريب مسبق (Zero-Shot) عبر 1000 فئة، يحسب CLIP تشابه جيب التمام بين تضمين الصورة و1000 تضمين نصي للأنماط الموجهة، محققاً تعميماً متميزاً دون تعديل أوزان المصنف.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch2_hots_49",
      "titleEn": "[HOTS] Variational Autoencoders (VAEs) & Reparameterization Trick - Evaluation 49",
      "titleAr": "[تفكير عليا] المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick) - تقييم 49",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Variational Autoencoders (VAEs) & Reparameterization Trick: (Problem 49)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick): (مسألة 49)",
      "optionsEn": [
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "في تدريب VAE لتوليد الوجوه، تجمع دالة الخسارة الإجمالية بين خطأ إعادة البناء وعقوبة تباعد كولباك-ليبلر التحليلية $D_{KL} = -\\frac{1}{2} \\sum (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$ لفرض انتظام الفضاء الكامن.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.",
      "correctAnswerEn": "In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.",
      "correctAnswerAr": "في تدريب VAE لتوليد الوجوه، تجمع دالة الخسارة الإجمالية بين خطأ إعادة البناء وعقوبة تباعد كولباك-ليبلر التحليلية $D_{KL} = -\\frac{1}{2} \\sum (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$ لفرض انتظام الفضاء الكامن.",
      "correctIndex": 2,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في تدريب VAE لتوليد الوجوه، تجمع دالة الخسارة الإجمالية بين خطأ إعادة البناء وعقوبة تباعد كولباك-ليبلر التحليلية $D_{KL} = -\\frac{1}{2} \\sum (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$ لفرض انتظام الفضاء الكامن.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Variational Autoencoders (VAEs) & Reparameterization Trick.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في تدريب VAE لتوليد الوجوه، تجمع دالة الخسارة الإجمالية بين خطأ إعادة البناء وعقوبة تباعد كولباك-ليبلر التحليلية $D_{KL} = -\\frac{1}{2} \\sum (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$ لفرض انتظام الفضاء الكامن.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch2_hots_50",
      "titleEn": "[HOTS] Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM) - Evaluation 50",
      "titleAr": "[تفكير عليا] النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM) - تقييم 50",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM): (Problem 50)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM): (مسألة 50)",
      "optionsEn": [
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise."
      ],
      "optionsAr": [
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "أثناء الاستدلال، تتنبأ الشبكة العصبية $\\epsilon_\\theta(x_t, t)$ بمركبة الضوضاء المضافة، وتحسب الخطوة العكسية عينة الخطوة السابقة $x_{t-1}$، مسترجعة تفاصيل الصورة الطبيعية من ضوضاء بيضاء نقية."
      ],
      "correctAnswer": "During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise.",
      "correctAnswerEn": "During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise.",
      "correctAnswerAr": "أثناء الاستدلال، تتنبأ الشبكة العصبية $\\epsilon_\\theta(x_t, t)$ بمركبة الضوضاء المضافة، وتحسب الخطوة العكسية عينة الخطوة السابقة $x_{t-1}$، مسترجعة تفاصيل الصورة الطبيعية من ضوضاء بيضاء نقية.",
      "correctIndex": 3,
      "explanationEn": "Detailed Solution & Numerical Evaluation: During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: أثناء الاستدلال، تتنبأ الشبكة العصبية $\\epsilon_\\theta(x_t, t)$ بمركبة الضوضاء المضافة، وتحسب الخطوة العكسية عينة الخطوة السابقة $x_{t-1}$، مسترجعة تفاصيل الصورة الطبيعية من ضوضاء بيضاء نقية.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: أثناء الاستدلال، تتنبأ الشبكة العصبية $\\epsilon_\\theta(x_t, t)$ بمركبة الضوضاء المضافة، وتحسب الخطوة العكسية عينة الخطوة السابقة $x_{t-1}$، مسترجعة تفاصيل الصورة الطبيعية من ضوضاء بيضاء نقية.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch2_hots_51",
      "titleEn": "[HOTS] Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment - Evaluation 51",
      "titleAr": "[تفكير عليا] التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط - تقييم 51",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment: (Problem 51)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط: (مسألة 51)",
      "optionsEn": [
        "In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "في مهمة تصنيف دون تدريب مسبق (Zero-Shot) عبر 1000 فئة، يحسب CLIP تشابه جيب التمام بين تضمين الصورة و1000 تضمين نصي للأنماط الموجهة، محققاً تعميماً متميزاً دون تعديل أوزان المصنف.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights.",
      "correctAnswerEn": "In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights.",
      "correctAnswerAr": "في مهمة تصنيف دون تدريب مسبق (Zero-Shot) عبر 1000 فئة، يحسب CLIP تشابه جيب التمام بين تضمين الصورة و1000 تضمين نصي للأنماط الموجهة، محققاً تعميماً متميزاً دون تعديل أوزان المصنف.",
      "correctIndex": 0,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في مهمة تصنيف دون تدريب مسبق (Zero-Shot) عبر 1000 فئة، يحسب CLIP تشابه جيب التمام بين تضمين الصورة و1000 تضمين نصي للأنماط الموجهة، محققاً تعميماً متميزاً دون تعديل أوزان المصنف.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في مهمة تصنيف دون تدريب مسبق (Zero-Shot) عبر 1000 فئة، يحسب CLIP تشابه جيب التمام بين تضمين الصورة و1000 تضمين نصي للأنماط الموجهة، محققاً تعميماً متميزاً دون تعديل أوزان المصنف.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch2_hots_52",
      "titleEn": "[HOTS] Variational Autoencoders (VAEs) & Reparameterization Trick - Evaluation 52",
      "titleAr": "[تفكير عليا] المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick) - تقييم 52",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Variational Autoencoders (VAEs) & Reparameterization Trick: (Problem 52)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick): (مسألة 52)",
      "optionsEn": [
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "في تدريب VAE لتوليد الوجوه، تجمع دالة الخسارة الإجمالية بين خطأ إعادة البناء وعقوبة تباعد كولباك-ليبلر التحليلية $D_{KL} = -\\frac{1}{2} \\sum (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$ لفرض انتظام الفضاء الكامن.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.",
      "correctAnswerEn": "In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.",
      "correctAnswerAr": "في تدريب VAE لتوليد الوجوه، تجمع دالة الخسارة الإجمالية بين خطأ إعادة البناء وعقوبة تباعد كولباك-ليبلر التحليلية $D_{KL} = -\\frac{1}{2} \\sum (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$ لفرض انتظام الفضاء الكامن.",
      "correctIndex": 1,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في تدريب VAE لتوليد الوجوه، تجمع دالة الخسارة الإجمالية بين خطأ إعادة البناء وعقوبة تباعد كولباك-ليبلر التحليلية $D_{KL} = -\\frac{1}{2} \\sum (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$ لفرض انتظام الفضاء الكامن.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Variational Autoencoders (VAEs) & Reparameterization Trick.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في تدريب VAE لتوليد الوجوه، تجمع دالة الخسارة الإجمالية بين خطأ إعادة البناء وعقوبة تباعد كولباك-ليبلر التحليلية $D_{KL} = -\\frac{1}{2} \\sum (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$ لفرض انتظام الفضاء الكامن.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch2_hots_53",
      "titleEn": "[HOTS] Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM) - Evaluation 53",
      "titleAr": "[تفكير عليا] النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM) - تقييم 53",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM): (Problem 53)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM): (مسألة 53)",
      "optionsEn": [
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "أثناء الاستدلال، تتنبأ الشبكة العصبية $\\epsilon_\\theta(x_t, t)$ بمركبة الضوضاء المضافة، وتحسب الخطوة العكسية عينة الخطوة السابقة $x_{t-1}$، مسترجعة تفاصيل الصورة الطبيعية من ضوضاء بيضاء نقية.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise.",
      "correctAnswerEn": "During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise.",
      "correctAnswerAr": "أثناء الاستدلال، تتنبأ الشبكة العصبية $\\epsilon_\\theta(x_t, t)$ بمركبة الضوضاء المضافة، وتحسب الخطوة العكسية عينة الخطوة السابقة $x_{t-1}$، مسترجعة تفاصيل الصورة الطبيعية من ضوضاء بيضاء نقية.",
      "correctIndex": 2,
      "explanationEn": "Detailed Solution & Numerical Evaluation: During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: أثناء الاستدلال، تتنبأ الشبكة العصبية $\\epsilon_\\theta(x_t, t)$ بمركبة الضوضاء المضافة، وتحسب الخطوة العكسية عينة الخطوة السابقة $x_{t-1}$، مسترجعة تفاصيل الصورة الطبيعية من ضوضاء بيضاء نقية.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: أثناء الاستدلال، تتنبأ الشبكة العصبية $\\epsilon_\\theta(x_t, t)$ بمركبة الضوضاء المضافة، وتحسب الخطوة العكسية عينة الخطوة السابقة $x_{t-1}$، مسترجعة تفاصيل الصورة الطبيعية من ضوضاء بيضاء نقية.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch2_hots_54",
      "titleEn": "[HOTS] Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment - Evaluation 54",
      "titleAr": "[تفكير عليا] التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط - تقييم 54",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment: (Problem 54)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط: (مسألة 54)",
      "optionsEn": [
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights."
      ],
      "optionsAr": [
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "في مهمة تصنيف دون تدريب مسبق (Zero-Shot) عبر 1000 فئة، يحسب CLIP تشابه جيب التمام بين تضمين الصورة و1000 تضمين نصي للأنماط الموجهة، محققاً تعميماً متميزاً دون تعديل أوزان المصنف."
      ],
      "correctAnswer": "In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights.",
      "correctAnswerEn": "In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights.",
      "correctAnswerAr": "في مهمة تصنيف دون تدريب مسبق (Zero-Shot) عبر 1000 فئة، يحسب CLIP تشابه جيب التمام بين تضمين الصورة و1000 تضمين نصي للأنماط الموجهة، محققاً تعميماً متميزاً دون تعديل أوزان المصنف.",
      "correctIndex": 3,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في مهمة تصنيف دون تدريب مسبق (Zero-Shot) عبر 1000 فئة، يحسب CLIP تشابه جيب التمام بين تضمين الصورة و1000 تضمين نصي للأنماط الموجهة، محققاً تعميماً متميزاً دون تعديل أوزان المصنف.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في مهمة تصنيف دون تدريب مسبق (Zero-Shot) عبر 1000 فئة، يحسب CLIP تشابه جيب التمام بين تضمين الصورة و1000 تضمين نصي للأنماط الموجهة، محققاً تعميماً متميزاً دون تعديل أوزان المصنف.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch2_hots_55",
      "titleEn": "[HOTS] Variational Autoencoders (VAEs) & Reparameterization Trick - Evaluation 55",
      "titleAr": "[تفكير عليا] المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick) - تقييم 55",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Variational Autoencoders (VAEs) & Reparameterization Trick: (Problem 55)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick): (مسألة 55)",
      "optionsEn": [
        "In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "في تدريب VAE لتوليد الوجوه، تجمع دالة الخسارة الإجمالية بين خطأ إعادة البناء وعقوبة تباعد كولباك-ليبلر التحليلية $D_{KL} = -\\frac{1}{2} \\sum (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$ لفرض انتظام الفضاء الكامن.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.",
      "correctAnswerEn": "In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.",
      "correctAnswerAr": "في تدريب VAE لتوليد الوجوه، تجمع دالة الخسارة الإجمالية بين خطأ إعادة البناء وعقوبة تباعد كولباك-ليبلر التحليلية $D_{KL} = -\\frac{1}{2} \\sum (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$ لفرض انتظام الفضاء الكامن.",
      "correctIndex": 0,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في تدريب VAE لتوليد الوجوه، تجمع دالة الخسارة الإجمالية بين خطأ إعادة البناء وعقوبة تباعد كولباك-ليبلر التحليلية $D_{KL} = -\\frac{1}{2} \\sum (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$ لفرض انتظام الفضاء الكامن.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Variational Autoencoders (VAEs) & Reparameterization Trick.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في تدريب VAE لتوليد الوجوه، تجمع دالة الخسارة الإجمالية بين خطأ إعادة البناء وعقوبة تباعد كولباك-ليبلر التحليلية $D_{KL} = -\\frac{1}{2} \\sum (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$ لفرض انتظام الفضاء الكامن.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch2_hots_56",
      "titleEn": "[HOTS] Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM) - Evaluation 56",
      "titleAr": "[تفكير عليا] النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM) - تقييم 56",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM): (Problem 56)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM): (مسألة 56)",
      "optionsEn": [
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "أثناء الاستدلال، تتنبأ الشبكة العصبية $\\epsilon_\\theta(x_t, t)$ بمركبة الضوضاء المضافة، وتحسب الخطوة العكسية عينة الخطوة السابقة $x_{t-1}$، مسترجعة تفاصيل الصورة الطبيعية من ضوضاء بيضاء نقية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise.",
      "correctAnswerEn": "During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise.",
      "correctAnswerAr": "أثناء الاستدلال، تتنبأ الشبكة العصبية $\\epsilon_\\theta(x_t, t)$ بمركبة الضوضاء المضافة، وتحسب الخطوة العكسية عينة الخطوة السابقة $x_{t-1}$، مسترجعة تفاصيل الصورة الطبيعية من ضوضاء بيضاء نقية.",
      "correctIndex": 1,
      "explanationEn": "Detailed Solution & Numerical Evaluation: During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: أثناء الاستدلال، تتنبأ الشبكة العصبية $\\epsilon_\\theta(x_t, t)$ بمركبة الضوضاء المضافة، وتحسب الخطوة العكسية عينة الخطوة السابقة $x_{t-1}$، مسترجعة تفاصيل الصورة الطبيعية من ضوضاء بيضاء نقية.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: أثناء الاستدلال، تتنبأ الشبكة العصبية $\\epsilon_\\theta(x_t, t)$ بمركبة الضوضاء المضافة، وتحسب الخطوة العكسية عينة الخطوة السابقة $x_{t-1}$، مسترجعة تفاصيل الصورة الطبيعية من ضوضاء بيضاء نقية.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch2_hots_57",
      "titleEn": "[HOTS] Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment - Evaluation 57",
      "titleAr": "[تفكير عليا] التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط - تقييم 57",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment: (Problem 57)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط: (مسألة 57)",
      "optionsEn": [
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "في مهمة تصنيف دون تدريب مسبق (Zero-Shot) عبر 1000 فئة، يحسب CLIP تشابه جيب التمام بين تضمين الصورة و1000 تضمين نصي للأنماط الموجهة، محققاً تعميماً متميزاً دون تعديل أوزان المصنف.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights.",
      "correctAnswerEn": "In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights.",
      "correctAnswerAr": "في مهمة تصنيف دون تدريب مسبق (Zero-Shot) عبر 1000 فئة، يحسب CLIP تشابه جيب التمام بين تضمين الصورة و1000 تضمين نصي للأنماط الموجهة، محققاً تعميماً متميزاً دون تعديل أوزان المصنف.",
      "correctIndex": 2,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في مهمة تصنيف دون تدريب مسبق (Zero-Shot) عبر 1000 فئة، يحسب CLIP تشابه جيب التمام بين تضمين الصورة و1000 تضمين نصي للأنماط الموجهة، محققاً تعميماً متميزاً دون تعديل أوزان المصنف.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في مهمة تصنيف دون تدريب مسبق (Zero-Shot) عبر 1000 فئة، يحسب CLIP تشابه جيب التمام بين تضمين الصورة و1000 تضمين نصي للأنماط الموجهة، محققاً تعميماً متميزاً دون تعديل أوزان المصنف.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch2_hots_58",
      "titleEn": "[HOTS] Variational Autoencoders (VAEs) & Reparameterization Trick - Evaluation 58",
      "titleAr": "[تفكير عليا] المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick) - تقييم 58",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Variational Autoencoders (VAEs) & Reparameterization Trick: (Problem 58)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick): (مسألة 58)",
      "optionsEn": [
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity."
      ],
      "optionsAr": [
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "في تدريب VAE لتوليد الوجوه، تجمع دالة الخسارة الإجمالية بين خطأ إعادة البناء وعقوبة تباعد كولباك-ليبلر التحليلية $D_{KL} = -\\frac{1}{2} \\sum (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$ لفرض انتظام الفضاء الكامن."
      ],
      "correctAnswer": "In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.",
      "correctAnswerEn": "In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.",
      "correctAnswerAr": "في تدريب VAE لتوليد الوجوه، تجمع دالة الخسارة الإجمالية بين خطأ إعادة البناء وعقوبة تباعد كولباك-ليبلر التحليلية $D_{KL} = -\\frac{1}{2} \\sum (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$ لفرض انتظام الفضاء الكامن.",
      "correctIndex": 3,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في تدريب VAE لتوليد الوجوه، تجمع دالة الخسارة الإجمالية بين خطأ إعادة البناء وعقوبة تباعد كولباك-ليبلر التحليلية $D_{KL} = -\\frac{1}{2} \\sum (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$ لفرض انتظام الفضاء الكامن.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Variational Autoencoders (VAEs) & Reparameterization Trick.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في تدريب VAE لتوليد الوجوه، تجمع دالة الخسارة الإجمالية بين خطأ إعادة البناء وعقوبة تباعد كولباك-ليبلر التحليلية $D_{KL} = -\\frac{1}{2} \\sum (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$ لفرض انتظام الفضاء الكامن.."
      ],
      "difficulty": "hots"
    }
  ]
};
