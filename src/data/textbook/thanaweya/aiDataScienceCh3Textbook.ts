import type { SolvedProblem } from '../../../types/curriculum';

export const th_ai_data_science_ch3SolvedExamples: SolvedProblem[] = [
  {
    "id": "th_ai_data_science_ch3_solved_1",
    "titleEn": "Solved Example 1: Subword Tokenization (BPE) & Dense Word Embeddings",
    "titleAr": "مثال محلول 1: تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 1] Design, formulate, and evaluate an AI/Data Science model architecture applying Subword Tokenization (BPE) & Dense Word Embeddings. Specify the mathematical formulations, optimization equations, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 1] صمم واشتق وقيم معمارية نموذج ذكاء اصطناعي أو علم بيانات بتطبيق تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة. وضح الصياغات الرياضية ومعادلات التحسين وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify problem specifications and statistical constraints.\nStep 2: Formulate governing analytical equation: Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.\nStep 3: Execute numerical substitution: For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.\nStep 4: Verify convergence stability, generalization bounds, and algorithmic performance compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات المسألة والقيود الإحصائية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: ترسم تضمينات الكلمات معرّفات الرموز في فضاءات اتجاهية دلالية مستمرة $\\mathbb{R}^d$ تعكس العلاقات الهندسية بين المتجهات القياسات الدلالية مثل: $\\vec{v}_{\\text{ملك}} - \\vec{v}_{\\text{رجل}} + \\vec{v}_{\\text{امرأة}} \\approx \\vec{v}_{\\text{ملكة}}$.\nالخطوة ٣: التعويض العددي وحساب النتائج: لنظام معالجة لغة عربية يتعامل مع الصرف، يؤدي تقطيع كلمة \"فسيكفيكهم\" بـ BPE إلى 4 مقاطع دلالية: `[فـ, سـ, يكفي, كهم]`، مقلصاً قاموس النموذج من $1.2$ مليون كلمة إلى $32,000$ مقطع قياسي بانعدام الرموز المجهولة.\nالخطوة ٤: التحقق من استقرار التقارب، حدود التعميم، وتوافق أداء النموذج.",
    "stepByStepSolutionEn": [
      "Identify system variables, loss functions, and optimization constraints.",
      "Apply formulation: Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.",
      "Perform calculation: For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.",
      "Confirm operational validity and alignment with international AI standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد متغيرات النظام، دوال الخسارة، وقيود التحسين.",
      "تطبيق المعادلة الخوارزمية: ترسم تضمينات الكلمات معرّفات الرموز في فضاءات اتجاهية دلالية مستمرة $\\mathbb{R}^d$ تعكس العلاقات الهندسية بين المتجهات القياسات الدلالية مثل: $\\vec{v}_{\\text{ملك}} - \\vec{v}_{\\text{رجل}} + \\vec{v}_{\\text{امرأة}} \\approx \\vec{v}_{\\text{ملكة}}$.",
      "الحساب العددي الدقيق: لنظام معالجة لغة عربية يتعامل مع الصرف، يؤدي تقطيع كلمة \"فسيكفيكهم\" بـ BPE إلى 4 مقاطع دلالية: `[فـ, سـ, يكفي, كهم]`، مقلصاً قاموس النموذج من $1.2$ مليون كلمة إلى $32,000$ مقطع قياسي بانعدام الرموز المجهولة.",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للذكاء الاصطناعي."
    ],
    "hintEn": "Recall the governing analytical relations for Subword Tokenization (BPE) & Dense Word Embeddings.",
    "hintAr": "تذكر القوانين والعلاقات التحليلية الحاكمة لـ تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة.",
    "teacherTipEn": "Pay careful attention to vector dimensions and normalization constraints when implementing Subword Tokenization (BPE) & Dense Word Embeddings.",
    "teacherTipAr": "انتبه جيداً لأبعاد المتجهات وشروط المعايرة والتقييس عند تطبيق تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة."
  },
  {
    "id": "th_ai_data_science_ch3_solved_2",
    "titleEn": "Solved Example 2: Scaled Dot-Product Multi-Head Self-Attention Mechanisms",
    "titleAr": "مثال محلول 2: آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 2] Design, formulate, and evaluate an AI/Data Science model architecture applying Scaled Dot-Product Multi-Head Self-Attention Mechanisms. Specify the mathematical formulations, optimization equations, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 2] صمم واشتق وقيم معمارية نموذج ذكاء اصطناعي أو علم بيانات بتطبيق آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس. وضح الصياغات الرياضية ومعادلات التحسين وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify problem specifications and statistical constraints.\nStep 2: Formulate governing analytical equation: The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.\nStep 3: Execute numerical substitution: In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions.\nStep 4: Verify convergence stability, generalization bounds, and algorithmic performance compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات المسألة والقيود الإحصائية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: تُحسب مصفوفة الانتباه بالعلاقة $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$، حيث يمنع معامل القياس $\\sqrt{d_k}$ تضخم نواتج الضرب وتلاشي التدرجات في دالة softmax.\nالخطوة ٣: التعويض العددي وحساب النتائج: في نموذج Transformer ببعد $d_{model} = 768$ و $12$ رأساً للانتباه، يبلغ بعد الرأس $d_k = 64$. ويضمن القياس بـ $\\frac{1}{\\sqrt{64}} = 0.125$ بقاء تباين الجداء قريباً من $1.0$، مما يحقق استقراراً عددياً لـ softmax.\nالخطوة ٤: التحقق من استقرار التقارب، حدود التعميم، وتوافق أداء النموذج.",
    "stepByStepSolutionEn": [
      "Identify system variables, loss functions, and optimization constraints.",
      "Apply formulation: The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.",
      "Perform calculation: In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions.",
      "Confirm operational validity and alignment with international AI standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد متغيرات النظام، دوال الخسارة، وقيود التحسين.",
      "تطبيق المعادلة الخوارزمية: تُحسب مصفوفة الانتباه بالعلاقة $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$، حيث يمنع معامل القياس $\\sqrt{d_k}$ تضخم نواتج الضرب وتلاشي التدرجات في دالة softmax.",
      "الحساب العددي الدقيق: في نموذج Transformer ببعد $d_{model} = 768$ و $12$ رأساً للانتباه، يبلغ بعد الرأس $d_k = 64$. ويضمن القياس بـ $\\frac{1}{\\sqrt{64}} = 0.125$ بقاء تباين الجداء قريباً من $1.0$، مما يحقق استقراراً عددياً لـ softmax.",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للذكاء الاصطناعي."
    ],
    "hintEn": "Recall the governing analytical relations for Scaled Dot-Product Multi-Head Self-Attention Mechanisms.",
    "hintAr": "تذكر القوانين والعلاقات التحليلية الحاكمة لـ آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس.",
    "teacherTipEn": "Pay careful attention to vector dimensions and normalization constraints when implementing Scaled Dot-Product Multi-Head Self-Attention Mechanisms.",
    "teacherTipAr": "انتبه جيداً لأبعاد المتجهات وشروط المعايرة والتقييس عند تطبيق آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس."
  },
  {
    "id": "th_ai_data_science_ch3_solved_3",
    "titleEn": "Solved Example 3: Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG)",
    "titleAr": "مثال محلول 3: النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG)",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 3] Design, formulate, and evaluate an AI/Data Science model architecture applying Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG). Specify the mathematical formulations, optimization equations, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 3] صمم واشتق وقيم معمارية نموذج ذكاء اصطناعي أو علم بيانات بتطبيق النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG). وضح الصياغات الرياضية ومعادلات التحسين وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify problem specifications and statistical constraints.\nStep 2: Formulate governing analytical equation: A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.\nStep 3: Execute numerical substitution: An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$.\nStep 4: Verify convergence stability, generalization bounds, and algorithmic performance compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات المسألة والقيود الإحصائية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: يقطع خط RAG الوثائق إلى أجزاء ويولد تضميناتها بترميز كثيف، ويفهرسها بتقنيات الجوار التقريبي HNSW، ويجري بحث تشابه جيب التمام لاستخراج أفضل $k$ أدلة سياقية.\nالخطوة ٣: التعويض العددي وحساب النتائج: مساعد وزاري للإجابة على الأسئلة القانونية يفهرس 10,000 مادة. بتقسيم النصوص إلى مقاطع من 512 رمزاً مع تداخل $15\\%$ واسترجاع أفضل 4 مقاطع بـ HNSW، انخفض معدل الهلوسة من $28.4\\%$ إلى أقل من $1.2\\%$.\nالخطوة ٤: التحقق من استقرار التقارب، حدود التعميم، وتوافق أداء النموذج.",
    "stepByStepSolutionEn": [
      "Identify system variables, loss functions, and optimization constraints.",
      "Apply formulation: A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.",
      "Perform calculation: An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$.",
      "Confirm operational validity and alignment with international AI standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد متغيرات النظام، دوال الخسارة، وقيود التحسين.",
      "تطبيق المعادلة الخوارزمية: يقطع خط RAG الوثائق إلى أجزاء ويولد تضميناتها بترميز كثيف، ويفهرسها بتقنيات الجوار التقريبي HNSW، ويجري بحث تشابه جيب التمام لاستخراج أفضل $k$ أدلة سياقية.",
      "الحساب العددي الدقيق: مساعد وزاري للإجابة على الأسئلة القانونية يفهرس 10,000 مادة. بتقسيم النصوص إلى مقاطع من 512 رمزاً مع تداخل $15\\%$ واسترجاع أفضل 4 مقاطع بـ HNSW، انخفض معدل الهلوسة من $28.4\\%$ إلى أقل من $1.2\\%$.",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للذكاء الاصطناعي."
    ],
    "hintEn": "Recall the governing analytical relations for Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG).",
    "hintAr": "تذكر القوانين والعلاقات التحليلية الحاكمة لـ النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG).",
    "teacherTipEn": "Pay careful attention to vector dimensions and normalization constraints when implementing Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG).",
    "teacherTipAr": "انتبه جيداً لأبعاد المتجهات وشروط المعايرة والتقييس عند تطبيق النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG)."
  },
  {
    "id": "th_ai_data_science_ch3_solved_4",
    "titleEn": "Solved Example 4: Subword Tokenization (BPE) & Dense Word Embeddings",
    "titleAr": "مثال محلول 4: تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 4] Design, formulate, and evaluate an AI/Data Science model architecture applying Subword Tokenization (BPE) & Dense Word Embeddings. Specify the mathematical formulations, optimization equations, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 4] صمم واشتق وقيم معمارية نموذج ذكاء اصطناعي أو علم بيانات بتطبيق تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة. وضح الصياغات الرياضية ومعادلات التحسين وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify problem specifications and statistical constraints.\nStep 2: Formulate governing analytical equation: Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.\nStep 3: Execute numerical substitution: For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.\nStep 4: Verify convergence stability, generalization bounds, and algorithmic performance compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات المسألة والقيود الإحصائية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: ترسم تضمينات الكلمات معرّفات الرموز في فضاءات اتجاهية دلالية مستمرة $\\mathbb{R}^d$ تعكس العلاقات الهندسية بين المتجهات القياسات الدلالية مثل: $\\vec{v}_{\\text{ملك}} - \\vec{v}_{\\text{رجل}} + \\vec{v}_{\\text{امرأة}} \\approx \\vec{v}_{\\text{ملكة}}$.\nالخطوة ٣: التعويض العددي وحساب النتائج: لنظام معالجة لغة عربية يتعامل مع الصرف، يؤدي تقطيع كلمة \"فسيكفيكهم\" بـ BPE إلى 4 مقاطع دلالية: `[فـ, سـ, يكفي, كهم]`، مقلصاً قاموس النموذج من $1.2$ مليون كلمة إلى $32,000$ مقطع قياسي بانعدام الرموز المجهولة.\nالخطوة ٤: التحقق من استقرار التقارب، حدود التعميم، وتوافق أداء النموذج.",
    "stepByStepSolutionEn": [
      "Identify system variables, loss functions, and optimization constraints.",
      "Apply formulation: Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.",
      "Perform calculation: For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.",
      "Confirm operational validity and alignment with international AI standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد متغيرات النظام، دوال الخسارة، وقيود التحسين.",
      "تطبيق المعادلة الخوارزمية: ترسم تضمينات الكلمات معرّفات الرموز في فضاءات اتجاهية دلالية مستمرة $\\mathbb{R}^d$ تعكس العلاقات الهندسية بين المتجهات القياسات الدلالية مثل: $\\vec{v}_{\\text{ملك}} - \\vec{v}_{\\text{رجل}} + \\vec{v}_{\\text{امرأة}} \\approx \\vec{v}_{\\text{ملكة}}$.",
      "الحساب العددي الدقيق: لنظام معالجة لغة عربية يتعامل مع الصرف، يؤدي تقطيع كلمة \"فسيكفيكهم\" بـ BPE إلى 4 مقاطع دلالية: `[فـ, سـ, يكفي, كهم]`، مقلصاً قاموس النموذج من $1.2$ مليون كلمة إلى $32,000$ مقطع قياسي بانعدام الرموز المجهولة.",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للذكاء الاصطناعي."
    ],
    "hintEn": "Recall the governing analytical relations for Subword Tokenization (BPE) & Dense Word Embeddings.",
    "hintAr": "تذكر القوانين والعلاقات التحليلية الحاكمة لـ تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة.",
    "teacherTipEn": "Pay careful attention to vector dimensions and normalization constraints when implementing Subword Tokenization (BPE) & Dense Word Embeddings.",
    "teacherTipAr": "انتبه جيداً لأبعاد المتجهات وشروط المعايرة والتقييس عند تطبيق تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة."
  },
  {
    "id": "th_ai_data_science_ch3_solved_5",
    "titleEn": "Solved Example 5: Scaled Dot-Product Multi-Head Self-Attention Mechanisms",
    "titleAr": "مثال محلول 5: آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 5] Design, formulate, and evaluate an AI/Data Science model architecture applying Scaled Dot-Product Multi-Head Self-Attention Mechanisms. Specify the mathematical formulations, optimization equations, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 5] صمم واشتق وقيم معمارية نموذج ذكاء اصطناعي أو علم بيانات بتطبيق آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس. وضح الصياغات الرياضية ومعادلات التحسين وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify problem specifications and statistical constraints.\nStep 2: Formulate governing analytical equation: The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.\nStep 3: Execute numerical substitution: In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions.\nStep 4: Verify convergence stability, generalization bounds, and algorithmic performance compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات المسألة والقيود الإحصائية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: تُحسب مصفوفة الانتباه بالعلاقة $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$، حيث يمنع معامل القياس $\\sqrt{d_k}$ تضخم نواتج الضرب وتلاشي التدرجات في دالة softmax.\nالخطوة ٣: التعويض العددي وحساب النتائج: في نموذج Transformer ببعد $d_{model} = 768$ و $12$ رأساً للانتباه، يبلغ بعد الرأس $d_k = 64$. ويضمن القياس بـ $\\frac{1}{\\sqrt{64}} = 0.125$ بقاء تباين الجداء قريباً من $1.0$، مما يحقق استقراراً عددياً لـ softmax.\nالخطوة ٤: التحقق من استقرار التقارب، حدود التعميم، وتوافق أداء النموذج.",
    "stepByStepSolutionEn": [
      "Identify system variables, loss functions, and optimization constraints.",
      "Apply formulation: The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.",
      "Perform calculation: In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions.",
      "Confirm operational validity and alignment with international AI standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد متغيرات النظام، دوال الخسارة، وقيود التحسين.",
      "تطبيق المعادلة الخوارزمية: تُحسب مصفوفة الانتباه بالعلاقة $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$، حيث يمنع معامل القياس $\\sqrt{d_k}$ تضخم نواتج الضرب وتلاشي التدرجات في دالة softmax.",
      "الحساب العددي الدقيق: في نموذج Transformer ببعد $d_{model} = 768$ و $12$ رأساً للانتباه، يبلغ بعد الرأس $d_k = 64$. ويضمن القياس بـ $\\frac{1}{\\sqrt{64}} = 0.125$ بقاء تباين الجداء قريباً من $1.0$، مما يحقق استقراراً عددياً لـ softmax.",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للذكاء الاصطناعي."
    ],
    "hintEn": "Recall the governing analytical relations for Scaled Dot-Product Multi-Head Self-Attention Mechanisms.",
    "hintAr": "تذكر القوانين والعلاقات التحليلية الحاكمة لـ آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس.",
    "teacherTipEn": "Pay careful attention to vector dimensions and normalization constraints when implementing Scaled Dot-Product Multi-Head Self-Attention Mechanisms.",
    "teacherTipAr": "انتبه جيداً لأبعاد المتجهات وشروط المعايرة والتقييس عند تطبيق آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس."
  },
  {
    "id": "th_ai_data_science_ch3_solved_6",
    "titleEn": "Solved Example 6: Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG)",
    "titleAr": "مثال محلول 6: النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG)",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 6] Design, formulate, and evaluate an AI/Data Science model architecture applying Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG). Specify the mathematical formulations, optimization equations, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 6] صمم واشتق وقيم معمارية نموذج ذكاء اصطناعي أو علم بيانات بتطبيق النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG). وضح الصياغات الرياضية ومعادلات التحسين وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify problem specifications and statistical constraints.\nStep 2: Formulate governing analytical equation: A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.\nStep 3: Execute numerical substitution: An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$.\nStep 4: Verify convergence stability, generalization bounds, and algorithmic performance compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات المسألة والقيود الإحصائية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: يقطع خط RAG الوثائق إلى أجزاء ويولد تضميناتها بترميز كثيف، ويفهرسها بتقنيات الجوار التقريبي HNSW، ويجري بحث تشابه جيب التمام لاستخراج أفضل $k$ أدلة سياقية.\nالخطوة ٣: التعويض العددي وحساب النتائج: مساعد وزاري للإجابة على الأسئلة القانونية يفهرس 10,000 مادة. بتقسيم النصوص إلى مقاطع من 512 رمزاً مع تداخل $15\\%$ واسترجاع أفضل 4 مقاطع بـ HNSW، انخفض معدل الهلوسة من $28.4\\%$ إلى أقل من $1.2\\%$.\nالخطوة ٤: التحقق من استقرار التقارب، حدود التعميم، وتوافق أداء النموذج.",
    "stepByStepSolutionEn": [
      "Identify system variables, loss functions, and optimization constraints.",
      "Apply formulation: A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.",
      "Perform calculation: An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$.",
      "Confirm operational validity and alignment with international AI standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد متغيرات النظام، دوال الخسارة، وقيود التحسين.",
      "تطبيق المعادلة الخوارزمية: يقطع خط RAG الوثائق إلى أجزاء ويولد تضميناتها بترميز كثيف، ويفهرسها بتقنيات الجوار التقريبي HNSW، ويجري بحث تشابه جيب التمام لاستخراج أفضل $k$ أدلة سياقية.",
      "الحساب العددي الدقيق: مساعد وزاري للإجابة على الأسئلة القانونية يفهرس 10,000 مادة. بتقسيم النصوص إلى مقاطع من 512 رمزاً مع تداخل $15\\%$ واسترجاع أفضل 4 مقاطع بـ HNSW، انخفض معدل الهلوسة من $28.4\\%$ إلى أقل من $1.2\\%$.",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للذكاء الاصطناعي."
    ],
    "hintEn": "Recall the governing analytical relations for Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG).",
    "hintAr": "تذكر القوانين والعلاقات التحليلية الحاكمة لـ النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG).",
    "teacherTipEn": "Pay careful attention to vector dimensions and normalization constraints when implementing Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG).",
    "teacherTipAr": "انتبه جيداً لأبعاد المتجهات وشروط المعايرة والتقييس عند تطبيق النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG)."
  },
  {
    "id": "th_ai_data_science_ch3_solved_7",
    "titleEn": "Solved Example 7: Subword Tokenization (BPE) & Dense Word Embeddings",
    "titleAr": "مثال محلول 7: تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 7] Design, formulate, and evaluate an AI/Data Science model architecture applying Subword Tokenization (BPE) & Dense Word Embeddings. Specify the mathematical formulations, optimization equations, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 7] صمم واشتق وقيم معمارية نموذج ذكاء اصطناعي أو علم بيانات بتطبيق تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة. وضح الصياغات الرياضية ومعادلات التحسين وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify problem specifications and statistical constraints.\nStep 2: Formulate governing analytical equation: Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.\nStep 3: Execute numerical substitution: For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.\nStep 4: Verify convergence stability, generalization bounds, and algorithmic performance compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات المسألة والقيود الإحصائية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: ترسم تضمينات الكلمات معرّفات الرموز في فضاءات اتجاهية دلالية مستمرة $\\mathbb{R}^d$ تعكس العلاقات الهندسية بين المتجهات القياسات الدلالية مثل: $\\vec{v}_{\\text{ملك}} - \\vec{v}_{\\text{رجل}} + \\vec{v}_{\\text{امرأة}} \\approx \\vec{v}_{\\text{ملكة}}$.\nالخطوة ٣: التعويض العددي وحساب النتائج: لنظام معالجة لغة عربية يتعامل مع الصرف، يؤدي تقطيع كلمة \"فسيكفيكهم\" بـ BPE إلى 4 مقاطع دلالية: `[فـ, سـ, يكفي, كهم]`، مقلصاً قاموس النموذج من $1.2$ مليون كلمة إلى $32,000$ مقطع قياسي بانعدام الرموز المجهولة.\nالخطوة ٤: التحقق من استقرار التقارب، حدود التعميم، وتوافق أداء النموذج.",
    "stepByStepSolutionEn": [
      "Identify system variables, loss functions, and optimization constraints.",
      "Apply formulation: Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.",
      "Perform calculation: For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.",
      "Confirm operational validity and alignment with international AI standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد متغيرات النظام، دوال الخسارة، وقيود التحسين.",
      "تطبيق المعادلة الخوارزمية: ترسم تضمينات الكلمات معرّفات الرموز في فضاءات اتجاهية دلالية مستمرة $\\mathbb{R}^d$ تعكس العلاقات الهندسية بين المتجهات القياسات الدلالية مثل: $\\vec{v}_{\\text{ملك}} - \\vec{v}_{\\text{رجل}} + \\vec{v}_{\\text{امرأة}} \\approx \\vec{v}_{\\text{ملكة}}$.",
      "الحساب العددي الدقيق: لنظام معالجة لغة عربية يتعامل مع الصرف، يؤدي تقطيع كلمة \"فسيكفيكهم\" بـ BPE إلى 4 مقاطع دلالية: `[فـ, سـ, يكفي, كهم]`، مقلصاً قاموس النموذج من $1.2$ مليون كلمة إلى $32,000$ مقطع قياسي بانعدام الرموز المجهولة.",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للذكاء الاصطناعي."
    ],
    "hintEn": "Recall the governing analytical relations for Subword Tokenization (BPE) & Dense Word Embeddings.",
    "hintAr": "تذكر القوانين والعلاقات التحليلية الحاكمة لـ تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة.",
    "teacherTipEn": "Pay careful attention to vector dimensions and normalization constraints when implementing Subword Tokenization (BPE) & Dense Word Embeddings.",
    "teacherTipAr": "انتبه جيداً لأبعاد المتجهات وشروط المعايرة والتقييس عند تطبيق تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة."
  },
  {
    "id": "th_ai_data_science_ch3_solved_8",
    "titleEn": "Solved Example 8: Scaled Dot-Product Multi-Head Self-Attention Mechanisms",
    "titleAr": "مثال محلول 8: آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 8] Design, formulate, and evaluate an AI/Data Science model architecture applying Scaled Dot-Product Multi-Head Self-Attention Mechanisms. Specify the mathematical formulations, optimization equations, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 8] صمم واشتق وقيم معمارية نموذج ذكاء اصطناعي أو علم بيانات بتطبيق آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس. وضح الصياغات الرياضية ومعادلات التحسين وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify problem specifications and statistical constraints.\nStep 2: Formulate governing analytical equation: The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.\nStep 3: Execute numerical substitution: In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions.\nStep 4: Verify convergence stability, generalization bounds, and algorithmic performance compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات المسألة والقيود الإحصائية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: تُحسب مصفوفة الانتباه بالعلاقة $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$، حيث يمنع معامل القياس $\\sqrt{d_k}$ تضخم نواتج الضرب وتلاشي التدرجات في دالة softmax.\nالخطوة ٣: التعويض العددي وحساب النتائج: في نموذج Transformer ببعد $d_{model} = 768$ و $12$ رأساً للانتباه، يبلغ بعد الرأس $d_k = 64$. ويضمن القياس بـ $\\frac{1}{\\sqrt{64}} = 0.125$ بقاء تباين الجداء قريباً من $1.0$، مما يحقق استقراراً عددياً لـ softmax.\nالخطوة ٤: التحقق من استقرار التقارب، حدود التعميم، وتوافق أداء النموذج.",
    "stepByStepSolutionEn": [
      "Identify system variables, loss functions, and optimization constraints.",
      "Apply formulation: The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.",
      "Perform calculation: In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions.",
      "Confirm operational validity and alignment with international AI standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد متغيرات النظام، دوال الخسارة، وقيود التحسين.",
      "تطبيق المعادلة الخوارزمية: تُحسب مصفوفة الانتباه بالعلاقة $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$، حيث يمنع معامل القياس $\\sqrt{d_k}$ تضخم نواتج الضرب وتلاشي التدرجات في دالة softmax.",
      "الحساب العددي الدقيق: في نموذج Transformer ببعد $d_{model} = 768$ و $12$ رأساً للانتباه، يبلغ بعد الرأس $d_k = 64$. ويضمن القياس بـ $\\frac{1}{\\sqrt{64}} = 0.125$ بقاء تباين الجداء قريباً من $1.0$، مما يحقق استقراراً عددياً لـ softmax.",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للذكاء الاصطناعي."
    ],
    "hintEn": "Recall the governing analytical relations for Scaled Dot-Product Multi-Head Self-Attention Mechanisms.",
    "hintAr": "تذكر القوانين والعلاقات التحليلية الحاكمة لـ آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس.",
    "teacherTipEn": "Pay careful attention to vector dimensions and normalization constraints when implementing Scaled Dot-Product Multi-Head Self-Attention Mechanisms.",
    "teacherTipAr": "انتبه جيداً لأبعاد المتجهات وشروط المعايرة والتقييس عند تطبيق آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس."
  },
  {
    "id": "th_ai_data_science_ch3_solved_9",
    "titleEn": "Solved Example 9: Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG)",
    "titleAr": "مثال محلول 9: النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG)",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 9] Design, formulate, and evaluate an AI/Data Science model architecture applying Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG). Specify the mathematical formulations, optimization equations, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 9] صمم واشتق وقيم معمارية نموذج ذكاء اصطناعي أو علم بيانات بتطبيق النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG). وضح الصياغات الرياضية ومعادلات التحسين وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify problem specifications and statistical constraints.\nStep 2: Formulate governing analytical equation: A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.\nStep 3: Execute numerical substitution: An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$.\nStep 4: Verify convergence stability, generalization bounds, and algorithmic performance compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات المسألة والقيود الإحصائية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: يقطع خط RAG الوثائق إلى أجزاء ويولد تضميناتها بترميز كثيف، ويفهرسها بتقنيات الجوار التقريبي HNSW، ويجري بحث تشابه جيب التمام لاستخراج أفضل $k$ أدلة سياقية.\nالخطوة ٣: التعويض العددي وحساب النتائج: مساعد وزاري للإجابة على الأسئلة القانونية يفهرس 10,000 مادة. بتقسيم النصوص إلى مقاطع من 512 رمزاً مع تداخل $15\\%$ واسترجاع أفضل 4 مقاطع بـ HNSW، انخفض معدل الهلوسة من $28.4\\%$ إلى أقل من $1.2\\%$.\nالخطوة ٤: التحقق من استقرار التقارب، حدود التعميم، وتوافق أداء النموذج.",
    "stepByStepSolutionEn": [
      "Identify system variables, loss functions, and optimization constraints.",
      "Apply formulation: A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.",
      "Perform calculation: An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$.",
      "Confirm operational validity and alignment with international AI standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد متغيرات النظام، دوال الخسارة، وقيود التحسين.",
      "تطبيق المعادلة الخوارزمية: يقطع خط RAG الوثائق إلى أجزاء ويولد تضميناتها بترميز كثيف، ويفهرسها بتقنيات الجوار التقريبي HNSW، ويجري بحث تشابه جيب التمام لاستخراج أفضل $k$ أدلة سياقية.",
      "الحساب العددي الدقيق: مساعد وزاري للإجابة على الأسئلة القانونية يفهرس 10,000 مادة. بتقسيم النصوص إلى مقاطع من 512 رمزاً مع تداخل $15\\%$ واسترجاع أفضل 4 مقاطع بـ HNSW، انخفض معدل الهلوسة من $28.4\\%$ إلى أقل من $1.2\\%$.",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للذكاء الاصطناعي."
    ],
    "hintEn": "Recall the governing analytical relations for Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG).",
    "hintAr": "تذكر القوانين والعلاقات التحليلية الحاكمة لـ النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG).",
    "teacherTipEn": "Pay careful attention to vector dimensions and normalization constraints when implementing Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG).",
    "teacherTipAr": "انتبه جيداً لأبعاد المتجهات وشروط المعايرة والتقييس عند تطبيق النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG)."
  },
  {
    "id": "th_ai_data_science_ch3_solved_10",
    "titleEn": "Solved Example 10: Subword Tokenization (BPE) & Dense Word Embeddings",
    "titleAr": "مثال محلول 10: تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 10] Design, formulate, and evaluate an AI/Data Science model architecture applying Subword Tokenization (BPE) & Dense Word Embeddings. Specify the mathematical formulations, optimization equations, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 10] صمم واشتق وقيم معمارية نموذج ذكاء اصطناعي أو علم بيانات بتطبيق تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة. وضح الصياغات الرياضية ومعادلات التحسين وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify problem specifications and statistical constraints.\nStep 2: Formulate governing analytical equation: Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.\nStep 3: Execute numerical substitution: For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.\nStep 4: Verify convergence stability, generalization bounds, and algorithmic performance compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات المسألة والقيود الإحصائية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: ترسم تضمينات الكلمات معرّفات الرموز في فضاءات اتجاهية دلالية مستمرة $\\mathbb{R}^d$ تعكس العلاقات الهندسية بين المتجهات القياسات الدلالية مثل: $\\vec{v}_{\\text{ملك}} - \\vec{v}_{\\text{رجل}} + \\vec{v}_{\\text{امرأة}} \\approx \\vec{v}_{\\text{ملكة}}$.\nالخطوة ٣: التعويض العددي وحساب النتائج: لنظام معالجة لغة عربية يتعامل مع الصرف، يؤدي تقطيع كلمة \"فسيكفيكهم\" بـ BPE إلى 4 مقاطع دلالية: `[فـ, سـ, يكفي, كهم]`، مقلصاً قاموس النموذج من $1.2$ مليون كلمة إلى $32,000$ مقطع قياسي بانعدام الرموز المجهولة.\nالخطوة ٤: التحقق من استقرار التقارب، حدود التعميم، وتوافق أداء النموذج.",
    "stepByStepSolutionEn": [
      "Identify system variables, loss functions, and optimization constraints.",
      "Apply formulation: Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.",
      "Perform calculation: For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.",
      "Confirm operational validity and alignment with international AI standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد متغيرات النظام، دوال الخسارة، وقيود التحسين.",
      "تطبيق المعادلة الخوارزمية: ترسم تضمينات الكلمات معرّفات الرموز في فضاءات اتجاهية دلالية مستمرة $\\mathbb{R}^d$ تعكس العلاقات الهندسية بين المتجهات القياسات الدلالية مثل: $\\vec{v}_{\\text{ملك}} - \\vec{v}_{\\text{رجل}} + \\vec{v}_{\\text{امرأة}} \\approx \\vec{v}_{\\text{ملكة}}$.",
      "الحساب العددي الدقيق: لنظام معالجة لغة عربية يتعامل مع الصرف، يؤدي تقطيع كلمة \"فسيكفيكهم\" بـ BPE إلى 4 مقاطع دلالية: `[فـ, سـ, يكفي, كهم]`، مقلصاً قاموس النموذج من $1.2$ مليون كلمة إلى $32,000$ مقطع قياسي بانعدام الرموز المجهولة.",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للذكاء الاصطناعي."
    ],
    "hintEn": "Recall the governing analytical relations for Subword Tokenization (BPE) & Dense Word Embeddings.",
    "hintAr": "تذكر القوانين والعلاقات التحليلية الحاكمة لـ تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة.",
    "teacherTipEn": "Pay careful attention to vector dimensions and normalization constraints when implementing Subword Tokenization (BPE) & Dense Word Embeddings.",
    "teacherTipAr": "انتبه جيداً لأبعاد المتجهات وشروط المعايرة والتقييس عند تطبيق تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة."
  }
];

