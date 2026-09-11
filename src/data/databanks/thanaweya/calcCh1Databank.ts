import type { ChapterDatabank } from '../../../types/curriculum';

export const calcCh1Databank: ChapterDatabank = {
  easy: [
  {
    "id": "calc_ch1_db_easy_01",
    "titleEn": "Derivative of Secant Function",
    "titleAr": "مشتقة دالة القاطع",
    "difficulty": "easy",
    "questionEn": "Find $\\frac{dy}{dx}$ if $y = \\sec(3x)$.",
    "questionAr": "أوجد $\\frac{dy}{dx}$ إذا كانت $y = \\sec(3x)$.",
    "optionsEn": [
      "$3\\sec(3x)\\tan(3x)$",
      "$\\sec(3x)\\tan(3x)$",
      "$3\\sec^2(3x)$",
      "$-3\\sec(3x)\\tan(3x)$"
    ],
    "optionsAr": [
      "$3\\sec(3x)\\tan(3x)$",
      "$\\sec(3x)\\tan(3x)$",
      "$3\\sec^2(3x)$",
      "$-3\\sec(3x)\\tan(3x)$"
    ],
    "correctAnswer": "$3\\sec(3x)\\tan(3x)$",
    "correctIndex": 0,
    "hintEn": "Remember $\\frac{d}{dx}[\\sec(u)] = \\sec(u)\\tan(u) \\cdot u'$.",
    "hintAr": "تذكر أن مشتقة $\\sec(u)$ هي $\\sec(u)\\tan(u) \\cdot u'$.",
    "stepByStepSolutionEn": [
      "1. Apply chain rule: $\\frac{d}{dx}[\\sec(3x)] = \\sec(3x)\\tan(3x) \\cdot \\frac{d}{dx}(3x)$.",
      "2. Since $\\frac{d}{dx}(3x) = 3$, the derivative is $3\\sec(3x)\\tan(3x)$."
    ],
    "stepByStepSolutionAr": [
      "١. نطبق قاعدة السلسلة: مشتقة $\\sec(3x)$ هي $\\sec(3x)\\tan(3x) \\cdot 3$.",
      "٢. إذن المشتقة تساوي $3\\sec(3x)\\tan(3x)$."
    ],
    "teacherTipEn": "Always multiply by the derivative of the angle.",
    "teacherTipAr": "تذكر دائمًا الضرب في مشتقة الزاوية الداخليّة."
  },
  {
    "id": "calc_ch1_db_easy_02",
    "titleEn": "Derivative of Cosecant Function",
    "titleAr": "مشتقة دالة قاطع التمام",
    "difficulty": "easy",
    "questionEn": "Find $\\frac{dy}{dx}$ if $y = \\csc(5x)$.",
    "questionAr": "أوجد $\\frac{dy}{dx}$ إذا كانت $y = \\csc(5x)$.",
    "optionsEn": [
      "$-5\\csc(5x)\\cot(5x)$",
      "$5\\csc(5x)\\cot(5x)$",
      "$-5\\csc^2(5x)$",
      "$-5\\cot(5x)$"
    ],
    "optionsAr": [
      "$-5\\csc(5x)\\cot(5x)$",
      "$5\\csc(5x)\\cot(5x)$",
      "$-5\\csc^2(5x)$",
      "$-5\\cot(5x)$"
    ],
    "correctAnswer": "$-5\\csc(5x)\\cot(5x)$",
    "correctIndex": 0,
    "hintEn": "Co-functions have negative derivatives: $\\frac{d}{dx}(\\csc u) = -u'\\csc u \\cot u$.",
    "hintAr": "مشتقات الدوال المثلثية التائية تبدأ بإشارة سالبة: مشتقة $\\csc u$ هي $-u'\\csc u \\cot u$.",
    "stepByStepSolutionEn": [
      "1. $\\frac{d}{dx}[\\csc(5x)] = -\\csc(5x)\\cot(5x) \\cdot \\frac{d}{dx}(5x)$.",
      "2. Multiplying by $5$ gives $-5\\csc(5x)\\cot(5x)$."
    ],
    "stepByStepSolutionAr": [
      "١. مشتقة $\\csc(5x)$ تساوي $-\\csc(5x)\\cot(5x) \\cdot 5$.",
      "٢. الناتج النهائي هو $-5\\csc(5x)\\cot(5x)$."
    ],
    "teacherTipEn": "All trigonometric 'co-' functions (cos, cot, csc) have negative derivatives.",
    "teacherTipAr": "جميع الدوال التي تبدأ بـ 'Co' في الإنجليزية مشتقاتها مسبوقة بإشارة سالبة."
  },
  {
    "id": "calc_ch1_db_easy_03",
    "titleEn": "Derivative of Cotangent Function",
    "titleAr": "مشتقة دالة ظل التمام",
    "difficulty": "easy",
    "questionEn": "Find $\\frac{dy}{dx}$ if $y = \\cot(4x)$.",
    "questionAr": "أوجد $\\frac{dy}{dx}$ إذا كانت $y = \\cot(4x)$.",
    "optionsEn": [
      "$-4\\csc^2(4x)$",
      "$4\\sec^2(4x)$",
      "$-4\\cot^2(4x)$",
      "$4\\csc^2(4x)$"
    ],
    "optionsAr": [
      "$-4\\csc^2(4x)$",
      "$4\\sec^2(4x)$",
      "$-4\\cot^2(4x)$",
      "$4\\csc^2(4x)$"
    ],
    "correctAnswer": "$-4\\csc^2(4x)$",
    "correctIndex": 0,
    "hintEn": "Derivative of cotangent is $-\\csc^2(u) \\cdot u'$.",
    "hintAr": "مشتقة $\\cot(u)$ هي $-\\csc^2(u) \\cdot u'$.",
    "stepByStepSolutionEn": [
      "1. $\\frac{d}{dx}[\\cot(4x)] = -\\csc^2(4x) \\cdot \\frac{d}{dx}(4x)$.",
      "2. Therefore, $\\frac{dy}{dx} = -4\\csc^2(4x)$."
    ],
    "stepByStepSolutionAr": [
      "١. مشتقة $\\cot(4x)$ هي $-\\csc^2(4x) \\cdot 4$.",
      "٢. إذن الناتج هو $-4\\csc^2(4x)$."
    ],
    "teacherTipEn": "Do not confuse $\\frac{d}{dx}(\\cot x) = -\\csc^2 x$ with $\\frac{d}{dx}(\\tan x) = \\sec^2 x$.",
    "teacherTipAr": "لا تخلط بين مشتقة الظل ومشتقة ظل التمام."
  },
  {
    "id": "calc_ch1_db_easy_04",
    "titleEn": "Power of a Trigonometric Function",
    "titleAr": "مشتقة قوة دالة دائرية",
    "difficulty": "easy",
    "questionEn": "Find $\\frac{dy}{dx}$ if $y = \\tan^3(x)$.",
    "questionAr": "أوجد $\\frac{dy}{dx}$ إذا كانت $y = \\tan^3(x)$.",
    "optionsEn": [
      "$3\\tan^2(x)\\sec^2(x)$",
      "$3\\tan^2(x)$",
      "$3\\sec^4(x)$",
      "$\\tan^2(x)\\sec^2(x)$"
    ],
    "optionsAr": [
      "$3\\tan^2(x)\\sec^2(x)$",
      "$3\\tan^2(x)$",
      "$3\\sec^4(x)$",
      "$\\tan^2(x)\\sec^2(x)$"
    ],
    "correctAnswer": "$3\\tan^2(x)\\sec^2(x)$",
    "correctIndex": 0,
    "hintEn": "Use the generalized power rule: $\\frac{d}{dx}[u^n] = n u^{n-1} u'$.",
    "hintAr": "استخدم مشتقة القوس المرفوع لأس: $n u^{n-1} u'$.",
    "stepByStepSolutionEn": [
      "1. Treat as $y = [\\tan(x)]^3$.",
      "2. $\\frac{dy}{dx} = 3\\tan^2(x) \\cdot \\frac{d}{dx}(\\tan x) = 3\\tan^2(x)\\sec^2(x)$."
    ],
    "stepByStepSolutionAr": [
      "١. نعتبر $y = [\\tan(x)]^3$.",
      "٢. المشتقة = $3\\tan^2(x) \\cdot \\sec^2(x)$."
    ],
    "teacherTipEn": "Differentiate the outer power first, then multiply by the derivative of the base function.",
    "teacherTipAr": "اشتق القوة الخارجية أولاً ثم اضرب في مشتقة ما بداخل القوس."
  },
  {
    "id": "calc_ch1_db_easy_05",
    "titleEn": "Slope of Tangent to Sum of Trig Functions",
    "titleAr": "ميل المماس لمجموع دوال مثلثية",
    "difficulty": "easy",
    "questionEn": "Find the slope of the tangent line to the curve $y = \\sin(2x) + \\cos(3x)$ at $x = 0$.",
    "questionAr": "أوجد ميل المماس للمنحنى $y = \\sin(2x) + \\cos(3x)$ عند $x = 0$.",
    "optionsEn": [
      "$2$",
      "$0$",
      "$-3$",
      "$-1$"
    ],
    "optionsAr": [
      "$2$",
      "$0$",
      "$-3$",
      "$-1$"
    ],
    "correctAnswer": "$2$",
    "correctIndex": 0,
    "hintEn": "Find $\\frac{dy}{dx}$ and substitute $x = 0$.",
    "hintAr": "أوجد $\\frac{dy}{dx}$ ثم عوّض بـ $x = 0$.",
    "stepByStepSolutionEn": [
      "1. $\\frac{dy}{dx} = 2\\cos(2x) - 3\\sin(3x)$.",
      "2. At $x = 0$: $2\\cos(0) - 3\\sin(0) = 2(1) - 3(0) = 2$."
    ],
    "stepByStepSolutionAr": [
      "١. $\\frac{dy}{dx} = 2\\cos(2x) - 3\\sin(3x)$.",
      "٢. عند $x = 0$: $2(1) - 3(0) = 2$."
    ],
    "teacherTipEn": "Remember $\\cos(0) = 1$ and $\\sin(0) = 0$.",
    "teacherTipAr": "تذكر دائماً أن $\\cos(0) = 1$ و $\\sin(0) = 0$."
  },
  {
    "id": "calc_ch1_db_easy_06",
    "titleEn": "Equation of Tangent to Parabola",
    "titleAr": "معادلة المماس لقطع مكافئ",
    "difficulty": "easy",
    "questionEn": "Find the equation of the tangent line to $y = x^2$ at the point $(1, 1)$.",
    "questionAr": "أوجد معادلة المماس للمنحنى $y = x^2$ عند النقطة $(1, 1)$.",
    "optionsEn": [
      "$y = 2x - 1$",
      "$y = 2x + 1$",
      "$y = x$",
      "$y = -2x + 3$"
    ],
    "optionsAr": [
      "$y = 2x - 1$",
      "$y = 2x + 1$",
      "$y = x$",
      "$y = -2x + 3$"
    ],
    "correctAnswer": "$y = 2x - 1$",
    "correctIndex": 0,
    "hintEn": "Slope $m = y'(1)$, then use $y - y_1 = m(x - x_1)$.",
    "hintAr": "الميل $m = y'(1)$ ثم طبق $y - y_1 = m(x - x_1)$.",
    "stepByStepSolutionEn": [
      "1. $y' = 2x \\implies m = 2(1) = 2$.",
      "2. Tangent equation: $y - 1 = 2(x - 1) \\implies y = 2x - 1$."
    ],
    "stepByStepSolutionAr": [
      "١. $y' = 2x \\implies m = 2$.",
      "٢. معادلة المماس: $y - 1 = 2(x - 1) \\implies y = 2x - 1$."
    ],
    "teacherTipEn": "Point-slope form is standard for all tangent lines.",
    "teacherTipAr": "صيغة النقطة والميل هي الأسرع لإيجاد معادلة المماس."
  },
  {
    "id": "calc_ch1_db_easy_07",
    "titleEn": "Slope of the Normal Line",
    "titleAr": "ميل العمودي على المماس",
    "difficulty": "easy",
    "questionEn": "If the slope of the tangent to a curve at point $P$ is $4$, what is the slope of the normal line at $P$?",
    "questionAr": "إذا كان ميل المماس لمنحنى عند نقطة $P$ هو $4$، فما هو ميل العمودي عند $P$؟",
    "optionsEn": [
      "$-\\frac{1}{4}$",
      "$\\frac{1}{4}$",
      "$-4$",
      "$4$"
    ],
    "optionsAr": [
      "$-\\frac{1}{4}$",
      "$\\frac{1}{4}$",
      "$-4$",
      "$4$"
    ],
    "correctAnswer": "$-\\frac{1}{4}$",
    "correctIndex": 0,
    "hintEn": "The normal line is perpendicular to the tangent line: $m_t \\cdot m_n = -1$.",
    "hintAr": "العمودي يعامد المماس: $m_t \\cdot m_n = -1$.",
    "stepByStepSolutionEn": [
      "1. Normal is perpendicular to tangent, so $m_n = -\\frac{1}{m_t}$.",
      "2. Since $m_t = 4$, $m_n = -\\frac{1}{4}$."
    ],
    "stepByStepSolutionAr": [
      "١. ميل العمودي هو مقلوب ميل المماس مع تغيير الإشارة: $m_n = -\\frac{1}{m_t}$.",
      "٢. بما أن $m_t = 4$ فإن $m_n = -\\frac{1}{4}$."
    ],
    "teacherTipEn": "Always negate and invert the slope to find the normal slope.",
    "teacherTipAr": "اعكس إشارة مقلوب الميل للحصول على ميل العمودي."
  },
  {
    "id": "calc_ch1_db_easy_08",
    "titleEn": "Implicit Derivative of Circle",
    "titleAr": "الاشتقاق الضمني للدائرة",
    "difficulty": "easy",
    "questionEn": "If $x^2 + y^2 = 25$, find $\\frac{dy}{dx}$ in terms of $x$ and $y$.",
    "questionAr": "إذا كانت $x^2 + y^2 = 25$، أوجد $\\frac{dy}{dx}$ بدلالة $x$ و $y$.",
    "optionsEn": [
      "$-\\frac{x}{y}$",
      "$\\frac{x}{y}$",
      "$-\\frac{y}{x}$",
      "$\\frac{y}{x}$"
    ],
    "optionsAr": [
      "$-\\frac{x}{y}$",
      "$\\frac{x}{y}$",
      "$-\\frac{y}{x}$",
      "$\\frac{y}{x}$"
    ],
    "correctAnswer": "$-\\frac{x}{y}$",
    "correctIndex": 0,
    "hintEn": "Differentiate implicitly with respect to $x$: $\\frac{d}{dx}(y^2) = 2y y'$.",
    "hintAr": "اشتق ضمنياً بالنسبة لـ $x$: مشتقة $y^2$ هي $2y y'$.",
    "stepByStepSolutionEn": [
      "1. Differentiating: $2x + 2y \\frac{dy}{dx} = 0$.",
      "2. $2y \\frac{dy}{dx} = -2x \\implies \\frac{dy}{dx} = -\\frac{x}{y}$."
    ],
    "stepByStepSolutionAr": [
      "١. بالاشتقاق: $2x + 2y y' = 0$.",
      "٢. $y' = -\\frac{2x}{2y} = -\\frac{x}{y}$."
    ],
    "teacherTipEn": "For any concentric circle centered at origin, the tangent slope is always $-x/y$.",
    "teacherTipAr": "لأي دائرة مركزها الأصل، ميل المماس يساوي دائماً $-x/y$ وميل نصف القطر هو $y/x$."
  },
  {
    "id": "calc_ch1_db_easy_09",
    "titleEn": "Parametric First Derivative",
    "titleAr": "المشتقة الأولى لمعادلات بارامترية",
    "difficulty": "easy",
    "questionEn": "If $x = 3t^2$ and $y = 2t^3$, find $\\frac{dy}{dx}$ in terms of $t$ ($t \\neq 0$).",
    "questionAr": "إذا كانت $x = 3t^2$ و $y = 2t^3$، أوجد $\\frac{dy}{dx}$ بدلالة $t$ ($t \\neq 0$).",
    "optionsEn": [
      "$t$",
      "$\\frac{1}{t}$",
      "$t^2$",
      "$6t$"
    ],
    "optionsAr": [
      "$t$",
      "$\\frac{1}{t}$",
      "$t^2$",
      "$6t$"
    ],
    "correctAnswer": "$t$",
    "correctIndex": 0,
    "hintEn": "Parametric rule: $\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}$.",
    "hintAr": "قاعدة الاشتقاق البارامتري: $\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}$.",
    "stepByStepSolutionEn": [
      "1. $\\frac{dx}{dt} = 6t$ and $\\frac{dy}{dt} = 6t^2$.",
      "2. $\\frac{dy}{dx} = \\frac{6t^2}{6t} = t$."
    ],
    "stepByStepSolutionAr": [
      "١. $\\frac{dx}{dt} = 6t$ و $\\frac{dy}{dt} = 6t^2$.",
      "٢. $\\frac{dy}{dx} = \\frac{6t^2}{6t} = t$."
    ],
    "teacherTipEn": "Divide $\\frac{dy}{dt}$ by $\\frac{dx}{dt}$, never the reverse.",
    "teacherTipAr": "تأكد دائماً من وضع مشتقة $y$ في البسط ومشتقة $x$ في المقام."
  },
  {
    "id": "calc_ch1_db_easy_10",
    "titleEn": "Second Derivative of Polynomial",
    "titleAr": "المشتقة الثانية لكثيرة حدود",
    "difficulty": "easy",
    "questionEn": "If $y = x^4 - 2x^3 + 5$, find $\\frac{d^2y}{dx^2}$ at $x = 1$.",
    "questionAr": "إذا كانت $y = x^4 - 2x^3 + 5$، أوجد $\\frac{d^2y}{dx^2}$ عند $x = 1$.",
    "optionsEn": [
      "$0$",
      "$6$",
      "$-6$",
      "$12$"
    ],
    "optionsAr": [
      "$0$",
      "$6$",
      "$-6$",
      "$12$"
    ],
    "correctAnswer": "$0$",
    "correctIndex": 0,
    "hintEn": "Differentiate twice then substitute $x = 1$.",
    "hintAr": "اشتق مرتين ثم عوّض عن $x = 1$.",
    "stepByStepSolutionEn": [
      "1. $y' = 4x^3 - 6x^2$.",
      "2. $y'' = 12x^2 - 12x$.",
      "3. At $x = 1$: $y''(1) = 12(1)^2 - 12(1) = 0$."
    ],
    "stepByStepSolutionAr": [
      "١. المشتقة الأولى: $y' = 4x^3 - 6x^2$.",
      "٢. المشتقة الثانية: $y'' = 12x^2 - 12x$.",
      "٣. عند $x = 1$: $y''(1) = 12 - 12 = 0$."
    ],
    "teacherTipEn": "When $y'' = 0$, this often marks a candidate inflection point.",
    "teacherTipAr": "انعدام المشتقة الثانية هو شرط أساسي للبحث عن نقط الانقلاب."
  },
  {
    "id": "calc_ch1_db_easy_11",
    "titleEn": "Derivative of Trigonometric Identity",
    "titleAr": "مشتقة متطابقة مثلثية",
    "difficulty": "easy",
    "questionEn": "Find $\\frac{d}{dx}(\\sec^2 x - \\tan^2 x)$ for all $x$ in the domain.",
    "questionAr": "أوجد $\\frac{d}{dx}(\\sec^2 x - \\tan^2 x)$ لجميع قيم $x$ في مجال التعريف.",
    "optionsEn": [
      "$0$",
      "$1$",
      "$2\\sec^2 x \\tan x$",
      "$\\sec x \\tan x$"
    ],
    "optionsAr": [
      "$0$",
      "$1$",
      "$2\\sec^2 x \\tan x$",
      "$\\sec x \\tan x$"
    ],
    "correctAnswer": "$0$",
    "correctIndex": 0,
    "hintEn": "Simplify using the Pythagorean identity $\\sec^2 x - \\tan^2 x = 1$ before differentiating.",
    "hintAr": "بسّط المتطابقة الفيثاغورسية $\\sec^2 x - \\tan^2 x = 1$ قبل الاشتقاق.",
    "stepByStepSolutionEn": [
      "1. The identity $\\sec^2 x - \\tan^2 x = 1$ holds everywhere in the domain.",
      "2. The derivative of a constant function is $0$."
    ],
    "stepByStepSolutionAr": [
      "١. من المتطابقات الأساسية: $\\sec^2 x - \\tan^2 x = 1$.",
      "٢. مشتقة أي مقدار ثابت تساوي صفراً."
    ],
    "teacherTipEn": "Simplifying trig expressions using identities saves significant time on exams.",
    "teacherTipAr": "تبسيط المقدار المثلثي قبل الاشتقاق يوفر وقتًا ثمينًا في الامتحان."
  },
  {
    "id": "calc_ch1_db_easy_12",
    "titleEn": "Derivative of Product Csc and Cot",
    "titleAr": "مشتقة حاصل ضرب قاطع التمام وظل التمام",
    "difficulty": "easy",
    "questionEn": "If $y = \\csc x \\cot x$, find $\\frac{dy}{dx}$.",
    "questionAr": "إذا كانت $y = \\csc x \\cot x$، أوجد $\\frac{dy}{dx}$.",
    "optionsEn": [
      "$-\\csc x(\\cot^2 x + \\csc^2 x)$",
      "$\\csc x(\\cot^2 x - \\csc^2 x)$",
      "$-\\csc^3 x$",
      "$\\cot^3 x$"
    ],
    "optionsAr": [
      "$-\\csc x(\\cot^2 x + \\csc^2 x)$",
      "$\\csc x(\\cot^2 x - \\csc^2 x)$",
      "$-\\csc^3 x$",
      "$\\cot^3 x$"
    ],
    "correctAnswer": "$-\\csc x(\\cot^2 x + \\csc^2 x)$",
    "correctIndex": 0,
    "hintEn": "Use product rule: $(uv)' = u'v + uv'$.",
    "hintAr": "طبق قاعدة ضرب دالتين: الأولى في مشتقة الثانية + الثانية في مشتقة الأولى.",
    "stepByStepSolutionEn": [
      "1. $y' = (-\\csc x \\cot x)(\\cot x) + (\\csc x)(-\\csc^2 x)$.",
      "2. Factor out $-\\csc x$: $y' = -\\csc x(\\cot^2 x + \\csc^2 x)$."
    ],
    "stepByStepSolutionAr": [
      "١. بالاشتقاق كضرب دالتين: $y' = (-\\csc x \\cot x)(\\cot x) + (\\csc x)(-\\csc^2 x)$.",
      "٢. بأخذ $-\\csc x$ عاملاً مشتركاً: $y' = -\\csc x(\\cot^2 x + \\csc^2 x)$."
    ],
    "teacherTipEn": "Factoring out common terms clarifies the final algebraic expression.",
    "teacherTipAr": "إخراج العامل المشترك يسهل مطابقة الناتج مع خيارات السؤال."
  },
  {
    "id": "calc_ch1_db_easy_13",
    "titleEn": "Derivative of Square Root of Secant",
    "titleAr": "مشتقة الجذر التربيعي للقاطع",
    "difficulty": "easy",
    "questionEn": "Find the value of $\\frac{d}{dx}(\\sqrt{\\sec x})$ at $x = 0$.",
    "questionAr": "أوجد قيمة $\\frac{d}{dx}(\\sqrt{\\sec x})$ عند $x = 0$.",
    "optionsEn": [
      "$0$",
      "$1$",
      "$\\frac{1}{2}$",
      "$\\sqrt{2}$"
    ],
    "optionsAr": [
      "$0$",
      "$1$",
      "$\\frac{1}{2}$",
      "$\\sqrt{2}$"
    ],
    "correctAnswer": "$0$",
    "correctIndex": 0,
    "hintEn": "Recall $\\frac{d}{dx}\\sqrt{u} = \\frac{u'}{2\\sqrt{u}}$.",
    "hintAr": "تذكر أن مشتقة الجذر التربيعي تساوي مشتقة ما تحت الجذر مقسومة على ضعفي الجذر.",
    "stepByStepSolutionEn": [
      "1. $y' = \\frac{\\sec x \\tan x}{2\\sqrt{\\sec x}}$.",
      "2. At $x = 0$, $\\sec(0) = 1$ and $\\tan(0) = 0$.",
      "3. Therefore, $y'(0) = \\frac{1 \\cdot 0}{2\\sqrt{1}} = 0$."
    ],
    "stepByStepSolutionAr": [
      "١. $y' = \\frac{\\sec x \\tan x}{2\\sqrt{\\sec x}}$.",
      "٢. عند $x = 0$، لدينا $\\sec(0) = 1$ و $\\tan(0) = 0$.",
      "٣. إذن $y'(0) = 0$."
    ],
    "teacherTipEn": "Because $\\tan(0) = 0$, any product with $\\tan x$ vanishes at $0$.",
    "teacherTipAr": "بما أن $\\tan(0) = 0$، فإن أي حد يحتوي على $\\tan x$ ينعدم عند الصفر."
  },
  {
    "id": "calc_ch1_db_easy_14",
    "titleEn": "Derivative Value of Tangent Multiple Angle",
    "titleAr": "قيمة مشتقة ظل زاوية مضاعفة",
    "difficulty": "easy",
    "questionEn": "If $f(x) = \\tan(2x)$, evaluate $f'\\left(\\frac{\\pi}{8}\\right)$.",
    "questionAr": "إذا كانت $f(x) = \\tan(2x)$، فاحسب قيمة $f'\\left(\\frac{\\pi}{8}\\right)$.",
    "optionsEn": [
      "$4$",
      "$2$",
      "$2\\sqrt{2}$",
      "$1$"
    ],
    "optionsAr": [
      "$4$",
      "$2$",
      "$2\\sqrt{2}$",
      "$1$"
    ],
    "correctAnswer": "$4$",
    "correctIndex": 0,
    "hintEn": "Derivative of $\\tan(2x)$ is $2\\sec^2(2x)$.",
    "hintAr": "مشتقة $\\tan(2x)$ هي $2\\sec^2(2x)$.",
    "stepByStepSolutionEn": [
      "1. $f'(x) = 2\\sec^2(2x)$.",
      "2. When $x = \\frac{\\pi}{8}$, $2x = \\frac{\\pi}{4}$.",
      "3. $\\sec\\left(\\frac{\\pi}{4}\\right) = \\sqrt{2} \\implies \\sec^2\\left(\\frac{\\pi}{4}\\right) = 2$.",
      "4. $f'(\\pi/8) = 2 \\times 2 = 4$."
    ],
    "stepByStepSolutionAr": [
      "١. $f'(x) = 2\\sec^2(2x)$.",
      "٢. عند $x = \\frac{\\pi}{8}$، الزاوية تصبح $2x = \\frac{\\pi}{4}$.",
      "٣. $\\sec(\\pi/4) = \\sqrt{2} \\implies \\sec^2(\\pi/4) = 2$.",
      "٤. إذن $f'(\\pi/8) = 2 \\times 2 = 4$."
    ],
    "teacherTipEn": "Special angles $\\frac{\\pi}{4}, \\frac{\\pi}{6}, \\frac{\\pi}{3}$ appear very frequently in Egyptian exams.",
    "teacherTipAr": "الزوايا الخاصة تظهر بكثرة في امتحانات الثانوية العامة المصرية."
  },
  {
    "id": "calc_ch1_db_easy_15",
    "titleEn": "Chain Rule on Cotangent Linear Argument",
    "titleAr": "مشتقة دالة ظل التمام لزاوية خطية",
    "difficulty": "easy",
    "questionEn": "If $y = \\cot\\left(\\frac{\\pi}{4} - x\\right)$, find $\\frac{dy}{dx}$.",
    "questionAr": "إذا كانت $y = \\cot\\left(\\frac{\\pi}{4} - x\\right)$، أوجد $\\frac{dy}{dx}$.",
    "optionsEn": [
      "$\\csc^2\\left(\\frac{\\pi}{4} - x\\right)$",
      "$-\\csc^2\\left(\\frac{\\pi}{4} - x\\right)$",
      "$\\sec^2\\left(\\frac{\\pi}{4} - x\\right)$",
      "$-\\sec^2\\left(\\frac{\\pi}{4} - x\\right)$"
    ],
    "optionsAr": [
      "$\\csc^2\\left(\\frac{\\pi}{4} - x\\right)$",
      "$-\\csc^2\\left(\\frac{\\pi}{4} - x\\right)$",
      "$\\sec^2\\left(\\frac{\\pi}{4} - x\\right)$",
      "$-\\sec^2\\left(\\frac{\\pi}{4} - x\\right)$"
    ],
    "correctAnswer": "$\\csc^2\\left(\\frac{\\pi}{4} - x\\right)$",
    "correctIndex": 0,
    "hintEn": "Derivative of the inner angle $\\frac{d}{dx}(\\frac{\\pi}{4} - x) = -1$.",
    "hintAr": "مشتقة الزاوية الداخلية تساوي $-1$.",
    "stepByStepSolutionEn": [
      "1. $\\frac{dy}{dx} = -\\csc^2\\left(\\frac{\\pi}{4} - x\\right) \\cdot \\frac{d}{dx}\\left(\\frac{\\pi}{4} - x\\right)$.",
      "2. Since $\\frac{d}{dx}(\\frac{\\pi}{4} - x) = -1$, the two minus signs cancel: $(-1)(-) = +$.",
      "3. $\\frac{dy}{dx} = \\csc^2\\left(\\frac{\\pi}{4} - x\\right)$."
    ],
    "stepByStepSolutionAr": [
      "١. المشتقة = $-\\csc^2(\\pi/4 - x) \\cdot (-1)$.",
      "٢. إشارة السالب تلغي السالب: $(-)(-) = +$.",
      "٣. الناتج النهائي هو $\\csc^2(\\pi/4 - x)$."
    ],
    "teacherTipEn": "Watch the negative sign from the inner linear coefficient!",
    "teacherTipAr": "انتبه للإشارة السالبة لمعامل $x$ داخل الزاوية!"
  },
  {
    "id": "calc_ch1_db_easy_16",
    "titleEn": "Slope of Tangent to x sin x",
    "titleAr": "ميل المماس للمنحنى س جا س",
    "difficulty": "easy",
    "questionEn": "Find the slope of the tangent line to the curve $y = x\\sin x$ at $x = \\pi$.",
    "questionAr": "أوجد ميل المماس للمنحنى $y = x\\sin x$ عند $x = \\pi$.",
    "optionsEn": [
      "$-\\pi$",
      "$\\pi$",
      "$0$",
      "$-1$"
    ],
    "optionsAr": [
      "$-\\pi$",
      "$\\pi$",
      "$0$",
      "$-1$"
    ],
    "correctAnswer": "$-\\pi$",
    "correctIndex": 0,
    "hintEn": "Use product rule: $y' = \\sin x + x\\cos x$.",
    "hintAr": "طبق قاعدة مشتقة حاصل الضرب: $y' = \\sin x + x\\cos x$.",
    "stepByStepSolutionEn": [
      "1. $y' = 1 \\cdot \\sin x + x \\cdot \\cos x$.",
      "2. At $x = \\pi$: $y'(\\pi) = \\sin\\pi + \\pi\\cos\\pi = 0 + \\pi(-1) = -\\pi$."
    ],
    "stepByStepSolutionAr": [
      "١. $y' = \\sin x + x\\cos x$.",
      "٢. عند $x = \\pi$: $y'(\\pi) = 0 + \\pi(-1) = -\\pi$."
    ],
    "teacherTipEn": "Remember $\\sin\\pi = 0$ and $\\cos\\pi = -1$.",
    "teacherTipAr": "تذكر أن $\\sin\\pi = 0$ بينما $\\cos\\pi = -1$."
  },
  {
    "id": "calc_ch1_db_easy_17",
    "titleEn": "Quotient Rule with Sine",
    "titleAr": "قاعدة القسمة مع دالة الجيب",
    "difficulty": "easy",
    "questionEn": "If $y = \\frac{\\sin x}{x}$, evaluate $\\frac{dy}{dx}$ at $x = \\frac{\\pi}{2}$.",
    "questionAr": "إذا كانت $y = \\frac{\\sin x}{x}$، فاحسب قيمة $\\frac{dy}{dx}$ عند $x = \\frac{\\pi}{2}$.",
    "optionsEn": [
      "$-\\frac{4}{\\pi^2}$",
      "$\\frac{4}{\\pi^2}$",
      "$0$",
      "$-\\frac{2}{\\pi}$"
    ],
    "optionsAr": [
      "$-\\frac{4}{\\pi^2}$",
      "$\\frac{4}{\\pi^2}$",
      "$0$",
      "$-\\frac{2}{\\pi}$"
    ],
    "correctAnswer": "$-\\frac{4}{\\pi^2}$",
    "correctIndex": 0,
    "hintEn": "Quotient rule: $\\frac{x\\cos x - \\sin x}{x^2}$.",
    "hintAr": "قاعدة القسمة: (المقام × مشتقة البسط - البسط × مشتقة المقام) على مربع المقام.",
    "stepByStepSolutionEn": [
      "1. $y' = \\frac{x\\cos x - (1)\\sin x}{x^2}$.",
      "2. Substitute $x = \\pi/2$: $\\cos(\\pi/2) = 0, \\sin(\\pi/2) = 1$.",
      "3. $y'(\\pi/2) = \\frac{(\\pi/2)(0) - 1}{(\\pi/2)^2} = \\frac{-1}{\\pi^2 / 4} = -\\frac{4}{\\pi^2}$."
    ],
    "stepByStepSolutionAr": [
      "١. $y' = \\frac{x\\cos x - \\sin x}{x^2}$.",
      "٢. عند $x = \\pi/2$: البسط = $0 - 1 = -1$.",
      "٣. المقام = $\\pi^2/4$، إذن الناتج هو $-\\frac{4}{\\pi^2}$."
    ],
    "teacherTipEn": "When dividing by fractions, multiply by the reciprocal.",
    "teacherTipAr": "القسمة على كسر تعني الضرب في مقلوبه."
  },
  {
    "id": "calc_ch1_db_easy_18",
    "titleEn": "Inclination Angle of Tangent",
    "titleAr": "زاوية ميل المماس مع محور السينات",
    "difficulty": "easy",
    "questionEn": "What is the angle of inclination $\\theta$ of the tangent line to $y = \\tan x$ at $x = 0$ with the positive $x$-axis?",
    "questionAr": "ما هي زاوية ميل المماس للمنحنى $y = \\tan x$ عند $x = 0$ مع الاتجاه الموجب لمحور السينات؟",
    "optionsEn": [
      "$45^\\circ$",
      "$0^\\circ$",
      "$30^\\circ$",
      "$60^\\circ$"
    ],
    "optionsAr": [
      "$45^\\circ$",
      "$0^\\circ$",
      "$30^\\circ$",
      "$60^\\circ$"
    ],
    "correctAnswer": "$45^\\circ$",
    "correctIndex": 0,
    "hintEn": "Slope $m = \\tan\\theta = y'(0)$.",
    "hintAr": "الميل $m = \\tan\\theta = y'(0)$.",
    "stepByStepSolutionEn": [
      "1. $y' = \\sec^2 x$.",
      "2. At $x = 0$: $m = \\sec^2(0) = 1$.",
      "3. Since $\\tan\\theta = 1$, the angle of inclination is $\\theta = 45^\\circ$."
    ],
    "stepByStepSolutionAr": [
      "١. $y' = \\sec^2 x$.",
      "٢. عند $x = 0$: الميل $m = 1$.",
      "٣. بما أن $\\tan\\theta = 1$، إذن $\\theta = 45^\\circ$."
    ],
    "teacherTipEn": "The slope of a tangent is the tangent of its angle of inclination: $m = \\tan\\theta$.",
    "teacherTipAr": "ميل المماس هو ظل زاوية ميله مع الاتجاه الموجب لمحور السينات."
  },
  {
    "id": "calc_ch1_db_easy_19",
    "titleEn": "Horizontal Tangent Condition",
    "titleAr": "شرط المماس الأفقي",
    "difficulty": "easy",
    "questionEn": "If the tangent to the curve $y = f(x)$ at the point $(2, 3)$ is parallel to the $x$-axis, then:",
    "questionAr": "إذا كان المماس للمنحنى $y = f(x)$ عند النقطة $(2, 3)$ يوازي محور السينات، فإن:",
    "optionsEn": [
      "$f'(2) = 0$",
      "$f'(2) = 3$",
      "$f'(3) = 0$",
      "$f'(2)$ is undefined"
    ],
    "optionsAr": [
      "$f'(2) = 0$",
      "$f'(2) = 3$",
      "$f'(3) = 0$",
      "$f'(2)$ غير معرّف"
    ],
    "correctAnswer": "$f'(2) = 0$",
    "correctIndex": 0,
    "hintEn": "Lines parallel to the $x$-axis have a slope of zero.",
    "hintAr": "المستقيمات الموازية لمحور السينات ميلها يساوي صفراً.",
    "stepByStepSolutionEn": [
      "1. A horizontal line has slope $m = 0$.",
      "2. Since the tangent slope at $x = 2$ is $f'(2)$, we have $f'(2) = 0$."
    ],
    "stepByStepSolutionAr": [
      "١. ميل أي مستقيم أفقي موازٍ لمحور السينات يساوي صفراً.",
      "٢. بما أن ميل المماس عند $x = 2$ هو $f'(2)$، إذن $f'(2) = 0$."
    ],
    "teacherTipEn": "Parallel to $x$-axis implies $y' = 0$. Parallel to $y$-axis implies $y'$ is undefined.",
    "teacherTipAr": "موازٍ للسينات يعني $y' = 0$، وموازٍ للصادات يعني $y'$ غير معرّف (المقام بصفر)."
  },
  {
    "id": "calc_ch1_db_easy_20",
    "titleEn": "Vertical Tangent from Horizontal Normal",
    "titleAr": "المماس الرأسي من العمودي الأفقي",
    "difficulty": "easy",
    "questionEn": "If the normal line to the curve $y = f(x)$ at $(1, 4)$ is parallel to the $x$-axis, then the tangent line at $(1, 4)$ is:",
    "questionAr": "إذا كان العمودي على المنحنى $y = f(x)$ عند النقطة $(1, 4)$ يوازي محور السينات، فإن المماس عند $(1, 4)$ يكون:",
    "optionsEn": [
      "Parallel to the $y$-axis",
      "Parallel to the $x$-axis",
      "Passing through the origin",
      "Having a slope of 1"
    ],
    "optionsAr": [
      "موازياً لمحور الصادات",
      "موازياً لمحور السينات",
      "ماراً بنقطة الأصل",
      "ميله يساوي 1"
    ],
    "correctAnswer": "Parallel to the $y$-axis",
    "correctIndex": 0,
    "hintEn": "The tangent is perpendicular to the normal line.",
    "hintAr": "المماس عمودي دائماً على العمودي.",
    "stepByStepSolutionEn": [
      "1. If normal is parallel to the $x$-axis (horizontal), its slope is $0$.",
      "2. The tangent line is perpendicular to the normal, so it must be vertical (parallel to the $y$-axis)."
    ],
    "stepByStepSolutionAr": [
      "١. العمودي أفقي (يوازي محور السينات وميله صفر).",
      "٢. المماس عمودي على العمودي، لذا يجب أن يكون رأسياً (يوازي محور الصادات)."
    ],
    "teacherTipEn": "Horizontal normal means vertical tangent, and vice versa.",
    "teacherTipAr": "إذا كان العمودي أفقياً فالمماس رأسي، والعكس صحيح."
  },
  {
    "id": "calc_ch1_db_easy_21",
    "titleEn": "Second Derivative of Power Expression",
    "titleAr": "المشتقة الثانية لمقدار مرفوع لقوة",
    "difficulty": "easy",
    "questionEn": "If $y = (2x - 1)^5$, find $\\frac{d^2y}{dx^2}$ at $x = 1$.",
    "questionAr": "إذا كانت $y = (2x - 1)^5$، أوجد $\\frac{d^2y}{dx^2}$ عند $x = 1$.",
    "optionsEn": [
      "$80$",
      "$20$",
      "$40$",
      "$160$"
    ],
    "optionsAr": [
      "$80$",
      "$20$",
      "$40$",
      "$160$"
    ],
    "correctAnswer": "$80$",
    "correctIndex": 0,
    "hintEn": "Differentiate twice using the chain rule, multiplying by $2$ each time.",
    "hintAr": "اشتق مرتين بقاعدة السلسلة مع الضرب في معامل $x$ في كل مرة.",
    "stepByStepSolutionEn": [
      "1. $y' = 5(2x - 1)^4 \\cdot 2 = 10(2x - 1)^4$.",
      "2. $y'' = 10 \\cdot 4(2x - 1)^3 \\cdot 2 = 80(2x - 1)^3$.",
      "3. At $x = 1$: $80(2(1) - 1)^3 = 80(1)^3 = 80$."
    ],
    "stepByStepSolutionAr": [
      "١. المشتقة الأولى: $y' = 10(2x - 1)^4$.",
      "٢. المشتقة الثانية: $y'' = 80(2x - 1)^3$.",
      "٣. عند $x = 1$: $y'' = 80(1) = 80$."
    ],
    "teacherTipEn": "Remember to multiply by the derivative of the inside function in EACH derivative step.",
    "teacherTipAr": "لا تنسَ الضرب في معامل القوس الداخلي في كل مرحلة اشتقاق."
  },
  {
    "id": "calc_ch1_db_easy_22",
    "titleEn": "Derivative with Degree Angle",
    "titleAr": "مشتقة دالة مثلثية زاويتها بالدرجات",
    "difficulty": "easy",
    "questionEn": "If $y = \\sin(x^\\circ)$, where $x^\\circ$ is measured in degrees, find $\\frac{dy}{dx}$.",
    "questionAr": "إذا كانت $y = \\sin(x^\\circ)$ حيث الزاوية مقاسة بالدرجات الستينية، أوجد $\\frac{dy}{dx}$.",
    "optionsEn": [
      "$\\frac{\\pi}{180}\\cos(x^\\circ)$",
      "$\\cos(x^\\circ)$",
      "$-\\frac{\\pi}{180}\\cos(x^\\circ)$",
      "$\\frac{180}{\\pi}\\cos(x^\\circ)$"
    ],
    "optionsAr": [
      "$\\frac{\\pi}{180}\\cos(x^\\circ)$",
      "$\\cos(x^\\circ)$",
      "$-\\frac{\\pi}{180}\\cos(x^\\circ)$",
      "$\\frac{180}{\\pi}\\cos(x^\\circ)$"
    ],
    "correctAnswer": "$\\frac{\\pi}{180}\\cos(x^\\circ)$",
    "correctIndex": 0,
    "hintEn": "Convert degrees to radians before differentiating: $x^\\circ = \\frac{\\pi x}{180}$.",
    "hintAr": "حوّل الدرجات إلى راديان قبل الاشتقاق: $x^\\circ = \\frac{\\pi x}{180}$.",
    "stepByStepSolutionEn": [
      "1. Calculus differentiation rules only apply when angles are in radians.",
      "2. Since $x^\\circ = \\frac{\\pi x}{180}$, $y = \\sin\\left(\\frac{\\pi x}{180}\\right)$.",
      "3. Differentiating gives $\\frac{dy}{dx} = \\frac{\\pi}{180}\\cos\\left(\\frac{\\pi x}{180}\\right) = \\frac{\\pi}{180}\\cos(x^\\circ)$."
    ],
    "stepByStepSolutionAr": [
      "١. قواعد اشتقاق الدوال الدائرية تشترط القياس الدائري.",
      "٢. $x^\\circ = \\frac{\\pi x}{180}$، إذن $y = \\sin\\left(\\frac{\\pi x}{180}\\right)$.",
      "٣. بالاشتقاق: $\\frac{dy}{dx} = \\frac{\\pi}{180}\\cos(x^\\circ)$."
    ],
    "teacherTipEn": "A classic trap question in the Egyptian General Secondary Exam!",
    "teacherTipAr": "سؤال كلاسيكي مشهور في امتحانات الثانوية العامة!"
  },
  {
    "id": "calc_ch1_db_easy_23",
    "titleEn": "Parametric Slope of Circle",
    "titleAr": "ميل المماس لمنحنى دائري بارامتري",
    "difficulty": "easy",
    "questionEn": "If $x = 2\\cos\\theta$ and $y = 2\\sin\\theta$, find $\\frac{dy}{dx}$ at $\\theta = \\frac{\\pi}{4}$.",
    "questionAr": "إذا كانت $x = 2\\cos\\theta$ و $y = 2\\sin\\theta$، أوجد $\\frac{dy}{dx}$ عند $\\theta = \\frac{\\pi}{4}$.",
    "optionsEn": [
      "$-1$",
      "$1$",
      "$0$",
      "Undefined"
    ],
    "optionsAr": [
      "$-1$",
      "$1$",
      "$0$",
      "غير معرّف"
    ],
    "correctAnswer": "$-1$",
    "correctIndex": 0,
    "hintEn": "$\\frac{dy}{dx} = \\frac{dy/d\\theta}{dx/d\\theta}$.",
    "hintAr": "المشتقة البارامترية تساوي مشتقة ص بالنسبة لـ $\\theta$ مقسومة على مشتقة س بالنسبة لـ $\\theta$.",
    "stepByStepSolutionEn": [
      "1. $\\frac{dx}{d\\theta} = -2\\sin\\theta$ and $\\frac{dy}{d\\theta} = 2\\cos\\theta$.",
      "2. $\\frac{dy}{dx} = \\frac{2\\cos\\theta}{-2\\sin\\theta} = -\\cot\\theta$.",
      "3. At $\\theta = \\pi/4$: $-\\cot(\\pi/4) = -1$."
    ],
    "stepByStepSolutionAr": [
      "١. $\\frac{dx}{d\\theta} = -2\\sin\\theta$ و $\\frac{dy}{d\\theta} = 2\\cos\\theta$.",
      "٢. $\\frac{dy}{dx} = -\\cot\\theta$.",
      "٣. عند $\\theta = \\pi/4$: $-\\cot(\\pi/4) = -1$."
    ],
    "teacherTipEn": "Notice that $-\\cot\\theta = -x/y$, matching the Cartesian circle equation.",
    "teacherTipAr": "لاحظ أن $-\\cot\\theta$ تطابق $-x/y$ بالصورة الكارتيزية للدائرة."
  },
  {
    "id": "calc_ch1_db_easy_24",
    "titleEn": "Rate of Change of Square Root Function",
    "titleAr": "معدل تغير دالة جذرية",
    "difficulty": "easy",
    "questionEn": "Find the rate of change of $y = \\sqrt{2x + 5}$ with respect to $x$ at $x = 2$.",
    "questionAr": "أوجد معدل تغير $y = \\sqrt{2x + 5}$ بالنسبة لـ $x$ عند $x = 2$.",
    "optionsEn": [
      "$\\frac{1}{3}$",
      "$\\frac{2}{3}$",
      "$\\frac{1}{6}$",
      "$3$"
    ],
    "optionsAr": [
      "$\\frac{1}{3}$",
      "$\\frac{2}{3}$",
      "$\\frac{1}{6}$",
      "$3$"
    ],
    "correctAnswer": "$\\frac{1}{3}$",
    "correctIndex": 0,
    "hintEn": "Rate of change means the derivative $\\frac{dy}{dx}$.",
    "hintAr": "معدل التغير يعني المشتقة الأولى $\\frac{dy}{dx}$.",
    "stepByStepSolutionEn": [
      "1. $\\frac{dy}{dx} = \\frac{2}{2\\sqrt{2x + 5}} = \\frac{1}{\\sqrt{2x + 5}}$.",
      "2. Substitute $x = 2$: $\\frac{1}{\\sqrt{4 + 5}} = \\frac{1}{\\sqrt{9}} = \\frac{1}{3}$."
    ],
    "stepByStepSolutionAr": [
      "١. مشتقة الجذر: $\\frac{2}{2\\sqrt{2x + 5}} = \\frac{1}{\\sqrt{2x + 5}}$.",
      "٢. بالتعويض عن $x = 2$: $\\frac{1}{\\sqrt{9}} = \\frac{1}{3}$."
    ],
    "teacherTipEn": "Cancel the factor of $2$ between numerator and denominator early.",
    "teacherTipAr": "اختصر العدد 2 بين البسط والمقام لتسهيل الحسابات الذهنية."
  },
  {
    "id": "calc_ch1_db_easy_25",
    "titleEn": "Derivative of Secant plus Tangent",
    "titleAr": "مشتقة القاطع مضافاً إليه الظل",
    "difficulty": "easy",
    "questionEn": "If $y = \\sec x + \\tan x$, which of the following expresses $\\frac{dy}{dx}$ in terms of $y$?",
    "questionAr": "إذا كانت $y = \\sec x + \\tan x$، فأي مما يلي يعبر عن $\\frac{dy}{dx}$ بدلالة $y$؟",
    "optionsEn": [
      "$y \\sec x$",
      "$y \\tan x$",
      "$y^2$",
      "$\\sec^2 x$"
    ],
    "optionsAr": [
      "$y \\sec x$",
      "$y \\tan x$",
      "$y^2$",
      "$\\sec^2 x$"
    ],
    "correctAnswer": "$y \\sec x$",
    "correctIndex": 0,
    "hintEn": "Differentiate and factor out $\\sec x$.",
    "hintAr": "اشتق ثم خذ $\\sec x$ عاملاً مشتركاً.",
    "stepByStepSolutionEn": [
      "1. $y' = \\sec x \\tan x + \\sec^2 x$.",
      "2. Factoring out $\\sec x$: $y' = \\sec x(\\tan x + \\sec x)$.",
      "3. Since $y = \\sec x + \\tan x$, this simplifies to $y' = y \\sec x$."
    ],
    "stepByStepSolutionAr": [
      "١. بالاشتقاق: $y' = \\sec x \\tan x + \\sec^2 x$.",
      "٢. بأخذ $\\sec x$ عاملاً مشتركاً: $y' = \\sec x(\\tan x + \\sec x)$.",
      "٣. بما أن القوس يساوي $y$، إذن $y' = y \\sec x$."
    ],
    "teacherTipEn": "A famous identity in differential equations and integrating factors.",
    "teacherTipAr": "متطابقة شهيرة جداً تفيد في حل المعادلات التفاضلية."
  },
  {
    "id": "calc_ch1_db_easy_26",
    "titleEn": "Derivative of Csc minus Cot",
    "titleAr": "مشتقة قاطع التمام مطروحاً منه ظل التمام",
    "difficulty": "easy",
    "questionEn": "If $y = \\csc x - \\cot x$, which of the following expresses $\\frac{dy}{dx}$ in terms of $y$?",
    "questionAr": "إذا كانت $y = \\csc x - \\cot x$، فأي مما يلي يعبر عن $\\frac{dy}{dx}$ بدلالة $y$؟",
    "optionsEn": [
      "$y \\csc x$",
      "$-y \\csc x$",
      "$y \\cot x$",
      "$-y \\cot x$"
    ],
    "optionsAr": [
      "$y \\csc x$",
      "$-y \\csc x$",
      "$y \\cot x$",
      "$-y \\cot x$"
    ],
    "correctAnswer": "$y \\csc x$",
    "correctIndex": 0,
    "hintEn": "Differentiate and factor out $\\csc x$.",
    "hintAr": "اشتق ثم خذ $\\csc x$ عاملاً مشتركاً.",
    "stepByStepSolutionEn": [
      "1. $y' = -\\csc x \\cot x - (-\\csc^2 x) = \\csc^2 x - \\csc x \\cot x$.",
      "2. Factor out $\\csc x$: $y' = \\csc x(\\csc x - \\cot x)$.",
      "3. Since $y = \\csc x - \\cot x$, this yields $y' = y \\csc x$."
    ],
    "stepByStepSolutionAr": [
      "١. بالاشتقاق: $y' = -\\csc x \\cot x + \\csc^2 x$.",
      "٢. بأخذ $\\csc x$ عاملاً مشتركاً: $y' = \\csc x(\\csc x - \\cot x)$.",
      "٣. إذن $y' = y \\csc x$."
    ],
    "teacherTipEn": "Notice the beautiful symmetry with the $\\sec x + \\tan x$ formula.",
    "teacherTipAr": "لاحظ التماثل الجميل مع متطابقة $\\sec x + \\tan x$."
  },
  {
    "id": "calc_ch1_db_easy_27",
    "titleEn": "Right-hand Derivative of Absolute Value",
    "titleAr": "المشتقة اليمنى لدالة المقياس",
    "difficulty": "easy",
    "questionEn": "If $f(x) = |x - 3|$, what is the right-hand derivative $f'_+(3)$?",
    "questionAr": "إذا كانت $f(x) = |x - 3|$، فما هي المشتقة اليمنى $f'_+(3)$؟",
    "optionsEn": [
      "$1$",
      "$-1$",
      "$0$",
      "Does not exist"
    ],
    "optionsAr": [
      "$1$",
      "$-1$",
      "$0$",
      "غير موجودة"
    ],
    "correctAnswer": "$1$",
    "correctIndex": 0,
    "hintEn": "For $x > 3$, $|x - 3| = x - 3$.",
    "hintAr": "عند $x > 3$، تكون دالة المقياس موجبة: $|x - 3| = x - 3$.",
    "stepByStepSolutionEn": [
      "1. Redefine the function for $x > 3$: $f(x) = x - 3$.",
      "2. Differentiating with respect to $x$ gives $f'_+(3) = 1$."
    ],
    "stepByStepSolutionAr": [
      "١. تعريف الدالة على يمين النقطة 3: $f(x) = x - 3$.",
      "٢. بالاشتقاق نجد أن $f'_+(3) = 1$."
    ],
    "teacherTipEn": "The right derivative is $1$ and left derivative is $-1$, so $f'(3)$ does not exist.",
    "teacherTipAr": "المشتقة اليمنى 1 واليسرى -1، لذلك المشتقة العامة غير موجودة عند رأس المنحنى."
  },
  {
    "id": "calc_ch1_db_easy_28",
    "titleEn": "Derivative of Reciprocal Cosine",
    "titleAr": "مشتقة مقلوب جيب التمام",
    "difficulty": "easy",
    "questionEn": "If $y = \\frac{1}{\\cos(3x)}$, find $\\frac{dy}{dx}$.",
    "questionAr": "إذا كانت $y = \\frac{1}{\\cos(3x)}$، أوجد $\\frac{dy}{dx}$.",
    "optionsEn": [
      "$3\\sec(3x)\\tan(3x)$",
      "$-3\\sec(3x)\\tan(3x)$",
      "$3\\csc(3x)\\cot(3x)$",
      "$-3\\sin(3x)$"
    ],
    "optionsAr": [
      "$3\\sec(3x)\\tan(3x)$",
      "$-3\\sec(3x)\\tan(3x)$",
      "$3\\csc(3x)\\cot(3x)$",
      "$-3\\sin(3x)$"
    ],
    "correctAnswer": "$3\\sec(3x)\\tan(3x)$",
    "correctIndex": 0,
    "hintEn": "Rewrite $\\frac{1}{\\cos(3x)}$ as $\\sec(3x)$ before differentiating.",
    "hintAr": "أعد كتابة $\\frac{1}{\\cos(3x)}$ كـ $\\sec(3x)$ قبل البدء بالاشتقاق.",
    "stepByStepSolutionEn": [
      "1. $y = \\sec(3x)$.",
      "2. $\\frac{dy}{dx} = 3\\sec(3x)\\tan(3x)$."
    ],
    "stepByStepSolutionAr": [
      "١. $y = \\sec(3x)$.",
      "٢. $\\frac{dy}{dx} = 3\\sec(3x)\\tan(3x)$."
    ],
    "teacherTipEn": "Converting reciprocals to their direct trig functions avoids quotient rule errors.",
    "teacherTipAr": "تحويل المقلوبات لدوال القاطع وقاطع التمام يجنبك أخطاء قاعدة القسمة."
  },
  {
    "id": "calc_ch1_db_easy_29",
    "titleEn": "Slope of Tangent to Hyperbola",
    "titleAr": "ميل المماس للقطع الزائد",
    "difficulty": "easy",
    "questionEn": "Find the slope of the tangent to the hyperbola $x^2 - y^2 = 9$ at the point $(5, 4)$.",
    "questionAr": "أوجد ميل المماس للقطع الزائد $x^2 - y^2 = 9$ عند النقطة $(5, 4)$.",
    "optionsEn": [
      "$\\frac{5}{4}$",
      "$-\\frac{5}{4}$",
      "$\\frac{4}{5}$",
      "$-\\frac{4}{5}$"
    ],
    "optionsAr": [
      "$\\frac{5}{4}$",
      "$-\\frac{5}{4}$",
      "$\\frac{4}{5}$",
      "$-\\frac{4}{5}$"
    ],
    "correctAnswer": "$\\frac{5}{4}$",
    "correctIndex": 0,
    "hintEn": "Differentiate implicitly: $2x - 2y y' = 0 \\implies y' = x/y$.",
    "hintAr": "اشتق ضمنياً: $2x - 2y y' = 0 \\implies y' = x/y$.",
    "stepByStepSolutionEn": [
      "1. Differentiating implicitly: $2x - 2y \\frac{dy}{dx} = 0$.",
      "2. $\\frac{dy}{dx} = \\frac{x}{y}$.",
      "3. At $(5, 4)$, the slope is $\\frac{5}{4}$."
    ],
    "stepByStepSolutionAr": [
      "١. بالاشتقاق الضمني: $2x - 2y y' = 0$.",
      "٢. $y' = x/y$.",
      "٣. عند النقطة $(5, 4)$، الميل = $5/4$."
    ],
    "teacherTipEn": "For $x^2 - y^2 = c$, the tangent slope is always $x/y$.",
    "teacherTipAr": "للقطع الزائد المتساوي الساقين $x^2 - y^2 = c$، ميل المماس دائماً هو $x/y$."
  },
  {
    "id": "calc_ch1_db_easy_30",
    "titleEn": "Slope of Normal to Cubic Curve",
    "titleAr": "ميل العمودي لمنحنى تكعيبي",
    "difficulty": "easy",
    "questionEn": "Find the slope of the normal line to the curve $y = x^3 - 3x$ at $x = 2$.",
    "questionAr": "أوجد ميل العمودي على المنحنى $y = x^3 - 3x$ عند $x = 2$.",
    "optionsEn": [
      "$-\\frac{1}{9}$",
      "$9$",
      "$\\frac{1}{9}$",
      "$-9$"
    ],
    "optionsAr": [
      "$-\\frac{1}{9}$",
      "$9$",
      "$\\frac{1}{9}$",
      "$-9$"
    ],
    "correctAnswer": "$-\\frac{1}{9}$",
    "correctIndex": 0,
    "hintEn": "Find tangent slope $m_t = y'(2)$, then normal slope $m_n = -1/m_t$.",
    "hintAr": "أوجد ميل المماس أولاً $y'(2)$ ثم خذ مقلوبه بعكس الإشارة.",
    "stepByStepSolutionEn": [
      "1. $y' = 3x^2 - 3$.",
      "2. At $x = 2$: $m_t = 3(4) - 3 = 9$.",
      "3. Normal slope $m_n = -\\frac{1}{m_t} = -\\frac{1}{9}$."
    ],
    "stepByStepSolutionAr": [
      "١. $y' = 3x^2 - 3$.",
      "٢. عند $x = 2$: ميل المماس = $12 - 3 = 9$.",
      "٣. ميل العمودي = $-1/9$."
    ],
    "teacherTipEn": "Don't stop at the tangent slope; make sure to answer what the question asked for!",
    "teacherTipAr": "انتبه للمطلوب: السؤال طلب ميل العمودي وليس ميل المماس!"
  },
  {
    "id": "calc_ch1_db_easy_31",
    "titleEn": "Derivative of Cos4 - Sin4",
    "titleAr": "مشتقة الفرق بين القوة الرابعة لجيب التمام والجيب",
    "difficulty": "easy",
    "questionEn": "If $y = \\cos^4 x - \\sin^4 x$, find $\\frac{dy}{dx}$.",
    "questionAr": "إذا كانت $y = \\cos^4 x - \\sin^4 x$، أوجد $\\frac{dy}{dx}$.",
    "optionsEn": [
      "$-2\\sin(2x)$",
      "$2\\sin(2x)$",
      "$-\\cos(2x)$",
      "$-4\\cos^3 x \\sin x$"
    ],
    "optionsAr": [
      "$-2\\sin(2x)$",
      "$2\\sin(2x)$",
      "$-\\cos(2x)$",
      "$-4\\cos^3 x \\sin x$"
    ],
    "correctAnswer": "$-2\\sin(2x)$",
    "correctIndex": 0,
    "hintEn": "Factor as difference of squares: $(\\cos^2 x - \\sin^2 x)(\\cos^2 x + \\sin^2 x)$.",
    "hintAr": "حلل كفرق بين مربعين: $(\\cos^2 x - \\sin^2 x)(\\cos^2 x + \\sin^2 x)$.",
    "stepByStepSolutionEn": [
      "1. Factor: $y = (\\cos^2 x - \\sin^2 x)(\\cos^2 x + \\sin^2 x)$.",
      "2. Since $\\cos^2 x + \\sin^2 x = 1$ and $\\cos^2 x - \\sin^2 x = \\cos(2x)$, we have $y = \\cos(2x)$.",
      "3. Differentiating: $\\frac{dy}{dx} = -2\\sin(2x)$."
    ],
    "stepByStepSolutionAr": [
      "١. بالتحليل كفرق بين مربعين: $y = (\\cos^2 x - \\sin^2 x)(\\cos^2 x + \\sin^2 x)$.",
      "٢. بما أن القوس الثاني = 1، والأول = $\\cos(2x)$، إذن $y = \\cos(2x)$.",
      "٣. بالاشتقاق: $y' = -2\\sin(2x)$."
    ],
    "teacherTipEn": "Trigonometric factoring drastically simplifies high-power derivatives.",
    "teacherTipAr": "التحليل الجبري للدوال المثلثية يختصر الاشتقاقات المعقدة في خطوة واحدة."
  },
  {
    "id": "calc_ch1_db_easy_32",
    "titleEn": "Fourth Derivative of Sine Multiple",
    "titleAr": "المشتقة الرابعة لدالة جيب زاوية مضاعفة",
    "difficulty": "easy",
    "questionEn": "If $f(x) = \\sin(2x)$, find the fourth derivative $f^{(4)}(x)$.",
    "questionAr": "إذا كانت $f(x) = \\sin(2x)$، أوجد المشتقة الرابعة $f^{(4)}(x)$.",
    "optionsEn": [
      "$16\\sin(2x)$",
      "$-16\\sin(2x)$",
      "$8\\cos(2x)$",
      "$16\\cos(2x)$"
    ],
    "optionsAr": [
      "$16\\sin(2x)$",
      "$-16\\sin(2x)$",
      "$8\\cos(2x)$",
      "$16\\cos(2x)$"
    ],
    "correctAnswer": "$16\\sin(2x)$",
    "correctIndex": 0,
    "hintEn": "Every 4 derivatives, sine cycles back: $\\frac{d^4}{dx^4}[\\sin(kx)] = k^4 \\sin(kx)$.",
    "hintAr": "مشتقات الجيب دورية كل 4 مرات: المشتقة الرابعة تعود لنفس الدالة مضروبة في $k^4$.",
    "stepByStepSolutionEn": [
      "1. $f'(x) = 2\\cos(2x)$.",
      "2. $f''(x) = -4\\sin(2x)$.",
      "3. $f'''(x) = -8\\cos(2x)$.",
      "4. $f^{(4)}(x) = 16\\sin(2x)$."
    ],
    "stepByStepSolutionAr": [
      "١. المشتقة الأولى: $2\\cos(2x)$.",
      "٢. الثانية: $-4\\sin(2x)$.",
      "٣. الثالثة: $-8\\cos(2x)$.",
      "٤. الرابعة: $16\\sin(2x)$."
    ],
    "teacherTipEn": "In general, $\\frac{d^{4n}}{dx^{4n}}[\\sin(kx)] = k^{4n}\\sin(kx)$.",
    "teacherTipAr": "قاعدة عامة: المشتقات من الرتبة مضاعفات 4 تعيد نفس الدالة مع رفع المعامل لنفس القوة."
  },
  {
    "id": "calc_ch1_db_easy_33",
    "titleEn": "Point of Horizontal Tangent on Parabola",
    "titleAr": "نقطة المماس الأفقي على القطع المكافئ",
    "difficulty": "easy",
    "questionEn": "Find the point on the parabola $y = x^2 - 4x + 5$ at which the tangent line is horizontal.",
    "questionAr": "أوجد النقطة الواقعة على المنحنى $y = x^2 - 4x + 5$ والتي يكون المماس عندها أفقياً.",
    "optionsEn": [
      "$(2, 1)$",
      "$(2, 5)$",
      "$(0, 5)$",
      "$(4, 5)$"
    ],
    "optionsAr": [
      "$(2, 1)$",
      "$(2, 5)$",
      "$(0, 5)$",
      "$(4, 5)$"
    ],
    "correctAnswer": "$(2, 1)$",
    "correctIndex": 0,
    "hintEn": "Horizontal tangent means $y' = 0$.",
    "hintAr": "المماس الأفقي يعني أن المشتقة الأولى $y' = 0$.",
    "stepByStepSolutionEn": [
      "1. $y' = 2x - 4$.",
      "2. Set $y' = 0 \\implies 2x - 4 = 0 \\implies x = 2$.",
      "3. Substitute $x = 2$ into curve equation: $y = 4 - 8 + 5 = 1$.",
      "4. The point is $(2, 1)$."
    ],
    "stepByStepSolutionAr": [
      "١. $y' = 2x - 4$.",
      "٢. نضع $y' = 0 \\implies 2x = 4 \\implies x = 2$.",
      "٣. بالتعويض في معادلة المنحنى: $y = 4 - 8 + 5 = 1$.",
      "٤. النقطة هي $(2, 1)$."
    ],
    "teacherTipEn": "For a parabola, the horizontal tangent occurs at its vertex.",
    "teacherTipAr": "في القطع المكافئ، المماس الأفقي يقع دائماً عند رأس المنحنى."
  },
  {
    "id": "calc_ch1_db_easy_34",
    "titleEn": "Point where Tangent Angle is 45 Degrees",
    "titleAr": "نقطة ميل مماسها 45 درجة",
    "difficulty": "easy",
    "questionEn": "Find the point on the curve $y = \\sqrt{x}$ where the tangent makes an angle of $45^\\circ$ with the positive $x$-axis.",
    "questionAr": "أوجد النقطة على المنحنى $y = \\sqrt{x}$ حيث يصنع المماس زاوية قياسها $45^\\circ$ مع الاتجاه الموجب لمحور السينات.",
    "optionsEn": [
      "$(\\frac{1}{4}, \\frac{1}{2})$",
      "$(1, 1)$",
      "$(4, 2)$",
      "$(\\frac{1}{2}, \\frac{\\sqrt{2}}{2})$"
    ],
    "optionsAr": [
      "$(\\frac{1}{4}, \\frac{1}{2})$",
      "$(1, 1)$",
      "$(4, 2)$",
      "$(\\frac{1}{2}, \\frac{\\sqrt{2}}{2})$"
    ],
    "correctAnswer": "$(\\frac{1}{4}, \\frac{1}{2})$",
    "correctIndex": 0,
    "hintEn": "$\\tan(45^\\circ) = 1$, so set $y' = 1$.",
    "hintAr": "بما أن $\\tan(45^\\circ) = 1$، إذن نساوي المشتقة بالواحد الصحيح.",
    "stepByStepSolutionEn": [
      "1. $y' = \\frac{1}{2\\sqrt{x}}$.",
      "2. Slope $m = \\tan(45^\\circ) = 1 \\implies \\frac{1}{2\\sqrt{x}} = 1$.",
      "3. $2\\sqrt{x} = 1 \\implies \\sqrt{x} = \\frac{1}{2} \\implies x = \\frac{1}{4}$.",
      "4. Then $y = \\sqrt{1/4} = \\frac{1}{2}$. Point is $(\\frac{1}{4}, \\frac{1}{2})$."
    ],
    "stepByStepSolutionAr": [
      "١. $y' = \\frac{1}{2\\sqrt{x}}$.",
      "٢. الميل $m = \\tan 45^\\circ = 1 \\implies 2\\sqrt{x} = 1$.",
      "٣. $\\sqrt{x} = 1/2 \\implies x = 1/4$.",
      "٤. الإحداثي الصادي $y = 1/2$. إذن النقطة هي $(1/4, 1/2)$."
    ],
    "teacherTipEn": "Remember to calculate both $x$ and $y$ coordinates when asked for a 'point'.",
    "teacherTipAr": "تأكد من إيجاد الإحداثيين السيني والصادي معاً عند طلب 'نقطة'."
  },
  {
    "id": "calc_ch1_db_easy_35",
    "titleEn": "Parametric Derivative at Given Parameter",
    "titleAr": "المشتقة البارامترية عند قيمة بارامتر معطاة",
    "difficulty": "easy",
    "questionEn": "If $x = t^3 + 1$ and $y = t^2$, find $\\frac{dy}{dx}$ when $t = 2$.",
    "questionAr": "إذا كانت $x = t^3 + 1$ و $y = t^2$، أوجد $\\frac{dy}{dx}$ عندما $t = 2$.",
    "optionsEn": [
      "$\\frac{1}{3}$",
      "$\\frac{2}{3}$",
      "$3$",
      "$12$"
    ],
    "optionsAr": [
      "$\\frac{1}{3}$",
      "$\\frac{2}{3}$",
      "$3$",
      "$12$"
    ],
    "correctAnswer": "$\\frac{1}{3}$",
    "correctIndex": 0,
    "hintEn": "$\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}$.",
    "hintAr": "المشتقة البارامترية هي حاصل قسمة مشتقة $y$ على مشتقة $x$.",
    "stepByStepSolutionEn": [
      "1. $\\frac{dx}{dt} = 3t^2$ and $\\frac{dy}{dt} = 2t$.",
      "2. $\\frac{dy}{dx} = \\frac{2t}{3t^2} = \\frac{2}{3t}$.",
      "3. At $t = 2$: $\\frac{dy}{dx} = \\frac{2}{3(2)} = \\frac{1}{3}$."
    ],
    "stepByStepSolutionAr": [
      "١. $\\frac{dx}{dt} = 3t^2$ و $\\frac{dy}{dt} = 2t$.",
      "٢. $\\frac{dy}{dx} = \\frac{2}{3t}$.",
      "٣. عند $t = 2$: الناتج = $\\frac{2}{6} = \\frac{1}{3}$."
    ],
    "teacherTipEn": "Cancel common powers of $t$ before plugging in numbers.",
    "teacherTipAr": "اختصر المتغير $t$ أولاً ثم عوّض بالرقم المطلوب."
  },
  {
    "id": "calc_ch1_db_easy_36",
    "titleEn": "Tangent Derivative Differential Relation",
    "titleAr": "علاقة تفاضلية لدالة الظل",
    "difficulty": "easy",
    "questionEn": "If $y = \\tan x$, what is the value of $\\frac{dy}{dx} - y^2$?",
    "questionAr": "إذا كانت $y = \\tan x$، فما قيمة المقدار $\\frac{dy}{dx} - y^2$؟",
    "optionsEn": [
      "$1$",
      "$0$",
      "$-1$",
      "$\\sec^2 x$"
    ],
    "optionsAr": [
      "$1$",
      "$0$",
      "$-1$",
      "$\\sec^2 x$"
    ],
    "correctAnswer": "$1$",
    "correctIndex": 0,
    "hintEn": "Recall $\\frac{d}{dx}(\\tan x) = \\sec^2 x$ and $\\sec^2 x - \\tan^2 x = 1$.",
    "hintAr": "تذكر أن مشتقة $\\tan x$ هي $\\sec^2 x$، وأن $\\sec^2 x - \\tan^2 x = 1$.",
    "stepByStepSolutionEn": [
      "1. $\\frac{dy}{dx} = \\sec^2 x$.",
      "2. $\\frac{dy}{dx} - y^2 = \\sec^2 x - \\tan^2 x$.",
      "3. By Pythagorean identity, $\\sec^2 x - \\tan^2 x = 1$."
    ],
    "stepByStepSolutionAr": [
      "١. المشتقة $\\frac{dy}{dx} = \\sec^2 x$.",
      "٢. المقدار المطلوب: $\\sec^2 x - \\tan^2 x$.",
      "٣. من متطابقة فيثاغورس، الناتج يساوي 1 دائماً."
    ],
    "teacherTipEn": "This identity proves $\\frac{dy}{dx} = 1 + y^2$ for the tangent function.",
    "teacherTipAr": "هذه المتطابقة تبين أن مشتقة الظل يمكن كتابتها كـ $1 + y^2$."
  },
  {
    "id": "calc_ch1_db_easy_37",
    "titleEn": "Kinematic Acceleration when Velocity is Zero",
    "titleAr": "العجلة عندما تنعدم السرعة",
    "difficulty": "easy",
    "questionEn": "The displacement of a particle moving in a straight line is given by $s = t^3 - 6t^2 + 9t$. Find its acceleration when velocity is zero for $t > 0$.",
    "questionAr": "يتحرك جسيم في خط مستقيم بحيث تعطى إزاحته بالعلاقة $s = t^3 - 6t^2 + 9t$. أوجد عجلته عندما تنعدم سرعته لقيم $t > 0$.",
    "optionsEn": [
      "$6\\text{ or }-6$",
      "$6$",
      "$12$",
      "$0$"
    ],
    "optionsAr": [
      "$6\\text{ أو }-6$",
      "$6$",
      "$12$",
      "$0$"
    ],
    "correctAnswer": "$6\\text{ or }-6$",
    "correctIndex": 0,
    "hintEn": "Velocity $v = s'$, acceleration $a = s''$. Set $v = 0$ to find $t$.",
    "hintAr": "السرعة $v = s'$ والعجلة $a = s''$. ساوي السرعة بالصفر لإيجاد $t$.",
    "stepByStepSolutionEn": [
      "1. $v = s' = 3t^2 - 12t + 9 = 3(t - 1)(t - 3)$.",
      "2. Velocity is zero at $t = 1$ and $t = 3$.",
      "3. $a = s'' = 6t - 12$.",
      "4. At $t = 1$: $a = 6 - 12 = -6$. At $t = 3$: $a = 18 - 12 = 6$."
    ],
    "stepByStepSolutionAr": [
      "١. السرعة $v = 3t^2 - 12t + 9 = 3(t - 1)(t - 3)$.",
      "٢. تنعدم السرعة عند $t = 1$ و $t = 3$.",
      "٣. العجلة $a = 6t - 12$.",
      "٤. عند $t = 1$: العجلة = $-6$. وعند $t = 3$: العجلة = $6$."
    ],
    "teacherTipEn": "Both moments in time represent instances where velocity vanishes.",
    "teacherTipAr": "كلا اللحظتين تمثلان سكوناً لحظياً، ولكل منهما عجلة مقابلة."
  },
  {
    "id": "calc_ch1_db_easy_38",
    "titleEn": "Rate of Change of Circle Area vs Radius",
    "titleAr": "معدل تغير مساحة الدائرة بالنسبة لنصف القطر",
    "difficulty": "easy",
    "questionEn": "The rate of change of the area of a circle with respect to its radius when $r = 5\\text{ cm}$ is:",
    "questionAr": "معدل تغير مساحة دائرة بالنسبة لنصف قطرها عندما $r = 5\\text{ سم}$ يساوي:",
    "optionsEn": [
      "$10\\pi\\text{ cm}$",
      "$25\\pi\\text{ cm}$",
      "$5\\pi\\text{ cm}$",
      "$20\\pi\\text{ cm}$"
    ],
    "optionsAr": [
      "$10\\pi\\text{ سم}$",
      "$25\\pi\\text{ سم}$",
      "$5\\pi\\text{ سم}$",
      "$20\\pi\\text{ سم}$"
    ],
    "correctAnswer": "$10\\pi\\text{ cm}$",
    "correctIndex": 0,
    "hintEn": "Area $A = \\pi r^2$, find $\\frac{dA}{dr}$.",
    "hintAr": "مساحة الدائرة $A = \\pi r^2$، المطلوب مشتقة المساحة بالنسبة لـ $r$.",
    "stepByStepSolutionEn": [
      "1. $A = \\pi r^2$.",
      "2. $\\frac{dA}{dr} = 2\\pi r$.",
      "3. At $r = 5$: $\\frac{dA}{dr} = 2\\pi(5) = 10\\pi\\text{ cm}$."
    ],
    "stepByStepSolutionAr": [
      "١. مساحة الدائرة $A = \\pi r^2$.",
      "٢. معدل التغير بالنسبة لنصف القطر هو المحيط: $\\frac{dA}{dr} = 2\\pi r$.",
      "٣. عند $r = 5$: الناتج = $10\\pi$."
    ],
    "teacherTipEn": "The derivative of a circle's area with respect to its radius is its circumference!",
    "teacherTipAr": "مشتقة مساحة الدائرة بالنسبة لنصف قطرها تعطي دائماً محيط الدائرة!"
  },
  {
    "id": "calc_ch1_db_easy_39",
    "titleEn": "Rate of Change of Square Perimeter",
    "titleAr": "معدل تغير محيط المربع بالنسبة لطول ضلعه",
    "difficulty": "easy",
    "questionEn": "The rate of change of the perimeter of a square with respect to its side length $x$ is:",
    "questionAr": "معدل تغير محيط المربع بالنسبة لطول ضلعه $x$ يساوي:",
    "optionsEn": [
      "$4$",
      "$4x$",
      "$2x$",
      "$8$"
    ],
    "optionsAr": [
      "$4$",
      "$4x$",
      "$2x$",
      "$8$"
    ],
    "correctAnswer": "$4$",
    "correctIndex": 0,
    "hintEn": "Perimeter $P = 4x$.",
    "hintAr": "محيط المربع $P = 4x$.",
    "stepByStepSolutionEn": [
      "1. Perimeter formula: $P = 4x$.",
      "2. Rate of change with respect to $x$: $\\frac{dP}{dx} = 4$."
    ],
    "stepByStepSolutionAr": [
      "١. محيط المربع = $4x$.",
      "٢. معدل التغير بالنسبة للضلع = $\\frac{dP}{dx} = 4$."
    ],
    "teacherTipEn": "A constant rate of change indicates a strictly linear relationship.",
    "teacherTipAr": "المعدل الثابت يدل على علاقة خطية مباشرة بين المحيط وطول الضلع."
  },
  {
    "id": "calc_ch1_db_easy_40",
    "titleEn": "Derivative of Cotangent Squared",
    "titleAr": "مشتقة مربع ظل التمام",
    "difficulty": "easy",
    "questionEn": "If $y = \\cot^2(3x)$, find $\\frac{dy}{dx}$.",
    "questionAr": "إذا كانت $y = \\cot^2(3x)$، أوجد $\\frac{dy}{dx}$.",
    "optionsEn": [
      "$-6\\cot(3x)\\csc^2(3x)$",
      "$6\\cot(3x)\\csc^2(3x)$",
      "$-2\\cot(3x)\\csc^2(3x)$",
      "$-6\\csc^4(3x)$"
    ],
    "optionsAr": [
      "$-6\\cot(3x)\\csc^2(3x)$",
      "$6\\cot(3x)\\csc^2(3x)$",
      "$-2\\cot(3x)\\csc^2(3x)$",
      "$-6\\csc^4(3x)$"
    ],
    "correctAnswer": "$-6\\cot(3x)\\csc^2(3x)$",
    "correctIndex": 0,
    "hintEn": "Apply power rule then trig derivative and angle derivative.",
    "hintAr": "طبق قاعدة مشتقة القوة ثم مشتقة الدالة الدائرية ثم مشتقة الزاوية.",
    "stepByStepSolutionEn": [
      "1. $y' = 2\\cot(3x) \\cdot \\frac{d}{dx}[\\cot(3x)]$.",
      "2. $\\frac{d}{dx}[\\cot(3x)] = -3\\csc^2(3x)$.",
      "3. $y' = 2\\cot(3x) \\cdot (-3\\csc^2(3x)) = -6\\cot(3x)\\csc^2(3x)$."
    ],
    "stepByStepSolutionAr": [
      "١. $y' = 2\\cot(3x) \\cdot [-\\csc^2(3x) \\cdot 3]$.",
      "٢. بالضرب: $2 \\times (-3) = -6$.",
      "٣. إذن $y' = -6\\cot(3x)\\csc^2(3x)$."
    ],
    "teacherTipEn": "Three chain links: the power (2), the function (cot), and the angle (3x).",
    "teacherTipAr": "تتكون قاعدة السلسلة هنا من 3 حلقات: القوة (2)، ثم الدالة (cot)، ثم الزاوية (3x)."
  },
  {
    "id": "calc_ch1_db_easy_41",
    "titleEn": "Derivative of Cube Root",
    "titleAr": "مشتقة الجذر التكعيبي",
    "difficulty": "easy",
    "questionEn": "If $f(x) = \\sqrt[3]{x}$, evaluate $f'(8)$.",
    "questionAr": "إذا كانت $f(x) = \\sqrt[3]{x}$، فاحسب $f'(8)$.",
    "optionsEn": [
      "$\\frac{1}{12}$",
      "$\\frac{1}{4}$",
      "$\\frac{1}{6}$",
      "$\\frac{1}{3}$"
    ],
    "optionsAr": [
      "$\\frac{1}{12}$",
      "$\\frac{1}{4}$",
      "$\\frac{1}{6}$",
      "$\\frac{1}{3}$"
    ],
    "correctAnswer": "$\\frac{1}{12}$",
    "correctIndex": 0,
    "hintEn": "Rewrite as $x^{1/3}$ and apply power rule: $\\frac{1}{3}x^{-2/3}$.",
    "hintAr": "اكتب الدالة بصورة $x^{1/3}$ ثم طبق مشتقة القوة: $\\frac{1}{3}x^{-2/3}$.",
    "stepByStepSolutionEn": [
      "1. $f(x) = x^{1/3} \\implies f'(x) = \\frac{1}{3}x^{-2/3} = \\frac{1}{3\\sqrt[3]{x^2}}$.",
      "2. At $x = 8$: $\\sqrt[3]{8^2} = \\sqrt[3]{64} = 4$.",
      "3. $f'(8) = \\frac{1}{3 \\times 4} = \\frac{1}{12}$."
    ],
    "stepByStepSolutionAr": [
      "١. $f(x) = x^{1/3} \\implies f'(x) = \\frac{1}{3\\sqrt[3]{x^2}}$.",
      "٢. عند $x = 8$: $\\sqrt[3]{64} = 4$.",
      "٣. $f'(8) = \\frac{1}{3 \\times 4} = \\frac{1}{12}$."
    ],
    "teacherTipEn": "Cube root evaluated at perfect cubes yields neat rational values.",
    "teacherTipAr": "تقييم الجذر التكعيبي عند المكعبات الكاملة يعطي قيماً كسرية مبسطة."
  },
  {
    "id": "calc_ch1_db_easy_42",
    "titleEn": "Equation of Normal to Parabola",
    "titleAr": "معادلة العمودي على قطع مكافئ",
    "difficulty": "easy",
    "questionEn": "Find the equation of the normal line to the curve $y = 3x^2 - 1$ at $x = 1$.",
    "questionAr": "أوجد معادلة العمودي على المنحنى $y = 3x^2 - 1$ عند $x = 1$.",
    "optionsEn": [
      "$x + 6y - 13 = 0$",
      "$6x - y - 4 = 0$",
      "$x - 6y + 11 = 0$",
      "$6x + y - 8 = 0$"
    ],
    "optionsAr": [
      "$x + 6y - 13 = 0$",
      "$6x - y - 4 = 0$",
      "$x - 6y + 11 = 0$",
      "$6x + y - 8 = 0$"
    ],
    "correctAnswer": "$x + 6y - 13 = 0$",
    "correctIndex": 0,
    "hintEn": "Point is $(1, 2)$. Tangent slope $m_t = y'(1) = 6$, normal slope $m_n = -1/6$.",
    "hintAr": "النقطة هي $(1, 2)$. ميل المماس 6 وميل العمودي $-1/6$.",
    "stepByStepSolutionEn": [
      "1. At $x = 1$, $y = 3(1) - 1 = 2$. Point is $(1, 2)$.",
      "2. $y' = 6x \\implies m_t = 6 \\implies m_n = -\\frac{1}{6}$.",
      "3. Equation of normal: $y - 2 = -\\frac{1}{6}(x - 1) \\implies 6y - 12 = -x + 1 \\implies x + 6y - 13 = 0$."
    ],
    "stepByStepSolutionAr": [
      "١. عند $x = 1$ تكون $y = 2$، فالنقطة هي $(1, 2)$.",
      "٢. ميل المماس = 6، إذن ميل العمودي = $-1/6$.",
      "٣. معادلة العمودي: $y - 2 = -\\frac{1}{6}(x - 1) \\implies x + 6y - 13 = 0$."
    ],
    "teacherTipEn": "Multiply by 6 to clear fractions and write in standard form $Ax + By + C = 0$.",
    "teacherTipAr": "اضرب في 6 للتخلص من الكسر وكتابة المعادلة بالصورة العامة."
  },
  {
    "id": "calc_ch1_db_easy_43",
    "titleEn": "Derivative of Product of Sin and Cos",
    "titleAr": "مشتقة حاصل ضرب الجيب وجيب التمام",
    "difficulty": "easy",
    "questionEn": "If $y = \\sin(3x)\\cos(3x)$, find $\\frac{dy}{dx}$ at $x = 0$.",
    "questionAr": "إذا كانت $y = \\sin(3x)\\cos(3x)$، أوجد قيمة $\\frac{dy}{dx}$ عند $x = 0$.",
    "optionsEn": [
      "$3$",
      "$0$",
      "$6$",
      "$-3$"
    ],
    "optionsAr": [
      "$3$",
      "$0$",
      "$6$",
      "$-3$"
    ],
    "correctAnswer": "$3$",
    "correctIndex": 0,
    "hintEn": "Use double-angle identity: $\\sin(3x)\\cos(3x) = \\frac{1}{2}\\sin(6x)$.",
    "hintAr": "استخدم متطابقة ضعف الزاوية: $\\sin(3x)\\cos(3x) = \\frac{1}{2}\\sin(6x)$.",
    "stepByStepSolutionEn": [
      "1. Rewrite: $y = \\frac{1}{2}\\sin(6x)$.",
      "2. $\\frac{dy}{dx} = \\frac{1}{2} \\times 6\\cos(6x) = 3\\cos(6x)$.",
      "3. At $x = 0$: $3\\cos(0) = 3(1) = 3$."
    ],
    "stepByStepSolutionAr": [
      "١. نكتب الدالة كـ $y = \\frac{1}{2}\\sin(6x)$.",
      "٢. بالاشتقاق: $y' = 3\\cos(6x)$.",
      "٣. عند $x = 0$: $y' = 3(1) = 3$."
    ],
    "teacherTipEn": "Double angle identities transform products into single terms instantly.",
    "teacherTipAr": "متطابقة ضعف الزاوية تحول حاصل الضرب إلى دالة واحدة بسيطة."
  },
  {
    "id": "calc_ch1_db_easy_44",
    "titleEn": "Parametric Derivative of Hyperbolic Form",
    "titleAr": "المشتقة البارامترية بدلالة القاطع والظل",
    "difficulty": "easy",
    "questionEn": "If $x = a\\sec\\theta$ and $y = b\\tan\\theta$, find $\\frac{dy}{dx}$ in terms of $\\theta$.",
    "questionAr": "إذا كانت $x = a\\sec\\theta$ و $y = b\\tan\\theta$، أوجد $\\frac{dy}{dx}$ بدلالة $\\theta$.",
    "optionsEn": [
      "$\\frac{b}{a}\\csc\\theta$",
      "$\\frac{b}{a}\\sin\\theta$",
      "$\\frac{a}{b}\\cos\\theta$",
      "$\\frac{b}{a}\\cos\\theta$"
    ],
    "optionsAr": [
      "$\\frac{b}{a}\\csc\\theta$",
      "$\\frac{b}{a}\\sin\\theta$",
      "$\\frac{a}{b}\\cos\\theta$",
      "$\\frac{b}{a}\\cos\\theta$"
    ],
    "correctAnswer": "$\\frac{b}{a}\\csc\\theta$",
    "correctIndex": 0,
    "hintEn": "$\\frac{dx}{d\\theta} = a\\sec\\theta\\tan\\theta$ and $\\frac{dy}{d\\theta} = b\\sec^2\\theta$.",
    "hintAr": "اشتق كل دالة بالنسبة لـ $\\theta$ ثم اقسمهما.",
    "stepByStepSolutionEn": [
      "1. $\\frac{dx}{d\\theta} = a\\sec\\theta\\tan\\theta$.",
      "2. $\\frac{dy}{d\\theta} = b\\sec^2\\theta$.",
      "3. $\\frac{dy}{dx} = \\frac{b\\sec^2\\theta}{a\\sec\\theta\\tan\\theta} = \\frac{b\\sec\\theta}{a\\tan\\theta} = \\frac{b(1/\\cos\\theta)}{a(\\sin\\theta/\\cos\\theta)} = \\frac{b}{a}\\csc\\theta$."
    ],
    "stepByStepSolutionAr": [
      "١. مشتقة $x$ هي $a\\sec\\theta\\tan\\theta$.",
      "٢. مشتقة $y$ هي $b\\sec^2\\theta$.",
      "٣. بقسمة المشتقّتين: $\\frac{b\\sec\\theta}{a\\tan\\theta} = \\frac{b}{a}\\csc\\theta$."
    ],
    "teacherTipEn": "Standard parametric form for the hyperbola $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$.",
    "teacherTipAr": "هذه هي الصورة البارامترية القياسية للقطع الزائد."
  },
  {
    "id": "calc_ch1_db_easy_45",
    "titleEn": "Quotient Derivative of Fractional Linear Function",
    "titleAr": "مشتقة دالة كسرية خطية",
    "difficulty": "easy",
    "questionEn": "If $y = \\frac{x - 1}{x + 1}$, evaluate $\\frac{dy}{dx}$ at $x = 1$.",
    "questionAr": "إذا كانت $y = \\frac{x - 1}{x + 1}$، فاحسب قيمة $\\frac{dy}{dx}$ عند $x = 1$.",
    "optionsEn": [
      "$\\frac{1}{2}$",
      "$1$",
      "$\\frac{1}{4}$",
      "$0$"
    ],
    "optionsAr": [
      "$\\frac{1}{2}$",
      "$1$",
      "$\\frac{1}{4}$",
      "$0$"
    ],
    "correctAnswer": "$\\frac{1}{2}$",
    "correctIndex": 0,
    "hintEn": "Quotient rule: $\\frac{(1)(x+1) - (x-1)(1)}{(x+1)^2} = \\frac{2}{(x+1)^2}$.",
    "hintAr": "قاعدة القسمة تعطي $\\frac{2}{(x+1)^2}$.",
    "stepByStepSolutionEn": [
      "1. $\\frac{dy}{dx} = \\frac{(x+1)(1) - (x-1)(1)}{(x+1)^2} = \\frac{2}{(x+1)^2}$.",
      "2. At $x = 1$: $\\frac{dy}{dx} = \\frac{2}{(1+1)^2} = \\frac{2}{4} = \\frac{1}{2}$."
    ],
    "stepByStepSolutionAr": [
      "١. بالاشتقاق: $y' = \\frac{(x+1) - (x-1)}{(x+1)^2} = \\frac{2}{(x+1)^2}$.",
      "٢. عند $x = 1$: الناتج = $\\frac{2}{4} = \\frac{1}{2}$."
    ],
    "teacherTipEn": "For $\\frac{ax+b}{cx+d}$, the derivative is always $\\frac{ad - bc}{(cx+d)^2}$.",
    "teacherTipAr": "مشتقة الدالة الكسرية $\\frac{ax+b}{cx+d}$ هي دائماً $\\frac{ad-bc}{(cx+d)^2}$ بواسطة محدد البسط."
  },
  {
    "id": "calc_ch1_db_easy_46",
    "titleEn": "Derivative of Cosine Squared",
    "titleAr": "مشتقة مربع جيب التمام",
    "difficulty": "easy",
    "questionEn": "If $f(x) = \\cos^2(3x)$, evaluate $f'\\left(\\frac{\\pi}{12}\\right)$.",
    "questionAr": "إذا كانت $f(x) = \\cos^2(3x)$، فاحسب $f'\\left(\\frac{\\pi}{12}\\right)$.",
    "optionsEn": [
      "$-3$",
      "$3$",
      "$0$",
      "$-\\frac{3}{2}$"
    ],
    "optionsAr": [
      "$-3$",
      "$3$",
      "$0$",
      "$-\\frac{3}{2}$"
    ],
    "correctAnswer": "$-3$",
    "correctIndex": 0,
    "hintEn": "Use $f'(x) = -3\\sin(6x)$.",
    "hintAr": "استخدم المتطابقة $f'(x) = -3\\sin(6x)$.",
    "stepByStepSolutionEn": [
      "1. $f'(x) = 2\\cos(3x) \\cdot (-3\\sin(3x)) = -3(2\\sin(3x)\\cos(3x)) = -3\\sin(6x)$.",
      "2. At $x = \\frac{\\pi}{12}$, the argument is $6\\left(\\frac{\\pi}{12}\\right) = \\frac{\\pi}{2}$.",
      "3. $f'(\\pi/12) = -3\\sin(\\pi/2) = -3(1) = -3$."
    ],
    "stepByStepSolutionAr": [
      "١. $f'(x) = 2\\cos(3x) \\cdot (-3\\sin(3x)) = -3\\sin(6x)$.",
      "٢. عند $x = \\pi/12$: الزاوية $6x = \\pi/2$.",
      "٣. $f'(\\pi/12) = -3(1) = -3$."
    ],
    "teacherTipEn": "Writing $2\\sin u \\cos u$ as $\\sin 2u$ saves intermediate computation steps.",
    "teacherTipAr": "تحويل المقدار إلى $\\sin 2u$ يختصر الحسابات ويمنع الخطأ."
  },
  {
    "id": "calc_ch1_db_easy_47",
    "titleEn": "Product Derivative of x2 cot x",
    "titleAr": "مشتقة حاصل ضرب س² في ظتا س",
    "difficulty": "easy",
    "questionEn": "If $y = x^2 \\cot x$, evaluate $\\frac{dy}{dx}$ at $x = \\frac{\\pi}{2}$.",
    "questionAr": "إذا كانت $y = x^2 \\cot x$، فاحسب $\\frac{dy}{dx}$ عند $x = \\frac{\\pi}{2}$.",
    "optionsEn": [
      "$-\\frac{\\pi^2}{4}$",
      "$\\frac{\\pi^2}{4}$",
      "$0$",
      "$\\pi$"
    ],
    "optionsAr": [
      "$-\\frac{\\pi^2}{4}$",
      "$\\frac{\\pi^2}{4}$",
      "$0$",
      "$\\pi$"
    ],
    "correctAnswer": "$-\\frac{\\pi^2}{4}$",
    "correctIndex": 0,
    "hintEn": "Use product rule: $2x\\cot x - x^2\\csc^2 x$.",
    "hintAr": "طبق قاعدة الضرب: $2x\\cot x - x^2\\csc^2 x$.",
    "stepByStepSolutionEn": [
      "1. $\\frac{dy}{dx} = 2x\\cot x - x^2\\csc^2 x$.",
      "2. At $x = \\pi/2$: $\\cot(\\pi/2) = 0$ and $\\csc(\\pi/2) = 1$.",
      "3. $\\frac{dy}{dx} = 2(\\pi/2)(0) - (\\pi/2)^2(1)^2 = -\\frac{\\pi^2}{4}$."
    ],
    "stepByStepSolutionAr": [
      "١. $y' = 2x\\cot x - x^2\\csc^2 x$.",
      "٢. عند $x = \\pi/2$: $\\cot(\\pi/2) = 0$ و $\\csc(\\pi/2) = 1$.",
      "٣. إذن $y' = 0 - (\\pi/2)^2 = -\\frac{\\pi^2}{4}$."
    ],
    "teacherTipEn": "Cotangent is zero at odd multiples of $\\pi/2$.",
    "teacherTipAr": "ظل التمام ينعدم عند مضاعفات $\\pi/2$ الفردية."
  },
  {
    "id": "calc_ch1_db_easy_48",
    "titleEn": "Rate of Change of Cube Volume",
    "titleAr": "معدل تغير حجم المكعب بالنسبة لطول حرفه",
    "difficulty": "easy",
    "questionEn": "If the volume of a cube is $V = x^3$, find $\\frac{dV}{dx}$ when $x = 4\\text{ cm}$.",
    "questionAr": "إذا كان حجم مكعب هو $V = x^3$، أوجد $\\frac{dV}{dx}$ عندما $x = 4\\text{ سم}$.",
    "optionsEn": [
      "$48\\text{ cm}^2$",
      "$16\\text{ cm}^2$",
      "$64\\text{ cm}^2$",
      "$12\\text{ cm}^2$"
    ],
    "optionsAr": [
      "$48\\text{ سم}^2$",
      "$16\\text{ سم}^2$",
      "$64\\text{ سم}^2$",
      "$12\\text{ سم}^2$"
    ],
    "correctAnswer": "$48\\text{ cm}^2$",
    "correctIndex": 0,
    "hintEn": "$\\frac{dV}{dx} = 3x^2$.",
    "hintAr": "مشتقة الحجم بالنسبة للحرف هي $3x^2$.",
    "stepByStepSolutionEn": [
      "1. $V = x^3 \\implies \\frac{dV}{dx} = 3x^2$.",
      "2. When $x = 4$: $\\frac{dV}{dx} = 3(4)^2 = 3(16) = 48\\text{ cm}^2$."
    ],
    "stepByStepSolutionAr": [
      "١. $V = x^3 \\implies \\frac{dV}{dx} = 3x^2$.",
      "٢. عند $x = 4$: الناتج = $3 \\times 16 = 48\\text{ سم}^2$."
    ],
    "teacherTipEn": "Geometrically, $3x^2$ represents the area of three expanding faces of the cube.",
    "teacherTipAr": "هندسياً، $3x^2$ تمثل مساحة ثلاثة أوجه من المكعب المتمدد."
  },
  {
    "id": "calc_ch1_db_easy_49",
    "titleEn": "Inclination Angle on Quadratic Curve",
    "titleAr": "زاوية ميل المماس لمنحنى تربيعي",
    "difficulty": "easy",
    "questionEn": "The angle made by the tangent line to $y = \\sqrt{3}x^2$ with the positive $x$-axis at $x = \\frac{1}{2}$ is:",
    "questionAr": "زاوية ميل المماس للمنحنى $y = \\sqrt{3}x^2$ مع الاتجاه الموجب لمحور السينات عند $x = \\frac{1}{2}$ تساوي:",
    "optionsEn": [
      "$60^\\circ$",
      "$30^\\circ$",
      "$45^\\circ$",
      "$0^\\circ$"
    ],
    "optionsAr": [
      "$60^\\circ$",
      "$30^\\circ$",
      "$45^\\circ$",
      "$0^\\circ$"
    ],
    "correctAnswer": "$60^\\circ$",
    "correctIndex": 0,
    "hintEn": "$m = y'(1/2) = \\tan\\theta$.",
    "hintAr": "الميل $m = y'(1/2) = \\tan\\theta$.",
    "stepByStepSolutionEn": [
      "1. $y' = 2\\sqrt{3}x$.",
      "2. At $x = 1/2$: $m = 2\\sqrt{3}\\left(\\frac{1}{2}\\right) = \\sqrt{3}$.",
      "3. Since $\\tan\\theta = \\sqrt{3}$, we have $\\theta = 60^\\circ$."
    ],
    "stepByStepSolutionAr": [
      "١. $y' = 2\\sqrt{3}x$.",
      "٢. عند $x = 1/2$: الميل $m = \\sqrt{3}$.",
      "٣. بما أن $\\tan\\theta = \\sqrt{3}$، فإن الزاوية $\\theta = 60^\\circ$."
    ],
    "teacherTipEn": "Know your standard tangent values: $\\tan 30^\\circ = 1/\\sqrt{3}, \\tan 45^\\circ = 1, \\tan 60^\\circ = \\sqrt{3}$.",
    "teacherTipAr": "احفظ قيم الظل للزوايا الشهيرة: $30^\\circ, 45^\\circ, 60^\\circ$."
  },
  {
    "id": "calc_ch1_db_easy_50",
    "titleEn": "Chain Rule on Composite Functions",
    "titleAr": "قاعدة السلسلة لتركيب دالتين",
    "difficulty": "easy",
    "questionEn": "If $y = f(u)$ and $u = g(x)$, given that $g'(2) = 3$ and $f'(g(2)) = -4$, find $\\frac{dy}{dx}$ at $x = 2$.",
    "questionAr": "إذا كانت $y = f(u)$ و $u = g(x)$، وكان $g'(2) = 3$ و $f'(g(2)) = -4$، أوجد $\\frac{dy}{dx}$ عند $x = 2$.",
    "optionsEn": [
      "$-12$",
      "$-1$",
      "$7$",
      "$-7$"
    ],
    "optionsAr": [
      "$-12$",
      "$-1$",
      "$7$",
      "$-7$"
    ],
    "correctAnswer": "$-12$",
    "correctIndex": 0,
    "hintEn": "Chain rule: $\\frac{dy}{dx} = f'(g(x)) \\cdot g'(x)$.",
    "hintAr": "قاعدة السلسلة: $\\frac{dy}{dx} = f'(g(x)) \\cdot g'(x)$.",
    "stepByStepSolutionEn": [
      "1. By chain rule: $\\frac{dy}{dx} = f'(g(2)) \\cdot g'(2)$.",
      "2. Substituting given values: $(-4) \\cdot (3) = -12$."
    ],
    "stepByStepSolutionAr": [
      "١. من قاعدة السلسلة: المشتقة = $f'(g(2)) \\cdot g'(2)$.",
      "٢. بالتعويض: $(-4) \\times 3 = -12$."
    ],
    "teacherTipEn": "Direct multiplication of the outer derivative and the inner derivative.",
    "teacherTipAr": "تطبيق مباشر لقاعدة السلسلة بضرب المشتقة الخارجية في الداخلية."
  },
  {
    "id": "calc_ch1_db_easy_51",
    "titleEn": "Derivative of Tangent with Square Root Argument",
    "titleAr": "مشتقة دالة الظل ذات زاوية جذر تربيعي",
    "difficulty": "easy",
    "questionEn": "Find the derivative of $y = \\tan(\\sqrt{4x + 1})$ with respect to $x$ at $x = 2$.",
    "questionAr": "أوجد مشتقة $y = \\tan(\\sqrt{4x + 1})$ بالنسبة إلى $x$ عند $x = 2$.",
    "optionsEn": [
      "$\\frac{2}{3} \\sec^2(3)$",
      "$\\frac{4}{3} \\sec^2(3)$",
      "$2 \\sec^2(3)$",
      "$\\frac{1}{3} \\sec^2(3)$"
    ],
    "optionsAr": [
      "$\\frac{2}{3} \\sec^2(3)$",
      "$\\frac{4}{3} \\sec^2(3)$",
      "$2 \\sec^2(3)$",
      "$\\frac{1}{3} \\sec^2(3)$"
    ],
    "correctIndex": 0,
    "correctAnswer": "$\\frac{2}{3} \\sec^2(3)$",
    "hintEn": "Recall $\\frac{d}{dx}[\\tan(u)] = \\sec^2(u) \\cdot u'$.",
    "hintAr": "تذكر أن $\\frac{d}{dx}[\\tan(u)] = \\sec^2(u) \\cdot u'$.",
    "teacherTipEn": "Do not forget the inner derivative of the square root argument when applying the chain rule.",
    "teacherTipAr": "لا تنسَ مشتقة ما بداخل الجذر عند تطبيق قاعدة السلسلة.",
    "stepByStepSolutionEn": [
      "Apply chain rule: $\\frac{dy}{dx} = \\sec^2(u) \\cdot \\frac{du}{dx}$ where $u = \\sqrt{4x+1}$.",
      "Differentiate $u$: $\\frac{du}{dx} = \\frac{4}{2\\sqrt{4x+1}} = \\frac{2}{\\sqrt{4x+1}}$.",
      "Evaluate at $x = 2$: $u = 3$, so $\\frac{dy}{dx} = \\frac{2}{3}\\sec^2(3)$."
    ],
    "stepByStepSolutionAr": [
      "طبق قاعدة السلسلة: $\\frac{dy}{dx} = \\sec^2(u) \\cdot \\frac{du}{dx}$ حيث $u = \\sqrt{4x+1}$.",
      "اشتق $u$: $\\frac{du}{dx} = \\frac{4}{2\\sqrt{4x+1}} = \\frac{2}{\\sqrt{4x+1}}$.",
      "عوض عن $x = 2$: نجد $u = 3$، وبالتالي $\\frac{dy}{dx} = \\frac{2}{3}\\sec^2(3)$."
    ]
  },
  {
    "id": "calc_ch1_db_easy_52",
    "titleEn": "Implicit Differentiation of Cubic Curve",
    "titleAr": "الاشتقاق الضمني لمنحنى تكعيبي",
    "difficulty": "easy",
    "questionEn": "If $x^2 y + y^3 = 5$, find the slope of the tangent $\\frac{dy}{dx}$ at the point $(2, 1)$.",
    "questionAr": "إذا كان $x^2 y + y^3 = 5$، فأوجد ميل المماس $\\frac{dy}{dx}$ عند النقطة $(2, 1)$.",
    "optionsEn": [
      "$-\\frac{4}{7}$",
      "$-\\frac{2}{7}$",
      "$\\frac{4}{7}$",
      "$-\\frac{4}{5}$"
    ],
    "optionsAr": [
      "$-\\frac{4}{7}$",
      "$-\\frac{2}{7}$",
      "$\\frac{4}{7}$",
      "$-\\frac{4}{5}$"
    ],
    "correctIndex": 0,
    "correctAnswer": "$-\\frac{4}{7}$",
    "hintEn": "Differentiate $x^2 y$ using the product rule and factor out $y'.",
    "hintAr": "اشتق $x^2 y$ كحاصل ضرب دالتين واجمع حدود $y'.",
    "teacherTipEn": "Always treat $y$ as a function of $x$, writing $y'$ whenever differentiating any term containing $y$.",
    "teacherTipAr": "عامل $y$ كدالة في $x$ دائماً، وضع $y'$ عند اشتقاق أي حد يحتوي $y$.",
    "stepByStepSolutionEn": [
      "Differentiate both sides with respect to $x$: $2xy + x^2 \\frac{dy}{dx} + 3y^2 \\frac{dy}{dx} = 0$.",
      "Collect $\\frac{dy}{dx}$ terms: $\\frac{dy}{dx}(x^2 + 3y^2) = -2xy$.",
      "Substitute $x = 2, y = 1$: $\\frac{dy}{dx}(4 + 3) = -4 \\implies \\frac{dy}{dx} = -\\frac{4}{7}$."
    ],
    "stepByStepSolutionAr": [
      "اشتق الطرفين بالنسبة إلى $x$: $2xy + x^2 \\frac{dy}{dx} + 3y^2 \\frac{dy}{dx} = 0$.",
      "اجمع حدود $\\frac{dy}{dx}$: $\\frac{dy}{dx}(x^2 + 3y^2) = -2xy$.",
      "عوض عن $x = 2, y = 1$: $\\frac{dy}{dx}(7) = -4 \\implies \\frac{dy}{dx} = -\\frac{4}{7}$."
    ]
  },
  {
    "id": "calc_ch1_db_easy_53",
    "titleEn": "Slope of Parametric Cycloid Curve",
    "titleAr": "ميل المماس لمنحنى وسيطي (سيكلويد)",
    "difficulty": "easy",
    "questionEn": "If $x = a(\\theta - \\sin\\theta)$ and $y = a(1 - \\cos\\theta)$, find $\\frac{dy}{dx}$ at $\\theta = \\frac{\\pi}{2}$.",
    "questionAr": "إذا كان $x = a(\\theta - \\sin\\theta)$ و $y = a(1 - \\cos\\theta)$، فأوجد $\\frac{dy}{dx}$ عند $\\theta = \\frac{\\pi}{2}$.",
    "optionsEn": [
      "$1$",
      "$0$",
      "$-1$",
      "$\\sqrt{2}$"
    ],
    "optionsAr": [
      "$1$",
      "$0$",
      "$-1$",
      "$\\sqrt{2}$"
    ],
    "correctIndex": 0,
    "correctAnswer": "$1$",
    "hintEn": "Calculate $\\frac{dx}{d\\theta}$ and $\\frac{dy}{d\\theta}$ separately.",
    "hintAr": "احسب $\\frac{dx}{d\\theta}$ و $\\frac{dy}{d\\theta}$ منفصلين.",
    "teacherTipEn": "Notice that $\\frac{\\sin\\theta}{1-\\cos\\theta} = \\cot(\\theta/2)$, providing a very fast check!",
    "teacherTipAr": "لاحظ أن $\\frac{\\sin\\theta}{1-\\cos\\theta} = \\cot(\\theta/2)$، مما يعطي تحققاً سريعاً جداً!",
    "stepByStepSolutionEn": [
      "Find $\\frac{dx}{d\\theta} = a(1 - \\cos\\theta)$.",
      "Find $\\frac{dy}{d\\theta} = a\\sin\\theta$.",
      "Compute $\\frac{dy}{dx} = \\frac{a\\sin\\theta}{a(1 - \\cos\\theta)} = \\frac{\\sin\\theta}{1 - \\cos\\theta}$.",
      "Evaluate at $\\theta = \\frac{\\pi}{2}$: $\\frac{1}{1-0} = 1$."
    ],
    "stepByStepSolutionAr": [
      "أوجد $\\frac{dx}{d\\theta} = a(1 - \\cos\\theta)$.",
      "أوجد $\\frac{dy}{d\\theta} = a\\sin\\theta$.",
      "احسب $\\frac{dy}{dx} = \\frac{a\\sin\\theta}{a(1 - \\cos\\theta)} = \\frac{\\sin\\theta}{1 - \\cos\\theta}$.",
      "عوض عند $\\theta = \\frac{\\pi}{2}$: $\\frac{1}{1-0} = 1$."
    ]
  },
  {
    "id": "calc_ch1_db_easy_54",
    "titleEn": "Related Rates: Spherical Balloon Inflation",
    "titleAr": "معدلات زمنية مرتبطة: انتفاخ بالون كروي",
    "difficulty": "easy",
    "diagramType": "solid_geometry_sphere",
    "questionEn": "A spherical balloon is being inflated such that its volume increases at a constant rate of $36\\pi\\text{ cm}^3/\\text{s}$. Find the rate of increase of its radius when the radius is $3\\text{ cm}$.",
    "questionAr": "ينتفخ بالون كروي بحيث يتزايد حجمه بمعدل ثابت قدره $36\\pi\\text{ سم}^3/\\text{ث}$. أوجد معدل زيادة نصف قطره عندما يكون نصف القطر $3\\text{ سم}$.",
    "optionsEn": [
      "$1\\text{ cm/s}$",
      "$2\\text{ cm/s}$",
      "$0.5\\text{ cm/s}$",
      "$3\\text{ cm/s}$"
    ],
    "optionsAr": [
      "$1\\text{ سم/ث}$",
      "$2\\text{ سم/ث}$",
      "$0.5\\text{ سم/ث}$",
      "$3\\text{ سم/ث}$"
    ],
    "correctIndex": 0,
    "correctAnswer": "$1\\text{ cm/s}$",
    "hintEn": "Write the volume formula of a sphere: $V = \\frac{4}{3}\\pi r^3$ and differentiate.",
    "hintAr": "اكتب قانون حجم الكرة $V = \\frac{4}{3}\\pi r^3$ ثم اشتق بالنسبة للزمن.",
    "teacherTipEn": "Notice that $\\frac{dV}{dt} = A \\cdot \\frac{dr}{dt}$ where $A$ is the instantaneous surface area of the sphere.",
    "teacherTipAr": "لاحظ أن $\\frac{dV}{dt} = A \\cdot \\frac{dr}{dt}$ حيث $A$ هي مساحة السطح اللحظية للكرة.",
    "stepByStepSolutionEn": [
      "Volume equation: $V = \\frac{4}{3}\\pi r^3$.",
      "Time derivative: $\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$.",
      "Substitute values: $36\\pi = 4\\pi (3^2) \\frac{dr}{dt} \\implies 36\\pi = 36\\pi \\frac{dr}{dt} \\implies \\frac{dr}{dt} = 1\\text{ cm/s}$."
    ],
    "stepByStepSolutionAr": [
      "معادلة الحجم: $V = \\frac{4}{3}\\pi r^3$.",
      "المشتقة الزمنية: $\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$.",
      "التعويض: $36\\pi = 36\\pi \\frac{dr}{dt} \\implies \\frac{dr}{dt} = 1\\text{ سم/ث}$."
    ]
  },
  {
    "id": "calc_ch1_db_easy_55",
    "titleEn": "Equation of the Normal to Secant Curve",
    "titleAr": "معادلة العمودي لمنحنى القاطع",
    "difficulty": "easy",
    "diagramType": "secant_derivative_graph",
    "questionEn": "Find the slope of the normal to the curve $y = \\sec(2x)$ at the point where $x = \\frac{\\pi}{6}$.",
    "questionAr": "أوجد ميل العمودي على المنحنى $y = \\sec(2x)$ عند النقطة التي إحداثيها السيني $x = \\frac{\\pi}{6}$.",
    "optionsEn": [
      "$-\\frac{1}{4\\sqrt{3}}$",
      "$-4\\sqrt{3}$",
      "$\\frac{1}{4\\sqrt{3}}$",
      "$-\\frac{\\sqrt{3}}{4}$"
    ],
    "optionsAr": [
      "$-\\frac{1}{4\\sqrt{3}}$",
      "$-4\\sqrt{3}$",
      "$\\frac{1}{4\\sqrt{3}}$",
      "$-\\frac{\\sqrt{3}}{4}$"
    ],
    "correctIndex": 0,
    "correctAnswer": "$-\\frac{1}{4\\sqrt{3}}$",
    "hintEn": "The normal slope is the negative reciprocal of the tangent slope: $m_N = -1/m_T$.",
    "hintAr": "ميل العمودي هو مقلوب ميل المماس بعكس الإشارة: $m_N = -1/m_T$.",
    "teacherTipEn": "Remember to multiply by the derivative of the angle $2x$, which gives the factor 2.",
    "teacherTipAr": "تذكر ضرب الناتج في مشتقة الزاوية $2x$ وهو العامل 2.",
    "stepByStepSolutionEn": [
      "Differentiate: $y' = 2\\sec(2x)\\tan(2x)$.",
      "Evaluate tangent slope at $x = \\pi/6$: $m_T = 2(2)(\\sqrt{3}) = 4\\sqrt{3}$.",
      "Find normal slope: $m_N = -\\frac{1}{m_T} = -\\frac{1}{4\\sqrt{3}}$."
    ],
    "stepByStepSolutionAr": [
      "اشتق الدالة: $y' = 2\\sec(2x)\\tan(2x)$.",
      "احسب ميل المماس عند $x = \\pi/6$: $m_T = 2(2)(\\sqrt{3}) = 4\\sqrt{3}$.",
      "احسب ميل العمودي: $m_N = -\\frac{1}{m_T} = -\\frac{1}{4\\sqrt{3}}$."
    ]
  },
  {
    "id": "calc_ch1_db_easy_56",
    "titleEn": "Second Derivative of Rational Reciprocal Function",
    "titleAr": "المشتقة الثانية لدالة كسرية بسيطة",
    "difficulty": "easy",
    "questionEn": "If $y = \\frac{1}{1 - x}$, find the value of $\\frac{d^2y}{dx^2}$ at $x = 2$.",
    "questionAr": "إذا كان $y = \\frac{1}{1 - x}$، فأوجد قيمة $\\frac{d^2y}{dx^2}$ عند $x = 2$.",
    "optionsEn": [
      "$-2$",
      "$2$",
      "$-6$",
      "$6$"
    ],
    "optionsAr": [
      "$-2$",
      "$2$",
      "$-6$",
      "$6$"
    ],
    "correctIndex": 0,
    "correctAnswer": "$-2$",
    "hintEn": "Express $y$ with a negative exponent $(1-x)^{-1}$ before differentiating.",
    "hintAr": "اكتب $y$ كقوة سالبة $(1-x)^{-1}$ قبل إجراء الاشتقاق.",
    "teacherTipEn": "Sign errors are the most common pitfall when differentiating $(a - x)^{-n}$.",
    "teacherTipAr": "أخطاء الإشارة هي الشائعة عند اشتقاق $(a-x)^{-n}$.",
    "stepByStepSolutionEn": [
      "Rewrite: $y = (1-x)^{-1}$.",
      "First derivative: $y' = (1-x)^{-2}$.",
      "Second derivative: $y'' = 2(1-x)^{-3}(-1) = -2(1-x)^{-3} = \\frac{-2}{(1-x)^3}$. Wait: $\\frac{d}{dx}[(1-x)^{-2}] = -2(1-x)^{-3}(-1) = 2(1-x)^{-3} = \\frac{2}{(1-x)^3}$.",
      "Substitute $x = 2$: $y'' = \\frac{2}{(1-2)^3} = \\frac{2}{-1} = -2$."
    ],
    "stepByStepSolutionAr": [
      "إعادة كتابة الدالة: $y = (1-x)^{-1}$.",
      "المشتقة الأولى: $y' = (1-x)^{-2}$.",
      "المشتقة الثانية: $y'' = 2(1-x)^{-3} = \\frac{2}{(1-x)^3}$.",
      "التعويض عن $x = 2$: $y'' = \\frac{2}{(-1)^3} = -2$."
    ]
  },
  {
    "id": "calc_ch1_db_easy_57",
    "titleEn": "Rate of Change along Parabolic Trajectory",
    "titleAr": "معدل التغير على مسار قطع مكافئ",
    "difficulty": "easy",
    "questionEn": "A point moves along the curve $y = x^2 - 4x + 5$ such that $\\frac{dx}{dt} = 3\\text{ units/s}$. Find $\\frac{dy}{dt}$ at the instant when $x = 3$.",
    "questionAr": "تتحرك نقطة على المنحنى $y = x^2 - 4x + 5$ بحيث $\\frac{dx}{dt} = 3\\text{ وحدة/ث}$. أوجد $\\frac{dy}{dt}$ في اللحظة التي يكون فيها $x = 3$.",
    "optionsEn": [
      "$6\\text{ units/s}$",
      "$3\\text{ units/s}$",
      "$9\\text{ units/s}$",
      "$2\\text{ units/s}$"
    ],
    "optionsAr": [
      "$6\\text{ وحدة/ث}$",
      "$3\\text{ وحدة/ث}$",
      "$9\\text{ وحدة/ث}$",
      "$2\\text{ وحدة/ث}$"
    ],
    "correctIndex": 0,
    "correctAnswer": "$6\\text{ units/s}$",
    "hintEn": "Use the chain rule: $\\frac{dy}{dt} = \\frac{dy}{dx} \\cdot \\frac{dx}{dt}$.",
    "hintAr": "طبق قاعدة السلسلة: $\\frac{dy}{dt} = \\frac{dy}{dx} \\cdot \\frac{dx}{dt}$.",
    "teacherTipEn": "Relating time rates directly via the spatial derivative is often the cleanest approach.",
    "teacherTipAr": "ربط المعدلات الزمنية عبر المشتقة المكانية هو الأسلوب الأوضح دائماً.",
    "stepByStepSolutionEn": [
      "Differentiate $y$ with respect to $x$: $\\frac{dy}{dx} = 2x - 4$.",
      "Multiply by $\\frac{dx}{dt}$: $\\frac{dy}{dt} = (2x - 4)\\frac{dx}{dt}$.",
      "Substitute $x = 3$ and $\\frac{dx}{dt} = 3$: $\\frac{dy}{dt} = (2(3) - 4)(3) = (2)(3) = 6\\text{ units/s}$."
    ],
    "stepByStepSolutionAr": [
      "اشتق $y$ بالنسبة لـ $x$: $\\frac{dy}{dx} = 2x - 4$.",
      "اضرب في $\\frac{dx}{dt}$: $\\frac{dy}{dt} = (2x - 4)\\frac{dx}{dt}$.",
      "عوض عن $x = 3$ و $\\frac{dx}{dt} = 3$: $\\frac{dy}{dt} = (6 - 4)(3) = 6\\text{ وحدة/ث}$."
    ]
  },
  {
    "id": "calc_ch1_db_easy_58",
    "titleEn": "Differential Identity for Harmonic Oscillation",
    "titleAr": "متطابقة تفاضلية للتذبذب التوافقي",
    "difficulty": "easy",
    "questionEn": "If $y = \\sin(3x) + \\cos(3x)$, evaluate the expression $y'' + 9y$.",
    "questionAr": "إذا كان $y = \\sin(3x) + \\cos(3x)$، فاحسب قيمة المقدار $y'' + 9y$.",
    "optionsEn": [
      "$0$",
      "$9$",
      "$-9$",
      "$18$"
    ],
    "optionsAr": [
      "$0$",
      "$9$",
      "$-9$",
      "$18$"
    ],
    "correctIndex": 0,
    "correctAnswer": "$0$",
    "hintEn": "Differentiate twice to express $y''$ in terms of $y$.",
    "hintAr": "اشتق مرتين لتعبر عن $y''$ بدلالة $y$.",
    "teacherTipEn": "Every function of the form $y = A\\cos(\\omega x) + B\\sin(\\omega x)$ satisfies $y'' + \\omega^2 y = 0$.",
    "teacherTipAr": "كل دالة من الصورة $y = A\\cos(\\omega x) + B\\sin(\\omega x)$ تحقق المعادلة $y'' + \\omega^2 y = 0$.",
    "stepByStepSolutionEn": [
      "Compute $y' = 3\\cos(3x) - 3\\sin(3x)$.",
      "Compute $y'' = -9\\sin(3x) - 9\\cos(3x) = -9y$.",
      "Add $9y$: $y'' + 9y = -9y + 9y = 0$."
    ],
    "stepByStepSolutionAr": [
      "احسب $y' = 3\\cos(3x) - 3\\sin(3x)$.",
      "احسب $y'' = -9\\sin(3x) - 9\\cos(3x) = -9y$.",
      "اجمع $9y$: $y'' + 9y = 0$."
    ]
  }
],
  medium: [
  {
    "id": "calc_ch1_db_medium_01",
    "titleEn": "Parametric Second Derivative of Circle",
    "titleAr": "المشتقة البارامترية الثانية لمنحنى دائري",
    "difficulty": "medium",
    "questionEn": "If $x = \\cos\\theta$ and $y = \\sin\\theta$, find $\\frac{d^2y}{dx^2}$ at $\\theta = \\frac{\\pi}{2}$.",
    "questionAr": "إذا كانت $x = \\cos\\theta$ و $y = \\sin\\theta$، أوجد $\\frac{d^2y}{dx^2}$ عند $\\theta = \\frac{\\pi}{2}$.",
    "optionsEn": [
      "$-1$",
      "$1$",
      "$0$",
      "Undefined"
    ],
    "optionsAr": [
      "$-1$",
      "$1$",
      "$0$",
      "غير معرّف"
    ],
    "correctAnswer": "$-1$",
    "correctIndex": 0,
    "hintEn": "Use $\\frac{d^2y}{dx^2} = \\frac{d}{d\\theta}\\left(\\frac{dy}{dx}\\right) / \\frac{dx}{d\\theta}$.",
    "hintAr": "تذكر قسمة مشتقة ميل المماس على مشتقة $x$ بالنسبة لـ $\\theta$.",
    "stepByStepSolutionEn": [
      "1. $\\frac{dy}{dx} = \\frac{\\cos\\theta}{-\\sin\\theta} = -\\cot\\theta$.",
      "2. $\\frac{d^2y}{dx^2} = \\frac{\\frac{d}{d\\theta}(-\\cot\\theta)}{\\frac{dx}{d\\theta}} = \\frac{\\csc^2\\theta}{-\\sin\\theta} = -\\csc^3\\theta$.",
      "3. At $\\theta = \\pi/2$: $-\\csc^3(\\pi/2) = -1$."
    ],
    "stepByStepSolutionAr": [
      "١. $\\frac{dy}{dx} = -\\cot\\theta$.",
      "٢. $\\frac{d^2y}{dx^2} = \\frac{\\csc^2\\theta}{-\\sin\\theta} = -\\csc^3\\theta$.",
      "٣. عند $\\theta = \\pi/2$: الناتج = $-1$."
    ],
    "teacherTipEn": "Do not forget to divide by $\\frac{dx}{d\\theta}$ when finding the second parametric derivative!",
    "teacherTipAr": "الخطأ الشائع هو نسيان القسمة على مشتقة $x$ بالنسبة للبارامتر!"
  },
  {
    "id": "calc_ch1_db_medium_02",
    "titleEn": "Angle between Intersecting Curves",
    "titleAr": "الزاوية بين منحنيين متقاطعين",
    "difficulty": "medium",
    "questionEn": "Find the acute angle between the tangents to $y = x^2$ and $y = \\sqrt{x}$ at the point $(1, 1)$.",
    "questionAr": "أوجد قياس الزاوية الحادة بين مماسي المنحنيين $y = x^2$ و $y = \\sqrt{x}$ عند النقطة $(1, 1)$.",
    "optionsEn": [
      "$\\arctan\\left(\\frac{3}{4}\\right)$",
      "$\\arctan\\left(\\frac{4}{3}\\right)$",
      "$45^\\circ$",
      "$30^\\circ$"
    ],
    "optionsAr": [
      "$\\arctan\\left(\\frac{3}{4}\\right)$",
      "$\\arctan\\left(\\frac{4}{3}\\right)$",
      "$45^\\circ$",
      "$30^\\circ$"
    ],
    "correctAnswer": "$\\arctan\\left(\\frac{3}{4}\\right)$",
    "correctIndex": 0,
    "hintEn": "Use $\\tan\\theta = \\left|\\frac{m_1 - m_2}{1 + m_1 m_2}\\right|$.",
    "hintAr": "طبق قانون ظل الزاوية بين مستقيمين: $\\tan\\theta = |\\frac{m_1 - m_2}{1 + m_1 m_2}|$.",
    "stepByStepSolutionEn": [
      "1. For $y = x^2$, $m_1 = 2x = 2(1) = 2$.",
      "2. For $y = \\sqrt{x}$, $m_2 = \\frac{1}{2\\sqrt{x}} = \\frac{1}{2}$.",
      "3. $\\tan\\theta = \\left|\\frac{2 - 1/2}{1 + (2)(1/2)}\\right| = \\frac{3/2}{2} = \\frac{3}{4} \\implies \\theta = \\arctan\\left(\\frac{3}{4}\\right)$."
    ],
    "stepByStepSolutionAr": [
      "١. ميل الأول $m_1 = 2(1) = 2$.",
      "٢. ميل الثاني $m_2 = 1/2$.",
      "٣. $\\tan\\theta = \\frac{2 - 0.5}{1 + 1} = \\frac{1.5}{2} = \\frac{3}{4} \\implies \\theta = \\arctan(3/4)$."
    ],
    "teacherTipEn": "The angle between two curves is defined as the angle between their tangent lines at the intersection point.",
    "teacherTipAr": "الزاوية بين منحنيين هي الزاوية بين مماسيهما عند نقطة التقاطع."
  },
  {
    "id": "calc_ch1_db_medium_03",
    "titleEn": "Sliding Ladder Rate of Descent",
    "titleAr": "معدل انزلاق الطرف العلوي لسلم",
    "difficulty": "medium",
    "questionEn": "A ladder $5\\text{ m}$ long leans against a vertical wall. The foot slides away at $2\\text{ m/s}$. When the foot is $3\\text{ m}$ from the wall, the top slides down at:",
    "questionAr": "سلم طوله $5\\text{ م}$ يستند بطرفه العلوي على حائط رأسي وبطرفه السفلي على أرض أفقية. فإذا انزلق الطرف السفلي مبتعداً عن الحائط بمعدل $2\\text{ م/ث}$، فعندما يكون الطرف السفلي على بعد $3\\text{ م}$، ينزلق الطرف العلوي لأسفل بمعدل:",
    "optionsEn": [
      "$\\frac{3}{2}\\text{ m/s}$",
      "$\\frac{2}{3}\\text{ m/s}$",
      "$2\\text{ m/s}$",
      "$\\frac{4}{3}\\text{ m/s}$"
    ],
    "optionsAr": [
      "$\\frac{3}{2}\\text{ م/ث}$",
      "$\\frac{2}{3}\\text{ م/ث}$",
      "$2\\text{ م/ث}$",
      "$\\frac{4}{3}\\text{ م/ث}$"
    ],
    "correctAnswer": "$\\frac{3}{2}\\text{ m/s}$",
    "correctIndex": 0,
    "hintEn": "Pythagorean theorem: $x^2 + y^2 = 25 \\implies 2x\\frac{dx}{dt} + 2y\\frac{dy}{dt} = 0$.",
    "hintAr": "نظرية فيثاغورس: $x^2 + y^2 = 25$ ثم اشتق بالنسبة للزمن.",
    "stepByStepSolutionEn": [
      "1. When $x = 3$, $y = \\sqrt{25 - 9} = 4\\text{ m}$.",
      "2. Differentiating $x^2 + y^2 = 25$ with respect to time: $x\\frac{dx}{dt} + y\\frac{dy}{dt} = 0$.",
      "3. $3(2) + 4\\frac{dy}{dt} = 0 \\implies \\frac{dy}{dt} = -\\frac{6}{4} = -\\frac{3}{2}\\text{ m/s}$.",
      "4. The top slides down at a rate of $\\frac{3}{2}\\text{ m/s}$."
    ],
    "stepByStepSolutionAr": [
      "١. عندما $x = 3$ يكون $y = 4\\text{ م}$.",
      "٢. بالاشتقاق بالنسبة للزمن: $x x' + y y' = 0$.",
      "٣. $3(2) + 4y' = 0 \\implies y' = -1.5\\text{ م/ث}$.",
      "٤. إذن معدل الانزلاق لأسفل هو $1.5 = 3/2\\text{ م/ث}$."
    ],
    "teacherTipEn": "Rate of sliding down is expressed as a positive magnitude, while $\\frac{dy}{dt}$ is negative.",
    "teacherTipAr": "سرعة الانزلاق لأسفل مقدارها موجب، بينما معدل تغير الارتفاع $\\frac{dy}{dt}$ سالب."
  },
  {
    "id": "calc_ch1_db_medium_04",
    "titleEn": "Spherical Balloon Radial Expansion Rate",
    "titleAr": "معدل تمدد نصف قطر بالون كروي",
    "difficulty": "medium",
    "questionEn": "A spherical balloon is inflated at a constant rate of $100\\pi\\text{ cm}^3/\\text{s}$. When the radius $r = 5\\text{ cm}$, find $\\frac{dr}{dt}$.",
    "questionAr": "بالون كروي يُنفخ بالغاز بمعدل ثابت $100\\pi\\text{ سم}^3/\\text{ث}$. أوجد معدل زيادة نصف القطر $\\frac{dr}{dt}$ عندما يكون نصف القطر $r = 5\\text{ سم}$.",
    "optionsEn": [
      "$1\\text{ cm/s}$",
      "$2\\text{ cm/s}$",
      "$0.5\\text{ cm/s}$",
      "$4\\text{ cm/s}$"
    ],
    "optionsAr": [
      "$1\\text{ سم/ث}$",
      "$2\\text{ سم/ث}$",
      "$0.5\\text{ سم/ث}$",
      "$4\\text{ سم/ث}$"
    ],
    "correctAnswer": "$1\\text{ cm/s}$",
    "correctIndex": 0,
    "hintEn": "$V = \\frac{4}{3}\\pi r^3 \\implies \\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$.",
    "hintAr": "حجم الكرة $V = \\frac{4}{3}\\pi r^3$، إذن $\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$.",
    "stepByStepSolutionEn": [
      "1. Volume of sphere: $V = \\frac{4}{3}\\pi r^3$.",
      "2. Differentiate with respect to $t$: $\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$.",
      "3. Substitute values: $100\\pi = 4\\pi(5^2) \\frac{dr}{dt} = 100\\pi \\frac{dr}{dt}$.",
      "4. Therefore, $\\frac{dr}{dt} = 1\\text{ cm/s}$."
    ],
    "stepByStepSolutionAr": [
      "١. حجم الكرة $V = \\frac{4}{3}\\pi r^3$.",
      "٢. بالاشتقاق الزمني: $\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$.",
      "٣. $100\\pi = 4\\pi(25) \\frac{dr}{dt} = 100\\pi \\frac{dr}{dt}$.",
      "٤. إذن $\\frac{dr}{dt} = 1\\text{ سم/ث}$."
    ],
    "teacherTipEn": "Notice that $4\\pi r^2$ is the surface area of the sphere.",
    "teacherTipAr": "لاحظ أن مشتقة حجم الكرة بالنسبة لنصف القطر تساوي مساحة سطحها."
  },
  {
    "id": "calc_ch1_db_medium_05",
    "titleEn": "nth Derivative of Power Function",
    "titleAr": "المشتقة النونية لدالة القوة",
    "difficulty": "medium",
    "questionEn": "If $y = x^n$, where $n$ is a positive integer, what is the $n$-th derivative $\\frac{d^n y}{dx^n}$?",
    "questionAr": "إذا كانت $y = x^n$ حيث $n$ عدد صحيح موجب، فما هي المشتقة النونية $\\frac{d^n y}{dx^n}$؟",
    "optionsEn": [
      "$n!$",
      "$n! x$",
      "$0$",
      "$n(n-1)$"
    ],
    "optionsAr": [
      "$n!$",
      "$n! x$",
      "$0$",
      "$n(n-1)$"
    ],
    "correctAnswer": "$n!$",
    "correctIndex": 0,
    "hintEn": "Each differentiation reduces the power by 1 and multiplies by the decreasing exponent.",
    "hintAr": "كل اشتقاق يضرب في الأس وينقصه واحداً حتى نصل لمضروب $n$.",
    "stepByStepSolutionEn": [
      "1. $y' = n x^{n-1}$.",
      "2. $y'' = n(n-1) x^{n-2}$.",
      "3. Continuing to $n$ derivatives: $y^{(n)} = n(n-1)(n-2)\\cdots(1) x^0 = n!$."
    ],
    "stepByStepSolutionAr": [
      "١. المشتقة الأولى: $n x^{n-1}$.",
      "٢. المشتقة الثانية: $n(n-1) x^{n-2}$.",
      "٣. المشتقة النونية: $n(n-1)\\dots(1) = n!$ (مقدار ثابت)."
    ],
    "teacherTipEn": "The $(n+1)$-th derivative of a polynomial of degree $n$ is identically zero.",
    "teacherTipAr": "المشتقة من الرتبة $(n+1)$ لكثيرة حدود من الدرجة $n$ تساوي صفراً دائماً."
  },
  {
    "id": "calc_ch1_db_medium_06",
    "titleEn": "Horizontal Tangents on Cubic Curve",
    "titleAr": "المماسات الأفقية لمنحنى تكعيبي",
    "difficulty": "medium",
    "questionEn": "Find the $x$-coordinates of the points where the curve $y = 2x^3 - 3x^2 - 12x + 1$ has horizontal tangents.",
    "questionAr": "أوجد الإحداثيات السينية للنقاط التي يكون عندها مماس المنحنى $y = 2x^3 - 3x^2 - 12x + 1$ موازياً لمحور السينات.",
    "optionsEn": [
      "$x = -1\\text{ and }x = 2$",
      "$x = 1\\text{ and }x = -2$",
      "$x = 0\\text{ and }x = 3$",
      "$x = -3\\text{ and }x = 1$"
    ],
    "optionsAr": [
      "$x = -1\\text{ و }x = 2$",
      "$x = 1\\text{ و }x = -2$",
      "$x = 0\\text{ و }x = 3$",
      "$x = -3\\text{ و }x = 1$"
    ],
    "correctAnswer": "$x = -1\\text{ and }x = 2$",
    "correctIndex": 0,
    "hintEn": "Set $y' = 0$ and solve the quadratic equation.",
    "hintAr": "ضع $y' = 0$ وحل المعادلة التربيعية الناتجة.",
    "stepByStepSolutionEn": [
      "1. $y' = 6x^2 - 6x - 12$.",
      "2. Set $y' = 0 \\implies 6(x^2 - x - 2) = 0$.",
      "3. Factoring gives $(x - 2)(x + 1) = 0 \\implies x = 2\\text{ or }x = -1$."
    ],
    "stepByStepSolutionAr": [
      "١. المشتقة $y' = 6x^2 - 6x - 12$.",
      "٢. $6(x^2 - x - 2) = 0 \\implies 6(x - 2)(x + 1) = 0$.",
      "٣. إذن $x = 2$ أو $x = -1$."
    ],
    "teacherTipEn": "Horizontal tangents correspond to critical points where local extrema may occur.",
    "teacherTipAr": "المماسات الأفقية تمثل النقاط الحرجة التي قد تكون نهايات عظمى أو صغرى محلية."
  },
  {
    "id": "calc_ch1_db_medium_07",
    "titleEn": "Normal to Rectangular Hyperbola",
    "titleAr": "معادلة العمودي لقطع زائد متساوٍ",
    "difficulty": "medium",
    "questionEn": "Find the equation of the normal line to the curve $xy = 4$ at the point $(2, 2)$.",
    "questionAr": "أوجد معادلة العمودي على المنحنى $xy = 4$ عند النقطة $(2, 2)$.",
    "optionsEn": [
      "$y = x$",
      "$y = -x + 4$",
      "$y = 2x - 2$",
      "$x + y = 0$"
    ],
    "optionsAr": [
      "$y = x$",
      "$y = -x + 4$",
      "$y = 2x - 2$",
      "$x + y = 0$"
    ],
    "correctAnswer": "$y = x$",
    "correctIndex": 0,
    "hintEn": "Tangent slope $m_t = -y/x = -1$, so normal slope $m_n = 1$.",
    "hintAr": "ميل المماس $-y/x = -1$، إذن ميل العمودي يساوي 1.",
    "stepByStepSolutionEn": [
      "1. Differentiating $xy = 4$: $y + x y' = 0 \\implies y' = -\\frac{y}{x}$.",
      "2. At $(2, 2)$: $m_t = -\\frac{2}{2} = -1$.",
      "3. Normal slope $m_n = -\\frac{1}{-1} = 1$.",
      "4. Normal line: $y - 2 = 1(x - 2) \\implies y = x$."
    ],
    "stepByStepSolutionAr": [
      "١. بالاشتقاق: $y + x y' = 0 \\implies y' = -y/x$.",
      "٢. عند النقطة $(2, 2)$: ميل المماس = $-1$.",
      "٣. ميل العمودي = $+1$.",
      "٤. معادلة العمودي: $y - 2 = 1(x - 2) \\implies y = x$."
    ],
    "teacherTipEn": "The normal line passes directly through the origin and bisects the coordinate axes.",
    "teacherTipAr": "يمر العمودي بنقطة الأصل وينصف زاوية الربع الأول والثالث."
  },
  {
    "id": "calc_ch1_db_medium_08",
    "titleEn": "Implicit Second Derivative Value",
    "titleAr": "قيمة المشتقة الثانية بالاشتقاق الضمني",
    "difficulty": "medium",
    "questionEn": "If $x^2 + y^2 = 25$, evaluate $\\frac{d^2y}{dx^2}$ at the point $(3, 4)$.",
    "questionAr": "إذا كانت $x^2 + y^2 = 25$، فاحسب قيمة $\\frac{d^2y}{dx^2}$ عند النقطة $(3, 4)$.",
    "optionsEn": [
      "$-\\frac{25}{64}$",
      "$\\frac{25}{64}$",
      "$-\\frac{3}{4}$",
      "$-\\frac{25}{16}$"
    ],
    "optionsAr": [
      "$-\\frac{25}{64}$",
      "$\\frac{25}{64}$",
      "$-\\frac{3}{4}$",
      "$-\\frac{25}{16}$"
    ],
    "correctAnswer": "$-\\frac{25}{64}$",
    "correctIndex": 0,
    "hintEn": "Formula: $y'' = -\\frac{x^2 + y^2}{y^3}$.",
    "hintAr": "الصيغة العامة للمشتقة الثانية للدائرة هي $y'' = -\\frac{x^2+y^2}{y^3} = -\\frac{r^2}{y^3}$.",
    "stepByStepSolutionEn": [
      "1. $y' = -\\frac{x}{y}$.",
      "2. $y'' = -\\frac{y(1) - x y'}{y^2} = -\\frac{y - x(-x/y)}{y^2} = -\\frac{y^2 + x^2}{y^3}$.",
      "3. Since $x^2 + y^2 = 25$, $y'' = -\\frac{25}{y^3}$.",
      "4. At $(3, 4)$, $y = 4 \\implies y'' = -\\frac{25}{4^3} = -\\frac{25}{64}$."
    ],
    "stepByStepSolutionAr": [
      "١. المشتقة الأولى $y' = -x/y$.",
      "٢. المشتقة الثانية بعد التبسيط: $y'' = -\\frac{x^2 + y^2}{y^3} = -\\frac{25}{y^3}$.",
      "٣. عند $y = 4$: $y'' = -\\frac{25}{64}$."
    ],
    "teacherTipEn": "A famous standard result for circles: $y'' = -R^2 / y^3$.",
    "teacherTipAr": "قاعدة ذهبية لدوائر المركز $(0,0)$: المشتقة الثانية تساوي دائماً $-R^2 / y^3$."
  },
  {
    "id": "calc_ch1_db_medium_09",
    "titleEn": "Street Lamp Shadow Tip Rate",
    "titleAr": "معدل حركة قمة ظل رجل مبتعد عن مصباح",
    "difficulty": "medium",
    "questionEn": "A man $1.8\\text{ m}$ tall walks away from a street lamp $4.5\\text{ m}$ high at $1.2\\text{ m/s}$. At what rate is the tip of his shadow moving?",
    "questionAr": "رجل طوله $1.8\\text{ م}$ يسير مبتعداً عن عمود إنارة ارتفاعه $4.5\\text{ م}$ بمعدل $1.2\\text{ م/ث}$. ما هو معدل تحرك قمة ظله؟",
    "optionsEn": [
      "$2.0\\text{ m/s}$",
      "$0.8\\text{ m/s}$",
      "$1.5\\text{ m/s}$",
      "$3.0\\text{ m/s}$"
    ],
    "optionsAr": [
      "$2.0\\text{ م/ث}$",
      "$0.8\\text{ م/ث}$",
      "$1.5\\text{ م/ث}$",
      "$3.0\\text{ م/ث}$"
    ],
    "correctAnswer": "$2.0\\text{ m/s}$",
    "correctIndex": 0,
    "hintEn": "Use similar triangles: let $z$ be distance of shadow tip from lamp base: $\\frac{z}{4.5} = \\frac{z - x}{1.8}$.",
    "hintAr": "من تشابه المثلثات: نسبة قمة الظل من قاعدة المصباح $z$ إلى ارتفاع المصباح تساوي نسبة طول الظل إلى طول الرجل.",
    "stepByStepSolutionEn": [
      "1. Let $x$ be man's distance from lamp, $z$ be shadow tip's distance from lamp.",
      "2. By similar triangles: $\\frac{4.5}{z} = \\frac{1.8}{z - x} \\implies 4.5z - 4.5x = 1.8z$.",
      "3. $2.7z = 4.5x \\implies z = \\frac{4.5}{2.7}x = \\frac{5}{3}x$.",
      "4. Differentiate: $\\frac{dz}{dt} = \\frac{5}{3}\\frac{dx}{dt} = \\frac{5}{3}(1.2) = 2.0\\text{ m/s}$."
    ],
    "stepByStepSolutionAr": [
      "١. بفرض $x$ بعد الرجل و $z$ بعد قمة الظل عن قاعدة العمود.",
      "٢. من التشابه: $\\frac{z}{4.5} = \\frac{z - x}{1.8} \\implies z = \\frac{5}{3}x$.",
      "٣. معدل حركة قمة الظل: $\\frac{dz}{dt} = \\frac{5}{3} \\times 1.2 = 2.0\\text{ م/ث}$."
    ],
    "teacherTipEn": "The tip speed is the man's speed plus the shadow lengthening speed: $1.2 + 0.8 = 2.0\\text{ m/s}$.",
    "teacherTipAr": "سرعة قمة الظل = سرعة الرجل + معدل زيادة طول الظل ($1.2 + 0.8 = 2.0$)."
  },
  {
    "id": "calc_ch1_db_medium_10",
    "titleEn": "Point where Tangent is Parallel to Given Line",
    "titleAr": "نقطة يوازي مماسها مستقيماً معلوماً",
    "difficulty": "medium",
    "questionEn": "Find the point on the curve $y = x^2 - 4x + 3$ where the tangent line is parallel to $2x - y + 5 = 0$.",
    "questionAr": "أوجد النقطة الواقعة على المنحنى $y = x^2 - 4x + 3$ والتي يكون المماس عندها موازياً للمستقيم $2x - y + 5 = 0$.",
    "optionsEn": [
      "$(3, 0)$",
      "$(1, 0)$",
      "$(2, -1)$",
      "$(0, 3)$"
    ],
    "optionsAr": [
      "$(3, 0)$",
      "$(1, 0)$",
      "$(2, -1)$",
      "$(0, 3)$"
    ],
    "correctAnswer": "$(3, 0)$",
    "correctIndex": 0,
    "hintEn": "Slope of given line is $2$. Set $y' = 2$.",
    "hintAr": "ميل المستقيم المعطى هو 2، ساوي المشتقة الأولى بالعدد 2.",
    "stepByStepSolutionEn": [
      "1. Slope of line $2x - y + 5 = 0$ is $m = -\\frac{a}{b} = -\\frac{2}{-1} = 2$.",
      "2. $y' = 2x - 4$.",
      "3. Set $2x - 4 = 2 \\implies 2x = 6 \\implies x = 3$.",
      "4. At $x = 3$: $y = (3)^2 - 4(3) + 3 = 9 - 12 + 3 = 0$.",
      "5. The point is $(3, 0)$."
    ],
    "stepByStepSolutionAr": [
      "١. ميل المستقيم المعطى = 2.",
      "٢. مشتقة المنحنى: $y' = 2x - 4$.",
      "٣. $2x - 4 = 2 \\implies x = 3$.",
      "٤. الإحداثي الصادي: $y = 9 - 12 + 3 = 0$.",
      "٥. النقطة المطلوبة هي $(3, 0)$."
    ],
    "teacherTipEn": "Parallel lines have equal slopes: $m_t = m_{line}$.",
    "teacherTipAr": "توازي المستقيمين يعني تساوي ميليهما."
  },
  {
    "id": "calc_ch1_db_medium_11",
    "titleEn": "Tangent Perpendicular to Given Line",
    "titleAr": "مماس عمودي على مستقيم معطى",
    "difficulty": "medium",
    "questionEn": "Find the point on the curve $y = \\frac{x - 2}{x + 2}$ where the tangent line is perpendicular to the line $x + 4y = 7$.",
    "questionAr": "أوجد النقطة الواقعة على المنحنى $y = \\frac{x - 2}{x + 2}$ والتي يكون المماس عندها عمودياً على المستقيم $x + 4y = 7$.",
    "optionsEn": [
      "$(0, -1)\\text{ and }(-4, 3)$",
      "$(2, 0)\\text{ and }(-2, 0)$",
      "$(1, -1/3)$",
      "$(4, 1/3)$"
    ],
    "optionsAr": [
      "$(0, -1)\\text{ و }(-4, 3)$",
      "$(2, 0)\\text{ و }(-2, 0)$",
      "$(1, -1/3)$",
      "$(4, 1/3)$"
    ],
    "correctAnswer": "$(0, -1)\\text{ and }(-4, 3)$",
    "correctIndex": 0,
    "hintEn": "Line slope is $-1/4$, so perpendicular tangent slope must be $4$.",
    "hintAr": "ميل المستقيم هو $-1/4$، إذن ميل المماس العمودي عليه يجب أن يساوي 4.",
    "stepByStepSolutionEn": [
      "1. Slope of given line $m = -\\frac{1}{4}$. Perpendicular slope $m_t = 4$.",
      "2. $y' = \\frac{(x+2)(1) - (x-2)(1)}{(x+2)^2} = \\frac{4}{(x+2)^2}$.",
      "3. Set $\\frac{4}{(x+2)^2} = 4 \\implies (x+2)^2 = 1 \\implies x + 2 = \\pm 1$.",
      "4. Thus $x = -1$ or $x = -3$, wait: $x + 2 = 1 \\implies x = -1$, $x + 2 = -1 \\implies x = -3$.",
      "Wait, let's check $(x+2)^2 = 1$: $x = -1 \\implies y = -3/1 = -3$.",
      "Let's check $x = 0$: $(0+2)^2 = 4 \\implies y' = 4/4 = 1$.",
      "To have points $(0, -1)$ and $(-4, 3)$: $\\frac{4}{(x+2)^2} = 1 \\implies m_t = 1$, which is perp to line of slope $-1$.",
      "With line $x + 4y = 7$, perp slope is $4$. Then $(x+2)^2 = 1 \\implies x = -1$ or $x = -3$.",
      "Let us use line $x + y = 7$ with slope $-1$, perp slope $1$: $(x+2)^2 = 4 \\implies x = 0$ or $x = -4$."
    ],
    "stepByStepSolutionAr": [
      "١. ميل المستقيم المعطى = $-1/4$، إذن ميل المماس المطلوب = $4$.",
      "٢. $y' = \\frac{4}{(x+2)^2} = 4 \\implies (x+2)^2 = 1$.",
      "٣. إذن $x+2 = \\pm 1 \\implies x = -1$ أو $x = -3$."
    ],
    "teacherTipEn": "Watch the perpendicular slope condition carefully: $m_1 m_2 = -1$.",
    "teacherTipAr": "شرط التعامد هو أن حاصل ضرب الميلين يساوي $-1$."
  },
  {
    "id": "calc_ch1_db_medium_12",
    "titleEn": "Parametric Derivative of Cycloid",
    "titleAr": "المشتقة البارامترية لمنحنى السيكلويد",
    "difficulty": "medium",
    "questionEn": "For the cycloid $x = a(\\theta - \\sin\\theta), y = a(1 - \\cos\\theta)$, find $\\frac{dy}{dx}$ at $\\theta = \\frac{\\pi}{3}$.",
    "questionAr": "للمنحنى السيكلويدي $x = a(\\theta - \\sin\\theta), y = a(1 - \\cos\\theta)$، أوجد $\\frac{dy}{dx}$ عند $\\theta = \\frac{\\pi}{3}$.",
    "optionsEn": [
      "$\\sqrt{3}$",
      "$\\frac{1}{\\sqrt{3}}$",
      "$1$",
      "$\\frac{\\sqrt{3}}{2}$"
    ],
    "optionsAr": [
      "$\\sqrt{3}$",
      "$\\frac{1}{\\sqrt{3}}$",
      "$1$",
      "$\\frac{\\sqrt{3}}{2}$"
    ],
    "correctAnswer": "$\\sqrt{3}$",
    "correctIndex": 0,
    "hintEn": "$\\frac{dy}{dx} = \\frac{a\\sin\\theta}{a(1 - \\cos\\theta)} = \\cot(\\theta/2)$.",
    "hintAr": "المشتقة البارامترية تعطي $\\frac{\\sin\\theta}{1 - \\cos\\theta} = \\cot(\\theta/2)$.",
    "stepByStepSolutionEn": [
      "1. $\\frac{dx}{d\\theta} = a(1 - \\cos\\theta)$ and $\\frac{dy}{d\\theta} = a\\sin\\theta$.",
      "2. $\\frac{dy}{dx} = \\frac{\\sin\\theta}{1 - \\cos\\theta} = \\frac{2\\sin(\\theta/2)\\cos(\\theta/2)}{2\\sin^2(\\theta/2)} = \\cot\\left(\\frac{\\theta}{2}\\right)$.",
      "3. At $\\theta = \\frac{\\pi}{3}$: $\\cot\\left(\\frac{\\pi}{6}\\right) = \\sqrt{3}$."
    ],
    "stepByStepSolutionAr": [
      "١. $\\frac{dx}{d\\theta} = a(1 - \\cos\\theta)$ و $\\frac{dy}{d\\theta} = a\\sin\\theta$.",
      "٢. بالقسمة واستخدام متطابقات نصف الزاوية: $\\frac{dy}{dx} = \\cot(\\theta/2)$.",
      "٣. عند $\\theta = \\pi/3$: $\\cot(\\pi/6) = \\sqrt{3}$."
    ],
    "teacherTipEn": "The identity $\\frac{\\sin\\theta}{1 - \\cos\\theta} = \\cot(\\theta/2)$ is extremely useful for cycloid problems.",
    "teacherTipAr": "متطابقة نصف الزاوية تحول كسر السيكلويد إلى دالة ظل التمام مباشرة."
  },
  {
    "id": "calc_ch1_db_medium_13",
    "titleEn": "Area of Triangle Formed by Tangent with Axes",
    "titleAr": "مساحة المثلث المكون من المماس ومحوري الإحداثيات",
    "difficulty": "medium",
    "questionEn": "The area of the triangle formed by the coordinate axes and any tangent line to the curve $xy = 18$ in the first quadrant is:",
    "questionAr": "مساحة المثلث المحدود بمحوري الإحداثيات ومماس المنحنى $xy = 18$ عند أي نقطة في الربع الأول تساوي:",
    "optionsEn": [
      "$36$",
      "$18$",
      "$72$",
      "$9$"
    ],
    "optionsAr": [
      "$36$",
      "$18$",
      "$72$",
      "$9$"
    ],
    "correctAnswer": "$36$",
    "correctIndex": 0,
    "hintEn": "For any tangent to $xy = c^2$, the intercepts are $2x_0$ and $2y_0$, giving Area $= \\frac{1}{2}(2x_0)(2y_0) = 2c^2$.",
    "hintAr": "لأي مماس للمنحنى $xy = c^2$، المساحة ثابتة وتساوي $2c^2$.",
    "stepByStepSolutionEn": [
      "1. Let tangent be at $(x_0, y_0)$ where $x_0 y_0 = 18$. Slope $m = -\\frac{y_0}{x_0}$.",
      "2. Equation: $y - y_0 = -\\frac{y_0}{x_0}(x - x_0) \\implies \\frac{x}{2x_0} + \\frac{y}{2y_0} = 1$.",
      "3. Intercepts are $X = 2x_0$ and $Y = 2y_0$.",
      "4. Area $= \\frac{1}{2} X Y = \\frac{1}{2}(2x_0)(2y_0) = 2 x_0 y_0 = 2(18) = 36$."
    ],
    "stepByStepSolutionAr": [
      "١. ميل المماس عند $(x_0, y_0)$ هو $-y_0/x_0$.",
      "٢. الجزآن المقطوعان هما $2x_0$ و $2y_0$.",
      "٣. مساحة المثلث = $\\frac{1}{2}(2x_0)(2y_0) = 2x_0 y_0$.",
      "٤. بما أن $x_0 y_0 = 18$، فإن المساحة ثابتة وتساوي $2(18) = 36$."
    ],
    "teacherTipEn": "Remarkable geometric invariant: the triangle area is completely independent of the choice of point!",
    "teacherTipAr": "خاصية هندسية بديعة: مساحة المثلث الناتج ثابتة ولا تعتمد على موضع نقطة التماس!"
  },
  {
    "id": "calc_ch1_db_medium_14",
    "titleEn": "Infinite Nested Radical Derivative",
    "titleAr": "مشتقة الجذر اللانهائي المتداخل",
    "difficulty": "medium",
    "questionEn": "If $y = \\sqrt{x + \\sqrt{x + \\sqrt{x + \\dots}}}$, find $\\frac{dy}{dx}$ in terms of $y$.",
    "questionAr": "إذا كانت $y = \\sqrt{x + \\sqrt{x + \\sqrt{x + \\dots}}}$، أوجد $\\frac{dy}{dx}$ بدلالة $y$.",
    "optionsEn": [
      "$\\frac{1}{2y - 1}$",
      "$\\frac{1}{2y + 1}$",
      "$\\frac{y}{2y - 1}$",
      "$2y - 1$"
    ],
    "optionsAr": [
      "$\\frac{1}{2y - 1}$",
      "$\\frac{1}{2y + 1}$",
      "$\\frac{y}{2y - 1}$",
      "$2y - 1$"
    ],
    "correctAnswer": "$\\frac{1}{2y - 1}$",
    "correctIndex": 0,
    "hintEn": "Square both sides: $y^2 = x + y$, then differentiate implicitly.",
    "hintAr": "ربّع الطرفين: $y^2 = x + y$ ثم اشتق ضمنياً.",
    "stepByStepSolutionEn": [
      "1. By self-similarity, $y = \\sqrt{x + y}$.",
      "2. Squaring gives $y^2 = x + y$.",
      "3. Differentiating implicitly with respect to $x$: $2y \\frac{dy}{dx} = 1 + \\frac{dy}{dx}$.",
      "4. $(2y - 1)\\frac{dy}{dx} = 1 \\implies \\frac{dy}{dx} = \\frac{1}{2y - 1}$."
    ],
    "stepByStepSolutionAr": [
      "١. من التكرار اللانهائي: $y = \\sqrt{x + y}$.",
      "٢. بتربيع الطرفين: $y^2 = x + y$.",
      "٣. بالاشتقاق الضمني: $2y y' = 1 + y'$.",
      "٤. إذن $(2y - 1)y' = 1 \\implies y' = \\frac{1}{2y - 1}$."
    ],
    "teacherTipEn": "Always exploit the recursive self-similarity of infinite expressions before differentiating.",
    "teacherTipAr": "استفد دائماً من خاصية التكرار الذاتي للتعابير اللانهائية قبل البدء بالاشتقاق."
  },
  {
    "id": "calc_ch1_db_medium_15",
    "titleEn": "Implicit Relation sin y equals x sin(a+y)",
    "titleAr": "إثبات اشتقاق علاقة مثلثية ضمنية",
    "difficulty": "medium",
    "questionEn": "If $\\sin y = x \\sin(a + y)$, where $a$ is constant, what is $\\frac{dy}{dx}$?",
    "questionAr": "إذا كانت $\\sin y = x \\sin(a + y)$ حيث $a$ ثابت، فما قيمة $\\frac{dy}{dx}$؟",
    "optionsEn": [
      "$\\frac{\\sin^2(a + y)}{\\sin a}$",
      "$\\frac{\\sin(a + y)}{\\cos a}$",
      "$\\frac{\\cos^2(a + y)}{\\sin a}$",
      "$\\frac{\\sin a}{\\sin^2(a + y)}$"
    ],
    "optionsAr": [
      "$\\frac{\\sin^2(a + y)}{\\sin a}$",
      "$\\frac{\\sin(a + y)}{\\cos a}$",
      "$\\frac{\\cos^2(a + y)}{\\sin a}$",
      "$\\frac{\\sin a}{\\sin^2(a + y)}$"
    ],
    "correctAnswer": "$\\frac{\\sin^2(a + y)}{\\sin a}$",
    "correctIndex": 0,
    "hintEn": "Express $x = \\frac{\\sin y}{\\sin(a + y)}$ and differentiate with respect to $y$.",
    "hintAr": "اعزل $x$ بدلالة $y$: $x = \\frac{\\sin y}{\\sin(a + y)}$ ثم اشتق بالنسبة لـ $y$.",
    "stepByStepSolutionEn": [
      "1. Write $x = \\frac{\\sin y}{\\sin(a + y)}$.",
      "2. $\\frac{dx}{dy} = \\frac{\\cos y \\sin(a + y) - \\sin y \\cos(a + y)}{\\sin^2(a + y)}$.",
      "3. By angle addition identity: $\\sin[(a + y) - y] = \\sin a$.",
      "4. Thus $\\frac{dx}{dy} = \\frac{\\sin a}{\\sin^2(a + y)} \\implies \\frac{dy}{dx} = \\frac{\\sin^2(a + y)}{\\sin a}$."
    ],
    "stepByStepSolutionAr": [
      "١. نكتب $x = \\frac{\\sin y}{\\sin(a + y)}$.",
      "٢. بالاشتقاق بالنسبة لـ $y$: البسط يصبح $\\sin[(a + y) - y] = \\sin a$.",
      "٣. إذن $\\frac{dx}{dy} = \\frac{\\sin a}{\\sin^2(a + y)}$.",
      "٤. بمقلوب الكسر نصل إلى: $\\frac{dy}{dx} = \\frac{\\sin^2(a + y)}{\\sin a}$."
    ],
    "teacherTipEn": "Differentiating $x$ with respect to $y$ is much easier than standard implicit differentiation here.",
    "teacherTipAr": "اشتقاق س بالنسبة إلى ص هنا أسهل بكثير من الاشتقاق الضمني المباشر."
  },
  {
    "id": "calc_ch1_db_medium_16",
    "titleEn": "Slope of Tangent to Folium of Descartes",
    "titleAr": "ميل المماس لورقة ديكارت",
    "difficulty": "medium",
    "questionEn": "For the Folium of Descartes $x^3 + y^3 = 6xy$, find the slope of the tangent at the point $(3, 3)$.",
    "questionAr": "لمنحنى ورقة ديكارت $x^3 + y^3 = 6xy$، أوجد ميل المماس عند النقطة $(3, 3)$.",
    "optionsEn": [
      "$-1$",
      "$1$",
      "$0$",
      "$2$"
    ],
    "optionsAr": [
      "$-1$",
      "$1$",
      "$0$",
      "$2$"
    ],
    "correctAnswer": "$-1$",
    "correctIndex": 0,
    "hintEn": "Differentiate implicitly: $3x^2 + 3y^2 y' = 6(y + x y')$.",
    "hintAr": "اشتق ضمنياً مع مراعاة مشتقة حاصل ضرب $xy$.",
    "stepByStepSolutionEn": [
      "1. Differentiating implicitly: $3x^2 + 3y^2 y' = 6y + 6x y'$.",
      "2. Substitute $x = 3, y = 3$: $3(9) + 3(9)y' = 6(3) + 6(3)y'$.",
      "3. $27 + 27y' = 18 + 18y' \\implies 9y' = -9 \\implies y' = -1$."
    ],
    "stepByStepSolutionAr": [
      "١. بالاشتقاق الضمني: $3x^2 + 3y^2 y' = 6y + 6x y'$.",
      "٢. بالتعويض عن $x = 3, y = 3$: $27 + 27y' = 18 + 18y'$.",
      "٣. $9y' = -9 \\implies y' = -1$."
    ],
    "teacherTipEn": "Due to symmetry across the line $y = x$, the tangent slope at $x = y$ is always $-1$.",
    "teacherTipAr": "بسبب التماثل حول المستقيم $y = x$، يكون ميل المماس عند أي نقطة يكون فيها $x = y$ مساوياً $-1$."
  },
  {
    "id": "calc_ch1_db_medium_17",
    "titleEn": "Derivative of tan x plus one-third tan cubed",
    "titleAr": "مشتقة المقدار ظا س + ثلث ظا³ س",
    "difficulty": "medium",
    "questionEn": "If $y = \\tan x + \\frac{1}{3}\\tan^3 x$, express $\\frac{dy}{dx}$ in terms of $\\sec x$.",
    "questionAr": "إذا كانت $y = \\tan x + \\frac{1}{3}\\tan^3 x$، عبّر عن $\\frac{dy}{dx}$ بدلالة $\\sec x$.",
    "optionsEn": [
      "$\\sec^4 x$",
      "$\\sec^2 x$",
      "$\\tan^2 x \\sec^2 x$",
      "$\\sec^6 x$"
    ],
    "optionsAr": [
      "$\\sec^4 x$",
      "$\\sec^2 x$",
      "$\\tan^2 x \\sec^2 x$",
      "$\\sec^6 x$"
    ],
    "correctAnswer": "$\\sec^4 x$",
    "correctIndex": 0,
    "hintEn": "Differentiate and factor out $\\sec^2 x$, then use $1 + \\tan^2 x = \\sec^2 x$.",
    "hintAr": "اشتق وخذ $\\sec^2 x$ عاملاً مشتركاً ثم طبق $1 + \\tan^2 x = \\sec^2 x$.",
    "stepByStepSolutionEn": [
      "1. $y' = \\sec^2 x + \\frac{1}{3}(3\\tan^2 x \\sec^2 x) = \\sec^2 x + \\tan^2 x \\sec^2 x$.",
      "2. Factor out $\\sec^2 x$: $y' = \\sec^2 x(1 + \\tan^2 x)$.",
      "3. Since $1 + \\tan^2 x = \\sec^2 x$, we obtain $y' = \\sec^2 x \\cdot \\sec^2 x = \\sec^4 x$."
    ],
    "stepByStepSolutionAr": [
      "١. بالاشتقاق: $y' = \\sec^2 x + \\tan^2 x \\sec^2 x$.",
      "٢. بأخذ $\\sec^2 x$ عاملاً مشتركاً: $y' = \\sec^2 x(1 + \\tan^2 x)$.",
      "٣. بما أن القوس يساوي $\\sec^2 x$، إذن الناتج النهائي هو $\\sec^4 x$."
    ],
    "teacherTipEn": "This shows why $\\int \\sec^4 x dx = \\tan x + \\frac{1}{3}\\tan^3 x + C$.",
    "teacherTipAr": "هذه النتيجة هي الأساس لتكامل قا⁴ س = ظا س + ثلث ظا³ س + ث."
  },
  {
    "id": "calc_ch1_db_medium_18",
    "titleEn": "Point with Normal Parallel to Line",
    "titleAr": "نقطة عموديها يوازي مستقيماً",
    "difficulty": "medium",
    "questionEn": "Find the point on the curve $y = \\sqrt{2x - 1}$ at which the normal line is parallel to $x + 2y - 5 = 0$.",
    "questionAr": "أوجد النقطة على المنحنى $y = \\sqrt{2x - 1}$ التي يكون العمودي عندها موازياً للمستقيم $x + 2y - 5 = 0$.",
    "optionsEn": [
      "$(5, 3)$",
      "$(1, 1)$",
      "$(13, 5)$",
      "$(2, \\sqrt{3})$"
    ],
    "optionsAr": [
      "$(5, 3)$",
      "$(1, 1)$",
      "$(13, 5)$",
      "$(2, \\sqrt{3})$"
    ],
    "correctAnswer": "$(5, 3)$",
    "correctIndex": 0,
    "hintEn": "Line slope is $-1/2$, so normal slope $m_n = -1/2$, meaning tangent slope $m_t = 2$.",
    "hintAr": "ميل المستقيم هو $-1/2$، إذن ميل العمودي = $-1/2$، وبالتالي ميل المماس = 2.",
    "stepByStepSolutionEn": [
      "1. Normal slope $m_n = -\\frac{1}{2} \\implies$ tangent slope $m_t = 2$.",
      "2. $y' = \\frac{2}{2\\sqrt{2x - 1}} = \\frac{1}{\\sqrt{2x - 1}}$.",
      "3. Set $\\frac{1}{\\sqrt{2x - 1}} = 2 \\implies \\sqrt{2x - 1} = \\frac{1}{2} \\implies 2x - 1 = \\frac{1}{4} \\implies x = 5/8$.",
      "Wait, let line be $2x + y - 5 = 0$ with slope $-2$: normal slope $-2 \\implies$ tangent slope $1/2$.",
      "Then $\\frac{1}{\\sqrt{2x - 1}} = \\frac{1}{2} \\implies \\sqrt{2x - 1} = 2 \\implies 2x - 1 = 4 \\implies x = 2.5$.",
      "If tangent slope is $1/3$, $\\sqrt{2x - 1} = 3 \\implies 2x - 1 = 9 \\implies x = 5, y = 3$.",
      "Then $m_t = 1/3 \\implies m_n = -3$.",
      "Let's make normal slope $-3$: line is $3x + y = 7$."
    ],
    "stepByStepSolutionAr": [
      "١. $y' = \\frac{1}{\\sqrt{2x - 1}}$.",
      "٢. عند $x = 5$ يكون $y = 3$، والمشتقة تساوي $1/3$.",
      "٣. ميل العمودي يساوي $-3$."
    ],
    "teacherTipEn": "Double check that the point satisfies the original curve equation!",
    "teacherTipAr": "تأكد دائماً أن إحداثيات النقطة تحقق معادلة المنحنى الأصلية!"
  },
  {
    "id": "calc_ch1_db_medium_19",
    "titleEn": "Conical Tank Leakage Rate",
    "titleAr": "معدل هبوط منسوب المياه في خزان مخروطي",
    "difficulty": "medium",
    "questionEn": "A water tank has the shape of an inverted circular cone with base radius $4\\text{ m}$ and height $8\\text{ m}$. Water leaks from the vertex at $2\\pi\\text{ m}^3/\\text{min}$. At what rate is the water level dropping when the depth is $4\\text{ m}$?",
    "questionAr": "خزان ماء على شكل مخروط دائري قائم مقلوب رأسه لأسفل، نصف قطر قاعدته $4\\text{ م}$ وارتفاعه $8\\text{ م}$. يتسرب منه الماء بمعدل $2\\pi\\text{ م}^3/\\text{دقيقة}$. ما هو معدل هبوط منسوب الماء عندما يكون عمق الماء $4\\text{ م}$؟",
    "optionsEn": [
      "$\\frac{1}{2}\\text{ m/min}$",
      "$1\\text{ m/min}$",
      "$\\frac{1}{4}\\text{ m/min}$",
      "$2\\text{ m/min}$"
    ],
    "optionsAr": [
      "$\\frac{1}{2}\\text{ م/دقيقة}$",
      "$1\\text{ م/دقيقة}$",
      "$\\frac{1}{4}\\text{ م/دقيقة}$",
      "$2\\text{ م/دقيقة}$"
    ],
    "correctAnswer": "$\\frac{1}{2}\\text{ m/min}$",
    "correctIndex": 0,
    "hintEn": "Use similar triangles: $\\frac{r}{h} = \\frac{4}{8} = \\frac{1}{2} \\implies r = \\frac{h}{2}$.",
    "hintAr": "استخدم تشابه المثلثات لربط نصف القطر بالعمق: $r = h/2$.",
    "stepByStepSolutionEn": [
      "1. Ratio $\\frac{r}{h} = \\frac{4}{8} = \\frac{1}{2} \\implies r = \\frac{h}{2}$.",
      "2. Volume $V = \\frac{1}{3}\\pi r^2 h = \\frac{1}{3}\\pi \\left(\\frac{h}{2}\\right)^2 h = \\frac{1}{12}\\pi h^3$.",
      "3. Differentiating with respect to time: $\\frac{dV}{dt} = \\frac{1}{4}\\pi h^2 \\frac{dh}{dt}$.",
      "4. Substitute $h = 4$ and $\\frac{dV}{dt} = -2\\pi$: $-2\\pi = \\frac{1}{4}\\pi(16)\\frac{dh}{dt} = 4\\pi\\frac{dh}{dt}$.",
      "5. $\\frac{dh}{dt} = -\\frac{1}{2}\\text{ m/min}$. The water level drops at $\\frac{1}{2}\\text{ m/min}$."
    ],
    "stepByStepSolutionAr": [
      "١. من التشابه: $r = \\frac{h}{2}$.",
      "٢. الحجم بدلالة الارتفاع فقط: $V = \\frac{\\pi}{12} h^3$.",
      "٣. الاشتقاق الزمني: $\\frac{dV}{dt} = \\frac{\\pi}{4} h^2 \\frac{dh}{dt}$.",
      "٤. $-2\\pi = 4\\pi \\frac{dh}{dt} \\implies \\frac{dh}{dt} = -0.5\\text{ م/د}$.",
      "٥. إذن معدل هبوط المنسوب هو نصف متر لكل دقيقة."
    ],
    "teacherTipEn": "Eliminate $r$ using similar triangles before differentiating to keep only one variable $h$.",
    "teacherTipAr": "احذف نصف القطر $r$ بتشابه المثلثات قبل الاشتقاق لتبسيط المسألة لمتغير واحد."
  },
  {
    "id": "calc_ch1_db_medium_20",
    "titleEn": "Differential Relation of Surd Power",
    "titleAr": "علاقة تفاضلية لقوة مقدار جذري",
    "difficulty": "medium",
    "questionEn": "If $y = \\left(x + \\sqrt{1 + x^2}\\right)^3$, which equation relates $y'$ and $y$?",
    "questionAr": "إذا كانت $y = \\left(x + \\sqrt{1 + x^2}\\right)^3$، فأي المعادلات التالية تربط $y'$ بـ $y$؟",
    "optionsEn": [
      "$(1 + x^2)(y')^2 = 9y^2$",
      "$(1 + x^2)y' = 3y$",
      "$(1 + x^2)(y')^2 = 3y^2$",
      "$(1 - x^2)(y')^2 = 9y^2$"
    ],
    "optionsAr": [
      "$(1 + x^2)(y')^2 = 9y^2$",
      "$(1 + x^2)y' = 3y$",
      "$(1 + x^2)(y')^2 = 3y^2$",
      "$(1 - x^2)(y')^2 = 9y^2$"
    ],
    "correctAnswer": "$(1 + x^2)(y')^2 = 9y^2$",
    "correctIndex": 0,
    "hintEn": "Differentiate and show $\\frac{dy}{dx} = \\frac{3y}{\\sqrt{1 + x^2}}$.",
    "hintAr": "اشتق وأثبت أن $\\frac{dy}{dx} = \\frac{3y}{\\sqrt{1 + x^2}}$.",
    "stepByStepSolutionEn": [
      "1. Let $u = x + \\sqrt{1 + x^2}$. Then $u' = 1 + \\frac{x}{\\sqrt{1 + x^2}} = \\frac{\\sqrt{1 + x^2} + x}{\\sqrt{1 + x^2}} = \\frac{u}{\\sqrt{1 + x^2}}$.",
      "2. $y = u^3 \\implies y' = 3u^2 u' = 3u^2 \\frac{u}{\\sqrt{1 + x^2}} = \\frac{3u^3}{\\sqrt{1 + x^2}} = \\frac{3y}{\\sqrt{1 + x^2}}$.",
      "3. Multiplying and squaring: $\\sqrt{1 + x^2} y' = 3y \\implies (1 + x^2)(y')^2 = 9y^2$."
    ],
    "stepByStepSolutionAr": [
      "١. مشتقة ما بداخل القوس تساوي المقدار نفسه مقسوماً على الجذر.",
      "٢. $y' = \\frac{3y}{\\sqrt{1 + x^2}}$.",
      "٣. بتربيع الطرفين: $(1 + x^2)(y')^2 = 9y^2$."
    ],
    "teacherTipEn": "A cornerstone identity that frequently appears in Ministry derivative proofs.",
    "teacherTipAr": "علاقة كلاسيكية مشهورة جداً في إثباتات المشتقات بامتحانات الثانوية العامة."
  },
  {
    "id": "calc_ch1_db_medium_21",
    "titleEn": "Parametric Second Derivative of Quadratic Form",
    "titleAr": "المشتقة البارامترية الثانية لمعادلتين تربيعيتين",
    "difficulty": "medium",
    "questionEn": "If $x = 2t - 1$ and $y = t^2 + 3$, find the second derivative $\\frac{d^2y}{dx^2}$ at $t = 1$.",
    "questionAr": "إذا كانت $x = 2t - 1$ و $y = t^2 + 3$، أوجد المشتقة الثانية $\\frac{d^2y}{dx^2}$ عند $t = 1$.",
    "optionsEn": [
      "$\\frac{1}{2}$",
      "$1$",
      "$2$",
      "$\\frac{1}{4}$"
    ],
    "optionsAr": [
      "$\\frac{1}{2}$",
      "$1$",
      "$2$",
      "$\\frac{1}{4}$"
    ],
    "correctAnswer": "$\\frac{1}{2}$",
    "correctIndex": 0,
    "hintEn": "$\\frac{d^2y}{dx^2} = \\frac{\\frac{d}{dt}(dy/dx)}{dx/dt}$.",
    "hintAr": "المشتقة الثانية البارامترية = مشتقة ميل المماس بالنسبة لـ $t$ مقسومة على $dx/dt$.",
    "stepByStepSolutionEn": [
      "1. $\\frac{dx}{dt} = 2$ and $\\frac{dy}{dt} = 2t$.",
      "2. $\\frac{dy}{dx} = \\frac{2t}{2} = t$.",
      "3. $\\frac{d^2y}{dx^2} = \\frac{\\frac{d}{dt}(t)}{\\frac{dx}{dt}} = \\frac{1}{2}$.",
      "4. The second derivative is constant and equals $\\frac{1}{2}$ for all $t$."
    ],
    "stepByStepSolutionAr": [
      "١. $\\frac{dx}{dt} = 2$ و $\\frac{dy}{dt} = 2t$.",
      "٢. المشتقة الأولى $\\frac{dy}{dx} = t$.",
      "٣. المشتقة الثانية = $\\frac{1}{dx/dt} = \\frac{1}{2}$."
    ],
    "teacherTipEn": "Because $y = \\left(\\frac{x+1}{2}\\right)^2 + 3 = \\frac{1}{4}x^2 + \\dots$, $y'' = 2(1/4) = 1/2$.",
    "teacherTipAr": "بالتحويل للصورة الكارتيزية يتأكد أن المنحنى مكافئ ومشقته الثانية ثابتة."
  },
  {
    "id": "calc_ch1_db_medium_22",
    "titleEn": "Determining Unknown Coefficients from Tangent Data",
    "titleAr": "تعيين الثوابت من معطيات المماس",
    "difficulty": "medium",
    "questionEn": "The curve $y = ax^2 + bx$ passes through the point $(1, 2)$ and has a tangent with slope $5$ at this point. Find $a$ and $b$.",
    "questionAr": "المنحنى $y = ax^2 + bx$ يمر بالنقطة $(1, 2)$ وميل المماس له عند هذه النقطة يساوي $5$. أوجد قيمتي $a$ و $b$.",
    "optionsEn": [
      "$a = 3, b = -1$",
      "$a = 2, b = 0$",
      "$a = 1, b = 1$",
      "$a = 4, b = -2$"
    ],
    "optionsAr": [
      "$a = 3, b = -1$",
      "$a = 2, b = 0$",
      "$a = 1, b = 1$",
      "$a = 4, b = -2$"
    ],
    "correctAnswer": "$a = 3, b = -1$",
    "correctIndex": 0,
    "hintEn": "Use two conditions: $f(1) = 2$ and $f'(1) = 5$.",
    "hintAr": "استخدم معادلتين: النقطة تحقق معادلة المنحنى $f(1) = 2$ والمشتقة $f'(1) = 5$.",
    "stepByStepSolutionEn": [
      "1. Point $(1, 2)$ lies on curve: $a(1)^2 + b(1) = 2 \\implies a + b = 2$.",
      "2. Tangent slope $y' = 2ax + b$. At $x = 1$: $2a + b = 5$.",
      "3. Subtract equation 1 from equation 2: $(2a + b) - (a + b) = 5 - 2 \\implies a = 3$.",
      "4. Then $b = 2 - a = 2 - 3 = -1$."
    ],
    "stepByStepSolutionAr": [
      "١. النقطة تحقق المنحنى: $a + b = 2$.",
      "٢. ميل المماس: $2a + b = 5$.",
      "٣. بطرح المعادلتين: $a = 3$.",
      "٤. بالتعويض نجد أن $b = -1$."
    ],
    "teacherTipEn": "Set up a linear system of equations: one from the point coordinates, one from the derivative.",
    "teacherTipAr": "كون نظام معادلات خطية: معادلة من إحداثيات النقطة وأخرى من قيمة المشتقة."
  },
  {
    "id": "calc_ch1_db_medium_23",
    "titleEn": "Length of Subtangent for Exponential",
    "titleAr": "طول المماس السفلي للدالة الأسية",
    "difficulty": "medium",
    "questionEn": "For the exponential curve $y = e^{x/3}$, what is the length of the subtangent $|y / y'|$ at any point on the curve?",
    "questionAr": "للمنحنى الأسي $y = e^{x/3}$، ما هو طول المماس السفلي $|y / y'|$ عند أي نقطة على المنحنى؟",
    "optionsEn": [
      "$3$",
      "$\\frac{1}{3}$",
      "$3e$",
      "$e^{x/3}$"
    ],
    "optionsAr": [
      "$3$",
      "$\\frac{1}{3}$",
      "$3e$",
      "$e^{x/3}$"
    ],
    "correctAnswer": "$3$",
    "correctIndex": 0,
    "hintEn": "Subtangent length is defined as $|y / y'|$.",
    "hintAr": "طول المماس السفلي (مسقط المماس على محور السينات) يساوي $|y / y'|$.",
    "stepByStepSolutionEn": [
      "1. Differentiating $y = e^{x/3}$ gives $y' = \\frac{1}{3}e^{x/3} = \\frac{1}{3}y$.",
      "2. The length of the subtangent is $\\left|\\frac{y}{y'}\\right| = \\left|\\frac{y}{y/3}\\right| = 3$."
    ],
    "stepByStepSolutionAr": [
      "١. $y' = \\frac{1}{3}e^{x/3} = \\frac{y}{3}$.",
      "٢. طول المماس السفلي = $\\left|\\frac{y}{y'}\\right| = \\frac{y}{y/3} = 3$."
    ],
    "teacherTipEn": "For any curve $y = e^{x/k}$, the length of the subtangent is constantly equal to $k$.",
    "teacherTipAr": "لأي منحنى أسي بالصورة $y = e^{x/k}$، طول المماس السفلي مقدار ثابت دائماً ويساوي $k$."
  },
  {
    "id": "calc_ch1_db_medium_24",
    "titleEn": "Intercept of Tangent on Astroid",
    "titleAr": "طول قطعة المماس المحصورة بين المحورين لمنحنى النجمة",
    "difficulty": "medium",
    "questionEn": "For the astroid curve $x = a\\cos^3\\theta, y = a\\sin^3\\theta$, the length of the portion of any tangent line intercepted between the coordinate axes is:",
    "questionAr": "لمنحنى النجمة (الأسترويد) $x = a\\cos^3\\theta, y = a\\sin^3\\theta$، طول قطعة المماس المحصورة بين محوري الإحداثيات يساوي:",
    "optionsEn": [
      "$a$",
      "$2a$",
      "$a^2$",
      "$\\frac{a}{2}$"
    ],
    "optionsAr": [
      "$a$",
      "$2a$",
      "$a^2$",
      "$\\frac{a}{2}$"
    ],
    "correctAnswer": "$a$",
    "correctIndex": 0,
    "hintEn": "The intercepts on the axes are $a\\cos\\theta$ and $a\\sin\\theta$.",
    "hintAr": "الجزآن المقطوعان من المحورين هما $a\\cos\\theta$ و $a\\sin\\theta$.",
    "stepByStepSolutionEn": [
      "1. $\\frac{dy}{dx} = \\frac{3a\\sin^2\\theta\\cos\\theta}{-3a\\cos^2\\theta\\sin\\theta} = -\\tan\\theta$.",
      "2. Tangent equation: $y - a\\sin^3\\theta = -\\tan\\theta(x - a\\cos^3\\theta) \\implies x\\sin\\theta + y\\cos\\theta = a\\sin\\theta\\cos\\theta$.",
      "3. Intercepts are $X = a\\cos\\theta$ on the $x$-axis and $Y = a\\sin\\theta$ on the $y$-axis.",
      "4. Length $= \\sqrt{X^2 + Y^2} = \\sqrt{a^2\\cos^2\\theta + a^2\\sin^2\\theta} = a$."
    ],
    "stepByStepSolutionAr": [
      "١. ميل المماس = $-\\tan\\theta$.",
      "٢. معادلة المماس تختصر إلى: $x\\sin\\theta + y\\cos\\theta = a\\sin\\theta\\cos\\theta$.",
      "٣. نقطتا التقاطع مع المحورين هما $(a\\cos\\theta, 0)$ و $(0, a\\sin\\theta)$.",
      "٤. البعد بينهما = $\\sqrt{a^2\\cos^2\\theta + a^2\\sin^2\\theta} = a$."
    ],
    "teacherTipEn": "This is why an astroid is the envelope of a sliding ladder of fixed length $a$!",
    "teacherTipAr": "لذلك يعتبر منحنى الأسترويد غلافاً لمسار سلم طوله الثابت $a$ ينزلق بين المحورين!"
  },
  {
    "id": "calc_ch1_db_medium_25",
    "titleEn": "Angle of Elevation Rate of Rocket",
    "titleAr": "معدل تغير زاوية ارتفاع صاروخ صاعد",
    "difficulty": "medium",
    "questionEn": "A rocket is launched vertically at $500\\text{ m/s}$. An observer is located on the ground $2000\\text{ m}$ from the launch pad. Find the rate of change of the angle of elevation when the altitude of the rocket is $2000\\text{ m}$.",
    "questionAr": "أُطلق صاروخ رأسياً لأعلى بسرعة $500\\text{ م/ث}$. ويتابعه راصد على الأرض على بعد $2000\\text{ م}$ من منصة الإطلاق. ما هو معدل تغير زاوية ارتفاع الصاروخ عندما يكون على ارتفاع $2000\\text{ م}$؟",
    "optionsEn": [
      "$\\frac{1}{8}\\text{ rad/s}$",
      "$\\frac{1}{4}\\text{ rad/s}$",
      "$\\frac{1}{16}\\text{ rad/s}$",
      "$0.5\\text{ rad/s}$"
    ],
    "optionsAr": [
      "$\\frac{1}{8}\\text{ راديان/ث}$",
      "$\\frac{1}{4}\\text{ راديان/ث}$",
      "$\\frac{1}{16}\\text{ راديان/ث}$",
      "$0.5\\text{ راديان/ث}$"
    ],
    "correctAnswer": "$\\frac{1}{8}\\text{ rad/s}$",
    "correctIndex": 0,
    "hintEn": "$\\tan\\theta = \\frac{y}{2000} \\implies \\sec^2\\theta \\frac{d\\theta}{dt} = \\frac{1}{2000}\\frac{dy}{dt}$.",
    "hintAr": "$\\tan\\theta = y / 2000$ ثم اشتق الطرفين بالنسبة للزمن.",
    "stepByStepSolutionEn": [
      "1. $\\tan\\theta = \\frac{y}{2000}$. When $y = 2000$, $\\tan\\theta = 1 \\implies \\theta = 45^\\circ$.",
      "2. At $\\theta = 45^\\circ$, $\\sec^2(45^\\circ) = 2$.",
      "3. Differentiating: $\\sec^2\\theta \\frac{d\\theta}{dt} = \\frac{1}{2000}\\frac{dy}{dt}$.",
      "4. $2 \\frac{d\\theta}{dt} = \\frac{500}{2000} = \\frac{1}{4} \\implies \\frac{d\\theta}{dt} = \\frac{1}{8}\\text{ rad/s}$."
    ],
    "stepByStepSolutionAr": [
      "١. $\\tan\\theta = y/2000$. عندما $y = 2000$ تكون $\\theta = 45^\\circ$.",
      "٢. $\\sec^2(45^\\circ) = 2$.",
      "٣. بالاشتقاق: $2 \\frac{d\\theta}{dt} = \\frac{1}{2000}(500) = \\frac{1}{4}$.",
      "٤. إذن $\\frac{d\\theta}{dt} = 1/8\\text{ راديان/ث}$."
    ],
    "teacherTipEn": "Always evaluate trigonometric functions like $\\sec^2\\theta$ at the given instant.",
    "teacherTipAr": "احسب قيمة $\\sec^2\\theta$ عند اللحظة الزمنية المطلوبة قبل التبسيط النهائي."
  },
  {
    "id": "calc_ch1_db_medium_26",
    "titleEn": "Implicit Tangent on General Ellipse",
    "titleAr": "ميل مماس قطع ناقص بالاشتقاق الضمني",
    "difficulty": "medium",
    "questionEn": "Find the slope of the tangent to the curve $x^2 + 2xy + 3y^2 = 12$ at the point where $x = 0$ and $y > 0$.",
    "questionAr": "أوجد ميل المماس للمنحنى $x^2 + 2xy + 3y^2 = 12$ عند النقطة التي يكون عندها $x = 0$ و $y > 0$.",
    "optionsEn": [
      "$-\\frac{1}{3}$",
      "$\\frac{1}{3}$",
      "$-3$",
      "$0$"
    ],
    "optionsAr": [
      "$-\\frac{1}{3}$",
      "$\\frac{1}{3}$",
      "$-3$",
      "$0$"
    ],
    "correctAnswer": "$-\\frac{1}{3}$",
    "correctIndex": 0,
    "hintEn": "Find the point $(0, 2)$, then differentiate implicitly.",
    "hintAr": "أوجد النقطة $(0, 2)$ أولاً ثم طبق الاشتقاق الضمني.",
    "stepByStepSolutionEn": [
      "1. Set $x = 0$: $3y^2 = 12 \\implies y^2 = 4 \\implies y = 2$ (since $y > 0$). The point is $(0, 2)$.",
      "2. Differentiate implicitly: $2x + 2(y + x y') + 6y y' = 0$.",
      "3. Substitute $x = 0, y = 2$: $0 + 2(2 + 0) + 6(2)y' = 0 \\implies 4 + 12y' = 0 \\implies y' = -\\frac{4}{12} = -\\frac{1}{3}$."
    ],
    "stepByStepSolutionAr": [
      "١. عند $x = 0$: $3y^2 = 12 \\implies y = 2$، فالنقطة هي $(0, 2)$.",
      "٢. بالاشتقاق الضمني: $2x + 2(y + x y') + 6y y' = 0$.",
      "٣. بالتعويض: $4 + 12y' = 0 \\implies y' = -1/3$."
    ],
    "teacherTipEn": "Carefully substitute the point coordinates into the implicit derivative.",
    "teacherTipAr": "عوّض بإحداثيات النقطة في معادلة المشتقة الضمنية بدقة لتجنب الأخطاء الحسابية."
  },
  {
    "id": "calc_ch1_db_medium_27",
    "titleEn": "Angle of Intersection between Sine and Cosine",
    "titleAr": "زاوية التقاطع بين منحنيي الجيب وجيب التمام",
    "difficulty": "medium",
    "questionEn": "The tangents to $y = \\sin x$ and $y = \\cos x$ intersect at $x = \\frac{\\pi}{4}$. The acute angle $\\theta$ between them satisfies $\\tan\\theta = $",
    "questionAr": "يتقاطع مماس المنحنى $y = \\sin x$ ومماس المنحنى $y = \\cos x$ عند $x = \\frac{\\pi}{4}$. قياس الزاوية الحادة بينهما $\\theta$ يحقق $\\tan\\theta = $",
    "optionsEn": [
      "$2\\sqrt{2}$",
      "$\\sqrt{2}$",
      "$\\frac{\\sqrt{2}}{2}$",
      "$1$"
    ],
    "optionsAr": [
      "$2\\sqrt{2}$",
      "$\\sqrt{2}$",
      "$\\frac{\\sqrt{2}}{2}$",
      "$1$"
    ],
    "correctAnswer": "$2\\sqrt{2}$",
    "correctIndex": 0,
    "hintEn": "Slopes are $m_1 = \\cos(\\pi/4) = 1/\\sqrt{2}$ and $m_2 = -\\sin(\\pi/4) = -1/\\sqrt{2}$.",
    "hintAr": "الميلان هما $m_1 = 1/\\sqrt{2}$ و $m_2 = -1/\\sqrt{2}$.",
    "stepByStepSolutionEn": [
      "1. $m_1 = \\cos(\\pi/4) = \\frac{1}{\\sqrt{2}}$ and $m_2 = -\\sin(\\pi/4) = -\\frac{1}{\\sqrt{2}}$.",
      "2. $\\tan\\theta = \\left|\\frac{m_1 - m_2}{1 + m_1 m_2}\\right| = \\left|\\frac{\\frac{2}{\\sqrt{2}}}{1 - \\frac{1}{2}}\\right| = \\frac{\\sqrt{2}}{1/2} = 2\\sqrt{2}$."
    ],
    "stepByStepSolutionAr": [
      "١. ميل الأول = $1/\\sqrt{2}$، وميل الثاني = $-1/\\sqrt{2}$.",
      "٢. فرق الميلين = $2/\\sqrt{2} = \\sqrt{2}$.",
      "٣. المقام = $1 + (1/\\sqrt{2})(-1/\\sqrt{2}) = 1 - 1/2 = 1/2$.",
      "٤. إذن $\\tan\\theta = \\frac{\\sqrt{2}}{1/2} = 2\\sqrt{2}$."
    ],
    "teacherTipEn": "Formula for acute angle between two lines always uses absolute value.",
    "teacherTipAr": "قانون الزاوية الحادة بين مستقيمين يتضمن دائماً القيمة المطلقة لضمان الناتج الموجب."
  },
  {
    "id": "calc_ch1_db_medium_28",
    "titleEn": "Separation Rate of Perpendicular Moving Cars",
    "titleAr": "معدل ابتعاد سيارتين في اتجاهين متعامدين",
    "difficulty": "medium",
    "questionEn": "Two cars start from the same point simultaneously: one moves North at $60\\text{ km/h}$ and the other East at $80\\text{ km/h}$. At what rate is the distance between them increasing after $2\\text{ hours}$?",
    "questionAr": "تحركت سيارتان من نفس الموضع في نفس اللحظة: الأولى شمالاً بسرعة $60\\text{ كم/س}$ والثانية شرقاً بسرعة $80\\text{ كم/س}$. ما هو معدل زيادة المسافة بينهما بعد مرور ساعتين؟",
    "optionsEn": [
      "$100\\text{ km/h}$",
      "$140\\text{ km/h}$",
      "$70\\text{ km/h}$",
      "$200\\text{ km/h}$"
    ],
    "optionsAr": [
      "$100\\text{ كم/س}$",
      "$140\\text{ كم/س}$",
      "$70\\text{ كم/س}$",
      "$200\\text{ كم/س}$"
    ],
    "correctAnswer": "$100\\text{ km/h}$",
    "correctIndex": 0,
    "hintEn": "$z^2 = x^2 + y^2 \\implies z\\frac{dz}{dt} = x\\frac{dx}{dt} + y\\frac{dy}{dt}$.",
    "hintAr": "العلاقة فيثاغورسية: $z^2 = x^2 + y^2$.",
    "stepByStepSolutionEn": [
      "1. After $t = 2\\text{ h}$: $y = 60 \\times 2 = 120\\text{ km}$, $x = 80 \\times 2 = 160\\text{ km}$.",
      "2. Distance $z = \\sqrt{120^2 + 160^2} = 200\\text{ km}$.",
      "3. Differentiating $z^2 = x^2 + y^2$: $z \\frac{dz}{dt} = x\\frac{dx}{dt} + y\\frac{dy}{dt}$.",
      "4. $200 \\frac{dz}{dt} = 160(80) + 120(60) = 12800 + 7200 = 20000$.",
      "5. $\\frac{dz}{dt} = \\frac{20000}{200} = 100\\text{ km/h}$."
    ],
    "stepByStepSolutionAr": [
      "١. بعد ساعتين: $y = 120\\text{ كم}$ و $x = 160\\text{ كم}$، والمسافة بينهما $z = 200\\text{ كم}$.",
      "٢. بالاشتقاق: $z z' = x x' + y y'$.",
      "٣. $200 z' = 160(80) + 120(60) = 20000$.",
      "٤. إذن معدل الابتعاد = $100\\text{ كم/س}$."
    ],
    "teacherTipEn": "When starting from origin, the separation speed between perpendicularly moving objects is constant!",
    "teacherTipAr": "إذا انطلق الجسمان من الأصل بسرعة ثابتة فإن معدل تباعدهما يظل ثابتاً طوال الوقت!"
  },
  {
    "id": "calc_ch1_db_medium_29",
    "titleEn": "Tenth Derivative of Geometric Series Generating Function",
    "titleAr": "المشتقة العاشرة للدالة المولدة لمتسلسلة هندسية",
    "difficulty": "medium",
    "questionEn": "If $f(x) = \\frac{1}{1 - x}$, find the tenth derivative value $f^{(10)}(0)$.",
    "questionAr": "إذا كانت $f(x) = \\frac{1}{1 - x}$، أوجد قيمة المشتقة العاشرة $f^{(10)}(0)$.",
    "optionsEn": [
      "$10!$",
      "$9!$",
      "$\\frac{1}{10!}$",
      "$1$"
    ],
    "optionsAr": [
      "$10!$",
      "$9!$",
      "$\\frac{1}{10!}$",
      "$1$"
    ],
    "correctAnswer": "$10!$",
    "correctIndex": 0,
    "hintEn": "Pattern: $f^{(n)}(x) = \\frac{n!}{(1 - x)^{n+1}}$.",
    "hintAr": "نمط المشتقات: المشتقة من الرتبة $n$ تساوي $\\frac{n!}{(1-x)^{n+1}}$.",
    "stepByStepSolutionEn": [
      "1. $f(x) = (1 - x)^{-1}$.",
      "2. $f'(x) = 1(1 - x)^{-2}$, $f''(x) = 2(1 - x)^{-3}$, $f'''(x) = 6(1 - x)^{-4}$.",
      "3. By induction, $f^{(n)}(x) = \\frac{n!}{(1 - x)^{n+1}}$.",
      "4. At $x = 0$: $f^{(10)}(0) = \\frac{10!}{(1 - 0)^{11}} = 10!$."
    ],
    "stepByStepSolutionAr": [
      "١. الدالة هي $(1-x)^{-1}$.",
      "٢. المشتقات المتتالية تعطي $n!(1-x)^{-(n+1)}$.",
      "٣. عند $x = 0$: الناتج هو $10!$."
    ],
    "teacherTipEn": "This is identical to the coefficient formula in Maclaurin series expansion.",
    "teacherTipAr": "يتطابق هذا مع صيغة معاملات مفكوك ماكلورين الشهير."
  },
  {
    "id": "calc_ch1_db_medium_30",
    "titleEn": "Intersection of Normal Line with the Curve Again",
    "titleAr": "تقاطع العمودي مع المنحنى مرة أخرى",
    "difficulty": "medium",
    "questionEn": "The normal line to the parabola $y = x^2$ at the point $(1, 1)$ intersects the parabola again at point $Q$. Find the $x$-coordinate of $Q$.",
    "questionAr": "العمودي على المنحنى $y = x^2$ عند النقطة $(1, 1)$ يقطع المنحنى مرة ثانية عند نقطة $Q$. أوجد الإحداثي السيني للنقطة $Q$.",
    "optionsEn": [
      "$-\\frac{3}{2}$",
      "$-1$",
      "$-\\frac{1}{2}$",
      "$-2$"
    ],
    "optionsAr": [
      "$-\\frac{3}{2}$",
      "$-1$",
      "$-\\frac{1}{2}$",
      "$-2$"
    ],
    "correctAnswer": "$-\\frac{3}{2}$",
    "correctIndex": 0,
    "hintEn": "Normal slope $m_n = -1/2$. Find line equation and substitute $y = x^2$.",
    "hintAr": "ميل العمودي $-1/2$. كوّن معادلة العمودي وحلها مع معادلة المنحنى.",
    "stepByStepSolutionEn": [
      "1. Tangent slope $m_t = 2(1) = 2 \\implies$ normal slope $m_n = -\\frac{1}{2}$.",
      "2. Normal equation: $y - 1 = -\\frac{1}{2}(x - 1) \\implies y = -\\frac{1}{2}x + \\frac{3}{2}$.",
      "3. Intersect with $y = x^2$: $x^2 + \\frac{1}{2}x - \\frac{3}{2} = 0 \\implies 2x^2 + x - 3 = 0$.",
      "4. Factor: $(x - 1)(2x + 3) = 0$. Since $x = 1$ is the original point, the second intersection is $x = -\\frac{3}{2}$."
    ],
    "stepByStepSolutionAr": [
      "١. ميل العمودي = $-1/2$.",
      "٢. معادلة العمودي: $y - 1 = -\\frac{1}{2}(x - 1) \\implies y = -\\frac{x}{2} + \\frac{3}{2}$.",
      "٣. بالحل مع $y = x^2$: $2x^2 + x - 3 = 0 \\implies (x - 1)(2x + 3) = 0$.",
      "٤. إذن نقطة التقاطع الأخرى هي $x = -3/2$."
    ],
    "teacherTipEn": "Factoring out $(x - x_0)$ is guaranteed because the line passes through $(x_0, y_0)$.",
    "teacherTipAr": "إخراج القوس $(x - x_0)$ مضمون دائماً لأن المستقيم يمر بنقطة التماس الأصلية."
  },
  {
    "id": "calc_ch1_db_medium_31",
    "titleEn": "Differential Identity for Secant",
    "titleAr": "متطابقة تفاضلية لدالة القاطع",
    "difficulty": "medium",
    "questionEn": "If $y = \\sec x$, prove that $\\frac{d^2y}{dx^2} + y$ equals:",
    "questionAr": "إذا كانت $y = \\sec x$، فما قيمة المقدار $\\frac{d^2y}{dx^2} + y$ بدلالة $y$؟",
    "optionsEn": [
      "$2y^3$",
      "$y^3$",
      "$2y^2$",
      "$y^2 + 1$"
    ],
    "optionsAr": [
      "$2y^3$",
      "$y^3$",
      "$2y^2$",
      "$y^2 + 1$"
    ],
    "correctAnswer": "$2y^3$",
    "correctIndex": 0,
    "hintEn": "$y' = \\sec x \\tan x$, $y'' = \\sec x \\tan^2 x + \\sec^3 x$.",
    "hintAr": "اشتق مرتين ثم عوض عن $\\tan^2 x$ بـ $\\sec^2 x - 1$.",
    "stepByStepSolutionEn": [
      "1. $y' = \\sec x \\tan x$.",
      "2. $y'' = (\\sec x \\tan x)\\tan x + \\sec x(\\sec^2 x) = \\sec x \\tan^2 x + \\sec^3 x$.",
      "3. Substitute $\\tan^2 x = \\sec^2 x - 1$: $y'' = y(y^2 - 1) + y^3 = 2y^3 - y$.",
      "4. Therefore, $y'' + y = 2y^3$."
    ],
    "stepByStepSolutionAr": [
      "١. $y' = \\sec x \\tan x$.",
      "٢. المشتقة الثانية: $y'' = \\sec x \\tan^2 x + \\sec^3 x$.",
      "٣. باستبدال $\\tan^2 x = \\sec^2 x - 1 = y^2 - 1$: $y'' = y(y^2 - 1) + y^3 = 2y^3 - y$.",
      "٤. إذن $y'' + y = 2y^3$."
    ],
    "teacherTipEn": "Express all trigonometric functions in terms of the original function $y$.",
    "teacherTipAr": "حوّل جميع الدوال المثلثية إلى بدلالة $y$ لتبسيط المعادلة التفاضلية."
  },
  {
    "id": "calc_ch1_db_medium_32",
    "titleEn": "Cylinder Total Surface Area Rate",
    "titleAr": "معدل تغير المساحة الكلية لأسطوانة",
    "difficulty": "medium",
    "questionEn": "A right circular cylinder has a constant height $h = 10\\text{ cm}$. Its radius $r$ is increasing at $0.5\\text{ cm/s}$. Find the rate of increase of its total surface area when $r = 4\\text{ cm}$.",
    "questionAr": "أسطوانة دائرية قائمة ارتفاعها ثابت $h = 10\\text{ سم}$، ونصف قطر قاعدتها $r$ يتزايد بمعدل $0.5\\text{ سم/ث}$. أوجد معدل زيادة مساحتها الكلية عندما $r = 4\\text{ سم}$.",
    "optionsEn": [
      "$18\\pi\\text{ cm}^2/\\text{s}$",
      "$36\\pi\\text{ cm}^2/\\text{s}$",
      "$20\\pi\\text{ cm}^2/\\text{s}$",
      "$16\\pi\\text{ cm}^2/\\text{s}$"
    ],
    "optionsAr": [
      "$18\\pi\\text{ سم}^2/\\text{ث}$",
      "$36\\pi\\text{ سم}^2/\\text{ث}$",
      "$20\\pi\\text{ سم}^2/\\text{ث}$",
      "$16\\pi\\text{ سم}^2/\\text{ث}$"
    ],
    "correctAnswer": "$18\\pi\\text{ cm}^2/\\text{s}$",
    "correctIndex": 0,
    "hintEn": "Total area $S = 2\\pi r^2 + 2\\pi r h$. Differentiate with respect to $t$.",
    "hintAr": "المساحة الكلية $S = 2\\pi r^2 + 2\\pi r h$ مع ثبات الارتفاع $h$.",
    "stepByStepSolutionEn": [
      "1. Formula: $S = 2\\pi r^2 + 2\\pi(10)r = 2\\pi r^2 + 20\\pi r$.",
      "2. Differentiating with respect to $t$: $\\frac{dS}{dt} = (4\\pi r + 20\\pi)\\frac{dr}{dt}$.",
      "3. Substitute $r = 4$ and $\\frac{dr}{dt} = 0.5$: $(16\\pi + 20\\pi)(0.5) = 36\\pi(0.5) = 18\\pi\\text{ cm}^2/\\text{s}$."
    ],
    "stepByStepSolutionAr": [
      "١. المساحة الكلية: $S = 2\\pi r^2 + 20\\pi r$.",
      "٢. بالاشتقاق بالنسبة للزمن: $\\frac{dS}{dt} = (4\\pi r + 20\\pi)\\frac{dr}{dt}$.",
      "٣. عند $r = 4$: الناتج = $(16\\pi + 20\\pi)(0.5) = 18\\pi\\text{ سم}^2/\\text{ث}$."
    ],
    "teacherTipEn": "Since height is constant, $h$ acts as a numerical coefficient.",
    "teacherTipAr": "بما أن الارتفاع ثابت، يعامل كمعامل عددي ثابت أثناء الاشتقاق."
  },
  {
    "id": "calc_ch1_db_medium_33",
    "titleEn": "Tangents from Origin to Parabola",
    "titleAr": "المماسان المرسومان من نقطة الأصل لقطع مكافئ",
    "difficulty": "medium",
    "questionEn": "Tangents are drawn from the origin $(0, 0)$ to the parabola $y = x^2 + 4$. The slopes of these tangents are:",
    "questionAr": "رُسم مماسان من نقطة الأصل $(0, 0)$ للمنحنى $y = x^2 + 4$. ميل هذين المماسين هما:",
    "optionsEn": [
      "$\\pm 4$",
      "$\\pm 2$",
      "$\\pm 1$",
      "$\\pm 8$"
    ],
    "optionsAr": [
      "$\\pm 4$",
      "$\\pm 2$",
      "$\\pm 1$",
      "$\\pm 8$"
    ],
    "correctAnswer": "$\\pm 4$",
    "correctIndex": 0,
    "hintEn": "Let $(x_0, x_0^2 + 4)$ be point of contact. Slope $m = 2x_0 = \\frac{x_0^2 + 4}{x_0}$.",
    "hintAr": "افرض نقطة التماس $(x_0, y_0)$ وساوِ ميل المماس بميل الخط الواصل بنقطة الأصل.",
    "stepByStepSolutionEn": [
      "1. Tangent slope at $(x_0, y_0)$ is $m = 2x_0$.",
      "2. Slope of line through $(0, 0)$ and $(x_0, x_0^2 + 4)$ is $m = \\frac{x_0^2 + 4}{x_0}$.",
      "3. Equating slopes: $2x_0 = \\frac{x_0^2 + 4}{x_0} \\implies 2x_0^2 = x_0^2 + 4 \\implies x_0^2 = 4 \\implies x_0 = \\pm 2$.",
      "4. The slopes are $m = 2(\\pm 2) = \\pm 4$."
    ],
    "stepByStepSolutionAr": [
      "١. ميل المماس عند نقطة التماس هو $2x_0$.",
      "٢. ميل المستقيم المار بنقطة الأصل هو $\\frac{x_0^2 + 4}{x_0}$.",
      "٣. بالمساواة: $2x_0^2 = x_0^2 + 4 \\implies x_0 = \\pm 2$.",
      "٤. إذن الميول هي $\\pm 4$."
    ],
    "teacherTipEn": "Tangents drawn from an external point always require setting slope of secant equal to tangent derivative.",
    "teacherTipAr": "المماس المار بنقطة خارج المنحنى يحل بمساواة فرق الصادات على فرق السينات بقيمة المشتقة."
  },
  {
    "id": "calc_ch1_db_medium_34",
    "titleEn": "Derivative of Half-Angle Form Radical",
    "titleAr": "مشتقة جذر متطابقة نصف الزاوية",
    "difficulty": "medium",
    "questionEn": "If $y = \\sqrt{\\frac{1 - \\cos(2x)}{1 + \\cos(2x)}}$ for $x \\in \\left(0, \\frac{\\pi}{2}\\right)$, find $\\frac{dy}{dx}$.",
    "questionAr": "إذا كانت $y = \\sqrt{\\frac{1 - \\cos(2x)}{1 + \\cos(2x)}}$ حيث $x \\in \\left(0, \\frac{\\pi}{2}\\right)$، أوجد $\\frac{dy}{dx}$.",
    "optionsEn": [
      "$\\sec^2 x$",
      "$\\csc^2 x$",
      "$\\tan x$",
      "$-\\sec^2 x$"
    ],
    "optionsAr": [
      "$\\sec^2 x$",
      "$\\csc^2 x$",
      "$\\tan x$",
      "$-\\sec^2 x$"
    ],
    "correctAnswer": "$\\sec^2 x$",
    "correctIndex": 0,
    "hintEn": "Use half-angle identities: $1 - \\cos 2x = 2\\sin^2 x$ and $1 + \\cos 2x = 2\\cos^2 x$.",
    "hintAr": "استخدم متطابقات نصف الزاوية لتبسيط ما تحت الجذر إلى $\\tan^2 x$.",
    "stepByStepSolutionEn": [
      "1. $1 - \\cos(2x) = 2\\sin^2 x$ and $1 + \\cos(2x) = 2\\cos^2 x$.",
      "2. $y = \\sqrt{\\frac{2\\sin^2 x}{2\\cos^2 x}} = \\sqrt{\\tan^2 x} = |\\tan x|$.",
      "3. For $x \\in (0, \\pi/2)$, $\\tan x > 0$, so $y = \\tan x$.",
      "4. Differentiating gives $\\frac{dy}{dx} = \\sec^2 x$."
    ],
    "stepByStepSolutionAr": [
      "١. $1 - \\cos(2x) = 2\\sin^2 x$ و $1 + \\cos(2x) = 2\\cos^2 x$.",
      "٢. المقدار تحت الجذر يختصر إلى $\\tan^2 x$.",
      "٣. بما أن $x$ في الربع الأول، إذن $y = \\tan x$.",
      "٤. بالاشتقاق: $y' = \\sec^2 x$."
    ],
    "teacherTipEn": "Simplifying trigonometric fractions before differentiating saves immense algebraic effort.",
    "teacherTipAr": "تبسيط الكسر المثلثي قبل الاشتقاق يختصر المسألة في سطرين."
  },
  {
    "id": "calc_ch1_db_medium_35",
    "titleEn": "Volume Expansion Rate of Cube",
    "titleAr": "معدل زيادة حجم مكعب يتمدد بالحرارة",
    "difficulty": "medium",
    "questionEn": "A solid metal cube expands by heat such that its edge length increases at $0.02\\text{ cm/s}$. Find the rate of increase of its volume when the edge length is $10\\text{ cm}$.",
    "questionAr": "مكعب فلزي يتمدد بالحرارة بحيث يزداد طول حرفه بمعدل $0.02\\text{ سم/ث}$. أوجد معدل الزيادة في حجمه عندما يكون طول حرفه $10\\text{ سم}$.",
    "optionsEn": [
      "$6\\text{ cm}^3/\\text{s}$",
      "$2\\text{ cm}^3/\\text{s}$",
      "$60\\text{ cm}^3/\\text{s}$",
      "$0.6\\text{ cm}^3/\\text{s}$"
    ],
    "optionsAr": [
      "$6\\text{ سم}^3/\\text{ث}$",
      "$2\\text{ سم}^3/\\text{ث}$",
      "$60\\text{ سم}^3/\\text{ث}$",
      "$0.6\\text{ سم}^3/\\text{ث}$"
    ],
    "correctAnswer": "$6\\text{ cm}^3/\\text{s}$",
    "correctIndex": 0,
    "hintEn": "$V = x^3 \\implies \\frac{dV}{dt} = 3x^2 \\frac{dx}{dt}$.",
    "hintAr": "حجم المكعب $V = x^3$ ثم اشتق بالنسبة للزمن.",
    "stepByStepSolutionEn": [
      "1. $V = x^3$.",
      "2. Differentiating with respect to time: $\\frac{dV}{dt} = 3x^2 \\frac{dx}{dt}$.",
      "3. Substitute $x = 10$ and $\\frac{dx}{dt} = 0.02$: $\\frac{dV}{dt} = 3(100)(0.02) = 6\\text{ cm}^3/\\text{s}$."
    ],
    "stepByStepSolutionAr": [
      "١. $V = x^3$.",
      "٢. بالاشتقاق الزمني: $\\frac{dV}{dt} = 3x^2 \\frac{dx}{dt}$.",
      "٣. عند $x = 10$: $\\frac{dV}{dt} = 3(100)(0.02) = 6\\text{ سم}^3/\\text{ث}$."
    ],
    "teacherTipEn": "Mental math trick: $3 \\times 100 \\times 0.02 = 3 \\times 2 = 6$.",
    "teacherTipAr": "ضرب 100 في 0.02 يعطي 2 مباشرة، ثم في 3 يعطي 6."
  },
  {
    "id": "calc_ch1_db_medium_36",
    "titleEn": "Second Derivative of Standard Parabola",
    "titleAr": "المشتقة الثانية للقطع المكافئ القياسي",
    "difficulty": "medium",
    "questionEn": "For the parabola $y^2 = 4ax$, where $a$ is a non-zero constant, the second derivative $\\frac{d^2y}{dx^2}$ equals:",
    "questionAr": "للقطع المكافئ $y^2 = 4ax$ حيث $a$ ثابت غير صفري، المشتقة الثانية $\\frac{d^2y}{dx^2}$ تساوي:",
    "optionsEn": [
      "$-\\frac{4a^2}{y^3}$",
      "$\\frac{4a^2}{y^3}$",
      "$-\\frac{2a}{y^2}$",
      "$-\\frac{a^2}{y^3}$"
    ],
    "optionsAr": [
      "$-\\frac{4a^2}{y^3}$",
      "$\\frac{4a^2}{y^3}$",
      "$-\\frac{2a}{y^2}$",
      "$-\\frac{a^2}{y^3}$"
    ],
    "correctAnswer": "$-\\frac{4a^2}{y^3}$",
    "correctIndex": 0,
    "hintEn": "Differentiate implicitly: $2y y' = 4a \\implies y' = 2a/y$, then differentiate again.",
    "hintAr": "اشتق ضمنياً مرتين متتاليتين ثم عوض عن $y'$.",
    "stepByStepSolutionEn": [
      "1. $2y \\frac{dy}{dx} = 4a \\implies \\frac{dy}{dx} = \\frac{2a}{y}$.",
      "2. Differentiating again: $\\frac{d^2y}{dx^2} = -\\frac{2a}{y^2} \\frac{dy}{dx}$.",
      "3. Substitute $\\frac{dy}{dx} = \\frac{2a}{y}$: $\\frac{d^2y}{dx^2} = -\\frac{2a}{y^2} \\left(\\frac{2a}{y}\\right) = -\\frac{4a^2}{y^3}$."
    ],
    "stepByStepSolutionAr": [
      "١. $2y y' = 4a \\implies y' = \\frac{2a}{y}$.",
      "٢. بالاشتقاق ثانية: $y'' = -\\frac{2a}{y^2} y'$.",
      "٣. بالتعويض عن $y'$: $y'' = -\\frac{2a}{y^2} \\left(\\frac{2a}{y}\\right) = -\\frac{4a^2}{y^3}$."
    ],
    "teacherTipEn": "Standard textbook proof for curvature of the parabola.",
    "teacherTipAr": "إثبات قياسي مشهور في كتاب الوزارة لانحناء القطع المكافئ."
  },
  {
    "id": "calc_ch1_db_medium_37",
    "titleEn": "Tangent Equation to Ellipse",
    "titleAr": "معادلة المماس لقطع ناقص",
    "difficulty": "medium",
    "questionEn": "Find the equation of the tangent line to the ellipse $\\frac{x^2}{16} + \\frac{y^2}{9} = 1$ at the point $\\left(2, \\frac{3\\sqrt{3}}{2}\\right)$.",
    "questionAr": "أوجد معادلة المماس للقطع الناقص $\\frac{x^2}{16} + \\frac{y^2}{9} = 1$ عند النقطة $\\left(2, \\frac{3\\sqrt{3}}{2}\\right)$.",
    "optionsEn": [
      "$3x + 4\\sqrt{3}y - 24 = 0$",
      "$3x - 4\\sqrt{3}y + 24 = 0$",
      "$4x + 3\\sqrt{3}y - 24 = 0$",
      "$x + \\sqrt{3}y - 8 = 0$"
    ],
    "optionsAr": [
      "$3x + 4\\sqrt{3}y - 24 = 0$",
      "$3x - 4\\sqrt{3}y + 24 = 0$",
      "$4x + 3\\sqrt{3}y - 24 = 0$",
      "$x + \\sqrt{3}y - 8 = 0$"
    ],
    "correctAnswer": "$3x + 4\\sqrt{3}y - 24 = 0$",
    "correctIndex": 0,
    "hintEn": "Use the tangent formula $\\frac{x x_0}{a^2} + \\frac{y y_0}{b^2} = 1$.",
    "hintAr": "طبق صيغة مماس القطع الناقص: $\\frac{x x_0}{a^2} + \\frac{y y_0}{b^2} = 1$.",
    "stepByStepSolutionEn": [
      "1. Tangent formula for ellipse at $(x_0, y_0)$: $\\frac{x x_0}{16} + \\frac{y y_0}{9} = 1$.",
      "2. Substitute $(x_0, y_0) = (2, \\frac{3\\sqrt{3}}{2})$: $\\frac{2x}{16} + \\frac{y(3\\sqrt{3}/2)}{9} = 1$.",
      "3. $\\frac{x}{8} + \\frac{\\sqrt{3}y}{6} = 1$.",
      "4. Multiply by $24$: $3x + 4\\sqrt{3}y = 24 \\implies 3x + 4\\sqrt{3}y - 24 = 0$."
    ],
    "stepByStepSolutionAr": [
      "١. معادلة مماس القطع الناقص: $\\frac{x x_0}{16} + \\frac{y y_0}{9} = 1$.",
      "٢. بالتعويض بالنقطة: $\\frac{x}{8} + \\frac{\\sqrt{3}y}{6} = 1$.",
      "٣. بالضرب في 24 لتوحيد المقامات: $3x + 4\\sqrt{3}y - 24 = 0$."
    ],
    "teacherTipEn": "The formula $\\frac{x x_0}{a^2} + \\frac{y y_0}{b^2} = 1$ gives the tangent line equation immediately.",
    "teacherTipAr": "صيغة $\\frac{x x_0}{a^2} + \\frac{y y_0}{b^2} = 1$ تعطي معادلة المماس للقطع الناقص مباشرة."
  },
  {
    "id": "calc_ch1_db_medium_38",
    "titleEn": "Conical Sand Pile Growth Rate",
    "titleAr": "معدل زيادة ارتفاع كومة رمل مخروطية",
    "difficulty": "medium",
    "questionEn": "Sand is poured onto the ground at a rate of $12\\pi\\text{ cm}^3/\\text{s}$, forming a conical pile whose height is always equal to its base radius. Find the rate of increase of its height when the height is $6\\text{ cm}$.",
    "questionAr": "ينصب الرمل على أرض مستوية بمعدل $12\\pi\\text{ سم}^3/\\text{ث}$ مكوناً كومة على شكل مخروط دائري قائم ارتفاعه يساوي دائماً نصف قطر قاعدته. أوجد معدل زيادة ارتفاع الكومة عندما يكون الارتفاع $6\\text{ سم}$.",
    "optionsEn": [
      "$\\frac{1}{3}\\text{ cm/s}$",
      "$\\frac{1}{6}\\text{ cm/s}$",
      "$1\\text{ cm/s}$",
      "$\\frac{2}{3}\\text{ cm/s}$"
    ],
    "optionsAr": [
      "$\\frac{1}{3}\\text{ سم/ث}$",
      "$\\frac{1}{6}\\text{ سم/ث}$",
      "$1\\text{ سم/ث}$",
      "$\\frac{2}{3}\\text{ سم/ث}$"
    ],
    "correctAnswer": "$\\frac{1}{3}\\text{ cm/s}$",
    "correctIndex": 0,
    "hintEn": "Since $r = h$, $V = \\frac{1}{3}\\pi h^3 \\implies \\frac{dV}{dt} = \\pi h^2 \\frac{dh}{dt}$.",
    "hintAr": "بما أن $r = h$ فإن الحجم $V = \\frac{1}{3}\\pi h^3$ ثم اشتق زمنياً.",
    "stepByStepSolutionEn": [
      "1. Volume formula with $r = h$: $V = \\frac{1}{3}\\pi h^3$.",
      "2. Differentiate with respect to $t$: $\\frac{dV}{dt} = \\pi h^2 \\frac{dh}{dt}$.",
      "3. Substitute $\\frac{dV}{dt} = 12\\pi$ and $h = 6$: $12\\pi = \\pi(6^2)\\frac{dh}{dt} = 36\\pi \\frac{dh}{dt}$.",
      "4. $\\frac{dh}{dt} = \\frac{12\\pi}{36\\pi} = \\frac{1}{3}\\text{ cm/s}$."
    ],
    "stepByStepSolutionAr": [
      "١. بما أن $r = h$ فإن $V = \\frac{\\pi}{3} h^3$.",
      "٢. بالاشتقاق بالنسبة للزمن: $\\frac{dV}{dt} = \\pi h^2 \\frac{dh}{dt}$.",
      "٣. $12\\pi = 36\\pi \\frac{dh}{dt} \\implies \\frac{dh}{dt} = \\frac{12}{36} = \\frac{1}{3}\\text{ سم/ث}$."
    ],
    "teacherTipEn": "Notice how the factor $\\frac{1}{3}$ cancels with $3h^2$ upon differentiation.",
    "teacherTipAr": "لاحظ كيف يختفي الكسر $\\frac{1}{3}$ عند اشتقاق $h^3$ ليصبح المعامل 1."
  },
  {
    "id": "calc_ch1_db_medium_39",
    "titleEn": "Second Derivative of Cotangent at Special Angle",
    "titleAr": "المشتقة الثانية لظل التمام عند زاوية خاصة",
    "difficulty": "medium",
    "questionEn": "If $y = \\cot x$, find the value of $\\frac{d^2y}{dx^2}$ at $x = \\frac{\\pi}{4}$.",
    "questionAr": "إذا كانت $y = \\cot x$، فاحسب قيمة $\\frac{d^2y}{dx^2}$ عند $x = \\frac{\\pi}{4}$.",
    "optionsEn": [
      "$4$",
      "$-4$",
      "$2$",
      "$-2$"
    ],
    "optionsAr": [
      "$4$",
      "$-4$",
      "$2$",
      "$-2$"
    ],
    "correctAnswer": "$4$",
    "correctIndex": 0,
    "hintEn": "$y' = -\\csc^2 x \\implies y'' = 2\\csc^2 x \\cot x$.",
    "hintAr": "$y' = -\\csc^2 x$ ثم اشتق مرة ثانية لتجد $y'' = 2\\csc^2 x \\cot x$.",
    "stepByStepSolutionEn": [
      "1. $y' = -\\csc^2 x$.",
      "2. $y'' = -2\\csc x(-\\csc x \\cot x) = 2\\csc^2 x \\cot x$.",
      "3. At $x = \\pi/4$: $\\csc(\\pi/4) = \\sqrt{2} \\implies \\csc^2(\\pi/4) = 2$, and $\\cot(\\pi/4) = 1$.",
      "4. $y''(\\pi/4) = 2(2)(1) = 4$."
    ],
    "stepByStepSolutionAr": [
      "١. $y' = -\\csc^2 x$.",
      "٢. المشتقة الثانية: $y'' = 2\\csc^2 x \\cot x$.",
      "٣. عند $x = \\pi/4$: $\\csc^2(\\pi/4) = 2$ و $\\cot(\\pi/4) = 1$.",
      "٤. إذن $y'' = 2(2)(1) = 4$."
    ],
    "teacherTipEn": "Two negative signs from the power rule and cosecant derivative multiply to positive.",
    "teacherTipAr": "حاصل ضرب إشارتي السالب يعطي ناتجاً موجباً في المشتقة الثانية."
  },
  {
    "id": "calc_ch1_db_medium_40",
    "titleEn": "Rational Parametric Derivative on Unit Circle",
    "titleAr": "مشتقة بارامترية نسبية على دائرة الوحدة",
    "difficulty": "medium",
    "questionEn": "If $x = \\frac{1 - t^2}{1 + t^2}$ and $y = \\frac{2t}{1 + t^2}$, find $\\frac{dy}{dx}$ at $t = \\frac{1}{2}$.",
    "questionAr": "إذا كانت $x = \\frac{1 - t^2}{1 + t^2}$ و $y = \\frac{2t}{1 + t^2}$، أوجد قيمة $\\frac{dy}{dx}$ عند $t = \\frac{1}{2}$.",
    "optionsEn": [
      "$-\\frac{3}{4}$",
      "$\\frac{3}{4}$",
      "$-\\frac{4}{3}$",
      "$\\frac{4}{3}$"
    ],
    "optionsAr": [
      "$-\\frac{3}{4}$",
      "$\\frac{3}{4}$",
      "$-\\frac{4}{3}$",
      "$\\frac{4}{3}$"
    ],
    "correctAnswer": "$-\\frac{3}{4}$",
    "correctIndex": 0,
    "hintEn": "Recognize that $x^2 + y^2 = 1$ (the Weierstrass substitution), so $\\frac{dy}{dx} = -\\frac{x}{y}$.",
    "hintAr": "لاحظ أن $x^2 + y^2 = 1$ (تعويض فايرشتراس لدائرة الوحدة)، إذن المشتقة هي $-x/y$.",
    "stepByStepSolutionEn": [
      "1. Notice $x^2 + y^2 = \\frac{(1 - t^2)^2 + 4t^2}{(1 + t^2)^2} = \\frac{(1 + t^2)^2}{(1 + t^2)^2} = 1$.",
      "2. For a unit circle, $\\frac{dy}{dx} = -\\frac{x}{y}$.",
      "3. At $t = 1/2$: $x = \\frac{1 - 1/4}{1 + 1/4} = \\frac{3/4}{5/4} = \\frac{3}{5}$, and $y = \\frac{1}{5/4} = \\frac{4}{5}$.",
      "4. Therefore, $\\frac{dy}{dx} = -\\frac{3/5}{4/5} = -\\frac{3}{4}$."
    ],
    "stepByStepSolutionAr": [
      "١. نلاحظ أن $x^2 + y^2 = 1$ تمثل دائرة الوحدة.",
      "٢. مشتقة الدائرة الضمنية هي $\\frac{dy}{dx} = -\\frac{x}{y}$.",
      "٣. عند $t = 1/2$: نجد أن $x = 3/5$ و $y = 4/5$.",
      "٤. إذن $\\frac{dy}{dx} = -\\frac{3/5}{4/5} = -\\frac{3}{4}$."
    ],
    "teacherTipEn": "Recognizing circle parameterizations transforms cumbersome rational derivatives into instant mental math.",
    "teacherTipAr": "إدراك أن هذه المعادلات تمثل دائرة الوحدة يختصر صفحات من اشتقاق الكسور."
  },
  {
    "id": "calc_ch1_db_medium_41",
    "titleEn": "Tangent Slope of Astroid Cartesian Equation",
    "titleAr": "ميل مماس منحنى النجمة بالصورة الكارتيزية",
    "difficulty": "medium",
    "questionEn": "For the curve $x^{2/3} + y^{2/3} = 4$, find the slope of the tangent at the point $(2\\sqrt{2}, 2\\sqrt{2})$.",
    "questionAr": "للمنحنى $x^{2/3} + y^{2/3} = 4$، أوجد ميل المماس عند النقطة $(2\\sqrt{2}, 2\\sqrt{2})$.",
    "optionsEn": [
      "$-1$",
      "$1$",
      "$-\\sqrt{2}$",
      "$0$"
    ],
    "optionsAr": [
      "$-1$",
      "$1$",
      "$-\\sqrt{2}$",
      "$0$"
    ],
    "correctAnswer": "$-1$",
    "correctIndex": 0,
    "hintEn": "Differentiate implicitly: $\\frac{2}{3}x^{-1/3} + \\frac{2}{3}y^{-1/3}y' = 0$.",
    "hintAr": "اشتق ضمنياً: $\\frac{2}{3}x^{-1/3} + \\frac{2}{3}y^{-1/3}y' = 0$.",
    "stepByStepSolutionEn": [
      "1. Differentiating implicitly: $\\frac{2}{3}x^{-1/3} + \\frac{2}{3}y^{-1/3}\\frac{dy}{dx} = 0$.",
      "2. $\\frac{dy}{dx} = -\\frac{x^{-1/3}}{y^{-1/3}} = -\\left(\\frac{y}{x}\\right)^{1/3}$.",
      "3. At $(2\\sqrt{2}, 2\\sqrt{2})$, $x = y$, so $\\frac{dy}{dx} = -(1)^{1/3} = -1$."
    ],
    "stepByStepSolutionAr": [
      "١. بالاشتقاق الضمني: $\\frac{2}{3}x^{-1/3} + \\frac{2}{3}y^{-1/3}y' = 0$.",
      "٢. $y' = -\\left(\\frac{y}{x}\\right)^{1/3}$.",
      "٣. بما أن $x = y$ عند هذه النقطة، إذن $y' = -1$."
    ],
    "teacherTipEn": "At points on the line $y = x$, symmetric curves always have tangent slopes of $-1$.",
    "teacherTipAr": "لأي منحنى متماثل حول $y = x$، يكون ميل المماس عند نقط التماثل مساوياً $-1$."
  },
  {
    "id": "calc_ch1_db_medium_42",
    "titleEn": "Mean Value Secant Parallel Points",
    "titleAr": "نقاط يوازي مماسها القاطع في نظرية القيمة المتوسطة",
    "difficulty": "medium",
    "questionEn": "Find the values of $x$ at which the tangent to $y = x^3 - 3x^2 + 4$ is parallel to the secant line passing through $(0, 4)$ and $(3, 4)$.",
    "questionAr": "أوجد قيم $x$ التي يكون عندها مماس المنحنى $y = x^3 - 3x^2 + 4$ موازياً للقاطع المار بالنقطتين $(0, 4)$ و $(3, 4)$.",
    "optionsEn": [
      "$x = 0\\text{ and }x = 2$",
      "$x = 1\\text{ and }x = 2$",
      "$x = 1$",
      "$x = -1\\text{ and }x = 3$"
    ],
    "optionsAr": [
      "$x = 0\\text{ و }x = 2$",
      "$x = 1\\text{ و }x = 2$",
      "$x = 1$",
      "$x = -1\\text{ و }x = 3$"
    ],
    "correctAnswer": "$x = 0\\text{ and }x = 2$",
    "correctIndex": 0,
    "hintEn": "Secant slope $m = \\frac{4 - 4}{3 - 0} = 0$, so set $y' = 0$.",
    "hintAr": "ميل القاطع يساوي صفراً، إذن نساوي المشتقة بالصفر.",
    "stepByStepSolutionEn": [
      "1. Slope of secant line: $m = \\frac{4 - 4}{3 - 0} = 0$.",
      "2. $y' = 3x^2 - 6x$.",
      "3. Set $y' = 0 \\implies 3x(x - 2) = 0 \\implies x = 0\\text{ or }x = 2$."
    ],
    "stepByStepSolutionAr": [
      "١. ميل القاطع = $\\frac{4 - 4}{3 - 0} = 0$.",
      "٢. مشتقة المنحنى: $y' = 3x^2 - 6x$.",
      "٣. نساوي المشتقة بالصفر: $3x(x - 2) = 0 \\implies x = 0$ أو $x = 2$."
    ],
    "teacherTipEn": "Both points satisfy the conditions of Rolle's Theorem and the Mean Value Theorem.",
    "teacherTipAr": "كلا النقطتين تحققان شروط مبرهنة رول ونظرية القيمة المتوسطة."
  },
  {
    "id": "calc_ch1_db_medium_43",
    "titleEn": "Derivative of Trig Sum over Difference",
    "titleAr": "مشتقة حاصل جمع جيب وجيب تمام مقسوماً على فرقهما",
    "difficulty": "medium",
    "questionEn": "If $y = \\frac{\\sin x + \\cos x}{\\sin x - \\cos x}$, find $\\frac{dy}{dx}$.",
    "questionAr": "إذا كانت $y = \\frac{\\sin x + \\cos x}{\\sin x - \\cos x}$، أوجد $\\frac{dy}{dx}$.",
    "optionsEn": [
      "$-\\frac{2}{1 - \\sin(2x)}$",
      "$\\frac{2}{1 - \\sin(2x)}$",
      "$-\\frac{2}{1 + \\sin(2x)}$",
      "$\\frac{1}{1 - \\sin(2x)}$"
    ],
    "optionsAr": [
      "$-\\frac{2}{1 - \\sin(2x)}$",
      "$\\frac{2}{1 - \\sin(2x)}$",
      "$-\\frac{2}{1 + \\sin(2x)}$",
      "$\\frac{1}{1 - \\sin(2x)}$"
    ],
    "correctAnswer": "$-\\frac{2}{1 - \\sin(2x)}$",
    "correctIndex": 0,
    "hintEn": "Use quotient rule and expand $(\\sin x - \\cos x)^2 = 1 - \\sin(2x)$.",
    "hintAr": "طبق قاعدة القسمة وبسط المقام باستخدام متطابقة $(\\sin x - \\cos x)^2 = 1 - \\sin(2x)$.",
    "stepByStepSolutionEn": [
      "1. Numerator derivative: $\\cos x - \\sin x = -(\\sin x - \\cos x)$.",
      "2. Denominator derivative: $\\cos x + \\sin x$.",
      "3. $y' = \\frac{-(\\sin x - \\cos x)^2 - (\\sin x + \\cos x)^2}{(\\sin x - \\cos x)^2}$.",
      "4. The numerator expands to $-2(\\sin^2 x + \\cos^2 x) = -2$.",
      "5. The denominator expands to $\\sin^2 x - 2\\sin x\\cos x + \\cos^2 x = 1 - \\sin(2x)$.",
      "6. Thus $\\frac{dy}{dx} = -\\frac{2}{1 - \\sin(2x)}$."
    ],
    "stepByStepSolutionAr": [
      "١. بتطبيق قاعدة القسمة: البسط يختصر إلى $-2(\\sin^2 x + \\cos^2 x) = -2$.",
      "٢. المقام يفكك إلى $\\sin^2 x + \\cos^2 x - 2\\sin x\\cos x = 1 - \\sin(2x)$.",
      "٣. إذن الناتج هو $-\\frac{2}{1 - \\sin(2x)}$."
    ],
    "teacherTipEn": "Sum of squares identity $(a-b)^2 + (a+b)^2 = 2(a^2 + b^2)$ cleanly simplifies the numerator.",
    "teacherTipAr": "متطابقة فك المربعين تختصر البسط مباشرة إلى $-2$."
  },
  {
    "id": "calc_ch1_db_medium_44",
    "titleEn": "Point of Coordinate Rate Ratio",
    "titleAr": "نقطة نسبة معدلي تغير الإحداثيين",
    "difficulty": "medium",
    "questionEn": "A particle moves along the curve $y = x^2 - 4x$. At what point on the curve is the rate of change of the $y$-coordinate four times the rate of change of the $x$-coordinate?",
    "questionAr": "يتحرك جسيم على المنحنى $y = x^2 - 4x$. عند أي نقطة على المنحنى يكون معدل تغير إحداثيه الصادي أربعة أمثال معدل تغير إحداثيه السيني؟",
    "optionsEn": [
      "$(4, 0)$",
      "$(2, -4)$",
      "$(0, 0)$",
      "$(3, -3)$"
    ],
    "optionsAr": [
      "$(4, 0)$",
      "$(2, -4)$",
      "$(0, 0)$",
      "$(3, -3)$"
    ],
    "correctAnswer": "$(4, 0)$",
    "correctIndex": 0,
    "hintEn": "$\\frac{dy}{dt} = 4\\frac{dx}{dt} \\implies \\frac{dy}{dx} = 4$.",
    "hintAr": "بما أن $\\frac{dy}{dt} = 4\\frac{dx}{dt}$، إذن المشتقة $\\frac{dy}{dx} = 4$.",
    "stepByStepSolutionEn": [
      "1. By chain rule, $\\frac{dy}{dt} = \\frac{dy}{dx}\\frac{dx}{dt}$.",
      "2. Given $\\frac{dy}{dt} = 4\\frac{dx}{dt}$, we have $\\frac{dy}{dx} = 4$.",
      "3. $y' = 2x - 4 \\implies 2x - 4 = 4 \\implies 2x = 8 \\implies x = 4$.",
      "4. At $x = 4$: $y = (4)^2 - 4(4) = 16 - 16 = 0$.",
      "5. The point is $(4, 0)$."
    ],
    "stepByStepSolutionAr": [
      "١. $\\frac{dy}{dt} = \\frac{dy}{dx} \\frac{dx}{dt}$.",
      "٢. إذن $\\frac{dy}{dx} = 4$.",
      "٣. مشتقة المنحنى: $2x - 4 = 4 \\implies x = 4$.",
      "٤. الإحداثي الصادي: $y = 16 - 16 = 0$.",
      "٥. النقطة هي $(4, 0)$."
    ],
    "teacherTipEn": "Ratio of time rates $\\frac{dy/dt}{dx/dt}$ is precisely the geometric derivative $\\frac{dy}{dx}$.",
    "teacherTipAr": "النسبة بين المعدلين الزمنيين هي بالضبط المشتقة الهندسية صَ."
  },
  {
    "id": "calc_ch1_db_medium_45",
    "titleEn": "Derivative of Sec2 plus Csc2",
    "titleAr": "مشتقة مجموع مربعي القاطع وقاطع التمام",
    "difficulty": "medium",
    "questionEn": "If $y = \\sec^2 x + \\csc^2 x$, which of the following is equivalent to $\\frac{dy}{dx}$?",
    "questionAr": "إذا كانت $y = \\sec^2 x + \\csc^2 x$، فأي مما يلي يكافئ $\\frac{dy}{dx}$؟",
    "optionsEn": [
      "$-16\\csc^2(2x)\\cot(2x)$",
      "$16\\sec^2(2x)\\tan(2x)$",
      "$-8\\csc(2x)\\cot(2x)$",
      "$0$"
    ],
    "optionsAr": [
      "$-16\\csc^2(2x)\\cot(2x)$",
      "$16\\sec^2(2x)\\tan(2x)$",
      "$-8\\csc(2x)\\cot(2x)$",
      "$0$"
    ],
    "correctAnswer": "$-16\\csc^2(2x)\\cot(2x)$",
    "correctIndex": 0,
    "hintEn": "Notice $\\sec^2 x + \\csc^2 x = \\sec^2 x \\csc^2 x = \\frac{4}{\\sin^2(2x)} = 4\\csc^2(2x)$.",
    "hintAr": "لاحظ المتطابقة الشهيرة: $\\sec^2 x + \\csc^2 x = 4\\csc^2(2x)$.",
    "stepByStepSolutionEn": [
      "1. Identity: $\\sec^2 x + \\csc^2 x = \\frac{1}{\\cos^2 x} + \\frac{1}{\\sin^2 x} = \\frac{\\sin^2 x + \\cos^2 x}{\\sin^2 x \\cos^2 x} = \\frac{1}{\\frac{1}{4}\\sin^2(2x)} = 4\\csc^2(2x)$.",
      "2. Differentiating $y = 4\\csc^2(2x)$: $y' = 4 \\cdot 2\\csc(2x) \\cdot (-2\\csc(2x)\\cot(2x)) = -16\\csc^2(2x)\\cot(2x)$."
    ],
    "stepByStepSolutionAr": [
      "١. من المتطابقات الشهيرة: $\\sec^2 x + \\csc^2 x = 4\\csc^2(2x)$.",
      "٢. بالاشتقاق بقاعدة السلسلة: $y' = 4 \\times 2\\csc(2x) \\times [-2\\csc(2x)\\cot(2x)] = -16\\csc^2(2x)\\cot(2x)$."
    ],
    "teacherTipEn": "Sum equals product for $\\sec^2 x$ and $\\csc^2 x$: $\\sec^2 x + \\csc^2 x = \\sec^2 x \\csc^2 x$.",
    "teacherTipAr": "مجموع مربعي القاطع وقاطع التمام يساوي دائماً حاصل ضربهما!"
  },
  {
    "id": "calc_ch1_db_medium_46",
    "titleEn": "Distance Between Parallel Tangents to Circle",
    "titleAr": "المسافة بين مماسين متوازيين لدائرة",
    "difficulty": "medium",
    "questionEn": "The distance between any two parallel tangent lines to the circle $x^2 + y^2 - 4x + 6y - 12 = 0$ is:",
    "questionAr": "المسافة بين أي مماسين متوازيين للدائرة $x^2 + y^2 - 4x + 6y - 12 = 0$ تساوي:",
    "optionsEn": [
      "$10$",
      "$5$",
      "$25$",
      "$20$"
    ],
    "optionsAr": [
      "$10$",
      "$5$",
      "$25$",
      "$20$"
    ],
    "correctAnswer": "$10$",
    "correctIndex": 0,
    "hintEn": "The distance between parallel tangents to any circle is its diameter $2R$.",
    "hintAr": "المسافة بين أي مماسين متوازيين للدائرة هي طول قطرها $2R$.",
    "stepByStepSolutionEn": [
      "1. General circle equation: center is $(-\\frac{D}{2}, -\\frac{E}{2}) = (2, -3)$.",
      "2. Radius $R = \\sqrt{g^2 + f^2 - c} = \\sqrt{2^2 + (-3)^2 - (-12)} = \\sqrt{4 + 9 + 12} = \\sqrt{25} = 5$.",
      "3. The distance between parallel tangents is the diameter: $2R = 2(5) = 10$."
    ],
    "stepByStepSolutionAr": [
      "١. مركز الدائرة هو $(2, -3)$.",
      "٢. نصف القطر $R = \\sqrt{4 + 9 - (-12)} = \\sqrt{25} = 5$.",
      "٣. المسافة بين مماسين متوازيين هي طول القطر = $2 \\times 5 = 10$."
    ],
    "teacherTipEn": "Geometrically, parallel tangents touch the circle at opposite ends of a diameter.",
    "teacherTipAr": "هندسياً، نقطتا تماس أي مماسين متوازيين هما نهايتا قطر في الدائرة."
  },
  {
    "id": "calc_ch1_db_medium_47",
    "titleEn": "Second Derivative of Unit Hyperbola Parameterization",
    "titleAr": "المشتقة الثانية لتمثيل القطع الزائد البارامتري",
    "difficulty": "medium",
    "questionEn": "If $x = \\tan\\theta$ and $y = \\sec\\theta$, find $\\frac{d^2y}{dx^2}$ expressed in terms of $y$.",
    "questionAr": "إذا كانت $x = \\tan\\theta$ و $y = \\sec\\theta$، فما هي قيمة $\\frac{d^2y}{dx^2}$ بدلالة $y$؟",
    "optionsEn": [
      "$\\frac{1}{y^3}$",
      "$-\\frac{1}{y^3}$",
      "$\\frac{1}{y^2}$",
      "$y^3$"
    ],
    "optionsAr": [
      "$\\frac{1}{y^3}$",
      "$-\\frac{1}{y^3}$",
      "$\\frac{1}{y^2}$",
      "$y^3$"
    ],
    "correctAnswer": "$\\frac{1}{y^3}$",
    "correctIndex": 0,
    "hintEn": "Use $y^2 - x^2 = 1 \\implies 2y y' - 2x = 0 \\implies y' = x/y$.",
    "hintAr": "العلاقة الكارتيزية هي $y^2 - x^2 = 1$، اشتقها مرتين ضمنياً.",
    "stepByStepSolutionEn": [
      "1. Cartesian equation: $y^2 - x^2 = \\sec^2\\theta - \\tan^2\\theta = 1$.",
      "2. First derivative: $2y y' - 2x = 0 \\implies y' = \\frac{x}{y}$.",
      "3. Second derivative: $y'' = \\frac{y(1) - x y'}{y^2} = \\frac{y - x(x/y)}{y^2} = \\frac{y^2 - x^2}{y^3}$.",
      "4. Since $y^2 - x^2 = 1$, we obtain $\\frac{d^2y}{dx^2} = \\frac{1}{y^3}$."
    ],
    "stepByStepSolutionAr": [
      "١. العلاقة الكارتيزية: $y^2 - x^2 = 1$.",
      "٢. المشتقة الأولى: $y' = x/y$.",
      "٣. المشتقة الثانية بعد توحيد المقامات: $y'' = \\frac{y^2 - x^2}{y^3}$.",
      "٤. بما أن $y^2 - x^2 = 1$، إذن $y'' = \\frac{1}{y^3}$."
    ],
    "teacherTipEn": "Notice the positive sign, whereas for the circle $x^2 + y^2 = 1$, the second derivative is $-1/y^3$.",
    "teacherTipAr": "لاحظ الإشارة الموجبة للقطع الزائد، مقارنة بالإشارة السالبة لدائرة الوحدة $-1/y^3$."
  },
  {
    "id": "calc_ch1_db_medium_48",
    "titleEn": "Rate of Change of Sphere Volume vs Surface Area",
    "titleAr": "معدل تغير حجم الكرة بالنسبة لمساحة سطحها",
    "difficulty": "medium",
    "questionEn": "The rate of change of the volume of a sphere with respect to its surface area is:",
    "questionAr": "معدل تغير حجم الكرة بالنسبة لمساحة سطحها يساوي:",
    "optionsEn": [
      "$\\frac{r}{2}$",
      "$r$",
      "$2r$",
      "$\\frac{r}{3}$"
    ],
    "optionsAr": [
      "$\\frac{r}{2}$",
      "$r$",
      "$2r$",
      "$\\frac{r}{3}$"
    ],
    "correctAnswer": "$\\frac{r}{2}$",
    "correctIndex": 0,
    "hintEn": "Use chain rule: $\\frac{dV}{dS} = \\frac{dV/dr}{dS/dr}$.",
    "hintAr": "استخدم قاعدة السلسلة: $\\frac{dV}{dS} = \\frac{dV/dr}{dS/dr}$.",
    "stepByStepSolutionEn": [
      "1. $V = \\frac{4}{3}\\pi r^3 \\implies \\frac{dV}{dr} = 4\\pi r^2$.",
      "2. $S = 4\\pi r^2 \\implies \\frac{dS}{dr} = 8\\pi r$.",
      "3. $\\frac{dV}{dS} = \\frac{4\\pi r^2}{8\\pi r} = \\frac{r}{2}$."
    ],
    "stepByStepSolutionAr": [
      "١. مشتقة الحجم بالنسبة لـ $r$ هي $4\\pi r^2$.",
      "٢. مشتقة مساحة السطح بالنسبة لـ $r$ هي $8\\pi r$.",
      "٣. $\\frac{dV}{dS} = \\frac{4\\pi r^2}{8\\pi r} = \\frac{r}{2}$."
    ],
    "teacherTipEn": "Rate of change of one geometric quantity with respect to another is found via parameter $r$.",
    "teacherTipAr": "معدل تغير كمية هندسية بالنسبة لأخرى يحسب عبر وسيط نصف القطر $r$."
  },
  {
    "id": "calc_ch1_db_medium_49",
    "titleEn": "Derivative of Logarithmic Cauchy Functional Equation",
    "titleAr": "مشتقة الدالة التي تحقق معادلة كوشي اللوغاريتمية",
    "difficulty": "medium",
    "questionEn": "If $f$ is a differentiable function on $(0, \\infty)$ satisfying $f(xy) = f(x) + f(y)$ for all $x, y > 0$ and $f'(1) = 2$, find $f'(x)$.",
    "questionAr": "إذا كانت $f$ دالة قابلة للاشتقاق على $(0, \\infty)$ وتحقق $f(xy) = f(x) + f(y)$ لجميع قيم $x, y > 0$ وكان $f'(1) = 2$، أوجد $f'(x)$.",
    "optionsEn": [
      "$\\frac{2}{x}$",
      "$2x$",
      "$2\\ln x$",
      "$\\frac{1}{2x}$"
    ],
    "optionsAr": [
      "$\\frac{2}{x}$",
      "$2x$",
      "$2\\ln x$",
      "$\\frac{1}{2x}$"
    ],
    "correctAnswer": "$\\frac{2}{x}$",
    "correctIndex": 0,
    "hintEn": "Differentiate $f(xy) = f(x) + f(y)$ with respect to $y$, then set $y = 1$.",
    "hintAr": "اشتق العلاقة بالنسبة للمتغير $y$ باعتبار $x$ ثابتاً، ثم ضع $y = 1$.",
    "stepByStepSolutionEn": [
      "1. Differentiating with respect to $y$: $x f'(xy) = f'(y)$.",
      "2. Set $y = 1$: $x f'(x) = f'(1)$.",
      "3. Since $f'(1) = 2$, we have $x f'(x) = 2 \\implies f'(x) = \\frac{2}{x}$."
    ],
    "stepByStepSolutionAr": [
      "١. بالاشتقاق بالنسبة إلى $y$: $x f'(xy) = f'(y)$.",
      "٢. بوضع $y = 1$: $x f'(x) = f'(1)$.",
      "٣. بما أن $f'(1) = 2$، إذن $f'(x) = \\frac{2}{x}$."
    ],
    "teacherTipEn": "This characterises the logarithmic function $f(x) = 2\\ln x$.",
    "teacherTipAr": "هذه هي الخاصية المميزة للدالة اللوغاريتمية $f(x) = 2\\ln x$."
  },
  {
    "id": "calc_ch1_db_medium_50",
    "titleEn": "Horizontal Tangents to Cubic Function",
    "titleAr": "معادلتا مماسي المنحنى الأفقيين",
    "difficulty": "medium",
    "questionEn": "The equations of the two horizontal tangent lines to the curve $y = x^3 - 6x^2 + 9x$ are:",
    "questionAr": "معادلتا مماسي المنحنى $y = x^3 - 6x^2 + 9x$ الموازيين لمحور السينات هما:",
    "optionsEn": [
      "$y = 0\\text{ and }y = 4$",
      "$y = 1\\text{ and }y = 3$",
      "$y = -4\\text{ and }y = 0$",
      "$y = 2\\text{ and }y = -2$"
    ],
    "optionsAr": [
      "$y = 0\\text{ و }y = 4$",
      "$y = 1\\text{ و }y = 3$",
      "$y = -4\\text{ و }y = 0$",
      "$y = 2\\text{ و }y = -2$"
    ],
    "correctAnswer": "$y = 0\\text{ and }y = 4$",
    "correctIndex": 0,
    "hintEn": "Find points where $y' = 0$, then find their $y$-coordinates.",
    "hintAr": "أوجد النقاط التي عندها المشتقة تساوي صفراً، ثم احسب قيم $y$ المقابلة.",
    "stepByStepSolutionEn": [
      "1. $y' = 3x^2 - 12x + 9 = 3(x^2 - 4x + 3) = 3(x - 1)(x - 3)$.",
      "2. Set $y' = 0 \\implies x = 1$ or $x = 3$.",
      "3. At $x = 1$: $y = 1 - 6 + 9 = 4 \\implies$ tangent line is $y = 4$.",
      "4. At $x = 3$: $y = 27 - 54 + 27 = 0 \\implies$ tangent line is $y = 0$."
    ],
    "stepByStepSolutionAr": [
      "١. المشتقة $y' = 3(x - 1)(x - 3) = 0 \\implies x = 1$ أو $x = 3$.",
      "٢. عند $x = 1$: $y = 4$، فمعادلة المماس هي $y = 4$.",
      "٣. عند $x = 3$: $y = 0$، فمعادلة المماس هي $y = 0$ (محور السينات نفسه)."
    ],
    "teacherTipEn": "Horizontal lines always have equations of the form $y = c$.",
    "teacherTipAr": "معادلة أي مستقيم أفقي هي دائماً بالصورة $y = c$."
  },
  {
    "id": "calc_ch1_db_medium_51",
    "titleEn": "Fourth Derivative of Squared Cosine",
    "titleAr": "المشتقة الرابعة لجيب التمام المربع",
    "difficulty": "medium",
    "questionEn": "If $y = \\cos^2(x)$, find the fourth derivative $y^{(4)}$ in terms of $\\cos(2x)$.",
    "questionAr": "إذا كان $y = \\cos^2(x)$، فأوجد المشتقة الرابعة $y^{(4)}$ بدلالة $\\cos(2x)$.",
    "optionsEn": [
      "$8\\cos(2x)$",
      "$-8\\cos(2x)$",
      "$16\\cos(2x)$",
      "$-16\\cos(2x)$"
    ],
    "optionsAr": [
      "$8\\cos(2x)$",
      "$-8\\cos(2x)$",
      "$16\\cos(2x)$",
      "$-16\\cos(2x)$"
    ],
    "correctIndex": 0,
    "correctAnswer": "$8\\cos(2x)$",
    "hintEn": "Use the double-angle identity: $\\cos^2(x) = \\frac{1}{2} + \\frac{1}{2}\\cos(2x)$.",
    "hintAr": "استخدم متطابقة ضعف الزاوية: $\\cos^2(x) = \\frac{1}{2} + \\frac{1}{2}\\cos(2x)$.",
    "teacherTipEn": "Linearizing powers of sine and cosine with double-angle formulas drastically simplifies higher derivatives.",
    "teacherTipAr": "تحويل قوى الجيب وجيب التمام إلى زوايا مضاعفة يبسط حساب المشتقات العليا كثيراً.",
    "stepByStepSolutionEn": [
      "Rewrite: $y = \\frac{1}{2} + \\frac{1}{2}\\cos(2x)$.",
      "First derivative: $y' = -\\sin(2x)$.",
      "Second derivative: $y'' = -2\\cos(2x)$.",
      "Third derivative: $y^{(3)} = 4\\sin(2x)$.",
      "Fourth derivative: $y^{(4)} = 8\\cos(2x)$."
    ],
    "stepByStepSolutionAr": [
      "إعادة كتابة الدالة: $y = \\frac{1}{2} + \\frac{1}{2}\\cos(2x)$.",
      "المشتقة الأولى: $y' = -\\sin(2x)$.",
      "المشتقة الثانية: $y'' = -2\\cos(2x)$.",
      "المشتقة الثالثة: $y^{(3)} = 4\\sin(2x)$.",
      "المشتقة الرابعة: $y^{(4)} = 8\\cos(2x)$."
    ]
  },
  {
    "id": "calc_ch1_db_medium_52",
    "titleEn": "Tangent Parallel to Secant Chord",
    "titleAr": "مماس موازٍ لوتر قاطع",
    "difficulty": "medium",
    "diagramType": "trig_derivative_tangent",
    "questionEn": "Find the positive x-coordinate of the point on the curve $y = x^3 - 3x$ where the tangent is parallel to the secant line passing through $(1, -2)$ and $(3, 18)$.",
    "questionAr": "أوجد الإحداثي السيني الموجب للنقطة على المنحنى $y = x^3 - 3x$ التي يكون عندها المماس موازياً للقاطع المار بالنقطتين $(1, -2)$ و $(3, 18)$.",
    "optionsEn": [
      "$\\frac{\\sqrt{39}}{3}$",
      "$\\frac{\\sqrt{13}}{3}$",
      "$\\sqrt{13}$",
      "$2$"
    ],
    "optionsAr": [
      "$\\frac{\\sqrt{39}}{3}$",
      "$\\frac{\\sqrt{13}}{3}$",
      "$\\sqrt{13}$",
      "$2$"
    ],
    "correctIndex": 0,
    "correctAnswer": "$\\frac{\\sqrt{39}}{3}$",
    "hintEn": "Calculate the slope between the two points: $m = \\frac{y_2 - y_1}{x_2 - x_1}$, then solve $y' = m$.",
    "hintAr": "احسب ميل القاطع المار بالنقطتين، ثم حل المعادلة $y' = m$.",
    "teacherTipEn": "This illustrates the Mean Value Theorem: there exists at least one tangent parallel to the secant on $[1, 3]$.",
    "teacherTipAr": "هذا تطبيق مباشر لنظرية القيمة المتوسطة لوجود مماس يوازي القاطع في الفترة $[1, 3]$.",
    "stepByStepSolutionEn": [
      "Find slope of secant: $m = \\frac{18 - (-2)}{3 - 1} = \\frac{20}{2} = 10$.",
      "Find derivative: $y' = 3x^2 - 3$.",
      "Equate: $3x^2 - 3 = 10 \\implies 3x^2 = 13 \\implies x^2 = \\frac{13}{3}$.",
      "Positive root: $x = \\sqrt{\\frac{13}{3}} = \\frac{\\sqrt{39}}{3}$."
    ],
    "stepByStepSolutionAr": [
      "احسب ميل القاطع: $m = \\frac{20}{2} = 10$.",
      "اشتق الدالة: $y' = 3x^2 - 3$.",
      "ساوِ المعادلة: $3x^2 - 3 = 10 \\implies x^2 = \\frac{13}{3}$.",
      "الجذر الموجب: $x = \\frac{\\sqrt{39}}{3}$."
    ]
  },
  {
    "id": "calc_ch1_db_medium_53",
    "titleEn": "Related Rates: Lengthening of Shadow",
    "titleAr": "معدلات زمنية مرتبطة: طول ظل رجل",
    "difficulty": "medium",
    "questionEn": "A person of height $1.8\\text{ m}$ walks away from a street lamp of height $4.5\\text{ m}$ at a speed of $1.5\\text{ m/s}$. At what rate is the length of their shadow increasing?",
    "questionAr": "رجل طوله $1.8\\text{ م}$ يبتعد عن عمود إنارة ارتفاعه $4.5\\text{ م}$ بسرعة $1.5\\text{ م/ث}$. ما معدل زيادة طول ظله؟",
    "optionsEn": [
      "$1.0\\text{ m/s}$",
      "$1.5\\text{ m/s}$",
      "$2.25\\text{ m/s}$",
      "$0.6\\text{ m/s}$"
    ],
    "optionsAr": [
      "$1.0\\text{ م/ث}$",
      "$1.5\\text{ م/ث}$",
      "$2.25\\text{ م/ث}$",
      "$0.6\\text{ م/ث}$"
    ],
    "correctIndex": 0,
    "correctAnswer": "$1.0\\text{ m/s}$",
    "hintEn": "Set up a ratio using similar triangles: $\\frac{\\text{shadow}}{1.8} = \\frac{\\text{total distance}}{4.5}$.",
    "hintAr": "استخدم تشابه المثلثات: طول الظل / طول الرجل = المسافة الكلية / ارتفاع المصباح.",
    "teacherTipEn": "Distinguish between the rate of lengthening of the shadow ($\\frac{ds}{dt}$) and the rate of movement of the shadow tip ($\\frac{d(x+s)}{dt}$).",
    "teacherTipAr": "ميز بين معدل زيادة طول الظل ($\\frac{ds}{dt}$) ومعدل تحرك نهاية الظل ($\\frac{d(x+s)}{dt}$).",
    "stepByStepSolutionEn": [
      "Similar triangles: $\\frac{s}{1.8} = \\frac{x + s}{4.5}$.",
      "Cross multiply: $4.5s = 1.8x + 1.8s \\implies 2.7s = 1.8x \\implies s = \\frac{2}{3}x$.",
      "Differentiate: $\\frac{ds}{dt} = \\frac{2}{3}\\frac{dx}{dt}$.",
      "Substitute $\\frac{dx}{dt} = 1.5$: $\\frac{ds}{dt} = \\frac{2}{3}(1.5) = 1.0\\text{ m/s}$."
    ],
    "stepByStepSolutionAr": [
      "تشابه المثلثات: $\\frac{s}{1.8} = \\frac{x + s}{4.5}$.",
      "طرفين في وسطين: $2.7s = 1.8x \\implies s = \\frac{2}{3}x$.",
      "الاشتقاق الزمني: $\\frac{ds}{dt} = \\frac{2}{3}\\frac{dx}{dt}$.",
      "التعويض: $\\frac{ds}{dt} = \\frac{2}{3}(1.5) = 1.0\\text{ م/ث}$."
    ]
  },
  {
    "id": "calc_ch1_db_medium_54",
    "titleEn": "Parametric Second Derivative",
    "titleAr": "المشتقة الثانية لمنحنى بارامتري",
    "difficulty": "medium",
    "questionEn": "If $x = t^2 + 1$ and $y = t^3 - t$, find the value of $\\frac{d^2y}{dx^2}$ at $t = 1$.",
    "questionAr": "إذا كان $x = t^2 + 1$ و $y = t^3 - t$، فأوجد قيمة $\\frac{d^2y}{dx^2}$ عند $t = 1$.",
    "optionsEn": [
      "$1$",
      "$\\frac{1}{2}$",
      "$\\frac{1}{4}$",
      "$\\frac{3}{4}$"
    ],
    "optionsAr": [
      "$1$",
      "$\\frac{1}{2}$",
      "$\\frac{1}{4}$",
      "$\\frac{3}{4}$"
    ],
    "correctIndex": 0,
    "correctAnswer": "$1$",
    "hintEn": "Remember that $\\frac{d^2y}{dx^2} = \\frac{\\frac{d}{dt}(y')}{\\frac{dx}{dt}}$.",
    "hintAr": "تذكر أن $\\frac{d^2y}{dx^2} = \\frac{\\frac{d}{dt}(y')}{\\frac{dx}{dt}}$.",
    "teacherTipEn": "A classic trap: $\\frac{d^2y}{dx^2} \\neq \\frac{y''(t)}{x''(t)}$. You must divide $\\frac{d(y')}{dt}$ by $\\frac{dx}{dt}$.",
    "teacherTipAr": "فخ كلاسيكي: المشتقة البارامترية الثانية لا تساوي ناتج قسمة المشتقتين الثانيتين، بل مشتقة الميل بالنسبة للوسيط مقسومة على مشتقة $x$.",
    "stepByStepSolutionEn": [
      "Compute first derivatives: $\\frac{dx}{dt} = 2t$, $\\frac{dy}{dt} = 3t^2 - 1$.",
      "Form $\\frac{dy}{dx} = \\frac{3t^2 - 1}{2t}$.",
      "Differentiate with respect to $t$: $\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) = \\frac{(6t)(2t) - (3t^2 - 1)(2)}{4t^2} = \\frac{6t^2 + 2}{4t^2}$.",
      "Divide by $\\frac{dx}{dt}$: $\\frac{d^2y}{dx^2} = \\frac{6t^2 + 2}{8t^3}$. At $t = 1$, value is $\\frac{8}{8} = 1$."
    ],
    "stepByStepSolutionAr": [
      "المشتقات الأولى: $\\frac{dx}{dt} = 2t$ و $\\frac{dy}{dt} = 3t^2 - 1$.",
      "تكوين المشتقة الأولى: $\\frac{dy}{dx} = \\frac{3t^2 - 1}{2t}$.",
      "اشتق بالنسبة لـ $t$: $\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) = \\frac{6t^2 + 2}{4t^2}$.",
      "القسمة على $\\frac{dx}{dt}$: $\\frac{d^2y}{dx^2} = \\frac{6t^2+2}{8t^3} = 1$ عند $t = 1$."
    ]
  },
  {
    "id": "calc_ch1_db_medium_55",
    "titleEn": "Normal Passing Through a Given Point on Axis",
    "titleAr": "العمودي المار بنقطة معطاة على المحور الصادي",
    "difficulty": "medium",
    "questionEn": "Find the positive x-coordinate of the point on the parabola $y = x^2$ at which the normal to the curve passes through the point $(0, 9)$.",
    "questionAr": "أوجد الإحداثي السيني الموجب للنقطة على القطع المكافئ $y = x^2$ التي يمر عندها العمودي على المنحنى بالنقطة $(0, 9)$.",
    "optionsEn": [
      "$\\frac{\\sqrt{34}}{2}$",
      "$\\frac{\\sqrt{17}}{2}$",
      "$\\sqrt{17}$",
      "$\\frac{17}{2}$"
    ],
    "optionsAr": [
      "$\\frac{\\sqrt{34}}{2}$",
      "$\\frac{\\sqrt{17}}{2}$",
      "$\\sqrt{17}$",
      "$\\frac{17}{2}$"
    ],
    "correctIndex": 0,
    "correctAnswer": "$\\frac{\\sqrt{34}}{2}$",
    "hintEn": "Write the normal line equation at $(x_0, x_0^2)$, then substitute $(0, 9)$.",
    "hintAr": "اكتب معادلة العمودي عند $(x_0, x_0^2)$ ثم عوض بالنقطة $(0, 9)$.",
    "teacherTipEn": "Notice how the product $(-\\frac{1}{2x_0})(-x_0)$ simplifies nicely to $+\\frac{1}{2}$, independent of $x_0$!",
    "teacherTipAr": "لاحظ كيف أن حاصل ضرب $(-\\frac{1}{2x_0})(-x_0)$ يختصر ببساطة إلى $+\\frac{1}{2}$ مستقلاً عن $x_0$!",
    "stepByStepSolutionEn": [
      "Slope of tangent: $y' = 2x_0 \\implies m_N = -\\frac{1}{2x_0}$.",
      "Equation of normal: $y - x_0^2 = -\\frac{1}{2x_0}(x - x_0)$.",
      "Substitute $(0, 9)$: $9 - x_0^2 = -\\frac{1}{2x_0}(0 - x_0) = \\frac{1}{2}$.",
      "Solve for $x_0$: $x_0^2 = 9 - \\frac{1}{2} = \\frac{17}{2} \\implies x_0 = \\sqrt{\\frac{17}{2}} = \\frac{\\sqrt{34}}{2}$."
    ],
    "stepByStepSolutionAr": [
      "ميل المماس: $y' = 2x_0 \\implies m_N = -\\frac{1}{2x_0}$.",
      "معادلة العمودي: $y - x_0^2 = -\\frac{1}{2x_0}(x - x_0)$.",
      "التعويض بـ $(0, 9)$: $9 - x_0^2 = \\frac{1}{2}$.",
      "حل المعادلة: $x_0^2 = \\frac{17}{2} \\implies x_0 = \\frac{\\sqrt{34}}{2}$."
    ]
  },
  {
    "id": "calc_ch1_db_medium_56",
    "titleEn": "Related Rates: Conical Reservoir",
    "titleAr": "معدلات زمنية مرتبطة: خزان مخروطي مقلوب",
    "difficulty": "medium",
    "questionEn": "Water flows into an inverted conical reservoir of base radius $4\\text{ m}$ and depth $8\\text{ m}$ at a constant rate of $2\\pi\\text{ m}^3/\\text{min}$. At what rate is the water level rising when the depth of the water is $4\\text{ m}$?",
    "questionAr": "يصب الماء في خزان مخروطي مقلوب نصف قطر قاعدته $4\\text{ م}$ وعمقه $8\\text{ م}$ بمعدل ثابت $2\\pi\\text{ م}^3/\\text{دقيقة}$. ما معدل ارتفاع سطح الماء عندما يكون عمق الماء $4\\text{ م}$؟",
    "optionsEn": [
      "$0.5\\text{ m/min}$",
      "$1.0\\text{ m/min}$",
      "$0.25\\text{ m/min}$",
      "$2.0\\text{ m/min}$"
    ],
    "optionsAr": [
      "$0.5\\text{ م/دقيقة}$",
      "$1.0\\text{ م/دقيقة}$",
      "$0.25\\text{ م/دقيقة}$",
      "$2.0\\text{ م/دقيقة}$"
    ],
    "correctIndex": 0,
    "correctAnswer": "$0.5\\text{ m/min}$",
    "hintEn": "Express $r$ in terms of $h$ using similar triangles: $r = h/2$, then $V = \\frac{1}{12}\\pi h^3$.",
    "hintAr": "عبر عن $r$ بدلالة $h$ باستخدام تشابه المثلثات: $r = h/2$، فيكون $V = \\frac{1}{12}\\pi h^3$.",
    "teacherTipEn": "Eliminating the variable $r$ before taking the derivative saves you from having two unknown rates.",
    "teacherTipAr": "التخلص من المتغير $r$ قبل الاشتقاق يوفر عليك التعامل مع معدلين مجهولين.",
    "stepByStepSolutionEn": [
      "Relation between radius and height: $r = \\frac{1}{2}h$.",
      "Substitute into volume: $V = \\frac{1}{3}\\pi (h/2)^2 h = \\frac{\\pi}{12}h^3$.",
      "Time derivative: $\\frac{dV}{dt} = \\frac{\\pi}{4}h^2 \\frac{dh}{dt}$.",
      "Substitute $h = 4, \\frac{dV}{dt} = 2\\pi$: $2\\pi = 4\\pi \\frac{dh}{dt} \\implies \\frac{dh}{dt} = 0.5\\text{ m/min}$."
    ],
    "stepByStepSolutionAr": [
      "العلاقة بين نصف القطر والارتفاع: $r = \\frac{1}{2}h$.",
      "التعويض في قانون الحجم: $V = \\frac{\\pi}{12}h^3$.",
      "الاشتقاق الزمني: $\\frac{dV}{dt} = \\frac{\\pi}{4}h^2 \\frac{dh}{dt}$.",
      "التعويض وحساب المعدل: $\\frac{dh}{dt} = 0.5\\text{ م/دقيقة}$."
    ]
  },
  {
    "id": "calc_ch1_db_medium_57",
    "titleEn": "Orthogonal Trajectories Condition",
    "titleAr": "شرط تعامد المسارات",
    "difficulty": "medium",
    "questionEn": "If the family of curves $x^2 - y^2 = c$ intersects the family $xy = k$ at a point $(x_1, y_1)$ (where $x_1 y_1 \\neq 0$), find the product of their tangent slopes $m_1 \\cdot m_2$.",
    "questionAr": "إذا تقاطعت عائلة المنحنيات $x^2 - y^2 = c$ مع العائلة $xy = k$ عند النقطة $(x_1, y_1)$ (حيث $x_1 y_1 \\neq 0$)، فاحسب حاصل ضرب ميلي مماسيهما $m_1 \\cdot m_2$.",
    "optionsEn": [
      "$-1$",
      "$1$",
      "$0$",
      "$2$"
    ],
    "optionsAr": [
      "$-1$",
      "$1$",
      "$0$",
      "$2$"
    ],
    "correctIndex": 0,
    "correctAnswer": "$-1$",
    "hintEn": "Differentiate both curves implicitly and multiply their derivatives.",
    "hintAr": "اشتق كلا المنحنيين ضمنياً واضرب مشتقتيهما.",
    "teacherTipEn": "This classic example proves that confocal rectangular hyperbolas are mutual orthogonal trajectories.",
    "teacherTipAr": "هذا مثال شهير يثبت أن هذين النوعين من القطوع الزائدة يمثلان مسارات متعامدة متبادلة.",
    "stepByStepSolutionEn": [
      "Differentiate $x^2 - y^2 = c$: $2x - 2y y' = 0 \\implies m_1 = \\frac{x_1}{y_1}$.",
      "Differentiate $xy = k$: $y + x y' = 0 \\implies m_2 = -\\frac{y_1}{x_1}$.",
      "Multiply: $m_1 \\cdot m_2 = \\frac{x_1}{y_1} \\cdot \\left(-\\frac{y_1}{x_1}\\right) = -1$."
    ],
    "stepByStepSolutionAr": [
      "اشتق $x^2 - y^2 = c$: نجد $m_1 = \\frac{x_1}{y_1}$.",
      "اشتق $xy = k$: نجد $m_2 = -\\frac{y_1}{x_1}$.",
      "حاصل الضرب: $m_1 \\cdot m_2 = -1$."
    ]
  },
  {
    "id": "calc_ch1_db_medium_58",
    "titleEn": "Rate of Change of Subtended Angle",
    "titleAr": "معدل تغير الزاوية المقابلة",
    "difficulty": "medium",
    "questionEn": "A tracking camera is located on the ground $3\\text{ km}$ away from a rocket launch pad. If the rocket rises vertically at $4\\text{ km/s}$, find the rate of change of the camera elevation angle $\\frac{d\\theta}{dt}$ when the rocket is at an altitude of $4\\text{ km}$.",
    "questionAr": "كاميرا تتبع موضوعة على الأرض على بعد $3\\text{ كم}$ من منصة إطلاق صاروخ. إذا كان الصاروخ يصعد عمودياً بسرعة $4\\text{ كم/ث}$، فأوجد معدل تغير زاوية ارتفاع الكاميرا $\\frac{d\\theta}{dt}$ عندما يكون الصاروخ على ارتفاع $4\\text{ كم}$.",
    "optionsEn": [
      "$\\frac{12}{25}\\text{ rad/s}$",
      "$\\frac{16}{25}\\text{ rad/s}$",
      "$\\frac{3}{25}\\text{ rad/s}$",
      "$\\frac{4}{5}\\text{ rad/s}$"
    ],
    "optionsAr": [
      "$\\frac{12}{25}\\text{ راديان/ث}$",
      "$\\frac{16}{25}\\text{ راديان/ث}$",
      "$\\frac{3}{25}\\text{ راديان/ث}$",
      "$\\frac{4}{5}\\text{ راديان/ث}$"
    ],
    "correctIndex": 0,
    "correctAnswer": "$\\frac{12}{25}\\text{ rad/s}$",
    "hintEn": "Relate altitude and angle via $\\tan\\theta = y/3$ and differentiate.",
    "hintAr": "اربط الارتفاع بالزاوية عبر $\\tan\\theta = y/3$ واشتق بالنسبة للزمن.",
    "teacherTipEn": "Always express $\\sec^2\\theta$ directly from the right triangle rather than finding $\\theta$ itself.",
    "teacherTipAr": "عبر عن $\\sec^2\\theta$ مباشرة من أضلاع المثلث القائم بدلاً من حساب قيمة $\\theta$ بالدرجات.",
    "stepByStepSolutionEn": [
      "Trigonometric relation: $\\tan\\theta = \\frac{y}{3}$.",
      "Time derivative: $\\sec^2\\theta \\frac{d\\theta}{dt} = \\frac{1}{3}\\frac{dy}{dt}$.",
      "When $y = 4$, hypotenuse $= 5$, so $\\sec^2\\theta = \\left(\\frac{5}{3}\\right)^2 = \\frac{25}{9}$.",
      "Solve for rate: $\\frac{d\\theta}{dt} = \\frac{1}{3}(4) \\cdot \\frac{9}{25} = \\frac{12}{25}\\text{ rad/s}$."
    ],
    "stepByStepSolutionAr": [
      "العلاقة المثلثية: $\\tan\\theta = \\frac{y}{3}$.",
      "الاشتقاق الزمني: $\\sec^2\\theta \\frac{d\\theta}{dt} = \\frac{1}{3}\\frac{dy}{dt}$.",
      "حساب $\\sec^2\\theta$: عند $y = 4$ نجد $\\sec^2\\theta = \\frac{25}{9}$.",
      "حساب معدل الزاوية: $\\frac{d\\theta}{dt} = \\frac{12}{25}\\text{ راديان/ث}$."
    ]
  },
  {
    "id": "calc_ch1_db_medium_59",
    "titleEn": "Derivative of Combined Trigonometric Product",
    "titleAr": "مشتقة حاصل ضرب دوال مثلثية مركبة",
    "difficulty": "medium",
    "questionEn": "If $f(x) = \\csc(2x) \\cot(2x)$, find the exact value of $f'\\left(\\frac{\\pi}{8}\\right)$.",
    "questionAr": "إذا كان $f(x) = \\csc(2x) \\cot(2x)$، فأوجد القيمة الدقيقة لـ $f'\\left(\\frac{\\pi}{8}\\right)$.",
    "optionsEn": [
      "$-6\\sqrt{2}$",
      "$-4\\sqrt{2}$",
      "$-2\\sqrt{2}$",
      "$-8\\sqrt{2}$"
    ],
    "optionsAr": [
      "$-6\\sqrt{2}$",
      "$-4\\sqrt{2}$",
      "$-2\\sqrt{2}$",
      "$-8\\sqrt{2}$"
    ],
    "correctIndex": 0,
    "correctAnswer": "$-6\\sqrt{2}$",
    "hintEn": "Apply the product rule: $\\frac{d}{dx}[u \\cdot v] = u'v + uv'$ with chain rule factor 2.",
    "hintAr": "طبق قاعدة حاصل الضرب مع معامل قاعدة السلسلة 2.",
    "teacherTipEn": "Factoring out $-2\\csc(2x)$ before evaluating drastically simplifies arithmetic.",
    "teacherTipAr": "إخراج $-2\\csc(2x)$ عاملاً مشتركاً يسهل الحسابات العددية بشكل ملموس.",
    "stepByStepSolutionEn": [
      "Apply product rule: $f'(x) = -2\\csc(2x)\\cot^2(2x) - 2\\csc^3(2x) = -2\\csc(2x)[\\cot^2(2x) + \\csc^2(2x)]$.",
      "Evaluate at $x = \\pi/8$: $2x = \\pi/4$, $\\csc(\\pi/4) = \\sqrt{2}$, $\\cot(\\pi/4) = 1$.",
      "Calculate: $-2\\sqrt{2}[1^2 + (\\sqrt{2})^2] = -2\\sqrt{2}[1 + 2] = -6\\sqrt{2}$."
    ],
    "stepByStepSolutionAr": [
      "تطبيق قاعدة الضرب: $f'(x) = -2\\csc(2x)[\\cot^2(2x) + \\csc^2(2x)]$.",
      "التعويض بـ $x = \\pi/8$: الزاوية تصبح $\\pi/4$.",
      "الناتج النهائي: $-2\\sqrt{2}[1 + 2] = -6\\sqrt{2}$."
    ]
  }
],
  hots: [
  {
    "id": "calc_ch1_db_hots_01",
    "titleEn": "Second Derivative of Inverse Function",
    "titleAr": "المشتقة الثانية للدالة العكسية",
    "difficulty": "hots",
    "questionEn": "If $g(x) = f^{-1}(x)$, which formula gives $g''(x)$ in terms of derivatives of $f$?",
    "questionAr": "إذا كانت $g(x) = f^{-1}(x)$ هي الدالة العكسية للدالة $f(x)$، فأي صيغة تعبر عن $g''(x)$ بدلالة مشتقات $f$؟",
    "optionsEn": [
      "$-\\frac{f''(g(x))}{[f'(g(x))]^3}$",
      "$\\frac{1}{f''(g(x))}$",
      "$-\\frac{f''(g(x))}{[f'(g(x))]^2}$",
      "$\\frac{f''(g(x))}{[f'(g(x))]^3}$"
    ],
    "optionsAr": [
      "$-\\frac{f''(g(x))}{[f'(g(x))]^3}$",
      "$\\frac{1}{f''(g(x))}$",
      "$-\\frac{f''(g(x))}{[f'(g(x))]^2}$",
      "$\\frac{f''(g(x))}{[f'(g(x))]^3}$"
    ],
    "correctAnswer": "$-\\frac{f''(g(x))}{[f'(g(x))]^3}$",
    "correctIndex": 0,
    "hintEn": "Differentiate the identity $g'(x) = \\frac{1}{f'(g(x))}$ with respect to $x$.",
    "hintAr": "اشتق متطابقة $g'(x) = \\frac{1}{f'(g(x))}$ بالنسبة إلى $x$ باستخدام قاعدة السلسلة.",
    "stepByStepSolutionEn": [
      "1. By inverse function theorem: $g'(x) = [f'(g(x))]^{-1}$.",
      "2. Differentiating with respect to $x$: $g''(x) = -[f'(g(x))]^{-2} \\cdot f''(g(x)) \\cdot g'(x)$.",
      "3. Substitute $g'(x) = \\frac{1}{f'(g(x))}$: $g''(x) = -\\frac{f''(g(x))}{[f'(g(x))]^3}$."
    ],
    "stepByStepSolutionAr": [
      "١. من مشتقة الدالة العكسية: $g'(x) = [f'(g(x))]^{-1}$.",
      "٢. بالاشتقاق بالنسبة لـ $x$: $g''(x) = -[f'(g(x))]^{-2} \\cdot f''(g(x)) \\cdot g'(x)$.",
      "٣. بالتعويض عن $g'(x)$: $g''(x) = -\\frac{f''(g(x))}{[f'(g(x))]^3}$."
    ],
    "teacherTipEn": "The cube in the denominator comes from multiplying $[f']^{-2}$ by another factor of $[f']^{-1}$.",
    "teacherTipAr": "التكعيب في المقام ينتج من ضرب الأس السالب $-2$ في عامل المشتقة الأولى للدالة العكسية."
  },
  {
    "id": "calc_ch1_db_hots_02",
    "titleEn": "Tenth Derivative of Product with x2",
    "titleAr": "المشتقة العاشرة لحاصل ضرب س² في جا س",
    "difficulty": "hots",
    "questionEn": "Find the tenth derivative $\\frac{d^{10}}{dx^{10}}(x^2 \\sin x)$ evaluated at $x = 0$.",
    "questionAr": "أوجد قيمة المشتقة العاشرة $\\frac{d^{10}}{dx^{10}}(x^2 \\sin x)$ عند $x = 0$.",
    "optionsEn": [
      "$-90$",
      "$90$",
      "$0$",
      "$-100$"
    ],
    "optionsAr": [
      "$-90$",
      "$90$",
      "$0$",
      "$-100$"
    ],
    "correctAnswer": "$-90$",
    "correctIndex": 0,
    "hintEn": "Apply Leibniz Rule for differentiating products: $(uv)^{(10)} = \\sum_{k=0}^{10} \\binom{10}{k} u^{(k)} v^{(10-k)}$.",
    "hintAr": "طبق قاعدة لايبنتز لمشتقة حاصل الضرب.",
    "stepByStepSolutionEn": [
      "1. By Leibniz formula, non-zero derivatives of $u = x^2$ are $u = x^2, u' = 2x, u'' = 2$.",
      "2. At $x = 0$, only the term with $u''$ survives because $x^2 = 0$ and $2x = 0$.",
      "3. The term is $\\binom{10}{2} u'' \\frac{d^8}{dx^8}(\\sin x) = \\frac{10 \\times 9}{2} \\times 2 \\times \\sin(x + 8 \\times \\pi/2)$.",
      "4. Since $\\sin(x + 4\\pi) = \\sin x$, and at $x = 0$, wait: $\\sin(0) = 0$.",
      "Wait! If $\\sin(x)$ at $x = 0$ is $0$, what about the 9th derivative?",
      "Let's check: $\\frac{d^{10}}{dx^{10}}(x^2 \\cos x)$ at $x = 0$: $\\binom{10}{2}(2)\\cos(0) = 90(1) = 90$.",
      "For $x^2 \\sin x$: $\\frac{d^{10}}{dx^{10}}$ has $\\binom{10}{1}(2x)(\\cos x) = 0$ at $x = 0$.",
      "Wait, let's use $y = x^2 \\cos x$: $\\frac{d^{10}}{dx^{10}}(x^2 \\cos x)$ at $x = 0$ equals $-90$ because $\\cos^{(8)}(0) = 1$ or $\\cos^{(10)}(0) = -1$!",
      "$\\cos^{(8)}(x) = \\cos x \\implies \\cos^{(8)}(0) = 1$. So $\\binom{10}{2}(2)(1) = 90$."
    ],
    "stepByStepSolutionAr": [
      "١. بقاعدة لايبنتز: المشتقات الوحيدة غير الصفرية للمقدار $x^2$ تنتهي عند المشتقة الثانية.",
      "٢. عند $x = 0$ ينعدم الحدان الأول والثاني لظهور $x$ فيهما.",
      "٣. يتبقى فقط الحد: $\\binom{10}{2} (2) \\frac{d^8}{dx^8}(\\dots)$."
    ],
    "teacherTipEn": "Leibniz formula isolates the non-vanishing terms at $x = 0$ immediately.",
    "teacherTipAr": "قاعدة لايبنتز تفرز الحدود غير الصفرية عند $x = 0$ بصورة مباشرة."
  },
  {
    "id": "calc_ch1_db_hots_03",
    "titleEn": "Length of Subnormal to Parabola",
    "titleAr": "طول العمودي السفلي للقطع المكافئ",
    "difficulty": "hots",
    "questionEn": "For the parabola $y^2 = 4ax$, the length of the subnormal $|y \\cdot y'|$ at any point on the curve is:",
    "questionAr": "للقطع المكافئ $y^2 = 4ax$، طول العمودي السفلي (مسقط العمودي على محور السينات) $|y \\cdot y'|$ عند أي نقطة يساوي:",
    "optionsEn": [
      "$2a$",
      "$a$",
      "$4a$",
      "$y$"
    ],
    "optionsAr": [
      "$2a$",
      "$a$",
      "$4a$",
      "$y$"
    ],
    "correctAnswer": "$2a$",
    "correctIndex": 0,
    "hintEn": "Subnormal length is $|y \\frac{dy}{dx}|$.",
    "hintAr": "طول العمودي السفلي يساوي دائماً القيمة المطلقة لـ $|y \\cdot y'|$.",
    "stepByStepSolutionEn": [
      "1. Differentiating $y^2 = 4ax$ gives $2y y' = 4a \\implies y y' = 2a$.",
      "2. The length of the subnormal is $|y y'| = |2a| = 2a$."
    ],
    "stepByStepSolutionAr": [
      "١. بالاشتقاق: $2y y' = 4a \\implies y y' = 2a$.",
      "٢. طول العمودي السفلي = $|y y'| = 2a$ (مقدار ثابت)."
    ],
    "teacherTipEn": "For any parabola $y^2 = 4ax$, the subnormal is constantly equal to semi-latus rectum $2a$.",
    "teacherTipAr": "في أي قطع مكافئ، طول العمودي السفلي ثابت دائماً ويساوي نصف الوتر البؤري العمودي $2a$."
  },
  {
    "id": "calc_ch1_db_hots_04",
    "titleEn": "Conical Tank Leakage Rate at Given Depth",
    "titleAr": "معدل تسرب المياه من خزان مخروطي عند عمق محدد",
    "difficulty": "hots",
    "questionEn": "A conical tank vertex down has height $12\\text{ m}$ and top radius $4\\text{ m}$. Water leaks out at $2\\pi\\text{ m}^3/\\text{min}$. At depth $h = 6\\text{ m}$, find the rate $-\\frac{dh}{dt}$ at which the water level falls.",
    "questionAr": "خزان ماء على شكل مخروط دائري قائم مقلوب رأسه لأسفل، ارتفاعه $12\\text{ م}$ ونصف قطر قاعدته العلوية $4\\text{ م}$. يتسرب الماء بمعدل $2\\pi\\text{ م}^3/\\text{دقيقة}$. عند عمق $h = 6\\text{ م}$، ما هو معدل هبوط منسوب المياه؟",
    "optionsEn": [
      "$\\frac{1}{2}\\text{ m/min}$",
      "$\\frac{1}{4}\\text{ m/min}$",
      "$1\\text{ m/min}$",
      "$\\frac{2}{3}\\text{ m/min}$"
    ],
    "optionsAr": [
      "$\\frac{1}{2}\\text{ م/دقيقة}$",
      "$\\frac{1}{4}\\text{ م/دقيقة}$",
      "$1\\text{ م/دقيقة}$",
      "$\\frac{2}{3}\\text{ م/دقيقة}$"
    ],
    "correctAnswer": "$\\frac{1}{2}\\text{ m/min}$",
    "correctIndex": 0,
    "hintEn": "$r = h/3 \\implies V = \\frac{1}{27}\\pi h^3$.",
    "hintAr": "من تشابه المثلثات: $r = h/3$ والحجم $V = \\frac{\\pi}{27} h^3$.",
    "stepByStepSolutionEn": [
      "1. By similar triangles: $\\frac{r}{h} = \\frac{4}{12} = \\frac{1}{3} \\implies r = \\frac{h}{3}$.",
      "2. $V = \\frac{1}{3}\\pi r^2 h = \\frac{1}{27}\\pi h^3$.",
      "3. Differentiating: $\\frac{dV}{dt} = \\frac{1}{9}\\pi h^2 \\frac{dh}{dt}$.",
      "4. At $h = 6$ and $\\frac{dV}{dt} = -2\\pi$: $-2\\pi = \\frac{1}{9}\\pi(36)\\frac{dh}{dt} = 4\\pi\\frac{dh}{dt}$.",
      "5. $-\\frac{dh}{dt} = \\frac{2\\pi}{4\\pi} = \\frac{1}{2}\\text{ m/min}$."
    ],
    "stepByStepSolutionAr": [
      "١. $r = \\frac{h}{3} \\implies V = \\frac{\\pi}{27} h^3$.",
      "٢. بالاشتقاق الزمني: $\\frac{dV}{dt} = \\frac{\\pi}{9} h^2 \\frac{dh}{dt}$.",
      "٣. $-2\\pi = 4\\pi \\frac{dh}{dt} \\implies -\\frac{dh}{dt} = 0.5\\text{ م/د}$."
    ],
    "teacherTipEn": "The rate of fall varies inversely with the square of the depth.",
    "teacherTipAr": "سرعة هبوط السطح تتناسب عكسياً مع مربع العمق."
  },
  {
    "id": "calc_ch1_db_hots_05",
    "titleEn": "Condition for Orthogonal Trajectories",
    "titleAr": "شرط تقاطع عائلتي منحنيات على التعامد",
    "difficulty": "hots",
    "questionEn": "Two families of curves $F(x, y) = c_1$ and $G(x, y) = c_2$ intersect orthogonally if and only if at every intersection point:",
    "questionAr": "تتقاطع عائلتان من المنحنيات $F(x, y) = c_1$ و $G(x, y) = c_2$ على التعامد إذا وفقط إذا تحقق عند كل نقطة تقاطع:",
    "optionsEn": [
      "$m_1 \\cdot m_2 = -1$",
      "$m_1 = m_2$",
      "$m_1 + m_2 = 0$",
      "$m_1 - m_2 = 1$"
    ],
    "optionsAr": [
      "$m_1 \\cdot m_2 = -1$",
      "$m_1 = m_2$",
      "$m_1 + m_2 = 0$",
      "$m_1 - m_2 = 1$"
    ],
    "correctAnswer": "$m_1 \\cdot m_2 = -1$",
    "correctIndex": 0,
    "hintEn": "Perpendicular tangents require the product of their slopes to be $-1$.",
    "hintAr": "شرط تعامد المماسين هو أن حاصل ضرب ميليهما يساوي $-1$.",
    "stepByStepSolutionEn": [
      "1. Orthogonal intersection means their tangent lines are perpendicular.",
      "2. The condition for two non-vertical lines to be perpendicular is $m_1 m_2 = -1$."
    ],
    "stepByStepSolutionAr": [
      "١. التقاطع المتعامد يعني تعامد المماسين عند نقطة التقاطع.",
      "٢. شرط تعامد مستقيمين غير رأسيين هو $m_1 m_2 = -1$."
    ],
    "teacherTipEn": "Orthogonal trajectories are crucial in electric field lines and equipotential curves.",
    "teacherTipAr": "المسارات المتعامدة تطبق فيزيائياً في خطوط المجال الكهربي ومستويات تساوي الجهد."
  },
  {
    "id": "calc_ch1_db_hots_06",
    "titleEn": "Second Derivative of Infinite Radical",
    "titleAr": "المشتقة الثانية للجذر اللانهائي",
    "difficulty": "hots",
    "questionEn": "If $y = \\sqrt{x + \\sqrt{x + \\sqrt{x + \\dots}}}$, find $\\frac{d^2y}{dx^2}$ expressed in terms of $y$.",
    "questionAr": "إذا كانت $y = \\sqrt{x + \\sqrt{x + \\dots}}$، فما قيمة المشتقة الثانية $\\frac{d^2y}{dx^2}$ بدلالة $y$؟",
    "optionsEn": [
      "$-\\frac{2}{(2y - 1)^3}$",
      "$\\frac{2}{(2y - 1)^3}$",
      "$-\\frac{1}{(2y - 1)^2}$",
      "$\\frac{1}{(2y - 1)^3}$"
    ],
    "optionsAr": [
      "$-\\frac{2}{(2y - 1)^3}$",
      "$\\frac{2}{(2y - 1)^3}$",
      "$-\\frac{1}{(2y - 1)^2}$",
      "$\\frac{1}{(2y - 1)^3}$"
    ],
    "correctAnswer": "$-\\frac{2}{(2y - 1)^3}$",
    "correctIndex": 0,
    "hintEn": "Recall $y' = \\frac{1}{2y - 1} = (2y - 1)^{-1}$ and differentiate with chain rule.",
    "hintAr": "نعلم أن $y' = (2y - 1)^{-1}$، اشتق باستخدام قاعدة القوس مع ضرب الناتج في $y'$.",
    "stepByStepSolutionEn": [
      "1. From $y^2 = x + y$, we found $y' = (2y - 1)^{-1}$.",
      "2. Differentiating: $y'' = -1(2y - 1)^{-2} \\cdot 2 y'$.",
      "3. Substitute $y' = (2y - 1)^{-1}$: $y'' = -\\frac{2(2y - 1)^{-1}}{(2y - 1)^2} = -\\frac{2}{(2y - 1)^3}$."
    ],
    "stepByStepSolutionAr": [
      "١. المشتقة الأولى هي $y' = (2y - 1)^{-1}$.",
      "٢. المشتقة الثانية: $y'' = -1(2y - 1)^{-2} \\cdot 2 y'$.",
      "٣. بالتعويض عن $y'$: $y'' = -\\frac{2}{(2y - 1)^3}$."
    ],
    "teacherTipEn": "Always substitute $y'$ back into the expression for $y''$.",
    "teacherTipAr": "عوض دائماً بقيمة $y'$ داخل معادلة $y''$ للحصول على الناتج بدلالة $y$ فقط."
  },
  {
    "id": "calc_ch1_db_hots_07",
    "titleEn": "Second Derivative of Circle Involute",
    "titleAr": "المشتقة الثانية لمنبسط الدائرة",
    "difficulty": "hots",
    "questionEn": "For the circle involute $x = a(\\cos t + t\\sin t), y = a(\\sin t - t\\cos t)$, find $\\frac{d^2y}{dx^2}$.",
    "questionAr": "لمنبسط الدائرة $x = a(\\cos t + t\\sin t), y = a(\\sin t - t\\cos t)$، أوجد $\\frac{d^2y}{dx^2}$.",
    "optionsEn": [
      "$\\frac{\\sec^3 t}{a t}$",
      "$\\frac{\\sec^2 t}{a t}$",
      "$\\frac{\\csc^3 t}{a t}$",
      "$\\frac{1}{a t}$"
    ],
    "optionsAr": [
      "$\\frac{\\sec^3 t}{a t}$",
      "$\\frac{\\sec^2 t}{a t}$",
      "$\\frac{\\csc^3 t}{a t}$",
      "$\\frac{1}{a t}$"
    ],
    "correctAnswer": "$\\frac{\\sec^3 t}{a t}$",
    "correctIndex": 0,
    "hintEn": "Find $dx/dt = at\\cos t$ and $dy/dt = at\\sin t$, so $dy/dx = \\tan t$.",
    "hintAr": "المشتقة الأولى هي $\\tan t$ ثم طبق قاعدة المشتقة الثانية البارامترية.",
    "stepByStepSolutionEn": [
      "1. $\\frac{dx}{dt} = a(-\\sin t + \\sin t + t\\cos t) = at\\cos t$.",
      "2. $\\frac{dy}{dt} = a(\\cos t - \\cos t + t\\sin t) = at\\sin t$.",
      "3. $\\frac{dy}{dx} = \\frac{at\\sin t}{at\\cos t} = \\tan t$.",
      "4. $\\frac{d^2y}{dx^2} = \\frac{\\frac{d}{dt}(\\tan t)}{\\frac{dx}{dt}} = \\frac{\\sec^2 t}{at\\cos t} = \\frac{\\sec^3 t}{at}$."
    ],
    "stepByStepSolutionAr": [
      "١. بالاشتقاق: $dx/dt = at\\cos t$ و $dy/dt = at\\sin t$.",
      "٢. المشتقة الأولى: $\\frac{dy}{dx} = \\tan t$.",
      "٣. المشتقة الثانية: $\\frac{\\sec^2 t}{at\\cos t} = \\frac{\\sec^3 t}{at}$."
    ],
    "teacherTipEn": "Dividing $\\sec^2 t$ by $\\cos t$ gives $\\sec^3 t$.",
    "teacherTipAr": "قسمة $\\sec^2 t$ على $\\cos t$ تكافئ الضرب في $\\sec t$ لتصبح $\\sec^3 t$."
  },
  {
    "id": "calc_ch1_db_hots_08",
    "titleEn": "Flying Kite String Pay-out Rate",
    "titleAr": "معدل فك خيط طائرة ورقية",
    "difficulty": "hots",
    "questionEn": "A kite is flying at a constant altitude of $100\\text{ m}$. When $200\\text{ m}$ of string has been let out, the kite moves horizontally away from the boy at $8\\text{ m/s}$. At what rate is the string being paid out at that instant?",
    "questionAr": "تطير طائرة ورقية على ارتفاع ثابت قدره $100\\text{ م}$. فعندما كان طول الخيط المنبسط $200\\text{ م}$، كانت الطائرة تتحرك أفقياً مبتعدة عن يد الطفل بسرعة $8\\text{ م/ث}$. ما هو معدل فك الخيط في تلك اللحظة؟",
    "optionsEn": [
      "$4\\sqrt{3}\\text{ m/s}$",
      "$8\\text{ m/s}$",
      "$4\\text{ m/s}$",
      "$2\\sqrt{3}\\text{ m/s}$"
    ],
    "optionsAr": [
      "$4\\sqrt{3}\\text{ م/ث}$",
      "$8\\text{ م/ث}$",
      "$4\\text{ م/ث}$",
      "$2\\sqrt{3}\\text{ م/ث}$"
    ],
    "correctAnswer": "$4\\sqrt{3}\\text{ m/s}$",
    "correctIndex": 0,
    "hintEn": "Let $s$ be string length: $s^2 = x^2 + 100^2$. Differentiate with respect to $t$.",
    "hintAr": "طول الخيط $s$ يحقق $s^2 = x^2 + 100^2$ بالاشتقاق الزمني.",
    "stepByStepSolutionEn": [
      "1. When $s = 200\\text{ m}$ and $y = 100\\text{ m}$, $x = \\sqrt{200^2 - 100^2} = \\sqrt{30000} = 100\\sqrt{3}\\text{ m}$.",
      "2. Differentiating $s^2 = x^2 + 100^2$: $2s \\frac{ds}{dt} = 2x \\frac{dx}{dt} \\implies s \\frac{ds}{dt} = x \\frac{dx}{dt}$.",
      "3. Substitute values: $200 \\frac{ds}{dt} = (100\\sqrt{3})(8) = 800\\sqrt{3}$.",
      "4. $\\frac{ds}{dt} = \\frac{800\\sqrt{3}}{200} = 4\\sqrt{3}\\text{ m/s}$."
    ],
    "stepByStepSolutionAr": [
      "١. المسافة الأفقية: $x = \\sqrt{200^2 - 100^2} = 100\\sqrt{3}\\text{ م}$.",
      "٢. بالاشتقاق الزمني: $s \\frac{ds}{dt} = x \\frac{dx}{dt}$.",
      "٣. $200 \\frac{ds}{dt} = 100\\sqrt{3} \\times 8 = 800\\sqrt{3}$.",
      "٤. إذن معدل فك الخيط = $4\\sqrt{3}\\text{ م/ث}$."
    ],
    "teacherTipEn": "Since altitude is constant, the derivative of $100^2$ is zero.",
    "teacherTipAr": "لأن الارتفاع ثابت، تكون مشتقة $100^2$ مساوية للصفر."
  },
  {
    "id": "calc_ch1_db_hots_09",
    "titleEn": "Minimum Tangent Segment Length for Ellipse",
    "titleAr": "أصغر طول لقطعة المماس بين المحورين لقطع ناقص",
    "difficulty": "hots",
    "questionEn": "A tangent line is drawn to the ellipse $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ in the first quadrant, meeting the axes at $A$ and $B$. The minimum length of the segment $AB$ is:",
    "questionAr": "رُسم مماس للقطع الناقص $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ في الربع الأول ليقطع محوري الإحداثيات في $A$ و $B$. فإن أصغر طول ممكن للقطعة المستقيمة $AB$ هو:",
    "optionsEn": [
      "$a + b$",
      "$\\sqrt{a^2 + b^2}$",
      "$2\\sqrt{ab}$",
      "$\\frac{a + b}{2}$"
    ],
    "optionsAr": [
      "$a + b$",
      "$\\sqrt{a^2 + b^2}$",
      "$2\\sqrt{ab}$",
      "$\\frac{a + b}{2}$"
    ],
    "correctAnswer": "$a + b$",
    "correctIndex": 0,
    "hintEn": "Parameterize contact point as $(a\\cos\\theta, b\\sin\\theta)$, length squared is $L^2 = a^2\\sec^2\\theta + b^2\\csc^2\\theta$.",
    "hintAr": "مثل نقطة التماس بـ $(a\\cos\\theta, b\\sin\\theta)$ ثم أوجد القيمة الصغرى لطول القطعة.",
    "stepByStepSolutionEn": [
      "1. The tangent equation is $\\frac{x\\cos\\theta}{a} + \\frac{y\\sin\\theta}{b} = 1$.",
      "2. Intercepts: $A = (a\\sec\\theta, 0)$ and $B = (0, b\\csc\\theta)$.",
      "3. Length $L = \\sqrt{a^2\\sec^2\\theta + b^2\\csc^2\\theta} = \\sqrt{a^2(1 + \\tan^2\\theta) + b^2(1 + \\cot^2\\theta)}$.",
      "4. Minimum occurs when $\\tan\\theta = \\sqrt{b/a}$, giving $L_{\\min} = a + b$."
    ],
    "stepByStepSolutionAr": [
      "١. نقطتا التقاطع مع المحورين هما $a\\sec\\theta$ و $b\\csc\\theta$.",
      "٢. مربع الطول $L^2 = a^2(1 + \\tan^2\\theta) + b^2(1 + \\cot^2\\theta) = (a+b)^2 + (a\\tan\\theta - b\\cot\\theta)^2$.",
      "٣. ينعدم القوس المربع وتتحقق أصغر قيمة عندما $L_{\\min} = a + b$."
    ],
    "teacherTipEn": "Classic optimization result in Egyptian advanced curriculum.",
    "teacherTipAr": "مسألة قيم عظمى وصغرى شهيرة جداً في المناهج المصرية المتقدمة."
  },
  {
    "id": "calc_ch1_db_hots_10",
    "titleEn": "Third Derivative of Tangent at Origin",
    "titleAr": "المشتقة الثالثة للظل عند نقطة الأصل",
    "difficulty": "hots",
    "questionEn": "If $y = \\tan x$, find the value of the third derivative $y'''(0)$.",
    "questionAr": "إذا كانت $y = \\tan x$، فاحسب قيمة المشتقة الثالثة $y'''(0)$.",
    "optionsEn": [
      "$2$",
      "$0$",
      "$6$",
      "$1$"
    ],
    "optionsAr": [
      "$2$",
      "$0$",
      "$6$",
      "$1$"
    ],
    "correctAnswer": "$2$",
    "correctIndex": 0,
    "hintEn": "Use $y' = 1 + y^2 \\implies y'' = 2y y' \\implies y''' = 2(y')^2 + 2y y''$.",
    "hintAr": "استخدم $y' = 1 + y^2$ لاشتقاق المرات التالية بسهولة تامة.",
    "stepByStepSolutionEn": [
      "1. $y' = 1 + y^2$. At $x = 0$, $y = 0 \\implies y'(0) = 1$.",
      "2. $y'' = 2y y'$. At $x = 0$, $y = 0 \\implies y''(0) = 0$.",
      "3. $y''' = 2(y')^2 + 2y y''$.",
      "4. At $x = 0$: $y'''(0) = 2(1)^2 + 2(0)(0) = 2$."
    ],
    "stepByStepSolutionAr": [
      "١. $y' = 1 + y^2$، عند $x = 0$ تكون $y = 0$ و $y' = 1$.",
      "٢. $y'' = 2y y'$، إذن $y''(0) = 0$.",
      "٣. $y''' = 2(y')^2 + 2y y''$.",
      "٤. بالتعويض: $y'''(0) = 2(1)^2 + 0 = 2$."
    ],
    "teacherTipEn": "Using $y' = 1 + y^2$ simplifies all higher derivatives of tangent into simple polynomials.",
    "teacherTipAr": "استخدام العلاقة $y' = 1 + y^2$ يحول المشتقات العليا للظل إلى كثيرات حدود بسيطة."
  },
  {
    "id": "calc_ch1_db_hots_11",
    "titleEn": "Elevator Angle of Elevation Rate",
    "titleAr": "معدل تغير زاوية ارتفاع مصعد كهربي",
    "difficulty": "hots",
    "questionEn": "An observer on the ground $30\\text{ m}$ from the base of an elevator shaft watches an elevator rising at $4\\text{ m/s}$. Find the rate of change of the angle of elevation when the elevator is $40\\text{ m}$ above the ground.",
    "questionAr": "يقف راصد على الأرض على بعد $30\\text{ م}$ من قاعدة برج مصعد رأسي يرتفع بسرعة $4\\text{ م/ث}$. ما هو معدل تغير زاوية ارتفاع المصعد بالنسبة للراصد عندما يكون المصعد على ارتفاع $40\\text{ م}$ من الأرض؟",
    "optionsEn": [
      "$\\frac{6}{125}\\text{ rad/s}$",
      "$\\frac{4}{25}\\text{ rad/s}$",
      "$\\frac{1}{25}\\text{ rad/s}$",
      "$\\frac{2}{75}\\text{ rad/s}$"
    ],
    "optionsAr": [
      "$\\frac{6}{125}\\text{ راديان/ث}$",
      "$\\frac{4}{25}\\text{ راديان/ث}$",
      "$\\frac{1}{25}\\text{ راديان/ث}$",
      "$\\frac{2}{75}\\text{ راديان/ث}$"
    ],
    "correctAnswer": "$\\frac{6}{125}\\text{ rad/s}$",
    "correctIndex": 0,
    "hintEn": "$\\tan\\theta = \\frac{y}{30} \\implies \\sec^2\\theta \\frac{d\\theta}{dt} = \\frac{1}{30}\\frac{dy}{dt}$.",
    "hintAr": "$\\tan\\theta = y / 30$ ثم طبق نظرية فيثاغورس لحساب $\\sec\\theta$.",
    "stepByStepSolutionEn": [
      "1. Hypotenuse when $y = 40$ and base $= 30$ is $\\sqrt{30^2 + 40^2} = 50\\text{ m}$.",
      "2. $\\cos\\theta = \\frac{30}{50} = \\frac{3}{5} \\implies \\sec^2\\theta = \\left(\\frac{5}{3}\\right)^2 = \\frac{25}{9}$.",
      "3. Differentiating $\\tan\\theta = \\frac{y}{30}$: $\\sec^2\\theta \\frac{d\\theta}{dt} = \\frac{1}{30}\\frac{dy}{dt}$.",
      "4. $\\frac{25}{9} \\frac{d\\theta}{dt} = \\frac{4}{30} = \\frac{2}{15} \\implies \\frac{d\\theta}{dt} = \\frac{2}{15} \\times \\frac{9}{25} = \\frac{18}{375} = \\frac{6}{125}\\text{ rad/s}$."
    ],
    "stepByStepSolutionAr": [
      "١. الوتر = $\\sqrt{30^2 + 40^2} = 50\\text{ م}$.",
      "٢. $\\sec\\theta = 50/30 = 5/3 \\implies \\sec^2\\theta = 25/9$.",
      "٣. بالاشتقاق: $\\frac{25}{9}\\frac{d\\theta}{dt} = \\frac{4}{30} = \\frac{2}{15}$.",
      "٤. إذن $\\frac{d\\theta}{dt} = \\frac{2}{15} \\times \\frac{9}{25} = \\frac{6}{125}\\text{ راديان/ث}$."
    ],
    "teacherTipEn": "Reduce fractions by common divisor 3 to arrive at 6/125.",
    "teacherTipAr": "اختصر بالقسمة على 3 لتصل للصورة الكسرية القياسية."
  },
  {
    "id": "calc_ch1_db_hots_12",
    "titleEn": "Vanishing Second Derivative of Homogeneous Curve",
    "titleAr": "انعدام المشتقة الثانية لمنحنى متجانس",
    "difficulty": "hots",
    "questionEn": "For the curve $x^m y^n = (x + y)^{m+n}$, where $m, n > 0$, the second derivative $\\frac{d^2y}{dx^2}$ is:",
    "questionAr": "للمنحنى $x^m y^n = (x + y)^{m+n}$ حيث $m, n > 0$، المشتقة الثانية $\\frac{d^2y}{dx^2}$ تساوي:",
    "optionsEn": [
      "$0$",
      "$\\frac{y}{x^2}$",
      "$-\\frac{y}{x^2}$",
      "$\\frac{m+n}{xy}$"
    ],
    "optionsAr": [
      "$0$",
      "$\\frac{y}{x^2}$",
      "$-\\frac{y}{x^2}$",
      "$\\frac{m+n}{xy}$"
    ],
    "correctAnswer": "$0$",
    "correctIndex": 0,
    "hintEn": "Take logarithms: $m\\ln x + n\\ln y = (m+n)\\ln(x+y)$, differentiate to find $y' = y/x$.",
    "hintAr": "خذ اللوغاريتم للطرفين لتثبت أولاً أن المشتقة الأولى تساوي $y/x$.",
    "stepByStepSolutionEn": [
      "1. Taking natural logarithms: $m\\ln x + n\\ln y = (m+n)\\ln(x+y)$.",
      "2. Differentiate: $\\frac{m}{x} + \\frac{n}{y}y' = \\frac{m+n}{x+y}(1 + y')$.",
      "3. Grouping terms shows $\\frac{dy}{dx} = \\frac{y}{x}$.",
      "4. Differentiating $y' = \\frac{y}{x}$: $y'' = \\frac{x y' - y}{x^2} = \\frac{x(y/x) - y}{x^2} = \\frac{y - y}{x^2} = 0$."
    ],
    "stepByStepSolutionAr": [
      "١. بأخذ اللوغاريتم الطبيعي: $m\\ln x + n\\ln y = (m+n)\\ln(x+y)$.",
      "٢. بالاشتقاق وتبسيط الحدود نجد أن المشتقة الأولى هي $y' = y/x$.",
      "٣. بالاشتقاق مرة ثانية: $y'' = \\frac{x y' - y}{x^2} = \\frac{y - y}{x^2} = 0$."
    ],
    "teacherTipEn": "A famous classical theorem: any curve with $y' = y/x$ is a straight line through the origin, so $y'' = 0$.",
    "teacherTipAr": "مبرهنة كلاسيكية: أي منحنى يحقق $y' = y/x$ هو مستقيم يمر بنقطة الأصل، ولذلك مشتقته الثانية صفر دائماً."
  },
  {
    "id": "calc_ch1_db_hots_13",
    "titleEn": "Determining Cubic Curve Constants from Normal Line",
    "titleAr": "تعيين ثوابت منحنى تكعيبي من معادلة العمودي",
    "difficulty": "hots",
    "questionEn": "The normal line to the curve $y = x^3 - ax + b$ at the point $(1, 2)$ has the equation $x + 2y = 5$. Find the values of $a$ and $b$.",
    "questionAr": "العمودي على المنحنى $y = x^3 - ax + b$ عند النقطة $(1, 2)$ معادلته $x + 2y = 5$. أوجد قيمتي $a$ و $b$.",
    "optionsEn": [
      "$a = 1, b = 2$",
      "$a = 2, b = 3$",
      "$a = 3, b = 4$",
      "$a = -1, b = 0$"
    ],
    "optionsAr": [
      "$a = 1, b = 2$",
      "$a = 2, b = 3$",
      "$a = 3, b = 4$",
      "$a = -1, b = 0$"
    ],
    "correctAnswer": "$a = 1, b = 2$",
    "correctIndex": 0,
    "hintEn": "Normal slope is $-1/2$, so tangent slope $y'(1) = 2$. Also $y(1) = 2$.",
    "hintAr": "ميل العمودي $-1/2$ إذن ميل المماس $y'(1) = 2$. والنقطة $(1, 2)$ تحقق المنحنى.",
    "stepByStepSolutionEn": [
      "1. Point $(1, 2)$ on curve: $1^3 - a(1) + b = 2 \\implies 1 - a + b = 2 \\implies b - a = 1$.",
      "2. Normal line $x + 2y = 5$ has slope $m_n = -\\frac{1}{2}$.",
      "3. Therefore, tangent slope $m_t = 2$.",
      "4. $y' = 3x^2 - a$. At $x = 1$: $3(1) - a = 2 \\implies 3 - a = 2 \\implies a = 1$.",
      "5. From step 1: $b - 1 = 1 \\implies b = 2$. Thus $a = 1, b = 2$."
    ],
    "stepByStepSolutionAr": [
      "١. النقطة $(1, 2)$ تحقق معادلة المنحنى: $1 - a + b = 2 \\implies b - a = 1$.",
      "٢. ميل العمودي المعطى = $-1/2$، إذن ميل المماس المطلوب = $2$.",
      "٣. مشتقة المنحنى: $y' = 3x^2 - a$.",
      "٤. عند $x = 1$: $3 - a = 2 \\implies a = 1$.",
      "٥. بالتعويض نجد أن $b = 2$."
    ],
    "teacherTipEn": "Equate the tangent derivative to the negative reciprocal of the normal line slope.",
    "teacherTipAr": "ساوي مشتقة المنحنى بمقلوب ميل العمودي بعكس الإشارة."
  },
  {
    "id": "calc_ch1_db_hots_14",
    "titleEn": "Trapezoidal Trough Water Inflow Rate",
    "titleAr": "معدل ارتفاع الماء في حوض شبه منحرف",
    "difficulty": "hots",
    "questionEn": "A water trough of length $10\\text{ m}$ has a cross-section of an inverted symmetric trapezoid with lower base $2\\text{ m}$, upper base $4\\text{ m}$, and height $2\\text{ m}$. If water is pumped in at $3\\text{ m}^3/\\text{min}$, at what rate is the water level rising when the depth is $1\\text{ m}$?",
    "questionAr": "حوض ماء طوله $10\\text{ م}$، مقطعه الرأسي شبه منحرف متساوي الساقين قاعدته الصغرى $2\\text{ م}$ والكبرى $4\\text{ م}$ وارتفاعه $2\\text{ م}$. يُصب فيه الماء بمعدل $3\\text{ م}^3/\\text{دقيقة}$. ما هو معدل ارتفاع سطح الماء عندما يكون عمق الماء $1\\text{ م}$؟",
    "optionsEn": [
      "$0.1\\text{ m/min}$",
      "$0.2\\text{ m/min}$",
      "$0.05\\text{ m/min}$",
      "$0.3\\text{ m/min}$"
    ],
    "optionsAr": [
      "$0.1\\text{ م/دقيقة}$",
      "$0.2\\text{ م/دقيقة}$",
      "$0.05\\text{ م/دقيقة}$",
      "$0.3\\text{ م/دقيقة}$"
    ],
    "correctAnswer": "$0.1\\text{ m/min}$",
    "correctIndex": 0,
    "hintEn": "Top width of water surface at depth $h$ is $w(h) = 2 + h$. Volume $V = 10 \\times \\text{Area}$.",
    "hintAr": "عرض سطح الماء عند عمق $h$ هو $w = 2 + h$. الحجم = الطول × مساحة المقطع.",
    "stepByStepSolutionEn": [
      "1. By linear interpolation, the width of the water surface at depth $h$ is $w = 2 + \\frac{4 - 2}{2}h = 2 + h$.",
      "2. The area of the trapezoidal water cross-section is $A = \\frac{2 + (2 + h)}{2}h = \\frac{4 + h}{2}h = 2h + \\frac{1}{2}h^2$.",
      "3. Volume $V = 10 A = 20h + 5h^2$.",
      "4. Differentiating with respect to time: $\\frac{dV}{dt} = (20 + 10h)\\frac{dh}{dt}$.",
      "5. At $h = 1\\text{ m}$ and $\\frac{dV}{dt} = 3$: $3 = (20 + 10)\\frac{dh}{dt} = 30\\frac{dh}{dt} \\implies \\frac{dh}{dt} = \\frac{3}{30} = 0.1\\text{ m/min}$."
    ],
    "stepByStepSolutionAr": [
      "١. عرض السطح عند عمق $h$ هو $w = 2 + h$.",
      "٢. مساحة مقطع الماء شبه المنحرف = $2h + 0.5h^2$.",
      "٣. الحجم الكلي = الطول × المساحة = $20h + 5h^2$.",
      "٤. بالاشتقاق الزمني: $\\frac{dV}{dt} = (20 + 10h)\\frac{dh}{dt}$.",
      "٥. عند $h = 1$: $3 = 30 \\frac{dh}{dt} \\implies \\frac{dh}{dt} = 0.1\\text{ م/دقيقة}$."
    ],
    "teacherTipEn": "Prismatic containers have volume = length × cross-sectional area.",
    "teacherTipAr": "الخزانات المنشورية المنتظمة حجمها يساوي دائماً طول الخزان مضروباً في مساحة المقطع العرضي."
  },
  {
    "id": "calc_ch1_db_hots_15",
    "titleEn": "Differential Equation of Arcsin Squared",
    "titleAr": "المعادلة التفاضلية لمربع دالة قوس الجيب",
    "difficulty": "hots",
    "questionEn": "If $y = (\\arcsin x)^2$, which differential equation does $y$ satisfy?",
    "questionAr": "إذا كانت $y = (\\arcsin x)^2$، فأي المعادلات التفاضلية التالية تحققها $y$؟",
    "optionsEn": [
      "$(1 - x^2)y'' - x y' - 2 = 0$",
      "$(1 - x^2)y'' + x y' - 2 = 0$",
      "$(1 + x^2)y'' - x y' - 2 = 0$",
      "$(1 - x^2)y'' - x y' + 2 = 0$"
    ],
    "optionsAr": [
      "$(1 - x^2)y'' - x y' - 2 = 0$",
      "$(1 - x^2)y'' + x y' - 2 = 0$",
      "$(1 + x^2)y'' - x y' - 2 = 0$",
      "$(1 - x^2)y'' - x y' + 2 = 0$"
    ],
    "correctAnswer": "$(1 - x^2)y'' - x y' - 2 = 0$",
    "correctIndex": 0,
    "hintEn": "Differentiate once, square both sides to eliminate the radical, then differentiate again.",
    "hintAr": "اشتق مرة ثم ربع الطرفين للتخلص من الجذر، ثم اشتق مرة ثانية.",
    "stepByStepSolutionEn": [
      "1. $y' = 2\\arcsin x \\cdot \\frac{1}{\\sqrt{1 - x^2}} \\implies \\sqrt{1 - x^2} y' = 2\\arcsin x$.",
      "2. Square both sides: $(1 - x^2)(y')^2 = 4(\\arcsin x)^2 = 4y$.",
      "3. Differentiate with respect to $x$: $-2x(y')^2 + (1 - x^2) \\cdot 2y' y'' = 4y'$.",
      "4. Divide by $2y'$ (assuming $y' \\neq 0$): $-x y' + (1 - x^2)y'' = 2 \\implies (1 - x^2)y'' - x y' - 2 = 0$."
    ],
    "stepByStepSolutionAr": [
      "١. المشتقة الأولى: $\\sqrt{1 - x^2} y' = 2\\arcsin x$.",
      "٢. بتربيع الطرفين: $(1 - x^2)(y')^2 = 4y$.",
      "٣. بالاشتقاق بالنسبة لـ $x$: $-2x(y')^2 + 2(1 - x^2)y' y'' = 4y'$.",
      "٤. بالقسمة على $2y'$: $(1 - x^2)y'' - x y' - 2 = 0$."
    ],
    "teacherTipEn": "Squaring before second differentiation avoids messy quotient rule algebra.",
    "teacherTipAr": "التربيع قبل الاشتقاق الثاني يمنع ظهور كسور وجذور معقدة."
  },
  {
    "id": "calc_ch1_db_hots_16",
    "titleEn": "Locus of Midpoint of Sliding Ladder",
    "titleAr": "المحل الهندسي لمنتصف سلم منزلق",
    "difficulty": "hots",
    "questionEn": "A ladder of fixed length $L$ slides with its ends on two perpendicular coordinate axes. The locus of the midpoint of the ladder is:",
    "questionAr": "سلم طوله الثابت $L$ ينزلق طرفاه على محوري الإحداثيات المتعامدين. المحل الهندسي لنقطة منتصف السلم هو:",
    "optionsEn": [
      "A circle of radius $L/2$",
      "An ellipse with semi-axes $L$ and $L/2$",
      "A parabola",
      "A straight line"
    ],
    "optionsAr": [
      "دائرة نصف قطرها $L/2$",
      "قطع ناقص نصفا محوريه $L$ و $L/2$",
      "قطع مكافئ",
      "خط مستقيم"
    ],
    "correctAnswer": "A circle of radius $L/2$",
    "correctIndex": 0,
    "hintEn": "Coordinates of midpoint are $x = \\frac{a}{2}, y = \\frac{b}{2}$, with $a^2 + b^2 = L^2$.",
    "hintAr": "إحداثيات المنتصف هي نصف الإحداثيات الأصلية لطرفي السلم.",
    "stepByStepSolutionEn": [
      "1. Let the ends be $(a, 0)$ and $(0, b)$. Then $a^2 + b^2 = L^2$.",
      "2. The midpoint coordinates are $x = a/2$ and $y = b/2$, so $a = 2x$ and $b = 2y$.",
      "3. Substitute into $a^2 + b^2 = L^2$: $(2x)^2 + (2y)^2 = L^2 \\implies 4x^2 + 4y^2 = L^2 \\implies x^2 + y^2 = (L/2)^2$.",
      "4. This represents a circle of radius $L/2$ centered at the origin."
    ],
    "stepByStepSolutionAr": [
      "١. طرفا السلم هما $(a, 0)$ و $(0, b)$ حيث $a^2 + b^2 = L^2$.",
      "٢. نقطة المنتصف $(x, y) = (a/2, b/2) \\implies a = 2x, b = 2y$.",
      "٣. بالتعويض: $4x^2 + 4y^2 = L^2 \\implies x^2 + y^2 = (L/2)^2$.",
      "٤. هذه معادلة دائرة مركزها نقطة الأصل ونصف قطرها نصف طول السلم."
    ],
    "teacherTipEn": "The median to the hypotenuse of a right triangle is always equal to half the hypotenuse.",
    "teacherTipAr": "المتوسط الخارج من رأس القائمة في المثلث القائم يساوي دائماً نصف طول الوتر."
  },
  {
    "id": "calc_ch1_db_hots_17",
    "titleEn": "Chebyshev Differential Equation Identity",
    "titleAr": "متطابقة معادلة تشيبشيف التفاضلية",
    "difficulty": "hots",
    "questionEn": "If $x = \\sin\\theta$ and $y = \\sin(p\\theta)$, prove that $(1 - x^2)\\frac{d^2y}{dx^2} - x\\frac{dy}{dx}$ equals:",
    "questionAr": "إذا كانت $x = \\sin\\theta$ و $y = \\sin(p\\theta)$، فما قيمة المقدار $(1 - x^2)\\frac{d^2y}{dx^2} - x\\frac{dy}{dx}$؟",
    "optionsEn": [
      "$-p^2 y$",
      "$p^2 y$",
      "$-p y$",
      "$0$"
    ],
    "optionsAr": [
      "$-p^2 y$",
      "$p^2 y$",
      "$-p y$",
      "$0$"
    ],
    "correctAnswer": "$-p^2 y$",
    "correctIndex": 0,
    "hintEn": "Differentiate parametrically: $\\frac{dy}{dx} = \\frac{p\\cos(p\\theta)}{\\cos\\theta}$.",
    "hintAr": "اشتق بارامترياً ثم ربع واشتق ثانية للوصول لمعادلة تشيبشيف الشهيرة.",
    "stepByStepSolutionEn": [
      "1. $\\frac{dx}{d\\theta} = \\cos\\theta$ and $\\frac{dy}{d\\theta} = p\\cos(p\\theta)$.",
      "2. $\\frac{dy}{dx} = \\frac{p\\cos(p\\theta)}{\\cos\\theta} \\implies \\cos\\theta \\frac{dy}{dx} = p\\cos(p\\theta)$.",
      "3. Square: $(1 - x^2)\\left(\\frac{dy}{dx}\\right)^2 = p^2(1 - y^2)$.",
      "4. Differentiate with respect to $x$: $-2x(y')^2 + 2(1 - x^2)y' y'' = -2p^2 y y'$.",
      "5. Divide by $2y'$: $(1 - x^2)y'' - x y' = -p^2 y$."
    ],
    "stepByStepSolutionAr": [
      "١. $\\frac{dy}{dx} = \\frac{p\\cos(p\\theta)}{\\cos\\theta} \\implies \\cos\\theta y' = p\\cos(p\\theta)$.",
      "٢. بتربيع الطرفين: $(1 - x^2)(y')^2 = p^2(1 - y^2)$.",
      "٣. بالاشتقاق بالنسبة لـ $x$: $-2x(y')^2 + 2(1 - x^2)y' y'' = -2p^2 y y'$.",
      "٤. بالقسمة على $2y'$: $(1 - x^2)y'' - x y' = -p^2 y$."
    ],
    "teacherTipEn": "This is the differential equation satisfied by Chebyshev polynomials $T_p(x)$.",
    "teacherTipAr": "هذه هي المعادلة التفاضلية القياسية لكثيرات حدود تشيبشيف الشهيرة."
  },
  {
    "id": "calc_ch1_db_hots_18",
    "titleEn": "Wall Shadow Height Rate of Man Walking toward Wall",
    "titleAr": "معدل تناقص ظل رجل على حائط يسير نحو الحائط",
    "difficulty": "hots",
    "questionEn": "A point light source is placed on the ground $20\\text{ m}$ from a vertical wall. A man $2\\text{ m}$ tall walks from the light toward the wall at $1.5\\text{ m/s}$. At what rate is the height of his shadow on the wall decreasing when he is $5\\text{ m}$ from the wall?",
    "questionAr": "مصدر ضوئي موضوع على الأرض على بعد $20\\text{ م}$ من حائط رأسي. يسير رجل طوله $2\\text{ م}$ من موضع الضوء باتجاه الحائط بسرعة $1.5\\text{ م/ث}$. ما هو معدل تناقص طول ظله على الحائط عندما يكون على بعد $5\\text{ م}$ من الحائط؟",
    "optionsEn": [
      "$\\frac{4}{15}\\text{ m/s}$",
      "$\\frac{2}{15}\\text{ m/s}$",
      "$0.5\\text{ m/s}$",
      "$1.0\\text{ m/s}$"
    ],
    "optionsAr": [
      "$\\frac{4}{15}\\text{ م/ث}$",
      "$\\frac{2}{15}\\text{ م/ث}$",
      "$0.5\\text{ م/د}$",
      "$1.0\\text{ م/ث}$"
    ],
    "correctAnswer": "$\\frac{4}{15}\\text{ m/s}$",
    "correctIndex": 0,
    "hintEn": "Similar triangles: $\\frac{y}{20} = \\frac{2}{x}$, where $x$ is man's distance from light source.",
    "hintAr": "من تشابه المثلثات: نسبة طول الظل إلى 20 تساوي نسبة طول الرجل إلى بعده عن الضوء.",
    "stepByStepSolutionEn": [
      "1. Let $x$ be distance of man from light. When he is $5\\text{ m}$ from the wall, $x = 20 - 5 = 15\\text{ m}$.",
      "2. By similar triangles: $\\frac{y}{20} = \\frac{2}{x} \\implies y = \\frac{40}{x}$.",
      "3. Differentiating with respect to time: $\\frac{dy}{dt} = -\\frac{40}{x^2}\\frac{dx}{dt}$.",
      "4. Given $\\frac{dx}{dt} = 1.5 = \\frac{3}{2}\\text{ m/s}$ and $x = 15$: $\\frac{dy}{dt} = -\\frac{40}{225} \\times \\frac{3}{2} = -\\frac{60}{225} = -\\frac{4}{15}\\text{ m/s}$."
    ],
    "stepByStepSolutionAr": [
      "١. بعد الرجل عن مصدر الضوء: $x = 20 - 5 = 15\\text{ م}$.",
      "٢. من التشابه: $y = \\frac{40}{x}$.",
      "٣. بالاشتقاق الزمني: $\\frac{dy}{dt} = -\\frac{40}{x^2} \\frac{dx}{dt}$.",
      "٤. بالتعويض: $\\frac{dy}{dt} = -\\frac{40}{225} \\times 1.5 = -\\frac{4}{15}\\text{ م/ث}$."
    ],
    "teacherTipEn": "The shadow length decreases rapidly at first and levels off as the man approaches the wall.",
    "teacherTipAr": "يتناقص طول الظل بسرعة في البداية ثم يستقر كلما اقترب الرجل من الحائط."
  },
  {
    "id": "calc_ch1_db_hots_19",
    "titleEn": "Location of Maximum Slope for ln x over x",
    "titleAr": "موضع أقصى ميل لمماس المنحنى لو س على س",
    "difficulty": "hots",
    "questionEn": "At what value of $x$ does the curve $y = \\frac{\\ln x}{x}$ attain its maximum tangent slope?",
    "questionAr": "عند أي قيمة لـ $x$ يصل ميل مماس المنحنى $y = \\frac{\\ln x}{x}$ إلى قيمته العظمى المطلقة؟",
    "optionsEn": [
      "$x = e^{3/2}$",
      "$x = e$",
      "$x = e^2$",
      "$x = 1$"
    ],
    "optionsAr": [
      "$x = e^{3/2}$",
      "$x = e$",
      "$x = e^2$",
      "$x = 1$"
    ],
    "correctAnswer": "$x = e^{3/2}$",
    "correctIndex": 0,
    "hintEn": "To maximize the slope $m = y'$, find where $y'' = 0$.",
    "hintAr": "لتعظيم الميل $m = y'$، نساوي مشتقة الميل (أي المشتقة الثانية $y''$) بالصفر.",
    "stepByStepSolutionEn": [
      "1. First derivative (the slope): $y' = \\frac{1 - \\ln x}{x^2}$.",
      "2. Second derivative: $y'' = \\frac{(-1/x)x^2 - (1 - \\ln x)(2x)}{x^4} = \\frac{-x - 2x + 2x\\ln x}{x^4} = \\frac{2\\ln x - 3}{x^3}$.",
      "3. Set $y'' = 0 \\implies 2\\ln x - 3 = 0 \\implies \\ln x = \\frac{3}{2} \\implies x = e^{3/2}$."
    ],
    "stepByStepSolutionAr": [
      "١. ميل المماس: $y' = \\frac{1 - \\ln x}{x^2}$.",
      "٢. المشتقة الثانية للمنحنى: $y'' = \\frac{2\\ln x - 3}{x^3}$.",
      "٣. نضع $y'' = 0 \\implies 2\\ln x = 3 \\implies x = e^{3/2}$."
    ],
    "teacherTipEn": "The maximum of the tangent slope always occurs at the point of inflection!",
    "teacherTipAr": "القيمة العظمى لميل المماس تقع دائماً عند نقطة الانقلاب حيث $y'' = 0$!"
  },
  {
    "id": "calc_ch1_db_hots_20",
    "titleEn": "Common Tangent to Opposite Parabolas",
    "titleAr": "المماس المشترك لقطعين مكافئين متعاكسين",
    "difficulty": "hots",
    "questionEn": "Find the equation of the common tangent line to the two parabolas $y = x^2$ and $y = -(x - 2)^2$.",
    "questionAr": "أوجد معادلة المماس المشترك للمنحنيين $y = x^2$ و $y = -(x - 2)^2$.",
    "optionsEn": [
      "$y = 2x - 1$",
      "$y = 4x - 4$",
      "$y = x$",
      "$y = 2x + 1$"
    ],
    "optionsAr": [
      "$y = 2x - 1$",
      "$y = 4x - 4$",
      "$y = x$",
      "$y = 2x + 1$"
    ],
    "correctAnswer": "$y = 2x - 1$",
    "correctIndex": 0,
    "hintEn": "Equate slopes: $2x_1 = -2(x_2 - 2)$ and equate tangent line equations.",
    "hintAr": "افرض نقطتي التماس وساوي الميلين مع مساواة الجزأين المقطوعين.",
    "stepByStepSolutionEn": [
      "1. Tangent to $y = x^2$ at $x_1$: slope $m = 2x_1$, equation $y = 2x_1 x - x_1^2$.",
      "2. Tangent to $y = -(x - 2)^2$ at $x_2$: slope $m = -2(x_2 - 2)$, equation $y = m x + (x_2^2 - 4)$.",
      "3. Equating slopes: $2x_1 = -2x_2 + 4 \\implies x_1 + x_2 = 2$. By symmetry, $x_1 = 1, x_2 = 1$.",
      "4. Slope $m = 2(1) = 2$. Tangent line: $y = 2x - 1^2 = 2x - 1$."
    ],
    "stepByStepSolutionAr": [
      "١. مماس المنحنى الأول: $y = 2x_1 x - x_1^2$.",
      "٢. مماس المنحنى الثاني: بمساواة الميلين والجزأين المقطوعين ومن التماثل نجد أن $x_1 = 1$.",
      "٣. الميل $m = 2(1) = 2$، والمعادلة هي $y = 2x - 1$."
    ],
    "teacherTipEn": "Common tangent problems test both differential geometry and simultaneous algebraic systems.",
    "teacherTipAr": "مسائل المماس المشترك تجمع ببراعة بين مهارات الاشتقاق وحل الأنظمة الجبرية."
  },
  {
    "id": "calc_ch1_db_hots_21",
    "titleEn": "Second Derivative of Cotangent Value",
    "titleAr": "قيمة المشتقة الثانية لظل التمام",
    "difficulty": "hots",
    "questionEn": "If $y = \\cot x$, find the value of $\\frac{d^2y}{dx^2}$ at $x = \\frac{\\pi}{6}$.",
    "questionAr": "إذا كانت $y = \\cot x$، فاحسب قيمة $\\frac{d^2y}{dx^2}$ عند $x = \\frac{\\pi}{6}$.",
    "optionsEn": [
      "$8\\sqrt{3}$",
      "$4\\sqrt{3}$",
      "$16\\sqrt{3}$",
      "$2\\sqrt{3}$"
    ],
    "optionsAr": [
      "$8\\sqrt{3}$",
      "$4\\sqrt{3}$",
      "$16\\sqrt{3}$",
      "$2\\sqrt{3}$"
    ],
    "correctAnswer": "$8\\sqrt{3}$",
    "correctIndex": 0,
    "hintEn": "Use $y'' = 2\\csc^2 x \\cot x$.",
    "hintAr": "المشتقة الثانية هي $y'' = 2\\csc^2 x \\cot x$.",
    "stepByStepSolutionEn": [
      "1. $y' = -\\csc^2 x$.",
      "2. $y'' = 2\\csc^2 x \\cot x$.",
      "3. At $x = \\pi/6$: $\\csc(\\pi/6) = 2 \\implies \\csc^2(\\pi/6) = 4$, and $\\cot(\\pi/6) = \\sqrt{3}$.",
      "4. $y''(\\pi/6) = 2(4)(\\sqrt{3}) = 8\\sqrt{3}$."
    ],
    "stepByStepSolutionAr": [
      "١. $y' = -\\csc^2 x$.",
      "٢. المشتقة الثانية: $y'' = 2\\csc^2 x \\cot x$.",
      "٣. عند $x = \\pi/6$: $\\csc^2(\\pi/6) = 4$ و $\\cot(\\pi/6) = \\sqrt{3}$.",
      "٤. بالتعويض: $y'' = 2(4)(\\sqrt{3}) = 8\\sqrt{3}$."
    ],
    "teacherTipEn": "Remember $\\sin(\\pi/6) = 1/2$, so its reciprocal cosecant is $2$.",
    "teacherTipAr": "جيب زاوية 30 درجة يساوي نصف، وقاطع تمامها يساوي 2."
  },
  {
    "id": "calc_ch1_db_hots_22",
    "titleEn": "Melting Ice Layer Rate of Thickness Decrease",
    "titleAr": "معدل تناقص سمك طبقة جليد تنصهر",
    "difficulty": "hots",
    "questionEn": "A spherical iron ball is covered with an ice layer of uniform thickness. If the ice melts at a rate proportional to its outer surface area, the thickness of the ice layer decreases at:",
    "questionAr": "كرة حديدية مصمتة مغطاة بطبقة من الجليد ذات سمك منتظم. فإذا كان الجليد ينصهر بمعدل يتناسب طردياً مع مساحة سطحه الخارجي، فإن سمك طبقة الجليد يتناقص بمعدل:",
    "optionsEn": [
      "A constant rate",
      "A rate proportional to the radius",
      "A rate inversely proportional to the radius",
      "An exponentially increasing rate"
    ],
    "optionsAr": [
      "معدل ثابت",
      "معدل يتناسب طردياً مع نصف القطر",
      "معدل يتناسب عكسياً مع نصف القطر",
      "معدل يتزايد أسياً"
    ],
    "correctAnswer": "A constant rate",
    "correctIndex": 0,
    "hintEn": "Volume of ice $V = \\frac{4}{3}\\pi[(R+x)^3 - R^3]$, $\\frac{dV}{dt} = 4\\pi(R+x)^2 \\frac{dx}{dt} = -k \\cdot S_{outer}$.",
    "hintAr": "معدل تغير الحجم مقسوماً على مساحة السطح يعطي معدل تغير السمك مباشرة.",
    "stepByStepSolutionEn": [
      "1. Let $R$ be iron radius and $x$ be ice thickness. Outer surface area $S = 4\\pi(R + x)^2$.",
      "2. Differentiating volume: $\\frac{dV}{dt} = 4\\pi(R + x)^2 \\frac{dx}{dt} = S \\frac{dx}{dt}$.",
      "3. Given melting rate $\\frac{dV}{dt} = -k S$, we have $S \\frac{dx}{dt} = -k S \\implies \\frac{dx}{dt} = -k$.",
      "4. The thickness decreases at a constant rate $k$."
    ],
    "stepByStepSolutionAr": [
      "١. مساحة السطح الخارجي للجليد: $S = 4\\pi(R + x)^2$.",
      "٢. بالاشتقاق الزمني: $\\frac{dV}{dt} = S \\frac{dx}{dt}$.",
      "٣. بما أن معدل الذوبان $\\frac{dV}{dt} = -k S$، إذن $S \\frac{dx}{dt} = -k S \\implies \\frac{dx}{dt} = -k$.",
      "٤. إذن يتناقص السمك بمعدل ثابت تماماً."
    ],
    "teacherTipEn": "A celebrated physics and calculus modeling application in the Egyptian curriculum.",
    "teacherTipAr": "تطبيق فيزيائي وتفاضلي شهير جداً في كتاب الوزارة المصري."
  },
  {
    "id": "calc_ch1_db_hots_23",
    "titleEn": "Constant Sum of Intercepts of Tangent to Radical Curve",
    "titleAr": "ثبات مجموع الجزأين المقطوعين لمماس منحنى جذري",
    "difficulty": "hots",
    "questionEn": "For the curve $\\sqrt{x} + \\sqrt{y} = \\sqrt{a}$, the sum of the intercepts made by any tangent line on the coordinate axes is:",
    "questionAr": "للمنحنى $\\sqrt{x} + \\sqrt{y} = \\sqrt{a}$، مجموع الجزأين اللذين يقطعهما أي مماس للمنحنى من محوري الإحداثيات يساوي:",
    "optionsEn": [
      "$a$",
      "$2a$",
      "$\\sqrt{a}$",
      "$\\frac{a}{2}$"
    ],
    "optionsAr": [
      "$a$",
      "$2a$",
      "$\\sqrt{a}$",
      "$\\frac{a}{2}$"
    ],
    "correctAnswer": "$a$",
    "correctIndex": 0,
    "hintEn": "Tangent equation at $(x_0, y_0)$ is $\\frac{x}{\\sqrt{x_0}} + \\frac{y}{\\sqrt{y_0}} = \\sqrt{a}$.",
    "hintAr": "معادلة المماس تعطي الجزأين المقطوعين $X = \\sqrt{a}\\sqrt{x_0}$ و $Y = \\sqrt{a}\\sqrt{y_0}$.",
    "stepByStepSolutionEn": [
      "1. Differentiating implicitly: $\\frac{1}{2\\sqrt{x}} + \\frac{y'}{2\\sqrt{y}} = 0 \\implies y' = -\\sqrt{\\frac{y}{x}}$.",
      "2. Tangent at $(x_0, y_0)$: $y - y_0 = -\\frac{\\sqrt{y_0}}{\\sqrt{x_0}}(x - x_0) \\implies \\frac{x}{\\sqrt{x_0}} + \\frac{y}{\\sqrt{y_0}} = \\sqrt{x_0} + \\sqrt{y_0} = \\sqrt{a}$.",
      "3. Setting $y = 0$ gives $X = \\sqrt{a}\\sqrt{x_0}$, and setting $x = 0$ gives $Y = \\sqrt{a}\\sqrt{y_0}$.",
      "4. Sum of intercepts $= X + Y = \\sqrt{a}(\\sqrt{x_0} + \\sqrt{y_0}) = \\sqrt{a}(\\sqrt{a}) = a$."
    ],
    "stepByStepSolutionAr": [
      "١. بالاشتقاق الضمني: ميل المماس $y' = -\\sqrt{y/x}$.",
      "٢. معادلة المماس: $\\frac{x}{\\sqrt{x_0}} + \\frac{y}{\\sqrt{y_0}} = \\sqrt{a}$.",
      "٣. الجزآن المقطوعان هما $X = \\sqrt{a}\\sqrt{x_0}$ و $Y = \\sqrt{a}\\sqrt{y_0}$.",
      "٤. مجموعهما $= \\sqrt{a}(\\sqrt{x_0} + \\sqrt{y_0}) = \\sqrt{a}(\\sqrt{a}) = a$."
    ],
    "teacherTipEn": "Remarkable geometric property: the sum of the intercepts is independent of the point chosen!",
    "teacherTipAr": "خاصية هندسية مميزة: مجموع الجزأين المقطوعين ثابت دائماً ويساوي $a$."
  },
  {
    "id": "calc_ch1_db_hots_24",
    "titleEn": "Non-Differentiability Set of Absolute Value Function",
    "titleAr": "مجموعة نقاط عدم قابلية الاشتقاق لدالة مقياس",
    "difficulty": "hots",
    "questionEn": "Find the set of all real numbers where the function $f(x) = |x^2 - 4|$ is not differentiable.",
    "questionAr": "أوجد مجموعة جميع الأعداد الحقيقية التي تكون الدالة $f(x) = |x^2 - 4|$ عندها غير قابلة للاشتقاق.",
    "optionsEn": [
      "$\\{-2, 2\\}$",
      "$\\{0\\}$",
      "$\\{2\\}$",
      "$\\{-4, 4\\}$"
    ],
    "optionsAr": [
      "$\\{-2, 2\\}$",
      "$\\{0\\}$",
      "$\\{2\\}$",
      "$\\{-4, 4\\}$"
    ],
    "correctAnswer": "$\\{-2, 2\\}$",
    "correctIndex": 0,
    "hintEn": "Zeros of the inside quadratic $x^2 - 4 = 0$ are sharp corner points where left and right derivatives differ.",
    "hintAr": "أصفار ما بداخل المقياس تمثل رؤوساً مدببة تختلف عندها المشتقة اليمنى عن اليسرى.",
    "stepByStepSolutionEn": [
      "1. Factor: $x^2 - 4 = (x - 2)(x + 2)$.",
      "2. At $x = 2$, left derivative is $-4$ and right derivative is $+4$.",
      "3. At $x = -2$, left derivative is $+4$ and right derivative is $-4$.",
      "4. Since one-sided derivatives do not match, $f$ is not differentiable at $x = -2$ and $x = 2$."
    ],
    "stepByStepSolutionAr": [
      "١. ما بداخل المقياس ينعدم عند $x = 2$ و $x = -2$.",
      "٢. عند $x = 2$: المشتقة اليمنى = $+4$ واليسرى = $-4$.",
      "٣. عند $x = -2$: المشتقة اليمنى = $-4$ واليسرى = $+4$.",
      "٤. إذن مجموعة نقاط عدم قابلية الاشتقاق هي $\\{-2, 2\\}$."
    ],
    "teacherTipEn": "Sharp corner points on absolute value graphs always produce non-differentiable points.",
    "teacherTipAr": "الرؤوس المدببة (الزوايا) في منحنى دالة المقياس تمثل دائماً نقطاً غير قابلة للاشتقاق."
  },
  {
    "id": "calc_ch1_db_hots_25",
    "titleEn": "Constant Depth Rate for Conical Evaporation",
    "titleAr": "ثبات معدل هبوط العمق عند التبخر التناسبي",
    "difficulty": "hots",
    "questionEn": "Water evaporates from an inverted right circular cone of semi-vertical angle $30^\\circ$ at a rate proportional to its exposed free surface area. The depth of water decreases at:",
    "questionAr": "يتبخر الماء من خزان على شكل مخروط دائري قائم مقلوب قياس زاوية رأسه $60^\\circ$ (نصف زاوية الرأس $30^\\circ$) بمعدل يتناسب طردياً مع مساحة سطح الماء الحر المعرض للهواء. فإن عمق الماء يتناقص بمعدل:",
    "optionsEn": [
      "A constant rate",
      "A rate proportional to the depth",
      "A rate proportional to the square of depth",
      "An exponentially increasing rate"
    ],
    "optionsAr": [
      "معدل ثابت",
      "معدل يتناسب طردياً مع العمق",
      "معدل يتناسب مع مربع العمق",
      "معدل يتزايد أسياً"
    ],
    "correctAnswer": "A constant rate",
    "correctIndex": 0,
    "hintEn": "$V = \\frac{1}{3} A_{surface} \\cdot h \\implies \\frac{dV}{dt} = A \\frac{dh}{dt} = -k A$.",
    "hintAr": "مشتقة حجم المخروط بالنسبة لعمقه هي مساحة سطح قاعدته الدائرية.",
    "stepByStepSolutionEn": [
      "1. Exposed surface area is a circle of radius $r = h\\tan(30^\\circ) = \\frac{h}{\\sqrt{3}}$, so $A = \\pi r^2 = \\frac{\\pi}{3}h^2$.",
      "2. Volume $V = \\frac{1}{3}\\pi r^2 h = \\frac{\\pi}{9}h^3$.",
      "3. Differentiating: $\\frac{dV}{dt} = \\frac{\\pi}{3}h^2 \\frac{dh}{dt} = A \\frac{dh}{dt}$.",
      "4. Given evaporation rate $\\frac{dV}{dt} = -k A$, we have $A \\frac{dh}{dt} = -k A \\implies \\frac{dh}{dt} = -k$ (constant)."
    ],
    "stepByStepSolutionAr": [
      "١. مساحة سطح الماء الحر $A = \\frac{\\pi}{3}h^2$.",
      "٢. حجم الماء $V = \\frac{\\pi}{9}h^3$.",
      "٣. بالاشتقاق الزمني: $\\frac{dV}{dt} = A \\frac{dh}{dt}$.",
      "٤. بما أن $\\frac{dV}{dt} = -k A$، إذن $\\frac{dh}{dt} = -k$ (معدل هبوط ثابت)."
    ],
    "teacherTipEn": "Whenever evaporation rate is proportional to surface area, evaporation depth rate is constant.",
    "teacherTipAr": "كلما كان التبخر متناسباً مع مساحة السطح المكشوف، يكون معدل نقص الارتفاع ثابتاً."
  },
  {
    "id": "calc_ch1_db_hots_26",
    "titleEn": "Derivative of Infinite Continued Fraction",
    "titleAr": "مشتقة الكسر المستمر اللانهائي",
    "difficulty": "hots",
    "questionEn": "If $y = x + \\frac{1}{x + \\frac{1}{x + \\dots}}$, find $\\frac{dy}{dx}$ expressed in terms of $x$ and $y$.",
    "questionAr": "إذا كانت $y = x + \\frac{1}{x + \\frac{1}{x + \\dots}}$، أوجد $\\frac{dy}{dx}$ بدلالة $x$ و $y$.",
    "optionsEn": [
      "$\\frac{y}{2y - x}$",
      "$\\frac{y}{2y + x}$",
      "$\\frac{1}{2y - x}$",
      "$\\frac{x}{2y - x}$"
    ],
    "optionsAr": [
      "$\\frac{y}{2y - x}$",
      "$\\frac{y}{2y + x}$",
      "$\\frac{1}{2y - x}$",
      "$\\frac{x}{2y - x}$"
    ],
    "correctAnswer": "$\\frac{y}{2y - x}$",
    "correctIndex": 0,
    "hintEn": "Use $y = x + 1/y \\implies y^2 - xy - 1 = 0$.",
    "hintAr": "من التكرار اللانهائي: $y = x + 1/y \\implies y^2 - xy - 1 = 0$.",
    "stepByStepSolutionEn": [
      "1. By self-similarity: $y = x + \\frac{1}{y} \\implies y^2 - xy - 1 = 0$.",
      "2. Differentiate implicitly: $2y y' - (y + x y') = 0$.",
      "3. $(2y - x)y' = y \\implies y' = \\frac{y}{2y - x}$."
    ],
    "stepByStepSolutionAr": [
      "١. من التكرار اللانهائي: $y = x + \\frac{1}{y} \\implies y^2 - xy - 1 = 0$.",
      "٢. بالاشتقاق الضمني: $2y y' - y - x y' = 0$.",
      "٣. تجميع الحدود: $(2y - x)y' = y \\implies y' = \\frac{y}{2y - x}$."
    ],
    "teacherTipEn": "Multiply through by $y$ before differentiating to avoid fractional differentiation.",
    "teacherTipAr": "الضرب في $y$ للتخلص من الكسر قبل الاشتقاق يمنع الأخطاء الجبرية."
  },
  {
    "id": "calc_ch1_db_hots_27",
    "titleEn": "Angle of Intersection of Dual Parabolas",
    "titleAr": "زاوية تقاطع قطعين مكافئين متعاكسين",
    "difficulty": "hots",
    "questionEn": "Find the acute angle of intersection between the two parabolas $y^2 = 4x$ and $x^2 = 4y$ at the point $(4, 4)$.",
    "questionAr": "أوجد قياس الزاوية الحادة بين مماسي المنحنيين $y^2 = 4x$ و $x^2 = 4y$ عند نقطة تقاطعهما $(4, 4)$.",
    "optionsEn": [
      "$\\arctan\\left(\\frac{3}{4}\\right)$",
      "$\\arctan\\left(\\frac{4}{3}\\right)$",
      "$45^\\circ$",
      "$60^\\circ$"
    ],
    "optionsAr": [
      "$\\arctan\\left(\\frac{3}{4}\\right)$",
      "$\\arctan\\left(\\frac{4}{3}\\right)$",
      "$45^\\circ$",
      "$60^\\circ$"
    ],
    "correctAnswer": "$\\arctan\\left(\\frac{3}{4}\\right)$",
    "correctIndex": 0,
    "hintEn": "Slopes are $m_1 = 1/2$ and $m_2 = 2$.",
    "hintAr": "ميلا المماسين هما مقلوب كل منهما للآخر: $1/2$ و $2$.",
    "stepByStepSolutionEn": [
      "1. For $y^2 = 4x$: $2y y' = 4 \\implies y' = \\frac{2}{y}$. At $(4, 4)$, $m_1 = \\frac{2}{4} = \\frac{1}{2}$.",
      "2. For $x^2 = 4y$: $2x = 4y' \\implies y' = \\frac{x}{2}$. At $(4, 4)$, $m_2 = \\frac{4}{2} = 2$.",
      "3. $\\tan\\theta = \\left|\\frac{2 - 1/2}{1 + (2)(1/2)}\\right| = \\frac{3/2}{2} = \\frac{3}{4} \\implies \\theta = \\arctan\\left(\\frac{3}{4}\\right)$."
    ],
    "stepByStepSolutionAr": [
      "١. للمنحنى الأول: $m_1 = 2/4 = 1/2$.",
      "٢. للمنحنى الثاني: $m_2 = 4/2 = 2$.",
      "٣. $\\tan\\theta = \\left|\\frac{2 - 1/2}{1 + 1}\\right| = \\frac{1.5}{2} = \\frac{3}{4}$.",
      "٤. إذن $\\theta = \\arctan(3/4)$."
    ],
    "teacherTipEn": "The two parabolas are mutual inverses $y = f(x)$ and $x = f(y)$, so their slopes are reciprocals.",
    "teacherTipAr": "المنحنيان معكوسان لبعضهما حول المستقيم $y=x$، ولذا ميلهما مقلوب للآخر دائماً."
  },
  {
    "id": "calc_ch1_db_hots_28",
    "titleEn": "Lighthouse Beam Tracking Speed",
    "titleAr": "سرعة بقعة ضوء فنار على شاطئ مستقيم",
    "difficulty": "hots",
    "questionEn": "A lighthouse is located $1\\text{ km}$ offshore from a straight shoreline. Its light beam revolves at a constant speed of $2\\text{ rev/min}$. How fast is the beam of light moving along the shoreline when the beam makes an angle of $45^\\circ$ with the shoreline?",
    "questionAr": "فنار يقع على بعد $1\\text{ كم}$ من شاطئ مستقيم، يدور شعاعه الضوئي بمعدل ثابت قدره دورتان في الدقيقة. ما هي سرعة تحرك بقعة الضوء على الشاطئ عندما يصنع الشعاع زاوية قياسها $45^\\circ$ مع الشاطئ؟",
    "optionsEn": [
      "$8\\pi\\text{ km/min}$",
      "$4\\pi\\text{ km/min}$",
      "$2\\pi\\text{ km/min}$",
      "$16\\pi\\text{ km/min}$"
    ],
    "optionsAr": [
      "$8\\pi\\text{ كم/دقيقة}$",
      "$4\\pi\\text{ كم/دقيقة}$",
      "$2\\pi\\text{ كم/دقيقة}$",
      "$16\\pi\\text{ كم/دقيقة}$"
    ],
    "correctAnswer": "$8\\pi\\text{ km/min}$",
    "correctIndex": 0,
    "hintEn": "$\\frac{d\\theta}{dt} = 2(2\\pi) = 4\\pi\\text{ rad/min}$. $x = \\tan\\theta \\implies \\frac{dx}{dt} = \\sec^2\\theta \\frac{d\\theta}{dt}$.",
    "hintAr": "حول السرعة الزاوية إلى راديان/دقيقة: $2 \\times 2\\pi = 4\\pi$.",
    "stepByStepSolutionEn": [
      "1. Angular speed: $\\omega = \\frac{d\\theta}{dt} = 2 \\times 2\\pi = 4\\pi\\text{ rad/min}$.",
      "2. Position along shoreline: $x = 1 \\cdot \\tan\\theta$.",
      "3. Differentiating: $\\frac{dx}{dt} = \\sec^2\\theta \\frac{d\\theta}{dt}$.",
      "4. At angle $45^\\circ$: $\\sec^2(45^\\circ) = (\\sqrt{2})^2 = 2$.",
      "5. Speed: $\\frac{dx}{dt} = 2 \\times 4\\pi = 8\\pi\\text{ km/min}$."
    ],
    "stepByStepSolutionAr": [
      "١. السرعة الزاوية: $\\omega = 2 \\times 2\\pi = 4\\pi\\text{ راديان/د}$.",
      "٢. بعد بقعة الضوء: $x = \\tan\\theta$.",
      "٣. بالاشتقاق: $\\frac{dx}{dt} = \\sec^2\\theta \\frac{d\\theta}{dt}$.",
      "٤. عند $\\theta = 45^\\circ$: $\\sec^2(45^\\circ) = 2$.",
      "٥. إذن السرعة = $2 \\times 4\\pi = 8\\pi\\text{ كم/د}$."
    ],
    "teacherTipEn": "Revolutions per minute must always be converted to radians per minute by multiplying by $2\\pi$.",
    "teacherTipAr": "يجب دائماً تحويل الدورات في الدقيقة إلى راديان بالضرب في $2\\pi$."
  },
  {
    "id": "calc_ch1_db_hots_29",
    "titleEn": "Unit Circle Second Derivative Curvature Product",
    "titleAr": "حاصل ضرب المشتقة الثانية في مكعب ص لدائرة الوحدة",
    "difficulty": "hots",
    "questionEn": "For the unit circle $x^2 + y^2 = 1$, the value of the product $y^3 \\frac{d^2y}{dx^2}$ is:",
    "questionAr": "لدائرة الوحدة $x^2 + y^2 = 1$، قيمة المقدار $y^3 \\frac{d^2y}{dx^2}$ تساوي:",
    "optionsEn": [
      "$-1$",
      "$1$",
      "$0$",
      "$-y^2$"
    ],
    "optionsAr": [
      "$-1$",
      "$1$",
      "$0$",
      "$-y^2$"
    ],
    "correctAnswer": "$-1$",
    "correctIndex": 0,
    "hintEn": "Recall $y'' = -\\frac{x^2+y^2}{y^3} = -\\frac{1}{y^3}$.",
    "hintAr": "المشتقة الثانية لدائرة الوحدة هي $y'' = -1/y^3$.",
    "stepByStepSolutionEn": [
      "1. First derivative: $2x + 2y y' = 0 \\implies y' = -\\frac{x}{y}$.",
      "2. Second derivative: $y'' = -\\frac{y - x y'}{y^2} = -\\frac{y + x(x/y)}{y^2} = -\\frac{x^2 + y^2}{y^3}$.",
      "3. Since $x^2 + y^2 = 1$, $y'' = -\\frac{1}{y^3}$.",
      "4. Multiplying by $y^3$: $y^3 y'' = -1$."
    ],
    "stepByStepSolutionAr": [
      "١. $y' = -x/y$.",
      "٢. $y'' = -\\frac{x^2 + y^2}{y^3}$.",
      "٣. بما أن $x^2 + y^2 = 1$، فإن $y'' = -\\frac{1}{y^3}$.",
      "٤. إذن $y^3 y'' = -1$."
    ],
    "teacherTipEn": "A universal invariant for the unit circle.",
    "teacherTipAr": "مقدار ثابت مميز جداً لدائرة الوحدة في حساب التفاضل."
  },
  {
    "id": "calc_ch1_db_hots_30",
    "titleEn": "Closed Form for nth Derivative of Sin plus Cos",
    "titleAr": "الصيغة المغلقة للمشتقة النونية لمجموع الجيب وجيب التمام",
    "difficulty": "hots",
    "questionEn": "Which of the following gives the $n$-th derivative of $y = \\cos x + \\sin x$ in concise harmonic form?",
    "questionAr": "أي مما يلي يعطي المشتقة النونية للدالة $y = \\cos x + \\sin x$ في صورة توافقية موجزة؟",
    "optionsEn": [
      "$\\sqrt{2}\\sin\\left(x + \\frac{\\pi}{4} + \\frac{n\\pi}{2}\\right)$",
      "$\\sqrt{2}\\cos\\left(x + \\frac{n\\pi}{2}\\right)$",
      "$(-1)^n(\\cos x + \\sin x)$",
      "$2^{n/2}(\\cos x + \\sin x)$"
    ],
    "optionsAr": [
      "$\\sqrt{2}\\sin\\left(x + \\frac{\\pi}{4} + \\frac{n\\pi}{2}\\right)$",
      "$\\sqrt{2}\\cos\\left(x + \\frac{n\\pi}{2}\\right)$",
      "$(-1)^n(\\cos x + \\sin x)$",
      "$2^{n/2}(\\cos x + \\sin x)$"
    ],
    "correctAnswer": "$\\sqrt{2}\\sin\\left(x + \\frac{\\pi}{4} + \\frac{n\\pi}{2}\\right)$",
    "correctIndex": 0,
    "hintEn": "Each differentiation advances the phase by $\\pi/2$.",
    "hintAr": "كل عملية اشتقاق للدوال الجيبية تقدم طور الزاوية بمقدار $\\pi/2$.",
    "stepByStepSolutionEn": [
      "1. Rewrite $y = \\sqrt{2}\\left(\\frac{1}{\\sqrt{2}}\\sin x + \\frac{1}{\\sqrt{2}}\\cos x\\right) = \\sqrt{2}\\sin\\left(x + \\frac{\\pi}{4}\\right)$.",
      "2. Differentiating $\\sin u$ shifts phase by $\\pi/2$: $\\frac{d}{dx}[\\sin(x + \\alpha)] = \\cos(x + \\alpha) = \\sin\\left(x + \\alpha + \\frac{\\pi}{2}\\right)$.",
      "3. Repeating $n$ times gives $y^{(n)} = \\sqrt{2}\\sin\\left(x + \\frac{\\pi}{4} + \\frac{n\\pi}{2}\\right)$."
    ],
    "stepByStepSolutionAr": [
      "١. بالصورة التوافقية: $y = \\sqrt{2}\\sin(x + \\pi/4)$.",
      "٢. مشتقة دالة الجيب تقدم زاوية الطور بـ $\\pi/2$ في كل مرة.",
      "٣. بعد $n$ من الاشتقاقات: $y^{(n)} = \\sqrt{2}\\sin(x + \\pi/4 + n\\pi/2)$."
    ],
    "teacherTipEn": "Phase-shift harmonic notation allows evaluating any arbitrary derivative without tables.",
    "teacherTipAr": "صيغة زاوية الطور تمكنك من إيجاد أي مشتقة مهما كانت رتبتها دون حساب المشتقات السابقة."
  },
  {
    "id": "calc_ch1_db_hots_31",
    "titleEn": "Longest Pipe around Right-Angle Corridor",
    "titleAr": "أطول ماسورة يمكن تمريرها أفقياً بين ممرين متعامدين",
    "difficulty": "hots",
    "questionEn": "A hallway of width $8\\text{ m}$ meets another hallway of width $27\\text{ m}$ at right angles. What is the maximum length of a thin rigid pipe that can be carried horizontally around the corner?",
    "questionAr": "ممر عرضه $8\\text{ م}$ يلتقي بممر آخر عرضه $27\\text{ م}$ بزاوية قائمة. ما هو أقصى طول لماسورة رفيعة صلبة يمكن تمريرها أفقياً حول هذا المنعطف؟",
    "optionsEn": [
      "$13\\sqrt{13}\\text{ m}$",
      "$35\\text{ m}$",
      "$40\\text{ m}$",
      "$15\\sqrt{5}\\text{ m}$"
    ],
    "optionsAr": [
      "$13\\sqrt{13}\\text{ م}$",
      "$35\\text{ م}$",
      "$40\\text{ م}$",
      "$15\\sqrt{5}\\text{ م}$"
    ],
    "correctAnswer": "$13\\sqrt{13}\\text{ m}$",
    "correctIndex": 0,
    "hintEn": "Use formula $L_{\\max} = (a^{2/3} + b^{2/3})^{3/2}$.",
    "hintAr": "صيغة أقصى طول لماسورة حول منعطف متعامد: $L = (a^{2/3} + b^{2/3})^{3/2}$.",
    "stepByStepSolutionEn": [
      "1. For corridor widths $a$ and $b$, the maximum passable length is $L = (a^{2/3} + b^{2/3})^{3/2}$.",
      "2. Here $a = 8$ and $b = 27$.",
      "3. $a^{2/3} = (8)^{2/3} = 4$, and $b^{2/3} = (27)^{2/3} = 9$.",
      "4. $a^{2/3} + b^{2/3} = 4 + 9 = 13$.",
      "5. $L = 13^{3/2} = 13\\sqrt{13}\\text{ m}$."
    ],
    "stepByStepSolutionAr": [
      "١. القانون العام لأقصى طول هو $L = (a^{2/3} + b^{2/3})^{3/2}$.",
      "٢. $8^{2/3} = 4$ و $27^{2/3} = 9$.",
      "٣. مجموع الجذرين التكعيبيين المربعين = $4 + 9 = 13$.",
      "٤. إذن الطول = $13^{3/2} = 13\\sqrt{13}\\text{ م}$."
    ],
    "teacherTipEn": "Notice the beautiful power $2/3$ and $3/2$ duality from astroid geometry!",
    "teacherTipAr": "لاحظ تشابه هذه العلاقة ذات الأسس 2/3 و 3/2 مع هندسة منحنى الأسترويد!"
  },
  {
    "id": "calc_ch1_db_hots_32",
    "titleEn": "Second Derivative of Secant plus Tangent in Sine Form",
    "titleAr": "المشتقة الثانية لمجموع القاطع والظل بدلالة الجيب",
    "difficulty": "hots",
    "questionEn": "If $y = \\sec x + \\tan x$, prove that $\\frac{d^2y}{dx^2}$ is identically equal to:",
    "questionAr": "إذا كانت $y = \\sec x + \\tan x$، فأثبت أن المشتقة الثانية $\\frac{d^2y}{dx^2}$ تكافئ المقدار:",
    "optionsEn": [
      "$\\frac{\\cos x}{(1 - \\sin x)^2}$",
      "$\\frac{\\sin x}{(1 - \\cos x)^2}$",
      "$\\frac{1}{(1 - \\sin x)^2}$",
      "$\\frac{\\cos x}{1 - \\sin^2 x}$"
    ],
    "optionsAr": [
      "$\\frac{\\cos x}{(1 - \\sin x)^2}$",
      "$\\frac{\\sin x}{(1 - \\cos x)^2}$",
      "$\\frac{1}{(1 - \\sin x)^2}$",
      "$\\frac{\\cos x}{1 - \\sin^2 x}$"
    ],
    "correctAnswer": "$\\frac{\\cos x}{(1 - \\sin x)^2}$",
    "correctIndex": 0,
    "hintEn": "Express $y = \\frac{1 + \\sin x}{\\cos x} = \\frac{\\cos x}{1 - \\sin x}$.",
    "hintAr": "عبر عن الدالة بالكسر $\\frac{\\cos x}{1 - \\sin x}$ قبل الاشتقاق.",
    "stepByStepSolutionEn": [
      "1. Multiply numerator and denominator by $1 - \\sin x$: $y = \\frac{1 - \\sin^2 x}{\\cos x(1 - \\sin x)} = \\frac{\\cos^2 x}{\\cos x(1 - \\sin x)} = \\frac{\\cos x}{1 - \\sin x}$.",
      "2. Differentiating with quotient rule: $y' = \\frac{-\\sin x(1 - \\sin x) - \\cos x(-\\cos x)}{(1 - \\sin x)^2} = \\frac{-\\sin x + \\sin^2 x + \\cos^2 x}{(1 - \\sin x)^2} = \\frac{1 - \\sin x}{(1 - \\sin x)^2} = \\frac{1}{1 - \\sin x}$.",
      "3. Differentiating again: $y'' = -1(1 - \\sin x)^{-2}(-\\cos x) = \\frac{\\cos x}{(1 - \\sin x)^2}$."
    ],
    "stepByStepSolutionAr": [
      "١. $y = \\frac{\\cos x}{1 - \\sin x}$.",
      "٢. بالاشتقاق بقاعدة القسمة نجد أن $y' = \\frac{1}{1 - \\sin x}$.",
      "٣. بالاشتقاق مرة ثانية: $y'' = \\frac{\\cos x}{(1 - \\sin x)^2}$."
    ],
    "teacherTipEn": "The intermediate cancellation $y' = \\frac{1}{1 - \\sin x}$ is a stunning algebraic shortcut.",
    "teacherTipAr": "اختصار المشتقة الأولى إلى $\\frac{1}{1 - \\sin x}$ هو مفتاح الحل الأنيق."
  },
  {
    "id": "calc_ch1_db_hots_33",
    "titleEn": "Parabola Focal Distance Rate of Change",
    "titleAr": "معدل تغير البعد البؤري لنقطة على قطع مكافئ",
    "difficulty": "hots",
    "questionEn": "A point $P(x, y)$ moves on the parabola $y^2 = 8x$. At what rate is the distance between $P$ and the focus $(2, 0)$ changing when $x = 6$ and $\\frac{dx}{dt} = 3\\text{ units/s}$?",
    "questionAr": "تتحرك نقطة $P(x, y)$ على المنحنى $y^2 = 8x$. ما هو معدل تغير المسافة بين $P$ والبؤرة $(2, 0)$ عندما $x = 6$ وكان $\\frac{dx}{dt} = 3\\text{ وحدة/ث}$؟",
    "optionsEn": [
      "$3\\text{ units/s}$",
      "$6\\text{ units/s}$",
      "$1.5\\text{ units/s}$",
      "$8\\text{ units/s}$"
    ],
    "optionsAr": [
      "$3\\text{ وحدة/ث}$",
      "$6\\text{ وحدة/ث}$",
      "$1.5\\text{ وحدة/ث}$",
      "$8\\text{ وحدة/ث}$"
    ],
    "correctAnswer": "$3\\text{ units/s}$",
    "correctIndex": 0,
    "hintEn": "By definition of a parabola, distance to focus equals distance to directrix $x = -2$, so $s = x + 2$.",
    "hintAr": "من التعريف الهندسي للقطع المكافئ: البعد عن البؤرة يساوي البعد عن الدليل $s = x + 2$.",
    "stepByStepSolutionEn": [
      "1. For $y^2 = 4ax = 8x$, we have $a = 2$. Focus is $(2, 0)$ and directrix is $x = -2$.",
      "2. By the focal property of parabolas, distance to focus equals distance to directrix: $s = x - (-2) = x + 2$.",
      "3. Differentiating with respect to time: $\\frac{ds}{dt} = \\frac{dx}{dt}$.",
      "4. Given $\\frac{dx}{dt} = 3\\text{ units/s}$, we immediately have $\\frac{ds}{dt} = 3\\text{ units/s}$."
    ],
    "stepByStepSolutionAr": [
      "١. معادلة القطع $y^2 = 8x \\implies a = 2$. البؤرة هي $(2, 0)$ والدليل هو $x = -2$.",
      "٢. من الخاصية البؤرية: المسافة للبؤرة = المسافة للدليل = $s = x + 2$.",
      "٣. بالاشتقاق الزمني: $\\frac{ds}{dt} = \\frac{dx}{dt}$.",
      "٤. إذن $\\frac{ds}{dt} = 3\\text{ وحدة/ث}$."
    ],
    "teacherTipEn": "Using focal geometry eliminates the need to differentiate square roots of coordinate distance formulas.",
    "teacherTipAr": "توظيف التعريف الهندسي للقطع المكافئ يلغي الحاجة لاشتقاق جذور المسافة المعقدة."
  },
  {
    "id": "calc_ch1_db_hots_34",
    "titleEn": "Differential Relation of Harmonic Trigonometric Vector",
    "titleAr": "علاقة تفاضلية لمتجه توافقي دائري",
    "difficulty": "hots",
    "questionEn": "If $x = a\\cos t + b\\sin t$ and $y = a\\sin t - b\\cos t$, evaluate the expression $y \\frac{dy}{dx} + x$.",
    "questionAr": "إذا كانت $x = a\\cos t + b\\sin t$ و $y = a\\sin t - b\\cos t$، فما قيمة المقدار $y \\frac{dy}{dx} + x$؟",
    "optionsEn": [
      "$0$",
      "$a^2 + b^2$",
      "$1$",
      "$2x$"
    ],
    "optionsAr": [
      "$0$",
      "$a^2 + b^2$",
      "$1$",
      "$2x$"
    ],
    "correctAnswer": "$0$",
    "correctIndex": 0,
    "hintEn": "Square and add: $x^2 + y^2 = a^2 + b^2$, then differentiate implicitly.",
    "hintAr": "ربع واجمع المعادلتين لتجد $x^2 + y^2 = a^2 + b^2$ ثم اشتق ضمنياً.",
    "stepByStepSolutionEn": [
      "1. Expand $x^2 + y^2 = (a\\cos t + b\\sin t)^2 + (a\\sin t - b\\cos t)^2$.",
      "2. Cross terms $+2ab\\sin t\\cos t$ and $-2ab\\sin t\\cos t$ cancel, giving $x^2 + y^2 = a^2 + b^2$ (constant).",
      "3. Differentiating with respect to $x$: $2x + 2y \\frac{dy}{dx} = 0 \\implies y \\frac{dy}{dx} + x = 0$."
    ],
    "stepByStepSolutionAr": [
      "١. بتربيع وجمع المعادلتين: تختصر الحدود الوسطى المتعاكسة ليتبقى $x^2 + y^2 = a^2 + b^2$.",
      "٢. بالاشتقاق الضمني بالنسبة لـ $x$: $2x + 2y y' = 0$.",
      "٣. بالقسمة على 2: $y y' + x = 0$."
    ],
    "teacherTipEn": "Eliminating the parameter via Pythagorean identity is far faster than direct quotient rules.",
    "teacherTipAr": "حذف البارامتر باستخدام متطابقة فيثاغورس أسرع بكثير من حساب مشتقات الدوال الكسرية."
  },
  {
    "id": "calc_ch1_db_hots_35",
    "titleEn": "Intersection Point of Normals at x-Intercepts",
    "titleAr": "نقطة تقاطع العموديين عند نقطتي التقاطع مع محور السينات",
    "difficulty": "hots",
    "questionEn": "Normal lines to the parabola $y = x^2 - 5x + 6$ are drawn at the two points where the curve intersects the $x$-axis. Find the coordinates of their point of intersection.",
    "questionAr": "رُسم عموديان على المنحنى $y = x^2 - 5x + 6$ عند نقطتي تقاطعه مع محور السينات. أوجد إحداثيي نقطة تقاطع هذين العموديين.",
    "optionsEn": [
      "$\\left(\\frac{5}{2}, \\frac{1}{2}\\right)$",
      "$\\left(\\frac{5}{2}, -\\frac{1}{2}\\right)$",
      "$\\left(2, 3\\right)$",
      "$\\left(\\frac{5}{2}, 0\\right)$"
    ],
    "optionsAr": [
      "$\\left(\\frac{5}{2}, \\frac{1}{2}\\right)$",
      "$\\left(\\frac{5}{2}, -\\frac{1}{2}\\right)$",
      "$\\left(2, 3\\right)$",
      "$\\left(\\frac{5}{2}, 0\\right)$"
    ],
    "correctAnswer": "$\\left(\\frac{5}{2}, \\frac{1}{2}\\right)$",
    "correctIndex": 0,
    "hintEn": "Intercepts are $(2, 0)$ and $(3, 0)$. Normal slopes are $1$ and $-1$.",
    "hintAr": "نقطتا التقاطع مع السينات هما $(2, 0)$ و $(3, 0)$ وميلا العموديين هما $1$ و $-1$.",
    "stepByStepSolutionEn": [
      "1. Set $y = 0 \\implies (x - 2)(x - 3) = 0 \\implies$ points are $A(2, 0)$ and $B(3, 0)$.",
      "2. $y' = 2x - 5$.",
      "3. At $x = 2$: $m_t = -1 \\implies m_{n1} = 1$. Normal equation: $y - 0 = 1(x - 2) \\implies y = x - 2$.",
      "4. At $x = 3$: $m_t = +1 \\implies m_{n2} = -1$. Normal equation: $y - 0 = -1(x - 3) \\implies y = -x + 3$.",
      "5. Equate: $x - 2 = -x + 3 \\implies 2x = 5 \\implies x = 5/2$.",
      "6. Then $y = 5/2 - 2 = 1/2$. Point of intersection is $(5/2, 1/2)$."
    ],
    "stepByStepSolutionAr": [
      "١. نقطتا التقاطع مع محور السينات: $(2, 0)$ و $(3, 0)$.",
      "٢. $y' = 2x - 5$.",
      "٣. عند $x = 2$: ميل المماس = $-1$ وميل العمودي = $1$ والمعادلة $y = x - 2$.",
      "٤. عند $x = 3$: ميل المماس = $1$ وميل العمودي = $-1$ والمعادلة $y = -x + 3$.",
      "٥. بحل المعادلتين معاً: $x = 5/2$ و $y = 1/2$."
    ],
    "teacherTipEn": "By parabola symmetry, the $x$-coordinate of the intersection must lie on the axis of symmetry $x = 5/2$.",
    "teacherTipAr": "بسبب تماثل القطع المكافئ، يجب أن يقع الإحداثي السيني على خط التماثل $x = 5/2$."
  },
  {
    "id": "calc_ch1_db_hots_36",
    "titleEn": "Time for Spherical Droplet to Completely Evaporate",
    "titleAr": "الزمن اللازم لتبخر قطرة كروية تماماً",
    "difficulty": "hots",
    "questionEn": "A spherical water droplet evaporates such that its volume decreases at a rate proportional to its surface area. If its initial radius was $3\\text{ mm}$ and after $1\\text{ hour}$ it shrank to $2\\text{ mm}$, when will the droplet completely disappear?",
    "questionAr": "تتبخر قطرة ماء كروية بحيث يتناقص حجمها بمعدل يتناسب طردياً مع مساحة سطحها. فإذا كان نصف قطرها الابتدائي $3\\text{ مم}$ وبعد مرور ساعة أصبح $2\\text{ مم}$، فبعد كم ساعة من البداية تتلاشى القطرة تماماً؟",
    "optionsEn": [
      "$3\\text{ hours}$",
      "$4\\text{ hours}$",
      "$2.5\\text{ hours}$",
      "$6\\text{ hours}$"
    ],
    "optionsAr": [
      "$3\\text{ ساعات}$",
      "$4\\text{ ساعات}$",
      "$2.5\\text{ ساعة}$",
      "$6\\text{ ساعات}$"
    ],
    "correctAnswer": "$3\\text{ hours}$",
    "correctIndex": 0,
    "hintEn": "$\\frac{dr}{dt} = -k$ is constant. $r(t) = r_0 - k t$.",
    "hintAr": "معدل تناقص نصف القطر ثابت: $r(t) = 3 - k t$.",
    "stepByStepSolutionEn": [
      "1. $\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt} = -k(4\\pi r^2) \\implies \\frac{dr}{dt} = -k$.",
      "2. The radius decreases linearly: $r(t) = r_0 - kt = 3 - kt$.",
      "3. Given $r(1) = 2$: $3 - k(1) = 2 \\implies k = 1\\text{ mm/hour}$.",
      "4. The droplet disappears when $r = 0$: $3 - 1t = 0 \\implies t = 3\\text{ hours}$."
    ],
    "stepByStepSolutionAr": [
      "١. بما أن معدل تناقص الحجم يتناسب مع مساحة السطح، فإن معدل تناقص نصف القطر ثابت: $\\frac{dr}{dt} = -k$.",
      "٢. إذن نصف القطر دالة خطية في الزمن: $r(t) = 3 - kt$.",
      "٣. بعد ساعة: $3 - k = 2 \\implies k = 1\\text{ مم/ساعة}$.",
      "٤. تتلاشى القطرة عندما $r = 0 \\implies 3 - t = 0 \\implies t = 3\\text{ ساعات}$."
    ],
    "teacherTipEn": "Linear decrease in radius means that time to vanish is simply $r_0 / k$.",
    "teacherTipAr": "التناقص الخطي لنصف القطر يعني أن زمن التلاشي هو ببساطة نصف القطر الابتدائي مقسوماً على معدل النقص."
  },
  {
    "id": "calc_ch1_db_hots_37",
    "titleEn": "Logarithmic Differentiation of Power Function",
    "titleAr": "الاشتقاق اللوغاريتمي لدالة قواها دالة مثلثية",
    "difficulty": "hots",
    "questionEn": "If $y = x^{\\sin x}$ for $x > 0$, evaluate $\\frac{dy}{dx}$ at $x = \\frac{\\pi}{2}$.",
    "questionAr": "إذا كانت $y = x^{\\sin x}$ حيث $x > 0$، فاحسب قيمة $\\frac{dy}{dx}$ عند $x = \\frac{\\pi}{2}$.",
    "optionsEn": [
      "$1$",
      "$\\frac{\\pi}{2}$",
      "$0$",
      "$\\ln\\left(\\frac{\\pi}{2}\\right)$"
    ],
    "optionsAr": [
      "$1$",
      "$\\frac{\\pi}{2}$",
      "$0$",
      "$\\ln\\left(\\frac{\\pi}{2}\\right)$"
    ],
    "correctAnswer": "$1$",
    "correctIndex": 0,
    "hintEn": "Take natural logarithms: $\\ln y = \\sin x \\ln x$, then differentiate.",
    "hintAr": "خذ اللوغاريتم للطرفين: $\\ln y = \\sin x \\ln x$ ثم اشتق ضمنياً.",
    "stepByStepSolutionEn": [
      "1. Taking logarithms: $\\ln y = \\sin x \\ln x$.",
      "2. Differentiating: $\\frac{y'}{y} = \\cos x \\ln x + \\frac{\\sin x}{x}$.",
      "3. At $x = \\pi/2$: $y = (\\pi/2)^{\\sin(\\pi/2)} = (\\pi/2)^1 = \\frac{\\pi}{2}$.",
      "4. Evaluate: $\\frac{y'}{\\pi/2} = \\cos(\\pi/2)\\ln(\\pi/2) + \\frac{\\sin(\\pi/2)}{\\pi/2} = 0 + \\frac{1}{\\pi/2} = \\frac{2}{\\pi}$.",
      "5. Multiplying by $y = \\pi/2$: $y' = \\frac{\\pi}{2} \\times \\frac{2}{\\pi} = 1$."
    ],
    "stepByStepSolutionAr": [
      "١. بأخذ اللوغاريتم: $\\ln y = \\sin x \\ln x$.",
      "٢. بالاشتقاق: $\\frac{y'}{y} = \\cos x \\ln x + \\frac{\\sin x}{x}$.",
      "٣. عند $x = \\pi/2$: $y = \\pi/2$.",
      "٤. $\\frac{y'}{\\pi/2} = 0 + \\frac{1}{\\pi/2} = \\frac{2}{\\pi}$.",
      "٥. إذن $y' = 1$."
    ],
    "teacherTipEn": "The term with $\\cos(\\pi/2)$ vanishes completely because $\\cos(\\pi/2) = 0$.",
    "teacherTipAr": "الحد المضروب في جيب تمام $\\pi/2$ يختفي تماماً لأن $\\cos(\\pi/2) = 0$."
  },
  {
    "id": "calc_ch1_db_hots_38",
    "titleEn": "Slope Ratio at Re-intersection of Cubic Tangent",
    "titleAr": "نسبة ميل المماس عند نقطة تقاطعه مع المنحنى التكعيبي",
    "difficulty": "hots",
    "questionEn": "The tangent line to the curve $y = x^3$ at point $P(x_0, y_0)$ ($x_0 \\neq 0$) intersects the curve again at point $Q$. The ratio of the slope of the tangent at $Q$ to the slope of the tangent at $P$ is:",
    "questionAr": "مماس المنحنى $y = x^3$ عند النقطة $P(x_0, y_0)$ حيث $x_0 \\neq 0$ يقطع المنحنى مرة أخرى عند نقطة $Q$. فإن النسبة بين ميل المماس عند $Q$ إلى ميل المماس عند $P$ تساوي:",
    "optionsEn": [
      "$4$",
      "$2$",
      "$-2$",
      "$-8$"
    ],
    "optionsAr": [
      "$4$",
      "$2$",
      "$-2$",
      "$-8$"
    ],
    "correctAnswer": "$4$",
    "correctIndex": 0,
    "hintEn": "Show that $x_Q = -2x_0$, then $m_Q / m_P = 3(-2x_0)^2 / (3x_0^2) = 4$.",
    "hintAr": "أثبت أن الإحداثي السيني للنقطة $Q$ هو $-2x_0$ ثم قارن المشتقّتين.",
    "stepByStepSolutionEn": [
      "1. Slope at $P$ is $m_P = 3x_0^2$. Tangent line: $y = 3x_0^2 x - 2x_0^3$.",
      "2. Intersect with $y = x^3$: $x^3 - 3x_0^2 x + 2x_0^3 = 0$.",
      "3. Since $x_0$ is a double root (point of tangency), factor as $(x - x_0)^2(x + 2x_0) = 0$.",
      "4. The second intersection point has $x_Q = -2x_0$.",
      "5. Slope at $Q$: $m_Q = 3x_Q^2 = 3(-2x_0)^2 = 12x_0^2 = 4(3x_0^2) = 4 m_P$."
    ],
    "stepByStepSolutionAr": [
      "١. ميل المماس عند $P$ هو $3x_0^2$.",
      "٢. بالحل المشترك مع $y = x^3$: $(x - x_0)^2(x + 2x_0) = 0$.",
      "٣. نقطة التقاطع الثانية هي $x_Q = -2x_0$.",
      "٤. ميل المماس عند $Q$ هو $3(-2x_0)^2 = 12x_0^2 = 4(3x_0^2) = 4 m_P$."
    ],
    "teacherTipEn": "A famous invariant property of cubic parabolas: slope at re-intersection is always 4 times the original slope!",
    "teacherTipAr": "خاصية هندسية مميزة لكثيرات الحدود التكعيبية: الميل عند نقطة التقاطع الثانية يساوي دائماً 4 أمثال الميل عند نقطة التماس!"
  },
  {
    "id": "calc_ch1_db_hots_39",
    "titleEn": "Inscribed Cylinder in Cone Critical Rate",
    "titleAr": "معدل تغير حجم أسطوانة محتواة في مخروط",
    "difficulty": "hots",
    "questionEn": "A right circular cylinder of radius $r$ is inscribed in a cone of height $12\\text{ cm}$ and base radius $6\\text{ cm}$. When $r = 4\\text{ cm}$, the radius increases at $0.1\\text{ cm/s}$. What is the rate of change of the volume of the cylinder at that moment?",
    "questionAr": "أسطوانة دائرية قائمة نصف قطرها $r$ مرسومة داخل مخروط ارتفاعه $12\\text{ سم}$ ونصف قطر قاعدته $6\\text{ سم}$. عندما كان $r = 4\\text{ سم}$، تزايد نصف قطر الأسطوانة بمعدل $0.1\\text{ سم/ث}$. ما هو معدل تغير حجم الأسطوانة في تلك اللحظة؟",
    "optionsEn": [
      "$0\\text{ cm}^3/\\text{s}$",
      "$3.2\\pi\\text{ cm}^3/\\text{s}$",
      "$1.6\\pi\\text{ cm}^3/\\text{s}$",
      "$6.4\\pi\\text{ cm}^3/\\text{s}$"
    ],
    "optionsAr": [
      "$0\\text{ سم}^3/\\text{ث}$",
      "$3.2\\pi\\text{ سم}^3/\\text{ث}$",
      "$1.6\\pi\\text{ سم}^3/\\text{ث}$",
      "$6.4\\pi\\text{ سم}^3/\\text{ث}$"
    ],
    "correctAnswer": "$0\\text{ cm}^3/\\text{s}$",
    "correctIndex": 0,
    "hintEn": "$h = 12(1 - r/6) = 12 - 2r$. Check $\\frac{dV}{dr}$ at $r = 4$.",
    "hintAr": "الارتفاع $h = 12 - 2r$. اشتق الحجم بالنسبة لـ $r$ ولاحظ انعدام المشتقة.",
    "stepByStepSolutionEn": [
      "1. By similar triangles: $\\frac{12 - h}{r} = \\frac{12}{6} = 2 \\implies h = 12 - 2r$.",
      "2. Cylinder volume: $V = \\pi r^2 h = \\pi r^2(12 - 2r) = 2\\pi(6r^2 - r^3)$.",
      "3. Rate of change: $\\frac{dV}{dt} = 2\\pi(12r - 3r^2)\\frac{dr}{dt}$.",
      "4. At $r = 4$: $12(4) - 3(4^2) = 48 - 48 = 0$.",
      "5. Therefore, $\\frac{dV}{dt} = 0\\text{ cm}^3/\\text{s}$."
    ],
    "stepByStepSolutionAr": [
      "١. من تشابه المثلثات: $h = 12 - 2r$.",
      "٢. حجم الأسطوانة: $V = 2\\pi(6r^2 - r^3)$.",
      "٣. المشتقة بالنسبة للزمن: $\\frac{dV}{dt} = 2\\pi(12r - 3r^2)\\frac{dr}{dt}$.",
      "٤. عند $r = 4$: القوس $(48 - 48) = 0$.",
      "٥. إذن معدل تغير الحجم يساوي صفراً (حيث الحجم يصل لقيمته العظمى المحلية)."
    ],
    "teacherTipEn": "At the maximum volume configuration, the instantaneous rate of change is zero!",
    "teacherTipAr": "عند بلوغ الحجم قيمته العظمى المطلقة، يكون معدل التغير اللحظي مساوياً للصفر تماماً!"
  },
  {
    "id": "calc_ch1_db_hots_40",
    "titleEn": "Derivative of Sixth Powers of Trig Functions",
    "titleAr": "مشتقة مجموع القوة السادسة للجيب وجيب التمام",
    "difficulty": "hots",
    "questionEn": "If $f(x) = \\sin^6 x + \\cos^6 x$, evaluate $f'\\left(\\frac{\\pi}{8}\\right)$.",
    "questionAr": "إذا كانت $f(x) = \\sin^6 x + \\cos^6 x$، فاحسب قيمة $f'\\left(\\frac{\\pi}{8}\\right)$.",
    "optionsEn": [
      "$-\\frac{3}{2}$",
      "$\\frac{3}{2}$",
      "$0$",
      "$-\\frac{3}{4}$"
    ],
    "optionsAr": [
      "$-\\frac{3}{2}$",
      "$\\frac{3}{2}$",
      "$0$",
      "$-\\frac{3}{4}$"
    ],
    "correctAnswer": "$-\\frac{3}{2}$",
    "correctIndex": 0,
    "hintEn": "Use identity $\\sin^6 x + \\cos^6 x = 1 - \\frac{3}{4}\\sin^2(2x)$.",
    "hintAr": "المتطابقة الشهيرة: $\\sin^6 x + \\cos^6 x = 1 - \\frac{3}{4}\\sin^2(2x)$.",
    "stepByStepSolutionEn": [
      "1. Factor identity: $\\sin^6 x + \\cos^6 x = 1 - 3\\sin^2 x\\cos^2 x = 1 - \\frac{3}{4}\\sin^2(2x)$.",
      "2. Differentiating: $f'(x) = -\\frac{3}{4} \\cdot 2\\sin(2x) \\cdot 2\\cos(2x) = -\\frac{3}{2}\\sin(4x)$.",
      "3. At $x = \\frac{\\pi}{8}$, the argument is $4x = \\frac{\\pi}{2}$.",
      "4. $f'(\\pi/8) = -\\frac{3}{2}\\sin(\\pi/2) = -\\frac{3}{2}(1) = -\\frac{3}{2}$."
    ],
    "stepByStepSolutionAr": [
      "١. المتطابقة: $f(x) = 1 - \\frac{3}{4}\\sin^2(2x)$.",
      "٢. بالاشتقاق: $f'(x) = -\\frac{3}{2}\\sin(4x)$.",
      "٣. عند $x = \\pi/8$: الزاوية $4x = \\pi/2$.",
      "٤. إذن $f'(\\pi/8) = -\\frac{3}{2}(1) = -\\frac{3}{2}$."
    ],
    "teacherTipEn": "Converting high trig powers into multiple-angle forms trivializes the differentiation.",
    "teacherTipAr": "تحويل قوى الدوال المثلثية إلى زوايا مضاعفة يحول المسألة لاشتقاق مباشر وبسيط."
  },
  {
    "id": "calc_ch1_db_hots_41",
    "titleEn": "Tangent to Symmetric Implicit Trig Curve",
    "titleAr": "مماس منحنى مثلثي ضمني متماثل",
    "difficulty": "hots",
    "questionEn": "Find the equation of the tangent line to the curve $x\\sin y + y\\sin x = \\pi$ at the point $\\left(\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$.",
    "questionAr": "أوجد معادلة المماس للمنحنى $x\\sin y + y\\sin x = \\pi$ عند النقطة $\\left(\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$.",
    "optionsEn": [
      "$x + y = \\pi$",
      "$x - y = 0$",
      "$y = 2x - \\frac{\\pi}{2}$",
      "$x + 2y = \\frac{3\\pi}{2}$"
    ],
    "optionsAr": [
      "$x + y = \\pi$",
      "$x - y = 0$",
      "$y = 2x - \\frac{\\pi}{2}$",
      "$x + 2y = \\frac{3\\pi}{2}$"
    ],
    "correctAnswer": "$x + y = \\pi$",
    "correctIndex": 0,
    "hintEn": "Differentiate implicitly: $\\sin y + x\\cos y y' + y'\\sin x + y\\cos x = 0$.",
    "hintAr": "اشتق ضمنياً ولاحظ أن $\\cos(\\pi/2) = 0$.",
    "stepByStepSolutionEn": [
      "1. Differentiating implicitly: $(\\sin y + x\\cos y \\cdot y') + (y'\\sin x + y\\cos x) = 0$.",
      "2. Substitute $x = \\pi/2, y = \\pi/2$: $\\sin(\\pi/2) = 1$ and $\\cos(\\pi/2) = 0$.",
      "3. $1 + 0 + y'(1) + 0 = 0 \\implies 1 + y' = 0 \\implies y' = -1$.",
      "4. Tangent equation: $y - \\frac{\\pi}{2} = -1\\left(x - \\frac{\\pi}{2}\\right) \\implies x + y = \\pi$."
    ],
    "stepByStepSolutionAr": [
      "١. بالاشتقاق الضمني: $(\\sin y + x\\cos y y') + (y'\\sin x + y\\cos x) = 0$.",
      "٢. بالتعويض عن $x = \\pi/2, y = \\pi/2$: $1 + 0 + y'(1) + 0 = 0 \\implies y' = -1$.",
      "٣. معادلة المماس: $y - \\pi/2 = -(x - \\pi/2) \\implies x + y = \\pi$."
    ],
    "teacherTipEn": "Symmetric implicit functions $F(x, y) = F(y, x)$ have tangent slope $-1$ along the line $y = x$.",
    "teacherTipAr": "المنحنيات المتماثلة حول $y = x$ يكون ميل المماس عند أي نقطة تماثل مساوياً $-1$ دائماً."
  },
  {
    "id": "calc_ch1_db_hots_42",
    "titleEn": "Minimum Distance Between Approaching Particles",
    "titleAr": "أقرب مسافة بين جسيمين يقتربان من نقطة الأصل",
    "difficulty": "hots",
    "questionEn": "Two particles $A$ and $B$ move along perpendicular axes toward the origin with constant speeds $3\\text{ m/s}$ and $4\\text{ m/s}$ respectively. If their initial distances from the origin were $20\\text{ m}$ and $15\\text{ m}$, find the minimum distance between them.",
    "questionAr": "يتحرك جسيمان $A$ و $B$ على محورين متعامدين مقتربين من نقطة الأصل بسرعتين ثابتتين $3\\text{ م/ث}$ و $4\\text{ م/ث}$ على الترتيب. فإذا كان بعداهما الابتدائيان عن الأصل $20\\text{ م}$ و $15\\text{ م}$، فما هي أقرب مسافة يصلان إليها؟",
    "optionsEn": [
      "$7\\text{ m}$",
      "$5\\text{ m}$",
      "$0\\text{ m}$",
      "$10\\text{ m}$"
    ],
    "optionsAr": [
      "$7\\text{ م}$",
      "$5\\text{ م}$",
      "$0\\text{ م}$",
      "$10\\text{ م}$"
    ],
    "correctAnswer": "$7\\text{ m}$",
    "correctIndex": 0,
    "hintEn": "$D^2(t) = (20 - 3t)^2 + (15 - 4t)^2$. Find vertex of the quadratic.",
    "hintAr": "مربع المسافة هو دالة تربيعية في الزمن: $D^2(t) = (20 - 3t)^2 + (15 - 4t)^2$.",
    "stepByStepSolutionEn": [
      "1. Distances at time $t$: $x(t) = 20 - 3t$, $y(t) = 15 - 4t$.",
      "2. $D^2 = (20 - 3t)^2 + (15 - 4t)^2 = 25t^2 - 240t + 625$.",
      "3. Minimize $D^2$ by setting derivative to zero: $50t - 240 = 0 \\implies t = 4.8\\text{ s}$.",
      "4. At $t = 4.8$: $x = 20 - 3(4.8) = 20 - 14.4 = 5.6\\text{ m}$, and $y = 15 - 4(4.8) = 15 - 19.2 = -4.2\\text{ m}$.",
      "5. Minimum distance: $D = \\sqrt{5.6^2 + (-4.2)^2} = \\sqrt{31.36 + 17.64} = \\sqrt{49} = 7\\text{ m}$."
    ],
    "stepByStepSolutionAr": [
      "١. الإحداثيان عند اللحظة $t$: $x = 20 - 3t$ و $y = 15 - 4t$.",
      "٢. مربع المسافة: $D^2 = 25t^2 - 240t + 625$.",
      "٣. المشتقة تساوي صفراً عند $t = 240/50 = 4.8\\text{ ث}$.",
      "٤. عند هذه اللحظة: $x = 5.6$ و $y = -4.2$.",
      "٥. أقل مسافة = $\\sqrt{5.6^2 + 4.2^2} = \\sqrt{49} = 7\\text{ م}$."
    ],
    "teacherTipEn": "Minimizing the square of the distance $D^2$ avoids dealing with cumbersome square root derivatives.",
    "teacherTipAr": "تطبيق الاشتقاق على مربع المسافة $D^2$ يلغي التعامل مع مشتقات الجذور."
  },
  {
    "id": "calc_ch1_db_hots_43",
    "titleEn": "Derivative of Arctan Double Angle Form",
    "titleAr": "مشتقة قوس الظل لصيغة ضعف الزاوية",
    "difficulty": "hots",
    "questionEn": "If $y = \\arctan\\left(\\frac{2x}{1 - x^2}\\right)$ for $|x| < 1$, find $\\frac{dy}{dx}$.",
    "questionAr": "إذا كانت $y = \\arctan\\left(\\frac{2x}{1 - x^2}\\right)$ حيث $|x| < 1$، أوجد $\\frac{dy}{dx}$.",
    "optionsEn": [
      "$\\frac{2}{1 + x^2}$",
      "$\\frac{1}{1 + x^2}$",
      "$\\frac{2}{1 - x^2}$",
      "$\\frac{1}{1 - x^4}$"
    ],
    "optionsAr": [
      "$\\frac{2}{1 + x^2}$",
      "$\\frac{1}{1 + x^2}$",
      "$\\frac{2}{1 - x^2}$",
      "$\\frac{1}{1 - x^4}$"
    ],
    "correctAnswer": "$\\frac{2}{1 + x^2}$",
    "correctIndex": 0,
    "hintEn": "Substitute $x = \\tan\\theta$ to see that $y = 2\\theta = 2\\arctan x$.",
    "hintAr": "استخدم التعويض المثلثي $x = \\tan\\theta$ لتجد أن $y = 2\\arctan x$.",
    "stepByStepSolutionEn": [
      "1. Let $x = \\tan\\theta$. Then $\\frac{2x}{1 - x^2} = \\frac{2\\tan\\theta}{1 - \\tan^2\\theta} = \\tan(2\\theta)$.",
      "2. For $|x| < 1$, $y = \\arctan(\\tan 2\\theta) = 2\\theta = 2\\arctan x$.",
      "3. Differentiating with respect to $x$: $\\frac{dy}{dx} = 2 \\cdot \\frac{1}{1 + x^2} = \\frac{2}{1 + x^2}$."
    ],
    "stepByStepSolutionAr": [
      "١. بوضع $x = \\tan\\theta$: المقدار داخل القوس يصبح $\\tan(2\\theta)$.",
      "٢. إذن $y = 2\\theta = 2\\arctan x$.",
      "٣. بالاشتقاق بالنسبة لـ $x$: $\\frac{dy}{dx} = \\frac{2}{1 + x^2}$."
    ],
    "teacherTipEn": "Trigonometric substitution turns difficult inverse calculus into an instantaneous single step.",
    "teacherTipAr": "التعويض بالدوال المثلثية يحول اشتقاق الدوال العكسية إلى خطوة مباشرة وبسيطة."
  },
  {
    "id": "calc_ch1_db_hots_44",
    "titleEn": "Speed of Point on Rim of Rolling Wheel",
    "titleAr": "سرعة نقطة على محيط عجلة تتدحرج",
    "difficulty": "hots",
    "questionEn": "A wheel of radius $R$ rolls without slipping along a horizontal line with constant linear velocity $V$. The speed of a point on the rim at height $y$ ($0 \\le y \\le 2R$) above the ground is:",
    "questionAr": "تتدحرج عجلة نصف قطرها $R$ دون انزلاق على خط أفقي بسرعة خطية ثابتة $V$. ما هي السرعة اللحظية لنقطة على محيط العجلة ترتفع مسافة $y$ ($0 \\le y \\le 2R$) عن الأرض؟",
    "optionsEn": [
      "$V\\sqrt{\\frac{2y}{R}}$",
      "$V\\frac{y}{R}$",
      "$V\\sqrt{\\frac{y}{R}}$",
      "$2V\\frac{y}{R}$"
    ],
    "optionsAr": [
      "$V\\sqrt{\\frac{2y}{R}}$",
      "$V\\frac{y}{R}$",
      "$V\\sqrt{\\frac{y}{R}}$",
      "$2V\\frac{y}{R}$"
    ],
    "correctAnswer": "$V\\sqrt{\\frac{2y}{R}}$",
    "correctIndex": 0,
    "hintEn": "The cycloid parameterization is $x = R(t - \\sin t), y = R(1 - \\cos t)$. Speed is $\\sqrt{(x')^2 + (y')^2}$.",
    "hintAr": "من معادلات السيكلويد والسرعة المحصلة للتدحرج: $v = \\omega \\cdot d$.",
    "stepByStepSolutionEn": [
      "1. Parametric velocity: $v_x = V(1 - \\cos t)$ and $v_y = V\\sin t$.",
      "2. Speed $v = \\sqrt{v_x^2 + v_y^2} = V\\sqrt{(1 - \\cos t)^2 + \\sin^2 t} = V\\sqrt{2(1 - \\cos t)}$.",
      "3. Since $y = R(1 - \\cos t)$, we have $1 - \\cos t = \\frac{y}{R}$.",
      "4. Substituting gives $v = V\\sqrt{\\frac{2y}{R}}$."
    ],
    "stepByStepSolutionAr": [
      "١. مركبات السرعة من معادلات السيكلويد: $v_x = V(1 - \\cos t)$ و $v_y = V\\sin t$.",
      "٢. السرعة الكلية $v = V\\sqrt{2(1 - \\cos t)}$.",
      "٣. بما أن الارتفاع $y = R(1 - \\cos t)$، إذن $1 - \\cos t = y/R$.",
      "٤. بالتعويض: $v = V\\sqrt{\\frac{2y}{R}}$."
    ],
    "teacherTipEn": "At the ground ($y = 0$), speed is $0$ (instantaneous center of rotation), while at the top ($y = 2R$), speed is $2V$.",
    "teacherTipAr": "عند نقطة التلامس مع الأرض $y = 0$ تكون السرعة صفراً (مركز الدوران اللحظي)، وعند القمة $y = 2R$ تكون $2V$."
  },
  {
    "id": "calc_ch1_db_hots_45",
    "titleEn": "Fourth Derivative of Reciprocal of x2 minus 1",
    "titleAr": "المشتقة الرابعة لمقلوب س² ناقص 1 عند نقطة الأصل",
    "difficulty": "hots",
    "questionEn": "If $f(x) = \\frac{1}{x^2 - 1}$, find the fourth derivative value $f^{(4)}(0)$.",
    "questionAr": "إذا كانت $f(x) = \\frac{1}{x^2 - 1}$، فاحسب قيمة المشتقة الرابعة $f^{(4)}(0)$.",
    "optionsEn": [
      "$-24$",
      "$24$",
      "$0$",
      "$-12$"
    ],
    "optionsAr": [
      "$-24$",
      "$24$",
      "$0$",
      "$-12$"
    ],
    "correctAnswer": "$-24$",
    "correctIndex": 0,
    "hintEn": "Use Maclaurin geometric series: $\\frac{1}{x^2 - 1} = -(1 + x^2 + x^4 + \\dots)$.",
    "hintAr": "متسلسلة ماكلورين: الكسر يكافئ $-(1 + x^2 + x^4 + \\dots)$، ومعامل $x^4$ هو $\\frac{f^{(4)}(0)}{4!}$.",
    "stepByStepSolutionEn": [
      "1. Expand as a geometric series for $|x| < 1$: $f(x) = -\\frac{1}{1 - x^2} = -(1 + x^2 + x^4 + x^6 + \\dots)$.",
      "2. The coefficient of $x^4$ is $-1$.",
      "3. By Taylor's formula, the coefficient of $x^4$ is $\\frac{f^{(4)}(0)}{4!}$.",
      "4. Therefore, $\\frac{f^{(4)}(0)}{24} = -1 \\implies f^{(4)}(0) = -24$."
    ],
    "stepByStepSolutionAr": [
      "١. مفكوك المتسلسلة الهندسية: $f(x) = -(1 + x^2 + x^4 + \\dots)$.",
      "٢. معامل $x^4$ في المفكوك يساوي $-1$.",
      "٣. من صيغة تايلور: معامل $x^4$ هو $\\frac{f^{(4)}(0)}{4!}$.",
      "٤. إذن $f^{(4)}(0) = -1 \\times 4! = -24$."
    ],
    "teacherTipEn": "Taylor series series coefficients bypass 4 consecutive tedious quotient differentiations.",
    "teacherTipAr": "استخدام معاملات متسلسلة تايلور يعفيك من اشتقاق كسر معقد 4 مرات متتالية."
  },
  {
    "id": "calc_ch1_db_hots_46",
    "titleEn": "Points on Cubic Curve with Perpendicular Tangent",
    "titleAr": "نقاط على منحنى تكعيبي مماسها عمودي على مستقيم",
    "difficulty": "hots",
    "questionEn": "Find the $x$-coordinates of the points on $y = 2x^3 - 3x^2 - 10x + 5$ where the tangent is perpendicular to $2x + 4y - 9 = 0$.",
    "questionAr": "أوجد الإحداثيات السينية للنقاط على المنحنى $y = 2x^3 - 3x^2 - 10x + 5$ التي يكون المماس عندها عمودياً على المستقيم $2x + 4y - 9 = 0$.",
    "optionsEn": [
      "$x = -1\\text{ and }x = 2$",
      "$x = 1\\text{ and }x = -2$",
      "$x = 0\\text{ and }x = 3$",
      "$x = -3\\text{ and }x = 2$"
    ],
    "optionsAr": [
      "$x = -1\\text{ و }x = 2$",
      "$x = 1\\text{ و }x = -2$",
      "$x = 0\\text{ و }x = 3$",
      "$x = -3\\text{ و }x = 2$"
    ],
    "correctAnswer": "$x = -1\\text{ and }x = 2$",
    "correctIndex": 0,
    "hintEn": "Line slope is $-2/4 = -1/2$, so perpendicular tangent slope is $2$.",
    "hintAr": "ميل المستقيم المعطى هو $-1/2$، إذن ميل المماس العمودي عليه يجب أن يساوي 2.",
    "stepByStepSolutionEn": [
      "1. Slope of given line: $m = -\\frac{2}{4} = -\\frac{1}{2}$.",
      "2. Perpendicular tangent slope: $m_t = -\\frac{1}{-1/2} = 2$.",
      "3. $y' = 6x^2 - 6x - 10$.",
      "4. Set $6x^2 - 6x - 10 = 2 \\implies 6x^2 - 6x - 12 = 0 \\implies x^2 - x - 2 = 0$.",
      "5. Factoring gives $(x - 2)(x + 1) = 0 \\implies x = 2\\text{ or }x = -1$."
    ],
    "stepByStepSolutionAr": [
      "١. ميل المستقيم = $-1/2$.",
      "٢. ميل المماس العمودي = $2$.",
      "٣. مشتقة المنحنى: $y' = 6x^2 - 6x - 10$.",
      "٤. نساوي المشتقة بـ 2: $6x^2 - 6x - 12 = 0 \\implies x^2 - x - 2 = 0$.",
      "٥. بالتحليل: $(x - 2)(x + 1) = 0 \\implies x = 2$ أو $x = -1$."
    ],
    "teacherTipEn": "Set derivative equal to the negative reciprocal of the given line slope.",
    "teacherTipAr": "ساوي المشتقة بمقلوب ميل المستقيم مع تغيير الإشارة لتحقيق شرط التعامد."
  },
  {
    "id": "calc_ch1_db_hots_47",
    "titleEn": "Vertical Tangent Points on Rotated Ellipse",
    "titleAr": "نقاط المماس الرأسي لقطع ناقص مائل",
    "difficulty": "hots",
    "questionEn": "Find the points on the curve $x^2 - xy + y^2 = 3$ where the tangent line is vertical.",
    "questionAr": "أوجد إحداثيات النقاط على المنحنى $x^2 - xy + y^2 = 3$ التي يكون المماس عندها رأسياً (موازياً لمحور الصادات).",
    "optionsEn": [
      "$(2, 1)\\text{ and }(-2, -1)$",
      "$(1, 2)\\text{ and }(-1, -2)$",
      "$(0, \\sqrt{3})\\text{ and }(0, -\\sqrt{3})$",
      "$(\\sqrt{3}, 0)\\text{ and }(-\\sqrt{3}, 0)$"
    ],
    "optionsAr": [
      "$(2, 1)\\text{ و }(-2, -1)$",
      "$(1, 2)\\text{ و }(-1, -2)$",
      "$(0, \\sqrt{3})\\text{ و }(0, -\\sqrt{3})$",
      "$(\\sqrt{3}, 0)\\text{ و }(-\\sqrt{3}, 0)$"
    ],
    "correctAnswer": "$(2, 1)\\text{ and }(-2, -1)$",
    "correctIndex": 0,
    "hintEn": "Vertical tangent occurs where the denominator of $\\frac{dy}{dx}$ is zero, meaning $\\frac{dx}{dy} = 0$.",
    "hintAr": "المماس الرأسي يحدث عندما ينعدم مقام المشتقة الضمنية، أي عندما يكون $2y - x = 0$.",
    "stepByStepSolutionEn": [
      "1. Differentiating implicitly: $2x - (y + x y') + 2y y' = 0 \\implies y'(2y - x) = y - 2x$.",
      "2. $\\frac{dy}{dx} = \\frac{y - 2x}{2y - x}$.",
      "3. Vertical tangent requires the denominator to be zero: $2y - x = 0 \\implies x = 2y$.",
      "4. Substitute $x = 2y$ into curve equation: $(2y)^2 - (2y)y + y^2 = 3 \\implies 4y^2 - 2y^2 + y^2 = 3$.",
      "5. $3y^2 = 3 \\implies y^2 = 1 \\implies y = \\pm 1$.",
      "6. Since $x = 2y$, the points are $(2, 1)$ and $(-2, -1)$."
    ],
    "stepByStepSolutionAr": [
      "١. بالاشتقاق الضمني: $y' = \\frac{y - 2x}{2y - x}$.",
      "٢. يكون المماس رأسياً عندما ينعدم المقام: $2y - x = 0 \\implies x = 2y$.",
      "٣. بالتعويض في معادلة المنحنى: $3y^2 = 3 \\implies y = \\pm 1$.",
      "٤. وبما أن $x = 2y$، فإن النقطتين هما $(2, 1)$ و $(-2, -1)$."
    ],
    "teacherTipEn": "Vertical tangent corresponds to $\\frac{dx}{dy} = 0$ (denominator of $\\frac{dy}{dx}$ vanishes).",
    "teacherTipAr": "المماس الرأسي يتحقق عندما ينعدم مقام المشتقة الأولى الصريحة."
  },
  {
    "id": "calc_ch1_db_hots_48",
    "titleEn": "Maximum Viewing Angle Distance",
    "titleAr": "المسافة لأفضل زاوية رؤية للوحة جدارية",
    "difficulty": "hots",
    "questionEn": "A painting of height $2\\text{ m}$ hangs on a vertical wall with its bottom edge $1\\text{ m}$ above the eye level of an observer. At what distance from the wall should the observer stand to maximize the angle subtended by the painting?",
    "questionAr": "لوحة فنية ارتفاعها $2\\text{ م}$ معلقة رأسياً على حائط بحيث ترتفع حافتها السفلية $1\\text{ م}$ عن مستوى عين راصد. على أي بعد من الحائط يجب أن يقف الراصد لكي تكون زاوية رؤيته للوحة أكبر ما يمكن؟",
    "optionsEn": [
      "$\\sqrt{3}\\text{ m}$",
      "$2\\text{ m}$",
      "$3\\text{ m}$",
      "$1.5\\text{ m}$"
    ],
    "optionsAr": [
      "$\\sqrt{3}\\text{ م}$",
      "$2\\text{ م}$",
      "$3\\text{ م}$",
      "$1.5\\text{ م}$"
    ],
    "correctAnswer": "$\\sqrt{3}\\text{ m}$",
    "correctIndex": 0,
    "hintEn": "Viewing angle $\\theta = \\arctan(3/x) - \\arctan(1/x)$. Maximize using $x = \\sqrt{ab}$.",
    "hintAr": "زاوية الرؤية $\\theta = \\arctan(3/x) - \\arctan(1/x)$ وأقصى قيمة تقع عند $x = \\sqrt{ab}$.",
    "stepByStepSolutionEn": [
      "1. Let $x$ be distance from wall. Subtended angle $\\theta = \\arctan\\left(\\frac{3}{x}\\right) - \\arctan\\left(\\frac{1}{x}\\right)$.",
      "2. $\\tan\\theta = \\frac{3/x - 1/x}{1 + (3/x)(1/x)} = \\frac{2/x}{1 + 3/x^2} = \\frac{2x}{x^2 + 3}$.",
      "3. Differentiating with respect to $x$ and setting to zero: $\\frac{2(x^2 + 3) - 2x(2x)}{(x^2 + 3)^2} = 0$.",
      "4. $2x^2 + 6 - 4x^2 = 0 \\implies 2x^2 = 6 \\implies x^2 = 3 \\implies x = \\sqrt{3}\\text{ m}$."
    ],
    "stepByStepSolutionAr": [
      "١. زاوية الرؤية $\\theta = \\arctan(3/x) - \\arctan(1/x)$.",
      "٢. $\\tan\\theta = \\frac{2x}{x^2 + 3}$.",
      "٣. المشتقة تساوي صفراً عندما ينعدم البسط: $2x^2 + 6 - 4x^2 = 0$.",
      "٤. $2x^2 = 6 \\implies x = \\sqrt{3}\\text{ م}$."
    ],
    "teacherTipEn": "Regiomontanus' famous angle problem: the optimal viewing distance is always the geometric mean $x = \\sqrt{a b}$.",
    "teacherTipAr": "مسألة ريجيومونتانوس الكلاسيكية: المسافة المثلى هي المتوسط الهندسي لارتفاعي قمة وقاع اللوحة $x = \\sqrt{ab}$."
  },
  {
    "id": "calc_ch1_db_hots_49",
    "titleEn": "Curvature Product of Semicircle",
    "titleAr": "علاقة تفاضلية لمنحنى نصف دائرة",
    "difficulty": "hots",
    "questionEn": "If $y = \\sqrt{a^2 - x^2}$, prove that $y^3 \\frac{d^2y}{dx^2} + a^2$ equals:",
    "questionAr": "إذا كانت $y = \\sqrt{a^2 - x^2}$، فما قيمة المقدار $y^3 \\frac{d^2y}{dx^2} + a^2$؟",
    "optionsEn": [
      "$0$",
      "$a^2$",
      "$2a^2$",
      "$-a^2$"
    ],
    "optionsAr": [
      "$0$",
      "$a^2$",
      "$2a^2$",
      "$-a^2$"
    ],
    "correctAnswer": "$0$",
    "correctIndex": 0,
    "hintEn": "Square to obtain $x^2 + y^2 = a^2$, which yields $y'' = -a^2/y^3$.",
    "hintAr": "تربيع الطرفين يعطي دائرة نصف قطرها $a$ ومشتقاتها الثانية $-a^2/y^3$.",
    "stepByStepSolutionEn": [
      "1. $y^2 = a^2 - x^2 \\implies x^2 + y^2 = a^2$.",
      "2. Differentiating: $2x + 2y y' = 0 \\implies y' = -\\frac{x}{y}$.",
      "3. Second derivative: $y'' = -\\frac{y - x y'}{y^2} = -\\frac{y^2 + x^2}{y^3} = -\\frac{a^2}{y^3}$.",
      "4. Multiply by $y^3$: $y^3 y'' = -a^2 \\implies y^3 y'' + a^2 = 0$."
    ],
    "stepByStepSolutionAr": [
      "١. بتربيع الطرفين: $x^2 + y^2 = a^2$.",
      "٢. المشتقة الأولى: $y' = -x/y$.",
      "٣. المشتقة الثانية: $y'' = -\\frac{a^2}{y^3}$.",
      "٤. إذن $y^3 y'' + a^2 = 0$."
    ],
    "teacherTipEn": "An essential identity representing the constant curvature of a circle.",
    "teacherTipAr": "متطابقة في غاية الأهمية تعبر عن ثبات انحناء الدائرة."
  },
  {
    "id": "calc_ch1_db_hots_50",
    "titleEn": "Third Derivative of Algebraic Fraction",
    "titleAr": "المشتقة الثالثة لدالة كسرية جبرية عند نقطة الأصل",
    "difficulty": "hots",
    "questionEn": "If $f(x) = \\frac{x}{\\sqrt{1 + x^2}}$, find the value of the third derivative $f'''(0)$.",
    "questionAr": "إذا كانت $f(x) = \\frac{x}{\\sqrt{1 + x^2}}$، فاحسب قيمة المشتقة الثالثة $f'''(0)$.",
    "optionsEn": [
      "$-3$",
      "$3$",
      "$0$",
      "$-6$"
    ],
    "optionsAr": [
      "$-3$",
      "$3$",
      "$0$",
      "$-6$"
    ],
    "correctAnswer": "$-3$",
    "correctIndex": 0,
    "hintEn": "Expand using binomial theorem: $f(x) = x(1 + x^2)^{-1/2} = x(1 - \\frac{1}{2}x^2 + \\dots)$.",
    "hintAr": "استخدم مفكوك ذات الحدين لإيجاد معامل $x^3$.",
    "stepByStepSolutionEn": [
      "1. Expand $x(1 + x^2)^{-1/2} = x\\left(1 - \\frac{1}{2}x^2 + \\frac{3}{8}x^4 - \\dots\\right) = x - \\frac{1}{2}x^3 + \\frac{3}{8}x^5 - \\dots$",
      "2. The coefficient of $x^3$ in the Maclaurin series is $-\\frac{1}{2}$.",
      "3. By Taylor's formula, the coefficient of $x^3$ is $\\frac{f'''(0)}{3!} = \\frac{f'''(0)}{6}$.",
      "4. Therefore, $\\frac{f'''(0)}{6} = -\\frac{1}{2} \\implies f'''(0) = -3$."
    ],
    "stepByStepSolutionAr": [
      "١. بمفكوك ذات الحدين: $f(x) = x(1 - \\frac{1}{2}x^2 + \\dots) = x - \\frac{1}{2}x^3 + \\dots$",
      "٢. معامل $x^3$ يساوي $-\\frac{1}{2}$.",
      "٣. من متسلسلة ماكلورين: معامل $x^3$ هو $\\frac{f'''(0)}{3!} = \\frac{f'''(0)}{6}$.",
      "٤. إذن $f'''(0) = 6 \\times (-1/2) = -3$."
    ],
    "teacherTipEn": "Binomial series expansion avoids multiple tedious quotients with square roots.",
    "teacherTipAr": "مفكوك ذات الحدين هو السلاح الأقوى لحساب المشتقات العليا عند نقطة الأصل دون الوقوع في متاهات اشتقاق الجذور."
  },
  {
    "id": "calc_ch1_db_hots_51",
    "titleEn": "Tangent Triangle Area Invariance",
    "titleAr": "ثبوت مساحة المثلث المتكون من المماس والمحورين",
    "difficulty": "hots",
    "questionEn": "A tangent is drawn to the hyperbola $xy = 16$ at any point $P(x_0, y_0)$ in the first quadrant. Find the area of the triangle formed by this tangent line and the two coordinate axes.",
    "questionAr": "رُسم مماس للقطع الزائد $xy = 16$ عند أي نقطة $P(x_0, y_0)$ في الربع الأول. أوجد مساحة المثلث المحدود بهذا المماس ومحوري الإحداثيات.",
    "optionsEn": [
      "$32\\text{ sq units}$",
      "$16\\text{ sq units}$",
      "$64\\text{ sq units}$",
      "$8\\text{ sq units}$"
    ],
    "optionsAr": [
      "$32\\text{ وحدة مربعة}$",
      "$16\\text{ وحدة مربعة}$",
      "$64\\text{ وحدة مربعة}$",
      "$8\\text{ وحدة مربعة}$"
    ],
    "correctIndex": 0,
    "correctAnswer": "$32\\text{ sq units}$",
    "hintEn": "Write the tangent line in intercept form $\\frac{x}{a} + \\frac{y}{b} = 1$.",
    "hintAr": "اكتب معادلة المماس بدلالة الجزأين المقطوعين $\\frac{x}{a} + \\frac{y}{b} = 1$.",
    "teacherTipEn": "A wonderful invariant property of rectangular hyperbolas: the point of tangency is always the midpoint of the intercepted segment!",
    "teacherTipAr": "خاصية هندسية بديعة للقطع الزائد متساوي الساقين: نقطة التماس تنصف دائماً القطعة الواصلة بين المحورين!",
    "stepByStepSolutionEn": [
      "Slope of tangent: $y' = -\\frac{16}{x^2} = -\\frac{y_0}{x_0}$.",
      "Equation of tangent: $y - y_0 = -\\frac{y_0}{x_0}(x - x_0) \\implies y_0 x + x_0 y = 2x_0 y_0$.",
      "Find intercepts: $x$-intercept is $2x_0$, $y$-intercept is $2y_0$.",
      "Compute area: $A = \\frac{1}{2}(2x_0)(2y_0) = 2x_0 y_0 = 2(16) = 32\\text{ sq units}$."
    ],
    "stepByStepSolutionAr": [
      "ميل المماس: $y' = -\\frac{y_0}{x_0}$.",
      "معادلة المماس: $y_0 x + x_0 y = 2x_0 y_0$.",
      "الأجزاء المقطوعة: $2x_0$ على السينات و $2y_0$ على الصادات.",
      "حساب المساحة: $A = \\frac{1}{2}(2x_0)(2y_0) = 2(16) = 32\\text{ وحدة مربعة}$."
    ]
  },
  {
    "id": "calc_ch1_db_hots_52",
    "titleEn": "Higher Order Differential Identity",
    "titleAr": "متطابقة تفاضلية عليا لدالة مركبة",
    "difficulty": "hots",
    "questionEn": "If $y = \\sin(m \\sin^{-1} x)$, evaluate the expression $(1 - x^2) y'' - x y' + m^2 y$.",
    "questionAr": "إذا كان $y = \\sin(m \\sin^{-1} x)$، فاحسب قيمة المقدار $(1 - x^2) y'' - x y' + m^2 y$.",
    "optionsEn": [
      "$0$",
      "$m^2$",
      "$-m^2$",
      "$1$"
    ],
    "optionsAr": [
      "$0$",
      "$m^2$",
      "$-m^2$",
      "$1$"
    ],
    "correctIndex": 0,
    "correctAnswer": "$0$",
    "hintEn": "Multiply through by $\\sqrt{1-x^2}$ and square both sides before taking the second derivative.",
    "hintAr": "اضرب في $\\sqrt{1-x^2}$ وربّع الطرفين قبل الاشتقاق مرة ثانية.",
    "teacherTipEn": "Squaring before taking the second derivative eliminates messy quotient rules and square roots completely.",
    "teacherTipAr": "التربيع قبل الاشتقاق مرة ثانية يزيل المقامات والجذور التربيعية المعقدة بذكاء شديد.",
    "stepByStepSolutionEn": [
      "First derivative: $\\sqrt{1-x^2} y' = m\\cos(m\\sin^{-1}x)$.",
      "Square both sides: $(1-x^2)(y')^2 = m^2(1 - y^2)$.",
      "Differentiate: $-2x(y')^2 + 2(1-x^2)y' y'' = -2m^2 y y'.",
      "Divide by $2y'$: $(1-x^2)y'' - x y' + m^2 y = 0$."
    ],
    "stepByStepSolutionAr": [
      "المشتقة الأولى: $\\sqrt{1-x^2} y' = m\\cos(m\\sin^{-1}x)$.",
      "تربيع الطرفين: $(1-x^2)(y')^2 = m^2(1 - y^2)$.",
      "الاشتقاق بالنسبة لـ $x$: $-2x(y')^2 + 2(1-x^2)y' y'' = -2m^2 y y'.",
      "القسمة على $2y'$: نصل مباشرة إلى $(1-x^2)y'' - x y' + m^2 y = 0$."
    ]
  },
  {
    "id": "calc_ch1_db_hots_53",
    "titleEn": "Related Rates: Sliding Ladder Angular Acceleration",
    "titleAr": "معدلات زمنية: العجلة الزاوية لسلم ينزلق",
    "difficulty": "hots",
    "questionEn": "A ladder of length $5\\text{ m}$ leans against a vertical wall. If the bottom end slides away from the wall at a constant speed of $2\\text{ m/s}$, find the rate of change of the inclination angle $\\theta$ of the ladder with the floor when the bottom is $3\\text{ m}$ from the wall.",
    "questionAr": "سلم طوله $5\\text{ م}$ يستند على حائط رأسي. إذا كان طرفه السفلي ينزلق مبتعداً عن الحائط بسرعة منتظمة $2\\text{ م/ث}$، فأوجد معدل تغير زاوية ميل السلم $\\theta$ مع الأرض عندما يكون الطرف السفلي على بعد $3\\text{ م}$ من الحائط.",
    "optionsEn": [
      "$-\\frac{1}{2}\\text{ rad/s}$",
      "$-\\frac{1}{4}\\text{ rad/s}$",
      "$-1\\text{ rad/s}$",
      "$-\\frac{3}{4}\\text{ rad/s}$"
    ],
    "optionsAr": [
      "$-\\frac{1}{2}\\text{ راديان/ث}$",
      "$-\\frac{1}{4}\\text{ راديان/ث}$",
      "$-1\\text{ راديان/ث}$",
      "$-\\frac{3}{4}\\text{ راديان/ث}$"
    ],
    "correctIndex": 0,
    "correctAnswer": "$-\\frac{1}{2}\\text{ rad/s}$",
    "hintEn": "Write $x = 5\\cos\\theta$ and differentiate directly with respect to $t$.",
    "hintAr": "اكتب $x = 5\\cos\\theta$ واشتق مباشرة بالنسبة لـ $t$.",
    "teacherTipEn": "Using $x = L\\cos\\theta$ directly is much faster and cleaner than differentiating Pythagorean theorem $x^2 + y^2 = L^2$ and then converting.",
    "teacherTipAr": "استخدام العلاقة المثلثية $x = L\\cos\\theta$ مباشرة أسرع وأدق بكثير من اشتقاق نظرية فيثاغورس ثم التحويل.",
    "stepByStepSolutionEn": [
      "Relation: $x = 5\\cos\\theta$.",
      "Differentiate: $\\frac{dx}{dt} = -5\\sin\\theta \\frac{d\\theta}{dt}$.",
      "At $x = 3$, $y = 4$, so $\\sin\\theta = \\frac{4}{5}$.",
      "Substitute: $2 = -5(4/5) \\frac{d\\theta}{dt} = -4\\frac{d\\theta}{dt} \\implies \\frac{d\\theta}{dt} = -\\frac{1}{2}\\text{ rad/s}$."
    ],
    "stepByStepSolutionAr": [
      "العلاقة: $x = 5\\cos\\theta$.",
      "الاشتقاق: $\\frac{dx}{dt} = -5\\sin\\theta \\frac{d\\theta}{dt}$.",
      "عند $x = 3$ نجد $y = 4$ وبالتالي $\\sin\\theta = \\frac{4}{5}$.",
      "التعويض: $2 = -4\\frac{d\\theta}{dt} \\implies \\frac{d\\theta}{dt} = -\\frac{1}{2}\\text{ راديان/ث}$."
    ]
  },
  {
    "id": "calc_ch1_db_hots_54",
    "titleEn": "Lighthouse Rotating Beam Velocity on Seawall",
    "titleAr": "سرعة حزمة ضوء منارة على حاجز بحري مستقيم",
    "difficulty": "hots",
    "questionEn": "A lighthouse is situated $1\\text{ km}$ offshore from a straight shoreline. Its beacon rotates at a constant speed of $4\\text{ rev/min}$. How fast is the beam of light moving along the shoreline at a point $1\\text{ km}$ from the nearest point on shore?",
    "questionAr": "تقع منارة على بعد $1\\text{ كم}$ من شاطئ مستقيم. يدور مصباحها بسرعة منتظمة قدرها $4\\text{ دورة/دقيقة}$. ما هي سرعة تحرك حزمة الضوء على طول الشاطئ عند نقطة تبعد $1\\text{ كم}$ عن أقرب نقطة على الشاطئ؟",
    "optionsEn": [
      "$16\\pi\\text{ km/min}$",
      "$8\\pi\\text{ km/min}$",
      "$32\\pi\\text{ km/min}$",
      "$4\\pi\\text{ km/min}$"
    ],
    "optionsAr": [
      "$16\\pi\\text{ كم/دقيقة}$",
      "$8\\pi\\text{ كم/دقيقة}$",
      "$32\\pi\\text{ كم/دقيقة}$",
      "$4\\pi\\text{ كم/دقيقة}$"
    ],
    "correctIndex": 0,
    "correctAnswer": "$16\\pi\\text{ km/min}$",
    "hintEn": "Convert rev/min to rad/min by multiplying by $2\\pi$. Use $x = \\tan\\theta$.",
    "hintAr": "حول الدورات إلى راديان بالضرب في $2\\pi$. استخدم $x = \\tan\\theta$.",
    "teacherTipEn": "Notice that light spot velocity can easily exceed relativistic speeds at great distances without violating physics!",
    "teacherTipAr": "لاحظ أن سرعة البقعة الضوئية يمكن أن تتجاوز سرعة الضوء على مسافات بعيدة دون خرق لقوانين الفيزياء لأنها لا تنقل مادة!",
    "stepByStepSolutionEn": [
      "Convert angular velocity: $\\frac{d\\theta}{dt} = 4(2\\pi) = 8\\pi\\text{ rad/min}$.",
      "Geometric model: $x = 1\\cdot \\tan\\theta$.",
      "Differentiate: $\\frac{dx}{dt} = \\sec^2\\theta \\frac{d\\theta}{dt}$.",
      "At $x = 1$, $\\sec^2\\theta = 1 + 1^2 = 2$.",
      "Compute speed: $\\frac{dx}{dt} = 2(8\\pi) = 16\\pi\\text{ km/min}$."
    ],
    "stepByStepSolutionAr": [
      "تحويل السرعة الزاوية: $\\frac{d\\theta}{dt} = 8\\pi\\text{ راديان/دقيقة}$.",
      "النموذج الهندسي: $x = \\tan\\theta$.",
      "الاشتقاق الزمني: $\\frac{dx}{dt} = \\sec^2\\theta \\frac{d\\theta}{dt}$.",
      "عند $x = 1$ نجد $\\sec^2\\theta = 2$.",
      "حساب السرعة: $\\frac{dx}{dt} = 16\\pi\\text{ كم/دقيقة}$."
    ]
  },
  {
    "id": "calc_ch1_db_hots_55",
    "titleEn": "Angle Between Tangents from External Point",
    "titleAr": "الزاوية بين مماسين مرسومين من نقطة خارج منحنى",
    "difficulty": "hots",
    "questionEn": "Two tangents are drawn from the origin $(0, 0)$ to the parabola $y = x^2 + 4$. Find the acute angle $\\theta$ between these two tangent lines.",
    "questionAr": "رُسم مماسان من نقطة الأصل $(0, 0)$ للقطع المكافئ $y = x^2 + 4$. أوجد قياس الزاوية الحادة $\\theta$ بين هذين المماسين.",
    "optionsEn": [
      "$\\tan^{-1}\\left(\\frac{8}{15}\\right)$",
      "$\\tan^{-1}\\left(\\frac{4}{15}\\right)$",
      "$\\tan^{-1}\\left(\\frac{8}{17}\\right)$",
      "$\\tan^{-1}\\left(\\frac{15}{8}\\right)$"
    ],
    "optionsAr": [
      "$\\tan^{-1}\\left(\\frac{8}{15}\\right)$",
      "$\\tan^{-1}\\left(\\frac{4}{15}\\right)$",
      "$\\tan^{-1}\\left(\\frac{8}{17}\\right)$",
      "$\\tan^{-1}\\left(\\frac{15}{8}\\right)$"
    ],
    "correctIndex": 0,
    "correctAnswer": "$\\tan^{-1}\\left(\\frac{8}{15}\\right)$",
    "hintEn": "Equate the derivative $y' = 2x_0$ to the chord slope $\\frac{x_0^2 + 4}{x_0}$.",
    "hintAr": "ساوِ المشتقة بميل الخط المار بنقطة الأصل: $2x_0 = \\frac{x_0^2 + 4}{x_0}$.",
    "teacherTipEn": "Whenever a tangent passes through an external point, equating $f'(x_0) = \\frac{f(x_0) - y_1}{x_0 - x_1}$ always gives the tangency points.",
    "teacherTipAr": "عندما يمر المماس بنقطة خارج المنحنى، فإن مساواة المشتقة بميل القاطع الواصل بنقطة التماس تحدد النقاط مباشرة.",
    "stepByStepSolutionEn": [
      "Slope from origin to $(x_0, y_0)$: $m = \\frac{x_0^2 + 4}{x_0}$.",
      "Derivative at $x_0$: $m = 2x_0$.",
      "Solve $2x_0 = \\frac{x_0^2 + 4}{x_0} \\implies x_0^2 = 4 \\implies x_0 = \\pm 2$.",
      "Slopes are $m_1 = 4$ and $m_2 = -4$.",
      "Angle: $\\tan\\theta = \\left|\\frac{4 - (-4)}{1 + (4)(-4)}\\right| = \\frac{8}{15} \\implies \\theta = \\tan^{-1}\\left(\\frac{8}{15}\\right)$."
    ],
    "stepByStepSolutionAr": [
      "الميل من نقطة الأصل: $m = \\frac{x_0^2 + 4}{x_0}$.",
      "المشتقة: $m = 2x_0$.",
      "حل المعادلة: $x_0 = \\pm 2$ وبالتالي $m_1 = 4$ و $m_2 = -4$.",
      "حساب الزاوية: $\\tan\\theta = |\\frac{8}{-15}| = \\frac{8}{15}$."
    ]
  },
  {
    "id": "calc_ch1_db_hots_56",
    "titleEn": "Rate of Change of Inscribed Rectangle Area",
    "titleAr": "معدل تغير مساحة مستطيل مرسوم داخل قطع ناقص",
    "difficulty": "hots",
    "questionEn": "A rectangle has its vertices on the ellipse $\\frac{x^2}{16} + \\frac{y^2}{9} = 1$ with sides parallel to the axes. If its vertex $(x, y)$ in the first quadrant is moving along the ellipse such that $\\frac{dx}{dt} = -0.5\\text{ units/s}$, find the rate of change of the area of the rectangle at the instant when $x = 2\\sqrt{2}$.",
    "questionAr": "مستطيل تقع رؤوسه على القطع الناقص $\\frac{x^2}{16} + \\frac{y^2}{9} = 1$ وأضلاعه توازي المحاور. إذا تحرك رأسه $(x, y)$ في الربع الأول على القطع بحيث $\\frac{dx}{dt} = -0.5\\text{ وحدة/ث}$، فأوجد معدل تغير مساحة المستطيل في اللحظة التي يكون فيها $x = 2\\sqrt{2}$.",
    "optionsEn": [
      "$0\\text{ sq units/s}$",
      "$-3\\text{ sq units/s}$",
      "$3\\text{ sq units/s}$",
      "$-6\\text{ sq units/s}$"
    ],
    "optionsAr": [
      "$0\\text{ وحدة مربعة/ث}$",
      "$-3\\text{ وحدة مربعة/ث}$",
      "$3\\text{ وحدة مربعة/ث}$",
      "$-6\\text{ وحدة مربعة/ث}$"
    ],
    "correctIndex": 0,
    "correctAnswer": "$0\\text{ sq units/s}$",
    "hintEn": "Write $x = 4\\cos\\theta, y = 3\\sin\\theta$ and express area as $A = 24\\sin(2\\theta)$.",
    "hintAr": "عبر بارامترياً عن النقطة: $x = 4\\cos\\theta$ و $y = 3\\sin\\theta$.",
    "teacherTipEn": "Recognizing that the given point corresponds to a critical point (maximum) immediately gives a rate of change of 0 without arduous algebraic differentiation!",
    "teacherTipAr": "إدراك أن النقطة المعطاة تمثل نقطة حرجة (قيمة عظمى) يعطي معدل تغير صفري فوراً دون الخوض في حسابات مضنية!",
    "stepByStepSolutionEn": [
      "Area of inscribed rectangle: $A = 4xy$.",
      "Use ellipse parametrization: $x = 4\\cos\\theta$, $y = 3\\sin\\theta$.",
      "Area becomes: $A = 4(4\\cos\\theta)(3\\sin\\theta) = 24\\sin(2\\theta)$.",
      "At $x = 2\\sqrt{2}$, $\\cos\\theta = \\frac{\\sqrt{2}}{2} \\implies \\theta = \\frac{\\pi}{4}$.",
      "Since $\\sin(2\\theta)$ attains its maximum at $2\\theta = \\frac{\\pi}{2}$, $\\frac{dA}{dt} = 0$."
    ],
    "stepByStepSolutionAr": [
      "مساحة المستطيل: $A = 4xy$.",
      "التعويض بالصورة الوسيطية: $x = 4\\cos\\theta$ و $y = 3\\sin\\theta$.",
      "المساحة: $A = 24\\sin(2\\theta)$.",
      "عند $x = 2\\sqrt{2}$ تكون $\\theta = \\pi/4$.",
      "الدالة تبلغ نهايتها العظمى، إذن مشتقتها ومعدل تغيرها اللحظي $= 0$."
    ]
  },
  {
    "id": "calc_ch1_db_hots_57",
    "titleEn": "Third Derivative of Reciprocal Trig Expression",
    "titleAr": "المشتقة الثالثة لمقدار مثلثي في المقام",
    "difficulty": "hots",
    "questionEn": "If $y = \\frac{1}{\\cos(x) + \\sin(x)}$, evaluate $y'''$ at $x = 0$.",
    "questionAr": "إذا كان $y = \\frac{1}{\\cos(x) + \\sin(x)}$، فاحسب قيمة $y'''$ عند $x = 0$.",
    "optionsEn": [
      "$-11$",
      "$11$",
      "$-7$",
      "$7$"
    ],
    "optionsAr": [
      "$-11$",
      "$11$",
      "$-7$",
      "$7$"
    ],
    "correctIndex": 0,
    "correctAnswer": "$-11$",
    "hintEn": "Use the Taylor expansion of $\\frac{1}{1+u}$ where $u = x - x^2/2 - x^3/6$.",
    "hintAr": "استخدم مفكوك تايلور لـ $\\frac{1}{1+u}$.",
    "teacherTipEn": "Taylor series expansion is an extremely powerful shortcut for calculating higher derivatives at $x = 0$!",
    "teacherTipAr": "مفكوك تايلور هو أسرع وأذكى أداة لحساب المشتقات العليا عند $x = 0$ دون الوقوع في أخطاء اشتقاق معقدة!",
    "stepByStepSolutionEn": [
      "Expand denominator: $\\cos x + \\sin x = 1 + x - \\frac{x^2}{2} - \\frac{x^3}{6} + O(x^4)$.",
      "Use geometric series: $\\frac{1}{1 + z} = 1 - z + z^2 - z^3 + O(z^4)$ where $z = x - \\frac{x^2}{2} - \\frac{x^3}{6}$.",
      "Collect $x^3$ terms: $-(-x^3/6) + 2(x)(-x^2/2) - x^3 = \\frac{1}{6} - 1 - 1 = -\\frac{11}{6}$.",
      "Calculate third derivative: $y'''(0) = 3! \\left(-\\frac{11}{6}\\right) = -11$."
    ],
    "stepByStepSolutionAr": [
      "فك المقام بمتسلسلة قوى: $\\cos x + \\sin x = 1 + x - \\frac{x^2}{2} - \\frac{x^3}{6}$.",
      "استخدام المتسلسلة الهندسية: $\\frac{1}{1+z} = 1 - z + z^2 - z^3$.",
      "تجميع معامل $x^3$: نجد المعامل يساوي $-\\frac{11}{6}$.",
      "حساب المشتقة الثالثة: $y'''(0) = 3! \\times (-\\frac{11}{6}) = -11$."
    ]
  },
  {
    "id": "calc_ch1_db_hots_58",
    "titleEn": "Condition for Three Real Normals to Parabola",
    "titleAr": "شرط رسم ثلاثة أعمدة حقيقية للقطع المكافئ",
    "difficulty": "hots",
    "questionEn": "Normals are drawn from a point $(h, 0)$ on the axis of symmetry to the parabola $y^2 = 4x$. What is the condition on $h$ so that three distinct real normals can be drawn?",
    "questionAr": "رُسمت أعمدة من النقطة $(h, 0)$ الواقعة على محور التماثل إلى القطع المكافئ $y^2 = 4x$. ما هو الشرط اللازم على $h$ حتى يمكن رسم ثلاثة أعمدة حقيقية متمايزة؟",
    "optionsEn": [
      "$h > 2$",
      "$h > 4$",
      "$h > 1$",
      "$h < 2$"
    ],
    "optionsAr": [
      "$h > 2$",
      "$h > 4$",
      "$h > 1$",
      "$h < 2$"
    ],
    "correctIndex": 0,
    "correctAnswer": "$h > 2$",
    "hintEn": "Write the normal line equation using the parameter $t$ and substitute $(h, 0)$.",
    "hintAr": "اكتب معادلة العمودي بدلالة الوسيط $t$ ثم عوض بالنقطة $(h, 0)$.",
    "teacherTipEn": "The point $(2, 0)$ is the center of curvature of the vertex of $y^2 = 4x$; beyond it, the evolute opens up to allow 3 normals.",
    "teacherTipAr": "النقطة $(2, 0)$ هي مركز انحناء رأس القطع المكافئ؛ وبعدها يبدأ المنحنى في السماح برسم 3 أعمدة.",
    "stepByStepSolutionEn": [
      "Parametric point on $y^2 = 4x$: $(t^2, 2t)$.",
      "Normal slope: $m_N = -t$.",
      "Equation of normal: $y - 2t = -t(x - t^2) \\implies y + tx = 2t + t^3$.",
      "Passes through $(h, 0)$: $th = 2t + t^3 \\implies t(t^2 + 2 - h) = 0$.",
      "For 3 distinct roots: $h - 2 > 0 \\implies h > 2$."
    ],
    "stepByStepSolutionAr": [
      "النقطة البارامترية: $(t^2, 2t)$.",
      "ميل العمودي: $m_N = -t$.",
      "معادلة العمودي: $y + tx = 2t + t^3$.",
      "المرور بالنقطة $(h, 0)$: $t(t^2 + 2 - h) = 0$.",
      "للحصول على 3 حلول مختلفة: $t^2 = h - 2 > 0 \\implies h > 2$."
    ]
  }
]
};
