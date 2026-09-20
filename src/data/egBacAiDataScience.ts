import type { Branch } from '../types/curriculum';
import { egbac_ai_data_science_ch1SolvedExamples, egbac_ai_data_science_ch1ExerciseProblems } from './textbook/egbac/egBacAiDataScienceCh1Textbook';
import { egbac_ai_data_science_ch2SolvedExamples, egbac_ai_data_science_ch2ExerciseProblems } from './textbook/egbac/egBacAiDataScienceCh2Textbook';
import { egbac_ai_data_science_ch3SolvedExamples, egbac_ai_data_science_ch3ExerciseProblems } from './textbook/egbac/egBacAiDataScienceCh3Textbook';
import { egbac_ai_data_science_ch4SolvedExamples, egbac_ai_data_science_ch4ExerciseProblems } from './textbook/egbac/egBacAiDataScienceCh4Textbook';
import { egbac_ai_data_science_ch1Databank } from './databanks/egbac/egBacAiDataScienceCh1Databank';
import { egbac_ai_data_science_ch2Databank } from './databanks/egbac/egBacAiDataScienceCh2Databank';
import { egbac_ai_data_science_ch3Databank } from './databanks/egbac/egBacAiDataScienceCh3Databank';
import { egbac_ai_data_science_ch4Databank } from './databanks/egbac/egBacAiDataScienceCh4Databank';

