import type { SolvedProblem } from '../../../types/curriculum';

export const algCh1SolvedExamples: SolvedProblem[] = [
  {
    "id": "alg_ch1_ex1",
    "titleEn": "Official Book Example 1: Fundamental Counting Principle with Parity Constraint",
    "titleAr": "مثال الكتاب الوزاري ١: مبدأ العد الأساسي مع شرط الأعداد الزوجية",
    "difficulty": "medium",
    "questionEn": "How many 3-digit even numbers can be formed using the digits from the set $\\{1, 2, 3, 4, 5, 6\\}$ without repetition?",
    "questionAr": "كم عدداً زوجياً مكوناً من ٣ أرقام مختلفة يمكن تكوينه من عناصر المجموعة $\\{١، ٢، ٣، ٤، ٥، ٦\\}$ بدون تكرار؟",
    "optionsEn": [
      "60",
      "36",
      "72",
      "120"
    ],
    "optionsAr": [
      "٦٠",
      "٣٦",
      "٧٢",
      "١٢٠"
    ],
    "correctAnswer": "60",
    "correctIndex": 0,
    "hintEn": "To be even, the units digit must be chosen from the even numbers {2, 4, 6}. Then fill tens and hundreds from remaining digits without repetition.",
    "hintAr": "لكي يكون العدد زوجياً، يجب أن يكون رقم الآحاد زوجياً من المجموعة {٢، ٤، ٦}. ثم نملأ خانتي العشرات والمئات من باقي الأرقام بدون تكرار.",
    "stepByStepSolutionEn": [
      "Identify the digits available: $\\{1, 2, 3, 4, 5, 6\\}$, total 6 digits.",
      "Step 1 (Units digit): Must be even $\\in \\{2, 4, 6\\} \\implies 3$ choices.",
      "Step 2 (Tens digit): Any of the remaining $6 - 1 = 5$ digits $\\implies 5$ choices.",
      "Step 3 (Hundreds digit): Any of the remaining $5 - 1 = 4$ digits $\\implies 4$ choices.",
      "By the Fundamental Counting Principle (multiplication rule):",
      "$$\\text{Total Numbers} = 3 \\times 5 \\times 4 = 60$$"
    ],
    "stepByStepSolutionAr": [
      "تحديد الأرقام المتاحة: $\\{١، ٢، ٣، ٤، ٥، ٦\\}$ وعددهم ٦ أرقام.",
      "الخطوة ١ (خانة الآحاد): يجب أن تكون عدداً زوجياً $\\in \\{٢، ٤، ٦\\}$، إذن يوجد ٣ خيارات.",
      "الخطوة ٢ (خانة العشرات): أي رقم من الأرقام المتبقية ($٦ - ١ = ٥$)، إذن ٥ خيارات.",
      "الخطوة ٣ (خانة المئات): أي رقم من الأرقام المتبقية ($٥ - ١ = ٤$)، إذن ٤ خيارات.",
      "بتطبيق مبدأ العد الأساسي (قاعدة الضرب):",
      "$$\\text{عدد الأعداد الكلي} = ٣ \\times ٥ \\times ٤ = ٦٠$$"
    ],
    "teacherTipEn": "Always fill the restricted position (here the units place for evenness) first before filling the unconstrained places.",
    "teacherTipAr": "ابدأ دائماً بملء الخانة المقيدة بشرط (هنا خانة الآحاد لشرط الزوجية) قبل ملء الخانات الحرة."
  },
  {
    "id": "alg_ch1_ex2",
    "titleEn": "Official Book Example 2: Circular vs Linear Permutations of Students",
    "titleAr": "مثال الكتاب الوزاري ٢: التباديل الدائرية والخطية للطلاب",
    "difficulty": "easy",
    "questionEn": "In how many ways can 5 students sit around a circular table, and in how many ways can they sit in a row of 5 chairs?",
    "questionAr": "بكم طريقة يمكن لـ ٥ طلاب الجلوس حول مائدة مستديرة، وبكم طريقة يمكنهم الجلوس في صف به ٥ مقاعد؟",
    "optionsEn": [
      "24 in circle, 120 in row",
      "120 in circle, 24 in row",
      "60 in circle, 120 in row",
      "24 in circle, 24 in row"
    ],
    "optionsAr": [
      "٢٤ في دائرة، ١٢٠ في صف",
      "١٢٠ في دائرة، ٢٤ في صف",
      "٦٠ في دائرة، ١٢٠ في صف",
      "٢٤ في دائرة، ٢٤ في صف"
    ],
    "correctAnswer": "24 in circle, 120 in row",
    "correctIndex": 0,
    "hintEn": "Arrangement in a circle has no fixed beginning: $(n-1)!$. Arrangement in a straight row: $n!$.",
    "hintAr": "الترتيب في دائرة ليس له نقطة بداية محددة: $(n-1)!$. أما الترتيب في صف مستقيم: $n!$.",
    "stepByStepSolutionEn": [
      "Case 1: Around a circular table ($n = 5$):",
      "$$\\text{Ways} = (n - 1)! = (5 - 1)! = 4! = 4 \\times 3 \\times 2 \\times 1 = 24$$",
      "Case 2: In a linear row of 5 chairs ($n = 5$):",
      "$$\\text{Ways} = n! = 5! = 5 \\times 4 \\times 3 \\times 2 \\times 1 = 120$$"
    ],
    "stepByStepSolutionAr": [
      "الحالة الأولى: حول مائدة دائرية ($n = ٥$):",
      "$$\\text{عدد الطرق} = (n - 1)! = (٥ - ١)! = ٤! = ٤ \\times ٣ \\times ٢ \\times ١ = ٢٤$$",
      "الحالة الثانية: في صف مستقيم به ٥ مقاعد ($n = ٥$):",
      "$$\\text{عدد الطرق} = n! = ٥! = ٥ \\times ٤ \\times ٣ \\times ٢ \\times ١ = ١٢٠$$"
    ],
    "teacherTipEn": "Notice that circular arrangements modulo rotations divide the linear permutations by $n$: $n! / n = (n-1)!$.",
    "teacherTipAr": "الترتيب الدائري يقسم الترتيب الخطي على $n$ بسبب تماثل الدوران: $n! / n = (n-1)!$."
  },
  {
    "id": "alg_ch1_ex3",
    "titleEn": "Official Book Example 3: Factorial Algebraic Equation",
    "titleAr": "مثال الكتاب الوزاري ٣: معادلة جبرية للمضاريب",
    "difficulty": "medium",
    "questionEn": "Solve for $n \\in \\mathbb{N}$ if $\\frac{n!}{(n - 2)!} = 42$.",
    "questionAr": "أوجد قيمة $n \\in \\mathbb{N}$ إذا كان $\\frac{n!}{(n - 2)!} = ٤٢$.",
    "optionsEn": [
      "n = 7",
      "n = 6",
      "n = 8",
      "n = 9"
    ],
    "optionsAr": [
      "n = ٧",
      "n = ٦",
      "n = ٨",
      "n = ٩"
    ],
    "correctAnswer": "n = 7",
    "correctIndex": 0,
    "hintEn": "Expand $n! = n(n-1)(n-2)!$ and simplify the common factorial term.",
    "hintAr": "فك المضروب $n! = n(n-1)(n-2)!$ ثم اختصر المضروب المشترك.",
    "stepByStepSolutionEn": [
      "Rewrite $n!$ as $n(n - 1)(n - 2)!$:",
      "$$\\frac{n(n - 1)(n - 2)!}{(n - 2)!} = 42$$",
      "Cancel $(n - 2)!$ for $n \\ge 2$:",
      "$$n(n - 1) = 42$$",
      "Expand and rearrange into a standard quadratic equation:",
      "$$n^2 - n - 42 = 0 \\implies (n - 7)(n + 6) = 0$$",
      "Since $n \\in \\mathbb{N}$ and $n \\ge 2$, reject $n = -6$. Thus $n = 7$.",
      "Alternatively, recognize that $42 = 7 \\times 6$, so the product of two consecutive integers gives $n = 7$."
    ],
    "stepByStepSolutionAr": [
      "فك $n!$ إلى $n(n - 1)(n - 2)!$:",
      "$$\\frac{n(n - 1)(n - 2)!}{(n - 2)!} = ٤٢$$",
      "اختصار $(n - 2)!$ بشرط $n \\ge ٢$:",
      "$$n(n - 1) = ٤٢$$",
      "فك الأقواس والتحليل إلى معادلة تربيعية:",
      "$$n^2 - n - ٤٢ = ٠ \\implies (n - ٧)(n + ٦) = ٠$$",
      "بما أن $n \\in \\mathbb{N}$، نرفض الحل السالب $n = -٦$، إذن $n = ٧$.",
      "أو مباشرة بملاحظة أن $٤٢ = ٧ \\times ٦$ حاصل ضرب عددين صحيحين متتاليين أكبرهما $n = ٧$."
    ],
    "teacherTipEn": "Factoring product of consecutive integers is faster than quadratic formula during exam time.",
    "teacherTipAr": "البحث عن حاصل ضرب عددين متتاليين أسرع في الامتحان من حل المعادلة التربيعية بالقانون العام."
  },
  {
    "id": "alg_ch1_ex4",
    "titleEn": "Official Book Example 4: Combinations Symmetry & Equality Property",
    "titleAr": "مثال الكتاب الوزاري ٤: خاصية التساوي وقانون التبسيط في التوافيق",
    "difficulty": "easy",
    "questionEn": "If $\\binom{n}{7} = \\binom{n}{5}$, find the value of $\\binom{n}{10}$ and $P(n, 2)$.",
    "questionAr": "إذا كان $\\binom{n}{٧} = \\binom{n}{٥}$، فأوجد قيمة كل من $\\binom{n}{١٠}$ و $P(n, ٢)$.",
    "optionsEn": [
      "C(n, 10) = 66, P(n, 2) = 132",
      "C(n, 10) = 55, P(n, 2) = 110",
      "C(n, 10) = 66, P(n, 2) = 120",
      "C(n, 10) = 78, P(n, 2) = 132"
    ],
    "optionsAr": [
      "C(n, 10) = ٦٦، P(n, 2) = ١٣٢",
      "C(n, 10) = ٥٥، P(n, 2) = ١١٠",
      "C(n, 10) = ٦٦، P(n, 2) = ١٢٠",
      "C(n, 10) = ٧٨، P(n, 2) = ١٣٢"
    ],
    "correctAnswer": "C(n, 10) = 66, P(n, 2) = 132",
    "correctIndex": 0,
    "hintEn": "If C(n, x) = C(n, y), then either x = y (not true here as 7 != 5) or x + y = n.",
    "hintAr": "إذا كان C(n, x) = C(n, y) فإن إما x = y (مستحيل لأن ٧ != ٥) أو x + y = n.",
    "stepByStepSolutionEn": [
      "Apply the combinations equality theorem:",
      "If $\\binom{n}{x} = \\binom{n}{y}$ and $x \\ne y$, then $x + y = n$.",
      "Here $7 + 5 = n \\implies n = 12$.",
      "Calculate $\\binom{12}{10} = \\binom{12}{2} = \\frac{12 \\times 11}{2 \\times 1} = 66$.",
      "Calculate $P(12, 2) = 12 \\times 11 = 132$."
    ],
    "stepByStepSolutionAr": [
      "تطبيق قانون التساوي في التوافيق:",
      "إذا كان $\\binom{n}{x} = \\binom{n}{y}$ وكان $x \\ne y$ فإن $x + y = n$.",
      "هنا $٧ + ٥ = n \\implies n = ١٢$.",
      "حساب $\\binom{١٢}{١٠} = \\binom{١٢}{٢} = \\frac{١٢ \\times ١١}{٢ \\times ١} = ٦٦$.",
      "حساب $P(١٢, ٢) = ١٢ \\times ١١ = ١٣٢$."
    ],
    "teacherTipEn": "Always simplify C(n, r) to C(n, n-r) whenever r > n/2 to make mental calculation effortless.",
    "teacherTipAr": "استخدم دائماً قانون التبسيط C(n, r) = C(n, n-r) عندما يكون r أكبر من نصف n لتسهيل الحسابات."
  },
  {
    "id": "alg_ch1_ex5",
    "titleEn": "Official Book Example 5: Pascal Addition Law for Combinations",
    "titleAr": "مثال الكتاب الوزاري ٥: قانون الجمع في التوافيق (مثلث باسكال)",
    "difficulty": "easy",
    "questionEn": "Evaluate as a single combination: $\\binom{14}{5} + \\binom{14}{4}$.",
    "questionAr": "اكتب في صورة توفيقة واحدة واحسب قيمتها: $\\binom{١٤}{٥} + \\binom{١٤}{٤}$.",
    "optionsEn": [
      "C(15, 5) = 3003",
      "C(15, 4) = 1365",
      "C(14, 9) = 2002",
      "C(28, 9) = 3120"
    ],
    "optionsAr": [
      "C(15, 5) = ٣٠٠٣",
      "C(15, 4) = ١٣٦٥",
      "C(14, 9) = ٢٠٠٢",
      "C(28, 9) = ٣١٢٠"
    ],
    "correctAnswer": "C(15, 5) = 3003",
    "correctIndex": 0,
    "hintEn": "Pascal rule: C(n, r) + C(n, r-1) = C(n+1, r). Increase upper index by 1 and take the greater lower index.",
    "hintAr": "قانون الجمع لباسكال: C(n, r) + C(n, r-1) = C(n+1, r). نضيف ١ للعلم ونأخذ الدليل الأكبر.",
    "stepByStepSolutionEn": [
      "Observe the upper indices are both equal ($n = 14$).",
      "Observe the lower indices are consecutive ($r = 5$ and $r - 1 = 4$).",
      "By Pascal addition law:",
      "$$\\binom{n}{r} + \\binom{n}{r - 1} = \\binom{n + 1}{r}$$",
      "$$\\binom{14}{5} + \\binom{14}{4} = \\binom{14 + 1}{5} = \\binom{15}{5}$$",
      "Evaluate $\\binom{15}{5} = \\frac{15 \\times 14 \\times 13 \\times 12 \\times 11}{5 \\times 4 \\times 3 \\times 2 \\times 1} = 3003$."
    ],
    "stepByStepSolutionAr": [
      "العلمان متساويان وكلاهما يساوي ١٤.",
      "الدليلان متتاليان (٥ و ٤)، الدليل الأكبر هو ٥.",
      "بتطبيق قانون الجمع لباسكال:",
      "$$\\binom{n}{r} + \\binom{n}{r - 1} = \\binom{n + 1}{r}$$",
      "$$\\binom{١٤}{٥} + \\binom{١٤}{٤} = \\binom{١٤ + ١}{٥} = \\binom{١٥}{٥}$$",
      "حساب القيمة: $\\binom{١٥}{٥} = \\frac{١٥ \\times ١٤ \\times ١٣ \\times ١٢ \\times ١١}{٥ \\times ٤ \\times ٣ \\times ٢ \\times ١} = ٣٠٠٣$."
    ],
    "teacherTipEn": "Remember the golden rule of Pascal addition: \"Increment the top index by 1, and keep the larger bottom index\".",
    "teacherTipAr": "قاعدة ذهبية لقانون الجمع: \"زد على العَلَم ١، واختر الدليل الأكبر\"."
  },
  {
    "id": "alg_ch1_ex6",
    "titleEn": "Official Book Example 6: Ratio Law for Consecutive Combinations",
    "titleAr": "مثال الكتاب الوزاري ٦: قانون النسبة بين توفيقتين متتاليتين",
    "difficulty": "hots",
    "questionEn": "If $\\binom{n}{r} : \\binom{n}{r+1} : \\binom{n}{r+2} = 1 : 2 : 3$, find the values of $n$ and $r$.",
    "questionAr": "إذا كان $\\binom{n}{r} : \\binom{n}{r+1} : \\binom{n}{r+2} = ١ : ٢ : ٣$، فأوجد قيمتي $n$ و $r$.",
    "optionsEn": [
      "n = 14, r = 4",
      "n = 12, r = 3",
      "n = 15, r = 5",
      "n = 10, r = 2"
    ],
    "optionsAr": [
      "n = ١٤، r = ٤",
      "n = ١٢، r = ٣",
      "n = ١٥، r = ٥",
      "n = ١٠، r = ٢"
    ],
    "correctAnswer": "n = 14, r = 4",
    "correctIndex": 0,
    "hintEn": "Form two ratio equations: C(n, r+1)/C(n, r) = 2/1 and C(n, r+2)/C(n, r+1) = 3/2 using the ratio formula.",
    "hintAr": "كون معادلتين باستخدام قانون النسبة: C(n, r+1)/C(n, r) = ٢/١ و C(n, r+2)/C(n, r+1) = ٣/٢.",
    "stepByStepSolutionEn": [
      "First ratio equation using $\\frac{\\binom{n}{k}}{\\binom{n}{k-1}} = \\frac{n - k + 1}{k}$ with $k = r + 1$:",
      "$$\\frac{\\binom{n}{r+1}}{\\binom{n}{r}} = \\frac{n - (r + 1) + 1}{r + 1} = \\frac{n - r}{r + 1} = \\frac{2}{1}$$",
      "$$n - r = 2r + 2 \\implies n - 3r = 2 \\quad \\text{--- (Equation 1)}$$",
      "Second ratio equation with $k = r + 2$:",
      "$$\\frac{\\binom{n}{r+2}}{\\binom{n}{r+1}} = \\frac{n - (r + 2) + 1}{r + 2} = \\frac{n - r - 1}{r + 2} = \\frac{3}{2}$$",
      "$$2(n - r - 1) = 3(r + 2) \\implies 2n - 2r - 2 = 3r + 6 \\implies 2n - 5r = 8 \\quad \\text{--- (Equation 2)}$$",
      "Multiply (Equation 1) by 2: $2n - 6r = 4$.",
      "Subtract from (Equation 2): $(2n - 5r) - (2n - 6r) = 8 - 4 \\implies r = 4$.",
      "Substitute $r = 4$ into (Equation 1): $n = 3(4) + 2 = 14$."
    ],
    "stepByStepSolutionAr": [
      "المعادلة الأولى بتطبيق قانون النسبة $\\frac{\\binom{n}{k}}{\\binom{n}{k-1}} = \\frac{n - k + 1}{k}$ حيث $k = r + ١$:",
      "$$\\frac{\\binom{n}{r+1}}{\\binom{n}{r}} = \\frac{n - r}{r + 1} = \\frac{٢}{١}$$",
      "$$n - r = ٢r + ٢ \\implies n - ٣r = ٢ \\quad \\text{--- (معادلة ١)}$$",
      "المعادلة الثانية حيث $k = r + ٢$:",
      "$$\\frac{\\binom{n}{r+2}}{\\binom{n}{r+1}} = \\frac{n - r - 1}{r + 2} = \\frac{٣}{٢}$$",
      "$$٢(n - r - ١) = ٣(r + ٢) \\implies ٢n - ٥r = ٨ \\quad \\text{--- (معادلة ٢)}$$",
      "بضرب المعادلة الأولى في ٢: $٢n - ٦r = ٤$.",
      "بطرح المعادلتين: $r = ٤$.",
      "بالتعويض لإيجاد $n$: $n = ٣(٤) + ٢ = ١٤$."
    ],
    "teacherTipEn": "Notice that in the ratio formula, the denominator $k$ is always the larger of the two consecutive lower indices.",
    "teacherTipAr": "تذكر دائماً أن المقام في قانون النسبة هو الدليل الأكبر بين الدليلين المتتاليين."
  },
  {
    "id": "alg_ch1_ex7",
    "titleEn": "Official Book Example 7: Binomial General Term Simplification",
    "titleAr": "مثال الكتاب الوزاري ٧: إيجاد وتبسيط الحد العام في مفكوك ذات الحدين",
    "difficulty": "medium",
    "questionEn": "In the expansion of $\\left(2x^2 - \\frac{1}{x}\\right)^{12}$, find the 7th term $T_7$ in simplest form.",
    "questionAr": "في مفكوك $\\left(٢ س^٢ - \\frac{١}{س}\\right)^{١٢}$، أوجد الحد السابع $T_7$ في أبسط صورة.",
    "optionsEn": [
      "59136 x^6",
      "-59136 x^6",
      "59136 x^8",
      "-29568 x^6"
    ],
    "optionsAr": [
      "٥٩١٣٦ س^٦",
      "-٥٩١٣٦ س^٦",
      "٥٩١٣٦ س^٨",
      "-٢٩٥٦٨ س^٦"
    ],
    "correctAnswer": "59136 x^6",
    "correctIndex": 0,
    "hintEn": "Use T_{r+1} = C(n, r) (first)^{n-r} (second)^r. Here r = 6, first = 2x^2, second = -1/x.",
    "hintAr": "استخدم قانون الحد العام: T_{r+1} = C(n, r) (الأول)^{n-r} (الثاني)^r. هنا r = ٦.",
    "stepByStepSolutionEn": [
      "The general term formula in $(a + b)^n$ is $T_{r+1} = \\binom{n}{r} a^{n-r} b^r$.",
      "For $T_7$, we have $r = 6$, $n = 12$, $a = 2x^2$, and $b = -\\frac{1}{x}$:",
      "$$T_7 = \\binom{12}{6} (2x^2)^{12 - 6} \\left(-\\frac{1}{x}\\right)^6$$",
      "Calculate combination: $\\binom{12}{6} = 924$.",
      "Simplify terms: $(2x^2)^6 = 2^6 x^{12} = 64 x^{12}$.",
      "$$\\left(-\\frac{1}{x}\\right)^6 = +\\frac{1}{x^6}$$ (since the power 6 is even).",
      "Combine coefficients and powers:",
      "$$T_7 = 924 \\times 64 \\times \\frac{x^{12}}{x^6} = 59136 x^6$$"
    ],
    "stepByStepSolutionAr": [
      "قانون الحد العام في مفكوك ذات الحدين: $T_{r+1} = \\binom{n}{r} a^{n-r} b^r$.",
      "لإيجاد الحد السابع $T_7$، نضع $r = ٦$، $n = ١٢$، $a = ٢ س^٢$، و $b = -\\frac{١}{س}$:",
      "$$T_7 = \\binom{١٢}{٦} (٢ س^٢)^{١٢ - ٦} \\left(-\\frac{١}{س}\\right)^٦$$",
      "قيمة التوفيقة: $\\binom{١٢}{٦} = ٩٢٤$.",
      "تبسيط القوى: $(٢ س^٢)^٦ = ٦٤ س^{١٢}$، و $\\left(-\\frac{١}{س}\\right)^٦ = +\\frac{١}{س^٦}$ (الأس الزوجي يلغي الإشارة السالبة).",
      "ضرب المعاملات والأسس:",
      "$$T_7 = ٩٢٤ \\times ٦٤ \\times س^{١٢ - ٦} = ٥٩١٣٦ س^٦$$"
    ],
    "teacherTipEn": "Be vigilant with signs: $(-1)^r$ is positive when $r$ is even and negative when $r$ is odd.",
    "teacherTipAr": "انتبه لإشارة الحد الثاني: $(-1)^r$ تكون موجبة إذا كان $r$ زوجياً، وسالبة إذا كان $r$ فردياً."
  },
  {
    "id": "alg_ch1_ex8",
    "titleEn": "Official Book Example 8: Term Independent of x in Binomial Expansion",
    "titleAr": "مثال الكتاب الوزاري ٨: الحد الخالي من س في مفكوك ذات الحدين",
    "difficulty": "hots",
    "questionEn": "In the expansion of $\\left(x^2 + \\frac{1}{x}\\right)^{15}$, find the term independent of $x$ and determine its numerical value.",
    "questionAr": "في مفكوك $\\left(س^٢ + \\frac{١}{س}\\right)^{١٥}$، أوجد رتبة الحد الخالي من س وقيمته العددية.",
    "optionsEn": [
      "T_11 = 3003",
      "T_10 = 5005",
      "T_12 = 1365",
      "T_9 = 6435"
    ],
    "optionsAr": [
      "T_11 = ٣٠٠٣",
      "T_10 = ٥٠٠٥",
      "T_12 = ١٣٦٥",
      "T_9 = ٦٤٣٥"
    ],
    "correctAnswer": "T_11 = 3003",
    "correctIndex": 0,
    "hintEn": "Write the general term T_{r+1}, group powers of x, and equate the total exponent of x to zero.",
    "hintAr": "اكتب الحد العام T_{r+1}، واجمع أسس س، ثم ساوِ الأس الكلي بالصفر.",
    "stepByStepSolutionEn": [
      "Write the general term $T_{r+1}$:",
      "$$T_{r+1} = \\binom{15}{r} (x^2)^{15 - r} \\left(\\frac{1}{x}\\right)^r = \\binom{15}{r} x^{30 - 2r} x^{-r} = \\binom{15}{r} x^{30 - 3r}$$",
      "For the term to be independent of $x$, the power of $x$ must equal 0:",
      "$$30 - 3r = 0 \\implies 3r = 30 \\implies r = 10$$",
      "Since $r = 10$, the term is $T_{r+1} = T_{10+1} = T_{11}$ (the 11th term).",
      "Calculate its value:",
      "$$T_{11} = \\binom{15}{10} = \\binom{15}{5} = \\frac{15 \\times 14 \\times 13 \\times 12 \\times 11}{5 \\times 4 \\times 3 \\times 2 \\times 1} = 3003$$"
    ],
    "stepByStepSolutionAr": [
      "كتابة الحد العام $T_{r+1}$:",
      "$$T_{r+1} = \\binom{١٥}{r} (س^٢)^{١٥ - r} \\left(\\frac{١}{س}\\right)^r = \\binom{١٥}{r} س^{٣٠ - ٢r} س^{-r} = \\binom{١٥}{r} س^{٣٠ - ٣r}$$",
      "لكي يكون الحد خالياً من س، يجب أن يكون أس س مساوياً للصفر:",
      "$$٣٠ - ٣r = ٠ \\implies ٣r = ٣٠ \\implies r = ١٠$$",
      "بما أن $r = ١٠$، إذن رتبة الحد هي $T_{r+1} = T_{١٠+١} = T_{١١}$ (الحد الحادي عشر).",
      "حساب قيمته:",
      "$$T_{١١} = \\binom{١٥}{١٠} = \\binom{١٥}{٥} = ٣٠٠٣$$"
    ],
    "teacherTipEn": "Always distinguish between the index $r$ and the term order $r+1$. A value of $r=10$ gives term $T_{11}$.",
    "teacherTipAr": "فرق دائماً بين دليل التوفيقة $r$ ورتبة الحد $r+1$. إذا كان $r = ١٠$ فإن رتبة الحد هي $T_{١١}$."
  },
  {
    "id": "alg_ch1_ex9",
    "titleEn": "Official Book Example 9: Middle Term of an Even Binomial Expansion",
    "titleAr": "مثال الكتاب الوزاري ٩: الحد الأوسط في مفكوك أس زوجي",
    "difficulty": "medium",
    "questionEn": "In the expansion of $\\left(3x - \\frac{1}{2}\\right)^{10}$, find the order of the middle term and evaluate it at $x = \\frac{1}{3}$.",
    "questionAr": "في مفكوك $\\left(٣ س - \\frac{١}{٢}\\right)^{١٠}$، أوجد رتبة الحد الأوسط وقيمته عندما $س = \\frac{١}{٣}$.",
    "optionsEn": [
      "T_6 = -252/32",
      "T_5 = 252/16",
      "T_6 = 252/32",
      "T_7 = -126/32"
    ],
    "optionsAr": [
      "T_6 = -٢٥٢/٣٢",
      "T_5 = ٢٥٢/١٦",
      "T_6 = ٢٥٢/٣٢",
      "T_7 = -١٢٦/٣٢"
    ],
    "correctAnswer": "T_6 = -252/32",
    "correctIndex": 0,
    "hintEn": "When n is even, there is a single middle term at rank (n/2) + 1. Here (10/2) + 1 = 6.",
    "hintAr": "عندما يكون الأس n زوجياً، يوجد حد أوسط وحيد رتبته (n / ٢) + ١. هنا (١٠ / ٢) + ١ = ٦.",
    "stepByStepSolutionEn": [
      "Since the power $n = 10$ is an even number, there is exactly one middle term.",
      "Order of middle term: $k = \\frac{n}{2} + 1 = \\frac{10}{2} + 1 = 6 \\implies T_6$.",
      "For $T_6$, we have $r = 5$:",
      "$$T_6 = \\binom{10}{5} (3x)^{10 - 5} \\left(-\\frac{1}{2}\\right)^5 = \\binom{10}{5} (3x)^5 \\left(-\\frac{1}{32}\\right)$$",
      "Substitute $x = \\frac{1}{3}$:",
      "$$3x = 3 \\times \\frac{1}{3} = 1 \\implies (3x)^5 = 1^5 = 1$$",
      "Evaluate combination: $\\binom{10}{5} = \\frac{10 \\times 9 \\times 8 \\times 7 \\times 6}{5 \\times 4 \\times 3 \\times 2 \\times 1} = 252$.",
      "$$T_6 = 252 \\times 1 \\times \\left(-\\frac{1}{32}\\right) = -\\frac{252}{32} = -\\frac{63}{8}$$"
    ],
    "stepByStepSolutionAr": [
      "بما أن الأس $n = ١٠$ عدد زوجي، فإنه يوجد حد أوسط وحيد.",
      "رتبة الحد الأوسط: $\\frac{n}{٢} + ١ = \\frac{١٠}{٢} + ١ = ٦$، إذن هو الحد السادس $T_6$.",
      "لإيجاد $T_6$ نضع $r = ٥$:",
      "$$T_6 = \\binom{١٠}{٥} (٣ س)^{٥} \\left(-\\frac{١}{٢}\\right)^٥$$",
      "بالتعويض عن $س = \\frac{١}{٣}$ نجد أن $٣ س = ١$ وبالتالي $(٣ س)^٥ = ١$.",
      "قيمة التوفيقة: $\\binom{١٠}{٥} = ٢٥٢$.",
      "$$T_6 = ٢٥٢ \\times ١ \\times \\left(-\\frac{١}{٣٢}\\right) = -\\frac{٢٥٢}{٣٢} = -\\frac{٦٣}{٨}$$"
    ],
    "teacherTipEn": "When n is odd, remember there are TWO middle terms: at ranks (n+1)/2 and (n+3)/2.",
    "teacherTipAr": "تذكر أنه إذا كان الأس n فردياً، يوجد حدان أوسطان رتبتاهما: (n+1)/2 و (n+3)/2."
  },
  {
    "id": "alg_ch1_ex10",
    "titleEn": "Official Book Example 10: Ratio of Successive Terms and Greatest Term",
    "titleAr": "مثال الكتاب الوزاري ١٠: النسبة بين حدين متتاليين وتحديد الحد الأعظم",
    "difficulty": "hots",
    "questionEn": "In the expansion of $(2 + 3x)^8$ when $x = \\frac{1}{2}$, find the ratio $\\frac{T_6}{T_5}$ and determine which term has the greatest numerical value.",
    "questionAr": "في مفكوك $(٢ + ٣ س)^٨$ عندما $س = \\frac{١}{٢}$، أوجد النسبة $\\frac{T_6}{T_5}$ وحدد رتبة الحد الأعظم قيمة.",
    "optionsEn": [
      "Ratio = 3/5, Greatest Term is T_4",
      "Ratio = 5/3, Greatest Term is T_5",
      "Ratio = 3/4, Greatest Term is T_4",
      "Ratio = 3/5, Greatest Term is T_6"
    ],
    "optionsAr": [
      "النسبة = ٣/٥، الحد الأعظم هو T_4",
      "النسبة = ٥/٣، الحد الأعظم هو T_5",
      "النسبة = ٣/٤، الحد الأعظم هو T_4",
      "النسبة = ٣/٥، الحد الأعظم هو T_6"
    ],
    "correctAnswer": "Ratio = 3/5, Greatest Term is T_4",
    "correctIndex": 0,
    "hintEn": "Ratio formula: T_{r+1}/T_r = [(n-r+1)/r] * (second/first). To find greatest term, solve T_{r+1}/T_r >= 1.",
    "hintAr": "قانون النسبة: T_{r+1}/T_r = [(n-r+1)/r] * (الثاني / الأول). ولإيجاد الحد الأعظم نحل المتباينة T_{r+1}/T_r >= 1.",
    "stepByStepSolutionEn": [
      "Formula for the ratio of two consecutive terms in $(a + b)^n$:",
      "$$\\frac{T_{r+1}}{T_r} = \\frac{n - r + 1}{r} \\times \\frac{b}{a}$$",
      "For $\\frac{T_6}{T_5}$, we set $r = 5$, $n = 8$, $a = 2$, and $b = 3x$ with $x = \\frac{1}{2} \\implies b = \\frac{3}{2}$:",
      "$$\\frac{T_6}{T_5} = \\frac{8 - 5 + 1}{5} \\times \\frac{3/2}{2} = \\frac{4}{5} \\times \\frac{3}{4} = \\frac{3}{5}$$",
      "To find the greatest term, solve $\\frac{T_{r+1}}{T_r} \\ge 1$:",
      "$$\\frac{8 - r + 1}{r} \\times \\frac{3}{4} \\ge 1 \\implies \\frac{9 - r}{r} \\ge \\frac{4}{3}$$",
      "$$3(9 - r) \\ge 4r \\implies 27 - 3r \\ge 4r \\implies 7r \\le 27 \\implies r \\le \\frac{27}{7} \\approx 3.857$$",
      "The largest integer $r$ satisfying this is $r = 3$.",
      "Thus, $T_4 > T_3$ and $T_4 > T_5$ (since for $r=4$, ratio $< 1$). Hence the greatest term is $T_4$."
    ],
    "stepByStepSolutionAr": [
      "قانون النسبة بين حدين متتاليين في مفكوك $(a + b)^n$:",
      "$$\\frac{T_{r+1}}{T_r} = \\frac{n - r + 1}{r} \\times \\frac{b}{a}$$",
      "لحساب $\\frac{T_6}{T_5}$ نضع $r = ٥$، $n = ٨$، $a = ٢$، و $b = ٣ س = ٣ \\times \\frac{١}{٢} = \\frac{٣}{٢}$:",
      "$$\\frac{T_6}{T_5} = \\frac{٨ - ٥ + ١}{٥} \\times \\frac{٣/٢}{٢} = \\frac{٤}{٥} \\times \\frac{٣}{٤} = \\frac{٣}{٥}$$",
      "لتحديد الحد الأعظم قيمة، نحل المتباينة $\\frac{T_{r+1}}{T_r} \\ge ١$:",
      "$$\\frac{٩ - r}{r} \\times \\frac{٣}{٤} \\ge ١ \\implies ٣(٩ - r) \\ge ٤r$$",
      "$$٢٧ - ٣r \\ge ٤r \\implies ٧r \\le ٢٧ \\implies r \\le ٣٫٨٥٧$$",
      "أكبر عدد صحيح يحقق المتباينة هو $r = ٣$.",
      "بما أن $r = ٣$، إذن الحد الأعظم قيمة هو $T_{٣+١} = T_4$."
    ],
    "teacherTipEn": "The condition T_{r+1}/T_r >= 1 identifies the turning point where terms switch from increasing to decreasing.",
    "teacherTipAr": "المتباينة T_{r+1}/T_r >= 1 تحدد نقطة التحول التي تبدأ بعدها الحدود في التناقص."
  }
];

