import type { SolvedProblem } from '../../../types/curriculum';

export const egbac_ai_data_science_ch3SolvedExamples: SolvedProblem[] = [
  {
    "id": "egbac_ai_data_science_ch3_solved_1",
    "titleEn": "Solved Example 1: Markov Decision Processes & Bellman Optimality Equations",
    "titleAr": "مثال محلول 1: عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 1] Design, formulate, and evaluate an AI/Data Science model architecture applying Markov Decision Processes & Bellman Optimality Equations. Specify the mathematical formulations, optimization equations, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 1] صمم واشتق وقيم معمارية نموذج ذكاء اصطناعي أو علم بيانات بتطبيق عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل. وضح الصياغات الرياضية ومعادلات التحسين وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify problem specifications and statistical constraints.\nStep 2: Formulate governing analytical equation: The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.\nStep 3: Execute numerical substitution: In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.\nStep 4: Verify convergence stability, generalization bounds, and algorithmic performance compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات المسألة والقيود الإحصائية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: معادلة بيلمان المثلى لدالة القيمة $Q^*(s, a)$ هي $Q^*(s, a) = R(s, a) + \\gamma \\sum P(s'|s, a) \\max_{a'} Q^*(s', a')$، وتشكل دالة انكماشية تتقارب حتماً لنقطة ثابتة وحيدة.\nالخطوة ٣: التعويض العددي وحساب النتائج: في مهمة ملاحة روبوت في شبكة بمعامل خصم $\\gamma = 0.90$ ومكافأة $R = +2.0$، وانتقال احتمالي $1.0$ إلى $s'$ بقيم إجراءات قصوى $\\max Q = 10.0$، فإن تحديث بيلمان يعطي $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.\nالخطوة ٤: التحقق من استقرار التقارب، حدود التعميم، وتوافق أداء النموذج.",
    "stepByStepSolutionEn": [
      "Identify system variables, loss functions, and optimization constraints.",
      "Apply formulation: The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.",
      "Perform calculation: In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "Confirm operational validity and alignment with international AI standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد متغيرات النظام، دوال الخسارة، وقيود التحسين.",
      "تطبيق المعادلة الخوارزمية: معادلة بيلمان المثلى لدالة القيمة $Q^*(s, a)$ هي $Q^*(s, a) = R(s, a) + \\gamma \\sum P(s'|s, a) \\max_{a'} Q^*(s', a')$، وتشكل دالة انكماشية تتقارب حتماً لنقطة ثابتة وحيدة.",
      "الحساب العددي الدقيق: في مهمة ملاحة روبوت في شبكة بمعامل خصم $\\gamma = 0.90$ ومكافأة $R = +2.0$، وانتقال احتمالي $1.0$ إلى $s'$ بقيم إجراءات قصوى $\\max Q = 10.0$، فإن تحديث بيلمان يعطي $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للذكاء الاصطناعي."
    ],
    "hintEn": "Recall the governing analytical relations for Markov Decision Processes & Bellman Optimality Equations.",
    "hintAr": "تذكر القوانين والعلاقات التحليلية الحاكمة لـ عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل.",
    "teacherTipEn": "Pay careful attention to vector dimensions and normalization constraints when implementing Markov Decision Processes & Bellman Optimality Equations.",
    "teacherTipAr": "انتبه جيداً لأبعاد المتجهات وشروط المعايرة والتقييس عند تطبيق عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل."
  },
  {
    "id": "egbac_ai_data_science_ch3_solved_2",
    "titleEn": "Solved Example 2: Deep Q-Networks (DQN), Experience Replay & Target Networks",
    "titleAr": "مثال محلول 2: شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 2] Design, formulate, and evaluate an AI/Data Science model architecture applying Deep Q-Networks (DQN), Experience Replay & Target Networks. Specify the mathematical formulations, optimization equations, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 2] صمم واشتق وقيم معمارية نموذج ذكاء اصطناعي أو علم بيانات بتطبيق شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف. وضح الصياغات الرياضية ومعادلات التحسين وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify problem specifications and statistical constraints.\nStep 2: Formulate governing analytical equation: DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.\nStep 3: Execute numerical substitution: Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss.\nStep 4: Verify convergence stability, generalization bounds, and algorithmic performance compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات المسألة والقيود الإحصائية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: تعالج شبكات DQN عدم استقرار التدريب بتقنيتين: مخزن إعادة التجارب (لأخذ عينات عشوائية غير مترابطة) وشبكة هدف منفصلة $\\theta^-$ تُحدّث دورياً لتثبيت أهداف بيلمان.\nالخطوة ٣: التعويض العددي وحساب النتائج: دون مخزن إعادة التجارب، تظهر العينات المتتابعة ارتباطاً زمنياً يفوق $0.92$ مما يسبب تشتت الأوزان؛ بينما يخفض أخذ العينات العشوائية من مخزن بسعة $100,000$ خطوة الارتباط الذاتي إلى $<0.03$.\nالخطوة ٤: التحقق من استقرار التقارب، حدود التعميم، وتوافق أداء النموذج.",
    "stepByStepSolutionEn": [
      "Identify system variables, loss functions, and optimization constraints.",
      "Apply formulation: DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.",
      "Perform calculation: Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss.",
      "Confirm operational validity and alignment with international AI standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد متغيرات النظام، دوال الخسارة، وقيود التحسين.",
      "تطبيق المعادلة الخوارزمية: تعالج شبكات DQN عدم استقرار التدريب بتقنيتين: مخزن إعادة التجارب (لأخذ عينات عشوائية غير مترابطة) وشبكة هدف منفصلة $\\theta^-$ تُحدّث دورياً لتثبيت أهداف بيلمان.",
      "الحساب العددي الدقيق: دون مخزن إعادة التجارب، تظهر العينات المتتابعة ارتباطاً زمنياً يفوق $0.92$ مما يسبب تشتت الأوزان؛ بينما يخفض أخذ العينات العشوائية من مخزن بسعة $100,000$ خطوة الارتباط الذاتي إلى $<0.03$.",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للذكاء الاصطناعي."
    ],
    "hintEn": "Recall the governing analytical relations for Deep Q-Networks (DQN), Experience Replay & Target Networks.",
    "hintAr": "تذكر القوانين والعلاقات التحليلية الحاكمة لـ شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف.",
    "teacherTipEn": "Pay careful attention to vector dimensions and normalization constraints when implementing Deep Q-Networks (DQN), Experience Replay & Target Networks.",
    "teacherTipAr": "انتبه جيداً لأبعاد المتجهات وشروط المعايرة والتقييس عند تطبيق شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف."
  },
  {
    "id": "egbac_ai_data_science_ch3_solved_3",
    "titleEn": "Solved Example 3: Policy Gradient Methods & Proximal Policy Optimization (PPO)",
    "titleAr": "مثال محلول 3: طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO)",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 3] Design, formulate, and evaluate an AI/Data Science model architecture applying Policy Gradient Methods & Proximal Policy Optimization (PPO). Specify the mathematical formulations, optimization equations, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 3] صمم واشتق وقيم معمارية نموذج ذكاء اصطناعي أو علم بيانات بتطبيق طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO). وضح الصياغات الرياضية ومعادلات التحسين وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify problem specifications and statistical constraints.\nStep 2: Formulate governing analytical equation: Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.\nStep 3: Execute numerical substitution: In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse.\nStep 4: Verify convergence stability, generalization bounds, and algorithmic performance compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات المسألة والقيود الإحصائية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: تمنع خوارزمية PPO القفزات الكبيرة المزعزعة للاستقرار عبر قص نسبة الاحتمال $r_t(\\theta)$ ضمن المدى $[1-\\epsilon, 1+\\epsilon]$ مضروبة في دالة الميزة التقديرية $\\hat{A}_t$.\nالخطوة ٣: التعويض العددي وحساب النتائج: في تدريب طائرة مسيرة ذاتية بمعامل قص $\\epsilon = 0.20$، أنتج إجراء بميزة موجبة $\\hat{A}_t = +4.5$ نسبة $r_t = 1.35$. وتحدد القيمة المقصوصة بـ $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 5.40$ مما يمنع انهيار السياسة.\nالخطوة ٤: التحقق من استقرار التقارب، حدود التعميم، وتوافق أداء النموذج.",
    "stepByStepSolutionEn": [
      "Identify system variables, loss functions, and optimization constraints.",
      "Apply formulation: Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.",
      "Perform calculation: In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse.",
      "Confirm operational validity and alignment with international AI standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد متغيرات النظام، دوال الخسارة، وقيود التحسين.",
      "تطبيق المعادلة الخوارزمية: تمنع خوارزمية PPO القفزات الكبيرة المزعزعة للاستقرار عبر قص نسبة الاحتمال $r_t(\\theta)$ ضمن المدى $[1-\\epsilon, 1+\\epsilon]$ مضروبة في دالة الميزة التقديرية $\\hat{A}_t$.",
      "الحساب العددي الدقيق: في تدريب طائرة مسيرة ذاتية بمعامل قص $\\epsilon = 0.20$، أنتج إجراء بميزة موجبة $\\hat{A}_t = +4.5$ نسبة $r_t = 1.35$. وتحدد القيمة المقصوصة بـ $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 5.40$ مما يمنع انهيار السياسة.",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للذكاء الاصطناعي."
    ],
    "hintEn": "Recall the governing analytical relations for Policy Gradient Methods & Proximal Policy Optimization (PPO).",
    "hintAr": "تذكر القوانين والعلاقات التحليلية الحاكمة لـ طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO).",
    "teacherTipEn": "Pay careful attention to vector dimensions and normalization constraints when implementing Policy Gradient Methods & Proximal Policy Optimization (PPO).",
    "teacherTipAr": "انتبه جيداً لأبعاد المتجهات وشروط المعايرة والتقييس عند تطبيق طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO)."
  },
  {
    "id": "egbac_ai_data_science_ch3_solved_4",
    "titleEn": "Solved Example 4: Markov Decision Processes & Bellman Optimality Equations",
    "titleAr": "مثال محلول 4: عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 4] Design, formulate, and evaluate an AI/Data Science model architecture applying Markov Decision Processes & Bellman Optimality Equations. Specify the mathematical formulations, optimization equations, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 4] صمم واشتق وقيم معمارية نموذج ذكاء اصطناعي أو علم بيانات بتطبيق عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل. وضح الصياغات الرياضية ومعادلات التحسين وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify problem specifications and statistical constraints.\nStep 2: Formulate governing analytical equation: The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.\nStep 3: Execute numerical substitution: In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.\nStep 4: Verify convergence stability, generalization bounds, and algorithmic performance compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات المسألة والقيود الإحصائية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: معادلة بيلمان المثلى لدالة القيمة $Q^*(s, a)$ هي $Q^*(s, a) = R(s, a) + \\gamma \\sum P(s'|s, a) \\max_{a'} Q^*(s', a')$، وتشكل دالة انكماشية تتقارب حتماً لنقطة ثابتة وحيدة.\nالخطوة ٣: التعويض العددي وحساب النتائج: في مهمة ملاحة روبوت في شبكة بمعامل خصم $\\gamma = 0.90$ ومكافأة $R = +2.0$، وانتقال احتمالي $1.0$ إلى $s'$ بقيم إجراءات قصوى $\\max Q = 10.0$، فإن تحديث بيلمان يعطي $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.\nالخطوة ٤: التحقق من استقرار التقارب، حدود التعميم، وتوافق أداء النموذج.",
    "stepByStepSolutionEn": [
      "Identify system variables, loss functions, and optimization constraints.",
      "Apply formulation: The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.",
      "Perform calculation: In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "Confirm operational validity and alignment with international AI standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد متغيرات النظام، دوال الخسارة، وقيود التحسين.",
      "تطبيق المعادلة الخوارزمية: معادلة بيلمان المثلى لدالة القيمة $Q^*(s, a)$ هي $Q^*(s, a) = R(s, a) + \\gamma \\sum P(s'|s, a) \\max_{a'} Q^*(s', a')$، وتشكل دالة انكماشية تتقارب حتماً لنقطة ثابتة وحيدة.",
      "الحساب العددي الدقيق: في مهمة ملاحة روبوت في شبكة بمعامل خصم $\\gamma = 0.90$ ومكافأة $R = +2.0$، وانتقال احتمالي $1.0$ إلى $s'$ بقيم إجراءات قصوى $\\max Q = 10.0$، فإن تحديث بيلمان يعطي $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للذكاء الاصطناعي."
    ],
    "hintEn": "Recall the governing analytical relations for Markov Decision Processes & Bellman Optimality Equations.",
    "hintAr": "تذكر القوانين والعلاقات التحليلية الحاكمة لـ عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل.",
    "teacherTipEn": "Pay careful attention to vector dimensions and normalization constraints when implementing Markov Decision Processes & Bellman Optimality Equations.",
    "teacherTipAr": "انتبه جيداً لأبعاد المتجهات وشروط المعايرة والتقييس عند تطبيق عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل."
  },
  {
    "id": "egbac_ai_data_science_ch3_solved_5",
    "titleEn": "Solved Example 5: Deep Q-Networks (DQN), Experience Replay & Target Networks",
    "titleAr": "مثال محلول 5: شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 5] Design, formulate, and evaluate an AI/Data Science model architecture applying Deep Q-Networks (DQN), Experience Replay & Target Networks. Specify the mathematical formulations, optimization equations, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 5] صمم واشتق وقيم معمارية نموذج ذكاء اصطناعي أو علم بيانات بتطبيق شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف. وضح الصياغات الرياضية ومعادلات التحسين وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify problem specifications and statistical constraints.\nStep 2: Formulate governing analytical equation: DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.\nStep 3: Execute numerical substitution: Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss.\nStep 4: Verify convergence stability, generalization bounds, and algorithmic performance compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات المسألة والقيود الإحصائية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: تعالج شبكات DQN عدم استقرار التدريب بتقنيتين: مخزن إعادة التجارب (لأخذ عينات عشوائية غير مترابطة) وشبكة هدف منفصلة $\\theta^-$ تُحدّث دورياً لتثبيت أهداف بيلمان.\nالخطوة ٣: التعويض العددي وحساب النتائج: دون مخزن إعادة التجارب، تظهر العينات المتتابعة ارتباطاً زمنياً يفوق $0.92$ مما يسبب تشتت الأوزان؛ بينما يخفض أخذ العينات العشوائية من مخزن بسعة $100,000$ خطوة الارتباط الذاتي إلى $<0.03$.\nالخطوة ٤: التحقق من استقرار التقارب، حدود التعميم، وتوافق أداء النموذج.",
    "stepByStepSolutionEn": [
      "Identify system variables, loss functions, and optimization constraints.",
      "Apply formulation: DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.",
      "Perform calculation: Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss.",
      "Confirm operational validity and alignment with international AI standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد متغيرات النظام، دوال الخسارة، وقيود التحسين.",
      "تطبيق المعادلة الخوارزمية: تعالج شبكات DQN عدم استقرار التدريب بتقنيتين: مخزن إعادة التجارب (لأخذ عينات عشوائية غير مترابطة) وشبكة هدف منفصلة $\\theta^-$ تُحدّث دورياً لتثبيت أهداف بيلمان.",
      "الحساب العددي الدقيق: دون مخزن إعادة التجارب، تظهر العينات المتتابعة ارتباطاً زمنياً يفوق $0.92$ مما يسبب تشتت الأوزان؛ بينما يخفض أخذ العينات العشوائية من مخزن بسعة $100,000$ خطوة الارتباط الذاتي إلى $<0.03$.",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للذكاء الاصطناعي."
    ],
    "hintEn": "Recall the governing analytical relations for Deep Q-Networks (DQN), Experience Replay & Target Networks.",
    "hintAr": "تذكر القوانين والعلاقات التحليلية الحاكمة لـ شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف.",
    "teacherTipEn": "Pay careful attention to vector dimensions and normalization constraints when implementing Deep Q-Networks (DQN), Experience Replay & Target Networks.",
    "teacherTipAr": "انتبه جيداً لأبعاد المتجهات وشروط المعايرة والتقييس عند تطبيق شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف."
  },
  {
    "id": "egbac_ai_data_science_ch3_solved_6",
    "titleEn": "Solved Example 6: Policy Gradient Methods & Proximal Policy Optimization (PPO)",
    "titleAr": "مثال محلول 6: طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO)",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 6] Design, formulate, and evaluate an AI/Data Science model architecture applying Policy Gradient Methods & Proximal Policy Optimization (PPO). Specify the mathematical formulations, optimization equations, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 6] صمم واشتق وقيم معمارية نموذج ذكاء اصطناعي أو علم بيانات بتطبيق طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO). وضح الصياغات الرياضية ومعادلات التحسين وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify problem specifications and statistical constraints.\nStep 2: Formulate governing analytical equation: Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.\nStep 3: Execute numerical substitution: In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse.\nStep 4: Verify convergence stability, generalization bounds, and algorithmic performance compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات المسألة والقيود الإحصائية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: تمنع خوارزمية PPO القفزات الكبيرة المزعزعة للاستقرار عبر قص نسبة الاحتمال $r_t(\\theta)$ ضمن المدى $[1-\\epsilon, 1+\\epsilon]$ مضروبة في دالة الميزة التقديرية $\\hat{A}_t$.\nالخطوة ٣: التعويض العددي وحساب النتائج: في تدريب طائرة مسيرة ذاتية بمعامل قص $\\epsilon = 0.20$، أنتج إجراء بميزة موجبة $\\hat{A}_t = +4.5$ نسبة $r_t = 1.35$. وتحدد القيمة المقصوصة بـ $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 5.40$ مما يمنع انهيار السياسة.\nالخطوة ٤: التحقق من استقرار التقارب، حدود التعميم، وتوافق أداء النموذج.",
    "stepByStepSolutionEn": [
      "Identify system variables, loss functions, and optimization constraints.",
      "Apply formulation: Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.",
      "Perform calculation: In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse.",
      "Confirm operational validity and alignment with international AI standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد متغيرات النظام، دوال الخسارة، وقيود التحسين.",
      "تطبيق المعادلة الخوارزمية: تمنع خوارزمية PPO القفزات الكبيرة المزعزعة للاستقرار عبر قص نسبة الاحتمال $r_t(\\theta)$ ضمن المدى $[1-\\epsilon, 1+\\epsilon]$ مضروبة في دالة الميزة التقديرية $\\hat{A}_t$.",
      "الحساب العددي الدقيق: في تدريب طائرة مسيرة ذاتية بمعامل قص $\\epsilon = 0.20$، أنتج إجراء بميزة موجبة $\\hat{A}_t = +4.5$ نسبة $r_t = 1.35$. وتحدد القيمة المقصوصة بـ $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 5.40$ مما يمنع انهيار السياسة.",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للذكاء الاصطناعي."
    ],
    "hintEn": "Recall the governing analytical relations for Policy Gradient Methods & Proximal Policy Optimization (PPO).",
    "hintAr": "تذكر القوانين والعلاقات التحليلية الحاكمة لـ طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO).",
    "teacherTipEn": "Pay careful attention to vector dimensions and normalization constraints when implementing Policy Gradient Methods & Proximal Policy Optimization (PPO).",
    "teacherTipAr": "انتبه جيداً لأبعاد المتجهات وشروط المعايرة والتقييس عند تطبيق طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO)."
  },
  {
    "id": "egbac_ai_data_science_ch3_solved_7",
    "titleEn": "Solved Example 7: Markov Decision Processes & Bellman Optimality Equations",
    "titleAr": "مثال محلول 7: عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 7] Design, formulate, and evaluate an AI/Data Science model architecture applying Markov Decision Processes & Bellman Optimality Equations. Specify the mathematical formulations, optimization equations, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 7] صمم واشتق وقيم معمارية نموذج ذكاء اصطناعي أو علم بيانات بتطبيق عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل. وضح الصياغات الرياضية ومعادلات التحسين وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify problem specifications and statistical constraints.\nStep 2: Formulate governing analytical equation: The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.\nStep 3: Execute numerical substitution: In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.\nStep 4: Verify convergence stability, generalization bounds, and algorithmic performance compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات المسألة والقيود الإحصائية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: معادلة بيلمان المثلى لدالة القيمة $Q^*(s, a)$ هي $Q^*(s, a) = R(s, a) + \\gamma \\sum P(s'|s, a) \\max_{a'} Q^*(s', a')$، وتشكل دالة انكماشية تتقارب حتماً لنقطة ثابتة وحيدة.\nالخطوة ٣: التعويض العددي وحساب النتائج: في مهمة ملاحة روبوت في شبكة بمعامل خصم $\\gamma = 0.90$ ومكافأة $R = +2.0$، وانتقال احتمالي $1.0$ إلى $s'$ بقيم إجراءات قصوى $\\max Q = 10.0$، فإن تحديث بيلمان يعطي $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.\nالخطوة ٤: التحقق من استقرار التقارب، حدود التعميم، وتوافق أداء النموذج.",
    "stepByStepSolutionEn": [
      "Identify system variables, loss functions, and optimization constraints.",
      "Apply formulation: The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.",
      "Perform calculation: In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "Confirm operational validity and alignment with international AI standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد متغيرات النظام، دوال الخسارة، وقيود التحسين.",
      "تطبيق المعادلة الخوارزمية: معادلة بيلمان المثلى لدالة القيمة $Q^*(s, a)$ هي $Q^*(s, a) = R(s, a) + \\gamma \\sum P(s'|s, a) \\max_{a'} Q^*(s', a')$، وتشكل دالة انكماشية تتقارب حتماً لنقطة ثابتة وحيدة.",
      "الحساب العددي الدقيق: في مهمة ملاحة روبوت في شبكة بمعامل خصم $\\gamma = 0.90$ ومكافأة $R = +2.0$، وانتقال احتمالي $1.0$ إلى $s'$ بقيم إجراءات قصوى $\\max Q = 10.0$، فإن تحديث بيلمان يعطي $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للذكاء الاصطناعي."
    ],
    "hintEn": "Recall the governing analytical relations for Markov Decision Processes & Bellman Optimality Equations.",
    "hintAr": "تذكر القوانين والعلاقات التحليلية الحاكمة لـ عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل.",
    "teacherTipEn": "Pay careful attention to vector dimensions and normalization constraints when implementing Markov Decision Processes & Bellman Optimality Equations.",
    "teacherTipAr": "انتبه جيداً لأبعاد المتجهات وشروط المعايرة والتقييس عند تطبيق عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل."
  },
  {
    "id": "egbac_ai_data_science_ch3_solved_8",
    "titleEn": "Solved Example 8: Deep Q-Networks (DQN), Experience Replay & Target Networks",
    "titleAr": "مثال محلول 8: شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 8] Design, formulate, and evaluate an AI/Data Science model architecture applying Deep Q-Networks (DQN), Experience Replay & Target Networks. Specify the mathematical formulations, optimization equations, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 8] صمم واشتق وقيم معمارية نموذج ذكاء اصطناعي أو علم بيانات بتطبيق شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف. وضح الصياغات الرياضية ومعادلات التحسين وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify problem specifications and statistical constraints.\nStep 2: Formulate governing analytical equation: DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.\nStep 3: Execute numerical substitution: Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss.\nStep 4: Verify convergence stability, generalization bounds, and algorithmic performance compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات المسألة والقيود الإحصائية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: تعالج شبكات DQN عدم استقرار التدريب بتقنيتين: مخزن إعادة التجارب (لأخذ عينات عشوائية غير مترابطة) وشبكة هدف منفصلة $\\theta^-$ تُحدّث دورياً لتثبيت أهداف بيلمان.\nالخطوة ٣: التعويض العددي وحساب النتائج: دون مخزن إعادة التجارب، تظهر العينات المتتابعة ارتباطاً زمنياً يفوق $0.92$ مما يسبب تشتت الأوزان؛ بينما يخفض أخذ العينات العشوائية من مخزن بسعة $100,000$ خطوة الارتباط الذاتي إلى $<0.03$.\nالخطوة ٤: التحقق من استقرار التقارب، حدود التعميم، وتوافق أداء النموذج.",
    "stepByStepSolutionEn": [
      "Identify system variables, loss functions, and optimization constraints.",
      "Apply formulation: DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.",
      "Perform calculation: Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss.",
      "Confirm operational validity and alignment with international AI standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد متغيرات النظام، دوال الخسارة، وقيود التحسين.",
      "تطبيق المعادلة الخوارزمية: تعالج شبكات DQN عدم استقرار التدريب بتقنيتين: مخزن إعادة التجارب (لأخذ عينات عشوائية غير مترابطة) وشبكة هدف منفصلة $\\theta^-$ تُحدّث دورياً لتثبيت أهداف بيلمان.",
      "الحساب العددي الدقيق: دون مخزن إعادة التجارب، تظهر العينات المتتابعة ارتباطاً زمنياً يفوق $0.92$ مما يسبب تشتت الأوزان؛ بينما يخفض أخذ العينات العشوائية من مخزن بسعة $100,000$ خطوة الارتباط الذاتي إلى $<0.03$.",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للذكاء الاصطناعي."
    ],
    "hintEn": "Recall the governing analytical relations for Deep Q-Networks (DQN), Experience Replay & Target Networks.",
    "hintAr": "تذكر القوانين والعلاقات التحليلية الحاكمة لـ شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف.",
    "teacherTipEn": "Pay careful attention to vector dimensions and normalization constraints when implementing Deep Q-Networks (DQN), Experience Replay & Target Networks.",
    "teacherTipAr": "انتبه جيداً لأبعاد المتجهات وشروط المعايرة والتقييس عند تطبيق شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف."
  },
  {
    "id": "egbac_ai_data_science_ch3_solved_9",
    "titleEn": "Solved Example 9: Policy Gradient Methods & Proximal Policy Optimization (PPO)",
    "titleAr": "مثال محلول 9: طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO)",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 9] Design, formulate, and evaluate an AI/Data Science model architecture applying Policy Gradient Methods & Proximal Policy Optimization (PPO). Specify the mathematical formulations, optimization equations, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 9] صمم واشتق وقيم معمارية نموذج ذكاء اصطناعي أو علم بيانات بتطبيق طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO). وضح الصياغات الرياضية ومعادلات التحسين وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify problem specifications and statistical constraints.\nStep 2: Formulate governing analytical equation: Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.\nStep 3: Execute numerical substitution: In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse.\nStep 4: Verify convergence stability, generalization bounds, and algorithmic performance compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات المسألة والقيود الإحصائية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: تمنع خوارزمية PPO القفزات الكبيرة المزعزعة للاستقرار عبر قص نسبة الاحتمال $r_t(\\theta)$ ضمن المدى $[1-\\epsilon, 1+\\epsilon]$ مضروبة في دالة الميزة التقديرية $\\hat{A}_t$.\nالخطوة ٣: التعويض العددي وحساب النتائج: في تدريب طائرة مسيرة ذاتية بمعامل قص $\\epsilon = 0.20$، أنتج إجراء بميزة موجبة $\\hat{A}_t = +4.5$ نسبة $r_t = 1.35$. وتحدد القيمة المقصوصة بـ $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 5.40$ مما يمنع انهيار السياسة.\nالخطوة ٤: التحقق من استقرار التقارب، حدود التعميم، وتوافق أداء النموذج.",
    "stepByStepSolutionEn": [
      "Identify system variables, loss functions, and optimization constraints.",
      "Apply formulation: Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.",
      "Perform calculation: In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse.",
      "Confirm operational validity and alignment with international AI standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد متغيرات النظام، دوال الخسارة، وقيود التحسين.",
      "تطبيق المعادلة الخوارزمية: تمنع خوارزمية PPO القفزات الكبيرة المزعزعة للاستقرار عبر قص نسبة الاحتمال $r_t(\\theta)$ ضمن المدى $[1-\\epsilon, 1+\\epsilon]$ مضروبة في دالة الميزة التقديرية $\\hat{A}_t$.",
      "الحساب العددي الدقيق: في تدريب طائرة مسيرة ذاتية بمعامل قص $\\epsilon = 0.20$، أنتج إجراء بميزة موجبة $\\hat{A}_t = +4.5$ نسبة $r_t = 1.35$. وتحدد القيمة المقصوصة بـ $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 5.40$ مما يمنع انهيار السياسة.",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للذكاء الاصطناعي."
    ],
    "hintEn": "Recall the governing analytical relations for Policy Gradient Methods & Proximal Policy Optimization (PPO).",
    "hintAr": "تذكر القوانين والعلاقات التحليلية الحاكمة لـ طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO).",
    "teacherTipEn": "Pay careful attention to vector dimensions and normalization constraints when implementing Policy Gradient Methods & Proximal Policy Optimization (PPO).",
    "teacherTipAr": "انتبه جيداً لأبعاد المتجهات وشروط المعايرة والتقييس عند تطبيق طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO)."
  },
  {
    "id": "egbac_ai_data_science_ch3_solved_10",
    "titleEn": "Solved Example 10: Markov Decision Processes & Bellman Optimality Equations",
    "titleAr": "مثال محلول 10: عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 10] Design, formulate, and evaluate an AI/Data Science model architecture applying Markov Decision Processes & Bellman Optimality Equations. Specify the mathematical formulations, optimization equations, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 10] صمم واشتق وقيم معمارية نموذج ذكاء اصطناعي أو علم بيانات بتطبيق عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل. وضح الصياغات الرياضية ومعادلات التحسين وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify problem specifications and statistical constraints.\nStep 2: Formulate governing analytical equation: The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.\nStep 3: Execute numerical substitution: In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.\nStep 4: Verify convergence stability, generalization bounds, and algorithmic performance compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات المسألة والقيود الإحصائية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: معادلة بيلمان المثلى لدالة القيمة $Q^*(s, a)$ هي $Q^*(s, a) = R(s, a) + \\gamma \\sum P(s'|s, a) \\max_{a'} Q^*(s', a')$، وتشكل دالة انكماشية تتقارب حتماً لنقطة ثابتة وحيدة.\nالخطوة ٣: التعويض العددي وحساب النتائج: في مهمة ملاحة روبوت في شبكة بمعامل خصم $\\gamma = 0.90$ ومكافأة $R = +2.0$، وانتقال احتمالي $1.0$ إلى $s'$ بقيم إجراءات قصوى $\\max Q = 10.0$، فإن تحديث بيلمان يعطي $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.\nالخطوة ٤: التحقق من استقرار التقارب، حدود التعميم، وتوافق أداء النموذج.",
    "stepByStepSolutionEn": [
      "Identify system variables, loss functions, and optimization constraints.",
      "Apply formulation: The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.",
      "Perform calculation: In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "Confirm operational validity and alignment with international AI standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد متغيرات النظام، دوال الخسارة، وقيود التحسين.",
      "تطبيق المعادلة الخوارزمية: معادلة بيلمان المثلى لدالة القيمة $Q^*(s, a)$ هي $Q^*(s, a) = R(s, a) + \\gamma \\sum P(s'|s, a) \\max_{a'} Q^*(s', a')$، وتشكل دالة انكماشية تتقارب حتماً لنقطة ثابتة وحيدة.",
      "الحساب العددي الدقيق: في مهمة ملاحة روبوت في شبكة بمعامل خصم $\\gamma = 0.90$ ومكافأة $R = +2.0$، وانتقال احتمالي $1.0$ إلى $s'$ بقيم إجراءات قصوى $\\max Q = 10.0$، فإن تحديث بيلمان يعطي $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للذكاء الاصطناعي."
    ],
    "hintEn": "Recall the governing analytical relations for Markov Decision Processes & Bellman Optimality Equations.",
    "hintAr": "تذكر القوانين والعلاقات التحليلية الحاكمة لـ عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل.",
    "teacherTipEn": "Pay careful attention to vector dimensions and normalization constraints when implementing Markov Decision Processes & Bellman Optimality Equations.",
    "teacherTipAr": "انتبه جيداً لأبعاد المتجهات وشروط المعايرة والتقييس عند تطبيق عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل."
  }
];

