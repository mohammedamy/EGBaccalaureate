import type { SolvedProblem } from '../../../types/curriculum';

export const th_ai_data_science_ch1SolvedExamples: SolvedProblem[] = [
  {
    "id": "th_ai_data_science_ch1_solved_1",
    "titleEn": "Solved Example 1: Singular Value Decomposition (SVD) & Principal Component Analysis (PCA)",
    "titleAr": "مثال محلول 1: تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA)",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 1] Design, formulate, and evaluate an AI/Data Science model architecture applying Singular Value Decomposition (SVD) & Principal Component Analysis (PCA). Specify the mathematical formulations, optimization equations, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 1] صمم واشتق وقيم معمارية نموذج ذكاء اصطناعي أو علم بيانات بتطبيق تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA). وضح الصياغات الرياضية ومعادلات التحسين وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify problem specifications and statistical constraints.\nStep 2: Formulate governing analytical equation: Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.\nStep 3: Execute numerical substitution: For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.\nStep 4: Verify convergence stability, generalization bounds, and algorithmic performance compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات المسألة والقيود الإحصائية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: يحلل تفكيك القيم المفردة (SVD) مصفوفة البيانات $X$ إلى $X = U \\Sigma V^T$، حيث تمثل المتجهات المفردة اليمنى في $V$ اتجاهات المكونات الرئيسية وتتعلق القيم المفردة $\\sigma_i$ بالتباين بالعلاقة $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.\nالخطوة ٣: التعويض العددي وحساب النتائج: لمجموعة بيانات بقيم ذاتية لمصفوفة التغاير الممركزة $\\lambda_1 = 12.0$ و $\\lambda_2 = 5.0$ و $\\lambda_3 = 2.0$ و $\\lambda_4 = 1.0$، فإن الاحتفاظ بأول مركبين رئيسيين يفسر نسبة تباين قدرها $\\frac{17.0}{20.0} = 85.0\\%$.\nالخطوة ٤: التحقق من استقرار التقارب، حدود التعميم، وتوافق أداء النموذج.",
    "stepByStepSolutionEn": [
      "Identify system variables, loss functions, and optimization constraints.",
      "Apply formulation: Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "Perform calculation: For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.",
      "Confirm operational validity and alignment with international AI standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد متغيرات النظام، دوال الخسارة، وقيود التحسين.",
      "تطبيق المعادلة الخوارزمية: يحلل تفكيك القيم المفردة (SVD) مصفوفة البيانات $X$ إلى $X = U \\Sigma V^T$، حيث تمثل المتجهات المفردة اليمنى في $V$ اتجاهات المكونات الرئيسية وتتعلق القيم المفردة $\\sigma_i$ بالتباين بالعلاقة $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "الحساب العددي الدقيق: لمجموعة بيانات بقيم ذاتية لمصفوفة التغاير الممركزة $\\lambda_1 = 12.0$ و $\\lambda_2 = 5.0$ و $\\lambda_3 = 2.0$ و $\\lambda_4 = 1.0$، فإن الاحتفاظ بأول مركبين رئيسيين يفسر نسبة تباين قدرها $\\frac{17.0}{20.0} = 85.0\\%$.",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للذكاء الاصطناعي."
    ],
    "hintEn": "Recall the governing analytical relations for Singular Value Decomposition (SVD) & Principal Component Analysis (PCA).",
    "hintAr": "تذكر القوانين والعلاقات التحليلية الحاكمة لـ تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA).",
    "teacherTipEn": "Pay careful attention to vector dimensions and normalization constraints when implementing Singular Value Decomposition (SVD) & Principal Component Analysis (PCA).",
    "teacherTipAr": "انتبه جيداً لأبعاد المتجهات وشروط المعايرة والتقييس عند تطبيق تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA)."
  },
  {
    "id": "th_ai_data_science_ch1_solved_2",
    "titleEn": "Solved Example 2: Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam)",
    "titleAr": "مثال محلول 2: التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam)",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 2] Design, formulate, and evaluate an AI/Data Science model architecture applying Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam). Specify the mathematical formulations, optimization equations, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 2] صمم واشتق وقيم معمارية نموذج ذكاء اصطناعي أو علم بيانات بتطبيق التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam). وضح الصياغات الرياضية ومعادلات التحسين وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify problem specifications and statistical constraints.\nStep 2: Formulate governing analytical equation: The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.\nStep 3: Execute numerical substitution: In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$.\nStep 4: Verify convergence stability, generalization bounds, and algorithmic performance compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات المسألة والقيود الإحصائية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: يحسب محسن Adam المتوسطات المتحركة المتضائلة أسياً للتدرجات السابقة ($m_t$) ولمربعات التدرجات ($v_t$)، ويطبق تصحيح الانحياز $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ و $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.\nالخطوة ٣: التعويض العددي وحساب النتائج: عند تدريب نموذج انحدار لوجستي بخسارة الإنتروبيا المتقاطعة، لخاصية غير معيرة بتدرج $g_1 = 0.8$ ومعدل تعلم $\\eta = 0.01$ ومحسن Adam بمعاملات $\\beta_1 = 0.9, \\beta_2 = 0.999$ عند الخطوة $t=1$، فإن مقدار التحديث الفعلي هو $\\Delta \\theta_1 = -0.010$.\nالخطوة ٤: التحقق من استقرار التقارب، حدود التعميم، وتوافق أداء النموذج.",
    "stepByStepSolutionEn": [
      "Identify system variables, loss functions, and optimization constraints.",
      "Apply formulation: The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "Perform calculation: In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$.",
      "Confirm operational validity and alignment with international AI standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد متغيرات النظام، دوال الخسارة، وقيود التحسين.",
      "تطبيق المعادلة الخوارزمية: يحسب محسن Adam المتوسطات المتحركة المتضائلة أسياً للتدرجات السابقة ($m_t$) ولمربعات التدرجات ($v_t$)، ويطبق تصحيح الانحياز $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ و $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "الحساب العددي الدقيق: عند تدريب نموذج انحدار لوجستي بخسارة الإنتروبيا المتقاطعة، لخاصية غير معيرة بتدرج $g_1 = 0.8$ ومعدل تعلم $\\eta = 0.01$ ومحسن Adam بمعاملات $\\beta_1 = 0.9, \\beta_2 = 0.999$ عند الخطوة $t=1$، فإن مقدار التحديث الفعلي هو $\\Delta \\theta_1 = -0.010$.",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للذكاء الاصطناعي."
    ],
    "hintEn": "Recall the governing analytical relations for Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam).",
    "hintAr": "تذكر القوانين والعلاقات التحليلية الحاكمة لـ التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam).",
    "teacherTipEn": "Pay careful attention to vector dimensions and normalization constraints when implementing Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam).",
    "teacherTipAr": "انتبه جيداً لأبعاد المتجهات وشروط المعايرة والتقييس عند تطبيق التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam)."
  },
  {
    "id": "th_ai_data_science_ch1_solved_3",
    "titleEn": "Solved Example 3: L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction",
    "titleAr": "مثال محلول 3: التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 3] Design, formulate, and evaluate an AI/Data Science model architecture applying L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction. Specify the mathematical formulations, optimization equations, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 3] صمم واشتق وقيم معمارية نموذج ذكاء اصطناعي أو علم بيانات بتطبيق التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة. وضح الصياغات الرياضية ومعادلات التحسين وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify problem specifications and statistical constraints.\nStep 2: Formulate governing analytical equation: L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.\nStep 3: Execute numerical substitution: When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS.\nStep 4: Verify convergence stability, generalization bounds, and algorithmic performance compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات المسألة والقيود الإحصائية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: يضيف تنظيم L2 (Ridge) عقوبة $\\frac{1}{2}\\lambda \\|w\\|_2^2$، مما يقلص الأوزان نحو الصفر تدريجياً عبر تلاشي الوزن دون تصفيرها التام، مما يعالج مشكلة التعددية الخطية.\nالخطوة ٣: التعويض العددي وحساب النتائج: عند نمذجة إنتاجية المحاصيل الزراعية بـ 50 متغيراً، يؤدي تطبيق عقوبة L1 بقيمة $\\lambda = 0.5$ إلى تصفير 38 معاملاً أرصادياً غير ضروري مع الإبقاء على 12 متغيراً مؤثراً، خافضاً خطأ التحقق بمقدار $24.5\\%$.\nالخطوة ٤: التحقق من استقرار التقارب، حدود التعميم، وتوافق أداء النموذج.",
    "stepByStepSolutionEn": [
      "Identify system variables, loss functions, and optimization constraints.",
      "Apply formulation: L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.",
      "Perform calculation: When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS.",
      "Confirm operational validity and alignment with international AI standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد متغيرات النظام، دوال الخسارة، وقيود التحسين.",
      "تطبيق المعادلة الخوارزمية: يضيف تنظيم L2 (Ridge) عقوبة $\\frac{1}{2}\\lambda \\|w\\|_2^2$، مما يقلص الأوزان نحو الصفر تدريجياً عبر تلاشي الوزن دون تصفيرها التام، مما يعالج مشكلة التعددية الخطية.",
      "الحساب العددي الدقيق: عند نمذجة إنتاجية المحاصيل الزراعية بـ 50 متغيراً، يؤدي تطبيق عقوبة L1 بقيمة $\\lambda = 0.5$ إلى تصفير 38 معاملاً أرصادياً غير ضروري مع الإبقاء على 12 متغيراً مؤثراً، خافضاً خطأ التحقق بمقدار $24.5\\%$.",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للذكاء الاصطناعي."
    ],
    "hintEn": "Recall the governing analytical relations for L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction.",
    "hintAr": "تذكر القوانين والعلاقات التحليلية الحاكمة لـ التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة.",
    "teacherTipEn": "Pay careful attention to vector dimensions and normalization constraints when implementing L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction.",
    "teacherTipAr": "انتبه جيداً لأبعاد المتجهات وشروط المعايرة والتقييس عند تطبيق التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة."
  },
  {
    "id": "th_ai_data_science_ch1_solved_4",
    "titleEn": "Solved Example 4: Singular Value Decomposition (SVD) & Principal Component Analysis (PCA)",
    "titleAr": "مثال محلول 4: تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA)",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 4] Design, formulate, and evaluate an AI/Data Science model architecture applying Singular Value Decomposition (SVD) & Principal Component Analysis (PCA). Specify the mathematical formulations, optimization equations, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 4] صمم واشتق وقيم معمارية نموذج ذكاء اصطناعي أو علم بيانات بتطبيق تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA). وضح الصياغات الرياضية ومعادلات التحسين وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify problem specifications and statistical constraints.\nStep 2: Formulate governing analytical equation: Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.\nStep 3: Execute numerical substitution: For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.\nStep 4: Verify convergence stability, generalization bounds, and algorithmic performance compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات المسألة والقيود الإحصائية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: يحلل تفكيك القيم المفردة (SVD) مصفوفة البيانات $X$ إلى $X = U \\Sigma V^T$، حيث تمثل المتجهات المفردة اليمنى في $V$ اتجاهات المكونات الرئيسية وتتعلق القيم المفردة $\\sigma_i$ بالتباين بالعلاقة $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.\nالخطوة ٣: التعويض العددي وحساب النتائج: لمجموعة بيانات بقيم ذاتية لمصفوفة التغاير الممركزة $\\lambda_1 = 12.0$ و $\\lambda_2 = 5.0$ و $\\lambda_3 = 2.0$ و $\\lambda_4 = 1.0$، فإن الاحتفاظ بأول مركبين رئيسيين يفسر نسبة تباين قدرها $\\frac{17.0}{20.0} = 85.0\\%$.\nالخطوة ٤: التحقق من استقرار التقارب، حدود التعميم، وتوافق أداء النموذج.",
    "stepByStepSolutionEn": [
      "Identify system variables, loss functions, and optimization constraints.",
      "Apply formulation: Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "Perform calculation: For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.",
      "Confirm operational validity and alignment with international AI standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد متغيرات النظام، دوال الخسارة، وقيود التحسين.",
      "تطبيق المعادلة الخوارزمية: يحلل تفكيك القيم المفردة (SVD) مصفوفة البيانات $X$ إلى $X = U \\Sigma V^T$، حيث تمثل المتجهات المفردة اليمنى في $V$ اتجاهات المكونات الرئيسية وتتعلق القيم المفردة $\\sigma_i$ بالتباين بالعلاقة $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "الحساب العددي الدقيق: لمجموعة بيانات بقيم ذاتية لمصفوفة التغاير الممركزة $\\lambda_1 = 12.0$ و $\\lambda_2 = 5.0$ و $\\lambda_3 = 2.0$ و $\\lambda_4 = 1.0$، فإن الاحتفاظ بأول مركبين رئيسيين يفسر نسبة تباين قدرها $\\frac{17.0}{20.0} = 85.0\\%$.",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للذكاء الاصطناعي."
    ],
    "hintEn": "Recall the governing analytical relations for Singular Value Decomposition (SVD) & Principal Component Analysis (PCA).",
    "hintAr": "تذكر القوانين والعلاقات التحليلية الحاكمة لـ تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA).",
    "teacherTipEn": "Pay careful attention to vector dimensions and normalization constraints when implementing Singular Value Decomposition (SVD) & Principal Component Analysis (PCA).",
    "teacherTipAr": "انتبه جيداً لأبعاد المتجهات وشروط المعايرة والتقييس عند تطبيق تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA)."
  },
  {
    "id": "th_ai_data_science_ch1_solved_5",
    "titleEn": "Solved Example 5: Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam)",
    "titleAr": "مثال محلول 5: التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam)",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 5] Design, formulate, and evaluate an AI/Data Science model architecture applying Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam). Specify the mathematical formulations, optimization equations, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 5] صمم واشتق وقيم معمارية نموذج ذكاء اصطناعي أو علم بيانات بتطبيق التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam). وضح الصياغات الرياضية ومعادلات التحسين وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify problem specifications and statistical constraints.\nStep 2: Formulate governing analytical equation: The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.\nStep 3: Execute numerical substitution: In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$.\nStep 4: Verify convergence stability, generalization bounds, and algorithmic performance compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات المسألة والقيود الإحصائية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: يحسب محسن Adam المتوسطات المتحركة المتضائلة أسياً للتدرجات السابقة ($m_t$) ولمربعات التدرجات ($v_t$)، ويطبق تصحيح الانحياز $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ و $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.\nالخطوة ٣: التعويض العددي وحساب النتائج: عند تدريب نموذج انحدار لوجستي بخسارة الإنتروبيا المتقاطعة، لخاصية غير معيرة بتدرج $g_1 = 0.8$ ومعدل تعلم $\\eta = 0.01$ ومحسن Adam بمعاملات $\\beta_1 = 0.9, \\beta_2 = 0.999$ عند الخطوة $t=1$، فإن مقدار التحديث الفعلي هو $\\Delta \\theta_1 = -0.010$.\nالخطوة ٤: التحقق من استقرار التقارب، حدود التعميم، وتوافق أداء النموذج.",
    "stepByStepSolutionEn": [
      "Identify system variables, loss functions, and optimization constraints.",
      "Apply formulation: The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "Perform calculation: In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$.",
      "Confirm operational validity and alignment with international AI standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد متغيرات النظام، دوال الخسارة، وقيود التحسين.",
      "تطبيق المعادلة الخوارزمية: يحسب محسن Adam المتوسطات المتحركة المتضائلة أسياً للتدرجات السابقة ($m_t$) ولمربعات التدرجات ($v_t$)، ويطبق تصحيح الانحياز $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ و $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "الحساب العددي الدقيق: عند تدريب نموذج انحدار لوجستي بخسارة الإنتروبيا المتقاطعة، لخاصية غير معيرة بتدرج $g_1 = 0.8$ ومعدل تعلم $\\eta = 0.01$ ومحسن Adam بمعاملات $\\beta_1 = 0.9, \\beta_2 = 0.999$ عند الخطوة $t=1$، فإن مقدار التحديث الفعلي هو $\\Delta \\theta_1 = -0.010$.",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للذكاء الاصطناعي."
    ],
    "hintEn": "Recall the governing analytical relations for Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam).",
    "hintAr": "تذكر القوانين والعلاقات التحليلية الحاكمة لـ التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam).",
    "teacherTipEn": "Pay careful attention to vector dimensions and normalization constraints when implementing Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam).",
    "teacherTipAr": "انتبه جيداً لأبعاد المتجهات وشروط المعايرة والتقييس عند تطبيق التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam)."
  },
  {
    "id": "th_ai_data_science_ch1_solved_6",
    "titleEn": "Solved Example 6: L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction",
    "titleAr": "مثال محلول 6: التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 6] Design, formulate, and evaluate an AI/Data Science model architecture applying L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction. Specify the mathematical formulations, optimization equations, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 6] صمم واشتق وقيم معمارية نموذج ذكاء اصطناعي أو علم بيانات بتطبيق التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة. وضح الصياغات الرياضية ومعادلات التحسين وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify problem specifications and statistical constraints.\nStep 2: Formulate governing analytical equation: L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.\nStep 3: Execute numerical substitution: When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS.\nStep 4: Verify convergence stability, generalization bounds, and algorithmic performance compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات المسألة والقيود الإحصائية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: يضيف تنظيم L2 (Ridge) عقوبة $\\frac{1}{2}\\lambda \\|w\\|_2^2$، مما يقلص الأوزان نحو الصفر تدريجياً عبر تلاشي الوزن دون تصفيرها التام، مما يعالج مشكلة التعددية الخطية.\nالخطوة ٣: التعويض العددي وحساب النتائج: عند نمذجة إنتاجية المحاصيل الزراعية بـ 50 متغيراً، يؤدي تطبيق عقوبة L1 بقيمة $\\lambda = 0.5$ إلى تصفير 38 معاملاً أرصادياً غير ضروري مع الإبقاء على 12 متغيراً مؤثراً، خافضاً خطأ التحقق بمقدار $24.5\\%$.\nالخطوة ٤: التحقق من استقرار التقارب، حدود التعميم، وتوافق أداء النموذج.",
    "stepByStepSolutionEn": [
      "Identify system variables, loss functions, and optimization constraints.",
      "Apply formulation: L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.",
      "Perform calculation: When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS.",
      "Confirm operational validity and alignment with international AI standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد متغيرات النظام، دوال الخسارة، وقيود التحسين.",
      "تطبيق المعادلة الخوارزمية: يضيف تنظيم L2 (Ridge) عقوبة $\\frac{1}{2}\\lambda \\|w\\|_2^2$، مما يقلص الأوزان نحو الصفر تدريجياً عبر تلاشي الوزن دون تصفيرها التام، مما يعالج مشكلة التعددية الخطية.",
      "الحساب العددي الدقيق: عند نمذجة إنتاجية المحاصيل الزراعية بـ 50 متغيراً، يؤدي تطبيق عقوبة L1 بقيمة $\\lambda = 0.5$ إلى تصفير 38 معاملاً أرصادياً غير ضروري مع الإبقاء على 12 متغيراً مؤثراً، خافضاً خطأ التحقق بمقدار $24.5\\%$.",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للذكاء الاصطناعي."
    ],
    "hintEn": "Recall the governing analytical relations for L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction.",
    "hintAr": "تذكر القوانين والعلاقات التحليلية الحاكمة لـ التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة.",
    "teacherTipEn": "Pay careful attention to vector dimensions and normalization constraints when implementing L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction.",
    "teacherTipAr": "انتبه جيداً لأبعاد المتجهات وشروط المعايرة والتقييس عند تطبيق التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة."
  },
  {
    "id": "th_ai_data_science_ch1_solved_7",
    "titleEn": "Solved Example 7: Singular Value Decomposition (SVD) & Principal Component Analysis (PCA)",
    "titleAr": "مثال محلول 7: تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA)",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 7] Design, formulate, and evaluate an AI/Data Science model architecture applying Singular Value Decomposition (SVD) & Principal Component Analysis (PCA). Specify the mathematical formulations, optimization equations, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 7] صمم واشتق وقيم معمارية نموذج ذكاء اصطناعي أو علم بيانات بتطبيق تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA). وضح الصياغات الرياضية ومعادلات التحسين وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify problem specifications and statistical constraints.\nStep 2: Formulate governing analytical equation: Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.\nStep 3: Execute numerical substitution: For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.\nStep 4: Verify convergence stability, generalization bounds, and algorithmic performance compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات المسألة والقيود الإحصائية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: يحلل تفكيك القيم المفردة (SVD) مصفوفة البيانات $X$ إلى $X = U \\Sigma V^T$، حيث تمثل المتجهات المفردة اليمنى في $V$ اتجاهات المكونات الرئيسية وتتعلق القيم المفردة $\\sigma_i$ بالتباين بالعلاقة $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.\nالخطوة ٣: التعويض العددي وحساب النتائج: لمجموعة بيانات بقيم ذاتية لمصفوفة التغاير الممركزة $\\lambda_1 = 12.0$ و $\\lambda_2 = 5.0$ و $\\lambda_3 = 2.0$ و $\\lambda_4 = 1.0$، فإن الاحتفاظ بأول مركبين رئيسيين يفسر نسبة تباين قدرها $\\frac{17.0}{20.0} = 85.0\\%$.\nالخطوة ٤: التحقق من استقرار التقارب، حدود التعميم، وتوافق أداء النموذج.",
    "stepByStepSolutionEn": [
      "Identify system variables, loss functions, and optimization constraints.",
      "Apply formulation: Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "Perform calculation: For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.",
      "Confirm operational validity and alignment with international AI standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد متغيرات النظام، دوال الخسارة، وقيود التحسين.",
      "تطبيق المعادلة الخوارزمية: يحلل تفكيك القيم المفردة (SVD) مصفوفة البيانات $X$ إلى $X = U \\Sigma V^T$، حيث تمثل المتجهات المفردة اليمنى في $V$ اتجاهات المكونات الرئيسية وتتعلق القيم المفردة $\\sigma_i$ بالتباين بالعلاقة $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "الحساب العددي الدقيق: لمجموعة بيانات بقيم ذاتية لمصفوفة التغاير الممركزة $\\lambda_1 = 12.0$ و $\\lambda_2 = 5.0$ و $\\lambda_3 = 2.0$ و $\\lambda_4 = 1.0$، فإن الاحتفاظ بأول مركبين رئيسيين يفسر نسبة تباين قدرها $\\frac{17.0}{20.0} = 85.0\\%$.",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للذكاء الاصطناعي."
    ],
    "hintEn": "Recall the governing analytical relations for Singular Value Decomposition (SVD) & Principal Component Analysis (PCA).",
    "hintAr": "تذكر القوانين والعلاقات التحليلية الحاكمة لـ تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA).",
    "teacherTipEn": "Pay careful attention to vector dimensions and normalization constraints when implementing Singular Value Decomposition (SVD) & Principal Component Analysis (PCA).",
    "teacherTipAr": "انتبه جيداً لأبعاد المتجهات وشروط المعايرة والتقييس عند تطبيق تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA)."
  },
  {
    "id": "th_ai_data_science_ch1_solved_8",
    "titleEn": "Solved Example 8: Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam)",
    "titleAr": "مثال محلول 8: التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam)",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 8] Design, formulate, and evaluate an AI/Data Science model architecture applying Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam). Specify the mathematical formulations, optimization equations, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 8] صمم واشتق وقيم معمارية نموذج ذكاء اصطناعي أو علم بيانات بتطبيق التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam). وضح الصياغات الرياضية ومعادلات التحسين وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify problem specifications and statistical constraints.\nStep 2: Formulate governing analytical equation: The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.\nStep 3: Execute numerical substitution: In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$.\nStep 4: Verify convergence stability, generalization bounds, and algorithmic performance compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات المسألة والقيود الإحصائية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: يحسب محسن Adam المتوسطات المتحركة المتضائلة أسياً للتدرجات السابقة ($m_t$) ولمربعات التدرجات ($v_t$)، ويطبق تصحيح الانحياز $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ و $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.\nالخطوة ٣: التعويض العددي وحساب النتائج: عند تدريب نموذج انحدار لوجستي بخسارة الإنتروبيا المتقاطعة، لخاصية غير معيرة بتدرج $g_1 = 0.8$ ومعدل تعلم $\\eta = 0.01$ ومحسن Adam بمعاملات $\\beta_1 = 0.9, \\beta_2 = 0.999$ عند الخطوة $t=1$، فإن مقدار التحديث الفعلي هو $\\Delta \\theta_1 = -0.010$.\nالخطوة ٤: التحقق من استقرار التقارب، حدود التعميم، وتوافق أداء النموذج.",
    "stepByStepSolutionEn": [
      "Identify system variables, loss functions, and optimization constraints.",
      "Apply formulation: The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "Perform calculation: In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$.",
      "Confirm operational validity and alignment with international AI standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد متغيرات النظام، دوال الخسارة، وقيود التحسين.",
      "تطبيق المعادلة الخوارزمية: يحسب محسن Adam المتوسطات المتحركة المتضائلة أسياً للتدرجات السابقة ($m_t$) ولمربعات التدرجات ($v_t$)، ويطبق تصحيح الانحياز $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ و $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "الحساب العددي الدقيق: عند تدريب نموذج انحدار لوجستي بخسارة الإنتروبيا المتقاطعة، لخاصية غير معيرة بتدرج $g_1 = 0.8$ ومعدل تعلم $\\eta = 0.01$ ومحسن Adam بمعاملات $\\beta_1 = 0.9, \\beta_2 = 0.999$ عند الخطوة $t=1$، فإن مقدار التحديث الفعلي هو $\\Delta \\theta_1 = -0.010$.",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للذكاء الاصطناعي."
    ],
    "hintEn": "Recall the governing analytical relations for Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam).",
    "hintAr": "تذكر القوانين والعلاقات التحليلية الحاكمة لـ التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam).",
    "teacherTipEn": "Pay careful attention to vector dimensions and normalization constraints when implementing Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam).",
    "teacherTipAr": "انتبه جيداً لأبعاد المتجهات وشروط المعايرة والتقييس عند تطبيق التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam)."
  },
  {
    "id": "th_ai_data_science_ch1_solved_9",
    "titleEn": "Solved Example 9: L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction",
    "titleAr": "مثال محلول 9: التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 9] Design, formulate, and evaluate an AI/Data Science model architecture applying L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction. Specify the mathematical formulations, optimization equations, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 9] صمم واشتق وقيم معمارية نموذج ذكاء اصطناعي أو علم بيانات بتطبيق التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة. وضح الصياغات الرياضية ومعادلات التحسين وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify problem specifications and statistical constraints.\nStep 2: Formulate governing analytical equation: L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.\nStep 3: Execute numerical substitution: When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS.\nStep 4: Verify convergence stability, generalization bounds, and algorithmic performance compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات المسألة والقيود الإحصائية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: يضيف تنظيم L2 (Ridge) عقوبة $\\frac{1}{2}\\lambda \\|w\\|_2^2$، مما يقلص الأوزان نحو الصفر تدريجياً عبر تلاشي الوزن دون تصفيرها التام، مما يعالج مشكلة التعددية الخطية.\nالخطوة ٣: التعويض العددي وحساب النتائج: عند نمذجة إنتاجية المحاصيل الزراعية بـ 50 متغيراً، يؤدي تطبيق عقوبة L1 بقيمة $\\lambda = 0.5$ إلى تصفير 38 معاملاً أرصادياً غير ضروري مع الإبقاء على 12 متغيراً مؤثراً، خافضاً خطأ التحقق بمقدار $24.5\\%$.\nالخطوة ٤: التحقق من استقرار التقارب، حدود التعميم، وتوافق أداء النموذج.",
    "stepByStepSolutionEn": [
      "Identify system variables, loss functions, and optimization constraints.",
      "Apply formulation: L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.",
      "Perform calculation: When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS.",
      "Confirm operational validity and alignment with international AI standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد متغيرات النظام، دوال الخسارة، وقيود التحسين.",
      "تطبيق المعادلة الخوارزمية: يضيف تنظيم L2 (Ridge) عقوبة $\\frac{1}{2}\\lambda \\|w\\|_2^2$، مما يقلص الأوزان نحو الصفر تدريجياً عبر تلاشي الوزن دون تصفيرها التام، مما يعالج مشكلة التعددية الخطية.",
      "الحساب العددي الدقيق: عند نمذجة إنتاجية المحاصيل الزراعية بـ 50 متغيراً، يؤدي تطبيق عقوبة L1 بقيمة $\\lambda = 0.5$ إلى تصفير 38 معاملاً أرصادياً غير ضروري مع الإبقاء على 12 متغيراً مؤثراً، خافضاً خطأ التحقق بمقدار $24.5\\%$.",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للذكاء الاصطناعي."
    ],
    "hintEn": "Recall the governing analytical relations for L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction.",
    "hintAr": "تذكر القوانين والعلاقات التحليلية الحاكمة لـ التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة.",
    "teacherTipEn": "Pay careful attention to vector dimensions and normalization constraints when implementing L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction.",
    "teacherTipAr": "انتبه جيداً لأبعاد المتجهات وشروط المعايرة والتقييس عند تطبيق التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة."
  },
  {
    "id": "th_ai_data_science_ch1_solved_10",
    "titleEn": "Solved Example 10: Singular Value Decomposition (SVD) & Principal Component Analysis (PCA)",
    "titleAr": "مثال محلول 10: تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA)",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 10] Design, formulate, and evaluate an AI/Data Science model architecture applying Singular Value Decomposition (SVD) & Principal Component Analysis (PCA). Specify the mathematical formulations, optimization equations, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 10] صمم واشتق وقيم معمارية نموذج ذكاء اصطناعي أو علم بيانات بتطبيق تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA). وضح الصياغات الرياضية ومعادلات التحسين وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify problem specifications and statistical constraints.\nStep 2: Formulate governing analytical equation: Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.\nStep 3: Execute numerical substitution: For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.\nStep 4: Verify convergence stability, generalization bounds, and algorithmic performance compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات المسألة والقيود الإحصائية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: يحلل تفكيك القيم المفردة (SVD) مصفوفة البيانات $X$ إلى $X = U \\Sigma V^T$، حيث تمثل المتجهات المفردة اليمنى في $V$ اتجاهات المكونات الرئيسية وتتعلق القيم المفردة $\\sigma_i$ بالتباين بالعلاقة $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.\nالخطوة ٣: التعويض العددي وحساب النتائج: لمجموعة بيانات بقيم ذاتية لمصفوفة التغاير الممركزة $\\lambda_1 = 12.0$ و $\\lambda_2 = 5.0$ و $\\lambda_3 = 2.0$ و $\\lambda_4 = 1.0$، فإن الاحتفاظ بأول مركبين رئيسيين يفسر نسبة تباين قدرها $\\frac{17.0}{20.0} = 85.0\\%$.\nالخطوة ٤: التحقق من استقرار التقارب، حدود التعميم، وتوافق أداء النموذج.",
    "stepByStepSolutionEn": [
      "Identify system variables, loss functions, and optimization constraints.",
      "Apply formulation: Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "Perform calculation: For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.",
      "Confirm operational validity and alignment with international AI standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد متغيرات النظام، دوال الخسارة، وقيود التحسين.",
      "تطبيق المعادلة الخوارزمية: يحلل تفكيك القيم المفردة (SVD) مصفوفة البيانات $X$ إلى $X = U \\Sigma V^T$، حيث تمثل المتجهات المفردة اليمنى في $V$ اتجاهات المكونات الرئيسية وتتعلق القيم المفردة $\\sigma_i$ بالتباين بالعلاقة $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "الحساب العددي الدقيق: لمجموعة بيانات بقيم ذاتية لمصفوفة التغاير الممركزة $\\lambda_1 = 12.0$ و $\\lambda_2 = 5.0$ و $\\lambda_3 = 2.0$ و $\\lambda_4 = 1.0$، فإن الاحتفاظ بأول مركبين رئيسيين يفسر نسبة تباين قدرها $\\frac{17.0}{20.0} = 85.0\\%$.",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للذكاء الاصطناعي."
    ],
    "hintEn": "Recall the governing analytical relations for Singular Value Decomposition (SVD) & Principal Component Analysis (PCA).",
    "hintAr": "تذكر القوانين والعلاقات التحليلية الحاكمة لـ تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA).",
    "teacherTipEn": "Pay careful attention to vector dimensions and normalization constraints when implementing Singular Value Decomposition (SVD) & Principal Component Analysis (PCA).",
    "teacherTipAr": "انتبه جيداً لأبعاد المتجهات وشروط المعايرة والتقييس عند تطبيق تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA)."
  }
];

