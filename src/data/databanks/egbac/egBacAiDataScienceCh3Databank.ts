import type { ChapterDatabank } from '../../../types/curriculum';

export const egbac_ai_data_science_ch3Databank: ChapterDatabank = {
  "easy": [
    {
      "id": "egbac_ai_data_science_ch3_easy_1",
      "titleEn": "[EASY] Markov Decision Processes & Bellman Optimality Equations - Review 1",
      "titleAr": "[مستوى أساسي] عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل - سؤال 1",
      "questionEn": "[AI & Data Science Core Concept] Regarding Markov Decision Processes & Bellman Optimality Equations, which of the following statements is theoretically and mathematically sound? (Variant 1)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 1)",
      "optionsEn": [
        "A Markov Decision Process (MDP) models sequential decision making under uncertainty as a tuple $(S, A, P, R, \\gamma)$, where the next state transitions depend solely on the current state and action.",
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "تنمذج عملية ماركوف لاتخاذ القرار (MDP) اتخاذ القرارات المتتابعة في ظل عدم اليقين كخماسية $(S, A, P, R, \\gamma)$، حيث تعتمد الحالة التالية فقط على الحالة الحالية والإجراء.",
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "A Markov Decision Process (MDP) models sequential decision making under uncertainty as a tuple $(S, A, P, R, \\gamma)$, where the next state transitions depend solely on the current state and action.",
      "correctAnswerEn": "A Markov Decision Process (MDP) models sequential decision making under uncertainty as a tuple $(S, A, P, R, \\gamma)$, where the next state transitions depend solely on the current state and action.",
      "correctAnswerAr": "تنمذج عملية ماركوف لاتخاذ القرار (MDP) اتخاذ القرارات المتتابعة في ظل عدم اليقين كخماسية $(S, A, P, R, \\gamma)$، حيث تعتمد الحالة التالية فقط على الحالة الحالية والإجراء.",
      "correctIndex": 0,
      "explanationEn": "Correct Theoretical Formulation: A Markov Decision Process (MDP) models sequential decision making under uncertainty as a tuple $(S, A, P, R, \\gamma)$, where the next state transitions depend solely on the current state and action.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تنمذج عملية ماركوف لاتخاذ القرار (MDP) اتخاذ القرارات المتتابعة في ظل عدم اليقين كخماسية $(S, A, P, R, \\gamma)$، حيث تعتمد الحالة التالية فقط على الحالة الحالية والإجراء.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Markov Decision Processes & Bellman Optimality Equations.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: A Markov Decision Process (MDP) models sequential decision making under uncertainty as a tuple $(S, A, P, R, \\gamma)$, where the next state transitions depend solely on the current state and action.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تنمذج عملية ماركوف لاتخاذ القرار (MDP) اتخاذ القرارات المتتابعة في ظل عدم اليقين كخماسية $(S, A, P, R, \\gamma)$، حيث تعتمد الحالة التالية فقط على الحالة الحالية والإجراء.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch3_easy_2",
      "titleEn": "[EASY] Deep Q-Networks (DQN), Experience Replay & Target Networks - Review 2",
      "titleAr": "[مستوى أساسي] شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف - سؤال 2",
      "questionEn": "[AI & Data Science Core Concept] Regarding Deep Q-Networks (DQN), Experience Replay & Target Networks, which of the following statements is theoretically and mathematically sound? (Variant 2)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 2)",
      "optionsEn": [
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "Deep Q-Networks parameterize action-value functions $Q(s, a; \\theta)$ with deep neural networks, enabling reinforcement learning agents to operate in high-dimensional continuous state spaces.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تعبر شبكات Deep Q-Networks عن دوال القيمة $Q(s, a; \\theta)$ بشبكات عصبية عميقة، مما يمكن الوكلاء من اتخاذ القرارات في فضاءات حالات مستمرة عالية الأبعاد.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "Deep Q-Networks parameterize action-value functions $Q(s, a; \\theta)$ with deep neural networks, enabling reinforcement learning agents to operate in high-dimensional continuous state spaces.",
      "correctAnswerEn": "Deep Q-Networks parameterize action-value functions $Q(s, a; \\theta)$ with deep neural networks, enabling reinforcement learning agents to operate in high-dimensional continuous state spaces.",
      "correctAnswerAr": "تعبر شبكات Deep Q-Networks عن دوال القيمة $Q(s, a; \\theta)$ بشبكات عصبية عميقة، مما يمكن الوكلاء من اتخاذ القرارات في فضاءات حالات مستمرة عالية الأبعاد.",
      "correctIndex": 1,
      "explanationEn": "Correct Theoretical Formulation: Deep Q-Networks parameterize action-value functions $Q(s, a; \\theta)$ with deep neural networks, enabling reinforcement learning agents to operate in high-dimensional continuous state spaces.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تعبر شبكات Deep Q-Networks عن دوال القيمة $Q(s, a; \\theta)$ بشبكات عصبية عميقة، مما يمكن الوكلاء من اتخاذ القرارات في فضاءات حالات مستمرة عالية الأبعاد.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Deep Q-Networks (DQN), Experience Replay & Target Networks.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Deep Q-Networks parameterize action-value functions $Q(s, a; \\theta)$ with deep neural networks, enabling reinforcement learning agents to operate in high-dimensional continuous state spaces.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تعبر شبكات Deep Q-Networks عن دوال القيمة $Q(s, a; \\theta)$ بشبكات عصبية عميقة، مما يمكن الوكلاء من اتخاذ القرارات في فضاءات حالات مستمرة عالية الأبعاد.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch3_easy_3",
      "titleEn": "[EASY] Policy Gradient Methods & Proximal Policy Optimization (PPO) - Review 3",
      "titleAr": "[مستوى أساسي] طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO) - سؤال 3",
      "questionEn": "[AI & Data Science Core Concept] Regarding Policy Gradient Methods & Proximal Policy Optimization (PPO), which of the following statements is theoretically and mathematically sound? (Variant 3)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 3)",
      "optionsEn": [
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Policy gradient methods directly parameterize and optimize a stochastic policy $\\pi_\\theta(a|s)$ using gradient ascent to maximize expected cumulative discounted return $J(\\theta) = \\mathbb{E}[\\sum \\gamma^t r_t]$.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تنمذج طرق تدرج السياسة وتُحسن مباشرة السياسة الاحتمالية $\\pi_\\theta(a|s)$ باستخدام الصعود التدريجي لتعظيم العائد التراكمي المتوقع.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "Policy gradient methods directly parameterize and optimize a stochastic policy $\\pi_\\theta(a|s)$ using gradient ascent to maximize expected cumulative discounted return $J(\\theta) = \\mathbb{E}[\\sum \\gamma^t r_t]$.",
      "correctAnswerEn": "Policy gradient methods directly parameterize and optimize a stochastic policy $\\pi_\\theta(a|s)$ using gradient ascent to maximize expected cumulative discounted return $J(\\theta) = \\mathbb{E}[\\sum \\gamma^t r_t]$.",
      "correctAnswerAr": "تنمذج طرق تدرج السياسة وتُحسن مباشرة السياسة الاحتمالية $\\pi_\\theta(a|s)$ باستخدام الصعود التدريجي لتعظيم العائد التراكمي المتوقع.",
      "correctIndex": 2,
      "explanationEn": "Correct Theoretical Formulation: Policy gradient methods directly parameterize and optimize a stochastic policy $\\pi_\\theta(a|s)$ using gradient ascent to maximize expected cumulative discounted return $J(\\theta) = \\mathbb{E}[\\sum \\gamma^t r_t]$.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تنمذج طرق تدرج السياسة وتُحسن مباشرة السياسة الاحتمالية $\\pi_\\theta(a|s)$ باستخدام الصعود التدريجي لتعظيم العائد التراكمي المتوقع.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Policy Gradient Methods & Proximal Policy Optimization (PPO).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Policy gradient methods directly parameterize and optimize a stochastic policy $\\pi_\\theta(a|s)$ using gradient ascent to maximize expected cumulative discounted return $J(\\theta) = \\mathbb{E}[\\sum \\gamma^t r_t]$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تنمذج طرق تدرج السياسة وتُحسن مباشرة السياسة الاحتمالية $\\pi_\\theta(a|s)$ باستخدام الصعود التدريجي لتعظيم العائد التراكمي المتوقع.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch3_easy_4",
      "titleEn": "[EASY] Markov Decision Processes & Bellman Optimality Equations - Review 4",
      "titleAr": "[مستوى أساسي] عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل - سؤال 4",
      "questionEn": "[AI & Data Science Core Concept] Regarding Markov Decision Processes & Bellman Optimality Equations, which of the following statements is theoretically and mathematically sound? (Variant 4)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 4)",
      "optionsEn": [
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "A Markov Decision Process (MDP) models sequential decision making under uncertainty as a tuple $(S, A, P, R, \\gamma)$, where the next state transitions depend solely on the current state and action."
      ],
      "optionsAr": [
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تنمذج عملية ماركوف لاتخاذ القرار (MDP) اتخاذ القرارات المتتابعة في ظل عدم اليقين كخماسية $(S, A, P, R, \\gamma)$، حيث تعتمد الحالة التالية فقط على الحالة الحالية والإجراء."
      ],
      "correctAnswer": "A Markov Decision Process (MDP) models sequential decision making under uncertainty as a tuple $(S, A, P, R, \\gamma)$, where the next state transitions depend solely on the current state and action.",
      "correctAnswerEn": "A Markov Decision Process (MDP) models sequential decision making under uncertainty as a tuple $(S, A, P, R, \\gamma)$, where the next state transitions depend solely on the current state and action.",
      "correctAnswerAr": "تنمذج عملية ماركوف لاتخاذ القرار (MDP) اتخاذ القرارات المتتابعة في ظل عدم اليقين كخماسية $(S, A, P, R, \\gamma)$، حيث تعتمد الحالة التالية فقط على الحالة الحالية والإجراء.",
      "correctIndex": 3,
      "explanationEn": "Correct Theoretical Formulation: A Markov Decision Process (MDP) models sequential decision making under uncertainty as a tuple $(S, A, P, R, \\gamma)$, where the next state transitions depend solely on the current state and action.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تنمذج عملية ماركوف لاتخاذ القرار (MDP) اتخاذ القرارات المتتابعة في ظل عدم اليقين كخماسية $(S, A, P, R, \\gamma)$، حيث تعتمد الحالة التالية فقط على الحالة الحالية والإجراء.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Markov Decision Processes & Bellman Optimality Equations.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: A Markov Decision Process (MDP) models sequential decision making under uncertainty as a tuple $(S, A, P, R, \\gamma)$, where the next state transitions depend solely on the current state and action.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تنمذج عملية ماركوف لاتخاذ القرار (MDP) اتخاذ القرارات المتتابعة في ظل عدم اليقين كخماسية $(S, A, P, R, \\gamma)$، حيث تعتمد الحالة التالية فقط على الحالة الحالية والإجراء.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch3_easy_5",
      "titleEn": "[EASY] Deep Q-Networks (DQN), Experience Replay & Target Networks - Review 5",
      "titleAr": "[مستوى أساسي] شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف - سؤال 5",
      "questionEn": "[AI & Data Science Core Concept] Regarding Deep Q-Networks (DQN), Experience Replay & Target Networks, which of the following statements is theoretically and mathematically sound? (Variant 5)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 5)",
      "optionsEn": [
        "Deep Q-Networks parameterize action-value functions $Q(s, a; \\theta)$ with deep neural networks, enabling reinforcement learning agents to operate in high-dimensional continuous state spaces.",
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تعبر شبكات Deep Q-Networks عن دوال القيمة $Q(s, a; \\theta)$ بشبكات عصبية عميقة، مما يمكن الوكلاء من اتخاذ القرارات في فضاءات حالات مستمرة عالية الأبعاد.",
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "Deep Q-Networks parameterize action-value functions $Q(s, a; \\theta)$ with deep neural networks, enabling reinforcement learning agents to operate in high-dimensional continuous state spaces.",
      "correctAnswerEn": "Deep Q-Networks parameterize action-value functions $Q(s, a; \\theta)$ with deep neural networks, enabling reinforcement learning agents to operate in high-dimensional continuous state spaces.",
      "correctAnswerAr": "تعبر شبكات Deep Q-Networks عن دوال القيمة $Q(s, a; \\theta)$ بشبكات عصبية عميقة، مما يمكن الوكلاء من اتخاذ القرارات في فضاءات حالات مستمرة عالية الأبعاد.",
      "correctIndex": 0,
      "explanationEn": "Correct Theoretical Formulation: Deep Q-Networks parameterize action-value functions $Q(s, a; \\theta)$ with deep neural networks, enabling reinforcement learning agents to operate in high-dimensional continuous state spaces.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تعبر شبكات Deep Q-Networks عن دوال القيمة $Q(s, a; \\theta)$ بشبكات عصبية عميقة، مما يمكن الوكلاء من اتخاذ القرارات في فضاءات حالات مستمرة عالية الأبعاد.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Deep Q-Networks (DQN), Experience Replay & Target Networks.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Deep Q-Networks parameterize action-value functions $Q(s, a; \\theta)$ with deep neural networks, enabling reinforcement learning agents to operate in high-dimensional continuous state spaces.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تعبر شبكات Deep Q-Networks عن دوال القيمة $Q(s, a; \\theta)$ بشبكات عصبية عميقة، مما يمكن الوكلاء من اتخاذ القرارات في فضاءات حالات مستمرة عالية الأبعاد.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch3_easy_6",
      "titleEn": "[EASY] Policy Gradient Methods & Proximal Policy Optimization (PPO) - Review 6",
      "titleAr": "[مستوى أساسي] طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO) - سؤال 6",
      "questionEn": "[AI & Data Science Core Concept] Regarding Policy Gradient Methods & Proximal Policy Optimization (PPO), which of the following statements is theoretically and mathematically sound? (Variant 6)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 6)",
      "optionsEn": [
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Policy gradient methods directly parameterize and optimize a stochastic policy $\\pi_\\theta(a|s)$ using gradient ascent to maximize expected cumulative discounted return $J(\\theta) = \\mathbb{E}[\\sum \\gamma^t r_t]$.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "تنمذج طرق تدرج السياسة وتُحسن مباشرة السياسة الاحتمالية $\\pi_\\theta(a|s)$ باستخدام الصعود التدريجي لتعظيم العائد التراكمي المتوقع.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "Policy gradient methods directly parameterize and optimize a stochastic policy $\\pi_\\theta(a|s)$ using gradient ascent to maximize expected cumulative discounted return $J(\\theta) = \\mathbb{E}[\\sum \\gamma^t r_t]$.",
      "correctAnswerEn": "Policy gradient methods directly parameterize and optimize a stochastic policy $\\pi_\\theta(a|s)$ using gradient ascent to maximize expected cumulative discounted return $J(\\theta) = \\mathbb{E}[\\sum \\gamma^t r_t]$.",
      "correctAnswerAr": "تنمذج طرق تدرج السياسة وتُحسن مباشرة السياسة الاحتمالية $\\pi_\\theta(a|s)$ باستخدام الصعود التدريجي لتعظيم العائد التراكمي المتوقع.",
      "correctIndex": 1,
      "explanationEn": "Correct Theoretical Formulation: Policy gradient methods directly parameterize and optimize a stochastic policy $\\pi_\\theta(a|s)$ using gradient ascent to maximize expected cumulative discounted return $J(\\theta) = \\mathbb{E}[\\sum \\gamma^t r_t]$.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تنمذج طرق تدرج السياسة وتُحسن مباشرة السياسة الاحتمالية $\\pi_\\theta(a|s)$ باستخدام الصعود التدريجي لتعظيم العائد التراكمي المتوقع.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Policy Gradient Methods & Proximal Policy Optimization (PPO).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Policy gradient methods directly parameterize and optimize a stochastic policy $\\pi_\\theta(a|s)$ using gradient ascent to maximize expected cumulative discounted return $J(\\theta) = \\mathbb{E}[\\sum \\gamma^t r_t]$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تنمذج طرق تدرج السياسة وتُحسن مباشرة السياسة الاحتمالية $\\pi_\\theta(a|s)$ باستخدام الصعود التدريجي لتعظيم العائد التراكمي المتوقع.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch3_easy_7",
      "titleEn": "[EASY] Markov Decision Processes & Bellman Optimality Equations - Review 7",
      "titleAr": "[مستوى أساسي] عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل - سؤال 7",
      "questionEn": "[AI & Data Science Core Concept] Regarding Markov Decision Processes & Bellman Optimality Equations, which of the following statements is theoretically and mathematically sound? (Variant 7)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 7)",
      "optionsEn": [
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "A Markov Decision Process (MDP) models sequential decision making under uncertainty as a tuple $(S, A, P, R, \\gamma)$, where the next state transitions depend solely on the current state and action.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تنمذج عملية ماركوف لاتخاذ القرار (MDP) اتخاذ القرارات المتتابعة في ظل عدم اليقين كخماسية $(S, A, P, R, \\gamma)$، حيث تعتمد الحالة التالية فقط على الحالة الحالية والإجراء.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "A Markov Decision Process (MDP) models sequential decision making under uncertainty as a tuple $(S, A, P, R, \\gamma)$, where the next state transitions depend solely on the current state and action.",
      "correctAnswerEn": "A Markov Decision Process (MDP) models sequential decision making under uncertainty as a tuple $(S, A, P, R, \\gamma)$, where the next state transitions depend solely on the current state and action.",
      "correctAnswerAr": "تنمذج عملية ماركوف لاتخاذ القرار (MDP) اتخاذ القرارات المتتابعة في ظل عدم اليقين كخماسية $(S, A, P, R, \\gamma)$، حيث تعتمد الحالة التالية فقط على الحالة الحالية والإجراء.",
      "correctIndex": 2,
      "explanationEn": "Correct Theoretical Formulation: A Markov Decision Process (MDP) models sequential decision making under uncertainty as a tuple $(S, A, P, R, \\gamma)$, where the next state transitions depend solely on the current state and action.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تنمذج عملية ماركوف لاتخاذ القرار (MDP) اتخاذ القرارات المتتابعة في ظل عدم اليقين كخماسية $(S, A, P, R, \\gamma)$، حيث تعتمد الحالة التالية فقط على الحالة الحالية والإجراء.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Markov Decision Processes & Bellman Optimality Equations.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: A Markov Decision Process (MDP) models sequential decision making under uncertainty as a tuple $(S, A, P, R, \\gamma)$, where the next state transitions depend solely on the current state and action.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تنمذج عملية ماركوف لاتخاذ القرار (MDP) اتخاذ القرارات المتتابعة في ظل عدم اليقين كخماسية $(S, A, P, R, \\gamma)$، حيث تعتمد الحالة التالية فقط على الحالة الحالية والإجراء.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch3_easy_8",
      "titleEn": "[EASY] Deep Q-Networks (DQN), Experience Replay & Target Networks - Review 8",
      "titleAr": "[مستوى أساسي] شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف - سؤال 8",
      "questionEn": "[AI & Data Science Core Concept] Regarding Deep Q-Networks (DQN), Experience Replay & Target Networks, which of the following statements is theoretically and mathematically sound? (Variant 8)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 8)",
      "optionsEn": [
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "Deep Q-Networks parameterize action-value functions $Q(s, a; \\theta)$ with deep neural networks, enabling reinforcement learning agents to operate in high-dimensional continuous state spaces."
      ],
      "optionsAr": [
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "تعبر شبكات Deep Q-Networks عن دوال القيمة $Q(s, a; \\theta)$ بشبكات عصبية عميقة، مما يمكن الوكلاء من اتخاذ القرارات في فضاءات حالات مستمرة عالية الأبعاد."
      ],
      "correctAnswer": "Deep Q-Networks parameterize action-value functions $Q(s, a; \\theta)$ with deep neural networks, enabling reinforcement learning agents to operate in high-dimensional continuous state spaces.",
      "correctAnswerEn": "Deep Q-Networks parameterize action-value functions $Q(s, a; \\theta)$ with deep neural networks, enabling reinforcement learning agents to operate in high-dimensional continuous state spaces.",
      "correctAnswerAr": "تعبر شبكات Deep Q-Networks عن دوال القيمة $Q(s, a; \\theta)$ بشبكات عصبية عميقة، مما يمكن الوكلاء من اتخاذ القرارات في فضاءات حالات مستمرة عالية الأبعاد.",
      "correctIndex": 3,
      "explanationEn": "Correct Theoretical Formulation: Deep Q-Networks parameterize action-value functions $Q(s, a; \\theta)$ with deep neural networks, enabling reinforcement learning agents to operate in high-dimensional continuous state spaces.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تعبر شبكات Deep Q-Networks عن دوال القيمة $Q(s, a; \\theta)$ بشبكات عصبية عميقة، مما يمكن الوكلاء من اتخاذ القرارات في فضاءات حالات مستمرة عالية الأبعاد.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Deep Q-Networks (DQN), Experience Replay & Target Networks.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Deep Q-Networks parameterize action-value functions $Q(s, a; \\theta)$ with deep neural networks, enabling reinforcement learning agents to operate in high-dimensional continuous state spaces.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تعبر شبكات Deep Q-Networks عن دوال القيمة $Q(s, a; \\theta)$ بشبكات عصبية عميقة، مما يمكن الوكلاء من اتخاذ القرارات في فضاءات حالات مستمرة عالية الأبعاد.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch3_easy_9",
      "titleEn": "[EASY] Policy Gradient Methods & Proximal Policy Optimization (PPO) - Review 9",
      "titleAr": "[مستوى أساسي] طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO) - سؤال 9",
      "questionEn": "[AI & Data Science Core Concept] Regarding Policy Gradient Methods & Proximal Policy Optimization (PPO), which of the following statements is theoretically and mathematically sound? (Variant 9)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 9)",
      "optionsEn": [
        "Policy gradient methods directly parameterize and optimize a stochastic policy $\\pi_\\theta(a|s)$ using gradient ascent to maximize expected cumulative discounted return $J(\\theta) = \\mathbb{E}[\\sum \\gamma^t r_t]$.",
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "تنمذج طرق تدرج السياسة وتُحسن مباشرة السياسة الاحتمالية $\\pi_\\theta(a|s)$ باستخدام الصعود التدريجي لتعظيم العائد التراكمي المتوقع.",
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "Policy gradient methods directly parameterize and optimize a stochastic policy $\\pi_\\theta(a|s)$ using gradient ascent to maximize expected cumulative discounted return $J(\\theta) = \\mathbb{E}[\\sum \\gamma^t r_t]$.",
      "correctAnswerEn": "Policy gradient methods directly parameterize and optimize a stochastic policy $\\pi_\\theta(a|s)$ using gradient ascent to maximize expected cumulative discounted return $J(\\theta) = \\mathbb{E}[\\sum \\gamma^t r_t]$.",
      "correctAnswerAr": "تنمذج طرق تدرج السياسة وتُحسن مباشرة السياسة الاحتمالية $\\pi_\\theta(a|s)$ باستخدام الصعود التدريجي لتعظيم العائد التراكمي المتوقع.",
      "correctIndex": 0,
      "explanationEn": "Correct Theoretical Formulation: Policy gradient methods directly parameterize and optimize a stochastic policy $\\pi_\\theta(a|s)$ using gradient ascent to maximize expected cumulative discounted return $J(\\theta) = \\mathbb{E}[\\sum \\gamma^t r_t]$.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تنمذج طرق تدرج السياسة وتُحسن مباشرة السياسة الاحتمالية $\\pi_\\theta(a|s)$ باستخدام الصعود التدريجي لتعظيم العائد التراكمي المتوقع.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Policy Gradient Methods & Proximal Policy Optimization (PPO).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Policy gradient methods directly parameterize and optimize a stochastic policy $\\pi_\\theta(a|s)$ using gradient ascent to maximize expected cumulative discounted return $J(\\theta) = \\mathbb{E}[\\sum \\gamma^t r_t]$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تنمذج طرق تدرج السياسة وتُحسن مباشرة السياسة الاحتمالية $\\pi_\\theta(a|s)$ باستخدام الصعود التدريجي لتعظيم العائد التراكمي المتوقع.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch3_easy_10",
      "titleEn": "[EASY] Markov Decision Processes & Bellman Optimality Equations - Review 10",
      "titleAr": "[مستوى أساسي] عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل - سؤال 10",
      "questionEn": "[AI & Data Science Core Concept] Regarding Markov Decision Processes & Bellman Optimality Equations, which of the following statements is theoretically and mathematically sound? (Variant 10)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 10)",
      "optionsEn": [
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "A Markov Decision Process (MDP) models sequential decision making under uncertainty as a tuple $(S, A, P, R, \\gamma)$, where the next state transitions depend solely on the current state and action.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تنمذج عملية ماركوف لاتخاذ القرار (MDP) اتخاذ القرارات المتتابعة في ظل عدم اليقين كخماسية $(S, A, P, R, \\gamma)$، حيث تعتمد الحالة التالية فقط على الحالة الحالية والإجراء.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "A Markov Decision Process (MDP) models sequential decision making under uncertainty as a tuple $(S, A, P, R, \\gamma)$, where the next state transitions depend solely on the current state and action.",
      "correctAnswerEn": "A Markov Decision Process (MDP) models sequential decision making under uncertainty as a tuple $(S, A, P, R, \\gamma)$, where the next state transitions depend solely on the current state and action.",
      "correctAnswerAr": "تنمذج عملية ماركوف لاتخاذ القرار (MDP) اتخاذ القرارات المتتابعة في ظل عدم اليقين كخماسية $(S, A, P, R, \\gamma)$، حيث تعتمد الحالة التالية فقط على الحالة الحالية والإجراء.",
      "correctIndex": 1,
      "explanationEn": "Correct Theoretical Formulation: A Markov Decision Process (MDP) models sequential decision making under uncertainty as a tuple $(S, A, P, R, \\gamma)$, where the next state transitions depend solely on the current state and action.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تنمذج عملية ماركوف لاتخاذ القرار (MDP) اتخاذ القرارات المتتابعة في ظل عدم اليقين كخماسية $(S, A, P, R, \\gamma)$، حيث تعتمد الحالة التالية فقط على الحالة الحالية والإجراء.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Markov Decision Processes & Bellman Optimality Equations.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: A Markov Decision Process (MDP) models sequential decision making under uncertainty as a tuple $(S, A, P, R, \\gamma)$, where the next state transitions depend solely on the current state and action.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تنمذج عملية ماركوف لاتخاذ القرار (MDP) اتخاذ القرارات المتتابعة في ظل عدم اليقين كخماسية $(S, A, P, R, \\gamma)$، حيث تعتمد الحالة التالية فقط على الحالة الحالية والإجراء.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch3_easy_11",
      "titleEn": "[EASY] Deep Q-Networks (DQN), Experience Replay & Target Networks - Review 11",
      "titleAr": "[مستوى أساسي] شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف - سؤال 11",
      "questionEn": "[AI & Data Science Core Concept] Regarding Deep Q-Networks (DQN), Experience Replay & Target Networks, which of the following statements is theoretically and mathematically sound? (Variant 11)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 11)",
      "optionsEn": [
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "Deep Q-Networks parameterize action-value functions $Q(s, a; \\theta)$ with deep neural networks, enabling reinforcement learning agents to operate in high-dimensional continuous state spaces.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "تعبر شبكات Deep Q-Networks عن دوال القيمة $Q(s, a; \\theta)$ بشبكات عصبية عميقة، مما يمكن الوكلاء من اتخاذ القرارات في فضاءات حالات مستمرة عالية الأبعاد.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "Deep Q-Networks parameterize action-value functions $Q(s, a; \\theta)$ with deep neural networks, enabling reinforcement learning agents to operate in high-dimensional continuous state spaces.",
      "correctAnswerEn": "Deep Q-Networks parameterize action-value functions $Q(s, a; \\theta)$ with deep neural networks, enabling reinforcement learning agents to operate in high-dimensional continuous state spaces.",
      "correctAnswerAr": "تعبر شبكات Deep Q-Networks عن دوال القيمة $Q(s, a; \\theta)$ بشبكات عصبية عميقة، مما يمكن الوكلاء من اتخاذ القرارات في فضاءات حالات مستمرة عالية الأبعاد.",
      "correctIndex": 2,
      "explanationEn": "Correct Theoretical Formulation: Deep Q-Networks parameterize action-value functions $Q(s, a; \\theta)$ with deep neural networks, enabling reinforcement learning agents to operate in high-dimensional continuous state spaces.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تعبر شبكات Deep Q-Networks عن دوال القيمة $Q(s, a; \\theta)$ بشبكات عصبية عميقة، مما يمكن الوكلاء من اتخاذ القرارات في فضاءات حالات مستمرة عالية الأبعاد.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Deep Q-Networks (DQN), Experience Replay & Target Networks.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Deep Q-Networks parameterize action-value functions $Q(s, a; \\theta)$ with deep neural networks, enabling reinforcement learning agents to operate in high-dimensional continuous state spaces.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تعبر شبكات Deep Q-Networks عن دوال القيمة $Q(s, a; \\theta)$ بشبكات عصبية عميقة، مما يمكن الوكلاء من اتخاذ القرارات في فضاءات حالات مستمرة عالية الأبعاد.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch3_easy_12",
      "titleEn": "[EASY] Policy Gradient Methods & Proximal Policy Optimization (PPO) - Review 12",
      "titleAr": "[مستوى أساسي] طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO) - سؤال 12",
      "questionEn": "[AI & Data Science Core Concept] Regarding Policy Gradient Methods & Proximal Policy Optimization (PPO), which of the following statements is theoretically and mathematically sound? (Variant 12)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 12)",
      "optionsEn": [
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "Policy gradient methods directly parameterize and optimize a stochastic policy $\\pi_\\theta(a|s)$ using gradient ascent to maximize expected cumulative discounted return $J(\\theta) = \\mathbb{E}[\\sum \\gamma^t r_t]$."
      ],
      "optionsAr": [
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "تنمذج طرق تدرج السياسة وتُحسن مباشرة السياسة الاحتمالية $\\pi_\\theta(a|s)$ باستخدام الصعود التدريجي لتعظيم العائد التراكمي المتوقع."
      ],
      "correctAnswer": "Policy gradient methods directly parameterize and optimize a stochastic policy $\\pi_\\theta(a|s)$ using gradient ascent to maximize expected cumulative discounted return $J(\\theta) = \\mathbb{E}[\\sum \\gamma^t r_t]$.",
      "correctAnswerEn": "Policy gradient methods directly parameterize and optimize a stochastic policy $\\pi_\\theta(a|s)$ using gradient ascent to maximize expected cumulative discounted return $J(\\theta) = \\mathbb{E}[\\sum \\gamma^t r_t]$.",
      "correctAnswerAr": "تنمذج طرق تدرج السياسة وتُحسن مباشرة السياسة الاحتمالية $\\pi_\\theta(a|s)$ باستخدام الصعود التدريجي لتعظيم العائد التراكمي المتوقع.",
      "correctIndex": 3,
      "explanationEn": "Correct Theoretical Formulation: Policy gradient methods directly parameterize and optimize a stochastic policy $\\pi_\\theta(a|s)$ using gradient ascent to maximize expected cumulative discounted return $J(\\theta) = \\mathbb{E}[\\sum \\gamma^t r_t]$.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تنمذج طرق تدرج السياسة وتُحسن مباشرة السياسة الاحتمالية $\\pi_\\theta(a|s)$ باستخدام الصعود التدريجي لتعظيم العائد التراكمي المتوقع.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Policy Gradient Methods & Proximal Policy Optimization (PPO).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Policy gradient methods directly parameterize and optimize a stochastic policy $\\pi_\\theta(a|s)$ using gradient ascent to maximize expected cumulative discounted return $J(\\theta) = \\mathbb{E}[\\sum \\gamma^t r_t]$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تنمذج طرق تدرج السياسة وتُحسن مباشرة السياسة الاحتمالية $\\pi_\\theta(a|s)$ باستخدام الصعود التدريجي لتعظيم العائد التراكمي المتوقع.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch3_easy_13",
      "titleEn": "[EASY] Markov Decision Processes & Bellman Optimality Equations - Review 13",
      "titleAr": "[مستوى أساسي] عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل - سؤال 13",
      "questionEn": "[AI & Data Science Core Concept] Regarding Markov Decision Processes & Bellman Optimality Equations, which of the following statements is theoretically and mathematically sound? (Variant 13)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 13)",
      "optionsEn": [
        "A Markov Decision Process (MDP) models sequential decision making under uncertainty as a tuple $(S, A, P, R, \\gamma)$, where the next state transitions depend solely on the current state and action.",
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "تنمذج عملية ماركوف لاتخاذ القرار (MDP) اتخاذ القرارات المتتابعة في ظل عدم اليقين كخماسية $(S, A, P, R, \\gamma)$، حيث تعتمد الحالة التالية فقط على الحالة الحالية والإجراء.",
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "A Markov Decision Process (MDP) models sequential decision making under uncertainty as a tuple $(S, A, P, R, \\gamma)$, where the next state transitions depend solely on the current state and action.",
      "correctAnswerEn": "A Markov Decision Process (MDP) models sequential decision making under uncertainty as a tuple $(S, A, P, R, \\gamma)$, where the next state transitions depend solely on the current state and action.",
      "correctAnswerAr": "تنمذج عملية ماركوف لاتخاذ القرار (MDP) اتخاذ القرارات المتتابعة في ظل عدم اليقين كخماسية $(S, A, P, R, \\gamma)$، حيث تعتمد الحالة التالية فقط على الحالة الحالية والإجراء.",
      "correctIndex": 0,
      "explanationEn": "Correct Theoretical Formulation: A Markov Decision Process (MDP) models sequential decision making under uncertainty as a tuple $(S, A, P, R, \\gamma)$, where the next state transitions depend solely on the current state and action.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تنمذج عملية ماركوف لاتخاذ القرار (MDP) اتخاذ القرارات المتتابعة في ظل عدم اليقين كخماسية $(S, A, P, R, \\gamma)$، حيث تعتمد الحالة التالية فقط على الحالة الحالية والإجراء.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Markov Decision Processes & Bellman Optimality Equations.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: A Markov Decision Process (MDP) models sequential decision making under uncertainty as a tuple $(S, A, P, R, \\gamma)$, where the next state transitions depend solely on the current state and action.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تنمذج عملية ماركوف لاتخاذ القرار (MDP) اتخاذ القرارات المتتابعة في ظل عدم اليقين كخماسية $(S, A, P, R, \\gamma)$، حيث تعتمد الحالة التالية فقط على الحالة الحالية والإجراء.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch3_easy_14",
      "titleEn": "[EASY] Deep Q-Networks (DQN), Experience Replay & Target Networks - Review 14",
      "titleAr": "[مستوى أساسي] شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف - سؤال 14",
      "questionEn": "[AI & Data Science Core Concept] Regarding Deep Q-Networks (DQN), Experience Replay & Target Networks, which of the following statements is theoretically and mathematically sound? (Variant 14)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 14)",
      "optionsEn": [
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "Deep Q-Networks parameterize action-value functions $Q(s, a; \\theta)$ with deep neural networks, enabling reinforcement learning agents to operate in high-dimensional continuous state spaces.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "تعبر شبكات Deep Q-Networks عن دوال القيمة $Q(s, a; \\theta)$ بشبكات عصبية عميقة، مما يمكن الوكلاء من اتخاذ القرارات في فضاءات حالات مستمرة عالية الأبعاد.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "Deep Q-Networks parameterize action-value functions $Q(s, a; \\theta)$ with deep neural networks, enabling reinforcement learning agents to operate in high-dimensional continuous state spaces.",
      "correctAnswerEn": "Deep Q-Networks parameterize action-value functions $Q(s, a; \\theta)$ with deep neural networks, enabling reinforcement learning agents to operate in high-dimensional continuous state spaces.",
      "correctAnswerAr": "تعبر شبكات Deep Q-Networks عن دوال القيمة $Q(s, a; \\theta)$ بشبكات عصبية عميقة، مما يمكن الوكلاء من اتخاذ القرارات في فضاءات حالات مستمرة عالية الأبعاد.",
      "correctIndex": 1,
      "explanationEn": "Correct Theoretical Formulation: Deep Q-Networks parameterize action-value functions $Q(s, a; \\theta)$ with deep neural networks, enabling reinforcement learning agents to operate in high-dimensional continuous state spaces.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تعبر شبكات Deep Q-Networks عن دوال القيمة $Q(s, a; \\theta)$ بشبكات عصبية عميقة، مما يمكن الوكلاء من اتخاذ القرارات في فضاءات حالات مستمرة عالية الأبعاد.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Deep Q-Networks (DQN), Experience Replay & Target Networks.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Deep Q-Networks parameterize action-value functions $Q(s, a; \\theta)$ with deep neural networks, enabling reinforcement learning agents to operate in high-dimensional continuous state spaces.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تعبر شبكات Deep Q-Networks عن دوال القيمة $Q(s, a; \\theta)$ بشبكات عصبية عميقة، مما يمكن الوكلاء من اتخاذ القرارات في فضاءات حالات مستمرة عالية الأبعاد.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch3_easy_15",
      "titleEn": "[EASY] Policy Gradient Methods & Proximal Policy Optimization (PPO) - Review 15",
      "titleAr": "[مستوى أساسي] طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO) - سؤال 15",
      "questionEn": "[AI & Data Science Core Concept] Regarding Policy Gradient Methods & Proximal Policy Optimization (PPO), which of the following statements is theoretically and mathematically sound? (Variant 15)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 15)",
      "optionsEn": [
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Policy gradient methods directly parameterize and optimize a stochastic policy $\\pi_\\theta(a|s)$ using gradient ascent to maximize expected cumulative discounted return $J(\\theta) = \\mathbb{E}[\\sum \\gamma^t r_t]$.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تنمذج طرق تدرج السياسة وتُحسن مباشرة السياسة الاحتمالية $\\pi_\\theta(a|s)$ باستخدام الصعود التدريجي لتعظيم العائد التراكمي المتوقع.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "Policy gradient methods directly parameterize and optimize a stochastic policy $\\pi_\\theta(a|s)$ using gradient ascent to maximize expected cumulative discounted return $J(\\theta) = \\mathbb{E}[\\sum \\gamma^t r_t]$.",
      "correctAnswerEn": "Policy gradient methods directly parameterize and optimize a stochastic policy $\\pi_\\theta(a|s)$ using gradient ascent to maximize expected cumulative discounted return $J(\\theta) = \\mathbb{E}[\\sum \\gamma^t r_t]$.",
      "correctAnswerAr": "تنمذج طرق تدرج السياسة وتُحسن مباشرة السياسة الاحتمالية $\\pi_\\theta(a|s)$ باستخدام الصعود التدريجي لتعظيم العائد التراكمي المتوقع.",
      "correctIndex": 2,
      "explanationEn": "Correct Theoretical Formulation: Policy gradient methods directly parameterize and optimize a stochastic policy $\\pi_\\theta(a|s)$ using gradient ascent to maximize expected cumulative discounted return $J(\\theta) = \\mathbb{E}[\\sum \\gamma^t r_t]$.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تنمذج طرق تدرج السياسة وتُحسن مباشرة السياسة الاحتمالية $\\pi_\\theta(a|s)$ باستخدام الصعود التدريجي لتعظيم العائد التراكمي المتوقع.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Policy Gradient Methods & Proximal Policy Optimization (PPO).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Policy gradient methods directly parameterize and optimize a stochastic policy $\\pi_\\theta(a|s)$ using gradient ascent to maximize expected cumulative discounted return $J(\\theta) = \\mathbb{E}[\\sum \\gamma^t r_t]$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تنمذج طرق تدرج السياسة وتُحسن مباشرة السياسة الاحتمالية $\\pi_\\theta(a|s)$ باستخدام الصعود التدريجي لتعظيم العائد التراكمي المتوقع.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch3_easy_16",
      "titleEn": "[EASY] Markov Decision Processes & Bellman Optimality Equations - Review 16",
      "titleAr": "[مستوى أساسي] عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل - سؤال 16",
      "questionEn": "[AI & Data Science Core Concept] Regarding Markov Decision Processes & Bellman Optimality Equations, which of the following statements is theoretically and mathematically sound? (Variant 16)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 16)",
      "optionsEn": [
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "A Markov Decision Process (MDP) models sequential decision making under uncertainty as a tuple $(S, A, P, R, \\gamma)$, where the next state transitions depend solely on the current state and action."
      ],
      "optionsAr": [
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تنمذج عملية ماركوف لاتخاذ القرار (MDP) اتخاذ القرارات المتتابعة في ظل عدم اليقين كخماسية $(S, A, P, R, \\gamma)$، حيث تعتمد الحالة التالية فقط على الحالة الحالية والإجراء."
      ],
      "correctAnswer": "A Markov Decision Process (MDP) models sequential decision making under uncertainty as a tuple $(S, A, P, R, \\gamma)$, where the next state transitions depend solely on the current state and action.",
      "correctAnswerEn": "A Markov Decision Process (MDP) models sequential decision making under uncertainty as a tuple $(S, A, P, R, \\gamma)$, where the next state transitions depend solely on the current state and action.",
      "correctAnswerAr": "تنمذج عملية ماركوف لاتخاذ القرار (MDP) اتخاذ القرارات المتتابعة في ظل عدم اليقين كخماسية $(S, A, P, R, \\gamma)$، حيث تعتمد الحالة التالية فقط على الحالة الحالية والإجراء.",
      "correctIndex": 3,
      "explanationEn": "Correct Theoretical Formulation: A Markov Decision Process (MDP) models sequential decision making under uncertainty as a tuple $(S, A, P, R, \\gamma)$, where the next state transitions depend solely on the current state and action.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تنمذج عملية ماركوف لاتخاذ القرار (MDP) اتخاذ القرارات المتتابعة في ظل عدم اليقين كخماسية $(S, A, P, R, \\gamma)$، حيث تعتمد الحالة التالية فقط على الحالة الحالية والإجراء.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Markov Decision Processes & Bellman Optimality Equations.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: A Markov Decision Process (MDP) models sequential decision making under uncertainty as a tuple $(S, A, P, R, \\gamma)$, where the next state transitions depend solely on the current state and action.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تنمذج عملية ماركوف لاتخاذ القرار (MDP) اتخاذ القرارات المتتابعة في ظل عدم اليقين كخماسية $(S, A, P, R, \\gamma)$، حيث تعتمد الحالة التالية فقط على الحالة الحالية والإجراء.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch3_easy_17",
      "titleEn": "[EASY] Deep Q-Networks (DQN), Experience Replay & Target Networks - Review 17",
      "titleAr": "[مستوى أساسي] شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف - سؤال 17",
      "questionEn": "[AI & Data Science Core Concept] Regarding Deep Q-Networks (DQN), Experience Replay & Target Networks, which of the following statements is theoretically and mathematically sound? (Variant 17)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 17)",
      "optionsEn": [
        "Deep Q-Networks parameterize action-value functions $Q(s, a; \\theta)$ with deep neural networks, enabling reinforcement learning agents to operate in high-dimensional continuous state spaces.",
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "تعبر شبكات Deep Q-Networks عن دوال القيمة $Q(s, a; \\theta)$ بشبكات عصبية عميقة، مما يمكن الوكلاء من اتخاذ القرارات في فضاءات حالات مستمرة عالية الأبعاد.",
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "Deep Q-Networks parameterize action-value functions $Q(s, a; \\theta)$ with deep neural networks, enabling reinforcement learning agents to operate in high-dimensional continuous state spaces.",
      "correctAnswerEn": "Deep Q-Networks parameterize action-value functions $Q(s, a; \\theta)$ with deep neural networks, enabling reinforcement learning agents to operate in high-dimensional continuous state spaces.",
      "correctAnswerAr": "تعبر شبكات Deep Q-Networks عن دوال القيمة $Q(s, a; \\theta)$ بشبكات عصبية عميقة، مما يمكن الوكلاء من اتخاذ القرارات في فضاءات حالات مستمرة عالية الأبعاد.",
      "correctIndex": 0,
      "explanationEn": "Correct Theoretical Formulation: Deep Q-Networks parameterize action-value functions $Q(s, a; \\theta)$ with deep neural networks, enabling reinforcement learning agents to operate in high-dimensional continuous state spaces.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تعبر شبكات Deep Q-Networks عن دوال القيمة $Q(s, a; \\theta)$ بشبكات عصبية عميقة، مما يمكن الوكلاء من اتخاذ القرارات في فضاءات حالات مستمرة عالية الأبعاد.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Deep Q-Networks (DQN), Experience Replay & Target Networks.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Deep Q-Networks parameterize action-value functions $Q(s, a; \\theta)$ with deep neural networks, enabling reinforcement learning agents to operate in high-dimensional continuous state spaces.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تعبر شبكات Deep Q-Networks عن دوال القيمة $Q(s, a; \\theta)$ بشبكات عصبية عميقة، مما يمكن الوكلاء من اتخاذ القرارات في فضاءات حالات مستمرة عالية الأبعاد.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch3_easy_18",
      "titleEn": "[EASY] Policy Gradient Methods & Proximal Policy Optimization (PPO) - Review 18",
      "titleAr": "[مستوى أساسي] طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO) - سؤال 18",
      "questionEn": "[AI & Data Science Core Concept] Regarding Policy Gradient Methods & Proximal Policy Optimization (PPO), which of the following statements is theoretically and mathematically sound? (Variant 18)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 18)",
      "optionsEn": [
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "Policy gradient methods directly parameterize and optimize a stochastic policy $\\pi_\\theta(a|s)$ using gradient ascent to maximize expected cumulative discounted return $J(\\theta) = \\mathbb{E}[\\sum \\gamma^t r_t]$.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تنمذج طرق تدرج السياسة وتُحسن مباشرة السياسة الاحتمالية $\\pi_\\theta(a|s)$ باستخدام الصعود التدريجي لتعظيم العائد التراكمي المتوقع.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "Policy gradient methods directly parameterize and optimize a stochastic policy $\\pi_\\theta(a|s)$ using gradient ascent to maximize expected cumulative discounted return $J(\\theta) = \\mathbb{E}[\\sum \\gamma^t r_t]$.",
      "correctAnswerEn": "Policy gradient methods directly parameterize and optimize a stochastic policy $\\pi_\\theta(a|s)$ using gradient ascent to maximize expected cumulative discounted return $J(\\theta) = \\mathbb{E}[\\sum \\gamma^t r_t]$.",
      "correctAnswerAr": "تنمذج طرق تدرج السياسة وتُحسن مباشرة السياسة الاحتمالية $\\pi_\\theta(a|s)$ باستخدام الصعود التدريجي لتعظيم العائد التراكمي المتوقع.",
      "correctIndex": 1,
      "explanationEn": "Correct Theoretical Formulation: Policy gradient methods directly parameterize and optimize a stochastic policy $\\pi_\\theta(a|s)$ using gradient ascent to maximize expected cumulative discounted return $J(\\theta) = \\mathbb{E}[\\sum \\gamma^t r_t]$.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تنمذج طرق تدرج السياسة وتُحسن مباشرة السياسة الاحتمالية $\\pi_\\theta(a|s)$ باستخدام الصعود التدريجي لتعظيم العائد التراكمي المتوقع.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Policy Gradient Methods & Proximal Policy Optimization (PPO).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Policy gradient methods directly parameterize and optimize a stochastic policy $\\pi_\\theta(a|s)$ using gradient ascent to maximize expected cumulative discounted return $J(\\theta) = \\mathbb{E}[\\sum \\gamma^t r_t]$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تنمذج طرق تدرج السياسة وتُحسن مباشرة السياسة الاحتمالية $\\pi_\\theta(a|s)$ باستخدام الصعود التدريجي لتعظيم العائد التراكمي المتوقع.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch3_easy_19",
      "titleEn": "[EASY] Markov Decision Processes & Bellman Optimality Equations - Review 19",
      "titleAr": "[مستوى أساسي] عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل - سؤال 19",
      "questionEn": "[AI & Data Science Core Concept] Regarding Markov Decision Processes & Bellman Optimality Equations, which of the following statements is theoretically and mathematically sound? (Variant 19)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 19)",
      "optionsEn": [
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "A Markov Decision Process (MDP) models sequential decision making under uncertainty as a tuple $(S, A, P, R, \\gamma)$, where the next state transitions depend solely on the current state and action.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تنمذج عملية ماركوف لاتخاذ القرار (MDP) اتخاذ القرارات المتتابعة في ظل عدم اليقين كخماسية $(S, A, P, R, \\gamma)$، حيث تعتمد الحالة التالية فقط على الحالة الحالية والإجراء.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "A Markov Decision Process (MDP) models sequential decision making under uncertainty as a tuple $(S, A, P, R, \\gamma)$, where the next state transitions depend solely on the current state and action.",
      "correctAnswerEn": "A Markov Decision Process (MDP) models sequential decision making under uncertainty as a tuple $(S, A, P, R, \\gamma)$, where the next state transitions depend solely on the current state and action.",
      "correctAnswerAr": "تنمذج عملية ماركوف لاتخاذ القرار (MDP) اتخاذ القرارات المتتابعة في ظل عدم اليقين كخماسية $(S, A, P, R, \\gamma)$، حيث تعتمد الحالة التالية فقط على الحالة الحالية والإجراء.",
      "correctIndex": 2,
      "explanationEn": "Correct Theoretical Formulation: A Markov Decision Process (MDP) models sequential decision making under uncertainty as a tuple $(S, A, P, R, \\gamma)$, where the next state transitions depend solely on the current state and action.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تنمذج عملية ماركوف لاتخاذ القرار (MDP) اتخاذ القرارات المتتابعة في ظل عدم اليقين كخماسية $(S, A, P, R, \\gamma)$، حيث تعتمد الحالة التالية فقط على الحالة الحالية والإجراء.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Markov Decision Processes & Bellman Optimality Equations.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: A Markov Decision Process (MDP) models sequential decision making under uncertainty as a tuple $(S, A, P, R, \\gamma)$, where the next state transitions depend solely on the current state and action.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تنمذج عملية ماركوف لاتخاذ القرار (MDP) اتخاذ القرارات المتتابعة في ظل عدم اليقين كخماسية $(S, A, P, R, \\gamma)$، حيث تعتمد الحالة التالية فقط على الحالة الحالية والإجراء.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch3_easy_20",
      "titleEn": "[EASY] Deep Q-Networks (DQN), Experience Replay & Target Networks - Review 20",
      "titleAr": "[مستوى أساسي] شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف - سؤال 20",
      "questionEn": "[AI & Data Science Core Concept] Regarding Deep Q-Networks (DQN), Experience Replay & Target Networks, which of the following statements is theoretically and mathematically sound? (Variant 20)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 20)",
      "optionsEn": [
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Deep Q-Networks parameterize action-value functions $Q(s, a; \\theta)$ with deep neural networks, enabling reinforcement learning agents to operate in high-dimensional continuous state spaces."
      ],
      "optionsAr": [
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "تعبر شبكات Deep Q-Networks عن دوال القيمة $Q(s, a; \\theta)$ بشبكات عصبية عميقة، مما يمكن الوكلاء من اتخاذ القرارات في فضاءات حالات مستمرة عالية الأبعاد."
      ],
      "correctAnswer": "Deep Q-Networks parameterize action-value functions $Q(s, a; \\theta)$ with deep neural networks, enabling reinforcement learning agents to operate in high-dimensional continuous state spaces.",
      "correctAnswerEn": "Deep Q-Networks parameterize action-value functions $Q(s, a; \\theta)$ with deep neural networks, enabling reinforcement learning agents to operate in high-dimensional continuous state spaces.",
      "correctAnswerAr": "تعبر شبكات Deep Q-Networks عن دوال القيمة $Q(s, a; \\theta)$ بشبكات عصبية عميقة، مما يمكن الوكلاء من اتخاذ القرارات في فضاءات حالات مستمرة عالية الأبعاد.",
      "correctIndex": 3,
      "explanationEn": "Correct Theoretical Formulation: Deep Q-Networks parameterize action-value functions $Q(s, a; \\theta)$ with deep neural networks, enabling reinforcement learning agents to operate in high-dimensional continuous state spaces.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تعبر شبكات Deep Q-Networks عن دوال القيمة $Q(s, a; \\theta)$ بشبكات عصبية عميقة، مما يمكن الوكلاء من اتخاذ القرارات في فضاءات حالات مستمرة عالية الأبعاد.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Deep Q-Networks (DQN), Experience Replay & Target Networks.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Deep Q-Networks parameterize action-value functions $Q(s, a; \\theta)$ with deep neural networks, enabling reinforcement learning agents to operate in high-dimensional continuous state spaces.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تعبر شبكات Deep Q-Networks عن دوال القيمة $Q(s, a; \\theta)$ بشبكات عصبية عميقة، مما يمكن الوكلاء من اتخاذ القرارات في فضاءات حالات مستمرة عالية الأبعاد.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch3_easy_21",
      "titleEn": "[EASY] Policy Gradient Methods & Proximal Policy Optimization (PPO) - Review 21",
      "titleAr": "[مستوى أساسي] طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO) - سؤال 21",
      "questionEn": "[AI & Data Science Core Concept] Regarding Policy Gradient Methods & Proximal Policy Optimization (PPO), which of the following statements is theoretically and mathematically sound? (Variant 21)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 21)",
      "optionsEn": [
        "Policy gradient methods directly parameterize and optimize a stochastic policy $\\pi_\\theta(a|s)$ using gradient ascent to maximize expected cumulative discounted return $J(\\theta) = \\mathbb{E}[\\sum \\gamma^t r_t]$.",
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "تنمذج طرق تدرج السياسة وتُحسن مباشرة السياسة الاحتمالية $\\pi_\\theta(a|s)$ باستخدام الصعود التدريجي لتعظيم العائد التراكمي المتوقع.",
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "Policy gradient methods directly parameterize and optimize a stochastic policy $\\pi_\\theta(a|s)$ using gradient ascent to maximize expected cumulative discounted return $J(\\theta) = \\mathbb{E}[\\sum \\gamma^t r_t]$.",
      "correctAnswerEn": "Policy gradient methods directly parameterize and optimize a stochastic policy $\\pi_\\theta(a|s)$ using gradient ascent to maximize expected cumulative discounted return $J(\\theta) = \\mathbb{E}[\\sum \\gamma^t r_t]$.",
      "correctAnswerAr": "تنمذج طرق تدرج السياسة وتُحسن مباشرة السياسة الاحتمالية $\\pi_\\theta(a|s)$ باستخدام الصعود التدريجي لتعظيم العائد التراكمي المتوقع.",
      "correctIndex": 0,
      "explanationEn": "Correct Theoretical Formulation: Policy gradient methods directly parameterize and optimize a stochastic policy $\\pi_\\theta(a|s)$ using gradient ascent to maximize expected cumulative discounted return $J(\\theta) = \\mathbb{E}[\\sum \\gamma^t r_t]$.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تنمذج طرق تدرج السياسة وتُحسن مباشرة السياسة الاحتمالية $\\pi_\\theta(a|s)$ باستخدام الصعود التدريجي لتعظيم العائد التراكمي المتوقع.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Policy Gradient Methods & Proximal Policy Optimization (PPO).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Policy gradient methods directly parameterize and optimize a stochastic policy $\\pi_\\theta(a|s)$ using gradient ascent to maximize expected cumulative discounted return $J(\\theta) = \\mathbb{E}[\\sum \\gamma^t r_t]$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تنمذج طرق تدرج السياسة وتُحسن مباشرة السياسة الاحتمالية $\\pi_\\theta(a|s)$ باستخدام الصعود التدريجي لتعظيم العائد التراكمي المتوقع.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch3_easy_22",
      "titleEn": "[EASY] Markov Decision Processes & Bellman Optimality Equations - Review 22",
      "titleAr": "[مستوى أساسي] عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل - سؤال 22",
      "questionEn": "[AI & Data Science Core Concept] Regarding Markov Decision Processes & Bellman Optimality Equations, which of the following statements is theoretically and mathematically sound? (Variant 22)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 22)",
      "optionsEn": [
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "A Markov Decision Process (MDP) models sequential decision making under uncertainty as a tuple $(S, A, P, R, \\gamma)$, where the next state transitions depend solely on the current state and action.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تنمذج عملية ماركوف لاتخاذ القرار (MDP) اتخاذ القرارات المتتابعة في ظل عدم اليقين كخماسية $(S, A, P, R, \\gamma)$، حيث تعتمد الحالة التالية فقط على الحالة الحالية والإجراء.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "A Markov Decision Process (MDP) models sequential decision making under uncertainty as a tuple $(S, A, P, R, \\gamma)$, where the next state transitions depend solely on the current state and action.",
      "correctAnswerEn": "A Markov Decision Process (MDP) models sequential decision making under uncertainty as a tuple $(S, A, P, R, \\gamma)$, where the next state transitions depend solely on the current state and action.",
      "correctAnswerAr": "تنمذج عملية ماركوف لاتخاذ القرار (MDP) اتخاذ القرارات المتتابعة في ظل عدم اليقين كخماسية $(S, A, P, R, \\gamma)$، حيث تعتمد الحالة التالية فقط على الحالة الحالية والإجراء.",
      "correctIndex": 1,
      "explanationEn": "Correct Theoretical Formulation: A Markov Decision Process (MDP) models sequential decision making under uncertainty as a tuple $(S, A, P, R, \\gamma)$, where the next state transitions depend solely on the current state and action.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تنمذج عملية ماركوف لاتخاذ القرار (MDP) اتخاذ القرارات المتتابعة في ظل عدم اليقين كخماسية $(S, A, P, R, \\gamma)$، حيث تعتمد الحالة التالية فقط على الحالة الحالية والإجراء.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Markov Decision Processes & Bellman Optimality Equations.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: A Markov Decision Process (MDP) models sequential decision making under uncertainty as a tuple $(S, A, P, R, \\gamma)$, where the next state transitions depend solely on the current state and action.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تنمذج عملية ماركوف لاتخاذ القرار (MDP) اتخاذ القرارات المتتابعة في ظل عدم اليقين كخماسية $(S, A, P, R, \\gamma)$، حيث تعتمد الحالة التالية فقط على الحالة الحالية والإجراء.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch3_easy_23",
      "titleEn": "[EASY] Deep Q-Networks (DQN), Experience Replay & Target Networks - Review 23",
      "titleAr": "[مستوى أساسي] شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف - سؤال 23",
      "questionEn": "[AI & Data Science Core Concept] Regarding Deep Q-Networks (DQN), Experience Replay & Target Networks, which of the following statements is theoretically and mathematically sound? (Variant 23)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 23)",
      "optionsEn": [
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks parameterize action-value functions $Q(s, a; \\theta)$ with deep neural networks, enabling reinforcement learning agents to operate in high-dimensional continuous state spaces.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تعبر شبكات Deep Q-Networks عن دوال القيمة $Q(s, a; \\theta)$ بشبكات عصبية عميقة، مما يمكن الوكلاء من اتخاذ القرارات في فضاءات حالات مستمرة عالية الأبعاد.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "Deep Q-Networks parameterize action-value functions $Q(s, a; \\theta)$ with deep neural networks, enabling reinforcement learning agents to operate in high-dimensional continuous state spaces.",
      "correctAnswerEn": "Deep Q-Networks parameterize action-value functions $Q(s, a; \\theta)$ with deep neural networks, enabling reinforcement learning agents to operate in high-dimensional continuous state spaces.",
      "correctAnswerAr": "تعبر شبكات Deep Q-Networks عن دوال القيمة $Q(s, a; \\theta)$ بشبكات عصبية عميقة، مما يمكن الوكلاء من اتخاذ القرارات في فضاءات حالات مستمرة عالية الأبعاد.",
      "correctIndex": 2,
      "explanationEn": "Correct Theoretical Formulation: Deep Q-Networks parameterize action-value functions $Q(s, a; \\theta)$ with deep neural networks, enabling reinforcement learning agents to operate in high-dimensional continuous state spaces.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تعبر شبكات Deep Q-Networks عن دوال القيمة $Q(s, a; \\theta)$ بشبكات عصبية عميقة، مما يمكن الوكلاء من اتخاذ القرارات في فضاءات حالات مستمرة عالية الأبعاد.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Deep Q-Networks (DQN), Experience Replay & Target Networks.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Deep Q-Networks parameterize action-value functions $Q(s, a; \\theta)$ with deep neural networks, enabling reinforcement learning agents to operate in high-dimensional continuous state spaces.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تعبر شبكات Deep Q-Networks عن دوال القيمة $Q(s, a; \\theta)$ بشبكات عصبية عميقة، مما يمكن الوكلاء من اتخاذ القرارات في فضاءات حالات مستمرة عالية الأبعاد.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch3_easy_24",
      "titleEn": "[EASY] Policy Gradient Methods & Proximal Policy Optimization (PPO) - Review 24",
      "titleAr": "[مستوى أساسي] طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO) - سؤال 24",
      "questionEn": "[AI & Data Science Core Concept] Regarding Policy Gradient Methods & Proximal Policy Optimization (PPO), which of the following statements is theoretically and mathematically sound? (Variant 24)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 24)",
      "optionsEn": [
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "Policy gradient methods directly parameterize and optimize a stochastic policy $\\pi_\\theta(a|s)$ using gradient ascent to maximize expected cumulative discounted return $J(\\theta) = \\mathbb{E}[\\sum \\gamma^t r_t]$."
      ],
      "optionsAr": [
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تنمذج طرق تدرج السياسة وتُحسن مباشرة السياسة الاحتمالية $\\pi_\\theta(a|s)$ باستخدام الصعود التدريجي لتعظيم العائد التراكمي المتوقع."
      ],
      "correctAnswer": "Policy gradient methods directly parameterize and optimize a stochastic policy $\\pi_\\theta(a|s)$ using gradient ascent to maximize expected cumulative discounted return $J(\\theta) = \\mathbb{E}[\\sum \\gamma^t r_t]$.",
      "correctAnswerEn": "Policy gradient methods directly parameterize and optimize a stochastic policy $\\pi_\\theta(a|s)$ using gradient ascent to maximize expected cumulative discounted return $J(\\theta) = \\mathbb{E}[\\sum \\gamma^t r_t]$.",
      "correctAnswerAr": "تنمذج طرق تدرج السياسة وتُحسن مباشرة السياسة الاحتمالية $\\pi_\\theta(a|s)$ باستخدام الصعود التدريجي لتعظيم العائد التراكمي المتوقع.",
      "correctIndex": 3,
      "explanationEn": "Correct Theoretical Formulation: Policy gradient methods directly parameterize and optimize a stochastic policy $\\pi_\\theta(a|s)$ using gradient ascent to maximize expected cumulative discounted return $J(\\theta) = \\mathbb{E}[\\sum \\gamma^t r_t]$.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تنمذج طرق تدرج السياسة وتُحسن مباشرة السياسة الاحتمالية $\\pi_\\theta(a|s)$ باستخدام الصعود التدريجي لتعظيم العائد التراكمي المتوقع.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Policy Gradient Methods & Proximal Policy Optimization (PPO).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Policy gradient methods directly parameterize and optimize a stochastic policy $\\pi_\\theta(a|s)$ using gradient ascent to maximize expected cumulative discounted return $J(\\theta) = \\mathbb{E}[\\sum \\gamma^t r_t]$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تنمذج طرق تدرج السياسة وتُحسن مباشرة السياسة الاحتمالية $\\pi_\\theta(a|s)$ باستخدام الصعود التدريجي لتعظيم العائد التراكمي المتوقع.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch3_easy_25",
      "titleEn": "[EASY] Markov Decision Processes & Bellman Optimality Equations - Review 25",
      "titleAr": "[مستوى أساسي] عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل - سؤال 25",
      "questionEn": "[AI & Data Science Core Concept] Regarding Markov Decision Processes & Bellman Optimality Equations, which of the following statements is theoretically and mathematically sound? (Variant 25)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 25)",
      "optionsEn": [
        "A Markov Decision Process (MDP) models sequential decision making under uncertainty as a tuple $(S, A, P, R, \\gamma)$, where the next state transitions depend solely on the current state and action.",
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تنمذج عملية ماركوف لاتخاذ القرار (MDP) اتخاذ القرارات المتتابعة في ظل عدم اليقين كخماسية $(S, A, P, R, \\gamma)$، حيث تعتمد الحالة التالية فقط على الحالة الحالية والإجراء.",
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "A Markov Decision Process (MDP) models sequential decision making under uncertainty as a tuple $(S, A, P, R, \\gamma)$, where the next state transitions depend solely on the current state and action.",
      "correctAnswerEn": "A Markov Decision Process (MDP) models sequential decision making under uncertainty as a tuple $(S, A, P, R, \\gamma)$, where the next state transitions depend solely on the current state and action.",
      "correctAnswerAr": "تنمذج عملية ماركوف لاتخاذ القرار (MDP) اتخاذ القرارات المتتابعة في ظل عدم اليقين كخماسية $(S, A, P, R, \\gamma)$، حيث تعتمد الحالة التالية فقط على الحالة الحالية والإجراء.",
      "correctIndex": 0,
      "explanationEn": "Correct Theoretical Formulation: A Markov Decision Process (MDP) models sequential decision making under uncertainty as a tuple $(S, A, P, R, \\gamma)$, where the next state transitions depend solely on the current state and action.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تنمذج عملية ماركوف لاتخاذ القرار (MDP) اتخاذ القرارات المتتابعة في ظل عدم اليقين كخماسية $(S, A, P, R, \\gamma)$، حيث تعتمد الحالة التالية فقط على الحالة الحالية والإجراء.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Markov Decision Processes & Bellman Optimality Equations.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: A Markov Decision Process (MDP) models sequential decision making under uncertainty as a tuple $(S, A, P, R, \\gamma)$, where the next state transitions depend solely on the current state and action.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تنمذج عملية ماركوف لاتخاذ القرار (MDP) اتخاذ القرارات المتتابعة في ظل عدم اليقين كخماسية $(S, A, P, R, \\gamma)$، حيث تعتمد الحالة التالية فقط على الحالة الحالية والإجراء.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch3_easy_26",
      "titleEn": "[EASY] Deep Q-Networks (DQN), Experience Replay & Target Networks - Review 26",
      "titleAr": "[مستوى أساسي] شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف - سؤال 26",
      "questionEn": "[AI & Data Science Core Concept] Regarding Deep Q-Networks (DQN), Experience Replay & Target Networks, which of the following statements is theoretically and mathematically sound? (Variant 26)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 26)",
      "optionsEn": [
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Deep Q-Networks parameterize action-value functions $Q(s, a; \\theta)$ with deep neural networks, enabling reinforcement learning agents to operate in high-dimensional continuous state spaces.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "تعبر شبكات Deep Q-Networks عن دوال القيمة $Q(s, a; \\theta)$ بشبكات عصبية عميقة، مما يمكن الوكلاء من اتخاذ القرارات في فضاءات حالات مستمرة عالية الأبعاد.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "Deep Q-Networks parameterize action-value functions $Q(s, a; \\theta)$ with deep neural networks, enabling reinforcement learning agents to operate in high-dimensional continuous state spaces.",
      "correctAnswerEn": "Deep Q-Networks parameterize action-value functions $Q(s, a; \\theta)$ with deep neural networks, enabling reinforcement learning agents to operate in high-dimensional continuous state spaces.",
      "correctAnswerAr": "تعبر شبكات Deep Q-Networks عن دوال القيمة $Q(s, a; \\theta)$ بشبكات عصبية عميقة، مما يمكن الوكلاء من اتخاذ القرارات في فضاءات حالات مستمرة عالية الأبعاد.",
      "correctIndex": 1,
      "explanationEn": "Correct Theoretical Formulation: Deep Q-Networks parameterize action-value functions $Q(s, a; \\theta)$ with deep neural networks, enabling reinforcement learning agents to operate in high-dimensional continuous state spaces.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تعبر شبكات Deep Q-Networks عن دوال القيمة $Q(s, a; \\theta)$ بشبكات عصبية عميقة، مما يمكن الوكلاء من اتخاذ القرارات في فضاءات حالات مستمرة عالية الأبعاد.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Deep Q-Networks (DQN), Experience Replay & Target Networks.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Deep Q-Networks parameterize action-value functions $Q(s, a; \\theta)$ with deep neural networks, enabling reinforcement learning agents to operate in high-dimensional continuous state spaces.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تعبر شبكات Deep Q-Networks عن دوال القيمة $Q(s, a; \\theta)$ بشبكات عصبية عميقة، مما يمكن الوكلاء من اتخاذ القرارات في فضاءات حالات مستمرة عالية الأبعاد.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch3_easy_27",
      "titleEn": "[EASY] Policy Gradient Methods & Proximal Policy Optimization (PPO) - Review 27",
      "titleAr": "[مستوى أساسي] طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO) - سؤال 27",
      "questionEn": "[AI & Data Science Core Concept] Regarding Policy Gradient Methods & Proximal Policy Optimization (PPO), which of the following statements is theoretically and mathematically sound? (Variant 27)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 27)",
      "optionsEn": [
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Policy gradient methods directly parameterize and optimize a stochastic policy $\\pi_\\theta(a|s)$ using gradient ascent to maximize expected cumulative discounted return $J(\\theta) = \\mathbb{E}[\\sum \\gamma^t r_t]$.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تنمذج طرق تدرج السياسة وتُحسن مباشرة السياسة الاحتمالية $\\pi_\\theta(a|s)$ باستخدام الصعود التدريجي لتعظيم العائد التراكمي المتوقع.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "Policy gradient methods directly parameterize and optimize a stochastic policy $\\pi_\\theta(a|s)$ using gradient ascent to maximize expected cumulative discounted return $J(\\theta) = \\mathbb{E}[\\sum \\gamma^t r_t]$.",
      "correctAnswerEn": "Policy gradient methods directly parameterize and optimize a stochastic policy $\\pi_\\theta(a|s)$ using gradient ascent to maximize expected cumulative discounted return $J(\\theta) = \\mathbb{E}[\\sum \\gamma^t r_t]$.",
      "correctAnswerAr": "تنمذج طرق تدرج السياسة وتُحسن مباشرة السياسة الاحتمالية $\\pi_\\theta(a|s)$ باستخدام الصعود التدريجي لتعظيم العائد التراكمي المتوقع.",
      "correctIndex": 2,
      "explanationEn": "Correct Theoretical Formulation: Policy gradient methods directly parameterize and optimize a stochastic policy $\\pi_\\theta(a|s)$ using gradient ascent to maximize expected cumulative discounted return $J(\\theta) = \\mathbb{E}[\\sum \\gamma^t r_t]$.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تنمذج طرق تدرج السياسة وتُحسن مباشرة السياسة الاحتمالية $\\pi_\\theta(a|s)$ باستخدام الصعود التدريجي لتعظيم العائد التراكمي المتوقع.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Policy Gradient Methods & Proximal Policy Optimization (PPO).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Policy gradient methods directly parameterize and optimize a stochastic policy $\\pi_\\theta(a|s)$ using gradient ascent to maximize expected cumulative discounted return $J(\\theta) = \\mathbb{E}[\\sum \\gamma^t r_t]$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تنمذج طرق تدرج السياسة وتُحسن مباشرة السياسة الاحتمالية $\\pi_\\theta(a|s)$ باستخدام الصعود التدريجي لتعظيم العائد التراكمي المتوقع.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch3_easy_28",
      "titleEn": "[EASY] Markov Decision Processes & Bellman Optimality Equations - Review 28",
      "titleAr": "[مستوى أساسي] عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل - سؤال 28",
      "questionEn": "[AI & Data Science Core Concept] Regarding Markov Decision Processes & Bellman Optimality Equations, which of the following statements is theoretically and mathematically sound? (Variant 28)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 28)",
      "optionsEn": [
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "A Markov Decision Process (MDP) models sequential decision making under uncertainty as a tuple $(S, A, P, R, \\gamma)$, where the next state transitions depend solely on the current state and action."
      ],
      "optionsAr": [
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "تنمذج عملية ماركوف لاتخاذ القرار (MDP) اتخاذ القرارات المتتابعة في ظل عدم اليقين كخماسية $(S, A, P, R, \\gamma)$، حيث تعتمد الحالة التالية فقط على الحالة الحالية والإجراء."
      ],
      "correctAnswer": "A Markov Decision Process (MDP) models sequential decision making under uncertainty as a tuple $(S, A, P, R, \\gamma)$, where the next state transitions depend solely on the current state and action.",
      "correctAnswerEn": "A Markov Decision Process (MDP) models sequential decision making under uncertainty as a tuple $(S, A, P, R, \\gamma)$, where the next state transitions depend solely on the current state and action.",
      "correctAnswerAr": "تنمذج عملية ماركوف لاتخاذ القرار (MDP) اتخاذ القرارات المتتابعة في ظل عدم اليقين كخماسية $(S, A, P, R, \\gamma)$، حيث تعتمد الحالة التالية فقط على الحالة الحالية والإجراء.",
      "correctIndex": 3,
      "explanationEn": "Correct Theoretical Formulation: A Markov Decision Process (MDP) models sequential decision making under uncertainty as a tuple $(S, A, P, R, \\gamma)$, where the next state transitions depend solely on the current state and action.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تنمذج عملية ماركوف لاتخاذ القرار (MDP) اتخاذ القرارات المتتابعة في ظل عدم اليقين كخماسية $(S, A, P, R, \\gamma)$، حيث تعتمد الحالة التالية فقط على الحالة الحالية والإجراء.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Markov Decision Processes & Bellman Optimality Equations.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: A Markov Decision Process (MDP) models sequential decision making under uncertainty as a tuple $(S, A, P, R, \\gamma)$, where the next state transitions depend solely on the current state and action.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تنمذج عملية ماركوف لاتخاذ القرار (MDP) اتخاذ القرارات المتتابعة في ظل عدم اليقين كخماسية $(S, A, P, R, \\gamma)$، حيث تعتمد الحالة التالية فقط على الحالة الحالية والإجراء.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch3_easy_29",
      "titleEn": "[EASY] Deep Q-Networks (DQN), Experience Replay & Target Networks - Review 29",
      "titleAr": "[مستوى أساسي] شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف - سؤال 29",
      "questionEn": "[AI & Data Science Core Concept] Regarding Deep Q-Networks (DQN), Experience Replay & Target Networks, which of the following statements is theoretically and mathematically sound? (Variant 29)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 29)",
      "optionsEn": [
        "Deep Q-Networks parameterize action-value functions $Q(s, a; \\theta)$ with deep neural networks, enabling reinforcement learning agents to operate in high-dimensional continuous state spaces.",
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "تعبر شبكات Deep Q-Networks عن دوال القيمة $Q(s, a; \\theta)$ بشبكات عصبية عميقة، مما يمكن الوكلاء من اتخاذ القرارات في فضاءات حالات مستمرة عالية الأبعاد.",
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "Deep Q-Networks parameterize action-value functions $Q(s, a; \\theta)$ with deep neural networks, enabling reinforcement learning agents to operate in high-dimensional continuous state spaces.",
      "correctAnswerEn": "Deep Q-Networks parameterize action-value functions $Q(s, a; \\theta)$ with deep neural networks, enabling reinforcement learning agents to operate in high-dimensional continuous state spaces.",
      "correctAnswerAr": "تعبر شبكات Deep Q-Networks عن دوال القيمة $Q(s, a; \\theta)$ بشبكات عصبية عميقة، مما يمكن الوكلاء من اتخاذ القرارات في فضاءات حالات مستمرة عالية الأبعاد.",
      "correctIndex": 0,
      "explanationEn": "Correct Theoretical Formulation: Deep Q-Networks parameterize action-value functions $Q(s, a; \\theta)$ with deep neural networks, enabling reinforcement learning agents to operate in high-dimensional continuous state spaces.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تعبر شبكات Deep Q-Networks عن دوال القيمة $Q(s, a; \\theta)$ بشبكات عصبية عميقة، مما يمكن الوكلاء من اتخاذ القرارات في فضاءات حالات مستمرة عالية الأبعاد.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Deep Q-Networks (DQN), Experience Replay & Target Networks.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Deep Q-Networks parameterize action-value functions $Q(s, a; \\theta)$ with deep neural networks, enabling reinforcement learning agents to operate in high-dimensional continuous state spaces.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تعبر شبكات Deep Q-Networks عن دوال القيمة $Q(s, a; \\theta)$ بشبكات عصبية عميقة، مما يمكن الوكلاء من اتخاذ القرارات في فضاءات حالات مستمرة عالية الأبعاد.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch3_easy_30",
      "titleEn": "[EASY] Policy Gradient Methods & Proximal Policy Optimization (PPO) - Review 30",
      "titleAr": "[مستوى أساسي] طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO) - سؤال 30",
      "questionEn": "[AI & Data Science Core Concept] Regarding Policy Gradient Methods & Proximal Policy Optimization (PPO), which of the following statements is theoretically and mathematically sound? (Variant 30)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 30)",
      "optionsEn": [
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "Policy gradient methods directly parameterize and optimize a stochastic policy $\\pi_\\theta(a|s)$ using gradient ascent to maximize expected cumulative discounted return $J(\\theta) = \\mathbb{E}[\\sum \\gamma^t r_t]$.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تنمذج طرق تدرج السياسة وتُحسن مباشرة السياسة الاحتمالية $\\pi_\\theta(a|s)$ باستخدام الصعود التدريجي لتعظيم العائد التراكمي المتوقع.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "Policy gradient methods directly parameterize and optimize a stochastic policy $\\pi_\\theta(a|s)$ using gradient ascent to maximize expected cumulative discounted return $J(\\theta) = \\mathbb{E}[\\sum \\gamma^t r_t]$.",
      "correctAnswerEn": "Policy gradient methods directly parameterize and optimize a stochastic policy $\\pi_\\theta(a|s)$ using gradient ascent to maximize expected cumulative discounted return $J(\\theta) = \\mathbb{E}[\\sum \\gamma^t r_t]$.",
      "correctAnswerAr": "تنمذج طرق تدرج السياسة وتُحسن مباشرة السياسة الاحتمالية $\\pi_\\theta(a|s)$ باستخدام الصعود التدريجي لتعظيم العائد التراكمي المتوقع.",
      "correctIndex": 1,
      "explanationEn": "Correct Theoretical Formulation: Policy gradient methods directly parameterize and optimize a stochastic policy $\\pi_\\theta(a|s)$ using gradient ascent to maximize expected cumulative discounted return $J(\\theta) = \\mathbb{E}[\\sum \\gamma^t r_t]$.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تنمذج طرق تدرج السياسة وتُحسن مباشرة السياسة الاحتمالية $\\pi_\\theta(a|s)$ باستخدام الصعود التدريجي لتعظيم العائد التراكمي المتوقع.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Policy Gradient Methods & Proximal Policy Optimization (PPO).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Policy gradient methods directly parameterize and optimize a stochastic policy $\\pi_\\theta(a|s)$ using gradient ascent to maximize expected cumulative discounted return $J(\\theta) = \\mathbb{E}[\\sum \\gamma^t r_t]$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تنمذج طرق تدرج السياسة وتُحسن مباشرة السياسة الاحتمالية $\\pi_\\theta(a|s)$ باستخدام الصعود التدريجي لتعظيم العائد التراكمي المتوقع.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch3_easy_31",
      "titleEn": "[EASY] Markov Decision Processes & Bellman Optimality Equations - Review 31",
      "titleAr": "[مستوى أساسي] عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل - سؤال 31",
      "questionEn": "[AI & Data Science Core Concept] Regarding Markov Decision Processes & Bellman Optimality Equations, which of the following statements is theoretically and mathematically sound? (Variant 31)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 31)",
      "optionsEn": [
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "A Markov Decision Process (MDP) models sequential decision making under uncertainty as a tuple $(S, A, P, R, \\gamma)$, where the next state transitions depend solely on the current state and action.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "تنمذج عملية ماركوف لاتخاذ القرار (MDP) اتخاذ القرارات المتتابعة في ظل عدم اليقين كخماسية $(S, A, P, R, \\gamma)$، حيث تعتمد الحالة التالية فقط على الحالة الحالية والإجراء.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "A Markov Decision Process (MDP) models sequential decision making under uncertainty as a tuple $(S, A, P, R, \\gamma)$, where the next state transitions depend solely on the current state and action.",
      "correctAnswerEn": "A Markov Decision Process (MDP) models sequential decision making under uncertainty as a tuple $(S, A, P, R, \\gamma)$, where the next state transitions depend solely on the current state and action.",
      "correctAnswerAr": "تنمذج عملية ماركوف لاتخاذ القرار (MDP) اتخاذ القرارات المتتابعة في ظل عدم اليقين كخماسية $(S, A, P, R, \\gamma)$، حيث تعتمد الحالة التالية فقط على الحالة الحالية والإجراء.",
      "correctIndex": 2,
      "explanationEn": "Correct Theoretical Formulation: A Markov Decision Process (MDP) models sequential decision making under uncertainty as a tuple $(S, A, P, R, \\gamma)$, where the next state transitions depend solely on the current state and action.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تنمذج عملية ماركوف لاتخاذ القرار (MDP) اتخاذ القرارات المتتابعة في ظل عدم اليقين كخماسية $(S, A, P, R, \\gamma)$، حيث تعتمد الحالة التالية فقط على الحالة الحالية والإجراء.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Markov Decision Processes & Bellman Optimality Equations.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: A Markov Decision Process (MDP) models sequential decision making under uncertainty as a tuple $(S, A, P, R, \\gamma)$, where the next state transitions depend solely on the current state and action.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تنمذج عملية ماركوف لاتخاذ القرار (MDP) اتخاذ القرارات المتتابعة في ظل عدم اليقين كخماسية $(S, A, P, R, \\gamma)$، حيث تعتمد الحالة التالية فقط على الحالة الحالية والإجراء.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch3_easy_32",
      "titleEn": "[EASY] Deep Q-Networks (DQN), Experience Replay & Target Networks - Review 32",
      "titleAr": "[مستوى أساسي] شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف - سؤال 32",
      "questionEn": "[AI & Data Science Core Concept] Regarding Deep Q-Networks (DQN), Experience Replay & Target Networks, which of the following statements is theoretically and mathematically sound? (Variant 32)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 32)",
      "optionsEn": [
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "Deep Q-Networks parameterize action-value functions $Q(s, a; \\theta)$ with deep neural networks, enabling reinforcement learning agents to operate in high-dimensional continuous state spaces."
      ],
      "optionsAr": [
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "تعبر شبكات Deep Q-Networks عن دوال القيمة $Q(s, a; \\theta)$ بشبكات عصبية عميقة، مما يمكن الوكلاء من اتخاذ القرارات في فضاءات حالات مستمرة عالية الأبعاد."
      ],
      "correctAnswer": "Deep Q-Networks parameterize action-value functions $Q(s, a; \\theta)$ with deep neural networks, enabling reinforcement learning agents to operate in high-dimensional continuous state spaces.",
      "correctAnswerEn": "Deep Q-Networks parameterize action-value functions $Q(s, a; \\theta)$ with deep neural networks, enabling reinforcement learning agents to operate in high-dimensional continuous state spaces.",
      "correctAnswerAr": "تعبر شبكات Deep Q-Networks عن دوال القيمة $Q(s, a; \\theta)$ بشبكات عصبية عميقة، مما يمكن الوكلاء من اتخاذ القرارات في فضاءات حالات مستمرة عالية الأبعاد.",
      "correctIndex": 3,
      "explanationEn": "Correct Theoretical Formulation: Deep Q-Networks parameterize action-value functions $Q(s, a; \\theta)$ with deep neural networks, enabling reinforcement learning agents to operate in high-dimensional continuous state spaces.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تعبر شبكات Deep Q-Networks عن دوال القيمة $Q(s, a; \\theta)$ بشبكات عصبية عميقة، مما يمكن الوكلاء من اتخاذ القرارات في فضاءات حالات مستمرة عالية الأبعاد.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Deep Q-Networks (DQN), Experience Replay & Target Networks.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Deep Q-Networks parameterize action-value functions $Q(s, a; \\theta)$ with deep neural networks, enabling reinforcement learning agents to operate in high-dimensional continuous state spaces.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تعبر شبكات Deep Q-Networks عن دوال القيمة $Q(s, a; \\theta)$ بشبكات عصبية عميقة، مما يمكن الوكلاء من اتخاذ القرارات في فضاءات حالات مستمرة عالية الأبعاد.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch3_easy_33",
      "titleEn": "[EASY] Policy Gradient Methods & Proximal Policy Optimization (PPO) - Review 33",
      "titleAr": "[مستوى أساسي] طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO) - سؤال 33",
      "questionEn": "[AI & Data Science Core Concept] Regarding Policy Gradient Methods & Proximal Policy Optimization (PPO), which of the following statements is theoretically and mathematically sound? (Variant 33)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 33)",
      "optionsEn": [
        "Policy gradient methods directly parameterize and optimize a stochastic policy $\\pi_\\theta(a|s)$ using gradient ascent to maximize expected cumulative discounted return $J(\\theta) = \\mathbb{E}[\\sum \\gamma^t r_t]$.",
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "تنمذج طرق تدرج السياسة وتُحسن مباشرة السياسة الاحتمالية $\\pi_\\theta(a|s)$ باستخدام الصعود التدريجي لتعظيم العائد التراكمي المتوقع.",
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "Policy gradient methods directly parameterize and optimize a stochastic policy $\\pi_\\theta(a|s)$ using gradient ascent to maximize expected cumulative discounted return $J(\\theta) = \\mathbb{E}[\\sum \\gamma^t r_t]$.",
      "correctAnswerEn": "Policy gradient methods directly parameterize and optimize a stochastic policy $\\pi_\\theta(a|s)$ using gradient ascent to maximize expected cumulative discounted return $J(\\theta) = \\mathbb{E}[\\sum \\gamma^t r_t]$.",
      "correctAnswerAr": "تنمذج طرق تدرج السياسة وتُحسن مباشرة السياسة الاحتمالية $\\pi_\\theta(a|s)$ باستخدام الصعود التدريجي لتعظيم العائد التراكمي المتوقع.",
      "correctIndex": 0,
      "explanationEn": "Correct Theoretical Formulation: Policy gradient methods directly parameterize and optimize a stochastic policy $\\pi_\\theta(a|s)$ using gradient ascent to maximize expected cumulative discounted return $J(\\theta) = \\mathbb{E}[\\sum \\gamma^t r_t]$.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تنمذج طرق تدرج السياسة وتُحسن مباشرة السياسة الاحتمالية $\\pi_\\theta(a|s)$ باستخدام الصعود التدريجي لتعظيم العائد التراكمي المتوقع.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Policy Gradient Methods & Proximal Policy Optimization (PPO).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Policy gradient methods directly parameterize and optimize a stochastic policy $\\pi_\\theta(a|s)$ using gradient ascent to maximize expected cumulative discounted return $J(\\theta) = \\mathbb{E}[\\sum \\gamma^t r_t]$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تنمذج طرق تدرج السياسة وتُحسن مباشرة السياسة الاحتمالية $\\pi_\\theta(a|s)$ باستخدام الصعود التدريجي لتعظيم العائد التراكمي المتوقع.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch3_easy_34",
      "titleEn": "[EASY] Markov Decision Processes & Bellman Optimality Equations - Review 34",
      "titleAr": "[مستوى أساسي] عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل - سؤال 34",
      "questionEn": "[AI & Data Science Core Concept] Regarding Markov Decision Processes & Bellman Optimality Equations, which of the following statements is theoretically and mathematically sound? (Variant 34)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 34)",
      "optionsEn": [
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "A Markov Decision Process (MDP) models sequential decision making under uncertainty as a tuple $(S, A, P, R, \\gamma)$, where the next state transitions depend solely on the current state and action.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "تنمذج عملية ماركوف لاتخاذ القرار (MDP) اتخاذ القرارات المتتابعة في ظل عدم اليقين كخماسية $(S, A, P, R, \\gamma)$، حيث تعتمد الحالة التالية فقط على الحالة الحالية والإجراء.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "A Markov Decision Process (MDP) models sequential decision making under uncertainty as a tuple $(S, A, P, R, \\gamma)$, where the next state transitions depend solely on the current state and action.",
      "correctAnswerEn": "A Markov Decision Process (MDP) models sequential decision making under uncertainty as a tuple $(S, A, P, R, \\gamma)$, where the next state transitions depend solely on the current state and action.",
      "correctAnswerAr": "تنمذج عملية ماركوف لاتخاذ القرار (MDP) اتخاذ القرارات المتتابعة في ظل عدم اليقين كخماسية $(S, A, P, R, \\gamma)$، حيث تعتمد الحالة التالية فقط على الحالة الحالية والإجراء.",
      "correctIndex": 1,
      "explanationEn": "Correct Theoretical Formulation: A Markov Decision Process (MDP) models sequential decision making under uncertainty as a tuple $(S, A, P, R, \\gamma)$, where the next state transitions depend solely on the current state and action.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تنمذج عملية ماركوف لاتخاذ القرار (MDP) اتخاذ القرارات المتتابعة في ظل عدم اليقين كخماسية $(S, A, P, R, \\gamma)$، حيث تعتمد الحالة التالية فقط على الحالة الحالية والإجراء.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Markov Decision Processes & Bellman Optimality Equations.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: A Markov Decision Process (MDP) models sequential decision making under uncertainty as a tuple $(S, A, P, R, \\gamma)$, where the next state transitions depend solely on the current state and action.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تنمذج عملية ماركوف لاتخاذ القرار (MDP) اتخاذ القرارات المتتابعة في ظل عدم اليقين كخماسية $(S, A, P, R, \\gamma)$، حيث تعتمد الحالة التالية فقط على الحالة الحالية والإجراء.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch3_easy_35",
      "titleEn": "[EASY] Deep Q-Networks (DQN), Experience Replay & Target Networks - Review 35",
      "titleAr": "[مستوى أساسي] شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف - سؤال 35",
      "questionEn": "[AI & Data Science Core Concept] Regarding Deep Q-Networks (DQN), Experience Replay & Target Networks, which of the following statements is theoretically and mathematically sound? (Variant 35)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 35)",
      "optionsEn": [
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Deep Q-Networks parameterize action-value functions $Q(s, a; \\theta)$ with deep neural networks, enabling reinforcement learning agents to operate in high-dimensional continuous state spaces.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تعبر شبكات Deep Q-Networks عن دوال القيمة $Q(s, a; \\theta)$ بشبكات عصبية عميقة، مما يمكن الوكلاء من اتخاذ القرارات في فضاءات حالات مستمرة عالية الأبعاد.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "Deep Q-Networks parameterize action-value functions $Q(s, a; \\theta)$ with deep neural networks, enabling reinforcement learning agents to operate in high-dimensional continuous state spaces.",
      "correctAnswerEn": "Deep Q-Networks parameterize action-value functions $Q(s, a; \\theta)$ with deep neural networks, enabling reinforcement learning agents to operate in high-dimensional continuous state spaces.",
      "correctAnswerAr": "تعبر شبكات Deep Q-Networks عن دوال القيمة $Q(s, a; \\theta)$ بشبكات عصبية عميقة، مما يمكن الوكلاء من اتخاذ القرارات في فضاءات حالات مستمرة عالية الأبعاد.",
      "correctIndex": 2,
      "explanationEn": "Correct Theoretical Formulation: Deep Q-Networks parameterize action-value functions $Q(s, a; \\theta)$ with deep neural networks, enabling reinforcement learning agents to operate in high-dimensional continuous state spaces.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تعبر شبكات Deep Q-Networks عن دوال القيمة $Q(s, a; \\theta)$ بشبكات عصبية عميقة، مما يمكن الوكلاء من اتخاذ القرارات في فضاءات حالات مستمرة عالية الأبعاد.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Deep Q-Networks (DQN), Experience Replay & Target Networks.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Deep Q-Networks parameterize action-value functions $Q(s, a; \\theta)$ with deep neural networks, enabling reinforcement learning agents to operate in high-dimensional continuous state spaces.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تعبر شبكات Deep Q-Networks عن دوال القيمة $Q(s, a; \\theta)$ بشبكات عصبية عميقة، مما يمكن الوكلاء من اتخاذ القرارات في فضاءات حالات مستمرة عالية الأبعاد.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch3_easy_36",
      "titleEn": "[EASY] Policy Gradient Methods & Proximal Policy Optimization (PPO) - Review 36",
      "titleAr": "[مستوى أساسي] طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO) - سؤال 36",
      "questionEn": "[AI & Data Science Core Concept] Regarding Policy Gradient Methods & Proximal Policy Optimization (PPO), which of the following statements is theoretically and mathematically sound? (Variant 36)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 36)",
      "optionsEn": [
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "Policy gradient methods directly parameterize and optimize a stochastic policy $\\pi_\\theta(a|s)$ using gradient ascent to maximize expected cumulative discounted return $J(\\theta) = \\mathbb{E}[\\sum \\gamma^t r_t]$."
      ],
      "optionsAr": [
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تنمذج طرق تدرج السياسة وتُحسن مباشرة السياسة الاحتمالية $\\pi_\\theta(a|s)$ باستخدام الصعود التدريجي لتعظيم العائد التراكمي المتوقع."
      ],
      "correctAnswer": "Policy gradient methods directly parameterize and optimize a stochastic policy $\\pi_\\theta(a|s)$ using gradient ascent to maximize expected cumulative discounted return $J(\\theta) = \\mathbb{E}[\\sum \\gamma^t r_t]$.",
      "correctAnswerEn": "Policy gradient methods directly parameterize and optimize a stochastic policy $\\pi_\\theta(a|s)$ using gradient ascent to maximize expected cumulative discounted return $J(\\theta) = \\mathbb{E}[\\sum \\gamma^t r_t]$.",
      "correctAnswerAr": "تنمذج طرق تدرج السياسة وتُحسن مباشرة السياسة الاحتمالية $\\pi_\\theta(a|s)$ باستخدام الصعود التدريجي لتعظيم العائد التراكمي المتوقع.",
      "correctIndex": 3,
      "explanationEn": "Correct Theoretical Formulation: Policy gradient methods directly parameterize and optimize a stochastic policy $\\pi_\\theta(a|s)$ using gradient ascent to maximize expected cumulative discounted return $J(\\theta) = \\mathbb{E}[\\sum \\gamma^t r_t]$.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تنمذج طرق تدرج السياسة وتُحسن مباشرة السياسة الاحتمالية $\\pi_\\theta(a|s)$ باستخدام الصعود التدريجي لتعظيم العائد التراكمي المتوقع.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Policy Gradient Methods & Proximal Policy Optimization (PPO).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Policy gradient methods directly parameterize and optimize a stochastic policy $\\pi_\\theta(a|s)$ using gradient ascent to maximize expected cumulative discounted return $J(\\theta) = \\mathbb{E}[\\sum \\gamma^t r_t]$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تنمذج طرق تدرج السياسة وتُحسن مباشرة السياسة الاحتمالية $\\pi_\\theta(a|s)$ باستخدام الصعود التدريجي لتعظيم العائد التراكمي المتوقع.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch3_easy_37",
      "titleEn": "[EASY] Markov Decision Processes & Bellman Optimality Equations - Review 37",
      "titleAr": "[مستوى أساسي] عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل - سؤال 37",
      "questionEn": "[AI & Data Science Core Concept] Regarding Markov Decision Processes & Bellman Optimality Equations, which of the following statements is theoretically and mathematically sound? (Variant 37)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 37)",
      "optionsEn": [
        "A Markov Decision Process (MDP) models sequential decision making under uncertainty as a tuple $(S, A, P, R, \\gamma)$, where the next state transitions depend solely on the current state and action.",
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "تنمذج عملية ماركوف لاتخاذ القرار (MDP) اتخاذ القرارات المتتابعة في ظل عدم اليقين كخماسية $(S, A, P, R, \\gamma)$، حيث تعتمد الحالة التالية فقط على الحالة الحالية والإجراء.",
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "A Markov Decision Process (MDP) models sequential decision making under uncertainty as a tuple $(S, A, P, R, \\gamma)$, where the next state transitions depend solely on the current state and action.",
      "correctAnswerEn": "A Markov Decision Process (MDP) models sequential decision making under uncertainty as a tuple $(S, A, P, R, \\gamma)$, where the next state transitions depend solely on the current state and action.",
      "correctAnswerAr": "تنمذج عملية ماركوف لاتخاذ القرار (MDP) اتخاذ القرارات المتتابعة في ظل عدم اليقين كخماسية $(S, A, P, R, \\gamma)$، حيث تعتمد الحالة التالية فقط على الحالة الحالية والإجراء.",
      "correctIndex": 0,
      "explanationEn": "Correct Theoretical Formulation: A Markov Decision Process (MDP) models sequential decision making under uncertainty as a tuple $(S, A, P, R, \\gamma)$, where the next state transitions depend solely on the current state and action.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تنمذج عملية ماركوف لاتخاذ القرار (MDP) اتخاذ القرارات المتتابعة في ظل عدم اليقين كخماسية $(S, A, P, R, \\gamma)$، حيث تعتمد الحالة التالية فقط على الحالة الحالية والإجراء.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Markov Decision Processes & Bellman Optimality Equations.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: A Markov Decision Process (MDP) models sequential decision making under uncertainty as a tuple $(S, A, P, R, \\gamma)$, where the next state transitions depend solely on the current state and action.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تنمذج عملية ماركوف لاتخاذ القرار (MDP) اتخاذ القرارات المتتابعة في ظل عدم اليقين كخماسية $(S, A, P, R, \\gamma)$، حيث تعتمد الحالة التالية فقط على الحالة الحالية والإجراء.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch3_easy_38",
      "titleEn": "[EASY] Deep Q-Networks (DQN), Experience Replay & Target Networks - Review 38",
      "titleAr": "[مستوى أساسي] شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف - سؤال 38",
      "questionEn": "[AI & Data Science Core Concept] Regarding Deep Q-Networks (DQN), Experience Replay & Target Networks, which of the following statements is theoretically and mathematically sound? (Variant 38)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 38)",
      "optionsEn": [
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "Deep Q-Networks parameterize action-value functions $Q(s, a; \\theta)$ with deep neural networks, enabling reinforcement learning agents to operate in high-dimensional continuous state spaces.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تعبر شبكات Deep Q-Networks عن دوال القيمة $Q(s, a; \\theta)$ بشبكات عصبية عميقة، مما يمكن الوكلاء من اتخاذ القرارات في فضاءات حالات مستمرة عالية الأبعاد.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "Deep Q-Networks parameterize action-value functions $Q(s, a; \\theta)$ with deep neural networks, enabling reinforcement learning agents to operate in high-dimensional continuous state spaces.",
      "correctAnswerEn": "Deep Q-Networks parameterize action-value functions $Q(s, a; \\theta)$ with deep neural networks, enabling reinforcement learning agents to operate in high-dimensional continuous state spaces.",
      "correctAnswerAr": "تعبر شبكات Deep Q-Networks عن دوال القيمة $Q(s, a; \\theta)$ بشبكات عصبية عميقة، مما يمكن الوكلاء من اتخاذ القرارات في فضاءات حالات مستمرة عالية الأبعاد.",
      "correctIndex": 1,
      "explanationEn": "Correct Theoretical Formulation: Deep Q-Networks parameterize action-value functions $Q(s, a; \\theta)$ with deep neural networks, enabling reinforcement learning agents to operate in high-dimensional continuous state spaces.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تعبر شبكات Deep Q-Networks عن دوال القيمة $Q(s, a; \\theta)$ بشبكات عصبية عميقة، مما يمكن الوكلاء من اتخاذ القرارات في فضاءات حالات مستمرة عالية الأبعاد.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Deep Q-Networks (DQN), Experience Replay & Target Networks.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Deep Q-Networks parameterize action-value functions $Q(s, a; \\theta)$ with deep neural networks, enabling reinforcement learning agents to operate in high-dimensional continuous state spaces.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تعبر شبكات Deep Q-Networks عن دوال القيمة $Q(s, a; \\theta)$ بشبكات عصبية عميقة، مما يمكن الوكلاء من اتخاذ القرارات في فضاءات حالات مستمرة عالية الأبعاد.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch3_easy_39",
      "titleEn": "[EASY] Policy Gradient Methods & Proximal Policy Optimization (PPO) - Review 39",
      "titleAr": "[مستوى أساسي] طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO) - سؤال 39",
      "questionEn": "[AI & Data Science Core Concept] Regarding Policy Gradient Methods & Proximal Policy Optimization (PPO), which of the following statements is theoretically and mathematically sound? (Variant 39)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 39)",
      "optionsEn": [
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "Policy gradient methods directly parameterize and optimize a stochastic policy $\\pi_\\theta(a|s)$ using gradient ascent to maximize expected cumulative discounted return $J(\\theta) = \\mathbb{E}[\\sum \\gamma^t r_t]$.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تنمذج طرق تدرج السياسة وتُحسن مباشرة السياسة الاحتمالية $\\pi_\\theta(a|s)$ باستخدام الصعود التدريجي لتعظيم العائد التراكمي المتوقع.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "Policy gradient methods directly parameterize and optimize a stochastic policy $\\pi_\\theta(a|s)$ using gradient ascent to maximize expected cumulative discounted return $J(\\theta) = \\mathbb{E}[\\sum \\gamma^t r_t]$.",
      "correctAnswerEn": "Policy gradient methods directly parameterize and optimize a stochastic policy $\\pi_\\theta(a|s)$ using gradient ascent to maximize expected cumulative discounted return $J(\\theta) = \\mathbb{E}[\\sum \\gamma^t r_t]$.",
      "correctAnswerAr": "تنمذج طرق تدرج السياسة وتُحسن مباشرة السياسة الاحتمالية $\\pi_\\theta(a|s)$ باستخدام الصعود التدريجي لتعظيم العائد التراكمي المتوقع.",
      "correctIndex": 2,
      "explanationEn": "Correct Theoretical Formulation: Policy gradient methods directly parameterize and optimize a stochastic policy $\\pi_\\theta(a|s)$ using gradient ascent to maximize expected cumulative discounted return $J(\\theta) = \\mathbb{E}[\\sum \\gamma^t r_t]$.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تنمذج طرق تدرج السياسة وتُحسن مباشرة السياسة الاحتمالية $\\pi_\\theta(a|s)$ باستخدام الصعود التدريجي لتعظيم العائد التراكمي المتوقع.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Policy Gradient Methods & Proximal Policy Optimization (PPO).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Policy gradient methods directly parameterize and optimize a stochastic policy $\\pi_\\theta(a|s)$ using gradient ascent to maximize expected cumulative discounted return $J(\\theta) = \\mathbb{E}[\\sum \\gamma^t r_t]$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تنمذج طرق تدرج السياسة وتُحسن مباشرة السياسة الاحتمالية $\\pi_\\theta(a|s)$ باستخدام الصعود التدريجي لتعظيم العائد التراكمي المتوقع.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch3_easy_40",
      "titleEn": "[EASY] Markov Decision Processes & Bellman Optimality Equations - Review 40",
      "titleAr": "[مستوى أساسي] عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل - سؤال 40",
      "questionEn": "[AI & Data Science Core Concept] Regarding Markov Decision Processes & Bellman Optimality Equations, which of the following statements is theoretically and mathematically sound? (Variant 40)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 40)",
      "optionsEn": [
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "A Markov Decision Process (MDP) models sequential decision making under uncertainty as a tuple $(S, A, P, R, \\gamma)$, where the next state transitions depend solely on the current state and action."
      ],
      "optionsAr": [
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "تنمذج عملية ماركوف لاتخاذ القرار (MDP) اتخاذ القرارات المتتابعة في ظل عدم اليقين كخماسية $(S, A, P, R, \\gamma)$، حيث تعتمد الحالة التالية فقط على الحالة الحالية والإجراء."
      ],
      "correctAnswer": "A Markov Decision Process (MDP) models sequential decision making under uncertainty as a tuple $(S, A, P, R, \\gamma)$, where the next state transitions depend solely on the current state and action.",
      "correctAnswerEn": "A Markov Decision Process (MDP) models sequential decision making under uncertainty as a tuple $(S, A, P, R, \\gamma)$, where the next state transitions depend solely on the current state and action.",
      "correctAnswerAr": "تنمذج عملية ماركوف لاتخاذ القرار (MDP) اتخاذ القرارات المتتابعة في ظل عدم اليقين كخماسية $(S, A, P, R, \\gamma)$، حيث تعتمد الحالة التالية فقط على الحالة الحالية والإجراء.",
      "correctIndex": 3,
      "explanationEn": "Correct Theoretical Formulation: A Markov Decision Process (MDP) models sequential decision making under uncertainty as a tuple $(S, A, P, R, \\gamma)$, where the next state transitions depend solely on the current state and action.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تنمذج عملية ماركوف لاتخاذ القرار (MDP) اتخاذ القرارات المتتابعة في ظل عدم اليقين كخماسية $(S, A, P, R, \\gamma)$، حيث تعتمد الحالة التالية فقط على الحالة الحالية والإجراء.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Markov Decision Processes & Bellman Optimality Equations.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: A Markov Decision Process (MDP) models sequential decision making under uncertainty as a tuple $(S, A, P, R, \\gamma)$, where the next state transitions depend solely on the current state and action.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تنمذج عملية ماركوف لاتخاذ القرار (MDP) اتخاذ القرارات المتتابعة في ظل عدم اليقين كخماسية $(S, A, P, R, \\gamma)$، حيث تعتمد الحالة التالية فقط على الحالة الحالية والإجراء.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch3_easy_41",
      "titleEn": "[EASY] Deep Q-Networks (DQN), Experience Replay & Target Networks - Review 41",
      "titleAr": "[مستوى أساسي] شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف - سؤال 41",
      "questionEn": "[AI & Data Science Core Concept] Regarding Deep Q-Networks (DQN), Experience Replay & Target Networks, which of the following statements is theoretically and mathematically sound? (Variant 41)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 41)",
      "optionsEn": [
        "Deep Q-Networks parameterize action-value functions $Q(s, a; \\theta)$ with deep neural networks, enabling reinforcement learning agents to operate in high-dimensional continuous state spaces.",
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "تعبر شبكات Deep Q-Networks عن دوال القيمة $Q(s, a; \\theta)$ بشبكات عصبية عميقة، مما يمكن الوكلاء من اتخاذ القرارات في فضاءات حالات مستمرة عالية الأبعاد.",
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "Deep Q-Networks parameterize action-value functions $Q(s, a; \\theta)$ with deep neural networks, enabling reinforcement learning agents to operate in high-dimensional continuous state spaces.",
      "correctAnswerEn": "Deep Q-Networks parameterize action-value functions $Q(s, a; \\theta)$ with deep neural networks, enabling reinforcement learning agents to operate in high-dimensional continuous state spaces.",
      "correctAnswerAr": "تعبر شبكات Deep Q-Networks عن دوال القيمة $Q(s, a; \\theta)$ بشبكات عصبية عميقة، مما يمكن الوكلاء من اتخاذ القرارات في فضاءات حالات مستمرة عالية الأبعاد.",
      "correctIndex": 0,
      "explanationEn": "Correct Theoretical Formulation: Deep Q-Networks parameterize action-value functions $Q(s, a; \\theta)$ with deep neural networks, enabling reinforcement learning agents to operate in high-dimensional continuous state spaces.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تعبر شبكات Deep Q-Networks عن دوال القيمة $Q(s, a; \\theta)$ بشبكات عصبية عميقة، مما يمكن الوكلاء من اتخاذ القرارات في فضاءات حالات مستمرة عالية الأبعاد.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Deep Q-Networks (DQN), Experience Replay & Target Networks.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Deep Q-Networks parameterize action-value functions $Q(s, a; \\theta)$ with deep neural networks, enabling reinforcement learning agents to operate in high-dimensional continuous state spaces.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تعبر شبكات Deep Q-Networks عن دوال القيمة $Q(s, a; \\theta)$ بشبكات عصبية عميقة، مما يمكن الوكلاء من اتخاذ القرارات في فضاءات حالات مستمرة عالية الأبعاد.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch3_easy_42",
      "titleEn": "[EASY] Policy Gradient Methods & Proximal Policy Optimization (PPO) - Review 42",
      "titleAr": "[مستوى أساسي] طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO) - سؤال 42",
      "questionEn": "[AI & Data Science Core Concept] Regarding Policy Gradient Methods & Proximal Policy Optimization (PPO), which of the following statements is theoretically and mathematically sound? (Variant 42)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 42)",
      "optionsEn": [
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "Policy gradient methods directly parameterize and optimize a stochastic policy $\\pi_\\theta(a|s)$ using gradient ascent to maximize expected cumulative discounted return $J(\\theta) = \\mathbb{E}[\\sum \\gamma^t r_t]$.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تنمذج طرق تدرج السياسة وتُحسن مباشرة السياسة الاحتمالية $\\pi_\\theta(a|s)$ باستخدام الصعود التدريجي لتعظيم العائد التراكمي المتوقع.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "Policy gradient methods directly parameterize and optimize a stochastic policy $\\pi_\\theta(a|s)$ using gradient ascent to maximize expected cumulative discounted return $J(\\theta) = \\mathbb{E}[\\sum \\gamma^t r_t]$.",
      "correctAnswerEn": "Policy gradient methods directly parameterize and optimize a stochastic policy $\\pi_\\theta(a|s)$ using gradient ascent to maximize expected cumulative discounted return $J(\\theta) = \\mathbb{E}[\\sum \\gamma^t r_t]$.",
      "correctAnswerAr": "تنمذج طرق تدرج السياسة وتُحسن مباشرة السياسة الاحتمالية $\\pi_\\theta(a|s)$ باستخدام الصعود التدريجي لتعظيم العائد التراكمي المتوقع.",
      "correctIndex": 1,
      "explanationEn": "Correct Theoretical Formulation: Policy gradient methods directly parameterize and optimize a stochastic policy $\\pi_\\theta(a|s)$ using gradient ascent to maximize expected cumulative discounted return $J(\\theta) = \\mathbb{E}[\\sum \\gamma^t r_t]$.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تنمذج طرق تدرج السياسة وتُحسن مباشرة السياسة الاحتمالية $\\pi_\\theta(a|s)$ باستخدام الصعود التدريجي لتعظيم العائد التراكمي المتوقع.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Policy Gradient Methods & Proximal Policy Optimization (PPO).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Policy gradient methods directly parameterize and optimize a stochastic policy $\\pi_\\theta(a|s)$ using gradient ascent to maximize expected cumulative discounted return $J(\\theta) = \\mathbb{E}[\\sum \\gamma^t r_t]$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تنمذج طرق تدرج السياسة وتُحسن مباشرة السياسة الاحتمالية $\\pi_\\theta(a|s)$ باستخدام الصعود التدريجي لتعظيم العائد التراكمي المتوقع.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch3_easy_43",
      "titleEn": "[EASY] Markov Decision Processes & Bellman Optimality Equations - Review 43",
      "titleAr": "[مستوى أساسي] عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل - سؤال 43",
      "questionEn": "[AI & Data Science Core Concept] Regarding Markov Decision Processes & Bellman Optimality Equations, which of the following statements is theoretically and mathematically sound? (Variant 43)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 43)",
      "optionsEn": [
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "A Markov Decision Process (MDP) models sequential decision making under uncertainty as a tuple $(S, A, P, R, \\gamma)$, where the next state transitions depend solely on the current state and action.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تنمذج عملية ماركوف لاتخاذ القرار (MDP) اتخاذ القرارات المتتابعة في ظل عدم اليقين كخماسية $(S, A, P, R, \\gamma)$، حيث تعتمد الحالة التالية فقط على الحالة الحالية والإجراء.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "A Markov Decision Process (MDP) models sequential decision making under uncertainty as a tuple $(S, A, P, R, \\gamma)$, where the next state transitions depend solely on the current state and action.",
      "correctAnswerEn": "A Markov Decision Process (MDP) models sequential decision making under uncertainty as a tuple $(S, A, P, R, \\gamma)$, where the next state transitions depend solely on the current state and action.",
      "correctAnswerAr": "تنمذج عملية ماركوف لاتخاذ القرار (MDP) اتخاذ القرارات المتتابعة في ظل عدم اليقين كخماسية $(S, A, P, R, \\gamma)$، حيث تعتمد الحالة التالية فقط على الحالة الحالية والإجراء.",
      "correctIndex": 2,
      "explanationEn": "Correct Theoretical Formulation: A Markov Decision Process (MDP) models sequential decision making under uncertainty as a tuple $(S, A, P, R, \\gamma)$, where the next state transitions depend solely on the current state and action.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تنمذج عملية ماركوف لاتخاذ القرار (MDP) اتخاذ القرارات المتتابعة في ظل عدم اليقين كخماسية $(S, A, P, R, \\gamma)$، حيث تعتمد الحالة التالية فقط على الحالة الحالية والإجراء.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Markov Decision Processes & Bellman Optimality Equations.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: A Markov Decision Process (MDP) models sequential decision making under uncertainty as a tuple $(S, A, P, R, \\gamma)$, where the next state transitions depend solely on the current state and action.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تنمذج عملية ماركوف لاتخاذ القرار (MDP) اتخاذ القرارات المتتابعة في ظل عدم اليقين كخماسية $(S, A, P, R, \\gamma)$، حيث تعتمد الحالة التالية فقط على الحالة الحالية والإجراء.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch3_easy_44",
      "titleEn": "[EASY] Deep Q-Networks (DQN), Experience Replay & Target Networks - Review 44",
      "titleAr": "[مستوى أساسي] شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف - سؤال 44",
      "questionEn": "[AI & Data Science Core Concept] Regarding Deep Q-Networks (DQN), Experience Replay & Target Networks, which of the following statements is theoretically and mathematically sound? (Variant 44)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 44)",
      "optionsEn": [
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "Deep Q-Networks parameterize action-value functions $Q(s, a; \\theta)$ with deep neural networks, enabling reinforcement learning agents to operate in high-dimensional continuous state spaces."
      ],
      "optionsAr": [
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تعبر شبكات Deep Q-Networks عن دوال القيمة $Q(s, a; \\theta)$ بشبكات عصبية عميقة، مما يمكن الوكلاء من اتخاذ القرارات في فضاءات حالات مستمرة عالية الأبعاد."
      ],
      "correctAnswer": "Deep Q-Networks parameterize action-value functions $Q(s, a; \\theta)$ with deep neural networks, enabling reinforcement learning agents to operate in high-dimensional continuous state spaces.",
      "correctAnswerEn": "Deep Q-Networks parameterize action-value functions $Q(s, a; \\theta)$ with deep neural networks, enabling reinforcement learning agents to operate in high-dimensional continuous state spaces.",
      "correctAnswerAr": "تعبر شبكات Deep Q-Networks عن دوال القيمة $Q(s, a; \\theta)$ بشبكات عصبية عميقة، مما يمكن الوكلاء من اتخاذ القرارات في فضاءات حالات مستمرة عالية الأبعاد.",
      "correctIndex": 3,
      "explanationEn": "Correct Theoretical Formulation: Deep Q-Networks parameterize action-value functions $Q(s, a; \\theta)$ with deep neural networks, enabling reinforcement learning agents to operate in high-dimensional continuous state spaces.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تعبر شبكات Deep Q-Networks عن دوال القيمة $Q(s, a; \\theta)$ بشبكات عصبية عميقة، مما يمكن الوكلاء من اتخاذ القرارات في فضاءات حالات مستمرة عالية الأبعاد.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Deep Q-Networks (DQN), Experience Replay & Target Networks.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Deep Q-Networks parameterize action-value functions $Q(s, a; \\theta)$ with deep neural networks, enabling reinforcement learning agents to operate in high-dimensional continuous state spaces.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تعبر شبكات Deep Q-Networks عن دوال القيمة $Q(s, a; \\theta)$ بشبكات عصبية عميقة، مما يمكن الوكلاء من اتخاذ القرارات في فضاءات حالات مستمرة عالية الأبعاد.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch3_easy_45",
      "titleEn": "[EASY] Policy Gradient Methods & Proximal Policy Optimization (PPO) - Review 45",
      "titleAr": "[مستوى أساسي] طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO) - سؤال 45",
      "questionEn": "[AI & Data Science Core Concept] Regarding Policy Gradient Methods & Proximal Policy Optimization (PPO), which of the following statements is theoretically and mathematically sound? (Variant 45)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 45)",
      "optionsEn": [
        "Policy gradient methods directly parameterize and optimize a stochastic policy $\\pi_\\theta(a|s)$ using gradient ascent to maximize expected cumulative discounted return $J(\\theta) = \\mathbb{E}[\\sum \\gamma^t r_t]$.",
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تنمذج طرق تدرج السياسة وتُحسن مباشرة السياسة الاحتمالية $\\pi_\\theta(a|s)$ باستخدام الصعود التدريجي لتعظيم العائد التراكمي المتوقع.",
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "Policy gradient methods directly parameterize and optimize a stochastic policy $\\pi_\\theta(a|s)$ using gradient ascent to maximize expected cumulative discounted return $J(\\theta) = \\mathbb{E}[\\sum \\gamma^t r_t]$.",
      "correctAnswerEn": "Policy gradient methods directly parameterize and optimize a stochastic policy $\\pi_\\theta(a|s)$ using gradient ascent to maximize expected cumulative discounted return $J(\\theta) = \\mathbb{E}[\\sum \\gamma^t r_t]$.",
      "correctAnswerAr": "تنمذج طرق تدرج السياسة وتُحسن مباشرة السياسة الاحتمالية $\\pi_\\theta(a|s)$ باستخدام الصعود التدريجي لتعظيم العائد التراكمي المتوقع.",
      "correctIndex": 0,
      "explanationEn": "Correct Theoretical Formulation: Policy gradient methods directly parameterize and optimize a stochastic policy $\\pi_\\theta(a|s)$ using gradient ascent to maximize expected cumulative discounted return $J(\\theta) = \\mathbb{E}[\\sum \\gamma^t r_t]$.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تنمذج طرق تدرج السياسة وتُحسن مباشرة السياسة الاحتمالية $\\pi_\\theta(a|s)$ باستخدام الصعود التدريجي لتعظيم العائد التراكمي المتوقع.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Policy Gradient Methods & Proximal Policy Optimization (PPO).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Policy gradient methods directly parameterize and optimize a stochastic policy $\\pi_\\theta(a|s)$ using gradient ascent to maximize expected cumulative discounted return $J(\\theta) = \\mathbb{E}[\\sum \\gamma^t r_t]$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تنمذج طرق تدرج السياسة وتُحسن مباشرة السياسة الاحتمالية $\\pi_\\theta(a|s)$ باستخدام الصعود التدريجي لتعظيم العائد التراكمي المتوقع.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch3_easy_46",
      "titleEn": "[EASY] Markov Decision Processes & Bellman Optimality Equations - Review 46",
      "titleAr": "[مستوى أساسي] عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل - سؤال 46",
      "questionEn": "[AI & Data Science Core Concept] Regarding Markov Decision Processes & Bellman Optimality Equations, which of the following statements is theoretically and mathematically sound? (Variant 46)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 46)",
      "optionsEn": [
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "A Markov Decision Process (MDP) models sequential decision making under uncertainty as a tuple $(S, A, P, R, \\gamma)$, where the next state transitions depend solely on the current state and action.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "تنمذج عملية ماركوف لاتخاذ القرار (MDP) اتخاذ القرارات المتتابعة في ظل عدم اليقين كخماسية $(S, A, P, R, \\gamma)$، حيث تعتمد الحالة التالية فقط على الحالة الحالية والإجراء.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "A Markov Decision Process (MDP) models sequential decision making under uncertainty as a tuple $(S, A, P, R, \\gamma)$, where the next state transitions depend solely on the current state and action.",
      "correctAnswerEn": "A Markov Decision Process (MDP) models sequential decision making under uncertainty as a tuple $(S, A, P, R, \\gamma)$, where the next state transitions depend solely on the current state and action.",
      "correctAnswerAr": "تنمذج عملية ماركوف لاتخاذ القرار (MDP) اتخاذ القرارات المتتابعة في ظل عدم اليقين كخماسية $(S, A, P, R, \\gamma)$، حيث تعتمد الحالة التالية فقط على الحالة الحالية والإجراء.",
      "correctIndex": 1,
      "explanationEn": "Correct Theoretical Formulation: A Markov Decision Process (MDP) models sequential decision making under uncertainty as a tuple $(S, A, P, R, \\gamma)$, where the next state transitions depend solely on the current state and action.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تنمذج عملية ماركوف لاتخاذ القرار (MDP) اتخاذ القرارات المتتابعة في ظل عدم اليقين كخماسية $(S, A, P, R, \\gamma)$، حيث تعتمد الحالة التالية فقط على الحالة الحالية والإجراء.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Markov Decision Processes & Bellman Optimality Equations.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: A Markov Decision Process (MDP) models sequential decision making under uncertainty as a tuple $(S, A, P, R, \\gamma)$, where the next state transitions depend solely on the current state and action.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تنمذج عملية ماركوف لاتخاذ القرار (MDP) اتخاذ القرارات المتتابعة في ظل عدم اليقين كخماسية $(S, A, P, R, \\gamma)$، حيث تعتمد الحالة التالية فقط على الحالة الحالية والإجراء.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch3_easy_47",
      "titleEn": "[EASY] Deep Q-Networks (DQN), Experience Replay & Target Networks - Review 47",
      "titleAr": "[مستوى أساسي] شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف - سؤال 47",
      "questionEn": "[AI & Data Science Core Concept] Regarding Deep Q-Networks (DQN), Experience Replay & Target Networks, which of the following statements is theoretically and mathematically sound? (Variant 47)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 47)",
      "optionsEn": [
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Deep Q-Networks parameterize action-value functions $Q(s, a; \\theta)$ with deep neural networks, enabling reinforcement learning agents to operate in high-dimensional continuous state spaces.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تعبر شبكات Deep Q-Networks عن دوال القيمة $Q(s, a; \\theta)$ بشبكات عصبية عميقة، مما يمكن الوكلاء من اتخاذ القرارات في فضاءات حالات مستمرة عالية الأبعاد.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "Deep Q-Networks parameterize action-value functions $Q(s, a; \\theta)$ with deep neural networks, enabling reinforcement learning agents to operate in high-dimensional continuous state spaces.",
      "correctAnswerEn": "Deep Q-Networks parameterize action-value functions $Q(s, a; \\theta)$ with deep neural networks, enabling reinforcement learning agents to operate in high-dimensional continuous state spaces.",
      "correctAnswerAr": "تعبر شبكات Deep Q-Networks عن دوال القيمة $Q(s, a; \\theta)$ بشبكات عصبية عميقة، مما يمكن الوكلاء من اتخاذ القرارات في فضاءات حالات مستمرة عالية الأبعاد.",
      "correctIndex": 2,
      "explanationEn": "Correct Theoretical Formulation: Deep Q-Networks parameterize action-value functions $Q(s, a; \\theta)$ with deep neural networks, enabling reinforcement learning agents to operate in high-dimensional continuous state spaces.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تعبر شبكات Deep Q-Networks عن دوال القيمة $Q(s, a; \\theta)$ بشبكات عصبية عميقة، مما يمكن الوكلاء من اتخاذ القرارات في فضاءات حالات مستمرة عالية الأبعاد.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Deep Q-Networks (DQN), Experience Replay & Target Networks.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Deep Q-Networks parameterize action-value functions $Q(s, a; \\theta)$ with deep neural networks, enabling reinforcement learning agents to operate in high-dimensional continuous state spaces.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تعبر شبكات Deep Q-Networks عن دوال القيمة $Q(s, a; \\theta)$ بشبكات عصبية عميقة، مما يمكن الوكلاء من اتخاذ القرارات في فضاءات حالات مستمرة عالية الأبعاد.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch3_easy_48",
      "titleEn": "[EASY] Policy Gradient Methods & Proximal Policy Optimization (PPO) - Review 48",
      "titleAr": "[مستوى أساسي] طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO) - سؤال 48",
      "questionEn": "[AI & Data Science Core Concept] Regarding Policy Gradient Methods & Proximal Policy Optimization (PPO), which of the following statements is theoretically and mathematically sound? (Variant 48)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 48)",
      "optionsEn": [
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "Policy gradient methods directly parameterize and optimize a stochastic policy $\\pi_\\theta(a|s)$ using gradient ascent to maximize expected cumulative discounted return $J(\\theta) = \\mathbb{E}[\\sum \\gamma^t r_t]$."
      ],
      "optionsAr": [
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "تنمذج طرق تدرج السياسة وتُحسن مباشرة السياسة الاحتمالية $\\pi_\\theta(a|s)$ باستخدام الصعود التدريجي لتعظيم العائد التراكمي المتوقع."
      ],
      "correctAnswer": "Policy gradient methods directly parameterize and optimize a stochastic policy $\\pi_\\theta(a|s)$ using gradient ascent to maximize expected cumulative discounted return $J(\\theta) = \\mathbb{E}[\\sum \\gamma^t r_t]$.",
      "correctAnswerEn": "Policy gradient methods directly parameterize and optimize a stochastic policy $\\pi_\\theta(a|s)$ using gradient ascent to maximize expected cumulative discounted return $J(\\theta) = \\mathbb{E}[\\sum \\gamma^t r_t]$.",
      "correctAnswerAr": "تنمذج طرق تدرج السياسة وتُحسن مباشرة السياسة الاحتمالية $\\pi_\\theta(a|s)$ باستخدام الصعود التدريجي لتعظيم العائد التراكمي المتوقع.",
      "correctIndex": 3,
      "explanationEn": "Correct Theoretical Formulation: Policy gradient methods directly parameterize and optimize a stochastic policy $\\pi_\\theta(a|s)$ using gradient ascent to maximize expected cumulative discounted return $J(\\theta) = \\mathbb{E}[\\sum \\gamma^t r_t]$.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تنمذج طرق تدرج السياسة وتُحسن مباشرة السياسة الاحتمالية $\\pi_\\theta(a|s)$ باستخدام الصعود التدريجي لتعظيم العائد التراكمي المتوقع.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Policy Gradient Methods & Proximal Policy Optimization (PPO).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Policy gradient methods directly parameterize and optimize a stochastic policy $\\pi_\\theta(a|s)$ using gradient ascent to maximize expected cumulative discounted return $J(\\theta) = \\mathbb{E}[\\sum \\gamma^t r_t]$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تنمذج طرق تدرج السياسة وتُحسن مباشرة السياسة الاحتمالية $\\pi_\\theta(a|s)$ باستخدام الصعود التدريجي لتعظيم العائد التراكمي المتوقع.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch3_easy_49",
      "titleEn": "[EASY] Markov Decision Processes & Bellman Optimality Equations - Review 49",
      "titleAr": "[مستوى أساسي] عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل - سؤال 49",
      "questionEn": "[AI & Data Science Core Concept] Regarding Markov Decision Processes & Bellman Optimality Equations, which of the following statements is theoretically and mathematically sound? (Variant 49)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 49)",
      "optionsEn": [
        "A Markov Decision Process (MDP) models sequential decision making under uncertainty as a tuple $(S, A, P, R, \\gamma)$, where the next state transitions depend solely on the current state and action.",
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "تنمذج عملية ماركوف لاتخاذ القرار (MDP) اتخاذ القرارات المتتابعة في ظل عدم اليقين كخماسية $(S, A, P, R, \\gamma)$، حيث تعتمد الحالة التالية فقط على الحالة الحالية والإجراء.",
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "A Markov Decision Process (MDP) models sequential decision making under uncertainty as a tuple $(S, A, P, R, \\gamma)$, where the next state transitions depend solely on the current state and action.",
      "correctAnswerEn": "A Markov Decision Process (MDP) models sequential decision making under uncertainty as a tuple $(S, A, P, R, \\gamma)$, where the next state transitions depend solely on the current state and action.",
      "correctAnswerAr": "تنمذج عملية ماركوف لاتخاذ القرار (MDP) اتخاذ القرارات المتتابعة في ظل عدم اليقين كخماسية $(S, A, P, R, \\gamma)$، حيث تعتمد الحالة التالية فقط على الحالة الحالية والإجراء.",
      "correctIndex": 0,
      "explanationEn": "Correct Theoretical Formulation: A Markov Decision Process (MDP) models sequential decision making under uncertainty as a tuple $(S, A, P, R, \\gamma)$, where the next state transitions depend solely on the current state and action.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تنمذج عملية ماركوف لاتخاذ القرار (MDP) اتخاذ القرارات المتتابعة في ظل عدم اليقين كخماسية $(S, A, P, R, \\gamma)$، حيث تعتمد الحالة التالية فقط على الحالة الحالية والإجراء.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Markov Decision Processes & Bellman Optimality Equations.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: A Markov Decision Process (MDP) models sequential decision making under uncertainty as a tuple $(S, A, P, R, \\gamma)$, where the next state transitions depend solely on the current state and action.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تنمذج عملية ماركوف لاتخاذ القرار (MDP) اتخاذ القرارات المتتابعة في ظل عدم اليقين كخماسية $(S, A, P, R, \\gamma)$، حيث تعتمد الحالة التالية فقط على الحالة الحالية والإجراء.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch3_easy_50",
      "titleEn": "[EASY] Deep Q-Networks (DQN), Experience Replay & Target Networks - Review 50",
      "titleAr": "[مستوى أساسي] شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف - سؤال 50",
      "questionEn": "[AI & Data Science Core Concept] Regarding Deep Q-Networks (DQN), Experience Replay & Target Networks, which of the following statements is theoretically and mathematically sound? (Variant 50)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 50)",
      "optionsEn": [
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "Deep Q-Networks parameterize action-value functions $Q(s, a; \\theta)$ with deep neural networks, enabling reinforcement learning agents to operate in high-dimensional continuous state spaces.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تعبر شبكات Deep Q-Networks عن دوال القيمة $Q(s, a; \\theta)$ بشبكات عصبية عميقة، مما يمكن الوكلاء من اتخاذ القرارات في فضاءات حالات مستمرة عالية الأبعاد.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "Deep Q-Networks parameterize action-value functions $Q(s, a; \\theta)$ with deep neural networks, enabling reinforcement learning agents to operate in high-dimensional continuous state spaces.",
      "correctAnswerEn": "Deep Q-Networks parameterize action-value functions $Q(s, a; \\theta)$ with deep neural networks, enabling reinforcement learning agents to operate in high-dimensional continuous state spaces.",
      "correctAnswerAr": "تعبر شبكات Deep Q-Networks عن دوال القيمة $Q(s, a; \\theta)$ بشبكات عصبية عميقة، مما يمكن الوكلاء من اتخاذ القرارات في فضاءات حالات مستمرة عالية الأبعاد.",
      "correctIndex": 1,
      "explanationEn": "Correct Theoretical Formulation: Deep Q-Networks parameterize action-value functions $Q(s, a; \\theta)$ with deep neural networks, enabling reinforcement learning agents to operate in high-dimensional continuous state spaces.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تعبر شبكات Deep Q-Networks عن دوال القيمة $Q(s, a; \\theta)$ بشبكات عصبية عميقة، مما يمكن الوكلاء من اتخاذ القرارات في فضاءات حالات مستمرة عالية الأبعاد.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Deep Q-Networks (DQN), Experience Replay & Target Networks.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Deep Q-Networks parameterize action-value functions $Q(s, a; \\theta)$ with deep neural networks, enabling reinforcement learning agents to operate in high-dimensional continuous state spaces.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تعبر شبكات Deep Q-Networks عن دوال القيمة $Q(s, a; \\theta)$ بشبكات عصبية عميقة، مما يمكن الوكلاء من اتخاذ القرارات في فضاءات حالات مستمرة عالية الأبعاد.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch3_easy_51",
      "titleEn": "[EASY] Policy Gradient Methods & Proximal Policy Optimization (PPO) - Review 51",
      "titleAr": "[مستوى أساسي] طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO) - سؤال 51",
      "questionEn": "[AI & Data Science Core Concept] Regarding Policy Gradient Methods & Proximal Policy Optimization (PPO), which of the following statements is theoretically and mathematically sound? (Variant 51)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 51)",
      "optionsEn": [
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "Policy gradient methods directly parameterize and optimize a stochastic policy $\\pi_\\theta(a|s)$ using gradient ascent to maximize expected cumulative discounted return $J(\\theta) = \\mathbb{E}[\\sum \\gamma^t r_t]$.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "تنمذج طرق تدرج السياسة وتُحسن مباشرة السياسة الاحتمالية $\\pi_\\theta(a|s)$ باستخدام الصعود التدريجي لتعظيم العائد التراكمي المتوقع.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "Policy gradient methods directly parameterize and optimize a stochastic policy $\\pi_\\theta(a|s)$ using gradient ascent to maximize expected cumulative discounted return $J(\\theta) = \\mathbb{E}[\\sum \\gamma^t r_t]$.",
      "correctAnswerEn": "Policy gradient methods directly parameterize and optimize a stochastic policy $\\pi_\\theta(a|s)$ using gradient ascent to maximize expected cumulative discounted return $J(\\theta) = \\mathbb{E}[\\sum \\gamma^t r_t]$.",
      "correctAnswerAr": "تنمذج طرق تدرج السياسة وتُحسن مباشرة السياسة الاحتمالية $\\pi_\\theta(a|s)$ باستخدام الصعود التدريجي لتعظيم العائد التراكمي المتوقع.",
      "correctIndex": 2,
      "explanationEn": "Correct Theoretical Formulation: Policy gradient methods directly parameterize and optimize a stochastic policy $\\pi_\\theta(a|s)$ using gradient ascent to maximize expected cumulative discounted return $J(\\theta) = \\mathbb{E}[\\sum \\gamma^t r_t]$.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تنمذج طرق تدرج السياسة وتُحسن مباشرة السياسة الاحتمالية $\\pi_\\theta(a|s)$ باستخدام الصعود التدريجي لتعظيم العائد التراكمي المتوقع.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Policy Gradient Methods & Proximal Policy Optimization (PPO).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Policy gradient methods directly parameterize and optimize a stochastic policy $\\pi_\\theta(a|s)$ using gradient ascent to maximize expected cumulative discounted return $J(\\theta) = \\mathbb{E}[\\sum \\gamma^t r_t]$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تنمذج طرق تدرج السياسة وتُحسن مباشرة السياسة الاحتمالية $\\pi_\\theta(a|s)$ باستخدام الصعود التدريجي لتعظيم العائد التراكمي المتوقع.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch3_easy_52",
      "titleEn": "[EASY] Markov Decision Processes & Bellman Optimality Equations - Review 52",
      "titleAr": "[مستوى أساسي] عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل - سؤال 52",
      "questionEn": "[AI & Data Science Core Concept] Regarding Markov Decision Processes & Bellman Optimality Equations, which of the following statements is theoretically and mathematically sound? (Variant 52)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 52)",
      "optionsEn": [
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "A Markov Decision Process (MDP) models sequential decision making under uncertainty as a tuple $(S, A, P, R, \\gamma)$, where the next state transitions depend solely on the current state and action."
      ],
      "optionsAr": [
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "تنمذج عملية ماركوف لاتخاذ القرار (MDP) اتخاذ القرارات المتتابعة في ظل عدم اليقين كخماسية $(S, A, P, R, \\gamma)$، حيث تعتمد الحالة التالية فقط على الحالة الحالية والإجراء."
      ],
      "correctAnswer": "A Markov Decision Process (MDP) models sequential decision making under uncertainty as a tuple $(S, A, P, R, \\gamma)$, where the next state transitions depend solely on the current state and action.",
      "correctAnswerEn": "A Markov Decision Process (MDP) models sequential decision making under uncertainty as a tuple $(S, A, P, R, \\gamma)$, where the next state transitions depend solely on the current state and action.",
      "correctAnswerAr": "تنمذج عملية ماركوف لاتخاذ القرار (MDP) اتخاذ القرارات المتتابعة في ظل عدم اليقين كخماسية $(S, A, P, R, \\gamma)$، حيث تعتمد الحالة التالية فقط على الحالة الحالية والإجراء.",
      "correctIndex": 3,
      "explanationEn": "Correct Theoretical Formulation: A Markov Decision Process (MDP) models sequential decision making under uncertainty as a tuple $(S, A, P, R, \\gamma)$, where the next state transitions depend solely on the current state and action.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تنمذج عملية ماركوف لاتخاذ القرار (MDP) اتخاذ القرارات المتتابعة في ظل عدم اليقين كخماسية $(S, A, P, R, \\gamma)$، حيث تعتمد الحالة التالية فقط على الحالة الحالية والإجراء.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Markov Decision Processes & Bellman Optimality Equations.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: A Markov Decision Process (MDP) models sequential decision making under uncertainty as a tuple $(S, A, P, R, \\gamma)$, where the next state transitions depend solely on the current state and action.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تنمذج عملية ماركوف لاتخاذ القرار (MDP) اتخاذ القرارات المتتابعة في ظل عدم اليقين كخماسية $(S, A, P, R, \\gamma)$، حيث تعتمد الحالة التالية فقط على الحالة الحالية والإجراء.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch3_easy_53",
      "titleEn": "[EASY] Deep Q-Networks (DQN), Experience Replay & Target Networks - Review 53",
      "titleAr": "[مستوى أساسي] شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف - سؤال 53",
      "questionEn": "[AI & Data Science Core Concept] Regarding Deep Q-Networks (DQN), Experience Replay & Target Networks, which of the following statements is theoretically and mathematically sound? (Variant 53)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 53)",
      "optionsEn": [
        "Deep Q-Networks parameterize action-value functions $Q(s, a; \\theta)$ with deep neural networks, enabling reinforcement learning agents to operate in high-dimensional continuous state spaces.",
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "تعبر شبكات Deep Q-Networks عن دوال القيمة $Q(s, a; \\theta)$ بشبكات عصبية عميقة، مما يمكن الوكلاء من اتخاذ القرارات في فضاءات حالات مستمرة عالية الأبعاد.",
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "Deep Q-Networks parameterize action-value functions $Q(s, a; \\theta)$ with deep neural networks, enabling reinforcement learning agents to operate in high-dimensional continuous state spaces.",
      "correctAnswerEn": "Deep Q-Networks parameterize action-value functions $Q(s, a; \\theta)$ with deep neural networks, enabling reinforcement learning agents to operate in high-dimensional continuous state spaces.",
      "correctAnswerAr": "تعبر شبكات Deep Q-Networks عن دوال القيمة $Q(s, a; \\theta)$ بشبكات عصبية عميقة، مما يمكن الوكلاء من اتخاذ القرارات في فضاءات حالات مستمرة عالية الأبعاد.",
      "correctIndex": 0,
      "explanationEn": "Correct Theoretical Formulation: Deep Q-Networks parameterize action-value functions $Q(s, a; \\theta)$ with deep neural networks, enabling reinforcement learning agents to operate in high-dimensional continuous state spaces.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تعبر شبكات Deep Q-Networks عن دوال القيمة $Q(s, a; \\theta)$ بشبكات عصبية عميقة، مما يمكن الوكلاء من اتخاذ القرارات في فضاءات حالات مستمرة عالية الأبعاد.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Deep Q-Networks (DQN), Experience Replay & Target Networks.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Deep Q-Networks parameterize action-value functions $Q(s, a; \\theta)$ with deep neural networks, enabling reinforcement learning agents to operate in high-dimensional continuous state spaces.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تعبر شبكات Deep Q-Networks عن دوال القيمة $Q(s, a; \\theta)$ بشبكات عصبية عميقة، مما يمكن الوكلاء من اتخاذ القرارات في فضاءات حالات مستمرة عالية الأبعاد.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch3_easy_54",
      "titleEn": "[EASY] Policy Gradient Methods & Proximal Policy Optimization (PPO) - Review 54",
      "titleAr": "[مستوى أساسي] طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO) - سؤال 54",
      "questionEn": "[AI & Data Science Core Concept] Regarding Policy Gradient Methods & Proximal Policy Optimization (PPO), which of the following statements is theoretically and mathematically sound? (Variant 54)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 54)",
      "optionsEn": [
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "Policy gradient methods directly parameterize and optimize a stochastic policy $\\pi_\\theta(a|s)$ using gradient ascent to maximize expected cumulative discounted return $J(\\theta) = \\mathbb{E}[\\sum \\gamma^t r_t]$.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "تنمذج طرق تدرج السياسة وتُحسن مباشرة السياسة الاحتمالية $\\pi_\\theta(a|s)$ باستخدام الصعود التدريجي لتعظيم العائد التراكمي المتوقع.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "Policy gradient methods directly parameterize and optimize a stochastic policy $\\pi_\\theta(a|s)$ using gradient ascent to maximize expected cumulative discounted return $J(\\theta) = \\mathbb{E}[\\sum \\gamma^t r_t]$.",
      "correctAnswerEn": "Policy gradient methods directly parameterize and optimize a stochastic policy $\\pi_\\theta(a|s)$ using gradient ascent to maximize expected cumulative discounted return $J(\\theta) = \\mathbb{E}[\\sum \\gamma^t r_t]$.",
      "correctAnswerAr": "تنمذج طرق تدرج السياسة وتُحسن مباشرة السياسة الاحتمالية $\\pi_\\theta(a|s)$ باستخدام الصعود التدريجي لتعظيم العائد التراكمي المتوقع.",
      "correctIndex": 1,
      "explanationEn": "Correct Theoretical Formulation: Policy gradient methods directly parameterize and optimize a stochastic policy $\\pi_\\theta(a|s)$ using gradient ascent to maximize expected cumulative discounted return $J(\\theta) = \\mathbb{E}[\\sum \\gamma^t r_t]$.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تنمذج طرق تدرج السياسة وتُحسن مباشرة السياسة الاحتمالية $\\pi_\\theta(a|s)$ باستخدام الصعود التدريجي لتعظيم العائد التراكمي المتوقع.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Policy Gradient Methods & Proximal Policy Optimization (PPO).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Policy gradient methods directly parameterize and optimize a stochastic policy $\\pi_\\theta(a|s)$ using gradient ascent to maximize expected cumulative discounted return $J(\\theta) = \\mathbb{E}[\\sum \\gamma^t r_t]$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تنمذج طرق تدرج السياسة وتُحسن مباشرة السياسة الاحتمالية $\\pi_\\theta(a|s)$ باستخدام الصعود التدريجي لتعظيم العائد التراكمي المتوقع.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch3_easy_55",
      "titleEn": "[EASY] Markov Decision Processes & Bellman Optimality Equations - Review 55",
      "titleAr": "[مستوى أساسي] عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل - سؤال 55",
      "questionEn": "[AI & Data Science Core Concept] Regarding Markov Decision Processes & Bellman Optimality Equations, which of the following statements is theoretically and mathematically sound? (Variant 55)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 55)",
      "optionsEn": [
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "A Markov Decision Process (MDP) models sequential decision making under uncertainty as a tuple $(S, A, P, R, \\gamma)$, where the next state transitions depend solely on the current state and action.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تنمذج عملية ماركوف لاتخاذ القرار (MDP) اتخاذ القرارات المتتابعة في ظل عدم اليقين كخماسية $(S, A, P, R, \\gamma)$، حيث تعتمد الحالة التالية فقط على الحالة الحالية والإجراء.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "A Markov Decision Process (MDP) models sequential decision making under uncertainty as a tuple $(S, A, P, R, \\gamma)$, where the next state transitions depend solely on the current state and action.",
      "correctAnswerEn": "A Markov Decision Process (MDP) models sequential decision making under uncertainty as a tuple $(S, A, P, R, \\gamma)$, where the next state transitions depend solely on the current state and action.",
      "correctAnswerAr": "تنمذج عملية ماركوف لاتخاذ القرار (MDP) اتخاذ القرارات المتتابعة في ظل عدم اليقين كخماسية $(S, A, P, R, \\gamma)$، حيث تعتمد الحالة التالية فقط على الحالة الحالية والإجراء.",
      "correctIndex": 2,
      "explanationEn": "Correct Theoretical Formulation: A Markov Decision Process (MDP) models sequential decision making under uncertainty as a tuple $(S, A, P, R, \\gamma)$, where the next state transitions depend solely on the current state and action.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تنمذج عملية ماركوف لاتخاذ القرار (MDP) اتخاذ القرارات المتتابعة في ظل عدم اليقين كخماسية $(S, A, P, R, \\gamma)$، حيث تعتمد الحالة التالية فقط على الحالة الحالية والإجراء.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Markov Decision Processes & Bellman Optimality Equations.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: A Markov Decision Process (MDP) models sequential decision making under uncertainty as a tuple $(S, A, P, R, \\gamma)$, where the next state transitions depend solely on the current state and action.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تنمذج عملية ماركوف لاتخاذ القرار (MDP) اتخاذ القرارات المتتابعة في ظل عدم اليقين كخماسية $(S, A, P, R, \\gamma)$، حيث تعتمد الحالة التالية فقط على الحالة الحالية والإجراء.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch3_easy_56",
      "titleEn": "[EASY] Deep Q-Networks (DQN), Experience Replay & Target Networks - Review 56",
      "titleAr": "[مستوى أساسي] شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف - سؤال 56",
      "questionEn": "[AI & Data Science Core Concept] Regarding Deep Q-Networks (DQN), Experience Replay & Target Networks, which of the following statements is theoretically and mathematically sound? (Variant 56)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 56)",
      "optionsEn": [
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "Deep Q-Networks parameterize action-value functions $Q(s, a; \\theta)$ with deep neural networks, enabling reinforcement learning agents to operate in high-dimensional continuous state spaces."
      ],
      "optionsAr": [
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تعبر شبكات Deep Q-Networks عن دوال القيمة $Q(s, a; \\theta)$ بشبكات عصبية عميقة، مما يمكن الوكلاء من اتخاذ القرارات في فضاءات حالات مستمرة عالية الأبعاد."
      ],
      "correctAnswer": "Deep Q-Networks parameterize action-value functions $Q(s, a; \\theta)$ with deep neural networks, enabling reinforcement learning agents to operate in high-dimensional continuous state spaces.",
      "correctAnswerEn": "Deep Q-Networks parameterize action-value functions $Q(s, a; \\theta)$ with deep neural networks, enabling reinforcement learning agents to operate in high-dimensional continuous state spaces.",
      "correctAnswerAr": "تعبر شبكات Deep Q-Networks عن دوال القيمة $Q(s, a; \\theta)$ بشبكات عصبية عميقة، مما يمكن الوكلاء من اتخاذ القرارات في فضاءات حالات مستمرة عالية الأبعاد.",
      "correctIndex": 3,
      "explanationEn": "Correct Theoretical Formulation: Deep Q-Networks parameterize action-value functions $Q(s, a; \\theta)$ with deep neural networks, enabling reinforcement learning agents to operate in high-dimensional continuous state spaces.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تعبر شبكات Deep Q-Networks عن دوال القيمة $Q(s, a; \\theta)$ بشبكات عصبية عميقة، مما يمكن الوكلاء من اتخاذ القرارات في فضاءات حالات مستمرة عالية الأبعاد.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Deep Q-Networks (DQN), Experience Replay & Target Networks.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Deep Q-Networks parameterize action-value functions $Q(s, a; \\theta)$ with deep neural networks, enabling reinforcement learning agents to operate in high-dimensional continuous state spaces.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تعبر شبكات Deep Q-Networks عن دوال القيمة $Q(s, a; \\theta)$ بشبكات عصبية عميقة، مما يمكن الوكلاء من اتخاذ القرارات في فضاءات حالات مستمرة عالية الأبعاد.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch3_easy_57",
      "titleEn": "[EASY] Policy Gradient Methods & Proximal Policy Optimization (PPO) - Review 57",
      "titleAr": "[مستوى أساسي] طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO) - سؤال 57",
      "questionEn": "[AI & Data Science Core Concept] Regarding Policy Gradient Methods & Proximal Policy Optimization (PPO), which of the following statements is theoretically and mathematically sound? (Variant 57)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO)، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 57)",
      "optionsEn": [
        "Policy gradient methods directly parameterize and optimize a stochastic policy $\\pi_\\theta(a|s)$ using gradient ascent to maximize expected cumulative discounted return $J(\\theta) = \\mathbb{E}[\\sum \\gamma^t r_t]$.",
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "تنمذج طرق تدرج السياسة وتُحسن مباشرة السياسة الاحتمالية $\\pi_\\theta(a|s)$ باستخدام الصعود التدريجي لتعظيم العائد التراكمي المتوقع.",
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "Policy gradient methods directly parameterize and optimize a stochastic policy $\\pi_\\theta(a|s)$ using gradient ascent to maximize expected cumulative discounted return $J(\\theta) = \\mathbb{E}[\\sum \\gamma^t r_t]$.",
      "correctAnswerEn": "Policy gradient methods directly parameterize and optimize a stochastic policy $\\pi_\\theta(a|s)$ using gradient ascent to maximize expected cumulative discounted return $J(\\theta) = \\mathbb{E}[\\sum \\gamma^t r_t]$.",
      "correctAnswerAr": "تنمذج طرق تدرج السياسة وتُحسن مباشرة السياسة الاحتمالية $\\pi_\\theta(a|s)$ باستخدام الصعود التدريجي لتعظيم العائد التراكمي المتوقع.",
      "correctIndex": 0,
      "explanationEn": "Correct Theoretical Formulation: Policy gradient methods directly parameterize and optimize a stochastic policy $\\pi_\\theta(a|s)$ using gradient ascent to maximize expected cumulative discounted return $J(\\theta) = \\mathbb{E}[\\sum \\gamma^t r_t]$.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تنمذج طرق تدرج السياسة وتُحسن مباشرة السياسة الاحتمالية $\\pi_\\theta(a|s)$ باستخدام الصعود التدريجي لتعظيم العائد التراكمي المتوقع.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Policy Gradient Methods & Proximal Policy Optimization (PPO).",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: Policy gradient methods directly parameterize and optimize a stochastic policy $\\pi_\\theta(a|s)$ using gradient ascent to maximize expected cumulative discounted return $J(\\theta) = \\mathbb{E}[\\sum \\gamma^t r_t]$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO).",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تنمذج طرق تدرج السياسة وتُحسن مباشرة السياسة الاحتمالية $\\pi_\\theta(a|s)$ باستخدام الصعود التدريجي لتعظيم العائد التراكمي المتوقع.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_ai_data_science_ch3_easy_58",
      "titleEn": "[EASY] Markov Decision Processes & Bellman Optimality Equations - Review 58",
      "titleAr": "[مستوى أساسي] عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل - سؤال 58",
      "questionEn": "[AI & Data Science Core Concept] Regarding Markov Decision Processes & Bellman Optimality Equations, which of the following statements is theoretically and mathematically sound? (Variant 58)",
      "questionAr": "[مفاهيم الذكاء الاصطناعي وعلم البيانات] بخصوص عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل، أي العبارات التالية صحيحة نظرياً ورياضياً؟ (نموذج 58)",
      "optionsEn": [
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "A Markov Decision Process (MDP) models sequential decision making under uncertainty as a tuple $(S, A, P, R, \\gamma)$, where the next state transitions depend solely on the current state and action.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تنمذج عملية ماركوف لاتخاذ القرار (MDP) اتخاذ القرارات المتتابعة في ظل عدم اليقين كخماسية $(S, A, P, R, \\gamma)$، حيث تعتمد الحالة التالية فقط على الحالة الحالية والإجراء.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "A Markov Decision Process (MDP) models sequential decision making under uncertainty as a tuple $(S, A, P, R, \\gamma)$, where the next state transitions depend solely on the current state and action.",
      "correctAnswerEn": "A Markov Decision Process (MDP) models sequential decision making under uncertainty as a tuple $(S, A, P, R, \\gamma)$, where the next state transitions depend solely on the current state and action.",
      "correctAnswerAr": "تنمذج عملية ماركوف لاتخاذ القرار (MDP) اتخاذ القرارات المتتابعة في ظل عدم اليقين كخماسية $(S, A, P, R, \\gamma)$، حيث تعتمد الحالة التالية فقط على الحالة الحالية والإجراء.",
      "correctIndex": 1,
      "explanationEn": "Correct Theoretical Formulation: A Markov Decision Process (MDP) models sequential decision making under uncertainty as a tuple $(S, A, P, R, \\gamma)$, where the next state transitions depend solely on the current state and action.",
      "explanationAr": "الصياغة العلمية والرياضية الصحيحة: تنمذج عملية ماركوف لاتخاذ القرار (MDP) اتخاذ القرارات المتتابعة في ظل عدم اليقين كخماسية $(S, A, P, R, \\gamma)$، حيث تعتمد الحالة التالية فقط على الحالة الحالية والإجراء.",
      "stepByStepSolutionEn": [
        "Identify core machine learning principles for Markov Decision Processes & Bellman Optimality Equations.",
        "Evaluate mathematical definitions and algorithmic properties.",
        "Confirm the verified statement: A Markov Decision Process (MDP) models sequential decision making under uncertainty as a tuple $(S, A, P, R, \\gamma)$, where the next state transitions depend solely on the current state and action.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الخوارزمية الأساسية الحاكمة لـ عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل.",
        "تحليل التعريفات الرياضية والخصائص الإحصائية للنموذج.",
        "استنتاج العبارة العلمية المؤكدة: تنمذج عملية ماركوف لاتخاذ القرار (MDP) اتخاذ القرارات المتتابعة في ظل عدم اليقين كخماسية $(S, A, P, R, \\gamma)$، حيث تعتمد الحالة التالية فقط على الحالة الحالية والإجراء.."
      ],
      "difficulty": "easy"
    }
  ],
  "medium": [
    {
      "id": "egbac_ai_data_science_ch3_med_1",
      "titleEn": "[MEDIUM] Markov Decision Processes & Bellman Optimality Equations - Analysis 1",
      "titleAr": "[مستوى متوسط] عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل - تحليل 1",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Markov Decision Processes & Bellman Optimality Equations, what is the precise analytical formulation or operative rule? (Item 1)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 1)",
      "optionsEn": [
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves."
      ],
      "optionsAr": [
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "معادلة بيلمان المثلى لدالة القيمة $Q^*(s, a)$ هي $Q^*(s, a) = R(s, a) + \\gamma \\sum P(s'|s, a) \\max_{a'} Q^*(s', a')$، وتشكل دالة انكماشية تتقارب حتماً لنقطة ثابتة وحيدة.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية."
      ],
      "correctAnswer": "The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.",
      "correctAnswerEn": "The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.",
      "correctAnswerAr": "معادلة بيلمان المثلى لدالة القيمة $Q^*(s, a)$ هي $Q^*(s, a) = R(s, a) + \\gamma \\sum P(s'|s, a) \\max_{a'} Q^*(s', a')$، وتشكل دالة انكماشية تتقارب حتماً لنقطة ثابتة وحيدة.",
      "correctIndex": 1,
      "explanationEn": "Analytical Derivation & Properties: The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: معادلة بيلمان المثلى لدالة القيمة $Q^*(s, a)$ هي $Q^*(s, a) = R(s, a) + \\gamma \\sum P(s'|s, a) \\max_{a'} Q^*(s', a')$، وتشكل دالة انكماشية تتقارب حتماً لنقطة ثابتة وحيدة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Markov Decision Processes & Bellman Optimality Equations.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: معادلة بيلمان المثلى لدالة القيمة $Q^*(s, a)$ هي $Q^*(s, a) = R(s, a) + \\gamma \\sum P(s'|s, a) \\max_{a'} Q^*(s', a')$، وتشكل دالة انكماشية تتقارب حتماً لنقطة ثابتة وحيدة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch3_med_2",
      "titleEn": "[MEDIUM] Deep Q-Networks (DQN), Experience Replay & Target Networks - Analysis 2",
      "titleAr": "[مستوى متوسط] شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف - تحليل 2",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Deep Q-Networks (DQN), Experience Replay & Target Networks, what is the precise analytical formulation or operative rule? (Item 2)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 2)",
      "optionsEn": [
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تعالج شبكات DQN عدم استقرار التدريب بتقنيتين: مخزن إعادة التجارب (لأخذ عينات عشوائية غير مترابطة) وشبكة هدف منفصلة $\\theta^-$ تُحدّث دورياً لتثبيت أهداف بيلمان.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.",
      "correctAnswerEn": "DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.",
      "correctAnswerAr": "تعالج شبكات DQN عدم استقرار التدريب بتقنيتين: مخزن إعادة التجارب (لأخذ عينات عشوائية غير مترابطة) وشبكة هدف منفصلة $\\theta^-$ تُحدّث دورياً لتثبيت أهداف بيلمان.",
      "correctIndex": 2,
      "explanationEn": "Analytical Derivation & Properties: DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تعالج شبكات DQN عدم استقرار التدريب بتقنيتين: مخزن إعادة التجارب (لأخذ عينات عشوائية غير مترابطة) وشبكة هدف منفصلة $\\theta^-$ تُحدّث دورياً لتثبيت أهداف بيلمان.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Deep Q-Networks (DQN), Experience Replay & Target Networks.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تعالج شبكات DQN عدم استقرار التدريب بتقنيتين: مخزن إعادة التجارب (لأخذ عينات عشوائية غير مترابطة) وشبكة هدف منفصلة $\\theta^-$ تُحدّث دورياً لتثبيت أهداف بيلمان.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch3_med_3",
      "titleEn": "[MEDIUM] Policy Gradient Methods & Proximal Policy Optimization (PPO) - Analysis 3",
      "titleAr": "[مستوى متوسط] طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO) - تحليل 3",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Policy Gradient Methods & Proximal Policy Optimization (PPO), what is the precise analytical formulation or operative rule? (Item 3)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 3)",
      "optionsEn": [
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$."
      ],
      "optionsAr": [
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تمنع خوارزمية PPO القفزات الكبيرة المزعزعة للاستقرار عبر قص نسبة الاحتمال $r_t(\\theta)$ ضمن المدى $[1-\\epsilon, 1+\\epsilon]$ مضروبة في دالة الميزة التقديرية $\\hat{A}_t$."
      ],
      "correctAnswer": "Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.",
      "correctAnswerEn": "Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.",
      "correctAnswerAr": "تمنع خوارزمية PPO القفزات الكبيرة المزعزعة للاستقرار عبر قص نسبة الاحتمال $r_t(\\theta)$ ضمن المدى $[1-\\epsilon, 1+\\epsilon]$ مضروبة في دالة الميزة التقديرية $\\hat{A}_t$.",
      "correctIndex": 3,
      "explanationEn": "Analytical Derivation & Properties: Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تمنع خوارزمية PPO القفزات الكبيرة المزعزعة للاستقرار عبر قص نسبة الاحتمال $r_t(\\theta)$ ضمن المدى $[1-\\epsilon, 1+\\epsilon]$ مضروبة في دالة الميزة التقديرية $\\hat{A}_t$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Policy Gradient Methods & Proximal Policy Optimization (PPO).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تمنع خوارزمية PPO القفزات الكبيرة المزعزعة للاستقرار عبر قص نسبة الاحتمال $r_t(\\theta)$ ضمن المدى $[1-\\epsilon, 1+\\epsilon]$ مضروبة في دالة الميزة التقديرية $\\hat{A}_t$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch3_med_4",
      "titleEn": "[MEDIUM] Markov Decision Processes & Bellman Optimality Equations - Analysis 4",
      "titleAr": "[مستوى متوسط] عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل - تحليل 4",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Markov Decision Processes & Bellman Optimality Equations, what is the precise analytical formulation or operative rule? (Item 4)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 4)",
      "optionsEn": [
        "The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent."
      ],
      "optionsAr": [
        "معادلة بيلمان المثلى لدالة القيمة $Q^*(s, a)$ هي $Q^*(s, a) = R(s, a) + \\gamma \\sum P(s'|s, a) \\max_{a'} Q^*(s', a')$، وتشكل دالة انكماشية تتقارب حتماً لنقطة ثابتة وحيدة.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة."
      ],
      "correctAnswer": "The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.",
      "correctAnswerEn": "The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.",
      "correctAnswerAr": "معادلة بيلمان المثلى لدالة القيمة $Q^*(s, a)$ هي $Q^*(s, a) = R(s, a) + \\gamma \\sum P(s'|s, a) \\max_{a'} Q^*(s', a')$، وتشكل دالة انكماشية تتقارب حتماً لنقطة ثابتة وحيدة.",
      "correctIndex": 0,
      "explanationEn": "Analytical Derivation & Properties: The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: معادلة بيلمان المثلى لدالة القيمة $Q^*(s, a)$ هي $Q^*(s, a) = R(s, a) + \\gamma \\sum P(s'|s, a) \\max_{a'} Q^*(s', a')$، وتشكل دالة انكماشية تتقارب حتماً لنقطة ثابتة وحيدة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Markov Decision Processes & Bellman Optimality Equations.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: معادلة بيلمان المثلى لدالة القيمة $Q^*(s, a)$ هي $Q^*(s, a) = R(s, a) + \\gamma \\sum P(s'|s, a) \\max_{a'} Q^*(s', a')$، وتشكل دالة انكماشية تتقارب حتماً لنقطة ثابتة وحيدة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch3_med_5",
      "titleEn": "[MEDIUM] Deep Q-Networks (DQN), Experience Replay & Target Networks - Analysis 5",
      "titleAr": "[مستوى متوسط] شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف - تحليل 5",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Deep Q-Networks (DQN), Experience Replay & Target Networks, what is the precise analytical formulation or operative rule? (Item 5)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 5)",
      "optionsEn": [
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "تعالج شبكات DQN عدم استقرار التدريب بتقنيتين: مخزن إعادة التجارب (لأخذ عينات عشوائية غير مترابطة) وشبكة هدف منفصلة $\\theta^-$ تُحدّث دورياً لتثبيت أهداف بيلمان.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.",
      "correctAnswerEn": "DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.",
      "correctAnswerAr": "تعالج شبكات DQN عدم استقرار التدريب بتقنيتين: مخزن إعادة التجارب (لأخذ عينات عشوائية غير مترابطة) وشبكة هدف منفصلة $\\theta^-$ تُحدّث دورياً لتثبيت أهداف بيلمان.",
      "correctIndex": 1,
      "explanationEn": "Analytical Derivation & Properties: DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تعالج شبكات DQN عدم استقرار التدريب بتقنيتين: مخزن إعادة التجارب (لأخذ عينات عشوائية غير مترابطة) وشبكة هدف منفصلة $\\theta^-$ تُحدّث دورياً لتثبيت أهداف بيلمان.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Deep Q-Networks (DQN), Experience Replay & Target Networks.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تعالج شبكات DQN عدم استقرار التدريب بتقنيتين: مخزن إعادة التجارب (لأخذ عينات عشوائية غير مترابطة) وشبكة هدف منفصلة $\\theta^-$ تُحدّث دورياً لتثبيت أهداف بيلمان.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch3_med_6",
      "titleEn": "[MEDIUM] Policy Gradient Methods & Proximal Policy Optimization (PPO) - Analysis 6",
      "titleAr": "[مستوى متوسط] طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO) - تحليل 6",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Policy Gradient Methods & Proximal Policy Optimization (PPO), what is the precise analytical formulation or operative rule? (Item 6)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 6)",
      "optionsEn": [
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step."
      ],
      "optionsAr": [
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تمنع خوارزمية PPO القفزات الكبيرة المزعزعة للاستقرار عبر قص نسبة الاحتمال $r_t(\\theta)$ ضمن المدى $[1-\\epsilon, 1+\\epsilon]$ مضروبة في دالة الميزة التقديرية $\\hat{A}_t$.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين."
      ],
      "correctAnswer": "Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.",
      "correctAnswerEn": "Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.",
      "correctAnswerAr": "تمنع خوارزمية PPO القفزات الكبيرة المزعزعة للاستقرار عبر قص نسبة الاحتمال $r_t(\\theta)$ ضمن المدى $[1-\\epsilon, 1+\\epsilon]$ مضروبة في دالة الميزة التقديرية $\\hat{A}_t$.",
      "correctIndex": 2,
      "explanationEn": "Analytical Derivation & Properties: Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تمنع خوارزمية PPO القفزات الكبيرة المزعزعة للاستقرار عبر قص نسبة الاحتمال $r_t(\\theta)$ ضمن المدى $[1-\\epsilon, 1+\\epsilon]$ مضروبة في دالة الميزة التقديرية $\\hat{A}_t$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Policy Gradient Methods & Proximal Policy Optimization (PPO).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تمنع خوارزمية PPO القفزات الكبيرة المزعزعة للاستقرار عبر قص نسبة الاحتمال $r_t(\\theta)$ ضمن المدى $[1-\\epsilon, 1+\\epsilon]$ مضروبة في دالة الميزة التقديرية $\\hat{A}_t$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch3_med_7",
      "titleEn": "[MEDIUM] Markov Decision Processes & Bellman Optimality Equations - Analysis 7",
      "titleAr": "[مستوى متوسط] عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل - تحليل 7",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Markov Decision Processes & Bellman Optimality Equations, what is the precise analytical formulation or operative rule? (Item 7)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 7)",
      "optionsEn": [
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point."
      ],
      "optionsAr": [
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "معادلة بيلمان المثلى لدالة القيمة $Q^*(s, a)$ هي $Q^*(s, a) = R(s, a) + \\gamma \\sum P(s'|s, a) \\max_{a'} Q^*(s', a')$، وتشكل دالة انكماشية تتقارب حتماً لنقطة ثابتة وحيدة."
      ],
      "correctAnswer": "The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.",
      "correctAnswerEn": "The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.",
      "correctAnswerAr": "معادلة بيلمان المثلى لدالة القيمة $Q^*(s, a)$ هي $Q^*(s, a) = R(s, a) + \\gamma \\sum P(s'|s, a) \\max_{a'} Q^*(s', a')$، وتشكل دالة انكماشية تتقارب حتماً لنقطة ثابتة وحيدة.",
      "correctIndex": 3,
      "explanationEn": "Analytical Derivation & Properties: The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: معادلة بيلمان المثلى لدالة القيمة $Q^*(s, a)$ هي $Q^*(s, a) = R(s, a) + \\gamma \\sum P(s'|s, a) \\max_{a'} Q^*(s', a')$، وتشكل دالة انكماشية تتقارب حتماً لنقطة ثابتة وحيدة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Markov Decision Processes & Bellman Optimality Equations.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: معادلة بيلمان المثلى لدالة القيمة $Q^*(s, a)$ هي $Q^*(s, a) = R(s, a) + \\gamma \\sum P(s'|s, a) \\max_{a'} Q^*(s', a')$، وتشكل دالة انكماشية تتقارب حتماً لنقطة ثابتة وحيدة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch3_med_8",
      "titleEn": "[MEDIUM] Deep Q-Networks (DQN), Experience Replay & Target Networks - Analysis 8",
      "titleAr": "[مستوى متوسط] شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف - تحليل 8",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Deep Q-Networks (DQN), Experience Replay & Target Networks, what is the precise analytical formulation or operative rule? (Item 8)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 8)",
      "optionsEn": [
        "DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.",
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "تعالج شبكات DQN عدم استقرار التدريب بتقنيتين: مخزن إعادة التجارب (لأخذ عينات عشوائية غير مترابطة) وشبكة هدف منفصلة $\\theta^-$ تُحدّث دورياً لتثبيت أهداف بيلمان.",
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.",
      "correctAnswerEn": "DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.",
      "correctAnswerAr": "تعالج شبكات DQN عدم استقرار التدريب بتقنيتين: مخزن إعادة التجارب (لأخذ عينات عشوائية غير مترابطة) وشبكة هدف منفصلة $\\theta^-$ تُحدّث دورياً لتثبيت أهداف بيلمان.",
      "correctIndex": 0,
      "explanationEn": "Analytical Derivation & Properties: DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تعالج شبكات DQN عدم استقرار التدريب بتقنيتين: مخزن إعادة التجارب (لأخذ عينات عشوائية غير مترابطة) وشبكة هدف منفصلة $\\theta^-$ تُحدّث دورياً لتثبيت أهداف بيلمان.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Deep Q-Networks (DQN), Experience Replay & Target Networks.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تعالج شبكات DQN عدم استقرار التدريب بتقنيتين: مخزن إعادة التجارب (لأخذ عينات عشوائية غير مترابطة) وشبكة هدف منفصلة $\\theta^-$ تُحدّث دورياً لتثبيت أهداف بيلمان.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch3_med_9",
      "titleEn": "[MEDIUM] Policy Gradient Methods & Proximal Policy Optimization (PPO) - Analysis 9",
      "titleAr": "[مستوى متوسط] طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO) - تحليل 9",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Policy Gradient Methods & Proximal Policy Optimization (PPO), what is the precise analytical formulation or operative rule? (Item 9)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 9)",
      "optionsEn": [
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.",
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs."
      ],
      "optionsAr": [
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تمنع خوارزمية PPO القفزات الكبيرة المزعزعة للاستقرار عبر قص نسبة الاحتمال $r_t(\\theta)$ ضمن المدى $[1-\\epsilon, 1+\\epsilon]$ مضروبة في دالة الميزة التقديرية $\\hat{A}_t$.",
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة."
      ],
      "correctAnswer": "Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.",
      "correctAnswerEn": "Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.",
      "correctAnswerAr": "تمنع خوارزمية PPO القفزات الكبيرة المزعزعة للاستقرار عبر قص نسبة الاحتمال $r_t(\\theta)$ ضمن المدى $[1-\\epsilon, 1+\\epsilon]$ مضروبة في دالة الميزة التقديرية $\\hat{A}_t$.",
      "correctIndex": 1,
      "explanationEn": "Analytical Derivation & Properties: Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تمنع خوارزمية PPO القفزات الكبيرة المزعزعة للاستقرار عبر قص نسبة الاحتمال $r_t(\\theta)$ ضمن المدى $[1-\\epsilon, 1+\\epsilon]$ مضروبة في دالة الميزة التقديرية $\\hat{A}_t$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Policy Gradient Methods & Proximal Policy Optimization (PPO).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تمنع خوارزمية PPO القفزات الكبيرة المزعزعة للاستقرار عبر قص نسبة الاحتمال $r_t(\\theta)$ ضمن المدى $[1-\\epsilon, 1+\\epsilon]$ مضروبة في دالة الميزة التقديرية $\\hat{A}_t$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch3_med_10",
      "titleEn": "[MEDIUM] Markov Decision Processes & Bellman Optimality Equations - Analysis 10",
      "titleAr": "[مستوى متوسط] عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل - تحليل 10",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Markov Decision Processes & Bellman Optimality Equations, what is the precise analytical formulation or operative rule? (Item 10)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 10)",
      "optionsEn": [
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.",
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence."
      ],
      "optionsAr": [
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "معادلة بيلمان المثلى لدالة القيمة $Q^*(s, a)$ هي $Q^*(s, a) = R(s, a) + \\gamma \\sum P(s'|s, a) \\max_{a'} Q^*(s', a')$، وتشكل دالة انكماشية تتقارب حتماً لنقطة ثابتة وحيدة.",
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية."
      ],
      "correctAnswer": "The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.",
      "correctAnswerEn": "The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.",
      "correctAnswerAr": "معادلة بيلمان المثلى لدالة القيمة $Q^*(s, a)$ هي $Q^*(s, a) = R(s, a) + \\gamma \\sum P(s'|s, a) \\max_{a'} Q^*(s', a')$، وتشكل دالة انكماشية تتقارب حتماً لنقطة ثابتة وحيدة.",
      "correctIndex": 2,
      "explanationEn": "Analytical Derivation & Properties: The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: معادلة بيلمان المثلى لدالة القيمة $Q^*(s, a)$ هي $Q^*(s, a) = R(s, a) + \\gamma \\sum P(s'|s, a) \\max_{a'} Q^*(s', a')$، وتشكل دالة انكماشية تتقارب حتماً لنقطة ثابتة وحيدة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Markov Decision Processes & Bellman Optimality Equations.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: معادلة بيلمان المثلى لدالة القيمة $Q^*(s, a)$ هي $Q^*(s, a) = R(s, a) + \\gamma \\sum P(s'|s, a) \\max_{a'} Q^*(s', a')$، وتشكل دالة انكماشية تتقارب حتماً لنقطة ثابتة وحيدة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch3_med_11",
      "titleEn": "[MEDIUM] Deep Q-Networks (DQN), Experience Replay & Target Networks - Analysis 11",
      "titleAr": "[مستوى متوسط] شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف - تحليل 11",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Deep Q-Networks (DQN), Experience Replay & Target Networks, what is the precise analytical formulation or operative rule? (Item 11)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 11)",
      "optionsEn": [
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$."
      ],
      "optionsAr": [
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "تعالج شبكات DQN عدم استقرار التدريب بتقنيتين: مخزن إعادة التجارب (لأخذ عينات عشوائية غير مترابطة) وشبكة هدف منفصلة $\\theta^-$ تُحدّث دورياً لتثبيت أهداف بيلمان."
      ],
      "correctAnswer": "DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.",
      "correctAnswerEn": "DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.",
      "correctAnswerAr": "تعالج شبكات DQN عدم استقرار التدريب بتقنيتين: مخزن إعادة التجارب (لأخذ عينات عشوائية غير مترابطة) وشبكة هدف منفصلة $\\theta^-$ تُحدّث دورياً لتثبيت أهداف بيلمان.",
      "correctIndex": 3,
      "explanationEn": "Analytical Derivation & Properties: DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تعالج شبكات DQN عدم استقرار التدريب بتقنيتين: مخزن إعادة التجارب (لأخذ عينات عشوائية غير مترابطة) وشبكة هدف منفصلة $\\theta^-$ تُحدّث دورياً لتثبيت أهداف بيلمان.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Deep Q-Networks (DQN), Experience Replay & Target Networks.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تعالج شبكات DQN عدم استقرار التدريب بتقنيتين: مخزن إعادة التجارب (لأخذ عينات عشوائية غير مترابطة) وشبكة هدف منفصلة $\\theta^-$ تُحدّث دورياً لتثبيت أهداف بيلمان.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch3_med_12",
      "titleEn": "[MEDIUM] Policy Gradient Methods & Proximal Policy Optimization (PPO) - Analysis 12",
      "titleAr": "[مستوى متوسط] طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO) - تحليل 12",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Policy Gradient Methods & Proximal Policy Optimization (PPO), what is the precise analytical formulation or operative rule? (Item 12)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 12)",
      "optionsEn": [
        "Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data."
      ],
      "optionsAr": [
        "تمنع خوارزمية PPO القفزات الكبيرة المزعزعة للاستقرار عبر قص نسبة الاحتمال $r_t(\\theta)$ ضمن المدى $[1-\\epsilon, 1+\\epsilon]$ مضروبة في دالة الميزة التقديرية $\\hat{A}_t$.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش."
      ],
      "correctAnswer": "Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.",
      "correctAnswerEn": "Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.",
      "correctAnswerAr": "تمنع خوارزمية PPO القفزات الكبيرة المزعزعة للاستقرار عبر قص نسبة الاحتمال $r_t(\\theta)$ ضمن المدى $[1-\\epsilon, 1+\\epsilon]$ مضروبة في دالة الميزة التقديرية $\\hat{A}_t$.",
      "correctIndex": 0,
      "explanationEn": "Analytical Derivation & Properties: Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تمنع خوارزمية PPO القفزات الكبيرة المزعزعة للاستقرار عبر قص نسبة الاحتمال $r_t(\\theta)$ ضمن المدى $[1-\\epsilon, 1+\\epsilon]$ مضروبة في دالة الميزة التقديرية $\\hat{A}_t$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Policy Gradient Methods & Proximal Policy Optimization (PPO).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تمنع خوارزمية PPO القفزات الكبيرة المزعزعة للاستقرار عبر قص نسبة الاحتمال $r_t(\\theta)$ ضمن المدى $[1-\\epsilon, 1+\\epsilon]$ مضروبة في دالة الميزة التقديرية $\\hat{A}_t$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch3_med_13",
      "titleEn": "[MEDIUM] Markov Decision Processes & Bellman Optimality Equations - Analysis 13",
      "titleAr": "[مستوى متوسط] عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل - تحليل 13",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Markov Decision Processes & Bellman Optimality Equations, what is the precise analytical formulation or operative rule? (Item 13)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 13)",
      "optionsEn": [
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan."
      ],
      "optionsAr": [
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "معادلة بيلمان المثلى لدالة القيمة $Q^*(s, a)$ هي $Q^*(s, a) = R(s, a) + \\gamma \\sum P(s'|s, a) \\max_{a'} Q^*(s', a')$، وتشكل دالة انكماشية تتقارب حتماً لنقطة ثابتة وحيدة.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG)."
      ],
      "correctAnswer": "The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.",
      "correctAnswerEn": "The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.",
      "correctAnswerAr": "معادلة بيلمان المثلى لدالة القيمة $Q^*(s, a)$ هي $Q^*(s, a) = R(s, a) + \\gamma \\sum P(s'|s, a) \\max_{a'} Q^*(s', a')$، وتشكل دالة انكماشية تتقارب حتماً لنقطة ثابتة وحيدة.",
      "correctIndex": 1,
      "explanationEn": "Analytical Derivation & Properties: The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: معادلة بيلمان المثلى لدالة القيمة $Q^*(s, a)$ هي $Q^*(s, a) = R(s, a) + \\gamma \\sum P(s'|s, a) \\max_{a'} Q^*(s', a')$، وتشكل دالة انكماشية تتقارب حتماً لنقطة ثابتة وحيدة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Markov Decision Processes & Bellman Optimality Equations.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: معادلة بيلمان المثلى لدالة القيمة $Q^*(s, a)$ هي $Q^*(s, a) = R(s, a) + \\gamma \\sum P(s'|s, a) \\max_{a'} Q^*(s', a')$، وتشكل دالة انكماشية تتقارب حتماً لنقطة ثابتة وحيدة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch3_med_14",
      "titleEn": "[MEDIUM] Deep Q-Networks (DQN), Experience Replay & Target Networks - Analysis 14",
      "titleAr": "[مستوى متوسط] شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف - تحليل 14",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Deep Q-Networks (DQN), Experience Replay & Target Networks, what is the precise analytical formulation or operative rule? (Item 14)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 14)",
      "optionsEn": [
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تعالج شبكات DQN عدم استقرار التدريب بتقنيتين: مخزن إعادة التجارب (لأخذ عينات عشوائية غير مترابطة) وشبكة هدف منفصلة $\\theta^-$ تُحدّث دورياً لتثبيت أهداف بيلمان.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.",
      "correctAnswerEn": "DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.",
      "correctAnswerAr": "تعالج شبكات DQN عدم استقرار التدريب بتقنيتين: مخزن إعادة التجارب (لأخذ عينات عشوائية غير مترابطة) وشبكة هدف منفصلة $\\theta^-$ تُحدّث دورياً لتثبيت أهداف بيلمان.",
      "correctIndex": 2,
      "explanationEn": "Analytical Derivation & Properties: DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تعالج شبكات DQN عدم استقرار التدريب بتقنيتين: مخزن إعادة التجارب (لأخذ عينات عشوائية غير مترابطة) وشبكة هدف منفصلة $\\theta^-$ تُحدّث دورياً لتثبيت أهداف بيلمان.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Deep Q-Networks (DQN), Experience Replay & Target Networks.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تعالج شبكات DQN عدم استقرار التدريب بتقنيتين: مخزن إعادة التجارب (لأخذ عينات عشوائية غير مترابطة) وشبكة هدف منفصلة $\\theta^-$ تُحدّث دورياً لتثبيت أهداف بيلمان.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch3_med_15",
      "titleEn": "[MEDIUM] Policy Gradient Methods & Proximal Policy Optimization (PPO) - Analysis 15",
      "titleAr": "[مستوى متوسط] طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO) - تحليل 15",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Policy Gradient Methods & Proximal Policy Optimization (PPO), what is the precise analytical formulation or operative rule? (Item 15)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 15)",
      "optionsEn": [
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$."
      ],
      "optionsAr": [
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "تمنع خوارزمية PPO القفزات الكبيرة المزعزعة للاستقرار عبر قص نسبة الاحتمال $r_t(\\theta)$ ضمن المدى $[1-\\epsilon, 1+\\epsilon]$ مضروبة في دالة الميزة التقديرية $\\hat{A}_t$."
      ],
      "correctAnswer": "Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.",
      "correctAnswerEn": "Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.",
      "correctAnswerAr": "تمنع خوارزمية PPO القفزات الكبيرة المزعزعة للاستقرار عبر قص نسبة الاحتمال $r_t(\\theta)$ ضمن المدى $[1-\\epsilon, 1+\\epsilon]$ مضروبة في دالة الميزة التقديرية $\\hat{A}_t$.",
      "correctIndex": 3,
      "explanationEn": "Analytical Derivation & Properties: Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تمنع خوارزمية PPO القفزات الكبيرة المزعزعة للاستقرار عبر قص نسبة الاحتمال $r_t(\\theta)$ ضمن المدى $[1-\\epsilon, 1+\\epsilon]$ مضروبة في دالة الميزة التقديرية $\\hat{A}_t$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Policy Gradient Methods & Proximal Policy Optimization (PPO).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تمنع خوارزمية PPO القفزات الكبيرة المزعزعة للاستقرار عبر قص نسبة الاحتمال $r_t(\\theta)$ ضمن المدى $[1-\\epsilon, 1+\\epsilon]$ مضروبة في دالة الميزة التقديرية $\\hat{A}_t$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch3_med_16",
      "titleEn": "[MEDIUM] Markov Decision Processes & Bellman Optimality Equations - Analysis 16",
      "titleAr": "[مستوى متوسط] عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل - تحليل 16",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Markov Decision Processes & Bellman Optimality Equations, what is the precise analytical formulation or operative rule? (Item 16)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 16)",
      "optionsEn": [
        "The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves."
      ],
      "optionsAr": [
        "معادلة بيلمان المثلى لدالة القيمة $Q^*(s, a)$ هي $Q^*(s, a) = R(s, a) + \\gamma \\sum P(s'|s, a) \\max_{a'} Q^*(s', a')$، وتشكل دالة انكماشية تتقارب حتماً لنقطة ثابتة وحيدة.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية."
      ],
      "correctAnswer": "The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.",
      "correctAnswerEn": "The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.",
      "correctAnswerAr": "معادلة بيلمان المثلى لدالة القيمة $Q^*(s, a)$ هي $Q^*(s, a) = R(s, a) + \\gamma \\sum P(s'|s, a) \\max_{a'} Q^*(s', a')$، وتشكل دالة انكماشية تتقارب حتماً لنقطة ثابتة وحيدة.",
      "correctIndex": 0,
      "explanationEn": "Analytical Derivation & Properties: The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: معادلة بيلمان المثلى لدالة القيمة $Q^*(s, a)$ هي $Q^*(s, a) = R(s, a) + \\gamma \\sum P(s'|s, a) \\max_{a'} Q^*(s', a')$، وتشكل دالة انكماشية تتقارب حتماً لنقطة ثابتة وحيدة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Markov Decision Processes & Bellman Optimality Equations.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: معادلة بيلمان المثلى لدالة القيمة $Q^*(s, a)$ هي $Q^*(s, a) = R(s, a) + \\gamma \\sum P(s'|s, a) \\max_{a'} Q^*(s', a')$، وتشكل دالة انكماشية تتقارب حتماً لنقطة ثابتة وحيدة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch3_med_17",
      "titleEn": "[MEDIUM] Deep Q-Networks (DQN), Experience Replay & Target Networks - Analysis 17",
      "titleAr": "[مستوى متوسط] شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف - تحليل 17",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Deep Q-Networks (DQN), Experience Replay & Target Networks, what is the precise analytical formulation or operative rule? (Item 17)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 17)",
      "optionsEn": [
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تعالج شبكات DQN عدم استقرار التدريب بتقنيتين: مخزن إعادة التجارب (لأخذ عينات عشوائية غير مترابطة) وشبكة هدف منفصلة $\\theta^-$ تُحدّث دورياً لتثبيت أهداف بيلمان.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.",
      "correctAnswerEn": "DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.",
      "correctAnswerAr": "تعالج شبكات DQN عدم استقرار التدريب بتقنيتين: مخزن إعادة التجارب (لأخذ عينات عشوائية غير مترابطة) وشبكة هدف منفصلة $\\theta^-$ تُحدّث دورياً لتثبيت أهداف بيلمان.",
      "correctIndex": 1,
      "explanationEn": "Analytical Derivation & Properties: DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تعالج شبكات DQN عدم استقرار التدريب بتقنيتين: مخزن إعادة التجارب (لأخذ عينات عشوائية غير مترابطة) وشبكة هدف منفصلة $\\theta^-$ تُحدّث دورياً لتثبيت أهداف بيلمان.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Deep Q-Networks (DQN), Experience Replay & Target Networks.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تعالج شبكات DQN عدم استقرار التدريب بتقنيتين: مخزن إعادة التجارب (لأخذ عينات عشوائية غير مترابطة) وشبكة هدف منفصلة $\\theta^-$ تُحدّث دورياً لتثبيت أهداف بيلمان.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch3_med_18",
      "titleEn": "[MEDIUM] Policy Gradient Methods & Proximal Policy Optimization (PPO) - Analysis 18",
      "titleAr": "[مستوى متوسط] طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO) - تحليل 18",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Policy Gradient Methods & Proximal Policy Optimization (PPO), what is the precise analytical formulation or operative rule? (Item 18)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 18)",
      "optionsEn": [
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation."
      ],
      "optionsAr": [
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تمنع خوارزمية PPO القفزات الكبيرة المزعزعة للاستقرار عبر قص نسبة الاحتمال $r_t(\\theta)$ ضمن المدى $[1-\\epsilon, 1+\\epsilon]$ مضروبة في دالة الميزة التقديرية $\\hat{A}_t$.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي."
      ],
      "correctAnswer": "Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.",
      "correctAnswerEn": "Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.",
      "correctAnswerAr": "تمنع خوارزمية PPO القفزات الكبيرة المزعزعة للاستقرار عبر قص نسبة الاحتمال $r_t(\\theta)$ ضمن المدى $[1-\\epsilon, 1+\\epsilon]$ مضروبة في دالة الميزة التقديرية $\\hat{A}_t$.",
      "correctIndex": 2,
      "explanationEn": "Analytical Derivation & Properties: Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تمنع خوارزمية PPO القفزات الكبيرة المزعزعة للاستقرار عبر قص نسبة الاحتمال $r_t(\\theta)$ ضمن المدى $[1-\\epsilon, 1+\\epsilon]$ مضروبة في دالة الميزة التقديرية $\\hat{A}_t$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Policy Gradient Methods & Proximal Policy Optimization (PPO).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تمنع خوارزمية PPO القفزات الكبيرة المزعزعة للاستقرار عبر قص نسبة الاحتمال $r_t(\\theta)$ ضمن المدى $[1-\\epsilon, 1+\\epsilon]$ مضروبة في دالة الميزة التقديرية $\\hat{A}_t$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch3_med_19",
      "titleEn": "[MEDIUM] Markov Decision Processes & Bellman Optimality Equations - Analysis 19",
      "titleAr": "[مستوى متوسط] عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل - تحليل 19",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Markov Decision Processes & Bellman Optimality Equations, what is the precise analytical formulation or operative rule? (Item 19)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 19)",
      "optionsEn": [
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point."
      ],
      "optionsAr": [
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "معادلة بيلمان المثلى لدالة القيمة $Q^*(s, a)$ هي $Q^*(s, a) = R(s, a) + \\gamma \\sum P(s'|s, a) \\max_{a'} Q^*(s', a')$، وتشكل دالة انكماشية تتقارب حتماً لنقطة ثابتة وحيدة."
      ],
      "correctAnswer": "The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.",
      "correctAnswerEn": "The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.",
      "correctAnswerAr": "معادلة بيلمان المثلى لدالة القيمة $Q^*(s, a)$ هي $Q^*(s, a) = R(s, a) + \\gamma \\sum P(s'|s, a) \\max_{a'} Q^*(s', a')$، وتشكل دالة انكماشية تتقارب حتماً لنقطة ثابتة وحيدة.",
      "correctIndex": 3,
      "explanationEn": "Analytical Derivation & Properties: The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: معادلة بيلمان المثلى لدالة القيمة $Q^*(s, a)$ هي $Q^*(s, a) = R(s, a) + \\gamma \\sum P(s'|s, a) \\max_{a'} Q^*(s', a')$، وتشكل دالة انكماشية تتقارب حتماً لنقطة ثابتة وحيدة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Markov Decision Processes & Bellman Optimality Equations.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: معادلة بيلمان المثلى لدالة القيمة $Q^*(s, a)$ هي $Q^*(s, a) = R(s, a) + \\gamma \\sum P(s'|s, a) \\max_{a'} Q^*(s', a')$، وتشكل دالة انكماشية تتقارب حتماً لنقطة ثابتة وحيدة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch3_med_20",
      "titleEn": "[MEDIUM] Deep Q-Networks (DQN), Experience Replay & Target Networks - Analysis 20",
      "titleAr": "[مستوى متوسط] شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف - تحليل 20",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Deep Q-Networks (DQN), Experience Replay & Target Networks, what is the precise analytical formulation or operative rule? (Item 20)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 20)",
      "optionsEn": [
        "DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.",
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "تعالج شبكات DQN عدم استقرار التدريب بتقنيتين: مخزن إعادة التجارب (لأخذ عينات عشوائية غير مترابطة) وشبكة هدف منفصلة $\\theta^-$ تُحدّث دورياً لتثبيت أهداف بيلمان.",
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.",
      "correctAnswerEn": "DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.",
      "correctAnswerAr": "تعالج شبكات DQN عدم استقرار التدريب بتقنيتين: مخزن إعادة التجارب (لأخذ عينات عشوائية غير مترابطة) وشبكة هدف منفصلة $\\theta^-$ تُحدّث دورياً لتثبيت أهداف بيلمان.",
      "correctIndex": 0,
      "explanationEn": "Analytical Derivation & Properties: DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تعالج شبكات DQN عدم استقرار التدريب بتقنيتين: مخزن إعادة التجارب (لأخذ عينات عشوائية غير مترابطة) وشبكة هدف منفصلة $\\theta^-$ تُحدّث دورياً لتثبيت أهداف بيلمان.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Deep Q-Networks (DQN), Experience Replay & Target Networks.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تعالج شبكات DQN عدم استقرار التدريب بتقنيتين: مخزن إعادة التجارب (لأخذ عينات عشوائية غير مترابطة) وشبكة هدف منفصلة $\\theta^-$ تُحدّث دورياً لتثبيت أهداف بيلمان.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch3_med_21",
      "titleEn": "[MEDIUM] Policy Gradient Methods & Proximal Policy Optimization (PPO) - Analysis 21",
      "titleAr": "[مستوى متوسط] طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO) - تحليل 21",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Policy Gradient Methods & Proximal Policy Optimization (PPO), what is the precise analytical formulation or operative rule? (Item 21)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 21)",
      "optionsEn": [
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.",
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step."
      ],
      "optionsAr": [
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تمنع خوارزمية PPO القفزات الكبيرة المزعزعة للاستقرار عبر قص نسبة الاحتمال $r_t(\\theta)$ ضمن المدى $[1-\\epsilon, 1+\\epsilon]$ مضروبة في دالة الميزة التقديرية $\\hat{A}_t$.",
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين."
      ],
      "correctAnswer": "Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.",
      "correctAnswerEn": "Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.",
      "correctAnswerAr": "تمنع خوارزمية PPO القفزات الكبيرة المزعزعة للاستقرار عبر قص نسبة الاحتمال $r_t(\\theta)$ ضمن المدى $[1-\\epsilon, 1+\\epsilon]$ مضروبة في دالة الميزة التقديرية $\\hat{A}_t$.",
      "correctIndex": 1,
      "explanationEn": "Analytical Derivation & Properties: Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تمنع خوارزمية PPO القفزات الكبيرة المزعزعة للاستقرار عبر قص نسبة الاحتمال $r_t(\\theta)$ ضمن المدى $[1-\\epsilon, 1+\\epsilon]$ مضروبة في دالة الميزة التقديرية $\\hat{A}_t$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Policy Gradient Methods & Proximal Policy Optimization (PPO).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تمنع خوارزمية PPO القفزات الكبيرة المزعزعة للاستقرار عبر قص نسبة الاحتمال $r_t(\\theta)$ ضمن المدى $[1-\\epsilon, 1+\\epsilon]$ مضروبة في دالة الميزة التقديرية $\\hat{A}_t$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch3_med_22",
      "titleEn": "[MEDIUM] Markov Decision Processes & Bellman Optimality Equations - Analysis 22",
      "titleAr": "[مستوى متوسط] عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل - تحليل 22",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Markov Decision Processes & Bellman Optimality Equations, what is the precise analytical formulation or operative rule? (Item 22)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 22)",
      "optionsEn": [
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.",
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance."
      ],
      "optionsAr": [
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "معادلة بيلمان المثلى لدالة القيمة $Q^*(s, a)$ هي $Q^*(s, a) = R(s, a) + \\gamma \\sum P(s'|s, a) \\max_{a'} Q^*(s', a')$، وتشكل دالة انكماشية تتقارب حتماً لنقطة ثابتة وحيدة.",
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر."
      ],
      "correctAnswer": "The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.",
      "correctAnswerEn": "The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.",
      "correctAnswerAr": "معادلة بيلمان المثلى لدالة القيمة $Q^*(s, a)$ هي $Q^*(s, a) = R(s, a) + \\gamma \\sum P(s'|s, a) \\max_{a'} Q^*(s', a')$، وتشكل دالة انكماشية تتقارب حتماً لنقطة ثابتة وحيدة.",
      "correctIndex": 2,
      "explanationEn": "Analytical Derivation & Properties: The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: معادلة بيلمان المثلى لدالة القيمة $Q^*(s, a)$ هي $Q^*(s, a) = R(s, a) + \\gamma \\sum P(s'|s, a) \\max_{a'} Q^*(s', a')$، وتشكل دالة انكماشية تتقارب حتماً لنقطة ثابتة وحيدة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Markov Decision Processes & Bellman Optimality Equations.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: معادلة بيلمان المثلى لدالة القيمة $Q^*(s, a)$ هي $Q^*(s, a) = R(s, a) + \\gamma \\sum P(s'|s, a) \\max_{a'} Q^*(s', a')$، وتشكل دالة انكماشية تتقارب حتماً لنقطة ثابتة وحيدة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch3_med_23",
      "titleEn": "[MEDIUM] Deep Q-Networks (DQN), Experience Replay & Target Networks - Analysis 23",
      "titleAr": "[مستوى متوسط] شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف - تحليل 23",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Deep Q-Networks (DQN), Experience Replay & Target Networks, what is the precise analytical formulation or operative rule? (Item 23)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 23)",
      "optionsEn": [
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$."
      ],
      "optionsAr": [
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تعالج شبكات DQN عدم استقرار التدريب بتقنيتين: مخزن إعادة التجارب (لأخذ عينات عشوائية غير مترابطة) وشبكة هدف منفصلة $\\theta^-$ تُحدّث دورياً لتثبيت أهداف بيلمان."
      ],
      "correctAnswer": "DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.",
      "correctAnswerEn": "DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.",
      "correctAnswerAr": "تعالج شبكات DQN عدم استقرار التدريب بتقنيتين: مخزن إعادة التجارب (لأخذ عينات عشوائية غير مترابطة) وشبكة هدف منفصلة $\\theta^-$ تُحدّث دورياً لتثبيت أهداف بيلمان.",
      "correctIndex": 3,
      "explanationEn": "Analytical Derivation & Properties: DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تعالج شبكات DQN عدم استقرار التدريب بتقنيتين: مخزن إعادة التجارب (لأخذ عينات عشوائية غير مترابطة) وشبكة هدف منفصلة $\\theta^-$ تُحدّث دورياً لتثبيت أهداف بيلمان.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Deep Q-Networks (DQN), Experience Replay & Target Networks.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تعالج شبكات DQN عدم استقرار التدريب بتقنيتين: مخزن إعادة التجارب (لأخذ عينات عشوائية غير مترابطة) وشبكة هدف منفصلة $\\theta^-$ تُحدّث دورياً لتثبيت أهداف بيلمان.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch3_med_24",
      "titleEn": "[MEDIUM] Policy Gradient Methods & Proximal Policy Optimization (PPO) - Analysis 24",
      "titleAr": "[مستوى متوسط] طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO) - تحليل 24",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Policy Gradient Methods & Proximal Policy Optimization (PPO), what is the precise analytical formulation or operative rule? (Item 24)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 24)",
      "optionsEn": [
        "Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs."
      ],
      "optionsAr": [
        "تمنع خوارزمية PPO القفزات الكبيرة المزعزعة للاستقرار عبر قص نسبة الاحتمال $r_t(\\theta)$ ضمن المدى $[1-\\epsilon, 1+\\epsilon]$ مضروبة في دالة الميزة التقديرية $\\hat{A}_t$.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة."
      ],
      "correctAnswer": "Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.",
      "correctAnswerEn": "Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.",
      "correctAnswerAr": "تمنع خوارزمية PPO القفزات الكبيرة المزعزعة للاستقرار عبر قص نسبة الاحتمال $r_t(\\theta)$ ضمن المدى $[1-\\epsilon, 1+\\epsilon]$ مضروبة في دالة الميزة التقديرية $\\hat{A}_t$.",
      "correctIndex": 0,
      "explanationEn": "Analytical Derivation & Properties: Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تمنع خوارزمية PPO القفزات الكبيرة المزعزعة للاستقرار عبر قص نسبة الاحتمال $r_t(\\theta)$ ضمن المدى $[1-\\epsilon, 1+\\epsilon]$ مضروبة في دالة الميزة التقديرية $\\hat{A}_t$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Policy Gradient Methods & Proximal Policy Optimization (PPO).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تمنع خوارزمية PPO القفزات الكبيرة المزعزعة للاستقرار عبر قص نسبة الاحتمال $r_t(\\theta)$ ضمن المدى $[1-\\epsilon, 1+\\epsilon]$ مضروبة في دالة الميزة التقديرية $\\hat{A}_t$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch3_med_25",
      "titleEn": "[MEDIUM] Markov Decision Processes & Bellman Optimality Equations - Analysis 25",
      "titleAr": "[مستوى متوسط] عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل - تحليل 25",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Markov Decision Processes & Bellman Optimality Equations, what is the precise analytical formulation or operative rule? (Item 25)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 25)",
      "optionsEn": [
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence."
      ],
      "optionsAr": [
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "معادلة بيلمان المثلى لدالة القيمة $Q^*(s, a)$ هي $Q^*(s, a) = R(s, a) + \\gamma \\sum P(s'|s, a) \\max_{a'} Q^*(s', a')$، وتشكل دالة انكماشية تتقارب حتماً لنقطة ثابتة وحيدة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية."
      ],
      "correctAnswer": "The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.",
      "correctAnswerEn": "The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.",
      "correctAnswerAr": "معادلة بيلمان المثلى لدالة القيمة $Q^*(s, a)$ هي $Q^*(s, a) = R(s, a) + \\gamma \\sum P(s'|s, a) \\max_{a'} Q^*(s', a')$، وتشكل دالة انكماشية تتقارب حتماً لنقطة ثابتة وحيدة.",
      "correctIndex": 1,
      "explanationEn": "Analytical Derivation & Properties: The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: معادلة بيلمان المثلى لدالة القيمة $Q^*(s, a)$ هي $Q^*(s, a) = R(s, a) + \\gamma \\sum P(s'|s, a) \\max_{a'} Q^*(s', a')$، وتشكل دالة انكماشية تتقارب حتماً لنقطة ثابتة وحيدة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Markov Decision Processes & Bellman Optimality Equations.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: معادلة بيلمان المثلى لدالة القيمة $Q^*(s, a)$ هي $Q^*(s, a) = R(s, a) + \\gamma \\sum P(s'|s, a) \\max_{a'} Q^*(s', a')$، وتشكل دالة انكماشية تتقارب حتماً لنقطة ثابتة وحيدة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch3_med_26",
      "titleEn": "[MEDIUM] Deep Q-Networks (DQN), Experience Replay & Target Networks - Analysis 26",
      "titleAr": "[مستوى متوسط] شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف - تحليل 26",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Deep Q-Networks (DQN), Experience Replay & Target Networks, what is the precise analytical formulation or operative rule? (Item 26)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 26)",
      "optionsEn": [
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تعالج شبكات DQN عدم استقرار التدريب بتقنيتين: مخزن إعادة التجارب (لأخذ عينات عشوائية غير مترابطة) وشبكة هدف منفصلة $\\theta^-$ تُحدّث دورياً لتثبيت أهداف بيلمان.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.",
      "correctAnswerEn": "DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.",
      "correctAnswerAr": "تعالج شبكات DQN عدم استقرار التدريب بتقنيتين: مخزن إعادة التجارب (لأخذ عينات عشوائية غير مترابطة) وشبكة هدف منفصلة $\\theta^-$ تُحدّث دورياً لتثبيت أهداف بيلمان.",
      "correctIndex": 2,
      "explanationEn": "Analytical Derivation & Properties: DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تعالج شبكات DQN عدم استقرار التدريب بتقنيتين: مخزن إعادة التجارب (لأخذ عينات عشوائية غير مترابطة) وشبكة هدف منفصلة $\\theta^-$ تُحدّث دورياً لتثبيت أهداف بيلمان.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Deep Q-Networks (DQN), Experience Replay & Target Networks.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تعالج شبكات DQN عدم استقرار التدريب بتقنيتين: مخزن إعادة التجارب (لأخذ عينات عشوائية غير مترابطة) وشبكة هدف منفصلة $\\theta^-$ تُحدّث دورياً لتثبيت أهداف بيلمان.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch3_med_27",
      "titleEn": "[MEDIUM] Policy Gradient Methods & Proximal Policy Optimization (PPO) - Analysis 27",
      "titleAr": "[مستوى متوسط] طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO) - تحليل 27",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Policy Gradient Methods & Proximal Policy Optimization (PPO), what is the precise analytical formulation or operative rule? (Item 27)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 27)",
      "optionsEn": [
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$."
      ],
      "optionsAr": [
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع خوارزمية PPO القفزات الكبيرة المزعزعة للاستقرار عبر قص نسبة الاحتمال $r_t(\\theta)$ ضمن المدى $[1-\\epsilon, 1+\\epsilon]$ مضروبة في دالة الميزة التقديرية $\\hat{A}_t$."
      ],
      "correctAnswer": "Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.",
      "correctAnswerEn": "Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.",
      "correctAnswerAr": "تمنع خوارزمية PPO القفزات الكبيرة المزعزعة للاستقرار عبر قص نسبة الاحتمال $r_t(\\theta)$ ضمن المدى $[1-\\epsilon, 1+\\epsilon]$ مضروبة في دالة الميزة التقديرية $\\hat{A}_t$.",
      "correctIndex": 3,
      "explanationEn": "Analytical Derivation & Properties: Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تمنع خوارزمية PPO القفزات الكبيرة المزعزعة للاستقرار عبر قص نسبة الاحتمال $r_t(\\theta)$ ضمن المدى $[1-\\epsilon, 1+\\epsilon]$ مضروبة في دالة الميزة التقديرية $\\hat{A}_t$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Policy Gradient Methods & Proximal Policy Optimization (PPO).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تمنع خوارزمية PPO القفزات الكبيرة المزعزعة للاستقرار عبر قص نسبة الاحتمال $r_t(\\theta)$ ضمن المدى $[1-\\epsilon, 1+\\epsilon]$ مضروبة في دالة الميزة التقديرية $\\hat{A}_t$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch3_med_28",
      "titleEn": "[MEDIUM] Markov Decision Processes & Bellman Optimality Equations - Analysis 28",
      "titleAr": "[مستوى متوسط] عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل - تحليل 28",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Markov Decision Processes & Bellman Optimality Equations, what is the precise analytical formulation or operative rule? (Item 28)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 28)",
      "optionsEn": [
        "The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan."
      ],
      "optionsAr": [
        "معادلة بيلمان المثلى لدالة القيمة $Q^*(s, a)$ هي $Q^*(s, a) = R(s, a) + \\gamma \\sum P(s'|s, a) \\max_{a'} Q^*(s', a')$، وتشكل دالة انكماشية تتقارب حتماً لنقطة ثابتة وحيدة.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG)."
      ],
      "correctAnswer": "The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.",
      "correctAnswerEn": "The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.",
      "correctAnswerAr": "معادلة بيلمان المثلى لدالة القيمة $Q^*(s, a)$ هي $Q^*(s, a) = R(s, a) + \\gamma \\sum P(s'|s, a) \\max_{a'} Q^*(s', a')$، وتشكل دالة انكماشية تتقارب حتماً لنقطة ثابتة وحيدة.",
      "correctIndex": 0,
      "explanationEn": "Analytical Derivation & Properties: The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: معادلة بيلمان المثلى لدالة القيمة $Q^*(s, a)$ هي $Q^*(s, a) = R(s, a) + \\gamma \\sum P(s'|s, a) \\max_{a'} Q^*(s', a')$، وتشكل دالة انكماشية تتقارب حتماً لنقطة ثابتة وحيدة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Markov Decision Processes & Bellman Optimality Equations.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: معادلة بيلمان المثلى لدالة القيمة $Q^*(s, a)$ هي $Q^*(s, a) = R(s, a) + \\gamma \\sum P(s'|s, a) \\max_{a'} Q^*(s', a')$، وتشكل دالة انكماشية تتقارب حتماً لنقطة ثابتة وحيدة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch3_med_29",
      "titleEn": "[MEDIUM] Deep Q-Networks (DQN), Experience Replay & Target Networks - Analysis 29",
      "titleAr": "[مستوى متوسط] شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف - تحليل 29",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Deep Q-Networks (DQN), Experience Replay & Target Networks, what is the precise analytical formulation or operative rule? (Item 29)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 29)",
      "optionsEn": [
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تعالج شبكات DQN عدم استقرار التدريب بتقنيتين: مخزن إعادة التجارب (لأخذ عينات عشوائية غير مترابطة) وشبكة هدف منفصلة $\\theta^-$ تُحدّث دورياً لتثبيت أهداف بيلمان.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.",
      "correctAnswerEn": "DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.",
      "correctAnswerAr": "تعالج شبكات DQN عدم استقرار التدريب بتقنيتين: مخزن إعادة التجارب (لأخذ عينات عشوائية غير مترابطة) وشبكة هدف منفصلة $\\theta^-$ تُحدّث دورياً لتثبيت أهداف بيلمان.",
      "correctIndex": 1,
      "explanationEn": "Analytical Derivation & Properties: DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تعالج شبكات DQN عدم استقرار التدريب بتقنيتين: مخزن إعادة التجارب (لأخذ عينات عشوائية غير مترابطة) وشبكة هدف منفصلة $\\theta^-$ تُحدّث دورياً لتثبيت أهداف بيلمان.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Deep Q-Networks (DQN), Experience Replay & Target Networks.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تعالج شبكات DQN عدم استقرار التدريب بتقنيتين: مخزن إعادة التجارب (لأخذ عينات عشوائية غير مترابطة) وشبكة هدف منفصلة $\\theta^-$ تُحدّث دورياً لتثبيت أهداف بيلمان.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch3_med_30",
      "titleEn": "[MEDIUM] Policy Gradient Methods & Proximal Policy Optimization (PPO) - Analysis 30",
      "titleAr": "[مستوى متوسط] طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO) - تحليل 30",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Policy Gradient Methods & Proximal Policy Optimization (PPO), what is the precise analytical formulation or operative rule? (Item 30)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 30)",
      "optionsEn": [
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate."
      ],
      "optionsAr": [
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "تمنع خوارزمية PPO القفزات الكبيرة المزعزعة للاستقرار عبر قص نسبة الاحتمال $r_t(\\theta)$ ضمن المدى $[1-\\epsilon, 1+\\epsilon]$ مضروبة في دالة الميزة التقديرية $\\hat{A}_t$.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم."
      ],
      "correctAnswer": "Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.",
      "correctAnswerEn": "Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.",
      "correctAnswerAr": "تمنع خوارزمية PPO القفزات الكبيرة المزعزعة للاستقرار عبر قص نسبة الاحتمال $r_t(\\theta)$ ضمن المدى $[1-\\epsilon, 1+\\epsilon]$ مضروبة في دالة الميزة التقديرية $\\hat{A}_t$.",
      "correctIndex": 2,
      "explanationEn": "Analytical Derivation & Properties: Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تمنع خوارزمية PPO القفزات الكبيرة المزعزعة للاستقرار عبر قص نسبة الاحتمال $r_t(\\theta)$ ضمن المدى $[1-\\epsilon, 1+\\epsilon]$ مضروبة في دالة الميزة التقديرية $\\hat{A}_t$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Policy Gradient Methods & Proximal Policy Optimization (PPO).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تمنع خوارزمية PPO القفزات الكبيرة المزعزعة للاستقرار عبر قص نسبة الاحتمال $r_t(\\theta)$ ضمن المدى $[1-\\epsilon, 1+\\epsilon]$ مضروبة في دالة الميزة التقديرية $\\hat{A}_t$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch3_med_31",
      "titleEn": "[MEDIUM] Markov Decision Processes & Bellman Optimality Equations - Analysis 31",
      "titleAr": "[مستوى متوسط] عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل - تحليل 31",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Markov Decision Processes & Bellman Optimality Equations, what is the precise analytical formulation or operative rule? (Item 31)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 31)",
      "optionsEn": [
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point."
      ],
      "optionsAr": [
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "معادلة بيلمان المثلى لدالة القيمة $Q^*(s, a)$ هي $Q^*(s, a) = R(s, a) + \\gamma \\sum P(s'|s, a) \\max_{a'} Q^*(s', a')$، وتشكل دالة انكماشية تتقارب حتماً لنقطة ثابتة وحيدة."
      ],
      "correctAnswer": "The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.",
      "correctAnswerEn": "The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.",
      "correctAnswerAr": "معادلة بيلمان المثلى لدالة القيمة $Q^*(s, a)$ هي $Q^*(s, a) = R(s, a) + \\gamma \\sum P(s'|s, a) \\max_{a'} Q^*(s', a')$، وتشكل دالة انكماشية تتقارب حتماً لنقطة ثابتة وحيدة.",
      "correctIndex": 3,
      "explanationEn": "Analytical Derivation & Properties: The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: معادلة بيلمان المثلى لدالة القيمة $Q^*(s, a)$ هي $Q^*(s, a) = R(s, a) + \\gamma \\sum P(s'|s, a) \\max_{a'} Q^*(s', a')$، وتشكل دالة انكماشية تتقارب حتماً لنقطة ثابتة وحيدة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Markov Decision Processes & Bellman Optimality Equations.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: معادلة بيلمان المثلى لدالة القيمة $Q^*(s, a)$ هي $Q^*(s, a) = R(s, a) + \\gamma \\sum P(s'|s, a) \\max_{a'} Q^*(s', a')$، وتشكل دالة انكماشية تتقارب حتماً لنقطة ثابتة وحيدة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch3_med_32",
      "titleEn": "[MEDIUM] Deep Q-Networks (DQN), Experience Replay & Target Networks - Analysis 32",
      "titleAr": "[مستوى متوسط] شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف - تحليل 32",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Deep Q-Networks (DQN), Experience Replay & Target Networks, what is the precise analytical formulation or operative rule? (Item 32)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 32)",
      "optionsEn": [
        "DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.",
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "تعالج شبكات DQN عدم استقرار التدريب بتقنيتين: مخزن إعادة التجارب (لأخذ عينات عشوائية غير مترابطة) وشبكة هدف منفصلة $\\theta^-$ تُحدّث دورياً لتثبيت أهداف بيلمان.",
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.",
      "correctAnswerEn": "DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.",
      "correctAnswerAr": "تعالج شبكات DQN عدم استقرار التدريب بتقنيتين: مخزن إعادة التجارب (لأخذ عينات عشوائية غير مترابطة) وشبكة هدف منفصلة $\\theta^-$ تُحدّث دورياً لتثبيت أهداف بيلمان.",
      "correctIndex": 0,
      "explanationEn": "Analytical Derivation & Properties: DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تعالج شبكات DQN عدم استقرار التدريب بتقنيتين: مخزن إعادة التجارب (لأخذ عينات عشوائية غير مترابطة) وشبكة هدف منفصلة $\\theta^-$ تُحدّث دورياً لتثبيت أهداف بيلمان.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Deep Q-Networks (DQN), Experience Replay & Target Networks.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تعالج شبكات DQN عدم استقرار التدريب بتقنيتين: مخزن إعادة التجارب (لأخذ عينات عشوائية غير مترابطة) وشبكة هدف منفصلة $\\theta^-$ تُحدّث دورياً لتثبيت أهداف بيلمان.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch3_med_33",
      "titleEn": "[MEDIUM] Policy Gradient Methods & Proximal Policy Optimization (PPO) - Analysis 33",
      "titleAr": "[مستوى متوسط] طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO) - تحليل 33",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Policy Gradient Methods & Proximal Policy Optimization (PPO), what is the precise analytical formulation or operative rule? (Item 33)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 33)",
      "optionsEn": [
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.",
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation."
      ],
      "optionsAr": [
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "تمنع خوارزمية PPO القفزات الكبيرة المزعزعة للاستقرار عبر قص نسبة الاحتمال $r_t(\\theta)$ ضمن المدى $[1-\\epsilon, 1+\\epsilon]$ مضروبة في دالة الميزة التقديرية $\\hat{A}_t$.",
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي."
      ],
      "correctAnswer": "Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.",
      "correctAnswerEn": "Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.",
      "correctAnswerAr": "تمنع خوارزمية PPO القفزات الكبيرة المزعزعة للاستقرار عبر قص نسبة الاحتمال $r_t(\\theta)$ ضمن المدى $[1-\\epsilon, 1+\\epsilon]$ مضروبة في دالة الميزة التقديرية $\\hat{A}_t$.",
      "correctIndex": 1,
      "explanationEn": "Analytical Derivation & Properties: Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تمنع خوارزمية PPO القفزات الكبيرة المزعزعة للاستقرار عبر قص نسبة الاحتمال $r_t(\\theta)$ ضمن المدى $[1-\\epsilon, 1+\\epsilon]$ مضروبة في دالة الميزة التقديرية $\\hat{A}_t$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Policy Gradient Methods & Proximal Policy Optimization (PPO).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تمنع خوارزمية PPO القفزات الكبيرة المزعزعة للاستقرار عبر قص نسبة الاحتمال $r_t(\\theta)$ ضمن المدى $[1-\\epsilon, 1+\\epsilon]$ مضروبة في دالة الميزة التقديرية $\\hat{A}_t$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch3_med_34",
      "titleEn": "[MEDIUM] Markov Decision Processes & Bellman Optimality Equations - Analysis 34",
      "titleAr": "[مستوى متوسط] عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل - تحليل 34",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Markov Decision Processes & Bellman Optimality Equations, what is the precise analytical formulation or operative rule? (Item 34)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 34)",
      "optionsEn": [
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.",
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent."
      ],
      "optionsAr": [
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "معادلة بيلمان المثلى لدالة القيمة $Q^*(s, a)$ هي $Q^*(s, a) = R(s, a) + \\gamma \\sum P(s'|s, a) \\max_{a'} Q^*(s', a')$، وتشكل دالة انكماشية تتقارب حتماً لنقطة ثابتة وحيدة.",
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة."
      ],
      "correctAnswer": "The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.",
      "correctAnswerEn": "The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.",
      "correctAnswerAr": "معادلة بيلمان المثلى لدالة القيمة $Q^*(s, a)$ هي $Q^*(s, a) = R(s, a) + \\gamma \\sum P(s'|s, a) \\max_{a'} Q^*(s', a')$، وتشكل دالة انكماشية تتقارب حتماً لنقطة ثابتة وحيدة.",
      "correctIndex": 2,
      "explanationEn": "Analytical Derivation & Properties: The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: معادلة بيلمان المثلى لدالة القيمة $Q^*(s, a)$ هي $Q^*(s, a) = R(s, a) + \\gamma \\sum P(s'|s, a) \\max_{a'} Q^*(s', a')$، وتشكل دالة انكماشية تتقارب حتماً لنقطة ثابتة وحيدة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Markov Decision Processes & Bellman Optimality Equations.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: معادلة بيلمان المثلى لدالة القيمة $Q^*(s, a)$ هي $Q^*(s, a) = R(s, a) + \\gamma \\sum P(s'|s, a) \\max_{a'} Q^*(s', a')$، وتشكل دالة انكماشية تتقارب حتماً لنقطة ثابتة وحيدة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch3_med_35",
      "titleEn": "[MEDIUM] Deep Q-Networks (DQN), Experience Replay & Target Networks - Analysis 35",
      "titleAr": "[مستوى متوسط] شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف - تحليل 35",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Deep Q-Networks (DQN), Experience Replay & Target Networks, what is the precise analytical formulation or operative rule? (Item 35)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 35)",
      "optionsEn": [
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$."
      ],
      "optionsAr": [
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تعالج شبكات DQN عدم استقرار التدريب بتقنيتين: مخزن إعادة التجارب (لأخذ عينات عشوائية غير مترابطة) وشبكة هدف منفصلة $\\theta^-$ تُحدّث دورياً لتثبيت أهداف بيلمان."
      ],
      "correctAnswer": "DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.",
      "correctAnswerEn": "DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.",
      "correctAnswerAr": "تعالج شبكات DQN عدم استقرار التدريب بتقنيتين: مخزن إعادة التجارب (لأخذ عينات عشوائية غير مترابطة) وشبكة هدف منفصلة $\\theta^-$ تُحدّث دورياً لتثبيت أهداف بيلمان.",
      "correctIndex": 3,
      "explanationEn": "Analytical Derivation & Properties: DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تعالج شبكات DQN عدم استقرار التدريب بتقنيتين: مخزن إعادة التجارب (لأخذ عينات عشوائية غير مترابطة) وشبكة هدف منفصلة $\\theta^-$ تُحدّث دورياً لتثبيت أهداف بيلمان.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Deep Q-Networks (DQN), Experience Replay & Target Networks.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تعالج شبكات DQN عدم استقرار التدريب بتقنيتين: مخزن إعادة التجارب (لأخذ عينات عشوائية غير مترابطة) وشبكة هدف منفصلة $\\theta^-$ تُحدّث دورياً لتثبيت أهداف بيلمان.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch3_med_36",
      "titleEn": "[MEDIUM] Policy Gradient Methods & Proximal Policy Optimization (PPO) - Analysis 36",
      "titleAr": "[مستوى متوسط] طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO) - تحليل 36",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Policy Gradient Methods & Proximal Policy Optimization (PPO), what is the precise analytical formulation or operative rule? (Item 36)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 36)",
      "optionsEn": [
        "Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step."
      ],
      "optionsAr": [
        "تمنع خوارزمية PPO القفزات الكبيرة المزعزعة للاستقرار عبر قص نسبة الاحتمال $r_t(\\theta)$ ضمن المدى $[1-\\epsilon, 1+\\epsilon]$ مضروبة في دالة الميزة التقديرية $\\hat{A}_t$.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين."
      ],
      "correctAnswer": "Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.",
      "correctAnswerEn": "Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.",
      "correctAnswerAr": "تمنع خوارزمية PPO القفزات الكبيرة المزعزعة للاستقرار عبر قص نسبة الاحتمال $r_t(\\theta)$ ضمن المدى $[1-\\epsilon, 1+\\epsilon]$ مضروبة في دالة الميزة التقديرية $\\hat{A}_t$.",
      "correctIndex": 0,
      "explanationEn": "Analytical Derivation & Properties: Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تمنع خوارزمية PPO القفزات الكبيرة المزعزعة للاستقرار عبر قص نسبة الاحتمال $r_t(\\theta)$ ضمن المدى $[1-\\epsilon, 1+\\epsilon]$ مضروبة في دالة الميزة التقديرية $\\hat{A}_t$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Policy Gradient Methods & Proximal Policy Optimization (PPO).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تمنع خوارزمية PPO القفزات الكبيرة المزعزعة للاستقرار عبر قص نسبة الاحتمال $r_t(\\theta)$ ضمن المدى $[1-\\epsilon, 1+\\epsilon]$ مضروبة في دالة الميزة التقديرية $\\hat{A}_t$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch3_med_37",
      "titleEn": "[MEDIUM] Markov Decision Processes & Bellman Optimality Equations - Analysis 37",
      "titleAr": "[مستوى متوسط] عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل - تحليل 37",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Markov Decision Processes & Bellman Optimality Equations, what is the precise analytical formulation or operative rule? (Item 37)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 37)",
      "optionsEn": [
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance."
      ],
      "optionsAr": [
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "معادلة بيلمان المثلى لدالة القيمة $Q^*(s, a)$ هي $Q^*(s, a) = R(s, a) + \\gamma \\sum P(s'|s, a) \\max_{a'} Q^*(s', a')$، وتشكل دالة انكماشية تتقارب حتماً لنقطة ثابتة وحيدة.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر."
      ],
      "correctAnswer": "The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.",
      "correctAnswerEn": "The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.",
      "correctAnswerAr": "معادلة بيلمان المثلى لدالة القيمة $Q^*(s, a)$ هي $Q^*(s, a) = R(s, a) + \\gamma \\sum P(s'|s, a) \\max_{a'} Q^*(s', a')$، وتشكل دالة انكماشية تتقارب حتماً لنقطة ثابتة وحيدة.",
      "correctIndex": 1,
      "explanationEn": "Analytical Derivation & Properties: The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: معادلة بيلمان المثلى لدالة القيمة $Q^*(s, a)$ هي $Q^*(s, a) = R(s, a) + \\gamma \\sum P(s'|s, a) \\max_{a'} Q^*(s', a')$، وتشكل دالة انكماشية تتقارب حتماً لنقطة ثابتة وحيدة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Markov Decision Processes & Bellman Optimality Equations.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: معادلة بيلمان المثلى لدالة القيمة $Q^*(s, a)$ هي $Q^*(s, a) = R(s, a) + \\gamma \\sum P(s'|s, a) \\max_{a'} Q^*(s', a')$، وتشكل دالة انكماشية تتقارب حتماً لنقطة ثابتة وحيدة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch3_med_38",
      "titleEn": "[MEDIUM] Deep Q-Networks (DQN), Experience Replay & Target Networks - Analysis 38",
      "titleAr": "[مستوى متوسط] شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف - تحليل 38",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Deep Q-Networks (DQN), Experience Replay & Target Networks, what is the precise analytical formulation or operative rule? (Item 38)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 38)",
      "optionsEn": [
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "تعالج شبكات DQN عدم استقرار التدريب بتقنيتين: مخزن إعادة التجارب (لأخذ عينات عشوائية غير مترابطة) وشبكة هدف منفصلة $\\theta^-$ تُحدّث دورياً لتثبيت أهداف بيلمان.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.",
      "correctAnswerEn": "DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.",
      "correctAnswerAr": "تعالج شبكات DQN عدم استقرار التدريب بتقنيتين: مخزن إعادة التجارب (لأخذ عينات عشوائية غير مترابطة) وشبكة هدف منفصلة $\\theta^-$ تُحدّث دورياً لتثبيت أهداف بيلمان.",
      "correctIndex": 2,
      "explanationEn": "Analytical Derivation & Properties: DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تعالج شبكات DQN عدم استقرار التدريب بتقنيتين: مخزن إعادة التجارب (لأخذ عينات عشوائية غير مترابطة) وشبكة هدف منفصلة $\\theta^-$ تُحدّث دورياً لتثبيت أهداف بيلمان.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Deep Q-Networks (DQN), Experience Replay & Target Networks.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تعالج شبكات DQN عدم استقرار التدريب بتقنيتين: مخزن إعادة التجارب (لأخذ عينات عشوائية غير مترابطة) وشبكة هدف منفصلة $\\theta^-$ تُحدّث دورياً لتثبيت أهداف بيلمان.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch3_med_39",
      "titleEn": "[MEDIUM] Policy Gradient Methods & Proximal Policy Optimization (PPO) - Analysis 39",
      "titleAr": "[مستوى متوسط] طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO) - تحليل 39",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Policy Gradient Methods & Proximal Policy Optimization (PPO), what is the precise analytical formulation or operative rule? (Item 39)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 39)",
      "optionsEn": [
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$."
      ],
      "optionsAr": [
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تمنع خوارزمية PPO القفزات الكبيرة المزعزعة للاستقرار عبر قص نسبة الاحتمال $r_t(\\theta)$ ضمن المدى $[1-\\epsilon, 1+\\epsilon]$ مضروبة في دالة الميزة التقديرية $\\hat{A}_t$."
      ],
      "correctAnswer": "Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.",
      "correctAnswerEn": "Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.",
      "correctAnswerAr": "تمنع خوارزمية PPO القفزات الكبيرة المزعزعة للاستقرار عبر قص نسبة الاحتمال $r_t(\\theta)$ ضمن المدى $[1-\\epsilon, 1+\\epsilon]$ مضروبة في دالة الميزة التقديرية $\\hat{A}_t$.",
      "correctIndex": 3,
      "explanationEn": "Analytical Derivation & Properties: Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تمنع خوارزمية PPO القفزات الكبيرة المزعزعة للاستقرار عبر قص نسبة الاحتمال $r_t(\\theta)$ ضمن المدى $[1-\\epsilon, 1+\\epsilon]$ مضروبة في دالة الميزة التقديرية $\\hat{A}_t$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Policy Gradient Methods & Proximal Policy Optimization (PPO).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تمنع خوارزمية PPO القفزات الكبيرة المزعزعة للاستقرار عبر قص نسبة الاحتمال $r_t(\\theta)$ ضمن المدى $[1-\\epsilon, 1+\\epsilon]$ مضروبة في دالة الميزة التقديرية $\\hat{A}_t$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch3_med_40",
      "titleEn": "[MEDIUM] Markov Decision Processes & Bellman Optimality Equations - Analysis 40",
      "titleAr": "[مستوى متوسط] عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل - تحليل 40",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Markov Decision Processes & Bellman Optimality Equations, what is the precise analytical formulation or operative rule? (Item 40)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 40)",
      "optionsEn": [
        "The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence."
      ],
      "optionsAr": [
        "معادلة بيلمان المثلى لدالة القيمة $Q^*(s, a)$ هي $Q^*(s, a) = R(s, a) + \\gamma \\sum P(s'|s, a) \\max_{a'} Q^*(s', a')$، وتشكل دالة انكماشية تتقارب حتماً لنقطة ثابتة وحيدة.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية."
      ],
      "correctAnswer": "The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.",
      "correctAnswerEn": "The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.",
      "correctAnswerAr": "معادلة بيلمان المثلى لدالة القيمة $Q^*(s, a)$ هي $Q^*(s, a) = R(s, a) + \\gamma \\sum P(s'|s, a) \\max_{a'} Q^*(s', a')$، وتشكل دالة انكماشية تتقارب حتماً لنقطة ثابتة وحيدة.",
      "correctIndex": 0,
      "explanationEn": "Analytical Derivation & Properties: The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: معادلة بيلمان المثلى لدالة القيمة $Q^*(s, a)$ هي $Q^*(s, a) = R(s, a) + \\gamma \\sum P(s'|s, a) \\max_{a'} Q^*(s', a')$، وتشكل دالة انكماشية تتقارب حتماً لنقطة ثابتة وحيدة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Markov Decision Processes & Bellman Optimality Equations.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: معادلة بيلمان المثلى لدالة القيمة $Q^*(s, a)$ هي $Q^*(s, a) = R(s, a) + \\gamma \\sum P(s'|s, a) \\max_{a'} Q^*(s', a')$، وتشكل دالة انكماشية تتقارب حتماً لنقطة ثابتة وحيدة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch3_med_41",
      "titleEn": "[MEDIUM] Deep Q-Networks (DQN), Experience Replay & Target Networks - Analysis 41",
      "titleAr": "[مستوى متوسط] شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف - تحليل 41",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Deep Q-Networks (DQN), Experience Replay & Target Networks, what is the precise analytical formulation or operative rule? (Item 41)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 41)",
      "optionsEn": [
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تعالج شبكات DQN عدم استقرار التدريب بتقنيتين: مخزن إعادة التجارب (لأخذ عينات عشوائية غير مترابطة) وشبكة هدف منفصلة $\\theta^-$ تُحدّث دورياً لتثبيت أهداف بيلمان.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.",
      "correctAnswerEn": "DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.",
      "correctAnswerAr": "تعالج شبكات DQN عدم استقرار التدريب بتقنيتين: مخزن إعادة التجارب (لأخذ عينات عشوائية غير مترابطة) وشبكة هدف منفصلة $\\theta^-$ تُحدّث دورياً لتثبيت أهداف بيلمان.",
      "correctIndex": 1,
      "explanationEn": "Analytical Derivation & Properties: DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تعالج شبكات DQN عدم استقرار التدريب بتقنيتين: مخزن إعادة التجارب (لأخذ عينات عشوائية غير مترابطة) وشبكة هدف منفصلة $\\theta^-$ تُحدّث دورياً لتثبيت أهداف بيلمان.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Deep Q-Networks (DQN), Experience Replay & Target Networks.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تعالج شبكات DQN عدم استقرار التدريب بتقنيتين: مخزن إعادة التجارب (لأخذ عينات عشوائية غير مترابطة) وشبكة هدف منفصلة $\\theta^-$ تُحدّث دورياً لتثبيت أهداف بيلمان.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch3_med_42",
      "titleEn": "[MEDIUM] Policy Gradient Methods & Proximal Policy Optimization (PPO) - Analysis 42",
      "titleAr": "[مستوى متوسط] طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO) - تحليل 42",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Policy Gradient Methods & Proximal Policy Optimization (PPO), what is the precise analytical formulation or operative rule? (Item 42)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 42)",
      "optionsEn": [
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data."
      ],
      "optionsAr": [
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "تمنع خوارزمية PPO القفزات الكبيرة المزعزعة للاستقرار عبر قص نسبة الاحتمال $r_t(\\theta)$ ضمن المدى $[1-\\epsilon, 1+\\epsilon]$ مضروبة في دالة الميزة التقديرية $\\hat{A}_t$.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش."
      ],
      "correctAnswer": "Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.",
      "correctAnswerEn": "Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.",
      "correctAnswerAr": "تمنع خوارزمية PPO القفزات الكبيرة المزعزعة للاستقرار عبر قص نسبة الاحتمال $r_t(\\theta)$ ضمن المدى $[1-\\epsilon, 1+\\epsilon]$ مضروبة في دالة الميزة التقديرية $\\hat{A}_t$.",
      "correctIndex": 2,
      "explanationEn": "Analytical Derivation & Properties: Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تمنع خوارزمية PPO القفزات الكبيرة المزعزعة للاستقرار عبر قص نسبة الاحتمال $r_t(\\theta)$ ضمن المدى $[1-\\epsilon, 1+\\epsilon]$ مضروبة في دالة الميزة التقديرية $\\hat{A}_t$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Policy Gradient Methods & Proximal Policy Optimization (PPO).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تمنع خوارزمية PPO القفزات الكبيرة المزعزعة للاستقرار عبر قص نسبة الاحتمال $r_t(\\theta)$ ضمن المدى $[1-\\epsilon, 1+\\epsilon]$ مضروبة في دالة الميزة التقديرية $\\hat{A}_t$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch3_med_43",
      "titleEn": "[MEDIUM] Markov Decision Processes & Bellman Optimality Equations - Analysis 43",
      "titleAr": "[مستوى متوسط] عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل - تحليل 43",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Markov Decision Processes & Bellman Optimality Equations, what is the precise analytical formulation or operative rule? (Item 43)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 43)",
      "optionsEn": [
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point."
      ],
      "optionsAr": [
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "معادلة بيلمان المثلى لدالة القيمة $Q^*(s, a)$ هي $Q^*(s, a) = R(s, a) + \\gamma \\sum P(s'|s, a) \\max_{a'} Q^*(s', a')$، وتشكل دالة انكماشية تتقارب حتماً لنقطة ثابتة وحيدة."
      ],
      "correctAnswer": "The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.",
      "correctAnswerEn": "The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.",
      "correctAnswerAr": "معادلة بيلمان المثلى لدالة القيمة $Q^*(s, a)$ هي $Q^*(s, a) = R(s, a) + \\gamma \\sum P(s'|s, a) \\max_{a'} Q^*(s', a')$، وتشكل دالة انكماشية تتقارب حتماً لنقطة ثابتة وحيدة.",
      "correctIndex": 3,
      "explanationEn": "Analytical Derivation & Properties: The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: معادلة بيلمان المثلى لدالة القيمة $Q^*(s, a)$ هي $Q^*(s, a) = R(s, a) + \\gamma \\sum P(s'|s, a) \\max_{a'} Q^*(s', a')$، وتشكل دالة انكماشية تتقارب حتماً لنقطة ثابتة وحيدة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Markov Decision Processes & Bellman Optimality Equations.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: معادلة بيلمان المثلى لدالة القيمة $Q^*(s, a)$ هي $Q^*(s, a) = R(s, a) + \\gamma \\sum P(s'|s, a) \\max_{a'} Q^*(s', a')$، وتشكل دالة انكماشية تتقارب حتماً لنقطة ثابتة وحيدة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch3_med_44",
      "titleEn": "[MEDIUM] Deep Q-Networks (DQN), Experience Replay & Target Networks - Analysis 44",
      "titleAr": "[مستوى متوسط] شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف - تحليل 44",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Deep Q-Networks (DQN), Experience Replay & Target Networks, what is the precise analytical formulation or operative rule? (Item 44)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 44)",
      "optionsEn": [
        "DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.",
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تعالج شبكات DQN عدم استقرار التدريب بتقنيتين: مخزن إعادة التجارب (لأخذ عينات عشوائية غير مترابطة) وشبكة هدف منفصلة $\\theta^-$ تُحدّث دورياً لتثبيت أهداف بيلمان.",
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.",
      "correctAnswerEn": "DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.",
      "correctAnswerAr": "تعالج شبكات DQN عدم استقرار التدريب بتقنيتين: مخزن إعادة التجارب (لأخذ عينات عشوائية غير مترابطة) وشبكة هدف منفصلة $\\theta^-$ تُحدّث دورياً لتثبيت أهداف بيلمان.",
      "correctIndex": 0,
      "explanationEn": "Analytical Derivation & Properties: DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تعالج شبكات DQN عدم استقرار التدريب بتقنيتين: مخزن إعادة التجارب (لأخذ عينات عشوائية غير مترابطة) وشبكة هدف منفصلة $\\theta^-$ تُحدّث دورياً لتثبيت أهداف بيلمان.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Deep Q-Networks (DQN), Experience Replay & Target Networks.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تعالج شبكات DQN عدم استقرار التدريب بتقنيتين: مخزن إعادة التجارب (لأخذ عينات عشوائية غير مترابطة) وشبكة هدف منفصلة $\\theta^-$ تُحدّث دورياً لتثبيت أهداف بيلمان.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch3_med_45",
      "titleEn": "[MEDIUM] Policy Gradient Methods & Proximal Policy Optimization (PPO) - Analysis 45",
      "titleAr": "[مستوى متوسط] طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO) - تحليل 45",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Policy Gradient Methods & Proximal Policy Optimization (PPO), what is the precise analytical formulation or operative rule? (Item 45)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 45)",
      "optionsEn": [
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.",
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate."
      ],
      "optionsAr": [
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "تمنع خوارزمية PPO القفزات الكبيرة المزعزعة للاستقرار عبر قص نسبة الاحتمال $r_t(\\theta)$ ضمن المدى $[1-\\epsilon, 1+\\epsilon]$ مضروبة في دالة الميزة التقديرية $\\hat{A}_t$.",
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم."
      ],
      "correctAnswer": "Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.",
      "correctAnswerEn": "Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.",
      "correctAnswerAr": "تمنع خوارزمية PPO القفزات الكبيرة المزعزعة للاستقرار عبر قص نسبة الاحتمال $r_t(\\theta)$ ضمن المدى $[1-\\epsilon, 1+\\epsilon]$ مضروبة في دالة الميزة التقديرية $\\hat{A}_t$.",
      "correctIndex": 1,
      "explanationEn": "Analytical Derivation & Properties: Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تمنع خوارزمية PPO القفزات الكبيرة المزعزعة للاستقرار عبر قص نسبة الاحتمال $r_t(\\theta)$ ضمن المدى $[1-\\epsilon, 1+\\epsilon]$ مضروبة في دالة الميزة التقديرية $\\hat{A}_t$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Policy Gradient Methods & Proximal Policy Optimization (PPO).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تمنع خوارزمية PPO القفزات الكبيرة المزعزعة للاستقرار عبر قص نسبة الاحتمال $r_t(\\theta)$ ضمن المدى $[1-\\epsilon, 1+\\epsilon]$ مضروبة في دالة الميزة التقديرية $\\hat{A}_t$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch3_med_46",
      "titleEn": "[MEDIUM] Markov Decision Processes & Bellman Optimality Equations - Analysis 46",
      "titleAr": "[مستوى متوسط] عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل - تحليل 46",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Markov Decision Processes & Bellman Optimality Equations, what is the precise analytical formulation or operative rule? (Item 46)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 46)",
      "optionsEn": [
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.",
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves."
      ],
      "optionsAr": [
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "معادلة بيلمان المثلى لدالة القيمة $Q^*(s, a)$ هي $Q^*(s, a) = R(s, a) + \\gamma \\sum P(s'|s, a) \\max_{a'} Q^*(s', a')$، وتشكل دالة انكماشية تتقارب حتماً لنقطة ثابتة وحيدة.",
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية."
      ],
      "correctAnswer": "The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.",
      "correctAnswerEn": "The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.",
      "correctAnswerAr": "معادلة بيلمان المثلى لدالة القيمة $Q^*(s, a)$ هي $Q^*(s, a) = R(s, a) + \\gamma \\sum P(s'|s, a) \\max_{a'} Q^*(s', a')$، وتشكل دالة انكماشية تتقارب حتماً لنقطة ثابتة وحيدة.",
      "correctIndex": 2,
      "explanationEn": "Analytical Derivation & Properties: The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: معادلة بيلمان المثلى لدالة القيمة $Q^*(s, a)$ هي $Q^*(s, a) = R(s, a) + \\gamma \\sum P(s'|s, a) \\max_{a'} Q^*(s', a')$، وتشكل دالة انكماشية تتقارب حتماً لنقطة ثابتة وحيدة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Markov Decision Processes & Bellman Optimality Equations.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: معادلة بيلمان المثلى لدالة القيمة $Q^*(s, a)$ هي $Q^*(s, a) = R(s, a) + \\gamma \\sum P(s'|s, a) \\max_{a'} Q^*(s', a')$، وتشكل دالة انكماشية تتقارب حتماً لنقطة ثابتة وحيدة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch3_med_47",
      "titleEn": "[MEDIUM] Deep Q-Networks (DQN), Experience Replay & Target Networks - Analysis 47",
      "titleAr": "[مستوى متوسط] شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف - تحليل 47",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Deep Q-Networks (DQN), Experience Replay & Target Networks, what is the precise analytical formulation or operative rule? (Item 47)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 47)",
      "optionsEn": [
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$."
      ],
      "optionsAr": [
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "تعالج شبكات DQN عدم استقرار التدريب بتقنيتين: مخزن إعادة التجارب (لأخذ عينات عشوائية غير مترابطة) وشبكة هدف منفصلة $\\theta^-$ تُحدّث دورياً لتثبيت أهداف بيلمان."
      ],
      "correctAnswer": "DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.",
      "correctAnswerEn": "DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.",
      "correctAnswerAr": "تعالج شبكات DQN عدم استقرار التدريب بتقنيتين: مخزن إعادة التجارب (لأخذ عينات عشوائية غير مترابطة) وشبكة هدف منفصلة $\\theta^-$ تُحدّث دورياً لتثبيت أهداف بيلمان.",
      "correctIndex": 3,
      "explanationEn": "Analytical Derivation & Properties: DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تعالج شبكات DQN عدم استقرار التدريب بتقنيتين: مخزن إعادة التجارب (لأخذ عينات عشوائية غير مترابطة) وشبكة هدف منفصلة $\\theta^-$ تُحدّث دورياً لتثبيت أهداف بيلمان.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Deep Q-Networks (DQN), Experience Replay & Target Networks.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تعالج شبكات DQN عدم استقرار التدريب بتقنيتين: مخزن إعادة التجارب (لأخذ عينات عشوائية غير مترابطة) وشبكة هدف منفصلة $\\theta^-$ تُحدّث دورياً لتثبيت أهداف بيلمان.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch3_med_48",
      "titleEn": "[MEDIUM] Policy Gradient Methods & Proximal Policy Optimization (PPO) - Analysis 48",
      "titleAr": "[مستوى متوسط] طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO) - تحليل 48",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Policy Gradient Methods & Proximal Policy Optimization (PPO), what is the precise analytical formulation or operative rule? (Item 48)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 48)",
      "optionsEn": [
        "Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation."
      ],
      "optionsAr": [
        "تمنع خوارزمية PPO القفزات الكبيرة المزعزعة للاستقرار عبر قص نسبة الاحتمال $r_t(\\theta)$ ضمن المدى $[1-\\epsilon, 1+\\epsilon]$ مضروبة في دالة الميزة التقديرية $\\hat{A}_t$.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي."
      ],
      "correctAnswer": "Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.",
      "correctAnswerEn": "Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.",
      "correctAnswerAr": "تمنع خوارزمية PPO القفزات الكبيرة المزعزعة للاستقرار عبر قص نسبة الاحتمال $r_t(\\theta)$ ضمن المدى $[1-\\epsilon, 1+\\epsilon]$ مضروبة في دالة الميزة التقديرية $\\hat{A}_t$.",
      "correctIndex": 0,
      "explanationEn": "Analytical Derivation & Properties: Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تمنع خوارزمية PPO القفزات الكبيرة المزعزعة للاستقرار عبر قص نسبة الاحتمال $r_t(\\theta)$ ضمن المدى $[1-\\epsilon, 1+\\epsilon]$ مضروبة في دالة الميزة التقديرية $\\hat{A}_t$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Policy Gradient Methods & Proximal Policy Optimization (PPO).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تمنع خوارزمية PPO القفزات الكبيرة المزعزعة للاستقرار عبر قص نسبة الاحتمال $r_t(\\theta)$ ضمن المدى $[1-\\epsilon, 1+\\epsilon]$ مضروبة في دالة الميزة التقديرية $\\hat{A}_t$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch3_med_49",
      "titleEn": "[MEDIUM] Markov Decision Processes & Bellman Optimality Equations - Analysis 49",
      "titleAr": "[مستوى متوسط] عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل - تحليل 49",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Markov Decision Processes & Bellman Optimality Equations, what is the precise analytical formulation or operative rule? (Item 49)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 49)",
      "optionsEn": [
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent."
      ],
      "optionsAr": [
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "معادلة بيلمان المثلى لدالة القيمة $Q^*(s, a)$ هي $Q^*(s, a) = R(s, a) + \\gamma \\sum P(s'|s, a) \\max_{a'} Q^*(s', a')$، وتشكل دالة انكماشية تتقارب حتماً لنقطة ثابتة وحيدة.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة."
      ],
      "correctAnswer": "The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.",
      "correctAnswerEn": "The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.",
      "correctAnswerAr": "معادلة بيلمان المثلى لدالة القيمة $Q^*(s, a)$ هي $Q^*(s, a) = R(s, a) + \\gamma \\sum P(s'|s, a) \\max_{a'} Q^*(s', a')$، وتشكل دالة انكماشية تتقارب حتماً لنقطة ثابتة وحيدة.",
      "correctIndex": 1,
      "explanationEn": "Analytical Derivation & Properties: The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: معادلة بيلمان المثلى لدالة القيمة $Q^*(s, a)$ هي $Q^*(s, a) = R(s, a) + \\gamma \\sum P(s'|s, a) \\max_{a'} Q^*(s', a')$، وتشكل دالة انكماشية تتقارب حتماً لنقطة ثابتة وحيدة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Markov Decision Processes & Bellman Optimality Equations.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: معادلة بيلمان المثلى لدالة القيمة $Q^*(s, a)$ هي $Q^*(s, a) = R(s, a) + \\gamma \\sum P(s'|s, a) \\max_{a'} Q^*(s', a')$، وتشكل دالة انكماشية تتقارب حتماً لنقطة ثابتة وحيدة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch3_med_50",
      "titleEn": "[MEDIUM] Deep Q-Networks (DQN), Experience Replay & Target Networks - Analysis 50",
      "titleAr": "[مستوى متوسط] شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف - تحليل 50",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Deep Q-Networks (DQN), Experience Replay & Target Networks, what is the precise analytical formulation or operative rule? (Item 50)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 50)",
      "optionsEn": [
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تعالج شبكات DQN عدم استقرار التدريب بتقنيتين: مخزن إعادة التجارب (لأخذ عينات عشوائية غير مترابطة) وشبكة هدف منفصلة $\\theta^-$ تُحدّث دورياً لتثبيت أهداف بيلمان.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.",
      "correctAnswerEn": "DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.",
      "correctAnswerAr": "تعالج شبكات DQN عدم استقرار التدريب بتقنيتين: مخزن إعادة التجارب (لأخذ عينات عشوائية غير مترابطة) وشبكة هدف منفصلة $\\theta^-$ تُحدّث دورياً لتثبيت أهداف بيلمان.",
      "correctIndex": 2,
      "explanationEn": "Analytical Derivation & Properties: DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تعالج شبكات DQN عدم استقرار التدريب بتقنيتين: مخزن إعادة التجارب (لأخذ عينات عشوائية غير مترابطة) وشبكة هدف منفصلة $\\theta^-$ تُحدّث دورياً لتثبيت أهداف بيلمان.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Deep Q-Networks (DQN), Experience Replay & Target Networks.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تعالج شبكات DQN عدم استقرار التدريب بتقنيتين: مخزن إعادة التجارب (لأخذ عينات عشوائية غير مترابطة) وشبكة هدف منفصلة $\\theta^-$ تُحدّث دورياً لتثبيت أهداف بيلمان.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch3_med_51",
      "titleEn": "[MEDIUM] Policy Gradient Methods & Proximal Policy Optimization (PPO) - Analysis 51",
      "titleAr": "[مستوى متوسط] طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO) - تحليل 51",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Policy Gradient Methods & Proximal Policy Optimization (PPO), what is the precise analytical formulation or operative rule? (Item 51)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 51)",
      "optionsEn": [
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$."
      ],
      "optionsAr": [
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تمنع خوارزمية PPO القفزات الكبيرة المزعزعة للاستقرار عبر قص نسبة الاحتمال $r_t(\\theta)$ ضمن المدى $[1-\\epsilon, 1+\\epsilon]$ مضروبة في دالة الميزة التقديرية $\\hat{A}_t$."
      ],
      "correctAnswer": "Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.",
      "correctAnswerEn": "Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.",
      "correctAnswerAr": "تمنع خوارزمية PPO القفزات الكبيرة المزعزعة للاستقرار عبر قص نسبة الاحتمال $r_t(\\theta)$ ضمن المدى $[1-\\epsilon, 1+\\epsilon]$ مضروبة في دالة الميزة التقديرية $\\hat{A}_t$.",
      "correctIndex": 3,
      "explanationEn": "Analytical Derivation & Properties: Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تمنع خوارزمية PPO القفزات الكبيرة المزعزعة للاستقرار عبر قص نسبة الاحتمال $r_t(\\theta)$ ضمن المدى $[1-\\epsilon, 1+\\epsilon]$ مضروبة في دالة الميزة التقديرية $\\hat{A}_t$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Policy Gradient Methods & Proximal Policy Optimization (PPO).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تمنع خوارزمية PPO القفزات الكبيرة المزعزعة للاستقرار عبر قص نسبة الاحتمال $r_t(\\theta)$ ضمن المدى $[1-\\epsilon, 1+\\epsilon]$ مضروبة في دالة الميزة التقديرية $\\hat{A}_t$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch3_med_52",
      "titleEn": "[MEDIUM] Markov Decision Processes & Bellman Optimality Equations - Analysis 52",
      "titleAr": "[مستوى متوسط] عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل - تحليل 52",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Markov Decision Processes & Bellman Optimality Equations, what is the precise analytical formulation or operative rule? (Item 52)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 52)",
      "optionsEn": [
        "The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance."
      ],
      "optionsAr": [
        "معادلة بيلمان المثلى لدالة القيمة $Q^*(s, a)$ هي $Q^*(s, a) = R(s, a) + \\gamma \\sum P(s'|s, a) \\max_{a'} Q^*(s', a')$، وتشكل دالة انكماشية تتقارب حتماً لنقطة ثابتة وحيدة.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر."
      ],
      "correctAnswer": "The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.",
      "correctAnswerEn": "The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.",
      "correctAnswerAr": "معادلة بيلمان المثلى لدالة القيمة $Q^*(s, a)$ هي $Q^*(s, a) = R(s, a) + \\gamma \\sum P(s'|s, a) \\max_{a'} Q^*(s', a')$، وتشكل دالة انكماشية تتقارب حتماً لنقطة ثابتة وحيدة.",
      "correctIndex": 0,
      "explanationEn": "Analytical Derivation & Properties: The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: معادلة بيلمان المثلى لدالة القيمة $Q^*(s, a)$ هي $Q^*(s, a) = R(s, a) + \\gamma \\sum P(s'|s, a) \\max_{a'} Q^*(s', a')$، وتشكل دالة انكماشية تتقارب حتماً لنقطة ثابتة وحيدة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Markov Decision Processes & Bellman Optimality Equations.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: معادلة بيلمان المثلى لدالة القيمة $Q^*(s, a)$ هي $Q^*(s, a) = R(s, a) + \\gamma \\sum P(s'|s, a) \\max_{a'} Q^*(s', a')$، وتشكل دالة انكماشية تتقارب حتماً لنقطة ثابتة وحيدة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch3_med_53",
      "titleEn": "[MEDIUM] Deep Q-Networks (DQN), Experience Replay & Target Networks - Analysis 53",
      "titleAr": "[مستوى متوسط] شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف - تحليل 53",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Deep Q-Networks (DQN), Experience Replay & Target Networks, what is the precise analytical formulation or operative rule? (Item 53)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 53)",
      "optionsEn": [
        "Principal Component Analysis (PCA) maximizes the classification error by rotating data onto the axes of minimum variance.",
        "DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "يقوم تحليل المكونات الرئيسية (PCA) بتعظيم خطأ التصنيف عبر تدوير البيانات نحو محاور التباين الأصغر.",
        "تعالج شبكات DQN عدم استقرار التدريب بتقنيتين: مخزن إعادة التجارب (لأخذ عينات عشوائية غير مترابطة) وشبكة هدف منفصلة $\\theta^-$ تُحدّث دورياً لتثبيت أهداف بيلمان.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.",
      "correctAnswerEn": "DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.",
      "correctAnswerAr": "تعالج شبكات DQN عدم استقرار التدريب بتقنيتين: مخزن إعادة التجارب (لأخذ عينات عشوائية غير مترابطة) وشبكة هدف منفصلة $\\theta^-$ تُحدّث دورياً لتثبيت أهداف بيلمان.",
      "correctIndex": 1,
      "explanationEn": "Analytical Derivation & Properties: DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تعالج شبكات DQN عدم استقرار التدريب بتقنيتين: مخزن إعادة التجارب (لأخذ عينات عشوائية غير مترابطة) وشبكة هدف منفصلة $\\theta^-$ تُحدّث دورياً لتثبيت أهداف بيلمان.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Deep Q-Networks (DQN), Experience Replay & Target Networks.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تعالج شبكات DQN عدم استقرار التدريب بتقنيتين: مخزن إعادة التجارب (لأخذ عينات عشوائية غير مترابطة) وشبكة هدف منفصلة $\\theta^-$ تُحدّث دورياً لتثبيت أهداف بيلمان.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch3_med_54",
      "titleEn": "[MEDIUM] Policy Gradient Methods & Proximal Policy Optimization (PPO) - Analysis 54",
      "titleAr": "[مستوى متوسط] طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO) - تحليل 54",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Policy Gradient Methods & Proximal Policy Optimization (PPO), what is the precise analytical formulation or operative rule? (Item 54)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 54)",
      "optionsEn": [
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "Convolutional neural networks replace matrix multiplications with physical analog filters that operate exclusively on acoustic sound waves.",
        "Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs."
      ],
      "optionsAr": [
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تستبدل الشبكات العصبية الالتفافية عمليات ضرب المصفوفات بمرشحات تناظرية مادية تعمل حصرياً على الموجات الصوتية.",
        "تمنع خوارزمية PPO القفزات الكبيرة المزعزعة للاستقرار عبر قص نسبة الاحتمال $r_t(\\theta)$ ضمن المدى $[1-\\epsilon, 1+\\epsilon]$ مضروبة في دالة الميزة التقديرية $\\hat{A}_t$.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة."
      ],
      "correctAnswer": "Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.",
      "correctAnswerEn": "Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.",
      "correctAnswerAr": "تمنع خوارزمية PPO القفزات الكبيرة المزعزعة للاستقرار عبر قص نسبة الاحتمال $r_t(\\theta)$ ضمن المدى $[1-\\epsilon, 1+\\epsilon]$ مضروبة في دالة الميزة التقديرية $\\hat{A}_t$.",
      "correctIndex": 2,
      "explanationEn": "Analytical Derivation & Properties: Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تمنع خوارزمية PPO القفزات الكبيرة المزعزعة للاستقرار عبر قص نسبة الاحتمال $r_t(\\theta)$ ضمن المدى $[1-\\epsilon, 1+\\epsilon]$ مضروبة في دالة الميزة التقديرية $\\hat{A}_t$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Policy Gradient Methods & Proximal Policy Optimization (PPO).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تمنع خوارزمية PPO القفزات الكبيرة المزعزعة للاستقرار عبر قص نسبة الاحتمال $r_t(\\theta)$ ضمن المدى $[1-\\epsilon, 1+\\epsilon]$ مضروبة في دالة الميزة التقديرية $\\hat{A}_t$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch3_med_55",
      "titleEn": "[MEDIUM] Markov Decision Processes & Bellman Optimality Equations - Analysis 55",
      "titleAr": "[مستوى متوسط] عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل - تحليل 55",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Markov Decision Processes & Bellman Optimality Equations, what is the precise analytical formulation or operative rule? (Item 55)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 55)",
      "optionsEn": [
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point."
      ],
      "optionsAr": [
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "معادلة بيلمان المثلى لدالة القيمة $Q^*(s, a)$ هي $Q^*(s, a) = R(s, a) + \\gamma \\sum P(s'|s, a) \\max_{a'} Q^*(s', a')$، وتشكل دالة انكماشية تتقارب حتماً لنقطة ثابتة وحيدة."
      ],
      "correctAnswer": "The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.",
      "correctAnswerEn": "The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.",
      "correctAnswerAr": "معادلة بيلمان المثلى لدالة القيمة $Q^*(s, a)$ هي $Q^*(s, a) = R(s, a) + \\gamma \\sum P(s'|s, a) \\max_{a'} Q^*(s', a')$، وتشكل دالة انكماشية تتقارب حتماً لنقطة ثابتة وحيدة.",
      "correctIndex": 3,
      "explanationEn": "Analytical Derivation & Properties: The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: معادلة بيلمان المثلى لدالة القيمة $Q^*(s, a)$ هي $Q^*(s, a) = R(s, a) + \\gamma \\sum P(s'|s, a) \\max_{a'} Q^*(s', a')$، وتشكل دالة انكماشية تتقارب حتماً لنقطة ثابتة وحيدة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Markov Decision Processes & Bellman Optimality Equations.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: معادلة بيلمان المثلى لدالة القيمة $Q^*(s, a)$ هي $Q^*(s, a) = R(s, a) + \\gamma \\sum P(s'|s, a) \\max_{a'} Q^*(s', a')$، وتشكل دالة انكماشية تتقارب حتماً لنقطة ثابتة وحيدة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch3_med_56",
      "titleEn": "[MEDIUM] Deep Q-Networks (DQN), Experience Replay & Target Networks - Analysis 56",
      "titleAr": "[مستوى متوسط] شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف - تحليل 56",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Deep Q-Networks (DQN), Experience Replay & Target Networks, what is the precise analytical formulation or operative rule? (Item 56)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 56)",
      "optionsEn": [
        "DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.",
        "In a Markov Decision Process, the discount factor gamma must be strictly greater than 10 to ensure infinite reward convergence.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "تعالج شبكات DQN عدم استقرار التدريب بتقنيتين: مخزن إعادة التجارب (لأخذ عينات عشوائية غير مترابطة) وشبكة هدف منفصلة $\\theta^-$ تُحدّث دورياً لتثبيت أهداف بيلمان.",
        "في عملية ماركوف لاتخاذ القرار، يجب أن يكون معامل الخصم (جاما) أكبر من 10 لضمان تقارب المكافأة التراكمية.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.",
      "correctAnswerEn": "DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.",
      "correctAnswerAr": "تعالج شبكات DQN عدم استقرار التدريب بتقنيتين: مخزن إعادة التجارب (لأخذ عينات عشوائية غير مترابطة) وشبكة هدف منفصلة $\\theta^-$ تُحدّث دورياً لتثبيت أهداف بيلمان.",
      "correctIndex": 0,
      "explanationEn": "Analytical Derivation & Properties: DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تعالج شبكات DQN عدم استقرار التدريب بتقنيتين: مخزن إعادة التجارب (لأخذ عينات عشوائية غير مترابطة) وشبكة هدف منفصلة $\\theta^-$ تُحدّث دورياً لتثبيت أهداف بيلمان.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Deep Q-Networks (DQN), Experience Replay & Target Networks.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تعالج شبكات DQN عدم استقرار التدريب بتقنيتين: مخزن إعادة التجارب (لأخذ عينات عشوائية غير مترابطة) وشبكة هدف منفصلة $\\theta^-$ تُحدّث دورياً لتثبيت أهداف بيلمان.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch3_med_57",
      "titleEn": "[MEDIUM] Policy Gradient Methods & Proximal Policy Optimization (PPO) - Analysis 57",
      "titleAr": "[مستوى متوسط] طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO) - تحليل 57",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Policy Gradient Methods & Proximal Policy Optimization (PPO), what is the precise analytical formulation or operative rule? (Item 57)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO)، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 57)",
      "optionsEn": [
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.",
        "Model quantization from Float32 to INT8 increases required GPU memory bandwidth and computation latency by 400 percent.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data."
      ],
      "optionsAr": [
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "تمنع خوارزمية PPO القفزات الكبيرة المزعزعة للاستقرار عبر قص نسبة الاحتمال $r_t(\\theta)$ ضمن المدى $[1-\\epsilon, 1+\\epsilon]$ مضروبة في دالة الميزة التقديرية $\\hat{A}_t$.",
        "يؤدي تكميم النماذج من Float32 إلى INT8 إلى زيادة استهلاك نطاق ذاكرة GPU وزمن الاستجابة بنسبة 400 في المائة.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش."
      ],
      "correctAnswer": "Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.",
      "correctAnswerEn": "Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.",
      "correctAnswerAr": "تمنع خوارزمية PPO القفزات الكبيرة المزعزعة للاستقرار عبر قص نسبة الاحتمال $r_t(\\theta)$ ضمن المدى $[1-\\epsilon, 1+\\epsilon]$ مضروبة في دالة الميزة التقديرية $\\hat{A}_t$.",
      "correctIndex": 1,
      "explanationEn": "Analytical Derivation & Properties: Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تمنع خوارزمية PPO القفزات الكبيرة المزعزعة للاستقرار عبر قص نسبة الاحتمال $r_t(\\theta)$ ضمن المدى $[1-\\epsilon, 1+\\epsilon]$ مضروبة في دالة الميزة التقديرية $\\hat{A}_t$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Policy Gradient Methods & Proximal Policy Optimization (PPO).",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO).",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تمنع خوارزمية PPO القفزات الكبيرة المزعزعة للاستقرار عبر قص نسبة الاحتمال $r_t(\\theta)$ ضمن المدى $[1-\\epsilon, 1+\\epsilon]$ مضروبة في دالة الميزة التقديرية $\\hat{A}_t$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch3_med_58",
      "titleEn": "[MEDIUM] Markov Decision Processes & Bellman Optimality Equations - Analysis 58",
      "titleAr": "[مستوى متوسط] عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل - تحليل 58",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Markov Decision Processes & Bellman Optimality Equations, what is the precise analytical formulation or operative rule? (Item 58)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 58)",
      "optionsEn": [
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.",
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan."
      ],
      "optionsAr": [
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "معادلة بيلمان المثلى لدالة القيمة $Q^*(s, a)$ هي $Q^*(s, a) = R(s, a) + \\gamma \\sum P(s'|s, a) \\max_{a'} Q^*(s', a')$، وتشكل دالة انكماشية تتقارب حتماً لنقطة ثابتة وحيدة.",
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG)."
      ],
      "correctAnswer": "The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.",
      "correctAnswerEn": "The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.",
      "correctAnswerAr": "معادلة بيلمان المثلى لدالة القيمة $Q^*(s, a)$ هي $Q^*(s, a) = R(s, a) + \\gamma \\sum P(s'|s, a) \\max_{a'} Q^*(s', a')$، وتشكل دالة انكماشية تتقارب حتماً لنقطة ثابتة وحيدة.",
      "correctIndex": 2,
      "explanationEn": "Analytical Derivation & Properties: The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: معادلة بيلمان المثلى لدالة القيمة $Q^*(s, a)$ هي $Q^*(s, a) = R(s, a) + \\gamma \\sum P(s'|s, a) \\max_{a'} Q^*(s', a')$، وتشكل دالة انكماشية تتقارب حتماً لنقطة ثابتة وحيدة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Markov Decision Processes & Bellman Optimality Equations.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: معادلة بيلمان المثلى لدالة القيمة $Q^*(s, a)$ هي $Q^*(s, a) = R(s, a) + \\gamma \\sum P(s'|s, a) \\max_{a'} Q^*(s', a')$، وتشكل دالة انكماشية تتقارب حتماً لنقطة ثابتة وحيدة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_ai_data_science_ch3_med_59",
      "titleEn": "[MEDIUM] Deep Q-Networks (DQN), Experience Replay & Target Networks - Analysis 59",
      "titleAr": "[مستوى متوسط] شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف - تحليل 59",
      "questionEn": "[Algorithm Analysis & Optimization] In the context of Deep Q-Networks (DQN), Experience Replay & Target Networks, what is the precise analytical formulation or operative rule? (Item 59)",
      "questionAr": "[تحليل الخوارزميات والتحسين الرياضي] في سياق شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف، ما هي الصياغة التحليلية الدقيقة أو قاعدة العمل المعتمدة؟ (سؤال 59)",
      "optionsEn": [
        "Apache Spark RDD transformations are evaluated eagerly and execute immediately upon invocation without creating a DAG execution plan.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$."
      ],
      "optionsAr": [
        "تُنفذ تحويلات هياكل RDD في Apache Spark بصورة فورية ومباشرة فور استدعائها دون بناء مخطط تنفيذ رسومي موجه (DAG).",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "تعالج شبكات DQN عدم استقرار التدريب بتقنيتين: مخزن إعادة التجارب (لأخذ عينات عشوائية غير مترابطة) وشبكة هدف منفصلة $\\theta^-$ تُحدّث دورياً لتثبيت أهداف بيلمان."
      ],
      "correctAnswer": "DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.",
      "correctAnswerEn": "DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.",
      "correctAnswerAr": "تعالج شبكات DQN عدم استقرار التدريب بتقنيتين: مخزن إعادة التجارب (لأخذ عينات عشوائية غير مترابطة) وشبكة هدف منفصلة $\\theta^-$ تُحدّث دورياً لتثبيت أهداف بيلمان.",
      "correctIndex": 3,
      "explanationEn": "Analytical Derivation & Properties: DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.",
      "explanationAr": "الاشتقاق التحليلي والخواص الخوارزمية: تعالج شبكات DQN عدم استقرار التدريب بتقنيتين: مخزن إعادة التجارب (لأخذ عينات عشوائية غير مترابطة) وشبكة هدف منفصلة $\\theta^-$ تُحدّث دورياً لتثبيت أهداف بيلمان.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical relations for Deep Q-Networks (DQN), Experience Replay & Target Networks.",
        "Examine convergence boundaries and structural conditions.",
        "Conclude the verified formulation: DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة العلاقات الرياضية الحاكمة لـ شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف.",
        "فحص حدود التقارب والشروط البنيوية للخوارزمية.",
        "استخلاص الصياغة الرياضية المؤكدة: تعالج شبكات DQN عدم استقرار التدريب بتقنيتين: مخزن إعادة التجارب (لأخذ عينات عشوائية غير مترابطة) وشبكة هدف منفصلة $\\theta^-$ تُحدّث دورياً لتثبيت أهداف بيلمان.."
      ],
      "difficulty": "medium"
    }
  ],
  "hots": [
    {
      "id": "egbac_ai_data_science_ch3_hots_1",
      "titleEn": "[HOTS] Markov Decision Processes & Bellman Optimality Equations - Evaluation 1",
      "titleAr": "[تفكير عليا] عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل - تقييم 1",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Markov Decision Processes & Bellman Optimality Equations: (Problem 1)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل: (مسألة 1)",
      "optionsEn": [
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "في مهمة ملاحة روبوت في شبكة بمعامل خصم $\\gamma = 0.90$ ومكافأة $R = +2.0$، وانتقال احتمالي $1.0$ إلى $s'$ بقيم إجراءات قصوى $\\max Q = 10.0$، فإن تحديث بيلمان يعطي $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "correctAnswerEn": "In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "correctAnswerAr": "في مهمة ملاحة روبوت في شبكة بمعامل خصم $\\gamma = 0.90$ ومكافأة $R = +2.0$، وانتقال احتمالي $1.0$ إلى $s'$ بقيم إجراءات قصوى $\\max Q = 10.0$، فإن تحديث بيلمان يعطي $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "correctIndex": 2,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في مهمة ملاحة روبوت في شبكة بمعامل خصم $\\gamma = 0.90$ ومكافأة $R = +2.0$، وانتقال احتمالي $1.0$ إلى $s'$ بقيم إجراءات قصوى $\\max Q = 10.0$، فإن تحديث بيلمان يعطي $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Markov Decision Processes & Bellman Optimality Equations.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في مهمة ملاحة روبوت في شبكة بمعامل خصم $\\gamma = 0.90$ ومكافأة $R = +2.0$، وانتقال احتمالي $1.0$ إلى $s'$ بقيم إجراءات قصوى $\\max Q = 10.0$، فإن تحديث بيلمان يعطي $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch3_hots_2",
      "titleEn": "[HOTS] Deep Q-Networks (DQN), Experience Replay & Target Networks - Evaluation 2",
      "titleAr": "[تفكير عليا] شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف - تقييم 2",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Deep Q-Networks (DQN), Experience Replay & Target Networks: (Problem 2)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف: (مسألة 2)",
      "optionsEn": [
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss."
      ],
      "optionsAr": [
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "دون مخزن إعادة التجارب، تظهر العينات المتتابعة ارتباطاً زمنياً يفوق $0.92$ مما يسبب تشتت الأوزان؛ بينما يخفض أخذ العينات العشوائية من مخزن بسعة $100,000$ خطوة الارتباط الذاتي إلى $<0.03$."
      ],
      "correctAnswer": "Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss.",
      "correctAnswerEn": "Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss.",
      "correctAnswerAr": "دون مخزن إعادة التجارب، تظهر العينات المتتابعة ارتباطاً زمنياً يفوق $0.92$ مما يسبب تشتت الأوزان؛ بينما يخفض أخذ العينات العشوائية من مخزن بسعة $100,000$ خطوة الارتباط الذاتي إلى $<0.03$.",
      "correctIndex": 3,
      "explanationEn": "Detailed Solution & Numerical Evaluation: Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: دون مخزن إعادة التجارب، تظهر العينات المتتابعة ارتباطاً زمنياً يفوق $0.92$ مما يسبب تشتت الأوزان؛ بينما يخفض أخذ العينات العشوائية من مخزن بسعة $100,000$ خطوة الارتباط الذاتي إلى $<0.03$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Deep Q-Networks (DQN), Experience Replay & Target Networks.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: دون مخزن إعادة التجارب، تظهر العينات المتتابعة ارتباطاً زمنياً يفوق $0.92$ مما يسبب تشتت الأوزان؛ بينما يخفض أخذ العينات العشوائية من مخزن بسعة $100,000$ خطوة الارتباط الذاتي إلى $<0.03$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch3_hots_3",
      "titleEn": "[HOTS] Policy Gradient Methods & Proximal Policy Optimization (PPO) - Evaluation 3",
      "titleAr": "[تفكير عليا] طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO) - تقييم 3",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Policy Gradient Methods & Proximal Policy Optimization (PPO): (Problem 3)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO): (مسألة 3)",
      "optionsEn": [
        "In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "في تدريب طائرة مسيرة ذاتية بمعامل قص $\\epsilon = 0.20$، أنتج إجراء بميزة موجبة $\\hat{A}_t = +4.5$ نسبة $r_t = 1.35$. وتحدد القيمة المقصوصة بـ $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 5.40$ مما يمنع انهيار السياسة.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse.",
      "correctAnswerEn": "In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse.",
      "correctAnswerAr": "في تدريب طائرة مسيرة ذاتية بمعامل قص $\\epsilon = 0.20$، أنتج إجراء بميزة موجبة $\\hat{A}_t = +4.5$ نسبة $r_t = 1.35$. وتحدد القيمة المقصوصة بـ $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 5.40$ مما يمنع انهيار السياسة.",
      "correctIndex": 0,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في تدريب طائرة مسيرة ذاتية بمعامل قص $\\epsilon = 0.20$، أنتج إجراء بميزة موجبة $\\hat{A}_t = +4.5$ نسبة $r_t = 1.35$. وتحدد القيمة المقصوصة بـ $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 5.40$ مما يمنع انهيار السياسة.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Policy Gradient Methods & Proximal Policy Optimization (PPO).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في تدريب طائرة مسيرة ذاتية بمعامل قص $\\epsilon = 0.20$، أنتج إجراء بميزة موجبة $\\hat{A}_t = +4.5$ نسبة $r_t = 1.35$. وتحدد القيمة المقصوصة بـ $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 5.40$ مما يمنع انهيار السياسة.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch3_hots_4",
      "titleEn": "[HOTS] Markov Decision Processes & Bellman Optimality Equations - Evaluation 4",
      "titleAr": "[تفكير عليا] عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل - تقييم 4",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Markov Decision Processes & Bellman Optimality Equations: (Problem 4)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل: (مسألة 4)",
      "optionsEn": [
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "في مهمة ملاحة روبوت في شبكة بمعامل خصم $\\gamma = 0.90$ ومكافأة $R = +2.0$، وانتقال احتمالي $1.0$ إلى $s'$ بقيم إجراءات قصوى $\\max Q = 10.0$، فإن تحديث بيلمان يعطي $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "correctAnswerEn": "In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "correctAnswerAr": "في مهمة ملاحة روبوت في شبكة بمعامل خصم $\\gamma = 0.90$ ومكافأة $R = +2.0$، وانتقال احتمالي $1.0$ إلى $s'$ بقيم إجراءات قصوى $\\max Q = 10.0$، فإن تحديث بيلمان يعطي $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "correctIndex": 1,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في مهمة ملاحة روبوت في شبكة بمعامل خصم $\\gamma = 0.90$ ومكافأة $R = +2.0$، وانتقال احتمالي $1.0$ إلى $s'$ بقيم إجراءات قصوى $\\max Q = 10.0$، فإن تحديث بيلمان يعطي $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Markov Decision Processes & Bellman Optimality Equations.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في مهمة ملاحة روبوت في شبكة بمعامل خصم $\\gamma = 0.90$ ومكافأة $R = +2.0$، وانتقال احتمالي $1.0$ إلى $s'$ بقيم إجراءات قصوى $\\max Q = 10.0$، فإن تحديث بيلمان يعطي $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch3_hots_5",
      "titleEn": "[HOTS] Deep Q-Networks (DQN), Experience Replay & Target Networks - Evaluation 5",
      "titleAr": "[تفكير عليا] شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف - تقييم 5",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Deep Q-Networks (DQN), Experience Replay & Target Networks: (Problem 5)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف: (مسألة 5)",
      "optionsEn": [
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "دون مخزن إعادة التجارب، تظهر العينات المتتابعة ارتباطاً زمنياً يفوق $0.92$ مما يسبب تشتت الأوزان؛ بينما يخفض أخذ العينات العشوائية من مخزن بسعة $100,000$ خطوة الارتباط الذاتي إلى $<0.03$.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss.",
      "correctAnswerEn": "Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss.",
      "correctAnswerAr": "دون مخزن إعادة التجارب، تظهر العينات المتتابعة ارتباطاً زمنياً يفوق $0.92$ مما يسبب تشتت الأوزان؛ بينما يخفض أخذ العينات العشوائية من مخزن بسعة $100,000$ خطوة الارتباط الذاتي إلى $<0.03$.",
      "correctIndex": 2,
      "explanationEn": "Detailed Solution & Numerical Evaluation: Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: دون مخزن إعادة التجارب، تظهر العينات المتتابعة ارتباطاً زمنياً يفوق $0.92$ مما يسبب تشتت الأوزان؛ بينما يخفض أخذ العينات العشوائية من مخزن بسعة $100,000$ خطوة الارتباط الذاتي إلى $<0.03$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Deep Q-Networks (DQN), Experience Replay & Target Networks.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: دون مخزن إعادة التجارب، تظهر العينات المتتابعة ارتباطاً زمنياً يفوق $0.92$ مما يسبب تشتت الأوزان؛ بينما يخفض أخذ العينات العشوائية من مخزن بسعة $100,000$ خطوة الارتباط الذاتي إلى $<0.03$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch3_hots_6",
      "titleEn": "[HOTS] Policy Gradient Methods & Proximal Policy Optimization (PPO) - Evaluation 6",
      "titleAr": "[تفكير عليا] طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO) - تقييم 6",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Policy Gradient Methods & Proximal Policy Optimization (PPO): (Problem 6)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO): (مسألة 6)",
      "optionsEn": [
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse."
      ],
      "optionsAr": [
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "في تدريب طائرة مسيرة ذاتية بمعامل قص $\\epsilon = 0.20$، أنتج إجراء بميزة موجبة $\\hat{A}_t = +4.5$ نسبة $r_t = 1.35$. وتحدد القيمة المقصوصة بـ $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 5.40$ مما يمنع انهيار السياسة."
      ],
      "correctAnswer": "In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse.",
      "correctAnswerEn": "In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse.",
      "correctAnswerAr": "في تدريب طائرة مسيرة ذاتية بمعامل قص $\\epsilon = 0.20$، أنتج إجراء بميزة موجبة $\\hat{A}_t = +4.5$ نسبة $r_t = 1.35$. وتحدد القيمة المقصوصة بـ $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 5.40$ مما يمنع انهيار السياسة.",
      "correctIndex": 3,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في تدريب طائرة مسيرة ذاتية بمعامل قص $\\epsilon = 0.20$، أنتج إجراء بميزة موجبة $\\hat{A}_t = +4.5$ نسبة $r_t = 1.35$. وتحدد القيمة المقصوصة بـ $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 5.40$ مما يمنع انهيار السياسة.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Policy Gradient Methods & Proximal Policy Optimization (PPO).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في تدريب طائرة مسيرة ذاتية بمعامل قص $\\epsilon = 0.20$، أنتج إجراء بميزة موجبة $\\hat{A}_t = +4.5$ نسبة $r_t = 1.35$. وتحدد القيمة المقصوصة بـ $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 5.40$ مما يمنع انهيار السياسة.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch3_hots_7",
      "titleEn": "[HOTS] Markov Decision Processes & Bellman Optimality Equations - Evaluation 7",
      "titleAr": "[تفكير عليا] عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل - تقييم 7",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Markov Decision Processes & Bellman Optimality Equations: (Problem 7)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل: (مسألة 7)",
      "optionsEn": [
        "In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "في مهمة ملاحة روبوت في شبكة بمعامل خصم $\\gamma = 0.90$ ومكافأة $R = +2.0$، وانتقال احتمالي $1.0$ إلى $s'$ بقيم إجراءات قصوى $\\max Q = 10.0$، فإن تحديث بيلمان يعطي $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "correctAnswerEn": "In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "correctAnswerAr": "في مهمة ملاحة روبوت في شبكة بمعامل خصم $\\gamma = 0.90$ ومكافأة $R = +2.0$، وانتقال احتمالي $1.0$ إلى $s'$ بقيم إجراءات قصوى $\\max Q = 10.0$، فإن تحديث بيلمان يعطي $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "correctIndex": 0,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في مهمة ملاحة روبوت في شبكة بمعامل خصم $\\gamma = 0.90$ ومكافأة $R = +2.0$، وانتقال احتمالي $1.0$ إلى $s'$ بقيم إجراءات قصوى $\\max Q = 10.0$، فإن تحديث بيلمان يعطي $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Markov Decision Processes & Bellman Optimality Equations.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في مهمة ملاحة روبوت في شبكة بمعامل خصم $\\gamma = 0.90$ ومكافأة $R = +2.0$، وانتقال احتمالي $1.0$ إلى $s'$ بقيم إجراءات قصوى $\\max Q = 10.0$، فإن تحديث بيلمان يعطي $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch3_hots_8",
      "titleEn": "[HOTS] Deep Q-Networks (DQN), Experience Replay & Target Networks - Evaluation 8",
      "titleAr": "[تفكير عليا] شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف - تقييم 8",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Deep Q-Networks (DQN), Experience Replay & Target Networks: (Problem 8)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف: (مسألة 8)",
      "optionsEn": [
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "دون مخزن إعادة التجارب، تظهر العينات المتتابعة ارتباطاً زمنياً يفوق $0.92$ مما يسبب تشتت الأوزان؛ بينما يخفض أخذ العينات العشوائية من مخزن بسعة $100,000$ خطوة الارتباط الذاتي إلى $<0.03$.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss.",
      "correctAnswerEn": "Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss.",
      "correctAnswerAr": "دون مخزن إعادة التجارب، تظهر العينات المتتابعة ارتباطاً زمنياً يفوق $0.92$ مما يسبب تشتت الأوزان؛ بينما يخفض أخذ العينات العشوائية من مخزن بسعة $100,000$ خطوة الارتباط الذاتي إلى $<0.03$.",
      "correctIndex": 1,
      "explanationEn": "Detailed Solution & Numerical Evaluation: Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: دون مخزن إعادة التجارب، تظهر العينات المتتابعة ارتباطاً زمنياً يفوق $0.92$ مما يسبب تشتت الأوزان؛ بينما يخفض أخذ العينات العشوائية من مخزن بسعة $100,000$ خطوة الارتباط الذاتي إلى $<0.03$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Deep Q-Networks (DQN), Experience Replay & Target Networks.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: دون مخزن إعادة التجارب، تظهر العينات المتتابعة ارتباطاً زمنياً يفوق $0.92$ مما يسبب تشتت الأوزان؛ بينما يخفض أخذ العينات العشوائية من مخزن بسعة $100,000$ خطوة الارتباط الذاتي إلى $<0.03$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch3_hots_9",
      "titleEn": "[HOTS] Policy Gradient Methods & Proximal Policy Optimization (PPO) - Evaluation 9",
      "titleAr": "[تفكير عليا] طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO) - تقييم 9",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Policy Gradient Methods & Proximal Policy Optimization (PPO): (Problem 9)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO): (مسألة 9)",
      "optionsEn": [
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "في تدريب طائرة مسيرة ذاتية بمعامل قص $\\epsilon = 0.20$، أنتج إجراء بميزة موجبة $\\hat{A}_t = +4.5$ نسبة $r_t = 1.35$. وتحدد القيمة المقصوصة بـ $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 5.40$ مما يمنع انهيار السياسة.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse.",
      "correctAnswerEn": "In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse.",
      "correctAnswerAr": "في تدريب طائرة مسيرة ذاتية بمعامل قص $\\epsilon = 0.20$، أنتج إجراء بميزة موجبة $\\hat{A}_t = +4.5$ نسبة $r_t = 1.35$. وتحدد القيمة المقصوصة بـ $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 5.40$ مما يمنع انهيار السياسة.",
      "correctIndex": 2,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في تدريب طائرة مسيرة ذاتية بمعامل قص $\\epsilon = 0.20$، أنتج إجراء بميزة موجبة $\\hat{A}_t = +4.5$ نسبة $r_t = 1.35$. وتحدد القيمة المقصوصة بـ $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 5.40$ مما يمنع انهيار السياسة.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Policy Gradient Methods & Proximal Policy Optimization (PPO).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في تدريب طائرة مسيرة ذاتية بمعامل قص $\\epsilon = 0.20$، أنتج إجراء بميزة موجبة $\\hat{A}_t = +4.5$ نسبة $r_t = 1.35$. وتحدد القيمة المقصوصة بـ $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 5.40$ مما يمنع انهيار السياسة.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch3_hots_10",
      "titleEn": "[HOTS] Markov Decision Processes & Bellman Optimality Equations - Evaluation 10",
      "titleAr": "[تفكير عليا] عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل - تقييم 10",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Markov Decision Processes & Bellman Optimality Equations: (Problem 10)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل: (مسألة 10)",
      "optionsEn": [
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$."
      ],
      "optionsAr": [
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "في مهمة ملاحة روبوت في شبكة بمعامل خصم $\\gamma = 0.90$ ومكافأة $R = +2.0$، وانتقال احتمالي $1.0$ إلى $s'$ بقيم إجراءات قصوى $\\max Q = 10.0$، فإن تحديث بيلمان يعطي $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$."
      ],
      "correctAnswer": "In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "correctAnswerEn": "In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "correctAnswerAr": "في مهمة ملاحة روبوت في شبكة بمعامل خصم $\\gamma = 0.90$ ومكافأة $R = +2.0$، وانتقال احتمالي $1.0$ إلى $s'$ بقيم إجراءات قصوى $\\max Q = 10.0$، فإن تحديث بيلمان يعطي $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "correctIndex": 3,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في مهمة ملاحة روبوت في شبكة بمعامل خصم $\\gamma = 0.90$ ومكافأة $R = +2.0$، وانتقال احتمالي $1.0$ إلى $s'$ بقيم إجراءات قصوى $\\max Q = 10.0$، فإن تحديث بيلمان يعطي $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Markov Decision Processes & Bellman Optimality Equations.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في مهمة ملاحة روبوت في شبكة بمعامل خصم $\\gamma = 0.90$ ومكافأة $R = +2.0$، وانتقال احتمالي $1.0$ إلى $s'$ بقيم إجراءات قصوى $\\max Q = 10.0$، فإن تحديث بيلمان يعطي $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch3_hots_11",
      "titleEn": "[HOTS] Deep Q-Networks (DQN), Experience Replay & Target Networks - Evaluation 11",
      "titleAr": "[تفكير عليا] شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف - تقييم 11",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Deep Q-Networks (DQN), Experience Replay & Target Networks: (Problem 11)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف: (مسألة 11)",
      "optionsEn": [
        "Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "دون مخزن إعادة التجارب، تظهر العينات المتتابعة ارتباطاً زمنياً يفوق $0.92$ مما يسبب تشتت الأوزان؛ بينما يخفض أخذ العينات العشوائية من مخزن بسعة $100,000$ خطوة الارتباط الذاتي إلى $<0.03$.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss.",
      "correctAnswerEn": "Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss.",
      "correctAnswerAr": "دون مخزن إعادة التجارب، تظهر العينات المتتابعة ارتباطاً زمنياً يفوق $0.92$ مما يسبب تشتت الأوزان؛ بينما يخفض أخذ العينات العشوائية من مخزن بسعة $100,000$ خطوة الارتباط الذاتي إلى $<0.03$.",
      "correctIndex": 0,
      "explanationEn": "Detailed Solution & Numerical Evaluation: Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: دون مخزن إعادة التجارب، تظهر العينات المتتابعة ارتباطاً زمنياً يفوق $0.92$ مما يسبب تشتت الأوزان؛ بينما يخفض أخذ العينات العشوائية من مخزن بسعة $100,000$ خطوة الارتباط الذاتي إلى $<0.03$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Deep Q-Networks (DQN), Experience Replay & Target Networks.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: دون مخزن إعادة التجارب، تظهر العينات المتتابعة ارتباطاً زمنياً يفوق $0.92$ مما يسبب تشتت الأوزان؛ بينما يخفض أخذ العينات العشوائية من مخزن بسعة $100,000$ خطوة الارتباط الذاتي إلى $<0.03$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch3_hots_12",
      "titleEn": "[HOTS] Policy Gradient Methods & Proximal Policy Optimization (PPO) - Evaluation 12",
      "titleAr": "[تفكير عليا] طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO) - تقييم 12",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Policy Gradient Methods & Proximal Policy Optimization (PPO): (Problem 12)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO): (مسألة 12)",
      "optionsEn": [
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "في تدريب طائرة مسيرة ذاتية بمعامل قص $\\epsilon = 0.20$، أنتج إجراء بميزة موجبة $\\hat{A}_t = +4.5$ نسبة $r_t = 1.35$. وتحدد القيمة المقصوصة بـ $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 5.40$ مما يمنع انهيار السياسة.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse.",
      "correctAnswerEn": "In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse.",
      "correctAnswerAr": "في تدريب طائرة مسيرة ذاتية بمعامل قص $\\epsilon = 0.20$، أنتج إجراء بميزة موجبة $\\hat{A}_t = +4.5$ نسبة $r_t = 1.35$. وتحدد القيمة المقصوصة بـ $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 5.40$ مما يمنع انهيار السياسة.",
      "correctIndex": 1,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في تدريب طائرة مسيرة ذاتية بمعامل قص $\\epsilon = 0.20$، أنتج إجراء بميزة موجبة $\\hat{A}_t = +4.5$ نسبة $r_t = 1.35$. وتحدد القيمة المقصوصة بـ $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 5.40$ مما يمنع انهيار السياسة.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Policy Gradient Methods & Proximal Policy Optimization (PPO).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في تدريب طائرة مسيرة ذاتية بمعامل قص $\\epsilon = 0.20$، أنتج إجراء بميزة موجبة $\\hat{A}_t = +4.5$ نسبة $r_t = 1.35$. وتحدد القيمة المقصوصة بـ $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 5.40$ مما يمنع انهيار السياسة.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch3_hots_13",
      "titleEn": "[HOTS] Markov Decision Processes & Bellman Optimality Equations - Evaluation 13",
      "titleAr": "[تفكير عليا] عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل - تقييم 13",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Markov Decision Processes & Bellman Optimality Equations: (Problem 13)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل: (مسألة 13)",
      "optionsEn": [
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "في مهمة ملاحة روبوت في شبكة بمعامل خصم $\\gamma = 0.90$ ومكافأة $R = +2.0$، وانتقال احتمالي $1.0$ إلى $s'$ بقيم إجراءات قصوى $\\max Q = 10.0$، فإن تحديث بيلمان يعطي $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "correctAnswerEn": "In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "correctAnswerAr": "في مهمة ملاحة روبوت في شبكة بمعامل خصم $\\gamma = 0.90$ ومكافأة $R = +2.0$، وانتقال احتمالي $1.0$ إلى $s'$ بقيم إجراءات قصوى $\\max Q = 10.0$، فإن تحديث بيلمان يعطي $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "correctIndex": 2,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في مهمة ملاحة روبوت في شبكة بمعامل خصم $\\gamma = 0.90$ ومكافأة $R = +2.0$، وانتقال احتمالي $1.0$ إلى $s'$ بقيم إجراءات قصوى $\\max Q = 10.0$، فإن تحديث بيلمان يعطي $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Markov Decision Processes & Bellman Optimality Equations.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في مهمة ملاحة روبوت في شبكة بمعامل خصم $\\gamma = 0.90$ ومكافأة $R = +2.0$، وانتقال احتمالي $1.0$ إلى $s'$ بقيم إجراءات قصوى $\\max Q = 10.0$، فإن تحديث بيلمان يعطي $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch3_hots_14",
      "titleEn": "[HOTS] Deep Q-Networks (DQN), Experience Replay & Target Networks - Evaluation 14",
      "titleAr": "[تفكير عليا] شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف - تقييم 14",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Deep Q-Networks (DQN), Experience Replay & Target Networks: (Problem 14)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف: (مسألة 14)",
      "optionsEn": [
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss."
      ],
      "optionsAr": [
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "دون مخزن إعادة التجارب، تظهر العينات المتتابعة ارتباطاً زمنياً يفوق $0.92$ مما يسبب تشتت الأوزان؛ بينما يخفض أخذ العينات العشوائية من مخزن بسعة $100,000$ خطوة الارتباط الذاتي إلى $<0.03$."
      ],
      "correctAnswer": "Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss.",
      "correctAnswerEn": "Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss.",
      "correctAnswerAr": "دون مخزن إعادة التجارب، تظهر العينات المتتابعة ارتباطاً زمنياً يفوق $0.92$ مما يسبب تشتت الأوزان؛ بينما يخفض أخذ العينات العشوائية من مخزن بسعة $100,000$ خطوة الارتباط الذاتي إلى $<0.03$.",
      "correctIndex": 3,
      "explanationEn": "Detailed Solution & Numerical Evaluation: Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: دون مخزن إعادة التجارب، تظهر العينات المتتابعة ارتباطاً زمنياً يفوق $0.92$ مما يسبب تشتت الأوزان؛ بينما يخفض أخذ العينات العشوائية من مخزن بسعة $100,000$ خطوة الارتباط الذاتي إلى $<0.03$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Deep Q-Networks (DQN), Experience Replay & Target Networks.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: دون مخزن إعادة التجارب، تظهر العينات المتتابعة ارتباطاً زمنياً يفوق $0.92$ مما يسبب تشتت الأوزان؛ بينما يخفض أخذ العينات العشوائية من مخزن بسعة $100,000$ خطوة الارتباط الذاتي إلى $<0.03$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch3_hots_15",
      "titleEn": "[HOTS] Policy Gradient Methods & Proximal Policy Optimization (PPO) - Evaluation 15",
      "titleAr": "[تفكير عليا] طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO) - تقييم 15",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Policy Gradient Methods & Proximal Policy Optimization (PPO): (Problem 15)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO): (مسألة 15)",
      "optionsEn": [
        "In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "في تدريب طائرة مسيرة ذاتية بمعامل قص $\\epsilon = 0.20$، أنتج إجراء بميزة موجبة $\\hat{A}_t = +4.5$ نسبة $r_t = 1.35$. وتحدد القيمة المقصوصة بـ $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 5.40$ مما يمنع انهيار السياسة.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse.",
      "correctAnswerEn": "In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse.",
      "correctAnswerAr": "في تدريب طائرة مسيرة ذاتية بمعامل قص $\\epsilon = 0.20$، أنتج إجراء بميزة موجبة $\\hat{A}_t = +4.5$ نسبة $r_t = 1.35$. وتحدد القيمة المقصوصة بـ $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 5.40$ مما يمنع انهيار السياسة.",
      "correctIndex": 0,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في تدريب طائرة مسيرة ذاتية بمعامل قص $\\epsilon = 0.20$، أنتج إجراء بميزة موجبة $\\hat{A}_t = +4.5$ نسبة $r_t = 1.35$. وتحدد القيمة المقصوصة بـ $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 5.40$ مما يمنع انهيار السياسة.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Policy Gradient Methods & Proximal Policy Optimization (PPO).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في تدريب طائرة مسيرة ذاتية بمعامل قص $\\epsilon = 0.20$، أنتج إجراء بميزة موجبة $\\hat{A}_t = +4.5$ نسبة $r_t = 1.35$. وتحدد القيمة المقصوصة بـ $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 5.40$ مما يمنع انهيار السياسة.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch3_hots_16",
      "titleEn": "[HOTS] Markov Decision Processes & Bellman Optimality Equations - Evaluation 16",
      "titleAr": "[تفكير عليا] عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل - تقييم 16",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Markov Decision Processes & Bellman Optimality Equations: (Problem 16)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل: (مسألة 16)",
      "optionsEn": [
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "في مهمة ملاحة روبوت في شبكة بمعامل خصم $\\gamma = 0.90$ ومكافأة $R = +2.0$، وانتقال احتمالي $1.0$ إلى $s'$ بقيم إجراءات قصوى $\\max Q = 10.0$، فإن تحديث بيلمان يعطي $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "correctAnswerEn": "In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "correctAnswerAr": "في مهمة ملاحة روبوت في شبكة بمعامل خصم $\\gamma = 0.90$ ومكافأة $R = +2.0$، وانتقال احتمالي $1.0$ إلى $s'$ بقيم إجراءات قصوى $\\max Q = 10.0$، فإن تحديث بيلمان يعطي $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "correctIndex": 1,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في مهمة ملاحة روبوت في شبكة بمعامل خصم $\\gamma = 0.90$ ومكافأة $R = +2.0$، وانتقال احتمالي $1.0$ إلى $s'$ بقيم إجراءات قصوى $\\max Q = 10.0$، فإن تحديث بيلمان يعطي $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Markov Decision Processes & Bellman Optimality Equations.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في مهمة ملاحة روبوت في شبكة بمعامل خصم $\\gamma = 0.90$ ومكافأة $R = +2.0$، وانتقال احتمالي $1.0$ إلى $s'$ بقيم إجراءات قصوى $\\max Q = 10.0$، فإن تحديث بيلمان يعطي $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch3_hots_17",
      "titleEn": "[HOTS] Deep Q-Networks (DQN), Experience Replay & Target Networks - Evaluation 17",
      "titleAr": "[تفكير عليا] شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف - تقييم 17",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Deep Q-Networks (DQN), Experience Replay & Target Networks: (Problem 17)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف: (مسألة 17)",
      "optionsEn": [
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "دون مخزن إعادة التجارب، تظهر العينات المتتابعة ارتباطاً زمنياً يفوق $0.92$ مما يسبب تشتت الأوزان؛ بينما يخفض أخذ العينات العشوائية من مخزن بسعة $100,000$ خطوة الارتباط الذاتي إلى $<0.03$.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss.",
      "correctAnswerEn": "Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss.",
      "correctAnswerAr": "دون مخزن إعادة التجارب، تظهر العينات المتتابعة ارتباطاً زمنياً يفوق $0.92$ مما يسبب تشتت الأوزان؛ بينما يخفض أخذ العينات العشوائية من مخزن بسعة $100,000$ خطوة الارتباط الذاتي إلى $<0.03$.",
      "correctIndex": 2,
      "explanationEn": "Detailed Solution & Numerical Evaluation: Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: دون مخزن إعادة التجارب، تظهر العينات المتتابعة ارتباطاً زمنياً يفوق $0.92$ مما يسبب تشتت الأوزان؛ بينما يخفض أخذ العينات العشوائية من مخزن بسعة $100,000$ خطوة الارتباط الذاتي إلى $<0.03$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Deep Q-Networks (DQN), Experience Replay & Target Networks.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: دون مخزن إعادة التجارب، تظهر العينات المتتابعة ارتباطاً زمنياً يفوق $0.92$ مما يسبب تشتت الأوزان؛ بينما يخفض أخذ العينات العشوائية من مخزن بسعة $100,000$ خطوة الارتباط الذاتي إلى $<0.03$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch3_hots_18",
      "titleEn": "[HOTS] Policy Gradient Methods & Proximal Policy Optimization (PPO) - Evaluation 18",
      "titleAr": "[تفكير عليا] طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO) - تقييم 18",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Policy Gradient Methods & Proximal Policy Optimization (PPO): (Problem 18)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO): (مسألة 18)",
      "optionsEn": [
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse."
      ],
      "optionsAr": [
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "في تدريب طائرة مسيرة ذاتية بمعامل قص $\\epsilon = 0.20$، أنتج إجراء بميزة موجبة $\\hat{A}_t = +4.5$ نسبة $r_t = 1.35$. وتحدد القيمة المقصوصة بـ $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 5.40$ مما يمنع انهيار السياسة."
      ],
      "correctAnswer": "In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse.",
      "correctAnswerEn": "In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse.",
      "correctAnswerAr": "في تدريب طائرة مسيرة ذاتية بمعامل قص $\\epsilon = 0.20$، أنتج إجراء بميزة موجبة $\\hat{A}_t = +4.5$ نسبة $r_t = 1.35$. وتحدد القيمة المقصوصة بـ $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 5.40$ مما يمنع انهيار السياسة.",
      "correctIndex": 3,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في تدريب طائرة مسيرة ذاتية بمعامل قص $\\epsilon = 0.20$، أنتج إجراء بميزة موجبة $\\hat{A}_t = +4.5$ نسبة $r_t = 1.35$. وتحدد القيمة المقصوصة بـ $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 5.40$ مما يمنع انهيار السياسة.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Policy Gradient Methods & Proximal Policy Optimization (PPO).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في تدريب طائرة مسيرة ذاتية بمعامل قص $\\epsilon = 0.20$، أنتج إجراء بميزة موجبة $\\hat{A}_t = +4.5$ نسبة $r_t = 1.35$. وتحدد القيمة المقصوصة بـ $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 5.40$ مما يمنع انهيار السياسة.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch3_hots_19",
      "titleEn": "[HOTS] Markov Decision Processes & Bellman Optimality Equations - Evaluation 19",
      "titleAr": "[تفكير عليا] عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل - تقييم 19",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Markov Decision Processes & Bellman Optimality Equations: (Problem 19)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل: (مسألة 19)",
      "optionsEn": [
        "In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "في مهمة ملاحة روبوت في شبكة بمعامل خصم $\\gamma = 0.90$ ومكافأة $R = +2.0$، وانتقال احتمالي $1.0$ إلى $s'$ بقيم إجراءات قصوى $\\max Q = 10.0$، فإن تحديث بيلمان يعطي $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "correctAnswerEn": "In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "correctAnswerAr": "في مهمة ملاحة روبوت في شبكة بمعامل خصم $\\gamma = 0.90$ ومكافأة $R = +2.0$، وانتقال احتمالي $1.0$ إلى $s'$ بقيم إجراءات قصوى $\\max Q = 10.0$، فإن تحديث بيلمان يعطي $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "correctIndex": 0,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في مهمة ملاحة روبوت في شبكة بمعامل خصم $\\gamma = 0.90$ ومكافأة $R = +2.0$، وانتقال احتمالي $1.0$ إلى $s'$ بقيم إجراءات قصوى $\\max Q = 10.0$، فإن تحديث بيلمان يعطي $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Markov Decision Processes & Bellman Optimality Equations.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في مهمة ملاحة روبوت في شبكة بمعامل خصم $\\gamma = 0.90$ ومكافأة $R = +2.0$، وانتقال احتمالي $1.0$ إلى $s'$ بقيم إجراءات قصوى $\\max Q = 10.0$، فإن تحديث بيلمان يعطي $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch3_hots_20",
      "titleEn": "[HOTS] Deep Q-Networks (DQN), Experience Replay & Target Networks - Evaluation 20",
      "titleAr": "[تفكير عليا] شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف - تقييم 20",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Deep Q-Networks (DQN), Experience Replay & Target Networks: (Problem 20)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف: (مسألة 20)",
      "optionsEn": [
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "دون مخزن إعادة التجارب، تظهر العينات المتتابعة ارتباطاً زمنياً يفوق $0.92$ مما يسبب تشتت الأوزان؛ بينما يخفض أخذ العينات العشوائية من مخزن بسعة $100,000$ خطوة الارتباط الذاتي إلى $<0.03$.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss.",
      "correctAnswerEn": "Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss.",
      "correctAnswerAr": "دون مخزن إعادة التجارب، تظهر العينات المتتابعة ارتباطاً زمنياً يفوق $0.92$ مما يسبب تشتت الأوزان؛ بينما يخفض أخذ العينات العشوائية من مخزن بسعة $100,000$ خطوة الارتباط الذاتي إلى $<0.03$.",
      "correctIndex": 1,
      "explanationEn": "Detailed Solution & Numerical Evaluation: Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: دون مخزن إعادة التجارب، تظهر العينات المتتابعة ارتباطاً زمنياً يفوق $0.92$ مما يسبب تشتت الأوزان؛ بينما يخفض أخذ العينات العشوائية من مخزن بسعة $100,000$ خطوة الارتباط الذاتي إلى $<0.03$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Deep Q-Networks (DQN), Experience Replay & Target Networks.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: دون مخزن إعادة التجارب، تظهر العينات المتتابعة ارتباطاً زمنياً يفوق $0.92$ مما يسبب تشتت الأوزان؛ بينما يخفض أخذ العينات العشوائية من مخزن بسعة $100,000$ خطوة الارتباط الذاتي إلى $<0.03$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch3_hots_21",
      "titleEn": "[HOTS] Policy Gradient Methods & Proximal Policy Optimization (PPO) - Evaluation 21",
      "titleAr": "[تفكير عليا] طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO) - تقييم 21",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Policy Gradient Methods & Proximal Policy Optimization (PPO): (Problem 21)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO): (مسألة 21)",
      "optionsEn": [
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "في تدريب طائرة مسيرة ذاتية بمعامل قص $\\epsilon = 0.20$، أنتج إجراء بميزة موجبة $\\hat{A}_t = +4.5$ نسبة $r_t = 1.35$. وتحدد القيمة المقصوصة بـ $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 5.40$ مما يمنع انهيار السياسة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse.",
      "correctAnswerEn": "In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse.",
      "correctAnswerAr": "في تدريب طائرة مسيرة ذاتية بمعامل قص $\\epsilon = 0.20$، أنتج إجراء بميزة موجبة $\\hat{A}_t = +4.5$ نسبة $r_t = 1.35$. وتحدد القيمة المقصوصة بـ $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 5.40$ مما يمنع انهيار السياسة.",
      "correctIndex": 2,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في تدريب طائرة مسيرة ذاتية بمعامل قص $\\epsilon = 0.20$، أنتج إجراء بميزة موجبة $\\hat{A}_t = +4.5$ نسبة $r_t = 1.35$. وتحدد القيمة المقصوصة بـ $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 5.40$ مما يمنع انهيار السياسة.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Policy Gradient Methods & Proximal Policy Optimization (PPO).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في تدريب طائرة مسيرة ذاتية بمعامل قص $\\epsilon = 0.20$، أنتج إجراء بميزة موجبة $\\hat{A}_t = +4.5$ نسبة $r_t = 1.35$. وتحدد القيمة المقصوصة بـ $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 5.40$ مما يمنع انهيار السياسة.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch3_hots_22",
      "titleEn": "[HOTS] Markov Decision Processes & Bellman Optimality Equations - Evaluation 22",
      "titleAr": "[تفكير عليا] عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل - تقييم 22",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Markov Decision Processes & Bellman Optimality Equations: (Problem 22)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل: (مسألة 22)",
      "optionsEn": [
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$."
      ],
      "optionsAr": [
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "في مهمة ملاحة روبوت في شبكة بمعامل خصم $\\gamma = 0.90$ ومكافأة $R = +2.0$، وانتقال احتمالي $1.0$ إلى $s'$ بقيم إجراءات قصوى $\\max Q = 10.0$، فإن تحديث بيلمان يعطي $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$."
      ],
      "correctAnswer": "In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "correctAnswerEn": "In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "correctAnswerAr": "في مهمة ملاحة روبوت في شبكة بمعامل خصم $\\gamma = 0.90$ ومكافأة $R = +2.0$، وانتقال احتمالي $1.0$ إلى $s'$ بقيم إجراءات قصوى $\\max Q = 10.0$، فإن تحديث بيلمان يعطي $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "correctIndex": 3,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في مهمة ملاحة روبوت في شبكة بمعامل خصم $\\gamma = 0.90$ ومكافأة $R = +2.0$، وانتقال احتمالي $1.0$ إلى $s'$ بقيم إجراءات قصوى $\\max Q = 10.0$، فإن تحديث بيلمان يعطي $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Markov Decision Processes & Bellman Optimality Equations.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في مهمة ملاحة روبوت في شبكة بمعامل خصم $\\gamma = 0.90$ ومكافأة $R = +2.0$، وانتقال احتمالي $1.0$ إلى $s'$ بقيم إجراءات قصوى $\\max Q = 10.0$، فإن تحديث بيلمان يعطي $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch3_hots_23",
      "titleEn": "[HOTS] Deep Q-Networks (DQN), Experience Replay & Target Networks - Evaluation 23",
      "titleAr": "[تفكير عليا] شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف - تقييم 23",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Deep Q-Networks (DQN), Experience Replay & Target Networks: (Problem 23)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف: (مسألة 23)",
      "optionsEn": [
        "Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "دون مخزن إعادة التجارب، تظهر العينات المتتابعة ارتباطاً زمنياً يفوق $0.92$ مما يسبب تشتت الأوزان؛ بينما يخفض أخذ العينات العشوائية من مخزن بسعة $100,000$ خطوة الارتباط الذاتي إلى $<0.03$.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss.",
      "correctAnswerEn": "Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss.",
      "correctAnswerAr": "دون مخزن إعادة التجارب، تظهر العينات المتتابعة ارتباطاً زمنياً يفوق $0.92$ مما يسبب تشتت الأوزان؛ بينما يخفض أخذ العينات العشوائية من مخزن بسعة $100,000$ خطوة الارتباط الذاتي إلى $<0.03$.",
      "correctIndex": 0,
      "explanationEn": "Detailed Solution & Numerical Evaluation: Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: دون مخزن إعادة التجارب، تظهر العينات المتتابعة ارتباطاً زمنياً يفوق $0.92$ مما يسبب تشتت الأوزان؛ بينما يخفض أخذ العينات العشوائية من مخزن بسعة $100,000$ خطوة الارتباط الذاتي إلى $<0.03$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Deep Q-Networks (DQN), Experience Replay & Target Networks.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: دون مخزن إعادة التجارب، تظهر العينات المتتابعة ارتباطاً زمنياً يفوق $0.92$ مما يسبب تشتت الأوزان؛ بينما يخفض أخذ العينات العشوائية من مخزن بسعة $100,000$ خطوة الارتباط الذاتي إلى $<0.03$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch3_hots_24",
      "titleEn": "[HOTS] Policy Gradient Methods & Proximal Policy Optimization (PPO) - Evaluation 24",
      "titleAr": "[تفكير عليا] طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO) - تقييم 24",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Policy Gradient Methods & Proximal Policy Optimization (PPO): (Problem 24)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO): (مسألة 24)",
      "optionsEn": [
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "في تدريب طائرة مسيرة ذاتية بمعامل قص $\\epsilon = 0.20$، أنتج إجراء بميزة موجبة $\\hat{A}_t = +4.5$ نسبة $r_t = 1.35$. وتحدد القيمة المقصوصة بـ $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 5.40$ مما يمنع انهيار السياسة.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse.",
      "correctAnswerEn": "In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse.",
      "correctAnswerAr": "في تدريب طائرة مسيرة ذاتية بمعامل قص $\\epsilon = 0.20$، أنتج إجراء بميزة موجبة $\\hat{A}_t = +4.5$ نسبة $r_t = 1.35$. وتحدد القيمة المقصوصة بـ $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 5.40$ مما يمنع انهيار السياسة.",
      "correctIndex": 1,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في تدريب طائرة مسيرة ذاتية بمعامل قص $\\epsilon = 0.20$، أنتج إجراء بميزة موجبة $\\hat{A}_t = +4.5$ نسبة $r_t = 1.35$. وتحدد القيمة المقصوصة بـ $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 5.40$ مما يمنع انهيار السياسة.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Policy Gradient Methods & Proximal Policy Optimization (PPO).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في تدريب طائرة مسيرة ذاتية بمعامل قص $\\epsilon = 0.20$، أنتج إجراء بميزة موجبة $\\hat{A}_t = +4.5$ نسبة $r_t = 1.35$. وتحدد القيمة المقصوصة بـ $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 5.40$ مما يمنع انهيار السياسة.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch3_hots_25",
      "titleEn": "[HOTS] Markov Decision Processes & Bellman Optimality Equations - Evaluation 25",
      "titleAr": "[تفكير عليا] عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل - تقييم 25",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Markov Decision Processes & Bellman Optimality Equations: (Problem 25)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل: (مسألة 25)",
      "optionsEn": [
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "في مهمة ملاحة روبوت في شبكة بمعامل خصم $\\gamma = 0.90$ ومكافأة $R = +2.0$، وانتقال احتمالي $1.0$ إلى $s'$ بقيم إجراءات قصوى $\\max Q = 10.0$، فإن تحديث بيلمان يعطي $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "correctAnswerEn": "In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "correctAnswerAr": "في مهمة ملاحة روبوت في شبكة بمعامل خصم $\\gamma = 0.90$ ومكافأة $R = +2.0$، وانتقال احتمالي $1.0$ إلى $s'$ بقيم إجراءات قصوى $\\max Q = 10.0$، فإن تحديث بيلمان يعطي $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "correctIndex": 2,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في مهمة ملاحة روبوت في شبكة بمعامل خصم $\\gamma = 0.90$ ومكافأة $R = +2.0$، وانتقال احتمالي $1.0$ إلى $s'$ بقيم إجراءات قصوى $\\max Q = 10.0$، فإن تحديث بيلمان يعطي $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Markov Decision Processes & Bellman Optimality Equations.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في مهمة ملاحة روبوت في شبكة بمعامل خصم $\\gamma = 0.90$ ومكافأة $R = +2.0$، وانتقال احتمالي $1.0$ إلى $s'$ بقيم إجراءات قصوى $\\max Q = 10.0$، فإن تحديث بيلمان يعطي $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch3_hots_26",
      "titleEn": "[HOTS] Deep Q-Networks (DQN), Experience Replay & Target Networks - Evaluation 26",
      "titleAr": "[تفكير عليا] شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف - تقييم 26",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Deep Q-Networks (DQN), Experience Replay & Target Networks: (Problem 26)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف: (مسألة 26)",
      "optionsEn": [
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss."
      ],
      "optionsAr": [
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "دون مخزن إعادة التجارب، تظهر العينات المتتابعة ارتباطاً زمنياً يفوق $0.92$ مما يسبب تشتت الأوزان؛ بينما يخفض أخذ العينات العشوائية من مخزن بسعة $100,000$ خطوة الارتباط الذاتي إلى $<0.03$."
      ],
      "correctAnswer": "Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss.",
      "correctAnswerEn": "Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss.",
      "correctAnswerAr": "دون مخزن إعادة التجارب، تظهر العينات المتتابعة ارتباطاً زمنياً يفوق $0.92$ مما يسبب تشتت الأوزان؛ بينما يخفض أخذ العينات العشوائية من مخزن بسعة $100,000$ خطوة الارتباط الذاتي إلى $<0.03$.",
      "correctIndex": 3,
      "explanationEn": "Detailed Solution & Numerical Evaluation: Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: دون مخزن إعادة التجارب، تظهر العينات المتتابعة ارتباطاً زمنياً يفوق $0.92$ مما يسبب تشتت الأوزان؛ بينما يخفض أخذ العينات العشوائية من مخزن بسعة $100,000$ خطوة الارتباط الذاتي إلى $<0.03$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Deep Q-Networks (DQN), Experience Replay & Target Networks.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: دون مخزن إعادة التجارب، تظهر العينات المتتابعة ارتباطاً زمنياً يفوق $0.92$ مما يسبب تشتت الأوزان؛ بينما يخفض أخذ العينات العشوائية من مخزن بسعة $100,000$ خطوة الارتباط الذاتي إلى $<0.03$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch3_hots_27",
      "titleEn": "[HOTS] Policy Gradient Methods & Proximal Policy Optimization (PPO) - Evaluation 27",
      "titleAr": "[تفكير عليا] طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO) - تقييم 27",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Policy Gradient Methods & Proximal Policy Optimization (PPO): (Problem 27)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO): (مسألة 27)",
      "optionsEn": [
        "In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "في تدريب طائرة مسيرة ذاتية بمعامل قص $\\epsilon = 0.20$، أنتج إجراء بميزة موجبة $\\hat{A}_t = +4.5$ نسبة $r_t = 1.35$. وتحدد القيمة المقصوصة بـ $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 5.40$ مما يمنع انهيار السياسة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse.",
      "correctAnswerEn": "In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse.",
      "correctAnswerAr": "في تدريب طائرة مسيرة ذاتية بمعامل قص $\\epsilon = 0.20$، أنتج إجراء بميزة موجبة $\\hat{A}_t = +4.5$ نسبة $r_t = 1.35$. وتحدد القيمة المقصوصة بـ $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 5.40$ مما يمنع انهيار السياسة.",
      "correctIndex": 0,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في تدريب طائرة مسيرة ذاتية بمعامل قص $\\epsilon = 0.20$، أنتج إجراء بميزة موجبة $\\hat{A}_t = +4.5$ نسبة $r_t = 1.35$. وتحدد القيمة المقصوصة بـ $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 5.40$ مما يمنع انهيار السياسة.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Policy Gradient Methods & Proximal Policy Optimization (PPO).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في تدريب طائرة مسيرة ذاتية بمعامل قص $\\epsilon = 0.20$، أنتج إجراء بميزة موجبة $\\hat{A}_t = +4.5$ نسبة $r_t = 1.35$. وتحدد القيمة المقصوصة بـ $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 5.40$ مما يمنع انهيار السياسة.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch3_hots_28",
      "titleEn": "[HOTS] Markov Decision Processes & Bellman Optimality Equations - Evaluation 28",
      "titleAr": "[تفكير عليا] عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل - تقييم 28",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Markov Decision Processes & Bellman Optimality Equations: (Problem 28)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل: (مسألة 28)",
      "optionsEn": [
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "في مهمة ملاحة روبوت في شبكة بمعامل خصم $\\gamma = 0.90$ ومكافأة $R = +2.0$، وانتقال احتمالي $1.0$ إلى $s'$ بقيم إجراءات قصوى $\\max Q = 10.0$، فإن تحديث بيلمان يعطي $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "correctAnswerEn": "In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "correctAnswerAr": "في مهمة ملاحة روبوت في شبكة بمعامل خصم $\\gamma = 0.90$ ومكافأة $R = +2.0$، وانتقال احتمالي $1.0$ إلى $s'$ بقيم إجراءات قصوى $\\max Q = 10.0$، فإن تحديث بيلمان يعطي $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "correctIndex": 1,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في مهمة ملاحة روبوت في شبكة بمعامل خصم $\\gamma = 0.90$ ومكافأة $R = +2.0$، وانتقال احتمالي $1.0$ إلى $s'$ بقيم إجراءات قصوى $\\max Q = 10.0$، فإن تحديث بيلمان يعطي $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Markov Decision Processes & Bellman Optimality Equations.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في مهمة ملاحة روبوت في شبكة بمعامل خصم $\\gamma = 0.90$ ومكافأة $R = +2.0$، وانتقال احتمالي $1.0$ إلى $s'$ بقيم إجراءات قصوى $\\max Q = 10.0$، فإن تحديث بيلمان يعطي $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch3_hots_29",
      "titleEn": "[HOTS] Deep Q-Networks (DQN), Experience Replay & Target Networks - Evaluation 29",
      "titleAr": "[تفكير عليا] شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف - تقييم 29",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Deep Q-Networks (DQN), Experience Replay & Target Networks: (Problem 29)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف: (مسألة 29)",
      "optionsEn": [
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "دون مخزن إعادة التجارب، تظهر العينات المتتابعة ارتباطاً زمنياً يفوق $0.92$ مما يسبب تشتت الأوزان؛ بينما يخفض أخذ العينات العشوائية من مخزن بسعة $100,000$ خطوة الارتباط الذاتي إلى $<0.03$.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss.",
      "correctAnswerEn": "Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss.",
      "correctAnswerAr": "دون مخزن إعادة التجارب، تظهر العينات المتتابعة ارتباطاً زمنياً يفوق $0.92$ مما يسبب تشتت الأوزان؛ بينما يخفض أخذ العينات العشوائية من مخزن بسعة $100,000$ خطوة الارتباط الذاتي إلى $<0.03$.",
      "correctIndex": 2,
      "explanationEn": "Detailed Solution & Numerical Evaluation: Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: دون مخزن إعادة التجارب، تظهر العينات المتتابعة ارتباطاً زمنياً يفوق $0.92$ مما يسبب تشتت الأوزان؛ بينما يخفض أخذ العينات العشوائية من مخزن بسعة $100,000$ خطوة الارتباط الذاتي إلى $<0.03$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Deep Q-Networks (DQN), Experience Replay & Target Networks.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: دون مخزن إعادة التجارب، تظهر العينات المتتابعة ارتباطاً زمنياً يفوق $0.92$ مما يسبب تشتت الأوزان؛ بينما يخفض أخذ العينات العشوائية من مخزن بسعة $100,000$ خطوة الارتباط الذاتي إلى $<0.03$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch3_hots_30",
      "titleEn": "[HOTS] Policy Gradient Methods & Proximal Policy Optimization (PPO) - Evaluation 30",
      "titleAr": "[تفكير عليا] طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO) - تقييم 30",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Policy Gradient Methods & Proximal Policy Optimization (PPO): (Problem 30)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO): (مسألة 30)",
      "optionsEn": [
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse."
      ],
      "optionsAr": [
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "في تدريب طائرة مسيرة ذاتية بمعامل قص $\\epsilon = 0.20$، أنتج إجراء بميزة موجبة $\\hat{A}_t = +4.5$ نسبة $r_t = 1.35$. وتحدد القيمة المقصوصة بـ $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 5.40$ مما يمنع انهيار السياسة."
      ],
      "correctAnswer": "In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse.",
      "correctAnswerEn": "In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse.",
      "correctAnswerAr": "في تدريب طائرة مسيرة ذاتية بمعامل قص $\\epsilon = 0.20$، أنتج إجراء بميزة موجبة $\\hat{A}_t = +4.5$ نسبة $r_t = 1.35$. وتحدد القيمة المقصوصة بـ $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 5.40$ مما يمنع انهيار السياسة.",
      "correctIndex": 3,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في تدريب طائرة مسيرة ذاتية بمعامل قص $\\epsilon = 0.20$، أنتج إجراء بميزة موجبة $\\hat{A}_t = +4.5$ نسبة $r_t = 1.35$. وتحدد القيمة المقصوصة بـ $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 5.40$ مما يمنع انهيار السياسة.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Policy Gradient Methods & Proximal Policy Optimization (PPO).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في تدريب طائرة مسيرة ذاتية بمعامل قص $\\epsilon = 0.20$، أنتج إجراء بميزة موجبة $\\hat{A}_t = +4.5$ نسبة $r_t = 1.35$. وتحدد القيمة المقصوصة بـ $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 5.40$ مما يمنع انهيار السياسة.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch3_hots_31",
      "titleEn": "[HOTS] Markov Decision Processes & Bellman Optimality Equations - Evaluation 31",
      "titleAr": "[تفكير عليا] عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل - تقييم 31",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Markov Decision Processes & Bellman Optimality Equations: (Problem 31)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل: (مسألة 31)",
      "optionsEn": [
        "In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "في مهمة ملاحة روبوت في شبكة بمعامل خصم $\\gamma = 0.90$ ومكافأة $R = +2.0$، وانتقال احتمالي $1.0$ إلى $s'$ بقيم إجراءات قصوى $\\max Q = 10.0$، فإن تحديث بيلمان يعطي $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "correctAnswerEn": "In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "correctAnswerAr": "في مهمة ملاحة روبوت في شبكة بمعامل خصم $\\gamma = 0.90$ ومكافأة $R = +2.0$، وانتقال احتمالي $1.0$ إلى $s'$ بقيم إجراءات قصوى $\\max Q = 10.0$، فإن تحديث بيلمان يعطي $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "correctIndex": 0,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في مهمة ملاحة روبوت في شبكة بمعامل خصم $\\gamma = 0.90$ ومكافأة $R = +2.0$، وانتقال احتمالي $1.0$ إلى $s'$ بقيم إجراءات قصوى $\\max Q = 10.0$، فإن تحديث بيلمان يعطي $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Markov Decision Processes & Bellman Optimality Equations.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في مهمة ملاحة روبوت في شبكة بمعامل خصم $\\gamma = 0.90$ ومكافأة $R = +2.0$، وانتقال احتمالي $1.0$ إلى $s'$ بقيم إجراءات قصوى $\\max Q = 10.0$، فإن تحديث بيلمان يعطي $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch3_hots_32",
      "titleEn": "[HOTS] Deep Q-Networks (DQN), Experience Replay & Target Networks - Evaluation 32",
      "titleAr": "[تفكير عليا] شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف - تقييم 32",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Deep Q-Networks (DQN), Experience Replay & Target Networks: (Problem 32)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف: (مسألة 32)",
      "optionsEn": [
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "دون مخزن إعادة التجارب، تظهر العينات المتتابعة ارتباطاً زمنياً يفوق $0.92$ مما يسبب تشتت الأوزان؛ بينما يخفض أخذ العينات العشوائية من مخزن بسعة $100,000$ خطوة الارتباط الذاتي إلى $<0.03$.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss.",
      "correctAnswerEn": "Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss.",
      "correctAnswerAr": "دون مخزن إعادة التجارب، تظهر العينات المتتابعة ارتباطاً زمنياً يفوق $0.92$ مما يسبب تشتت الأوزان؛ بينما يخفض أخذ العينات العشوائية من مخزن بسعة $100,000$ خطوة الارتباط الذاتي إلى $<0.03$.",
      "correctIndex": 1,
      "explanationEn": "Detailed Solution & Numerical Evaluation: Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: دون مخزن إعادة التجارب، تظهر العينات المتتابعة ارتباطاً زمنياً يفوق $0.92$ مما يسبب تشتت الأوزان؛ بينما يخفض أخذ العينات العشوائية من مخزن بسعة $100,000$ خطوة الارتباط الذاتي إلى $<0.03$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Deep Q-Networks (DQN), Experience Replay & Target Networks.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: دون مخزن إعادة التجارب، تظهر العينات المتتابعة ارتباطاً زمنياً يفوق $0.92$ مما يسبب تشتت الأوزان؛ بينما يخفض أخذ العينات العشوائية من مخزن بسعة $100,000$ خطوة الارتباط الذاتي إلى $<0.03$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch3_hots_33",
      "titleEn": "[HOTS] Policy Gradient Methods & Proximal Policy Optimization (PPO) - Evaluation 33",
      "titleAr": "[تفكير عليا] طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO) - تقييم 33",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Policy Gradient Methods & Proximal Policy Optimization (PPO): (Problem 33)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO): (مسألة 33)",
      "optionsEn": [
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "في تدريب طائرة مسيرة ذاتية بمعامل قص $\\epsilon = 0.20$، أنتج إجراء بميزة موجبة $\\hat{A}_t = +4.5$ نسبة $r_t = 1.35$. وتحدد القيمة المقصوصة بـ $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 5.40$ مما يمنع انهيار السياسة.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse.",
      "correctAnswerEn": "In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse.",
      "correctAnswerAr": "في تدريب طائرة مسيرة ذاتية بمعامل قص $\\epsilon = 0.20$، أنتج إجراء بميزة موجبة $\\hat{A}_t = +4.5$ نسبة $r_t = 1.35$. وتحدد القيمة المقصوصة بـ $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 5.40$ مما يمنع انهيار السياسة.",
      "correctIndex": 2,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في تدريب طائرة مسيرة ذاتية بمعامل قص $\\epsilon = 0.20$، أنتج إجراء بميزة موجبة $\\hat{A}_t = +4.5$ نسبة $r_t = 1.35$. وتحدد القيمة المقصوصة بـ $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 5.40$ مما يمنع انهيار السياسة.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Policy Gradient Methods & Proximal Policy Optimization (PPO).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في تدريب طائرة مسيرة ذاتية بمعامل قص $\\epsilon = 0.20$، أنتج إجراء بميزة موجبة $\\hat{A}_t = +4.5$ نسبة $r_t = 1.35$. وتحدد القيمة المقصوصة بـ $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 5.40$ مما يمنع انهيار السياسة.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch3_hots_34",
      "titleEn": "[HOTS] Markov Decision Processes & Bellman Optimality Equations - Evaluation 34",
      "titleAr": "[تفكير عليا] عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل - تقييم 34",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Markov Decision Processes & Bellman Optimality Equations: (Problem 34)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل: (مسألة 34)",
      "optionsEn": [
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$."
      ],
      "optionsAr": [
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "في مهمة ملاحة روبوت في شبكة بمعامل خصم $\\gamma = 0.90$ ومكافأة $R = +2.0$، وانتقال احتمالي $1.0$ إلى $s'$ بقيم إجراءات قصوى $\\max Q = 10.0$، فإن تحديث بيلمان يعطي $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$."
      ],
      "correctAnswer": "In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "correctAnswerEn": "In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "correctAnswerAr": "في مهمة ملاحة روبوت في شبكة بمعامل خصم $\\gamma = 0.90$ ومكافأة $R = +2.0$، وانتقال احتمالي $1.0$ إلى $s'$ بقيم إجراءات قصوى $\\max Q = 10.0$، فإن تحديث بيلمان يعطي $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "correctIndex": 3,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في مهمة ملاحة روبوت في شبكة بمعامل خصم $\\gamma = 0.90$ ومكافأة $R = +2.0$، وانتقال احتمالي $1.0$ إلى $s'$ بقيم إجراءات قصوى $\\max Q = 10.0$، فإن تحديث بيلمان يعطي $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Markov Decision Processes & Bellman Optimality Equations.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في مهمة ملاحة روبوت في شبكة بمعامل خصم $\\gamma = 0.90$ ومكافأة $R = +2.0$، وانتقال احتمالي $1.0$ إلى $s'$ بقيم إجراءات قصوى $\\max Q = 10.0$، فإن تحديث بيلمان يعطي $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch3_hots_35",
      "titleEn": "[HOTS] Deep Q-Networks (DQN), Experience Replay & Target Networks - Evaluation 35",
      "titleAr": "[تفكير عليا] شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف - تقييم 35",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Deep Q-Networks (DQN), Experience Replay & Target Networks: (Problem 35)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف: (مسألة 35)",
      "optionsEn": [
        "Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "دون مخزن إعادة التجارب، تظهر العينات المتتابعة ارتباطاً زمنياً يفوق $0.92$ مما يسبب تشتت الأوزان؛ بينما يخفض أخذ العينات العشوائية من مخزن بسعة $100,000$ خطوة الارتباط الذاتي إلى $<0.03$.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss.",
      "correctAnswerEn": "Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss.",
      "correctAnswerAr": "دون مخزن إعادة التجارب، تظهر العينات المتتابعة ارتباطاً زمنياً يفوق $0.92$ مما يسبب تشتت الأوزان؛ بينما يخفض أخذ العينات العشوائية من مخزن بسعة $100,000$ خطوة الارتباط الذاتي إلى $<0.03$.",
      "correctIndex": 0,
      "explanationEn": "Detailed Solution & Numerical Evaluation: Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: دون مخزن إعادة التجارب، تظهر العينات المتتابعة ارتباطاً زمنياً يفوق $0.92$ مما يسبب تشتت الأوزان؛ بينما يخفض أخذ العينات العشوائية من مخزن بسعة $100,000$ خطوة الارتباط الذاتي إلى $<0.03$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Deep Q-Networks (DQN), Experience Replay & Target Networks.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: دون مخزن إعادة التجارب، تظهر العينات المتتابعة ارتباطاً زمنياً يفوق $0.92$ مما يسبب تشتت الأوزان؛ بينما يخفض أخذ العينات العشوائية من مخزن بسعة $100,000$ خطوة الارتباط الذاتي إلى $<0.03$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch3_hots_36",
      "titleEn": "[HOTS] Policy Gradient Methods & Proximal Policy Optimization (PPO) - Evaluation 36",
      "titleAr": "[تفكير عليا] طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO) - تقييم 36",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Policy Gradient Methods & Proximal Policy Optimization (PPO): (Problem 36)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO): (مسألة 36)",
      "optionsEn": [
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "في تدريب طائرة مسيرة ذاتية بمعامل قص $\\epsilon = 0.20$، أنتج إجراء بميزة موجبة $\\hat{A}_t = +4.5$ نسبة $r_t = 1.35$. وتحدد القيمة المقصوصة بـ $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 5.40$ مما يمنع انهيار السياسة.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse.",
      "correctAnswerEn": "In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse.",
      "correctAnswerAr": "في تدريب طائرة مسيرة ذاتية بمعامل قص $\\epsilon = 0.20$، أنتج إجراء بميزة موجبة $\\hat{A}_t = +4.5$ نسبة $r_t = 1.35$. وتحدد القيمة المقصوصة بـ $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 5.40$ مما يمنع انهيار السياسة.",
      "correctIndex": 1,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في تدريب طائرة مسيرة ذاتية بمعامل قص $\\epsilon = 0.20$، أنتج إجراء بميزة موجبة $\\hat{A}_t = +4.5$ نسبة $r_t = 1.35$. وتحدد القيمة المقصوصة بـ $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 5.40$ مما يمنع انهيار السياسة.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Policy Gradient Methods & Proximal Policy Optimization (PPO).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في تدريب طائرة مسيرة ذاتية بمعامل قص $\\epsilon = 0.20$، أنتج إجراء بميزة موجبة $\\hat{A}_t = +4.5$ نسبة $r_t = 1.35$. وتحدد القيمة المقصوصة بـ $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 5.40$ مما يمنع انهيار السياسة.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch3_hots_37",
      "titleEn": "[HOTS] Markov Decision Processes & Bellman Optimality Equations - Evaluation 37",
      "titleAr": "[تفكير عليا] عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل - تقييم 37",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Markov Decision Processes & Bellman Optimality Equations: (Problem 37)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل: (مسألة 37)",
      "optionsEn": [
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "في مهمة ملاحة روبوت في شبكة بمعامل خصم $\\gamma = 0.90$ ومكافأة $R = +2.0$، وانتقال احتمالي $1.0$ إلى $s'$ بقيم إجراءات قصوى $\\max Q = 10.0$، فإن تحديث بيلمان يعطي $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "correctAnswerEn": "In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "correctAnswerAr": "في مهمة ملاحة روبوت في شبكة بمعامل خصم $\\gamma = 0.90$ ومكافأة $R = +2.0$، وانتقال احتمالي $1.0$ إلى $s'$ بقيم إجراءات قصوى $\\max Q = 10.0$، فإن تحديث بيلمان يعطي $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "correctIndex": 2,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في مهمة ملاحة روبوت في شبكة بمعامل خصم $\\gamma = 0.90$ ومكافأة $R = +2.0$، وانتقال احتمالي $1.0$ إلى $s'$ بقيم إجراءات قصوى $\\max Q = 10.0$، فإن تحديث بيلمان يعطي $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Markov Decision Processes & Bellman Optimality Equations.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في مهمة ملاحة روبوت في شبكة بمعامل خصم $\\gamma = 0.90$ ومكافأة $R = +2.0$، وانتقال احتمالي $1.0$ إلى $s'$ بقيم إجراءات قصوى $\\max Q = 10.0$، فإن تحديث بيلمان يعطي $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch3_hots_38",
      "titleEn": "[HOTS] Deep Q-Networks (DQN), Experience Replay & Target Networks - Evaluation 38",
      "titleAr": "[تفكير عليا] شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف - تقييم 38",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Deep Q-Networks (DQN), Experience Replay & Target Networks: (Problem 38)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف: (مسألة 38)",
      "optionsEn": [
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss."
      ],
      "optionsAr": [
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "دون مخزن إعادة التجارب، تظهر العينات المتتابعة ارتباطاً زمنياً يفوق $0.92$ مما يسبب تشتت الأوزان؛ بينما يخفض أخذ العينات العشوائية من مخزن بسعة $100,000$ خطوة الارتباط الذاتي إلى $<0.03$."
      ],
      "correctAnswer": "Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss.",
      "correctAnswerEn": "Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss.",
      "correctAnswerAr": "دون مخزن إعادة التجارب، تظهر العينات المتتابعة ارتباطاً زمنياً يفوق $0.92$ مما يسبب تشتت الأوزان؛ بينما يخفض أخذ العينات العشوائية من مخزن بسعة $100,000$ خطوة الارتباط الذاتي إلى $<0.03$.",
      "correctIndex": 3,
      "explanationEn": "Detailed Solution & Numerical Evaluation: Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: دون مخزن إعادة التجارب، تظهر العينات المتتابعة ارتباطاً زمنياً يفوق $0.92$ مما يسبب تشتت الأوزان؛ بينما يخفض أخذ العينات العشوائية من مخزن بسعة $100,000$ خطوة الارتباط الذاتي إلى $<0.03$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Deep Q-Networks (DQN), Experience Replay & Target Networks.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: دون مخزن إعادة التجارب، تظهر العينات المتتابعة ارتباطاً زمنياً يفوق $0.92$ مما يسبب تشتت الأوزان؛ بينما يخفض أخذ العينات العشوائية من مخزن بسعة $100,000$ خطوة الارتباط الذاتي إلى $<0.03$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch3_hots_39",
      "titleEn": "[HOTS] Policy Gradient Methods & Proximal Policy Optimization (PPO) - Evaluation 39",
      "titleAr": "[تفكير عليا] طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO) - تقييم 39",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Policy Gradient Methods & Proximal Policy Optimization (PPO): (Problem 39)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO): (مسألة 39)",
      "optionsEn": [
        "In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "في تدريب طائرة مسيرة ذاتية بمعامل قص $\\epsilon = 0.20$، أنتج إجراء بميزة موجبة $\\hat{A}_t = +4.5$ نسبة $r_t = 1.35$. وتحدد القيمة المقصوصة بـ $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 5.40$ مما يمنع انهيار السياسة.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse.",
      "correctAnswerEn": "In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse.",
      "correctAnswerAr": "في تدريب طائرة مسيرة ذاتية بمعامل قص $\\epsilon = 0.20$، أنتج إجراء بميزة موجبة $\\hat{A}_t = +4.5$ نسبة $r_t = 1.35$. وتحدد القيمة المقصوصة بـ $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 5.40$ مما يمنع انهيار السياسة.",
      "correctIndex": 0,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في تدريب طائرة مسيرة ذاتية بمعامل قص $\\epsilon = 0.20$، أنتج إجراء بميزة موجبة $\\hat{A}_t = +4.5$ نسبة $r_t = 1.35$. وتحدد القيمة المقصوصة بـ $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 5.40$ مما يمنع انهيار السياسة.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Policy Gradient Methods & Proximal Policy Optimization (PPO).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في تدريب طائرة مسيرة ذاتية بمعامل قص $\\epsilon = 0.20$، أنتج إجراء بميزة موجبة $\\hat{A}_t = +4.5$ نسبة $r_t = 1.35$. وتحدد القيمة المقصوصة بـ $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 5.40$ مما يمنع انهيار السياسة.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch3_hots_40",
      "titleEn": "[HOTS] Markov Decision Processes & Bellman Optimality Equations - Evaluation 40",
      "titleAr": "[تفكير عليا] عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل - تقييم 40",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Markov Decision Processes & Bellman Optimality Equations: (Problem 40)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل: (مسألة 40)",
      "optionsEn": [
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "في مهمة ملاحة روبوت في شبكة بمعامل خصم $\\gamma = 0.90$ ومكافأة $R = +2.0$، وانتقال احتمالي $1.0$ إلى $s'$ بقيم إجراءات قصوى $\\max Q = 10.0$، فإن تحديث بيلمان يعطي $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "correctAnswerEn": "In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "correctAnswerAr": "في مهمة ملاحة روبوت في شبكة بمعامل خصم $\\gamma = 0.90$ ومكافأة $R = +2.0$، وانتقال احتمالي $1.0$ إلى $s'$ بقيم إجراءات قصوى $\\max Q = 10.0$، فإن تحديث بيلمان يعطي $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "correctIndex": 1,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في مهمة ملاحة روبوت في شبكة بمعامل خصم $\\gamma = 0.90$ ومكافأة $R = +2.0$، وانتقال احتمالي $1.0$ إلى $s'$ بقيم إجراءات قصوى $\\max Q = 10.0$، فإن تحديث بيلمان يعطي $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Markov Decision Processes & Bellman Optimality Equations.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في مهمة ملاحة روبوت في شبكة بمعامل خصم $\\gamma = 0.90$ ومكافأة $R = +2.0$، وانتقال احتمالي $1.0$ إلى $s'$ بقيم إجراءات قصوى $\\max Q = 10.0$، فإن تحديث بيلمان يعطي $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch3_hots_41",
      "titleEn": "[HOTS] Deep Q-Networks (DQN), Experience Replay & Target Networks - Evaluation 41",
      "titleAr": "[تفكير عليا] شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف - تقييم 41",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Deep Q-Networks (DQN), Experience Replay & Target Networks: (Problem 41)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف: (مسألة 41)",
      "optionsEn": [
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "دون مخزن إعادة التجارب، تظهر العينات المتتابعة ارتباطاً زمنياً يفوق $0.92$ مما يسبب تشتت الأوزان؛ بينما يخفض أخذ العينات العشوائية من مخزن بسعة $100,000$ خطوة الارتباط الذاتي إلى $<0.03$.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss.",
      "correctAnswerEn": "Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss.",
      "correctAnswerAr": "دون مخزن إعادة التجارب، تظهر العينات المتتابعة ارتباطاً زمنياً يفوق $0.92$ مما يسبب تشتت الأوزان؛ بينما يخفض أخذ العينات العشوائية من مخزن بسعة $100,000$ خطوة الارتباط الذاتي إلى $<0.03$.",
      "correctIndex": 2,
      "explanationEn": "Detailed Solution & Numerical Evaluation: Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: دون مخزن إعادة التجارب، تظهر العينات المتتابعة ارتباطاً زمنياً يفوق $0.92$ مما يسبب تشتت الأوزان؛ بينما يخفض أخذ العينات العشوائية من مخزن بسعة $100,000$ خطوة الارتباط الذاتي إلى $<0.03$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Deep Q-Networks (DQN), Experience Replay & Target Networks.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: دون مخزن إعادة التجارب، تظهر العينات المتتابعة ارتباطاً زمنياً يفوق $0.92$ مما يسبب تشتت الأوزان؛ بينما يخفض أخذ العينات العشوائية من مخزن بسعة $100,000$ خطوة الارتباط الذاتي إلى $<0.03$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch3_hots_42",
      "titleEn": "[HOTS] Policy Gradient Methods & Proximal Policy Optimization (PPO) - Evaluation 42",
      "titleAr": "[تفكير عليا] طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO) - تقييم 42",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Policy Gradient Methods & Proximal Policy Optimization (PPO): (Problem 42)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO): (مسألة 42)",
      "optionsEn": [
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse."
      ],
      "optionsAr": [
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "في تدريب طائرة مسيرة ذاتية بمعامل قص $\\epsilon = 0.20$، أنتج إجراء بميزة موجبة $\\hat{A}_t = +4.5$ نسبة $r_t = 1.35$. وتحدد القيمة المقصوصة بـ $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 5.40$ مما يمنع انهيار السياسة."
      ],
      "correctAnswer": "In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse.",
      "correctAnswerEn": "In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse.",
      "correctAnswerAr": "في تدريب طائرة مسيرة ذاتية بمعامل قص $\\epsilon = 0.20$، أنتج إجراء بميزة موجبة $\\hat{A}_t = +4.5$ نسبة $r_t = 1.35$. وتحدد القيمة المقصوصة بـ $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 5.40$ مما يمنع انهيار السياسة.",
      "correctIndex": 3,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في تدريب طائرة مسيرة ذاتية بمعامل قص $\\epsilon = 0.20$، أنتج إجراء بميزة موجبة $\\hat{A}_t = +4.5$ نسبة $r_t = 1.35$. وتحدد القيمة المقصوصة بـ $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 5.40$ مما يمنع انهيار السياسة.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Policy Gradient Methods & Proximal Policy Optimization (PPO).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في تدريب طائرة مسيرة ذاتية بمعامل قص $\\epsilon = 0.20$، أنتج إجراء بميزة موجبة $\\hat{A}_t = +4.5$ نسبة $r_t = 1.35$. وتحدد القيمة المقصوصة بـ $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 5.40$ مما يمنع انهيار السياسة.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch3_hots_43",
      "titleEn": "[HOTS] Markov Decision Processes & Bellman Optimality Equations - Evaluation 43",
      "titleAr": "[تفكير عليا] عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل - تقييم 43",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Markov Decision Processes & Bellman Optimality Equations: (Problem 43)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل: (مسألة 43)",
      "optionsEn": [
        "In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "في مهمة ملاحة روبوت في شبكة بمعامل خصم $\\gamma = 0.90$ ومكافأة $R = +2.0$، وانتقال احتمالي $1.0$ إلى $s'$ بقيم إجراءات قصوى $\\max Q = 10.0$، فإن تحديث بيلمان يعطي $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "correctAnswerEn": "In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "correctAnswerAr": "في مهمة ملاحة روبوت في شبكة بمعامل خصم $\\gamma = 0.90$ ومكافأة $R = +2.0$، وانتقال احتمالي $1.0$ إلى $s'$ بقيم إجراءات قصوى $\\max Q = 10.0$، فإن تحديث بيلمان يعطي $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "correctIndex": 0,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في مهمة ملاحة روبوت في شبكة بمعامل خصم $\\gamma = 0.90$ ومكافأة $R = +2.0$، وانتقال احتمالي $1.0$ إلى $s'$ بقيم إجراءات قصوى $\\max Q = 10.0$، فإن تحديث بيلمان يعطي $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Markov Decision Processes & Bellman Optimality Equations.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في مهمة ملاحة روبوت في شبكة بمعامل خصم $\\gamma = 0.90$ ومكافأة $R = +2.0$، وانتقال احتمالي $1.0$ إلى $s'$ بقيم إجراءات قصوى $\\max Q = 10.0$، فإن تحديث بيلمان يعطي $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch3_hots_44",
      "titleEn": "[HOTS] Deep Q-Networks (DQN), Experience Replay & Target Networks - Evaluation 44",
      "titleAr": "[تفكير عليا] شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف - تقييم 44",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Deep Q-Networks (DQN), Experience Replay & Target Networks: (Problem 44)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف: (مسألة 44)",
      "optionsEn": [
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "دون مخزن إعادة التجارب، تظهر العينات المتتابعة ارتباطاً زمنياً يفوق $0.92$ مما يسبب تشتت الأوزان؛ بينما يخفض أخذ العينات العشوائية من مخزن بسعة $100,000$ خطوة الارتباط الذاتي إلى $<0.03$.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss.",
      "correctAnswerEn": "Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss.",
      "correctAnswerAr": "دون مخزن إعادة التجارب، تظهر العينات المتتابعة ارتباطاً زمنياً يفوق $0.92$ مما يسبب تشتت الأوزان؛ بينما يخفض أخذ العينات العشوائية من مخزن بسعة $100,000$ خطوة الارتباط الذاتي إلى $<0.03$.",
      "correctIndex": 1,
      "explanationEn": "Detailed Solution & Numerical Evaluation: Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: دون مخزن إعادة التجارب، تظهر العينات المتتابعة ارتباطاً زمنياً يفوق $0.92$ مما يسبب تشتت الأوزان؛ بينما يخفض أخذ العينات العشوائية من مخزن بسعة $100,000$ خطوة الارتباط الذاتي إلى $<0.03$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Deep Q-Networks (DQN), Experience Replay & Target Networks.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: دون مخزن إعادة التجارب، تظهر العينات المتتابعة ارتباطاً زمنياً يفوق $0.92$ مما يسبب تشتت الأوزان؛ بينما يخفض أخذ العينات العشوائية من مخزن بسعة $100,000$ خطوة الارتباط الذاتي إلى $<0.03$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch3_hots_45",
      "titleEn": "[HOTS] Policy Gradient Methods & Proximal Policy Optimization (PPO) - Evaluation 45",
      "titleAr": "[تفكير عليا] طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO) - تقييم 45",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Policy Gradient Methods & Proximal Policy Optimization (PPO): (Problem 45)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO): (مسألة 45)",
      "optionsEn": [
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "في تدريب طائرة مسيرة ذاتية بمعامل قص $\\epsilon = 0.20$، أنتج إجراء بميزة موجبة $\\hat{A}_t = +4.5$ نسبة $r_t = 1.35$. وتحدد القيمة المقصوصة بـ $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 5.40$ مما يمنع انهيار السياسة.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse.",
      "correctAnswerEn": "In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse.",
      "correctAnswerAr": "في تدريب طائرة مسيرة ذاتية بمعامل قص $\\epsilon = 0.20$، أنتج إجراء بميزة موجبة $\\hat{A}_t = +4.5$ نسبة $r_t = 1.35$. وتحدد القيمة المقصوصة بـ $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 5.40$ مما يمنع انهيار السياسة.",
      "correctIndex": 2,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في تدريب طائرة مسيرة ذاتية بمعامل قص $\\epsilon = 0.20$، أنتج إجراء بميزة موجبة $\\hat{A}_t = +4.5$ نسبة $r_t = 1.35$. وتحدد القيمة المقصوصة بـ $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 5.40$ مما يمنع انهيار السياسة.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Policy Gradient Methods & Proximal Policy Optimization (PPO).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في تدريب طائرة مسيرة ذاتية بمعامل قص $\\epsilon = 0.20$، أنتج إجراء بميزة موجبة $\\hat{A}_t = +4.5$ نسبة $r_t = 1.35$. وتحدد القيمة المقصوصة بـ $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 5.40$ مما يمنع انهيار السياسة.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch3_hots_46",
      "titleEn": "[HOTS] Markov Decision Processes & Bellman Optimality Equations - Evaluation 46",
      "titleAr": "[تفكير عليا] عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل - تقييم 46",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Markov Decision Processes & Bellman Optimality Equations: (Problem 46)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل: (مسألة 46)",
      "optionsEn": [
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$."
      ],
      "optionsAr": [
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "في مهمة ملاحة روبوت في شبكة بمعامل خصم $\\gamma = 0.90$ ومكافأة $R = +2.0$، وانتقال احتمالي $1.0$ إلى $s'$ بقيم إجراءات قصوى $\\max Q = 10.0$، فإن تحديث بيلمان يعطي $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$."
      ],
      "correctAnswer": "In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "correctAnswerEn": "In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "correctAnswerAr": "في مهمة ملاحة روبوت في شبكة بمعامل خصم $\\gamma = 0.90$ ومكافأة $R = +2.0$، وانتقال احتمالي $1.0$ إلى $s'$ بقيم إجراءات قصوى $\\max Q = 10.0$، فإن تحديث بيلمان يعطي $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "correctIndex": 3,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في مهمة ملاحة روبوت في شبكة بمعامل خصم $\\gamma = 0.90$ ومكافأة $R = +2.0$، وانتقال احتمالي $1.0$ إلى $s'$ بقيم إجراءات قصوى $\\max Q = 10.0$، فإن تحديث بيلمان يعطي $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Markov Decision Processes & Bellman Optimality Equations.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في مهمة ملاحة روبوت في شبكة بمعامل خصم $\\gamma = 0.90$ ومكافأة $R = +2.0$، وانتقال احتمالي $1.0$ إلى $s'$ بقيم إجراءات قصوى $\\max Q = 10.0$، فإن تحديث بيلمان يعطي $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch3_hots_47",
      "titleEn": "[HOTS] Deep Q-Networks (DQN), Experience Replay & Target Networks - Evaluation 47",
      "titleAr": "[تفكير عليا] شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف - تقييم 47",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Deep Q-Networks (DQN), Experience Replay & Target Networks: (Problem 47)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف: (مسألة 47)",
      "optionsEn": [
        "Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "دون مخزن إعادة التجارب، تظهر العينات المتتابعة ارتباطاً زمنياً يفوق $0.92$ مما يسبب تشتت الأوزان؛ بينما يخفض أخذ العينات العشوائية من مخزن بسعة $100,000$ خطوة الارتباط الذاتي إلى $<0.03$.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss.",
      "correctAnswerEn": "Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss.",
      "correctAnswerAr": "دون مخزن إعادة التجارب، تظهر العينات المتتابعة ارتباطاً زمنياً يفوق $0.92$ مما يسبب تشتت الأوزان؛ بينما يخفض أخذ العينات العشوائية من مخزن بسعة $100,000$ خطوة الارتباط الذاتي إلى $<0.03$.",
      "correctIndex": 0,
      "explanationEn": "Detailed Solution & Numerical Evaluation: Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: دون مخزن إعادة التجارب، تظهر العينات المتتابعة ارتباطاً زمنياً يفوق $0.92$ مما يسبب تشتت الأوزان؛ بينما يخفض أخذ العينات العشوائية من مخزن بسعة $100,000$ خطوة الارتباط الذاتي إلى $<0.03$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Deep Q-Networks (DQN), Experience Replay & Target Networks.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: دون مخزن إعادة التجارب، تظهر العينات المتتابعة ارتباطاً زمنياً يفوق $0.92$ مما يسبب تشتت الأوزان؛ بينما يخفض أخذ العينات العشوائية من مخزن بسعة $100,000$ خطوة الارتباط الذاتي إلى $<0.03$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch3_hots_48",
      "titleEn": "[HOTS] Policy Gradient Methods & Proximal Policy Optimization (PPO) - Evaluation 48",
      "titleAr": "[تفكير عليا] طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO) - تقييم 48",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Policy Gradient Methods & Proximal Policy Optimization (PPO): (Problem 48)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO): (مسألة 48)",
      "optionsEn": [
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "في تدريب طائرة مسيرة ذاتية بمعامل قص $\\epsilon = 0.20$، أنتج إجراء بميزة موجبة $\\hat{A}_t = +4.5$ نسبة $r_t = 1.35$. وتحدد القيمة المقصوصة بـ $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 5.40$ مما يمنع انهيار السياسة.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse.",
      "correctAnswerEn": "In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse.",
      "correctAnswerAr": "في تدريب طائرة مسيرة ذاتية بمعامل قص $\\epsilon = 0.20$، أنتج إجراء بميزة موجبة $\\hat{A}_t = +4.5$ نسبة $r_t = 1.35$. وتحدد القيمة المقصوصة بـ $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 5.40$ مما يمنع انهيار السياسة.",
      "correctIndex": 1,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في تدريب طائرة مسيرة ذاتية بمعامل قص $\\epsilon = 0.20$، أنتج إجراء بميزة موجبة $\\hat{A}_t = +4.5$ نسبة $r_t = 1.35$. وتحدد القيمة المقصوصة بـ $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 5.40$ مما يمنع انهيار السياسة.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Policy Gradient Methods & Proximal Policy Optimization (PPO).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في تدريب طائرة مسيرة ذاتية بمعامل قص $\\epsilon = 0.20$، أنتج إجراء بميزة موجبة $\\hat{A}_t = +4.5$ نسبة $r_t = 1.35$. وتحدد القيمة المقصوصة بـ $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 5.40$ مما يمنع انهيار السياسة.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch3_hots_49",
      "titleEn": "[HOTS] Markov Decision Processes & Bellman Optimality Equations - Evaluation 49",
      "titleAr": "[تفكير عليا] عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل - تقييم 49",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Markov Decision Processes & Bellman Optimality Equations: (Problem 49)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل: (مسألة 49)",
      "optionsEn": [
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting."
      ],
      "optionsAr": [
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "في مهمة ملاحة روبوت في شبكة بمعامل خصم $\\gamma = 0.90$ ومكافأة $R = +2.0$، وانتقال احتمالي $1.0$ إلى $s'$ بقيم إجراءات قصوى $\\max Q = 10.0$، فإن تحديث بيلمان يعطي $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي."
      ],
      "correctAnswer": "In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "correctAnswerEn": "In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "correctAnswerAr": "في مهمة ملاحة روبوت في شبكة بمعامل خصم $\\gamma = 0.90$ ومكافأة $R = +2.0$، وانتقال احتمالي $1.0$ إلى $s'$ بقيم إجراءات قصوى $\\max Q = 10.0$، فإن تحديث بيلمان يعطي $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "correctIndex": 2,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في مهمة ملاحة روبوت في شبكة بمعامل خصم $\\gamma = 0.90$ ومكافأة $R = +2.0$، وانتقال احتمالي $1.0$ إلى $s'$ بقيم إجراءات قصوى $\\max Q = 10.0$، فإن تحديث بيلمان يعطي $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Markov Decision Processes & Bellman Optimality Equations.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في مهمة ملاحة روبوت في شبكة بمعامل خصم $\\gamma = 0.90$ ومكافأة $R = +2.0$، وانتقال احتمالي $1.0$ إلى $s'$ بقيم إجراءات قصوى $\\max Q = 10.0$، فإن تحديث بيلمان يعطي $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch3_hots_50",
      "titleEn": "[HOTS] Deep Q-Networks (DQN), Experience Replay & Target Networks - Evaluation 50",
      "titleAr": "[تفكير عليا] شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف - تقييم 50",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Deep Q-Networks (DQN), Experience Replay & Target Networks: (Problem 50)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف: (مسألة 50)",
      "optionsEn": [
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss."
      ],
      "optionsAr": [
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "دون مخزن إعادة التجارب، تظهر العينات المتتابعة ارتباطاً زمنياً يفوق $0.92$ مما يسبب تشتت الأوزان؛ بينما يخفض أخذ العينات العشوائية من مخزن بسعة $100,000$ خطوة الارتباط الذاتي إلى $<0.03$."
      ],
      "correctAnswer": "Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss.",
      "correctAnswerEn": "Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss.",
      "correctAnswerAr": "دون مخزن إعادة التجارب، تظهر العينات المتتابعة ارتباطاً زمنياً يفوق $0.92$ مما يسبب تشتت الأوزان؛ بينما يخفض أخذ العينات العشوائية من مخزن بسعة $100,000$ خطوة الارتباط الذاتي إلى $<0.03$.",
      "correctIndex": 3,
      "explanationEn": "Detailed Solution & Numerical Evaluation: Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: دون مخزن إعادة التجارب، تظهر العينات المتتابعة ارتباطاً زمنياً يفوق $0.92$ مما يسبب تشتت الأوزان؛ بينما يخفض أخذ العينات العشوائية من مخزن بسعة $100,000$ خطوة الارتباط الذاتي إلى $<0.03$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Deep Q-Networks (DQN), Experience Replay & Target Networks.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: دون مخزن إعادة التجارب، تظهر العينات المتتابعة ارتباطاً زمنياً يفوق $0.92$ مما يسبب تشتت الأوزان؛ بينما يخفض أخذ العينات العشوائية من مخزن بسعة $100,000$ خطوة الارتباط الذاتي إلى $<0.03$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch3_hots_51",
      "titleEn": "[HOTS] Policy Gradient Methods & Proximal Policy Optimization (PPO) - Evaluation 51",
      "titleAr": "[تفكير عليا] طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO) - تقييم 51",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Policy Gradient Methods & Proximal Policy Optimization (PPO): (Problem 51)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO): (مسألة 51)",
      "optionsEn": [
        "In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "في تدريب طائرة مسيرة ذاتية بمعامل قص $\\epsilon = 0.20$، أنتج إجراء بميزة موجبة $\\hat{A}_t = +4.5$ نسبة $r_t = 1.35$. وتحدد القيمة المقصوصة بـ $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 5.40$ مما يمنع انهيار السياسة.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse.",
      "correctAnswerEn": "In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse.",
      "correctAnswerAr": "في تدريب طائرة مسيرة ذاتية بمعامل قص $\\epsilon = 0.20$، أنتج إجراء بميزة موجبة $\\hat{A}_t = +4.5$ نسبة $r_t = 1.35$. وتحدد القيمة المقصوصة بـ $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 5.40$ مما يمنع انهيار السياسة.",
      "correctIndex": 0,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في تدريب طائرة مسيرة ذاتية بمعامل قص $\\epsilon = 0.20$، أنتج إجراء بميزة موجبة $\\hat{A}_t = +4.5$ نسبة $r_t = 1.35$. وتحدد القيمة المقصوصة بـ $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 5.40$ مما يمنع انهيار السياسة.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Policy Gradient Methods & Proximal Policy Optimization (PPO).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في تدريب طائرة مسيرة ذاتية بمعامل قص $\\epsilon = 0.20$، أنتج إجراء بميزة موجبة $\\hat{A}_t = +4.5$ نسبة $r_t = 1.35$. وتحدد القيمة المقصوصة بـ $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 5.40$ مما يمنع انهيار السياسة.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch3_hots_52",
      "titleEn": "[HOTS] Markov Decision Processes & Bellman Optimality Equations - Evaluation 52",
      "titleAr": "[تفكير عليا] عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل - تقييم 52",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Markov Decision Processes & Bellman Optimality Equations: (Problem 52)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل: (مسألة 52)",
      "optionsEn": [
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "في مهمة ملاحة روبوت في شبكة بمعامل خصم $\\gamma = 0.90$ ومكافأة $R = +2.0$، وانتقال احتمالي $1.0$ إلى $s'$ بقيم إجراءات قصوى $\\max Q = 10.0$، فإن تحديث بيلمان يعطي $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "correctAnswerEn": "In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "correctAnswerAr": "في مهمة ملاحة روبوت في شبكة بمعامل خصم $\\gamma = 0.90$ ومكافأة $R = +2.0$، وانتقال احتمالي $1.0$ إلى $s'$ بقيم إجراءات قصوى $\\max Q = 10.0$، فإن تحديث بيلمان يعطي $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "correctIndex": 1,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في مهمة ملاحة روبوت في شبكة بمعامل خصم $\\gamma = 0.90$ ومكافأة $R = +2.0$، وانتقال احتمالي $1.0$ إلى $s'$ بقيم إجراءات قصوى $\\max Q = 10.0$، فإن تحديث بيلمان يعطي $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Markov Decision Processes & Bellman Optimality Equations.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في مهمة ملاحة روبوت في شبكة بمعامل خصم $\\gamma = 0.90$ ومكافأة $R = +2.0$، وانتقال احتمالي $1.0$ إلى $s'$ بقيم إجراءات قصوى $\\max Q = 10.0$، فإن تحديث بيلمان يعطي $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch3_hots_53",
      "titleEn": "[HOTS] Deep Q-Networks (DQN), Experience Replay & Target Networks - Evaluation 53",
      "titleAr": "[تفكير عليا] شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف - تقييم 53",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Deep Q-Networks (DQN), Experience Replay & Target Networks: (Problem 53)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف: (مسألة 53)",
      "optionsEn": [
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained."
      ],
      "optionsAr": [
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "دون مخزن إعادة التجارب، تظهر العينات المتتابعة ارتباطاً زمنياً يفوق $0.92$ مما يسبب تشتت الأوزان؛ بينما يخفض أخذ العينات العشوائية من مخزن بسعة $100,000$ خطوة الارتباط الذاتي إلى $<0.03$.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً."
      ],
      "correctAnswer": "Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss.",
      "correctAnswerEn": "Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss.",
      "correctAnswerAr": "دون مخزن إعادة التجارب، تظهر العينات المتتابعة ارتباطاً زمنياً يفوق $0.92$ مما يسبب تشتت الأوزان؛ بينما يخفض أخذ العينات العشوائية من مخزن بسعة $100,000$ خطوة الارتباط الذاتي إلى $<0.03$.",
      "correctIndex": 2,
      "explanationEn": "Detailed Solution & Numerical Evaluation: Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: دون مخزن إعادة التجارب، تظهر العينات المتتابعة ارتباطاً زمنياً يفوق $0.92$ مما يسبب تشتت الأوزان؛ بينما يخفض أخذ العينات العشوائية من مخزن بسعة $100,000$ خطوة الارتباط الذاتي إلى $<0.03$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Deep Q-Networks (DQN), Experience Replay & Target Networks.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: دون مخزن إعادة التجارب، تظهر العينات المتتابعة ارتباطاً زمنياً يفوق $0.92$ مما يسبب تشتت الأوزان؛ بينما يخفض أخذ العينات العشوائية من مخزن بسعة $100,000$ خطوة الارتباط الذاتي إلى $<0.03$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch3_hots_54",
      "titleEn": "[HOTS] Policy Gradient Methods & Proximal Policy Optimization (PPO) - Evaluation 54",
      "titleAr": "[تفكير عليا] طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO) - تقييم 54",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Policy Gradient Methods & Proximal Policy Optimization (PPO): (Problem 54)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO): (مسألة 54)",
      "optionsEn": [
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "The Expectation-Maximization (EM) algorithm decreases the marginal data likelihood monotonically at each iterative optimization step.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse."
      ],
      "optionsAr": [
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "تؤدي خوارزمية التعظيم المتوقع (EM) إلى خفض دالة الإمكان الهامشية للبيانات بصورة مطردة في كل خطوة تحسين.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "في تدريب طائرة مسيرة ذاتية بمعامل قص $\\epsilon = 0.20$، أنتج إجراء بميزة موجبة $\\hat{A}_t = +4.5$ نسبة $r_t = 1.35$. وتحدد القيمة المقصوصة بـ $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 5.40$ مما يمنع انهيار السياسة."
      ],
      "correctAnswer": "In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse.",
      "correctAnswerEn": "In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse.",
      "correctAnswerAr": "في تدريب طائرة مسيرة ذاتية بمعامل قص $\\epsilon = 0.20$، أنتج إجراء بميزة موجبة $\\hat{A}_t = +4.5$ نسبة $r_t = 1.35$. وتحدد القيمة المقصوصة بـ $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 5.40$ مما يمنع انهيار السياسة.",
      "correctIndex": 3,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في تدريب طائرة مسيرة ذاتية بمعامل قص $\\epsilon = 0.20$، أنتج إجراء بميزة موجبة $\\hat{A}_t = +4.5$ نسبة $r_t = 1.35$. وتحدد القيمة المقصوصة بـ $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 5.40$ مما يمنع انهيار السياسة.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Policy Gradient Methods & Proximal Policy Optimization (PPO).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في تدريب طائرة مسيرة ذاتية بمعامل قص $\\epsilon = 0.20$، أنتج إجراء بميزة موجبة $\\hat{A}_t = +4.5$ نسبة $r_t = 1.35$. وتحدد القيمة المقصوصة بـ $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 5.40$ مما يمنع انهيار السياسة.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch3_hots_55",
      "titleEn": "[HOTS] Markov Decision Processes & Bellman Optimality Equations - Evaluation 55",
      "titleAr": "[تفكير عليا] عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل - تقييم 55",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Markov Decision Processes & Bellman Optimality Equations: (Problem 55)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل: (مسألة 55)",
      "optionsEn": [
        "In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
        "Proximal Policy Optimization (PPO) allows unbounded policy updates that destabilize training policies through catastrophic forgetting.",
        "Gradient descent guarantees convergence to the global minimum on arbitrary non-convex loss surfaces regardless of learning rate.",
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection."
      ],
      "optionsAr": [
        "في مهمة ملاحة روبوت في شبكة بمعامل خصم $\\gamma = 0.90$ ومكافأة $R = +2.0$، وانتقال احتمالي $1.0$ إلى $s'$ بقيم إجراءات قصوى $\\max Q = 10.0$، فإن تحديث بيلمان يعطي $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
        "تسمح خوارزمية PPO بتحديثات غير مقيدة لسياسة الوكيل مما يزعزع استقرار التدريب ويؤدي للنسيان الكارثي.",
        "يضمن الانحدار التدريجي التقارب الحتمي نحو النهاية الصغرى العامة في دوال الخسارة غير المحدبة بصرف النظر عن معدل التعلم.",
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص."
      ],
      "correctAnswer": "In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "correctAnswerEn": "In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "correctAnswerAr": "في مهمة ملاحة روبوت في شبكة بمعامل خصم $\\gamma = 0.90$ ومكافأة $R = +2.0$، وانتقال احتمالي $1.0$ إلى $s'$ بقيم إجراءات قصوى $\\max Q = 10.0$، فإن تحديث بيلمان يعطي $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "correctIndex": 0,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في مهمة ملاحة روبوت في شبكة بمعامل خصم $\\gamma = 0.90$ ومكافأة $R = +2.0$، وانتقال احتمالي $1.0$ إلى $s'$ بقيم إجراءات قصوى $\\max Q = 10.0$، فإن تحديث بيلمان يعطي $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Markov Decision Processes & Bellman Optimality Equations.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في مهمة ملاحة روبوت في شبكة بمعامل خصم $\\gamma = 0.90$ ومكافأة $R = +2.0$، وانتقال احتمالي $1.0$ إلى $s'$ بقيم إجراءات قصوى $\\max Q = 10.0$، فإن تحديث بيلمان يعطي $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch3_hots_56",
      "titleEn": "[HOTS] Deep Q-Networks (DQN), Experience Replay & Target Networks - Evaluation 56",
      "titleAr": "[تفكير عليا] شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف - تقييم 56",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Deep Q-Networks (DQN), Experience Replay & Target Networks: (Problem 56)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف: (مسألة 56)",
      "optionsEn": [
        "L1 Lasso regularization always maintains non-zero dense weights for all input features without performing any feature selection.",
        "Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss.",
        "The vanishing gradient problem occurs because the derivative of the ReLU activation function is infinitely large for all positive inputs.",
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores."
      ],
      "optionsAr": [
        "يحافظ تنظيم L1 (Lasso) دائماً على أوزان كثيفة وغير صفرية لجميع الخصائص دون إجراء أي اختيار للخصائص.",
        "دون مخزن إعادة التجارب، تظهر العينات المتتابعة ارتباطاً زمنياً يفوق $0.92$ مما يسبب تشتت الأوزان؛ بينما يخفض أخذ العينات العشوائية من مخزن بسعة $100,000$ خطوة الارتباط الذاتي إلى $<0.03$.",
        "تحدث مشكلة تلاشي التدرج لأن مشتقة دالة التنشيط ReLU تكون لا نهائية لجميع المدخلات الموجبة.",
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU."
      ],
      "correctAnswer": "Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss.",
      "correctAnswerEn": "Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss.",
      "correctAnswerAr": "دون مخزن إعادة التجارب، تظهر العينات المتتابعة ارتباطاً زمنياً يفوق $0.92$ مما يسبب تشتت الأوزان؛ بينما يخفض أخذ العينات العشوائية من مخزن بسعة $100,000$ خطوة الارتباط الذاتي إلى $<0.03$.",
      "correctIndex": 1,
      "explanationEn": "Detailed Solution & Numerical Evaluation: Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: دون مخزن إعادة التجارب، تظهر العينات المتتابعة ارتباطاً زمنياً يفوق $0.92$ مما يسبب تشتت الأوزان؛ بينما يخفض أخذ العينات العشوائية من مخزن بسعة $100,000$ خطوة الارتباط الذاتي إلى $<0.03$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Deep Q-Networks (DQN), Experience Replay & Target Networks.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: دون مخزن إعادة التجارب، تظهر العينات المتتابعة ارتباطاً زمنياً يفوق $0.92$ مما يسبب تشتت الأوزان؛ بينما يخفض أخذ العينات العشوائية من مخزن بسعة $100,000$ خطوة الارتباط الذاتي إلى $<0.03$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch3_hots_57",
      "titleEn": "[HOTS] Policy Gradient Methods & Proximal Policy Optimization (PPO) - Evaluation 57",
      "titleAr": "[تفكير عليا] طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO) - تقييم 57",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Policy Gradient Methods & Proximal Policy Optimization (PPO): (Problem 57)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO): (مسألة 57)",
      "optionsEn": [
        "Self-attention mechanisms require strictly sequential recurrent computation, preventing parallel processing across GPU compute cores.",
        "The reparameterization trick in VAEs consists of rounding all continuous latent variables to binary integers during forward propagation.",
        "In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse.",
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay."
      ],
      "optionsAr": [
        "تتطلب آليات الانتباه الذاتي حوسبة تكرارية تسلسلية صارمة تمنع المعالجة المتوازية عبر وحدات معالجة الرسوميات GPU.",
        "تعتمد حيلة إعادة المعلمة في VAEs على تقريب جميع المتغيرات الكامنة المستمرة إلى أعداد ثنائية أثناء التمرير الأمامي.",
        "في تدريب طائرة مسيرة ذاتية بمعامل قص $\\epsilon = 0.20$، أنتج إجراء بميزة موجبة $\\hat{A}_t = +4.5$ نسبة $r_t = 1.35$. وتحدد القيمة المقصوصة بـ $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 5.40$ مما يمنع انهيار السياسة.",
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب."
      ],
      "correctAnswer": "In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse.",
      "correctAnswerEn": "In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse.",
      "correctAnswerAr": "في تدريب طائرة مسيرة ذاتية بمعامل قص $\\epsilon = 0.20$، أنتج إجراء بميزة موجبة $\\hat{A}_t = +4.5$ نسبة $r_t = 1.35$. وتحدد القيمة المقصوصة بـ $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 5.40$ مما يمنع انهيار السياسة.",
      "correctIndex": 2,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في تدريب طائرة مسيرة ذاتية بمعامل قص $\\epsilon = 0.20$، أنتج إجراء بميزة موجبة $\\hat{A}_t = +4.5$ نسبة $r_t = 1.35$. وتحدد القيمة المقصوصة بـ $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 5.40$ مما يمنع انهيار السياسة.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Policy Gradient Methods & Proximal Policy Optimization (PPO).",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO).",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في تدريب طائرة مسيرة ذاتية بمعامل قص $\\epsilon = 0.20$، أنتج إجراء بميزة موجبة $\\hat{A}_t = +4.5$ نسبة $r_t = 1.35$. وتحدد القيمة المقصوصة بـ $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 5.40$ مما يمنع انهيار السياسة.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_ai_data_science_ch3_hots_58",
      "titleEn": "[HOTS] Markov Decision Processes & Bellman Optimality Equations - Evaluation 58",
      "titleAr": "[تفكير عليا] عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل - تقييم 58",
      "questionEn": "[High-Order AI Engineering & Numerical Evaluation] Solve the following analytical scenario regarding Markov Decision Processes & Bellman Optimality Equations: (Problem 58)",
      "questionAr": "[مسألة عليا لتحليل وتقييم أنظمة الذكاء الاصطناعي] احسب القيم بدقة للحالة الهندسية التالية المتعلقة بـ عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل: (مسألة 58)",
      "optionsEn": [
        "Deep Q-Networks achieve stable training by updating target network weights on every single microsecond forward pass without experience replay.",
        "In differential privacy, adding infinite Laplacian noise guarantees zero privacy loss and preserves exact unperturbed training data.",
        "ResNet skip connections prohibit gradient flow during backpropagation, causing earlier layers to remain completely untrained.",
        "In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$."
      ],
      "optionsAr": [
        "تحقق شبكات Deep Q-Networks استقرار التدريب عبر تحديث أوزان شبكة الهدف في كل تمريرة أمامية دون استخدام مخزن التجارب.",
        "في الخصوصية التفاضلية، تضمن إضافة ضوضاء لابلاس لا نهائية انعدام فقدان الخصوصية وحفظ بيانات التدريب الدقيقة دون تشويش.",
        "تمنع الوصلات التخطيّة في شبكات ResNet تدفق التدرجات أثناء الانتشار الخلفي، مما يبقي الطبقات الأولى دون تدريب نهائياً.",
        "في مهمة ملاحة روبوت في شبكة بمعامل خصم $\\gamma = 0.90$ ومكافأة $R = +2.0$، وانتقال احتمالي $1.0$ إلى $s'$ بقيم إجراءات قصوى $\\max Q = 10.0$، فإن تحديث بيلمان يعطي $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$."
      ],
      "correctAnswer": "In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "correctAnswerEn": "In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "correctAnswerAr": "في مهمة ملاحة روبوت في شبكة بمعامل خصم $\\gamma = 0.90$ ومكافأة $R = +2.0$، وانتقال احتمالي $1.0$ إلى $s'$ بقيم إجراءات قصوى $\\max Q = 10.0$، فإن تحديث بيلمان يعطي $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "correctIndex": 3,
      "explanationEn": "Detailed Solution & Numerical Evaluation: In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "explanationAr": "خطوات الحل والتقييم الحسابي الدقيق: في مهمة ملاحة روبوت في شبكة بمعامل خصم $\\gamma = 0.90$ ومكافأة $R = +2.0$، وانتقال احتمالي $1.0$ إلى $s'$ بقيم إجراءات قصوى $\\max Q = 10.0$، فإن تحديث بيلمان يعطي $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "stepByStepSolutionEn": [
        "Define problem constraints and hyperparameter values for Markov Decision Processes & Bellman Optimality Equations.",
        "Execute precise mathematical substitution into the analytical formula.",
        "Confirm the final numerical solution: In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد قيود المسألة والقيم العددية للمعاملات الفائقة لـ عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل.",
        "إجراء التعويض الرياضي الدقيق في المعادلة التحليلية.",
        "التحقق من صحة الناتج الحسابي النهائي: في مهمة ملاحة روبوت في شبكة بمعامل خصم $\\gamma = 0.90$ ومكافأة $R = +2.0$، وانتقال احتمالي $1.0$ إلى $s'$ بقيم إجراءات قصوى $\\max Q = 10.0$، فإن تحديث بيلمان يعطي $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.."
      ],
      "difficulty": "hots"
    }
  ]
};
