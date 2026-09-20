import type { SolvedProblem } from '../../../types/curriculum';

export const th_ai_data_science_ch4SolvedExamples: SolvedProblem[] = [
  {
    "id": "th_ai_data_science_ch4_solved_1",
    "titleEn": "Solved Example 1: Feature Engineering, Imputation & Automated Preprocessing Pipelines",
    "titleAr": "مثال محلول 1: هندسة الخصائص، معالجة القيم المفقودة وخطوط الإعداد المسبق المؤتمتة",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 1] Design, formulate, and evaluate an AI/Data Science model architecture applying Feature Engineering, Imputation & Automated Preprocessing Pipelines. Specify the mathematical formulations, optimization equations, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 1] صمم واشتق وقيم معمارية نموذج ذكاء اصطناعي أو علم بيانات بتطبيق هندسة الخصائص، معالجة القيم المفقودة وخطوط الإعداد المسبق المؤتمتة. وضح الصياغات الرياضية ومعادلات التحسين وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify problem specifications and statistical constraints.\nStep 2: Formulate governing analytical equation: To prevent data leakage during cross-validation, preprocessing transformers (e.g., StandardScaler: $z = \\frac{x - \\mu}{\\sigma}$) must fit parameters strictly on training folds and only transform validation/test folds.\nStep 3: Execute numerical substitution: In a real-time banking fraud pipeline handling 100,000 transactions/sec, fitting a robust Median Imputer and RobustScaler on 5 million historical records compresses latency to $<2\\text{ ms}$ while reducing model out-of-fold generalization error from $8.4\\%$ to $2.1\\%$.\nStep 4: Verify convergence stability, generalization bounds, and algorithmic performance compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات المسألة والقيود الإحصائية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: لمنع تسرب البيانات (Data Leakage) أثناء التحقق المتقاطع، يجب تدريب معاملات التحويل (مثل المتوسط والانحراف المعياري) على حزم التدريب حصراً وتطبيقها على حزم الاختبار.\nالخطوة ٣: التعويض العددي وحساب النتائج: في نظام كشف الاحتيال البنكي بمعدل 100,000 معاملة/ثانية، يؤدي تطبيق محولات التقييس المتينة المستخلصة من بيانات التدريب إلى خفض زمن الاستجابة لأقل من 2 مللي ثانية وخفض خطأ التعميم إلى $2.1\\%$.\nالخطوة ٤: التحقق من استقرار التقارب، حدود التعميم، وتوافق أداء النموذج.",
    "stepByStepSolutionEn": [
      "Identify system variables, loss functions, and optimization constraints.",
      "Apply formulation: To prevent data leakage during cross-validation, preprocessing transformers (e.g., StandardScaler: $z = \\frac{x - \\mu}{\\sigma}$) must fit parameters strictly on training folds and only transform validation/test folds.",
      "Perform calculation: In a real-time banking fraud pipeline handling 100,000 transactions/sec, fitting a robust Median Imputer and RobustScaler on 5 million historical records compresses latency to $<2\\text{ ms}$ while reducing model out-of-fold generalization error from $8.4\\%$ to $2.1\\%$.",
      "Confirm operational validity and alignment with international AI standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد متغيرات النظام، دوال الخسارة، وقيود التحسين.",
      "تطبيق المعادلة الخوارزمية: لمنع تسرب البيانات (Data Leakage) أثناء التحقق المتقاطع، يجب تدريب معاملات التحويل (مثل المتوسط والانحراف المعياري) على حزم التدريب حصراً وتطبيقها على حزم الاختبار.",
      "الحساب العددي الدقيق: في نظام كشف الاحتيال البنكي بمعدل 100,000 معاملة/ثانية، يؤدي تطبيق محولات التقييس المتينة المستخلصة من بيانات التدريب إلى خفض زمن الاستجابة لأقل من 2 مللي ثانية وخفض خطأ التعميم إلى $2.1\\%$.",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للذكاء الاصطناعي."
    ],
    "hintEn": "Recall the governing analytical relations for Feature Engineering, Imputation & Automated Preprocessing Pipelines.",
    "hintAr": "تذكر القوانين والعلاقات التحليلية الحاكمة لـ هندسة الخصائص، معالجة القيم المفقودة وخطوط الإعداد المسبق المؤتمتة.",
    "teacherTipEn": "Pay careful attention to vector dimensions and normalization constraints when implementing Feature Engineering, Imputation & Automated Preprocessing Pipelines.",
    "teacherTipAr": "انتبه جيداً لأبعاد المتجهات وشروط المعايرة والتقييس عند تطبيق هندسة الخصائص، معالجة القيم المفقودة وخطوط الإعداد المسبق المؤتمتة."
  },
  {
    "id": "th_ai_data_science_ch4_solved_2",
    "titleEn": "Solved Example 2: Distributed Big Data Analytics with Apache Spark & Resilient Distributed Datasets",
    "titleAr": "مثال محلول 2: تحليلات البيانات الضخمة الموزعة بـ Apache Spark وهياكل RDD المرنة",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 2] Design, formulate, and evaluate an AI/Data Science model architecture applying Distributed Big Data Analytics with Apache Spark & Resilient Distributed Datasets. Specify the mathematical formulations, optimization equations, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 2] صمم واشتق وقيم معمارية نموذج ذكاء اصطناعي أو علم بيانات بتطبيق تحليلات البيانات الضخمة الموزعة بـ Apache Spark وهياكل RDD المرنة. وضح الصياغات الرياضية ومعادلات التحسين وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify problem specifications and statistical constraints.\nStep 2: Formulate governing analytical equation: Spark operations are categorized into Transformations (lazy operations like `map`, `filter` that build a Directed Acyclic Graph) and Actions (e.g., `count`, `collect`, `save`) that trigger cluster execution.\nStep 3: Execute numerical substitution: Processing a 500GB telecom CDR dataset across an 8-node cluster, lazy evaluation optimizes the physical execution plan by pushing down filters and pruning columns, reducing shuffled data volume across the network from $500\\text{ GB}$ to $18.5\\text{ GB}$ ($96.3\\%$ reduction).\nStep 4: Verify convergence stability, generalization bounds, and algorithmic performance compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات المسألة والقيود الإحصائية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: تُصنف عمليات Spark إلى تحويلات مؤجلة (Transformations مثل `map` و `filter` تبني مخطط DAG) وإجراءات تنفيذية (Actions مثل `count` و `collect`) تطلق التنفيذ الفعلي في العنقود.\nالخطوة ٣: التعويض العددي وحساب النتائج: عند معالجة 500 جيجابايت من بيانات الاتصالات عبر عنقود من 8 عقد، تؤدي المعالجة المؤجلة ودفع المرشحات لتقليص حجم البيانات المنقولة عبر الشبكة من $500\\text{ GB}$ إلى $18.5\\text{ GB}$ بتخفيض $96.3\\%$.\nالخطوة ٤: التحقق من استقرار التقارب، حدود التعميم، وتوافق أداء النموذج.",
    "stepByStepSolutionEn": [
      "Identify system variables, loss functions, and optimization constraints.",
      "Apply formulation: Spark operations are categorized into Transformations (lazy operations like `map`, `filter` that build a Directed Acyclic Graph) and Actions (e.g., `count`, `collect`, `save`) that trigger cluster execution.",
      "Perform calculation: Processing a 500GB telecom CDR dataset across an 8-node cluster, lazy evaluation optimizes the physical execution plan by pushing down filters and pruning columns, reducing shuffled data volume across the network from $500\\text{ GB}$ to $18.5\\text{ GB}$ ($96.3\\%$ reduction).",
      "Confirm operational validity and alignment with international AI standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد متغيرات النظام، دوال الخسارة، وقيود التحسين.",
      "تطبيق المعادلة الخوارزمية: تُصنف عمليات Spark إلى تحويلات مؤجلة (Transformations مثل `map` و `filter` تبني مخطط DAG) وإجراءات تنفيذية (Actions مثل `count` و `collect`) تطلق التنفيذ الفعلي في العنقود.",
      "الحساب العددي الدقيق: عند معالجة 500 جيجابايت من بيانات الاتصالات عبر عنقود من 8 عقد، تؤدي المعالجة المؤجلة ودفع المرشحات لتقليص حجم البيانات المنقولة عبر الشبكة من $500\\text{ GB}$ إلى $18.5\\text{ GB}$ بتخفيض $96.3\\%$.",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للذكاء الاصطناعي."
    ],
    "hintEn": "Recall the governing analytical relations for Distributed Big Data Analytics with Apache Spark & Resilient Distributed Datasets.",
    "hintAr": "تذكر القوانين والعلاقات التحليلية الحاكمة لـ تحليلات البيانات الضخمة الموزعة بـ Apache Spark وهياكل RDD المرنة.",
    "teacherTipEn": "Pay careful attention to vector dimensions and normalization constraints when implementing Distributed Big Data Analytics with Apache Spark & Resilient Distributed Datasets.",
    "teacherTipAr": "انتبه جيداً لأبعاد المتجهات وشروط المعايرة والتقييس عند تطبيق تحليلات البيانات الضخمة الموزعة بـ Apache Spark وهياكل RDD المرنة."
  },
  {
    "id": "th_ai_data_science_ch4_solved_3",
    "titleEn": "Solved Example 3: Continuous MLOps Lifecycle: Experiment Tracking, Model Registry & Data Drift",
    "titleAr": "مثال محلول 3: دورة حياة MLOps المستمرة: تتبع التجارب، سجل النماذج واكتشاف انحراف البيانات",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 3] Design, formulate, and evaluate an AI/Data Science model architecture applying Continuous MLOps Lifecycle: Experiment Tracking, Model Registry & Data Drift. Specify the mathematical formulations, optimization equations, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 3] صمم واشتق وقيم معمارية نموذج ذكاء اصطناعي أو علم بيانات بتطبيق دورة حياة MLOps المستمرة: تتبع التجارب، سجل النماذج واكتشاف انحراف البيانات. وضح الصياغات الرياضية ومعادلات التحسين وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify problem specifications and statistical constraints.\nStep 2: Formulate governing analytical equation: Data drift occurs when production input feature distributions shift relative to training baseline ($P_{test}(X) \\ne P_{train}(X)$), detected via statistical hypothesis testing such as the Kolmogorov-Smirnov test or Population Stability Index (PSI).\nStep 3: Execute numerical substitution: A retail demand forecasting model deployed in Cairo exhibits a Population Stability Index $\\text{PSI} = \\sum (p_i - q_i) \\ln\\left(\\frac{p_i}{q_i}\\right) = 0.285$. Since $\\text{PSI} > 0.25$ indicates critical distribution shift, the automated MLOps monitoring pipeline triggers automatic model retraining on recent data.\nStep 4: Verify convergence stability, generalization bounds, and algorithmic performance compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات المسألة والقيود الإحصائية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: يحدث انحراف البيانات (Data Drift) عندما تتغير توزيعات مدخلات الإنتاج عن بيانات التدريب الأساسية، ويُكتشف باختبارات إحصائية مثل اختبار كولموجوروف-سميرنوف أو مؤشر استقرار المجتمع (PSI).\nالخطوة ٣: التعويض العددي وحساب النتائج: أظهر نموذج للتنبؤ بالطلب التجاري في القاهرة مؤشر استقرار مجتمع $\\text{PSI} = 0.285$. وحيث أن $\\text{PSI} > 0.25$ تدل على انحراف حرج في التوزيع، تطلق خطوط MLOps تلقائياً إعادة تدريب النموذج على البيانات الحديثة.\nالخطوة ٤: التحقق من استقرار التقارب، حدود التعميم، وتوافق أداء النموذج.",
    "stepByStepSolutionEn": [
      "Identify system variables, loss functions, and optimization constraints.",
      "Apply formulation: Data drift occurs when production input feature distributions shift relative to training baseline ($P_{test}(X) \\ne P_{train}(X)$), detected via statistical hypothesis testing such as the Kolmogorov-Smirnov test or Population Stability Index (PSI).",
      "Perform calculation: A retail demand forecasting model deployed in Cairo exhibits a Population Stability Index $\\text{PSI} = \\sum (p_i - q_i) \\ln\\left(\\frac{p_i}{q_i}\\right) = 0.285$. Since $\\text{PSI} > 0.25$ indicates critical distribution shift, the automated MLOps monitoring pipeline triggers automatic model retraining on recent data.",
      "Confirm operational validity and alignment with international AI standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد متغيرات النظام، دوال الخسارة، وقيود التحسين.",
      "تطبيق المعادلة الخوارزمية: يحدث انحراف البيانات (Data Drift) عندما تتغير توزيعات مدخلات الإنتاج عن بيانات التدريب الأساسية، ويُكتشف باختبارات إحصائية مثل اختبار كولموجوروف-سميرنوف أو مؤشر استقرار المجتمع (PSI).",
      "الحساب العددي الدقيق: أظهر نموذج للتنبؤ بالطلب التجاري في القاهرة مؤشر استقرار مجتمع $\\text{PSI} = 0.285$. وحيث أن $\\text{PSI} > 0.25$ تدل على انحراف حرج في التوزيع، تطلق خطوط MLOps تلقائياً إعادة تدريب النموذج على البيانات الحديثة.",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للذكاء الاصطناعي."
    ],
    "hintEn": "Recall the governing analytical relations for Continuous MLOps Lifecycle: Experiment Tracking, Model Registry & Data Drift.",
    "hintAr": "تذكر القوانين والعلاقات التحليلية الحاكمة لـ دورة حياة MLOps المستمرة: تتبع التجارب، سجل النماذج واكتشاف انحراف البيانات.",
    "teacherTipEn": "Pay careful attention to vector dimensions and normalization constraints when implementing Continuous MLOps Lifecycle: Experiment Tracking, Model Registry & Data Drift.",
    "teacherTipAr": "انتبه جيداً لأبعاد المتجهات وشروط المعايرة والتقييس عند تطبيق دورة حياة MLOps المستمرة: تتبع التجارب، سجل النماذج واكتشاف انحراف البيانات."
  },
  {
    "id": "th_ai_data_science_ch4_solved_4",
    "titleEn": "Solved Example 4: Feature Engineering, Imputation & Automated Preprocessing Pipelines",
    "titleAr": "مثال محلول 4: هندسة الخصائص، معالجة القيم المفقودة وخطوط الإعداد المسبق المؤتمتة",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 4] Design, formulate, and evaluate an AI/Data Science model architecture applying Feature Engineering, Imputation & Automated Preprocessing Pipelines. Specify the mathematical formulations, optimization equations, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 4] صمم واشتق وقيم معمارية نموذج ذكاء اصطناعي أو علم بيانات بتطبيق هندسة الخصائص، معالجة القيم المفقودة وخطوط الإعداد المسبق المؤتمتة. وضح الصياغات الرياضية ومعادلات التحسين وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify problem specifications and statistical constraints.\nStep 2: Formulate governing analytical equation: To prevent data leakage during cross-validation, preprocessing transformers (e.g., StandardScaler: $z = \\frac{x - \\mu}{\\sigma}$) must fit parameters strictly on training folds and only transform validation/test folds.\nStep 3: Execute numerical substitution: In a real-time banking fraud pipeline handling 100,000 transactions/sec, fitting a robust Median Imputer and RobustScaler on 5 million historical records compresses latency to $<2\\text{ ms}$ while reducing model out-of-fold generalization error from $8.4\\%$ to $2.1\\%$.\nStep 4: Verify convergence stability, generalization bounds, and algorithmic performance compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات المسألة والقيود الإحصائية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: لمنع تسرب البيانات (Data Leakage) أثناء التحقق المتقاطع، يجب تدريب معاملات التحويل (مثل المتوسط والانحراف المعياري) على حزم التدريب حصراً وتطبيقها على حزم الاختبار.\nالخطوة ٣: التعويض العددي وحساب النتائج: في نظام كشف الاحتيال البنكي بمعدل 100,000 معاملة/ثانية، يؤدي تطبيق محولات التقييس المتينة المستخلصة من بيانات التدريب إلى خفض زمن الاستجابة لأقل من 2 مللي ثانية وخفض خطأ التعميم إلى $2.1\\%$.\nالخطوة ٤: التحقق من استقرار التقارب، حدود التعميم، وتوافق أداء النموذج.",
    "stepByStepSolutionEn": [
      "Identify system variables, loss functions, and optimization constraints.",
      "Apply formulation: To prevent data leakage during cross-validation, preprocessing transformers (e.g., StandardScaler: $z = \\frac{x - \\mu}{\\sigma}$) must fit parameters strictly on training folds and only transform validation/test folds.",
      "Perform calculation: In a real-time banking fraud pipeline handling 100,000 transactions/sec, fitting a robust Median Imputer and RobustScaler on 5 million historical records compresses latency to $<2\\text{ ms}$ while reducing model out-of-fold generalization error from $8.4\\%$ to $2.1\\%$.",
      "Confirm operational validity and alignment with international AI standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد متغيرات النظام، دوال الخسارة، وقيود التحسين.",
      "تطبيق المعادلة الخوارزمية: لمنع تسرب البيانات (Data Leakage) أثناء التحقق المتقاطع، يجب تدريب معاملات التحويل (مثل المتوسط والانحراف المعياري) على حزم التدريب حصراً وتطبيقها على حزم الاختبار.",
      "الحساب العددي الدقيق: في نظام كشف الاحتيال البنكي بمعدل 100,000 معاملة/ثانية، يؤدي تطبيق محولات التقييس المتينة المستخلصة من بيانات التدريب إلى خفض زمن الاستجابة لأقل من 2 مللي ثانية وخفض خطأ التعميم إلى $2.1\\%$.",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للذكاء الاصطناعي."
    ],
    "hintEn": "Recall the governing analytical relations for Feature Engineering, Imputation & Automated Preprocessing Pipelines.",
    "hintAr": "تذكر القوانين والعلاقات التحليلية الحاكمة لـ هندسة الخصائص، معالجة القيم المفقودة وخطوط الإعداد المسبق المؤتمتة.",
    "teacherTipEn": "Pay careful attention to vector dimensions and normalization constraints when implementing Feature Engineering, Imputation & Automated Preprocessing Pipelines.",
    "teacherTipAr": "انتبه جيداً لأبعاد المتجهات وشروط المعايرة والتقييس عند تطبيق هندسة الخصائص، معالجة القيم المفقودة وخطوط الإعداد المسبق المؤتمتة."
  },
  {
    "id": "th_ai_data_science_ch4_solved_5",
    "titleEn": "Solved Example 5: Distributed Big Data Analytics with Apache Spark & Resilient Distributed Datasets",
    "titleAr": "مثال محلول 5: تحليلات البيانات الضخمة الموزعة بـ Apache Spark وهياكل RDD المرنة",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 5] Design, formulate, and evaluate an AI/Data Science model architecture applying Distributed Big Data Analytics with Apache Spark & Resilient Distributed Datasets. Specify the mathematical formulations, optimization equations, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 5] صمم واشتق وقيم معمارية نموذج ذكاء اصطناعي أو علم بيانات بتطبيق تحليلات البيانات الضخمة الموزعة بـ Apache Spark وهياكل RDD المرنة. وضح الصياغات الرياضية ومعادلات التحسين وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify problem specifications and statistical constraints.\nStep 2: Formulate governing analytical equation: Spark operations are categorized into Transformations (lazy operations like `map`, `filter` that build a Directed Acyclic Graph) and Actions (e.g., `count`, `collect`, `save`) that trigger cluster execution.\nStep 3: Execute numerical substitution: Processing a 500GB telecom CDR dataset across an 8-node cluster, lazy evaluation optimizes the physical execution plan by pushing down filters and pruning columns, reducing shuffled data volume across the network from $500\\text{ GB}$ to $18.5\\text{ GB}$ ($96.3\\%$ reduction).\nStep 4: Verify convergence stability, generalization bounds, and algorithmic performance compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات المسألة والقيود الإحصائية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: تُصنف عمليات Spark إلى تحويلات مؤجلة (Transformations مثل `map` و `filter` تبني مخطط DAG) وإجراءات تنفيذية (Actions مثل `count` و `collect`) تطلق التنفيذ الفعلي في العنقود.\nالخطوة ٣: التعويض العددي وحساب النتائج: عند معالجة 500 جيجابايت من بيانات الاتصالات عبر عنقود من 8 عقد، تؤدي المعالجة المؤجلة ودفع المرشحات لتقليص حجم البيانات المنقولة عبر الشبكة من $500\\text{ GB}$ إلى $18.5\\text{ GB}$ بتخفيض $96.3\\%$.\nالخطوة ٤: التحقق من استقرار التقارب، حدود التعميم، وتوافق أداء النموذج.",
    "stepByStepSolutionEn": [
      "Identify system variables, loss functions, and optimization constraints.",
      "Apply formulation: Spark operations are categorized into Transformations (lazy operations like `map`, `filter` that build a Directed Acyclic Graph) and Actions (e.g., `count`, `collect`, `save`) that trigger cluster execution.",
      "Perform calculation: Processing a 500GB telecom CDR dataset across an 8-node cluster, lazy evaluation optimizes the physical execution plan by pushing down filters and pruning columns, reducing shuffled data volume across the network from $500\\text{ GB}$ to $18.5\\text{ GB}$ ($96.3\\%$ reduction).",
      "Confirm operational validity and alignment with international AI standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد متغيرات النظام، دوال الخسارة، وقيود التحسين.",
      "تطبيق المعادلة الخوارزمية: تُصنف عمليات Spark إلى تحويلات مؤجلة (Transformations مثل `map` و `filter` تبني مخطط DAG) وإجراءات تنفيذية (Actions مثل `count` و `collect`) تطلق التنفيذ الفعلي في العنقود.",
      "الحساب العددي الدقيق: عند معالجة 500 جيجابايت من بيانات الاتصالات عبر عنقود من 8 عقد، تؤدي المعالجة المؤجلة ودفع المرشحات لتقليص حجم البيانات المنقولة عبر الشبكة من $500\\text{ GB}$ إلى $18.5\\text{ GB}$ بتخفيض $96.3\\%$.",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للذكاء الاصطناعي."
    ],
    "hintEn": "Recall the governing analytical relations for Distributed Big Data Analytics with Apache Spark & Resilient Distributed Datasets.",
    "hintAr": "تذكر القوانين والعلاقات التحليلية الحاكمة لـ تحليلات البيانات الضخمة الموزعة بـ Apache Spark وهياكل RDD المرنة.",
    "teacherTipEn": "Pay careful attention to vector dimensions and normalization constraints when implementing Distributed Big Data Analytics with Apache Spark & Resilient Distributed Datasets.",
    "teacherTipAr": "انتبه جيداً لأبعاد المتجهات وشروط المعايرة والتقييس عند تطبيق تحليلات البيانات الضخمة الموزعة بـ Apache Spark وهياكل RDD المرنة."
  },
  {
    "id": "th_ai_data_science_ch4_solved_6",
    "titleEn": "Solved Example 6: Continuous MLOps Lifecycle: Experiment Tracking, Model Registry & Data Drift",
    "titleAr": "مثال محلول 6: دورة حياة MLOps المستمرة: تتبع التجارب، سجل النماذج واكتشاف انحراف البيانات",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 6] Design, formulate, and evaluate an AI/Data Science model architecture applying Continuous MLOps Lifecycle: Experiment Tracking, Model Registry & Data Drift. Specify the mathematical formulations, optimization equations, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 6] صمم واشتق وقيم معمارية نموذج ذكاء اصطناعي أو علم بيانات بتطبيق دورة حياة MLOps المستمرة: تتبع التجارب، سجل النماذج واكتشاف انحراف البيانات. وضح الصياغات الرياضية ومعادلات التحسين وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify problem specifications and statistical constraints.\nStep 2: Formulate governing analytical equation: Data drift occurs when production input feature distributions shift relative to training baseline ($P_{test}(X) \\ne P_{train}(X)$), detected via statistical hypothesis testing such as the Kolmogorov-Smirnov test or Population Stability Index (PSI).\nStep 3: Execute numerical substitution: A retail demand forecasting model deployed in Cairo exhibits a Population Stability Index $\\text{PSI} = \\sum (p_i - q_i) \\ln\\left(\\frac{p_i}{q_i}\\right) = 0.285$. Since $\\text{PSI} > 0.25$ indicates critical distribution shift, the automated MLOps monitoring pipeline triggers automatic model retraining on recent data.\nStep 4: Verify convergence stability, generalization bounds, and algorithmic performance compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات المسألة والقيود الإحصائية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: يحدث انحراف البيانات (Data Drift) عندما تتغير توزيعات مدخلات الإنتاج عن بيانات التدريب الأساسية، ويُكتشف باختبارات إحصائية مثل اختبار كولموجوروف-سميرنوف أو مؤشر استقرار المجتمع (PSI).\nالخطوة ٣: التعويض العددي وحساب النتائج: أظهر نموذج للتنبؤ بالطلب التجاري في القاهرة مؤشر استقرار مجتمع $\\text{PSI} = 0.285$. وحيث أن $\\text{PSI} > 0.25$ تدل على انحراف حرج في التوزيع، تطلق خطوط MLOps تلقائياً إعادة تدريب النموذج على البيانات الحديثة.\nالخطوة ٤: التحقق من استقرار التقارب، حدود التعميم، وتوافق أداء النموذج.",
    "stepByStepSolutionEn": [
      "Identify system variables, loss functions, and optimization constraints.",
      "Apply formulation: Data drift occurs when production input feature distributions shift relative to training baseline ($P_{test}(X) \\ne P_{train}(X)$), detected via statistical hypothesis testing such as the Kolmogorov-Smirnov test or Population Stability Index (PSI).",
      "Perform calculation: A retail demand forecasting model deployed in Cairo exhibits a Population Stability Index $\\text{PSI} = \\sum (p_i - q_i) \\ln\\left(\\frac{p_i}{q_i}\\right) = 0.285$. Since $\\text{PSI} > 0.25$ indicates critical distribution shift, the automated MLOps monitoring pipeline triggers automatic model retraining on recent data.",
      "Confirm operational validity and alignment with international AI standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد متغيرات النظام، دوال الخسارة، وقيود التحسين.",
      "تطبيق المعادلة الخوارزمية: يحدث انحراف البيانات (Data Drift) عندما تتغير توزيعات مدخلات الإنتاج عن بيانات التدريب الأساسية، ويُكتشف باختبارات إحصائية مثل اختبار كولموجوروف-سميرنوف أو مؤشر استقرار المجتمع (PSI).",
      "الحساب العددي الدقيق: أظهر نموذج للتنبؤ بالطلب التجاري في القاهرة مؤشر استقرار مجتمع $\\text{PSI} = 0.285$. وحيث أن $\\text{PSI} > 0.25$ تدل على انحراف حرج في التوزيع، تطلق خطوط MLOps تلقائياً إعادة تدريب النموذج على البيانات الحديثة.",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للذكاء الاصطناعي."
    ],
    "hintEn": "Recall the governing analytical relations for Continuous MLOps Lifecycle: Experiment Tracking, Model Registry & Data Drift.",
    "hintAr": "تذكر القوانين والعلاقات التحليلية الحاكمة لـ دورة حياة MLOps المستمرة: تتبع التجارب، سجل النماذج واكتشاف انحراف البيانات.",
    "teacherTipEn": "Pay careful attention to vector dimensions and normalization constraints when implementing Continuous MLOps Lifecycle: Experiment Tracking, Model Registry & Data Drift.",
    "teacherTipAr": "انتبه جيداً لأبعاد المتجهات وشروط المعايرة والتقييس عند تطبيق دورة حياة MLOps المستمرة: تتبع التجارب، سجل النماذج واكتشاف انحراف البيانات."
  },
  {
    "id": "th_ai_data_science_ch4_solved_7",
    "titleEn": "Solved Example 7: Feature Engineering, Imputation & Automated Preprocessing Pipelines",
    "titleAr": "مثال محلول 7: هندسة الخصائص، معالجة القيم المفقودة وخطوط الإعداد المسبق المؤتمتة",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 7] Design, formulate, and evaluate an AI/Data Science model architecture applying Feature Engineering, Imputation & Automated Preprocessing Pipelines. Specify the mathematical formulations, optimization equations, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 7] صمم واشتق وقيم معمارية نموذج ذكاء اصطناعي أو علم بيانات بتطبيق هندسة الخصائص، معالجة القيم المفقودة وخطوط الإعداد المسبق المؤتمتة. وضح الصياغات الرياضية ومعادلات التحسين وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify problem specifications and statistical constraints.\nStep 2: Formulate governing analytical equation: To prevent data leakage during cross-validation, preprocessing transformers (e.g., StandardScaler: $z = \\frac{x - \\mu}{\\sigma}$) must fit parameters strictly on training folds and only transform validation/test folds.\nStep 3: Execute numerical substitution: In a real-time banking fraud pipeline handling 100,000 transactions/sec, fitting a robust Median Imputer and RobustScaler on 5 million historical records compresses latency to $<2\\text{ ms}$ while reducing model out-of-fold generalization error from $8.4\\%$ to $2.1\\%$.\nStep 4: Verify convergence stability, generalization bounds, and algorithmic performance compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات المسألة والقيود الإحصائية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: لمنع تسرب البيانات (Data Leakage) أثناء التحقق المتقاطع، يجب تدريب معاملات التحويل (مثل المتوسط والانحراف المعياري) على حزم التدريب حصراً وتطبيقها على حزم الاختبار.\nالخطوة ٣: التعويض العددي وحساب النتائج: في نظام كشف الاحتيال البنكي بمعدل 100,000 معاملة/ثانية، يؤدي تطبيق محولات التقييس المتينة المستخلصة من بيانات التدريب إلى خفض زمن الاستجابة لأقل من 2 مللي ثانية وخفض خطأ التعميم إلى $2.1\\%$.\nالخطوة ٤: التحقق من استقرار التقارب، حدود التعميم، وتوافق أداء النموذج.",
    "stepByStepSolutionEn": [
      "Identify system variables, loss functions, and optimization constraints.",
      "Apply formulation: To prevent data leakage during cross-validation, preprocessing transformers (e.g., StandardScaler: $z = \\frac{x - \\mu}{\\sigma}$) must fit parameters strictly on training folds and only transform validation/test folds.",
      "Perform calculation: In a real-time banking fraud pipeline handling 100,000 transactions/sec, fitting a robust Median Imputer and RobustScaler on 5 million historical records compresses latency to $<2\\text{ ms}$ while reducing model out-of-fold generalization error from $8.4\\%$ to $2.1\\%$.",
      "Confirm operational validity and alignment with international AI standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد متغيرات النظام، دوال الخسارة، وقيود التحسين.",
      "تطبيق المعادلة الخوارزمية: لمنع تسرب البيانات (Data Leakage) أثناء التحقق المتقاطع، يجب تدريب معاملات التحويل (مثل المتوسط والانحراف المعياري) على حزم التدريب حصراً وتطبيقها على حزم الاختبار.",
      "الحساب العددي الدقيق: في نظام كشف الاحتيال البنكي بمعدل 100,000 معاملة/ثانية، يؤدي تطبيق محولات التقييس المتينة المستخلصة من بيانات التدريب إلى خفض زمن الاستجابة لأقل من 2 مللي ثانية وخفض خطأ التعميم إلى $2.1\\%$.",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للذكاء الاصطناعي."
    ],
    "hintEn": "Recall the governing analytical relations for Feature Engineering, Imputation & Automated Preprocessing Pipelines.",
    "hintAr": "تذكر القوانين والعلاقات التحليلية الحاكمة لـ هندسة الخصائص، معالجة القيم المفقودة وخطوط الإعداد المسبق المؤتمتة.",
    "teacherTipEn": "Pay careful attention to vector dimensions and normalization constraints when implementing Feature Engineering, Imputation & Automated Preprocessing Pipelines.",
    "teacherTipAr": "انتبه جيداً لأبعاد المتجهات وشروط المعايرة والتقييس عند تطبيق هندسة الخصائص، معالجة القيم المفقودة وخطوط الإعداد المسبق المؤتمتة."
  },
  {
    "id": "th_ai_data_science_ch4_solved_8",
    "titleEn": "Solved Example 8: Distributed Big Data Analytics with Apache Spark & Resilient Distributed Datasets",
    "titleAr": "مثال محلول 8: تحليلات البيانات الضخمة الموزعة بـ Apache Spark وهياكل RDD المرنة",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 8] Design, formulate, and evaluate an AI/Data Science model architecture applying Distributed Big Data Analytics with Apache Spark & Resilient Distributed Datasets. Specify the mathematical formulations, optimization equations, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 8] صمم واشتق وقيم معمارية نموذج ذكاء اصطناعي أو علم بيانات بتطبيق تحليلات البيانات الضخمة الموزعة بـ Apache Spark وهياكل RDD المرنة. وضح الصياغات الرياضية ومعادلات التحسين وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify problem specifications and statistical constraints.\nStep 2: Formulate governing analytical equation: Spark operations are categorized into Transformations (lazy operations like `map`, `filter` that build a Directed Acyclic Graph) and Actions (e.g., `count`, `collect`, `save`) that trigger cluster execution.\nStep 3: Execute numerical substitution: Processing a 500GB telecom CDR dataset across an 8-node cluster, lazy evaluation optimizes the physical execution plan by pushing down filters and pruning columns, reducing shuffled data volume across the network from $500\\text{ GB}$ to $18.5\\text{ GB}$ ($96.3\\%$ reduction).\nStep 4: Verify convergence stability, generalization bounds, and algorithmic performance compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات المسألة والقيود الإحصائية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: تُصنف عمليات Spark إلى تحويلات مؤجلة (Transformations مثل `map` و `filter` تبني مخطط DAG) وإجراءات تنفيذية (Actions مثل `count` و `collect`) تطلق التنفيذ الفعلي في العنقود.\nالخطوة ٣: التعويض العددي وحساب النتائج: عند معالجة 500 جيجابايت من بيانات الاتصالات عبر عنقود من 8 عقد، تؤدي المعالجة المؤجلة ودفع المرشحات لتقليص حجم البيانات المنقولة عبر الشبكة من $500\\text{ GB}$ إلى $18.5\\text{ GB}$ بتخفيض $96.3\\%$.\nالخطوة ٤: التحقق من استقرار التقارب، حدود التعميم، وتوافق أداء النموذج.",
    "stepByStepSolutionEn": [
      "Identify system variables, loss functions, and optimization constraints.",
      "Apply formulation: Spark operations are categorized into Transformations (lazy operations like `map`, `filter` that build a Directed Acyclic Graph) and Actions (e.g., `count`, `collect`, `save`) that trigger cluster execution.",
      "Perform calculation: Processing a 500GB telecom CDR dataset across an 8-node cluster, lazy evaluation optimizes the physical execution plan by pushing down filters and pruning columns, reducing shuffled data volume across the network from $500\\text{ GB}$ to $18.5\\text{ GB}$ ($96.3\\%$ reduction).",
      "Confirm operational validity and alignment with international AI standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد متغيرات النظام، دوال الخسارة، وقيود التحسين.",
      "تطبيق المعادلة الخوارزمية: تُصنف عمليات Spark إلى تحويلات مؤجلة (Transformations مثل `map` و `filter` تبني مخطط DAG) وإجراءات تنفيذية (Actions مثل `count` و `collect`) تطلق التنفيذ الفعلي في العنقود.",
      "الحساب العددي الدقيق: عند معالجة 500 جيجابايت من بيانات الاتصالات عبر عنقود من 8 عقد، تؤدي المعالجة المؤجلة ودفع المرشحات لتقليص حجم البيانات المنقولة عبر الشبكة من $500\\text{ GB}$ إلى $18.5\\text{ GB}$ بتخفيض $96.3\\%$.",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للذكاء الاصطناعي."
    ],
    "hintEn": "Recall the governing analytical relations for Distributed Big Data Analytics with Apache Spark & Resilient Distributed Datasets.",
    "hintAr": "تذكر القوانين والعلاقات التحليلية الحاكمة لـ تحليلات البيانات الضخمة الموزعة بـ Apache Spark وهياكل RDD المرنة.",
    "teacherTipEn": "Pay careful attention to vector dimensions and normalization constraints when implementing Distributed Big Data Analytics with Apache Spark & Resilient Distributed Datasets.",
    "teacherTipAr": "انتبه جيداً لأبعاد المتجهات وشروط المعايرة والتقييس عند تطبيق تحليلات البيانات الضخمة الموزعة بـ Apache Spark وهياكل RDD المرنة."
  },
  {
    "id": "th_ai_data_science_ch4_solved_9",
    "titleEn": "Solved Example 9: Continuous MLOps Lifecycle: Experiment Tracking, Model Registry & Data Drift",
    "titleAr": "مثال محلول 9: دورة حياة MLOps المستمرة: تتبع التجارب، سجل النماذج واكتشاف انحراف البيانات",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 9] Design, formulate, and evaluate an AI/Data Science model architecture applying Continuous MLOps Lifecycle: Experiment Tracking, Model Registry & Data Drift. Specify the mathematical formulations, optimization equations, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 9] صمم واشتق وقيم معمارية نموذج ذكاء اصطناعي أو علم بيانات بتطبيق دورة حياة MLOps المستمرة: تتبع التجارب، سجل النماذج واكتشاف انحراف البيانات. وضح الصياغات الرياضية ومعادلات التحسين وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify problem specifications and statistical constraints.\nStep 2: Formulate governing analytical equation: Data drift occurs when production input feature distributions shift relative to training baseline ($P_{test}(X) \\ne P_{train}(X)$), detected via statistical hypothesis testing such as the Kolmogorov-Smirnov test or Population Stability Index (PSI).\nStep 3: Execute numerical substitution: A retail demand forecasting model deployed in Cairo exhibits a Population Stability Index $\\text{PSI} = \\sum (p_i - q_i) \\ln\\left(\\frac{p_i}{q_i}\\right) = 0.285$. Since $\\text{PSI} > 0.25$ indicates critical distribution shift, the automated MLOps monitoring pipeline triggers automatic model retraining on recent data.\nStep 4: Verify convergence stability, generalization bounds, and algorithmic performance compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات المسألة والقيود الإحصائية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: يحدث انحراف البيانات (Data Drift) عندما تتغير توزيعات مدخلات الإنتاج عن بيانات التدريب الأساسية، ويُكتشف باختبارات إحصائية مثل اختبار كولموجوروف-سميرنوف أو مؤشر استقرار المجتمع (PSI).\nالخطوة ٣: التعويض العددي وحساب النتائج: أظهر نموذج للتنبؤ بالطلب التجاري في القاهرة مؤشر استقرار مجتمع $\\text{PSI} = 0.285$. وحيث أن $\\text{PSI} > 0.25$ تدل على انحراف حرج في التوزيع، تطلق خطوط MLOps تلقائياً إعادة تدريب النموذج على البيانات الحديثة.\nالخطوة ٤: التحقق من استقرار التقارب، حدود التعميم، وتوافق أداء النموذج.",
    "stepByStepSolutionEn": [
      "Identify system variables, loss functions, and optimization constraints.",
      "Apply formulation: Data drift occurs when production input feature distributions shift relative to training baseline ($P_{test}(X) \\ne P_{train}(X)$), detected via statistical hypothesis testing such as the Kolmogorov-Smirnov test or Population Stability Index (PSI).",
      "Perform calculation: A retail demand forecasting model deployed in Cairo exhibits a Population Stability Index $\\text{PSI} = \\sum (p_i - q_i) \\ln\\left(\\frac{p_i}{q_i}\\right) = 0.285$. Since $\\text{PSI} > 0.25$ indicates critical distribution shift, the automated MLOps monitoring pipeline triggers automatic model retraining on recent data.",
      "Confirm operational validity and alignment with international AI standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد متغيرات النظام، دوال الخسارة، وقيود التحسين.",
      "تطبيق المعادلة الخوارزمية: يحدث انحراف البيانات (Data Drift) عندما تتغير توزيعات مدخلات الإنتاج عن بيانات التدريب الأساسية، ويُكتشف باختبارات إحصائية مثل اختبار كولموجوروف-سميرنوف أو مؤشر استقرار المجتمع (PSI).",
      "الحساب العددي الدقيق: أظهر نموذج للتنبؤ بالطلب التجاري في القاهرة مؤشر استقرار مجتمع $\\text{PSI} = 0.285$. وحيث أن $\\text{PSI} > 0.25$ تدل على انحراف حرج في التوزيع، تطلق خطوط MLOps تلقائياً إعادة تدريب النموذج على البيانات الحديثة.",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للذكاء الاصطناعي."
    ],
    "hintEn": "Recall the governing analytical relations for Continuous MLOps Lifecycle: Experiment Tracking, Model Registry & Data Drift.",
    "hintAr": "تذكر القوانين والعلاقات التحليلية الحاكمة لـ دورة حياة MLOps المستمرة: تتبع التجارب، سجل النماذج واكتشاف انحراف البيانات.",
    "teacherTipEn": "Pay careful attention to vector dimensions and normalization constraints when implementing Continuous MLOps Lifecycle: Experiment Tracking, Model Registry & Data Drift.",
    "teacherTipAr": "انتبه جيداً لأبعاد المتجهات وشروط المعايرة والتقييس عند تطبيق دورة حياة MLOps المستمرة: تتبع التجارب، سجل النماذج واكتشاف انحراف البيانات."
  },
  {
    "id": "th_ai_data_science_ch4_solved_10",
    "titleEn": "Solved Example 10: Feature Engineering, Imputation & Automated Preprocessing Pipelines",
    "titleAr": "مثال محلول 10: هندسة الخصائص، معالجة القيم المفقودة وخطوط الإعداد المسبق المؤتمتة",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 10] Design, formulate, and evaluate an AI/Data Science model architecture applying Feature Engineering, Imputation & Automated Preprocessing Pipelines. Specify the mathematical formulations, optimization equations, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 10] صمم واشتق وقيم معمارية نموذج ذكاء اصطناعي أو علم بيانات بتطبيق هندسة الخصائص، معالجة القيم المفقودة وخطوط الإعداد المسبق المؤتمتة. وضح الصياغات الرياضية ومعادلات التحسين وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify problem specifications and statistical constraints.\nStep 2: Formulate governing analytical equation: To prevent data leakage during cross-validation, preprocessing transformers (e.g., StandardScaler: $z = \\frac{x - \\mu}{\\sigma}$) must fit parameters strictly on training folds and only transform validation/test folds.\nStep 3: Execute numerical substitution: In a real-time banking fraud pipeline handling 100,000 transactions/sec, fitting a robust Median Imputer and RobustScaler on 5 million historical records compresses latency to $<2\\text{ ms}$ while reducing model out-of-fold generalization error from $8.4\\%$ to $2.1\\%$.\nStep 4: Verify convergence stability, generalization bounds, and algorithmic performance compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات المسألة والقيود الإحصائية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: لمنع تسرب البيانات (Data Leakage) أثناء التحقق المتقاطع، يجب تدريب معاملات التحويل (مثل المتوسط والانحراف المعياري) على حزم التدريب حصراً وتطبيقها على حزم الاختبار.\nالخطوة ٣: التعويض العددي وحساب النتائج: في نظام كشف الاحتيال البنكي بمعدل 100,000 معاملة/ثانية، يؤدي تطبيق محولات التقييس المتينة المستخلصة من بيانات التدريب إلى خفض زمن الاستجابة لأقل من 2 مللي ثانية وخفض خطأ التعميم إلى $2.1\\%$.\nالخطوة ٤: التحقق من استقرار التقارب، حدود التعميم، وتوافق أداء النموذج.",
    "stepByStepSolutionEn": [
      "Identify system variables, loss functions, and optimization constraints.",
      "Apply formulation: To prevent data leakage during cross-validation, preprocessing transformers (e.g., StandardScaler: $z = \\frac{x - \\mu}{\\sigma}$) must fit parameters strictly on training folds and only transform validation/test folds.",
      "Perform calculation: In a real-time banking fraud pipeline handling 100,000 transactions/sec, fitting a robust Median Imputer and RobustScaler on 5 million historical records compresses latency to $<2\\text{ ms}$ while reducing model out-of-fold generalization error from $8.4\\%$ to $2.1\\%$.",
      "Confirm operational validity and alignment with international AI standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد متغيرات النظام، دوال الخسارة، وقيود التحسين.",
      "تطبيق المعادلة الخوارزمية: لمنع تسرب البيانات (Data Leakage) أثناء التحقق المتقاطع، يجب تدريب معاملات التحويل (مثل المتوسط والانحراف المعياري) على حزم التدريب حصراً وتطبيقها على حزم الاختبار.",
      "الحساب العددي الدقيق: في نظام كشف الاحتيال البنكي بمعدل 100,000 معاملة/ثانية، يؤدي تطبيق محولات التقييس المتينة المستخلصة من بيانات التدريب إلى خفض زمن الاستجابة لأقل من 2 مللي ثانية وخفض خطأ التعميم إلى $2.1\\%$.",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للذكاء الاصطناعي."
    ],
    "hintEn": "Recall the governing analytical relations for Feature Engineering, Imputation & Automated Preprocessing Pipelines.",
    "hintAr": "تذكر القوانين والعلاقات التحليلية الحاكمة لـ هندسة الخصائص، معالجة القيم المفقودة وخطوط الإعداد المسبق المؤتمتة.",
    "teacherTipEn": "Pay careful attention to vector dimensions and normalization constraints when implementing Feature Engineering, Imputation & Automated Preprocessing Pipelines.",
    "teacherTipAr": "انتبه جيداً لأبعاد المتجهات وشروط المعايرة والتقييس عند تطبيق هندسة الخصائص، معالجة القيم المفقودة وخطوط الإعداد المسبق المؤتمتة."
  }
];

