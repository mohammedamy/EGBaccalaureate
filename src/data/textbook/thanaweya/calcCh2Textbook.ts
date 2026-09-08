import type { SolvedProblem } from '../../../types/curriculum';

export const calcCh2SolvedExamples: SolvedProblem[] = [
  {
    "id": "calc_ch2_se_01",
    "titleEn": "MoE Example 1: Fundamental Limit of Euler's Number e",
    "titleAr": "مثال الوزارة ١: النهاية الأساسية للعدد النيبيري هـ",
    "difficulty": "easy",
    "questionEn": "Evaluate the limit: $$\\lim_{x \\to \\infty} \\left(1 + \\frac{3}{x}\\right)^{2x}$$",
    "questionAr": "احسب قيمة النهاية: $$\\lim_{x \\to \\infty} \\left(1 + \\frac{3}{x}\\right)^{2x}$$",
    "optionsEn": [
      "$e^6$",
      "$e^5$",
      "$e^3$",
      "$e^2$"
    ],
    "optionsAr": [
      "هـ^6",
      "هـ^5",
      "هـ^3",
      "هـ^2"
    ],
    "correctAnswer": "$e^6$",
    "correctIndex": 0,
    "hintEn": "Use the standard formula $\\lim_{x \\to \\infty} (1 + \\frac{k}{x})^{mx} = e^{km}$.",
    "hintAr": "استخدم الصيغة القياسية: $\\lim_{x \\to \\infty} (1 + \\frac{k}{x})^{mx} = e^{km}$.",
    "stepByStepSolutionEn": [
      "1. Identify constants $k = 3$ and $m = 2$ in $\\lim_{x \\to \\infty} \\left(1 + \\frac{3}{x}\\right)^{2x}$.",
      "2. Rewrite the exponent:",
      "$$\\left[\\left(1 + \\frac{3}{x}\\right)^x\\right]^2$$",
      "3. Since $\\lim_{x \\to \\infty} \\left(1 + \\frac{3}{x}\\right)^x = e^3$, we have:",
      "$$\\lim_{x \\to \\infty} \\left(1 + \\frac{3}{x}\\right)^{2x} = (e^3)^2 = e^6$$"
    ],
    "stepByStepSolutionAr": [
      "١. تحديد الثوابت: $k = 3$ و $m = 2$.",
      "٢. إعادة صياغة الأس:",
      "$$\\left[\\left(1 + \\frac{3}{x}\\right)^x\\right]^2$$",
      "٣. بما أن $\\lim_{x \\to \\infty} \\left(1 + \\frac{3}{x}\\right)^x = e^3$، إذن:",
      "$$\\text{الناتج} = (e^3)^2 = e^6$$"
    ],
    "teacherTipEn": "Shortcut: multiply the numerator of the fraction by the coefficient of x in the exponent: 3 * 2 = 6, yielding e^6.",
    "teacherTipAr": "قاعدة سريعة: اضرب بسط الكسر الداخلي في معامل س في الأس: ٣ × ٢ = ٦، فيكون الناتج هـ^٦ مباشرة."
  },
  {
    "id": "calc_ch2_se_02",
    "titleEn": "MoE Example 2: Limit of General Exponential Function",
    "titleAr": "مثال الوزارة ٢: نهاية الدالة الأسية العامة",
    "difficulty": "easy",
    "questionEn": "Evaluate the limit: $$\\lim_{x \\to 0} \\frac{5^x - 1}{x}$$",
    "questionAr": "احسب قيمة النهاية: $$\\lim_{x \\to 0} \\frac{5^x - 1}{x}$$",
    "optionsEn": [
      "$\\ln 5$",
      "$5$",
      "$1$",
      "$\\frac{1}{\\ln 5}$"
    ],
    "optionsAr": [
      "لو_هـ 5",
      "5",
      "1",
      "\\frac{1}{\\text{لو}_هـ 5}"
    ],
    "correctAnswer": "$\\ln 5$",
    "correctIndex": 0,
    "hintEn": "Standard theorem: $\\lim_{x \\to 0} \\frac{a^x - 1}{x} = \\ln a$.",
    "hintAr": "نظرية قياسية: $\\lim_{x \\to 0} \\frac{a^x - 1}{x} = \\ln a$.",
    "stepByStepSolutionEn": [
      "By the fundamental exponential limit theorem:",
      "$$\\lim_{x \\to 0} \\frac{a^x - 1}{x} = \\ln a$$",
      "Here base $a = 5$, hence:",
      "$$\\lim_{x \\to 0} \\frac{5^x - 1}{x} = \\ln 5$$"
    ],
    "stepByStepSolutionAr": [
      "وفقاً للنظرية الأساسية لنهايات الدوال الأسية:",
      "$$\\lim_{x \\to 0} \\frac{a^x - 1}{x} = \\ln a$$",
      "الأساس هنا هو $a = 5$، إذن الناتج هو $\\ln 5$ (لوغاريتم ٥ للأساس هـ)."
    ],
    "teacherTipEn": "If base is e, ln(e) = 1. For any base a > 0, the answer is ln(a).",
    "teacherTipAr": "إذا كان الأساس هـ، فإن الناتج لو_هـ(هـ) = ١. ولأي أساس عام أ > ٠، الناتج هو لو_هـ(أ)."
  },
  {
    "id": "calc_ch2_se_03",
    "titleEn": "MoE Example 3: Limit of Natural Logarithm with Scaled Argument",
    "titleAr": "مثال الوزارة ٣: نهاية اللوغاريتم الطبيعي مع معامل للزاوية",
    "difficulty": "easy",
    "questionEn": "Evaluate the limit: $$\\lim_{x \\to 0} \\frac{\\ln(1 + 4x)}{3x}$$",
    "questionAr": "احسب قيمة النهاية: $$\\lim_{x \\to 0} \\frac{\\ln(1 + 4x)}{3x}$$",
    "optionsEn": [
      "$\\frac{4}{3}$",
      "$\\frac{3}{4}$",
      "$4$",
      "$\\frac{1}{3}$"
    ],
    "optionsAr": [
      "\\frac{4}{3}",
      "\\frac{3}{4}",
      "4",
      "\\frac{1}{3}"
    ],
    "correctAnswer": "$\\frac{4}{3}$",
    "correctIndex": 0,
    "hintEn": "Use the standard limit $\\lim_{u \\to 0} \\frac{\\ln(1 + u)}{u} = 1$.",
    "hintAr": "استخدم النهاية القياسية: $\\lim_{u \\to 0} \\frac{\\ln(1 + u)}{u} = 1$.",
    "stepByStepSolutionEn": [
      "1. Factor out the constant $\\frac{1}{3}$ from the denominator:",
      "$$\\lim_{x \\to 0} \\frac{\\ln(1 + 4x)}{3x} = \\frac{1}{3} \\lim_{x \\to 0} \\frac{\\ln(1 + 4x)}{x}$$",
      "2. Multiply numerator and denominator by 4 to match the argument:",
      "$$= \\frac{1}{3} \\cdot 4 \\lim_{x \\to 0} \\frac{\\ln(1 + 4x)}{4x}$$",
      "3. As $x \\to 0$, $4x \\to 0$, so $\\lim_{4x \\to 0} \\frac{\\ln(1 + 4x)}{4x} = 1$:",
      "$$= \\frac{4}{3} \\cdot 1 = \\frac{4}{3}$$"
    ],
    "stepByStepSolutionAr": [
      "١. إخراج الثابت $\\frac{1}{3}$ خارج النهاية:",
      "$$\\frac{1}{3} \\lim_{x \\to 0} \\frac{\\ln(1 + 4x)}{x}$$",
      "٢. الضرب بسطاً ومقاماً في ٤ ليطابق المقام الزاوية:",
      "$$= \\frac{4}{3} \\lim_{4x \\to 0} \\frac{\\ln(1 + 4x)}{4x} = \\frac{4}{3} (1) = \\frac{4}{3}$$"
    ],
    "teacherTipEn": "Ratio of coefficients: 4/3.",
    "teacherTipAr": "نسبة المعاملات مباشرة: ٤ مقسومة على ٣."
  },
  {
    "id": "calc_ch2_se_04",
    "titleEn": "MoE Example 4: Derivative of Natural Exponential Composite Function",
    "titleAr": "مثال الوزارة ٤: اشتقاق الدالة الأسية الطبيعية المركبة",
    "difficulty": "medium",
    "questionEn": "Find $\\frac{dy}{dx}$ if $y = e^{x^3 - 2x}$.",
    "questionAr": "أوجد $\\frac{dy}{dx}$ إذا كان $y = e^{x^3 - 2x}$.",
    "optionsEn": [
      "$(3x^2 - 2) e^{x^3 - 2x}$",
      "$3x^2 e^{x^3 - 2x}$",
      "$(x^3 - 2x) e^{x^3 - 2x}$",
      "$(3x^2 - 2) e^{x^3 - 2x - 1}$"
    ],
    "optionsAr": [
      "$(3x^2 - 2) e^{x^3 - 2x}$",
      "$3x^2 e^{x^3 - 2x}$",
      "$(x^3 - 2x) e^{x^3 - 2x}$",
      "$(3x^2 - 2) e^{x^3 - 2x - 1}$"
    ],
    "correctAnswer": "$(3x^2 - 2) e^{x^3 - 2x}$",
    "correctIndex": 0,
    "hintEn": "The derivative of $e^u$ is $u' \\cdot e^u$.",
    "hintAr": "مشتقة الدالة الأسية الطبيعية $e^u$ هي $u' \\cdot e^u$.",
    "stepByStepSolutionEn": [
      "1. Let $u = x^3 - 2x$.",
      "2. Differentiate the exponent: $u' = 3x^2 - 2$.",
      "3. By the chain rule: $\\frac{dy}{dx} = u' \\cdot e^u = (3x^2 - 2) e^{x^3 - 2x}$."
    ],
    "stepByStepSolutionAr": [
      "١. نضع الأس $u = x^3 - 2x$.",
      "٢. مشتقة الأس: $u' = 3x^2 - 2$.",
      "٣. بقاعدة السلسلة: $\\frac{dy}{dx} = (3x^2 - 2) e^{x^3 - 2x}$."
    ],
    "teacherTipEn": "The exponential function reproduces itself multiplied by the derivative of its exponent.",
    "teacherTipAr": "الدالة الأسية تكرر نفسها مضروبة في مشتقة أسها."
  },
  {
    "id": "calc_ch2_se_05",
    "titleEn": "MoE Example 5: Derivative of General Base Exponential Function",
    "titleAr": "مثال الوزارة ٥: اشتقاق الدالة الأسية ذات الأساس العام",
    "difficulty": "medium",
    "questionEn": "Find $\\frac{dy}{dx}$ if $y = 3^{\\sin x}$.",
    "questionAr": "أوجد $\\frac{dy}{dx}$ إذا كان $y = 3^{\\sin x}$.",
    "optionsEn": [
      "$(\\cos x) \\cdot 3^{\\sin x} \\ln 3$",
      "$(\\cos x) \\cdot 3^{\\sin x}$",
      "$(\\sin x) \\cdot 3^{\\sin x - 1}$",
      "$3^{\\sin x} \\ln 3$"
    ],
    "optionsAr": [
      "$(\\cos x) \\cdot 3^{\\sin x} \\ln 3$",
      "$(\\cos x) \\cdot 3^{\\sin x}$",
      "$(\\sin x) \\cdot 3^{\\sin x - 1}$",
      "$3^{\\sin x} \\ln 3$"
    ],
    "correctAnswer": "$(\\cos x) \\cdot 3^{\\sin x} \\ln 3$",
    "correctIndex": 0,
    "hintEn": "The derivative of $a^u$ is $u' \\cdot a^u \\cdot \\ln a$.",
    "hintAr": "مشتقة الدالة الأسية للأساس العام $a^u$ هي $u' \\cdot a^u \\cdot \\ln a$.",
    "stepByStepSolutionEn": [
      "1. Let $u = \\sin x \\implies u' = \\cos x$.",
      "2. Base $a = 3$, so $\\ln a = \\ln 3$.",
      "3. Formula: $\\frac{d}{dx}[a^u] = u' \\cdot a^u \\cdot \\ln a$.",
      "$$\\frac{dy}{dx} = (\\cos x) \\cdot 3^{\\sin x} \\cdot \\ln 3$$"
    ],
    "stepByStepSolutionAr": [
      "١. الأس $u = \\sin x \\implies u' = \\cos x$.",
      "٢. الأساس $a = 3$، إذن نضرب في $\\ln 3$.",
      "٣. المشتقة: $\\frac{dy}{dx} = (\\cos x) \\cdot 3^{\\sin x} \\cdot \\ln 3$."
    ],
    "teacherTipEn": "Never forget the factor ln(a) when the base is different from e!",
    "teacherTipAr": "لا تنس أبداً الضرب في لو_هـ(الأساس) عندما لا يكون الأساس هو هـ!"
  },
  {
    "id": "calc_ch2_se_06",
    "titleEn": "MoE Example 6: Derivative of Logarithm of a Rational Function",
    "titleAr": "مثال الوزارة ٦: اشتقاق لوغاريتم دالة كسرية",
    "difficulty": "medium",
    "questionEn": "Find $\\frac{dy}{dx}$ if $y = \\ln\\left(\\frac{x + 1}{x - 1}\\right)$ for $x > 1$.",
    "questionAr": "أوجد $\\frac{dy}{dx}$ إذا كان $y = \\ln\\left(\\frac{x + 1}{x - 1}\\right)$ حيث $x > 1$.",
    "optionsEn": [
      "$-\\frac{2}{x^2 - 1}$",
      "$\\frac{2}{x^2 - 1}$",
      "$\\frac{1}{x^2 - 1}$",
      "$-\\frac{1}{x^2 - 1}$"
    ],
    "optionsAr": [
      "$-\\frac{2}{x^2 - 1}$",
      "$\\frac{2}{x^2 - 1}$",
      "$\\frac{1}{x^2 - 1}$",
      "$-\\frac{1}{x^2 - 1}$"
    ],
    "correctAnswer": "$-\\frac{2}{x^2 - 1}$",
    "correctIndex": 0,
    "hintEn": "Use logarithmic laws to expand before differentiating: $\\ln(A/B) = \\ln A - \\ln B$.",
    "hintAr": "استخدم خواص اللوغاريتمات للتبسيط أولاً: $\\ln(A/B) = \\ln A - \\ln B$.",
    "stepByStepSolutionEn": [
      "1. Expand using $\\ln(A/B) = \\ln A - \\ln B$:",
      "$$y = \\ln(x + 1) - \\ln(x - 1)$$",
      "2. Differentiate each term simply:",
      "$$\\frac{dy}{dx} = \\frac{1}{x + 1} - \\frac{1}{x - 1}$$",
      "3. Combine over common denominator $(x + 1)(x - 1) = x^2 - 1$:",
      "$$\\frac{dy}{dx} = \\frac{(x - 1) - (x + 1)}{x^2 - 1} = \\frac{-2}{x^2 - 1} = -\\frac{2}{x^2 - 1}$$"
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق خواص اللوغاريتمات: $\\ln(A/B) = \\ln A - \\ln B$:",
      "$$y = \\ln(x + 1) - \\ln(x - 1)$$",
      "٢. اشتقاق كل حد على حدة:",
      "$$\\frac{dy}{dx} = \\frac{1}{x + 1} - \\frac{1}{x - 1}$$",
      "٣. توحيد المقامات:",
      "$$\\frac{dy}{dx} = \\frac{(x - 1) - (x + 1)}{x^2 - 1} = -\\frac{2}{x^2 - 1}$$"
    ],
    "teacherTipEn": "Simplifying with log properties before differentiating turns a messy quotient into trivial terms.",
    "teacherTipAr": "تبسيط اللوغاريتمات بخواصها قبل الاشتقاق يحول كسر المعقد إلى حدود بسيطة للغاية."
  },
  {
    "id": "calc_ch2_se_07",
    "titleEn": "MoE Example 7: Logarithmic Differentiation of Variable Exponent",
    "titleAr": "مثال الوزارة ٧: الاشتقاق اللوغاريتمي لدالة مرفوعة لأس متغير",
    "difficulty": "hots",
    "questionEn": "Find $\\frac{dy}{dx}$ if $y = x^{\\cos x}$ for $x > 0$.",
    "questionAr": "أوجد $\\frac{dy}{dx}$ إذا كان $y = x^{\\cos x}$ حيث $x > 0$.",
    "optionsEn": [
      "$x^{\\cos x} \\left[ \\frac{\\cos x}{x} - \\sin x \\ln x \\right]$",
      "$x^{\\cos x} \\left[ \\frac{\\cos x}{x} + \\sin x \\ln x \\right]$",
      "$(\\cos x) x^{\\cos x - 1}$",
      "$x^{\\cos x} \\cos x \\ln x$"
    ],
    "optionsAr": [
      "$x^{\\cos x} \\left[ \\frac{\\cos x}{x} - \\sin x \\ln x \\right]$",
      "$x^{\\cos x} \\left[ \\frac{\\cos x}{x} + \\sin x \\ln x \\right]$",
      "$(\\cos x) x^{\\cos x - 1}$",
      "$x^{\\cos x} \\cos x \\ln x$"
    ],
    "correctAnswer": "$x^{\\cos x} \\left[ \\frac{\\cos x}{x} - \\sin x \\ln x \\right]$",
    "correctIndex": 0,
    "hintEn": "Take ln of both sides: $\\ln y = \\cos x \\ln x$, then differentiate implicitly.",
    "hintAr": "خذ اللوغاريتم الطبيعي للطرفين: $\\ln y = \\cos x \\ln x$ ثم اشتق ضمنياً.",
    "stepByStepSolutionEn": [
      "1. Take natural logarithm of both sides:",
      "$$\\ln y = \\ln(x^{\\cos x}) = \\cos x \\cdot \\ln x$$",
      "2. Differentiate implicitly using the product rule on the right:",
      "$$\\frac{1}{y} \\frac{dy}{dx} = (-\\sin x) \\ln x + \\cos x \\left(\\frac{1}{x}\\right)$$",
      "$$\\frac{1}{y} \\frac{dy}{dx} = \\frac{\\cos x}{x} - \\sin x \\ln x$$",
      "3. Multiply by $y = x^{\\cos x}$:",
      "$$\\frac{dy}{dx} = x^{\\cos x} \\left[ \\frac{\\cos x}{x} - \\sin x \\ln x \\right]$$"
    ],
    "stepByStepSolutionAr": [
      "١. أخذ اللوغاريتم الطبيعي للطرفين: $\\ln y = \\cos x \\cdot \\ln x$.",
      "٢. الاشتقاق الضمني بالنسبة إلى $x$ باستخدام قاعدة الضرب:",
      "$$\\frac{1}{y} \\frac{dy}{dx} = (-\\sin x) \\ln x + \\frac{\\cos x}{x}$$",
      "٣. الضرب في $y$:",
      "$$\\frac{dy}{dx} = x^{\\cos x} \\left[ \\frac{\\cos x}{x} - \\sin x \\ln x \\right]$$"
    ],
    "teacherTipEn": "Whenever variable is in both base and exponent, logarithmic differentiation is mandatory.",
    "teacherTipAr": "كلما وجد المتغير في الأساس والأس معاً، يكون الاشتقاق اللوغاريتمي إلزامياً."
  },
  {
    "id": "calc_ch2_se_08",
    "titleEn": "MoE Example 8: Integration of Exponential Function with Chain Derivative",
    "titleAr": "مثال الوزارة ٨: تكامل الدالة الأسية المضروبة في مشتقة الأس",
    "difficulty": "medium",
    "questionEn": "Find the indefinite integral: $$\\int (3x^2 + 2) e^{x^3 + 2x} \\, dx$$",
    "questionAr": "أوجد التكامل غير المحدد: $$\\int (3x^2 + 2) e^{x^3 + 2x} \\, dx$$",
    "optionsEn": [
      "$e^{x^3 + 2x} + C$",
      "$\\frac{1}{3} e^{x^3 + 2x} + C$",
      "$(3x^2 + 2) e^{x^3 + 2x} + C$",
      "$(6x) e^{x^3 + 2x} + C$"
    ],
    "optionsAr": [
      "$e^{x^3 + 2x} + C$",
      "$\\frac{1}{3} e^{x^3 + 2x} + C$",
      "$(3x^2 + 2) e^{x^3 + 2x} + C$",
      "$(6x) e^{x^3 + 2x} + C$"
    ],
    "correctAnswer": "$e^{x^3 + 2x} + C$",
    "correctIndex": 0,
    "hintEn": "The integral of $f'(x) e^{f(x)} dx$ is $e^{f(x)} + C$.",
    "hintAr": "تكامل $f'(x) e^{f(x)} dx$ هو $e^{f(x)} + C$.",
    "stepByStepSolutionEn": [
      "1. Notice the exponent $u = x^3 + 2x$.",
      "2. Its derivative is $u' = 3x^2 + 2$, which appears exactly as the coefficient.",
      "3. Using $\\int u' e^u \\, dx = e^u + C$:",
      "$$\\int (3x^2 + 2) e^{x^3 + 2x} \\, dx = e^{x^3 + 2x} + C$$"
    ],
    "stepByStepSolutionAr": [
      "١. نلاحظ أن الأس $u = x^3 + 2x$.",
      "٢. مشتقته $u' = 3x^2 + 2$ موجودة تماماً كمعامل مضروب.",
      "٣. بتطبيق قاعدة $\\int u' e^u dx = e^u + C$:",
      "$$\\text{التكامل} = e^{x^3 + 2x} + C$$"
    ],
    "teacherTipEn": "Check if the coefficient is the derivative of the exponent before attempting substitution or parts.",
    "teacherTipAr": "تحقق دائماً مما إذا كان المعامل هو مشتقة الأس مباشرة."
  },
  {
    "id": "calc_ch2_se_09",
    "titleEn": "MoE Example 9: Integration Resulting in Natural Logarithm",
    "titleAr": "مثال الوزارة ٩: تكامل كسر بسطه مشتقة مقامه",
    "difficulty": "medium",
    "questionEn": "Evaluate the integral: $$\\int \\frac{2x + 3}{x^2 + 3x + 7} \\, dx$$",
    "questionAr": "احسب التكامل: $$\\int \\frac{2x + 3}{x^2 + 3x + 7} \\, dx$$",
    "optionsEn": [
      "$\\ln|x^2 + 3x + 7| + C$",
      "$\\frac{1}{x^2 + 3x + 7} + C$",
      "$(2x + 3) \\ln|x^2 + 3x + 7| + C$",
      "$\\frac{1}{2} \\ln|x^2 + 3x + 7| + C$"
    ],
    "optionsAr": [
      "$\\ln|x^2 + 3x + 7| + C$",
      "$\\frac{1}{x^2 + 3x + 7} + C$",
      "$(2x + 3) \\ln|x^2 + 3x + 7| + C$",
      "$\\frac{1}{2} \\ln|x^2 + 3x + 7| + C$"
    ],
    "correctAnswer": "$\\ln|x^2 + 3x + 7| + C$",
    "correctIndex": 0,
    "hintEn": "When numerator is derivative of denominator: $\\int \\frac{f'(x)}{f(x)} dx = \\ln|f(x)| + C$.",
    "hintAr": "عندما يكون البسط مشتقة المقام: $\\int \\frac{f'(x)}{f(x)} dx = \\ln|f(x)| + C$.",
    "stepByStepSolutionEn": [
      "1. Let denominator $f(x) = x^2 + 3x + 7$.",
      "2. Differentiate denominator: $f'(x) = 2x + 3$.",
      "3. The numerator is exactly $f'(x)$.",
      "4. Applying the quotient integral rule:",
      "$$\\int \\frac{f'(x)}{f(x)} \\, dx = \\ln|f(x)| + C = \\ln|x^2 + 3x + 7| + C$$"
    ],
    "stepByStepSolutionAr": [
      "١. المقام $f(x) = x^2 + 3x + 7$.",
      "٢. مشتقة المقام: $f'(x) = 2x + 3$.",
      "٣. البسط هو مشتقة المقام تماماً.",
      "٤. إذن قيمة التكامل هي اللوغاريتم الطبيعي للمقام:",
      "$$\\ln|x^2 + 3x + 7| + C$$"
    ],
    "teacherTipEn": "Numerator = derivative of denominator => answer is always ln|denominator| + C.",
    "teacherTipAr": "إذا كان البسط مشتقة المقام فالناتج هو لوغاريتم القيمة المطلقة للمقام."
  },
  {
    "id": "calc_ch2_se_10",
    "titleEn": "MoE Example 10: Trigonometric Integral via Natural Logarithm",
    "titleAr": "مثال الوزارة ١٠: تكامل الدالة المثلثية باللوغاريتم الطبيعي",
    "difficulty": "medium",
    "questionEn": "Find the integral: $$\\int \\sec(2x) \\, dx$$",
    "questionAr": "أوجد التكامل: $$\\int \\sec(2x) \\, dx$$",
    "optionsEn": [
      "$\\frac{1}{2} \\ln|\\sec(2x) + \\tan(2x)| + C$",
      "$\\ln|\\sec(2x) + \\tan(2x)| + C$",
      "$2 \\ln|\\sec(2x) + \\tan(2x)| + C$",
      "$\\frac{1}{2} \\sec(2x) \\tan(2x) + C$"
    ],
    "optionsAr": [
      "$\\frac{1}{2} \\ln|\\sec(2x) + \\tan(2x)| + C$",
      "$\\ln|\\sec(2x) + \\tan(2x)| + C$",
      "$2 \\ln|\\sec(2x) + \\tan(2x)| + C$",
      "$\\frac{1}{2} \\sec(2x) \\tan(2x) + C$"
    ],
    "correctAnswer": "$\\frac{1}{2} \\ln|\\sec(2x) + \\tan(2x)| + C$",
    "correctIndex": 0,
    "hintEn": "The integral of $\\sec(u) du$ is $\\ln|\\sec u + \\tan u| + C$. Divide by the linear coefficient 2.",
    "hintAr": "تكامل $\\sec(u) du$ هو $\\ln|\\sec u + \\tan u| + C$. اقسم على معامل س وهو ٢.",
    "stepByStepSolutionEn": [
      "1. Standard integral formula: $\\int \\sec(u) \\, du = \\ln|\\sec u + \\tan u| + C$.",
      "2. For linear argument $u = 2x$, multiply by $\\frac{1}{2}$:",
      "$$\\int \\sec(2x) \\, dx = \\frac{1}{2} \\ln|\\sec(2x) + \\tan(2x)| + C$$"
    ],
    "stepByStepSolutionAr": [
      "١. تكامل دالة القاطع القياسي: $\\int \\sec(u) du = \\ln|\\sec u + \\tan u| + C$.",
      "٢. بالقسمة على معامل $x$ وهو $2$:",
      "$$\\int \\sec(2x) dx = \\frac{1}{2} \\ln|\\sec(2x) + \\tan(2x)| + C$$"
    ],
    "teacherTipEn": "Always divide by the derivative of the linear interior argument (1/2).",
    "teacherTipAr": "اقسم دائماً على معامل س الداخلي الخطي (١/٢)."
  }
];

