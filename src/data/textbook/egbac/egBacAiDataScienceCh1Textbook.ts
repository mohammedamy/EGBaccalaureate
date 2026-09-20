import type { SolvedProblem } from '../../../types/curriculum';

export const egbac_ai_data_science_ch1SolvedExamples: SolvedProblem[] = [
  {
    "id": "egbac_ai_data_science_ch1_solved_1",
    "titleEn": "Solved Example 1: Bayesian Networks, Directed Acyclic Graphs & D-Separation",
    "titleAr": "مثال محلول 1: شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation)",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 1] Design, formulate, and evaluate an AI/Data Science model architecture applying Bayesian Networks, Directed Acyclic Graphs & D-Separation. Specify the mathematical formulations, optimization equations, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 1] صمم واشتق وقيم معمارية نموذج ذكاء اصطناعي أو علم بيانات بتطبيق شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation). وضح الصياغات الرياضية ومعادلات التحسين وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify problem specifications and statistical constraints.\nStep 2: Formulate governing analytical equation: Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).\nStep 3: Execute numerical substitution: In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).\nStep 4: Verify convergence stability, generalization bounds, and algorithmic performance compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات المسألة والقيود الإحصائية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: يكون المتغيران $X$ و $Y$ مفصولين اتجاهياً (d-separated) بمجموعة المشاهدات $Z$ إذا أغلقت كل المسارات بينهما؛ وفي البنية التصادمية ($A \\to C \\leftarrow B$)، يكون $A$ و $B$ مستقلين مبدئياً لكنهما يصبحان مرتبطين شرطياً عند معرفة $C$.\nالخطوة ٣: التعويض العددي وحساب النتائج: في شبكة تشخيص طبي يسبب فيها المرض A والمرض B العَرَض C بصورة مستقلة، يؤدي ثبوت العَرَض C إلى نشوء ارتباط شرطي يجعل تأكيد المرض A يخفض احتمالية المرض B اللاحقة (ظاهرة التفسير البديل Explaining Away).\nالخطوة ٤: التحقق من استقرار التقارب، حدود التعميم، وتوافق أداء النموذج.",
    "stepByStepSolutionEn": [
      "Identify system variables, loss functions, and optimization constraints.",
      "Apply formulation: Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).",
      "Perform calculation: In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).",
      "Confirm operational validity and alignment with international AI standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد متغيرات النظام، دوال الخسارة، وقيود التحسين.",
      "تطبيق المعادلة الخوارزمية: يكون المتغيران $X$ و $Y$ مفصولين اتجاهياً (d-separated) بمجموعة المشاهدات $Z$ إذا أغلقت كل المسارات بينهما؛ وفي البنية التصادمية ($A \\to C \\leftarrow B$)، يكون $A$ و $B$ مستقلين مبدئياً لكنهما يصبحان مرتبطين شرطياً عند معرفة $C$.",
      "الحساب العددي الدقيق: في شبكة تشخيص طبي يسبب فيها المرض A والمرض B العَرَض C بصورة مستقلة، يؤدي ثبوت العَرَض C إلى نشوء ارتباط شرطي يجعل تأكيد المرض A يخفض احتمالية المرض B اللاحقة (ظاهرة التفسير البديل Explaining Away).",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للذكاء الاصطناعي."
    ],
    "hintEn": "Recall the governing analytical relations for Bayesian Networks, Directed Acyclic Graphs & D-Separation.",
    "hintAr": "تذكر القوانين والعلاقات التحليلية الحاكمة لـ شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation).",
    "teacherTipEn": "Pay careful attention to vector dimensions and normalization constraints when implementing Bayesian Networks, Directed Acyclic Graphs & D-Separation.",
    "teacherTipAr": "انتبه جيداً لأبعاد المتجهات وشروط المعايرة والتقييس عند تطبيق شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation)."
  },
  {
    "id": "egbac_ai_data_science_ch1_solved_2",
    "titleEn": "Solved Example 2: Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models",
    "titleAr": "مثال محلول 2: خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs)",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 2] Design, formulate, and evaluate an AI/Data Science model architecture applying Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models. Specify the mathematical formulations, optimization equations, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 2] صمم واشتق وقيم معمارية نموذج ذكاء اصطناعي أو علم بيانات بتطبيق خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs). وضح الصياغات الرياضية ومعادلات التحسين وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify problem specifications and statistical constraints.\nStep 2: Formulate governing analytical equation: The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).\nStep 3: Execute numerical substitution: For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2).\nStep 4: Verify convergence stability, generalization bounds, and algorithmic performance compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات المسألة والقيود الإحصائية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: تتناوب خوارزمية EM بين خطوة التوقع E (حساب المسؤوليات اللاحقة $\\gamma_{ik}$) وخطوة التعظيم M (تحديث المعاملات $\\mu_k$ و $\\Sigma_k$ و $\\pi_k$ بالاعتماد على المسؤوليات المحسوبة).\nالخطوة ٣: التعويض العددي وحساب النتائج: لنموذج مزيج غاوسي ثنائي لتجميع قراءات أقمار صناعية، لعينة $x = 4.2$ باحتماليات مكونات $0.035$ و $0.231$ بأوزان متساوية $\\pi_1 = \\pi_2 = 0.5$، تبلغ المسؤولية اللاحقة للمكون الثاني $\\gamma_2 = \\frac{0.1155}{0.133} \\approx 0.868$ بثقة $86.8\\%$.\nالخطوة ٤: التحقق من استقرار التقارب، حدود التعميم، وتوافق أداء النموذج.",
    "stepByStepSolutionEn": [
      "Identify system variables, loss functions, and optimization constraints.",
      "Apply formulation: The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).",
      "Perform calculation: For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2).",
      "Confirm operational validity and alignment with international AI standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد متغيرات النظام، دوال الخسارة، وقيود التحسين.",
      "تطبيق المعادلة الخوارزمية: تتناوب خوارزمية EM بين خطوة التوقع E (حساب المسؤوليات اللاحقة $\\gamma_{ik}$) وخطوة التعظيم M (تحديث المعاملات $\\mu_k$ و $\\Sigma_k$ و $\\pi_k$ بالاعتماد على المسؤوليات المحسوبة).",
      "الحساب العددي الدقيق: لنموذج مزيج غاوسي ثنائي لتجميع قراءات أقمار صناعية، لعينة $x = 4.2$ باحتماليات مكونات $0.035$ و $0.231$ بأوزان متساوية $\\pi_1 = \\pi_2 = 0.5$، تبلغ المسؤولية اللاحقة للمكون الثاني $\\gamma_2 = \\frac{0.1155}{0.133} \\approx 0.868$ بثقة $86.8\\%$.",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للذكاء الاصطناعي."
    ],
    "hintEn": "Recall the governing analytical relations for Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models.",
    "hintAr": "تذكر القوانين والعلاقات التحليلية الحاكمة لـ خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs).",
    "teacherTipEn": "Pay careful attention to vector dimensions and normalization constraints when implementing Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models.",
    "teacherTipAr": "انتبه جيداً لأبعاد المتجهات وشروط المعايرة والتقييس عند تطبيق خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs)."
  },
  {
    "id": "egbac_ai_data_science_ch1_solved_3",
    "titleEn": "Solved Example 3: Variational Inference & Evidence Lower Bound (ELBO) Derivation",
    "titleAr": "مثال محلول 3: الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO)",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 3] Design, formulate, and evaluate an AI/Data Science model architecture applying Variational Inference & Evidence Lower Bound (ELBO) Derivation. Specify the mathematical formulations, optimization equations, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 3] صمم واشتق وقيم معمارية نموذج ذكاء اصطناعي أو علم بيانات بتطبيق الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO). وضح الصياغات الرياضية ومعادلات التحسين وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify problem specifications and statistical constraints.\nStep 2: Formulate governing analytical equation: The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.\nStep 3: Execute numerical substitution: Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior.\nStep 4: Verify convergence stability, generalization bounds, and algorithmic performance compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات المسألة والقيود الإحصائية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: يُشتق الحد الأدنى لدليل البيانات (ELBO) من متباينة ينسن: $\\ln p(x) \\ge \\mathbb{E}[\\ln p(x,z)] - \\mathbb{E}[\\ln q(z)] = \\text{ELBO}$، ويحقق المعادلة $\\ln p(x) = \\text{ELBO} + D_{KL}(q \\parallel p)$.\nالخطوة ٣: التعويض العددي وحساب النتائج: يؤدي تعظيم الحد الأدنى ELBO مباشرة إلى تصغير تباعد كولباك-ليبلر $D_{KL}$ لأن لوغاريتم دليل البيانات الهامشي $\\ln p(x)$ ثابت بالنسبة للمعاملات المتغيرة $\\phi$، مما يضمن أفضل تقريب للتوزيع الحقيقي.\nالخطوة ٤: التحقق من استقرار التقارب، حدود التعميم، وتوافق أداء النموذج.",
    "stepByStepSolutionEn": [
      "Identify system variables, loss functions, and optimization constraints.",
      "Apply formulation: The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.",
      "Perform calculation: Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior.",
      "Confirm operational validity and alignment with international AI standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد متغيرات النظام، دوال الخسارة، وقيود التحسين.",
      "تطبيق المعادلة الخوارزمية: يُشتق الحد الأدنى لدليل البيانات (ELBO) من متباينة ينسن: $\\ln p(x) \\ge \\mathbb{E}[\\ln p(x,z)] - \\mathbb{E}[\\ln q(z)] = \\text{ELBO}$، ويحقق المعادلة $\\ln p(x) = \\text{ELBO} + D_{KL}(q \\parallel p)$.",
      "الحساب العددي الدقيق: يؤدي تعظيم الحد الأدنى ELBO مباشرة إلى تصغير تباعد كولباك-ليبلر $D_{KL}$ لأن لوغاريتم دليل البيانات الهامشي $\\ln p(x)$ ثابت بالنسبة للمعاملات المتغيرة $\\phi$، مما يضمن أفضل تقريب للتوزيع الحقيقي.",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للذكاء الاصطناعي."
    ],
    "hintEn": "Recall the governing analytical relations for Variational Inference & Evidence Lower Bound (ELBO) Derivation.",
    "hintAr": "تذكر القوانين والعلاقات التحليلية الحاكمة لـ الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO).",
    "teacherTipEn": "Pay careful attention to vector dimensions and normalization constraints when implementing Variational Inference & Evidence Lower Bound (ELBO) Derivation.",
    "teacherTipAr": "انتبه جيداً لأبعاد المتجهات وشروط المعايرة والتقييس عند تطبيق الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO)."
  },
  {
    "id": "egbac_ai_data_science_ch1_solved_4",
    "titleEn": "Solved Example 4: Bayesian Networks, Directed Acyclic Graphs & D-Separation",
    "titleAr": "مثال محلول 4: شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation)",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 4] Design, formulate, and evaluate an AI/Data Science model architecture applying Bayesian Networks, Directed Acyclic Graphs & D-Separation. Specify the mathematical formulations, optimization equations, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 4] صمم واشتق وقيم معمارية نموذج ذكاء اصطناعي أو علم بيانات بتطبيق شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation). وضح الصياغات الرياضية ومعادلات التحسين وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify problem specifications and statistical constraints.\nStep 2: Formulate governing analytical equation: Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).\nStep 3: Execute numerical substitution: In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).\nStep 4: Verify convergence stability, generalization bounds, and algorithmic performance compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات المسألة والقيود الإحصائية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: يكون المتغيران $X$ و $Y$ مفصولين اتجاهياً (d-separated) بمجموعة المشاهدات $Z$ إذا أغلقت كل المسارات بينهما؛ وفي البنية التصادمية ($A \\to C \\leftarrow B$)، يكون $A$ و $B$ مستقلين مبدئياً لكنهما يصبحان مرتبطين شرطياً عند معرفة $C$.\nالخطوة ٣: التعويض العددي وحساب النتائج: في شبكة تشخيص طبي يسبب فيها المرض A والمرض B العَرَض C بصورة مستقلة، يؤدي ثبوت العَرَض C إلى نشوء ارتباط شرطي يجعل تأكيد المرض A يخفض احتمالية المرض B اللاحقة (ظاهرة التفسير البديل Explaining Away).\nالخطوة ٤: التحقق من استقرار التقارب، حدود التعميم، وتوافق أداء النموذج.",
    "stepByStepSolutionEn": [
      "Identify system variables, loss functions, and optimization constraints.",
      "Apply formulation: Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).",
      "Perform calculation: In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).",
      "Confirm operational validity and alignment with international AI standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد متغيرات النظام، دوال الخسارة، وقيود التحسين.",
      "تطبيق المعادلة الخوارزمية: يكون المتغيران $X$ و $Y$ مفصولين اتجاهياً (d-separated) بمجموعة المشاهدات $Z$ إذا أغلقت كل المسارات بينهما؛ وفي البنية التصادمية ($A \\to C \\leftarrow B$)، يكون $A$ و $B$ مستقلين مبدئياً لكنهما يصبحان مرتبطين شرطياً عند معرفة $C$.",
      "الحساب العددي الدقيق: في شبكة تشخيص طبي يسبب فيها المرض A والمرض B العَرَض C بصورة مستقلة، يؤدي ثبوت العَرَض C إلى نشوء ارتباط شرطي يجعل تأكيد المرض A يخفض احتمالية المرض B اللاحقة (ظاهرة التفسير البديل Explaining Away).",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للذكاء الاصطناعي."
    ],
    "hintEn": "Recall the governing analytical relations for Bayesian Networks, Directed Acyclic Graphs & D-Separation.",
    "hintAr": "تذكر القوانين والعلاقات التحليلية الحاكمة لـ شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation).",
    "teacherTipEn": "Pay careful attention to vector dimensions and normalization constraints when implementing Bayesian Networks, Directed Acyclic Graphs & D-Separation.",
    "teacherTipAr": "انتبه جيداً لأبعاد المتجهات وشروط المعايرة والتقييس عند تطبيق شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation)."
  },
  {
    "id": "egbac_ai_data_science_ch1_solved_5",
    "titleEn": "Solved Example 5: Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models",
    "titleAr": "مثال محلول 5: خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs)",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 5] Design, formulate, and evaluate an AI/Data Science model architecture applying Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models. Specify the mathematical formulations, optimization equations, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 5] صمم واشتق وقيم معمارية نموذج ذكاء اصطناعي أو علم بيانات بتطبيق خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs). وضح الصياغات الرياضية ومعادلات التحسين وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify problem specifications and statistical constraints.\nStep 2: Formulate governing analytical equation: The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).\nStep 3: Execute numerical substitution: For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2).\nStep 4: Verify convergence stability, generalization bounds, and algorithmic performance compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات المسألة والقيود الإحصائية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: تتناوب خوارزمية EM بين خطوة التوقع E (حساب المسؤوليات اللاحقة $\\gamma_{ik}$) وخطوة التعظيم M (تحديث المعاملات $\\mu_k$ و $\\Sigma_k$ و $\\pi_k$ بالاعتماد على المسؤوليات المحسوبة).\nالخطوة ٣: التعويض العددي وحساب النتائج: لنموذج مزيج غاوسي ثنائي لتجميع قراءات أقمار صناعية، لعينة $x = 4.2$ باحتماليات مكونات $0.035$ و $0.231$ بأوزان متساوية $\\pi_1 = \\pi_2 = 0.5$، تبلغ المسؤولية اللاحقة للمكون الثاني $\\gamma_2 = \\frac{0.1155}{0.133} \\approx 0.868$ بثقة $86.8\\%$.\nالخطوة ٤: التحقق من استقرار التقارب، حدود التعميم، وتوافق أداء النموذج.",
    "stepByStepSolutionEn": [
      "Identify system variables, loss functions, and optimization constraints.",
      "Apply formulation: The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).",
      "Perform calculation: For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2).",
      "Confirm operational validity and alignment with international AI standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد متغيرات النظام، دوال الخسارة، وقيود التحسين.",
      "تطبيق المعادلة الخوارزمية: تتناوب خوارزمية EM بين خطوة التوقع E (حساب المسؤوليات اللاحقة $\\gamma_{ik}$) وخطوة التعظيم M (تحديث المعاملات $\\mu_k$ و $\\Sigma_k$ و $\\pi_k$ بالاعتماد على المسؤوليات المحسوبة).",
      "الحساب العددي الدقيق: لنموذج مزيج غاوسي ثنائي لتجميع قراءات أقمار صناعية، لعينة $x = 4.2$ باحتماليات مكونات $0.035$ و $0.231$ بأوزان متساوية $\\pi_1 = \\pi_2 = 0.5$، تبلغ المسؤولية اللاحقة للمكون الثاني $\\gamma_2 = \\frac{0.1155}{0.133} \\approx 0.868$ بثقة $86.8\\%$.",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للذكاء الاصطناعي."
    ],
    "hintEn": "Recall the governing analytical relations for Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models.",
    "hintAr": "تذكر القوانين والعلاقات التحليلية الحاكمة لـ خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs).",
    "teacherTipEn": "Pay careful attention to vector dimensions and normalization constraints when implementing Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models.",
    "teacherTipAr": "انتبه جيداً لأبعاد المتجهات وشروط المعايرة والتقييس عند تطبيق خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs)."
  },
  {
    "id": "egbac_ai_data_science_ch1_solved_6",
    "titleEn": "Solved Example 6: Variational Inference & Evidence Lower Bound (ELBO) Derivation",
    "titleAr": "مثال محلول 6: الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO)",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 6] Design, formulate, and evaluate an AI/Data Science model architecture applying Variational Inference & Evidence Lower Bound (ELBO) Derivation. Specify the mathematical formulations, optimization equations, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 6] صمم واشتق وقيم معمارية نموذج ذكاء اصطناعي أو علم بيانات بتطبيق الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO). وضح الصياغات الرياضية ومعادلات التحسين وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify problem specifications and statistical constraints.\nStep 2: Formulate governing analytical equation: The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.\nStep 3: Execute numerical substitution: Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior.\nStep 4: Verify convergence stability, generalization bounds, and algorithmic performance compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات المسألة والقيود الإحصائية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: يُشتق الحد الأدنى لدليل البيانات (ELBO) من متباينة ينسن: $\\ln p(x) \\ge \\mathbb{E}[\\ln p(x,z)] - \\mathbb{E}[\\ln q(z)] = \\text{ELBO}$، ويحقق المعادلة $\\ln p(x) = \\text{ELBO} + D_{KL}(q \\parallel p)$.\nالخطوة ٣: التعويض العددي وحساب النتائج: يؤدي تعظيم الحد الأدنى ELBO مباشرة إلى تصغير تباعد كولباك-ليبلر $D_{KL}$ لأن لوغاريتم دليل البيانات الهامشي $\\ln p(x)$ ثابت بالنسبة للمعاملات المتغيرة $\\phi$، مما يضمن أفضل تقريب للتوزيع الحقيقي.\nالخطوة ٤: التحقق من استقرار التقارب، حدود التعميم، وتوافق أداء النموذج.",
    "stepByStepSolutionEn": [
      "Identify system variables, loss functions, and optimization constraints.",
      "Apply formulation: The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.",
      "Perform calculation: Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior.",
      "Confirm operational validity and alignment with international AI standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد متغيرات النظام، دوال الخسارة، وقيود التحسين.",
      "تطبيق المعادلة الخوارزمية: يُشتق الحد الأدنى لدليل البيانات (ELBO) من متباينة ينسن: $\\ln p(x) \\ge \\mathbb{E}[\\ln p(x,z)] - \\mathbb{E}[\\ln q(z)] = \\text{ELBO}$، ويحقق المعادلة $\\ln p(x) = \\text{ELBO} + D_{KL}(q \\parallel p)$.",
      "الحساب العددي الدقيق: يؤدي تعظيم الحد الأدنى ELBO مباشرة إلى تصغير تباعد كولباك-ليبلر $D_{KL}$ لأن لوغاريتم دليل البيانات الهامشي $\\ln p(x)$ ثابت بالنسبة للمعاملات المتغيرة $\\phi$، مما يضمن أفضل تقريب للتوزيع الحقيقي.",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للذكاء الاصطناعي."
    ],
    "hintEn": "Recall the governing analytical relations for Variational Inference & Evidence Lower Bound (ELBO) Derivation.",
    "hintAr": "تذكر القوانين والعلاقات التحليلية الحاكمة لـ الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO).",
    "teacherTipEn": "Pay careful attention to vector dimensions and normalization constraints when implementing Variational Inference & Evidence Lower Bound (ELBO) Derivation.",
    "teacherTipAr": "انتبه جيداً لأبعاد المتجهات وشروط المعايرة والتقييس عند تطبيق الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO)."
  },
  {
    "id": "egbac_ai_data_science_ch1_solved_7",
    "titleEn": "Solved Example 7: Bayesian Networks, Directed Acyclic Graphs & D-Separation",
    "titleAr": "مثال محلول 7: شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation)",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 7] Design, formulate, and evaluate an AI/Data Science model architecture applying Bayesian Networks, Directed Acyclic Graphs & D-Separation. Specify the mathematical formulations, optimization equations, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 7] صمم واشتق وقيم معمارية نموذج ذكاء اصطناعي أو علم بيانات بتطبيق شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation). وضح الصياغات الرياضية ومعادلات التحسين وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify problem specifications and statistical constraints.\nStep 2: Formulate governing analytical equation: Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).\nStep 3: Execute numerical substitution: In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).\nStep 4: Verify convergence stability, generalization bounds, and algorithmic performance compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات المسألة والقيود الإحصائية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: يكون المتغيران $X$ و $Y$ مفصولين اتجاهياً (d-separated) بمجموعة المشاهدات $Z$ إذا أغلقت كل المسارات بينهما؛ وفي البنية التصادمية ($A \\to C \\leftarrow B$)، يكون $A$ و $B$ مستقلين مبدئياً لكنهما يصبحان مرتبطين شرطياً عند معرفة $C$.\nالخطوة ٣: التعويض العددي وحساب النتائج: في شبكة تشخيص طبي يسبب فيها المرض A والمرض B العَرَض C بصورة مستقلة، يؤدي ثبوت العَرَض C إلى نشوء ارتباط شرطي يجعل تأكيد المرض A يخفض احتمالية المرض B اللاحقة (ظاهرة التفسير البديل Explaining Away).\nالخطوة ٤: التحقق من استقرار التقارب، حدود التعميم، وتوافق أداء النموذج.",
    "stepByStepSolutionEn": [
      "Identify system variables, loss functions, and optimization constraints.",
      "Apply formulation: Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).",
      "Perform calculation: In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).",
      "Confirm operational validity and alignment with international AI standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد متغيرات النظام، دوال الخسارة، وقيود التحسين.",
      "تطبيق المعادلة الخوارزمية: يكون المتغيران $X$ و $Y$ مفصولين اتجاهياً (d-separated) بمجموعة المشاهدات $Z$ إذا أغلقت كل المسارات بينهما؛ وفي البنية التصادمية ($A \\to C \\leftarrow B$)، يكون $A$ و $B$ مستقلين مبدئياً لكنهما يصبحان مرتبطين شرطياً عند معرفة $C$.",
      "الحساب العددي الدقيق: في شبكة تشخيص طبي يسبب فيها المرض A والمرض B العَرَض C بصورة مستقلة، يؤدي ثبوت العَرَض C إلى نشوء ارتباط شرطي يجعل تأكيد المرض A يخفض احتمالية المرض B اللاحقة (ظاهرة التفسير البديل Explaining Away).",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للذكاء الاصطناعي."
    ],
    "hintEn": "Recall the governing analytical relations for Bayesian Networks, Directed Acyclic Graphs & D-Separation.",
    "hintAr": "تذكر القوانين والعلاقات التحليلية الحاكمة لـ شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation).",
    "teacherTipEn": "Pay careful attention to vector dimensions and normalization constraints when implementing Bayesian Networks, Directed Acyclic Graphs & D-Separation.",
    "teacherTipAr": "انتبه جيداً لأبعاد المتجهات وشروط المعايرة والتقييس عند تطبيق شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation)."
  },
  {
    "id": "egbac_ai_data_science_ch1_solved_8",
    "titleEn": "Solved Example 8: Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models",
    "titleAr": "مثال محلول 8: خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs)",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 8] Design, formulate, and evaluate an AI/Data Science model architecture applying Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models. Specify the mathematical formulations, optimization equations, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 8] صمم واشتق وقيم معمارية نموذج ذكاء اصطناعي أو علم بيانات بتطبيق خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs). وضح الصياغات الرياضية ومعادلات التحسين وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify problem specifications and statistical constraints.\nStep 2: Formulate governing analytical equation: The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).\nStep 3: Execute numerical substitution: For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2).\nStep 4: Verify convergence stability, generalization bounds, and algorithmic performance compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات المسألة والقيود الإحصائية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: تتناوب خوارزمية EM بين خطوة التوقع E (حساب المسؤوليات اللاحقة $\\gamma_{ik}$) وخطوة التعظيم M (تحديث المعاملات $\\mu_k$ و $\\Sigma_k$ و $\\pi_k$ بالاعتماد على المسؤوليات المحسوبة).\nالخطوة ٣: التعويض العددي وحساب النتائج: لنموذج مزيج غاوسي ثنائي لتجميع قراءات أقمار صناعية، لعينة $x = 4.2$ باحتماليات مكونات $0.035$ و $0.231$ بأوزان متساوية $\\pi_1 = \\pi_2 = 0.5$، تبلغ المسؤولية اللاحقة للمكون الثاني $\\gamma_2 = \\frac{0.1155}{0.133} \\approx 0.868$ بثقة $86.8\\%$.\nالخطوة ٤: التحقق من استقرار التقارب، حدود التعميم، وتوافق أداء النموذج.",
    "stepByStepSolutionEn": [
      "Identify system variables, loss functions, and optimization constraints.",
      "Apply formulation: The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).",
      "Perform calculation: For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2).",
      "Confirm operational validity and alignment with international AI standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد متغيرات النظام، دوال الخسارة، وقيود التحسين.",
      "تطبيق المعادلة الخوارزمية: تتناوب خوارزمية EM بين خطوة التوقع E (حساب المسؤوليات اللاحقة $\\gamma_{ik}$) وخطوة التعظيم M (تحديث المعاملات $\\mu_k$ و $\\Sigma_k$ و $\\pi_k$ بالاعتماد على المسؤوليات المحسوبة).",
      "الحساب العددي الدقيق: لنموذج مزيج غاوسي ثنائي لتجميع قراءات أقمار صناعية، لعينة $x = 4.2$ باحتماليات مكونات $0.035$ و $0.231$ بأوزان متساوية $\\pi_1 = \\pi_2 = 0.5$، تبلغ المسؤولية اللاحقة للمكون الثاني $\\gamma_2 = \\frac{0.1155}{0.133} \\approx 0.868$ بثقة $86.8\\%$.",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للذكاء الاصطناعي."
    ],
    "hintEn": "Recall the governing analytical relations for Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models.",
    "hintAr": "تذكر القوانين والعلاقات التحليلية الحاكمة لـ خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs).",
    "teacherTipEn": "Pay careful attention to vector dimensions and normalization constraints when implementing Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models.",
    "teacherTipAr": "انتبه جيداً لأبعاد المتجهات وشروط المعايرة والتقييس عند تطبيق خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs)."
  },
  {
    "id": "egbac_ai_data_science_ch1_solved_9",
    "titleEn": "Solved Example 9: Variational Inference & Evidence Lower Bound (ELBO) Derivation",
    "titleAr": "مثال محلول 9: الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO)",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 9] Design, formulate, and evaluate an AI/Data Science model architecture applying Variational Inference & Evidence Lower Bound (ELBO) Derivation. Specify the mathematical formulations, optimization equations, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 9] صمم واشتق وقيم معمارية نموذج ذكاء اصطناعي أو علم بيانات بتطبيق الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO). وضح الصياغات الرياضية ومعادلات التحسين وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify problem specifications and statistical constraints.\nStep 2: Formulate governing analytical equation: The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.\nStep 3: Execute numerical substitution: Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior.\nStep 4: Verify convergence stability, generalization bounds, and algorithmic performance compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات المسألة والقيود الإحصائية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: يُشتق الحد الأدنى لدليل البيانات (ELBO) من متباينة ينسن: $\\ln p(x) \\ge \\mathbb{E}[\\ln p(x,z)] - \\mathbb{E}[\\ln q(z)] = \\text{ELBO}$، ويحقق المعادلة $\\ln p(x) = \\text{ELBO} + D_{KL}(q \\parallel p)$.\nالخطوة ٣: التعويض العددي وحساب النتائج: يؤدي تعظيم الحد الأدنى ELBO مباشرة إلى تصغير تباعد كولباك-ليبلر $D_{KL}$ لأن لوغاريتم دليل البيانات الهامشي $\\ln p(x)$ ثابت بالنسبة للمعاملات المتغيرة $\\phi$، مما يضمن أفضل تقريب للتوزيع الحقيقي.\nالخطوة ٤: التحقق من استقرار التقارب، حدود التعميم، وتوافق أداء النموذج.",
    "stepByStepSolutionEn": [
      "Identify system variables, loss functions, and optimization constraints.",
      "Apply formulation: The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.",
      "Perform calculation: Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior.",
      "Confirm operational validity and alignment with international AI standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد متغيرات النظام، دوال الخسارة، وقيود التحسين.",
      "تطبيق المعادلة الخوارزمية: يُشتق الحد الأدنى لدليل البيانات (ELBO) من متباينة ينسن: $\\ln p(x) \\ge \\mathbb{E}[\\ln p(x,z)] - \\mathbb{E}[\\ln q(z)] = \\text{ELBO}$، ويحقق المعادلة $\\ln p(x) = \\text{ELBO} + D_{KL}(q \\parallel p)$.",
      "الحساب العددي الدقيق: يؤدي تعظيم الحد الأدنى ELBO مباشرة إلى تصغير تباعد كولباك-ليبلر $D_{KL}$ لأن لوغاريتم دليل البيانات الهامشي $\\ln p(x)$ ثابت بالنسبة للمعاملات المتغيرة $\\phi$، مما يضمن أفضل تقريب للتوزيع الحقيقي.",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للذكاء الاصطناعي."
    ],
    "hintEn": "Recall the governing analytical relations for Variational Inference & Evidence Lower Bound (ELBO) Derivation.",
    "hintAr": "تذكر القوانين والعلاقات التحليلية الحاكمة لـ الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO).",
    "teacherTipEn": "Pay careful attention to vector dimensions and normalization constraints when implementing Variational Inference & Evidence Lower Bound (ELBO) Derivation.",
    "teacherTipAr": "انتبه جيداً لأبعاد المتجهات وشروط المعايرة والتقييس عند تطبيق الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO)."
  },
  {
    "id": "egbac_ai_data_science_ch1_solved_10",
    "titleEn": "Solved Example 10: Bayesian Networks, Directed Acyclic Graphs & D-Separation",
    "titleAr": "مثال محلول 10: شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation)",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 10] Design, formulate, and evaluate an AI/Data Science model architecture applying Bayesian Networks, Directed Acyclic Graphs & D-Separation. Specify the mathematical formulations, optimization equations, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 10] صمم واشتق وقيم معمارية نموذج ذكاء اصطناعي أو علم بيانات بتطبيق شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation). وضح الصياغات الرياضية ومعادلات التحسين وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify problem specifications and statistical constraints.\nStep 2: Formulate governing analytical equation: Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).\nStep 3: Execute numerical substitution: In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).\nStep 4: Verify convergence stability, generalization bounds, and algorithmic performance compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات المسألة والقيود الإحصائية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: يكون المتغيران $X$ و $Y$ مفصولين اتجاهياً (d-separated) بمجموعة المشاهدات $Z$ إذا أغلقت كل المسارات بينهما؛ وفي البنية التصادمية ($A \\to C \\leftarrow B$)، يكون $A$ و $B$ مستقلين مبدئياً لكنهما يصبحان مرتبطين شرطياً عند معرفة $C$.\nالخطوة ٣: التعويض العددي وحساب النتائج: في شبكة تشخيص طبي يسبب فيها المرض A والمرض B العَرَض C بصورة مستقلة، يؤدي ثبوت العَرَض C إلى نشوء ارتباط شرطي يجعل تأكيد المرض A يخفض احتمالية المرض B اللاحقة (ظاهرة التفسير البديل Explaining Away).\nالخطوة ٤: التحقق من استقرار التقارب، حدود التعميم، وتوافق أداء النموذج.",
    "stepByStepSolutionEn": [
      "Identify system variables, loss functions, and optimization constraints.",
      "Apply formulation: Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).",
      "Perform calculation: In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).",
      "Confirm operational validity and alignment with international AI standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد متغيرات النظام، دوال الخسارة، وقيود التحسين.",
      "تطبيق المعادلة الخوارزمية: يكون المتغيران $X$ و $Y$ مفصولين اتجاهياً (d-separated) بمجموعة المشاهدات $Z$ إذا أغلقت كل المسارات بينهما؛ وفي البنية التصادمية ($A \\to C \\leftarrow B$)، يكون $A$ و $B$ مستقلين مبدئياً لكنهما يصبحان مرتبطين شرطياً عند معرفة $C$.",
      "الحساب العددي الدقيق: في شبكة تشخيص طبي يسبب فيها المرض A والمرض B العَرَض C بصورة مستقلة، يؤدي ثبوت العَرَض C إلى نشوء ارتباط شرطي يجعل تأكيد المرض A يخفض احتمالية المرض B اللاحقة (ظاهرة التفسير البديل Explaining Away).",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للذكاء الاصطناعي."
    ],
    "hintEn": "Recall the governing analytical relations for Bayesian Networks, Directed Acyclic Graphs & D-Separation.",
    "hintAr": "تذكر القوانين والعلاقات التحليلية الحاكمة لـ شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation).",
    "teacherTipEn": "Pay careful attention to vector dimensions and normalization constraints when implementing Bayesian Networks, Directed Acyclic Graphs & D-Separation.",
    "teacherTipAr": "انتبه جيداً لأبعاد المتجهات وشروط المعايرة والتقييس عند تطبيق شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation)."
  }
];

