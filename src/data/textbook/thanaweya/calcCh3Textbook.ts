import type { SolvedProblem } from '../../../types/curriculum';

export const calcCh3SolvedExamples: SolvedProblem[] = [
  {
    "id": "calc_ch3_se_01",
    "titleEn": "MoE Example 1: Critical Points and Monotonicity Intervals",
    "titleAr": "مثال الوزارة ١: النقط الحرجة وفترات التزايد والتناقص",
    "difficulty": "easy",
    "questionEn": "Find the critical points and the intervals on which the function $f(x) = 2x^3 - 3x^2 - 12x + 5$ is increasing or decreasing.",
    "questionAr": "أوجد النقط الحرجة وفترات التزايد والتناقص للدالة $f(x) = 2x^3 - 3x^2 - 12x + 5$.",
    "optionsEn": [
      "Increasing on $(-\\infty, -1) \\cup (2, \\infty)$, decreasing on $(-1, 2)$",
      "Increasing on $(-1, 2)$, decreasing on $(-\\infty, -1) \\cup (2, \\infty)$",
      "Increasing on $(-\\infty, 1) \\cup (3, \\infty)$, decreasing on $(1, 3)$",
      "Decreasing everywhere"
    ],
    "optionsAr": [
      "تزايدية على $(-\\infty, -1) \\cup (2, \\infty)$ وتناقصية على $(-1, 2)$",
      "تزايدية على $(-1, 2)$ وتناقصية على $(-\\infty, -1) \\cup (2, \\infty)$",
      "تزايدية على $(-\\infty, 1) \\cup (3, \\infty)$ وتناقصية على $(1, 3)$",
      "تناقصية على مجالها بالكامل"
    ],
    "correctAnswer": "Increasing on $(-\\infty, -1) \\cup (2, \\infty)$, decreasing on $(-1, 2)$",
    "correctIndex": 0,
    "hintEn": "Find f'(x) and set it to 0 to find critical numbers, then test the sign of f'(x) on the intervals.",
    "hintAr": "احسب المشتقة الأولى $f'(x)$ وساوها بالصفر لتعيين النقط الحرجة، ثم ابحث إشارة المشتقة على خط الأعداد.",
    "stepByStepSolutionEn": [
      "1. Find the first derivative: $f'(x) = 6x^2 - 6x - 12 = 6(x^2 - x - 2) = 6(x - 2)(x + 1)$.",
      "2. Set $f'(x) = 0 \\implies x = 2$ or $x = -1$.",
      "3. Critical points are at $x = -1$ with $f(-1) = 2(-1) - 3(1) - 12(-1) + 5 = 12$, and $x = 2$ with $f(2) = 16 - 12 - 24 + 5 = -15$.",
      "4. Sign of $f'(x)$:",
      "   - On $(-\\infty, -1)$: $f'(x) > 0$ (Increasing).",
      "   - On $(-1, 2)$: $f'(x) < 0$ (Decreasing).",
      "   - On $(2, \\infty)$: $f'(x) > 0$ (Increasing)."
    ],
    "stepByStepSolutionAr": [
      "١. حساب المشتقة الأولى: $f'(x) = 6x^2 - 6x - 12 = 6(x - 2)(x + 1)$.",
      "٢. وضع $f'(x) = 0 \\implies x = 2$ أو $x = -1$.",
      "٣. النقط الحرجة هي $(-1, 12)$ و $(2, -15)$.",
      "٤. إشارة المشتقة الأولى على خط الأعداد:",
      "   - الفترة $(-\\infty, -1)$: موجبة، الدالة تزايدية.",
      "   - الفترة $(-1, 2)$: سالبة، الدالة تناقصية.",
      "   - الفترة $(2, \\infty)$: موجبة، الدالة تزايدية."
    ],
    "teacherTipEn": "Always factor the derivative completely before testing signs between the roots.",
    "teacherTipAr": "قم بتحليل المشتقة بالكامل إلى عواملها الأولية لتسهيل تحديد إشارات الفترات."
  },
  {
    "id": "calc_ch3_se_02",
    "titleEn": "MoE Example 2: Local Extrema via First Derivative Test",
    "titleAr": "مثال الوزارة ٢: القيم العظمى والصغرى المحلية باختبار المشتقة الأولى",
    "difficulty": "easy",
    "questionEn": "Determine the local maximum and minimum values of the function $f(x) = x^4 - 4x^3$.",
    "questionAr": "عين القيم العظمى والصغرى المحلية للدالة $f(x) = x^4 - 4x^3$.",
    "optionsEn": [
      "Local min at $(3, -27)$, no local max",
      "Local max at $(0, 0)$, local min at $(3, -27)$",
      "Local min at $(0, 0)$, local max at $(3, -27)$",
      "Local min at $(4, 0)$, no local max"
    ],
    "optionsAr": [
      "صغرى محلية عند $(3, -27)$، ولا توجد عظمى محلية",
      "عظمى محلية عند $(0, 0)$ وصغرى محلية عند $(3, -27)$",
      "صغرى محلية عند $(0, 0)$ وعظمى محلية عند $(3, -27)$",
      "صغرى محلية عند $(4, 0)$، ولا توجد عظمى محلية"
    ],
    "correctAnswer": "Local min at $(3, -27)$, no local max",
    "correctIndex": 0,
    "hintEn": "At x = 0, check if the derivative changes sign or remains negative on both sides.",
    "hintAr": "عند س = ٠، تحقق هل تغير المشتقة إشارتها أم تظل سالبة على الجانبين.",
    "stepByStepSolutionEn": [
      "1. First derivative: $f'(x) = 4x^3 - 12x^2 = 4x^2(x - 3)$.",
      "2. Set $f'(x) = 0 \\implies x = 0$ or $x = 3$.",
      "3. Test signs around $x = 0$:",
      "   - For $x < 0$, $4x^2 > 0$ and $x - 3 < 0 \\implies f'(x) < 0$.",
      "   - For $0 < x < 3$, $4x^2 > 0$ and $x - 3 < 0 \\implies f'(x) < 0$.",
      "   Since $f'(x)$ does not change sign across $x = 0$, there is NO local extremum at $(0, 0)$.",
      "4. Test signs around $x = 3$:",
      "   - For $x < 3$, $f'(x) < 0$.",
      "   - For $x > 3$, $f'(x) > 0$.",
      "   Therefore, at $x = 3$, $f(x)$ has a local minimum: $f(3) = 81 - 108 = -27$."
    ],
    "stepByStepSolutionAr": [
      "١. المشتقة الأولى: $f'(x) = 4x^3 - 12x^2 = 4x^2(x - 3)$.",
      "٢. وضع $f'(x) = 0 \\implies x = 0$ أو $x = 3$.",
      "٣. بحث الإشارة حول $x = 0$:",
      "   - قبل الصفر ($x < 0$): $f'(x) < 0$.",
      "   - بعد الصفر ($0 < x < 3$): $f'(x) < 0$.",
      "   بما أن المشتقة لم تغير إشارتها عند $x = 0$، إذن النقطة $(0, 0)$ ليست نقطة نهاية عظمى أو صغرى محلية.",
      "٤. بحث الإشارة حول $x = 3$:",
      "   - تتغير الإشارة من سالب إلى موجب، إذن توجد قيمة صغرى محلية هي $f(3) = -27$."
    ],
    "teacherTipEn": "A zero of the derivative is NOT necessarily an extremum if f'(x) does not change sign!",
    "teacherTipAr": "انعدام المشتقة لا يعني بالضرورة وجود نهاية محلية إذا لم تتغير إشارة المشتقة حول النقطة!"
  },
  {
    "id": "calc_ch3_se_03",
    "titleEn": "MoE Example 3: Second Derivative Test for Local Extrema",
    "titleAr": "مثال الوزارة ٣: اختبار المشتقة الثانية للقيم القصوى المحلية",
    "difficulty": "medium",
    "questionEn": "Using the second derivative test, find the local extrema of $f(x) = x + \\frac{4}{x}$ for $x \\neq 0$.",
    "questionAr": "باستخدام اختبار المشتقة الثانية، عين القيم القصوى المحلية للدالة $f(x) = x + \\frac{4}{x}$ حيث $x \\neq 0$.",
    "optionsEn": [
      "Local min at $(2, 4)$, local max at $(-2, -4)$",
      "Local max at $(2, 4)$, local min at $(-2, -4)$",
      "Local min at $(2, 4)$, no local max",
      "Local max at $(4, 5)$, local min at $(-4, -5)$"
    ],
    "optionsAr": [
      "صغرى محلية عند $(2, 4)$ وعظمى محلية عند $(-2, -4)$",
      "عظمى محلية عند $(2, 4)$ وصغرى محلية عند $(-2, -4)$",
      "صغرى محلية عند $(2, 4)$، ولا توجد عظمى محلية",
      "عظمى محلية عند $(4, 5)$ وصغرى محلية عند $(-4, -5)$"
    ],
    "correctAnswer": "Local min at $(2, 4)$, local max at $(-2, -4)$",
    "correctIndex": 0,
    "hintEn": "If f'(c) = 0 and f''(c) > 0, it is a local min; if f''(c) < 0, it is a local max.",
    "hintAr": "إذا كانت المشتقة الأولى منعدمة وكانت المشتقة الثانية موجبة فهي صغرى محلية، وإذا كانت سالبة فهي عظمى محلية.",
    "stepByStepSolutionEn": [
      "1. Domain: $\\mathbb{R} \\setminus \\{0\\}$.",
      "2. $f'(x) = 1 - \\frac{4}{x^2} = \\frac{x^2 - 4}{x^2}$.",
      "3. Set $f'(x) = 0 \\implies x^2 = 4 \\implies x = 2$ or $x = -2$.",
      "4. Find second derivative: $f''(x) = \\frac{d}{dx} [1 - 4x^{-2}] = 8x^{-3} = \\frac{8}{x^3}$.",
      "5. Evaluate $f''(x)$ at critical points:",
      "   - At $x = 2$: $f''(2) = \\frac{8}{8} = 1 > 0 \\implies$ Local minimum at $(2, 4)$.",
      "   - At $x = -2$: $f''(-2) = \\frac{8}{-8} = -1 < 0 \\implies$ Local maximum at $(-2, -4)$."
    ],
    "stepByStepSolutionAr": [
      "١. المجال: $\\mathbb{R} - \\{0\\}$.",
      "٢. المشتقة الأولى: $f'(x) = 1 - \\frac{4}{x^2}$.",
      "٣. بوضع $f'(x) = 0 \\implies x^2 = 4 \\implies x = 2$ أو $x = -2$.",
      "٤. المشتقة الثانية: $f''(x) = \\frac{8}{x^3}$.",
      "٥. اختبار النقط الحرجة:",
      "   - عند $x = 2$: $f''(2) = 1 > 0$، إذن توجد صغرى محلية قيمتها $f(2) = 4$.",
      "   - عند $x = -2$: $f''(-2) = -1 < 0$، إذن توجد عظمى محلية قيمتها $f(-2) = -4$."
    ],
    "teacherTipEn": "Notice that here the local maximum value (-4) is numerically smaller than the local minimum value (+4) because of the vertical asymptote at x = 0!",
    "teacherTipAr": "لاحظ أن القيمة العظمى المحلية (-٤) أصغر من القيمة الصغرى المحلية (+٤) لوجود خط تقارب رأسي عند س = ٠!"
  },
  {
    "id": "calc_ch3_se_04",
    "titleEn": "MoE Example 4: Intervals of Concavity and Points of Inflection",
    "titleAr": "مثال الوزارة ٤: فترات التحدب ونقط الانقلاب",
    "difficulty": "medium",
    "questionEn": "Find the intervals of concavity (upward and downward) and the coordinates of the inflection point for $f(x) = x^3 - 6x^2 + 9x + 1$.",
    "questionAr": "أوجد فترات التحدب لأعلى ولأسفل وإحداثيات نقطة الانقلاب لمنحنى الدالة $f(x) = x^3 - 6x^2 + 9x + 1$.",
    "optionsEn": [
      "Concave down on $(-\\infty, 2)$, concave up on $(2, \\infty)$, inflection at $(2, 3)$",
      "Concave up on $(-\\infty, 2)$, concave down on $(2, \\infty)$, inflection at $(2, 3)$",
      "Concave down on $(-\\infty, 3)$, concave up on $(3, \\infty)$, inflection at $(3, 1)$",
      "Concave up on all $\\mathbb{R}$, no inflection point"
    ],
    "optionsAr": [
      "محدب لأعلى على $(-\\infty, 2)$ ومحدب لأسفل على $(2, \\infty)$ ونقطة الانقلاب هي $(2, 3)$",
      "محدب لأسفل على $(-\\infty, 2)$ ومحدب لأعلى على $(2, \\infty)$ ونقطة الانقلاب هي $(2, 3)$",
      "محدب لأعلى على $(-\\infty, 3)$ ومحدب لأسفل على $(3, \\infty)$ ونقطة الانقلاب هي $(3, 1)$",
      "محدب لأسفل دائماً ولا توجد نقطة انقلاب"
    ],
    "correctAnswer": "Concave down on $(-\\infty, 2)$, concave up on $(2, \\infty)$, inflection at $(2, 3)$",
    "correctIndex": 0,
    "hintEn": "Inflection occurs where f''(x) = 0 and f''(x) changes sign. f''(x) > 0 means concave up.",
    "hintAr": "نقطة الانقلاب تحدث عندما $f''(x) = 0$ مع تغير إشارة المشتقة الثانية حولها. $f''(x) > 0$ يعني تحدب لأسفل (مقعر لأعلى).",
    "stepByStepSolutionEn": [
      "1. First derivative: $f'(x) = 3x^2 - 12x + 9$.",
      "2. Second derivative: $f''(x) = 6x - 12$.",
      "3. Set $f''(x) = 0 \\implies 6x = 12 \\implies x = 2$.",
      "4. Sign of $f''(x)$:",
      "   - For $x < 2$: $f''(x) < 0 \\implies$ Concave down (تحدب لأعلى).",
      "   - For $x > 2$: $f''(x) > 0 \\implies$ Concave up (تحدب لأسفل).",
      "5. Since the concavity changes at $x = 2$, $(2, f(2))$ is a point of inflection.",
      "   $f(2) = 2^3 - 6(2^2) + 9(2) + 1 = 8 - 24 + 18 + 1 = 3$. Point is $(2, 3)$."
    ],
    "stepByStepSolutionAr": [
      "١. المشتقة الأولى: $f'(x) = 3x^2 - 12x + 9$.",
      "٢. المشتقة الثانية: $f''(x) = 6x - 12$.",
      "٣. وضع $f''(x) = 0 \\implies x = 2$.",
      "٤. إشارة $f''(x)$:",
      "   - عندما $x < 2$: المشتقة الثانية سالبة، المنحنى محدب لأعلى.",
      "   - عندما $x > 2$: المشتقة الثانية موجبة، المنحنى محدب لأسفل.",
      "٥. بما أن التحدب تغير عند $x = 2$، إذن النقطة $(2, f(2)) = (2, 3)$ هي نقطة انقلاب للمنحنى."
    ],
    "teacherTipEn": "Remember: in Egyptian Arabic curriculum conventions, 'concave up' is called 'محدب لأسفل' and 'concave down' is called 'محدب لأعلى'.",
    "teacherTipAr": "تذكر الاصطلاح الوزاري: المشتقة الثانية الموجبة تعني المنحنى مفتوح لأعلى أي محدب لأسفل."
  },
  {
    "id": "calc_ch3_se_05",
    "titleEn": "MoE Example 5: Inflection Point of a Cubic Power Function",
    "titleAr": "مثال الوزارة ٥: نقطة انقلاب دالة القوة التكعيبية",
    "difficulty": "medium",
    "questionEn": "Find the point of inflection of the curve $y = (x - 2)^3 + 4$.",
    "questionAr": "عين نقطة الانقلاب لمنحنى الدالة $y = (x - 2)^3 + 4$.",
    "optionsEn": [
      "$(2, 4)$",
      "$(0, -4)$",
      "$(2, 0)$",
      "$(4, 2)$"
    ],
    "optionsAr": [
      "$(2, 4)$",
      "$(0, -4)$",
      "$(2, 0)$",
      "$(4, 2)$"
    ],
    "correctAnswer": "$(2, 4)$",
    "correctIndex": 0,
    "hintEn": "Compute y' and y'', solve y'' = 0, and confirm the change of sign across x = 2.",
    "hintAr": "احسب المشتقة الأولى والثانية، وساوِ المشتقة الثانية بالصفر وتأكد من تغير الإشارة.",
    "stepByStepSolutionEn": [
      "1. $y' = 3(x - 2)^2$.",
      "2. $y'' = 6(x - 2)$.",
      "3. Setting $y'' = 0 \\implies x = 2$.",
      "4. For $x < 2$, $y'' < 0$; for $x > 2$, $y'' > 0$.",
      "5. The curve changes concavity across $x = 2$, and $y(2) = (0)^3 + 4 = 4$.",
      "   Therefore, $(2, 4)$ is the point of inflection."
    ],
    "stepByStepSolutionAr": [
      "١. $y' = 3(x - 2)^2$.",
      "٢. $y'' = 6(x - 2)$.",
      "٣. بوضع $y'' = 0 \\implies x = 2$.",
      "٤. قبل $x = 2$ تكون $y'' < 0$ وبعدها تكون $y'' > 0$.",
      "٥. بما أن التحدب تغير، والنقطة تقع على المنحنى وإحداثيها الصادي هو $y(2) = 4$، فالنقطة هي $(2, 4)$."
    ],
    "teacherTipEn": "Notice that at (2, 4), the tangent line is horizontal (y' = 0) and cuts through the curve!",
    "teacherTipAr": "لاحظ أن المماس عند نقطة الانقلاب أفقي وميله صفر ويخترق المنحنى."
  },
  {
    "id": "calc_ch3_se_06",
    "titleEn": "MoE Example 6: Absolute Extrema on a Closed Interval",
    "titleAr": "مثال الوزارة ٦: القيم العظمى والصغرى المطلقة على فترة مغلقة",
    "difficulty": "medium",
    "questionEn": "Find the absolute maximum and absolute minimum values of $f(x) = 2x^3 - 9x^2 + 12x - 3$ on the closed interval $[0, 3]$.",
    "questionAr": "أوجد القيمتين العظمى والصغرى المطلقتين للدالة $f(x) = 2x^3 - 9x^2 + 12x - 3$ على الفترة المغلقة $[0, 3]$.",
    "optionsEn": [
      "Absolute max = 6 (at x = 3), Absolute min = -3 (at x = 0)",
      "Absolute max = 2 (at x = 1), Absolute min = 1 (at x = 2)",
      "Absolute max = 6 (at x = 3), Absolute min = 1 (at x = 2)",
      "Absolute max = 12 (at x = 2), Absolute min = -3 (at x = 0)"
    ],
    "optionsAr": [
      "عظمى مطلقة = 6 (عند x = 3)، وصغرى مطلقة = -3 (عند x = 0)",
      "عظمى مطلقة = 2 (عند x = 1)، وصغرى مطلقة = 1 (عند x = 2)",
      "عظمى مطلقة = 6 (عند x = 3)، وصغرى مطلقة = 1 (عند x = 2)",
      "عظمى مطلقة = 12 (عند x = 2)، وصغرى مطلقة = -3 (عند x = 0)"
    ],
    "correctAnswer": "Absolute max = 6 (at x = 3), Absolute min = -3 (at x = 0)",
    "correctIndex": 0,
    "hintEn": "Evaluate f(x) at critical points inside (0, 3) AND at both endpoints x = 0 and x = 3.",
    "hintAr": "احسب قيم الدالة عند النقط الحرجة داخل الفترة المفتوحة، وعند طرفي الفترة المغلقة س = ٠ وس = ٣.",
    "stepByStepSolutionEn": [
      "1. Find critical points: $f'(x) = 6x^2 - 18x + 12 = 6(x^2 - 3x + 2) = 6(x - 1)(x - 2)$.",
      "2. Set $f'(x) = 0 \\implies x = 1$ and $x = 2$. Both lie inside $(0, 3)$.",
      "3. Evaluate $f(x)$ at critical points and endpoints:",
      "   - $f(0) = -3$",
      "   - $f(1) = 2(1) - 9(1) + 12(1) - 3 = 2$",
      "   - $f(2) = 2(8) - 9(4) + 12(2) - 3 = 16 - 36 + 24 - 3 = 1$",
      "   - $f(3) = 2(27) - 9(9) + 12(3) - 3 = 54 - 81 + 36 - 3 = 6$",
      "4. Compare all values:",
      "   - Largest value is $6$ (at $x = 3$) $\\implies$ Absolute Maximum = $6$.",
      "   - Smallest value is $-3$ (at $x = 0$) $\\implies$ Absolute Minimum = $-3$."
    ],
    "stepByStepSolutionAr": [
      "١. المشتقة الأولى: $f'(x) = 6(x - 1)(x - 2)$.",
      "٢. النقط الحرجة داخل الفترة: $x = 1$ و $x = 2$.",
      "٣. حساب قيم الدالة عند النقط الحرجة وطرفي الفترة:",
      "   - $f(0) = -3$",
      "   - $f(1) = 2$",
      "   - $f(2) = 1$",
      "   - $f(3) = 6$",
      "٤. المقارنة:",
      "   - القيمة العظمى المطلقة هي 6 عند $x = 3$.",
      "   - القيمة الصغرى المطلقة هي -3 عند $x = 0$."
    ],
    "teacherTipEn": "On closed intervals, never rely solely on derivatives; endpoints often yield the global extrema!",
    "teacherTipAr": "على الفترات المغلقة، لا تكتفِ بالنقط الحرجة الداخلية، فكثيراً ما تتحقق القيم المطلقة عند الأطراف!"
  },
  {
    "id": "calc_ch3_se_07",
    "titleEn": "MoE Example 7: Optimization - Maximum Product of Two Numbers",
    "titleAr": "مثال الوزارة ٧: تطبيقات القيم العظمى - أكبر حاصل ضرب لعددين",
    "difficulty": "medium",
    "questionEn": "Divide the positive number 20 into two positive parts such that their product is maximum. What are the two parts and the maximum product?",
    "questionAr": "اقسم العدد الموجب ٢٠ إلى جزأين موجبين بحيث يكون حاصل ضربهما أكبر ما يمكن. ما هما الجزآن وما حاصل الضرب الأكبر؟",
    "optionsEn": [
      "The parts are 10 and 10; maximum product is 100",
      "The parts are 8 and 12; maximum product is 96",
      "The parts are 5 and 15; maximum product is 75",
      "The parts are 9 and 11; maximum product is 99"
    ],
    "optionsAr": [
      "العددان هما ١٠ و ١٠، وأكبر حاصل ضرب هو ١٠٠",
      "العددان هما ٨ و ١٢، وأكبر حاصل ضرب هو ٩٦",
      "العددان هما ٥ و ١٥، وأكبر حاصل ضرب هو ٧٥",
      "العددان هما ٩ و ١١، وأكبر حاصل ضرب هو ٩٩"
    ],
    "correctAnswer": "The parts are 10 and 10; maximum product is 100",
    "correctIndex": 0,
    "hintEn": "Let the two parts be x and 20 - x. Maximize P(x) = x(20 - x).",
    "hintAr": "افرض الجزأين س و (٢٠ - س). كون دالة حاصل الضرب ص(س) = س(٢٠ - س) واشتقها.",
    "stepByStepSolutionEn": [
      "1. Let the first part be $x$ ($0 < x < 20$), then the second part is $20 - x$.",
      "2. The product function to maximize is: $P(x) = x(20 - x) = 20x - x^2$.",
      "3. Differentiate with respect to $x$: $P'(x) = 20 - 2x$.",
      "4. Set $P'(x) = 0 \\implies 20 - 2x = 0 \\implies x = 10$.",
      "5. Verify maximum: $P''(x) = -2 < 0$, which confirms a local and absolute maximum.",
      "6. The two parts are $x = 10$ and $20 - 10 = 10$, and the maximum product is $10 \\times 10 = 100$."
    ],
    "stepByStepSolutionAr": [
      "١. نفرض أحد الجزأين $x$، فيكون الآخر $20 - x$.",
      "٢. دالة حاصل الضرب: $P(x) = x(20 - x) = 20x - x^2$.",
      "٣. المشتقة: $P'(x) = 20 - 2x$.",
      "٤. بوضع المشتقة بصفر: $20 - 2x = 0 \\implies x = 10$.",
      "٥. اختبار المشتقة الثانية: $P''(x) = -2 < 0$ (نهاية عظمى).",
      "٦. العددان هما ١٠ و ١٠، وأكبر حاصل ضرب هو $10 \\times 10 = 100$."
    ],
    "teacherTipEn": "For a fixed sum, two numbers produce the maximum product when they are equal.",
    "teacherTipAr": "لأي مجموع ثابت، يعطي العددان أكبر حاصل ضرب عندما يتساويان."
  },
  {
    "id": "calc_ch3_se_08",
    "titleEn": "MoE Example 8: Maximum Rectangular Area Inscribed in Semicircle",
    "titleAr": "مثال الوزارة ٨: أكبر مساحة لمستطيل مرسوم داخل نصف دائرة",
    "difficulty": "hots",
    "questionEn": "Find the dimensions of the rectangle of maximum area that can be inscribed in a semicircle of radius $R = 10\\text{ cm}$, with one side lying on the diameter.",
    "questionAr": "أوجد أبعاد مستطيل ذي أكبر مساحة يمكن رسمه داخل نصف دائرة نصف قطرها $R = 10\\text{ سم}$، بحيث تنطبق إحدى قواعده على قطر نصف الدائرة.",
    "optionsEn": [
      "Length $= 10\\sqrt{2}\\text{ cm}$, Width $= 5\\sqrt{2}\\text{ cm}$",
      "Length $= 10\\text{ cm}$, Width $= 5\\text{ cm}$",
      "Length $= 12\\text{ cm}$, Width $= 8\\text{ cm}$",
      "Length $= 14\\text{ cm}$, Width $= 7\\text{ cm}$"
    ],
    "optionsAr": [
      "الطول $= 10\\sqrt{2}\\text{ سم}$، العرض $= 5\\sqrt{2}\\text{ سم}$",
      "الطول $= 10\\text{ سم}$، العرض $= 5\\text{ سم}$",
      "الطول $= 12\\text{ سم}$، العرض $= 8\\text{ سم}$",
      "الطول $= 14\\text{ سم}$، العرض $= 7\\text{ سم}$"
    ],
    "correctAnswer": "Length $= 10\\sqrt{2}\\text{ cm}$, Width $= 5\\sqrt{2}\\text{ cm}$",
    "correctIndex": 0,
    "hintEn": "Place the semicircle in the Cartesian plane: x^2 + y^2 = 100 with y > 0. Area = 2xy.",
    "hintAr": "ضع نصف الدائرة في المستوى الإحداثي: $x^2 + y^2 = 100$. مساحة المستطيل تساوي $A = 2xy$.",
    "stepByStepSolutionEn": [
      "1. By symmetry with respect to the y-axis, the vertices on the diameter are $(-x, 0)$ and $(x, 0)$, so length $= 2x$.",
      "2. The upper vertices lie on the semicircle $x^2 + y^2 = R^2 = 100 \\implies y = \\sqrt{100 - x^2}$.",
      "3. Area function: $A(x) = 2x y = 2x \\sqrt{100 - x^2}$.",
      "4. Maximize $A^2 = 4x^2(100 - x^2) = 400x^2 - 4x^4$:",
      "   Let $u = x^2$: $g(u) = 400u - 4u^2$.",
      "   $g'(u) = 400 - 8u = 0 \\implies u = 50 \\implies x = \\sqrt{50} = 5\\sqrt{2}$.",
      "5. Find width $y$: $y = \\sqrt{100 - 50} = \\sqrt{50} = 5\\sqrt{2}\\text{ cm}$.",
      "6. Find total length: $2x = 2(5\\sqrt{2}) = 10\\sqrt{2}\\text{ cm}$."
    ],
    "stepByStepSolutionAr": [
      "١. بالتماثل حول محور الصادات، يمتد المستطيل من $-x$ إلى $x$، فالطول هو $2x$ والارتفاع هو $y$.",
      "٢. الرأسان العلويان يقعان على نصف الدائرة: $x^2 + y^2 = 100 \\implies y = \\sqrt{100 - x^2}$.",
      "٣. دالة المساحة: $A = 2x\\sqrt{100 - x^2}$.",
      "٤. لتعظيم المساحة، نعظم مربعها: $A^2 = 4x^2(100 - x^2) = 400x^2 - 4x^4$.",
      "٥. المشتقة بالنسبة لـ $x^2$: $400 - 8x^2 = 0 \\implies x^2 = 50 \\implies x = 5\\sqrt{2}$.",
      "٦. الأبعاد: الطول $= 2x = 10\\sqrt{2}\\text{ سم}$، والعرض $= y = 5\\sqrt{2}\\text{ سم}$ (أي أن الطول ضعف العرض)."
    ],
    "teacherTipEn": "Maximizing the square of a positive quantity A^2 eliminates radicals and simplifies differentiation enormously!",
    "teacherTipAr": "تعظيم مربع المساحة الموجبة يخلصك من الجذور التربيعية ويسهل الاشتقاق بشكل مذهل!"
  },
  {
    "id": "calc_ch3_se_09",
    "titleEn": "MoE Example 9: Minimum Surface Area of a Cylindrical Can",
    "titleAr": "مثال الوزارة ٩: أقل مساحة سطحية لعلبة أسطوانية ذات سعة محددة",
    "difficulty": "hots",
    "questionEn": "A closed right circular cylinder has a fixed volume of $V = 54\\pi\\text{ cm}^3$. Find its radius $r$ and height $h$ that minimize the total surface area.",
    "questionAr": "أسطوانة دائرية قائمة مغلقة حجمها ثابت ويساوي $54\\pi\\text{ سم}^3$. أوجد نصف قطر قاعدتها $r$ وارتفاعها $h$ بحيث تكون مساحتها الكلية أقل ما يمكن.",
    "optionsEn": [
      "$r = 3\\text{ cm}$ and $h = 6\\text{ cm}$",
      "$r = 6\\text{ cm}$ and $h = 3\\text{ cm}$",
      "$r = 3\\text{ cm}$ and $h = 3\\text{ cm}$",
      "$r = 4\\text{ cm}$ and $h = 5\\text{ cm}$"
    ],
    "optionsAr": [
      "$r = 3\\text{ سم}$ و $h = 6\\text{ سم}$",
      "$r = 6\\text{ سم}$ و $h = 3\\text{ سم}$",
      "$r = 3\\text{ سم}$ و $h = 3\\text{ سم}$",
      "$r = 4\\text{ سم}$ و $h = 5\\text{ سم}$"
    ],
    "correctAnswer": "$r = 3\\text{ cm}$ and $h = 6\\text{ cm}$",
    "correctIndex": 0,
    "hintEn": "Volume V = pi r^2 h = 54 pi => h = 54 / r^2. Total Area S = 2 pi r^2 + 2 pi r h.",
    "hintAr": "الحجم = $\\pi r^2 h = 54\\pi \\implies h = \\frac{54}{r^2}$. المساحة الكلية $S = 2\\pi r^2 + 2\\pi r h$.",
    "stepByStepSolutionEn": [
      "1. Volume equation: $V = \\pi r^2 h = 54\\pi \\implies h = \\frac{54}{r^2}$.",
      "2. Total surface area of closed cylinder: $S(r) = 2\\pi r^2 + 2\\pi r h = 2\\pi r^2 + 2\\pi r \\left(\\frac{54}{r^2}\\right) = 2\\pi \\left( r^2 + \\frac{54}{r} \\right)$.",
      "3. Differentiate with respect to $r$:",
      "   $S'(r) = 2\\pi \\left( 2r - \\frac{54}{r^2} \\right)$.",
      "4. Set $S'(r) = 0 \\implies 2r = \\frac{54}{r^2} \\implies 2r^3 = 54 \\implies r^3 = 27 \\implies r = 3\\text{ cm}$.",
      "5. Find height: $h = \\frac{54}{3^2} = \\frac{54}{9} = 6\\text{ cm}$.",
      "6. Check second derivative: $S''(r) = 2\\pi \\left( 2 + \\frac{108}{r^3} \\right) > 0$ for $r = 3$, confirming minimum area."
    ],
    "stepByStepSolutionAr": [
      "١. قانون الحجم: $\\pi r^2 h = 54\\pi \\implies h = \\frac{54}{r^2}$.",
      "٢. المساحة الكلية: $S = 2\\pi r^2 + 2\\pi r h = 2\\pi \\left( r^2 + \\frac{54}{r} \\right)$.",
      "٣. الاشتقاق بالنسبة لنصف القطر $r$:",
      "   $S'(r) = 2\\pi \\left( 2r - \\frac{54}{r^2} \\right)$.",
      "٤. بوضع المشتقة بصفر: $2r^3 = 54 \\implies r^3 = 27 \\implies r = 3\\text{ سم}$.",
      "٥. حساب الارتفاع: $h = \\frac{54}{9} = 6\\text{ سم}$ (أي أن الارتفاع يساوي القطر بالكامل $h = 2r$!)."
    ],
    "teacherTipEn": "For any closed cylinder with minimum surface area for a given volume, height always equals diameter: h = 2r.",
    "teacherTipAr": "قاعدة ذهبية: الأسطوانة المغلقة ذات أقل مساحة سطحية لحجم معين يكون ارتفاعها دائماً مساوياً لقطر قاعدتها: ع = ٢ نق."
  },
  {
    "id": "calc_ch3_se_10",
    "titleEn": "MoE Example 10: Curve Sketching of a Rational Function",
    "titleAr": "مثال الوزارة ١٠: رسم منحنى دالة كسرية",
    "difficulty": "hots",
    "questionEn": "For the curve $y = \\frac{x^2 - 1}{x^2 + 1}$, find its horizontal asymptote, extrema, and behavior as $x \\to \\pm\\infty$.",
    "questionAr": "لمنحنى الدالة $y = \\frac{x^2 - 1}{x^2 + 1}$، أوجد خط التقارب الأفقي ونقط النهايات وسلوك الدالة عندما $x \\to \\pm\\infty$.",
    "optionsEn": [
      "Horizontal asymptote $y = 1$, absolute minimum at $(0, -1)$, symmetric about y-axis",
      "Horizontal asymptote $y = 0$, absolute minimum at $(0, -1)$, symmetric about origin",
      "Horizontal asymptote $y = 1$, absolute maximum at $(0, 1)$, symmetric about y-axis",
      "Vertical asymptote $x = 1$, no horizontal asymptote"
    ],
    "optionsAr": [
      "خط تقارب أفقي $y = 1$، وقيمة صغرى مطلقة عند $(0, -1)$، والمنحنى متماثل حول محور الصادات",
      "خط تقارب أفقي $y = 0$، وقيمة صغرى مطلقة عند $(0, -1)$، ومتماثل حول نقطة الأصل",
      "خط تقارب أفقي $y = 1$، وقيمة عظمى مطلقة عند $(0, 1)$، ومتماثل حول محور الصادات",
      "خط تقارب رأسي $x = 1$، ولا يوجد خط تقارب أفقي"
    ],
    "correctAnswer": "Horizontal asymptote $y = 1$, absolute minimum at $(0, -1)$, symmetric about y-axis",
    "correctIndex": 0,
    "hintEn": "The denominator x^2 + 1 has no real roots (no vertical asymptote). lim_{x->inf} f(x) = 1. f(-x) = f(x).",
    "hintAr": "المقام لا ينعدم أبداً في ح، ونهاية الدالة عند اللانهاية تساوي ١، والدالة زوجية متماثلة حول محور الصادات.",
    "stepByStepSolutionEn": [
      "1. Symmetry: $f(-x) = \\frac{(-x)^2 - 1}{(-x)^2 + 1} = \\frac{x^2 - 1}{x^2 + 1} = f(x)$, so $f$ is an even function (symmetric about y-axis).",
      "2. Asymptotes: $\\lim_{x \\to \\pm\\infty} \\frac{x^2 - 1}{x^2 + 1} = 1$, so $y = 1$ is a horizontal asymptote. No vertical asymptotes since $x^2 + 1 > 0$.",
      "3. First derivative: $f'(x) = \\frac{2x(x^2 + 1) - 2x(x^2 - 1)}{(x^2 + 1)^2} = \\frac{4x}{(x^2 + 1)^2}$.",
      "4. Critical point: $f'(x) = 0 \\implies x = 0$, where $y(0) = -1$.",
      "5. For $x < 0$, $f'(x) < 0$ (decreasing); for $x > 0$, $f'(x) > 0$ (increasing). Thus $(0, -1)$ is an absolute minimum."
    ],
    "stepByStepSolutionAr": [
      "١. التماثل: الدالة زوجية $f(-x) = f(x)$، فالمنحنى متماثل تماماً حول محور الصادات.",
      "٢. خطوط التقارب: $\\lim_{x \\to \\pm\\infty} f(x) = 1$، إذن المستقيم $y = 1$ خط تقارب أفقي، ولا توجد خطوط رأسية لأن المقام لا ينعدم.",
      "٣. المشتقة الأولى: $f'(x) = \\frac{4x}{(x^2 + 1)^2}$.",
      "٤. النقطة الحرجة: $x = 0$، وقيمة الدالة عندها هي $f(0) = -1$.",
      "٥. إشارة المشتقة: تناقصية قبل الصفر وتزايدية بعده، إذن النقطة $(0, -1)$ قيمة صغرى مطلقة ومحلية."
    ],
    "teacherTipEn": "Recognizing symmetry (even/odd) halves the work required for curve sketching!",
    "teacherTipAr": "ملاحظة التماثل (دالة زوجية أو فردية) يوفر نصف مجهود دراسة المنحنى ورسمه!"
  }
];