export const calcCh2Exercises: SolvedProblem[] = [
  {
    "id": "calc_ch2_ex_01",
    "titleEn": "MoE Unit Exercise 1: Natural Constant Limit with Linear Rational Base",
    "titleAr": "تمرين الوحدة ١: نهاية العدد النيبيري مع أساس نسبي خطي",
    "difficulty": "exam_standard",
    "questionEn": "Evaluate: $$\\lim_{x \\to \\infty} \\left(\\frac{x + 7}{x + 3}\\right)^{2x + 1}$$",
    "questionAr": "احسب قيمة: $$\\lim_{x \\to \\infty} \\left(\\frac{x + 7}{x + 3}\\right)^{2x + 1}$$",
    "optionsEn": [
      "$e^8$",
      "$e^4$",
      "$e^{14}$",
      "$e^{10}$"
    ],
    "optionsAr": [
      "هـ^8",
      "هـ^4",
      "هـ^{14}",
      "هـ^{10}"
    ],
    "correctAnswer": "$e^8$",
    "correctIndex": 0,
    "hintEn": "Express fraction as $1 + \\frac{4}{x+3}$ and use limit laws.",
    "hintAr": "حول الكسر إلى $1 + \\frac{4}{x+3}$ واستخدم قوانين النهايات.",
    "stepByStepSolutionEn": [
      "1. Rewrite the fraction: $\\frac{x + 7}{x + 3} = 1 + \\frac{4}{x + 3}$.",
      "2. Rewrite exponent: $2x + 1 = 2(x + 3) - 5$.",
      "3. Limit: $\\lim_{x \\to \\infty} (1 + \\frac{4}{x+3})^{2(x+3)} \\cdot (1 + \\frac{4}{x+3})^{-5} = (e^4)^2 \\cdot 1 = e^8$."
    ],
    "stepByStepSolutionAr": [
      "١. الكسر: $\\frac{x + 7}{x + 3} = 1 + \\frac{4}{x + 3}$.",
      "٢. الأس: $2(x + 3) - 5$.",
      "٣. الناتج: $(e^4)^2 = e^8$."
    ],
    "teacherTipEn": "Shortcut: e^((7 - 3) * 2) = e^(4 * 2) = e^8.",
    "teacherTipAr": "قاعدة سريعة: هـ^((٧ - ٣) × ٢) = هـ^٨."
  },
  {
    "id": "calc_ch2_ex_02",
    "titleEn": "MoE Unit Exercise 2: Difference of Exponentials Limit",
    "titleAr": "تمرين الوحدة ٢: نهاية الفرق بين دالتين أسيتين",
    "difficulty": "medium",
    "questionEn": "Evaluate the limit: $$\\lim_{x \\to 0} \\frac{e^{3x} - e^{-3x}}{x}$$",
    "questionAr": "احسب قيمة النهاية: $$\\lim_{x \\to 0} \\frac{e^{3x} - e^{-3x}}{x}$$",
    "optionsEn": [
      "$6$",
      "$3$",
      "$0$",
      "$e^3$"
    ],
    "optionsAr": [
      "6",
      "3",
      "0",
      "هـ^3"
    ],
    "correctAnswer": "$6$",
    "correctIndex": 0,
    "hintEn": "Subtract and add 1 in numerator: $\\frac{(e^{3x} - 1) - (e^{-3x} - 1)}{x}$.",
    "hintAr": "اطرح واجمع ١ في البسط: $\\frac{(e^{3x} - 1) - (e^{-3x} - 1)}{x}$.",
    "stepByStepSolutionEn": [
      "1. Split the limit: $\\lim_{x \\to 0} \\frac{e^{3x} - 1}{x} - \\lim_{x \\to 0} \\frac{e^{-3x} - 1}{x}$.",
      "2. The first limit is $3(1) = 3$.",
      "3. The second limit is $(-3)(1) = -3$.",
      "4. Total: $3 - (-3) = 6$."
    ],
    "stepByStepSolutionAr": [
      "١. فصل النهاية: $\\lim_{x \\to 0} \\frac{e^{3x} - 1}{x} - \\lim_{x \\to 0} \\frac{e^{-3x} - 1}{x}$.",
      "٢. النهاية الأولى تساوي ٣، والنهاية الثانية تساوي -٣.",
      "٣. الناتج: $3 - (-3) = 6$."
    ],
    "teacherTipEn": "By L'Hopital or standard limit: derivative of e^(3x) - e^(-3x) at 0 is 3 - (-3) = 6.",
    "teacherTipAr": "مشتقة البسط عند الصفر هي ٣ - (-٣) = ٦."
  },
  {
    "id": "calc_ch2_ex_03",
    "titleEn": "MoE Unit Exercise 3: General Exponential Scaled Limit",
    "titleAr": "تمرين الوحدة ٣: نهاية الدالة الأسية العامة بمضاعف للأس",
    "difficulty": "easy",
    "questionEn": "If $a > 0$, evaluate: $$\\lim_{x \\to 0} \\frac{a^{2x} - 1}{x}$$",
    "questionAr": "إذا كان $a > 0$، فاحسب: $$\\lim_{x \\to 0} \\frac{a^{2x} - 1}{x}$$",
    "optionsEn": [
      "$2 \\ln a$",
      "$\\ln a$",
      "$a^2$",
      "$\\frac{1}{2} \\ln a$"
    ],
    "optionsAr": [
      "2 لو_هـ a",
      "لو_هـ a",
      "a^2",
      "\\frac{1}{2} \\text{لو}_هـ a"
    ],
    "correctAnswer": "$2 \\ln a$",
    "correctIndex": 0,
    "hintEn": "Multiply and divide by 2: $2 \\lim_{x \\to 0} \\frac{a^{2x}-1}{2x} = 2 \\ln a$.",
    "hintAr": "اضرب في ٢ واقسم على ٢ ليطابق المقام الأس.",
    "stepByStepSolutionEn": [
      "$$2 \\lim_{x \\to 0} \\frac{a^{2x} - 1}{2x} = 2 \\ln a$$"
    ],
    "stepByStepSolutionAr": [
      "$$2 \\lim_{2x \\to 0} \\frac{a^{2x} - 1}{2x} = 2 \\ln a$$"
    ],
    "teacherTipEn": "The linear scale factor 2 directly multiplies the natural log.",
    "teacherTipAr": "معامل الأس ٢ يضرب مباشرة في لو_هـ(أ)."
  },
  {
    "id": "calc_ch2_ex_04",
    "titleEn": "MoE Unit Exercise 4: Tangent Slope of Natural Exponential",
    "titleAr": "تمرين الوحدة ٤: ميل مماس منحنى الدالة الأسية الطبيعية",
    "difficulty": "easy",
    "questionEn": "Find the slope of the tangent to the curve $y = e^{2x}$ at the point where $x = 0$.",
    "questionAr": "أوجد ميل المماس للمنحنى $y = e^{2x}$ عند النقطة التي فيها $x = 0$.",
    "optionsEn": [
      "$2$",
      "$1$",
      "$0$",
      "$e^2$"
    ],
    "optionsAr": [
      "2",
      "1",
      "0",
      "هـ^2"
    ],
    "correctAnswer": "$2$",
    "correctIndex": 0,
    "hintEn": "Differentiate to find $\\frac{dy}{dx} = 2e^{2x}$ and substitute $x = 0$.",
    "hintAr": "اشتق لإيجاد $\\frac{dy}{dx} = 2e^{2x}$ ثم عوض بـ $x = 0$.",
    "stepByStepSolutionEn": [
      "1. $\\frac{dy}{dx} = 2 e^{2x}$.",
      "2. At $x = 0$: $\\frac{dy}{dx} = 2 e^0 = 2(1) = 2$."
    ],
    "stepByStepSolutionAr": [
      "١. المشتقة: $\\frac{dy}{dx} = 2 e^{2x}$.",
      "٢. عند $x = 0$: $2 e^0 = 2$."
    ],
    "teacherTipEn": "At x=0, e^(kx) has derivative k.",
    "teacherTipAr": "عند س=٠، مشتقة هـ^(ك س) تساوي ك مباشرة."
  },
  {
    "id": "calc_ch2_ex_05",
    "titleEn": "MoE Unit Exercise 5: Equation of Tangent to Natural Logarithm",
    "titleAr": "تمرين الوحدة ٥: معادلة المماس لمنحنى اللوغاريتم الطبيعي",
    "difficulty": "medium",
    "questionEn": "Find the equation of the tangent line to the curve $y = \\ln x$ at the point where $x = e$.",
    "questionAr": "أوجد معادلة الخط المماس للمنحنى $y = \\ln x$ عند النقطة التي فيها $x = e$.",
    "optionsEn": [
      "$y = \\frac{1}{e} x$",
      "$y = \\frac{1}{e} x + 1$",
      "$y = x - e + 1$",
      "$y = e x$"
    ],
    "optionsAr": [
      "$y = \\frac{1}{e} x$",
      "$y = \\frac{1}{e} x + 1$",
      "$y = x - e + 1$",
      "$y = e x$"
    ],
    "correctAnswer": "$y = \\frac{1}{e} x$",
    "correctIndex": 0,
    "hintEn": "Point of contact is $(e, \\ln e) = (e, 1)$. Slope $m = y'(e) = 1/e$.",
    "hintAr": "نقطة التماس $(e, 1)$ والميل $m = 1/e$.",
    "stepByStepSolutionEn": [
      "1. Point of tangency: $x_0 = e \\implies y_0 = \\ln e = 1$. Point is $(e, 1)$.",
      "2. Slope: $y' = \\frac{1}{x} \\implies m = \\frac{1}{e}$.",
      "3. Tangent equation: $y - 1 = \\frac{1}{e}(x - e) \\implies y - 1 = \\frac{1}{e} x - 1 \\implies y = \\frac{1}{e} x$."
    ],
    "stepByStepSolutionAr": [
      "١. نقطة التماس: $(e, 1)$.",
      "٢. الميل: $m = \\frac{1}{e}$.",
      "٣. المعادلة: $y - 1 = \\frac{1}{e}(x - e) \\implies y = \\frac{1}{e} x$."
    ],
    "teacherTipEn": "Notice that this tangent passes through the origin (0, 0)!",
    "teacherTipAr": "لاحظ أن هذا المماس يمر بنقطة الأصل (٠، ٠)!"
  },
  {
    "id": "calc_ch2_ex_06",
    "titleEn": "MoE Unit Exercise 6: Second Derivative of Damped Harmonic Function",
    "titleAr": "تمرين الوحدة ٦: المشتقة الثانية لحاصل ضرب دالة أسية ومثلثية",
    "difficulty": "hots",
    "questionEn": "If $y = e^{-x} \\cos x$, find $\\frac{d^2y}{dx^2}$ at $x = 0$.",
    "questionAr": "إذا كان $y = e^{-x} \\cos x$، فأوجد $\\frac{d^2y}{dx^2}$ عند $x = 0$.",
    "optionsEn": [
      "$0$",
      "$-2$",
      "$2$",
      "$1$"
    ],
    "optionsAr": [
      "0",
      "-2",
      "2",
      "1"
    ],
    "correctAnswer": "$0$",
    "correctIndex": 0,
    "hintEn": "Find y' and y'' using the product rule, or notice $y'' = 2e^{-x}\\sin x$.",
    "hintAr": "احسب المشتقة الأولى ثم الثانية بقاعدة الضرب.",
    "stepByStepSolutionEn": [
      "1. $y' = -e^{-x}\\cos x - e^{-x}\\sin x = -e^{-x}(\\cos x + \\sin x)$.",
      "2. $y'' = e^{-x}(\\cos x + \\sin x) - e^{-x}(-\\sin x + \\cos x) = 2e^{-x}\\sin x$.",
      "3. At $x = 0$: $y''(0) = 2e^0 \\sin(0) = 0$."
    ],
    "stepByStepSolutionAr": [
      "١. المشتقة الأولى: $y' = -e^{-x}(\\cos x + \\sin x)$.",
      "٢. المشتقة الثانية: $y'' = 2e^{-x}\\sin x$.",
      "٣. عند $x = 0$: $y''(0) = 2(1)(0) = 0$."
    ],
    "teacherTipEn": "The second derivative simplifies beautifully to 2 e^(-x) sin(x).",
    "teacherTipAr": "المشتقة الثانية تختصر ببساطة إلى ٢ هـ^(-س) جا(س)."
  },
  {
    "id": "calc_ch2_ex_07",
    "titleEn": "MoE Unit Exercise 7: Derivative of ln(sec x + tan x)",
    "titleAr": "تمرين الوحدة ٧: مشتقة لوغاريتم (قا س + ظا س)",
    "difficulty": "medium",
    "questionEn": "Find $\\frac{dy}{dx}$ if $y = \\ln|\\sec x + \\tan x|$.",
    "questionAr": "أوجد $\\frac{dy}{dx}$ إذا كان $y = \\ln|\\sec x + \\tan x|$.",
    "optionsEn": [
      "$\\sec x$",
      "$\\tan x$",
      "$\\sec^2 x$",
      "$\\sec x \\tan x$"
    ],
    "optionsAr": [
      "قا س",
      "ظا س",
      "قا^2 س",
      "قا س ظا س"
    ],
    "correctAnswer": "$\\sec x$",
    "correctIndex": 0,
    "hintEn": "Differentiate $u = \\sec x + \\tan x$ and divide by $u$.",
    "hintAr": "اشتق المقدار وضعه في البسط مقسوماً على المقدار الأصلي.",
    "stepByStepSolutionEn": [
      "1. $u = \\sec x + \\tan x$.",
      "2. $u' = \\sec x \\tan x + \\sec^2 x = \\sec x(\\tan x + \\sec x)$.",
      "3. $\\frac{dy}{dx} = \\frac{u'}{u} = \\frac{\\sec x(\\sec x + \\tan x)}{\\sec x + \\tan x} = \\sec x$."
    ],
    "stepByStepSolutionAr": [
      "١. المقدار $u = \\sec x + \\tan x$.",
      "٢. المشتقة: $u' = \\sec x(\\tan x + \\sec x)$.",
      "٣. بالقسمة: $\\frac{u'}{u} = \\sec x$."
    ],
    "teacherTipEn": "This proves that the antiderivative of sec(x) is ln|sec x + tan x| + C!",
    "teacherTipAr": "هذا يثبت أن التكامل العكسي لـ قا(س) هو لو_هـ|قا س + ظا س| + ث!"
  },
  {
    "id": "calc_ch2_ex_08",
    "titleEn": "MoE Unit Exercise 8: Logarithmic Differentiation at a Point",
    "titleAr": "تمرين الوحدة ٨: الاشتقاق اللوغاريتمي وحساب القيمة عند نقطة",
    "difficulty": "hots",
    "questionEn": "If $y = (x + 1)^x$, find $\\frac{dy}{dx}$ at $x = 1$.",
    "questionAr": "إذا كان $y = (x + 1)^x$، فأوجد قيمة $\\frac{dy}{dx}$ عند $x = 1$.",
    "optionsEn": [
      "$2 (\\ln 2 + \\frac{1}{2})$",
      "$\\ln 2 + \\frac{1}{2}$",
      "$2 \\ln 2$",
      "$4$"
    ],
    "optionsAr": [
      "$2 (\\ln 2 + \\frac{1}{2})$",
      "$\\ln 2 + \\frac{1}{2}$",
      "$2 \\ln 2$",
      "$4$"
    ],
    "correctAnswer": "$2 (\\ln 2 + \\frac{1}{2})$",
    "correctIndex": 0,
    "hintEn": "Take ln: $\\ln y = x \\ln(x + 1)$. Differentiate implicitly and evaluate at $x = 1$.",
    "hintAr": "بأخذ اللوغاريتم: $\\ln y = x \\ln(x + 1)$، ثم اشتق وعوض بـ $x = 1$.",
    "stepByStepSolutionEn": [
      "1. $\\ln y = x \\ln(x + 1)$.",
      "2. $\\frac{1}{y} y' = \\ln(x + 1) + \\frac{x}{x + 1}$.",
      "3. At $x = 1$: $y = (1 + 1)^1 = 2$.",
      "4. $y' = 2 \\left[\\ln(2) + \\frac{1}{2}\\right]$."
    ],
    "stepByStepSolutionAr": [
      "١. $\\ln y = x \\ln(x + 1)$.",
      "٢. $\\frac{1}{y} y' = \\ln(x + 1) + \\frac{x}{x + 1}$.",
      "٣. عند $x = 1$: $y = 2$.",
      "٤. $y' = 2(\\ln 2 + \\frac{1}{2})$."
    ],
    "teacherTipEn": "Don't forget to multiply by y(1) = 2 at the end!",
    "teacherTipAr": "لا تنس الضرب في قيمة ص(١) = ٢ في النهاية!"
  },
  {
    "id": "calc_ch2_ex_09",
    "titleEn": "MoE Unit Exercise 9: Exponential Rational Integral",
    "titleAr": "تمرين الوحدة ٩: تكامل كسر دالة أسية",
    "difficulty": "medium",
    "questionEn": "Evaluate: $$\\int \\frac{e^x}{e^x + 5} \\, dx$$",
    "questionAr": "احسب: $$\\int \\frac{e^x}{e^x + 5} \\, dx$$",
    "optionsEn": [
      "$\\ln(e^x + 5) + C$",
      "$\\frac{1}{e^x + 5} + C$",
      "$e^x \\ln(e^x + 5) + C$",
      "$\\frac{1}{5} \\ln(e^x + 5) + C$"
    ],
    "optionsAr": [
      "$\\ln(e^x + 5) + C$",
      "$\\frac{1}{e^x + 5} + C$",
      "$e^x \\ln(e^x + 5) + C$",
      "$\\frac{1}{5} \\ln(e^x + 5) + C$"
    ],
    "correctAnswer": "$\\ln(e^x + 5) + C$",
    "correctIndex": 0,
    "hintEn": "The numerator $e^x$ is exactly the derivative of the denominator $e^x + 5$.",
    "hintAr": "البسط هـ^س هو تماماً مشتقة المقام هـ^س + ٥.",
    "stepByStepSolutionEn": [
      "1. Let $f(x) = e^x + 5 \\implies f'(x) = e^x$.",
      "2. The integral is $\\int \\frac{f'(x)}{f(x)} dx = \\ln|f(x)| + C = \\ln(e^x + 5) + C$ (absolute value omitted since $e^x+5 > 0$)."
    ],
    "stepByStepSolutionAr": [
      "١. مشتقة المقام $e^x + 5$ هي $e^x$ الموجودة بالبسط.",
      "٢. إذن التكامل هو $\\ln(e^x + 5) + C$."
    ],
    "teacherTipEn": "Because e^x + 5 is always positive, absolute value signs can be written as parentheses.",
    "teacherTipAr": "بما أن هـ^س + ٥ موجبة دائماً، يمكن استبدال القيمة المطلقة بأقواس عادية."
  },
  {
    "id": "calc_ch2_ex_10",
    "titleEn": "MoE Unit Exercise 10: Tangent Integral",
    "titleAr": "تمرين الوحدة ١٠: تكامل دالة الظل",
    "difficulty": "medium",
    "questionEn": "Evaluate: $$\\int \\tan(3x) \\, dx$$",
    "questionAr": "احسب: $$\\int \\tan(3x) \\, dx$$",
    "optionsEn": [
      "$\\frac{1}{3} \\ln|\\sec(3x)| + C$",
      "$3 \\ln|\\sec(3x)| + C$",
      "$\\frac{1}{3} \\sec^2(3x) + C$",
      "$-\\frac{1}{3} \\ln|\\sec(3x)| + C$"
    ],
    "optionsAr": [
      "$\\frac{1}{3} \\ln|\\sec(3x)| + C$",
      "$3 \\ln|\\sec(3x)| + C$",
      "$\\frac{1}{3} \\sec^2(3x) + C$",
      "$-\\frac{1}{3} \\ln|\\sec(3x)| + C$"
    ],
    "correctAnswer": "$\\frac{1}{3} \\ln|\\sec(3x)| + C$",
    "correctIndex": 0,
    "hintEn": "Rewrite $\\tan(3x) = \\frac{\\sin(3x)}{\\cos(3x)}$ and recognize derivative of denominator.",
    "hintAr": "اكتب $\\tan(3x) = \\frac{\\sin(3x)}{\\cos(3x)}$ ولاحظ مشتقة المقام.",
    "stepByStepSolutionEn": [
      "1. $\\tan(3x) = \\frac{\\sin(3x)}{\\cos(3x)}$.",
      "2. $\\frac{d}{dx}[\\cos(3x)] = -3\\sin(3x)$.",
      "3. $\\int \\frac{\\sin(3x)}{\\cos(3x)} dx = -\\frac{1}{3} \\ln|\\cos(3x)| + C = \\frac{1}{3} \\ln|\\sec(3x)| + C$."
    ],
    "stepByStepSolutionAr": [
      "١. ظا(٣س) = جا(٣س) / جتا(٣س).",
      "٢. مشتقة جتا(٣س) هي -٣ جا(٣س).",
      "٣. التكامل = $\\frac{1}{3} \\ln|\\sec(3x)| + C$."
    ],
    "teacherTipEn": "Both -1/3 ln|cos(3x)| and 1/3 ln|sec(3x)| are equivalent and correct.",
    "teacherTipAr": "كلا التعبيرين بالـ جتا وبالـ قا صحيحان ومتكافئان."
  },
  {
    "id": "calc_ch2_ex_11",
    "titleEn": "MoE Unit Exercise 11: Integration of ln(x) / x",
    "titleAr": "تمرين الوحدة ١١: تكامل لوغاريتم س مقسوماً على س",
    "difficulty": "medium",
    "questionEn": "Evaluate: $$\\int \\frac{\\ln x}{x} \\, dx$$",
    "questionAr": "احسب: $$\\int \\frac{\\ln x}{x} \\, dx$$",
    "optionsEn": [
      "$\\frac{1}{2} (\\ln x)^2 + C$",
      "$(\\ln x)^2 + C$",
      "$\\ln(\\ln x) + C$",
      "$\\frac{1}{x^2} + C$"
    ],
    "optionsAr": [
      "$\\frac{1}{2} (\\ln x)^2 + C$",
      "$(\\ln x)^2 + C$",
      "$\\ln(\\ln x) + C$",
      "$\\frac{1}{x^2} + C$"
    ],
    "correctAnswer": "$\\frac{1}{2} (\\ln x)^2 + C$",
    "correctIndex": 0,
    "hintEn": "Let $u = \\ln x \\implies du = \\frac{1}{x} dx$.",
    "hintAr": "ضع $u = \\ln x \\implies du = \\frac{1}{x} dx$.",
    "stepByStepSolutionEn": [
      "1. Write as $\\int (\\ln x)^1 \\cdot \\frac{1}{x} dx$.",
      "2. Using $\\int [f(x)]^n f'(x) dx = \\frac{[f(x)]^{n+1}}{n+1} + C$ with $n = 1$:",
      "$$\\int \\frac{\\ln x}{x} dx = \\frac{(\\ln x)^2}{2} + C$$"
    ],
    "stepByStepSolutionAr": [
      "١. كتابة التكامل كـ $\\int (\\ln x) \\cdot \\frac{1}{x} dx$.",
      "٢. الدالة مرفوعة للأس ١ ومضروبة في مشتقتها:",
      "$$\\text{الناتج} = \\frac{1}{2}(\\ln x)^2 + C$$"
    ],
    "teacherTipEn": "This is the power rule for function u * u', not a logarithmic integral.",
    "teacherTipAr": "تكامل دالة في مشتقتها يتبع قاعدة القوة للدوال."
  },
  {
    "id": "calc_ch2_ex_12",
    "titleEn": "MoE Unit Exercise 12: Integral of 1 / (x ln x)",
    "titleAr": "تمرين الوحدة ١٢: تكامل ١ / (س لو_هـ س)",
    "difficulty": "hots",
    "questionEn": "Evaluate: $$\\int \\frac{1}{x \\ln x} \\, dx$$",
    "questionAr": "احسب: $$\\int \\frac{1}{x \\ln x} \\, dx$$",
    "optionsEn": [
      "$\\ln|\\ln x| + C$",
      "$\\frac{1}{2} (\\ln x)^2 + C$",
      "$(\\ln x)^{-1} + C$",
      "\\frac{1}{\\ln x} + C"
    ],
    "optionsAr": [
      "$\\ln|\\ln x| + C$",
      "$\\frac{1}{2} (\\ln x)^2 + C$",
      "$(\\ln x)^{-1} + C$",
      "\\frac{1}{\\ln x} + C"
    ],
    "correctAnswer": "$\\ln|\\ln x| + C$",
    "correctIndex": 0,
    "hintEn": "Rewrite the integrand as $\\frac{1/x}{\\ln x}$ so numerator is the derivative of denominator.",
    "hintAr": "أعد كتابة الكسر بالصورة $\\frac{1/x}{\\ln x}$ ليصبح البسط مشتقة المقام.",
    "stepByStepSolutionEn": [
      "1. Rewrite: $\\frac{1}{x \\ln x} = \\frac{1/x}{\\ln x}$.",
      "2. Denominator is $u = \\ln x$, numerator is $u' = 1/x$.",
      "3. Applying $\\int \\frac{u'}{u} dx = \\ln|u| + C$:",
      "$$\\int \\frac{1}{x \\ln x} dx = \\ln|\\ln x| + C$$"
    ],
    "stepByStepSolutionAr": [
      "١. صياغة الكسر: $\\frac{1/x}{\\ln x}$.",
      "٢. المقام هو $\\ln x$ ومشتقتها $1/x$ في البسط.",
      "٣. الناتج هو لوغاريتم المقام: $\\ln|\\ln x| + C$."
    ],
    "teacherTipEn": "A classic trick: move factors from the denominator to form 1/x in the numerator.",
    "teacherTipAr": "حيلة مشهورة: نقل س من المقام لتكون ١/س في البسط."
  },
  {
    "id": "calc_ch2_ex_13",
    "titleEn": "MoE Unit Exercise 13: Parameter Finding in Euler Limits",
    "titleAr": "تمرين الوحدة ١٣: إيجاد الثابت المجهول في نهاية العدد النيبيري",
    "difficulty": "exam_standard",
    "questionEn": "If $\\lim_{x \\to \\infty} \\left(1 + \\frac{a}{x}\\right)^x = e^5$, find the value of the constant $a$.",
    "questionAr": "إذا كان $\\lim_{x \\to \\infty} \\left(1 + \\frac{a}{x}\\right)^x = e^5$، فأوجد قيمة الثابت $a$.",
    "optionsEn": [
      "$5$",
      "$e$",
      "$\\frac{1}{5}$",
      "$25$"
    ],
    "optionsAr": [
      "5",
      "هـ",
      "\\frac{1}{5}",
      "25"
    ],
    "correctAnswer": "$5$",
    "correctIndex": 0,
    "hintEn": "$\\lim_{x \\to \\infty} (1 + a/x)^x = e^a$.",
    "hintAr": "$\\lim_{x \\to \\infty} (1 + a/x)^x = e^a$.",
    "stepByStepSolutionEn": [
      "1. By definition of the exponential limit: $\\lim_{x \\to \\infty} \\left(1 + \\frac{a}{x}\\right)^x = e^a$.",
      "2. Equating: $e^a = e^5 \\implies a = 5$."
    ],
    "stepByStepSolutionAr": [
      "١. بمطابقة النظرية: $e^a = e^5$.",
      "٢. إذن $a = 5$."
    ],
    "teacherTipEn": "Direct identification of exponents.",
    "teacherTipAr": "مساواة الأسس مباشرة."
  },
  {
    "id": "calc_ch2_ex_14",
    "titleEn": "MoE Unit Exercise 14: Third Derivative of Exponential Function",
    "titleAr": "تمرين الوحدة ١٤: المشتقة الثالثة للدالة الأسية",
    "difficulty": "medium",
    "questionEn": "If $y = e^{3x}$, which differential relation is satisfied?",
    "questionAr": "إذا كان $y = e^{3x}$، فأي العلاقات التفاضلية التالية صحيحة؟",
    "optionsEn": [
      "$y''' - 27y = 0$",
      "$y''' - 9y = 0$",
      "$y''' + 27y = 0$",
      "$y''' - 3y = 0$"
    ],
    "optionsAr": [
      "$y''' - 27y = 0$",
      "$y''' - 9y = 0$",
      "$y''' + 27y = 0$",
      "$y''' - 3y = 0$"
    ],
    "correctAnswer": "$y''' - 27y = 0$",
    "correctIndex": 0,
    "hintEn": "The nth derivative of $e^{ax}$ is $a^n e^{ax} = a^n y$.",
    "hintAr": "المشتقة النونية لـ هـ^(أ س) هي أ^ن هـ^(أ س) = أ^ن ص.",
    "stepByStepSolutionEn": [
      "1. $y' = 3e^{3x}$, $y'' = 9e^{3x}$, $y''' = 27e^{3x}$.",
      "2. Since $y = e^{3x}$, $y''' = 27y \\implies y''' - 27y = 0$."
    ],
    "stepByStepSolutionAr": [
      "١. المشتقات: $y' = 3e^{3x}$، $y'' = 9e^{3x}$، $y''' = 27e^{3x}$.",
      "٢. بما أن $y = e^{3x}$، إذن $y''' = 27y \\implies y''' - 27y = 0$."
    ],
    "teacherTipEn": "For y = e^(kx), each derivative simply multiplies by k.",
    "teacherTipAr": "كل اشتقاق يضرب في المعامل ك."
  },
  {
    "id": "calc_ch2_ex_15",
    "titleEn": "MoE Unit Exercise 15: Definite Value from Tangent of Exponential Curve",
    "titleAr": "تمرين الوحدة ١٥: قيمة مشتقة حاصل ضرب دالة خطية وأسية",
    "difficulty": "medium",
    "questionEn": "Find $\\frac{dy}{dx}$ for $y = (x - 1) e^x$ at $x = 1$.",
    "questionAr": "أوجد $\\frac{dy}{dx}$ للدالة $y = (x - 1) e^x$ عند $x = 1$.",
    "optionsEn": [
      "$e$",
      "$0$",
      "$1$",
      "$2e$"
    ],
    "optionsAr": [
      "هـ",
      "0",
      "1",
      "2هـ"
    ],
    "correctAnswer": "$e$",
    "correctIndex": 0,
    "hintEn": "Use product rule: $y' = (1)e^x + (x - 1)e^x = x e^x$.",
    "hintAr": "بقاعدة الضرب: $y' = e^x + (x - 1)e^x = x e^x$.",
    "stepByStepSolutionEn": [
      "1. Differentiate by product rule: $y' = (1) \\cdot e^x + (x - 1) \\cdot e^x = (1 + x - 1)e^x = x e^x$.",
      "2. At $x = 1$: $y'(1) = (1) e^1 = e$."
    ],
    "stepByStepSolutionAr": [
      "١. بقاعدة حاصل الضرب: $y' = e^x + (x - 1)e^x = x e^x$.",
      "٢. عند $x = 1$: $y'(1) = 1 \\cdot e = e$."
    ],
    "teacherTipEn": "Notice how (x - 1)e^x factors nicely into x e^x.",
    "teacherTipAr": "لاحظ اختصار المشتقة بشكل جميل إلى س هـ^س."
  }
];
