import type { SolvedProblem } from '../../../types/curriculum';

export const calcCh4SolvedExamples: SolvedProblem[] = [
  {
    "id": "calc_ch4_se_01",
    "titleEn": "MoE Example 1: Integration by Substitution (Power of Function)",
    "titleAr": "مثال الوزارة ١: التكامل بالتعويض (دالة مرفوعة لقوة)",
    "difficulty": "easy",
    "questionEn": "Evaluate the indefinite integral: $\\int x (x^2 + 3)^4 dx$.",
    "questionAr": "احسب التكامل غير المحدد: $\\int x (x^2 + 3)^4 dx$.",
    "optionsEn": [
      "$\\frac{1}{10} (x^2 + 3)^5 + C$",
      "$\\frac{1}{5} (x^2 + 3)^5 + C$",
      "$\\frac{1}{2} (x^2 + 3)^5 + C$",
      "$\\frac{1}{8} (x^2 + 3)^4 + C$"
    ],
    "optionsAr": [
      "$\\frac{1}{10} (x^2 + 3)^5 + C$",
      "$\\frac{1}{5} (x^2 + 3)^5 + C$",
      "$\\frac{1}{2} (x^2 + 3)^5 + C$",
      "$\\frac{1}{8} (x^2 + 3)^4 + C$"
    ],
    "correctAnswer": "$\\frac{1}{10} (x^2 + 3)^5 + C$",
    "correctIndex": 0,
    "hintEn": "Notice that the derivative of $(x^2 + 3)$ is $2x$. Multiply and divide by 2 to use $\\int [f(x)]^n f'(x) dx = \\frac{[f(x)]^{n+1}}{n+1} + C$.",
    "hintAr": "مشتقة $(x^2 + 3)$ هي $2x$. اضرب واقسم على ٢ لتطبيق القاعدة $\\int [f(x)]^n f'(x) dx = \\frac{[f(x)]^{n+1}}{n+1} + C$.",
    "stepByStepSolutionEn": [
      "1. Rewrite the integral to show the derivative of the inner function:",
      "$$\\int x (x^2 + 3)^4 dx = \\frac{1}{2} \\int (2x) (x^2 + 3)^4 dx$$",
      "2. Apply the power rule for integration $\\int [u(x)]^n u'(x) dx = \\frac{[u(x)]^{n+1}}{n+1} + C$ with $u = x^2 + 3$ and $n = 4$:",
      "$$= \\frac{1}{2} \\cdot \\frac{(x^2 + 3)^5}{5} + C = \\frac{1}{10} (x^2 + 3)^5 + C$$"
    ],
    "stepByStepSolutionAr": [
      "١. كتابة التكامل بحيث تظهر مشتقة الدالة الداخلية:",
      "$$\\int x (x^2 + 3)^4 dx = \\frac{1}{2} \\int (2x) (x^2 + 3)^4 dx$$",
      "٢. تطبيق قاعدة تكامل دالة في مشتقتها $\\int [f(x)]^n f'(x) dx = \\frac{[f(x)]^{n+1}}{n+1} + C$ حيث $f(x) = x^2 + 3$ و $n = 4$:",
      "$$= \\frac{1}{2} \\times \\frac{(x^2 + 3)^5}{5} + C = \\frac{1}{10} (x^2 + 3)^5 + C$$"
    ],
    "teacherTipEn": "Whenever you see a polynomial raised to a power multiplied by an x term of degree one lower, check for the chain rule form immediately.",
    "teacherTipAr": "كلما وجدت قوساً مرفوعاً لقوة ومضروباً في س بدرجة أقل بواحد، تحقق فوراً من صورة (الدالة × مشتقتها)."
  },
  {
    "id": "calc_ch4_se_02",
    "titleEn": "MoE Example 2: Logarithmic Form (Numerator is Derivative of Denominator)",
    "titleAr": "مثال الوزارة ٢: الصورة اللوغاريتمية (البسط مشتقة المقام)",
    "difficulty": "easy",
    "questionEn": "Evaluate the indefinite integral: $\\int \\frac{2x + 3}{x^2 + 3x + 5} dx$.",
    "questionAr": "احسب التكامل غير المحدد: $\\int \\frac{2x + 3}{x^2 + 3x + 5} dx$.",
    "optionsEn": [
      "$\\ln|x^2 + 3x + 5| + C$",
      "$\\frac{1}{2} \\ln|x^2 + 3x + 5| + C$",
      "$\\ln|(2x + 3)^2| + C$",
      "$\\frac{1}{x^2 + 3x + 5} + C$"
    ],
    "optionsAr": [
      "$\\ln|x^2 + 3x + 5| + C$",
      "$\\frac{1}{2} \\ln|x^2 + 3x + 5| + C$",
      "$\\ln|(2x + 3)^2| + C$",
      "$\\frac{1}{x^2 + 3x + 5} + C$"
    ],
    "correctAnswer": "$\\ln|x^2 + 3x + 5| + C$",
    "correctIndex": 0,
    "hintEn": "The numerator is the exact derivative of the denominator: $\\frac{d}{dx}(x^2 + 3x + 5) = 2x + 3$. Use $\\int \\frac{f'(x)}{f(x)} dx = \\ln|f(x)| + C$.",
    "hintAr": "البسط هو المشتقة التامة للمقام: $\\frac{d}{dx}(x^2 + 3x + 5) = 2x + 3$. استخدم $\\int \\frac{f'(x)}{f(x)} dx = \\ln|f(x)| + C$.",
    "stepByStepSolutionEn": [
      "1. Differentiate the denominator: $\\frac{d}{dx}(x^2 + 3x + 5) = 2x + 3$.",
      "2. Since the numerator equals the derivative of the denominator:",
      "$$\\int \\frac{f'(x)}{f(x)} dx = \\ln|f(x)| + C = \\ln|x^2 + 3x + 5| + C$$"
    ],
    "stepByStepSolutionAr": [
      "١. مشتقة المقام: $\\frac{d}{dx}(x^2 + 3x + 5) = 2x + 3$.",
      "٢. بما أن البسط يساوي مشتقة المقام تماماً، فإن ناتج التكامل هو لوغاريتم القيمة المطلقة للمقام:",
      "$$\\int \\frac{f'(x)}{f(x)} dx = \\ln|f(x)| + C = \\ln|x^2 + 3x + 5| + C$$"
    ],
    "teacherTipEn": "Whenever integrating a rational fraction, always test whether the numerator is the derivative of the denominator first.",
    "teacherTipAr": "عند تكامل أي دالة كسرية، اختبر أولاً ما إذا كان البسط مشتقة للمقام."
  },
  {
    "id": "calc_ch4_se_03",
    "titleEn": "MoE Example 3: Integration by Parts (Polynomial × Exponential)",
    "titleAr": "مثال الوزارة ٣: التكامل بالتجزيء (كثيرة حدود × دالة أسية)",
    "difficulty": "medium",
    "questionEn": "Evaluate the indefinite integral: $\\int x e^{2x} dx$.",
    "questionAr": "احسب التكامل غير المحدد: $\\int x e^{2x} dx$.",
    "optionsEn": [
      "$\\frac{1}{2} x e^{2x} - \\frac{1}{4} e^{2x} + C$",
      "$\\frac{1}{2} x e^{2x} + \\frac{1}{4} e^{2x} + C$",
      "$x e^{2x} - \\frac{1}{2} e^{2x} + C$",
      "$\\frac{1}{4} x^2 e^{2x} + C$"
    ],
    "optionsAr": [
      "$\\frac{1}{2} x e^{2x} - \\frac{1}{4} e^{2x} + C$",
      "$\\frac{1}{2} x e^{2x} + \\frac{1}{4} e^{2x} + C$",
      "$x e^{2x} - \\frac{1}{2} e^{2x} + C$",
      "$\\frac{1}{4} x^2 e^{2x} + C$"
    ],
    "correctAnswer": "$\\frac{1}{2} x e^{2x} - \\frac{1}{4} e^{2x} + C$",
    "correctIndex": 0,
    "hintEn": "Use integration by parts $\\int u dv = uv - \\int v du$. Choose $u = x$ (differentiates to 1) and $dv = e^{2x} dx$.",
    "hintAr": "استخدم قاعدة التكامل بالتجزيء: $\\int u dv = uv - \\int v du$. اختر $u = x$ و $dv = e^{2x} dx$.",
    "stepByStepSolutionEn": [
      "1. Set parts:",
      "$$u = x \\implies du = dx$$",
      "$$dv = e^{2x} dx \\implies v = \\frac{1}{2} e^{2x}$$",
      "2. Apply integration by parts formula:",
      "$$\\int u dv = u v - \\int v du = x \\left(\\frac{1}{2} e^{2x}\\right) - \\int \\frac{1}{2} e^{2x} dx$$",
      "$$= \\frac{1}{2} x e^{2x} - \\frac{1}{2} \\left(\\frac{1}{2} e^{2x}\\right) + C = \\frac{1}{2} x e^{2x} - \\frac{1}{4} e^{2x} + C$$"
    ],
    "stepByStepSolutionAr": [
      "١. اختيار أجزاء التكامل:",
      "$$u = x \\implies du = dx$$",
      "$$dv = e^{2x} dx \\implies v = \\frac{1}{2} e^{2x}$$",
      "٢. تطبيق قانون التكامل بالتجزيء:",
      "$$\\int u dv = u v - \\int v du = \\frac{1}{2} x e^{2x} - \\int \\frac{1}{2} e^{2x} dx$$",
      "$$= \\frac{1}{2} x e^{2x} - \\frac{1}{4} e^{2x} + C$$"
    ],
    "teacherTipEn": "In integration by parts, follow the LIATE rule: Logarithmic, Inverse trig, Algebraic, Trigonometric, Exponential.",
    "teacherTipAr": "في التكامل بالتجزيء اتبع ترتيب اختيار دالة التفاضل: اللوغاريتمية، ثم الجبرية، ثم المثلثية، ثم الأسية."
  },
  {
    "id": "calc_ch4_se_04",
    "titleEn": "MoE Example 4: Integration by Parts with Logarithms",
    "titleAr": "مثال الوزارة ٤: التكامل بالتجزيء للدوال اللوغاريتمية",
    "difficulty": "medium",
    "questionEn": "Evaluate the indefinite integral: $\\int x \\ln(x) dx$.",
    "questionAr": "احسب التكامل غير المحدد: $\\int x \\ln(x) dx$.",
    "optionsEn": [
      "$\\frac{1}{2} x^2 \\ln(x) - \\frac{1}{4} x^2 + C$",
      "$\\frac{1}{2} x^2 \\ln(x) - \\frac{1}{2} x^2 + C$",
      "$x^2 \\ln(x) - \\frac{1}{2} x^2 + C$",
      "$\\frac{1}{2} x^2 \\ln(x) + \\frac{1}{4} x^2 + C$"
    ],
    "optionsAr": [
      "$\\frac{1}{2} x^2 \\ln(x) - \\frac{1}{4} x^2 + C$",
      "$\\frac{1}{2} x^2 \\ln(x) - \\frac{1}{2} x^2 + C$",
      "$x^2 \\ln(x) - \\frac{1}{2} x^2 + C$",
      "$\\frac{1}{2} x^2 \\ln(x) + \\frac{1}{4} x^2 + C$"
    ],
    "correctAnswer": "$\\frac{1}{2} x^2 \\ln(x) - \\frac{1}{4} x^2 + C$",
    "correctIndex": 0,
    "hintEn": "Set $u = \\ln(x)$ because its derivative is $\\frac{1}{x}$, and $dv = x dx$.",
    "hintAr": "اختر $u = \\ln(x)$ لأن مشتقتها $\\frac{1}{x}$، و $dv = x dx$.",
    "stepByStepSolutionEn": [
      "1. Set parts:",
      "$$u = \\ln(x) \\implies du = \\frac{1}{x} dx$$",
      "$$dv = x dx \\implies v = \\frac{1}{2} x^2$$",
      "2. Apply formula:",
      "$$\\int x \\ln(x) dx = \\left(\\frac{1}{2} x^2\\right) \\ln(x) - \\int \\left(\\frac{1}{2} x^2\\right) \\left(\\frac{1}{x}\\right) dx$$",
      "$$= \\frac{1}{2} x^2 \\ln(x) - \\frac{1}{2} \\int x dx = \\frac{1}{2} x^2 \\ln(x) - \\frac{1}{4} x^2 + C$$"
    ],
    "stepByStepSolutionAr": [
      "١. اختيار أجزاء التكامل بالتجزيء:",
      "$$u = \\ln(x) \\implies du = \\frac{1}{x} dx$$",
      "$$dv = x dx \\implies v = \\frac{1}{2} x^2$$",
      "٢. تطبيق القانون:",
      "$$\\int x \\ln(x) dx = \\frac{1}{2} x^2 \\ln(x) - \\int \\frac{1}{2} x^2 \\cdot \\frac{1}{x} dx$$",
      "$$= \\frac{1}{2} x^2 \\ln(x) - \\frac{1}{2} \\int x dx = \\frac{1}{2} x^2 \\ln(x) - \\frac{1}{4} x^2 + C$$"
    ],
    "teacherTipEn": "With logarithms, always choose u = ln(x) for differentiation because integrating ln(x) directly is not an elementary rule.",
    "teacherTipAr": "مع اللوغاريتمات، اختر دائماً د = لو(س) للتفاضل لأن تفاضلها يزيل اللوغاريتم فوراً."
  },
  {
    "id": "calc_ch4_se_05",
    "titleEn": "MoE Example 5: Trigonometric Identity Integration (Half-Angle Formula)",
    "titleAr": "مثال الوزارة ٥: تكامل الدوال المثلثية بقوانين نصف الزاوية",
    "difficulty": "medium",
    "questionEn": "Evaluate the indefinite integral: $\\int \\sin^2(x) dx$.",
    "questionAr": "احسب التكامل غير المحدد: $\\int \\sin^2(x) dx$.",
    "optionsEn": [
      "$\\frac{1}{2} x - \\frac{1}{4} \\sin(2x) + C$",
      "$\\frac{1}{2} x + \\frac{1}{4} \\sin(2x) + C$",
      "$\\frac{1}{3} \\sin^3(x) + C$",
      "$x - \\frac{1}{2} \\sin(2x) + C$"
    ],
    "optionsAr": [
      "$\\frac{1}{2} x - \\frac{1}{4} \\sin(2x) + C$",
      "$\\frac{1}{2} x + \\frac{1}{4} \\sin(2x) + C$",
      "$\\frac{1}{3} \\sin^3(x) + C$",
      "$x - \\frac{1}{2} \\sin(2x) + C$"
    ],
    "correctAnswer": "$\\frac{1}{2} x - \\frac{1}{4} \\sin(2x) + C$",
    "correctIndex": 0,
    "hintEn": "Use the double angle identity: $\\sin^2(x) = \\frac{1 - \\cos(2x)}{2}$.",
    "hintAr": "استخدم قانون ضعف الزاوية: $\\sin^2(x) = \\frac{1 - \\cos(2x)}{2}$.",
    "stepByStepSolutionEn": [
      "1. Substitute the half-angle trigonometric identity:",
      "$$\\sin^2(x) = \\frac{1 - \\cos(2x)}{2} = \\frac{1}{2} - \\frac{1}{2} \\cos(2x)$$",
      "2. Integrate term by term:",
      "$$\\int \\sin^2(x) dx = \\int \\left(\\frac{1}{2} - \\frac{1}{2} \\cos(2x)\\right) dx = \\frac{1}{2} x - \\frac{1}{4} \\sin(2x) + C$$"
    ],
    "stepByStepSolutionAr": [
      "١. التعويض بمتطابقة ضعف الزاوية:",
      "$$\\sin^2(x) = \\frac{1 - \\cos(2x)}{2} = \\frac{1}{2} - \\frac{1}{2} \\cos(2x)$$",
      "٢. إجراء التكامل حداً بحداً:",
      "$$\\int \\sin^2(x) dx = \\int \\left(\\frac{1}{2} - \\frac{1}{2} \\cos(2x)\\right) dx = \\frac{1}{2} x - \\frac{1}{4} \\sin(2x) + C$$"
    ],
    "teacherTipEn": "Remember: sin^2(x) = (1 - cos 2x)/2 and cos^2(x) = (1 + cos 2x)/2.",
    "teacherTipAr": "تذكر دائماً: جا²(س) = (١ - جتا ٢س)/٢، بينما جتا²(س) = (١ + جتا ٢س)/٢."
  },
  {
    "id": "calc_ch4_se_06",
    "titleEn": "MoE Example 6: Definite Integral Properties (Even and Odd Functions)",
    "titleAr": "مثال الوزارة ٦: خواص التكامل المحدد (الدوال الزوجية والفردية)",
    "difficulty": "medium",
    "questionEn": "Evaluate the definite integral: $\\int_{-\\pi/4}^{\\pi/4} (x^3 + \\cos(x)) dx$.",
    "questionAr": "احسب التكامل المحدد: $\\int_{-\\pi/4}^{\\pi/4} (x^3 + \\cos(x)) dx$.",
    "optionsEn": [
      "$\\sqrt{2}$",
      "$2\\sqrt{2}$",
      "$\\frac{\\sqrt{2}}{2}$",
      "$0$"
    ],
    "optionsAr": [
      "$\\sqrt{2}$",
      "$2\\sqrt{2}$",
      "$\\frac{\\sqrt{2}}{2}$",
      "$0$"
    ],
    "correctAnswer": "$\\sqrt{2}$",
    "correctIndex": 0,
    "hintEn": "$x^3$ is an odd function, so its integral over $[-\\pi/4, \\pi/4]$ is 0. $\\cos(x)$ is an even function, so its integral is $2 \\int_0^{\\pi/4} \\cos(x) dx$.",
    "hintAr": "$x^3$ دالة فردية فتكاملها على $[-\\pi/4, \\pi/4]$ يساوي صفر. $\\cos(x)$ دالة زوجية فتكاملها يساوي $2 \\int_0^{\\pi/4} \\cos(x) dx$.",
    "stepByStepSolutionEn": [
      "1. Separate the integral into odd and even components:",
      "$$\\int_{-\\pi/4}^{\\pi/4} (x^3 + \\cos(x)) dx = \\int_{-\\pi/4}^{\\pi/4} x^3 dx + \\int_{-\\pi/4}^{\\pi/4} \\cos(x) dx$$",
      "2. For odd function $f(x) = x^3$: $\\int_{-a}^a x^3 dx = 0$.",
      "3. For even function $g(x) = \\cos(x)$:",
      "$$\\int_{-\\pi/4}^{\\pi/4} \\cos(x) dx = 2 \\int_0^{\\pi/4} \\cos(x) dx = 2 [\\sin(x)]_0^{\\pi/4} = 2 \\left(\\sin\\frac{\\pi}{4} - \\sin 0\\right) = 2 \\left(\\frac{\\sqrt{2}}{2}\\right) = \\sqrt{2}$$",
      "4. Total integral: $0 + \\sqrt{2} = \\sqrt{2}$."
    ],
    "stepByStepSolutionAr": [
      "١. تقسيم التكامل إلى دالة فردية ودالة زوجية:",
      "$$\\int_{-\\pi/4}^{\\pi/4} (x^3 + \\cos(x)) dx = \\int_{-\\pi/4}^{\\pi/4} x^3 dx + \\int_{-\\pi/4}^{\\pi/4} \\cos(x) dx$$",
      "٢. الدالة $f(x) = x^3$ فردية فتكاملها على فترة متماثلة حول الصفر يساوي صفر: $\\int_{-a}^a x^3 dx = 0$.",
      "٣. الدالة $g(x) = \\cos(x)$ زوجية:",
      "$$\\int_{-\\pi/4}^{\\pi/4} \\cos(x) dx = 2 \\int_0^{\\pi/4} \\cos(x) dx = 2 [\\sin(x)]_0^{\\pi/4} = 2 \\times \\frac{\\sqrt{2}}{2} = \\sqrt{2}$$",
      "٤. المجموع الكلي: $0 + \\sqrt{2} = \\sqrt{2}$."
    ],
    "teacherTipEn": "Properties of definite integrals on [-a, a] save enormous computation time on exams!",
    "teacherTipAr": "خواص التكامل المحدد على الفترة [-أ، أ] تختصر وقتاً هائلاً في الامتحانات!"
  },
  {
    "id": "calc_ch4_se_07",
    "titleEn": "MoE Example 7: Additivity Property of Definite Integrals",
    "titleAr": "مثال الوزارة ٧: خاصية تجزئة فترات التكامل المحدد",
    "difficulty": "medium",
    "questionEn": "If $\\int_1^5 f(x) dx = 14$ and $\\int_1^3 f(x) dx = 6$, find the value of $\\int_3^5 (2 f(x) + 3) dx$.",
    "questionAr": "إذا كان $\\int_1^5 f(x) dx = 14$ و $\\int_1^3 f(x) dx = 6$، فاحسب قيمة $\\int_3^5 (2 f(x) + 3) dx$.",
    "optionsEn": [
      "$22$",
      "$19$",
      "$16$",
      "$25$"
    ],
    "optionsAr": [
      "$22$",
      "$19$",
      "$16$",
      "$25$"
    ],
    "correctAnswer": "$22$",
    "correctIndex": 0,
    "hintEn": "By interval additivity: $\\int_3^5 f(x) dx = \\int_1^5 f(x) dx - \\int_1^3 f(x) dx$. Then distribute the integral.",
    "hintAr": "بخاصية التجزئة: $\\int_3^5 f(x) dx = \\int_1^5 f(x) dx - \\int_1^3 f(x) dx$. ثم وزع التكامل.",
    "stepByStepSolutionEn": [
      "1. Find $\\int_3^5 f(x) dx$:",
      "$$\\int_1^5 f(x) dx = \\int_1^3 f(x) dx + \\int_3^5 f(x) dx$$",
      "$$14 = 6 + \\int_3^5 f(x) dx \\implies \\int_3^5 f(x) dx = 14 - 6 = 8$$",
      "2. Evaluate the required integral using linearity:",
      "$$\\int_3^5 (2 f(x) + 3) dx = 2 \\int_3^5 f(x) dx + \\int_3^5 3 dx$$",
      "$$= 2(8) + 3(5 - 3) = 16 + 3(2) = 16 + 6 = 22$$"
    ],
    "stepByStepSolutionAr": [
      "١. إيجاد قيمة $\\int_3^5 f(x) dx$ بخاصية التجزئة:",
      "$$\\int_1^5 f(x) dx = \\int_1^3 f(x) dx + \\int_3^5 f(x) dx$$",
      "$$14 = 6 + \\int_3^5 f(x) dx \\implies \\int_3^5 f(x) dx = 8$$",
      "٢. حساب التكامل المطلوب بتوزيع التكامل وثوابت الحدود:",
      "$$\\int_3^5 (2 f(x) + 3) dx = 2 \\int_3^5 f(x) dx + 3(5 - 3) = 2(8) + 6 = 16 + 6 = 22$$"
    ],
    "teacherTipEn": "Notice that the integral of a constant c from a to b is simply c(b - a).",
    "teacherTipAr": "لاحظ أن تكامل الثابت جـ من أ إلى ب يساوي ببساطة جـ(ب - أ)."
  },
  {
    "id": "calc_ch4_se_08",
    "titleEn": "MoE Example 8: Area Between Two Curves in the Plane",
    "titleAr": "مثال الوزارة ٨: المساحة المحصورة بين منحنيين في المستوى",
    "difficulty": "medium",
    "questionEn": "Find the area of the region bounded by the parabola $y = x^2$ and the straight line $y = 2x$.",
    "questionAr": "أوجد مساحة المنطقة المحصورة بين المنحنى $y = x^2$ والمستقيم $y = 2x$.",
    "optionsEn": [
      "$\\frac{4}{3}\\text{ square units}$",
      "$\\frac{2}{3}\\text{ square units}$",
      "$\\frac{8}{3}\\text{ square units}$",
      "$2\\text{ square units}$"
    ],
    "optionsAr": [
      "$\\frac{4}{3}\\text{ وحدة مربعة}$",
      "$\\frac{2}{3}\\text{ وحدة مربعة}$",
      "$\\frac{8}{3}\\text{ وحدة مربعة}$",
      "$2\\text{ وحدة مربعة}$"
    ],
    "correctAnswer": "$\\frac{4}{3}\\text{ square units}$",
    "correctIndex": 0,
    "hintEn": "Find intersection points by solving $x^2 = 2x$. The line lies above the parabola on $[0, 2]$, so $A = \\int_0^2 (2x - x^2) dx$.",
    "hintAr": "أوجد نقاط التقاطع بحل $x^2 = 2x$. المستقيم يقع فوق المنحنى في الفترة $[0, 2]$، لذا $A = \\int_0^2 (2x - x^2) dx$.",
    "stepByStepSolutionEn": [
      "1. Find intersection points:",
      "$$x^2 = 2x \\implies x^2 - 2x = 0 \\implies x(x - 2) = 0 \\implies x = 0 \\quad \\text{and} \\quad x = 2$$",
      "2. On interval $[0, 2]$, test $x = 1$: $y_{line} = 2(1) = 2$ and $y_{parabola} = 1^2 = 1$. Thus $y_{line} \\ge y_{parabola}$.",
      "3. Area integral:",
      "$$A = \\int_0^2 (2x - x^2) dx = \\left[ x^2 - \\frac{x^3}{3} \\right]_0^2 = \\left(2^2 - \\frac{8}{3}\\right) - 0 = 4 - \\frac{8}{3} = \\frac{4}{3}\\text{ square units}$$"
    ],
    "stepByStepSolutionAr": [
      "١. تعيين نقاط التقاطع بحل المعادلتين آنياً:",
      "$$x^2 = 2x \\implies x(x - 2) = 0 \\implies x = 0, \\; x = 2$$",
      "٢. في الفترة $[0, 2]$ نجد أن المستقيم يقع أعلى المنحنى ($2x \\ge x^2$).",
      "٣. حساب المساحة بالتكامل:",
      "$$A = \\int_0^2 (2x - x^2) dx = \\left[ x^2 - \\frac{x^3}{3} \\right]_0^2 = 4 - \\frac{8}{3} = \\frac{4}{3}\\text{ وحدة مربعة}$$"
    ],
    "teacherTipEn": "Area is always strictly positive: A = ∫ (upper curve - lower curve) dx.",
    "teacherTipAr": "المساحة موجبة دائماً: المساحة = تكامل (المنحنى العلوي - المنحنى السفلي) د س."
  },
  {
    "id": "calc_ch4_se_09",
    "titleEn": "MoE Example 9: Volume of Solid of Revolution (Rotation About X-Axis)",
    "titleAr": "مثال الوزارة ٩: حجم الجسم الدوراني (دوران كامل حول محور السينات)",
    "difficulty": "hots",
    "questionEn": "Find the volume of the solid generated by revolving the region bounded by the curve $y = \\sqrt{x}$, the x-axis, and the straight line $x = 4$ a complete revolution about the x-axis.",
    "questionAr": "أوجد حجم الجسم الدوراني الناشئ من دوران المنطقة المحصورة بين المنحنى $y = \\sqrt{x}$ ومحور السينات والمستقيم $x = 4$ دورة كاملة حول محور السينات.",
    "optionsEn": [
      "$8\\pi\\text{ cubic units}$",
      "$16\\pi\\text{ cubic units}$",
      "$4\\pi\\text{ cubic units}$",
      "$\\frac{16\\pi}{3}\\text{ cubic units}$"
    ],
    "optionsAr": [
      "$8\\pi\\text{ وحدة مكعبة}$",
      "$16\\pi\\text{ وحدة مكعبة}$",
      "$4\\pi\\text{ وحدة مكعبة}$",
      "$\\frac{16\\pi}{3}\\text{ وحدة مكعبة}$"
    ],
    "correctAnswer": "$8\\pi\\text{ cubic units}$",
    "correctIndex": 0,
    "hintEn": "The volume formula for rotation about the x-axis is $V = \\pi \\int_a^b y^2 dx$. Here $y^2 = (\\sqrt{x})^2 = x$.",
    "hintAr": "قانون حجم الدوران حول محور السينات هو $V = \\pi \\int_a^b y^2 dx$. هنا $y^2 = (\\sqrt{x})^2 = x$.",
    "stepByStepSolutionEn": [
      "1. Identify integration limits: Curve starts at $x = 0$ (since $y = \\sqrt{0} = 0$) and ends at $x = 4$.",
      "2. Apply disk volume formula about x-axis:",
      "$$V = \\pi \\int_0^4 y^2 dx = \\pi \\int_0^4 (\\sqrt{x})^2 dx = \\pi \\int_0^4 x dx$$",
      "3. Evaluate the definite integral:",
      "$$V = \\pi \\left[ \\frac{x^2}{2} \\right]_0^4 = \\pi \\left( \\frac{16}{2} - 0 \\right) = 8\\pi\\text{ cubic units}$$"
    ],
    "stepByStepSolutionAr": [
      "١. حدود التكامل: يبدأ المنحنى من $x = 0$ حتى $x = 4$.",
      "٢. قانون الحجم الدوراني حول محور السينات:",
      "$$V = \\pi \\int_0^4 y^2 dx = \\pi \\int_0^4 x dx$$",
      "٣. حساب قيمة التكامل:",
      "$$V = \\pi \\left[ \\frac{x^2}{2} \\right]_0^4 = \\pi \\left( \\frac{16}{2} \\right) = 8\\pi\\text{ وحدة مكعبة}$$"
    ],
    "teacherTipEn": "Do not forget the π factor in the volume formula: V = π ∫ y^2 dx.",
    "teacherTipAr": "لا تنسَ ضرب التكامل في الثابت ط (π): الحجم = ط × تكامل ص² د س."
  },
  {
    "id": "calc_ch4_se_10",
    "titleEn": "MoE Example 10: Volume of Solid of Revolution (Rotation About Y-Axis)",
    "titleAr": "مثال الوزارة ١٠: حجم الجسم الدوراني (دوران كامل حول محور الصادات)",
    "difficulty": "hots",
    "questionEn": "Find the volume of the solid generated by revolving the region in the first quadrant bounded by the parabola $y = x^2$, the y-axis, and the straight line $y = 4$ a complete revolution about the y-axis.",
    "questionAr": "أوجد حجم الجسم الدوراني الناشئ من دوران المنطقة الواقعة في الربع الأول المحصورة بين المنحنى $y = x^2$ ومحور الصادات والمستقيم $y = 4$ دورة كاملة حول محور الصادات.",
    "optionsEn": [
      "$8\\pi\\text{ cubic units}$",
      "$\\frac{32\\pi}{5}\\text{ cubic units}$",
      "$16\\pi\\text{ cubic units}$",
      "$4\\pi\\text{ cubic units}$"
    ],
    "optionsAr": [
      "$8\\pi\\text{ وحدة مكعبة}$",
      "$\\frac{32\\pi}{5}\\text{ وحدة مكعبة}$",
      "$16\\pi\\text{ وحدة مكعبة}$",
      "$4\\pi\\text{ وحدة مكعبة}$"
    ],
    "correctAnswer": "$8\\pi\\text{ cubic units}$",
    "correctIndex": 0,
    "hintEn": "For revolution about the y-axis, use $V = \\pi \\int_c^d x^2 dy$. Since $y = x^2$, we have $x^2 = y$, and the limits on the y-axis are $y = 0$ to $y = 4$.",
    "hintAr": "للدوران حول محور الصادات نستخدم $V = \\pi \\int_c^d x^2 dy$. بما أن $y = x^2$ فإن $x^2 = y$ وحدود التكامل على محور الصادات من $0$ إلى $4$.",
    "stepByStepSolutionEn": [
      "1. Express $x^2$ in terms of $y$: $x^2 = y$.",
      "2. Identify limits on the y-axis: $y = 0$ (origin) to $y = 4$.",
      "3. Apply volume formula for rotation about the y-axis:",
      "$$V = \\pi \\int_0^4 x^2 dy = \\pi \\int_0^4 y dy = \\pi \\left[ \\frac{y^2}{2} \\right]_0^4 = \\pi \\left( \\frac{16}{2} - 0 \\right) = 8\\pi\\text{ cubic units}$$"
    ],
    "stepByStepSolutionAr": [
      "١. التعبير عن $x^2$ بدلالة $y$: $x^2 = y$.",
      "٢. حدود التكامل على محور الصادات: من $y = 0$ إلى $y = 4$.",
      "٣. تطبيق قانون الحجم للدوران حول محور الصادات:",
      "$$V = \\pi \\int_0^4 x^2 dy = \\pi \\int_0^4 y dy = \\pi \\left[ \\frac{y^2}{2} \\right]_0^4 = 8\\pi\\text{ وحدة مكعبة}$$"
    ],
    "teacherTipEn": "When revolving about the y-axis, express everything in terms of y and integrate with respect to y: V = π ∫ x^2 dy.",
    "teacherTipAr": "عند الدوران حول محور الصادات، عبر عن كل شيء بدلالة ص وكامل بالنسبة إلى ص: الحجم = ط × تكامل س² د ص."
  }
];

