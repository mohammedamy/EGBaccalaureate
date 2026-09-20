import type { SolvedProblem } from '../../../types/curriculum';

export const egbac_ai_data_science_ch4SolvedExamples: SolvedProblem[] = [
  {
    "id": "egbac_ai_data_science_ch4_solved_1",
    "titleEn": "Solved Example 1: Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO)",
    "titleAr": "مثال محلول 1: التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 1] Design, formulate, and evaluate an AI/Data Science model architecture applying Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO). Specify the mathematical formulations, optimization equations, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 1] صمم واشتق وقيم معمارية نموذج ذكاء اصطناعي أو علم بيانات بتطبيق التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO. وضح الصياغات الرياضية ومعادلات التحسين وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify problem specifications and statistical constraints.\nStep 2: Formulate governing analytical equation: The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.\nStep 3: Execute numerical substitution: Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.\nStep 4: Verify convergence stability, generalization bounds, and algorithmic performance compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات المسألة والقيود الإحصائية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: يقوم محسن انعدام التكرار (ZeRO) بتجزئة حالات المحسن (المرحلة 1)، والتدرجات (المرحلة 2)، ومعاملات النموذج (المرحلة 3) عبر كروت GPU، ملغياً هدر الذاكرة ومحافظاً على نفس حجم الاتصال.\nالخطوة ٣: التعويض العددي وحساب النتائج: يتطلب تدريب نموذج لغوي بـ 70 مليار معامل بدقة FP16 ذاكرة 1,120 جيجابايت للأوزان والتدرجات ومحسن Adam. بتطبيق ZeRO Stage 3 عبر 64 كارت A100، ينخفض نصيب كل معالج إلى $17.5\\text{ GB}$، ملائماً سعة الذاكرة تماماً.\nالخطوة ٤: التحقق من استقرار التقارب، حدود التعميم، وتوافق أداء النموذج.",
    "stepByStepSolutionEn": [
      "Identify system variables, loss functions, and optimization constraints.",
      "Apply formulation: The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.",
      "Perform calculation: Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.",
      "Confirm operational validity and alignment with international AI standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد متغيرات النظام، دوال الخسارة، وقيود التحسين.",
      "تطبيق المعادلة الخوارزمية: يقوم محسن انعدام التكرار (ZeRO) بتجزئة حالات المحسن (المرحلة 1)، والتدرجات (المرحلة 2)، ومعاملات النموذج (المرحلة 3) عبر كروت GPU، ملغياً هدر الذاكرة ومحافظاً على نفس حجم الاتصال.",
      "الحساب العددي الدقيق: يتطلب تدريب نموذج لغوي بـ 70 مليار معامل بدقة FP16 ذاكرة 1,120 جيجابايت للأوزان والتدرجات ومحسن Adam. بتطبيق ZeRO Stage 3 عبر 64 كارت A100، ينخفض نصيب كل معالج إلى $17.5\\text{ GB}$، ملائماً سعة الذاكرة تماماً.",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للذكاء الاصطناعي."
    ],
    "hintEn": "Recall the governing analytical relations for Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO).",
    "hintAr": "تذكر القوانين والعلاقات التحليلية الحاكمة لـ التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO.",
    "teacherTipEn": "Pay careful attention to vector dimensions and normalization constraints when implementing Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO).",
    "teacherTipAr": "انتبه جيداً لأبعاد المتجهات وشروط المعايرة والتقييس عند تطبيق التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO."
  },
  {
    "id": "egbac_ai_data_science_ch4_solved_2",
    "titleEn": "Solved Example 2: Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning",
    "titleAr": "مثال محلول 2: ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 2] Design, formulate, and evaluate an AI/Data Science model architecture applying Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning. Specify the mathematical formulations, optimization equations, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 2] صمم واشتق وقيم معمارية نموذج ذكاء اصطناعي أو علم بيانات بتطبيق ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات. وضح الصياغات الرياضية ومعادلات التحسين وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify problem specifications and statistical constraints.\nStep 2: Formulate governing analytical equation: Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.\nStep 3: Execute numerical substitution: Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy.\nStep 4: Verify convergence stability, generalization bounds, and algorithmic performance compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات المسألة والقيود الإحصائية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: يرسم التكميم المتناظر القيم الحقيقية $r$ إلى عدد مكمم $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z\\right)$، بمقياس $S$ ونقطة صفر $Z$.\nالخطوة ٣: التعويض العددي وحساب النتائج: يؤدي تكميم نموذج رؤية حاسوبية من 14 جيجابايت بدقة FP32 إلى INT8 إلى تقليص حجمه إلى $3.5\\text{ GB}$ (بنسبة ضغط $75\\%$) ورفع سرعة المعالجة من 42 إلى 178 إطار/ثانية بتراجع هامشي في الدقة $<0.35\\%$.\nالخطوة ٤: التحقق من استقرار التقارب، حدود التعميم، وتوافق أداء النموذج.",
    "stepByStepSolutionEn": [
      "Identify system variables, loss functions, and optimization constraints.",
      "Apply formulation: Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.",
      "Perform calculation: Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy.",
      "Confirm operational validity and alignment with international AI standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد متغيرات النظام، دوال الخسارة، وقيود التحسين.",
      "تطبيق المعادلة الخوارزمية: يرسم التكميم المتناظر القيم الحقيقية $r$ إلى عدد مكمم $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z\\right)$، بمقياس $S$ ونقطة صفر $Z$.",
      "الحساب العددي الدقيق: يؤدي تكميم نموذج رؤية حاسوبية من 14 جيجابايت بدقة FP32 إلى INT8 إلى تقليص حجمه إلى $3.5\\text{ GB}$ (بنسبة ضغط $75\\%$) ورفع سرعة المعالجة من 42 إلى 178 إطار/ثانية بتراجع هامشي في الدقة $<0.35\\%$.",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للذكاء الاصطناعي."
    ],
    "hintEn": "Recall the governing analytical relations for Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning.",
    "hintAr": "تذكر القوانين والعلاقات التحليلية الحاكمة لـ ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات.",
    "teacherTipEn": "Pay careful attention to vector dimensions and normalization constraints when implementing Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning.",
    "teacherTipAr": "انتبه جيداً لأبعاد المتجهات وشروط المعايرة والتقييس عند تطبيق ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات."
  },
  {
    "id": "egbac_ai_data_science_ch4_solved_3",
    "titleEn": "Solved Example 3: Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance",
    "titleAr": "مثال محلول 3: العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 3] Design, formulate, and evaluate an AI/Data Science model architecture applying Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance. Specify the mathematical formulations, optimization equations, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 3] صمم واشتق وقيم معمارية نموذج ذكاء اصطناعي أو علم بيانات بتطبيق العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة. وضح الصياغات الرياضية ومعادلات التحسين وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify problem specifications and statistical constraints.\nStep 2: Formulate governing analytical equation: SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.\nStep 3: Execute numerical substitution: In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC.\nStep 4: Verify convergence stability, generalization bounds, and algorithmic performance compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات المسألة والقيود الإحصائية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: تحسب قيم SHAP الإسهامات الهامشية العادلة للخصائص بالاستناد إلى نظرية الألعاب التعاونية: $\\phi_i = \\sum \\text{weights} [f(S \\cup \\{i\\}) - f(S)]$، محققة بديهيات الكفاءة والتناظر والتجميع.\nالخطوة ٣: التعويض العددي وحساب النتائج: في تدقيق نموذج ائتماني ذكي في مصر، كشف تحليل SHAP أن خاصية الرمز البريدي عملت كوكيل غير دستوري لتحيز ديموغرافي بقيمة $\\phi = -0.42$؛ واستبعادها حقق التكافؤ العادل مع الحفاظ على دقة $94.8\\%$.\nالخطوة ٤: التحقق من استقرار التقارب، حدود التعميم، وتوافق أداء النموذج.",
    "stepByStepSolutionEn": [
      "Identify system variables, loss functions, and optimization constraints.",
      "Apply formulation: SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.",
      "Perform calculation: In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC.",
      "Confirm operational validity and alignment with international AI standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد متغيرات النظام، دوال الخسارة، وقيود التحسين.",
      "تطبيق المعادلة الخوارزمية: تحسب قيم SHAP الإسهامات الهامشية العادلة للخصائص بالاستناد إلى نظرية الألعاب التعاونية: $\\phi_i = \\sum \\text{weights} [f(S \\cup \\{i\\}) - f(S)]$، محققة بديهيات الكفاءة والتناظر والتجميع.",
      "الحساب العددي الدقيق: في تدقيق نموذج ائتماني ذكي في مصر، كشف تحليل SHAP أن خاصية الرمز البريدي عملت كوكيل غير دستوري لتحيز ديموغرافي بقيمة $\\phi = -0.42$؛ واستبعادها حقق التكافؤ العادل مع الحفاظ على دقة $94.8\\%$.",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للذكاء الاصطناعي."
    ],
    "hintEn": "Recall the governing analytical relations for Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance.",
    "hintAr": "تذكر القوانين والعلاقات التحليلية الحاكمة لـ العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة.",
    "teacherTipEn": "Pay careful attention to vector dimensions and normalization constraints when implementing Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance.",
    "teacherTipAr": "انتبه جيداً لأبعاد المتجهات وشروط المعايرة والتقييس عند تطبيق العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة."
  },
  {
    "id": "egbac_ai_data_science_ch4_solved_4",
    "titleEn": "Solved Example 4: Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO)",
    "titleAr": "مثال محلول 4: التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 4] Design, formulate, and evaluate an AI/Data Science model architecture applying Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO). Specify the mathematical formulations, optimization equations, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 4] صمم واشتق وقيم معمارية نموذج ذكاء اصطناعي أو علم بيانات بتطبيق التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO. وضح الصياغات الرياضية ومعادلات التحسين وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify problem specifications and statistical constraints.\nStep 2: Formulate governing analytical equation: The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.\nStep 3: Execute numerical substitution: Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.\nStep 4: Verify convergence stability, generalization bounds, and algorithmic performance compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات المسألة والقيود الإحصائية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: يقوم محسن انعدام التكرار (ZeRO) بتجزئة حالات المحسن (المرحلة 1)، والتدرجات (المرحلة 2)، ومعاملات النموذج (المرحلة 3) عبر كروت GPU، ملغياً هدر الذاكرة ومحافظاً على نفس حجم الاتصال.\nالخطوة ٣: التعويض العددي وحساب النتائج: يتطلب تدريب نموذج لغوي بـ 70 مليار معامل بدقة FP16 ذاكرة 1,120 جيجابايت للأوزان والتدرجات ومحسن Adam. بتطبيق ZeRO Stage 3 عبر 64 كارت A100، ينخفض نصيب كل معالج إلى $17.5\\text{ GB}$، ملائماً سعة الذاكرة تماماً.\nالخطوة ٤: التحقق من استقرار التقارب، حدود التعميم، وتوافق أداء النموذج.",
    "stepByStepSolutionEn": [
      "Identify system variables, loss functions, and optimization constraints.",
      "Apply formulation: The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.",
      "Perform calculation: Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.",
      "Confirm operational validity and alignment with international AI standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد متغيرات النظام، دوال الخسارة، وقيود التحسين.",
      "تطبيق المعادلة الخوارزمية: يقوم محسن انعدام التكرار (ZeRO) بتجزئة حالات المحسن (المرحلة 1)، والتدرجات (المرحلة 2)، ومعاملات النموذج (المرحلة 3) عبر كروت GPU، ملغياً هدر الذاكرة ومحافظاً على نفس حجم الاتصال.",
      "الحساب العددي الدقيق: يتطلب تدريب نموذج لغوي بـ 70 مليار معامل بدقة FP16 ذاكرة 1,120 جيجابايت للأوزان والتدرجات ومحسن Adam. بتطبيق ZeRO Stage 3 عبر 64 كارت A100، ينخفض نصيب كل معالج إلى $17.5\\text{ GB}$، ملائماً سعة الذاكرة تماماً.",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للذكاء الاصطناعي."
    ],
    "hintEn": "Recall the governing analytical relations for Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO).",
    "hintAr": "تذكر القوانين والعلاقات التحليلية الحاكمة لـ التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO.",
    "teacherTipEn": "Pay careful attention to vector dimensions and normalization constraints when implementing Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO).",
    "teacherTipAr": "انتبه جيداً لأبعاد المتجهات وشروط المعايرة والتقييس عند تطبيق التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO."
  },
  {
    "id": "egbac_ai_data_science_ch4_solved_5",
    "titleEn": "Solved Example 5: Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning",
    "titleAr": "مثال محلول 5: ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 5] Design, formulate, and evaluate an AI/Data Science model architecture applying Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning. Specify the mathematical formulations, optimization equations, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 5] صمم واشتق وقيم معمارية نموذج ذكاء اصطناعي أو علم بيانات بتطبيق ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات. وضح الصياغات الرياضية ومعادلات التحسين وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify problem specifications and statistical constraints.\nStep 2: Formulate governing analytical equation: Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.\nStep 3: Execute numerical substitution: Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy.\nStep 4: Verify convergence stability, generalization bounds, and algorithmic performance compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات المسألة والقيود الإحصائية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: يرسم التكميم المتناظر القيم الحقيقية $r$ إلى عدد مكمم $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z\\right)$، بمقياس $S$ ونقطة صفر $Z$.\nالخطوة ٣: التعويض العددي وحساب النتائج: يؤدي تكميم نموذج رؤية حاسوبية من 14 جيجابايت بدقة FP32 إلى INT8 إلى تقليص حجمه إلى $3.5\\text{ GB}$ (بنسبة ضغط $75\\%$) ورفع سرعة المعالجة من 42 إلى 178 إطار/ثانية بتراجع هامشي في الدقة $<0.35\\%$.\nالخطوة ٤: التحقق من استقرار التقارب، حدود التعميم، وتوافق أداء النموذج.",
    "stepByStepSolutionEn": [
      "Identify system variables, loss functions, and optimization constraints.",
      "Apply formulation: Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.",
      "Perform calculation: Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy.",
      "Confirm operational validity and alignment with international AI standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد متغيرات النظام، دوال الخسارة، وقيود التحسين.",
      "تطبيق المعادلة الخوارزمية: يرسم التكميم المتناظر القيم الحقيقية $r$ إلى عدد مكمم $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z\\right)$، بمقياس $S$ ونقطة صفر $Z$.",
      "الحساب العددي الدقيق: يؤدي تكميم نموذج رؤية حاسوبية من 14 جيجابايت بدقة FP32 إلى INT8 إلى تقليص حجمه إلى $3.5\\text{ GB}$ (بنسبة ضغط $75\\%$) ورفع سرعة المعالجة من 42 إلى 178 إطار/ثانية بتراجع هامشي في الدقة $<0.35\\%$.",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للذكاء الاصطناعي."
    ],
    "hintEn": "Recall the governing analytical relations for Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning.",
    "hintAr": "تذكر القوانين والعلاقات التحليلية الحاكمة لـ ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات.",
    "teacherTipEn": "Pay careful attention to vector dimensions and normalization constraints when implementing Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning.",
    "teacherTipAr": "انتبه جيداً لأبعاد المتجهات وشروط المعايرة والتقييس عند تطبيق ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات."
  },
  {
    "id": "egbac_ai_data_science_ch4_solved_6",
    "titleEn": "Solved Example 6: Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance",
    "titleAr": "مثال محلول 6: العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 6] Design, formulate, and evaluate an AI/Data Science model architecture applying Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance. Specify the mathematical formulations, optimization equations, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 6] صمم واشتق وقيم معمارية نموذج ذكاء اصطناعي أو علم بيانات بتطبيق العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة. وضح الصياغات الرياضية ومعادلات التحسين وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify problem specifications and statistical constraints.\nStep 2: Formulate governing analytical equation: SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.\nStep 3: Execute numerical substitution: In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC.\nStep 4: Verify convergence stability, generalization bounds, and algorithmic performance compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات المسألة والقيود الإحصائية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: تحسب قيم SHAP الإسهامات الهامشية العادلة للخصائص بالاستناد إلى نظرية الألعاب التعاونية: $\\phi_i = \\sum \\text{weights} [f(S \\cup \\{i\\}) - f(S)]$، محققة بديهيات الكفاءة والتناظر والتجميع.\nالخطوة ٣: التعويض العددي وحساب النتائج: في تدقيق نموذج ائتماني ذكي في مصر، كشف تحليل SHAP أن خاصية الرمز البريدي عملت كوكيل غير دستوري لتحيز ديموغرافي بقيمة $\\phi = -0.42$؛ واستبعادها حقق التكافؤ العادل مع الحفاظ على دقة $94.8\\%$.\nالخطوة ٤: التحقق من استقرار التقارب، حدود التعميم، وتوافق أداء النموذج.",
    "stepByStepSolutionEn": [
      "Identify system variables, loss functions, and optimization constraints.",
      "Apply formulation: SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.",
      "Perform calculation: In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC.",
      "Confirm operational validity and alignment with international AI standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد متغيرات النظام، دوال الخسارة، وقيود التحسين.",
      "تطبيق المعادلة الخوارزمية: تحسب قيم SHAP الإسهامات الهامشية العادلة للخصائص بالاستناد إلى نظرية الألعاب التعاونية: $\\phi_i = \\sum \\text{weights} [f(S \\cup \\{i\\}) - f(S)]$، محققة بديهيات الكفاءة والتناظر والتجميع.",
      "الحساب العددي الدقيق: في تدقيق نموذج ائتماني ذكي في مصر، كشف تحليل SHAP أن خاصية الرمز البريدي عملت كوكيل غير دستوري لتحيز ديموغرافي بقيمة $\\phi = -0.42$؛ واستبعادها حقق التكافؤ العادل مع الحفاظ على دقة $94.8\\%$.",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للذكاء الاصطناعي."
    ],
    "hintEn": "Recall the governing analytical relations for Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance.",
    "hintAr": "تذكر القوانين والعلاقات التحليلية الحاكمة لـ العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة.",
    "teacherTipEn": "Pay careful attention to vector dimensions and normalization constraints when implementing Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance.",
    "teacherTipAr": "انتبه جيداً لأبعاد المتجهات وشروط المعايرة والتقييس عند تطبيق العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة."
  },
  {
    "id": "egbac_ai_data_science_ch4_solved_7",
    "titleEn": "Solved Example 7: Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO)",
    "titleAr": "مثال محلول 7: التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 7] Design, formulate, and evaluate an AI/Data Science model architecture applying Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO). Specify the mathematical formulations, optimization equations, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 7] صمم واشتق وقيم معمارية نموذج ذكاء اصطناعي أو علم بيانات بتطبيق التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO. وضح الصياغات الرياضية ومعادلات التحسين وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify problem specifications and statistical constraints.\nStep 2: Formulate governing analytical equation: The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.\nStep 3: Execute numerical substitution: Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.\nStep 4: Verify convergence stability, generalization bounds, and algorithmic performance compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات المسألة والقيود الإحصائية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: يقوم محسن انعدام التكرار (ZeRO) بتجزئة حالات المحسن (المرحلة 1)، والتدرجات (المرحلة 2)، ومعاملات النموذج (المرحلة 3) عبر كروت GPU، ملغياً هدر الذاكرة ومحافظاً على نفس حجم الاتصال.\nالخطوة ٣: التعويض العددي وحساب النتائج: يتطلب تدريب نموذج لغوي بـ 70 مليار معامل بدقة FP16 ذاكرة 1,120 جيجابايت للأوزان والتدرجات ومحسن Adam. بتطبيق ZeRO Stage 3 عبر 64 كارت A100، ينخفض نصيب كل معالج إلى $17.5\\text{ GB}$، ملائماً سعة الذاكرة تماماً.\nالخطوة ٤: التحقق من استقرار التقارب، حدود التعميم، وتوافق أداء النموذج.",
    "stepByStepSolutionEn": [
      "Identify system variables, loss functions, and optimization constraints.",
      "Apply formulation: The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.",
      "Perform calculation: Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.",
      "Confirm operational validity and alignment with international AI standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد متغيرات النظام، دوال الخسارة، وقيود التحسين.",
      "تطبيق المعادلة الخوارزمية: يقوم محسن انعدام التكرار (ZeRO) بتجزئة حالات المحسن (المرحلة 1)، والتدرجات (المرحلة 2)، ومعاملات النموذج (المرحلة 3) عبر كروت GPU، ملغياً هدر الذاكرة ومحافظاً على نفس حجم الاتصال.",
      "الحساب العددي الدقيق: يتطلب تدريب نموذج لغوي بـ 70 مليار معامل بدقة FP16 ذاكرة 1,120 جيجابايت للأوزان والتدرجات ومحسن Adam. بتطبيق ZeRO Stage 3 عبر 64 كارت A100، ينخفض نصيب كل معالج إلى $17.5\\text{ GB}$، ملائماً سعة الذاكرة تماماً.",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للذكاء الاصطناعي."
    ],
    "hintEn": "Recall the governing analytical relations for Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO).",
    "hintAr": "تذكر القوانين والعلاقات التحليلية الحاكمة لـ التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO.",
    "teacherTipEn": "Pay careful attention to vector dimensions and normalization constraints when implementing Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO).",
    "teacherTipAr": "انتبه جيداً لأبعاد المتجهات وشروط المعايرة والتقييس عند تطبيق التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO."
  },
  {
    "id": "egbac_ai_data_science_ch4_solved_8",
    "titleEn": "Solved Example 8: Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning",
    "titleAr": "مثال محلول 8: ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 8] Design, formulate, and evaluate an AI/Data Science model architecture applying Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning. Specify the mathematical formulations, optimization equations, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 8] صمم واشتق وقيم معمارية نموذج ذكاء اصطناعي أو علم بيانات بتطبيق ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات. وضح الصياغات الرياضية ومعادلات التحسين وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify problem specifications and statistical constraints.\nStep 2: Formulate governing analytical equation: Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.\nStep 3: Execute numerical substitution: Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy.\nStep 4: Verify convergence stability, generalization bounds, and algorithmic performance compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات المسألة والقيود الإحصائية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: يرسم التكميم المتناظر القيم الحقيقية $r$ إلى عدد مكمم $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z\\right)$، بمقياس $S$ ونقطة صفر $Z$.\nالخطوة ٣: التعويض العددي وحساب النتائج: يؤدي تكميم نموذج رؤية حاسوبية من 14 جيجابايت بدقة FP32 إلى INT8 إلى تقليص حجمه إلى $3.5\\text{ GB}$ (بنسبة ضغط $75\\%$) ورفع سرعة المعالجة من 42 إلى 178 إطار/ثانية بتراجع هامشي في الدقة $<0.35\\%$.\nالخطوة ٤: التحقق من استقرار التقارب، حدود التعميم، وتوافق أداء النموذج.",
    "stepByStepSolutionEn": [
      "Identify system variables, loss functions, and optimization constraints.",
      "Apply formulation: Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.",
      "Perform calculation: Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy.",
      "Confirm operational validity and alignment with international AI standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد متغيرات النظام، دوال الخسارة، وقيود التحسين.",
      "تطبيق المعادلة الخوارزمية: يرسم التكميم المتناظر القيم الحقيقية $r$ إلى عدد مكمم $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z\\right)$، بمقياس $S$ ونقطة صفر $Z$.",
      "الحساب العددي الدقيق: يؤدي تكميم نموذج رؤية حاسوبية من 14 جيجابايت بدقة FP32 إلى INT8 إلى تقليص حجمه إلى $3.5\\text{ GB}$ (بنسبة ضغط $75\\%$) ورفع سرعة المعالجة من 42 إلى 178 إطار/ثانية بتراجع هامشي في الدقة $<0.35\\%$.",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للذكاء الاصطناعي."
    ],
    "hintEn": "Recall the governing analytical relations for Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning.",
    "hintAr": "تذكر القوانين والعلاقات التحليلية الحاكمة لـ ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات.",
    "teacherTipEn": "Pay careful attention to vector dimensions and normalization constraints when implementing Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning.",
    "teacherTipAr": "انتبه جيداً لأبعاد المتجهات وشروط المعايرة والتقييس عند تطبيق ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات."
  },
  {
    "id": "egbac_ai_data_science_ch4_solved_9",
    "titleEn": "Solved Example 9: Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance",
    "titleAr": "مثال محلول 9: العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 9] Design, formulate, and evaluate an AI/Data Science model architecture applying Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance. Specify the mathematical formulations, optimization equations, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 9] صمم واشتق وقيم معمارية نموذج ذكاء اصطناعي أو علم بيانات بتطبيق العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة. وضح الصياغات الرياضية ومعادلات التحسين وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify problem specifications and statistical constraints.\nStep 2: Formulate governing analytical equation: SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.\nStep 3: Execute numerical substitution: In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC.\nStep 4: Verify convergence stability, generalization bounds, and algorithmic performance compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات المسألة والقيود الإحصائية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: تحسب قيم SHAP الإسهامات الهامشية العادلة للخصائص بالاستناد إلى نظرية الألعاب التعاونية: $\\phi_i = \\sum \\text{weights} [f(S \\cup \\{i\\}) - f(S)]$، محققة بديهيات الكفاءة والتناظر والتجميع.\nالخطوة ٣: التعويض العددي وحساب النتائج: في تدقيق نموذج ائتماني ذكي في مصر، كشف تحليل SHAP أن خاصية الرمز البريدي عملت كوكيل غير دستوري لتحيز ديموغرافي بقيمة $\\phi = -0.42$؛ واستبعادها حقق التكافؤ العادل مع الحفاظ على دقة $94.8\\%$.\nالخطوة ٤: التحقق من استقرار التقارب، حدود التعميم، وتوافق أداء النموذج.",
    "stepByStepSolutionEn": [
      "Identify system variables, loss functions, and optimization constraints.",
      "Apply formulation: SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.",
      "Perform calculation: In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC.",
      "Confirm operational validity and alignment with international AI standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد متغيرات النظام، دوال الخسارة، وقيود التحسين.",
      "تطبيق المعادلة الخوارزمية: تحسب قيم SHAP الإسهامات الهامشية العادلة للخصائص بالاستناد إلى نظرية الألعاب التعاونية: $\\phi_i = \\sum \\text{weights} [f(S \\cup \\{i\\}) - f(S)]$، محققة بديهيات الكفاءة والتناظر والتجميع.",
      "الحساب العددي الدقيق: في تدقيق نموذج ائتماني ذكي في مصر، كشف تحليل SHAP أن خاصية الرمز البريدي عملت كوكيل غير دستوري لتحيز ديموغرافي بقيمة $\\phi = -0.42$؛ واستبعادها حقق التكافؤ العادل مع الحفاظ على دقة $94.8\\%$.",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للذكاء الاصطناعي."
    ],
    "hintEn": "Recall the governing analytical relations for Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance.",
    "hintAr": "تذكر القوانين والعلاقات التحليلية الحاكمة لـ العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة.",
    "teacherTipEn": "Pay careful attention to vector dimensions and normalization constraints when implementing Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance.",
    "teacherTipAr": "انتبه جيداً لأبعاد المتجهات وشروط المعايرة والتقييس عند تطبيق العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة."
  },
  {
    "id": "egbac_ai_data_science_ch4_solved_10",
    "titleEn": "Solved Example 10: Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO)",
    "titleAr": "مثال محلول 10: التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 10] Design, formulate, and evaluate an AI/Data Science model architecture applying Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO). Specify the mathematical formulations, optimization equations, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 10] صمم واشتق وقيم معمارية نموذج ذكاء اصطناعي أو علم بيانات بتطبيق التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO. وضح الصياغات الرياضية ومعادلات التحسين وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify problem specifications and statistical constraints.\nStep 2: Formulate governing analytical equation: The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.\nStep 3: Execute numerical substitution: Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.\nStep 4: Verify convergence stability, generalization bounds, and algorithmic performance compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات المسألة والقيود الإحصائية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: يقوم محسن انعدام التكرار (ZeRO) بتجزئة حالات المحسن (المرحلة 1)، والتدرجات (المرحلة 2)، ومعاملات النموذج (المرحلة 3) عبر كروت GPU، ملغياً هدر الذاكرة ومحافظاً على نفس حجم الاتصال.\nالخطوة ٣: التعويض العددي وحساب النتائج: يتطلب تدريب نموذج لغوي بـ 70 مليار معامل بدقة FP16 ذاكرة 1,120 جيجابايت للأوزان والتدرجات ومحسن Adam. بتطبيق ZeRO Stage 3 عبر 64 كارت A100، ينخفض نصيب كل معالج إلى $17.5\\text{ GB}$، ملائماً سعة الذاكرة تماماً.\nالخطوة ٤: التحقق من استقرار التقارب، حدود التعميم، وتوافق أداء النموذج.",
    "stepByStepSolutionEn": [
      "Identify system variables, loss functions, and optimization constraints.",
      "Apply formulation: The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.",
      "Perform calculation: Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.",
      "Confirm operational validity and alignment with international AI standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد متغيرات النظام، دوال الخسارة، وقيود التحسين.",
      "تطبيق المعادلة الخوارزمية: يقوم محسن انعدام التكرار (ZeRO) بتجزئة حالات المحسن (المرحلة 1)، والتدرجات (المرحلة 2)، ومعاملات النموذج (المرحلة 3) عبر كروت GPU، ملغياً هدر الذاكرة ومحافظاً على نفس حجم الاتصال.",
      "الحساب العددي الدقيق: يتطلب تدريب نموذج لغوي بـ 70 مليار معامل بدقة FP16 ذاكرة 1,120 جيجابايت للأوزان والتدرجات ومحسن Adam. بتطبيق ZeRO Stage 3 عبر 64 كارت A100، ينخفض نصيب كل معالج إلى $17.5\\text{ GB}$، ملائماً سعة الذاكرة تماماً.",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للذكاء الاصطناعي."
    ],
    "hintEn": "Recall the governing analytical relations for Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO).",
    "hintAr": "تذكر القوانين والعلاقات التحليلية الحاكمة لـ التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO.",
    "teacherTipEn": "Pay careful attention to vector dimensions and normalization constraints when implementing Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO).",
    "teacherTipAr": "انتبه جيداً لأبعاد المتجهات وشروط المعايرة والتقييس عند تطبيق التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO."
  }
];

