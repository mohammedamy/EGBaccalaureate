import type { SolvedProblem } from '../../../types/curriculum';

export const calcCh1SolvedExamples: SolvedProblem[] = [
  {
    "id": "calc_ch1_se_01",
    "titleEn": "MoE Example 1: Derivative of Secant and Cosecant Functions",
    "titleAr": "مثال الوزارة ١: اشتقاق دالتي القاطع وقاطع التمام",
    "difficulty": "easy",
    "questionEn": "Find $\\frac{dy}{dx}$ if $y = \\sec(3x) + \\csc(2x)$.",
    "questionAr": "أوجد $\\frac{dy}{dx}$ إذا كان $y = \\sec(٣x) + \\csc(٢x)$.",
    "optionsEn": [
      "$3\\sec(3x)\\tan(3x) - 2\\csc(2x)\\cot(2x)$",
      "$\\sec(3x)\\tan(3x) + \\csc(2x)\\cot(2x)$",
      "$3\\sec^2(3x) - 2\\csc^2(2x)$",
      "$-3\\sec(3x)\\tan(3x) + 2\\csc(2x)\\cot(2x)$"
    ],
    "optionsAr": [
      "$٣\\sec(٣x)\\tan(٣x) - ٢\\csc(٢x)\\cot(٢x)$",
      "$\\sec(٣x)\\tan(٣x) + \\csc(٢x)\\cot(٢x)$",
      "$٣\\sec^٢(٣x) - ٢\\csc^٢(٢x)$",
      "$-٣\\sec(٣x)\\tan(٣x) + ٢\\csc(٢x)\\cot(٢x)$"
    ],
    "correctAnswer": "$3\\sec(3x)\\tan(3x) - 2\\csc(2x)\\cot(2x)$",
    "correctIndex": 0,
    "hintEn": "Recall: $\\frac{d}{dx}[\\sec(u)] = u' \\sec(u)\\tan(u)$ and $\\frac{d}{dx}[\\csc(u)] = -u' \\csc(u)\\cot(u)$.",
    "hintAr": "تذكر أن: مشتقة $\\sec(u)$ هي $u' \\sec(u)\\tan(u)$، ومشتقة $\\csc(u)$ هي $-u' \\csc(u)\\cot(u)$.",
    "stepByStepSolutionEn": [
      "1. Differentiate the first term $y_1 = \\sec(3x)$:",
      "$$\\frac{d}{dx}[\\sec(3x)] = 3\\sec(3x)\\tan(3x)$$",
      "2. Differentiate the second term $y_2 = \\csc(2x)$:",
      "$$\\frac{d}{dx}[\\csc(2x)] = -2\\csc(2x)\\cot(2x)$$",
      "3. Sum of derivatives:",
      "$$\\frac{dy}{dx} = 3\\sec(3x)\\tan(3x) - 2\\csc(2x)\\cot(2x)$$"
    ],
    "stepByStepSolutionAr": [
      "١. اشتقاق الحد الأول $\\sec(٣x)$ يعطي $٣\\sec(٣x)\\tan(٣x)$.",
      "٢. اشتقاق الحد الثاني $\\csc(٢x)$ يعطي $-٢\\csc(٢x)\\cot(٢x)$.",
      "٣. المشتقة الكلية: $\\frac{dy}{dx} = ٣\\sec(٣x)\\tan(٣x) - ٢\\csc(٢x)\\cot(٢x)$."
    ],
    "teacherTipEn": "Always remember to multiply by the derivative of the interior angle ($u'$).",
    "teacherTipAr": "لا تنس دائماً الضرب في مشتقة الزاوية الداخلية."
  },
  {
    "id": "calc_ch1_se_02",
    "titleEn": "MoE Example 2: Derivative of Cotangent Squared Function",
    "titleAr": "مثال الوزارة ٢: اشتقاق مربع دالة ظل التمام",
    "difficulty": "easy",
    "questionEn": "Find the derivative of $y = \\cot^2(5x)$ with respect to $x$.",
    "questionAr": "أوجد مشتقة $y = \\cot^٢(٥x)$ بالنسبة إلى $x$.",
    "optionsEn": [
      "$-10\\cot(5x)\\csc^2(5x)$",
      "$-2\\cot(5x)\\csc^2(5x)$",
      "$10\\cot(5x)\\csc^2(5x)$",
      "$-10\\csc^4(5x)$"
    ],
    "optionsAr": [
      "$-١٠\\cot(٥x)\\csc^٢(٥x)$",
      "$-٢\\cot(٥x)\\csc^٢(٥x)$",
      "$١٠\\cot(٥x)\\csc^٢(٥x)$",
      "$-١٠\\csc^٤(٥x)$"
    ],
    "correctAnswer": "$-10\\cot(5x)\\csc^2(5x)$",
    "correctIndex": 0,
    "hintEn": "Apply the power rule first: $\\frac{d}{dx}[g(x)]^2 = 2g(x) g'(x)$, where $g(x) = \\cot(5x)$.",
    "hintAr": "طبق قاعدة القوة أولاً: مشتقة $[g(x)]^٢$ هي $٢g(x)g'(x)$ حيث $g(x) = \\cot(٥x)$.",
    "stepByStepSolutionEn": [
      "Rewrite $y = [\\cot(5x)]^2$.",
      "By the chain rule for powers:",
      "$$\\frac{dy}{dx} = 2[\\cot(5x)]^{2-1} \\cdot \\frac{d}{dx}[\\cot(5x)]$$",
      "Since $\\frac{d}{dx}[\\cot(5x)] = -5\\csc^2(5x)$:",
      "$$\\frac{dy}{dx} = 2\\cot(5x) \\cdot (-5\\csc^2(5x)) = -10\\cot(5x)\\csc^2(5x)$$"
    ],
    "stepByStepSolutionAr": [
      "نعيد كتابة الدالة: $y = [\\cot(٥x)]^٢$.",
      "بقاعدة السلسلة للقوى: $\\frac{dy}{dx} = ٢\\cot(٥x) \\cdot (-٥\\csc^٢(٥x))$.",
      "$$\\frac{dy}{dx} = -١٠\\cot(٥x)\\csc^٢(٥x)$$"
    ],
    "teacherTipEn": "Notice the negative sign from the derivative of cotangent.",
    "teacherTipAr": "انتبه للإشارة السالبة الناتجة من اشتقاق ظتا."
  },
  {
    "id": "calc_ch1_se_03",
    "titleEn": "MoE Example 3: Implicit Differentiation of a Circle Equation",
    "titleAr": "مثال الوزارة ٣: الاشتقاق الضمني لمعادلة دائرة",
    "difficulty": "medium",
    "questionEn": "If $x^2 + y^2 = 25$, find the value of $\\frac{d^2 y}{dx^2}$ in terms of $y$.",
    "questionAr": "إذا كان $x^٢ + y^٢ = ٢٥$، فأوجد قيمة $\\frac{d^٢ y}{dx^٢}$ بدلالة $y$.",
    "optionsEn": [
      "$-\\frac{25}{y^3}$",
      "$\\frac{25}{y^3}$",
      "$-\\frac{25}{y^2}$",
      "$-\\frac{x}{y^2}$"
    ],
    "optionsAr": [
      "$-\\frac{٢٥}{y^٣}$",
      "$\\frac{٢٥}{y^٣}$",
      "$-\\frac{٢٥}{y^٢}$",
      "$-\\frac{x}{y^٢}$"
    ],
    "correctAnswer": "$-\\frac{25}{y^3}$",
    "correctIndex": 0,
    "hintEn": "Differentiate implicitly to get $\\frac{dy}{dx} = -\\frac{x}{y}$, then differentiate again using the quotient rule.",
    "hintAr": "اشتق ضمنياً لتحصل على $\\frac{dy}{dx} = -\\frac{x}{y}$، ثم اشتق مرة ثانية باستخدام قاعدة القسمة.",
    "stepByStepSolutionEn": [
      "1. Differentiate both sides with respect to $x$:",
      "$$2x + 2y \\frac{dy}{dx} = 0 \\implies \\frac{dy}{dx} = -\\frac{x}{y}$$",
      "2. Differentiate $\\frac{dy}{dx}$ using the quotient rule:",
      "$$\\frac{d^2 y}{dx^2} = -\\frac{(1)(y) - x(\\frac{dy}{dx})}{y^2}$$",
      "3. Substitute $\\frac{dy}{dx} = -\\frac{x}{y}$:",
      "$$\\frac{d^2 y}{dx^2} = -\\frac{y - x(-\\frac{x}{y})}{y^2} = -\\frac{y + \\frac{x^2}{y}}{y^2} = -\\frac{y^2 + x^2}{y^3}$$",
      "4. Since $x^2 + y^2 = 25$:",
      "$$\\frac{d^2 y}{dx^2} = -\\frac{25}{y^3}$$"
    ],
    "stepByStepSolutionAr": [
      "١. بالاشتقاق الضمني بالنسبة إلى $x$:",
      "$$٢x + ٢y y' = ٠ \\implies y' = -\\frac{x}{y}$$",
      "٢. باشتقاق $y'$ بقاعدة القسمة:",
      "$$y'' = -\\frac{y - x y'}{y^٢}$$",
      "٣. بالتعويض عن $y' = -\\frac{x}{y}$:",
      "$$y'' = -\\frac{y + \\frac{x^٢}{y}}{y^٢} = -\\frac{x^٢ + y^٢}{y^٣}$$",
      "٤. بما أن $x^٢ + y^٢ = ٢٥$، إذن: $y'' = -\\frac{٢٥}{y^٣}$."
    ],
    "teacherTipEn": "Always look to substitute the original equation $x^2 + y^2 = r^2$ to simplify higher order derivatives of conic sections.",
    "teacherTipAr": "استفد دائماً من التعويض بالمعادلة الأصلية لتبسيط المشتقات العليا لقطوع المخروط والدائرة."
  },
  {
    "id": "calc_ch1_se_04",
    "titleEn": "MoE Example 4: Parametric Differentiation",
    "titleAr": "مثال الوزارة ٤: الاشتقاق البارامتري",
    "difficulty": "medium",
    "questionEn": "If $x = 2t^3 - 3t$ and $y = 3t^2 + 4$, find $\\frac{dy}{dx}$ at $t = 1$.",
    "questionAr": "إذا كان $x = ٢t^٣ - ٣t$ و $y = ٣t^٢ + ٤$، فأوجد قيمة $\\frac{dy}{dx}$ عند $t = ١$.",
    "optionsEn": [
      "2",
      "1",
      "3",
      "6"
    ],
    "optionsAr": [
      "٢",
      "١",
      "٣",
      "٦"
    ],
    "correctAnswer": "2",
    "correctIndex": 0,
    "hintEn": "Use the chain rule for parametric equations: $\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}$.",
    "hintAr": "استخدم قاعدة السلسلة للاشتقاق البارامتري: $\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}$.",
    "stepByStepSolutionEn": [
      "1. Find $\\frac{dx}{dt} = 6t^2 - 3$.",
      "2. Find $\\frac{dy}{dt} = 6t$.",
      "3. Compute $\\frac{dy}{dx}$:",
      "$$\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt} = \\frac{6t}{6t^2 - 3}$$",
      "4. Evaluate at $t = 1$:",
      "$$\\frac{dy}{dx}\\Big|_{t = 1} = \\frac{6(1)}{6(1)^2 - 3} = \\frac{6}{3} = 2$$"
    ],
    "stepByStepSolutionAr": [
      "١. $\\frac{dx}{dt} = ٦t^٢ - ٣$.",
      "٢. $\\frac{dy}{dt} = ٦t$.",
      "٣. $\\frac{dy}{dx} = \\frac{٦t}{٦t^٢ - ٣}$.",
      "٤. عند $t = ١$: $\\frac{dy}{dx} = \\frac{٦}{٦ - ٣} = \\frac{٦}{٣} = ٢$."
    ],
    "teacherTipEn": "Parametric slope $\\frac{dy}{dx}$ is the ratio of rates with respect to parameter $t$.",
    "teacherTipAr": "ميل المماس البارامتري هو النسبة بين مشتقتي ص وس بالنسبة للمتغير البارامتري $t$."
  },
  {
    "id": "calc_ch1_se_05",
    "titleEn": "MoE Example 5: Equations of Tangent and Normal to a Curve",
    "titleAr": "مثال الوزارة ٥: معادلتا المماس والعمودي لمنحنى",
    "difficulty": "medium",
    "questionEn": "Find the equation of the tangent to the curve $y = \\tan(2x)$ at the point where $x = \\frac{\\pi}{8}$.",
    "questionAr": "أوجد معادلة المماس للمنحنى $y = \\tan(٢x)$ عند النقطة التي إحداثيها السيني $x = \\frac{\\pi}{٨}$.",
    "optionsEn": [
      "$4x - y - \\frac{\\pi}{2} + 1 = 0$",
      "$2x - y - \\frac{\\pi}{4} + 1 = 0$",
      "$4x + y - \\frac{\\pi}{2} - 1 = 0$",
      "$x - 4y + \\frac{\\pi}{8} - 1 = 0$"
    ],
    "optionsAr": [
      "$٤x - y - \\frac{\\pi}{٢} + ١ = ٠$",
      "$٢x - y - \\frac{\\pi}{٤} + ١ = ٠$",
      "$٤x + y - \\frac{\\pi}{٢} - ١ = ٠$",
      "$x - ٤y + \\frac{\\pi}{٨} - ١ = ٠$"
    ],
    "correctAnswer": "$4x - y - \\frac{\\pi}{2} + 1 = 0$",
    "correctIndex": 0,
    "hintEn": "Find $y_1 = \\tan(2 \\cdot \\frac{\\pi}{8}) = \\tan(\\frac{\\pi}{4}) = 1$, then $m = \\frac{dy}{dx} = 2\\sec^2(2x)$.",
    "hintAr": "أوجد $y_١ = \\tan(\\frac{\\pi}{٤}) = ١$، ثم احسب الميل $m = y' = ٢\\sec^٢(٢x)$.",
    "stepByStepSolutionEn": [
      "1. Find the $y$-coordinate at $x_1 = \\frac{\\pi}{8}$:",
      "$$y_1 = \\tan\\left(2 \\cdot \\frac{\\pi}{8}\\right) = \\tan\\left(\\frac{\\pi}{4}\\right) = 1$$",
      "Point of contact is $\\left(\\frac{\\pi}{8}, 1\\right)$.",
      "2. Differentiate $y = \\tan(2x)$:",
      "$$\\frac{dy}{dx} = 2\\sec^2(2x)$$",
      "3. Slope $m$ at $x = \\frac{\\pi}{8}$:",
      "$$m = 2\\sec^2\\left(\\frac{\\pi}{4}\\right) = 2(\\sqrt{2})^2 = 2(2) = 4$$",
      "4. Tangent equation $y - y_1 = m(x - x_1)$:",
      "$$y - 1 = 4\\left(x - \\frac{\\pi}{8}\\right) \\implies y - 1 = 4x - \\frac{\\pi}{2}$$",
      "$$4x - y - \\frac{\\pi}{2} + 1 = 0$$"
    ],
    "stepByStepSolutionAr": [
      "١. الإحداثي الصادي للنقطة: $y_١ = \\tan(\\frac{\\pi}{٤}) = ١$، إذن النقطة هي $(\\frac{\\pi}{٨}، ١)$.",
      "٢. مشتقة الدالة: $\\frac{dy}{dx} = ٢\\sec^٢(٢x)$.",
      "٣. الميل عند النقطة: $m = ٢(\\sqrt{٢})^٢ = ٤$.",
      "٤. معادلة المماس: $y - ١ = ٤(x - \\frac{\\pi}{٨}) \\implies ٤x - y - \\frac{\\pi}{٢} + ١ = ٠$."
    ],
    "teacherTipEn": "Remember that $\\sec(\\pi/4) = \\sqrt{2}$, so $\\sec^2(\\pi/4) = 2$.",
    "teacherTipAr": "تذكر أن $\\sec(\\pi/٤) = \\sqrt{٢}$، وتربيعها يساوي ٢."
  },
  {
    "id": "calc_ch1_se_06",
    "titleEn": "MoE Example 6: 4th Derivative of Sinusoidal Functions",
    "titleAr": "مثال الوزارة ٦: المشتقة الرابعة لدالة جيبية",
    "difficulty": "medium",
    "questionEn": "If $y = \\sin(2x)$, find the 4th derivative $\\frac{d^4 y}{dx^4}$.",
    "questionAr": "إذا كان $y = \\sin(٢x)$، فأوجد المشتقة الرابعة $\\frac{d^٤ y}{dx^٤}$.",
    "optionsEn": [
      "$16\\sin(2x)$",
      "$-16\\sin(2x)$",
      "$16\\cos(2x)$",
      "$8\\sin(2x)$"
    ],
    "optionsAr": [
      "$١٦\\sin(٢x)$",
      "$-١٦\\sin(٢x)$",
      "$١٦\\cos(٢x)$",
      "$٨\\sin(٢x)$"
    ],
    "correctAnswer": "$16\\sin(2x)$",
    "correctIndex": 0,
    "hintEn": "The derivatives of $\\sin(ax)$ cycle every 4 orders: $\\frac{d^4}{dx^4}[\\sin(ax)] = a^4 \\sin(ax)$.",
    "hintAr": "مشتقات دالة الجيب دورية كل ٤ رتب: $\\frac{d^٤}{dx^٤}[\\sin(ax)] = a^٤ \\sin(ax)$.",
    "stepByStepSolutionEn": [
      "1st derivative: $y' = 2\\cos(2x)$.",
      "2nd derivative: $y'' = -4\\sin(2x)$.",
      "3rd derivative: $y''' = -8\\cos(2x)$.",
      "4th derivative: $y^{(4)} = 16\\sin(2x)$.",
      "In general, $y^{(4k)} = a^{4k} \\sin(ax) = 2^4 \\sin(2x) = 16\\sin(2x)$."
    ],
    "stepByStepSolutionAr": [
      "المشتقة الأولى: $y' = ٢\\cos(٢x)$.",
      "المشتقة الثانية: $y'' = -٤\\sin(٢x)$.",
      "المشتقة الثالثة: $y''' = -٨\\cos(٢x)$.",
      "المشتقة الرابعة: $y^{(٤)} = ١٦\\sin(٢x)$."
    ],
    "teacherTipEn": "Derivatives of $\\sin$ and $\\cos$ repeat every 4 differentiations with multiplier $a^4$.",
    "teacherTipAr": "تتكرر مشتقات جا وجتا بنفس الصورة كل ٤ اشتقاقات مضروبة في $a^٤$."
  },
  {
    "id": "calc_ch1_se_07",
    "titleEn": "MoE Example 7: Related Rates - Expanding Spherical Balloon",
    "titleAr": "مثال الوزارة ٧: المعدلات الزمنية المرتبطة - بالون كروي يتمدد",
    "difficulty": "medium",
    "questionEn": "Air is pumped into a spherical balloon at a constant rate of $100\\pi\\text{ cm}^3/\\text{sec}$. Find the rate of increase of the radius when $r = 5\\text{ cm}$.",
    "questionAr": "يُضخ الهواء داخل بالون كروي بمعدل ثابت $١٠٠\\pi\\text{ سم}^٣/\\text{ث}$. أوجد معدل زيادة نصف القطر عندما يكون $r = ٥\\text{ سم}$.",
    "optionsEn": [
      "$1\\text{ cm/sec}$",
      "$2\\text{ cm/sec}$",
      "$0.5\\text{ cm/sec}$",
      "$\\pi\\text{ cm/sec}$"
    ],
    "optionsAr": [
      "$١\\text{ سم/ث}$",
      "$٢\\text{ سم/ث}$",
      "$٠٫٥\\text{ سم/ث}$",
      "$\\pi\\text{ سم/ث}$"
    ],
    "correctAnswer": "$1\\text{ cm/sec}$",
    "correctIndex": 0,
    "hintEn": "Volume of a sphere is $V = \\frac{4}{3}\\pi r^3$. Differentiate with respect to $t$: $\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$.",
    "hintAr": "حجم الكرة هو $V = \\frac{٤}{٣}\\pi r^٣$. بالاشتقاق بالنسبة للزمن: $\\frac{dV}{dt} = ٤\\pi r^٢ \\frac{dr}{dt}$.",
    "stepByStepSolutionEn": [
      "1. Volume of sphere: $V = \\frac{4}{3}\\pi r^3$.",
      "2. Differentiate with respect to time $t$:",
      "$$\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$$",
      "3. Substitute $\\frac{dV}{dt} = 100\\pi$ and $r = 5$:",
      "$$100\\pi = 4\\pi (5)^2 \\frac{dr}{dt}$$",
      "$$100\\pi = 4\\pi (25) \\frac{dr}{dt} = 100\\pi \\frac{dr}{dt}$$",
      "4. Solve for $\\frac{dr}{dt}$:",
      "$$\\frac{dr}{dt} = \\frac{100\\pi}{100\\pi} = 1\\text{ cm/sec}$$"
    ],
    "stepByStepSolutionAr": [
      "١. حجم الكرة: $V = \\frac{٤}{٣}\\pi r^٣$.",
      "٢. بالاشتقاق بالنسبة للزمن: $\\frac{dV}{dt} = ٤\\pi r^٢ \\frac{dr}{dt}$.",
      "٣. بالتعويض: $١٠٠\\pi = ٤\\pi (٢٥) \\frac{dr}{dt} = ١٠٠\\pi \\frac{dr}{dt}$.",
      "٤. إذن: $\\frac{dr}{dt} = ١\\text{ سم/ث}$."
    ],
    "teacherTipEn": "Notice that $\\frac{dV}{dr} = 4\\pi r^2$, which is the surface area of the sphere!",
    "teacherTipAr": "لاحظ أن مشتقة الحجم بالنسبة لنصف القطر تساوي مساحة السطح الكروي $٤\\pi r^٢$."
  },
  {
    "id": "calc_ch1_se_08",
    "titleEn": "MoE Example 8: Sliding Ladder Related Rates Problem",
    "titleAr": "مثال الوزارة ٨: مسألة السلم المنزلق والمعدلات الزمنية المرتبطة",
    "difficulty": "medium",
    "questionEn": "A ladder of length $10\\text{ m}$ leans against a vertical wall. If its base slides away from the wall at $2\\text{ m/sec}$, find the speed of its top sliding down when the base is $6\\text{ m}$ from the wall.",
    "questionAr": "سلم طوله $١٠\\text{ أمتار}$ يستند بطرفه العلوي على حائط رأسي وبطرفه السفلي على أرض أفقية. إذا انزلق طرفه السفلي مبتعداً عن الحائط بمعدل $٢\\text{ م/ث}$، فأوجد سرعة انزلاق طرفه العلوي عندما يكون الطرف السفلي على بعد $٦\\text{ م}$ من الحائط.",
    "optionsEn": [
      "$-1.5\\text{ m/sec}$",
      "$-2\\text{ m/sec}$",
      "$-1.25\\text{ m/sec}$",
      "$-0.75\\text{ m/sec}$"
    ],
    "optionsAr": [
      "$-١٫٥\\text{ م/ث}$",
      "$-٢\\text{ م/ث}$",
      "$-١٫٢٥\\text{ م/ث}$",
      "$-٠٫٧٥\\text{ م/ث}$"
    ],
    "correctAnswer": "$-1.5\\text{ m/sec}$",
    "correctIndex": 0,
    "hintEn": "By Pythagoras: $x^2 + y^2 = 10^2$. Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 0$.",
    "hintAr": "من نظرية فيثاغورس: $x^٢ + y^٢ = ١٠^٢$. بالاشتقاق بالنسبة للزمن: $x \\frac{dx}{dt} + y \\frac{dy}{dt} = ٠$.",
    "stepByStepSolutionEn": [
      "1. Let $x$ be the distance of the foot from the wall and $y$ the height of the top from the ground.",
      "Pythagoras: $x^2 + y^2 = 10^2 = 100$.",
      "When $x = 6$: $y = \\sqrt{100 - 6^2} = \\sqrt{64} = 8\\text{ m}$.",
      "2. Differentiate with respect to time $t$:",
      "$$2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 0 \\implies x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$$",
      "3. Substitute $x = 6, y = 8$, and $\\frac{dx}{dt} = 2$:",
      "$$6(2) + 8\\frac{dy}{dt} = 0 \\implies 12 + 8\\frac{dy}{dt} = 0$$",
      "$$\\frac{dy}{dt} = -\\frac{12}{8} = -1.5\\text{ m/sec}$$",
      "The top of the ladder is sliding down at a rate of $1.5\\text{ m/sec}$."
    ],
    "stepByStepSolutionAr": [
      "١. بنظرية فيثاغورس: $x^٢ + y^٢ = ١٠٠$.",
      "عندما يكون $x = ٦$: $y = \\sqrt{١٠٠ - ٣٦} = ٨\\text{ أمتار}$.",
      "٢. بالاشتقاق بالنسبة للزمن: $x \\frac{dx}{dt} + y \\frac{dy}{dt} = ٠$.",
      "٣. بالتعويض: $٦(٢) + ٨ \\frac{dy}{dt} = ٠ \\implies ٨ \\frac{dy}{dt} = -١٢$.",
      "٤. إذن: $\\frac{dy}{dt} = -١٫٥\\text{ م/ث}$ (الإشارة السالبة تعني هبوط الطرف العلوي)."
    ],
    "teacherTipEn": "The negative sign indicates that the vertical distance $y$ is decreasing over time.",
    "teacherTipAr": "الإشارة السالبة تعني أن الارتفاع الرأسي يتناقص مع مرور الزمن."
  },
  {
    "id": "calc_ch1_se_09",
    "titleEn": "MoE Example 9: Proving an Identity with Implicit Derivatives",
    "titleAr": "مثال الوزارة ٩: إثبات متطابقة تفاضلية للمشتقة الثانية",
    "difficulty": "hots",
    "questionEn": "If $y = \\tan(x)$, prove that $\\frac{d^2 y}{dx^2} = 2y(1 + y^2)$. What is the coefficient of $y(1 + y^2)$?",
    "questionAr": "إذا كان $y = \\tan(x)$، فأثبت أن $\\frac{d^٢ y}{dx^٢} = ٢y(١ + y^٢)$. ما هو معامل المقدار $y(١ + y^٢)$؟",
    "optionsEn": [
      "2",
      "1",
      "4",
      "-2"
    ],
    "optionsAr": [
      "٢",
      "١",
      "٤",
      "-٢"
    ],
    "correctAnswer": "2",
    "correctIndex": 0,
    "hintEn": "$y' = \\sec^2(x) = 1 + \\tan^2(x) = 1 + y^2$. Differentiate again using chain rule.",
    "hintAr": "$y' = \\sec^٢(x) = ١ + y^٢$. اشتق مرة ثانية بالنسبة لـ $x$.",
    "stepByStepSolutionEn": [
      "1. First derivative: $y' = \\sec^2(x)$.",
      "Using the trig identity $\\sec^2(x) = 1 + \\tan^2(x) = 1 + y^2$:",
      "$$y' = 1 + y^2$$",
      "2. Differentiate both sides with respect to $x$:",
      "$$y'' = \\frac{d}{dx}[1 + y^2] = 2y \\cdot y'$$",
      "3. Substitute $y' = 1 + y^2$:",
      "$$y'' = 2y(1 + y^2)$$"
    ],
    "stepByStepSolutionAr": [
      "١. المشتقة الأولى: $y' = \\sec^٢(x) = ١ + \\tan^٢(x) = ١ + y^٢$.",
      "٢. باشتقاق الطرفين بالنسبة إلى $x$:",
      "$$y'' = ٢y \\cdot y'$$",
      "٣. بالتعويض عن $y' = ١ + y^٢$:",
      "$$y'' = ٢y(١ + y^٢)$$"
    ],
    "teacherTipEn": "Replacing trigonometric expressions with $y$ before taking the second derivative makes the proof remarkably elegant and fast.",
    "teacherTipAr": "التعويض عن الدوال المثلثية بدلالة $y$ قبل أخذ المشتقة الثانية يسهل الإثبات ويوفر الوقت."
  },
  {
    "id": "calc_ch1_se_10",
    "titleEn": "MoE Example 10: Parametric Second Derivative",
    "titleAr": "مثال الوزارة ١٠: المشتقة الثانية في المعادلات البارامترية",
    "difficulty": "hots",
    "questionEn": "If $x = \\cos(t)$ and $y = \\sin(t)$, find $\\frac{d^2 y}{dx^2}$ at $t = \\frac{\\pi}{4}$.",
    "questionAr": "إذا كان $x = \\cos(t)$ و $y = \\sin(t)$، فأوجد قيمة $\\frac{d^٢ y}{dx^٢}$ عند $t = \\frac{\\pi}{٤}$.",
    "optionsEn": [
      "$-2\\sqrt{2}$",
      "$-\\sqrt{2}$",
      "$-2$",
      "$2\\sqrt{2}$"
    ],
    "optionsAr": [
      "$-٢\\sqrt{٢}$",
      "$-\\sqrt{٢}$",
      "$-٢$",
      "$٢\\sqrt{٢}$"
    ],
    "correctAnswer": "$-2\\sqrt{2}$",
    "correctIndex": 0,
    "hintEn": "$\\frac{d^2 y}{dx^2} = \\frac{\\frac{d}{dt}(dy/dx)}{dx/dt}$. Never just divide $\\frac{d^2y/dt^2}{d^2x/dt^2}$!",
    "hintAr": "قانون المشتقة الثانية البارامترية: $\\frac{d^٢ y}{dx^٢} = \\frac{\\frac{d}{dt}(dy/dx)}{dx/dt}$. احذر من قسمة المشتقات الثانية مباشرة!",
    "stepByStepSolutionEn": [
      "1. Find first derivatives with respect to $t$:",
      "$$\\frac{dx}{dt} = -\\sin(t), \\quad \\frac{dy}{dt} = \\cos(t)$$",
      "$$\\frac{dy}{dx} = \\frac{\\cos(t)}{-\\sin(t)} = -\\cot(t)$$",
      "2. Differentiate $\\frac{dy}{dx}$ with respect to $x$ using chain rule:",
      "$$\\frac{d^2 y}{dx^2} = \\frac{d}{dx}[-\\cot(t)] = \\frac{d}{dt}[-\\cot(t)] \\cdot \\frac{dt}{dx} = \\frac{\\frac{d}{dt}[-\\cot(t)]}{\\frac{dx}{dt}}$$",
      "$$\\frac{d}{dt}[-\\cot(t)] = \\csc^2(t)$$",
      "$$\\frac{d^2 y}{dx^2} = \\frac{\\csc^2(t)}{-\\sin(t)} = -\\csc^3(t)$$",
      "3. Evaluate at $t = \\frac{\\pi}{4}$:",
      "$$\\csc\\left(\\frac{\\pi}{4}\\right) = \\sqrt{2}$$",
      "$$\\frac{d^2 y}{dx^2} = -(\\sqrt{2})^3 = -2\\sqrt{2}$$"
    ],
    "stepByStepSolutionAr": [
      "١. $\\frac{dx}{dt} = -\\sin(t), \\quad \\frac{dy}{dt} = \\cos(t) \\implies \\frac{dy}{dx} = -\\cot(t)$.",
      "٢. قانون المشتقة الثانية البارامترية:",
      "$$\\frac{d^٢ y}{dx^٢} = \\frac{\\frac{d}{dt}(-\\cot t)}{\\frac{dx}{dt}} = \\frac{\\csc^٢(t)}{-\\sin(t)} = -\\csc^٣(t)$$",
      "٣. عند $t = \\frac{\\pi}{٤}$:",
      "$$\\csc\\left(\\frac{\\pi}{٤}\\right) = \\sqrt{٢} \\implies y'' = -(\\sqrt{٢})^٣ = -٢\\sqrt{٢}$$"
    ],
    "teacherTipEn": "Crucial rule: $\\frac{d^2y}{dx^2} \\neq \\frac{y''(t)}{x''(t)}$! You must divide $\\frac{d}{dt}(dy/dx)$ by $\\frac{dx}{dt}$.",
    "teacherTipAr": "تحذير امتحاني حاسم: المشتقة الثانية البارامترية لا تساوي مشتقة ص الثانية على مشتقة س الثانية! يجب تطبيق قاعدة السلسلة."
  }
];