export const calcCh4Exercises: SolvedProblem[] = [
  {
    "id": "calc_ch4_ex_01",
    "titleEn": "Exercise 1: Linear Bracket Integration",
    "titleAr": "تمرين ١: تكامل قوس خطي مرفوع لأس",
    "difficulty": "easy",
    "questionEn": "Evaluate the indefinite integral: $\\int (3x - 1)^5 dx$.",
    "questionAr": "احسب التكامل غير المحدد: $\\int (3x - 1)^5 dx$.",
    "optionsEn": [
      "$\\frac{1}{18} (3x - 1)^6 + C$",
      "$\\frac{1}{6} (3x - 1)^6 + C$",
      "$\\frac{1}{2} (3x - 1)^6 + C$",
      "$\\frac{1}{15} (3x - 1)^5 + C$"
    ],
    "optionsAr": [
      "$\\frac{1}{18} (3x - 1)^6 + C$",
      "$\\frac{1}{6} (3x - 1)^6 + C$",
      "$\\frac{1}{2} (3x - 1)^6 + C$",
      "$\\frac{1}{15} (3x - 1)^5 + C$"
    ],
    "correctAnswer": "$\\frac{1}{18} (3x - 1)^6 + C$",
    "correctIndex": 0,
    "hintEn": "$\\int (ax + b)^n dx = \\frac{(ax + b)^{n+1}}{a(n+1)} + C$. Here $a = 3, n = 5$.",
    "hintAr": "$\\int (ax + b)^n dx = \\frac{(ax + b)^{n+1}}{a(n+1)} + C$. هنا $a = 3, n = 5$.",
    "stepByStepSolutionEn": [
      "1. Using the linear rule: $\\int (ax + b)^n dx = \\frac{(ax + b)^{n+1}}{a(n+1)} + C$.",
      "2. Substitute $a = 3, n = 5$: $\\frac{(3x - 1)^6}{3 \\times 6} + C = \\frac{1}{18} (3x - 1)^6 + C$."
    ],
    "stepByStepSolutionAr": [
      "١. بتطبيق قاعدة تكامل القوس من الدرجة الأولى:",
      "$$\\int (ax + b)^n dx = \\frac{(ax + b)^{n+1}}{a(n+1)} + C$$",
      "٢. بالتعويض عن $a = 3$ و $n = 5$ نجد: $\\frac{1}{18} (3x - 1)^6 + C$."
    ],
    "teacherTipEn": "Never forget to divide by the coefficient of x inside the linear bracket!",
    "teacherTipAr": "لا تنسَ أبداً القسمة على معامل س الموجود داخل القوس الخطي!"
  },
  {
    "id": "calc_ch4_ex_02",
    "titleEn": "Exercise 2: Secant Squared Trigonometric Integral",
    "titleAr": "تمرين ٢: تكامل قا تربيع لمقدار خطي",
    "difficulty": "easy",
    "questionEn": "Evaluate: $\\int \\sec^2(4x) dx$.",
    "questionAr": "احسب: $\\int \\sec^2(4x) dx$.",
    "optionsEn": [
      "$\\frac{1}{4} \\tan(4x) + C$",
      "$4 \\tan(4x) + C$",
      "$\\tan(4x) + C$",
      "$\\frac{1}{4} \\sec(4x) \\tan(4x) + C$"
    ],
    "optionsAr": [
      "$\\frac{1}{4} \\tan(4x) + C$",
      "$4 \\tan(4x) + C$",
      "$\\tan(4x) + C$",
      "$\\frac{1}{4} \\sec(4x) \\tan(4x) + C$"
    ],
    "correctAnswer": "$\\frac{1}{4} \\tan(4x) + C$",
    "correctIndex": 0,
    "hintEn": "Since $\\frac{d}{dx}(\\tan u) = \\sec^2 u \\cdot u'$, $\\int \\sec^2(ax) dx = \\frac{1}{a} \\tan(ax) + C$.",
    "hintAr": "بما أن مشتقة ظا هي قا²، فإن $\\int \\sec^2(ax) dx = \\frac{1}{a} \\tan(ax) + C$.",
    "stepByStepSolutionEn": [
      "1. Standard trig integral: $\\int \\sec^2(ax) dx = \\frac{1}{a} \\tan(ax) + C$.",
      "2. Here $a = 4$: $\\frac{1}{4} \\tan(4x) + C$."
    ],
    "stepByStepSolutionAr": [
      "١. تكامل قا² لدالة خطية هو: $\\frac{1}{a} \\tan(ax) + C$.",
      "٢. بالتعويض عن $a = 4$: $\\frac{1}{4} \\tan(4x) + C$."
    ],
    "teacherTipEn": "Integration reverses differentiation: integral of sec^2 is tan.",
    "teacherTipAr": "التكامل عكس التفاضل: تكامل قا² هو ظا مقسوماً على معامل الزاوية."
  },
  {
    "id": "calc_ch4_ex_03",
    "titleEn": "Exercise 3: Exponential Linear Exponent Integral",
    "titleAr": "تمرين ٣: تكامل الدالة الأسية الطبيعية ذات الأس الخطي",
    "difficulty": "easy",
    "questionEn": "Evaluate: $\\int e^{3x - 2} dx$.",
    "questionAr": "احسب: $\\int e^{3x - 2} dx$.",
    "optionsEn": [
      "$\\frac{1}{3} e^{3x - 2} + C$",
      "$3 e^{3x - 2} + C$",
      "$e^{3x - 2} + C$",
      "$\\frac{1}{3} e^{3x} + C$"
    ],
    "optionsAr": [
      "$\\frac{1}{3} e^{3x - 2} + C$",
      "$3 e^{3x - 2} + C$",
      "$e^{3x - 2} + C$",
      "$\\frac{1}{3} e^{3x} + C$"
    ],
    "correctAnswer": "$\\frac{1}{3} e^{3x - 2} + C$",
    "correctIndex": 0,
    "hintEn": "$\\int e^{ax + b} dx = \\frac{1}{a} e^{ax + b} + C$.",
    "hintAr": "$\\int e^{ax + b} dx = \\frac{1}{a} e^{ax + b} + C$.",
    "stepByStepSolutionEn": [
      "1. Standard exponential rule: $\\int e^{ax + b} dx = \\frac{1}{a} e^{ax + b} + C$.",
      "2. With $a = 3$: $\\frac{1}{3} e^{3x - 2} + C$."
    ],
    "stepByStepSolutionAr": [
      "١. قاعدة تكامل هـ^(أ س + ب) هي: $\\frac{1}{a} e^{ax + b} + C$.",
      "٢. حيث $a = 3$: $\\frac{1}{3} e^{3x - 2} + C$."
    ],
    "teacherTipEn": "The exponential function e^(ax+b) stays identical upon integration, divided by a.",
    "teacherTipAr": "الدالة الأسية هـ^(أس+ب) تبقى كما هي في التكامل مقسومة على معامل س."
  },
  {
    "id": "calc_ch4_ex_04",
    "titleEn": "Exercise 4: Logarithmic Integral with Trig Denominator",
    "titleAr": "تمرين ٤: تكامل بسطه مشتقة مقامه مع دوال مثلثية",
    "difficulty": "medium",
    "questionEn": "Evaluate: $\\int \\frac{\\cos(x)}{\\sin(x) + 2} dx$.",
    "questionAr": "احسب: $\\int \\frac{\\cos(x)}{\\sin(x) + 2} dx$.",
    "optionsEn": [
      "$\\ln(\\sin(x) + 2) + C$",
      "$\\ln|\\cos(x)| + C$",
      "$\\frac{1}{(\\sin(x) + 2)^2} + C$",
      "$-\\ln(\\sin(x) + 2) + C$"
    ],
    "optionsAr": [
      "$\\ln(\\sin(x) + 2) + C$",
      "$\\ln|\\cos(x)| + C$",
      "$\\frac{1}{(\\sin(x) + 2)^2} + C$",
      "$-\\ln(\\sin(x) + 2) + C$"
    ],
    "correctAnswer": "$\\ln(\\sin(x) + 2) + C$",
    "correctIndex": 0,
    "hintEn": "$\\frac{d}{dx}(\\sin x + 2) = \\cos x$. The numerator is the derivative of the denominator.",
    "hintAr": "مشتقة المقام $\\frac{d}{dx}(\\sin x + 2) = \\cos x$. البسط مشتقة للمقام.",
    "stepByStepSolutionEn": [
      "1. Differentiate denominator: $f'(x) = \\cos x$.",
      "2. The integral is in the form $\\int \\frac{f'(x)}{f(x)} dx = \\ln|f(x)| + C$.",
      "3. Since $\\sin x + 2 > 0$ for all real $x$, $\\ln(\\sin(x) + 2) + C$."
    ],
    "stepByStepSolutionAr": [
      "١. مشتقة المقام: $(\\sin x + 2)' = \\cos x$.",
      "٢. الصورة القياسية: $\\int \\frac{f'(x)}{f(x)} dx = \\ln|f(x)| + C$.",
      "٣. وبما أن $\\sin x + 2 > 0$ دائماً فإن الناتج $\\ln(\\sin(x) + 2) + C$."
    ],
    "teacherTipEn": "Notice that absolute value brackets can be dropped if the argument is strictly positive for all x.",
    "teacherTipAr": "يمكن الاستغناء عن مقياس القيمة المطلقة إذا كان المقدار داخل اللوغاريتم موجباً دائماً."
  },
  {
    "id": "calc_ch4_ex_05",
    "titleEn": "Exercise 5: Integration by Parts (x cos x)",
    "titleAr": "تمرين ٥: تكامل بالتجزيء (س جتا س)",
    "difficulty": "medium",
    "questionEn": "Evaluate: $\\int x \\cos(x) dx$.",
    "questionAr": "احسب: $\\int x \\cos(x) dx$.",
    "optionsEn": [
      "$x \\sin(x) + \\cos(x) + C$",
      "$x \\sin(x) - \\cos(x) + C$",
      "$-x \\sin(x) + \\cos(x) + C$",
      "$\\frac{1}{2} x^2 \\sin(x) + C$"
    ],
    "optionsAr": [
      "$x \\sin(x) + \\cos(x) + C$",
      "$x \\sin(x) - \\cos(x) + C$",
      "$-x \\sin(x) + \\cos(x) + C$",
      "$\\frac{1}{2} x^2 \\sin(x) + C$"
    ],
    "correctAnswer": "$x \\sin(x) + \\cos(x) + C$",
    "correctIndex": 0,
    "hintEn": "Use integration by parts with $u = x$ and $dv = \\cos(x) dx$.",
    "hintAr": "استخدم التكامل بالتجزيء مع $u = x$ و $dv = \\cos(x) dx$.",
    "stepByStepSolutionEn": [
      "1. $u = x \\implies du = dx$.",
      "2. $dv = \\cos(x) dx \\implies v = \\sin(x)$.",
      "3. $\\int x \\cos(x) dx = x \\sin(x) - \\int \\sin(x) dx = x \\sin(x) - (-\\cos(x)) + C = x \\sin(x) + \\cos(x) + C$."
    ],
    "stepByStepSolutionAr": [
      "١. نفرض $u = x \\implies du = dx$.",
      "٢. $dv = \\cos(x) dx \\implies v = \\sin(x)$.",
      "٣. $\\int x \\cos(x) dx = x \\sin(x) - \\int \\sin(x) dx = x \\sin(x) + \\cos(x) + C$."
    ],
    "teacherTipEn": "Be careful with signs: the integral of sin(x) is -cos(x), so the two negatives make +cos(x).",
    "teacherTipAr": "انتبه للإشارات: تكامل جا س هو -جتا س، وسالب في سالب يعطي +جتا س."
  },
  {
    "id": "calc_ch4_ex_06",
    "titleEn": "Exercise 6: Definite Integral of Polynomial",
    "titleAr": "تمرين ٦: حساب تكامل محدد لكثيرة حدود",
    "difficulty": "medium",
    "questionEn": "Evaluate the definite integral: $\\int_0^2 (3x^2 - 2x + 1) dx$.",
    "questionAr": "احسب التكامل المحدد: $\\int_0^2 (3x^2 - 2x + 1) dx$.",
    "optionsEn": [
      "$6$",
      "$8$",
      "$10$",
      "$4$"
    ],
    "optionsAr": [
      "$6$",
      "$8$",
      "$10$",
      "$4$"
    ],
    "correctAnswer": "$6$",
    "correctIndex": 0,
    "hintEn": "Antiderivative is $F(x) = x^3 - x^2 + x$. Compute $F(2) - F(0)$.",
    "hintAr": "الدالة المقابلة هي $F(x) = x^3 - x^2 + x$. احسب $F(2) - F(0)$.",
    "stepByStepSolutionEn": [
      "1. Find antiderivative: $\\int (3x^2 - 2x + 1) dx = x^3 - x^2 + x$.",
      "2. Evaluate at bounds: $[x^3 - x^2 + x]_0^2 = (2^3 - 2^2 + 2) - 0 = (8 - 4 + 2) = 6$."
    ],
    "stepByStepSolutionAr": [
      "١. إيجاد الدالة الأصلية: $\\int (3x^2 - 2x + 1) dx = x^3 - x^2 + x$.",
      "٢. التعويض بحدود التكامل: $(8 - 4 + 2) - 0 = 6$."
    ],
    "teacherTipEn": "Always double-check arithmetic at the lower bound when evaluating definite integrals.",
    "teacherTipAr": "تحقق دائماً من ناتج التعويض بالحد السفلي للتكامل."
  },
  {
    "id": "calc_ch4_ex_07",
    "titleEn": "Exercise 7: Area Under Parabola and the X-Axis",
    "titleAr": "تمرين ٧: المساحة المحصورة بين منحنى ومحور السينات",
    "difficulty": "medium",
    "questionEn": "Find the area of the region enclosed between the curve $y = 4 - x^2$ and the x-axis.",
    "questionAr": "أوجد مساحة المنطقة المحصورة بين المنحنى $y = 4 - x^2$ ومحور السينات.",
    "optionsEn": [
      "$\\frac{32}{3}\\text{ square units}$",
      "$\\frac{16}{3}\\text{ square units}$",
      "$\\frac{64}{3}\\text{ square units}$",
      "$8\\text{ square units}$"
    ],
    "optionsAr": [
      "$\\frac{32}{3}\\text{ وحدة مربعة}$",
      "$\\frac{16}{3}\\text{ وحدة مربعة}$",
      "$\\frac{64}{3}\\text{ وحدة مربعة}$",
      "$8\\text{ وحدة مربعة}$"
    ],
    "correctAnswer": "$\\frac{32}{3}\\text{ square units}$",
    "correctIndex": 0,
    "hintEn": "Set $y = 0 \\implies 4 - x^2 = 0 \\implies x = \\pm 2$. Compute $A = \\int_{-2}^2 (4 - x^2) dx = 2 \\int_0^2 (4 - x^2) dx$.",
    "hintAr": "بوضع $y = 0 \\implies x = \\pm 2$. احسب $A = \\int_{-2}^2 (4 - x^2) dx = 2 \\int_0^2 (4 - x^2) dx$.",
    "stepByStepSolutionEn": [
      "1. Find roots on x-axis: $4 - x^2 = 0 \\implies x = -2, 2$.",
      "2. By symmetry of the even function $4 - x^2$:",
      "$$A = 2 \\int_0^2 (4 - x^2) dx = 2 \\left[ 4x - \\frac{x^3}{3} \\right]_0^2 = 2 \\left(8 - \\frac{8}{3}\\right) = 2 \\left(\\frac{16}{3}\\right) = \\frac{32}{3}\\text{ square units}$$"
    ],
    "stepByStepSolutionAr": [
      "١. تعيين نقاط تقاطع المنحنى مع محور السينات: $4 - x^2 = 0 \\implies x = \\pm 2$.",
      "٢. بالاستفادة من تماثل الدالة الزوجية:",
      "$$A = 2 \\int_0^2 (4 - x^2) dx = 2 \\left[ 4x - \\frac{x^3}{3} \\right]_0^2 = 2 \\times \\frac{16}{3} = \\frac{32}{3}\\text{ وحدة مربعة}$$"
    ],
    "teacherTipEn": "Using symmetry for even functions simplifies area integration bounds from [-a, a] to 2 * [0, a].",
    "teacherTipAr": "التماثل للدوال الزوجية يسهل الحسابات بتحويل فترة التكامل من [-أ، أ] إلى ٢ × [٠، أ]."
  },
  {
    "id": "calc_ch4_ex_08",
    "titleEn": "Exercise 8: Area Enclosed Between y = x^3 and y = x",
    "titleAr": "تمرين ٨: المساحة المحصورة بين ص = س³ و ص = س",
    "difficulty": "medium",
    "questionEn": "Find the total area of the region enclosed between the curve $y = x^3$ and the straight line $y = x$.",
    "questionAr": "أوجد المساحة الكلية للمنطقة المحصورة بين المنحنى $y = x^3$ والمستقيم $y = x$.",
    "optionsEn": [
      "$\\frac{1}{2}\\text{ square units}$",
      "$1\\text{ square unit}$",
      "$\\frac{1}{4}\\text{ square units}$",
      "$0\\text{ square units}$"
    ],
    "optionsAr": [
      "$\\frac{1}{2}\\text{ وحدة مربعة}$",
      "$1\\text{ وحدة مربعة}$",
      "$\\frac{1}{4}\\text{ وحدة مربعة}$",
      "$0\\text{ وحدة مربعة}$"
    ],
    "correctAnswer": "$\\frac{1}{2}\\text{ square units}$",
    "correctIndex": 0,
    "hintEn": "Intersection points are $x = -1, 0, 1$. The regions on $[-1, 0]$ and $[0, 1]$ are symmetric, so total Area $= 2 \\int_0^1 (x - x^3) dx$.",
    "hintAr": "نقاط التقاطع هي $x = -1, 0, 1$. المنطقتان متماثلتان، لذا المساحة الكلية $= 2 \\int_0^1 (x - x^3) dx$.",
    "stepByStepSolutionEn": [
      "1. Intersections: $x^3 = x \\implies x(x^2 - 1) = 0 \\implies x = -1, 0, 1$.",
      "2. On $[0, 1]$, line $y = x$ is above $y = x^3$.",
      "3. Total area: $A = 2 \\int_0^1 (x - x^3) dx = 2 \\left[ \\frac{x^2}{2} - \\frac{x^4}{4} \\right]_0^1 = 2 \\left(\\frac{1}{2} - \\frac{1}{4}\\right) = 2 \\left(\\frac{1}{4}\\right) = \\frac{1}{2}\\text{ sq units}$."
    ],
    "stepByStepSolutionAr": [
      "١. نقاط التقاطع: $x^3 - x = 0 \\implies x = -1, 0, 1$.",
      "٢. في الفترة $[0, 1]$ المستقيم أعلى من المنحنى.",
      "٣. المساحة الكلية = ضعف مساحة أحد الجزأين بالتماثل:",
      "$$A = 2 \\int_0^1 (x - x^3) dx = 2 \\left( \\frac{1}{2} - \\frac{1}{4} \\right) = 2 \\times \\frac{1}{4} = \\frac{1}{2}\\text{ وحدة مربعة}$$"
    ],
    "teacherTipEn": "Crucial rule: Area is NEVER zero! If you integrate from -1 to 1 without splitting at x=0, you would get 0 because areas cancel out.",
    "teacherTipAr": "قاعدة ذهبية: المساحة لا يمكن أن تكون صفراً أبداً! إذا كاملت مباشرة من -١ إلى ١ دون تجزئة سيلغي الجزآن بعضهما."
  },
  {
    "id": "calc_ch4_ex_09",
    "titleEn": "Exercise 9: Integral with Logarithm in Denominator",
    "titleAr": "تمرين ٩: تكامل كسر يحتوي على لوغاريتم في مقامه",
    "difficulty": "medium",
    "questionEn": "Evaluate: $\\int \\frac{1}{x \\ln(x)} dx$.",
    "questionAr": "احسب: $\\int \\frac{1}{x \\ln(x)} dx$.",
    "optionsEn": [
      "$\\ln|\\ln(x)| + C$",
      "$\\frac{1}{2} (\\ln x)^2 + C$",
      "$\\ln(x) + C$",
      "$\\frac{1}{\\ln(x)} + C$"
    ],
    "optionsAr": [
      "$\\ln|\\ln(x)| + C$",
      "$\\frac{1}{2} (\\ln x)^2 + C$",
      "$\\ln(x) + C$",
      "$\\frac{1}{\\ln(x)} + C$"
    ],
    "correctAnswer": "$\\ln|\\ln(x)| + C$",
    "correctIndex": 0,
    "hintEn": "Rewrite the integrand as $\\frac{1/x}{\\ln(x)}$. The numerator is the derivative of the denominator!",
    "hintAr": "أعد كتابة الكسر بصورة: $\\frac{1/x}{\\ln(x)}$. البسط هو مشتقة المقام!",
    "stepByStepSolutionEn": [
      "1. Rewrite as a quotient: $\\int \\frac{1/x}{\\ln(x)} dx$.",
      "2. Notice $\\frac{d}{dx}(\\ln x) = \\frac{1}{x}$.",
      "3. Applying $\\int \\frac{f'(x)}{f(x)} dx = \\ln|f(x)| + C$ gives $\\ln|\\ln(x)| + C$."
    ],
    "stepByStepSolutionAr": [
      "١. إعادة كتابة الكسر: $\\int \\frac{1/x}{\\ln(x)} dx$.",
      "٢. مشتقة المقام $\\ln(x)$ هي $\\frac{1}{x}$ الموجودة في البسط.",
      "٣. ناتج التكامل هو لوغاريتم المقام: $\\ln|\\ln(x)| + C$."
    ],
    "teacherTipEn": "A classic Thanaweya question testing the recognition of f'(x)/f(x) inside nested fractions.",
    "teacherTipAr": "سؤال امتحانات كلاسيكي يختبر تمييز صورة د'(س)/د(س) في الكسور المركبة."
  },
  {
    "id": "calc_ch4_ex_10",
    "titleEn": "Exercise 10: Definite Integration by Parts",
    "titleAr": "تمرين ١٠: التكامل المحدد بالتجزيء",
    "difficulty": "medium",
    "questionEn": "Evaluate: $\\int_0^1 x e^x dx$.",
    "questionAr": "احسب: $\\int_0^1 x e^x dx$.",
    "optionsEn": [
      "$1$",
      "$e - 1$",
      "$e$",
      "$2$"
    ],
    "optionsAr": [
      "$1$",
      "$e - 1$",
      "$e$",
      "$2$"
    ],
    "correctAnswer": "$1$",
    "correctIndex": 0,
    "hintEn": "The antiderivative is $x e^x - e^x$. Evaluate between 0 and 1.",
    "hintAr": "الدالة المقابلة هي $x e^x - e^x$. احسب القيمة بين ٠ و ١.",
    "stepByStepSolutionEn": [
      "1. Parts: $u = x, dv = e^x dx \\implies du = dx, v = e^x$.",
      "2. Antiderivative: $\\int x e^x dx = x e^x - e^x$.",
      "3. Evaluate limits: $[x e^x - e^x]_0^1 = (1 \\cdot e^1 - e^1) - (0 \\cdot e^0 - e^0) = (e - e) - (-1) = 0 + 1 = 1$."
    ],
    "stepByStepSolutionAr": [
      "١. بالتجزيء: $u = x, dv = e^x dx \\implies du = dx, v = e^x$.",
      "٢. الدالة الأصلية: $x e^x - e^x$.",
      "٣. التعويض: $(e - e) - (0 - e^0) = 0 - (-1) = 1$."
    ],
    "teacherTipEn": "Watch out for e^0 = 1! Many students mistakenly write e^0 = 0.",
    "teacherTipAr": "احذر: هـ^٠ = ١! كثير من الطلاب يخطئون ويعتبرونها صفراً."
  },
  {
    "id": "calc_ch4_ex_11",
    "titleEn": "Exercise 11: Algebraic Substitution with Radical",
    "titleAr": "تمرين ١١: التعويض الجبري لجذر تربيعي",
    "difficulty": "hots",
    "questionEn": "Evaluate the indefinite integral: $\\int x \\sqrt{x + 1} dx$.",
    "questionAr": "احسب التكامل غير المحدد: $\\int x \\sqrt{x + 1} dx$.",
    "optionsEn": [
      "$\\frac{2}{5}(x + 1)^{5/2} - \\frac{2}{3}(x + 1)^{3/2} + C$",
      "$\\frac{2}{5}(x + 1)^{5/2} + \\frac{2}{3}(x + 1)^{3/2} + C$",
      "$\\frac{1}{5}(x + 1)^{5/2} - \\frac{1}{3}(x + 1)^{3/2} + C$",
      "$\\frac{2}{3}(x + 1)^{3/2} + C$"
    ],
    "optionsAr": [
      "$\\frac{2}{5}(x + 1)^{5/2} - \\frac{2}{3}(x + 1)^{3/2} + C$",
      "$\\frac{2}{5}(x + 1)^{5/2} + \\frac{2}{3}(x + 1)^{3/2} + C$",
      "$\\frac{1}{5}(x + 1)^{5/2} - \\frac{1}{3}(x + 1)^{3/2} + C$",
      "$\\frac{2}{3}(x + 1)^{3/2} + C$"
    ],
    "correctAnswer": "$\\frac{2}{5}(x + 1)^{5/2} - \\frac{2}{3}(x + 1)^{3/2} + C$",
    "correctIndex": 0,
    "hintEn": "Let $u = x + 1 \\implies x = u - 1$ and $dx = du$. Then expand $(u - 1) u^{1/2}$.",
    "hintAr": "افرض $u = x + 1 \\implies x = u - 1$ و $dx = du$. ثم فك القوس $(u - 1) u^{1/2}$.",
    "stepByStepSolutionEn": [
      "1. Substitution: let $u = x + 1 \\implies x = u - 1$ and $dx = du$.",
      "2. Rewrite integral: $\\int (u - 1) u^{1/2} du = \\int (u^{3/2} - u^{1/2}) du$.",
      "3. Integrate: $\\frac{u^{5/2}}{5/2} - \\frac{u^{3/2}}{3/2} + C = \\frac{2}{5}(x + 1)^{5/2} - \\frac{2}{3}(x + 1)^{3/2} + C$."
    ],
    "stepByStepSolutionAr": [
      "١. بالتعويض: بفرض $u = x + 1 \\implies x = u - 1$ و $dx = du$.",
      "٢. تحويل التكامل: $\\int (u - 1) u^{1/2} du = \\int (u^{3/2} - u^{1/2}) du$.",
      "٣. إجراء التكامل والعودة للمتغير س:",
      "$$= \\frac{2}{5}(x + 1)^{5/2} - \\frac{2}{3}(x + 1)^{3/2} + C$$"
    ],
    "teacherTipEn": "When a linear term is outside and inside a square root, substituting u = expression inside root always unlocks it.",
    "teacherTipAr": "عند وجود حد خطي خارج وداخل الجذر، فإن فرض ع = ما تحت الجذر يفكك المسألة مباشرة."
  },
  {
    "id": "calc_ch4_ex_12",
    "titleEn": "Exercise 12: Area Between Parabola and Secant Line",
    "titleAr": "تمرين ١٢: المساحة بين قطع مكافئ ومستقيم قاطع",
    "difficulty": "hots",
    "questionEn": "Find the area of the region bounded by $y^2 = 4x$ and $y = 2x$.",
    "questionAr": "أوجد مساحة المنطقة المحصورة بين $y^2 = 4x$ والمستقيم $y = 2x$.",
    "optionsEn": [
      "$\\frac{1}{3}\\text{ square units}$",
      "$\\frac{2}{3}\\text{ square units}$",
      "$\\frac{1}{6}\\text{ square units}$",
      "$1\\text{ square unit}$"
    ],
    "optionsAr": [
      "$\\frac{1}{3}\\text{ وحدة مربعة}$",
      "$\\frac{2}{3}\\text{ وحدة مربعة}$",
      "$\\frac{1}{6}\\text{ وحدة مربعة}$",
      "$1\\text{ وحدة مربعة}$"
    ],
    "correctAnswer": "$\\frac{1}{3}\\text{ square units}$",
    "correctIndex": 0,
    "hintEn": "Substitute $y = 2x$ into $y^2 = 4x \\implies 4x^2 = 4x \\implies x = 0, 1$. Integrate $A = \\int_0^1 (2\\sqrt{x} - 2x) dx$.",
    "hintAr": "بالتعويض: $4x^2 = 4x \\implies x = 0, 1$. احسب $A = \\int_0^1 (2\\sqrt{x} - 2x) dx$.",
    "stepByStepSolutionEn": [
      "1. Intersections: $(2x)^2 = 4x \\implies 4x^2 - 4x = 0 \\implies x = 0, 1$.",
      "2. For $x \\in [0, 1]$, $y = 2\\sqrt{x} \\ge 2x$.",
      "3. Area: $A = \\int_0^1 (2x^{1/2} - 2x) dx = \\left[ \\frac{4}{3} x^{3/2} - x^2 \\right]_0^1 = \\frac{4}{3} - 1 = \\frac{1}{3}\\text{ square units}$."
    ],
    "stepByStepSolutionAr": [
      "١. نقاط التقاطع: $(2x)^2 = 4x \\implies x = 0, 1$.",
      "٢. في الفترة $[0, 1]$ المنحنى العلوي هو $y = 2\\sqrt{x}$.",
      "٣. حساب المساحة: $A = \\left[ \\frac{4}{3} x^{3/2} - x^2 \\right]_0^1 = \\frac{4}{3} - 1 = \\frac{1}{3}\\text{ وحدة مربعة}$."
    ],
    "teacherTipEn": "Alternatively, integrate with respect to y from 0 to 2: ∫ (y/2 - y^2/4) dy = [y^2/4 - y^3/12]_0^2 = 1 - 8/12 = 1/3.",
    "teacherTipAr": "يمكنك أيضاً التكامل بالنسبة إلى ص من ٠ إلى ٢ للحصول على نفس النتيجة ١/٣."
  },
  {
    "id": "calc_ch4_ex_13",
    "titleEn": "Exercise 13: Volume of Revolution for Sine Arch",
    "titleAr": "تمرين ١٣: حجم الجسم الدوراني لقوس دالة الجيب",
    "difficulty": "hots",
    "questionEn": "Find the volume of the solid generated by revolving the region bounded by $y = \\sin(x)$ and the x-axis from $x = 0$ to $x = \\pi$ a complete revolution about the x-axis.",
    "questionAr": "أوجد حجم الجسم الدوراني الناتج من دوران المنطقة المحصورة بين $y = \\sin(x)$ ومحور السينات في الفترة من $x = 0$ إلى $x = \\pi$ دورة كاملة حول محور السينات.",
    "optionsEn": [
      "$\\frac{\\pi^2}{2}\\text{ cubic units}$",
      "$\\pi^2\\text{ cubic units}$",
      "$2\\pi\\text{ cubic units}$",
      "$\\frac{\\pi^2}{4}\\text{ cubic units}$"
    ],
    "optionsAr": [
      "$\\frac{\\pi^2}{2}\\text{ وحدة مكعبة}$",
      "$\\pi^2\\text{ وحدة مكعبة}$",
      "$2\\pi\\text{ وحدة مكعبة}$",
      "$\\frac{\\pi^2}{4}\\text{ وحدة مكعبة}$"
    ],
    "correctAnswer": "$\\frac{\\pi^2}{2}\\text{ cubic units}$",
    "correctIndex": 0,
    "hintEn": "$V = \\pi \\int_0^\\pi \\sin^2(x) dx = \\pi \\int_0^\\pi \\frac{1 - \\cos(2x)}{2} dx$.",
    "hintAr": "$V = \\pi \\int_0^\\pi \\sin^2(x) dx = \\pi \\int_0^\\pi \\frac{1 - \\cos(2x)}{2} dx$.",
    "stepByStepSolutionEn": [
      "1. Apply volume formula: $V = \\pi \\int_0^\\pi \\sin^2(x) dx$.",
      "2. Substitute identity: $V = \\pi \\int_0^\\pi \\frac{1 - \\cos(2x)}{2} dx$.",
      "3. Integrate: $V = \\frac{\\pi}{2} \\left[ x - \\frac{\\sin(2x)}{2} \\right]_0^\\pi = \\frac{\\pi}{2} [(\\pi - 0) - (0 - 0)] = \\frac{\\pi^2}{2}\\text{ cubic units}$."
    ],
    "stepByStepSolutionAr": [
      "١. قانون الحجم الدوراني حول محور السينات: $V = \\pi \\int_0^\\pi \\sin^2(x) dx$.",
      "٢. التعويض بمتطابقة نصف الزاوية: $V = \\frac{\\pi}{2} \\int_0^\\pi (1 - \\cos 2x) dx$.",
      "٣. حساب قيمة التكامل: $V = \\frac{\\pi}{2} \\left[ x - \\frac{\\sin 2x}{2} \\right]_0^\\pi = \\frac{\\pi^2}{2}\\text{ وحدة مكعبة}$."
    ],
    "teacherTipEn": "Notice the π^2 factor: one π comes from the cylindrical disk cross-section, and the second π comes from the period boundary.",
    "teacherTipAr": "لاحظ ظهور ط² (π²): ط الأولى من مساحة المقطع الدائري، وط الثانية من حدود التكامل."
  },
  {
    "id": "calc_ch4_ex_14",
    "titleEn": "Exercise 14: Volume of Washer (Solid Between Two Rotated Curves)",
    "titleAr": "تمرين ١٤: حجم الجسم الدوراني بطريقة الحلقات بين منحنيين",
    "difficulty": "hots",
    "questionEn": "Find the volume of the solid generated by revolving the region enclosed between $y = 2x$ and $y = x^2$ a complete revolution about the x-axis.",
    "questionAr": "أوجد حجم الجسم الدوراني الناشئ من دوران المنطقة المحصورة بين $y = 2x$ و $y = x^2$ دورة كاملة حول محور السينات.",
    "optionsEn": [
      "$\\frac{64\\pi}{15}\\text{ cubic units}$",
      "$\\frac{32\\pi}{15}\\text{ cubic units}$",
      "$\\frac{16\\pi}{5}\\text{ cubic units}$",
      "$\\frac{8\\pi}{3}\\text{ cubic units}$"
    ],
    "optionsAr": [
      "$\\frac{64\\pi}{15}\\text{ وحدة مكعبة}$",
      "$\\frac{32\\pi}{15}\\text{ وحدة مكعبة}$",
      "$\\frac{16\\pi}{5}\\text{ وحدة مكعبة}$",
      "$\\frac{8\\pi}{3}\\text{ وحدة مكعبة}$"
    ],
    "correctAnswer": "$\\frac{64\\pi}{15}\\text{ cubic units}$",
    "correctIndex": 0,
    "hintEn": "$V = \\pi \\int_0^2 ((y_{outer})^2 - (y_{inner})^2) dx = \\pi \\int_0^2 (4x^2 - x^4) dx$.",
    "hintAr": "$V = \\pi \\int_0^2 ((y_{outer})^2 - (y_{inner})^2) dx = \\pi \\int_0^2 (4x^2 - x^4) dx$.",
    "stepByStepSolutionEn": [
      "1. Intersections: $x^2 = 2x \\implies x = 0, 2$.",
      "2. Washer formula: $V = \\pi \\int_0^2 ((2x)^2 - (x^2)^2) dx = \\pi \\int_0^2 (4x^2 - x^4) dx$.",
      "3. Integrate: $\\pi \\left[ \\frac{4x^3}{3} - \\frac{x^5}{5} \\right]_0^2 = \\pi \\left( \\frac{32}{3} - \\frac{32}{5} \\right) = 32\\pi \\left( \\frac{5 - 3}{15} \\right) = \\frac{64\\pi}{15}\\text{ cubic units}$."
    ],
    "stepByStepSolutionAr": [
      "١. نقاط التقاطع: $x = 0, 2$.",
      "٢. قانون الحجم الدوراني بين منحنيين (طريقة الحلقات):",
      "$$V = \\pi \\int_0^2 ((2x)^2 - (x^2)^2) dx = \\pi \\int_0^2 (4x^2 - x^4) dx$$",
      "٣. حساب قيمة التكامل: $\\pi \\left[ \\frac{4x^3}{3} - \\frac{x^5}{5} \\right]_0^2 = \\pi \\left( \\frac{32}{3} - \\frac{32}{5} \\right) = \\frac{64\\pi}{15}\\text{ وحدة مكعبة}$."
    ],
    "teacherTipEn": "Washer formula: square the radii FIRST, then subtract: (R^2 - r^2), NOT (R - r)^2.",
    "teacherTipAr": "قاعدة الحلقات: ربع نصفي القطرين أولاً ثم اطرح: (نق١² - نق٢²)، وليس (نق١ - نق٢)²."
  },
  {
    "id": "calc_ch4_ex_15",
    "titleEn": "Exercise 15: Definite Integral of Absolute Value Function",
    "titleAr": "تمرين ١٥: التكامل المحدد لدالة المقياس (القيمة المطلقة)",
    "difficulty": "hots",
    "questionEn": "Evaluate: $\\int_{-2}^3 |x| dx$.",
    "questionAr": "احسب: $\\int_{-2}^3 |x| dx$.",
    "optionsEn": [
      "$\\frac{13}{2} = 6.5$",
      "$\\frac{5}{2} = 2.5$",
      "$\\frac{9}{2} = 4.5$",
      "$5$"
    ],
    "optionsAr": [
      "$\\frac{13}{2} = 6.5$",
      "$\\frac{5}{2} = 2.5$",
      "$\\frac{9}{2} = 4.5$",
      "$5$"
    ],
    "correctAnswer": "$\\frac{13}{2} = 6.5$",
    "correctIndex": 0,
    "hintEn": "Redefine $|x|$: $|x| = -x$ for $x < 0$ and $|x| = x$ for $x \\ge 0$. Split the integral at 0: $\\int_{-2}^0 (-x) dx + \\int_0^3 x dx$.",
    "hintAr": "أعد تعريف المقياس: $|x| = -x$ عندما $x < 0$ و $|x| = x$ عندما $x \\ge 0$. جزئ التكامل عند الصفر.",
    "stepByStepSolutionEn": [
      "1. Split at root $x = 0$:",
      "$$\\int_{-2}^3 |x| dx = \\int_{-2}^0 (-x) dx + \\int_0^3 x dx$$",
      "2. Integrate each piece:",
      "$$\\left[ -\\frac{x^2}{2} \\right]_{-2}^0 + \\left[ \\frac{x^2}{2} \\right]_0^3 = \\left( 0 - \\left(-\\frac{4}{2}\\right) \\right) + \\left( \\frac{9}{2} - 0 \\right) = 2 + 4.5 = 6.5 = \\frac{13}{2}$$"
    ],
    "stepByStepSolutionAr": [
      "١. إعادة تعريف المقياس والتجزئة عند صفر المقياس ($x = 0$):",
      "$$\\int_{-2}^3 |x| dx = \\int_{-2}^0 (-x) dx + \\int_0^3 x dx$$",
      "٢. حساب نصفي التكامل:",
      "$$= \\left[ -\\frac{x^2}{2} \\right]_{-2}^0 + \\left[ \\frac{x^2}{2} \\right]_0^3 = 2 + \\frac{9}{2} = \\frac{13}{2} = 6.5$$"
    ],
    "teacherTipEn": "Geometrically, this represents the sum of the areas of two right triangles with bases 2 and 3: (1/2)*2*2 + (1/2)*3*3 = 2 + 4.5 = 6.5.",
    "teacherTipAr": "هندسياً، يمثل هذا مجموع مساحتي مثلثين قائمين قاعدتاهما ٢ و ٣: ٠٫٥×٢×٢ + ٠٫٥×٣×٣ = ٢ + ٤٫٥ = ٦٫٥."
  }
];