export const th_ai_data_science_ch3ExerciseProblems: SolvedProblem[] = [
  {
    "id": "th_ai_data_science_ch3_ex_1",
    "titleEn": "Exercise Problem 1: Subword Tokenization (BPE) & Dense Word Embeddings",
    "titleAr": "تمرين 1: تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 1] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Subword Tokenization (BPE) & Dense Word Embeddings. Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 1] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.\n- Calculation & Results: For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: ترسم تضمينات الكلمات معرّفات الرموز في فضاءات اتجاهية دلالية مستمرة $\\mathbb{R}^d$ تعكس العلاقات الهندسية بين المتجهات القياسات الدلالية مثل: $\\vec{v}_{\\text{ملك}} - \\vec{v}_{\\text{رجل}} + \\vec{v}_{\\text{امرأة}} \\approx \\vec{v}_{\\text{ملكة}}$.\n- خطوات الحساب والنتيجة: لنظام معالجة لغة عربية يتعامل مع الصرف، يؤدي تقطيع كلمة \"فسيكفيكهم\" بـ BPE إلى 4 مقاطع دلالية: `[فـ, سـ, يكفي, كهم]`، مقلصاً قاموس النموذج من $1.2$ مليون كلمة إلى $32,000$ مقطع قياسي بانعدام الرموز المجهولة.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.",
      "Calculate final values: For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: ترسم تضمينات الكلمات معرّفات الرموز في فضاءات اتجاهية دلالية مستمرة $\\mathbb{R}^d$ تعكس العلاقات الهندسية بين المتجهات القياسات الدلالية مثل: $\\vec{v}_{\\text{ملك}} - \\vec{v}_{\\text{رجل}} + \\vec{v}_{\\text{امرأة}} \\approx \\vec{v}_{\\text{ملكة}}$.",
      "حساب الناتج النهائي: لنظام معالجة لغة عربية يتعامل مع الصرف، يؤدي تقطيع كلمة \"فسيكفيكهم\" بـ BPE إلى 4 مقاطع دلالية: `[فـ, سـ, يكفي, كهم]`، مقلصاً قاموس النموذج من $1.2$ مليون كلمة إلى $32,000$ مقطع قياسي بانعدام الرموز المجهولة.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.",
    "hintAr": "طبق القانون الأساسي: ترسم تضمينات الكلمات معرّفات الرموز في فضاءات اتجاهية دلالية مستمرة $\\mathbb{R}^d$ تعكس العلاقات الهندسية بين المتجهات القياسات الدلالية مثل: $\\vec{v}_{\\text{ملك}} - \\vec{v}_{\\text{رجل}} + \\vec{v}_{\\text{امرأة}} \\approx \\vec{v}_{\\text{ملكة}}$.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "th_ai_data_science_ch3_ex_2",
    "titleEn": "Exercise Problem 2: Scaled Dot-Product Multi-Head Self-Attention Mechanisms",
    "titleAr": "تمرين 2: آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 2] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Scaled Dot-Product Multi-Head Self-Attention Mechanisms. Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 2] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.\n- Calculation & Results: In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تُحسب مصفوفة الانتباه بالعلاقة $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$، حيث يمنع معامل القياس $\\sqrt{d_k}$ تضخم نواتج الضرب وتلاشي التدرجات في دالة softmax.\n- خطوات الحساب والنتيجة: في نموذج Transformer ببعد $d_{model} = 768$ و $12$ رأساً للانتباه، يبلغ بعد الرأس $d_k = 64$. ويضمن القياس بـ $\\frac{1}{\\sqrt{64}} = 0.125$ بقاء تباين الجداء قريباً من $1.0$، مما يحقق استقراراً عددياً لـ softmax.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.",
      "Calculate final values: In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions.",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: تُحسب مصفوفة الانتباه بالعلاقة $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$، حيث يمنع معامل القياس $\\sqrt{d_k}$ تضخم نواتج الضرب وتلاشي التدرجات في دالة softmax.",
      "حساب الناتج النهائي: في نموذج Transformer ببعد $d_{model} = 768$ و $12$ رأساً للانتباه، يبلغ بعد الرأس $d_k = 64$. ويضمن القياس بـ $\\frac{1}{\\sqrt{64}} = 0.125$ بقاء تباين الجداء قريباً من $1.0$، مما يحقق استقراراً عددياً لـ softmax.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.",
    "hintAr": "طبق القانون الأساسي: تُحسب مصفوفة الانتباه بالعلاقة $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$، حيث يمنع معامل القياس $\\sqrt{d_k}$ تضخم نواتج الضرب وتلاشي التدرجات في دالة softmax.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "th_ai_data_science_ch3_ex_3",
    "titleEn": "Exercise Problem 3: Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG)",
    "titleAr": "تمرين 3: النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG)",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 3] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG). Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 3] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG). استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.\n- Calculation & Results: An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: يقطع خط RAG الوثائق إلى أجزاء ويولد تضميناتها بترميز كثيف، ويفهرسها بتقنيات الجوار التقريبي HNSW، ويجري بحث تشابه جيب التمام لاستخراج أفضل $k$ أدلة سياقية.\n- خطوات الحساب والنتيجة: مساعد وزاري للإجابة على الأسئلة القانونية يفهرس 10,000 مادة. بتقسيم النصوص إلى مقاطع من 512 رمزاً مع تداخل $15\\%$ واسترجاع أفضل 4 مقاطع بـ HNSW، انخفض معدل الهلوسة من $28.4\\%$ إلى أقل من $1.2\\%$.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.",
      "Calculate final values: An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$.",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: يقطع خط RAG الوثائق إلى أجزاء ويولد تضميناتها بترميز كثيف، ويفهرسها بتقنيات الجوار التقريبي HNSW، ويجري بحث تشابه جيب التمام لاستخراج أفضل $k$ أدلة سياقية.",
      "حساب الناتج النهائي: مساعد وزاري للإجابة على الأسئلة القانونية يفهرس 10,000 مادة. بتقسيم النصوص إلى مقاطع من 512 رمزاً مع تداخل $15\\%$ واسترجاع أفضل 4 مقاطع بـ HNSW، انخفض معدل الهلوسة من $28.4\\%$ إلى أقل من $1.2\\%$.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.",
    "hintAr": "طبق القانون الأساسي: يقطع خط RAG الوثائق إلى أجزاء ويولد تضميناتها بترميز كثيف، ويفهرسها بتقنيات الجوار التقريبي HNSW، ويجري بحث تشابه جيب التمام لاستخراج أفضل $k$ أدلة سياقية.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "th_ai_data_science_ch3_ex_4",
    "titleEn": "Exercise Problem 4: Subword Tokenization (BPE) & Dense Word Embeddings",
    "titleAr": "تمرين 4: تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 4] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Subword Tokenization (BPE) & Dense Word Embeddings. Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 4] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.\n- Calculation & Results: For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: ترسم تضمينات الكلمات معرّفات الرموز في فضاءات اتجاهية دلالية مستمرة $\\mathbb{R}^d$ تعكس العلاقات الهندسية بين المتجهات القياسات الدلالية مثل: $\\vec{v}_{\\text{ملك}} - \\vec{v}_{\\text{رجل}} + \\vec{v}_{\\text{امرأة}} \\approx \\vec{v}_{\\text{ملكة}}$.\n- خطوات الحساب والنتيجة: لنظام معالجة لغة عربية يتعامل مع الصرف، يؤدي تقطيع كلمة \"فسيكفيكهم\" بـ BPE إلى 4 مقاطع دلالية: `[فـ, سـ, يكفي, كهم]`، مقلصاً قاموس النموذج من $1.2$ مليون كلمة إلى $32,000$ مقطع قياسي بانعدام الرموز المجهولة.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.",
      "Calculate final values: For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: ترسم تضمينات الكلمات معرّفات الرموز في فضاءات اتجاهية دلالية مستمرة $\\mathbb{R}^d$ تعكس العلاقات الهندسية بين المتجهات القياسات الدلالية مثل: $\\vec{v}_{\\text{ملك}} - \\vec{v}_{\\text{رجل}} + \\vec{v}_{\\text{امرأة}} \\approx \\vec{v}_{\\text{ملكة}}$.",
      "حساب الناتج النهائي: لنظام معالجة لغة عربية يتعامل مع الصرف، يؤدي تقطيع كلمة \"فسيكفيكهم\" بـ BPE إلى 4 مقاطع دلالية: `[فـ, سـ, يكفي, كهم]`، مقلصاً قاموس النموذج من $1.2$ مليون كلمة إلى $32,000$ مقطع قياسي بانعدام الرموز المجهولة.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.",
    "hintAr": "طبق القانون الأساسي: ترسم تضمينات الكلمات معرّفات الرموز في فضاءات اتجاهية دلالية مستمرة $\\mathbb{R}^d$ تعكس العلاقات الهندسية بين المتجهات القياسات الدلالية مثل: $\\vec{v}_{\\text{ملك}} - \\vec{v}_{\\text{رجل}} + \\vec{v}_{\\text{امرأة}} \\approx \\vec{v}_{\\text{ملكة}}$.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "th_ai_data_science_ch3_ex_5",
    "titleEn": "Exercise Problem 5: Scaled Dot-Product Multi-Head Self-Attention Mechanisms",
    "titleAr": "تمرين 5: آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 5] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Scaled Dot-Product Multi-Head Self-Attention Mechanisms. Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 5] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.\n- Calculation & Results: In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تُحسب مصفوفة الانتباه بالعلاقة $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$، حيث يمنع معامل القياس $\\sqrt{d_k}$ تضخم نواتج الضرب وتلاشي التدرجات في دالة softmax.\n- خطوات الحساب والنتيجة: في نموذج Transformer ببعد $d_{model} = 768$ و $12$ رأساً للانتباه، يبلغ بعد الرأس $d_k = 64$. ويضمن القياس بـ $\\frac{1}{\\sqrt{64}} = 0.125$ بقاء تباين الجداء قريباً من $1.0$، مما يحقق استقراراً عددياً لـ softmax.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.",
      "Calculate final values: In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions.",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: تُحسب مصفوفة الانتباه بالعلاقة $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$، حيث يمنع معامل القياس $\\sqrt{d_k}$ تضخم نواتج الضرب وتلاشي التدرجات في دالة softmax.",
      "حساب الناتج النهائي: في نموذج Transformer ببعد $d_{model} = 768$ و $12$ رأساً للانتباه، يبلغ بعد الرأس $d_k = 64$. ويضمن القياس بـ $\\frac{1}{\\sqrt{64}} = 0.125$ بقاء تباين الجداء قريباً من $1.0$، مما يحقق استقراراً عددياً لـ softmax.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.",
    "hintAr": "طبق القانون الأساسي: تُحسب مصفوفة الانتباه بالعلاقة $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$، حيث يمنع معامل القياس $\\sqrt{d_k}$ تضخم نواتج الضرب وتلاشي التدرجات في دالة softmax.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "th_ai_data_science_ch3_ex_6",
    "titleEn": "Exercise Problem 6: Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG)",
    "titleAr": "تمرين 6: النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG)",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 6] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG). Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 6] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG). استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.\n- Calculation & Results: An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: يقطع خط RAG الوثائق إلى أجزاء ويولد تضميناتها بترميز كثيف، ويفهرسها بتقنيات الجوار التقريبي HNSW، ويجري بحث تشابه جيب التمام لاستخراج أفضل $k$ أدلة سياقية.\n- خطوات الحساب والنتيجة: مساعد وزاري للإجابة على الأسئلة القانونية يفهرس 10,000 مادة. بتقسيم النصوص إلى مقاطع من 512 رمزاً مع تداخل $15\\%$ واسترجاع أفضل 4 مقاطع بـ HNSW، انخفض معدل الهلوسة من $28.4\\%$ إلى أقل من $1.2\\%$.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.",
      "Calculate final values: An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$.",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: يقطع خط RAG الوثائق إلى أجزاء ويولد تضميناتها بترميز كثيف، ويفهرسها بتقنيات الجوار التقريبي HNSW، ويجري بحث تشابه جيب التمام لاستخراج أفضل $k$ أدلة سياقية.",
      "حساب الناتج النهائي: مساعد وزاري للإجابة على الأسئلة القانونية يفهرس 10,000 مادة. بتقسيم النصوص إلى مقاطع من 512 رمزاً مع تداخل $15\\%$ واسترجاع أفضل 4 مقاطع بـ HNSW، انخفض معدل الهلوسة من $28.4\\%$ إلى أقل من $1.2\\%$.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.",
    "hintAr": "طبق القانون الأساسي: يقطع خط RAG الوثائق إلى أجزاء ويولد تضميناتها بترميز كثيف، ويفهرسها بتقنيات الجوار التقريبي HNSW، ويجري بحث تشابه جيب التمام لاستخراج أفضل $k$ أدلة سياقية.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "th_ai_data_science_ch3_ex_7",
    "titleEn": "Exercise Problem 7: Subword Tokenization (BPE) & Dense Word Embeddings",
    "titleAr": "تمرين 7: تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 7] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Subword Tokenization (BPE) & Dense Word Embeddings. Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 7] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.\n- Calculation & Results: For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: ترسم تضمينات الكلمات معرّفات الرموز في فضاءات اتجاهية دلالية مستمرة $\\mathbb{R}^d$ تعكس العلاقات الهندسية بين المتجهات القياسات الدلالية مثل: $\\vec{v}_{\\text{ملك}} - \\vec{v}_{\\text{رجل}} + \\vec{v}_{\\text{امرأة}} \\approx \\vec{v}_{\\text{ملكة}}$.\n- خطوات الحساب والنتيجة: لنظام معالجة لغة عربية يتعامل مع الصرف، يؤدي تقطيع كلمة \"فسيكفيكهم\" بـ BPE إلى 4 مقاطع دلالية: `[فـ, سـ, يكفي, كهم]`، مقلصاً قاموس النموذج من $1.2$ مليون كلمة إلى $32,000$ مقطع قياسي بانعدام الرموز المجهولة.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.",
      "Calculate final values: For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: ترسم تضمينات الكلمات معرّفات الرموز في فضاءات اتجاهية دلالية مستمرة $\\mathbb{R}^d$ تعكس العلاقات الهندسية بين المتجهات القياسات الدلالية مثل: $\\vec{v}_{\\text{ملك}} - \\vec{v}_{\\text{رجل}} + \\vec{v}_{\\text{امرأة}} \\approx \\vec{v}_{\\text{ملكة}}$.",
      "حساب الناتج النهائي: لنظام معالجة لغة عربية يتعامل مع الصرف، يؤدي تقطيع كلمة \"فسيكفيكهم\" بـ BPE إلى 4 مقاطع دلالية: `[فـ, سـ, يكفي, كهم]`، مقلصاً قاموس النموذج من $1.2$ مليون كلمة إلى $32,000$ مقطع قياسي بانعدام الرموز المجهولة.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.",
    "hintAr": "طبق القانون الأساسي: ترسم تضمينات الكلمات معرّفات الرموز في فضاءات اتجاهية دلالية مستمرة $\\mathbb{R}^d$ تعكس العلاقات الهندسية بين المتجهات القياسات الدلالية مثل: $\\vec{v}_{\\text{ملك}} - \\vec{v}_{\\text{رجل}} + \\vec{v}_{\\text{امرأة}} \\approx \\vec{v}_{\\text{ملكة}}$.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "th_ai_data_science_ch3_ex_8",
    "titleEn": "Exercise Problem 8: Scaled Dot-Product Multi-Head Self-Attention Mechanisms",
    "titleAr": "تمرين 8: آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 8] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Scaled Dot-Product Multi-Head Self-Attention Mechanisms. Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 8] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.\n- Calculation & Results: In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تُحسب مصفوفة الانتباه بالعلاقة $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$، حيث يمنع معامل القياس $\\sqrt{d_k}$ تضخم نواتج الضرب وتلاشي التدرجات في دالة softmax.\n- خطوات الحساب والنتيجة: في نموذج Transformer ببعد $d_{model} = 768$ و $12$ رأساً للانتباه، يبلغ بعد الرأس $d_k = 64$. ويضمن القياس بـ $\\frac{1}{\\sqrt{64}} = 0.125$ بقاء تباين الجداء قريباً من $1.0$، مما يحقق استقراراً عددياً لـ softmax.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.",
      "Calculate final values: In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions.",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: تُحسب مصفوفة الانتباه بالعلاقة $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$، حيث يمنع معامل القياس $\\sqrt{d_k}$ تضخم نواتج الضرب وتلاشي التدرجات في دالة softmax.",
      "حساب الناتج النهائي: في نموذج Transformer ببعد $d_{model} = 768$ و $12$ رأساً للانتباه، يبلغ بعد الرأس $d_k = 64$. ويضمن القياس بـ $\\frac{1}{\\sqrt{64}} = 0.125$ بقاء تباين الجداء قريباً من $1.0$، مما يحقق استقراراً عددياً لـ softmax.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.",
    "hintAr": "طبق القانون الأساسي: تُحسب مصفوفة الانتباه بالعلاقة $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$، حيث يمنع معامل القياس $\\sqrt{d_k}$ تضخم نواتج الضرب وتلاشي التدرجات في دالة softmax.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "th_ai_data_science_ch3_ex_9",
    "titleEn": "Exercise Problem 9: Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG)",
    "titleAr": "تمرين 9: النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG)",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 9] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG). Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 9] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG). استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.\n- Calculation & Results: An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: يقطع خط RAG الوثائق إلى أجزاء ويولد تضميناتها بترميز كثيف، ويفهرسها بتقنيات الجوار التقريبي HNSW، ويجري بحث تشابه جيب التمام لاستخراج أفضل $k$ أدلة سياقية.\n- خطوات الحساب والنتيجة: مساعد وزاري للإجابة على الأسئلة القانونية يفهرس 10,000 مادة. بتقسيم النصوص إلى مقاطع من 512 رمزاً مع تداخل $15\\%$ واسترجاع أفضل 4 مقاطع بـ HNSW، انخفض معدل الهلوسة من $28.4\\%$ إلى أقل من $1.2\\%$.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.",
      "Calculate final values: An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$.",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: يقطع خط RAG الوثائق إلى أجزاء ويولد تضميناتها بترميز كثيف، ويفهرسها بتقنيات الجوار التقريبي HNSW، ويجري بحث تشابه جيب التمام لاستخراج أفضل $k$ أدلة سياقية.",
      "حساب الناتج النهائي: مساعد وزاري للإجابة على الأسئلة القانونية يفهرس 10,000 مادة. بتقسيم النصوص إلى مقاطع من 512 رمزاً مع تداخل $15\\%$ واسترجاع أفضل 4 مقاطع بـ HNSW، انخفض معدل الهلوسة من $28.4\\%$ إلى أقل من $1.2\\%$.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.",
    "hintAr": "طبق القانون الأساسي: يقطع خط RAG الوثائق إلى أجزاء ويولد تضميناتها بترميز كثيف، ويفهرسها بتقنيات الجوار التقريبي HNSW، ويجري بحث تشابه جيب التمام لاستخراج أفضل $k$ أدلة سياقية.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "th_ai_data_science_ch3_ex_10",
    "titleEn": "Exercise Problem 10: Subword Tokenization (BPE) & Dense Word Embeddings",
    "titleAr": "تمرين 10: تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 10] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Subword Tokenization (BPE) & Dense Word Embeddings. Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 10] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.\n- Calculation & Results: For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: ترسم تضمينات الكلمات معرّفات الرموز في فضاءات اتجاهية دلالية مستمرة $\\mathbb{R}^d$ تعكس العلاقات الهندسية بين المتجهات القياسات الدلالية مثل: $\\vec{v}_{\\text{ملك}} - \\vec{v}_{\\text{رجل}} + \\vec{v}_{\\text{امرأة}} \\approx \\vec{v}_{\\text{ملكة}}$.\n- خطوات الحساب والنتيجة: لنظام معالجة لغة عربية يتعامل مع الصرف، يؤدي تقطيع كلمة \"فسيكفيكهم\" بـ BPE إلى 4 مقاطع دلالية: `[فـ, سـ, يكفي, كهم]`، مقلصاً قاموس النموذج من $1.2$ مليون كلمة إلى $32,000$ مقطع قياسي بانعدام الرموز المجهولة.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.",
      "Calculate final values: For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: ترسم تضمينات الكلمات معرّفات الرموز في فضاءات اتجاهية دلالية مستمرة $\\mathbb{R}^d$ تعكس العلاقات الهندسية بين المتجهات القياسات الدلالية مثل: $\\vec{v}_{\\text{ملك}} - \\vec{v}_{\\text{رجل}} + \\vec{v}_{\\text{امرأة}} \\approx \\vec{v}_{\\text{ملكة}}$.",
      "حساب الناتج النهائي: لنظام معالجة لغة عربية يتعامل مع الصرف، يؤدي تقطيع كلمة \"فسيكفيكهم\" بـ BPE إلى 4 مقاطع دلالية: `[فـ, سـ, يكفي, كهم]`، مقلصاً قاموس النموذج من $1.2$ مليون كلمة إلى $32,000$ مقطع قياسي بانعدام الرموز المجهولة.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.",
    "hintAr": "طبق القانون الأساسي: ترسم تضمينات الكلمات معرّفات الرموز في فضاءات اتجاهية دلالية مستمرة $\\mathbb{R}^d$ تعكس العلاقات الهندسية بين المتجهات القياسات الدلالية مثل: $\\vec{v}_{\\text{ملك}} - \\vec{v}_{\\text{رجل}} + \\vec{v}_{\\text{امرأة}} \\approx \\vec{v}_{\\text{ملكة}}$.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "th_ai_data_science_ch3_ex_11",
    "titleEn": "Exercise Problem 11: Scaled Dot-Product Multi-Head Self-Attention Mechanisms",
    "titleAr": "تمرين 11: آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 11] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Scaled Dot-Product Multi-Head Self-Attention Mechanisms. Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 11] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.\n- Calculation & Results: In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تُحسب مصفوفة الانتباه بالعلاقة $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$، حيث يمنع معامل القياس $\\sqrt{d_k}$ تضخم نواتج الضرب وتلاشي التدرجات في دالة softmax.\n- خطوات الحساب والنتيجة: في نموذج Transformer ببعد $d_{model} = 768$ و $12$ رأساً للانتباه، يبلغ بعد الرأس $d_k = 64$. ويضمن القياس بـ $\\frac{1}{\\sqrt{64}} = 0.125$ بقاء تباين الجداء قريباً من $1.0$، مما يحقق استقراراً عددياً لـ softmax.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.",
      "Calculate final values: In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions.",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: تُحسب مصفوفة الانتباه بالعلاقة $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$، حيث يمنع معامل القياس $\\sqrt{d_k}$ تضخم نواتج الضرب وتلاشي التدرجات في دالة softmax.",
      "حساب الناتج النهائي: في نموذج Transformer ببعد $d_{model} = 768$ و $12$ رأساً للانتباه، يبلغ بعد الرأس $d_k = 64$. ويضمن القياس بـ $\\frac{1}{\\sqrt{64}} = 0.125$ بقاء تباين الجداء قريباً من $1.0$، مما يحقق استقراراً عددياً لـ softmax.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.",
    "hintAr": "طبق القانون الأساسي: تُحسب مصفوفة الانتباه بالعلاقة $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$، حيث يمنع معامل القياس $\\sqrt{d_k}$ تضخم نواتج الضرب وتلاشي التدرجات في دالة softmax.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "th_ai_data_science_ch3_ex_12",
    "titleEn": "Exercise Problem 12: Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG)",
    "titleAr": "تمرين 12: النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG)",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 12] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG). Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 12] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG). استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.\n- Calculation & Results: An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: يقطع خط RAG الوثائق إلى أجزاء ويولد تضميناتها بترميز كثيف، ويفهرسها بتقنيات الجوار التقريبي HNSW، ويجري بحث تشابه جيب التمام لاستخراج أفضل $k$ أدلة سياقية.\n- خطوات الحساب والنتيجة: مساعد وزاري للإجابة على الأسئلة القانونية يفهرس 10,000 مادة. بتقسيم النصوص إلى مقاطع من 512 رمزاً مع تداخل $15\\%$ واسترجاع أفضل 4 مقاطع بـ HNSW، انخفض معدل الهلوسة من $28.4\\%$ إلى أقل من $1.2\\%$.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.",
      "Calculate final values: An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$.",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: يقطع خط RAG الوثائق إلى أجزاء ويولد تضميناتها بترميز كثيف، ويفهرسها بتقنيات الجوار التقريبي HNSW، ويجري بحث تشابه جيب التمام لاستخراج أفضل $k$ أدلة سياقية.",
      "حساب الناتج النهائي: مساعد وزاري للإجابة على الأسئلة القانونية يفهرس 10,000 مادة. بتقسيم النصوص إلى مقاطع من 512 رمزاً مع تداخل $15\\%$ واسترجاع أفضل 4 مقاطع بـ HNSW، انخفض معدل الهلوسة من $28.4\\%$ إلى أقل من $1.2\\%$.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.",
    "hintAr": "طبق القانون الأساسي: يقطع خط RAG الوثائق إلى أجزاء ويولد تضميناتها بترميز كثيف، ويفهرسها بتقنيات الجوار التقريبي HNSW، ويجري بحث تشابه جيب التمام لاستخراج أفضل $k$ أدلة سياقية.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "th_ai_data_science_ch3_ex_13",
    "titleEn": "Exercise Problem 13: Subword Tokenization (BPE) & Dense Word Embeddings",
    "titleAr": "تمرين 13: تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 13] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Subword Tokenization (BPE) & Dense Word Embeddings. Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 13] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن تقطيع الكلمات إلى مقاطع فرعية (BPE) وتضمينات الكلمات الكثيفة. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.\n- Calculation & Results: For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: ترسم تضمينات الكلمات معرّفات الرموز في فضاءات اتجاهية دلالية مستمرة $\\mathbb{R}^d$ تعكس العلاقات الهندسية بين المتجهات القياسات الدلالية مثل: $\\vec{v}_{\\text{ملك}} - \\vec{v}_{\\text{رجل}} + \\vec{v}_{\\text{امرأة}} \\approx \\vec{v}_{\\text{ملكة}}$.\n- خطوات الحساب والنتيجة: لنظام معالجة لغة عربية يتعامل مع الصرف، يؤدي تقطيع كلمة \"فسيكفيكهم\" بـ BPE إلى 4 مقاطع دلالية: `[فـ, سـ, يكفي, كهم]`، مقلصاً قاموس النموذج من $1.2$ مليون كلمة إلى $32,000$ مقطع قياسي بانعدام الرموز المجهولة.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.",
      "Calculate final values: For an Arabic NLP system processing Classical Arabic morphology, tokenizing the word \"فسيكفيكهم\" using BPE splits it into 4 semantic subword tokens: `[فـ, سـ, يكفي, كهم]`, reducing total model vocabulary from $1.2\\text{ million}$ raw words to $32,000$ standardized subwords with zero OOV tokens.",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: ترسم تضمينات الكلمات معرّفات الرموز في فضاءات اتجاهية دلالية مستمرة $\\mathbb{R}^d$ تعكس العلاقات الهندسية بين المتجهات القياسات الدلالية مثل: $\\vec{v}_{\\text{ملك}} - \\vec{v}_{\\text{رجل}} + \\vec{v}_{\\text{امرأة}} \\approx \\vec{v}_{\\text{ملكة}}$.",
      "حساب الناتج النهائي: لنظام معالجة لغة عربية يتعامل مع الصرف، يؤدي تقطيع كلمة \"فسيكفيكهم\" بـ BPE إلى 4 مقاطع دلالية: `[فـ, سـ, يكفي, كهم]`، مقلصاً قاموس النموذج من $1.2$ مليون كلمة إلى $32,000$ مقطع قياسي بانعدام الرموز المجهولة.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: Word embeddings map discrete token IDs into continuous semantic vector spaces $\\mathbb{R}^d$ where vector geometric relationships capture semantic analogies such as $\\vec{v}_{\\text{King}} - \\vec{v}_{\\text{Man}} + \\vec{v}_{\\text{Woman}} \\approx \\vec{v}_{\\text{Queen}}$.",
    "hintAr": "طبق القانون الأساسي: ترسم تضمينات الكلمات معرّفات الرموز في فضاءات اتجاهية دلالية مستمرة $\\mathbb{R}^d$ تعكس العلاقات الهندسية بين المتجهات القياسات الدلالية مثل: $\\vec{v}_{\\text{ملك}} - \\vec{v}_{\\text{رجل}} + \\vec{v}_{\\text{امرأة}} \\approx \\vec{v}_{\\text{ملكة}}$.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "th_ai_data_science_ch3_ex_14",
    "titleEn": "Exercise Problem 14: Scaled Dot-Product Multi-Head Self-Attention Mechanisms",
    "titleAr": "تمرين 14: آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 14] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Scaled Dot-Product Multi-Head Self-Attention Mechanisms. Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 14] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن آليات الانتباه الذاتي متعددة الرؤوس والضرب القياسي المقاس. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.\n- Calculation & Results: In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تُحسب مصفوفة الانتباه بالعلاقة $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$، حيث يمنع معامل القياس $\\sqrt{d_k}$ تضخم نواتج الضرب وتلاشي التدرجات في دالة softmax.\n- خطوات الحساب والنتيجة: في نموذج Transformer ببعد $d_{model} = 768$ و $12$ رأساً للانتباه، يبلغ بعد الرأس $d_k = 64$. ويضمن القياس بـ $\\frac{1}{\\sqrt{64}} = 0.125$ بقاء تباين الجداء قريباً من $1.0$، مما يحقق استقراراً عددياً لـ softmax.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.",
      "Calculate final values: In a transformer with hidden size $d_{model} = 768$ and $h = 12$ attention heads, head projection dimension is $d_k = \\frac{768}{12} = 64$. Scaling the dot-product matrix by $\\frac{1}{\\sqrt{64}} = \\frac{1}{8} = 0.125$ preserves variance $\\text{Var}(q \\cdot k) \\approx 1.0$, maintaining numerically stable softmax distributions.",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: تُحسب مصفوفة الانتباه بالعلاقة $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$، حيث يمنع معامل القياس $\\sqrt{d_k}$ تضخم نواتج الضرب وتلاشي التدرجات في دالة softmax.",
      "حساب الناتج النهائي: في نموذج Transformer ببعد $d_{model} = 768$ و $12$ رأساً للانتباه، يبلغ بعد الرأس $d_k = 64$. ويضمن القياس بـ $\\frac{1}{\\sqrt{64}} = 0.125$ بقاء تباين الجداء قريباً من $1.0$، مما يحقق استقراراً عددياً لـ softmax.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: The attention score is computed as $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, where scaling factor $\\sqrt{d_k}$ prevents dot products from growing excessively large and pushing the softmax into regions with vanishing gradients.",
    "hintAr": "طبق القانون الأساسي: تُحسب مصفوفة الانتباه بالعلاقة $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$، حيث يمنع معامل القياس $\\sqrt{d_k}$ تضخم نواتج الضرب وتلاشي التدرجات في دالة softmax.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "th_ai_data_science_ch3_ex_15",
    "titleEn": "Exercise Problem 15: Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG)",
    "titleAr": "تمرين 15: النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG)",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 15] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG). Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 15] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن النماذج اللغوية الضخمة (LLMs) والتوليد المعزز بالاسترجاع (RAG). استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.\n- Calculation & Results: An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: يقطع خط RAG الوثائق إلى أجزاء ويولد تضميناتها بترميز كثيف، ويفهرسها بتقنيات الجوار التقريبي HNSW، ويجري بحث تشابه جيب التمام لاستخراج أفضل $k$ أدلة سياقية.\n- خطوات الحساب والنتيجة: مساعد وزاري للإجابة على الأسئلة القانونية يفهرس 10,000 مادة. بتقسيم النصوص إلى مقاطع من 512 رمزاً مع تداخل $15\\%$ واسترجاع أفضل 4 مقاطع بـ HNSW، انخفض معدل الهلوسة من $28.4\\%$ إلى أقل من $1.2\\%$.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.",
      "Calculate final values: An Egyptian Ministry legal question-answering assistant indexes 10,000 legal articles. By applying chunking with size 512 tokens and $15\\%$ overlap followed by dense HNSW retrieval with top-$k=4$ passages, the system reduces factual hallucination rates from $28.4\\%$ down to $<1.2\\%$.",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: يقطع خط RAG الوثائق إلى أجزاء ويولد تضميناتها بترميز كثيف، ويفهرسها بتقنيات الجوار التقريبي HNSW، ويجري بحث تشابه جيب التمام لاستخراج أفضل $k$ أدلة سياقية.",
      "حساب الناتج النهائي: مساعد وزاري للإجابة على الأسئلة القانونية يفهرس 10,000 مادة. بتقسيم النصوص إلى مقاطع من 512 رمزاً مع تداخل $15\\%$ واسترجاع أفضل 4 مقاطع بـ HNSW، انخفض معدل الهلوسة من $28.4\\%$ إلى أقل من $1.2\\%$.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: A RAG pipeline segments source documents into chunks, generates vector embeddings using an encoder, indexes them via Approximate Nearest Neighbors (ANN, e.g., HNSW), and performs Cosine Similarity search to extract top-$k$ contextual evidence.",
    "hintAr": "طبق القانون الأساسي: يقطع خط RAG الوثائق إلى أجزاء ويولد تضميناتها بترميز كثيف، ويفهرسها بتقنيات الجوار التقريبي HNSW، ويجري بحث تشابه جيب التمام لاستخراج أفضل $k$ أدلة سياقية.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  }
];