export const th_ai_data_science_ch4ExerciseProblems: SolvedProblem[] = [
  {
    "id": "th_ai_data_science_ch4_ex_1",
    "titleEn": "Exercise Problem 1: Feature Engineering, Imputation & Automated Preprocessing Pipelines",
    "titleAr": "تمرين 1: هندسة الخصائص، معالجة القيم المفقودة وخطوط الإعداد المسبق المؤتمتة",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 1] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Feature Engineering, Imputation & Automated Preprocessing Pipelines. Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 1] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن هندسة الخصائص، معالجة القيم المفقودة وخطوط الإعداد المسبق المؤتمتة. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: To prevent data leakage during cross-validation, preprocessing transformers (e.g., StandardScaler: $z = \\frac{x - \\mu}{\\sigma}$) must fit parameters strictly on training folds and only transform validation/test folds.\n- Calculation & Results: In a real-time banking fraud pipeline handling 100,000 transactions/sec, fitting a robust Median Imputer and RobustScaler on 5 million historical records compresses latency to $<2\\text{ ms}$ while reducing model out-of-fold generalization error from $8.4\\%$ to $2.1\\%$.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: لمنع تسرب البيانات (Data Leakage) أثناء التحقق المتقاطع، يجب تدريب معاملات التحويل (مثل المتوسط والانحراف المعياري) على حزم التدريب حصراً وتطبيقها على حزم الاختبار.\n- خطوات الحساب والنتيجة: في نظام كشف الاحتيال البنكي بمعدل 100,000 معاملة/ثانية، يؤدي تطبيق محولات التقييس المتينة المستخلصة من بيانات التدريب إلى خفض زمن الاستجابة لأقل من 2 مللي ثانية وخفض خطأ التعميم إلى $2.1\\%$.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: To prevent data leakage during cross-validation, preprocessing transformers (e.g., StandardScaler: $z = \\frac{x - \\mu}{\\sigma}$) must fit parameters strictly on training folds and only transform validation/test folds.",
      "Calculate final values: In a real-time banking fraud pipeline handling 100,000 transactions/sec, fitting a robust Median Imputer and RobustScaler on 5 million historical records compresses latency to $<2\\text{ ms}$ while reducing model out-of-fold generalization error from $8.4\\%$ to $2.1\\%$.",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: لمنع تسرب البيانات (Data Leakage) أثناء التحقق المتقاطع، يجب تدريب معاملات التحويل (مثل المتوسط والانحراف المعياري) على حزم التدريب حصراً وتطبيقها على حزم الاختبار.",
      "حساب الناتج النهائي: في نظام كشف الاحتيال البنكي بمعدل 100,000 معاملة/ثانية، يؤدي تطبيق محولات التقييس المتينة المستخلصة من بيانات التدريب إلى خفض زمن الاستجابة لأقل من 2 مللي ثانية وخفض خطأ التعميم إلى $2.1\\%$.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: To prevent data leakage during cross-validation, preprocessing transformers (e.g., StandardScaler: $z = \\frac{x - \\mu}{\\sigma}$) must fit parameters strictly on training folds and only transform validation/test folds.",
    "hintAr": "طبق القانون الأساسي: لمنع تسرب البيانات (Data Leakage) أثناء التحقق المتقاطع، يجب تدريب معاملات التحويل (مثل المتوسط والانحراف المعياري) على حزم التدريب حصراً وتطبيقها على حزم الاختبار.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "th_ai_data_science_ch4_ex_2",
    "titleEn": "Exercise Problem 2: Distributed Big Data Analytics with Apache Spark & Resilient Distributed Datasets",
    "titleAr": "تمرين 2: تحليلات البيانات الضخمة الموزعة بـ Apache Spark وهياكل RDD المرنة",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 2] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Distributed Big Data Analytics with Apache Spark & Resilient Distributed Datasets. Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 2] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن تحليلات البيانات الضخمة الموزعة بـ Apache Spark وهياكل RDD المرنة. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: Spark operations are categorized into Transformations (lazy operations like `map`, `filter` that build a Directed Acyclic Graph) and Actions (e.g., `count`, `collect`, `save`) that trigger cluster execution.\n- Calculation & Results: Processing a 500GB telecom CDR dataset across an 8-node cluster, lazy evaluation optimizes the physical execution plan by pushing down filters and pruning columns, reducing shuffled data volume across the network from $500\\text{ GB}$ to $18.5\\text{ GB}$ ($96.3\\%$ reduction).",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تُصنف عمليات Spark إلى تحويلات مؤجلة (Transformations مثل `map` و `filter` تبني مخطط DAG) وإجراءات تنفيذية (Actions مثل `count` و `collect`) تطلق التنفيذ الفعلي في العنقود.\n- خطوات الحساب والنتيجة: عند معالجة 500 جيجابايت من بيانات الاتصالات عبر عنقود من 8 عقد، تؤدي المعالجة المؤجلة ودفع المرشحات لتقليص حجم البيانات المنقولة عبر الشبكة من $500\\text{ GB}$ إلى $18.5\\text{ GB}$ بتخفيض $96.3\\%$.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: Spark operations are categorized into Transformations (lazy operations like `map`, `filter` that build a Directed Acyclic Graph) and Actions (e.g., `count`, `collect`, `save`) that trigger cluster execution.",
      "Calculate final values: Processing a 500GB telecom CDR dataset across an 8-node cluster, lazy evaluation optimizes the physical execution plan by pushing down filters and pruning columns, reducing shuffled data volume across the network from $500\\text{ GB}$ to $18.5\\text{ GB}$ ($96.3\\%$ reduction).",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: تُصنف عمليات Spark إلى تحويلات مؤجلة (Transformations مثل `map` و `filter` تبني مخطط DAG) وإجراءات تنفيذية (Actions مثل `count` و `collect`) تطلق التنفيذ الفعلي في العنقود.",
      "حساب الناتج النهائي: عند معالجة 500 جيجابايت من بيانات الاتصالات عبر عنقود من 8 عقد، تؤدي المعالجة المؤجلة ودفع المرشحات لتقليص حجم البيانات المنقولة عبر الشبكة من $500\\text{ GB}$ إلى $18.5\\text{ GB}$ بتخفيض $96.3\\%$.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: Spark operations are categorized into Transformations (lazy operations like `map`, `filter` that build a Directed Acyclic Graph) and Actions (e.g., `count`, `collect`, `save`) that trigger cluster execution.",
    "hintAr": "طبق القانون الأساسي: تُصنف عمليات Spark إلى تحويلات مؤجلة (Transformations مثل `map` و `filter` تبني مخطط DAG) وإجراءات تنفيذية (Actions مثل `count` و `collect`) تطلق التنفيذ الفعلي في العنقود.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "th_ai_data_science_ch4_ex_3",
    "titleEn": "Exercise Problem 3: Continuous MLOps Lifecycle: Experiment Tracking, Model Registry & Data Drift",
    "titleAr": "تمرين 3: دورة حياة MLOps المستمرة: تتبع التجارب، سجل النماذج واكتشاف انحراف البيانات",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 3] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Continuous MLOps Lifecycle: Experiment Tracking, Model Registry & Data Drift. Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 3] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن دورة حياة MLOps المستمرة: تتبع التجارب، سجل النماذج واكتشاف انحراف البيانات. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: Data drift occurs when production input feature distributions shift relative to training baseline ($P_{test}(X) \\ne P_{train}(X)$), detected via statistical hypothesis testing such as the Kolmogorov-Smirnov test or Population Stability Index (PSI).\n- Calculation & Results: A retail demand forecasting model deployed in Cairo exhibits a Population Stability Index $\\text{PSI} = \\sum (p_i - q_i) \\ln\\left(\\frac{p_i}{q_i}\\right) = 0.285$. Since $\\text{PSI} > 0.25$ indicates critical distribution shift, the automated MLOps monitoring pipeline triggers automatic model retraining on recent data.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: يحدث انحراف البيانات (Data Drift) عندما تتغير توزيعات مدخلات الإنتاج عن بيانات التدريب الأساسية، ويُكتشف باختبارات إحصائية مثل اختبار كولموجوروف-سميرنوف أو مؤشر استقرار المجتمع (PSI).\n- خطوات الحساب والنتيجة: أظهر نموذج للتنبؤ بالطلب التجاري في القاهرة مؤشر استقرار مجتمع $\\text{PSI} = 0.285$. وحيث أن $\\text{PSI} > 0.25$ تدل على انحراف حرج في التوزيع، تطلق خطوط MLOps تلقائياً إعادة تدريب النموذج على البيانات الحديثة.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: Data drift occurs when production input feature distributions shift relative to training baseline ($P_{test}(X) \\ne P_{train}(X)$), detected via statistical hypothesis testing such as the Kolmogorov-Smirnov test or Population Stability Index (PSI).",
      "Calculate final values: A retail demand forecasting model deployed in Cairo exhibits a Population Stability Index $\\text{PSI} = \\sum (p_i - q_i) \\ln\\left(\\frac{p_i}{q_i}\\right) = 0.285$. Since $\\text{PSI} > 0.25$ indicates critical distribution shift, the automated MLOps monitoring pipeline triggers automatic model retraining on recent data.",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: يحدث انحراف البيانات (Data Drift) عندما تتغير توزيعات مدخلات الإنتاج عن بيانات التدريب الأساسية، ويُكتشف باختبارات إحصائية مثل اختبار كولموجوروف-سميرنوف أو مؤشر استقرار المجتمع (PSI).",
      "حساب الناتج النهائي: أظهر نموذج للتنبؤ بالطلب التجاري في القاهرة مؤشر استقرار مجتمع $\\text{PSI} = 0.285$. وحيث أن $\\text{PSI} > 0.25$ تدل على انحراف حرج في التوزيع، تطلق خطوط MLOps تلقائياً إعادة تدريب النموذج على البيانات الحديثة.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: Data drift occurs when production input feature distributions shift relative to training baseline ($P_{test}(X) \\ne P_{train}(X)$), detected via statistical hypothesis testing such as the Kolmogorov-Smirnov test or Population Stability Index (PSI).",
    "hintAr": "طبق القانون الأساسي: يحدث انحراف البيانات (Data Drift) عندما تتغير توزيعات مدخلات الإنتاج عن بيانات التدريب الأساسية، ويُكتشف باختبارات إحصائية مثل اختبار كولموجوروف-سميرنوف أو مؤشر استقرار المجتمع (PSI).",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "th_ai_data_science_ch4_ex_4",
    "titleEn": "Exercise Problem 4: Feature Engineering, Imputation & Automated Preprocessing Pipelines",
    "titleAr": "تمرين 4: هندسة الخصائص، معالجة القيم المفقودة وخطوط الإعداد المسبق المؤتمتة",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 4] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Feature Engineering, Imputation & Automated Preprocessing Pipelines. Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 4] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن هندسة الخصائص، معالجة القيم المفقودة وخطوط الإعداد المسبق المؤتمتة. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: To prevent data leakage during cross-validation, preprocessing transformers (e.g., StandardScaler: $z = \\frac{x - \\mu}{\\sigma}$) must fit parameters strictly on training folds and only transform validation/test folds.\n- Calculation & Results: In a real-time banking fraud pipeline handling 100,000 transactions/sec, fitting a robust Median Imputer and RobustScaler on 5 million historical records compresses latency to $<2\\text{ ms}$ while reducing model out-of-fold generalization error from $8.4\\%$ to $2.1\\%$.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: لمنع تسرب البيانات (Data Leakage) أثناء التحقق المتقاطع، يجب تدريب معاملات التحويل (مثل المتوسط والانحراف المعياري) على حزم التدريب حصراً وتطبيقها على حزم الاختبار.\n- خطوات الحساب والنتيجة: في نظام كشف الاحتيال البنكي بمعدل 100,000 معاملة/ثانية، يؤدي تطبيق محولات التقييس المتينة المستخلصة من بيانات التدريب إلى خفض زمن الاستجابة لأقل من 2 مللي ثانية وخفض خطأ التعميم إلى $2.1\\%$.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: To prevent data leakage during cross-validation, preprocessing transformers (e.g., StandardScaler: $z = \\frac{x - \\mu}{\\sigma}$) must fit parameters strictly on training folds and only transform validation/test folds.",
      "Calculate final values: In a real-time banking fraud pipeline handling 100,000 transactions/sec, fitting a robust Median Imputer and RobustScaler on 5 million historical records compresses latency to $<2\\text{ ms}$ while reducing model out-of-fold generalization error from $8.4\\%$ to $2.1\\%$.",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: لمنع تسرب البيانات (Data Leakage) أثناء التحقق المتقاطع، يجب تدريب معاملات التحويل (مثل المتوسط والانحراف المعياري) على حزم التدريب حصراً وتطبيقها على حزم الاختبار.",
      "حساب الناتج النهائي: في نظام كشف الاحتيال البنكي بمعدل 100,000 معاملة/ثانية، يؤدي تطبيق محولات التقييس المتينة المستخلصة من بيانات التدريب إلى خفض زمن الاستجابة لأقل من 2 مللي ثانية وخفض خطأ التعميم إلى $2.1\\%$.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: To prevent data leakage during cross-validation, preprocessing transformers (e.g., StandardScaler: $z = \\frac{x - \\mu}{\\sigma}$) must fit parameters strictly on training folds and only transform validation/test folds.",
    "hintAr": "طبق القانون الأساسي: لمنع تسرب البيانات (Data Leakage) أثناء التحقق المتقاطع، يجب تدريب معاملات التحويل (مثل المتوسط والانحراف المعياري) على حزم التدريب حصراً وتطبيقها على حزم الاختبار.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "th_ai_data_science_ch4_ex_5",
    "titleEn": "Exercise Problem 5: Distributed Big Data Analytics with Apache Spark & Resilient Distributed Datasets",
    "titleAr": "تمرين 5: تحليلات البيانات الضخمة الموزعة بـ Apache Spark وهياكل RDD المرنة",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 5] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Distributed Big Data Analytics with Apache Spark & Resilient Distributed Datasets. Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 5] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن تحليلات البيانات الضخمة الموزعة بـ Apache Spark وهياكل RDD المرنة. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: Spark operations are categorized into Transformations (lazy operations like `map`, `filter` that build a Directed Acyclic Graph) and Actions (e.g., `count`, `collect`, `save`) that trigger cluster execution.\n- Calculation & Results: Processing a 500GB telecom CDR dataset across an 8-node cluster, lazy evaluation optimizes the physical execution plan by pushing down filters and pruning columns, reducing shuffled data volume across the network from $500\\text{ GB}$ to $18.5\\text{ GB}$ ($96.3\\%$ reduction).",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تُصنف عمليات Spark إلى تحويلات مؤجلة (Transformations مثل `map` و `filter` تبني مخطط DAG) وإجراءات تنفيذية (Actions مثل `count` و `collect`) تطلق التنفيذ الفعلي في العنقود.\n- خطوات الحساب والنتيجة: عند معالجة 500 جيجابايت من بيانات الاتصالات عبر عنقود من 8 عقد، تؤدي المعالجة المؤجلة ودفع المرشحات لتقليص حجم البيانات المنقولة عبر الشبكة من $500\\text{ GB}$ إلى $18.5\\text{ GB}$ بتخفيض $96.3\\%$.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: Spark operations are categorized into Transformations (lazy operations like `map`, `filter` that build a Directed Acyclic Graph) and Actions (e.g., `count`, `collect`, `save`) that trigger cluster execution.",
      "Calculate final values: Processing a 500GB telecom CDR dataset across an 8-node cluster, lazy evaluation optimizes the physical execution plan by pushing down filters and pruning columns, reducing shuffled data volume across the network from $500\\text{ GB}$ to $18.5\\text{ GB}$ ($96.3\\%$ reduction).",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: تُصنف عمليات Spark إلى تحويلات مؤجلة (Transformations مثل `map` و `filter` تبني مخطط DAG) وإجراءات تنفيذية (Actions مثل `count` و `collect`) تطلق التنفيذ الفعلي في العنقود.",
      "حساب الناتج النهائي: عند معالجة 500 جيجابايت من بيانات الاتصالات عبر عنقود من 8 عقد، تؤدي المعالجة المؤجلة ودفع المرشحات لتقليص حجم البيانات المنقولة عبر الشبكة من $500\\text{ GB}$ إلى $18.5\\text{ GB}$ بتخفيض $96.3\\%$.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: Spark operations are categorized into Transformations (lazy operations like `map`, `filter` that build a Directed Acyclic Graph) and Actions (e.g., `count`, `collect`, `save`) that trigger cluster execution.",
    "hintAr": "طبق القانون الأساسي: تُصنف عمليات Spark إلى تحويلات مؤجلة (Transformations مثل `map` و `filter` تبني مخطط DAG) وإجراءات تنفيذية (Actions مثل `count` و `collect`) تطلق التنفيذ الفعلي في العنقود.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "th_ai_data_science_ch4_ex_6",
    "titleEn": "Exercise Problem 6: Continuous MLOps Lifecycle: Experiment Tracking, Model Registry & Data Drift",
    "titleAr": "تمرين 6: دورة حياة MLOps المستمرة: تتبع التجارب، سجل النماذج واكتشاف انحراف البيانات",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 6] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Continuous MLOps Lifecycle: Experiment Tracking, Model Registry & Data Drift. Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 6] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن دورة حياة MLOps المستمرة: تتبع التجارب، سجل النماذج واكتشاف انحراف البيانات. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: Data drift occurs when production input feature distributions shift relative to training baseline ($P_{test}(X) \\ne P_{train}(X)$), detected via statistical hypothesis testing such as the Kolmogorov-Smirnov test or Population Stability Index (PSI).\n- Calculation & Results: A retail demand forecasting model deployed in Cairo exhibits a Population Stability Index $\\text{PSI} = \\sum (p_i - q_i) \\ln\\left(\\frac{p_i}{q_i}\\right) = 0.285$. Since $\\text{PSI} > 0.25$ indicates critical distribution shift, the automated MLOps monitoring pipeline triggers automatic model retraining on recent data.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: يحدث انحراف البيانات (Data Drift) عندما تتغير توزيعات مدخلات الإنتاج عن بيانات التدريب الأساسية، ويُكتشف باختبارات إحصائية مثل اختبار كولموجوروف-سميرنوف أو مؤشر استقرار المجتمع (PSI).\n- خطوات الحساب والنتيجة: أظهر نموذج للتنبؤ بالطلب التجاري في القاهرة مؤشر استقرار مجتمع $\\text{PSI} = 0.285$. وحيث أن $\\text{PSI} > 0.25$ تدل على انحراف حرج في التوزيع، تطلق خطوط MLOps تلقائياً إعادة تدريب النموذج على البيانات الحديثة.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: Data drift occurs when production input feature distributions shift relative to training baseline ($P_{test}(X) \\ne P_{train}(X)$), detected via statistical hypothesis testing such as the Kolmogorov-Smirnov test or Population Stability Index (PSI).",
      "Calculate final values: A retail demand forecasting model deployed in Cairo exhibits a Population Stability Index $\\text{PSI} = \\sum (p_i - q_i) \\ln\\left(\\frac{p_i}{q_i}\\right) = 0.285$. Since $\\text{PSI} > 0.25$ indicates critical distribution shift, the automated MLOps monitoring pipeline triggers automatic model retraining on recent data.",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: يحدث انحراف البيانات (Data Drift) عندما تتغير توزيعات مدخلات الإنتاج عن بيانات التدريب الأساسية، ويُكتشف باختبارات إحصائية مثل اختبار كولموجوروف-سميرنوف أو مؤشر استقرار المجتمع (PSI).",
      "حساب الناتج النهائي: أظهر نموذج للتنبؤ بالطلب التجاري في القاهرة مؤشر استقرار مجتمع $\\text{PSI} = 0.285$. وحيث أن $\\text{PSI} > 0.25$ تدل على انحراف حرج في التوزيع، تطلق خطوط MLOps تلقائياً إعادة تدريب النموذج على البيانات الحديثة.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: Data drift occurs when production input feature distributions shift relative to training baseline ($P_{test}(X) \\ne P_{train}(X)$), detected via statistical hypothesis testing such as the Kolmogorov-Smirnov test or Population Stability Index (PSI).",
    "hintAr": "طبق القانون الأساسي: يحدث انحراف البيانات (Data Drift) عندما تتغير توزيعات مدخلات الإنتاج عن بيانات التدريب الأساسية، ويُكتشف باختبارات إحصائية مثل اختبار كولموجوروف-سميرنوف أو مؤشر استقرار المجتمع (PSI).",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "th_ai_data_science_ch4_ex_7",
    "titleEn": "Exercise Problem 7: Feature Engineering, Imputation & Automated Preprocessing Pipelines",
    "titleAr": "تمرين 7: هندسة الخصائص، معالجة القيم المفقودة وخطوط الإعداد المسبق المؤتمتة",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 7] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Feature Engineering, Imputation & Automated Preprocessing Pipelines. Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 7] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن هندسة الخصائص، معالجة القيم المفقودة وخطوط الإعداد المسبق المؤتمتة. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: To prevent data leakage during cross-validation, preprocessing transformers (e.g., StandardScaler: $z = \\frac{x - \\mu}{\\sigma}$) must fit parameters strictly on training folds and only transform validation/test folds.\n- Calculation & Results: In a real-time banking fraud pipeline handling 100,000 transactions/sec, fitting a robust Median Imputer and RobustScaler on 5 million historical records compresses latency to $<2\\text{ ms}$ while reducing model out-of-fold generalization error from $8.4\\%$ to $2.1\\%$.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: لمنع تسرب البيانات (Data Leakage) أثناء التحقق المتقاطع، يجب تدريب معاملات التحويل (مثل المتوسط والانحراف المعياري) على حزم التدريب حصراً وتطبيقها على حزم الاختبار.\n- خطوات الحساب والنتيجة: في نظام كشف الاحتيال البنكي بمعدل 100,000 معاملة/ثانية، يؤدي تطبيق محولات التقييس المتينة المستخلصة من بيانات التدريب إلى خفض زمن الاستجابة لأقل من 2 مللي ثانية وخفض خطأ التعميم إلى $2.1\\%$.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: To prevent data leakage during cross-validation, preprocessing transformers (e.g., StandardScaler: $z = \\frac{x - \\mu}{\\sigma}$) must fit parameters strictly on training folds and only transform validation/test folds.",
      "Calculate final values: In a real-time banking fraud pipeline handling 100,000 transactions/sec, fitting a robust Median Imputer and RobustScaler on 5 million historical records compresses latency to $<2\\text{ ms}$ while reducing model out-of-fold generalization error from $8.4\\%$ to $2.1\\%$.",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: لمنع تسرب البيانات (Data Leakage) أثناء التحقق المتقاطع، يجب تدريب معاملات التحويل (مثل المتوسط والانحراف المعياري) على حزم التدريب حصراً وتطبيقها على حزم الاختبار.",
      "حساب الناتج النهائي: في نظام كشف الاحتيال البنكي بمعدل 100,000 معاملة/ثانية، يؤدي تطبيق محولات التقييس المتينة المستخلصة من بيانات التدريب إلى خفض زمن الاستجابة لأقل من 2 مللي ثانية وخفض خطأ التعميم إلى $2.1\\%$.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: To prevent data leakage during cross-validation, preprocessing transformers (e.g., StandardScaler: $z = \\frac{x - \\mu}{\\sigma}$) must fit parameters strictly on training folds and only transform validation/test folds.",
    "hintAr": "طبق القانون الأساسي: لمنع تسرب البيانات (Data Leakage) أثناء التحقق المتقاطع، يجب تدريب معاملات التحويل (مثل المتوسط والانحراف المعياري) على حزم التدريب حصراً وتطبيقها على حزم الاختبار.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "th_ai_data_science_ch4_ex_8",
    "titleEn": "Exercise Problem 8: Distributed Big Data Analytics with Apache Spark & Resilient Distributed Datasets",
    "titleAr": "تمرين 8: تحليلات البيانات الضخمة الموزعة بـ Apache Spark وهياكل RDD المرنة",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 8] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Distributed Big Data Analytics with Apache Spark & Resilient Distributed Datasets. Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 8] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن تحليلات البيانات الضخمة الموزعة بـ Apache Spark وهياكل RDD المرنة. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: Spark operations are categorized into Transformations (lazy operations like `map`, `filter` that build a Directed Acyclic Graph) and Actions (e.g., `count`, `collect`, `save`) that trigger cluster execution.\n- Calculation & Results: Processing a 500GB telecom CDR dataset across an 8-node cluster, lazy evaluation optimizes the physical execution plan by pushing down filters and pruning columns, reducing shuffled data volume across the network from $500\\text{ GB}$ to $18.5\\text{ GB}$ ($96.3\\%$ reduction).",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تُصنف عمليات Spark إلى تحويلات مؤجلة (Transformations مثل `map` و `filter` تبني مخطط DAG) وإجراءات تنفيذية (Actions مثل `count` و `collect`) تطلق التنفيذ الفعلي في العنقود.\n- خطوات الحساب والنتيجة: عند معالجة 500 جيجابايت من بيانات الاتصالات عبر عنقود من 8 عقد، تؤدي المعالجة المؤجلة ودفع المرشحات لتقليص حجم البيانات المنقولة عبر الشبكة من $500\\text{ GB}$ إلى $18.5\\text{ GB}$ بتخفيض $96.3\\%$.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: Spark operations are categorized into Transformations (lazy operations like `map`, `filter` that build a Directed Acyclic Graph) and Actions (e.g., `count`, `collect`, `save`) that trigger cluster execution.",
      "Calculate final values: Processing a 500GB telecom CDR dataset across an 8-node cluster, lazy evaluation optimizes the physical execution plan by pushing down filters and pruning columns, reducing shuffled data volume across the network from $500\\text{ GB}$ to $18.5\\text{ GB}$ ($96.3\\%$ reduction).",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: تُصنف عمليات Spark إلى تحويلات مؤجلة (Transformations مثل `map` و `filter` تبني مخطط DAG) وإجراءات تنفيذية (Actions مثل `count` و `collect`) تطلق التنفيذ الفعلي في العنقود.",
      "حساب الناتج النهائي: عند معالجة 500 جيجابايت من بيانات الاتصالات عبر عنقود من 8 عقد، تؤدي المعالجة المؤجلة ودفع المرشحات لتقليص حجم البيانات المنقولة عبر الشبكة من $500\\text{ GB}$ إلى $18.5\\text{ GB}$ بتخفيض $96.3\\%$.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: Spark operations are categorized into Transformations (lazy operations like `map`, `filter` that build a Directed Acyclic Graph) and Actions (e.g., `count`, `collect`, `save`) that trigger cluster execution.",
    "hintAr": "طبق القانون الأساسي: تُصنف عمليات Spark إلى تحويلات مؤجلة (Transformations مثل `map` و `filter` تبني مخطط DAG) وإجراءات تنفيذية (Actions مثل `count` و `collect`) تطلق التنفيذ الفعلي في العنقود.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "th_ai_data_science_ch4_ex_9",
    "titleEn": "Exercise Problem 9: Continuous MLOps Lifecycle: Experiment Tracking, Model Registry & Data Drift",
    "titleAr": "تمرين 9: دورة حياة MLOps المستمرة: تتبع التجارب، سجل النماذج واكتشاف انحراف البيانات",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 9] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Continuous MLOps Lifecycle: Experiment Tracking, Model Registry & Data Drift. Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 9] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن دورة حياة MLOps المستمرة: تتبع التجارب، سجل النماذج واكتشاف انحراف البيانات. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: Data drift occurs when production input feature distributions shift relative to training baseline ($P_{test}(X) \\ne P_{train}(X)$), detected via statistical hypothesis testing such as the Kolmogorov-Smirnov test or Population Stability Index (PSI).\n- Calculation & Results: A retail demand forecasting model deployed in Cairo exhibits a Population Stability Index $\\text{PSI} = \\sum (p_i - q_i) \\ln\\left(\\frac{p_i}{q_i}\\right) = 0.285$. Since $\\text{PSI} > 0.25$ indicates critical distribution shift, the automated MLOps monitoring pipeline triggers automatic model retraining on recent data.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: يحدث انحراف البيانات (Data Drift) عندما تتغير توزيعات مدخلات الإنتاج عن بيانات التدريب الأساسية، ويُكتشف باختبارات إحصائية مثل اختبار كولموجوروف-سميرنوف أو مؤشر استقرار المجتمع (PSI).\n- خطوات الحساب والنتيجة: أظهر نموذج للتنبؤ بالطلب التجاري في القاهرة مؤشر استقرار مجتمع $\\text{PSI} = 0.285$. وحيث أن $\\text{PSI} > 0.25$ تدل على انحراف حرج في التوزيع، تطلق خطوط MLOps تلقائياً إعادة تدريب النموذج على البيانات الحديثة.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: Data drift occurs when production input feature distributions shift relative to training baseline ($P_{test}(X) \\ne P_{train}(X)$), detected via statistical hypothesis testing such as the Kolmogorov-Smirnov test or Population Stability Index (PSI).",
      "Calculate final values: A retail demand forecasting model deployed in Cairo exhibits a Population Stability Index $\\text{PSI} = \\sum (p_i - q_i) \\ln\\left(\\frac{p_i}{q_i}\\right) = 0.285$. Since $\\text{PSI} > 0.25$ indicates critical distribution shift, the automated MLOps monitoring pipeline triggers automatic model retraining on recent data.",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: يحدث انحراف البيانات (Data Drift) عندما تتغير توزيعات مدخلات الإنتاج عن بيانات التدريب الأساسية، ويُكتشف باختبارات إحصائية مثل اختبار كولموجوروف-سميرنوف أو مؤشر استقرار المجتمع (PSI).",
      "حساب الناتج النهائي: أظهر نموذج للتنبؤ بالطلب التجاري في القاهرة مؤشر استقرار مجتمع $\\text{PSI} = 0.285$. وحيث أن $\\text{PSI} > 0.25$ تدل على انحراف حرج في التوزيع، تطلق خطوط MLOps تلقائياً إعادة تدريب النموذج على البيانات الحديثة.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: Data drift occurs when production input feature distributions shift relative to training baseline ($P_{test}(X) \\ne P_{train}(X)$), detected via statistical hypothesis testing such as the Kolmogorov-Smirnov test or Population Stability Index (PSI).",
    "hintAr": "طبق القانون الأساسي: يحدث انحراف البيانات (Data Drift) عندما تتغير توزيعات مدخلات الإنتاج عن بيانات التدريب الأساسية، ويُكتشف باختبارات إحصائية مثل اختبار كولموجوروف-سميرنوف أو مؤشر استقرار المجتمع (PSI).",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "th_ai_data_science_ch4_ex_10",
    "titleEn": "Exercise Problem 10: Feature Engineering, Imputation & Automated Preprocessing Pipelines",
    "titleAr": "تمرين 10: هندسة الخصائص، معالجة القيم المفقودة وخطوط الإعداد المسبق المؤتمتة",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 10] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Feature Engineering, Imputation & Automated Preprocessing Pipelines. Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 10] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن هندسة الخصائص، معالجة القيم المفقودة وخطوط الإعداد المسبق المؤتمتة. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: To prevent data leakage during cross-validation, preprocessing transformers (e.g., StandardScaler: $z = \\frac{x - \\mu}{\\sigma}$) must fit parameters strictly on training folds and only transform validation/test folds.\n- Calculation & Results: In a real-time banking fraud pipeline handling 100,000 transactions/sec, fitting a robust Median Imputer and RobustScaler on 5 million historical records compresses latency to $<2\\text{ ms}$ while reducing model out-of-fold generalization error from $8.4\\%$ to $2.1\\%$.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: لمنع تسرب البيانات (Data Leakage) أثناء التحقق المتقاطع، يجب تدريب معاملات التحويل (مثل المتوسط والانحراف المعياري) على حزم التدريب حصراً وتطبيقها على حزم الاختبار.\n- خطوات الحساب والنتيجة: في نظام كشف الاحتيال البنكي بمعدل 100,000 معاملة/ثانية، يؤدي تطبيق محولات التقييس المتينة المستخلصة من بيانات التدريب إلى خفض زمن الاستجابة لأقل من 2 مللي ثانية وخفض خطأ التعميم إلى $2.1\\%$.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: To prevent data leakage during cross-validation, preprocessing transformers (e.g., StandardScaler: $z = \\frac{x - \\mu}{\\sigma}$) must fit parameters strictly on training folds and only transform validation/test folds.",
      "Calculate final values: In a real-time banking fraud pipeline handling 100,000 transactions/sec, fitting a robust Median Imputer and RobustScaler on 5 million historical records compresses latency to $<2\\text{ ms}$ while reducing model out-of-fold generalization error from $8.4\\%$ to $2.1\\%$.",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: لمنع تسرب البيانات (Data Leakage) أثناء التحقق المتقاطع، يجب تدريب معاملات التحويل (مثل المتوسط والانحراف المعياري) على حزم التدريب حصراً وتطبيقها على حزم الاختبار.",
      "حساب الناتج النهائي: في نظام كشف الاحتيال البنكي بمعدل 100,000 معاملة/ثانية، يؤدي تطبيق محولات التقييس المتينة المستخلصة من بيانات التدريب إلى خفض زمن الاستجابة لأقل من 2 مللي ثانية وخفض خطأ التعميم إلى $2.1\\%$.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: To prevent data leakage during cross-validation, preprocessing transformers (e.g., StandardScaler: $z = \\frac{x - \\mu}{\\sigma}$) must fit parameters strictly on training folds and only transform validation/test folds.",
    "hintAr": "طبق القانون الأساسي: لمنع تسرب البيانات (Data Leakage) أثناء التحقق المتقاطع، يجب تدريب معاملات التحويل (مثل المتوسط والانحراف المعياري) على حزم التدريب حصراً وتطبيقها على حزم الاختبار.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "th_ai_data_science_ch4_ex_11",
    "titleEn": "Exercise Problem 11: Distributed Big Data Analytics with Apache Spark & Resilient Distributed Datasets",
    "titleAr": "تمرين 11: تحليلات البيانات الضخمة الموزعة بـ Apache Spark وهياكل RDD المرنة",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 11] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Distributed Big Data Analytics with Apache Spark & Resilient Distributed Datasets. Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 11] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن تحليلات البيانات الضخمة الموزعة بـ Apache Spark وهياكل RDD المرنة. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: Spark operations are categorized into Transformations (lazy operations like `map`, `filter` that build a Directed Acyclic Graph) and Actions (e.g., `count`, `collect`, `save`) that trigger cluster execution.\n- Calculation & Results: Processing a 500GB telecom CDR dataset across an 8-node cluster, lazy evaluation optimizes the physical execution plan by pushing down filters and pruning columns, reducing shuffled data volume across the network from $500\\text{ GB}$ to $18.5\\text{ GB}$ ($96.3\\%$ reduction).",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تُصنف عمليات Spark إلى تحويلات مؤجلة (Transformations مثل `map` و `filter` تبني مخطط DAG) وإجراءات تنفيذية (Actions مثل `count` و `collect`) تطلق التنفيذ الفعلي في العنقود.\n- خطوات الحساب والنتيجة: عند معالجة 500 جيجابايت من بيانات الاتصالات عبر عنقود من 8 عقد، تؤدي المعالجة المؤجلة ودفع المرشحات لتقليص حجم البيانات المنقولة عبر الشبكة من $500\\text{ GB}$ إلى $18.5\\text{ GB}$ بتخفيض $96.3\\%$.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: Spark operations are categorized into Transformations (lazy operations like `map`, `filter` that build a Directed Acyclic Graph) and Actions (e.g., `count`, `collect`, `save`) that trigger cluster execution.",
      "Calculate final values: Processing a 500GB telecom CDR dataset across an 8-node cluster, lazy evaluation optimizes the physical execution plan by pushing down filters and pruning columns, reducing shuffled data volume across the network from $500\\text{ GB}$ to $18.5\\text{ GB}$ ($96.3\\%$ reduction).",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: تُصنف عمليات Spark إلى تحويلات مؤجلة (Transformations مثل `map` و `filter` تبني مخطط DAG) وإجراءات تنفيذية (Actions مثل `count` و `collect`) تطلق التنفيذ الفعلي في العنقود.",
      "حساب الناتج النهائي: عند معالجة 500 جيجابايت من بيانات الاتصالات عبر عنقود من 8 عقد، تؤدي المعالجة المؤجلة ودفع المرشحات لتقليص حجم البيانات المنقولة عبر الشبكة من $500\\text{ GB}$ إلى $18.5\\text{ GB}$ بتخفيض $96.3\\%$.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: Spark operations are categorized into Transformations (lazy operations like `map`, `filter` that build a Directed Acyclic Graph) and Actions (e.g., `count`, `collect`, `save`) that trigger cluster execution.",
    "hintAr": "طبق القانون الأساسي: تُصنف عمليات Spark إلى تحويلات مؤجلة (Transformations مثل `map` و `filter` تبني مخطط DAG) وإجراءات تنفيذية (Actions مثل `count` و `collect`) تطلق التنفيذ الفعلي في العنقود.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "th_ai_data_science_ch4_ex_12",
    "titleEn": "Exercise Problem 12: Continuous MLOps Lifecycle: Experiment Tracking, Model Registry & Data Drift",
    "titleAr": "تمرين 12: دورة حياة MLOps المستمرة: تتبع التجارب، سجل النماذج واكتشاف انحراف البيانات",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 12] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Continuous MLOps Lifecycle: Experiment Tracking, Model Registry & Data Drift. Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 12] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن دورة حياة MLOps المستمرة: تتبع التجارب، سجل النماذج واكتشاف انحراف البيانات. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: Data drift occurs when production input feature distributions shift relative to training baseline ($P_{test}(X) \\ne P_{train}(X)$), detected via statistical hypothesis testing such as the Kolmogorov-Smirnov test or Population Stability Index (PSI).\n- Calculation & Results: A retail demand forecasting model deployed in Cairo exhibits a Population Stability Index $\\text{PSI} = \\sum (p_i - q_i) \\ln\\left(\\frac{p_i}{q_i}\\right) = 0.285$. Since $\\text{PSI} > 0.25$ indicates critical distribution shift, the automated MLOps monitoring pipeline triggers automatic model retraining on recent data.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: يحدث انحراف البيانات (Data Drift) عندما تتغير توزيعات مدخلات الإنتاج عن بيانات التدريب الأساسية، ويُكتشف باختبارات إحصائية مثل اختبار كولموجوروف-سميرنوف أو مؤشر استقرار المجتمع (PSI).\n- خطوات الحساب والنتيجة: أظهر نموذج للتنبؤ بالطلب التجاري في القاهرة مؤشر استقرار مجتمع $\\text{PSI} = 0.285$. وحيث أن $\\text{PSI} > 0.25$ تدل على انحراف حرج في التوزيع، تطلق خطوط MLOps تلقائياً إعادة تدريب النموذج على البيانات الحديثة.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: Data drift occurs when production input feature distributions shift relative to training baseline ($P_{test}(X) \\ne P_{train}(X)$), detected via statistical hypothesis testing such as the Kolmogorov-Smirnov test or Population Stability Index (PSI).",
      "Calculate final values: A retail demand forecasting model deployed in Cairo exhibits a Population Stability Index $\\text{PSI} = \\sum (p_i - q_i) \\ln\\left(\\frac{p_i}{q_i}\\right) = 0.285$. Since $\\text{PSI} > 0.25$ indicates critical distribution shift, the automated MLOps monitoring pipeline triggers automatic model retraining on recent data.",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: يحدث انحراف البيانات (Data Drift) عندما تتغير توزيعات مدخلات الإنتاج عن بيانات التدريب الأساسية، ويُكتشف باختبارات إحصائية مثل اختبار كولموجوروف-سميرنوف أو مؤشر استقرار المجتمع (PSI).",
      "حساب الناتج النهائي: أظهر نموذج للتنبؤ بالطلب التجاري في القاهرة مؤشر استقرار مجتمع $\\text{PSI} = 0.285$. وحيث أن $\\text{PSI} > 0.25$ تدل على انحراف حرج في التوزيع، تطلق خطوط MLOps تلقائياً إعادة تدريب النموذج على البيانات الحديثة.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: Data drift occurs when production input feature distributions shift relative to training baseline ($P_{test}(X) \\ne P_{train}(X)$), detected via statistical hypothesis testing such as the Kolmogorov-Smirnov test or Population Stability Index (PSI).",
    "hintAr": "طبق القانون الأساسي: يحدث انحراف البيانات (Data Drift) عندما تتغير توزيعات مدخلات الإنتاج عن بيانات التدريب الأساسية، ويُكتشف باختبارات إحصائية مثل اختبار كولموجوروف-سميرنوف أو مؤشر استقرار المجتمع (PSI).",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "th_ai_data_science_ch4_ex_13",
    "titleEn": "Exercise Problem 13: Feature Engineering, Imputation & Automated Preprocessing Pipelines",
    "titleAr": "تمرين 13: هندسة الخصائص، معالجة القيم المفقودة وخطوط الإعداد المسبق المؤتمتة",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 13] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Feature Engineering, Imputation & Automated Preprocessing Pipelines. Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 13] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن هندسة الخصائص، معالجة القيم المفقودة وخطوط الإعداد المسبق المؤتمتة. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: To prevent data leakage during cross-validation, preprocessing transformers (e.g., StandardScaler: $z = \\frac{x - \\mu}{\\sigma}$) must fit parameters strictly on training folds and only transform validation/test folds.\n- Calculation & Results: In a real-time banking fraud pipeline handling 100,000 transactions/sec, fitting a robust Median Imputer and RobustScaler on 5 million historical records compresses latency to $<2\\text{ ms}$ while reducing model out-of-fold generalization error from $8.4\\%$ to $2.1\\%$.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: لمنع تسرب البيانات (Data Leakage) أثناء التحقق المتقاطع، يجب تدريب معاملات التحويل (مثل المتوسط والانحراف المعياري) على حزم التدريب حصراً وتطبيقها على حزم الاختبار.\n- خطوات الحساب والنتيجة: في نظام كشف الاحتيال البنكي بمعدل 100,000 معاملة/ثانية، يؤدي تطبيق محولات التقييس المتينة المستخلصة من بيانات التدريب إلى خفض زمن الاستجابة لأقل من 2 مللي ثانية وخفض خطأ التعميم إلى $2.1\\%$.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: To prevent data leakage during cross-validation, preprocessing transformers (e.g., StandardScaler: $z = \\frac{x - \\mu}{\\sigma}$) must fit parameters strictly on training folds and only transform validation/test folds.",
      "Calculate final values: In a real-time banking fraud pipeline handling 100,000 transactions/sec, fitting a robust Median Imputer and RobustScaler on 5 million historical records compresses latency to $<2\\text{ ms}$ while reducing model out-of-fold generalization error from $8.4\\%$ to $2.1\\%$.",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: لمنع تسرب البيانات (Data Leakage) أثناء التحقق المتقاطع، يجب تدريب معاملات التحويل (مثل المتوسط والانحراف المعياري) على حزم التدريب حصراً وتطبيقها على حزم الاختبار.",
      "حساب الناتج النهائي: في نظام كشف الاحتيال البنكي بمعدل 100,000 معاملة/ثانية، يؤدي تطبيق محولات التقييس المتينة المستخلصة من بيانات التدريب إلى خفض زمن الاستجابة لأقل من 2 مللي ثانية وخفض خطأ التعميم إلى $2.1\\%$.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: To prevent data leakage during cross-validation, preprocessing transformers (e.g., StandardScaler: $z = \\frac{x - \\mu}{\\sigma}$) must fit parameters strictly on training folds and only transform validation/test folds.",
    "hintAr": "طبق القانون الأساسي: لمنع تسرب البيانات (Data Leakage) أثناء التحقق المتقاطع، يجب تدريب معاملات التحويل (مثل المتوسط والانحراف المعياري) على حزم التدريب حصراً وتطبيقها على حزم الاختبار.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "th_ai_data_science_ch4_ex_14",
    "titleEn": "Exercise Problem 14: Distributed Big Data Analytics with Apache Spark & Resilient Distributed Datasets",
    "titleAr": "تمرين 14: تحليلات البيانات الضخمة الموزعة بـ Apache Spark وهياكل RDD المرنة",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 14] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Distributed Big Data Analytics with Apache Spark & Resilient Distributed Datasets. Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 14] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن تحليلات البيانات الضخمة الموزعة بـ Apache Spark وهياكل RDD المرنة. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: Spark operations are categorized into Transformations (lazy operations like `map`, `filter` that build a Directed Acyclic Graph) and Actions (e.g., `count`, `collect`, `save`) that trigger cluster execution.\n- Calculation & Results: Processing a 500GB telecom CDR dataset across an 8-node cluster, lazy evaluation optimizes the physical execution plan by pushing down filters and pruning columns, reducing shuffled data volume across the network from $500\\text{ GB}$ to $18.5\\text{ GB}$ ($96.3\\%$ reduction).",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تُصنف عمليات Spark إلى تحويلات مؤجلة (Transformations مثل `map` و `filter` تبني مخطط DAG) وإجراءات تنفيذية (Actions مثل `count` و `collect`) تطلق التنفيذ الفعلي في العنقود.\n- خطوات الحساب والنتيجة: عند معالجة 500 جيجابايت من بيانات الاتصالات عبر عنقود من 8 عقد، تؤدي المعالجة المؤجلة ودفع المرشحات لتقليص حجم البيانات المنقولة عبر الشبكة من $500\\text{ GB}$ إلى $18.5\\text{ GB}$ بتخفيض $96.3\\%$.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: Spark operations are categorized into Transformations (lazy operations like `map`, `filter` that build a Directed Acyclic Graph) and Actions (e.g., `count`, `collect`, `save`) that trigger cluster execution.",
      "Calculate final values: Processing a 500GB telecom CDR dataset across an 8-node cluster, lazy evaluation optimizes the physical execution plan by pushing down filters and pruning columns, reducing shuffled data volume across the network from $500\\text{ GB}$ to $18.5\\text{ GB}$ ($96.3\\%$ reduction).",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: تُصنف عمليات Spark إلى تحويلات مؤجلة (Transformations مثل `map` و `filter` تبني مخطط DAG) وإجراءات تنفيذية (Actions مثل `count` و `collect`) تطلق التنفيذ الفعلي في العنقود.",
      "حساب الناتج النهائي: عند معالجة 500 جيجابايت من بيانات الاتصالات عبر عنقود من 8 عقد، تؤدي المعالجة المؤجلة ودفع المرشحات لتقليص حجم البيانات المنقولة عبر الشبكة من $500\\text{ GB}$ إلى $18.5\\text{ GB}$ بتخفيض $96.3\\%$.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: Spark operations are categorized into Transformations (lazy operations like `map`, `filter` that build a Directed Acyclic Graph) and Actions (e.g., `count`, `collect`, `save`) that trigger cluster execution.",
    "hintAr": "طبق القانون الأساسي: تُصنف عمليات Spark إلى تحويلات مؤجلة (Transformations مثل `map` و `filter` تبني مخطط DAG) وإجراءات تنفيذية (Actions مثل `count` و `collect`) تطلق التنفيذ الفعلي في العنقود.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "th_ai_data_science_ch4_ex_15",
    "titleEn": "Exercise Problem 15: Continuous MLOps Lifecycle: Experiment Tracking, Model Registry & Data Drift",
    "titleAr": "تمرين 15: دورة حياة MLOps المستمرة: تتبع التجارب، سجل النماذج واكتشاف انحراف البيانات",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 15] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Continuous MLOps Lifecycle: Experiment Tracking, Model Registry & Data Drift. Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 15] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن دورة حياة MLOps المستمرة: تتبع التجارب، سجل النماذج واكتشاف انحراف البيانات. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: Data drift occurs when production input feature distributions shift relative to training baseline ($P_{test}(X) \\ne P_{train}(X)$), detected via statistical hypothesis testing such as the Kolmogorov-Smirnov test or Population Stability Index (PSI).\n- Calculation & Results: A retail demand forecasting model deployed in Cairo exhibits a Population Stability Index $\\text{PSI} = \\sum (p_i - q_i) \\ln\\left(\\frac{p_i}{q_i}\\right) = 0.285$. Since $\\text{PSI} > 0.25$ indicates critical distribution shift, the automated MLOps monitoring pipeline triggers automatic model retraining on recent data.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: يحدث انحراف البيانات (Data Drift) عندما تتغير توزيعات مدخلات الإنتاج عن بيانات التدريب الأساسية، ويُكتشف باختبارات إحصائية مثل اختبار كولموجوروف-سميرنوف أو مؤشر استقرار المجتمع (PSI).\n- خطوات الحساب والنتيجة: أظهر نموذج للتنبؤ بالطلب التجاري في القاهرة مؤشر استقرار مجتمع $\\text{PSI} = 0.285$. وحيث أن $\\text{PSI} > 0.25$ تدل على انحراف حرج في التوزيع، تطلق خطوط MLOps تلقائياً إعادة تدريب النموذج على البيانات الحديثة.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: Data drift occurs when production input feature distributions shift relative to training baseline ($P_{test}(X) \\ne P_{train}(X)$), detected via statistical hypothesis testing such as the Kolmogorov-Smirnov test or Population Stability Index (PSI).",
      "Calculate final values: A retail demand forecasting model deployed in Cairo exhibits a Population Stability Index $\\text{PSI} = \\sum (p_i - q_i) \\ln\\left(\\frac{p_i}{q_i}\\right) = 0.285$. Since $\\text{PSI} > 0.25$ indicates critical distribution shift, the automated MLOps monitoring pipeline triggers automatic model retraining on recent data.",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: يحدث انحراف البيانات (Data Drift) عندما تتغير توزيعات مدخلات الإنتاج عن بيانات التدريب الأساسية، ويُكتشف باختبارات إحصائية مثل اختبار كولموجوروف-سميرنوف أو مؤشر استقرار المجتمع (PSI).",
      "حساب الناتج النهائي: أظهر نموذج للتنبؤ بالطلب التجاري في القاهرة مؤشر استقرار مجتمع $\\text{PSI} = 0.285$. وحيث أن $\\text{PSI} > 0.25$ تدل على انحراف حرج في التوزيع، تطلق خطوط MLOps تلقائياً إعادة تدريب النموذج على البيانات الحديثة.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: Data drift occurs when production input feature distributions shift relative to training baseline ($P_{test}(X) \\ne P_{train}(X)$), detected via statistical hypothesis testing such as the Kolmogorov-Smirnov test or Population Stability Index (PSI).",
    "hintAr": "طبق القانون الأساسي: يحدث انحراف البيانات (Data Drift) عندما تتغير توزيعات مدخلات الإنتاج عن بيانات التدريب الأساسية، ويُكتشف باختبارات إحصائية مثل اختبار كولموجوروف-سميرنوف أو مؤشر استقرار المجتمع (PSI).",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  }
];
