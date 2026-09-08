import type { Branch } from '../types/curriculum';
import { egBacAnaCh1SolvedExamples, egBacAnaCh1Exercises } from './textbook/egbac/egBacAnaCh1Textbook';
import { egBacAnaCh1Databank } from './databanks/egbac/egBacAnaCh1Databank';
import { egBacAnaCh2SolvedExamples, egBacAnaCh2Exercises } from './textbook/egbac/egBacAnaCh2Textbook';
import { egBacAnaCh2Databank } from './databanks/egbac/egBacAnaCh2Databank';

export const egBacAnalysisBranch: Branch = {
  id: 'egbac_analysis',
  titleEn: 'Mathematical Analysis & Differential Calculus',
  titleAr: 'التحليل الرياضي والتفاضل المتقدم',
  categoryEn: 'Advanced Mathematics',
  categoryAr: 'الرياضيات المتقدمة',
  iconName: 'TrendingUp',
  colorGradient: 'from-teal-600 to-emerald-800',
  chapters: [
    {
      id: 'egbac_ana_ch1',
      chapterNumber: 1,
      titleEn: 'Topological Limits, Continuity & Extreme Value Analysis',
      titleAr: 'النهايات التبولوجية والاتصال ونظرية القيم القصوى',
      descriptionEn: 'Rigorous epsilon-delta definitions of limits, sandwich theorem, uniform continuity, Bolzano Intermediate Value Theorem, and asymptotic analysis.',
      descriptionAr: 'التعريف الدقيق للنهايات بإبسيلون ودلتا، نظرية الساندوتش (الحصر)، الاتصال المنتظم، نظرية بولزانو للقيم المتوسطة، ودراسة الخطوط المقاربة المائلة والأفقية.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'egbac_ana_l1',
          titleEn: 'Rigorous Limits ($\\epsilon$-$\\delta$), Uniform Continuity & Asymptotics',
          titleAr: 'التعريف الدقيق للنهايات ($\\epsilon$-$\\delta$) والاتصال المنتظم والخطوط المقاربة',
          summaryEn: 'Master the formal Cauchy-Weierstrass $(\\epsilon, \\delta)$ definition of limits, the Squeeze Theorem, Extreme Value Theorem on compact sets $[a, b]$, and slant asymptotes.',
          summaryAr: 'إتقان تعريف كوشي-فايرشتراس الصارم للنهايات، نظرية الحصر، نظرية القيم القصوى على الفترات المغلقة، وتعيين المستقيم المقارب المائل للمنحنيات.',
          theoryContentEn: `### 1. Formal $(\\epsilon, \\delta)$ Definition of Limits
Let $f: D \\to \\mathbb{R}$ and let $c$ be a limit point of $D$. We say that $\\lim_{x \\to c} f(x) = L$ if and only if:
$$\\forall \\epsilon > 0, \\; \\exists \\delta > 0 \\; \\text{such that} \\; 0 < |x - c| < \\delta \\implies |f(x) - L| < \\epsilon$$
- **Operational Strategy:** Find a relationship expressible as $\\delta = g(\\epsilon)$, typically bounding $|f(x) - L| \\le K |x - c|$ so that $\\delta = \\frac{\\epsilon}{K}$.

### 2. The Squeeze (Sandwich) Theorem:
If $g(x) \\le f(x) \\le h(x)$ for all $x$ in an open neighborhood containing $c$ (except possibly at $c$), and:
$$\\lim_{x \\to c} g(x) = \\lim_{x \\to c} h(x) = L \\implies \\lim_{x \\to c} f(x) = L$$
- **Benchmark Application:** $\\lim_{x \\to 0} x^2 \\sin(\\frac{1}{x}) = 0$, since $-x^2 \\le x^2 \\sin(\\frac{1}{x}) \\le x^2$.

### 3. Topological Continuity & Fundamental Theorems on $[a, b]$:
A function $f$ is continuous at $c$ if $\\lim_{x \\to c} f(x) = f(c)$.
- **Bolzano Intermediate Value Theorem (IVT):** If $f$ is continuous on $[a, b]$ and $f(a) \\cdot f(b) < 0$, then there exists at least one $c \\in (a, b)$ such that $f(c) = 0$ (guaranteed real root).
- **Weierstrass Extreme Value Theorem (EVT):** Any continuous function on a compact (closed and bounded) interval $[a, b]$ attains both an absolute maximum and an absolute minimum.

### 4. Slant (Oblique) Asymptotes:
A line $y = mx + c$ is an oblique asymptote of $f(x)$ as $x \\to \\infty$ if:
$$m = \\lim_{x \\to \\infty} \\frac{f(x)}{x} \\quad \\text{and} \\quad c = \\lim_{x \\to \\infty} [f(x) - mx]$$`,
          theoryContentAr: `### ١. التعريف الدقيق للنهايات بإبسيلون ودلتا $(\\epsilon, \\delta)$
نقول إن نهاية الدالة $\\lim_{x \\to c} f(x) = L$ إذا وفقط إذا كان:
لكل $\\epsilon > 0$، يوجد $\\delta > 0$ بحيث:
$$0 < |x - c| < \\delta \\implies |f(x) - L| < \\epsilon$$

### ٢. نظرية الحصر (الساندوتش):
إذا كانت $g(x) \\le f(x) \\le h(x)$ في جوار النقطة $c$، وكان:
$$\\lim_{x \\to c} g(x) = \\lim_{x \\to c} h(x) = L \\implies \\lim_{x \\to c} f(x) = L$$
- **مثال تطبيقي:** $\\lim_{x \\to 0} x^2 \\sin(\\frac{1}{x}) = 0$ لأن $-x^2 \\le x^2 \\sin(\\frac{1}{x}) \\le x^2$.

### ٣. النظريات الأساسية للاتصال على الفترات المغلقة $[a, b]$:
- **نظرية بولزانو للقيم المتوسطة:** إذا كانت $f$ متصلة على $[a, b]$ وكان $f(a) \\cdot f(b) < 0$، فإنه يوجد على الأقل $c \\in (a, b)$ بحيث $f(c) = 0$ (وجود جذر حقيقي مؤكد).
- **نظرية فايرشتراس للقيم القصوى:** أي دالة متصلة على فترة مغلقة ومحدودة $[a, b]$ تبلغ حتماً قيمة عظمى مطلقة وقيمة صغرى مطلقة.

### ٤. المستقيم المقارب المائل:
يكون المستقيم $y = mx + c$ مقارباً مائلاً لمنحنى الدالة عندما $x \\to \\infty$ إذا كان:
$$m = \\lim_{x \\to \\infty} \\frac{f(x)}{x} \\quad \\text{و} \\quad c = \\lim_{x \\to \\infty} [f(x) - mx]$$`,
          formulas: [
            { labelEn: 'Epsilon-Delta Definition', labelAr: 'تعريف إبسيلون ودلتا', latex: '0 < |x - c| < \\delta \\implies |f(x) - L| < \\epsilon' },
            { labelEn: 'Slant Asymptote Slope', labelAr: 'ميل المقارب المائل', latex: 'm = \\lim_{x \\to \\infty} \\frac{f(x)}{x}' },
            { labelEn: 'Slant Asymptote Intercept', labelAr: 'الجزء المقطوع للمقارب المائل', latex: 'c = \\lim_{x \\to \\infty} [f(x) - mx]' }
          ],
          moeRef: {
            bookTitleEn: 'Egyptian Baccalaureate Advanced Mathematics: Mathematical Analysis',
            bookTitleAr: 'البكالوريا المصرية: الرياضيات المتقدمة - التحليل الرياضي',
            grade: 'Grade 12 (Baccalaureate Level)',
            term: 'Term 1',
            officialCode: 'MOE-EGBAC-ANA-CH1-L1',
            pageRange: 'pp. 14-48'
          },
          lessonPlan: {
            titleEn: 'Rigorous Calculus: Epsilon-Delta Limits and Compact Space Theorems',
            titleAr: 'التفاضل والتكامل المتقدم: نهايات إبسيلون-دلتا ونظريات الفضاءات المتراصة',
            gradeLevel: 'Grade 12 Advanced Baccalaureate',
            durationMinutes: 90,
            moeCode: 'MOE-EGBAC-ANA-CH1-LP1',
            bloomsObjectivesEn: [
              'Construct rigorous epsilon-delta limit proofs for linear and quadratic functions.',
              'Apply the Squeeze Theorem to determine non-trivial oscillatory limits.',
              'Use Bolzano theorem to establish the existence of solutions for transcendental equations.'
            ],
            bloomsObjectivesAr: [
              'صياغة براهين إبسيلون-دلتا الدقيقة للنهايات الخطية والتربيعية.',
              'تطبيق نظرية الساندوتش لحساب النهايات التذبذبية المعقدة.',
              'استخدام نظرية بولزانو لإثبات وجود جذور للمعادلات المتسامية جبرياً.'
            ],
            prerequisitesEn: ['Intuitive limits', 'Inequalities and absolute values', 'Function continuity concepts'],
            prerequisitesAr: ['النهايات المباشرة', 'المتباينات وخواص القيمة المطلقة', 'مفهوم اتصال الدوال'],
            keyVocabularyEn: [
              { term: 'Epsilon Neighborhood', definition: 'The open interval (L - epsilon, L + epsilon) representing tolerance on output values.' },
              { term: 'Delta Neighborhood', definition: 'The deleted open interval (c - delta, c + delta) representing input domain proximity.' },
              { term: 'Compact Set', definition: 'A subset of real numbers that is both closed and bounded.' }
            ],
            keyVocabularyAr: [
              { term: 'جوار إبسيلون', definition: 'الفترة المفتوحة (ل - إبسيلون، ل + إبسيلون) التي تحدد مدى اقتراب قيم الدالة من النهاية.' },
              { term: 'جوار دلتا', definition: 'الفترة المفتوحة المحذوفة حول c التي تحدد نطاق اقتراب المتغير المستقل.' },
              { term: 'المجموعة المتراصة', definition: 'مجموعة جزئية من الأعداد الحقيقية مغلقة ومحدودة في آن واحد.' }
            ],
            teachingPacing: [
              { phaseEn: 'Formal Limit Architecture', phaseAr: 'هيكلة تعريف النهاية الصارم', duration: '25 min', activitiesEn: 'Visual demonstration of epsilon-delta box zoom on GeoGebra curve.', activitiesAr: 'عرض مرئي لتكبير مستطيل إبسيلون-دلتا حول نقطة النهاية على المنحنى.' },
              { phaseEn: 'Delta-Epsilon Proof Crafting', phaseAr: 'صياغة براهين دلتا وإبسيلون', duration: '30 min', activitiesEn: 'Work through proof for lim (3x - 5) = 4 as x -> 3 and lim (x^2 - 1) = 3 as x -> 2.', activitiesAr: 'حل برهان إبسيلون-دلتا تفصيلي لدالة خطية ودالة تربيعية على السبورة.' },
              { phaseEn: 'Bolzano & Asymptotic Analysis', phaseAr: 'نظريات بولزانو والخطوط المقاربة', duration: '20 min', activitiesEn: 'Locate roots using sign changes and compute slant asymptote equations.', activitiesAr: 'تحديد فترات الجذور بواسطة تغير الإشارة وحساب معادلة المقارب المائل.' },
              { phaseEn: 'Synthesis & Exit Ticket', phaseAr: 'التقويم الختامي', duration: '15 min', activitiesEn: 'Students find delta in terms of epsilon for a linear function.', activitiesAr: 'إيجاد قيمة دلتا بدلالة إبسيلون لدالة معطاة.' }
            ],
            commonMisconceptionsEn: [
              'Thinking delta depends on x rather than strictly on epsilon.',
              'Assuming that Bolzano theorem gives the exact value of the root rather than proving its existence.'
            ],
            commonMisconceptionsAr: [
              'الاعتقاد الخاطئ بأن دلتا تعتمد على المتغير س بدلاً من اعتمادها الحصري على إبسيلون والنقطة c.',
              'الظن بأن نظرية بولزانو تعطي القيمة الحسابية للجذر بدلاً من إثبات وجوده الفعلي.'
            ],
            differentiationEn: {
              struggling: 'Provide fixed numerical values for epsilon (e.g. epsilon = 0.01) before transitioning to algebraic epsilon.',
              advanced: 'Introduce Cauchy criterion for sequences and uniform continuity definitions.'
            },
            differentiationAr: {
              struggling: 'تطبيق أمثلة عددية محددة لإبسيلون (مثل ٠٫٠١) قبل الانتقال للرمز العام.',
              advanced: 'تقديم معيار كوشي للمتتاليات ومفهوم الاتصال المنتظم المتقدم.'
            },
            formativeAssessmentEn: 'Ask students to prove why lim x*sin(1/x) as x -> 0 is 0 using the squeeze inequality -|x| <= x*sin(1/x) <= |x|.',
            formativeAssessmentAr: 'سؤال شفهي لتطبيق نظرية الحصر على س جا(١/س) عند اقتراب س من الصفر.',
            exitTicketQuestion: {
              questionEn: 'Prove that lim (4x - 1) = 7 as x -> 2 by finding delta in terms of epsilon.',
              questionAr: 'أثبت أن نهاية (٤س - ١) = ٧ عندما س تقترب من ٢ بإيجاد دلتا بدلالة إبسيلون.',
              solutionEn: '|4x - 1 - 7| = |4x - 8| = 4|x - 2| < epsilon => |x - 2| < epsilon/4. Thus choose delta = epsilon / 4.',
              solutionAr: '|٤س - ٨| = ٤|س - ٢| < إبسيلون، إذن نختار دلتا = إبسيلون / ٤.'
            }
          },
          worksheet: {
            id: 'ws_egbac_ana_l1',
            titleEn: 'Worksheet: Epsilon-Delta Rigor & Topological Continuity',
            titleAr: 'ورقة عمل: صرامة إبسيلون-دلتا والاتصال التبولوجي',
            descriptionEn: 'Advanced analytical problems on formal limit proofs, Squeeze theorem, and slant asymptotes.',
            descriptionAr: 'مسائل تحليلية متقدمة في براهين النهايات، نظرية الحصر، وتحديد الخطوط المقاربة المائلة.',
            estimatedTimeMinutes: 45,
            problems: [
              {
                id: 'p10_1',
                titleEn: 'Standard Problem: Epsilon-Delta Tolerance for Linear Limit',
                titleAr: 'مسألة قياسية: تحديد قيمة دلتا في النهاية الخطية',
                difficulty: 'easy',
                questionEn: 'For the limit $\\lim_{x \\to 3} (5x - 2) = 13$, if the error tolerance $\\epsilon = 0.05$, find the maximum allowable value of $\\delta$ such that $0 < |x - 3| < \\delta \\implies |(5x - 2) - 13| < \\epsilon$.',
                questionAr: 'في النهاية $\\lim_{x \\to 3} (5x - 2) = 13$، إذا كان هامش الخطأ $\\epsilon = 0.05$، أوجد أقصى قيمة ممكنة لـ $\\delta$ بحيث $0 < |x - 3| < \\delta \\implies |(5x - 2) - 13| < \\epsilon$.',
                optionsEn: ['0.01', '0.05', '0.25', '0.02'],
                optionsAr: ['٠٫٠١', '٠٫٠٥', '٠٫٢٥', '٠٫٠٢'],
                correctAnswer: '0.01',
                correctIndex: 0,
                hintEn: 'Simplify |(5x - 2) - 13| = |5x - 15| = 5|x - 3| < epsilon, then solve for |x - 3|.',
                hintAr: 'بسّط المقدار |٥س - ١٥| = ٥|س - ٣| < إبسيلون، ثم احسب دلتا = إبسيلون / ٥.',
                stepByStepSolutionEn: [
                  'Start with the target inequality: $|(5x - 2) - 13| < \\epsilon$.',
                  'Simplify: $|5x - 15| < \\epsilon \\implies 5|x - 3| < \\epsilon$.',
                  'Divide both sides by 5:',
                  '$$|x - 3| < \\frac{\\epsilon}{5}$$',
                  'Since $\\epsilon = 0.05$, we obtain $\\delta = \\frac{0.05}{5} = 0.01$.'
                ],
                stepByStepSolutionAr: [
                  'المتباينة المستهدفة: $|(5x - 2) - 13| < \\epsilon$.',
                  'بالتبسيط: $|5x - 15| < \\epsilon \\implies 5|x - 3| < \\epsilon$.',
                  'بالقسمة على ٥ نجد أن:',
                  '$$|x - 3| < \\frac{\\epsilon}{5}$$',
                  'بما أن $\\epsilon = 0.05$، فإن $\\delta = \\frac{0.05}{5} = 0.01$.'
                ],
                teacherTipEn: 'Emphasize that for linear functions f(x) = mx + c, delta is always exactly epsilon / |m|!',
                teacherTipAr: 'وضح للطلاب أن دلتا للدوال الخطية أ س + ب تساوي دائماً إبسيلون مقسومة على |أ|!'
              },
              {
                id: 'p10_2',
                titleEn: 'Foundation Problem: Slant Asymptote of Rational Function',
                titleAr: 'مسألة تأسيسية: معادلة المستقيم المقارب المائل',
                difficulty: 'medium',
                questionEn: 'Find the equation of the slant (oblique) asymptote of the rational function $f(x) = \\frac{2x^2 + 5x - 1}{x + 1}$ as $x \\to \\infty$.',
                questionAr: 'أوجد معادلة المستقيم المقارب المائل لمنحنى الدالة الكسرية $f(x) = \\frac{2x^2 + 5x - 1}{x + 1}$ عندما $x \\to \\infty$.',
                optionsEn: ['y = 2x + 3', 'y = 2x - 3', 'y = 2x + 5', 'y = x + 3'],
                optionsAr: ['y = 2x + 3', 'y = 2x - 3', 'y = 2x + 5', 'y = x + 3'],
                correctAnswer: 'y = 2x + 3',
                correctIndex: 0,
                hintEn: 'Perform polynomial long division: divide (2x^2 + 5x - 1) by (x + 1). The quotient is the slant asymptote.',
                hintAr: 'قم بإجراء القسمة المطولة لكثيرات الحدود: اقسم البسط على المقام، ويكون ناتج القسمة هو معادلة المقارب المائل.',
                stepByStepSolutionEn: [
                  'Perform polynomial division of $(2x^2 + 5x - 1)$ by $(x + 1)$:',
                  '$$\\frac{2x^2 + 5x - 1}{x + 1} = 2x + \\frac{3x - 1}{x + 1} = 2x + 3 - \\frac{4}{x + 1}$$',
                  'As $x \\to \\infty$, the remainder term $\\frac{-4}{x + 1} \\to 0$.',
                  'Therefore, the slant asymptote is $y = 2x + 3$.'
                ],
                stepByStepSolutionAr: [
                  'بإجراء القسمة المطولة للبسط $(2x^2 + 5x - 1)$ على المقام $(x + 1)$:',
                  '$$f(x) = (2x + 3) - \\frac{4}{x + 1}$$',
                  'عندما $x \\to \\infty$ فإن الكسر المتبقي يؤول إلى الصفر.',
                  'إذن معادلة المستقيم المقارب المائل هي: $y = 2x + 3$.'
                ],
                teacherTipEn: 'A rational function P(x)/Q(x) has an oblique asymptote if and only if deg(P) = deg(Q) + 1.',
                teacherTipAr: 'الدالة الكسرية تمتلك مقارباً مائلاً إذا وفقط إذا كانت درجة البسط أكبر من درجة المقام بواحد بالضبط.'
              },
              {
                id: 'p10_3',
                titleEn: 'HOTS Problem: Bolzano Root Existence in Transcendental Equation',
                titleAr: 'مسألة مهارات عليا: إثبات وجود جذر حقيقي بنظرية بولزانو',
                difficulty: 'hots',
                questionEn: 'Using the Bolzano Intermediate Value Theorem, in which of the following intervals is the transcendental equation $x \\cdot 2^x - 1 = 0$ guaranteed to possess a real root?',
                questionAr: 'باستخدام نظرية بولزانو للقيم المتوسطة، في أي من الفترات التالية تضمن وجود جذر حقيقي للمعادلة المتسامية $x \\cdot 2^x - 1 = 0$؟',
                optionsEn: ['(0, 1)', '(1, 2)', '(2, 3)', '(-1, 0)'],
                optionsAr: ['(٠، ١)', '(١، ٢)', '(٢، ٣)', '(-١، ٠)'],
                correctAnswer: '(0, 1)',
                correctIndex: 0,
                hintEn: 'Define f(x) = x * 2^x - 1. Continuous everywhere. Evaluate f(0) and f(1) to check for a sign change.',
                hintAr: 'عرّف الدالة د(س) = س × ٢^س - ١، وهي متصلة. احسب د(٠) و د(١) وابحث عن تغير الإشارة.',
                stepByStepSolutionEn: [
                  'Define the continuous function $f(x) = x \\cdot 2^x - 1$ on $[0, 1]$.',
                  'Evaluate at endpoints:',
                  '$$f(0) = 0 \\cdot 2^0 - 1 = 0 - 1 = -1 < 0$$',
                  '$$f(1) = 1 \\cdot 2^1 - 1 = 2 - 1 = 1 > 0$$',
                  'Since $f(0) \\cdot f(1) = (-1)(1) = -1 < 0$, by Bolzano Theorem, there exists at least one $c \\in (0, 1)$ such that $f(c) = 0$.'
                ],
                stepByStepSolutionAr: [
                  'بفرض الدالة المتصلة $f(x) = x \\cdot 2^x - 1$ على الفترة $[0, 1]$:',
                  'حساب قيم الدالة عند طرفي الفترة:',
                  '$$f(0) = 0 - 1 = -1 < 0$$',
                  '$$f(1) = 1 \\cdot 2^1 - 1 = 1 > 0$$',
                  'بما أن $f(0) \\cdot f(1) < 0$ والدالة متصلة، إذن حسب نظرية بولزانو يوجد جذر حقيقي حتماً في الفترة المفتوحة $(0, 1)$.'
                ],
                teacherTipEn: 'Bolzano IVT is the theoretical foundation of the bisection numerical method used in computing algorithms!',
                teacherTipAr: 'نظرية بولزانو هي الأساس النظري لطريقة تنصيف الفترات العددية المستخدمة في خوارزميات الحاسوب لحساب الجذور!'
              }
            ]
          },
          interactiveWidget: {
            type: 'calculus_tangent',
            titleEn: 'Epsilon-Delta & Limit Visualizer',
            titleAr: 'مستكشف إبسيلون-دلتا وحصر النهايات التفاعلي',
            descriptionEn: 'Interactive coordinate plane demonstrating epsilon error bands, delta intervals, and dynamic tangent/secant approaches.',
            descriptionAr: 'تطبيق تفاعلي يوضح أشرطة خطأ إبسيلون وفترات دلتا وحصر الدوال المتذبذبة.'
          }
        }
      ],
      solvedExamples: egBacAnaCh1SolvedExamples,
      exerciseProblems: egBacAnaCh1Exercises,
      databank: egBacAnaCh1Databank
    },
    {
      id: 'egbac_ana_ch2',
      chapterNumber: 2,
      titleEn: 'Differential Calculus, Mean Value Theorems & Taylor Approximations',
      titleAr: 'حساب التفاضل ونظريات القيمة المتوسطة ومتسلسلات تايلور',
      descriptionEn: 'Rolle Theorem, Lagrange Mean Value Theorem, Cauchy Extended MVT, L-Hopital indeterminate evaluations, and Taylor-Maclaurin polynomial expansions with remainder bounds.',
      descriptionAr: 'نظرية رول، نظرية القيمة المتوسطة للاجرانج، نظرية كوشي الموسعة، حالات عدم التعيين وقاعدة لوبيتال، ومتسلسلات تايلور وماكلوران مع تقدير البواقي.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'egbac_ana_l2',
          titleEn: 'Rolle Theorem, Cauchy MVT & Taylor-Maclaurin Polynomial Expansions',
          titleAr: 'نظرية رول ونظرية كوشي للقيمة المتوسطة ومفكوك تايلور وماكلوران',
          summaryEn: 'Derive Rolle and Lagrange Mean Value Theorems, establish Cauchy MVT for indeterminate limits, and compute n-th order Taylor-Maclaurin polynomial approximations.',
          summaryAr: 'استنتاج نظريتي رول ولاجرانج للقيمة المتوسطة، تطبيق نظرية كوشي لبرهان قاعدة لوبيتال، وحساب مفكوك تايلور وماكلوران التقريبي من الرتبة n.',
          theoryContentEn: `### 1. Rolle Theorem & Geometric Significance
Let $f: [a, b] \\to \\mathbb{R}$ satisfy:
1. $f$ is continuous on the closed interval $[a, b]$.
2. $f$ is differentiable on the open interval $(a, b)$.
3. $f(a) = f(b)$.
Then there exists at least one $c \\in (a, b)$ such that $f'(c) = 0$ (the tangent line is horizontal).

### 2. Lagrange Mean Value Theorem (MVT):
If $f$ is continuous on $[a, b]$ and differentiable on $(a, b)$, then there exists at least one $c \\in (a, b)$ such that:
$$f'(c) = \\frac{f(b) - f(a)}{b - a}$$
- **Geometric Meaning:** The instantaneous rate of change (tangent slope) at $c$ equals the average rate of change (secant slope) over $[a, b]$.

### 3. Cauchy Extended Mean Value Theorem:
If functions $f$ and $g$ are continuous on $[a, b]$ and differentiable on $(a, b)$, with $g'(x) \\neq 0$ on $(a, b)$, then there exists $c \\in (a, b)$ such that:
$$\\frac{f'(c)}{g'(c)} = \\frac{f(b) - f(a)}{g(b) - g(a)}$$
- This serves as the rigorous foundation for **L'Hôpital's Rule** for indeterminate forms $\\left[\\frac{0}{0}\\right]$ and $\\left[\\frac{\\infty}{\\infty}\\right]$.

### 4. Taylor's Theorem & Maclaurin Expansions:
If $f$ has $(n+1)$ continuous derivatives on an interval containing $a$, then for any $x$:
$$f(x) = \\sum_{k=0}^n \\frac{f^{(k)}(a)}{k!} (x - a)^k + R_n(x)$$
where the Lagrange Remainder is $R_n(x) = \\frac{f^{(n+1)}(\\xi)}{(n+1)!} (x - a)^{n+1}$ for some $\\xi$ between $a$ and $x$.
- When $a = 0$, this is the **Maclaurin Series**:
  - $e^x = 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\cdots$
  - $\\sin x = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\cdots$
  - $\\cos x = 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\cdots$
  - $\\ln(1 + x) = x - \\frac{x^2}{2} + \\frac{x^3}{3} - \\cdots \\quad \\text{for } |x| < 1$`,
          theoryContentAr: `### ١. نظرية رول ومعناها الهندسي
إذا كانت الدالة $f: [a, b] \\to \\mathbb{R}$ تحقق الشروط الثلاثة:
١. $f$ متصلة على الفترة المغلقة $[a, b]$.
٢. $f$ قابلة للاشتقاق على الفترة المفتوحة $(a, b)$.
٣. $f(a) = f(b)$.
فإنه يوجد على الأقل $c \\in (a, b)$ بحيث $f'(c) = 0$ (يوجد مماس أفقي يوازي محور السينات).

### ٢. نظرية القيمة المتوسطة للاجرانج (MVT):
إذا كانت $f$ متصلة على $[a, b]$ وقابلة للاشتقاق على $(a, b)$، فإنه يوجد $c \\in (a, b)$ بحيث:
$$f'(c) = \\frac{f(b) - f(a)}{b - a}$$
- **المعنى الهندسي:** ميل المماس عند النقطة $c$ يساوي ميل القاطع الواصل بين طرفي المنحنى.

### ٣. نظرية كوشي الموسعة للقيمة المتوسطة:
إذا كانت الدالتان $f$ و $g$ متصلتين على $[a, b]$ وقابلتين للاشتقاق على $(a, b)$، مع $g'(x) \\neq 0$، فإنه يوجد $c \\in (a, b)$ بحيث:
$$\\frac{f'(c)}{g'(c)} = \\frac{f(b) - f(a)}{g(b) - g(a)}$$
- تمثل هذه النظرية البرهان الصارم لـ **قاعدة لوبيتال** في حالات عدم التعيين $\\frac{0}{0}$ و $\\frac{\\infty}{\\infty}$.

### ٤. نظرية تايلور ومفكوك ماكلوران:
إذا كانت الدالة تقبل الاشتقاق حتى الرتبة $(n+1)$، فإن مفكوكها حول النقطة $a$ هو:
$$f(x) = \\sum_{k=0}^n \\frac{f^{(k)}(a)}{k!} (x - a)^k + R_n(x)$$
- وعندما يكون مركز المفكوك $a = 0$ يسمى **مفكوك ماكلوران**:
  - $e^x = 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\dots$
  - $\\sin x = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\dots$
  - $\\cos x = 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\dots$`,
          formulas: [
            { labelEn: 'Lagrange MVT', labelAr: 'نظرية القيمة المتوسطة للاجرانج', latex: "f'(c) = \\frac{f(b) - f(a)}{b - a}" },
            { labelEn: 'Cauchy Extended MVT', labelAr: 'نظرية كوشي الموسعة', latex: "\\frac{f'(c)}{g'(c)} = \\frac{f(b) - f(a)}{g(b) - g(a)}" },
            { labelEn: 'Maclaurin Expansion General', labelAr: 'مفكوك ماكلوران العام', latex: 'f(x) = \\sum_{k=0}^n \\frac{f^{(k)}(0)}{k!} x^k + R_n(x)' }
          ],
          moeRef: {
            bookTitleEn: 'Egyptian Baccalaureate Advanced Mathematics: Mathematical Analysis',
            bookTitleAr: 'البكالوريا المصرية: الرياضيات المتقدمة - التحليل الرياضي',
            grade: 'Grade 12 (Baccalaureate Level)',
            term: 'Term 1',
            officialCode: 'MOE-EGBAC-ANA-CH2-L1',
            pageRange: 'pp. 49-85'
          },
          lessonPlan: {
            titleEn: 'Mean Value Theorems and Polynomial Approximations via Taylor Series',
            titleAr: 'نظريات القيمة المتوسطة والتقريب بكثيرات حدود تايلور',
            gradeLevel: 'Grade 12 Advanced Baccalaureate',
            durationMinutes: 90,
            moeCode: 'MOE-EGBAC-ANA-CH2-LP1',
            bloomsObjectivesEn: [
              'Verify Rolle theorem conditions and compute critical points c where tangent is horizontal.',
              'Apply Lagrange MVT to bound function growth and prove analytical inequalities.',
              'Construct Taylor and Maclaurin polynomials to approximate transcendental functions with error bounds.'
            ],
            bloomsObjectivesAr: [
              'التحقق من شروط نظرية رول وحساب قيم c التي ينعدم عندها المشتق.',
              'تطبيق نظرية لاجرانج لحصر تزايد الدوال وإثبات المتباينات التحليلية.',
              'بناء كثيرات حدود تايلور وماكلوران لتقريب الدوال المتسامية مع تقدير حد الخطأ.'
            ],
            prerequisitesEn: ['Higher order derivatives', 'Limits of indeterminate forms', 'Continuity on compact sets'],
            prerequisitesAr: ['المشتقات العليا', 'نهايات حالات عدم التعيين', 'الاتصال على الفترات المغلقة'],
            keyVocabularyEn: [
              { term: 'Secant Slope', definition: 'Average rate of change between endpoints [f(b) - f(a)] / (b - a).' },
              { term: 'Taylor Polynomial', definition: 'A polynomial approximating a differentiable function near a designated center point a.' },
              { term: 'Lagrange Remainder', definition: 'Formula quantifying the truncation error of a Taylor polynomial.' }
            ],
            keyVocabularyAr: [
              { term: 'ميل القاطع', definition: 'معدل التغير المتوسط بين طرفي الفترة [د(ب) - د(أ)] / (ب - أ).' },
              { term: 'كثير حدود تايلور', definition: 'كثير حدود تقريبي لدالة قابلة للاشتقاق حول نقطة مركزية أ.' },
              { term: 'باقي لاجرانج', definition: 'صيغة كمية لتقدير قيمة الخطأ الناتج عن تقريب الدالة بمتسلسلة تايلور.' }
            ],
            teachingPacing: [
              { phaseEn: 'Rolle to Lagrange Transition', phaseAr: 'الانتقال من رول إلى لاجرانج', duration: '25 min', activitiesEn: 'Geometric visualization of rotating secant chord to parallel tangent.', activitiesAr: 'توضيح هندسي لدوران وتر القاطع حتى يوازي مماس المنحنى.' },
              { phaseEn: 'Cauchy MVT & L-Hopital Rigor', phaseAr: 'نظرية كوشي وقاعدة لوبيتال', duration: '25 min', activitiesEn: 'Derive L-Hopital rule from Cauchy ratio f(c)/g(c).', activitiesAr: 'برهان قاعدة لوبيتال كحالة خاصة من نظرية كوشي الموسعة.' },
              { phaseEn: 'Taylor Polynomial Construction', phaseAr: 'بناء كثيرات حدود تايلور', duration: '25 min', activitiesEn: 'Calculate Maclaurin expansion of sin(x) and e^x up to degree 4.', activitiesAr: 'حساب مفكوك ماكلوران لدالتي الجيب والدالة الأسية حتى الرتبة الرابعة.' },
              { phaseEn: 'Exit Ticket', phaseAr: 'تذكرة الخروج', duration: '15 min', activitiesEn: 'Evaluate MVT point c for f(x) = x^2 on [1, 3].', activitiesAr: 'حساب قيمة c لنظرية القيمة المتوسطة للدالة س^٢ على الفترة [١، ٣].' }
            ],
            commonMisconceptionsEn: [
              'Assuming that MVT point c can equal the endpoints a or b (it must strictly belong to the open interval (a, b)).',
              'Forgetting the factorial k! in the denominator of Taylor coefficients.'
            ],
            commonMisconceptionsAr: [
              'الاعتقاد بأن قيمة c يمكن أن تكون أحد طرفي الفترة أ أو ب (يجب أن تنتمي للفترة المفتوحة حصراً).',
              'نسيان المضروب k! في مقام حدود متسلسلة تايلور.'
            ],
            differentiationEn: {
              struggling: 'Focus on quadratic polynomials first where MVT point c is simply the midpoint (a+b)/2.',
              advanced: 'Prove the convergence of Taylor series using the squeeze theorem on the remainder term.'
            },
            differentiationAr: {
              struggling: 'التركيز أولاً على كثيرات الحدود من الدرجة الثانية حيث قيمة c هي دائماً منتصف الفترة (أ+ب)/٢.',
              advanced: 'إثبات تقارب متسلسلة تايلور رياضياً بحصر باقي لاجرانج عند اللانهاية.'
            },
            formativeAssessmentEn: 'Ask students why f(x) = |x| on [-1, 1] fails Rolle theorem despite f(-1) = f(1) = 1.',
            formativeAssessmentAr: 'سؤال شفهي: لماذا لا تحقق د(س) = |س| على [-١، ١] نظرية رول رغم أن د(-١) = د(١)؟ (لأنها غير قابلة للاشتقاق عند س = ٠).',
            exitTicketQuestion: {
              questionEn: 'Find the value of c guaranteed by the Mean Value Theorem for f(x) = x^3 on [0, 2].',
              questionAr: 'أوجد قيمة c التي تضمنها نظرية القيمة المتوسطة للدالة د(س) = س^٣ على الفترة [٠، ٢].',
              solutionEn: "f'(c) = 3c^2 = (8 - 0)/(2 - 0) = 4 => c^2 = 4/3 => c = 2 / sqrt(3) in (0, 2).",
              solutionAr: '٣ c^٢ = ٤، إذن c = ٢ / جذر(٣) وهي تنتمي للفترة (٠، ٢).'
            }
          },
          worksheet: {
            id: 'ws_egbac_ana_l2',
            titleEn: 'Worksheet: Rolle Theorem, MVT & Taylor Polynomials',
            titleAr: 'ورقة عمل: نظريات رول ولاجرانج وكثيرات حدود تايلور',
            descriptionEn: 'Challenging questions on critical MVT points, Rolle theorem validation, and Taylor series coefficients.',
            descriptionAr: 'مسائل مهارية على إيجاد قيم c في نظريات القيمة المتوسطة، معاملات تايلور وماكلوران، وحدود الخطأ.',
            estimatedTimeMinutes: 45,
            problems: [
              {
                id: 'p11_1',
                titleEn: 'Standard Problem: Finding MVT Value for Quadratic Function',
                titleAr: 'مسألة قياسية: حساب قيمة c لنظرية القيمة المتوسطة للدالة التربيعية',
                difficulty: 'easy',
                questionEn: 'For the function $f(x) = x^2 - 4x + 7$ on the interval $[1, 5]$, find the value of $c \\in (1, 5)$ guaranteed by Lagrange Mean Value Theorem.',
                questionAr: 'للدالة $f(x) = x^2 - 4x + 7$ على الفترة $[1, 5]$، احسب قيمة $c \\in (1, 5)$ التي تضمنها نظرية لاجرانج للقيمة المتوسطة.',
                optionsEn: ['3', '2.5', '3.5', '2'],
                optionsAr: ['٣', '٢٫٥', '٣٫٥', '٢'],
                correctAnswer: '3',
                correctIndex: 0,
                hintEn: "Compute f'(x) = 2x - 4, then set it equal to [f(5) - f(1)] / (5 - 1).",
                hintAr: 'احسب المشتقة الأولى ٢س - ٤، وساوها بميل القاطع [د(٥) - د(١)] / (٥ - ١).',
                stepByStepSolutionEn: [
                  'Compute endpoint values:',
                  '$$f(5) = 5^2 - 4(5) + 7 = 25 - 20 + 7 = 12$$',
                  '$$f(1) = 1^2 - 4(1) + 7 = 1 - 4 + 7 = 4$$',
                  'Calculate average secant slope:',
                  '$$\\frac{f(5) - f(1)}{5 - 1} = \\frac{12 - 4}{4} = \\frac{8}{4} = 2$$',
                  'Find derivative: $f^\\prime(x) = 2x - 4$.',
                  "Set $f'(c) = 2 \\implies 2c - 4 = 2 \\implies 2c = 6 \\implies c = 3 \\in (1, 5)$."
                ],
                stepByStepSolutionAr: [
                  'حساب قيم الدالة عند طرفي الفترة:',
                  '$$f(5) = 25 - 20 + 7 = 12$$',
                  '$$f(1) = 1 - 4 + 7 = 4$$',
                  'حساب ميل القاطع المتوسط:',
                  '$$\\frac{f(5) - f(1)}{5 - 1} = \\frac{12 - 4}{4} = 2$$',
                  'المشتقة: $f^\\prime(x) = 2x - 4$.',
                  'بمساواة المشتقة بميل القاطع: $2c - 4 = 2 \\implies c = 3 \\in (1, 5)$.'
                ],
                teacherTipEn: 'For any quadratic function on [a, b], the MVT point c is always exactly the arithmetic mean (a + b) / 2 = (1 + 5)/2 = 3!',
                teacherTipAr: 'قاعدة ذهبية: لأي دالة تربيعية على الفترة [أ، ب]، تكون قيمة c دائماً هي نقطة المنتصف بالضبط (أ + ب) / ٢ = ٣!'
              },
              {
                id: 'p11_2',
                titleEn: 'Foundation Problem: Third-Degree Maclaurin Polynomial of e^(2x)',
                titleAr: 'مسألة تأسيسية: مفكوك ماكلوران للدالة الأسية المركبة',
                difficulty: 'medium',
                questionEn: 'Find the coefficient of $x^3$ in the Maclaurin polynomial expansion of $f(x) = e^{2x}$.',
                questionAr: 'أوجد معامل $x^3$ في مفكوك ماكلوران للدالة الأسية $f(x) = e^{2x}$.',
                optionsEn: ['4/3', '8/3', '2/3', '4'],
                optionsAr: ['٤/٣', '٨/٣', '٢/٣', '٤'],
                correctAnswer: '4/3',
                correctIndex: 0,
                hintEn: 'Recall e^u = 1 + u + u^2/2! + u^3/3! + ... Substitute u = 2x.',
                hintAr: 'تذكر أن هـ^ع = ١ + ع + ع^٢/٢! + ع^٣/٦ + ... ثم ضع ع = ٢س.',
                stepByStepSolutionEn: [
                  'Use standard Maclaurin series for exponential function:',
                  '$$e^u = 1 + u + \\frac{u^2}{2!} + \\frac{u^3}{3!} + \\cdots$$',
                  'Substitute $u = 2x$:',
                  '$$\\frac{(2x)^3}{3!} = \\frac{8x^3}{6} = \\frac{4}{3} x^3$$',
                  'Therefore, the coefficient of $x^3$ is $\\frac{4}{3}$.'
                ],
                stepByStepSolutionAr: [
                  'مفكوك ماكلوران للدالة الأسية القياسية:',
                  '$$e^u = 1 + u + \\frac{u^2}{2!} + \\frac{u^3}{3!} + \\dots$$',
                  'بالتعويض عن $u = 2x$ في الحد التكعيبي:',
                  '$$\\frac{(2x)^3}{3!} = \\frac{8x^3}{6} = \\frac{4}{3} x^3$$',
                  'إذن معامل $x^3$ هو $\\frac{4}{3}$.'
                ],
                teacherTipEn: 'Using variable substitution in standard Maclaurin series is much faster than computing successive derivatives!',
                teacherTipAr: 'التعويض بالمتغير المساعد في المتسلسلات الأساسية أسرع بكثير من حساب المشتقات المتتالية يدوياً!'
              },
              {
                id: 'p11_3',
                titleEn: 'HOTS Problem: Cauchy MVT Ratio for Trig Functions',
                titleAr: 'مسألة مهارات عليا: نسبة كوشي للقيمة المتوسطة لدوال مثلثية',
                difficulty: 'hots',
                questionEn: 'Apply the Cauchy Mean Value Theorem to $f(x) = \\sin x$ and $g(x) = \\cos x$ on the interval $[0, \\frac{\\pi}{2}]$. Find the value of $c \\in (0, \\frac{\\pi}{2})$.',
                questionAr: 'طبق نظرية كوشي للقيمة المتوسطة على الدالتين $f(x) = \\sin x$ و $g(x) = \\cos x$ على الفترة $[0, \\frac{\\pi}{2}]$. أوجد قيمة $c \\in (0, \\frac{\\pi}{2})$.',
                optionsEn: ['\\pi / 4', '\\pi / 6', '\\pi / 3', '\\pi / 8'],
                optionsAr: ['\\pi / 4', '\\pi / 6', '\\pi / 3', '\\pi / 8'],
                correctAnswer: '\\pi / 4',
                correctIndex: 0,
                hintEn: "Compute [f(pi/2) - f(0)] / [g(pi/2) - g(0)], then equate to f'(c)/g'(c) = cos(c)/(-sin(c)) = -cot(c).",
                hintAr: 'احسب نسبة فروق القيمتين [جا(ط/٢) - جا(٠)] / [جتا(ط/٢) - جتا(٠)] وساوها بـ مشتقة جا / مشتقة جتا = -ظتا(c).',
                stepByStepSolutionEn: [
                  'Evaluate values at endpoints $a = 0$ and $b = \\frac{\\pi}{2}$:',
                  '$$f(b) - f(a) = \\sin(\\frac{\\pi}{2}) - \\sin(0) = 1 - 0 = 1$$',
                  '$$g(b) - g(a) = \\cos(\\frac{\\pi}{2}) - \\cos(0) = 0 - 1 = -1$$',
                  'Cauchy ratio of differences: $\\frac{1}{-1} = -1$.',
                  'Evaluate ratio of derivatives:',
                  "$\\frac{f'(c)}{g'(c)} = \\frac{\\cos c}{-\\sin c} = -\\cot c$",
                  'Set equal: $-\\cot c = -1 \\implies \\cot c = 1 \\implies \\tan c = 1$.',
                  'Since $c \\in (0, \\frac{\\pi}{2})$, the unique solution is $c = \\frac{\\pi}{4}$.'
                ],
                stepByStepSolutionAr: [
                  'حساب الفروق عند طرفي الفترة:',
                  '$$f(\\pi/2) - f(0) = 1 - 0 = 1$$',
                  '$$g(\\pi/2) - g(0) = 0 - 1 = -1$$',
                  'نسبة كوشي: $\\frac{1}{-1} = -1$.',
                  'نسبة المشتقتين:',
                  "$\\frac{f'(c)}{g'(c)} = \\frac{\\cos c}{-\\sin c} = -\\cot c$",
                  'بالمساواة: $-\\cot c = -1 \\implies \\tan c = 1$.',
                  'بما أن $c \\in (0, \\pi/2)$، إذن $c = \\frac{\\pi}{4}$.'
                ],
                teacherTipEn: 'Notice how Cauchy MVT generalizes Lagrange MVT by parametrizing both x and y as functions of t!',
                teacherTipAr: 'لاحظ كيف تعمم نظرية كوشي نظرية لاجرانج بالتعامل مع المنحنى كمعادلات بارامترية لكلا المتغيرين!'
              }
            ]
          },
          interactiveWidget: {
            type: 'calculus_tangent',
            titleEn: 'Taylor Series Polynomial Convergence Lab',
            titleAr: 'مختبر تقارب متسلسلات وكثيرات حدود تايلور التفاعلي',
            descriptionEn: 'Interactive graph comparing target transcendental functions (sin x, e^x, cos x) with their n-th degree Taylor polynomials.',
            descriptionAr: 'رسم بياني تفاعلي يقارن بين الدوال المتسامية وتقريبات تايلور المتعاقبة من الرتبة الأولى حتى العاشرة.'
          }
        }
      ],
      solvedExamples: egBacAnaCh2SolvedExamples,
      exerciseProblems: egBacAnaCh2Exercises,
      databank: egBacAnaCh2Databank
    }
  ]
};
