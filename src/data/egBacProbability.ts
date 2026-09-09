import type { Branch } from '../types/curriculum';
import { egBacProbCh1SolvedExamples, egBacProbCh1Exercises } from './textbook/egbac/egBacProbCh1Textbook';
import { egBacProbCh1Databank } from './databanks/egbac/egBacProbCh1Databank';
import { egBacProbCh2SolvedExamples, egBacProbCh2Exercises } from './textbook/egbac/egBacProbCh2Textbook';
import { egBacProbCh2Databank } from './databanks/egbac/egBacProbCh2Databank';

export const egBacProbabilityBranch: Branch = {
  id: 'egbac_probability',
  titleEn: 'Probability, Statistics & Stochastic Systems',
  titleAr: 'الاحتمالات والإحصاء والأنظمة العشوائية',
  categoryEn: 'Advanced Mathematics & Data Science',
  categoryAr: 'الرياضيات المتقدمة وعلوم البيانات',
  iconName: 'BarChart3',
  colorGradient: 'from-indigo-600 to-purple-800',
  chapters: [
    {
      id: 'egbac_prob_ch1',
      chapterNumber: 1,
      titleEn: 'Foundations of Probability, Combinatorics & Discrete Distributions',
      titleAr: 'أسس الاحتمالات والتحليل التوافقي والتوزيعات المنفصلة',
      descriptionEn: 'Axiomatic Kolmogorov probability, conditional probability, Bayes theorem, discrete random variables, and Binomial, Poisson, and Hypergeometric distributions.',
      descriptionAr: 'بديهيات كولموجوروف للاحتمالات، الاحتمال الشرطي، نظرية بيز، المتغيرات العشوائية المنفصلة، وتوزيعات ذات الحدين وبواسون وفوق الهندسية.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'egbac_prob_l1',
          titleEn: 'Axiomatic Probability, Conditional Independence & Bayes Theorem',
          titleAr: 'الاحتمال البديهي والاستقلال الشرطي ونظرية بيز',
          summaryEn: 'Master Kolmogorov axioms, inclusion-exclusion principle, conditional probability, law of total probability, and Bayesian updating.',
          summaryAr: 'إتقان بديهيات كولموجوروف، مبدأ التضمين والاستبعاد، الاحتمال الشرطي، قانون الاحتمال الكلي، والتحديث البايزي للاحتمالات.',
          theoryContentEn: `### 1. Kolmogorov Axioms of Probability
Let $\\Omega$ be a sample space and $\\mathcal{F}$ be a $\\sigma$-algebra of events. A probability measure $P: \\mathcal{F} \\to [0, 1]$ satisfies:
1. **Non-negativity:** $\\forall A \\in \\mathcal{F}, \\; P(A) \\ge 0$.
2. **Normalization:** $P(\\Omega) = 1$.
3. **Countable Additivity:** For mutually disjoint events $A_1, A_2, \\dots$,
   $$P\\left(\\bigcup_{i=1}^\\infty A_i\\right) = \\sum_{i=1}^\\infty P(A_i)$$

### 2. Law of Total Probability & Bayes Theorem
Given a partition $B_1, B_2, \\dots, B_k$ of $\\Omega$:
- **Law of Total Probability:**
  $$P(A) = \\sum_{i=1}^k P(A \\mid B_i) P(B_i)$$
- **Bayes Theorem (Posterior Inversion):**
  $$P(B_j \\mid A) = \\frac{P(A \\mid B_j) P(B_j)}{\\sum_{i=1}^k P(A \\mid B_i) P(B_i)}$$`,
          theoryContentAr: `### ١. بديهيات كولموجوروف للاحتمالات
ليكن $\\Omega$ فضاء العينة و $\\mathcal{F}$ جبر الحوادث. دالة الاحتمال $P$ تحقق:
١. **اللا سالبية:** لكل حدث $A$، $P(A) \\ge 0$.
٢. **المعايرة:** $P(\\Omega) = 1$.
٣. **الجمعية الحسابية:** لأي أحداث متنافية مثنى مثنى $A_1, A_2, \\dots$:
   $$P\\left(\\bigcup_{i=1}^\\infty A_i\\right) = \\sum_{i=1}^\\infty P(A_i)$$

### ٢. قانون الاحتمال الكلي ونظرية بيز
إذا كانت الأحداث $B_1, B_2, \\dots, B_k$ تشكل تجزيئاً تاماً لفضاء العينة:
- **قانون الاحتمال الكلي:**
  $$P(A) = \\sum_{i=1}^k P(A \\mid B_i) P(B_i)$$
- **نظرية بيز:**
  $$P(B_j \\mid A) = \\frac{P(A \\mid B_j) P(B_j)}{\\sum_{i=1}^k P(A \\mid B_i) P(B_i)}$$`,
          formulas: [
            { labelEn: 'Conditional Probability', labelAr: 'الاحتمال الشرطي', latex: 'P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)}' },
            { labelEn: 'Bayes Formula', labelAr: 'صيغة بيز', latex: 'P(B_j \\mid A) = \\frac{P(A \\mid B_j)P(B_j)}{\\sum P(A \\mid B_i)P(B_i)}' },
            { labelEn: 'Inclusion-Exclusion', labelAr: 'مبدأ التضمين والاستبعاد', latex: 'P(A \\cup B) = P(A) + P(B) - P(A \\cap B)' }
          ],
          moeRef: {
            bookTitleEn: 'Egyptian Baccalaureate Advanced Mathematics: Probability & Stochastic Systems',
            bookTitleAr: 'البكالوريا المصرية: الرياضيات المتقدمة - الاحتمالات والأنظمة العشوائية',
            grade: 'Grade 12 (STEM Track)',
            term: 'Term 1',
            officialCode: 'MOE-EGBAC-PROB-CH1-L1',
            pageRange: 'pp. 8-36'
          },
          lessonPlan: {
            titleEn: 'Axiomatic Probability and Bayesian Decision Making',
            titleAr: 'الاحتمال البديهي واتخاذ القرارات البايزية',
            gradeLevel: 'Grade 12 STEM Baccalaureate',
            durationMinutes: 90,
            moeCode: 'MOE-EGBAC-PROB-CH1-LP1',
            bloomsObjectivesEn: [
              'Prove basic probability properties from Kolmogorov axioms.',
              'Calculate prior and posterior probabilities using Bayes theorem in clinical and engineering contexts.',
              'Assess conditional independence versus marginal independence.'
            ],
            bloomsObjectivesAr: [
              'إثبات الخواص الاحتمالية الأساسية انطلاقاً من بديهيات كولموجوروف.',
              'حساب الاحتمالات القبلية والبعدية بنظرية بيز في السياقات الطبية والهندسية.',
              'التمييز الرياضي بين الاستقلال الشرطي والاستقلال الهامشي.'
            ],
            prerequisitesEn: ['Set Theory', 'Basic Combinatorics', 'Fractions and Percentages'],
            prerequisitesAr: ['نظرية المجموعات', 'مبادئ التباديل والتوافيق', 'النسب المئوية والكسور'],
            keyVocabularyEn: [
              { term: 'Sample Space', definition: 'The set of all possible elementary outcomes of a random experiment.' },
              { term: 'Posterior Probability', definition: 'Conditional probability of an event updated after observing new evidence.' },
              { term: 'Partition', definition: 'A collection of mutually exclusive and collectively exhaustive events.' }
            ],
            keyVocabularyAr: [
              { term: 'فضاء العينة', definition: 'مجموعة كافة النواتج الأولية الممكنة لتجربة عشوائية.' },
              { term: 'الاحتمال البعدي', definition: 'الاحتمال الشرطي لحدث بعد رصد وتحديث الأدلة والمعلومات الجديدة.' },
              { term: 'التجزيء التام', definition: 'مجموعة أحداث متنافية مثنى مثنى وشاملة لفضاء العينة بأكمله.' }
            ],
            teachingPacing: [
              { phaseEn: 'Kolmogorov Axioms', phaseAr: 'بديهيات كولموجوروف', duration: '20 min', activitiesEn: 'Derive complementary probability and inclusion-exclusion from axioms.', activitiesAr: 'استنتاج احتمال الحدث المكمل والتضمين والاستبعاد من البديهيات.' },
              { phaseEn: 'Total Probability & Trees', phaseAr: 'قانون الاحتمال الكلي والشجرة', duration: '25 min', activitiesEn: 'Construct tree diagrams to compute marginal probabilities over partitions.', activitiesAr: 'بناء مخططات الشجرة لحساب الاحتمالات الهامشية للتجزيء.' },
              { phaseEn: 'Bayes Theorem Lab', phaseAr: 'مختبر نظرية بيز', duration: '30 min', activitiesEn: 'Work through disease diagnosis and machine failure Bayesian inversion problems.', activitiesAr: 'حل مسائل تطبيقية على التشخيص الطبي وأعطال الآلات بنظرية بيز.' },
              { phaseEn: 'Exit Ticket', phaseAr: 'تذكرة الخروج', duration: '15 min', activitiesEn: 'Evaluate posterior probability given true and false positive rates.', activitiesAr: 'حساب الاحتمال البعدي بمعلومية نسب الإيجابية الصادقة والكاذبة.' }
            ],
            commonMisconceptionsEn: [
              'Confusing P(A | B) with P(B | A) (the prosecutor fallacy).',
              'Assuming that disjoint events are independent.'
            ],
            commonMisconceptionsAr: [
              'الخلط بين P(A | B) و P(B | A) (مغالطة المدعي العام).',
              'الاعتقاد الخاطئ بأن الأحداث المتنافية تكون مستقلة.'
            ],
            differentiationEn: {
              struggling: 'Use 1000-person contingency tables rather than abstract algebraic formulas.',
              advanced: 'Introduce Borel-Cantelli lemmas and sigma-algebras on uncountably infinite spaces.'
            },
            differentiationAr: {
              struggling: 'استخدام جداول التوافق القائمة على ١٠٠٠ شخص بدلاً من الصيغ الجبرية المجردة.',
              advanced: 'تقديم لمات بوريل-كانتيلي وجبر سيجما على الفضاءات اللانهائية غير القابلة للعد.'
            },
            formativeAssessmentEn: 'Ask students why P(A and B) = 0 for mutually exclusive events, yet independent events require P(A and B) = P(A)P(B) > 0.',
            formativeAssessmentAr: 'سؤال شفهي: لماذا P(A و B) = 0 للأحداث المتنافية، بينما الأحداث المستقلة تتطلب أن يكون P(A و B) > 0؟',
            exitTicketQuestion: {
              questionEn: 'If P(A) = 0.4, P(B) = 0.5, and P(A | B) = 0.6, find P(B | A).',
              questionAr: 'إذا كان P(A) = 0.4 و P(B) = 0.5 و P(A | B) = 0.6، فاحسب P(B | A).',
              solutionEn: 'P(A and B) = P(A | B)P(B) = 0.6 * 0.5 = 0.3. Then P(B | A) = 0.3 / 0.4 = 0.75.',
              solutionAr: 'P(A و B) = 0.6 * 0.5 = 0.3. وبالتالي P(B | A) = 0.3 / 0.4 = 0.75.'
            }
          },
          worksheet: {
            id: 'ws_egbac_prob_l1',
            titleEn: 'Worksheet: Axiomatic Probability & Bayesian Inversion',
            titleAr: 'ورقة عمل: الاحتمال البديهي وعكس الاحتمالات البايزي',
            descriptionEn: 'Rigorous analytical exercises on total probability, partition theorem, and Bayesian inference.',
            descriptionAr: 'تدريبات تحليلية دقيقة على الاحتمال الكلي، نظرية التجزيء، والاستدلال البايزي.',
            estimatedTimeMinutes: 45,
            problems: [
              {
                id: 'ws_prob_p1',
                titleEn: 'Partition & Total Probability',
                titleAr: 'التجزيء والاحتمال الكلي',
                difficulty: 'medium',
                questionEn: 'Boxes 1, 2, and 3 produce $30\\%$, $45\\%$, and $25\\%$ of items with defect rates $2\\%$, $3\\%$, and $4\\%$. Find the overall probability of a defect.',
                questionAr: 'ثلاثة خطوط إنتاج تنتج $30\\%$ و $45\\%$ و $25\\%$ بنسب عيوب $2\\%$ و $3\\%$ و $4\\%$. احسب الاحتمال الكلي لكون القطعة معيبة.',
                optionsEn: ['0.0295', '0.0350', '0.0400', '0.0250'],
                optionsAr: ['٠٫٠٢٩٥', '٠٫٠٣٥٠', '٠٫٠٤٠٠', '٠٫٠٢٥٠'],
                correctAnswer: '0.0295',
                correctIndex: 0,
                hintEn: 'P(D) = sum P(D | B_i) * P(B_i).',
                hintAr: 'P(D) = 0.30(0.02) + 0.45(0.03) + 0.25(0.04).',
                stepByStepSolutionEn: [
                  '1. P(D) = 0.30(0.02) + 0.45(0.03) + 0.25(0.04).',
                  '2. P(D) = 0.0060 + 0.0135 + 0.0100 = 0.0295 (2.95%).'
                ],
                stepByStepSolutionAr: [
                  '١. P(D) = 0.30(0.02) + 0.45(0.03) + 0.25(0.04).',
                  '٢. P(D) = 0.0060 + 0.0135 + 0.0100 = 0.0295.'
                ],
                teacherTipEn: 'Weighted sum of defect rates represents marginal defect likelihood.',
                teacherTipAr: 'المجموع الوزني لنسب العيوب يمثل الاحتمال الهامشي لظهور عيب.'
              }
            ]
          },
          interactiveWidget: {
            type: 'normal_distribution',
            titleEn: 'Bayesian Updating Visualizer',
            titleAr: 'المحاكي التفاعلي لتحديث الاحتمالات البايزي',
            descriptionEn: 'Interactive slider tool dynamically updating prior and posterior probabilities based on test sensitivity and base rate.',
            descriptionAr: 'أداة تفاعلية لتحديث الاحتمالات القبلية والبعدية ديناميكياً وفق حساسية الفحص ومعدل الانتشار.'
          }
        },
        {
          id: 'egbac_prob_l2',
          titleEn: 'Discrete Distributions: Binomial, Poisson & Moment Generating Functions',
          titleAr: 'التوزيعات المنفصلة: ذات الحدين، بواسون والدوال المولدة للعزوم',
          summaryEn: 'Expectation, variance, Binomial PMF, Poisson limit theorem, and Moment Generating Functions (MGFs).',
          summaryAr: 'التوقع والتباين، دالة الكتلة الاحتمالية لذات الحدين، نظرية نهاية بواسون، والدوال المولدة للعزوم.',
          theoryContentEn: `### 1. Discrete Random Variables & PMF
For a discrete random variable $X$ taking values $x_i$:
- **Expectation:** $E[X] = \\sum x_i p(x_i)$.
- **Variance:** $\\text{Var}(X) = E[X^2] - (E[X])^2$.

### 2. Standard Discrete Models
- **Binomial Distribution $B(n, p)$:**
  $$P(X = k) = \\binom{n}{k} p^k (1 - p)^{n - k}, \\quad E[X] = np, \\quad \\text{Var}(X) = np(1 - p)$$
- **Poisson Distribution $\\text{Poisson}(\\lambda)$:**
  $$P(X = k) = \\frac{\\lambda^k e^{-\\lambda}}{k!}, \\quad E[X] = \\lambda, \\quad \\text{Var}(X) = \\lambda$$`,
          theoryContentAr: `### ١. المتغيرات العشوائية المنفصلة ودوال الكتلة
للمتغير العشوائي المنفصل $X$:
- **القيمة المتوقعة:** $E[X] = \\sum x_i p(x_i)$.
- **التباين:** $\\text{Var}(X) = E[X^2] - (E[X])^2$.

### ٢. التوزيعات المنفصلة القياسية
- **توزيع ذات الحدين:**
  $$P(X = k) = \\binom{n}{k} p^k (1 - p)^{n - k}$$
- **توزيع بواسون:**
  $$P(X = k) = \\frac{\\lambda^k e^{-\\lambda}}{k!}$$`,
          formulas: [
            { labelEn: 'Binomial PMF', labelAr: 'دالة كتلة ذات الحدين', latex: 'P(X = k) = \\binom{n}{k} p^k (1-p)^{n-k}' },
            { labelEn: 'Poisson PMF', labelAr: 'دالة كتلة بواسون', latex: 'P(X = k) = \\frac{\\lambda^k e^{-\\lambda}}{k!}' },
            { labelEn: 'Variance Identity', labelAr: 'متطابقة التباين', latex: '\\text{Var}(X) = E[X^2] - (E[X])^2' }
          ],
          moeRef: {
            bookTitleEn: 'Egyptian Baccalaureate Advanced Mathematics: Probability & Stochastic Systems',
            bookTitleAr: 'البكالوريا المصرية: الرياضيات المتقدمة - الاحتمالات والأنظمة العشوائية',
            grade: 'Grade 12 (STEM Track)',
            term: 'Term 1',
            officialCode: 'MOE-EGBAC-PROB-CH1-L2',
            pageRange: 'pp. 37-72'
          },
          lessonPlan: {
            titleEn: 'Discrete Probability Distributions and Limiting Theorems',
            titleAr: 'التوزيعات الاحتمالية المنفصلة ونظريات النهايات',
            gradeLevel: 'Grade 12 STEM Baccalaureate',
            durationMinutes: 90,
            moeCode: 'MOE-EGBAC-PROB-CH1-LP2',
            bloomsObjectivesEn: [
              'Model counting experiments using Binomial and Poisson distributions.',
              'Derive expected value and variance using moment generating functions.',
              'Apply the Poisson limit theorem to approximate large n, small p Binomial probabilities.'
            ],
            bloomsObjectivesAr: [
              'نمذجة تجارب العد باستخدام توزيعات ذات الحدين وبواسون.',
              'استنتاج القيمة المتوقعة والتباين باستخدام الدوال المولدة للعزوم.',
              'تطبيق نظرية نهاية بواسون لتقريب ذات الحدين عند كبر حجم العينة وصغر الاحتمال.'
            ],
            prerequisitesEn: ['Combinatorics', 'Calculus Taylor Expansions', 'Binomial Theorem'],
            prerequisitesAr: ['التحليل التوافقي', 'متسلسلات تايلور في التفاضل', 'نظرية ذات الحدين'],
            keyVocabularyEn: [
              { term: 'Bernoulli Trial', definition: 'A random experiment with exactly two mutually exclusive outcomes: success and failure.' },
              { term: 'Poisson Approximation', definition: 'Limiting form of Binomial distribution as n -> infinity and p -> 0 with lambda = np constant.' }
            ],
            keyVocabularyAr: [
              { term: 'محاولة برنولي', definition: 'تجربة عشوائية لها ناتجان ممكنان فقط: نجاح أو فشل.' },
              { term: 'تقريب بواسون', definition: 'الصورة الحدية لتوزيع ذات الحدين عند اقتراب n من اللانهاية و p من الصفر.' }
            ],
            teachingPacing: [
              { phaseEn: 'Binomial Mechanics', phaseAr: 'آليات ذات الحدين', duration: '25 min', activitiesEn: 'Derive mean and variance of B(n, p) using indicator variables.', activitiesAr: 'استنتاج المتوسط والتباين لذات الحدين باستخدام المتغيرات الدالة.' },
              { phaseEn: 'Poisson Derivation', phaseAr: 'استنتاج توزيع بواسون', duration: '30 min', activitiesEn: 'Show lim (1 - lambda/n)^n = e^(-lambda) to obtain Poisson PMF.', activitiesAr: 'إثبات نهاية التوزيع والوصول لصيغة بواسون.' },
              { phaseEn: 'Worked Problems', phaseAr: 'حل المسائل النموذجية', duration: '20 min', activitiesEn: 'Solve rare event counting problems in telecommunications and biology.', activitiesAr: 'حل مسائل عد الأحداث النادرة في الاتصالات والبيولوجيا.' },
              { phaseEn: 'Formative Wrap-up', phaseAr: 'التقييم التكويني', duration: '15 min', activitiesEn: 'Compare exact Binomial with Poisson approximation.', activitiesAr: 'مقارنة القيمة الدقيقة لذات الحدين مع تقريب بواسون.' }
            ],
            commonMisconceptionsEn: [
              'Applying Poisson approximation when p is close to 0.5 (where Normal approximation is required).',
              'Forgetting that Poisson events must be independent in non-overlapping intervals.'
            ],
            commonMisconceptionsAr: [
              'تطبيق تقريب بواسون عندما يكون p قريباً من 0.5 (حيث يلزم التقريب الطبيعي).',
              'نسيان شرط استقلال أحداث بواسون في الفترات غير المتداخلة.'
            ],
            differentiationEn: {
              struggling: 'Focus on direct table/formula evaluation of Binomial probabilities.',
              advanced: 'Derive the Negative Binomial and Geometric distributions as waiting-time models.'
            },
            differentiationAr: {
              struggling: 'التركيز على التطبيق الحسابي المباشر لصيغة ذات الحدين.',
              advanced: 'استنتاج التوزيع الهندسي وذات الحدين السالب كنماذج لأزمنة الانتظار.'
            },
            formativeAssessmentEn: 'Why is variance equal to the mean for a Poisson distribution?',
            formativeAssessmentAr: 'لماذا يتساوى التباين مع المتوسط تماماً في توزيع بواسون؟',
            exitTicketQuestion: {
              questionEn: 'If X ~ Poisson(lambda = 4), find P(X = 0) and Var(X).',
              questionAr: 'إذا كان X يتبع بواسون بمعامل lambda = 4، فأوجد P(X = 0) و Var(X).',
              solutionEn: 'P(X = 0) = e^(-4) approx 0.0183, and Var(X) = lambda = 4.',
              solutionAr: 'P(X = 0) = e^(-4) approx 0.0183، والتباين Var(X) = 4.'
            }
          },
          worksheet: {
            id: 'ws_egbac_prob_l2',
            titleEn: 'Worksheet: Binomial & Poisson Modeling',
            titleAr: 'ورقة عمل: نمذجة ذات الحدين وبواسون',
            descriptionEn: 'Computational practice on discrete probability distributions.',
            descriptionAr: 'تمارين حسابية على التوزيعات الاحتمالية المنفصلة.',
            estimatedTimeMinutes: 45,
            problems: [
              {
                id: 'ws_prob_p2',
                titleEn: 'Binomial Mean & Variance Calculation',
                titleAr: 'حساب متوسط وتباين ذات الحدين',
                difficulty: 'easy',
                questionEn: 'For a Binomial random variable $X \\sim B(n = 50, p = 0.2)$, find $E[X]$ and $\\text{Var}(X)$.',
                questionAr: 'لمتغير عشوائي ذي الحدين $X \\sim B(n = 50, p = 0.2)$، احسب $E[X]$ و $\\text{Var}(X)$.',
                optionsEn: ['$E[X] = 10, \\; \\text{Var}(X) = 8$', '$E[X] = 10, \\; \\text{Var}(X) = 10$', '$E[X] = 8, \\; \\text{Var}(X) = 10$', '$E[X] = 5, \\; \\text{Var}(X) = 4$'],
                optionsAr: ['$E[X] = 10, \\; \\text{Var}(X) = 8$', '$E[X] = 10, \\; \\text{Var}(X) = 10$', '$E[X] = 8, \\; \\text{Var}(X) = 10$', '$E[X] = 5, \\; \\text{Var}(X) = 4$'],
                correctAnswer: '$E[X] = 10, \\; \\text{Var}(X) = 8$',
                correctIndex: 0,
                hintEn: 'E[X] = np = 50 * 0.2 = 10. Var(X) = np(1-p) = 10 * 0.8 = 8.',
                hintAr: 'E[X] = 50 * 0.2 = 10، والتباين = 10 * 0.8 = 8.',
                stepByStepSolutionEn: [
                  '1. E[X] = np = 50 * 0.2 = 10.',
                  '2. Var(X) = np(1-p) = 50 * 0.2 * 0.8 = 8.'
                ],
                stepByStepSolutionAr: [
                  '١. المتوسط: E[X] = 50 * 0.2 = 10.',
                  '٢. التباين: Var(X) = 10 * 0.8 = 8.'
                ],
                teacherTipEn: 'Variance is always strictly less than the mean for Binomial models.',
                teacherTipAr: 'التباين في توزيع ذات الحدين يكون دائماً أقل تماماً من المتوسط.'
              }
            ]
          },
          interactiveWidget: {
            type: 'pascal_binomial',
            titleEn: 'Binomial vs Poisson PMF Histogram Lab',
            titleAr: 'مختبر مقارنة مدرج ذات الحدين وبواسون التفاعلي',
            descriptionEn: 'Interactive chart illustrating the convergence of Binomial B(n, p) to Poisson(np) as n grows large.',
            descriptionAr: 'رسم بياني تفاعلي يوضح تقارب مدرج ذات الحدين إلى منحنى بواسون عند زيادة حجم العينة n.'
          }
        }
      ],
      solvedExamples: egBacProbCh1SolvedExamples,
      exerciseProblems: egBacProbCh1Exercises,
      databank: egBacProbCh1Databank
    },
    {
      id: 'egbac_prob_ch2',
      chapterNumber: 2,
      titleEn: 'Continuous Distributions, Statistical Inference & Stochastic Modeling',
      titleAr: 'التوزيعات المتصلة والاستدلال الإحصائي والنمذجة العشوائية',
      descriptionEn: 'Continuous PDFs, Uniform, Exponential, Normal distributions, Central Limit Theorem, confidence intervals, hypothesis testing, and Markov chains.',
      descriptionAr: 'دوال الكثافة المتصلة، التوزيع المنتظم والأسي والطبيعي، نظرية النهاية المركزية، فترات الثقة، اختبارات الفروض، وسلاسل ماركوف وعمليات بواسون.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'egbac_prob_l3',
          titleEn: 'Continuous Distributions, Normal Density & Central Limit Theorem',
          titleAr: 'التوزيعات المتصلة والكثافة الطبيعية ونظرية النهاية المركزية',
          summaryEn: 'Continuous PDFs and CDFs, Uniform and Exponential distributions, Gaussian density, standardization, and the Central Limit Theorem.',
          summaryAr: 'دوال الكثافة والتوزيع التراكمي، التوزيع المنتظم والأسي، خواص التوزيع الطبيعي، المعايرة القياسية، ونظرية النهاية المركزية.',
          theoryContentEn: `### 1. Continuous Random Variables & PDFs
A continuous random variable $X$ has PDF $f(x)$ such that:
- $f(x) \\ge 0$ and $\\int_{-\\infty}^\\infty f(x) \\, dx = 1$.
- $P(a \\le X \\le b) = \\int_a^b f(x) \\, dx = F(b) - F(a)$.

### 2. Gaussian Distribution & CLT
If $X \\sim N(\\mu, \\sigma^2)$, then $Z = \\frac{X - \\mu}{\\sigma} \\sim N(0, 1)$.
- **Central Limit Theorem:**
  For i.i.d. random variables with finite mean $\\mu$ and variance $\\sigma^2$:
  $$\\frac{\\bar{X}_n - \\mu}{\\sigma / \\sqrt{n}} \\xrightarrow{d} N(0, 1) \\quad \\text{as } n \\to \\infty$$`,
          theoryContentAr: `### ١. المتغيرات العشوائية المتصلة ودوال الكثافة
المتغير العشوائي المتصل $X$ له دالة كثافة $f(x)$ تحقق:
- $f(x) \\ge 0$ و $\\int_{-\\infty}^\\infty f(x) \\, dx = 1$.
- $P(a \\le X \\le b) = \\int_a^b f(x) \\, dx = F(b) - F(a)$.

### ٢. التوزيع الطبيعي ونظرية النهاية المركزية
إذا كان $X \\sim N(\\mu, \\sigma^2)$، فإن $Z = \\frac{X - \\mu}{\\sigma} \\sim N(0, 1)$.
- **نظرية النهاية المركزية:**
  لأي عينة عشوائية مستقلة ومتطابقة التوزيع:
  $$\\frac{\\bar{X}_n - \\mu}{\\sigma / \\sqrt{n}} \\xrightarrow{d} N(0, 1)$$`,
          formulas: [
            { labelEn: 'Continuous PDF Normalization', labelAr: 'معايرة دالة الكثافة', latex: '\\int_{-\\infty}^\\infty f(x) \\, dx = 1' },
            { labelEn: 'Standard Normal Z-Score', labelAr: 'الدرجة المعيارية الطبيعية', latex: 'Z = \\frac{X - \\mu}{\\sigma}' },
            { labelEn: 'Sample Mean Standard Error', labelAr: 'الخطأ المعياري لمتوسط العينة', latex: 'SE(\\bar{X}) = \\frac{\\sigma}{\\sqrt{n}}' }
          ],
          moeRef: {
            bookTitleEn: 'Egyptian Baccalaureate Advanced Mathematics: Probability & Stochastic Systems',
            bookTitleAr: 'البكالوريا المصرية: الرياضيات المتقدمة - الاحتمالات والأنظمة العشوائية',
            grade: 'Grade 12 (STEM Track)',
            term: 'Term 2',
            officialCode: 'MOE-EGBAC-PROB-CH2-L1',
            pageRange: 'pp. 75-115'
          },
          lessonPlan: {
            titleEn: 'Continuous Probability Distributions and the Central Limit Theorem',
            titleAr: 'التوزيعات الاحتمالية المتصلة ونظرية النهاية المركزية',
            gradeLevel: 'Grade 12 STEM Baccalaureate',
            durationMinutes: 90,
            moeCode: 'MOE-EGBAC-PROB-CH2-LP1',
            bloomsObjectivesEn: [
              'Verify validity and calculate probabilities for continuous density functions using definite integrals.',
              'Apply standard normal z-tables to evaluate Gaussian probabilities and quantiles.',
              'Formulate asymptotic distribution of sample sums and means via the Central Limit Theorem.'
            ],
            bloomsObjectivesAr: [
              'التحقق من صحة دوال الكثافة المتصلة وحساب الاحتمالات باستخدام التكامل المحدد.',
              'استخدام جداول التوزيع الطبيعي المعياري لحساب الاحتمالات والمئينات.',
              'صياغة التوزيع التقاربي لمجاميع ومتوسطات العينات بواسطة نظرية النهاية المركزية.'
            ],
            prerequisitesEn: ['Definite Integration', 'Improper Integrals', 'Basic Statistics'],
            prerequisitesAr: ['التكامل المحدد', 'التكاملات المعتلة', 'مفاهيم الإحصاء الوصفي'],
            keyVocabularyEn: [
              { term: 'Probability Density Function', definition: 'A function whose integral over any interval equals the probability of the random variable falling within it.' },
              { term: 'Central Limit Theorem', definition: 'The fundamental theorem stating that normalized sample means approach a Gaussian curve as sample size increases.' }
            ],
            keyVocabularyAr: [
              { term: 'دالة الكثافة الاحتمالية', definition: 'دالة يمثل تكاملها على أي فترة احتمال وقوع المتغير العشوائي داخل تلك الفترة.' },
              { term: 'نظرية النهاية المركزية', definition: 'النظرية الأساسية التي تنص على اقتراب توزيع متوسطات العينات من المنحنى الطبيعي كلما كبرت العينة.' }
            ],
            teachingPacing: [
              { phaseEn: 'Continuous Mechanics', phaseAr: 'مفاهيم الكثافة المتصلة', duration: '25 min', activitiesEn: 'Contrast discrete sums with continuous integration and area under curve.', activitiesAr: 'المقارنة بين المجاميع المنفصلة والتكامل المتصل والمساحة تحت المنحنى.' },
              { phaseEn: 'The Gaussian Curve', phaseAr: 'المنحنى الطبيعي الجرسي', duration: '25 min', activitiesEn: 'Standardization and symmetry properties of the bell curve.', activitiesAr: 'المعايرة وخواص التماثل للمنحنى الطبيعي حول المتوسط.' },
              { phaseEn: 'CLT Simulation Lab', phaseAr: 'محاكاة نظرية النهاية المركزية', duration: '25 min', activitiesEn: 'Simulate rolling 30 dice to observe emergence of the bell curve.', activitiesAr: 'محاكاة رمي ٣٠ نرد وملاحظة تشكل المنحنى الطبيعي للمجموع.' },
              { phaseEn: 'Exit Ticket', phaseAr: 'تذكرة الخروج', duration: '15 min', activitiesEn: 'Calculate standardized z-score and probability for sample mean.', activitiesAr: 'حساب الدرجة المعيارية واحتمال متوسط العينة.' }
            ],
            commonMisconceptionsEn: [
              'Believing that P(X = c) > 0 for a continuous random variable (it is always exactly 0).',
              'Assuming the population must be normally distributed for the CLT to apply.'
            ],
            commonMisconceptionsAr: [
              'الاعتقاد بأن P(X = c) > 0 للمتغير المتصل (هو صفر تماماً دائماً عند نقطة مفردة).',
              'الظن بأن المجتمع الأصلي يجب أن يكون طبيعياً لتطبيق نظرية النهاية المركزية.'
            ],
            differentiationEn: {
              struggling: 'Use standard normal empirical rule (68-95-99.7) for integer standard deviations.',
              advanced: 'Explore the Berry-Esseen theorem bounding the convergence rate of the CLT.'
            },
            differentiationAr: {
              struggling: 'استخدام القاعدة التجريبية ٦٨-٩٥-٩٩٫٧ للانحرافات المعيارية الصحيحة.',
              advanced: 'دراسة مبرهنة بيري-إيسين التي تحدد معدل سرعة اقتراب نظرية النهاية المركزية.'
            },
            formativeAssessmentEn: 'Explain why the probability of a continuous variable hitting any exact real number is zero.',
            formativeAssessmentAr: 'اشرح للطلاب لماذا احتمال أن يأخذ المتغير المتصل قيمة محددة بالضبط يساوي صفراً دائماً.',
            exitTicketQuestion: {
              questionEn: 'If X ~ N(50, 16), find P(X < 50) and z for x = 58.',
              questionAr: 'إذا كان X يتبع N(50, 16)، فاحسب P(X < 50) وقيمة z عند x = 58.',
              solutionEn: 'P(X < 50) = 0.5 by symmetry. z = (58 - 50) / 4 = +2.0.',
              solutionAr: 'P(X < 50) = 0.5 بالتماثل. z = (58 - 50) / 4 = +2.0.'
            }
          },
          worksheet: {
            id: 'ws_egbac_prob_l3',
            titleEn: 'Worksheet: Continuous Densities & Gaussian Calculations',
            titleAr: 'ورقة عمل: الكثافات المتصلة والحسابات الطبيعية',
            descriptionEn: 'Analytical problems on normal distribution and sample mean standardization.',
            descriptionAr: 'مسائل تحليلية على التوزيع الطبيعي ومعايرة متوسطات العينات.',
            estimatedTimeMinutes: 45,
            problems: [
              {
                id: 'ws_prob_p3',
                titleEn: 'Standard Error & Z-Score',
                titleAr: 'الخطأ المعياري والدرجة المعيارية',
                difficulty: 'easy',
                questionEn: 'A population has mean $\\mu = 100$ and $\\sigma = 15$. For a sample of size $n = 25$, find $SE(\\bar{X})$ and the $z$-score for $\\bar{x} = 106$.',
                questionAr: 'مجتمع متوسطه $\\mu = 100$ وانحرافه $\\sigma = 15$. لعينة حجمها $n = 25$، احسب $SE(\\bar{X})$ والدرجة المعيارية لـ $\\bar{x} = 106$.',
                optionsEn: ['$SE = 3, \\; z = +2.0$', '$SE = 3, \\; z = +1.0$', '$SE = 5, \\; z = +2.0$', '$SE = 15, \\; z = +0.4$'],
                optionsAr: ['$SE = 3, \\; z = +2.0$', '$SE = 3, \\; z = +1.0$', '$SE = 5, \\; z = +2.0$', '$SE = 15, \\; z = +0.4$'],
                correctAnswer: '$SE = 3, \\; z = +2.0$',
                correctIndex: 0,
                hintEn: 'SE = sigma / sqrt(n) = 15 / 5 = 3. z = (106 - 100) / 3 = 2.0.',
                hintAr: 'الخطأ المعياري = 15 / 5 = 3، والدرجة z = 6 / 3 = 2.0.',
                stepByStepSolutionEn: [
                  '1. SE = 15 / sqrt(25) = 15 / 5 = 3.',
                  '2. z = (106 - 100) / 3 = 6 / 3 = +2.0.'
                ],
                stepByStepSolutionAr: [
                  '١. الخطأ المعياري: SE = 15 / 5 = 3.',
                  '٢. الدرجة المعيارية: z = (106 - 100) / 3 = +2.0.'
                ],
                teacherTipEn: 'Standard error scales inversely with the square root of sample size.',
                teacherTipAr: 'الخطأ المعياري يتناسب عكسياً مع الجذر التربيعي لحجم العينة.'
              }
            ]
          },
          interactiveWidget: {
            type: 'normal_distribution',
            titleEn: 'Normal Distribution Area & Percentile Explorer',
            titleAr: 'مستكشف مساحات ومئينات التوزيع الطبيعي التفاعلي',
            descriptionEn: 'Dynamic interactive visualizer shading Gaussian tail probabilities and displaying exact z-scores.',
            descriptionAr: 'أداة بصرية تفاعلية لتظليل مساحات ذيول التوزيع الطبيعي وعرض الدرجات المعيارية الدقيقة.'
          }
        },
        {
          id: 'egbac_prob_l4',
          titleEn: 'Statistical Inference, Hypothesis Testing & Stochastic Processes',
          titleAr: 'الاستدلال الإحصائي واختبارات الفروض والعمليات العشوائية',
          summaryEn: 'Confidence intervals, Neyman-Pearson hypothesis testing framework, Z and t tests, Markov chains, and Poisson processes.',
          summaryAr: 'فترات الثقة، إطار نيمان-بيرسون لاختبار الفروض، اختبارات Z و t، سلاسل ماركوف، وعمليات بواسون العشوائية.',
          theoryContentEn: `### 1. Statistical Hypothesis Testing
- **Null vs Alternative:** $H_0: \\mu = \\mu_0$ versus $H_1: \\mu > \\mu_0$.
- **Test Statistic:** $z_{\\text{calc}} = \\frac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}$.
- **Rejection Rule:** At $\\alpha = 0.05$, reject $H_0$ if $z_{\\text{calc}} > 1.645$.

### 2. Markov Chains & Transition Dynamics
A discrete Markov chain satisfies:
$$P(X_{n+1} = j \\mid X_n = i, \\dots) = P(X_{n+1} = j \\mid X_n = i) = P_{ij}$$
- **Stationary Distribution:** Vector $\\pi$ satisfying $\\pi P = \\pi$ and $\\sum \\pi_i = 1$.`,
          theoryContentAr: `### ١. اختبارات الفروض الإحصائية
- **الفرض الصفري والبديل:** $H_0: \\mu = \\mu_0$ مقابل $H_1: \\mu > \\mu_0$.
- **إحصائية الاختبار:** $z = \\frac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}$.
- **القرار:** عند $\\alpha = 0.05$ نرفض الفرض الصفري إذا كان $z > 1.645$.

### ٢. سلاسل ماركوف
تحقق سلسلة ماركوف خاصية فقدان الذاكرة:
$$P(X_{n+1} = j \\mid X_n = i) = P_{ij}$$
- **التوزيع المستقر:** متجه $\\pi$ يحقق $\\pi P = \\pi$ ومجموع عناصره يساوي 1.`,
          formulas: [
            { labelEn: 'Confidence Interval for Mean', labelAr: 'فترة ثقة المتوسط', latex: '\\bar{x} \\pm z^* \\frac{\\sigma}{\\sqrt{n}}' },
            { labelEn: 'Hypothesis Z-Statistic', labelAr: 'إحصائية Z لاختبار الفروض', latex: 'z = \\frac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}' },
            { labelEn: 'Markov Stationary State', labelAr: 'حالة ماركوف المستقرة', latex: '\\pi P = \\pi, \\quad \\sum \\pi_i = 1' }
          ],
          moeRef: {
            bookTitleEn: 'Egyptian Baccalaureate Advanced Mathematics: Probability & Stochastic Systems',
            bookTitleAr: 'البكالوريا المصرية: الرياضيات المتقدمة - الاحتمالات والأنظمة العشوائية',
            grade: 'Grade 12 (STEM Track)',
            term: 'Term 2',
            officialCode: 'MOE-EGBAC-PROB-CH2-L2',
            pageRange: 'pp. 116-158'
          },
          lessonPlan: {
            titleEn: 'Inference and Stochastic Process Dynamics',
            titleAr: 'الاستدلال وديناميكا العمليات العشوائية',
            gradeLevel: 'Grade 12 STEM Baccalaureate',
            durationMinutes: 90,
            moeCode: 'MOE-EGBAC-PROB-CH2-LP2',
            bloomsObjectivesEn: [
              'Construct and interpret confidence intervals for population means.',
              'Execute one-sample Z tests and make rigorous statistical decisions at given significance levels.',
              'Calculate stationary distributions of regular discrete Markov chains.'
            ],
            bloomsObjectivesAr: [
              'بناء وتفسير فترات الثقة لمتوسطات المجتمعات الإحصائية.',
              'إجراء اختبارات Z لعينة واحدة واتخاذ القرارات الإحصائية عند مستويات معنوية محددة.',
              'حساب متجهات التوزيع المستقر لسلاسل ماركوف المنتظمة.'
            ],
            prerequisitesEn: ['Matrix Multiplication', 'Linear Systems', 'Standard Normal Distributions'],
            prerequisitesAr: ['ضرب المصفوفات', 'حل الأنظمة الخطية', 'التوزيع الطبيعي المعياري'],
            keyVocabularyEn: [
              { term: 'Confidence Interval', definition: 'An estimated range of values likely to contain an unknown population parameter with specified confidence.' },
              { term: 'Stationary Distribution', definition: 'A probability distribution that remains unchanged across transitions in a Markov chain.' }
            ],
            keyVocabularyAr: [
              { term: 'فترة الثقة', definition: 'فترة عددية مقدرة من العينة يُتوقع أن تحتوي على المعلمة المجهولة للمجتمع بمستوى ثقة محدد.' },
              { term: 'التوزيع المستقر', definition: 'توزيع احتمالي يظل ثابتاً غير متغير عبر انتقالات سلسلة ماركوف المتعاقبة.' }
            ],
            teachingPacing: [
              { phaseEn: 'Confidence Intervals', phaseAr: 'فترات الثقة', duration: '25 min', activitiesEn: 'Derive margin of error and construct 95% confidence intervals.', activitiesAr: 'استنتاج هامش الخطأ وبناء فترات ثقة ٩٥٪ للمتوسط.' },
              { phaseEn: 'Hypothesis Testing Framework', phaseAr: 'إطار اختبار الفروض', duration: '25 min', activitiesEn: 'Structure null/alternative hypotheses, type I/II errors, and critical rejection regions.', activitiesAr: 'هيكلة الفروض الصفرية والبديلة، أخطاء النوع الأول والثاني، ومناطق الرفض الحرجة.' },
              { phaseEn: 'Markov Transition Chains', phaseAr: 'سلاسل انتقال ماركوف', duration: '25 min', activitiesEn: 'Solve stationary equilibrium balance equations for 2-state customer models.', activitiesAr: 'حل معادلات الاتزان المستقر لنماذج العملاء ذات الحالتين.' },
              { phaseEn: 'Exit Ticket', phaseAr: 'تذكرة الخروج', duration: '15 min', activitiesEn: 'Compute stationary probability for given transition matrix.', activitiesAr: 'حساب الاحتمال المستقر لمصفوفة انتقال معطاة.' }
            ],
            commonMisconceptionsEn: [
              'Interpreting 95% confidence as a 95% probability that the true mean lies in this specific numerical interval.',
              'Accepting H_0 rather than failing to reject H_0.'
            ],
            commonMisconceptionsAr: [
              'الاعتقاد الخاطئ بأن ثقة ٩٥٪ تعني احتمال ٩٥٪ لوقوع المتوسط داخل الفترة العددية المحسوبة بذاتها.',
              'قول إثبات صحة الفرض الصفري بدلاً من التعبير الأدق وهو عدم كفاية الأدلة لرفضه.'
            ],
            differentiationEn: {
              struggling: 'Use standard two-state transition diagrams with clear branch arrows.',
              advanced: 'Prove Perron-Frobenius theorem for regular stochastic transition matrices.'
            },
            differentiationAr: {
              struggling: 'استخدام مخططات الحالات ثنائية الأسهم لتوضيح سلاسل ماركوف بصرياً.',
              advanced: 'استكشاف مبرهنة بيرون-فروبينيوس للمصفوفات الاحتمالية العشوائية المنتظمة.'
            },
            formativeAssessmentEn: 'What is the distinction between a critical value and a calculated test statistic?',
            formativeAssessmentAr: 'ما هو الفرق الجوهري بين القيمة الحرجة وإحصائية الاختبار المحسوبة من العينة؟',
            exitTicketQuestion: {
              questionEn: 'If P = [[0.7, 0.3], [0.4, 0.6]], find stationary pi_1.',
              questionAr: 'إذا كانت مصفوفة الانتقال [[0.7, 0.3], [0.4, 0.6]]، فاحسب pi_1.',
              solutionEn: 'pi_1 = 0.4 / (0.3 + 0.4) = 4/7 approx 0.5714.',
              solutionAr: 'pi_1 = 0.4 / (0.3 + 0.4) = 4/7 approx 0.5714.'
            }
          },
          worksheet: {
            id: 'ws_egbac_prob_l4',
            titleEn: 'Worksheet: Statistical Hypothesis Decisions & Markov Transitions',
            titleAr: 'ورقة عمل: قرارات اختبار الفروض وانتقالات ماركوف',
            descriptionEn: 'Rigorous problems on Z-tests, decision rules, and Markov equilibrium vectors.',
            descriptionAr: 'مسائل تدريبية متقدمة على اختبارات Z وقواعد القرار ومتجهات اتزان ماركوف.',
            estimatedTimeMinutes: 45,
            problems: [
              {
                id: 'ws_prob_p4',
                titleEn: 'Two-State Markov Stationary State',
                titleAr: 'الحالة المستقرة لسلسلة ماركوف ثنائية',
                difficulty: 'medium',
                questionEn: 'For transition matrix $P = \\begin{pmatrix} 0.8 & 0.2 \\\\ 0.3 & 0.7 \\end{pmatrix}$, find the long-term probability $\\pi_1$.',
                questionAr: 'لمصفوفة الانتقال $P = \\begin{pmatrix} 0.8 & 0.2 \\\\ 0.3 & 0.7 \\end{pmatrix}$، احسب الاحتمال المستقر $\\pi_1$.',
                optionsEn: ['0.60', '0.40', '0.50', '0.70'],
                optionsAr: ['٠٫٦٠', '٠٫٤٠', '٠٫٥٠', '٠٫٧٠'],
                correctAnswer: '0.60',
                correctIndex: 0,
                hintEn: 'pi_1 = b / (a + b) = 0.3 / (0.2 + 0.3) = 0.6.',
                hintAr: 'pi_1 = 0.3 / 0.5 = 0.60.',
                stepByStepSolutionEn: [
                  '1. Off-diagonal transition rates: a = 0.2, b = 0.3.',
                  '2. pi_1 = b / (a + b) = 0.3 / 0.5 = 0.60 (60%).'
                ],
                stepByStepSolutionAr: [
                  '١. معاملات الانتقال: a = 0.2 و b = 0.3.',
                  '٢. بالتعويض: pi_1 = 0.3 / 0.5 = 0.60 أي ٦٠٪.'
                ],
                teacherTipEn: 'Stationary distributions describe the ergodic long-run fraction of time spent in each state.',
                teacherTipAr: 'التوزيع المستقر يصف النسبة الإرجودية طويلة المدى للزمن المقضي في كل حالة.'
              }
            ]
          },
          interactiveWidget: {
            type: 'pascal_binomial',
            titleEn: 'Markov Chain State Transition Simulator',
            titleAr: 'محاكي انتقالات حالات سلسلة ماركوف التفاعلي',
            descriptionEn: 'Interactive state transition graph dynamically stepping through time and plotting convergence to the stationary distribution vector.',
            descriptionAr: 'مخطط انتقالات تفاعلي يحاكي التقدم الزمني ويرسم بيانياً سرعة التقارب نحو متجه التوزيع المستقر.'
          }
        }
      ],
      solvedExamples: egBacProbCh2SolvedExamples,
      exerciseProblems: egBacProbCh2Exercises,
      databank: egBacProbCh2Databank
    }
  ]
};