export const egbac_ai_data_science_ch1ExerciseProblems: SolvedProblem[] = [
  {
    "id": "egbac_ai_data_science_ch1_ex_1",
    "titleEn": "Exercise Problem 1: Bayesian Networks, Directed Acyclic Graphs & D-Separation",
    "titleAr": "تمرين 1: شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation)",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 1] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Bayesian Networks, Directed Acyclic Graphs & D-Separation. Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 1] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation). استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).\n- Calculation & Results: In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: يكون المتغيران $X$ و $Y$ مفصولين اتجاهياً (d-separated) بمجموعة المشاهدات $Z$ إذا أغلقت كل المسارات بينهما؛ وفي البنية التصادمية ($A \\to C \\leftarrow B$)، يكون $A$ و $B$ مستقلين مبدئياً لكنهما يصبحان مرتبطين شرطياً عند معرفة $C$.\n- خطوات الحساب والنتيجة: في شبكة تشخيص طبي يسبب فيها المرض A والمرض B العَرَض C بصورة مستقلة، يؤدي ثبوت العَرَض C إلى نشوء ارتباط شرطي يجعل تأكيد المرض A يخفض احتمالية المرض B اللاحقة (ظاهرة التفسير البديل Explaining Away).",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).",
      "Calculate final values: In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: يكون المتغيران $X$ و $Y$ مفصولين اتجاهياً (d-separated) بمجموعة المشاهدات $Z$ إذا أغلقت كل المسارات بينهما؛ وفي البنية التصادمية ($A \\to C \\leftarrow B$)، يكون $A$ و $B$ مستقلين مبدئياً لكنهما يصبحان مرتبطين شرطياً عند معرفة $C$.",
      "حساب الناتج النهائي: في شبكة تشخيص طبي يسبب فيها المرض A والمرض B العَرَض C بصورة مستقلة، يؤدي ثبوت العَرَض C إلى نشوء ارتباط شرطي يجعل تأكيد المرض A يخفض احتمالية المرض B اللاحقة (ظاهرة التفسير البديل Explaining Away).",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).",
    "hintAr": "طبق القانون الأساسي: يكون المتغيران $X$ و $Y$ مفصولين اتجاهياً (d-separated) بمجموعة المشاهدات $Z$ إذا أغلقت كل المسارات بينهما؛ وفي البنية التصادمية ($A \\to C \\leftarrow B$)، يكون $A$ و $B$ مستقلين مبدئياً لكنهما يصبحان مرتبطين شرطياً عند معرفة $C$.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "egbac_ai_data_science_ch1_ex_2",
    "titleEn": "Exercise Problem 2: Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models",
    "titleAr": "تمرين 2: خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs)",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 2] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models. Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 2] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs). استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).\n- Calculation & Results: For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2).",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تتناوب خوارزمية EM بين خطوة التوقع E (حساب المسؤوليات اللاحقة $\\gamma_{ik}$) وخطوة التعظيم M (تحديث المعاملات $\\mu_k$ و $\\Sigma_k$ و $\\pi_k$ بالاعتماد على المسؤوليات المحسوبة).\n- خطوات الحساب والنتيجة: لنموذج مزيج غاوسي ثنائي لتجميع قراءات أقمار صناعية، لعينة $x = 4.2$ باحتماليات مكونات $0.035$ و $0.231$ بأوزان متساوية $\\pi_1 = \\pi_2 = 0.5$، تبلغ المسؤولية اللاحقة للمكون الثاني $\\gamma_2 = \\frac{0.1155}{0.133} \\approx 0.868$ بثقة $86.8\\%$.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).",
      "Calculate final values: For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2).",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: تتناوب خوارزمية EM بين خطوة التوقع E (حساب المسؤوليات اللاحقة $\\gamma_{ik}$) وخطوة التعظيم M (تحديث المعاملات $\\mu_k$ و $\\Sigma_k$ و $\\pi_k$ بالاعتماد على المسؤوليات المحسوبة).",
      "حساب الناتج النهائي: لنموذج مزيج غاوسي ثنائي لتجميع قراءات أقمار صناعية، لعينة $x = 4.2$ باحتماليات مكونات $0.035$ و $0.231$ بأوزان متساوية $\\pi_1 = \\pi_2 = 0.5$، تبلغ المسؤولية اللاحقة للمكون الثاني $\\gamma_2 = \\frac{0.1155}{0.133} \\approx 0.868$ بثقة $86.8\\%$.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).",
    "hintAr": "طبق القانون الأساسي: تتناوب خوارزمية EM بين خطوة التوقع E (حساب المسؤوليات اللاحقة $\\gamma_{ik}$) وخطوة التعظيم M (تحديث المعاملات $\\mu_k$ و $\\Sigma_k$ و $\\pi_k$ بالاعتماد على المسؤوليات المحسوبة).",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "egbac_ai_data_science_ch1_ex_3",
    "titleEn": "Exercise Problem 3: Variational Inference & Evidence Lower Bound (ELBO) Derivation",
    "titleAr": "تمرين 3: الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO)",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 3] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Variational Inference & Evidence Lower Bound (ELBO) Derivation. Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 3] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO). استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.\n- Calculation & Results: Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: يُشتق الحد الأدنى لدليل البيانات (ELBO) من متباينة ينسن: $\\ln p(x) \\ge \\mathbb{E}[\\ln p(x,z)] - \\mathbb{E}[\\ln q(z)] = \\text{ELBO}$، ويحقق المعادلة $\\ln p(x) = \\text{ELBO} + D_{KL}(q \\parallel p)$.\n- خطوات الحساب والنتيجة: يؤدي تعظيم الحد الأدنى ELBO مباشرة إلى تصغير تباعد كولباك-ليبلر $D_{KL}$ لأن لوغاريتم دليل البيانات الهامشي $\\ln p(x)$ ثابت بالنسبة للمعاملات المتغيرة $\\phi$، مما يضمن أفضل تقريب للتوزيع الحقيقي.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.",
      "Calculate final values: Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior.",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: يُشتق الحد الأدنى لدليل البيانات (ELBO) من متباينة ينسن: $\\ln p(x) \\ge \\mathbb{E}[\\ln p(x,z)] - \\mathbb{E}[\\ln q(z)] = \\text{ELBO}$، ويحقق المعادلة $\\ln p(x) = \\text{ELBO} + D_{KL}(q \\parallel p)$.",
      "حساب الناتج النهائي: يؤدي تعظيم الحد الأدنى ELBO مباشرة إلى تصغير تباعد كولباك-ليبلر $D_{KL}$ لأن لوغاريتم دليل البيانات الهامشي $\\ln p(x)$ ثابت بالنسبة للمعاملات المتغيرة $\\phi$، مما يضمن أفضل تقريب للتوزيع الحقيقي.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.",
    "hintAr": "طبق القانون الأساسي: يُشتق الحد الأدنى لدليل البيانات (ELBO) من متباينة ينسن: $\\ln p(x) \\ge \\mathbb{E}[\\ln p(x,z)] - \\mathbb{E}[\\ln q(z)] = \\text{ELBO}$، ويحقق المعادلة $\\ln p(x) = \\text{ELBO} + D_{KL}(q \\parallel p)$.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "egbac_ai_data_science_ch1_ex_4",
    "titleEn": "Exercise Problem 4: Bayesian Networks, Directed Acyclic Graphs & D-Separation",
    "titleAr": "تمرين 4: شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation)",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 4] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Bayesian Networks, Directed Acyclic Graphs & D-Separation. Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 4] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation). استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).\n- Calculation & Results: In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: يكون المتغيران $X$ و $Y$ مفصولين اتجاهياً (d-separated) بمجموعة المشاهدات $Z$ إذا أغلقت كل المسارات بينهما؛ وفي البنية التصادمية ($A \\to C \\leftarrow B$)، يكون $A$ و $B$ مستقلين مبدئياً لكنهما يصبحان مرتبطين شرطياً عند معرفة $C$.\n- خطوات الحساب والنتيجة: في شبكة تشخيص طبي يسبب فيها المرض A والمرض B العَرَض C بصورة مستقلة، يؤدي ثبوت العَرَض C إلى نشوء ارتباط شرطي يجعل تأكيد المرض A يخفض احتمالية المرض B اللاحقة (ظاهرة التفسير البديل Explaining Away).",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).",
      "Calculate final values: In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: يكون المتغيران $X$ و $Y$ مفصولين اتجاهياً (d-separated) بمجموعة المشاهدات $Z$ إذا أغلقت كل المسارات بينهما؛ وفي البنية التصادمية ($A \\to C \\leftarrow B$)، يكون $A$ و $B$ مستقلين مبدئياً لكنهما يصبحان مرتبطين شرطياً عند معرفة $C$.",
      "حساب الناتج النهائي: في شبكة تشخيص طبي يسبب فيها المرض A والمرض B العَرَض C بصورة مستقلة، يؤدي ثبوت العَرَض C إلى نشوء ارتباط شرطي يجعل تأكيد المرض A يخفض احتمالية المرض B اللاحقة (ظاهرة التفسير البديل Explaining Away).",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).",
    "hintAr": "طبق القانون الأساسي: يكون المتغيران $X$ و $Y$ مفصولين اتجاهياً (d-separated) بمجموعة المشاهدات $Z$ إذا أغلقت كل المسارات بينهما؛ وفي البنية التصادمية ($A \\to C \\leftarrow B$)، يكون $A$ و $B$ مستقلين مبدئياً لكنهما يصبحان مرتبطين شرطياً عند معرفة $C$.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "egbac_ai_data_science_ch1_ex_5",
    "titleEn": "Exercise Problem 5: Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models",
    "titleAr": "تمرين 5: خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs)",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 5] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models. Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 5] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs). استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).\n- Calculation & Results: For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2).",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تتناوب خوارزمية EM بين خطوة التوقع E (حساب المسؤوليات اللاحقة $\\gamma_{ik}$) وخطوة التعظيم M (تحديث المعاملات $\\mu_k$ و $\\Sigma_k$ و $\\pi_k$ بالاعتماد على المسؤوليات المحسوبة).\n- خطوات الحساب والنتيجة: لنموذج مزيج غاوسي ثنائي لتجميع قراءات أقمار صناعية، لعينة $x = 4.2$ باحتماليات مكونات $0.035$ و $0.231$ بأوزان متساوية $\\pi_1 = \\pi_2 = 0.5$، تبلغ المسؤولية اللاحقة للمكون الثاني $\\gamma_2 = \\frac{0.1155}{0.133} \\approx 0.868$ بثقة $86.8\\%$.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).",
      "Calculate final values: For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2).",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: تتناوب خوارزمية EM بين خطوة التوقع E (حساب المسؤوليات اللاحقة $\\gamma_{ik}$) وخطوة التعظيم M (تحديث المعاملات $\\mu_k$ و $\\Sigma_k$ و $\\pi_k$ بالاعتماد على المسؤوليات المحسوبة).",
      "حساب الناتج النهائي: لنموذج مزيج غاوسي ثنائي لتجميع قراءات أقمار صناعية، لعينة $x = 4.2$ باحتماليات مكونات $0.035$ و $0.231$ بأوزان متساوية $\\pi_1 = \\pi_2 = 0.5$، تبلغ المسؤولية اللاحقة للمكون الثاني $\\gamma_2 = \\frac{0.1155}{0.133} \\approx 0.868$ بثقة $86.8\\%$.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).",
    "hintAr": "طبق القانون الأساسي: تتناوب خوارزمية EM بين خطوة التوقع E (حساب المسؤوليات اللاحقة $\\gamma_{ik}$) وخطوة التعظيم M (تحديث المعاملات $\\mu_k$ و $\\Sigma_k$ و $\\pi_k$ بالاعتماد على المسؤوليات المحسوبة).",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "egbac_ai_data_science_ch1_ex_6",
    "titleEn": "Exercise Problem 6: Variational Inference & Evidence Lower Bound (ELBO) Derivation",
    "titleAr": "تمرين 6: الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO)",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 6] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Variational Inference & Evidence Lower Bound (ELBO) Derivation. Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 6] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO). استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.\n- Calculation & Results: Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: يُشتق الحد الأدنى لدليل البيانات (ELBO) من متباينة ينسن: $\\ln p(x) \\ge \\mathbb{E}[\\ln p(x,z)] - \\mathbb{E}[\\ln q(z)] = \\text{ELBO}$، ويحقق المعادلة $\\ln p(x) = \\text{ELBO} + D_{KL}(q \\parallel p)$.\n- خطوات الحساب والنتيجة: يؤدي تعظيم الحد الأدنى ELBO مباشرة إلى تصغير تباعد كولباك-ليبلر $D_{KL}$ لأن لوغاريتم دليل البيانات الهامشي $\\ln p(x)$ ثابت بالنسبة للمعاملات المتغيرة $\\phi$، مما يضمن أفضل تقريب للتوزيع الحقيقي.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.",
      "Calculate final values: Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior.",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: يُشتق الحد الأدنى لدليل البيانات (ELBO) من متباينة ينسن: $\\ln p(x) \\ge \\mathbb{E}[\\ln p(x,z)] - \\mathbb{E}[\\ln q(z)] = \\text{ELBO}$، ويحقق المعادلة $\\ln p(x) = \\text{ELBO} + D_{KL}(q \\parallel p)$.",
      "حساب الناتج النهائي: يؤدي تعظيم الحد الأدنى ELBO مباشرة إلى تصغير تباعد كولباك-ليبلر $D_{KL}$ لأن لوغاريتم دليل البيانات الهامشي $\\ln p(x)$ ثابت بالنسبة للمعاملات المتغيرة $\\phi$، مما يضمن أفضل تقريب للتوزيع الحقيقي.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.",
    "hintAr": "طبق القانون الأساسي: يُشتق الحد الأدنى لدليل البيانات (ELBO) من متباينة ينسن: $\\ln p(x) \\ge \\mathbb{E}[\\ln p(x,z)] - \\mathbb{E}[\\ln q(z)] = \\text{ELBO}$، ويحقق المعادلة $\\ln p(x) = \\text{ELBO} + D_{KL}(q \\parallel p)$.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "egbac_ai_data_science_ch1_ex_7",
    "titleEn": "Exercise Problem 7: Bayesian Networks, Directed Acyclic Graphs & D-Separation",
    "titleAr": "تمرين 7: شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation)",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 7] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Bayesian Networks, Directed Acyclic Graphs & D-Separation. Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 7] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation). استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).\n- Calculation & Results: In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: يكون المتغيران $X$ و $Y$ مفصولين اتجاهياً (d-separated) بمجموعة المشاهدات $Z$ إذا أغلقت كل المسارات بينهما؛ وفي البنية التصادمية ($A \\to C \\leftarrow B$)، يكون $A$ و $B$ مستقلين مبدئياً لكنهما يصبحان مرتبطين شرطياً عند معرفة $C$.\n- خطوات الحساب والنتيجة: في شبكة تشخيص طبي يسبب فيها المرض A والمرض B العَرَض C بصورة مستقلة، يؤدي ثبوت العَرَض C إلى نشوء ارتباط شرطي يجعل تأكيد المرض A يخفض احتمالية المرض B اللاحقة (ظاهرة التفسير البديل Explaining Away).",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).",
      "Calculate final values: In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: يكون المتغيران $X$ و $Y$ مفصولين اتجاهياً (d-separated) بمجموعة المشاهدات $Z$ إذا أغلقت كل المسارات بينهما؛ وفي البنية التصادمية ($A \\to C \\leftarrow B$)، يكون $A$ و $B$ مستقلين مبدئياً لكنهما يصبحان مرتبطين شرطياً عند معرفة $C$.",
      "حساب الناتج النهائي: في شبكة تشخيص طبي يسبب فيها المرض A والمرض B العَرَض C بصورة مستقلة، يؤدي ثبوت العَرَض C إلى نشوء ارتباط شرطي يجعل تأكيد المرض A يخفض احتمالية المرض B اللاحقة (ظاهرة التفسير البديل Explaining Away).",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).",
    "hintAr": "طبق القانون الأساسي: يكون المتغيران $X$ و $Y$ مفصولين اتجاهياً (d-separated) بمجموعة المشاهدات $Z$ إذا أغلقت كل المسارات بينهما؛ وفي البنية التصادمية ($A \\to C \\leftarrow B$)، يكون $A$ و $B$ مستقلين مبدئياً لكنهما يصبحان مرتبطين شرطياً عند معرفة $C$.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "egbac_ai_data_science_ch1_ex_8",
    "titleEn": "Exercise Problem 8: Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models",
    "titleAr": "تمرين 8: خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs)",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 8] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models. Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 8] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs). استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).\n- Calculation & Results: For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2).",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تتناوب خوارزمية EM بين خطوة التوقع E (حساب المسؤوليات اللاحقة $\\gamma_{ik}$) وخطوة التعظيم M (تحديث المعاملات $\\mu_k$ و $\\Sigma_k$ و $\\pi_k$ بالاعتماد على المسؤوليات المحسوبة).\n- خطوات الحساب والنتيجة: لنموذج مزيج غاوسي ثنائي لتجميع قراءات أقمار صناعية، لعينة $x = 4.2$ باحتماليات مكونات $0.035$ و $0.231$ بأوزان متساوية $\\pi_1 = \\pi_2 = 0.5$، تبلغ المسؤولية اللاحقة للمكون الثاني $\\gamma_2 = \\frac{0.1155}{0.133} \\approx 0.868$ بثقة $86.8\\%$.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).",
      "Calculate final values: For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2).",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: تتناوب خوارزمية EM بين خطوة التوقع E (حساب المسؤوليات اللاحقة $\\gamma_{ik}$) وخطوة التعظيم M (تحديث المعاملات $\\mu_k$ و $\\Sigma_k$ و $\\pi_k$ بالاعتماد على المسؤوليات المحسوبة).",
      "حساب الناتج النهائي: لنموذج مزيج غاوسي ثنائي لتجميع قراءات أقمار صناعية، لعينة $x = 4.2$ باحتماليات مكونات $0.035$ و $0.231$ بأوزان متساوية $\\pi_1 = \\pi_2 = 0.5$، تبلغ المسؤولية اللاحقة للمكون الثاني $\\gamma_2 = \\frac{0.1155}{0.133} \\approx 0.868$ بثقة $86.8\\%$.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).",
    "hintAr": "طبق القانون الأساسي: تتناوب خوارزمية EM بين خطوة التوقع E (حساب المسؤوليات اللاحقة $\\gamma_{ik}$) وخطوة التعظيم M (تحديث المعاملات $\\mu_k$ و $\\Sigma_k$ و $\\pi_k$ بالاعتماد على المسؤوليات المحسوبة).",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "egbac_ai_data_science_ch1_ex_9",
    "titleEn": "Exercise Problem 9: Variational Inference & Evidence Lower Bound (ELBO) Derivation",
    "titleAr": "تمرين 9: الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO)",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 9] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Variational Inference & Evidence Lower Bound (ELBO) Derivation. Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 9] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO). استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.\n- Calculation & Results: Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: يُشتق الحد الأدنى لدليل البيانات (ELBO) من متباينة ينسن: $\\ln p(x) \\ge \\mathbb{E}[\\ln p(x,z)] - \\mathbb{E}[\\ln q(z)] = \\text{ELBO}$، ويحقق المعادلة $\\ln p(x) = \\text{ELBO} + D_{KL}(q \\parallel p)$.\n- خطوات الحساب والنتيجة: يؤدي تعظيم الحد الأدنى ELBO مباشرة إلى تصغير تباعد كولباك-ليبلر $D_{KL}$ لأن لوغاريتم دليل البيانات الهامشي $\\ln p(x)$ ثابت بالنسبة للمعاملات المتغيرة $\\phi$، مما يضمن أفضل تقريب للتوزيع الحقيقي.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.",
      "Calculate final values: Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior.",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: يُشتق الحد الأدنى لدليل البيانات (ELBO) من متباينة ينسن: $\\ln p(x) \\ge \\mathbb{E}[\\ln p(x,z)] - \\mathbb{E}[\\ln q(z)] = \\text{ELBO}$، ويحقق المعادلة $\\ln p(x) = \\text{ELBO} + D_{KL}(q \\parallel p)$.",
      "حساب الناتج النهائي: يؤدي تعظيم الحد الأدنى ELBO مباشرة إلى تصغير تباعد كولباك-ليبلر $D_{KL}$ لأن لوغاريتم دليل البيانات الهامشي $\\ln p(x)$ ثابت بالنسبة للمعاملات المتغيرة $\\phi$، مما يضمن أفضل تقريب للتوزيع الحقيقي.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.",
    "hintAr": "طبق القانون الأساسي: يُشتق الحد الأدنى لدليل البيانات (ELBO) من متباينة ينسن: $\\ln p(x) \\ge \\mathbb{E}[\\ln p(x,z)] - \\mathbb{E}[\\ln q(z)] = \\text{ELBO}$، ويحقق المعادلة $\\ln p(x) = \\text{ELBO} + D_{KL}(q \\parallel p)$.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "egbac_ai_data_science_ch1_ex_10",
    "titleEn": "Exercise Problem 10: Bayesian Networks, Directed Acyclic Graphs & D-Separation",
    "titleAr": "تمرين 10: شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation)",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 10] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Bayesian Networks, Directed Acyclic Graphs & D-Separation. Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 10] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation). استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).\n- Calculation & Results: In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: يكون المتغيران $X$ و $Y$ مفصولين اتجاهياً (d-separated) بمجموعة المشاهدات $Z$ إذا أغلقت كل المسارات بينهما؛ وفي البنية التصادمية ($A \\to C \\leftarrow B$)، يكون $A$ و $B$ مستقلين مبدئياً لكنهما يصبحان مرتبطين شرطياً عند معرفة $C$.\n- خطوات الحساب والنتيجة: في شبكة تشخيص طبي يسبب فيها المرض A والمرض B العَرَض C بصورة مستقلة، يؤدي ثبوت العَرَض C إلى نشوء ارتباط شرطي يجعل تأكيد المرض A يخفض احتمالية المرض B اللاحقة (ظاهرة التفسير البديل Explaining Away).",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).",
      "Calculate final values: In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: يكون المتغيران $X$ و $Y$ مفصولين اتجاهياً (d-separated) بمجموعة المشاهدات $Z$ إذا أغلقت كل المسارات بينهما؛ وفي البنية التصادمية ($A \\to C \\leftarrow B$)، يكون $A$ و $B$ مستقلين مبدئياً لكنهما يصبحان مرتبطين شرطياً عند معرفة $C$.",
      "حساب الناتج النهائي: في شبكة تشخيص طبي يسبب فيها المرض A والمرض B العَرَض C بصورة مستقلة، يؤدي ثبوت العَرَض C إلى نشوء ارتباط شرطي يجعل تأكيد المرض A يخفض احتمالية المرض B اللاحقة (ظاهرة التفسير البديل Explaining Away).",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).",
    "hintAr": "طبق القانون الأساسي: يكون المتغيران $X$ و $Y$ مفصولين اتجاهياً (d-separated) بمجموعة المشاهدات $Z$ إذا أغلقت كل المسارات بينهما؛ وفي البنية التصادمية ($A \\to C \\leftarrow B$)، يكون $A$ و $B$ مستقلين مبدئياً لكنهما يصبحان مرتبطين شرطياً عند معرفة $C$.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "egbac_ai_data_science_ch1_ex_11",
    "titleEn": "Exercise Problem 11: Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models",
    "titleAr": "تمرين 11: خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs)",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 11] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models. Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 11] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs). استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).\n- Calculation & Results: For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2).",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تتناوب خوارزمية EM بين خطوة التوقع E (حساب المسؤوليات اللاحقة $\\gamma_{ik}$) وخطوة التعظيم M (تحديث المعاملات $\\mu_k$ و $\\Sigma_k$ و $\\pi_k$ بالاعتماد على المسؤوليات المحسوبة).\n- خطوات الحساب والنتيجة: لنموذج مزيج غاوسي ثنائي لتجميع قراءات أقمار صناعية، لعينة $x = 4.2$ باحتماليات مكونات $0.035$ و $0.231$ بأوزان متساوية $\\pi_1 = \\pi_2 = 0.5$، تبلغ المسؤولية اللاحقة للمكون الثاني $\\gamma_2 = \\frac{0.1155}{0.133} \\approx 0.868$ بثقة $86.8\\%$.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).",
      "Calculate final values: For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2).",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: تتناوب خوارزمية EM بين خطوة التوقع E (حساب المسؤوليات اللاحقة $\\gamma_{ik}$) وخطوة التعظيم M (تحديث المعاملات $\\mu_k$ و $\\Sigma_k$ و $\\pi_k$ بالاعتماد على المسؤوليات المحسوبة).",
      "حساب الناتج النهائي: لنموذج مزيج غاوسي ثنائي لتجميع قراءات أقمار صناعية، لعينة $x = 4.2$ باحتماليات مكونات $0.035$ و $0.231$ بأوزان متساوية $\\pi_1 = \\pi_2 = 0.5$، تبلغ المسؤولية اللاحقة للمكون الثاني $\\gamma_2 = \\frac{0.1155}{0.133} \\approx 0.868$ بثقة $86.8\\%$.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).",
    "hintAr": "طبق القانون الأساسي: تتناوب خوارزمية EM بين خطوة التوقع E (حساب المسؤوليات اللاحقة $\\gamma_{ik}$) وخطوة التعظيم M (تحديث المعاملات $\\mu_k$ و $\\Sigma_k$ و $\\pi_k$ بالاعتماد على المسؤوليات المحسوبة).",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "egbac_ai_data_science_ch1_ex_12",
    "titleEn": "Exercise Problem 12: Variational Inference & Evidence Lower Bound (ELBO) Derivation",
    "titleAr": "تمرين 12: الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO)",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 12] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Variational Inference & Evidence Lower Bound (ELBO) Derivation. Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 12] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO). استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.\n- Calculation & Results: Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: يُشتق الحد الأدنى لدليل البيانات (ELBO) من متباينة ينسن: $\\ln p(x) \\ge \\mathbb{E}[\\ln p(x,z)] - \\mathbb{E}[\\ln q(z)] = \\text{ELBO}$، ويحقق المعادلة $\\ln p(x) = \\text{ELBO} + D_{KL}(q \\parallel p)$.\n- خطوات الحساب والنتيجة: يؤدي تعظيم الحد الأدنى ELBO مباشرة إلى تصغير تباعد كولباك-ليبلر $D_{KL}$ لأن لوغاريتم دليل البيانات الهامشي $\\ln p(x)$ ثابت بالنسبة للمعاملات المتغيرة $\\phi$، مما يضمن أفضل تقريب للتوزيع الحقيقي.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.",
      "Calculate final values: Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior.",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: يُشتق الحد الأدنى لدليل البيانات (ELBO) من متباينة ينسن: $\\ln p(x) \\ge \\mathbb{E}[\\ln p(x,z)] - \\mathbb{E}[\\ln q(z)] = \\text{ELBO}$، ويحقق المعادلة $\\ln p(x) = \\text{ELBO} + D_{KL}(q \\parallel p)$.",
      "حساب الناتج النهائي: يؤدي تعظيم الحد الأدنى ELBO مباشرة إلى تصغير تباعد كولباك-ليبلر $D_{KL}$ لأن لوغاريتم دليل البيانات الهامشي $\\ln p(x)$ ثابت بالنسبة للمعاملات المتغيرة $\\phi$، مما يضمن أفضل تقريب للتوزيع الحقيقي.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.",
    "hintAr": "طبق القانون الأساسي: يُشتق الحد الأدنى لدليل البيانات (ELBO) من متباينة ينسن: $\\ln p(x) \\ge \\mathbb{E}[\\ln p(x,z)] - \\mathbb{E}[\\ln q(z)] = \\text{ELBO}$، ويحقق المعادلة $\\ln p(x) = \\text{ELBO} + D_{KL}(q \\parallel p)$.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "egbac_ai_data_science_ch1_ex_13",
    "titleEn": "Exercise Problem 13: Bayesian Networks, Directed Acyclic Graphs & D-Separation",
    "titleAr": "تمرين 13: شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation)",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 13] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Bayesian Networks, Directed Acyclic Graphs & D-Separation. Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 13] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن شبكات بايز، المخططات الموجهة عديمة الحلقات (DAGs) والفصل الاتجاهي (D-Separation). استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).\n- Calculation & Results: In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: يكون المتغيران $X$ و $Y$ مفصولين اتجاهياً (d-separated) بمجموعة المشاهدات $Z$ إذا أغلقت كل المسارات بينهما؛ وفي البنية التصادمية ($A \\to C \\leftarrow B$)، يكون $A$ و $B$ مستقلين مبدئياً لكنهما يصبحان مرتبطين شرطياً عند معرفة $C$.\n- خطوات الحساب والنتيجة: في شبكة تشخيص طبي يسبب فيها المرض A والمرض B العَرَض C بصورة مستقلة، يؤدي ثبوت العَرَض C إلى نشوء ارتباط شرطي يجعل تأكيد المرض A يخفض احتمالية المرض B اللاحقة (ظاهرة التفسير البديل Explaining Away).",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).",
      "Calculate final values: In a medical diagnostic network where Disease A and Disease B independently cause Symptom C ($P(A)=0.01, P(B)=0.02, P(C|A,B)=0.95, P(C|\\neg A,\\neg B)=0.001$), observing $C=1$ induces conditional dependence where confirming Disease A reduces the posterior probability of Disease B (explaining away).",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: يكون المتغيران $X$ و $Y$ مفصولين اتجاهياً (d-separated) بمجموعة المشاهدات $Z$ إذا أغلقت كل المسارات بينهما؛ وفي البنية التصادمية ($A \\to C \\leftarrow B$)، يكون $A$ و $B$ مستقلين مبدئياً لكنهما يصبحان مرتبطين شرطياً عند معرفة $C$.",
      "حساب الناتج النهائي: في شبكة تشخيص طبي يسبب فيها المرض A والمرض B العَرَض C بصورة مستقلة، يؤدي ثبوت العَرَض C إلى نشوء ارتباط شرطي يجعل تأكيد المرض A يخفض احتمالية المرض B اللاحقة (ظاهرة التفسير البديل Explaining Away).",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: Two nodes $X$ and $Y$ are d-separated by evidence set $Z$ if all paths between them are blocked; in a v-structure ($A \\to C \\leftarrow B$), $A$ and $B$ are marginally independent but become conditionally dependent given $C$ (explaining away).",
    "hintAr": "طبق القانون الأساسي: يكون المتغيران $X$ و $Y$ مفصولين اتجاهياً (d-separated) بمجموعة المشاهدات $Z$ إذا أغلقت كل المسارات بينهما؛ وفي البنية التصادمية ($A \\to C \\leftarrow B$)، يكون $A$ و $B$ مستقلين مبدئياً لكنهما يصبحان مرتبطين شرطياً عند معرفة $C$.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "egbac_ai_data_science_ch1_ex_14",
    "titleEn": "Exercise Problem 14: Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models",
    "titleAr": "تمرين 14: خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs)",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 14] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Expectation-Maximization (EM) Algorithm for Gaussian Mixture Models. Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 14] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي (GMMs). استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).\n- Calculation & Results: For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2).",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تتناوب خوارزمية EM بين خطوة التوقع E (حساب المسؤوليات اللاحقة $\\gamma_{ik}$) وخطوة التعظيم M (تحديث المعاملات $\\mu_k$ و $\\Sigma_k$ و $\\pi_k$ بالاعتماد على المسؤوليات المحسوبة).\n- خطوات الحساب والنتيجة: لنموذج مزيج غاوسي ثنائي لتجميع قراءات أقمار صناعية، لعينة $x = 4.2$ باحتماليات مكونات $0.035$ و $0.231$ بأوزان متساوية $\\pi_1 = \\pi_2 = 0.5$، تبلغ المسؤولية اللاحقة للمكون الثاني $\\gamma_2 = \\frac{0.1155}{0.133} \\approx 0.868$ بثقة $86.8\\%$.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).",
      "Calculate final values: For a 2-component GMM clustering satellite sensor readings, a sample $x = 4.2$ with $\\mathcal{N}(4.2|2.0, 1.0) = 0.035$ and $\\mathcal{N}(4.2|5.0, 1.5) = 0.231$ under equal priors $\\pi_1 = \\pi_2 = 0.5$ receives posterior responsibility $\\gamma_2 = \\frac{0.5 \\times 0.231}{0.5 \\times 0.035 + 0.5 \\times 0.231} = \\frac{0.1155}{0.133} \\approx 0.868$ ($86.8\\%$ confidence for cluster 2).",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: تتناوب خوارزمية EM بين خطوة التوقع E (حساب المسؤوليات اللاحقة $\\gamma_{ik}$) وخطوة التعظيم M (تحديث المعاملات $\\mu_k$ و $\\Sigma_k$ و $\\pi_k$ بالاعتماد على المسؤوليات المحسوبة).",
      "حساب الناتج النهائي: لنموذج مزيج غاوسي ثنائي لتجميع قراءات أقمار صناعية، لعينة $x = 4.2$ باحتماليات مكونات $0.035$ و $0.231$ بأوزان متساوية $\\pi_1 = \\pi_2 = 0.5$، تبلغ المسؤولية اللاحقة للمكون الثاني $\\gamma_2 = \\frac{0.1155}{0.133} \\approx 0.868$ بثقة $86.8\\%$.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: The EM algorithm alternates between the E-step (computing posterior responsibilities $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\ Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$) and the M-step (updating $\\mu_k, \\Sigma_k, \\pi_k$ using the responsibilities).",
    "hintAr": "طبق القانون الأساسي: تتناوب خوارزمية EM بين خطوة التوقع E (حساب المسؤوليات اللاحقة $\\gamma_{ik}$) وخطوة التعظيم M (تحديث المعاملات $\\mu_k$ و $\\Sigma_k$ و $\\pi_k$ بالاعتماد على المسؤوليات المحسوبة).",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "egbac_ai_data_science_ch1_ex_15",
    "titleEn": "Exercise Problem 15: Variational Inference & Evidence Lower Bound (ELBO) Derivation",
    "titleAr": "تمرين 15: الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO)",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 15] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Variational Inference & Evidence Lower Bound (ELBO) Derivation. Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 15] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن الاستدلال المتغير واشتقاق الحد الأدنى لدليل البيانات (ELBO). استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.\n- Calculation & Results: Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: يُشتق الحد الأدنى لدليل البيانات (ELBO) من متباينة ينسن: $\\ln p(x) \\ge \\mathbb{E}[\\ln p(x,z)] - \\mathbb{E}[\\ln q(z)] = \\text{ELBO}$، ويحقق المعادلة $\\ln p(x) = \\text{ELBO} + D_{KL}(q \\parallel p)$.\n- خطوات الحساب والنتيجة: يؤدي تعظيم الحد الأدنى ELBO مباشرة إلى تصغير تباعد كولباك-ليبلر $D_{KL}$ لأن لوغاريتم دليل البيانات الهامشي $\\ln p(x)$ ثابت بالنسبة للمعاملات المتغيرة $\\phi$، مما يضمن أفضل تقريب للتوزيع الحقيقي.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.",
      "Calculate final values: Maximizing the ELBO directly minimizes the Kullback-Leibler divergence $D_{KL}(q_\\phi(z) \\parallel p(z|x))$ because the marginal log-evidence $\\ln p(x)$ is constant with respect to variational parameters $\\phi$, guaranteeing that optimizing ELBO yields the closest tractable approximation to the true posterior.",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: يُشتق الحد الأدنى لدليل البيانات (ELBO) من متباينة ينسن: $\\ln p(x) \\ge \\mathbb{E}[\\ln p(x,z)] - \\mathbb{E}[\\ln q(z)] = \\text{ELBO}$، ويحقق المعادلة $\\ln p(x) = \\text{ELBO} + D_{KL}(q \\parallel p)$.",
      "حساب الناتج النهائي: يؤدي تعظيم الحد الأدنى ELBO مباشرة إلى تصغير تباعد كولباك-ليبلر $D_{KL}$ لأن لوغاريتم دليل البيانات الهامشي $\\ln p(x)$ ثابت بالنسبة للمعاملات المتغيرة $\\phi$، مما يضمن أفضل تقريب للتوزيع الحقيقي.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: The Evidence Lower Bound is derived from Jensen inequality: $\\ln p(x) \\ge \\mathbb{E}_{q_\\phi(z)}[\\ln p(x,z)] - \\mathbb{E}_{q_\\phi(z)}[\\ln q_\\phi(z)] = \\text{ELBO}(\\phi)$, satisfying $\\ln p(x) = \\text{ELBO}(\\phi) + D_{KL}(q_\\phi(z) \\parallel p(z|x))$.",
    "hintAr": "طبق القانون الأساسي: يُشتق الحد الأدنى لدليل البيانات (ELBO) من متباينة ينسن: $\\ln p(x) \\ge \\mathbb{E}[\\ln p(x,z)] - \\mathbb{E}[\\ln q(z)] = \\text{ELBO}$، ويحقق المعادلة $\\ln p(x) = \\text{ELBO} + D_{KL}(q \\parallel p)$.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  }
];