export const calcCh1Exercises: SolvedProblem[] = [
  {
    "id": "calc_ch1_ue_01",
    "titleEn": "MoE Exercise 1: Derivative of Tangent of a Composite Function",
    "titleAr": "تمرين الوزارة ١: اشتقاق ظل زاوية مركبة",
    "difficulty": "easy",
    "questionEn": "Find $\\frac{dy}{dx}$ if $y = \\tan(3x^2 + 1)$.",
    "questionAr": "أوجد $\\frac{dy}{dx}$ إذا كان $y = \\tan(٣x^٢ + ١)$.",
    "optionsEn": [
      "$6x\\sec^2(3x^2 + 1)$",
      "$\\sec^2(3x^2 + 1)$",
      "$6x\\tan(3x^2 + 1)$",
      "$3x\\sec^2(3x^2 + 1)$"
    ],
    "optionsAr": [
      "$٦x\\sec^٢(٣x^٢ + ١)$",
      "$\\sec^٢(٣x^٢ + ١)$",
      "$٦x\\tan(٣x^٢ + ١)$",
      "$٣x\\sec^٢(٣x^٢ + ١)$"
    ],
    "correctAnswer": "$6x\\sec^2(3x^2 + 1)$",
    "correctIndex": 0,
    "hintEn": "Derivative of $\\tan(u)$ is $u' \\sec^2(u)$.",
    "hintAr": "مشتقة $\\tan(u)$ هي $u' \\sec^٢(u)$.",
    "stepByStepSolutionEn": [
      "Let $u = 3x^2 + 1$, then $u' = 6x$.",
      "$$\\frac{dy}{dx} = \\sec^2(u) \\cdot u' = 6x\\sec^2(3x^2 + 1)$$"
    ],
    "stepByStepSolutionAr": [
      "مشتقة الزاوية هي $٦x$.",
      "$$\\frac{dy}{dx} = ٦x\\sec^٢(٣x^٢ + ١)$$"
    ],
    "teacherTipEn": "Multiply by the derivative of the angle.",
    "teacherTipAr": "اضرب في مشتقة الزاوية."
  },
  {
    "id": "calc_ch1_ue_02",
    "titleEn": "MoE Exercise 2: Derivative of Product of Trig Functions",
    "titleAr": "تمرين الوزارة ٢: اشتقاق حاصل ضرب دوال مثلثية",
    "difficulty": "medium",
    "questionEn": "Find $\\frac{dy}{dx}$ if $y = x^2 \\sec(x)$.",
    "questionAr": "أوجد $\\frac{dy}{dx}$ إذا كان $y = x^٢ \\sec(x)$.",
    "optionsEn": [
      "$2x\\sec(x) + x^2\\sec(x)\\tan(x)$",
      "$2x\\sec(x)\\tan(x)$",
      "$x^2\\sec(x)\\tan(x)$",
      "$2x\\sec(x) - x^2\\sec(x)\\tan(x)$"
    ],
    "optionsAr": [
      "$٢x\\sec(x) + x^٢\\sec(x)\\tan(x)$",
      "$٢x\\sec(x)\\tan(x)$",
      "$x^٢\\sec(x)\\tan(x)$",
      "$٢x\\sec(x) - x^٢\\sec(x)\\tan(x)$"
    ],
    "correctAnswer": "$2x\\sec(x) + x^2\\sec(x)\\tan(x)$",
    "correctIndex": 0,
    "hintEn": "Product rule: $(uv)' = u'v + uv'$.",
    "hintAr": "قاعدة الضرب: مشتقة الأول × الثاني + الأول × مشتقة الثاني.",
    "stepByStepSolutionEn": [
      "Let $u = x^2 \\implies u' = 2x$.",
      "Let $v = \\sec(x) \\implies v' = \\sec(x)\\tan(x)$.",
      "$$\\frac{dy}{dx} = 2x\\sec(x) + x^2\\sec(x)\\tan(x)$$"
    ],
    "stepByStepSolutionAr": [
      "تطبيق قاعدة حاصل الضرب:",
      "$$\\frac{dy}{dx} = ٢x\\sec(x) + x^٢\\sec(x)\\tan(x)$$"
    ],
    "teacherTipEn": "Factor out $x\\sec(x)$ if looking for alternative option formats.",
    "teacherTipAr": "يمكن أخذ $x\\sec(x)$ كعامل مشترك لتسهيل الحساب."
  },
  {
    "id": "calc_ch1_ue_03",
    "titleEn": "MoE Exercise 3: Slope of Normal Line",
    "titleAr": "تمرين الوزارة ٣: ميل المستقيم العمودي على المنحنى",
    "difficulty": "medium",
    "questionEn": "If the slope of the tangent to a curve at point $P$ is $m = \\frac{2}{3}$, what is the slope of the normal line at $P$?",
    "questionAr": "إذا كان ميل المماس لمنحنى عند نقطة $P$ هو $m = \\frac{٢}{٣}$، فما هو ميل الخط العمودي عند $P$؟",
    "optionsEn": [
      "$-\\frac{3}{2}$",
      "$\\frac{3}{2}$",
      "$-\\frac{2}{3}$",
      "$\\frac{2}{3}$"
    ],
    "optionsAr": [
      "$-\\frac{٣}{٢}$",
      "$\\frac{٣}{٢}$",
      "$-\\frac{٢}{٣}$",
      "$\\frac{٢}{٣}$"
    ],
    "correctAnswer": "$-\\frac{3}{2}$",
    "correctIndex": 0,
    "hintEn": "Slope of normal is $m_{\\text{normal}} = -\\frac{1}{m_{\\text{tangent}}}$.",
    "hintAr": "ميل العمودي هو المعكوس الضربي الجمعي لميل المماس: $m_{\\text{عمودي}} = -\\frac{١}{m}$.",
    "stepByStepSolutionEn": [
      "Since the tangent and normal lines are perpendicular:",
      "$$m_{\\text{tangent}} \\cdot m_{\\text{normal}} = -1$$",
      "$$m_{\\text{normal}} = -\\frac{1}{2/3} = -\\frac{3}{2}$$"
    ],
    "stepByStepSolutionAr": [
      "بما أن المماس والعمودي متعامدان:",
      "$$m_{\\text{عمودي}} = -\\frac{١}{٢/٣} = -\\frac{٣}{٢}$$"
    ],
    "teacherTipEn": "Flip the fraction and change the sign.",
    "teacherTipAr": "اقلب الكسر واعكس الإشارة للحصول على ميل العمودي."
  },
  {
    "id": "calc_ch1_ue_04",
    "titleEn": "MoE Exercise 4: Tangent Parallel to the x-Axis",
    "titleAr": "تمرين الوزارة ٤: مماس يوازي محور السينات",
    "difficulty": "medium",
    "questionEn": "Find the coordinates of the points on the curve $y = x^3 - 3x$ where the tangent is parallel to the $x$-axis.",
    "questionAr": "أوجد إحداثيات النقاط على المنحنى $y = x^٣ - ٣x$ التي يكون عندها المماس موازياً لمحور السينات.",
    "optionsEn": [
      "$(1, -2)$ and $(-1, 2)$",
      "$(0, 0)$ and $(1, -2)$",
      "$(3, 0)$ and $(-3, 0)$",
      "$(2, 2)$ and $(-2, -2)$"
    ],
    "optionsAr": [
      "$(١، -٢)$ و $(-١، ٢)$",
      "$(٠، ٠)$ و $(١، -٢)$",
      "$(٣، ٠)$ و $(-٣، ٠)$",
      "$(٢، ٢)$ و $(-٢، -٢)$"
    ],
    "correctAnswer": "$(1, -2)$ and $(-1, 2)$",
    "correctIndex": 0,
    "hintEn": "A tangent parallel to the $x$-axis has slope $\\frac{dy}{dx} = 0$.",
    "hintAr": "المماس الموازي لمحور السينات ميله يساوي صفراً: $\\frac{dy}{dx} = ٠$.",
    "stepByStepSolutionEn": [
      "1. Find derivative: $\\frac{dy}{dx} = 3x^2 - 3$.",
      "2. Set $\\frac{dy}{dx} = 0$:",
      "$$3x^2 - 3 = 0 \\implies x^2 = 1 \\implies x = \\pm 1$$",
      "3. For $x = 1$: $y = 1^3 - 3(1) = -2 \\implies (1, -2)$.",
      "4. For $x = -1$: $y = (-1)^3 - 3(-1) = -1 + 3 = 2 \\implies (-1, 2)$."
    ],
    "stepByStepSolutionAr": [
      "١. المشتقة: $y' = ٣x^٢ - ٣$.",
      "٢. بوضع $y' = ٠$: $٣x^٢ = ٣ \\implies x = \\pm ١$.",
      "٣. عند $x = ١$: $y = -٢$، وعند $x = -١$: $y = ٢$.",
      "النقاط هي: $(١، -٢)$ و $(-١، ٢)$."
    ],
    "teacherTipEn": "Tangent parallel to $x$-axis $\\implies y' = 0$. Tangent parallel to $y$-axis $\\implies y'$ is undefined (denominator = 0).",
    "teacherTipAr": "مماس يوازي محور السينات $\\implies y' = ٠$. مماس يوازي محور الصادات $\\implies$ المقام في المشتقة يساوي صفراً."
  },
  {
    "id": "calc_ch1_ue_05",
    "titleEn": "MoE Exercise 5: Rate of Change of Area of an Equilateral Triangle",
    "titleAr": "تمرين الوزارة ٥: معدل تغير مساحة مثلث متساوي الأضلاع",
    "difficulty": "medium",
    "questionEn": "The side length of an equilateral triangle increases at a rate of $\\sqrt{3}\\text{ cm/sec}$. Find the rate of increase of its area when the side length is $10\\text{ cm}$.",
    "questionAr": "يتزايد طول ضلع مثلث متساوي الأضلاع بمعدل $\\sqrt{٣}\\text{ سم/ث}$. أوجد معدل تزايد مساحته عندما يكون طول ضلعه $١٠\\text{ سم}$.",
    "optionsEn": [
      "$15\\text{ cm}^2/\\text{sec}$",
      "$10\\sqrt{3}\\text{ cm}^2/\\text{sec}$",
      "$30\\text{ cm}^2/\\text{sec}$",
      "$5\\sqrt{3}\\text{ cm}^2/\\text{sec}$"
    ],
    "optionsAr": [
      "$١٥\\text{ سم}^٢/\\text{ث}$",
      "$١٠\\sqrt{٣}\\text{ سم}^٢/\\text{ث}$",
      "$٣٠\\text{ سم}^٢/\\text{ث}$",
      "$٥\\sqrt{٣}\\text{ سم}^٢/\\text{ث}$"
    ],
    "correctAnswer": "$15\\text{ cm}^2/\\text{sec}$",
    "correctIndex": 0,
    "hintEn": "Area of an equilateral triangle with side $s$ is $A = \\frac{\\sqrt{3}}{4}s^2$.",
    "hintAr": "مساحة مثلث متساوي الأضلاع طول ضلعه $s$ هي $A = \\frac{\\sqrt{٣}}{٤}s^٢$.",
    "stepByStepSolutionEn": [
      "1. Area formula: $A = \\frac{\\sqrt{3}}{4}s^2$.",
      "2. Differentiate with respect to time $t$:",
      "$$\\frac{dA}{dt} = \\frac{\\sqrt{3}}{4} \\cdot 2s \\frac{ds}{dt} = \\frac{\\sqrt{3}}{2}s \\frac{ds}{dt}$$",
      "3. Substitute $s = 10$ and $\\frac{ds}{dt} = \\sqrt{3}$:",
      "$$\\frac{dA}{dt} = \\frac{\\sqrt{3}}{2}(10)(\\sqrt{3}) = \\frac{3}{2}(10) = 15\\text{ cm}^2/\\text{sec}$$"
    ],
    "stepByStepSolutionAr": [
      "١. قانون مساحة المثلث متساوي الأضلاع: $A = \\frac{\\sqrt{٣}}{٤}s^٢$.",
      "٢. بالاشتقاق بالنسبة للزمن: $\\frac{dA}{dt} = \\frac{\\sqrt{٣}}{٢}s \\frac{ds}{dt}$.",
      "٣. بالتعويض: $\\frac{dA}{dt} = \\frac{\\sqrt{٣}}{٢}(١٠)(\\sqrt{٣}) = ١٥\\text{ سم}^٢/\\text{ث}$."
    ],
    "teacherTipEn": "Memorize the area formula $A = \\frac{\\sqrt{3}}{4}s^2$ for any equilateral triangle.",
    "teacherTipAr": "احفظ قانون مساحة المثلث متساوي الأضلاع $A = \\frac{\\sqrt{٣}}{٤}s^٢$ لتوفير الوقت."
  },
  {
    "id": "calc_ch1_ue_06",
    "titleEn": "MoE Exercise 6: Derivative of Cosecant Composite Function",
    "titleAr": "تمرين الوزارة ٦: اشتقاق دالة قاطع التمام لزاوية غير خطية",
    "difficulty": "easy",
    "questionEn": "Find the derivative of $y = \\csc(\\sqrt{x})$.",
    "questionAr": "أوجد مشتقة $y = \\csc(\\sqrt{x})$.",
    "optionsEn": [
      "$-\\frac{\\csc(\\sqrt{x})\\cot(\\sqrt{x})}{2\\sqrt{x}}$",
      "$\\frac{\\csc(\\sqrt{x})\\cot(\\sqrt{x})}{2\\sqrt{x}}$",
      "$-\\csc(\\sqrt{x})\\cot(\\sqrt{x})$",
      "$-\\frac{\\csc^2(\\sqrt{x})}{2\\sqrt{x}}$"
    ],
    "optionsAr": [
      "$-\\frac{\\csc(\\sqrt{x})\\cot(\\sqrt{x})}{٢\\sqrt{x}}$",
      "$\\frac{\\csc(\\sqrt{x})\\cot(\\sqrt{x})}{٢\\sqrt{x}}$",
      "$-\\csc(\\sqrt{x})\\cot(\\sqrt{x})$",
      "$-\\frac{\\csc^٢(\\sqrt{x})}{٢\\sqrt{x}}$"
    ],
    "correctAnswer": "$-\\frac{\\csc(\\sqrt{x})\\cot(\\sqrt{x})}{2\\sqrt{x}}$",
    "correctIndex": 0,
    "hintEn": "Derivative of $\\sqrt{x}$ is $\\frac{1}{2\\sqrt{x}}$.",
    "hintAr": "مشتقة $\\sqrt{x}$ هي $\\frac{١}{٢\\sqrt{x}}$.",
    "stepByStepSolutionEn": [
      "$$\\frac{dy}{dx} = -\\csc(\\sqrt{x})\\cot(\\sqrt{x}) \\cdot \\frac{d}{dx}[\\sqrt{x}]$$",
      "$$= -\\csc(\\sqrt{x})\\cot(\\sqrt{x}) \\cdot \\frac{1}{2\\sqrt{x}} = -\\frac{\\csc(\\sqrt{x})\\cot(\\sqrt{x})}{2\\sqrt{x}}$$"
    ],
    "stepByStepSolutionAr": [
      "مشتقة الزاوية $\\sqrt{x}$ هي $\\frac{١}{٢\\sqrt{x}}$.",
      "$$\\frac{dy}{dx} = -\\frac{\\csc(\\sqrt{x})\\cot(\\sqrt{x})}{٢\\sqrt{x}}$$"
    ],
    "teacherTipEn": "Be mindful of negative signs on all 'co-' trig derivatives (cos, cot, csc).",
    "teacherTipAr": "جميع الدوال التي تبدأ بحرف التاء (جتا، ظتا، قتا) مشتقاتها سالبة دائماً."
  },
  {
    "id": "calc_ch1_ue_07",
    "titleEn": "MoE Exercise 7: Implicit Tangent Slope at a Specified Point",
    "titleAr": "تمرين الوزارة ٧: ميل المماس الضمني عند نقطة محددة",
    "difficulty": "medium",
    "questionEn": "Find the slope of the tangent to the curve $x^3 + y^3 = 9$ at the point $(1, 2)$.",
    "questionAr": "أوجد ميل المماس للمنحنى $x^٣ + y^٣ = ٩$ عند النقطة $(١، ٢)$.",
    "optionsEn": [
      "$-\\frac{1}{4}$",
      "$\\frac{1}{4}$",
      "$-4$",
      "$-\\frac{1}{2}$"
    ],
    "optionsAr": [
      "$-\\frac{١}{٤}$",
      "$\\frac{١}{٤}$",
      "$-٤$",
      "$-\\frac{١}{٢}$"
    ],
    "correctAnswer": "$-\\frac{1}{4}$",
    "correctIndex": 0,
    "hintEn": "Differentiate: $3x^2 + 3y^2 \\frac{dy}{dx} = 0$.",
    "hintAr": "بالاشتقاق الضمني: $٣x^٢ + ٣y^٢ \\frac{dy}{dx} = ٠$.",
    "stepByStepSolutionEn": [
      "$$3x^2 + 3y^2 \\frac{dy}{dx} = 0 \\implies \\frac{dy}{dx} = -\\frac{x^2}{y^2}$$",
      "Substitute $x = 1, y = 2$:",
      "$$\\frac{dy}{dx}\\Big|_{(1, 2)} = -\\frac{1^2}{2^2} = -\\frac{1}{4}$$"
    ],
    "stepByStepSolutionAr": [
      "بالاشتقاق: $٣x^٢ + ٣y^٢ y' = ٠ \\implies y' = -\\frac{x^٢}{y^٢}$.",
      "عند النقطة $(١، ٢)$: $y' = -\\frac{١}{٤}$."
    ],
    "teacherTipEn": "Substitute numbers immediately after finding the algebraic expression for $y'$ to save time.",
    "teacherTipAr": "عوض بالأرقام فور عزل المشتقة لتوفير الوقت وتجنب الأخطاء."
  },
  {
    "id": "calc_ch1_ue_08",
    "titleEn": "MoE Exercise 8: Rate of Change of Cube Surface Area",
    "titleAr": "تمرين الوزارة ٨: معدل تغير المساحة الكلية لمكعب",
    "difficulty": "medium",
    "questionEn": "The edge of a cube expands at $3\\text{ cm/sec}$. Find the rate of increase of its total surface area when the edge length is $4\\text{ cm}$.",
    "questionAr": "يتمدد حرف مكعب بمعدل $٣\\text{ سم/ث}$. أوجد معدل زيادة مساحته الكلية عندما يكون طول حرفه $٤\\text{ سم}$.",
    "optionsEn": [
      "$144\\text{ cm}^2/\\text{sec}$",
      "$72\\text{ cm}^2/\\text{sec}$",
      "$96\\text{ cm}^2/\\text{sec}$",
      "$48\\text{ cm}^2/\\text{sec}$"
    ],
    "optionsAr": [
      "$١٤٤\\text{ سم}^٢/\\text{ث}$",
      "$٧٢\\text{ سم}^٢/\\text{ث}$",
      "$٩٦\\text{ سم}^٢/\\text{ث}$",
      "$٤٨\\text{ سم}^٢/\\text{ث}$"
    ],
    "correctAnswer": "$144\\text{ cm}^2/\\text{sec}$",
    "correctIndex": 0,
    "hintEn": "Total surface area of a cube with edge $x$ is $A = 6x^2$.",
    "hintAr": "المساحة الكلية للمكعب هي $A = ٦x^٢$.",
    "stepByStepSolutionEn": [
      "1. $A = 6x^2$.",
      "2. Differentiate with respect to $t$: $\\frac{dA}{dt} = 12x \\frac{dx}{dt}$.",
      "3. Substitute $x = 4$ and $\\frac{dx}{dt} = 3$:",
      "$$\\frac{dA}{dt} = 12(4)(3) = 144\\text{ cm}^2/\\text{sec}$$"
    ],
    "stepByStepSolutionAr": [
      "١. المساحة الكلية: $A = ٦x^٢$.",
      "٢. بالاشتقاق: $\\frac{dA}{dt} = ١٢x \\frac{dx}{dt}$.",
      "٣. بالتعويض: $\\frac{dA}{dt} = ١٢(٤)(٣) = ١٤٤\\text{ سم}^٢/\\text{ث}$."
    ],
    "teacherTipEn": "6 faces each of area $x^2$, so total area is $6x^2$.",
    "teacherTipAr": "المكعب له ٦ أوجه مساحة كل وجه $x^٢$، إذن المساحة الكلية $٦x^٢$."
  },
  {
    "id": "calc_ch1_ue_09",
    "titleEn": "MoE Exercise 9: Second Derivative of Cosine Function",
    "titleAr": "تمرين الوزارة ٩: المشتقة الثانية لدالة جيب التمام",
    "difficulty": "easy",
    "questionEn": "If $y = \\cos(3x)$, find $\\frac{d^2 y}{dx^2}$.",
    "questionAr": "إذا كان $y = \\cos(٣x)$، فأوجد $\\frac{d^٢ y}{dx^٢}$.",
    "optionsEn": [
      "$-9\\cos(3x)$",
      "$9\\cos(3x)$",
      "$-3\\sin(3x)$",
      "$-9\\sin(3x)$"
    ],
    "optionsAr": [
      "$-٩\\cos(٣x)$",
      "$٩\\cos(٣x)$",
      "$-٣\\sin(٣x)$",
      "$-٩\\sin(٣x)$"
    ],
    "correctAnswer": "$-9\\cos(3x)$",
    "correctIndex": 0,
    "hintEn": "First derivative is $-3\\sin(3x)$, second derivative is $-9\\cos(3x)$.",
    "hintAr": "المشتقة الأولى هي $-٣\\sin(٣x)$، والمشتقة الثانية هي $-٩\\cos(٣x)$.",
    "stepByStepSolutionEn": [
      "$$y' = -3\\sin(3x)$$",
      "$$y'' = -3 \\cdot 3\\cos(3x) = -9\\cos(3x) = -9y$$"
    ],
    "stepByStepSolutionAr": [
      "$$y' = -٣\\sin(٣x)$$",
      "$$y'' = -٩\\cos(٣x)$$"
    ],
    "teacherTipEn": "Notice that $y'' + 9y = 0$, the classic simple harmonic oscillator equation!",
    "teacherTipAr": "لاحظ أن $y'' + ٩y = ٠$، وهي معادلة الحركة التوافقية البسيطة الشهيرة."
  },
  {
    "id": "calc_ch1_ue_10",
    "titleEn": "MoE Exercise 10: Parametric Normal Line Slope",
    "titleAr": "تمرين الوزارة ١٠: ميل العمودي لمنحنى بارامتري",
    "difficulty": "medium",
    "questionEn": "If $x = t^2$ and $y = 2t$, find the slope of the normal line to the curve at $t = 2$.",
    "questionAr": "إذا كان $x = t^٢$ و $y = ٢t$، فأوجد ميل العمودي للمنحنى عند $t = ٢$.",
    "optionsEn": [
      "-2",
      "$\\frac{1}{2}$",
      "2",
      "$-\\frac{1}{2}$"
    ],
    "optionsAr": [
      "-٢",
      "$\\frac{١}{٢}$",
      "٢",
      "$-\\frac{١}{٢}$"
    ],
    "correctAnswer": "-2",
    "correctIndex": 0,
    "hintEn": "Find $\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt} = \\frac{2}{2t} = \\frac{1}{t}$. Then normal slope is $-t$.",
    "hintAr": "احسب ميل المماس $\\frac{dy}{dx} = \\frac{١}{t}$، فيكون ميل العمودي هو $-t$.",
    "stepByStepSolutionEn": [
      "1. $\\frac{dx}{dt} = 2t$ and $\\frac{dy}{dt} = 2$.",
      "2. Tangent slope: $\\frac{dy}{dx} = \\frac{2}{2t} = \\frac{1}{t}$.",
      "3. At $t = 2$, tangent slope is $m_{\\text{tangent}} = \\frac{1}{2}$.",
      "4. Normal slope: $m_{\\text{normal}} = -\\frac{1}{1/2} = -2$."
    ],
    "stepByStepSolutionAr": [
      "١. $\\frac{dx}{dt} = ٢t$ و $\\frac{dy}{dt} = ٢$.",
      "٢. ميل المماس: $\\frac{dy}{dx} = \\frac{١}{t}$.",
      "٣. عند $t = ٢$: ميل المماس $= \\frac{١}{٢}$.",
      "٤. ميل العمودي: $-٢$."
    ],
    "teacherTipEn": "Normal slope is the negative reciprocal of tangent slope.",
    "teacherTipAr": "ميل العمودي هو مقلوب ميل المماس بعكس الإشارة."
  },
  {
    "id": "calc_ch1_ue_11",
    "titleEn": "MoE Exercise 11: Length of Subtangent and Subnormal",
    "titleAr": "تمرين الوزارة ١١: طول المماس وطول العمودي",
    "difficulty": "medium",
    "questionEn": "For the curve $y = x^2$ at the point $(1, 1)$, find the length of the tangent segment intercepted between the point and the $x$-axis.",
    "questionAr": "للمنحنى $y = x^٢$ عند النقطة $(١، ١)$، أوجد طول قطعة المماس المحصورة بين النقطة ومحور السينات.",
    "optionsEn": [
      "$\\frac{\\sqrt{5}}{2}$",
      "$\\sqrt{5}$",
      "$\\frac{5}{2}$",
      "2"
    ],
    "optionsAr": [
      "$\\frac{\\sqrt{٥}}{٢}$",
      "$\\sqrt{٥}$",
      "$\\frac{٥}{٢}$",
      "٢"
    ],
    "correctAnswer": "$\\frac{\\sqrt{5}}{2}$",
    "correctIndex": 0,
    "hintEn": "The length of tangent segment is $L = \\frac{|y_1|\\sqrt{1 + m^2}}{|m|}$.",
    "hintAr": "طول قطعة المماس هو $L = \\frac{|y_١|\\sqrt{١ + m^٢}}{|m|}$.",
    "stepByStepSolutionEn": [
      "1. $m = \\frac{dy}{dx}\\Big|_{x=1} = 2(1) = 2$.",
      "2. Tangent line equation: $y - 1 = 2(x - 1) \\implies y = 2x - 1$.",
      "3. $x$-intercept: set $y = 0 \\implies 2x - 1 = 0 \\implies x = 1/2$, so intercept is $(1/2, 0)$.",
      "4. Distance between $(1, 1)$ and $(1/2, 0)$:",
      "$$L = \\sqrt{(1 - 1/2)^2 + (1 - 0)^2} = \\sqrt{(1/2)^2 + 1^2} = \\sqrt{1/4 + 1} = \\sqrt{5/4} = \\frac{\\sqrt{5}}{2}$$"
    ],
    "stepByStepSolutionAr": [
      "١. الميل $m = ٢$.",
      "٢. معادلة المماس: $y - ١ = ٢(x - ١) \\implies y = ٢x - ١$.",
      "٣. نقطة التقاطع مع محور السينات (بوضع $y = ٠$): $(\\frac{١}{٢}، ٠)$.",
      "٤. البعد بين النقطتين: $\\sqrt{(١ - \\frac{١}{٢})^٢ + (١ - ٠)^٢} = \\frac{\\sqrt{٥}}{٢}$."
    ],
    "teacherTipEn": "Formula for length of tangent: $L = \\frac{|y|\\sqrt{1 + m^2}}{|m|}$.",
    "teacherTipAr": "قانون طول قطعة المماس: $L = \\frac{|y|\\sqrt{١ + m^٢}}{|m|}$."
  },
  {
    "id": "calc_ch1_ue_12",
    "titleEn": "MoE Exercise 12: Derivative of Absolute Value Function",
    "titleAr": "تمرين الوزارة ١٢: اشتقاق دالة المقياس",
    "difficulty": "medium",
    "questionEn": "Find $\\frac{dy}{dx}$ for $y = |x - 3|$ at $x = 5$.",
    "questionAr": "أوجد قيمة $\\frac{dy}{dx}$ للدالة $y = |x - ٣|$ عند $x = ٥$.",
    "optionsEn": [
      "1",
      "-1",
      "0",
      "Undefined"
    ],
    "optionsAr": [
      "١",
      "-١",
      "٠",
      "غير معرفة"
    ],
    "correctAnswer": "1",
    "correctIndex": 0,
    "hintEn": "For $x > 3$, $|x - 3| = x - 3$.",
    "hintAr": "عندما تكون $x > ٣$، فإن $|x - ٣| = x - ٣$.",
    "stepByStepSolutionEn": [
      "Since $x = 5 > 3$, in a neighborhood of $x = 5$ the function is $y = x - 3$.",
      "The derivative is $\\frac{dy}{dx} = 1$."
    ],
    "stepByStepSolutionAr": [
      "بما أن $x = ٥ > ٣$، فإن الدالة في جوار هذه النقطة هي $y = x - ٣$.",
      "المشتقة هي: $\\frac{dy}{dx} = ١$."
    ],
    "teacherTipEn": "The derivative of $|x-a|$ is undefined only at the corner point $x = a$. For all other points, it is $+1$ or $-1$.",
    "teacherTipAr": "المشتقة غير معرفة فقط عند نقطة الرأس $x = a$، أما في باقي النقاط فتساوي $+١$ أو $-١$."
  },
  {
    "id": "calc_ch1_ue_13",
    "titleEn": "MoE Exercise 13: Rate of Change of Distance Between Moving Ships",
    "titleAr": "تمرين الوزارة ١٣: معدل تغير المسافة بين سفينتين متحركتين",
    "difficulty": "hots",
    "questionEn": "Two ships leave the same port at the same time. One sails North at $12\\text{ km/h}$ and the other East at $16\\text{ km/h}$. Find the rate at which the distance between them is increasing.",
    "questionAr": "تحركت سفينتان من نفس الميناء في نفس اللحظة، إحداهما نحو الشمال بسرعة $١٢\\text{ كم/س}$ والأخرى نحو الشرق بسرعة $١٦\\text{ كم/س}$. أوجد معدل تباعد السفينتين.",
    "optionsEn": [
      "$20\\text{ km/h}$",
      "$28\\text{ km/h}$",
      "$14\\text{ km/h}$",
      "$15\\text{ km/h}$"
    ],
    "optionsAr": [
      "$٢٠\\text{ كم/س}$",
      "$٢٨\\text{ كم/س}$",
      "$١٤\\text{ كم/س}$",
      "$١٥\\text{ كم/س}$"
    ],
    "correctAnswer": "$20\\text{ km/h}$",
    "correctIndex": 0,
    "hintEn": "Distance $z = \\sqrt{x^2 + y^2}$. Differentiate: $z \\frac{dz}{dt} = x \\frac{dx}{dt} + y \\frac{dy}{dt}$. Since velocities are constant from origin, $\\frac{dz}{dt} = \\sqrt{v_x^2 + v_y^2}$.",
    "hintAr": "المسافة $z = \\sqrt{x^٢ + y^٢}$. بما أن السرعتين ثابتتان والحركة من الأصل، فإن معدل التباعد هو $\\sqrt{v_x^٢ + v_y^٢}$.",
    "stepByStepSolutionEn": [
      "Let $x = 16t$ and $y = 12t$.",
      "Distance between them at time $t$:",
      "$$z = \\sqrt{x^2 + y^2} = \\sqrt{(16t)^2 + (12t)^2} = \\sqrt{256t^2 + 144t^2} = \\sqrt{400t^2} = 20t$$",
      "The rate of separation is:",
      "$$\\frac{dz}{dt} = 20\\text{ km/h}$$"
    ],
    "stepByStepSolutionAr": [
      "بما أن المسار متعامد: $z = \\sqrt{(١٦t)^٢ + (١٢t)^٢} = \\sqrt{٤٠٠t^٢} = ٢٠t$.",
      "معدل التباعد: $\\frac{dz}{dt} = ٢٠\\text{ كم/س}$."
    ],
    "teacherTipEn": "When moving along perpendicular directions at constant speeds from the same origin, the separation rate is constant and equals $\\sqrt{v_1^2 + v_2^2}$.",
    "teacherTipAr": "عند الحركة بسرعات ثابتة في اتجاهات متعامدة من نفس النقطة، يكون معدل التباعد ثابتاً ويساوي محصلة السرعتين $\\sqrt{v_١^٢ + v_٢^٢}$."
  },
  {
    "id": "calc_ch1_ue_14",
    "titleEn": "MoE Exercise 14: Shadow of a Moving Person",
    "titleAr": "تمرين الوزارة ١٤: معدل تغير طول ظل شخص يتحرك مبتعداً عن عمود إنارة",
    "difficulty": "hots",
    "questionEn": "A person of height $1.8\\text{ m}$ walks away from a lamp post of height $4.5\\text{ m}$ at a speed of $1.2\\text{ m/sec}$. Find the rate at which the length of the person's shadow is increasing.",
    "questionAr": "رجل طوله $١٫٨\\text{ م}$ يسير مبتعداً عن عمود إنارة ارتفاعه $٤٫٥\\text{ م}$ بسرعة $١٫٢\\text{ م/ث}$. أوجد معدل تغير طول ظل الرجل.",
    "optionsEn": [
      "$0.8\\text{ m/sec}$",
      "$1.2\\text{ m/sec}$",
      "$0.6\\text{ m/sec}$",
      "$1.5\\text{ m/sec}$"
    ],
    "optionsAr": [
      "$٠٫٨\\text{ م/ث}$",
      "$١٫٢\\text{ م/ث}$",
      "$٠٫٦\\text{ م/ث}$",
      "$١٫٥\\text{ م/ث}$"
    ],
    "correctAnswer": "$0.8\\text{ m/sec}$",
    "correctIndex": 0,
    "hintEn": "Use similar triangles: $\\frac{s}{s + x} = \\frac{1.8}{4.5} = \\frac{2}{5}$.",
    "hintAr": "استخدم تشابه المثلثات: $\\frac{s}{s + x} = \\frac{١٫٨}{٤٫٥} = \\frac{٢}{٥}$.",
    "stepByStepSolutionEn": [
      "Let $x$ be the distance from post to person, and $s$ the length of shadow.",
      "By similar triangles:",
      "$$\\frac{s}{s + x} = \\frac{1.8}{4.5} = \\frac{2}{5}$$",
      "Cross-multiply: $5s = 2s + 2x \\implies 3s = 2x \\implies s = \\frac{2}{3}x$.",
      "Differentiate with respect to time $t$:",
      "$$\\frac{ds}{dt} = \\frac{2}{3}\\frac{dx}{dt}$$",
      "Given $\\frac{dx}{dt} = 1.2\\text{ m/sec}$:",
      "$$\\frac{ds}{dt} = \\frac{2}{3}(1.2) = 0.8\\text{ m/sec}$$"
    ],
    "stepByStepSolutionAr": [
      "من تشابه المثلثات: $\\frac{s}{s + x} = \\frac{١٫٨}{٤٫٥} = \\frac{٢}{٥}$.",
      "طرفين في وسطين: $٥s = ٢s + ٢x \\implies ٣s = ٢x \\implies s = \\frac{٢}{٣}x$.",
      "بالاشتقاق بالنسبة للزمن: $\\frac{ds}{dt} = \\frac{٢}{٣} \\times ١٫٢ = ٠٫٨\\text{ م/ث}$."
    ],
    "teacherTipEn": "Rate of tip of shadow movement is $\\frac{d(x+s)}{dt} = 1.2 + 0.8 = 2.0\\text{ m/sec}$.",
    "teacherTipAr": "انتبه للفرق بين معدل تغير طول الظل $\\frac{ds}{dt}$ ومعدل حركة نهاية الظل $\\frac{d(x+s)}{dt} = ٢٫٠\\text{ م/ث}$."
  },
  {
    "id": "calc_ch1_ue_15",
    "titleEn": "MoE Exercise 15: Critical Angle for Tangent Slope",
    "titleAr": "تمرين الوزارة ١٥: زاوية ميل المماس والاشتقاق الضمني",
    "difficulty": "hots",
    "questionEn": "Find the angle made by the tangent to the curve $x^2 - xy + y^2 = 3$ with the positive $x$-axis at the point $(1, 2)$.",
    "questionAr": "أوجد قياس الزاوية التي يصنعها المماس للمنحنى $x^٢ - xy + y^٢ = ٣$ مع الاتجاه الموجب لمحور السينات عند النقطة $(١، ٢)$.",
    "optionsEn": [
      "$0^\\circ$",
      "$45^\\circ$",
      "$90^\\circ$",
      "$135^\\circ$"
    ],
    "optionsAr": [
      "$٠^\\circ$",
      "$٤٥^\\circ$",
      "$٩٠^\\circ$",
      "$١٣٥^\\circ$"
    ],
    "correctAnswer": "$0^\\circ$",
    "correctIndex": 0,
    "hintEn": "Differentiate implicitly: $2x - (y + x y') + 2y y' = 0$. Solve for $y'$ and find $\\tan\\theta$.",
    "hintAr": "اشتق ضمنياً: $٢x - y - x y' + ٢y y' = ٠$. عوض بالنقطة $(١، ٢)$ واحسب $m = \\tan\\theta$.",
    "stepByStepSolutionEn": [
      "1. Differentiate implicitly with respect to $x$:",
      "$$2x - \\left(1 \\cdot y + x \\frac{dy}{dx}\\right) + 2y \\frac{dy}{dx} = 0$$",
      "$$2x - y + (2y - x)\\frac{dy}{dx} = 0 \\implies \\frac{dy}{dx} = \\frac{y - 2x}{2y - x}$$",
      "2. Substitute point $(1, 2)$:",
      "$$\\frac{dy}{dx}\\Big|_{(1, 2)} = \\frac{2 - 2(1)}{2(2) - 1} = \\frac{0}{3} = 0$$",
      "3. The slope $m = \\tan\\theta = 0 \\implies \\theta = 0^\\circ$."
    ],
    "stepByStepSolutionAr": [
      "١. بالاشتقاق الضمني: $٢x - y - x y' + ٢y y' = ٠$.",
      "$$y' = \\frac{y - ٢x}{٢y - x}$$",
      "٢. بالتعويض بالنقطة $(١، ٢)$:",
      "$$y' = \\frac{٢ - ٢}{٤ - ١} = \\frac{٠}{٣} = ٠$$",
      "٣. بما أن الميل $\\tan\\theta = ٠$، فإن الزاوية $\\theta = ٠^\\circ$ (المماس أفقي يوازي محور السينات)."
    ],
    "teacherTipEn": "When $\\frac{dy}{dx} = 0$, the tangent is horizontal (parallel to $x$-axis) and $\\theta = 0^\\circ$.",
    "teacherTipAr": "عندما يكون الميل صفراً، فإن المماس أفقي تماماً ويصنع زاوية صفر مع محور السينات."
  }
];
