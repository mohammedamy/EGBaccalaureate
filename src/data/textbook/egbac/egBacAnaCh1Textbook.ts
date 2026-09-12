import type { SolvedProblem } from '../../../types/curriculum';

export const egBacAnaCh1SolvedExamples: SolvedProblem[] = [
  {
    "id": "egbac_ana_ch1_se_01",
    "titleEn": "EG-Bac Model Example 1: Epsilon-Delta Limit Bound for Linear Functions",
    "titleAr": "مثال البكالوريا النموذجي ١: تعيين قيمة دلتا في برهان النهاية الخطية بإبسيلون ودلتا",
    "difficulty": "easy",
    "questionEn": "Using the formal $(\\epsilon, \\delta)$ definition of a limit, prove that $\\lim_{x \\to 3} (4x - 5) = 7$. What is the optimal choice of $\\delta$ in terms of $\\epsilon$?",
    "questionAr": "باستخدام التعريف الدقيق للنهاية $(\\epsilon, \\delta)$، أثبت أن $\\lim_{x \\to 3} (4x - 5) = 7$. ما هو الاختيار الأمثل لـ $\\delta$ بدلالة $\\epsilon$؟",
    "optionsEn": [
      "$\\delta = \\frac{\\epsilon}{4}$",
      "$\\delta = 4\\epsilon$",
      "$\\delta = \\frac{\\epsilon}{2}$",
      "$\\delta = \\frac{\\epsilon}{7}$"
    ],
    "optionsAr": [
      "$\\delta = \\frac{\\epsilon}{4}$",
      "$\\delta = 4\\epsilon$",
      "$\\delta = \\frac{\\epsilon}{2}$",
      "$\\delta = \\frac{\\epsilon}{7}$"
    ],
    "correctAnswer": "$\\delta = \\frac{\\epsilon}{4}$",
    "correctIndex": 0,
    "hintEn": "Express |f(x) - L| in terms of |x - c|: |(4x - 5) - 7| = 4|x - 3| < epsilon.",
    "hintAr": "عبّر عن |f(x) - L| بدلالة |x - c|: نجد أن |(4x - 5) - 7| = 4|x - 3| < epsilon.",
    "stepByStepSolutionEn": [
      "1. State the objective: For any $\\epsilon > 0$, find $\\delta > 0$ such that $0 < |x - 3| < \\delta \\implies |(4x - 5) - 7| < \\epsilon$.",
      "2. Simplify the inequality: $|4x - 12| = 4|x - 3| < \\epsilon$.",
      "3. Divide by 4: $|x - 3| < \\frac{\\epsilon}{4}$.",
      "4. Therefore, choosing $\\delta = \\frac{\\epsilon}{4}$ ensures $|f(x) - 7| < \\epsilon$ whenever $0 < |x - 3| < \\delta$."
    ],
    "stepByStepSolutionAr": [
      "١. صياغة الهدف: لكل $\\epsilon > 0$، نبحث عن $\\delta > 0$ بحيث إذا كان $0 < |x - 3| < \\delta$ فإن $|(4x - 5) - 7| < \\epsilon$.",
      "٢. تبسيط المقدار: $|4x - 12| = 4|x - 3| < \\epsilon$.",
      "٣. بالقسمة على ٤: $|x - 3| < \\frac{\\epsilon}{4}$.",
      "٤. إذن اختيار $\\delta = \\frac{\\epsilon}{4}$ يحقق المطلوب تماماً."
    ],
    "teacherTipEn": "For linear functions f(x) = mx + c, the delta choice is always delta = epsilon / |m|.",
    "teacherTipAr": "للدوال الخطية f(x) = mx + c، يكون اختيار دلتا دائماً هو delta = epsilon / |m|."
  },
  {
    "id": "egbac_ana_ch1_se_02",
    "titleEn": "EG-Bac Model Example 2: Squeeze Theorem with Trigonometric Oscillation",
    "titleAr": "مثال البكالوريا النموذجي ٢: نظرية الحصر مع التذبذبات المثلثية",
    "difficulty": "easy",
    "questionEn": "Evaluate the limit $\\lim_{x \\to 0} x^4 \\cos\\left(\\frac{2}{x^3}\\right)$ using the Sandwich (Squeeze) Theorem.",
    "questionAr": "احسب النهاية $\\lim_{x \\to 0} x^4 \\cos\\left(\\frac{2}{x^3}\\right)$ باستخدام نظرية الحصر (الساندوتش).",
    "optionsEn": [
      "0",
      "1",
      "2",
      "Does not exist (oscillates)"
    ],
    "optionsAr": [
      "0",
      "1",
      "2",
      "غير موجودة (تذبذبية)"
    ],
    "correctAnswer": "0",
    "correctIndex": 0,
    "hintEn": "The cosine function is bounded between -1 and 1 for all non-zero arguments.",
    "hintAr": "دالة جيب التمام محصورة دائماً بين -١ و ١ لأي زاوية.",
    "stepByStepSolutionEn": [
      "1. For any $x \\neq 0$, cosine satisfies: $-1 \\le \\cos\\left(\\frac{2}{x^3}\\right) \\le 1$.",
      "2. Since $x^4 > 0$ for all $x \\neq 0$, multiply through without reversing inequalities:",
      "   $$-x^4 \\le x^4 \\cos\\left(\\frac{2}{x^3}\\right) \\le x^4$$",
      "3. Take limits as $x \\to 0$: $\\lim_{x \\to 0} (-x^4) = 0$ and $\\lim_{x \\to 0} x^4 = 0$.",
      "4. By the Squeeze Theorem, $\\lim_{x \\to 0} x^4 \\cos\\left(\\frac{2}{x^3}\\right) = 0$."
    ],
    "stepByStepSolutionAr": [
      "١. لكل $x \\neq 0$، تحقق دالة جيب التمام: $-1 \\le \\cos(2/x^3) \\le 1$.",
      "٢. بما أن $x^4 > 0$ دائماً لجميع $x \\neq 0$، نضرب أطراف المتباينة في $x^4$:",
      "   $$-x^4 \\le x^4 \\cos(2/x^3) \\le x^4$$",
      "٣. بأخذ النهاية عندما $x \\to 0$: نجد أن الطرفين يؤولان إلى الصفر.",
      "٤. إذن بحسب نظرية الحصر، تكون النهاية المطلوبة مساوية للصفر."
    ],
    "teacherTipEn": "Always multiply by an even power (like x^4) or use absolute values to keep inequality signs invariant.",
    "teacherTipAr": "استخدم دائماً قوى زوجية أو القيمة المطلقة عند تطبيق نظرية الحصر لضمان ثبات اتجاه المتباينة."
  },
  {
    "id": "egbac_ana_ch1_se_03",
    "titleEn": "EG-Bac Model Example 3: Bolzano Intermediate Value Theorem Root Isolation",
    "titleAr": "مثال البكالوريا النموذجي ٣: عزل الجذور بنظرية بولزانو للقيم المتوسطة",
    "difficulty": "medium",
    "questionEn": "Show that the equation $x^5 - 3x - 1 = 0$ possesses at least one real root in an interval $(a, b)$. Which of the following intervals guarantees a root by Bolzano's Theorem?",
    "questionAr": "أثبت أن المعادلة $x^5 - 3x - 1 = 0$ تمتلك جذراً حقيقياً واحداً على الأقل في فترة $(a, b)$. أي من الفترات التالية تضمن وجود الجذر بنظرية بولزانو؟",
    "optionsEn": [
      "$(1, 2)$",
      "$(0, 1)$",
      "$(2, 3)$",
      "$(-1, 0)$"
    ],
    "optionsAr": [
      "$(1, 2)$",
      "$(0, 1)$",
      "$(2, 3)$",
      "$(-1, 0)$"
    ],
    "correctAnswer": "$(1, 2)$",
    "correctIndex": 0,
    "hintEn": "Evaluate f(x) at interval endpoints and look for a sign change f(a) * f(b) < 0.",
    "hintAr": "احسب قيمة الدالة عند طرفي الفترة وابحث عن تغير الإشارة f(a) * f(b) < 0.",
    "stepByStepSolutionEn": [
      "1. Let $f(x) = x^5 - 3x - 1$, which is a polynomial and thus continuous on all of $\\mathbb{R}$.",
      "2. Test interval $(1, 2)$:",
      "   $f(1) = 1^5 - 3(1) - 1 = 1 - 3 - 1 = -3 < 0$.",
      "   $f(2) = 2^5 - 3(2) - 1 = 32 - 6 - 1 = 25 > 0$.",
      "3. Since $f(1) \\cdot f(2) = (-3)(25) = -75 < 0$, Bolzano's Theorem guarantees the existence of at least one $c \\in (1, 2)$ such that $f(c) = 0$."
    ],
    "stepByStepSolutionAr": [
      "١. الدالة $f(x) = x^5 - 3x - 1$ كثيرة حدود متصلة على $\\mathbb{R}$.",
      "٢. اختبار الفترة $(1, 2)$:",
      "   $f(1) = 1 - 3 - 1 = -3 < 0$.",
      "   $f(2) = 32 - 6 - 1 = 25 > 0$.",
      "٣. بما أن $f(1) \\cdot f(2) < 0$، فإن نظرية بولزانو تؤكد وجود جذر حقيقي في الفترة $(1, 2)$."
    ],
    "teacherTipEn": "Continuity on the closed interval is the indispensable prerequisite for Bolzano's Theorem.",
    "teacherTipAr": "الاتصال على الفترة المغلقة هو الشرط الأساسي الذي لا غنى عنه لتطبيق نظرية بولزانو."
  },
  {
    "id": "egbac_ana_ch1_se_04",
    "titleEn": "EG-Bac Model Example 4: Oblique (Slant) Asymptote of a Rational Function",
    "titleAr": "مثال البكالوريا النموذجي ٤: تعيين المستقيم المقارب المائل لدالة كسرية",
    "difficulty": "medium",
    "questionEn": "Find the equation of the oblique (slant) asymptote of the function $f(x) = \\frac{2x^3 + 3x^2 - 5}{x^2 + 1}$ as $x \\to \\pm\\infty$.",
    "questionAr": "أوجد معادلة المستقيم المقارب المائل لمنحنى الدالة $f(x) = \\frac{2x^3 + 3x^2 - 5}{x^2 + 1}$ عندما $x \\to \\pm\\infty$.",
    "optionsEn": [
      "$y = 2x + 3$",
      "$y = 2x - 3$",
      "$y = 2x$",
      "$y = 3x + 2$"
    ],
    "optionsAr": [
      "$y = 2x + 3$",
      "$y = 2x - 3$",
      "$y = 2x$",
      "$y = 3x + 2$"
    ],
    "correctAnswer": "$y = 2x + 3$",
    "correctIndex": 0,
    "hintEn": "Perform polynomial long division: f(x) = (2x + 3) + remainder / (x^2 + 1).",
    "hintAr": "أجرِ القسمة المطولة لكثيرات الحدود: f(x) = خارج القسمة + الباقي / المقسوم عليه.",
    "stepByStepSolutionEn": [
      "1. Perform polynomial division of $2x^3 + 3x^2 - 5$ by $x^2 + 1$:",
      "   $\\frac{2x^3 + 3x^2 - 5}{x^2 + 1} = 2x + 3 + \\frac{-2x - 8}{x^2 + 1}$.",
      "2. Check the limit of the remainder term as $x \\to \\pm\\infty$:",
      "   $\\lim_{x \\to \\pm\\infty} \\left[ f(x) - (2x + 3) \\right] = \\lim_{x \\to \\pm\\infty} \\frac{-2x - 8}{x^2 + 1} = 0$.",
      "3. Hence, the line $y = 2x + 3$ is the oblique asymptote."
    ],
    "stepByStepSolutionAr": [
      "١. بالقسمة المطولة لـ $2x^3 + 3x^2 - 5$ على $x^2 + 1$:",
      "   خارج القسمة هو $2x + 3$ وباقي القسمة هو $-2x - 8$.",
      "٢. فحص نهاية الباقي عند اللانهاية: تؤول إلى الصفر.",
      "٣. إذن معادلة المستقيم المقارب المائل هي $y = 2x + 3$."
    ],
    "teacherTipEn": "An oblique asymptote exists whenever the degree of the numerator is exactly one higher than the denominator.",
    "teacherTipAr": "يوجد مقارب مائل دائماً عندما تكون درجة البسط أكبر بواحد فقط من درجة المقام."
  },
  {
    "id": "egbac_ana_ch1_se_05",
    "titleEn": "EG-Bac Model Example 5: Continuous Extension & Removable Discontinuity",
    "titleAr": "مثال البكالوريا النموذجي ٥: التمديد بالاتصال ونقاط الانفصال القابلة للإزالة",
    "difficulty": "medium",
    "questionEn": "Determine the value of $k$ that extends the function $f(x) = \\frac{\\sin(3x) - 3x}{x^3}$ to be continuous at $x = 0$.",
    "questionAr": "حدد قيمة $k$ التي تجعل الدالة $f(x) = \\frac{\\sin(3x) - 3x}{x^3}$ متصلة عند $x = 0$ إذا تم تعريف $f(0) = k$.",
    "optionsEn": [
      "$k = -\\frac{9}{2}$",
      "$k = -\\frac{27}{6}$",
      "$k = -\\frac{9}{6}$",
      "$k = 0$"
    ],
    "optionsAr": [
      "$k = -\\frac{9}{2}$",
      "$k = -\\frac{27}{6}$",
      "$k = -\\frac{9}{6}$",
      "$k = 0$"
    ],
    "correctAnswer": "$k = -\\frac{9}{2}$",
    "correctIndex": 0,
    "hintEn": "Use Taylor expansion of sin(3x): sin(u) = u - u^3/6 + ... with u = 3x.",
    "hintAr": "استخدم مفكوك تايلور لـ sin(3x): sin(u) = u - u^3/6 + ... حيث u = 3x.",
    "stepByStepSolutionEn": [
      "1. For continuity at $x = 0$, we must have $k = \\lim_{x \\to 0} f(x)$.",
      "2. Recall the Maclaurin expansion: $\\sin(u) = u - \\frac{u^3}{6} + O(u^5)$.",
      "3. For $u = 3x$: $\\sin(3x) = 3x - \\frac{(3x)^3}{6} + O(x^5) = 3x - \\frac{27x^3}{6} + O(x^5)$.",
      "4. Substitute into the numerator: $\\sin(3x) - 3x = -\\frac{27}{6}x^3 + O(x^5) = -\\frac{9}{2}x^3 + O(x^5)$.",
      "5. Divide by $x^3$: $\\lim_{x \\to 0} \\frac{-9/2 x^3}{x^3} = -\\frac{9}{2}$. Thus $k = -\\frac{9}{2}$."
    ],
    "stepByStepSolutionAr": [
      "١. لكي تكون الدالة متصلة عند $x = 0$، يجب أن يكون $k = \\lim_{x \\to 0} f(x)$.",
      "٢. باستخدام مفكوك ماكلوران: $\\sin(3x) = 3x - \\frac{27x^3}{6} + \\dots$",
      "٣. البسط: $\\sin(3x) - 3x = -\\frac{27}{6}x^3 = -\\frac{9}{2}x^3$.",
      "٤. بالقسمة على $x^3$ وأخذ النهاية: نجد أن $k = -\\frac{9}{2}$."
    ],
    "teacherTipEn": "Taylor expansion is much faster and cleaner than applying L'Hopital's rule three consecutive times!",
    "teacherTipAr": "استخدام مفكوك تايلور أسرع وأدق بكثير من تطبيق قاعدة لوبيتال ثلاث مرات متتالية!"
  },
  {
    "id": "egbac_ana_ch1_se_06",
    "titleEn": "EG-Bac Model Example 6: Uniform Continuity on Bounded vs Unbounded Intervals",
    "titleAr": "مثال البكالوريا النموذجي ٦: الاتصال المنتظم على الفترات المحدودة وغير المحدودة",
    "difficulty": "hots",
    "questionEn": "Which of the following functions is UNIFORMLY continuous on the specified domain?",
    "questionAr": "أي من الدوال التالية تعتبر دالة متصلة بانتظام (Uniformly Continuous) على مجالها المحدد؟",
    "optionsEn": [
      "$f(x) = \\sin(x)$ on $\\mathbb{R}$",
      "$f(x) = x^2$ on $[0, \\infty)$",
      "$f(x) = \\frac{1}{x}$ on $(0, 1)$",
      "$f(x) = \\sin\\left(\\frac{1}{x}\\right)$ on $(0, 1)$"
    ],
    "optionsAr": [
      "$f(x) = \\sin(x)$ على $\\mathbb{R}$",
      "$f(x) = x^2$ على $[0, \\infty)$",
      "$f(x) = \\frac{1}{x}$ على $(0, 1)$",
      "$f(x) = \\sin\\left(\\frac{1}{x}\\right)$ على $(0, 1)$"
    ],
    "correctAnswer": "$f(x) = \\sin(x)$ on $\\mathbb{R}$",
    "correctIndex": 0,
    "hintEn": "A function with bounded derivative |f'(x)| <= M on an interval is Lipschitz continuous, hence uniformly continuous.",
    "hintAr": "الدالة ذات المشتقة المحدودة |f'(x)| <= M تكون دالة ليبشيتزية، وبالتالي متصلة بانتظام.",
    "stepByStepSolutionEn": [
      "1. A function $f$ is uniformly continuous if $\\forall \\epsilon > 0, \\exists \\delta > 0$ such that $|x - y| < \\delta \\implies |f(x) - f(y)| < \\epsilon$ for ALL $x, y$.",
      "2. For $f(x) = \\sin(x)$, $|f'(x)| = |\\cos(x)| \\le 1$ everywhere on $\\mathbb{R}$.",
      "3. By the Mean Value Theorem: $|\\sin(x) - \\sin(y)| = |\\cos(c)| |x - y| \\le |x - y|$.",
      "4. Choosing $\\delta = \\epsilon$ works for all $x, y \\in \\mathbb{R}$, proving uniform continuity.",
      "5. For $x^2$ on $[0, \\infty)$ and $1/x$ on $(0, 1)$, slopes grow unbounded, violating uniform continuity."
    ],
    "stepByStepSolutionAr": [
      "١. شرط الاتصال المنتظم أن تعتمد دلتا على إبسيلون فقط دون الاعتماد على موقع النقطة.",
      "٢. للدالة $f(x) = \\sin(x)$، مشتقتها $|\\cos(x)| \\le 1$ محدودة على كل $\\mathbb{R}$.",
      "٣. بنظرية القيمة المتوسطة: $|\\sin(x) - \\sin(y)| \\le |x - y|$.",
      "٤. باختيار $\\delta = \\epsilon$ نثبت أنها متصلة بانتظام على كامل خط الأعداد الحقيقية."
    ],
    "teacherTipEn": "Lipschitz continuity (bounded derivative) immediately implies uniform continuity on any domain.",
    "teacherTipAr": "الشرط الليبشيتزي (محدودية المشتقة الأولى) يضمن الاتصال المنتظم على الفور."
  },
  {
    "id": "egbac_ana_ch1_se_07",
    "titleEn": "EG-Bac Model Example 7: Extreme Value Theorem & Critical Points on Compact Sets",
    "titleAr": "مثال البكالوريا النموذجي ٧: نظرية القيم القصوى على المجموعات المتراصة",
    "difficulty": "medium",
    "questionEn": "Find the absolute maximum value of $f(x) = 2x^3 - 3x^2 - 12x + 5$ on the compact interval $[-2, 3]$.",
    "questionAr": "أوجد القيمة العظمى المطلقة للدالة $f(x) = 2x^3 - 3x^2 - 12x + 5$ على الفترة المتراصة (المغلقة) $[-2, 3]$.",
    "optionsEn": [
      "12",
      "5",
      "-4",
      "-15"
    ],
    "optionsAr": [
      "12",
      "5",
      "-4",
      "-15"
    ],
    "correctAnswer": "12",
    "correctIndex": 0,
    "hintEn": "Evaluate f at critical points (where f'(x) = 0) and at the interval endpoints x = -2 and x = 3.",
    "hintAr": "احسب قيم الدالة عند النقاط الحرجة (حيث المشتقة صفر) وعند طرفي الفترة المغلقة.",
    "stepByStepSolutionEn": [
      "1. Find derivative: $f'(x) = 6x^2 - 6x - 12 = 6(x^2 - x - 2) = 6(x - 2)(x + 1)$.",
      "2. Critical points in $(-2, 3)$ are $x = -1$ and $x = 2$.",
      "3. Evaluate $f(x)$ at all candidates:",
      "   - $f(-2) = 2(-8) - 3(4) - 12(-2) + 5 = -16 - 12 + 24 + 5 = 1$.",
      "   - $f(-1) = 2(-1) - 3(1) - 12(-1) + 5 = -2 - 3 + 12 + 5 = 12$.",
      "   - $f(2) = 2(8) - 3(4) - 12(2) + 5 = 16 - 12 - 24 + 5 = -15$.",
      "   - $f(3) = 2(27) - 3(9) - 12(3) + 5 = 54 - 27 - 36 + 5 = -4$.",
      "4. The absolute maximum value on $[-2, 3]$ is $f(-1) = 12$."
    ],
    "stepByStepSolutionAr": [
      "١. إيجاد المشتقة الأولى: $f'(x) = 6(x - 2)(x + 1) = 0 \\implies x = -1, 2$.",
      "٢. حساب قيم الدالة عند النقاط الحرجة والطرفين:",
      "   $f(-2) = 1$",
      "   $f(-1) = 12$",
      "   $f(2) = -15$",
      "   $f(3) = -4$",
      "٣. إذن القيمة العظمى المطلقة هي ١٢ عند $x = -1$."
    ],
    "teacherTipEn": "Weierstrass Extreme Value Theorem guarantees that both global max and min are attained on any closed interval.",
    "teacherTipAr": "نظرية فايرشتراس تضمن تحقق القيمتين العظمى والصغرى المطلقتين حتماً على أي فترة مغلقة."
  },
  {
    "id": "egbac_ana_ch1_se_08",
    "titleEn": "EG-Bac Model Example 8: Quadratic Epsilon-Delta Limit Proof",
    "titleAr": "مثال البكالوريا النموذجي ٨: برهان إبسيلون ودلتا للدوال التربيعية",
    "difficulty": "hots",
    "questionEn": "In proving that $\\lim_{x \\to 2} x^2 = 4$ via the $(\\epsilon, \\delta)$ definition, if we restrict $\\delta \\le 1$, what is the valid choice for $\\delta$?",
    "questionAr": "عند إثبات أن $\\lim_{x \\to 2} x^2 = 4$ بتعريف $(\\epsilon, \\delta)$، وبفرض قيد مبدئي $\\delta \\le 1$، ما هو الاختيار الصحيح لـ $\\delta$؟",
    "optionsEn": [
      "$\\delta = \\min\\left(1, \\frac{\\epsilon}{5}\\right)$",
      "$\\delta = \\min\\left(1, \\frac{\\epsilon}{4}\\right)$",
      "$\\delta = \\min\\left(1, 5\\epsilon\\right)$",
      "$\\delta = \\frac{\\epsilon}{2}$"
    ],
    "optionsAr": [
      "$\\delta = \\min\\left(1, \\frac{\\epsilon}{5}\\right)$",
      "$\\delta = \\min\\left(1, \\frac{\\epsilon}{4}\\right)$",
      "$\\delta = \\min\\left(1, 5\\epsilon\\right)$",
      "$\\delta = \\frac{\\epsilon}{2}$"
    ],
    "correctAnswer": "$\\delta = \\min\\left(1, \\frac{\\epsilon}{5}\\right)$",
    "correctIndex": 0,
    "hintEn": "Factor |x^2 - 4| = |x - 2||x + 2|. Bound |x + 2| when |x - 2| < 1.",
    "hintAr": "حلل |x^2 - 4| = |x - 2||x + 2|، ثم أوجد حداً أعلى لـ |x + 2| عندما |x - 2| < 1.",
    "stepByStepSolutionEn": [
      "1. We want $|x^2 - 4| = |x - 2| |x + 2| < \\epsilon$.",
      "2. Assume an initial bound $\\delta \\le 1$. Then $|x - 2| < 1 \\implies 1 < x < 3$.",
      "3. Adding 2 yields $3 < x + 2 < 5$, so $|x + 2| < 5$.",
      "4. Therefore, $|x^2 - 4| < 5 |x - 2|$.",
      "5. To ensure $5|x - 2| < \\epsilon$, we require $|x - 2| < \\frac{\\epsilon}{5}$.",
      "6. Thus, choose $\\delta = \\min\\left(1, \\frac{\\epsilon}{5}\\right)$."
    ],
    "stepByStepSolutionAr": [
      "١. نريد تحقيق: $|x^2 - 4| = |x - 2| |x + 2| < \\epsilon$.",
      "٢. نفرض قيداً مبدئياً $\\delta \\le 1$، إذن $1 < x < 3 \\implies |x + 2| < 5$.",
      "٣. بالتالي: $|x^2 - 4| < 5 |x - 2|$.",
      "٤. لكي يكون الناتج أقل من $\\epsilon$، نضع $|x - 2| < \\frac{\\epsilon}{5}$.",
      "٥. إذن الاختيار الصحيح هو $\\delta = \\min(1, \\frac{\\epsilon}{5})$."
    ],
    "teacherTipEn": "Setting delta <= 1 is the standard university and Baccalaureate technique to bound the non-linear factor.",
    "teacherTipAr": "فرض دلتا أقل من أو تساوي ١ هو الأسلوب القياسي في البكالوريا لعزل وحصر العامل غير الخطي."
  },
  {
    "id": "egbac_ana_ch1_se_09",
    "titleEn": "EG-Bac Model Example 9: Fixed Point Theorem via Intermediate Value Property",
    "titleAr": "مثال البكالوريا النموذجي ٩: نظرية النقطة الثابتة بتطبيق نظرية القيم المتوسطة",
    "difficulty": "medium",
    "questionEn": "Let $f: [0, 1] \\to [0, 1]$ be a continuous function. Prove that $f$ has at least one fixed point, i.e., there exists $c \\in [0, 1]$ such that $f(c) = c$. Which auxiliary function is used?",
    "questionAr": "لتكن $f: [0, 1] \\to [0, 1]$ دالة متصلة. أثبت أن للدالة نقطة ثابتة واحدة على الأقل، أي يوجد $c \\in [0, 1]$ بحيث $f(c) = c$. ما هي الدالة المساعدة المستخدمة؟",
    "optionsEn": [
      "$g(x) = f(x) - x$",
      "$g(x) = f(x) + x$",
      "$g(x) = f(x) \\cdot x$",
      "$g(x) = \\frac{f(x)}{x}$"
    ],
    "optionsAr": [
      "$g(x) = f(x) - x$",
      "$g(x) = f(x) + x$",
      "$g(x) = f(x) \\cdot x$",
      "$g(x) = \\frac{f(x)}{x}$"
    ],
    "correctAnswer": "$g(x) = f(x) - x$",
    "correctIndex": 0,
    "hintEn": "Define g(x) such that g(c) = 0 corresponds to f(c) = c.",
    "hintAr": "عرّف الدالة g(x) بحيث انعدامها g(c) = 0 يكافئ f(c) = c.",
    "stepByStepSolutionEn": [
      "1. Define the auxiliary function $g(x) = f(x) - x$.",
      "2. Since $f$ and $x$ are continuous on $[0, 1]$, $g$ is continuous on $[0, 1]$.",
      "3. Evaluate at endpoints:",
      "   - At $x = 0$: $g(0) = f(0) - 0 = f(0) \\ge 0$ (since range is $[0, 1]$).",
      "   - At $x = 1$: $g(1) = f(1) - 1 \\le 0$ (since $f(1) \\le 1$).",
      "4. If $g(0) = 0$ or $g(1) = 0$, the fixed point is at the boundary.",
      "5. Otherwise $g(0) > 0$ and $g(1) < 0$. By Bolzano's Theorem, there exists $c \\in (0, 1)$ such that $g(c) = 0 \\implies f(c) = c$."
    ],
    "stepByStepSolutionAr": [
      "١. تعريف الدالة المساعدة: $g(x) = f(x) - x$.",
      "٢. الدالة متصلة على الفترة المغلقة $[0, 1]$.",
      "٣. عند الطرفين: $g(0) = f(0) \\ge 0$ و $g(1) = f(1) - 1 \\le 0$.",
      "٤. بتطبيق نظرية بولزانو، يوجد $c \\in [0, 1]$ ينعدم عنده $g(c) = 0 \\implies f(c) = c$."
    ],
    "teacherTipEn": "This is Brouwer's Fixed Point Theorem in dimension 1, a favorite deep question in STEM curricula.",
    "teacherTipAr": "هذه نظرية براور للنقطة الثابتة في البعد الواحد، وهي من المسائل المفاهيمية الرائعة لطلاب المدارس المتميزة."
  },
  {
    "id": "egbac_ana_ch1_se_10",
    "titleEn": "EG-Bac Model Example 10: Asymptotic Curvature and Hyperbolic Asymptotes",
    "titleAr": "مثال البكالوريا النموذجي ١٠: السلوك التقاربي للمنحنيات عند اللانهاية",
    "difficulty": "hots",
    "questionEn": "Find the horizontal asymptote of $f(x) = x \\left( \\sqrt{x^2 + 6} - x \\right)$ as $x \\to +\\infty$.",
    "questionAr": "أوجد المستقيم المقارب الأفقي للدالة $f(x) = x \\left( \\sqrt{x^2 + 6} - x \\right)$ عندما $x \\to +\\infty$.",
    "optionsEn": [
      "$y = 3$",
      "$y = 6$",
      "$y = 0$",
      "$y = \\frac{3}{2}$"
    ],
    "optionsAr": [
      "$y = 3$",
      "$y = 6$",
      "$y = 0$",
      "$y = \\frac{3}{2}$"
    ],
    "correctAnswer": "$y = 3$",
    "correctIndex": 0,
    "hintEn": "Multiply and divide by the conjugate expression sqrt(x^2 + 6) + x.",
    "hintAr": "اضرب واقسم على المرافق: جذر(س^٢ + ٦) + س.",
    "stepByStepSolutionEn": [
      "1. Form is $\\infty \\cdot (\\infty - \\infty)$, an indeterminate form.",
      "2. Multiply and divide by conjugate:",
      "   $$f(x) = x \\cdot \\frac{(\\sqrt{x^2 + 6} - x)(\\sqrt{x^2 + 6} + x)}{\\sqrt{x^2 + 6} + x} = \\frac{x(x^2 + 6 - x^2)}{\\sqrt{x^2 + 6} + x} = \\frac{6x}{\\sqrt{x^2 + 6} + x}$$",
      "3. Divide numerator and denominator by $x$ (for $x > 0$, $\\sqrt{x^2 + 6}/x = \\sqrt{1 + 6/x^2}$):",
      "   $$\\lim_{x \\to +\\infty} \\frac{6}{\\sqrt{1 + 6/x^2} + 1} = \\frac{6}{\\sqrt{1 + 0} + 1} = \\frac{6}{2} = 3$$",
      "4. Therefore, $y = 3$ is the horizontal asymptote as $x \\to +\\infty$."
    ],
    "stepByStepSolutionAr": [
      "١. الحالة غير معينة من الشكل $\\infty \\times (\\infty - \\infty)$.",
      "٢. الضرب في المرافق بسطاً ومقاماً:",
      "   $$f(x) = \\frac{6x}{\\sqrt{x^2 + 6} + x}$$",
      "٣. بالقسمة على $x$ وأخذ النهاية عندما $x \\to +\\infty$:",
      "   $$\\lim_{x \\to +\\infty} \\frac{6}{\\sqrt{1 + 6/x^2} + 1} = \\frac{6}{2} = 3$$",
      "٤. إذن المستقيم المقارب الأفقي هو $y = 3$."
    ],
    "teacherTipEn": "Conjugate multiplication converts indeterminate differences into determinate quotients.",
    "teacherTipAr": "الضرب في المرافق يحول حالات عدم التعيين في الطرح إلى كسر يمكن حساب نهايته بالقسمة على أعلى أس."
  }
];