export const egbac_ai_data_science_ch3ExerciseProblems: SolvedProblem[] = [
  {
    "id": "egbac_ai_data_science_ch3_ex_1",
    "titleEn": "Exercise Problem 1: Markov Decision Processes & Bellman Optimality Equations",
    "titleAr": "تمرين 1: عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 1] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Markov Decision Processes & Bellman Optimality Equations. Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 1] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.\n- Calculation & Results: In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: معادلة بيلمان المثلى لدالة القيمة $Q^*(s, a)$ هي $Q^*(s, a) = R(s, a) + \\gamma \\sum P(s'|s, a) \\max_{a'} Q^*(s', a')$، وتشكل دالة انكماشية تتقارب حتماً لنقطة ثابتة وحيدة.\n- خطوات الحساب والنتيجة: في مهمة ملاحة روبوت في شبكة بمعامل خصم $\\gamma = 0.90$ ومكافأة $R = +2.0$، وانتقال احتمالي $1.0$ إلى $s'$ بقيم إجراءات قصوى $\\max Q = 10.0$، فإن تحديث بيلمان يعطي $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.",
      "Calculate final values: In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: معادلة بيلمان المثلى لدالة القيمة $Q^*(s, a)$ هي $Q^*(s, a) = R(s, a) + \\gamma \\sum P(s'|s, a) \\max_{a'} Q^*(s', a')$، وتشكل دالة انكماشية تتقارب حتماً لنقطة ثابتة وحيدة.",
      "حساب الناتج النهائي: في مهمة ملاحة روبوت في شبكة بمعامل خصم $\\gamma = 0.90$ ومكافأة $R = +2.0$، وانتقال احتمالي $1.0$ إلى $s'$ بقيم إجراءات قصوى $\\max Q = 10.0$، فإن تحديث بيلمان يعطي $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.",
    "hintAr": "طبق القانون الأساسي: معادلة بيلمان المثلى لدالة القيمة $Q^*(s, a)$ هي $Q^*(s, a) = R(s, a) + \\gamma \\sum P(s'|s, a) \\max_{a'} Q^*(s', a')$، وتشكل دالة انكماشية تتقارب حتماً لنقطة ثابتة وحيدة.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "egbac_ai_data_science_ch3_ex_2",
    "titleEn": "Exercise Problem 2: Deep Q-Networks (DQN), Experience Replay & Target Networks",
    "titleAr": "تمرين 2: شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 2] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Deep Q-Networks (DQN), Experience Replay & Target Networks. Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 2] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.\n- Calculation & Results: Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تعالج شبكات DQN عدم استقرار التدريب بتقنيتين: مخزن إعادة التجارب (لأخذ عينات عشوائية غير مترابطة) وشبكة هدف منفصلة $\\theta^-$ تُحدّث دورياً لتثبيت أهداف بيلمان.\n- خطوات الحساب والنتيجة: دون مخزن إعادة التجارب، تظهر العينات المتتابعة ارتباطاً زمنياً يفوق $0.92$ مما يسبب تشتت الأوزان؛ بينما يخفض أخذ العينات العشوائية من مخزن بسعة $100,000$ خطوة الارتباط الذاتي إلى $<0.03$.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.",
      "Calculate final values: Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss.",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: تعالج شبكات DQN عدم استقرار التدريب بتقنيتين: مخزن إعادة التجارب (لأخذ عينات عشوائية غير مترابطة) وشبكة هدف منفصلة $\\theta^-$ تُحدّث دورياً لتثبيت أهداف بيلمان.",
      "حساب الناتج النهائي: دون مخزن إعادة التجارب، تظهر العينات المتتابعة ارتباطاً زمنياً يفوق $0.92$ مما يسبب تشتت الأوزان؛ بينما يخفض أخذ العينات العشوائية من مخزن بسعة $100,000$ خطوة الارتباط الذاتي إلى $<0.03$.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.",
    "hintAr": "طبق القانون الأساسي: تعالج شبكات DQN عدم استقرار التدريب بتقنيتين: مخزن إعادة التجارب (لأخذ عينات عشوائية غير مترابطة) وشبكة هدف منفصلة $\\theta^-$ تُحدّث دورياً لتثبيت أهداف بيلمان.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "egbac_ai_data_science_ch3_ex_3",
    "titleEn": "Exercise Problem 3: Policy Gradient Methods & Proximal Policy Optimization (PPO)",
    "titleAr": "تمرين 3: طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO)",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 3] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Policy Gradient Methods & Proximal Policy Optimization (PPO). Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 3] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO). استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.\n- Calculation & Results: In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تمنع خوارزمية PPO القفزات الكبيرة المزعزعة للاستقرار عبر قص نسبة الاحتمال $r_t(\\theta)$ ضمن المدى $[1-\\epsilon, 1+\\epsilon]$ مضروبة في دالة الميزة التقديرية $\\hat{A}_t$.\n- خطوات الحساب والنتيجة: في تدريب طائرة مسيرة ذاتية بمعامل قص $\\epsilon = 0.20$، أنتج إجراء بميزة موجبة $\\hat{A}_t = +4.5$ نسبة $r_t = 1.35$. وتحدد القيمة المقصوصة بـ $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 5.40$ مما يمنع انهيار السياسة.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.",
      "Calculate final values: In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse.",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: تمنع خوارزمية PPO القفزات الكبيرة المزعزعة للاستقرار عبر قص نسبة الاحتمال $r_t(\\theta)$ ضمن المدى $[1-\\epsilon, 1+\\epsilon]$ مضروبة في دالة الميزة التقديرية $\\hat{A}_t$.",
      "حساب الناتج النهائي: في تدريب طائرة مسيرة ذاتية بمعامل قص $\\epsilon = 0.20$، أنتج إجراء بميزة موجبة $\\hat{A}_t = +4.5$ نسبة $r_t = 1.35$. وتحدد القيمة المقصوصة بـ $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 5.40$ مما يمنع انهيار السياسة.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.",
    "hintAr": "طبق القانون الأساسي: تمنع خوارزمية PPO القفزات الكبيرة المزعزعة للاستقرار عبر قص نسبة الاحتمال $r_t(\\theta)$ ضمن المدى $[1-\\epsilon, 1+\\epsilon]$ مضروبة في دالة الميزة التقديرية $\\hat{A}_t$.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "egbac_ai_data_science_ch3_ex_4",
    "titleEn": "Exercise Problem 4: Markov Decision Processes & Bellman Optimality Equations",
    "titleAr": "تمرين 4: عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 4] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Markov Decision Processes & Bellman Optimality Equations. Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 4] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.\n- Calculation & Results: In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: معادلة بيلمان المثلى لدالة القيمة $Q^*(s, a)$ هي $Q^*(s, a) = R(s, a) + \\gamma \\sum P(s'|s, a) \\max_{a'} Q^*(s', a')$، وتشكل دالة انكماشية تتقارب حتماً لنقطة ثابتة وحيدة.\n- خطوات الحساب والنتيجة: في مهمة ملاحة روبوت في شبكة بمعامل خصم $\\gamma = 0.90$ ومكافأة $R = +2.0$، وانتقال احتمالي $1.0$ إلى $s'$ بقيم إجراءات قصوى $\\max Q = 10.0$، فإن تحديث بيلمان يعطي $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.",
      "Calculate final values: In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: معادلة بيلمان المثلى لدالة القيمة $Q^*(s, a)$ هي $Q^*(s, a) = R(s, a) + \\gamma \\sum P(s'|s, a) \\max_{a'} Q^*(s', a')$، وتشكل دالة انكماشية تتقارب حتماً لنقطة ثابتة وحيدة.",
      "حساب الناتج النهائي: في مهمة ملاحة روبوت في شبكة بمعامل خصم $\\gamma = 0.90$ ومكافأة $R = +2.0$، وانتقال احتمالي $1.0$ إلى $s'$ بقيم إجراءات قصوى $\\max Q = 10.0$، فإن تحديث بيلمان يعطي $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.",
    "hintAr": "طبق القانون الأساسي: معادلة بيلمان المثلى لدالة القيمة $Q^*(s, a)$ هي $Q^*(s, a) = R(s, a) + \\gamma \\sum P(s'|s, a) \\max_{a'} Q^*(s', a')$، وتشكل دالة انكماشية تتقارب حتماً لنقطة ثابتة وحيدة.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "egbac_ai_data_science_ch3_ex_5",
    "titleEn": "Exercise Problem 5: Deep Q-Networks (DQN), Experience Replay & Target Networks",
    "titleAr": "تمرين 5: شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 5] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Deep Q-Networks (DQN), Experience Replay & Target Networks. Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 5] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.\n- Calculation & Results: Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تعالج شبكات DQN عدم استقرار التدريب بتقنيتين: مخزن إعادة التجارب (لأخذ عينات عشوائية غير مترابطة) وشبكة هدف منفصلة $\\theta^-$ تُحدّث دورياً لتثبيت أهداف بيلمان.\n- خطوات الحساب والنتيجة: دون مخزن إعادة التجارب، تظهر العينات المتتابعة ارتباطاً زمنياً يفوق $0.92$ مما يسبب تشتت الأوزان؛ بينما يخفض أخذ العينات العشوائية من مخزن بسعة $100,000$ خطوة الارتباط الذاتي إلى $<0.03$.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.",
      "Calculate final values: Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss.",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: تعالج شبكات DQN عدم استقرار التدريب بتقنيتين: مخزن إعادة التجارب (لأخذ عينات عشوائية غير مترابطة) وشبكة هدف منفصلة $\\theta^-$ تُحدّث دورياً لتثبيت أهداف بيلمان.",
      "حساب الناتج النهائي: دون مخزن إعادة التجارب، تظهر العينات المتتابعة ارتباطاً زمنياً يفوق $0.92$ مما يسبب تشتت الأوزان؛ بينما يخفض أخذ العينات العشوائية من مخزن بسعة $100,000$ خطوة الارتباط الذاتي إلى $<0.03$.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.",
    "hintAr": "طبق القانون الأساسي: تعالج شبكات DQN عدم استقرار التدريب بتقنيتين: مخزن إعادة التجارب (لأخذ عينات عشوائية غير مترابطة) وشبكة هدف منفصلة $\\theta^-$ تُحدّث دورياً لتثبيت أهداف بيلمان.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "egbac_ai_data_science_ch3_ex_6",
    "titleEn": "Exercise Problem 6: Policy Gradient Methods & Proximal Policy Optimization (PPO)",
    "titleAr": "تمرين 6: طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO)",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 6] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Policy Gradient Methods & Proximal Policy Optimization (PPO). Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 6] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO). استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.\n- Calculation & Results: In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تمنع خوارزمية PPO القفزات الكبيرة المزعزعة للاستقرار عبر قص نسبة الاحتمال $r_t(\\theta)$ ضمن المدى $[1-\\epsilon, 1+\\epsilon]$ مضروبة في دالة الميزة التقديرية $\\hat{A}_t$.\n- خطوات الحساب والنتيجة: في تدريب طائرة مسيرة ذاتية بمعامل قص $\\epsilon = 0.20$، أنتج إجراء بميزة موجبة $\\hat{A}_t = +4.5$ نسبة $r_t = 1.35$. وتحدد القيمة المقصوصة بـ $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 5.40$ مما يمنع انهيار السياسة.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.",
      "Calculate final values: In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse.",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: تمنع خوارزمية PPO القفزات الكبيرة المزعزعة للاستقرار عبر قص نسبة الاحتمال $r_t(\\theta)$ ضمن المدى $[1-\\epsilon, 1+\\epsilon]$ مضروبة في دالة الميزة التقديرية $\\hat{A}_t$.",
      "حساب الناتج النهائي: في تدريب طائرة مسيرة ذاتية بمعامل قص $\\epsilon = 0.20$، أنتج إجراء بميزة موجبة $\\hat{A}_t = +4.5$ نسبة $r_t = 1.35$. وتحدد القيمة المقصوصة بـ $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 5.40$ مما يمنع انهيار السياسة.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.",
    "hintAr": "طبق القانون الأساسي: تمنع خوارزمية PPO القفزات الكبيرة المزعزعة للاستقرار عبر قص نسبة الاحتمال $r_t(\\theta)$ ضمن المدى $[1-\\epsilon, 1+\\epsilon]$ مضروبة في دالة الميزة التقديرية $\\hat{A}_t$.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "egbac_ai_data_science_ch3_ex_7",
    "titleEn": "Exercise Problem 7: Markov Decision Processes & Bellman Optimality Equations",
    "titleAr": "تمرين 7: عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 7] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Markov Decision Processes & Bellman Optimality Equations. Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 7] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.\n- Calculation & Results: In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: معادلة بيلمان المثلى لدالة القيمة $Q^*(s, a)$ هي $Q^*(s, a) = R(s, a) + \\gamma \\sum P(s'|s, a) \\max_{a'} Q^*(s', a')$، وتشكل دالة انكماشية تتقارب حتماً لنقطة ثابتة وحيدة.\n- خطوات الحساب والنتيجة: في مهمة ملاحة روبوت في شبكة بمعامل خصم $\\gamma = 0.90$ ومكافأة $R = +2.0$، وانتقال احتمالي $1.0$ إلى $s'$ بقيم إجراءات قصوى $\\max Q = 10.0$، فإن تحديث بيلمان يعطي $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.",
      "Calculate final values: In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: معادلة بيلمان المثلى لدالة القيمة $Q^*(s, a)$ هي $Q^*(s, a) = R(s, a) + \\gamma \\sum P(s'|s, a) \\max_{a'} Q^*(s', a')$، وتشكل دالة انكماشية تتقارب حتماً لنقطة ثابتة وحيدة.",
      "حساب الناتج النهائي: في مهمة ملاحة روبوت في شبكة بمعامل خصم $\\gamma = 0.90$ ومكافأة $R = +2.0$، وانتقال احتمالي $1.0$ إلى $s'$ بقيم إجراءات قصوى $\\max Q = 10.0$، فإن تحديث بيلمان يعطي $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.",
    "hintAr": "طبق القانون الأساسي: معادلة بيلمان المثلى لدالة القيمة $Q^*(s, a)$ هي $Q^*(s, a) = R(s, a) + \\gamma \\sum P(s'|s, a) \\max_{a'} Q^*(s', a')$، وتشكل دالة انكماشية تتقارب حتماً لنقطة ثابتة وحيدة.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "egbac_ai_data_science_ch3_ex_8",
    "titleEn": "Exercise Problem 8: Deep Q-Networks (DQN), Experience Replay & Target Networks",
    "titleAr": "تمرين 8: شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 8] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Deep Q-Networks (DQN), Experience Replay & Target Networks. Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 8] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.\n- Calculation & Results: Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تعالج شبكات DQN عدم استقرار التدريب بتقنيتين: مخزن إعادة التجارب (لأخذ عينات عشوائية غير مترابطة) وشبكة هدف منفصلة $\\theta^-$ تُحدّث دورياً لتثبيت أهداف بيلمان.\n- خطوات الحساب والنتيجة: دون مخزن إعادة التجارب، تظهر العينات المتتابعة ارتباطاً زمنياً يفوق $0.92$ مما يسبب تشتت الأوزان؛ بينما يخفض أخذ العينات العشوائية من مخزن بسعة $100,000$ خطوة الارتباط الذاتي إلى $<0.03$.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.",
      "Calculate final values: Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss.",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: تعالج شبكات DQN عدم استقرار التدريب بتقنيتين: مخزن إعادة التجارب (لأخذ عينات عشوائية غير مترابطة) وشبكة هدف منفصلة $\\theta^-$ تُحدّث دورياً لتثبيت أهداف بيلمان.",
      "حساب الناتج النهائي: دون مخزن إعادة التجارب، تظهر العينات المتتابعة ارتباطاً زمنياً يفوق $0.92$ مما يسبب تشتت الأوزان؛ بينما يخفض أخذ العينات العشوائية من مخزن بسعة $100,000$ خطوة الارتباط الذاتي إلى $<0.03$.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.",
    "hintAr": "طبق القانون الأساسي: تعالج شبكات DQN عدم استقرار التدريب بتقنيتين: مخزن إعادة التجارب (لأخذ عينات عشوائية غير مترابطة) وشبكة هدف منفصلة $\\theta^-$ تُحدّث دورياً لتثبيت أهداف بيلمان.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "egbac_ai_data_science_ch3_ex_9",
    "titleEn": "Exercise Problem 9: Policy Gradient Methods & Proximal Policy Optimization (PPO)",
    "titleAr": "تمرين 9: طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO)",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 9] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Policy Gradient Methods & Proximal Policy Optimization (PPO). Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 9] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO). استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.\n- Calculation & Results: In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تمنع خوارزمية PPO القفزات الكبيرة المزعزعة للاستقرار عبر قص نسبة الاحتمال $r_t(\\theta)$ ضمن المدى $[1-\\epsilon, 1+\\epsilon]$ مضروبة في دالة الميزة التقديرية $\\hat{A}_t$.\n- خطوات الحساب والنتيجة: في تدريب طائرة مسيرة ذاتية بمعامل قص $\\epsilon = 0.20$، أنتج إجراء بميزة موجبة $\\hat{A}_t = +4.5$ نسبة $r_t = 1.35$. وتحدد القيمة المقصوصة بـ $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 5.40$ مما يمنع انهيار السياسة.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.",
      "Calculate final values: In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse.",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: تمنع خوارزمية PPO القفزات الكبيرة المزعزعة للاستقرار عبر قص نسبة الاحتمال $r_t(\\theta)$ ضمن المدى $[1-\\epsilon, 1+\\epsilon]$ مضروبة في دالة الميزة التقديرية $\\hat{A}_t$.",
      "حساب الناتج النهائي: في تدريب طائرة مسيرة ذاتية بمعامل قص $\\epsilon = 0.20$، أنتج إجراء بميزة موجبة $\\hat{A}_t = +4.5$ نسبة $r_t = 1.35$. وتحدد القيمة المقصوصة بـ $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 5.40$ مما يمنع انهيار السياسة.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.",
    "hintAr": "طبق القانون الأساسي: تمنع خوارزمية PPO القفزات الكبيرة المزعزعة للاستقرار عبر قص نسبة الاحتمال $r_t(\\theta)$ ضمن المدى $[1-\\epsilon, 1+\\epsilon]$ مضروبة في دالة الميزة التقديرية $\\hat{A}_t$.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "egbac_ai_data_science_ch3_ex_10",
    "titleEn": "Exercise Problem 10: Markov Decision Processes & Bellman Optimality Equations",
    "titleAr": "تمرين 10: عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 10] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Markov Decision Processes & Bellman Optimality Equations. Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 10] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.\n- Calculation & Results: In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: معادلة بيلمان المثلى لدالة القيمة $Q^*(s, a)$ هي $Q^*(s, a) = R(s, a) + \\gamma \\sum P(s'|s, a) \\max_{a'} Q^*(s', a')$، وتشكل دالة انكماشية تتقارب حتماً لنقطة ثابتة وحيدة.\n- خطوات الحساب والنتيجة: في مهمة ملاحة روبوت في شبكة بمعامل خصم $\\gamma = 0.90$ ومكافأة $R = +2.0$، وانتقال احتمالي $1.0$ إلى $s'$ بقيم إجراءات قصوى $\\max Q = 10.0$، فإن تحديث بيلمان يعطي $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.",
      "Calculate final values: In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: معادلة بيلمان المثلى لدالة القيمة $Q^*(s, a)$ هي $Q^*(s, a) = R(s, a) + \\gamma \\sum P(s'|s, a) \\max_{a'} Q^*(s', a')$، وتشكل دالة انكماشية تتقارب حتماً لنقطة ثابتة وحيدة.",
      "حساب الناتج النهائي: في مهمة ملاحة روبوت في شبكة بمعامل خصم $\\gamma = 0.90$ ومكافأة $R = +2.0$، وانتقال احتمالي $1.0$ إلى $s'$ بقيم إجراءات قصوى $\\max Q = 10.0$، فإن تحديث بيلمان يعطي $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.",
    "hintAr": "طبق القانون الأساسي: معادلة بيلمان المثلى لدالة القيمة $Q^*(s, a)$ هي $Q^*(s, a) = R(s, a) + \\gamma \\sum P(s'|s, a) \\max_{a'} Q^*(s', a')$، وتشكل دالة انكماشية تتقارب حتماً لنقطة ثابتة وحيدة.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "egbac_ai_data_science_ch3_ex_11",
    "titleEn": "Exercise Problem 11: Deep Q-Networks (DQN), Experience Replay & Target Networks",
    "titleAr": "تمرين 11: شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 11] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Deep Q-Networks (DQN), Experience Replay & Target Networks. Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 11] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.\n- Calculation & Results: Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تعالج شبكات DQN عدم استقرار التدريب بتقنيتين: مخزن إعادة التجارب (لأخذ عينات عشوائية غير مترابطة) وشبكة هدف منفصلة $\\theta^-$ تُحدّث دورياً لتثبيت أهداف بيلمان.\n- خطوات الحساب والنتيجة: دون مخزن إعادة التجارب، تظهر العينات المتتابعة ارتباطاً زمنياً يفوق $0.92$ مما يسبب تشتت الأوزان؛ بينما يخفض أخذ العينات العشوائية من مخزن بسعة $100,000$ خطوة الارتباط الذاتي إلى $<0.03$.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.",
      "Calculate final values: Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss.",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: تعالج شبكات DQN عدم استقرار التدريب بتقنيتين: مخزن إعادة التجارب (لأخذ عينات عشوائية غير مترابطة) وشبكة هدف منفصلة $\\theta^-$ تُحدّث دورياً لتثبيت أهداف بيلمان.",
      "حساب الناتج النهائي: دون مخزن إعادة التجارب، تظهر العينات المتتابعة ارتباطاً زمنياً يفوق $0.92$ مما يسبب تشتت الأوزان؛ بينما يخفض أخذ العينات العشوائية من مخزن بسعة $100,000$ خطوة الارتباط الذاتي إلى $<0.03$.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.",
    "hintAr": "طبق القانون الأساسي: تعالج شبكات DQN عدم استقرار التدريب بتقنيتين: مخزن إعادة التجارب (لأخذ عينات عشوائية غير مترابطة) وشبكة هدف منفصلة $\\theta^-$ تُحدّث دورياً لتثبيت أهداف بيلمان.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "egbac_ai_data_science_ch3_ex_12",
    "titleEn": "Exercise Problem 12: Policy Gradient Methods & Proximal Policy Optimization (PPO)",
    "titleAr": "تمرين 12: طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO)",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 12] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Policy Gradient Methods & Proximal Policy Optimization (PPO). Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 12] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO). استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.\n- Calculation & Results: In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تمنع خوارزمية PPO القفزات الكبيرة المزعزعة للاستقرار عبر قص نسبة الاحتمال $r_t(\\theta)$ ضمن المدى $[1-\\epsilon, 1+\\epsilon]$ مضروبة في دالة الميزة التقديرية $\\hat{A}_t$.\n- خطوات الحساب والنتيجة: في تدريب طائرة مسيرة ذاتية بمعامل قص $\\epsilon = 0.20$، أنتج إجراء بميزة موجبة $\\hat{A}_t = +4.5$ نسبة $r_t = 1.35$. وتحدد القيمة المقصوصة بـ $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 5.40$ مما يمنع انهيار السياسة.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.",
      "Calculate final values: In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse.",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: تمنع خوارزمية PPO القفزات الكبيرة المزعزعة للاستقرار عبر قص نسبة الاحتمال $r_t(\\theta)$ ضمن المدى $[1-\\epsilon, 1+\\epsilon]$ مضروبة في دالة الميزة التقديرية $\\hat{A}_t$.",
      "حساب الناتج النهائي: في تدريب طائرة مسيرة ذاتية بمعامل قص $\\epsilon = 0.20$، أنتج إجراء بميزة موجبة $\\hat{A}_t = +4.5$ نسبة $r_t = 1.35$. وتحدد القيمة المقصوصة بـ $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 5.40$ مما يمنع انهيار السياسة.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.",
    "hintAr": "طبق القانون الأساسي: تمنع خوارزمية PPO القفزات الكبيرة المزعزعة للاستقرار عبر قص نسبة الاحتمال $r_t(\\theta)$ ضمن المدى $[1-\\epsilon, 1+\\epsilon]$ مضروبة في دالة الميزة التقديرية $\\hat{A}_t$.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "egbac_ai_data_science_ch3_ex_13",
    "titleEn": "Exercise Problem 13: Markov Decision Processes & Bellman Optimality Equations",
    "titleAr": "تمرين 13: عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 13] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Markov Decision Processes & Bellman Optimality Equations. Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 13] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن عمليات ماركوف لاتخاذ القرار ومعادلات بيلمان للحل الأمثل. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.\n- Calculation & Results: In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: معادلة بيلمان المثلى لدالة القيمة $Q^*(s, a)$ هي $Q^*(s, a) = R(s, a) + \\gamma \\sum P(s'|s, a) \\max_{a'} Q^*(s', a')$، وتشكل دالة انكماشية تتقارب حتماً لنقطة ثابتة وحيدة.\n- خطوات الحساب والنتيجة: في مهمة ملاحة روبوت في شبكة بمعامل خصم $\\gamma = 0.90$ ومكافأة $R = +2.0$، وانتقال احتمالي $1.0$ إلى $s'$ بقيم إجراءات قصوى $\\max Q = 10.0$، فإن تحديث بيلمان يعطي $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.",
      "Calculate final values: In a grid-world robot navigation task with discount $\\gamma = 0.90$, current reward $R(s, a) = +2.0$, and transition leading with probability $1.0$ to state $s'$ where optimal successor action values are $Q(s', a_1) = 8.0, Q(s', a_2) = 10.0, Q(s', a_3) = 6.0$, the Bellman update computes $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: معادلة بيلمان المثلى لدالة القيمة $Q^*(s, a)$ هي $Q^*(s, a) = R(s, a) + \\gamma \\sum P(s'|s, a) \\max_{a'} Q^*(s', a')$، وتشكل دالة انكماشية تتقارب حتماً لنقطة ثابتة وحيدة.",
      "حساب الناتج النهائي: في مهمة ملاحة روبوت في شبكة بمعامل خصم $\\gamma = 0.90$ ومكافأة $R = +2.0$، وانتقال احتمالي $1.0$ إلى $s'$ بقيم إجراءات قصوى $\\max Q = 10.0$، فإن تحديث بيلمان يعطي $Q^*(s, a) = 2.0 + 0.90 \\times 10.0 = 11.0$.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: The Bellman optimality equation for state-action value $Q^*(s, a)$ is $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$, forming a contraction mapping guaranteed to converge to a unique fixed point.",
    "hintAr": "طبق القانون الأساسي: معادلة بيلمان المثلى لدالة القيمة $Q^*(s, a)$ هي $Q^*(s, a) = R(s, a) + \\gamma \\sum P(s'|s, a) \\max_{a'} Q^*(s', a')$، وتشكل دالة انكماشية تتقارب حتماً لنقطة ثابتة وحيدة.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "egbac_ai_data_science_ch3_ex_14",
    "titleEn": "Exercise Problem 14: Deep Q-Networks (DQN), Experience Replay & Target Networks",
    "titleAr": "تمرين 14: شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 14] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Deep Q-Networks (DQN), Experience Replay & Target Networks. Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 14] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن شبكات Deep Q-Networks ومخازن إعادة التجارب وشبكات الهدف. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.\n- Calculation & Results: Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تعالج شبكات DQN عدم استقرار التدريب بتقنيتين: مخزن إعادة التجارب (لأخذ عينات عشوائية غير مترابطة) وشبكة هدف منفصلة $\\theta^-$ تُحدّث دورياً لتثبيت أهداف بيلمان.\n- خطوات الحساب والنتيجة: دون مخزن إعادة التجارب، تظهر العينات المتتابعة ارتباطاً زمنياً يفوق $0.92$ مما يسبب تشتت الأوزان؛ بينما يخفض أخذ العينات العشوائية من مخزن بسعة $100,000$ خطوة الارتباط الذاتي إلى $<0.03$.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.",
      "Calculate final values: Without experience replay, consecutive transition samples exhibit temporal correlation $>0.92$, causing gradient divergence in network weights $\\theta$; uniform mini-batch sampling from a $100,000$-step replay buffer reduces autocorrelation to $<0.03$, ensuring smooth monotonically decreasing Bellman loss.",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: تعالج شبكات DQN عدم استقرار التدريب بتقنيتين: مخزن إعادة التجارب (لأخذ عينات عشوائية غير مترابطة) وشبكة هدف منفصلة $\\theta^-$ تُحدّث دورياً لتثبيت أهداف بيلمان.",
      "حساب الناتج النهائي: دون مخزن إعادة التجارب، تظهر العينات المتتابعة ارتباطاً زمنياً يفوق $0.92$ مما يسبب تشتت الأوزان؛ بينما يخفض أخذ العينات العشوائية من مخزن بسعة $100,000$ خطوة الارتباط الذاتي إلى $<0.03$.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: DQN resolves training instability via two key techniques: Experience Replay (sampling decorrelated past transitions $(s, a, r, s')$ from a circular buffer) and a separate Target Network $\\theta^-$ updated periodically to stabilize Bellman targets $y = r + \\gamma \\max_{a'} Q(s', a'; \\theta^-)$.",
    "hintAr": "طبق القانون الأساسي: تعالج شبكات DQN عدم استقرار التدريب بتقنيتين: مخزن إعادة التجارب (لأخذ عينات عشوائية غير مترابطة) وشبكة هدف منفصلة $\\theta^-$ تُحدّث دورياً لتثبيت أهداف بيلمان.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "egbac_ai_data_science_ch3_ex_15",
    "titleEn": "Exercise Problem 15: Policy Gradient Methods & Proximal Policy Optimization (PPO)",
    "titleAr": "تمرين 15: طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO)",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 15] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Policy Gradient Methods & Proximal Policy Optimization (PPO). Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 15] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن طرق تدرج السياسات والتحسين التقريبي للسياسة (PPO). استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.\n- Calculation & Results: In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تمنع خوارزمية PPO القفزات الكبيرة المزعزعة للاستقرار عبر قص نسبة الاحتمال $r_t(\\theta)$ ضمن المدى $[1-\\epsilon, 1+\\epsilon]$ مضروبة في دالة الميزة التقديرية $\\hat{A}_t$.\n- خطوات الحساب والنتيجة: في تدريب طائرة مسيرة ذاتية بمعامل قص $\\epsilon = 0.20$، أنتج إجراء بميزة موجبة $\\hat{A}_t = +4.5$ نسبة $r_t = 1.35$. وتحدد القيمة المقصوصة بـ $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 5.40$ مما يمنع انهيار السياسة.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.",
      "Calculate final values: In training an autonomous drone navigation policy with clipping parameter $\\epsilon = 0.20$, an action with positive advantage $\\hat{A}_t = +4.5$ produces ratio $r_t(\\theta) = 1.35$. The clipped ratio is $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 1.20 \\times 4.5 = 5.40$, capping policy step incentives and preventing policy collapse.",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: تمنع خوارزمية PPO القفزات الكبيرة المزعزعة للاستقرار عبر قص نسبة الاحتمال $r_t(\\theta)$ ضمن المدى $[1-\\epsilon, 1+\\epsilon]$ مضروبة في دالة الميزة التقديرية $\\hat{A}_t$.",
      "حساب الناتج النهائي: في تدريب طائرة مسيرة ذاتية بمعامل قص $\\epsilon = 0.20$، أنتج إجراء بميزة موجبة $\\hat{A}_t = +4.5$ نسبة $r_t = 1.35$. وتحدد القيمة المقصوصة بـ $\\min(1.35 \\times 4.5, 1.20 \\times 4.5) = 5.40$ مما يمنع انهيار السياسة.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: Proximal Policy Optimization (PPO) prevents destabilizing large policy updates by clipping the probability ratio $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$: $L^{CLIP}(\\theta) = \\hat{\\mathbb{E}}_t \\left[ \\min(r_t(\\theta)\\hat{A}_t, \\text{clip}(r_t(\\theta), 1-\\epsilon, 1+\\epsilon)\\hat{A}_t) \\right]$.",
    "hintAr": "طبق القانون الأساسي: تمنع خوارزمية PPO القفزات الكبيرة المزعزعة للاستقرار عبر قص نسبة الاحتمال $r_t(\\theta)$ ضمن المدى $[1-\\epsilon, 1+\\epsilon]$ مضروبة في دالة الميزة التقديرية $\\hat{A}_t$.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  }
];