export const calcCh3Exercises: SolvedProblem[] = [
  {
    "id": "calc_ch3_ex_01",
    "titleEn": "Unit Exercise 1: Finding Critical Points of Polynomial",
    "titleAr": "تمرين الوحدة ١: تعيين النقط الحرجة لكثيرة حدود",
    "difficulty": "easy",
    "questionEn": "Find the critical points of the function $f(x) = x^3 - 3x + 2$.",
    "questionAr": "عين النقط الحرجة للدالة $f(x) = x^3 - 3x + 2$.",
    "optionsEn": [
      "$(-1, 4)$ and $(1, 0)$",
      "$(1, 4)$ and $(-1, 0)$",
      "$(0, 2)$ and $(3, 20)$",
      "$(-3, -16)$ and $(3, 20)$"
    ],
    "optionsAr": [
      "$(-1, 4)$ و $(1, 0)$",
      "$(1, 4)$ و $(-1, 0)$",
      "$(0, 2)$ و $(3, 20)$",
      "$(-3, -16)$ و $(3, 20)$"
    ],
    "correctAnswer": "$(-1, 4)$ and $(1, 0)$",
    "correctIndex": 0,
    "hintEn": "Set f'(x) = 3x^2 - 3 = 0.",
    "hintAr": "ضع المشتقة الأولى $3x^2 - 3 = 0$.",
    "stepByStepSolutionEn": [
      "1. $f'(x) = 3x^2 - 3 = 3(x-1)(x+1) = 0 \\implies x = 1$ or $x = -1$.",
      "2. $f(1) = 1 - 3 + 2 = 0$, $f(-1) = -1 + 3 + 2 = 4$."
    ],
    "stepByStepSolutionAr": [
      "١. المشتقة: $f'(x) = 3(x^2 - 1) = 0 \\implies x = \\pm 1$.",
      "٢. النقط الحرجة: $(1, 0)$ و $(-1, 4)$."
    ],
    "teacherTipEn": "Official MoE unit exercise testing foundational mastery.",
    "teacherTipAr": "تمرين كتاب الوزارة الرسمي لقياس التمكن المفاهيمي."
  },
  {
    "id": "calc_ch3_ex_02",
    "titleEn": "Unit Exercise 2: Monotonicity of Cubic Function",
    "titleAr": "تمرين الوحدة ٢: تزايد وتناقص دالة تكعيبية",
    "difficulty": "easy",
    "questionEn": "On which interval is the function $f(x) = 12x - x^3$ strictly increasing?",
    "questionAr": "في أي فترة تكون الدالة $f(x) = 12x - x^3$ تزايدية تماماً؟",
    "optionsEn": [
      "$(-2, 2)$",
      "$(-\\infty, -2)$",
      "$(2, \\infty)$",
      "$(-\\infty, \\infty)$"
    ],
    "optionsAr": [
      "$(-2, 2)$",
      "$(-\\infty, -2)$",
      "$(2, \\infty)$",
      "$(-\\infty, \\infty)$"
    ],
    "correctAnswer": "$(-2, 2)$",
    "correctIndex": 0,
    "hintEn": "Solve f'(x) = 12 - 3x^2 > 0.",
    "hintAr": "حل المتباينة $f'(x) = 12 - 3x^2 > 0$.",
    "stepByStepSolutionEn": [
      "1. $f'(x) = 12 - 3x^2 = 3(4 - x^2)$.",
      "2. $f'(x) > 0 \\iff 4 - x^2 > 0 \\iff x^2 < 4 \\iff -2 < x < 2$."
    ],
    "stepByStepSolutionAr": [
      "١. $f'(x) = 12 - 3x^2 = 3(4 - x^2)$.",
      "٢. تكون موجبة عندما $x^2 < 4$ أي في الفترة $(-2, 2)$."
    ],
    "teacherTipEn": "Official MoE unit exercise testing foundational mastery.",
    "teacherTipAr": "تمرين كتاب الوزارة الرسمي لقياس التمكن المفاهيمي."
  },
  {
    "id": "calc_ch3_ex_03",
    "titleEn": "Unit Exercise 3: Local Extrema of Quadratic-Exponential Function",
    "titleAr": "تمرين الوحدة ٣: القيم العظمى والصغرى لدالة أسية",
    "difficulty": "medium",
    "questionEn": "Find the local extremum of $f(x) = x e^{-x}$.",
    "questionAr": "عين القيمة القصوى المحلية للدالة $f(x) = x e^{-x}$.",
    "optionsEn": [
      "Local maximum value is $\\frac{1}{e}$ at $x = 1$",
      "Local minimum value is $\\frac{1}{e}$ at $x = 1$",
      "Local maximum value is $e$ at $x = -1$",
      "Local minimum value is $0$ at $x = 0$"
    ],
    "optionsAr": [
      "عظمى محلية قيمتها $\\frac{1}{e}$ عند $x = 1$",
      "صغرى محلية قيمتها $\\frac{1}{e}$ عند $x = 1$",
      "عظمى محلية قيمتها $e$ عند $x = -1$",
      "صغرى محلية قيمتها $0$ عند $x = 0$"
    ],
    "correctAnswer": "Local maximum value is $\\frac{1}{e}$ at $x = 1$",
    "correctIndex": 0,
    "hintEn": "Product rule: f'(x) = e^(-x) - x e^(-x) = e^(-x)(1 - x).",
    "hintAr": "مشتقة حاصل ضرب: $f'(x) = e^{-x}(1 - x)$.",
    "stepByStepSolutionEn": [
      "1. $f'(x) = (1 - x)e^{-x} = 0 \\implies x = 1$ (since $e^{-x} \\neq 0$).",
      "2. $f'(x) > 0$ for $x < 1$ and $f'(x) < 0$ for $x > 1$.",
      "3. Local maximum at $x = 1$ with value $f(1) = \\frac{1}{e}$."
    ],
    "stepByStepSolutionAr": [
      "١. $f'(x) = (1 - x)e^{-x} = 0 \\implies x = 1$.",
      "٢. تتغير الإشارة من موجب إلى سالب حول ١، إذن عظمى محلية قيمتها $\\frac{1}{e}$."
    ],
    "teacherTipEn": "Official MoE unit exercise testing foundational mastery.",
    "teacherTipAr": "تمرين كتاب الوزارة الرسمي لقياس التمكن المفاهيمي."
  },
  {
    "id": "calc_ch3_ex_04",
    "titleEn": "Unit Exercise 4: Point of Inflection for Quartic Function",
    "titleAr": "تمرين الوحدة ٤: نقطة الانقلاب لدالة من الدرجة الرابعة",
    "difficulty": "medium",
    "questionEn": "Find the points of inflection of the curve $f(x) = x^4 - 6x^2$.",
    "questionAr": "أوجد نقط الانقلاب لمنحنى الدالة $f(x) = x^4 - 6x^2$.",
    "optionsEn": [
      "$(1, -5)$ and $(-1, -5)$",
      "$(0, 0)$ only",
      "$(\\sqrt{3}, -9)$ and $(-\\sqrt{3}, -9)$",
      "$(2, -8)$ and $(-2, -8)$"
    ],
    "optionsAr": [
      "$(1, -5)$ و $(-1, -5)$",
      "$(0, 0)$ فقط",
      "$(\\sqrt{3}, -9)$ و $(-\\sqrt{3}, -9)$",
      "$(2, -8)$ و $(-2, -8)$"
    ],
    "correctAnswer": "$(1, -5)$ and $(-1, -5)$",
    "correctIndex": 0,
    "hintEn": "Compute f''(x) = 12x^2 - 12 = 0.",
    "hintAr": "احسب المشتقة الثانية $f''(x) = 12x^2 - 12 = 0$.",
    "stepByStepSolutionEn": [
      "1. $f'(x) = 4x^3 - 12x$, $f''(x) = 12x^2 - 12 = 12(x^2 - 1)$.",
      "2. $f''(x) = 0 \\implies x = \\pm 1$.",
      "3. $f(1) = -5$, $f(-1) = -5$. Concavity changes at both points."
    ],
    "stepByStepSolutionAr": [
      "١. $f''(x) = 12(x^2 - 1) = 0 \\implies x = \\pm 1$.",
      "٢. التحدب يتغير عند النقطتين، وإحداثياتهما هي $(1, -5)$ و $(-1, -5)$."
    ],
    "teacherTipEn": "Official MoE unit exercise testing foundational mastery.",
    "teacherTipAr": "تمرين كتاب الوزارة الرسمي لقياس التمكن المفاهيمي."
  },
  {
    "id": "calc_ch3_ex_05",
    "titleEn": "Unit Exercise 5: Parameter for Given Inflection Point",
    "titleAr": "تمرين الوحدة ٥: إيجاد مجهول بمعلومية نقطة الانقلاب",
    "difficulty": "medium",
    "questionEn": "If the curve $y = ax^3 + bx^2$ has a point of inflection at $(1, 2)$, find the values of $a$ and $b$.",
    "questionAr": "إذا كان لمنحنى الدالة $y = ax^3 + bx^2$ نقطة انقلاب عند $(1, 2)$، فأوجد قيمتي $a$ و $b$.",
    "optionsEn": [
      "$a = -1, b = 3$",
      "$a = 1, b = 1$",
      "$a = 2, b = 0$",
      "$a = -2, b = 4$"
    ],
    "optionsAr": [
      "$a = -1, b = 3$",
      "$a = 1, b = 1$",
      "$a = 2, b = 0$",
      "$a = -2, b = 4$"
    ],
    "correctAnswer": "$a = -1, b = 3$",
    "correctIndex": 0,
    "hintEn": "The point lies on the curve (a + b = 2) and y''(1) = 0 (6a + 2b = 0).",
    "hintAr": "النقطة تحقق معادلة المنحنى ($a + b = 2$) والمشتقة الثانية تنعدم عندها ($6a + 2b = 0$).",
    "stepByStepSolutionEn": [
      "1. Point $(1, 2)$ on curve: $a(1)^3 + b(1)^2 = 2 \\implies a + b = 2$.",
      "2. $y'' = 6ax + 2b$. At $x = 1$: $6a + 2b = 0 \\implies 3a + b = 0$.",
      "3. Subtracting: $2a = -2 \\implies a = -1$, and $b = 2 - (-1) = 3$."
    ],
    "stepByStepSolutionAr": [
      "١. النقطة تحقق المنحنى: $a + b = 2$.",
      "٢. شرط الانقلاب: $6a(1) + 2b = 0 \\implies b = -3a$.",
      "٣. بالتعويض: $a - 3a = 2 \\implies -2a = 2 \\implies a = -1$ ومنها $b = 3$."
    ],
    "teacherTipEn": "Official MoE unit exercise testing foundational mastery.",
    "teacherTipAr": "تمرين كتاب الوزارة الرسمي لقياس التمكن المفاهيمي."
  },
  {
    "id": "calc_ch3_ex_06",
    "titleEn": "Unit Exercise 6: Absolute Extrema on Closed Interval",
    "titleAr": "تمرين الوحدة ٦: القيم القصوى المطلقة على فترة مغلقة",
    "difficulty": "medium",
    "questionEn": "Find the absolute maximum value of $f(x) = 4 - x^2$ on $[-1, 3]$.",
    "questionAr": "أوجد القيمة العظمى المطلقة للدالة $f(x) = 4 - x^2$ على الفترة $[-1, 3]$.",
    "optionsEn": [
      "4",
      "3",
      "-5",
      "0"
    ],
    "optionsAr": [
      "٤",
      "٣",
      "-٥",
      "٠"
    ],
    "correctAnswer": "4",
    "correctIndex": 0,
    "hintEn": "Critical point is at x = 0. Compare f(-1), f(0), and f(3).",
    "hintAr": "النقطة الحرجة هي س = ٠. قارن بين ق(-١)، ق(٠)، ق(٣).",
    "stepByStepSolutionEn": [
      "1. $f'(x) = -2x = 0 \\implies x = 0 \\in (-1, 3)$.",
      "2. $f(0) = 4$, $f(-1) = 3$, $f(3) = 4 - 9 = -5$.",
      "3. Absolute maximum is 4 (at $x = 0$)."
    ],
    "stepByStepSolutionAr": [
      "١. $f'(x) = -2x = 0 \\implies x = 0$.",
      "٢. $f(0) = 4, f(-1) = 3, f(3) = -5$.",
      "٣. القيمة العظمى المطلقة هي 4."
    ],
    "teacherTipEn": "Official MoE unit exercise testing foundational mastery.",
    "teacherTipAr": "تمرين كتاب الوزارة الرسمي لقياس التمكن المفاهيمي."
  },
  {
    "id": "calc_ch3_ex_07",
    "titleEn": "Unit Exercise 7: Optimization - Maximum Rectangle Perimeter for Fixed Area",
    "titleAr": "تمرين الوحدة ٧: تطبيقات - أقل محيط لمستطيل مساحته معلومة",
    "difficulty": "medium",
    "questionEn": "Find the minimum perimeter of a rectangle whose area is $36\\text{ cm}^2$.",
    "questionAr": "أوجد أقل محيط لمستطيل مساحته $36\\text{ سم}^2$.",
    "optionsEn": [
      "$24\\text{ cm}$ (when it is a square of side 6)",
      "$36\\text{ cm}$",
      "$26\\text{ cm}$",
      "$20\\text{ cm}$"
    ],
    "optionsAr": [
      "$24\\text{ سم}$ (عندما يكون مربعاً طول ضلعه 6)",
      "$36\\text{ سم}$",
      "$26\\text{ سم}$",
      "$20\\text{ سم}$"
    ],
    "correctAnswer": "$24\\text{ cm}$ (when it is a square of side 6)",
    "correctIndex": 0,
    "hintEn": "Area xy = 36 => y = 36/x. Perimeter P = 2(x + 36/x).",
    "hintAr": "المساحة $xy = 36 \\implies y = 36/x$. المحيط $P = 2(x + 36/x)$.",
    "stepByStepSolutionEn": [
      "1. $P(x) = 2x + \\frac{72}{x}$.",
      "2. $P'(x) = 2 - \\frac{72}{x^2} = 0 \\implies x^2 = 36 \\implies x = 6$.",
      "3. Minimum perimeter $P(6) = 2(6 + 6) = 24\\text{ cm}$."
    ],
    "stepByStepSolutionAr": [
      "١. دالة المحيط: $P(x) = 2x + \\frac{72}{x}$.",
      "٢. المشتقة: $2 - \\frac{72}{x^2} = 0 \\implies x = 6$.",
      "٣. أقل محيط هو $2(6 + 6) = 24\\text{ سم}$."
    ],
    "teacherTipEn": "Official MoE unit exercise testing foundational mastery.",
    "teacherTipAr": "تمرين كتاب الوزارة الرسمي لقياس التمكن المفاهيمي."
  },
  {
    "id": "calc_ch3_ex_08",
    "titleEn": "Unit Exercise 8: Closest Point on a Parabola to a Given Point",
    "titleAr": "تمرين الوحدة ٨: أقرب نقطة على قطع مكافئ لنقطة معطاة",
    "difficulty": "hots",
    "questionEn": "Find the point on the parabola $y = x^2$ closest to the point $(0, 2)$.",
    "questionAr": "عين النقطة الواقعة على القطع المكافئ $y = x^2$ والتي تكون أقرب ما يمكن إلى النقطة $(0, 2)$.",
    "optionsEn": [
      "$(\\pm\\sqrt{\\frac{3}{2}}, \\frac{3}{2})$",
      "$(0, 0)$",
      "$(\\pm 1, 1)$",
      "$(\\pm 2, 4)$"
    ],
    "optionsAr": [
      "$(\\pm\\sqrt{\\frac{3}{2}}, \\frac{3}{2})$",
      "$(0, 0)$",
      "$(\\pm 1, 1)$",
      "$(\\pm 2, 4)$"
    ],
    "correctAnswer": "$(\\pm\\sqrt{\\frac{3}{2}}, \\frac{3}{2})$",
    "correctIndex": 0,
    "hintEn": "Minimize distance squared: D^2 = x^2 + (y - 2)^2 = y + (y - 2)^2.",
    "hintAr": "عظم أو صغر مربع المسافة: $D^2 = x^2 + (y - 2)^2 = y + (y - 2)^2$.",
    "stepByStepSolutionEn": [
      "1. Let point be $(x, y) = (x, x^2)$.",
      "2. $D^2(y) = y + (y - 2)^2 = y + y^2 - 4y + 4 = y^2 - 3y + 4$.",
      "3. $\\frac{d(D^2)}{dy} = 2y - 3 = 0 \\implies y = \\frac{3}{2}$.",
      "4. $x^2 = y = \\frac{3}{2} \\implies x = \\pm \\sqrt{\\frac{3}{2}}$."
    ],
    "stepByStepSolutionAr": [
      "١. مربع المسافة بدلالة $y$: $D^2 = y + (y - 2)^2 = y^2 - 3y + 4$.",
      "٢. المشتقة: $2y - 3 = 0 \\implies y = 1.5$.",
      "٣. $x = \\pm\\sqrt{1.5}$."
    ],
    "teacherTipEn": "Official MoE unit exercise testing foundational mastery.",
    "teacherTipAr": "تمرين كتاب الوزارة الرسمي لقياس التمكن المفاهيمي."
  },
  {
    "id": "calc_ch3_ex_09",
    "titleEn": "Unit Exercise 9: Maximum Area of an Isosceles Triangle Inscribed in a Circle",
    "titleAr": "تمرين الوحدة ٩: أكبر مساحة لمثلث متساوي الساقين مرسوم داخل دائرة",
    "difficulty": "hots",
    "questionEn": "Show that among all isosceles triangles inscribed in a circle of fixed radius $R$, the one with maximum area is:",
    "questionAr": "بين أن المثلث متساوي الساقين المرسوم داخل دائرة نصف قطرها $R$ وله أكبر مساحة هو:",
    "optionsEn": [
      "An equilateral triangle",
      "A right-angled isosceles triangle",
      "A triangle with height R",
      "A triangle with base 2R"
    ],
    "optionsAr": [
      "مثلث متساوي الأضلاع",
      "مثلث قائم الزاوية متساوي الساقين",
      "مثلث ارتفاعه R",
      "مثلث قاعدته 2R"
    ],
    "correctAnswer": "An equilateral triangle",
    "correctIndex": 0,
    "hintEn": "Height h = R + R cos theta, base = 2 R sin theta.",
    "hintAr": "المساحة تعظم عندما تتساوى أضلاع المثلث الثلاثة.",
    "stepByStepSolutionEn": [
      "1. Let the vertex angle be bisected, area is maximized when all three sides are equal.",
      "2. The maximum area triangle inscribed in any circle is equilateral."
    ],
    "stepByStepSolutionAr": [
      "١. بتكوين دالة المساحة واشتقاقها بدلالة زاوية الرأس.",
      "٢. نجد أن المساحة تكون عظمى عندما تتساوى الأضلاع الثلاثة وقياس كل زاوية ٦٠°."
    ],
    "teacherTipEn": "Official MoE unit exercise testing foundational mastery.",
    "teacherTipAr": "تمرين كتاب الوزارة الرسمي لقياس التمكن المفاهيمي."
  },
  {
    "id": "calc_ch3_ex_10",
    "titleEn": "Unit Exercise 10: Extrema of Function Involving Natural Logarithm",
    "titleAr": "تمرين الوحدة ١٠: القيم القصوى لدالة لوغاريتمية",
    "difficulty": "medium",
    "questionEn": "Find the local extremum of $f(x) = \\frac{\\ln(x)}{x}$ for $x > 0$.",
    "questionAr": "عين القيمة القصوى المحلية للدالة $f(x) = \\frac{\\ln(x)}{x}$ حيث $x > 0$.",
    "optionsEn": [
      "Local maximum at $x = e$ with value $\\frac{1}{e}$",
      "Local minimum at $x = e$ with value $\\frac{1}{e}$",
      "Local maximum at $x = 1$ with value $0$",
      "Local minimum at $x = 1$ with value $0$"
    ],
    "optionsAr": [
      "عظمى محلية عند $x = e$ قيمتها $\\frac{1}{e}$",
      "صغرى محلية عند $x = e$ قيمتها $\\frac{1}{e}$",
      "عظمى محلية عند $x = 1$ قيمتها $0$",
      "صغرى محلية عند $x = 1$ قيمتها $0$"
    ],
    "correctAnswer": "Local maximum at $x = e$ with value $\\frac{1}{e}$",
    "correctIndex": 0,
    "hintEn": "Quotient rule: f'(x) = (1 - ln(x)) / x^2.",
    "hintAr": "مشتقة خارج قسمة: $f'(x) = \\frac{1 - \\ln(x)}{x^2}$.",
    "stepByStepSolutionEn": [
      "1. $f'(x) = \\frac{(1/x)(x) - \\ln(x)(1)}{x^2} = \\frac{1 - \\ln(x)}{x^2}$.",
      "2. $f'(x) = 0 \\implies \\ln(x) = 1 \\implies x = e$.",
      "3. Local maximum at $x = e$ with $f(e) = \\frac{\\ln(e)}{e} = \\frac{1}{e}$."
    ],
    "stepByStepSolutionAr": [
      "١. $f'(x) = \\frac{1 - \\ln(x)}{x^2} = 0 \\implies \\ln(x) = 1 \\implies x = e$.",
      "٢. المشتقة تغير إشارتها من موجب إلى سالب حول $e$، إذن عظمى محلية قيمتها $\\frac{1}{e}$."
    ],
    "teacherTipEn": "Official MoE unit exercise testing foundational mastery.",
    "teacherTipAr": "تمرين كتاب الوزارة الرسمي لقياس التمكن المفاهيمي."
  },
  {
    "id": "calc_ch3_ex_11",
    "titleEn": "Unit Exercise 11: Non-Differentiable Critical Point",
    "titleAr": "تمرين الوحدة ١١: نقطة حرجة غير قابلة للاشتقاق عندها",
    "difficulty": "medium",
    "questionEn": "For $f(x) = (x - 1)^{2/3}$, what type of critical point exists at $x = 1$?",
    "questionAr": "للدالة $f(x) = (x - 1)^{2/3}$، ما نوع النقطة الحرجة الموجودة عند $x = 1$؟",
    "optionsEn": [
      "Local minimum (cusp where f' is undefined)",
      "Local maximum",
      "Point of inflection",
      "Stationary point where f' = 0"
    ],
    "optionsAr": [
      "صغرى محلية (نقطة ارتداد/ناب حيث المشتقة غير معرفة)",
      "عظمى محلية",
      "نقطة انقلاب",
      "نقطة سكون حيث المشتقة صفر"
    ],
    "correctAnswer": "Local minimum (cusp where f' is undefined)",
    "correctIndex": 0,
    "hintEn": "f'(x) = 2 / (3 (x - 1)^(1/3)) is undefined at x = 1, but f(x) >= 0 everywhere.",
    "hintAr": "المشتقة غير معرفة عند س = ١، وقيمة الدالة موجبة دائماً فيما عدا س = ١ حيث قيمتها صفر.",
    "stepByStepSolutionEn": [
      "1. $f'(x) = \\frac{2}{3(x-1)^{1/3}}$, undefined at $x = 1$.",
      "2. $f'(x) < 0$ for $x < 1$ and $f'(x) > 0$ for $x > 1$.",
      "3. Since $f(1) = 0$ is the lowest value, $(1, 0)$ is a local minimum."
    ],
    "stepByStepSolutionAr": [
      "١. المشتقة الأولى غير معرفة عند $x = 1$.",
      "٢. الدالة تناقصية قبل ١ وتزايدية بعد ١، إذن $(1, 0)$ صغرى محلية."
    ],
    "teacherTipEn": "Official MoE unit exercise testing foundational mastery.",
    "teacherTipAr": "تمرين كتاب الوزارة الرسمي لقياس التمكن المفاهيمي."
  },
  {
    "id": "calc_ch3_ex_12",
    "titleEn": "Unit Exercise 12: Concavity of Sine Curve",
    "titleAr": "تمرين الوحدة ١٢: تحدب منحنى الجيب",
    "difficulty": "easy",
    "questionEn": "On the interval $(0, 2\\pi)$, where is the curve $y = \\sin(x)$ concave downwards (محدب لأعلى)?",
    "questionAr": "على الفترة $(0, 2\\pi)$، أين يكون منحنى $y = \\sin(x)$ محدباً لأعلى؟",
    "optionsEn": [
      "$(0, \\pi)$",
      "$(\\pi, 2\\pi)$",
      "$(0, \\frac{\\pi}{2})$",
      "$(\\frac{\\pi}{2}, \\frac{3\\pi}{2})$"
    ],
    "optionsAr": [
      "$(0, \\pi)$",
      "$(\\pi, 2\\pi)$",
      "$(0, \\frac{\\pi}{2})$",
      "$(\\frac{\\pi}{2}, \\frac{3\\pi}{2})$"
    ],
    "correctAnswer": "$(0, \\pi)$",
    "correctIndex": 0,
    "hintEn": "y'' = -sin(x) < 0 when sin(x) > 0.",
    "hintAr": "المشتقة الثانية $y'' = -\\sin(x) < 0$ عندما يكون $\\sin(x) > 0$.",
    "stepByStepSolutionEn": [
      "1. $y' = \\cos(x)$, $y'' = -\\sin(x)$.",
      "2. Concave down $\\iff y'' < 0 \\iff -\\sin(x) < 0 \\iff \\sin(x) > 0 \\iff x \\in (0, \\pi)$."
    ],
    "stepByStepSolutionAr": [
      "١. المشتقة الثانية: $y'' = -\\sin(x)$.",
      "٢. التحدب لأعلى يتحقق عندما تكون المشتقة الثانية سالبة، أي في الفترة $(0, \\pi)$."
    ],
    "teacherTipEn": "Official MoE unit exercise testing foundational mastery.",
    "teacherTipAr": "تمرين كتاب الوزارة الرسمي لقياس التمكن المفاهيمي."
  },
  {
    "id": "calc_ch3_ex_13",
    "titleEn": "Unit Exercise 13: Wire Cutting Optimization Problem",
    "titleAr": "تمرين الوحدة ١٣: مسألة قطع السلك لتكوين مربع ودائرة",
    "difficulty": "hots",
    "questionEn": "A wire of length $L$ is cut into two pieces to form a square and a circle. To MINIMIZE the total area, what should be the relation between the square side $x$ and circle diameter $2r$?",
    "questionAr": "سلك طوله $L$ قُسم إلى جزأين لعمل مربع ودائرة. لكي تكون المساحة الكلية أقل ما يمكن، ما العلاقة بين طول ضلع المربع $x$ وقطر الدائرة $2r$؟",
    "optionsEn": [
      "The square side equals the circle diameter ($x = 2r$)",
      "The square perimeter equals circle circumference",
      "The square side equals circle radius ($x = r$)",
      "All wire should be used for circle only"
    ],
    "optionsAr": [
      "طول ضلع المربع يساوي قطر الدائرة ($x = 2r$)",
      "محيط المربع يساوي محيط الدائرة",
      "طول ضلع المربع يساوي نصف قطر الدائرة",
      "يجب استخدام السلك بالكامل للدائرة فقط"
    ],
    "correctAnswer": "The square side equals the circle diameter ($x = 2r$)",
    "correctIndex": 0,
    "hintEn": "Total perimeter = 4x + 2 pi r = L. Total area = x^2 + pi r^2. Minimize with respect to r.",
    "hintAr": "مجموع المحيطين = $4x + 2\\pi r = L$. المساحة الكلية = $x^2 + \\pi r^2$. اشتق وساوِ بالصفر.",
    "stepByStepSolutionEn": [
      "1. $4x + 2\\pi r = L \\implies x = \\frac{L - 2\\pi r}{4}$.",
      "2. $A(r) = \\left(\\frac{L - 2\\pi r}{4}\\right)^2 + \\pi r^2$.",
      "3. Setting $A'(r) = 0$ yields $2x = 4r \\implies x = 2r$."
    ],
    "stepByStepSolutionAr": [
      "١. بالتعبير عن ضلع المربع بدلالة نصف القطر: $x = \\frac{L - 2\\pi r}{4}$.",
      "٢. تكوين دالة المساحة واشتقاقها بالنسبة لـ $r$ ووضعها بصفر.",
      "٣. ينتج أن طول ضلع المربع يساوي تماماً قطر الدائرة: $x = 2r$."
    ],
    "teacherTipEn": "Official MoE unit exercise testing foundational mastery.",
    "teacherTipAr": "تمرين كتاب الوزارة الرسمي لقياس التمكن المفاهيمي."
  },
  {
    "id": "calc_ch3_ex_14",
    "titleEn": "Unit Exercise 14: Distance from Point to Line via Optimization",
    "titleAr": "تمرين الوحدة ١٤: أقصر بعد بين نقطة ومستقيم بالتفاضل",
    "difficulty": "medium",
    "questionEn": "Find the shortest distance from the origin $(0, 0)$ to the straight line $3x + 4y - 25 = 0$.",
    "questionAr": "أوجد أقصر بعد من نقطة الأصل $(0, 0)$ إلى الخط المستقيم $3x + 4y - 25 = 0$.",
    "optionsEn": [
      "5 units",
      "25 units",
      "4 units",
      "3 units"
    ],
    "optionsAr": [
      "٥ وحدات",
      "٢٥ وحدة",
      "٤ وحدات",
      "٣ وحدات"
    ],
    "correctAnswer": "5 units",
    "correctIndex": 0,
    "hintEn": "Use distance formula d = |ax0 + by0 + c| / sqrt(a^2 + b^2) or calculus on x^2 + y^2.",
    "hintAr": "استخدم قانون طول العمود أو بالتفاضل لتعظيم/تصغير دالة المسافة.",
    "stepByStepSolutionEn": [
      "1. $d = \\frac{|3(0) + 4(0) - 25|}{\\sqrt{3^2 + 4^2}} = \\frac{25}{5} = 5$ units."
    ],
    "stepByStepSolutionAr": [
      "١. بتطبيق قانون طول العمود النازل من نقطة الأصل: $d = \\frac{|-25|}{\\sqrt{9 + 16}} = 5$ وحدات."
    ],
    "teacherTipEn": "Official MoE unit exercise testing foundational mastery.",
    "teacherTipAr": "تمرين كتاب الوزارة الرسمي لقياس التمكن المفاهيمي."
  },
  {
    "id": "calc_ch3_ex_15",
    "titleEn": "Unit Exercise 15: Maximum Volume of an Open Top Box",
    "titleAr": "تمرين الوحدة ١٥: أكبر سعة لصندوق مفتوح من أعلى",
    "difficulty": "hots",
    "questionEn": "An open box is made from a square sheet of tin of side $24\\text{ cm}$ by cutting equal squares of side $x$ from each corner and turning up the sides. Find $x$ that maximizes the volume of the box.",
    "questionAr": "صندوق مفتوح من أعلى صُنع من صفيحة مربعة طول ضلعها $24\\text{ سم}$ بقطع مربعات متطابقة طول ضلع كل منها $x$ من الأركان الأربعة وثني الحواف. أوجد قيمة $x$ التي تجعل حجم الصندوق أكبر ما يمكن.",
    "optionsEn": [
      "$x = 4\\text{ cm}$",
      "$x = 6\\text{ cm}$",
      "$x = 2\\text{ cm}$",
      "$x = 8\\text{ cm}$"
    ],
    "optionsAr": [
      "$x = 4\\text{ سم}$",
      "$x = 6\\text{ سم}$",
      "$x = 2\\text{ سم}$",
      "$x = 8\\text{ سم}$"
    ],
    "correctAnswer": "$x = 4\\text{ cm}$",
    "correctIndex": 0,
    "hintEn": "Volume V(x) = x (24 - 2x)^2.",
    "hintAr": "دالة الحجم: $V(x) = x(24 - 2x)^2$.",
    "stepByStepSolutionEn": [
      "1. $V(x) = x(24 - 2x)^2 = 4x(12 - x)^2 = 4x(144 - 24x + x^2) = 4(x^3 - 24x^2 + 144x)$.",
      "2. $V'(x) = 4(3x^2 - 48x + 144) = 12(x^2 - 16x + 48) = 12(x - 4)(x - 12)$.",
      "3. Since $0 < x < 12$, we choose $x = 4\\text{ cm}$."
    ],
    "stepByStepSolutionAr": [
      "١. دالة الحجم: $V(x) = x(24 - 2x)^2$.",
      "٢. المشتقة: $V'(x) = 12(x - 4)(x - 12) = 0$.",
      "٣. بما أن $0 < x < 12$، ينتج أن $x = 4\\text{ سم}$."
    ],
    "teacherTipEn": "Official MoE unit exercise testing foundational mastery.",
    "teacherTipAr": "تمرين كتاب الوزارة الرسمي لقياس التمكن المفاهيمي."
  }
];
