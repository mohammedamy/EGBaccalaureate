import type { SolvedProblem } from '../../../types/curriculum';

export const egbac_ai_data_science_ch2SolvedExamples: SolvedProblem[] = [
  {
    "id": "egbac_ai_data_science_ch2_solved_1",
    "titleEn": "Solved Example 1: Variational Autoencoders (VAEs) & Reparameterization Trick",
    "titleAr": "مثال محلول 1: المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick)",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 1] Design, formulate, and evaluate an AI/Data Science model architecture applying Variational Autoencoders (VAEs) & Reparameterization Trick. Specify the mathematical formulations, optimization equations, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 1] صمم واشتق وقيم معمارية نموذج ذكاء اصطناعي أو علم بيانات بتطبيق المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick). وضح الصياغات الرياضية ومعادلات التحسين وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify problem specifications and statistical constraints.\nStep 2: Formulate governing analytical equation: The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.\nStep 3: Execute numerical substitution: In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.\nStep 4: Verify convergence stability, generalization bounds, and algorithmic performance compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات المسألة والقيود الإحصائية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: تمكن حيلة إعادة المعلمة من تدفق التدرجات عبر العينات العشوائية بصياغة المتجه الكامن $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$، حيث $\\epsilon \\sim \\mathcal{N}(0, I)$ عينة ضوضاء عشوائية خارجية ثابتة.\nالخطوة ٣: التعويض العددي وحساب النتائج: في تدريب VAE لتوليد الوجوه، تجمع دالة الخسارة الإجمالية بين خطأ إعادة البناء وعقوبة تباعد كولباك-ليبلر التحليلية $D_{KL} = -\\frac{1}{2} \\sum (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$ لفرض انتظام الفضاء الكامن.\nالخطوة ٤: التحقق من استقرار التقارب، حدود التعميم، وتوافق أداء النموذج.",
    "stepByStepSolutionEn": [
      "Identify system variables, loss functions, and optimization constraints.",
      "Apply formulation: The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.",
      "Perform calculation: In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.",
      "Confirm operational validity and alignment with international AI standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد متغيرات النظام، دوال الخسارة، وقيود التحسين.",
      "تطبيق المعادلة الخوارزمية: تمكن حيلة إعادة المعلمة من تدفق التدرجات عبر العينات العشوائية بصياغة المتجه الكامن $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$، حيث $\\epsilon \\sim \\mathcal{N}(0, I)$ عينة ضوضاء عشوائية خارجية ثابتة.",
      "الحساب العددي الدقيق: في تدريب VAE لتوليد الوجوه، تجمع دالة الخسارة الإجمالية بين خطأ إعادة البناء وعقوبة تباعد كولباك-ليبلر التحليلية $D_{KL} = -\\frac{1}{2} \\sum (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$ لفرض انتظام الفضاء الكامن.",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للذكاء الاصطناعي."
    ],
    "hintEn": "Recall the governing analytical relations for Variational Autoencoders (VAEs) & Reparameterization Trick.",
    "hintAr": "تذكر القوانين والعلاقات التحليلية الحاكمة لـ المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick).",
    "teacherTipEn": "Pay careful attention to vector dimensions and normalization constraints when implementing Variational Autoencoders (VAEs) & Reparameterization Trick.",
    "teacherTipAr": "انتبه جيداً لأبعاد المتجهات وشروط المعايرة والتقييس عند تطبيق المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick)."
  },
  {
    "id": "egbac_ai_data_science_ch2_solved_2",
    "titleEn": "Solved Example 2: Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM)",
    "titleAr": "مثال محلول 2: النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM)",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 2] Design, formulate, and evaluate an AI/Data Science model architecture applying Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM). Specify the mathematical formulations, optimization equations, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 2] صمم واشتق وقيم معمارية نموذج ذكاء اصطناعي أو علم بيانات بتطبيق النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM). وضح الصياغات الرياضية ومعادلات التحسين وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify problem specifications and statistical constraints.\nStep 2: Formulate governing analytical equation: The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.\nStep 3: Execute numerical substitution: During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise.\nStep 4: Verify convergence stability, generalization bounds, and algorithmic performance compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات المسألة والقيود الإحصائية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: تتبع العملية الأمامية التوزيع $q(x_t | x_{t-1}) = \\mathcal{N}(\\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$، وتتيح أخذ العينات مباشرة عند أي خطوة $t$ عبر $q(x_t | x_0) = \\mathcal{N}(\\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$.\nالخطوة ٣: التعويض العددي وحساب النتائج: أثناء الاستدلال، تتنبأ الشبكة العصبية $\\epsilon_\\theta(x_t, t)$ بمركبة الضوضاء المضافة، وتحسب الخطوة العكسية عينة الخطوة السابقة $x_{t-1}$، مسترجعة تفاصيل الصورة الطبيعية من ضوضاء بيضاء نقية.\nالخطوة ٤: التحقق من استقرار التقارب، حدود التعميم، وتوافق أداء النموذج.",
    "stepByStepSolutionEn": [
      "Identify system variables, loss functions, and optimization constraints.",
      "Apply formulation: The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.",
      "Perform calculation: During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise.",
      "Confirm operational validity and alignment with international AI standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد متغيرات النظام، دوال الخسارة، وقيود التحسين.",
      "تطبيق المعادلة الخوارزمية: تتبع العملية الأمامية التوزيع $q(x_t | x_{t-1}) = \\mathcal{N}(\\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$، وتتيح أخذ العينات مباشرة عند أي خطوة $t$ عبر $q(x_t | x_0) = \\mathcal{N}(\\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$.",
      "الحساب العددي الدقيق: أثناء الاستدلال، تتنبأ الشبكة العصبية $\\epsilon_\\theta(x_t, t)$ بمركبة الضوضاء المضافة، وتحسب الخطوة العكسية عينة الخطوة السابقة $x_{t-1}$، مسترجعة تفاصيل الصورة الطبيعية من ضوضاء بيضاء نقية.",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للذكاء الاصطناعي."
    ],
    "hintEn": "Recall the governing analytical relations for Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM).",
    "hintAr": "تذكر القوانين والعلاقات التحليلية الحاكمة لـ النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM).",
    "teacherTipEn": "Pay careful attention to vector dimensions and normalization constraints when implementing Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM).",
    "teacherTipAr": "انتبه جيداً لأبعاد المتجهات وشروط المعايرة والتقييس عند تطبيق النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM)."
  },
  {
    "id": "egbac_ai_data_science_ch2_solved_3",
    "titleEn": "Solved Example 3: Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment",
    "titleAr": "مثال محلول 3: التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 3] Design, formulate, and evaluate an AI/Data Science model architecture applying Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment. Specify the mathematical formulations, optimization equations, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 3] صمم واشتق وقيم معمارية نموذج ذكاء اصطناعي أو علم بيانات بتطبيق التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط. وضح الصياغات الرياضية ومعادلات التحسين وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify problem specifications and statistical constraints.\nStep 2: Formulate governing analytical equation: For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.\nStep 3: Execute numerical substitution: In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights.\nStep 4: Verify convergence stability, generalization bounds, and algorithmic performance compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات المسألة والقيود الإحصائية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: لحزمة من $N$ زوجاً من الصور والنصوص بتضمينات معيرة $I_i$ و $T_j$، تكون مصفوفة التشابه $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$، فتعظم عناصر القطر المتطابقة وتعاقب كافة الأزواج غير المتطابقة.\nالخطوة ٣: التعويض العددي وحساب النتائج: في مهمة تصنيف دون تدريب مسبق (Zero-Shot) عبر 1000 فئة، يحسب CLIP تشابه جيب التمام بين تضمين الصورة و1000 تضمين نصي للأنماط الموجهة، محققاً تعميماً متميزاً دون تعديل أوزان المصنف.\nالخطوة ٤: التحقق من استقرار التقارب، حدود التعميم، وتوافق أداء النموذج.",
    "stepByStepSolutionEn": [
      "Identify system variables, loss functions, and optimization constraints.",
      "Apply formulation: For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.",
      "Perform calculation: In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights.",
      "Confirm operational validity and alignment with international AI standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد متغيرات النظام، دوال الخسارة، وقيود التحسين.",
      "تطبيق المعادلة الخوارزمية: لحزمة من $N$ زوجاً من الصور والنصوص بتضمينات معيرة $I_i$ و $T_j$، تكون مصفوفة التشابه $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$، فتعظم عناصر القطر المتطابقة وتعاقب كافة الأزواج غير المتطابقة.",
      "الحساب العددي الدقيق: في مهمة تصنيف دون تدريب مسبق (Zero-Shot) عبر 1000 فئة، يحسب CLIP تشابه جيب التمام بين تضمين الصورة و1000 تضمين نصي للأنماط الموجهة، محققاً تعميماً متميزاً دون تعديل أوزان المصنف.",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للذكاء الاصطناعي."
    ],
    "hintEn": "Recall the governing analytical relations for Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment.",
    "hintAr": "تذكر القوانين والعلاقات التحليلية الحاكمة لـ التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط.",
    "teacherTipEn": "Pay careful attention to vector dimensions and normalization constraints when implementing Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment.",
    "teacherTipAr": "انتبه جيداً لأبعاد المتجهات وشروط المعايرة والتقييس عند تطبيق التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط."
  },
  {
    "id": "egbac_ai_data_science_ch2_solved_4",
    "titleEn": "Solved Example 4: Variational Autoencoders (VAEs) & Reparameterization Trick",
    "titleAr": "مثال محلول 4: المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick)",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 4] Design, formulate, and evaluate an AI/Data Science model architecture applying Variational Autoencoders (VAEs) & Reparameterization Trick. Specify the mathematical formulations, optimization equations, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 4] صمم واشتق وقيم معمارية نموذج ذكاء اصطناعي أو علم بيانات بتطبيق المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick). وضح الصياغات الرياضية ومعادلات التحسين وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify problem specifications and statistical constraints.\nStep 2: Formulate governing analytical equation: The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.\nStep 3: Execute numerical substitution: In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.\nStep 4: Verify convergence stability, generalization bounds, and algorithmic performance compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات المسألة والقيود الإحصائية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: تمكن حيلة إعادة المعلمة من تدفق التدرجات عبر العينات العشوائية بصياغة المتجه الكامن $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$، حيث $\\epsilon \\sim \\mathcal{N}(0, I)$ عينة ضوضاء عشوائية خارجية ثابتة.\nالخطوة ٣: التعويض العددي وحساب النتائج: في تدريب VAE لتوليد الوجوه، تجمع دالة الخسارة الإجمالية بين خطأ إعادة البناء وعقوبة تباعد كولباك-ليبلر التحليلية $D_{KL} = -\\frac{1}{2} \\sum (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$ لفرض انتظام الفضاء الكامن.\nالخطوة ٤: التحقق من استقرار التقارب، حدود التعميم، وتوافق أداء النموذج.",
    "stepByStepSolutionEn": [
      "Identify system variables, loss functions, and optimization constraints.",
      "Apply formulation: The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.",
      "Perform calculation: In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.",
      "Confirm operational validity and alignment with international AI standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد متغيرات النظام، دوال الخسارة، وقيود التحسين.",
      "تطبيق المعادلة الخوارزمية: تمكن حيلة إعادة المعلمة من تدفق التدرجات عبر العينات العشوائية بصياغة المتجه الكامن $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$، حيث $\\epsilon \\sim \\mathcal{N}(0, I)$ عينة ضوضاء عشوائية خارجية ثابتة.",
      "الحساب العددي الدقيق: في تدريب VAE لتوليد الوجوه، تجمع دالة الخسارة الإجمالية بين خطأ إعادة البناء وعقوبة تباعد كولباك-ليبلر التحليلية $D_{KL} = -\\frac{1}{2} \\sum (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$ لفرض انتظام الفضاء الكامن.",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للذكاء الاصطناعي."
    ],
    "hintEn": "Recall the governing analytical relations for Variational Autoencoders (VAEs) & Reparameterization Trick.",
    "hintAr": "تذكر القوانين والعلاقات التحليلية الحاكمة لـ المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick).",
    "teacherTipEn": "Pay careful attention to vector dimensions and normalization constraints when implementing Variational Autoencoders (VAEs) & Reparameterization Trick.",
    "teacherTipAr": "انتبه جيداً لأبعاد المتجهات وشروط المعايرة والتقييس عند تطبيق المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick)."
  },
  {
    "id": "egbac_ai_data_science_ch2_solved_5",
    "titleEn": "Solved Example 5: Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM)",
    "titleAr": "مثال محلول 5: النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM)",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 5] Design, formulate, and evaluate an AI/Data Science model architecture applying Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM). Specify the mathematical formulations, optimization equations, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 5] صمم واشتق وقيم معمارية نموذج ذكاء اصطناعي أو علم بيانات بتطبيق النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM). وضح الصياغات الرياضية ومعادلات التحسين وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify problem specifications and statistical constraints.\nStep 2: Formulate governing analytical equation: The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.\nStep 3: Execute numerical substitution: During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise.\nStep 4: Verify convergence stability, generalization bounds, and algorithmic performance compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات المسألة والقيود الإحصائية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: تتبع العملية الأمامية التوزيع $q(x_t | x_{t-1}) = \\mathcal{N}(\\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$، وتتيح أخذ العينات مباشرة عند أي خطوة $t$ عبر $q(x_t | x_0) = \\mathcal{N}(\\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$.\nالخطوة ٣: التعويض العددي وحساب النتائج: أثناء الاستدلال، تتنبأ الشبكة العصبية $\\epsilon_\\theta(x_t, t)$ بمركبة الضوضاء المضافة، وتحسب الخطوة العكسية عينة الخطوة السابقة $x_{t-1}$، مسترجعة تفاصيل الصورة الطبيعية من ضوضاء بيضاء نقية.\nالخطوة ٤: التحقق من استقرار التقارب، حدود التعميم، وتوافق أداء النموذج.",
    "stepByStepSolutionEn": [
      "Identify system variables, loss functions, and optimization constraints.",
      "Apply formulation: The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.",
      "Perform calculation: During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise.",
      "Confirm operational validity and alignment with international AI standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد متغيرات النظام، دوال الخسارة، وقيود التحسين.",
      "تطبيق المعادلة الخوارزمية: تتبع العملية الأمامية التوزيع $q(x_t | x_{t-1}) = \\mathcal{N}(\\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$، وتتيح أخذ العينات مباشرة عند أي خطوة $t$ عبر $q(x_t | x_0) = \\mathcal{N}(\\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$.",
      "الحساب العددي الدقيق: أثناء الاستدلال، تتنبأ الشبكة العصبية $\\epsilon_\\theta(x_t, t)$ بمركبة الضوضاء المضافة، وتحسب الخطوة العكسية عينة الخطوة السابقة $x_{t-1}$، مسترجعة تفاصيل الصورة الطبيعية من ضوضاء بيضاء نقية.",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للذكاء الاصطناعي."
    ],
    "hintEn": "Recall the governing analytical relations for Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM).",
    "hintAr": "تذكر القوانين والعلاقات التحليلية الحاكمة لـ النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM).",
    "teacherTipEn": "Pay careful attention to vector dimensions and normalization constraints when implementing Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM).",
    "teacherTipAr": "انتبه جيداً لأبعاد المتجهات وشروط المعايرة والتقييس عند تطبيق النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM)."
  },
  {
    "id": "egbac_ai_data_science_ch2_solved_6",
    "titleEn": "Solved Example 6: Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment",
    "titleAr": "مثال محلول 6: التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 6] Design, formulate, and evaluate an AI/Data Science model architecture applying Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment. Specify the mathematical formulations, optimization equations, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 6] صمم واشتق وقيم معمارية نموذج ذكاء اصطناعي أو علم بيانات بتطبيق التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط. وضح الصياغات الرياضية ومعادلات التحسين وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify problem specifications and statistical constraints.\nStep 2: Formulate governing analytical equation: For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.\nStep 3: Execute numerical substitution: In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights.\nStep 4: Verify convergence stability, generalization bounds, and algorithmic performance compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات المسألة والقيود الإحصائية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: لحزمة من $N$ زوجاً من الصور والنصوص بتضمينات معيرة $I_i$ و $T_j$، تكون مصفوفة التشابه $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$، فتعظم عناصر القطر المتطابقة وتعاقب كافة الأزواج غير المتطابقة.\nالخطوة ٣: التعويض العددي وحساب النتائج: في مهمة تصنيف دون تدريب مسبق (Zero-Shot) عبر 1000 فئة، يحسب CLIP تشابه جيب التمام بين تضمين الصورة و1000 تضمين نصي للأنماط الموجهة، محققاً تعميماً متميزاً دون تعديل أوزان المصنف.\nالخطوة ٤: التحقق من استقرار التقارب، حدود التعميم، وتوافق أداء النموذج.",
    "stepByStepSolutionEn": [
      "Identify system variables, loss functions, and optimization constraints.",
      "Apply formulation: For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.",
      "Perform calculation: In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights.",
      "Confirm operational validity and alignment with international AI standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد متغيرات النظام، دوال الخسارة، وقيود التحسين.",
      "تطبيق المعادلة الخوارزمية: لحزمة من $N$ زوجاً من الصور والنصوص بتضمينات معيرة $I_i$ و $T_j$، تكون مصفوفة التشابه $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$، فتعظم عناصر القطر المتطابقة وتعاقب كافة الأزواج غير المتطابقة.",
      "الحساب العددي الدقيق: في مهمة تصنيف دون تدريب مسبق (Zero-Shot) عبر 1000 فئة، يحسب CLIP تشابه جيب التمام بين تضمين الصورة و1000 تضمين نصي للأنماط الموجهة، محققاً تعميماً متميزاً دون تعديل أوزان المصنف.",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للذكاء الاصطناعي."
    ],
    "hintEn": "Recall the governing analytical relations for Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment.",
    "hintAr": "تذكر القوانين والعلاقات التحليلية الحاكمة لـ التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط.",
    "teacherTipEn": "Pay careful attention to vector dimensions and normalization constraints when implementing Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment.",
    "teacherTipAr": "انتبه جيداً لأبعاد المتجهات وشروط المعايرة والتقييس عند تطبيق التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط."
  },
  {
    "id": "egbac_ai_data_science_ch2_solved_7",
    "titleEn": "Solved Example 7: Variational Autoencoders (VAEs) & Reparameterization Trick",
    "titleAr": "مثال محلول 7: المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick)",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 7] Design, formulate, and evaluate an AI/Data Science model architecture applying Variational Autoencoders (VAEs) & Reparameterization Trick. Specify the mathematical formulations, optimization equations, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 7] صمم واشتق وقيم معمارية نموذج ذكاء اصطناعي أو علم بيانات بتطبيق المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick). وضح الصياغات الرياضية ومعادلات التحسين وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify problem specifications and statistical constraints.\nStep 2: Formulate governing analytical equation: The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.\nStep 3: Execute numerical substitution: In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.\nStep 4: Verify convergence stability, generalization bounds, and algorithmic performance compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات المسألة والقيود الإحصائية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: تمكن حيلة إعادة المعلمة من تدفق التدرجات عبر العينات العشوائية بصياغة المتجه الكامن $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$، حيث $\\epsilon \\sim \\mathcal{N}(0, I)$ عينة ضوضاء عشوائية خارجية ثابتة.\nالخطوة ٣: التعويض العددي وحساب النتائج: في تدريب VAE لتوليد الوجوه، تجمع دالة الخسارة الإجمالية بين خطأ إعادة البناء وعقوبة تباعد كولباك-ليبلر التحليلية $D_{KL} = -\\frac{1}{2} \\sum (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$ لفرض انتظام الفضاء الكامن.\nالخطوة ٤: التحقق من استقرار التقارب، حدود التعميم، وتوافق أداء النموذج.",
    "stepByStepSolutionEn": [
      "Identify system variables, loss functions, and optimization constraints.",
      "Apply formulation: The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.",
      "Perform calculation: In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.",
      "Confirm operational validity and alignment with international AI standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد متغيرات النظام، دوال الخسارة، وقيود التحسين.",
      "تطبيق المعادلة الخوارزمية: تمكن حيلة إعادة المعلمة من تدفق التدرجات عبر العينات العشوائية بصياغة المتجه الكامن $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$، حيث $\\epsilon \\sim \\mathcal{N}(0, I)$ عينة ضوضاء عشوائية خارجية ثابتة.",
      "الحساب العددي الدقيق: في تدريب VAE لتوليد الوجوه، تجمع دالة الخسارة الإجمالية بين خطأ إعادة البناء وعقوبة تباعد كولباك-ليبلر التحليلية $D_{KL} = -\\frac{1}{2} \\sum (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$ لفرض انتظام الفضاء الكامن.",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للذكاء الاصطناعي."
    ],
    "hintEn": "Recall the governing analytical relations for Variational Autoencoders (VAEs) & Reparameterization Trick.",
    "hintAr": "تذكر القوانين والعلاقات التحليلية الحاكمة لـ المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick).",
    "teacherTipEn": "Pay careful attention to vector dimensions and normalization constraints when implementing Variational Autoencoders (VAEs) & Reparameterization Trick.",
    "teacherTipAr": "انتبه جيداً لأبعاد المتجهات وشروط المعايرة والتقييس عند تطبيق المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick)."
  },
  {
    "id": "egbac_ai_data_science_ch2_solved_8",
    "titleEn": "Solved Example 8: Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM)",
    "titleAr": "مثال محلول 8: النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM)",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 8] Design, formulate, and evaluate an AI/Data Science model architecture applying Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM). Specify the mathematical formulations, optimization equations, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 8] صمم واشتق وقيم معمارية نموذج ذكاء اصطناعي أو علم بيانات بتطبيق النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM). وضح الصياغات الرياضية ومعادلات التحسين وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify problem specifications and statistical constraints.\nStep 2: Formulate governing analytical equation: The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.\nStep 3: Execute numerical substitution: During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise.\nStep 4: Verify convergence stability, generalization bounds, and algorithmic performance compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات المسألة والقيود الإحصائية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: تتبع العملية الأمامية التوزيع $q(x_t | x_{t-1}) = \\mathcal{N}(\\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$، وتتيح أخذ العينات مباشرة عند أي خطوة $t$ عبر $q(x_t | x_0) = \\mathcal{N}(\\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$.\nالخطوة ٣: التعويض العددي وحساب النتائج: أثناء الاستدلال، تتنبأ الشبكة العصبية $\\epsilon_\\theta(x_t, t)$ بمركبة الضوضاء المضافة، وتحسب الخطوة العكسية عينة الخطوة السابقة $x_{t-1}$، مسترجعة تفاصيل الصورة الطبيعية من ضوضاء بيضاء نقية.\nالخطوة ٤: التحقق من استقرار التقارب، حدود التعميم، وتوافق أداء النموذج.",
    "stepByStepSolutionEn": [
      "Identify system variables, loss functions, and optimization constraints.",
      "Apply formulation: The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.",
      "Perform calculation: During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise.",
      "Confirm operational validity and alignment with international AI standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد متغيرات النظام، دوال الخسارة، وقيود التحسين.",
      "تطبيق المعادلة الخوارزمية: تتبع العملية الأمامية التوزيع $q(x_t | x_{t-1}) = \\mathcal{N}(\\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$، وتتيح أخذ العينات مباشرة عند أي خطوة $t$ عبر $q(x_t | x_0) = \\mathcal{N}(\\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$.",
      "الحساب العددي الدقيق: أثناء الاستدلال، تتنبأ الشبكة العصبية $\\epsilon_\\theta(x_t, t)$ بمركبة الضوضاء المضافة، وتحسب الخطوة العكسية عينة الخطوة السابقة $x_{t-1}$، مسترجعة تفاصيل الصورة الطبيعية من ضوضاء بيضاء نقية.",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للذكاء الاصطناعي."
    ],
    "hintEn": "Recall the governing analytical relations for Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM).",
    "hintAr": "تذكر القوانين والعلاقات التحليلية الحاكمة لـ النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM).",
    "teacherTipEn": "Pay careful attention to vector dimensions and normalization constraints when implementing Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM).",
    "teacherTipAr": "انتبه جيداً لأبعاد المتجهات وشروط المعايرة والتقييس عند تطبيق النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM)."
  },
  {
    "id": "egbac_ai_data_science_ch2_solved_9",
    "titleEn": "Solved Example 9: Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment",
    "titleAr": "مثال محلول 9: التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 9] Design, formulate, and evaluate an AI/Data Science model architecture applying Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment. Specify the mathematical formulations, optimization equations, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 9] صمم واشتق وقيم معمارية نموذج ذكاء اصطناعي أو علم بيانات بتطبيق التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط. وضح الصياغات الرياضية ومعادلات التحسين وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify problem specifications and statistical constraints.\nStep 2: Formulate governing analytical equation: For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.\nStep 3: Execute numerical substitution: In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights.\nStep 4: Verify convergence stability, generalization bounds, and algorithmic performance compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات المسألة والقيود الإحصائية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: لحزمة من $N$ زوجاً من الصور والنصوص بتضمينات معيرة $I_i$ و $T_j$، تكون مصفوفة التشابه $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$، فتعظم عناصر القطر المتطابقة وتعاقب كافة الأزواج غير المتطابقة.\nالخطوة ٣: التعويض العددي وحساب النتائج: في مهمة تصنيف دون تدريب مسبق (Zero-Shot) عبر 1000 فئة، يحسب CLIP تشابه جيب التمام بين تضمين الصورة و1000 تضمين نصي للأنماط الموجهة، محققاً تعميماً متميزاً دون تعديل أوزان المصنف.\nالخطوة ٤: التحقق من استقرار التقارب، حدود التعميم، وتوافق أداء النموذج.",
    "stepByStepSolutionEn": [
      "Identify system variables, loss functions, and optimization constraints.",
      "Apply formulation: For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.",
      "Perform calculation: In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights.",
      "Confirm operational validity and alignment with international AI standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد متغيرات النظام، دوال الخسارة، وقيود التحسين.",
      "تطبيق المعادلة الخوارزمية: لحزمة من $N$ زوجاً من الصور والنصوص بتضمينات معيرة $I_i$ و $T_j$، تكون مصفوفة التشابه $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$، فتعظم عناصر القطر المتطابقة وتعاقب كافة الأزواج غير المتطابقة.",
      "الحساب العددي الدقيق: في مهمة تصنيف دون تدريب مسبق (Zero-Shot) عبر 1000 فئة، يحسب CLIP تشابه جيب التمام بين تضمين الصورة و1000 تضمين نصي للأنماط الموجهة، محققاً تعميماً متميزاً دون تعديل أوزان المصنف.",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للذكاء الاصطناعي."
    ],
    "hintEn": "Recall the governing analytical relations for Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment.",
    "hintAr": "تذكر القوانين والعلاقات التحليلية الحاكمة لـ التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط.",
    "teacherTipEn": "Pay careful attention to vector dimensions and normalization constraints when implementing Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment.",
    "teacherTipAr": "انتبه جيداً لأبعاد المتجهات وشروط المعايرة والتقييس عند تطبيق التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط."
  },
  {
    "id": "egbac_ai_data_science_ch2_solved_10",
    "titleEn": "Solved Example 10: Variational Autoencoders (VAEs) & Reparameterization Trick",
    "titleAr": "مثال محلول 10: المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick)",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 10] Design, formulate, and evaluate an AI/Data Science model architecture applying Variational Autoencoders (VAEs) & Reparameterization Trick. Specify the mathematical formulations, optimization equations, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 10] صمم واشتق وقيم معمارية نموذج ذكاء اصطناعي أو علم بيانات بتطبيق المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick). وضح الصياغات الرياضية ومعادلات التحسين وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify problem specifications and statistical constraints.\nStep 2: Formulate governing analytical equation: The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.\nStep 3: Execute numerical substitution: In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.\nStep 4: Verify convergence stability, generalization bounds, and algorithmic performance compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات المسألة والقيود الإحصائية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: تمكن حيلة إعادة المعلمة من تدفق التدرجات عبر العينات العشوائية بصياغة المتجه الكامن $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$، حيث $\\epsilon \\sim \\mathcal{N}(0, I)$ عينة ضوضاء عشوائية خارجية ثابتة.\nالخطوة ٣: التعويض العددي وحساب النتائج: في تدريب VAE لتوليد الوجوه، تجمع دالة الخسارة الإجمالية بين خطأ إعادة البناء وعقوبة تباعد كولباك-ليبلر التحليلية $D_{KL} = -\\frac{1}{2} \\sum (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$ لفرض انتظام الفضاء الكامن.\nالخطوة ٤: التحقق من استقرار التقارب، حدود التعميم، وتوافق أداء النموذج.",
    "stepByStepSolutionEn": [
      "Identify system variables, loss functions, and optimization constraints.",
      "Apply formulation: The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.",
      "Perform calculation: In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.",
      "Confirm operational validity and alignment with international AI standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد متغيرات النظام، دوال الخسارة، وقيود التحسين.",
      "تطبيق المعادلة الخوارزمية: تمكن حيلة إعادة المعلمة من تدفق التدرجات عبر العينات العشوائية بصياغة المتجه الكامن $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$، حيث $\\epsilon \\sim \\mathcal{N}(0, I)$ عينة ضوضاء عشوائية خارجية ثابتة.",
      "الحساب العددي الدقيق: في تدريب VAE لتوليد الوجوه، تجمع دالة الخسارة الإجمالية بين خطأ إعادة البناء وعقوبة تباعد كولباك-ليبلر التحليلية $D_{KL} = -\\frac{1}{2} \\sum (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$ لفرض انتظام الفضاء الكامن.",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للذكاء الاصطناعي."
    ],
    "hintEn": "Recall the governing analytical relations for Variational Autoencoders (VAEs) & Reparameterization Trick.",
    "hintAr": "تذكر القوانين والعلاقات التحليلية الحاكمة لـ المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick).",
    "teacherTipEn": "Pay careful attention to vector dimensions and normalization constraints when implementing Variational Autoencoders (VAEs) & Reparameterization Trick.",
    "teacherTipAr": "انتبه جيداً لأبعاد المتجهات وشروط المعايرة والتقييس عند تطبيق المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick)."
  }
];

