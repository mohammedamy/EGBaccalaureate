import type { SolvedProblem } from '../../../types/curriculum';

export const egBacAnaCh2SolvedExamples: SolvedProblem[] = [
  {
    "id": "egbac_ana_ch2_se_01",
    "titleEn": "EG-Bac Model Example 1: Rolle's Theorem Application and Verification",
    "titleAr": "مثال البكالوريا النموذجي ١: التحقق من شروط وتطبيق نظرية رول",
    "difficulty": "easy",
    "questionEn": "Verify that $f(x) = x^3 - 3x$ satisfies the hypotheses of Rolle's Theorem on $[-\\sqrt{3}, \\sqrt{3}]$, and find all guaranteed values of $c \\in (-\\sqrt{3}, \\sqrt{3})$ such that $f'(c) = 0$.",
    "questionAr": "تحقق من استيفاء الدالة $f(x) = x^3 - 3x$ لشروط نظرية رول على الفترة $[-\\sqrt{3}, \\sqrt{3}]$، وأوجد جميع قيم $c \\in (-\\sqrt{3}, \\sqrt{3})$ التي تحقق $f'(c) = 0$.",
    "optionsEn": [
      "$c = \\pm 1$",
      "$c = 1$ only",
      "$c = 0$",
      "$c = \\pm \\sqrt{3}$"
    ],
    "optionsAr": [
      "$c = \\pm 1$",
      "$c = 1$ فقط",
      "$c = 0$",
      "$c = \\pm \\sqrt{3}$"
    ],
    "correctAnswer": "$c = \\pm 1$",
    "correctIndex": 0,
    "hintEn": "Differentiate f(x) = 3x^2 - 3 and set f'(c) = 0. Verify c lies strictly inside (-sqrt(3), sqrt(3)).",
    "hintAr": "أوجد المشتقة الأولى f'(x) = 3x^2 - 3 وضع f'(c) = 0 مع التأكد من وقوع c داخل الفترة المفتوحة.",
    "stepByStepSolutionEn": [
      "1. Hypotheses check:",
      "   - $f(x)$ is a polynomial, so it is continuous on $[-\\sqrt{3}, \\sqrt{3}]$ and differentiable on $(-\\sqrt{3}, \\sqrt{3})$.",
      "   - $f(-\\sqrt{3}) = -3\\sqrt{3} - 3(-\\sqrt{3}) = 0$, and $f(\\sqrt{3}) = 3\\sqrt{3} - 3\\sqrt{3} = 0$.",
      "   - Since $f(-\\sqrt{3}) = f(\\sqrt{3}) = 0$, all hypotheses of Rolle's Theorem are satisfied.",
      "2. Differentiate: $f'(x) = 3x^2 - 3$.",
      "3. Set $f'(c) = 0 \\implies 3c^2 - 3 = 0 \\implies c^2 = 1 \\implies c = \\pm 1$.",
      "4. Since $-1, 1 \\in (-\\sqrt{3}, \\sqrt{3}) \\approx (-1.732, 1.732)$, both values are valid."
    ],
    "stepByStepSolutionAr": [
      "١. التحقق من الشروط: الدالة كثيرة حدود متصلة على الفترة المغلقة وقابلة للاشتقاق على الفترة المفتوحة، و $f(-\\sqrt{3}) = f(\\sqrt{3}) = 0$.",
      "٢. حساب المشتقة: $f'(x) = 3x^2 - 3$.",
      "٣. وضع $f'(c) = 0 \\implies c^2 = 1 \\implies c = \\pm 1$.",
      "٤. بما أن $\\pm 1 \\in (-\\sqrt{3}, \\sqrt{3})$، فإن كلتا القيمتين صحيحتان ومقبولتان."
    ],
    "teacherTipEn": "Rolle's values of c must lie strictly within the OPEN interval (a, b).",
    "teacherTipAr": "يجب أن تقع قيم c الناتجة عن نظرية رول داخل الفترة المفتوحة (a, b) حصراً."
  },
  {
    "id": "egbac_ana_ch2_se_02",
    "titleEn": "EG-Bac Model Example 2: Lagrange Mean Value Theorem Tangent Point",
    "titleAr": "مثال البكالوريا النموذجي ٢: إيجاد نقطة المماس بنظرية القيمة المتوسطة للاجرانج",
    "difficulty": "medium",
    "questionEn": "Apply the Lagrange Mean Value Theorem to $f(x) = x^3$ on the interval $[0, 3]$. Find the exact value of $c \\in (0, 3)$ where the tangent slope equals the secant slope.",
    "questionAr": "طبق نظرية القيمة المتوسطة للاجرانج على الدالة $f(x) = x^3$ على الفترة $[0, 3]$. أوجد القيمة الدقيقة لـ $c \\in (0, 3)$ التي يكون عندها ميل المماس مساوياً لميل القاطع.",
    "optionsEn": [
      "$c = \\sqrt{3}$",
      "$c = \\frac{3}{2}$",
      "$c = 2$",
      "$c = \\sqrt{6}$"
    ],
    "optionsAr": [
      "$c = \\sqrt{3}$",
      "$c = \\frac{3}{2}$",
      "$c = 2$",
      "$c = \\sqrt{6}$"
    ],
    "correctAnswer": "$c = \\sqrt{3}$",
    "correctIndex": 0,
    "hintEn": "Secant slope = [f(b) - f(a)] / (b - a). Equate to f'(c) = 3c^2.",
    "hintAr": "ميل القاطع = [f(b) - f(a)] / (b - a). ساوِ الناتج بـ f'(c) = 3c^2.",
    "stepByStepSolutionEn": [
      "1. Calculate the secant slope (average rate of change):",
      "   $$\\frac{f(3) - f(0)}{3 - 0} = \\frac{3^3 - 0^3}{3} = \\frac{27}{3} = 9$$",
      "2. Calculate the derivative: $f'(x) = 3x^2$.",
      "3. Equate: $f'(c) = 9 \\implies 3c^2 = 9 \\implies c^2 = 3 \\implies c = \\sqrt{3}$ (since $c \\in (0, 3)$).",
      "4. Verify: $\\sqrt{3} \\approx 1.732 \\in (0, 3)$."
    ],
    "stepByStepSolutionAr": [
      "١. حساب ميل القاطع (متوسط التغير): $\\frac{27 - 0}{3 - 0} = 9$.",
      "٢. إيجاد المشتقة: $f'(x) = 3x^2$.",
      "٣. تطبيق النظرية: $3c^2 = 9 \\implies c^2 = 3 \\implies c = \\sqrt{3}$ (برفض القيمة السالبة لأنها خارج الفترة).",
      "٤. إذن $c = \\sqrt{3}$."
    ],
    "teacherTipEn": "For f(x) = x^3 on [0, b], the MVT point c is always b / sqrt(3).",
    "teacherTipAr": "للدالة التكعيبية x^3 على [0, b]، تكون نقطة القيمة المتوسطة دائماً هي b / جذر(3)."
  },
  {
    "id": "egbac_ana_ch2_se_03",
    "titleEn": "EG-Bac Model Example 3: Cauchy Extended Mean Value Theorem",
    "titleAr": "مثال البكالوريا النموذجي ٣: نظرية كوشي الموسعة للقيمة المتوسطة",
    "difficulty": "hots",
    "questionEn": "For the functions $f(x) = x^2$ and $g(x) = x^3$ on $[1, 2]$, find the value of $c \\in (1, 2)$ that satisfies the Cauchy Mean Value Theorem: $\\frac{f'(c)}{g'(c)} = \\frac{f(2) - f(1)}{g(2) - g(1)}$.",
    "questionAr": "للدالتين $f(x) = x^2$ و $g(x) = x^3$ على الفترة $[1, 2]$، أوجد قيمة $c \\in (1, 2)$ التي تحقق نظرية كوشي للقيمة المتوسطة: $\\frac{f'(c)}{g'(c)} = \\frac{f(2) - f(1)}{g(2) - g(1)}$.",
    "optionsEn": [
      "$c = \\frac{14}{9}$",
      "$c = \\frac{3}{2}$",
      "$c = \\frac{7}{5}$",
      "$c = \\frac{5}{3}$"
    ],
    "optionsAr": [
      "$c = \\frac{14}{9}$",
      "$c = \\frac{3}{2}$",
      "$c = \\frac{7}{5}$",
      "$c = \\frac{5}{3}$"
    ],
    "correctAnswer": "$c = \\frac{14}{9}$",
    "correctIndex": 0,
    "hintEn": "f'(c)/g'(c) = 2c / (3c^2) = 2 / (3c). Compute [f(2)-f(1)]/[g(2)-g(1)].",
    "hintAr": "f'(c)/g'(c) = 2c / (3c^2) = 2 / (3c). احسب الطرف الأيمن بالتعويض المباشر.",
    "stepByStepSolutionEn": [
      "1. Evaluate ratio of differences:",
      "   $$\\frac{f(2) - f(1)}{g(2) - g(1)} = \\frac{4 - 1}{8 - 1} = \\frac{3}{7}$$",
      "2. Evaluate derivative ratio at $c$:",
      "   $$\\frac{f'(c)}{g'(c)} = \\frac{2c}{3c^2} = \\frac{2}{3c}$$",
      "3. Set equal: $\\frac{2}{3c} = \\frac{3}{7} \\implies 9c = 14 \\implies c = \\frac{14}{9}$.",
      "4. Since $\\frac{14}{9} \\approx 1.556 \\in (1, 2)$, the condition is fully verified."
    ],
    "stepByStepSolutionAr": [
      "١. حساب النسبة بين تغير الدالتين: $\\frac{4 - 1}{8 - 1} = \\frac{3}{7}$.",
      "٢. نسبة المشتقات: $\\frac{2c}{3c^2} = \\frac{2}{3c}$.",
      "٣. المساواة: $\\frac{2}{3c} = \\frac{3}{7} \\implies 9c = 14 \\implies c = \\frac{14}{9}$.",
      "٤. القيمة $14/9 \\in (1, 2)$ محققة داخل الفترة."
    ],
    "teacherTipEn": "Cauchy's MVT provides the rigorous foundation for L'Hopital's rule.",
    "teacherTipAr": "نظرية كوشي هي الأساس النظري المتين الذي تشتق منه قاعدة لوبيتال لحساب النهايات."
  },
  {
    "id": "egbac_ana_ch2_se_04",
    "titleEn": "EG-Bac Model Example 4: Third-Order Taylor Polynomial Approximation",
    "titleAr": "مثال البكالوريا النموذجي ٤: كثيرة حدود تايلور التقريبية من الرتبة الثالثة",
    "difficulty": "medium",
    "questionEn": "Find the 3rd-order Maclaurin polynomial $P_3(x)$ for the function $f(x) = \\ln(1 + 2x)$.",
    "questionAr": "أوجد كثيرة حدود ماكلوران التقريبية من الدرجة الثالثة $P_3(x)$ للدالة $f(x) = \\ln(1 + 2x)$.",
    "optionsEn": [
      "$P_3(x) = 2x - 2x^2 + \\frac{8}{3}x^3$",
      "$P_3(x) = 2x - 4x^2 + 8x^3$",
      "$P_3(x) = 2x - x^2 + \\frac{4}{3}x^3$",
      "$P_3(x) = 2x + 2x^2 + \\frac{8}{3}x^3$"
    ],
    "optionsAr": [
      "$P_3(x) = 2x - 2x^2 + \\frac{8}{3}x^3$",
      "$P_3(x) = 2x - 4x^2 + 8x^3$",
      "$P_3(x) = 2x - x^2 + \\frac{4}{3}x^3$",
      "$P_3(x) = 2x + 2x^2 + \\frac{8}{3}x^3$"
    ],
    "correctAnswer": "$P_3(x) = 2x - 2x^2 + \\frac{8}{3}x^3$",
    "correctIndex": 0,
    "hintEn": "Use the standard expansion ln(1 + u) = u - u^2/2 + u^3/3 - ... with u = 2x.",
    "hintAr": "استخدم مفكوك ln(1 + u) = u - u^2/2 + u^3/3 مع التعويض بـ u = 2x.",
    "stepByStepSolutionEn": [
      "1. Recall standard series: $\\ln(1 + u) = u - \\frac{u^2}{2} + \\frac{u^3}{3} - \\cdots$",
      "2. Substitute $u = 2x$:",
      "   $$P_3(x) = (2x) - \\frac{(2x)^2}{2} + \\frac{(2x)^3}{3} = 2x - \\frac{4x^2}{2} + \\frac{8x^3}{3}$$",
      "3. Simplify: $P_3(x) = 2x - 2x^2 + \\frac{8}{3}x^3$."
    ],
    "stepByStepSolutionAr": [
      "١. المتسلسلة القياسية لـ $\\ln(1 + u) = u - \\frac{u^2}{2} + \\frac{u^3}{3}$.",
      "٢. بالتعويض عن $u = 2x$:",
      "   $$P_3(x) = 2x - \\frac{4x^2}{2} + \\frac{8x^3}{3} = 2x - 2x^2 + \\frac{8}{3}x^3$$"
    ],
    "teacherTipEn": "Direct composition u = 2x is far more reliable and faster than computing three consecutive derivatives.",
    "teacherTipAr": "التعويض المباشر في المتسلسلات الأساسية أسرع وأقل عرضة للخطأ من الاشتقاق المتكرر."
  },
  {
    "id": "egbac_ana_ch2_se_05",
    "titleEn": "EG-Bac Model Example 5: Indeterminate Form Limit via L'Hôpital / Taylor",
    "titleAr": "مثال البكالوريا النموذجي ٥: حساب نهاية غير معينة بقاعدة لوبيتال ومتسلسلات تايلور",
    "difficulty": "medium",
    "questionEn": "Compute the second-order indeterminate limit using L'Hôpital's rule twice: $\\lim_{x \\to 0} \\frac{e^{3x} - 1 - 3x}{x^2}$.",
    "questionAr": "احسب النهاية غير المعينة من الرتبة الثانية بتطبيق قاعدة لوبيتال مرتين: $\\lim_{x \\to 0} \\frac{e^{3x} - 1 - 3x}{x^2}$.",
    "optionsEn": [
      "$\\frac{9}{2}$",
      "$9$",
      "$\\frac{3}{2}$",
      "$3$"
    ],
    "optionsAr": [
      "$\\frac{9}{2}$",
      "$9$",
      "$\\frac{3}{2}$",
      "$3$"
    ],
    "correctAnswer": "$\\frac{9}{2}$",
    "correctIndex": 0,
    "hintEn": "Expand e^(3x) = 1 + 3x + (3x)^2/2! + ...",
    "hintAr": "استخدم مفكوك e^(3x) = 1 + 3x + 9x^2 / 2! + ...",
    "stepByStepSolutionEn": [
      "1. Using Taylor expansion: $e^{3x} = 1 + 3x + \\frac{(3x)^2}{2!} + O(x^3) = 1 + 3x + \\frac{9x^2}{2} + O(x^3)$.",
      "2. Substitute into the numerator: $(e^{3x} - 1 - 3x) = \\frac{9}{2}x^2 + O(x^3)$.",
      "3. Divide by $x^2$: $\\lim_{x \\to 0} \\left( \\frac{9}{2} + O(x) \\right) = \\frac{9}{2}$.",
      "4. (Alternative via L'Hopital): $\\lim_{x \\to 0} \\frac{3e^{3x} - 3}{2x} = \\lim_{x \\to 0} \\frac{9e^{3x}}{2} = \\frac{9}{2}$."
    ],
    "stepByStepSolutionAr": [
      "١. بمفكوك تايلور: $e^{3x} = 1 + 3x + \\frac{9x^2}{2} + \\dots$",
      "٢. البسط: $e^{3x} - 1 - 3x = \\frac{9x^2}{2}$.",
      "٣. بالقسمة على $x^2$: تكون النهاية مساوية لـ $\\frac{9}{2}$."
    ],
    "teacherTipEn": "Comparing Taylor expansions with L'Hopital verifies and strengthens analytical agility.",
    "teacherTipAr": "المقارنة بين لوبيتال ومفكوك تايلور تؤكد صحة الحل وتمنح الطالب مرونة حسابية عالية."
  },
  {
    "id": "egbac_ana_ch2_se_06",
    "titleEn": "EG-Bac Model Example 6: Lagrange Remainder Bound in Taylor Approximations",
    "titleAr": "مثال البكالوريا النموذجي ٦: تقدير خطأ باقي لاجرانج في متسلسلات تايلور",
    "difficulty": "hots",
    "questionEn": "When approximating $f(x) = e^x$ on $[0, 1]$ by its 2nd-degree Maclaurin polynomial $P_2(x) = 1 + x + \\frac{x^2}{2}$, what is the upper bound on the Lagrange remainder $R_2(1)$ using $e < 3$?",
    "questionAr": "عند تقريب الدالة $f(x) = e^x$ على الفترة $[0, 1]$ بكثيرة حدود ماكلوران من الدرجة الثانية $P_2(x) = 1 + x + \\frac{x^2}{2}$، ما هو الحد الأعلى لباقي لاجرانج $R_2(1)$ باعتبار $e < 3$؟",
    "optionsEn": [
      "$R_2(1) < \\frac{1}{2}$",
      "$R_2(1) < \\frac{1}{6}$",
      "$R_2(1) < \\frac{1}{3}$",
      "$R_2(1) < 1$"
    ],
    "optionsAr": [
      "$R_2(1) < \\frac{1}{2}$",
      "$R_2(1) < \\frac{1}{6}$",
      "$R_2(1) < \\frac{1}{3}$",
      "$R_2(1) < 1$"
    ],
    "correctAnswer": "$R_2(1) < \\frac{1}{2}$",
    "correctIndex": 0,
    "hintEn": "R_n(x) = f^(n+1)(xi) / (n+1)! * x^(n+1). Here n = 2, so (n+1)! = 3! = 6.",
    "hintAr": "باقي لاجرانج R_2(1) = e^c / 3! حيث c بين 0 و 1.",
    "stepByStepSolutionEn": [
      "1. Lagrange remainder formula for $n = 2$: $R_2(x) = \\frac{f'''(\\xi)}{3!} x^3$ for some $\\xi \\in (0, x)$.",
      "2. For $f(x) = e^x$, $f'''(\\xi) = e^\\xi$.",
      "3. At $x = 1$: $R_2(1) = \\frac{e^\\xi}{6} (1)^3 = \\frac{e^\\xi}{6}$ where $0 < \\xi < 1$.",
      "4. Since $e^\\xi < e^1 < 3$, we have $R_2(1) < \\frac{3}{6} = \\frac{1}{2}$."
    ],
    "stepByStepSolutionAr": [
      "١. صيغة باقي لاجرانج عند $n = 2$: $R_2(1) = \\frac{f'''(\\xi)}{3!} (1)^3$.",
      "٢. المشتقة الثالثة هي $e^\\xi$ حيث $0 < \\xi < 1$.",
      "٣. بما أن $e^\\xi < e < 3$: فإن $R_2(1) < \\frac{3}{6} = \\frac{1}{2}$."
    ],
    "teacherTipEn": "Lagrange's remainder provides the quantitative guarantee of truncation accuracy.",
    "teacherTipAr": "باقي لاجرانج يقدم الضمان الرياضي الدقيق لمقدار الخطأ الناتج عن قطع المتسلسلة."
  },
  {
    "id": "egbac_ana_ch2_se_07",
    "titleEn": "EG-Bac Model Example 7: Second Derivative Test & Curve Concavity Inflection",
    "titleAr": "مثال البكالوريا النموذجي ٧: اختبار المشتقة الثانية وتعيين نقط الانقلاب والتقعر",
    "difficulty": "easy",
    "questionEn": "Find the inflection point of the curve $f(x) = x^3 - 6x^2 + 9x + 2$.",
    "questionAr": "أوجد نقطة الانقلاب لمنحنى الدالة $f(x) = x^3 - 6x^2 + 9x + 2$.",
    "optionsEn": [
      "$(2, 4)$",
      "$(1, 6)$",
      "$(3, 2)$",
      "$(0, 2)$"
    ],
    "optionsAr": [
      "$(2, 4)$",
      "$(1, 6)$",
      "$(3, 2)$",
      "$(0, 2)$"
    ],
    "correctAnswer": "$(2, 4)$",
    "correctIndex": 0,
    "hintEn": "Set f''(x) = 0 and verify concavity changes across that point.",
    "hintAr": "ضع المشتقة الثانية f''(x) = 0 وتحقق من تغير إشارة التقعر حول النقطة.",
    "stepByStepSolutionEn": [
      "1. First derivative: $f'(x) = 3x^2 - 12x + 9$.",
      "2. Second derivative: $f''(x) = 6x - 12$.",
      "3. Set $f''(x) = 0 \\implies 6x = 12 \\implies x = 2$.",
      "4. For $x < 2$, $f''(x) < 0$ (concave down). For $x > 2$, $f''(x) > 0$ (concave up). Hence concavity changes at $x = 2$.",
      "5. Compute $y$-coordinate: $f(2) = 2^3 - 6(4) + 9(2) + 2 = 8 - 24 + 18 + 2 = 4$.",
      "6. The inflection point is $(2, 4)$."
    ],
    "stepByStepSolutionAr": [
      "١. المشتقة الأولى: $f'(x) = 3x^2 - 12x + 9$.",
      "٢. المشتقة الثانية: $f''(x) = 6x - 12 = 0 \\implies x = 2$.",
      "٣. التقعر يتغير من لأسفل إلى لأعلى عند $x = 2$.",
      "٤. حساب الإحداثي الصادي: $f(2) = 8 - 24 + 18 + 2 = 4$.",
      "٥. نقطة الانقلاب هي $(2, 4)$."
    ],
    "teacherTipEn": "An inflection point requires f''(x) = 0 AND a strict change of sign in f''(x).",
    "teacherTipAr": "نقطة الانقلاب تشترط انعدام المشتقة الثانية مع تغير حقيقي في إشارتها حول النقطة."
  },
  {
    "id": "egbac_ana_ch2_se_08",
    "titleEn": "EG-Bac Model Example 8: Indeterminate Power Limit $1^\\infty$",
    "titleAr": "مثال البكالوريا النموذجي ٨: نهاية القوى غير المعينة من الصورة $1^\\infty$",
    "difficulty": "hots",
    "questionEn": "Find the exponential-type limit of indeterminate form $1^\\infty$: $\\lim_{x \\to 0} (1 + 3x)^{2/x}$.",
    "questionAr": "أوجد النهاية من النوع الأسي ذات الصورة غير المعينة $1^\\infty$: $\\lim_{x \\to 0} (1 + 3x)^{2/x}$.",
    "optionsEn": [
      "$e^6$",
      "$e^3$",
      "$e^2$",
      "$6$"
    ],
    "optionsAr": [
      "$e^6$",
      "$e^3$",
      "$e^2$",
      "$6$"
    ],
    "correctAnswer": "$e^6$",
    "correctIndex": 0,
    "hintEn": "Use the natural logarithm: let y = (1 + 3x)^(2/x), then ln(y) = (2/x)*ln(1 + 3x).",
    "hintAr": "استخدم اللوغاريتم الطبيعي: بفرض y = الدالة، ثم خذ نهاية ln(y).",
    "stepByStepSolutionEn": [
      "1. Form is $1^\\infty$, an indeterminate exponential form.",
      "2. Let $y = (1 + 3x)^{2/x}$, then $\\ln(y) = \\frac{2}{x} \\ln(1 + 3x) = 2 \\cdot \\frac{\\ln(1 + 3x)}{x}$.",
      "3. Compute limit of $\\ln(y)$ as $x \\to 0$:",
      "   $$\\lim_{x \\to 0} \\ln(y) = 2 \\lim_{x \\to 0} \\frac{\\ln(1 + 3x)}{x} = 2 \\times 3 = 6$$",
      "4. Exponentiate to recover the original limit:",
      "   $$\\lim_{x \\to 0} y = e^6$$"
    ],
    "stepByStepSolutionAr": [
      "١. الحالة غير معينة من الصورة $1^\\infty$.",
      "٢. بأخذ اللوغاريتم الطبيعي: $\\ln(y) = 2 \\frac{\\ln(1 + 3x)}{x}$.",
      "٣. نهاية $\\ln(y)$ عندما $x \\to 0$ تساوي $2 \\times 3 = 6$.",
      "٤. إذن النهاية الأصلية هي $e^6$."
    ],
    "teacherTipEn": "lim (x->0) (1 + ax)^(b/x) = e^(ab) is a standard high-speed Baccalaureate shortcut.",
    "teacherTipAr": "القانون السريع: نهاية (1 + ax)^(b/x) عندما تؤول س للصفر تساوي دائماً e^(ab)."
  },
  {
    "id": "egbac_ana_ch2_se_09",
    "titleEn": "EG-Bac Model Example 9: Differentiability Implies Continuity Proof Analysis",
    "titleAr": "مثال البكالوريا النموذجي ٩: قابلية الاشتقاق تقتضي الاتصال والعكس غير صحيح",
    "difficulty": "easy",
    "questionEn": "Consider the function $f(x) = |x - 3|$. Which statement correctly characterizes $f$ at $x = 3$?",
    "questionAr": "الدالة $f(x) = |x - 3|$. أي العبارات التالية تصف طبيعة الدالة بدقة عند النقطة $x = 3$؟",
    "optionsEn": [
      "Continuous at $x = 3$, but not differentiable at $x = 3$",
      "Both continuous and differentiable at $x = 3$",
      "Neither continuous nor differentiable at $x = 3$",
      "Differentiable at $x = 3$, but not continuous"
    ],
    "optionsAr": [
      "متصلة عند $x = 3$، لكنها غير قابلة للاشتقاق عندها",
      "متصلة وقابلة للاشتقاق معاً عند $x = 3$",
      "غير متصلة وغير قابلة للاشتقاق عند $x = 3$",
      "قابلة للاشتقاق ولكنها غير متصلة"
    ],
    "correctAnswer": "Continuous at $x = 3$, but not differentiable at $x = 3$",
    "correctIndex": 0,
    "hintEn": "Check left and right derivatives: f'_-(3) = -1 while f'_+(3) = +1.",
    "hintAr": "احسب المشتقة اليسرى والمشتقة اليمنى: المشتقة اليسرى -١ بينما اليمنى +١.",
    "stepByStepSolutionEn": [
      "1. Continuity check: $\\lim_{x \\to 3} |x - 3| = 0 = f(3)$, so $f$ is continuous at $x = 3$.",
      "2. Left derivative: $\\lim_{h \\to 0^-} \\frac{f(3+h) - f(3)}{h} = \\frac{-h}{h} = -1$.",
      "3. Right derivative: $\\lim_{h \\to 0^+} \\frac{f(3+h) - f(3)}{h} = \\frac{h}{h} = 1$.",
      "4. Since $f'_-(3) \\neq f'_+(3)$, the derivative does not exist at $x = 3$ (sharp corner/cusp)."
    ],
    "stepByStepSolutionAr": [
      "١. الاتصال: النهاية تساوي صفر وتساوي قيمة الدالة، إذن الدالة متصلة تماماً عند $x = 3$.",
      "٢. المشتقة اليسرى = -١، بينما المشتقة اليمنى = +١.",
      "٣. بما أن المشتقة اليسرى لا تساوي اليمنى، فالدالة غير قابلة للاشتقاق عند $x = 3$ لوجود نقطة زاوية مدببة."
    ],
    "teacherTipEn": "Differentiability guarantees continuity, but continuity NEVER guarantees differentiability.",
    "teacherTipAr": "الاشتقاق يضمن الاتصال حتماً، ولكن الاتصال لا يضمن قابلية الاشتقاق أبداً."
  },
  {
    "id": "egbac_ana_ch2_se_10",
    "titleEn": "EG-Bac Model Example 10: Optimization of Rectangular Area in a Parabola",
    "titleAr": "مثال البكالوريا النموذجي ١٠: تطبيقات القيم القصوى - مساحة مستطيل داخل قطع مكافئ",
    "difficulty": "hots",
    "questionEn": "A rectangle has its base on the $x$-axis and its upper two vertices lying on the parabola $y = 12 - x^2$. What is the maximum possible area of this rectangle?",
    "questionAr": "مستطيل قاعدته على محور السينات ورأساه العلويان يقعان على القطع المكافئ $y = 12 - x^2$. ما هي أكبر مساحة ممكنة لهذا المستطيل؟",
    "optionsEn": [
      "$32$",
      "$16$",
      "$24$",
      "$48$"
    ],
    "optionsAr": [
      "$32$",
      "$16$",
      "$24$",
      "$48$"
    ],
    "correctAnswer": "$32$",
    "correctIndex": 0,
    "hintEn": "Width is 2x, height is 12 - x^2. Area A(x) = 2x(12 - x^2) = 24x - 2x^3.",
    "hintAr": "العرض ٢س، والارتفاع ١٢ - س^٢. دالة المساحة م(س) = ٢س(١٢ - س^٢).",
    "stepByStepSolutionEn": [
      "1. Let the upper right vertex be $(x, 12 - x^2)$ with $0 < x < \\sqrt{12}$.",
      "2. By symmetry across the $y$-axis, base length is $2x$, height is $12 - x^2$.",
      "3. Area function: $A(x) = 2x(12 - x^2) = 24x - 2x^3$.",
      "4. Differentiate: $A'(x) = 24 - 6x^2 = 0 \\implies 6x^2 = 24 \\implies x^2 = 4 \\implies x = 2$.",
      "5. Second derivative: $A''(x) = -12x < 0$ at $x = 2$, confirming a maximum.",
      "6. Max area: $A(2) = 2(2)(12 - 4) = 4 \\times 8 = 32$ square units."
    ],
    "stepByStepSolutionAr": [
      "١. إحداثيات الرأس العلوي $(x, 12 - x^2)$ حيث $x > 0$.",
      "٢. طول القاعدة = ٢س، والارتفاع = ١٢ - س^٢.",
      "٣. دالة المساحة: $A(x) = 24x - 2x^3$.",
      "٤. المشتقة: $A'(x) = 24 - 6x^2 = 0 \\implies x^2 = 4 \\implies x = 2$.",
      "٥. المساحة العظمى: $A(2) = 2(2)(12 - 4) = 4 \\times 8 = 32$ وحدة مربعة."
    ],
    "teacherTipEn": "Always exploit symmetry: a symmetric rectangle centered at the origin has width 2x.",
    "teacherTipAr": "استفد دائماً من التماثل: المستطيل المتماثل حول محور الصادات طول قاعدته ٢س."
  }
];

