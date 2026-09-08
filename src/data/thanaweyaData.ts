import type { Curriculum } from '../types/curriculum';

export const thanaweyaCurriculum: Curriculum = {
  id: 'thanaweya',
  nameEn: 'Egyptian General Secondary (Thanaweya Amma)',
  nameAr: 'الرياضيات للثانوية العامة المصرية',
  subtitleEn: 'Grade 12 Standardized Ministry of Education Mathematics (Pure & Applied)',
  subtitleAr: 'الصف الثالث الثانوي - الصفوف الإتمامية بوزارة التربية والتعليم والتعليم الفني',
  moeOfficialBaselineEn: 'Egyptian MoE General Secondary Education Specifications 2025/2026',
  moeOfficialBaselineAr: 'مواصفات المناهج الرسمية الصادرة عن وزارة التربية والتعليم المصرية 2025/2026',
  branches: [
    {
      id: 'algebra_solid',
      titleEn: 'Algebra & Solid Geometry',
      titleAr: 'الجبر والهندسة الفراغية',
      categoryEn: 'Pure Mathematics',
      categoryAr: 'الرياضيات البحتة',
      iconName: 'Box',
      colorGradient: 'from-indigo-600 to-violet-800',
      chapters: [
        {
          id: 'alg_ch1',
          chapterNumber: 1,
          titleEn: 'Permutations, Combinations & Binomial Theorem',
          titleAr: 'التباديل والتوافيق ونظرية ذات الحدين',
          descriptionEn: 'Fundamental Counting Principle, Factorials $n!$, Permutations $P(n,r)$, Combinations $C(n,r)$, Binomial Expansion $(a+b)^n$, General Term $T_{r+1}$, and Middle Term properties.',
          descriptionAr: 'مبدأ العد الأساسي، المضروب $n!$، التباديل $P(n,r)$، التوافيق $\\binom{n}{r}$، مفكوك ذات الحدين $(a+b)^n$، الحد العام $T_{r+1}$، والحدود الأوسط والمتوسطة.',
          isFullyEquipped: true,
          lessons: [
            {
              id: 'alg_l1',
              titleEn: 'Fundamental Counting Principle, Permutations & Combinations',
              titleAr: 'مبدأ العد الأساسي والتباديل والتوافيق',
              summaryEn: 'Understand addition and multiplication rules of counting, permutations with and without repetition, circular permutations, and combinations properties.',
              summaryAr: 'فهم قاعدتي الجمع والضرب في العد، التباديل بتكرار وبدون تكرار، التباديل الدائرية، وقوانين التوافيق والتبسيط.',
              theoryContentEn: `### 1. Fundamental Counting Principle
If an action can be performed in $m$ different ways and a second independent action can be performed in $n$ ways:
- **Multiplication Rule (AND):** Both actions performed together in $m \\times n$ ways.
- **Addition Rule (OR):** Either the first OR second action performed in $m + n$ ways.

### 2. The Four Fundamental Arrangements (Combinatorial Sampling):
1. **With Order and With Replacement:** $n^r$ (e.g. telephone numbers, PIN codes).
2. **With Order and Without Replacement (Permutations):** $P(n, r) = \\frac{n!}{(n - r)!}$.
3. **Without Order and Without Replacement (Combinations):** $C(n, r) = \\binom{n}{r} = \\frac{n!}{r!(n - r)!}$.
4. **Without Order and With Replacement:** $\\binom{n + r - 1}{r}$ (e.g. distributing $r$ identical objects into $n$ distinct bins).

### 3. Permutations in a Row vs in a Circle:
- Arranging $n$ distinct elements in a **straight line (row):** $n!$ ways.
- Arranging $n$ distinct elements in a **circle:** $(n - 1)!$ ways.
- Arranging $n$ elements in a **bracelet / necklace** (where front and back are indistinguishable): $\\frac{(n - 1)!}{2}$.

### 4. Golden Combinations Identities:
- **Symmetry Identity:** $\\binom{n}{r} = \\binom{n}{n - r}$
- **Equality Condition:** If $\\binom{n}{x} = \\binom{n}{y}$, then either $x = y$ or $x + y = n$.
- **Pascal Addition Law:** $\\binom{n}{r} + \\binom{n}{r - 1} = \\binom{n + 1}{r}$
- **Ratio Law of Consecutive Combinations:** $\\frac{\\binom{n}{r}}{\\binom{n}{r - 1}} = \\frac{n - r + 1}{r}$

### 5. Geometric Combinatorics Corollaries:
- Number of straight lines determined by $n$ non-collinear points: $\\binom{n}{2}$.
- Number of diagonals of a convex polygon with $n$ vertices: $D = \\binom{n}{2} - n = \\frac{n(n - 3)}{2}$.
- Number of triangles determined by $n$ points: $\\binom{n}{3}$.`,
              theoryContentAr: `### ١. مبدأ العد الأساسي (Fundamental Counting Principle)
إذا كان لدينا عملية تتم بـ $m$ طريقة مختلفة، وعملية أخرى مستقلة تتم بـ $n$ طريقة:
- **قاعدة الضرب (معاً / و):** إجراء العمليتين معاً يتم بـ $m \\times n$ طريقة.
- **قاعدة الجمع (أو):** إجراء إحدى العمليتين يتم بـ $m + n$ طريقة.

### ٢. صور الترتيب والاختيار الأربعة المعتمدة:
١. **مع الترتيب ومع الإحلال (التكرار):** $n^r$ (مثل تكوين الأرقام السرية ولوحات السيارات).
٢. **مع الترتيب وبدون إحلال (التباديل):** $P(n, r) = \\frac{n!}{(n - r)!}$.
٣. **بدون ترتيب وبدون إحلال (التوافيق):** $\\binom{n}{r} = \\frac{n!}{r!(n - r)!}$.
٤. **بدون ترتيب ومع الإحلال:** $\\binom{n + r - 1}{r}$ (مثل توزيع $r$ من الكرات المتطابقة على $n$ من الصناديق المختلفة).

### ٣. التباديل في صف وفي دائرة:
- ترتيب $n$ من العناصر المختلفة في **صف مستقيم:** $n!$ طريقة.
- ترتيب $n$ من العناصر المختلفة في **دائرة:** $(n - 1)!$ طريقة.
- ترتيب $n$ من العناصر في **سوار أو حلقة مسبحة** (وجه وظهر متطابقان): $\\frac{(n - 1)!}{2}$.

### ٤. قوانين التوافيق الذهبية في كتاب الوزارة:
- **قانون التبسيط:** $\\binom{n}{r} = \\binom{n}{n - r}$
- **قانون التساوي:** إذا كان $\\binom{n}{x} = \\binom{n}{y}$ فإن: $x = y$ أو $x + y = n$.
- **قانون الجمع (مثلث باسكال):** $\\binom{n}{r} + \\binom{n}{r - 1} = \\binom{n + 1}{r}$
- **قانون النسبة بين توفيقتين متتاليتين:** $\\frac{\\binom{n}{r}}{\\binom{n}{r - 1}} = \\frac{n - r + 1}{r}$

### ٥. نتائج هندسية هامة للتوافيق:
- عدد المستقيمات المارة بـ $n$ من النقط لا تقع ثلاثة منها على استقامة واحدة: $\\binom{n}{2}$.
- عدد أقطار مضلع محدب عدد أضلاعه $n$: $D = \\binom{n}{2} - n = \\frac{n(n - 3)}{2}$.
- عدد المثلثات الناتجة من توصيل رؤوس مضلع عدد أضلاعه $n$: $\\binom{n}{3}$.`,
              formulas: [
                { labelEn: 'Permutations Formula', labelAr: 'قانون التباديل', latex: 'P(n,r) = \\frac{n!}{(n-r)!}' },
                { labelEn: 'Combinations Formula', labelAr: 'قانون التوافيق', latex: '\\binom{n}{r} = \\frac{n!}{r!(n-r)!}' },
                { labelEn: 'Combinations Ratio Law', labelAr: 'قانون النسبة في التوافيق', latex: '\\frac{\\binom{n}{r}}{\\binom{n}{r-1}} = \\frac{n-r+1}{r}' },
                { labelEn: 'Pascal Addition Law', labelAr: 'قانون الجمع في التوافيق', latex: '\\binom{n}{r} + \\binom{n}{r-1} = \\binom{n+1}{r}' }
              ],
              moeRef: {
                bookTitleEn: 'Ministry pure Mathematics Textbook Grade 12',
                bookTitleAr: 'كتاب الرياضيات البحتة للصف الثالث الثانوي - وزارة التربية والتعليم',
                grade: 'Grade 12 (الثانوية العامة)',
                term: 'Full Year / الفصلين',
                officialCode: 'MOE-SEC3-ALG-CH1-L1',
                pageRange: 'pp. 4 - 18'
              },
              lessonPlan: {
                titleEn: 'Lesson 1 Plan: Counting Principles & Combinatorics',
                titleAr: 'خطة الدرس الأول: مبادئ العد والتباديل والتوافيق',
                gradeLevel: 'Grade 12 Secondary (الثانوية العامة)',
                durationMinutes: 90,
                moeCode: 'MOE-SEC3-ALG-CH1-L1',
                bloomsObjectivesEn: [
                  'Distinguish clearly between situations requiring Order (Permutations) vs No Order (Combinations).',
                  'Apply the Ratio Law and Addition Law to solve algebraic equations involving P(n,r) and C(n,r).',
                  'Analyze real-world problem scenarios (committee selection, passcode generation, polygon diagonals).'
                ],
                bloomsObjectivesAr: [
                  'التمييز التام بين المواقف التي تتطلب الترتيب (التباديل) والمواقف التبادلية بدون ترتيب (التوافيق).',
                  'تطبيق قانون النسبة وقانون الجمع في حل المعادلات الجبرية المحتوية على تباديل وتوافيق.',
                  'تحليل المشكلات الحياتية (تشكيل اللجان، أرقام السيرك، أقطار المضلعات).'
                ],
                prerequisitesEn: ['Factorial definition n!', 'Solving quadratic and linear equations', 'Basic set theory'],
                prerequisitesAr: ['تعريف المضروب n!', 'حل المعادلات الخطية والتربيعية', 'أساسيات المجموعات'],
                keyVocabularyEn: [
                  { term: 'Permutation', definition: 'Arrangement of objects where order matters.' },
                  { term: 'Combination', definition: 'Selection of objects where order does not matter.' },
                  { term: 'Factorial', definition: 'Product of integers from 1 to n denoted by n!.' }
                ],
                keyVocabularyAr: [
                  { term: 'التبديلة (Permutation)', definition: 'ترتيب عناصر مجموعة مع الاهتمام بالترتيب.' },
                  { term: 'التوفيقة (Combination)', definition: 'اختيار مجموعة جزئية دون الاهتمام بترتيب العناصر.' },
                  { term: 'المضروب (Factorial)', definition: 'حاصل ضرب الأعداد الصحيحة الموجبة من 1 إلى ن ويرمز له بـ ن!.' }
                ],
                teachingPacing: [
                  {
                    phaseEn: 'Warm-up & Hook (10 mins)',
                    phaseAr: 'التهيئة والتمهيد (١٠ دقائق)',
                    duration: '10 mins',
                    activitiesEn: 'Present 2 simple real-life challenges: Creating a 4-digit PIN code vs selecting 3 students for a committee. Ask students why PIN digits order matters whereas committee members do not.',
                    activitiesAr: 'طرح مشكلتين واقعيتين: تكوين رمز سرى مكون من ٤ أرقام مقابل اختيار 3 طلاب لتشكيل لجنة. مناقشة الطلاب في أهمية الترتيب في الرمز السري وعدم أهميته في اللجنة.'
                  },
                  {
                    phaseEn: 'Direct Instruction & Proofs (30 mins)',
                    phaseAr: 'الشرح المباشر والبراهين (٣٠ دقيقة)',
                    duration: '30 mins',
                    activitiesEn: 'Derive P(n,r) from Multiplication Principle. Introduce C(n,r) as P(n,r)/r!. Prove the Symmetry Law C(n,r) = C(n,n-r) and the Ratio Law C(n,r)/C(n,r-1) = (n-r+1)/r on whiteboard.',
                    activitiesAr: 'استنتاج قانون التباديل من مبدأ الضرب. تقديم التوافيق كـ ل(ن،ر) / ر!. إثبات قانون التبسيط وقانون النسبة على السبورة التفاعلية.'
                  },
                  {
                    phaseEn: 'Guided Practice & Exam-Level Problems (30 mins)',
                    phaseAr: 'التدريب الموجه وأسئلة الامتحانات (٣٠ دقيقة)',
                    duration: '30 mins',
                    activitiesEn: 'Solve official Egyptian Thanaweya Amma past exam questions step-by-step. Focus on equations with ratios C(n,r):C(n,r+1).',
                    activitiesAr: 'حل أسئلة امتحانات الثانوية العامة السابقة خطوة بخطوة. التركيز على معادلات النسبة بين توافيق متتالية.'
                  },
                  {
                    phaseEn: 'Closure & Exit Ticket (20 mins)',
                    phaseAr: 'الخاتمة وتقويم الدرس (٢٠ دقيقة)',
                    duration: '20 mins',
                    activitiesEn: 'Distribute Exit Ticket problem. Review common student pitfalls.',
                    activitiesAr: 'توزيع تذكرة الخروج ومراجعة الأخطاء المفاهيمية الشائعة.'
                  }
                ],
                commonMisconceptionsEn: [
                  'Confusing C(n,r) with P(n,r) in committee problems with specific roles (e.g., President and Vice-President requires Permutation, whereas general members require Combination).',
                  'Assuming C(n, r) can have negative n or r, or non-integer values.',
                  'Incorrectly applying the ratio law when terms are not consecutive.'
                ],
                commonMisconceptionsAr: [
                  'الخلط بين التباديل والتوافيق في اختيار اللجان ذات المسميات (اختيار رئيس ونائب يتطلب تباديل، بينما اختيار 2 أعضاء فقط يتطلب توافيق).',
                  'اعتقاد أن ن أو ر في ق(ن، ر) يمكن أن تكون أعداداً سالبة أو كسرية.',
                  'تطبيق قانون النسبة دون التأكد من أن التوافيق متتالية بنفس العلم (ن).'
                ],
                differentiationEn: {
                  struggling: 'Provide a flow-chart decision tree: "Does Order Matter? -> Yes (P) / No (C)" and quick calculator shortcut sheet (nPr and nCr keys).',
                  advanced: 'Challenge students to prove the algebraic sum identity: sum_{r=0}^{n} C(n,r) = 2^n using counting argument.'
                },
                differentiationAr: {
                  struggling: 'تزويد الطلاب بمخطط تدفق ذهني: "هل الترتيب مهم؟ -> نعم (تباديل) / لا (توافيق)" مع ورقة إرشادات استخدام الآلة الحاسبة (زر nPr وزر nCr).',
                  advanced: 'تحدي الطلاب المتميزين لإثبات مجموع التوافيق sum_{r=0}^{n} C(n,r) = 2^n باستخدام تفسير مبدأ العد.'
                },
                formativeAssessmentEn: 'Solve on board: If C(n, 8) = C(n, 6), find the value of n and then calculate P(n, 2).',
                formativeAssessmentAr: 'حل على السبورة: إذا كان ق(ن، ٨) = ق(ن، ٦)، فاحسب قيمة ن، ثم أوجد ل(ن، ٢).',
                exitTicketQuestion: {
                  questionEn: 'If $\\binom{n}{r} : \\binom{n}{r+1} = 4 : 7$ and $\\binom{n}{r+1} : \\binom{n}{r+2} = 5 : 6$, find the values of $n$ and $r$.',
                  questionAr: 'إذا كان $\\binom{n}{r} : \\binom{n}{r+1} = 4 : 7$ وكان $\\binom{n}{r+1} : \\binom{n}{r+2} = 5 : 6$، فأوجد قيمة كل من $n$ و $r$.',
                  solutionEn: 'Using the inverted Ratio Law: $\\frac{\\binom{n}{r+1}}{\\binom{n}{r}} = \\frac{n-r}{r+1} = \\frac{7}{4} \\implies 4n - 11r = 7$. From second ratio: $\\frac{\\binom{n}{r+2}}{\\binom{n}{r+1}} = \\frac{n-r-1}{r+2} = \\frac{6}{5} \\implies 5n - 11r = 17$. Subtracting the two equations gives $n = 10$, and substituting back yields $r = 3$.',
                  solutionAr: 'باستخدام مقلوب قانون النسبة: $\\frac{\\binom{n}{r+1}}{\\binom{n}{r}} = \\frac{n-r}{r+1} = \\frac{7}{4} \\implies 4n - 11r = 7$. ومن النسبة الثانية: $\\frac{\\binom{n}{r+2}}{\\binom{n}{r+1}} = \\frac{n-r-1}{r+2} = \\frac{6}{5} \\implies 5n - 11r = 17$. بطرح المعادلتين نجد أن $n = 10$، وبالتعويض نجد أن $r = 3$.'
                }
              },
              worksheet: {
                id: 'ws_alg_l1',
                titleEn: 'Official MoE Solved Worksheet: Permutations & Combinations',
                titleAr: 'ورقة عمل محلولة: التباديل والتوافيق (نماذج الامتحانات الرسمية)',
                descriptionEn: 'Selection of Thanaweya Amma past exam questions with complete step-by-step breakdown and teacher guidance notes.',
                descriptionAr: 'مجموعة مختارة من أسئلة امتحانات الثانوية العامة السابقة مع نموذج إجابة تفصيلي وتوجيهات للمعلم.',
                estimatedTimeMinutes: 45,
                problems: [
                  {
                    id: 'p1',
                    titleEn: 'Thanaweya Amma Exam Problem 1 (Equations with Pascal Addition)',
                    titleAr: 'مسألة امتحان ثانوية عامة ١ (معادلات الجمع في التوافيق)',
                    difficulty: 'exam_standard',
                    questionEn: 'Find the value of $n$ satisfying the equation: $$\\binom{n}{7} + \\binom{n}{6} = \\binom{15}{7}$$',
                    questionAr: 'أوجد قيمة $n$ التي تحقق المعادلة التالية: $$\\binom{n}{7} + \\binom{n}{6} = \\binom{15}{7}$$',
                    optionsEn: ['12', '14', '15', '16'],
                    optionsAr: ['١٢', '١٤', '١٥', '١٦'],
                    correctAnswer: '14',
                    correctIndex: 1,
                    hintEn: 'Apply Pascal Addition Identity on the left hand side: C(n, r) + C(n, r-1) = C(n+1, r).',
                    hintAr: 'طبق قانون الجمع في التوافيق على الطرف الأيمن: ق(ن، ر) + ق(ن، ر-١) = ق(ن+١، ر).',
                    stepByStepSolutionEn: [
                      'Observe the left hand side: $\\binom{n}{7} + \\binom{n}{6}$. Both combinations have the same upper index $n$, and consecutive lower indices $7$ and $6$.',
                      'By Pascal\'s Addition Law: $\\binom{n}{7} + \\binom{n}{6} = \\binom{n + 1}{7}$.',
                      'Substitute back into the equation: $\\binom{n + 1}{7} = \\binom{15}{7}$.',
                      'Since the lower indices are equal ($7 = 7$), the upper indices must be equal: $n + 1 = 15$.',
                      'Therefore, $n = 14$.'
                    ],
                    stepByStepSolutionAr: [
                      'نلاحظ الطرف الأيمن: $\\binom{n}{7} + \\binom{n}{6}$. التوفيقتان لهما نفس العلم $n$ ودليلين متتاليين $7$ و $6$.',
                      'بتطبيق قانون الجمع للتوافيق: $\\binom{n}{7} + \\binom{n}{6} = \\binom{n + 1}{7}$.',
                      'بالتعويض في المعادلة الأصلية: $\\binom{n + 1}{7} = \\binom{15}{7}$.',
                      'بما أن الدليل يساوي الدليل ($7 = 7$)، إذن العلم يساوي العلم: $n + 1 = 15$.',
                      'وبالتالي فإن: $n = 14$.'
                    ],
                    teacherTipEn: 'Warn students against expanding combinations into factorials unnecessarily! Pascal identity saves 5 minutes of complex algebra.',
                    teacherTipAr: 'حذر الطلاب من فك التوافيق إلى مضاروب دون داعٍ! استخدام قانون الجمع يختصر وقت الحل بشكل هائل.'
                  },
                  {
                    id: 'p2',
                    titleEn: 'Thanaweya Amma Exam Problem 2 (Geometry & Combinatorics)',
                    titleAr: 'مسألة امتحان ثانوية عامة ٢ (التوافيق والهندسة)',
                    difficulty: 'medium',
                    diagramType: 'polygon_diagonals',
                    questionEn: 'In the figure shown: A convex polygon has $n$ vertices and $44$ diagonals. Find the number of vertices $n$.',
                    questionAr: 'في الشكل المقابل: مضلع محدب عدد رؤوسه $n$ وعدد أقطاره يساوي $44$، فاحسب عدد رؤوس المضلع $n$.',
                    optionsEn: ['11', '8', '14', '22'],
                    optionsAr: ['١١', '٨', '١٤', '٢٢'],
                    correctAnswer: '11',
                    correctIndex: 0,
                    hintEn: 'The total number of line segments joining any 2 vertices is C(n, 2). Diagonals = Total Line Segments - Number of Sides (n).',
                    hintAr: 'عدد القطع المستقيمة الواصلة بين أي رأسين هو ق(ن، ٢). عدد الأقطار = عدد القطع المستقيمة الكلي - عدد الأضلاع (ن).',
                    stepByStepSolutionEn: [
                      'The number of ways to choose any 2 vertices out of $n$ is given by $\\binom{n}{2}$.',
                      'Out of these line segments, $n$ of them are the boundary sides of the polygon.',
                      'Therefore, Number of Diagonals = $\\binom{n}{2} - n$.',
                      'Given diagonals $= 44$, so: $$\\binom{n}{2} - n = 44$$',
                      'Expand $\\binom{n}{2} = \\frac{n(n-1)}{2}$:',
                      '$$\\frac{n(n-1)}{2} - n = 44 \\implies \\frac{n^2 - n - 2n}{2} = 44 \\implies n^2 - 3n = 88$$',
                      'Rearranging into standard quadratic form: $$n^2 - 3n - 88 = 0 \\implies (n - 11)(n + 8) = 0$$',
                      'Since $n > 0$, we reject $n = -8$. Thus, $n = 11$ vertices (Hendecagon).'
                    ],
                    stepByStepSolutionAr: [
                      'عدد طرق توصيل أي رأسين من بين $n$ من الرؤوس يعطى بالتوافيق $\\binom{n}{2}$.',
                      'من بين هذه القطع الواصلة، يوجد $n$ من القطع تمثل أضلاع المضلع الخارجية.',
                      'إذن: عدد الأقطار = $\\binom{n}{2} - n$.',
                      'بما أن عدد الأقطار = $44$، إذن: $$\\binom{n}{2} - n = 44$$',
                      'بفك التوفيقة: $\\frac{n(n-1)}{2} - n = 44 \\implies \\frac{n^2 - 3n}{2} = 44 \\implies n^2 - 3n - 88 = 0$',
                      'تحليل المعادلة التربيعية: $(n - 11)(n + 8) = 0$',
                      'بما أن عدد الرؤوس موجب، نرفض $n = -8$. إذن عدد الرؤوس $n = 11$ (مضلع إحد عشري).'
                    ],
                    teacherTipEn: 'Remind students of the general MoE formula for polygon diagonals: D = n(n-3)/2.',
                    teacherTipAr: 'ذكّر الطلاب بالقانون السريع لأقطار المضلع المعتمد بالوزارة: د = ن(ن - ٣) / ٢.'
                  },
                  {
                    id: 'p1_3',
                    titleEn: 'Foundation Problem: Permutations of Distinct Elements',
                    titleAr: 'مسألة تأسيسية: تباديل عناصر متمايزة',
                    difficulty: 'easy',
                    questionEn: 'Find the number of ways to form a 4-digit number with distinct digits chosen from the set $\\{1, 2, 3, 4, 5, 6\\}$.',
                    questionAr: 'كم عدداً مكوناً من ٤ أرقام مختلفة يمكن تكوينه من عناصر المجموعة $\\{1, 2, 3, 4, 5, 6\\}$؟',
                    optionsEn: ['15', '360', '720', '1296'],
                    optionsAr: ['١٥', '٣٦٠', '٧٢٠', '١٢٩٦'],
                    correctAnswer: '360',
                    correctIndex: 1,
                    hintEn: 'Since order matters and repetition is not allowed, use permutations P(6, 4).',
                    hintAr: 'بما أن الترتيب مهم والتكرار غير مسموح، نستخدم التباديل ل(٦، ٤).',
                    stepByStepSolutionEn: [
                      'The number of available digits is $n = 6$.',
                      'We need to choose and arrange $r = 4$ distinct digits.',
                      'Number of ways $= P(6, 4) = 6 \\times 5 \\times 4 \\times 3 = 360$.'
                    ],
                    stepByStepSolutionAr: [
                      'عدد الأرقام المتاحة هو $n = 6$.',
                      'المطلوب اختيار وترتيب $r = 4$ أرقام متمايزة.',
                      'عدد الطرق $= P(6, 4) = 6 \\times 5 \\times 4 \\times 3 = 360$ طريقة.'
                    ],
                    teacherTipEn: 'Emphasize the difference between permutations (order matters) and combinations (order irrelevant).',
                    teacherTipAr: 'أكد على الفارق الجوهري بين التباديل (يراعى الترتيب) والتوافيق (لا يراعى الترتيب).'
                  },
                  {
                    id: 'p1_4',
                    titleEn: 'HOTS Problem: Permutations-Combinations Relation',
                    titleAr: 'مسألة مهارات عليا: العلاقة بين التباديل والتوافيق',
                    difficulty: 'hots',
                    questionEn: 'If $P(n, r) = 720$ and $\\binom{n}{r} = 120$, find the value of $P(n, r - 1)$.',
                    questionAr: 'إذا كان $P(n, r) = 720$ وكان $\\binom{n}{r} = 120$، فاحسب قيمة $P(n, r - 1)$.',
                    optionsEn: ['60', '72', '90', '120'],
                    optionsAr: ['٦٠', '٧٢', '٩٠', '١٢٠'],
                    correctAnswer: '90',
                    correctIndex: 2,
                    hintEn: 'Recall that P(n, r) = r! * C(n, r). Find r first, then n.',
                    hintAr: 'تذكر أن ل(ن، ر) = ر! × ق(ن، ر). أوجد ر أولاً ثم ن.',
                    stepByStepSolutionEn: [
                      'We know $P(n, r) = r! \\cdot \\binom{n}{r}$.',
                      '$$r! = \\frac{P(n, r)}{\\binom{n}{r}} = \\frac{720}{120} = 6 = 3! \\implies r = 3$$',
                      'Substitute $r = 3$ into $P(n, 3) = 720$:',
                      '$$n(n - 1)(n - 2) = 720 = 10 \\times 9 \\times 8 \\implies n = 10$$',
                      'Now calculate $P(n, r - 1) = P(10, 2)$:',
                      '$$P(10, 2) = 10 \\times 9 = 90$$'
                    ],
                    stepByStepSolutionAr: [
                      'نعلم أن $P(n, r) = r! \\cdot \\binom{n}{r}$.',
                      '$$r! = \\frac{720}{120} = 6 = 3! \\implies r = 3$$',
                      'بالتعويض عن $r = 3$ في $P(n, 3) = 720$:',
                      '$$n(n - 1)(n - 2) = 720 = 10 \\times 9 \\times 8 \\implies n = 10$$',
                      'المطلوب إيجاد $P(n, r - 1) = P(10, 2)$:',
                      '$$P(10, 2) = 10 \\times 9 = 90$$'
                    ],
                    teacherTipEn: 'Factoring 720 into three consecutive descending integers (10x9x8) is standard Thanaweya exam technique.',
                    teacherTipAr: 'تحليل ٧٢٠ إلى حاصل ضرب ثلاثة أعداد متتالية تنازلياً (١٠×٩×٨) هو تكنيك وزاري سريع ومطلوب.'
                  }
                ]
              },
              interactiveWidget: {
                type: 'pascal_binomial',
                titleEn: 'Interactive Pascal Triangle & Binomial Coefficients',
                titleAr: 'مستكشف مثلث باسكال ومعاملات ذات الحدين',
                descriptionEn: 'Explore rows of Pascal Triangle, test Pascal Identity C(n,r)+C(n,r-1)=C(n+1,r), and generate binomial term expansions dynamically.',
                descriptionAr: 'استكشف صفوف مثلث باسكال، واختبر قانون الجمع، وتوليد مفكوك ذات الحدين تفاعلياً.'
              }
            },
            {
              id: 'alg_l2',
              titleEn: 'Binomial Theorem for Positive Integral Exponents',
              titleAr: 'نظرية ذات الحدين بأس صحيح موجب',
              summaryEn: 'Expansion of (a + b)^n, general term T_(r+1), middle term determination, and coefficient properties.',
              summaryAr: 'مفكوك (أ + ب)^ن، قانون الحد العام ح(ر+١)، رتبة الحد الأوسط والحدين الأوسطين، وحساب مجموع المعاملات.',
              theoryContentEn: `### 1. Binomial Theorem Expansion
For any positive integer $n$ and any real numbers $a, b$:
$(a + b)^n = \\binom{n}{0} a^n + \\binom{n}{1} a^{n-1} b + \\binom{n}{2} a^{n-2} b^2 + \\cdots + \\binom{n}{n} b^n = \\sum_{r=0}^{n} \\binom{n}{r} a^{n-r} b^r$

### 2. Fundamental Properties of the Expansion:
1. **Number of Terms:** Total number of terms in the expansion is $(n + 1)$.
2. **General Term Formula ($T_{r+1}$):**
   $T_{r+1} = \\binom{n}{r} \\cdot (\\text{1st term})^{n-r} \\cdot (\\text{2nd term})^r$
3. **Middle Term(s):**
   - If $n$ is **even**: Exactly **one middle term** at position $\\frac{n}{2} + 1$.
   - If $n$ is **odd**: Exactly **two middle terms** at positions $\\frac{n + 1}{2}$ and $\\frac{n + 3}{2}$.
4. **Ratio of Consecutive Terms Law:**
   $\\frac{T_{r+1}}{T_r} = \\frac{n - r + 1}{r} \\cdot \\frac{\\text{2nd term}}{\\text{1st term}}$
5. **Sum of Coefficients:** Obtained directly by evaluating variables at $1$:
   $\\text{Sum of coefficients of } (a + b)^n = (a + b)^n \\Big|_{a=1, b=1} = 2^n$
6. **Finding the Term Independent of $x$ (Free of $x$):**
   Express general term $T_{r+1}$ collecting powers of $x$: $T_{r+1} = K \\cdot x^{f(r)}$. Set exponent $f(r) = 0$ to solve for integer $r \\in [0, n]$.
7. **Greatest Term / Greatest Coefficient:**
   $T_r$ is the greatest term when $\\frac{T_{r+1}}{T_r} \\le 1$ and $\\frac{T_r}{T_{r-1}} \\ge 1$.`,
              theoryContentAr: `### ١. نظرية ذات الحدين لأس صحيح موجب
لأي عدد صحيح موجب $n$ وأي كميتين $a, b$:
$(a + b)^n = \\binom{n}{0} a^n + \\binom{n}{1} a^{n-1} b + \\binom{n}{2} a^{n-2} b^2 + \\cdots + \\binom{n}{n} b^n = \\sum_{r=0}^{n} \\binom{n}{r} a^{n-r} b^r$

### ٢. الخواص الأساسية المعتمدة للمفكوك:
١. **عدد الحدود:** يحتوي مفكوك $(a + b)^n$ على $(n + 1)$ من الحدود.
٢. **قانون الحد العام $T_{r+1}$ (ح(ر+١)):**
   $T_{r+1} = \\binom{n}{r} \\cdot (\\text{الحد الأول})^{n-r} \\cdot (\\text{الحد الثاني})^r$
٣. **الحد الأوسط والحدان الأوسطان:**
   - إذا كان $n$ **زوجياً**: يوجد **حد أوسط وحيد** رتبته $\\frac{n}{2} + 1$.
   - إذا كان $n$ **فردياً**: يوجد **حدان أوسطان** رتبتاهما $\\frac{n + 1}{2}$ و $\\frac{n + 3}{2}$.
٤. **قانون النسبة بين حدين متتاليين:**
   $\\frac{T_{r+1}}{T_r} = \\frac{n - r + 1}{r} \\cdot \\frac{\\text{الحد الثاني}}{\\text{الحد الأول}}$
٥. **مجموع معاملات المفكوك:** نحصل عليه بوضع كل متغير مساوياً للواحد الصحيح ($1$).
٦. **إيجاد الحد الخالي من $x$:** نكتب الحد العام ونجمع أسس $x$ بدلالة $r$ ثم نساوي الأس الكلي بالصفر لحساب قيمة $r$.
٧. **أكبر حد وأكبر معامل في المفكوك:** يكون $T_r$ أكبر الحدود قيمة عندما يحقق المتباينتين:
   $\\frac{T_{r+1}}{T_r} \\le 1 \\quad \\text{و} \\quad \\frac{T_r}{T_{r-1}} \\ge 1$`,
              formulas: [
                { labelEn: 'Binomial Expansion', labelAr: 'مفكوك ذات الحدين', latex: '(a+b)^n = \\sum_{r=0}^n \\binom{n}{r} a^{n-r} b^r' },
                { labelEn: 'General Term Formula', labelAr: 'قانون الحد العام', latex: 'T_{r+1} = \\binom{n}{r} a^{n-r} b^r' },
                { labelEn: 'Ratio between consecutive terms', labelAr: 'النسبة بين حدين متتاليين', latex: '\\frac{T_{r+1}}{T_r} = \\frac{n-r+1}{r} \\cdot \\frac{b}{a}' }
              ],
              moeRef: {
                bookTitleEn: 'Ministry Pure Mathematics Textbook Grade 12',
                bookTitleAr: 'كتاب الرياضيات البحتة للصف الثالث الثانوي',
                grade: 'Grade 12',
                term: 'Term 1',
                officialCode: 'MOE-SEC3-ALG-CH1-L2',
                pageRange: 'pp. 19 - 34'
              },
              lessonPlan: {
                titleEn: 'Lesson 2 Plan: Binomial Theorem & General Term Applications',
                titleAr: 'خطة الدرس الثاني: نظرية ذات الحدين وتطبيقات الحد العام',
                gradeLevel: 'Grade 12 Secondary',
                durationMinutes: 90,
                moeCode: 'MOE-SEC3-ALG-CH1-L2',
                bloomsObjectivesEn: [
                  'Apply the general term formula T_(r+1) to find specific terms (term free of x, term containing x^k).',
                  'Calculate the middle term(s) of any binomial expansion (a + b)^n.',
                  'Utilize the consecutive terms ratio formula T_(r+1)/T_r to determine the greatest term.'
                ],
                bloomsObjectivesAr: [
                  'تطبيق قانون الحد العام ح(ر+١) لإيجاد حد معين (الحد الخالي من س، الحد المشمل على س^ك).',
                  'حساب رتبة وقيمة الحد الأوسط أو الحدين الأوسطين لأي مفكوك ذات حدين.',
                  'استخدام قانون النسبة بين حدين متتاليين لإيجاد أكبر حدود المفكوك قيمة.'
                ],
                prerequisitesEn: ['Combinations properties C(n,r)', 'Exponents rules (x^a * x^b = x^(a+b))'],
                prerequisitesAr: ['خواص التوافيق ق(ن، ر)', 'قوانين الأسس والأدلة'],
                keyVocabularyEn: [
                  { term: 'General Term T_(r+1)', definition: 'Formula to calculate any specific term at position r+1.' },
                  { term: 'Term Free of x', definition: 'The term where the exponent of variable x equals zero (x^0).' }
                ],
                keyVocabularyAr: [
                  { term: 'الحد العام ح(ر+١)', definition: 'الصيغة الرياضية لحساب قيمة أي حد برتبة ر+١ في المفكوك.' },
                  { term: 'الحد الخالي من س', definition: 'الحد الذي يكون فيه أس المتغير س مساوياً للصفر (س^٠).' }
                ],
                teachingPacing: [
                  {
                    phaseEn: 'Concept Intro (15 mins)',
                    phaseAr: 'تقديم المفهوم (١٥ دقيقة)',
                    duration: '15 mins',
                    activitiesEn: 'Derive binomial expansion for (a+b)^2, (a+b)^3, (a+b)^4 on board and extract pattern for (a+b)^n.',
                    activitiesAr: 'فك (أ+ب)^٢ و (أ+ب)^٣ واستنتاج نمط المفكوك لـ (أ+ب)^ن.'
                  },
                  {
                    phaseEn: 'Finding Term Free of x (35 mins)',
                    phaseAr: 'إيجاد الحد الخالي من س (٣٥ دقيقة)',
                    duration: '35 mins',
                    activitiesEn: 'Demonstrate step-by-step technique: Write T_(r+1), combine exponents of x, set total exponent = 0, solve for r.',
                    activitiesAr: 'شرح الخطوات المنهجية: كتابة ح(ر+١)، تجميع أسس س، مساواة الأس بالصفر، ثم إيجاد قيمة ر.'
                  },
                  {
                    phaseEn: 'Problem Solving & Ratio Law (25 mins)',
                    phaseAr: 'حل التدريبات وقانون النسبة (٢٥ دقيقة)',
                    duration: '25 mins',
                    activitiesEn: 'Solve Thanaweya Amma questions involving T_(r+1)/T_r ratio law.',
                    activitiesAr: 'حل أسئلة الثانوية العامة المحتوية على النسبة بين حدين متتاليين.'
                  },
                  {
                    phaseEn: 'Exit Ticket (15 mins)',
                    phaseAr: 'تذكرة الخروج (١٥ دقيقة)',
                    duration: '15 mins',
                    activitiesEn: 'Formative evaluation problem on board.',
                    activitiesAr: 'سؤال تقويم تكويني على السبورة.'
                  }
                ],
                commonMisconceptionsEn: [
                  'Confusing term index (r+1) with the value of r. If term position is 5th term (T_5), then r = 4!',
                  'Forgetting negative signs when the second term is negative, e.g., in (2x - 1/x)^n.'
                ],
                commonMisconceptionsAr: [
                  'الخلط بين رتبة الحد (ر+١) وقيمة ر. الحد الخامس (ح٥) يعني أن ر = ٤ وليس ٥!',
                  'نسيان الإشارة السالبة عند وجود الحد الثاني بالسالب مثل (٢س - ١/س)^ن.'
                ],
                differentiationEn: {
                  struggling: 'Provide color-coded template sheet highlighting: First Term, Second Term, Upper Index n, and lower index r.',
                  advanced: 'Find the coefficient of x^k in the expansion of (1 + x + x^2)^n by factoring or double summation.'
                },
                differentiationAr: {
                  struggling: 'تزويد الطلاب بورقة قوالب ملونة تحدد: الحد الأول، الحد الثاني، الأس ن، والدليل ر.',
                  advanced: 'إيجاد معامل س^ك في مفكوك (١ + س + س^٢)^ن باستخدام التحليل أو التجميع المزدوج.'
                },
                formativeAssessmentEn: 'Find the term independent of $x$ in the expansion of $(x^2 + \\frac{1}{x})^9$.',
                formativeAssessmentAr: 'أوجد الحد الخالي من $x$ في مفكوك $(x^2 + \\frac{1}{x})^9$.',
                exitTicketQuestion: {
                  questionEn: 'In the expansion of $(2x^2 - \\frac{1}{x})^{12}$ in descending powers of $x$, find the 7th term ($T_7$) and check whether it is the term independent of $x$.',
                  questionAr: 'في مفكوك $(2x^2 - \\frac{1}{x})^{12}$ حسب قوى $x$ التنازلية، أوجد الحد السابع $T_7$، وهل هو الحد الخالي من $x$؟',
                  solutionEn: 'For T_7, we set r = 6. T_7 = C(12, 6) * (2x^2)^(12-6) * (-1/x)^6 = 924 * (64 x^12) * (1 / x^6) = 59,136 x^6. Since power of x is 6 (not 0), T_7 is not free of x. (The term free of x is T_9 where r=8: power = 2(12-r) - r = 0 => 24 - 3r = 0 => r = 8).',
                  solutionAr: 'لحساب ح٧ نضع ر = ٦. ح٧ = ق(١٢، ٦) × (٢س^٢)^٦ × (-١/س)^٦ = ٩٢٤ × ٦٤س^١٢ × (١/س^٦) = ٥٩١٣٦ س^٦. الأس يساوي ٦ وليس صفراً، إذن ح٧ ليس الخالي من س (الحد الخالي من س هو ح٩ حيث ر = ٨).'
                }
              },
              worksheet: {
                id: 'ws_alg_l2',
                titleEn: 'Solved Worksheet: Binomial Expansion & General Term',
                titleAr: 'ورقة عمل محلولة: مفكوك ذات الحدين والحد العام',
                descriptionEn: 'High order thinking problems from Egyptian national exams.',
                descriptionAr: 'مسائل التفكير العلمي العالي من امتحانات الثانوية العامة المصرية.',
                estimatedTimeMinutes: 50,
                problems: [
                  {
                    id: 'p3',
                    titleEn: 'Thanaweya Amma Exam Problem 3 (Ratio of Consecutive Terms)',
                    titleAr: 'مسألة امتحان ثانوية عامة ٣ (النسبة بين حدين متتاليين)',
                    difficulty: 'exam_standard',
                    questionEn: 'In the expansion of $(x + \\frac{1}{2x})^8$, if $T_4 : T_5 = 8 : 3$, find the value of $x$.',
                    questionAr: 'في مفكوك $(x + \\frac{1}{2x})^8$ حسب قوى $x$ التنازلية، إذا كان $T_4 : T_5 = 8 : 3$، فاحسب قيمة $x$.',
                    optionsEn: ['\\pm \\frac{\\sqrt{5}}{3}', '\\pm \\frac{\\sqrt{15}}{3}', '\\pm \\frac{5}{3}', '\\pm \\frac{3}{5}'],
                    optionsAr: ['\\pm \\frac{\\sqrt{5}}{3}', '\\pm \\frac{\\sqrt{15}}{3}', '\\pm \\frac{5}{3}', '\\pm \\frac{3}{5}'],
                    correctAnswer: '\\pm \\frac{\\sqrt{15}}{3}',
                    correctIndex: 1,
                    hintEn: 'Use the consecutive term ratio law: $\\frac{T_{r+1}}{T_r} = \\frac{n - r + 1}{r} \\cdot \\frac{\\text{2nd term}}{\\text{1st term}}$.',
                    hintAr: 'استخدم قانون النسبة بين حدين متتاليين: $\\frac{T_{r+1}}{T_r} = \\frac{n - r + 1}{r} \\cdot \\frac{\\text{الحد الثاني}}{\\text{الحد الأول}}$.',
                    stepByStepSolutionEn: [
                      'We are given $T_4 : T_5 = 8 : 3$, which means $\\frac{T_5}{T_4} = \\frac{3}{8}$.',
                      'Apply the Binomial Consecutive Term Ratio Law for $n = 8$ and $r = 4$:',
                      '$$\\frac{T_5}{T_4} = \\frac{8 - 4 + 1}{4} \\cdot \\frac{\\text{2nd Term}}{\\text{1st Term}}$$',
                      'Substitute 1st term $= x$ and 2nd term $= \\frac{1}{2x}$:',
                      '$$\\frac{T_5}{T_4} = \\frac{5}{4} \\cdot \\frac{\\frac{1}{2x}}{x} = \\frac{5}{4} \\cdot \\frac{1}{2x^2} = \\frac{5}{8x^2}$$',
                      'Set equal to given ratio $\\frac{3}{8}$:',
                      '$$\\frac{5}{8x^2} = \\frac{3}{8} \\implies 3x^2 = 5 \\implies x^2 = \\frac{5}{3}$$',
                      'Therefore, $x = \\pm \\sqrt{\\frac{5}{3}} = \\pm \\frac{\\sqrt{15}}{3}$.'
                    ],
                    stepByStepSolutionAr: [
                      'معطى أن $T_4 : T_5 = 8 : 3$، وبالتالي فإن $\\frac{T_5}{T_4} = \\frac{3}{8}$.',
                      'بتطبيق قانون النسبة بين حدين متتاليين حيث $n = 8$ و $r = 4$:',
                      '$$\\frac{T_5}{T_4} = \\frac{8 - 4 + 1}{4} \\cdot \\frac{\\text{الحد الثاني}}{\\text{الحد الأول}}$$',
                      'بالتعويض عن الحد الأول $= x$ والحد الثاني $= \\frac{1}{2x}$:',
                      '$$\\frac{T_5}{T_4} = \\frac{5}{4} \\cdot \\frac{\\frac{1}{2x}}{x} = \\frac{5}{8x^2}$$',
                      'بمساواة الناتج بالنسبة المعطاة $\\frac{3}{8}$:',
                      '$$\\frac{5}{8x^2} = \\frac{3}{8} \\implies 3x^2 = 5 \\implies x^2 = \\frac{5}{3}$$',
                      'إذن: $x = \\pm \\sqrt{\\frac{5}{3}} = \\pm \\frac{\\sqrt{15}}{3}$.'
                    ],
                    teacherTipEn: 'Ensure students invert the given ratio $\\frac{T_4}{T_5}$ to $\\frac{T_5}{T_4}$ before applying the formula.',
                    teacherTipAr: 'تأكد من تنبيه الطلاب لقلب النسبة ح٤/ح٥ إلى ح٥/ح٤ قبل تطبيق القانون (لأن القانون يتطلب ح(ر+١) في البسط!).'
                  },
                  {
                    id: 'p3_2',
                    titleEn: 'Foundation Problem: Term Free of x',
                    titleAr: 'مسألة تأسيسية: الحد الخالي من س',
                    difficulty: 'easy',
                    questionEn: 'In the expansion of $\\left(x^2 + \\frac{1}{x}\\right)^9$, find the value of the term free of $x$.',
                    questionAr: 'في مفكوك $\\left(x^2 + \\frac{1}{x}\\right)^9$ حسب قوى $x$ التنازلية، أوجد قيمة الحد الخالي من $x$.',
                    optionsEn: ['36', '54', '84', '126'],
                    optionsAr: ['٣٦', '٥٤', '٨٤', '١٢٦'],
                    correctAnswer: '84',
                    correctIndex: 2,
                    hintEn: 'Write general term $T_{r+1}$, combine exponents of $x$, and equate to $0$.',
                    hintAr: 'اكتب قانون الحد العام $T_{r+1}$، واجمع أسس المتغير $x$، وساوِ الأس بالصفر.',
                    stepByStepSolutionEn: [
                      'Write the general term $T_{r+1}$:',
                      '$$T_{r+1} = \\binom{9}{r} (x^2)^{9-r} \\left(\\frac{1}{x}\\right)^r = \\binom{9}{r} x^{18-2r} x^{-r} = \\binom{9}{r} x^{18-3r}$$',
                      'For the term free of $x$, the exponent of $x$ must equal zero:',
                      '$$18 - 3r = 0 \\implies 3r = 18 \\implies r = 6$$',
                      'Substitute $r = 6$ to find the 7th term $T_7$:',
                      '$$T_7 = \\binom{9}{6} = \\binom{9}{3} = \\frac{9 \\times 8 \\times 7}{3 \\times 2 \\times 1} = 84$$'
                    ],
                    stepByStepSolutionAr: [
                      'نكتب قانون الحد العام $T_{r+1}$:',
                      '$$T_{r+1} = \\binom{9}{r} (x^2)^{9-r} \\left(\\frac{1}{x}\\right)^r = \\binom{9}{r} x^{18-3r}$$',
                      'لإيجاد الحد الخالي من $x$، نساوي أس $x$ بالصفر:',
                      '$$18 - 3r = 0 \\implies 3r = 18 \\implies r = 6$$',
                      'بالتعويض عن $r = 6$ لإيجاد قيمة الحد السابع $T_7$:',
                      '$$T_7 = \\binom{9}{6} = \\binom{9}{3} = \\frac{9 \\times 8 \\times 7}{3 \\times 2 \\times 1} = 84$$'
                    ],
                    teacherTipEn: 'Remind students that r = 6 corresponds to the 7th term (T_7), not T_6.',
                    teacherTipAr: 'ذكّر الطلاب دائماً بأن ر = ٦ تعني الحد السابع (ح٧) وليس السادس.'
                  },
                  {
                    id: 'p3_3',
                    titleEn: 'HOTS Problem: Three Consecutive Coefficients Ratio',
                    titleAr: 'مسألة مهارات تفكير عليا: نسبة ثلاثة معاملات متتالية',
                    difficulty: 'hots',
                    questionEn: 'In the expansion of $(1 + x)^n$, if the coefficients of three consecutive terms are in the ratio $1 : 7 : 35$, find the value of $n$.',
                    questionAr: 'في مفكوك $(1 + x)^n$، إذا كانت النسبة بين معاملات ثلاثة حدود متتالية هي $1 : 7 : 35$، فاحسب قيمة $n$.',
                    optionsEn: ['18', '23', '27', '35'],
                    optionsAr: ['١٨', '٢٣', '٢٧', '٣٥'],
                    correctAnswer: '23',
                    correctIndex: 1,
                    hintEn: 'Let the three consecutive terms be $T_r, T_{r+1}, T_{r+2}$. Use the ratio law on both pairs.',
                    hintAr: 'افرض الحدود الثلاثة هي $T_r, T_{r+1}, T_{r+2}$، وطبق قانون النسبة على كل نسبتين متتاليتين.',
                    stepByStepSolutionEn: [
                      'Let the consecutive terms be $T_r, T_{r+1}, T_{r+2}$. Their coefficients in $(1+x)^n$ are $\\binom{n}{r-1}, \\binom{n}{r}, \\binom{n}{r+1}$.',
                      'First ratio: $\\frac{\\binom{n}{r}}{\\binom{n}{r-1}} = \\frac{n - r + 1}{r} = \\frac{7}{1} \\implies n - r + 1 = 7r \\implies n = 8r - 1$.',
                      'Second ratio: $\\frac{\\binom{n}{r+1}}{\\binom{n}{r}} = \\frac{n - r}{r + 1} = \\frac{35}{7} = 5 \\implies n - r = 5r + 5 \\implies n = 6r + 5$.',
                      'Equating the two expressions for $n$:',
                      '$$8r - 1 = 6r + 5 \\implies 2r = 6 \\implies r = 3$$',
                      'Substitute $r = 3$ back to find $n$:',
                      '$$n = 8(3) - 1 = 24 - 1 = 23$$'
                    ],
                    stepByStepSolutionAr: [
                      'نفرض الحدود المتتالية هي $T_r, T_{r+1}, T_{r+2}$، ومعاملاتها هي $\\binom{n}{r-1}, \\binom{n}{r}, \\binom{n}{r+1}$.',
                      'النسبة الأولى: $\\frac{\\binom{n}{r}}{\\binom{n}{r-1}} = \\frac{n - r + 1}{r} = \\frac{7}{1} \\implies n = 8r - 1$.',
                      'النسبة الثانية: $\\frac{\\binom{n}{r+1}}{\\binom{n}{r}} = \\frac{n - r}{r + 1} = \\frac{35}{7} = 5 \\implies n = 6r + 5$.',
                      'بمساواة العلاقتين لإيجاد $r$:',
                      '$$8r - 1 = 6r + 5 \\implies 2r = 6 \\implies r = 3$$',
                      'بالتعويض لإيجاد $n$:',
                      '$$n = 8(3) - 1 = 23$$'
                    ],
                    teacherTipEn: 'Setting up the ratio between consecutive combination coefficients is one of the most frequent Thanaweya Amma exam patterns.',
                    teacherTipAr: 'قانون النسبة بين معاملات الحدود المتتالية في ذات الحدين هو من أهم وأكثر أفكار امتحانات الثانوية العامة تكراراً.'
                  }
                ]
              },
              interactiveWidget: {
                type: 'pascal_binomial',
                titleEn: 'Binomial Theorem Coefficient Visualizer',
                titleAr: 'محاكي معاملات نظرية ذات الحدين',
                descriptionEn: 'Interactive tool to generate terms of (ax + by)^n and visualize coefficients.',
                descriptionAr: 'أداة تفاعلية لتوليد حدود (أ س + ب ص)^ن ومعاينة المعاملات بيانيا.'
              }
            }
          ]
        },
        {
          id: 'solid_ch1',
          chapterNumber: 2,
          titleEn: '3D Rectangular Coordinates & Vectors in Space',
          titleAr: 'النظام الإحداثي التعامدي في الفراغ والمتجهات',
          descriptionEn: '3D Euclidean space R^3, coordinates (x,y,z), distance formula, midpoint, sphere equations, position vectors, unit vectors, dot product u.v and cross product u x v.',
          descriptionAr: 'النظام الإحداثي متعامد في الفراغ ثلاثي الأبعاد R^3، إحداثيات النقاط، البعد بين نقطتين، منتصف قطعة، معادلة الكرة، المتجهات، معيار المتجه، والضرب القياسي والاتجاهي.',
          isFullyEquipped: true,
          lessons: [
            {
              id: 'solid_l1',
              titleEn: '3D Rectangular Coordinates & The Sphere Equation',
              titleAr: 'النظام الإحداثي المتعامد في الفراغ ومعادلة الكرة',
              summaryEn: 'Understanding 3D axes (X,Y,Z), coordinate planes (XY, YZ, XZ), distance between points in 3D, and standard & general equations of a sphere.',
              summaryAr: 'فهم محاور الفراغ ثلاثي الأبعاد، مستويات الإحداثيات، قانون البعد بين نقطتين، ومنتصف القطعة، والصورة القياسية والعامة لمعادلة الكرة.',
              theoryContentEn: `### 1. 3D Rectangular Coordinate System
Points in space are located by coordinates $(x, y, z)$.
- **Coordinate Planes:**
  * $XY$-plane: equation $z = 0$.
  * $XZ$-plane: equation $y = 0$.
  * $YZ$-plane: equation $x = 0$.
- **Perpendicular Distances from Point $P(x, y, z)$:**
  * Distance to $XY$-plane $= |z|$
  * Distance to $XZ$-plane $= |y|$
  * Distance to $YZ$-plane $= |x|$
  * Distance to $X$-axis $= \\sqrt{y^2 + z^2}$
  * Distance to $Y$-axis $= \\sqrt{x^2 + z^2}$
  * Distance to $Z$-axis $= \\sqrt{x^2 + y^2}$

### 2. Distance Between Two Points & Midpoint:
- Distance $AB = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2 + (z_2 - z_1)^2}$.
- Midpoint $M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}, \\frac{z_1 + z_2}{2}\\right)$.

### 3. Equations of the Sphere:
- **Standard (Center-Radius) Form:**
  $(x - a)^2 + (y - b)^2 + (z - c)^2 = r^2$
  where Center is $C(a, b, c)$ and radius is $r > 0$.
- **General Equation of the Sphere:**
  $x^2 + y^2 + z^2 + 2lx + 2my + 2nz + d = 0$
  where Center $C(-l, -m, -n)$, and radius $r = \\sqrt{l^2 + m^2 + n^2 - d}$.
  * Condition for a real sphere: $l^2 + m^2 + n^2 - d > 0$.
  * If $= 0$, it represents a single point $(-l, -m, -n)$.
  * If $< 0$, it is an imaginary sphere (no real graph).

### 4. Sphere Tangency Cases:
- Tangent to $XY$-plane: $r = |c|$ (or $|z|$ coordinate of center).
- Tangent to $XZ$-plane: $r = |b|$.
- Tangent to $YZ$-plane: $r = |a|$.
- Tangent to all three coordinate planes: $r = |a| = |b| = |c|$.
- Tangent to $X$-axis: $r = \\sqrt{b^2 + c^2}$.`,
              theoryContentAr: `### ١. نظام الإحداثيات المتعامدة في الفراغ ثلاثي الأبعاد
تحدد أي نقطة في الفراغ بثلاثة إحداثيات $P(x, y, z)$.
- **المستويات الإحداثية الأساسية:**
  * مستوى $XY$ (س ص): معادلته $z = 0$.
  * مستوى $XZ$ (س ع): معادلته $y = 0$.
  * مستوى $YZ$ (ص ع): معادلته $x = 0$.
- **أبعاد النقطة $P(x, y, z)$ عن المستويات والمحاور:**
  * بعدها عن المستوى $XY$ (س ص) $= |z|$.
  * بعدها عن المستوى $XZ$ (س ع) $= |y|$.
  * بعدها عن المستوى $YZ$ (ص ع) $= |x|$.
  * بعدها عن محور السينات $X$ $= \\sqrt{y^2 + z^2}$.
  * بعدها عن محور الصادات $Y$ $= \\sqrt{x^2 + z^2}$.
  * بعدها عن محور العين $Z$ $= \\sqrt{x^2 + y^2}$.

### ٢. البعد بين نقطتين وإحداثيات نقطة المنتصف:
- البعد $AB = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2 + (z_2 - z_1)^2}$.
- إحداثيات منتصف القطعة المستقيمة $M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}, \\frac{z_1 + z_2}{2}\\right)$.

### ٣. صور معادلة الكرة في الفراغ:
- **الصورة القياسية (بدلالة المركز ونصف القطر):**
  $(x - a)^2 + (y - b)^2 + (z - c)^2 = r^2$
  حيث المركز $C(a, b, c)$ ونصف القطر $r > 0$.
- **الصورة العامة لمعادلة الكرة:**
  $x^2 + y^2 + z^2 + 2lx + 2my + 2nz + d = 0$
  حيث المركز $C(-l, -m, -n)$، ونصف القطر $r = \\sqrt{l^2 + m^2 + n^2 - d}$.
  * شرط أن تمثل المعادلة كرة حقيقية: $l^2 + m^2 + n^2 - d > 0$.
  * إذا كان المقدار مساوياً للصفر، تمثل نقطة وحيدة.
  * إذا كان سالباً، لا تمثل كرة في الفراغ الحقيقي.

### ٤. حالات تماس الكرة مع المستويات والمحاور:
- الكرة تمس المستوى $XY$ (س ص): يكون $r = |c|$ (القيمة المطلقة للإحداثي العيني للمركز).
- الكرة تمس المستوى $XZ$ (س ع): يكون $r = |b|$.
- الكرة تمس المستوى $YZ$ (ص ع): يكون $r = |a|$.
- الكرة تمس مستويات الإحداثيات الثلاثة: $r = |a| = |b| = |c|$.
- الكرة تمس محور $X$ (السينات): $r = \\sqrt{b^2 + c^2}$.`,
              formulas: [
                { labelEn: '3D Distance Formula', labelAr: 'قانون البعد في الفراغ', latex: 'd = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2 + (z_2-z_1)^2}' },
                { labelEn: 'Sphere Standard Equation', labelAr: 'الصورة القياسية لمعادلة الكرة', latex: '(x-x_0)^2 + (y-y_0)^2 + (z-z_0)^2 = R^2' },
                { labelEn: 'Sphere Radius from General Form', labelAr: 'قانون نصف القطر من الصورة العامة', latex: 'R = \\sqrt{L^2 + M^2 + N^2 - D}' }
              ],
              moeRef: {
                bookTitleEn: 'Ministry Solid Geometry Textbook Grade 12',
                bookTitleAr: 'كتاب الهندسة الفراغية للصف الثالث الثانوي - وزارة التربية والتعليم',
                grade: 'Grade 12',
                term: 'Full Year',
                officialCode: 'MOE-SEC3-GEO-CH1-L1',
                pageRange: 'pp. 52 - 68'
              },
              lessonPlan: {
                titleEn: 'Lesson Plan: 3D Coordinate Space & Sphere Mechanics',
                titleAr: 'خطة درس: النظام الإحداثي التعامدي ومعادلة الكرة',
                gradeLevel: 'Grade 12 Secondary',
                durationMinutes: 90,
                moeCode: 'MOE-SEC3-GEO-CH1-L1',
                bloomsObjectivesEn: [
                  'Visualize and sketch points and geometric shapes in 3D Euclidean space.',
                  'Determine standard and general sphere equations from center and tangent plane conditions.',
                  'Analyze intersection and tangency conditions between two spheres in space.'
                ],
                bloomsObjectivesAr: [
                  'تمثيل النقاط والأشكال الهندسية في الفضاء المتعامد ثلاثي الأبعاد.',
                  'استنتاج المعادلة القياسية والعامة للكرة بمعلومية المركز وشروط المماسية.',
                  'تحليل حالات التماس والتقاطع والتداخل بين كرتين في الفراغ.'
                ],
                prerequisitesEn: ['2D Cartesian coordinate plane', 'Circle equation in 2D plane'],
                prerequisitesAr: ['النظام الإحداثي الكارتيزي ثنائي الأبعاد', 'معادلة الدائرة في المستوى'],
                keyVocabularyEn: [
                  { term: 'Sphere', definition: 'Locus of points in 3D equidistant from a fixed center C.' },
                  { term: 'Tangent Spheres', definition: 'Two spheres touching externally (M1M2 = R1+R2) or internally (M1M2 = |R1-R2|).' }
                ],
                keyVocabularyAr: [
                  { term: 'الكرة في الفراغ (Sphere)', definition: 'المحل الهندسية لجميع نقاط الفراغ التي تبعد بعداً ثابتاً (نق) عن نقطة ثابتة (المركز).' },
                  { term: 'الكرتان المتماستان', definition: 'كرتان تتماسان من الخارج (م١ م٢ = نق١ + نق٢) أو من الداخل (م١ م٢ = |نق١ - نق٢|).' }
                ],
                teachingPacing: [
                  {
                    phaseEn: '3D Spatial Visualizer Hook (15 mins)',
                    phaseAr: 'التهيئة بالرسم ثلاثي الأبعاد (١٥ دقيقة)',
                    duration: '15 mins',
                    activitiesEn: 'Use the interactive 3D WebGL tool to demonstrate point positions in 8 octants and distance to coordinate planes.',
                    activitiesAr: 'استخدام أداة الرسم ثلاثي الأبعاد التفاعلية لتوضيح مواقع النقاط في الثماميات الثمانية وبعدها عن المستويات.'
                  },
                  {
                    phaseEn: 'Sphere Equations & Derivation (35 mins)',
                    phaseAr: 'استنتاج معادلات الكرة (٣٥ دقيقة)',
                    duration: '35 mins',
                    activitiesEn: 'Derive standard form from distance formula. Expand to general form. Practice completing the square to find center and radius.',
                    activitiesAr: 'استنتاج الصورة القياسية من قانون البعد. فك الأقواس للصورة العامة. تدريب الطلاب على إكمال المربع لإيجاد المركز ونصف القطر.'
                  },
                  {
                    phaseEn: 'Inter-Sphere Relationships (25 mins)',
                    phaseAr: 'العلاقة بين كرتين (٢٥ دقيقة)',
                    duration: '25 mins',
                    activitiesEn: 'Categorize cases: Touch externally, touch internally, intersecting, concentric, distant.',
                    activitiesAr: 'تصنيف الحالات: متماستان من الخارج، متماستان من الداخل، متقاطعتان، متداخلتان، متباعدتان.'
                  },
                  {
                    phaseEn: 'Closure (15 mins)',
                    phaseAr: 'الخاتمة (١٥ دقيقة)',
                    duration: '15 mins',
                    activitiesEn: 'Solve a past exam problem involving a sphere touching the 3 coordinate planes.',
                    activitiesAr: 'حل مسألة امتحان سابقة تتعلق بكرة تمس مستويات الإحداثيات الثلاثة.'
                  }
                ],
                commonMisconceptionsEn: [
                  'Forgetting that coefficients of $x^2, y^2, z^2$ in the general sphere equation MUST be equal to $1$ before reading $L, M, N$!',
                  'Confusing distance to $xy$-plane ($|z|$) with distance to $z$-axis ($\\sqrt{x^2 + y^2}$).'
                ],
                commonMisconceptionsAr: [
                  'نسيان قسمة معاملات $x^2, y^2, z^2$ على معاملها لجعله مساوياً لـ $1$ قبل استخراج $L, M, N$!',
                  'الخلط بين بعد النقطة عن المستوى $xy$ ($|z|$) وبين بعدها عن محور $z$ وهو $\\sqrt{x^2 + y^2}$.'
                ],
                differentiationEn: {
                  struggling: 'Use physical cube model and visual 3D plotter canvas.',
                  advanced: 'Find the equation of the plane passing through the line of intersection of two intersecting spheres.'
                },
                differentiationAr: {
                  struggling: 'استخدام مجسم المكعب الفيزيائي وشاشة المحاكاة التفاعلية.',
                  advanced: 'إيجاد معادلة المستوى المار بخط تقاطع كرتين متقاطعتين (المستوى الراديكالي).'
                },
                formativeAssessmentEn: 'Find center and radius of sphere: $2x^2 + 2y^2 + 2z^2 - 8x + 12y - 4z - 16 = 0$.',
                formativeAssessmentAr: 'أوجد مركز ونصف قطر الكرة: $2x^2 + 2y^2 + 2z^2 - 8x + 12y - 4z - 16 = 0$.',
                exitTicketQuestion: {
                  questionEn: 'A sphere touches the three positive coordinate planes XY, YZ, XZ and its radius is 5 units. Write its standard equation.',
                  questionAr: 'كرة تمس مستويات الإحداثيات الموجبة الثلاثة س ص، ص ع، س ع ونصف قطرها يساوي ٥ وحدات. اكتب معادلتها القياسية.',
                  solutionEn: 'Since the sphere touches the positive coordinate planes, the distances from its center to all three planes equal the radius R = 5. Therefore, Center C = (5, 5, 5). Standard Equation: (x - 5)^2 + (y - 5)^2 + (z - 5)^2 = 25.',
                  solutionAr: 'بما أن الكرة تمس مستويات الإحداثيات الموجبة، فإن أبعاد مركزها عن المستويات الثلاثة تساوي نصف القطر نق = ٥. إذن المركز م = (٥، ٥، ٥). المعادلة القياسية: (س - ٥)^٢ + (ص - ٥)^٢ + (ع - ٥)^٢ = ٢٥.'
                }
              },
              worksheet: {
                id: 'ws_solid_l1',
                titleEn: 'Solved Worksheet: 3D Coordinates & Sphere Geometry',
                titleAr: 'ورقة عمل محلولة: الإحداثيات الفراغية ومعادلات الكرة',
                descriptionEn: 'Official Egyptian Ministry Thanaweya Amma questions on spheres and 3D vectors.',
                descriptionAr: 'أسئلة امتحانات وزارة التربية والتعليم المصرية على الكرة والمتجهات.',
                estimatedTimeMinutes: 45,
                problems: [
                  {
                    id: 'p4',
                    titleEn: 'Thanaweya Amma Exam Problem 4 (Sphere Tangent to Plane)',
                    titleAr: 'مسألة امتحان ثانوية عامة ٤ (كرة تمس مستوى إحداثي)',
                    difficulty: 'exam_standard',
                    diagramType: 'solid_geometry_sphere',
                    questionEn: 'If the sphere $(x - 2)^2 + (y + 3)^2 + (z - 4)^2 = k$ touches the $XY$-plane, find the value of $k$.',
                    questionAr: 'إذا كانت الكرة $(x - 2)^2 + (y + 3)^2 + (z - 4)^2 = k$ تمس المستوى $XY$ (س ص)، فاحسب قيمة الكاف $k$.',
                    optionsEn: ['4', '9', '16', '25'],
                    optionsAr: ['٤', '٩', '١٦', '٢٥'],
                    correctAnswer: '16',
                    correctIndex: 2,
                    hintEn: 'Distance from center to XY-plane is |z_center|. When sphere is tangent to XY-plane, R = |z_center|.',
                    hintAr: 'بعد المركز عن المستوى س ص هو |ع_المركز|. وعندما تمس الكرة المستوى س ص، فإن نق = |ع_المركز|.',
                    stepByStepSolutionEn: [
                      'Extract the center $C$ of the sphere from its standard equation:',
                      '$$C = (2, -3, 4)$$',
                      'The perpendicular distance from center $C(2, -3, 4)$ to the $XY$-plane is given by $|z| = |4| = 4$ units.',
                      'Since the sphere touches the $XY$-plane, its radius $R$ must equal this distance:',
                      '$$R = 4$$',
                      'In the standard sphere equation $(x-x_0)^2 + (y-y_0)^2 + (z-z_0)^2 = R^2$, the right hand side is $k = R^2$.',
                      'Therefore, $k = 4^2 = 16$.'
                    ],
                    stepByStepSolutionAr: [
                      'نستخرج مركز الكرة $C$ من المعادلة القياسية المعطاة:',
                      '$$C = (2, -3, 4)$$',
                      'البعد العمودي من المركز $C(2, -3, 4)$ إلى المستوى $XY$ (س ص) يساوي $|z| = |4| = 4$ وحدات طول.',
                      'بما أن الكرة تمس المستوى $XY$ (س ص)، إذن نصف قطرها $R$ يساوي هذا البعد مباشرة:',
                      '$$R = 4$$',
                      'في المعادلة القياسية للكرة، الطرف الأيمن يعبر عن $k = R^2$.',
                      'بالتالي فإن: $k = 4^2 = 16$.'
                    ],
                    teacherTipEn: 'Highlight all 3 cases: Tangent to XY -> R=|z|, Tangent to YZ -> R=|x|, Tangent to XZ -> R=|y|.',
                    teacherTipAr: 'ركز على الحالات الثلاث: تمس س ص -> نق=|ع|، تمس ص ع -> نق=|س|، تمس س ع -> نق=|ص|.'
                  },
                  {
                    id: 'p4_2',
                    titleEn: 'Foundation Problem: 3D Distance Formula',
                    titleAr: 'مسألة تأسيسية: قانون البعد في الفراغ ثلاثي الأبعاد',
                    difficulty: 'easy',
                    diagramType: 'distance_3d_box',
                    questionEn: 'Find the distance between the two points $A(2, -1, 3)$ and $B(5, 3, 3)$ in 3D Euclidean space.',
                    questionAr: 'أوجد البعد بين النقطتين $A(2, -1, 3)$ و $B(5, 3, 3)$ في الفراغ ثلاثي الأبعاد.',
                    optionsEn: ['5', '7', '\\sqrt{13}', '25'],
                    optionsAr: ['٥', '٧', '\\sqrt{13}', '٢٥'],
                    correctAnswer: '5',
                    correctIndex: 0,
                    hintEn: 'Apply the 3D distance formula: $d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2 + (z_2 - z_1)^2}$.',
                    hintAr: 'طبق قانون البعد في الفراغ: $d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2 + (z_2 - z_1)^2}$.',
                    stepByStepSolutionEn: [
                      'Apply the 3D Euclidean distance formula:',
                      '$$AB = \\sqrt{(5 - 2)^2 + (3 - (-1))^2 + (3 - 3)^2}$$',
                      '$$AB = \\sqrt{3^2 + 4^2 + 0^2} = \\sqrt{9 + 16 + 0} = \\sqrt{25} = 5\\text{ length units}$$'
                    ],
                    stepByStepSolutionAr: [
                      'بتطبيق قانون البعد بين نقطتين في الفراغ:',
                      '$$AB = \\sqrt{(5 - 2)^2 + (3 - (-1))^2 + (3 - 3)^2}$$',
                      '$$AB = \\sqrt{3^2 + 4^2 + 0} = \\sqrt{9 + 16} = \\sqrt{25} = 5\\text{ وحدات طول}$$'
                    ],
                    teacherTipEn: 'Ensure students watch out for double negatives when subtracting negative coordinates: 3 - (-1) = 4.',
                    teacherTipAr: 'نبه الطلاب للتعامل الصحيح مع الإشارات السالبة: ٣ - (-١) = ٤.'
                  },
                  {
                    id: 'p4_3',
                    titleEn: 'HOTS Problem: Center & Radius from General Sphere Equation',
                    titleAr: 'مسألة مهارات عليا: مركز ونصف قطر الكرة من الصورة العامة',
                    difficulty: 'hots',
                    diagramType: 'sphere_general_center_radius',
                    questionEn: 'Find the center $C$ and radius $R$ of the sphere whose general equation is: $$x^2 + y^2 + z^2 - 4x + 6y - 8z - 7 = 0$$',
                    questionAr: 'أوجد إحداثيات المركز $C$ وطول نصف القطر $R$ للكرة التي معادلها العامة هي: $$x^2 + y^2 + z^2 - 4x + 6y - 8z - 7 = 0$$',
                    optionsEn: [
                      'C(2, -3, 4),\\ R = 6',
                      'C(-2, 3, -4),\\ R = 6',
                      'C(2, -3, 4),\\ R = 36',
                      'C(-4, 6, -8),\\ R = \\sqrt{7}'
                    ],
                    optionsAr: [
                      'C(2, -3, 4)،\\ R = 6',
                      'C(-2, 3, -4)،\\ R = 6',
                      'C(2, -3, 4)،\\ R = 36',
                      'C(-4, 6, -8)،\\ R = \\sqrt{7}'
                    ],
                    correctAnswer: 'C(2, -3, 4),\\ R = 6',
                    correctIndex: 0,
                    hintEn: 'Center is $(-L, -M, -N)$ where $2L, 2M, 2N$ are coefficients of $x, y, z$. Radius $R = \\sqrt{L^2 + M^2 + N^2 - D}$.',
                    hintAr: 'المركز هو $(-L, -M, -N)$، ونصف القطر هو $R = \\sqrt{L^2 + M^2 + N^2 - D}$.',
                    stepByStepSolutionEn: [
                      'Compare with general equation: $x^2 + y^2 + z^2 + 2Lx + 2My + 2Nz + D = 0$:',
                      '$$2L = -4 \\implies L = -2$$',
                      '$$2M = 6 \\implies M = 3$$',
                      '$$2N = -8 \\implies N = -4$$',
                      'Constant term $D = -7$.',
                      'The Center is $C(-L, -M, -N) = (2, -3, 4)$.',
                      'The Radius $R = \\sqrt{L^2 + M^2 + N^2 - D}$:',
                      '$$R = \\sqrt{(-2)^2 + 3^2 + (-4)^2 - (-7)} = \\sqrt{4 + 9 + 16 + 7} = \\sqrt{36} = 6\\text{ units}$$'
                    ],
                    stepByStepSolutionAr: [
                      'بالمقارنة مع الصورة العامة: $x^2 + y^2 + z^2 + 2Lx + 2My + 2Nz + D = 0$:',
                      '$$2L = -4 \\implies L = -2$$',
                      '$$2M = 6 \\implies M = 3$$',
                      '$$2N = -8 \\implies N = -4$$',
                      'الحد المطلق $D = -7$.',
                      'إحداثيات المركز $C(-L, -M, -N) = (2, -3, 4)$.',
                      'طول نصف القطر $R = \\sqrt{L^2 + M^2 + N^2 - D}$:',
                      '$$R = \\sqrt{(-2)^2 + 3^2 + (-4)^2 - (-7)} = \\sqrt{4 + 9 + 16 + 7} = \\sqrt{36} = 6\\text{ وحدات طول}$$'
                    ],
                    teacherTipEn: 'Remind students to verify coefficients of x^2, y^2, z^2 are equal to 1 before reading L, M, N, and remember -D means -(-7) = +7.',
                    teacherTipAr: 'نبه الطلاب للتأكد من أن معاملات س²، ص²، ع² تساوي ١ قبل إيجاد ل، م، ن، والتنبيه على أن -د تعني -(-٧) = +٧.'
                  }
                ]
              },
              interactiveWidget: {
                type: '3d_vectors',
                titleEn: '3D Vector & Sphere Visualizer',
                titleAr: 'مختبر الهندسة الفراغية ومتجهات R³ التفاعلي',
                descriptionEn: 'Full 3D WebGL canvas to manipulate points, vectors u & v, dot products, cross products, and sphere radius in real time.',
                descriptionAr: 'شاشة ثلاثية الأبعاد تفاعلية لتحريك المتجهات والكرة وحساب الضرب القياسي والاتجاهي لحظياً.'
              }
            }
          ]
        }
      ]
    },
    {
      id: 'calculus',
      titleEn: 'Differential & Integral Calculus',
      titleAr: 'التفاضل والتكامل',
      categoryEn: 'Pure Mathematics',
      categoryAr: 'الرياضيات البحتة',
      iconName: 'Activity',
      colorGradient: 'from-emerald-600 to-teal-800',
      chapters: [
        {
          id: 'calc_ch1',
          chapterNumber: 1,
          titleEn: 'Differentiation of Trigonometric Functions & Higher Order Derivatives',
          titleAr: 'تفاضل الدوال المثلثية والمشتقات العليا',
          descriptionEn: 'Derivatives of sec(x), csc(x), cot(x), implicit differentiation, parametric differentiation, and higher order derivatives.',
          descriptionAr: 'اشتقاق ظا، قا، قتا، ظتا، الاشتقاق الضمني، الاشتقاق البارامتري، والمشتقات ذات الرتب العليا.',
          isFullyEquipped: true,
          lessons: [
            {
              id: 'calc_l1',
              titleEn: 'Derivatives of Trigonometric Functions',
              titleAr: 'اشتقاق الدوال المثلثية',
              summaryEn: 'Derivatives of sin, cos, tan, sec, csc, cot with chain rule applications.',
              summaryAr: 'قواعد اشتقاق جا، جتا، ظا، قا، قتا، ظتا مع تطبيقات قاعدة السلسلة.',
              theoryContentEn: `### 1. Derivatives of Basic Trigonometric Functions
For an angle function $u = f(x)$:
1. $\\frac{d}{dx} [\\sin(u)] = \\cos(u) \\cdot u'$
2. $\\frac{d}{dx} [\\cos(u)] = -\\sin(u) \\cdot u'$
3. $\\frac{d}{dx} [\\tan(u)] = \\sec^2(u) \\cdot u'$
4. $\\frac{d}{dx} [\\sec(u)] = \\sec(u) \\tan(u) \\cdot u'$
5. $\\frac{d}{dx} [\\csc(u)] = -\\csc(u) \\cot(u) \\cdot u'$
6. $\\frac{d}{dx} [\\cot(u)] = -\\csc^2(u) \\cdot u'$

### 2. Key Differentiation Theorems & Chain Rule:
- **Chain Rule for Powers of Functions:**
  $\\frac{d}{dx} [g(x)]^n = n [g(x)]^{n-1} \\cdot g'(x)$
  Example: $\\frac{d}{dx} [\\sec^3(2x)] = 3 \\sec^2(2x) \\cdot (\\sec(2x) \\tan(2x) \\cdot 2) = 6 \\sec^3(2x) \\tan(2x)$.

### 3. Periodic Nature of Higher-Order Derivatives:
The derivatives of $\\sin(ax)$ and $\\cos(ax)$ cycle with period 4:
$y = \\sin(ax) \\implies y^{(4k)} = a^{4k} \\sin(ax), \\quad y^{(4k+1)} = a^{4k+1} \\cos(ax)$

### 4. Geometric Meaning: Tangents and Normal Lines:
- Slope of tangent line at $(x_0, y_0)$ is $m = \\frac{dy}{dx} \\Big|_{(x_0, y_0)}$.
- Equation of Tangent Line: $y - y_0 = m (x - x_0)$.
- Equation of Normal Line: $y - y_0 = -\\frac{1}{m} (x - x_0)$ (for $m \\neq 0$).`,
              theoryContentAr: `### ١. مشتقات الدوال المثلثية الست الأساسية
لأي دالة في زاوية $u = f(x)$:
١. $\\frac{d}{dx} [\\sin(u)] = \\cos(u) \\cdot u'$ (مشتقة جا = جتا × مشتقة الزاوية)
٢. $\\frac{d}{dx} [\\cos(u)] = -\\sin(u) \\cdot u'$ (مشتقة جتا = -جا × مشتقة الزاوية)
٣. $\\frac{d}{dx} [\\tan(u)] = \\sec^2(u) \\cdot u'$ (مشتقة ظا = قا² × مشتقة الزاوية)
٤. $\\frac{d}{dx} [\\sec(u)] = \\sec(u) \\tan(u) \\cdot u'$ (مشتقة قا = قا ظا × مشتقة الزاوية)
٥. $\\frac{d}{dx} [\\csc(u)] = -\\csc(u) \\cot(u) \\cdot u'$ (مشتقة قتا = -قتا ظتا × مشتقة الزاوية)
٦. $\\frac{d}{dx} [\\cot(u)] = -\\csc^2(u) \\cdot u'$ (مشتقة ظتا = -قتا² × مشتقة الزاوية)

### ٢. قاعدة السلسلة ومشتقة قوى الدوال المثلثية:
- $\\frac{d}{dx} [g(x)]^n = n [g(x)]^{n-1} \\cdot g'(x)$
  مثال: مشتقة دالة $\\sec^3(2x)$ هي $3\\sec^2(2x) \\cdot (\\sec(2x)\\tan(2x) \\cdot 2) = 6\\sec^3(2x)\\tan(2x)$.

### ٣. الدورة الرباعية للمشتقات ذات الرتب العليا:
مشتقات دوال الجيب وجيب التمام تتكرر كل ٤ اشتقاقات متتالية:
$y = \\sin(ax) \\implies y^{(4k)} = a^{4k} \\sin(ax), \\quad y^{(4k+1)} = a^{4k+1} \\cos(ax)$

### ٤. التطبيقات الهندسية: معادلتا المماس والعمودي:
- ميل المماس عند نقطة التماس $(x_0, y_0)$ هو $m = \\frac{dy}{dx} \\Big|_{(x_0, y_0)}$.
- معادلة المماس: $y - y_0 = m (x - x_0)$.
- معادلة العمودي على المماس: $y - y_0 = -\\frac{1}{m} (x - x_0)$ (حيث $m \\neq 0$).`,
              formulas: [
                { labelEn: 'd/dx [sec u]', labelAr: 'مشتقة قا (س)', latex: '\\frac{d}{dx}[\\sec u] = \\sec u \\tan u \\cdot u\'' },
                { labelEn: 'd/dx [csc u]', labelAr: 'مشتقة قتا (س)', latex: '\\frac{d}{dx}[\\csc u] = -\\csc u \\cot u \\cdot u\'' },
                { labelEn: 'd/dx [cot u]', labelAr: 'مشتقة ظتا (س)', latex: '\\frac{d}{dx}[\\cot u] = -\\csc^2 u \\cdot u\'' }
              ],
              moeRef: {
                bookTitleEn: 'Ministry Calculus Textbook Grade 12',
                bookTitleAr: 'كتاب التفاضل والتكامل للصف الثالث الثانوي',
                grade: 'Grade 12',
                term: 'Full Year',
                officialCode: 'MOE-SEC3-CALC-CH1-L1',
                pageRange: 'pp. 2 - 16'
              },
              lessonPlan: {
                titleEn: 'Lesson Plan: Trigonometric Derivatives & Tangent Slopes',
                titleAr: 'خطة درس: تفاضل الدوال المثلثية وميل المماس',
                gradeLevel: 'Grade 12 Secondary',
                durationMinutes: 90,
                moeCode: 'MOE-SEC3-CALC-CH1-L1',
                bloomsObjectivesEn: [
                  'Derive sec, csc, cot derivatives from quotients of sin and cos.',
                  'Calculate slope of tangent line to trigonometric curves at given points.'
                ],
                bloomsObjectivesAr: [
                  'استنتاج مشتقات قا، قتا، ظتا باستخدام قسمة جا وجتا.',
                  'حساب ميل المماس للمنحنيات المثلثية عند نقط معطاة.'
                ],
                prerequisitesEn: ['Quotient rule of differentiation', 'Basic trig identities sin^2 + cos^2 = 1'],
                prerequisitesAr: ['قاعدة اشتقاق قسمة دالتين', 'المتطابقات المثلثية الأساسية'],
                keyVocabularyEn: [
                  { term: 'Tangent Slope', definition: 'First derivative dy/dx evaluated at point of contact (x0, y0).' }
                ],
                keyVocabularyAr: [
                  { term: 'ميل المماس', definition: 'قيمة المشتقة الأولى ص\' عند نقطة التماس (س٠، ص٠).' }
                ],
                teachingPacing: [
                  {
                    phaseEn: 'Proof & Derivatives (30 mins)',
                    phaseAr: 'الشرح والإثبات (٣٠ دقيقة)',
                    duration: '30 mins',
                    activitiesEn: 'Prove d/dx(sec x) = sec x tan x using quotient rule on 1/cos x.',
                    activitiesAr: 'إثبات اشتقاق قا س = قا س ظا س باستخدام قاعدة القسمة على ١/جتا س.'
                  }
                ],
                commonMisconceptionsEn: ['Forgetting negative signs for derivatives of co-functions (cos, csc, cot).'],
                commonMisconceptionsAr: ['نسيان الإشارة السالبة عند اشتقاق الدوال المبتدئة بحرف التاء (جتا، قتا، ظتا).'],
                differentiationEn: { struggling: 'Mnemonic: "Co" functions get minus sign!', advanced: 'Find nth derivative of sin(ax).' },
                differentiationAr: { struggling: 'قاعدة ذاكرة: أي دالة فيها (ت) مشتقتها فيها سالب!', advanced: 'إيجاد المشتقة ن لدالة جا(أ س).' },
                formativeAssessmentEn: 'Find $\\frac{dy}{dx}$ for $y = \\sec^3(2x)$.',
                formativeAssessmentAr: 'أوجد ص\' للدالة ص = قا³(٢س).',
                exitTicketQuestion: {
                  questionEn: 'Find the slope of tangent line to y = tan(x) + sec(x) at x = pi/4.',
                  questionAr: 'أوجد ميل المماس للمنحنى ص = ظا(س) + قا(س) عند س = باي/٤.',
                  solutionEn: '$\\frac{dy}{dx} = \\sec^2(x) + \\sec(x)\\tan(x)$. At $x = \\frac{\\pi}{4}$: $\\sec(\\frac{\\pi}{4}) = \\sqrt{2}$, $\\tan(\\frac{\\pi}{4}) = 1$. $\\frac{dy}{dx} = (\\sqrt{2})^2 + \\sqrt{2}(1) = 2 + \\sqrt{2}$.',
                  solutionAr: '$\\frac{dy}{dx} = \\sec^2(x) + \\sec(x)\\tan(x)$. عند $x = \\frac{\\pi}{4}$ نجد أن $\\sec(\\frac{\\pi}{4}) = \\sqrt{2}$ و $\\tan(\\frac{\\pi}{4}) = 1$. إذن $\\frac{dy}{dx} = (\\sqrt{2})^2 + \\sqrt{2}(1) = 2 + \\sqrt{2}$.'
                }
              },
              worksheet: {
                id: 'ws_calc_l1',
                titleEn: 'Solved Worksheet: Trig Derivatives',
                titleAr: 'ورقة عمل محلولة: تفاضل الدوال المثلثية',
                descriptionEn: 'Selected Thanaweya Amma problems.',
                descriptionAr: 'أسئلة امتحانات مختارة.',
                estimatedTimeMinutes: 40,
                problems: [
                  {
                    id: 'p5',
                    titleEn: 'Trig Derivative Problem (Higher Order & Chain Rule)',
                    titleAr: 'مسألة اشتقاق مثلثي (قاعدة السلسلة)',
                    difficulty: 'exam_standard',
                    diagramType: 'trig_derivative_tangent',
                    questionEn: 'If $y = \\csc(2x) - \\cot(2x)$, find the derivative $\\frac{dy}{dx}$ expressed in terms of $y$ and $x$.',
                    questionAr: 'إذا كان $y = \\csc(2x) - \\cot(2x)$، فأوجد المشتقة الأولى $\\frac{dy}{dx}$ بدلالة $y$ و $x$.',
                    optionsEn: ['y \\csc(2x)', '2y \\csc(2x)', '-2y \\cot(2x)', '2y \\sec(2x)'],
                    optionsAr: ['y \\csc(2x)', '2y \\csc(2x)', '-2y \\cot(2x)', '2y \\sec(2x)'],
                    correctAnswer: '2y \\csc(2x)',
                    correctIndex: 1,
                    hintEn: 'Differentiate term by term using chain rule, then substitute y into the factored result.',
                    hintAr: 'اشتق كل حد على حدة باستخدام قاعدة السلسلة، ثم عوض عن ص في الناتج بعد أخذ العامل المشترك.',
                    stepByStepSolutionEn: [
                      'Differentiate $y = \\csc(2x) - \\cot(2x)$ with respect to $x$:',
                      '$$\\frac{dy}{dx} = -2 \\csc(2x) \\cot(2x) - (-2 \\csc^2(2x))$$',
                      '$$\\frac{dy}{dx} = 2 \\csc^2(2x) - 2 \\csc(2x) \\cot(2x)$$',
                      'Take $2 \\csc(2x)$ as a common factor:',
                      '$$\\frac{dy}{dx} = 2 \\csc(2x) [\\csc(2x) - \\cot(2x)]$$',
                      'Since $y = \\csc(2x) - \\cot(2x)$, substitute $y$ back into the bracket:',
                      '$$\\frac{dy}{dx} = 2y \\csc(2x)$$'
                    ],
                    stepByStepSolutionAr: [
                      'باشتقاق الطرفين بالنسبة لـ س:',
                      '$$\\frac{dy}{dx} = -2 \\csc(2x) \\cot(2x) + 2 \\csc^2(2x)$$',
                      'بترتيب الحدود وأخذ $2 \\csc(2x)$ كعامل مشترك:',
                      '$$\\frac{dy}{dx} = 2 \\csc(2x) [\\csc(2x) - \\cot(2x)]$$',
                      'بما أن $y = \\csc(2x) - \\cot(2x)$، بالتعويض عن القوس بقيمة $y$:',
                      '$$\\frac{dy}{dx} = 2y \\csc(2x)$$'
                    ],
                    teacherTipEn: 'Remind students that angle derivative (2) multiplies the whole derivative!',
                    teacherTipAr: 'ذَكّر الطلاب أن مشتقة الزاوية (٢) تضرب في مشتقة الدالة نفسها!'
                  },
                  {
                    id: 'p5_2',
                    titleEn: 'Foundation Problem: Standard Secant Derivative',
                    titleAr: 'مسألة تأسيسية: اشتقاق دالة القاطع (قا)',
                    difficulty: 'easy',
                    diagramType: 'secant_derivative_graph',
                    questionEn: 'Find the first derivative of the function $f(x) = \\sec(3x)$.',
                    questionAr: 'أوجد المشتقة الأولى للدالة $f(x) = \\sec(3x)$.',
                    optionsEn: [
                      '\\sec(3x) \\tan(3x)',
                      '3\\sec^2(3x)',
                      '3\\sec(3x) \\tan(3x)',
                      '-3\\sec(3x) \\tan(3x)'
                    ],
                    optionsAr: [
                      '\\sec(3x) \\tan(3x)',
                      '3\\sec^2(3x)',
                      '3\\sec(3x) \\tan(3x)',
                      '-3\\sec(3x) \\tan(3x)'
                    ],
                    correctAnswer: '3\\sec(3x) \\tan(3x)',
                    correctIndex: 2,
                    hintEn: 'Remember: d/dx [sec(u)] = sec(u) tan(u) * du/dx.',
                    hintAr: 'تذكر أن: مشتقة قا(د(س)) = قا(د(س)) ظا(د(س)) × د\'(س).',
                    stepByStepSolutionEn: [
                      'Using the chain rule for secant functions:',
                      '$$\\frac{d}{dx}[\\sec(u)] = \\sec(u) \\tan(u) \\cdot \\frac{du}{dx}$$',
                      'Here $u = 3x \\implies \\frac{du}{dx} = 3$.',
                      'Therefore: $$f\'(x) = 3 \\sec(3x) \\tan(3x)$$'
                    ],
                    stepByStepSolutionAr: [
                      'باستخدام قاعدة السلسلة لاشتقاق دالة القاطع (قا):',
                      '$$\\frac{d}{dx}[\\sec(u)] = \\sec(u) \\tan(u) \\cdot \\frac{du}{dx}$$',
                      'هنا الزاوية $u = 3x$ ومشتقة الزاوية تساوي $3$.',
                      'إذن: $$f\'(x) = 3 \\sec(3x) \\tan(3x)$$'
                    ],
                    teacherTipEn: 'A very common student pitfall is forgetting to multiply by the coefficient of x inside the angle (3).',
                    teacherTipAr: 'الخطأ الشائع لدى الطلاب هو نسيان ضرب الناتج في معامل س (٣).'
                  },
                  {
                    id: 'p5_3',
                    titleEn: 'HOTS Problem: Second Derivative of Cotangent Function',
                    titleAr: 'مسألة مهارات عليا: المشتقة الثانية لدالة ظتا',
                    difficulty: 'hots',
                    diagramType: 'cotangent_curvature_graph',
                    questionEn: 'If $y = \\cot(\\pi x)$, find the value of the second derivative $\\frac{d^2 y}{dx^2}$ at $x = \\frac{1}{4}$.',
                    questionAr: 'إذا كانت $y = \\cot(\\pi x)$، فاحسب قيمة المشتقة الثانية $\\frac{d^2 y}{dx^2}$ عند $x = \\frac{1}{4}$.',
                    optionsEn: ['2\\pi^2', '-4\\pi^2', '4\\pi^2', '8\\pi^2'],
                    optionsAr: ['2\\pi^2', '-4\\pi^2', '4\\pi^2', '8\\pi^2'],
                    correctAnswer: '4\\pi^2',
                    correctIndex: 2,
                    hintEn: 'Find dy/dx first: -pi csc^2(pi x). Then differentiate using chain rule: d/dx [u^2] = 2u * u\'.',
                    hintAr: 'أوجد ص\' أولاً: -باي قتا²(باي س). ثم اشتقها باستخدام قاعدة القوس أو السلسلة.',
                    stepByStepSolutionEn: [
                      'First derivative $\\frac{dy}{dx}$:',
                      '$$\\frac{dy}{dx} = -\\pi \\csc^2(\\pi x)$$',
                      'Second derivative $\\frac{d^2 y}{dx^2}$ using chain rule on $[\\csc(\\pi x)]^2$:',
                      '$$\\frac{d^2 y}{dx^2} = -\\pi \\cdot 2 \\csc(\\pi x) \\cdot \\left(-\\pi \\csc(\\pi x) \\cot(\\pi x)\\right) = 2\\pi^2 \\csc^2(\\pi x) \\cot(\\pi x)$$',
                      'Evaluate at $x = \\frac{1}{4}$ where angle is $\\frac{\\pi}{4} = 45^\\circ$:',
                      '$$\\csc\\left(\\frac{\\pi}{4}\\right) = \\sqrt{2} \\implies \\csc^2\\left(\\frac{\\pi}{4}\\right) = 2$$',
                      '$$\\cot\\left(\\frac{\\pi}{4}\\right) = 1$$',
                      'Substitute these values:',
                      '$\\frac{d^2 y}{dx^2}\\Big|_{x = \\frac{1}{4}} = 2\\pi^2 (2)(1) = 4\\pi^2$'
                    ],
                    stepByStepSolutionAr: [
                      'المشتقة الأولى $\\frac{dy}{dx}$:',
                      '$$\\frac{dy}{dx} = -\\pi \\csc^2(\\pi x)$$',
                      'المشتقة الثانية $\\frac{d^2 y}{dx^2}$ باستخدام قاعدة مشتقة القوس على $[\\csc(\\pi x)]^2$:',
                      '$$\\frac{d^2 y}{dx^2} = -\\pi \\cdot 2 \\csc(\\pi x) \\cdot \\left(-\\pi \\csc(\\pi x) \\cot(\\pi x)\\right) = 2\\pi^2 \\csc^2(\\pi x) \\cot(\\pi x)$$',
                      'التعويض عند $x = \\frac{1}{4}$ حيث الزاوية هي $\\frac{\\pi}{4} = 45^\\circ$:',
                      '$$\\csc\\left(\\frac{\\pi}{4}\\right) = \\sqrt{2} \\implies \\csc^2\\left(\\frac{\\pi}{4}\\right) = 2$$',
                      '$$\\cot\\left(\\frac{\\pi}{4}\\right) = 1$$',
                      'بالتعويض في المشتقة الثانية:',
                      '$\\frac{d^2 y}{dx^2}\\Big|_{x = \\frac{1}{4}} = 2\\pi^2 (2)(1) = 4\\pi^2$'
                    ],
                    teacherTipEn: 'Notice the double negative from (-pi) and (-pi csc cot) which turns the second derivative positive!',
                    teacherTipAr: 'لاحظ أن ضرب إشارتي السالب (-باي) في (-باي قتا ظتا) يجعل المشتقة الثانية موجبة تماماً!'
                  }
                ]
              },
              interactiveWidget: {
                type: 'calculus_tangent',
                titleEn: 'Calculus Derivative & Secant-Tangent Visualizer',
                titleAr: 'محاكي خط التماس وميل المشتقة تفاعلياً',
                descriptionEn: 'Interactive visualizer showing secant slope converging to tangent slope dy/dx = lim h->0 [f(x+h)-f(x)]/h.',
                descriptionAr: 'عرض تفاعلي يبين اقتراب ميل القاطع من ميل المماس عند تناهي h للصفر.'
              }
            }
          ]
        }
      ]
    },
    {
      id: 'statics',
      titleEn: 'Statics (Applied Math)',
      titleAr: 'الاستاتيكا (الرياضيات التطبيقية)',
      categoryEn: 'Applied Mathematics',
      categoryAr: 'الرياضيات التطبيقية',
      iconName: 'Compass',
      colorGradient: 'from-amber-600 to-orange-800',
      chapters: [
        {
          id: 'stat_ch1',
          chapterNumber: 1,
          titleEn: 'Friction on Rough Planes',
          titleAr: 'الاحتكاك على السطوح الخشنة',
          descriptionEn: 'Friction force f_s, coefficient of static friction mu_s, angle of friction lambda, equilibrium of body on rough horizontal and inclined plane.',
          descriptionAr: 'قوة الاحتكاك السكوني ف_س، معامل الاحتكاك السكوني م_س، زاوية الاحتكاك ل، اتزان جسم على مستوى أفقي ومائل خشن.',
          isFullyEquipped: true,
          lessons: [
            {
              id: 'stat_l1',
              titleEn: 'Friction Force & Equilibrium on Rough Planes',
              titleAr: 'قوة الاحتكاك والتوازن على المستويات الخشنة',
              summaryEn: 'Understanding limiting static friction f_s = mu_s * R, resultant reaction R\' = R sqrt(1 + mu_s^2), and friction angle lambda.',
              summaryAr: 'فهم قوة الاحتكاك السكوني النهائي $F_s = \\mu_s R$، ورد الفعل المحصل $R\' = R\\sqrt{1 + \\mu_s^2} = R\\sec\\lambda$، وزاوية الاحتكاك $\\lambda$.',
              theoryContentEn: `### 1. Limiting Static Friction Force ($F_s$)
When a body rests on a rough plane under pulling force $P$, a resisting friction force $F$ arises opposing motion:
- As $P$ increases, $F$ increases until it reaches limiting static friction:
  $F_s = \\mu_s R$
  where $\\mu_s$ is the coefficient of static friction, and $R$ is the normal reaction perpendicular to the plane.

### 2. Resultant Reaction ($R'$):
The resultant of normal reaction $R$ and friction force $F_s$:
$R' = \\sqrt{R^2 + F_s^2} = R \\sqrt{1 + \\mu_s^2} = R \\sec(\\lambda)$

### 3. Angle of Friction ($\\lambda$):
The angle between normal reaction $R$ and resultant reaction $R'$ when friction is limiting:
$\\tan(\\lambda) = \\frac{F_s}{R} = \\mu_s$

### 4. Equilibrium on a Rough Inclined Plane (Angle $\\theta$):
When a body of weight $W$ is placed on a plane inclined at angle $\\theta$ to the horizontal:
1. **If $\\theta < \\lambda$:** The body is in complete static equilibrium and remains at rest ($F = W \\sin\\theta < F_s$).
2. **If $\\theta = \\lambda$:** The body is on the verge of sliding down the plane under its own weight alone.
3. **If $\\theta > \\lambda$:** The body slides downward and cannot remain at rest without an external supporting force.

### 5. Minimum Force Theorems:
- **Least force along line of greatest slope to prevent body from slipping down:**
  $P_1 = W (\\sin\\theta - \\mu_s \\cos\\theta)$
- **Least force along line of greatest slope to put body on verge of moving up:**
  $P_2 = W (\\sin\\theta + \\mu_s \\cos\\theta)$
- **Least force in any direction to move the body:**
  $P_{\\min} = W \\sin(\\theta + \\lambda)$`,
              theoryContentAr: `### ١. قوة الاحتكاك السكوني النهائي ($F_s$)
عند وضع جسم على سطح خشن والتأثير عليه بقوة شد $P$، تتولد قوة احتكاك سكوني $F$ تضاد اتجاه الحركة المحتملة:
- تزداد $F$ بتزايد $P$ حتى تبلغ قيمتها العظمى (الاحتكاك النهائي):
  $F_s = \\mu_s R$
  حيث $\\mu_s$ هو معامل الاحتكاك السكوني (خاصية للمادتين المتلامستين)، و $R$ هو رد الفعل العمودي على المستوى.

### ٢. رد الفعل المحصل ($R'$):
هو محصلة رد الفعل العمودي $R$ وقوة الاحتكاك النهائي $F_s$:
$R' = \\sqrt{R^2 + F_s^2} = R \\sqrt{1 + \\mu_s^2} = R \\sec(\\lambda)$

### ٣. زاوية الاحتكاك ($\\lambda$):
هي الزاوية المحصورة بين رد الفعل العمودي $R$ ورد الفعل المحصل $R'$ عندما يكون الاحتكاك نهائياً:
$\\tan(\\lambda) = \\frac{F_s}{R} = \\mu_s$

### ٤. شروط اتزان جسم على مستوى مائل خشن يميل بزاوية $\\theta$:
عند وضع جسم وزنه $W$ على مستوى خشن يميل على الأفقي بزاوية $\\theta$:
١. **إذا كان $\\theta < \\lambda$:** يستقر الجسم تماماً ويكون متزناً وتكون قوة الاحتكاك $F = W\\sin\\theta < F_s$.
٢. **إذا كان $\\theta = \\lambda$:** يكون الجسم على وشك الانزلاق لأسفل المستوى تحت تأثير وزنه فقط.
٣. **إذا كان $\\theta > \\lambda$:** ينزلق الجسم لأسفل ولا يستقر إلا بتأثير قوة خارجية تحفظ توازنه.

### ٥. قوانين أقل قوة لحفظ التوازن والتحريك:
- **أقل قوة في اتجاه خط أكبر ميل تمنع الجسم من الانزلاق:**
  $P_1 = W (\\sin\\theta - \\mu_s \\cos\\theta)$
- **أقل قوة في اتجاه خط أكبر ميل تجعل الجسم على وشك الحركة لأعلى:**
  $P_2 = W (\\sin\\theta + \\mu_s \\cos\\theta)$
- **أقل قوة بأي اتجاه تكفي لتحريك الجسم:**
  $P_{\\min} = W \\sin(\\theta + \\lambda)$`,
              formulas: [
                { labelEn: 'Limiting Friction Formula', labelAr: 'قانون الاحتكاك النهائي', latex: 'f_s = \\mu_s R' },
                { labelEn: 'Friction Angle Relation', labelAr: 'علاقة زاوية الاحتكاك', latex: '\\mu_s = \\tan(\\lambda)' },
                { labelEn: 'Resultant Reaction Formula', labelAr: 'رد الفعل المحصل', latex: 'R\' = R \\sec(\\lambda) = R \\sqrt{1 + \\mu_s^2}' }
              ],
              moeRef: {
                bookTitleEn: 'Ministry Statics Textbook Grade 12',
                bookTitleAr: 'كتاب الاستاتيكا للصف الثالث الثانوي - وزارة التربية والتعليم',
                grade: 'Grade 12',
                term: 'Full Year',
                officialCode: 'MOE-SEC3-STAT-CH1-L1',
                pageRange: 'pp. 2 - 22'
              },
              lessonPlan: {
                titleEn: 'Lesson Plan: Friction Mechanics & Vector Equilibrium',
                titleAr: 'خطة درس: ميكانيكا الاحتكاك والاتزان المتجهي',
                gradeLevel: 'Grade 12 Secondary',
                durationMinutes: 90,
                moeCode: 'MOE-SEC3-STAT-CH1-L1',
                bloomsObjectivesEn: [
                  'Analyze force equilibrium equations on horizontal and inclined rough planes.',
                  'Determine minimum force required to keep body on the verge of motion.'
                ],
                bloomsObjectivesAr: [
                  'تحليل معادلات اتزان القوى على المستويات الأفية والمائلة الخشنة.',
                  'حساب أقل قوة تجعل الجسم على وشك الحركة.'
                ],
                prerequisitesEn: ['Resolution of forces into perpendicular components', 'Lami\'s Theorem / Triangle of Forces'],
                prerequisitesAr: ['تحليل القوى في اتجاهين متعامدين', 'قاعدة لامي ومثلث القوى'],
                keyVocabularyEn: [
                  { term: 'Verge of Motion', definition: 'State where friction reaches limiting value f_s = mu_s * R.' }
                ],
                keyVocabularyAr: [
                  { term: 'على وشك الحركة', definition: 'الحالة التي تصل فيها قوة الاحتكاك لقيمتها العظمى ف_س = م_س × ر.' }
                ],
                teachingPacing: [
                  {
                    phaseEn: 'Physics & Statics Simulation (20 mins)',
                    phaseAr: 'محاكاة الفيزياء والاستاتيكا (٢٠ دقيقة)',
                    duration: '20 mins',
                    activitiesEn: 'Use interactive statics simulator showing body on rough inclined plane, adjusting angle theta and friction coefficient mu_s.',
                    activitiesAr: 'استخدام أداة المحاكاة التفاعلية لعرض جسم على مستوى مائل، مع تعديل زاوية الميل وثابت الاحتكاك.'
                  }
                ],
                commonMisconceptionsEn: ['Assuming friction force is always equal to mu_s * R even when motion is not impending!'],
                commonMisconceptionsAr: ['اعتقاد أن قوة الاحتكاك تساوي م_س × ر دائماً حتى لو لم يكن الجسم على وشك الحركة!'],
                differentiationEn: { struggling: 'Draw force resolution diagrams for weight components W sin(theta) and W cos(theta).', advanced: 'Prove minimum force P_min = W sin(theta + lambda).' },
                differentiationAr: { struggling: 'رسم مخطط تحليل قوة الوزن و كحتا(هـ) و و جا(هـ).', advanced: 'إثبات أن أقل قوة يلزم التأثير بها هي ق_أقل = و جا(هـ + ل).' },
                formativeAssessmentEn: 'A body of weight 20 N rests on rough horizontal plane with mu_s = 1/sqrt(3). Find horizontal force P to make it on verge of motion.',
                formativeAssessmentAr: 'جسم وزنه $20\text{ N}$ موضوع على مستوى أفقي خشن معامل احتكاكه $\\mu_s = \\frac{1}{\\sqrt{3}}$. أوجد القوة الأفقية $P$ لتجعل الجسم على وشك الحركة.',
                exitTicketQuestion: {
                  questionEn: 'Body of weight W rests on rough plane inclined at angle theta to horizontal. If angle of friction is lambda and theta = lambda, show body is on verge of sliding down.',
                  questionAr: 'جسم وزنه و موضوع على مستوى مائل خشن يميل على الأفقي بزاوية هـ. إذا كانت زاوية الاحتكاك ل وكانت هـ = ل، فأثبت أن الجسم يكون على وشك الانزلاق لأسفل.',
                  solutionEn: 'Force down plane = W sin(theta). Max friction up plane = mu_s * R = tan(lambda) * W cos(theta). Since theta = lambda: max friction = tan(theta) * W cos(theta) = sin(theta)/cos(theta) * W cos(theta) = W sin(theta). Since down force = max friction, body is on verge of motion down plane.',
                  solutionAr: 'مركبة الوزن لأسفل = و جا(هـ). الاحتكاك النهائي لأعلى = م_س × ر = ظا(ل) × و جتا(هـ). بما أن هـ = ل: الاحتكاك النهائي = ظا(هـ) × و جتا(هـ) = و جا(هـ). بما أن القوة المحركة = الاحتكاك النهائي، إذن الجسم على وشك الانزلاق.'
                }
              },
              worksheet: {
                id: 'ws_stat_l1',
                titleEn: 'Solved Worksheet: Friction Mechanics',
                titleAr: 'ورقة عمل محلولة: ميكانيكا الاحتكاك',
                descriptionEn: 'Past exam problems on friction.',
                descriptionAr: 'أسئلة امتحانات الاستاتيكا على الاحتكاك.',
                estimatedTimeMinutes: 45,
                problems: [
                  {
                    id: 'p6',
                    titleEn: 'Statics Friction Problem (Inclined Pull on Horizontal Plane)',
                    titleAr: 'مسألة احتكاك استاتيكا (قوة شد مائلة على مستوى أفقي)',
                    difficulty: 'exam_standard',
                    diagramType: 'statics_horizontal_friction',
                    questionEn: 'A body of weight $W = 30\\text{ N}$ rests on a rough horizontal plane. A force $P = 15\\text{ N}$ inclined at angle $30^\\circ$ above horizontal makes body on verge of motion. Find coefficient of static friction $\\mu_s$.',
                    questionAr: 'جسم وزنه $W = 30$ نيوتن موضوع على مستوى أفقي خشن. أثرت عليه قوة شد $P = 15$ نيوتن تميل لأعلى بزاوية $30^\\circ$ فجعلته على وشك الحركة. احسب معامل الاحتكاك السكوني $\\mu_s$.',
                    optionsEn: ['\\frac{1}{2}', '\\frac{\\sqrt{3}}{2}', '\\frac{\\sqrt{3}}{3}', '\\frac{3}{4}'],
                    optionsAr: ['\\frac{1}{2}', '\\frac{\\sqrt{3}}{2}', '\\frac{\\sqrt{3}}{3}', '\\frac{3}{4}'],
                    correctAnswer: '\\frac{\\sqrt{3}}{3}',
                    correctIndex: 2,
                    hintEn: 'Resolve force P into horizontal P cos(30) and vertical P sin(30). Set sum F_x = 0 and sum F_y = 0.',
                    hintAr: 'حلل القوة ق إلى ق جتا(٣٠) أفقياً و ق جا(٣٠) رأسياً. طبق معادلتي الاتزان.',
                    stepByStepSolutionEn: [
                      'Resolve pulling force $P = 15\\text{ N}$:',
                      'Horizontal component $= 15 \\cos(30^\\circ) = 15 \\cdot \\frac{\\sqrt{3}}{2} = 7.5\\sqrt{3}\\text{ N}$.',
                      'Vertical component $= 15 \\sin(30^\\circ) = 15 \\cdot 0.5 = 7.5\\text{ N}$.',
                      'Vertical Equilibrium ($\\sum F_y = 0$):',
                      '$$R + P \\sin(30^\\circ) = W \\implies R + 7.5 = 30 \\implies R = 22.5\\text{ N}$$',
                      'Horizontal Equilibrium at verge of motion ($\\sum F_x = 0$):',
                      '$$f_s = P \\cos(30^\\circ) \\implies \\mu_s R = 7.5\\sqrt{3}$$',
                      'Substitute $R = 22.5$:',
                      '$$\\mu_s (22.5) = 7.5\\sqrt{3} \\implies \\mu_s = \\frac{7.5\\sqrt{3}}{22.5} = \\frac{\\sqrt{3}}{3}$$'
                    ],
                    stepByStepSolutionAr: [
                      'تحليل قوة الشد $P = 15$ نيوتن:',
                      'المركبة الأفقية $= 15 \\cos(30^\\circ) = 7.5\\sqrt{3}$ نيوتن.',
                      'المركبة الرأسية $= 15 \\sin(30^\\circ) = 7.5$ نيوتن.',
                      'معادلة الاتزان الرأسي (\\sum F_y = 0):',
                      '$$R + 7.5 = 30 \\implies R = 22.5\\text{ نيوتن}$$',
                      'معادلة الاتزان الأفقي عندما يكون الجسم على وشك الحركة (\\sum F_x = 0):',
                      '$$\\mu_s R = 7.5\\sqrt{3} \\implies \\mu_s (22.5) = 7.5\\sqrt{3}$$',
                      '$$\\mu_s = \\frac{7.5\\sqrt{3}}{22.5} = \\frac{\\sqrt{3}}{3}$$'
                    ],
                    teacherTipEn: 'Do not forget that upward force component reduces the normal reaction R!',
                    teacherTipAr: 'لا تنسَ أن المركبة الرأسية للقوة لأعلى تقلل من قيمة رد الفعل العمودي ر!'
                  },
                  {
                    id: 'p6_2',
                    titleEn: 'Foundation Problem: Horizontal Friction Force',
                    titleAr: 'مسألة تأسيسية: قوة الاحتكاك الأفقية',
                    difficulty: 'easy',
                    diagramType: 'statics_horizontal_simple_friction',
                    questionEn: 'A body of weight $W = 40\\text{ N}$ rests on a rough horizontal plane where $\\mu_s = 0.25$. Find the horizontal force $P$ needed to put the body on the verge of motion.',
                    questionAr: 'جسم وزنه $W = 40$ نيوتن موضوع على مستوى أفقي خشن حيث معامل الاحتكاك السكوني $\\mu_s = 0.25$. احسب مقدار القوة الأفقية $P$ اللازمة لجعل الجسم على وشك الحركة.',
                    optionsEn: ['10\\text{ N}', '15\\text{ N}', '20\\text{ N}', '40\\text{ N}'],
                    optionsAr: ['١٠ نيوتن', '١٥ نيوتن', '٢٠ نيوتن', '٤٠ نيوتن'],
                    correctAnswer: '10\\text{ N}',
                    correctIndex: 0,
                    hintEn: 'On a horizontal plane with purely horizontal pulling force: Normal Reaction R = W. Limiting friction fs = mu_s * R.',
                    hintAr: 'على المستوى الأفقي مع قوة شد أفقية فقط: رد الفعل العمودي ر = و. قوة الاحتكاك النهائي ق_س = م_س × ر.',
                    stepByStepSolutionEn: [
                      'Since the pulling force is horizontal, vertical equilibrium gives:',
                      '$$R = W = 40\\text{ N}$$',
                      'At the verge of motion, the horizontal pulling force equals the limiting static friction:',
                      '$$P = f_s = \\mu_s R = 0.25 \\times 40 = 10\\text{ N}$$'
                    ],
                    stepByStepSolutionAr: [
                      'بما أن قوة الشد أفقية تماماً، إذن من معادلة الاتزان الرأسي:',
                      '$$R = W = 40\\text{ نيوتن}$$',
                      'عندما يكون الجسم على وشك الحركة، فإن القوة الأفقية تساوي قوة الاحتكاك السكوني النهائي:',
                      '$$P = f_s = \\mu_s R = 0.25 \\times 40 = 10\\text{ نيوتن}$$'
                    ],
                    teacherTipEn: 'A great starter question to verify students distinguish between normal reaction R and weight W.',
                    teacherTipAr: 'سؤال تأسيسي ممتاز للتأكد من استيعاب الطالب لمفهوم رد الفعل العمودي وقوة الاحتكاك النهائي.'
                  },
                  {
                    id: 'p6_3',
                    titleEn: 'HOTS Problem: Motion Up a Rough Inclined Plane',
                    titleAr: 'مسألة مهارات عليا: وشك الحركة لأعلى مستوى مائل خشن',
                    difficulty: 'hots',
                    diagramType: 'statics_inclined_friction',
                    questionEn: 'A body of weight $W = 20\\text{ N}$ is placed on a rough plane inclined at $30^\\circ$ to horizontal. If the coefficient of static friction $\\mu_s = \\frac{\\sqrt{3}}{2}$, find the least force $P$ acting along the line of greatest slope directed up the plane to put the body on the verge of moving up the plane.',
                    questionAr: 'جسم وزنه $W = 20$ نيوتن موضوع على مستوى مائل خشن يميل على الأفقي بزاوية $30^\\circ$. إذا كان معامل الاحتكاك السكوني $\\mu_s = \\frac{\\sqrt{3}}{2}$، فأوجد أقل قوة $P$ تؤثر في اتجاه خط أكبر ميل لأعلى وتجعل الجسم على وشك الحركة لأعلى المستوى.',
                    optionsEn: ['15\\text{ N}', '20\\text{ N}', '25\\text{ N}', '30\\text{ N}'],
                    optionsAr: ['١٥ نيوتن', '٢٠ نيوتن', '٢٥ نيوتن', '٣٠ نيوتن'],
                    correctAnswer: '25\\text{ N}',
                    correctIndex: 2,
                    hintEn: 'When body is on the verge of moving UP the plane, friction force fs acts DOWN the plane. Equilibrium: P = W sin(30) + fs.',
                    hintAr: 'عندما يكون الجسم على وشك الحركة لأعلى، تؤثر قوة الاحتكاك السكوني النهائي لأسفل المستوى: ق = و جا(٣٠) + ف_س.',
                    stepByStepSolutionEn: [
                      'Resolve the weight $W = 20\\text{ N}$ into perpendicular and parallel components to the inclined plane:',
                      'Perpendicular component: $R = W \\cos(30^\\circ) = 20 \\times \\frac{\\sqrt{3}}{2} = 10\\sqrt{3}\\text{ N}$.',
                      'Parallel component down the plane: $W \\sin(30^\\circ) = 20 \\times 0.5 = 10\\text{ N}$.',
                      'Since the body is on the verge of moving UP the plane, the limiting friction $f_s$ acts DOWN the plane:',
                      '$$f_s = \\mu_s R = \\left(\\frac{\\sqrt{3}}{2}\\right) \\cdot (10\\sqrt{3}) = \\frac{30}{2} = 15\\text{ N}$$',
                      'For equilibrium along the inclined plane directed upwards:',
                      '$$P = W \\sin(30^\\circ) + f_s = 10 + 15 = 25\\text{ N}$$'
                    ],
                    stepByStepSolutionAr: [
                      'تحليل قوة الوزن $W = 20$ نيوتن في اتجاهي المستوى والعمودي عليه:',
                      'المركبة العمودية على المستوى: $R = W \\cos(30^\\circ) = 20 \\times \\frac{\\sqrt{3}}{2} = 10\\sqrt{3}$ نيوتن.',
                      'مركبة الوزن في اتجاه خط أكبر ميل لأسفل: $W \\sin(30^\\circ) = 20 \\times 0.5 = 10$ نيوتن.',
                      'بما أن الجسم على وشك الحركة لأعلى، فإن قوة الاحتكاك النهائي $f_s$ تعمل لأسفل المستوى في اتجاه معاكس للحركة المتوقعة:',
                      '$$f_s = \\mu_s R = \\left(\\frac{\\sqrt{3}}{2}\\right) \\cdot (10\\sqrt{3}) = 15\\text{ نيوتن}$$',
                      'معادلة الاتزان في اتجاه خط أكبر ميل:',
                      '$$P = W \\sin(30^\\circ) + f_s = 10 + 15 = 25\\text{ نيوتن}$$'
                    ],
                    teacherTipEn: 'Key exam rule: Friction always opposes the intended direction of impending motion! (Verge of moving up => friction acts down).',
                    teacherTipAr: 'قاعدة امتحانية ذهبية: قوة الاحتكاك تعمل دائماً في عكس اتجاه الحركة الوشيكة (وشك الحركة لأعلى => الاحتكاك لأسفل).'
                  }
                ]
              },
              interactiveWidget: {
                type: 'statics_friction',
                titleEn: 'Statics Rough Inclined Plane Friction Simulator',
                titleAr: 'محاكي اتزان الجسم على مستوى مائل خشن',
                descriptionEn: 'Interactive simulator to test forces, friction cone, and verge of motion on inclined planes.',
                descriptionAr: 'محاكي تفاعلي لاختبار القوى ومخروط الاحتكاك وزاوية الميل.'
              }
            }
          ]
        }
      ]
    }
  ]
};
