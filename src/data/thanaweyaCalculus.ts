import type { Branch } from '../types/curriculum';
import { calcCh1SolvedExamples, calcCh1Exercises } from './textbook/thanaweya/calcCh1Textbook';
import { calcCh1Databank } from './databanks/thanaweya/calcCh1Databank';

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
      ]
    }
  ]
};
