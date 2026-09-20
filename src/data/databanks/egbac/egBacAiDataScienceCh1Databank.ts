import type { ChapterDatabank } from '../../../types/curriculum';

export const egbac_ai_data_science_ch1Databank: ChapterDatabank = {
  "easy": [
    {
      "id": "egbac_ai_data_science_ch1_easy_1",
      "titleEn": "[EASY] Bayesian Networks, Directed Acyclic Graphs & D-Separation - Review 1",
      "titleAr": "[مستوى أساسي] شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation) - سؤال 1",
      "questionEn": "[AI & Data Science Core Concept] Regarding Bayesian Networks, Directed Acyclic Graphs & D-Separation, which of the following statements is theoretically and mathematically sound? (Variant 1)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 1)",
      "optionsEn": [
        "A Bayesian Network represents the joint probability distribution of random variables as a directed acyclic graph (DAG) factored into local conditional distributions: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "تمثل شبكة بايز التوزيع الاحتمالي المشترك لمتغيرات عشوائية كمخطط موجه عديم الحلقات (DAG) مفككاً إلى توزيعات شرطية محلية: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "A Bayesian Network represents the joint probability distribution of random variables as a directed acyclic graph (DAG) factored into local conditional distributions: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
      "correctAnswerEn": "A Bayesian Network represents the joint probability distribution of random variables as a directed acyclic graph (DAG) factored into local conditional distributions: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
      "correctAnswerAr": "تمثل شبكة بايز التوزيع الاحتمالي المشترك لمتغيرات عشوائية كمخطط موجه عديم الحلقات (DAG) مفككاً إلى توزيعات شرطية محلية: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
      "correctIndex": 0,
      "explanationEn": "Correct Theoretical Formulation: A Bayesian Network represents the joint probability distribution of random variables as a directed acyclic graph (DAG) factored into local conditional distributions: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تمثل شبكة بايز التوزيع الاحتمالي المشترك لمتغيرات عشوائية كمخطط موجه عديم الحلقات (DAG) مفككاً إلى توزيعات شرطية محلية: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Bayesian Networks, Directed Acyclic Graphs & D-Separation.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: A Bayesian Network represents the joint probability distribution of random variables as a directed acyclic graph (DAG) factored into local conditional distributions: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تمثل شبكة بايز التوزيع الاحتمالي المشترك لمتغيرات عشوائية كمخطط موجه عديم الحلقات (DAG) مفككاً إلى توزيعات شرطية محلية: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch1_easy_2",
      "titleEn": "[EASY] Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models - Review 2",
      "titleAr": "[مستوى أساسي] خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs) - سؤال 2",
      "questionEn": "[AI & Data Science Core Concept] Regarding Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models, which of the following statements is theoretically and mathematically sound? (Variant 2)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 2)",
      "optionsEn": [
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "Gaussian Mixture Models represent complex multimodal data distributions as a weighted sum of $K$ Gaussian components with prior mixture weights $\\pi_k$, mean vectors $\\mu_k$, and covariance matrices $\\Sigma_k$.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تمثل نماذج المزيج الغاوسي توزيعات البيانات المعقدة كمجموع مرجح لـ $K$ توزيعات غاوسية بأوزان خلط مسبقة $\\pi_k$ ومتجهات متوسطات $\\mu_k$ ومصفوفات تغاير $\\Sigma_k$.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "Gaussian Mixture Models represent complex multimodal data distributions as a weighted sum of $K$ Gaussian components with prior mixture weights $\\pi_k$, mean vectors $\\mu_k$, and covariance matrices $\\Sigma_k$.",
      "correctAnswerEn": "Gaussian Mixture Models represent complex multimodal data distributions as a weighted sum of $K$ Gaussian components with prior mixture weights $\\pi_k$, mean vectors $\\mu_k$, and covariance matrices $\\Sigma_k$.",
      "correctAnswerAr": "تمثل نماذج المزيج الغاوسي توزيعات البيانات المعقدة كمجموع مرجح لـ $K$ توزيعات غاوسية بأوزان خلط مسبقة $\\pi_k$ ومتجهات متوسطات $\\mu_k$ ومصفوفات تغاير $\\Sigma_k$.",
      "correctIndex": 1,
      "explanationEn": "Correct Theoretical Formulation: Gaussian Mixture Models represent complex multimodal data distributions as a weighted sum of $K$ Gaussian components with prior mixture weights $\\pi_k$, mean vectors $\\mu_k$, and covariance matrices $\\Sigma_k$.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تمثل نماذج المزيج الغاوسي توزيعات البيانات المعقدة كمجموع مرجح لـ $K$ توزيعات غاوسية بأوزان خلط مسبقة $\\pi_k$ ومتجهات متوسطات $\\mu_k$ ومصفوفات تغاير $\\Sigma_k$.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Gaussian Mixture Models represent complex multimodal data distributions as a weighted sum of $K$ Gaussian components with prior mixture weights $\\pi_k$, mean vectors $\\mu_k$, and covariance matrices $\\Sigma_k$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تمثل نماذج المزيج الغاوسي توزيعات البيانات المعقدة كمجموع مرجح لـ $K$ توزيعات غاوسية بأوزان خلط مسبقة $\\pi_k$ ومتجهات متوسطات $\\mu_k$ ومصفوفات تغاير $\\Sigma_k$.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch1_easy_3",
      "titleEn": "[EASY] Variational Inference & Evidence Lower Bound (ELBO) Derivation - Review 3",
      "titleAr": "[مستوى أساسي] الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO) - سؤال 3",
      "questionEn": "[AI & Data Science Core Concept] Regarding Variational Inference & Evidence Lower Bound (ELBO) Derivation, which of the following statements is theoretically and mathematically sound? (Variant 3)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 3)",
      "optionsEn": [
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Variational Inference transforms intractable Bayesian posterior inference into an optimization problem by approximating the true posterior $p(z|x)$ with a tractable family $q_\\phi(z)$.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "يحول الاستدلال المتغير معضلة حساب التوزيع اللاحق المستعصي $p(z|x)$ إلى مسألة تحسين عبر تقريبه بعائلة توزيعات مطواعة $q_\\phi(z)$.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "Variational Inference transforms intractable Bayesian posterior inference into an optimization problem by approximating the true posterior $p(z|x)$ with a tractable family $q_\\phi(z)$.",
      "correctAnswerEn": "Variational Inference transforms intractable Bayesian posterior inference into an optimization problem by approximating the true posterior $p(z|x)$ with a tractable family $q_\\phi(z)$.",
      "correctAnswerAr": "يحول الاستدلال المتغير معضلة حساب التوزيع اللاحق المستعصي $p(z|x)$ إلى مسألة تحسين عبر تقريبه بعائلة توزيعات مطواعة $q_\\phi(z)$.",
      "correctIndex": 2,
      "explanationEn": "Correct Theoretical Formulation: Variational Inference transforms intractable Bayesian posterior inference into an optimization problem by approximating the true posterior $p(z|x)$ with a tractable family $q_\\phi(z)$.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يحول الاستدلال المتغير معضلة حساب التوزيع اللاحق المستعصي $p(z|x)$ إلى مسألة تحسين عبر تقريبه بعائلة توزيعات مطواعة $q_\\phi(z)$.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Variational Inference & Evidence Lower Bound (ELBO) Derivation.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Variational Inference transforms intractable Bayesian posterior inference into an optimization problem by approximating the true posterior $p(z|x)$ with a tractable family $q_\\phi(z)$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يحول الاستدلال المتغير معضلة حساب التوزيع اللاحق المستعصي $p(z|x)$ إلى مسألة تحسين عبر تقريبه بعائلة توزيعات مطواعة $q_\\phi(z)$.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch1_easy_4",
      "titleEn": "[EASY] Bayesian Networks, Directed Acyclic Graphs & D-Separation - Review 4",
      "titleAr": "[مستوى أساسي] شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation) - سؤال 4",
      "questionEn": "[AI & Data Science Core Concept] Regarding Bayesian Networks, Directed Acyclic Graphs & D-Separation, which of the following statements is theoretically and mathematically sound? (Variant 4)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 4)",
      "optionsEn": [
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "A Bayesian Network represents the joint probability distribution of random variables as a directed acyclic graph (DAG) factored into local conditional distributions: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$."
      ],
      "optionsAr": [
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تمثل شبكة بايز التوزيع الاحتمالي المشترك لمتغيرات عشوائية كمخطط موجه عديم الحلقات (DAG) مفككاً إلى توزيعات شرطية محلية: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$."
      ],
      "correctAnswer": "A Bayesian Network represents the joint probability distribution of random variables as a directed acyclic graph (DAG) factored into local conditional distributions: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
      "correctAnswerEn": "A Bayesian Network represents the joint probability distribution of random variables as a directed acyclic graph (DAG) factored into local conditional distributions: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
      "correctAnswerAr": "تمثل شبكة بايز التوزيع الاحتمالي المشترك لمتغيرات عشوائية كمخطط موجه عديم الحلقات (DAG) مفككاً إلى توزيعات شرطية محلية: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
      "correctIndex": 3,
      "explanationEn": "Correct Theoretical Formulation: A Bayesian Network represents the joint probability distribution of random variables as a directed acyclic graph (DAG) factored into local conditional distributions: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تمثل شبكة بايز التوزيع الاحتمالي المشترك لمتغيرات عشوائية كمخطط موجه عديم الحلقات (DAG) مفككاً إلى توزيعات شرطية محلية: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Bayesian Networks, Directed Acyclic Graphs & D-Separation.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: A Bayesian Network represents the joint probability distribution of random variables as a directed acyclic graph (DAG) factored into local conditional distributions: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تمثل شبكة بايز التوزيع الاحتمالي المشترك لمتغيرات عشوائية كمخطط موجه عديم الحلقات (DAG) مفككاً إلى توزيعات شرطية محلية: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch1_easy_5",
      "titleEn": "[EASY] Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models - Review 5",
      "titleAr": "[مستوى أساسي] خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs) - سؤال 5",
      "questionEn": "[AI & Data Science Core Concept] Regarding Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models, which of the following statements is theoretically and mathematically sound? (Variant 5)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 5)",
      "optionsEn": [
        "Gaussian Mixture Models represent complex multimodal data distributions as a weighted sum of $K$ Gaussian components with prior mixture weights $\\pi_k$, mean vectors $\\mu_k$, and covariance matrices $\\Sigma_k$.",
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تمثل نماذج المزيج الغاوسي توزيعات البيانات المعقدة كمجموع مرجح لـ $K$ توزيعات غاوسية بأوزان خلط مسبقة $\\pi_k$ ومتجهات متوسطات $\\mu_k$ ومصفوفات تغاير $\\Sigma_k$.",
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "Gaussian Mixture Models represent complex multimodal data distributions as a weighted sum of $K$ Gaussian components with prior mixture weights $\\pi_k$, mean vectors $\\mu_k$, and covariance matrices $\\Sigma_k$.",
      "correctAnswerEn": "Gaussian Mixture Models represent complex multimodal data distributions as a weighted sum of $K$ Gaussian components with prior mixture weights $\\pi_k$, mean vectors $\\mu_k$, and covariance matrices $\\Sigma_k$.",
      "correctAnswerAr": "تمثل نماذج المزيج الغاوسي توزيعات البيانات المعقدة كمجموع مرجح لـ $K$ توزيعات غاوسية بأوزان خلط مسبقة $\\pi_k$ ومتجهات متوسطات $\\mu_k$ ومصفوفات تغاير $\\Sigma_k$.",
      "correctIndex": 0,
      "explanationEn": "Correct Theoretical Formulation: Gaussian Mixture Models represent complex multimodal data distributions as a weighted sum of $K$ Gaussian components with prior mixture weights $\\pi_k$, mean vectors $\\mu_k$, and covariance matrices $\\Sigma_k$.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تمثل نماذج المزيج الغاوسي توزيعات البيانات المعقدة كمجموع مرجح لـ $K$ توزيعات غاوسية بأوزان خلط مسبقة $\\pi_k$ ومتجهات متوسطات $\\mu_k$ ومصفوفات تغاير $\\Sigma_k$.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Gaussian Mixture Models represent complex multimodal data distributions as a weighted sum of $K$ Gaussian components with prior mixture weights $\\pi_k$, mean vectors $\\mu_k$, and covariance matrices $\\Sigma_k$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تمثل نماذج المزيج الغاوسي توزيعات البيانات المعقدة كمجموع مرجح لـ $K$ توزيعات غاوسية بأوزان خلط مسبقة $\\pi_k$ ومتجهات متوسطات $\\mu_k$ ومصفوفات تغاير $\\Sigma_k$.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch1_easy_6",
      "titleEn": "[EASY] Variational Inference & Evidence Lower Bound (ELBO) Derivation - Review 6",
      "titleAr": "[مستوى أساسي] الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO) - سؤال 6",
      "questionEn": "[AI & Data Science Core Concept] Regarding Variational Inference & Evidence Lower Bound (ELBO) Derivation, which of the following statements is theoretically and mathematically sound? (Variant 6)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 6)",
      "optionsEn": [
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Variational Inference transforms intractable Bayesian posterior inference into an optimization problem by approximating the true posterior $p(z|x)$ with a tractable family $q_\\phi(z)$.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يحول الاستدلال المتغير معضلة حساب التوزيع اللاحق المستعصي $p(z|x)$ إلى مسألة تحسين عبر تقريبه بعائلة توزيعات مطواعة $q_\\phi(z)$.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "Variational Inference transforms intractable Bayesian posterior inference into an optimization problem by approximating the true posterior $p(z|x)$ with a tractable family $q_\\phi(z)$.",
      "correctAnswerEn": "Variational Inference transforms intractable Bayesian posterior inference into an optimization problem by approximating the true posterior $p(z|x)$ with a tractable family $q_\\phi(z)$.",
      "correctAnswerAr": "يحول الاستدلال المتغير معضلة حساب التوزيع اللاحق المستعصي $p(z|x)$ إلى مسألة تحسين عبر تقريبه بعائلة توزيعات مطواعة $q_\\phi(z)$.",
      "correctIndex": 1,
      "explanationEn": "Correct Theoretical Formulation: Variational Inference transforms intractable Bayesian posterior inference into an optimization problem by approximating the true posterior $p(z|x)$ with a tractable family $q_\\phi(z)$.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يحول الاستدلال المتغير معضلة حساب التوزيع اللاحق المستعصي $p(z|x)$ إلى مسألة تحسين عبر تقريبه بعائلة توزيعات مطواعة $q_\\phi(z)$.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Variational Inference & Evidence Lower Bound (ELBO) Derivation.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Variational Inference transforms intractable Bayesian posterior inference into an optimization problem by approximating the true posterior $p(z|x)$ with a tractable family $q_\\phi(z)$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يحول الاستدلال المتغير معضلة حساب التوزيع اللاحق المستعصي $p(z|x)$ إلى مسألة تحسين عبر تقريبه بعائلة توزيعات مطواعة $q_\\phi(z)$.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch1_easy_7",
      "titleEn": "[EASY] Bayesian Networks, Directed Acyclic Graphs & D-Separation - Review 7",
      "titleAr": "[مستوى أساسي] شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation) - سؤال 7",
      "questionEn": "[AI & Data Science Core Concept] Regarding Bayesian Networks, Directed Acyclic Graphs & D-Separation, which of the following statements is theoretically and mathematically sound? (Variant 7)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 7)",
      "optionsEn": [
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "A Bayesian Network represents the joint probability distribution of random variables as a directed acyclic graph (DAG) factored into local conditional distributions: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تمثل شبكة بايز التوزيع الاحتمالي المشترك لمتغيرات عشوائية كمخطط موجه عديم الحلقات (DAG) مفككاً إلى توزيعات شرطية محلية: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "A Bayesian Network represents the joint probability distribution of random variables as a directed acyclic graph (DAG) factored into local conditional distributions: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
      "correctAnswerEn": "A Bayesian Network represents the joint probability distribution of random variables as a directed acyclic graph (DAG) factored into local conditional distributions: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
      "correctAnswerAr": "تمثل شبكة بايز التوزيع الاحتمالي المشترك لمتغيرات عشوائية كمخطط موجه عديم الحلقات (DAG) مفككاً إلى توزيعات شرطية محلية: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
      "correctIndex": 2,
      "explanationEn": "Correct Theoretical Formulation: A Bayesian Network represents the joint probability distribution of random variables as a directed acyclic graph (DAG) factored into local conditional distributions: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تمثل شبكة بايز التوزيع الاحتمالي المشترك لمتغيرات عشوائية كمخطط موجه عديم الحلقات (DAG) مفككاً إلى توزيعات شرطية محلية: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Bayesian Networks, Directed Acyclic Graphs & D-Separation.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: A Bayesian Network represents the joint probability distribution of random variables as a directed acyclic graph (DAG) factored into local conditional distributions: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تمثل شبكة بايز التوزيع الاحتمالي المشترك لمتغيرات عشوائية كمخطط موجه عديم الحلقات (DAG) مفككاً إلى توزيعات شرطية محلية: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch1_easy_8",
      "titleEn": "[EASY] Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models - Review 8",
      "titleAr": "[مستوى أساسي] خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs) - سؤال 8",
      "questionEn": "[AI & Data Science Core Concept] Regarding Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models, which of the following statements is theoretically and mathematically sound? (Variant 8)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 8)",
      "optionsEn": [
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "Gaussian Mixture Models represent complex multimodal data distributions as a weighted sum of $K$ Gaussian components with prior mixture weights $\\pi_k$, mean vectors $\\mu_k$, and covariance matrices $\\Sigma_k$."
      ],
      "optionsAr": [
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "تمثل نماذج المزيج الغاوسي توزيعات البيانات المعقدة كمجموع مرجح لـ $K$ توزيعات غاوسية بأوزان خلط مسبقة $\\pi_k$ ومتجهات متوسطات $\\mu_k$ ومصفوفات تغاير $\\Sigma_k$."
      ],
      "correctAnswer": "Gaussian Mixture Models represent complex multimodal data distributions as a weighted sum of $K$ Gaussian components with prior mixture weights $\\pi_k$, mean vectors $\\mu_k$, and covariance matrices $\\Sigma_k$.",
      "correctAnswerEn": "Gaussian Mixture Models represent complex multimodal data distributions as a weighted sum of $K$ Gaussian components with prior mixture weights $\\pi_k$, mean vectors $\\mu_k$, and covariance matrices $\\Sigma_k$.",
      "correctAnswerAr": "تمثل نماذج المزيج الغاوسي توزيعات البيانات المعقدة كمجموع مرجح لـ $K$ توزيعات غاوسية بأوزان خلط مسبقة $\\pi_k$ ومتجهات متوسطات $\\mu_k$ ومصفوفات تغاير $\\Sigma_k$.",
      "correctIndex": 3,
      "explanationEn": "Correct Theoretical Formulation: Gaussian Mixture Models represent complex multimodal data distributions as a weighted sum of $K$ Gaussian components with prior mixture weights $\\pi_k$, mean vectors $\\mu_k$, and covariance matrices $\\Sigma_k$.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تمثل نماذج المزيج الغاوسي توزيعات البيانات المعقدة كمجموع مرجح لـ $K$ توزيعات غاوسية بأوزان خلط مسبقة $\\pi_k$ ومتجهات متوسطات $\\mu_k$ ومصفوفات تغاير $\\Sigma_k$.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Gaussian Mixture Models represent complex multimodal data distributions as a weighted sum of $K$ Gaussian components with prior mixture weights $\\pi_k$, mean vectors $\\mu_k$, and covariance matrices $\\Sigma_k$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تمثل نماذج المزيج الغاوسي توزيعات البيانات المعقدة كمجموع مرجح لـ $K$ توزيعات غاوسية بأوزان خلط مسبقة $\\pi_k$ ومتجهات متوسطات $\\mu_k$ ومصفوفات تغاير $\\Sigma_k$.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch1_easy_9",
      "titleEn": "[EASY] Variational Inference & Evidence Lower Bound (ELBO) Derivation - Review 9",
      "titleAr": "[مستوى أساسي] الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO) - سؤال 9",
      "questionEn": "[AI & Data Science Core Concept] Regarding Variational Inference & Evidence Lower Bound (ELBO) Derivation, which of the following statements is theoretically and mathematically sound? (Variant 9)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 9)",
      "optionsEn": [
        "Variational Inference transforms intractable Bayesian posterior inference into an optimization problem by approximating the true posterior $p(z|x)$ with a tractable family $q_\\phi(z)$.",
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "يحول الاستدلال المتغير معضلة حساب التوزيع اللاحق المستعصي $p(z|x)$ إلى مسألة تحسين عبر تقريبه بعائلة توزيعات مطواعة $q_\\phi(z)$.",
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "Variational Inference transforms intractable Bayesian posterior inference into an optimization problem by approximating the true posterior $p(z|x)$ with a tractable family $q_\\phi(z)$.",
      "correctAnswerEn": "Variational Inference transforms intractable Bayesian posterior inference into an optimization problem by approximating the true posterior $p(z|x)$ with a tractable family $q_\\phi(z)$.",
      "correctAnswerAr": "يحول الاستدلال المتغير معضلة حساب التوزيع اللاحق المستعصي $p(z|x)$ إلى مسألة تحسين عبر تقريبه بعائلة توزيعات مطواعة $q_\\phi(z)$.",
      "correctIndex": 0,
      "explanationEn": "Correct Theoretical Formulation: Variational Inference transforms intractable Bayesian posterior inference into an optimization problem by approximating the true posterior $p(z|x)$ with a tractable family $q_\\phi(z)$.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يحول الاستدلال المتغير معضلة حساب التوزيع اللاحق المستعصي $p(z|x)$ إلى مسألة تحسين عبر تقريبه بعائلة توزيعات مطواعة $q_\\phi(z)$.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Variational Inference & Evidence Lower Bound (ELBO) Derivation.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Variational Inference transforms intractable Bayesian posterior inference into an optimization problem by approximating the true posterior $p(z|x)$ with a tractable family $q_\\phi(z)$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يحول الاستدلال المتغير معضلة حساب التوزيع اللاحق المستعصي $p(z|x)$ إلى مسألة تحسين عبر تقريبه بعائلة توزيعات مطواعة $q_\\phi(z)$.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch1_easy_10",
      "titleEn": "[EASY] Bayesian Networks, Directed Acyclic Graphs & D-Separation - Review 10",
      "titleAr": "[مستوى أساسي] شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation) - سؤال 10",
      "questionEn": "[AI & Data Science Core Concept] Regarding Bayesian Networks, Directed Acyclic Graphs & D-Separation, which of the following statements is theoretically and mathematically sound? (Variant 10)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 10)",
      "optionsEn": [
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "A Bayesian Network represents the joint probability distribution of random variables as a directed acyclic graph (DAG) factored into local conditional distributions: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تمثل شبكة بايز التوزيع الاحتمالي المشترك لمتغيرات عشوائية كمخطط موجه عديم الحلقات (DAG) مفككاً إلى توزيعات شرطية محلية: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "A Bayesian Network represents the joint probability distribution of random variables as a directed acyclic graph (DAG) factored into local conditional distributions: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
      "correctAnswerEn": "A Bayesian Network represents the joint probability distribution of random variables as a directed acyclic graph (DAG) factored into local conditional distributions: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
      "correctAnswerAr": "تمثل شبكة بايز التوزيع الاحتمالي المشترك لمتغيرات عشوائية كمخطط موجه عديم الحلقات (DAG) مفككاً إلى توزيعات شرطية محلية: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
      "correctIndex": 1,
      "explanationEn": "Correct Theoretical Formulation: A Bayesian Network represents the joint probability distribution of random variables as a directed acyclic graph (DAG) factored into local conditional distributions: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تمثل شبكة بايز التوزيع الاحتمالي المشترك لمتغيرات عشوائية كمخطط موجه عديم الحلقات (DAG) مفككاً إلى توزيعات شرطية محلية: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Bayesian Networks, Directed Acyclic Graphs & D-Separation.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: A Bayesian Network represents the joint probability distribution of random variables as a directed acyclic graph (DAG) factored into local conditional distributions: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تمثل شبكة بايز التوزيع الاحتمالي المشترك لمتغيرات عشوائية كمخطط موجه عديم الحلقات (DAG) مفككاً إلى توزيعات شرطية محلية: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch1_easy_11",
      "titleEn": "[EASY] Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models - Review 11",
      "titleAr": "[مستوى أساسي] خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs) - سؤال 11",
      "questionEn": "[AI & Data Science Core Concept] Regarding Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models, which of the following statements is theoretically and mathematically sound? (Variant 11)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 11)",
      "optionsEn": [
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "Gaussian Mixture Models represent complex multimodal data distributions as a weighted sum of $K$ Gaussian components with prior mixture weights $\\pi_k$, mean vectors $\\mu_k$, and covariance matrices $\\Sigma_k$.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "تمثل نماذج المزيج الغاوسي توزيعات البيانات المعقدة كمجموع مرجح لـ $K$ توزيعات غاوسية بأوزان خلط مسبقة $\\pi_k$ ومتجهات متوسطات $\\mu_k$ ومصفوفات تغاير $\\Sigma_k$.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "Gaussian Mixture Models represent complex multimodal data distributions as a weighted sum of $K$ Gaussian components with prior mixture weights $\\pi_k$, mean vectors $\\mu_k$, and covariance matrices $\\Sigma_k$.",
      "correctAnswerEn": "Gaussian Mixture Models represent complex multimodal data distributions as a weighted sum of $K$ Gaussian components with prior mixture weights $\\pi_k$, mean vectors $\\mu_k$, and covariance matrices $\\Sigma_k$.",
      "correctAnswerAr": "تمثل نماذج المزيج الغاوسي توزيعات البيانات المعقدة كمجموع مرجح لـ $K$ توزيعات غاوسية بأوزان خلط مسبقة $\\pi_k$ ومتجهات متوسطات $\\mu_k$ ومصفوفات تغاير $\\Sigma_k$.",
      "correctIndex": 2,
      "explanationEn": "Correct Theoretical Formulation: Gaussian Mixture Models represent complex multimodal data distributions as a weighted sum of $K$ Gaussian components with prior mixture weights $\\pi_k$, mean vectors $\\mu_k$, and covariance matrices $\\Sigma_k$.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تمثل نماذج المزيج الغاوسي توزيعات البيانات المعقدة كمجموع مرجح لـ $K$ توزيعات غاوسية بأوزان خلط مسبقة $\\pi_k$ ومتجهات متوسطات $\\mu_k$ ومصفوفات تغاير $\\Sigma_k$.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Gaussian Mixture Models represent complex multimodal data distributions as a weighted sum of $K$ Gaussian components with prior mixture weights $\\pi_k$, mean vectors $\\mu_k$, and covariance matrices $\\Sigma_k$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تمثل نماذج المزيج الغاوسي توزيعات البيانات المعقدة كمجموع مرجح لـ $K$ توزيعات غاوسية بأوزان خلط مسبقة $\\pi_k$ ومتجهات متوسطات $\\mu_k$ ومصفوفات تغاير $\\Sigma_k$.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch1_easy_12",
      "titleEn": "[EASY] Variational Inference & Evidence Lower Bound (ELBO) Derivation - Review 12",
      "titleAr": "[مستوى أساسي] الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO) - سؤال 12",
      "questionEn": "[AI & Data Science Core Concept] Regarding Variational Inference & Evidence Lower Bound (ELBO) Derivation, which of the following statements is theoretically and mathematically sound? (Variant 12)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 12)",
      "optionsEn": [
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "Variational Inference transforms intractable Bayesian posterior inference into an optimization problem by approximating the true posterior $p(z|x)$ with a tractable family $q_\\phi(z)$."
      ],
      "optionsAr": [
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "يحول الاستدلال المتغير معضلة حساب التوزيع اللاحق المستعصي $p(z|x)$ إلى مسألة تحسين عبر تقريبه بعائلة توزيعات مطواعة $q_\\phi(z)$."
      ],
      "correctAnswer": "Variational Inference transforms intractable Bayesian posterior inference into an optimization problem by approximating the true posterior $p(z|x)$ with a tractable family $q_\\phi(z)$.",
      "correctAnswerEn": "Variational Inference transforms intractable Bayesian posterior inference into an optimization problem by approximating the true posterior $p(z|x)$ with a tractable family $q_\\phi(z)$.",
      "correctAnswerAr": "يحول الاستدلال المتغير معضلة حساب التوزيع اللاحق المستعصي $p(z|x)$ إلى مسألة تحسين عبر تقريبه بعائلة توزيعات مطواعة $q_\\phi(z)$.",
      "correctIndex": 3,
      "explanationEn": "Correct Theoretical Formulation: Variational Inference transforms intractable Bayesian posterior inference into an optimization problem by approximating the true posterior $p(z|x)$ with a tractable family $q_\\phi(z)$.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يحول الاستدلال المتغير معضلة حساب التوزيع اللاحق المستعصي $p(z|x)$ إلى مسألة تحسين عبر تقريبه بعائلة توزيعات مطواعة $q_\\phi(z)$.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Variational Inference & Evidence Lower Bound (ELBO) Derivation.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Variational Inference transforms intractable Bayesian posterior inference into an optimization problem by approximating the true posterior $p(z|x)$ with a tractable family $q_\\phi(z)$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يحول الاستدلال المتغير معضلة حساب التوزيع اللاحق المستعصي $p(z|x)$ إلى مسألة تحسين عبر تقريبه بعائلة توزيعات مطواعة $q_\\phi(z)$.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch1_easy_13",
      "titleEn": "[EASY] Bayesian Networks, Directed Acyclic Graphs & D-Separation - Review 13",
      "titleAr": "[مستوى أساسي] شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation) - سؤال 13",
      "questionEn": "[AI & Data Science Core Concept] Regarding Bayesian Networks, Directed Acyclic Graphs & D-Separation, which of the following statements is theoretically and mathematically sound? (Variant 13)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 13)",
      "optionsEn": [
        "A Bayesian Network represents the joint probability distribution of random variables as a directed acyclic graph (DAG) factored into local conditional distributions: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "تمثل شبكة بايز التوزيع الاحتمالي المشترك لمتغيرات عشوائية كمخطط موجه عديم الحلقات (DAG) مفككاً إلى توزيعات شرطية محلية: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "A Bayesian Network represents the joint probability distribution of random variables as a directed acyclic graph (DAG) factored into local conditional distributions: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
      "correctAnswerEn": "A Bayesian Network represents the joint probability distribution of random variables as a directed acyclic graph (DAG) factored into local conditional distributions: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
      "correctAnswerAr": "تمثل شبكة بايز التوزيع الاحتمالي المشترك لمتغيرات عشوائية كمخطط موجه عديم الحلقات (DAG) مفككاً إلى توزيعات شرطية محلية: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
      "correctIndex": 0,
      "explanationEn": "Correct Theoretical Formulation: A Bayesian Network represents the joint probability distribution of random variables as a directed acyclic graph (DAG) factored into local conditional distributions: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تمثل شبكة بايز التوزيع الاحتمالي المشترك لمتغيرات عشوائية كمخطط موجه عديم الحلقات (DAG) مفككاً إلى توزيعات شرطية محلية: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Bayesian Networks, Directed Acyclic Graphs & D-Separation.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: A Bayesian Network represents the joint probability distribution of random variables as a directed acyclic graph (DAG) factored into local conditional distributions: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تمثل شبكة بايز التوزيع الاحتمالي المشترك لمتغيرات عشوائية كمخطط موجه عديم الحلقات (DAG) مفككاً إلى توزيعات شرطية محلية: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch1_easy_14",
      "titleEn": "[EASY] Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models - Review 14",
      "titleAr": "[مستوى أساسي] خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs) - سؤال 14",
      "questionEn": "[AI & Data Science Core Concept] Regarding Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models, which of the following statements is theoretically and mathematically sound? (Variant 14)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 14)",
      "optionsEn": [
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "Gaussian Mixture Models represent complex multimodal data distributions as a weighted sum of $K$ Gaussian components with prior mixture weights $\\pi_k$, mean vectors $\\mu_k$, and covariance matrices $\\Sigma_k$.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "تمثل نماذج المزيج الغاوسي توزيعات البيانات المعقدة كمجموع مرجح لـ $K$ توزيعات غاوسية بأوزان خلط مسبقة $\\pi_k$ ومتجهات متوسطات $\\mu_k$ ومصفوفات تغاير $\\Sigma_k$.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "Gaussian Mixture Models represent complex multimodal data distributions as a weighted sum of $K$ Gaussian components with prior mixture weights $\\pi_k$, mean vectors $\\mu_k$, and covariance matrices $\\Sigma_k$.",
      "correctAnswerEn": "Gaussian Mixture Models represent complex multimodal data distributions as a weighted sum of $K$ Gaussian components with prior mixture weights $\\pi_k$, mean vectors $\\mu_k$, and covariance matrices $\\Sigma_k$.",
      "correctAnswerAr": "تمثل نماذج المزيج الغاوسي توزيعات البيانات المعقدة كمجموع مرجح لـ $K$ توزيعات غاوسية بأوزان خلط مسبقة $\\pi_k$ ومتجهات متوسطات $\\mu_k$ ومصفوفات تغاير $\\Sigma_k$.",
      "correctIndex": 1,
      "explanationEn": "Correct Theoretical Formulation: Gaussian Mixture Models represent complex multimodal data distributions as a weighted sum of $K$ Gaussian components with prior mixture weights $\\pi_k$, mean vectors $\\mu_k$, and covariance matrices $\\Sigma_k$.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تمثل نماذج المزيج الغاوسي توزيعات البيانات المعقدة كمجموع مرجح لـ $K$ توزيعات غاوسية بأوزان خلط مسبقة $\\pi_k$ ومتجهات متوسطات $\\mu_k$ ومصفوفات تغاير $\\Sigma_k$.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Gaussian Mixture Models represent complex multimodal data distributions as a weighted sum of $K$ Gaussian components with prior mixture weights $\\pi_k$, mean vectors $\\mu_k$, and covariance matrices $\\Sigma_k$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تمثل نماذج المزيج الغاوسي توزيعات البيانات المعقدة كمجموع مرجح لـ $K$ توزيعات غاوسية بأوزان خلط مسبقة $\\pi_k$ ومتجهات متوسطات $\\mu_k$ ومصفوفات تغاير $\\Sigma_k$.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch1_easy_15",
      "titleEn": "[EASY] Variational Inference & Evidence Lower Bound (ELBO) Derivation - Review 15",
      "titleAr": "[مستوى أساسي] الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO) - سؤال 15",
      "questionEn": "[AI & Data Science Core Concept] Regarding Variational Inference & Evidence Lower Bound (ELBO) Derivation, which of the following statements is theoretically and mathematically sound? (Variant 15)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 15)",
      "optionsEn": [
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Variational Inference transforms intractable Bayesian posterior inference into an optimization problem by approximating the true posterior $p(z|x)$ with a tractable family $q_\\phi(z)$.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "يحول الاستدلال المتغير معضلة حساب التوزيع اللاحق المستعصي $p(z|x)$ إلى مسألة تحسين عبر تقريبه بعائلة توزيعات مطواعة $q_\\phi(z)$.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "Variational Inference transforms intractable Bayesian posterior inference into an optimization problem by approximating the true posterior $p(z|x)$ with a tractable family $q_\\phi(z)$.",
      "correctAnswerEn": "Variational Inference transforms intractable Bayesian posterior inference into an optimization problem by approximating the true posterior $p(z|x)$ with a tractable family $q_\\phi(z)$.",
      "correctAnswerAr": "يحول الاستدلال المتغير معضلة حساب التوزيع اللاحق المستعصي $p(z|x)$ إلى مسألة تحسين عبر تقريبه بعائلة توزيعات مطواعة $q_\\phi(z)$.",
      "correctIndex": 2,
      "explanationEn": "Correct Theoretical Formulation: Variational Inference transforms intractable Bayesian posterior inference into an optimization problem by approximating the true posterior $p(z|x)$ with a tractable family $q_\\phi(z)$.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يحول الاستدلال المتغير معضلة حساب التوزيع اللاحق المستعصي $p(z|x)$ إلى مسألة تحسين عبر تقريبه بعائلة توزيعات مطواعة $q_\\phi(z)$.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Variational Inference & Evidence Lower Bound (ELBO) Derivation.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Variational Inference transforms intractable Bayesian posterior inference into an optimization problem by approximating the true posterior $p(z|x)$ with a tractable family $q_\\phi(z)$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يحول الاستدلال المتغير معضلة حساب التوزيع اللاحق المستعصي $p(z|x)$ إلى مسألة تحسين عبر تقريبه بعائلة توزيعات مطواعة $q_\\phi(z)$.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch1_easy_16",
      "titleEn": "[EASY] Bayesian Networks, Directed Acyclic Graphs & D-Separation - Review 16",
      "titleAr": "[مستوى أساسي] شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation) - سؤال 16",
      "questionEn": "[AI & Data Science Core Concept] Regarding Bayesian Networks, Directed Acyclic Graphs & D-Separation, which of the following statements is theoretically and mathematically sound? (Variant 16)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 16)",
      "optionsEn": [
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "A Bayesian Network represents the joint probability distribution of random variables as a directed acyclic graph (DAG) factored into local conditional distributions: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$."
      ],
      "optionsAr": [
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تمثل شبكة بايز التوزيع الاحتمالي المشترك لمتغيرات عشوائية كمخطط موجه عديم الحلقات (DAG) مفككاً إلى توزيعات شرطية محلية: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$."
      ],
      "correctAnswer": "A Bayesian Network represents the joint probability distribution of random variables as a directed acyclic graph (DAG) factored into local conditional distributions: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
      "correctAnswerEn": "A Bayesian Network represents the joint probability distribution of random variables as a directed acyclic graph (DAG) factored into local conditional distributions: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
      "correctAnswerAr": "تمثل شبكة بايز التوزيع الاحتمالي المشترك لمتغيرات عشوائية كمخطط موجه عديم الحلقات (DAG) مفككاً إلى توزيعات شرطية محلية: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
      "correctIndex": 3,
      "explanationEn": "Correct Theoretical Formulation: A Bayesian Network represents the joint probability distribution of random variables as a directed acyclic graph (DAG) factored into local conditional distributions: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تمثل شبكة بايز التوزيع الاحتمالي المشترك لمتغيرات عشوائية كمخطط موجه عديم الحلقات (DAG) مفككاً إلى توزيعات شرطية محلية: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Bayesian Networks, Directed Acyclic Graphs & D-Separation.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: A Bayesian Network represents the joint probability distribution of random variables as a directed acyclic graph (DAG) factored into local conditional distributions: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تمثل شبكة بايز التوزيع الاحتمالي المشترك لمتغيرات عشوائية كمخطط موجه عديم الحلقات (DAG) مفككاً إلى توزيعات شرطية محلية: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch1_easy_17",
      "titleEn": "[EASY] Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models - Review 17",
      "titleAr": "[مستوى أساسي] خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs) - سؤال 17",
      "questionEn": "[AI & Data Science Core Concept] Regarding Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models, which of the following statements is theoretically and mathematically sound? (Variant 17)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 17)",
      "optionsEn": [
        "Gaussian Mixture Models represent complex multimodal data distributions as a weighted sum of $K$ Gaussian components with prior mixture weights $\\pi_k$, mean vectors $\\mu_k$, and covariance matrices $\\Sigma_k$.",
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "تمثل نماذج المزيج الغاوسي توزيعات البيانات المعقدة كمجموع مرجح لـ $K$ توزيعات غاوسية بأوزان خلط مسبقة $\\pi_k$ ومتجهات متوسطات $\\mu_k$ ومصفوفات تغاير $\\Sigma_k$.",
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "Gaussian Mixture Models represent complex multimodal data distributions as a weighted sum of $K$ Gaussian components with prior mixture weights $\\pi_k$, mean vectors $\\mu_k$, and covariance matrices $\\Sigma_k$.",
      "correctAnswerEn": "Gaussian Mixture Models represent complex multimodal data distributions as a weighted sum of $K$ Gaussian components with prior mixture weights $\\pi_k$, mean vectors $\\mu_k$, and covariance matrices $\\Sigma_k$.",
      "correctAnswerAr": "تمثل نماذج المزيج الغاوسي توزيعات البيانات المعقدة كمجموع مرجح لـ $K$ توزيعات غاوسية بأوزان خلط مسبقة $\\pi_k$ ومتجهات متوسطات $\\mu_k$ ومصفوفات تغاير $\\Sigma_k$.",
      "correctIndex": 0,
      "explanationEn": "Correct Theoretical Formulation: Gaussian Mixture Models represent complex multimodal data distributions as a weighted sum of $K$ Gaussian components with prior mixture weights $\\pi_k$, mean vectors $\\mu_k$, and covariance matrices $\\Sigma_k$.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تمثل نماذج المزيج الغاوسي توزيعات البيانات المعقدة كمجموع مرجح لـ $K$ توزيعات غاوسية بأوزان خلط مسبقة $\\pi_k$ ومتجهات متوسطات $\\mu_k$ ومصفوفات تغاير $\\Sigma_k$.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Gaussian Mixture Models represent complex multimodal data distributions as a weighted sum of $K$ Gaussian components with prior mixture weights $\\pi_k$, mean vectors $\\mu_k$, and covariance matrices $\\Sigma_k$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تمثل نماذج المزيج الغاوسي توزيعات البيانات المعقدة كمجموع مرجح لـ $K$ توزيعات غاوسية بأوزان خلط مسبقة $\\pi_k$ ومتجهات متوسطات $\\mu_k$ ومصفوفات تغاير $\\Sigma_k$.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch1_easy_18",
      "titleEn": "[EASY] Variational Inference & Evidence Lower Bound (ELBO) Derivation - Review 18",
      "titleAr": "[مستوى أساسي] الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO) - سؤال 18",
      "questionEn": "[AI & Data Science Core Concept] Regarding Variational Inference & Evidence Lower Bound (ELBO) Derivation, which of the following statements is theoretically and mathematically sound? (Variant 18)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 18)",
      "optionsEn": [
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "Variational Inference transforms intractable Bayesian posterior inference into an optimization problem by approximating the true posterior $p(z|x)$ with a tractable family $q_\\phi(z)$.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "يحول الاستدلال المتغير معضلة حساب التوزيع اللاحق المستعصي $p(z|x)$ إلى مسألة تحسين عبر تقريبه بعائلة توزيعات مطواعة $q_\\phi(z)$.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "Variational Inference transforms intractable Bayesian posterior inference into an optimization problem by approximating the true posterior $p(z|x)$ with a tractable family $q_\\phi(z)$.",
      "correctAnswerEn": "Variational Inference transforms intractable Bayesian posterior inference into an optimization problem by approximating the true posterior $p(z|x)$ with a tractable family $q_\\phi(z)$.",
      "correctAnswerAr": "يحول الاستدلال المتغير معضلة حساب التوزيع اللاحق المستعصي $p(z|x)$ إلى مسألة تحسين عبر تقريبه بعائلة توزيعات مطواعة $q_\\phi(z)$.",
      "correctIndex": 1,
      "explanationEn": "Correct Theoretical Formulation: Variational Inference transforms intractable Bayesian posterior inference into an optimization problem by approximating the true posterior $p(z|x)$ with a tractable family $q_\\phi(z)$.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يحول الاستدلال المتغير معضلة حساب التوزيع اللاحق المستعصي $p(z|x)$ إلى مسألة تحسين عبر تقريبه بعائلة توزيعات مطواعة $q_\\phi(z)$.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Variational Inference & Evidence Lower Bound (ELBO) Derivation.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Variational Inference transforms intractable Bayesian posterior inference into an optimization problem by approximating the true posterior $p(z|x)$ with a tractable family $q_\\phi(z)$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يحول الاستدلال المتغير معضلة حساب التوزيع اللاحق المستعصي $p(z|x)$ إلى مسألة تحسين عبر تقريبه بعائلة توزيعات مطواعة $q_\\phi(z)$.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch1_easy_19",
      "titleEn": "[EASY] Bayesian Networks, Directed Acyclic Graphs & D-Separation - Review 19",
      "titleAr": "[مستوى أساسي] شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation) - سؤال 19",
      "questionEn": "[AI & Data Science Core Concept] Regarding Bayesian Networks, Directed Acyclic Graphs & D-Separation, which of the following statements is theoretically and mathematically sound? (Variant 19)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 19)",
      "optionsEn": [
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "A Bayesian Network represents the joint probability distribution of random variables as a directed acyclic graph (DAG) factored into local conditional distributions: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمثل شبكة بايز التوزيع الاحتمالي المشترك لمتغيرات عشوائية كمخطط موجه عديم الحلقات (DAG) مفككاً إلى توزيعات شرطية محلية: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "A Bayesian Network represents the joint probability distribution of random variables as a directed acyclic graph (DAG) factored into local conditional distributions: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
      "correctAnswerEn": "A Bayesian Network represents the joint probability distribution of random variables as a directed acyclic graph (DAG) factored into local conditional distributions: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
      "correctAnswerAr": "تمثل شبكة بايز التوزيع الاحتمالي المشترك لمتغيرات عشوائية كمخطط موجه عديم الحلقات (DAG) مفككاً إلى توزيعات شرطية محلية: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
      "correctIndex": 2,
      "explanationEn": "Correct Theoretical Formulation: A Bayesian Network represents the joint probability distribution of random variables as a directed acyclic graph (DAG) factored into local conditional distributions: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تمثل شبكة بايز التوزيع الاحتمالي المشترك لمتغيرات عشوائية كمخطط موجه عديم الحلقات (DAG) مفككاً إلى توزيعات شرطية محلية: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Bayesian Networks, Directed Acyclic Graphs & D-Separation.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: A Bayesian Network represents the joint probability distribution of random variables as a directed acyclic graph (DAG) factored into local conditional distributions: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تمثل شبكة بايز التوزيع الاحتمالي المشترك لمتغيرات عشوائية كمخطط موجه عديم الحلقات (DAG) مفككاً إلى توزيعات شرطية محلية: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch1_easy_20",
      "titleEn": "[EASY] Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models - Review 20",
      "titleAr": "[مستوى أساسي] خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs) - سؤال 20",
      "questionEn": "[AI & Data Science Core Concept] Regarding Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models, which of the following statements is theoretically and mathematically sound? (Variant 20)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 20)",
      "optionsEn": [
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Gaussian Mixture Models represent complex multimodal data distributions as a weighted sum of $K$ Gaussian components with prior mixture weights $\\pi_k$, mean vectors $\\mu_k$, and covariance matrices $\\Sigma_k$."
      ],
      "optionsAr": [
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "تمثل نماذج المزيج الغاوسي توزيعات البيانات المعقدة كمجموع مرجح لـ $K$ توزيعات غاوسية بأوزان خلط مسبقة $\\pi_k$ ومتجهات متوسطات $\\mu_k$ ومصفوفات تغاير $\\Sigma_k$."
      ],
      "correctAnswer": "Gaussian Mixture Models represent complex multimodal data distributions as a weighted sum of $K$ Gaussian components with prior mixture weights $\\pi_k$, mean vectors $\\mu_k$, and covariance matrices $\\Sigma_k$.",
      "correctAnswerEn": "Gaussian Mixture Models represent complex multimodal data distributions as a weighted sum of $K$ Gaussian components with prior mixture weights $\\pi_k$, mean vectors $\\mu_k$, and covariance matrices $\\Sigma_k$.",
      "correctAnswerAr": "تمثل نماذج المزيج الغاوسي توزيعات البيانات المعقدة كمجموع مرجح لـ $K$ توزيعات غاوسية بأوزان خلط مسبقة $\\pi_k$ ومتجهات متوسطات $\\mu_k$ ومصفوفات تغاير $\\Sigma_k$.",
      "correctIndex": 3,
      "explanationEn": "Correct Theoretical Formulation: Gaussian Mixture Models represent complex multimodal data distributions as a weighted sum of $K$ Gaussian components with prior mixture weights $\\pi_k$, mean vectors $\\mu_k$, and covariance matrices $\\Sigma_k$.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تمثل نماذج المزيج الغاوسي توزيعات البيانات المعقدة كمجموع مرجح لـ $K$ توزيعات غاوسية بأوزان خلط مسبقة $\\pi_k$ ومتجهات متوسطات $\\mu_k$ ومصفوفات تغاير $\\Sigma_k$.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Gaussian Mixture Models represent complex multimodal data distributions as a weighted sum of $K$ Gaussian components with prior mixture weights $\\pi_k$, mean vectors $\\mu_k$, and covariance matrices $\\Sigma_k$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تمثل نماذج المزيج الغاوسي توزيعات البيانات المعقدة كمجموع مرجح لـ $K$ توزيعات غاوسية بأوزان خلط مسبقة $\\pi_k$ ومتجهات متوسطات $\\mu_k$ ومصفوفات تغاير $\\Sigma_k$.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch1_easy_21",
      "titleEn": "[EASY] Variational Inference & Evidence Lower Bound (ELBO) Derivation - Review 21",
      "titleAr": "[مستوى أساسي] الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO) - سؤال 21",
      "questionEn": "[AI & Data Science Core Concept] Regarding Variational Inference & Evidence Lower Bound (ELBO) Derivation, which of the following statements is theoretically and mathematically sound? (Variant 21)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 21)",
      "optionsEn": [
        "Variational Inference transforms intractable Bayesian posterior inference into an optimization problem by approximating the true posterior $p(z|x)$ with a tractable family $q_\\phi(z)$.",
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "يحول الاستدلال المتغير معضلة حساب التوزيع اللاحق المستعصي $p(z|x)$ إلى مسألة تحسين عبر تقريبه بعائلة توزيعات مطواعة $q_\\phi(z)$.",
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "Variational Inference transforms intractable Bayesian posterior inference into an optimization problem by approximating the true posterior $p(z|x)$ with a tractable family $q_\\phi(z)$.",
      "correctAnswerEn": "Variational Inference transforms intractable Bayesian posterior inference into an optimization problem by approximating the true posterior $p(z|x)$ with a tractable family $q_\\phi(z)$.",
      "correctAnswerAr": "يحول الاستدلال المتغير معضلة حساب التوزيع اللاحق المستعصي $p(z|x)$ إلى مسألة تحسين عبر تقريبه بعائلة توزيعات مطواعة $q_\\phi(z)$.",
      "correctIndex": 0,
      "explanationEn": "Correct Theoretical Formulation: Variational Inference transforms intractable Bayesian posterior inference into an optimization problem by approximating the true posterior $p(z|x)$ with a tractable family $q_\\phi(z)$.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يحول الاستدلال المتغير معضلة حساب التوزيع اللاحق المستعصي $p(z|x)$ إلى مسألة تحسين عبر تقريبه بعائلة توزيعات مطواعة $q_\\phi(z)$.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Variational Inference & Evidence Lower Bound (ELBO) Derivation.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Variational Inference transforms intractable Bayesian posterior inference into an optimization problem by approximating the true posterior $p(z|x)$ with a tractable family $q_\\phi(z)$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يحول الاستدلال المتغير معضلة حساب التوزيع اللاحق المستعصي $p(z|x)$ إلى مسألة تحسين عبر تقريبه بعائلة توزيعات مطواعة $q_\\phi(z)$.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch1_easy_22",
      "titleEn": "[EASY] Bayesian Networks, Directed Acyclic Graphs & D-Separation - Review 22",
      "titleAr": "[مستوى أساسي] شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation) - سؤال 22",
      "questionEn": "[AI & Data Science Core Concept] Regarding Bayesian Networks, Directed Acyclic Graphs & D-Separation, which of the following statements is theoretically and mathematically sound? (Variant 22)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 22)",
      "optionsEn": [
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "A Bayesian Network represents the joint probability distribution of random variables as a directed acyclic graph (DAG) factored into local conditional distributions: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تمثل شبكة بايز التوزيع الاحتمالي المشترك لمتغيرات عشوائية كمخطط موجه عديم الحلقات (DAG) مفككاً إلى توزيعات شرطية محلية: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "A Bayesian Network represents the joint probability distribution of random variables as a directed acyclic graph (DAG) factored into local conditional distributions: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
      "correctAnswerEn": "A Bayesian Network represents the joint probability distribution of random variables as a directed acyclic graph (DAG) factored into local conditional distributions: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
      "correctAnswerAr": "تمثل شبكة بايز التوزيع الاحتمالي المشترك لمتغيرات عشوائية كمخطط موجه عديم الحلقات (DAG) مفككاً إلى توزيعات شرطية محلية: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
      "correctIndex": 1,
      "explanationEn": "Correct Theoretical Formulation: A Bayesian Network represents the joint probability distribution of random variables as a directed acyclic graph (DAG) factored into local conditional distributions: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تمثل شبكة بايز التوزيع الاحتمالي المشترك لمتغيرات عشوائية كمخطط موجه عديم الحلقات (DAG) مفككاً إلى توزيعات شرطية محلية: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Bayesian Networks, Directed Acyclic Graphs & D-Separation.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: A Bayesian Network represents the joint probability distribution of random variables as a directed acyclic graph (DAG) factored into local conditional distributions: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تمثل شبكة بايز التوزيع الاحتمالي المشترك لمتغيرات عشوائية كمخطط موجه عديم الحلقات (DAG) مفككاً إلى توزيعات شرطية محلية: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch1_easy_23",
      "titleEn": "[EASY] Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models - Review 23",
      "titleAr": "[مستوى أساسي] خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs) - سؤال 23",
      "questionEn": "[AI & Data Science Core Concept] Regarding Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models, which of the following statements is theoretically and mathematically sound? (Variant 23)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 23)",
      "optionsEn": [
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Gaussian Mixture Models represent complex multimodal data distributions as a weighted sum of $K$ Gaussian components with prior mixture weights $\\pi_k$, mean vectors $\\mu_k$, and covariance matrices $\\Sigma_k$.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تمثل نماذج المزيج الغاوسي توزيعات البيانات المعقدة كمجموع مرجح لـ $K$ توزيعات غاوسية بأوزان خلط مسبقة $\\pi_k$ ومتجهات متوسطات $\\mu_k$ ومصفوفات تغاير $\\Sigma_k$.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "Gaussian Mixture Models represent complex multimodal data distributions as a weighted sum of $K$ Gaussian components with prior mixture weights $\\pi_k$, mean vectors $\\mu_k$, and covariance matrices $\\Sigma_k$.",
      "correctAnswerEn": "Gaussian Mixture Models represent complex multimodal data distributions as a weighted sum of $K$ Gaussian components with prior mixture weights $\\pi_k$, mean vectors $\\mu_k$, and covariance matrices $\\Sigma_k$.",
      "correctAnswerAr": "تمثل نماذج المزيج الغاوسي توزيعات البيانات المعقدة كمجموع مرجح لـ $K$ توزيعات غاوسية بأوزان خلط مسبقة $\\pi_k$ ومتجهات متوسطات $\\mu_k$ ومصفوفات تغاير $\\Sigma_k$.",
      "correctIndex": 2,
      "explanationEn": "Correct Theoretical Formulation: Gaussian Mixture Models represent complex multimodal data distributions as a weighted sum of $K$ Gaussian components with prior mixture weights $\\pi_k$, mean vectors $\\mu_k$, and covariance matrices $\\Sigma_k$.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تمثل نماذج المزيج الغاوسي توزيعات البيانات المعقدة كمجموع مرجح لـ $K$ توزيعات غاوسية بأوزان خلط مسبقة $\\pi_k$ ومتجهات متوسطات $\\mu_k$ ومصفوفات تغاير $\\Sigma_k$.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Gaussian Mixture Models represent complex multimodal data distributions as a weighted sum of $K$ Gaussian components with prior mixture weights $\\pi_k$, mean vectors $\\mu_k$, and covariance matrices $\\Sigma_k$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تمثل نماذج المزيج الغاوسي توزيعات البيانات المعقدة كمجموع مرجح لـ $K$ توزيعات غاوسية بأوزان خلط مسبقة $\\pi_k$ ومتجهات متوسطات $\\mu_k$ ومصفوفات تغاير $\\Sigma_k$.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch1_easy_24",
      "titleEn": "[EASY] Variational Inference & Evidence Lower Bound (ELBO) Derivation - Review 24",
      "titleAr": "[مستوى أساسي] الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO) - سؤال 24",
      "questionEn": "[AI & Data Science Core Concept] Regarding Variational Inference & Evidence Lower Bound (ELBO) Derivation, which of the following statements is theoretically and mathematically sound? (Variant 24)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 24)",
      "optionsEn": [
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "Variational Inference transforms intractable Bayesian posterior inference into an optimization problem by approximating the true posterior $p(z|x)$ with a tractable family $q_\\phi(z)$."
      ],
      "optionsAr": [
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "يحول الاستدلال المتغير معضلة حساب التوزيع اللاحق المستعصي $p(z|x)$ إلى مسألة تحسين عبر تقريبه بعائلة توزيعات مطواعة $q_\\phi(z)$."
      ],
      "correctAnswer": "Variational Inference transforms intractable Bayesian posterior inference into an optimization problem by approximating the true posterior $p(z|x)$ with a tractable family $q_\\phi(z)$.",
      "correctAnswerEn": "Variational Inference transforms intractable Bayesian posterior inference into an optimization problem by approximating the true posterior $p(z|x)$ with a tractable family $q_\\phi(z)$.",
      "correctAnswerAr": "يحول الاستدلال المتغير معضلة حساب التوزيع اللاحق المستعصي $p(z|x)$ إلى مسألة تحسين عبر تقريبه بعائلة توزيعات مطواعة $q_\\phi(z)$.",
      "correctIndex": 3,
      "explanationEn": "Correct Theoretical Formulation: Variational Inference transforms intractable Bayesian posterior inference into an optimization problem by approximating the true posterior $p(z|x)$ with a tractable family $q_\\phi(z)$.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يحول الاستدلال المتغير معضلة حساب التوزيع اللاحق المستعصي $p(z|x)$ إلى مسألة تحسين عبر تقريبه بعائلة توزيعات مطواعة $q_\\phi(z)$.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Variational Inference & Evidence Lower Bound (ELBO) Derivation.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Variational Inference transforms intractable Bayesian posterior inference into an optimization problem by approximating the true posterior $p(z|x)$ with a tractable family $q_\\phi(z)$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يحول الاستدلال المتغير معضلة حساب التوزيع اللاحق المستعصي $p(z|x)$ إلى مسألة تحسين عبر تقريبه بعائلة توزيعات مطواعة $q_\\phi(z)$.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch1_easy_25",
      "titleEn": "[EASY] Bayesian Networks, Directed Acyclic Graphs & D-Separation - Review 25",
      "titleAr": "[مستوى أساسي] شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation) - سؤال 25",
      "questionEn": "[AI & Data Science Core Concept] Regarding Bayesian Networks, Directed Acyclic Graphs & D-Separation, which of the following statements is theoretically and mathematically sound? (Variant 25)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 25)",
      "optionsEn": [
        "A Bayesian Network represents the joint probability distribution of random variables as a directed acyclic graph (DAG) factored into local conditional distributions: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تمثل شبكة بايز التوزيع الاحتمالي المشترك لمتغيرات عشوائية كمخطط موجه عديم الحلقات (DAG) مفككاً إلى توزيعات شرطية محلية: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "A Bayesian Network represents the joint probability distribution of random variables as a directed acyclic graph (DAG) factored into local conditional distributions: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
      "correctAnswerEn": "A Bayesian Network represents the joint probability distribution of random variables as a directed acyclic graph (DAG) factored into local conditional distributions: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
      "correctAnswerAr": "تمثل شبكة بايز التوزيع الاحتمالي المشترك لمتغيرات عشوائية كمخطط موجه عديم الحلقات (DAG) مفككاً إلى توزيعات شرطية محلية: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
      "correctIndex": 0,
      "explanationEn": "Correct Theoretical Formulation: A Bayesian Network represents the joint probability distribution of random variables as a directed acyclic graph (DAG) factored into local conditional distributions: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تمثل شبكة بايز التوزيع الاحتمالي المشترك لمتغيرات عشوائية كمخطط موجه عديم الحلقات (DAG) مفككاً إلى توزيعات شرطية محلية: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Bayesian Networks, Directed Acyclic Graphs & D-Separation.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: A Bayesian Network represents the joint probability distribution of random variables as a directed acyclic graph (DAG) factored into local conditional distributions: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تمثل شبكة بايز التوزيع الاحتمالي المشترك لمتغيرات عشوائية كمخطط موجه عديم الحلقات (DAG) مفككاً إلى توزيعات شرطية محلية: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch1_easy_26",
      "titleEn": "[EASY] Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models - Review 26",
      "titleAr": "[مستوى أساسي] خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs) - سؤال 26",
      "questionEn": "[AI & Data Science Core Concept] Regarding Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models, which of the following statements is theoretically and mathematically sound? (Variant 26)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 26)",
      "optionsEn": [
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Gaussian Mixture Models represent complex multimodal data distributions as a weighted sum of $K$ Gaussian components with prior mixture weights $\\pi_k$, mean vectors $\\mu_k$, and covariance matrices $\\Sigma_k$.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "تمثل نماذج المزيج الغاوسي توزيعات البيانات المعقدة كمجموع مرجح لـ $K$ توزيعات غاوسية بأوزان خلط مسبقة $\\pi_k$ ومتجهات متوسطات $\\mu_k$ ومصفوفات تغاير $\\Sigma_k$.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "Gaussian Mixture Models represent complex multimodal data distributions as a weighted sum of $K$ Gaussian components with prior mixture weights $\\pi_k$, mean vectors $\\mu_k$, and covariance matrices $\\Sigma_k$.",
      "correctAnswerEn": "Gaussian Mixture Models represent complex multimodal data distributions as a weighted sum of $K$ Gaussian components with prior mixture weights $\\pi_k$, mean vectors $\\mu_k$, and covariance matrices $\\Sigma_k$.",
      "correctAnswerAr": "تمثل نماذج المزيج الغاوسي توزيعات البيانات المعقدة كمجموع مرجح لـ $K$ توزيعات غاوسية بأوزان خلط مسبقة $\\pi_k$ ومتجهات متوسطات $\\mu_k$ ومصفوفات تغاير $\\Sigma_k$.",
      "correctIndex": 1,
      "explanationEn": "Correct Theoretical Formulation: Gaussian Mixture Models represent complex multimodal data distributions as a weighted sum of $K$ Gaussian components with prior mixture weights $\\pi_k$, mean vectors $\\mu_k$, and covariance matrices $\\Sigma_k$.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تمثل نماذج المزيج الغاوسي توزيعات البيانات المعقدة كمجموع مرجح لـ $K$ توزيعات غاوسية بأوزان خلط مسبقة $\\pi_k$ ومتجهات متوسطات $\\mu_k$ ومصفوفات تغاير $\\Sigma_k$.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Gaussian Mixture Models represent complex multimodal data distributions as a weighted sum of $K$ Gaussian components with prior mixture weights $\\pi_k$, mean vectors $\\mu_k$, and covariance matrices $\\Sigma_k$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تمثل نماذج المزيج الغاوسي توزيعات البيانات المعقدة كمجموع مرجح لـ $K$ توزيعات غاوسية بأوزان خلط مسبقة $\\pi_k$ ومتجهات متوسطات $\\mu_k$ ومصفوفات تغاير $\\Sigma_k$.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch1_easy_27",
      "titleEn": "[EASY] Variational Inference & Evidence Lower Bound (ELBO) Derivation - Review 27",
      "titleAr": "[مستوى أساسي] الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO) - سؤال 27",
      "questionEn": "[AI & Data Science Core Concept] Regarding Variational Inference & Evidence Lower Bound (ELBO) Derivation, which of the following statements is theoretically and mathematically sound? (Variant 27)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 27)",
      "optionsEn": [
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Variational Inference transforms intractable Bayesian posterior inference into an optimization problem by approximating the true posterior $p(z|x)$ with a tractable family $q_\\phi(z)$.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "يحول الاستدلال المتغير معضلة حساب التوزيع اللاحق المستعصي $p(z|x)$ إلى مسألة تحسين عبر تقريبه بعائلة توزيعات مطواعة $q_\\phi(z)$.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "Variational Inference transforms intractable Bayesian posterior inference into an optimization problem by approximating the true posterior $p(z|x)$ with a tractable family $q_\\phi(z)$.",
      "correctAnswerEn": "Variational Inference transforms intractable Bayesian posterior inference into an optimization problem by approximating the true posterior $p(z|x)$ with a tractable family $q_\\phi(z)$.",
      "correctAnswerAr": "يحول الاستدلال المتغير معضلة حساب التوزيع اللاحق المستعصي $p(z|x)$ إلى مسألة تحسين عبر تقريبه بعائلة توزيعات مطواعة $q_\\phi(z)$.",
      "correctIndex": 2,
      "explanationEn": "Correct Theoretical Formulation: Variational Inference transforms intractable Bayesian posterior inference into an optimization problem by approximating the true posterior $p(z|x)$ with a tractable family $q_\\phi(z)$.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يحول الاستدلال المتغير معضلة حساب التوزيع اللاحق المستعصي $p(z|x)$ إلى مسألة تحسين عبر تقريبه بعائلة توزيعات مطواعة $q_\\phi(z)$.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Variational Inference & Evidence Lower Bound (ELBO) Derivation.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Variational Inference transforms intractable Bayesian posterior inference into an optimization problem by approximating the true posterior $p(z|x)$ with a tractable family $q_\\phi(z)$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يحول الاستدلال المتغير معضلة حساب التوزيع اللاحق المستعصي $p(z|x)$ إلى مسألة تحسين عبر تقريبه بعائلة توزيعات مطواعة $q_\\phi(z)$.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch1_easy_28",
      "titleEn": "[EASY] Bayesian Networks, Directed Acyclic Graphs & D-Separation - Review 28",
      "titleAr": "[مستوى أساسي] شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation) - سؤال 28",
      "questionEn": "[AI & Data Science Core Concept] Regarding Bayesian Networks, Directed Acyclic Graphs & D-Separation, which of the following statements is theoretically and mathematically sound? (Variant 28)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 28)",
      "optionsEn": [
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "A Bayesian Network represents the joint probability distribution of random variables as a directed acyclic graph (DAG) factored into local conditional distributions: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$."
      ],
      "optionsAr": [
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "تمثل شبكة بايز التوزيع الاحتمالي المشترك لمتغيرات عشوائية كمخطط موجه عديم الحلقات (DAG) مفككاً إلى توزيعات شرطية محلية: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$."
      ],
      "correctAnswer": "A Bayesian Network represents the joint probability distribution of random variables as a directed acyclic graph (DAG) factored into local conditional distributions: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
      "correctAnswerEn": "A Bayesian Network represents the joint probability distribution of random variables as a directed acyclic graph (DAG) factored into local conditional distributions: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
      "correctAnswerAr": "تمثل شبكة بايز التوزيع الاحتمالي المشترك لمتغيرات عشوائية كمخطط موجه عديم الحلقات (DAG) مفككاً إلى توزيعات شرطية محلية: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
      "correctIndex": 3,
      "explanationEn": "Correct Theoretical Formulation: A Bayesian Network represents the joint probability distribution of random variables as a directed acyclic graph (DAG) factored into local conditional distributions: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تمثل شبكة بايز التوزيع الاحتمالي المشترك لمتغيرات عشوائية كمخطط موجه عديم الحلقات (DAG) مفككاً إلى توزيعات شرطية محلية: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Bayesian Networks, Directed Acyclic Graphs & D-Separation.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: A Bayesian Network represents the joint probability distribution of random variables as a directed acyclic graph (DAG) factored into local conditional distributions: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تمثل شبكة بايز التوزيع الاحتمالي المشترك لمتغيرات عشوائية كمخطط موجه عديم الحلقات (DAG) مفككاً إلى توزيعات شرطية محلية: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch1_easy_29",
      "titleEn": "[EASY] Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models - Review 29",
      "titleAr": "[مستوى أساسي] خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs) - سؤال 29",
      "questionEn": "[AI & Data Science Core Concept] Regarding Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models, which of the following statements is theoretically and mathematically sound? (Variant 29)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 29)",
      "optionsEn": [
        "Gaussian Mixture Models represent complex multimodal data distributions as a weighted sum of $K$ Gaussian components with prior mixture weights $\\pi_k$, mean vectors $\\mu_k$, and covariance matrices $\\Sigma_k$.",
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "تمثل نماذج المزيج الغاوسي توزيعات البيانات المعقدة كمجموع مرجح لـ $K$ توزيعات غاوسية بأوزان خلط مسبقة $\\pi_k$ ومتجهات متوسطات $\\mu_k$ ومصفوفات تغاير $\\Sigma_k$.",
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "Gaussian Mixture Models represent complex multimodal data distributions as a weighted sum of $K$ Gaussian components with prior mixture weights $\\pi_k$, mean vectors $\\mu_k$, and covariance matrices $\\Sigma_k$.",
      "correctAnswerEn": "Gaussian Mixture Models represent complex multimodal data distributions as a weighted sum of $K$ Gaussian components with prior mixture weights $\\pi_k$, mean vectors $\\mu_k$, and covariance matrices $\\Sigma_k$.",
      "correctAnswerAr": "تمثل نماذج المزيج الغاوسي توزيعات البيانات المعقدة كمجموع مرجح لـ $K$ توزيعات غاوسية بأوزان خلط مسبقة $\\pi_k$ ومتجهات متوسطات $\\mu_k$ ومصفوفات تغاير $\\Sigma_k$.",
      "correctIndex": 0,
      "explanationEn": "Correct Theoretical Formulation: Gaussian Mixture Models represent complex multimodal data distributions as a weighted sum of $K$ Gaussian components with prior mixture weights $\\pi_k$, mean vectors $\\mu_k$, and covariance matrices $\\Sigma_k$.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تمثل نماذج المزيج الغاوسي توزيعات البيانات المعقدة كمجموع مرجح لـ $K$ توزيعات غاوسية بأوزان خلط مسبقة $\\pi_k$ ومتجهات متوسطات $\\mu_k$ ومصفوفات تغاير $\\Sigma_k$.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Gaussian Mixture Models represent complex multimodal data distributions as a weighted sum of $K$ Gaussian components with prior mixture weights $\\pi_k$, mean vectors $\\mu_k$, and covariance matrices $\\Sigma_k$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تمثل نماذج المزيج الغاوسي توزيعات البيانات المعقدة كمجموع مرجح لـ $K$ توزيعات غاوسية بأوزان خلط مسبقة $\\pi_k$ ومتجهات متوسطات $\\mu_k$ ومصفوفات تغاير $\\Sigma_k$.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch1_easy_30",
      "titleEn": "[EASY] Variational Inference & Evidence Lower Bound (ELBO) Derivation - Review 30",
      "titleAr": "[مستوى أساسي] الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO) - سؤال 30",
      "questionEn": "[AI & Data Science Core Concept] Regarding Variational Inference & Evidence Lower Bound (ELBO) Derivation, which of the following statements is theoretically and mathematically sound? (Variant 30)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 30)",
      "optionsEn": [
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "Variational Inference transforms intractable Bayesian posterior inference into an optimization problem by approximating the true posterior $p(z|x)$ with a tractable family $q_\\phi(z)$.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "يحول الاستدلال المتغير معضلة حساب التوزيع اللاحق المستعصي $p(z|x)$ إلى مسألة تحسين عبر تقريبه بعائلة توزيعات مطواعة $q_\\phi(z)$.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "Variational Inference transforms intractable Bayesian posterior inference into an optimization problem by approximating the true posterior $p(z|x)$ with a tractable family $q_\\phi(z)$.",
      "correctAnswerEn": "Variational Inference transforms intractable Bayesian posterior inference into an optimization problem by approximating the true posterior $p(z|x)$ with a tractable family $q_\\phi(z)$.",
      "correctAnswerAr": "يحول الاستدلال المتغير معضلة حساب التوزيع اللاحق المستعصي $p(z|x)$ إلى مسألة تحسين عبر تقريبه بعائلة توزيعات مطواعة $q_\\phi(z)$.",
      "correctIndex": 1,
      "explanationEn": "Correct Theoretical Formulation: Variational Inference transforms intractable Bayesian posterior inference into an optimization problem by approximating the true posterior $p(z|x)$ with a tractable family $q_\\phi(z)$.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يحول الاستدلال المتغير معضلة حساب التوزيع اللاحق المستعصي $p(z|x)$ إلى مسألة تحسين عبر تقريبه بعائلة توزيعات مطواعة $q_\\phi(z)$.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Variational Inference & Evidence Lower Bound (ELBO) Derivation.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Variational Inference transforms intractable Bayesian posterior inference into an optimization problem by approximating the true posterior $p(z|x)$ with a tractable family $q_\\phi(z)$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يحول الاستدلال المتغير معضلة حساب التوزيع اللاحق المستعصي $p(z|x)$ إلى مسألة تحسين عبر تقريبه بعائلة توزيعات مطواعة $q_\\phi(z)$.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch1_easy_31",
      "titleEn": "[EASY] Bayesian Networks, Directed Acyclic Graphs & D-Separation - Review 31",
      "titleAr": "[مستوى أساسي] شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation) - سؤال 31",
      "questionEn": "[AI & Data Science Core Concept] Regarding Bayesian Networks, Directed Acyclic Graphs & D-Separation, which of the following statements is theoretically and mathematically sound? (Variant 31)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 31)",
      "optionsEn": [
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "A Bayesian Network represents the joint probability distribution of random variables as a directed acyclic graph (DAG) factored into local conditional distributions: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "تمثل شبكة بايز التوزيع الاحتمالي المشترك لمتغيرات عشوائية كمخطط موجه عديم الحلقات (DAG) مفككاً إلى توزيعات شرطية محلية: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "A Bayesian Network represents the joint probability distribution of random variables as a directed acyclic graph (DAG) factored into local conditional distributions: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
      "correctAnswerEn": "A Bayesian Network represents the joint probability distribution of random variables as a directed acyclic graph (DAG) factored into local conditional distributions: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
      "correctAnswerAr": "تمثل شبكة بايز التوزيع الاحتمالي المشترك لمتغيرات عشوائية كمخطط موجه عديم الحلقات (DAG) مفككاً إلى توزيعات شرطية محلية: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
      "correctIndex": 2,
      "explanationEn": "Correct Theoretical Formulation: A Bayesian Network represents the joint probability distribution of random variables as a directed acyclic graph (DAG) factored into local conditional distributions: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تمثل شبكة بايز التوزيع الاحتمالي المشترك لمتغيرات عشوائية كمخطط موجه عديم الحلقات (DAG) مفككاً إلى توزيعات شرطية محلية: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Bayesian Networks, Directed Acyclic Graphs & D-Separation.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: A Bayesian Network represents the joint probability distribution of random variables as a directed acyclic graph (DAG) factored into local conditional distributions: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تمثل شبكة بايز التوزيع الاحتمالي المشترك لمتغيرات عشوائية كمخطط موجه عديم الحلقات (DAG) مفككاً إلى توزيعات شرطية محلية: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch1_easy_32",
      "titleEn": "[EASY] Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models - Review 32",
      "titleAr": "[مستوى أساسي] خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs) - سؤال 32",
      "questionEn": "[AI & Data Science Core Concept] Regarding Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models, which of the following statements is theoretically and mathematically sound? (Variant 32)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 32)",
      "optionsEn": [
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "Gaussian Mixture Models represent complex multimodal data distributions as a weighted sum of $K$ Gaussian components with prior mixture weights $\\pi_k$, mean vectors $\\mu_k$, and covariance matrices $\\Sigma_k$."
      ],
      "optionsAr": [
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "تمثل نماذج المزيج الغاوسي توزيعات البيانات المعقدة كمجموع مرجح لـ $K$ توزيعات غاوسية بأوزان خلط مسبقة $\\pi_k$ ومتجهات متوسطات $\\mu_k$ ومصفوفات تغاير $\\Sigma_k$."
      ],
      "correctAnswer": "Gaussian Mixture Models represent complex multimodal data distributions as a weighted sum of $K$ Gaussian components with prior mixture weights $\\pi_k$, mean vectors $\\mu_k$, and covariance matrices $\\Sigma_k$.",
      "correctAnswerEn": "Gaussian Mixture Models represent complex multimodal data distributions as a weighted sum of $K$ Gaussian components with prior mixture weights $\\pi_k$, mean vectors $\\mu_k$, and covariance matrices $\\Sigma_k$.",
      "correctAnswerAr": "تمثل نماذج المزيج الغاوسي توزيعات البيانات المعقدة كمجموع مرجح لـ $K$ توزيعات غاوسية بأوزان خلط مسبقة $\\pi_k$ ومتجهات متوسطات $\\mu_k$ ومصفوفات تغاير $\\Sigma_k$.",
      "correctIndex": 3,
      "explanationEn": "Correct Theoretical Formulation: Gaussian Mixture Models represent complex multimodal data distributions as a weighted sum of $K$ Gaussian components with prior mixture weights $\\pi_k$, mean vectors $\\mu_k$, and covariance matrices $\\Sigma_k$.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تمثل نماذج المزيج الغاوسي توزيعات البيانات المعقدة كمجموع مرجح لـ $K$ توزيعات غاوسية بأوزان خلط مسبقة $\\pi_k$ ومتجهات متوسطات $\\mu_k$ ومصفوفات تغاير $\\Sigma_k$.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Gaussian Mixture Models represent complex multimodal data distributions as a weighted sum of $K$ Gaussian components with prior mixture weights $\\pi_k$, mean vectors $\\mu_k$, and covariance matrices $\\Sigma_k$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تمثل نماذج المزيج الغاوسي توزيعات البيانات المعقدة كمجموع مرجح لـ $K$ توزيعات غاوسية بأوزان خلط مسبقة $\\pi_k$ ومتجهات متوسطات $\\mu_k$ ومصفوفات تغاير $\\Sigma_k$.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch1_easy_33",
      "titleEn": "[EASY] Variational Inference & Evidence Lower Bound (ELBO) Derivation - Review 33",
      "titleAr": "[مستوى أساسي] الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO) - سؤال 33",
      "questionEn": "[AI & Data Science Core Concept] Regarding Variational Inference & Evidence Lower Bound (ELBO) Derivation, which of the following statements is theoretically and mathematically sound? (Variant 33)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 33)",
      "optionsEn": [
        "Variational Inference transforms intractable Bayesian posterior inference into an optimization problem by approximating the true posterior $p(z|x)$ with a tractable family $q_\\phi(z)$.",
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "يحول الاستدلال المتغير معضلة حساب التوزيع اللاحق المستعصي $p(z|x)$ إلى مسألة تحسين عبر تقريبه بعائلة توزيعات مطواعة $q_\\phi(z)$.",
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "Variational Inference transforms intractable Bayesian posterior inference into an optimization problem by approximating the true posterior $p(z|x)$ with a tractable family $q_\\phi(z)$.",
      "correctAnswerEn": "Variational Inference transforms intractable Bayesian posterior inference into an optimization problem by approximating the true posterior $p(z|x)$ with a tractable family $q_\\phi(z)$.",
      "correctAnswerAr": "يحول الاستدلال المتغير معضلة حساب التوزيع اللاحق المستعصي $p(z|x)$ إلى مسألة تحسين عبر تقريبه بعائلة توزيعات مطواعة $q_\\phi(z)$.",
      "correctIndex": 0,
      "explanationEn": "Correct Theoretical Formulation: Variational Inference transforms intractable Bayesian posterior inference into an optimization problem by approximating the true posterior $p(z|x)$ with a tractable family $q_\\phi(z)$.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يحول الاستدلال المتغير معضلة حساب التوزيع اللاحق المستعصي $p(z|x)$ إلى مسألة تحسين عبر تقريبه بعائلة توزيعات مطواعة $q_\\phi(z)$.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Variational Inference & Evidence Lower Bound (ELBO) Derivation.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Variational Inference transforms intractable Bayesian posterior inference into an optimization problem by approximating the true posterior $p(z|x)$ with a tractable family $q_\\phi(z)$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يحول الاستدلال المتغير معضلة حساب التوزيع اللاحق المستعصي $p(z|x)$ إلى مسألة تحسين عبر تقريبه بعائلة توزيعات مطواعة $q_\\phi(z)$.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch1_easy_34",
      "titleEn": "[EASY] Bayesian Networks, Directed Acyclic Graphs & D-Separation - Review 34",
      "titleAr": "[مستوى أساسي] شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation) - سؤال 34",
      "questionEn": "[AI & Data Science Core Concept] Regarding Bayesian Networks, Directed Acyclic Graphs & D-Separation, which of the following statements is theoretically and mathematically sound? (Variant 34)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 34)",
      "optionsEn": [
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "A Bayesian Network represents the joint probability distribution of random variables as a directed acyclic graph (DAG) factored into local conditional distributions: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "تمثل شبكة بايز التوزيع الاحتمالي المشترك لمتغيرات عشوائية كمخطط موجه عديم الحلقات (DAG) مفككاً إلى توزيعات شرطية محلية: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "A Bayesian Network represents the joint probability distribution of random variables as a directed acyclic graph (DAG) factored into local conditional distributions: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
      "correctAnswerEn": "A Bayesian Network represents the joint probability distribution of random variables as a directed acyclic graph (DAG) factored into local conditional distributions: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
      "correctAnswerAr": "تمثل شبكة بايز التوزيع الاحتمالي المشترك لمتغيرات عشوائية كمخطط موجه عديم الحلقات (DAG) مفككاً إلى توزيعات شرطية محلية: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
      "correctIndex": 1,
      "explanationEn": "Correct Theoretical Formulation: A Bayesian Network represents the joint probability distribution of random variables as a directed acyclic graph (DAG) factored into local conditional distributions: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تمثل شبكة بايز التوزيع الاحتمالي المشترك لمتغيرات عشوائية كمخطط موجه عديم الحلقات (DAG) مفككاً إلى توزيعات شرطية محلية: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Bayesian Networks, Directed Acyclic Graphs & D-Separation.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: A Bayesian Network represents the joint probability distribution of random variables as a directed acyclic graph (DAG) factored into local conditional distributions: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تمثل شبكة بايز التوزيع الاحتمالي المشترك لمتغيرات عشوائية كمخطط موجه عديم الحلقات (DAG) مفككاً إلى توزيعات شرطية محلية: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch1_easy_35",
      "titleEn": "[EASY] Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models - Review 35",
      "titleAr": "[مستوى أساسي] خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs) - سؤال 35",
      "questionEn": "[AI & Data Science Core Concept] Regarding Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models, which of the following statements is theoretically and mathematically sound? (Variant 35)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 35)",
      "optionsEn": [
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Gaussian Mixture Models represent complex multimodal data distributions as a weighted sum of $K$ Gaussian components with prior mixture weights $\\pi_k$, mean vectors $\\mu_k$, and covariance matrices $\\Sigma_k$.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تمثل نماذج المزيج الغاوسي توزيعات البيانات المعقدة كمجموع مرجح لـ $K$ توزيعات غاوسية بأوزان خلط مسبقة $\\pi_k$ ومتجهات متوسطات $\\mu_k$ ومصفوفات تغاير $\\Sigma_k$.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "Gaussian Mixture Models represent complex multimodal data distributions as a weighted sum of $K$ Gaussian components with prior mixture weights $\\pi_k$, mean vectors $\\mu_k$, and covariance matrices $\\Sigma_k$.",
      "correctAnswerEn": "Gaussian Mixture Models represent complex multimodal data distributions as a weighted sum of $K$ Gaussian components with prior mixture weights $\\pi_k$, mean vectors $\\mu_k$, and covariance matrices $\\Sigma_k$.",
      "correctAnswerAr": "تمثل نماذج المزيج الغاوسي توزيعات البيانات المعقدة كمجموع مرجح لـ $K$ توزيعات غاوسية بأوزان خلط مسبقة $\\pi_k$ ومتجهات متوسطات $\\mu_k$ ومصفوفات تغاير $\\Sigma_k$.",
      "correctIndex": 2,
      "explanationEn": "Correct Theoretical Formulation: Gaussian Mixture Models represent complex multimodal data distributions as a weighted sum of $K$ Gaussian components with prior mixture weights $\\pi_k$, mean vectors $\\mu_k$, and covariance matrices $\\Sigma_k$.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تمثل نماذج المزيج الغاوسي توزيعات البيانات المعقدة كمجموع مرجح لـ $K$ توزيعات غاوسية بأوزان خلط مسبقة $\\pi_k$ ومتجهات متوسطات $\\mu_k$ ومصفوفات تغاير $\\Sigma_k$.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Gaussian Mixture Models represent complex multimodal data distributions as a weighted sum of $K$ Gaussian components with prior mixture weights $\\pi_k$, mean vectors $\\mu_k$, and covariance matrices $\\Sigma_k$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تمثل نماذج المزيج الغاوسي توزيعات البيانات المعقدة كمجموع مرجح لـ $K$ توزيعات غاوسية بأوزان خلط مسبقة $\\pi_k$ ومتجهات متوسطات $\\mu_k$ ومصفوفات تغاير $\\Sigma_k$.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch1_easy_36",
      "titleEn": "[EASY] Variational Inference & Evidence Lower Bound (ELBO) Derivation - Review 36",
      "titleAr": "[مستوى أساسي] الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO) - سؤال 36",
      "questionEn": "[AI & Data Science Core Concept] Regarding Variational Inference & Evidence Lower Bound (ELBO) Derivation, which of the following statements is theoretically and mathematically sound? (Variant 36)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 36)",
      "optionsEn": [
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "Variational Inference transforms intractable Bayesian posterior inference into an optimization problem by approximating the true posterior $p(z|x)$ with a tractable family $q_\\phi(z)$."
      ],
      "optionsAr": [
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "يحول الاستدلال المتغير معضلة حساب التوزيع اللاحق المستعصي $p(z|x)$ إلى مسألة تحسين عبر تقريبه بعائلة توزيعات مطواعة $q_\\phi(z)$."
      ],
      "correctAnswer": "Variational Inference transforms intractable Bayesian posterior inference into an optimization problem by approximating the true posterior $p(z|x)$ with a tractable family $q_\\phi(z)$.",
      "correctAnswerEn": "Variational Inference transforms intractable Bayesian posterior inference into an optimization problem by approximating the true posterior $p(z|x)$ with a tractable family $q_\\phi(z)$.",
      "correctAnswerAr": "يحول الاستدلال المتغير معضلة حساب التوزيع اللاحق المستعصي $p(z|x)$ إلى مسألة تحسين عبر تقريبه بعائلة توزيعات مطواعة $q_\\phi(z)$.",
      "correctIndex": 3,
      "explanationEn": "Correct Theoretical Formulation: Variational Inference transforms intractable Bayesian posterior inference into an optimization problem by approximating the true posterior $p(z|x)$ with a tractable family $q_\\phi(z)$.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يحول الاستدلال المتغير معضلة حساب التوزيع اللاحق المستعصي $p(z|x)$ إلى مسألة تحسين عبر تقريبه بعائلة توزيعات مطواعة $q_\\phi(z)$.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Variational Inference & Evidence Lower Bound (ELBO) Derivation.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Variational Inference transforms intractable Bayesian posterior inference into an optimization problem by approximating the true posterior $p(z|x)$ with a tractable family $q_\\phi(z)$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يحول الاستدلال المتغير معضلة حساب التوزيع اللاحق المستعصي $p(z|x)$ إلى مسألة تحسين عبر تقريبه بعائلة توزيعات مطواعة $q_\\phi(z)$.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch1_easy_37",
      "titleEn": "[EASY] Bayesian Networks, Directed Acyclic Graphs & D-Separation - Review 37",
      "titleAr": "[مستوى أساسي] شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation) - سؤال 37",
      "questionEn": "[AI & Data Science Core Concept] Regarding Bayesian Networks, Directed Acyclic Graphs & D-Separation, which of the following statements is theoretically and mathematically sound? (Variant 37)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 37)",
      "optionsEn": [
        "A Bayesian Network represents the joint probability distribution of random variables as a directed acyclic graph (DAG) factored into local conditional distributions: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "تمثل شبكة بايز التوزيع الاحتمالي المشترك لمتغيرات عشوائية كمخطط موجه عديم الحلقات (DAG) مفككاً إلى توزيعات شرطية محلية: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "A Bayesian Network represents the joint probability distribution of random variables as a directed acyclic graph (DAG) factored into local conditional distributions: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
      "correctAnswerEn": "A Bayesian Network represents the joint probability distribution of random variables as a directed acyclic graph (DAG) factored into local conditional distributions: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
      "correctAnswerAr": "تمثل شبكة بايز التوزيع الاحتمالي المشترك لمتغيرات عشوائية كمخطط موجه عديم الحلقات (DAG) مفككاً إلى توزيعات شرطية محلية: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
      "correctIndex": 0,
      "explanationEn": "Correct Theoretical Formulation: A Bayesian Network represents the joint probability distribution of random variables as a directed acyclic graph (DAG) factored into local conditional distributions: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تمثل شبكة بايز التوزيع الاحتمالي المشترك لمتغيرات عشوائية كمخطط موجه عديم الحلقات (DAG) مفككاً إلى توزيعات شرطية محلية: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Bayesian Networks, Directed Acyclic Graphs & D-Separation.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: A Bayesian Network represents the joint probability distribution of random variables as a directed acyclic graph (DAG) factored into local conditional distributions: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تمثل شبكة بايز التوزيع الاحتمالي المشترك لمتغيرات عشوائية كمخطط موجه عديم الحلقات (DAG) مفككاً إلى توزيعات شرطية محلية: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch1_easy_38",
      "titleEn": "[EASY] Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models - Review 38",
      "titleAr": "[مستوى أساسي] خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs) - سؤال 38",
      "questionEn": "[AI & Data Science Core Concept] Regarding Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models, which of the following statements is theoretically and mathematically sound? (Variant 38)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 38)",
      "optionsEn": [
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "Gaussian Mixture Models represent complex multimodal data distributions as a weighted sum of $K$ Gaussian components with prior mixture weights $\\pi_k$, mean vectors $\\mu_k$, and covariance matrices $\\Sigma_k$.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تمثل نماذج المزيج الغاوسي توزيعات البيانات المعقدة كمجموع مرجح لـ $K$ توزيعات غاوسية بأوزان خلط مسبقة $\\pi_k$ ومتجهات متوسطات $\\mu_k$ ومصفوفات تغاير $\\Sigma_k$.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "Gaussian Mixture Models represent complex multimodal data distributions as a weighted sum of $K$ Gaussian components with prior mixture weights $\\pi_k$, mean vectors $\\mu_k$, and covariance matrices $\\Sigma_k$.",
      "correctAnswerEn": "Gaussian Mixture Models represent complex multimodal data distributions as a weighted sum of $K$ Gaussian components with prior mixture weights $\\pi_k$, mean vectors $\\mu_k$, and covariance matrices $\\Sigma_k$.",
      "correctAnswerAr": "تمثل نماذج المزيج الغاوسي توزيعات البيانات المعقدة كمجموع مرجح لـ $K$ توزيعات غاوسية بأوزان خلط مسبقة $\\pi_k$ ومتجهات متوسطات $\\mu_k$ ومصفوفات تغاير $\\Sigma_k$.",
      "correctIndex": 1,
      "explanationEn": "Correct Theoretical Formulation: Gaussian Mixture Models represent complex multimodal data distributions as a weighted sum of $K$ Gaussian components with prior mixture weights $\\pi_k$, mean vectors $\\mu_k$, and covariance matrices $\\Sigma_k$.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تمثل نماذج المزيج الغاوسي توزيعات البيانات المعقدة كمجموع مرجح لـ $K$ توزيعات غاوسية بأوزان خلط مسبقة $\\pi_k$ ومتجهات متوسطات $\\mu_k$ ومصفوفات تغاير $\\Sigma_k$.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Gaussian Mixture Models represent complex multimodal data distributions as a weighted sum of $K$ Gaussian components with prior mixture weights $\\pi_k$, mean vectors $\\mu_k$, and covariance matrices $\\Sigma_k$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تمثل نماذج المزيج الغاوسي توزيعات البيانات المعقدة كمجموع مرجح لـ $K$ توزيعات غاوسية بأوزان خلط مسبقة $\\pi_k$ ومتجهات متوسطات $\\mu_k$ ومصفوفات تغاير $\\Sigma_k$.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch1_easy_39",
      "titleEn": "[EASY] Variational Inference & Evidence Lower Bound (ELBO) Derivation - Review 39",
      "titleAr": "[مستوى أساسي] الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO) - سؤال 39",
      "questionEn": "[AI & Data Science Core Concept] Regarding Variational Inference & Evidence Lower Bound (ELBO) Derivation, which of the following statements is theoretically and mathematically sound? (Variant 39)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 39)",
      "optionsEn": [
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "Variational Inference transforms intractable Bayesian posterior inference into an optimization problem by approximating the true posterior $p(z|x)$ with a tractable family $q_\\phi(z)$.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "يحول الاستدلال المتغير معضلة حساب التوزيع اللاحق المستعصي $p(z|x)$ إلى مسألة تحسين عبر تقريبه بعائلة توزيعات مطواعة $q_\\phi(z)$.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "Variational Inference transforms intractable Bayesian posterior inference into an optimization problem by approximating the true posterior $p(z|x)$ with a tractable family $q_\\phi(z)$.",
      "correctAnswerEn": "Variational Inference transforms intractable Bayesian posterior inference into an optimization problem by approximating the true posterior $p(z|x)$ with a tractable family $q_\\phi(z)$.",
      "correctAnswerAr": "يحول الاستدلال المتغير معضلة حساب التوزيع اللاحق المستعصي $p(z|x)$ إلى مسألة تحسين عبر تقريبه بعائلة توزيعات مطواعة $q_\\phi(z)$.",
      "correctIndex": 2,
      "explanationEn": "Correct Theoretical Formulation: Variational Inference transforms intractable Bayesian posterior inference into an optimization problem by approximating the true posterior $p(z|x)$ with a tractable family $q_\\phi(z)$.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يحول الاستدلال المتغير معضلة حساب التوزيع اللاحق المستعصي $p(z|x)$ إلى مسألة تحسين عبر تقريبه بعائلة توزيعات مطواعة $q_\\phi(z)$.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Variational Inference & Evidence Lower Bound (ELBO) Derivation.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Variational Inference transforms intractable Bayesian posterior inference into an optimization problem by approximating the true posterior $p(z|x)$ with a tractable family $q_\\phi(z)$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يحول الاستدلال المتغير معضلة حساب التوزيع اللاحق المستعصي $p(z|x)$ إلى مسألة تحسين عبر تقريبه بعائلة توزيعات مطواعة $q_\\phi(z)$.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch1_easy_40",
      "titleEn": "[EASY] Bayesian Networks, Directed Acyclic Graphs & D-Separation - Review 40",
      "titleAr": "[مستوى أساسي] شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation) - سؤال 40",
      "questionEn": "[AI & Data Science Core Concept] Regarding Bayesian Networks, Directed Acyclic Graphs & D-Separation, which of the following statements is theoretically and mathematically sound? (Variant 40)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 40)",
      "optionsEn": [
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "A Bayesian Network represents the joint probability distribution of random variables as a directed acyclic graph (DAG) factored into local conditional distributions: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$."
      ],
      "optionsAr": [
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "تمثل شبكة بايز التوزيع الاحتمالي المشترك لمتغيرات عشوائية كمخطط موجه عديم الحلقات (DAG) مفككاً إلى توزيعات شرطية محلية: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$."
      ],
      "correctAnswer": "A Bayesian Network represents the joint probability distribution of random variables as a directed acyclic graph (DAG) factored into local conditional distributions: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
      "correctAnswerEn": "A Bayesian Network represents the joint probability distribution of random variables as a directed acyclic graph (DAG) factored into local conditional distributions: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
      "correctAnswerAr": "تمثل شبكة بايز التوزيع الاحتمالي المشترك لمتغيرات عشوائية كمخطط موجه عديم الحلقات (DAG) مفككاً إلى توزيعات شرطية محلية: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
      "correctIndex": 3,
      "explanationEn": "Correct Theoretical Formulation: A Bayesian Network represents the joint probability distribution of random variables as a directed acyclic graph (DAG) factored into local conditional distributions: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تمثل شبكة بايز التوزيع الاحتمالي المشترك لمتغيرات عشوائية كمخطط موجه عديم الحلقات (DAG) مفككاً إلى توزيعات شرطية محلية: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Bayesian Networks, Directed Acyclic Graphs & D-Separation.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: A Bayesian Network represents the joint probability distribution of random variables as a directed acyclic graph (DAG) factored into local conditional distributions: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تمثل شبكة بايز التوزيع الاحتمالي المشترك لمتغيرات عشوائية كمخطط موجه عديم الحلقات (DAG) مفككاً إلى توزيعات شرطية محلية: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch1_easy_41",
      "titleEn": "[EASY] Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models - Review 41",
      "titleAr": "[مستوى أساسي] خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs) - سؤال 41",
      "questionEn": "[AI & Data Science Core Concept] Regarding Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models, which of the following statements is theoretically and mathematically sound? (Variant 41)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 41)",
      "optionsEn": [
        "Gaussian Mixture Models represent complex multimodal data distributions as a weighted sum of $K$ Gaussian components with prior mixture weights $\\pi_k$, mean vectors $\\mu_k$, and covariance matrices $\\Sigma_k$.",
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "تمثل نماذج المزيج الغاوسي توزيعات البيانات المعقدة كمجموع مرجح لـ $K$ توزيعات غاوسية بأوزان خلط مسبقة $\\pi_k$ ومتجهات متوسطات $\\mu_k$ ومصفوفات تغاير $\\Sigma_k$.",
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "Gaussian Mixture Models represent complex multimodal data distributions as a weighted sum of $K$ Gaussian components with prior mixture weights $\\pi_k$, mean vectors $\\mu_k$, and covariance matrices $\\Sigma_k$.",
      "correctAnswerEn": "Gaussian Mixture Models represent complex multimodal data distributions as a weighted sum of $K$ Gaussian components with prior mixture weights $\\pi_k$, mean vectors $\\mu_k$, and covariance matrices $\\Sigma_k$.",
      "correctAnswerAr": "تمثل نماذج المزيج الغاوسي توزيعات البيانات المعقدة كمجموع مرجح لـ $K$ توزيعات غاوسية بأوزان خلط مسبقة $\\pi_k$ ومتجهات متوسطات $\\mu_k$ ومصفوفات تغاير $\\Sigma_k$.",
      "correctIndex": 0,
      "explanationEn": "Correct Theoretical Formulation: Gaussian Mixture Models represent complex multimodal data distributions as a weighted sum of $K$ Gaussian components with prior mixture weights $\\pi_k$, mean vectors $\\mu_k$, and covariance matrices $\\Sigma_k$.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تمثل نماذج المزيج الغاوسي توزيعات البيانات المعقدة كمجموع مرجح لـ $K$ توزيعات غاوسية بأوزان خلط مسبقة $\\pi_k$ ومتجهات متوسطات $\\mu_k$ ومصفوفات تغاير $\\Sigma_k$.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Gaussian Mixture Models represent complex multimodal data distributions as a weighted sum of $K$ Gaussian components with prior mixture weights $\\pi_k$, mean vectors $\\mu_k$, and covariance matrices $\\Sigma_k$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تمثل نماذج المزيج الغاوسي توزيعات البيانات المعقدة كمجموع مرجح لـ $K$ توزيعات غاوسية بأوزان خلط مسبقة $\\pi_k$ ومتجهات متوسطات $\\mu_k$ ومصفوفات تغاير $\\Sigma_k$.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch1_easy_42",
      "titleEn": "[EASY] Variational Inference & Evidence Lower Bound (ELBO) Derivation - Review 42",
      "titleAr": "[مستوى أساسي] الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO) - سؤال 42",
      "questionEn": "[AI & Data Science Core Concept] Regarding Variational Inference & Evidence Lower Bound (ELBO) Derivation, which of the following statements is theoretically and mathematically sound? (Variant 42)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 42)",
      "optionsEn": [
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "Variational Inference transforms intractable Bayesian posterior inference into an optimization problem by approximating the true posterior $p(z|x)$ with a tractable family $q_\\phi(z)$.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "يحول الاستدلال المتغير معضلة حساب التوزيع اللاحق المستعصي $p(z|x)$ إلى مسألة تحسين عبر تقريبه بعائلة توزيعات مطواعة $q_\\phi(z)$.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "Variational Inference transforms intractable Bayesian posterior inference into an optimization problem by approximating the true posterior $p(z|x)$ with a tractable family $q_\\phi(z)$.",
      "correctAnswerEn": "Variational Inference transforms intractable Bayesian posterior inference into an optimization problem by approximating the true posterior $p(z|x)$ with a tractable family $q_\\phi(z)$.",
      "correctAnswerAr": "يحول الاستدلال المتغير معضلة حساب التوزيع اللاحق المستعصي $p(z|x)$ إلى مسألة تحسين عبر تقريبه بعائلة توزيعات مطواعة $q_\\phi(z)$.",
      "correctIndex": 1,
      "explanationEn": "Correct Theoretical Formulation: Variational Inference transforms intractable Bayesian posterior inference into an optimization problem by approximating the true posterior $p(z|x)$ with a tractable family $q_\\phi(z)$.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يحول الاستدلال المتغير معضلة حساب التوزيع اللاحق المستعصي $p(z|x)$ إلى مسألة تحسين عبر تقريبه بعائلة توزيعات مطواعة $q_\\phi(z)$.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Variational Inference & Evidence Lower Bound (ELBO) Derivation.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Variational Inference transforms intractable Bayesian posterior inference into an optimization problem by approximating the true posterior $p(z|x)$ with a tractable family $q_\\phi(z)$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يحول الاستدلال المتغير معضلة حساب التوزيع اللاحق المستعصي $p(z|x)$ إلى مسألة تحسين عبر تقريبه بعائلة توزيعات مطواعة $q_\\phi(z)$.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch1_easy_43",
      "titleEn": "[EASY] Bayesian Networks, Directed Acyclic Graphs & D-Separation - Review 43",
      "titleAr": "[مستوى أساسي] شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation) - سؤال 43",
      "questionEn": "[AI & Data Science Core Concept] Regarding Bayesian Networks, Directed Acyclic Graphs & D-Separation, which of the following statements is theoretically and mathematically sound? (Variant 43)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 43)",
      "optionsEn": [
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "A Bayesian Network represents the joint probability distribution of random variables as a directed acyclic graph (DAG) factored into local conditional distributions: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تمثل شبكة بايز التوزيع الاحتمالي المشترك لمتغيرات عشوائية كمخطط موجه عديم الحلقات (DAG) مفككاً إلى توزيعات شرطية محلية: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "A Bayesian Network represents the joint probability distribution of random variables as a directed acyclic graph (DAG) factored into local conditional distributions: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
      "correctAnswerEn": "A Bayesian Network represents the joint probability distribution of random variables as a directed acyclic graph (DAG) factored into local conditional distributions: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
      "correctAnswerAr": "تمثل شبكة بايز التوزيع الاحتمالي المشترك لمتغيرات عشوائية كمخطط موجه عديم الحلقات (DAG) مفككاً إلى توزيعات شرطية محلية: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
      "correctIndex": 2,
      "explanationEn": "Correct Theoretical Formulation: A Bayesian Network represents the joint probability distribution of random variables as a directed acyclic graph (DAG) factored into local conditional distributions: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تمثل شبكة بايز التوزيع الاحتمالي المشترك لمتغيرات عشوائية كمخطط موجه عديم الحلقات (DAG) مفككاً إلى توزيعات شرطية محلية: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Bayesian Networks, Directed Acyclic Graphs & D-Separation.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: A Bayesian Network represents the joint probability distribution of random variables as a directed acyclic graph (DAG) factored into local conditional distributions: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تمثل شبكة بايز التوزيع الاحتمالي المشترك لمتغيرات عشوائية كمخطط موجه عديم الحلقات (DAG) مفككاً إلى توزيعات شرطية محلية: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch1_easy_44",
      "titleEn": "[EASY] Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models - Review 44",
      "titleAr": "[مستوى أساسي] خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs) - سؤال 44",
      "questionEn": "[AI & Data Science Core Concept] Regarding Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models, which of the following statements is theoretically and mathematically sound? (Variant 44)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 44)",
      "optionsEn": [
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "Gaussian Mixture Models represent complex multimodal data distributions as a weighted sum of $K$ Gaussian components with prior mixture weights $\\pi_k$, mean vectors $\\mu_k$, and covariance matrices $\\Sigma_k$."
      ],
      "optionsAr": [
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تمثل نماذج المزيج الغاوسي توزيعات البيانات المعقدة كمجموع مرجح لـ $K$ توزيعات غاوسية بأوزان خلط مسبقة $\\pi_k$ ومتجهات متوسطات $\\mu_k$ ومصفوفات تغاير $\\Sigma_k$."
      ],
      "correctAnswer": "Gaussian Mixture Models represent complex multimodal data distributions as a weighted sum of $K$ Gaussian components with prior mixture weights $\\pi_k$, mean vectors $\\mu_k$, and covariance matrices $\\Sigma_k$.",
      "correctAnswerEn": "Gaussian Mixture Models represent complex multimodal data distributions as a weighted sum of $K$ Gaussian components with prior mixture weights $\\pi_k$, mean vectors $\\mu_k$, and covariance matrices $\\Sigma_k$.",
      "correctAnswerAr": "تمثل نماذج المزيج الغاوسي توزيعات البيانات المعقدة كمجموع مرجح لـ $K$ توزيعات غاوسية بأوزان خلط مسبقة $\\pi_k$ ومتجهات متوسطات $\\mu_k$ ومصفوفات تغاير $\\Sigma_k$.",
      "correctIndex": 3,
      "explanationEn": "Correct Theoretical Formulation: Gaussian Mixture Models represent complex multimodal data distributions as a weighted sum of $K$ Gaussian components with prior mixture weights $\\pi_k$, mean vectors $\\mu_k$, and covariance matrices $\\Sigma_k$.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تمثل نماذج المزيج الغاوسي توزيعات البيانات المعقدة كمجموع مرجح لـ $K$ توزيعات غاوسية بأوزان خلط مسبقة $\\pi_k$ ومتجهات متوسطات $\\mu_k$ ومصفوفات تغاير $\\Sigma_k$.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Gaussian Mixture Models represent complex multimodal data distributions as a weighted sum of $K$ Gaussian components with prior mixture weights $\\pi_k$, mean vectors $\\mu_k$, and covariance matrices $\\Sigma_k$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تمثل نماذج المزيج الغاوسي توزيعات البيانات المعقدة كمجموع مرجح لـ $K$ توزيعات غاوسية بأوزان خلط مسبقة $\\pi_k$ ومتجهات متوسطات $\\mu_k$ ومصفوفات تغاير $\\Sigma_k$.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch1_easy_45",
      "titleEn": "[EASY] Variational Inference & Evidence Lower Bound (ELBO) Derivation - Review 45",
      "titleAr": "[مستوى أساسي] الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO) - سؤال 45",
      "questionEn": "[AI & Data Science Core Concept] Regarding Variational Inference & Evidence Lower Bound (ELBO) Derivation, which of the following statements is theoretically and mathematically sound? (Variant 45)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 45)",
      "optionsEn": [
        "Variational Inference transforms intractable Bayesian posterior inference into an optimization problem by approximating the true posterior $p(z|x)$ with a tractable family $q_\\phi(z)$.",
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "يحول الاستدلال المتغير معضلة حساب التوزيع اللاحق المستعصي $p(z|x)$ إلى مسألة تحسين عبر تقريبه بعائلة توزيعات مطواعة $q_\\phi(z)$.",
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "Variational Inference transforms intractable Bayesian posterior inference into an optimization problem by approximating the true posterior $p(z|x)$ with a tractable family $q_\\phi(z)$.",
      "correctAnswerEn": "Variational Inference transforms intractable Bayesian posterior inference into an optimization problem by approximating the true posterior $p(z|x)$ with a tractable family $q_\\phi(z)$.",
      "correctAnswerAr": "يحول الاستدلال المتغير معضلة حساب التوزيع اللاحق المستعصي $p(z|x)$ إلى مسألة تحسين عبر تقريبه بعائلة توزيعات مطواعة $q_\\phi(z)$.",
      "correctIndex": 0,
      "explanationEn": "Correct Theoretical Formulation: Variational Inference transforms intractable Bayesian posterior inference into an optimization problem by approximating the true posterior $p(z|x)$ with a tractable family $q_\\phi(z)$.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يحول الاستدلال المتغير معضلة حساب التوزيع اللاحق المستعصي $p(z|x)$ إلى مسألة تحسين عبر تقريبه بعائلة توزيعات مطواعة $q_\\phi(z)$.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Variational Inference & Evidence Lower Bound (ELBO) Derivation.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Variational Inference transforms intractable Bayesian posterior inference into an optimization problem by approximating the true posterior $p(z|x)$ with a tractable family $q_\\phi(z)$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يحول الاستدلال المتغير معضلة حساب التوزيع اللاحق المستعصي $p(z|x)$ إلى مسألة تحسين عبر تقريبه بعائلة توزيعات مطواعة $q_\\phi(z)$.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch1_easy_46",
      "titleEn": "[EASY] Bayesian Networks, Directed Acyclic Graphs & D-Separation - Review 46",
      "titleAr": "[مستوى أساسي] شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation) - سؤال 46",
      "questionEn": "[AI & Data Science Core Concept] Regarding Bayesian Networks, Directed Acyclic Graphs & D-Separation, which of the following statements is theoretically and mathematically sound? (Variant 46)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 46)",
      "optionsEn": [
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "A Bayesian Network represents the joint probability distribution of random variables as a directed acyclic graph (DAG) factored into local conditional distributions: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "تمثل شبكة بايز التوزيع الاحتمالي المشترك لمتغيرات عشوائية كمخطط موجه عديم الحلقات (DAG) مفككاً إلى توزيعات شرطية محلية: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "A Bayesian Network represents the joint probability distribution of random variables as a directed acyclic graph (DAG) factored into local conditional distributions: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
      "correctAnswerEn": "A Bayesian Network represents the joint probability distribution of random variables as a directed acyclic graph (DAG) factored into local conditional distributions: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
      "correctAnswerAr": "تمثل شبكة بايز التوزيع الاحتمالي المشترك لمتغيرات عشوائية كمخطط موجه عديم الحلقات (DAG) مفككاً إلى توزيعات شرطية محلية: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
      "correctIndex": 1,
      "explanationEn": "Correct Theoretical Formulation: A Bayesian Network represents the joint probability distribution of random variables as a directed acyclic graph (DAG) factored into local conditional distributions: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تمثل شبكة بايز التوزيع الاحتمالي المشترك لمتغيرات عشوائية كمخطط موجه عديم الحلقات (DAG) مفككاً إلى توزيعات شرطية محلية: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Bayesian Networks, Directed Acyclic Graphs & D-Separation.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: A Bayesian Network represents the joint probability distribution of random variables as a directed acyclic graph (DAG) factored into local conditional distributions: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تمثل شبكة بايز التوزيع الاحتمالي المشترك لمتغيرات عشوائية كمخطط موجه عديم الحلقات (DAG) مفككاً إلى توزيعات شرطية محلية: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch1_easy_47",
      "titleEn": "[EASY] Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models - Review 47",
      "titleAr": "[مستوى أساسي] خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs) - سؤال 47",
      "questionEn": "[AI & Data Science Core Concept] Regarding Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models, which of the following statements is theoretically and mathematically sound? (Variant 47)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 47)",
      "optionsEn": [
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Gaussian Mixture Models represent complex multimodal data distributions as a weighted sum of $K$ Gaussian components with prior mixture weights $\\pi_k$, mean vectors $\\mu_k$, and covariance matrices $\\Sigma_k$.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تمثل نماذج المزيج الغاوسي توزيعات البيانات المعقدة كمجموع مرجح لـ $K$ توزيعات غاوسية بأوزان خلط مسبقة $\\pi_k$ ومتجهات متوسطات $\\mu_k$ ومصفوفات تغاير $\\Sigma_k$.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "Gaussian Mixture Models represent complex multimodal data distributions as a weighted sum of $K$ Gaussian components with prior mixture weights $\\pi_k$, mean vectors $\\mu_k$, and covariance matrices $\\Sigma_k$.",
      "correctAnswerEn": "Gaussian Mixture Models represent complex multimodal data distributions as a weighted sum of $K$ Gaussian components with prior mixture weights $\\pi_k$, mean vectors $\\mu_k$, and covariance matrices $\\Sigma_k$.",
      "correctAnswerAr": "تمثل نماذج المزيج الغاوسي توزيعات البيانات المعقدة كمجموع مرجح لـ $K$ توزيعات غاوسية بأوزان خلط مسبقة $\\pi_k$ ومتجهات متوسطات $\\mu_k$ ومصفوفات تغاير $\\Sigma_k$.",
      "correctIndex": 2,
      "explanationEn": "Correct Theoretical Formulation: Gaussian Mixture Models represent complex multimodal data distributions as a weighted sum of $K$ Gaussian components with prior mixture weights $\\pi_k$, mean vectors $\\mu_k$, and covariance matrices $\\Sigma_k$.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تمثل نماذج المزيج الغاوسي توزيعات البيانات المعقدة كمجموع مرجح لـ $K$ توزيعات غاوسية بأوزان خلط مسبقة $\\pi_k$ ومتجهات متوسطات $\\mu_k$ ومصفوفات تغاير $\\Sigma_k$.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Gaussian Mixture Models represent complex multimodal data distributions as a weighted sum of $K$ Gaussian components with prior mixture weights $\\pi_k$, mean vectors $\\mu_k$, and covariance matrices $\\Sigma_k$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تمثل نماذج المزيج الغاوسي توزيعات البيانات المعقدة كمجموع مرجح لـ $K$ توزيعات غاوسية بأوزان خلط مسبقة $\\pi_k$ ومتجهات متوسطات $\\mu_k$ ومصفوفات تغاير $\\Sigma_k$.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch1_easy_48",
      "titleEn": "[EASY] Variational Inference & Evidence Lower Bound (ELBO) Derivation - Review 48",
      "titleAr": "[مستوى أساسي] الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO) - سؤال 48",
      "questionEn": "[AI & Data Science Core Concept] Regarding Variational Inference & Evidence Lower Bound (ELBO) Derivation, which of the following statements is theoretically and mathematically sound? (Variant 48)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 48)",
      "optionsEn": [
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "Variational Inference transforms intractable Bayesian posterior inference into an optimization problem by approximating the true posterior $p(z|x)$ with a tractable family $q_\\phi(z)$."
      ],
      "optionsAr": [
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "يحول الاستدلال المتغير معضلة حساب التوزيع اللاحق المستعصي $p(z|x)$ إلى مسألة تحسين عبر تقريبه بعائلة توزيعات مطواعة $q_\\phi(z)$."
      ],
      "correctAnswer": "Variational Inference transforms intractable Bayesian posterior inference into an optimization problem by approximating the true posterior $p(z|x)$ with a tractable family $q_\\phi(z)$.",
      "correctAnswerEn": "Variational Inference transforms intractable Bayesian posterior inference into an optimization problem by approximating the true posterior $p(z|x)$ with a tractable family $q_\\phi(z)$.",
      "correctAnswerAr": "يحول الاستدلال المتغير معضلة حساب التوزيع اللاحق المستعصي $p(z|x)$ إلى مسألة تحسين عبر تقريبه بعائلة توزيعات مطواعة $q_\\phi(z)$.",
      "correctIndex": 3,
      "explanationEn": "Correct Theoretical Formulation: Variational Inference transforms intractable Bayesian posterior inference into an optimization problem by approximating the true posterior $p(z|x)$ with a tractable family $q_\\phi(z)$.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يحول الاستدلال المتغير معضلة حساب التوزيع اللاحق المستعصي $p(z|x)$ إلى مسألة تحسين عبر تقريبه بعائلة توزيعات مطواعة $q_\\phi(z)$.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Variational Inference & Evidence Lower Bound (ELBO) Derivation.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Variational Inference transforms intractable Bayesian posterior inference into an optimization problem by approximating the true posterior $p(z|x)$ with a tractable family $q_\\phi(z)$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يحول الاستدلال المتغير معضلة حساب التوزيع اللاحق المستعصي $p(z|x)$ إلى مسألة تحسين عبر تقريبه بعائلة توزيعات مطواعة $q_\\phi(z)$.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch1_easy_49",
      "titleEn": "[EASY] Bayesian Networks, Directed Acyclic Graphs & D-Separation - Review 49",
      "titleAr": "[مستوى أساسي] شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation) - سؤال 49",
      "questionEn": "[AI & Data Science Core Concept] Regarding Bayesian Networks, Directed Acyclic Graphs & D-Separation, which of the following statements is theoretically and mathematically sound? (Variant 49)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 49)",
      "optionsEn": [
        "A Bayesian Network represents the joint probability distribution of random variables as a directed acyclic graph (DAG) factored into local conditional distributions: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "تمثل شبكة بايز التوزيع الاحتمالي المشترك لمتغيرات عشوائية كمخطط موجه عديم الحلقات (DAG) مفككاً إلى توزيعات شرطية محلية: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "A Bayesian Network represents the joint probability distribution of random variables as a directed acyclic graph (DAG) factored into local conditional distributions: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
      "correctAnswerEn": "A Bayesian Network represents the joint probability distribution of random variables as a directed acyclic graph (DAG) factored into local conditional distributions: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
      "correctAnswerAr": "تمثل شبكة بايز التوزيع الاحتمالي المشترك لمتغيرات عشوائية كمخطط موجه عديم الحلقات (DAG) مفككاً إلى توزيعات شرطية محلية: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
      "correctIndex": 0,
      "explanationEn": "Correct Theoretical Formulation: A Bayesian Network represents the joint probability distribution of random variables as a directed acyclic graph (DAG) factored into local conditional distributions: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تمثل شبكة بايز التوزيع الاحتمالي المشترك لمتغيرات عشوائية كمخطط موجه عديم الحلقات (DAG) مفككاً إلى توزيعات شرطية محلية: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Bayesian Networks, Directed Acyclic Graphs & D-Separation.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: A Bayesian Network represents the joint probability distribution of random variables as a directed acyclic graph (DAG) factored into local conditional distributions: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تمثل شبكة بايز التوزيع الاحتمالي المشترك لمتغيرات عشوائية كمخطط موجه عديم الحلقات (DAG) مفككاً إلى توزيعات شرطية محلية: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch1_easy_50",
      "titleEn": "[EASY] Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models - Review 50",
      "titleAr": "[مستوى أساسي] خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs) - سؤال 50",
      "questionEn": "[AI & Data Science Core Concept] Regarding Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models, which of the following statements is theoretically and mathematically sound? (Variant 50)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 50)",
      "optionsEn": [
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "Gaussian Mixture Models represent complex multimodal data distributions as a weighted sum of $K$ Gaussian components with prior mixture weights $\\pi_k$, mean vectors $\\mu_k$, and covariance matrices $\\Sigma_k$.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تمثل نماذج المزيج الغاوسي توزيعات البيانات المعقدة كمجموع مرجح لـ $K$ توزيعات غاوسية بأوزان خلط مسبقة $\\pi_k$ ومتجهات متوسطات $\\mu_k$ ومصفوفات تغاير $\\Sigma_k$.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "Gaussian Mixture Models represent complex multimodal data distributions as a weighted sum of $K$ Gaussian components with prior mixture weights $\\pi_k$, mean vectors $\\mu_k$, and covariance matrices $\\Sigma_k$.",
      "correctAnswerEn": "Gaussian Mixture Models represent complex multimodal data distributions as a weighted sum of $K$ Gaussian components with prior mixture weights $\\pi_k$, mean vectors $\\mu_k$, and covariance matrices $\\Sigma_k$.",
      "correctAnswerAr": "تمثل نماذج المزيج الغاوسي توزيعات البيانات المعقدة كمجموع مرجح لـ $K$ توزيعات غاوسية بأوزان خلط مسبقة $\\pi_k$ ومتجهات متوسطات $\\mu_k$ ومصفوفات تغاير $\\Sigma_k$.",
      "correctIndex": 1,
      "explanationEn": "Correct Theoretical Formulation: Gaussian Mixture Models represent complex multimodal data distributions as a weighted sum of $K$ Gaussian components with prior mixture weights $\\pi_k$, mean vectors $\\mu_k$, and covariance matrices $\\Sigma_k$.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تمثل نماذج المزيج الغاوسي توزيعات البيانات المعقدة كمجموع مرجح لـ $K$ توزيعات غاوسية بأوزان خلط مسبقة $\\pi_k$ ومتجهات متوسطات $\\mu_k$ ومصفوفات تغاير $\\Sigma_k$.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Gaussian Mixture Models represent complex multimodal data distributions as a weighted sum of $K$ Gaussian components with prior mixture weights $\\pi_k$, mean vectors $\\mu_k$, and covariance matrices $\\Sigma_k$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تمثل نماذج المزيج الغاوسي توزيعات البيانات المعقدة كمجموع مرجح لـ $K$ توزيعات غاوسية بأوزان خلط مسبقة $\\pi_k$ ومتجهات متوسطات $\\mu_k$ ومصفوفات تغاير $\\Sigma_k$.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch1_easy_51",
      "titleEn": "[EASY] Variational Inference & Evidence Lower Bound (ELBO) Derivation - Review 51",
      "titleAr": "[مستوى أساسي] الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO) - سؤال 51",
      "questionEn": "[AI & Data Science Core Concept] Regarding Variational Inference & Evidence Lower Bound (ELBO) Derivation, which of the following statements is theoretically and mathematically sound? (Variant 51)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 51)",
      "optionsEn": [
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "Variational Inference transforms intractable Bayesian posterior inference into an optimization problem by approximating the true posterior $p(z|x)$ with a tractable family $q_\\phi(z)$.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحول الاستدلال المتغير معضلة حساب التوزيع اللاحق المستعصي $p(z|x)$ إلى مسألة تحسين عبر تقريبه بعائلة توزيعات مطواعة $q_\\phi(z)$.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "Variational Inference transforms intractable Bayesian posterior inference into an optimization problem by approximating the true posterior $p(z|x)$ with a tractable family $q_\\phi(z)$.",
      "correctAnswerEn": "Variational Inference transforms intractable Bayesian posterior inference into an optimization problem by approximating the true posterior $p(z|x)$ with a tractable family $q_\\phi(z)$.",
      "correctAnswerAr": "يحول الاستدلال المتغير معضلة حساب التوزيع اللاحق المستعصي $p(z|x)$ إلى مسألة تحسين عبر تقريبه بعائلة توزيعات مطواعة $q_\\phi(z)$.",
      "correctIndex": 2,
      "explanationEn": "Correct Theoretical Formulation: Variational Inference transforms intractable Bayesian posterior inference into an optimization problem by approximating the true posterior $p(z|x)$ with a tractable family $q_\\phi(z)$.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يحول الاستدلال المتغير معضلة حساب التوزيع اللاحق المستعصي $p(z|x)$ إلى مسألة تحسين عبر تقريبه بعائلة توزيعات مطواعة $q_\\phi(z)$.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Variational Inference & Evidence Lower Bound (ELBO) Derivation.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Variational Inference transforms intractable Bayesian posterior inference into an optimization problem by approximating the true posterior $p(z|x)$ with a tractable family $q_\\phi(z)$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يحول الاستدلال المتغير معضلة حساب التوزيع اللاحق المستعصي $p(z|x)$ إلى مسألة تحسين عبر تقريبه بعائلة توزيعات مطواعة $q_\\phi(z)$.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch1_easy_52",
      "titleEn": "[EASY] Bayesian Networks, Directed Acyclic Graphs & D-Separation - Review 52",
      "titleAr": "[مستوى أساسي] شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation) - سؤال 52",
      "questionEn": "[AI & Data Science Core Concept] Regarding Bayesian Networks, Directed Acyclic Graphs & D-Separation, which of the following statements is theoretically and mathematically sound? (Variant 52)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 52)",
      "optionsEn": [
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "A Bayesian Network represents the joint probability distribution of random variables as a directed acyclic graph (DAG) factored into local conditional distributions: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$."
      ],
      "optionsAr": [
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "تمثل شبكة بايز التوزيع الاحتمالي المشترك لمتغيرات عشوائية كمخطط موجه عديم الحلقات (DAG) مفككاً إلى توزيعات شرطية محلية: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$."
      ],
      "correctAnswer": "A Bayesian Network represents the joint probability distribution of random variables as a directed acyclic graph (DAG) factored into local conditional distributions: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
      "correctAnswerEn": "A Bayesian Network represents the joint probability distribution of random variables as a directed acyclic graph (DAG) factored into local conditional distributions: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
      "correctAnswerAr": "تمثل شبكة بايز التوزيع الاحتمالي المشترك لمتغيرات عشوائية كمخطط موجه عديم الحلقات (DAG) مفككاً إلى توزيعات شرطية محلية: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
      "correctIndex": 3,
      "explanationEn": "Correct Theoretical Formulation: A Bayesian Network represents the joint probability distribution of random variables as a directed acyclic graph (DAG) factored into local conditional distributions: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تمثل شبكة بايز التوزيع الاحتمالي المشترك لمتغيرات عشوائية كمخطط موجه عديم الحلقات (DAG) مفككاً إلى توزيعات شرطية محلية: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Bayesian Networks, Directed Acyclic Graphs & D-Separation.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: A Bayesian Network represents the joint probability distribution of random variables as a directed acyclic graph (DAG) factored into local conditional distributions: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تمثل شبكة بايز التوزيع الاحتمالي المشترك لمتغيرات عشوائية كمخطط موجه عديم الحلقات (DAG) مفككاً إلى توزيعات شرطية محلية: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch1_easy_53",
      "titleEn": "[EASY] Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models - Review 53",
      "titleAr": "[مستوى أساسي] خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs) - سؤال 53",
      "questionEn": "[AI & Data Science Core Concept] Regarding Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models, which of the following statements is theoretically and mathematically sound? (Variant 53)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 53)",
      "optionsEn": [
        "Gaussian Mixture Models represent complex multimodal data distributions as a weighted sum of $K$ Gaussian components with prior mixture weights $\\pi_k$, mean vectors $\\mu_k$, and covariance matrices $\\Sigma_k$.",
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "تمثل نماذج المزيج الغاوسي توزيعات البيانات المعقدة كمجموع مرجح لـ $K$ توزيعات غاوسية بأوزان خلط مسبقة $\\pi_k$ ومتجهات متوسطات $\\mu_k$ ومصفوفات تغاير $\\Sigma_k$.",
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "Gaussian Mixture Models represent complex multimodal data distributions as a weighted sum of $K$ Gaussian components with prior mixture weights $\\pi_k$, mean vectors $\\mu_k$, and covariance matrices $\\Sigma_k$.",
      "correctAnswerEn": "Gaussian Mixture Models represent complex multimodal data distributions as a weighted sum of $K$ Gaussian components with prior mixture weights $\\pi_k$, mean vectors $\\mu_k$, and covariance matrices $\\Sigma_k$.",
      "correctAnswerAr": "تمثل نماذج المزيج الغاوسي توزيعات البيانات المعقدة كمجموع مرجح لـ $K$ توزيعات غاوسية بأوزان خلط مسبقة $\\pi_k$ ومتجهات متوسطات $\\mu_k$ ومصفوفات تغاير $\\Sigma_k$.",
      "correctIndex": 0,
      "explanationEn": "Correct Theoretical Formulation: Gaussian Mixture Models represent complex multimodal data distributions as a weighted sum of $K$ Gaussian components with prior mixture weights $\\pi_k$, mean vectors $\\mu_k$, and covariance matrices $\\Sigma_k$.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تمثل نماذج المزيج الغاوسي توزيعات البيانات المعقدة كمجموع مرجح لـ $K$ توزيعات غاوسية بأوزان خلط مسبقة $\\pi_k$ ومتجهات متوسطات $\\mu_k$ ومصفوفات تغاير $\\Sigma_k$.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Gaussian Mixture Models represent complex multimodal data distributions as a weighted sum of $K$ Gaussian components with prior mixture weights $\\pi_k$, mean vectors $\\mu_k$, and covariance matrices $\\Sigma_k$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تمثل نماذج المزيج الغاوسي توزيعات البيانات المعقدة كمجموع مرجح لـ $K$ توزيعات غاوسية بأوزان خلط مسبقة $\\pi_k$ ومتجهات متوسطات $\\mu_k$ ومصفوفات تغاير $\\Sigma_k$.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch1_easy_54",
      "titleEn": "[EASY] Variational Inference & Evidence Lower Bound (ELBO) Derivation - Review 54",
      "titleAr": "[مستوى أساسي] الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO) - سؤال 54",
      "questionEn": "[AI & Data Science Core Concept] Regarding Variational Inference & Evidence Lower Bound (ELBO) Derivation, which of the following statements is theoretically and mathematically sound? (Variant 54)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 54)",
      "optionsEn": [
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "Variational Inference transforms intractable Bayesian posterior inference into an optimization problem by approximating the true posterior $p(z|x)$ with a tractable family $q_\\phi(z)$.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "يحول الاستدلال المتغير معضلة حساب التوزيع اللاحق المستعصي $p(z|x)$ إلى مسألة تحسين عبر تقريبه بعائلة توزيعات مطواعة $q_\\phi(z)$.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "Variational Inference transforms intractable Bayesian posterior inference into an optimization problem by approximating the true posterior $p(z|x)$ with a tractable family $q_\\phi(z)$.",
      "correctAnswerEn": "Variational Inference transforms intractable Bayesian posterior inference into an optimization problem by approximating the true posterior $p(z|x)$ with a tractable family $q_\\phi(z)$.",
      "correctAnswerAr": "يحول الاستدلال المتغير معضلة حساب التوزيع اللاحق المستعصي $p(z|x)$ إلى مسألة تحسين عبر تقريبه بعائلة توزيعات مطواعة $q_\\phi(z)$.",
      "correctIndex": 1,
      "explanationEn": "Correct Theoretical Formulation: Variational Inference transforms intractable Bayesian posterior inference into an optimization problem by approximating the true posterior $p(z|x)$ with a tractable family $q_\\phi(z)$.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يحول الاستدلال المتغير معضلة حساب التوزيع اللاحق المستعصي $p(z|x)$ إلى مسألة تحسين عبر تقريبه بعائلة توزيعات مطواعة $q_\\phi(z)$.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Variational Inference & Evidence Lower Bound (ELBO) Derivation.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Variational Inference transforms intractable Bayesian posterior inference into an optimization problem by approximating the true posterior $p(z|x)$ with a tractable family $q_\\phi(z)$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يحول الاستدلال المتغير معضلة حساب التوزيع اللاحق المستعصي $p(z|x)$ إلى مسألة تحسين عبر تقريبه بعائلة توزيعات مطواعة $q_\\phi(z)$.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch1_easy_55",
      "titleEn": "[EASY] Bayesian Networks, Directed Acyclic Graphs & D-Separation - Review 55",
      "titleAr": "[مستوى أساسي] شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation) - سؤال 55",
      "questionEn": "[AI & Data Science Core Concept] Regarding Bayesian Networks, Directed Acyclic Graphs & D-Separation, which of the following statements is theoretically and mathematically sound? (Variant 55)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 55)",
      "optionsEn": [
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "A Bayesian Network represents the joint probability distribution of random variables as a directed acyclic graph (DAG) factored into local conditional distributions: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تمثل شبكة بايز التوزيع الاحتمالي المشترك لمتغيرات عشوائية كمخطط موجه عديم الحلقات (DAG) مفككاً إلى توزيعات شرطية محلية: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "A Bayesian Network represents the joint probability distribution of random variables as a directed acyclic graph (DAG) factored into local conditional distributions: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
      "correctAnswerEn": "A Bayesian Network represents the joint probability distribution of random variables as a directed acyclic graph (DAG) factored into local conditional distributions: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
      "correctAnswerAr": "تمثل شبكة بايز التوزيع الاحتمالي المشترك لمتغيرات عشوائية كمخطط موجه عديم الحلقات (DAG) مفككاً إلى توزيعات شرطية محلية: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
      "correctIndex": 2,
      "explanationEn": "Correct Theoretical Formulation: A Bayesian Network represents the joint probability distribution of random variables as a directed acyclic graph (DAG) factored into local conditional distributions: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تمثل شبكة بايز التوزيع الاحتمالي المشترك لمتغيرات عشوائية كمخطط موجه عديم الحلقات (DAG) مفككاً إلى توزيعات شرطية محلية: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Bayesian Networks, Directed Acyclic Graphs & D-Separation.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: A Bayesian Network represents the joint probability distribution of random variables as a directed acyclic graph (DAG) factored into local conditional distributions: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تمثل شبكة بايز التوزيع الاحتمالي المشترك لمتغيرات عشوائية كمخطط موجه عديم الحلقات (DAG) مفككاً إلى توزيعات شرطية محلية: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch1_easy_56",
      "titleEn": "[EASY] Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models - Review 56",
      "titleAr": "[مستوى أساسي] خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs) - سؤال 56",
      "questionEn": "[AI & Data Science Core Concept] Regarding Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models, which of the following statements is theoretically and mathematically sound? (Variant 56)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 56)",
      "optionsEn": [
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "Gaussian Mixture Models represent complex multimodal data distributions as a weighted sum of $K$ Gaussian components with prior mixture weights $\\pi_k$, mean vectors $\\mu_k$, and covariance matrices $\\Sigma_k$."
      ],
      "optionsAr": [
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تمثل نماذج المزيج الغاوسي توزيعات البيانات المعقدة كمجموع مرجح لـ $K$ توزيعات غاوسية بأوزان خلط مسبقة $\\pi_k$ ومتجهات متوسطات $\\mu_k$ ومصفوفات تغاير $\\Sigma_k$."
      ],
      "correctAnswer": "Gaussian Mixture Models represent complex multimodal data distributions as a weighted sum of $K$ Gaussian components with prior mixture weights $\\pi_k$, mean vectors $\\mu_k$, and covariance matrices $\\Sigma_k$.",
      "correctAnswerEn": "Gaussian Mixture Models represent complex multimodal data distributions as a weighted sum of $K$ Gaussian components with prior mixture weights $\\pi_k$, mean vectors $\\mu_k$, and covariance matrices $\\Sigma_k$.",
      "correctAnswerAr": "تمثل نماذج المزيج الغاوسي توزيعات البيانات المعقدة كمجموع مرجح لـ $K$ توزيعات غاوسية بأوزان خلط مسبقة $\\pi_k$ ومتجهات متوسطات $\\mu_k$ ومصفوفات تغاير $\\Sigma_k$.",
      "correctIndex": 3,
      "explanationEn": "Correct Theoretical Formulation: Gaussian Mixture Models represent complex multimodal data distributions as a weighted sum of $K$ Gaussian components with prior mixture weights $\\pi_k$, mean vectors $\\mu_k$, and covariance matrices $\\Sigma_k$.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تمثل نماذج المزيج الغاوسي توزيعات البيانات المعقدة كمجموع مرجح لـ $K$ توزيعات غاوسية بأوزان خلط مسبقة $\\pi_k$ ومتجهات متوسطات $\\mu_k$ ومصفوفات تغاير $\\Sigma_k$.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Gaussian Mixture Models represent complex multimodal data distributions as a weighted sum of $K$ Gaussian components with prior mixture weights $\\pi_k$, mean vectors $\\mu_k$, and covariance matrices $\\Sigma_k$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تمثل نماذج المزيج الغاوسي توزيعات البيانات المعقدة كمجموع مرجح لـ $K$ توزيعات غاوسية بأوزان خلط مسبقة $\\pi_k$ ومتجهات متوسطات $\\mu_k$ ومصفوفات تغاير $\\Sigma_k$.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch1_easy_57",
      "titleEn": "[EASY] Variational Inference & Evidence Lower Bound (ELBO) Derivation - Review 57",
      "titleAr": "[مستوى أساسي] الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO) - سؤال 57",
      "questionEn": "[AI & Data Science Core Concept] Regarding Variational Inference & Evidence Lower Bound (ELBO) Derivation, which of the following statements is theoretically and mathematically sound? (Variant 57)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 57)",
      "optionsEn": [
        "Variational Inference transforms intractable Bayesian posterior inference into an optimization problem by approximating the true posterior $p(z|x)$ with a tractable family $q_\\phi(z)$.",
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "يحول الاستدلال المتغير معضلة حساب التوزيع اللاحق المستعصي $p(z|x)$ إلى مسألة تحسين عبر تقريبه بعائلة توزيعات مطواعة $q_\\phi(z)$.",
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "Variational Inference transforms intractable Bayesian posterior inference into an optimization problem by approximating the true posterior $p(z|x)$ with a tractable family $q_\\phi(z)$.",
      "correctAnswerEn": "Variational Inference transforms intractable Bayesian posterior inference into an optimization problem by approximating the true posterior $p(z|x)$ with a tractable family $q_\\phi(z)$.",
      "correctAnswerAr": "يحول الاستدلال المتغير معضلة حساب التوزيع اللاحق المستعصي $p(z|x)$ إلى مسألة تحسين عبر تقريبه بعائلة توزيعات مطواعة $q_\\phi(z)$.",
      "correctIndex": 0,
      "explanationEn": "Correct Theoretical Formulation: Variational Inference transforms intractable Bayesian posterior inference into an optimization problem by approximating the true posterior $p(z|x)$ with a tractable family $q_\\phi(z)$.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: يحول الاستدلال المتغير معضلة حساب التوزيع اللاحق المستعصي $p(z|x)$ إلى مسألة تحسين عبر تقريبه بعائلة توزيعات مطواعة $q_\\phi(z)$.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Variational Inference & Evidence Lower Bound (ELBO) Derivation.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Variational Inference transforms intractable Bayesian posterior inference into an optimization problem by approximating the true posterior $p(z|x)$ with a tractable family $q_\\phi(z)$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: يحول الاستدلال المتغير معضلة حساب التوزيع اللاحق المستعصي $p(z|x)$ إلى مسألة تحسين عبر تقريبه بعائلة توزيعات مطواعة $q_\\phi(z)$.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch1_easy_58",
      "titleEn": "[EASY] Bayesian Networks, Directed Acyclic Graphs & D-Separation - Review 58",
      "titleAr": "[مستوى أساسي] شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation) - سؤال 58",
      "questionEn": "[AI & Data Science Core Concept] Regarding Bayesian Networks, Directed Acyclic Graphs & D-Separation, which of the following statements is theoretically and mathematically sound? (Variant 58)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 58)",
      "optionsEn": [
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "A Bayesian Network represents the joint probability distribution of random variables as a directed acyclic graph (DAG) factored into local conditional distributions: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تمثل شبكة بايز التوزيع الاحتمالي المشترك لمتغيرات عشوائية كمخطط موجه عديم الحلقات (DAG) مفككاً إلى توزيعات شرطية محلية: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "A Bayesian Network represents the joint probability distribution of random variables as a directed acyclic graph (DAG) factored into local conditional distributions: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
      "correctAnswerEn": "A Bayesian Network represents the joint probability distribution of random variables as a directed acyclic graph (DAG) factored into local conditional distributions: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
      "correctAnswerAr": "تمثل شبكة بايز التوزيع الاحتمالي المشترك لمتغيرات عشوائية كمخطط موجه عديم الحلقات (DAG) مفككاً إلى توزيعات شرطية محلية: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
      "correctIndex": 1,
      "explanationEn": "Correct Theoretical Formulation: A Bayesian Network represents the joint probability distribution of random variables as a directed acyclic graph (DAG) factored into local conditional distributions: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تمثل شبكة بايز التوزيع الاحتمالي المشترك لمتغيرات عشوائية كمخطط موجه عديم الحلقات (DAG) مفككاً إلى توزيعات شرطية محلية: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Bayesian Networks, Directed Acyclic Graphs & D-Separation.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: A Bayesian Network represents the joint probability distribution of random variables as a directed acyclic graph (DAG) factored into local conditional distributions: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تمثل شبكة بايز التوزيع الاحتمالي المشترك لمتغيرات عشوائية كمخطط موجه عديم الحلقات (DAG) مفككاً إلى توزيعات شرطية محلية: $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$.."
      ],
      "difficulty": "easy"
    }
  ],
  "medium": [
    {
      "id": "egbac_ai_data_science_ch1_med_1",
      "titleEn": "[MEDIUM] Bayesian Networks, Directed Acyclic Graphs & D-Separation - Analysis 1",
      "titleAr": "[مستوى متوسط] شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation) - تحليل 1",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Bayesian Networks, Directed Acyclic Graphs & D-Separation, what is the precise analytical formulation or operative rule? (Item 1)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 1)",
      "optionsEn": [
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves."
      ],
      "optionsAr": [
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يكون المتغيران $X$ و $Y$ مفصولين اتجاهياً (d-separated) بمجموعة المشاهدات $Z$ إذا أغلقت كل المسارات بينهما؛ وفي البنية التصادمية ($A \\to C \\leftarrow B$)، يكون $A$ و $B$ مستقلين مبدئياً لكنهما يصبحان مرتبطين شرطياً عند معرفة $C$.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية."
      ],
      "correctAnswer": "Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).",
      "correctAnswerEn": "Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).",
      "correctAnswerAr": "يكون المتغيران $X$ و $Y$ مفصولين اتجاهياً (d-separated) بمجموعة المشاهدات $Z$ إذا أغلقت كل المسارات بينهما؛ وفي البنية التصادمية ($A \\to C \\leftarrow B$)، يكون $A$ و $B$ مستقلين مبدئياً لكنهما يصبحان مرتبطين شرطياً عند معرفة $C$.",
      "correctIndex": 1,
      "explanationEn": "Analytical Derivation & Properties: Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يكون المتغيران $X$ و $Y$ مفصولين اتجاهياً (d-separated) بمجموعة المشاهدات $Z$ إذا أغلقت كل المسارات بينهما؛ وفي البنية التصادمية ($A \\to C \\leftarrow B$)، يكون $A$ و $B$ مستقلين مبدئياً لكنهما يصبحان مرتبطين شرطياً عند معرفة $C$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Bayesian Networks, Directed Acyclic Graphs & D-Separation.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يكون المتغيران $X$ و $Y$ مفصولين اتجاهياً (d-separated) بمجموعة المشاهدات $Z$ إذا أغلقت كل المسارات بينهما؛ وفي البنية التصادمية ($A \\to C \\leftarrow B$)، يكون $A$ و $B$ مستقلين مبدئياً لكنهما يصبحان مرتبطين شرطياً عند معرفة $C$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch1_med_2",
      "titleEn": "[MEDIUM] Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models - Analysis 2",
      "titleAr": "[مستوى متوسط] خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs) - تحليل 2",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models, what is the precise analytical formulation or operative rule? (Item 2)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 2)",
      "optionsEn": [
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتناوب خوارزمية EM بين خطوة التوقع E (حساب المسؤوليات اللاحقة $\\gamma_{ik}$) وخطوة التعظيم M (تحديث المعاملات $\\mu_k$ و $\\Sigma_k$ و $\\pi_k$ بالاعتماد على المسؤوليات المحسوبة).",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).",
      "correctAnswerEn": "The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).",
      "correctAnswerAr": "تتناوب خوارزمية EM بين خطوة التوقع E (حساب المسؤوليات اللاحقة $\\gamma_{ik}$) وخطوة التعظيم M (تحديث المعاملات $\\mu_k$ و $\\Sigma_k$ و $\\pi_k$ بالاعتماد على المسؤوليات المحسوبة).",
      "correctIndex": 2,
      "explanationEn": "Analytical Derivation & Properties: The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تتناوب خوارزمية EM بين خطوة التوقع E (حساب المسؤوليات اللاحقة $\\gamma_{ik}$) وخطوة التعظيم M (تحديث المعاملات $\\mu_k$ و $\\Sigma_k$ و $\\pi_k$ بالاعتماد على المسؤوليات المحسوبة).",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تتناوب خوارزمية EM بين خطوة التوقع E (حساب المسؤوليات اللاحقة $\\gamma_{ik}$) وخطوة التعظيم M (تحديث المعاملات $\\mu_k$ و $\\Sigma_k$ و $\\pi_k$ بالاعتماد على المسؤوليات المحسوبة).."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch1_med_3",
      "titleEn": "[MEDIUM] Variational Inference & Evidence Lower Bound (ELBO) Derivation - Analysis 3",
      "titleAr": "[مستوى متوسط] الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO) - تحليل 3",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Variational Inference & Evidence Lower Bound (ELBO) Derivation, what is the precise analytical formulation or operative rule? (Item 3)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 3)",
      "optionsEn": [
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$."
      ],
      "optionsAr": [
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "يُشتق الحد الأدنى لدليل البيانات (ELBO) من متباينة ينسن: $\\ln p(x) \\ge \\mathbb{E}[\\ln p(x,z)] - \\mathbb{E}[\\ln q(z)] = \\text{ELBO}$، ويحقق المعادلة $\\ln p(x) = \\text{ELBO} + D_{KL}(q \\parallel p)$."
      ],
      "correctAnswer": "The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.",
      "correctAnswerEn": "The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.",
      "correctAnswerAr": "يُشتق الحد الأدنى لدليل البيانات (ELBO) من متباينة ينسن: $\\ln p(x) \\ge \\mathbb{E}[\\ln p(x,z)] - \\mathbb{E}[\\ln q(z)] = \\text{ELBO}$، ويحقق المعادلة $\\ln p(x) = \\text{ELBO} + D_{KL}(q \\parallel p)$.",
      "correctIndex": 3,
      "explanationEn": "Analytical Derivation & Properties: The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يُشتق الحد الأدنى لدليل البيانات (ELBO) من متباينة ينسن: $\\ln p(x) \\ge \\mathbb{E}[\\ln p(x,z)] - \\mathbb{E}[\\ln q(z)] = \\text{ELBO}$، ويحقق المعادلة $\\ln p(x) = \\text{ELBO} + D_{KL}(q \\parallel p)$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Variational Inference & Evidence Lower Bound (ELBO) Derivation.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يُشتق الحد الأدنى لدليل البيانات (ELBO) من متباينة ينسن: $\\ln p(x) \\ge \\mathbb{E}[\\ln p(x,z)] - \\mathbb{E}[\\ln q(z)] = \\text{ELBO}$، ويحقق المعادلة $\\ln p(x) = \\text{ELBO} + D_{KL}(q \\parallel p)$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch1_med_4",
      "titleEn": "[MEDIUM] Bayesian Networks, Directed Acyclic Graphs & D-Separation - Analysis 4",
      "titleAr": "[مستوى متوسط] شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation) - تحليل 4",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Bayesian Networks, Directed Acyclic Graphs & D-Separation, what is the precise analytical formulation or operative rule? (Item 4)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 4)",
      "optionsEn": [
        "Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent."
      ],
      "optionsAr": [
        "يكون المتغيران $X$ و $Y$ مفصولين اتجاهياً (d-separated) بمجموعة المشاهدات $Z$ إذا أغلقت كل المسارات بينهما؛ وفي البنية التصادمية ($A \\to C \\leftarrow B$)، يكون $A$ و $B$ مستقلين مبدئياً لكنهما يصبحان مرتبطين شرطياً عند معرفة $C$.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة."
      ],
      "correctAnswer": "Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).",
      "correctAnswerEn": "Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).",
      "correctAnswerAr": "يكون المتغيران $X$ و $Y$ مفصولين اتجاهياً (d-separated) بمجموعة المشاهدات $Z$ إذا أغلقت كل المسارات بينهما؛ وفي البنية التصادمية ($A \\to C \\leftarrow B$)، يكون $A$ و $B$ مستقلين مبدئياً لكنهما يصبحان مرتبطين شرطياً عند معرفة $C$.",
      "correctIndex": 0,
      "explanationEn": "Analytical Derivation & Properties: Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يكون المتغيران $X$ و $Y$ مفصولين اتجاهياً (d-separated) بمجموعة المشاهدات $Z$ إذا أغلقت كل المسارات بينهما؛ وفي البنية التصادمية ($A \\to C \\leftarrow B$)، يكون $A$ و $B$ مستقلين مبدئياً لكنهما يصبحان مرتبطين شرطياً عند معرفة $C$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Bayesian Networks, Directed Acyclic Graphs & D-Separation.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يكون المتغيران $X$ و $Y$ مفصولين اتجاهياً (d-separated) بمجموعة المشاهدات $Z$ إذا أغلقت كل المسارات بينهما؛ وفي البنية التصادمية ($A \\to C \\leftarrow B$)، يكون $A$ و $B$ مستقلين مبدئياً لكنهما يصبحان مرتبطين شرطياً عند معرفة $C$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch1_med_5",
      "titleEn": "[MEDIUM] Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models - Analysis 5",
      "titleAr": "[مستوى متوسط] خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs) - تحليل 5",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models, what is the precise analytical formulation or operative rule? (Item 5)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 5)",
      "optionsEn": [
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "تتناوب خوارزمية EM بين خطوة التوقع E (حساب المسؤوليات اللاحقة $\\gamma_{ik}$) وخطوة التعظيم M (تحديث المعاملات $\\mu_k$ و $\\Sigma_k$ و $\\pi_k$ بالاعتماد على المسؤوليات المحسوبة).",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).",
      "correctAnswerEn": "The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).",
      "correctAnswerAr": "تتناوب خوارزمية EM بين خطوة التوقع E (حساب المسؤوليات اللاحقة $\\gamma_{ik}$) وخطوة التعظيم M (تحديث المعاملات $\\mu_k$ و $\\Sigma_k$ و $\\pi_k$ بالاعتماد على المسؤوليات المحسوبة).",
      "correctIndex": 1,
      "explanationEn": "Analytical Derivation & Properties: The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تتناوب خوارزمية EM بين خطوة التوقع E (حساب المسؤوليات اللاحقة $\\gamma_{ik}$) وخطوة التعظيم M (تحديث المعاملات $\\mu_k$ و $\\Sigma_k$ و $\\pi_k$ بالاعتماد على المسؤوليات المحسوبة).",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تتناوب خوارزمية EM بين خطوة التوقع E (حساب المسؤوليات اللاحقة $\\gamma_{ik}$) وخطوة التعظيم M (تحديث المعاملات $\\mu_k$ و $\\Sigma_k$ و $\\pi_k$ بالاعتماد على المسؤوليات المحسوبة).."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch1_med_6",
      "titleEn": "[MEDIUM] Variational Inference & Evidence Lower Bound (ELBO) Derivation - Analysis 6",
      "titleAr": "[مستوى متوسط] الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO) - تحليل 6",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Variational Inference & Evidence Lower Bound (ELBO) Derivation, what is the precise analytical formulation or operative rule? (Item 6)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 6)",
      "optionsEn": [
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step."
      ],
      "optionsAr": [
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "يُشتق الحد الأدنى لدليل البيانات (ELBO) من متباينة ينسن: $\\ln p(x) \\ge \\mathbb{E}[\\ln p(x,z)] - \\mathbb{E}[\\ln q(z)] = \\text{ELBO}$، ويحقق المعادلة $\\ln p(x) = \\text{ELBO} + D_{KL}(q \\parallel p)$.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين."
      ],
      "correctAnswer": "The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.",
      "correctAnswerEn": "The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.",
      "correctAnswerAr": "يُشتق الحد الأدنى لدليل البيانات (ELBO) من متباينة ينسن: $\\ln p(x) \\ge \\mathbb{E}[\\ln p(x,z)] - \\mathbb{E}[\\ln q(z)] = \\text{ELBO}$، ويحقق المعادلة $\\ln p(x) = \\text{ELBO} + D_{KL}(q \\parallel p)$.",
      "correctIndex": 2,
      "explanationEn": "Analytical Derivation & Properties: The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يُشتق الحد الأدنى لدليل البيانات (ELBO) من متباينة ينسن: $\\ln p(x) \\ge \\mathbb{E}[\\ln p(x,z)] - \\mathbb{E}[\\ln q(z)] = \\text{ELBO}$، ويحقق المعادلة $\\ln p(x) = \\text{ELBO} + D_{KL}(q \\parallel p)$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Variational Inference & Evidence Lower Bound (ELBO) Derivation.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يُشتق الحد الأدنى لدليل البيانات (ELBO) من متباينة ينسن: $\\ln p(x) \\ge \\mathbb{E}[\\ln p(x,z)] - \\mathbb{E}[\\ln q(z)] = \\text{ELBO}$، ويحقق المعادلة $\\ln p(x) = \\text{ELBO} + D_{KL}(q \\parallel p)$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch1_med_7",
      "titleEn": "[MEDIUM] Bayesian Networks, Directed Acyclic Graphs & D-Separation - Analysis 7",
      "titleAr": "[مستوى متوسط] شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation) - تحليل 7",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Bayesian Networks, Directed Acyclic Graphs & D-Separation, what is the precise analytical formulation or operative rule? (Item 7)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 7)",
      "optionsEn": [
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away)."
      ],
      "optionsAr": [
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يكون المتغيران $X$ و $Y$ مفصولين اتجاهياً (d-separated) بمجموعة المشاهدات $Z$ إذا أغلقت كل المسارات بينهما؛ وفي البنية التصادمية ($A \\to C \\leftarrow B$)، يكون $A$ و $B$ مستقلين مبدئياً لكنهما يصبحان مرتبطين شرطياً عند معرفة $C$."
      ],
      "correctAnswer": "Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).",
      "correctAnswerEn": "Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).",
      "correctAnswerAr": "يكون المتغيران $X$ و $Y$ مفصولين اتجاهياً (d-separated) بمجموعة المشاهدات $Z$ إذا أغلقت كل المسارات بينهما؛ وفي البنية التصادمية ($A \\to C \\leftarrow B$)، يكون $A$ و $B$ مستقلين مبدئياً لكنهما يصبحان مرتبطين شرطياً عند معرفة $C$.",
      "correctIndex": 3,
      "explanationEn": "Analytical Derivation & Properties: Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يكون المتغيران $X$ و $Y$ مفصولين اتجاهياً (d-separated) بمجموعة المشاهدات $Z$ إذا أغلقت كل المسارات بينهما؛ وفي البنية التصادمية ($A \\to C \\leftarrow B$)، يكون $A$ و $B$ مستقلين مبدئياً لكنهما يصبحان مرتبطين شرطياً عند معرفة $C$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Bayesian Networks, Directed Acyclic Graphs & D-Separation.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يكون المتغيران $X$ و $Y$ مفصولين اتجاهياً (d-separated) بمجموعة المشاهدات $Z$ إذا أغلقت كل المسارات بينهما؛ وفي البنية التصادمية ($A \\to C \\leftarrow B$)، يكون $A$ و $B$ مستقلين مبدئياً لكنهما يصبحان مرتبطين شرطياً عند معرفة $C$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch1_med_8",
      "titleEn": "[MEDIUM] Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models - Analysis 8",
      "titleAr": "[مستوى متوسط] خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs) - تحليل 8",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models, what is the precise analytical formulation or operative rule? (Item 8)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 8)",
      "optionsEn": [
        "The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).",
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "تتناوب خوارزمية EM بين خطوة التوقع E (حساب المسؤوليات اللاحقة $\\gamma_{ik}$) وخطوة التعظيم M (تحديث المعاملات $\\mu_k$ و $\\Sigma_k$ و $\\pi_k$ بالاعتماد على المسؤوليات المحسوبة).",
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).",
      "correctAnswerEn": "The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).",
      "correctAnswerAr": "تتناوب خوارزمية EM بين خطوة التوقع E (حساب المسؤوليات اللاحقة $\\gamma_{ik}$) وخطوة التعظيم M (تحديث المعاملات $\\mu_k$ و $\\Sigma_k$ و $\\pi_k$ بالاعتماد على المسؤوليات المحسوبة).",
      "correctIndex": 0,
      "explanationEn": "Analytical Derivation & Properties: The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تتناوب خوارزمية EM بين خطوة التوقع E (حساب المسؤوليات اللاحقة $\\gamma_{ik}$) وخطوة التعظيم M (تحديث المعاملات $\\mu_k$ و $\\Sigma_k$ و $\\pi_k$ بالاعتماد على المسؤوليات المحسوبة).",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تتناوب خوارزمية EM بين خطوة التوقع E (حساب المسؤوليات اللاحقة $\\gamma_{ik}$) وخطوة التعظيم M (تحديث المعاملات $\\mu_k$ و $\\Sigma_k$ و $\\pi_k$ بالاعتماد على المسؤوليات المحسوبة).."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch1_med_9",
      "titleEn": "[MEDIUM] Variational Inference & Evidence Lower Bound (ELBO) Derivation - Analysis 9",
      "titleAr": "[مستوى متوسط] الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO) - تحليل 9",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Variational Inference & Evidence Lower Bound (ELBO) Derivation, what is the precise analytical formulation or operative rule? (Item 9)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 9)",
      "optionsEn": [
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.",
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs."
      ],
      "optionsAr": [
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "يُشتق الحد الأدنى لدليل البيانات (ELBO) من متباينة ينسن: $\\ln p(x) \\ge \\mathbb{E}[\\ln p(x,z)] - \\mathbb{E}[\\ln q(z)] = \\text{ELBO}$، ويحقق المعادلة $\\ln p(x) = \\text{ELBO} + D_{KL}(q \\parallel p)$.",
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة."
      ],
      "correctAnswer": "The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.",
      "correctAnswerEn": "The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.",
      "correctAnswerAr": "يُشتق الحد الأدنى لدليل البيانات (ELBO) من متباينة ينسن: $\\ln p(x) \\ge \\mathbb{E}[\\ln p(x,z)] - \\mathbb{E}[\\ln q(z)] = \\text{ELBO}$، ويحقق المعادلة $\\ln p(x) = \\text{ELBO} + D_{KL}(q \\parallel p)$.",
      "correctIndex": 1,
      "explanationEn": "Analytical Derivation & Properties: The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يُشتق الحد الأدنى لدليل البيانات (ELBO) من متباينة ينسن: $\\ln p(x) \\ge \\mathbb{E}[\\ln p(x,z)] - \\mathbb{E}[\\ln q(z)] = \\text{ELBO}$، ويحقق المعادلة $\\ln p(x) = \\text{ELBO} + D_{KL}(q \\parallel p)$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Variational Inference & Evidence Lower Bound (ELBO) Derivation.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يُشتق الحد الأدنى لدليل البيانات (ELBO) من متباينة ينسن: $\\ln p(x) \\ge \\mathbb{E}[\\ln p(x,z)] - \\mathbb{E}[\\ln q(z)] = \\text{ELBO}$، ويحقق المعادلة $\\ln p(x) = \\text{ELBO} + D_{KL}(q \\parallel p)$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch1_med_10",
      "titleEn": "[MEDIUM] Bayesian Networks, Directed Acyclic Graphs & D-Separation - Analysis 10",
      "titleAr": "[مستوى متوسط] شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation) - تحليل 10",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Bayesian Networks, Directed Acyclic Graphs & D-Separation, what is the precise analytical formulation or operative rule? (Item 10)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 10)",
      "optionsEn": [
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).",
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence."
      ],
      "optionsAr": [
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "يكون المتغيران $X$ و $Y$ مفصولين اتجاهياً (d-separated) بمجموعة المشاهدات $Z$ إذا أغلقت كل المسارات بينهما؛ وفي البنية التصادمية ($A \\to C \\leftarrow B$)، يكون $A$ و $B$ مستقلين مبدئياً لكنهما يصبحان مرتبطين شرطياً عند معرفة $C$.",
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية."
      ],
      "correctAnswer": "Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).",
      "correctAnswerEn": "Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).",
      "correctAnswerAr": "يكون المتغيران $X$ و $Y$ مفصولين اتجاهياً (d-separated) بمجموعة المشاهدات $Z$ إذا أغلقت كل المسارات بينهما؛ وفي البنية التصادمية ($A \\to C \\leftarrow B$)، يكون $A$ و $B$ مستقلين مبدئياً لكنهما يصبحان مرتبطين شرطياً عند معرفة $C$.",
      "correctIndex": 2,
      "explanationEn": "Analytical Derivation & Properties: Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يكون المتغيران $X$ و $Y$ مفصولين اتجاهياً (d-separated) بمجموعة المشاهدات $Z$ إذا أغلقت كل المسارات بينهما؛ وفي البنية التصادمية ($A \\to C \\leftarrow B$)، يكون $A$ و $B$ مستقلين مبدئياً لكنهما يصبحان مرتبطين شرطياً عند معرفة $C$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Bayesian Networks, Directed Acyclic Graphs & D-Separation.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يكون المتغيران $X$ و $Y$ مفصولين اتجاهياً (d-separated) بمجموعة المشاهدات $Z$ إذا أغلقت كل المسارات بينهما؛ وفي البنية التصادمية ($A \\to C \\leftarrow B$)، يكون $A$ و $B$ مستقلين مبدئياً لكنهما يصبحان مرتبطين شرطياً عند معرفة $C$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch1_med_11",
      "titleEn": "[MEDIUM] Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models - Analysis 11",
      "titleAr": "[مستوى متوسط] خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs) - تحليل 11",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models, what is the precise analytical formulation or operative rule? (Item 11)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 11)",
      "optionsEn": [
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities)."
      ],
      "optionsAr": [
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "تتناوب خوارزمية EM بين خطوة التوقع E (حساب المسؤوليات اللاحقة $\\gamma_{ik}$) وخطوة التعظيم M (تحديث المعاملات $\\mu_k$ و $\\Sigma_k$ و $\\pi_k$ بالاعتماد على المسؤوليات المحسوبة)."
      ],
      "correctAnswer": "The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).",
      "correctAnswerEn": "The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).",
      "correctAnswerAr": "تتناوب خوارزمية EM بين خطوة التوقع E (حساب المسؤوليات اللاحقة $\\gamma_{ik}$) وخطوة التعظيم M (تحديث المعاملات $\\mu_k$ و $\\Sigma_k$ و $\\pi_k$ بالاعتماد على المسؤوليات المحسوبة).",
      "correctIndex": 3,
      "explanationEn": "Analytical Derivation & Properties: The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تتناوب خوارزمية EM بين خطوة التوقع E (حساب المسؤوليات اللاحقة $\\gamma_{ik}$) وخطوة التعظيم M (تحديث المعاملات $\\mu_k$ و $\\Sigma_k$ و $\\pi_k$ بالاعتماد على المسؤوليات المحسوبة).",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تتناوب خوارزمية EM بين خطوة التوقع E (حساب المسؤوليات اللاحقة $\\gamma_{ik}$) وخطوة التعظيم M (تحديث المعاملات $\\mu_k$ و $\\Sigma_k$ و $\\pi_k$ بالاعتماد على المسؤوليات المحسوبة).."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch1_med_12",
      "titleEn": "[MEDIUM] Variational Inference & Evidence Lower Bound (ELBO) Derivation - Analysis 12",
      "titleAr": "[مستوى متوسط] الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO) - تحليل 12",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Variational Inference & Evidence Lower Bound (ELBO) Derivation, what is the precise analytical formulation or operative rule? (Item 12)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 12)",
      "optionsEn": [
        "The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data."
      ],
      "optionsAr": [
        "يُشتق الحد الأدنى لدليل البيانات (ELBO) من متباينة ينسن: $\\ln p(x) \\ge \\mathbb{E}[\\ln p(x,z)] - \\mathbb{E}[\\ln q(z)] = \\text{ELBO}$، ويحقق المعادلة $\\ln p(x) = \\text{ELBO} + D_{KL}(q \\parallel p)$.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش."
      ],
      "correctAnswer": "The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.",
      "correctAnswerEn": "The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.",
      "correctAnswerAr": "يُشتق الحد الأدنى لدليل البيانات (ELBO) من متباينة ينسن: $\\ln p(x) \\ge \\mathbb{E}[\\ln p(x,z)] - \\mathbb{E}[\\ln q(z)] = \\text{ELBO}$، ويحقق المعادلة $\\ln p(x) = \\text{ELBO} + D_{KL}(q \\parallel p)$.",
      "correctIndex": 0,
      "explanationEn": "Analytical Derivation & Properties: The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يُشتق الحد الأدنى لدليل البيانات (ELBO) من متباينة ينسن: $\\ln p(x) \\ge \\mathbb{E}[\\ln p(x,z)] - \\mathbb{E}[\\ln q(z)] = \\text{ELBO}$، ويحقق المعادلة $\\ln p(x) = \\text{ELBO} + D_{KL}(q \\parallel p)$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Variational Inference & Evidence Lower Bound (ELBO) Derivation.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يُشتق الحد الأدنى لدليل البيانات (ELBO) من متباينة ينسن: $\\ln p(x) \\ge \\mathbb{E}[\\ln p(x,z)] - \\mathbb{E}[\\ln q(z)] = \\text{ELBO}$، ويحقق المعادلة $\\ln p(x) = \\text{ELBO} + D_{KL}(q \\parallel p)$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch1_med_13",
      "titleEn": "[MEDIUM] Bayesian Networks, Directed Acyclic Graphs & D-Separation - Analysis 13",
      "titleAr": "[مستوى متوسط] شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation) - تحليل 13",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Bayesian Networks, Directed Acyclic Graphs & D-Separation, what is the precise analytical formulation or operative rule? (Item 13)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 13)",
      "optionsEn": [
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan."
      ],
      "optionsAr": [
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "يكون المتغيران $X$ و $Y$ مفصولين اتجاهياً (d-separated) بمجموعة المشاهدات $Z$ إذا أغلقت كل المسارات بينهما؛ وفي البنية التصادمية ($A \\to C \\leftarrow B$)، يكون $A$ و $B$ مستقلين مبدئياً لكنهما يصبحان مرتبطين شرطياً عند معرفة $C$.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG)."
      ],
      "correctAnswer": "Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).",
      "correctAnswerEn": "Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).",
      "correctAnswerAr": "يكون المتغيران $X$ و $Y$ مفصولين اتجاهياً (d-separated) بمجموعة المشاهدات $Z$ إذا أغلقت كل المسارات بينهما؛ وفي البنية التصادمية ($A \\to C \\leftarrow B$)، يكون $A$ و $B$ مستقلين مبدئياً لكنهما يصبحان مرتبطين شرطياً عند معرفة $C$.",
      "correctIndex": 1,
      "explanationEn": "Analytical Derivation & Properties: Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يكون المتغيران $X$ و $Y$ مفصولين اتجاهياً (d-separated) بمجموعة المشاهدات $Z$ إذا أغلقت كل المسارات بينهما؛ وفي البنية التصادمية ($A \\to C \\leftarrow B$)، يكون $A$ و $B$ مستقلين مبدئياً لكنهما يصبحان مرتبطين شرطياً عند معرفة $C$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Bayesian Networks, Directed Acyclic Graphs & D-Separation.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يكون المتغيران $X$ و $Y$ مفصولين اتجاهياً (d-separated) بمجموعة المشاهدات $Z$ إذا أغلقت كل المسارات بينهما؛ وفي البنية التصادمية ($A \\to C \\leftarrow B$)، يكون $A$ و $B$ مستقلين مبدئياً لكنهما يصبحان مرتبطين شرطياً عند معرفة $C$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch1_med_14",
      "titleEn": "[MEDIUM] Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models - Analysis 14",
      "titleAr": "[مستوى متوسط] خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs) - تحليل 14",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models, what is the precise analytical formulation or operative rule? (Item 14)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 14)",
      "optionsEn": [
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تتناوب خوارزمية EM بين خطوة التوقع E (حساب المسؤوليات اللاحقة $\\gamma_{ik}$) وخطوة التعظيم M (تحديث المعاملات $\\mu_k$ و $\\Sigma_k$ و $\\pi_k$ بالاعتماد على المسؤوليات المحسوبة).",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).",
      "correctAnswerEn": "The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).",
      "correctAnswerAr": "تتناوب خوارزمية EM بين خطوة التوقع E (حساب المسؤوليات اللاحقة $\\gamma_{ik}$) وخطوة التعظيم M (تحديث المعاملات $\\mu_k$ و $\\Sigma_k$ و $\\pi_k$ بالاعتماد على المسؤوليات المحسوبة).",
      "correctIndex": 2,
      "explanationEn": "Analytical Derivation & Properties: The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تتناوب خوارزمية EM بين خطوة التوقع E (حساب المسؤوليات اللاحقة $\\gamma_{ik}$) وخطوة التعظيم M (تحديث المعاملات $\\mu_k$ و $\\Sigma_k$ و $\\pi_k$ بالاعتماد على المسؤوليات المحسوبة).",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تتناوب خوارزمية EM بين خطوة التوقع E (حساب المسؤوليات اللاحقة $\\gamma_{ik}$) وخطوة التعظيم M (تحديث المعاملات $\\mu_k$ و $\\Sigma_k$ و $\\pi_k$ بالاعتماد على المسؤوليات المحسوبة).."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch1_med_15",
      "titleEn": "[MEDIUM] Variational Inference & Evidence Lower Bound (ELBO) Derivation - Analysis 15",
      "titleAr": "[مستوى متوسط] الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO) - تحليل 15",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Variational Inference & Evidence Lower Bound (ELBO) Derivation, what is the precise analytical formulation or operative rule? (Item 15)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 15)",
      "optionsEn": [
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$."
      ],
      "optionsAr": [
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يُشتق الحد الأدنى لدليل البيانات (ELBO) من متباينة ينسن: $\\ln p(x) \\ge \\mathbb{E}[\\ln p(x,z)] - \\mathbb{E}[\\ln q(z)] = \\text{ELBO}$، ويحقق المعادلة $\\ln p(x) = \\text{ELBO} + D_{KL}(q \\parallel p)$."
      ],
      "correctAnswer": "The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.",
      "correctAnswerEn": "The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.",
      "correctAnswerAr": "يُشتق الحد الأدنى لدليل البيانات (ELBO) من متباينة ينسن: $\\ln p(x) \\ge \\mathbb{E}[\\ln p(x,z)] - \\mathbb{E}[\\ln q(z)] = \\text{ELBO}$، ويحقق المعادلة $\\ln p(x) = \\text{ELBO} + D_{KL}(q \\parallel p)$.",
      "correctIndex": 3,
      "explanationEn": "Analytical Derivation & Properties: The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يُشتق الحد الأدنى لدليل البيانات (ELBO) من متباينة ينسن: $\\ln p(x) \\ge \\mathbb{E}[\\ln p(x,z)] - \\mathbb{E}[\\ln q(z)] = \\text{ELBO}$، ويحقق المعادلة $\\ln p(x) = \\text{ELBO} + D_{KL}(q \\parallel p)$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Variational Inference & Evidence Lower Bound (ELBO) Derivation.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يُشتق الحد الأدنى لدليل البيانات (ELBO) من متباينة ينسن: $\\ln p(x) \\ge \\mathbb{E}[\\ln p(x,z)] - \\mathbb{E}[\\ln q(z)] = \\text{ELBO}$، ويحقق المعادلة $\\ln p(x) = \\text{ELBO} + D_{KL}(q \\parallel p)$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch1_med_16",
      "titleEn": "[MEDIUM] Bayesian Networks, Directed Acyclic Graphs & D-Separation - Analysis 16",
      "titleAr": "[مستوى متوسط] شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation) - تحليل 16",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Bayesian Networks, Directed Acyclic Graphs & D-Separation, what is the precise analytical formulation or operative rule? (Item 16)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 16)",
      "optionsEn": [
        "Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves."
      ],
      "optionsAr": [
        "يكون المتغيران $X$ و $Y$ مفصولين اتجاهياً (d-separated) بمجموعة المشاهدات $Z$ إذا أغلقت كل المسارات بينهما؛ وفي البنية التصادمية ($A \\to C \\leftarrow B$)، يكون $A$ و $B$ مستقلين مبدئياً لكنهما يصبحان مرتبطين شرطياً عند معرفة $C$.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية."
      ],
      "correctAnswer": "Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).",
      "correctAnswerEn": "Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).",
      "correctAnswerAr": "يكون المتغيران $X$ و $Y$ مفصولين اتجاهياً (d-separated) بمجموعة المشاهدات $Z$ إذا أغلقت كل المسارات بينهما؛ وفي البنية التصادمية ($A \\to C \\leftarrow B$)، يكون $A$ و $B$ مستقلين مبدئياً لكنهما يصبحان مرتبطين شرطياً عند معرفة $C$.",
      "correctIndex": 0,
      "explanationEn": "Analytical Derivation & Properties: Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يكون المتغيران $X$ و $Y$ مفصولين اتجاهياً (d-separated) بمجموعة المشاهدات $Z$ إذا أغلقت كل المسارات بينهما؛ وفي البنية التصادمية ($A \\to C \\leftarrow B$)، يكون $A$ و $B$ مستقلين مبدئياً لكنهما يصبحان مرتبطين شرطياً عند معرفة $C$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Bayesian Networks, Directed Acyclic Graphs & D-Separation.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يكون المتغيران $X$ و $Y$ مفصولين اتجاهياً (d-separated) بمجموعة المشاهدات $Z$ إذا أغلقت كل المسارات بينهما؛ وفي البنية التصادمية ($A \\to C \\leftarrow B$)، يكون $A$ و $B$ مستقلين مبدئياً لكنهما يصبحان مرتبطين شرطياً عند معرفة $C$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch1_med_17",
      "titleEn": "[MEDIUM] Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models - Analysis 17",
      "titleAr": "[مستوى متوسط] خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs) - تحليل 17",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models, what is the precise analytical formulation or operative rule? (Item 17)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 17)",
      "optionsEn": [
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تتناوب خوارزمية EM بين خطوة التوقع E (حساب المسؤوليات اللاحقة $\\gamma_{ik}$) وخطوة التعظيم M (تحديث المعاملات $\\mu_k$ و $\\Sigma_k$ و $\\pi_k$ بالاعتماد على المسؤوليات المحسوبة).",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).",
      "correctAnswerEn": "The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).",
      "correctAnswerAr": "تتناوب خوارزمية EM بين خطوة التوقع E (حساب المسؤوليات اللاحقة $\\gamma_{ik}$) وخطوة التعظيم M (تحديث المعاملات $\\mu_k$ و $\\Sigma_k$ و $\\pi_k$ بالاعتماد على المسؤوليات المحسوبة).",
      "correctIndex": 1,
      "explanationEn": "Analytical Derivation & Properties: The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تتناوب خوارزمية EM بين خطوة التوقع E (حساب المسؤوليات اللاحقة $\\gamma_{ik}$) وخطوة التعظيم M (تحديث المعاملات $\\mu_k$ و $\\Sigma_k$ و $\\pi_k$ بالاعتماد على المسؤوليات المحسوبة).",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تتناوب خوارزمية EM بين خطوة التوقع E (حساب المسؤوليات اللاحقة $\\gamma_{ik}$) وخطوة التعظيم M (تحديث المعاملات $\\mu_k$ و $\\Sigma_k$ و $\\pi_k$ بالاعتماد على المسؤوليات المحسوبة).."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch1_med_18",
      "titleEn": "[MEDIUM] Variational Inference & Evidence Lower Bound (ELBO) Derivation - Analysis 18",
      "titleAr": "[مستوى متوسط] الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO) - تحليل 18",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Variational Inference & Evidence Lower Bound (ELBO) Derivation, what is the precise analytical formulation or operative rule? (Item 18)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 18)",
      "optionsEn": [
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation."
      ],
      "optionsAr": [
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "يُشتق الحد الأدنى لدليل البيانات (ELBO) من متباينة ينسن: $\\ln p(x) \\ge \\mathbb{E}[\\ln p(x,z)] - \\mathbb{E}[\\ln q(z)] = \\text{ELBO}$، ويحقق المعادلة $\\ln p(x) = \\text{ELBO} + D_{KL}(q \\parallel p)$.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي."
      ],
      "correctAnswer": "The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.",
      "correctAnswerEn": "The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.",
      "correctAnswerAr": "يُشتق الحد الأدنى لدليل البيانات (ELBO) من متباينة ينسن: $\\ln p(x) \\ge \\mathbb{E}[\\ln p(x,z)] - \\mathbb{E}[\\ln q(z)] = \\text{ELBO}$، ويحقق المعادلة $\\ln p(x) = \\text{ELBO} + D_{KL}(q \\parallel p)$.",
      "correctIndex": 2,
      "explanationEn": "Analytical Derivation & Properties: The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يُشتق الحد الأدنى لدليل البيانات (ELBO) من متباينة ينسن: $\\ln p(x) \\ge \\mathbb{E}[\\ln p(x,z)] - \\mathbb{E}[\\ln q(z)] = \\text{ELBO}$، ويحقق المعادلة $\\ln p(x) = \\text{ELBO} + D_{KL}(q \\parallel p)$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Variational Inference & Evidence Lower Bound (ELBO) Derivation.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يُشتق الحد الأدنى لدليل البيانات (ELBO) من متباينة ينسن: $\\ln p(x) \\ge \\mathbb{E}[\\ln p(x,z)] - \\mathbb{E}[\\ln q(z)] = \\text{ELBO}$، ويحقق المعادلة $\\ln p(x) = \\text{ELBO} + D_{KL}(q \\parallel p)$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch1_med_19",
      "titleEn": "[MEDIUM] Bayesian Networks, Directed Acyclic Graphs & D-Separation - Analysis 19",
      "titleAr": "[مستوى متوسط] شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation) - تحليل 19",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Bayesian Networks, Directed Acyclic Graphs & D-Separation, what is the precise analytical formulation or operative rule? (Item 19)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 19)",
      "optionsEn": [
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away)."
      ],
      "optionsAr": [
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "يكون المتغيران $X$ و $Y$ مفصولين اتجاهياً (d-separated) بمجموعة المشاهدات $Z$ إذا أغلقت كل المسارات بينهما؛ وفي البنية التصادمية ($A \\to C \\leftarrow B$)، يكون $A$ و $B$ مستقلين مبدئياً لكنهما يصبحان مرتبطين شرطياً عند معرفة $C$."
      ],
      "correctAnswer": "Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).",
      "correctAnswerEn": "Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).",
      "correctAnswerAr": "يكون المتغيران $X$ و $Y$ مفصولين اتجاهياً (d-separated) بمجموعة المشاهدات $Z$ إذا أغلقت كل المسارات بينهما؛ وفي البنية التصادمية ($A \\to C \\leftarrow B$)، يكون $A$ و $B$ مستقلين مبدئياً لكنهما يصبحان مرتبطين شرطياً عند معرفة $C$.",
      "correctIndex": 3,
      "explanationEn": "Analytical Derivation & Properties: Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يكون المتغيران $X$ و $Y$ مفصولين اتجاهياً (d-separated) بمجموعة المشاهدات $Z$ إذا أغلقت كل المسارات بينهما؛ وفي البنية التصادمية ($A \\to C \\leftarrow B$)، يكون $A$ و $B$ مستقلين مبدئياً لكنهما يصبحان مرتبطين شرطياً عند معرفة $C$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Bayesian Networks, Directed Acyclic Graphs & D-Separation.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يكون المتغيران $X$ و $Y$ مفصولين اتجاهياً (d-separated) بمجموعة المشاهدات $Z$ إذا أغلقت كل المسارات بينهما؛ وفي البنية التصادمية ($A \\to C \\leftarrow B$)، يكون $A$ و $B$ مستقلين مبدئياً لكنهما يصبحان مرتبطين شرطياً عند معرفة $C$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch1_med_20",
      "titleEn": "[MEDIUM] Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models - Analysis 20",
      "titleAr": "[مستوى متوسط] خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs) - تحليل 20",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models, what is the precise analytical formulation or operative rule? (Item 20)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 20)",
      "optionsEn": [
        "The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).",
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "تتناوب خوارزمية EM بين خطوة التوقع E (حساب المسؤوليات اللاحقة $\\gamma_{ik}$) وخطوة التعظيم M (تحديث المعاملات $\\mu_k$ و $\\Sigma_k$ و $\\pi_k$ بالاعتماد على المسؤوليات المحسوبة).",
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).",
      "correctAnswerEn": "The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).",
      "correctAnswerAr": "تتناوب خوارزمية EM بين خطوة التوقع E (حساب المسؤوليات اللاحقة $\\gamma_{ik}$) وخطوة التعظيم M (تحديث المعاملات $\\mu_k$ و $\\Sigma_k$ و $\\pi_k$ بالاعتماد على المسؤوليات المحسوبة).",
      "correctIndex": 0,
      "explanationEn": "Analytical Derivation & Properties: The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تتناوب خوارزمية EM بين خطوة التوقع E (حساب المسؤوليات اللاحقة $\\gamma_{ik}$) وخطوة التعظيم M (تحديث المعاملات $\\mu_k$ و $\\Sigma_k$ و $\\pi_k$ بالاعتماد على المسؤوليات المحسوبة).",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تتناوب خوارزمية EM بين خطوة التوقع E (حساب المسؤوليات اللاحقة $\\gamma_{ik}$) وخطوة التعظيم M (تحديث المعاملات $\\mu_k$ و $\\Sigma_k$ و $\\pi_k$ بالاعتماد على المسؤوليات المحسوبة).."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch1_med_21",
      "titleEn": "[MEDIUM] Variational Inference & Evidence Lower Bound (ELBO) Derivation - Analysis 21",
      "titleAr": "[مستوى متوسط] الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO) - تحليل 21",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Variational Inference & Evidence Lower Bound (ELBO) Derivation, what is the precise analytical formulation or operative rule? (Item 21)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 21)",
      "optionsEn": [
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.",
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step."
      ],
      "optionsAr": [
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "يُشتق الحد الأدنى لدليل البيانات (ELBO) من متباينة ينسن: $\\ln p(x) \\ge \\mathbb{E}[\\ln p(x,z)] - \\mathbb{E}[\\ln q(z)] = \\text{ELBO}$، ويحقق المعادلة $\\ln p(x) = \\text{ELBO} + D_{KL}(q \\parallel p)$.",
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين."
      ],
      "correctAnswer": "The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.",
      "correctAnswerEn": "The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.",
      "correctAnswerAr": "يُشتق الحد الأدنى لدليل البيانات (ELBO) من متباينة ينسن: $\\ln p(x) \\ge \\mathbb{E}[\\ln p(x,z)] - \\mathbb{E}[\\ln q(z)] = \\text{ELBO}$، ويحقق المعادلة $\\ln p(x) = \\text{ELBO} + D_{KL}(q \\parallel p)$.",
      "correctIndex": 1,
      "explanationEn": "Analytical Derivation & Properties: The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يُشتق الحد الأدنى لدليل البيانات (ELBO) من متباينة ينسن: $\\ln p(x) \\ge \\mathbb{E}[\\ln p(x,z)] - \\mathbb{E}[\\ln q(z)] = \\text{ELBO}$، ويحقق المعادلة $\\ln p(x) = \\text{ELBO} + D_{KL}(q \\parallel p)$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Variational Inference & Evidence Lower Bound (ELBO) Derivation.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يُشتق الحد الأدنى لدليل البيانات (ELBO) من متباينة ينسن: $\\ln p(x) \\ge \\mathbb{E}[\\ln p(x,z)] - \\mathbb{E}[\\ln q(z)] = \\text{ELBO}$، ويحقق المعادلة $\\ln p(x) = \\text{ELBO} + D_{KL}(q \\parallel p)$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch1_med_22",
      "titleEn": "[MEDIUM] Bayesian Networks, Directed Acyclic Graphs & D-Separation - Analysis 22",
      "titleAr": "[مستوى متوسط] شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation) - تحليل 22",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Bayesian Networks, Directed Acyclic Graphs & D-Separation, what is the precise analytical formulation or operative rule? (Item 22)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 22)",
      "optionsEn": [
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).",
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance."
      ],
      "optionsAr": [
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يكون المتغيران $X$ و $Y$ مفصولين اتجاهياً (d-separated) بمجموعة المشاهدات $Z$ إذا أغلقت كل المسارات بينهما؛ وفي البنية التصادمية ($A \\to C \\leftarrow B$)، يكون $A$ و $B$ مستقلين مبدئياً لكنهما يصبحان مرتبطين شرطياً عند معرفة $C$.",
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر."
      ],
      "correctAnswer": "Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).",
      "correctAnswerEn": "Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).",
      "correctAnswerAr": "يكون المتغيران $X$ و $Y$ مفصولين اتجاهياً (d-separated) بمجموعة المشاهدات $Z$ إذا أغلقت كل المسارات بينهما؛ وفي البنية التصادمية ($A \\to C \\leftarrow B$)، يكون $A$ و $B$ مستقلين مبدئياً لكنهما يصبحان مرتبطين شرطياً عند معرفة $C$.",
      "correctIndex": 2,
      "explanationEn": "Analytical Derivation & Properties: Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يكون المتغيران $X$ و $Y$ مفصولين اتجاهياً (d-separated) بمجموعة المشاهدات $Z$ إذا أغلقت كل المسارات بينهما؛ وفي البنية التصادمية ($A \\to C \\leftarrow B$)، يكون $A$ و $B$ مستقلين مبدئياً لكنهما يصبحان مرتبطين شرطياً عند معرفة $C$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Bayesian Networks, Directed Acyclic Graphs & D-Separation.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يكون المتغيران $X$ و $Y$ مفصولين اتجاهياً (d-separated) بمجموعة المشاهدات $Z$ إذا أغلقت كل المسارات بينهما؛ وفي البنية التصادمية ($A \\to C \\leftarrow B$)، يكون $A$ و $B$ مستقلين مبدئياً لكنهما يصبحان مرتبطين شرطياً عند معرفة $C$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch1_med_23",
      "titleEn": "[MEDIUM] Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models - Analysis 23",
      "titleAr": "[مستوى متوسط] خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs) - تحليل 23",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models, what is the precise analytical formulation or operative rule? (Item 23)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 23)",
      "optionsEn": [
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities)."
      ],
      "optionsAr": [
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تتناوب خوارزمية EM بين خطوة التوقع E (حساب المسؤوليات اللاحقة $\\gamma_{ik}$) وخطوة التعظيم M (تحديث المعاملات $\\mu_k$ و $\\Sigma_k$ و $\\pi_k$ بالاعتماد على المسؤوليات المحسوبة)."
      ],
      "correctAnswer": "The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).",
      "correctAnswerEn": "The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).",
      "correctAnswerAr": "تتناوب خوارزمية EM بين خطوة التوقع E (حساب المسؤوليات اللاحقة $\\gamma_{ik}$) وخطوة التعظيم M (تحديث المعاملات $\\mu_k$ و $\\Sigma_k$ و $\\pi_k$ بالاعتماد على المسؤوليات المحسوبة).",
      "correctIndex": 3,
      "explanationEn": "Analytical Derivation & Properties: The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تتناوب خوارزمية EM بين خطوة التوقع E (حساب المسؤوليات اللاحقة $\\gamma_{ik}$) وخطوة التعظيم M (تحديث المعاملات $\\mu_k$ و $\\Sigma_k$ و $\\pi_k$ بالاعتماد على المسؤوليات المحسوبة).",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تتناوب خوارزمية EM بين خطوة التوقع E (حساب المسؤوليات اللاحقة $\\gamma_{ik}$) وخطوة التعظيم M (تحديث المعاملات $\\mu_k$ و $\\Sigma_k$ و $\\pi_k$ بالاعتماد على المسؤوليات المحسوبة).."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch1_med_24",
      "titleEn": "[MEDIUM] Variational Inference & Evidence Lower Bound (ELBO) Derivation - Analysis 24",
      "titleAr": "[مستوى متوسط] الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO) - تحليل 24",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Variational Inference & Evidence Lower Bound (ELBO) Derivation, what is the precise analytical formulation or operative rule? (Item 24)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 24)",
      "optionsEn": [
        "The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs."
      ],
      "optionsAr": [
        "يُشتق الحد الأدنى لدليل البيانات (ELBO) من متباينة ينسن: $\\ln p(x) \\ge \\mathbb{E}[\\ln p(x,z)] - \\mathbb{E}[\\ln q(z)] = \\text{ELBO}$، ويحقق المعادلة $\\ln p(x) = \\text{ELBO} + D_{KL}(q \\parallel p)$.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة."
      ],
      "correctAnswer": "The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.",
      "correctAnswerEn": "The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.",
      "correctAnswerAr": "يُشتق الحد الأدنى لدليل البيانات (ELBO) من متباينة ينسن: $\\ln p(x) \\ge \\mathbb{E}[\\ln p(x,z)] - \\mathbb{E}[\\ln q(z)] = \\text{ELBO}$، ويحقق المعادلة $\\ln p(x) = \\text{ELBO} + D_{KL}(q \\parallel p)$.",
      "correctIndex": 0,
      "explanationEn": "Analytical Derivation & Properties: The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يُشتق الحد الأدنى لدليل البيانات (ELBO) من متباينة ينسن: $\\ln p(x) \\ge \\mathbb{E}[\\ln p(x,z)] - \\mathbb{E}[\\ln q(z)] = \\text{ELBO}$، ويحقق المعادلة $\\ln p(x) = \\text{ELBO} + D_{KL}(q \\parallel p)$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Variational Inference & Evidence Lower Bound (ELBO) Derivation.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يُشتق الحد الأدنى لدليل البيانات (ELBO) من متباينة ينسن: $\\ln p(x) \\ge \\mathbb{E}[\\ln p(x,z)] - \\mathbb{E}[\\ln q(z)] = \\text{ELBO}$، ويحقق المعادلة $\\ln p(x) = \\text{ELBO} + D_{KL}(q \\parallel p)$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch1_med_25",
      "titleEn": "[MEDIUM] Bayesian Networks, Directed Acyclic Graphs & D-Separation - Analysis 25",
      "titleAr": "[مستوى متوسط] شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation) - تحليل 25",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Bayesian Networks, Directed Acyclic Graphs & D-Separation, what is the precise analytical formulation or operative rule? (Item 25)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 25)",
      "optionsEn": [
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence."
      ],
      "optionsAr": [
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "يكون المتغيران $X$ و $Y$ مفصولين اتجاهياً (d-separated) بمجموعة المشاهدات $Z$ إذا أغلقت كل المسارات بينهما؛ وفي البنية التصادمية ($A \\to C \\leftarrow B$)، يكون $A$ و $B$ مستقلين مبدئياً لكنهما يصبحان مرتبطين شرطياً عند معرفة $C$.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية."
      ],
      "correctAnswer": "Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).",
      "correctAnswerEn": "Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).",
      "correctAnswerAr": "يكون المتغيران $X$ و $Y$ مفصولين اتجاهياً (d-separated) بمجموعة المشاهدات $Z$ إذا أغلقت كل المسارات بينهما؛ وفي البنية التصادمية ($A \\to C \\leftarrow B$)، يكون $A$ و $B$ مستقلين مبدئياً لكنهما يصبحان مرتبطين شرطياً عند معرفة $C$.",
      "correctIndex": 1,
      "explanationEn": "Analytical Derivation & Properties: Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يكون المتغيران $X$ و $Y$ مفصولين اتجاهياً (d-separated) بمجموعة المشاهدات $Z$ إذا أغلقت كل المسارات بينهما؛ وفي البنية التصادمية ($A \\to C \\leftarrow B$)، يكون $A$ و $B$ مستقلين مبدئياً لكنهما يصبحان مرتبطين شرطياً عند معرفة $C$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Bayesian Networks, Directed Acyclic Graphs & D-Separation.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يكون المتغيران $X$ و $Y$ مفصولين اتجاهياً (d-separated) بمجموعة المشاهدات $Z$ إذا أغلقت كل المسارات بينهما؛ وفي البنية التصادمية ($A \\to C \\leftarrow B$)، يكون $A$ و $B$ مستقلين مبدئياً لكنهما يصبحان مرتبطين شرطياً عند معرفة $C$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch1_med_26",
      "titleEn": "[MEDIUM] Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models - Analysis 26",
      "titleAr": "[مستوى متوسط] خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs) - تحليل 26",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models, what is the precise analytical formulation or operative rule? (Item 26)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 26)",
      "optionsEn": [
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تتناوب خوارزمية EM بين خطوة التوقع E (حساب المسؤوليات اللاحقة $\\gamma_{ik}$) وخطوة التعظيم M (تحديث المعاملات $\\mu_k$ و $\\Sigma_k$ و $\\pi_k$ بالاعتماد على المسؤوليات المحسوبة).",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).",
      "correctAnswerEn": "The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).",
      "correctAnswerAr": "تتناوب خوارزمية EM بين خطوة التوقع E (حساب المسؤوليات اللاحقة $\\gamma_{ik}$) وخطوة التعظيم M (تحديث المعاملات $\\mu_k$ و $\\Sigma_k$ و $\\pi_k$ بالاعتماد على المسؤوليات المحسوبة).",
      "correctIndex": 2,
      "explanationEn": "Analytical Derivation & Properties: The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تتناوب خوارزمية EM بين خطوة التوقع E (حساب المسؤوليات اللاحقة $\\gamma_{ik}$) وخطوة التعظيم M (تحديث المعاملات $\\mu_k$ و $\\Sigma_k$ و $\\pi_k$ بالاعتماد على المسؤوليات المحسوبة).",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تتناوب خوارزمية EM بين خطوة التوقع E (حساب المسؤوليات اللاحقة $\\gamma_{ik}$) وخطوة التعظيم M (تحديث المعاملات $\\mu_k$ و $\\Sigma_k$ و $\\pi_k$ بالاعتماد على المسؤوليات المحسوبة).."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch1_med_27",
      "titleEn": "[MEDIUM] Variational Inference & Evidence Lower Bound (ELBO) Derivation - Analysis 27",
      "titleAr": "[مستوى متوسط] الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO) - تحليل 27",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Variational Inference & Evidence Lower Bound (ELBO) Derivation, what is the precise analytical formulation or operative rule? (Item 27)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 27)",
      "optionsEn": [
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$."
      ],
      "optionsAr": [
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "يُشتق الحد الأدنى لدليل البيانات (ELBO) من متباينة ينسن: $\\ln p(x) \\ge \\mathbb{E}[\\ln p(x,z)] - \\mathbb{E}[\\ln q(z)] = \\text{ELBO}$، ويحقق المعادلة $\\ln p(x) = \\text{ELBO} + D_{KL}(q \\parallel p)$."
      ],
      "correctAnswer": "The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.",
      "correctAnswerEn": "The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.",
      "correctAnswerAr": "يُشتق الحد الأدنى لدليل البيانات (ELBO) من متباينة ينسن: $\\ln p(x) \\ge \\mathbb{E}[\\ln p(x,z)] - \\mathbb{E}[\\ln q(z)] = \\text{ELBO}$، ويحقق المعادلة $\\ln p(x) = \\text{ELBO} + D_{KL}(q \\parallel p)$.",
      "correctIndex": 3,
      "explanationEn": "Analytical Derivation & Properties: The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يُشتق الحد الأدنى لدليل البيانات (ELBO) من متباينة ينسن: $\\ln p(x) \\ge \\mathbb{E}[\\ln p(x,z)] - \\mathbb{E}[\\ln q(z)] = \\text{ELBO}$، ويحقق المعادلة $\\ln p(x) = \\text{ELBO} + D_{KL}(q \\parallel p)$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Variational Inference & Evidence Lower Bound (ELBO) Derivation.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يُشتق الحد الأدنى لدليل البيانات (ELBO) من متباينة ينسن: $\\ln p(x) \\ge \\mathbb{E}[\\ln p(x,z)] - \\mathbb{E}[\\ln q(z)] = \\text{ELBO}$، ويحقق المعادلة $\\ln p(x) = \\text{ELBO} + D_{KL}(q \\parallel p)$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch1_med_28",
      "titleEn": "[MEDIUM] Bayesian Networks, Directed Acyclic Graphs & D-Separation - Analysis 28",
      "titleAr": "[مستوى متوسط] شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation) - تحليل 28",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Bayesian Networks, Directed Acyclic Graphs & D-Separation, what is the precise analytical formulation or operative rule? (Item 28)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 28)",
      "optionsEn": [
        "Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan."
      ],
      "optionsAr": [
        "يكون المتغيران $X$ و $Y$ مفصولين اتجاهياً (d-separated) بمجموعة المشاهدات $Z$ إذا أغلقت كل المسارات بينهما؛ وفي البنية التصادمية ($A \\to C \\leftarrow B$)، يكون $A$ و $B$ مستقلين مبدئياً لكنهما يصبحان مرتبطين شرطياً عند معرفة $C$.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG)."
      ],
      "correctAnswer": "Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).",
      "correctAnswerEn": "Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).",
      "correctAnswerAr": "يكون المتغيران $X$ و $Y$ مفصولين اتجاهياً (d-separated) بمجموعة المشاهدات $Z$ إذا أغلقت كل المسارات بينهما؛ وفي البنية التصادمية ($A \\to C \\leftarrow B$)، يكون $A$ و $B$ مستقلين مبدئياً لكنهما يصبحان مرتبطين شرطياً عند معرفة $C$.",
      "correctIndex": 0,
      "explanationEn": "Analytical Derivation & Properties: Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يكون المتغيران $X$ و $Y$ مفصولين اتجاهياً (d-separated) بمجموعة المشاهدات $Z$ إذا أغلقت كل المسارات بينهما؛ وفي البنية التصادمية ($A \\to C \\leftarrow B$)، يكون $A$ و $B$ مستقلين مبدئياً لكنهما يصبحان مرتبطين شرطياً عند معرفة $C$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Bayesian Networks, Directed Acyclic Graphs & D-Separation.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يكون المتغيران $X$ و $Y$ مفصولين اتجاهياً (d-separated) بمجموعة المشاهدات $Z$ إذا أغلقت كل المسارات بينهما؛ وفي البنية التصادمية ($A \\to C \\leftarrow B$)، يكون $A$ و $B$ مستقلين مبدئياً لكنهما يصبحان مرتبطين شرطياً عند معرفة $C$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch1_med_29",
      "titleEn": "[MEDIUM] Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models - Analysis 29",
      "titleAr": "[مستوى متوسط] خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs) - تحليل 29",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models, what is the precise analytical formulation or operative rule? (Item 29)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 29)",
      "optionsEn": [
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تتناوب خوارزمية EM بين خطوة التوقع E (حساب المسؤوليات اللاحقة $\\gamma_{ik}$) وخطوة التعظيم M (تحديث المعاملات $\\mu_k$ و $\\Sigma_k$ و $\\pi_k$ بالاعتماد على المسؤوليات المحسوبة).",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).",
      "correctAnswerEn": "The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).",
      "correctAnswerAr": "تتناوب خوارزمية EM بين خطوة التوقع E (حساب المسؤوليات اللاحقة $\\gamma_{ik}$) وخطوة التعظيم M (تحديث المعاملات $\\mu_k$ و $\\Sigma_k$ و $\\pi_k$ بالاعتماد على المسؤوليات المحسوبة).",
      "correctIndex": 1,
      "explanationEn": "Analytical Derivation & Properties: The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تتناوب خوارزمية EM بين خطوة التوقع E (حساب المسؤوليات اللاحقة $\\gamma_{ik}$) وخطوة التعظيم M (تحديث المعاملات $\\mu_k$ و $\\Sigma_k$ و $\\pi_k$ بالاعتماد على المسؤوليات المحسوبة).",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تتناوب خوارزمية EM بين خطوة التوقع E (حساب المسؤوليات اللاحقة $\\gamma_{ik}$) وخطوة التعظيم M (تحديث المعاملات $\\mu_k$ و $\\Sigma_k$ و $\\pi_k$ بالاعتماد على المسؤوليات المحسوبة).."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch1_med_30",
      "titleEn": "[MEDIUM] Variational Inference & Evidence Lower Bound (ELBO) Derivation - Analysis 30",
      "titleAr": "[مستوى متوسط] الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO) - تحليل 30",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Variational Inference & Evidence Lower Bound (ELBO) Derivation, what is the precise analytical formulation or operative rule? (Item 30)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 30)",
      "optionsEn": [
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate."
      ],
      "optionsAr": [
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يُشتق الحد الأدنى لدليل البيانات (ELBO) من متباينة ينسن: $\\ln p(x) \\ge \\mathbb{E}[\\ln p(x,z)] - \\mathbb{E}[\\ln q(z)] = \\text{ELBO}$، ويحقق المعادلة $\\ln p(x) = \\text{ELBO} + D_{KL}(q \\parallel p)$.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم."
      ],
      "correctAnswer": "The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.",
      "correctAnswerEn": "The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.",
      "correctAnswerAr": "يُشتق الحد الأدنى لدليل البيانات (ELBO) من متباينة ينسن: $\\ln p(x) \\ge \\mathbb{E}[\\ln p(x,z)] - \\mathbb{E}[\\ln q(z)] = \\text{ELBO}$، ويحقق المعادلة $\\ln p(x) = \\text{ELBO} + D_{KL}(q \\parallel p)$.",
      "correctIndex": 2,
      "explanationEn": "Analytical Derivation & Properties: The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يُشتق الحد الأدنى لدليل البيانات (ELBO) من متباينة ينسن: $\\ln p(x) \\ge \\mathbb{E}[\\ln p(x,z)] - \\mathbb{E}[\\ln q(z)] = \\text{ELBO}$، ويحقق المعادلة $\\ln p(x) = \\text{ELBO} + D_{KL}(q \\parallel p)$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Variational Inference & Evidence Lower Bound (ELBO) Derivation.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يُشتق الحد الأدنى لدليل البيانات (ELBO) من متباينة ينسن: $\\ln p(x) \\ge \\mathbb{E}[\\ln p(x,z)] - \\mathbb{E}[\\ln q(z)] = \\text{ELBO}$، ويحقق المعادلة $\\ln p(x) = \\text{ELBO} + D_{KL}(q \\parallel p)$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch1_med_31",
      "titleEn": "[MEDIUM] Bayesian Networks, Directed Acyclic Graphs & D-Separation - Analysis 31",
      "titleAr": "[مستوى متوسط] شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation) - تحليل 31",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Bayesian Networks, Directed Acyclic Graphs & D-Separation, what is the precise analytical formulation or operative rule? (Item 31)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 31)",
      "optionsEn": [
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away)."
      ],
      "optionsAr": [
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "يكون المتغيران $X$ و $Y$ مفصولين اتجاهياً (d-separated) بمجموعة المشاهدات $Z$ إذا أغلقت كل المسارات بينهما؛ وفي البنية التصادمية ($A \\to C \\leftarrow B$)، يكون $A$ و $B$ مستقلين مبدئياً لكنهما يصبحان مرتبطين شرطياً عند معرفة $C$."
      ],
      "correctAnswer": "Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).",
      "correctAnswerEn": "Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).",
      "correctAnswerAr": "يكون المتغيران $X$ و $Y$ مفصولين اتجاهياً (d-separated) بمجموعة المشاهدات $Z$ إذا أغلقت كل المسارات بينهما؛ وفي البنية التصادمية ($A \\to C \\leftarrow B$)، يكون $A$ و $B$ مستقلين مبدئياً لكنهما يصبحان مرتبطين شرطياً عند معرفة $C$.",
      "correctIndex": 3,
      "explanationEn": "Analytical Derivation & Properties: Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يكون المتغيران $X$ و $Y$ مفصولين اتجاهياً (d-separated) بمجموعة المشاهدات $Z$ إذا أغلقت كل المسارات بينهما؛ وفي البنية التصادمية ($A \\to C \\leftarrow B$)، يكون $A$ و $B$ مستقلين مبدئياً لكنهما يصبحان مرتبطين شرطياً عند معرفة $C$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Bayesian Networks, Directed Acyclic Graphs & D-Separation.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يكون المتغيران $X$ و $Y$ مفصولين اتجاهياً (d-separated) بمجموعة المشاهدات $Z$ إذا أغلقت كل المسارات بينهما؛ وفي البنية التصادمية ($A \\to C \\leftarrow B$)، يكون $A$ و $B$ مستقلين مبدئياً لكنهما يصبحان مرتبطين شرطياً عند معرفة $C$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch1_med_32",
      "titleEn": "[MEDIUM] Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models - Analysis 32",
      "titleAr": "[مستوى متوسط] خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs) - تحليل 32",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models, what is the precise analytical formulation or operative rule? (Item 32)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 32)",
      "optionsEn": [
        "The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).",
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "تتناوب خوارزمية EM بين خطوة التوقع E (حساب المسؤوليات اللاحقة $\\gamma_{ik}$) وخطوة التعظيم M (تحديث المعاملات $\\mu_k$ و $\\Sigma_k$ و $\\pi_k$ بالاعتماد على المسؤوليات المحسوبة).",
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).",
      "correctAnswerEn": "The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).",
      "correctAnswerAr": "تتناوب خوارزمية EM بين خطوة التوقع E (حساب المسؤوليات اللاحقة $\\gamma_{ik}$) وخطوة التعظيم M (تحديث المعاملات $\\mu_k$ و $\\Sigma_k$ و $\\pi_k$ بالاعتماد على المسؤوليات المحسوبة).",
      "correctIndex": 0,
      "explanationEn": "Analytical Derivation & Properties: The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تتناوب خوارزمية EM بين خطوة التوقع E (حساب المسؤوليات اللاحقة $\\gamma_{ik}$) وخطوة التعظيم M (تحديث المعاملات $\\mu_k$ و $\\Sigma_k$ و $\\pi_k$ بالاعتماد على المسؤوليات المحسوبة).",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تتناوب خوارزمية EM بين خطوة التوقع E (حساب المسؤوليات اللاحقة $\\gamma_{ik}$) وخطوة التعظيم M (تحديث المعاملات $\\mu_k$ و $\\Sigma_k$ و $\\pi_k$ بالاعتماد على المسؤوليات المحسوبة).."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch1_med_33",
      "titleEn": "[MEDIUM] Variational Inference & Evidence Lower Bound (ELBO) Derivation - Analysis 33",
      "titleAr": "[مستوى متوسط] الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO) - تحليل 33",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Variational Inference & Evidence Lower Bound (ELBO) Derivation, what is the precise analytical formulation or operative rule? (Item 33)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 33)",
      "optionsEn": [
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.",
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation."
      ],
      "optionsAr": [
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "يُشتق الحد الأدنى لدليل البيانات (ELBO) من متباينة ينسن: $\\ln p(x) \\ge \\mathbb{E}[\\ln p(x,z)] - \\mathbb{E}[\\ln q(z)] = \\text{ELBO}$، ويحقق المعادلة $\\ln p(x) = \\text{ELBO} + D_{KL}(q \\parallel p)$.",
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي."
      ],
      "correctAnswer": "The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.",
      "correctAnswerEn": "The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.",
      "correctAnswerAr": "يُشتق الحد الأدنى لدليل البيانات (ELBO) من متباينة ينسن: $\\ln p(x) \\ge \\mathbb{E}[\\ln p(x,z)] - \\mathbb{E}[\\ln q(z)] = \\text{ELBO}$، ويحقق المعادلة $\\ln p(x) = \\text{ELBO} + D_{KL}(q \\parallel p)$.",
      "correctIndex": 1,
      "explanationEn": "Analytical Derivation & Properties: The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يُشتق الحد الأدنى لدليل البيانات (ELBO) من متباينة ينسن: $\\ln p(x) \\ge \\mathbb{E}[\\ln p(x,z)] - \\mathbb{E}[\\ln q(z)] = \\text{ELBO}$، ويحقق المعادلة $\\ln p(x) = \\text{ELBO} + D_{KL}(q \\parallel p)$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Variational Inference & Evidence Lower Bound (ELBO) Derivation.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يُشتق الحد الأدنى لدليل البيانات (ELBO) من متباينة ينسن: $\\ln p(x) \\ge \\mathbb{E}[\\ln p(x,z)] - \\mathbb{E}[\\ln q(z)] = \\text{ELBO}$، ويحقق المعادلة $\\ln p(x) = \\text{ELBO} + D_{KL}(q \\parallel p)$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch1_med_34",
      "titleEn": "[MEDIUM] Bayesian Networks, Directed Acyclic Graphs & D-Separation - Analysis 34",
      "titleAr": "[مستوى متوسط] شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation) - تحليل 34",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Bayesian Networks, Directed Acyclic Graphs & D-Separation, what is the precise analytical formulation or operative rule? (Item 34)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 34)",
      "optionsEn": [
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).",
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent."
      ],
      "optionsAr": [
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "يكون المتغيران $X$ و $Y$ مفصولين اتجاهياً (d-separated) بمجموعة المشاهدات $Z$ إذا أغلقت كل المسارات بينهما؛ وفي البنية التصادمية ($A \\to C \\leftarrow B$)، يكون $A$ و $B$ مستقلين مبدئياً لكنهما يصبحان مرتبطين شرطياً عند معرفة $C$.",
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة."
      ],
      "correctAnswer": "Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).",
      "correctAnswerEn": "Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).",
      "correctAnswerAr": "يكون المتغيران $X$ و $Y$ مفصولين اتجاهياً (d-separated) بمجموعة المشاهدات $Z$ إذا أغلقت كل المسارات بينهما؛ وفي البنية التصادمية ($A \\to C \\leftarrow B$)، يكون $A$ و $B$ مستقلين مبدئياً لكنهما يصبحان مرتبطين شرطياً عند معرفة $C$.",
      "correctIndex": 2,
      "explanationEn": "Analytical Derivation & Properties: Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يكون المتغيران $X$ و $Y$ مفصولين اتجاهياً (d-separated) بمجموعة المشاهدات $Z$ إذا أغلقت كل المسارات بينهما؛ وفي البنية التصادمية ($A \\to C \\leftarrow B$)، يكون $A$ و $B$ مستقلين مبدئياً لكنهما يصبحان مرتبطين شرطياً عند معرفة $C$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Bayesian Networks, Directed Acyclic Graphs & D-Separation.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يكون المتغيران $X$ و $Y$ مفصولين اتجاهياً (d-separated) بمجموعة المشاهدات $Z$ إذا أغلقت كل المسارات بينهما؛ وفي البنية التصادمية ($A \\to C \\leftarrow B$)، يكون $A$ و $B$ مستقلين مبدئياً لكنهما يصبحان مرتبطين شرطياً عند معرفة $C$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch1_med_35",
      "titleEn": "[MEDIUM] Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models - Analysis 35",
      "titleAr": "[مستوى متوسط] خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs) - تحليل 35",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models, what is the precise analytical formulation or operative rule? (Item 35)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 35)",
      "optionsEn": [
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities)."
      ],
      "optionsAr": [
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تتناوب خوارزمية EM بين خطوة التوقع E (حساب المسؤوليات اللاحقة $\\gamma_{ik}$) وخطوة التعظيم M (تحديث المعاملات $\\mu_k$ و $\\Sigma_k$ و $\\pi_k$ بالاعتماد على المسؤوليات المحسوبة)."
      ],
      "correctAnswer": "The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).",
      "correctAnswerEn": "The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).",
      "correctAnswerAr": "تتناوب خوارزمية EM بين خطوة التوقع E (حساب المسؤوليات اللاحقة $\\gamma_{ik}$) وخطوة التعظيم M (تحديث المعاملات $\\mu_k$ و $\\Sigma_k$ و $\\pi_k$ بالاعتماد على المسؤوليات المحسوبة).",
      "correctIndex": 3,
      "explanationEn": "Analytical Derivation & Properties: The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تتناوب خوارزمية EM بين خطوة التوقع E (حساب المسؤوليات اللاحقة $\\gamma_{ik}$) وخطوة التعظيم M (تحديث المعاملات $\\mu_k$ و $\\Sigma_k$ و $\\pi_k$ بالاعتماد على المسؤوليات المحسوبة).",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تتناوب خوارزمية EM بين خطوة التوقع E (حساب المسؤوليات اللاحقة $\\gamma_{ik}$) وخطوة التعظيم M (تحديث المعاملات $\\mu_k$ و $\\Sigma_k$ و $\\pi_k$ بالاعتماد على المسؤوليات المحسوبة).."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch1_med_36",
      "titleEn": "[MEDIUM] Variational Inference & Evidence Lower Bound (ELBO) Derivation - Analysis 36",
      "titleAr": "[مستوى متوسط] الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO) - تحليل 36",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Variational Inference & Evidence Lower Bound (ELBO) Derivation, what is the precise analytical formulation or operative rule? (Item 36)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 36)",
      "optionsEn": [
        "The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step."
      ],
      "optionsAr": [
        "يُشتق الحد الأدنى لدليل البيانات (ELBO) من متباينة ينسن: $\\ln p(x) \\ge \\mathbb{E}[\\ln p(x,z)] - \\mathbb{E}[\\ln q(z)] = \\text{ELBO}$، ويحقق المعادلة $\\ln p(x) = \\text{ELBO} + D_{KL}(q \\parallel p)$.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين."
      ],
      "correctAnswer": "The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.",
      "correctAnswerEn": "The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.",
      "correctAnswerAr": "يُشتق الحد الأدنى لدليل البيانات (ELBO) من متباينة ينسن: $\\ln p(x) \\ge \\mathbb{E}[\\ln p(x,z)] - \\mathbb{E}[\\ln q(z)] = \\text{ELBO}$، ويحقق المعادلة $\\ln p(x) = \\text{ELBO} + D_{KL}(q \\parallel p)$.",
      "correctIndex": 0,
      "explanationEn": "Analytical Derivation & Properties: The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يُشتق الحد الأدنى لدليل البيانات (ELBO) من متباينة ينسن: $\\ln p(x) \\ge \\mathbb{E}[\\ln p(x,z)] - \\mathbb{E}[\\ln q(z)] = \\text{ELBO}$، ويحقق المعادلة $\\ln p(x) = \\text{ELBO} + D_{KL}(q \\parallel p)$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Variational Inference & Evidence Lower Bound (ELBO) Derivation.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يُشتق الحد الأدنى لدليل البيانات (ELBO) من متباينة ينسن: $\\ln p(x) \\ge \\mathbb{E}[\\ln p(x,z)] - \\mathbb{E}[\\ln q(z)] = \\text{ELBO}$، ويحقق المعادلة $\\ln p(x) = \\text{ELBO} + D_{KL}(q \\parallel p)$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch1_med_37",
      "titleEn": "[MEDIUM] Bayesian Networks, Directed Acyclic Graphs & D-Separation - Analysis 37",
      "titleAr": "[مستوى متوسط] شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation) - تحليل 37",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Bayesian Networks, Directed Acyclic Graphs & D-Separation, what is the precise analytical formulation or operative rule? (Item 37)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 37)",
      "optionsEn": [
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance."
      ],
      "optionsAr": [
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "يكون المتغيران $X$ و $Y$ مفصولين اتجاهياً (d-separated) بمجموعة المشاهدات $Z$ إذا أغلقت كل المسارات بينهما؛ وفي البنية التصادمية ($A \\to C \\leftarrow B$)، يكون $A$ و $B$ مستقلين مبدئياً لكنهما يصبحان مرتبطين شرطياً عند معرفة $C$.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر."
      ],
      "correctAnswer": "Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).",
      "correctAnswerEn": "Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).",
      "correctAnswerAr": "يكون المتغيران $X$ و $Y$ مفصولين اتجاهياً (d-separated) بمجموعة المشاهدات $Z$ إذا أغلقت كل المسارات بينهما؛ وفي البنية التصادمية ($A \\to C \\leftarrow B$)، يكون $A$ و $B$ مستقلين مبدئياً لكنهما يصبحان مرتبطين شرطياً عند معرفة $C$.",
      "correctIndex": 1,
      "explanationEn": "Analytical Derivation & Properties: Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يكون المتغيران $X$ و $Y$ مفصولين اتجاهياً (d-separated) بمجموعة المشاهدات $Z$ إذا أغلقت كل المسارات بينهما؛ وفي البنية التصادمية ($A \\to C \\leftarrow B$)، يكون $A$ و $B$ مستقلين مبدئياً لكنهما يصبحان مرتبطين شرطياً عند معرفة $C$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Bayesian Networks, Directed Acyclic Graphs & D-Separation.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يكون المتغيران $X$ و $Y$ مفصولين اتجاهياً (d-separated) بمجموعة المشاهدات $Z$ إذا أغلقت كل المسارات بينهما؛ وفي البنية التصادمية ($A \\to C \\leftarrow B$)، يكون $A$ و $B$ مستقلين مبدئياً لكنهما يصبحان مرتبطين شرطياً عند معرفة $C$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch1_med_38",
      "titleEn": "[MEDIUM] Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models - Analysis 38",
      "titleAr": "[مستوى متوسط] خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs) - تحليل 38",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models, what is the precise analytical formulation or operative rule? (Item 38)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 38)",
      "optionsEn": [
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "تتناوب خوارزمية EM بين خطوة التوقع E (حساب المسؤوليات اللاحقة $\\gamma_{ik}$) وخطوة التعظيم M (تحديث المعاملات $\\mu_k$ و $\\Sigma_k$ و $\\pi_k$ بالاعتماد على المسؤوليات المحسوبة).",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).",
      "correctAnswerEn": "The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).",
      "correctAnswerAr": "تتناوب خوارزمية EM بين خطوة التوقع E (حساب المسؤوليات اللاحقة $\\gamma_{ik}$) وخطوة التعظيم M (تحديث المعاملات $\\mu_k$ و $\\Sigma_k$ و $\\pi_k$ بالاعتماد على المسؤوليات المحسوبة).",
      "correctIndex": 2,
      "explanationEn": "Analytical Derivation & Properties: The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تتناوب خوارزمية EM بين خطوة التوقع E (حساب المسؤوليات اللاحقة $\\gamma_{ik}$) وخطوة التعظيم M (تحديث المعاملات $\\mu_k$ و $\\Sigma_k$ و $\\pi_k$ بالاعتماد على المسؤوليات المحسوبة).",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تتناوب خوارزمية EM بين خطوة التوقع E (حساب المسؤوليات اللاحقة $\\gamma_{ik}$) وخطوة التعظيم M (تحديث المعاملات $\\mu_k$ و $\\Sigma_k$ و $\\pi_k$ بالاعتماد على المسؤوليات المحسوبة).."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch1_med_39",
      "titleEn": "[MEDIUM] Variational Inference & Evidence Lower Bound (ELBO) Derivation - Analysis 39",
      "titleAr": "[مستوى متوسط] الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO) - تحليل 39",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Variational Inference & Evidence Lower Bound (ELBO) Derivation, what is the precise analytical formulation or operative rule? (Item 39)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 39)",
      "optionsEn": [
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$."
      ],
      "optionsAr": [
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "يُشتق الحد الأدنى لدليل البيانات (ELBO) من متباينة ينسن: $\\ln p(x) \\ge \\mathbb{E}[\\ln p(x,z)] - \\mathbb{E}[\\ln q(z)] = \\text{ELBO}$، ويحقق المعادلة $\\ln p(x) = \\text{ELBO} + D_{KL}(q \\parallel p)$."
      ],
      "correctAnswer": "The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.",
      "correctAnswerEn": "The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.",
      "correctAnswerAr": "يُشتق الحد الأدنى لدليل البيانات (ELBO) من متباينة ينسن: $\\ln p(x) \\ge \\mathbb{E}[\\ln p(x,z)] - \\mathbb{E}[\\ln q(z)] = \\text{ELBO}$، ويحقق المعادلة $\\ln p(x) = \\text{ELBO} + D_{KL}(q \\parallel p)$.",
      "correctIndex": 3,
      "explanationEn": "Analytical Derivation & Properties: The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يُشتق الحد الأدنى لدليل البيانات (ELBO) من متباينة ينسن: $\\ln p(x) \\ge \\mathbb{E}[\\ln p(x,z)] - \\mathbb{E}[\\ln q(z)] = \\text{ELBO}$، ويحقق المعادلة $\\ln p(x) = \\text{ELBO} + D_{KL}(q \\parallel p)$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Variational Inference & Evidence Lower Bound (ELBO) Derivation.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يُشتق الحد الأدنى لدليل البيانات (ELBO) من متباينة ينسن: $\\ln p(x) \\ge \\mathbb{E}[\\ln p(x,z)] - \\mathbb{E}[\\ln q(z)] = \\text{ELBO}$، ويحقق المعادلة $\\ln p(x) = \\text{ELBO} + D_{KL}(q \\parallel p)$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch1_med_40",
      "titleEn": "[MEDIUM] Bayesian Networks, Directed Acyclic Graphs & D-Separation - Analysis 40",
      "titleAr": "[مستوى متوسط] شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation) - تحليل 40",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Bayesian Networks, Directed Acyclic Graphs & D-Separation, what is the precise analytical formulation or operative rule? (Item 40)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 40)",
      "optionsEn": [
        "Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence."
      ],
      "optionsAr": [
        "يكون المتغيران $X$ و $Y$ مفصولين اتجاهياً (d-separated) بمجموعة المشاهدات $Z$ إذا أغلقت كل المسارات بينهما؛ وفي البنية التصادمية ($A \\to C \\leftarrow B$)، يكون $A$ و $B$ مستقلين مبدئياً لكنهما يصبحان مرتبطين شرطياً عند معرفة $C$.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية."
      ],
      "correctAnswer": "Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).",
      "correctAnswerEn": "Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).",
      "correctAnswerAr": "يكون المتغيران $X$ و $Y$ مفصولين اتجاهياً (d-separated) بمجموعة المشاهدات $Z$ إذا أغلقت كل المسارات بينهما؛ وفي البنية التصادمية ($A \\to C \\leftarrow B$)، يكون $A$ و $B$ مستقلين مبدئياً لكنهما يصبحان مرتبطين شرطياً عند معرفة $C$.",
      "correctIndex": 0,
      "explanationEn": "Analytical Derivation & Properties: Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يكون المتغيران $X$ و $Y$ مفصولين اتجاهياً (d-separated) بمجموعة المشاهدات $Z$ إذا أغلقت كل المسارات بينهما؛ وفي البنية التصادمية ($A \\to C \\leftarrow B$)، يكون $A$ و $B$ مستقلين مبدئياً لكنهما يصبحان مرتبطين شرطياً عند معرفة $C$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Bayesian Networks, Directed Acyclic Graphs & D-Separation.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يكون المتغيران $X$ و $Y$ مفصولين اتجاهياً (d-separated) بمجموعة المشاهدات $Z$ إذا أغلقت كل المسارات بينهما؛ وفي البنية التصادمية ($A \\to C \\leftarrow B$)، يكون $A$ و $B$ مستقلين مبدئياً لكنهما يصبحان مرتبطين شرطياً عند معرفة $C$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch1_med_41",
      "titleEn": "[MEDIUM] Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models - Analysis 41",
      "titleAr": "[مستوى متوسط] خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs) - تحليل 41",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models, what is the precise analytical formulation or operative rule? (Item 41)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 41)",
      "optionsEn": [
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تتناوب خوارزمية EM بين خطوة التوقع E (حساب المسؤوليات اللاحقة $\\gamma_{ik}$) وخطوة التعظيم M (تحديث المعاملات $\\mu_k$ و $\\Sigma_k$ و $\\pi_k$ بالاعتماد على المسؤوليات المحسوبة).",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).",
      "correctAnswerEn": "The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).",
      "correctAnswerAr": "تتناوب خوارزمية EM بين خطوة التوقع E (حساب المسؤوليات اللاحقة $\\gamma_{ik}$) وخطوة التعظيم M (تحديث المعاملات $\\mu_k$ و $\\Sigma_k$ و $\\pi_k$ بالاعتماد على المسؤوليات المحسوبة).",
      "correctIndex": 1,
      "explanationEn": "Analytical Derivation & Properties: The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تتناوب خوارزمية EM بين خطوة التوقع E (حساب المسؤوليات اللاحقة $\\gamma_{ik}$) وخطوة التعظيم M (تحديث المعاملات $\\mu_k$ و $\\Sigma_k$ و $\\pi_k$ بالاعتماد على المسؤوليات المحسوبة).",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تتناوب خوارزمية EM بين خطوة التوقع E (حساب المسؤوليات اللاحقة $\\gamma_{ik}$) وخطوة التعظيم M (تحديث المعاملات $\\mu_k$ و $\\Sigma_k$ و $\\pi_k$ بالاعتماد على المسؤوليات المحسوبة).."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch1_med_42",
      "titleEn": "[MEDIUM] Variational Inference & Evidence Lower Bound (ELBO) Derivation - Analysis 42",
      "titleAr": "[مستوى متوسط] الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO) - تحليل 42",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Variational Inference & Evidence Lower Bound (ELBO) Derivation, what is the precise analytical formulation or operative rule? (Item 42)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 42)",
      "optionsEn": [
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data."
      ],
      "optionsAr": [
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "يُشتق الحد الأدنى لدليل البيانات (ELBO) من متباينة ينسن: $\\ln p(x) \\ge \\mathbb{E}[\\ln p(x,z)] - \\mathbb{E}[\\ln q(z)] = \\text{ELBO}$، ويحقق المعادلة $\\ln p(x) = \\text{ELBO} + D_{KL}(q \\parallel p)$.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش."
      ],
      "correctAnswer": "The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.",
      "correctAnswerEn": "The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.",
      "correctAnswerAr": "يُشتق الحد الأدنى لدليل البيانات (ELBO) من متباينة ينسن: $\\ln p(x) \\ge \\mathbb{E}[\\ln p(x,z)] - \\mathbb{E}[\\ln q(z)] = \\text{ELBO}$، ويحقق المعادلة $\\ln p(x) = \\text{ELBO} + D_{KL}(q \\parallel p)$.",
      "correctIndex": 2,
      "explanationEn": "Analytical Derivation & Properties: The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يُشتق الحد الأدنى لدليل البيانات (ELBO) من متباينة ينسن: $\\ln p(x) \\ge \\mathbb{E}[\\ln p(x,z)] - \\mathbb{E}[\\ln q(z)] = \\text{ELBO}$، ويحقق المعادلة $\\ln p(x) = \\text{ELBO} + D_{KL}(q \\parallel p)$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Variational Inference & Evidence Lower Bound (ELBO) Derivation.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يُشتق الحد الأدنى لدليل البيانات (ELBO) من متباينة ينسن: $\\ln p(x) \\ge \\mathbb{E}[\\ln p(x,z)] - \\mathbb{E}[\\ln q(z)] = \\text{ELBO}$، ويحقق المعادلة $\\ln p(x) = \\text{ELBO} + D_{KL}(q \\parallel p)$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch1_med_43",
      "titleEn": "[MEDIUM] Bayesian Networks, Directed Acyclic Graphs & D-Separation - Analysis 43",
      "titleAr": "[مستوى متوسط] شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation) - تحليل 43",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Bayesian Networks, Directed Acyclic Graphs & D-Separation, what is the precise analytical formulation or operative rule? (Item 43)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 43)",
      "optionsEn": [
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away)."
      ],
      "optionsAr": [
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "يكون المتغيران $X$ و $Y$ مفصولين اتجاهياً (d-separated) بمجموعة المشاهدات $Z$ إذا أغلقت كل المسارات بينهما؛ وفي البنية التصادمية ($A \\to C \\leftarrow B$)، يكون $A$ و $B$ مستقلين مبدئياً لكنهما يصبحان مرتبطين شرطياً عند معرفة $C$."
      ],
      "correctAnswer": "Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).",
      "correctAnswerEn": "Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).",
      "correctAnswerAr": "يكون المتغيران $X$ و $Y$ مفصولين اتجاهياً (d-separated) بمجموعة المشاهدات $Z$ إذا أغلقت كل المسارات بينهما؛ وفي البنية التصادمية ($A \\to C \\leftarrow B$)، يكون $A$ و $B$ مستقلين مبدئياً لكنهما يصبحان مرتبطين شرطياً عند معرفة $C$.",
      "correctIndex": 3,
      "explanationEn": "Analytical Derivation & Properties: Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يكون المتغيران $X$ و $Y$ مفصولين اتجاهياً (d-separated) بمجموعة المشاهدات $Z$ إذا أغلقت كل المسارات بينهما؛ وفي البنية التصادمية ($A \\to C \\leftarrow B$)، يكون $A$ و $B$ مستقلين مبدئياً لكنهما يصبحان مرتبطين شرطياً عند معرفة $C$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Bayesian Networks, Directed Acyclic Graphs & D-Separation.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يكون المتغيران $X$ و $Y$ مفصولين اتجاهياً (d-separated) بمجموعة المشاهدات $Z$ إذا أغلقت كل المسارات بينهما؛ وفي البنية التصادمية ($A \\to C \\leftarrow B$)، يكون $A$ و $B$ مستقلين مبدئياً لكنهما يصبحان مرتبطين شرطياً عند معرفة $C$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch1_med_44",
      "titleEn": "[MEDIUM] Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models - Analysis 44",
      "titleAr": "[مستوى متوسط] خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs) - تحليل 44",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models, what is the precise analytical formulation or operative rule? (Item 44)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 44)",
      "optionsEn": [
        "The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).",
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تتناوب خوارزمية EM بين خطوة التوقع E (حساب المسؤوليات اللاحقة $\\gamma_{ik}$) وخطوة التعظيم M (تحديث المعاملات $\\mu_k$ و $\\Sigma_k$ و $\\pi_k$ بالاعتماد على المسؤوليات المحسوبة).",
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).",
      "correctAnswerEn": "The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).",
      "correctAnswerAr": "تتناوب خوارزمية EM بين خطوة التوقع E (حساب المسؤوليات اللاحقة $\\gamma_{ik}$) وخطوة التعظيم M (تحديث المعاملات $\\mu_k$ و $\\Sigma_k$ و $\\pi_k$ بالاعتماد على المسؤوليات المحسوبة).",
      "correctIndex": 0,
      "explanationEn": "Analytical Derivation & Properties: The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تتناوب خوارزمية EM بين خطوة التوقع E (حساب المسؤوليات اللاحقة $\\gamma_{ik}$) وخطوة التعظيم M (تحديث المعاملات $\\mu_k$ و $\\Sigma_k$ و $\\pi_k$ بالاعتماد على المسؤوليات المحسوبة).",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تتناوب خوارزمية EM بين خطوة التوقع E (حساب المسؤوليات اللاحقة $\\gamma_{ik}$) وخطوة التعظيم M (تحديث المعاملات $\\mu_k$ و $\\Sigma_k$ و $\\pi_k$ بالاعتماد على المسؤوليات المحسوبة).."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch1_med_45",
      "titleEn": "[MEDIUM] Variational Inference & Evidence Lower Bound (ELBO) Derivation - Analysis 45",
      "titleAr": "[مستوى متوسط] الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO) - تحليل 45",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Variational Inference & Evidence Lower Bound (ELBO) Derivation, what is the precise analytical formulation or operative rule? (Item 45)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 45)",
      "optionsEn": [
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.",
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate."
      ],
      "optionsAr": [
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يُشتق الحد الأدنى لدليل البيانات (ELBO) من متباينة ينسن: $\\ln p(x) \\ge \\mathbb{E}[\\ln p(x,z)] - \\mathbb{E}[\\ln q(z)] = \\text{ELBO}$، ويحقق المعادلة $\\ln p(x) = \\text{ELBO} + D_{KL}(q \\parallel p)$.",
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم."
      ],
      "correctAnswer": "The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.",
      "correctAnswerEn": "The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.",
      "correctAnswerAr": "يُشتق الحد الأدنى لدليل البيانات (ELBO) من متباينة ينسن: $\\ln p(x) \\ge \\mathbb{E}[\\ln p(x,z)] - \\mathbb{E}[\\ln q(z)] = \\text{ELBO}$، ويحقق المعادلة $\\ln p(x) = \\text{ELBO} + D_{KL}(q \\parallel p)$.",
      "correctIndex": 1,
      "explanationEn": "Analytical Derivation & Properties: The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يُشتق الحد الأدنى لدليل البيانات (ELBO) من متباينة ينسن: $\\ln p(x) \\ge \\mathbb{E}[\\ln p(x,z)] - \\mathbb{E}[\\ln q(z)] = \\text{ELBO}$، ويحقق المعادلة $\\ln p(x) = \\text{ELBO} + D_{KL}(q \\parallel p)$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Variational Inference & Evidence Lower Bound (ELBO) Derivation.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يُشتق الحد الأدنى لدليل البيانات (ELBO) من متباينة ينسن: $\\ln p(x) \\ge \\mathbb{E}[\\ln p(x,z)] - \\mathbb{E}[\\ln q(z)] = \\text{ELBO}$، ويحقق المعادلة $\\ln p(x) = \\text{ELBO} + D_{KL}(q \\parallel p)$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch1_med_46",
      "titleEn": "[MEDIUM] Bayesian Networks, Directed Acyclic Graphs & D-Separation - Analysis 46",
      "titleAr": "[مستوى متوسط] شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation) - تحليل 46",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Bayesian Networks, Directed Acyclic Graphs & D-Separation, what is the precise analytical formulation or operative rule? (Item 46)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 46)",
      "optionsEn": [
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).",
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves."
      ],
      "optionsAr": [
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "يكون المتغيران $X$ و $Y$ مفصولين اتجاهياً (d-separated) بمجموعة المشاهدات $Z$ إذا أغلقت كل المسارات بينهما؛ وفي البنية التصادمية ($A \\to C \\leftarrow B$)، يكون $A$ و $B$ مستقلين مبدئياً لكنهما يصبحان مرتبطين شرطياً عند معرفة $C$.",
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية."
      ],
      "correctAnswer": "Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).",
      "correctAnswerEn": "Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).",
      "correctAnswerAr": "يكون المتغيران $X$ و $Y$ مفصولين اتجاهياً (d-separated) بمجموعة المشاهدات $Z$ إذا أغلقت كل المسارات بينهما؛ وفي البنية التصادمية ($A \\to C \\leftarrow B$)، يكون $A$ و $B$ مستقلين مبدئياً لكنهما يصبحان مرتبطين شرطياً عند معرفة $C$.",
      "correctIndex": 2,
      "explanationEn": "Analytical Derivation & Properties: Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يكون المتغيران $X$ و $Y$ مفصولين اتجاهياً (d-separated) بمجموعة المشاهدات $Z$ إذا أغلقت كل المسارات بينهما؛ وفي البنية التصادمية ($A \\to C \\leftarrow B$)، يكون $A$ و $B$ مستقلين مبدئياً لكنهما يصبحان مرتبطين شرطياً عند معرفة $C$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Bayesian Networks, Directed Acyclic Graphs & D-Separation.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يكون المتغيران $X$ و $Y$ مفصولين اتجاهياً (d-separated) بمجموعة المشاهدات $Z$ إذا أغلقت كل المسارات بينهما؛ وفي البنية التصادمية ($A \\to C \\leftarrow B$)، يكون $A$ و $B$ مستقلين مبدئياً لكنهما يصبحان مرتبطين شرطياً عند معرفة $C$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch1_med_47",
      "titleEn": "[MEDIUM] Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models - Analysis 47",
      "titleAr": "[مستوى متوسط] خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs) - تحليل 47",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models, what is the precise analytical formulation or operative rule? (Item 47)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 47)",
      "optionsEn": [
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities)."
      ],
      "optionsAr": [
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "تتناوب خوارزمية EM بين خطوة التوقع E (حساب المسؤوليات اللاحقة $\\gamma_{ik}$) وخطوة التعظيم M (تحديث المعاملات $\\mu_k$ و $\\Sigma_k$ و $\\pi_k$ بالاعتماد على المسؤوليات المحسوبة)."
      ],
      "correctAnswer": "The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).",
      "correctAnswerEn": "The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).",
      "correctAnswerAr": "تتناوب خوارزمية EM بين خطوة التوقع E (حساب المسؤوليات اللاحقة $\\gamma_{ik}$) وخطوة التعظيم M (تحديث المعاملات $\\mu_k$ و $\\Sigma_k$ و $\\pi_k$ بالاعتماد على المسؤوليات المحسوبة).",
      "correctIndex": 3,
      "explanationEn": "Analytical Derivation & Properties: The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تتناوب خوارزمية EM بين خطوة التوقع E (حساب المسؤوليات اللاحقة $\\gamma_{ik}$) وخطوة التعظيم M (تحديث المعاملات $\\mu_k$ و $\\Sigma_k$ و $\\pi_k$ بالاعتماد على المسؤوليات المحسوبة).",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تتناوب خوارزمية EM بين خطوة التوقع E (حساب المسؤوليات اللاحقة $\\gamma_{ik}$) وخطوة التعظيم M (تحديث المعاملات $\\mu_k$ و $\\Sigma_k$ و $\\pi_k$ بالاعتماد على المسؤوليات المحسوبة).."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch1_med_48",
      "titleEn": "[MEDIUM] Variational Inference & Evidence Lower Bound (ELBO) Derivation - Analysis 48",
      "titleAr": "[مستوى متوسط] الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO) - تحليل 48",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Variational Inference & Evidence Lower Bound (ELBO) Derivation, what is the precise analytical formulation or operative rule? (Item 48)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 48)",
      "optionsEn": [
        "The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation."
      ],
      "optionsAr": [
        "يُشتق الحد الأدنى لدليل البيانات (ELBO) من متباينة ينسن: $\\ln p(x) \\ge \\mathbb{E}[\\ln p(x,z)] - \\mathbb{E}[\\ln q(z)] = \\text{ELBO}$، ويحقق المعادلة $\\ln p(x) = \\text{ELBO} + D_{KL}(q \\parallel p)$.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي."
      ],
      "correctAnswer": "The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.",
      "correctAnswerEn": "The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.",
      "correctAnswerAr": "يُشتق الحد الأدنى لدليل البيانات (ELBO) من متباينة ينسن: $\\ln p(x) \\ge \\mathbb{E}[\\ln p(x,z)] - \\mathbb{E}[\\ln q(z)] = \\text{ELBO}$، ويحقق المعادلة $\\ln p(x) = \\text{ELBO} + D_{KL}(q \\parallel p)$.",
      "correctIndex": 0,
      "explanationEn": "Analytical Derivation & Properties: The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يُشتق الحد الأدنى لدليل البيانات (ELBO) من متباينة ينسن: $\\ln p(x) \\ge \\mathbb{E}[\\ln p(x,z)] - \\mathbb{E}[\\ln q(z)] = \\text{ELBO}$، ويحقق المعادلة $\\ln p(x) = \\text{ELBO} + D_{KL}(q \\parallel p)$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Variational Inference & Evidence Lower Bound (ELBO) Derivation.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يُشتق الحد الأدنى لدليل البيانات (ELBO) من متباينة ينسن: $\\ln p(x) \\ge \\mathbb{E}[\\ln p(x,z)] - \\mathbb{E}[\\ln q(z)] = \\text{ELBO}$، ويحقق المعادلة $\\ln p(x) = \\text{ELBO} + D_{KL}(q \\parallel p)$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch1_med_49",
      "titleEn": "[MEDIUM] Bayesian Networks, Directed Acyclic Graphs & D-Separation - Analysis 49",
      "titleAr": "[مستوى متوسط] شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation) - تحليل 49",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Bayesian Networks, Directed Acyclic Graphs & D-Separation, what is the precise analytical formulation or operative rule? (Item 49)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 49)",
      "optionsEn": [
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent."
      ],
      "optionsAr": [
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "يكون المتغيران $X$ و $Y$ مفصولين اتجاهياً (d-separated) بمجموعة المشاهدات $Z$ إذا أغلقت كل المسارات بينهما؛ وفي البنية التصادمية ($A \\to C \\leftarrow B$)، يكون $A$ و $B$ مستقلين مبدئياً لكنهما يصبحان مرتبطين شرطياً عند معرفة $C$.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة."
      ],
      "correctAnswer": "Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).",
      "correctAnswerEn": "Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).",
      "correctAnswerAr": "يكون المتغيران $X$ و $Y$ مفصولين اتجاهياً (d-separated) بمجموعة المشاهدات $Z$ إذا أغلقت كل المسارات بينهما؛ وفي البنية التصادمية ($A \\to C \\leftarrow B$)، يكون $A$ و $B$ مستقلين مبدئياً لكنهما يصبحان مرتبطين شرطياً عند معرفة $C$.",
      "correctIndex": 1,
      "explanationEn": "Analytical Derivation & Properties: Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يكون المتغيران $X$ و $Y$ مفصولين اتجاهياً (d-separated) بمجموعة المشاهدات $Z$ إذا أغلقت كل المسارات بينهما؛ وفي البنية التصادمية ($A \\to C \\leftarrow B$)، يكون $A$ و $B$ مستقلين مبدئياً لكنهما يصبحان مرتبطين شرطياً عند معرفة $C$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Bayesian Networks, Directed Acyclic Graphs & D-Separation.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يكون المتغيران $X$ و $Y$ مفصولين اتجاهياً (d-separated) بمجموعة المشاهدات $Z$ إذا أغلقت كل المسارات بينهما؛ وفي البنية التصادمية ($A \\to C \\leftarrow B$)، يكون $A$ و $B$ مستقلين مبدئياً لكنهما يصبحان مرتبطين شرطياً عند معرفة $C$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch1_med_50",
      "titleEn": "[MEDIUM] Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models - Analysis 50",
      "titleAr": "[مستوى متوسط] خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs) - تحليل 50",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models, what is the precise analytical formulation or operative rule? (Item 50)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 50)",
      "optionsEn": [
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تتناوب خوارزمية EM بين خطوة التوقع E (حساب المسؤوليات اللاحقة $\\gamma_{ik}$) وخطوة التعظيم M (تحديث المعاملات $\\mu_k$ و $\\Sigma_k$ و $\\pi_k$ بالاعتماد على المسؤوليات المحسوبة).",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).",
      "correctAnswerEn": "The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).",
      "correctAnswerAr": "تتناوب خوارزمية EM بين خطوة التوقع E (حساب المسؤوليات اللاحقة $\\gamma_{ik}$) وخطوة التعظيم M (تحديث المعاملات $\\mu_k$ و $\\Sigma_k$ و $\\pi_k$ بالاعتماد على المسؤوليات المحسوبة).",
      "correctIndex": 2,
      "explanationEn": "Analytical Derivation & Properties: The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تتناوب خوارزمية EM بين خطوة التوقع E (حساب المسؤوليات اللاحقة $\\gamma_{ik}$) وخطوة التعظيم M (تحديث المعاملات $\\mu_k$ و $\\Sigma_k$ و $\\pi_k$ بالاعتماد على المسؤوليات المحسوبة).",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تتناوب خوارزمية EM بين خطوة التوقع E (حساب المسؤوليات اللاحقة $\\gamma_{ik}$) وخطوة التعظيم M (تحديث المعاملات $\\mu_k$ و $\\Sigma_k$ و $\\pi_k$ بالاعتماد على المسؤوليات المحسوبة).."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch1_med_51",
      "titleEn": "[MEDIUM] Variational Inference & Evidence Lower Bound (ELBO) Derivation - Analysis 51",
      "titleAr": "[مستوى متوسط] الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO) - تحليل 51",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Variational Inference & Evidence Lower Bound (ELBO) Derivation, what is the precise analytical formulation or operative rule? (Item 51)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 51)",
      "optionsEn": [
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$."
      ],
      "optionsAr": [
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "يُشتق الحد الأدنى لدليل البيانات (ELBO) من متباينة ينسن: $\\ln p(x) \\ge \\mathbb{E}[\\ln p(x,z)] - \\mathbb{E}[\\ln q(z)] = \\text{ELBO}$، ويحقق المعادلة $\\ln p(x) = \\text{ELBO} + D_{KL}(q \\parallel p)$."
      ],
      "correctAnswer": "The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.",
      "correctAnswerEn": "The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.",
      "correctAnswerAr": "يُشتق الحد الأدنى لدليل البيانات (ELBO) من متباينة ينسن: $\\ln p(x) \\ge \\mathbb{E}[\\ln p(x,z)] - \\mathbb{E}[\\ln q(z)] = \\text{ELBO}$، ويحقق المعادلة $\\ln p(x) = \\text{ELBO} + D_{KL}(q \\parallel p)$.",
      "correctIndex": 3,
      "explanationEn": "Analytical Derivation & Properties: The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يُشتق الحد الأدنى لدليل البيانات (ELBO) من متباينة ينسن: $\\ln p(x) \\ge \\mathbb{E}[\\ln p(x,z)] - \\mathbb{E}[\\ln q(z)] = \\text{ELBO}$، ويحقق المعادلة $\\ln p(x) = \\text{ELBO} + D_{KL}(q \\parallel p)$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Variational Inference & Evidence Lower Bound (ELBO) Derivation.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يُشتق الحد الأدنى لدليل البيانات (ELBO) من متباينة ينسن: $\\ln p(x) \\ge \\mathbb{E}[\\ln p(x,z)] - \\mathbb{E}[\\ln q(z)] = \\text{ELBO}$، ويحقق المعادلة $\\ln p(x) = \\text{ELBO} + D_{KL}(q \\parallel p)$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch1_med_52",
      "titleEn": "[MEDIUM] Bayesian Networks, Directed Acyclic Graphs & D-Separation - Analysis 52",
      "titleAr": "[مستوى متوسط] شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation) - تحليل 52",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Bayesian Networks, Directed Acyclic Graphs & D-Separation, what is the precise analytical formulation or operative rule? (Item 52)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 52)",
      "optionsEn": [
        "Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance."
      ],
      "optionsAr": [
        "يكون المتغيران $X$ و $Y$ مفصولين اتجاهياً (d-separated) بمجموعة المشاهدات $Z$ إذا أغلقت كل المسارات بينهما؛ وفي البنية التصادمية ($A \\to C \\leftarrow B$)، يكون $A$ و $B$ مستقلين مبدئياً لكنهما يصبحان مرتبطين شرطياً عند معرفة $C$.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر."
      ],
      "correctAnswer": "Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).",
      "correctAnswerEn": "Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).",
      "correctAnswerAr": "يكون المتغيران $X$ و $Y$ مفصولين اتجاهياً (d-separated) بمجموعة المشاهدات $Z$ إذا أغلقت كل المسارات بينهما؛ وفي البنية التصادمية ($A \\to C \\leftarrow B$)، يكون $A$ و $B$ مستقلين مبدئياً لكنهما يصبحان مرتبطين شرطياً عند معرفة $C$.",
      "correctIndex": 0,
      "explanationEn": "Analytical Derivation & Properties: Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يكون المتغيران $X$ و $Y$ مفصولين اتجاهياً (d-separated) بمجموعة المشاهدات $Z$ إذا أغلقت كل المسارات بينهما؛ وفي البنية التصادمية ($A \\to C \\leftarrow B$)، يكون $A$ و $B$ مستقلين مبدئياً لكنهما يصبحان مرتبطين شرطياً عند معرفة $C$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Bayesian Networks, Directed Acyclic Graphs & D-Separation.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يكون المتغيران $X$ و $Y$ مفصولين اتجاهياً (d-separated) بمجموعة المشاهدات $Z$ إذا أغلقت كل المسارات بينهما؛ وفي البنية التصادمية ($A \\to C \\leftarrow B$)، يكون $A$ و $B$ مستقلين مبدئياً لكنهما يصبحان مرتبطين شرطياً عند معرفة $C$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch1_med_53",
      "titleEn": "[MEDIUM] Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models - Analysis 53",
      "titleAr": "[مستوى متوسط] خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs) - تحليل 53",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models, what is the precise analytical formulation or operative rule? (Item 53)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 53)",
      "optionsEn": [
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "تتناوب خوارزمية EM بين خطوة التوقع E (حساب المسؤوليات اللاحقة $\\gamma_{ik}$) وخطوة التعظيم M (تحديث المعاملات $\\mu_k$ و $\\Sigma_k$ و $\\pi_k$ بالاعتماد على المسؤوليات المحسوبة).",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).",
      "correctAnswerEn": "The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).",
      "correctAnswerAr": "تتناوب خوارزمية EM بين خطوة التوقع E (حساب المسؤوليات اللاحقة $\\gamma_{ik}$) وخطوة التعظيم M (تحديث المعاملات $\\mu_k$ و $\\Sigma_k$ و $\\pi_k$ بالاعتماد على المسؤوليات المحسوبة).",
      "correctIndex": 1,
      "explanationEn": "Analytical Derivation & Properties: The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تتناوب خوارزمية EM بين خطوة التوقع E (حساب المسؤوليات اللاحقة $\\gamma_{ik}$) وخطوة التعظيم M (تحديث المعاملات $\\mu_k$ و $\\Sigma_k$ و $\\pi_k$ بالاعتماد على المسؤوليات المحسوبة).",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تتناوب خوارزمية EM بين خطوة التوقع E (حساب المسؤوليات اللاحقة $\\gamma_{ik}$) وخطوة التعظيم M (تحديث المعاملات $\\mu_k$ و $\\Sigma_k$ و $\\pi_k$ بالاعتماد على المسؤوليات المحسوبة).."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch1_med_54",
      "titleEn": "[MEDIUM] Variational Inference & Evidence Lower Bound (ELBO) Derivation - Analysis 54",
      "titleAr": "[مستوى متوسط] الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO) - تحليل 54",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Variational Inference & Evidence Lower Bound (ELBO) Derivation, what is the precise analytical formulation or operative rule? (Item 54)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 54)",
      "optionsEn": [
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs."
      ],
      "optionsAr": [
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "يُشتق الحد الأدنى لدليل البيانات (ELBO) من متباينة ينسن: $\\ln p(x) \\ge \\mathbb{E}[\\ln p(x,z)] - \\mathbb{E}[\\ln q(z)] = \\text{ELBO}$، ويحقق المعادلة $\\ln p(x) = \\text{ELBO} + D_{KL}(q \\parallel p)$.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة."
      ],
      "correctAnswer": "The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.",
      "correctAnswerEn": "The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.",
      "correctAnswerAr": "يُشتق الحد الأدنى لدليل البيانات (ELBO) من متباينة ينسن: $\\ln p(x) \\ge \\mathbb{E}[\\ln p(x,z)] - \\mathbb{E}[\\ln q(z)] = \\text{ELBO}$، ويحقق المعادلة $\\ln p(x) = \\text{ELBO} + D_{KL}(q \\parallel p)$.",
      "correctIndex": 2,
      "explanationEn": "Analytical Derivation & Properties: The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يُشتق الحد الأدنى لدليل البيانات (ELBO) من متباينة ينسن: $\\ln p(x) \\ge \\mathbb{E}[\\ln p(x,z)] - \\mathbb{E}[\\ln q(z)] = \\text{ELBO}$، ويحقق المعادلة $\\ln p(x) = \\text{ELBO} + D_{KL}(q \\parallel p)$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Variational Inference & Evidence Lower Bound (ELBO) Derivation.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يُشتق الحد الأدنى لدليل البيانات (ELBO) من متباينة ينسن: $\\ln p(x) \\ge \\mathbb{E}[\\ln p(x,z)] - \\mathbb{E}[\\ln q(z)] = \\text{ELBO}$، ويحقق المعادلة $\\ln p(x) = \\text{ELBO} + D_{KL}(q \\parallel p)$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch1_med_55",
      "titleEn": "[MEDIUM] Bayesian Networks, Directed Acyclic Graphs & D-Separation - Analysis 55",
      "titleAr": "[مستوى متوسط] شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation) - تحليل 55",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Bayesian Networks, Directed Acyclic Graphs & D-Separation, what is the precise analytical formulation or operative rule? (Item 55)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 55)",
      "optionsEn": [
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away)."
      ],
      "optionsAr": [
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "يكون المتغيران $X$ و $Y$ مفصولين اتجاهياً (d-separated) بمجموعة المشاهدات $Z$ إذا أغلقت كل المسارات بينهما؛ وفي البنية التصادمية ($A \\to C \\leftarrow B$)، يكون $A$ و $B$ مستقلين مبدئياً لكنهما يصبحان مرتبطين شرطياً عند معرفة $C$."
      ],
      "correctAnswer": "Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).",
      "correctAnswerEn": "Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).",
      "correctAnswerAr": "يكون المتغيران $X$ و $Y$ مفصولين اتجاهياً (d-separated) بمجموعة المشاهدات $Z$ إذا أغلقت كل المسارات بينهما؛ وفي البنية التصادمية ($A \\to C \\leftarrow B$)، يكون $A$ و $B$ مستقلين مبدئياً لكنهما يصبحان مرتبطين شرطياً عند معرفة $C$.",
      "correctIndex": 3,
      "explanationEn": "Analytical Derivation & Properties: Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يكون المتغيران $X$ و $Y$ مفصولين اتجاهياً (d-separated) بمجموعة المشاهدات $Z$ إذا أغلقت كل المسارات بينهما؛ وفي البنية التصادمية ($A \\to C \\leftarrow B$)، يكون $A$ و $B$ مستقلين مبدئياً لكنهما يصبحان مرتبطين شرطياً عند معرفة $C$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Bayesian Networks, Directed Acyclic Graphs & D-Separation.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يكون المتغيران $X$ و $Y$ مفصولين اتجاهياً (d-separated) بمجموعة المشاهدات $Z$ إذا أغلقت كل المسارات بينهما؛ وفي البنية التصادمية ($A \\to C \\leftarrow B$)، يكون $A$ و $B$ مستقلين مبدئياً لكنهما يصبحان مرتبطين شرطياً عند معرفة $C$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch1_med_56",
      "titleEn": "[MEDIUM] Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models - Analysis 56",
      "titleAr": "[مستوى متوسط] خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs) - تحليل 56",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models, what is the precise analytical formulation or operative rule? (Item 56)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 56)",
      "optionsEn": [
        "The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).",
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "تتناوب خوارزمية EM بين خطوة التوقع E (حساب المسؤوليات اللاحقة $\\gamma_{ik}$) وخطوة التعظيم M (تحديث المعاملات $\\mu_k$ و $\\Sigma_k$ و $\\pi_k$ بالاعتماد على المسؤوليات المحسوبة).",
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).",
      "correctAnswerEn": "The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).",
      "correctAnswerAr": "تتناوب خوارزمية EM بين خطوة التوقع E (حساب المسؤوليات اللاحقة $\\gamma_{ik}$) وخطوة التعظيم M (تحديث المعاملات $\\mu_k$ و $\\Sigma_k$ و $\\pi_k$ بالاعتماد على المسؤوليات المحسوبة).",
      "correctIndex": 0,
      "explanationEn": "Analytical Derivation & Properties: The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تتناوب خوارزمية EM بين خطوة التوقع E (حساب المسؤوليات اللاحقة $\\gamma_{ik}$) وخطوة التعظيم M (تحديث المعاملات $\\mu_k$ و $\\Sigma_k$ و $\\pi_k$ بالاعتماد على المسؤوليات المحسوبة).",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تتناوب خوارزمية EM بين خطوة التوقع E (حساب المسؤوليات اللاحقة $\\gamma_{ik}$) وخطوة التعظيم M (تحديث المعاملات $\\mu_k$ و $\\Sigma_k$ و $\\pi_k$ بالاعتماد على المسؤوليات المحسوبة).."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch1_med_57",
      "titleEn": "[MEDIUM] Variational Inference & Evidence Lower Bound (ELBO) Derivation - Analysis 57",
      "titleAr": "[مستوى متوسط] الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO) - تحليل 57",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Variational Inference & Evidence Lower Bound (ELBO) Derivation, what is the precise analytical formulation or operative rule? (Item 57)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 57)",
      "optionsEn": [
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.",
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data."
      ],
      "optionsAr": [
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "يُشتق الحد الأدنى لدليل البيانات (ELBO) من متباينة ينسن: $\\ln p(x) \\ge \\mathbb{E}[\\ln p(x,z)] - \\mathbb{E}[\\ln q(z)] = \\text{ELBO}$، ويحقق المعادلة $\\ln p(x) = \\text{ELBO} + D_{KL}(q \\parallel p)$.",
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش."
      ],
      "correctAnswer": "The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.",
      "correctAnswerEn": "The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.",
      "correctAnswerAr": "يُشتق الحد الأدنى لدليل البيانات (ELBO) من متباينة ينسن: $\\ln p(x) \\ge \\mathbb{E}[\\ln p(x,z)] - \\mathbb{E}[\\ln q(z)] = \\text{ELBO}$، ويحقق المعادلة $\\ln p(x) = \\text{ELBO} + D_{KL}(q \\parallel p)$.",
      "correctIndex": 1,
      "explanationEn": "Analytical Derivation & Properties: The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يُشتق الحد الأدنى لدليل البيانات (ELBO) من متباينة ينسن: $\\ln p(x) \\ge \\mathbb{E}[\\ln p(x,z)] - \\mathbb{E}[\\ln q(z)] = \\text{ELBO}$، ويحقق المعادلة $\\ln p(x) = \\text{ELBO} + D_{KL}(q \\parallel p)$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Variational Inference & Evidence Lower Bound (ELBO) Derivation.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يُشتق الحد الأدنى لدليل البيانات (ELBO) من متباينة ينسن: $\\ln p(x) \\ge \\mathbb{E}[\\ln p(x,z)] - \\mathbb{E}[\\ln q(z)] = \\text{ELBO}$، ويحقق المعادلة $\\ln p(x) = \\text{ELBO} + D_{KL}(q \\parallel p)$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch1_med_58",
      "titleEn": "[MEDIUM] Bayesian Networks, Directed Acyclic Graphs & D-Separation - Analysis 58",
      "titleAr": "[مستوى متوسط] شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation) - تحليل 58",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Bayesian Networks, Directed Acyclic Graphs & D-Separation, what is the precise analytical formulation or operative rule? (Item 58)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 58)",
      "optionsEn": [
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).",
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan."
      ],
      "optionsAr": [
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "يكون المتغيران $X$ و $Y$ مفصولين اتجاهياً (d-separated) بمجموعة المشاهدات $Z$ إذا أغلقت كل المسارات بينهما؛ وفي البنية التصادمية ($A \\to C \\leftarrow B$)، يكون $A$ و $B$ مستقلين مبدئياً لكنهما يصبحان مرتبطين شرطياً عند معرفة $C$.",
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG)."
      ],
      "correctAnswer": "Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).",
      "correctAnswerEn": "Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).",
      "correctAnswerAr": "يكون المتغيران $X$ و $Y$ مفصولين اتجاهياً (d-separated) بمجموعة المشاهدات $Z$ إذا أغلقت كل المسارات بينهما؛ وفي البنية التصادمية ($A \\to C \\leftarrow B$)، يكون $A$ و $B$ مستقلين مبدئياً لكنهما يصبحان مرتبطين شرطياً عند معرفة $C$.",
      "correctIndex": 2,
      "explanationEn": "Analytical Derivation & Properties: Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: يكون المتغيران $X$ و $Y$ مفصولين اتجاهياً (d-separated) بمجموعة المشاهدات $Z$ إذا أغلقت كل المسارات بينهما؛ وفي البنية التصادمية ($A \\to C \\leftarrow B$)، يكون $A$ و $B$ مستقلين مبدئياً لكنهما يصبحان مرتبطين شرطياً عند معرفة $C$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Bayesian Networks, Directed Acyclic Graphs & D-Separation.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: يكون المتغيران $X$ و $Y$ مفصولين اتجاهياً (d-separated) بمجموعة المشاهدات $Z$ إذا أغلقت كل المسارات بينهما؛ وفي البنية التصادمية ($A \\to C \\leftarrow B$)، يكون $A$ و $B$ مستقلين مبدئياً لكنهما يصبحان مرتبطين شرطياً عند معرفة $C$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch1_med_59",
      "titleEn": "[MEDIUM] Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models - Analysis 59",
      "titleAr": "[مستوى متوسط] خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs) - تحليل 59",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models, what is the precise analytical formulation or operative rule? (Item 59)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 59)",
      "optionsEn": [
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities)."
      ],
      "optionsAr": [
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "تتناوب خوارزمية EM بين خطوة التوقع E (حساب المسؤوليات اللاحقة $\\gamma_{ik}$) وخطوة التعظيم M (تحديث المعاملات $\\mu_k$ و $\\Sigma_k$ و $\\pi_k$ بالاعتماد على المسؤوليات المحسوبة)."
      ],
      "correctAnswer": "The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).",
      "correctAnswerEn": "The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).",
      "correctAnswerAr": "تتناوب خوارزمية EM بين خطوة التوقع E (حساب المسؤوليات اللاحقة $\\gamma_{ik}$) وخطوة التعظيم M (تحديث المعاملات $\\mu_k$ و $\\Sigma_k$ و $\\pi_k$ بالاعتماد على المسؤوليات المحسوبة).",
      "correctIndex": 3,
      "explanationEn": "Analytical Derivation & Properties: The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تتناوب خوارزمية EM بين خطوة التوقع E (حساب المسؤوليات اللاحقة $\\gamma_{ik}$) وخطوة التعظيم M (تحديث المعاملات $\\mu_k$ و $\\Sigma_k$ و $\\pi_k$ بالاعتماد على المسؤوليات المحسوبة).",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تتناوب خوارزمية EM بين خطوة التوقع E (حساب المسؤوليات اللاحقة $\\gamma_{ik}$) وخطوة التعظيم M (تحديث المعاملات $\\mu_k$ و $\\Sigma_k$ و $\\pi_k$ بالاعتماد على المسؤوليات المحسوبة).."
      ],
      "difficulty": "medium"
    }
  ],
  "hots": [
    {
      "id": "egbac_ai_data_science_ch1_hots_1",
      "titleEn": "[HOTS] Bayesian Networks, Directed Acyclic Graphs & D-Separation - Evaluation 1",
      "titleAr": "[تفكير عليا] شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation) - تقييم 1",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Bayesian Networks, Directed Acyclic Graphs & D-Separation: (Problem 1)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation): (مسألة 1)",
      "optionsEn": [
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "في شبكة تشخيص طبي يسبب فيها المرض A والمرض B العَرَض C بصورة مستقلة، يؤدي ثبوت العَرَض C إلى نشوء ارتباط شرطي يجعل تأكيد المرض A يخفض احتمالية المرض B اللاحقة (ظاهرة التفسير البديل Explaining Away).",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).",
      "correctAnswerEn": "In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).",
      "correctAnswerAr": "في شبكة تشخيص طبي يسبب فيها المرض A والمرض B العَرَض C بصورة مستقلة، يؤدي ثبوت العَرَض C إلى نشوء ارتباط شرطي يجعل تأكيد المرض A يخفض احتمالية المرض B اللاحقة (ظاهرة التفسير البديل Explaining Away).",
      "correctIndex": 2,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في شبكة تشخيص طبي يسبب فيها المرض A والمرض B العَرَض C بصورة مستقلة، يؤدي ثبوت العَرَض C إلى نشوء ارتباط شرطي يجعل تأكيد المرض A يخفض احتمالية المرض B اللاحقة (ظاهرة التفسير البديل Explaining Away).",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Bayesian Networks, Directed Acyclic Graphs & D-Separation.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في شبكة تشخيص طبي يسبب فيها المرض A والمرض B العَرَض C بصورة مستقلة، يؤدي ثبوت العَرَض C إلى نشوء ارتباط شرطي يجعل تأكيد المرض A يخفض احتمالية المرض B اللاحقة (ظاهرة التفسير البديل Explaining Away).."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch1_hots_2",
      "titleEn": "[HOTS] Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models - Evaluation 2",
      "titleAr": "[تفكير عليا] خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs) - تقييم 2",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models: (Problem 2)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs): (مسألة 2)",
      "optionsEn": [
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2)."
      ],
      "optionsAr": [
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "لنموذج مزيج غاوسي ثنائي لتجميع قراءات أقمار صناعية، لعينة $x = 4.2$ باحتماليات مكونات $0.035$ و $0.231$ بأوزان متساوية $\\pi_1 = \\pi_2 = 0.5$، تبلغ المسؤولية اللاحقة للمكون الثاني $\\gamma_2 = \\frac{0.1155}{0.133} \\approx 0.868$ بثقة $86.8\\%$."
      ],
      "correctAnswer": "For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2).",
      "correctAnswerEn": "For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2).",
      "correctAnswerAr": "لنموذج مزيج غاوسي ثنائي لتجميع قراءات أقمار صناعية، لعينة $x = 4.2$ باحتماليات مكونات $0.035$ و $0.231$ بأوزان متساوية $\\pi_1 = \\pi_2 = 0.5$، تبلغ المسؤولية اللاحقة للمكون الثاني $\\gamma_2 = \\frac{0.1155}{0.133} \\approx 0.868$ بثقة $86.8\\%$.",
      "correctIndex": 3,
      "explanationEn": "Detailed Solution & Numerical Evaluation: For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2).",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: لنموذج مزيج غاوسي ثنائي لتجميع قراءات أقمار صناعية، لعينة $x = 4.2$ باحتماليات مكونات $0.035$ و $0.231$ بأوزان متساوية $\\pi_1 = \\pi_2 = 0.5$، تبلغ المسؤولية اللاحقة للمكون الثاني $\\gamma_2 = \\frac{0.1155}{0.133} \\approx 0.868$ بثقة $86.8\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2).."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: لنموذج مزيج غاوسي ثنائي لتجميع قراءات أقمار صناعية، لعينة $x = 4.2$ باحتماليات مكونات $0.035$ و $0.231$ بأوزان متساوية $\\pi_1 = \\pi_2 = 0.5$، تبلغ المسؤولية اللاحقة للمكون الثاني $\\gamma_2 = \\frac{0.1155}{0.133} \\approx 0.868$ بثقة $86.8\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch1_hots_3",
      "titleEn": "[HOTS] Variational Inference & Evidence Lower Bound (ELBO) Derivation - Evaluation 3",
      "titleAr": "[تفكير عليا] الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO) - تقييم 3",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Variational Inference & Evidence Lower Bound (ELBO) Derivation: (Problem 3)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO): (مسألة 3)",
      "optionsEn": [
        "Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "يؤدي تعظيم الحد الأدنى ELBO مباشرة إلى تصغير تباعد كولباك-ليبلر $D_{KL}$ لأن لوغاريتم دليل البيانات الهامشي $\\ln p(x)$ ثابت بالنسبة للمعاملات المتغيرة $\\phi$، مما يضمن أفضل تقريب للتوزيع الحقيقي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior.",
      "correctAnswerEn": "Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior.",
      "correctAnswerAr": "يؤدي تعظيم الحد الأدنى ELBO مباشرة إلى تصغير تباعد كولباك-ليبلر $D_{KL}$ لأن لوغاريتم دليل البيانات الهامشي $\\ln p(x)$ ثابت بالنسبة للمعاملات المتغيرة $\\phi$، مما يضمن أفضل تقريب للتوزيع الحقيقي.",
      "correctIndex": 0,
      "explanationEn": "Detailed Solution & Numerical Evaluation: Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: يؤدي تعظيم الحد الأدنى ELBO مباشرة إلى تصغير تباعد كولباك-ليبلر $D_{KL}$ لأن لوغاريتم دليل البيانات الهامشي $\\ln p(x)$ ثابت بالنسبة للمعاملات المتغيرة $\\phi$، مما يضمن أفضل تقريب للتوزيع الحقيقي.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Variational Inference & Evidence Lower Bound (ELBO) Derivation.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: يؤدي تعظيم الحد الأدنى ELBO مباشرة إلى تصغير تباعد كولباك-ليبلر $D_{KL}$ لأن لوغاريتم دليل البيانات الهامشي $\\ln p(x)$ ثابت بالنسبة للمعاملات المتغيرة $\\phi$، مما يضمن أفضل تقريب للتوزيع الحقيقي.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch1_hots_4",
      "titleEn": "[HOTS] Bayesian Networks, Directed Acyclic Graphs & D-Separation - Evaluation 4",
      "titleAr": "[تفكير عليا] شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation) - تقييم 4",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Bayesian Networks, Directed Acyclic Graphs & D-Separation: (Problem 4)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation): (مسألة 4)",
      "optionsEn": [
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "في شبكة تشخيص طبي يسبب فيها المرض A والمرض B العَرَض C بصورة مستقلة، يؤدي ثبوت العَرَض C إلى نشوء ارتباط شرطي يجعل تأكيد المرض A يخفض احتمالية المرض B اللاحقة (ظاهرة التفسير البديل Explaining Away).",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).",
      "correctAnswerEn": "In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).",
      "correctAnswerAr": "في شبكة تشخيص طبي يسبب فيها المرض A والمرض B العَرَض C بصورة مستقلة، يؤدي ثبوت العَرَض C إلى نشوء ارتباط شرطي يجعل تأكيد المرض A يخفض احتمالية المرض B اللاحقة (ظاهرة التفسير البديل Explaining Away).",
      "correctIndex": 1,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في شبكة تشخيص طبي يسبب فيها المرض A والمرض B العَرَض C بصورة مستقلة، يؤدي ثبوت العَرَض C إلى نشوء ارتباط شرطي يجعل تأكيد المرض A يخفض احتمالية المرض B اللاحقة (ظاهرة التفسير البديل Explaining Away).",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Bayesian Networks, Directed Acyclic Graphs & D-Separation.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في شبكة تشخيص طبي يسبب فيها المرض A والمرض B العَرَض C بصورة مستقلة، يؤدي ثبوت العَرَض C إلى نشوء ارتباط شرطي يجعل تأكيد المرض A يخفض احتمالية المرض B اللاحقة (ظاهرة التفسير البديل Explaining Away).."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch1_hots_5",
      "titleEn": "[HOTS] Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models - Evaluation 5",
      "titleAr": "[تفكير عليا] خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs) - تقييم 5",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models: (Problem 5)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs): (مسألة 5)",
      "optionsEn": [
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2).",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "لنموذج مزيج غاوسي ثنائي لتجميع قراءات أقمار صناعية، لعينة $x = 4.2$ باحتماليات مكونات $0.035$ و $0.231$ بأوزان متساوية $\\pi_1 = \\pi_2 = 0.5$، تبلغ المسؤولية اللاحقة للمكون الثاني $\\gamma_2 = \\frac{0.1155}{0.133} \\approx 0.868$ بثقة $86.8\\%$.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2).",
      "correctAnswerEn": "For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2).",
      "correctAnswerAr": "لنموذج مزيج غاوسي ثنائي لتجميع قراءات أقمار صناعية، لعينة $x = 4.2$ باحتماليات مكونات $0.035$ و $0.231$ بأوزان متساوية $\\pi_1 = \\pi_2 = 0.5$، تبلغ المسؤولية اللاحقة للمكون الثاني $\\gamma_2 = \\frac{0.1155}{0.133} \\approx 0.868$ بثقة $86.8\\%$.",
      "correctIndex": 2,
      "explanationEn": "Detailed Solution & Numerical Evaluation: For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2).",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: لنموذج مزيج غاوسي ثنائي لتجميع قراءات أقمار صناعية، لعينة $x = 4.2$ باحتماليات مكونات $0.035$ و $0.231$ بأوزان متساوية $\\pi_1 = \\pi_2 = 0.5$، تبلغ المسؤولية اللاحقة للمكون الثاني $\\gamma_2 = \\frac{0.1155}{0.133} \\approx 0.868$ بثقة $86.8\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2).."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: لنموذج مزيج غاوسي ثنائي لتجميع قراءات أقمار صناعية، لعينة $x = 4.2$ باحتماليات مكونات $0.035$ و $0.231$ بأوزان متساوية $\\pi_1 = \\pi_2 = 0.5$، تبلغ المسؤولية اللاحقة للمكون الثاني $\\gamma_2 = \\frac{0.1155}{0.133} \\approx 0.868$ بثقة $86.8\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch1_hots_6",
      "titleEn": "[HOTS] Variational Inference & Evidence Lower Bound (ELBO) Derivation - Evaluation 6",
      "titleAr": "[تفكير عليا] الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO) - تقييم 6",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Variational Inference & Evidence Lower Bound (ELBO) Derivation: (Problem 6)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO): (مسألة 6)",
      "optionsEn": [
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior."
      ],
      "optionsAr": [
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "يؤدي تعظيم الحد الأدنى ELBO مباشرة إلى تصغير تباعد كولباك-ليبلر $D_{KL}$ لأن لوغاريتم دليل البيانات الهامشي $\\ln p(x)$ ثابت بالنسبة للمعاملات المتغيرة $\\phi$، مما يضمن أفضل تقريب للتوزيع الحقيقي."
      ],
      "correctAnswer": "Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior.",
      "correctAnswerEn": "Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior.",
      "correctAnswerAr": "يؤدي تعظيم الحد الأدنى ELBO مباشرة إلى تصغير تباعد كولباك-ليبلر $D_{KL}$ لأن لوغاريتم دليل البيانات الهامشي $\\ln p(x)$ ثابت بالنسبة للمعاملات المتغيرة $\\phi$، مما يضمن أفضل تقريب للتوزيع الحقيقي.",
      "correctIndex": 3,
      "explanationEn": "Detailed Solution & Numerical Evaluation: Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: يؤدي تعظيم الحد الأدنى ELBO مباشرة إلى تصغير تباعد كولباك-ليبلر $D_{KL}$ لأن لوغاريتم دليل البيانات الهامشي $\\ln p(x)$ ثابت بالنسبة للمعاملات المتغيرة $\\phi$، مما يضمن أفضل تقريب للتوزيع الحقيقي.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Variational Inference & Evidence Lower Bound (ELBO) Derivation.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: يؤدي تعظيم الحد الأدنى ELBO مباشرة إلى تصغير تباعد كولباك-ليبلر $D_{KL}$ لأن لوغاريتم دليل البيانات الهامشي $\\ln p(x)$ ثابت بالنسبة للمعاملات المتغيرة $\\phi$، مما يضمن أفضل تقريب للتوزيع الحقيقي.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch1_hots_7",
      "titleEn": "[HOTS] Bayesian Networks, Directed Acyclic Graphs & D-Separation - Evaluation 7",
      "titleAr": "[تفكير عليا] شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation) - تقييم 7",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Bayesian Networks, Directed Acyclic Graphs & D-Separation: (Problem 7)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation): (مسألة 7)",
      "optionsEn": [
        "In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "في شبكة تشخيص طبي يسبب فيها المرض A والمرض B العَرَض C بصورة مستقلة، يؤدي ثبوت العَرَض C إلى نشوء ارتباط شرطي يجعل تأكيد المرض A يخفض احتمالية المرض B اللاحقة (ظاهرة التفسير البديل Explaining Away).",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).",
      "correctAnswerEn": "In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).",
      "correctAnswerAr": "في شبكة تشخيص طبي يسبب فيها المرض A والمرض B العَرَض C بصورة مستقلة، يؤدي ثبوت العَرَض C إلى نشوء ارتباط شرطي يجعل تأكيد المرض A يخفض احتمالية المرض B اللاحقة (ظاهرة التفسير البديل Explaining Away).",
      "correctIndex": 0,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في شبكة تشخيص طبي يسبب فيها المرض A والمرض B العَرَض C بصورة مستقلة، يؤدي ثبوت العَرَض C إلى نشوء ارتباط شرطي يجعل تأكيد المرض A يخفض احتمالية المرض B اللاحقة (ظاهرة التفسير البديل Explaining Away).",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Bayesian Networks, Directed Acyclic Graphs & D-Separation.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في شبكة تشخيص طبي يسبب فيها المرض A والمرض B العَرَض C بصورة مستقلة، يؤدي ثبوت العَرَض C إلى نشوء ارتباط شرطي يجعل تأكيد المرض A يخفض احتمالية المرض B اللاحقة (ظاهرة التفسير البديل Explaining Away).."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch1_hots_8",
      "titleEn": "[HOTS] Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models - Evaluation 8",
      "titleAr": "[تفكير عليا] خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs) - تقييم 8",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models: (Problem 8)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs): (مسألة 8)",
      "optionsEn": [
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2).",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "لنموذج مزيج غاوسي ثنائي لتجميع قراءات أقمار صناعية، لعينة $x = 4.2$ باحتماليات مكونات $0.035$ و $0.231$ بأوزان متساوية $\\pi_1 = \\pi_2 = 0.5$، تبلغ المسؤولية اللاحقة للمكون الثاني $\\gamma_2 = \\frac{0.1155}{0.133} \\approx 0.868$ بثقة $86.8\\%$.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2).",
      "correctAnswerEn": "For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2).",
      "correctAnswerAr": "لنموذج مزيج غاوسي ثنائي لتجميع قراءات أقمار صناعية، لعينة $x = 4.2$ باحتماليات مكونات $0.035$ و $0.231$ بأوزان متساوية $\\pi_1 = \\pi_2 = 0.5$، تبلغ المسؤولية اللاحقة للمكون الثاني $\\gamma_2 = \\frac{0.1155}{0.133} \\approx 0.868$ بثقة $86.8\\%$.",
      "correctIndex": 1,
      "explanationEn": "Detailed Solution & Numerical Evaluation: For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2).",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: لنموذج مزيج غاوسي ثنائي لتجميع قراءات أقمار صناعية، لعينة $x = 4.2$ باحتماليات مكونات $0.035$ و $0.231$ بأوزان متساوية $\\pi_1 = \\pi_2 = 0.5$، تبلغ المسؤولية اللاحقة للمكون الثاني $\\gamma_2 = \\frac{0.1155}{0.133} \\approx 0.868$ بثقة $86.8\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2).."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: لنموذج مزيج غاوسي ثنائي لتجميع قراءات أقمار صناعية، لعينة $x = 4.2$ باحتماليات مكونات $0.035$ و $0.231$ بأوزان متساوية $\\pi_1 = \\pi_2 = 0.5$، تبلغ المسؤولية اللاحقة للمكون الثاني $\\gamma_2 = \\frac{0.1155}{0.133} \\approx 0.868$ بثقة $86.8\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch1_hots_9",
      "titleEn": "[HOTS] Variational Inference & Evidence Lower Bound (ELBO) Derivation - Evaluation 9",
      "titleAr": "[تفكير عليا] الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO) - تقييم 9",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Variational Inference & Evidence Lower Bound (ELBO) Derivation: (Problem 9)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO): (مسألة 9)",
      "optionsEn": [
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "يؤدي تعظيم الحد الأدنى ELBO مباشرة إلى تصغير تباعد كولباك-ليبلر $D_{KL}$ لأن لوغاريتم دليل البيانات الهامشي $\\ln p(x)$ ثابت بالنسبة للمعاملات المتغيرة $\\phi$، مما يضمن أفضل تقريب للتوزيع الحقيقي.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior.",
      "correctAnswerEn": "Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior.",
      "correctAnswerAr": "يؤدي تعظيم الحد الأدنى ELBO مباشرة إلى تصغير تباعد كولباك-ليبلر $D_{KL}$ لأن لوغاريتم دليل البيانات الهامشي $\\ln p(x)$ ثابت بالنسبة للمعاملات المتغيرة $\\phi$، مما يضمن أفضل تقريب للتوزيع الحقيقي.",
      "correctIndex": 2,
      "explanationEn": "Detailed Solution & Numerical Evaluation: Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: يؤدي تعظيم الحد الأدنى ELBO مباشرة إلى تصغير تباعد كولباك-ليبلر $D_{KL}$ لأن لوغاريتم دليل البيانات الهامشي $\\ln p(x)$ ثابت بالنسبة للمعاملات المتغيرة $\\phi$، مما يضمن أفضل تقريب للتوزيع الحقيقي.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Variational Inference & Evidence Lower Bound (ELBO) Derivation.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: يؤدي تعظيم الحد الأدنى ELBO مباشرة إلى تصغير تباعد كولباك-ليبلر $D_{KL}$ لأن لوغاريتم دليل البيانات الهامشي $\\ln p(x)$ ثابت بالنسبة للمعاملات المتغيرة $\\phi$، مما يضمن أفضل تقريب للتوزيع الحقيقي.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch1_hots_10",
      "titleEn": "[HOTS] Bayesian Networks, Directed Acyclic Graphs & D-Separation - Evaluation 10",
      "titleAr": "[تفكير عليا] شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation) - تقييم 10",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Bayesian Networks, Directed Acyclic Graphs & D-Separation: (Problem 10)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation): (مسألة 10)",
      "optionsEn": [
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away)."
      ],
      "optionsAr": [
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "في شبكة تشخيص طبي يسبب فيها المرض A والمرض B العَرَض C بصورة مستقلة، يؤدي ثبوت العَرَض C إلى نشوء ارتباط شرطي يجعل تأكيد المرض A يخفض احتمالية المرض B اللاحقة (ظاهرة التفسير البديل Explaining Away)."
      ],
      "correctAnswer": "In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).",
      "correctAnswerEn": "In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).",
      "correctAnswerAr": "في شبكة تشخيص طبي يسبب فيها المرض A والمرض B العَرَض C بصورة مستقلة، يؤدي ثبوت العَرَض C إلى نشوء ارتباط شرطي يجعل تأكيد المرض A يخفض احتمالية المرض B اللاحقة (ظاهرة التفسير البديل Explaining Away).",
      "correctIndex": 3,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في شبكة تشخيص طبي يسبب فيها المرض A والمرض B العَرَض C بصورة مستقلة، يؤدي ثبوت العَرَض C إلى نشوء ارتباط شرطي يجعل تأكيد المرض A يخفض احتمالية المرض B اللاحقة (ظاهرة التفسير البديل Explaining Away).",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Bayesian Networks, Directed Acyclic Graphs & D-Separation.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في شبكة تشخيص طبي يسبب فيها المرض A والمرض B العَرَض C بصورة مستقلة، يؤدي ثبوت العَرَض C إلى نشوء ارتباط شرطي يجعل تأكيد المرض A يخفض احتمالية المرض B اللاحقة (ظاهرة التفسير البديل Explaining Away).."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch1_hots_11",
      "titleEn": "[HOTS] Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models - Evaluation 11",
      "titleAr": "[تفكير عليا] خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs) - تقييم 11",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models: (Problem 11)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs): (مسألة 11)",
      "optionsEn": [
        "For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2).",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "لنموذج مزيج غاوسي ثنائي لتجميع قراءات أقمار صناعية، لعينة $x = 4.2$ باحتماليات مكونات $0.035$ و $0.231$ بأوزان متساوية $\\pi_1 = \\pi_2 = 0.5$، تبلغ المسؤولية اللاحقة للمكون الثاني $\\gamma_2 = \\frac{0.1155}{0.133} \\approx 0.868$ بثقة $86.8\\%$.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2).",
      "correctAnswerEn": "For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2).",
      "correctAnswerAr": "لنموذج مزيج غاوسي ثنائي لتجميع قراءات أقمار صناعية، لعينة $x = 4.2$ باحتماليات مكونات $0.035$ و $0.231$ بأوزان متساوية $\\pi_1 = \\pi_2 = 0.5$، تبلغ المسؤولية اللاحقة للمكون الثاني $\\gamma_2 = \\frac{0.1155}{0.133} \\approx 0.868$ بثقة $86.8\\%$.",
      "correctIndex": 0,
      "explanationEn": "Detailed Solution & Numerical Evaluation: For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2).",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: لنموذج مزيج غاوسي ثنائي لتجميع قراءات أقمار صناعية، لعينة $x = 4.2$ باحتماليات مكونات $0.035$ و $0.231$ بأوزان متساوية $\\pi_1 = \\pi_2 = 0.5$، تبلغ المسؤولية اللاحقة للمكون الثاني $\\gamma_2 = \\frac{0.1155}{0.133} \\approx 0.868$ بثقة $86.8\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2).."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: لنموذج مزيج غاوسي ثنائي لتجميع قراءات أقمار صناعية، لعينة $x = 4.2$ باحتماليات مكونات $0.035$ و $0.231$ بأوزان متساوية $\\pi_1 = \\pi_2 = 0.5$، تبلغ المسؤولية اللاحقة للمكون الثاني $\\gamma_2 = \\frac{0.1155}{0.133} \\approx 0.868$ بثقة $86.8\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch1_hots_12",
      "titleEn": "[HOTS] Variational Inference & Evidence Lower Bound (ELBO) Derivation - Evaluation 12",
      "titleAr": "[تفكير عليا] الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO) - تقييم 12",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Variational Inference & Evidence Lower Bound (ELBO) Derivation: (Problem 12)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO): (مسألة 12)",
      "optionsEn": [
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "يؤدي تعظيم الحد الأدنى ELBO مباشرة إلى تصغير تباعد كولباك-ليبلر $D_{KL}$ لأن لوغاريتم دليل البيانات الهامشي $\\ln p(x)$ ثابت بالنسبة للمعاملات المتغيرة $\\phi$، مما يضمن أفضل تقريب للتوزيع الحقيقي.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior.",
      "correctAnswerEn": "Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior.",
      "correctAnswerAr": "يؤدي تعظيم الحد الأدنى ELBO مباشرة إلى تصغير تباعد كولباك-ليبلر $D_{KL}$ لأن لوغاريتم دليل البيانات الهامشي $\\ln p(x)$ ثابت بالنسبة للمعاملات المتغيرة $\\phi$، مما يضمن أفضل تقريب للتوزيع الحقيقي.",
      "correctIndex": 1,
      "explanationEn": "Detailed Solution & Numerical Evaluation: Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: يؤدي تعظيم الحد الأدنى ELBO مباشرة إلى تصغير تباعد كولباك-ليبلر $D_{KL}$ لأن لوغاريتم دليل البيانات الهامشي $\\ln p(x)$ ثابت بالنسبة للمعاملات المتغيرة $\\phi$، مما يضمن أفضل تقريب للتوزيع الحقيقي.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Variational Inference & Evidence Lower Bound (ELBO) Derivation.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: يؤدي تعظيم الحد الأدنى ELBO مباشرة إلى تصغير تباعد كولباك-ليبلر $D_{KL}$ لأن لوغاريتم دليل البيانات الهامشي $\\ln p(x)$ ثابت بالنسبة للمعاملات المتغيرة $\\phi$، مما يضمن أفضل تقريب للتوزيع الحقيقي.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch1_hots_13",
      "titleEn": "[HOTS] Bayesian Networks, Directed Acyclic Graphs & D-Separation - Evaluation 13",
      "titleAr": "[تفكير عليا] شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation) - تقييم 13",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Bayesian Networks, Directed Acyclic Graphs & D-Separation: (Problem 13)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation): (مسألة 13)",
      "optionsEn": [
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "في شبكة تشخيص طبي يسبب فيها المرض A والمرض B العَرَض C بصورة مستقلة، يؤدي ثبوت العَرَض C إلى نشوء ارتباط شرطي يجعل تأكيد المرض A يخفض احتمالية المرض B اللاحقة (ظاهرة التفسير البديل Explaining Away).",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).",
      "correctAnswerEn": "In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).",
      "correctAnswerAr": "في شبكة تشخيص طبي يسبب فيها المرض A والمرض B العَرَض C بصورة مستقلة، يؤدي ثبوت العَرَض C إلى نشوء ارتباط شرطي يجعل تأكيد المرض A يخفض احتمالية المرض B اللاحقة (ظاهرة التفسير البديل Explaining Away).",
      "correctIndex": 2,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في شبكة تشخيص طبي يسبب فيها المرض A والمرض B العَرَض C بصورة مستقلة، يؤدي ثبوت العَرَض C إلى نشوء ارتباط شرطي يجعل تأكيد المرض A يخفض احتمالية المرض B اللاحقة (ظاهرة التفسير البديل Explaining Away).",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Bayesian Networks, Directed Acyclic Graphs & D-Separation.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في شبكة تشخيص طبي يسبب فيها المرض A والمرض B العَرَض C بصورة مستقلة، يؤدي ثبوت العَرَض C إلى نشوء ارتباط شرطي يجعل تأكيد المرض A يخفض احتمالية المرض B اللاحقة (ظاهرة التفسير البديل Explaining Away).."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch1_hots_14",
      "titleEn": "[HOTS] Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models - Evaluation 14",
      "titleAr": "[تفكير عليا] خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs) - تقييم 14",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models: (Problem 14)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs): (مسألة 14)",
      "optionsEn": [
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2)."
      ],
      "optionsAr": [
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "لنموذج مزيج غاوسي ثنائي لتجميع قراءات أقمار صناعية، لعينة $x = 4.2$ باحتماليات مكونات $0.035$ و $0.231$ بأوزان متساوية $\\pi_1 = \\pi_2 = 0.5$، تبلغ المسؤولية اللاحقة للمكون الثاني $\\gamma_2 = \\frac{0.1155}{0.133} \\approx 0.868$ بثقة $86.8\\%$."
      ],
      "correctAnswer": "For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2).",
      "correctAnswerEn": "For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2).",
      "correctAnswerAr": "لنموذج مزيج غاوسي ثنائي لتجميع قراءات أقمار صناعية، لعينة $x = 4.2$ باحتماليات مكونات $0.035$ و $0.231$ بأوزان متساوية $\\pi_1 = \\pi_2 = 0.5$، تبلغ المسؤولية اللاحقة للمكون الثاني $\\gamma_2 = \\frac{0.1155}{0.133} \\approx 0.868$ بثقة $86.8\\%$.",
      "correctIndex": 3,
      "explanationEn": "Detailed Solution & Numerical Evaluation: For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2).",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: لنموذج مزيج غاوسي ثنائي لتجميع قراءات أقمار صناعية، لعينة $x = 4.2$ باحتماليات مكونات $0.035$ و $0.231$ بأوزان متساوية $\\pi_1 = \\pi_2 = 0.5$، تبلغ المسؤولية اللاحقة للمكون الثاني $\\gamma_2 = \\frac{0.1155}{0.133} \\approx 0.868$ بثقة $86.8\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2).."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: لنموذج مزيج غاوسي ثنائي لتجميع قراءات أقمار صناعية، لعينة $x = 4.2$ باحتماليات مكونات $0.035$ و $0.231$ بأوزان متساوية $\\pi_1 = \\pi_2 = 0.5$، تبلغ المسؤولية اللاحقة للمكون الثاني $\\gamma_2 = \\frac{0.1155}{0.133} \\approx 0.868$ بثقة $86.8\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch1_hots_15",
      "titleEn": "[HOTS] Variational Inference & Evidence Lower Bound (ELBO) Derivation - Evaluation 15",
      "titleAr": "[تفكير عليا] الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO) - تقييم 15",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Variational Inference & Evidence Lower Bound (ELBO) Derivation: (Problem 15)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO): (مسألة 15)",
      "optionsEn": [
        "Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "يؤدي تعظيم الحد الأدنى ELBO مباشرة إلى تصغير تباعد كولباك-ليبلر $D_{KL}$ لأن لوغاريتم دليل البيانات الهامشي $\\ln p(x)$ ثابت بالنسبة للمعاملات المتغيرة $\\phi$، مما يضمن أفضل تقريب للتوزيع الحقيقي.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior.",
      "correctAnswerEn": "Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior.",
      "correctAnswerAr": "يؤدي تعظيم الحد الأدنى ELBO مباشرة إلى تصغير تباعد كولباك-ليبلر $D_{KL}$ لأن لوغاريتم دليل البيانات الهامشي $\\ln p(x)$ ثابت بالنسبة للمعاملات المتغيرة $\\phi$، مما يضمن أفضل تقريب للتوزيع الحقيقي.",
      "correctIndex": 0,
      "explanationEn": "Detailed Solution & Numerical Evaluation: Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: يؤدي تعظيم الحد الأدنى ELBO مباشرة إلى تصغير تباعد كولباك-ليبلر $D_{KL}$ لأن لوغاريتم دليل البيانات الهامشي $\\ln p(x)$ ثابت بالنسبة للمعاملات المتغيرة $\\phi$، مما يضمن أفضل تقريب للتوزيع الحقيقي.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Variational Inference & Evidence Lower Bound (ELBO) Derivation.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: يؤدي تعظيم الحد الأدنى ELBO مباشرة إلى تصغير تباعد كولباك-ليبلر $D_{KL}$ لأن لوغاريتم دليل البيانات الهامشي $\\ln p(x)$ ثابت بالنسبة للمعاملات المتغيرة $\\phi$، مما يضمن أفضل تقريب للتوزيع الحقيقي.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch1_hots_16",
      "titleEn": "[HOTS] Bayesian Networks, Directed Acyclic Graphs & D-Separation - Evaluation 16",
      "titleAr": "[تفكير عليا] شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation) - تقييم 16",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Bayesian Networks, Directed Acyclic Graphs & D-Separation: (Problem 16)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation): (مسألة 16)",
      "optionsEn": [
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "في شبكة تشخيص طبي يسبب فيها المرض A والمرض B العَرَض C بصورة مستقلة، يؤدي ثبوت العَرَض C إلى نشوء ارتباط شرطي يجعل تأكيد المرض A يخفض احتمالية المرض B اللاحقة (ظاهرة التفسير البديل Explaining Away).",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).",
      "correctAnswerEn": "In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).",
      "correctAnswerAr": "في شبكة تشخيص طبي يسبب فيها المرض A والمرض B العَرَض C بصورة مستقلة، يؤدي ثبوت العَرَض C إلى نشوء ارتباط شرطي يجعل تأكيد المرض A يخفض احتمالية المرض B اللاحقة (ظاهرة التفسير البديل Explaining Away).",
      "correctIndex": 1,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في شبكة تشخيص طبي يسبب فيها المرض A والمرض B العَرَض C بصورة مستقلة، يؤدي ثبوت العَرَض C إلى نشوء ارتباط شرطي يجعل تأكيد المرض A يخفض احتمالية المرض B اللاحقة (ظاهرة التفسير البديل Explaining Away).",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Bayesian Networks, Directed Acyclic Graphs & D-Separation.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في شبكة تشخيص طبي يسبب فيها المرض A والمرض B العَرَض C بصورة مستقلة، يؤدي ثبوت العَرَض C إلى نشوء ارتباط شرطي يجعل تأكيد المرض A يخفض احتمالية المرض B اللاحقة (ظاهرة التفسير البديل Explaining Away).."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch1_hots_17",
      "titleEn": "[HOTS] Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models - Evaluation 17",
      "titleAr": "[تفكير عليا] خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs) - تقييم 17",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models: (Problem 17)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs): (مسألة 17)",
      "optionsEn": [
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2).",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "لنموذج مزيج غاوسي ثنائي لتجميع قراءات أقمار صناعية، لعينة $x = 4.2$ باحتماليات مكونات $0.035$ و $0.231$ بأوزان متساوية $\\pi_1 = \\pi_2 = 0.5$، تبلغ المسؤولية اللاحقة للمكون الثاني $\\gamma_2 = \\frac{0.1155}{0.133} \\approx 0.868$ بثقة $86.8\\%$.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2).",
      "correctAnswerEn": "For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2).",
      "correctAnswerAr": "لنموذج مزيج غاوسي ثنائي لتجميع قراءات أقمار صناعية، لعينة $x = 4.2$ باحتماليات مكونات $0.035$ و $0.231$ بأوزان متساوية $\\pi_1 = \\pi_2 = 0.5$، تبلغ المسؤولية اللاحقة للمكون الثاني $\\gamma_2 = \\frac{0.1155}{0.133} \\approx 0.868$ بثقة $86.8\\%$.",
      "correctIndex": 2,
      "explanationEn": "Detailed Solution & Numerical Evaluation: For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2).",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: لنموذج مزيج غاوسي ثنائي لتجميع قراءات أقمار صناعية، لعينة $x = 4.2$ باحتماليات مكونات $0.035$ و $0.231$ بأوزان متساوية $\\pi_1 = \\pi_2 = 0.5$، تبلغ المسؤولية اللاحقة للمكون الثاني $\\gamma_2 = \\frac{0.1155}{0.133} \\approx 0.868$ بثقة $86.8\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2).."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: لنموذج مزيج غاوسي ثنائي لتجميع قراءات أقمار صناعية، لعينة $x = 4.2$ باحتماليات مكونات $0.035$ و $0.231$ بأوزان متساوية $\\pi_1 = \\pi_2 = 0.5$، تبلغ المسؤولية اللاحقة للمكون الثاني $\\gamma_2 = \\frac{0.1155}{0.133} \\approx 0.868$ بثقة $86.8\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch1_hots_18",
      "titleEn": "[HOTS] Variational Inference & Evidence Lower Bound (ELBO) Derivation - Evaluation 18",
      "titleAr": "[تفكير عليا] الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO) - تقييم 18",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Variational Inference & Evidence Lower Bound (ELBO) Derivation: (Problem 18)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO): (مسألة 18)",
      "optionsEn": [
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior."
      ],
      "optionsAr": [
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "يؤدي تعظيم الحد الأدنى ELBO مباشرة إلى تصغير تباعد كولباك-ليبلر $D_{KL}$ لأن لوغاريتم دليل البيانات الهامشي $\\ln p(x)$ ثابت بالنسبة للمعاملات المتغيرة $\\phi$، مما يضمن أفضل تقريب للتوزيع الحقيقي."
      ],
      "correctAnswer": "Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior.",
      "correctAnswerEn": "Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior.",
      "correctAnswerAr": "يؤدي تعظيم الحد الأدنى ELBO مباشرة إلى تصغير تباعد كولباك-ليبلر $D_{KL}$ لأن لوغاريتم دليل البيانات الهامشي $\\ln p(x)$ ثابت بالنسبة للمعاملات المتغيرة $\\phi$، مما يضمن أفضل تقريب للتوزيع الحقيقي.",
      "correctIndex": 3,
      "explanationEn": "Detailed Solution & Numerical Evaluation: Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: يؤدي تعظيم الحد الأدنى ELBO مباشرة إلى تصغير تباعد كولباك-ليبلر $D_{KL}$ لأن لوغاريتم دليل البيانات الهامشي $\\ln p(x)$ ثابت بالنسبة للمعاملات المتغيرة $\\phi$، مما يضمن أفضل تقريب للتوزيع الحقيقي.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Variational Inference & Evidence Lower Bound (ELBO) Derivation.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: يؤدي تعظيم الحد الأدنى ELBO مباشرة إلى تصغير تباعد كولباك-ليبلر $D_{KL}$ لأن لوغاريتم دليل البيانات الهامشي $\\ln p(x)$ ثابت بالنسبة للمعاملات المتغيرة $\\phi$، مما يضمن أفضل تقريب للتوزيع الحقيقي.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch1_hots_19",
      "titleEn": "[HOTS] Bayesian Networks, Directed Acyclic Graphs & D-Separation - Evaluation 19",
      "titleAr": "[تفكير عليا] شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation) - تقييم 19",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Bayesian Networks, Directed Acyclic Graphs & D-Separation: (Problem 19)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation): (مسألة 19)",
      "optionsEn": [
        "In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "في شبكة تشخيص طبي يسبب فيها المرض A والمرض B العَرَض C بصورة مستقلة، يؤدي ثبوت العَرَض C إلى نشوء ارتباط شرطي يجعل تأكيد المرض A يخفض احتمالية المرض B اللاحقة (ظاهرة التفسير البديل Explaining Away).",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).",
      "correctAnswerEn": "In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).",
      "correctAnswerAr": "في شبكة تشخيص طبي يسبب فيها المرض A والمرض B العَرَض C بصورة مستقلة، يؤدي ثبوت العَرَض C إلى نشوء ارتباط شرطي يجعل تأكيد المرض A يخفض احتمالية المرض B اللاحقة (ظاهرة التفسير البديل Explaining Away).",
      "correctIndex": 0,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في شبكة تشخيص طبي يسبب فيها المرض A والمرض B العَرَض C بصورة مستقلة، يؤدي ثبوت العَرَض C إلى نشوء ارتباط شرطي يجعل تأكيد المرض A يخفض احتمالية المرض B اللاحقة (ظاهرة التفسير البديل Explaining Away).",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Bayesian Networks, Directed Acyclic Graphs & D-Separation.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في شبكة تشخيص طبي يسبب فيها المرض A والمرض B العَرَض C بصورة مستقلة، يؤدي ثبوت العَرَض C إلى نشوء ارتباط شرطي يجعل تأكيد المرض A يخفض احتمالية المرض B اللاحقة (ظاهرة التفسير البديل Explaining Away).."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch1_hots_20",
      "titleEn": "[HOTS] Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models - Evaluation 20",
      "titleAr": "[تفكير عليا] خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs) - تقييم 20",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models: (Problem 20)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs): (مسألة 20)",
      "optionsEn": [
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2).",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "لنموذج مزيج غاوسي ثنائي لتجميع قراءات أقمار صناعية، لعينة $x = 4.2$ باحتماليات مكونات $0.035$ و $0.231$ بأوزان متساوية $\\pi_1 = \\pi_2 = 0.5$، تبلغ المسؤولية اللاحقة للمكون الثاني $\\gamma_2 = \\frac{0.1155}{0.133} \\approx 0.868$ بثقة $86.8\\%$.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2).",
      "correctAnswerEn": "For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2).",
      "correctAnswerAr": "لنموذج مزيج غاوسي ثنائي لتجميع قراءات أقمار صناعية، لعينة $x = 4.2$ باحتماليات مكونات $0.035$ و $0.231$ بأوزان متساوية $\\pi_1 = \\pi_2 = 0.5$، تبلغ المسؤولية اللاحقة للمكون الثاني $\\gamma_2 = \\frac{0.1155}{0.133} \\approx 0.868$ بثقة $86.8\\%$.",
      "correctIndex": 1,
      "explanationEn": "Detailed Solution & Numerical Evaluation: For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2).",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: لنموذج مزيج غاوسي ثنائي لتجميع قراءات أقمار صناعية، لعينة $x = 4.2$ باحتماليات مكونات $0.035$ و $0.231$ بأوزان متساوية $\\pi_1 = \\pi_2 = 0.5$، تبلغ المسؤولية اللاحقة للمكون الثاني $\\gamma_2 = \\frac{0.1155}{0.133} \\approx 0.868$ بثقة $86.8\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2).."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: لنموذج مزيج غاوسي ثنائي لتجميع قراءات أقمار صناعية، لعينة $x = 4.2$ باحتماليات مكونات $0.035$ و $0.231$ بأوزان متساوية $\\pi_1 = \\pi_2 = 0.5$، تبلغ المسؤولية اللاحقة للمكون الثاني $\\gamma_2 = \\frac{0.1155}{0.133} \\approx 0.868$ بثقة $86.8\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch1_hots_21",
      "titleEn": "[HOTS] Variational Inference & Evidence Lower Bound (ELBO) Derivation - Evaluation 21",
      "titleAr": "[تفكير عليا] الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO) - تقييم 21",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Variational Inference & Evidence Lower Bound (ELBO) Derivation: (Problem 21)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO): (مسألة 21)",
      "optionsEn": [
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "يؤدي تعظيم الحد الأدنى ELBO مباشرة إلى تصغير تباعد كولباك-ليبلر $D_{KL}$ لأن لوغاريتم دليل البيانات الهامشي $\\ln p(x)$ ثابت بالنسبة للمعاملات المتغيرة $\\phi$، مما يضمن أفضل تقريب للتوزيع الحقيقي.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior.",
      "correctAnswerEn": "Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior.",
      "correctAnswerAr": "يؤدي تعظيم الحد الأدنى ELBO مباشرة إلى تصغير تباعد كولباك-ليبلر $D_{KL}$ لأن لوغاريتم دليل البيانات الهامشي $\\ln p(x)$ ثابت بالنسبة للمعاملات المتغيرة $\\phi$، مما يضمن أفضل تقريب للتوزيع الحقيقي.",
      "correctIndex": 2,
      "explanationEn": "Detailed Solution & Numerical Evaluation: Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: يؤدي تعظيم الحد الأدنى ELBO مباشرة إلى تصغير تباعد كولباك-ليبلر $D_{KL}$ لأن لوغاريتم دليل البيانات الهامشي $\\ln p(x)$ ثابت بالنسبة للمعاملات المتغيرة $\\phi$، مما يضمن أفضل تقريب للتوزيع الحقيقي.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Variational Inference & Evidence Lower Bound (ELBO) Derivation.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: يؤدي تعظيم الحد الأدنى ELBO مباشرة إلى تصغير تباعد كولباك-ليبلر $D_{KL}$ لأن لوغاريتم دليل البيانات الهامشي $\\ln p(x)$ ثابت بالنسبة للمعاملات المتغيرة $\\phi$، مما يضمن أفضل تقريب للتوزيع الحقيقي.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch1_hots_22",
      "titleEn": "[HOTS] Bayesian Networks, Directed Acyclic Graphs & D-Separation - Evaluation 22",
      "titleAr": "[تفكير عليا] شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation) - تقييم 22",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Bayesian Networks, Directed Acyclic Graphs & D-Separation: (Problem 22)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation): (مسألة 22)",
      "optionsEn": [
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away)."
      ],
      "optionsAr": [
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "في شبكة تشخيص طبي يسبب فيها المرض A والمرض B العَرَض C بصورة مستقلة، يؤدي ثبوت العَرَض C إلى نشوء ارتباط شرطي يجعل تأكيد المرض A يخفض احتمالية المرض B اللاحقة (ظاهرة التفسير البديل Explaining Away)."
      ],
      "correctAnswer": "In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).",
      "correctAnswerEn": "In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).",
      "correctAnswerAr": "في شبكة تشخيص طبي يسبب فيها المرض A والمرض B العَرَض C بصورة مستقلة، يؤدي ثبوت العَرَض C إلى نشوء ارتباط شرطي يجعل تأكيد المرض A يخفض احتمالية المرض B اللاحقة (ظاهرة التفسير البديل Explaining Away).",
      "correctIndex": 3,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في شبكة تشخيص طبي يسبب فيها المرض A والمرض B العَرَض C بصورة مستقلة، يؤدي ثبوت العَرَض C إلى نشوء ارتباط شرطي يجعل تأكيد المرض A يخفض احتمالية المرض B اللاحقة (ظاهرة التفسير البديل Explaining Away).",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Bayesian Networks, Directed Acyclic Graphs & D-Separation.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في شبكة تشخيص طبي يسبب فيها المرض A والمرض B العَرَض C بصورة مستقلة، يؤدي ثبوت العَرَض C إلى نشوء ارتباط شرطي يجعل تأكيد المرض A يخفض احتمالية المرض B اللاحقة (ظاهرة التفسير البديل Explaining Away).."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch1_hots_23",
      "titleEn": "[HOTS] Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models - Evaluation 23",
      "titleAr": "[تفكير عليا] خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs) - تقييم 23",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models: (Problem 23)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs): (مسألة 23)",
      "optionsEn": [
        "For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2).",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "لنموذج مزيج غاوسي ثنائي لتجميع قراءات أقمار صناعية، لعينة $x = 4.2$ باحتماليات مكونات $0.035$ و $0.231$ بأوزان متساوية $\\pi_1 = \\pi_2 = 0.5$، تبلغ المسؤولية اللاحقة للمكون الثاني $\\gamma_2 = \\frac{0.1155}{0.133} \\approx 0.868$ بثقة $86.8\\%$.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2).",
      "correctAnswerEn": "For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2).",
      "correctAnswerAr": "لنموذج مزيج غاوسي ثنائي لتجميع قراءات أقمار صناعية، لعينة $x = 4.2$ باحتماليات مكونات $0.035$ و $0.231$ بأوزان متساوية $\\pi_1 = \\pi_2 = 0.5$، تبلغ المسؤولية اللاحقة للمكون الثاني $\\gamma_2 = \\frac{0.1155}{0.133} \\approx 0.868$ بثقة $86.8\\%$.",
      "correctIndex": 0,
      "explanationEn": "Detailed Solution & Numerical Evaluation: For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2).",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: لنموذج مزيج غاوسي ثنائي لتجميع قراءات أقمار صناعية، لعينة $x = 4.2$ باحتماليات مكونات $0.035$ و $0.231$ بأوزان متساوية $\\pi_1 = \\pi_2 = 0.5$، تبلغ المسؤولية اللاحقة للمكون الثاني $\\gamma_2 = \\frac{0.1155}{0.133} \\approx 0.868$ بثقة $86.8\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2).."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: لنموذج مزيج غاوسي ثنائي لتجميع قراءات أقمار صناعية، لعينة $x = 4.2$ باحتماليات مكونات $0.035$ و $0.231$ بأوزان متساوية $\\pi_1 = \\pi_2 = 0.5$، تبلغ المسؤولية اللاحقة للمكون الثاني $\\gamma_2 = \\frac{0.1155}{0.133} \\approx 0.868$ بثقة $86.8\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch1_hots_24",
      "titleEn": "[HOTS] Variational Inference & Evidence Lower Bound (ELBO) Derivation - Evaluation 24",
      "titleAr": "[تفكير عليا] الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO) - تقييم 24",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Variational Inference & Evidence Lower Bound (ELBO) Derivation: (Problem 24)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO): (مسألة 24)",
      "optionsEn": [
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "يؤدي تعظيم الحد الأدنى ELBO مباشرة إلى تصغير تباعد كولباك-ليبلر $D_{KL}$ لأن لوغاريتم دليل البيانات الهامشي $\\ln p(x)$ ثابت بالنسبة للمعاملات المتغيرة $\\phi$، مما يضمن أفضل تقريب للتوزيع الحقيقي.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior.",
      "correctAnswerEn": "Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior.",
      "correctAnswerAr": "يؤدي تعظيم الحد الأدنى ELBO مباشرة إلى تصغير تباعد كولباك-ليبلر $D_{KL}$ لأن لوغاريتم دليل البيانات الهامشي $\\ln p(x)$ ثابت بالنسبة للمعاملات المتغيرة $\\phi$، مما يضمن أفضل تقريب للتوزيع الحقيقي.",
      "correctIndex": 1,
      "explanationEn": "Detailed Solution & Numerical Evaluation: Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: يؤدي تعظيم الحد الأدنى ELBO مباشرة إلى تصغير تباعد كولباك-ليبلر $D_{KL}$ لأن لوغاريتم دليل البيانات الهامشي $\\ln p(x)$ ثابت بالنسبة للمعاملات المتغيرة $\\phi$، مما يضمن أفضل تقريب للتوزيع الحقيقي.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Variational Inference & Evidence Lower Bound (ELBO) Derivation.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: يؤدي تعظيم الحد الأدنى ELBO مباشرة إلى تصغير تباعد كولباك-ليبلر $D_{KL}$ لأن لوغاريتم دليل البيانات الهامشي $\\ln p(x)$ ثابت بالنسبة للمعاملات المتغيرة $\\phi$، مما يضمن أفضل تقريب للتوزيع الحقيقي.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch1_hots_25",
      "titleEn": "[HOTS] Bayesian Networks, Directed Acyclic Graphs & D-Separation - Evaluation 25",
      "titleAr": "[تفكير عليا] شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation) - تقييم 25",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Bayesian Networks, Directed Acyclic Graphs & D-Separation: (Problem 25)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation): (مسألة 25)",
      "optionsEn": [
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "في شبكة تشخيص طبي يسبب فيها المرض A والمرض B العَرَض C بصورة مستقلة، يؤدي ثبوت العَرَض C إلى نشوء ارتباط شرطي يجعل تأكيد المرض A يخفض احتمالية المرض B اللاحقة (ظاهرة التفسير البديل Explaining Away).",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).",
      "correctAnswerEn": "In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).",
      "correctAnswerAr": "في شبكة تشخيص طبي يسبب فيها المرض A والمرض B العَرَض C بصورة مستقلة، يؤدي ثبوت العَرَض C إلى نشوء ارتباط شرطي يجعل تأكيد المرض A يخفض احتمالية المرض B اللاحقة (ظاهرة التفسير البديل Explaining Away).",
      "correctIndex": 2,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في شبكة تشخيص طبي يسبب فيها المرض A والمرض B العَرَض C بصورة مستقلة، يؤدي ثبوت العَرَض C إلى نشوء ارتباط شرطي يجعل تأكيد المرض A يخفض احتمالية المرض B اللاحقة (ظاهرة التفسير البديل Explaining Away).",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Bayesian Networks, Directed Acyclic Graphs & D-Separation.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في شبكة تشخيص طبي يسبب فيها المرض A والمرض B العَرَض C بصورة مستقلة، يؤدي ثبوت العَرَض C إلى نشوء ارتباط شرطي يجعل تأكيد المرض A يخفض احتمالية المرض B اللاحقة (ظاهرة التفسير البديل Explaining Away).."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch1_hots_26",
      "titleEn": "[HOTS] Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models - Evaluation 26",
      "titleAr": "[تفكير عليا] خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs) - تقييم 26",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models: (Problem 26)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs): (مسألة 26)",
      "optionsEn": [
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2)."
      ],
      "optionsAr": [
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "لنموذج مزيج غاوسي ثنائي لتجميع قراءات أقمار صناعية، لعينة $x = 4.2$ باحتماليات مكونات $0.035$ و $0.231$ بأوزان متساوية $\\pi_1 = \\pi_2 = 0.5$، تبلغ المسؤولية اللاحقة للمكون الثاني $\\gamma_2 = \\frac{0.1155}{0.133} \\approx 0.868$ بثقة $86.8\\%$."
      ],
      "correctAnswer": "For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2).",
      "correctAnswerEn": "For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2).",
      "correctAnswerAr": "لنموذج مزيج غاوسي ثنائي لتجميع قراءات أقمار صناعية، لعينة $x = 4.2$ باحتماليات مكونات $0.035$ و $0.231$ بأوزان متساوية $\\pi_1 = \\pi_2 = 0.5$، تبلغ المسؤولية اللاحقة للمكون الثاني $\\gamma_2 = \\frac{0.1155}{0.133} \\approx 0.868$ بثقة $86.8\\%$.",
      "correctIndex": 3,
      "explanationEn": "Detailed Solution & Numerical Evaluation: For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2).",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: لنموذج مزيج غاوسي ثنائي لتجميع قراءات أقمار صناعية، لعينة $x = 4.2$ باحتماليات مكونات $0.035$ و $0.231$ بأوزان متساوية $\\pi_1 = \\pi_2 = 0.5$، تبلغ المسؤولية اللاحقة للمكون الثاني $\\gamma_2 = \\frac{0.1155}{0.133} \\approx 0.868$ بثقة $86.8\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2).."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: لنموذج مزيج غاوسي ثنائي لتجميع قراءات أقمار صناعية، لعينة $x = 4.2$ باحتماليات مكونات $0.035$ و $0.231$ بأوزان متساوية $\\pi_1 = \\pi_2 = 0.5$، تبلغ المسؤولية اللاحقة للمكون الثاني $\\gamma_2 = \\frac{0.1155}{0.133} \\approx 0.868$ بثقة $86.8\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch1_hots_27",
      "titleEn": "[HOTS] Variational Inference & Evidence Lower Bound (ELBO) Derivation - Evaluation 27",
      "titleAr": "[تفكير عليا] الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO) - تقييم 27",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Variational Inference & Evidence Lower Bound (ELBO) Derivation: (Problem 27)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO): (مسألة 27)",
      "optionsEn": [
        "Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "يؤدي تعظيم الحد الأدنى ELBO مباشرة إلى تصغير تباعد كولباك-ليبلر $D_{KL}$ لأن لوغاريتم دليل البيانات الهامشي $\\ln p(x)$ ثابت بالنسبة للمعاملات المتغيرة $\\phi$، مما يضمن أفضل تقريب للتوزيع الحقيقي.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior.",
      "correctAnswerEn": "Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior.",
      "correctAnswerAr": "يؤدي تعظيم الحد الأدنى ELBO مباشرة إلى تصغير تباعد كولباك-ليبلر $D_{KL}$ لأن لوغاريتم دليل البيانات الهامشي $\\ln p(x)$ ثابت بالنسبة للمعاملات المتغيرة $\\phi$، مما يضمن أفضل تقريب للتوزيع الحقيقي.",
      "correctIndex": 0,
      "explanationEn": "Detailed Solution & Numerical Evaluation: Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: يؤدي تعظيم الحد الأدنى ELBO مباشرة إلى تصغير تباعد كولباك-ليبلر $D_{KL}$ لأن لوغاريتم دليل البيانات الهامشي $\\ln p(x)$ ثابت بالنسبة للمعاملات المتغيرة $\\phi$، مما يضمن أفضل تقريب للتوزيع الحقيقي.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Variational Inference & Evidence Lower Bound (ELBO) Derivation.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: يؤدي تعظيم الحد الأدنى ELBO مباشرة إلى تصغير تباعد كولباك-ليبلر $D_{KL}$ لأن لوغاريتم دليل البيانات الهامشي $\\ln p(x)$ ثابت بالنسبة للمعاملات المتغيرة $\\phi$، مما يضمن أفضل تقريب للتوزيع الحقيقي.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch1_hots_28",
      "titleEn": "[HOTS] Bayesian Networks, Directed Acyclic Graphs & D-Separation - Evaluation 28",
      "titleAr": "[تفكير عليا] شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation) - تقييم 28",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Bayesian Networks, Directed Acyclic Graphs & D-Separation: (Problem 28)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation): (مسألة 28)",
      "optionsEn": [
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "في شبكة تشخيص طبي يسبب فيها المرض A والمرض B العَرَض C بصورة مستقلة، يؤدي ثبوت العَرَض C إلى نشوء ارتباط شرطي يجعل تأكيد المرض A يخفض احتمالية المرض B اللاحقة (ظاهرة التفسير البديل Explaining Away).",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).",
      "correctAnswerEn": "In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).",
      "correctAnswerAr": "في شبكة تشخيص طبي يسبب فيها المرض A والمرض B العَرَض C بصورة مستقلة، يؤدي ثبوت العَرَض C إلى نشوء ارتباط شرطي يجعل تأكيد المرض A يخفض احتمالية المرض B اللاحقة (ظاهرة التفسير البديل Explaining Away).",
      "correctIndex": 1,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في شبكة تشخيص طبي يسبب فيها المرض A والمرض B العَرَض C بصورة مستقلة، يؤدي ثبوت العَرَض C إلى نشوء ارتباط شرطي يجعل تأكيد المرض A يخفض احتمالية المرض B اللاحقة (ظاهرة التفسير البديل Explaining Away).",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Bayesian Networks, Directed Acyclic Graphs & D-Separation.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في شبكة تشخيص طبي يسبب فيها المرض A والمرض B العَرَض C بصورة مستقلة، يؤدي ثبوت العَرَض C إلى نشوء ارتباط شرطي يجعل تأكيد المرض A يخفض احتمالية المرض B اللاحقة (ظاهرة التفسير البديل Explaining Away).."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch1_hots_29",
      "titleEn": "[HOTS] Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models - Evaluation 29",
      "titleAr": "[تفكير عليا] خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs) - تقييم 29",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models: (Problem 29)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs): (مسألة 29)",
      "optionsEn": [
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2).",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "لنموذج مزيج غاوسي ثنائي لتجميع قراءات أقمار صناعية، لعينة $x = 4.2$ باحتماليات مكونات $0.035$ و $0.231$ بأوزان متساوية $\\pi_1 = \\pi_2 = 0.5$، تبلغ المسؤولية اللاحقة للمكون الثاني $\\gamma_2 = \\frac{0.1155}{0.133} \\approx 0.868$ بثقة $86.8\\%$.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2).",
      "correctAnswerEn": "For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2).",
      "correctAnswerAr": "لنموذج مزيج غاوسي ثنائي لتجميع قراءات أقمار صناعية، لعينة $x = 4.2$ باحتماليات مكونات $0.035$ و $0.231$ بأوزان متساوية $\\pi_1 = \\pi_2 = 0.5$، تبلغ المسؤولية اللاحقة للمكون الثاني $\\gamma_2 = \\frac{0.1155}{0.133} \\approx 0.868$ بثقة $86.8\\%$.",
      "correctIndex": 2,
      "explanationEn": "Detailed Solution & Numerical Evaluation: For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2).",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: لنموذج مزيج غاوسي ثنائي لتجميع قراءات أقمار صناعية، لعينة $x = 4.2$ باحتماليات مكونات $0.035$ و $0.231$ بأوزان متساوية $\\pi_1 = \\pi_2 = 0.5$، تبلغ المسؤولية اللاحقة للمكون الثاني $\\gamma_2 = \\frac{0.1155}{0.133} \\approx 0.868$ بثقة $86.8\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2).."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: لنموذج مزيج غاوسي ثنائي لتجميع قراءات أقمار صناعية، لعينة $x = 4.2$ باحتماليات مكونات $0.035$ و $0.231$ بأوزان متساوية $\\pi_1 = \\pi_2 = 0.5$، تبلغ المسؤولية اللاحقة للمكون الثاني $\\gamma_2 = \\frac{0.1155}{0.133} \\approx 0.868$ بثقة $86.8\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch1_hots_30",
      "titleEn": "[HOTS] Variational Inference & Evidence Lower Bound (ELBO) Derivation - Evaluation 30",
      "titleAr": "[تفكير عليا] الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO) - تقييم 30",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Variational Inference & Evidence Lower Bound (ELBO) Derivation: (Problem 30)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO): (مسألة 30)",
      "optionsEn": [
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior."
      ],
      "optionsAr": [
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "يؤدي تعظيم الحد الأدنى ELBO مباشرة إلى تصغير تباعد كولباك-ليبلر $D_{KL}$ لأن لوغاريتم دليل البيانات الهامشي $\\ln p(x)$ ثابت بالنسبة للمعاملات المتغيرة $\\phi$، مما يضمن أفضل تقريب للتوزيع الحقيقي."
      ],
      "correctAnswer": "Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior.",
      "correctAnswerEn": "Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior.",
      "correctAnswerAr": "يؤدي تعظيم الحد الأدنى ELBO مباشرة إلى تصغير تباعد كولباك-ليبلر $D_{KL}$ لأن لوغاريتم دليل البيانات الهامشي $\\ln p(x)$ ثابت بالنسبة للمعاملات المتغيرة $\\phi$، مما يضمن أفضل تقريب للتوزيع الحقيقي.",
      "correctIndex": 3,
      "explanationEn": "Detailed Solution & Numerical Evaluation: Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: يؤدي تعظيم الحد الأدنى ELBO مباشرة إلى تصغير تباعد كولباك-ليبلر $D_{KL}$ لأن لوغاريتم دليل البيانات الهامشي $\\ln p(x)$ ثابت بالنسبة للمعاملات المتغيرة $\\phi$، مما يضمن أفضل تقريب للتوزيع الحقيقي.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Variational Inference & Evidence Lower Bound (ELBO) Derivation.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: يؤدي تعظيم الحد الأدنى ELBO مباشرة إلى تصغير تباعد كولباك-ليبلر $D_{KL}$ لأن لوغاريتم دليل البيانات الهامشي $\\ln p(x)$ ثابت بالنسبة للمعاملات المتغيرة $\\phi$، مما يضمن أفضل تقريب للتوزيع الحقيقي.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch1_hots_31",
      "titleEn": "[HOTS] Bayesian Networks, Directed Acyclic Graphs & D-Separation - Evaluation 31",
      "titleAr": "[تفكير عليا] شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation) - تقييم 31",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Bayesian Networks, Directed Acyclic Graphs & D-Separation: (Problem 31)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation): (مسألة 31)",
      "optionsEn": [
        "In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "في شبكة تشخيص طبي يسبب فيها المرض A والمرض B العَرَض C بصورة مستقلة، يؤدي ثبوت العَرَض C إلى نشوء ارتباط شرطي يجعل تأكيد المرض A يخفض احتمالية المرض B اللاحقة (ظاهرة التفسير البديل Explaining Away).",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).",
      "correctAnswerEn": "In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).",
      "correctAnswerAr": "في شبكة تشخيص طبي يسبب فيها المرض A والمرض B العَرَض C بصورة مستقلة، يؤدي ثبوت العَرَض C إلى نشوء ارتباط شرطي يجعل تأكيد المرض A يخفض احتمالية المرض B اللاحقة (ظاهرة التفسير البديل Explaining Away).",
      "correctIndex": 0,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في شبكة تشخيص طبي يسبب فيها المرض A والمرض B العَرَض C بصورة مستقلة، يؤدي ثبوت العَرَض C إلى نشوء ارتباط شرطي يجعل تأكيد المرض A يخفض احتمالية المرض B اللاحقة (ظاهرة التفسير البديل Explaining Away).",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Bayesian Networks, Directed Acyclic Graphs & D-Separation.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في شبكة تشخيص طبي يسبب فيها المرض A والمرض B العَرَض C بصورة مستقلة، يؤدي ثبوت العَرَض C إلى نشوء ارتباط شرطي يجعل تأكيد المرض A يخفض احتمالية المرض B اللاحقة (ظاهرة التفسير البديل Explaining Away).."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch1_hots_32",
      "titleEn": "[HOTS] Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models - Evaluation 32",
      "titleAr": "[تفكير عليا] خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs) - تقييم 32",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models: (Problem 32)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs): (مسألة 32)",
      "optionsEn": [
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2).",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "لنموذج مزيج غاوسي ثنائي لتجميع قراءات أقمار صناعية، لعينة $x = 4.2$ باحتماليات مكونات $0.035$ و $0.231$ بأوزان متساوية $\\pi_1 = \\pi_2 = 0.5$، تبلغ المسؤولية اللاحقة للمكون الثاني $\\gamma_2 = \\frac{0.1155}{0.133} \\approx 0.868$ بثقة $86.8\\%$.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2).",
      "correctAnswerEn": "For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2).",
      "correctAnswerAr": "لنموذج مزيج غاوسي ثنائي لتجميع قراءات أقمار صناعية، لعينة $x = 4.2$ باحتماليات مكونات $0.035$ و $0.231$ بأوزان متساوية $\\pi_1 = \\pi_2 = 0.5$، تبلغ المسؤولية اللاحقة للمكون الثاني $\\gamma_2 = \\frac{0.1155}{0.133} \\approx 0.868$ بثقة $86.8\\%$.",
      "correctIndex": 1,
      "explanationEn": "Detailed Solution & Numerical Evaluation: For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2).",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: لنموذج مزيج غاوسي ثنائي لتجميع قراءات أقمار صناعية، لعينة $x = 4.2$ باحتماليات مكونات $0.035$ و $0.231$ بأوزان متساوية $\\pi_1 = \\pi_2 = 0.5$، تبلغ المسؤولية اللاحقة للمكون الثاني $\\gamma_2 = \\frac{0.1155}{0.133} \\approx 0.868$ بثقة $86.8\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2).."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: لنموذج مزيج غاوسي ثنائي لتجميع قراءات أقمار صناعية، لعينة $x = 4.2$ باحتماليات مكونات $0.035$ و $0.231$ بأوزان متساوية $\\pi_1 = \\pi_2 = 0.5$، تبلغ المسؤولية اللاحقة للمكون الثاني $\\gamma_2 = \\frac{0.1155}{0.133} \\approx 0.868$ بثقة $86.8\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch1_hots_33",
      "titleEn": "[HOTS] Variational Inference & Evidence Lower Bound (ELBO) Derivation - Evaluation 33",
      "titleAr": "[تفكير عليا] الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO) - تقييم 33",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Variational Inference & Evidence Lower Bound (ELBO) Derivation: (Problem 33)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO): (مسألة 33)",
      "optionsEn": [
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "يؤدي تعظيم الحد الأدنى ELBO مباشرة إلى تصغير تباعد كولباك-ليبلر $D_{KL}$ لأن لوغاريتم دليل البيانات الهامشي $\\ln p(x)$ ثابت بالنسبة للمعاملات المتغيرة $\\phi$، مما يضمن أفضل تقريب للتوزيع الحقيقي.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior.",
      "correctAnswerEn": "Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior.",
      "correctAnswerAr": "يؤدي تعظيم الحد الأدنى ELBO مباشرة إلى تصغير تباعد كولباك-ليبلر $D_{KL}$ لأن لوغاريتم دليل البيانات الهامشي $\\ln p(x)$ ثابت بالنسبة للمعاملات المتغيرة $\\phi$، مما يضمن أفضل تقريب للتوزيع الحقيقي.",
      "correctIndex": 2,
      "explanationEn": "Detailed Solution & Numerical Evaluation: Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: يؤدي تعظيم الحد الأدنى ELBO مباشرة إلى تصغير تباعد كولباك-ليبلر $D_{KL}$ لأن لوغاريتم دليل البيانات الهامشي $\\ln p(x)$ ثابت بالنسبة للمعاملات المتغيرة $\\phi$، مما يضمن أفضل تقريب للتوزيع الحقيقي.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Variational Inference & Evidence Lower Bound (ELBO) Derivation.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: يؤدي تعظيم الحد الأدنى ELBO مباشرة إلى تصغير تباعد كولباك-ليبلر $D_{KL}$ لأن لوغاريتم دليل البيانات الهامشي $\\ln p(x)$ ثابت بالنسبة للمعاملات المتغيرة $\\phi$، مما يضمن أفضل تقريب للتوزيع الحقيقي.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch1_hots_34",
      "titleEn": "[HOTS] Bayesian Networks, Directed Acyclic Graphs & D-Separation - Evaluation 34",
      "titleAr": "[تفكير عليا] شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation) - تقييم 34",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Bayesian Networks, Directed Acyclic Graphs & D-Separation: (Problem 34)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation): (مسألة 34)",
      "optionsEn": [
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away)."
      ],
      "optionsAr": [
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "في شبكة تشخيص طبي يسبب فيها المرض A والمرض B العَرَض C بصورة مستقلة، يؤدي ثبوت العَرَض C إلى نشوء ارتباط شرطي يجعل تأكيد المرض A يخفض احتمالية المرض B اللاحقة (ظاهرة التفسير البديل Explaining Away)."
      ],
      "correctAnswer": "In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).",
      "correctAnswerEn": "In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).",
      "correctAnswerAr": "في شبكة تشخيص طبي يسبب فيها المرض A والمرض B العَرَض C بصورة مستقلة، يؤدي ثبوت العَرَض C إلى نشوء ارتباط شرطي يجعل تأكيد المرض A يخفض احتمالية المرض B اللاحقة (ظاهرة التفسير البديل Explaining Away).",
      "correctIndex": 3,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في شبكة تشخيص طبي يسبب فيها المرض A والمرض B العَرَض C بصورة مستقلة، يؤدي ثبوت العَرَض C إلى نشوء ارتباط شرطي يجعل تأكيد المرض A يخفض احتمالية المرض B اللاحقة (ظاهرة التفسير البديل Explaining Away).",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Bayesian Networks, Directed Acyclic Graphs & D-Separation.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في شبكة تشخيص طبي يسبب فيها المرض A والمرض B العَرَض C بصورة مستقلة، يؤدي ثبوت العَرَض C إلى نشوء ارتباط شرطي يجعل تأكيد المرض A يخفض احتمالية المرض B اللاحقة (ظاهرة التفسير البديل Explaining Away).."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch1_hots_35",
      "titleEn": "[HOTS] Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models - Evaluation 35",
      "titleAr": "[تفكير عليا] خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs) - تقييم 35",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models: (Problem 35)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs): (مسألة 35)",
      "optionsEn": [
        "For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2).",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "لنموذج مزيج غاوسي ثنائي لتجميع قراءات أقمار صناعية، لعينة $x = 4.2$ باحتماليات مكونات $0.035$ و $0.231$ بأوزان متساوية $\\pi_1 = \\pi_2 = 0.5$، تبلغ المسؤولية اللاحقة للمكون الثاني $\\gamma_2 = \\frac{0.1155}{0.133} \\approx 0.868$ بثقة $86.8\\%$.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2).",
      "correctAnswerEn": "For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2).",
      "correctAnswerAr": "لنموذج مزيج غاوسي ثنائي لتجميع قراءات أقمار صناعية، لعينة $x = 4.2$ باحتماليات مكونات $0.035$ و $0.231$ بأوزان متساوية $\\pi_1 = \\pi_2 = 0.5$، تبلغ المسؤولية اللاحقة للمكون الثاني $\\gamma_2 = \\frac{0.1155}{0.133} \\approx 0.868$ بثقة $86.8\\%$.",
      "correctIndex": 0,
      "explanationEn": "Detailed Solution & Numerical Evaluation: For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2).",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: لنموذج مزيج غاوسي ثنائي لتجميع قراءات أقمار صناعية، لعينة $x = 4.2$ باحتماليات مكونات $0.035$ و $0.231$ بأوزان متساوية $\\pi_1 = \\pi_2 = 0.5$، تبلغ المسؤولية اللاحقة للمكون الثاني $\\gamma_2 = \\frac{0.1155}{0.133} \\approx 0.868$ بثقة $86.8\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2).."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: لنموذج مزيج غاوسي ثنائي لتجميع قراءات أقمار صناعية، لعينة $x = 4.2$ باحتماليات مكونات $0.035$ و $0.231$ بأوزان متساوية $\\pi_1 = \\pi_2 = 0.5$، تبلغ المسؤولية اللاحقة للمكون الثاني $\\gamma_2 = \\frac{0.1155}{0.133} \\approx 0.868$ بثقة $86.8\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch1_hots_36",
      "titleEn": "[HOTS] Variational Inference & Evidence Lower Bound (ELBO) Derivation - Evaluation 36",
      "titleAr": "[تفكير عليا] الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO) - تقييم 36",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Variational Inference & Evidence Lower Bound (ELBO) Derivation: (Problem 36)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO): (مسألة 36)",
      "optionsEn": [
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "يؤدي تعظيم الحد الأدنى ELBO مباشرة إلى تصغير تباعد كولباك-ليبلر $D_{KL}$ لأن لوغاريتم دليل البيانات الهامشي $\\ln p(x)$ ثابت بالنسبة للمعاملات المتغيرة $\\phi$، مما يضمن أفضل تقريب للتوزيع الحقيقي.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior.",
      "correctAnswerEn": "Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior.",
      "correctAnswerAr": "يؤدي تعظيم الحد الأدنى ELBO مباشرة إلى تصغير تباعد كولباك-ليبلر $D_{KL}$ لأن لوغاريتم دليل البيانات الهامشي $\\ln p(x)$ ثابت بالنسبة للمعاملات المتغيرة $\\phi$، مما يضمن أفضل تقريب للتوزيع الحقيقي.",
      "correctIndex": 1,
      "explanationEn": "Detailed Solution & Numerical Evaluation: Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: يؤدي تعظيم الحد الأدنى ELBO مباشرة إلى تصغير تباعد كولباك-ليبلر $D_{KL}$ لأن لوغاريتم دليل البيانات الهامشي $\\ln p(x)$ ثابت بالنسبة للمعاملات المتغيرة $\\phi$، مما يضمن أفضل تقريب للتوزيع الحقيقي.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Variational Inference & Evidence Lower Bound (ELBO) Derivation.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: يؤدي تعظيم الحد الأدنى ELBO مباشرة إلى تصغير تباعد كولباك-ليبلر $D_{KL}$ لأن لوغاريتم دليل البيانات الهامشي $\\ln p(x)$ ثابت بالنسبة للمعاملات المتغيرة $\\phi$، مما يضمن أفضل تقريب للتوزيع الحقيقي.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch1_hots_37",
      "titleEn": "[HOTS] Bayesian Networks, Directed Acyclic Graphs & D-Separation - Evaluation 37",
      "titleAr": "[تفكير عليا] شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation) - تقييم 37",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Bayesian Networks, Directed Acyclic Graphs & D-Separation: (Problem 37)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation): (مسألة 37)",
      "optionsEn": [
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "في شبكة تشخيص طبي يسبب فيها المرض A والمرض B العَرَض C بصورة مستقلة، يؤدي ثبوت العَرَض C إلى نشوء ارتباط شرطي يجعل تأكيد المرض A يخفض احتمالية المرض B اللاحقة (ظاهرة التفسير البديل Explaining Away).",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).",
      "correctAnswerEn": "In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).",
      "correctAnswerAr": "في شبكة تشخيص طبي يسبب فيها المرض A والمرض B العَرَض C بصورة مستقلة، يؤدي ثبوت العَرَض C إلى نشوء ارتباط شرطي يجعل تأكيد المرض A يخفض احتمالية المرض B اللاحقة (ظاهرة التفسير البديل Explaining Away).",
      "correctIndex": 2,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في شبكة تشخيص طبي يسبب فيها المرض A والمرض B العَرَض C بصورة مستقلة، يؤدي ثبوت العَرَض C إلى نشوء ارتباط شرطي يجعل تأكيد المرض A يخفض احتمالية المرض B اللاحقة (ظاهرة التفسير البديل Explaining Away).",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Bayesian Networks, Directed Acyclic Graphs & D-Separation.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في شبكة تشخيص طبي يسبب فيها المرض A والمرض B العَرَض C بصورة مستقلة، يؤدي ثبوت العَرَض C إلى نشوء ارتباط شرطي يجعل تأكيد المرض A يخفض احتمالية المرض B اللاحقة (ظاهرة التفسير البديل Explaining Away).."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch1_hots_38",
      "titleEn": "[HOTS] Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models - Evaluation 38",
      "titleAr": "[تفكير عليا] خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs) - تقييم 38",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models: (Problem 38)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs): (مسألة 38)",
      "optionsEn": [
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2)."
      ],
      "optionsAr": [
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "لنموذج مزيج غاوسي ثنائي لتجميع قراءات أقمار صناعية، لعينة $x = 4.2$ باحتماليات مكونات $0.035$ و $0.231$ بأوزان متساوية $\\pi_1 = \\pi_2 = 0.5$، تبلغ المسؤولية اللاحقة للمكون الثاني $\\gamma_2 = \\frac{0.1155}{0.133} \\approx 0.868$ بثقة $86.8\\%$."
      ],
      "correctAnswer": "For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2).",
      "correctAnswerEn": "For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2).",
      "correctAnswerAr": "لنموذج مزيج غاوسي ثنائي لتجميع قراءات أقمار صناعية، لعينة $x = 4.2$ باحتماليات مكونات $0.035$ و $0.231$ بأوزان متساوية $\\pi_1 = \\pi_2 = 0.5$، تبلغ المسؤولية اللاحقة للمكون الثاني $\\gamma_2 = \\frac{0.1155}{0.133} \\approx 0.868$ بثقة $86.8\\%$.",
      "correctIndex": 3,
      "explanationEn": "Detailed Solution & Numerical Evaluation: For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2).",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: لنموذج مزيج غاوسي ثنائي لتجميع قراءات أقمار صناعية، لعينة $x = 4.2$ باحتماليات مكونات $0.035$ و $0.231$ بأوزان متساوية $\\pi_1 = \\pi_2 = 0.5$، تبلغ المسؤولية اللاحقة للمكون الثاني $\\gamma_2 = \\frac{0.1155}{0.133} \\approx 0.868$ بثقة $86.8\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2).."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: لنموذج مزيج غاوسي ثنائي لتجميع قراءات أقمار صناعية، لعينة $x = 4.2$ باحتماليات مكونات $0.035$ و $0.231$ بأوزان متساوية $\\pi_1 = \\pi_2 = 0.5$، تبلغ المسؤولية اللاحقة للمكون الثاني $\\gamma_2 = \\frac{0.1155}{0.133} \\approx 0.868$ بثقة $86.8\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch1_hots_39",
      "titleEn": "[HOTS] Variational Inference & Evidence Lower Bound (ELBO) Derivation - Evaluation 39",
      "titleAr": "[تفكير عليا] الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO) - تقييم 39",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Variational Inference & Evidence Lower Bound (ELBO) Derivation: (Problem 39)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO): (مسألة 39)",
      "optionsEn": [
        "Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "يؤدي تعظيم الحد الأدنى ELBO مباشرة إلى تصغير تباعد كولباك-ليبلر $D_{KL}$ لأن لوغاريتم دليل البيانات الهامشي $\\ln p(x)$ ثابت بالنسبة للمعاملات المتغيرة $\\phi$، مما يضمن أفضل تقريب للتوزيع الحقيقي.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior.",
      "correctAnswerEn": "Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior.",
      "correctAnswerAr": "يؤدي تعظيم الحد الأدنى ELBO مباشرة إلى تصغير تباعد كولباك-ليبلر $D_{KL}$ لأن لوغاريتم دليل البيانات الهامشي $\\ln p(x)$ ثابت بالنسبة للمعاملات المتغيرة $\\phi$، مما يضمن أفضل تقريب للتوزيع الحقيقي.",
      "correctIndex": 0,
      "explanationEn": "Detailed Solution & Numerical Evaluation: Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: يؤدي تعظيم الحد الأدنى ELBO مباشرة إلى تصغير تباعد كولباك-ليبلر $D_{KL}$ لأن لوغاريتم دليل البيانات الهامشي $\\ln p(x)$ ثابت بالنسبة للمعاملات المتغيرة $\\phi$، مما يضمن أفضل تقريب للتوزيع الحقيقي.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Variational Inference & Evidence Lower Bound (ELBO) Derivation.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: يؤدي تعظيم الحد الأدنى ELBO مباشرة إلى تصغير تباعد كولباك-ليبلر $D_{KL}$ لأن لوغاريتم دليل البيانات الهامشي $\\ln p(x)$ ثابت بالنسبة للمعاملات المتغيرة $\\phi$، مما يضمن أفضل تقريب للتوزيع الحقيقي.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch1_hots_40",
      "titleEn": "[HOTS] Bayesian Networks, Directed Acyclic Graphs & D-Separation - Evaluation 40",
      "titleAr": "[تفكير عليا] شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation) - تقييم 40",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Bayesian Networks, Directed Acyclic Graphs & D-Separation: (Problem 40)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation): (مسألة 40)",
      "optionsEn": [
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "في شبكة تشخيص طبي يسبب فيها المرض A والمرض B العَرَض C بصورة مستقلة، يؤدي ثبوت العَرَض C إلى نشوء ارتباط شرطي يجعل تأكيد المرض A يخفض احتمالية المرض B اللاحقة (ظاهرة التفسير البديل Explaining Away).",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).",
      "correctAnswerEn": "In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).",
      "correctAnswerAr": "في شبكة تشخيص طبي يسبب فيها المرض A والمرض B العَرَض C بصورة مستقلة، يؤدي ثبوت العَرَض C إلى نشوء ارتباط شرطي يجعل تأكيد المرض A يخفض احتمالية المرض B اللاحقة (ظاهرة التفسير البديل Explaining Away).",
      "correctIndex": 1,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في شبكة تشخيص طبي يسبب فيها المرض A والمرض B العَرَض C بصورة مستقلة، يؤدي ثبوت العَرَض C إلى نشوء ارتباط شرطي يجعل تأكيد المرض A يخفض احتمالية المرض B اللاحقة (ظاهرة التفسير البديل Explaining Away).",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Bayesian Networks, Directed Acyclic Graphs & D-Separation.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في شبكة تشخيص طبي يسبب فيها المرض A والمرض B العَرَض C بصورة مستقلة، يؤدي ثبوت العَرَض C إلى نشوء ارتباط شرطي يجعل تأكيد المرض A يخفض احتمالية المرض B اللاحقة (ظاهرة التفسير البديل Explaining Away).."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch1_hots_41",
      "titleEn": "[HOTS] Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models - Evaluation 41",
      "titleAr": "[تفكير عليا] خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs) - تقييم 41",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models: (Problem 41)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs): (مسألة 41)",
      "optionsEn": [
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2).",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "لنموذج مزيج غاوسي ثنائي لتجميع قراءات أقمار صناعية، لعينة $x = 4.2$ باحتماليات مكونات $0.035$ و $0.231$ بأوزان متساوية $\\pi_1 = \\pi_2 = 0.5$، تبلغ المسؤولية اللاحقة للمكون الثاني $\\gamma_2 = \\frac{0.1155}{0.133} \\approx 0.868$ بثقة $86.8\\%$.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2).",
      "correctAnswerEn": "For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2).",
      "correctAnswerAr": "لنموذج مزيج غاوسي ثنائي لتجميع قراءات أقمار صناعية، لعينة $x = 4.2$ باحتماليات مكونات $0.035$ و $0.231$ بأوزان متساوية $\\pi_1 = \\pi_2 = 0.5$، تبلغ المسؤولية اللاحقة للمكون الثاني $\\gamma_2 = \\frac{0.1155}{0.133} \\approx 0.868$ بثقة $86.8\\%$.",
      "correctIndex": 2,
      "explanationEn": "Detailed Solution & Numerical Evaluation: For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2).",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: لنموذج مزيج غاوسي ثنائي لتجميع قراءات أقمار صناعية، لعينة $x = 4.2$ باحتماليات مكونات $0.035$ و $0.231$ بأوزان متساوية $\\pi_1 = \\pi_2 = 0.5$، تبلغ المسؤولية اللاحقة للمكون الثاني $\\gamma_2 = \\frac{0.1155}{0.133} \\approx 0.868$ بثقة $86.8\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2).."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: لنموذج مزيج غاوسي ثنائي لتجميع قراءات أقمار صناعية، لعينة $x = 4.2$ باحتماليات مكونات $0.035$ و $0.231$ بأوزان متساوية $\\pi_1 = \\pi_2 = 0.5$، تبلغ المسؤولية اللاحقة للمكون الثاني $\\gamma_2 = \\frac{0.1155}{0.133} \\approx 0.868$ بثقة $86.8\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch1_hots_42",
      "titleEn": "[HOTS] Variational Inference & Evidence Lower Bound (ELBO) Derivation - Evaluation 42",
      "titleAr": "[تفكير عليا] الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO) - تقييم 42",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Variational Inference & Evidence Lower Bound (ELBO) Derivation: (Problem 42)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO): (مسألة 42)",
      "optionsEn": [
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior."
      ],
      "optionsAr": [
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "يؤدي تعظيم الحد الأدنى ELBO مباشرة إلى تصغير تباعد كولباك-ليبلر $D_{KL}$ لأن لوغاريتم دليل البيانات الهامشي $\\ln p(x)$ ثابت بالنسبة للمعاملات المتغيرة $\\phi$، مما يضمن أفضل تقريب للتوزيع الحقيقي."
      ],
      "correctAnswer": "Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior.",
      "correctAnswerEn": "Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior.",
      "correctAnswerAr": "يؤدي تعظيم الحد الأدنى ELBO مباشرة إلى تصغير تباعد كولباك-ليبلر $D_{KL}$ لأن لوغاريتم دليل البيانات الهامشي $\\ln p(x)$ ثابت بالنسبة للمعاملات المتغيرة $\\phi$، مما يضمن أفضل تقريب للتوزيع الحقيقي.",
      "correctIndex": 3,
      "explanationEn": "Detailed Solution & Numerical Evaluation: Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: يؤدي تعظيم الحد الأدنى ELBO مباشرة إلى تصغير تباعد كولباك-ليبلر $D_{KL}$ لأن لوغاريتم دليل البيانات الهامشي $\\ln p(x)$ ثابت بالنسبة للمعاملات المتغيرة $\\phi$، مما يضمن أفضل تقريب للتوزيع الحقيقي.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Variational Inference & Evidence Lower Bound (ELBO) Derivation.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: يؤدي تعظيم الحد الأدنى ELBO مباشرة إلى تصغير تباعد كولباك-ليبلر $D_{KL}$ لأن لوغاريتم دليل البيانات الهامشي $\\ln p(x)$ ثابت بالنسبة للمعاملات المتغيرة $\\phi$، مما يضمن أفضل تقريب للتوزيع الحقيقي.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch1_hots_43",
      "titleEn": "[HOTS] Bayesian Networks, Directed Acyclic Graphs & D-Separation - Evaluation 43",
      "titleAr": "[تفكير عليا] شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation) - تقييم 43",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Bayesian Networks, Directed Acyclic Graphs & D-Separation: (Problem 43)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation): (مسألة 43)",
      "optionsEn": [
        "In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "في شبكة تشخيص طبي يسبب فيها المرض A والمرض B العَرَض C بصورة مستقلة، يؤدي ثبوت العَرَض C إلى نشوء ارتباط شرطي يجعل تأكيد المرض A يخفض احتمالية المرض B اللاحقة (ظاهرة التفسير البديل Explaining Away).",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).",
      "correctAnswerEn": "In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).",
      "correctAnswerAr": "في شبكة تشخيص طبي يسبب فيها المرض A والمرض B العَرَض C بصورة مستقلة، يؤدي ثبوت العَرَض C إلى نشوء ارتباط شرطي يجعل تأكيد المرض A يخفض احتمالية المرض B اللاحقة (ظاهرة التفسير البديل Explaining Away).",
      "correctIndex": 0,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في شبكة تشخيص طبي يسبب فيها المرض A والمرض B العَرَض C بصورة مستقلة، يؤدي ثبوت العَرَض C إلى نشوء ارتباط شرطي يجعل تأكيد المرض A يخفض احتمالية المرض B اللاحقة (ظاهرة التفسير البديل Explaining Away).",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Bayesian Networks, Directed Acyclic Graphs & D-Separation.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في شبكة تشخيص طبي يسبب فيها المرض A والمرض B العَرَض C بصورة مستقلة، يؤدي ثبوت العَرَض C إلى نشوء ارتباط شرطي يجعل تأكيد المرض A يخفض احتمالية المرض B اللاحقة (ظاهرة التفسير البديل Explaining Away).."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch1_hots_44",
      "titleEn": "[HOTS] Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models - Evaluation 44",
      "titleAr": "[تفكير عليا] خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs) - تقييم 44",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models: (Problem 44)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs): (مسألة 44)",
      "optionsEn": [
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2).",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "لنموذج مزيج غاوسي ثنائي لتجميع قراءات أقمار صناعية، لعينة $x = 4.2$ باحتماليات مكونات $0.035$ و $0.231$ بأوزان متساوية $\\pi_1 = \\pi_2 = 0.5$، تبلغ المسؤولية اللاحقة للمكون الثاني $\\gamma_2 = \\frac{0.1155}{0.133} \\approx 0.868$ بثقة $86.8\\%$.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2).",
      "correctAnswerEn": "For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2).",
      "correctAnswerAr": "لنموذج مزيج غاوسي ثنائي لتجميع قراءات أقمار صناعية، لعينة $x = 4.2$ باحتماليات مكونات $0.035$ و $0.231$ بأوزان متساوية $\\pi_1 = \\pi_2 = 0.5$، تبلغ المسؤولية اللاحقة للمكون الثاني $\\gamma_2 = \\frac{0.1155}{0.133} \\approx 0.868$ بثقة $86.8\\%$.",
      "correctIndex": 1,
      "explanationEn": "Detailed Solution & Numerical Evaluation: For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2).",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: لنموذج مزيج غاوسي ثنائي لتجميع قراءات أقمار صناعية، لعينة $x = 4.2$ باحتماليات مكونات $0.035$ و $0.231$ بأوزان متساوية $\\pi_1 = \\pi_2 = 0.5$، تبلغ المسؤولية اللاحقة للمكون الثاني $\\gamma_2 = \\frac{0.1155}{0.133} \\approx 0.868$ بثقة $86.8\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2).."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: لنموذج مزيج غاوسي ثنائي لتجميع قراءات أقمار صناعية، لعينة $x = 4.2$ باحتماليات مكونات $0.035$ و $0.231$ بأوزان متساوية $\\pi_1 = \\pi_2 = 0.5$، تبلغ المسؤولية اللاحقة للمكون الثاني $\\gamma_2 = \\frac{0.1155}{0.133} \\approx 0.868$ بثقة $86.8\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch1_hots_45",
      "titleEn": "[HOTS] Variational Inference & Evidence Lower Bound (ELBO) Derivation - Evaluation 45",
      "titleAr": "[تفكير عليا] الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO) - تقييم 45",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Variational Inference & Evidence Lower Bound (ELBO) Derivation: (Problem 45)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO): (مسألة 45)",
      "optionsEn": [
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يؤدي تعظيم الحد الأدنى ELBO مباشرة إلى تصغير تباعد كولباك-ليبلر $D_{KL}$ لأن لوغاريتم دليل البيانات الهامشي $\\ln p(x)$ ثابت بالنسبة للمعاملات المتغيرة $\\phi$، مما يضمن أفضل تقريب للتوزيع الحقيقي.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior.",
      "correctAnswerEn": "Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior.",
      "correctAnswerAr": "يؤدي تعظيم الحد الأدنى ELBO مباشرة إلى تصغير تباعد كولباك-ليبلر $D_{KL}$ لأن لوغاريتم دليل البيانات الهامشي $\\ln p(x)$ ثابت بالنسبة للمعاملات المتغيرة $\\phi$، مما يضمن أفضل تقريب للتوزيع الحقيقي.",
      "correctIndex": 2,
      "explanationEn": "Detailed Solution & Numerical Evaluation: Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: يؤدي تعظيم الحد الأدنى ELBO مباشرة إلى تصغير تباعد كولباك-ليبلر $D_{KL}$ لأن لوغاريتم دليل البيانات الهامشي $\\ln p(x)$ ثابت بالنسبة للمعاملات المتغيرة $\\phi$، مما يضمن أفضل تقريب للتوزيع الحقيقي.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Variational Inference & Evidence Lower Bound (ELBO) Derivation.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: يؤدي تعظيم الحد الأدنى ELBO مباشرة إلى تصغير تباعد كولباك-ليبلر $D_{KL}$ لأن لوغاريتم دليل البيانات الهامشي $\\ln p(x)$ ثابت بالنسبة للمعاملات المتغيرة $\\phi$، مما يضمن أفضل تقريب للتوزيع الحقيقي.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch1_hots_46",
      "titleEn": "[HOTS] Bayesian Networks, Directed Acyclic Graphs & D-Separation - Evaluation 46",
      "titleAr": "[تفكير عليا] شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation) - تقييم 46",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Bayesian Networks, Directed Acyclic Graphs & D-Separation: (Problem 46)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation): (مسألة 46)",
      "optionsEn": [
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away)."
      ],
      "optionsAr": [
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "في شبكة تشخيص طبي يسبب فيها المرض A والمرض B العَرَض C بصورة مستقلة، يؤدي ثبوت العَرَض C إلى نشوء ارتباط شرطي يجعل تأكيد المرض A يخفض احتمالية المرض B اللاحقة (ظاهرة التفسير البديل Explaining Away)."
      ],
      "correctAnswer": "In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).",
      "correctAnswerEn": "In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).",
      "correctAnswerAr": "في شبكة تشخيص طبي يسبب فيها المرض A والمرض B العَرَض C بصورة مستقلة، يؤدي ثبوت العَرَض C إلى نشوء ارتباط شرطي يجعل تأكيد المرض A يخفض احتمالية المرض B اللاحقة (ظاهرة التفسير البديل Explaining Away).",
      "correctIndex": 3,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في شبكة تشخيص طبي يسبب فيها المرض A والمرض B العَرَض C بصورة مستقلة، يؤدي ثبوت العَرَض C إلى نشوء ارتباط شرطي يجعل تأكيد المرض A يخفض احتمالية المرض B اللاحقة (ظاهرة التفسير البديل Explaining Away).",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Bayesian Networks, Directed Acyclic Graphs & D-Separation.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في شبكة تشخيص طبي يسبب فيها المرض A والمرض B العَرَض C بصورة مستقلة، يؤدي ثبوت العَرَض C إلى نشوء ارتباط شرطي يجعل تأكيد المرض A يخفض احتمالية المرض B اللاحقة (ظاهرة التفسير البديل Explaining Away).."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch1_hots_47",
      "titleEn": "[HOTS] Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models - Evaluation 47",
      "titleAr": "[تفكير عليا] خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs) - تقييم 47",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models: (Problem 47)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs): (مسألة 47)",
      "optionsEn": [
        "For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2).",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "لنموذج مزيج غاوسي ثنائي لتجميع قراءات أقمار صناعية، لعينة $x = 4.2$ باحتماليات مكونات $0.035$ و $0.231$ بأوزان متساوية $\\pi_1 = \\pi_2 = 0.5$، تبلغ المسؤولية اللاحقة للمكون الثاني $\\gamma_2 = \\frac{0.1155}{0.133} \\approx 0.868$ بثقة $86.8\\%$.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2).",
      "correctAnswerEn": "For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2).",
      "correctAnswerAr": "لنموذج مزيج غاوسي ثنائي لتجميع قراءات أقمار صناعية، لعينة $x = 4.2$ باحتماليات مكونات $0.035$ و $0.231$ بأوزان متساوية $\\pi_1 = \\pi_2 = 0.5$، تبلغ المسؤولية اللاحقة للمكون الثاني $\\gamma_2 = \\frac{0.1155}{0.133} \\approx 0.868$ بثقة $86.8\\%$.",
      "correctIndex": 0,
      "explanationEn": "Detailed Solution & Numerical Evaluation: For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2).",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: لنموذج مزيج غاوسي ثنائي لتجميع قراءات أقمار صناعية، لعينة $x = 4.2$ باحتماليات مكونات $0.035$ و $0.231$ بأوزان متساوية $\\pi_1 = \\pi_2 = 0.5$، تبلغ المسؤولية اللاحقة للمكون الثاني $\\gamma_2 = \\frac{0.1155}{0.133} \\approx 0.868$ بثقة $86.8\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2).."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: لنموذج مزيج غاوسي ثنائي لتجميع قراءات أقمار صناعية، لعينة $x = 4.2$ باحتماليات مكونات $0.035$ و $0.231$ بأوزان متساوية $\\pi_1 = \\pi_2 = 0.5$، تبلغ المسؤولية اللاحقة للمكون الثاني $\\gamma_2 = \\frac{0.1155}{0.133} \\approx 0.868$ بثقة $86.8\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch1_hots_48",
      "titleEn": "[HOTS] Variational Inference & Evidence Lower Bound (ELBO) Derivation - Evaluation 48",
      "titleAr": "[تفكير عليا] الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO) - تقييم 48",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Variational Inference & Evidence Lower Bound (ELBO) Derivation: (Problem 48)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO): (مسألة 48)",
      "optionsEn": [
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "يؤدي تعظيم الحد الأدنى ELBO مباشرة إلى تصغير تباعد كولباك-ليبلر $D_{KL}$ لأن لوغاريتم دليل البيانات الهامشي $\\ln p(x)$ ثابت بالنسبة للمعاملات المتغيرة $\\phi$، مما يضمن أفضل تقريب للتوزيع الحقيقي.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior.",
      "correctAnswerEn": "Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior.",
      "correctAnswerAr": "يؤدي تعظيم الحد الأدنى ELBO مباشرة إلى تصغير تباعد كولباك-ليبلر $D_{KL}$ لأن لوغاريتم دليل البيانات الهامشي $\\ln p(x)$ ثابت بالنسبة للمعاملات المتغيرة $\\phi$، مما يضمن أفضل تقريب للتوزيع الحقيقي.",
      "correctIndex": 1,
      "explanationEn": "Detailed Solution & Numerical Evaluation: Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: يؤدي تعظيم الحد الأدنى ELBO مباشرة إلى تصغير تباعد كولباك-ليبلر $D_{KL}$ لأن لوغاريتم دليل البيانات الهامشي $\\ln p(x)$ ثابت بالنسبة للمعاملات المتغيرة $\\phi$، مما يضمن أفضل تقريب للتوزيع الحقيقي.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Variational Inference & Evidence Lower Bound (ELBO) Derivation.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: يؤدي تعظيم الحد الأدنى ELBO مباشرة إلى تصغير تباعد كولباك-ليبلر $D_{KL}$ لأن لوغاريتم دليل البيانات الهامشي $\\ln p(x)$ ثابت بالنسبة للمعاملات المتغيرة $\\phi$، مما يضمن أفضل تقريب للتوزيع الحقيقي.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch1_hots_49",
      "titleEn": "[HOTS] Bayesian Networks, Directed Acyclic Graphs & D-Separation - Evaluation 49",
      "titleAr": "[تفكير عليا] شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation) - تقييم 49",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Bayesian Networks, Directed Acyclic Graphs & D-Separation: (Problem 49)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation): (مسألة 49)",
      "optionsEn": [
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "في شبكة تشخيص طبي يسبب فيها المرض A والمرض B العَرَض C بصورة مستقلة، يؤدي ثبوت العَرَض C إلى نشوء ارتباط شرطي يجعل تأكيد المرض A يخفض احتمالية المرض B اللاحقة (ظاهرة التفسير البديل Explaining Away).",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).",
      "correctAnswerEn": "In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).",
      "correctAnswerAr": "في شبكة تشخيص طبي يسبب فيها المرض A والمرض B العَرَض C بصورة مستقلة، يؤدي ثبوت العَرَض C إلى نشوء ارتباط شرطي يجعل تأكيد المرض A يخفض احتمالية المرض B اللاحقة (ظاهرة التفسير البديل Explaining Away).",
      "correctIndex": 2,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في شبكة تشخيص طبي يسبب فيها المرض A والمرض B العَرَض C بصورة مستقلة، يؤدي ثبوت العَرَض C إلى نشوء ارتباط شرطي يجعل تأكيد المرض A يخفض احتمالية المرض B اللاحقة (ظاهرة التفسير البديل Explaining Away).",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Bayesian Networks, Directed Acyclic Graphs & D-Separation.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في شبكة تشخيص طبي يسبب فيها المرض A والمرض B العَرَض C بصورة مستقلة، يؤدي ثبوت العَرَض C إلى نشوء ارتباط شرطي يجعل تأكيد المرض A يخفض احتمالية المرض B اللاحقة (ظاهرة التفسير البديل Explaining Away).."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch1_hots_50",
      "titleEn": "[HOTS] Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models - Evaluation 50",
      "titleAr": "[تفكير عليا] خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs) - تقييم 50",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models: (Problem 50)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs): (مسألة 50)",
      "optionsEn": [
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2)."
      ],
      "optionsAr": [
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "لنموذج مزيج غاوسي ثنائي لتجميع قراءات أقمار صناعية، لعينة $x = 4.2$ باحتماليات مكونات $0.035$ و $0.231$ بأوزان متساوية $\\pi_1 = \\pi_2 = 0.5$، تبلغ المسؤولية اللاحقة للمكون الثاني $\\gamma_2 = \\frac{0.1155}{0.133} \\approx 0.868$ بثقة $86.8\\%$."
      ],
      "correctAnswer": "For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2).",
      "correctAnswerEn": "For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2).",
      "correctAnswerAr": "لنموذج مزيج غاوسي ثنائي لتجميع قراءات أقمار صناعية، لعينة $x = 4.2$ باحتماليات مكونات $0.035$ و $0.231$ بأوزان متساوية $\\pi_1 = \\pi_2 = 0.5$، تبلغ المسؤولية اللاحقة للمكون الثاني $\\gamma_2 = \\frac{0.1155}{0.133} \\approx 0.868$ بثقة $86.8\\%$.",
      "correctIndex": 3,
      "explanationEn": "Detailed Solution & Numerical Evaluation: For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2).",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: لنموذج مزيج غاوسي ثنائي لتجميع قراءات أقمار صناعية، لعينة $x = 4.2$ باحتماليات مكونات $0.035$ و $0.231$ بأوزان متساوية $\\pi_1 = \\pi_2 = 0.5$، تبلغ المسؤولية اللاحقة للمكون الثاني $\\gamma_2 = \\frac{0.1155}{0.133} \\approx 0.868$ بثقة $86.8\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2).."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: لنموذج مزيج غاوسي ثنائي لتجميع قراءات أقمار صناعية، لعينة $x = 4.2$ باحتماليات مكونات $0.035$ و $0.231$ بأوزان متساوية $\\pi_1 = \\pi_2 = 0.5$، تبلغ المسؤولية اللاحقة للمكون الثاني $\\gamma_2 = \\frac{0.1155}{0.133} \\approx 0.868$ بثقة $86.8\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch1_hots_51",
      "titleEn": "[HOTS] Variational Inference & Evidence Lower Bound (ELBO) Derivation - Evaluation 51",
      "titleAr": "[تفكير عليا] الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO) - تقييم 51",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Variational Inference & Evidence Lower Bound (ELBO) Derivation: (Problem 51)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO): (مسألة 51)",
      "optionsEn": [
        "Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "يؤدي تعظيم الحد الأدنى ELBO مباشرة إلى تصغير تباعد كولباك-ليبلر $D_{KL}$ لأن لوغاريتم دليل البيانات الهامشي $\\ln p(x)$ ثابت بالنسبة للمعاملات المتغيرة $\\phi$، مما يضمن أفضل تقريب للتوزيع الحقيقي.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior.",
      "correctAnswerEn": "Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior.",
      "correctAnswerAr": "يؤدي تعظيم الحد الأدنى ELBO مباشرة إلى تصغير تباعد كولباك-ليبلر $D_{KL}$ لأن لوغاريتم دليل البيانات الهامشي $\\ln p(x)$ ثابت بالنسبة للمعاملات المتغيرة $\\phi$، مما يضمن أفضل تقريب للتوزيع الحقيقي.",
      "correctIndex": 0,
      "explanationEn": "Detailed Solution & Numerical Evaluation: Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: يؤدي تعظيم الحد الأدنى ELBO مباشرة إلى تصغير تباعد كولباك-ليبلر $D_{KL}$ لأن لوغاريتم دليل البيانات الهامشي $\\ln p(x)$ ثابت بالنسبة للمعاملات المتغيرة $\\phi$، مما يضمن أفضل تقريب للتوزيع الحقيقي.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Variational Inference & Evidence Lower Bound (ELBO) Derivation.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: يؤدي تعظيم الحد الأدنى ELBO مباشرة إلى تصغير تباعد كولباك-ليبلر $D_{KL}$ لأن لوغاريتم دليل البيانات الهامشي $\\ln p(x)$ ثابت بالنسبة للمعاملات المتغيرة $\\phi$، مما يضمن أفضل تقريب للتوزيع الحقيقي.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch1_hots_52",
      "titleEn": "[HOTS] Bayesian Networks, Directed Acyclic Graphs & D-Separation - Evaluation 52",
      "titleAr": "[تفكير عليا] شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation) - تقييم 52",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Bayesian Networks, Directed Acyclic Graphs & D-Separation: (Problem 52)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation): (مسألة 52)",
      "optionsEn": [
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "في شبكة تشخيص طبي يسبب فيها المرض A والمرض B العَرَض C بصورة مستقلة، يؤدي ثبوت العَرَض C إلى نشوء ارتباط شرطي يجعل تأكيد المرض A يخفض احتمالية المرض B اللاحقة (ظاهرة التفسير البديل Explaining Away).",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).",
      "correctAnswerEn": "In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).",
      "correctAnswerAr": "في شبكة تشخيص طبي يسبب فيها المرض A والمرض B العَرَض C بصورة مستقلة، يؤدي ثبوت العَرَض C إلى نشوء ارتباط شرطي يجعل تأكيد المرض A يخفض احتمالية المرض B اللاحقة (ظاهرة التفسير البديل Explaining Away).",
      "correctIndex": 1,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في شبكة تشخيص طبي يسبب فيها المرض A والمرض B العَرَض C بصورة مستقلة، يؤدي ثبوت العَرَض C إلى نشوء ارتباط شرطي يجعل تأكيد المرض A يخفض احتمالية المرض B اللاحقة (ظاهرة التفسير البديل Explaining Away).",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Bayesian Networks, Directed Acyclic Graphs & D-Separation.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في شبكة تشخيص طبي يسبب فيها المرض A والمرض B العَرَض C بصورة مستقلة، يؤدي ثبوت العَرَض C إلى نشوء ارتباط شرطي يجعل تأكيد المرض A يخفض احتمالية المرض B اللاحقة (ظاهرة التفسير البديل Explaining Away).."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch1_hots_53",
      "titleEn": "[HOTS] Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models - Evaluation 53",
      "titleAr": "[تفكير عليا] خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs) - تقييم 53",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models: (Problem 53)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs): (مسألة 53)",
      "optionsEn": [
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2).",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "لنموذج مزيج غاوسي ثنائي لتجميع قراءات أقمار صناعية، لعينة $x = 4.2$ باحتماليات مكونات $0.035$ و $0.231$ بأوزان متساوية $\\pi_1 = \\pi_2 = 0.5$، تبلغ المسؤولية اللاحقة للمكون الثاني $\\gamma_2 = \\frac{0.1155}{0.133} \\approx 0.868$ بثقة $86.8\\%$.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2).",
      "correctAnswerEn": "For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2).",
      "correctAnswerAr": "لنموذج مزيج غاوسي ثنائي لتجميع قراءات أقمار صناعية، لعينة $x = 4.2$ باحتماليات مكونات $0.035$ و $0.231$ بأوزان متساوية $\\pi_1 = \\pi_2 = 0.5$، تبلغ المسؤولية اللاحقة للمكون الثاني $\\gamma_2 = \\frac{0.1155}{0.133} \\approx 0.868$ بثقة $86.8\\%$.",
      "correctIndex": 2,
      "explanationEn": "Detailed Solution & Numerical Evaluation: For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2).",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: لنموذج مزيج غاوسي ثنائي لتجميع قراءات أقمار صناعية، لعينة $x = 4.2$ باحتماليات مكونات $0.035$ و $0.231$ بأوزان متساوية $\\pi_1 = \\pi_2 = 0.5$، تبلغ المسؤولية اللاحقة للمكون الثاني $\\gamma_2 = \\frac{0.1155}{0.133} \\approx 0.868$ بثقة $86.8\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2).."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: لنموذج مزيج غاوسي ثنائي لتجميع قراءات أقمار صناعية، لعينة $x = 4.2$ باحتماليات مكونات $0.035$ و $0.231$ بأوزان متساوية $\\pi_1 = \\pi_2 = 0.5$، تبلغ المسؤولية اللاحقة للمكون الثاني $\\gamma_2 = \\frac{0.1155}{0.133} \\approx 0.868$ بثقة $86.8\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch1_hots_54",
      "titleEn": "[HOTS] Variational Inference & Evidence Lower Bound (ELBO) Derivation - Evaluation 54",
      "titleAr": "[تفكير عليا] الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO) - تقييم 54",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Variational Inference & Evidence Lower Bound (ELBO) Derivation: (Problem 54)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO): (مسألة 54)",
      "optionsEn": [
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior."
      ],
      "optionsAr": [
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يؤدي تعظيم الحد الأدنى ELBO مباشرة إلى تصغير تباعد كولباك-ليبلر $D_{KL}$ لأن لوغاريتم دليل البيانات الهامشي $\\ln p(x)$ ثابت بالنسبة للمعاملات المتغيرة $\\phi$، مما يضمن أفضل تقريب للتوزيع الحقيقي."
      ],
      "correctAnswer": "Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior.",
      "correctAnswerEn": "Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior.",
      "correctAnswerAr": "يؤدي تعظيم الحد الأدنى ELBO مباشرة إلى تصغير تباعد كولباك-ليبلر $D_{KL}$ لأن لوغاريتم دليل البيانات الهامشي $\\ln p(x)$ ثابت بالنسبة للمعاملات المتغيرة $\\phi$، مما يضمن أفضل تقريب للتوزيع الحقيقي.",
      "correctIndex": 3,
      "explanationEn": "Detailed Solution & Numerical Evaluation: Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: يؤدي تعظيم الحد الأدنى ELBO مباشرة إلى تصغير تباعد كولباك-ليبلر $D_{KL}$ لأن لوغاريتم دليل البيانات الهامشي $\\ln p(x)$ ثابت بالنسبة للمعاملات المتغيرة $\\phi$، مما يضمن أفضل تقريب للتوزيع الحقيقي.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Variational Inference & Evidence Lower Bound (ELBO) Derivation.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: يؤدي تعظيم الحد الأدنى ELBO مباشرة إلى تصغير تباعد كولباك-ليبلر $D_{KL}$ لأن لوغاريتم دليل البيانات الهامشي $\\ln p(x)$ ثابت بالنسبة للمعاملات المتغيرة $\\phi$، مما يضمن أفضل تقريب للتوزيع الحقيقي.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch1_hots_55",
      "titleEn": "[HOTS] Bayesian Networks, Directed Acyclic Graphs & D-Separation - Evaluation 55",
      "titleAr": "[تفكير عليا] شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation) - تقييم 55",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Bayesian Networks, Directed Acyclic Graphs & D-Separation: (Problem 55)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation): (مسألة 55)",
      "optionsEn": [
        "In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "في شبكة تشخيص طبي يسبب فيها المرض A والمرض B العَرَض C بصورة مستقلة، يؤدي ثبوت العَرَض C إلى نشوء ارتباط شرطي يجعل تأكيد المرض A يخفض احتمالية المرض B اللاحقة (ظاهرة التفسير البديل Explaining Away).",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).",
      "correctAnswerEn": "In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).",
      "correctAnswerAr": "في شبكة تشخيص طبي يسبب فيها المرض A والمرض B العَرَض C بصورة مستقلة، يؤدي ثبوت العَرَض C إلى نشوء ارتباط شرطي يجعل تأكيد المرض A يخفض احتمالية المرض B اللاحقة (ظاهرة التفسير البديل Explaining Away).",
      "correctIndex": 0,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في شبكة تشخيص طبي يسبب فيها المرض A والمرض B العَرَض C بصورة مستقلة، يؤدي ثبوت العَرَض C إلى نشوء ارتباط شرطي يجعل تأكيد المرض A يخفض احتمالية المرض B اللاحقة (ظاهرة التفسير البديل Explaining Away).",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Bayesian Networks, Directed Acyclic Graphs & D-Separation.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في شبكة تشخيص طبي يسبب فيها المرض A والمرض B العَرَض C بصورة مستقلة، يؤدي ثبوت العَرَض C إلى نشوء ارتباط شرطي يجعل تأكيد المرض A يخفض احتمالية المرض B اللاحقة (ظاهرة التفسير البديل Explaining Away).."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch1_hots_56",
      "titleEn": "[HOTS] Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models - Evaluation 56",
      "titleAr": "[تفكير عليا] خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs) - تقييم 56",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models: (Problem 56)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs): (مسألة 56)",
      "optionsEn": [
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2).",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "لنموذج مزيج غاوسي ثنائي لتجميع قراءات أقمار صناعية، لعينة $x = 4.2$ باحتماليات مكونات $0.035$ و $0.231$ بأوزان متساوية $\\pi_1 = \\pi_2 = 0.5$، تبلغ المسؤولية اللاحقة للمكون الثاني $\\gamma_2 = \\frac{0.1155}{0.133} \\approx 0.868$ بثقة $86.8\\%$.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2).",
      "correctAnswerEn": "For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2).",
      "correctAnswerAr": "لنموذج مزيج غاوسي ثنائي لتجميع قراءات أقمار صناعية، لعينة $x = 4.2$ باحتماليات مكونات $0.035$ و $0.231$ بأوزان متساوية $\\pi_1 = \\pi_2 = 0.5$، تبلغ المسؤولية اللاحقة للمكون الثاني $\\gamma_2 = \\frac{0.1155}{0.133} \\approx 0.868$ بثقة $86.8\\%$.",
      "correctIndex": 1,
      "explanationEn": "Detailed Solution & Numerical Evaluation: For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2).",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: لنموذج مزيج غاوسي ثنائي لتجميع قراءات أقمار صناعية، لعينة $x = 4.2$ باحتماليات مكونات $0.035$ و $0.231$ بأوزان متساوية $\\pi_1 = \\pi_2 = 0.5$، تبلغ المسؤولية اللاحقة للمكون الثاني $\\gamma_2 = \\frac{0.1155}{0.133} \\approx 0.868$ بثقة $86.8\\%$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2).."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: لنموذج مزيج غاوسي ثنائي لتجميع قراءات أقمار صناعية، لعينة $x = 4.2$ باحتماليات مكونات $0.035$ و $0.231$ بأوزان متساوية $\\pi_1 = \\pi_2 = 0.5$، تبلغ المسؤولية اللاحقة للمكون الثاني $\\gamma_2 = \\frac{0.1155}{0.133} \\approx 0.868$ بثقة $86.8\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch1_hots_57",
      "titleEn": "[HOTS] Variational Inference & Evidence Lower Bound (ELBO) Derivation - Evaluation 57",
      "titleAr": "[تفكير عليا] الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO) - تقييم 57",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Variational Inference & Evidence Lower Bound (ELBO) Derivation: (Problem 57)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO): (مسألة 57)",
      "optionsEn": [
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "يؤدي تعظيم الحد الأدنى ELBO مباشرة إلى تصغير تباعد كولباك-ليبلر $D_{KL}$ لأن لوغاريتم دليل البيانات الهامشي $\\ln p(x)$ ثابت بالنسبة للمعاملات المتغيرة $\\phi$، مما يضمن أفضل تقريب للتوزيع الحقيقي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior.",
      "correctAnswerEn": "Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior.",
      "correctAnswerAr": "يؤدي تعظيم الحد الأدنى ELBO مباشرة إلى تصغير تباعد كولباك-ليبلر $D_{KL}$ لأن لوغاريتم دليل البيانات الهامشي $\\ln p(x)$ ثابت بالنسبة للمعاملات المتغيرة $\\phi$، مما يضمن أفضل تقريب للتوزيع الحقيقي.",
      "correctIndex": 2,
      "explanationEn": "Detailed Solution & Numerical Evaluation: Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: يؤدي تعظيم الحد الأدنى ELBO مباشرة إلى تصغير تباعد كولباك-ليبلر $D_{KL}$ لأن لوغاريتم دليل البيانات الهامشي $\\ln p(x)$ ثابت بالنسبة للمعاملات المتغيرة $\\phi$، مما يضمن أفضل تقريب للتوزيع الحقيقي.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Variational Inference & Evidence Lower Bound (ELBO) Derivation.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: يؤدي تعظيم الحد الأدنى ELBO مباشرة إلى تصغير تباعد كولباك-ليبلر $D_{KL}$ لأن لوغاريتم دليل البيانات الهامشي $\\ln p(x)$ ثابت بالنسبة للمعاملات المتغيرة $\\phi$، مما يضمن أفضل تقريب للتوزيع الحقيقي.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch1_hots_58",
      "titleEn": "[HOTS] Bayesian Networks, Directed Acyclic Graphs & D-Separation - Evaluation 58",
      "titleAr": "[تفكير عليا] شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation) - تقييم 58",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Bayesian Networks, Directed Acyclic Graphs & D-Separation: (Problem 58)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation): (مسألة 58)",
      "optionsEn": [
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away)."
      ],
      "optionsAr": [
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "في شبكة تشخيص طبي يسبب فيها المرض A والمرض B العَرَض C بصورة مستقلة، يؤدي ثبوت العَرَض C إلى نشوء ارتباط شرطي يجعل تأكيد المرض A يخفض احتمالية المرض B اللاحقة (ظاهرة التفسير البديل Explaining Away)."
      ],
      "correctAnswer": "In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).",
      "correctAnswerEn": "In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).",
      "correctAnswerAr": "في شبكة تشخيص طبي يسبب فيها المرض A والمرض B العَرَض C بصورة مستقلة، يؤدي ثبوت العَرَض C إلى نشوء ارتباط شرطي يجعل تأكيد المرض A يخفض احتمالية المرض B اللاحقة (ظاهرة التفسير البديل Explaining Away).",
      "correctIndex": 3,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في شبكة تشخيص طبي يسبب فيها المرض A والمرض B العَرَض C بصورة مستقلة، يؤدي ثبوت العَرَض C إلى نشوء ارتباط شرطي يجعل تأكيد المرض A يخفض احتمالية المرض B اللاحقة (ظاهرة التفسير البديل Explaining Away).",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Bayesian Networks, Directed Acyclic Graphs & D-Separation.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في شبكة تشخيص طبي يسبب فيها المرض A والمرض B العَرَض C بصورة مستقلة، يؤدي ثبوت العَرَض C إلى نشوء ارتباط شرطي يجعل تأكيد المرض A يخفض احتمالية المرض B اللاحقة (ظاهرة التفسير البديل Explaining Away).."
      ],
      "difficulty": "hots"
    }
  ]
};