export const algCh1Exercises: SolvedProblem[] = [
  {
    "id": "alg_ch1_unit_q1",
    "titleEn": "Textbook Exercise 1: Multi-Digit Number Construction with Zero Exclusion",
    "titleAr": "تمرين الكتاب الوزاري ١: تكوين أعداد متعددة الأرقام مع استبعاد الصفر من خانة الآلاف",
    "difficulty": "medium",
    "questionEn": "How many 4-digit numbers with distinct digits can be formed using the digits $\\{0, 1, 2, 3, 4, 5\\}$?",
    "questionAr": "كم عدداً مكوناً من ٤ أرقام مختلفة يمكن تكوينه من عناصر المجموعة $\\{٠، ١، ٢، ٣، ٤، ٥\\}$؟",
    "optionsEn": [
      "300",
      "360",
      "240",
      "180"
    ],
    "optionsAr": [
      "٣٠٠",
      "٣٦٠",
      "٢٤٠",
      "١٨٠"
    ],
    "correctAnswer": "300",
    "correctIndex": 0,
    "hintEn": "The thousands place cannot be zero (5 choices: 1..5). The remaining 3 digits are chosen from the remaining 5 digits without repetition: P(5, 3).",
    "hintAr": "خانة الآلاف لا يمكن أن تكون صفراً (٥ خيارات: من ١ إلى ٥). باقي الخانات الـ ٣ يتم اختيارها من الـ ٥ أرقام المتبقية: P(5, 3).",
    "stepByStepSolutionEn": [
      "A 4-digit number requires thousands, hundreds, tens, and units digits.",
      "Step 1 (Thousands digit): Cannot be 0, so choose from $\\{1, 2, 3, 4, 5\\} \\implies 5$ choices.",
      "Step 2 (Hundreds, Tens, Units): Selected from the remaining 5 digits (including 0) without repetition:",
      "$$P(5, 3) = 5 \\times 4 \\times 3 = 60$$",
      "Total 4-digit numbers:",
      "$$\\text{Total} = 5 \\times P(5, 3) = 5 \\times 60 = 300$$"
    ],
    "stepByStepSolutionAr": [
      "العدد المكون من ٤ أرقام يتطلب ملء خانات: الآلاف، المئات، العشرات، والآحاد.",
      "الخطوة ١ (خانة الآلاف): لا يمكن أن تكون صفراً، إذن نختار من $\\{١، ٢، ٣، ٤، ٥\\}$ (٥ خيارات).",
      "الخطوة ٢ (المئات والعشرات والآحاد): يتم ترتيب ٣ أرقام من بين الـ ٥ أرقام المتبقية (متضمنة الصفر) بدون تكرار:",
      "$$P(٥, ٣) = ٥ \\times ٤ \\times ٣ = ٦٠$$",
      "إجمالي عدد الأعداد الممكنة:",
      "$$\\text{العدد الكلي} = ٥ \\times ٦٠ = ٣٠٠$$"
    ],
    "teacherTipEn": "Always address the thousands digit constraint first whenever zero is among the set of available digits.",
    "teacherTipAr": "ابدأ دائماً بملء خانة الآلاف بشرط استبعاد الصفر كلما كان الصفر من ضمن الأرقام المعطاة."
  },
  {
    "id": "alg_ch1_unit_q2",
    "titleEn": "Textbook Exercise 2: Committee Formation with Minimum Subgroup Representation",
    "titleAr": "تمرين الكتاب الوزاري ٢: تشكيل لجان بشرط الحد الأدنى لتمثيل فئة معينة",
    "difficulty": "medium",
    "questionEn": "In how many ways can a committee of 4 persons be selected from 6 men and 5 women such that the committee includes at least 2 women?",
    "questionAr": "بكم طريقة يمكن اختيار لجنة من ٤ أشخاص من بين ٦ رجال و ٥ سيدات بحيث تحتوي اللجنة على سيدتين على الأقل؟",
    "optionsEn": [
      "215",
      "185",
      "240",
      "330"
    ],
    "optionsAr": [
      "٢١٥",
      "١٨٥",
      "٢٤٠",
      "٣٣٠"
    ],
    "correctAnswer": "215",
    "correctIndex": 0,
    "hintEn": "The phrase \"at least 2 women\" implies three mutually exclusive cases: exactly 2 women, exactly 3 women, or exactly 4 women.",
    "hintAr": "عبارة \"سيدتين على الأقل\" تعني ٣ حالات مانعة: سيدتان ورجلان، أو ٣ سيدات ورجل، أو ٤ سيدات.",
    "stepByStepSolutionEn": [
      "Available pool: 6 men, 5 women. Target committee size: 4 persons.",
      "Case 1: Exactly 2 women and 2 men:",
      "$$\\binom{5}{2} \\times \\binom{6}{2} = 10 \\times 15 = 150$$",
      "Case 2: Exactly 3 women and 1 man:",
      "$$\\binom{5}{3} \\times \\binom{6}{1} = 10 \\times 6 = 60$$",
      "Case 3: Exactly 4 women and 0 men:",
      "$$\\binom{5}{4} \\times \\binom{6}{0} = 5 \\times 1 = 5$$",
      "Sum all mutually exclusive cases (Addition Principle):",
      "$$\\text{Total Ways} = 150 + 60 + 5 = 215$$"
    ],
    "stepByStepSolutionAr": [
      "المجموعة المتاحة: ٦ رجال، ٥ سيدات. المطلوب تشكيل لجنة من ٤ أشخاص.",
      "الحالة ١: سيدتان ورجلان:",
      "$$\\binom{٥}{٢} \\times \\binom{٦}{٢} = ١٠ \\times ١٥ = ١٥٠$$",
      "الحالة ٢: ٣ سيدات ورجل واحد:",
      "$$\\binom{٥}{٣} \\times \\binom{٦}{١} = ١٠ \\times ٦ = ٦٠$$",
      "الحالة ٣: ٤ سيدات ولا رجال:",
      "$$\\binom{٥}{٤} \\times \\binom{٦}{٠} = ٥ \\times ١ = ٥$$",
      "بجمع الحالات المستقلة (مبدأ الجمع):",
      "$$\\text{إجمالي الطرق} = ١٥٠ + ٦٠ + ٥ = ٢١٥$$"
    ],
    "teacherTipEn": "Alternatively, subtract complementary cases (0 women or 1 woman) from total committees C(11, 4) = 330: 330 - (15 + 100) = 215.",
    "teacherTipAr": "يمكنك أيضاً استخدام الحدث المكمل: إجمالي اللجان C(11, 4) = 330 مطروحاً منه (لجنة بدون سيدات أو بسيدة واحدة): 330 - 115 = 215."
  },
  {
    "id": "alg_ch1_unit_q3",
    "titleEn": "Textbook Exercise 3: Combinatorial Geometry of Polygon Diagonals",
    "titleAr": "تمرين الكتاب الوزاري ٣: الهندسة التوافقية لأقطار المضلع",
    "difficulty": "easy",
    "questionEn": "How many diagonals does a regular decagon (10-sided polygon) possess?",
    "questionAr": "كم عدداً من الأقطار يمتلكه مضلع عشاري منتظم (له ١٠ أضلاع)؟",
    "optionsEn": [
      "35",
      "45",
      "40",
      "30"
    ],
    "optionsAr": [
      "٣٥",
      "٤٥",
      "٤٠",
      "٣٠"
    ],
    "correctAnswer": "35",
    "correctIndex": 0,
    "hintEn": "The number of diagonals of an n-sided polygon is given by D = C(n, 2) - n = n(n-3)/2.",
    "hintAr": "عدد أقطار مضلع له n من الأضلاع يعطى بالقانون: D = C(n, 2) - n = n(n-3)/2.",
    "stepByStepSolutionEn": [
      "A decagon has $n = 10$ vertices.",
      "The total number of straight line segments connecting any 2 vertices is $\\binom{10}{2}$:",
      "$$\\binom{10}{2} = \\frac{10 \\times 9}{2 \\times 1} = 45$$",
      "These 45 segments include the 10 outer sides of the polygon.",
      "Diagonals are internal segments connecting non-adjacent vertices:",
      "$$D = \\binom{n}{2} - n = 45 - 10 = 35$$",
      "Formula verification: $\\frac{10(10 - 3)}{2} = \\frac{10 \\times 7}{2} = 35$."
    ],
    "stepByStepSolutionAr": [
      "المضلع العشاري له $n = ١٠$ رؤوس.",
      "عدد جميع القطع المستقيمة الواصلة بين أي رأسين هو $\\binom{١٠}{٢}$:",
      "$$\\binom{١٠}{٢} = \\frac{١٠ \\times ٩}{٢ \\times ١} = ٤٥$$",
      "هذه القطع الـ ٤٥ تشمل أضلاع المضلع الخارجية العشرة.",
      "الأقطار هي القطع التي تصل بين رأسين غير متتاليين:",
      "$$D = \\binom{n}{٢} - n = ٤٥ - ١٠ = ٣٥$$",
      "بالتطبيق في القانون المباشر: $\\frac{١٠(١٠ - ٣)}{٢} = ٣٥$."
    ],
    "teacherTipEn": "Always subtract the $n$ polygon sides from the total $\\binom{n}{2}$ segment pairs.",
    "teacherTipAr": "اطرح دائماً أضلاع المضلع الـ $n$ من إجمالي القطع المستقيمة $\\binom{n}{2}$ للحصول على الأقطار."
  },
  {
    "id": "alg_ch1_unit_q4",
    "titleEn": "Textbook Exercise 4: Relation Between Permutations and Combinations",
    "titleAr": "تمرين الكتاب الوزاري ٤: العلاقة بين التباديل والتوافيق",
    "difficulty": "medium",
    "questionEn": "If $P(n, r) = 720$ and $\\binom{n}{r} = 120$, find the values of $n$ and $r$.",
    "questionAr": "إذا كان $P(n, r) = ٧٢٠$ و $\\binom{n}{r} = ١٢٠$، فأوجد قيمتي $n$ و $r$.",
    "optionsEn": [
      "n = 10, r = 3",
      "n = 9, r = 3",
      "n = 8, r = 4",
      "n = 10, r = 4"
    ],
    "optionsAr": [
      "n = ١٠، r = ٣",
      "n = ٩، r = ٣",
      "n = ٨، r = ٤",
      "n = ١٠، r = ٤"
    ],
    "correctAnswer": "n = 10, r = 3",
    "correctIndex": 0,
    "hintEn": "Use the fundamental relation P(n, r) = r! * C(n, r) to solve for r! first.",
    "hintAr": "استخدم العلاقة الأساسية P(n, r) = r! * C(n, r) لإيجاد r! أولاً.",
    "stepByStepSolutionEn": [
      "The relation between permutations and combinations is:",
      "$$P(n, r) = r! \\times \\binom{n}{r}$$",
      "Substitute known values:",
      "$$720 = r! \\times 120 \\implies r! = \\frac{720}{120} = 6$$",
      "Since $r! = 6 = 3 \\times 2 \\times 1$, we find $r = 3$.",
      "Now solve $P(n, 3) = 720$:",
      "$$n(n - 1)(n - 2) = 720$$",
      "Factor 720 into three consecutive integers:",
      "$$720 = 10 \\times 9 \\times 8 \\implies n = 10$$",
      "Thus, $n = 10$ and $r = 3$."
    ],
    "stepByStepSolutionAr": [
      "العلاقة الأساسية بين التباديل والتوافيق هي:",
      "$$P(n, r) = r! \\times \\binom{n}{r}$$",
      "بالتعويض بالقيم المعطاة:",
      "$$٧٢٠ = r! \\times ١٢٠ \\implies r! = \\frac{٧٢٠}{١٢٠} = ٦$$",
      "بما أن $r! = ٦ = ٣!$، إذن $r = ٣$.",
      "الآن نحل $P(n, ٣) = ٧٢٠$:",
      "$$n(n - 1)(n - 2) = ٧٢٠$$",
      "تحليل ٧٢٠ إلى حاصل ضرب ٣ أعداد صحيحة موجبة متتالية:",
      "$$٧٢٠ = ١٠ \\times ٩ \\times ٨ \\implies n = ١٠$$",
      "إذن $n = ١٠$ و $r = ٣$."
    ],
    "teacherTipEn": "Factoring a number into $r$ consecutive factors is a standard and fast Thanaweya Amma technique.",
    "teacherTipAr": "تحليل العدد إلى $r$ من العوامل المتتالية أسلوب معتمد وسريع جداً في امتحانات الثانوية العامة."
  },
  {
    "id": "alg_ch1_unit_q5",
    "titleEn": "Textbook Exercise 5: Factorial Algebraic Rational Simplification",
    "titleAr": "تمرين الكتاب الوزاري ٥: تبسيط كسر جبري يحتوي على مضاريب",
    "difficulty": "easy",
    "questionEn": "Simplify the algebraic expression: $\\frac{n! + (n + 1)!}{(n + 2)!}$.",
    "questionAr": "بسط المقدار الجبري التالي في أبسط صورة: $\\frac{n! + (n + ١)!}{(n + ٢)!}$.",
    "optionsEn": [
      "1 / (n + 1)",
      "1 / (n + 2)",
      "(n + 1) / (n + 2)",
      "n / (n + 1)"
    ],
    "optionsAr": [
      "١ / (n + ١)",
      "١ / (n + ٢)",
      "(n + ١) / (n + ٢)",
      "n / (n + ١)"
    ],
    "correctAnswer": "1 / (n + 1)",
    "correctIndex": 0,
    "hintEn": "Factor out n! from both numerator and denominator.",
    "hintAr": "خذ n! عاملاً مشتركاً من كل من البسط والمقام.",
    "stepByStepSolutionEn": [
      "Expand $(n + 1)!$ and $(n + 2)!$ in terms of $n!$:",
      "$$(n + 1)! = (n + 1) n!$$",
      "$$(n + 2)! = (n + 2)(n + 1) n!$$",
      "Factor $n!$ from the numerator:",
      "$$\\text{Numerator} = n! [1 + (n + 1)] = n!(n + 2)$$",
      "Divide by the denominator:",
      "$$\\frac{n!(n + 2)}{(n + 2)(n + 1) n!}$$",
      "Cancel $n!$ and $(n + 2)$ (since $n \\ge 0$):",
      "$$= \\frac{1}{n + 1}$$"
    ],
    "stepByStepSolutionAr": [
      "فك المضاريب بدلالة المضروب الأصغر $n!$:",
      "$$(n + ١)! = (n + ١) n!$$",
      "$$(n + ٢)! = (n + ٢)(n + ١) n!$$",
      "أخذ $n!$ عاملاً مشتركاً من البسط:",
      "$$\\text{البسط} = n! [١ + (n + ١)] = n!(n + ٢)$$",
      "القسمة على المقام:",
      "$$\\frac{n!(n + ٢)}{(n + ٢)(n + ١) n!}$$",
      "اختصار $n!$ والقوس $(n + ٢)$:",
      "$$= \\frac{١}{n + ١}$$"
    ],
    "teacherTipEn": "Factoring out the smallest factorial is always the cleanest path in factorial algebra.",
    "teacherTipAr": "إخراج أصغر مضروب كعامل مشترك هو دائماً الطريق الأسهل والأنظف لتبسيط الكسور."
  },
  {
    "id": "alg_ch1_unit_q6",
    "titleEn": "Textbook Exercise 6: Solving Equations with Pascal Combination Rule",
    "titleAr": "تمرين الكتاب الوزاري ٦: حل المعادلات باستخدام قانون الجمع لباسكال",
    "difficulty": "easy",
    "questionEn": "Find the value of $n \\in \\mathbb{N}$ if $\\binom{n}{4} + \\binom{n}{3} = \\binom{15}{4}$.",
    "questionAr": "أوجد قيمة $n \\in \\mathbb{N}$ إذا كان $\\binom{n}{٤} + \\binom{n}{٣} = \\binom{١٥}{٤}$.",
    "optionsEn": [
      "n = 14",
      "n = 15",
      "n = 16",
      "n = 13"
    ],
    "optionsAr": [
      "n = ١٤",
      "n = ١٥",
      "n = ١٦",
      "n = ١٣"
    ],
    "correctAnswer": "n = 14",
    "correctIndex": 0,
    "hintEn": "Apply Pascal addition: C(n, 4) + C(n, 3) = C(n+1, 4).",
    "hintAr": "طبق قانون الجمع لباسكال: C(n, 4) + C(n, 3) = C(n+1, 4).",
    "stepByStepSolutionEn": [
      "By Pascal addition law:",
      "$$\\binom{n}{r} + \\binom{n}{r - 1} = \\binom{n + 1}{r}$$",
      "For $r = 4$, the LHS becomes:",
      "$$\\binom{n}{4} + \\binom{n}{3} = \\binom{n + 1}{4}$$",
      "Equate LHS to RHS:",
      "$$\\binom{n + 1}{4} = \\binom{15}{4}$$",
      "Since bottom indices are equal ($4 = 4$), the top indices must be equal:",
      "$$n + 1 = 15 \\implies n = 14$$"
    ],
    "stepByStepSolutionAr": [
      "بتطبيق قانون الجمع لباسكال:",
      "$$\\binom{n}{r} + \\binom{n}{r - 1} = \\binom{n + 1}{r}$$",
      "بوضع $r = ٤$ نجد أن الطرف الأيمن يصبح:",
      "$$\\binom{n}{٤} + \\binom{n}{٣} = \\binom{n + ١}{٤}$$",
      "مساواة الطرفين:",
      "$$\\binom{n + ١}{٤} = \\binom{١٥}{٤}$$",
      "بما أن الدليلين متساويان (٤ = ٤)، إذن العلمان متساويان:",
      "$$n + ١ = ١٥ \\implies n = ١٤$$"
    ],
    "teacherTipEn": "Direct application of the Pascal law avoids computing huge factorials.",
    "teacherTipAr": "التطبيق المباشر لقانون باسكال يجنبك فك التوافيق المعقدة إلى مضاريب كبيرة."
  },
  {
    "id": "alg_ch1_unit_q7",
    "titleEn": "Textbook Exercise 7: Reconstructing Binomial Expansion from Consecutive Terms",
    "titleAr": "تمرين الكتاب الوزاري ٧: استنتاج مفكوك ذات الحدين من ثلاثة حدود متتالية",
    "difficulty": "hots",
    "questionEn": "In the expansion of $(x + a)^n$, if $T_2 = 240$, $T_3 = 720$, and $T_4 = 1080$, find $n$.",
    "questionAr": "في مفكوك $(س + أ)^n$، إذا كان $T_2 = ٢٤٠$ و $T_3 = ٧٢٠$ و $T_4 = ١٠٨٠$، فأوجد قيمة $n$.",
    "optionsEn": [
      "n = 5",
      "n = 6",
      "n = 4",
      "n = 7"
    ],
    "optionsAr": [
      "n = ٥",
      "n = ٦",
      "n = ٤",
      "n = ٧"
    ],
    "correctAnswer": "n = 5",
    "correctIndex": 0,
    "hintEn": "Take the ratios T3/T2 and T4/T3, express them in terms of n and (a/x), and divide the two equations.",
    "hintAr": "احسب النسبتين T3/T2 و T4/T3 بدلالة n و (أ / س)، ثم اقسم المعادلتين للتخلص من (أ / س).",
    "stepByStepSolutionEn": [
      "Use the ratio law for consecutive terms: $\\frac{T_{r+1}}{T_r} = \\frac{n - r + 1}{r} \\frac{a}{x}$.",
      "Ratio 1 ($r = 2$):",
      "$$\\frac{T_3}{T_2} = \\frac{n - 2 + 1}{2} \\frac{a}{x} = \\frac{n - 1}{2} \\frac{a}{x} = \\frac{720}{240} = 3 \\implies \\frac{a}{x} = \\frac{6}{n - 1}$$",
      "Ratio 2 ($r = 3$):",
      "$$\\frac{T_4}{T_3} = \\frac{n - 3 + 1}{3} \\frac{a}{x} = \\frac{n - 2}{3} \\frac{a}{x} = \\frac{1080}{720} = \\frac{3}{2} \\implies \\frac{a}{x} = \\frac{9}{2(n - 2)}$$",
      "Equate the two expressions for $\\frac{a}{x}$:",
      "$$\\frac{6}{n - 1} = \\frac{9}{2(n - 2)}$$",
      "Cross-multiply and simplify by dividing both sides by 3:",
      "$$2 \\times 2(n - 2) = 3(n - 1) \\implies 4n - 8 = 3n - 3 \\implies n = 5$$"
    ],
    "stepByStepSolutionAr": [
      "نطبق قانون النسبة بين حدين متتاليين: $\\frac{T_{r+1}}{T_r} = \\frac{n - r + 1}{r} \\frac{a}{x}$.",
      "النسبة الأولى ($r = ٢$):",
      "$$\\frac{T_3}{T_2} = \\frac{n - ١}{٢} \\frac{a}{x} = \\frac{٧٢٠}{٢٤٠} = ٣ \\implies \\frac{a}{x} = \\frac{٦}{n - ١}$$",
      "النسبة الثانية ($r = ٣$):",
      "$$\\frac{T_4}{T_3} = \\frac{n - ٢}{٣} \\frac{a}{x} = \\frac{١٠٨٠}{٧٢٠} = \\frac{٣}{٢} \\implies \\frac{a}{x} = \\frac{٩}{٢(n - ٢)}$$",
      "بمساواة العلاقتين لـ $\\frac{a}{x}$:",
      "$$\\frac{٦}{n - ١} = \\frac{٩}{٢(n - ٢)}$$",
      "بالقسمة على ٣ للطرفين ثم الضرب التبادلي:",
      "$$٤(n - ٢) = ٣(n - ١) \\implies ٤n - ٨ = ٣n - ٣ \\implies n = ٥$$"
    ],
    "teacherTipEn": "Dividing two ratio equations eliminates the unknown ratio (a/x) directly, yielding a linear equation in n.",
    "teacherTipAr": "قسمة معادلتي النسبة تلغي المجهول (أ / س) مباشرة لتعطي معادلة خطية بسيطة في $n$."
  },
  {
    "id": "alg_ch1_unit_q8",
    "titleEn": "Textbook Exercise 8: Determining Coefficient of a Specific Power of x",
    "titleAr": "تمرين الكتاب الوزاري ٨: إيجاد معامل قوى محددة لـ س في المفكوك",
    "difficulty": "medium",
    "questionEn": "Find the coefficient of $x^5$ in the expansion of $\\left(2x^2 - \\frac{1}{4x}\\right)^7$.",
    "questionAr": "أوجد معامل $س^٥$ في مفكوك $\\left(٢ س^٢ - \\frac{١}{٤ س}\\right)^٧$.",
    "optionsEn": [
      "-35 / 4",
      "35 / 4",
      "-35 / 2",
      "35 / 8"
    ],
    "optionsAr": [
      "-٣٥ / ٤",
      "٣٥ / ٤",
      "-٣٥ / ٢",
      "٣٥ / ٨"
    ],
    "correctAnswer": "-35 / 4",
    "correctIndex": 0,
    "hintEn": "Write general term Tr+1, express the total exponent of x as 14 - 3r, and set it equal to 5 to find r.",
    "hintAr": "اكتب الحد العام Tr+1، واجمع أس س ليصبح ١٤ - ٣r، وساوه بـ ٥ لإيجاد r.",
    "stepByStepSolutionEn": [
      "Write the general term $T_{r+1}$ in $\\left(2x^2 - \\frac{1}{4x}\\right)^7$:",
      "$$T_{r+1} = \\binom{7}{r} (2x^2)^{7 - r} \\left(-\\frac{1}{4x}\\right)^r$$",
      "Separate coefficients and powers of $x$:",
      "$$T_{r+1} = \\binom{7}{r} 2^{7 - r} \\left(-\\frac{1}{4}\\right)^r x^{2(7 - r) - r} = \\binom{7}{r} 2^{7 - r} (-1)^r \\left(\\frac{1}{4}\\right)^r x^{14 - 3r}$$",
      "Set the exponent of $x$ to 5:",
      "$$14 - 3r = 5 \\implies 3r = 9 \\implies r = 3$$",
      "Evaluate coefficient at $r = 3$:",
      "$$\\text{Coeff} = \\binom{7}{3} 2^{7 - 3} (-1)^3 \\left(\\frac{1}{4}\\right)^3 = 35 \\times 2^4 \\times (-1) \\times \\frac{1}{64} = 35 \\times 16 \\times \\left(-\\frac{1}{64}\\right) = -\\frac{35}{4}$$"
    ],
    "stepByStepSolutionAr": [
      "كتابة الحد العام $T_{r+1}$ في مفكوك $\\left(٢ س^٢ - \\frac{١}{٤ س}\\right)^٧$:",
      "$$T_{r+1} = \\binom{٧}{r} (٢ س^٢)^{٧ - r} \\left(-\\frac{١}{٤ س}\\right)^r$$",
      "فصل المعاملات عن أسس س:",
      "$$T_{r+1} = \\binom{٧}{r} ٢^{٧ - r} \\left(-\\frac{١}{٤}\\right)^r س^{١٤ - ٣r}$$",
      "مساواة أس س بالعدد ٥:",
      "$$١٤ - ٣r = ٥ \\implies ٣r = ٩ \\implies r = ٣$$",
      "حساب المعامل عند $r = ٣$:",
      "$$\\text{المعامل} = \\binom{٧}{٣} ٢^٤ (-١)^٣ \\left(\\frac{١}{٤}\\right)^٣ = ٣٥ \\times ١٦ \\times (-١) \\times \\frac{١}{٦٤} = -\\frac{٣٥}{٤}$$"
    ],
    "teacherTipEn": "Take special care when decomposing 1/4 into powers of 2: 1/4 = 2^(-2) makes algebraic powers effortless.",
    "teacherTipAr": "كتابة المعامل كقوة للعدد ٢ تسهل الحسابات: $١/٤ = ٢^{-٢}$."
  },
  {
    "id": "alg_ch1_unit_q9",
    "titleEn": "Textbook Exercise 9: Proving Non-Existence of Term Independent of x",
    "titleAr": "تمرين الكتاب الوزاري ٩: إثبات عدم وجود حد خالٍ من س في مفكوك",
    "difficulty": "medium",
    "questionEn": "Does the expansion of $\\left(x^3 + \\frac{1}{x^2}\\right)^{13}$ contain a term independent of $x$?",
    "questionAr": "هل يحتوي مفكوك $\\left(س^٣ + \\frac{١}{س^٢}\\right)^{١٣}$ على حد خالٍ من س؟",
    "optionsEn": [
      "No, because r = 39/5 is not an integer",
      "Yes, T_8 is independent of x",
      "Yes, T_9 is independent of x",
      "No, because the exponent 13 is odd"
    ],
    "optionsAr": [
      "لا، لأن r = ٣٩/٥ ليس عدداً صحيحاً",
      "نعم، الحد T_8 خالٍ من س",
      "نعم، الحد T_9 خالٍ من س",
      "لا، لأن الأس ١٣ عدد فردي"
    ],
    "correctAnswer": "No, because r = 39/5 is not an integer",
    "correctIndex": 0,
    "hintEn": "Equate total power of x to zero: 3(13-r) - 2r = 0 and verify if r in {0, 1, ..., 13}.",
    "hintAr": "ساوِ أس س الكلي بالصفر: ٣(١٣ - r) - ٢r = ٠ وتأكد هل r عدد صحيح ينتمي للمجموعة {٠، ١، ...، ١٣}.",
    "stepByStepSolutionEn": [
      "Write the general term $T_{r+1}$:",
      "$$T_{r+1} = \\binom{13}{r} (x^3)^{13 - r} (x^{-2})^r = \\binom{13}{r} x^{39 - 3r - 2r} = \\binom{13}{r} x^{39 - 5r}$$",
      "For a term independent of $x$, the exponent must be 0:",
      "$$39 - 5r = 0 \\implies 5r = 39 \\implies r = \\frac{39}{5} = 7.8$$",
      "Since $r$ must be a non-negative integer ($r \\in \\{0, 1, 2, \\dots, 13\\}$), $r = 7.8$ is impossible.",
      "Therefore, the expansion contains no term independent of $x$."
    ],
    "stepByStepSolutionAr": [
      "كتابة الحد العام $T_{r+1}$:",
      "$$T_{r+1} = \\binom{١٣}{r} (س^٣)^{١٣ - r} (س^{-٢})^r = \\binom{١٣}{r} س^{٣٩ - ٥r}$$",
      "لكي يكون الحد خالياً من س نضع الأس مساوياً للصفر:",
      "$$٣٩ - ٥r = ٠ \\implies ٥r = ٣٩ \\implies r = \\frac{٣٩}{٥} = ٧٫٨$$",
      "بما أن $r$ يجب أن يكون عدداً صحيحاً ينتمي إلى $\\{٠، ١، ٢، ...، ١٣\\}$، فإن $r = ٧٫٨$ مرفوض.",
      "إذن لا يوجد حد خالٍ من س في هذا المفكوك."
    ],
    "teacherTipEn": "In Thanaweya Amma proofs, always explicitly state that r does not belong to N_0.",
    "teacherTipAr": "في مسائل الإثبات بامتحانات الثانوية العامة، اذكر صراحة أن r لا ينتمي لمجموعة الأعداد الطبيعية."
  },
  {
    "id": "alg_ch1_unit_q10",
    "titleEn": "Textbook Exercise 10: Middle Term of Arbitrary Even Power Binomial",
    "titleAr": "تمرين الكتاب الوزاري ١٠: إيجاد الحد الأوسط لمفكوك أس زوجي عام ٢ن",
    "difficulty": "medium",
    "questionEn": "In the expansion of $\\left(\\sqrt{x} + \\frac{1}{2\\sqrt{x}}\\right)^{2n}$, find the middle term.",
    "questionAr": "في مفكوك $\\left(\\sqrt{س} + \\frac{١}{٢\\sqrt{س}}\\right)^{٢n}$، أوجد الحد الأوسط.",
    "optionsEn": [
      "C(2n, n) * (1/2)^n",
      "C(2n, n) * (1/2)^n * x",
      "C(2n, n+1) * (1/2)^n",
      "C(2n, n) * 2^n"
    ],
    "optionsAr": [
      "C(2n, n) * (١/٢)^n",
      "C(2n, n) * (١/٢)^n * س",
      "C(2n, n+1) * (١/٢)^n",
      "C(2n, n) * ٢^n"
    ],
    "correctAnswer": "C(2n, n) * (1/2)^n",
    "correctIndex": 0,
    "hintEn": "For power 2n, the rank of the single middle term is (2n/2) + 1 = n + 1.",
    "hintAr": "للأس ٢n الزوجي، رتبة الحد الأوسط الوحيد هي (٢n / ٢) + ١ = n + ١.",
    "stepByStepSolutionEn": [
      "The power is $2n$, which is an even integer.",
      "The rank of the middle term is $k = \\frac{2n}{2} + 1 = n + 1 \\implies T_{n+1}$.",
      "Use the general term formula with $r = n$:",
      "$$T_{n+1} = \\binom{2n}{n} (\\sqrt{x})^{2n - n} \\left(\\frac{1}{2\\sqrt{x}}\\right)^n$$",
      "$$= \\binom{2n}{n} (\\sqrt{x})^n \\frac{1}{2^n (\\sqrt{x})^n} = \\binom{2n}{n} \\left(\\frac{1}{2}\\right)^n$$",
      "Notice the variable $x$ cancels out completely, making the middle term independent of $x$."
    ],
    "stepByStepSolutionAr": [
      "الأس $٢n$ عدد زوجي، إذن يوجد حد أوسط وحيد.",
      "رتبة الحد الأوسط: $\\frac{٢n}{٢} + ١ = n + ١$، أي الحد $T_{n+1}$.",
      "تطبيق قانون الحد العام عند $r = n$:",
      "$$T_{n+1} = \\binom{٢n}{n} (\\sqrt{س})^{٢n - n} \\left(\\frac{١}{٢\\sqrt{س}}\\right)^n$$",
      "$$= \\binom{٢n}{n} (\\sqrt{س})^n \\frac{١}{٢^n (\\sqrt{س})^n} = \\binom{٢n}{n} \\left(\\frac{١}{٢}\\right)^n$$",
      "نلاحظ أن المتغير س يُختصر تماماً، ويكون الحد الأوسط خالياً من س."
    ],
    "teacherTipEn": "When the product of the first and second terms is constant, the middle term is always independent of x.",
    "teacherTipAr": "عندما يكون حاصل ضرب الحدين الأول والثاني ثابتاً، فإن الحد الأوسط يكون دائماً خالياً من س."
  },
  {
    "id": "alg_ch1_unit_q11",
    "titleEn": "Textbook Exercise 11: Equality of Consecutive Term Coefficients",
    "titleAr": "تمرين الكتاب الوزاري ١١: تساوي معاملي حدين متتاليين",
    "difficulty": "hots",
    "questionEn": "If the coefficients of $x^7$ and $x^8$ in the expansion of $\\left(2 + \\frac{x}{3}\\right)^n$ are equal, find the value of $n$.",
    "questionAr": "إذا كان معاملا $س^٧$ و $س^٨$ متساويين في مفكوك $\\left(٢ + \\frac{س}{٣}\\right)^n$، فأوجد قيمة $n$.",
    "optionsEn": [
      "n = 55",
      "n = 54",
      "n = 56",
      "n = 48"
    ],
    "optionsAr": [
      "n = ٥٥",
      "n = ٥٤",
      "n = ٥٦",
      "n = ٤٨"
    ],
    "correctAnswer": "n = 55",
    "correctIndex": 0,
    "hintEn": "Write the coefficients of T_8 and T_9, use the ratio between them equal to 1, and apply the combinations ratio formula.",
    "hintAr": "اكتب معاملي الحدين الثامن والتاسع، واستخدم قانون النسبة مساوياً للواحد الصحيح.",
    "stepByStepSolutionEn": [
      "The term containing $x^7$ is $T_8 = \\binom{n}{7} 2^{n - 7} (1/3)^7 x^7$.",
      "The term containing $x^8$ is $T_9 = \\binom{n}{8} 2^{n - 8} (1/3)^8 x^8$.",
      "Since their coefficients are equal:",
      "$$\\binom{n}{8} 2^{n - 8} \\left(\\frac{1}{3}\\right)^8 = \\binom{n}{7} 2^{n - 7} \\left(\\frac{1}{3}\\right)^7$$",
      "Divide both sides by $\\binom{n}{7} 2^{n - 8} (1/3)^7$:",
      "$$\\frac{\\binom{n}{8}}{\\binom{n}{7}} \\times \\frac{1}{3} = 2 \\implies \\frac{\\binom{n}{8}}{\\binom{n}{7}} = 6$$",
      "Apply the combination ratio formula $\\frac{\\binom{n}{8}}{\\binom{n}{7}} = \\frac{n - 8 + 1}{8} = \\frac{n - 7}{8}$:",
      "$$\\frac{n - 7}{8} = 6 \\implies n - 7 = 48 \\implies n = 55$$"
    ],
    "stepByStepSolutionAr": [
      "الحد المحتوي على $س^٧$ هو $T_8$ ومعامله: $\\binom{n}{٧} ٢^{n - ٧} (١/٣)^٧$.",
      "الحد المحتوي على $س^٨$ هو $T_9$ ومعامله: $\\binom{n}{٨} ٢^{n - ٨} (١/٣)^٨$.",
      "بما أن المعاملين متساويان:",
      "$$\\frac{\\text{معامل } T_9}{\\text{معامل } T_8} = ١ \\implies \\frac{\\binom{n}{٨}}{\\binom{n}{٧}} \\times \\frac{١/٣}{٢} = ١$$",
      "$$\\frac{\\binom{n}{٨}}{\\binom{n}{٧}} \\times \\frac{١}{٦} = ١ \\implies \\frac{\\binom{n}{٨}}{\\binom{n}{٧}} = ٦$$",
      "بتطبيق قانون النسبة للتوافيق:",
      "$$\\frac{n - ٨ + ١}{٨} = ٦ \\implies \\frac{n - ٧}{٨} = ٦$$",
      "$$n - ٧ = ٤٨ \\implies n = ٥٥$$"
    ],
    "teacherTipEn": "Using the ratio between consecutive coefficients is vastly faster than expanding the factorials.",
    "teacherTipAr": "استخدام قانون النسبة بين المعاملين المتتاليين أسرع بكثير من فك التوافيق إلى مضاريب."
  },
  {
    "id": "alg_ch1_unit_q12",
    "titleEn": "Textbook Exercise 12: Sum of All Coefficients of a Multinomial Expansion",
    "titleAr": "تمرين الكتاب الوزاري ١٢: مجموع معاملات جميع حدود المفكوك",
    "difficulty": "easy",
    "questionEn": "Find the sum of the coefficients of all terms in the expansion of $(5x - 4y + 1)^{10}$.",
    "questionAr": "أوجد مجموع معاملات جميع الحدود في مفكوك $(٥ س - ٤ ص + ١)^{١٠}$.",
    "optionsEn": [
      "1024",
      "512",
      "2048",
      "1"
    ],
    "optionsAr": [
      "١٠٢٤",
      "٥١٢",
      "٢٠٤٨",
      "١"
    ],
    "correctAnswer": "1024",
    "correctIndex": 0,
    "hintEn": "To find the sum of all coefficients, set all variables equal to 1: x = 1, y = 1.",
    "hintAr": "لإيجاد مجموع المعاملات، نضع جميع المتغيرات مساوية للعدد ١: س = ١، ص = ١.",
    "stepByStepSolutionEn": [
      "To find the sum of all coefficients in any polynomial or binomial expansion, substitute all variables with 1.",
      "Substitute $x = 1$ and $y = 1$ into $(5x - 4y + 1)^{10}$:",
      "$$\\text{Sum of coefficients} = (5(1) - 4(1) + 1)^{10} = (5 - 4 + 1)^{10} = 2^{10}$$",
      "Evaluate $2^{10}$:",
      "$$2^{10} = 1024$$"
    ],
    "stepByStepSolutionAr": [
      "لإيجاد مجموع المعاملات في أي مفكوك جبري، نضع قيم جميع المتغيرات مساوية للعدد ١.",
      "بالتعويض عن $س = ١$ و $ص = ١$ في المقدار $(٥ س - ٤ ص + ١)^{١٠}$:",
      "$$\\text{مجموع المعاملات} = (٥(١) - ٤(١) + ١)^{١٠} = (٥ - ٤ + ١)^{١٠} = ٢^{١٠}$$",
      "حساب القيمة:",
      "$$٢^{١٠} = ١٠٢٤$$"
    ],
    "teacherTipEn": "Setting variables to 1 is one of the most reliable and frequent multiple-choice shortcuts in Thanaweya Amma.",
    "teacherTipAr": "التعويض عن المتغيرات بالعدد ١ هو أسرع الطرق لحل مسائل مجموع المعاملات في الاختيار من متعدد."
  },
  {
    "id": "alg_ch1_unit_q13",
    "titleEn": "Textbook Exercise 13: Finding the Power from Term Ratio at Given Point",
    "titleAr": "تمرين الكتاب الوزاري ١٣: إيجاد أس المفكوك من نسبة حدين عند نقطة معطاة",
    "difficulty": "medium",
    "questionEn": "In the expansion of $(1 + x)^n$, if the ratio $\\frac{T_6}{T_5} = \\frac{8}{5}$ when $x = 2$, find the value of $n$.",
    "questionAr": "في مفكوك $(١ + س)^n$، إذا كانت النسبة $\\frac{T_6}{T_5} = \\frac{٨}{٥}$ عندما $س = ٢$، فأوجد قيمة $n$.",
    "optionsEn": [
      "n = 8",
      "n = 9",
      "n = 10",
      "n = 7"
    ],
    "optionsAr": [
      "n = ٨",
      "n = ٩",
      "n = ١٠",
      "n = ٧"
    ],
    "correctAnswer": "n = 8",
    "correctIndex": 0,
    "hintEn": "Use T_{r+1}/T_r = [(n-r+1)/r] * x. Here r = 5 and x = 2.",
    "hintAr": "استخدم قانون النسبة: T_{r+1}/T_r = [(n-r+1)/r] * س. هنا r = ٥ و س = ٢.",
    "stepByStepSolutionEn": [
      "Apply the consecutive term ratio formula for $(1 + x)^n$:",
      "$$\\frac{T_{r+1}}{T_r} = \\frac{n - r + 1}{r} x$$",
      "For $\\frac{T_6}{T_5}$, we have $r = 5$:",
      "$$\\frac{T_6}{T_5} = \\frac{n - 5 + 1}{5} \\times 2 = \\frac{2(n - 4)}{5}$$",
      "Equate to the given ratio $\\frac{8}{5}$:",
      "$$\\frac{2(n - 4)}{5} = \\frac{8}{5} \\implies 2(n - 4) = 8 \\implies n - 4 = 4 \\implies n = 8$$"
    ],
    "stepByStepSolutionAr": [
      "تطبيق قانون النسبة بين حدين متتاليين لمفكوك $(١ + س)^n$:",
      "$$\\frac{T_{r+1}}{T_r} = \\frac{n - r + 1}{r} س$$",
      "لحساب $\\frac{T_6}{T_5}$ نضع $r = ٥$ و $س = ٢$:",
      "$$\\frac{T_6}{T_5} = \\frac{n - ٥ + ١}{٥} \\times ٢ = \\frac{٢(n - ٤)}{٥}$$",
      "مساواة الناتج بالنسبة المعطاة $\\frac{٨}{٥}$:",
      "$$\\frac{٢(n - ٤)}{٥} = \\frac{٨}{٥} \\implies ٢(n - ٤) = ٨ \\implies n - ٤ = ٤ \\implies n = ٨$$"
    ],
    "teacherTipEn": "Check your result: for n=8, T6/T5 = [(8-5+1)/5] * 2 = (4/5)*2 = 8/5. Confirmed!",
    "teacherTipAr": "تحقق من الحل: عند n=8، النسبة = (4/5) * 2 = 8/5. الإجابة مؤكدة."
  },
  {
    "id": "alg_ch1_unit_q14",
    "titleEn": "Textbook Exercise 14: System of Consecutive Combination Ratios",
    "titleAr": "تمرين الكتاب الوزاري ١٤: نظام معادلات لنسب التوافيق المتتالية",
    "difficulty": "hots",
    "questionEn": "Solve the system of equations for $n$ and $r$: $\\binom{n}{r+1} = 2\\binom{n}{r}$ and $\\binom{n}{r} = 3\\binom{n}{r-1}$.",
    "questionAr": "حل نظام المعادلات الآتي لإيجاد $n$ و $r$: $\\binom{n}{r+١} = ٢\\binom{n}{r}$ و $\\binom{n}{r} = ٣\\binom{n}{r-١}$.",
    "optionsEn": [
      "n = 11, r = 3",
      "n = 10, r = 3",
      "n = 12, r = 4",
      "n = 9, r = 2"
    ],
    "optionsAr": [
      "n = ١١، r = ٣",
      "n = ١٠، r = ٣",
      "n = ١٢، r = ٤",
      "n = ٩، r = ٢"
    ],
    "correctAnswer": "n = 11, r = 3",
    "correctIndex": 0,
    "hintEn": "Convert both equations into ratio forms: C(n, r+1)/C(n, r) = 2 and C(n, r)/C(n, r-1) = 3.",
    "hintAr": "حول المعادلتين إلى صورتي نسبة: C(n, r+1)/C(n, r) = ٢ و C(n, r)/C(n, r-1) = ٣.",
    "stepByStepSolutionEn": [
      "From the second equation: $\\frac{\\binom{n}{r}}{\\binom{n}{r-1}} = 3$:",
      "$$\\frac{n - r + 1}{r} = 3 \\implies n - r + 1 = 3r \\implies n - 4r = -1 \\quad \\text{--- (Eq 1)}$$",
      "From the first equation: $\\frac{\\binom{n}{r+1}}{\\binom{n}{r}} = 2$:",
      "$$\\frac{n - (r + 1) + 1}{r + 1} = \\frac{n - r}{r + 1} = 2 \\implies n - r = 2r + 2 \\implies n - 3r = 2 \\quad \\text{--- (Eq 2)}$$",
      "Subtract (Eq 1) from (Eq 2):",
      "$$(n - 3r) - (n - 4r) = 2 - (-1) \\implies r = 3$$",
      "Substitute $r = 3$ into (Eq 2):",
      "$$n - 3(3) = 2 \\implies n - 9 = 2 \\implies n = 11$$"
    ],
    "stepByStepSolutionAr": [
      "من المعادلة الثانية: $\\frac{\\binom{n}{r}}{\\binom{n}{r-١}} = ٣$:",
      "$$\\frac{n - r + ١}{r} = ٣ \\implies n - r + ١ = ٣r \\implies n - ٤r = -١ \\quad \\text{--- (معادلة ١)}$$",
      "من المعادلة الأولى: $\\frac{\\binom{n}{r+١}}{\\binom{n}{r}} = ٢$:",
      "$$\\frac{n - r}{r + ١} = ٢ \\implies n - r = ٢r + ٢ \\implies n - ٣r = ٢ \\quad \\text{--- (معادلة ٢)}$$",
      "بطرح (معادلة ١) من (معادلة ٢):",
      "$$r = ٢ - (-١) = ٣$$",
      "بالتعويض عن $r = ٣$ في (معادلة ٢):",
      "$$n - ٣(٣) = ٢ \\implies n = ٩ + ٢ = ١١$$"
    ],
    "teacherTipEn": "Systems of two combination ratios always simplify into two linear equations in n and r.",
    "teacherTipAr": "أي نظام من نسب التوافيق المتتالية يؤول دائماً إلى معادلتين خطيتين بسيطتين في n و r."
  },
  {
    "id": "alg_ch1_unit_q15",
    "titleEn": "Textbook Exercise 15: Two Middle Terms of an Odd Power Binomial",
    "titleAr": "تمرين الكتاب الوزاري ١٥: الحدان الأوسطان لمفكوك أس فردي",
    "difficulty": "medium",
    "questionEn": "In the expansion of $\\left(x^2 - \\frac{1}{x}\\right)^{15}$, find the ranks of the two middle terms and evaluate the rank of the first middle term.",
    "questionAr": "في مفكوك $\\left(س^٢ - \\frac{١}{س}\\right)^{١٥}$، أوجد رتبتي الحدين الأوسطين وحدد رتبة الحد الأوسط الأول.",
    "optionsEn": [
      "T_8 and T_9, first is T_8",
      "T_7 and T_8, first is T_7",
      "T_8 and T_10, first is T_8",
      "T_9 and T_10, first is T_9"
    ],
    "optionsAr": [
      "T_8 و T_9، الأول هو T_8",
      "T_7 و T_8، الأول هو T_7",
      "T_8 و T_10، الأول هو T_8",
      "T_9 و T_10، الأول هو T_9"
    ],
    "correctAnswer": "T_8 and T_9, first is T_8",
    "correctIndex": 0,
    "hintEn": "When n is odd, the two middle terms have ranks (n+1)/2 and (n+3)/2.",
    "hintAr": "عندما يكون الأس n فردياً، فإن رتبتي الحدين الأوسطين هما (n+1)/2 و (n+3)/2.",
    "stepByStepSolutionEn": [
      "The power $n = 15$ is odd, so the expansion has $15 + 1 = 16$ terms, meaning there are exactly two middle terms.",
      "Rank of the first middle term:",
      "$$k_1 = \\frac{n + 1}{2} = \\frac{15 + 1}{2} = \\frac{16}{2} = 8 \\implies T_8$$",
      "Rank of the second middle term:",
      "$$k_2 = \\frac{n + 3}{2} = \\frac{15 + 3}{2} = \\frac{18}{2} = 9 \\implies T_9$$",
      "Thus, the two middle terms are $T_8$ and $T_9$, with the first middle term being $T_8$."
    ],
    "stepByStepSolutionAr": [
      "الأس $n = ١٥$ عدد فردي، إذن المفكوك يحتوي على $١٥ + ١ = ١٦$ حداً، وبالتالي يوجد حدان أوسطان.",
      "رتبة الحد الأوسط الأول:",
      "$$k_1 = \\frac{n + ١}{٢} = \\frac{١٥ + ١}{٢} = ٨ \\implies T_8$$",
      "رتبة الحد الأوسط الثاني:",
      "$$k_2 = \\frac{n + ٣}{٢} = \\frac{١٥ + ٣}{٢} = ٩ \\implies T_9$$",
      "إذن الحدان الأوسطان هما $T_8$ و $T_9$، والحد الأوسط الأول رتبته $T_8$."
    ],
    "teacherTipEn": "Notice that in $(a+b)^n$ with odd n, the middle terms have combinations C(n, (n-1)/2) and C(n, (n+1)/2), which are always equal by symmetry.",
    "teacherTipAr": "تذكر أن توافيق الحدين الأوسطين في الأس الفردي تكون متساوية دائماً بقانون التبسيط: C(n, (n-1)/2) = C(n, (n+1)/2)."
  }
];