export const th_ai_data_science_ch1ExerciseProblems: SolvedProblem[] = [
  {
    "id": "th_ai_data_science_ch1_ex_1",
    "titleEn": "Exercise Problem 1: Singular Value Decomposition (SVD) & Principal Component Analysis (PCA)",
    "titleAr": "تمرين 1: تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA)",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 1] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Singular Value Decomposition (SVD) & Principal Component Analysis (PCA). Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 1] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA). استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.\n- Calculation & Results: For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: يحلل تفكيك القيم المفردة (SVD) مصفوفة البيانات $X$ إلى $X = U \\Sigma V^T$، حيث تمثل المتجهات المفردة اليمنى في $V$ اتجاهات المكونات الرئيسية وتتعلق القيم المفردة $\\sigma_i$ بالتباين بالعلاقة $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.\n- خطوات الحساب والنتيجة: لمجموعة بيانات بقيم ذاتية لمصفوفة التغاير الممركزة $\\lambda_1 = 12.0$ و $\\lambda_2 = 5.0$ و $\\lambda_3 = 2.0$ و $\\lambda_4 = 1.0$، فإن الاحتفاظ بأول مركبين رئيسيين يفسر نسبة تباين قدرها $\\frac{17.0}{20.0} = 85.0\\%$.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "Calculate final values: For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: يحلل تفكيك القيم المفردة (SVD) مصفوفة البيانات $X$ إلى $X = U \\Sigma V^T$، حيث تمثل المتجهات المفردة اليمنى في $V$ اتجاهات المكونات الرئيسية وتتعلق القيم المفردة $\\sigma_i$ بالتباين بالعلاقة $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "حساب الناتج النهائي: لمجموعة بيانات بقيم ذاتية لمصفوفة التغاير الممركزة $\\lambda_1 = 12.0$ و $\\lambda_2 = 5.0$ و $\\lambda_3 = 2.0$ و $\\lambda_4 = 1.0$، فإن الاحتفاظ بأول مركبين رئيسيين يفسر نسبة تباين قدرها $\\frac{17.0}{20.0} = 85.0\\%$.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
    "hintAr": "طبق القانون الأساسي: يحلل تفكيك القيم المفردة (SVD) مصفوفة البيانات $X$ إلى $X = U \\Sigma V^T$، حيث تمثل المتجهات المفردة اليمنى في $V$ اتجاهات المكونات الرئيسية وتتعلق القيم المفردة $\\sigma_i$ بالتباين بالعلاقة $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "th_ai_data_science_ch1_ex_2",
    "titleEn": "Exercise Problem 2: Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam)",
    "titleAr": "تمرين 2: التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam)",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 2] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam). Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 2] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam). استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.\n- Calculation & Results: In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: يحسب محسن Adam المتوسطات المتحركة المتضائلة أسياً للتدرجات السابقة ($m_t$) ولمربعات التدرجات ($v_t$)، ويطبق تصحيح الانحياز $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ و $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.\n- خطوات الحساب والنتيجة: عند تدريب نموذج انحدار لوجستي بخسارة الإنتروبيا المتقاطعة، لخاصية غير معيرة بتدرج $g_1 = 0.8$ ومعدل تعلم $\\eta = 0.01$ ومحسن Adam بمعاملات $\\beta_1 = 0.9, \\beta_2 = 0.999$ عند الخطوة $t=1$، فإن مقدار التحديث الفعلي هو $\\Delta \\theta_1 = -0.010$.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "Calculate final values: In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$.",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: يحسب محسن Adam المتوسطات المتحركة المتضائلة أسياً للتدرجات السابقة ($m_t$) ولمربعات التدرجات ($v_t$)، ويطبق تصحيح الانحياز $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ و $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "حساب الناتج النهائي: عند تدريب نموذج انحدار لوجستي بخسارة الإنتروبيا المتقاطعة، لخاصية غير معيرة بتدرج $g_1 = 0.8$ ومعدل تعلم $\\eta = 0.01$ ومحسن Adam بمعاملات $\\beta_1 = 0.9, \\beta_2 = 0.999$ عند الخطوة $t=1$، فإن مقدار التحديث الفعلي هو $\\Delta \\theta_1 = -0.010$.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
    "hintAr": "طبق القانون الأساسي: يحسب محسن Adam المتوسطات المتحركة المتضائلة أسياً للتدرجات السابقة ($m_t$) ولمربعات التدرجات ($v_t$)، ويطبق تصحيح الانحياز $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ و $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "th_ai_data_science_ch1_ex_3",
    "titleEn": "Exercise Problem 3: L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction",
    "titleAr": "تمرين 3: التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 3] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction. Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 3] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.\n- Calculation & Results: When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: يضيف تنظيم L2 (Ridge) عقوبة $\\frac{1}{2}\\lambda \\|w\\|_2^2$، مما يقلص الأوزان نحو الصفر تدريجياً عبر تلاشي الوزن دون تصفيرها التام، مما يعالج مشكلة التعددية الخطية.\n- خطوات الحساب والنتيجة: عند نمذجة إنتاجية المحاصيل الزراعية بـ 50 متغيراً، يؤدي تطبيق عقوبة L1 بقيمة $\\lambda = 0.5$ إلى تصفير 38 معاملاً أرصادياً غير ضروري مع الإبقاء على 12 متغيراً مؤثراً، خافضاً خطأ التحقق بمقدار $24.5\\%$.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.",
      "Calculate final values: When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS.",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: يضيف تنظيم L2 (Ridge) عقوبة $\\frac{1}{2}\\lambda \\|w\\|_2^2$، مما يقلص الأوزان نحو الصفر تدريجياً عبر تلاشي الوزن دون تصفيرها التام، مما يعالج مشكلة التعددية الخطية.",
      "حساب الناتج النهائي: عند نمذجة إنتاجية المحاصيل الزراعية بـ 50 متغيراً، يؤدي تطبيق عقوبة L1 بقيمة $\\lambda = 0.5$ إلى تصفير 38 معاملاً أرصادياً غير ضروري مع الإبقاء على 12 متغيراً مؤثراً، خافضاً خطأ التحقق بمقدار $24.5\\%$.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.",
    "hintAr": "طبق القانون الأساسي: يضيف تنظيم L2 (Ridge) عقوبة $\\frac{1}{2}\\lambda \\|w\\|_2^2$، مما يقلص الأوزان نحو الصفر تدريجياً عبر تلاشي الوزن دون تصفيرها التام، مما يعالج مشكلة التعددية الخطية.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "th_ai_data_science_ch1_ex_4",
    "titleEn": "Exercise Problem 4: Singular Value Decomposition (SVD) & Principal Component Analysis (PCA)",
    "titleAr": "تمرين 4: تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA)",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 4] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Singular Value Decomposition (SVD) & Principal Component Analysis (PCA). Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 4] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA). استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.\n- Calculation & Results: For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: يحلل تفكيك القيم المفردة (SVD) مصفوفة البيانات $X$ إلى $X = U \\Sigma V^T$، حيث تمثل المتجهات المفردة اليمنى في $V$ اتجاهات المكونات الرئيسية وتتعلق القيم المفردة $\\sigma_i$ بالتباين بالعلاقة $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.\n- خطوات الحساب والنتيجة: لمجموعة بيانات بقيم ذاتية لمصفوفة التغاير الممركزة $\\lambda_1 = 12.0$ و $\\lambda_2 = 5.0$ و $\\lambda_3 = 2.0$ و $\\lambda_4 = 1.0$، فإن الاحتفاظ بأول مركبين رئيسيين يفسر نسبة تباين قدرها $\\frac{17.0}{20.0} = 85.0\\%$.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "Calculate final values: For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: يحلل تفكيك القيم المفردة (SVD) مصفوفة البيانات $X$ إلى $X = U \\Sigma V^T$، حيث تمثل المتجهات المفردة اليمنى في $V$ اتجاهات المكونات الرئيسية وتتعلق القيم المفردة $\\sigma_i$ بالتباين بالعلاقة $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "حساب الناتج النهائي: لمجموعة بيانات بقيم ذاتية لمصفوفة التغاير الممركزة $\\lambda_1 = 12.0$ و $\\lambda_2 = 5.0$ و $\\lambda_3 = 2.0$ و $\\lambda_4 = 1.0$، فإن الاحتفاظ بأول مركبين رئيسيين يفسر نسبة تباين قدرها $\\frac{17.0}{20.0} = 85.0\\%$.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
    "hintAr": "طبق القانون الأساسي: يحلل تفكيك القيم المفردة (SVD) مصفوفة البيانات $X$ إلى $X = U \\Sigma V^T$، حيث تمثل المتجهات المفردة اليمنى في $V$ اتجاهات المكونات الرئيسية وتتعلق القيم المفردة $\\sigma_i$ بالتباين بالعلاقة $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "th_ai_data_science_ch1_ex_5",
    "titleEn": "Exercise Problem 5: Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam)",
    "titleAr": "تمرين 5: التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam)",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 5] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam). Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 5] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam). استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.\n- Calculation & Results: In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: يحسب محسن Adam المتوسطات المتحركة المتضائلة أسياً للتدرجات السابقة ($m_t$) ولمربعات التدرجات ($v_t$)، ويطبق تصحيح الانحياز $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ و $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.\n- خطوات الحساب والنتيجة: عند تدريب نموذج انحدار لوجستي بخسارة الإنتروبيا المتقاطعة، لخاصية غير معيرة بتدرج $g_1 = 0.8$ ومعدل تعلم $\\eta = 0.01$ ومحسن Adam بمعاملات $\\beta_1 = 0.9, \\beta_2 = 0.999$ عند الخطوة $t=1$، فإن مقدار التحديث الفعلي هو $\\Delta \\theta_1 = -0.010$.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "Calculate final values: In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$.",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: يحسب محسن Adam المتوسطات المتحركة المتضائلة أسياً للتدرجات السابقة ($m_t$) ولمربعات التدرجات ($v_t$)، ويطبق تصحيح الانحياز $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ و $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "حساب الناتج النهائي: عند تدريب نموذج انحدار لوجستي بخسارة الإنتروبيا المتقاطعة، لخاصية غير معيرة بتدرج $g_1 = 0.8$ ومعدل تعلم $\\eta = 0.01$ ومحسن Adam بمعاملات $\\beta_1 = 0.9, \\beta_2 = 0.999$ عند الخطوة $t=1$، فإن مقدار التحديث الفعلي هو $\\Delta \\theta_1 = -0.010$.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
    "hintAr": "طبق القانون الأساسي: يحسب محسن Adam المتوسطات المتحركة المتضائلة أسياً للتدرجات السابقة ($m_t$) ولمربعات التدرجات ($v_t$)، ويطبق تصحيح الانحياز $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ و $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "th_ai_data_science_ch1_ex_6",
    "titleEn": "Exercise Problem 6: L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction",
    "titleAr": "تمرين 6: التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 6] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction. Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 6] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.\n- Calculation & Results: When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: يضيف تنظيم L2 (Ridge) عقوبة $\\frac{1}{2}\\lambda \\|w\\|_2^2$، مما يقلص الأوزان نحو الصفر تدريجياً عبر تلاشي الوزن دون تصفيرها التام، مما يعالج مشكلة التعددية الخطية.\n- خطوات الحساب والنتيجة: عند نمذجة إنتاجية المحاصيل الزراعية بـ 50 متغيراً، يؤدي تطبيق عقوبة L1 بقيمة $\\lambda = 0.5$ إلى تصفير 38 معاملاً أرصادياً غير ضروري مع الإبقاء على 12 متغيراً مؤثراً، خافضاً خطأ التحقق بمقدار $24.5\\%$.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.",
      "Calculate final values: When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS.",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: يضيف تنظيم L2 (Ridge) عقوبة $\\frac{1}{2}\\lambda \\|w\\|_2^2$، مما يقلص الأوزان نحو الصفر تدريجياً عبر تلاشي الوزن دون تصفيرها التام، مما يعالج مشكلة التعددية الخطية.",
      "حساب الناتج النهائي: عند نمذجة إنتاجية المحاصيل الزراعية بـ 50 متغيراً، يؤدي تطبيق عقوبة L1 بقيمة $\\lambda = 0.5$ إلى تصفير 38 معاملاً أرصادياً غير ضروري مع الإبقاء على 12 متغيراً مؤثراً، خافضاً خطأ التحقق بمقدار $24.5\\%$.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.",
    "hintAr": "طبق القانون الأساسي: يضيف تنظيم L2 (Ridge) عقوبة $\\frac{1}{2}\\lambda \\|w\\|_2^2$، مما يقلص الأوزان نحو الصفر تدريجياً عبر تلاشي الوزن دون تصفيرها التام، مما يعالج مشكلة التعددية الخطية.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "th_ai_data_science_ch1_ex_7",
    "titleEn": "Exercise Problem 7: Singular Value Decomposition (SVD) & Principal Component Analysis (PCA)",
    "titleAr": "تمرين 7: تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA)",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 7] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Singular Value Decomposition (SVD) & Principal Component Analysis (PCA). Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 7] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA). استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.\n- Calculation & Results: For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: يحلل تفكيك القيم المفردة (SVD) مصفوفة البيانات $X$ إلى $X = U \\Sigma V^T$، حيث تمثل المتجهات المفردة اليمنى في $V$ اتجاهات المكونات الرئيسية وتتعلق القيم المفردة $\\sigma_i$ بالتباين بالعلاقة $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.\n- خطوات الحساب والنتيجة: لمجموعة بيانات بقيم ذاتية لمصفوفة التغاير الممركزة $\\lambda_1 = 12.0$ و $\\lambda_2 = 5.0$ و $\\lambda_3 = 2.0$ و $\\lambda_4 = 1.0$، فإن الاحتفاظ بأول مركبين رئيسيين يفسر نسبة تباين قدرها $\\frac{17.0}{20.0} = 85.0\\%$.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "Calculate final values: For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: يحلل تفكيك القيم المفردة (SVD) مصفوفة البيانات $X$ إلى $X = U \\Sigma V^T$، حيث تمثل المتجهات المفردة اليمنى في $V$ اتجاهات المكونات الرئيسية وتتعلق القيم المفردة $\\sigma_i$ بالتباين بالعلاقة $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "حساب الناتج النهائي: لمجموعة بيانات بقيم ذاتية لمصفوفة التغاير الممركزة $\\lambda_1 = 12.0$ و $\\lambda_2 = 5.0$ و $\\lambda_3 = 2.0$ و $\\lambda_4 = 1.0$، فإن الاحتفاظ بأول مركبين رئيسيين يفسر نسبة تباين قدرها $\\frac{17.0}{20.0} = 85.0\\%$.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
    "hintAr": "طبق القانون الأساسي: يحلل تفكيك القيم المفردة (SVD) مصفوفة البيانات $X$ إلى $X = U \\Sigma V^T$، حيث تمثل المتجهات المفردة اليمنى في $V$ اتجاهات المكونات الرئيسية وتتعلق القيم المفردة $\\sigma_i$ بالتباين بالعلاقة $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "th_ai_data_science_ch1_ex_8",
    "titleEn": "Exercise Problem 8: Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam)",
    "titleAr": "تمرين 8: التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam)",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 8] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam). Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 8] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam). استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.\n- Calculation & Results: In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: يحسب محسن Adam المتوسطات المتحركة المتضائلة أسياً للتدرجات السابقة ($m_t$) ولمربعات التدرجات ($v_t$)، ويطبق تصحيح الانحياز $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ و $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.\n- خطوات الحساب والنتيجة: عند تدريب نموذج انحدار لوجستي بخسارة الإنتروبيا المتقاطعة، لخاصية غير معيرة بتدرج $g_1 = 0.8$ ومعدل تعلم $\\eta = 0.01$ ومحسن Adam بمعاملات $\\beta_1 = 0.9, \\beta_2 = 0.999$ عند الخطوة $t=1$، فإن مقدار التحديث الفعلي هو $\\Delta \\theta_1 = -0.010$.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "Calculate final values: In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$.",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: يحسب محسن Adam المتوسطات المتحركة المتضائلة أسياً للتدرجات السابقة ($m_t$) ولمربعات التدرجات ($v_t$)، ويطبق تصحيح الانحياز $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ و $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "حساب الناتج النهائي: عند تدريب نموذج انحدار لوجستي بخسارة الإنتروبيا المتقاطعة، لخاصية غير معيرة بتدرج $g_1 = 0.8$ ومعدل تعلم $\\eta = 0.01$ ومحسن Adam بمعاملات $\\beta_1 = 0.9, \\beta_2 = 0.999$ عند الخطوة $t=1$، فإن مقدار التحديث الفعلي هو $\\Delta \\theta_1 = -0.010$.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
    "hintAr": "طبق القانون الأساسي: يحسب محسن Adam المتوسطات المتحركة المتضائلة أسياً للتدرجات السابقة ($m_t$) ولمربعات التدرجات ($v_t$)، ويطبق تصحيح الانحياز $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ و $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "th_ai_data_science_ch1_ex_9",
    "titleEn": "Exercise Problem 9: L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction",
    "titleAr": "تمرين 9: التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 9] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction. Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 9] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.\n- Calculation & Results: When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: يضيف تنظيم L2 (Ridge) عقوبة $\\frac{1}{2}\\lambda \\|w\\|_2^2$، مما يقلص الأوزان نحو الصفر تدريجياً عبر تلاشي الوزن دون تصفيرها التام، مما يعالج مشكلة التعددية الخطية.\n- خطوات الحساب والنتيجة: عند نمذجة إنتاجية المحاصيل الزراعية بـ 50 متغيراً، يؤدي تطبيق عقوبة L1 بقيمة $\\lambda = 0.5$ إلى تصفير 38 معاملاً أرصادياً غير ضروري مع الإبقاء على 12 متغيراً مؤثراً، خافضاً خطأ التحقق بمقدار $24.5\\%$.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.",
      "Calculate final values: When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS.",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: يضيف تنظيم L2 (Ridge) عقوبة $\\frac{1}{2}\\lambda \\|w\\|_2^2$، مما يقلص الأوزان نحو الصفر تدريجياً عبر تلاشي الوزن دون تصفيرها التام، مما يعالج مشكلة التعددية الخطية.",
      "حساب الناتج النهائي: عند نمذجة إنتاجية المحاصيل الزراعية بـ 50 متغيراً، يؤدي تطبيق عقوبة L1 بقيمة $\\lambda = 0.5$ إلى تصفير 38 معاملاً أرصادياً غير ضروري مع الإبقاء على 12 متغيراً مؤثراً، خافضاً خطأ التحقق بمقدار $24.5\\%$.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.",
    "hintAr": "طبق القانون الأساسي: يضيف تنظيم L2 (Ridge) عقوبة $\\frac{1}{2}\\lambda \\|w\\|_2^2$، مما يقلص الأوزان نحو الصفر تدريجياً عبر تلاشي الوزن دون تصفيرها التام، مما يعالج مشكلة التعددية الخطية.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "th_ai_data_science_ch1_ex_10",
    "titleEn": "Exercise Problem 10: Singular Value Decomposition (SVD) & Principal Component Analysis (PCA)",
    "titleAr": "تمرين 10: تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA)",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 10] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Singular Value Decomposition (SVD) & Principal Component Analysis (PCA). Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 10] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA). استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.\n- Calculation & Results: For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: يحلل تفكيك القيم المفردة (SVD) مصفوفة البيانات $X$ إلى $X = U \\Sigma V^T$، حيث تمثل المتجهات المفردة اليمنى في $V$ اتجاهات المكونات الرئيسية وتتعلق القيم المفردة $\\sigma_i$ بالتباين بالعلاقة $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.\n- خطوات الحساب والنتيجة: لمجموعة بيانات بقيم ذاتية لمصفوفة التغاير الممركزة $\\lambda_1 = 12.0$ و $\\lambda_2 = 5.0$ و $\\lambda_3 = 2.0$ و $\\lambda_4 = 1.0$، فإن الاحتفاظ بأول مركبين رئيسيين يفسر نسبة تباين قدرها $\\frac{17.0}{20.0} = 85.0\\%$.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "Calculate final values: For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: يحلل تفكيك القيم المفردة (SVD) مصفوفة البيانات $X$ إلى $X = U \\Sigma V^T$، حيث تمثل المتجهات المفردة اليمنى في $V$ اتجاهات المكونات الرئيسية وتتعلق القيم المفردة $\\sigma_i$ بالتباين بالعلاقة $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "حساب الناتج النهائي: لمجموعة بيانات بقيم ذاتية لمصفوفة التغاير الممركزة $\\lambda_1 = 12.0$ و $\\lambda_2 = 5.0$ و $\\lambda_3 = 2.0$ و $\\lambda_4 = 1.0$، فإن الاحتفاظ بأول مركبين رئيسيين يفسر نسبة تباين قدرها $\\frac{17.0}{20.0} = 85.0\\%$.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
    "hintAr": "طبق القانون الأساسي: يحلل تفكيك القيم المفردة (SVD) مصفوفة البيانات $X$ إلى $X = U \\Sigma V^T$، حيث تمثل المتجهات المفردة اليمنى في $V$ اتجاهات المكونات الرئيسية وتتعلق القيم المفردة $\\sigma_i$ بالتباين بالعلاقة $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "th_ai_data_science_ch1_ex_11",
    "titleEn": "Exercise Problem 11: Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam)",
    "titleAr": "تمرين 11: التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam)",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 11] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam). Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 11] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam). استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.\n- Calculation & Results: In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: يحسب محسن Adam المتوسطات المتحركة المتضائلة أسياً للتدرجات السابقة ($m_t$) ولمربعات التدرجات ($v_t$)، ويطبق تصحيح الانحياز $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ و $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.\n- خطوات الحساب والنتيجة: عند تدريب نموذج انحدار لوجستي بخسارة الإنتروبيا المتقاطعة، لخاصية غير معيرة بتدرج $g_1 = 0.8$ ومعدل تعلم $\\eta = 0.01$ ومحسن Adam بمعاملات $\\beta_1 = 0.9, \\beta_2 = 0.999$ عند الخطوة $t=1$، فإن مقدار التحديث الفعلي هو $\\Delta \\theta_1 = -0.010$.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "Calculate final values: In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$.",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: يحسب محسن Adam المتوسطات المتحركة المتضائلة أسياً للتدرجات السابقة ($m_t$) ولمربعات التدرجات ($v_t$)، ويطبق تصحيح الانحياز $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ و $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "حساب الناتج النهائي: عند تدريب نموذج انحدار لوجستي بخسارة الإنتروبيا المتقاطعة، لخاصية غير معيرة بتدرج $g_1 = 0.8$ ومعدل تعلم $\\eta = 0.01$ ومحسن Adam بمعاملات $\\beta_1 = 0.9, \\beta_2 = 0.999$ عند الخطوة $t=1$، فإن مقدار التحديث الفعلي هو $\\Delta \\theta_1 = -0.010$.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
    "hintAr": "طبق القانون الأساسي: يحسب محسن Adam المتوسطات المتحركة المتضائلة أسياً للتدرجات السابقة ($m_t$) ولمربعات التدرجات ($v_t$)، ويطبق تصحيح الانحياز $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ و $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "th_ai_data_science_ch1_ex_12",
    "titleEn": "Exercise Problem 12: L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction",
    "titleAr": "تمرين 12: التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 12] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction. Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 12] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.\n- Calculation & Results: When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: يضيف تنظيم L2 (Ridge) عقوبة $\\frac{1}{2}\\lambda \\|w\\|_2^2$، مما يقلص الأوزان نحو الصفر تدريجياً عبر تلاشي الوزن دون تصفيرها التام، مما يعالج مشكلة التعددية الخطية.\n- خطوات الحساب والنتيجة: عند نمذجة إنتاجية المحاصيل الزراعية بـ 50 متغيراً، يؤدي تطبيق عقوبة L1 بقيمة $\\lambda = 0.5$ إلى تصفير 38 معاملاً أرصادياً غير ضروري مع الإبقاء على 12 متغيراً مؤثراً، خافضاً خطأ التحقق بمقدار $24.5\\%$.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.",
      "Calculate final values: When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS.",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: يضيف تنظيم L2 (Ridge) عقوبة $\\frac{1}{2}\\lambda \\|w\\|_2^2$، مما يقلص الأوزان نحو الصفر تدريجياً عبر تلاشي الوزن دون تصفيرها التام، مما يعالج مشكلة التعددية الخطية.",
      "حساب الناتج النهائي: عند نمذجة إنتاجية المحاصيل الزراعية بـ 50 متغيراً، يؤدي تطبيق عقوبة L1 بقيمة $\\lambda = 0.5$ إلى تصفير 38 معاملاً أرصادياً غير ضروري مع الإبقاء على 12 متغيراً مؤثراً، خافضاً خطأ التحقق بمقدار $24.5\\%$.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.",
    "hintAr": "طبق القانون الأساسي: يضيف تنظيم L2 (Ridge) عقوبة $\\frac{1}{2}\\lambda \\|w\\|_2^2$، مما يقلص الأوزان نحو الصفر تدريجياً عبر تلاشي الوزن دون تصفيرها التام، مما يعالج مشكلة التعددية الخطية.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "th_ai_data_science_ch1_ex_13",
    "titleEn": "Exercise Problem 13: Singular Value Decomposition (SVD) & Principal Component Analysis (PCA)",
    "titleAr": "تمرين 13: تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA)",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 13] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Singular Value Decomposition (SVD) & Principal Component Analysis (PCA). Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 13] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن تحليل القيم المفردة (SVD) وتحليل المكونات الرئيسية (PCA). استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.\n- Calculation & Results: For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: يحلل تفكيك القيم المفردة (SVD) مصفوفة البيانات $X$ إلى $X = U \\Sigma V^T$، حيث تمثل المتجهات المفردة اليمنى في $V$ اتجاهات المكونات الرئيسية وتتعلق القيم المفردة $\\sigma_i$ بالتباين بالعلاقة $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.\n- خطوات الحساب والنتيجة: لمجموعة بيانات بقيم ذاتية لمصفوفة التغاير الممركزة $\\lambda_1 = 12.0$ و $\\lambda_2 = 5.0$ و $\\lambda_3 = 2.0$ و $\\lambda_4 = 1.0$، فإن الاحتفاظ بأول مركبين رئيسيين يفسر نسبة تباين قدرها $\\frac{17.0}{20.0} = 85.0\\%$.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "Calculate final values: For a dataset with centered covariance matrix eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, $\\lambda_3 = 2.0$, and $\\lambda_4 = 1.0$, retaining the top two principal components captures an explained variance ratio of $\\frac{12.0 + 5.0}{12.0 + 5.0 + 2.0 + 1.0} = \\frac{17.0}{20.0} = 85.0\\%$.",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: يحلل تفكيك القيم المفردة (SVD) مصفوفة البيانات $X$ إلى $X = U \\Sigma V^T$، حيث تمثل المتجهات المفردة اليمنى في $V$ اتجاهات المكونات الرئيسية وتتعلق القيم المفردة $\\sigma_i$ بالتباين بالعلاقة $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
      "حساب الناتج النهائي: لمجموعة بيانات بقيم ذاتية لمصفوفة التغاير الممركزة $\\lambda_1 = 12.0$ و $\\lambda_2 = 5.0$ و $\\lambda_3 = 2.0$ و $\\lambda_4 = 1.0$، فإن الاحتفاظ بأول مركبين رئيسيين يفسر نسبة تباين قدرها $\\frac{17.0}{20.0} = 85.0\\%$.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: Singular Value Decomposition factorizes data matrix $X \\in \\mathbb{R}^{n \\times d}$ into $X = U \\Sigma V^T$, where the right singular vectors in $V$ represent the principal component loading directions and singular values $\\sigma_i$ relate to variances as $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
    "hintAr": "طبق القانون الأساسي: يحلل تفكيك القيم المفردة (SVD) مصفوفة البيانات $X$ إلى $X = U \\Sigma V^T$، حيث تمثل المتجهات المفردة اليمنى في $V$ اتجاهات المكونات الرئيسية وتتعلق القيم المفردة $\\sigma_i$ بالتباين بالعلاقة $\\text{Var}_i = \\frac{\\sigma_i^2}{n - 1}$.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "th_ai_data_science_ch1_ex_14",
    "titleEn": "Exercise Problem 14: Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam)",
    "titleAr": "تمرين 14: التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam)",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 14] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Gradient Descent Optimization, Learning Rate & Adaptive Optimizers (Adam). Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 14] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن التحسين بالانحدار التدريجي، معدل التعلم ومحسنات التكيف (Adam). استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.\n- Calculation & Results: In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: يحسب محسن Adam المتوسطات المتحركة المتضائلة أسياً للتدرجات السابقة ($m_t$) ولمربعات التدرجات ($v_t$)، ويطبق تصحيح الانحياز $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ و $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.\n- خطوات الحساب والنتيجة: عند تدريب نموذج انحدار لوجستي بخسارة الإنتروبيا المتقاطعة، لخاصية غير معيرة بتدرج $g_1 = 0.8$ ومعدل تعلم $\\eta = 0.01$ ومحسن Adam بمعاملات $\\beta_1 = 0.9, \\beta_2 = 0.999$ عند الخطوة $t=1$، فإن مقدار التحديث الفعلي هو $\\Delta \\theta_1 = -0.010$.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "Calculate final values: In training a logistic regression model with cross-entropy loss on Cairo housing data, an unnormalized feature with gradient $g_t = 0.8$ under learning rate $\\eta = 0.01$ and Adam parameters $\\beta_1 = 0.9, \\beta_2 = 0.999, \\epsilon = 10^{-8}$ at step $t=1$ executes an effective parameter step $\\Delta \\theta_1 = -\\eta \\frac{\\hat{m}_1}{\\sqrt{\\hat{v}_1} + \\epsilon} = -0.01 \\times \\frac{0.8}{0.8 + 10^{-8}} = -0.010$.",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: يحسب محسن Adam المتوسطات المتحركة المتضائلة أسياً للتدرجات السابقة ($m_t$) ولمربعات التدرجات ($v_t$)، ويطبق تصحيح الانحياز $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ و $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
      "حساب الناتج النهائي: عند تدريب نموذج انحدار لوجستي بخسارة الإنتروبيا المتقاطعة، لخاصية غير معيرة بتدرج $g_1 = 0.8$ ومعدل تعلم $\\eta = 0.01$ ومحسن Adam بمعاملات $\\beta_1 = 0.9, \\beta_2 = 0.999$ عند الخطوة $t=1$، فإن مقدار التحديث الفعلي هو $\\Delta \\theta_1 = -0.010$.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: The Adam optimizer computes exponentially decaying moving averages of past gradients ($m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t$) and squared gradients ($v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$), applying bias correction $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ and $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
    "hintAr": "طبق القانون الأساسي: يحسب محسن Adam المتوسطات المتحركة المتضائلة أسياً للتدرجات السابقة ($m_t$) ولمربعات التدرجات ($v_t$)، ويطبق تصحيح الانحياز $\\hat{m}_t = \\frac{m_t}{1-\\beta_1^t}$ و $\\hat{v}_t = \\frac{v_t}{1-\\beta_2^t}$.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "th_ai_data_science_ch1_ex_15",
    "titleEn": "Exercise Problem 15: L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction",
    "titleAr": "تمرين 15: التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 15] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating L1/L2 Regularization, Bias-Variance Tradeoff & Sparsity Induction. Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 15] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن التنظيم بـ L1 و L2، المفاضلة بين الانحياز والتباين وتوليد الأوزان المتفرقة. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.\n- Calculation & Results: When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: يضيف تنظيم L2 (Ridge) عقوبة $\\frac{1}{2}\\lambda \\|w\\|_2^2$، مما يقلص الأوزان نحو الصفر تدريجياً عبر تلاشي الوزن دون تصفيرها التام، مما يعالج مشكلة التعددية الخطية.\n- خطوات الحساب والنتيجة: عند نمذجة إنتاجية المحاصيل الزراعية بـ 50 متغيراً، يؤدي تطبيق عقوبة L1 بقيمة $\\lambda = 0.5$ إلى تصفير 38 معاملاً أرصادياً غير ضروري مع الإبقاء على 12 متغيراً مؤثراً، خافضاً خطأ التحقق بمقدار $24.5\\%$.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.",
      "Calculate final values: When fitting an agricultural yield predictor with 50 features, applying L1 penalty $\\lambda = 0.5$ shrinks 38 redundant meteorological coefficients to exactly 0.0 while maintaining 12 non-zero predictors, reducing validation mean squared error by $24.5\\%$ compared to unregularized OLS.",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: يضيف تنظيم L2 (Ridge) عقوبة $\\frac{1}{2}\\lambda \\|w\\|_2^2$، مما يقلص الأوزان نحو الصفر تدريجياً عبر تلاشي الوزن دون تصفيرها التام، مما يعالج مشكلة التعددية الخطية.",
      "حساب الناتج النهائي: عند نمذجة إنتاجية المحاصيل الزراعية بـ 50 متغيراً، يؤدي تطبيق عقوبة L1 بقيمة $\\lambda = 0.5$ إلى تصفير 38 معاملاً أرصادياً غير ضروري مع الإبقاء على 12 متغيراً مؤثراً، خافضاً خطأ التحقق بمقدار $24.5\\%$.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: L2 regularization (Ridge) adds penalty $\\frac{1}{2}\\lambda \\|w\\|_2^2$, which shrinks weights toward zero continuously via weight decay without setting them strictly to zero, mitigating multicollinearity.",
    "hintAr": "طبق القانون الأساسي: يضيف تنظيم L2 (Ridge) عقوبة $\\frac{1}{2}\\lambda \\|w\\|_2^2$، مما يقلص الأوزان نحو الصفر تدريجياً عبر تلاشي الوزن دون تصفيرها التام، مما يعالج مشكلة التعددية الخطية.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  }
];