export const egBacAiDataScienceBranch: Branch = {
  id: 'egbac_ai_data_science',
  titleEn: 'Advanced AI, Deep Generative Models & Autonomous Agents',
  titleAr: 'الذكاء الاصطناعي المتقدم، نماذج التوليد والوكلاء الأذكياء',
  iconName: 'Brain',
  colorGradient: 'from-violet-600 via-purple-600 to-indigo-700',
  categoryEn: 'Advanced AI & Cognitive Systems',
  categoryAr: 'الذكاء الاصطناعي المتقدم والنظم الإدراكية',
  totalMarks: 50,
  passingMarks: 25,
  chapters: [
    {
      id: 'egbac_ai_data_science_ch1',
      chapterNumber: 1,
      titleEn: 'Advanced Statistical Learning & Probabilistic Graphical Models',
      titleAr: 'التعلم الإحصائي المتقدم والنماذج الرسومية الاحتمالية',
      descriptionEn: 'Bayesian networks, d-separation, Expectation-Maximization (EM) for Gaussian mixture models, and Variational Inference with Evidence Lower Bound (ELBO).',
      descriptionAr: 'شبكات بايز، الفصل الاتجاهي d-separation، خوارزمية التعظيم المتوقع (EM) لنماذج المزيج الغاوسي، والاستدلال المتغير والحد الأدنى لدليل البيانات ELBO.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'egbac_ai_data_science_ch1_l1',
          titleEn: 'Probabilistic Graphical Models & Variational Posterior Approximation',
          titleAr: 'النماذج الرسومية الاحتمالية والتقريب المتغير للتوزيعات اللاحقة',
          summaryEn: 'Directed graphical factorizations, conditional independence testing, EM convergence, and Kullback-Leibler divergence minimization via ELBO.',
          summaryAr: 'تفكيك المخططات الموجهة، اختبار الاستقلال الشرطي، تقارب خوارزمية EM، وتصغير تباعد كولباك-ليبلر عبر تعظيم حد ELBO.',
          theoryContentEn: 'Advanced statistical learning frames machine learning as probabilistic inference over latent variable models. Probabilistic Graphical Models (PGMs) encode conditional independence assertions within graph topologies. Directed Bayesian Networks factor the joint distribution as the product of each variable conditioned on its parents. D-separation determines conditional independence using active trail criteria, formalizing the explaining-away effect in v-structures. When latent variables make exact marginal likelihoods intractable, the Expectation-Maximization (EM) algorithm guarantees monotonic improvement of expected complete log-likelihoods. Variational Inference reframes posterior inference as functional optimization, bounding marginal log-evidence through the Evidence Lower Bound (ELBO). Maximizing the ELBO is strictly mathematically equivalent to minimizing the Kullback-Leibler divergence between the tractable variational proposal family and the true posterior.',
          theoryContentAr: 'يصيغ التعلم الإحصائي المتقدم تعلم الآلة كاستدلال احتمالي على نماذج المتغيرات الكامنة. وترمز النماذج الرسومية الاحتمالية (PGMs) افتراضات الاستقلال الشرطي داخل طوبولوجيا المخططات. وتفكك شبكات بايز الموجهة التوزيع المشترك كجداء للمتغيرات الشرطية على والديها. ويحدد الفصل الاتجاهي (d-separation) الاستقلال الشرطي، موضحاً ظاهرة التفسير البديل في البنى التصادمية. وعندما يستعصي حساب دالة الإمكان، تضمن خوارزمية التعظيم المتوقع (EM) تحسيناً مطرداً لدالة الإمكان المتوقعة. ويعيد الاستدلال المتغير صياغة المسألة كتحسين دالي، حاصراً دليل البيانات بلوغاريتم الحد الأدنى (ELBO). ويعد تعظيم حد ELBO مكافئاً رياضياً تماماً لتصغير تباعد كولباك-ليبلر بين عائلة التوزيعات المقترحة والتوزيع اللاحق الحقيقي.',
          moeRef: {
            bookTitleEn: 'Egyptian Baccalaureate Advanced Artificial Intelligence Curriculum',
            bookTitleAr: 'منهج البكالوريا المصرية في الذكاء الاصطناعي والأنظمة الإدراكية المتقدمة',
            grade: 'Grade 12 Advanced',
            term: 'Full Year',
            officialCode: 'EGBAC-AI-G12-MOD1',
            pageRange: 'pp. 1-78'
          },
          lessonPlan: {
            titleEn: 'Lesson Plan: D-Separation Criteria & Variational Lower Bound Formulations',
            titleAr: 'خطة الدرس: معايير الفصل الاتجاهي وصياغات الحد الأدنى المتغير للبيانات',
            gradeLevel: 'Grade 12 Advanced EG-Bac',
            durationMinutes: 90,
            objectives: [
              'Evaluate d-separation and conditional independence paths in complex Bayesian DAGs',
              'Derive the E-step posterior responsibilities and M-step updates for Gaussian Mixture Models',
              'Prove that maximizing the Evidence Lower Bound (ELBO) minimizes Kullback-Leibler divergence'
            ]
          },
          worksheet: {
            id: 'ws_egbac_ai_data_science_ch1_l1',
            titleEn: 'Worksheet 1: GMM Posterior Responsibilities & ELBO Proofs',
            titleAr: 'ورقة عمل 1: مسؤوليات المزيج الغاوسي وإثباتات تقارب حد ELBO',
            descriptionEn: 'Compute EM posterior cluster assignments, KL divergences, and conditional independence states.',
            descriptionAr: 'حساب تعيينات التجمعات اللاحقة في EM، وتباعدات كولباك-ليبلر، وحالات الاستقلال الشرطي.',
            estimatedTimeMinutes: 45,
            problems: egbac_ai_data_science_ch1SolvedExamples.slice(0, 3)
          },
          interactiveWidget: {
            type: 'bayesian_dag_visualizer',
            titleEn: 'Interactive Bayesian Network D-Separation & Active Trail Checker',
            titleAr: 'محاكي شبكات بايز وفحص مسارات الاستقلال الشرطي والفصل الاتجاهي',
            descriptionEn: 'Instantiate evidence on graph nodes and observe blocked versus active trails and conditional independence in real time.',
            descriptionAr: 'تثبيت المشاهدات على عقد المخطط ومراقبة المسارات المغلقة والنشطة والاستقلال الشرطي تفاعلياً.'
          }
        }
      ],
      solvedExamples: egbac_ai_data_science_ch1SolvedExamples,
      exerciseProblems: egbac_ai_data_science_ch1ExerciseProblems,
      databank: egbac_ai_data_science_ch1Databank
    },
    {
      id: 'egbac_ai_data_science_ch2',
      chapterNumber: 2,
      titleEn: 'Deep Generative Models, Diffusion & Multimodal Architectures',
      titleAr: 'نماذج التوليد العميقة، الانتشار والمعماريات متعددة الوسائط',
      descriptionEn: 'Variational Autoencoders, continuous latent reparameterization, score-based generative models, DDPM reverse Markov chains, and CLIP contrastive multimodal alignment.',
      descriptionAr: 'المشفرات التلقائية المتغيرة VAEs، حيلة إعادة المعلمة الكامنة، نماذج التوليد القائمة على التدرج، سلاسل ماركوف العكسية في DDPM، والمحاذاة التباينية في CLIP.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'egbac_ai_data_science_ch2_l1',
          titleEn: 'Continuous Latent Representations & Score-Based Diffusion Dynamics',
          titleAr: 'التمثيلات الكامنة المستمرة وديناميكيات الانتشار القائمة على التدرج',
          summaryEn: 'VAE stochastic backpropagation, forward Gaussian perturbation schedules, reverse diffusion reconstruction, and contrastive vision-language representation alignment.',
          summaryAr: 'الانتشار الخلفي العشوائي في VAE، جداول التشويش الغاوسي الأمامي، إعادة البناء بالانتشار العكسي، ومحاذاة تمثيلات الرؤية واللغة التباينية.',
          theoryContentEn: 'Deep generative modeling aims to synthesize high-dimensional data points from low-dimensional priors. Variational Autoencoders (VAEs) map data into smooth latent manifolds, employing the reparameterization trick z = mu + sigma * epsilon to route backpropagation gradients through stochastic latent representations. Score-based and Denoising Diffusion Probabilistic Models (DDPM) construct a forward Markov chain that incrementally injects Gaussian noise until data collapses into pure Gaussian white noise. Neural networks are trained to predict the injected noise vector at each discrete timestep, allowing the analytical reverse process to generate crisp, photo-realistic imagery from pure random noise. Multimodal architectures like CLIP achieve cross-modal understanding by projecting imagery and natural language descriptions into a shared metric embedding space optimized via symmetric contrastive cross-entropy loss.',
          theoryContentAr: 'يهدف التوليد العميق إلى تخليق عينات بيانات عالية الأبعاد من فضاءات كامنة منخفضة الأبعاد. وتعتمد المشفرات التلقائية المتغيرة (VAEs) على رسم البيانات في فضاءات كامنة ملساء، مستخدمة حيلة إعادة المعلمة z = mu + sigma * epsilon لتدفق التدرجات عبر العينات العشوائية. وتنشئ نماذج الانتشار لإزالة الضوضاء (DDPM) سلسلة ماركوف أمامية تدمج تدريجياً الضوضاء الغاوسية حتى تتلاشى البيانات في ضوضاء بيضاء نقية. وتُدرّب الشبكة العصبية على التنبؤ بمتجه الضوضاء عند كل خطوة زمنية، مما يمكن العملية العكسية التحليلية من توليد صور فائقة الواقعية من ضوضاء عشوائية نقية. وتحقق المعماريات متعددة الوسائط كـ CLIP إدراكاً مشتركاً بإسقاط الصور والنصوص في فضاء تضمين متري موحد عبر خسارة الإنتروبيا التباينية المتناظرة.',
          moeRef: {
            bookTitleEn: 'Egyptian Baccalaureate Advanced Artificial Intelligence Curriculum',
            bookTitleAr: 'منهج البكالوريا المصرية في الذكاء الاصطناعي والأنظمة الإدراكية المتقدمة',
            grade: 'Grade 12 Advanced',
            term: 'Full Year',
            officialCode: 'EGBAC-AI-G12-MOD2',
            pageRange: 'pp. 79-162'
          },
          lessonPlan: {
            titleEn: 'Lesson Plan: Diffusion Markov Chain Reversals & Multimodal Projections',
            titleAr: 'خطة الدرس: عكس سلاسل ماركوف في الانتشار والإسقاطات متعددة الوسائط',
            gradeLevel: 'Grade 12 Advanced EG-Bac',
            durationMinutes: 90,
            objectives: [
              'Derive the VAE closed-form Gaussian Kullback-Leibler divergence term',
              'Formulate the forward and reverse transition equations of Denoising Diffusion Probabilistic Models',
              'Construct the symmetric contrastive cross-entropy loss function used in CLIP multimodal alignment'
            ]
          },
          worksheet: {
            id: 'ws_egbac_ai_data_science_ch2_l1',
            titleEn: 'Worksheet 2: DDPM Timestep Sampling & CLIP Cosine Similarities',
            titleAr: 'ورقة عمل 2: أخذ العينات في نماذج DDPM وتشابه جيب التمام في CLIP',
            descriptionEn: 'Compute alpha-schedule cumulative noise variances and cross-modal embedding similarity matrices.',
            descriptionAr: 'حساب تباينات جداول الضوضاء المتراكمة ومصفوفات تشابه التضمينات البصرية واللغوية.',
            estimatedTimeMinutes: 45,
            problems: egbac_ai_data_science_ch2SolvedExamples.slice(0, 3)
          },
          interactiveWidget: {
            type: 'diffusion_denoising_visualizer',
            titleEn: 'Interactive Diffusion Denoising Step-by-Step Latent Visualizer',
            titleAr: 'محاكي خطوات إزالة الضوضاء بالانتشار العكسي وتوليد الصور',
            descriptionEn: 'Observe the gradual emergence of structured image semantics from pure Gaussian noise across discrete reverse diffusion timesteps.',
            descriptionAr: 'مراقبة الانبثاق التدريجي للميزات البصرية من الضوضاء البيضاء عبر خطوات الانتشار العكسي.'
          }
        }
      ],
      solvedExamples: egbac_ai_data_science_ch2SolvedExamples,
      exerciseProblems: egbac_ai_data_science_ch2ExerciseProblems,
      databank: egbac_ai_data_science_ch2Databank
    },
    {
      id: 'egbac_ai_data_science_ch3',
      chapterNumber: 3,
      titleEn: 'Reinforcement Learning, Autonomous Agents & Decision Systems',
      titleAr: 'التعلم التعزيزي، الوكلاء المستقلون وأنظمة اتخاذ القرار',
      descriptionEn: 'Markov Decision Processes, Bellman optimality operators, Deep Q-Networks with experience replay, Policy Gradients, and Proximal Policy Optimization (PPO).',
      descriptionAr: 'عمليات ماركوف لاتخاذ القرار، مؤثرات بيلمان للحل الأمثل، شبكات Deep Q-Networks ومخازن إعادة التجارب، تدرج السياسات، وخوارزمية PPO.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'egbac_ai_data_science_ch3_l1',
          titleEn: 'Dynamic Programming, Deep Q-Networks & Policy Optimization',
          titleAr: 'البرمجة الديناميكية، شبكات Q العميقة والتحسين المباشر للسياسات',
          summaryEn: 'Bellman contraction mappings, temporal-difference error formulations, replay buffer decorrelation, and clipped surrogate policy objective functions.',
          summaryAr: 'انكماشية مؤثر بيلمان، أخطاء الفروق الزمنية TD، فك ترابط التجارب في المخازن، ودوال الهدف المقصوصة للسياسات في PPO.',
          theoryContentEn: 'Reinforcement learning formalizes sequential decision making under environmental feedback as a Markov Decision Process (MDP). The Bellman optimality equations express optimal state and state-action value functions recursively, forming a gamma-contraction mapping whose unique fixed point guarantees convergence. Value-based methods like Deep Q-Networks (DQN) approximate continuous Q-functions using deep neural networks, stabilizing training through experience replay buffers and separate target networks. Policy-based methods directly parameterize stochastic policies, optimizing expected discounted cumulative reward via the Policy Gradient Theorem: grad J = E[grad ln pi * Q]. Advanced actor-critic methods, particularly Proximal Policy Optimization (PPO), clip the probability ratio r(theta) within [1 - epsilon, 1 + epsilon], preventing destructive policy updates and delivering state-of-the-art stability for autonomous agents and robotics.',
          theoryContentAr: 'يؤطر التعلم التعزيزي اتخاذ القرارات المتتابعة في ظل استجابة البيئة كعملية ماركوف لاتخاذ القرار (MDP). وتعبر معادلات بيلمان المثلى عن دوال القيمة بصورة تكرارية، مشكلة دالة انكماشية بمعامل جاما تضمن التقارب لنقطة ثابتة فريدة. وتقرب الطرق القائمة على القيمة مثل شبكات Deep Q-Networks دوال Q المستمرة بشبكات عصبية، وتثبت التدريب عبر مخازن إعادة التجارب وشبكات الهدف المنفصلة. بينما تنمذج الطرق القائمة على السياسة السياسات الاحتمالية مباشرة، لتعظيم العائد التراكمي بنظرية تدرج السياسة: grad J = E[grad ln pi * Q]. وتقص خوارزمية PPO نسبة الاحتمال ضمن المدى [1 - epsilon, 1 + epsilon] مانعة القفزات المدمرة ومحققة استقراراً فائقاً للوكلاء الأذكياء والروبوتات.',
          moeRef: {
            bookTitleEn: 'Egyptian Baccalaureate Advanced Artificial Intelligence Curriculum',
            bookTitleAr: 'منهج البكالوريا المصرية في الذكاء الاصطناعي والأنظمة الإدراكية المتقدمة',
            grade: 'Grade 12 Advanced',
            term: 'Full Year',
            officialCode: 'EGBAC-AI-G12-MOD3',
            pageRange: 'pp. 163-242'
          },
          lessonPlan: {
            titleEn: 'Lesson Plan: Bellman Fixed-Point Iterations & PPO Policy Ratio Clipping',
            titleAr: 'خطة الدرس: تكرارات نقطة بيلمان الثابتة وقص نسب السياسات في PPO',
            gradeLevel: 'Grade 12 Advanced EG-Bac',
            durationMinutes: 90,
            objectives: [
              'Execute Bellman optimality value iterations and calculate state-action convergence values',
              'Analyze the decorrelation impact of experience replay on deep neural network weight gradients',
              'Derive the PPO clipped surrogate loss and evaluate agent policy updates under advantage estimates'
            ]
          },
          worksheet: {
            id: 'ws_egbac_ai_data_science_ch3_l1',
            titleEn: 'Worksheet 3: Bellman Value Updates & PPO Surrogate Loss Evaluation',
            titleAr: 'ورقة عمل 3: تحديثات قيم بيلمان وتقييم خسارة السياسة البديلة المقصوصة في PPO',
            descriptionEn: 'Compute discounted return expectations, TD errors, and clipped advantage updates.',
            descriptionAr: 'حساب توقعات العائد التراكمي المخصوم، وأخطاء TD، وتحديثات الميزة المقصوصة.',
            estimatedTimeMinutes: 45,
            problems: egbac_ai_data_science_ch3SolvedExamples.slice(0, 3)
          },
          interactiveWidget: {
            type: 'rl_gridworld_agent_simulator',
            titleEn: 'Interactive Grid-World Q-Learning & Policy Gradient Agent Simulator',
            titleAr: 'محاكي تدريب الوكيل الذكي بخوارزمية Q-Learning وتدرج السياسات',
            descriptionEn: 'Modify exploration rate epsilon, learning rate alpha, and reward functions to observe autonomous agent policy convergence.',
            descriptionAr: 'تعديل معدل الاستكشاف ومعدل التعلم ودوال المكافآت لمراقبة تقارب سياسة الوكيل المستقل.'
          }
        }
      ],
      solvedExamples: egbac_ai_data_science_ch3SolvedExamples,
      exerciseProblems: egbac_ai_data_science_ch3ExerciseProblems,
      databank: egbac_ai_data_science_ch3Databank
    },
    {
      id: 'egbac_ai_data_science_ch4',
      chapterNumber: 4,
      titleEn: 'Enterprise MLOps, Distributed Model Training & Responsible AI',
      titleAr: 'هندسة MLOps المؤسسية، التدريب الموزع والذكاء الاصطناعي المسؤول',
      descriptionEn: 'Distributed Data-Parallelism (DDP), DeepSpeed ZeRO memory partitioning, post-training quantization (INT8/FP4), SHAP explainability, and algorithmic fairness audits.',
      descriptionAr: 'الموازاة الموزعة للبيانات (DDP)، تجزئة الذاكرة بتقنية DeepSpeed ZeRO، التكميم بعد التدريب، تفسير النماذج بـ SHAP، وتدقيق العدالة الخوارزمية.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'egbac_ai_data_science_ch4_l1',
          titleEn: 'Distributed Scalable Training, Model Compression & Ethical Governance',
          titleAr: 'التدريب الموزع واسع النطاق، ضغط النماذج والحوكمة الأخلاقية',
          summaryEn: 'ZeRO memory stages, All-Reduce ring communication, FP4/INT8 quantization scaling, Shapley cooperative game valuations, and demographic parity compliance.',
          summaryAr: 'مراحل تجزئة ZeRO، اتصالات حلقة All-Reduce، تقييس التكميم لـ INT8/FP4، قيم شابلي التعاونية، والامتثال للتكافؤ الديموغرافي.',
          theoryContentEn: 'Scaling machine learning to multi-billion parameter foundations demands distributed systems engineering and rigorous governance frameworks. Distributed Data-Parallelism (DDP) synchronizes gradients using Ring All-Reduce communication topologies. Memory bottlenecks are resolved by the Zero Redundancy Optimizer (ZeRO), which partitions optimizer states (Stage 1), gradients (Stage 2), and model weights (Stage 3) across cluster GPUs to unlock trillion-parameter scales without redundant memory duplication. To serve models at line rate, model compression applies post-training quantization (INT8/FP4) via scale and zero-point calibration, dramatically cutting memory bandwidth with negligible accuracy degradation. Responsible AI governance enforces fairness, transparency, and data safety. Explainable AI relies on SHAP (SHapley Additive exPlanations), leveraging axiomatic cooperative game theory to compute fair marginal feature contributions. Auditing algorithmic disparate impact and demographic parity guarantees ethical compliance and eliminates systemic bias.',
          theoryContentAr: 'يتطلب توسيع تعلم الآلة إلى نماذج بمليارات المعاملات هندسة نظم موزعة متقدمة وأطر حوكمة صارمة. وتزامن الموازاة الموزعة للبيانات (DDP) التدرجات عبر طوبولوجيا اتصالات Ring All-Reduce. وتعالج تقنية ZeRO اختناقات الذاكرة بتجزئة حالات المحسن (المرحلة 1)، والتدرجات (المرحلة 2)، وأوزان النموذج (المرحلة 3) عبر كروت GPU العنقود، مما يمكن من تدريب نماذج التريليون معامل دون تكرار في الذاكرة. ولنشر النماذج بكفاءة، يطبق ضغط النماذج التكميم بعد التدريب بدقة INT8 و FP4، مقلصاً استهلاك نطاق الذاكرة مع الحفاظ على الدقة. وتفرض حوكمة الذكاء الاصطناعي المسؤول العدالة والشفافية وأمان البيانات. وتعتمد التفسيرية على قيم SHAP القائمة على نظرية الألعاب التعاونية لحساب الإسهامات الهامشية العادلة للخصائص، وتدقيق التكافؤ الديموغرافي لاستبعاد التحيزات النمطية.',
          moeRef: {
            bookTitleEn: 'Egyptian Baccalaureate Advanced Artificial Intelligence Curriculum',
            bookTitleAr: 'منهج البكالوريا المصرية في الذكاء الاصطناعي والأنظمة الإدراكية المتقدمة',
            grade: 'Grade 12 Advanced',
            term: 'Full Year',
            officialCode: 'EGBAC-AI-G12-MOD4',
            pageRange: 'pp. 243-324'
          },
          lessonPlan: {
            titleEn: 'Lesson Plan: ZeRO Memory Allocation & Shapley Game Theory Explanations',
            titleAr: 'خطة الدرس: تخصيص الذاكرة في ZeRO وتفسيرات قيم شابلي بنظرية الألعاب',
            gradeLevel: 'Grade 12 Advanced EG-Bac',
            durationMinutes: 90,
            objectives: [
              'Calculate per-GPU memory footprints across ZeRO Stages 1, 2, and 3 for LLM training',
              'Perform post-training affine quantization calculations from FP32 to INT8 with scale and zero-point',
              'Derive Shapley values for cooperative feature coalitions to explain individual model decisions'
            ]
          },
          worksheet: {
            id: 'ws_egbac_ai_data_science_ch4_l1',
            titleEn: 'Worksheet 4: GPU Memory Partitioning & Shapley Values',
            titleAr: 'ورقة عمل 4: تجزئة ذاكرة المعالجات وحساب قيم شابلي التفسيرية',
            descriptionEn: 'Compute cluster VRAM requirements under ZeRO stages and marginal Shapley feature attributions.',
            descriptionAr: 'حساب متطلبات ذاكرة VRAM في العنقود في ظل مراحل ZeRO وإسناد قيم شابلي الهامشية.',
            estimatedTimeMinutes: 45,
            problems: egbac_ai_data_science_ch4SolvedExamples.slice(0, 3)
          },
          interactiveWidget: {
            type: 'shap_waterfall_visualizer',
            titleEn: 'Interactive SHAP Waterfall Feature Contribution & Fairness Visualizer',
            titleAr: 'محاكي مخططات SHAP الشلالية لإسناد إسهامات الخصائص وفحص العدالة',
            descriptionEn: 'Inspect how positive and negative Shapley feature attributions drive individual model predictions.',
            descriptionAr: 'فحص كيف تدفع إسهامات قيم شابلي الإيجابية والسلبية قرارات وتنبؤات النموذج تفاعلياً.'
          }
        }
      ],
      solvedExamples: egbac_ai_data_science_ch4SolvedExamples,
      exerciseProblems: egbac_ai_data_science_ch4ExerciseProblems,
      databank: egbac_ai_data_science_ch4Databank
    }
  ]
};
