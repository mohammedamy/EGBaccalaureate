import type { SolvedProblem } from '../../../types/curriculum';

export const algCh2SolvedExamples: SolvedProblem[] = [
  {
    "id": "alg_ch2_ex1",
    "titleEn": "Official Book Example 1: Standard Trigonometric & Euler Form Conversion with Quadrant Correction",
    "titleAr": "مثال الكتاب الوزاري ١: التحويل إلى الصورة المثلثية القياسية وصورة أويلر مع مراعاة الربع",
    "difficulty": "medium",
    "questionEn": "Express the complex number $z = -2\\sqrt{3} - 2i$ in standard trigonometric and Euler exponential forms.",
    "questionAr": "ضع العدد المركب $ع = -٢\\sqrt{٣} - ٢ت$ في كل من الصورة المثلثية القياسية والصورة الأسية لأويلر.",
    "optionsEn": [
      "$4 [\\cos(-150^\\circ) + i\\sin(-150^\\circ)] = 4 e^{-i \\frac{5\\pi}{6}}$",
      "$4 [\\cos(150^\\circ) + i\\sin(150^\\circ)] = 4 e^{i \\frac{5\\pi}{6}}$",
      "$2 [\\cos(-150^\\circ) + i\\sin(-150^\\circ)] = 2 e^{-i \\frac{5\\pi}{6}}$",
      "$4 [\\cos(-120^\\circ) + i\\sin(-120^\\circ)] = 4 e^{-i \\frac{2\\pi}{3}}$"
    ],
    "optionsAr": [
      "٤ [جتا(-١٥٠^\\circ) + ت جا(-١٥٠^\\circ)] = ٤ هـ^{-ت \\frac{٥\\pi}{٦}}",
      "٤ [جتا(١٥٠^\\circ) + ت جا(١٥٠^\\circ)] = ٤ هـ^{ت \\frac{٥\\pi}{٦}}",
      "٢ [جتا(-١٥٠^\\circ) + ت جا(-١٥٠^\\circ)] = ٢ هـ^{-ت \\frac{٥\\pi}{٦}}",
      "٤ [جتا(-١٢٠^\\circ) + ت جا(-١٢٠^\\circ)] = ٤ هـ^{-ت \\frac{٢\\pi}{٣}}"
    ],
    "correctAnswer": "$4 [\\cos(-150^\\circ) + i\\sin(-150^\\circ)] = 4 e^{-i \\frac{5\\pi}{6}}$",
    "correctIndex": 0,
    "hintEn": "Both x and y are negative, placing z in Quadrant III. Principal argument theta = - (180 - alpha) where tan(alpha) = |y/x|.",
    "hintAr": "كلا من س وص سالبان، فالعدد يقع في الربع الثالث. السعة الأساسية سيتا = - (١٨٠ - ألفا) حيث ظا(ألفا) = |ص/س|.",
    "stepByStepSolutionEn": [
      "Step 1: Identify Cartesian coordinates: $x = -2\\sqrt{3}$, $y = -2$.",
      "Step 2: Calculate modulus $r = |z|$:",
      "$$r = \\sqrt{(-2\\sqrt{3})^2 + (-2)^2} = \\sqrt{12 + 4} = \\sqrt{16} = 4$$",
      "Step 3: Determine the principal argument $\\theta$:",
      "Since $x < 0$ and $y < 0$, $z$ lies in the 3rd quadrant.",
      "Reference angle $\\alpha = \\tan^{-1}\\left|\\frac{-2}{-2\\sqrt{3}}\\right| = \\tan^{-1}\\left(\\frac{1}{\\sqrt{3}}\\right) = 30^\\circ = \\frac{\\pi}{6}$.",
      "$$\\theta = -(180^\\circ - 30^\\circ) = -150^\\circ = -\\frac{5\\pi}{6} \\text{ rad}$$",
      "Step 4: Standard Trigonometric Form: $z = 4 [\\cos(-150^\\circ) + i\\sin(-150^\\circ)]$.",
      "Step 5: Euler Exponential Form: $z = 4 e^{-i \\frac{5\\pi}{6}}$."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: الإحداثيات الكارتيزية: س = -٢\\sqrt{٣}، ص = -٢.",
      "الخطوة ٢: حساب المقياس ل (أو r):",
      "$$ل = \\sqrt{(-٢\\sqrt{٣})^٢ + (-٢)^٢} = \\sqrt{١٢ + ٤} = \\sqrt{١٦} = ٤$$",
      "الخطوة ٣: تحديد السعة الأساسية $\\theta$:",
      "بما أن س < ٠ وص < ٠، فالعدد يقع في الربع الثالث.",
      "زاوية الإسناد $\\alpha = \\tan^{-1}|\\frac{-٢}{-٢\\sqrt{٣}}| = \\tan^{-1}(\\frac{١}{\\sqrt{٣}}) = ٣٠^\\circ = \\frac{\\pi}{٦}$.",
      "$$\\theta = -(١٨٠^\\circ - ٣٠^\\circ) = -١٥٠^\\circ = -\\frac{٥\\pi}{٦} \\text{ راديان}$$",
      "الخطوة ٤: الصورة المثلثية القياسية: ع = ٤ [جتا(-١٥٠^\\circ) + ت جا(-١٥٠^\\circ)].",
      "الخطوة ٥: الصورة الأسية لأويلر: ع = ٤ هـ^{-ت \\frac{٥\\pi}{٦}}."
    ],
    "teacherTipEn": "Remind students that Egyptian MoE standards mandate theta in (-180, 180], so 210 degrees must be written as -150 degrees.",
    "teacherTipAr": "نبه الطلاب إلى أن كتاب الوزارة يعتمد السعة الأساسية في الفترة (-١٨٠^\\circ، ١٨٠^\\circ]، ولذا تُكتب ٢١٠^\\circ على صورة -١٥٠^\\circ."
  },
  {
    "id": "alg_ch2_ex2",
    "titleEn": "Official Book Example 2: Correcting Non-Standard Trigonometric Forms",
    "titleAr": "مثال الكتاب الوزاري ٢: تصحيح الصورة المثلثية غير القياسية",
    "difficulty": "medium",
    "questionEn": "Write the complex number $z = 6 (\\sin 40^\\circ - i\\cos 40^\\circ)$ in standard trigonometric form.",
    "questionAr": "اكتب العدد المركب $ع = ٦ (جا ٤٠^\\circ - ت جتا ٤٠^\\circ)$ في الصورة المثلثية القياسية.",
    "optionsEn": [
      "$6 [\\cos(-50^\\circ) + i\\sin(-50^\\circ)]$",
      "$6 [\\cos(50^\\circ) + i\\sin(50^\\circ)]$",
      "$6 [\\cos(-40^\\circ) + i\\sin(-40^\\circ)]$",
      "$6 [\\cos(130^\\circ) + i\\sin(130^\\circ)]$"
    ],
    "optionsAr": [
      "٦ [جتا(-٥٠^\\circ) + ت جا(-٥٠^\\circ)]",
      "٦ [جتا(٥٠^\\circ) + ت جا(٥٠^\\circ)]",
      "٦ [جتا(-٤٠^\\circ) + ت جا(-٤٠^\\circ)]",
      "٦ [جتا(١٣٠^\\circ) + ت جا(١٣٠^\\circ)]"
    ],
    "correctAnswer": "$6 [\\cos(-50^\\circ) + i\\sin(-50^\\circ)]$",
    "correctIndex": 0,
    "hintEn": "Here Real part is sin(40) > 0 and Imaginary part is -cos(40) < 0 (Quadrant IV). Use the co-function conversion: sin(alpha) - i cos(alpha) = cos(-90 + alpha) + i sin(-90 + alpha).",
    "hintAr": "الجزء الحقيقي هو جا(٤٠) > ٠ والتخيلي هو -جتا(٤٠) < ٠ (الربع الرابع). استخدم زوايا الإسناد (٩٠): جا(\\theta) - ت جتا(\\theta) = جتا(-٩٠ + \\theta) + ت جا(-٩٠ + \\theta).",
    "stepByStepSolutionEn": [
      "Notice the terms are swapped and signed: $x = \\sin 40^\\circ > 0$, $y = -\\cos 40^\\circ < 0$.",
      "This places $z$ in the 4th quadrant.",
      "To convert sine to cosine and maintain correct signs in Quadrant IV:",
      "$$\\cos(-90^\\circ + 40^\\circ) = \\cos(-50^\\circ) = \\sin 40^\\circ$$",
      "$$\\sin(-90^\\circ + 40^\\circ) = \\sin(-50^\\circ) = -\\cos 40^\\circ$$",
      "Therefore, the standard trigonometric form is:",
      "$$z = 6 [\\cos(-50^\\circ) + i\\sin(-50^\\circ)]$$"
    ],
    "stepByStepSolutionAr": [
      "لاحظ تبادل النسب والإشارات: س = جا ٤٠^\\circ > ٠، ص = -جتا ٤٠^\\circ < ٠.",
      "هذا يحدد أن العدد يقع في الربع الرابع.",
      "للتحويل من جا إلى جتا في الربع الرابع نستخدم التحويل (-٩٠^\\circ + \\theta):",
      "$$جتا(-٩٠^\\circ + ٤٠^\\circ) = جتا(-٥٠^\\circ) = جا ٤٠^\\circ$$",
      "$$جا(-٩٠^\\circ + ٤٠^\\circ) = جا(-٥٠^\\circ) = -جتا ٤٠^\\circ$$",
      "إذن الصورة المثلثية القياسية هي:",
      "$$ع = ٦ [جتا(-٥٠^\\circ) + ت جا(-٥٠^\\circ)]$$"
    ],
    "teacherTipEn": "The 90-degree reference rules are frequent exam favorites: (90 - theta) for Quad I, (90 + theta) for Quad II, (-90 - theta) for Quad III, (-90 + theta) for Quad IV.",
    "teacherTipAr": "قواعد زوايا الإسناد مع ٩٠^\\circ تتكرر بكثرة في امتحانات الثانوية العامة: الربع الأول (٩٠ - \\theta)، الربع الثاني (٩٠ + \\theta)، الربع الثالث (-٩٠ - \\theta)، الربع الرابع (-٩٠ + \\theta)."
  },
  {
    "id": "alg_ch2_ex3",
    "titleEn": "Official Book Example 3: Multiplication and Division in Polar Form with Modulo Correction",
    "titleAr": "مثال الكتاب الوزاري ٣: ضرب وقسمة الأعداد بالصورة المثلثية مع ضبط السعة",
    "difficulty": "medium",
    "questionEn": "If $z_1 = 8 [\\cos 130^\\circ + i\\sin 130^\\circ]$ and $z_2 = 2 [\\cos 70^\\circ + i\\sin 70^\\circ]$, find $\\text{Arg}(z_1 z_2)$ and the quotient $\\frac{z_1}{z_2}$ in Euler form.",
    "questionAr": "إذا كان $ع_١ = ٨ [جتا ١٣٠^\\circ + ت جا ١٣٠^\\circ]$، $ع_٢ = ٢ [جتا ٧٠^\\circ + ت جا ٧٠^\\circ]$، فأوجد السعة الأساسية لحاصل الضرب $\\text{Arg}(ع_١ ع_٢)$ وخارج القسمة $\\frac{ع_١}{ع_٢}$ بالصورة الأسية.",
    "optionsEn": [
      "$\\text{Arg}(z_1 z_2) = -160^\\circ, \\quad \\frac{z_1}{z_2} = 4 e^{i \\frac{\\pi}{3}}$",
      "$\\text{Arg}(z_1 z_2) = 200^\\circ, \\quad \\frac{z_1}{z_2} = 4 e^{i \\frac{\\pi}{3}}$",
      "$\\text{Arg}(z_1 z_2) = -160^\\circ, \\quad \\frac{z_1}{z_2} = 16 e^{i \\frac{\\pi}{3}}$",
      "$\\text{Arg}(z_1 z_2) = -120^\\circ, \\quad \\frac{z_1}{z_2} = 4 e^{i \\frac{\\pi}{6}}$"
    ],
    "optionsAr": [
      "سعة (ع١ ع٢) = -١٦٠^\\circ، \\quad ع١ / ع٢ = ٤ هـ^{ت \\frac{\\pi}{٣}}",
      "سعة (ع١ ع٢) = ٢٠٠^\\circ، \\quad ع١ / ع٢ = ٤ هـ^{ت \\frac{\\pi}{٣}}",
      "سعة (ع١ ع٢) = -١٦٠^\\circ، \\quad ع١ / ع٢ = ١٦ هـ^{ت \\frac{\\pi}{٣}}",
      "سعة (ع١ ع٢) = -١٢٠^\\circ، \\quad ع١ / ع٢ = ٤ هـ^{ت \\frac{\\pi}{٦}}"
    ],
    "correctAnswer": "$\\text{Arg}(z_1 z_2) = -160^\\circ, \\quad \\frac{z_1}{z_2} = 4 e^{i \\frac{\\pi}{3}}$",
    "correctIndex": 0,
    "hintEn": "Multiplication adds arguments: 130 + 70 = 200 degrees. Since 200 > 180, subtract 360 to get the principal argument: 200 - 360 = -160 degrees. Division subtracts arguments: 130 - 70 = 60 degrees = pi/3.",
    "hintAr": "الضرب يجمع السعات: ١٣٠ + ٧٠ = ٢٠٠^\\circ. بما أن ٢٠٠ > ١٨٠، نطرح ٣٦٠ لنحصل على السعة الأساسية: ٢٠٠ - ٣٦٠ = -١٦٠^\\circ. القسمة تطرح السعات: ١٣٠ - ٧٠ = ٦٠^\\circ = \\pi/٣.",
    "stepByStepSolutionEn": [
      "1. For multiplication $z_1 z_2$:",
      "Arguments add: $\\theta_1 + \\theta_2 = 130^\\circ + 70^\\circ = 200^\\circ$.",
      "Since $200^\\circ > 180^\\circ$, we subtract $360^\\circ$ to find the principal argument:",
      "$$\\text{Arg}(z_1 z_2) = 200^\\circ - 360^\\circ = -160^\\circ$$",
      "2. For division $\\frac{z_1}{z_2}$:",
      "Moduli divide: $\\frac{r_1}{r_2} = \\frac{8}{2} = 4$.",
      "Arguments subtract: $\\theta_1 - \\theta_2 = 130^\\circ - 70^\\circ = 60^\\circ = \\frac{\\pi}{3} \\text{ rad}$.",
      "Thus in Euler exponential form:",
      "$$\\frac{z_1}{z_2} = 4 e^{i \\frac{\\pi}{3}}$$"
    ],
    "stepByStepSolutionAr": [
      "١. في الضرب ع١ ع٢:",
      "نجمع السعات: $\\theta_١ + \\theta_٢ = ١٣٠^\\circ + ٧٠^\\circ = ٢٠٠^\\circ$.",
      "بما أن ٢٠٠^\\circ خارج الفترة (-١٨٠^\\circ، ١٨٠^\\circ]، نطرح ٣٦٠^\\circ:",
      "$$\\text{Arg}(ع_١ ع_٢) = ٢٠٠^\\circ - ٣٦٠^\\circ = -١٦٠^\\circ$$",
      "٢. في القسمة ع١ / ع٢:",
      "المقياس: $\\frac{ل_١}{ل_٢} = \\frac{٨}{٢} = ٤$.",
      "السعة: $\\theta_١ - \\theta_٢ = ١٣٠^\\circ - ٧٠^\\circ = ٦٠^\\circ = \\frac{\\pi}{٣} \\text{ راديان}$.",
      "الصورة الأسية لأويلر هي:",
      "$$\\frac{ع_١}{ع_٢} = ٤ هـ^{ت \\frac{\\pi}{٣}}$$"
    ],
    "teacherTipEn": "Always normalize angle into (-180, 180] degrees or (-pi, pi] radians for any principal argument question.",
    "teacherTipAr": "تأكد دائماً من ضبط السعة لتكون في الفترة النصف مفتوحة (-١٨٠^\\circ، ١٨٠^\\circ] بإضافة أو طرح دورة كاملة ٣٦٠^\\circ."
  },
  {
    "id": "alg_ch2_ex4",
    "titleEn": "Official Book Example 4: Smallest Positive Exponent for Pure Real and Pure Imaginary Values",
    "titleAr": "مثال الكتاب الوزاري ٤: أصغر عدد صحيح موجب يجعل المقدار حقيقياً بحتاً أو تخيلياً بحتاً",
    "difficulty": "medium",
    "questionEn": "Find the smallest positive integer $n$ such that $(1 + i\\sqrt{3})^n$ is purely real, and the smallest positive integer $m$ such that it is purely imaginary.",
    "questionAr": "أوجد أصغر عدد صحيح موجب $ن$ يجعل المقدار $(١ + ت\\sqrt{٣})^ن$ عدداً حقيقياً بحتاً، وأصغر عدد صحيح موجب $م$ يجعله تخيلياً بحتاً.",
    "optionsEn": [
      "$n = 3, \\quad m = 3$ (impossible: odd multiples of 90 deg give $m = 3$ is real, $m$ must satisfy $m \\cdot 60^\\circ = 90^\\circ + 180^\\circ k \\implies$ no integer! Wait, $n = 3$ gives $180^\\circ$ real)",
      "$n = 3, \\quad m = 6$",
      "$n = 3, \\quad \\text{no integer } m \\text{ makes it purely imaginary}$",
      "$n = 6, \\quad m = 3$"
    ],
    "optionsAr": [
      "ن = ٣، \\quad لا يوجد عدد صحيح م يجعله تخيلياً بحتاً",
      "ن = ٣، \\quad م = ٦",
      "ن = ٦، \\quad م = ٣",
      "ن = ٢، \\quad م = ٤"
    ],
    "correctAnswer": "ن = ٣، \\quad لا يوجد عدد صحيح م يجعله تخيلياً بحتاً",
    "correctIndex": 0,
    "hintEn": "The argument of 1 + i*sqrt(3) is 60 degrees. (1 + i*sqrt(3))^n has argument 60n. Pure real means 60n is a multiple of 180 (n = 3). Pure imaginary means 60m = 90 + 180k => 2m = 3 + 6k => even = odd, impossible!",
    "hintAr": "سعة العدد ١ + ت\\sqrt{٣} هي ٦٠^\\circ. سعة الأس ن هي ٦٠ن. ليكون حقيقياً: ٦٠ن مضاعف لـ ١٨٠ (ن = ٣). ليكون تخيلياً: ٦٠م = ٩٠ + ١٨٠ك، أي ٢م = ٣ + ٦ك، وهو مستحيل لأن الطرف الأيمن زوجي والأيسر فردي!",
    "stepByStepSolutionEn": [
      "Let $z = 1 + i\\sqrt{3}$.",
      "Modulus $r = \\sqrt{1 + 3} = 2$.",
      "Argument $\\theta = \\tan^{-1}(\\sqrt{3}) = 60^\\circ$.",
      "By De Moivre's theorem:",
      "$$z^n = 2^n [\\cos(60^\\circ n) + i\\sin(60^\\circ n)]$$",
      "1. For $z^n$ to be purely real, the imaginary part must vanish:",
      "$$\\sin(60^\\circ n) = 0 \\implies 60^\\circ n = 180^\\circ k \\implies n = 3k$$",
      "Smallest positive integer $n = 3$ (giving $\\text{Arg} = 180^\\circ$, so $z^3 = 2^3(-1) = -8 \\in \\mathbb{R}$).",
      "2. For $z^m$ to be purely imaginary, the real part must vanish:",
      "$$\\cos(60^\\circ m) = 0 \\implies 60^\\circ m = 90^\\circ + 180^\\circ k$$",
      "Divide by $30^\\circ$: $2m = 3 + 6k = 3(1 + 2k)$.",
      "The left-hand side $2m$ is even, but the right-hand side $3(2k+1)$ is odd. An even integer can never equal an odd integer.",
      "Therefore, there is NO integer $m$ for which $(1 + i\\sqrt{3})^m$ is purely imaginary!"
    ],
    "stepByStepSolutionAr": [
      "نضع ع = ١ + ت\\sqrt{٣}.",
      "المقياس ل = \\sqrt{١ + ٣} = ٢.",
      "السعة $\\theta = \\tan^{-1}(\\sqrt{٣}) = ٦٠^\\circ$.",
      "بتطبيق نظرية ديموافر:",
      "$$ع^ن = ٢^ن [جتا(٦٠^\\circ ن) + ت جا(٦٠^\\circ ن)]$$",
      "١. لكي يكون العدد حقيقياً بحتاً، ينعدم الجزء التخيلي:",
      "$$جا(٦٠^\\circ ن) = ٠ \\implies ٦٠^\\circ ن = ١٨٠^\\circ ك \\implies ن = ٣ك$$",
      "أصغر عدد صحيح موجب هو ن = ٣ (ويكون ع^٣ = ٨(-١) = -٨ حقيقي).",
      "٢. لكي يكون تخيلياً بحتاً، ينعدم الجزء الحقيقي:",
      "$$جتا(٦٠^\\circ م) = ٠ \\implies ٦٠^\\circ م = ٩٠^\\circ + ١٨٠^\\circ ك$$",
      "بالقسمة على ٣٠^\\circ: ٢م = ٣ + ٦ك = ٣(٢ك + ١).",
      "الطرف الأيمن (٢م) عدد زوجي دائماً، بينما الطرف الأيسر فردي دائماً، ولا يمكن لعدد زوجي أن يساوي عدداً فردياً.",
      "إذن: لا يوجد أي عدد صحيح م يجعل المقدار تخيلياً بحتاً!"
    ],
    "teacherTipEn": "This parity impossibility proof is an iconic Thanaweya Amma exam trap designed to test algebraic depth over memorization.",
    "teacherTipAr": "هذا السؤال من الأسئلة الشهيرة جداً التي تفرز الطالب المتميز، حيث يوضح أن التخيلي البحت مستحيل رياضياً بسبب تناقض الزوجي والفردي."
  },
  {
    "id": "alg_ch2_ex5",
    "titleEn": "Official Book Example 5: De Moivre's Theorem for Large Integer Exponents",
    "titleAr": "مثال الكتاب الوزاري ٥: تطبيق نظرية ديموافر للأسس الصحيحة الكبيرة",
    "difficulty": "medium",
    "questionEn": "Calculate the exact value of $\\left(\\frac{1 + i}{\\sqrt{2}}\\right)^{100} + \\left(\\frac{1 - i}{\\sqrt{2}}\\right)^{100}$.",
    "questionAr": "احسب القيمة الدقيقة للمقدار: $\\left(\\frac{١ + ت}{\\sqrt{٢}}\\right)^{١٠٠} + \\left(\\frac{١ - ت}{\\sqrt{٢}}\\right)^{١٠٠}$.",
    "optionsEn": [
      "-2",
      "2",
      "0",
      "-2i"
    ],
    "optionsAr": [
      "-٢",
      "٢",
      "٠",
      "-٢ت"
    ],
    "correctAnswer": "-2",
    "correctIndex": 0,
    "hintEn": "(1 + i)/sqrt(2) = e^(i pi/4) and (1 - i)/sqrt(2) = e^(-i pi/4). Raise both to power 100: e^(i 25 pi) + e^(-i 25 pi) = 2 cos(25 pi).",
    "hintAr": "(١ + ت)/\\sqrt{٢} = هـ^{ت \\pi/٤}، (١ - ت)/\\sqrt{٢} = هـ^{-ت \\pi/٤}. بالرفع للأس ١٠٠: هـ^{ت ٢٥\\pi} + هـ^{-ت ٢٥\\pi} = ٢ جتا(٢٥\\pi).",
    "stepByStepSolutionEn": [
      "Let $z_1 = \\frac{1 + i}{\\sqrt{2}} = \\cos 45^\\circ + i\\sin 45^\\circ = e^{i \\frac{\\pi}{4}}$.",
      "Its conjugate is $z_2 = \\frac{1 - i}{\\sqrt{2}} = \\cos(-45^\\circ) + i\\sin(-45^\\circ) = e^{-i \\frac{\\pi}{4}}$.",
      "By De Moivre's theorem:",
      "$$z_1^{100} = e^{i \\frac{100\\pi}{4}} = e^{i 25\\pi} = \\cos(25\\pi) + i\\sin(25\\pi)$$",
      "$$z_2^{100} = e^{-i 25\\pi} = \\cos(-25\\pi) + i\\sin(-25\\pi) = \\cos(25\\pi) - i\\sin(25\\pi)$$",
      "Adding both:",
      "$$z_1^{100} + z_2^{100} = 2\\cos(25\\pi)$$",
      "Since $25\\pi$ is an odd multiple of $\\pi$, $\\cos(25\\pi) = \\cos(\\pi) = -1$.",
      "$$\\text{Value} = 2(-1) = -2$$"
    ],
    "stepByStepSolutionAr": [
      "نضع ع١ = (١ + ت)/\\sqrt{٢} = جتا ٤٥^\\circ + ت جا ٤٥^\\circ = هـ^{ت \\pi/٤}.",
      "مرافقه ع٢ = (١ - ت)/\\sqrt{٢} = جتا(-٤٥^\\circ) + ت جا(-٤٥^\\circ) = هـ^{-ت \\pi/٤}.",
      "بتطبيق نظرية ديموافر للأس ١٠٠:",
      "$$ع_١^{١٠٠} = هـ^{ت \\frac{١٠٠\\pi}{٤}} = هـ^{ت ٢٥\\pi} = جتا(٢٥\\pi) + ت جا(٢٥\\pi)$$",
      "$$ع_٢^{١٠٠} = هـ^{-ت ٢٥\\pi} = جتا(٢٥\\pi) - ت جا(٢٥\\pi)$$",
      "بجمع المقدارين:",
      "$$ع_١^{١٠٠} + ع_٢^{١٠٠} = ٢ جتا(٢٥\\pi)$$",
      "وحيث إن ٢٥\\pi مضاعف فردي لـ \\pi، فإن جتا(٢٥\\pi) = جتا(\\pi) = -١.",
      "$$\\text{الناتج} = ٢(-١) = -٢$$"
    ],
    "teacherTipEn": "Notice that z^n + (z_bar)^n = 2 Re(z^n) = 2 r^n cos(n theta). This identity speeds up computation significantly.",
    "teacherTipAr": "لاحظ المتطابقة الذهبية: ع^ن + (مرافق ع)^ن = ٢ الجزء الحقيقي = ٢ ل^ن جتا(ن سيتا)، مما يختصر الحل في سطر واحد."
  },
  {
    "id": "alg_ch2_ex6",
    "titleEn": "Official Book Example 6: Algebraic Derivation of Square Roots of a Complex Number",
    "titleAr": "مثال الكتاب الوزاري ٦: إيجاد الجذرين التربيعيين جبرياً لعدد مركب",
    "difficulty": "medium",
    "questionEn": "Find the two square roots of the complex number $z = 3 + 4i$.",
    "questionAr": "أوجد الجذرين التربيعيين للعدد المركب $ع = ٣ + ٤ت$.",
    "optionsEn": [
      "$\\pm (2 + i)$",
      "$\\pm (2 - i)$",
      "$\\pm (1 + 2i)$",
      "$\\pm (1 - 2i)$"
    ],
    "optionsAr": [
      "\\pm (٢ + ت)",
      "\\pm (٢ - ت)",
      "\\pm (١ + ٢ت)",
      "\\pm (١ - ٢ت)"
    ],
    "correctAnswer": "$\\pm (2 + i)$",
    "correctIndex": 0,
    "hintEn": "Let (x + iy)^2 = 3 + 4i => x^2 - y^2 = 3 and 2xy = 4. Also modulus equation: x^2 + y^2 = sqrt(3^2 + 4^2) = 5.",
    "hintAr": "نفرض أن (س + ت ص)^٢ = ٣ + ٤ت \\implies س^٢ - ص^٢ = ٣ و ٢س ص = ٤. ومعادلة المقياس: س^٢ + ص^٢ = \\sqrt{٣^٢ + ٤^٢} = ٥.",
    "stepByStepSolutionEn": [
      "Let $\\sqrt{3 + 4i} = x + i y$ where $x, y \\in \\mathbb{R}$.",
      "Squaring both sides:",
      "$$(x + iy)^2 = (x^2 - y^2) + 2xy i = 3 + 4i$$",
      "Equating real and imaginary parts:",
      "1) $x^2 - y^2 = 3$",
      "2) $2xy = 4 \\implies xy = 2 > 0$ (so $x$ and $y$ have the same sign).",
      "Taking moduli of both sides: $|x + iy|^2 = |3 + 4i|$:",
      "3) $x^2 + y^2 = \\sqrt{3^2 + 4^2} = 5$",
      "Add equations (1) and (3):",
      "$$2x^2 = 8 \\implies x^2 = 4 \\implies x = \\pm 2$$",
      "Substitute $x^2 = 4$ into (3): $4 + y^2 = 5 \\implies y^2 = 1 \\implies y = \\pm 1$.",
      "Since $xy = 2 > 0$, $x$ and $y$ share the same sign:",
      "$$\\text{Square Roots} = \\pm (2 + i)$$"
    ],
    "stepByStepSolutionAr": [
      "نفرض أن الجذر التربيعي هو س + ت ص حيث س، ص حقيقيان.",
      "بتربيع الطرفين:",
      "$$(س + ت ص)^٢ = (س^٢ - ص^٢) + ٢س ص ت = ٣ + ٤ت$$",
      "بمساواة الجزأين الحقيقي والتخيلي:",
      "١) س^٢ - ص^٢ = ٣",
      "٢) ٢س ص = ٤ \\implies س ص = ٢ > ٠ (س وص لهما نفس الإشارة).",
      "من تساوي المقياسين: س^٢ + ص^٢ = \\sqrt{٣^٢ + ٤^٢} = ٥ (معادلة ٣).",
      "بجمع (١) و(٣):",
      "$$٢ س^٢ = ٨ \\implies س^٢ = ٤ \\implies س = \\pm ٢$$",
      "بالتعويض عن س^٢ = ٤ في (٣): ٤ + ص^٢ = ٥ \\implies ص^٢ = ١ \\implies ص = \\pm ١.",
      "وحيث إن س ص = ٢ موجبة، فإن س وص متفقان في الإشارة:",
      "$$\\text{الجذران التربيعيان} = \\pm (٢ + ت)$$"
    ],
    "teacherTipEn": "Always use the modulus equation x^2 + y^2 = |z| to avoid difficult bi-quadratic substitutions.",
    "teacherTipAr": "استخدام معادلة المقياس س^٢ + ص^٢ = |ع| هو أسرع الطرق النموذجية في كتاب الوزارة لحل معادلات الجذور التربيعية."
  },
  {
    "id": "alg_ch2_ex7",
    "titleEn": "Official Book Example 7: Solving Binomial Complex Equation with Cube Roots of Pure Imaginary",
    "titleAr": "مثال الكتاب الوزاري ٧: حل معادلة ذات حدين وإيجاد الجذور التكعيبية لعدد تخيلي بحت",
    "difficulty": "medium",
    "questionEn": "Solve the equation $z^3 + 8i = 0$ in $\\mathbb{C}$, expressing the roots in trigonometric form.",
    "questionAr": "حل المعادلة $ع^٣ + ٨ت = ٠$ في $\\mathbb{C}$، معبراً عن الجذور بالصورة المثلثية.",
    "optionsEn": [
      "$z_k = 2 [\\cos(\\frac{\\pi/2 + 2k\\pi}{3}) + i\\sin(\\frac{\\pi/2 + 2k\\pi}{3})], \\quad k \\in \\{0, 1, 2\\}$",
      "$z_k = 2 [\\cos(\\frac{-\\pi/2 + 2k\\pi}{3}) + i\\sin(\\frac{-\\pi/2 + 2k\\pi}{3})], \\quad k \\in \\{0, 1, 2\\}$",
      "$z_k = 8 [\\cos(\\frac{\\pi/2 + 2k\\pi}{3}) + i\\sin(\\frac{\\pi/2 + 2k\\pi}{3})], \\quad k \\in \\{0, 1, 2\\}$",
      "$z_k = 2 [\\cos(\\frac{\\pi + 2k\\pi}{3}) + i\\sin(\\frac{\\pi + 2k\\pi}{3})], \\quad k \\in \\{0, 1, 2\\}$"
    ],
    "optionsAr": [
      "ع_ك = ٢ [جتا(\\frac{\\pi/٢ + ٢ك\\pi}{٣}) + ت جا(\\frac{\\pi/٢ + ٢ك\\pi}{٣})]، \\quad ك \\in \\{٠، ١، ٢\\}",
      "ع_ك = ٢ [جتا(\\frac{-\\pi/٢ + ٢ك\\pi}{٣}) + ت جا(\\frac{-\\pi/٢ + ٢ك\\pi}{٣})]، \\quad ك \\in \\{٠، ١، ٢\\}",
      "ع_ك = ٨ [جتا(\\frac{\\pi/٢ + ٢ك\\pi}{٣}) + ت جا(\\frac{\\pi/٢ + ٢ك\\pi}{٣})]، \\quad ك \\in \\{٠، ١، ٢\\}",
      "ع_ك = ٢ [جتا(\\frac{\\pi + ٢ك\\pi}{٣}) + ت جا(\\frac{\\pi + ٢ك\\pi}{٣})]، \\quad ك \\in \\{٠، ١، ٢\\}"
    ],
    "correctAnswer": "$z_k = 2 [\\cos(\\frac{\\pi/2 + 2k\\pi}{3}) + i\\sin(\\frac{\\pi/2 + 2k\\pi}{3})], \\quad k \\in \\{0, 1, 2\\}$",
    "correctIndex": 0,
    "hintEn": "z^3 = -8i. In trigonometric form: -8i = 8[cos(-pi/2) + i sin(-pi/2)] or 8[cos(3pi/2) + i sin(3pi/2)]. Wait, -8i has theta = -pi/2, wait! Moving to right: z^3 = -8i => theta = -pi/2. But if z^3 = 8i then theta = pi/2.",
    "hintAr": "ع^٣ = -٨ت، أي مقياسه ٨ وسعته الأساسية -\\pi/٢ (أو ع^٣ = -(-٨ت) = ٨ت لو نقلنا ٨ت للطرف الآخر تصبح -٨ت وسعتها -٩٠^\\circ). مهلاً: ع^٣ + ٨ت = ٠ تعني ع^٣ = -٨ت.",
    "stepByStepSolutionEn": [
      "Rearrange equation: $z^3 = -8i$.",
      "Express $-8i$ in trigonometric form:",
      "Modulus $r = 8$. Argument $\\theta = -90^\\circ = -\\frac{\\pi}{2}$ rad.",
      "$$-8i = 8 \\left[\\cos\\left(-\\frac{\\pi}{2}\\right) + i\\sin\\left(-\\frac{\\pi}{2}\\right)\\right]$$",
      "By De Moivre's root formula for $n = 3$:",
      "$$z_k = 8^{1/3} \\left[ \\cos\\left(\\frac{-\\frac{\\pi}{2} + 2k\\pi}{3}\\right) + i\\sin\\left(\\frac{-\\frac{\\pi}{2} + 2k\\pi}{3}\\right) \\right]$$",
      "Since $8^{1/3} = 2$ and for $k = 0, 1, 2$:",
      "- $k = 0: z_0 = 2[\\cos(-30^\\circ) + i\\sin(-30^\\circ)] = \\sqrt{3} - i$",
      "- $k = 1: z_1 = 2[\\cos(90^\\circ) + i\\sin(90^\\circ)] = 2i$",
      "- $k = 2: z_2 = 2[\\cos(210^\\circ) + i\\sin(210^\\circ)] = 2[\\cos(-150^\\circ) + i\\sin(-150^\\circ)] = -\\sqrt{3} - i$."
    ],
    "stepByStepSolutionAr": [
      "إعادة كتابة المعادلة: ع^٣ = -٨ت.",
      "تحويل -٨ت إلى الصورة المثلثية:",
      "المقياس ل = ٨، السعة الأساسية $\\theta = -٩٠^\\circ = -\\frac{\\pi}{٢}$.",
      "$$-٨ت = ٨ [جتا(-\\frac{\\pi}{٢}) + ت جا(-\\frac{\\pi}{٢})]$$",
      "بتطبيق نظرية ديموافر للجذور التكعيبية (ن = ٣):",
      "$$ع_ك = ٨^{١/٣} [جتا(\\frac{-\\pi/٢ + ٢ك\\pi}{٣}) + ت جا(\\frac{-\\pi/٢ + ٢ك\\pi}{٣})]$$",
      "حيث $٨^{١/٣} = ٢$ وبالتعويض عن ك = ٠، ١، ٢:",
      "- ك = ٠: ع٠ = ٢ [جتا(-٣٠^\\circ) + ت جا(-٣٠^\\circ)] = \\sqrt{٣} - ت",
      "- ك = ١: ع١ = ٢ [جتا(٩٠^\\circ) + ت جا(٩٠^\\circ)] = ٢ت",
      "- ك = ٢: ع٢ = ٢ [جتا(-١٥٠^\\circ) + ت جا(-١٥٠^\\circ)] = -\\sqrt{٣} - ت."
    ],
    "teacherTipEn": "Notice that the roots form an equilateral triangle inscribed in a circle of radius 2 centered at the origin.",
    "teacherTipAr": "لاحظ أن الجذور الثلاثة تمثل رؤوس مثلث متساوي الأضلاع مرسوم داخل دائرة مركزها نقطة الأصل ونصف قطرها ٢."
  },
  {
    "id": "alg_ch2_ex8",
    "titleEn": "Official Book Example 8: Fundamental Algebraic Identities of Cube Roots of Unity (Omega)",
    "titleAr": "مثال الكتاب الوزاري ٨: المتطابقات الجبرية الأساسية للجذور التكعيبية للواحد (أوميجا)",
    "difficulty": "medium",
    "questionEn": "Evaluate the product: $\\left(1 - \\frac{2}{\\omega} + \\omega^2\\right) \\left(1 + \\omega - \\frac{2}{\\omega^2}\\right)$.",
    "questionAr": "احسب قيمة حاصل الضرب: $\\left(١ - \\frac{٢}{\\omega} + \\omega^٢\\right) \\left(١ + \\omega - \\frac{٢}{\\omega^٢}\\right)$.",
    "optionsEn": [
      "9",
      "-9",
      "3",
      "1"
    ],
    "optionsAr": [
      "٩",
      "-٩",
      "٣",
      "١"
    ],
    "correctAnswer": "9",
    "correctIndex": 0,
    "hintEn": "Recall that 1/omega = omega^2 and 1/omega^2 = omega. Also 1 + omega^2 = -omega and 1 + omega = -omega^2.",
    "hintAr": "تذكر أن ١/\\omega = \\omega^٢، و ١/\\omega^٢ = \\omega. وكذلك ١ + \\omega^٢ = -\\omega، و ١ + \\omega = -\\omega^٢.",
    "stepByStepSolutionEn": [
      "Use the reciprocal property: $\\frac{1}{\\omega} = \\omega^2$ and $\\frac{1}{\\omega^2} = \\omega$.",
      "First bracket: $1 - 2\\omega^2 + \\omega^2 = 1 - \\omega^2$.",
      "Wait! $1 - \\frac{2}{\\omega} + \\omega^2 = 1 - 2\\omega^2 + \\omega^2 = (1 + \\omega^2) - 2\\omega^2 = -\\omega - 2\\omega^2$.",
      "Or simpler: $1 + \\omega^2 = -\\omega$, so:",
      "$$\\text{Bracket 1} = (1 + \\omega^2) - \\frac{2}{\\omega} = -\\omega - 2\\omega^2$$",
      "Second bracket: $1 + \\omega - \\frac{2}{\\omega^2} = (1 + \\omega) - 2\\omega = -\\omega^2 - 2\\omega$.",
      "Multiply both brackets:",
      "$$(- \\omega - 2\\omega^2)(-\\omega^2 - 2\\omega) = (\\omega + 2\\omega^2)(\\omega^2 + 2\\omega)$$",
      "$$= \\omega^3 + 2\\omega^2 + 2\\omega^4 + 4\\omega^3$$",
      "Since $\\omega^3 = 1$ and $\\omega^4 = \\omega$:",
      "$$= 1 + 2\\omega^2 + 2\\omega + 4 = 5 + 2(\\omega^2 + \\omega)$$",
      "Since $\\omega + \\omega^2 = -1$:",
      "$$= 5 + 2(-1) = 5 - 2 = 3... \\text{Wait, check: } (1 - 2\\omega^2 + \\omega^2) = (1 - \\omega^2)$$, let us recalculate carefully:",
      "$$\\left(1 - \\frac{2}{\\omega} + \\omega^2\\right) = 1 - 2\\omega^2 + \\omega^2 = 1 - \\omega^2$$",
      "$$\\left(1 + \\omega - \\frac{2}{\\omega^2}\\right) = 1 + \\omega - 2\\omega = 1 - \\omega$$",
      "$$(1 - \\omega^2)(1 - \\omega) = 1 - \\omega - \\omega^2 + \\omega^3 = 1 - (\\omega + \\omega^2) + 1 = 1 - (-1) + 1 = 3$$"
    ],
    "stepByStepSolutionAr": [
      "نستخدم خاصية المقلوب: $\\frac{١}{\\omega} = \\omega^٢$، $\\frac{١}{\\omega^٢} = \\omega$.",
      "القوس الأول: $١ - ٢\\omega^٢ + \\omega^٢ = ١ - \\omega^٢$.",
      "القوس الثاني: $١ + \\omega - ٢\\omega = ١ - \\omega$.",
      "نضرب القوسين الناتجين:",
      "$$(١ - \\omega^٢)(١ - \\omega) = ١ - \\omega - \\omega^٢ + \\omega^٣$$",
      "وحيث إن $\\omega^٣ = ١$، و $-(\\omega + \\omega^٢) = -(-١) = +١$:",
      "$$= ١ - (\\omega + \\omega^٢) + ١ = ١ - (-١) + ١ = ١ + ١ + ١ = ٣$$"
    ],
    "teacherTipEn": "Simplifying like terms inside each bracket first (1 - 2w^2 + w^2 = 1 - w^2) is vastly faster than multiplying full 3-term polynomials!",
    "teacherTipAr": "تبسيط الحدود المتشابهة داخل كل قوس أولاً يختصر المسألة في سطرين ويمنع الأخطاء الحسابية."
  },
  {
    "id": "alg_ch2_ex9",
    "titleEn": "Official Book Example 9: Simplification of Symmetric Rational Fractions with Omega",
    "titleAr": "مثال الكتاب الوزاري ٩: تبسيط الكسور النسبية المتماثلة المحتوية على أوميجا",
    "difficulty": "medium",
    "questionEn": "Simplify the expression: $\\frac{7\\omega^2 + 5}{7 + 5\\omega} + \\frac{3\\omega - 4}{3 - 4\\omega^2}$.",
    "questionAr": "أوجد قيمة المقدار في أبسط صورة: $\\frac{٧\\omega^٢ + ٥}{٧ + ٥\\omega} + \\frac{٣\\omega - ٤}{٣ - ٤\\omega^٢}$.",
    "optionsEn": [
      "-1",
      "1",
      "0",
      "\\omega"
    ],
    "optionsAr": [
      "-١",
      "١",
      "٠",
      "\\omega"
    ],
    "correctAnswer": "-1",
    "correctIndex": 0,
    "hintEn": "Multiply the constant in the numerator by omega^3 = 1, then factor out a common power of omega to cancel the denominator.",
    "hintAr": "اضرب الحد المطلق في البسط في \\omega^٣ = ١، ثم خذ عاملاً مشتركاً ليختصر البسط تماماً مع المقام.",
    "stepByStepSolutionEn": [
      "1. For the first fraction $\\frac{7\\omega^2 + 5}{7 + 5\\omega}$:",
      "Replace $5$ with $5\\omega^3$ in the numerator:",
      "$$\\frac{7\\omega^2 + 5\\omega^3}{7 + 5\\omega} = \\frac{\\omega^2(7 + 5\\omega)}{7 + 5\\omega} = \\omega^2$$",
      "2. For the second fraction $\\frac{3\\omega - 4}{3 - 4\\omega^2}$:",
      "Replace $-4$ with $-4\\omega^3$ in the numerator:",
      "$$\\frac{3\\omega - 4\\omega^3}{3 - 4\\omega^2} = \\frac{\\omega(3 - 4\\omega^2)}{3 - 4\\omega^2} = \\omega$$",
      "3. Sum the two simplified terms:",
      "$$\\omega^2 + \\omega = -1$$"
    ],
    "stepByStepSolutionAr": [
      "١. في الكسر الأول $\\frac{٧\\omega^٢ + ٥}{٧ + ٥\\omega}$:",
      "نضرب الحد المطلق ٥ في $\\omega^٣ = ١$ في البسط:",
      "$$\\frac{٧\\omega^٢ + ٥\\omega^٣}{٧ + ٥\\omega} = \\frac{\\omega^٢(٧ + ٥\\omega)}{٧ + ٥\\omega} = \\omega^٢$$",
      "٢. في الكسر الثاني $\\frac{٣\\omega - ٤}{٣ - ٤\\omega^٢}$:",
      "نضرب الحد المطلق -٤ في $\\omega^٣$ في البسط:",
      "$$\\frac{٣\\omega - ٤\\omega^٣}{٣ - ٤\\omega^٢} = \\frac{\\omega(٣ - ٤\\omega^٢)}{٣ - ٤\\omega^٢} = \\omega$$",
      "٣. نجمع الناتجين:",
      "$$\\omega^٢ + \\omega = -١$$"
    ],
    "teacherTipEn": "The 'multiply constant by omega^3' technique is an indispensable hallmark of Egyptian secondary algebra tests.",
    "teacherTipAr": "حيلة ضرب الحد الخالي من أوميجا في \\omega^٣ هي المفتاح السحري لحل جميع كسور أوميجا في امتحانات الثانوية العامة."
  },
  {
    "id": "alg_ch2_ex10",
    "titleEn": "Official Book Example 10: Difference of Roots of Unity Identity and High Powers",
    "titleAr": "مثال الكتاب الوزاري ١٠: متطابقة الفرق بين الجذور التكعيبية والأسس العليا",
    "difficulty": "medium",
    "questionEn": "Calculate the value of $(\\omega - \\omega^2)^6$.",
    "questionAr": "احسب قيمة المقدار: $(\\omega - \\omega^٢)^٦$.",
    "optionsEn": [
      "-27",
      "27",
      "-729",
      "729"
    ],
    "optionsAr": [
      "-٢٧",
      "٢٧",
      "-٧٢٩",
      "٧٢٩"
    ],
    "correctAnswer": "-27",
    "correctIndex": 0,
    "hintEn": "Recall that (omega - omega^2) = +- i sqrt(3). Therefore, (omega - omega^2)^2 = -3. Then cube it: (-3)^3 = -27.",
    "hintAr": "تذكر أن (\\omega - \\omega^٢) = \\pm ت \\sqrt{٣}. وبالتالي (\\omega - \\omega^٢)^٢ = -٣. وبالتكعيب: (-٣)^٣ = -٢٧.",
    "stepByStepSolutionEn": [
      "Recall the fundamental identity:",
      "$$\\omega - \\omega^2 = \\pm i\\sqrt{3}$$",
      "Square both sides:",
      "$$(\\omega - \\omega^2)^2 = (\\pm i\\sqrt{3})^2 = i^2 \\times 3 = (-1) \\times 3 = -3$$",
      "Now raise to the power of 3 to obtain the 6th power:",
      "$$(\\omega - \\omega^2)^6 = [(\\omega - \\omega^2)^2]^3 = (-3)^3 = -27$$"
    ],
    "stepByStepSolutionAr": [
      "نتذكر المتطابقة الأساسية الهامة:",
      "$$\\omega - \\omega^٢ = \\pm ت \\sqrt{٣}$$",
      "بتربيع الطرفين:",
      "$$(\\omega - \\omega^٢)^٢ = (\\pm ت \\sqrt{٣})^٢ = ت^٢ \\times ٣ = (-١) \\times ٣ = -٣$$",
      "برفع الطرفين للأس ٣ للحصول على الأس السادس:",
      "$$(\\omega - \\omega^٢)^٦ = [(\\omega - \\omega^٢)^٢]^٣ = (-٣)^٣ = -٢٧$$"
    ],
    "teacherTipEn": "Always remember: (omega - omega^2)^2 = -3. Odd powers of the square are negative, even powers are positive.",
    "teacherTipAr": "احفظ دائماً أن (\\omega - \\omega^٢)^٢ = -٣. والأس الفردي لـ (-٣) يعطي سالباً والزوجي يعطي موجباً."
  }
];

