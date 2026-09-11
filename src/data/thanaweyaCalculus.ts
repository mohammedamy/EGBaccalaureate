import type { Branch } from '../types/curriculum';
import { calcCh1SolvedExamples, calcCh1Exercises } from './textbook/thanaweya/calcCh1Textbook';
import { calcCh1Databank } from './databanks/thanaweya/calcCh1Databank';
import { calcCh2SolvedExamples, calcCh2Exercises } from './textbook/thanaweya/calcCh2Textbook';
import { calcCh2Databank } from './databanks/thanaweya/calcCh2Databank';
import { calcCh3SolvedExamples, calcCh3Exercises } from './textbook/thanaweya/calcCh3Textbook';
import { calcCh3Databank } from './databanks/thanaweya/calcCh3Databank';
import { calcCh4SolvedExamples, calcCh4Exercises } from './textbook/thanaweya/calcCh4Textbook';
import { calcCh4Databank } from './databanks/thanaweya/calcCh4Databank';

export const thanaweyaCalculusBranch: Branch = {
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
      ],
      solvedExamples: calcCh1SolvedExamples,
      exerciseProblems: calcCh1Exercises,
      databank: calcCh1Databank
    },
    {
      id: 'calc_ch2',
      chapterNumber: 2,
      titleEn: 'Exponential & Logarithmic Functions',
      titleAr: 'الدوال الأسية واللوغاريتمية',
      descriptionEn: 'Euler\'s constant e, limits involving exponential and logarithmic expressions, differentiation of natural and general exponential/logarithmic functions, and integration techniques.',
      descriptionAr: 'العدد النيبيري هـ، نهايات الدوال الأسية واللوغاريتمية، اشتقاق الدوال ذات الأساس الطبيعي والمعتاد، والاشتقاق اللوغاريتمي، وتكاملات الدوال الأسية واللوغاريتمية والكسور.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'calc_l2',
          titleEn: 'Euler\'s Constant, Limits & Exponential Differentiation',
          titleAr: 'العدد النيبيري، النهايات، واشتقاق الدوال الأسية واللوغاريتمية',
          summaryEn: 'Understanding the natural constant e = lim (1 + 1/x)^x, essential limits lim (e^x - 1)/x = 1 and lim (a^x - 1)/x = ln a, and differentiation rules for e^(f(x)), a^(f(x)), ln(f(x)), and log_a(f(x)).',
          summaryAr: 'فهم العدد النيبيري $e = \\lim_{x \\to \\infty}(1 + \\frac{1}{x})^x$، والنهايات القياسية $\\lim_{x \\to 0}\\frac{a^x - 1}{x} = \\ln a$، وقواعد اشتقاق $e^{f(x)}$ و $a^{f(x)}$ و $\\ln(f(x))$ و $\\log_a(f(x))$.',
          theoryContentEn: `### 1. The Natural Base $e$ (العدد النيبيري):
The number $e$ (Euler\'s constant, $e \\approx 2.71828$) is defined by the fundamental limit:
$$e = \\lim_{x \\to \\infty} \\left(1 + \\frac{1}{x}\\right)^x = \\lim_{y \\to 0} (1 + y)^{1/y}$$
- **General Form:**
  $$\\lim_{x \\to \\infty} \\left(1 + \\frac{k}{x}\\right)^{mx} = e^{km}$$
  $$\\lim_{x \\to 0} (1 + kx)^{m/x} = e^{km}$$

### 2. Standard Exponential & Logarithmic Limits:
1. $\\lim_{x \\to 0} \\frac{e^x - 1}{x} = 1$
2. $\\lim_{x \\to 0} \\frac{a^x - 1}{x} = \\ln a \\quad (a > 0, \\, a \\neq 1)$
3. $\\lim_{x \\to 0} \\frac{\\ln(1 + x)}{x} = 1$
4. $\\lim_{x \\to 0} \\frac{\\log_a(1 + x)}{x} = \\log_a e = \\frac{1}{\\ln a}$

### 3. Derivatives of Exponential Functions:
- **Natural Exponential Function ($y = e^u$ where $u = f(x)$):**
  $$\\frac{d}{dx}[e^u] = e^u \\cdot \\frac{du}{dx}$$
- **General Exponential Function ($y = a^u$ where $u = f(x)$ and $a > 0$):**
  $$\\frac{d}{dx}[a^u] = a^u \\cdot \\frac{du}{dx} \\cdot \\ln a$$

### 4. Derivatives of Logarithmic Functions:
- **Natural Logarithmic Function ($y = \\ln|u|$):**
  $$\\frac{d}{dx}[\\ln|u|] = \\frac{1}{u} \\cdot \\frac{du}{dx} = \\frac{u'}{u}$$
- **General Logarithmic Function ($y = \\log_a|u|$):**
  $$\\frac{d}{dx}[\\log_a|u|] = \\frac{u'}{u \\ln a} = \\frac{u'}{u} \\log_a e$$

### 5. Logarithmic Differentiation (الاشتقاق اللوغاريتمي):
Used when a function contains variable base AND variable exponent $y = [f(x)]^{g(x)}$:
1. Take natural logarithm of both sides: $\\ln y = g(x) \\ln[f(x)]$.
2. Differentiate implicitly with respect to $x$:
   $$\\frac{1}{y} \\frac{dy}{dx} = g'(x) \\ln[f(x)] + g(x) \\frac{f'(x)}{f(x)}$$
3. Multiply both sides by $y$.`,
          theoryContentAr: `### ١. تعريف العدد النيبيري $e$ كـ نهاية:
العدد النيبيري (ثابت أويلر $e \\approx 2.71828$) يُعرف بالنهاية الأساسية:
$$e = \\lim_{x \\to \\infty} \\left(1 + \\frac{1}{x}\\right)^x = \\lim_{y \\to 0} (1 + y)^{1/y}$$
- **الصورة العامة للتعامل مع الامتحانات:**
  $$\\lim_{x \\to \\infty} \\left(1 + \\frac{k}{x}\\right)^{mx} = e^{km}$$
  $$\\lim_{x \\to 0} (1 + kx)^{m/x} = e^{km}$$

### ٢. النهايات القياسية للدوال الأسية واللوغاريتمية:
١. $\\lim_{x \\to 0} \\frac{e^x - 1}{x} = 1$
٢. $\\lim_{x \\to 0} \\frac{a^x - 1}{x} = \\ln a = \\log_e a$ (حيث $a > 0, \\, a \\neq 1$)
٣. $\\lim_{x \\to 0} \\frac{\\ln(1 + x)}{x} = 1$
٤. $\\lim_{x \\to 0} \\frac{\\log_a(1 + x)}{x} = \\log_a e = \\frac{1}{\\ln a}$

### ٣. مشتقات الدوال الأسية:
- **مشتقة الدالة الأسية الطبيعية ($y = e^u$ حيث $u = f(x)$):**
  $$\\frac{d}{dx}[e^u] = e^u \\cdot \\frac{du}{dx}$$
  *(مشتقة الدالة الأسية الطبيعية تساوي الدالة نفسها في مشتقة الأس)*
- **مشتقة الدالة الأسية لأي أساس ($y = a^u$):**
  $$\\frac{d}{dx}[a^u] = a^u \\cdot \\frac{du}{dx} \\cdot \\ln a$$

### ٤. مشتقات الدوال اللوغاريتمية:
- **مشتقة اللوغاريتم الطبيعي ($y = \\ln|u|$):**
  $$\\frac{d}{dx}[\\ln|u|] = \\frac{u'}{u} = \\frac{\\text{مشتقة الدالة}}{\\text{الدالة نفسها}}$$
- **مشتقة اللوغاريتم العام ($y = \\log_a|u|$):**
  $$\\frac{d}{dx}[\\log_a|u|] = \\frac{u'}{u \\ln a}$$

### ٥. الاشتقاق اللوغاريتمي:
نلجأ للاشتقاق اللوغاريتمي عندما يكون الأساس دالة والأس دالة أخرى مثل $y = [f(x)]^{g(x)}$:
١. نأخذ اللوغاريتم الطبيعي للطرفين: $\\ln y = g(x) \\ln[f(x)]$.
٢. نشتق الطرفين ضمنياً بالنسبة لـ $x$:
   $$\\frac{1}{y} \\frac{dy}{dx} = g'(x) \\ln[f(x)] + g(x) \\frac{f'(x)}{f(x)}$$
٣. نضرب الطرفين في $y$ للوصول إلى $\\frac{dy}{dx}$.`,
          formulas: [
            { labelEn: 'Euler Constant Limit Definition', labelAr: 'تعريف العدد النيبيري كـ نهاية', latex: 'e = \\lim_{x \\to \\infty} \\left(1 + \\frac{1}{x}\\right)^x' },
            { labelEn: 'General Exponential Limit', labelAr: 'نهاية الدالة الأسية العامة', latex: '\\lim_{x \\to 0} \\frac{a^x - 1}{x} = \\ln a' },
            { labelEn: 'd/dx [e^f(x)]', labelAr: 'مشتقة هـ^(د(س))', latex: '\\frac{d}{dx}[e^{f(x)}] = f\'(x) e^{f(x)}' },
            { labelEn: 'd/dx [ln |f(x)|]', labelAr: 'مشتقة لو هـ |د(س)|', latex: '\\frac{d}{dx}[\\ln|f(x)|] = \\frac{f\'(x)}{f(x)}' }
          ],
          moeRef: {
            bookTitleEn: 'Ministry Calculus Textbook Grade 12',
            bookTitleAr: 'كتاب التفاضل والتكامل للصف الثالث الثانوي - وزارة التربية والتعليم',
            grade: 'Grade 12',
            term: 'Full Year',
            officialCode: 'MOE-SEC3-CALC-CH2-L1',
            pageRange: 'pp. 17 - 42'
          },
          lessonPlan: {
            titleEn: 'Lesson Plan: Euler\'s Number, Exponential Limits & Differentiation',
            titleAr: 'خطة درس: العدد النيبيري، النهايات، واشتقاق الدوال الأسية',
            gradeLevel: 'Grade 12 Secondary',
            durationMinutes: 90,
            moeCode: 'MOE-SEC3-CALC-CH2-L1',
            bloomsObjectivesEn: [
              'Evaluate exponential and logarithmic limits using standard limit theorems.',
              'Differentiate exponential and logarithmic functions with chain rule.',
              'Apply logarithmic differentiation to solve power-of-function problems.'
            ],
            bloomsObjectivesAr: [
              'حساب النهايات الأسية واللوغاريتمية باستخدام نظريات النهايات القياسية.',
              'اشتقاق الدوال الأسية واللوغاريتمية مع تطبيق قاعدة السلسلة.',
              'استخدام الاشتقاق اللوغاريتمي لإيجاد مشتقة دالة مرفوعة لدالة.'
            ],
            prerequisitesEn: ['Laws of exponents and logarithms', 'Chain rule and implicit differentiation'],
            prerequisitesAr: ['قوانين الأسس واللوغاريتمات', 'قاعدة السلسلة والاشتقاق الضمني'],
            keyVocabularyEn: [
              { term: 'Euler\'s Constant e', definition: 'The unique base whose exponential function has derivative equal to itself.' },
              { term: 'Natural Logarithm ln', definition: 'Logarithm to the natural base e (log_e).' },
              { term: 'Logarithmic Differentiation', definition: 'Taking ln of both sides before differentiating variable-base/variable-exponent expressions.' }
            ],
            keyVocabularyAr: [
              { term: 'العدد النيبيري هـ', definition: 'الأساس الطبيعي الوحيد الذي مشتقة دالته الأسية تساوي الدالة نفسها.' },
              { term: 'اللوغاريتم الطبيعي', definition: 'اللوغاريتم الذي أساسه العدد النيبيري هـ ويرمز له بـ لو هـ أو ln.' },
              { term: 'الاشتقاق اللوغاريتمي', definition: 'أخذ اللوغاريتم الطبيعي للطرفين قبل الاشتقاق عند وجود دالة مرفوعة لأس دالة.' }
            ],
            teachingPacing: [
              {
                phaseEn: 'Compound Interest & Discovery of e (15 mins)',
                phaseAr: 'الفائدة المركبة واكتشاف العدد النيبيري (١٥ دقيقة)',
                duration: '15 mins',
                activitiesEn: 'Explore limit of (1 + 1/n)^n as compounding intervals n -> infinity to arrive at e = 2.718...',
                activitiesAr: 'استكشاف نهاية (١ + ١/ن)^ن عند زيادة فترات التقسيم للوصول إلى العدد النيبيري.'
              },
              {
                phaseEn: 'Limit Manipulation Drills (25 mins)',
                phaseAr: 'تدريبات على النهايات القياسية (٢٥ دقيقة)',
                duration: '25 mins',
                activitiesEn: 'Solve classic exam limits like lim (1 + 3/x)^(2x) = e^6 and lim (5^x - 1)/x = ln 5.',
                activitiesAr: 'حل مسائل نهايات امتحانية نموذجية مثل نهاية (١ + ٣/س)^(٢س) = هـ^٦.'
              },
              {
                phaseEn: 'Differentiation Rules & Logarithmic Technique (35 mins)',
                phaseAr: 'قواعد الاشتقاق والاشتقاق اللوغاريتمي (٣٥ دقيقة)',
                duration: '35 mins',
                activitiesEn: 'Demonstrate d/dx(e^(x^2)) and solve y = x^(sin x) using logarithmic differentiation.',
                activitiesAr: 'شرح اشتقاق هـ^(س²) وحل مسألة ص = س^(جا س) بالاشتقاق اللوغاريتمي.'
              },
              {
                phaseEn: 'Assessment & Exit Ticket (15 mins)',
                phaseAr: 'التقييم وبطاقة الخروج (١٥ دقيقة)',
                duration: '15 mins',
                activitiesEn: 'Evaluate student mastery on tangent slope of exponential curve.',
                activitiesAr: 'حل بطاقة الخروج لحساب ميل المماس لمنحنى دالة أسية.'
              }
            ],
            commonMisconceptionsEn: [
              'Treating a^x like x^n and writing d/dx[a^x] = x a^(x-1)! (Power rule only applies to constant exponents).',
              'Forgetting to multiply by ln(a) when differentiating general exponential functions a^u.'
            ],
            commonMisconceptionsAr: [
              'معاملة أ^س مثل س^ن وكتابة مشتقتها س أ^(س-١)! (قاعدة القوة تطبق فقط عندما يكون الأس ثابتاً).',
              'نسيان الضرب في لو_هـ(أ) عند اشتقاق الدالة الأسية للأساس أ.'
            ],
            differentiationEn: {
              struggling: 'Distinguish clearly: x^5 (power rule), 5^x (exponential rule), x^x (logarithmic differentiation).',
              advanced: 'Find the nth derivative of y = x e^x using Leibniz product rule.'
            },
            differentiationAr: {
              struggling: 'المقارنة بين الحالات الثلاث: س⁵ (قاعدة القوة)، ٥^س (قاعدة الدالة الأسية)، س^س (اشتقاق لوغاريتمي).',
              advanced: 'إيجاد المشتقة النونية للدالة ص = س هـ^س باستخدام مبرهنة لايبنتز لحاصل ضرب دالتين.'
            },
            formativeAssessmentEn: 'Find limit as x -> 0 of ((3^x - 2^x) / x).',
            formativeAssessmentAr: 'احسب نهاية $\\lim_{x \\to 0} \\frac{3^x - 2^x}{x}$.',
            exitTicketQuestion: {
              questionEn: 'Find dy/dx for y = x^(x) at x = 1.',
              questionAr: 'أوجد قيمة ص\' للدالة ص = س^س عند س = ١.',
              solutionEn: 'ln y = x ln x. Differentiating implicitly: (1/y) dy/dx = ln x + x(1/x) = ln x + 1. Thus dy/dx = x^x (ln x + 1). At x = 1: dy/dx = 1^1 (ln 1 + 1) = 1(0 + 1) = 1.',
              solutionAr: 'بأخذ لو هـ للطرفين: لو ص = س لو س. بالاشتقاق الضمني: (١/ص) ص\' = لو س + س(١/س) = لو س + ١. إذن ص\' = س^س (لو س + ١). عند س = ١: ص\' = ١^١ (لو ١ + ١) = ١(٠ + ١) = ١.'
            }
          },
          worksheet: {
            id: 'ws_calc_l2',
            titleEn: 'Solved Worksheet: Exponential Limits & Derivatives',
            titleAr: 'ورقة عمل محلولة: النهايات واشتقاق الدوال الأسية',
            descriptionEn: 'Official Thanaweya Amma exam problems on Euler\'s constant limits and exponential derivatives.',
            descriptionAr: 'مسائل امتحانات الثانوية العامة على نهايات العدد النيبيري واشتقاق الدوال الأسية واللوغاريتمية.',
            estimatedTimeMinutes: 45,
            problems: [
              {
                id: 'p_calc1',
                titleEn: 'Exam Standard: Natural Constant Limit with Linear Exponent',
                titleAr: 'مسألة امتحانية: نهاية الدالة الأسية المرتبطة بالعدد النيبيري',
                difficulty: 'exam_standard',
                questionEn: 'Evaluate the limit: $$\\lim_{x \\to \\infty} \\left( \\frac{x + 5}{x + 2} \\right)^{x + 3}$$',
                questionAr: 'احسب قيمة النهاية: $$\\lim_{x \\to \\infty} \\left( \\frac{x + 5}{x + 2} \\right)^{x + 3}$$',
                optionsEn: ['e', 'e^2', 'e^3', 'e^5'],
                optionsAr: ['هـ', 'هـ²', 'هـ³', 'هـ⁵'],
                correctAnswer: 'e^3',
                correctIndex: 2,
                hintEn: 'Rewrite the fraction as 1 + 3/(x + 2). Then let y = x + 2 so the exponent becomes y + 1.',
                hintAr: 'أعد كتابة الكسر بالصورة: ١ + ٣/(س + ٢)، ثم ضع ص = س + ٢ ليصبح الأس ص + ١.',
                stepByStepSolutionEn: [
                  '1. Transform the fraction inside the base:',
                  '$$\\frac{x + 5}{x + 2} = \\frac{(x + 2) + 3}{x + 2} = 1 + \\frac{3}{x + 2}$$',
                  '2. Rewrite the exponent in terms of $(x + 2)$:',
                  '$$x + 3 = (x + 2) + 1$$',
                  '3. Express the limit:',
                  '$$\\lim_{x \\to \\infty} \\left( 1 + \\frac{3}{x + 2} \\right)^{(x + 2) + 1} = \\lim_{x \\to \\infty} \\left( 1 + \\frac{3}{x + 2} \\right)^{x + 2} \\cdot \\lim_{x \\to \\infty} \\left( 1 + \\frac{3}{x + 2} \\right)^1$$',
                  '4. Let $y = x + 2$, as $x \\to \\infty$, $y \\to \\infty$:',
                  '$$\\lim_{y \\to \\infty} \\left( 1 + \\frac{3}{y} \\right)^y = e^3$$',
                  'The second factor evaluates to $(1 + 0)^1 = 1$.',
                  'Therefore, the limit is $e^3 \\cdot 1 = e^3$.'
                ],
                stepByStepSolutionAr: [
                  '١. تعديل صورة الكسر داخل الأساس:',
                  '$$\\frac{x + 5}{x + 2} = \\frac{(x + 2) + 3}{x + 2} = 1 + \\frac{3}{x + 2}$$',
                  '٢. تعديل الأس بدلالة المقدار $(x + 2)$:',
                  '$$x + 3 = (x + 2) + 1$$',
                  '٣. توزيع النهاية على حاصل الضرب:',
                  '$$\\lim_{x \\to \\infty} \\left( 1 + \\frac{3}{x + 2} \\right)^{x + 2} \\times \\lim_{x \\to \\infty} \\left( 1 + \\frac{3}{x + 2} \\right)^1$$',
                  '٤. بتعويض $y = x + 2$ نجد أن النهاية الأولى تساوي $e^3$ والنهاية الثانية تساوي $1$:',
                  '$$\\text{الناتج} = e^3 \\times 1 = e^3$$'
                ],
                teacherTipEn: 'A recurring Thanaweya question! Shortcut: (x + a)/(x + b) to power (x + c) always equals e^(a - b). Here e^(5 - 2) = e^3!',
                teacherTipAr: 'قاعدة سريعة للامتحان: نهاية (س + أ)/(س + ب) الكل أس (س + جـ) تساوي دائماً هـ^(أ - ب). هنا هـ^(٥ - ٢) = هـ³!'
              },
              {
                id: 'p_calc2',
                titleEn: 'Foundation Problem: Derivative of Natural Logarithm with Composite Argument',
                titleAr: 'مسألة تأسيسية: اشتقاق اللوغاريتم الطبيعي',
                difficulty: 'easy',
                questionEn: 'Find the first derivative $\\frac{dy}{dx}$ of the function $y = \\ln(x^2 + 4x + 5)$.',
                questionAr: 'أوجد المشتقة الأولى $\\frac{dy}{dx}$ للدالة $y = \\ln(x^2 + 4x + 5)$.',
                optionsEn: [
                  '\\frac{2x + 4}{x^2 + 4x + 5}',
                  '\\frac{1}{x^2 + 4x + 5}',
                  '\\frac{2x}{x^2 + 4x + 5}',
                  '(2x + 4) \\ln(x^2 + 4x + 5)'
                ],
                optionsAr: [
                  '\\frac{2x + 4}{x^2 + 4x + 5}',
                  '\\frac{1}{x^2 + 4x + 5}',
                  '\\frac{2x}{x^2 + 4x + 5}',
                  '(2x + 4) \\ln(x^2 + 4x + 5)'
                ],
                correctAnswer: '\\frac{2x + 4}{x^2 + 4x + 5}',
                correctIndex: 0,
                hintEn: 'd/dx [ln(u)] = u\' / u. Differentiate the polynomial argument and divide by the argument itself.',
                hintAr: 'مشتقة لو هـ (د(س)) = د\'(س) / د(س). اشتق المقدار وضعه في البسط مقسوماً على نفس المقدار في المقام.',
                stepByStepSolutionEn: [
                  'Apply the logarithmic derivative rule:',
                  '$$\\frac{d}{dx}[\\ln(u)] = \\frac{u\'}{u}$$',
                  'Here $u = x^2 + 4x + 5$, so $u\' = \\frac{d}{dx}[x^2 + 4x + 5] = 2x + 4$.',
                  'Substitute into the formula:',
                  '$$\\frac{dy}{dx} = \\frac{2x + 4}{x^2 + 4x + 5}$$'
                ],
                stepByStepSolutionAr: [
                  'تطبيق قاعدة اشتقاق اللوغاريتم الطبيعي:',
                  '$$\\frac{d}{dx}[\\ln(u)] = \\frac{u\'}{u}$$',
                  'المقدار $u = x^2 + 4x + 5$، ومشتقته $u\' = 2x + 4$.',
                  'إذن المشتقة الأولى هي:',
                  '$$\\frac{dy}{dx} = \\frac{2x + 4}{x^2 + 4x + 5}$$'
                ],
                teacherTipEn: 'A foundational question that ensures students do not confuse ln differentiation with 1/x.',
                teacherTipAr: 'سؤال تأسيسي يثبت قاعدة مشتقة الدالة على الدالة نفسها.'
              },
              {
                id: 'p_calc3',
                titleEn: 'HOTS Problem: Tangent Slope via Logarithmic Differentiation',
                titleAr: 'مسألة مهارات عليا: ميل المماس بالاشتقاق اللوغاريتمي',
                difficulty: 'hots',
                questionEn: 'Find the slope of the tangent line to the curve $y = (\\sin x)^x$ at the point where $x = \\frac{\\pi}{2}$.',
                questionAr: 'أوجد ميل المماس للمنحنى $y = (\\sin x)^x$ عند النقطة التي عندها $x = \\frac{\\pi}{2}$.',
                optionsEn: ['0', '1', '\\frac{\\pi}{2}', '\\ln\\left(\\frac{\\pi}{2}\\right)'],
                optionsAr: ['٠', '١', '\\frac{\\pi}{2}', '\\ln\\left(\\frac{\\pi}{2}\\right)'],
                correctAnswer: '0',
                correctIndex: 0,
                hintEn: 'Take ln of both sides: ln y = x ln(sin x). Differentiate implicitly and evaluate at x = pi/2.',
                hintAr: 'خذ اللوغاريتم الطبيعي للطرفين: لو ص = س لو(جا س). اشتق ضمنياً وعوض عن س = باي/٢.',
                stepByStepSolutionEn: [
                  '1. Apply natural logarithm to both sides:',
                  '$$\\ln y = \\ln[(\\sin x)^x] = x \\ln(\\sin x)$$',
                  '2. Differentiate both sides implicitly with respect to $x$:',
                  '$$\\frac{1}{y} \\frac{dy}{dx} = (1) \\cdot \\ln(\\sin x) + x \\cdot \\frac{\\cos x}{\\sin x} = \\ln(\\sin x) + x \\cot x$$',
                  '3. Multiply by $y$:',
                  '$$\\frac{dy}{dx} = (\\sin x)^x [\\ln(\\sin x) + x \\cot x]$$',
                  '4. Evaluate at $x = \\frac{\\pi}{2}$:',
                  '$$\\sin\\left(\\frac{\\pi}{2}\\right) = 1 \\implies \\ln(1) = 0$$',
                  '$$\\cot\\left(\\frac{\\pi}{2}\\right) = 0$$',
                  '$$\\frac{dy}{dx}\\Big|_{x = \\frac{\\pi}{2}} = (1)^{\\pi/2} [0 + 0] = 1 \\cdot 0 = 0$$'
                ],
                stepByStepSolutionAr: [
                  '١. بأخذ اللوغاريتم الطبيعي للطرفين:',
                  '$$\\ln y = x \\ln(\\sin x)$$',
                  '٢. بالاشتقاق الضمني بالنسبة إلى $x$:',
                  '$$\\frac{1}{y} \\frac{dy}{dx} = \\ln(\\sin x) + x \\frac{\\cos x}{\\sin x} = \\ln(\\sin x) + x \\cot x$$',
                  '$$\\frac{dy}{dx} = (\\sin x)^x [\\ln(\\sin x) + x \\cot x]$$',
                  '٣. بالتعويض عن $x = \\frac{\\pi}{2}$:',
                  '$$\\sin\\left(\\frac{\\pi}{2}\\right) = 1 \\implies \\ln(1) = 0, \\quad \\cot\\left(\\frac{\\pi}{2}\\right) = 0$$',
                  '$$\\frac{dy}{dx}\\Big|_{x = \\frac{\\pi}{2}} = (1)^{\\pi/2} [0 + 0] = 0$$'
                ],
                teacherTipEn: 'A slope of 0 indicates that the curve has a horizontal tangent at (pi/2, 1)!',
                teacherTipAr: 'ميل المماس يساوي صفراً، مما يعني أن المنحنى له مماس أفقي يوازي محور السينات عند (باي/٢، ١).'
              }
            ]
          },
          interactiveWidget: {
            type: 'calculus_tangent',
            titleEn: 'Exponential Curve & Euler Constant Visualizer',
            titleAr: 'محاكي منحنى الدالة الأسية والعدد النيبيري',
            descriptionEn: 'Interactive visualizer exploring the exponential growth rate and slope equality dy/dx = y for e^x.',
            descriptionAr: 'محاكي تفاعلي يوضح نمو الدالة الأسية وخاصية تساوي ميل المماس مع قيمة الدالة نفسها للدالة هـ^س.'
          }
        },
        {
          id: 'calc_l3',
          titleEn: 'Integration of Exponential & Logarithmic Functions',
          titleAr: 'تكامل الدوال الأسية واللوغاريتمية والكسور',
          summaryEn: 'Integral rules for exponential functions Integral e^(f(x)) f\'(x) dx = e^(f(x)) + C, the fundamental logarithmic quotient rule Integral f\'(x)/f(x) dx = ln|f(x)| + C, and trigonometric integrals via ln.',
          summaryAr: 'قواعد تكامل الدوال الأسية $\\int e^{f(x)} f\'(x) dx = e^{f(x)} + C$، وقاعدة تكامل بسط مشتقة المقام $\\int \\frac{f\'(x)}{f(x)} dx = \\ln|f(x)| + C$، وتكاملات الدوال المثلثية باللوغاريتم.',
          theoryContentEn: `### 1. Integration of Exponential Functions:
1. **Natural Exponential Integral:**
   $$\\int e^x \\, dx = e^x + C$$
   $$\\int e^{ax + b} \\, dx = \\frac{1}{a} e^{ax + b} + C$$
   $$\\int f'(x) e^{f(x)} \\, dx = e^{f(x)} + C$$
2. **General Exponential Integral ($a > 0, a \\neq 1$):**
   $$\\int a^x \\, dx = \\frac{a^x}{\\ln a} + C$$
   $$\\int f'(x) a^{f(x)} \\, dx = \\frac{a^{f(x)}}{\\ln a} + C$$

### 2. The Fundamental Logarithmic Integral Rule:
When the numerator of a fraction is the derivative of its denominator:
$$\\int \\frac{f'(x)}{f(x)} \\, dx = \\ln|f(x)| + C$$
- **Special Case ($f(x) = x$):**
  $$\\int \\frac{1}{x} \\, dx = \\ln|x| + C$$
- **Linear Denominator:**
  $$\\int \\frac{1}{ax + b} \\, dx = \\frac{1}{a} \\ln|ax + b| + C$$

### 3. Trigonometric Integrals Evaluated via Natural Logarithm:
1. **Tangent Integral:**
   $$\\int \\tan x \\, dx = \\int \\frac{\\sin x}{\\cos x} \\, dx = -\\int \\frac{-\\sin x}{\\cos x} \\, dx = -\\ln|\\cos x| + C = \\ln|\\sec x| + C$$
2. **Cotangent Integral:**
   $$\\int \\cot x \\, dx = \\int \\frac{\\cos x}{\\sin x} \\, dx = \\ln|\\sin x| + C$$
3. **Secant Integral:**
   $$\\int \\sec x \\, dx = \\int \\frac{\\sec x (\\sec x + \\tan x)}{\\sec x + \\tan x} \\, dx = \\ln|\\sec x + \\tan x| + C$$
4. **Cosecant Integral:**
   $$\\int \\csc x \\, dx = \\int \\frac{\\csc x (\\csc x - \\cot x)}{\\csc x - \\cot x} \\, dx = \\ln|\\csc x - \\cot x| + C$$`,
          theoryContentAr: `### ١. تكاملات الدوال الأسية:
١. **تكامل الدالة الأسية الطبيعية:**
   $$\\int e^x \\, dx = e^x + C$$
   $$\\int e^{ax + b} \\, dx = \\frac{1}{a} e^{ax + b} + C$$
   $$\\int f'(x) e^{f(x)} \\, dx = e^{f(x)} + C$$
   *(تكامل هـ مرفوعة لدالة مضروبة في مشتقة الأس يساوي هـ مرفوعة لنفس الدالة + ثابت)*
٢. **تكامل الدالة الأسية لأي أساس $a$:**
   $$\\int a^x \\, dx = \\frac{a^x}{\\ln a} + C$$
   $$\\int f'(x) a^{f(x)} \\, dx = \\frac{a^{f(x)}}{\\ln a} + C$$

### ٢. قاعدة التكامل باللوغاريتم الطبيعي (البسط مشتقة المقام):
إذا كان بسط الكسر هو المشتقة الأولى للمقام:
$$\\int \\frac{f'(x)}{f(x)} \\, dx = \\ln|f(x)| + C = \\log_e |f(x)| + C$$
- **حالة خاصة شهيرة:**
  $$\\int \\frac{1}{x} \\, dx = \\ln|x| + C$$
- **المقام مقدار من الدرجة الأولى:**
  $$\\int \\frac{1}{ax + b} \\, dx = \\frac{1}{a} \\ln|ax + b| + C$$

### ٣. تكاملات الدوال المثلثية الناتجة باللوغاريتم الطبيعي:
١. **تكامل دالة الظل (ظا):**
   $$\\int \\tan x \\, dx = -\\ln|\\cos x| + C = \\ln|\\sec x| + C$$
٢. **تكامل دالة ظل التمام (ظتا):**
   $$\\int \\cot x \\, dx = \\ln|\\sin x| + C$$
٣. **تكامل دالة القاطع (قا):**
   $$\\int \\sec x \\, dx = \\ln|\\sec x + \\tan x| + C$$
٤. **تكامل دالة قاطع التمام (قتا):**
   $$\\int \\csc x \\, dx = \\ln|\\csc x - \\cot x| + C$$`,
          formulas: [
            { labelEn: 'Exponential Integral Rule', labelAr: 'تكامل الدالة الأسية', latex: '\\int f\'(x) e^{f(x)} dx = e^{f(x)} + C' },
            { labelEn: 'Logarithmic Quotient Rule', labelAr: 'تكامل البسط مشتقة المقام', latex: '\\int \\frac{f\'(x)}{f(x)} dx = \\ln|f(x)| + C' },
            { labelEn: 'Integral of tan(x)', labelAr: 'تكامل ظا (س)', latex: '\\int \\tan x \\, dx = \\ln|\\sec x| + C' },
            { labelEn: 'Integral of sec(x)', labelAr: 'تكامل قا (س)', latex: '\\int \\sec x \\, dx = \\ln|\\sec x + \\tan x| + C' }
          ],
          moeRef: {
            bookTitleEn: 'Ministry Calculus Textbook Grade 12',
            bookTitleAr: 'كتاب التفاضل والتكامل للصف الثالث الثانوي - وزارة التربية والتعليم',
            grade: 'Grade 12',
            term: 'Full Year',
            officialCode: 'MOE-SEC3-CALC-CH2-L2',
            pageRange: 'pp. 43 - 68'
          },
          lessonPlan: {
            titleEn: 'Lesson Plan: Exponential & Logarithmic Integration Techniques',
            titleAr: 'خطة درس: مهارات تكامل الدوال الأسية واللوغاريتمية',
            gradeLevel: 'Grade 12 Secondary',
            durationMinutes: 90,
            moeCode: 'MOE-SEC3-CALC-CH2-L2',
            bloomsObjectivesEn: [
              'Integrate composite exponential functions by completing the derivative of the exponent.',
              'Recognize when an algebraic fraction has a numerator proportional to the derivative of its denominator.',
              'Derive and calculate integrals of tan, cot, sec, and csc functions.'
            ],
            bloomsObjectivesAr: [
              'تكامل الدوال الأسية المركبة باستكمال مشتقة الأس.',
              'تمييز الكسور التي يكون بسطها مشتقة لمقامها وتكاملها باللوغاريتم.',
              'استنتاج وحساب تكاملات الدوال المثلثية ظا، ظتا، قا، قتا.'
            ],
            prerequisitesEn: ['Basic integration rules', 'Trigonometric quotient identities'],
            prerequisitesAr: ['قواعد التكامل الأساسية', 'متطابقات قسمة الدوال المثلثية'],
            keyVocabularyEn: [
              { term: 'Quotient Log Rule', definition: 'Integral f\'/f = ln|f| + C whenever the numerator is the derivative of the denominator.' },
              { term: 'Absolute Value in Log Integral', definition: 'Necessary because logarithm is only defined for strictly positive arguments.' }
            ],
            keyVocabularyAr: [
              { term: 'قاعدة تكامل البسط مشتقة المقام', definition: 'تكامل د\' / د = لو_هـ |د| + ث.' },
              { term: 'القيمة المطلقة في اللوغاريتم', definition: 'ضرورية لأن دالة اللوغاريتم معرفة فقط للأعداد الحقيقية الموجبة تماماً.' }
            ],
            teachingPacing: [
              {
                phaseEn: 'Exponential Integral Pattern Recognition (20 mins)',
                phaseAr: 'استكشاف نمط تكامل الدوال الأسية (٢٠ دقيقة)',
                duration: '20 mins',
                activitiesEn: 'Provide examples where the exponent derivative is missing a constant multiplier like Integral x e^(x^2) dx.',
                activitiesAr: 'تدريب الطلاب على ضبط الثوابت العددية الناقصة لمشتقة الأس مثل تكامل س هـ^(س²) دس.'
              },
              {
                phaseEn: 'Mastery of f\'(x)/f(x) Integration (35 mins)',
                phaseAr: 'إتقان قاعدة البسط مشتقة المقام (٣٥ دقيقة)',
                duration: '35 mins',
                activitiesEn: 'Demonstrate rational fractions that reduce to natural logarithm, highlighting polynomial long division if degree(num) >= degree(den).',
                activitiesAr: 'حل مسائل كسور جبرية متنوعة مع التذكير بالقسمة المطولة إذا كانت درجة البسط أكبر من أو تساوي درجة المقام.'
              },
              {
                phaseEn: 'Derivation of Trig Integrals via Logarithm (20 mins)',
                phaseAr: 'استنتاج تكاملات الدوال المثلثية باللوغاريتم (٢٠ دقيقة)',
                duration: '20 mins',
                activitiesEn: 'Derive Integral sec x dx by multiplying numerator and denominator by (sec x + tan x).',
                activitiesAr: 'إثبات تكامل قا س بالضرب بسطاً ومقاماً في (قا س + ظا س).'
              },
              {
                phaseEn: 'Exit Ticket & Synthesis (15 mins)',
                phaseAr: 'بطاقة الخروج والتقييم الختامي (١٥ دقيقة)',
                duration: '15 mins',
                activitiesEn: 'Assess students on evaluating definite logarithmic integrals.',
                activitiesAr: 'حل بطاقة الخروج على تكامل محدد ناتجه لوغاريتم.'
              }
            ],
            commonMisconceptionsEn: [
              'Applying power rule Integral 1/x dx = x^0 / 0! (The only power of x where power rule fails, giving ln|x|).',
              'Forgetting the absolute value signs inside ln|f(x)|.'
            ],
            commonMisconceptionsAr: [
              'محاولة تطبيق قاعدة القوة على ١/س بالحصول على س^٠ / ٠! (القوة الوحيدة التي تشذ هي -١ وتكاملها لوغاريتم).',
              'نسيان وضع مقياس (القيمة المطلقة) داخل اللوغاريتم.'
            ],
            differentiationEn: {
              struggling: 'Always write the denominator as f(x) and compute f\'(x) in the margin to see what constant factor is needed.',
              advanced: 'Evaluate integrals of the form Integral 1 / (1 + e^x) dx by dividing numerator and denominator by e^x.'
            },
            differentiationAr: {
              struggling: 'كتابة المقام على هامش الصفحة واشتقاقه لملاحظة المعامل العددي المطلوب استكماله.',
              advanced: 'حل تكامل ١ / (١ + هـ^س) دس بقسمة البسط والمقام على هـ^س.'
            },
            formativeAssessmentEn: 'Evaluate Integral (2x + 3) / (x^2 + 3x + 7) dx.',
            formativeAssessmentAr: 'احسب $\\int \\frac{2x + 3}{x^2 + 3x + 7} \\, dx$.',
            exitTicketQuestion: {
              questionEn: 'Evaluate the definite integral: Integral from 0 to 1 of (e^x / (e^x + 1)) dx.',
              questionAr: 'احسب قيمة التكامل المحدد: $\\int_0^1 \\frac{e^x}{e^x + 1} \\, dx$.',
              solutionEn: 'Since numerator e^x is the derivative of denominator e^x + 1: Integral = [ln(e^x + 1)]_0^1 = ln(e + 1) - ln(e^0 + 1) = ln(e + 1) - ln(2) = ln((e + 1) / 2).',
              solutionAr: 'بما أن البسط هـ^س هو مشتقة المقام هـ^س + ١: التكامل = [لو(هـ^س + ١)] من ٠ إلى ١ = لو(هـ + ١) - لو(١ + ١) = لو((هـ + ١) / ٢).'
            }
          },
          worksheet: {
            id: 'ws_calc_l3',
            titleEn: 'Solved Worksheet: Exponential & Logarithmic Integrals',
            titleAr: 'ورقة عمل محلولة: تكاملات الدوال الأسية واللوغاريتمية',
            descriptionEn: 'Exam standard problems on exponential integrals, f\'/f rule, and trigonometric ln integrals.',
            descriptionAr: 'مسائل امتحانات الثانوية العامة على تكاملات هـ^س وقاعدة البسط مشتقة المقام.',
            estimatedTimeMinutes: 45,
            problems: [
              {
                id: 'p_calc4',
                titleEn: 'Exam Standard: Definite Integral Leading to Natural Logarithm',
                titleAr: 'مسألة امتحانية: تكامل محدد ينتج لوغاريتم طبيعي',
                difficulty: 'exam_standard',
                questionEn: 'Evaluate the definite integral: $$\\int_0^{\\pi/4} \\frac{\\sec^2 x}{1 + \\tan x} \\, dx$$',
                questionAr: 'احسب قيمة التكامل المحدد: $$\\int_0^{\\pi/4} \\frac{\\sec^2 x}{1 + \\tan x} \\, dx$$',
                optionsEn: ['\\ln 2', '\\ln 3', '\\frac{1}{2} \\ln 2', '1'],
                optionsAr: ['\\ln 2', '\\ln 3', '\\frac{1}{2} \\ln 2', '١'],
                correctAnswer: '\\ln 2',
                correctIndex: 0,
                hintEn: 'The derivative of denominator (1 + tan x) is sec^2 x, so the integral is ln|1 + tan x|.',
                hintAr: 'مشتقة المقام (١ + ظا س) هي قا² س، إذن ناتج التكامل هو لو هـ |١ + ظا س|.',
                stepByStepSolutionEn: [
                  '1. Check the derivative of the denominator:',
                  '$$f(x) = 1 + \\tan x \\implies f\'(x) = \\sec^2 x$$',
                  'Since the numerator equals $f\'(x)$, apply the logarithmic rule:',
                  '$$\\int \\frac{\\sec^2 x}{1 + \\tan x} \\, dx = \\ln|1 + \\tan x|$$',
                  '2. Apply the limits of integration from $0$ to $\\frac{\\pi}{4}$:',
                  '$$\\left[ \\ln|1 + \\tan x| \\right]_0^{\\pi/4} = \\ln\\left| 1 + \\tan\\left(\\frac{\\pi}{4}\\right) \\right| - \\ln|1 + \\tan(0)|$$',
                  'Since $\\tan(\\frac{\\pi}{4}) = 1$ and $\\tan(0) = 0$:',
                  '$$= \\ln(1 + 1) - \\ln(1 + 0) = \\ln(2) - \\ln(1) = \\ln(2) - 0 = \\ln 2$$'
                ],
                stepByStepSolutionAr: [
                  '١. فحص مشتقة المقام:',
                  'المقام $f(x) = 1 + \\tan x$ ومشتقته $f\'(x) = \\sec^2 x$.',
                  'بما أن البسط هو مشتقة المقام، إذن ناتج التكامل هو:',
                  '$$\\int \\frac{\\sec^2 x}{1 + \\tan x} \\, dx = \\ln|1 + \\tan x|$$',
                  '٢. تطبيق حدي التكامل من $0$ إلى $\\frac{\\pi}{4}$:',
                  '$$= \\ln\\left(1 + \\tan\\frac{\\pi}{4}\\right) - \\ln(1 + \\tan 0) = \\ln(1 + 1) - \\ln(1 + 0) = \\ln 2$$'
                ],
                teacherTipEn: 'A textbook classic! Whenever you see sec^2(x) in numerator with tan(x) in denominator, think ln immediately.',
                teacherTipAr: 'سؤال امتحاني متكرر جداً! كلما رأيت قا² س في البسط مع ظا س في المقام تذكر فوراً قاعدة اللوغاريتم الطبيعي.'
              },
              {
                id: 'p_calc5',
                titleEn: 'Foundation Problem: Exponential Integral with Linear Substitution',
                titleAr: 'مسألة تأسيسية: تكامل دالة أسية ذات أس خطي',
                difficulty: 'easy',
                questionEn: 'Evaluate the indefinite integral: $$\\int e^{3x + 2} \\, dx$$',
                questionAr: 'احسب التكامل غير المحدد: $$\\int e^{3x + 2} \\, dx$$',
                optionsEn: [
                  '\\frac{1}{3} e^{3x + 2} + C',
                  '3 e^{3x + 2} + C',
                  'e^{3x + 2} + C',
                  '\\frac{1}{2} e^{3x + 2} + C'
                ],
                optionsAr: [
                  '\\frac{1}{3} e^{3x + 2} + C',
                  '3 e^{3x + 2} + C',
                  'e^{3x + 2} + C',
                  '\\frac{1}{2} e^{3x + 2} + C'
                ],
                correctAnswer: '\\frac{1}{3} e^{3x + 2} + C',
                correctIndex: 0,
                hintEn: 'Integral of e^(ax + b) is (1/a) e^(ax + b) + C.',
                hintAr: 'تكامل هـ^(أ س + ب) يساوي (١/أ) هـ^(أ س + ب) + ث.',
                stepByStepSolutionEn: [
                  'Apply the standard exponential linear integral formula:',
                  '$$\\int e^{ax + b} \\, dx = \\frac{1}{a} e^{ax + b} + C$$',
                  'Here $a = 3$ and $b = 2$:',
                  '$$\\int e^{3x + 2} \\, dx = \\frac{1}{3} e^{3x + 2} + C$$'
                ],
                stepByStepSolutionAr: [
                  'تطبيق القاعدة المباشرة لتكامل الدالة الأسية ذات الأس الخطي:',
                  '$$\\int e^{ax + b} \\, dx = \\frac{1}{a} e^{ax + b} + C$$',
                  'هنا $a = 3$، إذن:',
                  '$$\\int e^{3x + 2} \\, dx = \\frac{1}{3} e^{3x + 2} + C$$'
                ],
                teacherTipEn: 'Do not multiply by 3! In integration you divide by the coefficient of x, whereas in differentiation you multiply.',
                teacherTipAr: 'لا تضرب في ٣! في التكامل نقسم على معامل س، بينما في التفاضل نضرب فيه.'
              },
              {
                id: 'p_calc6',
                titleEn: 'HOTS Problem: Integration by Substitution on Exponential Fractions',
                titleAr: 'مسألة مهارات عليا: تكامل كسر أسي غير مباشر',
                difficulty: 'hots',
                questionEn: 'Evaluate the indefinite integral: $$\\int \\frac{1}{1 + e^x} \\, dx$$',
                questionAr: 'احسب التكامل غير المحدد: $$\\int \\frac{1}{1 + e^x} \\, dx$$',
                optionsEn: [
                  'x - \\ln(1 + e^x) + C',
                  '\\ln(1 + e^x) + C',
                  '-\\ln(1 + e^{-x}) + C',
                  '\\frac{1}{e^x} + C'
                ],
                optionsAr: [
                  'x - \\ln(1 + e^x) + C',
                  '\\ln(1 + e^x) + C',
                  '-\\ln(1 + e^{-x}) + C',
                  '\\frac{1}{e^x} + C'
                ],
                correctAnswer: 'x - \\ln(1 + e^x) + C',
                correctIndex: 0,
                hintEn: 'Add and subtract e^x in the numerator: (1 + e^x - e^x)/(1 + e^x) = 1 - e^x/(1 + e^x).',
                hintAr: 'أضف واطرح هـ^س في البسط: (١ + هـ^س - هـ^س) / (١ + هـ^س) = ١ - (هـ^س / (١ + هـ^س)).',
                stepByStepSolutionEn: [
                  '1. Manipulate the numerator by adding and subtracting $e^x$:',
                  '$$\\frac{1}{1 + e^x} = \\frac{(1 + e^x) - e^x}{1 + e^x} = \\frac{1 + e^x}{1 + e^x} - \\frac{e^x}{1 + e^x} = 1 - \\frac{e^x}{1 + e^x}$$',
                  '2. Integrate term by term:',
                  '$$\\int \\left( 1 - \\frac{e^x}{1 + e^x} \\right) dx = \\int 1 \\, dx - \\int \\frac{e^x}{1 + e^x} \\, dx$$',
                  '3. The first integral is simply $x$.',
                  'In the second integral, the numerator $e^x$ is the derivative of the denominator $1 + e^x$, so its integral is $\\ln(1 + e^x)$.',
                  '4. Combining both terms:',
                  '$$= x - \\ln(1 + e^x) + C$$',
                  '*(Alternative method: Multiply numerator and denominator by $e^{-x}$ giving $\\int \\frac{e^{-x}}{e^{-x} + 1} dx = -\\ln(1 + e^{-x}) + C$, which is algebraically identical since $x - \\ln(1 + e^x) = -\\ln(\\frac{1 + e^x}{e^x}) = -\\ln(e^{-x} + 1)$!)*'
                ],
                stepByStepSolutionAr: [
                  '١. إضافة وطرح هـ^س في البسط:',
                  '$$\\frac{1}{1 + e^x} = \\frac{1 + e^x - e^x}{1 + e^x} = 1 - \\frac{e^x}{1 + e^x}$$',
                  '٢. إجراء التكامل حدياً:',
                  '$$\\int 1 \\, dx - \\int \\frac{e^x}{1 + e^x} \\, dx$$',
                  'تكامل ١ هو $x$.',
                  'وفي الكسر الثاني، البسط هـ^س هو مشتقة المقام تماماً، إذن تكامله هو $\\ln(1 + e^x)$.',
                  '٣. الناتج النهائي:',
                  '$$= x - \\ln(1 + e^x) + C$$'
                ],
                teacherTipEn: 'A brilliant mathematical technique of adding and subtracting the denominator derivative in the numerator.',
                teacherTipAr: 'مهارة رياضية راقية تتمثل في إضافة وطرح مشتقة المقام في البسط لتجزئة الكسر.'
              }
            ]
          },
          interactiveWidget: {
            type: 'calculus_tangent',
            titleEn: 'Integral Area & Logarithmic Curve Visualizer',
            titleAr: 'محاكي مساحات التكامل ومنحنيات اللوغاريتم',
            descriptionEn: 'Interactive tool visualizing 1/x integration yielding the natural logarithm function ln(x).',
            descriptionAr: 'أداة تفاعلية توضح المساحة تحت منحنى ١/س وإنتاج دالة اللوغاريتم الطبيعي.'
          }
        }
      ],
      solvedExamples: calcCh2SolvedExamples,
      exerciseProblems: calcCh2Exercises,
      databank: calcCh2Databank
    }    ,
    {
      id: 'calc_ch3',
      chapterNumber: 3,
      titleEn: 'Behavior of Functions & Curve Sketching',
      titleAr: 'سلوك الدالة ورسم المنحنيات وتطبيقات القيم العظمى والصغرى',
      descriptionEn: 'Critical points, intervals of increase and decrease, local extrema via first and second derivative tests, concavity and inflection points, curve sketching, absolute extrema, and real-world optimization applications.',
      descriptionAr: 'النقط الحرجة، فترات التزايد والتناقص، القيم العظمى والصغرى المحلية باختباري المشتقة الأولى والثانية، التحدب ونقط الانقلاب، رسم المنحنيات، القيم القصوى المطلقة، وتطبيقات القيم العظمى والصغرى.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'calc_l4',
          titleEn: 'Monotonicity, Extrema & Concavity',
          titleAr: 'تزايد وتناقص الدوال والقيم القصوى والتحدب',
          summaryEn: 'Critical points, first derivative test for increasing/decreasing intervals and local extrema, second derivative test, concavity upward/downward, and inflection points.',
          summaryAr: 'النقط الحرجة، اختبار المشتقة الأولى لفترات التزايد والتناقص والقيم العظمى والصغرى المحلية، اختبار المشتقة الثانية، فترات التحدب لأعلى ولأسفل، ونقط الانقلاب.',
          theoryContentEn: `### 1. Critical Numbers and Points (النقط الحرجة):
A number $c$ in the domain of $f$ is a critical number if:
$f'(c) = 0 \\quad \\text{or} \\quad f'(c) \\text{ is undefined}$
The point $(c, f(c))$ is called a critical point of the curve.

### 2. Monotonicity & The First Derivative Test:
- If $f'(x) > 0$ on $(a, b)$, then $f$ is strictly **increasing** (تزايدية) on $(a, b)$.
- If $f'(x) < 0$ on $(a, b)$, then $f$ is strictly **decreasing** (تناقصية) on $(a, b)$.
- **Local Maximum:** $f'(x)$ changes from positive $(+)$ to negative $(-)$ across $c$.
- **Local Minimum:** $f'(x)$ changes from negative $(-)$ to positive $(+)$ across $c$.

### 3. The Second Derivative Test for Local Extrema:
Let $f'(c) = 0$:
- If $f''(c) < 0 \\implies$ Local Maximum at $(c, f(c))$.
- If $f''(c) > 0 \\implies$ Local Minimum at $(c, f(c))$.
- If $f''(c) = 0 \\implies$ Test is inconclusive (revert to First Derivative Test).

### 4. Concavity & Inflection Points (التحدب ونقط الانقلاب):
- **Concave Upwards (محدب لأسفل / مقعر لأعلى):** $f''(x) > 0$. Tangent lines lie below the curve.
- **Concave Downwards (محدب لأعلى / مقعر لأسفل):** $f''(x) < 0$. Tangent lines lie above the curve.
- **Point of Inflection (نقطة الانقلاب):** Point $(c, f(c))$ where $f''(c) = 0$ or undefined AND the curve changes its direction of concavity across $c$.`,
          theoryContentAr: `### ١. النقط الحرجة:
العدد $c$ في مجال الدالة $f$ يسمى عدداً حرجاً إذا كان:
$f'(c) = 0 \\quad \\text{أو} \\quad f'(c) \\text{ غير معرفة}$
وتسمى النقطة $(c, f(c))$ نقطة حرجة للمنحنى.

### ٢. فترات التزايد والتناقص واختبار المشتقة الأولى:
- إذا كانت $f'(x) > 0$ فإن الدالة تزايدية.
- إذا كانت $f'(x) < 0$ فإن الدالة تناقصية.
- **عظمى محلية:** تتغير إشارة $f'(x)$ من موجب إلى سالب حول النقطة.
- **صغرى محلية:** تتغير إشارة $f'(x)$ من سالب إلى موجب حول النقطة.

### ٣. اختبار المشتقة الثانية للقيم القصوى المحلية:
إذا كانت $f'(c) = 0$:
- إذا كانت $f''(c) < 0$ توجد قيمة عظمى محلية.
- إذا كانت $f''(c) > 0$ توجد قيمة صغرى محلية.
- إذا كانت $f''(c) = 0$ يفشل الاختبار ويجب استخدام اختبار المشتقة الأولى.

### ٤. فترات التحدب ونقط الانقلاب:
- **تحدب لأسفل (مقعر لأعلى):** $f''(x) > 0$ (المماسات تقع أسفل المنحنى).
- **تحدب لأعلى (مقعر لأسفل):** $f''(x) < 0$ (المماسات تقع أعلى المنحنى).
- **نقطة الانقلاب:** نقطة تنعدم عندها المشتقة الثانية ويتغير عندها اتجاه التحدب للمنحنى.`,
          formulas: [
            { labelEn: 'Critical Condition', labelAr: 'شرط النقطة الحرجة', latex: "f'(c) = 0 \\quad \\text{or undefined}" },
            { labelEn: 'Concave Up Condition', labelAr: 'شرط التحدب لأسفل', latex: "f''(x) > 0" },
            { labelEn: 'Concave Down Condition', labelAr: 'شرط التحدب لأعلى', latex: "f''(x) < 0" },
            { labelEn: 'Inflection Condition', labelAr: 'شرط نقطة الانقلاب', latex: "f''(c) = 0 \\quad \\text{with sign change}" }
          ],
          moeRef: {
            bookTitleEn: 'Ministry Calculus Textbook Grade 12',
            bookTitleAr: 'كتاب التفاضل والتكامل للصف الثالث الثانوي - وزارة التربية والتعليم',
            grade: 'Grade 12',
            term: 'Full Year',
            officialCode: 'MOE-SEC3-CALC-CH3-L1',
            pageRange: 'pp. 115 - 148'
          },
          lessonPlan: {
            titleEn: 'Lesson Plan: Monotonicity, Extrema and Concavity',
            titleAr: 'خطة درس: تزايد وتناقص الدوال ونقط الانقلاب',
            gradeLevel: 'Grade 12 Secondary',
            durationMinutes: 90,
            moeCode: 'MOE-SEC3-CALC-CH3-L1',
            bloomsObjectivesEn: [
              'Identify critical numbers where the derivative vanishes or fails to exist.',
              'Classify local extrema using first and second derivative tests.',
              'Determine inflection points and justify concavity transitions on real intervals.'
            ],
            bloomsObjectivesAr: [
              'تحديد الأعداد الحرجة حيث تنعدم المشتقة أو تكون غير معرفة.',
              'تصنيف القيم القصوى المحلية باختبار المشتقة الأولى واختبار المشتقة الثانية.',
              'تعيين نقط الانقلاب وتبرير فترات التحدب على خط الأعداد الحقيقية.'
            ],
            prerequisitesEn: ['Power, product, and chain rules of differentiation', 'Solving polynomial inequalities', 'Domain of rational and radical functions'],
            prerequisitesAr: ['قواعد اشتقاق الدوال الجبرية والمثلثية', 'حل متباينات الدرجة الثانية', 'مجال الدوال الكسرية والجذرية'],
            keyVocabularyEn: [
              { term: 'Critical Point', definition: 'Point on curve where f prime is zero or undefined.' },
              { term: 'Local Extremum', definition: 'A peak (local maximum) or trough (local minimum) value of a function.' },
              { term: 'Point of Inflection', definition: 'Point where the curve changes its direction of concavity.' }
            ],
            keyVocabularyAr: [
              { term: 'النقطة الحرجة', definition: 'نقطة تنتمي للمنحنى تكون المشتقة عندها صفراً أو غير معرفة.' },
              { term: 'النهاية المحلية', definition: 'قيمة عظمى أو صغرى محلية للدالة في جوار النقطة.' },
              { term: 'نقطة الانقلاب', definition: 'نقطة يفصل عندها المنحنى بين منطقتي تحدب متعاكستين.' }
            ],
            teachingPacing: [
              {
                phaseEn: 'Concept Hook (15 mins)',
                phaseAr: 'التمهيد والتهيئة (١٥ دقيقة)',
                duration: '15 mins',
                activitiesEn: 'Display curve of roller coaster and connect slopes to sign of derivative and feeling of acceleration to second derivative.',
                activitiesAr: 'عرض منحنى قطار الملاهي وربط ميل المماس بإشارة السرعة والتحدب بتغير التسارع.'
              },
              {
                phaseEn: 'Monotonicity & Extrema (30 mins)',
                phaseAr: 'التزايد والتناقص والنهايات (٣٠ دقيقة)',
                duration: '30 mins',
                activitiesEn: 'Solve cubic polynomial and rational functions step-by-step using sign chart.',
                activitiesAr: 'حل مسائل على دوال تكعيبية وكسرية باستخدام خط إشارة المشتقة الأولى.'
              },
              {
                phaseEn: 'Concavity & Inflection Points (30 mins)',
                phaseAr: 'التحدب ونقط الانقلاب (٣٠ دقيقة)',
                duration: '30 mins',
                activitiesEn: 'Derive second derivative and establish relation between tangent location and concavity.',
                activitiesAr: 'استنتاج المشتقة الثانية وتوضيح موقع المماسات بالنسبة للمنحنى المحدب.'
              },
              {
                phaseEn: 'Exit Ticket (15 mins)',
                phaseAr: 'التقويم الختامي (١٥ دقيقة)',
                duration: '15 mins',
                activitiesEn: 'Administer individual problem finding inflection point of cubic curve.',
                activitiesAr: 'حل سؤال بطاقة الخروج لتعيين نقطة انقلاب دالة تكعيبية.'
              }
            ],
            commonMisconceptionsEn: [
              'Assuming f prime = 0 always implies a local extremum without testing for sign change.',
              'Confusing Egyptian curriculum terminology: concave up is called "محدب لأسفل".'
            ],
            commonMisconceptionsAr: [
              'افتراض أن انعدام المشتقة يعني دائماً وجود نهاية عظمى أو صغرى دون اختبار الإشارة.',
              'الخلط في المصطلحات: التحدب لأسفل يوافق المشتقة الثانية الموجبة (مقعر لأعلى).'
            ],
            differentiationEn: {
              struggling: 'Provide a 3-column table template for x, f prime(x), and f(x) behavior.',
              advanced: 'Analyze non-differentiable inflection points on curves like y = x^(1/3).'
            },
            differentiationAr: {
              struggling: 'استخدام جدول منظم من ٣ أعمدة لتحديد إشارة المشتقة وسلوك الدالة.',
              advanced: 'بحث نقط الانقلاب غير القابلة للاشتقاق للدوال الجذرية التكعيبية.'
            },
            formativeAssessmentEn: 'Find the critical points of f(x) = x^3 - 3x.',
            formativeAssessmentAr: 'عين النقط الحرجة للدالة $f(x) = x^3 - 3x$.',
            exitTicketQuestion: {
              questionEn: 'Determine the inflection point of y = x^3 - 3x^2 + 4.',
              questionAr: 'عين نقطة الانقلاب لمنحنى الدالة $y = x^3 - 3x^2 + 4$.',
              solutionEn: "y' = 3x^2 - 6x, y'' = 6x - 6 = 0 => x = 1. y(1) = 1 - 3 + 4 = 2. Inflection point is (1, 2).",
              solutionAr: "المشتقة الثانية $y'' = 6x - 6 = 0 \\implies x = 1$. الصاد $y(1) = 2$. نقطة الانقلاب هي $(1, 2)$."
            }
          },
          worksheet: {
            id: 'ws_calc_l4',
            titleEn: 'Solved Worksheet: Extrema and Concavity',
            titleAr: 'ورقة عمل محلولة: القيم القصوى وفترات التحدب',
            descriptionEn: 'Exam standard problems on finding critical points, monotonicity intervals, and inflection points.',
            descriptionAr: 'تمارين امتحانية هامة على تعيين النقط الحرجة وفترات التزايد والتناقص ونقط الانقلاب.',
            estimatedTimeMinutes: 45,
            problems: [
              {
                id: 'p_calc_mono_ws1',
                titleEn: 'Exam Standard: Critical Points of Quartic Function',
                titleAr: 'مسألة امتحانية: النقط الحرجة لدالة من الدرجة الرابعة',
                difficulty: 'exam_standard',
                questionEn: 'Find the critical numbers of $f(x) = 3x^4 - 4x^3$.',
                questionAr: 'أوجد الأعداد الحرجة للدالة $f(x) = 3x^4 - 4x^3$.',
                optionsEn: ['x = 0 and x = 1', 'x = 1 only', 'x = 0 and x = -1', 'x = 4/3 only'],
                optionsAr: ['س = ٠ و س = ١', 'س = ١ فقط', 'س = ٠ و س = -١', 'س = ٤/٣ فقط'],
                correctAnswer: 'x = 0 and x = 1',
                correctIndex: 0,
                hintEn: "Set f'(x) = 12x^3 - 12x^2 = 12x^2(x - 1) = 0.",
                hintAr: "ضع المشتقة الأولى $12x^2(x - 1) = 0$.",
                stepByStepSolutionEn: [
                  '1. $f\\prime(x) = 12x^3 - 12x^2 = 12x^2(x - 1)$.',
                  '2. Setting $f\\prime(x) = 0$ gives $x = 0$ and $x = 1$.'
                ],
                stepByStepSolutionAr: [
                  '١. المشتقة: $f\\prime(x) = 12x^2(x - 1) = 0$.',
                  '٢. إذن الأعداد الحرجة هي $x = 0$ و $x = 1$.'
                ],
                teacherTipEn: 'Notice that x = 0 is a critical number even though it is not a local extremum!',
                teacherTipAr: 'لاحظ أن س = ٠ عدد حرج بالرغم من أنه لا يمثل نهاية عظمى أو صغرى!'
              }
            ]
          },
          interactiveWidget: {
            type: 'calculus_tangent',
            titleEn: 'Extrema & Concavity Dynamic Tangent Visualizer',
            titleAr: 'محاكي المماس الديناميكي والتحدب والنهايات القصوى',
            descriptionEn: 'Interactive tool visualizing tangent slope transitions and inflection point crossing in real time.',
            descriptionAr: 'أداة تفاعلية توضح تغير ميل المماس واختراق المنحنى عند نقطة الانقلاب لحظياً.'
          }
        },
        {
          id: 'calc_l5',
          titleEn: 'Curve Sketching & Optimization Applications',
          titleAr: 'رسم المنحنيات وتطبيقات القيم العظمى والصغرى',
          summaryEn: 'Complete curve sketching protocol (symmetry, asymptotes, intercepts, extrema, inflection), absolute extrema on closed intervals, and physical/geometric optimization problems.',
          summaryAr: 'خطوات رسم المنحنيات العامة (التماثل، التقارب، التقاطع، النهايات، الانقلاب)، القيم العظمى والصغرى المطلقة، ومسائل تطبيقات القيم القصوى الهندسية والفيزيائية.',
          theoryContentEn: `### 1. Protocol for General Curve Sketching (خطوات رسم المنحنى):
1. **Domain:** Determine the natural domain of $f(x)$.
2. **Symmetry:** Test whether $f(-x) = f(x)$ (even, y-axis symmetry) or $f(-x) = -f(x)$ (odd, origin symmetry).
3. **Intercepts:** Find y-intercept $(0, f(0))$ and x-intercepts by solving $f(x) = 0$.
4. **Asymptotes:**
   - Vertical: lines $x = a$ where $\\lim_{x \\to a} f(x) = \\pm\\infty$.
   - Horizontal: lines $y = L$ where $\\lim_{x \\to \\pm\\infty} f(x) = L$.
5. **Monotonicity & Extrema:** Compute $f'(x)$ to locate local extrema.
6. **Concavity & Inflection:** Compute $f''(x)$ to determine concavity and inflection points.

### 2. Absolute (Global) Extrema on Closed Intervals $[a, b]$:
By the Extreme Value Theorem, a continuous function on $[a, b]$ always achieves an absolute maximum and minimum.
- Method:
  1. Find all critical numbers $c_i \\in (a, b)$.
  2. Compute $f(c_i)$ at all internal critical points.
  3. Compute endpoint values $f(a)$ and $f(b)$.
  4. Compare all values: largest is Absolute Max, smallest is Absolute Min.

### 3. Real-World Optimization Problems (تطبيقات القيم العظمى والصغرى):
1. Define variables and draw a diagram where applicable.
2. Formulate the primary equation for the quantity $Q$ to be maximized or minimized.
3. Use auxiliary conditions (constraints) to express $Q$ in terms of a single variable: $Q = f(x)$.
4. Differentiate, set $f'(x) = 0$, and verify the nature of the extremum using $f''(x)$.`,
          theoryContentAr: `### ١. خطوات رسم المنحنيات العامة:
١. **تحديد المجال:** تعيين مجال تعريف الدالة.
٢. **التماثل:** فحص هل الدالة زوجية متماثلة حول الصادات أم فردية متماثلة حول نقطة الأصل.
٣. **نقط التقاطع:** التقاطع مع الصادات $(0, f(0))$ والتقاطع مع السينات بوضع $f(x) = 0$.
٤. **خطوط التقارب:**
   - الرأسية عند أصفار المقام غير القابلة للاختصار.
   - الأفقية عند أخذ النهاية للما لانهاية.
٥. **النهايات المحلية:** دراسة إشارة المشتقة الأولى.
٦. **التحدب والانقلاب:** دراسة إشارة المشتقة الثانية.

### ٢. القيم العظمى والصغرى المطلقة على فترة مغلقة $[a, b]$:
نظرية القيمة القصوى: الدالة المتصلة على فترة مغلقة تبلغ قيمتها العظمى المطلقة والصغرى المطلقة حتماً.
- الخطوات:
  ١. إيجاد النقط الحرجة الداخلية داخل الفترة المفتوحة $(a, b)$.
  ٢. حساب قيم الدالة عند النقط الحرجة.
  ٣. حساب قيم الدالة عند طرفي الفترة $f(a)$ و $f(b)$.
  ٤. أكبر قيمة هي العظمى المطلقة وأصغر قيمة هي الصغرى المطلقة.

### ٣. تطبيقات القيم العظمى والصغرى:
١. رسم شكل تخطيطي للمسألة وتحديد المتغيرات.
٢. تكوين العلاقة الأساسية للكمية المطلوب تعظيمها أو تصغيرها.
٣. استخدام العلاقات المساعدة للتعبير عن الدالة في متغير واحد فقط.
٤. الاشتقاق ووضع المشتقة بصفر والتحقق باختبار المشتقة الثانية.`,
          formulas: [
            { labelEn: 'Absolute Extrema Evaluation', labelAr: 'تقييم القيم المطلقة', latex: "\\max / \\min \\{ f(a), f(b), f(c_i) \\}" },
            { labelEn: 'Horizontal Asymptote', labelAr: 'خط التقارب الأفقي', latex: "y = \\lim_{x \\to \\pm\\infty} f(x)" },
            { labelEn: 'Optimization Condition', labelAr: 'شرط القيمة القصوى', latex: "\\frac{dQ}{dx} = 0 \\quad \\text{and test sign}" }
          ],
          moeRef: {
            bookTitleEn: 'Ministry Calculus Textbook Grade 12',
            bookTitleAr: 'كتاب التفاضل والتكامل للصف الثالث الثانوي - وزارة التربية والتعليم',
            grade: 'Grade 12',
            term: 'Full Year',
            officialCode: 'MOE-SEC3-CALC-CH3-L2',
            pageRange: 'pp. 149 - 188'
          },
          lessonPlan: {
            titleEn: 'Lesson Plan: Curve Sketching & Applied Optimization',
            titleAr: 'خطة درس: رسم المنحنيات وتطبيقات القيم العظمى والصغرى',
            gradeLevel: 'Grade 12 Secondary',
            durationMinutes: 90,
            moeCode: 'MOE-SEC3-CALC-CH3-L2',
            bloomsObjectivesEn: [
              'Execute the full 6-step protocol to accurately sketch rational and polynomial curves.',
              'Evaluate absolute maximum and minimum on closed intervals.',
              'Model geometric and commercial word problems as single-variable optimization equations.'
            ],
            bloomsObjectivesAr: [
              'تطبيق الخطوات الست لرسم منحنيات الدوال الكسرية وكثيرات الحدود بدقة.',
              'حساب القيمتين العظمى والصغرى المطلقتين على فترة مغلقة.',
              'نمذجة المسائل اللفظية الهندسية والتجارية كدوال تفاضلية في متغير واحد وحلها.'
            ],
            prerequisitesEn: ['Evaluating limits at infinity', 'First and second derivative tests', 'Mensuration formulas (cylinder, cone, sphere, rectangle)'],
            prerequisitesAr: ['حساب النهايات عند اللانهاية', 'اختبارات المشتقة الأولى والثانية', 'قوانين مساحات وحجوم المجسمات والأشكال المستوية'],
            keyVocabularyEn: [
              { term: 'Absolute Extremum', definition: 'The highest or lowest value of a function over an entire interval.' },
              { term: 'Asymptote', definition: 'A line that a curve approaches arbitrarily closely as coordinates head to infinity.' },
              { term: 'Optimization', definition: 'The process of finding the best (maximum or minimum) value of a real-world quantity.' }
            ],
            keyVocabularyAr: [
              { term: 'القيمة القصوى المطلقة', definition: 'أعلى أو أقل قيمة تبلغها الدالة على الفترة بالكامل.' },
              { term: 'خط التقارب', definition: 'مستقيم يقترب منه المنحنى اقتراباً لا نهائياً عند تباعد الإحداثيات.' },
              { term: 'التطبيقات المثلى', definition: 'عملية إيجاد القيمة العظمى أو الصغرى لكمية واقعية.' }
            ],
            teachingPacing: [
              {
                phaseEn: 'Curve Sketching Protocol (25 mins)',
                phaseAr: 'خطوات رسم المنحنيات (٢٥ دقيقة)',
                duration: '25 mins',
                activitiesEn: 'Walk through rational function y = (x^2-1)/(x^2+1) showing symmetry, asymptotes, and extrema.',
                activitiesAr: 'تطبيق عملي كامل لرسم دالة كسرية مع توضيح خط التقارب الأفقي والتماثل.'
              },
              {
                phaseEn: 'Absolute Extrema on Closed Intervals (20 mins)',
                phaseAr: 'القيم المطلقة على فترة مغلقة (٢٠ دقيقة)',
                duration: '20 mins',
                activitiesEn: 'Highlight the role of endpoints and compare candidates.',
                activitiesAr: 'بيان أهمية فحص طرفي الفترة ومقارنة قيم النقط الحرجة الداخلية مع الأطراف.'
              },
              {
                phaseEn: 'Optimization Modeling (30 mins)',
                phaseAr: 'مسائل التطبيقات الهندسية (٣٠ دقيقة)',
                duration: '30 mins',
                activitiesEn: 'Solve classic can-design and inscribed rectangle optimization problems.',
                activitiesAr: 'حل مسائل تصميم العلب الأسطوانية والمستطيل داخل نصف الدائرة.'
              },
              {
                phaseEn: 'Closure & Exit Ticket (15 mins)',
                phaseAr: 'التقويم الختامي (١٥ دقيقة)',
                duration: '15 mins',
                activitiesEn: 'Administer individual problem on finding maximum area of a fenced field.',
                activitiesAr: 'حل سؤال بطاقة الخروج لإيجاد أكبر مساحة لحديقة مسيجة.'
              }
            ],
            commonMisconceptionsEn: [
              'Ignoring boundary constraints on geometric variables (e.g. radius and height must be strictly positive).',
              'Forgetting to verify whether the critical point yields a maximum or a minimum via the second derivative.'
            ],
            commonMisconceptionsAr: [
              'تجاهل القيود الهندسية والفيزيائية على المتغيرات (مثل وجوب كون الأبعاد موجبة).',
              'نسيان التحقق من نوع النهاية (عظمى أو صغرى) باختبار المشتقة الثانية.'
            ],
            differentiationEn: {
              struggling: 'Step-by-step graphic organizer for optimization problems: Target -> Constraint -> Single Variable -> Derivative.',
              advanced: 'Optimization problems with trigonometric angle parameters or cost minimization functions.'
            },
            differentiationAr: {
              struggling: 'مخطط تدفق لحل مسائل التطبيقات: الدالة الهدف -> العلاقة المساعدة -> متغير واحد -> الاشتقاق.',
              advanced: 'مسائل تطبيقات تعتمد على زاوية متغيرة أو تقليل التكلفة الإجمالية للإنتاج.'
            },
            formativeAssessmentEn: 'Find two positive numbers with sum 16 and maximum product.',
            formativeAssessmentAr: 'أوجد عددين موجبين مجموعهما ١٦ وحاصل ضربهما أكبر ما يمكن.',
            exitTicketQuestion: {
              questionEn: 'A rectangle has perimeter 20 cm. Find its dimensions for maximum area.',
              questionAr: 'مستطيل محيطه ٢٠ سم. أوجد أبعاده بحيث تكون مساحته أكبر ما يمكن.',
              solutionEn: 'Perimeter 2(x + y) = 20 => x + y = 10 => Area A = x(10 - x). A prime = 10 - 2x = 0 => x = 5 cm, y = 5 cm (a square).',
              solutionAr: 'المحيط ٢(س + ص) = ٢٠ => س + ص = ١٠ => المساحة = س(١٠ - س). المشتقة: ١٠ - ٢س = ٠ => س = ٥ سم، ص = ٥ سم (مربع).'
            }
          },
          worksheet: {
            id: 'ws_calc_l5',
            titleEn: 'Solved Worksheet: Optimization Applications',
            titleAr: 'ورقة عمل محلولة: تطبيقات القيم العظمى والصغرى',
            descriptionEn: 'Essential exam-level word problems on maximizing area and minimizing cost.',
            descriptionAr: 'مسائل امتحانية هامة على تعظيم المساحة وتصغير التكلفة والأبعاد المثلى.',
            estimatedTimeMinutes: 45,
            problems: [
              {
                id: 'p_calc_opt_ws1',
                titleEn: 'Exam Standard: Maximum Rectangular Area with 3-Sided Fence',
                titleAr: 'مسألة امتحانية: أكبر مساحة لحديقة مسيجة من ٣ جهات',
                difficulty: 'exam_standard',
                questionEn: 'A farmer wants to fence a rectangular garden along a straight river (no fence needed along the river). If he has 40 meters of fencing, what is the maximum area he can enclose?',
                questionAr: 'يريد مزارع تسييج حديقة مستطيلة تقع بمحاذاة نهر مستقيم (لا يلزم سياج جهة النهر). إذا كان معه ٤٠ متراً من السياج، فما هي أكبر مساحة يمكنه تسييجها؟',
                optionsEn: ['200 m^2', '100 m^2', '400 m^2', '160 m^2'],
                optionsAr: ['٢٠٠ م²', '١٠٠ م²', '٤٠٠ م²', '١٦٠ م²'],
                correctAnswer: '200 m^2',
                correctIndex: 0,
                hintEn: 'Fence length = 2x + y = 40 => y = 40 - 2x. Area A = x(40 - 2x).',
                hintAr: 'طول السياج: $2x + y = 40 \\implies y = 40 - 2x$. دالة المساحة: $A = x(40 - 2x)$.',
                stepByStepSolutionEn: [
                  '1. Let width perpendicular to river be $x$, length parallel to river be $y$.',
                  '2. Fencing constraint: $2x + y = 40 \\implies y = 40 - 2x$.',
                  '3. Area: $A(x) = x(40 - 2x) = 40x - 2x^2$.',
                  '4. $A\\prime(x) = 40 - 4x = 0 \\implies x = 10\\text{ meters}$.',
                  '5. $y = 40 - 2(10) = 20\\text{ meters}$.',
                  '6. Maximum area $= 10 \\times 20 = 200\\text{ m}^2$.'
                ],
                stepByStepSolutionAr: [
                  '١. بفرض البعدين $x$ و $y$ حيث الضلع المحاذي للنهر هو $y$ ولا يحتاج سياجاً.',
                  '٢. طول السياج: $2x + y = 40 \\implies y = 40 - 2x$.',
                  '٣. دالة المساحة: $A(x) = x(40 - 2x) = 40x - 2x^2$.',
                  '٤. المشتقة: $A\\prime(x) = 40 - 4x = 0 \\implies x = 10$ أمتار.',
                  '٥. الطول: $y = 20$ متراً، وأكبر مساحة هي $10 \\times 20 = 200$ متر مربع.'
                ],
                teacherTipEn: 'Notice that with one side against a natural boundary, the side parallel to the river is twice the width (y = 2x)!',
                teacherTipAr: 'في مسائل التسييج من ٣ جهات، يكون الضلع المحاذي للحد الطبيعي دائماً ضعف العرض (ص = ٢ س)!'
              }
            ]
          },
          interactiveWidget: {
            type: 'calculus_tangent',
            titleEn: 'Optimization & Box Volume Maximizer',
            titleAr: 'محاكي تطبيقات القيم القصوى وحجم الصندوق',
            descriptionEn: 'Interactive tool demonstrating how cut corner size x dictates open box volume.',
            descriptionAr: 'أداة تفاعلية توضح كيف يتحكم طول مربع الركن س في سعة الصندوق الناتج للوصول لأقصى حجم.'
          }
        }
      ],
      solvedExamples: calcCh3SolvedExamples,
      exerciseProblems: calcCh3Exercises,
      databank: calcCh3Databank
    }    ,
    {
      id: 'calc_ch4',
      chapterNumber: 4,
      titleEn: 'Integration & Its Geometric Applications',
      titleAr: 'التكامل وتطبيقاته الهندسية',
      descriptionEn: 'Techniques of indefinite integration (substitution, integration by parts), trigonometric and exponential integrals, definite integrals and their fundamental properties, plane areas between curves, and volumes of solids of revolution.',
      descriptionAr: 'طرق التكامل غير المحدد (التعويض والتجزيء)، تكامل الدوال المثلثية والأسية، خواص ونظريات التكامل المحدد، وحساب مساحات المناطق المستوية بين المنحنيات وحجوم الأجسام الدورانية.',
      isFullyEquipped: true,
      lessons: [
        {
          id: 'calc_l6',
          titleEn: 'Methods of Integration (Substitution & By Parts)',
          titleAr: 'طرق التكامل (التعويض والتجزيء)',
          summaryEn: 'Techniques of integration: integration by substitution for composite functions, logarithmic form f\'(x)/f(x), trigonometric half-angle and power reduction identities, and integration by parts u dv = uv - v du.',
          summaryAr: 'طرق وتكنيكات التكامل: التكامل بالتعويض للدوال المركبة، الصورة اللوغاريتمية (البسط مشتقة المقام)، متطابقات الدوال المثلثية وقوانين ضعف الزاوية، والتكامل بالتجزيء.',
          theoryContentEn: `### 1. Integration by Substitution (التكامل بالتعويض)
When the integrand contains a composite function multiplied by the derivative of its inner function:
$$\\int [f(x)]^n f'(x) dx = \\frac{[f(x)]^{n+1}}{n+1} + C \\quad (n \\neq -1)$$
- For a linear bracket:
  $$\\int (ax + b)^n dx = \\frac{(ax + b)^{n+1}}{a(n+1)} + C$$

### 2. Logarithmic Integration Form (الصورة اللوغاريتمية)
When the numerator is the derivative of the denominator:
$$\\int \\frac{f'(x)}{f(x)} dx = \\ln|f(x)| + C$$
- Examples:
  - $\\int \\tan(x) dx = \\int \\frac{\\sin x}{\\cos x} dx = -\\ln|\\cos x| + C = \\ln|\\sec x| + C$
  - $\\int \\cot(x) dx = \\int \\frac{\\cos x}{\\sin x} dx = \\ln|\\sin x| + C$

### 3. Trigonometric Integrals & Power Reduction
- $\\int \\sin^2(x) dx = \\int \\frac{1 - \\cos(2x)}{2} dx = \\frac{1}{2} x - \\frac{1}{4} \\sin(2x) + C$
- $\\int \\cos^2(x) dx = \\int \\frac{1 + \\cos(2x)}{2} dx = \\frac{1}{2} x + \\frac{1}{4} \\sin(2x) + C$
- $\\int \\tan^2(x) dx = \\int (\\sec^2 x - 1) dx = \\tan(x) - x + C$

### 4. Integration by Parts (التكامل بالتجزيء)
For products of algebraic, exponential, trigonometric, and logarithmic functions:
$$\\int u dv = u v - \\int v du$$
- Follow the LIATE rule for choosing $u$ (differentiation):
  1. **L**: Logarithmic functions ($\\ln x$)
  2. **I**: Inverse trigonometric functions
  3. **A**: Algebraic functions ($x, x^2$)
  4. **T**: Trigonometric functions ($\\sin x, \\cos x$)
  5. **E**: Exponential functions ($e^x, a^x$)`,
          theoryContentAr: `### ١. التكامل بالتعويض
إذا احتوى التكامل على دالة ومشتقتها:
$$\\int [f(x)]^n f'(x) dx = \\frac{[f(x)]^{n+1}}{n+1} + C \\quad (n \\neq -1)$$
- وتكامل القوس الخطي:
  $$\\int (ax + b)^n dx = \\frac{(ax + b)^{n+1}}{a(n+1)} + C$$

### ٢. الصورة اللوغاريتمية (البسط مشتقة المقام)
إذا كان البسط هو المشتقة التامة للمقام:
$$\\int \\frac{f'(x)}{f(x)} dx = \\ln|f(x)| + C$$
- أمثلة شهيرة:
  - $\\int \\tan(x) dx = -\\ln|\\cos x| + C = \\ln|\\sec x| + C$
  - $\\int \\cot(x) dx = \\ln|\\sin x| + C$

### ٣. تكامل مربعات الدوال المثلثية
- $\\int \\sin^2(x) dx = \\frac{1}{2} x - \\frac{1}{4} \\sin(2x) + C$
- $\\int \\cos^2(x) dx = \\frac{1}{2} x + \\frac{1}{4} \\sin(2x) + C$
- $\\int \\tan^2(x) dx = \\tan(x) - x + C$

### ٤. التكامل بالتجزيء
لحاصل ضرب دالتين من نوعين مختلفين:
$$\\int u dv = u v - \\int v du$$
- أولوية اختيار دالة التفاضل $u$:
  ١. الدوال اللوغاريتمية
  ٢. الدوال الجبرية
  ٣. الدوال المثلثية
  ٤. الدوال الأسية`,
          formulas: [
            { labelEn: 'Power of Function Rule', labelAr: 'قاعدة دالة في مشتقتها', latex: '\\int [f(x)]^n f\'(x) dx = \\frac{[f(x)]^{n+1}}{n+1} + C' },
            { labelEn: 'Logarithmic Form', labelAr: 'الصورة اللوغاريتمية', latex: '\\int \\frac{f\'(x)}{f(x)} dx = \\ln|f(x)| + C' },
            { labelEn: 'Integration by Parts', labelAr: 'قانون التكامل بالتجزيء', latex: '\\int u dv = uv - \\int v du' },
            { labelEn: 'Sine Squared Identity', labelAr: 'متطابقة جا تربيع', latex: '\\sin^2(x) = \\frac{1 - \\cos(2x)}{2}' }
          ],
          moeRef: {
            bookTitleEn: 'Ministry Calculus Textbook Grade 12',
            bookTitleAr: 'كتاب التفاضل والتكامل للصف الثالث الثانوي - وزارة التربية والتعليم',
            grade: 'Grade 12',
            term: 'Full Year',
            officialCode: 'MOE-SEC3-CALC-CH4-L1',
            pageRange: 'pp. 140 - 165'
          },
          lessonPlan: {
            titleEn: 'Lesson Plan: Advanced Integration Methods & Parts',
            titleAr: 'خطة درس: طرق التكامل المتقدمة والتجزيء',
            gradeLevel: 'Grade 12 Secondary',
            durationMinutes: 90,
            moeCode: 'MOE-SEC3-CALC-CH4-L1',
            bloomsObjectivesEn: [
              'Identify the appropriate integration method (substitution vs parts) for given functions.',
              'Execute integration by parts for polynomial-exponential and polynomial-logarithmic products.',
              'Utilize double-angle trigonometric identities to integrate even powers of sine and cosine.'
            ],
            bloomsObjectivesAr: [
              'تحديد طريقة التكامل المناسبة (بالتعويض أم بالتجزيء) للدوال المعطاة.',
              'إجراء التكامل بالتجزيء لحاصل ضرب كثيرات الحدود في دوال أسية ولوغاريتمية.',
              'استخدام متطابقات ضعف الزاوية لتكامل القوى الزوجية لجا وجتا.'
            ],
            prerequisitesEn: ['Chain Rule for Differentiation', 'Product Rule', 'Basic Trigonometric Identities'],
            prerequisitesAr: ['قاعدة السلسلة في الاشتقاق', 'مشتقة حاصل ضرب دالتين', 'المتطابقات المثلثية الأساسية'],
            keyVocabularyEn: [
              { term: 'Substitution', definition: 'Transforming an integral into an elementary form via variable change u = g(x).' },
              { term: 'Integration by Parts', definition: 'The integration counterpart of the product rule for differentiation.' },
              { term: 'Logarithmic Form', definition: 'An integral where the numerator is the derivative of the denominator.' }
            ],
            keyVocabularyAr: [
              { term: 'التكامل بالتعويض', definition: 'تحويل التكامل إلى صورة قياسية بسيطة بفرض متغير جديد ع = د(س).' },
              { term: 'التكامل بالتجزيء', definition: 'المقابل التكاملي لقاعدة تفاضل حاصل ضرب دالتين.' },
              { term: 'الصورة اللوغاريتمية', definition: 'تكامل كسر بسطه المشتقة التامة لمقامه.' }
            ],
            teachingPacing: [
              {
                phaseEn: 'Diagnostic Warm-Up & Recognition Drill',
                phaseAr: 'التهيئة وتدريب التمييز السريع',
                duration: '15 mins',
                activitiesEn: 'Identify which rule applies to 5 different sample integrands.',
                activitiesAr: 'تحديد القاعدة المناسبة لخمس دوال تكامل مختلفة.'
              },
              {
                phaseEn: 'Formal Derivation & LIATE Rule',
                phaseAr: 'الاستنتاج وقاعدة أولوية التجزيء',
                duration: '40 mins',
                activitiesEn: 'Derive parts formula from product rule and practice choosing u and dv.',
                activitiesAr: 'استنتاج قانون التجزيء من مشتقة الضرب والتدريب على اختيار د ود ق.'
              },
              {
                phaseEn: 'Guided Group Practice',
                phaseAr: 'تدريب جماعي موجه',
                duration: '25 mins',
                activitiesEn: 'Solve x ln(x), x e^(2x), and sin^2(x) problems in pairs.',
                activitiesAr: 'حل مسائل س لو س، س هـ^(٢س)، وجا²س في مجموعات ثنائية.'
              },
              {
                phaseEn: 'Exit Ticket & Synthesis',
                phaseAr: 'تذكرة الخروج والخلاصة',
                duration: '10 mins',
                activitiesEn: 'Formative check on integration by parts with definite limits.',
                activitiesAr: 'تقييم تكويني لحساب تكامل بالتجزيء بحدود تكامل.'
              }
            ],
            commonMisconceptionsEn: [
              'Integrating both functions separately when multiplying (e.g. integral of f*g is NOT integral of f times integral of g).',
              'Choosing u = e^x instead of u = x in polynomial-exponential products.'
            ],
            commonMisconceptionsAr: [
              'تكامل كل دالة على حدة عند الضرب (تكامل د × ر لا يساوي تكامل د × تكامل ر).',
              'اختيار الدالة الأسية للتفاضل بدلاً من كثيرة الحدود عند التجزيء.'
            ],
            differentiationEn: {
              struggling: 'Use tabular integration (DI method) for repeated integration by parts.',
              advanced: 'Solve cyclic integration by parts such as e^x sin(x).'
            },
            differentiationAr: {
              struggling: 'استخدام طريقة الجدول (التفاضل والتكامل المتتالي) للتجزيء المتكرر.',
              advanced: 'حل مسائل التكامل بالتجزيء الدائري مثل هـ^س جا س.'
            },
            formativeAssessmentEn: 'Evaluate: integral of x / (x^2 + 1) dx.',
            formativeAssessmentAr: 'احسب: تكامل س / (س² + ١) د س. (نصف لو(س² + ١) + ث).',
            exitTicketQuestion: {
              questionEn: 'Evaluate: integral of ln(x) dx.',
              questionAr: 'احسب: تكامل لو_هـ(س) د س.',
              solutionEn: 'u = ln x, dv = dx => x ln(x) - x + C.',
              solutionAr: 'بالتجزيء: د = لو س، د ق = د س => س لو س - س + ث.'
            }
          },
          worksheet: {
            id: 'calc_ws_l6',
            titleEn: 'Worksheet: Substitution & Parts Mastery',
            titleAr: 'ورقة عمل: إتقان التعويض والتجزيء',
            descriptionEn: 'Practice problems on algebraic substitution, logarithmic quotients, and integration by parts.',
            descriptionAr: 'تمارين تدريبية على التعويض الجبري، والكسور اللوغاريتمية، والتكامل بالتجزيء.',
            estimatedTimeMinutes: 45,
            problems: [
              {
                id: 'calc_l6_p1',
                titleEn: 'Linear Exponential Substitution',
                titleAr: 'تكامل دالة أسية خطية',
                difficulty: 'easy',
                questionEn: 'Evaluate: $\\int e^{5x + 1} dx$.',
                questionAr: 'احسب: $\\int e^{5x + 1} dx$.',
                optionsEn: ['$\\frac{1}{5} e^{5x + 1} + C$', '$5 e^{5x + 1} + C$', '$e^{5x + 1} + C$', '$\\frac{1}{5} e^{5x} + C$'],
                optionsAr: ['$\\frac{1}{5} e^{5x + 1} + C$', '$5 e^{5x + 1} + C$', '$e^{5x + 1} + C$', '$\\frac{1}{5} e^{5x} + C$'],
                correctAnswer: '$\\frac{1}{5} e^{5x + 1} + C$',
                correctIndex: 0,
                hintEn: 'Integral of e^(ax+b) is (1/a) e^(ax+b) + C.',
                hintAr: 'تكامل هـ^(أ س + ب) هو (١/أ) هـ^(أ س + ب) + ث.',
                stepByStepSolutionEn: ['\\int e^{5x + 1} dx = \\frac{1}{5} e^{5x + 1} + C.'],
                stepByStepSolutionAr: ['تكامل هـ^(٥س+١) هو (١/٥) هـ^(٥س+١) + ث.']
              },
              {
                id: 'calc_l6_p2',
                titleEn: 'Integration by Parts: x e^(3x)',
                titleAr: 'تكامل بالتجزيء: س هـ^(٣س)',
                difficulty: 'medium',
                questionEn: 'Evaluate: $\\int x e^{3x} dx$.',
                questionAr: 'احسب: $\\int x e^{3x} dx$.',
                optionsEn: ['$\\frac{1}{3} x e^{3x} - \\frac{1}{9} e^{3x} + C$', '$\\frac{1}{3} x e^{3x} + \\frac{1}{9} e^{3x} + C$', '$x e^{3x} - \\frac{1}{3} e^{3x} + C$', '$\\frac{1}{9} x^2 e^{3x} + C$'],
                optionsAr: ['$\\frac{1}{3} x e^{3x} - \\frac{1}{9} e^{3x} + C$', '$\\frac{1}{3} x e^{3x} + \\frac{1}{9} e^{3x} + C$', '$x e^{3x} - \\frac{1}{3} e^{3x} + C$', '$\\frac{1}{9} x^2 e^{3x} + C$'],
                correctAnswer: '$\\frac{1}{3} x e^{3x} - \\frac{1}{9} e^{3x} + C$',
                correctIndex: 0,
                hintEn: 'u = x, dv = e^(3x) dx => v = 1/3 e^(3x).',
                hintAr: 'د = س، د ق = هـ^(٣س) د س => ق = ١/٣ هـ^(٣س).',
                stepByStepSolutionEn: [
                  '1. u = x => du = dx.',
                  '2. dv = e^(3x) dx => v = 1/3 e^(3x).',
                  '3. uv - integral v du = 1/3 x e^(3x) - 1/3 integral e^(3x) dx = 1/3 x e^(3x) - 1/9 e^(3x) + C.'
                ],
                stepByStepSolutionAr: [
                  '١. بالتجزيء: د = س، د ق = هـ^(٣س) د س.',
                  '٢. ق = ١/٣ هـ^(٣س).',
                  '٣. الناتج: ١/٣ س هـ^(٣س) - ١/٩ هـ^(٣س) + ث.'
                ]
              },
              {
                id: 'calc_l6_p3',
                titleEn: 'Definite Integral of Tangent Squared',
                titleAr: 'تكامل محدد لـ ظا²',
                difficulty: 'hots',
                questionEn: 'Evaluate: $\\int_0^{\\pi/4} \\tan^2(x) dx$.',
                questionAr: 'احسب: $\\int_0^{\\pi/4} \\tan^2(x) dx$.',
                optionsEn: ['$1 - \\frac{\\pi}{4}$', '$\\frac{\\pi}{4}$', '$1 + \\frac{\\pi}{4}$', '$1$'],
                optionsAr: ['$1 - \\frac{\\pi}{4}$', '$\\frac{\\pi}{4}$', '$1 + \\frac{\\pi}{4}$', '$1$'],
                correctAnswer: '$1 - \\frac{\\pi}{4}$',
                correctIndex: 0,
                hintEn: 'Use tan^2(x) = sec^2(x) - 1. Antiderivative is tan(x) - x.',
                hintAr: 'استخدم ظا² س = قا² س - ١. الدالة المقابلة هي ظا س - س.',
                stepByStepSolutionEn: [
                  '1. Substitute identity: tan^2(x) = sec^2(x) - 1.',
                  '2. Antiderivative: [tan(x) - x]_0^(pi/4).',
                  '3. Evaluate: (tan(pi/4) - pi/4) - (tan(0) - 0) = 1 - pi/4.'
                ],
                stepByStepSolutionAr: [
                  '١. بالمتطابقة: ظا² س = قا² س - ١.',
                  '٢. الدالة الأصلية: [ظا س - س].',
                  '٣. التعويض بالحدود: (١ - ط/٤) - (٠ - ٠) = ١ - ط/٤.'
                ]
              }
            ]
          },
          interactiveWidget: {
            type: 'calculus_tangent',
            titleEn: 'Interactive Integration by Parts Lab',
            titleAr: 'مختبر التكامل بالتجزيء التفاعلي',
            descriptionEn: 'Interactive visualization showing the geometric representation of u dv and v du integration by parts areas.',
            descriptionAr: 'محاكي تفاعلي يعرض التمثيل الهندسي لمساحات التكامل بالتجزيء.'
          }
        },
        {
          id: 'calc_l7',
          titleEn: 'Definite Integrals, Plane Areas & Volumes of Revolution',
          titleAr: 'التكامل المحدد والمساحات المستوية وحجوم الأجسام الدورانية',
          summaryEn: 'Fundamental Theorem of Calculus, interval additivity, odd/even function integral symmetries. Calculating bounded plane areas between curves, and volumes of solids generated by revolution around the x-axis and y-axis.',
          summaryAr: 'النظرية الأساسية للتفاضل والتكامل، وتجزئة الفترات، وتماثل الدوال الفردية والزوجية. حساب مساحات المناطق المستوية المحصورة بين المنحنيات، وحجوم الأجسام الدورانية الناشئة عن الدوران حول محوري السينات والصادات.',
          theoryContentEn: `### 1. Fundamental Theorem of Calculus & Definite Integrals
If $f(x)$ is continuous on $[a, b]$ and $F'(x) = f(x)$:
$$\\int_a^b f(x) dx = [F(x)]_a^b = F(b) - F(a)$$

### 2. Properties of Definite Integrals:
1. **Reversal of Bounds:** $\\int_b^a f(x) dx = -\\int_a^b f(x) dx$
2. **Identical Bounds:** $\\int_a^a f(x) dx = 0$
3. **Interval Additivity:** $\\int_a^c f(x) dx = \\int_a^b f(x) dx + \\int_b^c f(x) dx$
4. **Odd Function on Symmetric Interval:** If $f(-x) = -f(x)$, then $\\int_{-a}^a f(x) dx = 0$.
5. **Even Function on Symmetric Interval:** If $f(-x) = f(x)$, then $\\int_{-a}^a f(x) dx = 2 \\int_0^a f(x) dx$.

### 3. Areas of Plane Regions (حساب المساحات في المستوى):
1. **Area bounded by curve $y = f(x)$ and x-axis between $x = a$ and $x = b$:**
   $$A = \\int_a^b |f(x)| dx$$
2. **Area bounded between two curves $y_1 = f(x)$ and $y_2 = g(x)$:**
   $$A = \\int_a^b |f(x) - g(x)| dx = \\int_a^b (y_{\\text{upper}} - y_{\\text{lower}}) dx$$

### 4. Volumes of Solids of Revolution (حجوم الأجسام الدورانية):
1. **Revolution of region bounded by $y = f(x)$ around the X-Axis:**
   $$V = \\pi \\int_a^b y^2 dx = \\pi \\int_a^b [f(x)]^2 dx$$
2. **Revolution of region bounded by $x = g(y)$ around the Y-Axis:**
   $$V = \\pi \\int_c^d x^2 dy = \\pi \\int_c^d [g(y)]^2 dy$$
3. **Washer Method (between two curves revolved around X-Axis):**
   $$V = \\pi \\int_a^b (y_{\\text{outer}}^2 - y_{\\text{inner}}^2) dx$$`,
          theoryContentAr: `### ١. النظرية الأساسية للتفاضل والتكامل
إذا كانت $f(x)$ متصلة على الفترة $[a, b]$ وكانت $F'(x) = f(x)$ دالة مقابلة لها:
$$\\int_a^b f(x) dx = F(b) - F(a)$$

### ٢. خواص التكامل المحدد
١. **عكس حدود التكامل:** $\\int_b^a f(x) dx = -\\int_a^b f(x) dx$.
٢. **تطابق الحدين:** $\\int_a^a f(x) dx = 0$.
٣. **تجزئة فترات التكامل:** $\\int_a^c f(x) dx = \\int_a^b f(x) dx + \\int_b^c f(x) dx$.
٤. **الدالة الفردية على فترة متماثلة:** إذا كانت الدالة فردية فإن $\\int_{-a}^a f(x) dx = 0$.
٥. **الدالة الزوجية على فترة متماثلة:** إذا كانت الدالة زوجية فإن $\\int_{-a}^a f(x) dx = 2 \\int_0^a f(x) dx$.

### ٣. حساب المساحات في المستوى
١. **المساحة بين منحنى دالة ومحور السينات:**
   $$A = \\int_a^b |f(x)| dx$$
٢. **المساحة بين منحنيين $y_1$ و $y_2$:**
   $$A = \\int_a^b (y_{\\text{العلوي}} - y_{\\text{السفلي}}) dx$$

### ٤. حجوم الأجسام الدورانية
١. **الدوران حول محور السينات دورة كاملة:**
   $$V = \\pi \\int_a^b y^2 dx$$
٢. **الدوران حول محور الصادات دورة كاملة:**
   $$V = \\pi \\int_c^d x^2 dy$$
٣. **الدوران بين منحنيين حول محور السينات (طريقة الحلقات):**
   $$V = \\pi \\int_a^b (y_1^2 - y_2^2) dx$$`,
          formulas: [
            { labelEn: 'Definite Integral Evaluation', labelAr: 'قيمة التكامل المحدد', latex: '\\int_a^b f(x) dx = F(b) - F(a)' },
            { labelEn: 'Plane Area Formula', labelAr: 'قانون مساحة المنطقة المستوية', latex: 'A = \\int_a^b (y_1 - y_2) dx' },
            { labelEn: 'Revolution Volume (X-Axis)', labelAr: 'حجم الدوران حول محور السينات', latex: 'V = \\pi \\int_a^b y^2 dx' },
            { labelEn: 'Revolution Volume (Y-Axis)', labelAr: 'حجم الدوران حول محور الصادات', latex: 'V = \\pi \\int_c^d x^2 dy' }
          ],
          moeRef: {
            bookTitleEn: 'Ministry Calculus Textbook Grade 12',
            bookTitleAr: 'كتاب التفاضل والتكامل للصف الثالث الثانوي - وزارة التربية والتعليم',
            grade: 'Grade 12',
            term: 'Full Year',
            officialCode: 'MOE-SEC3-CALC-CH4-L2',
            pageRange: 'pp. 166 - 198'
          },
          lessonPlan: {
            titleEn: 'Lesson Plan: Definite Integrals, Areas & Revolution Volumes',
            titleAr: 'خطة درس: التكامل المحدد والمساحات وحجوم الأجسام الدورانية',
            gradeLevel: 'Grade 12 Secondary',
            durationMinutes: 90,
            moeCode: 'MOE-SEC3-CALC-CH4-L2',
            bloomsObjectivesEn: [
              'Evaluate definite integrals using fundamental properties and symmetry.',
              'Set up and calculate areas bounded between straight lines and parabolic curves.',
              'Compute volumes of revolution generated around the x-axis and y-axis.'
            ],
            bloomsObjectivesAr: [
              'حساب التكاملات المحددة بالاستفادة من خواص التجزئة والتماثل.',
              'تحديد حدود التكامل وحساب المساحات المحصورة بين المنحنيات.',
              'حساب حجوم الأجسام الدورانية المتولدة حول محوري السينات والصادات.'
            ],
            prerequisitesEn: ['Definite Integration Fundamentals', 'Equation Solving for Intersections', 'Geometric Graphing'],
            prerequisitesAr: ['أساسيات التكامل المحدد', 'حل المعادلات لتعيين نقاط التقاطع', 'رسم المنحنيات الأساسية'],
            keyVocabularyEn: [
              { term: 'Definite Integral', definition: 'The signed accumulation of a function over an interval [a, b].' },
              { term: 'Plane Area', definition: 'The strictly positive geometric area bounded between curves.' },
              { term: 'Solid of Revolution', definition: 'A three-dimensional solid formed by revolving a plane area around a line.' }
            ],
            keyVocabularyAr: [
              { term: 'التكامل المحدد', definition: 'التراكم الجبري لقيم دالة على فترة محددة [أ، ب].' },
              { term: 'المساحة المستوية', definition: 'المقدار الهندسي الموجب تماماً للمنطقة المحصورة بين المنحنيات.' },
              { term: 'الجسم الدوراني', definition: 'مجسم ثلاثي الأبعاد ناتج عن تدوير منطقة مستوية حول مستقيم ثابت.' }
            ],
            teachingPacing: [
              {
                phaseEn: 'Concept Hook & 3D Visualization',
                phaseAr: 'التهيئة والتصور المجسم ثلاثي الأبعاد',
                duration: '15 mins',
                activitiesEn: 'Demonstrate revolving a 2D triangle into a cone and parabola into a paraboloid.',
                activitiesAr: 'عرض مجسم ثلاثي الأبعاد لدوران مثلث لإنشاء مخروط وقطع مكافئ لإنشاء مجسم مكافئ.'
              },
              {
                phaseEn: 'Area and Volume Formulations',
                phaseAr: 'صياغة قوانين المساحات والحجوم',
                duration: '40 mins',
                activitiesEn: 'Establish boundaries, solve for intersection points, and apply disk/washer formulas.',
                activitiesAr: 'استنتاج نقاط التقاطع وصياغة تكاملات الأقراص والحلقات.'
              },
              {
                phaseEn: 'Guided Problem Solving',
                phaseAr: 'حل مسائل موجهة',
                duration: '25 mins',
                activitiesEn: 'Solve area between y = x^2 and y = 2x, and volume revolving about x-axis.',
                activitiesAr: 'حل مسألة مساحة بين ص = س² و ص = ٢س، وحجم الدوران حول محور السينات.'
              },
              {
                phaseEn: 'Exit Ticket & Synthesis',
                phaseAr: 'تذكرة الخروج والتقويم',
                duration: '10 mins',
                activitiesEn: 'Check understanding of pi factor and square of function in volume calculations.',
                activitiesAr: 'التأكد من استيعاب ضرب التكامل في ط (π) وتربيع الدالة في الحجوم.'
              }
            ],
            commonMisconceptionsEn: [
              'Forgetting the factor of pi in volume formulas.',
              'Subtracting functions before squaring in volume of revolution (it must be R^2 - r^2, not (R - r)^2).'
            ],
            commonMisconceptionsAr: [
              'نسيان ضرب التكامل في ط (π) عند حساب حجوم الأجسام الدورانية.',
              'طرح الدالتين قبل التربيع في الحجوم (الصحيح هو نق١² - نق٢² وليس (نق١ - نق٢)²).'
            ],
            differentiationEn: {
              struggling: 'Use colorful diagrams highlighting upper curve in blue and lower curve in red.',
              advanced: 'Calculate revolution volume about non-axis lines such as y = k.'
            },
            differentiationAr: {
              struggling: 'استخدام رسم ملون يوضح المنحنى العلوي بالأزرق والسفلي بالأحمر.',
              advanced: 'حساب حجوم الأجسام الدورانية حول خطوط مستقيمة لا تمر بنقطة الأصل.'
            },
            formativeAssessmentEn: 'Find volume of revolving y = 2 from x = 0 to 3 about x-axis.',
            formativeAssessmentAr: 'احسب حجم دوران ص = ٢ من س = ٠ إلى ٣ حول محور السينات. (١٢ ط).',
            exitTicketQuestion: {
              questionEn: 'Find area between y = x and y = x^2 on [0, 1].',
              questionAr: 'أوجد مساحة المنطقة بين ص = س و ص = س² في الفترة [٠، ١].',
              solutionEn: 'int_0^1 (x - x^2) dx = [x^2/2 - x^3/3]_0^1 = 1/2 - 1/3 = 1/6 sq unit.',
              solutionAr: 'تكامل (س - س²) = ١/٢ - ١/٣ = ١/٦ وحدة مربعة.'
            }
          },
          worksheet: {
            id: 'calc_ws_l7',
            titleEn: 'Worksheet: Definite Integrals, Areas & Volumes',
            titleAr: 'ورقة عمل: التكامل المحدد والمساحات والحجوم',
            descriptionEn: 'Practice problems on definite integration properties, area between curves, and volumes of revolution.',
            descriptionAr: 'مسائل تدريبية على خواص التكامل المحدد، وحساب المساحات، وحجوم الأجسام الدورانية.',
            estimatedTimeMinutes: 45,
            problems: [
              {
                id: 'calc_l7_p1',
                titleEn: 'Symmetry Property of Odd Functions',
                titleAr: 'خاصية تماثل الدوال الفردية',
                difficulty: 'easy',
                questionEn: 'Evaluate: $\\int_{-3}^3 x^5 dx$.',
                questionAr: 'احسب: $\\int_{-3}^3 x^5 dx$.',
                optionsEn: ['$0$', '$486$', '$243$', '$-243$'],
                optionsAr: ['$0$', '$486$', '$243$', '$-243$'],
                correctAnswer: '$0$',
                correctIndex: 0,
                hintEn: 'x^5 is an odd function integrated over a symmetric interval [-3, 3].',
                hintAr: 'س^٥ دالة فردية وتكاملها على فترة متماثلة [-٣، ٣] يساوي صفراً.',
                stepByStepSolutionEn: ['Since f(-x) = -f(x), integral from -a to a is 0.'],
                stepByStepSolutionAr: ['بما أن الدالة فردية، فإن تكاملها على فترة متماثلة يساوي صفراً.']
              },
              {
                id: 'calc_l7_p2',
                titleEn: 'Area Enclosed Between Line and Parabola',
                titleAr: 'المساحة بين مستقيم وقطع مكافئ',
                difficulty: 'medium',
                questionEn: 'Find the area between $y = 3x$ and $y = x^2$.',
                questionAr: 'أوجد المساحة المحصورة بين المستقيم $y = 3x$ والمنحنى $y = x^2$.',
                optionsEn: ['$\\frac{9}{2}\\text{ sq units}$', '$9\\text{ sq units}$', '$\\frac{27}{2}\\text{ sq units}$', '$\\frac{9}{4}\\text{ sq units}$'],
                optionsAr: ['$\\frac{9}{2}\\text{ وحدة مربعة}$', '$9\\text{ وحدة مربعة}$', '$\\frac{27}{2}\\text{ وحدة مربعة}$', '$\\frac{9}{4}\\text{ وحدة مربعة}$'],
                correctAnswer: '$\\frac{9}{2}\\text{ sq units}$',
                correctIndex: 0,
                hintEn: 'Intersections x = 0, 3. Area = [3x^2/2 - x^3/3]_0^3 = 27/2 - 9 = 9/2.',
                hintAr: 'نقاط التقاطع س = ٠، ٣. المساحة = ٢٧/٢ - ٩ = ٩/٢ وحدة مربعة.',
                stepByStepSolutionEn: [
                  '1. x^2 = 3x => x(x - 3) = 0 => x = 0, 3.',
                  '2. Area = integral_0^3 (3x - x^2) dx = [3x^2/2 - x^3/3]_0^3 = 27/2 - 9 = 9/2 sq units.'
                ],
                stepByStepSolutionAr: [
                  '١. نقاط التقاطع: س(س - ٣) = ٠ ومنها س = ٠، ٣.',
                  '٢. المساحة = تكامل (٣س - س²) = [٣س²/٢ - س³/٣] من ٠ إلى ٣ = ٢٧/٢ - ٩ = ٩/٢ وحدة مربعة.'
                ]
              },
              {
                id: 'calc_l7_p3',
                titleEn: 'Volume of Revolution About X-Axis',
                titleAr: 'حجم الجسم الدوراني حول محور السينات',
                difficulty: 'hots',
                questionEn: 'Find the volume of the solid formed by revolving $y = 2\\sqrt{x}$ from $x = 0$ to $x = 3$ about the x-axis.',
                questionAr: 'أوجد حجم الجسم الدوراني الناتج من دوران $y = 2\\sqrt{x}$ من $x = 0$ إلى $x = 3$ دورة كاملة حول محور السينات.',
                optionsEn: ['$18\\pi\\text{ cubic units}$', '$36\\pi\\text{ cubic units}$', '$12\\pi\\text{ cubic units}$', '$9\\pi\\text{ cubic units}$'],
                optionsAr: ['$18\\pi\\text{ وحدة مكعبة}$', '$36\\pi\\text{ وحدة مكعبة}$', '$12\\pi\\text{ وحدة مكعبة}$', '$9\\pi\\text{ وحدة مكعبة}$'],
                correctAnswer: '$18\\pi\\text{ cubic units}$',
                correctIndex: 0,
                hintEn: 'V = pi * integral_0^3 y^2 dx = pi * integral_0^3 4x dx = pi * [2x^2]_0^3 = 18 pi.',
                hintAr: 'الحجم = ط × تكامل ٤س د س = ط [٢س²] من ٠ إلى ٣ = ١٨ ط.',
                stepByStepSolutionEn: [
                  '1. y^2 = (2 sqrt(x))^2 = 4x.',
                  '2. V = pi integral_0^3 4x dx = pi [2x^2]_0^3 = pi (2 * 9) = 18 pi cubic units.'
                ],
                stepByStepSolutionAr: [
                  '١. ص² = (٢ جذر س)² = ٤س.',
                  '٢. الحجم = ط تكامل ٤س د س من ٠ إلى ٣ = ط [٢س²] = ١٨ ط وحدة مكعبة.'
                ]
              }
            ]
          },
          interactiveWidget: {
            type: 'calculus_tangent',
            titleEn: 'Solid of Revolution 3D Visualizer',
            titleAr: 'محاكي الأجسام الدورانية ثلاثي الأبعاد',
            descriptionEn: 'Interactive simulator visualizing plane area rotation and disk integration volume accumulation.',
            descriptionAr: 'محاكي تفاعلي لعرض دوران المساحات المستوية وتراكم حجوم الأقراص الدائرية.'
          }
        }
      ],
      solvedExamples: calcCh4SolvedExamples,
      exerciseProblems: calcCh4Exercises,
      databank: calcCh4Databank
    }
  ]
};