export const egbac_ai_data_science_ch2ExerciseProblems: SolvedProblem[] = [
  {
    "id": "egbac_ai_data_science_ch2_ex_1",
    "titleEn": "Exercise Problem 1: Variational Autoencoders (VAEs) & Reparameterization Trick",
    "titleAr": "تمرين 1: المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick)",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 1] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Variational Autoencoders (VAEs) & Reparameterization Trick. Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 1] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick). استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.\n- Calculation & Results: In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تمكن حيلة إعادة المعلمة من تدفق التدرجات عبر العينات العشوائية بصياغة المتجه الكامن $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$، حيث $\\epsilon \\sim \\mathcal{N}(0, I)$ عينة ضوضاء عشوائية خارجية ثابتة.\n- خطوات الحساب والنتيجة: في تدريب VAE لتوليد الوجوه، تجمع دالة الخسارة الإجمالية بين خطأ إعادة البناء وعقوبة تباعد كولباك-ليبلر التحليلية $D_{KL} = -\\frac{1}{2} \\sum (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$ لفرض انتظام الفضاء الكامن.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.",
      "Calculate final values: In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: تمكن حيلة إعادة المعلمة من تدفق التدرجات عبر العينات العشوائية بصياغة المتجه الكامن $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$، حيث $\\epsilon \\sim \\mathcal{N}(0, I)$ عينة ضوضاء عشوائية خارجية ثابتة.",
      "حساب الناتج النهائي: في تدريب VAE لتوليد الوجوه، تجمع دالة الخسارة الإجمالية بين خطأ إعادة البناء وعقوبة تباعد كولباك-ليبلر التحليلية $D_{KL} = -\\frac{1}{2} \\sum (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$ لفرض انتظام الفضاء الكامن.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.",
    "hintAr": "طبق القانون الأساسي: تمكن حيلة إعادة المعلمة من تدفق التدرجات عبر العينات العشوائية بصياغة المتجه الكامن $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$، حيث $\\epsilon \\sim \\mathcal{N}(0, I)$ عينة ضوضاء عشوائية خارجية ثابتة.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "egbac_ai_data_science_ch2_ex_2",
    "titleEn": "Exercise Problem 2: Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM)",
    "titleAr": "تمرين 2: النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM)",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 2] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM). Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 2] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM). استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.\n- Calculation & Results: During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تتبع العملية الأمامية التوزيع $q(x_t | x_{t-1}) = \\mathcal{N}(\\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$، وتتيح أخذ العينات مباشرة عند أي خطوة $t$ عبر $q(x_t | x_0) = \\mathcal{N}(\\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$.\n- خطوات الحساب والنتيجة: أثناء الاستدلال، تتنبأ الشبكة العصبية $\\epsilon_\\theta(x_t, t)$ بمركبة الضوضاء المضافة، وتحسب الخطوة العكسية عينة الخطوة السابقة $x_{t-1}$، مسترجعة تفاصيل الصورة الطبيعية من ضوضاء بيضاء نقية.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.",
      "Calculate final values: During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise.",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: تتبع العملية الأمامية التوزيع $q(x_t | x_{t-1}) = \\mathcal{N}(\\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$، وتتيح أخذ العينات مباشرة عند أي خطوة $t$ عبر $q(x_t | x_0) = \\mathcal{N}(\\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$.",
      "حساب الناتج النهائي: أثناء الاستدلال، تتنبأ الشبكة العصبية $\\epsilon_\\theta(x_t, t)$ بمركبة الضوضاء المضافة، وتحسب الخطوة العكسية عينة الخطوة السابقة $x_{t-1}$، مسترجعة تفاصيل الصورة الطبيعية من ضوضاء بيضاء نقية.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.",
    "hintAr": "طبق القانون الأساسي: تتبع العملية الأمامية التوزيع $q(x_t | x_{t-1}) = \\mathcal{N}(\\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$، وتتيح أخذ العينات مباشرة عند أي خطوة $t$ عبر $q(x_t | x_0) = \\mathcal{N}(\\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "egbac_ai_data_science_ch2_ex_3",
    "titleEn": "Exercise Problem 3: Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment",
    "titleAr": "تمرين 3: التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 3] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment. Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 3] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.\n- Calculation & Results: In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: لحزمة من $N$ زوجاً من الصور والنصوص بتضمينات معيرة $I_i$ و $T_j$، تكون مصفوفة التشابه $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$، فتعظم عناصر القطر المتطابقة وتعاقب كافة الأزواج غير المتطابقة.\n- خطوات الحساب والنتيجة: في مهمة تصنيف دون تدريب مسبق (Zero-Shot) عبر 1000 فئة، يحسب CLIP تشابه جيب التمام بين تضمين الصورة و1000 تضمين نصي للأنماط الموجهة، محققاً تعميماً متميزاً دون تعديل أوزان المصنف.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.",
      "Calculate final values: In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights.",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: لحزمة من $N$ زوجاً من الصور والنصوص بتضمينات معيرة $I_i$ و $T_j$، تكون مصفوفة التشابه $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$، فتعظم عناصر القطر المتطابقة وتعاقب كافة الأزواج غير المتطابقة.",
      "حساب الناتج النهائي: في مهمة تصنيف دون تدريب مسبق (Zero-Shot) عبر 1000 فئة، يحسب CLIP تشابه جيب التمام بين تضمين الصورة و1000 تضمين نصي للأنماط الموجهة، محققاً تعميماً متميزاً دون تعديل أوزان المصنف.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.",
    "hintAr": "طبق القانون الأساسي: لحزمة من $N$ زوجاً من الصور والنصوص بتضمينات معيرة $I_i$ و $T_j$، تكون مصفوفة التشابه $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$، فتعظم عناصر القطر المتطابقة وتعاقب كافة الأزواج غير المتطابقة.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "egbac_ai_data_science_ch2_ex_4",
    "titleEn": "Exercise Problem 4: Variational Autoencoders (VAEs) & Reparameterization Trick",
    "titleAr": "تمرين 4: المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick)",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 4] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Variational Autoencoders (VAEs) & Reparameterization Trick. Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 4] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick). استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.\n- Calculation & Results: In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تمكن حيلة إعادة المعلمة من تدفق التدرجات عبر العينات العشوائية بصياغة المتجه الكامن $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$، حيث $\\epsilon \\sim \\mathcal{N}(0, I)$ عينة ضوضاء عشوائية خارجية ثابتة.\n- خطوات الحساب والنتيجة: في تدريب VAE لتوليد الوجوه، تجمع دالة الخسارة الإجمالية بين خطأ إعادة البناء وعقوبة تباعد كولباك-ليبلر التحليلية $D_{KL} = -\\frac{1}{2} \\sum (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$ لفرض انتظام الفضاء الكامن.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.",
      "Calculate final values: In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: تمكن حيلة إعادة المعلمة من تدفق التدرجات عبر العينات العشوائية بصياغة المتجه الكامن $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$، حيث $\\epsilon \\sim \\mathcal{N}(0, I)$ عينة ضوضاء عشوائية خارجية ثابتة.",
      "حساب الناتج النهائي: في تدريب VAE لتوليد الوجوه، تجمع دالة الخسارة الإجمالية بين خطأ إعادة البناء وعقوبة تباعد كولباك-ليبلر التحليلية $D_{KL} = -\\frac{1}{2} \\sum (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$ لفرض انتظام الفضاء الكامن.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.",
    "hintAr": "طبق القانون الأساسي: تمكن حيلة إعادة المعلمة من تدفق التدرجات عبر العينات العشوائية بصياغة المتجه الكامن $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$، حيث $\\epsilon \\sim \\mathcal{N}(0, I)$ عينة ضوضاء عشوائية خارجية ثابتة.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "egbac_ai_data_science_ch2_ex_5",
    "titleEn": "Exercise Problem 5: Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM)",
    "titleAr": "تمرين 5: النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM)",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 5] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM). Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 5] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM). استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.\n- Calculation & Results: During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تتبع العملية الأمامية التوزيع $q(x_t | x_{t-1}) = \\mathcal{N}(\\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$، وتتيح أخذ العينات مباشرة عند أي خطوة $t$ عبر $q(x_t | x_0) = \\mathcal{N}(\\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$.\n- خطوات الحساب والنتيجة: أثناء الاستدلال، تتنبأ الشبكة العصبية $\\epsilon_\\theta(x_t, t)$ بمركبة الضوضاء المضافة، وتحسب الخطوة العكسية عينة الخطوة السابقة $x_{t-1}$، مسترجعة تفاصيل الصورة الطبيعية من ضوضاء بيضاء نقية.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.",
      "Calculate final values: During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise.",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: تتبع العملية الأمامية التوزيع $q(x_t | x_{t-1}) = \\mathcal{N}(\\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$، وتتيح أخذ العينات مباشرة عند أي خطوة $t$ عبر $q(x_t | x_0) = \\mathcal{N}(\\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$.",
      "حساب الناتج النهائي: أثناء الاستدلال، تتنبأ الشبكة العصبية $\\epsilon_\\theta(x_t, t)$ بمركبة الضوضاء المضافة، وتحسب الخطوة العكسية عينة الخطوة السابقة $x_{t-1}$، مسترجعة تفاصيل الصورة الطبيعية من ضوضاء بيضاء نقية.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.",
    "hintAr": "طبق القانون الأساسي: تتبع العملية الأمامية التوزيع $q(x_t | x_{t-1}) = \\mathcal{N}(\\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$، وتتيح أخذ العينات مباشرة عند أي خطوة $t$ عبر $q(x_t | x_0) = \\mathcal{N}(\\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "egbac_ai_data_science_ch2_ex_6",
    "titleEn": "Exercise Problem 6: Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment",
    "titleAr": "تمرين 6: التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 6] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment. Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 6] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.\n- Calculation & Results: In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: لحزمة من $N$ زوجاً من الصور والنصوص بتضمينات معيرة $I_i$ و $T_j$، تكون مصفوفة التشابه $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$، فتعظم عناصر القطر المتطابقة وتعاقب كافة الأزواج غير المتطابقة.\n- خطوات الحساب والنتيجة: في مهمة تصنيف دون تدريب مسبق (Zero-Shot) عبر 1000 فئة، يحسب CLIP تشابه جيب التمام بين تضمين الصورة و1000 تضمين نصي للأنماط الموجهة، محققاً تعميماً متميزاً دون تعديل أوزان المصنف.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.",
      "Calculate final values: In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights.",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: لحزمة من $N$ زوجاً من الصور والنصوص بتضمينات معيرة $I_i$ و $T_j$، تكون مصفوفة التشابه $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$، فتعظم عناصر القطر المتطابقة وتعاقب كافة الأزواج غير المتطابقة.",
      "حساب الناتج النهائي: في مهمة تصنيف دون تدريب مسبق (Zero-Shot) عبر 1000 فئة، يحسب CLIP تشابه جيب التمام بين تضمين الصورة و1000 تضمين نصي للأنماط الموجهة، محققاً تعميماً متميزاً دون تعديل أوزان المصنف.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.",
    "hintAr": "طبق القانون الأساسي: لحزمة من $N$ زوجاً من الصور والنصوص بتضمينات معيرة $I_i$ و $T_j$، تكون مصفوفة التشابه $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$، فتعظم عناصر القطر المتطابقة وتعاقب كافة الأزواج غير المتطابقة.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "egbac_ai_data_science_ch2_ex_7",
    "titleEn": "Exercise Problem 7: Variational Autoencoders (VAEs) & Reparameterization Trick",
    "titleAr": "تمرين 7: المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick)",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 7] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Variational Autoencoders (VAEs) & Reparameterization Trick. Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 7] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick). استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.\n- Calculation & Results: In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تمكن حيلة إعادة المعلمة من تدفق التدرجات عبر العينات العشوائية بصياغة المتجه الكامن $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$، حيث $\\epsilon \\sim \\mathcal{N}(0, I)$ عينة ضوضاء عشوائية خارجية ثابتة.\n- خطوات الحساب والنتيجة: في تدريب VAE لتوليد الوجوه، تجمع دالة الخسارة الإجمالية بين خطأ إعادة البناء وعقوبة تباعد كولباك-ليبلر التحليلية $D_{KL} = -\\frac{1}{2} \\sum (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$ لفرض انتظام الفضاء الكامن.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.",
      "Calculate final values: In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: تمكن حيلة إعادة المعلمة من تدفق التدرجات عبر العينات العشوائية بصياغة المتجه الكامن $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$، حيث $\\epsilon \\sim \\mathcal{N}(0, I)$ عينة ضوضاء عشوائية خارجية ثابتة.",
      "حساب الناتج النهائي: في تدريب VAE لتوليد الوجوه، تجمع دالة الخسارة الإجمالية بين خطأ إعادة البناء وعقوبة تباعد كولباك-ليبلر التحليلية $D_{KL} = -\\frac{1}{2} \\sum (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$ لفرض انتظام الفضاء الكامن.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.",
    "hintAr": "طبق القانون الأساسي: تمكن حيلة إعادة المعلمة من تدفق التدرجات عبر العينات العشوائية بصياغة المتجه الكامن $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$، حيث $\\epsilon \\sim \\mathcal{N}(0, I)$ عينة ضوضاء عشوائية خارجية ثابتة.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "egbac_ai_data_science_ch2_ex_8",
    "titleEn": "Exercise Problem 8: Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM)",
    "titleAr": "تمرين 8: النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM)",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 8] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM). Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 8] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM). استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.\n- Calculation & Results: During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تتبع العملية الأمامية التوزيع $q(x_t | x_{t-1}) = \\mathcal{N}(\\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$، وتتيح أخذ العينات مباشرة عند أي خطوة $t$ عبر $q(x_t | x_0) = \\mathcal{N}(\\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$.\n- خطوات الحساب والنتيجة: أثناء الاستدلال، تتنبأ الشبكة العصبية $\\epsilon_\\theta(x_t, t)$ بمركبة الضوضاء المضافة، وتحسب الخطوة العكسية عينة الخطوة السابقة $x_{t-1}$، مسترجعة تفاصيل الصورة الطبيعية من ضوضاء بيضاء نقية.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.",
      "Calculate final values: During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise.",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: تتبع العملية الأمامية التوزيع $q(x_t | x_{t-1}) = \\mathcal{N}(\\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$، وتتيح أخذ العينات مباشرة عند أي خطوة $t$ عبر $q(x_t | x_0) = \\mathcal{N}(\\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$.",
      "حساب الناتج النهائي: أثناء الاستدلال، تتنبأ الشبكة العصبية $\\epsilon_\\theta(x_t, t)$ بمركبة الضوضاء المضافة، وتحسب الخطوة العكسية عينة الخطوة السابقة $x_{t-1}$، مسترجعة تفاصيل الصورة الطبيعية من ضوضاء بيضاء نقية.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.",
    "hintAr": "طبق القانون الأساسي: تتبع العملية الأمامية التوزيع $q(x_t | x_{t-1}) = \\mathcal{N}(\\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$، وتتيح أخذ العينات مباشرة عند أي خطوة $t$ عبر $q(x_t | x_0) = \\mathcal{N}(\\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "egbac_ai_data_science_ch2_ex_9",
    "titleEn": "Exercise Problem 9: Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment",
    "titleAr": "تمرين 9: التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 9] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment. Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 9] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.\n- Calculation & Results: In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: لحزمة من $N$ زوجاً من الصور والنصوص بتضمينات معيرة $I_i$ و $T_j$، تكون مصفوفة التشابه $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$، فتعظم عناصر القطر المتطابقة وتعاقب كافة الأزواج غير المتطابقة.\n- خطوات الحساب والنتيجة: في مهمة تصنيف دون تدريب مسبق (Zero-Shot) عبر 1000 فئة، يحسب CLIP تشابه جيب التمام بين تضمين الصورة و1000 تضمين نصي للأنماط الموجهة، محققاً تعميماً متميزاً دون تعديل أوزان المصنف.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.",
      "Calculate final values: In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights.",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: لحزمة من $N$ زوجاً من الصور والنصوص بتضمينات معيرة $I_i$ و $T_j$، تكون مصفوفة التشابه $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$، فتعظم عناصر القطر المتطابقة وتعاقب كافة الأزواج غير المتطابقة.",
      "حساب الناتج النهائي: في مهمة تصنيف دون تدريب مسبق (Zero-Shot) عبر 1000 فئة، يحسب CLIP تشابه جيب التمام بين تضمين الصورة و1000 تضمين نصي للأنماط الموجهة، محققاً تعميماً متميزاً دون تعديل أوزان المصنف.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.",
    "hintAr": "طبق القانون الأساسي: لحزمة من $N$ زوجاً من الصور والنصوص بتضمينات معيرة $I_i$ و $T_j$، تكون مصفوفة التشابه $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$، فتعظم عناصر القطر المتطابقة وتعاقب كافة الأزواج غير المتطابقة.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "egbac_ai_data_science_ch2_ex_10",
    "titleEn": "Exercise Problem 10: Variational Autoencoders (VAEs) & Reparameterization Trick",
    "titleAr": "تمرين 10: المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick)",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 10] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Variational Autoencoders (VAEs) & Reparameterization Trick. Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 10] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick). استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.\n- Calculation & Results: In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تمكن حيلة إعادة المعلمة من تدفق التدرجات عبر العينات العشوائية بصياغة المتجه الكامن $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$، حيث $\\epsilon \\sim \\mathcal{N}(0, I)$ عينة ضوضاء عشوائية خارجية ثابتة.\n- خطوات الحساب والنتيجة: في تدريب VAE لتوليد الوجوه، تجمع دالة الخسارة الإجمالية بين خطأ إعادة البناء وعقوبة تباعد كولباك-ليبلر التحليلية $D_{KL} = -\\frac{1}{2} \\sum (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$ لفرض انتظام الفضاء الكامن.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.",
      "Calculate final values: In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: تمكن حيلة إعادة المعلمة من تدفق التدرجات عبر العينات العشوائية بصياغة المتجه الكامن $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$، حيث $\\epsilon \\sim \\mathcal{N}(0, I)$ عينة ضوضاء عشوائية خارجية ثابتة.",
      "حساب الناتج النهائي: في تدريب VAE لتوليد الوجوه، تجمع دالة الخسارة الإجمالية بين خطأ إعادة البناء وعقوبة تباعد كولباك-ليبلر التحليلية $D_{KL} = -\\frac{1}{2} \\sum (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$ لفرض انتظام الفضاء الكامن.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.",
    "hintAr": "طبق القانون الأساسي: تمكن حيلة إعادة المعلمة من تدفق التدرجات عبر العينات العشوائية بصياغة المتجه الكامن $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$، حيث $\\epsilon \\sim \\mathcal{N}(0, I)$ عينة ضوضاء عشوائية خارجية ثابتة.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "egbac_ai_data_science_ch2_ex_11",
    "titleEn": "Exercise Problem 11: Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM)",
    "titleAr": "تمرين 11: النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM)",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 11] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM). Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 11] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM). استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.\n- Calculation & Results: During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تتبع العملية الأمامية التوزيع $q(x_t | x_{t-1}) = \\mathcal{N}(\\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$، وتتيح أخذ العينات مباشرة عند أي خطوة $t$ عبر $q(x_t | x_0) = \\mathcal{N}(\\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$.\n- خطوات الحساب والنتيجة: أثناء الاستدلال، تتنبأ الشبكة العصبية $\\epsilon_\\theta(x_t, t)$ بمركبة الضوضاء المضافة، وتحسب الخطوة العكسية عينة الخطوة السابقة $x_{t-1}$، مسترجعة تفاصيل الصورة الطبيعية من ضوضاء بيضاء نقية.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.",
      "Calculate final values: During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise.",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: تتبع العملية الأمامية التوزيع $q(x_t | x_{t-1}) = \\mathcal{N}(\\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$، وتتيح أخذ العينات مباشرة عند أي خطوة $t$ عبر $q(x_t | x_0) = \\mathcal{N}(\\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$.",
      "حساب الناتج النهائي: أثناء الاستدلال، تتنبأ الشبكة العصبية $\\epsilon_\\theta(x_t, t)$ بمركبة الضوضاء المضافة، وتحسب الخطوة العكسية عينة الخطوة السابقة $x_{t-1}$، مسترجعة تفاصيل الصورة الطبيعية من ضوضاء بيضاء نقية.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.",
    "hintAr": "طبق القانون الأساسي: تتبع العملية الأمامية التوزيع $q(x_t | x_{t-1}) = \\mathcal{N}(\\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$، وتتيح أخذ العينات مباشرة عند أي خطوة $t$ عبر $q(x_t | x_0) = \\mathcal{N}(\\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "egbac_ai_data_science_ch2_ex_12",
    "titleEn": "Exercise Problem 12: Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment",
    "titleAr": "تمرين 12: التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 12] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment. Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 12] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.\n- Calculation & Results: In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: لحزمة من $N$ زوجاً من الصور والنصوص بتضمينات معيرة $I_i$ و $T_j$، تكون مصفوفة التشابه $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$، فتعظم عناصر القطر المتطابقة وتعاقب كافة الأزواج غير المتطابقة.\n- خطوات الحساب والنتيجة: في مهمة تصنيف دون تدريب مسبق (Zero-Shot) عبر 1000 فئة، يحسب CLIP تشابه جيب التمام بين تضمين الصورة و1000 تضمين نصي للأنماط الموجهة، محققاً تعميماً متميزاً دون تعديل أوزان المصنف.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.",
      "Calculate final values: In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights.",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: لحزمة من $N$ زوجاً من الصور والنصوص بتضمينات معيرة $I_i$ و $T_j$، تكون مصفوفة التشابه $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$، فتعظم عناصر القطر المتطابقة وتعاقب كافة الأزواج غير المتطابقة.",
      "حساب الناتج النهائي: في مهمة تصنيف دون تدريب مسبق (Zero-Shot) عبر 1000 فئة، يحسب CLIP تشابه جيب التمام بين تضمين الصورة و1000 تضمين نصي للأنماط الموجهة، محققاً تعميماً متميزاً دون تعديل أوزان المصنف.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.",
    "hintAr": "طبق القانون الأساسي: لحزمة من $N$ زوجاً من الصور والنصوص بتضمينات معيرة $I_i$ و $T_j$، تكون مصفوفة التشابه $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$، فتعظم عناصر القطر المتطابقة وتعاقب كافة الأزواج غير المتطابقة.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "egbac_ai_data_science_ch2_ex_13",
    "titleEn": "Exercise Problem 13: Variational Autoencoders (VAEs) & Reparameterization Trick",
    "titleAr": "تمرين 13: المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick)",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 13] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Variational Autoencoders (VAEs) & Reparameterization Trick. Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 13] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن المشفرات التلقائية المتغيرة (VAEs) وحيلة إعادة المعلمة (Reparameterization Trick). استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.\n- Calculation & Results: In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تمكن حيلة إعادة المعلمة من تدفق التدرجات عبر العينات العشوائية بصياغة المتجه الكامن $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$، حيث $\\epsilon \\sim \\mathcal{N}(0, I)$ عينة ضوضاء عشوائية خارجية ثابتة.\n- خطوات الحساب والنتيجة: في تدريب VAE لتوليد الوجوه، تجمع دالة الخسارة الإجمالية بين خطأ إعادة البناء وعقوبة تباعد كولباك-ليبلر التحليلية $D_{KL} = -\\frac{1}{2} \\sum (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$ لفرض انتظام الفضاء الكامن.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.",
      "Calculate final values: In training a facial synthesis VAE, the total loss combines reconstruction loss $\\|x - \\hat{x}\\|^2$ with analytical KL divergence penalty $D_{KL} = -\\frac{1}{2} \\sum_{j=1}^d (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$, enforcing standard normal latent distribution regularity.",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: تمكن حيلة إعادة المعلمة من تدفق التدرجات عبر العينات العشوائية بصياغة المتجه الكامن $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$، حيث $\\epsilon \\sim \\mathcal{N}(0, I)$ عينة ضوضاء عشوائية خارجية ثابتة.",
      "حساب الناتج النهائي: في تدريب VAE لتوليد الوجوه، تجمع دالة الخسارة الإجمالية بين خطأ إعادة البناء وعقوبة تباعد كولباك-ليبلر التحليلية $D_{KL} = -\\frac{1}{2} \\sum (1 + \\ln(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2)$ لفرض انتظام الفضاء الكامن.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: The reparameterization trick enables gradient backpropagation through stochastic sampling by expressing latent vector $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, I)$ is an external deterministic noise sample.",
    "hintAr": "طبق القانون الأساسي: تمكن حيلة إعادة المعلمة من تدفق التدرجات عبر العينات العشوائية بصياغة المتجه الكامن $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$، حيث $\\epsilon \\sim \\mathcal{N}(0, I)$ عينة ضوضاء عشوائية خارجية ثابتة.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "egbac_ai_data_science_ch2_ex_14",
    "titleEn": "Exercise Problem 14: Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM)",
    "titleAr": "تمرين 14: النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM)",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 14] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Score-Based Generative Modeling & Denoising Diffusion Probabilistic Models (DDPM). Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 14] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن النماذج التوليدية القائمة على التدرج ونماذج الانتشار لإزالة الضوضاء (DDPM). استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.\n- Calculation & Results: During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تتبع العملية الأمامية التوزيع $q(x_t | x_{t-1}) = \\mathcal{N}(\\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$، وتتيح أخذ العينات مباشرة عند أي خطوة $t$ عبر $q(x_t | x_0) = \\mathcal{N}(\\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$.\n- خطوات الحساب والنتيجة: أثناء الاستدلال، تتنبأ الشبكة العصبية $\\epsilon_\\theta(x_t, t)$ بمركبة الضوضاء المضافة، وتحسب الخطوة العكسية عينة الخطوة السابقة $x_{t-1}$، مسترجعة تفاصيل الصورة الطبيعية من ضوضاء بيضاء نقية.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.",
      "Calculate final values: During inference, the neural network $\\epsilon_\\theta(x_t, t)$ predicts the added noise component, and the reverse step computes $x_{t-1} = \\frac{1}{\\sqrt{\\alpha_t}}\\left(x_t - \\frac{\\beta_t}{\\sqrt{1-\\bar{\\alpha}_t}} \\epsilon_\\theta(x_t, t)\\right) + \\sigma_t z$, reconstructing crisp natural images from pure white noise.",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: تتبع العملية الأمامية التوزيع $q(x_t | x_{t-1}) = \\mathcal{N}(\\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$، وتتيح أخذ العينات مباشرة عند أي خطوة $t$ عبر $q(x_t | x_0) = \\mathcal{N}(\\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$.",
      "حساب الناتج النهائي: أثناء الاستدلال، تتنبأ الشبكة العصبية $\\epsilon_\\theta(x_t, t)$ بمركبة الضوضاء المضافة، وتحسب الخطوة العكسية عينة الخطوة السابقة $x_{t-1}$، مسترجعة تفاصيل الصورة الطبيعية من ضوضاء بيضاء نقية.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: The forward transition distribution is $q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$, permitting direct sampling at arbitrary step $t$ via $q(x_t | x_0) = \\mathcal{N}(x_t; \\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$ where $\\alpha_t = 1 - \\beta_t$ and $\\bar{\\alpha}_t = \\prod_{s=1}^t \\alpha_s$.",
    "hintAr": "طبق القانون الأساسي: تتبع العملية الأمامية التوزيع $q(x_t | x_{t-1}) = \\mathcal{N}(\\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)$، وتتيح أخذ العينات مباشرة عند أي خطوة $t$ عبر $q(x_t | x_0) = \\mathcal{N}(\\sqrt{\\bar{\\alpha}_t} x_0, (1-\\bar{\\alpha}_t) I)$.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  },
  {
    "id": "egbac_ai_data_science_ch2_ex_15",
    "titleEn": "Exercise Problem 15: Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment",
    "titleAr": "تمرين 15: التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 15] A machine learning engineer is tasked with analyzing and optimizing a production model incorporating Contrastive Language-Image Pretraining (CLIP) & Multimodal Alignment. Formulate the governing mathematical expressions and compute the design parameters under real-world constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 15] كُلف مهندس تعلم الآلة بتحليل وتحسين نموذج إنتاجي يتضمن التدريب التبايني المسبق للغة والصورة (CLIP) والمحاذاة متعددة الوسائط. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود الواقعية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.\n- Calculation & Results: In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: لحزمة من $N$ زوجاً من الصور والنصوص بتضمينات معيرة $I_i$ و $T_j$، تكون مصفوفة التشابه $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$، فتعظم عناصر القطر المتطابقة وتعاقب كافة الأزواج غير المتطابقة.\n- خطوات الحساب والنتيجة: في مهمة تصنيف دون تدريب مسبق (Zero-Shot) عبر 1000 فئة، يحسب CLIP تشابه جيب التمام بين تضمين الصورة و1000 تضمين نصي للأنماط الموجهة، محققاً تعميماً متميزاً دون تعديل أوزان المصنف.",
    "stepByStepSolutionEn": [
      "Define objective functions and data distribution parameters.",
      "Substitute hyperparameters into formula: For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.",
      "Calculate final values: In a zero-shot classification task with 1,000 classes, CLIP computes cosine similarities between image embedding $I$ and 1,000 text prompt embeddings $T_c$ (\"a photo of a {class}\"), achieving superior domain generalization without fine-tuning any image classifier weights.",
      "Perform sensitivity and convergence margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد دوال الهدف ومعاملات توزيع البيانات.",
      "التعويض بالمعاملات الفائقة في القانون الحاكم: لحزمة من $N$ زوجاً من الصور والنصوص بتضمينات معيرة $I_i$ و $T_j$، تكون مصفوفة التشابه $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$، فتعظم عناصر القطر المتطابقة وتعاقب كافة الأزواج غير المتطابقة.",
      "حساب الناتج النهائي: في مهمة تصنيف دون تدريب مسبق (Zero-Shot) عبر 1000 فئة، يحسب CLIP تشابه جيب التمام بين تضمين الصورة و1000 تضمين نصي للأنماط الموجهة، محققاً تعميماً متميزاً دون تعديل أوزان المصنف.",
      "إجراء تحليل الحساسية وهوامش تقارب الخوارزمية."
    ],
    "hintEn": "Apply the core formula: For a batch of $N$ image-text pairs with normalized embeddings $I_i$ and $T_j$, the similarity matrix is $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$, maximizing the diagonal matching pairs while penalizing all $N^2 - N$ off-diagonal negative pairs.",
    "hintAr": "طبق القانون الأساسي: لحزمة من $N$ زوجاً من الصور والنصوص بتضمينات معيرة $I_i$ و $T_j$، تكون مصفوفة التشابه $S_{ij} = \\frac{I_i \\cdot T_j}{\\tau}$، فتعظم عناصر القطر المتطابقة وتعاقب كافة الأزواج غير المتطابقة.",
    "teacherTipEn": "Check numerical stability and avoid log-zero or division-by-zero artifacts during evaluation.",
    "teacherTipAr": "تأكد من الاستقرار العددي وتفادي القسمة على صفر أو لوغاريتم الصفر أثناء الحل."
  }
];
