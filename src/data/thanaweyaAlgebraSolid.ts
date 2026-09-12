import type { Branch } from '../types/curriculum';
import { algCh1SolvedExamples, algCh1Exercises } from './textbook/thanaweya/algCh1Textbook';
import { algCh1Databank } from './databanks/thanaweya/algCh1Databank';
import { algCh2SolvedExamples, algCh2Exercises } from './textbook/thanaweya/algCh2Textbook';
import { algCh2Databank } from './databanks/thanaweya/algCh2Databank';
import { algCh3SolvedExamples, algCh3Exercises } from './textbook/thanaweya/algCh3Textbook';
import { algCh3Databank } from './databanks/thanaweya/algCh3Databank';
import { solidCh1SolvedExamples, solidCh1Exercises } from './textbook/thanaweya/solidCh1Textbook';
import { solidCh1Databank } from './databanks/thanaweya/solidCh1Databank';
import { solidCh2SolvedExamples, solidCh2Exercises } from './textbook/thanaweya/solidCh2Textbook';
import { solidCh2Databank } from './databanks/thanaweya/solidCh2Databank';

export const thanaweyaAlgebraSolidBranch: Branch = {
  id: 'algebra_solid',
  titleEn: 'Algebra & Solid Geometry',
  titleAr: 'الجبر والهندسة الفراغية',
  categoryEn: 'Pure Mathematics',
  categoryAr: 'الرياضيات البحتة',
  iconName: 'Box',
  colorGradient: 'from-indigo-600 to-purple-800',
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
                descriptionEn: 'Explore rows of Pascal Triangle, test Pascal Identity $\\binom{n}{r} + \\binom{n}{r-1} = \\binom{n+1}{r}$, and generate binomial term expansions dynamically.',
                descriptionAr: 'استكشف صفوف مثلث باسكال، واختبر قانون الجمع، وتوليد مفكوك ذات الحدين تفاعلياً.'
              }
            },
            {
              id: 'alg_l2',
              titleEn: 'Binomial Theorem for Positive Integral Exponents',
              titleAr: 'نظرية ذات الحدين بأس صحيح موجب',
              summaryEn: 'Expansion of $(a + b)^n$, general term $T_{r+1}$, middle term determination, and coefficient properties.',
              summaryAr: 'مفكوك $(a + b)^n$، قانون الحد العام $T_{r+1}$، رتبة الحد الأوسط والحدين الأوسطين، وحساب مجموع المعاملات.',
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
          ],
          solvedExamples: algCh1SolvedExamples,
          exerciseProblems: algCh1Exercises,
          databank: algCh1Databank
        },
        {
          id: 'alg_ch2',
          chapterNumber: 2,
          titleEn: 'Complex Numbers & De Moivre\'s Theorem',
          titleAr: 'الأعداد المركبة ونظرية ديموافر',
          descriptionEn: 'Trigonometric and exponential (Euler) forms of complex numbers, modulus and principal argument, De Moivre\'s theorem, n-th roots of complex numbers, and the cube roots of unity omega.',
          descriptionAr: 'الصورة المثلثية والأسية (صيغة أويلر) للعدد المركب، المقياس والسعة الأساسية، نظرية ديموافر، الجذور النونية، والجذور التكعيبية للواحد الصحيح أوميجا وخواصها.',
          isFullyEquipped: true,
          lessons: [
            {
              id: 'alg_l3',
              titleEn: 'Trigonometric & Exponential Forms of Complex Numbers',
              titleAr: 'الصورة المثلثية والأسية للعدد المركب',
              summaryEn: 'Modulus $r = |z| = \\sqrt{x^2 + y^2}$, principal argument $\\theta \\in (-\\pi, \\pi]$, trigonometric form $z = r(\\cos\\theta + i\\sin\\theta)$, Euler exponential form $z = r e^{i\\theta}$, multiplication, and division.',
              summaryAr: 'المقياس $r = |z| = \\sqrt{x^2 + y^2}$، والسعة الأساسية $\\theta \\in (-\\pi, \\pi]$، الصورة المثلثية $z = r(\\cos\\theta + i\\sin\\theta)$، والصورة الأسية لأويلر $z = r e^{i\\theta}$، وقواعد الضرب والقسمة.',
              theoryContentEn: `### 1. Modulus and Principal Argument of a Complex Number:
Let $z = x + i y$ be a complex number represented in the Argand plane by point $(x, y)$:
- **Modulus (المقياس):**
  $$r = |z| = \\sqrt{x^2 + y^2} \\quad (r \\ge 0)$$
- **Principal Argument (السعة الأساسية $\\theta = \\text{Arg}(z)$):**
  $$\\theta \\in (-\\pi, \\, \\pi] \\quad \\text{or} \\quad -180^\\circ < \\theta \\le 180^\\circ$$
  - **Quadrant Determination:**
    1. **1st Quadrant ($x > 0, y > 0$):** $\\theta = \\alpha = \\tan^{-1}\\left(\\frac{y}{x}\\right)$
    2. **2nd Quadrant ($x < 0, y > 0$):** $\\theta = \\pi - \\alpha = 180^\\circ - \\alpha$
    3. **3rd Quadrant ($x < 0, y < 0$):** $\\theta = -(\\pi - \\alpha) = -180^\\circ + \\alpha$
    4. **4th Quadrant ($x > 0, y < 0$):** $\\theta = -\\alpha$

### 2. Standard Forms of a Complex Number:
1. **Cartesian Form (الصورة الجبرية):** $z = x + i y$
2. **Trigonometric (Polar) Form (الصورة المثلثية القياسية):**
   $$z = r (\\cos\\theta + i \\sin\\theta)$$
   *(Must have positive $r$, plus sign between terms, and cosine followed by sine!)*
3. **Exponential / Euler Form (الصورة الأسية لأويلر):**
   $$z = r e^{i \\theta} \\quad (\\text{where } \\theta \\text{ is in radians})$$

### 3. Multiplication and Division Theorems:
Let $z_1 = r_1 e^{i \\theta_1}$ and $z_2 = r_2 e^{i \\theta_2}$:
- **Multiplication:** Moduli multiply, arguments add:
  $$z_1 z_2 = r_1 r_2 [\\cos(\\theta_1 + \\theta_2) + i \\sin(\\theta_1 + \\theta_2)] = r_1 r_2 e^{i(\\theta_1 + \\theta_2)}$$
- **Division:** Moduli divide, arguments subtract:
  $$\\frac{z_1}{z_2} = \\frac{r_1}{r_2} [\\cos(\\theta_1 - \\theta_2) + i \\sin(\\theta_1 - \\theta_2)] = \\frac{r_1}{r_2} e^{i(\\theta_1 - \\theta_2)}$$

### 4. Conjugate and Pure Real / Imaginary Numbers:
- Conjugate $\\bar{z} = x - i y = r [\\cos(-\\theta) + i \\sin(-\\theta)] = r e^{-i \\theta}$.
- Modulus relation: $|z| = |\\bar{z}| = |-z|$, and $z \\bar{z} = |z|^2 = r^2$.
- Purely Real: $\\theta = 0$ (if positive) or $\\theta = \\pi$ (if negative).
- Purely Imaginary: $\\theta = \\frac{\\pi}{2}$ (for $+i$) or $\\theta = -\\frac{\\pi}{2}$ (for $-i$).`,
              theoryContentAr: `### ١. مقياس وسعة العدد المركب:
إذا كان $z = x + i y$ عدداً مركباً يمثله في شكل أرجاند النقطة $(x, y)$:
- **المقياس (م):**
  $$r = |z| = \\sqrt{x^2 + y^2} \\quad (r \\ge 0)$$
- **السعة الأساسية ($\\theta$):**
  $$\\theta \\in (-\\pi, \\, \\pi] \\quad \\text{أي أن: } -180^\\circ < \\theta \\le 180^\\circ$$
  - **تحديد الزاوية حسب الربع:**
    ١. **الربع الأول ($x > 0, y > 0$):** $\\theta = \\alpha = \\tan^{-1}\\left(\\frac{y}{x}\\right)$
    ٢. **الربع الثاني ($x < 0, y > 0$):** $\\theta = 180^\\circ - \\alpha$
    ٣. **الربع الثالث ($x < 0, y < 0$):** $\\theta = -180^\\circ + \\alpha$
    ٤. **الربع الرابع ($x > 0, y < 0$):** $\\theta = -\\alpha$

### ٢. صور التعبير عن العدد المركب:
١. **الصورة الجبرية:** $z = x + i y$
٢. **الصورة المثلثية القياسية:**
   $$z = r (\\cos\\theta + i \\sin\\theta)$$
   *(شروط الصورة القياسية: $r > 0$، الزاويتان متساويتان، جتا هي الحقيقي وجا هي التخيلي، والإشارة بينهما موجبة)*
٣. **الصورة الأسية (صيغة أويلر):**
   $$z = r e^{i \\theta} \\quad (\\text{حيث } \\theta \\text{ بالتقدير الدائري})$$

### ٣. خواص الضرب والقسمة:
- **في حالة الضرب:** نضرب المقاييس ونجمع السعات:
  $$z_1 z_2 = r_1 r_2 [\\cos(\\theta_1 + \\theta_2) + i \\sin(\\theta_1 + \\theta_2)] = r_1 r_2 e^{i(\\theta_1 + \\theta_2)}$$
- **في حالة القسمة:** نقسم المقاييس ونطرح السعات:
  $$\\frac{z_1}{z_2} = \\frac{r_1}{r_2} [\\cos(\\theta_1 - \\theta_2) + i \\sin(\\theta_1 - \\theta_2)] = \\frac{r_1}{r_2} e^{i(\\theta_1 - \\theta_2)}$$

### ٤. مرافق العدد المركب والأعداد الخاصة:
- مرافق العدد: $\\bar{z} = r e^{-i\\theta} = r[\\cos(-\\theta) + i\\sin(-\\theta)]$
- سعة المرافق $= -\\text{سعة}(z)$
- الأعداد الحقيقية والتخيلية البحتة:
  - $1 = \\cos 0 + i \\sin 0 = e^{i \\cdot 0}$
  - $-1 = \\cos \\pi + i \\sin \\pi = e^{i \\pi}$
  - $i = \\cos\\frac{\\pi}{2} + i \\sin\\frac{\\pi}{2} = e^{i \\pi / 2}$
  - $-i = \\cos\\left(-\\frac{\\pi}{2}\\right) + i \\sin\\left(-\\frac{\\pi}{2}\\right) = e^{-i \\pi / 2}$`,
              formulas: [
                { labelEn: 'Complex Modulus Formula', labelAr: 'مقياس العدد المركب', latex: 'r = |z| = \\sqrt{x^2 + y^2}' },
                { labelEn: 'Trigonometric Form', labelAr: 'الصورة المثلثية القياسية', latex: 'z = r(\\cos\\theta + i\\sin\\theta)' },
                { labelEn: 'Euler Exponential Form', labelAr: 'الصورة الأسية لأويلر', latex: 'z = r e^{i\\theta}' },
                { labelEn: 'Product of Arguments', labelAr: 'سعة حاصل الضرب', latex: '\\text{Arg}(z_1 z_2) = \\text{Arg}(z_1) + \\text{Arg}(z_2)' }
              ],
              moeRef: {
                bookTitleEn: 'Ministry Algebra Textbook Grade 12',
                bookTitleAr: 'كتاب الجبر والهندسة الفراغية للصف الثالث الثانوي - وزارة التربية والتعليم',
                grade: 'Grade 12',
                term: 'Full Year',
                officialCode: 'MOE-SEC3-ALG-CH2-L1',
                pageRange: 'pp. 45 - 68'
              },
              lessonPlan: {
                titleEn: 'Lesson Plan: Complex Polar Representation & Euler\'s Identity',
                titleAr: 'خطة درس: التمثيل القطبي والصورة الأسية للأعداد المركبة',
                gradeLevel: 'Grade 12 Secondary',
                durationMinutes: 90,
                moeCode: 'MOE-SEC3-ALG-CH2-L1',
                bloomsObjectivesEn: [
                  'Convert complex numbers between Cartesian, trigonometric, and Euler exponential forms.',
                  'Determine the principal argument theta in the interval (-pi, pi].',
                  'Perform multiplication and division on polar and exponential forms.'
                ],
                bloomsObjectivesAr: [
                  'التحويل بين الصور الجبرية والمثلثية والأسية للأعداد المركبة.',
                  'تحديد السعة الأساسية بدقة داخل الفترة (-باي، باي].',
                  'إجراء عمليتي الضرب والقسمة بالصور القطبية والأسية.'
                ],
                prerequisitesEn: ['Trigonometric values of special angles', 'Cartesian coordinates in the Argand plane'],
                prerequisitesAr: ['النسب المثلثية للزوايا الخاصة', 'مستوى أرجاند والإحداثيات الكارتيزية'],
                keyVocabularyEn: [
                  { term: 'Modulus', definition: 'Distance r from origin to the complex point in Argand diagram.' },
                  { term: 'Principal Argument', definition: 'Angle theta from positive real axis satisfying -pi < theta <= pi.' },
                  { term: 'Euler\'s Formula', definition: 'e^(i theta) = cos(theta) + i sin(theta).' }
                ],
                keyVocabularyAr: [
                  { term: 'المقياس', definition: 'المسافة ر من نقطة الأصل إلى النقطة التي تمثل العدد في شكل أرجاند.' },
                  { term: 'السعة الأساسية', definition: 'الزاوية هـ المقاسة من الاتجاه الموجب لمحور السينات بحيث تنتمي لـ (-باي، باي].' },
                  { term: 'صيغة أويلر', definition: 'هـ^(ت هـ) = جتا(هـ) + ت جا(هـ).' }
                ],
                teachingPacing: [
                  {
                    phaseEn: 'Argand Plane Visualization (20 mins)',
                    phaseAr: 'التمثيل في شكل أرجاند (٢٠ دقيقة)',
                    duration: '20 mins',
                    activitiesEn: 'Plot complex numbers in 4 quadrants and verify principal arguments using the quadrant rules.',
                    activitiesAr: 'تمثيل أعداد في الأرباع الأربعة وتطبيق قواعد حساب السعة الأساسية لكل ربع.'
                  },
                  {
                    phaseEn: 'Converting Non-Standard Trig Forms (30 mins)',
                    phaseAr: 'تعديل الصور المثلثية غير القياسية (٣٠ دقيقة)',
                    duration: '30 mins',
                    activitiesEn: 'Practice converting expressions like z = -2(cos 30 - i sin 30) into authentic standard forms.',
                    activitiesAr: 'تدريب الطلاب على تعديل الصور غير القياسية التي تحتوي على إشارات سالبة أو تبديل بين الجا والجتا.'
                  },
                  {
                    phaseEn: 'Euler Form Operations (25 mins)',
                    phaseAr: 'العمليات بالصورة الأسية (٢٥ دقيقة)',
                    duration: '25 mins',
                    activitiesEn: 'Show that multiplication and division are trivialized when using exponential indices e^(i theta).',
                    activitiesAr: 'بيان سهولة الضرب والقسمة بالصورة الأسية باستخدام قوانين جمع وطرح الأسس.'
                  },
                  {
                    phaseEn: 'Exit Ticket (15 mins)',
                    phaseAr: 'بطاقة الخروج (١٥ دقيقة)',
                    duration: '15 mins',
                    activitiesEn: 'Administer individual problem converting a non-standard complex number to Euler form.',
                    activitiesAr: 'حل مسألة بطاقة الخروج لتحويل عدد مركب غير قياسي إلى صورة أويلر الأسية.'
                  }
                ],
                commonMisconceptionsEn: [
                  'Leaving the argument outside the range (-pi, pi] such as writing theta = 300 deg instead of -60 deg.',
                  'Forgetting that modulus r must be strictly positive in standard trigonometric form.'
                ],
                commonMisconceptionsAr: [
                  'ترك السعة خارج الفترة (-باي، باي] مثل كتابة ٣٠٠° بدلاً من -٦٠°.',
                  'نسيان أن المقياس ر يجب أن يكون موجباً دائماً في الصورة المثلثية القياسية.'
                ],
                differentiationEn: {
                  struggling: 'Provide an Argand quadrant quadrant-sign template for quick angle reference.',
                  advanced: 'Prove Euler\'s identity e^(i pi) + 1 = 0 using Maclaurin power series for e^x, cos(x), and sin(x).'
                },
                differentiationAr: {
                  struggling: 'استخدام مخطط أرجاند الملون بالأرباع الأربعة كمرجع لحساب الزاوية.',
                  advanced: 'إثبات متطابقة أويلر هـ^(ت باي) + ١ = ٠ باستخدام متسلسلات ماكلورين.'
                },
                formativeAssessmentEn: 'Find modulus and principal argument of z = -1 - i sqrt(3).',
                formativeAssessmentAr: 'أوجد المقياس والسعة الأساسية للعدد $z = -1 - i\\sqrt{3}$.',
                exitTicketQuestion: {
                  questionEn: 'Express z = -2(sin 30 + i cos 30) in standard trigonometric form.',
                  questionAr: 'ضع العدد $z = -2(\\sin 30^\\circ + i \\cos 30^\\circ)$ في الصورة المثلثية القياسية.',
                  solutionEn: 'First, inside bracket: sin 30 = cos 60, cos 30 = sin 60 => z = -2(cos 60 + i sin 60). Incorporate the negative sign (-1 = e^(i pi)): theta = 60 - 180 = -120 degrees (-2pi/3). Thus z = 2[cos(-120) + i sin(-120)].',
                  solutionAr: 'داخل القوس: جا ٣٠ = جتا ٦٠، جتا ٣٠ = جا ٦٠ => ع = -٢ (جتا ٦٠ + ت جا ٦٠). إدخال إشارة السالب: هـ = ٦٠ - ١٨٠ = -١٢٠° (-٢باي/٣). إذن الصورة القياسية هي $z = 2[\\cos(-120^\\circ) + i \\sin(-120^\\circ)]$.'
                }
              },
              worksheet: {
                id: 'ws_alg_l3',
                titleEn: 'Solved Worksheet: Complex Numbers Polar & Euler Forms',
                titleAr: 'ورقة عمل محلولة: الصور القطبية والأسية للأعداد المركبة',
                descriptionEn: 'Exam standard problems on finding modulus, principal argument, and converting non-standard forms.',
                descriptionAr: 'مسائل امتحانات الثانوية العامة على المقياس والسعة الأساسية وصيغة أويلر.',
                estimatedTimeMinutes: 45,
                problems: [
                  {
                    id: 'p_alg_comp1',
                    titleEn: 'Exam Standard: Principal Argument of a Non-Standard Trig Form',
                    titleAr: 'مسألة امتحانية: تعيين السعة الأساسية لصورة غير قياسية',
                    difficulty: 'exam_standard',
                    questionEn: 'Find the principal argument $\\theta$ of the complex number $z = \\sin\\left(\\frac{\\pi}{3}\\right) - i \\cos\\left(\\frac{\\pi}{3}\\right)$.',
                    questionAr: 'أوجد السعة الأساسية $\\theta$ للعدد المركب $z = \\sin\\left(\\frac{\\pi}{3}\\right) - i \\cos\\left(\\frac{\\pi}{3}\\right)$.',
                    optionsEn: ['-\\frac{\\pi}{6}', '-\\frac{\\pi}{3}', '\\frac{2\\pi}{3}', '-\\frac{5\\pi}{6}'],
                    optionsAr: ['-\\frac{\\pi}{6}', '-\\frac{\\pi}{3}', '\\frac{2\\pi}{3}', '-\\frac{5\\pi}{6}'],
                    correctAnswer: '-\\frac{\\pi}{6}',
                    correctIndex: 0,
                    hintEn: 'Convert to Cartesian values first: sin(pi/3) = sqrt(3)/2 and cos(pi/3) = 1/2. Point is in the 4th quadrant.',
                    hintAr: 'حول إلى الصورة الجبرية أولاً: جا(٦٠) = جذر٣ / ٢، وجتا(٦٠) = ١/٢. النقطة تقع في الربع الرابع.',
                    stepByStepSolutionEn: [
                      '1. Evaluate the trigonometric values:',
                      '$$\\sin\\left(\\frac{\\pi}{3}\\right) = \\frac{\\sqrt{3}}{2}, \\quad \\cos\\left(\\frac{\\pi}{3}\\right) = \\frac{1}{2}$$',
                      '$$z = \\frac{\\sqrt{3}}{2} - \\frac{1}{2}i$$',
                      '2. Locate the quadrant of $z$:',
                      '$x = \\frac{\\sqrt{3}}{2} > 0$ and $y = -\\frac{1}{2} < 0$, so $z$ lies in the **4th Quadrant**.',
                      '3. Compute the acute reference angle $\\alpha$:',
                      '$$\\tan\\alpha = \\frac{|y|}{|x|} = \\frac{1/2}{\\sqrt{3}/2} = \\frac{1}{\\sqrt{3}} \\implies \\alpha = 30^\\circ = \\frac{\\pi}{6}$$',
                      '4. In the 4th quadrant, the principal argument is:',
                      '$$\\theta = -\\alpha = -\\frac{\\pi}{6}\\text{ radians (or } -30^\\circ)$$',
                      'Thus $z = 1 \\left[\\cos\\left(-\\frac{\\pi}{6}\\right) + i \\sin\\left(-\\frac{\\pi}{6}\\right)\\right]$.'
                    ],
                    stepByStepSolutionAr: [
                      '١. التعويض بقيم النسب المثلثية:',
                      '$$\\sin\\left(\\frac{\\pi}{3}\\right) = \\frac{\\sqrt{3}}{2}, \\quad \\cos\\left(\\frac{\\pi}{3}\\right) = \\frac{1}{2}$$',
                      '$$z = \\frac{\\sqrt{3}}{2} - \\frac{1}{2}i$$',
                      '٢. تحديد ربع النقطة في مستوى أرجاند:',
                      'بما أن $x > 0$ و $y < 0$، إذن العدد يقع في **الربع الرابع**.',
                      '٣. زاوية الإسناد الحادة $\\alpha$:',
                      '$$\\tan\\alpha = \\frac{1/2}{\\sqrt{3}/2} = \\frac{1}{\\sqrt{3}} \\implies \\alpha = 30^\\circ = \\frac{\\pi}{6}$$',
                      '٤. السعة الأساسية في الربع الرابع:',
                      '$$\\theta = -\\alpha = -\\frac{\\pi}{6}$$'
                    ],
                    teacherTipEn: 'Converting to Cartesian numbers first is the safest and fastest way to avoid quadrant-conversion angle errors!',
                    teacherTipAr: 'التحويل إلى الصورة الجبرية أولاً هو الطريقة الأكثر أماناً وضماناً لتفادي أخطاء زوايا الأرباع.'
                  },
                  {
                    id: 'p_alg_comp2',
                    titleEn: 'Foundation Problem: Modulus and Argument Calculation',
                    titleAr: 'مسألة تأسيسية: حساب المقياس والسعة الأساسية',
                    difficulty: 'easy',
                    questionEn: 'Find the modulus $r$ and principal argument $\\theta$ of the complex number $z = -3 + 3i$.',
                    questionAr: 'أوجد المقياس $r$ والسعة الأساسية $\\theta$ للعدد المركب $z = -3 + 3i$.',
                    optionsEn: [
                      'r = 3\\sqrt{2}, \\quad \\theta = \\frac{3\\pi}{4}',
                      'r = 3\\sqrt{2}, \\quad \\theta = \\frac{\\pi}{4}',
                      'r = 6, \\quad \\theta = \\frac{3\\pi}{4}',
                      'r = 3\\sqrt{2}, \\quad \\theta = -\\frac{3\\pi}{4}'
                    ],
                    optionsAr: [
                      'ر = ٣ جذر٢، هـ = ٣باي / ٤',
                      'ر = ٣ جذر٢، هـ = باي / ٤',
                      'ر = ٦، هـ = ٣باي / ٤',
                      'ر = ٣ جذر٢، هـ = -٣باي / ٤'
                    ],
                    correctAnswer: 'r = 3\\sqrt{2}, \\quad \\theta = \\frac{3\\pi}{4}',
                    correctIndex: 0,
                    hintEn: 'r = sqrt((-3)^2 + 3^2). Since x < 0 and y > 0, point is in 2nd quadrant: theta = pi - pi/4 = 3pi/4.',
                    hintAr: 'المقياس ر = جذر(٩ + ٩) = ٣ جذر٢. وبما أن س سالب وص موجب فالعدد في الربع الثاني: هـ = ١٨٠ - ٤٥ = ١٣٥° = ٣باي/٤.',
                    stepByStepSolutionEn: [
                      '1. Compute modulus $r$:',
                      '$$r = \\sqrt{(-3)^2 + (3)^2} = \\sqrt{9 + 9} = \\sqrt{18} = 3\\sqrt{2}$$',
                      '2. Determine quadrant:',
                      '$x = -3 < 0$ and $y = 3 > 0$, so $z$ lies in the **2nd Quadrant**.',
                      '3. Compute reference angle $\\alpha$:',
                      '$$\\tan\\alpha = \\frac{|y|}{|x|} = \\frac{3}{3} = 1 \\implies \\alpha = 45^\\circ = \\frac{\\pi}{4}$$',
                      '4. Compute principal argument in 2nd quadrant:',
                      '$$\\theta = \\pi - \\alpha = \\pi - \\frac{\\pi}{4} = \\frac{3\\pi}{4}\\text{ radians (or } 135^\\circ)$$',
                      'Therefore, $z = 3\\sqrt{2} e^{i 3\\pi/4}$.'
                    ],
                    stepByStepSolutionAr: [
                      '١. حساب المقياس $r$:',
                      '$$r = \\sqrt{(-3)^2 + 3^2} = \\sqrt{18} = 3\\sqrt{2}$$',
                      '٢. تحديد الربع:',
                      'بما أن $x < 0$ و $y > 0$، إذن العدد في **الربع الثاني**.',
                      '٣. زاوية الإسناد:',
                      '$$\\tan\\alpha = \\frac{3}{3} = 1 \\implies \\alpha = 45^\\circ = \\frac{\\pi}{4}$$',
                      '٤. السعة الأساسية في الربع الثاني:',
                      '$$\\theta = 180^\\circ - 45^\\circ = 135^\\circ = \\frac{3\\pi}{4}$$'
                    ],
                    teacherTipEn: 'A textbook foundation problem that confirms mastery of quadrant angles.',
                    teacherTipAr: 'سؤال تأسيسي يثبت طريقة حساب المقياس والسعة في الربع الثاني.'
                  },
                  {
                    id: 'p_alg_comp3',
                    titleEn: 'HOTS Problem: Quotient of Exponential Forms with Conjugate',
                    titleAr: 'مسألة مهارات عليا: قسمة الأعداد المركبة بالصورة الأسية والمرافق',
                    difficulty: 'hots',
                    questionEn: 'If $z_1 = 2 e^{i \\pi / 6}$ and $z_2 = \\sqrt{3} - i$, find the exponential Euler form of the quotient $w = \\frac{z_1}{\\bar{z}_2}$.',
                    questionAr: 'إذا كان $z_1 = 2 e^{i \\pi / 6}$ و $z_2 = \\sqrt{3} - i$، فأوجد الصورة الأسية لأويلر لناتج القسمة $w = \\frac{z_1}{\\bar{z}_2}$.',
                    optionsEn: ['1', 'e^{i \\pi / 3}', 'e^{i \\cdot 0} = 1', '2 e^{i \\pi / 3}'],
                    optionsAr: ['١', 'هـ^(ت باي/٣)', 'هـ^٠ = ١', '٢ هـ^(ت باي/٣)'],
                    correctAnswer: '1',
                    correctIndex: 0,
                    hintEn: 'Convert z2 to exponential form: r = 2, theta = -pi/6 => z2 = 2 e^(-i pi/6). Then conjugate z2_bar = 2 e^(i pi/6).',
                    hintAr: 'حول ع٢ للصورة الأسية: ر = ٢، هـ = -باي/٦ => ع٢ = ٢ هـ^(-ت باي/٦). إذن المرافق = ٢ هـ^(ت باي/٦).',
                    stepByStepSolutionEn: [
                      '1. Find the modulus and argument of $z_2 = \\sqrt{3} - i$:',
                      '$$r_2 = \\sqrt{(\\sqrt{3})^2 + (-1)^2} = \\sqrt{3 + 1} = 2$$',
                      '$x > 0$ and $y < 0$ (4th Quadrant), $\\tan\\alpha = \\frac{1}{\\sqrt{3}} \\implies \\alpha = \\frac{\\pi}{6}$.',
                      '$$\\theta_2 = -\\frac{\\pi}{6} \\implies z_2 = 2 e^{-i \\pi/6}$$',
                      '2. Find the conjugate $\\bar{z}_2$:',
                      '$$\\bar{z}_2 = \\sqrt{3} + i = 2 e^{i \\pi/6}$$',
                      '3. Compute the quotient $w = \\frac{z_1}{\\bar{z}_2}$:',
                      '$$w = \\frac{2 e^{i \\pi / 6}}{2 e^{i \\pi / 6}} = 1 = e^{i \\cdot 0}$$'
                    ],
                    stepByStepSolutionAr: [
                      '١. حساب الصورة الأسية للعدد $z_2 = \\sqrt{3} - i$:',
                      '$$r_2 = \\sqrt{3 + 1} = 2, \\quad \\theta_2 = -\\frac{\\pi}{6} \\implies z_2 = 2 e^{-i \\pi / 6}$$',
                      '٢. مرافق العدد $\\bar{z}_2$:',
                      '$$\\bar{z}_2 = 2 e^{i \\pi / 6}$$',
                      '٣. حساب خارج القسمة:',
                      '$$w = \\frac{2 e^{i \\pi / 6}}{2 e^{i \\pi / 6}} = 1$$'
                    ],
                    teacherTipEn: 'Notice that z1 and the conjugate of z2 are completely identical, yielding exactly 1!',
                    teacherTipAr: 'لاحظ بذكاء أن العدد ع١ ومرافق العدد ع٢ متطابقان تماماً، وبالتالي خارج القسمة يساوي ١!'
                  }
                ]
              },
              interactiveWidget: {
                type: 'complex_argand',
                titleEn: 'Complex Number Argand Plane & Vector Modulus Explorer',
                titleAr: 'مستكشف شكل أرجاند والمقياس والسعة للأعداد المركبة',
                descriptionEn: 'Interactive tool displaying complex numbers in Argand plane with modulus circle and argument vector rotation.',
                descriptionAr: 'محاكي تفاعلي لعرض العدد المركب في شكل أرجاند ودائرة المقياس وزاوية السعة.'
              }
            },
            {
              id: 'alg_l4',
              titleEn: "De Moivre's Theorem & Cube Roots of Unity ($\\omega$)",
              titleAr: 'نظرية ديموافر والجذور التكعيبية للواحد الصحيح (أوميجا)',
              summaryEn: 'De Moivre\'s theorem for integral and rational exponents, finding the $n$-th roots of complex numbers, and properties of the cube roots of unity $1, \\omega, \\omega^2$ with algebraic simplifications.',
              summaryAr: 'نظرية ديموافر للأسس الصحيحة والنسبية، إيجاد الجذور النونية للعدد المركب، وخواص الجذور التكعيبية للواحد الصحيح $1, \\omega, \\omega^2$ وتبسيط المقادير الجبرية.',
              theoryContentEn: `### 1. De Moivre's Theorem for Integral Exponents:
For any integer $n$:
$$[r(\\cos\\theta + i \\sin\\theta)]^n = r^n (\\cos n\\theta + i \\sin n\\theta)$$
In Euler exponential form:
$$(r e^{i \\theta})^n = r^n e^{i n \\theta}$$

### 2. The $n$-th Roots of a Complex Number:
For a positive integer $n$, the $n$ distinct roots of $z = r(\\cos\\theta + i\\sin\\theta)$ are given by:
$$z^{1/n} = r^{1/n} \\left[ \\cos\\left(\\frac{\\theta + 2k\\pi}{n}\\right) + i \\sin\\left(\\frac{\\theta + 2k\\pi}{n}\\right) \\right]$$
where $k = 0, 1, 2, \\dots, n - 1$.
- In Argand diagram, the $n$-th roots form vertices of a **regular polygon of $n$ sides** inscribed in a circle of radius $R = r^{1/n}$ centered at origin.

### 3. The Cube Roots of Unity ($1, \\omega, \\omega^2$):
Solving $z^3 = 1$:
$$1^{1/3} = \\cos\\left(\\frac{2k\\pi}{3}\\right) + i \\sin\\left(\\frac{2k\\pi}{3}\\right) \\quad (k = 0, 1, 2)$$
- $k = 0 \\implies z_1 = 1$
- $k = 1 \\implies z_2 = \\cos\\frac{2\\pi}{3} + i \\sin\\frac{2\\pi}{3} = -\\frac{1}{2} + \\frac{\\sqrt{3}}{2}i = \\omega$
- $k = 2 \\implies z_3 = \\cos\\frac{4\\pi}{3} + i \\sin\\frac{4\\pi}{3} = -\\frac{1}{2} - \\frac{\\sqrt{3}}{2}i = \\omega^2$

### 4. Fundamental Properties of $\\omega$:
1. $\\omega^3 = 1 \\implies \\omega^{3n + r} = \\omega^r$
2. $1 + \\omega + \\omega^2 = 0$
   - $1 + \\omega = -\\omega^2$
   - $1 + \\omega^2 = -\\omega$
   - $\\omega + \\omega^2 = -1$
3. $\\omega - \\omega^2 = \\pm i \\sqrt{3}$
4. $\\frac{1}{\\omega} = \\omega^2 \\quad \\text{and} \\quad \\frac{1}{\\omega^2} = \\omega$
5. $\\bar{\\omega} = \\omega^2 \\quad \\text{and} \\quad \\bar{\\omega^2} = \\omega$`,
              theoryContentAr: `### ١. نظرية ديموافر للأسس الصحيحة:
لأي عدد صحيح $n$:
$$[r(\\cos\\theta + i \\sin\\theta)]^n = r^n (\\cos n\\theta + i \\sin n\\theta)$$
وبالصورة الأسية لأويلر:
$$(r e^{i \\theta})^n = r^n e^{i n \\theta}$$

### ٢. الجذور النونية للعدد المركب:
لأي عدد صحيح موجب $n$، فإن الجذور النونية المختلفة للعدد $z = r(\\cos\\theta + i\\sin\\theta)$ تعطى بالقانون:
$$z^{1/n} = r^{1/n} \\left[ \\cos\\left(\\frac{\\theta + 2k\\pi}{n}\\right) + i \\sin\\left(\\frac{\\theta + 2k\\pi}{n}\\right) \\right]$$
حيث $k = 0, 1, 2, \\dots, n - 1$.
- في شكل أرجاند، تمثل الجذور النونية رؤوس **مضلع منتظم عدد أضلاعه $n$** مرسوم داخل دائرة نصف قطرها $r^{1/n}$ ومركزها نقطة الأصل.

### ٣. الجذور التكعيبية للواحد الصحيح ($1, \\omega, \\omega^2$):
بحل المعادلة $z^3 = 1$:
- الجذر الأول: $1$
- الجذر الثاني: $\\omega = -\\frac{1}{2} + \\frac{\\sqrt{3}}{2}i = e^{i 2\\pi / 3}$
- الجذر الثالث: $\\omega^2 = -\\frac{1}{2} - \\frac{\\sqrt{3}}{2}i = e^{-i 2\\pi / 3}$

### ٤. الخواص الجبرية الجوهرية لـ $\\omega$:
١. $\\omega^3 = 1 \\implies \\omega^{3n + r} = \\omega^r$
٢. $1 + \\omega + \\omega^2 = 0$ (مجموع الجذور التكعيبية للواحد الصحيح يساوي صفراً):
   - $1 + \\omega = -\\omega^2$
   - $1 + \\omega^2 = -\\omega$
   - $\\omega + \\omega^2 = -1$
٣. $\\omega - \\omega^2 = \\pm i \\sqrt{3}$
٤. $\\frac{1}{\\omega} = \\omega^2$ و $\\frac{1}{\\omega^2} = \\omega$
٥. مرافق $\\omega$ هو $\\omega^2$، ومرافق $\\omega^2$ هو $\\omega$`,
              formulas: [
                { labelEn: 'De Moivre\'s Theorem', labelAr: 'نص نظرية ديموافر', latex: '(\\cos\\theta + i\\sin\\theta)^n = \\cos n\\theta + i\\sin n\\theta' },
                { labelEn: 'N-th Roots of Complex Number', labelAr: 'قانون الجذور النونية', latex: 'z^{1/n} = r^{1/n} \\left[\\cos\\left(\\frac{\\theta + 2k\\pi}{n}\\right) + i\\sin\\left(\\frac{\\theta + 2k\\pi}{n}\\right)\\right]' },
                { labelEn: 'Cube Roots Sum Identity', labelAr: 'مجموع الجذور التكعيبية للواحد', latex: '1 + \\omega + \\omega^2 = 0' },
                { labelEn: 'Omega Subtraction Identity', labelAr: 'الفرق بين أوميجا وأوميجا تربيع', latex: '\\omega - \\omega^2 = \\pm i \\sqrt{3}' }
              ],
              moeRef: {
                bookTitleEn: 'Ministry Algebra Textbook Grade 12',
                bookTitleAr: 'كتاب الجبر والهندسة الفراغية للصف الثالث الثانوي - وزارة التربية والتعليم',
                grade: 'Grade 12',
                term: 'Full Year',
                officialCode: 'MOE-SEC3-ALG-CH2-L2',
                pageRange: 'pp. 69 - 95'
              },
              lessonPlan: {
                titleEn: 'Lesson Plan: De Moivre\'s Theorem, N-th Roots & Omega Algebra',
                titleAr: 'خطة درس: نظرية ديموافر وجذور الوحدة والأوميجا',
                gradeLevel: 'Grade 12 Secondary',
                durationMinutes: 90,
                moeCode: 'MOE-SEC3-ALG-CH2-L2',
                bloomsObjectivesEn: [
                  'Apply De Moivre\'s Theorem to compute high powers of complex numbers.',
                  'Determine all n-th roots of a complex number and locate them on a regular polygon in Argand diagram.',
                  'Simplify algebraic expressions involving cube roots of unity omega and omega squared.'
                ],
                bloomsObjectivesAr: [
                  'تطبيق نظرية ديموافر لحساب القوى العليا للأعداد المركبة.',
                  'تعيين الجذور النونية لعدد مركب وتمثيلها كرؤوس مضلع منتظم في شكل أرجاند.',
                  'تبسيط المقادير الجبرية المعقدة المحتوية على قوى الأوميجا.'
                ],
                prerequisitesEn: ['Trigonometric form of complex numbers', 'Solving polynomial equations'],
                prerequisitesAr: ['الصورة المثلثية للعدد المركب', 'حل المعادلات كثيرة الحدود'],
                keyVocabularyEn: [
                  { term: 'De Moivre\'s Theorem', definition: 'Formula raising polar complex numbers to integer and rational powers.' },
                  { term: 'Cube Roots of Unity', definition: 'The three numbers 1, omega, omega^2 satisfying z^3 = 1.' },
                  { term: 'Roots Regular Polygon', definition: 'The n vertices formed by n-th roots in the Argand plane.' }
                ],
                keyVocabularyAr: [
                  { term: 'نظرية ديموافر', definition: 'قاعدة رفع العدد المركب بالصورة القطبية لأسس صحيحة ونسبية.' },
                  { term: 'الجذور التكعيبية للواحد', definition: 'الأعداد الثلاثة ١، أوميجا، أوميجا² التي تحقق ع³ = ١.' },
                  { term: 'مضلع الجذور المنتظم', definition: 'المضلع المنتظم ذو ن ضلعاً المتكون من رؤوس الجذور النونية في شكل أرجاند.' }
                ],
                teachingPacing: [
                  {
                    phaseEn: 'De Moivre Derivation (20 mins)',
                    phaseAr: 'استنتاج نظرية ديموافر (٢٠ دقيقة)',
                    duration: '20 mins',
                    activitiesEn: 'Use mathematical induction and Euler\'s formula (e^(i theta))^n = e^(i n theta) to derive De Moivre\'s theorem.',
                    activitiesAr: 'استنتاج نظرية ديموافر باستخدام صيغة أويلر والاستقراء الرياضي.'
                  },
                  {
                    phaseEn: 'Solving N-th Roots Equations (30 mins)',
                    phaseAr: 'حل معادلات الجذور النونية (٣٠ دقيقة)',
                    duration: '30 mins',
                    activitiesEn: 'Solve z^4 = -16 and z^6 = 1, plotting root vertices on coordinate axes.',
                    activitiesAr: 'حل معادلات مثل ع⁴ = -١٦ وع⁶ = ١ وتمثيل الرؤوس بيانياً كمربع وسداسي منتظم.'
                  },
                  {
                    phaseEn: 'Mastering Omega Identities (25 mins)',
                    phaseAr: 'إتقان متطابقات الأوميجا (٢٥ دقيقة)',
                    duration: '25 mins',
                    activitiesEn: 'Train students on substituting 1 = omega^3 to simplify fractions with mismatched coefficients.',
                    activitiesAr: 'تدريب الطلاب على مهارة ضرب الحدود المطلقة في أوميجا³ لتوحيد المعاملات واختصار الكسور.'
                  },
                  {
                    phaseEn: 'Synthesis & Exit Ticket (15 mins)',
                    phaseAr: 'التلخيص وبطاقة الخروج (١٥ دقيقة)',
                    duration: '15 mins',
                    activitiesEn: 'Administer problem evaluating (1 - 1/omega + omega^2)^n.',
                    activitiesAr: 'حل بطاقة الخروج على تبسيط مقدار أوميجا معقد.'
                  }
                ],
                commonMisconceptionsEn: [
                  'Thinking omega - omega^2 is equal to i sqrt(3) only (it is +/- i sqrt(3)).',
                  'Forgetting that k must range from 0 to n - 1 (n distinct roots).'
                ],
                commonMisconceptionsAr: [
                  'اعتقاد أن أوميجا - أوميجا² تساوي ت جذر٣ فقط وإغفال إشارة (+ أو -).',
                  'نسيان أن ك تأخذ القيم من ٠ إلى ن - ١ للحصول على ن من الجذور المختلفة.'
                ],
                differentiationEn: {
                  struggling: 'Provide an omega identity substitution cheat-sheet: replace any pair sum with the negative of the third.',
                  advanced: 'Find the area of the polygon formed by the roots of z^n = a in terms of n and |a|.'
                },
                differentiationAr: {
                  struggling: 'استخدام قاعدة التعويض الذهبية للأوميجا: مجموع أي جذرين يساوي سالب الجذر الثالث دائماً.',
                  advanced: 'حساب مساحة المضلع المنتظم المتكون من جذور المعادلة ع^ن = أ بدلالة ن ومعيار أ.'
                },
                formativeAssessmentEn: 'Evaluate (1 + omega - omega^2)^3.',
                formativeAssessmentAr: 'احسب قيمة المقدار $(1 + \\omega - \\omega^2)^3$.',
                exitTicketQuestion: {
                  questionEn: 'Evaluate: (omega - omega^2)^4.',
                  questionAr: 'احسب قيمة المقدار: $(\\omega - \\omega^2)^4$.',
                  solutionEn: 'Since omega - omega^2 = +/- i sqrt(3), raising to the 4th power gives: (+/- i sqrt(3))^4 = i^4 * (sqrt(3))^4 = (1) * (9) = 9.',
                  solutionAr: 'بما أن أوميجا - أوميجا² = ± ت جذر٣، بالرفع للأس ٤: (± ت جذر٣)⁴ = ت⁴ × (جذر٣)⁴ = ١ × ٩ = ٩.'
                }
              },
              worksheet: {
                id: 'ws_alg_l4',
                titleEn: 'Solved Worksheet: De Moivre & Omega Algebra',
                titleAr: 'ورقة عمل محلولة: نظرية ديموافر وجذور الأوميجا',
                descriptionEn: 'Official Thanaweya Amma exam problems on De Moivre powers and algebraic simplifications with omega.',
                descriptionAr: 'مسائل امتحانات الثانوية العامة على نظرية ديموافر وتبسيط مقادير الأوميجا.',
                estimatedTimeMinutes: 45,
                problems: [
                  {
                    id: 'p_alg_comp4',
                    titleEn: 'Exam Standard: Omega Fraction Simplification via omega^3 Trick',
                    titleAr: 'مسألة امتحانية: تبسيط كسر أوميجا بضرب المعامل في أوميجا تكعيب',
                    difficulty: 'exam_standard',
                    questionEn: 'Simplify the algebraic expression: $$\\left( \\frac{5 + 3\\omega}{5\\omega^2 + 3} \\right)^6$$',
                    questionAr: 'احسب قيمة المقدار الجبري في أبسط صورة: $$\\left( \\frac{5 + 3\\omega}{5\\omega^2 + 3} \\right)^6$$',
                    optionsEn: ['1', '\\omega', '\\omega^2', '-1'],
                    optionsAr: ['١', '\\omega', '\\omega^2', '-١'],
                    correctAnswer: '1',
                    correctIndex: 0,
                    hintEn: 'Multiply the 5 in the numerator by omega^3 (= 1): 5 omega^3 + 3 omega = omega(5 omega^2 + 3).',
                    hintAr: 'اضرب الحد ٥ في البسط في أوميجا³ (التي تساوي ١): ٥ أوميجا³ + ٣ أوميجا = أوميجا (٥ أوميجا² + ٣).',
                    stepByStepSolutionEn: [
                      '1. Apply the fundamental identity $1 = \\omega^3$ to the constant term in numerator:',
                      '$$\\frac{5 + 3\\omega}{5\\omega^2 + 3} = \\frac{5\\omega^3 + 3\\omega}{5\\omega^2 + 3}$$',
                      '2. Factor out $\\omega$ in the numerator:',
                      '$$= \\frac{\\omega (5\\omega^2 + 3)}{5\\omega^2 + 3} = \\omega$$',
                      '3. Raise to the 6th power:',
                      '$$(\\omega)^6 = (\\omega^3)^2 = (1)^2 = 1$$'
                    ],
                    stepByStepSolutionAr: [
                      '١. استخدام مهارة ضرب الحد المطلق ٥ في البسط في $\\omega^3$:',
                      '$$\\frac{5 + 3\\omega}{5\\omega^2 + 3} = \\frac{5\\omega^3 + 3\\omega}{5\\omega^2 + 3}$$',
                      '٢. أخذ $\\omega$ عاملاً مشتركاً من البسط:',
                      '$$= \\frac{\\omega (5\\omega^2 + 3)}{5\\omega^2 + 3} = \\omega$$',
                      '٣. الرفع للأس ٦:',
                      '$$(\\omega)^6 = (\\omega^3)^2 = 1$$'
                    ],
                    teacherTipEn: 'A favorite Thanaweya exam shortcut! Always look for matching coefficients shifted by powers of omega.',
                    teacherTipAr: 'حيلة امتحانية عبقرية تتكرر في معظم اختبارات الثانوية العامة عند تشابه معاملات البسط والمقام.'
                  },
                  {
                    id: 'p_alg_comp5',
                    titleEn: 'Foundation Problem: High Power of Complex Number via De Moivre',
                    titleAr: 'مسألة تأسيسية: حساب القوى العليا بنظرية ديموافر',
                    difficulty: 'easy',
                    questionEn: 'Evaluate $(1 + i)^{10}$ using De Moivre\'s Theorem.',
                    questionAr: 'احسب قيمة المقدار $(1 + i)^{10}$ باستخدام نظرية ديموافر.',
                    optionsEn: ['32i', '-32i', '32', '-32'],
                    optionsAr: ['٣٢ ت', '-٣٢ ت', '٣٢', '-٣٢'],
                    correctAnswer: '32i',
                    correctIndex: 0,
                    hintEn: 'Convert 1 + i to polar form: r = sqrt(2), theta = pi/4. Then raise to power 10.',
                    hintAr: 'حول ١ + ت للصورة القطبية: ر = جذر٢، هـ = باي/٤. ثم ارفع للأس ١٠.',
                    stepByStepSolutionEn: [
                      '1. Express $1 + i$ in trigonometric form:',
                      '$$r = \\sqrt{1^2 + 1^2} = \\sqrt{2}, \\quad \\theta = \\frac{\\pi}{4}$$',
                      '$$1 + i = \\sqrt{2} \\left( \\cos\\frac{\\pi}{4} + i \\sin\\frac{\\pi}{4} \\right)$$',
                      "2. Apply De Moivre's Theorem for $n = 10$:",
                      '$$(1 + i)^{10} = (\\sqrt{2})^{10} \\left( \\cos\\left(10 \\times \\frac{\\pi}{4}\\right) + i \\sin\\left(10 \\times \\frac{\\pi}{4}\\right) \\right)$$',
                      '$$(\\sqrt{2})^{10} = 2^5 = 32$$',
                      '$$\\text{Angle} = \\frac{10\\pi}{4} = \\frac{5\\pi}{2} = 2\\pi + \\frac{\\pi}{2} \\equiv \\frac{\\pi}{2}$$',
                      '3. Evaluate trigonometric values at $\\frac{\\pi}{2}$:',
                      '$$\\cos\\frac{\\pi}{2} = 0, \\quad \\sin\\frac{\\pi}{2} = 1$$',
                      '$$(1 + i)^{10} = 32 (0 + i) = 32i$$'
                    ],
                    stepByStepSolutionAr: [
                      '١. تحويل العدد $1 + i$ للصورة القطبية:',
                      '$$r = \\sqrt{2}, \\quad \\theta = \\frac{\\pi}{4}$$',
                      '$$1 + i = \\sqrt{2} \\left(\\cos\\frac{\\pi}{4} + i \\sin\\frac{\\pi}{4}\\right)$$',
                      '٢. تطبيق نظرية ديموافر للأس ١٠:',
                      '$$(1 + i)^{10} = (\\sqrt{2})^{10} \\left(\\cos\\frac{10\\pi}{4} + i \\sin\\frac{10\\pi}{4}\\right)$$',
                      '$$(\\sqrt{2})^{10} = 32, \\quad \\frac{10\\pi}{4} = \\frac{5\\pi}{2} = 2\\pi + \\frac{\\pi}{2} \\equiv \\frac{\\pi}{2}$$',
                      '٣. حساب الناتج النهائي:',
                      '$$= 32 (0 + i(1)) = 32i$$'
                    ],
                    teacherTipEn: 'Remember to reduce large angles by subtracting multiples of 2pi (360 deg) to find the coterminal principal angle.',
                    teacherTipAr: 'تذكر دائماً طرح دورات كاملة (٢باي = ٣٦٠°) من الزوايا الكبيرة للوصول للزاوية المكافئة.'
                  },
                  {
                    id: 'p_alg_comp6',
                    titleEn: 'HOTS Problem: Solving Cubic Equation Involving Omega Cube Roots',
                    titleAr: 'مسألة مهارات عليا: حل معادلة تكعيبية باستخدام جذور الوحدة',
                    difficulty: 'hots',
                    questionEn: 'Find the solution set of the equation $(x - 2)^3 = 8$ in the set of complex numbers $\\mathbb{C}$.',
                    questionAr: 'أوجد مجموعة حل المعادلة $(x - 2)^3 = 8$ في مجموعة الأعداد المركبة $\\mathbb{C}$.',
                    optionsEn: [
                      '\\{4, \\, 2 + 2\\omega, \\, 2 + 2\\omega^2\\}',
                      '\\{2, \\, 2\\omega, \\, 2\\omega^2\\}',
                      '\\{4, \\, -2\\omega, \\, -2\\omega^2\\}',
                      '\\{2, \\, 4\\omega, \\, 4\\omega^2\\}'
                    ],
                    optionsAr: [
                      '\\{4, \\, 2 + 2\\omega, \\, 2 + 2\\omega^2\\}',
                      '\\{2, \\, 2\\omega, \\, 2\\omega^2\\}',
                      '\\{4, \\, -2\\omega, \\, -2\\omega^2\\}',
                      '\\{2, \\, 4\\omega, \\, 4\\omega^2\\}'
                    ],
                    correctAnswer: '\\{4, \\, 2 + 2\\omega, \\, 2 + 2\\omega^2\\}',
                    correctIndex: 0,
                    hintEn: 'Rewrite as ((x - 2) / 2)^3 = 1. The three roots are (x - 2)/2 = 1, omega, omega^2.',
                    hintAr: 'اقسم الطرفين على ٨ لتصبح: ((س - ٢) / ٢)³ = ١. إذن حلول القوس هي ١، أوميجا، أوميجا².',
                    stepByStepSolutionEn: [
                      '1. Divide both sides by $8 = 2^3$:',
                      '$$\\left( \\frac{x - 2}{2} \\right)^3 = 1$$',
                      '2. The cube roots of $1$ are $1, \\omega, \\omega^2$:',
                      '- Case 1: $\\frac{x - 2}{2} = 1 \\implies x - 2 = 2 \\implies x_1 = 4$',
                      '- Case 2: $\\frac{x - 2}{2} = \\omega \\implies x - 2 = 2\\omega \\implies x_2 = 2 + 2\\omega$',
                      '- Case 3: $\\frac{x - 2}{2} = \\omega^2 \\implies x - 2 = 2\\omega^2 \\implies x_3 = 2 + 2\\omega^2$',
                      '3. Therefore, the complete solution set in $\\mathbb{C}$ is:',
                      '$$\\text{S.S.} = \\{4, \\, 2 + 2\\omega, \\, 2 + 2\\omega^2\\}$$'
                    ],
                    stepByStepSolutionAr: [
                      '١. بقسمة طرفي المعادلة على ٨:',
                      '$$\\left(\\frac{x - 2}{2}\\right)^3 = 1$$',
                      '٢. الجذور التكعيبية للواحد هي $1, \\omega, \\omega^2$:',
                      '- الحل الأول: $\\frac{x - 2}{2} = 1 \\implies x = 4$',
                      '- الحل الثاني: $\\frac{x - 2}{2} = \\omega \\implies x = 2 + 2\\omega$',
                      '- الحل الثالث: $\\frac{x - 2}{2} = \\omega^2 \\implies x = 2 + 2\\omega^2$',
                      '٣. مجموعة الحل في الأعداد المركبة هي:',
                      '$$\\{4, \\, 2 + 2\\omega, \\, 2 + 2\\omega^2\\}$$'
                    ],
                    teacherTipEn: 'Do not just take the real root x = 4! In C, a cubic equation ALWAYS has 3 roots.',
                    teacherTipAr: 'لا تكتفِ بالجذر الحقيقي س = ٤ فقط! في مجموعة الأعداد المركبة المعادلة التكعيبية لها دائماً ٣ حلول.'
                  }
                ]
              },
              interactiveWidget: {
                type: 'complex_argand',
                titleEn: 'N-th Roots of Unity Regular Polygon Visualizer',
                titleAr: 'محاكي المضلع المنتظم لجذور الوحدة في شكل أرجاند',
                descriptionEn: 'Interactive geometric visualizer showing roots of unity inscribed on unit circle forming regular n-gons.',
                descriptionAr: 'محاكي تفاعلي يبين جذور الوحدة على دائرة الوحدة وتكوينها لمضلعات منتظمة كالمثلث والمربع والمسدس.'
              }
            }
          ],
          solvedExamples: algCh2SolvedExamples,
          exerciseProblems: algCh2Exercises,
          databank: algCh2Databank
        },
        {
          id: 'alg_ch3',
          chapterNumber: 3,
          titleEn: 'Determinants & Matrices',
          titleAr: 'المحددات والمصفوفات',
          descriptionEn: 'Properties of determinants, upper and lower triangular determinants, factoring, matrix multiplicative inverse, matrix rank, solving linear systems via matrix equations and Cramer\'s rule, and Rouché-Capelli theorem.',
          descriptionAr: 'خواص المحددات والصورة المثلثية، التحليل، المعكوس الضربي للمصفوفة، رتبة المصفوفة والمصفوفة الموسعة، حل أنظمة المعادلات الخطية بالمعكوس الضربي وقاعدة كرامر، ونظرية روجيه-كابيلي.',
          isFullyEquipped: true,
          lessons: [
            {
              id: 'alg_l5',
              titleEn: 'Determinants & Their Fundamental Properties',
              titleAr: 'المحددات وخواصها الأساسية',
              summaryEn: '$2 \\times 2$ and $3 \\times 3$ determinants, expansion along rows/columns, invariant properties under elementary row/column operations, splitting determinants, and upper/lower triangular forms.',
              summaryAr: 'المحددات الثنائية والثلاثية، مفكوك المحدد بدلالة عناصر أي صف أو عمود، خواص المحددات عند إجراء العمليات الأولية، تجزئة المحدد، ومحدد المصفوفة المثلثية.',
              theoryContentEn: `### 1. Definition and Value of Determinants:
For a $2 \\times 2$ matrix:
$$\\begin{vmatrix} a & b \\\\ c & d \\end{vmatrix} = ad - bc$$
For a $3 \\times 3$ matrix:
$$\\Delta = a_{11} C_{11} + a_{12} C_{12} + a_{13} C_{13}$$
where $C_{ij} = (-1)^{i+j} M_{ij}$ is the cofactor of element $a_{ij}$.

### 2. Fundamental Properties of Determinants:
1. **Transpose Invariance:** $|A^T| = |A|$.
2. **Row/Column Interchange:** Interchanging two parallel rows (or columns) reverses the sign of the determinant: $\\Delta' = -\\Delta$.
3. **Zero Value Conditions:** The determinant equals zero ($|A| = 0$) if:
   - Any entire row or column contains all zeros.
   - Two parallel rows (or columns) are identical.
   - Two parallel rows (or columns) are proportional.
4. **Scalar Multiplication:** Multiplying all elements of a single row or column by scalar $k$ multiplies the determinant by $k$. Consequently, for an $n \\times n$ matrix, $|k A| = k^n |A|$.
5. **Splitting Property:** If every entry in a row is the sum of two terms, the determinant can be split into the sum of two determinants.
6. **Triangular Form:** The determinant of an upper or lower triangular matrix equals the product of its main diagonal elements.
7. **Invariance under Row Additions:** Adding a scalar multiple of one row to another row does not change the value of the determinant: $R_i \\to R_i + k R_j$.`,
              theoryContentAr: `### ١. تعريف وحساب قيمة المحدد:
لمحدد الرتبة الثانية:
$$\\begin{vmatrix} a & b \\\\ c & d \\end{vmatrix} = ad - bc$$
لمحدد الرتبة الثالثة:
$$\\Delta = a_{11} C_{11} + a_{12} C_{12} + a_{13} C_{13}$$
حيث $C_{ij} = (-1)^{i+j} M_{ij}$ هو العامل المرافق للعنصر $a_{ij}$.

### ٢. خواص المحددات الأساسية:
١. **عدم تغير القيمة بالتدوير:** $|A^T| = |A|$.
٢. **تبديل صفين أو عمودين:** يغير إشارة المحدد فقط.
٣. **انعدام المحدد ($|A| = 0$):**
   - إذا كانت جميع عناصر أي صف أو عمود أصفاراً.
   - إذا تطابق صفان متوازيان (أو عمودان متوازيان).
   - إذا تناسبت عناصر صفين أو عمودين.
٤. **الضرب في عدد ثابت:** ضرب صف أو عمود في $k$ يضرب قيمة المحدد في $k$. ولمصفوفة $n \\times n$ يكون $|k A| = k^n |A|$.
٥. **تجزئة المحدد:** إذا كتبت عناصر صف كمجموع حدين، يتجزأ المحدد لمجموع محددين.
٦. **الصورة المثلثية:** قيمة محدد المصفوفة المثلثية العلوية أو السفلية تساوي حاصل ضرب عناصر القطر الرئيسي.
٧. **إضافة مضاعف صف لآخر:** لا يغير من قيمة المحدد أبداً.`,
              formulas: [
                { labelEn: '2x2 Determinant', labelAr: 'محدد الرتبة الثانية', latex: '\\begin{vmatrix} a & b \\\\ c & d \\end{vmatrix} = ad - bc' },
                { labelEn: 'Scalar Multiple of Matrix Determinant', labelAr: 'محدد مضروب مصفوفة في ثابت', latex: '|k A| = k^n |A|' },
                { labelEn: 'Upper Triangular Determinant', labelAr: 'محدد المصفوفة المثلثية', latex: '\\Delta = a_{11} \\times a_{22} \\times a_{33}' },
                { labelEn: 'Transpose Determinant', labelAr: 'محدد مدور المصفوفة', latex: '|A^T| = |A|' }
              ],
              moeRef: {
                bookTitleEn: 'Ministry Algebra & Solid Geometry Grade 12',
                bookTitleAr: 'كتاب الجبر والهندسة الفراغية للصف الثالث الثانوي - وزارة التربية والتعليم',
                grade: 'Grade 12',
                term: 'Full Year',
                officialCode: 'MOE-SEC3-ALG-CH3-L1',
                pageRange: 'pp. 75 - 98'
              },
              lessonPlan: {
                titleEn: 'Lesson Plan: Determinants and Elementary Properties',
                titleAr: 'خطة درس: المحددات والخواص الأساسية',
                gradeLevel: 'Grade 12 Secondary',
                durationMinutes: 90,
                moeCode: 'MOE-SEC3-ALG-CH3-L1',
                bloomsObjectivesEn: [
                  'Evaluate determinants without direct expansion using row/column operations.',
                  'Transform a 3x3 determinant into upper or lower triangular form.',
                  'Prove determinant identities and factor polynomials represented as determinants.'
                ],
                bloomsObjectivesAr: [
                  'حساب قيمة المحدد بدون فكه مباشرة باستخدام العمليات الأولية على الصفوف والأعمدة.',
                  'تحويل المحدد إلى الصورة المثلثية العلوية أو السفلية.',
                  'إثبات متطابقات المحددات وتحليل المقادير الجبرية المعبر عنها بمحددات.'
                ],
                prerequisitesEn: ['2x2 determinants', 'Solving systems of linear equations', 'Factoring algebraic expressions'],
                prerequisitesAr: ['محددات الرتبة الثانية', 'حل أنظمة المعادلات الخطية', 'تحليل المقادير الجبرية'],
                keyVocabularyEn: [
                  { term: 'Determinant', definition: 'A scalar value computed from the elements of a square matrix.' },
                  { term: 'Cofactor', definition: 'The signed minor of an entry in a square matrix.' },
                  { term: 'Triangular Form', definition: 'A form where all entries below or above the main diagonal are zeros.' }
                ],
                keyVocabularyAr: [
                  { term: 'المحدد', definition: 'قيمة عددية وحيدة تحسب لعناصر المصفوفة المربعة.' },
                  { term: 'العامل المرافق', definition: 'المحدد الأصغر مضروباً في إشارة الموضع (-١)^(رقم الصف + رقم العمود).' },
                  { term: 'الصورة المثلثية', definition: 'صورة تكون فيها جميع العناصر الواقعة أسفل أو أعلى القطر الرئيسي أصفاراً.' }
                ],
                teachingPacing: [
                  {
                    phaseEn: 'Introduction & Warm-up (15 mins)',
                    phaseAr: 'التهيئة والتمهيد (١٥ دقيقة)',
                    duration: '15 mins',
                    activitiesEn: 'Review 2x2 expansion and introduce 3x3 determinant expansion via cofactors.',
                    activitiesAr: 'مراجعة فك محدد الرتبة الثانية وتقديم فك محدد الرتبة الثالثة بالعوامل المرافقة.'
                  },
                  {
                    phaseEn: 'Properties Deep Dive (35 mins)',
                    phaseAr: 'شرح وتطبيق الخواص (٣٥ دقيقة)',
                    duration: '35 mins',
                    activitiesEn: 'Demonstrate each of the 7 properties with concrete numerical examples.',
                    activitiesAr: 'تطبيق خواص المحددات السبعة باستخدام أمثلة عددية وجبرية.'
                  },
                  {
                    phaseEn: 'Triangular Conversion Practice (25 mins)',
                    phaseAr: 'التدريب على الصورة المثلثية (٢٥ دقيقة)',
                    duration: '25 mins',
                    activitiesEn: 'Guide students on making zeros in rows/columns to achieve triangular form.',
                    activitiesAr: 'تدريب الطلاب على تكوين الأصفار أسفل القطر الرئيسي للوصول للصورة المثلثية.'
                  },
                  {
                    phaseEn: 'Closure & Exit Ticket (15 mins)',
                    phaseAr: 'التقويم الختامي (١٥ دقيقة)',
                    duration: '15 mins',
                    activitiesEn: 'Exit ticket evaluating a 3x3 determinant without expansion.',
                    activitiesAr: 'حل سؤال بطاقة الخروج لحساب قيمة محدد بدون فك.'
                  }
                ],
                commonMisconceptionsEn: [
                  'Confusing |k A| = k^n |A| with k|A|.',
                  'Changing the sign when adding a multiple of a row to another (only swapping rows changes the sign).'
                ],
                commonMisconceptionsAr: [
                  'الخلط بين محدد حاصل ضرب ثابت في مصفوفة |k A| = k^n |A| وضرب صف واحد في ثابت.',
                  'تغيير إشارة المحدد عند إضافة مضاعف صف لآخر (التبديل فقط هو ما يغير الإشارة).'
                ],
                differentiationEn: {
                  struggling: 'Step-by-step checklist for converting 3x3 determinants to triangular form.',
                  advanced: 'Evaluate Vandermonde determinants of order 3 and 4.'
                },
                differentiationAr: {
                  struggling: 'قائمة خطوات إرشادية مرتبة لتوليد الأصفار أسفل القطر الرئيسي.',
                  advanced: 'استنتاج وتطبيق صيغة محدد فاندرموند للرتبتين الثالثة والرابعة.'
                },
                formativeAssessmentEn: 'Find the value of det(3A) if A is a 3x3 matrix with det(A) = 4.',
                formativeAssessmentAr: 'إذا كانت A مصفوفة مربعة من الرتبة 3x3 وكان |A| = 4، أوجد قيمة |3A|.',
                exitTicketQuestion: {
                  questionEn: 'Evaluate Delta = |1 2 3; 2 4 6; 5 7 9| without expansion.',
                  questionAr: 'احسب قيمة المحدد |1 2 3; 2 4 6; 5 7 9| بدون فك.',
                  solutionEn: 'Row 2 is 2 times Row 1: R2 = 2 R1. Two proportional rows make the determinant 0.',
                  solutionAr: 'الصف الثاني يساوي ضعف الصف الأول: ص٢ = ٢ ص١. بما أن الصفين متناسبان، فإن قيمة المحدد تساوي صفراً فوراً.'
                }
              },
              worksheet: {
                id: 'ws_alg_l5',
                titleEn: 'Solved Worksheet: Determinants Properties',
                titleAr: 'ورقة عمل محلولة: خواص المحددات والصورة المثلثية',
                descriptionEn: 'Essential exam-level exercises on applying properties and computing determinants without expansion.',
                descriptionAr: 'تمارين امتحانية هامة على استخدام خواص المحددات وحساب القيم دون فك مباشر.',
                estimatedTimeMinutes: 45,
                problems: [
                  {
                    id: 'p_alg_det_ws1',
                    titleEn: 'Exam Standard: Scalar Multiple of 3x3 Matrix Determinant',
                    titleAr: 'مسألة امتحانية: محدد مضاعف مصفوفة ثلاثية',
                    difficulty: 'exam_standard',
                    questionEn: 'If $A$ is a square matrix of order $3 \\times 3$ with $|A| = 5$, find the value of $|2A|$.',
                    questionAr: 'إذا كانت $A$ مصفوفة مربعة من الرتبة $3 \\times 3$ وكان $|A| = 5$، أوجد قيمة $|2A|$.',
                    optionsEn: ['40', '10', '20', '80'],
                    optionsAr: ['٤٠', '١٠', '٢٠', '٨٠'],
                    correctAnswer: '40',
                    correctIndex: 0,
                    hintEn: 'Recall the formula $|k A| = k^n |A|$ for an n x n matrix.',
                    hintAr: 'تذكر القانون $|k A| = k^n |A|$ لمصفوفة من الرتبة n.',
                    stepByStepSolutionEn: [
                      '1. For an $n \\times n$ matrix, $|k A| = k^n |A|$.',
                      '2. Here $n = 3$ and $k = 2$, so $|2A| = 2^3 |A| = 8 \\times 5 = 40$.'
                    ],
                    stepByStepSolutionAr: [
                      '١. لمصفوفة على النظم $n \\times n$، يكون القانون $|k A| = k^n |A|$.',
                      '٢. هنا $n = 3$ و $k = 2$، إذن $|2A| = 2^3 \\times |A| = 8 \\times 5 = 40$.'
                    ],
                    teacherTipEn: 'Do not just multiply 2 by 5! You must raise the scalar 2 to the power 3.',
                    teacherTipAr: 'لا تضرب الثابت في المحدد مباشرة! يجب رفع الثابت لأس رتبة المصفوفة (ن = ٣).'
                  }
                ]
              },
              interactiveWidget: {
                type: 'matrix_solver',
                titleEn: 'Determinant Elementary Operations & 3x3 Matrix Inversion Lab',
                titleAr: 'مختبر المحددات والعمليات الأولية والمعكوس الضربي للمصفوفات',
                descriptionEn: 'Interactive 3x3 matrix laboratory computing determinants, adjugates, inverses, and solving linear systems via Cramer\'s rule with 3D geometric interpretation.',
                descriptionAr: 'مختبر تفاعلي للمصفوفات ٣×٣ يحسب المحدد والمصفوفة الملحقة والمعكوس الضربي وحل المعادلات الخطية بقاعدة كرامر وتفسيرها الهندسي فراغياً.'
              }
            },
            {
              id: 'alg_l6',
              titleEn: 'Matrix Multiplicative Inverses & Linear Systems',
              titleAr: 'المعكوس الضربي للمصفوفة وحل أنظمة المعادلات الخطية',
              summaryEn: 'Adjugate matrix, formula for $A^{-1}$, properties of inverses, matrix rank $\\text{rank}(A)$, Cramer\'s rule, and Rouché-Capelli theorem on consistency of linear systems.',
              summaryAr: 'المصفوفة الملحقة، قانون المعكوس الضربي $A^{-1}$، خواص المعكوسات، رتبة المصفوفة والمصفوفة الموسعة، قاعدة كرامر، ونظرية روجيه-كابيلي لبحث حلول الأنظمة الخطية.',
              theoryContentEn: `### 1. Matrix Inverses & Adjugate:
For an invertible $n \\times n$ matrix $A$ ($|A| \\neq 0$):
$$A^{-1} = \\frac{1}{|A|} \\text{adj}(A)$$
where $\\text{adj}(A) = (C_{ij})^T$ is the transpose of the cofactor matrix.
- Key Properties:
  - $A A^{-1} = A^{-1} A = I$
  - $(A B)^{-1} = B^{-1} A^{-1}$
  - $|A^{-1}| = \\frac{1}{|A|}$
  - $|\\text{adj}(A)| = |A|^{n-1}$ (for $3 \\times 3$, $|\\text{adj}(A)| = |A|^2$)

### 2. Rank of a Matrix (رتبة المصفوفة):
- The rank $\\text{rank}(A)$ or $r(A)$ is the greatest order of a non-zero minor (determinant) in $A$.
- For an $m \\times n$ matrix: $0 \\le r(A) \\le \\min(m, n)$.
- $r(A) = r(A^T) = r(A A^T)$.

### 3. Investigation of Linear Systems (Rouché-Capelli Theorem):
For a non-homogeneous system $AX = B$ with augmented matrix $(A|B)$:
1. **Unique Single Solution:** $r(A) = r(A|B) = n$ (where $n$ is number of unknowns, $|A| \\neq 0$).
2. **Infinitely Many Solutions:** $r(A) = r(A|B) = r < n$ (dependent consistent).
3. **No Solution (Inconsistent):** $r(A) < r(A|B)$.

For a homogeneous system $AX = O$:
- Always consistent because $X = O$ (trivial solution) is always a solution.
1. **Trivial Zero Solution Only:** $r(A) = n \\iff |A| \\neq 0$.
2. **Infinitely Many Non-Trivial Solutions:** $r(A) < n \\iff |A| = 0$.`,
              theoryContentAr: `### ١. المعكوس الضربي والمصفوفة الملحقة:
لمصفوفة مربعة غير منفردة $A$ ($|A| \\neq 0$):
$$A^{-1} = \\frac{1}{|A|} \\text{adj}(A)$$
حيث $\\text{adj}(A) = (C_{ij})^T$ هي مدور مصفوفة العوامل المرافقة.
- أهم الخواص:
  - $A A^{-1} = A^{-1} A = I$
  - $(A B)^{-1} = B^{-1} A^{-1}$
  - $|A^{-1}| = \\frac{1}{|A|}$
  - $|\\text{adj}(A)| = |A|^{n-1}$ (لمصفوفة $3 \\times 3$ يكون $|\\text{adj}(A)| = |A|^2$).

### ٢. رتبة المصفوفة:
- رتبة المصفوفة $r(A)$ هي أعلى رتبة لمحدد غير صفري يمكن استخراجه من المصفوفة.
- لمصفوفة $m \\times n$: يكون $0 \\le r(A) \\le \\min(m, n)$.

### ٣. بحث وجود حلول للأنظمة الخطية (نظرية روجيه-كابيلي):
للنظام غير المتجانس $AX = B$ والمصفوفة الموسعة $(A|B)$:
١. **حل وحيد:** $r(A) = r(A|B) = n$ (حيث $n$ عدد المجاهيل، $|A| \\neq 0$).
٢. **عدد لا نهائي من الحلول:** $r(A) = r(A|B) < n$.
٣. **مستحيل الحل (ليس له حل):** $r(A) < r(A|B)$.

للنظام المتجانس $AX = O$:
- متسق دائماً لأن الحل الصفري حل دائم للنظام.
١. **الحل الصفري فقط:** $r(A) = n \\iff |A| \\neq 0$.
٢. **عدد لا نهائي من الحلول غير الصفرية:** $r(A) < n \\iff |A| = 0$.`,
              formulas: [
                { labelEn: 'Multiplicative Inverse Formula', labelAr: 'قانون المعكوس الضربي للمصفوفة', latex: 'A^{-1} = \\frac{1}{|A|} \\text{adj}(A)' },
                { labelEn: 'Adjoint Determinant for 3x3', labelAr: 'محدد المصفوفة الملحقة لمصفوفة ثلاثية', latex: '|\\text{adj}(A)| = |A|^2' },
                { labelEn: 'Inverse Determinant', labelAr: 'محدد المعكوس الضربي', latex: '|A^{-1}| = \\frac{1}{|A|}' },
                { labelEn: 'Cramer Formula for Unknown x', labelAr: 'قاعدة كرامر لإيجاد المجهول س', latex: 'x = \\frac{\\Delta_x}{\\Delta}' }
              ],
              moeRef: {
                bookTitleEn: 'Ministry Algebra & Solid Geometry Grade 12',
                bookTitleAr: 'كتاب الجبر والهندسة الفراغية للصف الثالث الثانوي - وزارة التربية والتعليم',
                grade: 'Grade 12',
                term: 'Full Year',
                officialCode: 'MOE-SEC3-ALG-CH3-L2',
                pageRange: 'pp. 99 - 130'
              },
              lessonPlan: {
                titleEn: 'Lesson Plan: Matrix Inverses, Rank & System Consistency',
                titleAr: 'خطة درس: المعكوس الضربي ورتب المصفوفات وبحث حلول الأنظمة الخطية',
                gradeLevel: 'Grade 12 Secondary',
                durationMinutes: 90,
                moeCode: 'MOE-SEC3-ALG-CH3-L2',
                bloomsObjectivesEn: [
                  'Compute the multiplicative inverse A^-1 using the adjugate method.',
                  'Determine the rank of any m x n matrix using non-zero sub-determinants.',
                  'Apply the Rouché-Capelli theorem to investigate consistency and number of solutions.'
                ],
                bloomsObjectivesAr: [
                  'حساب المعكوس الضربي للمصفوفة باستخدام المصفوفة الملحقة ومحدد المصفوفة.',
                  'تحديد رتبة أي مصفوفة باستخدام رتب المحددات الجزئية غير الصفرية.',
                  'تطبيق نظرية روجيه-كابيلي لبحث وجود حلول للأنظمة الخطية وتحديد عددها.'
                ],
                prerequisitesEn: ['Evaluating 3x3 determinants', 'Cofactor matrices', 'Solving systems with substitution/elimination'],
                prerequisitesAr: ['فك محددات الرتبة الثالثة', 'مصفوفة العوامل المرافقة', 'حل أنظمة المعادلات بالحذف والتعويض'],
                keyVocabularyEn: [
                  { term: 'Multiplicative Inverse', definition: 'Matrix A^-1 satisfying A * A^-1 = I.' },
                  { term: 'Adjugate Matrix', definition: 'Transpose of the cofactor matrix of A.' },
                  { term: 'Matrix Rank', definition: 'Highest order of a non-zero minor in the matrix.' }
                ],
                keyVocabularyAr: [
                  { term: 'المعكوس الضربي', definition: 'المصفوفة A^-1 التي تحقق A * A^-1 = I.' },
                  { term: 'المصفوفة الملحقة', definition: 'مدور مصفوفة العوامل المرافقة للمصفوفة A.' },
                  { term: 'رتبة المصفوفة', definition: 'أعلى رتبة لمحدد غير صفري داخل المصفوفة.' }
                ],
                teachingPacing: [
                  {
                    phaseEn: 'Inverse Matrix Calculation (25 mins)',
                    phaseAr: 'حساب المعكوس الضربي (٢٥ دقيقة)',
                    duration: '25 mins',
                    activitiesEn: 'Construct cofactor matrix, transpose to find adj(A), and compute A^-1 = (1/|A|) adj(A).',
                    activitiesAr: 'تكوين مصفوفة المرافقات وتدويرها للحصول على المصفوفة الملحقة، ثم حساب المعكوس.'
                  },
                  {
                    phaseEn: 'Matrix Rank Definition & Rules (20 mins)',
                    phaseAr: 'مفهوم رتبة المصفوفة وقواعدها (٢٠ دقيقة)',
                    duration: '20 mins',
                    activitiesEn: 'Teach testing minors systematically from order 3 downwards.',
                    activitiesAr: 'تدريب الطلاب على فحص المحددات الجزئية بدءاً من أعلى رتبة تنازلياً.'
                  },
                  {
                    phaseEn: 'Rouché-Capelli Theorem & Consistency (30 mins)',
                    phaseAr: 'نظرية روجيه-كابيلي وبحث الحلول (٣٠ دقيقة)',
                    duration: '30 mins',
                    activitiesEn: 'Compare rank(A) with rank(A|B) to classify systems: unique, infinite, or no solution.',
                    activitiesAr: 'مقارنة رتبة مصفوفة المعاملات برتبة الموسعة لتصنيف الأنظمة: حل وحيد، لا نهائي، أو مستحيلة.'
                  },
                  {
                    phaseEn: 'Exit Ticket (15 mins)',
                    phaseAr: 'تقويم ختامي (١٥ دقيقة)',
                    duration: '15 mins',
                    activitiesEn: 'Find values of k for which a homogeneous system has non-trivial solutions.',
                    activitiesAr: 'إيجاد قيمة الثابت k التي تجعل للنظام المتجانس حلولاً غير صفرية.'
                  }
                ],
                commonMisconceptionsEn: [
                  'Forgetting to transpose the cofactor matrix to get adj(A).',
                  'Thinking a homogeneous system can have no solution (homogeneous systems always have at least the trivial zero solution).'
                ],
                commonMisconceptionsAr: [
                  'نسيان تدوير مصفوفة العوامل المرافقة للحصول على المصفوفة الملحقة.',
                  'الاعتقاد بأن النظام المتجانس قد يكون مستحيل الحل (النظام المتجانس متسق دائماً وله الحل الصفري على الأقل).'
                ],
                differentiationEn: {
                  struggling: 'Visual matrix flow chart for classifying linear systems based on rank.',
                  advanced: 'Investigate systems with two parameters (a, b) and graph solution regimes.'
                },
                differentiationAr: {
                  struggling: 'مخطط انسيابي بصري لتصنيف حلول الأنظمة الخطية بناءً على الرتبة.',
                  advanced: 'بحث حلول أنظمة تحتوي على بارامترين مجهولين (أ، ب) ورسم مناطق الحل.'
                },
                formativeAssessmentEn: 'If A is 3x3 and det(A) = 3, what is det(adj(A))?',
                formativeAssessmentAr: 'إذا كانت A مصفوفة مربعة 3x3 وكان |A| = 3، فما قيمة |adj(A)|؟',
                exitTicketQuestion: {
                  questionEn: 'Determine the rank of matrix A = [1 2; 3 6].',
                  questionAr: 'حدد رتبة المصفوفة A = [1 2; 3 6].',
                  solutionEn: 'det(A) = 1(6) - 2(3) = 0. Since det is 0 and A is not the zero matrix, rank(A) = 1.',
                  solutionAr: 'محدد المصفوفة |A| = 1(6) - 2(3) = 0. بما أن المحدد منعدم والمصفوفة غير صفرية، فإن رتبة المصفوفة تساوي 1.'
                }
              },
              worksheet: {
                id: 'ws_alg_l6',
                titleEn: 'Solved Worksheet: Inverses, Rank & Systems',
                titleAr: 'ورقة عمل محلولة: المعكوسات والرتبة والأنظمة الخطية',
                descriptionEn: 'Exam-focused practice on matrix rank, inverse computation, and Rouché-Capelli solution analysis.',
                descriptionAr: 'تدريبات امتحانية مركزة على رتبة المصفوفة وحساب المعكوس وبحث حلول الأنظمة بنظرية روجيه-كابيلي.',
                estimatedTimeMinutes: 45,
                problems: [
                  {
                    id: 'p_alg_mat_ws1',
                    titleEn: 'Exam Standard: Parameter for Non-Trivial Solutions',
                    titleAr: 'مسألة امتحانية: قيمة الثابت لوجود حلول غير تافهة',
                    difficulty: 'exam_standard',
                    questionEn: 'Find the value of $k$ that gives the homogeneous system non-trivial solutions: $x + 2y = 0$, $3x + ky = 0$.',
                    questionAr: 'أوجد قيمة $k$ التي تجعل للنظام المتجانس $x + 2y = 0$، $3x + ky = 0$ حلولاً غير صفرية.',
                    optionsEn: ['6', '3', '2', '0'],
                    optionsAr: ['٦', '٣', '٢', '٠'],
                    correctAnswer: '6',
                    correctIndex: 0,
                    hintEn: 'A homogeneous system has non-trivial solutions if and only if |A| = 0.',
                    hintAr: 'للنظام المتجانس حلول غير صفرية إذا وفقط إذا كان محدد المعاملات يساوي صفراً.',
                    stepByStepSolutionEn: [
                      '1. For non-trivial solutions, the determinant of coefficients must be zero: $|A| = 0$.',
                      '2. Compute determinant: $1(k) - 2(3) = 0 \\implies k - 6 = 0 \\implies k = 6$.'
                    ],
                    stepByStepSolutionAr: [
                      '١. لوجود حلول غير صفرية يجب أن ينعدم محدد المعاملات: $|A| = 0$.',
                      '٢. فك المحدد: $1(k) - 2(3) = 0 \\implies k - 6 = 0 \\implies k = 6$.'
                    ],
                    teacherTipEn: 'det(A) = 0 is the golden key for non-trivial solutions in any homogeneous system.',
                    teacherTipAr: 'انعدام المحدد هو المفتاح الذهبي لوجود حلول غير صفرية في أي نظام متجانس.'
                  }
                ]
              },
              interactiveWidget: {
                type: 'matrix_solver',
                titleEn: 'Linear Systems & Matrix Rank Analyzer',
                titleAr: 'محلل رتب المصفوفات والأنظمة الخطية',
                descriptionEn: 'Interactive tool to compute matrix rank, determinant, and investigate system solutions.',
                descriptionAr: 'أداة تفاعلية لحساب رتبة المصفوفة ومحددها وتحديد طبيعة حلول النظام الخطي.'
              }
            }
          ],
          solvedExamples: algCh3SolvedExamples,
          exerciseProblems: algCh3Exercises,
          databank: algCh3Databank
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
              summaryEn: 'Understanding 3D axes ($X, Y, Z$), coordinate planes ($XY$, $YZ$, $XZ$), distance between points in 3D, and standard & general equations of a sphere.',
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
          ],
          solvedExamples: solidCh1SolvedExamples,
          exerciseProblems: solidCh1Exercises,
          databank: solidCh1Databank
        },
        {
          id: 'solid_ch2',
          chapterNumber: 4,
          titleEn: 'Straight Lines & Planes in 3D Space',
          titleAr: 'الخطوط المستقيمة والمستويات في الفراغ',
          descriptionEn: 'Equations of straight lines in 3D (vector, parametric, Cartesian), direction cosines, angles between lines, skew lines, general and intercept equations of planes, perpendicular distances, and line-plane intersections.',
          descriptionAr: 'معادلات الخط المستقيم في الفراغ (المتجهية والبارامترية والكارتيزية)، جيوب تمام الاتجاه، قياس الزاوية بين مستقيمين، المستقيمان المتخالفان، معادلة المستوى العامة وصورة الأجزاء المقطوعة، طول العمود، والتقاطع بين الخط والمستوى.',
          isFullyEquipped: true,
          lessons: [
            {
              id: 'solid_l2',
              titleEn: 'Straight Lines in 3D Space & Spatial Angles',
              titleAr: 'معادلة الخط المستقيم في الفراغ والزوايا الفراغية',
              summaryEn: 'Vector, parametric, and symmetric Cartesian equations of lines, direction cosines $\\cos^2\\alpha + \\cos^2\\beta + \\cos^2\\gamma = 1$, angle between two lines, parallel and perpendicular conditions, and skew lines.',
              summaryAr: 'الصور المتجهية والبارامترية والكارتيزية لمعادلة المستقيم، جيوب تمام الاتجاه $\\cos^2\\alpha + \\cos^2\\beta + \\cos^2\\gamma = 1$، قياس الزاوية بين مستقيمين، شرطا التوازي والتعامد، والمستقيمان المتخالفان.',
              theoryContentEn: `### 1. Direction Vector and Direction Cosines of a Line:
Let a line pass through point $A(x_0, y_0, z_0)$ with direction vector $\\vec{d} = (a, b, c)$:
- **Direction Ratios (نسب الاتجاه):** The components $(a, b, c)$ or any non-zero scalar multiple $k(a, b, c)$.
- **Direction Angles (زوايا الاتجاه):** Angles $\\alpha, \\beta, \\gamma$ between line direction and positive $x, y, z$ axes.
- **Direction Cosines (جيوب تمام الاتجاه):**
  $$\\cos\\alpha = \\frac{a}{\\|\\vec{d}\\|}, \\quad \\cos\\beta = \\frac{b}{\\|\\vec{d}\\|}, \\quad \\cos\\gamma = \\frac{c}{\\|\\vec{d}\\|}$$
- **Fundamental Identity:**
  $$\\cos^2\\alpha + \\cos^2\\beta + \\cos^2\\gamma = 1$$
  $$\\sin^2\\alpha + \\sin^2\\beta + \\sin^2\\gamma = 2$$

### 2. The Three Forms of the Line Equation in Space:
1. **Vector Form (الصورة المتجهية):**
   $$\\vec{r} = \\vec{r}_0 + t \\vec{d} \\quad (t \\in \\mathbb{R})$$
2. **Parametric Form (المعادلات البارامترية):**
   $$x = x_0 + a t, \\quad y = y_0 + b t, \\quad z = z_0 + c t$$
3. **Cartesian / Symmetric Form (الصورة الإحداثية المتماثلة):**
   $$\\frac{x - x_0}{a} = \\frac{y - y_0}{b} = \\frac{z - z_0}{c}$$

### 3. Angle $\\theta$ Between Two Straight Lines:
Given direction vectors $\\vec{d}_1 = (a_1, b_1, c_1)$ and $\\vec{d}_2 = (a_2, b_2, c_2)$:
$$\\cos\\theta = \\frac{|\\vec{d}_1 \\cdot \\vec{d}_2|}{\\|\\vec{d}_1\\| \\|\\vec{d}_2\\|} = \\frac{|a_1 a_2 + b_1 b_2 + c_1 c_2|}{\\sqrt{a_1^2 + b_1^2 + c_1^2} \\sqrt{a_2^2 + b_2^2 + c_2^2}}$$
- **Perpendicular Condition ($L_1 \\perp L_2$):**
  $$\\vec{d}_1 \\cdot \\vec{d}_2 = 0 \\iff a_1 a_2 + b_1 b_2 + c_1 c_2 = 0$$
- **Parallel Condition ($L_1 \\parallel L_2$):**
  $$\\vec{d}_1 \\times \\vec{d}_2 = \\vec{0} \\iff \\frac{a_1}{a_2} = \\frac{b_1}{b_2} = \\frac{c_1}{c_2}$$

### 4. Skew Lines (المستقيمان المتخالفان):
Two lines in 3D space that:
1. Do not intersect.
2. Are not parallel.
3. Do not lie in a common plane.`,
              theoryContentAr: `### ١. متجه الاتجاه وجيوب تمام الاتجاه للمستقيم:
إذا كان المستقيم يمر بالنقطة $A(x_0, y_0, z_0)$ ومتجه اتجاهه $\\vec{d} = (a, b, c)$:
- **نسب الاتجاه:** هي الأعداد $(a, b, c)$ أو أي مضاعف غير صفري لها.
- **زوايا الاتجاه:** هي الزوايا $\\alpha, \\beta, \\gamma$ التي يصنعها المستقيم مع الاتجاهات الموجبة لمحاور الإحداثيات.
- **جيوب تمام الاتجاه:**
  $$\\cos\\alpha = \\frac{a}{\\|\\vec{d}\\|}, \\quad \\cos\\beta = \\frac{b}{\\|\\vec{d}\\|}, \\quad \\cos\\gamma = \\frac{c}{\\|\\vec{d}\\|}$$
- **العلاقات الأساسية:**
  $$\\cos^2\\alpha + \\cos^2\\beta + \\cos^2\\gamma = 1$$
  $$\\sin^2\\alpha + \\sin^2\\beta + \\sin^2\\gamma = 2$$

### ٢. الصور الثلاث لمعادلة المستقيم في الفراغ:
١. **الصورة المتجهية:**
   $$\\vec{r} = \\vec{r}_0 + t \\vec{d} \\quad (t \\in \\mathbb{R})$$
٢. **المعادلات البارامترية:**
   $$x = x_0 + a t, \\quad y = y_0 + b t, \\quad z = z_0 + c t$$
٣. **الصورة الإحداثية المتماثلة (الكارتيزية):**
   $$\\frac{x - x_0}{a} = \\frac{y - y_0}{b} = \\frac{z - z_0}{c}$$

### ٣. قياس الزاوية $\\theta$ بين مستقيمين في الفراغ:
إذا كان متجها اتجاه المستقيمين هما $\\vec{d}_1$ و $\\vec{d}_2$:
$$\\cos\\theta = \\frac{|\\vec{d}_1 \\cdot \\vec{d}_2|}{\\|\\vec{d}_1\\| \\|\\vec{d}_2\\|}$$
- **شرط التعامد:**
  $$\\vec{d}_1 \\cdot \\vec{d}_2 = 0 \\iff a_1 a_2 + b_1 b_2 + c_1 c_2 = 0$$
- **شرط التوازي:**
  $$\\frac{a_1}{a_2} = \\frac{b_1}{b_2} = \\frac{c_1}{c_2}$$

### ٤. المستقيمان المتخالفان:
هما مستقيمان في الفراغ لا يجمعهما مستوى واحد، أي أنهما غير متوازيين ولا يتقاطعان.`,
              formulas: [
                { labelEn: 'Direction Cosines Identity', labelAr: 'متطابقة جيوب تمام الاتجاه', latex: '\\cos^2\\alpha + \\cos^2\\beta + \\cos^2\\gamma = 1' },
                { labelEn: '3D Line Vector Form', labelAr: 'معادلة المستقيم المتجهية', latex: '\\vec{r} = \\vec{r}_0 + t \\vec{d}' },
                { labelEn: '3D Line Cartesian Form', labelAr: 'معادلة المستقيم الإحداثية', latex: '\\frac{x - x_0}{a} = \\frac{y - y_0}{b} = \\frac{z - z_0}{c}' },
                { labelEn: 'Angle Between Two Lines', labelAr: 'الزاوية بين مستقيمين', latex: '\\cos\\theta = \\frac{|\\vec{d}_1 \\cdot \\vec{d}_2|}{\\|\\vec{d}_1\\| \\|\\vec{d}_2\\|}' }
              ],
              moeRef: {
                bookTitleEn: 'Ministry Solid Geometry Textbook Grade 12',
                bookTitleAr: 'كتاب الجبر والهندسة الفراغية - وزارة التربية والتعليم',
                grade: 'Grade 12',
                term: 'Full Year',
                officialCode: 'MOE-SEC3-SOLID-CH2-L1',
                pageRange: 'pp. 110 - 135'
              },
              lessonPlan: {
                titleEn: 'Lesson Plan: 3D Straight Line Equations & Spatial Angles',
                titleAr: 'خطة درس: معادلة المستقيم في الفراغ والزوايا الفراغية',
                gradeLevel: 'Grade 12 Secondary',
                durationMinutes: 90,
                moeCode: 'MOE-SEC3-SOLID-CH2-L1',
                bloomsObjectivesEn: [
                  'Formulate line equations in vector, parametric, and symmetric forms.',
                  'Calculate direction cosines and verify spatial direction angle identities.',
                  'Determine the measure of acute angle between lines and test for perpendicularity, parallelism, or skewness.'
                ],
                bloomsObjectivesAr: [
                  'صياغة صور معادلة المستقيم المتجهية والبارامترية والكارتيزية.',
                  'حساب جيوب تمام الاتجاه والتحقق من متطابقات زوايا الاتجاه.',
                  'حساب الزاوية بين مستقيمين واختبار التعامد والتوازي والتخالف.'
                ],
                prerequisitesEn: ['3D vectors and dot product', 'Vector representation of points'],
                prerequisitesAr: ['المتجهات في الفراغ والضرب القياسي', 'إحداثيات النقط في الفراغ'],
                keyVocabularyEn: [
                  { term: 'Direction Vector d', definition: 'Any non-zero vector parallel to the straight line.' },
                  { term: 'Direction Cosines', definition: 'Coordinates of the unit direction vector: (cos alpha, cos beta, cos gamma).' },
                  { term: 'Skew Lines', definition: 'Non-coplanar lines in space that never intersect and are not parallel.' }
                ],
                keyVocabularyAr: [
                  { term: 'متجه الاتجاه', definition: 'أي متجه غير صفري يوازي الخط المستقيم.' },
                  { term: 'جيوب تمام الاتجاه', definition: 'إحداثيات متجه الوحدة في اتجاه المستقيم: (جتا أ، جتا ب، جتا جـ).' },
                  { term: 'المستقيمان المتخالفان', definition: 'مستقيمان لا يجمعهما مستوى واحد ولا يتقاطعان ولا يتوازيان.' }
                ],
                teachingPacing: [
                  {
                    phaseEn: 'Direction Cosines Derivation (20 mins)',
                    phaseAr: 'استنتاج جيوب تمام الاتجاه (٢٠ دقيقة)',
                    duration: '20 mins',
                    activitiesEn: 'Derive cos^2 alpha + cos^2 beta + cos^2 gamma = 1 from unit vector magnitude ||u|| = 1.',
                    activitiesAr: 'استنتاج متطابقة جيوب تمام الاتجاه من معيار متجه الوحدة.'
                  },
                  {
                    phaseEn: 'Line Equation Conversions (35 mins)',
                    phaseAr: 'التحويل بين صور معادلة المستقيم (٣٥ دقيقة)',
                    duration: '35 mins',
                    activitiesEn: 'Convert from symmetric to vector form, paying attention to coefficients of x, y, z.',
                    activitiesAr: 'تدريب الطلاب على التحويل من الصورة المتماثلة إلى المتجهية وضبط معاملات س وص وع لتساوي ١.'
                  },
                  {
                    phaseEn: 'Angle & Skew Lines Analysis (20 mins)',
                    phaseAr: 'حساب الزاوية والمستقيمات المتخالفة (٢٠ دقيقة)',
                    duration: '20 mins',
                    activitiesEn: 'Demonstrate skew lines using 3D coordinate model.',
                    activitiesAr: 'توضيح المستقيمات المتخالفة هندسياً على مجسم الفراغ ثلاثي الأبعاد.'
                  },
                  {
                    phaseEn: 'Exit Ticket (15 mins)',
                    phaseAr: 'بطاقة الخروج (١٥ دقيقة)',
                    duration: '15 mins',
                    activitiesEn: 'Calculate direction cosines given two angles 60 deg and 45 deg.',
                    activitiesAr: 'حل بطاقة الخروج لإيجاد الزاوية الثالثة بمعلومية الزاويتين ٦٠° و ٤٥°.'
                  }
                ],
                commonMisconceptionsEn: [
                  'Reading direction numbers from (2x - 1)/3 as 3 instead of dividing by 2 to get 3/2!',
                  'Assuming lines that do not intersect must be parallel (forgetting skew lines in 3D).'
                ],
                commonMisconceptionsAr: [
                  'استخراج متجه الاتجاه من (٢س - ١)/٣ باعتبار المقام ٣ دون قسمة البسط والمقام على ٢ ليصبح ٣/٢!',
                  'اعتقاد أن عدم تقاطع مستقيمين يعني توازيهما حتماً وإغفال حالة التخالف في الفراغ.'
                ],
                differentiationEn: {
                  struggling: 'Always isolate x, y, z with coefficient +1 before reading off direction vector denominators.',
                  advanced: 'Find the shortest distance between two skew lines using scalar triple product.'
                },
                differentiationAr: {
                  struggling: 'التأكد دائماً من جعل معاملات س وص وع تساوي +١ قبل قراءة المقامات.',
                  advanced: 'حساب أقصر بعد بين مستقيمين متخالفين بالضرب الثلاثي القياسي.'
                },
                formativeAssessmentEn: 'Find the direction vector of the line (3 - x)/2 = (2y + 1)/4 = (z - 5)/-3.',
                formativeAssessmentAr: 'أوجد متجه اتجاه المستقيم $\\frac{3 - x}{2} = \\frac{2y + 1}{4} = \\frac{z - 5}{-3}$.',
                exitTicketQuestion: {
                  questionEn: 'If direction angles of a line are 45 deg, 60 deg, and gamma (where gamma is acute), find gamma.',
                  questionAr: 'إذا كانت زوايا اتجاه مستقيم هي $45^\\circ$ و $60^\\circ$ و $\\gamma$ (حيث $\\gamma$ حادة)، فما قياس $\\gamma$؟',
                  solutionEn: 'cos^2(45) + cos^2(60) + cos^2(gamma) = 1 => (1/sqrt(2))^2 + (1/2)^2 + cos^2(gamma) = 1 => 1/2 + 1/4 + cos^2(gamma) = 1 => 3/4 + cos^2(gamma) = 1 => cos^2(gamma) = 1/4 => cos(gamma) = 1/2 (since gamma is acute) => gamma = 60 degrees.',
                  solutionAr: 'جتا²(٤٥) + جتا²(٦٠) + جتا²(جـ) = ١ => ١/٢ + ١/٤ + جتا²(جـ) = ١ => ٣/٤ + جتا²(جـ) = ١ => جتا²(جـ) = ١/٤ => جتا(جـ) = ١/٢ => جـ = ٦٠°.'
                }
              },
              worksheet: {
                id: 'ws_solid_l2',
                titleEn: 'Solved Worksheet: 3D Straight Lines',
                titleAr: 'ورقة عمل محلولة: الخط المستقيم في الفراغ',
                descriptionEn: 'Exam standard problems on direction cosines, extracting direction vectors, and angles between lines.',
                descriptionAr: 'مسائل امتحانات الثانوية العامة على جيوب تمام الاتجاه ومعادلة المستقيم والزاوية بين مستقيمين.',
                estimatedTimeMinutes: 45,
                problems: [
                  {
                    id: 'p_solid1',
                    titleEn: 'Exam Standard: Direction Vector Extraction from Non-Standard Form',
                    titleAr: 'مسألة امتحانية: استخراج متجه الاتجاه وضبط المعاملات',
                    difficulty: 'exam_standard',
                    questionEn: 'Find the unit direction vector of the straight line: $$\\frac{2x - 4}{6} = \\frac{1 - y}{3} = \\frac{z + 5}{2}$$',
                    questionAr: 'أوجد متجه اتجاه الوحدة للخط المستقيم: $$\\frac{2x - 4}{6} = \\frac{1 - y}{3} = \\frac{z + 5}{2}$$',
                    optionsEn: [
                      '\\left(\\frac{3}{\\sqrt{22}}, \\, -\\frac{3}{\\sqrt{22}}, \\, \\frac{2}{\\sqrt{22}}\\right)',
                      '\\left(\\frac{6}{7}, \\, \\frac{3}{7}, \\, \\frac{2}{7}\\right)',
                      '\\left(\\frac{3}{\\sqrt{14}}, \\, \\frac{3}{\\sqrt{14}}, \\, \\frac{2}{\\sqrt{14}}\\right)',
                      '(3, -3, 2)'
                    ],
                    optionsAr: [
                      '\\left(\\frac{3}{\\sqrt{22}}, \\, -\\frac{3}{\\sqrt{22}}, \\, \\frac{2}{\\sqrt{22}}\\right)',
                      '\\left(\\frac{6}{7}, \\, \\frac{3}{7}, \\, \\frac{2}{7}\\right)',
                      '\\left(\\frac{3}{\\sqrt{14}}, \\, \\frac{3}{\\sqrt{14}}, \\, \\frac{2}{\\sqrt{14}}\\right)',
                      '(3, -3, 2)'
                    ],
                    correctAnswer: '\\left(\\frac{3}{\\sqrt{22}}, \\, -\\frac{3}{\\sqrt{22}}, \\, \\frac{2}{\\sqrt{22}}\\right)',
                    correctIndex: 0,
                    hintEn: 'Make coefficients of x, y, z equal to +1: divide first fraction by 2, multiply second by -1/-1.',
                    hintAr: 'اجعل معاملات س، ص، ع تساوي +١: اقسم الكسر الأول على ٢، واضرب الكسر الثاني في -١/-١.',
                    stepByStepSolutionEn: [
                      '1. Standardize each fraction so coefficients of $x, y, z$ are $+1$:',
                      'First fraction: $\\frac{2(x - 2)}{6} = \\frac{x - 2}{3}$ (denominator is $a = 3$).',
                      'Second fraction: $\\frac{-(y - 1)}{3} = \\frac{y - 1}{-3}$ (denominator is $b = -3$).',
                      'Third fraction: $\\frac{z + 5}{2}$ (denominator is $c = 2$).',
                      '2. The direction vector is $\\vec{d} = (3, -3, 2)$.',
                      '3. Compute the magnitude of $\\vec{d}$:',
                      '$$\\|\\vec{d}\\| = \\sqrt{3^2 + (-3)^2 + 2^2} = \\sqrt{9 + 9 + 4} = \\sqrt{22}$$',
                      '4. The unit direction vector is:',
                      '$$\\hat{u} = \\frac{\\vec{d}}{\\|\\vec{d}\\|} = \\left( \\frac{3}{\\sqrt{22}}, \\, -\\frac{3}{\\sqrt{22}}, \\, \\frac{2}{\\sqrt{22}} \\right)$$'
                    ],
                    stepByStepSolutionAr: [
                      '١. جعل معاملات س وص وع تساوي +١:',
                      'الكسر الأول: $\\frac{2(x - 2)}{6} = \\frac{x - 2}{3} \\implies a = 3$',
                      'الكسر الثاني: $\\frac{-(y - 1)}{3} = \\frac{y - 1}{-3} \\implies b = -3$',
                      'الكسر الثالث: $\\frac{z + 5}{2} \\implies c = 2$',
                      '٢. متجه الاتجاه هو $\\vec{d} = (3, -3, 2)$.',
                      '٣. معيار متجه الاتجاه:',
                      '$$\\|\\vec{d}\\| = \\sqrt{9 + 9 + 4} = \\sqrt{22}$$',
                      '٤. متجه اتجاه الوحدة:',
                      '$$\\hat{u} = \\left( \\frac{3}{\\sqrt{22}}, \\, -\\frac{3}{\\sqrt{22}}, \\, \\frac{2}{\\sqrt{22}} \\right)$$'
                    ],
                    teacherTipEn: 'A high-yield question! Ministry exams frequently introduce coefficient modifications in the numerator.',
                    teacherTipAr: 'سؤال امتحاني متكرر جداً! انتبه لتعديل معاملات البسط قبل استخراج نسب الاتجاه.'
                  },
                  {
                    id: 'p_solid2',
                    titleEn: 'Foundation Problem: Perpendicular Lines Parameter Calculation',
                    titleAr: 'مسألة تأسيسية: شرط تعامد مستقيمين في الفراغ',
                    difficulty: 'easy',
                    questionEn: 'The two straight lines $L_1: \\frac{x - 1}{2} = \\frac{y + 2}{k} = \\frac{z - 3}{-4}$ and $L_2: \\frac{x}{3} = \\frac{y - 4}{2} = \\frac{z + 1}{1}$ are perpendicular. Find the value of $k$.',
                    questionAr: 'إذا كان المستقيمان $L_1: \\frac{x - 1}{2} = \\frac{y + 2}{k} = \\frac{z - 3}{-4}$ و $L_2: \\frac{x}{3} = \\frac{y - 4}{2} = \\frac{z + 1}{1}$ متعامدين، فاحسب قيمة $k$.',
                    optionsEn: ['-1', '1', '-2', '2'],
                    optionsAr: ['-١', '١', '-٢', '٢'],
                    correctAnswer: '-1',
                    correctIndex: 0,
                    hintEn: 'Two lines are perpendicular if d1 . d2 = 0: a1 a2 + b1 b2 + c1 c2 = 0.',
                    hintAr: 'يتعامد المستقيمان إذا كان هـ١ . هـ٢ = ٠: أ١ أ٢ + ب١ ب٢ + جـ١ جـ٢ = ٠.',
                    stepByStepSolutionEn: [
                      '1. Extract direction vectors:',
                      '$$\\vec{d}_1 = (2, k, -4), \\quad \\vec{d}_2 = (3, 2, 1)$$',
                      '2. Apply the perpendicularity condition $\\vec{d}_1 \\cdot \\vec{d}_2 = 0$:',
                      '$$(2)(3) + (k)(2) + (-4)(1) = 0$$',
                      '$$6 + 2k - 4 = 0$$',
                      '$$2k + 2 = 0 \\implies 2k = -2 \\implies k = -1$$'
                    ],
                    stepByStepSolutionAr: [
                      '١. استخراج متجهات الاتجاه:',
                      '$$\\vec{d}_1 = (2, k, -4), \\quad \\vec{d}_2 = (3, 2, 1)$$',
                      '٢. تطبيق شرط التعامد بالضرب القياسي:',
                      '$$2(3) + 2k - 4(1) = 0$$',
                      '$$6 + 2k - 4 = 0 \\implies 2k = -2 \\implies k = -1$$'
                    ],
                    teacherTipEn: 'Direct and reliable application of the dot product orthogonality condition.',
                    teacherTipAr: 'تطبيق مباشر ومضمون لشرط تعامد متجهي الاتجاه.'
                  },
                  {
                    id: 'p_solid3',
                    titleEn: 'HOTS Problem: Angle Between Two Space Diagonals of a Cube',
                    titleAr: 'مسألة مهارات عليا: قياس الزاوية بين قطري مكعب في الفراغ',
                    difficulty: 'hots',
                    questionEn: 'In a cube of edge length $a$ with one vertex at origin $O(0, 0, 0)$, find the cosine of the angle $\\theta$ between the main space diagonal connecting $O(0,0,0)$ to $(a,a,a)$ and the space diagonal connecting $(a,0,0)$ to $(0,a,a)$.',
                    questionAr: 'في مكعب طول حرفه $a$ مع أحد رؤوسه في نقطة الأصل $O(0,0,0)$، احسب جيب تمام الزاوية $\\theta$ بين القطر الفراغي الواصل بين $O(0,0,0)$ و $(a,a,a)$ والقطر الفراغي الواصل بين $(a,0,0)$ و $(0,a,a)$.',
                    optionsEn: ['\\frac{1}{3}', '\\frac{2}{3}', '\\frac{1}{\\sqrt{3}}', '\\frac{1}{2}'],
                    optionsAr: ['\\frac{1}{3}', '\\frac{2}{3}', '\\frac{1}{\\sqrt{3}}', '\\frac{1}{2}'],
                    correctAnswer: '\\frac{1}{3}',
                    correctIndex: 0,
                    hintEn: 'd1 = (1, 1, 1) and d2 = (-1, 1, 1). Compute cos(theta) = |d1 . d2| / (||d1|| ||d2||).',
                    hintAr: 'متجه القطر الأول هـ١ = (١، ١، ١) ومتجه القطر الثاني هـ٢ = (-١، ١، ١). طبق قانون جتا(هـ).',
                    stepByStepSolutionEn: [
                      '1. Direction vector of first space diagonal:',
                      '$$\\vec{d}_1 = (a, a, a) - (0, 0, 0) = (a, a, a) \\parallel (1, 1, 1)$$',
                      '2. Direction vector of second space diagonal:',
                      '$$\\vec{d}_2 = (0, a, a) - (a, 0, 0) = (-a, a, a) \\parallel (-1, 1, 1)$$',
                      '3. Compute dot product and magnitudes:',
                      '$$\\vec{d}_1 \\cdot \\vec{d}_2 = (1)(-1) + (1)(1) + (1)(1) = -1 + 1 + 1 = 1$$',
                      '$$\\|\\vec{d}_1\\| = \\sqrt{1^2 + 1^2 + 1^2} = \\sqrt{3}, \\quad \\|\\vec{d}_2\\| = \\sqrt{(-1)^2 + 1^2 + 1^2} = \\sqrt{3}$$',
                      '4. Compute $\\cos\\theta$:',
                      '$$\\cos\\theta = \\frac{|\\vec{d}_1 \\cdot \\vec{d}_2|}{\\|\\vec{d}_1\\| \\|\\vec{d}_2\\|} = \\frac{|1|}{\\sqrt{3} \\cdot \\sqrt{3}} = \\frac{1}{3}$$'
                    ],
                    stepByStepSolutionAr: [
                      '١. متجه اتجاه القطر الفراغي الأول:',
                      '$$\\vec{d}_1 = (1, 1, 1)$$',
                      '٢. متجه اتجاه القطر الفراغي الثاني:',
                      '$$\\vec{d}_2 = (-1, 1, 1)$$',
                      '٣. حساب الضرب القياسي والمعايير:',
                      '$$\\vec{d}_1 \\cdot \\vec{d}_2 = -1 + 1 + 1 = 1$$',
                      '$$\\|\\vec{d}_1\\| = \\sqrt{3}, \\quad \\|\\vec{d}_2\\| = \\sqrt{3}$$',
                      '٤. حساب جيب تمام الزاوية:',
                      '$$\\cos\\theta = \\frac{|1|}{\\sqrt{3} \\times \\sqrt{3}} = \\frac{1}{3}$$'
                    ],
                    teacherTipEn: 'A renowned geometry problem connecting 3D vector coordinates directly with solid figures.',
                    teacherTipAr: 'مسألة شهيرة تربط المتجهات ثلاثية الأبعاد بهندسة المجسمات والمكعب.'
                  }
                ]
              },
              interactiveWidget: {
                type: '3d_vectors',
                titleEn: '3D Straight Line & Direction Angle Visualizer',
                titleAr: 'محاكي المستقيم في الفراغ وزوايا الاتجاه',
                descriptionEn: 'Interactive 3D tool visualizing straight lines, direction cosines, and spatial intersection angles.',
                descriptionAr: 'أداة تفاعلية ثلاثية الأبعاد لعرض الخطوط المستقيمة وجيوب تمام الاتجاه والزاوية بين مستقيمين.'
              }
            },
            {
              id: 'solid_l3',
              titleEn: 'Equations of a Plane in 3D Space & Distance Metrics',
              titleAr: 'معادلة المستوى في الفراغ وحساب الأبعاد',
              summaryEn: 'General, vector, and intercept forms of a plane equation $Ax + By + Cz + D = 0$, normal vector $\\vec{n}$, perpendicular distance from point to plane $L = \\frac{|Ax_1 + By_1 + Cz_1 + D|}{\\sqrt{A^2 + B^2 + C^2}}$, and angle between planes.',
              summaryAr: 'الصور العامة والمتجهية وصورة الأجزاء المقطوعة لمعادلة المستوى $Ax + By + Cz + D = 0$، المتجه العمودي $\\vec{n}$، وطول العمود الساقط من نقطة على مستوى $L = \\frac{|Ax_1 + By_1 + Cz_1 + D|}{\\sqrt{A^2 + B^2 + C^2}}$، وقياس الزاوية بين مستويين.',
              theoryContentEn: `### 1. The Normal Vector and Plane Equation Forms:
Let a plane pass through $A(x_0, y_0, z_0)$ with non-zero perpendicular normal vector $\\vec{n} = (A, B, C)$:
1. **Vector Form (الصورة المتجهية):**
   $$\\vec{n} \\cdot \\vec{r} = \\vec{n} \\cdot \\vec{r}_0$$
2. **Standard Cartesian Form (الصورة القياسية):**
   $$A (x - x_0) + B (y - y_0) + C (z - z_0) = 0$$
3. **General Cartesian Equation (الصورة العامة):**
   $$A x + B y + C z + D = 0 \\quad (\\text{where } D = -\\vec{n} \\cdot \\vec{r}_0)$$
4. **Intercept Form (صورة الأجزاء المقطوعة من المحاور):**
   If the plane intersects the coordinate axes at $(a, 0, 0)$, $(0, b, 0)$, and $(0, 0, c)$:
   $$\\frac{x}{a} + \\frac{y}{b} + \\frac{z}{c} = 1$$

### 2. Perpendicular Distance from Point $P(x_1, y_1, z_1)$ to Plane:
$$L = \\frac{|A x_1 + B y_1 + C z_1 + D|}{\\sqrt{A^2 + B^2 + C^2}}$$
- **Distance from Origin $(0, 0, 0)$:**
  $$L_O = \\frac{|D|}{\\sqrt{A^2 + B^2 + C^2}}$$

### 3. Angle $\\theta$ Between Two Planes:
Given normal vectors $\\vec{n}_1 = (A_1, B_1, C_1)$ and $\\vec{n}_2 = (A_2, B_2, C_2)$:
$$\\cos\\theta = \\frac{|\\vec{n}_1 \\cdot \\vec{n}_2|}{\\|\\vec{n}_1\\| \\|\\vec{n}_2\\|}$$
- **Perpendicular Planes:** $\\vec{n}_1 \\cdot \\vec{n}_2 = 0 \\iff A_1 A_2 + B_1 B_2 + C_1 C_2 = 0$.
- **Parallel Planes:** $\\frac{A_1}{A_2} = \\frac{B_1}{B_2} = \\frac{C_1}{C_2}$.

### 4. Angle $\\theta$ Between a Straight Line $\\vec{d}$ and a Plane $\\vec{n}$:
Because $\\vec{n}$ is perpendicular to the plane, the angle between the line and the plane uses the sine function:
$$\\sin\\theta = \\frac{|\\vec{d} \\cdot \\vec{n}|}{\\|\\vec{d}\\| \\|\\vec{n}\\|}$$`,
              theoryContentAr: `### ١. المتجه العمودي وصور معادلة المستوى في الفراغ:
إذا كان المستوى يمر بالنقطة $A(x_0, y_0, z_0)$ والمتجه العمودي عليه $\\vec{n} = (A, B, C)$:
١. **الصورة المتجهية:**
   $$\\vec{n} \\cdot \\vec{r} = \\vec{n} \\cdot \\vec{r}_0$$
٢. **الصورة القياسية:**
   $$A (x - x_0) + B (y - y_0) + C (z - z_0) = 0$$
٣. **الصورة العامة لمعادلة المستوى:**
   $$A x + B y + C z + D = 0$$
٤. **صورة الأجزاء المقطوعة من محاور الإحداثيات:**
   إذا قطع المستوى المحاور في $(a, 0, 0)$ و $(0, b, 0)$ و $(0, 0, c)$:
   $$\\frac{x}{a} + \\frac{y}{b} + \\frac{z}{c} = 1$$

### ٢. طول العمود الساقط من نقطة $P(x_1, y_1, z_1)$ على المستوى:
$$L = \\frac{|A x_1 + B y_1 + C z_1 + D|}{\\sqrt{A^2 + B^2 + C^2}}$$
- **طول العمود الساقط من نقطة الأصل:**
  $$L_O = \\frac{|D|}{\\sqrt{A^2 + B^2 + C^2}}$$

### ٣. قياس الزاوية $\\theta$ بين مستويين:
$$\\cos\\theta = \\frac{|\\vec{n}_1 \\cdot \\vec{n}_2|}{\\|\\vec{n}_1\\| \\|\\vec{n}_2\\|}$$
- **شرط تعامد مستويين:** $\\vec{n}_1 \\cdot \\vec{n}_2 = 0$.
- **شرط توازي مستويين:** $\\frac{A_1}{A_2} = \\frac{B_1}{B_2} = \\frac{C_1}{C_2}$.

### ٤. قياس الزاوية بين خط مستقيم ومستوى:
تستخدم قانون الجيب لأن المتجه ن عمودي على المستوى:
$$\\sin\\theta = \\frac{|\\vec{d} \\cdot \\vec{n}|}{\\|\\vec{d}\\| \\|\\vec{n}\\|}$$`,
              formulas: [
                { labelEn: '3D Plane General Form', labelAr: 'معادلة المستوى العامة', latex: 'Ax + By + Cz + D = 0' },
                { labelEn: 'Intercept Form of Plane', labelAr: 'صورة الأجزاء المقطوعة', latex: '\\frac{x}{a} + \\frac{y}{b} + \\frac{z}{c} = 1' },
                { labelEn: 'Point to Plane Perpendicular Distance', labelAr: 'طول العمود الساقط على مستوى', latex: 'L = \\frac{|Ax_1 + By_1 + Cz_1 + D|}{\\sqrt{A^2 + B^2 + C^2}}' },
                { labelEn: 'Angle Between Line and Plane', labelAr: 'الزاوية بين مستقيم ومستوى', latex: '\\sin\\theta = \\frac{|\\vec{d} \\cdot \\vec{n}|}{\\|\\vec{d}\\| \\|\\vec{n}\\|}' }
              ],
              moeRef: {
                bookTitleEn: 'Ministry Solid Geometry Textbook Grade 12',
                bookTitleAr: 'كتاب الجبر والهندسة الفراغية - وزارة التربية والتعليم',
                grade: 'Grade 12',
                term: 'Full Year',
                officialCode: 'MOE-SEC3-SOLID-CH2-L2',
                pageRange: 'pp. 136 - 165'
              },
              lessonPlan: {
                titleEn: 'Lesson Plan: Plane Equations, Normal Vectors & Metric Projections',
                titleAr: 'خطة درس: معادلة المستوى والمتجه العمودي والأبعاد القياسية',
                gradeLevel: 'Grade 12 Secondary',
                durationMinutes: 90,
                moeCode: 'MOE-SEC3-SOLID-CH2-L2',
                bloomsObjectivesEn: [
                  'Formulate plane equations given a normal vector and a point or three non-collinear points.',
                  'Calculate the perpendicular distance from any 3D point to a plane.',
                  'Differentiate between angle between two planes (using cos) and angle between line and plane (using sin).'
                ],
                bloomsObjectivesAr: [
                  'صياغة معادلة المستوى بمعلومية المتجه العمودي ونقطة أو ثلاث نقط غير مستقيمة.',
                  'حساب طول العمود الساقط من أي نقطة على المستوى.',
                  'التمييز بين الزاوية بين مستويين (باستخدام جتا) والزاوية بين مستقيم ومستوى (باستخدام جا).'
                ],
                prerequisitesEn: ['Cross product to find perpendicular vector n', '3D distance formula'],
                prerequisitesAr: ['الضرب الاتجاهي لإيجاد المتجه العمودي ن', 'قوانين البعد في الفراغ'],
                keyVocabularyEn: [
                  { term: 'Normal Vector n', definition: 'Vector perpendicular to every line lying in the plane.' },
                  { term: 'Intercept Form', definition: 'x/a + y/b + z/c = 1 for planes intersecting coordinate axes.' }
                ],
                keyVocabularyAr: [
                  { term: 'المتجه العمودي ن', definition: 'متجه عمودي على أي مستقيم يقع داخل المستوى.' },
                  { term: 'صورة الأجزاء المقطوعة', definition: 'س/أ + ص/ب + ع/جـ = ١ حيث أ، ب، جـ هي أطوال الأجزاء المقطوعة من المحاور.' }
                ],
                teachingPacing: [
                  {
                    phaseEn: 'Normal Vector Representation (20 mins)',
                    phaseAr: 'مفهوم المتجه العمودي (٢٠ دقيقة)',
                    duration: '20 mins',
                    activitiesEn: 'Use sheet of paper and perpendicular pen to illustrate n . (r - r0) = 0.',
                    activitiesAr: 'توضيح المتجه العمودي باستخدام ورقة وقلم عمودي عليها لتثبيت صيغة ن . (ر - ر٠) = ٠.'
                  },
                  {
                    phaseEn: 'Distance Formula Mastery (30 mins)',
                    phaseAr: 'إتقان قانون طول العمود (٣٠ دقيقة)',
                    duration: '30 mins',
                    activitiesEn: 'Solve problems calculating distance from point to plane and distance between parallel planes.',
                    activitiesAr: 'حساب طول العمود الساقط من نقطة على مستوى، والبعد بين مستويين متوازيين.'
                  },
                  {
                    phaseEn: 'Line-Plane Angle (25 mins)',
                    phaseAr: 'الزاوية بين مستقيم ومستوى (٢٥ دقيقة)',
                    duration: '25 mins',
                    activitiesEn: 'Drill the crucial exam rule: why line-plane angle uses sin(theta) instead of cos(theta).',
                    activitiesAr: 'التركيز على قاعدة استخدام جا(هـ) للزاوية بين مستقيم ومستوى لأن ن عمودي على المستوى.'
                  },
                  {
                    phaseEn: 'Wrap-Up & Assessment (15 mins)',
                    phaseAr: 'الختام والتقييم (١٥ دقيقة)',
                    duration: '15 mins',
                    activitiesEn: 'Administer exit ticket on distance from origin to plane.',
                    activitiesAr: 'حل بطاقة الخروج لحساب طول العمود الساقط من نقطة الأصل.'
                  }
                ],
                commonMisconceptionsEn: [
                  'Using cos(theta) for the angle between a line and a plane (must use sin(theta)!).',
                  'Forgetting to take absolute value of D in numerator of distance formula.'
                ],
                commonMisconceptionsAr: [
                  'استخدام قانون جتا للزاوية بين مستقيم ومستوى (يجب استخدام جا!).',
                  'نسيان القيمة المطلقة للبسط في قانون طول العمود.'
                ],
                differentiationEn: {
                  struggling: 'Remember mnemonic: Plane vs Plane -> Cosine. Line vs Plane -> Sine.',
                  advanced: 'Find the equation of the plane passing through line of intersection of two planes.'
                },
                differentiationAr: {
                  struggling: 'قاعدة ذهبية: مستوى مع مستوى نستخدم جتا، مستقيم مع مستوى نستخدم جا.',
                  advanced: 'إيجاد معادلة حزمة المستويات المارة بخط تقاطع مستويين.'
                },
                formativeAssessmentEn: 'Find perpendicular distance from point P(1, 2, 3) to plane 2x - 2y + z - 5 = 0.',
                formativeAssessmentAr: 'احسب طول العمود الساقط من النقطة $P(1, 2, 3)$ على المستوى $2x - 2y + z - 5 = 0$.',
                exitTicketQuestion: {
                  questionEn: 'Find length of perpendicular from origin to plane 3x - 4y + 12z - 26 = 0.',
                  questionAr: 'احسب طول العمود الساقط من نقطة الأصل على المستوى $3x - 4y + 12z - 26 = 0$.',
                  solutionEn: 'L = |D| / sqrt(A^2 + B^2 + C^2) = |-26| / sqrt(3^2 + (-4)^2 + 12^2) = 26 / sqrt(9 + 16 + 144) = 26 / sqrt(169) = 26 / 13 = 2 length units.',
                  solutionAr: 'ل = |د| / جذر(أ² + ب² + جـ²) = |-٢٦| / جذر(٩ + ١٦ + ١٤٤) = ٢٦ / جذر(١٦٩) = ٢٦ / ١٣ = ٢ وحدة طول.'
                }
              },
              worksheet: {
                id: 'ws_solid_l3',
                titleEn: 'Solved Worksheet: 3D Planes & Distances',
                titleAr: 'ورقة عمل محلولة: معادلة المستوى والأبعاد',
                descriptionEn: 'Exam standard problems on finding plane equations, distance from point to plane, and angles.',
                descriptionAr: 'مسائل امتحانات الثانوية العامة على معادلة المستوى وحساب طول العمود والزوايا الفراغية.',
                estimatedTimeMinutes: 45,
                problems: [
                  {
                    id: 'p_solid4',
                    titleEn: 'Exam Standard: Perpendicular Distance from Point to Plane',
                    titleAr: 'مسألة امتحانية: طول العمود الساقط من نقطة على مستوى',
                    difficulty: 'exam_standard',
                    diagramType: 'plane_intercepts_3d',
                    questionEn: 'Find the length of the perpendicular $L$ drawn from point $P(2, -1, 3)$ to the plane $2x - 2y + z + 5 = 0$.',
                    questionAr: 'أوجد طول العمود $L$ المرسوم من النقطة $P(2, -1, 3)$ على المستوى $2x - 2y + z + 5 = 0$.',
                    optionsEn: ['4.67\\text{ units}', '4\\text{ units}', '3\\text{ units}', '5\\text{ units}'],
                    optionsAr: ['٤٫٦٧ وحدة طول', '٤ وحدات طول', '٣ وحدات طول', '٥ وحدات طول'],
                    correctAnswer: '4.67\\text{ units}',
                    correctIndex: 0,
                    hintEn: 'L = |A x1 + B y1 + C z1 + D| / sqrt(A^2 + B^2 + C^2). Substitute (2, -1, 3) into 2x - 2y + z + 5.',
                    hintAr: 'ل = |أ س١ + ب ص١ + جـ ع١ + د| / جذر(أ² + ب² + جـ²). عوض بالنقطة (٢، -١، ٣) في معادلة المستوى.',
                    stepByStepSolutionEn: [
                      '1. Identify plane coefficients and point coordinates:',
                      'Plane: $A = 2, B = -2, C = 1, D = 5$.',
                      'Point: $x_1 = 2, y_1 = -1, z_1 = 3$.',
                      '2. Evaluate the numerator:',
                      '$$|A x_1 + B y_1 + C z_1 + D| = |2(2) - 2(-1) + 1(3) + 5| = |4 + 2 + 3 + 5| = |14| = 14$$',
                      '3. Evaluate the denominator:',
                      '$$\\sqrt{A^2 + B^2 + C^2} = \\sqrt{2^2 + (-2)^2 + 1^2} = \\sqrt{4 + 4 + 1} = \\sqrt{9} = 3$$',
                      '4. Calculate perpendicular distance:',
                      '$$L = \\frac{14}{3} \\approx 4.67\\text{ length units}$$'
                    ],
                    stepByStepSolutionAr: [
                      '١. معاملات المستوى وإحداثيات النقطة:',
                      '$A = 2, B = -2, C = 1, D = 5$ والنقطة $(2, -1, 3)$.',
                      '٢. حساب قيمة البسط المطلقة:',
                      '$$|2(2) - 2(-1) + 3 + 5| = |4 + 2 + 3 + 5| = 14$$',
                      '٣. حساب قيمة المقام (معيار المتجه العمودي):',
                      '$$\\sqrt{2^2 + (-2)^2 + 1^2} = \\sqrt{9} = 3$$',
                      '٤. طول العمود الساقط:',
                      '$$L = \\frac{14}{3} \\approx 4.67\\text{ وحدة طول}$$'
                    ],
                    teacherTipEn: 'Direct exam application of the perpendicular distance theorem.',
                    teacherTipAr: 'تطبيق مباشر لقانون طول العمود الساقط من نقطة على مستوى.'
                  },
                  {
                    id: 'p_solid5',
                    titleEn: 'Foundation Problem: Intercept Form of Plane Equation',
                    titleAr: 'مسألة تأسيسية: صورة الأجزاء المقطوعة من محاور الإحداثيات',
                    difficulty: 'easy',
                    diagramType: 'plane_intercepts_3d',
                    questionEn: 'A plane cuts the coordinate axes at $(2, 0, 0)$, $(0, -3, 0)$, and $(0, 0, 4)$. What is the general Cartesian equation of the plane?',
                    questionAr: 'مستوى يقطع محاور الإحداثيات في النقط $(2, 0, 0)$ و $(0, -3, 0)$ و $(0, 0, 4)$. ما هي المعادلة العامة للمستوى؟',
                    optionsEn: [
                      '6x - 4y + 3z - 12 = 0',
                      '6x + 4y + 3z - 12 = 0',
                      '2x - 3y + 4z - 1 = 0',
                      '12x - 8y + 6z - 1 = 0'
                    ],
                    optionsAr: [
                      '٦ س - ٤ ص + ٣ ع - ١٢ = ٠',
                      '٦ س + ٤ ص + ٣ ع - ١٢ = ٠',
                      '٢ س - ٣ ص + ٤ ع - ١ = ٠',
                      '١٢ س - ٨ ص + ٦ ع - ١ = ٠'
                    ],
                    correctAnswer: '6x - 4y + 3z - 12 = 0',
                    correctIndex: 0,
                    hintEn: 'Use x/a + y/b + z/c = 1 with a = 2, b = -3, c = 4. Multiply through by 12.',
                    hintAr: 'استخدم صورة الأجزاء المقطوعة: س/أ + ص/ب + ع/جـ = ١ حيث أ = ٢، ب = -٣، جـ = ٤، ثم اضرب في ١٢.',
                    stepByStepSolutionEn: [
                      '1. Substitute into intercept equation formula:',
                      '$$\\frac{x}{2} + \\frac{y}{-3} + \\frac{z}{4} = 1$$',
                      '$$\\frac{x}{2} - \\frac{y}{3} + \\frac{z}{4} = 1$$',
                      '2. Multiply through by the LCM of denominators (12):',
                      '$$12 \\cdot \\frac{x}{2} - 12 \\cdot \\frac{y}{3} + 12 \\cdot \\frac{z}{4} = 12 \\cdot 1$$',
                      '$$6x - 4y + 3z = 12 \\implies 6x - 4y + 3z - 12 = 0$$'
                    ],
                    stepByStepSolutionAr: [
                      '١. التعويض في صورة الأجزاء المقطوعة:',
                      '$$\\frac{x}{2} - \\frac{y}{3} + \\frac{z}{4} = 1$$',
                      '٢. بالضرب في المضاعف المشترك للأعداد (١٢):',
                      '$$6x - 4y + 3z = 12 \\implies 6x - 4y + 3z - 12 = 0$$'
                    ],
                    teacherTipEn: 'A textbook classic for finding plane equations without performing cross products!',
                    teacherTipAr: 'صورة الأجزاء المقطوعة توفر وقتاً كبيراً وتغني عن حساب محدد الضرب الاتجاهي لإيجاد معادلة المستوى.'
                  },
                  {
                    id: 'p_solid6',
                    titleEn: 'HOTS Problem: Distance Between Two Parallel Planes',
                    titleAr: 'مسألة مهارات عليا: البعد العمودي بين مستويين متوازيين',
                    difficulty: 'hots',
                    diagramType: 'plane_intercepts_3d',
                    questionEn: 'Find the distance $D$ between the two parallel planes $\\pi_1: 2x - y + 2z - 4 = 0$ and $\\pi_2: 4x - 2y + 4z + 10 = 0$.',
                    questionAr: 'احسب البعد العمودي $D$ بين المستويين المتوازيين $\\pi_1: 2x - y + 2z - 4 = 0$ و $\\pi_2: 4x - 2y + 4z + 10 = 0$.',
                    optionsEn: ['3\\text{ units}', '2\\text{ units}', '1.5\\text{ units}', '4.5\\text{ units}'],
                    optionsAr: ['٣ وحدات طول', '٢ وحدة طول', '١٫٥ وحدة طول', '٤٫٥ وحدة طول'],
                    correctAnswer: '3\\text{ units}',
                    correctIndex: 0,
                    hintEn: 'First divide the second plane by 2 so both have identical coefficients (2, -1, 2). Then D = |D1 - D2| / sqrt(A^2 + B^2 + C^2).',
                    hintAr: 'اقسم معادلة المستوى الثاني على ٢ لتتطابق المعاملات (٢، -١، ٢) ثم احسب د = |د١ - د٢| / معيار ن.',
                    stepByStepSolutionEn: [
                      '1. Standardize plane coefficients so normals are identical:',
                      'Plane 1: $2x - y + 2z - 4 = 0 \\implies D_1 = -4$.',
                      'Plane 2: Divide by 2:',
                      '$$\\frac{4x - 2y + 4z + 10}{2} = 0 \\implies 2x - y + 2z + 5 = 0 \\implies D_2 = 5$$',
                      '2. The distance between two parallel planes with identical $(A, B, C)$ is:',
                      '$$D = \\frac{|D_2 - D_1|}{\\sqrt{A^2 + B^2 + C^2}}$$',
                      '$$D = \\frac{|5 - (-4)|}{\\sqrt{2^2 + (-1)^2 + 2^2}} = \\frac{|9|}{\\sqrt{4 + 1 + 4}} = \\frac{9}{\\sqrt{9}} = \\frac{9}{3} = 3\\text{ length units}$$'
                    ],
                    stepByStepSolutionAr: [
                      '١. توحيد معاملات المستويين المتوازيين:',
                      'المستوى الأول: $2x - y + 2z - 4 = 0 \\implies D_1 = -4$',
                      'المستوى الثاني بالقسمة على ٢: $2x - y + 2z + 5 = 0 \\implies D_2 = 5$',
                      '٢. قانون البعد بين مستويين متوازيين بعد توحيد المعاملات:',
                      '$$D = \\frac{|D_2 - D_1|}{\\sqrt{A^2 + B^2 + C^2}} = \\frac{|5 - (-4)|}{\\sqrt{4 + 1 + 4}} = \\frac{9}{3} = 3\\text{ وحدة طول}$$'
                    ],
                    teacherTipEn: 'A crucial exam caveat: You MUST ensure normal coefficients (A, B, C) are exactly matched before applying |D2 - D1| / ||n||!',
                    teacherTipAr: 'تحذير امتحاني هام جداً: يجب توحيد معاملات س وص وع في المستويين قبل تطبيق قانون فرق الثوابت على المعيار!'
                  }
                ]
              },
              interactiveWidget: {
                type: '3d_vectors',
                titleEn: '3D Plane Normal & Distance Explorer',
                titleAr: 'مستكشف المستويات والمتجه العمودي في الفراغ',
                descriptionEn: 'Interactive 3D WebGL simulator exploring plane orientation, normal vector n, and perpendicular projection distance.',
                descriptionAr: 'محاكي تفاعلي ثلاثي الأبعاد لتوضيح اتجاه المستوى والمتجه العمودي وإسقاط النقطة.'
              }
            }
          ],
          solvedExamples: solidCh2SolvedExamples,
          exerciseProblems: solidCh2Exercises,
          databank: solidCh2Databank
        }
  ]
};