export const egBacAnaCh1Exercises: SolvedProblem[] = [
  {
    "id": "egbac_ana_ch1_ex_01",
    "titleEn": "Exercise 1: Linear Epsilon-Delta Determination",
    "titleAr": "تمرين 1: تحديد دلتا في النهاية الخطية",
    "difficulty": "easy",
    "questionEn": "Applying the formal $(\\epsilon, \\delta)$ definition of a limit to $\\lim_{x \\to 1} (2x + 3) = 5$, find the optimal bound for $\\delta > 0$ in terms of $\\epsilon$.",
    "questionAr": "بتطبيق التعريف الدقيق $(\\epsilon, \\delta)$ للنهاية على $\\lim_{x \\to 1} (2x + 3) = 5$، أوجد القيمة المثلى للحد $\\delta > 0$ بدلالة $\\epsilon$.",
    "optionsEn": [
      "$\\delta = \\frac{\\epsilon}{2}$",
      "$\\delta = 2\\epsilon$",
      "$\\delta = \\frac{\\epsilon}{4}$",
      "$\\delta = \\frac{\\epsilon}{4}$"
    ],
    "optionsAr": [
      "$\\delta = \\frac{\\epsilon}{2}$",
      "$\\delta = 2\\epsilon$",
      "$\\delta = \\frac{\\epsilon}{4}$",
      "$\\delta = \\frac{\\epsilon}{4}$"
    ],
    "correctAnswer": "$\\delta = \\frac{\\epsilon}{2}$",
    "correctIndex": 0,
    "hintEn": "|f(x) - L| = a * |x - 1| < epsilon.",
    "hintAr": "المقدار يساوي المعامل مضروباً في |x - 1| أقل من إبسيلون.",
    "stepByStepSolutionEn": [
      "1. $|(2x + 3) - (5)| = |2x - 2| = 2|x - 1|$.",
      "2. $2|x - 1| < \\epsilon \\implies |x - 1| < \\frac{\\epsilon}{2}$.",
      "3. Thus $\\delta = \\frac{\\epsilon}{2}$."
    ],
    "stepByStepSolutionAr": [
      "١. $|(2x + 3) - (5)| = 2|x - 1|$.",
      "٢. $2|x - 1| < \\epsilon \\implies |x - 1| < \\frac{\\epsilon}{2}$.",
      "٣. إذن $\\delta = \\frac{\\epsilon}{2}$."
    ],
    "teacherTipEn": "Delta equals epsilon divided by the slope.",
    "teacherTipAr": "دلتا تساوي إبسيلون مقسومة على ميل الدالة الخطية."
  },
  {
    "id": "egbac_ana_ch1_ex_02",
    "titleEn": "Exercise 2: Linear Epsilon-Delta Determination",
    "titleAr": "تمرين 2: تحديد دلتا في النهاية الخطية",
    "difficulty": "easy",
    "questionEn": "For the linear limit statement $\\lim_{x \\to 1} (3x + 3) = 6$, determine the maximum allowable $\\delta$ for any given tolerance $\\epsilon > 0$.",
    "questionAr": "للنهاية الخطية $\\lim_{x \\to 1} (3x + 3) = 6$، حدد أقصى قيمة مسموح بها لـ $\\delta$ لأي سماحية معطاة $\\epsilon > 0$.",
    "optionsEn": [
      "$\\delta = 3\\epsilon$",
      "$\\delta = \\frac{\\epsilon}{3}$",
      "$\\delta = \\frac{\\epsilon}{5}$",
      "$\\delta = \\frac{\\epsilon}{6}$"
    ],
    "optionsAr": [
      "$\\delta = 3\\epsilon$",
      "$\\delta = \\frac{\\epsilon}{3}$",
      "$\\delta = \\frac{\\epsilon}{5}$",
      "$\\delta = \\frac{\\epsilon}{6}$"
    ],
    "correctAnswer": "$\\delta = \\frac{\\epsilon}{3}$",
    "correctIndex": 1,
    "hintEn": "|f(x) - L| = a * |x - 1| < epsilon.",
    "hintAr": "المقدار يساوي المعامل مضروباً في |x - 1| أقل من إبسيلون.",
    "stepByStepSolutionEn": [
      "1. $|(3x + 3) - (6)| = |3x - 3| = 3|x - 1|$.",
      "2. $3|x - 1| < \\epsilon \\implies |x - 1| < \\frac{\\epsilon}{3}$.",
      "3. Thus $\\delta = \\frac{\\epsilon}{3}$."
    ],
    "stepByStepSolutionAr": [
      "١. $|(3x + 3) - (6)| = 3|x - 1|$.",
      "٢. $3|x - 1| < \\epsilon \\implies |x - 1| < \\frac{\\epsilon}{3}$.",
      "٣. إذن $\\delta = \\frac{\\epsilon}{3}$."
    ],
    "teacherTipEn": "Delta equals epsilon divided by the slope.",
    "teacherTipAr": "دلتا تساوي إبسيلون مقسومة على ميل الدالة الخطية."
  },
  {
    "id": "egbac_ana_ch1_ex_03",
    "titleEn": "Exercise 3: Linear Epsilon-Delta Determination",
    "titleAr": "تمرين 3: تحديد دلتا في النهاية الخطية",
    "difficulty": "easy",
    "questionEn": "Using the rigorous definition of a limit, establish the relationship for $\\delta(\\epsilon)$ in $\\lim_{x \\to 1} (4x + 3) = 7$.",
    "questionAr": "باستخدام التعريف الرياضي المحكم للنهاية، أوجد العلاقة المحددة لـ $\\delta(\\epsilon)$ في النهاية $\\lim_{x \\to 1} (4x + 3) = 7$.",
    "optionsEn": [
      "$\\delta = 4\\epsilon$",
      "$\\delta = \\frac{\\epsilon}{6}$",
      "$\\delta = \\frac{\\epsilon}{4}$",
      "$\\delta = \\frac{\\epsilon}{8}$"
    ],
    "optionsAr": [
      "$\\delta = 4\\epsilon$",
      "$\\delta = \\frac{\\epsilon}{6}$",
      "$\\delta = \\frac{\\epsilon}{4}$",
      "$\\delta = \\frac{\\epsilon}{8}$"
    ],
    "correctAnswer": "$\\delta = \\frac{\\epsilon}{4}$",
    "correctIndex": 2,
    "hintEn": "|f(x) - L| = a * |x - 1| < epsilon.",
    "hintAr": "المقدار يساوي المعامل مضروباً في |x - 1| أقل من إبسيلون.",
    "stepByStepSolutionEn": [
      "1. $|(4x + 3) - (7)| = |4x - 4| = 4|x - 1|$.",
      "2. $4|x - 1| < \\epsilon \\implies |x - 1| < \\frac{\\epsilon}{4}$.",
      "3. Thus $\\delta = \\frac{\\epsilon}{4}$."
    ],
    "stepByStepSolutionAr": [
      "١. $|(4x + 3) - (7)| = 4|x - 1|$.",
      "٢. $4|x - 1| < \\epsilon \\implies |x - 1| < \\frac{\\epsilon}{4}$.",
      "٣. إذن $\\delta = \\frac{\\epsilon}{4}$."
    ],
    "teacherTipEn": "Delta equals epsilon divided by the slope.",
    "teacherTipAr": "دلتا تساوي إبسيلون مقسومة على ميل الدالة الخطية."
  },
  {
    "id": "egbac_ana_ch1_ex_04",
    "titleEn": "Exercise 4: Linear Epsilon-Delta Determination",
    "titleAr": "تمرين 4: تحديد دلتا في النهاية الخطية",
    "difficulty": "easy",
    "questionEn": "In proving that $\\lim_{x \\to 1} (5x + 3) = 8$, what is the maximal value of $\\delta$ ensuring $|(5x + 3) - 8| < \\epsilon$ whenever $0 < |x - 1| < \\delta$?",
    "questionAr": "في إثبات أن $\\lim_{x \\to 1} (5x + 3) = 8$، ما هي أقصى قيمة لـ $\\delta$ تضمن تحقق $|(5x + 3) - 8| < \\epsilon$ عندما $0 < |x - 1| < \\delta$؟",
    "optionsEn": [
      "$\\delta = 5\\epsilon$",
      "$\\delta = \\frac{\\epsilon}{7}$",
      "$\\delta = \\frac{\\epsilon}{10}$",
      "$\\delta = \\frac{\\epsilon}{5}$"
    ],
    "optionsAr": [
      "$\\delta = 5\\epsilon$",
      "$\\delta = \\frac{\\epsilon}{7}$",
      "$\\delta = \\frac{\\epsilon}{10}$",
      "$\\delta = \\frac{\\epsilon}{5}$"
    ],
    "correctAnswer": "$\\delta = \\frac{\\epsilon}{5}$",
    "correctIndex": 3,
    "hintEn": "|f(x) - L| = a * |x - 1| < epsilon.",
    "hintAr": "المقدار يساوي المعامل مضروباً في |x - 1| أقل من إبسيلون.",
    "stepByStepSolutionEn": [
      "1. $|(5x + 3) - (8)| = |5x - 5| = 5|x - 1|$.",
      "2. $5|x - 1| < \\epsilon \\implies |x - 1| < \\frac{\\epsilon}{5}$.",
      "3. Thus $\\delta = \\frac{\\epsilon}{5}$."
    ],
    "stepByStepSolutionAr": [
      "١. $|(5x + 3) - (8)| = 5|x - 1|$.",
      "٢. $5|x - 1| < \\epsilon \\implies |x - 1| < \\frac{\\epsilon}{5}$.",
      "٣. إذن $\\delta = \\frac{\\epsilon}{5}$."
    ],
    "teacherTipEn": "Delta equals epsilon divided by the slope.",
    "teacherTipAr": "دلتا تساوي إبسيلون مقسومة على ميل الدالة الخطية."
  },
  {
    "id": "egbac_ana_ch1_ex_05",
    "titleEn": "Exercise 5: Linear Epsilon-Delta Determination",
    "titleAr": "تمرين 5: تحديد دلتا في النهاية الخطية",
    "difficulty": "easy",
    "questionEn": "Given the limit $\\lim_{x \\to 1} (6x + 3) = 9$, specify the radius $\\delta > 0$ of the punctured neighborhood corresponding to a target error $\\epsilon > 0$.",
    "questionAr": "معطى النهاية $\\lim_{x \\to 1} (6x + 3) = 9$، حدد نصف قطر الجوار المثقوب $\\delta > 0$ المقابل لخطأ مستهدف $\\epsilon > 0$.",
    "optionsEn": [
      "$\\delta = \\frac{\\epsilon}{6}$",
      "$\\delta = 6\\epsilon$",
      "$\\delta = \\frac{\\epsilon}{8}$",
      "$\\delta = \\frac{\\epsilon}{12}$"
    ],
    "optionsAr": [
      "$\\delta = \\frac{\\epsilon}{6}$",
      "$\\delta = 6\\epsilon$",
      "$\\delta = \\frac{\\epsilon}{8}$",
      "$\\delta = \\frac{\\epsilon}{12}$"
    ],
    "correctAnswer": "$\\delta = \\frac{\\epsilon}{6}$",
    "correctIndex": 0,
    "hintEn": "|f(x) - L| = a * |x - 1| < epsilon.",
    "hintAr": "المقدار يساوي المعامل مضروباً في |x - 1| أقل من إبسيلون.",
    "stepByStepSolutionEn": [
      "1. $|(6x + 3) - (9)| = |6x - 6| = 6|x - 1|$.",
      "2. $6|x - 1| < \\epsilon \\implies |x - 1| < \\frac{\\epsilon}{6}$.",
      "3. Thus $\\delta = \\frac{\\epsilon}{6}$."
    ],
    "stepByStepSolutionAr": [
      "١. $|(6x + 3) - (9)| = 6|x - 1|$.",
      "٢. $6|x - 1| < \\epsilon \\implies |x - 1| < \\frac{\\epsilon}{6}$.",
      "٣. إذن $\\delta = \\frac{\\epsilon}{6}$."
    ],
    "teacherTipEn": "Delta equals epsilon divided by the slope.",
    "teacherTipAr": "دلتا تساوي إبسيلون مقسومة على ميل الدالة الخطية."
  },
  {
    "id": "egbac_ana_ch1_ex_06",
    "titleEn": "Exercise 6: Squeeze Theorem with Oscillatory Factor",
    "titleAr": "تمرين 6: نظرية الحصر مع عامل تذبذبي",
    "difficulty": "medium",
    "questionEn": "Employ the Squeeze (Sandwich) Theorem to evaluate the oscillating limit $\\lim_{x \\to 0} x^{2} \\sin\\left(\\frac{1}{x^{1}}\\right)$.",
    "questionAr": "وظف نظرية الشطيرة (الحصر) لإيجاد النهاية التذبذبية $\\lim_{x \\to 0} x^{2} \\sin\\left(\\frac{1}{x^{1}}\\right)$.",
    "optionsEn": [
      "1",
      "0",
      "\\infty",
      "-1"
    ],
    "optionsAr": [
      "1",
      "0",
      "\\infty",
      "-1"
    ],
    "correctAnswer": "0",
    "correctIndex": 1,
    "hintEn": "-x^p <= x^p sin(...) <= x^p for positive powers.",
    "hintAr": "دالة الجيب محصورة بين -١ و ١.",
    "stepByStepSolutionEn": [
      "1. $|\\sin(1/x^{1})| \\le 1$.",
      "2. $|x^{2} \\sin(1/x^{1})| \\le |x|^{2}$.",
      "3. Since $\\lim_{x \\to 0} |x|^{2} = 0$, by the Squeeze Theorem the limit is 0."
    ],
    "stepByStepSolutionAr": [
      "١. دالة الجيب محصورة بمقياس أقل من أو يساوي ١.",
      "٢. $|x^{2} \\sin(1/x^{1})| \\le |x|^{2}$.",
      "٣. بنظرية الحصر، تؤول النهاية إلى الصفر."
    ],
    "teacherTipEn": "Bounded function multiplied by an infinitesimal factor yields zero.",
    "teacherTipAr": "حاصل ضرب دالة محدودة في كمية متناهية في الصغر يساوي صفراً."
  },
  {
    "id": "egbac_ana_ch1_ex_07",
    "titleEn": "Exercise 7: Squeeze Theorem with Oscillatory Factor",
    "titleAr": "تمرين 7: نظرية الحصر مع عامل تذبذبي",
    "difficulty": "medium",
    "questionEn": "Calculate the exact value of the limit as $x \\to 0$ for the function $f(x) = x^{3} \\sin\\left(\\frac{1}{x^{2}}\\right)$.",
    "questionAr": "احسب القيمة الدقيقة للنهاية عندما $x \\to 0$ للدالة $f(x) = x^{3} \\sin\\left(\\frac{1}{x^{2}}\\right)$.",
    "optionsEn": [
      "1",
      "\\infty",
      "0",
      "-1"
    ],
    "optionsAr": [
      "1",
      "\\infty",
      "0",
      "-1"
    ],
    "correctAnswer": "0",
    "correctIndex": 2,
    "hintEn": "-x^p <= x^p sin(...) <= x^p for positive powers.",
    "hintAr": "دالة الجيب محصورة بين -١ و ١.",
    "stepByStepSolutionEn": [
      "1. $|\\sin(1/x^{2})| \\le 1$.",
      "2. $|x^{3} \\sin(1/x^{2})| \\le |x|^{3}$.",
      "3. Since $\\lim_{x \\to 0} |x|^{3} = 0$, by the Squeeze Theorem the limit is 0."
    ],
    "stepByStepSolutionAr": [
      "١. دالة الجيب محصورة بمقياس أقل من أو يساوي ١.",
      "٢. $|x^{3} \\sin(1/x^{2})| \\le |x|^{3}$.",
      "٣. بنظرية الحصر، تؤول النهاية إلى الصفر."
    ],
    "teacherTipEn": "Bounded function multiplied by an infinitesimal factor yields zero.",
    "teacherTipAr": "حاصل ضرب دالة محدودة في كمية متناهية في الصغر يساوي صفراً."
  },
  {
    "id": "egbac_ana_ch1_ex_08",
    "titleEn": "Exercise 8: Squeeze Theorem with Oscillatory Factor",
    "titleAr": "تمرين 8: نظرية الحصر مع عامل تذبذبي",
    "difficulty": "medium",
    "questionEn": "Determine the limiting behavior of $x^{4} \\sin\\left(\\frac{1}{x^{3}}\\right)$ as the independent variable $x$ approaches zero.",
    "questionAr": "حدد السلوك التقاربي للدالة $x^{4} \\sin\\left(\\frac{1}{x^{3}}\\right)$ عندما يقترب المتغير المستقل $x$ من الصفر.",
    "optionsEn": [
      "1",
      "\\infty",
      "-1",
      "0"
    ],
    "optionsAr": [
      "1",
      "\\infty",
      "-1",
      "0"
    ],
    "correctAnswer": "0",
    "correctIndex": 3,
    "hintEn": "-x^p <= x^p sin(...) <= x^p for positive powers.",
    "hintAr": "دالة الجيب محصورة بين -١ و ١.",
    "stepByStepSolutionEn": [
      "1. $|\\sin(1/x^{3})| \\le 1$.",
      "2. $|x^{4} \\sin(1/x^{3})| \\le |x|^{4}$.",
      "3. Since $\\lim_{x \\to 0} |x|^{4} = 0$, by the Squeeze Theorem the limit is 0."
    ],
    "stepByStepSolutionAr": [
      "١. دالة الجيب محصورة بمقياس أقل من أو يساوي ١.",
      "٢. $|x^{4} \\sin(1/x^{3})| \\le |x|^{4}$.",
      "٣. بنظرية الحصر، تؤول النهاية إلى الصفر."
    ],
    "teacherTipEn": "Bounded function multiplied by an infinitesimal factor yields zero.",
    "teacherTipAr": "حاصل ضرب دالة محدودة في كمية متناهية في الصغر يساوي صفراً."
  },
  {
    "id": "egbac_ana_ch1_ex_09",
    "titleEn": "Exercise 9: Squeeze Theorem with Oscillatory Factor",
    "titleAr": "تمرين 9: نظرية الحصر مع عامل تذبذبي",
    "difficulty": "medium",
    "questionEn": "Find the limit: $\\lim_{x \\to 0} x^{5} \\sin\\left(\\frac{1}{x^{4}}\\right)$, noting that the sine factor is bounded on $[-1, 1]$.",
    "questionAr": "أوجد النهاية: $\\lim_{x \\to 0} x^{5} \\sin\\left(\\frac{1}{x^{4}}\\right)$، مع ملاحظة أن دالة الجيب محدودة في الفترة [-1, 1].",
    "optionsEn": [
      "0",
      "1",
      "\\infty",
      "-1"
    ],
    "optionsAr": [
      "0",
      "1",
      "\\infty",
      "-1"
    ],
    "correctAnswer": "0",
    "correctIndex": 0,
    "hintEn": "-x^p <= x^p sin(...) <= x^p for positive powers.",
    "hintAr": "دالة الجيب محصورة بين -١ و ١.",
    "stepByStepSolutionEn": [
      "1. $|\\sin(1/x^{4})| \\le 1$.",
      "2. $|x^{5} \\sin(1/x^{4})| \\le |x|^{5}$.",
      "3. Since $\\lim_{x \\to 0} |x|^{5} = 0$, by the Squeeze Theorem the limit is 0."
    ],
    "stepByStepSolutionAr": [
      "١. دالة الجيب محصورة بمقياس أقل من أو يساوي ١.",
      "٢. $|x^{5} \\sin(1/x^{4})| \\le |x|^{5}$.",
      "٣. بنظرية الحصر، تؤول النهاية إلى الصفر."
    ],
    "teacherTipEn": "Bounded function multiplied by an infinitesimal factor yields zero.",
    "teacherTipAr": "حاصل ضرب دالة محدودة في كمية متناهية في الصغر يساوي صفراً."
  },
  {
    "id": "egbac_ana_ch1_ex_10",
    "titleEn": "Exercise 10: Squeeze Theorem with Oscillatory Factor",
    "titleAr": "تمرين 10: نظرية الحصر مع عامل تذبذبي",
    "difficulty": "medium",
    "questionEn": "Evaluate the product limit $\\lim_{x \\to 0} x^{6} \\sin\\left(\\frac{1}{x^{5}}\\right)$ using standard boundedness properties.",
    "questionAr": "احسب نهاية حاصل الضرب $\\lim_{x \\to 0} x^{6} \\sin\\left(\\frac{1}{x^{5}}\\right)$ باستخدام خواص المحدودية القياسية.",
    "optionsEn": [
      "1",
      "0",
      "\\infty",
      "-1"
    ],
    "optionsAr": [
      "1",
      "0",
      "\\infty",
      "-1"
    ],
    "correctAnswer": "0",
    "correctIndex": 1,
    "hintEn": "-x^p <= x^p sin(...) <= x^p for positive powers.",
    "hintAr": "دالة الجيب محصورة بين -١ و ١.",
    "stepByStepSolutionEn": [
      "1. $|\\sin(1/x^{5})| \\le 1$.",
      "2. $|x^{6} \\sin(1/x^{5})| \\le |x|^{6}$.",
      "3. Since $\\lim_{x \\to 0} |x|^{6} = 0$, by the Squeeze Theorem the limit is 0."
    ],
    "stepByStepSolutionAr": [
      "١. دالة الجيب محصورة بمقياس أقل من أو يساوي ١.",
      "٢. $|x^{6} \\sin(1/x^{5})| \\le |x|^{6}$.",
      "٣. بنظرية الحصر، تؤول النهاية إلى الصفر."
    ],
    "teacherTipEn": "Bounded function multiplied by an infinitesimal factor yields zero.",
    "teacherTipAr": "حاصل ضرب دالة محدودة في كمية متناهية في الصغر يساوي صفراً."
  },
  {
    "id": "egbac_ana_ch1_ex_11",
    "titleEn": "Exercise 11: Oblique Asymptote Derivation",
    "titleAr": "تمرين 11: استنتاج المقارب المائل",
    "difficulty": "hots",
    "questionEn": "Determine the linear equation of the oblique (slant) asymptote as $x \\to \\infty$ for the rational curve $f(x) = \\frac{2x^2 + 5}{x}$.",
    "questionAr": "حدد معادلة الخط المستقيم للخط المقارب المائل عندما $x \\to \\infty$ للمنحنى الكسري $f(x) = \\frac{2x^2 + 5}{x}$.",
    "optionsEn": [
      "$y = 2x + 2$",
      "$y = 2x - 1$",
      "$y = 2x$",
      "$y = 3x$"
    ],
    "optionsAr": [
      "$y = 2x + 2$",
      "$y = 2x - 1$",
      "$y = 2x$",
      "$y = 3x$"
    ],
    "correctAnswer": "$y = 2x$",
    "correctIndex": 2,
    "hintEn": "f(x) = mx + 5/x. The 5/x term goes to 0 as x -> infinity.",
    "hintAr": "f(x) = mx + 5/x، والحد 5/x يؤول للصفر عند اللانهاية.",
    "stepByStepSolutionEn": [
      "1. Divide each term by $x$: $f(x) = 2x + \\frac{5}{x}$.",
      "2. $\\lim_{x \\to \\infty} [f(x) - 2x] = \\lim_{x \\to \\infty} \\frac{5}{x} = 0$.",
      "3. Thus $y = 2x$ is the oblique asymptote."
    ],
    "stepByStepSolutionAr": [
      "١. بقسمة كل حد على $x$: $f(x) = 2x + \\frac{5}{x}$.",
      "٢. $\\lim_{x \\to \\infty} [f(x) - 2x] = 0$.",
      "٣. إذن المقارب المائل هو $y = 2x$."
    ],
    "teacherTipEn": "Direct division reveals the asymptote polynomial immediately.",
    "teacherTipAr": "القسمة المباشرة تكشف معادلة المقارب المائل فوراً."
  },
  {
    "id": "egbac_ana_ch1_ex_12",
    "titleEn": "Exercise 12: Oblique Asymptote Derivation",
    "titleAr": "تمرين 12: استنتاج المقارب المائل",
    "difficulty": "hots",
    "questionEn": "Find the slant asymptote governing the asymptotic growth of $f(x) = \\frac{3x^2 + 5}{x}$ as $x \\to +\\infty$.",
    "questionAr": "أوجد الخط المقارب المائل الذي يحكم النمو التقاربي للدالة $f(x) = \\frac{3x^2 + 5}{x}$ عندما $x \\to +\\infty$.",
    "optionsEn": [
      "$y = 3x + 2$",
      "$y = 3x - 1$",
      "$y = 4x$",
      "$y = 3x$"
    ],
    "optionsAr": [
      "$y = 3x + 2$",
      "$y = 3x - 1$",
      "$y = 4x$",
      "$y = 3x$"
    ],
    "correctAnswer": "$y = 3x$",
    "correctIndex": 3,
    "hintEn": "f(x) = mx + 5/x. The 5/x term goes to 0 as x -> infinity.",
    "hintAr": "f(x) = mx + 5/x، والحد 5/x يؤول للصفر عند اللانهاية.",
    "stepByStepSolutionEn": [
      "1. Divide each term by $x$: $f(x) = 3x + \\frac{5}{x}$.",
      "2. $\\lim_{x \\to \\infty} [f(x) - 3x] = \\lim_{x \\to \\infty} \\frac{5}{x} = 0$.",
      "3. Thus $y = 3x$ is the oblique asymptote."
    ],
    "stepByStepSolutionAr": [
      "١. بقسمة كل حد على $x$: $f(x) = 3x + \\frac{5}{x}$.",
      "٢. $\\lim_{x \\to \\infty} [f(x) - 3x] = 0$.",
      "٣. إذن المقارب المائل هو $y = 3x$."
    ],
    "teacherTipEn": "Direct division reveals the asymptote polynomial immediately.",
    "teacherTipAr": "القسمة المباشرة تكشف معادلة المقارب المائل فوراً."
  },
  {
    "id": "egbac_ana_ch1_ex_13",
    "titleEn": "Exercise 13: Oblique Asymptote Derivation",
    "titleAr": "تمرين 13: استنتاج المقارب المائل",
    "difficulty": "hots",
    "questionEn": "Identify the equation $y = mx + c$ of the oblique asymptote to the graph of $f(x) = \\frac{4x^2 + 5}{x}$ at positive infinity.",
    "questionAr": "عين معادلة الخط المقارب المائل $y = mx + c$ لمنحنى الدالة $f(x) = \\frac{4x^2 + 5}{x}$ عند موجب ما لا نهاية.",
    "optionsEn": [
      "$y = 4x$",
      "$y = 4x + 2$",
      "$y = 4x - 1$",
      "$y = 5x$"
    ],
    "optionsAr": [
      "$y = 4x$",
      "$y = 4x + 2$",
      "$y = 4x - 1$",
      "$y = 5x$"
    ],
    "correctAnswer": "$y = 4x$",
    "correctIndex": 0,
    "hintEn": "f(x) = mx + 5/x. The 5/x term goes to 0 as x -> infinity.",
    "hintAr": "f(x) = mx + 5/x، والحد 5/x يؤول للصفر عند اللانهاية.",
    "stepByStepSolutionEn": [
      "1. Divide each term by $x$: $f(x) = 4x + \\frac{5}{x}$.",
      "2. $\\lim_{x \\to \\infty} [f(x) - 4x] = \\lim_{x \\to \\infty} \\frac{5}{x} = 0$.",
      "3. Thus $y = 4x$ is the oblique asymptote."
    ],
    "stepByStepSolutionAr": [
      "١. بقسمة كل حد على $x$: $f(x) = 4x + \\frac{5}{x}$.",
      "٢. $\\lim_{x \\to \\infty} [f(x) - 4x] = 0$.",
      "٣. إذن المقارب المائل هو $y = 4x$."
    ],
    "teacherTipEn": "Direct division reveals the asymptote polynomial immediately.",
    "teacherTipAr": "القسمة المباشرة تكشف معادلة المقارب المائل فوراً."
  },
  {
    "id": "egbac_ana_ch1_ex_14",
    "titleEn": "Exercise 14: Oblique Asymptote Derivation",
    "titleAr": "تمرين 14: استنتاج المقارب المائل",
    "difficulty": "hots",
    "questionEn": "Perform polynomial division on $f(x) = \\frac{5x^2 + 5}{x}$ to extract its oblique asymptote as $x \\to \\infty$.",
    "questionAr": "أجرِ القسمة على $f(x) = \\frac{5x^2 + 5}{x}$ لاستخراج خطها المقارب المائل عندما $x \\to \\infty$.",
    "optionsEn": [
      "$y = 5x + 2$",
      "$y = 5x$",
      "$y = 5x - 1$",
      "$y = 6x$"
    ],
    "optionsAr": [
      "$y = 5x + 2$",
      "$y = 5x$",
      "$y = 5x - 1$",
      "$y = 6x$"
    ],
    "correctAnswer": "$y = 5x$",
    "correctIndex": 1,
    "hintEn": "f(x) = mx + 5/x. The 5/x term goes to 0 as x -> infinity.",
    "hintAr": "f(x) = mx + 5/x، والحد 5/x يؤول للصفر عند اللانهاية.",
    "stepByStepSolutionEn": [
      "1. Divide each term by $x$: $f(x) = 5x + \\frac{5}{x}$.",
      "2. $\\lim_{x \\to \\infty} [f(x) - 5x] = \\lim_{x \\to \\infty} \\frac{5}{x} = 0$.",
      "3. Thus $y = 5x$ is the oblique asymptote."
    ],
    "stepByStepSolutionAr": [
      "١. بقسمة كل حد على $x$: $f(x) = 5x + \\frac{5}{x}$.",
      "٢. $\\lim_{x \\to \\infty} [f(x) - 5x] = 0$.",
      "٣. إذن المقارب المائل هو $y = 5x$."
    ],
    "teacherTipEn": "Direct division reveals the asymptote polynomial immediately.",
    "teacherTipAr": "القسمة المباشرة تكشف معادلة المقارب المائل فوراً."
  },
  {
    "id": "egbac_ana_ch1_ex_15",
    "titleEn": "Exercise 15: Oblique Asymptote Derivation",
    "titleAr": "تمرين 15: استنتاج المقارب المائل",
    "difficulty": "hots",
    "questionEn": "Determine the oblique asymptotic line approached by the trajectory $f(x) = \\frac{6x^2 + 5}{x}$ for arbitrarily large values of $x$.",
    "questionAr": "حدد معادلة الخط المقارب المائل الذي يقترب منه مسار $f(x) = \\frac{6x^2 + 5}{x}$ للقيم الكبيرة جداً لـ $x$.",
    "optionsEn": [
      "$y = 6x + 2$",
      "$y = 6x - 1$",
      "$y = 6x$",
      "$y = 7x$"
    ],
    "optionsAr": [
      "$y = 6x + 2$",
      "$y = 6x - 1$",
      "$y = 6x$",
      "$y = 7x$"
    ],
    "correctAnswer": "$y = 6x$",
    "correctIndex": 2,
    "hintEn": "f(x) = mx + 5/x. The 5/x term goes to 0 as x -> infinity.",
    "hintAr": "f(x) = mx + 5/x، والحد 5/x يؤول للصفر عند اللانهاية.",
    "stepByStepSolutionEn": [
      "1. Divide each term by $x$: $f(x) = 6x + \\frac{5}{x}$.",
      "2. $\\lim_{x \\to \\infty} [f(x) - 6x] = \\lim_{x \\to \\infty} \\frac{5}{x} = 0$.",
      "3. Thus $y = 6x$ is the oblique asymptote."
    ],
    "stepByStepSolutionAr": [
      "١. بقسمة كل حد على $x$: $f(x) = 6x + \\frac{5}{x}$.",
      "٢. $\\lim_{x \\to \\infty} [f(x) - 6x] = 0$.",
      "٣. إذن المقارب المائل هو $y = 6x$."
    ],
    "teacherTipEn": "Direct division reveals the asymptote polynomial immediately.",
    "teacherTipAr": "القسمة المباشرة تكشف معادلة المقارب المائل فوراً."
  }
];