export const egbac_ai_data_science_ch4ExerciseProblems: SolvedProblem[] = [
  {
    "id": "egbac_ai_data_science_ch4_ex_1",
    "titleEn": "Exercise Problem 1: Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO)",
    "titleAr": "تمرين 1: التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 1] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO). Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 1] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.\n- Calculation & Results: Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: يقوم محسن انعدام التكرار (ZeRO) بتجزئة حالات المحسن (المرحلة 1)، والتدرجات (المرحلة 2)، ومعاملات النموذج (المرحلة 3) عبر كروت GPU، ملغياً هدر الذاكرة ومحافظاً على نفس حجم الاتصال.\n- خطوات الحساب والنتيجة: يتطلب تدريب نموذج لغوي بـ 70 مليار معامل بدقة FP16 ذاكرة 1,120 جيجابايت للأوزان والتدرجات ومحسن Adam. بتطبيق ZeRO Stage 3 عبر 64 كارت A100، ينخفض نصيب كل معالج إلى $17.5\\text{ GB}$، ملائماً سعة الذاكرة تماماً.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.",
      "Calculate final values: Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: يقوم محسن انعدام التكرار (ZeRO) بتجزئة حالات المحسن (المرحلة 1)، والتدرجات (المرحلة 2)، ومعاملات النموذج (المرحلة 3) عبر كروت GPU، ملغياً هدر الذاكرة ومحافظاً على نفس حجم الاتصال.",
      "حساب الناتج النهائي: يتطلب تدريب نموذج لغوي بـ 70 مليار معامل بدقة FP16 ذاكرة 1,120 جيجابايت للأوزان والتدرجات ومحسن Adam. بتطبيق ZeRO Stage 3 عبر 64 كارت A100، ينخفض نصيب كل معالج إلى $17.5\\text{ GB}$، ملائماً سعة الذاكرة تماماً.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.",
    "hintAr": "طبق القانون الأساسي: يقوم محسن انعدام التكرار (ZeRO) بتجزئة حالات المحسن (المرحلة 1)، والتدرجات (المرحلة 2)، ومعاملات النموذج (المرحلة 3) عبر كروت GPU، ملغياً هدر الذاكرة ومحافظاً على نفس حجم الاتصال.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "egbac_ai_data_science_ch4_ex_2",
    "titleEn": "Exercise Problem 2: Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning",
    "titleAr": "تمرين 2: ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 2] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning. Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 2] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.\n- Calculation & Results: Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: يرسم التكميم المتناظر القيم الحقيقية $r$ إلى عدد مكمم $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z\\right)$، بمقياس $S$ ونقطة صفر $Z$.\n- خطوات الحساب والنتيجة: يؤدي تكميم نموذج رؤية حاسوبية من 14 جيجابايت بدقة FP32 إلى INT8 إلى تقليص حجمه إلى $3.5\\text{ GB}$ (بنسبة ضغط $75\\%$) ورفع سرعة المعالجة من 42 إلى 178 إطار/ثانية بتراجع هامشي في الدقة $<0.35\\%$.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.",
      "Calculate final values: Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy.",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: يرسم التكميم المتناظر القيم الحقيقية $r$ إلى عدد مكمم $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z\\right)$، بمقياس $S$ ونقطة صفر $Z$.",
      "حساب الناتج النهائي: يؤدي تكميم نموذج رؤية حاسوبية من 14 جيجابايت بدقة FP32 إلى INT8 إلى تقليص حجمه إلى $3.5\\text{ GB}$ (بنسبة ضغط $75\\%$) ورفع سرعة المعالجة من 42 إلى 178 إطار/ثانية بتراجع هامشي في الدقة $<0.35\\%$.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.",
    "hintAr": "طبق القانون الأساسي: يرسم التكميم المتناظر القيم الحقيقية $r$ إلى عدد مكمم $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z\\right)$، بمقياس $S$ ونقطة صفر $Z$.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "egbac_ai_data_science_ch4_ex_3",
    "titleEn": "Exercise Problem 3: Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance",
    "titleAr": "تمرين 3: العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 3] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance. Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 3] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.\n- Calculation & Results: In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تحسب قيم SHAP الإسهامات الهامشية العادلة للخصائص بالاستناد إلى نظرية الألعاب التعاونية: $\\phi_i = \\sum \\text{weights} [f(S \\cup \\{i\\}) - f(S)]$، محققة بديهيات الكفاءة والتناظر والتجميع.\n- خطوات الحساب والنتيجة: في تدقيق نموذج ائتماني ذكي في مصر، كشف تحليل SHAP أن خاصية الرمز البريدي عملت كوكيل غير دستوري لتحيز ديموغرافي بقيمة $\\phi = -0.42$؛ واستبعادها حقق التكافؤ العادل مع الحفاظ على دقة $94.8\\%$.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.",
      "Calculate final values: In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC.",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: تحسب قيم SHAP الإسهامات الهامشية العادلة للخصائص بالاستناد إلى نظرية الألعاب التعاونية: $\\phi_i = \\sum \\text{weights} [f(S \\cup \\{i\\}) - f(S)]$، محققة بديهيات الكفاءة والتناظر والتجميع.",
      "حساب الناتج النهائي: في تدقيق نموذج ائتماني ذكي في مصر، كشف تحليل SHAP أن خاصية الرمز البريدي عملت كوكيل غير دستوري لتحيز ديموغرافي بقيمة $\\phi = -0.42$؛ واستبعادها حقق التكافؤ العادل مع الحفاظ على دقة $94.8\\%$.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.",
    "hintAr": "طبق القانون الأساسي: تحسب قيم SHAP الإسهامات الهامشية العادلة للخصائص بالاستناد إلى نظرية الألعاب التعاونية: $\\phi_i = \\sum \\text{weights} [f(S \\cup \\{i\\}) - f(S)]$، محققة بديهيات الكفاءة والتناظر والتجميع.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "egbac_ai_data_science_ch4_ex_4",
    "titleEn": "Exercise Problem 4: Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO)",
    "titleAr": "تمرين 4: التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 4] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO). Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 4] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.\n- Calculation & Results: Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: يقوم محسن انعدام التكرار (ZeRO) بتجزئة حالات المحسن (المرحلة 1)، والتدرجات (المرحلة 2)، ومعاملات النموذج (المرحلة 3) عبر كروت GPU، ملغياً هدر الذاكرة ومحافظاً على نفس حجم الاتصال.\n- خطوات الحساب والنتيجة: يتطلب تدريب نموذج لغوي بـ 70 مليار معامل بدقة FP16 ذاكرة 1,120 جيجابايت للأوزان والتدرجات ومحسن Adam. بتطبيق ZeRO Stage 3 عبر 64 كارت A100، ينخفض نصيب كل معالج إلى $17.5\\text{ GB}$، ملائماً سعة الذاكرة تماماً.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.",
      "Calculate final values: Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: يقوم محسن انعدام التكرار (ZeRO) بتجزئة حالات المحسن (المرحلة 1)، والتدرجات (المرحلة 2)، ومعاملات النموذج (المرحلة 3) عبر كروت GPU، ملغياً هدر الذاكرة ومحافظاً على نفس حجم الاتصال.",
      "حساب الناتج النهائي: يتطلب تدريب نموذج لغوي بـ 70 مليار معامل بدقة FP16 ذاكرة 1,120 جيجابايت للأوزان والتدرجات ومحسن Adam. بتطبيق ZeRO Stage 3 عبر 64 كارت A100، ينخفض نصيب كل معالج إلى $17.5\\text{ GB}$، ملائماً سعة الذاكرة تماماً.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.",
    "hintAr": "طبق القانون الأساسي: يقوم محسن انعدام التكرار (ZeRO) بتجزئة حالات المحسن (المرحلة 1)، والتدرجات (المرحلة 2)، ومعاملات النموذج (المرحلة 3) عبر كروت GPU، ملغياً هدر الذاكرة ومحافظاً على نفس حجم الاتصال.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "egbac_ai_data_science_ch4_ex_5",
    "titleEn": "Exercise Problem 5: Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning",
    "titleAr": "تمرين 5: ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 5] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning. Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 5] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.\n- Calculation & Results: Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: يرسم التكميم المتناظر القيم الحقيقية $r$ إلى عدد مكمم $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z\\right)$، بمقياس $S$ ونقطة صفر $Z$.\n- خطوات الحساب والنتيجة: يؤدي تكميم نموذج رؤية حاسوبية من 14 جيجابايت بدقة FP32 إلى INT8 إلى تقليص حجمه إلى $3.5\\text{ GB}$ (بنسبة ضغط $75\\%$) ورفع سرعة المعالجة من 42 إلى 178 إطار/ثانية بتراجع هامشي في الدقة $<0.35\\%$.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.",
      "Calculate final values: Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy.",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: يرسم التكميم المتناظر القيم الحقيقية $r$ إلى عدد مكمم $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z\\right)$، بمقياس $S$ ونقطة صفر $Z$.",
      "حساب الناتج النهائي: يؤدي تكميم نموذج رؤية حاسوبية من 14 جيجابايت بدقة FP32 إلى INT8 إلى تقليص حجمه إلى $3.5\\text{ GB}$ (بنسبة ضغط $75\\%$) ورفع سرعة المعالجة من 42 إلى 178 إطار/ثانية بتراجع هامشي في الدقة $<0.35\\%$.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.",
    "hintAr": "طبق القانون الأساسي: يرسم التكميم المتناظر القيم الحقيقية $r$ إلى عدد مكمم $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z\\right)$، بمقياس $S$ ونقطة صفر $Z$.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "egbac_ai_data_science_ch4_ex_6",
    "titleEn": "Exercise Problem 6: Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance",
    "titleAr": "تمرين 6: العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 6] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance. Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 6] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.\n- Calculation & Results: In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تحسب قيم SHAP الإسهامات الهامشية العادلة للخصائص بالاستناد إلى نظرية الألعاب التعاونية: $\\phi_i = \\sum \\text{weights} [f(S \\cup \\{i\\}) - f(S)]$، محققة بديهيات الكفاءة والتناظر والتجميع.\n- خطوات الحساب والنتيجة: في تدقيق نموذج ائتماني ذكي في مصر، كشف تحليل SHAP أن خاصية الرمز البريدي عملت كوكيل غير دستوري لتحيز ديموغرافي بقيمة $\\phi = -0.42$؛ واستبعادها حقق التكافؤ العادل مع الحفاظ على دقة $94.8\\%$.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.",
      "Calculate final values: In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC.",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: تحسب قيم SHAP الإسهامات الهامشية العادلة للخصائص بالاستناد إلى نظرية الألعاب التعاونية: $\\phi_i = \\sum \\text{weights} [f(S \\cup \\{i\\}) - f(S)]$، محققة بديهيات الكفاءة والتناظر والتجميع.",
      "حساب الناتج النهائي: في تدقيق نموذج ائتماني ذكي في مصر، كشف تحليل SHAP أن خاصية الرمز البريدي عملت كوكيل غير دستوري لتحيز ديموغرافي بقيمة $\\phi = -0.42$؛ واستبعادها حقق التكافؤ العادل مع الحفاظ على دقة $94.8\\%$.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.",
    "hintAr": "طبق القانون الأساسي: تحسب قيم SHAP الإسهامات الهامشية العادلة للخصائص بالاستناد إلى نظرية الألعاب التعاونية: $\\phi_i = \\sum \\text{weights} [f(S \\cup \\{i\\}) - f(S)]$، محققة بديهيات الكفاءة والتناظر والتجميع.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "egbac_ai_data_science_ch4_ex_7",
    "titleEn": "Exercise Problem 7: Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO)",
    "titleAr": "تمرين 7: التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 7] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO). Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 7] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.\n- Calculation & Results: Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: يقوم محسن انعدام التكرار (ZeRO) بتجزئة حالات المحسن (المرحلة 1)، والتدرجات (المرحلة 2)، ومعاملات النموذج (المرحلة 3) عبر كروت GPU، ملغياً هدر الذاكرة ومحافظاً على نفس حجم الاتصال.\n- خطوات الحساب والنتيجة: يتطلب تدريب نموذج لغوي بـ 70 مليار معامل بدقة FP16 ذاكرة 1,120 جيجابايت للأوزان والتدرجات ومحسن Adam. بتطبيق ZeRO Stage 3 عبر 64 كارت A100، ينخفض نصيب كل معالج إلى $17.5\\text{ GB}$، ملائماً سعة الذاكرة تماماً.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.",
      "Calculate final values: Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: يقوم محسن انعدام التكرار (ZeRO) بتجزئة حالات المحسن (المرحلة 1)، والتدرجات (المرحلة 2)، ومعاملات النموذج (المرحلة 3) عبر كروت GPU، ملغياً هدر الذاكرة ومحافظاً على نفس حجم الاتصال.",
      "حساب الناتج النهائي: يتطلب تدريب نموذج لغوي بـ 70 مليار معامل بدقة FP16 ذاكرة 1,120 جيجابايت للأوزان والتدرجات ومحسن Adam. بتطبيق ZeRO Stage 3 عبر 64 كارت A100، ينخفض نصيب كل معالج إلى $17.5\\text{ GB}$، ملائماً سعة الذاكرة تماماً.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.",
    "hintAr": "طبق القانون الأساسي: يقوم محسن انعدام التكرار (ZeRO) بتجزئة حالات المحسن (المرحلة 1)، والتدرجات (المرحلة 2)، ومعاملات النموذج (المرحلة 3) عبر كروت GPU، ملغياً هدر الذاكرة ومحافظاً على نفس حجم الاتصال.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "egbac_ai_data_science_ch4_ex_8",
    "titleEn": "Exercise Problem 8: Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning",
    "titleAr": "تمرين 8: ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 8] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning. Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 8] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.\n- Calculation & Results: Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: يرسم التكميم المتناظر القيم الحقيقية $r$ إلى عدد مكمم $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z\\right)$، بمقياس $S$ ونقطة صفر $Z$.\n- خطوات الحساب والنتيجة: يؤدي تكميم نموذج رؤية حاسوبية من 14 جيجابايت بدقة FP32 إلى INT8 إلى تقليص حجمه إلى $3.5\\text{ GB}$ (بنسبة ضغط $75\\%$) ورفع سرعة المعالجة من 42 إلى 178 إطار/ثانية بتراجع هامشي في الدقة $<0.35\\%$.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.",
      "Calculate final values: Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy.",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: يرسم التكميم المتناظر القيم الحقيقية $r$ إلى عدد مكمم $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z\\right)$، بمقياس $S$ ونقطة صفر $Z$.",
      "حساب الناتج النهائي: يؤدي تكميم نموذج رؤية حاسوبية من 14 جيجابايت بدقة FP32 إلى INT8 إلى تقليص حجمه إلى $3.5\\text{ GB}$ (بنسبة ضغط $75\\%$) ورفع سرعة المعالجة من 42 إلى 178 إطار/ثانية بتراجع هامشي في الدقة $<0.35\\%$.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.",
    "hintAr": "طبق القانون الأساسي: يرسم التكميم المتناظر القيم الحقيقية $r$ إلى عدد مكمم $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z\\right)$، بمقياس $S$ ونقطة صفر $Z$.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "egbac_ai_data_science_ch4_ex_9",
    "titleEn": "Exercise Problem 9: Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance",
    "titleAr": "تمرين 9: العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 9] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance. Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 9] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.\n- Calculation & Results: In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تحسب قيم SHAP الإسهامات الهامشية العادلة للخصائص بالاستناد إلى نظرية الألعاب التعاونية: $\\phi_i = \\sum \\text{weights} [f(S \\cup \\{i\\}) - f(S)]$، محققة بديهيات الكفاءة والتناظر والتجميع.\n- خطوات الحساب والنتيجة: في تدقيق نموذج ائتماني ذكي في مصر، كشف تحليل SHAP أن خاصية الرمز البريدي عملت كوكيل غير دستوري لتحيز ديموغرافي بقيمة $\\phi = -0.42$؛ واستبعادها حقق التكافؤ العادل مع الحفاظ على دقة $94.8\\%$.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.",
      "Calculate final values: In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC.",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: تحسب قيم SHAP الإسهامات الهامشية العادلة للخصائص بالاستناد إلى نظرية الألعاب التعاونية: $\\phi_i = \\sum \\text{weights} [f(S \\cup \\{i\\}) - f(S)]$، محققة بديهيات الكفاءة والتناظر والتجميع.",
      "حساب الناتج النهائي: في تدقيق نموذج ائتماني ذكي في مصر، كشف تحليل SHAP أن خاصية الرمز البريدي عملت كوكيل غير دستوري لتحيز ديموغرافي بقيمة $\\phi = -0.42$؛ واستبعادها حقق التكافؤ العادل مع الحفاظ على دقة $94.8\\%$.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.",
    "hintAr": "طبق القانون الأساسي: تحسب قيم SHAP الإسهامات الهامشية العادلة للخصائص بالاستناد إلى نظرية الألعاب التعاونية: $\\phi_i = \\sum \\text{weights} [f(S \\cup \\{i\\}) - f(S)]$، محققة بديهيات الكفاءة والتناظر والتجميع.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "egbac_ai_data_science_ch4_ex_10",
    "titleEn": "Exercise Problem 10: Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO)",
    "titleAr": "تمرين 10: التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 10] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO). Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 10] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.\n- Calculation & Results: Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: يقوم محسن انعدام التكرار (ZeRO) بتجزئة حالات المحسن (المرحلة 1)، والتدرجات (المرحلة 2)، ومعاملات النموذج (المرحلة 3) عبر كروت GPU، ملغياً هدر الذاكرة ومحافظاً على نفس حجم الاتصال.\n- خطوات الحساب والنتيجة: يتطلب تدريب نموذج لغوي بـ 70 مليار معامل بدقة FP16 ذاكرة 1,120 جيجابايت للأوزان والتدرجات ومحسن Adam. بتطبيق ZeRO Stage 3 عبر 64 كارت A100، ينخفض نصيب كل معالج إلى $17.5\\text{ GB}$، ملائماً سعة الذاكرة تماماً.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.",
      "Calculate final values: Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: يقوم محسن انعدام التكرار (ZeRO) بتجزئة حالات المحسن (المرحلة 1)، والتدرجات (المرحلة 2)، ومعاملات النموذج (المرحلة 3) عبر كروت GPU، ملغياً هدر الذاكرة ومحافظاً على نفس حجم الاتصال.",
      "حساب الناتج النهائي: يتطلب تدريب نموذج لغوي بـ 70 مليار معامل بدقة FP16 ذاكرة 1,120 جيجابايت للأوزان والتدرجات ومحسن Adam. بتطبيق ZeRO Stage 3 عبر 64 كارت A100، ينخفض نصيب كل معالج إلى $17.5\\text{ GB}$، ملائماً سعة الذاكرة تماماً.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.",
    "hintAr": "طبق القانون الأساسي: يقوم محسن انعدام التكرار (ZeRO) بتجزئة حالات المحسن (المرحلة 1)، والتدرجات (المرحلة 2)، ومعاملات النموذج (المرحلة 3) عبر كروت GPU، ملغياً هدر الذاكرة ومحافظاً على نفس حجم الاتصال.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "egbac_ai_data_science_ch4_ex_11",
    "titleEn": "Exercise Problem 11: Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning",
    "titleAr": "تمرين 11: ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 11] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning. Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 11] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.\n- Calculation & Results: Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: يرسم التكميم المتناظر القيم الحقيقية $r$ إلى عدد مكمم $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z\\right)$، بمقياس $S$ ونقطة صفر $Z$.\n- خطوات الحساب والنتيجة: يؤدي تكميم نموذج رؤية حاسوبية من 14 جيجابايت بدقة FP32 إلى INT8 إلى تقليص حجمه إلى $3.5\\text{ GB}$ (بنسبة ضغط $75\\%$) ورفع سرعة المعالجة من 42 إلى 178 إطار/ثانية بتراجع هامشي في الدقة $<0.35\\%$.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.",
      "Calculate final values: Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy.",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: يرسم التكميم المتناظر القيم الحقيقية $r$ إلى عدد مكمم $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z\\right)$، بمقياس $S$ ونقطة صفر $Z$.",
      "حساب الناتج النهائي: يؤدي تكميم نموذج رؤية حاسوبية من 14 جيجابايت بدقة FP32 إلى INT8 إلى تقليص حجمه إلى $3.5\\text{ GB}$ (بنسبة ضغط $75\\%$) ورفع سرعة المعالجة من 42 إلى 178 إطار/ثانية بتراجع هامشي في الدقة $<0.35\\%$.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.",
    "hintAr": "طبق القانون الأساسي: يرسم التكميم المتناظر القيم الحقيقية $r$ إلى عدد مكمم $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z\\right)$، بمقياس $S$ ونقطة صفر $Z$.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "egbac_ai_data_science_ch4_ex_12",
    "titleEn": "Exercise Problem 12: Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance",
    "titleAr": "تمرين 12: العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 12] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance. Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 12] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.\n- Calculation & Results: In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تحسب قيم SHAP الإسهامات الهامشية العادلة للخصائص بالاستناد إلى نظرية الألعاب التعاونية: $\\phi_i = \\sum \\text{weights} [f(S \\cup \\{i\\}) - f(S)]$، محققة بديهيات الكفاءة والتناظر والتجميع.\n- خطوات الحساب والنتيجة: في تدقيق نموذج ائتماني ذكي في مصر، كشف تحليل SHAP أن خاصية الرمز البريدي عملت كوكيل غير دستوري لتحيز ديموغرافي بقيمة $\\phi = -0.42$؛ واستبعادها حقق التكافؤ العادل مع الحفاظ على دقة $94.8\\%$.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.",
      "Calculate final values: In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC.",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: تحسب قيم SHAP الإسهامات الهامشية العادلة للخصائص بالاستناد إلى نظرية الألعاب التعاونية: $\\phi_i = \\sum \\text{weights} [f(S \\cup \\{i\\}) - f(S)]$، محققة بديهيات الكفاءة والتناظر والتجميع.",
      "حساب الناتج النهائي: في تدقيق نموذج ائتماني ذكي في مصر، كشف تحليل SHAP أن خاصية الرمز البريدي عملت كوكيل غير دستوري لتحيز ديموغرافي بقيمة $\\phi = -0.42$؛ واستبعادها حقق التكافؤ العادل مع الحفاظ على دقة $94.8\\%$.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.",
    "hintAr": "طبق القانون الأساسي: تحسب قيم SHAP الإسهامات الهامشية العادلة للخصائص بالاستناد إلى نظرية الألعاب التعاونية: $\\phi_i = \\sum \\text{weights} [f(S \\cup \\{i\\}) - f(S)]$، محققة بديهيات الكفاءة والتناظر والتجميع.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "egbac_ai_data_science_ch4_ex_13",
    "titleEn": "Exercise Problem 13: Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO)",
    "titleAr": "تمرين 13: التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 13] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Distributed Data-Parallel & Pipeline Model Training (DeepSpeed ZeRO). Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 13] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن التدريب الموزع المتوازي للبيانات وخطوط الأنابيب وتقنية DeepSpeed ZeRO. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.\n- Calculation & Results: Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: يقوم محسن انعدام التكرار (ZeRO) بتجزئة حالات المحسن (المرحلة 1)، والتدرجات (المرحلة 2)، ومعاملات النموذج (المرحلة 3) عبر كروت GPU، ملغياً هدر الذاكرة ومحافظاً على نفس حجم الاتصال.\n- خطوات الحساب والنتيجة: يتطلب تدريب نموذج لغوي بـ 70 مليار معامل بدقة FP16 ذاكرة 1,120 جيجابايت للأوزان والتدرجات ومحسن Adam. بتطبيق ZeRO Stage 3 عبر 64 كارت A100، ينخفض نصيب كل معالج إلى $17.5\\text{ GB}$، ملائماً سعة الذاكرة تماماً.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.",
      "Calculate final values: Training a 70-Billion parameter LLM in FP16 requires $140\\text{ GB}$ for weights, $140\\text{ GB}$ for gradients, and $840\\text{ GB}$ for Adam states (total $1,120\\text{ GB}$). ZeRO Stage 3 partitions all states across 64 A100 (80GB) GPUs, reducing per-GPU memory footprint to $\\frac{1120}{64} = 17.5\\text{ GB}$, fitting comfortably within VRAM limits.",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: يقوم محسن انعدام التكرار (ZeRO) بتجزئة حالات المحسن (المرحلة 1)، والتدرجات (المرحلة 2)، ومعاملات النموذج (المرحلة 3) عبر كروت GPU، ملغياً هدر الذاكرة ومحافظاً على نفس حجم الاتصال.",
      "حساب الناتج النهائي: يتطلب تدريب نموذج لغوي بـ 70 مليار معامل بدقة FP16 ذاكرة 1,120 جيجابايت للأوزان والتدرجات ومحسن Adam. بتطبيق ZeRO Stage 3 عبر 64 كارت A100، ينخفض نصيب كل معالج إلى $17.5\\text{ GB}$، ملائماً سعة الذاكرة تماماً.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: The Zero Redundancy Optimizer (ZeRO) partitions optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3) across GPUs, eliminating redundant memory footprint while preserving identical communication volume.",
    "hintAr": "طبق القانون الأساسي: يقوم محسن انعدام التكرار (ZeRO) بتجزئة حالات المحسن (المرحلة 1)، والتدرجات (المرحلة 2)، ومعاملات النموذج (المرحلة 3) عبر كروت GPU، ملغياً هدر الذاكرة ومحافظاً على نفس حجم الاتصال.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "egbac_ai_data_science_ch4_ex_14",
    "titleEn": "Exercise Problem 14: Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning",
    "titleAr": "تمرين 14: ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 14] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Model Compression: Post-Training Quantization (INT8/FP4) & Structured Pruning. Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 14] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن ضغط النماذج: التكميم بعد التدريب (INT8 و FP4) والتقليم المنظم للشبكات. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.\n- Calculation & Results: Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: يرسم التكميم المتناظر القيم الحقيقية $r$ إلى عدد مكمم $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z\\right)$، بمقياس $S$ ونقطة صفر $Z$.\n- خطوات الحساب والنتيجة: يؤدي تكميم نموذج رؤية حاسوبية من 14 جيجابايت بدقة FP32 إلى INT8 إلى تقليص حجمه إلى $3.5\\text{ GB}$ (بنسبة ضغط $75\\%$) ورفع سرعة المعالجة من 42 إلى 178 إطار/ثانية بتراجع هامشي في الدقة $<0.35\\%$.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.",
      "Calculate final values: Quantizing a 14GB FP32 computer vision backbone down to INT8 reduces model file size to $3.5\\text{ GB}$ ($75\\%$ compression ratio) and increases edge TPU throughput from 42 FPS to 178 FPS with less than $0.35\\%$ degradation in top-1 ImageNet accuracy.",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: يرسم التكميم المتناظر القيم الحقيقية $r$ إلى عدد مكمم $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z\\right)$، بمقياس $S$ ونقطة صفر $Z$.",
      "حساب الناتج النهائي: يؤدي تكميم نموذج رؤية حاسوبية من 14 جيجابايت بدقة FP32 إلى INT8 إلى تقليص حجمه إلى $3.5\\text{ GB}$ (بنسبة ضغط $75\\%$) ورفع سرعة المعالجة من 42 إلى 178 إطار/ثانية بتراجع هامشي في الدقة $<0.35\\%$.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: Uniform affine quantization maps real values $r$ to quantized integer $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z, q_{min}, q_{max}\\right)$, where scale $S = \\frac{r_{max} - r_{min}}{q_{max} - q_{min}}$ and zero-point $Z = \\text{round}\\left(\\frac{-r_{min}}{S}\\right) + q_{min}$.",
    "hintAr": "طبق القانون الأساسي: يرسم التكميم المتناظر القيم الحقيقية $r$ إلى عدد مكمم $q = \\text{clamp}\\left(\\text{round}\\left(\\frac{r}{S}\\right) + Z\\right)$، بمقياس $S$ ونقطة صفر $Z$.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "egbac_ai_data_science_ch4_ex_15",
    "titleEn": "Exercise Problem 15: Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance",
    "titleAr": "تمرين 15: العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 15] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Algorithmic Fairness, Explainable AI (SHAP/LIME) & Responsible Governance. Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 15] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن العدالة الخوارزمية، الذكاء الاصطناعي القابل للتفسير (SHAP/LIME) والحوكمة المسؤولة. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.\n- Calculation & Results: In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تحسب قيم SHAP الإسهامات الهامشية العادلة للخصائص بالاستناد إلى نظرية الألعاب التعاونية: $\\phi_i = \\sum \\text{weights} [f(S \\cup \\{i\\}) - f(S)]$، محققة بديهيات الكفاءة والتناظر والتجميع.\n- خطوات الحساب والنتيجة: في تدقيق نموذج ائتماني ذكي في مصر، كشف تحليل SHAP أن خاصية الرمز البريدي عملت كوكيل غير دستوري لتحيز ديموغرافي بقيمة $\\phi = -0.42$؛ واستبعادها حقق التكافؤ العادل مع الحفاظ على دقة $94.8\\%$.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.",
      "Calculate final values: In auditing a high-stakes credit approval AI in Egyptian financial services, SHAP analysis identifies that an engineered zip-code feature acted as an unconstitutional demographic proxy with Shapley value $\\phi_{zip} = -0.42$; eliminating the proxy restored equal opportunity parity while maintaining $94.8\\%$ AUC.",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: تحسب قيم SHAP الإسهامات الهامشية العادلة للخصائص بالاستناد إلى نظرية الألعاب التعاونية: $\\phi_i = \\sum \\text{weights} [f(S \\cup \\{i\\}) - f(S)]$، محققة بديهيات الكفاءة والتناظر والتجميع.",
      "حساب الناتج النهائي: في تدقيق نموذج ائتماني ذكي في مصر، كشف تحليل SHAP أن خاصية الرمز البريدي عملت كوكيل غير دستوري لتحيز ديموغرافي بقيمة $\\phi = -0.42$؛ واستبعادها حقق التكافؤ العادل مع الحفاظ على دقة $94.8\\%$.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: SHAP (SHapley Additive exPlanations) computes fair marginal feature contributions rooted in cooperative game theory: $\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} [f(S \\cup \\{i\\}) - f(S)]$, uniquely satisfying efficiency, symmetry, and additivity axioms.",
    "hintAr": "طبق القانون الأساسي: تحسب قيم SHAP الإسهامات الهامشية العادلة للخصائص بالاستناد إلى نظرية الألعاب التعاونية: $\\phi_i = \\sum \\text{weights} [f(S \\cup \\{i\\}) - f(S)]$، محققة بديهيات الكفاءة والتناظر والتجميع.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  }
];