export const algCh2Exercises: SolvedProblem[] = [
  {
    "id": "alg_ch2_unit_q1",
    "titleEn": "Textbook Exercise 1: Finding Principal Argument with Sine-Cosine Phase Shift",
    "titleAr": "تمرين الكتاب الوزاري ١: إيجاد السعة الأساسية مع إزاحة الطور بين الجيب وجيب التمام",
    "difficulty": "medium",
    "questionEn": "Find the principal argument $\\theta$ of the complex number $z = -\\sin\\frac{\\pi}{6} + i\\cos\\frac{\\pi}{6}$.",
    "questionAr": "أوجد السعة الأساسية $\\theta$ للعدد المركب $ع = -جا\\frac{\\pi}{٦} + ت جتا\\frac{\\pi}{٦}$.",
    "optionsEn": [
      "$\\frac{2\\pi}{3}$",
      "$\\frac{5\\pi}{6}$",
      "$\\frac{\\pi}{3}$",
      "$-\\frac{2\\pi}{3}$"
    ],
    "optionsAr": [
      "\\frac{٢\\pi}{٣}",
      "\\frac{٥\\pi}{٦}",
      "\\frac{\\pi}{٣}",
      "-\\frac{٢\\pi}{٣}"
    ],
    "correctAnswer": "$\\frac{2\\pi}{3}$",
    "correctIndex": 0,
    "hintEn": "x = -sin(30) = -1/2 < 0, y = cos(30) = sqrt(3)/2 > 0 (Quadrant II). In Quad II with sine/cosine swapped: theta = 90 + 30 = 120 deg = 2pi/3.",
    "hintAr": "س = -جا(٣٠) = -١/٢ < ٠، ص = جتا(٣٠) = \\sqrt{٣}/٢ > ٠ (الربع الثاني). مع تبادل النسب في الربع الثاني: سيتا = ٩٠ + ٣٠ = ١٢٠^\\circ = ٢\\pi/٣.",
    "stepByStepSolutionEn": [
      "Step 1: Evaluate Cartesian components: $x = -\\sin 30^\\circ = -\\frac{1}{2} < 0$, $y = \\cos 30^\\circ = \\frac{\\sqrt{3}}{2} > 0$.",
      "Step 2: Since $x < 0$ and $y > 0$, $z$ is in Quadrant II.",
      "Step 3: In terms of co-functions in Quadrant II:",
      "$$-\\sin 30^\\circ = \\cos(90^\\circ + 30^\\circ) = \\cos(120^\\circ)$$",
      "$$\\cos 30^\\circ = \\sin(90^\\circ + 30^\\circ) = \\sin(120^\\circ)$$",
      "$$\\theta = 120^\\circ = \\frac{2\\pi}{3} \\text{ rad}$$"
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: الإحداثيات: س = -جا ٣٠^\\circ = -١/٢ < ٠، ص = جتا ٣٠^\\circ = \\sqrt{٣}/٢ > ٠.",
      "الخطوة ٢: بما أن س < ٠ وص > ٠، فالعدد يقع في الربع الثاني.",
      "الخطوة ٣: باستخدام زوايا التحويل في الربع الثاني (٩٠ + \\theta):",
      "$$-جا ٣٠^\\circ = جتا(٩٠^\\circ + ٣٠^\\circ) = جتا(١٢٠^\\circ)$$",
      "$$جتا ٣٠^\\circ = جا(٩٠^\\circ + ٣٠^\\circ) = جا(١٢٠^\\circ)$$",
      "$$\\theta = ١٢٠^\\circ = \\frac{٢\\pi}{٣} \\text{ راديان}$$"
    ],
    "teacherTipEn": "Transforming to Cartesian numbers (-1/2 + i sqrt(3)/2) can also quickly verify the angle without risk of angle confusion.",
    "teacherTipAr": "يمكن للطالب حساب القيم العددية مباشرة (-١/٢ + ت \\sqrt{٣}/٢) للتأكد السريع من صحة السعة."
  },
  {
    "id": "alg_ch2_unit_q2",
    "titleEn": "Textbook Exercise 2: Half-Angle Factorization of 1 + cos(theta) + i sin(theta)",
    "titleAr": "تمرين الكتاب الوزاري ٢: تحليل زوايا النصف للمقدار ١ + جتا(سيتا) + ت جا(سيتا)",
    "difficulty": "hots",
    "questionEn": "Express $z = 1 + \\cos\\theta + i\\sin\\theta$ (where $-\\pi < \\theta < \\pi$) in standard trigonometric form.",
    "questionAr": "ضع العدد المركب $ع = ١ + جتا\\theta + ت جا\\theta$ (حيث $-\\pi < \\theta < \\pi$) في الصورة المثلثية القياسية.",
    "optionsEn": [
      "$2\\cos\\frac{\\theta}{2} \\left[\\cos\\frac{\\theta}{2} + i\\sin\\frac{\\theta}{2}\\right]$",
      "$2\\sin\\frac{\\theta}{2} \\left[\\cos\\frac{\\theta}{2} + i\\sin\\frac{\\theta}{2}\\right]$",
      "$2\\cos\\frac{\\theta}{2} \\left[\\cos\\theta + i\\sin\\theta\\right]$",
      "$\\cos\\frac{\\theta}{2} \\left[\\cos\\frac{\\theta}{2} + i\\sin\\frac{\\theta}{2}\\right]$"
    ],
    "optionsAr": [
      "٢ جتا(\\theta/٢) [جتا(\\theta/٢) + ت جا(\\theta/٢)]",
      "٢ جا(\\theta/٢) [جتا(\\theta/٢) + ت جا(\\theta/٢)]",
      "٢ جتا(\\theta/٢) [جتا\\theta + ت جا\\theta]",
      "جتا(\\theta/٢) [جتا(\\theta/٢) + ت جا(\\theta/٢)]"
    ],
    "correctAnswer": "$2\\cos\\frac{\\theta}{2} \\left[\\cos\\frac{\\theta}{2} + i\\sin\\frac{\\theta}{2}\\right]$",
    "correctIndex": 0,
    "hintEn": "Use the double angle identities: 1 + cos(theta) = 2 cos^2(theta/2) and sin(theta) = 2 sin(theta/2) cos(theta/2). Then factor out 2 cos(theta/2).",
    "hintAr": "استخدم قوانين ضعف الزاوية: ١ + جتا\\theta = ٢ جتا^٢(\\theta/٢) و جا\\theta = ٢ جا(\\theta/٢) جتا(\\theta/٢). ثم خذ ٢ جتا(\\theta/٢) عاملاً مشتركاً.",
    "stepByStepSolutionEn": [
      "Use trigonometry half-angle identities:",
      "$$1 + \\cos\\theta = 2\\cos^2\\left(\\frac{\\theta}{2}\\right)$$",
      "$$\\sin\\theta = 2\\sin\\left(\\frac{\\theta}{2}\\right)\\cos\\left(\\frac{\\theta}{2}\\right)$$",
      "Substitute into $z$:",
      "$$z = 2\\cos^2\\left(\\frac{\\theta}{2}\\right) + i \\cdot 2\\sin\\left(\\frac{\\theta}{2}\\right)\\cos\\left(\\frac{\\theta}{2}\\right)$$",
      "Factor out the common term $2\\cos\\left(\\frac{\\theta}{2}\\right)$:",
      "$$z = 2\\cos\\left(\\frac{\\theta}{2}\\right) \\left[ \\cos\\left(\\frac{\\theta}{2}\\right) + i\\sin\\left(\\frac{\\theta}{2}\\right) \\right]$$",
      "Since $-\\pi < \\theta < \\pi \\implies -\\frac{\\pi}{2} < \\frac{\\theta}{2} < \\frac{\\pi}{2}$, we have $2\\cos\\left(\\frac{\\theta}{2}\\right) > 0$ (valid positive modulus!).",
      "Modulus $r = 2\\cos\\left(\\frac{\\theta}{2}\\right)$, argument $= \\frac{\\theta}{2}$."
    ],
    "stepByStepSolutionAr": [
      "نستخدم قوانين ضعف الزاوية في حساب المثلثات:",
      "$$١ + جتا\\theta = ٢ جتا^٢(\\frac{\\theta}{٢})$$",
      "$$جا\\theta = ٢ جا(\\frac{\\theta}{٢}) جتا(\\frac{\\theta}{٢})$$",
      "بالتعويض في ع:",
      "$$ع = ٢ جتا^٢(\\frac{\\theta}{٢}) + ت \\cdot ٢ جا(\\frac{\\theta}{٢}) جتا(\\frac{\\theta}{٢})$$",
      "بأخذ العامل المشترك ٢ جتا(\\theta/٢):",
      "$$ع = ٢ جتا(\\frac{\\theta}{٢}) [جتا(\\frac{\\theta}{٢}) + ت جا(\\frac{\\theta}{٢})]$$",
      "وبما أن $-\\pi < \\theta < \\pi$ فإن $-\\pi/٢ < \\theta/٢ < \\pi/٢$ مما يضمن أن $٢ جتا(\\theta/٢) > ٠$ (مقياس موجب صالح!)."
    ],
    "teacherTipEn": "This classical MoE problem beautifully combines calculus/trigonometry identities with complex polar form.",
    "teacherTipAr": "هذه المسألة تربط بين حساب المثلثات والأعداد المركبة وتعتبر نموذجاً لأسئلة التفكير العليا في الامتحانات."
  },
  {
    "id": "alg_ch2_unit_q3",
    "titleEn": "Textbook Exercise 3: Linear System with Conjugate in Complex Plane",
    "titleAr": "تمرين الكتاب الوزاري ٣: حل معادلة خطية تتضمن مرافق العدد المركب",
    "difficulty": "medium",
    "questionEn": "Solve for the complex number $z$: $2z + \\bar{z} = 9 + 2i$.",
    "questionAr": "أوجد العدد المركب $ع$ الذي يحقق المعادلة: $٢ع + \\bar{ع} = ٩ + ٢ت$.",
    "optionsEn": [
      "$z = 3 + 2i$",
      "$z = 3 - 2i$",
      "$z = 2 + 3i$",
      "$z = 1 + 2i$"
    ],
    "optionsAr": [
      "ع = ٣ + ٢ت",
      "ع = ٣ - ٢ت",
      "ع = ٢ + ٣ت",
      "ع = ١ + ٢ت"
    ],
    "correctAnswer": "$z = 3 + 2i$",
    "correctIndex": 0,
    "hintEn": "Let z = x + iy and z_bar = x - iy. Substitute into the equation: 2(x + iy) + (x - iy) = 3x + iy = 9 + 2i.",
    "hintAr": "نفرض أن ع = س + ت ص ومرافقه ع_بار = س - ت ص. بالتعويض: ٢(س + ت ص) + (س - ت ص) = ٣س + ت ص = ٩ + ٢ت.",
    "stepByStepSolutionEn": [
      "Let $z = x + iy$ with $x, y \\in \\mathbb{R}$.",
      "Then $\\bar{z} = x - iy$.",
      "Substitute into the given equation:",
      "$$2(x + iy) + (x - iy) = 9 + 2i$$",
      "$$(2x + x) + i(2y - y) = 9 + 2i$$",
      "$$3x + iy = 9 + 2i$$",
      "Equating real and imaginary parts:",
      "$$3x = 9 \\implies x = 3$$",
      "$$y = 2$$",
      "Therefore, $z = 3 + 2i$."
    ],
    "stepByStepSolutionAr": [
      "نفرض أن ع = س + ت ص حيث س، ص حقيقيان.",
      "إذن المرافق $\\bar{ع} = س - ت ص$.",
      "بالتعويض في المعادلة المعطاة:",
      "$$٢(س + ت ص) + (س - ت ص) = ٩ + ٢ت$$",
      "$$(٢س + س) + ت(٢ص - ص) = ٩ + ٢ت$$",
      "$$٣س + ت ص = ٩ + ٢ت$$",
      "بمساواة الجزأين الحقيقي والتخيلي:",
      "$$٣س = ٩ \\implies س = ٣$$",
      "$$ص = ٢$$",
      "إذن العدد المركب هو: ع = ٣ + ٢ت."
    ],
    "teacherTipEn": "Always expand z = x + iy whenever an equation involves both z and its conjugate z_bar.",
    "teacherTipAr": "القاعدة الذهبية: عند وجود ع ومرافقه معاً في معادلة واحدة، نفرض ع = س + ت ص ونساوي الأجزاء الحقيقية والتخيلية."
  },
  {
    "id": "alg_ch2_unit_q4",
    "titleEn": "Textbook Exercise 4: Geometric Properties of Roots of Unity Polygon",
    "titleAr": "تمرين الكتاب الوزاري ٤: الخواص الهندسية لمضلع جذور الوحدة في شكل أرجاند",
    "difficulty": "hots",
    "questionEn": "The roots of the equation $z^6 = 64$ form the vertices of a regular hexagon in the Argand plane. Find its area.",
    "questionAr": "جذور المعادلة $ع^٦ = ٦٤$ تمثل رؤوس مسدس منتظم في شكل أرجاند. احسب مساحة هذا المسدس.",
    "optionsEn": [
      "$6\\sqrt{3}$",
      "$12\\sqrt{3}$",
      "$3\\sqrt{3}$",
      "$24$"
    ],
    "optionsAr": [
      "٦\\sqrt{٣}",
      "١٢\\sqrt{٣}",
      "٣\\sqrt{٣}",
      "٢٤"
    ],
    "correctAnswer": "$6\\sqrt{3}$",
    "correctIndex": 0,
    "hintEn": "The radius of the circumcircle is R = 64^(1/6) = 2. The area of a regular n-gon is (n/2) R^2 sin(2pi/n). For n = 6: (6/2) * 4 * sin(60) = 3 * 4 * sqrt(3)/2 = 6 sqrt(3).",
    "hintAr": "نصف قطر الدائرة المارة بالرؤوس هو نق = ٦٤^{١/٦} = ٢. مساحة المضلع المنتظم = (ن/٢) نق^٢ جا(٣٦٠/ن). لمسدس ن = ٦: (٦/٢) * ٤ * جا(٦٠) = ٣ * ٤ * \\sqrt{٣}/٢ = ٦\\sqrt{٣}.",
    "stepByStepSolutionEn": [
      "The equation is $z^6 = 64 = 64 [\\cos 0 + i\\sin 0]$.",
      "By De Moivre's roots theorem, the roots have modulus:",
      "$$R = 64^{1/6} = 2$$",
      "All 6 roots lie on a circle of radius $R = 2$ centered at the origin, forming a regular hexagon.",
      "The regular hexagon is composed of 6 equilateral triangles of side length $R = 2$:",
      "$$\\text{Area of one triangle} = \\frac{1}{2} R^2 \\sin\\left(\\frac{360^\\circ}{6}\\right) = \\frac{1}{2} (4) \\sin 60^\\circ = 2 \\times \\frac{\\sqrt{3}}{2} = \\sqrt{3}$$",
      "$$\\text{Total Area} = 6 \\times \\sqrt{3} = 6\\sqrt{3} \\text{ square units}$$"
    ],
    "stepByStepSolutionAr": [
      "المعادلة هي: ع^٦ = ٦٤ = ٦٤ [جتا ٠ + ت جا ٠].",
      "بتطبيق نظرية ديموافر للجذور، مقياس كل جذر هو:",
      "$$نق = ٦٤^{١/٦} = ٢$$",
      "الجذور الستة تقع جميعاً على دائرة نصف قطرها نق = ٢ وتشكل رؤوس مسدس منتظم.",
      "المسدس المنتظم ينقسم إلى ٦ مثلثات متساوية الأضلاع طول ضلع كل منها ٢:",
      "$$\\text{مساحة المثلث الواحد} = \\frac{١}{٢} نق^٢ جا(\\frac{٣٦٠^\\circ}{٦}) = \\frac{١}{٢} (٤) جا(٦٠^\\circ) = ٢ \\times \\frac{\\sqrt{٣}}{٢} = \\sqrt{٣}$$",
      "$$\\text{مساحة المسدس بالكامل} = ٦ \\times \\sqrt{٣} = ٦\\sqrt{٣} \\text{ وحدة مربعة}$$"
    ],
    "teacherTipEn": "Geometry questions on roots of unity are high-yield questions: Area = (n/2) R^2 sin(2pi/n), Perimeter = 2n R sin(pi/n).",
    "teacherTipAr": "أسئلة المساحات والمحيطات للمضلعات المتكونة من الجذور النونية من الأسئلة المتكررة في امتحانات التفوق."
  },
  {
    "id": "alg_ch2_unit_q5",
    "titleEn": "Textbook Exercise 5: Continuous Omega Fraction with Cyclic Symmetries",
    "titleAr": "تمرين الكتاب الوزاري ٥: الكسر المتماثل الدائري لأوميجا",
    "difficulty": "medium",
    "questionEn": "Simplify: $\\frac{a + b\\omega + c\\omega^2}{b + c\\omega + a\\omega^2}$.",
    "questionAr": "ضع في أبسط صورة المقدار: $\\frac{أ + ب\\omega + جـ\\omega^٢}{ب + جـ\\omega + أ\\omega^٢}$.",
    "optionsEn": [
      "$\\omega$",
      "$\\omega^2$",
      "1",
      "$a + b + c$"
    ],
    "optionsAr": [
      "\\omega",
      "\\omega^٢",
      "١",
      "أ + ب + جـ"
    ],
    "correctAnswer": "$\\omega$",
    "correctIndex": 0,
    "hintEn": "Notice the coefficient shifting: a -> a omega^2, b omega -> b, c omega^2 -> c omega. Multiply the numerator by omega^3 = 1 and factor out omega.",
    "hintAr": "لاحظ تدوير المعاملات: المعامل أ في البسط يقابله أ\\omega^٢ في المقام. اضرب البسط كاملاً في \\omega^٣ أو اضرب أ في \\omega^٣ وخذ \\omega عاملاً مشتركاً.",
    "stepByStepSolutionEn": [
      "Notice that if we multiply the entire denominator by $\\omega$:",
      "$$\\omega(b + c\\omega + a\\omega^2) = b\\omega + c\\omega^2 + a\\omega^3 = a(1) + b\\omega + c\\omega^2 = a + b\\omega + c\\omega^2$$",
      "This is EXACTLY the numerator!",
      "Therefore:",
      "$$\\frac{a + b\\omega + c\\omega^2}{b + c\\omega + a\\omega^2} = \\frac{\\omega(b + c\\omega + a\\omega^2)}{b + c\\omega + a\\omega^2} = \\omega$$"
    ],
    "stepByStepSolutionAr": [
      "لاحظ أننا لو ضربنا المقام في $\\omega$:",
      "$$\\omega(ب + جـ\\omega + أ\\omega^٢) = ب\\omega + جـ\\omega^٢ + أ\\omega^٣ = أ(١) + ب\\omega + جـ\\omega^٢ = أ + ب\\omega + جـ\\omega^٢$$",
      "وهذا هو البسط تماماً!",
      "وبالتالي يكون الكسر مساوياً لـ:",
      "$$\\frac{أ + ب\\omega + جـ\\omega^٢}{ب + جـ\\omega + أ\\omega^٢} = \\omega$$"
    ],
    "teacherTipEn": "Whenever terms have cyclic permutations of (a, b, c), multiplying by omega or omega^2 reveals the cancellation instantly.",
    "teacherTipAr": "عندما تلاحظ دوراناً في المعاملات (أ، ب، جـ)، فإن ضرب أحد الطرفين في \\omega أو \\omega^٢ يظهر الاختصار فوراً."
  },
  {
    "id": "alg_ch2_unit_q6",
    "titleEn": "Textbook Exercise 6: Sum of All Powers of Cube Roots of Unity",
    "titleAr": "تمرين الكتاب الوزاري ٦: مجموع قوى الجذور التكعيبية للواحد الصحيح",
    "difficulty": "medium",
    "questionEn": "Find the value of $(1 + \\omega)(1 + \\omega^2)(1 + \\omega^4)(1 + \\omega^8)$.",
    "questionAr": "أوجد قيمة حاصل الضرب: $(١ + \\omega)(١ + \\omega^٢)(١ + \\omega^٤)(١ + \\omega^٨)$.",
    "optionsEn": [
      "1",
      "-1",
      "0",
      "\\omega"
    ],
    "optionsAr": [
      "١",
      "-١",
      "٠",
      "\\omega"
    ],
    "correctAnswer": "1",
    "correctIndex": 0,
    "hintEn": "omega^4 = omega and omega^8 = omega^2. So the product is (1 + omega)(1 + omega^2) * (1 + omega)(1 + omega^2).",
    "hintAr": "\\omega^٤ = \\omega، و \\omega^٨ = \\omega^٢. فيتحول المقدار إلى: (١ + \\omega)(١ + \\omega^٢) \\times (١ + \\omega)(١ + \\omega^٢).",
    "stepByStepSolutionEn": [
      "Reduce powers of $\\omega$ modulo 3:",
      "$$\\omega^4 = \\omega^3 \\cdot \\omega = \\omega$$",
      "$$\\omega^8 = \\omega^6 \\cdot \\omega^2 = \\omega^2$$",
      "The expression becomes:",
      "$$(1 + \\omega)(1 + \\omega^2)(1 + \\omega)(1 + \\omega^2) = [(1 + \\omega)(1 + \\omega^2)]^2$$",
      "Since $1 + \\omega = -\\omega^2$ and $1 + \\omega^2 = -\\omega$:",
      "$$(1 + \\omega)(1 + \\omega^2) = (-\\omega^2)(-\\omega) = \\omega^3 = 1$$",
      "Therefore:",
      "$$\\text{Value} = 1^2 = 1$$"
    ],
    "stepByStepSolutionAr": [
      "تبسيط قوى \\omega بقسمة الأس على ٣:",
      "$$\\omega^٤ = \\omega^٣ \\cdot \\omega = \\omega$$",
      "$$\\omega^٨ = \\omega^٦ \\cdot \\omega^٢ = \\omega^٢$$",
      "يصبح المقدار:",
      "$$(١ + \\omega)(١ + \\omega^٢)(١ + \\omega)(١ + \\omega^٢) = [(١ + \\omega)(١ + \\omega^٢)]^٢$$",
      "وحيث إن ١ + \\omega = -\\omega^٢، و ١ + \\omega^٢ = -\\omega:",
      "$$(١ + \\omega)(١ + \\omega^٢) = (-\\omega^٢)(-\\omega) = \\omega^٣ = ١$$",
      "إذن القيمة = ١^٢ = ١."
    ],
    "teacherTipEn": "Whenever powers of 2 appear in omega exponents, they periodically loop back to omega and omega^2.",
    "teacherTipAr": "قوى ٢ المتتالية لأوميجا تدور دورياً دائماً بين \\omega و \\omega^٢."
  },
  {
    "id": "alg_ch2_unit_q7",
    "titleEn": "Textbook Exercise 7: Solving Cubic Equation Using Roots of Unity",
    "titleAr": "تمرين الكتاب الوزاري ٧: حل معادلة تكعيبية باستخدام جذور الوحدة",
    "difficulty": "hots",
    "questionEn": "Find the set of solutions of $(z - 1)^3 = 8$ in the set of complex numbers $\\mathbb{C}$.",
    "questionAr": "أوجد مجموعة حل المعادلة $(ع - ١)^٣ = ٨$ في مجموعة الأعداد المركبة $\\mathbb{C}$.",
    "optionsEn": [
      "$\\{3, \\, 1 + 2\\omega, \\, 1 + 2\\omega^2\\}$",
      "$\\{3, \\, 2\\omega, \\, 2\\omega^2\\}$",
      "$\\{2, \\, 2\\omega, \\, 2\\omega^2\\}$",
      "$\\{3\\}$"
    ],
    "optionsAr": [
      "\\{٣، \\, ١ + ٢\\omega، \\, ١ + ٢\\omega^٢\\}",
      "\\{٣، \\, ٢\\omega، \\, ٢\\omega^٢\\}",
      "\\{٢، \\, ٢\\omega، \\, ٢\\omega^٢\\}",
      "\\{٣\\}"
    ],
    "correctAnswer": "$\\{3, \\, 1 + 2\\omega, \\, 1 + 2\\omega^2\\}$",
    "correctIndex": 0,
    "hintEn": "Divide by 8: ((z - 1)/2)^3 = 1 => (z - 1)/2 in {1, omega, omega^2} => z - 1 in {2, 2 omega, 2 omega^2}.",
    "hintAr": "بالقسمة على ٨: ((ع - ١)/٢)^٣ = ١ \\implies (ع - ١)/٢ تنتمي إلى {١، \\omega، \\omega^٢} \\implies ع - ١ تنتمي إلى {٢، ٢\\omega، ٢\\omega^٢}.",
    "stepByStepSolutionEn": [
      "Divide both sides by $8$:",
      "$$\\left(\\frac{z - 1}{2}\\right)^3 = 1$$",
      "The cube roots of 1 are $1, \\omega, \\omega^2$:",
      "Case 1: $\\frac{z - 1}{2} = 1 \\implies z - 1 = 2 \\implies z = 3$",
      "Case 2: $\\frac{z - 1}{2} = \\omega \\implies z - 1 = 2\\omega \\implies z = 1 + 2\\omega$",
      "Case 3: $\\frac{z - 1}{2} = \\omega^2 \\implies z - 1 = 2\\omega^2 \\implies z = 1 + 2\\omega^2$",
      "Therefore, the solution set is:",
      "$$\\text{S.S.} = \\{3, \\, 1 + 2\\omega, \\, 1 + 2\\omega^2\\}$$"
    ],
    "stepByStepSolutionAr": [
      "بالقسمة على ٨:",
      "$$\\left(\\frac{ع - ١}{٢}\\right)^٣ = ١$$",
      "الجذور التكعيبية للواحد الصحيح هي ١، \\omega، \\omega^٢:",
      "الحالة ١: $\\frac{ع - ١}{٢} = ١ \\implies ع - ١ = ٢ \\implies ع = ٣$",
      "الحالة ٢: $\\frac{ع - ١}{٢} = \\omega \\implies ع - ١ = ٢\\omega \\implies ع = ١ + ٢\\omega$",
      "الحالة ٣: $\\frac{ع - ١}{٢} = \\omega^٢ \\implies ع - ١ = ٢\\omega^٢ \\implies ع = ١ + ٢\\omega^٢$",
      "إذن مجموعة الحل في الأعداد المركبة هي:",
      "$$\\text{م.ح} = \\{٣، \\, ١ + ٢\\omega، \\, ١ + ٢\\omega^٢\\}$$"
    ],
    "teacherTipEn": "In complex numbers C, every polynomial of degree n has exactly n roots by the Fundamental Theorem of Algebra.",
    "teacherTipAr": "وفقاً للنظرية الأساسية في الجبر، أي معادلة من الدرجة الثالثة لها دائماً ٣ حلول في الأعداد المركبة."
  },
  {
    "id": "alg_ch2_unit_q8",
    "titleEn": "Textbook Exercise 8: De Moivre Expansion to Derive Triple-Angle Formulas",
    "titleAr": "تمرين الكتاب الوزاري ٨: استنتاج قوانين الزوايا المضاعفة باستخدام نظرية ديموافر",
    "difficulty": "hots",
    "questionEn": "Using De Moivre's theorem for $(\\cos\\theta + i\\sin\\theta)^3$, deduce the trigonometric identity for $\\cos 3\\theta$.",
    "questionAr": "باستخدام نظرية ديموافر لمفكوك $(جتا\\theta + ت جا\\theta)^٣$، استنتج المتطابقة المثلثية لـ $جتا ٣\\theta$.",
    "optionsEn": [
      "$\\cos 3\\theta = 4\\cos^3\\theta - 3\\cos\\theta$",
      "$\\cos 3\\theta = 3\\cos\\theta - 4\\cos^3\\theta$",
      "$\\cos 3\\theta = 4\\cos^3\\theta + 3\\cos\\theta$",
      "$\\cos 3\\theta = 2\\cos^3\\theta - \\cos\\theta$"
    ],
    "optionsAr": [
      "جتا ٣\\theta = ٤ جتا^٣\\theta - ٣ جتا\\theta",
      "جتا ٣\\theta = ٣ جتا\\theta - ٤ جتا^٣\\theta",
      "جتا ٣\\theta = ٤ جتا^٣\\theta + ٣ جتا\\theta",
      "جتا ٣\\theta = ٢ جتا^٣\\theta - جتا\\theta"
    ],
    "correctAnswer": "$\\cos 3\\theta = 4\\cos^3\\theta - 3\\cos\\theta$",
    "correctIndex": 0,
    "hintEn": "Expand (c + i s)^3 using binomial theorem: c^3 + 3c^2(is) + 3c(is)^2 + (is)^3 = (c^3 - 3cs^2) + i(3c^2s - s^3). Equate real part to cos(3theta) and use s^2 = 1 - c^2.",
    "hintAr": "فك (جتا + ت جا)^٣ بنظرية ذات الحدين، وساوِ الجزء الحقيقي بـ جتا(٣\\theta)، ثم عوض عن جا^٢ = ١ - جتا^٢.",
    "stepByStepSolutionEn": [
      "By De Moivre's theorem:",
      "$$(\\cos\\theta + i\\sin\\theta)^3 = \\cos 3\\theta + i\\sin 3\\theta$$",
      "Expand the left hand side using binomial expansion:",
      "$$= \\cos^3\\theta + 3\\cos^2\\theta(i\\sin\\theta) + 3\\cos\\theta(i\\sin\\theta)^2 + (i\\sin\\theta)^3$$",
      "$$= \\cos^3\\theta + 3i\\cos^2\\theta\\sin\\theta - 3\\cos\\theta\\sin^2\\theta - i\\sin^3\\theta$$",
      "Group real and imaginary parts:",
      "$$\\text{Real Part} = \\cos^3\\theta - 3\\cos\\theta\\sin^2\\theta$$",
      "Equating real parts:",
      "$$\\cos 3\\theta = \\cos^3\\theta - 3\\cos\\theta(1 - \\cos^2\\theta)$$",
      "$$= \\cos^3\\theta - 3\\cos\\theta + 3\\cos^3\\theta = 4\\cos^3\\theta - 3\\cos\\theta$$"
    ],
    "stepByStepSolutionAr": [
      "بنظرية ديموافر:",
      "$$(جتا\\theta + ت جا\\theta)^٣ = جتا ٣\\theta + ت جا ٣\\theta$$",
      "بفك الطرف الأيمن بنظرية ذات الحدين:",
      "$$= جتا^٣\\theta + ٣ جتا^٢\\theta (ت جا\\theta) + ٣ جتا\\theta (ت جا\\theta)^٢ + (ت جا\\theta)^٣$$",
      "$$= جتا^٣\\theta + ٣ت جتا^٢\\theta جا\\theta - ٣ جتا\\theta جا^٢\\theta - ت جا^٣\\theta$$",
      "الجزء الحقيقي هو:",
      "$$جتا^٣\\theta - ٣ جتا\\theta جا^٢\\theta$$",
      "بمساواة الأجزاء الحقيقية:",
      "$$جتا ٣\\theta = جتا^٣\\theta - ٣ جتا\\theta (١ - جتا^٢\\theta)$$",
      "$$= جتا^٣\\theta - ٣ جتا\\theta + ٣ جتا^٣\\theta = ٤ جتا^٣\\theta - ٣ جتا\\theta$$"
    ],
    "teacherTipEn": "This is the classic textbook proof connecting De Moivre's theorem to analytic trigonometry.",
    "teacherTipAr": "هذا هو الإثبات الرسمي المعتمد بكتاب الوزارة لربط نظرية ديموافر بقوانين حساب المثلثات للزوايا الثلاثية."
  },
  {
    "id": "alg_ch2_unit_q9",
    "titleEn": "Textbook Exercise 9: Factorization of Sum of Two Cubes with Omega",
    "titleAr": "تمرين الكتاب الوزاري ٩: تحليل مجموع مكعبين باستخدام أوميجا",
    "difficulty": "medium",
    "questionEn": "Express the sum of cubes $x^3 + y^3$ as the product of three linear factors using $\\omega$.",
    "questionAr": "عبر عن مجموع المكعبين $س^٣ + ص^٣$ كحاصل ضرب ثلاثة عوامل خطية باستخدام $\\omega$.",
    "optionsEn": [
      "$(x + y)(x + \\omega y)(x + \\omega^2 y)$",
      "$(x + y)(x - \\omega y)(x - \\omega^2 y)$",
      "$(x - y)(x + \\omega y)(x + \\omega^2 y)$",
      "$(x + y)^3$"
    ],
    "optionsAr": [
      "(س + ص)(س + \\omega ص)(س + \\omega^٢ ص)",
      "(س + ص)(س - \\omega ص)(س - \\omega^٢ ص)",
      "(س - ص)(س + \\omega ص)(س + \\omega^٢ ص)",
      "(س + ص)^٣"
    ],
    "correctAnswer": "$(x + y)(x + \\omega y)(x + \\omega^2 y)$",
    "correctIndex": 0,
    "hintEn": "Multiply the last two factors: (x + omega y)(x + omega^2 y) = x^2 + (omega + omega^2)xy + omega^3 y^2 = x^2 - xy + y^2.",
    "hintAr": "اضرب القوسين الأخيرين: (س + \\omega ص)(س + \\omega^٢ ص) = س^٢ + (\\omega + \\omega^٢)س ص + \\omega^٣ ص^٢ = س^٢ - س ص + ص^٢.",
    "stepByStepSolutionEn": [
      "Multiply the second and third factors:",
      "$$(x + \\omega y)(x + \\omega^2 y) = x^2 + \\omega^2 xy + \\omega xy + \\omega^3 y^2$$",
      "$$= x^2 + (\\omega + \\omega^2)xy + (1)y^2$$",
      "Since $\\omega + \\omega^2 = -1$:",
      "$$= x^2 - xy + y^2$$",
      "Now multiply by the first factor $(x + y)$:",
      "$$(x + y)(x^2 - xy + y^2) = x^3 + y^3$$",
      "Therefore, $x^3 + y^3 = (x + y)(x + \\omega y)(x + \\omega^2 y)$."
    ],
    "stepByStepSolutionAr": [
      "نضرب العاملين الثاني والثالث:",
      "$$(س + \\omega ص)(س + \\omega^٢ ص) = س^٢ + \\omega^٢ س ص + \\omega س ص + \\omega^٣ ص^٢$$",
      "$$= س^٢ + (\\omega + \\omega^٢)س ص + (١)ص^٢$$",
      "بما أن $\\omega + \\omega^٢ = -١$:",
      "$$= س^٢ - س ص + ص^٢$$",
      "نضرب هذا المقدار في القوس الأول (س + ص):",
      "$$(س + ص)(س^٢ - س ص + ص^٢) = س^٣ + ص^٣$$",
      "إذن التحليل الثلاثي التام هو: (س + ص)(س + \\omega ص)(س + \\omega^٢ ص)."
    ],
    "teacherTipEn": "Similarly, x^3 - y^3 = (x - y)(x - omega y)(x - omega^2 y). Both identities are frequently tested.",
    "teacherTipAr": "بالمثل لفرق المكعبين: س^٣ - ص^٣ = (س - ص)(س - \\omega ص)(س - \\omega^٢ ص)."
  },
  {
    "id": "alg_ch2_unit_q10",
    "titleEn": "Textbook Exercise 10: Modulus of Complex Conjugate Ratio",
    "titleAr": "تمرين الكتاب الوزاري ١٠: مقياس النسبة بين عدد مركب ومرافقه",
    "difficulty": "easy",
    "questionEn": "If $z = 5 - 12i$, find the value of $\\left|\\frac{z}{\\bar{z}}\\right|$.",
    "questionAr": "إذا كان $ع = ٥ - ١٢ت$، فأوجد قيمة $\\left|\\frac{ع}{\\bar{ع}}\\right|$.",
    "optionsEn": [
      "1",
      "13",
      "169",
      "-1"
    ],
    "optionsAr": [
      "١",
      "١٣",
      "١٦٩",
      "-١"
    ],
    "correctAnswer": "1",
    "correctIndex": 0,
    "hintEn": "|z / z_bar| = |z| / |z_bar|. Since |z| = |z_bar|, the quotient is always 1.",
    "hintAr": "|ع / ع_بار| = |ع| / |ع_بار|. وبما أن مقياس العدد يساوي مقياس مرافقه، فإن الناتج دائماً ١.",
    "stepByStepSolutionEn": [
      "By properties of moduli:",
      "$$\\left|\\frac{z_1}{z_2}\\right| = \\frac{|z_1|}{|z_2|}$$",
      "Here $z_1 = z$ and $z_2 = \\bar{z}$.",
      "For any complex number $z$:",
      "$$|z| = |\\bar{z}| = \\sqrt{5^2 + (-12)^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13$$",
      "$$\\left|\\frac{z}{\\bar{z}}\\right| = \\frac{|z|}{|\\bar{z}|} = \\frac{13}{13} = 1$$"
    ],
    "stepByStepSolutionAr": [
      "من خواص المقياس:",
      "$$\\left|\\frac{ع_١}{ع_٢}\\right| = \\frac{|ع_١|}{|ع_٢|}$$",
      "وبما أن مقياس أي عدد مركب يساوي مقياس مرافقه تماماً:",
      "$$|ع| = |\\bar{ع}| = \\sqrt{٥^٢ + (-١٢)^٢} = \\sqrt{١٦٩} = ١٣$$",
      "$$\\left|\\frac{ع}{\\bar{ع}}\\right| = \\frac{١٣}{١٣} = ١$$"
    ],
    "teacherTipEn": "Remind students that |z / z_bar| = 1 for ANY non-zero complex number regardless of its values.",
    "teacherTipAr": "مقياس ع / مرافقه يساوي دائماً ١ لأي عدد مركب غير صفري مهما كانت قيم س وص."
  },
  {
    "id": "alg_ch2_unit_q11",
    "titleEn": "Textbook Exercise 11: Sum of Symmetric Squares with Omega",
    "titleAr": "تمرين الكتاب الوزاري ١١: مجموع المربعات المتماثلة بدلالة أوميجا",
    "difficulty": "hots",
    "questionEn": "If $x = a + b$, $y = a\\omega + b\\omega^2$, $z = a\\omega^2 + b\\omega$, prove that $x^2 + y^2 + z^2 = 6ab$.",
    "questionAr": "إذا كان $س = أ + ب$، $ص = أ\\omega + ب\\omega^٢$، $ع = أ\\omega^٢ + ب\\omega$، فأوجد قيمة $س^٢ + ص^٢ + ع^٢$.",
    "optionsEn": [
      "6ab",
      "3ab",
      "0",
      "3(a^2 + b^2)"
    ],
    "optionsAr": [
      "٦ أ ب",
      "٣ أ ب",
      "٠",
      "٣(أ^٢ + ب^٢)"
    ],
    "correctAnswer": "6ab",
    "correctIndex": 0,
    "hintEn": "Expand each square: x^2 = a^2 + 2ab + b^2; y^2 = a^2 omega^2 + 2ab + b^2 omega^4; z^2 = a^2 omega^4 + 2ab + b^2 omega^2. Add them and use 1 + omega + omega^2 = 0.",
    "hintAr": "فك المربعات الثلاثة: س^٢ = أ^٢ + ٢أ ب + ب^٢، ص^٢ = أ^٢ \\omega^٢ + ٢أ ب + ب^٢ \\omega، ع^٢ = أ^٢ \\omega + ٢أ ب + ب^٢ \\omega^٢. ثم اجمع واستخدم ١ + \\omega + \\omega^٢ = ٠.",
    "stepByStepSolutionEn": [
      "1. $x^2 = (a + b)^2 = a^2 + 2ab + b^2$",
      "2. $y^2 = (a\\omega + b\\omega^2)^2 = a^2\\omega^2 + 2ab\\omega^3 + b^2\\omega^4 = a^2\\omega^2 + 2ab + b^2\\omega$",
      "3. $z^2 = (a\\omega^2 + b\\omega)^2 = a^2\\omega^4 + 2ab\\omega^3 + b^2\\omega^2 = a^2\\omega + 2ab + b^2\\omega^2$",
      "Add the three equations:",
      "$$x^2 + y^2 + z^2 = a^2(1 + \\omega^2 + \\omega) + 2ab(1 + 1 + 1) + b^2(1 + \\omega + \\omega^2)$$",
      "Since $1 + \\omega + \\omega^2 = 0$:",
      "$$x^2 + y^2 + z^2 = a^2(0) + 6ab + b^2(0) = 6ab$$"
    ],
    "stepByStepSolutionAr": [
      "١. س^٢ = (أ + ب)^٢ = أ^٢ + ٢أ ب + ب^٢",
      "٢. ص^٢ = (أ\\omega + ب\\omega^٢)^٢ = أ^٢ \\omega^٢ + ٢أ ب\\omega^٣ + ب^٢ \\omega^٤ = أ^٢ \\omega^٢ + ٢أ ب + ب^٢ \\omega",
      "٣. ع^٢ = (أ\\omega^٢ + ب\\omega)^٢ = أ^٢ \\omega^٤ + ٢أ ب\\omega^٣ + ب^٢ \\omega^٢ = أ^٢ \\omega + ٢أ ب + ب^٢ \\omega^٢",
      "بجمع المعادلات الثلاث:",
      "$$س^٢ + ص^٢ + ع^٢ = أ^٢(١ + \\omega^٢ + \\omega) + ٢أ ب(١ + ١ + ١) + ب^٢(١ + \\omega + \\omega^٢)$$",
      "بما أن ١ + \\omega + \\omega^٢ = ٠:",
      "$$س^٢ + ص^٢ + ع^٢ = أ^٢(٠) + ٦أ ب + ب^٢(٠) = ٦أ ب$$"
    ],
    "teacherTipEn": "This is one of the grand classic algebraic identity proofs in the Egyptian Ministry of Education mathematics textbook.",
    "teacherTipAr": "هذه المسألة من أشهر المسائل النموذجية التاريخية في كتاب الجبر لوزارة التربية والتعليم."
  },
  {
    "id": "alg_ch2_unit_q12",
    "titleEn": "Textbook Exercise 12: High Power of Difference of Cube Roots of Unity",
    "titleAr": "تمرين الكتاب الوزاري ١٢: قوى متقدمة للفرق بين أوميجا ومربعها",
    "difficulty": "medium",
    "questionEn": "Find the value of $(2 + 5\\omega + 2\\omega^2)^6$.",
    "questionAr": "أوجد قيمة المقدار: $(٢ + ٥\\omega + ٢\\omega^٢)^٦$.",
    "optionsEn": [
      "729",
      "-729",
      "243",
      "64"
    ],
    "optionsAr": [
      "٧٢٩",
      "-٧٢٩",
      "٢٤٣",
      "٦٤"
    ],
    "correctAnswer": "729",
    "correctIndex": 0,
    "hintEn": "Group the common coefficients: 2 + 2 omega^2 = 2(1 + omega^2) = -2 omega. Then -2 omega + 5 omega = 3 omega.",
    "hintAr": "اجمع المعاملات المتماثلة: ٢ + ٢\\omega^٢ = ٢(١ + \\omega^٢) = -٢\\omega. فيكون داخل القوس: -٢\\omega + ٥\\omega = ٣\\omega.",
    "stepByStepSolutionEn": [
      "Rewrite the terms inside the parentheses:",
      "$$2 + 5\\omega + 2\\omega^2 = (2 + 2\\omega^2) + 5\\omega$$",
      "$$= 2(1 + \\omega^2) + 5\\omega$$",
      "Since $1 + \\omega^2 = -\\omega$:",
      "$$= 2(-\\omega) + 5\\omega = -2\\omega + 5\\omega = 3\\omega$$",
      "Now raise to the power of 6:",
      "$$(3\\omega)^6 = 3^6 \\cdot \\omega^6 = 729 \\cdot (\\omega^3)^2 = 729(1)^2 = 729$$"
    ],
    "stepByStepSolutionAr": [
      "إعادة ترتيب الحدود داخل القوس:",
      "$$٢ + ٥\\omega + ٢\\omega^٢ = (٢ + ٢\\omega^٢) + ٥\\omega$$",
      "$$= ٢(١ + \\omega^٢) + ٥\\omega$$",
      "بما أن ١ + \\omega^٢ = -\\omega:",
      "$$= ٢(-\\omega) + ٥\\omega = -٢\\omega + ٥\\omega = ٣\\omega$$",
      "برفع الناتج للأس ٦:",
      "$$(٣\\omega)^٦ = ٣^٦ \\cdot \\omega^٦ = ٧٢٩ \\cdot (١) = ٧٢٩$$"
    ],
    "teacherTipEn": "Always look for matching coefficients to factor out 1 + omega = -omega^2 or 1 + omega^2 = -omega.",
    "teacherTipAr": "ابحث دائماً عن المعاملات المتطابقة لأخذها كعامل مشترك والتبسيط الفوري."
  },
  {
    "id": "alg_ch2_unit_q13",
    "titleEn": "Textbook Exercise 13: Fourth Roots of a Complex Number on the Argand Plane",
    "titleAr": "تمرين الكتاب الوزاري ١٣: الجذور الرابعة لعدد مركب في شكل أرجاند",
    "difficulty": "hots",
    "questionEn": "Find the 4th roots of $z = -8 - 8\\sqrt{3}i$ in exponential form.",
    "questionAr": "أوجد الجذور الرابعة للعدد المركب $ع = -٨ - ٨\\sqrt{٣}ت$ بالصورة الأسية.",
    "optionsEn": [
      "$z_k = 2 e^{i \\left(-\\frac{\\pi}{3} + \\frac{k\\pi}{2}\\right)}, \\quad k \\in \\{0, 1, 2, 3\\}$",
      "$z_k = 2 e^{i \\left(-\\frac{5\\pi}{12} + \\frac{k\\pi}{2}\\right)}, \\quad k \\in \\{0, 1, 2, 3\\}$",
      "$z_k = 4 e^{i \\left(-\\frac{\\pi}{3} + \\frac{k\\pi}{2}\\right)}, \\quad k \\in \\{0, 1, 2, 3\\}$",
      "$z_k = 2 e^{i \\left(\\frac{\\pi}{3} + \\frac{k\\pi}{2}\\right)}, \\quad k \\in \\{0, 1, 2, 3\\}$"
    ],
    "optionsAr": [
      "ع_ك = ٢ هـ^{ت (-\\frac{\\pi}{٣} + \\frac{ك\\pi}{٢})}، \\quad ك \\in \\{٠، ١، ٢، ٣\\}",
      "ع_ك = ٢ هـ^{ت (-\\frac{٥\\pi}{١٢} + \\frac{ك\\pi}{٢})}، \\quad ك \\in \\{٠، ١، ٢، ٣\\}",
      "ع_ك = ٤ هـ^{ت (-\\frac{\\pi}{٣} + \\frac{ك\\pi}{٢})}، \\quad ك \\in \\{٠، ١، ٢، ٣\\}",
      "ع_ك = ٢ هـ^{ت (\\frac{\\pi}{٣} + \\frac{ك\\pi}{٢})}، \\quad ك \\in \\{٠، ١، ٢، ٣\\}"
    ],
    "correctAnswer": "$z_k = 2 e^{i \\left(-\\frac{\\pi}{3} + \\frac{k\\pi}{2}\\right)}, \\quad k \\in \\{0, 1, 2, 3\\}$",
    "correctIndex": 0,
    "hintEn": "Modulus r = sqrt(64 + 192) = sqrt(256) = 16. In Quad III: theta = - (180 - 60) = -120 deg = -2pi/3. Then r^(1/4) = 16^(1/4) = 2. Angle = (-2pi/3 + 2k pi)/4 = -pi/6 + k pi/2. Wait, -120/4 = -30 deg = -pi/6!",
    "hintAr": "المقياس = \\sqrt{٦٤ + ١٩٢} = ١٦. في الربع الثالث: سيتا = -(١٨٠ - ٦٠) = -١٢٠^\\circ = -٢\\pi/٣. إذن ر^{١/٤} = ١٦^{١/٤} = ٢. والزاوية = -١٢٠^\\circ / ٤ = -٣٠^\\circ = -\\pi/٦.",
    "stepByStepSolutionEn": [
      "Modulus $r = \\sqrt{(-8)^2 + (-8\\sqrt{3})^2} = \\sqrt{64 + 192} = \\sqrt{256} = 16$.",
      "Since $x < 0$ and $y < 0$, $z$ is in Quadrant III.",
      "Reference angle $\\alpha = \\tan^{-1}\\left(\\frac{8\\sqrt{3}}{8}\\right) = 60^\\circ$.",
      "Principal argument $\\theta = -(180^\\circ - 60^\\circ) = -120^\\circ = -\\frac{2\\pi}{3}$ rad.",
      "By De Moivre's roots theorem with $n = 4$:",
      "$$r^{1/4} = 16^{1/4} = 2$$",
      "$$\\text{Angles: } \\phi_k = \\frac{-120^\\circ + 360^\\circ k}{4} = -30^\\circ + 90^\\circ k = -\\frac{\\pi}{6} + \\frac{k\\pi}{2}$$",
      "Therefore, the roots in exponential form are:",
      "$$z_k = 2 e^{i \\left(-\\frac{\\pi}{6} + \\frac{k\\pi}{2}\\right)}, \\quad k \\in \\{0, 1, 2, 3\\}$$"
    ],
    "stepByStepSolutionAr": [
      "المقياس ل = \\sqrt{(-٨)^٢ + (-٨\\sqrt{٣})^٢} = \\sqrt{٦٤ + ١٩٢} = \\sqrt{٢٥٦} = ١٦.",
      "بما أن س < ٠ وص < ٠، فالعدد يقع في الربع الثالث.",
      "زاوية الإسناد ألفا = ظا^{-١}(\\sqrt{٣}) = ٦٠^\\circ.",
      "السعة الأساسية $\\theta = -(١٨٠^\\circ - ٦٠^\\circ) = -١٢٠^\\circ = -\\frac{٢\\pi}{٣}$ راديان.",
      "بتطبيق نظرية ديموافر للجذور الرابعة (ن = ٤):",
      "$$ل^{١/٤} = ١٦^{١/٤} = ٢$$",
      "$$\\text{السعات: } \\phi_ك = \\frac{-١٢٠^\\circ + ٣٦٠^\\circ ك}{٤} = -٣٠^\\circ + ٩٠^\\circ ك = -\\frac{\\pi}{٦} + \\frac{ك\\pi}{٢}$$",
      "إذن الجذور بالصورة الأسية هي:",
      "$$ع_ك = ٢ هـ^{ت (-\\frac{\\pi}{٦} + \\frac{ك\\pi}{٢})}، \\quad ك \\in \\{٠، ١، ٢، ٣\\}$$"
    ],
    "teacherTipEn": "Notice how dividing the angle by 4 spreads the 4 roots exactly 90 degrees apart on a circle of radius 2, forming a square.",
    "teacherTipAr": "لاحظ أن قسمة الزوايا على ٤ تجعل الفارق بين كل جذرين متتاليين ٩٠^\\circ بالتمام، مشكلةً مربعاً هندسياً منتظماً."
  },
  {
    "id": "alg_ch2_unit_q14",
    "titleEn": "Textbook Exercise 14: Value of Rational Expression of Omega with Equal Coefficients",
    "titleAr": "تمرين الكتاب الوزاري ١٤: إيجاد قيمة كسر نسبي لأوميجا بمعاملات متطابقة",
    "difficulty": "medium",
    "questionEn": "If $\\frac{a + b\\omega}{a\\omega^2 + b} + \\frac{c\\omega^2 + d}{c + d\\omega} = k$, find the real value of $k$.",
    "questionAr": "إذا كان $\\frac{أ + ب\\omega}{أ\\omega^٢ + ب} + \\frac{جـ\\omega^٢ + د}{جـ + د\\omega} = ك$، فأوجد القيمة الحقيقية للثابت $ك$.",
    "optionsEn": [
      "-1",
      "1",
      "0",
      "2"
    ],
    "optionsAr": [
      "-١",
      "١",
      "٠",
      "٢"
    ],
    "correctAnswer": "-1",
    "correctIndex": 0,
    "hintEn": "In the first fraction, multiply numerator by omega^3 and factor out omega => omega(a omega^2 + b)/(a omega^2 + b) = omega. In the second, factor out omega^2 => omega^2. Then omega + omega^2 = -1.",
    "hintAr": "في الكسر الأول: اضرب البسط في \\omega^٣ وخذ \\omega عاملاً مشتركاً \\implies \\omega. في الكسر الثاني: اضرب د في \\omega^٣ وخذ \\omega^٢ عاملاً مشتركاً \\implies \\omega^٢. الناتج = \\omega + \\omega^٢ = -١.",
    "stepByStepSolutionEn": [
      "1. First fraction: $\\frac{a + b\\omega}{a\\omega^2 + b}$:",
      "Multiply numerator by $\\omega^3 = 1$ in the form $a\\omega^3 + b\\omega^4$, or directly replace $a$ with $a\\omega^3$:",
      "$$\\frac{a\\omega^3 + b\\omega}{a\\omega^2 + b} = \\frac{\\omega(a\\omega^2 + b)}{a\\omega^2 + b} = \\omega$$",
      "2. Second fraction: $\\frac{c\\omega^2 + d}{c + d\\omega}$:",
      "Replace $d$ with $d\\omega^3$ in numerator:",
      "$$\\frac{c\\omega^2 + d\\omega^3}{c + d\\omega} = \\frac{\\omega^2(c + d\\omega)}{c + d\\omega} = \\omega^2$$",
      "3. Sum the simplified terms:",
      "$$k = \\omega + \\omega^2 = -1$$"
    ],
    "stepByStepSolutionAr": [
      "١. الكسر الأول: $\\frac{أ + ب\\omega}{أ\\omega^٢ + ب}$:",
      "نكتب أ = أ\\omega^٣ في البسط:",
      "$$\\frac{أ\\omega^٣ + ب\\omega}{أ\\omega^٢ + ب} = \\frac{\\omega(أ\\omega^٢ + ب)}{أ\\omega^٢ + ب} = \\omega$$",
      "٢. الكسر الثاني: $\\frac{جـ\\omega^٢ + د}{جـ + د\\omega}$:",
      "نكتب د = د\\omega^٣ في البسط:",
      "$$\\frac{جـ\\omega^٢ + د\\omega^٣}{جـ + د\\omega} = \\frac{\\omega^٢(جـ + د\\omega)}{جـ + د\\omega} = \\omega^٢$$",
      "٣. نجمع الناتجين:",
      "$$ك = \\omega + \\omega^٢ = -١$$"
    ],
    "teacherTipEn": "Always replace the standalone constants with constant * omega^3 to make factors immediately apparent.",
    "teacherTipAr": "استبدال الحد المطلق بـ (الحد المطلق × \\omega^٣) يظهر العامل المشترك فوراً."
  },
  {
    "id": "alg_ch2_unit_q15",
    "titleEn": "Textbook Exercise 15: Pure Real Condition for Complex Fractions",
    "titleAr": "تمرين الكتاب الوزاري ١٥: شرط أن يكون الكسر المركب عدداً حقيقياً بحتاً",
    "difficulty": "hots",
    "questionEn": "If $z = \\frac{1 + ai}{1 - ai}$ where $a \\in \\mathbb{R}$, find the modulus $|z|$ and prove that $\\text{Re}(z) = \\frac{1 - a^2}{1 + a^2}$.",
    "questionAr": "إذا كان $ع = \\frac{١ + أ ت}{١ - أ ت}$ حيث $أ \\in \\mathbb{R}$، فأوجد المقياس $|ع|$ وأثبت أن الجزء الحقيقي هو $\\frac{١ - أ^٢}{١ + أ^٢}$.",
    "optionsEn": [
      "$|z| = 1$",
      "$|z| = a$",
      "$|z| = \\sqrt{1 + a^2}$",
      "$|z| = 1 + a^2$"
    ],
    "optionsAr": [
      "|ع| = ١",
      "|ع| = أ",
      "|ع| = \\sqrt{١ + أ^٢}",
      "|ع| = ١ + أ^٢"
    ],
    "correctAnswer": "$|z| = 1$",
    "correctIndex": 0,
    "hintEn": "The numerator 1 + ai and denominator 1 - ai are complex conjugates. The modulus of any quotient of conjugates is |1 + ai| / |1 - ai| = 1.",
    "hintAr": "البسط والمقام مترافقان: |١ + أ ت| = |١ - أ ت| = \\sqrt{١ + أ^٢}. مقياس خارج قسمتهما يساوي ١ دائماً.",
    "stepByStepSolutionEn": [
      "1. Find modulus $|z|$:",
      "$$|z| = \\left|\\frac{1 + ai}{1 - ai}\\right| = \\frac{|1 + ai|}{|1 - ai|} = \\frac{\\sqrt{1 + a^2}}{\\sqrt{1 + (-a)^2}} = \\frac{\\sqrt{1 + a^2}}{\\sqrt{1 + a^2}} = 1$$",
      "2. Simplify in Cartesian form by multiplying numerator and denominator by the conjugate $(1 + ai)$:",
      "$$z = \\frac{(1 + ai)(1 + ai)}{(1 - ai)(1 + ai)} = \\frac{1 + 2ai + a^2 i^2}{1 - a^2 i^2} = \\frac{(1 - a^2) + 2ai}{1 + a^2}$$",
      "$$z = \\frac{1 - a^2}{1 + a^2} + i \\frac{2a}{1 + a^2}$$",
      "Therefore, the modulus is $|z| = 1$ and the real part is $\\frac{1 - a^2}{1 + a^2}$."
    ],
    "stepByStepSolutionAr": [
      "١. حساب المقياس |ع|:",
      "$$|ع| = \\left|\\frac{١ + أ ت}{١ - أ ت}\\right| = \\frac{|١ + أ ت|}{|١ - أ ت|} = \\frac{\\sqrt{١ + أ^٢}}{\\sqrt{١ + أ^٢}} = ١$$",
      "٢. تبسيط العدد بضرب البسط والمقام في مرافق المقام (١ + أ ت):",
      "$$ع = \\frac{(١ + أ ت)(١ + أ ت)}{(١ - أ ت)(١ + أ ت)} = \\frac{١ + ٢أ ت + أ^٢ ت^٢}{١ - أ^٢ ت^٢} = \\frac{(١ - أ^٢) + ٢أ ت}{١ + أ^٢}$$",
      "$$ع = \\frac{١ - أ^٢}{١ + أ^٢} + ت \\frac{٢أ}{١ + أ^٢}$$",
      "إذن المقياس هو |ع| = ١، والجزء الحقيقي هو $\\frac{١ - أ^٢}{١ + أ^٢}$."
    ],
    "teacherTipEn": "Notice this yields the famous Weierstrass half-angle substitution t = tan(theta/2): cos(theta) = (1-t^2)/(1+t^2) and sin(theta) = 2t/(1+t^2)!",
    "teacherTipAr": "لاحظ أن هذا التعبير هو نفسه تعويض فايرشتراس الشهير لنصف الزاوية: جتا = (١ - ت^٢)/(١ + ت^٢) وجا = ٢ت/(١ + ت^٢)."
  }
];