export const egBacAnaCh2Exercises: SolvedProblem[] = [
  {
    "id": "egbac_ana_ch2_ex_01",
    "titleEn": "Exercise 1: Rolle's Theorem Stationary Point",
    "titleAr": "تمرين 1: نقطة استقرار نظرية رول",
    "difficulty": "easy",
    "questionEn": "For the quadratic function $f(x) = x^2 - 2x$ on the interval $[0, 2]$, find the stationary point $c \\in (0, 2)$ guaranteed by Rolle's Theorem.",
    "questionAr": "للدالة التربيعية $f(x) = x^2 - 2x$ على الفترة $[0, 2]$، أوجد النقطة الحرجة $c \\in (0, 2)$ المضمونة بنظرية رول.",
    "optionsEn": [
      "$c = 1$",
      "$c = 2$",
      "$c = 3$",
      "$c = 4$"
    ],
    "optionsAr": [
      "$c = 1$",
      "$c = 2$",
      "$c = 3$",
      "$c = 4$"
    ],
    "correctAnswer": "$c = 1$",
    "correctIndex": 0,
    "hintEn": "f'(x) = 2x - k = 0.",
    "hintAr": "المشتقة: 2x - k = 0.",
    "stepByStepSolutionEn": [
      "1. $f(0) = 0$ and $f(2) = 2^2 - 2(2) = 0$.",
      "2. $f'(x) = 2x - 2$.",
      "3. Set $f'(c) = 0 \\implies 2c = 2 \\implies c = 1$."
    ],
    "stepByStepSolutionAr": [
      "١. $f(0) = f(2) = 0$.",
      "٢. $f'(x) = 2x - 2 = 0$.",
      "٣. إذن $c = 1$."
    ],
    "teacherTipEn": "For parabolas on [0, k], the vertex c is always k/2.",
    "teacherTipAr": "لقطع مكافئ على [0, k]، نقطة الرأس c تكون دائماً في المنتصف k/2."
  },
  {
    "id": "egbac_ana_ch2_ex_02",
    "titleEn": "Exercise 2: Rolle's Theorem Stationary Point",
    "titleAr": "تمرين 2: نقطة استقرار نظرية رول",
    "difficulty": "easy",
    "questionEn": "Verify the hypotheses of Rolle's Theorem for $f(x) = x^2 - 4x$ on $[0, 4]$, and determine the value of $c \\in (0, 4)$ where $f'(c) = 0$.",
    "questionAr": "تحقق من شروط نظرية رول للدالة $f(x) = x^2 - 4x$ على $[0, 4]$، وحدد قيمة $c \\in (0, 4)$ حيث $f'(c) = 0$.",
    "optionsEn": [
      "$c = 3$",
      "$c = 2$",
      "$c = 4$",
      "$c = 5$"
    ],
    "optionsAr": [
      "$c = 3$",
      "$c = 2$",
      "$c = 4$",
      "$c = 5$"
    ],
    "correctAnswer": "$c = 2$",
    "correctIndex": 1,
    "hintEn": "f'(x) = 2x - k = 0.",
    "hintAr": "المشتقة: 2x - k = 0.",
    "stepByStepSolutionEn": [
      "1. $f(0) = 0$ and $f(4) = 4^2 - 4(4) = 0$.",
      "2. $f'(x) = 2x - 4$.",
      "3. Set $f'(c) = 0 \\implies 2c = 4 \\implies c = 2$."
    ],
    "stepByStepSolutionAr": [
      "١. $f(0) = f(4) = 0$.",
      "٢. $f'(x) = 2x - 4 = 0$.",
      "٣. إذن $c = 2$."
    ],
    "teacherTipEn": "For parabolas on [0, k], the vertex c is always k/2.",
    "teacherTipAr": "لقطع مكافئ على [0, k]، نقطة الرأس c تكون دائماً في المنتصف k/2."
  },
  {
    "id": "egbac_ana_ch2_ex_03",
    "titleEn": "Exercise 3: Rolle's Theorem Stationary Point",
    "titleAr": "تمرين 3: نقطة استقرار نظرية رول",
    "difficulty": "easy",
    "questionEn": "Rolle's Theorem asserts the existence of at least one point where the tangent is horizontal. Find this point $c$ for $f(x) = x^2 - 6x$ on $[0, 6]$.",
    "questionAr": "تؤكد نظرية رول وجود نقطة واحدة على الأقل يكون عندها المماس أفقياً. أوجد هذه النقطة $c$ للدالة $f(x) = x^2 - 6x$ على $[0, 6]$.",
    "optionsEn": [
      "$c = 4$",
      "$c = 5$",
      "$c = 3$",
      "$c = 6$"
    ],
    "optionsAr": [
      "$c = 4$",
      "$c = 5$",
      "$c = 3$",
      "$c = 6$"
    ],
    "correctAnswer": "$c = 3$",
    "correctIndex": 2,
    "hintEn": "f'(x) = 2x - k = 0.",
    "hintAr": "المشتقة: 2x - k = 0.",
    "stepByStepSolutionEn": [
      "1. $f(0) = 0$ and $f(6) = 6^2 - 6(6) = 0$.",
      "2. $f'(x) = 2x - 6$.",
      "3. Set $f'(c) = 0 \\implies 2c = 6 \\implies c = 3$."
    ],
    "stepByStepSolutionAr": [
      "١. $f(0) = f(6) = 0$.",
      "٢. $f'(x) = 2x - 6 = 0$.",
      "٣. إذن $c = 3$."
    ],
    "teacherTipEn": "For parabolas on [0, k], the vertex c is always k/2.",
    "teacherTipAr": "لقطع مكافئ على [0, k]، نقطة الرأس c تكون دائماً في المنتصف k/2."
  },
  {
    "id": "egbac_ana_ch2_ex_04",
    "titleEn": "Exercise 4: Rolle's Theorem Stationary Point",
    "titleAr": "تمرين 4: نقطة استقرار نظرية رول",
    "difficulty": "easy",
    "questionEn": "Determine the coordinate $c \\in (0, 8)$ at which the derivative of $f(x) = x^2 - 8x$ vanishes in accordance with Rolle's Theorem.",
    "questionAr": "حدد الإحداثي $c \\in (0, 8)$ الذي تنعدم عنده مشتقة الدالة $f(x) = x^2 - 8x$ توافقاً مع نظرية رول.",
    "optionsEn": [
      "$c = 5$",
      "$c = 6$",
      "$c = 7$",
      "$c = 4$"
    ],
    "optionsAr": [
      "$c = 5$",
      "$c = 6$",
      "$c = 7$",
      "$c = 4$"
    ],
    "correctAnswer": "$c = 4$",
    "correctIndex": 3,
    "hintEn": "f'(x) = 2x - k = 0.",
    "hintAr": "المشتقة: 2x - k = 0.",
    "stepByStepSolutionEn": [
      "1. $f(0) = 0$ and $f(8) = 8^2 - 8(8) = 0$.",
      "2. $f'(x) = 2x - 8$.",
      "3. Set $f'(c) = 0 \\implies 2c = 8 \\implies c = 4$."
    ],
    "stepByStepSolutionAr": [
      "١. $f(0) = f(8) = 0$.",
      "٢. $f'(x) = 2x - 8 = 0$.",
      "٣. إذن $c = 4$."
    ],
    "teacherTipEn": "For parabolas on [0, k], the vertex c is always k/2.",
    "teacherTipAr": "لقطع مكافئ على [0, k]، نقطة الرأس c تكون دائماً في المنتصف k/2."
  },
  {
    "id": "egbac_ana_ch2_ex_05",
    "titleEn": "Exercise 5: Rolle's Theorem Stationary Point",
    "titleAr": "تمرين 5: نقطة استقرار نظرية رول",
    "difficulty": "easy",
    "questionEn": "Calculate the exact value of $c$ satisfying $f'(c) = 0$ for $f(x) = x^2 - 10x$ on $[0, 10]$ under Rolle's conditions.",
    "questionAr": "احسب القيمة الدقيقة لـ $c$ التي تحقق $f'(c) = 0$ للدالة $f(x) = x^2 - 10x$ على $[0, 10]$ تحت شروط رول.",
    "optionsEn": [
      "$c = 5$",
      "$c = 6$",
      "$c = 7$",
      "$c = 8$"
    ],
    "optionsAr": [
      "$c = 5$",
      "$c = 6$",
      "$c = 7$",
      "$c = 8$"
    ],
    "correctAnswer": "$c = 5$",
    "correctIndex": 0,
    "hintEn": "f'(x) = 2x - k = 0.",
    "hintAr": "المشتقة: 2x - k = 0.",
    "stepByStepSolutionEn": [
      "1. $f(0) = 0$ and $f(10) = 10^2 - 10(10) = 0$.",
      "2. $f'(x) = 2x - 10$.",
      "3. Set $f'(c) = 0 \\implies 2c = 10 \\implies c = 5$."
    ],
    "stepByStepSolutionAr": [
      "١. $f(0) = f(10) = 0$.",
      "٢. $f'(x) = 2x - 10 = 0$.",
      "٣. إذن $c = 5$."
    ],
    "teacherTipEn": "For parabolas on [0, k], the vertex c is always k/2.",
    "teacherTipAr": "لقطع مكافئ على [0, k]، نقطة الرأس c تكون دائماً في المنتصف k/2."
  },
  {
    "id": "egbac_ana_ch2_ex_06",
    "titleEn": "Exercise 6: Lagrange MVT Mean Value Evaluation",
    "titleAr": "تمرين 6: حساب قيمة c بنظرية لاجرانج للقيمة المتوسطة",
    "difficulty": "medium",
    "questionEn": "Apply Lagrange's Mean Value Theorem to $f(x) = x^2$ on $[1, 3]$ to find the point $c \\in (1, 3)$ where the instantaneous slope equals the average secant slope.",
    "questionAr": "طبق نظرية القيمة المتوسطة للاغرانج على $f(x) = x^2$ في الفترة $[1, 3]$ لإيجاد النقطة $c \\in (1, 3)$ التي يتساوى عندها الميل اللحظي مع ميل القاطع المتوسط.",
    "optionsEn": [
      "$c = 3$",
      "$c = 2$",
      "$c = 4$",
      "$c = 5$"
    ],
    "optionsAr": [
      "$c = 3$",
      "$c = 2$",
      "$c = 4$",
      "$c = 5$"
    ],
    "correctAnswer": "$c = 2$",
    "correctIndex": 1,
    "hintEn": "For quadratic functions, the MVT point c is always the arithmetic mean of the endpoints.",
    "hintAr": "للدوال التربيعية، نقطة القيمة المتوسطة c هي الوسط الحسابي للطرفين بالضبط.",
    "stepByStepSolutionEn": [
      "1. Secant slope: $\\frac{f(3) - f(1)}{3 - 1} = \\frac{9 - 1}{2} = 3 + 1 = 4$.",
      "2. $f'(c) = 2c = 4 \\implies c = 2$."
    ],
    "stepByStepSolutionAr": [
      "١. ميل القاطع = $\\frac{9 - 1}{2} = 4$.",
      "٢. المشتقة: $2c = 4 \\implies c = 2$."
    ],
    "teacherTipEn": "For any quadratic f(x) = Ax^2 + Bx + C, c = (a + b)/2.",
    "teacherTipAr": "لأي دالة تربيعية، c تساوي دائماً (a + b) / 2."
  },
  {
    "id": "egbac_ana_ch2_ex_07",
    "titleEn": "Exercise 7: Lagrange MVT Mean Value Evaluation",
    "titleAr": "تمرين 7: حساب قيمة c بنظرية لاجرانج للقيمة المتوسطة",
    "difficulty": "medium",
    "questionEn": "By the Mean Value Theorem applied to $f(x) = x^2$ over the segment $[1, 5]$, compute the intermediate value $c$.",
    "questionAr": "باستخدام نظرية القيمة المتوسطة المطبقة على $f(x) = x^2$ على القطعة $[1, 5]$، احسب القيمة المتوسطة $c$.",
    "optionsEn": [
      "$c = 4$",
      "$c = 5$",
      "$c = 3$",
      "$c = 6$"
    ],
    "optionsAr": [
      "$c = 4$",
      "$c = 5$",
      "$c = 3$",
      "$c = 6$"
    ],
    "correctAnswer": "$c = 3$",
    "correctIndex": 2,
    "hintEn": "For quadratic functions, the MVT point c is always the arithmetic mean of the endpoints.",
    "hintAr": "للدوال التربيعية، نقطة القيمة المتوسطة c هي الوسط الحسابي للطرفين بالضبط.",
    "stepByStepSolutionEn": [
      "1. Secant slope: $\\frac{f(5) - f(1)}{5 - 1} = \\frac{25 - 1}{4} = 5 + 1 = 6$.",
      "2. $f'(c) = 2c = 6 \\implies c = 3$."
    ],
    "stepByStepSolutionAr": [
      "١. ميل القاطع = $\\frac{25 - 1}{4} = 6$.",
      "٢. المشتقة: $2c = 6 \\implies c = 3$."
    ],
    "teacherTipEn": "For any quadratic f(x) = Ax^2 + Bx + C, c = (a + b)/2.",
    "teacherTipAr": "لأي دالة تربيعية، c تساوي دائماً (a + b) / 2."
  },
  {
    "id": "egbac_ana_ch2_ex_08",
    "titleEn": "Exercise 8: Lagrange MVT Mean Value Evaluation",
    "titleAr": "تمرين 8: حساب قيمة c بنظرية لاجرانج للقيمة المتوسطة",
    "difficulty": "medium",
    "questionEn": "Find the abscissa $c \\in (1, 7)$ guaranteed by Lagrange's Theorem for the parabola $f(x) = x^2$.",
    "questionAr": "أوجد الإحداثي السيني $c \\in (1, 7)$ المضمون بنظرية لاغرانج للقطع المكافئ $f(x) = x^2$.",
    "optionsEn": [
      "$c = 5$",
      "$c = 6$",
      "$c = 7$",
      "$c = 4$"
    ],
    "optionsAr": [
      "$c = 5$",
      "$c = 6$",
      "$c = 7$",
      "$c = 4$"
    ],
    "correctAnswer": "$c = 4$",
    "correctIndex": 3,
    "hintEn": "For quadratic functions, the MVT point c is always the arithmetic mean of the endpoints.",
    "hintAr": "للدوال التربيعية، نقطة القيمة المتوسطة c هي الوسط الحسابي للطرفين بالضبط.",
    "stepByStepSolutionEn": [
      "1. Secant slope: $\\frac{f(7) - f(1)}{7 - 1} = \\frac{49 - 1}{6} = 7 + 1 = 8$.",
      "2. $f'(c) = 2c = 8 \\implies c = 4$."
    ],
    "stepByStepSolutionAr": [
      "١. ميل القاطع = $\\frac{49 - 1}{6} = 8$.",
      "٢. المشتقة: $2c = 8 \\implies c = 4$."
    ],
    "teacherTipEn": "For any quadratic f(x) = Ax^2 + Bx + C, c = (a + b)/2.",
    "teacherTipAr": "لأي دالة تربيعية، c تساوي دائماً (a + b) / 2."
  },
  {
    "id": "egbac_ana_ch2_ex_09",
    "titleEn": "Exercise 9: Lagrange MVT Mean Value Evaluation",
    "titleAr": "تمرين 9: حساب قيمة c بنظرية لاجرانج للقيمة المتوسطة",
    "difficulty": "medium",
    "questionEn": "Determine the location of $c$ such that $f'(c) = \\frac{f(9) - f(1)}{9 - 1}$ for $f(x) = x^2$ on $[1, 9]$.",
    "questionAr": "حدد موضع $c$ بحيث $f'(c) = \\frac{f(9) - f(1)}{9 - 1}$ للدالة $f(x) = x^2$ على $[1, 9]$.",
    "optionsEn": [
      "$c = 5$",
      "$c = 6$",
      "$c = 7$",
      "$c = 8$"
    ],
    "optionsAr": [
      "$c = 5$",
      "$c = 6$",
      "$c = 7$",
      "$c = 8$"
    ],
    "correctAnswer": "$c = 5$",
    "correctIndex": 0,
    "hintEn": "For quadratic functions, the MVT point c is always the arithmetic mean of the endpoints.",
    "hintAr": "للدوال التربيعية، نقطة القيمة المتوسطة c هي الوسط الحسابي للطرفين بالضبط.",
    "stepByStepSolutionEn": [
      "1. Secant slope: $\\frac{f(9) - f(1)}{9 - 1} = \\frac{81 - 1}{8} = 9 + 1 = 10$.",
      "2. $f'(c) = 2c = 10 \\implies c = 5$."
    ],
    "stepByStepSolutionAr": [
      "١. ميل القاطع = $\\frac{81 - 1}{8} = 10$.",
      "٢. المشتقة: $2c = 10 \\implies c = 5$."
    ],
    "teacherTipEn": "For any quadratic f(x) = Ax^2 + Bx + C, c = (a + b)/2.",
    "teacherTipAr": "لأي دالة تربيعية، c تساوي دائماً (a + b) / 2."
  },
  {
    "id": "egbac_ana_ch2_ex_10",
    "titleEn": "Exercise 10: Lagrange MVT Mean Value Evaluation",
    "titleAr": "تمرين 10: حساب قيمة c بنظرية لاجرانج للقيمة المتوسطة",
    "difficulty": "medium",
    "questionEn": "Locate the point $c \\in (1, 11)$ where the tangent line to $f(x) = x^2$ is parallel to the chord joining $(1, 1)$ and $(11, 121)$.",
    "questionAr": "عين موضع النقطة $c \\in (1, 11)$ التي يكون عندها مماس $f(x) = x^2$ موازياً للوتر الواصل بين $(1, 1)$ و $(11, 121)$.",
    "optionsEn": [
      "$c = 7$",
      "$c = 6$",
      "$c = 8$",
      "$c = 9$"
    ],
    "optionsAr": [
      "$c = 7$",
      "$c = 6$",
      "$c = 8$",
      "$c = 9$"
    ],
    "correctAnswer": "$c = 6$",
    "correctIndex": 1,
    "hintEn": "For quadratic functions, the MVT point c is always the arithmetic mean of the endpoints.",
    "hintAr": "للدوال التربيعية، نقطة القيمة المتوسطة c هي الوسط الحسابي للطرفين بالضبط.",
    "stepByStepSolutionEn": [
      "1. Secant slope: $\\frac{f(11) - f(1)}{11 - 1} = \\frac{121 - 1}{10} = 11 + 1 = 12$.",
      "2. $f'(c) = 2c = 12 \\implies c = 6$."
    ],
    "stepByStepSolutionAr": [
      "١. ميل القاطع = $\\frac{121 - 1}{10} = 12$.",
      "٢. المشتقة: $2c = 12 \\implies c = 6$."
    ],
    "teacherTipEn": "For any quadratic f(x) = Ax^2 + Bx + C, c = (a + b)/2.",
    "teacherTipAr": "لأي دالة تربيعية، c تساوي دائماً (a + b) / 2."
  },
  {
    "id": "egbac_ana_ch2_ex_11",
    "titleEn": "Exercise 11: L'Hôpital Second-Order Limit",
    "titleAr": "تمرين 11: نهاية الرتبة الثانية بلوبيتال",
    "difficulty": "hots",
    "questionEn": "Evaluate the indeterminate limit $\\lim_{x \\to 0} \\frac{1 - \\cos(2x)}{x^2 / 2}$ using L'Hôpital's rule or Taylor expansion.",
    "questionAr": "احسب النهاية غير المعينة $\\lim_{x \\to 0} \\frac{1 - \\cos(2x)}{x^2 / 2}$ باستخدام قاعدة لوبيتال أو مفكوك تايلور.",
    "optionsEn": [
      "6",
      "8",
      "4",
      "10"
    ],
    "optionsAr": [
      "6",
      "8",
      "4",
      "10"
    ],
    "correctAnswer": "4",
    "correctIndex": 2,
    "hintEn": "1 - cos(ax) ~ (ax)^2 / 2.",
    "hintAr": "1 - جتا(ax) يكافئ تقريبياً (ax)^2 / 2.",
    "stepByStepSolutionEn": [
      "1. Recall $\\lim_{u \\to 0} \\frac{1 - \\cos(u)}{u^2} = \\frac{1}{2}$.",
      "2. Here $1 - \\cos(2x) = \\frac{(2x)^2}{2} = \\frac{4x^2}{2}$.",
      "3. Dividing by $x^2 / 2$ gives 4."
    ],
    "stepByStepSolutionAr": [
      "١. المتطابقة التقريبية: $1 - \\cos(2x) = \\frac{4x^2}{2}$.",
      "٢. بالقسمة على $x^2 / 2$: ينتج الناتج 4."
    ],
    "teacherTipEn": "1 - cos(u) ~ u^2 / 2 is one of the most useful Taylor approximations in analysis.",
    "teacherTipAr": "التقريب 1 - جتا(u) ~ u^2 / 2 من أهم المتكافئات في التحليل الرياضي."
  },
  {
    "id": "egbac_ana_ch2_ex_12",
    "titleEn": "Exercise 12: L'Hôpital Second-Order Limit",
    "titleAr": "تمرين 12: نهاية الرتبة الثانية بلوبيتال",
    "difficulty": "hots",
    "questionEn": "Compute the limit of the indeterminate ratio $\\frac{0}{0}$: $\\lim_{x \\to 0} \\frac{1 - \\cos(3x)}{x^2 / 2}$.",
    "questionAr": "احسب نهاية النسبة غير المعينة $\\frac{0}{0}$: $\\lim_{x \\to 0} \\frac{1 - \\cos(3x)}{x^2 / 2}$.",
    "optionsEn": [
      "11",
      "13",
      "15",
      "9"
    ],
    "optionsAr": [
      "11",
      "13",
      "15",
      "9"
    ],
    "correctAnswer": "9",
    "correctIndex": 3,
    "hintEn": "1 - cos(ax) ~ (ax)^2 / 2.",
    "hintAr": "1 - جتا(ax) يكافئ تقريبياً (ax)^2 / 2.",
    "stepByStepSolutionEn": [
      "1. Recall $\\lim_{u \\to 0} \\frac{1 - \\cos(u)}{u^2} = \\frac{1}{2}$.",
      "2. Here $1 - \\cos(3x) = \\frac{(3x)^2}{2} = \\frac{9x^2}{2}$.",
      "3. Dividing by $x^2 / 2$ gives 9."
    ],
    "stepByStepSolutionAr": [
      "١. المتطابقة التقريبية: $1 - \\cos(3x) = \\frac{9x^2}{2}$.",
      "٢. بالقسمة على $x^2 / 2$: ينتج الناتج 9."
    ],
    "teacherTipEn": "1 - cos(u) ~ u^2 / 2 is one of the most useful Taylor approximations in analysis.",
    "teacherTipAr": "التقريب 1 - جتا(u) ~ u^2 / 2 من أهم المتكافئات في التحليل الرياضي."
  },
  {
    "id": "egbac_ana_ch2_ex_13",
    "titleEn": "Exercise 13: L'Hôpital Second-Order Limit",
    "titleAr": "تمرين 13: نهاية الرتبة الثانية بلوبيتال",
    "difficulty": "hots",
    "questionEn": "Find the exact limit value for $\\lim_{x \\to 0} \\frac{1 - \\cos(4x)}{x^2 / 2}$ by differentiating numerator and denominator.",
    "questionAr": "أوجد القيمة الدقيقة للنهاية $\\lim_{x \\to 0} \\frac{1 - \\cos(4x)}{x^2 / 2}$ باشتقاق كل من البسط والمقام.",
    "optionsEn": [
      "16",
      "18",
      "20",
      "22"
    ],
    "optionsAr": [
      "16",
      "18",
      "20",
      "22"
    ],
    "correctAnswer": "16",
    "correctIndex": 0,
    "hintEn": "1 - cos(ax) ~ (ax)^2 / 2.",
    "hintAr": "1 - جتا(ax) يكافئ تقريبياً (ax)^2 / 2.",
    "stepByStepSolutionEn": [
      "1. Recall $\\lim_{u \\to 0} \\frac{1 - \\cos(u)}{u^2} = \\frac{1}{2}$.",
      "2. Here $1 - \\cos(4x) = \\frac{(4x)^2}{2} = \\frac{16x^2}{2}$.",
      "3. Dividing by $x^2 / 2$ gives 16."
    ],
    "stepByStepSolutionAr": [
      "١. المتطابقة التقريبية: $1 - \\cos(4x) = \\frac{16x^2}{2}$.",
      "٢. بالقسمة على $x^2 / 2$: ينتج الناتج 16."
    ],
    "teacherTipEn": "1 - cos(u) ~ u^2 / 2 is one of the most useful Taylor approximations in analysis.",
    "teacherTipAr": "التقريب 1 - جتا(u) ~ u^2 / 2 من أهم المتكافئات في التحليل الرياضي."
  },
  {
    "id": "egbac_ana_ch2_ex_14",
    "titleEn": "Exercise 14: L'Hôpital Second-Order Limit",
    "titleAr": "تمرين 14: نهاية الرتبة الثانية بلوبيتال",
    "difficulty": "hots",
    "questionEn": "Determine the limit as $x \\to 0$ of the expression $\\frac{1 - \\cos(5x)}{x^2 / 2}$.",
    "questionAr": "حدد نهاية المقدار $\\frac{1 - \\cos(5x)}{x^2 / 2}$ عندما تقترب $x$ من الصفر.",
    "optionsEn": [
      "27",
      "25",
      "29",
      "31"
    ],
    "optionsAr": [
      "27",
      "25",
      "29",
      "31"
    ],
    "correctAnswer": "25",
    "correctIndex": 1,
    "hintEn": "1 - cos(ax) ~ (ax)^2 / 2.",
    "hintAr": "1 - جتا(ax) يكافئ تقريبياً (ax)^2 / 2.",
    "stepByStepSolutionEn": [
      "1. Recall $\\lim_{u \\to 0} \\frac{1 - \\cos(u)}{u^2} = \\frac{1}{2}$.",
      "2. Here $1 - \\cos(5x) = \\frac{(5x)^2}{2} = \\frac{25x^2}{2}$.",
      "3. Dividing by $x^2 / 2$ gives 25."
    ],
    "stepByStepSolutionAr": [
      "١. المتطابقة التقريبية: $1 - \\cos(5x) = \\frac{25x^2}{2}$.",
      "٢. بالقسمة على $x^2 / 2$: ينتج الناتج 25."
    ],
    "teacherTipEn": "1 - cos(u) ~ u^2 / 2 is one of the most useful Taylor approximations in analysis.",
    "teacherTipAr": "التقريب 1 - جتا(u) ~ u^2 / 2 من أهم المتكافئات في التحليل الرياضي."
  },
  {
    "id": "egbac_ana_ch2_ex_15",
    "titleEn": "Exercise 15: L'Hôpital Second-Order Limit",
    "titleAr": "تمرين 15: نهاية الرتبة الثانية بلوبيتال",
    "difficulty": "hots",
    "questionEn": "Calculate the limiting value of the trigonometric quotient $\\lim_{x \\to 0} \\frac{1 - \\cos(6x)}{x^2 / 2}$.",
    "questionAr": "احسب القيمة التقاربية لخارج القسمة المثلثي $\\lim_{x \\to 0} \\frac{1 - \\cos(6x)}{x^2 / 2}$.",
    "optionsEn": [
      "38",
      "40",
      "36",
      "42"
    ],
    "optionsAr": [
      "38",
      "40",
      "36",
      "42"
    ],
    "correctAnswer": "36",
    "correctIndex": 2,
    "hintEn": "1 - cos(ax) ~ (ax)^2 / 2.",
    "hintAr": "1 - جتا(ax) يكافئ تقريبياً (ax)^2 / 2.",
    "stepByStepSolutionEn": [
      "1. Recall $\\lim_{u \\to 0} \\frac{1 - \\cos(u)}{u^2} = \\frac{1}{2}$.",
      "2. Here $1 - \\cos(6x) = \\frac{(6x)^2}{2} = \\frac{36x^2}{2}$.",
      "3. Dividing by $x^2 / 2$ gives 36."
    ],
    "stepByStepSolutionAr": [
      "١. المتطابقة التقريبية: $1 - \\cos(6x) = \\frac{36x^2}{2}$.",
      "٢. بالقسمة على $x^2 / 2$: ينتج الناتج 36."
    ],
    "teacherTipEn": "1 - cos(u) ~ u^2 / 2 is one of the most useful Taylor approximations in analysis.",
    "teacherTipAr": "التقريب 1 - جتا(u) ~ u^2 / 2 من أهم المتكافئات في التحليل الرياضي."
  }
];
