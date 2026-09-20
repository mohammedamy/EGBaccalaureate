import type { ChapterDatabank } from '../../../types/curriculum';

export const th_ai_data_science_ch3Databank: ChapterDatabank = {
  "easy": [
    {
      "id": "th_ai_data_science_ch3_easy_1",
      "titleEn": "[EASY] Subword Tokenization (BPE) & Dense Word Embeddings - Review 1",
      "titleAr": "[مستوى أساسي] تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة - سؤال 1",
      "questionEn": "[AI & Data Science Core Concept] Regarding Subword Tokenization (BPE) & Dense Word Embeddings, which of the following statements is theoretically and mathematically sound? (Variant 1)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 1)",
      "optionsEn": [
        "Byte-Pair Encoding (BPE) constructs subword vocabularies by iteratively merging the most frequent character pairs, effectively solving out-of-vocabulary (OOV) challenges in morphologically rich languages like Arabic.",
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "يبني ترميز الأزواج الثنائية (BPE) مفردات المقاطع الفرعية عبر الدمج التكراري لأزواج الحروف الأكثر تكراراً، مما يحل جذرياً مشكلة الكلمات خارج القاموس في اللغات الغنية كالعربية.",
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "Byte-Pair Encoding (BPE) constructs subword vocabularies by iteratively merging the most frequent character pairs, effectively solving out-of-vocabulary (OOV) challenges in morphologically rich languages like Arabic.",
      "correctAnswerEn": "Byte-Pair Encoding (BPE) constructs subword vocabularies by iteratively merging the most frequent character pairs, effectively solving out-of-vocabulary (OOV) challenges in morphologically rich languages like Arabic.",
      "correctAnswerAr": "يبني ترميز الأزواج الثنائية (BPE) مفردات المقاطع الفرعية عبر الدمج التكراري لأزواج الحروف الأكثر تكراراً، مما يحل جذرياً مشكلة الكلمات خارج القاموس في اللغات الغنية كالعربية.",
      "correctIndex": 0,
      "explanationEn": "Correct Theoretical Formulation: Byte-Pair Encoding (BPE) constructs subword vocabularies by iteratively merging the most frequent character pairs, effectively solving out-of-vocabulary (OOV) challenges in morphologically rich languages like Arabic.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يبني ترميز الأزواج الثنائية (BPE) مفردات المقاطع الفرعية عبر الدمج التكراري لأزواج الحروف الأكثر تكراراً، مما يحل جذرياً مشكلة الكلمات خارج القاموس في اللغات الغنية كالعربية.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Subword Tokenization (BPE) & Dense Word Embeddings.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Byte-Pair Encoding (BPE) constructs subword vocabularies by iteratively merging the most frequent character pairs, effectively solving out-of-vocabulary (OOV) challenges in morphologically rich languages like Arabic.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يبني ترميز الأزواج الثنائية (BPE) مفردات المقاطع الفرعية عبر الدمج التكراري لأزواج الحروف الأكثر تكراراً، مما يحل جذرياً مشكلة الكلمات خارج القاموس في اللغات الغنية كالعربية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch3_easy_2",
      "titleEn": "[EASY] Scaled Dot-Product Multi-Head Self-Attention Mechanisms - Review 2",
      "titleAr": "[مستوى أساسي] آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس - سؤال 2",
      "questionEn": "[AI & Data Science Core Concept] Regarding Scaled Dot-Product Multi-Head Self-Attention Mechanisms, which of the following statements is theoretically and mathematically sound? (Variant 2)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 2)",
      "optionsEn": [
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "Self-attention allows every token in an input sequence to dynamically attend to and weigh the representations of all other tokens based on pairwise query-key compatibility.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تتيح آلية الانتباه الذاتي لكل رمز في النص المكتوب التركيز الديناميكي وترجيح تمثيلات الرموز الأخرى وفق التوافق الزوجي بين الاستعلام والمفتاح.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "Self-attention allows every token in an input sequence to dynamically attend to and weigh the representations of all other tokens based on pairwise query-key compatibility.",
      "correctAnswerEn": "Self-attention allows every token in an input sequence to dynamically attend to and weigh the representations of all other tokens based on pairwise query-key compatibility.",
      "correctAnswerAr": "تتيح آلية الانتباه الذاتي لكل رمز في النص المكتوب التركيز الديناميكي وترجيح تمثيلات الرموز الأخرى وفق التوافق الزوجي بين الاستعلام والمفتاح.",
      "correctIndex": 1,
      "explanationEn": "Correct Theoretical Formulation: Self-attention allows every token in an input sequence to dynamically attend to and weigh the representations of all other tokens based on pairwise query-key compatibility.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تتيح آلية الانتباه الذاتي لكل رمز في النص المكتوب التركيز الديناميكي وترجيح تمثيلات الرموز الأخرى وفق التوافق الزوجي بين الاستعلام والمفتاح.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Scaled Dot-Product Multi-Head Self-Attention Mechanisms.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Self-attention allows every token in an input sequence to dynamically attend to and weigh the representations of all other tokens based on pairwise query-key compatibility.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تتيح آلية الانتباه الذاتي لكل رمز في النص المكتوب التركيز الديناميكي وترجيح تمثيلات الرموز الأخرى وفق التوافق الزوجي بين الاستعلام والمفتاح.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch3_easy_3",
      "titleEn": "[EASY] Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG) - Review 3",
      "titleAr": "[مستوى أساسي] النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG) - سؤال 3",
      "questionEn": "[AI & Data Science Core Concept] Regarding Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG), which of the following statements is theoretically and mathematically sound? (Variant 3)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 3)",
      "optionsEn": [
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Retrieval-Augmented Generation (RAG) grounds LLM responses by retrieving relevant verified factual text passages from external vector databases and injecting them into the prompt context.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "يرسخ التوليد المعزز بالاسترجاع (RAG) إجابات النماذج اللغوية عبر استرجاع نصوص حقيقية موثوقة من قواعد بيانات المتجهات وحقنها في سياق النموذج.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "Retrieval-Augmented Generation (RAG) grounds LLM responses by retrieving relevant verified factual text passages from external vector databases and injecting them into the prompt context.",
      "correctAnswerEn": "Retrieval-Augmented Generation (RAG) grounds LLM responses by retrieving relevant verified factual text passages from external vector databases and injecting them into the prompt context.",
      "correctAnswerAr": "يرسخ التوليد المعزز بالاسترجاع (RAG) إجابات النماذج اللغوية عبر استرجاع نصوص حقيقية موثوقة من قواعد بيانات المتجهات وحقنها في سياق النموذج.",
      "correctIndex": 2,
      "explanationEn": "Correct Theoretical Formulation: Retrieval-Augmented Generation (RAG) grounds LLM responses by retrieving relevant verified factual text passages from external vector databases and injecting them into the prompt context.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يرسخ التوليد المعزز بالاسترجاع (RAG) إجابات النماذج اللغوية عبر استرجاع نصوص حقيقية موثوقة من قواعد بيانات المتجهات وحقنها في سياق النموذج.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Retrieval-Augmented Generation (RAG) grounds LLM responses by retrieving relevant verified factual text passages from external vector databases and injecting them into the prompt context.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يرسخ التوليد المعزز بالاسترجاع (RAG) إجابات النماذج اللغوية عبر استرجاع نصوص حقيقية موثوقة من قواعد بيانات المتجهات وحقنها في سياق النموذج.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch3_easy_4",
      "titleEn": "[EASY] Subword Tokenization (BPE) & Dense Word Embeddings - Review 4",
      "titleAr": "[مستوى أساسي] تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة - سؤال 4",
      "questionEn": "[AI & Data Science Core Concept] Regarding Subword Tokenization (BPE) & Dense Word Embeddings, which of the following statements is theoretically and mathematically sound? (Variant 4)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 4)",
      "optionsEn": [
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "Byte-Pair Encoding (BPE) constructs subword vocabularies by iteratively merging the most frequent character pairs, effectively solving out-of-vocabulary (OOV) challenges in morphologically rich languages like Arabic."
      ],
      "optionsAr": [
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "يبني ترميز الأزواج الثنائية (BPE) مفردات المقاطع الفرعية عبر الدمج التكراري لأزواج الحروف الأكثر تكراراً، مما يحل جذرياً مشكلة الكلمات خارج القاموس في اللغات الغنية كالعربية."
      ],
      "correctAnswer": "Byte-Pair Encoding (BPE) constructs subword vocabularies by iteratively merging the most frequent character pairs, effectively solving out-of-vocabulary (OOV) challenges in morphologically rich languages like Arabic.",
      "correctAnswerEn": "Byte-Pair Encoding (BPE) constructs subword vocabularies by iteratively merging the most frequent character pairs, effectively solving out-of-vocabulary (OOV) challenges in morphologically rich languages like Arabic.",
      "correctAnswerAr": "يبني ترميز الأزواج الثنائية (BPE) مفردات المقاطع الفرعية عبر الدمج التكراري لأزواج الحروف الأكثر تكراراً، مما يحل جذرياً مشكلة الكلمات خارج القاموس في اللغات الغنية كالعربية.",
      "correctIndex": 3,
      "explanationEn": "Correct Theoretical Formulation: Byte-Pair Encoding (BPE) constructs subword vocabularies by iteratively merging the most frequent character pairs, effectively solving out-of-vocabulary (OOV) challenges in morphologically rich languages like Arabic.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يبني ترميز الأزواج الثنائية (BPE) مفردات المقاطع الفرعية عبر الدمج التكراري لأزواج الحروف الأكثر تكراراً، مما يحل جذرياً مشكلة الكلمات خارج القاموس في اللغات الغنية كالعربية.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Subword Tokenization (BPE) & Dense Word Embeddings.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Byte-Pair Encoding (BPE) constructs subword vocabularies by iteratively merging the most frequent character pairs, effectively solving out-of-vocabulary (OOV) challenges in morphologically rich languages like Arabic.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يبني ترميز الأزواج الثنائية (BPE) مفردات المقاطع الفرعية عبر الدمج التكراري لأزواج الحروف الأكثر تكراراً، مما يحل جذرياً مشكلة الكلمات خارج القاموس في اللغات الغنية كالعربية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch3_easy_5",
      "titleEn": "[EASY] Scaled Dot-Product Multi-Head Self-Attention Mechanisms - Review 5",
      "titleAr": "[مستوى أساسي] آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس - سؤال 5",
      "questionEn": "[AI & Data Science Core Concept] Regarding Scaled Dot-Product Multi-Head Self-Attention Mechanisms, which of the following statements is theoretically and mathematically sound? (Variant 5)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 5)",
      "optionsEn": [
        "Self-attention allows every token in an input sequence to dynamically attend to and weigh the representations of all other tokens based on pairwise query-key compatibility.",
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تتيح آلية الانتباه الذاتي لكل رمز في النص المكتوب التركيز الديناميكي وترجيح تمثيلات الرموز الأخرى وفق التوافق الزوجي بين الاستعلام والمفتاح.",
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "Self-attention allows every token in an input sequence to dynamically attend to and weigh the representations of all other tokens based on pairwise query-key compatibility.",
      "correctAnswerEn": "Self-attention allows every token in an input sequence to dynamically attend to and weigh the representations of all other tokens based on pairwise query-key compatibility.",
      "correctAnswerAr": "تتيح آلية الانتباه الذاتي لكل رمز في النص المكتوب التركيز الديناميكي وترجيح تمثيلات الرموز الأخرى وفق التوافق الزوجي بين الاستعلام والمفتاح.",
      "correctIndex": 0,
      "explanationEn": "Correct Theoretical Formulation: Self-attention allows every token in an input sequence to dynamically attend to and weigh the representations of all other tokens based on pairwise query-key compatibility.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تتيح آلية الانتباه الذاتي لكل رمز في النص المكتوب التركيز الديناميكي وترجيح تمثيلات الرموز الأخرى وفق التوافق الزوجي بين الاستعلام والمفتاح.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Scaled Dot-Product Multi-Head Self-Attention Mechanisms.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Self-attention allows every token in an input sequence to dynamically attend to and weigh the representations of all other tokens based on pairwise query-key compatibility.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تتيح آلية الانتباه الذاتي لكل رمز في النص المكتوب التركيز الديناميكي وترجيح تمثيلات الرموز الأخرى وفق التوافق الزوجي بين الاستعلام والمفتاح.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch3_easy_6",
      "titleEn": "[EASY] Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG) - Review 6",
      "titleAr": "[مستوى أساسي] النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG) - سؤال 6",
      "questionEn": "[AI & Data Science Core Concept] Regarding Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG), which of the following statements is theoretically and mathematically sound? (Variant 6)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 6)",
      "optionsEn": [
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Retrieval-Augmented Generation (RAG) grounds LLM responses by retrieving relevant verified factual text passages from external vector databases and injecting them into the prompt context.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يرسخ التوليد المعزز بالاسترجاع (RAG) إجابات النماذج اللغوية عبر استرجاع نصوص حقيقية موثوقة من قواعد بيانات المتجهات وحقنها في سياق النموذج.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "Retrieval-Augmented Generation (RAG) grounds LLM responses by retrieving relevant verified factual text passages from external vector databases and injecting them into the prompt context.",
      "correctAnswerEn": "Retrieval-Augmented Generation (RAG) grounds LLM responses by retrieving relevant verified factual text passages from external vector databases and injecting them into the prompt context.",
      "correctAnswerAr": "يرسخ التوليد المعزز بالاسترجاع (RAG) إجابات النماذج اللغوية عبر استرجاع نصوص حقيقية موثوقة من قواعد بيانات المتجهات وحقنها في سياق النموذج.",
      "correctIndex": 1,
      "explanationEn": "Correct Theoretical Formulation: Retrieval-Augmented Generation (RAG) grounds LLM responses by retrieving relevant verified factual text passages from external vector databases and injecting them into the prompt context.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يرسخ التوليد المعزز بالاسترجاع (RAG) إجابات النماذج اللغوية عبر استرجاع نصوص حقيقية موثوقة من قواعد بيانات المتجهات وحقنها في سياق النموذج.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Retrieval-Augmented Generation (RAG) grounds LLM responses by retrieving relevant verified factual text passages from external vector databases and injecting them into the prompt context.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يرسخ التوليد المعزز بالاسترجاع (RAG) إجابات النماذج اللغوية عبر استرجاع نصوص حقيقية موثوقة من قواعد بيانات المتجهات وحقنها في سياق النموذج.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch3_easy_7",
      "titleEn": "[EASY] Subword Tokenization (BPE) & Dense Word Embeddings - Review 7",
      "titleAr": "[مستوى أساسي] تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة - سؤال 7",
      "questionEn": "[AI & Data Science Core Concept] Regarding Subword Tokenization (BPE) & Dense Word Embeddings, which of the following statements is theoretically and mathematically sound? (Variant 7)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 7)",
      "optionsEn": [
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Byte-Pair Encoding (BPE) constructs subword vocabularies by iteratively merging the most frequent character pairs, effectively solving out-of-vocabulary (OOV) challenges in morphologically rich languages like Arabic.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "يبني ترميز الأزواج الثنائية (BPE) مفردات المقاطع الفرعية عبر الدمج التكراري لأزواج الحروف الأكثر تكراراً، مما يحل جذرياً مشكلة الكلمات خارج القاموس في اللغات الغنية كالعربية.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "Byte-Pair Encoding (BPE) constructs subword vocabularies by iteratively merging the most frequent character pairs, effectively solving out-of-vocabulary (OOV) challenges in morphologically rich languages like Arabic.",
      "correctAnswerEn": "Byte-Pair Encoding (BPE) constructs subword vocabularies by iteratively merging the most frequent character pairs, effectively solving out-of-vocabulary (OOV) challenges in morphologically rich languages like Arabic.",
      "correctAnswerAr": "يبني ترميز الأزواج الثنائية (BPE) مفردات المقاطع الفرعية عبر الدمج التكراري لأزواج الحروف الأكثر تكراراً، مما يحل جذرياً مشكلة الكلمات خارج القاموس في اللغات الغنية كالعربية.",
      "correctIndex": 2,
      "explanationEn": "Correct Theoretical Formulation: Byte-Pair Encoding (BPE) constructs subword vocabularies by iteratively merging the most frequent character pairs, effectively solving out-of-vocabulary (OOV) challenges in morphologically rich languages like Arabic.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يبني ترميز الأزواج الثنائية (BPE) مفردات المقاطع الفرعية عبر الدمج التكراري لأزواج الحروف الأكثر تكراراً، مما يحل جذرياً مشكلة الكلمات خارج القاموس في اللغات الغنية كالعربية.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Subword Tokenization (BPE) & Dense Word Embeddings.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Byte-Pair Encoding (BPE) constructs subword vocabularies by iteratively merging the most frequent character pairs, effectively solving out-of-vocabulary (OOV) challenges in morphologically rich languages like Arabic.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يبني ترميز الأزواج الثنائية (BPE) مفردات المقاطع الفرعية عبر الدمج التكراري لأزواج الحروف الأكثر تكراراً، مما يحل جذرياً مشكلة الكلمات خارج القاموس في اللغات الغنية كالعربية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch3_easy_8",
      "titleEn": "[EASY] Scaled Dot-Product Multi-Head Self-Attention Mechanisms - Review 8",
      "titleAr": "[مستوى أساسي] آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس - سؤال 8",
      "questionEn": "[AI & Data Science Core Concept] Regarding Scaled Dot-Product Multi-Head Self-Attention Mechanisms, which of the following statements is theoretically and mathematically sound? (Variant 8)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 8)",
      "optionsEn": [
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "Self-attention allows every token in an input sequence to dynamically attend to and weigh the representations of all other tokens based on pairwise query-key compatibility."
      ],
      "optionsAr": [
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "تتيح آلية الانتباه الذاتي لكل رمز في النص المكتوب التركيز الديناميكي وترجيح تمثيلات الرموز الأخرى وفق التوافق الزوجي بين الاستعلام والمفتاح."
      ],
      "correctAnswer": "Self-attention allows every token in an input sequence to dynamically attend to and weigh the representations of all other tokens based on pairwise query-key compatibility.",
      "correctAnswerEn": "Self-attention allows every token in an input sequence to dynamically attend to and weigh the representations of all other tokens based on pairwise query-key compatibility.",
      "correctAnswerAr": "تتيح آلية الانتباه الذاتي لكل رمز في النص المكتوب التركيز الديناميكي وترجيح تمثيلات الرموز الأخرى وفق التوافق الزوجي بين الاستعلام والمفتاح.",
      "correctIndex": 3,
      "explanationEn": "Correct Theoretical Formulation: Self-attention allows every token in an input sequence to dynamically attend to and weigh the representations of all other tokens based on pairwise query-key compatibility.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تتيح آلية الانتباه الذاتي لكل رمز في النص المكتوب التركيز الديناميكي وترجيح تمثيلات الرموز الأخرى وفق التوافق الزوجي بين الاستعلام والمفتاح.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Scaled Dot-Product Multi-Head Self-Attention Mechanisms.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Self-attention allows every token in an input sequence to dynamically attend to and weigh the representations of all other tokens based on pairwise query-key compatibility.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تتيح آلية الانتباه الذاتي لكل رمز في النص المكتوب التركيز الديناميكي وترجيح تمثيلات الرموز الأخرى وفق التوافق الزوجي بين الاستعلام والمفتاح.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch3_easy_9",
      "titleEn": "[EASY] Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG) - Review 9",
      "titleAr": "[مستوى أساسي] النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG) - سؤال 9",
      "questionEn": "[AI & Data Science Core Concept] Regarding Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG), which of the following statements is theoretically and mathematically sound? (Variant 9)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 9)",
      "optionsEn": [
        "Retrieval-Augmented Generation (RAG) grounds LLM responses by retrieving relevant verified factual text passages from external vector databases and injecting them into the prompt context.",
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "يرسخ التوليد المعزز بالاسترجاع (RAG) إجابات النماذج اللغوية عبر استرجاع نصوص حقيقية موثوقة من قواعد بيانات المتجهات وحقنها في سياق النموذج.",
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "Retrieval-Augmented Generation (RAG) grounds LLM responses by retrieving relevant verified factual text passages from external vector databases and injecting them into the prompt context.",
      "correctAnswerEn": "Retrieval-Augmented Generation (RAG) grounds LLM responses by retrieving relevant verified factual text passages from external vector databases and injecting them into the prompt context.",
      "correctAnswerAr": "يرسخ التوليد المعزز بالاسترجاع (RAG) إجابات النماذج اللغوية عبر استرجاع نصوص حقيقية موثوقة من قواعد بيانات المتجهات وحقنها في سياق النموذج.",
      "correctIndex": 0,
      "explanationEn": "Correct Theoretical Formulation: Retrieval-Augmented Generation (RAG) grounds LLM responses by retrieving relevant verified factual text passages from external vector databases and injecting them into the prompt context.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يرسخ التوليد المعزز بالاسترجاع (RAG) إجابات النماذج اللغوية عبر استرجاع نصوص حقيقية موثوقة من قواعد بيانات المتجهات وحقنها في سياق النموذج.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Retrieval-Augmented Generation (RAG) grounds LLM responses by retrieving relevant verified factual text passages from external vector databases and injecting them into the prompt context.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يرسخ التوليد المعزز بالاسترجاع (RAG) إجابات النماذج اللغوية عبر استرجاع نصوص حقيقية موثوقة من قواعد بيانات المتجهات وحقنها في سياق النموذج.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch3_easy_10",
      "titleEn": "[EASY] Subword Tokenization (BPE) & Dense Word Embeddings - Review 10",
      "titleAr": "[مستوى أساسي] تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة - سؤال 10",
      "questionEn": "[AI & Data Science Core Concept] Regarding Subword Tokenization (BPE) & Dense Word Embeddings, which of the following statements is theoretically and mathematically sound? (Variant 10)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 10)",
      "optionsEn": [
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "Byte-Pair Encoding (BPE) constructs subword vocabularies by iteratively merging the most frequent character pairs, effectively solving out-of-vocabulary (OOV) challenges in morphologically rich languages like Arabic.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "يبني ترميز الأزواج الثنائية (BPE) مفردات المقاطع الفرعية عبر الدمج التكراري لأزواج الحروف الأكثر تكراراً، مما يحل جذرياً مشكلة الكلمات خارج القاموس في اللغات الغنية كالعربية.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "Byte-Pair Encoding (BPE) constructs subword vocabularies by iteratively merging the most frequent character pairs, effectively solving out-of-vocabulary (OOV) challenges in morphologically rich languages like Arabic.",
      "correctAnswerEn": "Byte-Pair Encoding (BPE) constructs subword vocabularies by iteratively merging the most frequent character pairs, effectively solving out-of-vocabulary (OOV) challenges in morphologically rich languages like Arabic.",
      "correctAnswerAr": "يبني ترميز الأزواج الثنائية (BPE) مفردات المقاطع الفرعية عبر الدمج التكراري لأزواج الحروف الأكثر تكراراً، مما يحل جذرياً مشكلة الكلمات خارج القاموس في اللغات الغنية كالعربية.",
      "correctIndex": 1,
      "explanationEn": "Correct Theoretical Formulation: Byte-Pair Encoding (BPE) constructs subword vocabularies by iteratively merging the most frequent character pairs, effectively solving out-of-vocabulary (OOV) challenges in morphologically rich languages like Arabic.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يبني ترميز الأزواج الثنائية (BPE) مفردات المقاطع الفرعية عبر الدمج التكراري لأزواج الحروف الأكثر تكراراً، مما يحل جذرياً مشكلة الكلمات خارج القاموس في اللغات الغنية كالعربية.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Subword Tokenization (BPE) & Dense Word Embeddings.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Byte-Pair Encoding (BPE) constructs subword vocabularies by iteratively merging the most frequent character pairs, effectively solving out-of-vocabulary (OOV) challenges in morphologically rich languages like Arabic.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يبني ترميز الأزواج الثنائية (BPE) مفردات المقاطع الفرعية عبر الدمج التكراري لأزواج الحروف الأكثر تكراراً، مما يحل جذرياً مشكلة الكلمات خارج القاموس في اللغات الغنية كالعربية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch3_easy_11",
      "titleEn": "[EASY] Scaled Dot-Product Multi-Head Self-Attention Mechanisms - Review 11",
      "titleAr": "[مستوى أساسي] آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس - سؤال 11",
      "questionEn": "[AI & Data Science Core Concept] Regarding Scaled Dot-Product Multi-Head Self-Attention Mechanisms, which of the following statements is theoretically and mathematically sound? (Variant 11)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 11)",
      "optionsEn": [
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "Self-attention allows every token in an input sequence to dynamically attend to and weigh the representations of all other tokens based on pairwise query-key compatibility.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "تتيح آلية الانتباه الذاتي لكل رمز في النص المكتوب التركيز الديناميكي وترجيح تمثيلات الرموز الأخرى وفق التوافق الزوجي بين الاستعلام والمفتاح.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "Self-attention allows every token in an input sequence to dynamically attend to and weigh the representations of all other tokens based on pairwise query-key compatibility.",
      "correctAnswerEn": "Self-attention allows every token in an input sequence to dynamically attend to and weigh the representations of all other tokens based on pairwise query-key compatibility.",
      "correctAnswerAr": "تتيح آلية الانتباه الذاتي لكل رمز في النص المكتوب التركيز الديناميكي وترجيح تمثيلات الرموز الأخرى وفق التوافق الزوجي بين الاستعلام والمفتاح.",
      "correctIndex": 2,
      "explanationEn": "Correct Theoretical Formulation: Self-attention allows every token in an input sequence to dynamically attend to and weigh the representations of all other tokens based on pairwise query-key compatibility.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تتيح آلية الانتباه الذاتي لكل رمز في النص المكتوب التركيز الديناميكي وترجيح تمثيلات الرموز الأخرى وفق التوافق الزوجي بين الاستعلام والمفتاح.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Scaled Dot-Product Multi-Head Self-Attention Mechanisms.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Self-attention allows every token in an input sequence to dynamically attend to and weigh the representations of all other tokens based on pairwise query-key compatibility.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تتيح آلية الانتباه الذاتي لكل رمز في النص المكتوب التركيز الديناميكي وترجيح تمثيلات الرموز الأخرى وفق التوافق الزوجي بين الاستعلام والمفتاح.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch3_easy_12",
      "titleEn": "[EASY] Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG) - Review 12",
      "titleAr": "[مستوى أساسي] النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG) - سؤال 12",
      "questionEn": "[AI & Data Science Core Concept] Regarding Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG), which of the following statements is theoretically and mathematically sound? (Variant 12)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 12)",
      "optionsEn": [
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "Retrieval-Augmented Generation (RAG) grounds LLM responses by retrieving relevant verified factual text passages from external vector databases and injecting them into the prompt context."
      ],
      "optionsAr": [
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "يرسخ التوليد المعزز بالاسترجاع (RAG) إجابات النماذج اللغوية عبر استرجاع نصوص حقيقية موثوقة من قواعد بيانات المتجهات وحقنها في سياق النموذج."
      ],
      "correctAnswer": "Retrieval-Augmented Generation (RAG) grounds LLM responses by retrieving relevant verified factual text passages from external vector databases and injecting them into the prompt context.",
      "correctAnswerEn": "Retrieval-Augmented Generation (RAG) grounds LLM responses by retrieving relevant verified factual text passages from external vector databases and injecting them into the prompt context.",
      "correctAnswerAr": "يرسخ التوليد المعزز بالاسترجاع (RAG) إجابات النماذج اللغوية عبر استرجاع نصوص حقيقية موثوقة من قواعد بيانات المتجهات وحقنها في سياق النموذج.",
      "correctIndex": 3,
      "explanationEn": "Correct Theoretical Formulation: Retrieval-Augmented Generation (RAG) grounds LLM responses by retrieving relevant verified factual text passages from external vector databases and injecting them into the prompt context.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يرسخ التوليد المعزز بالاسترجاع (RAG) إجابات النماذج اللغوية عبر استرجاع نصوص حقيقية موثوقة من قواعد بيانات المتجهات وحقنها في سياق النموذج.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Retrieval-Augmented Generation (RAG) grounds LLM responses by retrieving relevant verified factual text passages from external vector databases and injecting them into the prompt context.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يرسخ التوليد المعزز بالاسترجاع (RAG) إجابات النماذج اللغوية عبر استرجاع نصوص حقيقية موثوقة من قواعد بيانات المتجهات وحقنها في سياق النموذج.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch3_easy_13",
      "titleEn": "[EASY] Subword Tokenization (BPE) & Dense Word Embeddings - Review 13",
      "titleAr": "[مستوى أساسي] تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة - سؤال 13",
      "questionEn": "[AI & Data Science Core Concept] Regarding Subword Tokenization (BPE) & Dense Word Embeddings, which of the following statements is theoretically and mathematically sound? (Variant 13)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 13)",
      "optionsEn": [
        "Byte-Pair Encoding (BPE) constructs subword vocabularies by iteratively merging the most frequent character pairs, effectively solving out-of-vocabulary (OOV) challenges in morphologically rich languages like Arabic.",
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "يبني ترميز الأزواج الثنائية (BPE) مفردات المقاطع الفرعية عبر الدمج التكراري لأزواج الحروف الأكثر تكراراً، مما يحل جذرياً مشكلة الكلمات خارج القاموس في اللغات الغنية كالعربية.",
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "Byte-Pair Encoding (BPE) constructs subword vocabularies by iteratively merging the most frequent character pairs, effectively solving out-of-vocabulary (OOV) challenges in morphologically rich languages like Arabic.",
      "correctAnswerEn": "Byte-Pair Encoding (BPE) constructs subword vocabularies by iteratively merging the most frequent character pairs, effectively solving out-of-vocabulary (OOV) challenges in morphologically rich languages like Arabic.",
      "correctAnswerAr": "يبني ترميز الأزواج الثنائية (BPE) مفردات المقاطع الفرعية عبر الدمج التكراري لأزواج الحروف الأكثر تكراراً، مما يحل جذرياً مشكلة الكلمات خارج القاموس في اللغات الغنية كالعربية.",
      "correctIndex": 0,
      "explanationEn": "Correct Theoretical Formulation: Byte-Pair Encoding (BPE) constructs subword vocabularies by iteratively merging the most frequent character pairs, effectively solving out-of-vocabulary (OOV) challenges in morphologically rich languages like Arabic.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يبني ترميز الأزواج الثنائية (BPE) مفردات المقاطع الفرعية عبر الدمج التكراري لأزواج الحروف الأكثر تكراراً، مما يحل جذرياً مشكلة الكلمات خارج القاموس في اللغات الغنية كالعربية.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Subword Tokenization (BPE) & Dense Word Embeddings.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Byte-Pair Encoding (BPE) constructs subword vocabularies by iteratively merging the most frequent character pairs, effectively solving out-of-vocabulary (OOV) challenges in morphologically rich languages like Arabic.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يبني ترميز الأزواج الثنائية (BPE) مفردات المقاطع الفرعية عبر الدمج التكراري لأزواج الحروف الأكثر تكراراً، مما يحل جذرياً مشكلة الكلمات خارج القاموس في اللغات الغنية كالعربية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch3_easy_14",
      "titleEn": "[EASY] Scaled Dot-Product Multi-Head Self-Attention Mechanisms - Review 14",
      "titleAr": "[مستوى أساسي] آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس - سؤال 14",
      "questionEn": "[AI & Data Science Core Concept] Regarding Scaled Dot-Product Multi-Head Self-Attention Mechanisms, which of the following statements is theoretically and mathematically sound? (Variant 14)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 14)",
      "optionsEn": [
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "Self-attention allows every token in an input sequence to dynamically attend to and weigh the representations of all other tokens based on pairwise query-key compatibility.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "تتيح آلية الانتباه الذاتي لكل رمز في النص المكتوب التركيز الديناميكي وترجيح تمثيلات الرموز الأخرى وفق التوافق الزوجي بين الاستعلام والمفتاح.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "Self-attention allows every token in an input sequence to dynamically attend to and weigh the representations of all other tokens based on pairwise query-key compatibility.",
      "correctAnswerEn": "Self-attention allows every token in an input sequence to dynamically attend to and weigh the representations of all other tokens based on pairwise query-key compatibility.",
      "correctAnswerAr": "تتيح آلية الانتباه الذاتي لكل رمز في النص المكتوب التركيز الديناميكي وترجيح تمثيلات الرموز الأخرى وفق التوافق الزوجي بين الاستعلام والمفتاح.",
      "correctIndex": 1,
      "explanationEn": "Correct Theoretical Formulation: Self-attention allows every token in an input sequence to dynamically attend to and weigh the representations of all other tokens based on pairwise query-key compatibility.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تتيح آلية الانتباه الذاتي لكل رمز في النص المكتوب التركيز الديناميكي وترجيح تمثيلات الرموز الأخرى وفق التوافق الزوجي بين الاستعلام والمفتاح.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Scaled Dot-Product Multi-Head Self-Attention Mechanisms.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Self-attention allows every token in an input sequence to dynamically attend to and weigh the representations of all other tokens based on pairwise query-key compatibility.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تتيح آلية الانتباه الذاتي لكل رمز في النص المكتوب التركيز الديناميكي وترجيح تمثيلات الرموز الأخرى وفق التوافق الزوجي بين الاستعلام والمفتاح.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch3_easy_15",
      "titleEn": "[EASY] Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG) - Review 15",
      "titleAr": "[مستوى أساسي] النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG) - سؤال 15",
      "questionEn": "[AI & Data Science Core Concept] Regarding Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG), which of the following statements is theoretically and mathematically sound? (Variant 15)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 15)",
      "optionsEn": [
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Retrieval-Augmented Generation (RAG) grounds LLM responses by retrieving relevant verified factual text passages from external vector databases and injecting them into the prompt context.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "يرسخ التوليد المعزز بالاسترجاع (RAG) إجابات النماذج اللغوية عبر استرجاع نصوص حقيقية موثوقة من قواعد بيانات المتجهات وحقنها في سياق النموذج.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "Retrieval-Augmented Generation (RAG) grounds LLM responses by retrieving relevant verified factual text passages from external vector databases and injecting them into the prompt context.",
      "correctAnswerEn": "Retrieval-Augmented Generation (RAG) grounds LLM responses by retrieving relevant verified factual text passages from external vector databases and injecting them into the prompt context.",
      "correctAnswerAr": "يرسخ التوليد المعزز بالاسترجاع (RAG) إجابات النماذج اللغوية عبر استرجاع نصوص حقيقية موثوقة من قواعد بيانات المتجهات وحقنها في سياق النموذج.",
      "correctIndex": 2,
      "explanationEn": "Correct Theoretical Formulation: Retrieval-Augmented Generation (RAG) grounds LLM responses by retrieving relevant verified factual text passages from external vector databases and injecting them into the prompt context.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يرسخ التوليد المعزز بالاسترجاع (RAG) إجابات النماذج اللغوية عبر استرجاع نصوص حقيقية موثوقة من قواعد بيانات المتجهات وحقنها في سياق النموذج.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Retrieval-Augmented Generation (RAG) grounds LLM responses by retrieving relevant verified factual text passages from external vector databases and injecting them into the prompt context.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يرسخ التوليد المعزز بالاسترجاع (RAG) إجابات النماذج اللغوية عبر استرجاع نصوص حقيقية موثوقة من قواعد بيانات المتجهات وحقنها في سياق النموذج.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch3_easy_16",
      "titleEn": "[EASY] Subword Tokenization (BPE) & Dense Word Embeddings - Review 16",
      "titleAr": "[مستوى أساسي] تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة - سؤال 16",
      "questionEn": "[AI & Data Science Core Concept] Regarding Subword Tokenization (BPE) & Dense Word Embeddings, which of the following statements is theoretically and mathematically sound? (Variant 16)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 16)",
      "optionsEn": [
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "Byte-Pair Encoding (BPE) constructs subword vocabularies by iteratively merging the most frequent character pairs, effectively solving out-of-vocabulary (OOV) challenges in morphologically rich languages like Arabic."
      ],
      "optionsAr": [
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "يبني ترميز الأزواج الثنائية (BPE) مفردات المقاطع الفرعية عبر الدمج التكراري لأزواج الحروف الأكثر تكراراً، مما يحل جذرياً مشكلة الكلمات خارج القاموس في اللغات الغنية كالعربية."
      ],
      "correctAnswer": "Byte-Pair Encoding (BPE) constructs subword vocabularies by iteratively merging the most frequent character pairs, effectively solving out-of-vocabulary (OOV) challenges in morphologically rich languages like Arabic.",
      "correctAnswerEn": "Byte-Pair Encoding (BPE) constructs subword vocabularies by iteratively merging the most frequent character pairs, effectively solving out-of-vocabulary (OOV) challenges in morphologically rich languages like Arabic.",
      "correctAnswerAr": "يبني ترميز الأزواج الثنائية (BPE) مفردات المقاطع الفرعية عبر الدمج التكراري لأزواج الحروف الأكثر تكراراً، مما يحل جذرياً مشكلة الكلمات خارج القاموس في اللغات الغنية كالعربية.",
      "correctIndex": 3,
      "explanationEn": "Correct Theoretical Formulation: Byte-Pair Encoding (BPE) constructs subword vocabularies by iteratively merging the most frequent character pairs, effectively solving out-of-vocabulary (OOV) challenges in morphologically rich languages like Arabic.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يبني ترميز الأزواج الثنائية (BPE) مفردات المقاطع الفرعية عبر الدمج التكراري لأزواج الحروف الأكثر تكراراً، مما يحل جذرياً مشكلة الكلمات خارج القاموس في اللغات الغنية كالعربية.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Subword Tokenization (BPE) & Dense Word Embeddings.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Byte-Pair Encoding (BPE) constructs subword vocabularies by iteratively merging the most frequent character pairs, effectively solving out-of-vocabulary (OOV) challenges in morphologically rich languages like Arabic.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يبني ترميز الأزواج الثنائية (BPE) مفردات المقاطع الفرعية عبر الدمج التكراري لأزواج الحروف الأكثر تكراراً، مما يحل جذرياً مشكلة الكلمات خارج القاموس في اللغات الغنية كالعربية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch3_easy_17",
      "titleEn": "[EASY] Scaled Dot-Product Multi-Head Self-Attention Mechanisms - Review 17",
      "titleAr": "[مستوى أساسي] آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس - سؤال 17",
      "questionEn": "[AI & Data Science Core Concept] Regarding Scaled Dot-Product Multi-Head Self-Attention Mechanisms, which of the following statements is theoretically and mathematically sound? (Variant 17)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 17)",
      "optionsEn": [
        "Self-attention allows every token in an input sequence to dynamically attend to and weigh the representations of all other tokens based on pairwise query-key compatibility.",
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "تتيح آلية الانتباه الذاتي لكل رمز في النص المكتوب التركيز الديناميكي وترجيح تمثيلات الرموز الأخرى وفق التوافق الزوجي بين الاستعلام والمفتاح.",
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "Self-attention allows every token in an input sequence to dynamically attend to and weigh the representations of all other tokens based on pairwise query-key compatibility.",
      "correctAnswerEn": "Self-attention allows every token in an input sequence to dynamically attend to and weigh the representations of all other tokens based on pairwise query-key compatibility.",
      "correctAnswerAr": "تتيح آلية الانتباه الذاتي لكل رمز في النص المكتوب التركيز الديناميكي وترجيح تمثيلات الرموز الأخرى وفق التوافق الزوجي بين الاستعلام والمفتاح.",
      "correctIndex": 0,
      "explanationEn": "Correct Theoretical Formulation: Self-attention allows every token in an input sequence to dynamically attend to and weigh the representations of all other tokens based on pairwise query-key compatibility.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تتيح آلية الانتباه الذاتي لكل رمز في النص المكتوب التركيز الديناميكي وترجيح تمثيلات الرموز الأخرى وفق التوافق الزوجي بين الاستعلام والمفتاح.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Scaled Dot-Product Multi-Head Self-Attention Mechanisms.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Self-attention allows every token in an input sequence to dynamically attend to and weigh the representations of all other tokens based on pairwise query-key compatibility.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تتيح آلية الانتباه الذاتي لكل رمز في النص المكتوب التركيز الديناميكي وترجيح تمثيلات الرموز الأخرى وفق التوافق الزوجي بين الاستعلام والمفتاح.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch3_easy_18",
      "titleEn": "[EASY] Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG) - Review 18",
      "titleAr": "[مستوى أساسي] النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG) - سؤال 18",
      "questionEn": "[AI & Data Science Core Concept] Regarding Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG), which of the following statements is theoretically and mathematically sound? (Variant 18)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 18)",
      "optionsEn": [
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "Retrieval-Augmented Generation (RAG) grounds LLM responses by retrieving relevant verified factual text passages from external vector databases and injecting them into the prompt context.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "يرسخ التوليد المعزز بالاسترجاع (RAG) إجابات النماذج اللغوية عبر استرجاع نصوص حقيقية موثوقة من قواعد بيانات المتجهات وحقنها في سياق النموذج.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "Retrieval-Augmented Generation (RAG) grounds LLM responses by retrieving relevant verified factual text passages from external vector databases and injecting them into the prompt context.",
      "correctAnswerEn": "Retrieval-Augmented Generation (RAG) grounds LLM responses by retrieving relevant verified factual text passages from external vector databases and injecting them into the prompt context.",
      "correctAnswerAr": "يرسخ التوليد المعزز بالاسترجاع (RAG) إجابات النماذج اللغوية عبر استرجاع نصوص حقيقية موثوقة من قواعد بيانات المتجهات وحقنها في سياق النموذج.",
      "correctIndex": 1,
      "explanationEn": "Correct Theoretical Formulation: Retrieval-Augmented Generation (RAG) grounds LLM responses by retrieving relevant verified factual text passages from external vector databases and injecting them into the prompt context.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يرسخ التوليد المعزز بالاسترجاع (RAG) إجابات النماذج اللغوية عبر استرجاع نصوص حقيقية موثوقة من قواعد بيانات المتجهات وحقنها في سياق النموذج.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Retrieval-Augmented Generation (RAG) grounds LLM responses by retrieving relevant verified factual text passages from external vector databases and injecting them into the prompt context.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يرسخ التوليد المعزز بالاسترجاع (RAG) إجابات النماذج اللغوية عبر استرجاع نصوص حقيقية موثوقة من قواعد بيانات المتجهات وحقنها في سياق النموذج.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch3_easy_19",
      "titleEn": "[EASY] Subword Tokenization (BPE) & Dense Word Embeddings - Review 19",
      "titleAr": "[مستوى أساسي] تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة - سؤال 19",
      "questionEn": "[AI & Data Science Core Concept] Regarding Subword Tokenization (BPE) & Dense Word Embeddings, which of the following statements is theoretically and mathematically sound? (Variant 19)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 19)",
      "optionsEn": [
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "Byte-Pair Encoding (BPE) constructs subword vocabularies by iteratively merging the most frequent character pairs, effectively solving out-of-vocabulary (OOV) challenges in morphologically rich languages like Arabic.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "يبني ترميز الأزواج الثنائية (BPE) مفردات المقاطع الفرعية عبر الدمج التكراري لأزواج الحروف الأكثر تكراراً، مما يحل جذرياً مشكلة الكلمات خارج القاموس في اللغات الغنية كالعربية.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "Byte-Pair Encoding (BPE) constructs subword vocabularies by iteratively merging the most frequent character pairs, effectively solving out-of-vocabulary (OOV) challenges in morphologically rich languages like Arabic.",
      "correctAnswerEn": "Byte-Pair Encoding (BPE) constructs subword vocabularies by iteratively merging the most frequent character pairs, effectively solving out-of-vocabulary (OOV) challenges in morphologically rich languages like Arabic.",
      "correctAnswerAr": "يبني ترميز الأزواج الثنائية (BPE) مفردات المقاطع الفرعية عبر الدمج التكراري لأزواج الحروف الأكثر تكراراً، مما يحل جذرياً مشكلة الكلمات خارج القاموس في اللغات الغنية كالعربية.",
      "correctIndex": 2,
      "explanationEn": "Correct Theoretical Formulation: Byte-Pair Encoding (BPE) constructs subword vocabularies by iteratively merging the most frequent character pairs, effectively solving out-of-vocabulary (OOV) challenges in morphologically rich languages like Arabic.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يبني ترميز الأزواج الثنائية (BPE) مفردات المقاطع الفرعية عبر الدمج التكراري لأزواج الحروف الأكثر تكراراً، مما يحل جذرياً مشكلة الكلمات خارج القاموس في اللغات الغنية كالعربية.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Subword Tokenization (BPE) & Dense Word Embeddings.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Byte-Pair Encoding (BPE) constructs subword vocabularies by iteratively merging the most frequent character pairs, effectively solving out-of-vocabulary (OOV) challenges in morphologically rich languages like Arabic.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يبني ترميز الأزواج الثنائية (BPE) مفردات المقاطع الفرعية عبر الدمج التكراري لأزواج الحروف الأكثر تكراراً، مما يحل جذرياً مشكلة الكلمات خارج القاموس في اللغات الغنية كالعربية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch3_easy_20",
      "titleEn": "[EASY] Scaled Dot-Product Multi-Head Self-Attention Mechanisms - Review 20",
      "titleAr": "[مستوى أساسي] آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس - سؤال 20",
      "questionEn": "[AI & Data Science Core Concept] Regarding Scaled Dot-Product Multi-Head Self-Attention Mechanisms, which of the following statements is theoretically and mathematically sound? (Variant 20)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 20)",
      "optionsEn": [
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Self-attention allows every token in an input sequence to dynamically attend to and weigh the representations of all other tokens based on pairwise query-key compatibility."
      ],
      "optionsAr": [
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "تتيح آلية الانتباه الذاتي لكل رمز في النص المكتوب التركيز الديناميكي وترجيح تمثيلات الرموز الأخرى وفق التوافق الزوجي بين الاستعلام والمفتاح."
      ],
      "correctAnswer": "Self-attention allows every token in an input sequence to dynamically attend to and weigh the representations of all other tokens based on pairwise query-key compatibility.",
      "correctAnswerEn": "Self-attention allows every token in an input sequence to dynamically attend to and weigh the representations of all other tokens based on pairwise query-key compatibility.",
      "correctAnswerAr": "تتيح آلية الانتباه الذاتي لكل رمز في النص المكتوب التركيز الديناميكي وترجيح تمثيلات الرموز الأخرى وفق التوافق الزوجي بين الاستعلام والمفتاح.",
      "correctIndex": 3,
      "explanationEn": "Correct Theoretical Formulation: Self-attention allows every token in an input sequence to dynamically attend to and weigh the representations of all other tokens based on pairwise query-key compatibility.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تتيح آلية الانتباه الذاتي لكل رمز في النص المكتوب التركيز الديناميكي وترجيح تمثيلات الرموز الأخرى وفق التوافق الزوجي بين الاستعلام والمفتاح.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Scaled Dot-Product Multi-Head Self-Attention Mechanisms.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Self-attention allows every token in an input sequence to dynamically attend to and weigh the representations of all other tokens based on pairwise query-key compatibility.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تتيح آلية الانتباه الذاتي لكل رمز في النص المكتوب التركيز الديناميكي وترجيح تمثيلات الرموز الأخرى وفق التوافق الزوجي بين الاستعلام والمفتاح.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch3_easy_21",
      "titleEn": "[EASY] Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG) - Review 21",
      "titleAr": "[مستوى أساسي] النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG) - سؤال 21",
      "questionEn": "[AI & Data Science Core Concept] Regarding Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG), which of the following statements is theoretically and mathematically sound? (Variant 21)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 21)",
      "optionsEn": [
        "Retrieval-Augmented Generation (RAG) grounds LLM responses by retrieving relevant verified factual text passages from external vector databases and injecting them into the prompt context.",
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "يرسخ التوليد المعزز بالاسترجاع (RAG) إجابات النماذج اللغوية عبر استرجاع نصوص حقيقية موثوقة من قواعد بيانات المتجهات وحقنها في سياق النموذج.",
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "Retrieval-Augmented Generation (RAG) grounds LLM responses by retrieving relevant verified factual text passages from external vector databases and injecting them into the prompt context.",
      "correctAnswerEn": "Retrieval-Augmented Generation (RAG) grounds LLM responses by retrieving relevant verified factual text passages from external vector databases and injecting them into the prompt context.",
      "correctAnswerAr": "يرسخ التوليد المعزز بالاسترجاع (RAG) إجابات النماذج اللغوية عبر استرجاع نصوص حقيقية موثوقة من قواعد بيانات المتجهات وحقنها في سياق النموذج.",
      "correctIndex": 0,
      "explanationEn": "Correct Theoretical Formulation: Retrieval-Augmented Generation (RAG) grounds LLM responses by retrieving relevant verified factual text passages from external vector databases and injecting them into the prompt context.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يرسخ التوليد المعزز بالاسترجاع (RAG) إجابات النماذج اللغوية عبر استرجاع نصوص حقيقية موثوقة من قواعد بيانات المتجهات وحقنها في سياق النموذج.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Retrieval-Augmented Generation (RAG) grounds LLM responses by retrieving relevant verified factual text passages from external vector databases and injecting them into the prompt context.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يرسخ التوليد المعزز بالاسترجاع (RAG) إجابات النماذج اللغوية عبر استرجاع نصوص حقيقية موثوقة من قواعد بيانات المتجهات وحقنها في سياق النموذج.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch3_easy_22",
      "titleEn": "[EASY] Subword Tokenization (BPE) & Dense Word Embeddings - Review 22",
      "titleAr": "[مستوى أساسي] تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة - سؤال 22",
      "questionEn": "[AI & Data Science Core Concept] Regarding Subword Tokenization (BPE) & Dense Word Embeddings, which of the following statements is theoretically and mathematically sound? (Variant 22)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 22)",
      "optionsEn": [
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "Byte-Pair Encoding (BPE) constructs subword vocabularies by iteratively merging the most frequent character pairs, effectively solving out-of-vocabulary (OOV) challenges in morphologically rich languages like Arabic.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "يبني ترميز الأزواج الثنائية (BPE) مفردات المقاطع الفرعية عبر الدمج التكراري لأزواج الحروف الأكثر تكراراً، مما يحل جذرياً مشكلة الكلمات خارج القاموس في اللغات الغنية كالعربية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "Byte-Pair Encoding (BPE) constructs subword vocabularies by iteratively merging the most frequent character pairs, effectively solving out-of-vocabulary (OOV) challenges in morphologically rich languages like Arabic.",
      "correctAnswerEn": "Byte-Pair Encoding (BPE) constructs subword vocabularies by iteratively merging the most frequent character pairs, effectively solving out-of-vocabulary (OOV) challenges in morphologically rich languages like Arabic.",
      "correctAnswerAr": "يبني ترميز الأزواج الثنائية (BPE) مفردات المقاطع الفرعية عبر الدمج التكراري لأزواج الحروف الأكثر تكراراً، مما يحل جذرياً مشكلة الكلمات خارج القاموس في اللغات الغنية كالعربية.",
      "correctIndex": 1,
      "explanationEn": "Correct Theoretical Formulation: Byte-Pair Encoding (BPE) constructs subword vocabularies by iteratively merging the most frequent character pairs, effectively solving out-of-vocabulary (OOV) challenges in morphologically rich languages like Arabic.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يبني ترميز الأزواج الثنائية (BPE) مفردات المقاطع الفرعية عبر الدمج التكراري لأزواج الحروف الأكثر تكراراً، مما يحل جذرياً مشكلة الكلمات خارج القاموس في اللغات الغنية كالعربية.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Subword Tokenization (BPE) & Dense Word Embeddings.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Byte-Pair Encoding (BPE) constructs subword vocabularies by iteratively merging the most frequent character pairs, effectively solving out-of-vocabulary (OOV) challenges in morphologically rich languages like Arabic.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يبني ترميز الأزواج الثنائية (BPE) مفردات المقاطع الفرعية عبر الدمج التكراري لأزواج الحروف الأكثر تكراراً، مما يحل جذرياً مشكلة الكلمات خارج القاموس في اللغات الغنية كالعربية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch3_easy_23",
      "titleEn": "[EASY] Scaled Dot-Product Multi-Head Self-Attention Mechanisms - Review 23",
      "titleAr": "[مستوى أساسي] آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس - سؤال 23",
      "questionEn": "[AI & Data Science Core Concept] Regarding Scaled Dot-Product Multi-Head Self-Attention Mechanisms, which of the following statements is theoretically and mathematically sound? (Variant 23)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 23)",
      "optionsEn": [
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Self-attention allows every token in an input sequence to dynamically attend to and weigh the representations of all other tokens based on pairwise query-key compatibility.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تتيح آلية الانتباه الذاتي لكل رمز في النص المكتوب التركيز الديناميكي وترجيح تمثيلات الرموز الأخرى وفق التوافق الزوجي بين الاستعلام والمفتاح.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "Self-attention allows every token in an input sequence to dynamically attend to and weigh the representations of all other tokens based on pairwise query-key compatibility.",
      "correctAnswerEn": "Self-attention allows every token in an input sequence to dynamically attend to and weigh the representations of all other tokens based on pairwise query-key compatibility.",
      "correctAnswerAr": "تتيح آلية الانتباه الذاتي لكل رمز في النص المكتوب التركيز الديناميكي وترجيح تمثيلات الرموز الأخرى وفق التوافق الزوجي بين الاستعلام والمفتاح.",
      "correctIndex": 2,
      "explanationEn": "Correct Theoretical Formulation: Self-attention allows every token in an input sequence to dynamically attend to and weigh the representations of all other tokens based on pairwise query-key compatibility.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تتيح آلية الانتباه الذاتي لكل رمز في النص المكتوب التركيز الديناميكي وترجيح تمثيلات الرموز الأخرى وفق التوافق الزوجي بين الاستعلام والمفتاح.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Scaled Dot-Product Multi-Head Self-Attention Mechanisms.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Self-attention allows every token in an input sequence to dynamically attend to and weigh the representations of all other tokens based on pairwise query-key compatibility.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تتيح آلية الانتباه الذاتي لكل رمز في النص المكتوب التركيز الديناميكي وترجيح تمثيلات الرموز الأخرى وفق التوافق الزوجي بين الاستعلام والمفتاح.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch3_easy_24",
      "titleEn": "[EASY] Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG) - Review 24",
      "titleAr": "[مستوى أساسي] النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG) - سؤال 24",
      "questionEn": "[AI & Data Science Core Concept] Regarding Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG), which of the following statements is theoretically and mathematically sound? (Variant 24)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 24)",
      "optionsEn": [
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "Retrieval-Augmented Generation (RAG) grounds LLM responses by retrieving relevant verified factual text passages from external vector databases and injecting them into the prompt context."
      ],
      "optionsAr": [
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "يرسخ التوليد المعزز بالاسترجاع (RAG) إجابات النماذج اللغوية عبر استرجاع نصوص حقيقية موثوقة من قواعد بيانات المتجهات وحقنها في سياق النموذج."
      ],
      "correctAnswer": "Retrieval-Augmented Generation (RAG) grounds LLM responses by retrieving relevant verified factual text passages from external vector databases and injecting them into the prompt context.",
      "correctAnswerEn": "Retrieval-Augmented Generation (RAG) grounds LLM responses by retrieving relevant verified factual text passages from external vector databases and injecting them into the prompt context.",
      "correctAnswerAr": "يرسخ التوليد المعزز بالاسترجاع (RAG) إجابات النماذج اللغوية عبر استرجاع نصوص حقيقية موثوقة من قواعد بيانات المتجهات وحقنها في سياق النموذج.",
      "correctIndex": 3,
      "explanationEn": "Correct Theoretical Formulation: Retrieval-Augmented Generation (RAG) grounds LLM responses by retrieving relevant verified factual text passages from external vector databases and injecting them into the prompt context.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يرسخ التوليد المعزز بالاسترجاع (RAG) إجابات النماذج اللغوية عبر استرجاع نصوص حقيقية موثوقة من قواعد بيانات المتجهات وحقنها في سياق النموذج.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Retrieval-Augmented Generation (RAG) grounds LLM responses by retrieving relevant verified factual text passages from external vector databases and injecting them into the prompt context.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يرسخ التوليد المعزز بالاسترجاع (RAG) إجابات النماذج اللغوية عبر استرجاع نصوص حقيقية موثوقة من قواعد بيانات المتجهات وحقنها في سياق النموذج.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch3_easy_25",
      "titleEn": "[EASY] Subword Tokenization (BPE) & Dense Word Embeddings - Review 25",
      "titleAr": "[مستوى أساسي] تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة - سؤال 25",
      "questionEn": "[AI & Data Science Core Concept] Regarding Subword Tokenization (BPE) & Dense Word Embeddings, which of the following statements is theoretically and mathematically sound? (Variant 25)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 25)",
      "optionsEn": [
        "Byte-Pair Encoding (BPE) constructs subword vocabularies by iteratively merging the most frequent character pairs, effectively solving out-of-vocabulary (OOV) challenges in morphologically rich languages like Arabic.",
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "يبني ترميز الأزواج الثنائية (BPE) مفردات المقاطع الفرعية عبر الدمج التكراري لأزواج الحروف الأكثر تكراراً، مما يحل جذرياً مشكلة الكلمات خارج القاموس في اللغات الغنية كالعربية.",
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "Byte-Pair Encoding (BPE) constructs subword vocabularies by iteratively merging the most frequent character pairs, effectively solving out-of-vocabulary (OOV) challenges in morphologically rich languages like Arabic.",
      "correctAnswerEn": "Byte-Pair Encoding (BPE) constructs subword vocabularies by iteratively merging the most frequent character pairs, effectively solving out-of-vocabulary (OOV) challenges in morphologically rich languages like Arabic.",
      "correctAnswerAr": "يبني ترميز الأزواج الثنائية (BPE) مفردات المقاطع الفرعية عبر الدمج التكراري لأزواج الحروف الأكثر تكراراً، مما يحل جذرياً مشكلة الكلمات خارج القاموس في اللغات الغنية كالعربية.",
      "correctIndex": 0,
      "explanationEn": "Correct Theoretical Formulation: Byte-Pair Encoding (BPE) constructs subword vocabularies by iteratively merging the most frequent character pairs, effectively solving out-of-vocabulary (OOV) challenges in morphologically rich languages like Arabic.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يبني ترميز الأزواج الثنائية (BPE) مفردات المقاطع الفرعية عبر الدمج التكراري لأزواج الحروف الأكثر تكراراً، مما يحل جذرياً مشكلة الكلمات خارج القاموس في اللغات الغنية كالعربية.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Subword Tokenization (BPE) & Dense Word Embeddings.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Byte-Pair Encoding (BPE) constructs subword vocabularies by iteratively merging the most frequent character pairs, effectively solving out-of-vocabulary (OOV) challenges in morphologically rich languages like Arabic.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يبني ترميز الأزواج الثنائية (BPE) مفردات المقاطع الفرعية عبر الدمج التكراري لأزواج الحروف الأكثر تكراراً، مما يحل جذرياً مشكلة الكلمات خارج القاموس في اللغات الغنية كالعربية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch3_easy_26",
      "titleEn": "[EASY] Scaled Dot-Product Multi-Head Self-Attention Mechanisms - Review 26",
      "titleAr": "[مستوى أساسي] آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس - سؤال 26",
      "questionEn": "[AI & Data Science Core Concept] Regarding Scaled Dot-Product Multi-Head Self-Attention Mechanisms, which of the following statements is theoretically and mathematically sound? (Variant 26)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 26)",
      "optionsEn": [
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Self-attention allows every token in an input sequence to dynamically attend to and weigh the representations of all other tokens based on pairwise query-key compatibility.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "تتيح آلية الانتباه الذاتي لكل رمز في النص المكتوب التركيز الديناميكي وترجيح تمثيلات الرموز الأخرى وفق التوافق الزوجي بين الاستعلام والمفتاح.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "Self-attention allows every token in an input sequence to dynamically attend to and weigh the representations of all other tokens based on pairwise query-key compatibility.",
      "correctAnswerEn": "Self-attention allows every token in an input sequence to dynamically attend to and weigh the representations of all other tokens based on pairwise query-key compatibility.",
      "correctAnswerAr": "تتيح آلية الانتباه الذاتي لكل رمز في النص المكتوب التركيز الديناميكي وترجيح تمثيلات الرموز الأخرى وفق التوافق الزوجي بين الاستعلام والمفتاح.",
      "correctIndex": 1,
      "explanationEn": "Correct Theoretical Formulation: Self-attention allows every token in an input sequence to dynamically attend to and weigh the representations of all other tokens based on pairwise query-key compatibility.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تتيح آلية الانتباه الذاتي لكل رمز في النص المكتوب التركيز الديناميكي وترجيح تمثيلات الرموز الأخرى وفق التوافق الزوجي بين الاستعلام والمفتاح.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Scaled Dot-Product Multi-Head Self-Attention Mechanisms.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Self-attention allows every token in an input sequence to dynamically attend to and weigh the representations of all other tokens based on pairwise query-key compatibility.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تتيح آلية الانتباه الذاتي لكل رمز في النص المكتوب التركيز الديناميكي وترجيح تمثيلات الرموز الأخرى وفق التوافق الزوجي بين الاستعلام والمفتاح.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch3_easy_27",
      "titleEn": "[EASY] Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG) - Review 27",
      "titleAr": "[مستوى أساسي] النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG) - سؤال 27",
      "questionEn": "[AI & Data Science Core Concept] Regarding Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG), which of the following statements is theoretically and mathematically sound? (Variant 27)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 27)",
      "optionsEn": [
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Retrieval-Augmented Generation (RAG) grounds LLM responses by retrieving relevant verified factual text passages from external vector databases and injecting them into the prompt context.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "يرسخ التوليد المعزز بالاسترجاع (RAG) إجابات النماذج اللغوية عبر استرجاع نصوص حقيقية موثوقة من قواعد بيانات المتجهات وحقنها في سياق النموذج.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "Retrieval-Augmented Generation (RAG) grounds LLM responses by retrieving relevant verified factual text passages from external vector databases and injecting them into the prompt context.",
      "correctAnswerEn": "Retrieval-Augmented Generation (RAG) grounds LLM responses by retrieving relevant verified factual text passages from external vector databases and injecting them into the prompt context.",
      "correctAnswerAr": "يرسخ التوليد المعزز بالاسترجاع (RAG) إجابات النماذج اللغوية عبر استرجاع نصوص حقيقية موثوقة من قواعد بيانات المتجهات وحقنها في سياق النموذج.",
      "correctIndex": 2,
      "explanationEn": "Correct Theoretical Formulation: Retrieval-Augmented Generation (RAG) grounds LLM responses by retrieving relevant verified factual text passages from external vector databases and injecting them into the prompt context.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يرسخ التوليد المعزز بالاسترجاع (RAG) إجابات النماذج اللغوية عبر استرجاع نصوص حقيقية موثوقة من قواعد بيانات المتجهات وحقنها في سياق النموذج.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Retrieval-Augmented Generation (RAG) grounds LLM responses by retrieving relevant verified factual text passages from external vector databases and injecting them into the prompt context.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يرسخ التوليد المعزز بالاسترجاع (RAG) إجابات النماذج اللغوية عبر استرجاع نصوص حقيقية موثوقة من قواعد بيانات المتجهات وحقنها في سياق النموذج.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch3_easy_28",
      "titleEn": "[EASY] Subword Tokenization (BPE) & Dense Word Embeddings - Review 28",
      "titleAr": "[مستوى أساسي] تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة - سؤال 28",
      "questionEn": "[AI & Data Science Core Concept] Regarding Subword Tokenization (BPE) & Dense Word Embeddings, which of the following statements is theoretically and mathematically sound? (Variant 28)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 28)",
      "optionsEn": [
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "Byte-Pair Encoding (BPE) constructs subword vocabularies by iteratively merging the most frequent character pairs, effectively solving out-of-vocabulary (OOV) challenges in morphologically rich languages like Arabic."
      ],
      "optionsAr": [
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "يبني ترميز الأزواج الثنائية (BPE) مفردات المقاطع الفرعية عبر الدمج التكراري لأزواج الحروف الأكثر تكراراً، مما يحل جذرياً مشكلة الكلمات خارج القاموس في اللغات الغنية كالعربية."
      ],
      "correctAnswer": "Byte-Pair Encoding (BPE) constructs subword vocabularies by iteratively merging the most frequent character pairs, effectively solving out-of-vocabulary (OOV) challenges in morphologically rich languages like Arabic.",
      "correctAnswerEn": "Byte-Pair Encoding (BPE) constructs subword vocabularies by iteratively merging the most frequent character pairs, effectively solving out-of-vocabulary (OOV) challenges in morphologically rich languages like Arabic.",
      "correctAnswerAr": "يبني ترميز الأزواج الثنائية (BPE) مفردات المقاطع الفرعية عبر الدمج التكراري لأزواج الحروف الأكثر تكراراً، مما يحل جذرياً مشكلة الكلمات خارج القاموس في اللغات الغنية كالعربية.",
      "correctIndex": 3,
      "explanationEn": "Correct Theoretical Formulation: Byte-Pair Encoding (BPE) constructs subword vocabularies by iteratively merging the most frequent character pairs, effectively solving out-of-vocabulary (OOV) challenges in morphologically rich languages like Arabic.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يبني ترميز الأزواج الثنائية (BPE) مفردات المقاطع الفرعية عبر الدمج التكراري لأزواج الحروف الأكثر تكراراً، مما يحل جذرياً مشكلة الكلمات خارج القاموس في اللغات الغنية كالعربية.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Subword Tokenization (BPE) & Dense Word Embeddings.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Byte-Pair Encoding (BPE) constructs subword vocabularies by iteratively merging the most frequent character pairs, effectively solving out-of-vocabulary (OOV) challenges in morphologically rich languages like Arabic.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يبني ترميز الأزواج الثنائية (BPE) مفردات المقاطع الفرعية عبر الدمج التكراري لأزواج الحروف الأكثر تكراراً، مما يحل جذرياً مشكلة الكلمات خارج القاموس في اللغات الغنية كالعربية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch3_easy_29",
      "titleEn": "[EASY] Scaled Dot-Product Multi-Head Self-Attention Mechanisms - Review 29",
      "titleAr": "[مستوى أساسي] آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس - سؤال 29",
      "questionEn": "[AI & Data Science Core Concept] Regarding Scaled Dot-Product Multi-Head Self-Attention Mechanisms, which of the following statements is theoretically and mathematically sound? (Variant 29)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 29)",
      "optionsEn": [
        "Self-attention allows every token in an input sequence to dynamically attend to and weigh the representations of all other tokens based on pairwise query-key compatibility.",
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "تتيح آلية الانتباه الذاتي لكل رمز في النص المكتوب التركيز الديناميكي وترجيح تمثيلات الرموز الأخرى وفق التوافق الزوجي بين الاستعلام والمفتاح.",
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "Self-attention allows every token in an input sequence to dynamically attend to and weigh the representations of all other tokens based on pairwise query-key compatibility.",
      "correctAnswerEn": "Self-attention allows every token in an input sequence to dynamically attend to and weigh the representations of all other tokens based on pairwise query-key compatibility.",
      "correctAnswerAr": "تتيح آلية الانتباه الذاتي لكل رمز في النص المكتوب التركيز الديناميكي وترجيح تمثيلات الرموز الأخرى وفق التوافق الزوجي بين الاستعلام والمفتاح.",
      "correctIndex": 0,
      "explanationEn": "Correct Theoretical Formulation: Self-attention allows every token in an input sequence to dynamically attend to and weigh the representations of all other tokens based on pairwise query-key compatibility.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تتيح آلية الانتباه الذاتي لكل رمز في النص المكتوب التركيز الديناميكي وترجيح تمثيلات الرموز الأخرى وفق التوافق الزوجي بين الاستعلام والمفتاح.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Scaled Dot-Product Multi-Head Self-Attention Mechanisms.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Self-attention allows every token in an input sequence to dynamically attend to and weigh the representations of all other tokens based on pairwise query-key compatibility.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تتيح آلية الانتباه الذاتي لكل رمز في النص المكتوب التركيز الديناميكي وترجيح تمثيلات الرموز الأخرى وفق التوافق الزوجي بين الاستعلام والمفتاح.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch3_easy_30",
      "titleEn": "[EASY] Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG) - Review 30",
      "titleAr": "[مستوى أساسي] النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG) - سؤال 30",
      "questionEn": "[AI & Data Science Core Concept] Regarding Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG), which of the following statements is theoretically and mathematically sound? (Variant 30)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 30)",
      "optionsEn": [
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "Retrieval-Augmented Generation (RAG) grounds LLM responses by retrieving relevant verified factual text passages from external vector databases and injecting them into the prompt context.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "يرسخ التوليد المعزز بالاسترجاع (RAG) إجابات النماذج اللغوية عبر استرجاع نصوص حقيقية موثوقة من قواعد بيانات المتجهات وحقنها في سياق النموذج.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "Retrieval-Augmented Generation (RAG) grounds LLM responses by retrieving relevant verified factual text passages from external vector databases and injecting them into the prompt context.",
      "correctAnswerEn": "Retrieval-Augmented Generation (RAG) grounds LLM responses by retrieving relevant verified factual text passages from external vector databases and injecting them into the prompt context.",
      "correctAnswerAr": "يرسخ التوليد المعزز بالاسترجاع (RAG) إجابات النماذج اللغوية عبر استرجاع نصوص حقيقية موثوقة من قواعد بيانات المتجهات وحقنها في سياق النموذج.",
      "correctIndex": 1,
      "explanationEn": "Correct Theoretical Formulation: Retrieval-Augmented Generation (RAG) grounds LLM responses by retrieving relevant verified factual text passages from external vector databases and injecting them into the prompt context.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يرسخ التوليد المعزز بالاسترجاع (RAG) إجابات النماذج اللغوية عبر استرجاع نصوص حقيقية موثوقة من قواعد بيانات المتجهات وحقنها في سياق النموذج.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Retrieval-Augmented Generation (RAG) grounds LLM responses by retrieving relevant verified factual text passages from external vector databases and injecting them into the prompt context.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يرسخ التوليد المعزز بالاسترجاع (RAG) إجابات النماذج اللغوية عبر استرجاع نصوص حقيقية موثوقة من قواعد بيانات المتجهات وحقنها في سياق النموذج.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch3_easy_31",
      "titleEn": "[EASY] Subword Tokenization (BPE) & Dense Word Embeddings - Review 31",
      "titleAr": "[مستوى أساسي] تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة - سؤال 31",
      "questionEn": "[AI & Data Science Core Concept] Regarding Subword Tokenization (BPE) & Dense Word Embeddings, which of the following statements is theoretically and mathematically sound? (Variant 31)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 31)",
      "optionsEn": [
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "Byte-Pair Encoding (BPE) constructs subword vocabularies by iteratively merging the most frequent character pairs, effectively solving out-of-vocabulary (OOV) challenges in morphologically rich languages like Arabic.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يبني ترميز الأزواج الثنائية (BPE) مفردات المقاطع الفرعية عبر الدمج التكراري لأزواج الحروف الأكثر تكراراً، مما يحل جذرياً مشكلة الكلمات خارج القاموس في اللغات الغنية كالعربية.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "Byte-Pair Encoding (BPE) constructs subword vocabularies by iteratively merging the most frequent character pairs, effectively solving out-of-vocabulary (OOV) challenges in morphologically rich languages like Arabic.",
      "correctAnswerEn": "Byte-Pair Encoding (BPE) constructs subword vocabularies by iteratively merging the most frequent character pairs, effectively solving out-of-vocabulary (OOV) challenges in morphologically rich languages like Arabic.",
      "correctAnswerAr": "يبني ترميز الأزواج الثنائية (BPE) مفردات المقاطع الفرعية عبر الدمج التكراري لأزواج الحروف الأكثر تكراراً، مما يحل جذرياً مشكلة الكلمات خارج القاموس في اللغات الغنية كالعربية.",
      "correctIndex": 2,
      "explanationEn": "Correct Theoretical Formulation: Byte-Pair Encoding (BPE) constructs subword vocabularies by iteratively merging the most frequent character pairs, effectively solving out-of-vocabulary (OOV) challenges in morphologically rich languages like Arabic.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يبني ترميز الأزواج الثنائية (BPE) مفردات المقاطع الفرعية عبر الدمج التكراري لأزواج الحروف الأكثر تكراراً، مما يحل جذرياً مشكلة الكلمات خارج القاموس في اللغات الغنية كالعربية.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Subword Tokenization (BPE) & Dense Word Embeddings.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Byte-Pair Encoding (BPE) constructs subword vocabularies by iteratively merging the most frequent character pairs, effectively solving out-of-vocabulary (OOV) challenges in morphologically rich languages like Arabic.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يبني ترميز الأزواج الثنائية (BPE) مفردات المقاطع الفرعية عبر الدمج التكراري لأزواج الحروف الأكثر تكراراً، مما يحل جذرياً مشكلة الكلمات خارج القاموس في اللغات الغنية كالعربية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch3_easy_32",
      "titleEn": "[EASY] Scaled Dot-Product Multi-Head Self-Attention Mechanisms - Review 32",
      "titleAr": "[مستوى أساسي] آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس - سؤال 32",
      "questionEn": "[AI & Data Science Core Concept] Regarding Scaled Dot-Product Multi-Head Self-Attention Mechanisms, which of the following statements is theoretically and mathematically sound? (Variant 32)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 32)",
      "optionsEn": [
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "Self-attention allows every token in an input sequence to dynamically attend to and weigh the representations of all other tokens based on pairwise query-key compatibility."
      ],
      "optionsAr": [
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "تتيح آلية الانتباه الذاتي لكل رمز في النص المكتوب التركيز الديناميكي وترجيح تمثيلات الرموز الأخرى وفق التوافق الزوجي بين الاستعلام والمفتاح."
      ],
      "correctAnswer": "Self-attention allows every token in an input sequence to dynamically attend to and weigh the representations of all other tokens based on pairwise query-key compatibility.",
      "correctAnswerEn": "Self-attention allows every token in an input sequence to dynamically attend to and weigh the representations of all other tokens based on pairwise query-key compatibility.",
      "correctAnswerAr": "تتيح آلية الانتباه الذاتي لكل رمز في النص المكتوب التركيز الديناميكي وترجيح تمثيلات الرموز الأخرى وفق التوافق الزوجي بين الاستعلام والمفتاح.",
      "correctIndex": 3,
      "explanationEn": "Correct Theoretical Formulation: Self-attention allows every token in an input sequence to dynamically attend to and weigh the representations of all other tokens based on pairwise query-key compatibility.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تتيح آلية الانتباه الذاتي لكل رمز في النص المكتوب التركيز الديناميكي وترجيح تمثيلات الرموز الأخرى وفق التوافق الزوجي بين الاستعلام والمفتاح.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Scaled Dot-Product Multi-Head Self-Attention Mechanisms.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Self-attention allows every token in an input sequence to dynamically attend to and weigh the representations of all other tokens based on pairwise query-key compatibility.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تتيح آلية الانتباه الذاتي لكل رمز في النص المكتوب التركيز الديناميكي وترجيح تمثيلات الرموز الأخرى وفق التوافق الزوجي بين الاستعلام والمفتاح.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch3_easy_33",
      "titleEn": "[EASY] Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG) - Review 33",
      "titleAr": "[مستوى أساسي] النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG) - سؤال 33",
      "questionEn": "[AI & Data Science Core Concept] Regarding Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG), which of the following statements is theoretically and mathematically sound? (Variant 33)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 33)",
      "optionsEn": [
        "Retrieval-Augmented Generation (RAG) grounds LLM responses by retrieving relevant verified factual text passages from external vector databases and injecting them into the prompt context.",
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "يرسخ التوليد المعزز بالاسترجاع (RAG) إجابات النماذج اللغوية عبر استرجاع نصوص حقيقية موثوقة من قواعد بيانات المتجهات وحقنها في سياق النموذج.",
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "Retrieval-Augmented Generation (RAG) grounds LLM responses by retrieving relevant verified factual text passages from external vector databases and injecting them into the prompt context.",
      "correctAnswerEn": "Retrieval-Augmented Generation (RAG) grounds LLM responses by retrieving relevant verified factual text passages from external vector databases and injecting them into the prompt context.",
      "correctAnswerAr": "يرسخ التوليد المعزز بالاسترجاع (RAG) إجابات النماذج اللغوية عبر استرجاع نصوص حقيقية موثوقة من قواعد بيانات المتجهات وحقنها في سياق النموذج.",
      "correctIndex": 0,
      "explanationEn": "Correct Theoretical Formulation: Retrieval-Augmented Generation (RAG) grounds LLM responses by retrieving relevant verified factual text passages from external vector databases and injecting them into the prompt context.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يرسخ التوليد المعزز بالاسترجاع (RAG) إجابات النماذج اللغوية عبر استرجاع نصوص حقيقية موثوقة من قواعد بيانات المتجهات وحقنها في سياق النموذج.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Retrieval-Augmented Generation (RAG) grounds LLM responses by retrieving relevant verified factual text passages from external vector databases and injecting them into the prompt context.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يرسخ التوليد المعزز بالاسترجاع (RAG) إجابات النماذج اللغوية عبر استرجاع نصوص حقيقية موثوقة من قواعد بيانات المتجهات وحقنها في سياق النموذج.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch3_easy_34",
      "titleEn": "[EASY] Subword Tokenization (BPE) & Dense Word Embeddings - Review 34",
      "titleAr": "[مستوى أساسي] تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة - سؤال 34",
      "questionEn": "[AI & Data Science Core Concept] Regarding Subword Tokenization (BPE) & Dense Word Embeddings, which of the following statements is theoretically and mathematically sound? (Variant 34)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 34)",
      "optionsEn": [
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "Byte-Pair Encoding (BPE) constructs subword vocabularies by iteratively merging the most frequent character pairs, effectively solving out-of-vocabulary (OOV) challenges in morphologically rich languages like Arabic.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "يبني ترميز الأزواج الثنائية (BPE) مفردات المقاطع الفرعية عبر الدمج التكراري لأزواج الحروف الأكثر تكراراً، مما يحل جذرياً مشكلة الكلمات خارج القاموس في اللغات الغنية كالعربية.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "Byte-Pair Encoding (BPE) constructs subword vocabularies by iteratively merging the most frequent character pairs, effectively solving out-of-vocabulary (OOV) challenges in morphologically rich languages like Arabic.",
      "correctAnswerEn": "Byte-Pair Encoding (BPE) constructs subword vocabularies by iteratively merging the most frequent character pairs, effectively solving out-of-vocabulary (OOV) challenges in morphologically rich languages like Arabic.",
      "correctAnswerAr": "يبني ترميز الأزواج الثنائية (BPE) مفردات المقاطع الفرعية عبر الدمج التكراري لأزواج الحروف الأكثر تكراراً، مما يحل جذرياً مشكلة الكلمات خارج القاموس في اللغات الغنية كالعربية.",
      "correctIndex": 1,
      "explanationEn": "Correct Theoretical Formulation: Byte-Pair Encoding (BPE) constructs subword vocabularies by iteratively merging the most frequent character pairs, effectively solving out-of-vocabulary (OOV) challenges in morphologically rich languages like Arabic.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يبني ترميز الأزواج الثنائية (BPE) مفردات المقاطع الفرعية عبر الدمج التكراري لأزواج الحروف الأكثر تكراراً، مما يحل جذرياً مشكلة الكلمات خارج القاموس في اللغات الغنية كالعربية.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Subword Tokenization (BPE) & Dense Word Embeddings.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Byte-Pair Encoding (BPE) constructs subword vocabularies by iteratively merging the most frequent character pairs, effectively solving out-of-vocabulary (OOV) challenges in morphologically rich languages like Arabic.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يبني ترميز الأزواج الثنائية (BPE) مفردات المقاطع الفرعية عبر الدمج التكراري لأزواج الحروف الأكثر تكراراً، مما يحل جذرياً مشكلة الكلمات خارج القاموس في اللغات الغنية كالعربية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch3_easy_35",
      "titleEn": "[EASY] Scaled Dot-Product Multi-Head Self-Attention Mechanisms - Review 35",
      "titleAr": "[مستوى أساسي] آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس - سؤال 35",
      "questionEn": "[AI & Data Science Core Concept] Regarding Scaled Dot-Product Multi-Head Self-Attention Mechanisms, which of the following statements is theoretically and mathematically sound? (Variant 35)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 35)",
      "optionsEn": [
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Self-attention allows every token in an input sequence to dynamically attend to and weigh the representations of all other tokens based on pairwise query-key compatibility.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تتيح آلية الانتباه الذاتي لكل رمز في النص المكتوب التركيز الديناميكي وترجيح تمثيلات الرموز الأخرى وفق التوافق الزوجي بين الاستعلام والمفتاح.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "Self-attention allows every token in an input sequence to dynamically attend to and weigh the representations of all other tokens based on pairwise query-key compatibility.",
      "correctAnswerEn": "Self-attention allows every token in an input sequence to dynamically attend to and weigh the representations of all other tokens based on pairwise query-key compatibility.",
      "correctAnswerAr": "تتيح آلية الانتباه الذاتي لكل رمز في النص المكتوب التركيز الديناميكي وترجيح تمثيلات الرموز الأخرى وفق التوافق الزوجي بين الاستعلام والمفتاح.",
      "correctIndex": 2,
      "explanationEn": "Correct Theoretical Formulation: Self-attention allows every token in an input sequence to dynamically attend to and weigh the representations of all other tokens based on pairwise query-key compatibility.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تتيح آلية الانتباه الذاتي لكل رمز في النص المكتوب التركيز الديناميكي وترجيح تمثيلات الرموز الأخرى وفق التوافق الزوجي بين الاستعلام والمفتاح.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Scaled Dot-Product Multi-Head Self-Attention Mechanisms.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Self-attention allows every token in an input sequence to dynamically attend to and weigh the representations of all other tokens based on pairwise query-key compatibility.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تتيح آلية الانتباه الذاتي لكل رمز في النص المكتوب التركيز الديناميكي وترجيح تمثيلات الرموز الأخرى وفق التوافق الزوجي بين الاستعلام والمفتاح.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch3_easy_36",
      "titleEn": "[EASY] Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG) - Review 36",
      "titleAr": "[مستوى أساسي] النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG) - سؤال 36",
      "questionEn": "[AI & Data Science Core Concept] Regarding Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG), which of the following statements is theoretically and mathematically sound? (Variant 36)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 36)",
      "optionsEn": [
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "Retrieval-Augmented Generation (RAG) grounds LLM responses by retrieving relevant verified factual text passages from external vector databases and injecting them into the prompt context."
      ],
      "optionsAr": [
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "يرسخ التوليد المعزز بالاسترجاع (RAG) إجابات النماذج اللغوية عبر استرجاع نصوص حقيقية موثوقة من قواعد بيانات المتجهات وحقنها في سياق النموذج."
      ],
      "correctAnswer": "Retrieval-Augmented Generation (RAG) grounds LLM responses by retrieving relevant verified factual text passages from external vector databases and injecting them into the prompt context.",
      "correctAnswerEn": "Retrieval-Augmented Generation (RAG) grounds LLM responses by retrieving relevant verified factual text passages from external vector databases and injecting them into the prompt context.",
      "correctAnswerAr": "يرسخ التوليد المعزز بالاسترجاع (RAG) إجابات النماذج اللغوية عبر استرجاع نصوص حقيقية موثوقة من قواعد بيانات المتجهات وحقنها في سياق النموذج.",
      "correctIndex": 3,
      "explanationEn": "Correct Theoretical Formulation: Retrieval-Augmented Generation (RAG) grounds LLM responses by retrieving relevant verified factual text passages from external vector databases and injecting them into the prompt context.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يرسخ التوليد المعزز بالاسترجاع (RAG) إجابات النماذج اللغوية عبر استرجاع نصوص حقيقية موثوقة من قواعد بيانات المتجهات وحقنها في سياق النموذج.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Retrieval-Augmented Generation (RAG) grounds LLM responses by retrieving relevant verified factual text passages from external vector databases and injecting them into the prompt context.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يرسخ التوليد المعزز بالاسترجاع (RAG) إجابات النماذج اللغوية عبر استرجاع نصوص حقيقية موثوقة من قواعد بيانات المتجهات وحقنها في سياق النموذج.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch3_easy_37",
      "titleEn": "[EASY] Subword Tokenization (BPE) & Dense Word Embeddings - Review 37",
      "titleAr": "[مستوى أساسي] تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة - سؤال 37",
      "questionEn": "[AI & Data Science Core Concept] Regarding Subword Tokenization (BPE) & Dense Word Embeddings, which of the following statements is theoretically and mathematically sound? (Variant 37)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 37)",
      "optionsEn": [
        "Byte-Pair Encoding (BPE) constructs subword vocabularies by iteratively merging the most frequent character pairs, effectively solving out-of-vocabulary (OOV) challenges in morphologically rich languages like Arabic.",
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "يبني ترميز الأزواج الثنائية (BPE) مفردات المقاطع الفرعية عبر الدمج التكراري لأزواج الحروف الأكثر تكراراً، مما يحل جذرياً مشكلة الكلمات خارج القاموس في اللغات الغنية كالعربية.",
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "Byte-Pair Encoding (BPE) constructs subword vocabularies by iteratively merging the most frequent character pairs, effectively solving out-of-vocabulary (OOV) challenges in morphologically rich languages like Arabic.",
      "correctAnswerEn": "Byte-Pair Encoding (BPE) constructs subword vocabularies by iteratively merging the most frequent character pairs, effectively solving out-of-vocabulary (OOV) challenges in morphologically rich languages like Arabic.",
      "correctAnswerAr": "يبني ترميز الأزواج الثنائية (BPE) مفردات المقاطع الفرعية عبر الدمج التكراري لأزواج الحروف الأكثر تكراراً، مما يحل جذرياً مشكلة الكلمات خارج القاموس في اللغات الغنية كالعربية.",
      "correctIndex": 0,
      "explanationEn": "Correct Theoretical Formulation: Byte-Pair Encoding (BPE) constructs subword vocabularies by iteratively merging the most frequent character pairs, effectively solving out-of-vocabulary (OOV) challenges in morphologically rich languages like Arabic.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يبني ترميز الأزواج الثنائية (BPE) مفردات المقاطع الفرعية عبر الدمج التكراري لأزواج الحروف الأكثر تكراراً، مما يحل جذرياً مشكلة الكلمات خارج القاموس في اللغات الغنية كالعربية.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Subword Tokenization (BPE) & Dense Word Embeddings.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Byte-Pair Encoding (BPE) constructs subword vocabularies by iteratively merging the most frequent character pairs, effectively solving out-of-vocabulary (OOV) challenges in morphologically rich languages like Arabic.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يبني ترميز الأزواج الثنائية (BPE) مفردات المقاطع الفرعية عبر الدمج التكراري لأزواج الحروف الأكثر تكراراً، مما يحل جذرياً مشكلة الكلمات خارج القاموس في اللغات الغنية كالعربية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch3_easy_38",
      "titleEn": "[EASY] Scaled Dot-Product Multi-Head Self-Attention Mechanisms - Review 38",
      "titleAr": "[مستوى أساسي] آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس - سؤال 38",
      "questionEn": "[AI & Data Science Core Concept] Regarding Scaled Dot-Product Multi-Head Self-Attention Mechanisms, which of the following statements is theoretically and mathematically sound? (Variant 38)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 38)",
      "optionsEn": [
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "Self-attention allows every token in an input sequence to dynamically attend to and weigh the representations of all other tokens based on pairwise query-key compatibility.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تتيح آلية الانتباه الذاتي لكل رمز في النص المكتوب التركيز الديناميكي وترجيح تمثيلات الرموز الأخرى وفق التوافق الزوجي بين الاستعلام والمفتاح.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "Self-attention allows every token in an input sequence to dynamically attend to and weigh the representations of all other tokens based on pairwise query-key compatibility.",
      "correctAnswerEn": "Self-attention allows every token in an input sequence to dynamically attend to and weigh the representations of all other tokens based on pairwise query-key compatibility.",
      "correctAnswerAr": "تتيح آلية الانتباه الذاتي لكل رمز في النص المكتوب التركيز الديناميكي وترجيح تمثيلات الرموز الأخرى وفق التوافق الزوجي بين الاستعلام والمفتاح.",
      "correctIndex": 1,
      "explanationEn": "Correct Theoretical Formulation: Self-attention allows every token in an input sequence to dynamically attend to and weigh the representations of all other tokens based on pairwise query-key compatibility.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تتيح آلية الانتباه الذاتي لكل رمز في النص المكتوب التركيز الديناميكي وترجيح تمثيلات الرموز الأخرى وفق التوافق الزوجي بين الاستعلام والمفتاح.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Scaled Dot-Product Multi-Head Self-Attention Mechanisms.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Self-attention allows every token in an input sequence to dynamically attend to and weigh the representations of all other tokens based on pairwise query-key compatibility.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تتيح آلية الانتباه الذاتي لكل رمز في النص المكتوب التركيز الديناميكي وترجيح تمثيلات الرموز الأخرى وفق التوافق الزوجي بين الاستعلام والمفتاح.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch3_easy_39",
      "titleEn": "[EASY] Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG) - Review 39",
      "titleAr": "[مستوى أساسي] النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG) - سؤال 39",
      "questionEn": "[AI & Data Science Core Concept] Regarding Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG), which of the following statements is theoretically and mathematically sound? (Variant 39)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 39)",
      "optionsEn": [
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "Retrieval-Augmented Generation (RAG) grounds LLM responses by retrieving relevant verified factual text passages from external vector databases and injecting them into the prompt context.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "يرسخ التوليد المعزز بالاسترجاع (RAG) إجابات النماذج اللغوية عبر استرجاع نصوص حقيقية موثوقة من قواعد بيانات المتجهات وحقنها في سياق النموذج.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "Retrieval-Augmented Generation (RAG) grounds LLM responses by retrieving relevant verified factual text passages from external vector databases and injecting them into the prompt context.",
      "correctAnswerEn": "Retrieval-Augmented Generation (RAG) grounds LLM responses by retrieving relevant verified factual text passages from external vector databases and injecting them into the prompt context.",
      "correctAnswerAr": "يرسخ التوليد المعزز بالاسترجاع (RAG) إجابات النماذج اللغوية عبر استرجاع نصوص حقيقية موثوقة من قواعد بيانات المتجهات وحقنها في سياق النموذج.",
      "correctIndex": 2,
      "explanationEn": "Correct Theoretical Formulation: Retrieval-Augmented Generation (RAG) grounds LLM responses by retrieving relevant verified factual text passages from external vector databases and injecting them into the prompt context.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يرسخ التوليد المعزز بالاسترجاع (RAG) إجابات النماذج اللغوية عبر استرجاع نصوص حقيقية موثوقة من قواعد بيانات المتجهات وحقنها في سياق النموذج.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Retrieval-Augmented Generation (RAG) grounds LLM responses by retrieving relevant verified factual text passages from external vector databases and injecting them into the prompt context.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يرسخ التوليد المعزز بالاسترجاع (RAG) إجابات النماذج اللغوية عبر استرجاع نصوص حقيقية موثوقة من قواعد بيانات المتجهات وحقنها في سياق النموذج.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch3_easy_40",
      "titleEn": "[EASY] Subword Tokenization (BPE) & Dense Word Embeddings - Review 40",
      "titleAr": "[مستوى أساسي] تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة - سؤال 40",
      "questionEn": "[AI & Data Science Core Concept] Regarding Subword Tokenization (BPE) & Dense Word Embeddings, which of the following statements is theoretically and mathematically sound? (Variant 40)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 40)",
      "optionsEn": [
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Byte-Pair Encoding (BPE) constructs subword vocabularies by iteratively merging the most frequent character pairs, effectively solving out-of-vocabulary (OOV) challenges in morphologically rich languages like Arabic."
      ],
      "optionsAr": [
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يبني ترميز الأزواج الثنائية (BPE) مفردات المقاطع الفرعية عبر الدمج التكراري لأزواج الحروف الأكثر تكراراً، مما يحل جذرياً مشكلة الكلمات خارج القاموس في اللغات الغنية كالعربية."
      ],
      "correctAnswer": "Byte-Pair Encoding (BPE) constructs subword vocabularies by iteratively merging the most frequent character pairs, effectively solving out-of-vocabulary (OOV) challenges in morphologically rich languages like Arabic.",
      "correctAnswerEn": "Byte-Pair Encoding (BPE) constructs subword vocabularies by iteratively merging the most frequent character pairs, effectively solving out-of-vocabulary (OOV) challenges in morphologically rich languages like Arabic.",
      "correctAnswerAr": "يبني ترميز الأزواج الثنائية (BPE) مفردات المقاطع الفرعية عبر الدمج التكراري لأزواج الحروف الأكثر تكراراً، مما يحل جذرياً مشكلة الكلمات خارج القاموس في اللغات الغنية كالعربية.",
      "correctIndex": 3,
      "explanationEn": "Correct Theoretical Formulation: Byte-Pair Encoding (BPE) constructs subword vocabularies by iteratively merging the most frequent character pairs, effectively solving out-of-vocabulary (OOV) challenges in morphologically rich languages like Arabic.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يبني ترميز الأزواج الثنائية (BPE) مفردات المقاطع الفرعية عبر الدمج التكراري لأزواج الحروف الأكثر تكراراً، مما يحل جذرياً مشكلة الكلمات خارج القاموس في اللغات الغنية كالعربية.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Subword Tokenization (BPE) & Dense Word Embeddings.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Byte-Pair Encoding (BPE) constructs subword vocabularies by iteratively merging the most frequent character pairs, effectively solving out-of-vocabulary (OOV) challenges in morphologically rich languages like Arabic.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يبني ترميز الأزواج الثنائية (BPE) مفردات المقاطع الفرعية عبر الدمج التكراري لأزواج الحروف الأكثر تكراراً، مما يحل جذرياً مشكلة الكلمات خارج القاموس في اللغات الغنية كالعربية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch3_easy_41",
      "titleEn": "[EASY] Scaled Dot-Product Multi-Head Self-Attention Mechanisms - Review 41",
      "titleAr": "[مستوى أساسي] آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس - سؤال 41",
      "questionEn": "[AI & Data Science Core Concept] Regarding Scaled Dot-Product Multi-Head Self-Attention Mechanisms, which of the following statements is theoretically and mathematically sound? (Variant 41)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 41)",
      "optionsEn": [
        "Self-attention allows every token in an input sequence to dynamically attend to and weigh the representations of all other tokens based on pairwise query-key compatibility.",
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "تتيح آلية الانتباه الذاتي لكل رمز في النص المكتوب التركيز الديناميكي وترجيح تمثيلات الرموز الأخرى وفق التوافق الزوجي بين الاستعلام والمفتاح.",
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "Self-attention allows every token in an input sequence to dynamically attend to and weigh the representations of all other tokens based on pairwise query-key compatibility.",
      "correctAnswerEn": "Self-attention allows every token in an input sequence to dynamically attend to and weigh the representations of all other tokens based on pairwise query-key compatibility.",
      "correctAnswerAr": "تتيح آلية الانتباه الذاتي لكل رمز في النص المكتوب التركيز الديناميكي وترجيح تمثيلات الرموز الأخرى وفق التوافق الزوجي بين الاستعلام والمفتاح.",
      "correctIndex": 0,
      "explanationEn": "Correct Theoretical Formulation: Self-attention allows every token in an input sequence to dynamically attend to and weigh the representations of all other tokens based on pairwise query-key compatibility.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تتيح آلية الانتباه الذاتي لكل رمز في النص المكتوب التركيز الديناميكي وترجيح تمثيلات الرموز الأخرى وفق التوافق الزوجي بين الاستعلام والمفتاح.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Scaled Dot-Product Multi-Head Self-Attention Mechanisms.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Self-attention allows every token in an input sequence to dynamically attend to and weigh the representations of all other tokens based on pairwise query-key compatibility.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تتيح آلية الانتباه الذاتي لكل رمز في النص المكتوب التركيز الديناميكي وترجيح تمثيلات الرموز الأخرى وفق التوافق الزوجي بين الاستعلام والمفتاح.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch3_easy_42",
      "titleEn": "[EASY] Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG) - Review 42",
      "titleAr": "[مستوى أساسي] النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG) - سؤال 42",
      "questionEn": "[AI & Data Science Core Concept] Regarding Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG), which of the following statements is theoretically and mathematically sound? (Variant 42)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 42)",
      "optionsEn": [
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "Retrieval-Augmented Generation (RAG) grounds LLM responses by retrieving relevant verified factual text passages from external vector databases and injecting them into the prompt context.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "يرسخ التوليد المعزز بالاسترجاع (RAG) إجابات النماذج اللغوية عبر استرجاع نصوص حقيقية موثوقة من قواعد بيانات المتجهات وحقنها في سياق النموذج.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "Retrieval-Augmented Generation (RAG) grounds LLM responses by retrieving relevant verified factual text passages from external vector databases and injecting them into the prompt context.",
      "correctAnswerEn": "Retrieval-Augmented Generation (RAG) grounds LLM responses by retrieving relevant verified factual text passages from external vector databases and injecting them into the prompt context.",
      "correctAnswerAr": "يرسخ التوليد المعزز بالاسترجاع (RAG) إجابات النماذج اللغوية عبر استرجاع نصوص حقيقية موثوقة من قواعد بيانات المتجهات وحقنها في سياق النموذج.",
      "correctIndex": 1,
      "explanationEn": "Correct Theoretical Formulation: Retrieval-Augmented Generation (RAG) grounds LLM responses by retrieving relevant verified factual text passages from external vector databases and injecting them into the prompt context.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يرسخ التوليد المعزز بالاسترجاع (RAG) إجابات النماذج اللغوية عبر استرجاع نصوص حقيقية موثوقة من قواعد بيانات المتجهات وحقنها في سياق النموذج.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Retrieval-Augmented Generation (RAG) grounds LLM responses by retrieving relevant verified factual text passages from external vector databases and injecting them into the prompt context.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يرسخ التوليد المعزز بالاسترجاع (RAG) إجابات النماذج اللغوية عبر استرجاع نصوص حقيقية موثوقة من قواعد بيانات المتجهات وحقنها في سياق النموذج.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch3_easy_43",
      "titleEn": "[EASY] Subword Tokenization (BPE) & Dense Word Embeddings - Review 43",
      "titleAr": "[مستوى أساسي] تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة - سؤال 43",
      "questionEn": "[AI & Data Science Core Concept] Regarding Subword Tokenization (BPE) & Dense Word Embeddings, which of the following statements is theoretically and mathematically sound? (Variant 43)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 43)",
      "optionsEn": [
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Byte-Pair Encoding (BPE) constructs subword vocabularies by iteratively merging the most frequent character pairs, effectively solving out-of-vocabulary (OOV) challenges in morphologically rich languages like Arabic.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "يبني ترميز الأزواج الثنائية (BPE) مفردات المقاطع الفرعية عبر الدمج التكراري لأزواج الحروف الأكثر تكراراً، مما يحل جذرياً مشكلة الكلمات خارج القاموس في اللغات الغنية كالعربية.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "Byte-Pair Encoding (BPE) constructs subword vocabularies by iteratively merging the most frequent character pairs, effectively solving out-of-vocabulary (OOV) challenges in morphologically rich languages like Arabic.",
      "correctAnswerEn": "Byte-Pair Encoding (BPE) constructs subword vocabularies by iteratively merging the most frequent character pairs, effectively solving out-of-vocabulary (OOV) challenges in morphologically rich languages like Arabic.",
      "correctAnswerAr": "يبني ترميز الأزواج الثنائية (BPE) مفردات المقاطع الفرعية عبر الدمج التكراري لأزواج الحروف الأكثر تكراراً، مما يحل جذرياً مشكلة الكلمات خارج القاموس في اللغات الغنية كالعربية.",
      "correctIndex": 2,
      "explanationEn": "Correct Theoretical Formulation: Byte-Pair Encoding (BPE) constructs subword vocabularies by iteratively merging the most frequent character pairs, effectively solving out-of-vocabulary (OOV) challenges in morphologically rich languages like Arabic.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يبني ترميز الأزواج الثنائية (BPE) مفردات المقاطع الفرعية عبر الدمج التكراري لأزواج الحروف الأكثر تكراراً، مما يحل جذرياً مشكلة الكلمات خارج القاموس في اللغات الغنية كالعربية.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Subword Tokenization (BPE) & Dense Word Embeddings.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Byte-Pair Encoding (BPE) constructs subword vocabularies by iteratively merging the most frequent character pairs, effectively solving out-of-vocabulary (OOV) challenges in morphologically rich languages like Arabic.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يبني ترميز الأزواج الثنائية (BPE) مفردات المقاطع الفرعية عبر الدمج التكراري لأزواج الحروف الأكثر تكراراً، مما يحل جذرياً مشكلة الكلمات خارج القاموس في اللغات الغنية كالعربية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch3_easy_44",
      "titleEn": "[EASY] Scaled Dot-Product Multi-Head Self-Attention Mechanisms - Review 44",
      "titleAr": "[مستوى أساسي] آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس - سؤال 44",
      "questionEn": "[AI & Data Science Core Concept] Regarding Scaled Dot-Product Multi-Head Self-Attention Mechanisms, which of the following statements is theoretically and mathematically sound? (Variant 44)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 44)",
      "optionsEn": [
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "Self-attention allows every token in an input sequence to dynamically attend to and weigh the representations of all other tokens based on pairwise query-key compatibility."
      ],
      "optionsAr": [
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تتيح آلية الانتباه الذاتي لكل رمز في النص المكتوب التركيز الديناميكي وترجيح تمثيلات الرموز الأخرى وفق التوافق الزوجي بين الاستعلام والمفتاح."
      ],
      "correctAnswer": "Self-attention allows every token in an input sequence to dynamically attend to and weigh the representations of all other tokens based on pairwise query-key compatibility.",
      "correctAnswerEn": "Self-attention allows every token in an input sequence to dynamically attend to and weigh the representations of all other tokens based on pairwise query-key compatibility.",
      "correctAnswerAr": "تتيح آلية الانتباه الذاتي لكل رمز في النص المكتوب التركيز الديناميكي وترجيح تمثيلات الرموز الأخرى وفق التوافق الزوجي بين الاستعلام والمفتاح.",
      "correctIndex": 3,
      "explanationEn": "Correct Theoretical Formulation: Self-attention allows every token in an input sequence to dynamically attend to and weigh the representations of all other tokens based on pairwise query-key compatibility.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تتيح آلية الانتباه الذاتي لكل رمز في النص المكتوب التركيز الديناميكي وترجيح تمثيلات الرموز الأخرى وفق التوافق الزوجي بين الاستعلام والمفتاح.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Scaled Dot-Product Multi-Head Self-Attention Mechanisms.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Self-attention allows every token in an input sequence to dynamically attend to and weigh the representations of all other tokens based on pairwise query-key compatibility.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تتيح آلية الانتباه الذاتي لكل رمز في النص المكتوب التركيز الديناميكي وترجيح تمثيلات الرموز الأخرى وفق التوافق الزوجي بين الاستعلام والمفتاح.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch3_easy_45",
      "titleEn": "[EASY] Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG) - Review 45",
      "titleAr": "[مستوى أساسي] النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG) - سؤال 45",
      "questionEn": "[AI & Data Science Core Concept] Regarding Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG), which of the following statements is theoretically and mathematically sound? (Variant 45)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 45)",
      "optionsEn": [
        "Retrieval-Augmented Generation (RAG) grounds LLM responses by retrieving relevant verified factual text passages from external vector databases and injecting them into the prompt context.",
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "يرسخ التوليد المعزز بالاسترجاع (RAG) إجابات النماذج اللغوية عبر استرجاع نصوص حقيقية موثوقة من قواعد بيانات المتجهات وحقنها في سياق النموذج.",
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "Retrieval-Augmented Generation (RAG) grounds LLM responses by retrieving relevant verified factual text passages from external vector databases and injecting them into the prompt context.",
      "correctAnswerEn": "Retrieval-Augmented Generation (RAG) grounds LLM responses by retrieving relevant verified factual text passages from external vector databases and injecting them into the prompt context.",
      "correctAnswerAr": "يرسخ التوليد المعزز بالاسترجاع (RAG) إجابات النماذج اللغوية عبر استرجاع نصوص حقيقية موثوقة من قواعد بيانات المتجهات وحقنها في سياق النموذج.",
      "correctIndex": 0,
      "explanationEn": "Correct Theoretical Formulation: Retrieval-Augmented Generation (RAG) grounds LLM responses by retrieving relevant verified factual text passages from external vector databases and injecting them into the prompt context.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يرسخ التوليد المعزز بالاسترجاع (RAG) إجابات النماذج اللغوية عبر استرجاع نصوص حقيقية موثوقة من قواعد بيانات المتجهات وحقنها في سياق النموذج.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Retrieval-Augmented Generation (RAG) grounds LLM responses by retrieving relevant verified factual text passages from external vector databases and injecting them into the prompt context.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يرسخ التوليد المعزز بالاسترجاع (RAG) إجابات النماذج اللغوية عبر استرجاع نصوص حقيقية موثوقة من قواعد بيانات المتجهات وحقنها في سياق النموذج.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch3_easy_46",
      "titleEn": "[EASY] Subword Tokenization (BPE) & Dense Word Embeddings - Review 46",
      "titleAr": "[مستوى أساسي] تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة - سؤال 46",
      "questionEn": "[AI & Data Science Core Concept] Regarding Subword Tokenization (BPE) & Dense Word Embeddings, which of the following statements is theoretically and mathematically sound? (Variant 46)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 46)",
      "optionsEn": [
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Byte-Pair Encoding (BPE) constructs subword vocabularies by iteratively merging the most frequent character pairs, effectively solving out-of-vocabulary (OOV) challenges in morphologically rich languages like Arabic.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يبني ترميز الأزواج الثنائية (BPE) مفردات المقاطع الفرعية عبر الدمج التكراري لأزواج الحروف الأكثر تكراراً، مما يحل جذرياً مشكلة الكلمات خارج القاموس في اللغات الغنية كالعربية.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "Byte-Pair Encoding (BPE) constructs subword vocabularies by iteratively merging the most frequent character pairs, effectively solving out-of-vocabulary (OOV) challenges in morphologically rich languages like Arabic.",
      "correctAnswerEn": "Byte-Pair Encoding (BPE) constructs subword vocabularies by iteratively merging the most frequent character pairs, effectively solving out-of-vocabulary (OOV) challenges in morphologically rich languages like Arabic.",
      "correctAnswerAr": "يبني ترميز الأزواج الثنائية (BPE) مفردات المقاطع الفرعية عبر الدمج التكراري لأزواج الحروف الأكثر تكراراً، مما يحل جذرياً مشكلة الكلمات خارج القاموس في اللغات الغنية كالعربية.",
      "correctIndex": 1,
      "explanationEn": "Correct Theoretical Formulation: Byte-Pair Encoding (BPE) constructs subword vocabularies by iteratively merging the most frequent character pairs, effectively solving out-of-vocabulary (OOV) challenges in morphologically rich languages like Arabic.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يبني ترميز الأزواج الثنائية (BPE) مفردات المقاطع الفرعية عبر الدمج التكراري لأزواج الحروف الأكثر تكراراً، مما يحل جذرياً مشكلة الكلمات خارج القاموس في اللغات الغنية كالعربية.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Subword Tokenization (BPE) & Dense Word Embeddings.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Byte-Pair Encoding (BPE) constructs subword vocabularies by iteratively merging the most frequent character pairs, effectively solving out-of-vocabulary (OOV) challenges in morphologically rich languages like Arabic.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يبني ترميز الأزواج الثنائية (BPE) مفردات المقاطع الفرعية عبر الدمج التكراري لأزواج الحروف الأكثر تكراراً، مما يحل جذرياً مشكلة الكلمات خارج القاموس في اللغات الغنية كالعربية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch3_easy_47",
      "titleEn": "[EASY] Scaled Dot-Product Multi-Head Self-Attention Mechanisms - Review 47",
      "titleAr": "[مستوى أساسي] آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس - سؤال 47",
      "questionEn": "[AI & Data Science Core Concept] Regarding Scaled Dot-Product Multi-Head Self-Attention Mechanisms, which of the following statements is theoretically and mathematically sound? (Variant 47)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 47)",
      "optionsEn": [
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention allows every token in an input sequence to dynamically attend to and weigh the representations of all other tokens based on pairwise query-key compatibility.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتيح آلية الانتباه الذاتي لكل رمز في النص المكتوب التركيز الديناميكي وترجيح تمثيلات الرموز الأخرى وفق التوافق الزوجي بين الاستعلام والمفتاح.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "Self-attention allows every token in an input sequence to dynamically attend to and weigh the representations of all other tokens based on pairwise query-key compatibility.",
      "correctAnswerEn": "Self-attention allows every token in an input sequence to dynamically attend to and weigh the representations of all other tokens based on pairwise query-key compatibility.",
      "correctAnswerAr": "تتيح آلية الانتباه الذاتي لكل رمز في النص المكتوب التركيز الديناميكي وترجيح تمثيلات الرموز الأخرى وفق التوافق الزوجي بين الاستعلام والمفتاح.",
      "correctIndex": 2,
      "explanationEn": "Correct Theoretical Formulation: Self-attention allows every token in an input sequence to dynamically attend to and weigh the representations of all other tokens based on pairwise query-key compatibility.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تتيح آلية الانتباه الذاتي لكل رمز في النص المكتوب التركيز الديناميكي وترجيح تمثيلات الرموز الأخرى وفق التوافق الزوجي بين الاستعلام والمفتاح.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Scaled Dot-Product Multi-Head Self-Attention Mechanisms.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Self-attention allows every token in an input sequence to dynamically attend to and weigh the representations of all other tokens based on pairwise query-key compatibility.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تتيح آلية الانتباه الذاتي لكل رمز في النص المكتوب التركيز الديناميكي وترجيح تمثيلات الرموز الأخرى وفق التوافق الزوجي بين الاستعلام والمفتاح.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch3_easy_48",
      "titleEn": "[EASY] Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG) - Review 48",
      "titleAr": "[مستوى أساسي] النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG) - سؤال 48",
      "questionEn": "[AI & Data Science Core Concept] Regarding Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG), which of the following statements is theoretically and mathematically sound? (Variant 48)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 48)",
      "optionsEn": [
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "Retrieval-Augmented Generation (RAG) grounds LLM responses by retrieving relevant verified factual text passages from external vector databases and injecting them into the prompt context."
      ],
      "optionsAr": [
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "يرسخ التوليد المعزز بالاسترجاع (RAG) إجابات النماذج اللغوية عبر استرجاع نصوص حقيقية موثوقة من قواعد بيانات المتجهات وحقنها في سياق النموذج."
      ],
      "correctAnswer": "Retrieval-Augmented Generation (RAG) grounds LLM responses by retrieving relevant verified factual text passages from external vector databases and injecting them into the prompt context.",
      "correctAnswerEn": "Retrieval-Augmented Generation (RAG) grounds LLM responses by retrieving relevant verified factual text passages from external vector databases and injecting them into the prompt context.",
      "correctAnswerAr": "يرسخ التوليد المعزز بالاسترجاع (RAG) إجابات النماذج اللغوية عبر استرجاع نصوص حقيقية موثوقة من قواعد بيانات المتجهات وحقنها في سياق النموذج.",
      "correctIndex": 3,
      "explanationEn": "Correct Theoretical Formulation: Retrieval-Augmented Generation (RAG) grounds LLM responses by retrieving relevant verified factual text passages from external vector databases and injecting them into the prompt context.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يرسخ التوليد المعزز بالاسترجاع (RAG) إجابات النماذج اللغوية عبر استرجاع نصوص حقيقية موثوقة من قواعد بيانات المتجهات وحقنها في سياق النموذج.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Retrieval-Augmented Generation (RAG) grounds LLM responses by retrieving relevant verified factual text passages from external vector databases and injecting them into the prompt context.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يرسخ التوليد المعزز بالاسترجاع (RAG) إجابات النماذج اللغوية عبر استرجاع نصوص حقيقية موثوقة من قواعد بيانات المتجهات وحقنها في سياق النموذج.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch3_easy_49",
      "titleEn": "[EASY] Subword Tokenization (BPE) & Dense Word Embeddings - Review 49",
      "titleAr": "[مستوى أساسي] تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة - سؤال 49",
      "questionEn": "[AI & Data Science Core Concept] Regarding Subword Tokenization (BPE) & Dense Word Embeddings, which of the following statements is theoretically and mathematically sound? (Variant 49)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 49)",
      "optionsEn": [
        "Byte-Pair Encoding (BPE) constructs subword vocabularies by iteratively merging the most frequent character pairs, effectively solving out-of-vocabulary (OOV) challenges in morphologically rich languages like Arabic.",
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "يبني ترميز الأزواج الثنائية (BPE) مفردات المقاطع الفرعية عبر الدمج التكراري لأزواج الحروف الأكثر تكراراً، مما يحل جذرياً مشكلة الكلمات خارج القاموس في اللغات الغنية كالعربية.",
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "Byte-Pair Encoding (BPE) constructs subword vocabularies by iteratively merging the most frequent character pairs, effectively solving out-of-vocabulary (OOV) challenges in morphologically rich languages like Arabic.",
      "correctAnswerEn": "Byte-Pair Encoding (BPE) constructs subword vocabularies by iteratively merging the most frequent character pairs, effectively solving out-of-vocabulary (OOV) challenges in morphologically rich languages like Arabic.",
      "correctAnswerAr": "يبني ترميز الأزواج الثنائية (BPE) مفردات المقاطع الفرعية عبر الدمج التكراري لأزواج الحروف الأكثر تكراراً، مما يحل جذرياً مشكلة الكلمات خارج القاموس في اللغات الغنية كالعربية.",
      "correctIndex": 0,
      "explanationEn": "Correct Theoretical Formulation: Byte-Pair Encoding (BPE) constructs subword vocabularies by iteratively merging the most frequent character pairs, effectively solving out-of-vocabulary (OOV) challenges in morphologically rich languages like Arabic.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يبني ترميز الأزواج الثنائية (BPE) مفردات المقاطع الفرعية عبر الدمج التكراري لأزواج الحروف الأكثر تكراراً، مما يحل جذرياً مشكلة الكلمات خارج القاموس في اللغات الغنية كالعربية.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Subword Tokenization (BPE) & Dense Word Embeddings.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Byte-Pair Encoding (BPE) constructs subword vocabularies by iteratively merging the most frequent character pairs, effectively solving out-of-vocabulary (OOV) challenges in morphologically rich languages like Arabic.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يبني ترميز الأزواج الثنائية (BPE) مفردات المقاطع الفرعية عبر الدمج التكراري لأزواج الحروف الأكثر تكراراً، مما يحل جذرياً مشكلة الكلمات خارج القاموس في اللغات الغنية كالعربية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch3_easy_50",
      "titleEn": "[EASY] Scaled Dot-Product Multi-Head Self-Attention Mechanisms - Review 50",
      "titleAr": "[مستوى أساسي] آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس - سؤال 50",
      "questionEn": "[AI & Data Science Core Concept] Regarding Scaled Dot-Product Multi-Head Self-Attention Mechanisms, which of the following statements is theoretically and mathematically sound? (Variant 50)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 50)",
      "optionsEn": [
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "Self-attention allows every token in an input sequence to dynamically attend to and weigh the representations of all other tokens based on pairwise query-key compatibility.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تتيح آلية الانتباه الذاتي لكل رمز في النص المكتوب التركيز الديناميكي وترجيح تمثيلات الرموز الأخرى وفق التوافق الزوجي بين الاستعلام والمفتاح.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "Self-attention allows every token in an input sequence to dynamically attend to and weigh the representations of all other tokens based on pairwise query-key compatibility.",
      "correctAnswerEn": "Self-attention allows every token in an input sequence to dynamically attend to and weigh the representations of all other tokens based on pairwise query-key compatibility.",
      "correctAnswerAr": "تتيح آلية الانتباه الذاتي لكل رمز في النص المكتوب التركيز الديناميكي وترجيح تمثيلات الرموز الأخرى وفق التوافق الزوجي بين الاستعلام والمفتاح.",
      "correctIndex": 1,
      "explanationEn": "Correct Theoretical Formulation: Self-attention allows every token in an input sequence to dynamically attend to and weigh the representations of all other tokens based on pairwise query-key compatibility.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تتيح آلية الانتباه الذاتي لكل رمز في النص المكتوب التركيز الديناميكي وترجيح تمثيلات الرموز الأخرى وفق التوافق الزوجي بين الاستعلام والمفتاح.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Scaled Dot-Product Multi-Head Self-Attention Mechanisms.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Self-attention allows every token in an input sequence to dynamically attend to and weigh the representations of all other tokens based on pairwise query-key compatibility.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تتيح آلية الانتباه الذاتي لكل رمز في النص المكتوب التركيز الديناميكي وترجيح تمثيلات الرموز الأخرى وفق التوافق الزوجي بين الاستعلام والمفتاح.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch3_easy_51",
      "titleEn": "[EASY] Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG) - Review 51",
      "titleAr": "[مستوى أساسي] النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG) - سؤال 51",
      "questionEn": "[AI & Data Science Core Concept] Regarding Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG), which of the following statements is theoretically and mathematically sound? (Variant 51)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 51)",
      "optionsEn": [
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "Retrieval-Augmented Generation (RAG) grounds LLM responses by retrieving relevant verified factual text passages from external vector databases and injecting them into the prompt context.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يرسخ التوليد المعزز بالاسترجاع (RAG) إجابات النماذج اللغوية عبر استرجاع نصوص حقيقية موثوقة من قواعد بيانات المتجهات وحقنها في سياق النموذج.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "Retrieval-Augmented Generation (RAG) grounds LLM responses by retrieving relevant verified factual text passages from external vector databases and injecting them into the prompt context.",
      "correctAnswerEn": "Retrieval-Augmented Generation (RAG) grounds LLM responses by retrieving relevant verified factual text passages from external vector databases and injecting them into the prompt context.",
      "correctAnswerAr": "يرسخ التوليد المعزز بالاسترجاع (RAG) إجابات النماذج اللغوية عبر استرجاع نصوص حقيقية موثوقة من قواعد بيانات المتجهات وحقنها في سياق النموذج.",
      "correctIndex": 2,
      "explanationEn": "Correct Theoretical Formulation: Retrieval-Augmented Generation (RAG) grounds LLM responses by retrieving relevant verified factual text passages from external vector databases and injecting them into the prompt context.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يرسخ التوليد المعزز بالاسترجاع (RAG) إجابات النماذج اللغوية عبر استرجاع نصوص حقيقية موثوقة من قواعد بيانات المتجهات وحقنها في سياق النموذج.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Retrieval-Augmented Generation (RAG) grounds LLM responses by retrieving relevant verified factual text passages from external vector databases and injecting them into the prompt context.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يرسخ التوليد المعزز بالاسترجاع (RAG) إجابات النماذج اللغوية عبر استرجاع نصوص حقيقية موثوقة من قواعد بيانات المتجهات وحقنها في سياق النموذج.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch3_easy_52",
      "titleEn": "[EASY] Subword Tokenization (BPE) & Dense Word Embeddings - Review 52",
      "titleAr": "[مستوى أساسي] تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة - سؤال 52",
      "questionEn": "[AI & Data Science Core Concept] Regarding Subword Tokenization (BPE) & Dense Word Embeddings, which of the following statements is theoretically and mathematically sound? (Variant 52)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 52)",
      "optionsEn": [
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "Byte-Pair Encoding (BPE) constructs subword vocabularies by iteratively merging the most frequent character pairs, effectively solving out-of-vocabulary (OOV) challenges in morphologically rich languages like Arabic."
      ],
      "optionsAr": [
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "يبني ترميز الأزواج الثنائية (BPE) مفردات المقاطع الفرعية عبر الدمج التكراري لأزواج الحروف الأكثر تكراراً، مما يحل جذرياً مشكلة الكلمات خارج القاموس في اللغات الغنية كالعربية."
      ],
      "correctAnswer": "Byte-Pair Encoding (BPE) constructs subword vocabularies by iteratively merging the most frequent character pairs, effectively solving out-of-vocabulary (OOV) challenges in morphologically rich languages like Arabic.",
      "correctAnswerEn": "Byte-Pair Encoding (BPE) constructs subword vocabularies by iteratively merging the most frequent character pairs, effectively solving out-of-vocabulary (OOV) challenges in morphologically rich languages like Arabic.",
      "correctAnswerAr": "يبني ترميز الأزواج الثنائية (BPE) مفردات المقاطع الفرعية عبر الدمج التكراري لأزواج الحروف الأكثر تكراراً، مما يحل جذرياً مشكلة الكلمات خارج القاموس في اللغات الغنية كالعربية.",
      "correctIndex": 3,
      "explanationEn": "Correct Theoretical Formulation: Byte-Pair Encoding (BPE) constructs subword vocabularies by iteratively merging the most frequent character pairs, effectively solving out-of-vocabulary (OOV) challenges in morphologically rich languages like Arabic.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يبني ترميز الأزواج الثنائية (BPE) مفردات المقاطع الفرعية عبر الدمج التكراري لأزواج الحروف الأكثر تكراراً، مما يحل جذرياً مشكلة الكلمات خارج القاموس في اللغات الغنية كالعربية.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Subword Tokenization (BPE) & Dense Word Embeddings.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Byte-Pair Encoding (BPE) constructs subword vocabularies by iteratively merging the most frequent character pairs, effectively solving out-of-vocabulary (OOV) challenges in morphologically rich languages like Arabic.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يبني ترميز الأزواج الثنائية (BPE) مفردات المقاطع الفرعية عبر الدمج التكراري لأزواج الحروف الأكثر تكراراً، مما يحل جذرياً مشكلة الكلمات خارج القاموس في اللغات الغنية كالعربية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch3_easy_53",
      "titleEn": "[EASY] Scaled Dot-Product Multi-Head Self-Attention Mechanisms - Review 53",
      "titleAr": "[مستوى أساسي] آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس - سؤال 53",
      "questionEn": "[AI & Data Science Core Concept] Regarding Scaled Dot-Product Multi-Head Self-Attention Mechanisms, which of the following statements is theoretically and mathematically sound? (Variant 53)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 53)",
      "optionsEn": [
        "Self-attention allows every token in an input sequence to dynamically attend to and weigh the representations of all other tokens based on pairwise query-key compatibility.",
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "تتيح آلية الانتباه الذاتي لكل رمز في النص المكتوب التركيز الديناميكي وترجيح تمثيلات الرموز الأخرى وفق التوافق الزوجي بين الاستعلام والمفتاح.",
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "Self-attention allows every token in an input sequence to dynamically attend to and weigh the representations of all other tokens based on pairwise query-key compatibility.",
      "correctAnswerEn": "Self-attention allows every token in an input sequence to dynamically attend to and weigh the representations of all other tokens based on pairwise query-key compatibility.",
      "correctAnswerAr": "تتيح آلية الانتباه الذاتي لكل رمز في النص المكتوب التركيز الديناميكي وترجيح تمثيلات الرموز الأخرى وفق التوافق الزوجي بين الاستعلام والمفتاح.",
      "correctIndex": 0,
      "explanationEn": "Correct Theoretical Formulation: Self-attention allows every token in an input sequence to dynamically attend to and weigh the representations of all other tokens based on pairwise query-key compatibility.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تتيح آلية الانتباه الذاتي لكل رمز في النص المكتوب التركيز الديناميكي وترجيح تمثيلات الرموز الأخرى وفق التوافق الزوجي بين الاستعلام والمفتاح.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Scaled Dot-Product Multi-Head Self-Attention Mechanisms.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Self-attention allows every token in an input sequence to dynamically attend to and weigh the representations of all other tokens based on pairwise query-key compatibility.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تتيح آلية الانتباه الذاتي لكل رمز في النص المكتوب التركيز الديناميكي وترجيح تمثيلات الرموز الأخرى وفق التوافق الزوجي بين الاستعلام والمفتاح.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch3_easy_54",
      "titleEn": "[EASY] Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG) - Review 54",
      "titleAr": "[مستوى أساسي] النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG) - سؤال 54",
      "questionEn": "[AI & Data Science Core Concept] Regarding Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG), which of the following statements is theoretically and mathematically sound? (Variant 54)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 54)",
      "optionsEn": [
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "Retrieval-Augmented Generation (RAG) grounds LLM responses by retrieving relevant verified factual text passages from external vector databases and injecting them into the prompt context.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "يرسخ التوليد المعزز بالاسترجاع (RAG) إجابات النماذج اللغوية عبر استرجاع نصوص حقيقية موثوقة من قواعد بيانات المتجهات وحقنها في سياق النموذج.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "Retrieval-Augmented Generation (RAG) grounds LLM responses by retrieving relevant verified factual text passages from external vector databases and injecting them into the prompt context.",
      "correctAnswerEn": "Retrieval-Augmented Generation (RAG) grounds LLM responses by retrieving relevant verified factual text passages from external vector databases and injecting them into the prompt context.",
      "correctAnswerAr": "يرسخ التوليد المعزز بالاسترجاع (RAG) إجابات النماذج اللغوية عبر استرجاع نصوص حقيقية موثوقة من قواعد بيانات المتجهات وحقنها في سياق النموذج.",
      "correctIndex": 1,
      "explanationEn": "Correct Theoretical Formulation: Retrieval-Augmented Generation (RAG) grounds LLM responses by retrieving relevant verified factual text passages from external vector databases and injecting them into the prompt context.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يرسخ التوليد المعزز بالاسترجاع (RAG) إجابات النماذج اللغوية عبر استرجاع نصوص حقيقية موثوقة من قواعد بيانات المتجهات وحقنها في سياق النموذج.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Retrieval-Augmented Generation (RAG) grounds LLM responses by retrieving relevant verified factual text passages from external vector databases and injecting them into the prompt context.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يرسخ التوليد المعزز بالاسترجاع (RAG) إجابات النماذج اللغوية عبر استرجاع نصوص حقيقية موثوقة من قواعد بيانات المتجهات وحقنها في سياق النموذج.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch3_easy_55",
      "titleEn": "[EASY] Subword Tokenization (BPE) & Dense Word Embeddings - Review 55",
      "titleAr": "[مستوى أساسي] تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة - سؤال 55",
      "questionEn": "[AI & Data Science Core Concept] Regarding Subword Tokenization (BPE) & Dense Word Embeddings, which of the following statements is theoretically and mathematically sound? (Variant 55)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 55)",
      "optionsEn": [
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Byte-Pair Encoding (BPE) constructs subword vocabularies by iteratively merging the most frequent character pairs, effectively solving out-of-vocabulary (OOV) challenges in morphologically rich languages like Arabic.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "يبني ترميز الأزواج الثنائية (BPE) مفردات المقاطع الفرعية عبر الدمج التكراري لأزواج الحروف الأكثر تكراراً، مما يحل جذرياً مشكلة الكلمات خارج القاموس في اللغات الغنية كالعربية.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "Byte-Pair Encoding (BPE) constructs subword vocabularies by iteratively merging the most frequent character pairs, effectively solving out-of-vocabulary (OOV) challenges in morphologically rich languages like Arabic.",
      "correctAnswerEn": "Byte-Pair Encoding (BPE) constructs subword vocabularies by iteratively merging the most frequent character pairs, effectively solving out-of-vocabulary (OOV) challenges in morphologically rich languages like Arabic.",
      "correctAnswerAr": "يبني ترميز الأزواج الثنائية (BPE) مفردات المقاطع الفرعية عبر الدمج التكراري لأزواج الحروف الأكثر تكراراً، مما يحل جذرياً مشكلة الكلمات خارج القاموس في اللغات الغنية كالعربية.",
      "correctIndex": 2,
      "explanationEn": "Correct Theoretical Formulation: Byte-Pair Encoding (BPE) constructs subword vocabularies by iteratively merging the most frequent character pairs, effectively solving out-of-vocabulary (OOV) challenges in morphologically rich languages like Arabic.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يبني ترميز الأزواج الثنائية (BPE) مفردات المقاطع الفرعية عبر الدمج التكراري لأزواج الحروف الأكثر تكراراً، مما يحل جذرياً مشكلة الكلمات خارج القاموس في اللغات الغنية كالعربية.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Subword Tokenization (BPE) & Dense Word Embeddings.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Byte-Pair Encoding (BPE) constructs subword vocabularies by iteratively merging the most frequent character pairs, effectively solving out-of-vocabulary (OOV) challenges in morphologically rich languages like Arabic.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يبني ترميز الأزواج الثنائية (BPE) مفردات المقاطع الفرعية عبر الدمج التكراري لأزواج الحروف الأكثر تكراراً، مما يحل جذرياً مشكلة الكلمات خارج القاموس في اللغات الغنية كالعربية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch3_easy_56",
      "titleEn": "[EASY] Scaled Dot-Product Multi-Head Self-Attention Mechanisms - Review 56",
      "titleAr": "[مستوى أساسي] آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس - سؤال 56",
      "questionEn": "[AI & Data Science Core Concept] Regarding Scaled Dot-Product Multi-Head Self-Attention Mechanisms, which of the following statements is theoretically and mathematically sound? (Variant 56)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 56)",
      "optionsEn": [
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "Self-attention allows every token in an input sequence to dynamically attend to and weigh the representations of all other tokens based on pairwise query-key compatibility."
      ],
      "optionsAr": [
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تتيح آلية الانتباه الذاتي لكل رمز في النص المكتوب التركيز الديناميكي وترجيح تمثيلات الرموز الأخرى وفق التوافق الزوجي بين الاستعلام والمفتاح."
      ],
      "correctAnswer": "Self-attention allows every token in an input sequence to dynamically attend to and weigh the representations of all other tokens based on pairwise query-key compatibility.",
      "correctAnswerEn": "Self-attention allows every token in an input sequence to dynamically attend to and weigh the representations of all other tokens based on pairwise query-key compatibility.",
      "correctAnswerAr": "تتيح آلية الانتباه الذاتي لكل رمز في النص المكتوب التركيز الديناميكي وترجيح تمثيلات الرموز الأخرى وفق التوافق الزوجي بين الاستعلام والمفتاح.",
      "correctIndex": 3,
      "explanationEn": "Correct Theoretical Formulation: Self-attention allows every token in an input sequence to dynamically attend to and weigh the representations of all other tokens based on pairwise query-key compatibility.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تتيح آلية الانتباه الذاتي لكل رمز في النص المكتوب التركيز الديناميكي وترجيح تمثيلات الرموز الأخرى وفق التوافق الزوجي بين الاستعلام والمفتاح.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Scaled Dot-Product Multi-Head Self-Attention Mechanisms.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Self-attention allows every token in an input sequence to dynamically attend to and weigh the representations of all other tokens based on pairwise query-key compatibility.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تتيح آلية الانتباه الذاتي لكل رمز في النص المكتوب التركيز الديناميكي وترجيح تمثيلات الرموز الأخرى وفق التوافق الزوجي بين الاستعلام والمفتاح.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch3_easy_57",
      "titleEn": "[EASY] Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG) - Review 57",
      "titleAr": "[مستوى أساسي] النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG) - سؤال 57",
      "questionEn": "[AI & Data Science Core Concept] Regarding Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG), which of the following statements is theoretically and mathematically sound? (Variant 57)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 57)",
      "optionsEn": [
        "Retrieval-Augmented Generation (RAG) grounds LLM responses by retrieving relevant verified factual text passages from external vector databases and injecting them into the prompt context.",
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "يرسخ التوليد المعزز بالاسترجاع (RAG) إجابات النماذج اللغوية عبر استرجاع نصوص حقيقية موثوقة من قواعد بيانات المتجهات وحقنها في سياق النموذج.",
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "Retrieval-Augmented Generation (RAG) grounds LLM responses by retrieving relevant verified factual text passages from external vector databases and injecting them into the prompt context.",
      "correctAnswerEn": "Retrieval-Augmented Generation (RAG) grounds LLM responses by retrieving relevant verified factual text passages from external vector databases and injecting them into the prompt context.",
      "correctAnswerAr": "يرسخ التوليد المعزز بالاسترجاع (RAG) إجابات النماذج اللغوية عبر استرجاع نصوص حقيقية موثوقة من قواعد بيانات المتجهات وحقنها في سياق النموذج.",
      "correctIndex": 0,
      "explanationEn": "Correct Theoretical Formulation: Retrieval-Augmented Generation (RAG) grounds LLM responses by retrieving relevant verified factual text passages from external vector databases and injecting them into the prompt context.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يرسخ التوليد المعزز بالاسترجاع (RAG) إجابات النماذج اللغوية عبر استرجاع نصوص حقيقية موثوقة من قواعد بيانات المتجهات وحقنها في سياق النموذج.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Retrieval-Augmented Generation (RAG) grounds LLM responses by retrieving relevant verified factual text passages from external vector databases and injecting them into the prompt context.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يرسخ التوليد المعزز بالاسترجاع (RAG) إجابات النماذج اللغوية عبر استرجاع نصوص حقيقية موثوقة من قواعد بيانات المتجهات وحقنها في سياق النموذج.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_ai_data_science_ch3_easy_58",
      "titleEn": "[EASY] Subword Tokenization (BPE) & Dense Word Embeddings - Review 58",
      "titleAr": "[مستوى أساسي] تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة - سؤال 58",
      "questionEn": "[AI & Data Science Core Concept] Regarding Subword Tokenization (BPE) & Dense Word Embeddings, which of the following statements is theoretically and mathematically sound? (Variant 58)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 58)",
      "optionsEn": [
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "Byte-Pair Encoding (BPE) constructs subword vocabularies by iteratively merging the most frequent character pairs, effectively solving out-of-vocabulary (OOV) challenges in morphologically rich languages like Arabic.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "يبني ترميز الأزواج الثنائية (BPE) مفردات المقاطع الفرعية عبر الدمج التكراري لأزواج الحروف الأكثر تكراراً، مما يحل جذرياً مشكلة الكلمات خارج القاموس في اللغات الغنية كالعربية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "Byte-Pair Encoding (BPE) constructs subword vocabularies by iteratively merging the most frequent character pairs, effectively solving out-of-vocabulary (OOV) challenges in morphologically rich languages like Arabic.",
      "correctAnswerEn": "Byte-Pair Encoding (BPE) constructs subword vocabularies by iteratively merging the most frequent character pairs, effectively solving out-of-vocabulary (OOV) challenges in morphologically rich languages like Arabic.",
      "correctAnswerAr": "يبني ترميز الأزواج الثنائية (BPE) مفردات المقاطع الفرعية عبر الدمج التكراري لأزواج الحروف الأكثر تكراراً، مما يحل جذرياً مشكلة الكلمات خارج القاموس في اللغات الغنية كالعربية.",
      "correctIndex": 1,
      "explanationEn": "Correct Theoretical Formulation: Byte-Pair Encoding (BPE) constructs subword vocabularies by iteratively merging the most frequent character pairs, effectively solving out-of-vocabulary (OOV) challenges in morphologically rich languages like Arabic.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يبني ترميز الأزواج الثنائية (BPE) مفردات المقاطع الفرعية عبر الدمج التكراري لأزواج الحروف الأكثر تكراراً، مما يحل جذرياً مشكلة الكلمات خارج القاموس في اللغات الغنية كالعربية.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Subword Tokenization (BPE) & Dense Word Embeddings.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Byte-Pair Encoding (BPE) constructs subword vocabularies by iteratively merging the most frequent character pairs, effectively solving out-of-vocabulary (OOV) challenges in morphologically rich languages like Arabic.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يبني ترميز الأزواج الثنائية (BPE) مفردات المقاطع الفرعية عبر الدمج التكراري لأزواج الحروف الأكثر تكراراً، مما يحل جذرياً مشكلة الكلمات خارج القاموس في اللغات الغنية كالعربية.."
      ],
      "difficulty": "easy"
    }
  ],
  "medium": [
    {
      "id": "th_ai_data_science_ch3_med_1",
      "titleEn": "[MEDIUM] Subword Tokenization (BPE) & Dense Word Embeddings - Analysis 1",
      "titleAr": "[مستوى متوسط] تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة - تحليل 1",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Subword Tokenization (BPE) & Dense Word Embeddings, what is the precise analytical formulation or operative rule? (Item 1)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 1)",
      "optionsEn": [
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves."
      ],
      "optionsAr": [
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "ترسم تضمينات الكلمات معرّفات الرموز في فضاءات اتجاهية دلالية مستمرة $\\mathbb{R}^d$ تعكس العلاقات الهندسية بين المتجهات القياسات الدلالية مثل: $\\vec{v}_{\\text{ملك}} - \\vec{v}_{\\text{رجل}} + \\vec{v}_{\\text{امرأة}} \\approx \\vec{v}_{\\text{ملكة}}$.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية."
      ],
      "correctAnswer": "Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.",
      "correctAnswerEn": "Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.",
      "correctAnswerAr": "ترسم تضمينات الكلمات معرّفات الرموز في فضاءات اتجاهية دلالية مستمرة $\\mathbb{R}^d$ تعكس العلاقات الهندسية بين المتجهات القياسات الدلالية مثل: $\\vec{v}_{\\text{ملك}} - \\vec{v}_{\\text{رجل}} + \\vec{v}_{\\text{امرأة}} \\approx \\vec{v}_{\\text{ملكة}}$.",
      "correctIndex": 1,
      "explanationEn": "Analytical Derivation & Properties: Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: ترسم تضمينات الكلمات معرّفات الرموز في فضاءات اتجاهية دلالية مستمرة $\\mathbb{R}^d$ تعكس العلاقات الهندسية بين المتجهات القياسات الدلالية مثل: $\\vec{v}_{\\text{ملك}} - \\vec{v}_{\\text{رجل}} + \\vec{v}_{\\text{امرأة}} \\approx \\vec{v}_{\\text{ملكة}}$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Subword Tokenization (BPE) & Dense Word Embeddings.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: ترسم تضمينات الكلمات معرّفات الرموز في فضاءات اتجاهية دلالية مستمرة $\\mathbb{R}^d$ تعكس العلاقات الهندسية بين المتجهات القياسات الدلالية مثل: $\\vec{v}_{\\text{ملك}} - \\vec{v}_{\\text{رجل}} + \\vec{v}_{\\text{امرأة}} \\approx \\vec{v}_{\\text{ملكة}}$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch3_med_2",
      "titleEn": "[MEDIUM] Scaled Dot-Product Multi-Head Self-Attention Mechanisms - Analysis 2",
      "titleAr": "[مستوى متوسط] آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس - تحليل 2",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Scaled Dot-Product Multi-Head Self-Attention Mechanisms, what is the precise analytical formulation or operative rule? (Item 2)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 2)",
      "optionsEn": [
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تُحسب مصفوفة الانتباه بالعلاقة $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$، حيث يمنع معامل القياس $\\sqrt{d_k}$ تضخم نواتج الضرب وتلاشي التدرجات في دالة softmax.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.",
      "correctAnswerEn": "The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.",
      "correctAnswerAr": "تُحسب مصفوفة الانتباه بالعلاقة $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$، حيث يمنع معامل القياس $\\sqrt{d_k}$ تضخم نواتج الضرب وتلاشي التدرجات في دالة softmax.",
      "correctIndex": 2,
      "explanationEn": "Analytical Derivation & Properties: The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تُحسب مصفوفة الانتباه بالعلاقة $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$، حيث يمنع معامل القياس $\\sqrt{d_k}$ تضخم نواتج الضرب وتلاشي التدرجات في دالة softmax.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Scaled Dot-Product Multi-Head Self-Attention Mechanisms.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تُحسب مصفوفة الانتباه بالعلاقة $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$، حيث يمنع معامل القياس $\\sqrt{d_k}$ تضخم نواتج الضرب وتلاشي التدرجات في دالة softmax.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch3_med_3",
      "titleEn": "[MEDIUM] Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG) - Analysis 3",
      "titleAr": "[مستوى متوسط] النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG) - تحليل 3",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG), what is the precise analytical formulation or operative rule? (Item 3)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 3)",
      "optionsEn": [
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence."
      ],
      "optionsAr": [
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "يقطع خط RAG الوثائق إلى أجزاء ويولد تضميناتها بترميز كثيف، ويفهرسها بتقنيات الجوار التقريبي HNSW، ويجري بحث تشابه جيب التمام لاستخراج أفضل $k$ أدلة سياقية."
      ],
      "correctAnswer": "A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.",
      "correctAnswerEn": "A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.",
      "correctAnswerAr": "يقطع خط RAG الوثائق إلى أجزاء ويولد تضميناتها بترميز كثيف، ويفهرسها بتقنيات الجوار التقريبي HNSW، ويجري بحث تشابه جيب التمام لاستخراج أفضل $k$ أدلة سياقية.",
      "correctIndex": 3,
      "explanationEn": "Analytical Derivation & Properties: A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يقطع خط RAG الوثائق إلى أجزاء ويولد تضميناتها بترميز كثيف، ويفهرسها بتقنيات الجوار التقريبي HNSW، ويجري بحث تشابه جيب التمام لاستخراج أفضل $k$ أدلة سياقية.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يقطع خط RAG الوثائق إلى أجزاء ويولد تضميناتها بترميز كثيف، ويفهرسها بتقنيات الجوار التقريبي HNSW، ويجري بحث تشابه جيب التمام لاستخراج أفضل $k$ أدلة سياقية.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch3_med_4",
      "titleEn": "[MEDIUM] Subword Tokenization (BPE) & Dense Word Embeddings - Analysis 4",
      "titleAr": "[مستوى متوسط] تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة - تحليل 4",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Subword Tokenization (BPE) & Dense Word Embeddings, what is the precise analytical formulation or operative rule? (Item 4)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 4)",
      "optionsEn": [
        "Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent."
      ],
      "optionsAr": [
        "ترسم تضمينات الكلمات معرّفات الرموز في فضاءات اتجاهية دلالية مستمرة $\\mathbb{R}^d$ تعكس العلاقات الهندسية بين المتجهات القياسات الدلالية مثل: $\\vec{v}_{\\text{ملك}} - \\vec{v}_{\\text{رجل}} + \\vec{v}_{\\text{امرأة}} \\approx \\vec{v}_{\\text{ملكة}}$.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة."
      ],
      "correctAnswer": "Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.",
      "correctAnswerEn": "Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.",
      "correctAnswerAr": "ترسم تضمينات الكلمات معرّفات الرموز في فضاءات اتجاهية دلالية مستمرة $\\mathbb{R}^d$ تعكس العلاقات الهندسية بين المتجهات القياسات الدلالية مثل: $\\vec{v}_{\\text{ملك}} - \\vec{v}_{\\text{رجل}} + \\vec{v}_{\\text{امرأة}} \\approx \\vec{v}_{\\text{ملكة}}$.",
      "correctIndex": 0,
      "explanationEn": "Analytical Derivation & Properties: Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: ترسم تضمينات الكلمات معرّفات الرموز في فضاءات اتجاهية دلالية مستمرة $\\mathbb{R}^d$ تعكس العلاقات الهندسية بين المتجهات القياسات الدلالية مثل: $\\vec{v}_{\\text{ملك}} - \\vec{v}_{\\text{رجل}} + \\vec{v}_{\\text{امرأة}} \\approx \\vec{v}_{\\text{ملكة}}$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Subword Tokenization (BPE) & Dense Word Embeddings.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: ترسم تضمينات الكلمات معرّفات الرموز في فضاءات اتجاهية دلالية مستمرة $\\mathbb{R}^d$ تعكس العلاقات الهندسية بين المتجهات القياسات الدلالية مثل: $\\vec{v}_{\\text{ملك}} - \\vec{v}_{\\text{رجل}} + \\vec{v}_{\\text{امرأة}} \\approx \\vec{v}_{\\text{ملكة}}$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch3_med_5",
      "titleEn": "[MEDIUM] Scaled Dot-Product Multi-Head Self-Attention Mechanisms - Analysis 5",
      "titleAr": "[مستوى متوسط] آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس - تحليل 5",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Scaled Dot-Product Multi-Head Self-Attention Mechanisms, what is the precise analytical formulation or operative rule? (Item 5)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 5)",
      "optionsEn": [
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "تُحسب مصفوفة الانتباه بالعلاقة $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$، حيث يمنع معامل القياس $\\sqrt{d_k}$ تضخم نواتج الضرب وتلاشي التدرجات في دالة softmax.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.",
      "correctAnswerEn": "The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.",
      "correctAnswerAr": "تُحسب مصفوفة الانتباه بالعلاقة $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$، حيث يمنع معامل القياس $\\sqrt{d_k}$ تضخم نواتج الضرب وتلاشي التدرجات في دالة softmax.",
      "correctIndex": 1,
      "explanationEn": "Analytical Derivation & Properties: The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تُحسب مصفوفة الانتباه بالعلاقة $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$، حيث يمنع معامل القياس $\\sqrt{d_k}$ تضخم نواتج الضرب وتلاشي التدرجات في دالة softmax.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Scaled Dot-Product Multi-Head Self-Attention Mechanisms.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تُحسب مصفوفة الانتباه بالعلاقة $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$، حيث يمنع معامل القياس $\\sqrt{d_k}$ تضخم نواتج الضرب وتلاشي التدرجات في دالة softmax.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch3_med_6",
      "titleEn": "[MEDIUM] Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG) - Analysis 6",
      "titleAr": "[مستوى متوسط] النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG) - تحليل 6",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG), what is the precise analytical formulation or operative rule? (Item 6)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 6)",
      "optionsEn": [
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step."
      ],
      "optionsAr": [
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "يقطع خط RAG الوثائق إلى أجزاء ويولد تضميناتها بترميز كثيف، ويفهرسها بتقنيات الجوار التقريبي HNSW، ويجري بحث تشابه جيب التمام لاستخراج أفضل $k$ أدلة سياقية.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين."
      ],
      "correctAnswer": "A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.",
      "correctAnswerEn": "A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.",
      "correctAnswerAr": "يقطع خط RAG الوثائق إلى أجزاء ويولد تضميناتها بترميز كثيف، ويفهرسها بتقنيات الجوار التقريبي HNSW، ويجري بحث تشابه جيب التمام لاستخراج أفضل $k$ أدلة سياقية.",
      "correctIndex": 2,
      "explanationEn": "Analytical Derivation & Properties: A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يقطع خط RAG الوثائق إلى أجزاء ويولد تضميناتها بترميز كثيف، ويفهرسها بتقنيات الجوار التقريبي HNSW، ويجري بحث تشابه جيب التمام لاستخراج أفضل $k$ أدلة سياقية.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يقطع خط RAG الوثائق إلى أجزاء ويولد تضميناتها بترميز كثيف، ويفهرسها بتقنيات الجوار التقريبي HNSW، ويجري بحث تشابه جيب التمام لاستخراج أفضل $k$ أدلة سياقية.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch3_med_7",
      "titleEn": "[MEDIUM] Subword Tokenization (BPE) & Dense Word Embeddings - Analysis 7",
      "titleAr": "[مستوى متوسط] تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة - تحليل 7",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Subword Tokenization (BPE) & Dense Word Embeddings, what is the precise analytical formulation or operative rule? (Item 7)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 7)",
      "optionsEn": [
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$."
      ],
      "optionsAr": [
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "ترسم تضمينات الكلمات معرّفات الرموز في فضاءات اتجاهية دلالية مستمرة $\\mathbb{R}^d$ تعكس العلاقات الهندسية بين المتجهات القياسات الدلالية مثل: $\\vec{v}_{\\text{ملك}} - \\vec{v}_{\\text{رجل}} + \\vec{v}_{\\text{امرأة}} \\approx \\vec{v}_{\\text{ملكة}}$."
      ],
      "correctAnswer": "Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.",
      "correctAnswerEn": "Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.",
      "correctAnswerAr": "ترسم تضمينات الكلمات معرّفات الرموز في فضاءات اتجاهية دلالية مستمرة $\\mathbb{R}^d$ تعكس العلاقات الهندسية بين المتجهات القياسات الدلالية مثل: $\\vec{v}_{\\text{ملك}} - \\vec{v}_{\\text{رجل}} + \\vec{v}_{\\text{امرأة}} \\approx \\vec{v}_{\\text{ملكة}}$.",
      "correctIndex": 3,
      "explanationEn": "Analytical Derivation & Properties: Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: ترسم تضمينات الكلمات معرّفات الرموز في فضاءات اتجاهية دلالية مستمرة $\\mathbb{R}^d$ تعكس العلاقات الهندسية بين المتجهات القياسات الدلالية مثل: $\\vec{v}_{\\text{ملك}} - \\vec{v}_{\\text{رجل}} + \\vec{v}_{\\text{امرأة}} \\approx \\vec{v}_{\\text{ملكة}}$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Subword Tokenization (BPE) & Dense Word Embeddings.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: ترسم تضمينات الكلمات معرّفات الرموز في فضاءات اتجاهية دلالية مستمرة $\\mathbb{R}^d$ تعكس العلاقات الهندسية بين المتجهات القياسات الدلالية مثل: $\\vec{v}_{\\text{ملك}} - \\vec{v}_{\\text{رجل}} + \\vec{v}_{\\text{امرأة}} \\approx \\vec{v}_{\\text{ملكة}}$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch3_med_8",
      "titleEn": "[MEDIUM] Scaled Dot-Product Multi-Head Self-Attention Mechanisms - Analysis 8",
      "titleAr": "[مستوى متوسط] آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس - تحليل 8",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Scaled Dot-Product Multi-Head Self-Attention Mechanisms, what is the precise analytical formulation or operative rule? (Item 8)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 8)",
      "optionsEn": [
        "The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.",
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "تُحسب مصفوفة الانتباه بالعلاقة $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$، حيث يمنع معامل القياس $\\sqrt{d_k}$ تضخم نواتج الضرب وتلاشي التدرجات في دالة softmax.",
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.",
      "correctAnswerEn": "The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.",
      "correctAnswerAr": "تُحسب مصفوفة الانتباه بالعلاقة $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$، حيث يمنع معامل القياس $\\sqrt{d_k}$ تضخم نواتج الضرب وتلاشي التدرجات في دالة softmax.",
      "correctIndex": 0,
      "explanationEn": "Analytical Derivation & Properties: The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تُحسب مصفوفة الانتباه بالعلاقة $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$، حيث يمنع معامل القياس $\\sqrt{d_k}$ تضخم نواتج الضرب وتلاشي التدرجات في دالة softmax.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Scaled Dot-Product Multi-Head Self-Attention Mechanisms.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تُحسب مصفوفة الانتباه بالعلاقة $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$، حيث يمنع معامل القياس $\\sqrt{d_k}$ تضخم نواتج الضرب وتلاشي التدرجات في دالة softmax.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch3_med_9",
      "titleEn": "[MEDIUM] Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG) - Analysis 9",
      "titleAr": "[مستوى متوسط] النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG) - تحليل 9",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG), what is the precise analytical formulation or operative rule? (Item 9)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 9)",
      "optionsEn": [
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.",
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs."
      ],
      "optionsAr": [
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "يقطع خط RAG الوثائق إلى أجزاء ويولد تضميناتها بترميز كثيف، ويفهرسها بتقنيات الجوار التقريبي HNSW، ويجري بحث تشابه جيب التمام لاستخراج أفضل $k$ أدلة سياقية.",
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة."
      ],
      "correctAnswer": "A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.",
      "correctAnswerEn": "A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.",
      "correctAnswerAr": "يقطع خط RAG الوثائق إلى أجزاء ويولد تضميناتها بترميز كثيف، ويفهرسها بتقنيات الجوار التقريبي HNSW، ويجري بحث تشابه جيب التمام لاستخراج أفضل $k$ أدلة سياقية.",
      "correctIndex": 1,
      "explanationEn": "Analytical Derivation & Properties: A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يقطع خط RAG الوثائق إلى أجزاء ويولد تضميناتها بترميز كثيف، ويفهرسها بتقنيات الجوار التقريبي HNSW، ويجري بحث تشابه جيب التمام لاستخراج أفضل $k$ أدلة سياقية.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يقطع خط RAG الوثائق إلى أجزاء ويولد تضميناتها بترميز كثيف، ويفهرسها بتقنيات الجوار التقريبي HNSW، ويجري بحث تشابه جيب التمام لاستخراج أفضل $k$ أدلة سياقية.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch3_med_10",
      "titleEn": "[MEDIUM] Subword Tokenization (BPE) & Dense Word Embeddings - Analysis 10",
      "titleAr": "[مستوى متوسط] تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة - تحليل 10",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Subword Tokenization (BPE) & Dense Word Embeddings, what is the precise analytical formulation or operative rule? (Item 10)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 10)",
      "optionsEn": [
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.",
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence."
      ],
      "optionsAr": [
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "ترسم تضمينات الكلمات معرّفات الرموز في فضاءات اتجاهية دلالية مستمرة $\\mathbb{R}^d$ تعكس العلاقات الهندسية بين المتجهات القياسات الدلالية مثل: $\\vec{v}_{\\text{ملك}} - \\vec{v}_{\\text{رجل}} + \\vec{v}_{\\text{امرأة}} \\approx \\vec{v}_{\\text{ملكة}}$.",
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية."
      ],
      "correctAnswer": "Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.",
      "correctAnswerEn": "Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.",
      "correctAnswerAr": "ترسم تضمينات الكلمات معرّفات الرموز في فضاءات اتجاهية دلالية مستمرة $\\mathbb{R}^d$ تعكس العلاقات الهندسية بين المتجهات القياسات الدلالية مثل: $\\vec{v}_{\\text{ملك}} - \\vec{v}_{\\text{رجل}} + \\vec{v}_{\\text{امرأة}} \\approx \\vec{v}_{\\text{ملكة}}$.",
      "correctIndex": 2,
      "explanationEn": "Analytical Derivation & Properties: Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: ترسم تضمينات الكلمات معرّفات الرموز في فضاءات اتجاهية دلالية مستمرة $\\mathbb{R}^d$ تعكس العلاقات الهندسية بين المتجهات القياسات الدلالية مثل: $\\vec{v}_{\\text{ملك}} - \\vec{v}_{\\text{رجل}} + \\vec{v}_{\\text{امرأة}} \\approx \\vec{v}_{\\text{ملكة}}$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Subword Tokenization (BPE) & Dense Word Embeddings.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: ترسم تضمينات الكلمات معرّفات الرموز في فضاءات اتجاهية دلالية مستمرة $\\mathbb{R}^d$ تعكس العلاقات الهندسية بين المتجهات القياسات الدلالية مثل: $\\vec{v}_{\\text{ملك}} - \\vec{v}_{\\text{رجل}} + \\vec{v}_{\\text{امرأة}} \\approx \\vec{v}_{\\text{ملكة}}$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch3_med_11",
      "titleEn": "[MEDIUM] Scaled Dot-Product Multi-Head Self-Attention Mechanisms - Analysis 11",
      "titleAr": "[مستوى متوسط] آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس - تحليل 11",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Scaled Dot-Product Multi-Head Self-Attention Mechanisms, what is the precise analytical formulation or operative rule? (Item 11)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 11)",
      "optionsEn": [
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients."
      ],
      "optionsAr": [
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "تُحسب مصفوفة الانتباه بالعلاقة $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$، حيث يمنع معامل القياس $\\sqrt{d_k}$ تضخم نواتج الضرب وتلاشي التدرجات في دالة softmax."
      ],
      "correctAnswer": "The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.",
      "correctAnswerEn": "The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.",
      "correctAnswerAr": "تُحسب مصفوفة الانتباه بالعلاقة $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$، حيث يمنع معامل القياس $\\sqrt{d_k}$ تضخم نواتج الضرب وتلاشي التدرجات في دالة softmax.",
      "correctIndex": 3,
      "explanationEn": "Analytical Derivation & Properties: The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تُحسب مصفوفة الانتباه بالعلاقة $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$، حيث يمنع معامل القياس $\\sqrt{d_k}$ تضخم نواتج الضرب وتلاشي التدرجات في دالة softmax.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Scaled Dot-Product Multi-Head Self-Attention Mechanisms.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تُحسب مصفوفة الانتباه بالعلاقة $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$، حيث يمنع معامل القياس $\\sqrt{d_k}$ تضخم نواتج الضرب وتلاشي التدرجات في دالة softmax.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch3_med_12",
      "titleEn": "[MEDIUM] Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG) - Analysis 12",
      "titleAr": "[مستوى متوسط] النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG) - تحليل 12",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG), what is the precise analytical formulation or operative rule? (Item 12)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 12)",
      "optionsEn": [
        "A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data."
      ],
      "optionsAr": [
        "يقطع خط RAG الوثائق إلى أجزاء ويولد تضميناتها بترميز كثيف، ويفهرسها بتقنيات الجوار التقريبي HNSW، ويجري بحث تشابه جيب التمام لاستخراج أفضل $k$ أدلة سياقية.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش."
      ],
      "correctAnswer": "A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.",
      "correctAnswerEn": "A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.",
      "correctAnswerAr": "يقطع خط RAG الوثائق إلى أجزاء ويولد تضميناتها بترميز كثيف، ويفهرسها بتقنيات الجوار التقريبي HNSW، ويجري بحث تشابه جيب التمام لاستخراج أفضل $k$ أدلة سياقية.",
      "correctIndex": 0,
      "explanationEn": "Analytical Derivation & Properties: A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يقطع خط RAG الوثائق إلى أجزاء ويولد تضميناتها بترميز كثيف، ويفهرسها بتقنيات الجوار التقريبي HNSW، ويجري بحث تشابه جيب التمام لاستخراج أفضل $k$ أدلة سياقية.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يقطع خط RAG الوثائق إلى أجزاء ويولد تضميناتها بترميز كثيف، ويفهرسها بتقنيات الجوار التقريبي HNSW، ويجري بحث تشابه جيب التمام لاستخراج أفضل $k$ أدلة سياقية.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch3_med_13",
      "titleEn": "[MEDIUM] Subword Tokenization (BPE) & Dense Word Embeddings - Analysis 13",
      "titleAr": "[مستوى متوسط] تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة - تحليل 13",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Subword Tokenization (BPE) & Dense Word Embeddings, what is the precise analytical formulation or operative rule? (Item 13)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 13)",
      "optionsEn": [
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan."
      ],
      "optionsAr": [
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "ترسم تضمينات الكلمات معرّفات الرموز في فضاءات اتجاهية دلالية مستمرة $\\mathbb{R}^d$ تعكس العلاقات الهندسية بين المتجهات القياسات الدلالية مثل: $\\vec{v}_{\\text{ملك}} - \\vec{v}_{\\text{رجل}} + \\vec{v}_{\\text{امرأة}} \\approx \\vec{v}_{\\text{ملكة}}$.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG)."
      ],
      "correctAnswer": "Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.",
      "correctAnswerEn": "Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.",
      "correctAnswerAr": "ترسم تضمينات الكلمات معرّفات الرموز في فضاءات اتجاهية دلالية مستمرة $\\mathbb{R}^d$ تعكس العلاقات الهندسية بين المتجهات القياسات الدلالية مثل: $\\vec{v}_{\\text{ملك}} - \\vec{v}_{\\text{رجل}} + \\vec{v}_{\\text{امرأة}} \\approx \\vec{v}_{\\text{ملكة}}$.",
      "correctIndex": 1,
      "explanationEn": "Analytical Derivation & Properties: Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: ترسم تضمينات الكلمات معرّفات الرموز في فضاءات اتجاهية دلالية مستمرة $\\mathbb{R}^d$ تعكس العلاقات الهندسية بين المتجهات القياسات الدلالية مثل: $\\vec{v}_{\\text{ملك}} - \\vec{v}_{\\text{رجل}} + \\vec{v}_{\\text{امرأة}} \\approx \\vec{v}_{\\text{ملكة}}$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Subword Tokenization (BPE) & Dense Word Embeddings.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: ترسم تضمينات الكلمات معرّفات الرموز في فضاءات اتجاهية دلالية مستمرة $\\mathbb{R}^d$ تعكس العلاقات الهندسية بين المتجهات القياسات الدلالية مثل: $\\vec{v}_{\\text{ملك}} - \\vec{v}_{\\text{رجل}} + \\vec{v}_{\\text{امرأة}} \\approx \\vec{v}_{\\text{ملكة}}$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch3_med_14",
      "titleEn": "[MEDIUM] Scaled Dot-Product Multi-Head Self-Attention Mechanisms - Analysis 14",
      "titleAr": "[مستوى متوسط] آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس - تحليل 14",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Scaled Dot-Product Multi-Head Self-Attention Mechanisms, what is the precise analytical formulation or operative rule? (Item 14)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 14)",
      "optionsEn": [
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تُحسب مصفوفة الانتباه بالعلاقة $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$، حيث يمنع معامل القياس $\\sqrt{d_k}$ تضخم نواتج الضرب وتلاشي التدرجات في دالة softmax.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.",
      "correctAnswerEn": "The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.",
      "correctAnswerAr": "تُحسب مصفوفة الانتباه بالعلاقة $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$، حيث يمنع معامل القياس $\\sqrt{d_k}$ تضخم نواتج الضرب وتلاشي التدرجات في دالة softmax.",
      "correctIndex": 2,
      "explanationEn": "Analytical Derivation & Properties: The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تُحسب مصفوفة الانتباه بالعلاقة $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$، حيث يمنع معامل القياس $\\sqrt{d_k}$ تضخم نواتج الضرب وتلاشي التدرجات في دالة softmax.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Scaled Dot-Product Multi-Head Self-Attention Mechanisms.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تُحسب مصفوفة الانتباه بالعلاقة $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$، حيث يمنع معامل القياس $\\sqrt{d_k}$ تضخم نواتج الضرب وتلاشي التدرجات في دالة softmax.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch3_med_15",
      "titleEn": "[MEDIUM] Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG) - Analysis 15",
      "titleAr": "[مستوى متوسط] النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG) - تحليل 15",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG), what is the precise analytical formulation or operative rule? (Item 15)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 15)",
      "optionsEn": [
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence."
      ],
      "optionsAr": [
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يقطع خط RAG الوثائق إلى أجزاء ويولد تضميناتها بترميز كثيف، ويفهرسها بتقنيات الجوار التقريبي HNSW، ويجري بحث تشابه جيب التمام لاستخراج أفضل $k$ أدلة سياقية."
      ],
      "correctAnswer": "A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.",
      "correctAnswerEn": "A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.",
      "correctAnswerAr": "يقطع خط RAG الوثائق إلى أجزاء ويولد تضميناتها بترميز كثيف، ويفهرسها بتقنيات الجوار التقريبي HNSW، ويجري بحث تشابه جيب التمام لاستخراج أفضل $k$ أدلة سياقية.",
      "correctIndex": 3,
      "explanationEn": "Analytical Derivation & Properties: A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يقطع خط RAG الوثائق إلى أجزاء ويولد تضميناتها بترميز كثيف، ويفهرسها بتقنيات الجوار التقريبي HNSW، ويجري بحث تشابه جيب التمام لاستخراج أفضل $k$ أدلة سياقية.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يقطع خط RAG الوثائق إلى أجزاء ويولد تضميناتها بترميز كثيف، ويفهرسها بتقنيات الجوار التقريبي HNSW، ويجري بحث تشابه جيب التمام لاستخراج أفضل $k$ أدلة سياقية.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch3_med_16",
      "titleEn": "[MEDIUM] Subword Tokenization (BPE) & Dense Word Embeddings - Analysis 16",
      "titleAr": "[مستوى متوسط] تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة - تحليل 16",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Subword Tokenization (BPE) & Dense Word Embeddings, what is the precise analytical formulation or operative rule? (Item 16)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 16)",
      "optionsEn": [
        "Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves."
      ],
      "optionsAr": [
        "ترسم تضمينات الكلمات معرّفات الرموز في فضاءات اتجاهية دلالية مستمرة $\\mathbb{R}^d$ تعكس العلاقات الهندسية بين المتجهات القياسات الدلالية مثل: $\\vec{v}_{\\text{ملك}} - \\vec{v}_{\\text{رجل}} + \\vec{v}_{\\text{امرأة}} \\approx \\vec{v}_{\\text{ملكة}}$.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية."
      ],
      "correctAnswer": "Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.",
      "correctAnswerEn": "Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.",
      "correctAnswerAr": "ترسم تضمينات الكلمات معرّفات الرموز في فضاءات اتجاهية دلالية مستمرة $\\mathbb{R}^d$ تعكس العلاقات الهندسية بين المتجهات القياسات الدلالية مثل: $\\vec{v}_{\\text{ملك}} - \\vec{v}_{\\text{رجل}} + \\vec{v}_{\\text{امرأة}} \\approx \\vec{v}_{\\text{ملكة}}$.",
      "correctIndex": 0,
      "explanationEn": "Analytical Derivation & Properties: Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: ترسم تضمينات الكلمات معرّفات الرموز في فضاءات اتجاهية دلالية مستمرة $\\mathbb{R}^d$ تعكس العلاقات الهندسية بين المتجهات القياسات الدلالية مثل: $\\vec{v}_{\\text{ملك}} - \\vec{v}_{\\text{رجل}} + \\vec{v}_{\\text{امرأة}} \\approx \\vec{v}_{\\text{ملكة}}$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Subword Tokenization (BPE) & Dense Word Embeddings.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: ترسم تضمينات الكلمات معرّفات الرموز في فضاءات اتجاهية دلالية مستمرة $\\mathbb{R}^d$ تعكس العلاقات الهندسية بين المتجهات القياسات الدلالية مثل: $\\vec{v}_{\\text{ملك}} - \\vec{v}_{\\text{رجل}} + \\vec{v}_{\\text{امرأة}} \\approx \\vec{v}_{\\text{ملكة}}$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch3_med_17",
      "titleEn": "[MEDIUM] Scaled Dot-Product Multi-Head Self-Attention Mechanisms - Analysis 17",
      "titleAr": "[مستوى متوسط] آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس - تحليل 17",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Scaled Dot-Product Multi-Head Self-Attention Mechanisms, what is the precise analytical formulation or operative rule? (Item 17)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 17)",
      "optionsEn": [
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تُحسب مصفوفة الانتباه بالعلاقة $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$، حيث يمنع معامل القياس $\\sqrt{d_k}$ تضخم نواتج الضرب وتلاشي التدرجات في دالة softmax.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.",
      "correctAnswerEn": "The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.",
      "correctAnswerAr": "تُحسب مصفوفة الانتباه بالعلاقة $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$، حيث يمنع معامل القياس $\\sqrt{d_k}$ تضخم نواتج الضرب وتلاشي التدرجات في دالة softmax.",
      "correctIndex": 1,
      "explanationEn": "Analytical Derivation & Properties: The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تُحسب مصفوفة الانتباه بالعلاقة $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$، حيث يمنع معامل القياس $\\sqrt{d_k}$ تضخم نواتج الضرب وتلاشي التدرجات في دالة softmax.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Scaled Dot-Product Multi-Head Self-Attention Mechanisms.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تُحسب مصفوفة الانتباه بالعلاقة $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$، حيث يمنع معامل القياس $\\sqrt{d_k}$ تضخم نواتج الضرب وتلاشي التدرجات في دالة softmax.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch3_med_18",
      "titleEn": "[MEDIUM] Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG) - Analysis 18",
      "titleAr": "[مستوى متوسط] النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG) - تحليل 18",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG), what is the precise analytical formulation or operative rule? (Item 18)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 18)",
      "optionsEn": [
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation."
      ],
      "optionsAr": [
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "يقطع خط RAG الوثائق إلى أجزاء ويولد تضميناتها بترميز كثيف، ويفهرسها بتقنيات الجوار التقريبي HNSW، ويجري بحث تشابه جيب التمام لاستخراج أفضل $k$ أدلة سياقية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي."
      ],
      "correctAnswer": "A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.",
      "correctAnswerEn": "A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.",
      "correctAnswerAr": "يقطع خط RAG الوثائق إلى أجزاء ويولد تضميناتها بترميز كثيف، ويفهرسها بتقنيات الجوار التقريبي HNSW، ويجري بحث تشابه جيب التمام لاستخراج أفضل $k$ أدلة سياقية.",
      "correctIndex": 2,
      "explanationEn": "Analytical Derivation & Properties: A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يقطع خط RAG الوثائق إلى أجزاء ويولد تضميناتها بترميز كثيف، ويفهرسها بتقنيات الجوار التقريبي HNSW، ويجري بحث تشابه جيب التمام لاستخراج أفضل $k$ أدلة سياقية.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يقطع خط RAG الوثائق إلى أجزاء ويولد تضميناتها بترميز كثيف، ويفهرسها بتقنيات الجوار التقريبي HNSW، ويجري بحث تشابه جيب التمام لاستخراج أفضل $k$ أدلة سياقية.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch3_med_19",
      "titleEn": "[MEDIUM] Subword Tokenization (BPE) & Dense Word Embeddings - Analysis 19",
      "titleAr": "[مستوى متوسط] تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة - تحليل 19",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Subword Tokenization (BPE) & Dense Word Embeddings, what is the precise analytical formulation or operative rule? (Item 19)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 19)",
      "optionsEn": [
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$."
      ],
      "optionsAr": [
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "ترسم تضمينات الكلمات معرّفات الرموز في فضاءات اتجاهية دلالية مستمرة $\\mathbb{R}^d$ تعكس العلاقات الهندسية بين المتجهات القياسات الدلالية مثل: $\\vec{v}_{\\text{ملك}} - \\vec{v}_{\\text{رجل}} + \\vec{v}_{\\text{امرأة}} \\approx \\vec{v}_{\\text{ملكة}}$."
      ],
      "correctAnswer": "Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.",
      "correctAnswerEn": "Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.",
      "correctAnswerAr": "ترسم تضمينات الكلمات معرّفات الرموز في فضاءات اتجاهية دلالية مستمرة $\\mathbb{R}^d$ تعكس العلاقات الهندسية بين المتجهات القياسات الدلالية مثل: $\\vec{v}_{\\text{ملك}} - \\vec{v}_{\\text{رجل}} + \\vec{v}_{\\text{امرأة}} \\approx \\vec{v}_{\\text{ملكة}}$.",
      "correctIndex": 3,
      "explanationEn": "Analytical Derivation & Properties: Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: ترسم تضمينات الكلمات معرّفات الرموز في فضاءات اتجاهية دلالية مستمرة $\\mathbb{R}^d$ تعكس العلاقات الهندسية بين المتجهات القياسات الدلالية مثل: $\\vec{v}_{\\text{ملك}} - \\vec{v}_{\\text{رجل}} + \\vec{v}_{\\text{امرأة}} \\approx \\vec{v}_{\\text{ملكة}}$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Subword Tokenization (BPE) & Dense Word Embeddings.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: ترسم تضمينات الكلمات معرّفات الرموز في فضاءات اتجاهية دلالية مستمرة $\\mathbb{R}^d$ تعكس العلاقات الهندسية بين المتجهات القياسات الدلالية مثل: $\\vec{v}_{\\text{ملك}} - \\vec{v}_{\\text{رجل}} + \\vec{v}_{\\text{امرأة}} \\approx \\vec{v}_{\\text{ملكة}}$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch3_med_20",
      "titleEn": "[MEDIUM] Scaled Dot-Product Multi-Head Self-Attention Mechanisms - Analysis 20",
      "titleAr": "[مستوى متوسط] آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس - تحليل 20",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Scaled Dot-Product Multi-Head Self-Attention Mechanisms, what is the precise analytical formulation or operative rule? (Item 20)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 20)",
      "optionsEn": [
        "The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.",
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "تُحسب مصفوفة الانتباه بالعلاقة $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$، حيث يمنع معامل القياس $\\sqrt{d_k}$ تضخم نواتج الضرب وتلاشي التدرجات في دالة softmax.",
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.",
      "correctAnswerEn": "The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.",
      "correctAnswerAr": "تُحسب مصفوفة الانتباه بالعلاقة $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$، حيث يمنع معامل القياس $\\sqrt{d_k}$ تضخم نواتج الضرب وتلاشي التدرجات في دالة softmax.",
      "correctIndex": 0,
      "explanationEn": "Analytical Derivation & Properties: The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تُحسب مصفوفة الانتباه بالعلاقة $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$، حيث يمنع معامل القياس $\\sqrt{d_k}$ تضخم نواتج الضرب وتلاشي التدرجات في دالة softmax.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Scaled Dot-Product Multi-Head Self-Attention Mechanisms.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تُحسب مصفوفة الانتباه بالعلاقة $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$، حيث يمنع معامل القياس $\\sqrt{d_k}$ تضخم نواتج الضرب وتلاشي التدرجات في دالة softmax.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch3_med_21",
      "titleEn": "[MEDIUM] Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG) - Analysis 21",
      "titleAr": "[مستوى متوسط] النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG) - تحليل 21",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG), what is the precise analytical formulation or operative rule? (Item 21)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 21)",
      "optionsEn": [
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.",
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step."
      ],
      "optionsAr": [
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "يقطع خط RAG الوثائق إلى أجزاء ويولد تضميناتها بترميز كثيف، ويفهرسها بتقنيات الجوار التقريبي HNSW، ويجري بحث تشابه جيب التمام لاستخراج أفضل $k$ أدلة سياقية.",
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين."
      ],
      "correctAnswer": "A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.",
      "correctAnswerEn": "A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.",
      "correctAnswerAr": "يقطع خط RAG الوثائق إلى أجزاء ويولد تضميناتها بترميز كثيف، ويفهرسها بتقنيات الجوار التقريبي HNSW، ويجري بحث تشابه جيب التمام لاستخراج أفضل $k$ أدلة سياقية.",
      "correctIndex": 1,
      "explanationEn": "Analytical Derivation & Properties: A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يقطع خط RAG الوثائق إلى أجزاء ويولد تضميناتها بترميز كثيف، ويفهرسها بتقنيات الجوار التقريبي HNSW، ويجري بحث تشابه جيب التمام لاستخراج أفضل $k$ أدلة سياقية.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يقطع خط RAG الوثائق إلى أجزاء ويولد تضميناتها بترميز كثيف، ويفهرسها بتقنيات الجوار التقريبي HNSW، ويجري بحث تشابه جيب التمام لاستخراج أفضل $k$ أدلة سياقية.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch3_med_22",
      "titleEn": "[MEDIUM] Subword Tokenization (BPE) & Dense Word Embeddings - Analysis 22",
      "titleAr": "[مستوى متوسط] تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة - تحليل 22",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Subword Tokenization (BPE) & Dense Word Embeddings, what is the precise analytical formulation or operative rule? (Item 22)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 22)",
      "optionsEn": [
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.",
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance."
      ],
      "optionsAr": [
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "ترسم تضمينات الكلمات معرّفات الرموز في فضاءات اتجاهية دلالية مستمرة $\\mathbb{R}^d$ تعكس العلاقات الهندسية بين المتجهات القياسات الدلالية مثل: $\\vec{v}_{\\text{ملك}} - \\vec{v}_{\\text{رجل}} + \\vec{v}_{\\text{امرأة}} \\approx \\vec{v}_{\\text{ملكة}}$.",
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر."
      ],
      "correctAnswer": "Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.",
      "correctAnswerEn": "Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.",
      "correctAnswerAr": "ترسم تضمينات الكلمات معرّفات الرموز في فضاءات اتجاهية دلالية مستمرة $\\mathbb{R}^d$ تعكس العلاقات الهندسية بين المتجهات القياسات الدلالية مثل: $\\vec{v}_{\\text{ملك}} - \\vec{v}_{\\text{رجل}} + \\vec{v}_{\\text{امرأة}} \\approx \\vec{v}_{\\text{ملكة}}$.",
      "correctIndex": 2,
      "explanationEn": "Analytical Derivation & Properties: Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: ترسم تضمينات الكلمات معرّفات الرموز في فضاءات اتجاهية دلالية مستمرة $\\mathbb{R}^d$ تعكس العلاقات الهندسية بين المتجهات القياسات الدلالية مثل: $\\vec{v}_{\\text{ملك}} - \\vec{v}_{\\text{رجل}} + \\vec{v}_{\\text{امرأة}} \\approx \\vec{v}_{\\text{ملكة}}$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Subword Tokenization (BPE) & Dense Word Embeddings.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: ترسم تضمينات الكلمات معرّفات الرموز في فضاءات اتجاهية دلالية مستمرة $\\mathbb{R}^d$ تعكس العلاقات الهندسية بين المتجهات القياسات الدلالية مثل: $\\vec{v}_{\\text{ملك}} - \\vec{v}_{\\text{رجل}} + \\vec{v}_{\\text{امرأة}} \\approx \\vec{v}_{\\text{ملكة}}$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch3_med_23",
      "titleEn": "[MEDIUM] Scaled Dot-Product Multi-Head Self-Attention Mechanisms - Analysis 23",
      "titleAr": "[مستوى متوسط] آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس - تحليل 23",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Scaled Dot-Product Multi-Head Self-Attention Mechanisms, what is the precise analytical formulation or operative rule? (Item 23)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 23)",
      "optionsEn": [
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients."
      ],
      "optionsAr": [
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تُحسب مصفوفة الانتباه بالعلاقة $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$، حيث يمنع معامل القياس $\\sqrt{d_k}$ تضخم نواتج الضرب وتلاشي التدرجات في دالة softmax."
      ],
      "correctAnswer": "The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.",
      "correctAnswerEn": "The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.",
      "correctAnswerAr": "تُحسب مصفوفة الانتباه بالعلاقة $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$، حيث يمنع معامل القياس $\\sqrt{d_k}$ تضخم نواتج الضرب وتلاشي التدرجات في دالة softmax.",
      "correctIndex": 3,
      "explanationEn": "Analytical Derivation & Properties: The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تُحسب مصفوفة الانتباه بالعلاقة $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$، حيث يمنع معامل القياس $\\sqrt{d_k}$ تضخم نواتج الضرب وتلاشي التدرجات في دالة softmax.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Scaled Dot-Product Multi-Head Self-Attention Mechanisms.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تُحسب مصفوفة الانتباه بالعلاقة $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$، حيث يمنع معامل القياس $\\sqrt{d_k}$ تضخم نواتج الضرب وتلاشي التدرجات في دالة softmax.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch3_med_24",
      "titleEn": "[MEDIUM] Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG) - Analysis 24",
      "titleAr": "[مستوى متوسط] النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG) - تحليل 24",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG), what is the precise analytical formulation or operative rule? (Item 24)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 24)",
      "optionsEn": [
        "A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs."
      ],
      "optionsAr": [
        "يقطع خط RAG الوثائق إلى أجزاء ويولد تضميناتها بترميز كثيف، ويفهرسها بتقنيات الجوار التقريبي HNSW، ويجري بحث تشابه جيب التمام لاستخراج أفضل $k$ أدلة سياقية.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة."
      ],
      "correctAnswer": "A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.",
      "correctAnswerEn": "A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.",
      "correctAnswerAr": "يقطع خط RAG الوثائق إلى أجزاء ويولد تضميناتها بترميز كثيف، ويفهرسها بتقنيات الجوار التقريبي HNSW، ويجري بحث تشابه جيب التمام لاستخراج أفضل $k$ أدلة سياقية.",
      "correctIndex": 0,
      "explanationEn": "Analytical Derivation & Properties: A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يقطع خط RAG الوثائق إلى أجزاء ويولد تضميناتها بترميز كثيف، ويفهرسها بتقنيات الجوار التقريبي HNSW، ويجري بحث تشابه جيب التمام لاستخراج أفضل $k$ أدلة سياقية.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يقطع خط RAG الوثائق إلى أجزاء ويولد تضميناتها بترميز كثيف، ويفهرسها بتقنيات الجوار التقريبي HNSW، ويجري بحث تشابه جيب التمام لاستخراج أفضل $k$ أدلة سياقية.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch3_med_25",
      "titleEn": "[MEDIUM] Subword Tokenization (BPE) & Dense Word Embeddings - Analysis 25",
      "titleAr": "[مستوى متوسط] تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة - تحليل 25",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Subword Tokenization (BPE) & Dense Word Embeddings, what is the precise analytical formulation or operative rule? (Item 25)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 25)",
      "optionsEn": [
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence."
      ],
      "optionsAr": [
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "ترسم تضمينات الكلمات معرّفات الرموز في فضاءات اتجاهية دلالية مستمرة $\\mathbb{R}^d$ تعكس العلاقات الهندسية بين المتجهات القياسات الدلالية مثل: $\\vec{v}_{\\text{ملك}} - \\vec{v}_{\\text{رجل}} + \\vec{v}_{\\text{امرأة}} \\approx \\vec{v}_{\\text{ملكة}}$.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية."
      ],
      "correctAnswer": "Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.",
      "correctAnswerEn": "Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.",
      "correctAnswerAr": "ترسم تضمينات الكلمات معرّفات الرموز في فضاءات اتجاهية دلالية مستمرة $\\mathbb{R}^d$ تعكس العلاقات الهندسية بين المتجهات القياسات الدلالية مثل: $\\vec{v}_{\\text{ملك}} - \\vec{v}_{\\text{رجل}} + \\vec{v}_{\\text{امرأة}} \\approx \\vec{v}_{\\text{ملكة}}$.",
      "correctIndex": 1,
      "explanationEn": "Analytical Derivation & Properties: Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: ترسم تضمينات الكلمات معرّفات الرموز في فضاءات اتجاهية دلالية مستمرة $\\mathbb{R}^d$ تعكس العلاقات الهندسية بين المتجهات القياسات الدلالية مثل: $\\vec{v}_{\\text{ملك}} - \\vec{v}_{\\text{رجل}} + \\vec{v}_{\\text{امرأة}} \\approx \\vec{v}_{\\text{ملكة}}$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Subword Tokenization (BPE) & Dense Word Embeddings.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: ترسم تضمينات الكلمات معرّفات الرموز في فضاءات اتجاهية دلالية مستمرة $\\mathbb{R}^d$ تعكس العلاقات الهندسية بين المتجهات القياسات الدلالية مثل: $\\vec{v}_{\\text{ملك}} - \\vec{v}_{\\text{رجل}} + \\vec{v}_{\\text{امرأة}} \\approx \\vec{v}_{\\text{ملكة}}$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch3_med_26",
      "titleEn": "[MEDIUM] Scaled Dot-Product Multi-Head Self-Attention Mechanisms - Analysis 26",
      "titleAr": "[مستوى متوسط] آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس - تحليل 26",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Scaled Dot-Product Multi-Head Self-Attention Mechanisms, what is the precise analytical formulation or operative rule? (Item 26)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 26)",
      "optionsEn": [
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تُحسب مصفوفة الانتباه بالعلاقة $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$، حيث يمنع معامل القياس $\\sqrt{d_k}$ تضخم نواتج الضرب وتلاشي التدرجات في دالة softmax.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.",
      "correctAnswerEn": "The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.",
      "correctAnswerAr": "تُحسب مصفوفة الانتباه بالعلاقة $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$، حيث يمنع معامل القياس $\\sqrt{d_k}$ تضخم نواتج الضرب وتلاشي التدرجات في دالة softmax.",
      "correctIndex": 2,
      "explanationEn": "Analytical Derivation & Properties: The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تُحسب مصفوفة الانتباه بالعلاقة $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$، حيث يمنع معامل القياس $\\sqrt{d_k}$ تضخم نواتج الضرب وتلاشي التدرجات في دالة softmax.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Scaled Dot-Product Multi-Head Self-Attention Mechanisms.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تُحسب مصفوفة الانتباه بالعلاقة $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$، حيث يمنع معامل القياس $\\sqrt{d_k}$ تضخم نواتج الضرب وتلاشي التدرجات في دالة softmax.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch3_med_27",
      "titleEn": "[MEDIUM] Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG) - Analysis 27",
      "titleAr": "[مستوى متوسط] النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG) - تحليل 27",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG), what is the precise analytical formulation or operative rule? (Item 27)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 27)",
      "optionsEn": [
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence."
      ],
      "optionsAr": [
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "يقطع خط RAG الوثائق إلى أجزاء ويولد تضميناتها بترميز كثيف، ويفهرسها بتقنيات الجوار التقريبي HNSW، ويجري بحث تشابه جيب التمام لاستخراج أفضل $k$ أدلة سياقية."
      ],
      "correctAnswer": "A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.",
      "correctAnswerEn": "A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.",
      "correctAnswerAr": "يقطع خط RAG الوثائق إلى أجزاء ويولد تضميناتها بترميز كثيف، ويفهرسها بتقنيات الجوار التقريبي HNSW، ويجري بحث تشابه جيب التمام لاستخراج أفضل $k$ أدلة سياقية.",
      "correctIndex": 3,
      "explanationEn": "Analytical Derivation & Properties: A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يقطع خط RAG الوثائق إلى أجزاء ويولد تضميناتها بترميز كثيف، ويفهرسها بتقنيات الجوار التقريبي HNSW، ويجري بحث تشابه جيب التمام لاستخراج أفضل $k$ أدلة سياقية.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يقطع خط RAG الوثائق إلى أجزاء ويولد تضميناتها بترميز كثيف، ويفهرسها بتقنيات الجوار التقريبي HNSW، ويجري بحث تشابه جيب التمام لاستخراج أفضل $k$ أدلة سياقية.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch3_med_28",
      "titleEn": "[MEDIUM] Subword Tokenization (BPE) & Dense Word Embeddings - Analysis 28",
      "titleAr": "[مستوى متوسط] تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة - تحليل 28",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Subword Tokenization (BPE) & Dense Word Embeddings, what is the precise analytical formulation or operative rule? (Item 28)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 28)",
      "optionsEn": [
        "Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan."
      ],
      "optionsAr": [
        "ترسم تضمينات الكلمات معرّفات الرموز في فضاءات اتجاهية دلالية مستمرة $\\mathbb{R}^d$ تعكس العلاقات الهندسية بين المتجهات القياسات الدلالية مثل: $\\vec{v}_{\\text{ملك}} - \\vec{v}_{\\text{رجل}} + \\vec{v}_{\\text{امرأة}} \\approx \\vec{v}_{\\text{ملكة}}$.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG)."
      ],
      "correctAnswer": "Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.",
      "correctAnswerEn": "Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.",
      "correctAnswerAr": "ترسم تضمينات الكلمات معرّفات الرموز في فضاءات اتجاهية دلالية مستمرة $\\mathbb{R}^d$ تعكس العلاقات الهندسية بين المتجهات القياسات الدلالية مثل: $\\vec{v}_{\\text{ملك}} - \\vec{v}_{\\text{رجل}} + \\vec{v}_{\\text{امرأة}} \\approx \\vec{v}_{\\text{ملكة}}$.",
      "correctIndex": 0,
      "explanationEn": "Analytical Derivation & Properties: Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: ترسم تضمينات الكلمات معرّفات الرموز في فضاءات اتجاهية دلالية مستمرة $\\mathbb{R}^d$ تعكس العلاقات الهندسية بين المتجهات القياسات الدلالية مثل: $\\vec{v}_{\\text{ملك}} - \\vec{v}_{\\text{رجل}} + \\vec{v}_{\\text{امرأة}} \\approx \\vec{v}_{\\text{ملكة}}$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Subword Tokenization (BPE) & Dense Word Embeddings.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: ترسم تضمينات الكلمات معرّفات الرموز في فضاءات اتجاهية دلالية مستمرة $\\mathbb{R}^d$ تعكس العلاقات الهندسية بين المتجهات القياسات الدلالية مثل: $\\vec{v}_{\\text{ملك}} - \\vec{v}_{\\text{رجل}} + \\vec{v}_{\\text{امرأة}} \\approx \\vec{v}_{\\text{ملكة}}$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch3_med_29",
      "titleEn": "[MEDIUM] Scaled Dot-Product Multi-Head Self-Attention Mechanisms - Analysis 29",
      "titleAr": "[مستوى متوسط] آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس - تحليل 29",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Scaled Dot-Product Multi-Head Self-Attention Mechanisms, what is the precise analytical formulation or operative rule? (Item 29)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 29)",
      "optionsEn": [
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تُحسب مصفوفة الانتباه بالعلاقة $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$، حيث يمنع معامل القياس $\\sqrt{d_k}$ تضخم نواتج الضرب وتلاشي التدرجات في دالة softmax.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.",
      "correctAnswerEn": "The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.",
      "correctAnswerAr": "تُحسب مصفوفة الانتباه بالعلاقة $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$، حيث يمنع معامل القياس $\\sqrt{d_k}$ تضخم نواتج الضرب وتلاشي التدرجات في دالة softmax.",
      "correctIndex": 1,
      "explanationEn": "Analytical Derivation & Properties: The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تُحسب مصفوفة الانتباه بالعلاقة $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$، حيث يمنع معامل القياس $\\sqrt{d_k}$ تضخم نواتج الضرب وتلاشي التدرجات في دالة softmax.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Scaled Dot-Product Multi-Head Self-Attention Mechanisms.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تُحسب مصفوفة الانتباه بالعلاقة $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$، حيث يمنع معامل القياس $\\sqrt{d_k}$ تضخم نواتج الضرب وتلاشي التدرجات في دالة softmax.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch3_med_30",
      "titleEn": "[MEDIUM] Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG) - Analysis 30",
      "titleAr": "[مستوى متوسط] النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG) - تحليل 30",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG), what is the precise analytical formulation or operative rule? (Item 30)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 30)",
      "optionsEn": [
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate."
      ],
      "optionsAr": [
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يقطع خط RAG الوثائق إلى أجزاء ويولد تضميناتها بترميز كثيف، ويفهرسها بتقنيات الجوار التقريبي HNSW، ويجري بحث تشابه جيب التمام لاستخراج أفضل $k$ أدلة سياقية.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم."
      ],
      "correctAnswer": "A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.",
      "correctAnswerEn": "A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.",
      "correctAnswerAr": "يقطع خط RAG الوثائق إلى أجزاء ويولد تضميناتها بترميز كثيف، ويفهرسها بتقنيات الجوار التقريبي HNSW، ويجري بحث تشابه جيب التمام لاستخراج أفضل $k$ أدلة سياقية.",
      "correctIndex": 2,
      "explanationEn": "Analytical Derivation & Properties: A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يقطع خط RAG الوثائق إلى أجزاء ويولد تضميناتها بترميز كثيف، ويفهرسها بتقنيات الجوار التقريبي HNSW، ويجري بحث تشابه جيب التمام لاستخراج أفضل $k$ أدلة سياقية.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يقطع خط RAG الوثائق إلى أجزاء ويولد تضميناتها بترميز كثيف، ويفهرسها بتقنيات الجوار التقريبي HNSW، ويجري بحث تشابه جيب التمام لاستخراج أفضل $k$ أدلة سياقية.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch3_med_31",
      "titleEn": "[MEDIUM] Subword Tokenization (BPE) & Dense Word Embeddings - Analysis 31",
      "titleAr": "[مستوى متوسط] تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة - تحليل 31",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Subword Tokenization (BPE) & Dense Word Embeddings, what is the precise analytical formulation or operative rule? (Item 31)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 31)",
      "optionsEn": [
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$."
      ],
      "optionsAr": [
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "ترسم تضمينات الكلمات معرّفات الرموز في فضاءات اتجاهية دلالية مستمرة $\\mathbb{R}^d$ تعكس العلاقات الهندسية بين المتجهات القياسات الدلالية مثل: $\\vec{v}_{\\text{ملك}} - \\vec{v}_{\\text{رجل}} + \\vec{v}_{\\text{امرأة}} \\approx \\vec{v}_{\\text{ملكة}}$."
      ],
      "correctAnswer": "Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.",
      "correctAnswerEn": "Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.",
      "correctAnswerAr": "ترسم تضمينات الكلمات معرّفات الرموز في فضاءات اتجاهية دلالية مستمرة $\\mathbb{R}^d$ تعكس العلاقات الهندسية بين المتجهات القياسات الدلالية مثل: $\\vec{v}_{\\text{ملك}} - \\vec{v}_{\\text{رجل}} + \\vec{v}_{\\text{امرأة}} \\approx \\vec{v}_{\\text{ملكة}}$.",
      "correctIndex": 3,
      "explanationEn": "Analytical Derivation & Properties: Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: ترسم تضمينات الكلمات معرّفات الرموز في فضاءات اتجاهية دلالية مستمرة $\\mathbb{R}^d$ تعكس العلاقات الهندسية بين المتجهات القياسات الدلالية مثل: $\\vec{v}_{\\text{ملك}} - \\vec{v}_{\\text{رجل}} + \\vec{v}_{\\text{امرأة}} \\approx \\vec{v}_{\\text{ملكة}}$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Subword Tokenization (BPE) & Dense Word Embeddings.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: ترسم تضمينات الكلمات معرّفات الرموز في فضاءات اتجاهية دلالية مستمرة $\\mathbb{R}^d$ تعكس العلاقات الهندسية بين المتجهات القياسات الدلالية مثل: $\\vec{v}_{\\text{ملك}} - \\vec{v}_{\\text{رجل}} + \\vec{v}_{\\text{امرأة}} \\approx \\vec{v}_{\\text{ملكة}}$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch3_med_32",
      "titleEn": "[MEDIUM] Scaled Dot-Product Multi-Head Self-Attention Mechanisms - Analysis 32",
      "titleAr": "[مستوى متوسط] آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس - تحليل 32",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Scaled Dot-Product Multi-Head Self-Attention Mechanisms, what is the precise analytical formulation or operative rule? (Item 32)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 32)",
      "optionsEn": [
        "The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.",
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "تُحسب مصفوفة الانتباه بالعلاقة $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$، حيث يمنع معامل القياس $\\sqrt{d_k}$ تضخم نواتج الضرب وتلاشي التدرجات في دالة softmax.",
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.",
      "correctAnswerEn": "The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.",
      "correctAnswerAr": "تُحسب مصفوفة الانتباه بالعلاقة $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$، حيث يمنع معامل القياس $\\sqrt{d_k}$ تضخم نواتج الضرب وتلاشي التدرجات في دالة softmax.",
      "correctIndex": 0,
      "explanationEn": "Analytical Derivation & Properties: The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تُحسب مصفوفة الانتباه بالعلاقة $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$، حيث يمنع معامل القياس $\\sqrt{d_k}$ تضخم نواتج الضرب وتلاشي التدرجات في دالة softmax.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Scaled Dot-Product Multi-Head Self-Attention Mechanisms.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تُحسب مصفوفة الانتباه بالعلاقة $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$، حيث يمنع معامل القياس $\\sqrt{d_k}$ تضخم نواتج الضرب وتلاشي التدرجات في دالة softmax.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch3_med_33",
      "titleEn": "[MEDIUM] Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG) - Analysis 33",
      "titleAr": "[مستوى متوسط] النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG) - تحليل 33",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG), what is the precise analytical formulation or operative rule? (Item 33)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 33)",
      "optionsEn": [
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.",
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation."
      ],
      "optionsAr": [
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "يقطع خط RAG الوثائق إلى أجزاء ويولد تضميناتها بترميز كثيف، ويفهرسها بتقنيات الجوار التقريبي HNSW، ويجري بحث تشابه جيب التمام لاستخراج أفضل $k$ أدلة سياقية.",
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي."
      ],
      "correctAnswer": "A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.",
      "correctAnswerEn": "A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.",
      "correctAnswerAr": "يقطع خط RAG الوثائق إلى أجزاء ويولد تضميناتها بترميز كثيف، ويفهرسها بتقنيات الجوار التقريبي HNSW، ويجري بحث تشابه جيب التمام لاستخراج أفضل $k$ أدلة سياقية.",
      "correctIndex": 1,
      "explanationEn": "Analytical Derivation & Properties: A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يقطع خط RAG الوثائق إلى أجزاء ويولد تضميناتها بترميز كثيف، ويفهرسها بتقنيات الجوار التقريبي HNSW، ويجري بحث تشابه جيب التمام لاستخراج أفضل $k$ أدلة سياقية.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يقطع خط RAG الوثائق إلى أجزاء ويولد تضميناتها بترميز كثيف، ويفهرسها بتقنيات الجوار التقريبي HNSW، ويجري بحث تشابه جيب التمام لاستخراج أفضل $k$ أدلة سياقية.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch3_med_34",
      "titleEn": "[MEDIUM] Subword Tokenization (BPE) & Dense Word Embeddings - Analysis 34",
      "titleAr": "[مستوى متوسط] تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة - تحليل 34",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Subword Tokenization (BPE) & Dense Word Embeddings, what is the precise analytical formulation or operative rule? (Item 34)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 34)",
      "optionsEn": [
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.",
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent."
      ],
      "optionsAr": [
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "ترسم تضمينات الكلمات معرّفات الرموز في فضاءات اتجاهية دلالية مستمرة $\\mathbb{R}^d$ تعكس العلاقات الهندسية بين المتجهات القياسات الدلالية مثل: $\\vec{v}_{\\text{ملك}} - \\vec{v}_{\\text{رجل}} + \\vec{v}_{\\text{امرأة}} \\approx \\vec{v}_{\\text{ملكة}}$.",
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة."
      ],
      "correctAnswer": "Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.",
      "correctAnswerEn": "Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.",
      "correctAnswerAr": "ترسم تضمينات الكلمات معرّفات الرموز في فضاءات اتجاهية دلالية مستمرة $\\mathbb{R}^d$ تعكس العلاقات الهندسية بين المتجهات القياسات الدلالية مثل: $\\vec{v}_{\\text{ملك}} - \\vec{v}_{\\text{رجل}} + \\vec{v}_{\\text{امرأة}} \\approx \\vec{v}_{\\text{ملكة}}$.",
      "correctIndex": 2,
      "explanationEn": "Analytical Derivation & Properties: Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: ترسم تضمينات الكلمات معرّفات الرموز في فضاءات اتجاهية دلالية مستمرة $\\mathbb{R}^d$ تعكس العلاقات الهندسية بين المتجهات القياسات الدلالية مثل: $\\vec{v}_{\\text{ملك}} - \\vec{v}_{\\text{رجل}} + \\vec{v}_{\\text{امرأة}} \\approx \\vec{v}_{\\text{ملكة}}$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Subword Tokenization (BPE) & Dense Word Embeddings.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: ترسم تضمينات الكلمات معرّفات الرموز في فضاءات اتجاهية دلالية مستمرة $\\mathbb{R}^d$ تعكس العلاقات الهندسية بين المتجهات القياسات الدلالية مثل: $\\vec{v}_{\\text{ملك}} - \\vec{v}_{\\text{رجل}} + \\vec{v}_{\\text{امرأة}} \\approx \\vec{v}_{\\text{ملكة}}$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch3_med_35",
      "titleEn": "[MEDIUM] Scaled Dot-Product Multi-Head Self-Attention Mechanisms - Analysis 35",
      "titleAr": "[مستوى متوسط] آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس - تحليل 35",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Scaled Dot-Product Multi-Head Self-Attention Mechanisms, what is the precise analytical formulation or operative rule? (Item 35)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 35)",
      "optionsEn": [
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients."
      ],
      "optionsAr": [
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تُحسب مصفوفة الانتباه بالعلاقة $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$، حيث يمنع معامل القياس $\\sqrt{d_k}$ تضخم نواتج الضرب وتلاشي التدرجات في دالة softmax."
      ],
      "correctAnswer": "The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.",
      "correctAnswerEn": "The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.",
      "correctAnswerAr": "تُحسب مصفوفة الانتباه بالعلاقة $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$، حيث يمنع معامل القياس $\\sqrt{d_k}$ تضخم نواتج الضرب وتلاشي التدرجات في دالة softmax.",
      "correctIndex": 3,
      "explanationEn": "Analytical Derivation & Properties: The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تُحسب مصفوفة الانتباه بالعلاقة $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$، حيث يمنع معامل القياس $\\sqrt{d_k}$ تضخم نواتج الضرب وتلاشي التدرجات في دالة softmax.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Scaled Dot-Product Multi-Head Self-Attention Mechanisms.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تُحسب مصفوفة الانتباه بالعلاقة $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$، حيث يمنع معامل القياس $\\sqrt{d_k}$ تضخم نواتج الضرب وتلاشي التدرجات في دالة softmax.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch3_med_36",
      "titleEn": "[MEDIUM] Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG) - Analysis 36",
      "titleAr": "[مستوى متوسط] النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG) - تحليل 36",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG), what is the precise analytical formulation or operative rule? (Item 36)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 36)",
      "optionsEn": [
        "A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step."
      ],
      "optionsAr": [
        "يقطع خط RAG الوثائق إلى أجزاء ويولد تضميناتها بترميز كثيف، ويفهرسها بتقنيات الجوار التقريبي HNSW، ويجري بحث تشابه جيب التمام لاستخراج أفضل $k$ أدلة سياقية.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين."
      ],
      "correctAnswer": "A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.",
      "correctAnswerEn": "A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.",
      "correctAnswerAr": "يقطع خط RAG الوثائق إلى أجزاء ويولد تضميناتها بترميز كثيف، ويفهرسها بتقنيات الجوار التقريبي HNSW، ويجري بحث تشابه جيب التمام لاستخراج أفضل $k$ أدلة سياقية.",
      "correctIndex": 0,
      "explanationEn": "Analytical Derivation & Properties: A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يقطع خط RAG الوثائق إلى أجزاء ويولد تضميناتها بترميز كثيف، ويفهرسها بتقنيات الجوار التقريبي HNSW، ويجري بحث تشابه جيب التمام لاستخراج أفضل $k$ أدلة سياقية.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يقطع خط RAG الوثائق إلى أجزاء ويولد تضميناتها بترميز كثيف، ويفهرسها بتقنيات الجوار التقريبي HNSW، ويجري بحث تشابه جيب التمام لاستخراج أفضل $k$ أدلة سياقية.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch3_med_37",
      "titleEn": "[MEDIUM] Subword Tokenization (BPE) & Dense Word Embeddings - Analysis 37",
      "titleAr": "[مستوى متوسط] تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة - تحليل 37",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Subword Tokenization (BPE) & Dense Word Embeddings, what is the precise analytical formulation or operative rule? (Item 37)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 37)",
      "optionsEn": [
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance."
      ],
      "optionsAr": [
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "ترسم تضمينات الكلمات معرّفات الرموز في فضاءات اتجاهية دلالية مستمرة $\\mathbb{R}^d$ تعكس العلاقات الهندسية بين المتجهات القياسات الدلالية مثل: $\\vec{v}_{\\text{ملك}} - \\vec{v}_{\\text{رجل}} + \\vec{v}_{\\text{امرأة}} \\approx \\vec{v}_{\\text{ملكة}}$.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر."
      ],
      "correctAnswer": "Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.",
      "correctAnswerEn": "Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.",
      "correctAnswerAr": "ترسم تضمينات الكلمات معرّفات الرموز في فضاءات اتجاهية دلالية مستمرة $\\mathbb{R}^d$ تعكس العلاقات الهندسية بين المتجهات القياسات الدلالية مثل: $\\vec{v}_{\\text{ملك}} - \\vec{v}_{\\text{رجل}} + \\vec{v}_{\\text{امرأة}} \\approx \\vec{v}_{\\text{ملكة}}$.",
      "correctIndex": 1,
      "explanationEn": "Analytical Derivation & Properties: Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: ترسم تضمينات الكلمات معرّفات الرموز في فضاءات اتجاهية دلالية مستمرة $\\mathbb{R}^d$ تعكس العلاقات الهندسية بين المتجهات القياسات الدلالية مثل: $\\vec{v}_{\\text{ملك}} - \\vec{v}_{\\text{رجل}} + \\vec{v}_{\\text{امرأة}} \\approx \\vec{v}_{\\text{ملكة}}$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Subword Tokenization (BPE) & Dense Word Embeddings.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: ترسم تضمينات الكلمات معرّفات الرموز في فضاءات اتجاهية دلالية مستمرة $\\mathbb{R}^d$ تعكس العلاقات الهندسية بين المتجهات القياسات الدلالية مثل: $\\vec{v}_{\\text{ملك}} - \\vec{v}_{\\text{رجل}} + \\vec{v}_{\\text{امرأة}} \\approx \\vec{v}_{\\text{ملكة}}$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch3_med_38",
      "titleEn": "[MEDIUM] Scaled Dot-Product Multi-Head Self-Attention Mechanisms - Analysis 38",
      "titleAr": "[مستوى متوسط] آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس - تحليل 38",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Scaled Dot-Product Multi-Head Self-Attention Mechanisms, what is the precise analytical formulation or operative rule? (Item 38)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 38)",
      "optionsEn": [
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "تُحسب مصفوفة الانتباه بالعلاقة $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$، حيث يمنع معامل القياس $\\sqrt{d_k}$ تضخم نواتج الضرب وتلاشي التدرجات في دالة softmax.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.",
      "correctAnswerEn": "The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.",
      "correctAnswerAr": "تُحسب مصفوفة الانتباه بالعلاقة $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$، حيث يمنع معامل القياس $\\sqrt{d_k}$ تضخم نواتج الضرب وتلاشي التدرجات في دالة softmax.",
      "correctIndex": 2,
      "explanationEn": "Analytical Derivation & Properties: The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تُحسب مصفوفة الانتباه بالعلاقة $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$، حيث يمنع معامل القياس $\\sqrt{d_k}$ تضخم نواتج الضرب وتلاشي التدرجات في دالة softmax.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Scaled Dot-Product Multi-Head Self-Attention Mechanisms.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تُحسب مصفوفة الانتباه بالعلاقة $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$، حيث يمنع معامل القياس $\\sqrt{d_k}$ تضخم نواتج الضرب وتلاشي التدرجات في دالة softmax.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch3_med_39",
      "titleEn": "[MEDIUM] Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG) - Analysis 39",
      "titleAr": "[مستوى متوسط] النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG) - تحليل 39",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG), what is the precise analytical formulation or operative rule? (Item 39)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 39)",
      "optionsEn": [
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence."
      ],
      "optionsAr": [
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "يقطع خط RAG الوثائق إلى أجزاء ويولد تضميناتها بترميز كثيف، ويفهرسها بتقنيات الجوار التقريبي HNSW، ويجري بحث تشابه جيب التمام لاستخراج أفضل $k$ أدلة سياقية."
      ],
      "correctAnswer": "A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.",
      "correctAnswerEn": "A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.",
      "correctAnswerAr": "يقطع خط RAG الوثائق إلى أجزاء ويولد تضميناتها بترميز كثيف، ويفهرسها بتقنيات الجوار التقريبي HNSW، ويجري بحث تشابه جيب التمام لاستخراج أفضل $k$ أدلة سياقية.",
      "correctIndex": 3,
      "explanationEn": "Analytical Derivation & Properties: A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يقطع خط RAG الوثائق إلى أجزاء ويولد تضميناتها بترميز كثيف، ويفهرسها بتقنيات الجوار التقريبي HNSW، ويجري بحث تشابه جيب التمام لاستخراج أفضل $k$ أدلة سياقية.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يقطع خط RAG الوثائق إلى أجزاء ويولد تضميناتها بترميز كثيف، ويفهرسها بتقنيات الجوار التقريبي HNSW، ويجري بحث تشابه جيب التمام لاستخراج أفضل $k$ أدلة سياقية.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch3_med_40",
      "titleEn": "[MEDIUM] Subword Tokenization (BPE) & Dense Word Embeddings - Analysis 40",
      "titleAr": "[مستوى متوسط] تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة - تحليل 40",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Subword Tokenization (BPE) & Dense Word Embeddings, what is the precise analytical formulation or operative rule? (Item 40)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 40)",
      "optionsEn": [
        "Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence."
      ],
      "optionsAr": [
        "ترسم تضمينات الكلمات معرّفات الرموز في فضاءات اتجاهية دلالية مستمرة $\\mathbb{R}^d$ تعكس العلاقات الهندسية بين المتجهات القياسات الدلالية مثل: $\\vec{v}_{\\text{ملك}} - \\vec{v}_{\\text{رجل}} + \\vec{v}_{\\text{امرأة}} \\approx \\vec{v}_{\\text{ملكة}}$.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية."
      ],
      "correctAnswer": "Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.",
      "correctAnswerEn": "Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.",
      "correctAnswerAr": "ترسم تضمينات الكلمات معرّفات الرموز في فضاءات اتجاهية دلالية مستمرة $\\mathbb{R}^d$ تعكس العلاقات الهندسية بين المتجهات القياسات الدلالية مثل: $\\vec{v}_{\\text{ملك}} - \\vec{v}_{\\text{رجل}} + \\vec{v}_{\\text{امرأة}} \\approx \\vec{v}_{\\text{ملكة}}$.",
      "correctIndex": 0,
      "explanationEn": "Analytical Derivation & Properties: Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: ترسم تضمينات الكلمات معرّفات الرموز في فضاءات اتجاهية دلالية مستمرة $\\mathbb{R}^d$ تعكس العلاقات الهندسية بين المتجهات القياسات الدلالية مثل: $\\vec{v}_{\\text{ملك}} - \\vec{v}_{\\text{رجل}} + \\vec{v}_{\\text{امرأة}} \\approx \\vec{v}_{\\text{ملكة}}$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Subword Tokenization (BPE) & Dense Word Embeddings.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: ترسم تضمينات الكلمات معرّفات الرموز في فضاءات اتجاهية دلالية مستمرة $\\mathbb{R}^d$ تعكس العلاقات الهندسية بين المتجهات القياسات الدلالية مثل: $\\vec{v}_{\\text{ملك}} - \\vec{v}_{\\text{رجل}} + \\vec{v}_{\\text{امرأة}} \\approx \\vec{v}_{\\text{ملكة}}$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch3_med_41",
      "titleEn": "[MEDIUM] Scaled Dot-Product Multi-Head Self-Attention Mechanisms - Analysis 41",
      "titleAr": "[مستوى متوسط] آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس - تحليل 41",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Scaled Dot-Product Multi-Head Self-Attention Mechanisms, what is the precise analytical formulation or operative rule? (Item 41)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 41)",
      "optionsEn": [
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تُحسب مصفوفة الانتباه بالعلاقة $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$، حيث يمنع معامل القياس $\\sqrt{d_k}$ تضخم نواتج الضرب وتلاشي التدرجات في دالة softmax.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.",
      "correctAnswerEn": "The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.",
      "correctAnswerAr": "تُحسب مصفوفة الانتباه بالعلاقة $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$، حيث يمنع معامل القياس $\\sqrt{d_k}$ تضخم نواتج الضرب وتلاشي التدرجات في دالة softmax.",
      "correctIndex": 1,
      "explanationEn": "Analytical Derivation & Properties: The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تُحسب مصفوفة الانتباه بالعلاقة $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$، حيث يمنع معامل القياس $\\sqrt{d_k}$ تضخم نواتج الضرب وتلاشي التدرجات في دالة softmax.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Scaled Dot-Product Multi-Head Self-Attention Mechanisms.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تُحسب مصفوفة الانتباه بالعلاقة $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$، حيث يمنع معامل القياس $\\sqrt{d_k}$ تضخم نواتج الضرب وتلاشي التدرجات في دالة softmax.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch3_med_42",
      "titleEn": "[MEDIUM] Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG) - Analysis 42",
      "titleAr": "[مستوى متوسط] النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG) - تحليل 42",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG), what is the precise analytical formulation or operative rule? (Item 42)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 42)",
      "optionsEn": [
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data."
      ],
      "optionsAr": [
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "يقطع خط RAG الوثائق إلى أجزاء ويولد تضميناتها بترميز كثيف، ويفهرسها بتقنيات الجوار التقريبي HNSW، ويجري بحث تشابه جيب التمام لاستخراج أفضل $k$ أدلة سياقية.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش."
      ],
      "correctAnswer": "A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.",
      "correctAnswerEn": "A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.",
      "correctAnswerAr": "يقطع خط RAG الوثائق إلى أجزاء ويولد تضميناتها بترميز كثيف، ويفهرسها بتقنيات الجوار التقريبي HNSW، ويجري بحث تشابه جيب التمام لاستخراج أفضل $k$ أدلة سياقية.",
      "correctIndex": 2,
      "explanationEn": "Analytical Derivation & Properties: A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يقطع خط RAG الوثائق إلى أجزاء ويولد تضميناتها بترميز كثيف، ويفهرسها بتقنيات الجوار التقريبي HNSW، ويجري بحث تشابه جيب التمام لاستخراج أفضل $k$ أدلة سياقية.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يقطع خط RAG الوثائق إلى أجزاء ويولد تضميناتها بترميز كثيف، ويفهرسها بتقنيات الجوار التقريبي HNSW، ويجري بحث تشابه جيب التمام لاستخراج أفضل $k$ أدلة سياقية.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch3_med_43",
      "titleEn": "[MEDIUM] Subword Tokenization (BPE) & Dense Word Embeddings - Analysis 43",
      "titleAr": "[مستوى متوسط] تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة - تحليل 43",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Subword Tokenization (BPE) & Dense Word Embeddings, what is the precise analytical formulation or operative rule? (Item 43)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 43)",
      "optionsEn": [
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$."
      ],
      "optionsAr": [
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "ترسم تضمينات الكلمات معرّفات الرموز في فضاءات اتجاهية دلالية مستمرة $\\mathbb{R}^d$ تعكس العلاقات الهندسية بين المتجهات القياسات الدلالية مثل: $\\vec{v}_{\\text{ملك}} - \\vec{v}_{\\text{رجل}} + \\vec{v}_{\\text{امرأة}} \\approx \\vec{v}_{\\text{ملكة}}$."
      ],
      "correctAnswer": "Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.",
      "correctAnswerEn": "Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.",
      "correctAnswerAr": "ترسم تضمينات الكلمات معرّفات الرموز في فضاءات اتجاهية دلالية مستمرة $\\mathbb{R}^d$ تعكس العلاقات الهندسية بين المتجهات القياسات الدلالية مثل: $\\vec{v}_{\\text{ملك}} - \\vec{v}_{\\text{رجل}} + \\vec{v}_{\\text{امرأة}} \\approx \\vec{v}_{\\text{ملكة}}$.",
      "correctIndex": 3,
      "explanationEn": "Analytical Derivation & Properties: Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: ترسم تضمينات الكلمات معرّفات الرموز في فضاءات اتجاهية دلالية مستمرة $\\mathbb{R}^d$ تعكس العلاقات الهندسية بين المتجهات القياسات الدلالية مثل: $\\vec{v}_{\\text{ملك}} - \\vec{v}_{\\text{رجل}} + \\vec{v}_{\\text{امرأة}} \\approx \\vec{v}_{\\text{ملكة}}$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Subword Tokenization (BPE) & Dense Word Embeddings.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: ترسم تضمينات الكلمات معرّفات الرموز في فضاءات اتجاهية دلالية مستمرة $\\mathbb{R}^d$ تعكس العلاقات الهندسية بين المتجهات القياسات الدلالية مثل: $\\vec{v}_{\\text{ملك}} - \\vec{v}_{\\text{رجل}} + \\vec{v}_{\\text{امرأة}} \\approx \\vec{v}_{\\text{ملكة}}$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch3_med_44",
      "titleEn": "[MEDIUM] Scaled Dot-Product Multi-Head Self-Attention Mechanisms - Analysis 44",
      "titleAr": "[مستوى متوسط] آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس - تحليل 44",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Scaled Dot-Product Multi-Head Self-Attention Mechanisms, what is the precise analytical formulation or operative rule? (Item 44)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 44)",
      "optionsEn": [
        "The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.",
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تُحسب مصفوفة الانتباه بالعلاقة $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$، حيث يمنع معامل القياس $\\sqrt{d_k}$ تضخم نواتج الضرب وتلاشي التدرجات في دالة softmax.",
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.",
      "correctAnswerEn": "The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.",
      "correctAnswerAr": "تُحسب مصفوفة الانتباه بالعلاقة $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$، حيث يمنع معامل القياس $\\sqrt{d_k}$ تضخم نواتج الضرب وتلاشي التدرجات في دالة softmax.",
      "correctIndex": 0,
      "explanationEn": "Analytical Derivation & Properties: The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تُحسب مصفوفة الانتباه بالعلاقة $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$، حيث يمنع معامل القياس $\\sqrt{d_k}$ تضخم نواتج الضرب وتلاشي التدرجات في دالة softmax.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Scaled Dot-Product Multi-Head Self-Attention Mechanisms.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تُحسب مصفوفة الانتباه بالعلاقة $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$، حيث يمنع معامل القياس $\\sqrt{d_k}$ تضخم نواتج الضرب وتلاشي التدرجات في دالة softmax.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch3_med_45",
      "titleEn": "[MEDIUM] Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG) - Analysis 45",
      "titleAr": "[مستوى متوسط] النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG) - تحليل 45",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG), what is the precise analytical formulation or operative rule? (Item 45)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 45)",
      "optionsEn": [
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.",
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate."
      ],
      "optionsAr": [
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يقطع خط RAG الوثائق إلى أجزاء ويولد تضميناتها بترميز كثيف، ويفهرسها بتقنيات الجوار التقريبي HNSW، ويجري بحث تشابه جيب التمام لاستخراج أفضل $k$ أدلة سياقية.",
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم."
      ],
      "correctAnswer": "A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.",
      "correctAnswerEn": "A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.",
      "correctAnswerAr": "يقطع خط RAG الوثائق إلى أجزاء ويولد تضميناتها بترميز كثيف، ويفهرسها بتقنيات الجوار التقريبي HNSW، ويجري بحث تشابه جيب التمام لاستخراج أفضل $k$ أدلة سياقية.",
      "correctIndex": 1,
      "explanationEn": "Analytical Derivation & Properties: A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يقطع خط RAG الوثائق إلى أجزاء ويولد تضميناتها بترميز كثيف، ويفهرسها بتقنيات الجوار التقريبي HNSW، ويجري بحث تشابه جيب التمام لاستخراج أفضل $k$ أدلة سياقية.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يقطع خط RAG الوثائق إلى أجزاء ويولد تضميناتها بترميز كثيف، ويفهرسها بتقنيات الجوار التقريبي HNSW، ويجري بحث تشابه جيب التمام لاستخراج أفضل $k$ أدلة سياقية.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch3_med_46",
      "titleEn": "[MEDIUM] Subword Tokenization (BPE) & Dense Word Embeddings - Analysis 46",
      "titleAr": "[مستوى متوسط] تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة - تحليل 46",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Subword Tokenization (BPE) & Dense Word Embeddings, what is the precise analytical formulation or operative rule? (Item 46)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 46)",
      "optionsEn": [
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.",
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves."
      ],
      "optionsAr": [
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "ترسم تضمينات الكلمات معرّفات الرموز في فضاءات اتجاهية دلالية مستمرة $\\mathbb{R}^d$ تعكس العلاقات الهندسية بين المتجهات القياسات الدلالية مثل: $\\vec{v}_{\\text{ملك}} - \\vec{v}_{\\text{رجل}} + \\vec{v}_{\\text{امرأة}} \\approx \\vec{v}_{\\text{ملكة}}$.",
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية."
      ],
      "correctAnswer": "Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.",
      "correctAnswerEn": "Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.",
      "correctAnswerAr": "ترسم تضمينات الكلمات معرّفات الرموز في فضاءات اتجاهية دلالية مستمرة $\\mathbb{R}^d$ تعكس العلاقات الهندسية بين المتجهات القياسات الدلالية مثل: $\\vec{v}_{\\text{ملك}} - \\vec{v}_{\\text{رجل}} + \\vec{v}_{\\text{امرأة}} \\approx \\vec{v}_{\\text{ملكة}}$.",
      "correctIndex": 2,
      "explanationEn": "Analytical Derivation & Properties: Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: ترسم تضمينات الكلمات معرّفات الرموز في فضاءات اتجاهية دلالية مستمرة $\\mathbb{R}^d$ تعكس العلاقات الهندسية بين المتجهات القياسات الدلالية مثل: $\\vec{v}_{\\text{ملك}} - \\vec{v}_{\\text{رجل}} + \\vec{v}_{\\text{امرأة}} \\approx \\vec{v}_{\\text{ملكة}}$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Subword Tokenization (BPE) & Dense Word Embeddings.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: ترسم تضمينات الكلمات معرّفات الرموز في فضاءات اتجاهية دلالية مستمرة $\\mathbb{R}^d$ تعكس العلاقات الهندسية بين المتجهات القياسات الدلالية مثل: $\\vec{v}_{\\text{ملك}} - \\vec{v}_{\\text{رجل}} + \\vec{v}_{\\text{امرأة}} \\approx \\vec{v}_{\\text{ملكة}}$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch3_med_47",
      "titleEn": "[MEDIUM] Scaled Dot-Product Multi-Head Self-Attention Mechanisms - Analysis 47",
      "titleAr": "[مستوى متوسط] آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس - تحليل 47",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Scaled Dot-Product Multi-Head Self-Attention Mechanisms, what is the precise analytical formulation or operative rule? (Item 47)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 47)",
      "optionsEn": [
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients."
      ],
      "optionsAr": [
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "تُحسب مصفوفة الانتباه بالعلاقة $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$، حيث يمنع معامل القياس $\\sqrt{d_k}$ تضخم نواتج الضرب وتلاشي التدرجات في دالة softmax."
      ],
      "correctAnswer": "The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.",
      "correctAnswerEn": "The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.",
      "correctAnswerAr": "تُحسب مصفوفة الانتباه بالعلاقة $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$، حيث يمنع معامل القياس $\\sqrt{d_k}$ تضخم نواتج الضرب وتلاشي التدرجات في دالة softmax.",
      "correctIndex": 3,
      "explanationEn": "Analytical Derivation & Properties: The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تُحسب مصفوفة الانتباه بالعلاقة $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$، حيث يمنع معامل القياس $\\sqrt{d_k}$ تضخم نواتج الضرب وتلاشي التدرجات في دالة softmax.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Scaled Dot-Product Multi-Head Self-Attention Mechanisms.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تُحسب مصفوفة الانتباه بالعلاقة $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$، حيث يمنع معامل القياس $\\sqrt{d_k}$ تضخم نواتج الضرب وتلاشي التدرجات في دالة softmax.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch3_med_48",
      "titleEn": "[MEDIUM] Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG) - Analysis 48",
      "titleAr": "[مستوى متوسط] النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG) - تحليل 48",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG), what is the precise analytical formulation or operative rule? (Item 48)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 48)",
      "optionsEn": [
        "A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation."
      ],
      "optionsAr": [
        "يقطع خط RAG الوثائق إلى أجزاء ويولد تضميناتها بترميز كثيف، ويفهرسها بتقنيات الجوار التقريبي HNSW، ويجري بحث تشابه جيب التمام لاستخراج أفضل $k$ أدلة سياقية.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي."
      ],
      "correctAnswer": "A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.",
      "correctAnswerEn": "A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.",
      "correctAnswerAr": "يقطع خط RAG الوثائق إلى أجزاء ويولد تضميناتها بترميز كثيف، ويفهرسها بتقنيات الجوار التقريبي HNSW، ويجري بحث تشابه جيب التمام لاستخراج أفضل $k$ أدلة سياقية.",
      "correctIndex": 0,
      "explanationEn": "Analytical Derivation & Properties: A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يقطع خط RAG الوثائق إلى أجزاء ويولد تضميناتها بترميز كثيف، ويفهرسها بتقنيات الجوار التقريبي HNSW، ويجري بحث تشابه جيب التمام لاستخراج أفضل $k$ أدلة سياقية.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يقطع خط RAG الوثائق إلى أجزاء ويولد تضميناتها بترميز كثيف، ويفهرسها بتقنيات الجوار التقريبي HNSW، ويجري بحث تشابه جيب التمام لاستخراج أفضل $k$ أدلة سياقية.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch3_med_49",
      "titleEn": "[MEDIUM] Subword Tokenization (BPE) & Dense Word Embeddings - Analysis 49",
      "titleAr": "[مستوى متوسط] تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة - تحليل 49",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Subword Tokenization (BPE) & Dense Word Embeddings, what is the precise analytical formulation or operative rule? (Item 49)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 49)",
      "optionsEn": [
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent."
      ],
      "optionsAr": [
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "ترسم تضمينات الكلمات معرّفات الرموز في فضاءات اتجاهية دلالية مستمرة $\\mathbb{R}^d$ تعكس العلاقات الهندسية بين المتجهات القياسات الدلالية مثل: $\\vec{v}_{\\text{ملك}} - \\vec{v}_{\\text{رجل}} + \\vec{v}_{\\text{امرأة}} \\approx \\vec{v}_{\\text{ملكة}}$.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة."
      ],
      "correctAnswer": "Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.",
      "correctAnswerEn": "Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.",
      "correctAnswerAr": "ترسم تضمينات الكلمات معرّفات الرموز في فضاءات اتجاهية دلالية مستمرة $\\mathbb{R}^d$ تعكس العلاقات الهندسية بين المتجهات القياسات الدلالية مثل: $\\vec{v}_{\\text{ملك}} - \\vec{v}_{\\text{رجل}} + \\vec{v}_{\\text{امرأة}} \\approx \\vec{v}_{\\text{ملكة}}$.",
      "correctIndex": 1,
      "explanationEn": "Analytical Derivation & Properties: Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: ترسم تضمينات الكلمات معرّفات الرموز في فضاءات اتجاهية دلالية مستمرة $\\mathbb{R}^d$ تعكس العلاقات الهندسية بين المتجهات القياسات الدلالية مثل: $\\vec{v}_{\\text{ملك}} - \\vec{v}_{\\text{رجل}} + \\vec{v}_{\\text{امرأة}} \\approx \\vec{v}_{\\text{ملكة}}$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Subword Tokenization (BPE) & Dense Word Embeddings.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: ترسم تضمينات الكلمات معرّفات الرموز في فضاءات اتجاهية دلالية مستمرة $\\mathbb{R}^d$ تعكس العلاقات الهندسية بين المتجهات القياسات الدلالية مثل: $\\vec{v}_{\\text{ملك}} - \\vec{v}_{\\text{رجل}} + \\vec{v}_{\\text{امرأة}} \\approx \\vec{v}_{\\text{ملكة}}$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch3_med_50",
      "titleEn": "[MEDIUM] Scaled Dot-Product Multi-Head Self-Attention Mechanisms - Analysis 50",
      "titleAr": "[مستوى متوسط] آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس - تحليل 50",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Scaled Dot-Product Multi-Head Self-Attention Mechanisms, what is the precise analytical formulation or operative rule? (Item 50)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 50)",
      "optionsEn": [
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تُحسب مصفوفة الانتباه بالعلاقة $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$، حيث يمنع معامل القياس $\\sqrt{d_k}$ تضخم نواتج الضرب وتلاشي التدرجات في دالة softmax.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.",
      "correctAnswerEn": "The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.",
      "correctAnswerAr": "تُحسب مصفوفة الانتباه بالعلاقة $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$، حيث يمنع معامل القياس $\\sqrt{d_k}$ تضخم نواتج الضرب وتلاشي التدرجات في دالة softmax.",
      "correctIndex": 2,
      "explanationEn": "Analytical Derivation & Properties: The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تُحسب مصفوفة الانتباه بالعلاقة $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$، حيث يمنع معامل القياس $\\sqrt{d_k}$ تضخم نواتج الضرب وتلاشي التدرجات في دالة softmax.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Scaled Dot-Product Multi-Head Self-Attention Mechanisms.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تُحسب مصفوفة الانتباه بالعلاقة $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$، حيث يمنع معامل القياس $\\sqrt{d_k}$ تضخم نواتج الضرب وتلاشي التدرجات في دالة softmax.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch3_med_51",
      "titleEn": "[MEDIUM] Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG) - Analysis 51",
      "titleAr": "[مستوى متوسط] النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG) - تحليل 51",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG), what is the precise analytical formulation or operative rule? (Item 51)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 51)",
      "optionsEn": [
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence."
      ],
      "optionsAr": [
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "يقطع خط RAG الوثائق إلى أجزاء ويولد تضميناتها بترميز كثيف، ويفهرسها بتقنيات الجوار التقريبي HNSW، ويجري بحث تشابه جيب التمام لاستخراج أفضل $k$ أدلة سياقية."
      ],
      "correctAnswer": "A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.",
      "correctAnswerEn": "A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.",
      "correctAnswerAr": "يقطع خط RAG الوثائق إلى أجزاء ويولد تضميناتها بترميز كثيف، ويفهرسها بتقنيات الجوار التقريبي HNSW، ويجري بحث تشابه جيب التمام لاستخراج أفضل $k$ أدلة سياقية.",
      "correctIndex": 3,
      "explanationEn": "Analytical Derivation & Properties: A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يقطع خط RAG الوثائق إلى أجزاء ويولد تضميناتها بترميز كثيف، ويفهرسها بتقنيات الجوار التقريبي HNSW، ويجري بحث تشابه جيب التمام لاستخراج أفضل $k$ أدلة سياقية.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يقطع خط RAG الوثائق إلى أجزاء ويولد تضميناتها بترميز كثيف، ويفهرسها بتقنيات الجوار التقريبي HNSW، ويجري بحث تشابه جيب التمام لاستخراج أفضل $k$ أدلة سياقية.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch3_med_52",
      "titleEn": "[MEDIUM] Subword Tokenization (BPE) & Dense Word Embeddings - Analysis 52",
      "titleAr": "[مستوى متوسط] تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة - تحليل 52",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Subword Tokenization (BPE) & Dense Word Embeddings, what is the precise analytical formulation or operative rule? (Item 52)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 52)",
      "optionsEn": [
        "Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance."
      ],
      "optionsAr": [
        "ترسم تضمينات الكلمات معرّفات الرموز في فضاءات اتجاهية دلالية مستمرة $\\mathbb{R}^d$ تعكس العلاقات الهندسية بين المتجهات القياسات الدلالية مثل: $\\vec{v}_{\\text{ملك}} - \\vec{v}_{\\text{رجل}} + \\vec{v}_{\\text{امرأة}} \\approx \\vec{v}_{\\text{ملكة}}$.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر."
      ],
      "correctAnswer": "Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.",
      "correctAnswerEn": "Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.",
      "correctAnswerAr": "ترسم تضمينات الكلمات معرّفات الرموز في فضاءات اتجاهية دلالية مستمرة $\\mathbb{R}^d$ تعكس العلاقات الهندسية بين المتجهات القياسات الدلالية مثل: $\\vec{v}_{\\text{ملك}} - \\vec{v}_{\\text{رجل}} + \\vec{v}_{\\text{امرأة}} \\approx \\vec{v}_{\\text{ملكة}}$.",
      "correctIndex": 0,
      "explanationEn": "Analytical Derivation & Properties: Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: ترسم تضمينات الكلمات معرّفات الرموز في فضاءات اتجاهية دلالية مستمرة $\\mathbb{R}^d$ تعكس العلاقات الهندسية بين المتجهات القياسات الدلالية مثل: $\\vec{v}_{\\text{ملك}} - \\vec{v}_{\\text{رجل}} + \\vec{v}_{\\text{امرأة}} \\approx \\vec{v}_{\\text{ملكة}}$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Subword Tokenization (BPE) & Dense Word Embeddings.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: ترسم تضمينات الكلمات معرّفات الرموز في فضاءات اتجاهية دلالية مستمرة $\\mathbb{R}^d$ تعكس العلاقات الهندسية بين المتجهات القياسات الدلالية مثل: $\\vec{v}_{\\text{ملك}} - \\vec{v}_{\\text{رجل}} + \\vec{v}_{\\text{امرأة}} \\approx \\vec{v}_{\\text{ملكة}}$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch3_med_53",
      "titleEn": "[MEDIUM] Scaled Dot-Product Multi-Head Self-Attention Mechanisms - Analysis 53",
      "titleAr": "[مستوى متوسط] آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس - تحليل 53",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Scaled Dot-Product Multi-Head Self-Attention Mechanisms, what is the precise analytical formulation or operative rule? (Item 53)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 53)",
      "optionsEn": [
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "تُحسب مصفوفة الانتباه بالعلاقة $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$، حيث يمنع معامل القياس $\\sqrt{d_k}$ تضخم نواتج الضرب وتلاشي التدرجات في دالة softmax.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.",
      "correctAnswerEn": "The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.",
      "correctAnswerAr": "تُحسب مصفوفة الانتباه بالعلاقة $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$، حيث يمنع معامل القياس $\\sqrt{d_k}$ تضخم نواتج الضرب وتلاشي التدرجات في دالة softmax.",
      "correctIndex": 1,
      "explanationEn": "Analytical Derivation & Properties: The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تُحسب مصفوفة الانتباه بالعلاقة $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$، حيث يمنع معامل القياس $\\sqrt{d_k}$ تضخم نواتج الضرب وتلاشي التدرجات في دالة softmax.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Scaled Dot-Product Multi-Head Self-Attention Mechanisms.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تُحسب مصفوفة الانتباه بالعلاقة $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$، حيث يمنع معامل القياس $\\sqrt{d_k}$ تضخم نواتج الضرب وتلاشي التدرجات في دالة softmax.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch3_med_54",
      "titleEn": "[MEDIUM] Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG) - Analysis 54",
      "titleAr": "[مستوى متوسط] النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG) - تحليل 54",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG), what is the precise analytical formulation or operative rule? (Item 54)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 54)",
      "optionsEn": [
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs."
      ],
      "optionsAr": [
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "يقطع خط RAG الوثائق إلى أجزاء ويولد تضميناتها بترميز كثيف، ويفهرسها بتقنيات الجوار التقريبي HNSW، ويجري بحث تشابه جيب التمام لاستخراج أفضل $k$ أدلة سياقية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة."
      ],
      "correctAnswer": "A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.",
      "correctAnswerEn": "A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.",
      "correctAnswerAr": "يقطع خط RAG الوثائق إلى أجزاء ويولد تضميناتها بترميز كثيف، ويفهرسها بتقنيات الجوار التقريبي HNSW، ويجري بحث تشابه جيب التمام لاستخراج أفضل $k$ أدلة سياقية.",
      "correctIndex": 2,
      "explanationEn": "Analytical Derivation & Properties: A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يقطع خط RAG الوثائق إلى أجزاء ويولد تضميناتها بترميز كثيف، ويفهرسها بتقنيات الجوار التقريبي HNSW، ويجري بحث تشابه جيب التمام لاستخراج أفضل $k$ أدلة سياقية.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يقطع خط RAG الوثائق إلى أجزاء ويولد تضميناتها بترميز كثيف، ويفهرسها بتقنيات الجوار التقريبي HNSW، ويجري بحث تشابه جيب التمام لاستخراج أفضل $k$ أدلة سياقية.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch3_med_55",
      "titleEn": "[MEDIUM] Subword Tokenization (BPE) & Dense Word Embeddings - Analysis 55",
      "titleAr": "[مستوى متوسط] تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة - تحليل 55",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Subword Tokenization (BPE) & Dense Word Embeddings, what is the precise analytical formulation or operative rule? (Item 55)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 55)",
      "optionsEn": [
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$."
      ],
      "optionsAr": [
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "ترسم تضمينات الكلمات معرّفات الرموز في فضاءات اتجاهية دلالية مستمرة $\\mathbb{R}^d$ تعكس العلاقات الهندسية بين المتجهات القياسات الدلالية مثل: $\\vec{v}_{\\text{ملك}} - \\vec{v}_{\\text{رجل}} + \\vec{v}_{\\text{امرأة}} \\approx \\vec{v}_{\\text{ملكة}}$."
      ],
      "correctAnswer": "Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.",
      "correctAnswerEn": "Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.",
      "correctAnswerAr": "ترسم تضمينات الكلمات معرّفات الرموز في فضاءات اتجاهية دلالية مستمرة $\\mathbb{R}^d$ تعكس العلاقات الهندسية بين المتجهات القياسات الدلالية مثل: $\\vec{v}_{\\text{ملك}} - \\vec{v}_{\\text{رجل}} + \\vec{v}_{\\text{امرأة}} \\approx \\vec{v}_{\\text{ملكة}}$.",
      "correctIndex": 3,
      "explanationEn": "Analytical Derivation & Properties: Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: ترسم تضمينات الكلمات معرّفات الرموز في فضاءات اتجاهية دلالية مستمرة $\\mathbb{R}^d$ تعكس العلاقات الهندسية بين المتجهات القياسات الدلالية مثل: $\\vec{v}_{\\text{ملك}} - \\vec{v}_{\\text{رجل}} + \\vec{v}_{\\text{امرأة}} \\approx \\vec{v}_{\\text{ملكة}}$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Subword Tokenization (BPE) & Dense Word Embeddings.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: ترسم تضمينات الكلمات معرّفات الرموز في فضاءات اتجاهية دلالية مستمرة $\\mathbb{R}^d$ تعكس العلاقات الهندسية بين المتجهات القياسات الدلالية مثل: $\\vec{v}_{\\text{ملك}} - \\vec{v}_{\\text{رجل}} + \\vec{v}_{\\text{امرأة}} \\approx \\vec{v}_{\\text{ملكة}}$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch3_med_56",
      "titleEn": "[MEDIUM] Scaled Dot-Product Multi-Head Self-Attention Mechanisms - Analysis 56",
      "titleAr": "[مستوى متوسط] آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس - تحليل 56",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Scaled Dot-Product Multi-Head Self-Attention Mechanisms, what is the precise analytical formulation or operative rule? (Item 56)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 56)",
      "optionsEn": [
        "The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.",
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "تُحسب مصفوفة الانتباه بالعلاقة $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$، حيث يمنع معامل القياس $\\sqrt{d_k}$ تضخم نواتج الضرب وتلاشي التدرجات في دالة softmax.",
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.",
      "correctAnswerEn": "The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.",
      "correctAnswerAr": "تُحسب مصفوفة الانتباه بالعلاقة $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$، حيث يمنع معامل القياس $\\sqrt{d_k}$ تضخم نواتج الضرب وتلاشي التدرجات في دالة softmax.",
      "correctIndex": 0,
      "explanationEn": "Analytical Derivation & Properties: The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تُحسب مصفوفة الانتباه بالعلاقة $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$، حيث يمنع معامل القياس $\\sqrt{d_k}$ تضخم نواتج الضرب وتلاشي التدرجات في دالة softmax.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Scaled Dot-Product Multi-Head Self-Attention Mechanisms.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تُحسب مصفوفة الانتباه بالعلاقة $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$، حيث يمنع معامل القياس $\\sqrt{d_k}$ تضخم نواتج الضرب وتلاشي التدرجات في دالة softmax.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch3_med_57",
      "titleEn": "[MEDIUM] Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG) - Analysis 57",
      "titleAr": "[مستوى متوسط] النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG) - تحليل 57",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG), what is the precise analytical formulation or operative rule? (Item 57)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 57)",
      "optionsEn": [
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.",
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data."
      ],
      "optionsAr": [
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "يقطع خط RAG الوثائق إلى أجزاء ويولد تضميناتها بترميز كثيف، ويفهرسها بتقنيات الجوار التقريبي HNSW، ويجري بحث تشابه جيب التمام لاستخراج أفضل $k$ أدلة سياقية.",
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش."
      ],
      "correctAnswer": "A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.",
      "correctAnswerEn": "A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.",
      "correctAnswerAr": "يقطع خط RAG الوثائق إلى أجزاء ويولد تضميناتها بترميز كثيف، ويفهرسها بتقنيات الجوار التقريبي HNSW، ويجري بحث تشابه جيب التمام لاستخراج أفضل $k$ أدلة سياقية.",
      "correctIndex": 1,
      "explanationEn": "Analytical Derivation & Properties: A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يقطع خط RAG الوثائق إلى أجزاء ويولد تضميناتها بترميز كثيف، ويفهرسها بتقنيات الجوار التقريبي HNSW، ويجري بحث تشابه جيب التمام لاستخراج أفضل $k$ أدلة سياقية.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يقطع خط RAG الوثائق إلى أجزاء ويولد تضميناتها بترميز كثيف، ويفهرسها بتقنيات الجوار التقريبي HNSW، ويجري بحث تشابه جيب التمام لاستخراج أفضل $k$ أدلة سياقية.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch3_med_58",
      "titleEn": "[MEDIUM] Subword Tokenization (BPE) & Dense Word Embeddings - Analysis 58",
      "titleAr": "[مستوى متوسط] تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة - تحليل 58",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Subword Tokenization (BPE) & Dense Word Embeddings, what is the precise analytical formulation or operative rule? (Item 58)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 58)",
      "optionsEn": [
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.",
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan."
      ],
      "optionsAr": [
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "ترسم تضمينات الكلمات معرّفات الرموز في فضاءات اتجاهية دلالية مستمرة $\\mathbb{R}^d$ تعكس العلاقات الهندسية بين المتجهات القياسات الدلالية مثل: $\\vec{v}_{\\text{ملك}} - \\vec{v}_{\\text{رجل}} + \\vec{v}_{\\text{امرأة}} \\approx \\vec{v}_{\\text{ملكة}}$.",
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG)."
      ],
      "correctAnswer": "Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.",
      "correctAnswerEn": "Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.",
      "correctAnswerAr": "ترسم تضمينات الكلمات معرّفات الرموز في فضاءات اتجاهية دلالية مستمرة $\\mathbb{R}^d$ تعكس العلاقات الهندسية بين المتجهات القياسات الدلالية مثل: $\\vec{v}_{\\text{ملك}} - \\vec{v}_{\\text{رجل}} + \\vec{v}_{\\text{امرأة}} \\approx \\vec{v}_{\\text{ملكة}}$.",
      "correctIndex": 2,
      "explanationEn": "Analytical Derivation & Properties: Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: ترسم تضمينات الكلمات معرّفات الرموز في فضاءات اتجاهية دلالية مستمرة $\\mathbb{R}^d$ تعكس العلاقات الهندسية بين المتجهات القياسات الدلالية مثل: $\\vec{v}_{\\text{ملك}} - \\vec{v}_{\\text{رجل}} + \\vec{v}_{\\text{امرأة}} \\approx \\vec{v}_{\\text{ملكة}}$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Subword Tokenization (BPE) & Dense Word Embeddings.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: ترسم تضمينات الكلمات معرّفات الرموز في فضاءات اتجاهية دلالية مستمرة $\\mathbb{R}^d$ تعكس العلاقات الهندسية بين المتجهات القياسات الدلالية مثل: $\\vec{v}_{\\text{ملك}} - \\vec{v}_{\\text{رجل}} + \\vec{v}_{\\text{امرأة}} \\approx \\vec{v}_{\\text{ملكة}}$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_ai_data_science_ch3_med_59",
      "titleEn": "[MEDIUM] Scaled Dot-Product Multi-Head Self-Attention Mechanisms - Analysis 59",
      "titleAr": "[مستوى متوسط] آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس - تحليل 59",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Scaled Dot-Product Multi-Head Self-Attention Mechanisms, what is the precise analytical formulation or operative rule? (Item 59)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 59)",
      "optionsEn": [
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients."
      ],
      "optionsAr": [
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "تُحسب مصفوفة الانتباه بالعلاقة $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$، حيث يمنع معامل القياس $\\sqrt{d_k}$ تضخم نواتج الضرب وتلاشي التدرجات في دالة softmax."
      ],
      "correctAnswer": "The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.",
      "correctAnswerEn": "The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.",
      "correctAnswerAr": "تُحسب مصفوفة الانتباه بالعلاقة $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$، حيث يمنع معامل القياس $\\sqrt{d_k}$ تضخم نواتج الضرب وتلاشي التدرجات في دالة softmax.",
      "correctIndex": 3,
      "explanationEn": "Analytical Derivation & Properties: The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تُحسب مصفوفة الانتباه بالعلاقة $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$، حيث يمنع معامل القياس $\\sqrt{d_k}$ تضخم نواتج الضرب وتلاشي التدرجات في دالة softmax.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Scaled Dot-Product Multi-Head Self-Attention Mechanisms.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تُحسب مصفوفة الانتباه بالعلاقة $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$، حيث يمنع معامل القياس $\\sqrt{d_k}$ تضخم نواتج الضرب وتلاشي التدرجات في دالة softmax.."
      ],
      "difficulty": "medium"
    }
  ],
  "hots": [
    {
      "id": "th_ai_data_science_ch3_hots_1",
      "titleEn": "[HOTS] Subword Tokenization (BPE) & Dense Word Embeddings - Evaluation 1",
      "titleAr": "[تفكير عليا] تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة - تقييم 1",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Subword Tokenization (BPE) & Dense Word Embeddings: (Problem 1)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة: (مسألة 1)",
      "optionsEn": [
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "لنظام معالجة لغة عربية يتعامل مع الصرف، يؤدي تقطيع كلمة \"فسيكفيكهم\" بـ BPE إلى 4 مقاطع دلالية: `[فـ, سـ, يكفي, كهم]`، مقلصاً قاموس النموذج من $1.2$ مليون كلمة إلى $32,000$ مقطع قياسي بانعدام الرموز المجهولة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.",
      "correctAnswerEn": "For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.",
      "correctAnswerAr": "لنظام معالجة لغة عربية يتعامل مع الصرف، يؤدي تقطيع كلمة \"فسيكفيكهم\" بـ BPE إلى 4 مقاطع دلالية: `[فـ, سـ, يكفي, كهم]`، مقلصاً قاموس النموذج من $1.2$ مليون كلمة إلى $32,000$ مقطع قياسي بانعدام الرموز المجهولة.",
      "correctIndex": 2,
      "explanationEn": "Detailed Solution & Numerical Evaluation: For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: لنظام معالجة لغة عربية يتعامل مع الصرف، يؤدي تقطيع كلمة \"فسيكفيكهم\" بـ BPE إلى 4 مقاطع دلالية: `[فـ, سـ, يكفي, كهم]`، مقلصاً قاموس النموذج من $1.2$ مليون كلمة إلى $32,000$ مقطع قياسي بانعدام الرموز المجهولة.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Subword Tokenization (BPE) & Dense Word Embeddings.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: لنظام معالجة لغة عربية يتعامل مع الصرف، يؤدي تقطيع كلمة \"فسيكفيكهم\" بـ BPE إلى 4 مقاطع دلالية: `[فـ, سـ, يكفي, كهم]`، مقلصاً قاموس النموذج من $1.2$ مليون كلمة إلى $32,000$ مقطع قياسي بانعدام الرموز المجهولة.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch3_hots_2",
      "titleEn": "[HOTS] Scaled Dot-Product Multi-Head Self-Attention Mechanisms - Evaluation 2",
      "titleAr": "[تفكير عليا] آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس - تقييم 2",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Scaled Dot-Product Multi-Head Self-Attention Mechanisms: (Problem 2)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس: (مسألة 2)",
      "optionsEn": [
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions."
      ],
      "optionsAr": [
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "في نموذج Transformer ببعد $d_{model} = 768$ و $12$ رأساً للانتباه، يبلغ بعد الرأس $d_k = 64$. ويضمن القياس بـ $\\frac{1}{\\sqrt{64}} = 0.125$ بقاء تباين الجداء قريباً من $1.0$، مما يحقق استقراراً عددياً لـ softmax."
      ],
      "correctAnswer": "In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions.",
      "correctAnswerEn": "In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions.",
      "correctAnswerAr": "في نموذج Transformer ببعد $d_{model} = 768$ و $12$ رأساً للانتباه، يبلغ بعد الرأس $d_k = 64$. ويضمن القياس بـ $\\frac{1}{\\sqrt{64}} = 0.125$ بقاء تباين الجداء قريباً من $1.0$، مما يحقق استقراراً عددياً لـ softmax.",
      "correctIndex": 3,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في نموذج Transformer ببعد $d_{model} = 768$ و $12$ رأساً للانتباه، يبلغ بعد الرأس $d_k = 64$. ويضمن القياس بـ $\\frac{1}{\\sqrt{64}} = 0.125$ بقاء تباين الجداء قريباً من $1.0$، مما يحقق استقراراً عددياً لـ softmax.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Scaled Dot-Product Multi-Head Self-Attention Mechanisms.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في نموذج Transformer ببعد $d_{model} = 768$ و $12$ رأساً للانتباه، يبلغ بعد الرأس $d_k = 64$. ويضمن القياس بـ $\\frac{1}{\\sqrt{64}} = 0.125$ بقاء تباين الجداء قريباً من $1.0$، مما يحقق استقراراً عددياً لـ softmax.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch3_hots_3",
      "titleEn": "[HOTS] Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG) - Evaluation 3",
      "titleAr": "[تفكير عليا] النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG) - تقييم 3",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG): (Problem 3)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG): (مسألة 3)",
      "optionsEn": [
        "An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "مساعد وزاري للإجابة على الأسئلة القانونية يفهرس 10,000 مادة. بتقسيم النصوص إلى مقاطع من 512 رمزاً مع تداخل $15\\%$ واسترجاع أفضل 4 مقاطع بـ HNSW، انخفض معدل الهلوسة من $28.4\\%$ إلى أقل من $1.2\\%$.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$.",
      "correctAnswerEn": "An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$.",
      "correctAnswerAr": "مساعد وزاري للإجابة على الأسئلة القانونية يفهرس 10,000 مادة. بتقسيم النصوص إلى مقاطع من 512 رمزاً مع تداخل $15\\%$ واسترجاع أفضل 4 مقاطع بـ HNSW، انخفض معدل الهلوسة من $28.4\\%$ إلى أقل من $1.2\\%$.",
      "correctIndex": 0,
      "explanationEn": "Detailed Solution & Numerical Evaluation: An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: مساعد وزاري للإجابة على الأسئلة القانونية يفهرس 10,000 مادة. بتقسيم النصوص إلى مقاطع من 512 رمزاً مع تداخل $15\\%$ واسترجاع أفضل 4 مقاطع بـ HNSW، انخفض معدل الهلوسة من $28.4\\%$ إلى أقل من $1.2\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: مساعد وزاري للإجابة على الأسئلة القانونية يفهرس 10,000 مادة. بتقسيم النصوص إلى مقاطع من 512 رمزاً مع تداخل $15\\%$ واسترجاع أفضل 4 مقاطع بـ HNSW، انخفض معدل الهلوسة من $28.4\\%$ إلى أقل من $1.2\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch3_hots_4",
      "titleEn": "[HOTS] Subword Tokenization (BPE) & Dense Word Embeddings - Evaluation 4",
      "titleAr": "[تفكير عليا] تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة - تقييم 4",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Subword Tokenization (BPE) & Dense Word Embeddings: (Problem 4)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة: (مسألة 4)",
      "optionsEn": [
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "لنظام معالجة لغة عربية يتعامل مع الصرف، يؤدي تقطيع كلمة \"فسيكفيكهم\" بـ BPE إلى 4 مقاطع دلالية: `[فـ, سـ, يكفي, كهم]`، مقلصاً قاموس النموذج من $1.2$ مليون كلمة إلى $32,000$ مقطع قياسي بانعدام الرموز المجهولة.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.",
      "correctAnswerEn": "For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.",
      "correctAnswerAr": "لنظام معالجة لغة عربية يتعامل مع الصرف، يؤدي تقطيع كلمة \"فسيكفيكهم\" بـ BPE إلى 4 مقاطع دلالية: `[فـ, سـ, يكفي, كهم]`، مقلصاً قاموس النموذج من $1.2$ مليون كلمة إلى $32,000$ مقطع قياسي بانعدام الرموز المجهولة.",
      "correctIndex": 1,
      "explanationEn": "Detailed Solution & Numerical Evaluation: For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: لنظام معالجة لغة عربية يتعامل مع الصرف، يؤدي تقطيع كلمة \"فسيكفيكهم\" بـ BPE إلى 4 مقاطع دلالية: `[فـ, سـ, يكفي, كهم]`، مقلصاً قاموس النموذج من $1.2$ مليون كلمة إلى $32,000$ مقطع قياسي بانعدام الرموز المجهولة.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Subword Tokenization (BPE) & Dense Word Embeddings.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: لنظام معالجة لغة عربية يتعامل مع الصرف، يؤدي تقطيع كلمة \"فسيكفيكهم\" بـ BPE إلى 4 مقاطع دلالية: `[فـ, سـ, يكفي, كهم]`، مقلصاً قاموس النموذج من $1.2$ مليون كلمة إلى $32,000$ مقطع قياسي بانعدام الرموز المجهولة.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch3_hots_5",
      "titleEn": "[HOTS] Scaled Dot-Product Multi-Head Self-Attention Mechanisms - Evaluation 5",
      "titleAr": "[تفكير عليا] آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس - تقييم 5",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Scaled Dot-Product Multi-Head Self-Attention Mechanisms: (Problem 5)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس: (مسألة 5)",
      "optionsEn": [
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "في نموذج Transformer ببعد $d_{model} = 768$ و $12$ رأساً للانتباه، يبلغ بعد الرأس $d_k = 64$. ويضمن القياس بـ $\\frac{1}{\\sqrt{64}} = 0.125$ بقاء تباين الجداء قريباً من $1.0$، مما يحقق استقراراً عددياً لـ softmax.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions.",
      "correctAnswerEn": "In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions.",
      "correctAnswerAr": "في نموذج Transformer ببعد $d_{model} = 768$ و $12$ رأساً للانتباه، يبلغ بعد الرأس $d_k = 64$. ويضمن القياس بـ $\\frac{1}{\\sqrt{64}} = 0.125$ بقاء تباين الجداء قريباً من $1.0$، مما يحقق استقراراً عددياً لـ softmax.",
      "correctIndex": 2,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في نموذج Transformer ببعد $d_{model} = 768$ و $12$ رأساً للانتباه، يبلغ بعد الرأس $d_k = 64$. ويضمن القياس بـ $\\frac{1}{\\sqrt{64}} = 0.125$ بقاء تباين الجداء قريباً من $1.0$، مما يحقق استقراراً عددياً لـ softmax.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Scaled Dot-Product Multi-Head Self-Attention Mechanisms.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في نموذج Transformer ببعد $d_{model} = 768$ و $12$ رأساً للانتباه، يبلغ بعد الرأس $d_k = 64$. ويضمن القياس بـ $\\frac{1}{\\sqrt{64}} = 0.125$ بقاء تباين الجداء قريباً من $1.0$، مما يحقق استقراراً عددياً لـ softmax.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch3_hots_6",
      "titleEn": "[HOTS] Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG) - Evaluation 6",
      "titleAr": "[تفكير عليا] النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG) - تقييم 6",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG): (Problem 6)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG): (مسألة 6)",
      "optionsEn": [
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$."
      ],
      "optionsAr": [
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "مساعد وزاري للإجابة على الأسئلة القانونية يفهرس 10,000 مادة. بتقسيم النصوص إلى مقاطع من 512 رمزاً مع تداخل $15\\%$ واسترجاع أفضل 4 مقاطع بـ HNSW، انخفض معدل الهلوسة من $28.4\\%$ إلى أقل من $1.2\\%$."
      ],
      "correctAnswer": "An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$.",
      "correctAnswerEn": "An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$.",
      "correctAnswerAr": "مساعد وزاري للإجابة على الأسئلة القانونية يفهرس 10,000 مادة. بتقسيم النصوص إلى مقاطع من 512 رمزاً مع تداخل $15\\%$ واسترجاع أفضل 4 مقاطع بـ HNSW، انخفض معدل الهلوسة من $28.4\\%$ إلى أقل من $1.2\\%$.",
      "correctIndex": 3,
      "explanationEn": "Detailed Solution & Numerical Evaluation: An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: مساعد وزاري للإجابة على الأسئلة القانونية يفهرس 10,000 مادة. بتقسيم النصوص إلى مقاطع من 512 رمزاً مع تداخل $15\\%$ واسترجاع أفضل 4 مقاطع بـ HNSW، انخفض معدل الهلوسة من $28.4\\%$ إلى أقل من $1.2\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: مساعد وزاري للإجابة على الأسئلة القانونية يفهرس 10,000 مادة. بتقسيم النصوص إلى مقاطع من 512 رمزاً مع تداخل $15\\%$ واسترجاع أفضل 4 مقاطع بـ HNSW، انخفض معدل الهلوسة من $28.4\\%$ إلى أقل من $1.2\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch3_hots_7",
      "titleEn": "[HOTS] Subword Tokenization (BPE) & Dense Word Embeddings - Evaluation 7",
      "titleAr": "[تفكير عليا] تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة - تقييم 7",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Subword Tokenization (BPE) & Dense Word Embeddings: (Problem 7)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة: (مسألة 7)",
      "optionsEn": [
        "For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "لنظام معالجة لغة عربية يتعامل مع الصرف، يؤدي تقطيع كلمة \"فسيكفيكهم\" بـ BPE إلى 4 مقاطع دلالية: `[فـ, سـ, يكفي, كهم]`، مقلصاً قاموس النموذج من $1.2$ مليون كلمة إلى $32,000$ مقطع قياسي بانعدام الرموز المجهولة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.",
      "correctAnswerEn": "For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.",
      "correctAnswerAr": "لنظام معالجة لغة عربية يتعامل مع الصرف، يؤدي تقطيع كلمة \"فسيكفيكهم\" بـ BPE إلى 4 مقاطع دلالية: `[فـ, سـ, يكفي, كهم]`، مقلصاً قاموس النموذج من $1.2$ مليون كلمة إلى $32,000$ مقطع قياسي بانعدام الرموز المجهولة.",
      "correctIndex": 0,
      "explanationEn": "Detailed Solution & Numerical Evaluation: For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: لنظام معالجة لغة عربية يتعامل مع الصرف، يؤدي تقطيع كلمة \"فسيكفيكهم\" بـ BPE إلى 4 مقاطع دلالية: `[فـ, سـ, يكفي, كهم]`، مقلصاً قاموس النموذج من $1.2$ مليون كلمة إلى $32,000$ مقطع قياسي بانعدام الرموز المجهولة.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Subword Tokenization (BPE) & Dense Word Embeddings.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: لنظام معالجة لغة عربية يتعامل مع الصرف، يؤدي تقطيع كلمة \"فسيكفيكهم\" بـ BPE إلى 4 مقاطع دلالية: `[فـ, سـ, يكفي, كهم]`، مقلصاً قاموس النموذج من $1.2$ مليون كلمة إلى $32,000$ مقطع قياسي بانعدام الرموز المجهولة.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch3_hots_8",
      "titleEn": "[HOTS] Scaled Dot-Product Multi-Head Self-Attention Mechanisms - Evaluation 8",
      "titleAr": "[تفكير عليا] آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس - تقييم 8",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Scaled Dot-Product Multi-Head Self-Attention Mechanisms: (Problem 8)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس: (مسألة 8)",
      "optionsEn": [
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "في نموذج Transformer ببعد $d_{model} = 768$ و $12$ رأساً للانتباه، يبلغ بعد الرأس $d_k = 64$. ويضمن القياس بـ $\\frac{1}{\\sqrt{64}} = 0.125$ بقاء تباين الجداء قريباً من $1.0$، مما يحقق استقراراً عددياً لـ softmax.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions.",
      "correctAnswerEn": "In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions.",
      "correctAnswerAr": "في نموذج Transformer ببعد $d_{model} = 768$ و $12$ رأساً للانتباه، يبلغ بعد الرأس $d_k = 64$. ويضمن القياس بـ $\\frac{1}{\\sqrt{64}} = 0.125$ بقاء تباين الجداء قريباً من $1.0$، مما يحقق استقراراً عددياً لـ softmax.",
      "correctIndex": 1,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في نموذج Transformer ببعد $d_{model} = 768$ و $12$ رأساً للانتباه، يبلغ بعد الرأس $d_k = 64$. ويضمن القياس بـ $\\frac{1}{\\sqrt{64}} = 0.125$ بقاء تباين الجداء قريباً من $1.0$، مما يحقق استقراراً عددياً لـ softmax.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Scaled Dot-Product Multi-Head Self-Attention Mechanisms.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في نموذج Transformer ببعد $d_{model} = 768$ و $12$ رأساً للانتباه، يبلغ بعد الرأس $d_k = 64$. ويضمن القياس بـ $\\frac{1}{\\sqrt{64}} = 0.125$ بقاء تباين الجداء قريباً من $1.0$، مما يحقق استقراراً عددياً لـ softmax.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch3_hots_9",
      "titleEn": "[HOTS] Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG) - Evaluation 9",
      "titleAr": "[تفكير عليا] النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG) - تقييم 9",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG): (Problem 9)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG): (مسألة 9)",
      "optionsEn": [
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "مساعد وزاري للإجابة على الأسئلة القانونية يفهرس 10,000 مادة. بتقسيم النصوص إلى مقاطع من 512 رمزاً مع تداخل $15\\%$ واسترجاع أفضل 4 مقاطع بـ HNSW، انخفض معدل الهلوسة من $28.4\\%$ إلى أقل من $1.2\\%$.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$.",
      "correctAnswerEn": "An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$.",
      "correctAnswerAr": "مساعد وزاري للإجابة على الأسئلة القانونية يفهرس 10,000 مادة. بتقسيم النصوص إلى مقاطع من 512 رمزاً مع تداخل $15\\%$ واسترجاع أفضل 4 مقاطع بـ HNSW، انخفض معدل الهلوسة من $28.4\\%$ إلى أقل من $1.2\\%$.",
      "correctIndex": 2,
      "explanationEn": "Detailed Solution & Numerical Evaluation: An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: مساعد وزاري للإجابة على الأسئلة القانونية يفهرس 10,000 مادة. بتقسيم النصوص إلى مقاطع من 512 رمزاً مع تداخل $15\\%$ واسترجاع أفضل 4 مقاطع بـ HNSW، انخفض معدل الهلوسة من $28.4\\%$ إلى أقل من $1.2\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: مساعد وزاري للإجابة على الأسئلة القانونية يفهرس 10,000 مادة. بتقسيم النصوص إلى مقاطع من 512 رمزاً مع تداخل $15\\%$ واسترجاع أفضل 4 مقاطع بـ HNSW، انخفض معدل الهلوسة من $28.4\\%$ إلى أقل من $1.2\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch3_hots_10",
      "titleEn": "[HOTS] Subword Tokenization (BPE) & Dense Word Embeddings - Evaluation 10",
      "titleAr": "[تفكير عليا] تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة - تقييم 10",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Subword Tokenization (BPE) & Dense Word Embeddings: (Problem 10)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة: (مسألة 10)",
      "optionsEn": [
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens."
      ],
      "optionsAr": [
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "لنظام معالجة لغة عربية يتعامل مع الصرف، يؤدي تقطيع كلمة \"فسيكفيكهم\" بـ BPE إلى 4 مقاطع دلالية: `[فـ, سـ, يكفي, كهم]`، مقلصاً قاموس النموذج من $1.2$ مليون كلمة إلى $32,000$ مقطع قياسي بانعدام الرموز المجهولة."
      ],
      "correctAnswer": "For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.",
      "correctAnswerEn": "For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.",
      "correctAnswerAr": "لنظام معالجة لغة عربية يتعامل مع الصرف، يؤدي تقطيع كلمة \"فسيكفيكهم\" بـ BPE إلى 4 مقاطع دلالية: `[فـ, سـ, يكفي, كهم]`، مقلصاً قاموس النموذج من $1.2$ مليون كلمة إلى $32,000$ مقطع قياسي بانعدام الرموز المجهولة.",
      "correctIndex": 3,
      "explanationEn": "Detailed Solution & Numerical Evaluation: For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: لنظام معالجة لغة عربية يتعامل مع الصرف، يؤدي تقطيع كلمة \"فسيكفيكهم\" بـ BPE إلى 4 مقاطع دلالية: `[فـ, سـ, يكفي, كهم]`، مقلصاً قاموس النموذج من $1.2$ مليون كلمة إلى $32,000$ مقطع قياسي بانعدام الرموز المجهولة.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Subword Tokenization (BPE) & Dense Word Embeddings.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: لنظام معالجة لغة عربية يتعامل مع الصرف، يؤدي تقطيع كلمة \"فسيكفيكهم\" بـ BPE إلى 4 مقاطع دلالية: `[فـ, سـ, يكفي, كهم]`، مقلصاً قاموس النموذج من $1.2$ مليون كلمة إلى $32,000$ مقطع قياسي بانعدام الرموز المجهولة.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch3_hots_11",
      "titleEn": "[HOTS] Scaled Dot-Product Multi-Head Self-Attention Mechanisms - Evaluation 11",
      "titleAr": "[تفكير عليا] آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس - تقييم 11",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Scaled Dot-Product Multi-Head Self-Attention Mechanisms: (Problem 11)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس: (مسألة 11)",
      "optionsEn": [
        "In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "في نموذج Transformer ببعد $d_{model} = 768$ و $12$ رأساً للانتباه، يبلغ بعد الرأس $d_k = 64$. ويضمن القياس بـ $\\frac{1}{\\sqrt{64}} = 0.125$ بقاء تباين الجداء قريباً من $1.0$، مما يحقق استقراراً عددياً لـ softmax.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions.",
      "correctAnswerEn": "In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions.",
      "correctAnswerAr": "في نموذج Transformer ببعد $d_{model} = 768$ و $12$ رأساً للانتباه، يبلغ بعد الرأس $d_k = 64$. ويضمن القياس بـ $\\frac{1}{\\sqrt{64}} = 0.125$ بقاء تباين الجداء قريباً من $1.0$، مما يحقق استقراراً عددياً لـ softmax.",
      "correctIndex": 0,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في نموذج Transformer ببعد $d_{model} = 768$ و $12$ رأساً للانتباه، يبلغ بعد الرأس $d_k = 64$. ويضمن القياس بـ $\\frac{1}{\\sqrt{64}} = 0.125$ بقاء تباين الجداء قريباً من $1.0$، مما يحقق استقراراً عددياً لـ softmax.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Scaled Dot-Product Multi-Head Self-Attention Mechanisms.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في نموذج Transformer ببعد $d_{model} = 768$ و $12$ رأساً للانتباه، يبلغ بعد الرأس $d_k = 64$. ويضمن القياس بـ $\\frac{1}{\\sqrt{64}} = 0.125$ بقاء تباين الجداء قريباً من $1.0$، مما يحقق استقراراً عددياً لـ softmax.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch3_hots_12",
      "titleEn": "[HOTS] Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG) - Evaluation 12",
      "titleAr": "[تفكير عليا] النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG) - تقييم 12",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG): (Problem 12)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG): (مسألة 12)",
      "optionsEn": [
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "مساعد وزاري للإجابة على الأسئلة القانونية يفهرس 10,000 مادة. بتقسيم النصوص إلى مقاطع من 512 رمزاً مع تداخل $15\\%$ واسترجاع أفضل 4 مقاطع بـ HNSW، انخفض معدل الهلوسة من $28.4\\%$ إلى أقل من $1.2\\%$.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$.",
      "correctAnswerEn": "An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$.",
      "correctAnswerAr": "مساعد وزاري للإجابة على الأسئلة القانونية يفهرس 10,000 مادة. بتقسيم النصوص إلى مقاطع من 512 رمزاً مع تداخل $15\\%$ واسترجاع أفضل 4 مقاطع بـ HNSW، انخفض معدل الهلوسة من $28.4\\%$ إلى أقل من $1.2\\%$.",
      "correctIndex": 1,
      "explanationEn": "Detailed Solution & Numerical Evaluation: An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: مساعد وزاري للإجابة على الأسئلة القانونية يفهرس 10,000 مادة. بتقسيم النصوص إلى مقاطع من 512 رمزاً مع تداخل $15\\%$ واسترجاع أفضل 4 مقاطع بـ HNSW، انخفض معدل الهلوسة من $28.4\\%$ إلى أقل من $1.2\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: مساعد وزاري للإجابة على الأسئلة القانونية يفهرس 10,000 مادة. بتقسيم النصوص إلى مقاطع من 512 رمزاً مع تداخل $15\\%$ واسترجاع أفضل 4 مقاطع بـ HNSW، انخفض معدل الهلوسة من $28.4\\%$ إلى أقل من $1.2\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch3_hots_13",
      "titleEn": "[HOTS] Subword Tokenization (BPE) & Dense Word Embeddings - Evaluation 13",
      "titleAr": "[تفكير عليا] تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة - تقييم 13",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Subword Tokenization (BPE) & Dense Word Embeddings: (Problem 13)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة: (مسألة 13)",
      "optionsEn": [
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "لنظام معالجة لغة عربية يتعامل مع الصرف، يؤدي تقطيع كلمة \"فسيكفيكهم\" بـ BPE إلى 4 مقاطع دلالية: `[فـ, سـ, يكفي, كهم]`، مقلصاً قاموس النموذج من $1.2$ مليون كلمة إلى $32,000$ مقطع قياسي بانعدام الرموز المجهولة.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.",
      "correctAnswerEn": "For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.",
      "correctAnswerAr": "لنظام معالجة لغة عربية يتعامل مع الصرف، يؤدي تقطيع كلمة \"فسيكفيكهم\" بـ BPE إلى 4 مقاطع دلالية: `[فـ, سـ, يكفي, كهم]`، مقلصاً قاموس النموذج من $1.2$ مليون كلمة إلى $32,000$ مقطع قياسي بانعدام الرموز المجهولة.",
      "correctIndex": 2,
      "explanationEn": "Detailed Solution & Numerical Evaluation: For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: لنظام معالجة لغة عربية يتعامل مع الصرف، يؤدي تقطيع كلمة \"فسيكفيكهم\" بـ BPE إلى 4 مقاطع دلالية: `[فـ, سـ, يكفي, كهم]`، مقلصاً قاموس النموذج من $1.2$ مليون كلمة إلى $32,000$ مقطع قياسي بانعدام الرموز المجهولة.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Subword Tokenization (BPE) & Dense Word Embeddings.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: لنظام معالجة لغة عربية يتعامل مع الصرف، يؤدي تقطيع كلمة \"فسيكفيكهم\" بـ BPE إلى 4 مقاطع دلالية: `[فـ, سـ, يكفي, كهم]`، مقلصاً قاموس النموذج من $1.2$ مليون كلمة إلى $32,000$ مقطع قياسي بانعدام الرموز المجهولة.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch3_hots_14",
      "titleEn": "[HOTS] Scaled Dot-Product Multi-Head Self-Attention Mechanisms - Evaluation 14",
      "titleAr": "[تفكير عليا] آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس - تقييم 14",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Scaled Dot-Product Multi-Head Self-Attention Mechanisms: (Problem 14)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس: (مسألة 14)",
      "optionsEn": [
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions."
      ],
      "optionsAr": [
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "في نموذج Transformer ببعد $d_{model} = 768$ و $12$ رأساً للانتباه، يبلغ بعد الرأس $d_k = 64$. ويضمن القياس بـ $\\frac{1}{\\sqrt{64}} = 0.125$ بقاء تباين الجداء قريباً من $1.0$، مما يحقق استقراراً عددياً لـ softmax."
      ],
      "correctAnswer": "In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions.",
      "correctAnswerEn": "In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions.",
      "correctAnswerAr": "في نموذج Transformer ببعد $d_{model} = 768$ و $12$ رأساً للانتباه، يبلغ بعد الرأس $d_k = 64$. ويضمن القياس بـ $\\frac{1}{\\sqrt{64}} = 0.125$ بقاء تباين الجداء قريباً من $1.0$، مما يحقق استقراراً عددياً لـ softmax.",
      "correctIndex": 3,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في نموذج Transformer ببعد $d_{model} = 768$ و $12$ رأساً للانتباه، يبلغ بعد الرأس $d_k = 64$. ويضمن القياس بـ $\\frac{1}{\\sqrt{64}} = 0.125$ بقاء تباين الجداء قريباً من $1.0$، مما يحقق استقراراً عددياً لـ softmax.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Scaled Dot-Product Multi-Head Self-Attention Mechanisms.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في نموذج Transformer ببعد $d_{model} = 768$ و $12$ رأساً للانتباه، يبلغ بعد الرأس $d_k = 64$. ويضمن القياس بـ $\\frac{1}{\\sqrt{64}} = 0.125$ بقاء تباين الجداء قريباً من $1.0$، مما يحقق استقراراً عددياً لـ softmax.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch3_hots_15",
      "titleEn": "[HOTS] Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG) - Evaluation 15",
      "titleAr": "[تفكير عليا] النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG) - تقييم 15",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG): (Problem 15)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG): (مسألة 15)",
      "optionsEn": [
        "An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "مساعد وزاري للإجابة على الأسئلة القانونية يفهرس 10,000 مادة. بتقسيم النصوص إلى مقاطع من 512 رمزاً مع تداخل $15\\%$ واسترجاع أفضل 4 مقاطع بـ HNSW، انخفض معدل الهلوسة من $28.4\\%$ إلى أقل من $1.2\\%$.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$.",
      "correctAnswerEn": "An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$.",
      "correctAnswerAr": "مساعد وزاري للإجابة على الأسئلة القانونية يفهرس 10,000 مادة. بتقسيم النصوص إلى مقاطع من 512 رمزاً مع تداخل $15\\%$ واسترجاع أفضل 4 مقاطع بـ HNSW، انخفض معدل الهلوسة من $28.4\\%$ إلى أقل من $1.2\\%$.",
      "correctIndex": 0,
      "explanationEn": "Detailed Solution & Numerical Evaluation: An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: مساعد وزاري للإجابة على الأسئلة القانونية يفهرس 10,000 مادة. بتقسيم النصوص إلى مقاطع من 512 رمزاً مع تداخل $15\\%$ واسترجاع أفضل 4 مقاطع بـ HNSW، انخفض معدل الهلوسة من $28.4\\%$ إلى أقل من $1.2\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: مساعد وزاري للإجابة على الأسئلة القانونية يفهرس 10,000 مادة. بتقسيم النصوص إلى مقاطع من 512 رمزاً مع تداخل $15\\%$ واسترجاع أفضل 4 مقاطع بـ HNSW، انخفض معدل الهلوسة من $28.4\\%$ إلى أقل من $1.2\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch3_hots_16",
      "titleEn": "[HOTS] Subword Tokenization (BPE) & Dense Word Embeddings - Evaluation 16",
      "titleAr": "[تفكير عليا] تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة - تقييم 16",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Subword Tokenization (BPE) & Dense Word Embeddings: (Problem 16)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة: (مسألة 16)",
      "optionsEn": [
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "لنظام معالجة لغة عربية يتعامل مع الصرف، يؤدي تقطيع كلمة \"فسيكفيكهم\" بـ BPE إلى 4 مقاطع دلالية: `[فـ, سـ, يكفي, كهم]`، مقلصاً قاموس النموذج من $1.2$ مليون كلمة إلى $32,000$ مقطع قياسي بانعدام الرموز المجهولة.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.",
      "correctAnswerEn": "For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.",
      "correctAnswerAr": "لنظام معالجة لغة عربية يتعامل مع الصرف، يؤدي تقطيع كلمة \"فسيكفيكهم\" بـ BPE إلى 4 مقاطع دلالية: `[فـ, سـ, يكفي, كهم]`، مقلصاً قاموس النموذج من $1.2$ مليون كلمة إلى $32,000$ مقطع قياسي بانعدام الرموز المجهولة.",
      "correctIndex": 1,
      "explanationEn": "Detailed Solution & Numerical Evaluation: For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: لنظام معالجة لغة عربية يتعامل مع الصرف، يؤدي تقطيع كلمة \"فسيكفيكهم\" بـ BPE إلى 4 مقاطع دلالية: `[فـ, سـ, يكفي, كهم]`، مقلصاً قاموس النموذج من $1.2$ مليون كلمة إلى $32,000$ مقطع قياسي بانعدام الرموز المجهولة.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Subword Tokenization (BPE) & Dense Word Embeddings.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: لنظام معالجة لغة عربية يتعامل مع الصرف، يؤدي تقطيع كلمة \"فسيكفيكهم\" بـ BPE إلى 4 مقاطع دلالية: `[فـ, سـ, يكفي, كهم]`، مقلصاً قاموس النموذج من $1.2$ مليون كلمة إلى $32,000$ مقطع قياسي بانعدام الرموز المجهولة.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch3_hots_17",
      "titleEn": "[HOTS] Scaled Dot-Product Multi-Head Self-Attention Mechanisms - Evaluation 17",
      "titleAr": "[تفكير عليا] آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس - تقييم 17",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Scaled Dot-Product Multi-Head Self-Attention Mechanisms: (Problem 17)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس: (مسألة 17)",
      "optionsEn": [
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "في نموذج Transformer ببعد $d_{model} = 768$ و $12$ رأساً للانتباه، يبلغ بعد الرأس $d_k = 64$. ويضمن القياس بـ $\\frac{1}{\\sqrt{64}} = 0.125$ بقاء تباين الجداء قريباً من $1.0$، مما يحقق استقراراً عددياً لـ softmax.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions.",
      "correctAnswerEn": "In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions.",
      "correctAnswerAr": "في نموذج Transformer ببعد $d_{model} = 768$ و $12$ رأساً للانتباه، يبلغ بعد الرأس $d_k = 64$. ويضمن القياس بـ $\\frac{1}{\\sqrt{64}} = 0.125$ بقاء تباين الجداء قريباً من $1.0$، مما يحقق استقراراً عددياً لـ softmax.",
      "correctIndex": 2,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في نموذج Transformer ببعد $d_{model} = 768$ و $12$ رأساً للانتباه، يبلغ بعد الرأس $d_k = 64$. ويضمن القياس بـ $\\frac{1}{\\sqrt{64}} = 0.125$ بقاء تباين الجداء قريباً من $1.0$، مما يحقق استقراراً عددياً لـ softmax.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Scaled Dot-Product Multi-Head Self-Attention Mechanisms.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في نموذج Transformer ببعد $d_{model} = 768$ و $12$ رأساً للانتباه، يبلغ بعد الرأس $d_k = 64$. ويضمن القياس بـ $\\frac{1}{\\sqrt{64}} = 0.125$ بقاء تباين الجداء قريباً من $1.0$، مما يحقق استقراراً عددياً لـ softmax.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch3_hots_18",
      "titleEn": "[HOTS] Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG) - Evaluation 18",
      "titleAr": "[تفكير عليا] النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG) - تقييم 18",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG): (Problem 18)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG): (مسألة 18)",
      "optionsEn": [
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$."
      ],
      "optionsAr": [
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "مساعد وزاري للإجابة على الأسئلة القانونية يفهرس 10,000 مادة. بتقسيم النصوص إلى مقاطع من 512 رمزاً مع تداخل $15\\%$ واسترجاع أفضل 4 مقاطع بـ HNSW، انخفض معدل الهلوسة من $28.4\\%$ إلى أقل من $1.2\\%$."
      ],
      "correctAnswer": "An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$.",
      "correctAnswerEn": "An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$.",
      "correctAnswerAr": "مساعد وزاري للإجابة على الأسئلة القانونية يفهرس 10,000 مادة. بتقسيم النصوص إلى مقاطع من 512 رمزاً مع تداخل $15\\%$ واسترجاع أفضل 4 مقاطع بـ HNSW، انخفض معدل الهلوسة من $28.4\\%$ إلى أقل من $1.2\\%$.",
      "correctIndex": 3,
      "explanationEn": "Detailed Solution & Numerical Evaluation: An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: مساعد وزاري للإجابة على الأسئلة القانونية يفهرس 10,000 مادة. بتقسيم النصوص إلى مقاطع من 512 رمزاً مع تداخل $15\\%$ واسترجاع أفضل 4 مقاطع بـ HNSW، انخفض معدل الهلوسة من $28.4\\%$ إلى أقل من $1.2\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: مساعد وزاري للإجابة على الأسئلة القانونية يفهرس 10,000 مادة. بتقسيم النصوص إلى مقاطع من 512 رمزاً مع تداخل $15\\%$ واسترجاع أفضل 4 مقاطع بـ HNSW، انخفض معدل الهلوسة من $28.4\\%$ إلى أقل من $1.2\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch3_hots_19",
      "titleEn": "[HOTS] Subword Tokenization (BPE) & Dense Word Embeddings - Evaluation 19",
      "titleAr": "[تفكير عليا] تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة - تقييم 19",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Subword Tokenization (BPE) & Dense Word Embeddings: (Problem 19)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة: (مسألة 19)",
      "optionsEn": [
        "For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "لنظام معالجة لغة عربية يتعامل مع الصرف، يؤدي تقطيع كلمة \"فسيكفيكهم\" بـ BPE إلى 4 مقاطع دلالية: `[فـ, سـ, يكفي, كهم]`، مقلصاً قاموس النموذج من $1.2$ مليون كلمة إلى $32,000$ مقطع قياسي بانعدام الرموز المجهولة.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.",
      "correctAnswerEn": "For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.",
      "correctAnswerAr": "لنظام معالجة لغة عربية يتعامل مع الصرف، يؤدي تقطيع كلمة \"فسيكفيكهم\" بـ BPE إلى 4 مقاطع دلالية: `[فـ, سـ, يكفي, كهم]`، مقلصاً قاموس النموذج من $1.2$ مليون كلمة إلى $32,000$ مقطع قياسي بانعدام الرموز المجهولة.",
      "correctIndex": 0,
      "explanationEn": "Detailed Solution & Numerical Evaluation: For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: لنظام معالجة لغة عربية يتعامل مع الصرف، يؤدي تقطيع كلمة \"فسيكفيكهم\" بـ BPE إلى 4 مقاطع دلالية: `[فـ, سـ, يكفي, كهم]`، مقلصاً قاموس النموذج من $1.2$ مليون كلمة إلى $32,000$ مقطع قياسي بانعدام الرموز المجهولة.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Subword Tokenization (BPE) & Dense Word Embeddings.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: لنظام معالجة لغة عربية يتعامل مع الصرف، يؤدي تقطيع كلمة \"فسيكفيكهم\" بـ BPE إلى 4 مقاطع دلالية: `[فـ, سـ, يكفي, كهم]`، مقلصاً قاموس النموذج من $1.2$ مليون كلمة إلى $32,000$ مقطع قياسي بانعدام الرموز المجهولة.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch3_hots_20",
      "titleEn": "[HOTS] Scaled Dot-Product Multi-Head Self-Attention Mechanisms - Evaluation 20",
      "titleAr": "[تفكير عليا] آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس - تقييم 20",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Scaled Dot-Product Multi-Head Self-Attention Mechanisms: (Problem 20)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس: (مسألة 20)",
      "optionsEn": [
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "في نموذج Transformer ببعد $d_{model} = 768$ و $12$ رأساً للانتباه، يبلغ بعد الرأس $d_k = 64$. ويضمن القياس بـ $\\frac{1}{\\sqrt{64}} = 0.125$ بقاء تباين الجداء قريباً من $1.0$، مما يحقق استقراراً عددياً لـ softmax.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions.",
      "correctAnswerEn": "In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions.",
      "correctAnswerAr": "في نموذج Transformer ببعد $d_{model} = 768$ و $12$ رأساً للانتباه، يبلغ بعد الرأس $d_k = 64$. ويضمن القياس بـ $\\frac{1}{\\sqrt{64}} = 0.125$ بقاء تباين الجداء قريباً من $1.0$، مما يحقق استقراراً عددياً لـ softmax.",
      "correctIndex": 1,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في نموذج Transformer ببعد $d_{model} = 768$ و $12$ رأساً للانتباه، يبلغ بعد الرأس $d_k = 64$. ويضمن القياس بـ $\\frac{1}{\\sqrt{64}} = 0.125$ بقاء تباين الجداء قريباً من $1.0$، مما يحقق استقراراً عددياً لـ softmax.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Scaled Dot-Product Multi-Head Self-Attention Mechanisms.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في نموذج Transformer ببعد $d_{model} = 768$ و $12$ رأساً للانتباه، يبلغ بعد الرأس $d_k = 64$. ويضمن القياس بـ $\\frac{1}{\\sqrt{64}} = 0.125$ بقاء تباين الجداء قريباً من $1.0$، مما يحقق استقراراً عددياً لـ softmax.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch3_hots_21",
      "titleEn": "[HOTS] Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG) - Evaluation 21",
      "titleAr": "[تفكير عليا] النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG) - تقييم 21",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG): (Problem 21)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG): (مسألة 21)",
      "optionsEn": [
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "مساعد وزاري للإجابة على الأسئلة القانونية يفهرس 10,000 مادة. بتقسيم النصوص إلى مقاطع من 512 رمزاً مع تداخل $15\\%$ واسترجاع أفضل 4 مقاطع بـ HNSW، انخفض معدل الهلوسة من $28.4\\%$ إلى أقل من $1.2\\%$.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$.",
      "correctAnswerEn": "An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$.",
      "correctAnswerAr": "مساعد وزاري للإجابة على الأسئلة القانونية يفهرس 10,000 مادة. بتقسيم النصوص إلى مقاطع من 512 رمزاً مع تداخل $15\\%$ واسترجاع أفضل 4 مقاطع بـ HNSW، انخفض معدل الهلوسة من $28.4\\%$ إلى أقل من $1.2\\%$.",
      "correctIndex": 2,
      "explanationEn": "Detailed Solution & Numerical Evaluation: An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: مساعد وزاري للإجابة على الأسئلة القانونية يفهرس 10,000 مادة. بتقسيم النصوص إلى مقاطع من 512 رمزاً مع تداخل $15\\%$ واسترجاع أفضل 4 مقاطع بـ HNSW، انخفض معدل الهلوسة من $28.4\\%$ إلى أقل من $1.2\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: مساعد وزاري للإجابة على الأسئلة القانونية يفهرس 10,000 مادة. بتقسيم النصوص إلى مقاطع من 512 رمزاً مع تداخل $15\\%$ واسترجاع أفضل 4 مقاطع بـ HNSW، انخفض معدل الهلوسة من $28.4\\%$ إلى أقل من $1.2\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch3_hots_22",
      "titleEn": "[HOTS] Subword Tokenization (BPE) & Dense Word Embeddings - Evaluation 22",
      "titleAr": "[تفكير عليا] تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة - تقييم 22",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Subword Tokenization (BPE) & Dense Word Embeddings: (Problem 22)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة: (مسألة 22)",
      "optionsEn": [
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens."
      ],
      "optionsAr": [
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "لنظام معالجة لغة عربية يتعامل مع الصرف، يؤدي تقطيع كلمة \"فسيكفيكهم\" بـ BPE إلى 4 مقاطع دلالية: `[فـ, سـ, يكفي, كهم]`، مقلصاً قاموس النموذج من $1.2$ مليون كلمة إلى $32,000$ مقطع قياسي بانعدام الرموز المجهولة."
      ],
      "correctAnswer": "For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.",
      "correctAnswerEn": "For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.",
      "correctAnswerAr": "لنظام معالجة لغة عربية يتعامل مع الصرف، يؤدي تقطيع كلمة \"فسيكفيكهم\" بـ BPE إلى 4 مقاطع دلالية: `[فـ, سـ, يكفي, كهم]`، مقلصاً قاموس النموذج من $1.2$ مليون كلمة إلى $32,000$ مقطع قياسي بانعدام الرموز المجهولة.",
      "correctIndex": 3,
      "explanationEn": "Detailed Solution & Numerical Evaluation: For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: لنظام معالجة لغة عربية يتعامل مع الصرف، يؤدي تقطيع كلمة \"فسيكفيكهم\" بـ BPE إلى 4 مقاطع دلالية: `[فـ, سـ, يكفي, كهم]`، مقلصاً قاموس النموذج من $1.2$ مليون كلمة إلى $32,000$ مقطع قياسي بانعدام الرموز المجهولة.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Subword Tokenization (BPE) & Dense Word Embeddings.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: لنظام معالجة لغة عربية يتعامل مع الصرف، يؤدي تقطيع كلمة \"فسيكفيكهم\" بـ BPE إلى 4 مقاطع دلالية: `[فـ, سـ, يكفي, كهم]`، مقلصاً قاموس النموذج من $1.2$ مليون كلمة إلى $32,000$ مقطع قياسي بانعدام الرموز المجهولة.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch3_hots_23",
      "titleEn": "[HOTS] Scaled Dot-Product Multi-Head Self-Attention Mechanisms - Evaluation 23",
      "titleAr": "[تفكير عليا] آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس - تقييم 23",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Scaled Dot-Product Multi-Head Self-Attention Mechanisms: (Problem 23)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس: (مسألة 23)",
      "optionsEn": [
        "In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "في نموذج Transformer ببعد $d_{model} = 768$ و $12$ رأساً للانتباه، يبلغ بعد الرأس $d_k = 64$. ويضمن القياس بـ $\\frac{1}{\\sqrt{64}} = 0.125$ بقاء تباين الجداء قريباً من $1.0$، مما يحقق استقراراً عددياً لـ softmax.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions.",
      "correctAnswerEn": "In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions.",
      "correctAnswerAr": "في نموذج Transformer ببعد $d_{model} = 768$ و $12$ رأساً للانتباه، يبلغ بعد الرأس $d_k = 64$. ويضمن القياس بـ $\\frac{1}{\\sqrt{64}} = 0.125$ بقاء تباين الجداء قريباً من $1.0$، مما يحقق استقراراً عددياً لـ softmax.",
      "correctIndex": 0,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في نموذج Transformer ببعد $d_{model} = 768$ و $12$ رأساً للانتباه، يبلغ بعد الرأس $d_k = 64$. ويضمن القياس بـ $\\frac{1}{\\sqrt{64}} = 0.125$ بقاء تباين الجداء قريباً من $1.0$، مما يحقق استقراراً عددياً لـ softmax.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Scaled Dot-Product Multi-Head Self-Attention Mechanisms.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في نموذج Transformer ببعد $d_{model} = 768$ و $12$ رأساً للانتباه، يبلغ بعد الرأس $d_k = 64$. ويضمن القياس بـ $\\frac{1}{\\sqrt{64}} = 0.125$ بقاء تباين الجداء قريباً من $1.0$، مما يحقق استقراراً عددياً لـ softmax.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch3_hots_24",
      "titleEn": "[HOTS] Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG) - Evaluation 24",
      "titleAr": "[تفكير عليا] النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG) - تقييم 24",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG): (Problem 24)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG): (مسألة 24)",
      "optionsEn": [
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "مساعد وزاري للإجابة على الأسئلة القانونية يفهرس 10,000 مادة. بتقسيم النصوص إلى مقاطع من 512 رمزاً مع تداخل $15\\%$ واسترجاع أفضل 4 مقاطع بـ HNSW، انخفض معدل الهلوسة من $28.4\\%$ إلى أقل من $1.2\\%$.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$.",
      "correctAnswerEn": "An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$.",
      "correctAnswerAr": "مساعد وزاري للإجابة على الأسئلة القانونية يفهرس 10,000 مادة. بتقسيم النصوص إلى مقاطع من 512 رمزاً مع تداخل $15\\%$ واسترجاع أفضل 4 مقاطع بـ HNSW، انخفض معدل الهلوسة من $28.4\\%$ إلى أقل من $1.2\\%$.",
      "correctIndex": 1,
      "explanationEn": "Detailed Solution & Numerical Evaluation: An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: مساعد وزاري للإجابة على الأسئلة القانونية يفهرس 10,000 مادة. بتقسيم النصوص إلى مقاطع من 512 رمزاً مع تداخل $15\\%$ واسترجاع أفضل 4 مقاطع بـ HNSW، انخفض معدل الهلوسة من $28.4\\%$ إلى أقل من $1.2\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: مساعد وزاري للإجابة على الأسئلة القانونية يفهرس 10,000 مادة. بتقسيم النصوص إلى مقاطع من 512 رمزاً مع تداخل $15\\%$ واسترجاع أفضل 4 مقاطع بـ HNSW، انخفض معدل الهلوسة من $28.4\\%$ إلى أقل من $1.2\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch3_hots_25",
      "titleEn": "[HOTS] Subword Tokenization (BPE) & Dense Word Embeddings - Evaluation 25",
      "titleAr": "[تفكير عليا] تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة - تقييم 25",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Subword Tokenization (BPE) & Dense Word Embeddings: (Problem 25)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة: (مسألة 25)",
      "optionsEn": [
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "لنظام معالجة لغة عربية يتعامل مع الصرف، يؤدي تقطيع كلمة \"فسيكفيكهم\" بـ BPE إلى 4 مقاطع دلالية: `[فـ, سـ, يكفي, كهم]`، مقلصاً قاموس النموذج من $1.2$ مليون كلمة إلى $32,000$ مقطع قياسي بانعدام الرموز المجهولة.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.",
      "correctAnswerEn": "For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.",
      "correctAnswerAr": "لنظام معالجة لغة عربية يتعامل مع الصرف، يؤدي تقطيع كلمة \"فسيكفيكهم\" بـ BPE إلى 4 مقاطع دلالية: `[فـ, سـ, يكفي, كهم]`، مقلصاً قاموس النموذج من $1.2$ مليون كلمة إلى $32,000$ مقطع قياسي بانعدام الرموز المجهولة.",
      "correctIndex": 2,
      "explanationEn": "Detailed Solution & Numerical Evaluation: For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: لنظام معالجة لغة عربية يتعامل مع الصرف، يؤدي تقطيع كلمة \"فسيكفيكهم\" بـ BPE إلى 4 مقاطع دلالية: `[فـ, سـ, يكفي, كهم]`، مقلصاً قاموس النموذج من $1.2$ مليون كلمة إلى $32,000$ مقطع قياسي بانعدام الرموز المجهولة.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Subword Tokenization (BPE) & Dense Word Embeddings.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: لنظام معالجة لغة عربية يتعامل مع الصرف، يؤدي تقطيع كلمة \"فسيكفيكهم\" بـ BPE إلى 4 مقاطع دلالية: `[فـ, سـ, يكفي, كهم]`، مقلصاً قاموس النموذج من $1.2$ مليون كلمة إلى $32,000$ مقطع قياسي بانعدام الرموز المجهولة.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch3_hots_26",
      "titleEn": "[HOTS] Scaled Dot-Product Multi-Head Self-Attention Mechanisms - Evaluation 26",
      "titleAr": "[تفكير عليا] آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس - تقييم 26",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Scaled Dot-Product Multi-Head Self-Attention Mechanisms: (Problem 26)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس: (مسألة 26)",
      "optionsEn": [
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions."
      ],
      "optionsAr": [
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "في نموذج Transformer ببعد $d_{model} = 768$ و $12$ رأساً للانتباه، يبلغ بعد الرأس $d_k = 64$. ويضمن القياس بـ $\\frac{1}{\\sqrt{64}} = 0.125$ بقاء تباين الجداء قريباً من $1.0$، مما يحقق استقراراً عددياً لـ softmax."
      ],
      "correctAnswer": "In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions.",
      "correctAnswerEn": "In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions.",
      "correctAnswerAr": "في نموذج Transformer ببعد $d_{model} = 768$ و $12$ رأساً للانتباه، يبلغ بعد الرأس $d_k = 64$. ويضمن القياس بـ $\\frac{1}{\\sqrt{64}} = 0.125$ بقاء تباين الجداء قريباً من $1.0$، مما يحقق استقراراً عددياً لـ softmax.",
      "correctIndex": 3,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في نموذج Transformer ببعد $d_{model} = 768$ و $12$ رأساً للانتباه، يبلغ بعد الرأس $d_k = 64$. ويضمن القياس بـ $\\frac{1}{\\sqrt{64}} = 0.125$ بقاء تباين الجداء قريباً من $1.0$، مما يحقق استقراراً عددياً لـ softmax.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Scaled Dot-Product Multi-Head Self-Attention Mechanisms.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في نموذج Transformer ببعد $d_{model} = 768$ و $12$ رأساً للانتباه، يبلغ بعد الرأس $d_k = 64$. ويضمن القياس بـ $\\frac{1}{\\sqrt{64}} = 0.125$ بقاء تباين الجداء قريباً من $1.0$، مما يحقق استقراراً عددياً لـ softmax.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch3_hots_27",
      "titleEn": "[HOTS] Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG) - Evaluation 27",
      "titleAr": "[تفكير عليا] النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG) - تقييم 27",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG): (Problem 27)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG): (مسألة 27)",
      "optionsEn": [
        "An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "مساعد وزاري للإجابة على الأسئلة القانونية يفهرس 10,000 مادة. بتقسيم النصوص إلى مقاطع من 512 رمزاً مع تداخل $15\\%$ واسترجاع أفضل 4 مقاطع بـ HNSW، انخفض معدل الهلوسة من $28.4\\%$ إلى أقل من $1.2\\%$.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$.",
      "correctAnswerEn": "An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$.",
      "correctAnswerAr": "مساعد وزاري للإجابة على الأسئلة القانونية يفهرس 10,000 مادة. بتقسيم النصوص إلى مقاطع من 512 رمزاً مع تداخل $15\\%$ واسترجاع أفضل 4 مقاطع بـ HNSW، انخفض معدل الهلوسة من $28.4\\%$ إلى أقل من $1.2\\%$.",
      "correctIndex": 0,
      "explanationEn": "Detailed Solution & Numerical Evaluation: An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: مساعد وزاري للإجابة على الأسئلة القانونية يفهرس 10,000 مادة. بتقسيم النصوص إلى مقاطع من 512 رمزاً مع تداخل $15\\%$ واسترجاع أفضل 4 مقاطع بـ HNSW، انخفض معدل الهلوسة من $28.4\\%$ إلى أقل من $1.2\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: مساعد وزاري للإجابة على الأسئلة القانونية يفهرس 10,000 مادة. بتقسيم النصوص إلى مقاطع من 512 رمزاً مع تداخل $15\\%$ واسترجاع أفضل 4 مقاطع بـ HNSW، انخفض معدل الهلوسة من $28.4\\%$ إلى أقل من $1.2\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch3_hots_28",
      "titleEn": "[HOTS] Subword Tokenization (BPE) & Dense Word Embeddings - Evaluation 28",
      "titleAr": "[تفكير عليا] تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة - تقييم 28",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Subword Tokenization (BPE) & Dense Word Embeddings: (Problem 28)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة: (مسألة 28)",
      "optionsEn": [
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "لنظام معالجة لغة عربية يتعامل مع الصرف، يؤدي تقطيع كلمة \"فسيكفيكهم\" بـ BPE إلى 4 مقاطع دلالية: `[فـ, سـ, يكفي, كهم]`، مقلصاً قاموس النموذج من $1.2$ مليون كلمة إلى $32,000$ مقطع قياسي بانعدام الرموز المجهولة.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.",
      "correctAnswerEn": "For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.",
      "correctAnswerAr": "لنظام معالجة لغة عربية يتعامل مع الصرف، يؤدي تقطيع كلمة \"فسيكفيكهم\" بـ BPE إلى 4 مقاطع دلالية: `[فـ, سـ, يكفي, كهم]`، مقلصاً قاموس النموذج من $1.2$ مليون كلمة إلى $32,000$ مقطع قياسي بانعدام الرموز المجهولة.",
      "correctIndex": 1,
      "explanationEn": "Detailed Solution & Numerical Evaluation: For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: لنظام معالجة لغة عربية يتعامل مع الصرف، يؤدي تقطيع كلمة \"فسيكفيكهم\" بـ BPE إلى 4 مقاطع دلالية: `[فـ, سـ, يكفي, كهم]`، مقلصاً قاموس النموذج من $1.2$ مليون كلمة إلى $32,000$ مقطع قياسي بانعدام الرموز المجهولة.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Subword Tokenization (BPE) & Dense Word Embeddings.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: لنظام معالجة لغة عربية يتعامل مع الصرف، يؤدي تقطيع كلمة \"فسيكفيكهم\" بـ BPE إلى 4 مقاطع دلالية: `[فـ, سـ, يكفي, كهم]`، مقلصاً قاموس النموذج من $1.2$ مليون كلمة إلى $32,000$ مقطع قياسي بانعدام الرموز المجهولة.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch3_hots_29",
      "titleEn": "[HOTS] Scaled Dot-Product Multi-Head Self-Attention Mechanisms - Evaluation 29",
      "titleAr": "[تفكير عليا] آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس - تقييم 29",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Scaled Dot-Product Multi-Head Self-Attention Mechanisms: (Problem 29)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس: (مسألة 29)",
      "optionsEn": [
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "في نموذج Transformer ببعد $d_{model} = 768$ و $12$ رأساً للانتباه، يبلغ بعد الرأس $d_k = 64$. ويضمن القياس بـ $\\frac{1}{\\sqrt{64}} = 0.125$ بقاء تباين الجداء قريباً من $1.0$، مما يحقق استقراراً عددياً لـ softmax.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions.",
      "correctAnswerEn": "In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions.",
      "correctAnswerAr": "في نموذج Transformer ببعد $d_{model} = 768$ و $12$ رأساً للانتباه، يبلغ بعد الرأس $d_k = 64$. ويضمن القياس بـ $\\frac{1}{\\sqrt{64}} = 0.125$ بقاء تباين الجداء قريباً من $1.0$، مما يحقق استقراراً عددياً لـ softmax.",
      "correctIndex": 2,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في نموذج Transformer ببعد $d_{model} = 768$ و $12$ رأساً للانتباه، يبلغ بعد الرأس $d_k = 64$. ويضمن القياس بـ $\\frac{1}{\\sqrt{64}} = 0.125$ بقاء تباين الجداء قريباً من $1.0$، مما يحقق استقراراً عددياً لـ softmax.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Scaled Dot-Product Multi-Head Self-Attention Mechanisms.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في نموذج Transformer ببعد $d_{model} = 768$ و $12$ رأساً للانتباه، يبلغ بعد الرأس $d_k = 64$. ويضمن القياس بـ $\\frac{1}{\\sqrt{64}} = 0.125$ بقاء تباين الجداء قريباً من $1.0$، مما يحقق استقراراً عددياً لـ softmax.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch3_hots_30",
      "titleEn": "[HOTS] Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG) - Evaluation 30",
      "titleAr": "[تفكير عليا] النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG) - تقييم 30",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG): (Problem 30)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG): (مسألة 30)",
      "optionsEn": [
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$."
      ],
      "optionsAr": [
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "مساعد وزاري للإجابة على الأسئلة القانونية يفهرس 10,000 مادة. بتقسيم النصوص إلى مقاطع من 512 رمزاً مع تداخل $15\\%$ واسترجاع أفضل 4 مقاطع بـ HNSW، انخفض معدل الهلوسة من $28.4\\%$ إلى أقل من $1.2\\%$."
      ],
      "correctAnswer": "An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$.",
      "correctAnswerEn": "An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$.",
      "correctAnswerAr": "مساعد وزاري للإجابة على الأسئلة القانونية يفهرس 10,000 مادة. بتقسيم النصوص إلى مقاطع من 512 رمزاً مع تداخل $15\\%$ واسترجاع أفضل 4 مقاطع بـ HNSW، انخفض معدل الهلوسة من $28.4\\%$ إلى أقل من $1.2\\%$.",
      "correctIndex": 3,
      "explanationEn": "Detailed Solution & Numerical Evaluation: An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: مساعد وزاري للإجابة على الأسئلة القانونية يفهرس 10,000 مادة. بتقسيم النصوص إلى مقاطع من 512 رمزاً مع تداخل $15\\%$ واسترجاع أفضل 4 مقاطع بـ HNSW، انخفض معدل الهلوسة من $28.4\\%$ إلى أقل من $1.2\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: مساعد وزاري للإجابة على الأسئلة القانونية يفهرس 10,000 مادة. بتقسيم النصوص إلى مقاطع من 512 رمزاً مع تداخل $15\\%$ واسترجاع أفضل 4 مقاطع بـ HNSW، انخفض معدل الهلوسة من $28.4\\%$ إلى أقل من $1.2\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch3_hots_31",
      "titleEn": "[HOTS] Subword Tokenization (BPE) & Dense Word Embeddings - Evaluation 31",
      "titleAr": "[تفكير عليا] تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة - تقييم 31",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Subword Tokenization (BPE) & Dense Word Embeddings: (Problem 31)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة: (مسألة 31)",
      "optionsEn": [
        "For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "لنظام معالجة لغة عربية يتعامل مع الصرف، يؤدي تقطيع كلمة \"فسيكفيكهم\" بـ BPE إلى 4 مقاطع دلالية: `[فـ, سـ, يكفي, كهم]`، مقلصاً قاموس النموذج من $1.2$ مليون كلمة إلى $32,000$ مقطع قياسي بانعدام الرموز المجهولة.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.",
      "correctAnswerEn": "For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.",
      "correctAnswerAr": "لنظام معالجة لغة عربية يتعامل مع الصرف، يؤدي تقطيع كلمة \"فسيكفيكهم\" بـ BPE إلى 4 مقاطع دلالية: `[فـ, سـ, يكفي, كهم]`، مقلصاً قاموس النموذج من $1.2$ مليون كلمة إلى $32,000$ مقطع قياسي بانعدام الرموز المجهولة.",
      "correctIndex": 0,
      "explanationEn": "Detailed Solution & Numerical Evaluation: For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: لنظام معالجة لغة عربية يتعامل مع الصرف، يؤدي تقطيع كلمة \"فسيكفيكهم\" بـ BPE إلى 4 مقاطع دلالية: `[فـ, سـ, يكفي, كهم]`، مقلصاً قاموس النموذج من $1.2$ مليون كلمة إلى $32,000$ مقطع قياسي بانعدام الرموز المجهولة.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Subword Tokenization (BPE) & Dense Word Embeddings.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: لنظام معالجة لغة عربية يتعامل مع الصرف، يؤدي تقطيع كلمة \"فسيكفيكهم\" بـ BPE إلى 4 مقاطع دلالية: `[فـ, سـ, يكفي, كهم]`، مقلصاً قاموس النموذج من $1.2$ مليون كلمة إلى $32,000$ مقطع قياسي بانعدام الرموز المجهولة.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch3_hots_32",
      "titleEn": "[HOTS] Scaled Dot-Product Multi-Head Self-Attention Mechanisms - Evaluation 32",
      "titleAr": "[تفكير عليا] آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس - تقييم 32",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Scaled Dot-Product Multi-Head Self-Attention Mechanisms: (Problem 32)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس: (مسألة 32)",
      "optionsEn": [
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "في نموذج Transformer ببعد $d_{model} = 768$ و $12$ رأساً للانتباه، يبلغ بعد الرأس $d_k = 64$. ويضمن القياس بـ $\\frac{1}{\\sqrt{64}} = 0.125$ بقاء تباين الجداء قريباً من $1.0$، مما يحقق استقراراً عددياً لـ softmax.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions.",
      "correctAnswerEn": "In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions.",
      "correctAnswerAr": "في نموذج Transformer ببعد $d_{model} = 768$ و $12$ رأساً للانتباه، يبلغ بعد الرأس $d_k = 64$. ويضمن القياس بـ $\\frac{1}{\\sqrt{64}} = 0.125$ بقاء تباين الجداء قريباً من $1.0$، مما يحقق استقراراً عددياً لـ softmax.",
      "correctIndex": 1,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في نموذج Transformer ببعد $d_{model} = 768$ و $12$ رأساً للانتباه، يبلغ بعد الرأس $d_k = 64$. ويضمن القياس بـ $\\frac{1}{\\sqrt{64}} = 0.125$ بقاء تباين الجداء قريباً من $1.0$، مما يحقق استقراراً عددياً لـ softmax.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Scaled Dot-Product Multi-Head Self-Attention Mechanisms.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في نموذج Transformer ببعد $d_{model} = 768$ و $12$ رأساً للانتباه، يبلغ بعد الرأس $d_k = 64$. ويضمن القياس بـ $\\frac{1}{\\sqrt{64}} = 0.125$ بقاء تباين الجداء قريباً من $1.0$، مما يحقق استقراراً عددياً لـ softmax.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch3_hots_33",
      "titleEn": "[HOTS] Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG) - Evaluation 33",
      "titleAr": "[تفكير عليا] النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG) - تقييم 33",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG): (Problem 33)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG): (مسألة 33)",
      "optionsEn": [
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "مساعد وزاري للإجابة على الأسئلة القانونية يفهرس 10,000 مادة. بتقسيم النصوص إلى مقاطع من 512 رمزاً مع تداخل $15\\%$ واسترجاع أفضل 4 مقاطع بـ HNSW، انخفض معدل الهلوسة من $28.4\\%$ إلى أقل من $1.2\\%$.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$.",
      "correctAnswerEn": "An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$.",
      "correctAnswerAr": "مساعد وزاري للإجابة على الأسئلة القانونية يفهرس 10,000 مادة. بتقسيم النصوص إلى مقاطع من 512 رمزاً مع تداخل $15\\%$ واسترجاع أفضل 4 مقاطع بـ HNSW، انخفض معدل الهلوسة من $28.4\\%$ إلى أقل من $1.2\\%$.",
      "correctIndex": 2,
      "explanationEn": "Detailed Solution & Numerical Evaluation: An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: مساعد وزاري للإجابة على الأسئلة القانونية يفهرس 10,000 مادة. بتقسيم النصوص إلى مقاطع من 512 رمزاً مع تداخل $15\\%$ واسترجاع أفضل 4 مقاطع بـ HNSW، انخفض معدل الهلوسة من $28.4\\%$ إلى أقل من $1.2\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: مساعد وزاري للإجابة على الأسئلة القانونية يفهرس 10,000 مادة. بتقسيم النصوص إلى مقاطع من 512 رمزاً مع تداخل $15\\%$ واسترجاع أفضل 4 مقاطع بـ HNSW، انخفض معدل الهلوسة من $28.4\\%$ إلى أقل من $1.2\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch3_hots_34",
      "titleEn": "[HOTS] Subword Tokenization (BPE) & Dense Word Embeddings - Evaluation 34",
      "titleAr": "[تفكير عليا] تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة - تقييم 34",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Subword Tokenization (BPE) & Dense Word Embeddings: (Problem 34)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة: (مسألة 34)",
      "optionsEn": [
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens."
      ],
      "optionsAr": [
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "لنظام معالجة لغة عربية يتعامل مع الصرف، يؤدي تقطيع كلمة \"فسيكفيكهم\" بـ BPE إلى 4 مقاطع دلالية: `[فـ, سـ, يكفي, كهم]`، مقلصاً قاموس النموذج من $1.2$ مليون كلمة إلى $32,000$ مقطع قياسي بانعدام الرموز المجهولة."
      ],
      "correctAnswer": "For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.",
      "correctAnswerEn": "For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.",
      "correctAnswerAr": "لنظام معالجة لغة عربية يتعامل مع الصرف، يؤدي تقطيع كلمة \"فسيكفيكهم\" بـ BPE إلى 4 مقاطع دلالية: `[فـ, سـ, يكفي, كهم]`، مقلصاً قاموس النموذج من $1.2$ مليون كلمة إلى $32,000$ مقطع قياسي بانعدام الرموز المجهولة.",
      "correctIndex": 3,
      "explanationEn": "Detailed Solution & Numerical Evaluation: For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: لنظام معالجة لغة عربية يتعامل مع الصرف، يؤدي تقطيع كلمة \"فسيكفيكهم\" بـ BPE إلى 4 مقاطع دلالية: `[فـ, سـ, يكفي, كهم]`، مقلصاً قاموس النموذج من $1.2$ مليون كلمة إلى $32,000$ مقطع قياسي بانعدام الرموز المجهولة.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Subword Tokenization (BPE) & Dense Word Embeddings.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: لنظام معالجة لغة عربية يتعامل مع الصرف، يؤدي تقطيع كلمة \"فسيكفيكهم\" بـ BPE إلى 4 مقاطع دلالية: `[فـ, سـ, يكفي, كهم]`، مقلصاً قاموس النموذج من $1.2$ مليون كلمة إلى $32,000$ مقطع قياسي بانعدام الرموز المجهولة.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch3_hots_35",
      "titleEn": "[HOTS] Scaled Dot-Product Multi-Head Self-Attention Mechanisms - Evaluation 35",
      "titleAr": "[تفكير عليا] آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس - تقييم 35",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Scaled Dot-Product Multi-Head Self-Attention Mechanisms: (Problem 35)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس: (مسألة 35)",
      "optionsEn": [
        "In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "في نموذج Transformer ببعد $d_{model} = 768$ و $12$ رأساً للانتباه، يبلغ بعد الرأس $d_k = 64$. ويضمن القياس بـ $\\frac{1}{\\sqrt{64}} = 0.125$ بقاء تباين الجداء قريباً من $1.0$، مما يحقق استقراراً عددياً لـ softmax.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions.",
      "correctAnswerEn": "In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions.",
      "correctAnswerAr": "في نموذج Transformer ببعد $d_{model} = 768$ و $12$ رأساً للانتباه، يبلغ بعد الرأس $d_k = 64$. ويضمن القياس بـ $\\frac{1}{\\sqrt{64}} = 0.125$ بقاء تباين الجداء قريباً من $1.0$، مما يحقق استقراراً عددياً لـ softmax.",
      "correctIndex": 0,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في نموذج Transformer ببعد $d_{model} = 768$ و $12$ رأساً للانتباه، يبلغ بعد الرأس $d_k = 64$. ويضمن القياس بـ $\\frac{1}{\\sqrt{64}} = 0.125$ بقاء تباين الجداء قريباً من $1.0$، مما يحقق استقراراً عددياً لـ softmax.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Scaled Dot-Product Multi-Head Self-Attention Mechanisms.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في نموذج Transformer ببعد $d_{model} = 768$ و $12$ رأساً للانتباه، يبلغ بعد الرأس $d_k = 64$. ويضمن القياس بـ $\\frac{1}{\\sqrt{64}} = 0.125$ بقاء تباين الجداء قريباً من $1.0$، مما يحقق استقراراً عددياً لـ softmax.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch3_hots_36",
      "titleEn": "[HOTS] Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG) - Evaluation 36",
      "titleAr": "[تفكير عليا] النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG) - تقييم 36",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG): (Problem 36)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG): (مسألة 36)",
      "optionsEn": [
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "مساعد وزاري للإجابة على الأسئلة القانونية يفهرس 10,000 مادة. بتقسيم النصوص إلى مقاطع من 512 رمزاً مع تداخل $15\\%$ واسترجاع أفضل 4 مقاطع بـ HNSW، انخفض معدل الهلوسة من $28.4\\%$ إلى أقل من $1.2\\%$.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$.",
      "correctAnswerEn": "An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$.",
      "correctAnswerAr": "مساعد وزاري للإجابة على الأسئلة القانونية يفهرس 10,000 مادة. بتقسيم النصوص إلى مقاطع من 512 رمزاً مع تداخل $15\\%$ واسترجاع أفضل 4 مقاطع بـ HNSW، انخفض معدل الهلوسة من $28.4\\%$ إلى أقل من $1.2\\%$.",
      "correctIndex": 1,
      "explanationEn": "Detailed Solution & Numerical Evaluation: An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: مساعد وزاري للإجابة على الأسئلة القانونية يفهرس 10,000 مادة. بتقسيم النصوص إلى مقاطع من 512 رمزاً مع تداخل $15\\%$ واسترجاع أفضل 4 مقاطع بـ HNSW، انخفض معدل الهلوسة من $28.4\\%$ إلى أقل من $1.2\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: مساعد وزاري للإجابة على الأسئلة القانونية يفهرس 10,000 مادة. بتقسيم النصوص إلى مقاطع من 512 رمزاً مع تداخل $15\\%$ واسترجاع أفضل 4 مقاطع بـ HNSW، انخفض معدل الهلوسة من $28.4\\%$ إلى أقل من $1.2\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch3_hots_37",
      "titleEn": "[HOTS] Subword Tokenization (BPE) & Dense Word Embeddings - Evaluation 37",
      "titleAr": "[تفكير عليا] تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة - تقييم 37",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Subword Tokenization (BPE) & Dense Word Embeddings: (Problem 37)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة: (مسألة 37)",
      "optionsEn": [
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "لنظام معالجة لغة عربية يتعامل مع الصرف، يؤدي تقطيع كلمة \"فسيكفيكهم\" بـ BPE إلى 4 مقاطع دلالية: `[فـ, سـ, يكفي, كهم]`، مقلصاً قاموس النموذج من $1.2$ مليون كلمة إلى $32,000$ مقطع قياسي بانعدام الرموز المجهولة.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.",
      "correctAnswerEn": "For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.",
      "correctAnswerAr": "لنظام معالجة لغة عربية يتعامل مع الصرف، يؤدي تقطيع كلمة \"فسيكفيكهم\" بـ BPE إلى 4 مقاطع دلالية: `[فـ, سـ, يكفي, كهم]`، مقلصاً قاموس النموذج من $1.2$ مليون كلمة إلى $32,000$ مقطع قياسي بانعدام الرموز المجهولة.",
      "correctIndex": 2,
      "explanationEn": "Detailed Solution & Numerical Evaluation: For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: لنظام معالجة لغة عربية يتعامل مع الصرف، يؤدي تقطيع كلمة \"فسيكفيكهم\" بـ BPE إلى 4 مقاطع دلالية: `[فـ, سـ, يكفي, كهم]`، مقلصاً قاموس النموذج من $1.2$ مليون كلمة إلى $32,000$ مقطع قياسي بانعدام الرموز المجهولة.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Subword Tokenization (BPE) & Dense Word Embeddings.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: لنظام معالجة لغة عربية يتعامل مع الصرف، يؤدي تقطيع كلمة \"فسيكفيكهم\" بـ BPE إلى 4 مقاطع دلالية: `[فـ, سـ, يكفي, كهم]`، مقلصاً قاموس النموذج من $1.2$ مليون كلمة إلى $32,000$ مقطع قياسي بانعدام الرموز المجهولة.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch3_hots_38",
      "titleEn": "[HOTS] Scaled Dot-Product Multi-Head Self-Attention Mechanisms - Evaluation 38",
      "titleAr": "[تفكير عليا] آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس - تقييم 38",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Scaled Dot-Product Multi-Head Self-Attention Mechanisms: (Problem 38)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس: (مسألة 38)",
      "optionsEn": [
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions."
      ],
      "optionsAr": [
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "في نموذج Transformer ببعد $d_{model} = 768$ و $12$ رأساً للانتباه، يبلغ بعد الرأس $d_k = 64$. ويضمن القياس بـ $\\frac{1}{\\sqrt{64}} = 0.125$ بقاء تباين الجداء قريباً من $1.0$، مما يحقق استقراراً عددياً لـ softmax."
      ],
      "correctAnswer": "In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions.",
      "correctAnswerEn": "In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions.",
      "correctAnswerAr": "في نموذج Transformer ببعد $d_{model} = 768$ و $12$ رأساً للانتباه، يبلغ بعد الرأس $d_k = 64$. ويضمن القياس بـ $\\frac{1}{\\sqrt{64}} = 0.125$ بقاء تباين الجداء قريباً من $1.0$، مما يحقق استقراراً عددياً لـ softmax.",
      "correctIndex": 3,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في نموذج Transformer ببعد $d_{model} = 768$ و $12$ رأساً للانتباه، يبلغ بعد الرأس $d_k = 64$. ويضمن القياس بـ $\\frac{1}{\\sqrt{64}} = 0.125$ بقاء تباين الجداء قريباً من $1.0$، مما يحقق استقراراً عددياً لـ softmax.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Scaled Dot-Product Multi-Head Self-Attention Mechanisms.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في نموذج Transformer ببعد $d_{model} = 768$ و $12$ رأساً للانتباه، يبلغ بعد الرأس $d_k = 64$. ويضمن القياس بـ $\\frac{1}{\\sqrt{64}} = 0.125$ بقاء تباين الجداء قريباً من $1.0$، مما يحقق استقراراً عددياً لـ softmax.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch3_hots_39",
      "titleEn": "[HOTS] Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG) - Evaluation 39",
      "titleAr": "[تفكير عليا] النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG) - تقييم 39",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG): (Problem 39)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG): (مسألة 39)",
      "optionsEn": [
        "An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "مساعد وزاري للإجابة على الأسئلة القانونية يفهرس 10,000 مادة. بتقسيم النصوص إلى مقاطع من 512 رمزاً مع تداخل $15\\%$ واسترجاع أفضل 4 مقاطع بـ HNSW، انخفض معدل الهلوسة من $28.4\\%$ إلى أقل من $1.2\\%$.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$.",
      "correctAnswerEn": "An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$.",
      "correctAnswerAr": "مساعد وزاري للإجابة على الأسئلة القانونية يفهرس 10,000 مادة. بتقسيم النصوص إلى مقاطع من 512 رمزاً مع تداخل $15\\%$ واسترجاع أفضل 4 مقاطع بـ HNSW، انخفض معدل الهلوسة من $28.4\\%$ إلى أقل من $1.2\\%$.",
      "correctIndex": 0,
      "explanationEn": "Detailed Solution & Numerical Evaluation: An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: مساعد وزاري للإجابة على الأسئلة القانونية يفهرس 10,000 مادة. بتقسيم النصوص إلى مقاطع من 512 رمزاً مع تداخل $15\\%$ واسترجاع أفضل 4 مقاطع بـ HNSW، انخفض معدل الهلوسة من $28.4\\%$ إلى أقل من $1.2\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: مساعد وزاري للإجابة على الأسئلة القانونية يفهرس 10,000 مادة. بتقسيم النصوص إلى مقاطع من 512 رمزاً مع تداخل $15\\%$ واسترجاع أفضل 4 مقاطع بـ HNSW، انخفض معدل الهلوسة من $28.4\\%$ إلى أقل من $1.2\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch3_hots_40",
      "titleEn": "[HOTS] Subword Tokenization (BPE) & Dense Word Embeddings - Evaluation 40",
      "titleAr": "[تفكير عليا] تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة - تقييم 40",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Subword Tokenization (BPE) & Dense Word Embeddings: (Problem 40)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة: (مسألة 40)",
      "optionsEn": [
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "لنظام معالجة لغة عربية يتعامل مع الصرف، يؤدي تقطيع كلمة \"فسيكفيكهم\" بـ BPE إلى 4 مقاطع دلالية: `[فـ, سـ, يكفي, كهم]`، مقلصاً قاموس النموذج من $1.2$ مليون كلمة إلى $32,000$ مقطع قياسي بانعدام الرموز المجهولة.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.",
      "correctAnswerEn": "For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.",
      "correctAnswerAr": "لنظام معالجة لغة عربية يتعامل مع الصرف، يؤدي تقطيع كلمة \"فسيكفيكهم\" بـ BPE إلى 4 مقاطع دلالية: `[فـ, سـ, يكفي, كهم]`، مقلصاً قاموس النموذج من $1.2$ مليون كلمة إلى $32,000$ مقطع قياسي بانعدام الرموز المجهولة.",
      "correctIndex": 1,
      "explanationEn": "Detailed Solution & Numerical Evaluation: For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: لنظام معالجة لغة عربية يتعامل مع الصرف، يؤدي تقطيع كلمة \"فسيكفيكهم\" بـ BPE إلى 4 مقاطع دلالية: `[فـ, سـ, يكفي, كهم]`، مقلصاً قاموس النموذج من $1.2$ مليون كلمة إلى $32,000$ مقطع قياسي بانعدام الرموز المجهولة.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Subword Tokenization (BPE) & Dense Word Embeddings.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: لنظام معالجة لغة عربية يتعامل مع الصرف، يؤدي تقطيع كلمة \"فسيكفيكهم\" بـ BPE إلى 4 مقاطع دلالية: `[فـ, سـ, يكفي, كهم]`، مقلصاً قاموس النموذج من $1.2$ مليون كلمة إلى $32,000$ مقطع قياسي بانعدام الرموز المجهولة.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch3_hots_41",
      "titleEn": "[HOTS] Scaled Dot-Product Multi-Head Self-Attention Mechanisms - Evaluation 41",
      "titleAr": "[تفكير عليا] آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس - تقييم 41",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Scaled Dot-Product Multi-Head Self-Attention Mechanisms: (Problem 41)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس: (مسألة 41)",
      "optionsEn": [
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "في نموذج Transformer ببعد $d_{model} = 768$ و $12$ رأساً للانتباه، يبلغ بعد الرأس $d_k = 64$. ويضمن القياس بـ $\\frac{1}{\\sqrt{64}} = 0.125$ بقاء تباين الجداء قريباً من $1.0$، مما يحقق استقراراً عددياً لـ softmax.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions.",
      "correctAnswerEn": "In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions.",
      "correctAnswerAr": "في نموذج Transformer ببعد $d_{model} = 768$ و $12$ رأساً للانتباه، يبلغ بعد الرأس $d_k = 64$. ويضمن القياس بـ $\\frac{1}{\\sqrt{64}} = 0.125$ بقاء تباين الجداء قريباً من $1.0$، مما يحقق استقراراً عددياً لـ softmax.",
      "correctIndex": 2,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في نموذج Transformer ببعد $d_{model} = 768$ و $12$ رأساً للانتباه، يبلغ بعد الرأس $d_k = 64$. ويضمن القياس بـ $\\frac{1}{\\sqrt{64}} = 0.125$ بقاء تباين الجداء قريباً من $1.0$، مما يحقق استقراراً عددياً لـ softmax.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Scaled Dot-Product Multi-Head Self-Attention Mechanisms.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في نموذج Transformer ببعد $d_{model} = 768$ و $12$ رأساً للانتباه، يبلغ بعد الرأس $d_k = 64$. ويضمن القياس بـ $\\frac{1}{\\sqrt{64}} = 0.125$ بقاء تباين الجداء قريباً من $1.0$، مما يحقق استقراراً عددياً لـ softmax.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch3_hots_42",
      "titleEn": "[HOTS] Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG) - Evaluation 42",
      "titleAr": "[تفكير عليا] النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG) - تقييم 42",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG): (Problem 42)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG): (مسألة 42)",
      "optionsEn": [
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$."
      ],
      "optionsAr": [
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "مساعد وزاري للإجابة على الأسئلة القانونية يفهرس 10,000 مادة. بتقسيم النصوص إلى مقاطع من 512 رمزاً مع تداخل $15\\%$ واسترجاع أفضل 4 مقاطع بـ HNSW، انخفض معدل الهلوسة من $28.4\\%$ إلى أقل من $1.2\\%$."
      ],
      "correctAnswer": "An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$.",
      "correctAnswerEn": "An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$.",
      "correctAnswerAr": "مساعد وزاري للإجابة على الأسئلة القانونية يفهرس 10,000 مادة. بتقسيم النصوص إلى مقاطع من 512 رمزاً مع تداخل $15\\%$ واسترجاع أفضل 4 مقاطع بـ HNSW، انخفض معدل الهلوسة من $28.4\\%$ إلى أقل من $1.2\\%$.",
      "correctIndex": 3,
      "explanationEn": "Detailed Solution & Numerical Evaluation: An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: مساعد وزاري للإجابة على الأسئلة القانونية يفهرس 10,000 مادة. بتقسيم النصوص إلى مقاطع من 512 رمزاً مع تداخل $15\\%$ واسترجاع أفضل 4 مقاطع بـ HNSW، انخفض معدل الهلوسة من $28.4\\%$ إلى أقل من $1.2\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: مساعد وزاري للإجابة على الأسئلة القانونية يفهرس 10,000 مادة. بتقسيم النصوص إلى مقاطع من 512 رمزاً مع تداخل $15\\%$ واسترجاع أفضل 4 مقاطع بـ HNSW، انخفض معدل الهلوسة من $28.4\\%$ إلى أقل من $1.2\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch3_hots_43",
      "titleEn": "[HOTS] Subword Tokenization (BPE) & Dense Word Embeddings - Evaluation 43",
      "titleAr": "[تفكير عليا] تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة - تقييم 43",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Subword Tokenization (BPE) & Dense Word Embeddings: (Problem 43)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة: (مسألة 43)",
      "optionsEn": [
        "For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "لنظام معالجة لغة عربية يتعامل مع الصرف، يؤدي تقطيع كلمة \"فسيكفيكهم\" بـ BPE إلى 4 مقاطع دلالية: `[فـ, سـ, يكفي, كهم]`، مقلصاً قاموس النموذج من $1.2$ مليون كلمة إلى $32,000$ مقطع قياسي بانعدام الرموز المجهولة.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.",
      "correctAnswerEn": "For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.",
      "correctAnswerAr": "لنظام معالجة لغة عربية يتعامل مع الصرف، يؤدي تقطيع كلمة \"فسيكفيكهم\" بـ BPE إلى 4 مقاطع دلالية: `[فـ, سـ, يكفي, كهم]`، مقلصاً قاموس النموذج من $1.2$ مليون كلمة إلى $32,000$ مقطع قياسي بانعدام الرموز المجهولة.",
      "correctIndex": 0,
      "explanationEn": "Detailed Solution & Numerical Evaluation: For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: لنظام معالجة لغة عربية يتعامل مع الصرف، يؤدي تقطيع كلمة \"فسيكفيكهم\" بـ BPE إلى 4 مقاطع دلالية: `[فـ, سـ, يكفي, كهم]`، مقلصاً قاموس النموذج من $1.2$ مليون كلمة إلى $32,000$ مقطع قياسي بانعدام الرموز المجهولة.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Subword Tokenization (BPE) & Dense Word Embeddings.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: لنظام معالجة لغة عربية يتعامل مع الصرف، يؤدي تقطيع كلمة \"فسيكفيكهم\" بـ BPE إلى 4 مقاطع دلالية: `[فـ, سـ, يكفي, كهم]`، مقلصاً قاموس النموذج من $1.2$ مليون كلمة إلى $32,000$ مقطع قياسي بانعدام الرموز المجهولة.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch3_hots_44",
      "titleEn": "[HOTS] Scaled Dot-Product Multi-Head Self-Attention Mechanisms - Evaluation 44",
      "titleAr": "[تفكير عليا] آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس - تقييم 44",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Scaled Dot-Product Multi-Head Self-Attention Mechanisms: (Problem 44)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس: (مسألة 44)",
      "optionsEn": [
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "في نموذج Transformer ببعد $d_{model} = 768$ و $12$ رأساً للانتباه، يبلغ بعد الرأس $d_k = 64$. ويضمن القياس بـ $\\frac{1}{\\sqrt{64}} = 0.125$ بقاء تباين الجداء قريباً من $1.0$، مما يحقق استقراراً عددياً لـ softmax.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions.",
      "correctAnswerEn": "In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions.",
      "correctAnswerAr": "في نموذج Transformer ببعد $d_{model} = 768$ و $12$ رأساً للانتباه، يبلغ بعد الرأس $d_k = 64$. ويضمن القياس بـ $\\frac{1}{\\sqrt{64}} = 0.125$ بقاء تباين الجداء قريباً من $1.0$، مما يحقق استقراراً عددياً لـ softmax.",
      "correctIndex": 1,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في نموذج Transformer ببعد $d_{model} = 768$ و $12$ رأساً للانتباه، يبلغ بعد الرأس $d_k = 64$. ويضمن القياس بـ $\\frac{1}{\\sqrt{64}} = 0.125$ بقاء تباين الجداء قريباً من $1.0$، مما يحقق استقراراً عددياً لـ softmax.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Scaled Dot-Product Multi-Head Self-Attention Mechanisms.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في نموذج Transformer ببعد $d_{model} = 768$ و $12$ رأساً للانتباه، يبلغ بعد الرأس $d_k = 64$. ويضمن القياس بـ $\\frac{1}{\\sqrt{64}} = 0.125$ بقاء تباين الجداء قريباً من $1.0$، مما يحقق استقراراً عددياً لـ softmax.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch3_hots_45",
      "titleEn": "[HOTS] Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG) - Evaluation 45",
      "titleAr": "[تفكير عليا] النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG) - تقييم 45",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG): (Problem 45)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG): (مسألة 45)",
      "optionsEn": [
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "مساعد وزاري للإجابة على الأسئلة القانونية يفهرس 10,000 مادة. بتقسيم النصوص إلى مقاطع من 512 رمزاً مع تداخل $15\\%$ واسترجاع أفضل 4 مقاطع بـ HNSW، انخفض معدل الهلوسة من $28.4\\%$ إلى أقل من $1.2\\%$.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$.",
      "correctAnswerEn": "An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$.",
      "correctAnswerAr": "مساعد وزاري للإجابة على الأسئلة القانونية يفهرس 10,000 مادة. بتقسيم النصوص إلى مقاطع من 512 رمزاً مع تداخل $15\\%$ واسترجاع أفضل 4 مقاطع بـ HNSW، انخفض معدل الهلوسة من $28.4\\%$ إلى أقل من $1.2\\%$.",
      "correctIndex": 2,
      "explanationEn": "Detailed Solution & Numerical Evaluation: An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: مساعد وزاري للإجابة على الأسئلة القانونية يفهرس 10,000 مادة. بتقسيم النصوص إلى مقاطع من 512 رمزاً مع تداخل $15\\%$ واسترجاع أفضل 4 مقاطع بـ HNSW، انخفض معدل الهلوسة من $28.4\\%$ إلى أقل من $1.2\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: مساعد وزاري للإجابة على الأسئلة القانونية يفهرس 10,000 مادة. بتقسيم النصوص إلى مقاطع من 512 رمزاً مع تداخل $15\\%$ واسترجاع أفضل 4 مقاطع بـ HNSW، انخفض معدل الهلوسة من $28.4\\%$ إلى أقل من $1.2\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch3_hots_46",
      "titleEn": "[HOTS] Subword Tokenization (BPE) & Dense Word Embeddings - Evaluation 46",
      "titleAr": "[تفكير عليا] تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة - تقييم 46",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Subword Tokenization (BPE) & Dense Word Embeddings: (Problem 46)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة: (مسألة 46)",
      "optionsEn": [
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens."
      ],
      "optionsAr": [
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "لنظام معالجة لغة عربية يتعامل مع الصرف، يؤدي تقطيع كلمة \"فسيكفيكهم\" بـ BPE إلى 4 مقاطع دلالية: `[فـ, سـ, يكفي, كهم]`، مقلصاً قاموس النموذج من $1.2$ مليون كلمة إلى $32,000$ مقطع قياسي بانعدام الرموز المجهولة."
      ],
      "correctAnswer": "For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.",
      "correctAnswerEn": "For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.",
      "correctAnswerAr": "لنظام معالجة لغة عربية يتعامل مع الصرف، يؤدي تقطيع كلمة \"فسيكفيكهم\" بـ BPE إلى 4 مقاطع دلالية: `[فـ, سـ, يكفي, كهم]`، مقلصاً قاموس النموذج من $1.2$ مليون كلمة إلى $32,000$ مقطع قياسي بانعدام الرموز المجهولة.",
      "correctIndex": 3,
      "explanationEn": "Detailed Solution & Numerical Evaluation: For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: لنظام معالجة لغة عربية يتعامل مع الصرف، يؤدي تقطيع كلمة \"فسيكفيكهم\" بـ BPE إلى 4 مقاطع دلالية: `[فـ, سـ, يكفي, كهم]`، مقلصاً قاموس النموذج من $1.2$ مليون كلمة إلى $32,000$ مقطع قياسي بانعدام الرموز المجهولة.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Subword Tokenization (BPE) & Dense Word Embeddings.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: لنظام معالجة لغة عربية يتعامل مع الصرف، يؤدي تقطيع كلمة \"فسيكفيكهم\" بـ BPE إلى 4 مقاطع دلالية: `[فـ, سـ, يكفي, كهم]`، مقلصاً قاموس النموذج من $1.2$ مليون كلمة إلى $32,000$ مقطع قياسي بانعدام الرموز المجهولة.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch3_hots_47",
      "titleEn": "[HOTS] Scaled Dot-Product Multi-Head Self-Attention Mechanisms - Evaluation 47",
      "titleAr": "[تفكير عليا] آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس - تقييم 47",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Scaled Dot-Product Multi-Head Self-Attention Mechanisms: (Problem 47)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس: (مسألة 47)",
      "optionsEn": [
        "In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "في نموذج Transformer ببعد $d_{model} = 768$ و $12$ رأساً للانتباه، يبلغ بعد الرأس $d_k = 64$. ويضمن القياس بـ $\\frac{1}{\\sqrt{64}} = 0.125$ بقاء تباين الجداء قريباً من $1.0$، مما يحقق استقراراً عددياً لـ softmax.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions.",
      "correctAnswerEn": "In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions.",
      "correctAnswerAr": "في نموذج Transformer ببعد $d_{model} = 768$ و $12$ رأساً للانتباه، يبلغ بعد الرأس $d_k = 64$. ويضمن القياس بـ $\\frac{1}{\\sqrt{64}} = 0.125$ بقاء تباين الجداء قريباً من $1.0$، مما يحقق استقراراً عددياً لـ softmax.",
      "correctIndex": 0,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في نموذج Transformer ببعد $d_{model} = 768$ و $12$ رأساً للانتباه، يبلغ بعد الرأس $d_k = 64$. ويضمن القياس بـ $\\frac{1}{\\sqrt{64}} = 0.125$ بقاء تباين الجداء قريباً من $1.0$، مما يحقق استقراراً عددياً لـ softmax.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Scaled Dot-Product Multi-Head Self-Attention Mechanisms.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في نموذج Transformer ببعد $d_{model} = 768$ و $12$ رأساً للانتباه، يبلغ بعد الرأس $d_k = 64$. ويضمن القياس بـ $\\frac{1}{\\sqrt{64}} = 0.125$ بقاء تباين الجداء قريباً من $1.0$، مما يحقق استقراراً عددياً لـ softmax.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch3_hots_48",
      "titleEn": "[HOTS] Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG) - Evaluation 48",
      "titleAr": "[تفكير عليا] النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG) - تقييم 48",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG): (Problem 48)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG): (مسألة 48)",
      "optionsEn": [
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "مساعد وزاري للإجابة على الأسئلة القانونية يفهرس 10,000 مادة. بتقسيم النصوص إلى مقاطع من 512 رمزاً مع تداخل $15\\%$ واسترجاع أفضل 4 مقاطع بـ HNSW، انخفض معدل الهلوسة من $28.4\\%$ إلى أقل من $1.2\\%$.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$.",
      "correctAnswerEn": "An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$.",
      "correctAnswerAr": "مساعد وزاري للإجابة على الأسئلة القانونية يفهرس 10,000 مادة. بتقسيم النصوص إلى مقاطع من 512 رمزاً مع تداخل $15\\%$ واسترجاع أفضل 4 مقاطع بـ HNSW، انخفض معدل الهلوسة من $28.4\\%$ إلى أقل من $1.2\\%$.",
      "correctIndex": 1,
      "explanationEn": "Detailed Solution & Numerical Evaluation: An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: مساعد وزاري للإجابة على الأسئلة القانونية يفهرس 10,000 مادة. بتقسيم النصوص إلى مقاطع من 512 رمزاً مع تداخل $15\\%$ واسترجاع أفضل 4 مقاطع بـ HNSW، انخفض معدل الهلوسة من $28.4\\%$ إلى أقل من $1.2\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: مساعد وزاري للإجابة على الأسئلة القانونية يفهرس 10,000 مادة. بتقسيم النصوص إلى مقاطع من 512 رمزاً مع تداخل $15\\%$ واسترجاع أفضل 4 مقاطع بـ HNSW، انخفض معدل الهلوسة من $28.4\\%$ إلى أقل من $1.2\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch3_hots_49",
      "titleEn": "[HOTS] Subword Tokenization (BPE) & Dense Word Embeddings - Evaluation 49",
      "titleAr": "[تفكير عليا] تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة - تقييم 49",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Subword Tokenization (BPE) & Dense Word Embeddings: (Problem 49)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة: (مسألة 49)",
      "optionsEn": [
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "لنظام معالجة لغة عربية يتعامل مع الصرف، يؤدي تقطيع كلمة \"فسيكفيكهم\" بـ BPE إلى 4 مقاطع دلالية: `[فـ, سـ, يكفي, كهم]`، مقلصاً قاموس النموذج من $1.2$ مليون كلمة إلى $32,000$ مقطع قياسي بانعدام الرموز المجهولة.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.",
      "correctAnswerEn": "For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.",
      "correctAnswerAr": "لنظام معالجة لغة عربية يتعامل مع الصرف، يؤدي تقطيع كلمة \"فسيكفيكهم\" بـ BPE إلى 4 مقاطع دلالية: `[فـ, سـ, يكفي, كهم]`، مقلصاً قاموس النموذج من $1.2$ مليون كلمة إلى $32,000$ مقطع قياسي بانعدام الرموز المجهولة.",
      "correctIndex": 2,
      "explanationEn": "Detailed Solution & Numerical Evaluation: For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: لنظام معالجة لغة عربية يتعامل مع الصرف، يؤدي تقطيع كلمة \"فسيكفيكهم\" بـ BPE إلى 4 مقاطع دلالية: `[فـ, سـ, يكفي, كهم]`، مقلصاً قاموس النموذج من $1.2$ مليون كلمة إلى $32,000$ مقطع قياسي بانعدام الرموز المجهولة.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Subword Tokenization (BPE) & Dense Word Embeddings.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: لنظام معالجة لغة عربية يتعامل مع الصرف، يؤدي تقطيع كلمة \"فسيكفيكهم\" بـ BPE إلى 4 مقاطع دلالية: `[فـ, سـ, يكفي, كهم]`، مقلصاً قاموس النموذج من $1.2$ مليون كلمة إلى $32,000$ مقطع قياسي بانعدام الرموز المجهولة.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch3_hots_50",
      "titleEn": "[HOTS] Scaled Dot-Product Multi-Head Self-Attention Mechanisms - Evaluation 50",
      "titleAr": "[تفكير عليا] آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس - تقييم 50",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Scaled Dot-Product Multi-Head Self-Attention Mechanisms: (Problem 50)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس: (مسألة 50)",
      "optionsEn": [
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions."
      ],
      "optionsAr": [
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "في نموذج Transformer ببعد $d_{model} = 768$ و $12$ رأساً للانتباه، يبلغ بعد الرأس $d_k = 64$. ويضمن القياس بـ $\\frac{1}{\\sqrt{64}} = 0.125$ بقاء تباين الجداء قريباً من $1.0$، مما يحقق استقراراً عددياً لـ softmax."
      ],
      "correctAnswer": "In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions.",
      "correctAnswerEn": "In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions.",
      "correctAnswerAr": "في نموذج Transformer ببعد $d_{model} = 768$ و $12$ رأساً للانتباه، يبلغ بعد الرأس $d_k = 64$. ويضمن القياس بـ $\\frac{1}{\\sqrt{64}} = 0.125$ بقاء تباين الجداء قريباً من $1.0$، مما يحقق استقراراً عددياً لـ softmax.",
      "correctIndex": 3,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في نموذج Transformer ببعد $d_{model} = 768$ و $12$ رأساً للانتباه، يبلغ بعد الرأس $d_k = 64$. ويضمن القياس بـ $\\frac{1}{\\sqrt{64}} = 0.125$ بقاء تباين الجداء قريباً من $1.0$، مما يحقق استقراراً عددياً لـ softmax.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Scaled Dot-Product Multi-Head Self-Attention Mechanisms.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في نموذج Transformer ببعد $d_{model} = 768$ و $12$ رأساً للانتباه، يبلغ بعد الرأس $d_k = 64$. ويضمن القياس بـ $\\frac{1}{\\sqrt{64}} = 0.125$ بقاء تباين الجداء قريباً من $1.0$، مما يحقق استقراراً عددياً لـ softmax.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch3_hots_51",
      "titleEn": "[HOTS] Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG) - Evaluation 51",
      "titleAr": "[تفكير عليا] النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG) - تقييم 51",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG): (Problem 51)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG): (مسألة 51)",
      "optionsEn": [
        "An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "مساعد وزاري للإجابة على الأسئلة القانونية يفهرس 10,000 مادة. بتقسيم النصوص إلى مقاطع من 512 رمزاً مع تداخل $15\\%$ واسترجاع أفضل 4 مقاطع بـ HNSW، انخفض معدل الهلوسة من $28.4\\%$ إلى أقل من $1.2\\%$.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$.",
      "correctAnswerEn": "An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$.",
      "correctAnswerAr": "مساعد وزاري للإجابة على الأسئلة القانونية يفهرس 10,000 مادة. بتقسيم النصوص إلى مقاطع من 512 رمزاً مع تداخل $15\\%$ واسترجاع أفضل 4 مقاطع بـ HNSW، انخفض معدل الهلوسة من $28.4\\%$ إلى أقل من $1.2\\%$.",
      "correctIndex": 0,
      "explanationEn": "Detailed Solution & Numerical Evaluation: An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: مساعد وزاري للإجابة على الأسئلة القانونية يفهرس 10,000 مادة. بتقسيم النصوص إلى مقاطع من 512 رمزاً مع تداخل $15\\%$ واسترجاع أفضل 4 مقاطع بـ HNSW، انخفض معدل الهلوسة من $28.4\\%$ إلى أقل من $1.2\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: مساعد وزاري للإجابة على الأسئلة القانونية يفهرس 10,000 مادة. بتقسيم النصوص إلى مقاطع من 512 رمزاً مع تداخل $15\\%$ واسترجاع أفضل 4 مقاطع بـ HNSW، انخفض معدل الهلوسة من $28.4\\%$ إلى أقل من $1.2\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch3_hots_52",
      "titleEn": "[HOTS] Subword Tokenization (BPE) & Dense Word Embeddings - Evaluation 52",
      "titleAr": "[تفكير عليا] تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة - تقييم 52",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Subword Tokenization (BPE) & Dense Word Embeddings: (Problem 52)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة: (مسألة 52)",
      "optionsEn": [
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "لنظام معالجة لغة عربية يتعامل مع الصرف، يؤدي تقطيع كلمة \"فسيكفيكهم\" بـ BPE إلى 4 مقاطع دلالية: `[فـ, سـ, يكفي, كهم]`، مقلصاً قاموس النموذج من $1.2$ مليون كلمة إلى $32,000$ مقطع قياسي بانعدام الرموز المجهولة.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.",
      "correctAnswerEn": "For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.",
      "correctAnswerAr": "لنظام معالجة لغة عربية يتعامل مع الصرف، يؤدي تقطيع كلمة \"فسيكفيكهم\" بـ BPE إلى 4 مقاطع دلالية: `[فـ, سـ, يكفي, كهم]`، مقلصاً قاموس النموذج من $1.2$ مليون كلمة إلى $32,000$ مقطع قياسي بانعدام الرموز المجهولة.",
      "correctIndex": 1,
      "explanationEn": "Detailed Solution & Numerical Evaluation: For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: لنظام معالجة لغة عربية يتعامل مع الصرف، يؤدي تقطيع كلمة \"فسيكفيكهم\" بـ BPE إلى 4 مقاطع دلالية: `[فـ, سـ, يكفي, كهم]`، مقلصاً قاموس النموذج من $1.2$ مليون كلمة إلى $32,000$ مقطع قياسي بانعدام الرموز المجهولة.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Subword Tokenization (BPE) & Dense Word Embeddings.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: لنظام معالجة لغة عربية يتعامل مع الصرف، يؤدي تقطيع كلمة \"فسيكفيكهم\" بـ BPE إلى 4 مقاطع دلالية: `[فـ, سـ, يكفي, كهم]`، مقلصاً قاموس النموذج من $1.2$ مليون كلمة إلى $32,000$ مقطع قياسي بانعدام الرموز المجهولة.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch3_hots_53",
      "titleEn": "[HOTS] Scaled Dot-Product Multi-Head Self-Attention Mechanisms - Evaluation 53",
      "titleAr": "[تفكير عليا] آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس - تقييم 53",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Scaled Dot-Product Multi-Head Self-Attention Mechanisms: (Problem 53)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس: (مسألة 53)",
      "optionsEn": [
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "في نموذج Transformer ببعد $d_{model} = 768$ و $12$ رأساً للانتباه، يبلغ بعد الرأس $d_k = 64$. ويضمن القياس بـ $\\frac{1}{\\sqrt{64}} = 0.125$ بقاء تباين الجداء قريباً من $1.0$، مما يحقق استقراراً عددياً لـ softmax.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions.",
      "correctAnswerEn": "In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions.",
      "correctAnswerAr": "في نموذج Transformer ببعد $d_{model} = 768$ و $12$ رأساً للانتباه، يبلغ بعد الرأس $d_k = 64$. ويضمن القياس بـ $\\frac{1}{\\sqrt{64}} = 0.125$ بقاء تباين الجداء قريباً من $1.0$، مما يحقق استقراراً عددياً لـ softmax.",
      "correctIndex": 2,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في نموذج Transformer ببعد $d_{model} = 768$ و $12$ رأساً للانتباه، يبلغ بعد الرأس $d_k = 64$. ويضمن القياس بـ $\\frac{1}{\\sqrt{64}} = 0.125$ بقاء تباين الجداء قريباً من $1.0$، مما يحقق استقراراً عددياً لـ softmax.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Scaled Dot-Product Multi-Head Self-Attention Mechanisms.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في نموذج Transformer ببعد $d_{model} = 768$ و $12$ رأساً للانتباه، يبلغ بعد الرأس $d_k = 64$. ويضمن القياس بـ $\\frac{1}{\\sqrt{64}} = 0.125$ بقاء تباين الجداء قريباً من $1.0$، مما يحقق استقراراً عددياً لـ softmax.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch3_hots_54",
      "titleEn": "[HOTS] Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG) - Evaluation 54",
      "titleAr": "[تفكير عليا] النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG) - تقييم 54",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG): (Problem 54)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG): (مسألة 54)",
      "optionsEn": [
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$."
      ],
      "optionsAr": [
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "مساعد وزاري للإجابة على الأسئلة القانونية يفهرس 10,000 مادة. بتقسيم النصوص إلى مقاطع من 512 رمزاً مع تداخل $15\\%$ واسترجاع أفضل 4 مقاطع بـ HNSW، انخفض معدل الهلوسة من $28.4\\%$ إلى أقل من $1.2\\%$."
      ],
      "correctAnswer": "An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$.",
      "correctAnswerEn": "An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$.",
      "correctAnswerAr": "مساعد وزاري للإجابة على الأسئلة القانونية يفهرس 10,000 مادة. بتقسيم النصوص إلى مقاطع من 512 رمزاً مع تداخل $15\\%$ واسترجاع أفضل 4 مقاطع بـ HNSW، انخفض معدل الهلوسة من $28.4\\%$ إلى أقل من $1.2\\%$.",
      "correctIndex": 3,
      "explanationEn": "Detailed Solution & Numerical Evaluation: An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: مساعد وزاري للإجابة على الأسئلة القانونية يفهرس 10,000 مادة. بتقسيم النصوص إلى مقاطع من 512 رمزاً مع تداخل $15\\%$ واسترجاع أفضل 4 مقاطع بـ HNSW، انخفض معدل الهلوسة من $28.4\\%$ إلى أقل من $1.2\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: مساعد وزاري للإجابة على الأسئلة القانونية يفهرس 10,000 مادة. بتقسيم النصوص إلى مقاطع من 512 رمزاً مع تداخل $15\\%$ واسترجاع أفضل 4 مقاطع بـ HNSW، انخفض معدل الهلوسة من $28.4\\%$ إلى أقل من $1.2\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch3_hots_55",
      "titleEn": "[HOTS] Subword Tokenization (BPE) & Dense Word Embeddings - Evaluation 55",
      "titleAr": "[تفكير عليا] تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة - تقييم 55",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Subword Tokenization (BPE) & Dense Word Embeddings: (Problem 55)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة: (مسألة 55)",
      "optionsEn": [
        "For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "لنظام معالجة لغة عربية يتعامل مع الصرف، يؤدي تقطيع كلمة \"فسيكفيكهم\" بـ BPE إلى 4 مقاطع دلالية: `[فـ, سـ, يكفي, كهم]`، مقلصاً قاموس النموذج من $1.2$ مليون كلمة إلى $32,000$ مقطع قياسي بانعدام الرموز المجهولة.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.",
      "correctAnswerEn": "For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.",
      "correctAnswerAr": "لنظام معالجة لغة عربية يتعامل مع الصرف، يؤدي تقطيع كلمة \"فسيكفيكهم\" بـ BPE إلى 4 مقاطع دلالية: `[فـ, سـ, يكفي, كهم]`، مقلصاً قاموس النموذج من $1.2$ مليون كلمة إلى $32,000$ مقطع قياسي بانعدام الرموز المجهولة.",
      "correctIndex": 0,
      "explanationEn": "Detailed Solution & Numerical Evaluation: For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: لنظام معالجة لغة عربية يتعامل مع الصرف، يؤدي تقطيع كلمة \"فسيكفيكهم\" بـ BPE إلى 4 مقاطع دلالية: `[فـ, سـ, يكفي, كهم]`، مقلصاً قاموس النموذج من $1.2$ مليون كلمة إلى $32,000$ مقطع قياسي بانعدام الرموز المجهولة.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Subword Tokenization (BPE) & Dense Word Embeddings.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: لنظام معالجة لغة عربية يتعامل مع الصرف، يؤدي تقطيع كلمة \"فسيكفيكهم\" بـ BPE إلى 4 مقاطع دلالية: `[فـ, سـ, يكفي, كهم]`، مقلصاً قاموس النموذج من $1.2$ مليون كلمة إلى $32,000$ مقطع قياسي بانعدام الرموز المجهولة.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch3_hots_56",
      "titleEn": "[HOTS] Scaled Dot-Product Multi-Head Self-Attention Mechanisms - Evaluation 56",
      "titleAr": "[تفكير عليا] آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس - تقييم 56",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Scaled Dot-Product Multi-Head Self-Attention Mechanisms: (Problem 56)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس: (مسألة 56)",
      "optionsEn": [
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "في نموذج Transformer ببعد $d_{model} = 768$ و $12$ رأساً للانتباه، يبلغ بعد الرأس $d_k = 64$. ويضمن القياس بـ $\\frac{1}{\\sqrt{64}} = 0.125$ بقاء تباين الجداء قريباً من $1.0$، مما يحقق استقراراً عددياً لـ softmax.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions.",
      "correctAnswerEn": "In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions.",
      "correctAnswerAr": "في نموذج Transformer ببعد $d_{model} = 768$ و $12$ رأساً للانتباه، يبلغ بعد الرأس $d_k = 64$. ويضمن القياس بـ $\\frac{1}{\\sqrt{64}} = 0.125$ بقاء تباين الجداء قريباً من $1.0$، مما يحقق استقراراً عددياً لـ softmax.",
      "correctIndex": 1,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في نموذج Transformer ببعد $d_{model} = 768$ و $12$ رأساً للانتباه، يبلغ بعد الرأس $d_k = 64$. ويضمن القياس بـ $\\frac{1}{\\sqrt{64}} = 0.125$ بقاء تباين الجداء قريباً من $1.0$، مما يحقق استقراراً عددياً لـ softmax.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Scaled Dot-Product Multi-Head Self-Attention Mechanisms.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في نموذج Transformer ببعد $d_{model} = 768$ و $12$ رأساً للانتباه، يبلغ بعد الرأس $d_k = 64$. ويضمن القياس بـ $\\frac{1}{\\sqrt{64}} = 0.125$ بقاء تباين الجداء قريباً من $1.0$، مما يحقق استقراراً عددياً لـ softmax.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch3_hots_57",
      "titleEn": "[HOTS] Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG) - Evaluation 57",
      "titleAr": "[تفكير عليا] النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG) - تقييم 57",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG): (Problem 57)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG): (مسألة 57)",
      "optionsEn": [
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "مساعد وزاري للإجابة على الأسئلة القانونية يفهرس 10,000 مادة. بتقسيم النصوص إلى مقاطع من 512 رمزاً مع تداخل $15\\%$ واسترجاع أفضل 4 مقاطع بـ HNSW، انخفض معدل الهلوسة من $28.4\\%$ إلى أقل من $1.2\\%$.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$.",
      "correctAnswerEn": "An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$.",
      "correctAnswerAr": "مساعد وزاري للإجابة على الأسئلة القانونية يفهرس 10,000 مادة. بتقسيم النصوص إلى مقاطع من 512 رمزاً مع تداخل $15\\%$ واسترجاع أفضل 4 مقاطع بـ HNSW، انخفض معدل الهلوسة من $28.4\\%$ إلى أقل من $1.2\\%$.",
      "correctIndex": 2,
      "explanationEn": "Detailed Solution & Numerical Evaluation: An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: مساعد وزاري للإجابة على الأسئلة القانونية يفهرس 10,000 مادة. بتقسيم النصوص إلى مقاطع من 512 رمزاً مع تداخل $15\\%$ واسترجاع أفضل 4 مقاطع بـ HNSW، انخفض معدل الهلوسة من $28.4\\%$ إلى أقل من $1.2\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: مساعد وزاري للإجابة على الأسئلة القانونية يفهرس 10,000 مادة. بتقسيم النصوص إلى مقاطع من 512 رمزاً مع تداخل $15\\%$ واسترجاع أفضل 4 مقاطع بـ HNSW، انخفض معدل الهلوسة من $28.4\\%$ إلى أقل من $1.2\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_ai_data_science_ch3_hots_58",
      "titleEn": "[HOTS] Subword Tokenization (BPE) & Dense Word Embeddings - Evaluation 58",
      "titleAr": "[تفكير عليا] تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة - تقييم 58",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Subword Tokenization (BPE) & Dense Word Embeddings: (Problem 58)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة: (مسألة 58)",
      "optionsEn": [
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens."
      ],
      "optionsAr": [
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "لنظام معالجة لغة عربية يتعامل مع الصرف، يؤدي تقطيع كلمة \"فسيكفيكهم\" بـ BPE إلى 4 مقاطع دلالية: `[فـ, سـ, يكفي, كهم]`، مقلصاً قاموس النموذج من $1.2$ مليون كلمة إلى $32,000$ مقطع قياسي بانعدام الرموز المجهولة."
      ],
      "correctAnswer": "For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.",
      "correctAnswerEn": "For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.",
      "correctAnswerAr": "لنظام معالجة لغة عربية يتعامل مع الصرف، يؤدي تقطيع كلمة \"فسيكفيكهم\" بـ BPE إلى 4 مقاطع دلالية: `[فـ, سـ, يكفي, كهم]`، مقلصاً قاموس النموذج من $1.2$ مليون كلمة إلى $32,000$ مقطع قياسي بانعدام الرموز المجهولة.",
      "correctIndex": 3,
      "explanationEn": "Detailed Solution & Numerical Evaluation: For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: لنظام معالجة لغة عربية يتعامل مع الصرف، يؤدي تقطيع كلمة \"فسيكفيكهم\" بـ BPE إلى 4 مقاطع دلالية: `[فـ, سـ, يكفي, كهم]`، مقلصاً قاموس النموذج من $1.2$ مليون كلمة إلى $32,000$ مقطع قياسي بانعدام الرموز المجهولة.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Subword Tokenization (BPE) & Dense Word Embeddings.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: لنظام معالجة لغة عربية يتعامل مع الصرف، يؤدي تقطيع كلمة \"فسيكفيكهم\" بـ BPE إلى 4 مقاطع دلالية: `[فـ, سـ, يكفي, كهم]`، مقلصاً قاموس النموذج من $1.2$ مليون كلمة إلى $32,000$ مقطع قياسي بانعدام الرموز المجهولة.."
      ],
      "difficulty": "hots"
    }
  ]
};
