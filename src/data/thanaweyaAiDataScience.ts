import type { Branch } from '../types/curriculum';
import { th_ai_data_science_ch1SolvedExamples, th_ai_data_science_ch1ExerciseProblems } from './textbook/thanaweya/aiDataScienceCh1Textbook';
import { th_ai_data_science_ch2SolvedExamples, th_ai_data_science_ch2ExerciseProblems } from './textbook/thanaweya/aiDataScienceCh2Textbook';
import { th_ai_data_science_ch3SolvedExamples, th_ai_data_science_ch3ExerciseProblems } from './textbook/thanaweya/aiDataScienceCh3Textbook';
import { th_ai_data_science_ch4SolvedExamples, th_ai_data_science_ch4ExerciseProblems } from './textbook/thanaweya/aiDataScienceCh4Textbook';
import { th_ai_data_science_ch1Databank } from './databanks/thanaweya/aiDataScienceCh1Databank';
import { th_ai_data_science_ch2Databank } from './databanks/thanaweya/aiDataScienceCh2Databank';
import { th_ai_data_science_ch3Databank } from './databanks/thanaweya/aiDataScienceCh3Databank';
import { th_ai_data_science_ch4Databank } from './databanks/thanaweya/aiDataScienceCh4Databank';

export const thanaweyaAiDataScienceBranch: Branch = {
  id: 'thanaweya_ai_data_science',
  titleEn: 'Artificial Intelligence & Data Science',
  titleAr: 'الذكاء الاصطناعي وعلم البيانات',
  iconName: 'Brain',
  colorGradient: 'from-violet-600 via-purple-600 to-indigo-700',
  categoryEn: 'Artificial Intelligence & Data Engineering',
  categoryAr: 'الذكاء الاصطناعي وهندسة البيانات',
  totalMarks: 50,
  passingMarks: 25,
  chapters: [
    {
      id: 'th_ai_data_science_ch1',
      chapterNumber: 1,
      titleEn: 'Machine Learning Foundations, Linear Algebra & Convex Optimization',
      titleAr: 'أسس تعلم الآلة، الجبر الخطي والتحسين المحدب',
      descriptionEn: 'Singular Value Decomposition (SVD), PCA dimensionality reduction, gradient descent variants (SGD, Adam), convex loss surfaces, and L1/L2 regularization.',
      descriptionAr: 'تحليل القيم المفردة (SVD)، تقليص الأبعاد بـ PCA، خوارزميات الانحدار التدريجي (SGD و Adam)، سطوح الخسارة المحدبة، والتنظيم بـ L1 و L2.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'th_ai_data_science_ch1_l1',
          titleEn: 'Mathematical Foundations of Statistical Machine Learning',
          titleAr: 'الأسس الرياضية للتعلم الآلي الإحصائي وتحسين دوال الخسارة',
          summaryEn: 'Orthogonal projections, SVD, covariance matrix eigen-decomposition, gradient descent learning dynamics, and regularization geometry.',
          summaryAr: 'الإسقاطات المتعامدة، تفكيك SVD، المتجهات الذاتية لمصفوفات التغاير، ديناميكيات الانحدار التدريجي، وهندسة تنظيم النماذج.',
          theoryContentEn: 'Supervised machine learning relies on optimizing objective loss functions over high-dimensional parameter spaces. Linear models formulate predictions as inner products, optimized using convex loss functions like mean squared error or binary cross-entropy. Singular Value Decomposition factors data matrices to eliminate collinearity and reduce dimensionality via Principal Component Analysis (PCA). Gradient descent algorithms, especially adaptive momentum optimizers like Adam, navigate complex loss valleys, while L1 Lasso and L2 Ridge regularization constrain parameter norms to prevent overfitting and guarantee generalization on unseen test distributions.',
          theoryContentAr: 'يعتمد تعلم الآلة الإشرافي على تحسين دوال الخسارة الهدفية عبر فضاءات معاملات عالية الأبعاد. وتصيغ النماذج الخطية تنبؤاتها كجداءات قياسية مستمرة، يجري تحسينها بدوال خسارة محدبة كالخطأ التربيعي المتوسط أو الإنتروبيا المتقاطعة. ويحلل تفكيك القيم المفردة (SVD) مصفوفات البيانات لإلغاء التعددية الخطية وتقليص الأبعاد عبر تحليل المكونات الرئيسية (PCA). وتتحرك خوارزميات الانحدار التدريجي ومحسنات التكيف كـ Adam عبر مسارات الخسارة، بينما يفرض تنظيم L1 و L2 قيوداً رياضية على معايير الأوزان لمنع فرط التخصيص وضمان التعميم.',
          moeRef: {
            bookTitleEn: 'Egyptian STEM High Schools Artificial Intelligence Curriculum',
            bookTitleAr: 'منهج الذكاء الاصطناعي وعلم البيانات لمدارس المتفوقين (STEM)',
            grade: 'Grade 12',
            term: 'Full Year',
            officialCode: 'STEM-AI-G12-CH1',
            pageRange: 'pp. 1-72'
          },
          lessonPlan: {
            titleEn: 'Lesson Plan: Convex Optimization & Regularized Learning Formulations',
            titleAr: 'خطة الدرس: التحسين المحدب وصياغات التعلم المنظم في الذكاء الاصطناعي',
            gradeLevel: 'Grade 12 STEM',
            durationMinutes: 90,
            objectives: [
              'Compute covariance matrices and principal components via Singular Value Decomposition',
              'Derive parameter update rules for Stochastic Gradient Descent and Adam optimizers',
              'Analyze the geometric sparsity constraints of L1 Lasso versus L2 Ridge penalties'
            ]
          },
          worksheet: {
            id: 'ws_th_ai_data_science_ch1_l1',
            titleEn: 'Worksheet 1: PCA Variance & Regularization Analysis',
            titleAr: 'ورقة عمل 1: تباين المكونات الرئيسية وتحليل التنظيم الإحصائي',
            descriptionEn: 'Compute explained variance ratios, gradient update magnitudes, and Lasso sparsity patterns.',
            descriptionAr: 'حساب نسب التباين المفسر، ومقادير تحديثات التدرج، وأنماط توليد الأوزان الصفرية في Lasso.',
            estimatedTimeMinutes: 45,
            problems: th_ai_data_science_ch1SolvedExamples.slice(0, 3)
          },
          interactiveWidget: {
            type: 'loss_surface_visualizer',
            titleEn: 'Convex & Non-Convex Loss Surface Optimizer Simulator',
            titleAr: 'محاكي سطوح دوال الخسارة ومسارات خوارزميات التحسين التفاعلي',
            descriptionEn: 'Visualize gradient descent trajectories (SGD, Momentum, Adam) across convex and saddle-point loss surfaces in real time.',
            descriptionAr: 'تصور مسارات خوارزميات الانحدار التدريجي عبر سطوح الخسارة المحدبة ونقاط السرج بصورة حية.'
          }
        }
      ],
      solvedExamples: th_ai_data_science_ch1SolvedExamples,
      exerciseProblems: th_ai_data_science_ch1ExerciseProblems,
      databank: th_ai_data_science_ch1Databank
    },
    {
      id: 'th_ai_data_science_ch2',
      chapterNumber: 2,
      titleEn: 'Deep Neural Networks, CNNs & Computer Vision',
      titleAr: 'الشبكات العصبية العميقة، شبكات CNN ورؤية الحاسوب',
      descriptionEn: 'Backpropagation chain rule, activation functions, 2D convolution filters, ResNet residual skip connections, and YOLO object detection pipelines.',
      descriptionAr: 'قاعدة السلسلة في الانتشار الخلفي، دوال التنشيط، مرشحات الالتفاف، الوصلات التخطيّة في ResNet، وخطوط كشف الكائنات بنماذج YOLO.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'th_ai_data_science_ch2_l1',
          titleEn: 'Deep Convolutional Architectures & Visual Pattern Recognition',
          titleAr: 'المعماريات الالتفافية العميقة والتعرف على الأنماط البصرية',
          summaryEn: 'Backpropagation derivations, vanishing gradient mitigations, receptive field calculations, ResNet skip shortcuts, and single-shot object detection.',
          summaryAr: 'اشتقاقات الانتشار الخلفي، معالجة تلاشي التدرج، حساب الحقل المستقبِل، الوصلات التخطيّة في ResNet، وكشف الكائنات أحادي المرحلة.',
          theoryContentEn: 'Deep neural networks stack hierarchical representation layers where each level learns progressively more abstract features. Backpropagation propagates partial derivatives of loss with respect to weights using the calculus chain rule. In deep feedforward networks, non-saturating activations like ReLU and normalization layers (Batch Normalization, Layer Normalization) prevent vanishing and exploding gradients. Convolutional Neural Networks (CNNs) leverage local connectivity, weight sharing, and spatial pooling to extract translation-invariant visual patterns. Deep residual networks (ResNet) introduce identity skip connections F(x) + x, enabling stable gradient flow through hundreds of layers, while modern object detectors like YOLO predict bounding box coordinates and class probabilities simultaneously in a single forward pass.',
          theoryContentAr: 'ترص الشبكات العصبية العميقة طبقات هرمية التمثيل حيث تتعلم كل طبقة خصائص أكثر تجريداً. وينقل الانتشار الخلفي المشتقات الجزئية للخسارة بالنسبة للأوزان عبر قاعدة السلسلة. وتمنع دوال التنشيط غير المشبعة كـ ReLU وطبقات المعايرة تلاشي وتضخم التدرجات. وتستغل شبكات CNN الاتصال الموضعي ومشاركة الأوزان لاستخراج ميزات بصرية مقاومة للإزاحة. كما تقدم شبكات ResNet وصلات التخطي المباشرة F(x) + x لضمان تدفق التدرجات عبر مئات الطبقات، وتتنبأ نماذج YOLO بإحداثيات صناديق الإحاطة وفئات الأجسام في تمريرة أمامية واحدة.',
          moeRef: {
            bookTitleEn: 'Egyptian STEM High Schools Artificial Intelligence Curriculum',
            bookTitleAr: 'منهج الذكاء الاصطناعي وعلم البيانات لمدارس المتفوقين (STEM)',
            grade: 'Grade 12',
            term: 'Full Year',
            officialCode: 'STEM-AI-G12-CH2',
            pageRange: 'pp. 73-156'
          },
          lessonPlan: {
            titleEn: 'Lesson Plan: Convolutional Feature Maps & Object Detection Geometries',
            titleAr: 'خطة الدرس: خرائط الخصائص الالتفافية وهندسة كشف الكائنات',
            gradeLevel: 'Grade 12 STEM',
            durationMinutes: 90,
            objectives: [
              'Calculate output feature map spatial dimensions given kernel size, stride, and padding',
              'Explain the mathematical function of ResNet residual connections in backpropagation',
              'Evaluate Intersection-over-Union (IoU) and mean Average Precision (mAP) for object detectors'
            ]
          },
          worksheet: {
            id: 'ws_th_ai_data_science_ch2_l1',
            titleEn: 'Worksheet 2: CNN Layer Sizing & IoU Calculations',
            titleAr: 'ورقة عمل 2: تحجيم طبقات CNN وحسابات تقاطع الاتحاد IoU',
            descriptionEn: 'Compute receptive fields, convolution output shapes, and bounding box overlap metrics.',
            descriptionAr: 'حساب الحقول المستقبلة، وأبعاد مصفوفات الالتفاف الناتجة، ومقاييس تداخل صناديق الإحاطة.',
            estimatedTimeMinutes: 45,
            problems: th_ai_data_science_ch2SolvedExamples.slice(0, 3)
          },
          interactiveWidget: {
            type: 'cnn_kernel_visualizer',
            titleEn: 'Interactive 2D Convolution Kernel & Feature Filter Visualizer',
            titleAr: 'محاكي مرشحات الالتفاف ثنائي الأبعاد واستخراج الخصائص البصرية',
            descriptionEn: 'Apply Sobel edge detection, Gaussian blur, and sharpen filters to input imagery and inspect activation maps.',
            descriptionAr: 'تطبيق مرشحات سوبل لاكتشاف الحواف، والتمويه الغاوسي، وشحذ الصور، وفحص خرائط التنشيط.'
          }
        }
      ],
      solvedExamples: th_ai_data_science_ch2SolvedExamples,
      exerciseProblems: th_ai_data_science_ch2ExerciseProblems,
      databank: th_ai_data_science_ch2Databank
    },
    {
      id: 'th_ai_data_science_ch3',
      chapterNumber: 3,
      titleEn: 'Natural Language Processing, Transformers & LLMs',
      titleAr: 'معالجة اللغات الطبيعية، محولات Transformers والنماذج اللغوية الضخمة',
      descriptionEn: 'Subword tokenization, Word2Vec embeddings, multi-head self-attention mechanisms, encoder-decoder architectures, and Retrieval-Augmented Generation (RAG).',
      descriptionAr: 'التقطيع اللغوي، تضمينات الكلمات Word2Vec، آليات الانتباه الذاتي متعددة الرؤوس، معماريات المشفر والمفكك، وتوليد الإجابات بالاسترجاع المعزز RAG.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'th_ai_data_science_ch3_l1',
          titleEn: 'Attention Mechanisms, Transformer Networks & Language Models',
          titleAr: 'آليات الانتباه الذاتي، شبكات المحولات والنماذج اللغوية التوليدية',
          summaryEn: 'Byte-Pair Encoding, dense vector semantics, query-key-value dot-product attention, positional encodings, and enterprise RAG grounding.',
          summaryAr: 'ترميز BPE، الفضاءات الدلالية الكثيفة، انتباه جداء الاستعلام والمفتاح والقيمة، التضمين الموضعي، وتأصيل أنظمة RAG.',
          theoryContentEn: 'Natural Language Processing has transitioned from recurrent sequence models to attention-based Transformer architectures. Raw textual strings are segmented into subword tokens using algorithms like Byte-Pair Encoding (BPE), resolving vocabulary explosion in complex languages such as Arabic. Tokens are embedded into continuous geometric vector spaces where vector arithmetic captures semantic relationships. The core innovation of Transformers is scaled dot-product self-attention: Attention(Q, K, V) = softmax(QK^T / sqrt(d_k))V, which enables every token to directly exchange information with all other sequence tokens in parallel without recurrence. Multi-head attention projects queries, keys, and values into multiple subspace representations. Large Language Models (LLMs) trained autoregressively predict next tokens across massive corpora, and Retrieval-Augmented Generation (RAG) augments generation with verified external knowledge from vector databases.',
          theoryContentAr: 'انتقلت معالجة اللغات الطبيعية من النماذج التكرارية إلى معماريات Transformer القائمة على الانتباه. وتُقطع النصوص الخام إلى مقاطع فرعية بخوارزميات كـ BPE، مما يحل انفجار المفردات في لغات كالعربية. وتُرسم الرموز في فضاءات اتجاهية مستمرة تعكس المعاني الدلالية. ويعد جوهر المحولات آلية الانتباه الذاتي المقاس: Attention(Q,K,V) = softmax(QK^T / sqrt(d_k))V، التي تتيح لكل رمز التواصل المباشر بالتوازي مع جميع الرموز دون حوسبة تكرارية. وتوزع رؤوس الانتباه المتعددة الاستعلامات والمفاتيح عبر فضاءات فرعية. وتتنبأ النماذج اللغوية الضخمة بالرمز التالي عبر مدونات هائلة، بينما يعزز نظام RAG التوليد بحقن نصوص حقيقية من قواعد بيانات المتجهات.',
          moeRef: {
            bookTitleEn: 'Egyptian STEM High Schools Artificial Intelligence Curriculum',
            bookTitleAr: 'منهج الذكاء الاصطناعي وعلم البيانات لمدارس المتفوقين (STEM)',
            grade: 'Grade 12',
            term: 'Full Year',
            officialCode: 'STEM-AI-G12-CH3',
            pageRange: 'pp. 157-234'
          },
          lessonPlan: {
            titleEn: 'Lesson Plan: Self-Attention Mechanics & Vector Semantic Retrieval',
            titleAr: 'خطة الدرس: ميكانيكا الانتباه الذاتي والاسترجاع الدلالي بالمتجهات',
            gradeLevel: 'Grade 12 STEM',
            durationMinutes: 90,
            objectives: [
              'Derive the scaled dot-product attention formula and explain the necessity of the sqrt(d_k) factor',
              'Construct multi-head attention projection matrices and compute resulting attention weights',
              'Design a Retrieval-Augmented Generation (RAG) architecture incorporating vector similarity search'
            ]
          },
          worksheet: {
            id: 'ws_th_ai_data_science_ch3_l1',
            titleEn: 'Worksheet 3: Attention Weighting & RAG Metric Evaluation',
            titleAr: 'ورقة عمل 3: حساب أوزان الانتباه وتقييم مقاييس أنظمة RAG',
            descriptionEn: 'Compute softmax attention distributions, dot-product scalings, and retrieval cosine similarities.',
            descriptionAr: 'حساب توزيعات انتباه softmax، والقياس بالضرب القياسي، وتشابه جيب التمام في الاسترجاع.',
            estimatedTimeMinutes: 45,
            problems: th_ai_data_science_ch3SolvedExamples.slice(0, 3)
          },
          interactiveWidget: {
            type: 'attention_heatmap_visualizer',
            titleEn: 'Transformer Multi-Head Self-Attention Matrix Heatmap Visualizer',
            titleAr: 'محاكي مصفوفات الانتباه الذاتي والخرائط الحرارية لموديلات Transformer',
            descriptionEn: 'Explore attention weights and cross-token attention distributions across individual attention heads.',
            descriptionAr: 'استكشاف أوزان الانتباه وتوزيعات الروابط بين الكلمات عبر رؤوس الانتباه المختلفة تفاعلياً.'
          }
        }
      ],
      solvedExamples: th_ai_data_science_ch3SolvedExamples,
      exerciseProblems: th_ai_data_science_ch3ExerciseProblems,
      databank: th_ai_data_science_ch3Databank
    },
    {
      id: 'th_ai_data_science_ch4',
      chapterNumber: 4,
      titleEn: 'Data Engineering, Big Data Analytics & MLOps Pipelines',
      titleAr: 'هندسة البيانات، تحليلات البيانات الضخمة وخطوط تدفق MLOps',
      descriptionEn: 'Feature engineering pipelines, Apache Spark distributed RDD processing, experiment tracking with MLflow, containerized deployment, and data drift detection.',
      descriptionAr: 'خطوط هندسة الخصائص، المعالجة الموزعة بـ Apache Spark، تتبع التجارب بـ MLflow، النشر بالحاويات، واكتشاف انحراف البيانات.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'th_ai_data_science_ch4_l1',
          titleEn: 'Enterprise Data Pipelines, Distributed Analytics & Production MLOps',
          titleAr: 'خطوط البيانات المؤسسية، التحليلات الموزعة وهندسة MLOps في الإنتاج',
          summaryEn: 'Leak-free feature preprocessing, Spark distributed DAG execution, model registry, containerization, and population stability drift detection.',
          summaryAr: 'هندسة الخصائص دون تسريب، تنفيذ مخططات DAG في Spark، سجل النماذج، الحاويات، واكتشاف انحراف البيانات بمؤشر PSI.',
          theoryContentEn: 'Production machine learning requires robust data engineering foundations and continuous operational lifecycle management (MLOps). Raw data ingestion pipelines validate schemas, impute missing values, and normalize features while strictly preventing test leakage through encapsulation within unified pipeline transformers. When data scales to terabytes, distributed computing frameworks like Apache Spark process Resilient Distributed Datasets (RDDs) and DataFrames in memory across compute clusters, leveraging lazy evaluation to optimize execution DAGs. The MLOps lifecycle bridges model development and production serving through automated experiment tracking (MLflow), reproducible containerization (Docker, Kubernetes), model registries, and real-time observability. Monitoring production prediction streams detects data drift (covariate shift) via statistical divergence metrics like Population Stability Index (PSI) and Kolmogorov-Smirnov tests, triggering automated retraining pipelines.',
          theoryContentAr: 'يتطلب تعلم الآلة في بيئات الإنتاج أسساً متينة لهندسة البيانات وإدارة مستمرة لدورة حياة النماذج (MLOps). وتتحقق خطوط استيعاب البيانات من سلامة المخططات، وتعالج القيم المفقودة، وتقيس الخصائص مع منع تسرب بيانات الاختبار بتغليفها في خطوط موحدة. وعندما تتضخم البيانات، تنفذ أطر الحوسبة الموزعة كـ Apache Spark معالجة سريعة لهياكل RDD وجداول البيانات في الذاكرة عبر عناقيد حوسبية، مستغلة التقييم المؤجل لتحسين مخططات التنفيذ (DAG). وتربط هندسة MLOps بين تطوير النماذج ونشرها عبر تتبع التجارب بـ MLflow، والحاويات بـ Docker، وسجلات النماذج. وتكشف مراقبة تدفقات التنبؤات عن انحراف البيانات عبر مؤشرات إحصائية كـ PSI واختبار KS، مطلقة إعادة التدريب المؤتمتة.',
          moeRef: {
            bookTitleEn: 'Egyptian STEM High Schools Artificial Intelligence Curriculum',
            bookTitleAr: 'منهج الذكاء الاصطناعي وعلم البيانات لمدارس المتفوقين (STEM)',
            grade: 'Grade 12',
            term: 'Full Year',
            officialCode: 'STEM-AI-G12-CH4',
            pageRange: 'pp. 235-312'
          },
          lessonPlan: {
            titleEn: 'Lesson Plan: Spark Distributed Execution & MLOps Drift Detection',
            titleAr: 'خطة الدرس: التنفيذ الموزع في Spark واكتشاف انحراف البيانات في MLOps',
            gradeLevel: 'Grade 12 STEM',
            durationMinutes: 90,
            objectives: [
              'Design leak-free scikit-learn feature preprocessing and cross-validation pipelines',
              'Analyze Apache Spark lazy transformations versus immediate actions and shuffle costs',
              'Calculate Population Stability Index (PSI) to detect production covariate drift and trigger retraining'
            ]
          },
          worksheet: {
            id: 'ws_th_ai_data_science_ch4_l1',
            titleEn: 'Worksheet 4: Spark Partitioning & PSI Drift Calculations',
            titleAr: 'ورقة عمل 4: تجزئة بيانات Spark وحسابات انحراف التوزيع بـ PSI',
            descriptionEn: 'Compute cluster shuffle data volumes, PSI drift index values, and pipeline latency budgets.',
            descriptionAr: 'حساب أحجام البيانات المنقولة في العنقود، وقيم مؤشر PSI، وموازنات زمن استجابة خطوط التدفق.',
            estimatedTimeMinutes: 45,
            problems: th_ai_data_science_ch4SolvedExamples.slice(0, 3)
          },
          interactiveWidget: {
            type: 'mlops_drift_monitor',
            titleEn: 'Interactive Production MLOps Data Drift & PSI Threshold Simulator',
            titleAr: 'محاكي مراقبة انحراف البيانات وحساب مؤشر PSI في أنظمة MLOps الإنتاجية',
            descriptionEn: 'Simulate shifting customer demographics and observe how PSI thresholds trigger automated retraining alerts.',
            descriptionAr: 'محاكاة التغير في بيانات العملاء ومراقبة كيف تطلق عتبات PSI تنبيهات إعادة تدريب النماذج آلياً.'
          }
        }
      ],
      solvedExamples: th_ai_data_science_ch4SolvedExamples,
      exerciseProblems: th_ai_data_science_ch4ExerciseProblems,
      databank: th_ai_data_science_ch4Databank
    }
  ]
};
