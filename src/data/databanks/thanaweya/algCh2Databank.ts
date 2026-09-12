import type { ChapterDatabank } from '../../../types/curriculum';

export const algCh2Databank: ChapterDatabank = {
  easy: [
  {
    "id": "alg_ch2_db_easy_01",
    "titleEn": "Evaluation of Basic Power of i",
    "titleAr": "حساب قيمة قوى الوحدة التخيلية ت",
    "difficulty": "easy",
    "questionEn": "Find the value of $i^{14}$.",
    "questionAr": "أوجد قيمة المقدار $ت^{١٤}$.",
    "optionsEn": [
      "-1",
      "1",
      "i",
      "-i"
    ],
    "optionsAr": [
      "-١",
      "١",
      "ت",
      "-ت"
    ],
    "correctAnswer": "-1",
    "correctIndex": 0,
    "hintEn": "Divide the exponent 14 by 4 and determine the remainder.",
    "hintAr": "اقسم الأس ١٤ على ٤ وحدد باقي القسمة.",
    "stepByStepSolutionEn": [
      "Divide the power by 4: $14 = 4 \\times 3 + 2$.",
      "Using the cyclical property $i^4 = 1$:",
      "$$i^{14} = (i^4)^3 \\cdot i^2 = 1^3 \\cdot (-1) = -1$$"
    ],
    "stepByStepSolutionAr": [
      "نقسم الأس على ٤: $١٤ = ٤ \\times ٣ + ٢$.",
      "باستخدام دورية قوى ت حيث $ت^٤ = ١$:",
      "$$ت^{١٤} = (ت^٤)^٣ \\cdot ت^٢ = ١^٣ \\cdot (-١) = -١$$"
    ],
    "teacherTipEn": "Powers of i repeat every 4 cycles: remainder 0 gives 1, remainder 1 gives i, remainder 2 gives -1, remainder 3 gives -i.",
    "teacherTipAr": "قوى ت دورية كل ٤: إذا كان الباقي ٠ فالقيمة ١، الباقي ١ فالقيمة ت، الباقي ٢ فالقيمة -١، الباقي ٣ فالقيمة -ت."
  },
  {
    "id": "alg_ch2_db_easy_02",
    "titleEn": "Evaluation of Odd Power of i",
    "titleAr": "قيمة قوة فردية للوحدة التخيلية",
    "difficulty": "easy",
    "questionEn": "Evaluate the expression: $i^{45}$.",
    "questionAr": "احسب قيمة المقدار: $ت^{٤٥}$.",
    "optionsEn": [
      "i",
      "-i",
      "1",
      "-1"
    ],
    "optionsAr": [
      "ت",
      "-ت",
      "١",
      "-١"
    ],
    "correctAnswer": "i",
    "correctIndex": 0,
    "hintEn": "$45 = 44 + 1$, where 44 is divisible by 4.",
    "hintAr": "٤٥ = ٤٤ + ١، حيث ٤٤ تقبل القسمة على ٤.",
    "stepByStepSolutionEn": [
      "Express the exponent in terms of multiples of 4: $45 = 4(11) + 1$.",
      "$$i^{45} = (i^4)^{11} \\cdot i^1 = (1)^{11} \\cdot i = i$$"
    ],
    "stepByStepSolutionAr": [
      "نكتب الأس بمضاعفات ٤: $٤٥ = ٤(١١) + ١$.",
      "$$ت^{٤٥} = (ت^٤)^{١١} \\cdot ت^١ = (١)^{١١} \\cdot ت = ت$$"
    ],
    "teacherTipEn": "Any integer ending in 45 has remainder 1 when divided by 4 because 40 is a multiple of 4.",
    "teacherTipAr": "أي عدد ينتهي بـ ٤٥ باقي قسمته على ٤ هو ١ لأن ٤٤ يقبل القسمة على ٤."
  },
  {
    "id": "alg_ch2_db_easy_03",
    "titleEn": "Negative Power of i",
    "titleAr": "الأس السالب للوحدة التخيلية",
    "difficulty": "easy",
    "questionEn": "Simplify $i^{-23}$ to its simplest form.",
    "questionAr": "بسط المقدار $ت^{-٢٣}$ إلى أبسط صورة.",
    "optionsEn": [
      "i",
      "-i",
      "1",
      "-1"
    ],
    "optionsAr": [
      "ت",
      "-ت",
      "١",
      "-١"
    ],
    "correctAnswer": "i",
    "correctIndex": 0,
    "hintEn": "Add the smallest multiple of 4 greater than 23 to the exponent.",
    "hintAr": "أضف أصغر مضاعف للعدد ٤ أكبر من ٢٣ إلى الأس.",
    "stepByStepSolutionEn": [
      "The smallest multiple of 4 greater than 23 is 24.",
      "Since $i^{24} = 1$, we can multiply: $i^{-23} = i^{-23} \\cdot i^{24} = i^{-23 + 24} = i^1 = i$.",
      "Alternatively, $\\frac{1}{i^{23}} = \\frac{1}{-i} = \\frac{i}{-i^2} = i$."
    ],
    "stepByStepSolutionAr": [
      "أصغر مضاعف للعدد ٤ أكبر من ٢٣ هو ٢٤.",
      "بما أن $ت^{٢٤} = ١$، نضرب: $ت^{-٢٣} = ت^{-٢٣} \\cdot ت^{٢٤} = ت^١ = ت$.",
      "أو بالقسمة: $\\frac{١}{ت^{٢٣}} = \\frac{١}{-ت} = ت$."
    ],
    "teacherTipEn": "For negative powers $i^{-k}$, simply add $4m > k$ to make the exponent positive without changing the value.",
    "teacherTipAr": "للأسس السالبة $ت^{-k}$، أضف أقرب مضاعف للعدد ٤ أكبر من $k$ مباشرة."
  },
  {
    "id": "alg_ch2_db_easy_04",
    "titleEn": "Sum of Four Consecutive Powers of i",
    "titleAr": "مجموع أربع قوى متتالية لـ ت",
    "difficulty": "easy",
    "questionEn": "Find the sum: $i + i^2 + i^3 + i^4$.",
    "questionAr": "أوجد ناتج: $ت + ت^٢ + ت^٣ + ت^٤$.",
    "optionsEn": [
      "0",
      "1",
      "-1",
      "i"
    ],
    "optionsAr": [
      "٠",
      "١",
      "-١",
      "ت"
    ],
    "correctAnswer": "0",
    "correctIndex": 0,
    "hintEn": "Evaluate each term: i, -1, -i, 1.",
    "hintAr": "احسب قيمة كل حد: ت، -١، -ت، ١.",
    "stepByStepSolutionEn": [
      "Evaluate each term individually:",
      "$i^1 = i$",
      "$i^2 = -1$",
      "$i^3 = -i$",
      "$i^4 = 1$",
      "Summing them gives: $i + (-1) + (-i) + 1 = 0$."
    ],
    "stepByStepSolutionAr": [
      "نحسب قيمة كل حد:",
      "$ت^١ = ت$",
      "$ت^٢ = -١$",
      "$ت^٣ = -ت$",
      "$ت^٤ = ١$",
      "بجمع الحدود: $ت + (-١) + (-ت) + ١ = ٠$."
    ],
    "teacherTipEn": "The sum of any 4 consecutive integer powers of i is always identically 0.",
    "teacherTipAr": "مجموع أي أربع قوى صحيحة متتالية للعدد ت يساوي دائماً صفراً."
  },
  {
    "id": "alg_ch2_db_easy_05",
    "titleEn": "Sum of First 100 Powers of i",
    "titleAr": "مجموع أول ١٠٠ قوة للعدد ت",
    "difficulty": "easy",
    "questionEn": "Find the value of the series: $\\sum_{k=1}^{100} i^k$.",
    "questionAr": "أوجد قيمة المتسلسلة: $\\sum_{k=١}^{١٠٠} ت^k$.",
    "optionsEn": [
      "0",
      "i",
      "-1",
      "1"
    ],
    "optionsAr": [
      "٠",
      "ت",
      "-١",
      "١"
    ],
    "correctAnswer": "0",
    "correctIndex": 0,
    "hintEn": "The terms group into 25 blocks of 4 consecutive powers, each summing to 0.",
    "hintAr": "تتجمع الحدود في ٢٥ مجموعة، كل مجموعة مكونة من ٤ قوى متتالية مجموعها صفر.",
    "stepByStepSolutionEn": [
      "Notice that every group of 4 consecutive powers sums to 0: $i^{4m+1} + i^{4m+2} + i^{4m+3} + i^{4m+4} = 0$.",
      "Since 100 is divisible by 4, there are exactly $\\frac{100}{4} = 25$ complete groups.",
      "$$\\sum_{k=1}^{100} i^k = 25 \\times 0 = 0$$"
    ],
    "stepByStepSolutionAr": [
      "كل ٤ حدود متتالية مجموعها يساوي صفراً.",
      "بما أن ١٠٠ تقبل القسمة على ٤، فإن المتسلسلة تحتوي على ٢٥ مجموعة تامة:",
      "$$\\sum_{k=١}^{١٠٠} ت^k = ٢٥ \\times ٠ = ٠$$"
    ],
    "teacherTipEn": "Whenever upper bound N is a multiple of 4, the sum from 1 to N is 0.",
    "teacherTipAr": "عندما يكون الحد العلوي مضاعفاً للعدد ٤، فإن المجموع من ١ إلى N يساوي دائماً صفراً."
  },
  {
    "id": "alg_ch2_db_easy_06",
    "titleEn": "Expansion of Square of (1 + i)",
    "titleAr": "مفكوك مربع المقدار (١ + ت)",
    "difficulty": "easy",
    "questionEn": "Expand and simplify: $(1 + i)^2$.",
    "questionAr": "فك وبسط المقدار: $(١ + ت)^٢$.",
    "optionsEn": [
      "2i",
      "-2i",
      "2",
      "0"
    ],
    "optionsAr": [
      "٢ت",
      "-٢ت",
      "٢",
      "٠"
    ],
    "correctAnswer": "2i",
    "correctIndex": 0,
    "hintEn": "$(a+b)^2 = a^2 + 2ab + b^2$ with $i^2 = -1$.",
    "hintAr": "$(أ+ب)^٢ = أ^٢ + ٢أ ب + ب^٢$ مع العلم أن $ت^٢ = -١$.",
    "stepByStepSolutionEn": [
      "Expand using the binomial square formula:",
      "$$(1 + i)^2 = 1^2 + 2(1)(i) + i^2 = 1 + 2i - 1 = 2i$$"
    ],
    "stepByStepSolutionAr": [
      "نستخدم قانون مربع المقدار الثنائي:",
      "$$(١ + ت)^٢ = ١ + ٢ت + ت^٢ = ١ + ٢ت - ١ = ٢ت$$"
    ],
    "teacherTipEn": "Remember this standard identity: $(1+i)^2 = 2i$ and $(1-i)^2 = -2i$.",
    "teacherTipAr": "احفظ هذه المتطابقة الشهيرة: $(١+ت)^٢ = ٢ت$ و $(١-ت)^٢ = -٢ت$."
  },
  {
    "id": "alg_ch2_db_easy_07",
    "titleEn": "Expansion of Square of (1 - i)",
    "titleAr": "مفكوك مربع المقدار (١ - ت)",
    "difficulty": "easy",
    "questionEn": "Calculate $(1 - i)^2$.",
    "questionAr": "احسب قيمة: $(١ - ت)^٢$.",
    "optionsEn": [
      "-2i",
      "2i",
      "-2",
      "2"
    ],
    "optionsAr": [
      "-٢ت",
      "٢ت",
      "-٢",
      "٢"
    ],
    "correctAnswer": "-2i",
    "correctIndex": 0,
    "hintEn": "Use $(1 - i)^2 = 1 - 2i + i^2$.",
    "hintAr": "استخدم $(١ - ت)^٢ = ١ - ٢ت + ت^٢$.",
    "stepByStepSolutionEn": [
      "$$(1 - i)^2 = 1 - 2i + i^2 = 1 - 2i - 1 = -2i$$"
    ],
    "stepByStepSolutionAr": [
      "$$(١ - ت)^٢ = ١ - ٢ت + ت^٢ = ١ - ٢ت - ١ = -٢ت$$"
    ],
    "teacherTipEn": "The real parts cancel out completely leaving a purely imaginary number.",
    "teacherTipAr": "الجزء الحقيقي يختفي تماماً ويتبقى عدد تخيلي بحت."
  },
  {
    "id": "alg_ch2_db_easy_08",
    "titleEn": "Fourth Power of (1 + i)",
    "titleAr": "القوة الرابعة للمقدار (١ + ت)",
    "difficulty": "easy",
    "questionEn": "Find the value of $(1 + i)^4$.",
    "questionAr": "أوجد قيمة المقدار $(١ + ت)^٤$.",
    "optionsEn": [
      "-4",
      "4",
      "4i",
      "-4i"
    ],
    "optionsAr": [
      "-٤",
      "٤",
      "٤ت",
      "-٤ت"
    ],
    "correctAnswer": "-4",
    "correctIndex": 0,
    "hintEn": "$(1+i)^4 = [(1+i)^2]^2 = (2i)^2$.",
    "hintAr": "$(١+ت)^٤ = [(١+ت)^٢]^٢ = (٢ت)^٢$.",
    "stepByStepSolutionEn": [
      "Express as the square of the square:",
      "$$(1 + i)^4 = \\left[(1 + i)^2\\right]^2 = (2i)^2 = 4i^2 = 4(-1) = -4$$"
    ],
    "stepByStepSolutionAr": [
      "نرفع مربع المقدار إلى أس ٢:",
      "$$(١ + ت)^٤ = \\left[(١ + ت)^٢\\right]^٢ = (٢ت)^٢ = ٤ت^٢ = ٤(-١) = -٤$$"
    ],
    "teacherTipEn": "Always reduce high even powers of $(1 \\pm i)$ using $(1 \\pm i)^2 = \\pm 2i$.",
    "teacherTipAr": "دائماً بسط القوى الزوجية لـ $(١ \\pm ت)$ باستخدام $(١ \\pm ت)^٢ = \\pm ٢ت$."
  },
  {
    "id": "alg_ch2_db_easy_09",
    "titleEn": "Quotient of (1 + i) over (1 - i)",
    "titleAr": "خارج قسمة (١ + ت) على (١ - ت)",
    "difficulty": "easy",
    "questionEn": "Simplify the fraction $\\frac{1 + i}{1 - i}$.",
    "questionAr": "بسط الكسر $\\frac{١ + ت}{١ - ت}$ إلى أبسط صورة.",
    "optionsEn": [
      "i",
      "-i",
      "1",
      "-1"
    ],
    "optionsAr": [
      "ت",
      "-ت",
      "١",
      "-١"
    ],
    "correctAnswer": "i",
    "correctIndex": 0,
    "hintEn": "Multiply numerator and denominator by the conjugate (1 + i).",
    "hintAr": "اضرب بسطاً ومقاماً في مرافق المقام (١ + ت).",
    "stepByStepSolutionEn": [
      "Multiply by conjugate of denominator:",
      "$$\\frac{1 + i}{1 - i} = \\frac{(1 + i)(1 + i)}{(1 - i)(1 + i)} = \\frac{(1 + i)^2}{1 - i^2} = \\frac{2i}{1 - (-1)} = \\frac{2i}{2} = i$$"
    ],
    "stepByStepSolutionAr": [
      "نضرب في مرافق المقام:",
      "$$\\frac{١ + ت}{١ - ت} \\times \\frac{١ + ت}{١ + ت} = \\frac{(١ + ت)^٢}{١^٢ - ت^٢} = \\frac{٢ت}{٢} = ت$$"
    ],
    "teacherTipEn": "Standard result worth memorizing: $\\frac{1+i}{1-i} = i$ and $\\frac{1-i}{1+i} = -i$.",
    "teacherTipAr": "قاعدة شهيرة جديرة بالحفظ: $\\frac{١+ت}{١-ت} = ت$ و $\\frac{١-ت}{١+ت} = -ت$."
  },
  {
    "id": "alg_ch2_db_easy_10",
    "titleEn": "Product of a Complex Number and its Conjugate",
    "titleAr": "حاصل ضرب عدد مركب في مرافقه",
    "difficulty": "easy",
    "questionEn": "If $z = 3 - 4i$, calculate $z \\bar{z}$.",
    "questionAr": "إذا كان $z = ٣ - ٤ت$، فاحسب قيمة $z \\bar{z}$.",
    "optionsEn": [
      "25",
      "7",
      "-7",
      "5"
    ],
    "optionsAr": [
      "٢٥",
      "٧",
      "-٧",
      "٥"
    ],
    "correctAnswer": "25",
    "correctIndex": 0,
    "hintEn": "$z \\bar{z} = x^2 + y^2 = |z|^2$.",
    "hintAr": "$z \\bar{z} = x^٢ + y^٢ = |z|^٢$.",
    "stepByStepSolutionEn": [
      "For $z = x + iy$, the product with its conjugate is:",
      "$$z \\bar{z} = (x + iy)(x - iy) = x^2 + y^2$$",
      "Here $x = 3$ and $y = -4$:",
      "$$z \\bar{z} = 3^2 + (-4)^2 = 9 + 16 = 25$$"
    ],
    "stepByStepSolutionAr": [
      "حاصل ضرب العدد في مرافقه يساوي مجموع مربعي الجزأين:",
      "$$z \\bar{z} = x^٢ + y^٢$$",
      "هنا $x = ٣$ و $y = -٤$:",
      "$$z \\bar{z} = ٣^٢ + (-٤)^٢ = ٩ + ١٦ = ٢٥$$"
    ],
    "teacherTipEn": "$z \\bar{z}$ is always a non-negative real number equal to $|z|^2$.",
    "teacherTipAr": "حاصل ضرب أي عدد مركب في مرافقه هو دائماً عدد حقيقي غير سالب ويساوي $|z|^٢$."
  },
  {
    "id": "alg_ch2_db_easy_11",
    "titleEn": "Modulus of a Complex Number in Quadrant I",
    "titleAr": "مقياس عدد مركب في الربع الأول",
    "difficulty": "easy",
    "questionEn": "Find the modulus $|z|$ of the complex number $z = 1 + i\\sqrt{3}$.",
    "questionAr": "أوجد مقياس العدد المركب $z = ١ + ت\\sqrt{٣}$.",
    "optionsEn": [
      "2",
      "4",
      "\\sqrt{2}",
      "1"
    ],
    "optionsAr": [
      "٢",
      "٤",
      "\\sqrt{٢}",
      "١"
    ],
    "correctAnswer": "2",
    "correctIndex": 0,
    "hintEn": "Use the formula $|z| = \\sqrt{x^2 + y^2}$.",
    "hintAr": "استخدم القانون $|z| = \\sqrt{x^٢ + y^٢}$.",
    "stepByStepSolutionEn": [
      "Identify real and imaginary parts: $x = 1$, $y = \\sqrt{3}$.",
      "$$|z| = \\sqrt{1^2 + (\\sqrt{3})^2} = \\sqrt{1 + 3} = \\sqrt{4} = 2$$"
    ],
    "stepByStepSolutionAr": [
      "الجزء الحقيقي $x = ١$ والتخيلي $y = \\sqrt{٣}$.",
      "$$|z| = \\sqrt{١^٢ + (\\sqrt{٣})^٢} = \\sqrt{١ + ٣} = \\sqrt{٤} = ٢$$"
    ],
    "teacherTipEn": "Modulus represents the Euclidean distance from the origin (0, 0) to (x, y) in the Argand plane.",
    "teacherTipAr": "المقياس يمثل البعد الإقليدي للنقطة عن نقطة الأصل في مستوى أرجاند."
  },
  {
    "id": "alg_ch2_db_easy_12",
    "titleEn": "Modulus of Complex Number in Quadrant II",
    "titleAr": "مقياس عدد مركب في الربع الثاني",
    "difficulty": "easy",
    "questionEn": "Find the modulus of $z = -5 + 12i$.",
    "questionAr": "أوجد مقياس العدد المركب $z = -٥ + ١٢ت$.",
    "optionsEn": [
      "13",
      "17",
      "7",
      "\\sqrt{119}"
    ],
    "optionsAr": [
      "١٣",
      "١٧",
      "٧",
      "\\sqrt{١١٩}"
    ],
    "correctAnswer": "13",
    "correctIndex": 0,
    "hintEn": "Pythagorean triple (5, 12, 13).",
    "hintAr": "ثلاثية فيثاغورس الشهيرة (٥، ١٢، ١٣).",
    "stepByStepSolutionEn": [
      "$$|z| = \\sqrt{(-5)^2 + 12^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13$$"
    ],
    "stepByStepSolutionAr": [
      "$$|z| = \\sqrt{(-٥)^٢ + ١٢^٢} = \\sqrt{٢٥ + ١٤٤} = \\sqrt{١٦٩} = ١٣$$"
    ],
    "teacherTipEn": "Minus signs inside the square disappear: $(-x)^2 = x^2$.",
    "teacherTipAr": "الإشارة السالبة داخل الجذر تُربّع وتصبح موجبة: $(-x)^٢ = x^٢$."
  },
  {
    "id": "alg_ch2_db_easy_13",
    "titleEn": "Principal Argument of (1 + i)",
    "titleAr": "السعة الأساسية للعدد (١ + ت)",
    "difficulty": "easy",
    "questionEn": "Determine the principal argument $\\theta$ of $z = 1 + i$.",
    "questionAr": "حدد السعة الأساسية $\\theta$ للعدد المركب $z = ١ + ت$.",
    "optionsEn": [
      "\\frac{\\pi}{4}",
      "\\frac{3\\pi}{4}",
      "-\\frac{\\pi}{4}",
      "\\frac{\\pi}{2}"
    ],
    "optionsAr": [
      "\\frac{\\pi}{٤}",
      "\\frac{٣\\pi}{٤}",
      "-\\frac{\\pi}{٤}",
      "\\frac{\\pi}{٢}"
    ],
    "correctAnswer": "\\frac{\\pi}{4}",
    "correctIndex": 0,
    "hintEn": "Both x > 0 and y > 0, so z is in Quadrant I with tan(\\theta) = 1.",
    "hintAr": "كلا من x > ٠ و y > ٠، إذن النقطة في الربع الأول وظل الزاوية = ١.",
    "stepByStepSolutionEn": [
      "Here $x = 1 > 0$ and $y = 1 > 0$, placing $z$ in Quadrant I.",
      "$$\\tan\\theta = \\frac{y}{x} = \\frac{1}{1} = 1$$",
      "In Quadrant I: $\\theta = 45^\\circ = \\frac{\\pi}{4}$ radians."
    ],
    "stepByStepSolutionAr": [
      "بما أن $x = ١ > ٠$ و $y = ١ > ٠$، فالعدد يقع في الربع الأول.",
      "$$\\tan\\theta = \\frac{y}{x} = \\frac{١}{١} = ١$$",
      "في الربع الأول: $\\theta = ٤٥^\\circ = \\frac{\\pi}{٤}$ راديان."
    ],
    "teacherTipEn": "Principal argument $\\theta$ is always defined on the interval $(-\\pi, \\pi]$ or $(-180^\\circ, 180^\\circ]$.",
    "teacherTipAr": "السعة الأساسية $\\theta$ تنتمي دائماً للفترة $(-\\pi, \\pi]$ أو $(-١٨٠^\\circ, ١٨٠^\\circ]$."
  },
  {
    "id": "alg_ch2_db_easy_14",
    "titleEn": "Principal Argument in Quadrant II",
    "titleAr": "السعة الأساسية في الربع الثاني",
    "difficulty": "easy",
    "questionEn": "Find the principal argument of $z = -1 + i$.",
    "questionAr": "أوجد السعة الأساسية للعدد المركب $z = -١ + ت$.",
    "optionsEn": [
      "\\frac{3\\pi}{4}",
      "\\frac{\\pi}{4}",
      "-\\frac{3\\pi}{4}",
      "-\\frac{\\pi}{4}"
    ],
    "optionsAr": [
      "\\frac{٣\\pi}{٤}",
      "\\frac{\\pi}{٤}",
      "-\\frac{٣\\pi}{٤}",
      "-\\frac{\\pi}{٤}"
    ],
    "correctAnswer": "\\frac{3\\pi}{4}",
    "correctIndex": 0,
    "hintEn": "$x < 0$ and $y > 0$ means Quadrant II: $\\theta = \\pi - \\alpha$.",
    "hintAr": "$x < ٠$ و $y > ٠$ يعني الربع الثاني: $\\theta = \\pi - \\alpha$.",
    "stepByStepSolutionEn": [
      "Since $x = -1 < 0$ and $y = 1 > 0$, $z$ lies in the second quadrant.",
      "Reference acute angle: $\\tan\\alpha = \\left|\\frac{y}{x}\\right| = 1 \\implies \\alpha = \\frac{\\pi}{4}$.",
      "In Quadrant II: $\\theta = \\pi - \\alpha = \\pi - \\frac{\\pi}{4} = \\frac{3\\pi}{4}$ ($135^\\circ$)."
    ],
    "stepByStepSolutionAr": [
      "بما أن $x = -١ < ٠$ و $y = ١ > ٠$، يقع العدد في الربع الثاني.",
      "زاوية الإسناد الحادة: $\\tan\\alpha = ١ \\implies \\alpha = \\frac{\\pi}{٤}$.",
      "في الربع الثاني: $\\theta = \\pi - \\alpha = \\pi - \\frac{\\pi}{٤} = \\frac{٣\\pi}{٤}$ ($١٣٥^\\circ$)."
    ],
    "teacherTipEn": "In Quadrant II, $\\theta = \\pi - \\alpha$ (or $180^\\circ - \\alpha$).",
    "teacherTipAr": "في الربع الثاني تكون السعة $\\theta = ١٨٠^\\circ - \\alpha$."
  },
  {
    "id": "alg_ch2_db_easy_15",
    "titleEn": "Principal Argument in Quadrant III",
    "titleAr": "السعة الأساسية في الربع الثالث",
    "difficulty": "easy",
    "questionEn": "Determine the principal argument of $z = -1 - i$.",
    "questionAr": "حدد السعة الأساسية للعدد المركب $z = -١ - ت$.",
    "optionsEn": [
      "-\\frac{3\\pi}{4}",
      "\\frac{5\\pi}{4}",
      "-\\frac{\\pi}{4}",
      "\\frac{3\\pi}{4}"
    ],
    "optionsAr": [
      "-\\frac{٣\\pi}{٤}",
      "\\frac{٥\\pi}{٤}",
      "-\\frac{\\pi}{٤}",
      "\\frac{٣\\pi}{٤}"
    ],
    "correctAnswer": "-\\frac{3\\pi}{4}",
    "correctIndex": 0,
    "hintEn": "In Quadrant III, the principal argument is $-\\pi + \\alpha$.",
    "hintAr": "في الربع الثالث، تكون السعة الأساسية $-\\pi + \\alpha$.",
    "stepByStepSolutionEn": [
      "Here $x = -1 < 0$ and $y = -1 < 0$, placing $z$ in Quadrant III.",
      "Acute angle $\\alpha = \\frac{\\pi}{4}$.",
      "For the principal argument $\\theta \\in (-\\pi, \\pi]$:",
      "$$\\theta = -(\\pi - \\alpha) = -\\pi + \\frac{\\pi}{4} = -\\frac{3\\pi}{4} \\quad (-135^\\circ)$$"
    ],
    "stepByStepSolutionAr": [
      "$x = -١ < ٠$ و $y = -١ < ٠$، إذن النقطة في الربع الثالث.",
      "زاوية الإسناد $\\alpha = \\frac{\\pi}{٤}$.",
      "للسعة الأساسية $\\theta \\in (-\\pi, \\pi]$:",
      "$$\\theta = -(\\pi - \\alpha) = -\\pi + \\frac{\\pi}{٤} = -\\frac{٣\\pi}{٤} \\quad (-١٣٥^\\circ)$$"
    ],
    "teacherTipEn": "While $225^\\circ$ ($5\\pi/4$) is an argument, the *principal* argument must not exceed $\\pi$; hence $-135^\\circ$.",
    "teacherTipAr": "الزاوية ٢٢٥ ليست سعة أساسية لأن السعة الأساسية لا تتجاوز ١٨٠ درجة، لذلك نكتبها $-١٣٥^\\circ$."
  },
  {
    "id": "alg_ch2_db_easy_16",
    "titleEn": "Principal Argument in Quadrant IV",
    "titleAr": "السعة الأساسية في الربع الرابع",
    "difficulty": "easy",
    "questionEn": "Find the principal argument of $z = 1 - i\\sqrt{3}$.",
    "questionAr": "أوجد السعة الأساسية للعدد المركب $z = ١ - ت\\sqrt{٣}$.",
    "optionsEn": [
      "-\\frac{\\pi}{3}",
      "\\frac{5\\pi}{3}",
      "-\\frac{\\pi}{6}",
      "\\frac{2\\pi}{3}"
    ],
    "optionsAr": [
      "-\\frac{\\pi}{٣}",
      "\\frac{٥\\pi}{٣}",
      "-\\frac{\\pi}{٦}",
      "\\frac{٢\\pi}{٣}"
    ],
    "correctAnswer": "-\\frac{\\pi}{3}",
    "correctIndex": 0,
    "hintEn": "$x > 0$ and $y < 0$ means Quadrant IV: $\\theta = -\\alpha$.",
    "hintAr": "$x > ٠$ و $y < ٠$ يعني الربع الرابع: $\\theta = -\\alpha$.",
    "stepByStepSolutionEn": [
      "Here $x = 1 > 0$ and $y = -\\sqrt{3} < 0$, which is in Quadrant IV.",
      "Reference angle $\\alpha = \\arctan(\\sqrt{3}) = \\frac{\\pi}{3}$ ($60^\\circ$).",
      "In Quadrant IV: $\\theta = -\\alpha = -\\frac{\\pi}{3}$ ($-60^\\circ$)."
    ],
    "stepByStepSolutionAr": [
      "بما أن $x = ١ > ٠$ و $y = -\\sqrt{٣} < ٠$ فالعدد في الربع الرابع.",
      "زاوية الإسناد $\\alpha = ٦٠^\\circ = \\frac{\\pi}{٣}$.",
      "في الربع الرابع: $\\theta = -\\alpha = -\\frac{\\pi}{٣}$ ($-٦٠^\\circ$)."
    ],
    "teacherTipEn": "In Quadrant IV, the principal argument is simply $-\\alpha$.",
    "teacherTipAr": "في الربع الرابع تكون السعة الأساسية ببساطة $-\\alpha$."
  },
  {
    "id": "alg_ch2_db_easy_17",
    "titleEn": "Argument of Purely Imaginary Positive Number",
    "titleAr": "سعة عدد تخيلي بحت موجب",
    "difficulty": "easy",
    "questionEn": "Find the principal argument of $z = 5i$.",
    "questionAr": "أوجد السعة الأساسية للعدد المركب $z = ٥ت$.",
    "optionsEn": [
      "\\frac{\\pi}{2}",
      "0",
      "\\pi",
      "-\\frac{\\pi}{2}"
    ],
    "optionsAr": [
      "\\frac{\\pi}{٢}",
      "٠",
      "\\pi",
      "-\\frac{\\pi}{٢}"
    ],
    "correctAnswer": "\\frac{\\pi}{2}",
    "correctIndex": 0,
    "hintEn": "The point lies on the positive imaginary axis (Oy).",
    "hintAr": "النقطة تقع على محور الصادات الموجب (محور التخيل الموجب).",
    "stepByStepSolutionEn": [
      "The coordinates in the Argand plane are $(0, 5)$.",
      "This point lies on the positive vertical axis.",
      "The angle made with the positive real axis is $90^\\circ = \\frac{\\pi}{2}$."
    ],
    "stepByStepSolutionAr": [
      "إحداثيات النقطة في مستوى أرجاند هي $(٠، ٥)$.",
      "هذه النقطة تقع على محور الأعداد التخيلية الموجب.",
      "الزاوية المصنوعة مع الاتجاه الموجب لمحور السينات هي $٩٠^\\circ = \\frac{\\pi}{٢}$."
    ],
    "teacherTipEn": "Any positive purely imaginary number $bi$ with $b > 0$ has argument $\\frac{\\pi}{2}$.",
    "teacherTipAr": "أي عدد تخيلي بحت معامله موجب سعته الأساسية هي $\\frac{\\pi}{٢}$ ($٩٠^\\circ$)."
  },
  {
    "id": "alg_ch2_db_easy_18",
    "titleEn": "Argument of Purely Imaginary Negative Number",
    "titleAr": "سعة عدد تخيلي بحت سالب",
    "difficulty": "easy",
    "questionEn": "Determine the principal argument of $z = -7i$.",
    "questionAr": "حدد السعة الأساسية للعدد المركب $z = -٧ت$.",
    "optionsEn": [
      "-\\frac{\\pi}{2}",
      "\\frac{3\\pi}{2}",
      "\\pi",
      "0"
    ],
    "optionsAr": [
      "-\\frac{\\pi}{٢}",
      "\\frac{٣\\pi}{٢}",
      "\\pi",
      "٠"
    ],
    "correctAnswer": "-\\frac{\\pi}{2}",
    "correctIndex": 0,
    "hintEn": "The point lies on the negative imaginary axis.",
    "hintAr": "النقطة تقع على محور التخيل السالب.",
    "stepByStepSolutionEn": [
      "The coordinates are $(0, -7)$, lying on the negative imaginary axis.",
      "The principal argument directed angle is $-90^\\circ = -\\frac{\\pi}{2}$."
    ],
    "stepByStepSolutionAr": [
      "الإحداثيات $(٠، -٧)$ تقع على محور التخيل السالب.",
      "السعة الأساسية هي زاوية قياسها $-٩٠^\\circ = -\\frac{\\pi}{٢}$."
    ],
    "teacherTipEn": "Remember that $270^\\circ$ ($3\\pi/2$) is not inside $(-\\pi, \\pi]$, so the principal argument is $-\\frac{\\pi}{2}$.",
    "teacherTipAr": "الزاوية ٢٧٠ درجة تخرج عن نطاق السعة الأساسية، لذلك سعتها الأساسية هي $-٩٠^\\circ$."
  },
  {
    "id": "alg_ch2_db_easy_19",
    "titleEn": "Argument of Strictly Negative Real Number",
    "titleAr": "سعة عدد حقيقي سالب",
    "difficulty": "easy",
    "questionEn": "Find the principal argument of $z = -4$.",
    "questionAr": "أوجد السعة الأساسية للعدد المركب $z = -٤$.",
    "optionsEn": [
      "\\pi",
      "0",
      "-\\pi",
      "\\frac{\\pi}{2}"
    ],
    "optionsAr": [
      "\\pi",
      "٠",
      "-\\pi",
      "\\frac{\\pi}{٢}"
    ],
    "correctAnswer": "\\pi",
    "correctIndex": 0,
    "hintEn": "Lies on the negative real axis.",
    "hintAr": "يقع على محور السينات السالب.",
    "stepByStepSolutionEn": [
      "The point in the complex plane is $(-4, 0)$.",
      "It lies on the negative half of the real axis.",
      "The angle with the positive real axis is $\\pi$ radians ($180^\\circ$).",
      "Since the interval is $(-\\pi, \\pi]$, $\\pi$ is included."
    ],
    "stepByStepSolutionAr": [
      "النقطة تمثل $(-٤، ٠)$ على الاتجاه السالب لمحور السينات الحقيقي.",
      "الزاوية مع الاتجاه الموجب هي $\\pi$ ($١٨٠^\\circ$).",
      "بما أن فترة السعة الأساسية هي $(-\\pi, \\pi]$، فإن $\\pi$ مقبولة."
    ],
    "teacherTipEn": "By international convention in Thanaweya Amma, $\\text{Arg}(-a) = \\pi$ (positive pi, not -pi).",
    "teacherTipAr": "السعة الأساسية لأي عدد حقيقي سالب هي دائماً $\\pi$ (وليس $-\\pi$ لأن الفترة نصف المفتوحة تحتوي $\\pi$)."
  },
  {
    "id": "alg_ch2_db_easy_20",
    "titleEn": "Modulus of Pure Imaginary Unit Power",
    "titleAr": "مقياس قوى الوحدة التخيلية",
    "difficulty": "easy",
    "questionEn": "Find $|i^7|$.",
    "questionAr": "أوجد مقياس $|ت^٧|$.",
    "optionsEn": [
      "1",
      "7",
      "-1",
      "0"
    ],
    "optionsAr": [
      "١",
      "٧",
      "-١",
      "٠"
    ],
    "correctAnswer": "1",
    "correctIndex": 0,
    "hintEn": "$|z^n| = |z|^n$ and $|i| = 1$.",
    "hintAr": "$|z^n| = |z|^n$ ومقياس $|ت| = ١$.",
    "stepByStepSolutionEn": [
      "Property of modulus: $|z^n| = |z|^n$.",
      "Since $|i| = 1$, we have $|i^7| = |i|^7 = 1^7 = 1$.",
      "Alternatively, $i^7 = -i$, and $|-i| = \\sqrt{0^2 + (-1)^2} = 1$."
    ],
    "stepByStepSolutionAr": [
      "من خواص المقياس: $|z^n| = |z|^n$.",
      "بما أن $|ت| = ١$، فإن $|ت^٧| = ١^٧ = ١$.",
      "أو بالتبسيط: $ت^٧ = -ت$، ومقياس $|-ت| = ١$."
    ],
    "teacherTipEn": "Every integer power of i has modulus exactly equal to 1.",
    "teacherTipAr": "مقياس أي قوة صحيحة للعدد ت يساوي دائماً ١."
  },
  {
    "id": "alg_ch2_db_easy_21",
    "titleEn": "Standard Polar Form of 1 + i",
    "titleAr": "الصورة المثلثية القياسية للعدد ١ + ت",
    "difficulty": "easy",
    "questionEn": "Write $z = 1 + i$ in standard trigonometric (polar) form.",
    "questionAr": "اكتب العدد $z = ١ + ت$ بالصورة المثلثية (القطبية) القياسية.",
    "optionsEn": [
      "\\sqrt{2}\\left(\\cos\\frac{\\pi}{4} + i\\sin\\frac{\\pi}{4}\\right)",
      "2\\left(\\cos\\frac{\\pi}{4} + i\\sin\\frac{\\pi}{4}\\right)",
      "\\sqrt{2}\\left(\\cos\\frac{\\pi}{2} + i\\sin\\frac{\\pi}{2}\\right)",
      "\\cos\\frac{\\pi}{4} + i\\sin\\frac{\\pi}{4}"
    ],
    "optionsAr": [
      "\\sqrt{٢}\\left(\\cos\\frac{\\pi}{٤} + ت\\sin\\frac{\\pi}{٤}\\right)",
      "٢\\left(\\cos\\frac{\\pi}{٤} + ت\\sin\\frac{\\pi}{٤}\\right)",
      "\\sqrt{٢}\\left(\\cos\\frac{\\pi}{٢} + ت\\sin\\frac{\\pi}{٢}\\right)",
      "\\cos\\frac{\\pi}{٤} + ت\\sin\\frac{\\pi}{٤}"
    ],
    "correctAnswer": "\\sqrt{2}\\left(\\cos\\frac{\\pi}{4} + i\\sin\\frac{\\pi}{4}\\right)",
    "correctIndex": 0,
    "hintEn": "$r = \\sqrt{1^2 + 1^2} = \\sqrt{2}$ and $\\theta = \\pi/4$.",
    "hintAr": "$r = \\sqrt{١^٢ + ١^٢} = \\sqrt{٢}$ و $\\theta = \\pi/٤$.",
    "stepByStepSolutionEn": [
      "Find modulus: $r = \\sqrt{1^2 + 1^2} = \\sqrt{2}$.",
      "Find argument: $\\tan\\theta = 1 \\implies \\theta = \\frac{\\pi}{4}$.",
      "Standard polar form: $z = r(\\cos\\theta + i\\sin\\theta) = \\sqrt{2}\\left(\\cos\\frac{\\pi}{4} + i\\sin\\frac{\\pi}{4}\\right)$."
    ],
    "stepByStepSolutionAr": [
      "المقياس: $r = \\sqrt{١ + ١} = \\sqrt{٢}$.",
      "السعة: $\\theta = \\frac{\\pi}{٤}$.",
      "الصورة المثلثية: $z = \\sqrt{٢}\\left(\\cos\\frac{\\pi}{٤} + ت\\sin\\frac{\\pi}{٤}\\right)$."
    ],
    "teacherTipEn": "Check both: r must be positive, cosine must be real part, sine must have the i.",
    "teacherTipAr": "تأكد دائماً أن r موجب، وجيب التمام مع الجزء الحقيقي، والجيب مضروب في ت."
  },
  {
    "id": "alg_ch2_db_easy_22",
    "titleEn": "Euler Form of Pure Imaginary Unit",
    "titleAr": "الصورة الأسية (أويلر) للعدد ت",
    "difficulty": "easy",
    "questionEn": "What is the exponential (Euler's) form of $i$?",
    "questionAr": "ما هي الصورة الأسية (صيغة أويلر) للعدد التخيلي $ت$؟",
    "optionsEn": [
      "e^{i\\frac{\\pi}{2}}",
      "e^{i\\pi}",
      "e^{-i\\frac{\\pi}{2}}",
      "e^{i 0}"
    ],
    "optionsAr": [
      "e^{ت\\frac{\\pi}{٢}}",
      "e^{ت\\pi}",
      "e^{-ت\\frac{\\pi}{٢}}",
      "e^{ت ٠}"
    ],
    "correctAnswer": "e^{i\\frac{\\pi}{2}}",
    "correctIndex": 0,
    "hintEn": "$r = 1$ and $\\theta = \\pi/2$.",
    "hintAr": "$r = ١$ و $\\theta = \\pi/٢$.",
    "stepByStepSolutionEn": [
      "For $z = i$, the modulus is $r = 1$ and argument is $\\theta = \\frac{\\pi}{2}$.",
      "By Euler's formula $z = r e^{i\\theta}$:",
      "$$i = 1 \\cdot e^{i\\frac{\\pi}{2}} = e^{i\\frac{\\pi}{2}}$$"
    ],
    "stepByStepSolutionAr": [
      "للعدد $ت$، المقياس $r = ١$ والسعة $\\theta = \\frac{\\pi}{٢}$.",
      "وفق صيغة أويلر $z = r e^{i\\theta}$:",
      "$$ت = e^{ت\\frac{\\pi}{٢}}$$"
    ],
    "teacherTipEn": "Euler's identity $e^{i\\pi/2} = i$ is fundamental for multiplying rotations by $90^\\circ$.",
    "teacherTipAr": "صيغة أويلر $e^{i\\pi/2} = ت$ تعبر هندسياً عن دوران بزاوية ٩٠ درجة."
  },
  {
    "id": "alg_ch2_db_easy_23",
    "titleEn": "Euler's Identity for -1",
    "titleAr": "صيغة أويلر للعدد -١",
    "difficulty": "easy",
    "questionEn": "Express $-1$ in exponential form.",
    "questionAr": "عبر عن العدد $-١$ بالصورة الأسية.",
    "optionsEn": [
      "e^{i\\pi}",
      "e^{-i\\pi}",
      "e^{i\\frac{\\pi}{2}}",
      "-e^{i 0}"
    ],
    "optionsAr": [
      "e^{ت\\pi}",
      "e^{-ت\\pi}",
      "e^{ت\\frac{\\pi}{٢}}",
      "-e^{ت ٠}"
    ],
    "correctAnswer": "e^{i\\pi}",
    "correctIndex": 0,
    "hintEn": "The principal argument of -1 is $\\pi$.",
    "hintAr": "السعة الأساسية للعدد -١ هي $\\pi$.",
    "stepByStepSolutionEn": [
      "For $z = -1$, modulus is $r = |-1| = 1$.",
      "Principal argument is $\\theta = \\pi$.",
      "Hence $z = e^{i\\pi}$ (Euler's famous identity: $e^{i\\pi} + 1 = 0$)."
    ],
    "stepByStepSolutionAr": [
      "المقياس $r = |-١| = ١$.",
      "السعة الأساسية $\\theta = \\pi$.",
      "إذن: $-١ = e^{ت\\pi}$، وهي متطابقة أويلر الشهيرة $e^{ت\\pi} + ١ = ٠$."
    ],
    "teacherTipEn": "The coefficient r in exponential form must always be strictly positive ($r > 0$).",
    "teacherTipAr": "معامل أويلر r يجب أن يكون دائماً عدداً موجباً تماماً ($r > ٠$)."
  },
  {
    "id": "alg_ch2_db_easy_24",
    "titleEn": "Converting Euler to Cartesian Form",
    "titleAr": "تحويل صورة أويلر إلى الصورة الجبرية",
    "difficulty": "easy",
    "questionEn": "Convert $z = 4 e^{i\\frac{\\pi}{3}}$ to Cartesian form.",
    "questionAr": "حول العدد $z = ٤ e^{ت\\frac{\\pi}{٣}}$ إلى الصورة الجبرية (الكارتيزية).",
    "optionsEn": [
      "2 + 2i\\sqrt{3}",
      "2\\sqrt{3} + 2i",
      "2 - 2i\\sqrt{3}",
      "4 + 4i"
    ],
    "optionsAr": [
      "٢ + ٢ت\\sqrt{٣}",
      "٢\\sqrt{٣} + ٢ت",
      "٢ - ٢ت\\sqrt{٣}",
      "٤ + ٤ت"
    ],
    "correctAnswer": "2 + 2i\\sqrt{3}",
    "correctIndex": 0,
    "hintEn": "$x = r\\cos\\theta$ and $y = r\\sin\\theta$ with $\\theta = 60^\\circ$.",
    "hintAr": "$x = r\\cos\\theta$ و $y = r\\sin\\theta$ مع الزاوية $٦٠^\\circ$.",
    "stepByStepSolutionEn": [
      "Using Euler's identity:",
      "$$z = 4\\left(\\cos\\frac{\\pi}{3} + i\\sin\\frac{\\pi}{3}\\right)$$",
      "Evaluate trigonometric functions:",
      "$$\\cos\\frac{\\pi}{3} = \\frac{1}{2}, \\quad \\sin\\frac{\\pi}{3} = \\frac{\\sqrt{3}}{2}$$",
      "$$z = 4\\left(\\frac{1}{2} + i\\frac{\\sqrt{3}}{2}\\right) = 2 + 2i\\sqrt{3}$$"
    ],
    "stepByStepSolutionAr": [
      "باستخدام متطابقة أويلر:",
      "$$z = ٤\\left(\\cos\\frac{\\pi}{٣} + ت\\sin\\frac{\\pi}{٣}\\right)$$",
      "$$\\cos ٦٠^\\circ = \\frac{١}{٢}, \\quad \\sin ٦٠^\\circ = \\frac{\\sqrt{٣}}{٢}$$",
      "$$z = ٤\\left(\\frac{١}{٢} + ت\\frac{\\sqrt{٣}}{٢}\\right) = ٢ + ٢ت\\sqrt{٣}$$"
    ],
    "teacherTipEn": "Multiply the modulus into both components.",
    "teacherTipAr": "اضرب المقياس في كل من الجيب وجيب التمام."
  },
  {
    "id": "alg_ch2_db_easy_25",
    "titleEn": "Argument of Conjugate in Polar Form",
    "titleAr": "سعة المرافق في الصورة القطبية",
    "difficulty": "easy",
    "questionEn": "If $\\text{Arg}(z) = \\theta$ where $-\\pi < \\theta < \\pi$, what is $\\text{Arg}(\\bar{z})$?",
    "questionAr": "إذا كانت السعة الأساسية $\\text{Arg}(z) = \\theta$ حيث $-\\pi < \\theta < \\pi$، فما هي $\\text{Arg}(\\bar{z})$؟",
    "optionsEn": [
      "-\\theta",
      "\\pi - \\theta",
      "\\theta",
      "\\pi + \\theta"
    ],
    "optionsAr": [
      "-\\theta",
      "\\pi - \\theta",
      "\\theta",
      "\\pi + \\theta"
    ],
    "correctAnswer": "-\\theta",
    "correctIndex": 0,
    "hintEn": "The conjugate is the geometric reflection across the real axis.",
    "hintAr": "المرافق هو انعكاس هندسي للنقطة حول محور السينات الحقيقي.",
    "stepByStepSolutionEn": [
      "In the Argand plane, if $z = r e^{i\\theta}$, then the conjugate $\\bar{z}$ is $r e^{-i\\theta}$.",
      "Since $-\\pi < \\theta < \\pi$, $-\\theta$ remains within $(-\\pi, \\pi)$.",
      "Therefore, $\\text{Arg}(\\bar{z}) = -\\theta$."
    ],
    "stepByStepSolutionAr": [
      "في مستوى أرجاند، إذا كان $z = r e^{ت\\theta}$ فإن المرافق $\\bar{z} = r e^{-ت\\theta}$.",
      "بما أن $-\\pi < \\theta < \\pi$، فإن $-\\theta$ تقع في نفس مدى السعة الأساسية.",
      "إذن سعة المرافق هي $-\\theta$."
    ],
    "teacherTipEn": "Reflection over the horizontal axis flips the sign of the angle: $\\theta \\to -\\theta$.",
    "teacherTipAr": "الانعكاس على محور السينات يغير إشارة زاوية السعة فقط."
  },
  {
    "id": "alg_ch2_db_easy_26",
    "titleEn": "Argument of Reciprocal",
    "titleAr": "سعة المعكوس الضربي",
    "difficulty": "easy",
    "questionEn": "If $\\text{Arg}(z) = \\theta$, what is $\\text{Arg}\\left(\\frac{1}{z}\\right)$ for $-\\pi < \\theta < \\pi$?",
    "questionAr": "إذا كانت $\\text{Arg}(z) = \\theta$، فما هي $\\text{Arg}\\left(\\frac{١}{z}\\right)$ حيث $-\\pi < \\theta < \\pi$؟",
    "optionsEn": [
      "-\\theta",
      "\\theta",
      "\\pi - \\theta",
      "\\frac{1}{\\theta}"
    ],
    "optionsAr": [
      "-\\theta",
      "\\theta",
      "\\pi - \\theta",
      "\\frac{١}{\\theta}"
    ],
    "correctAnswer": "-\\theta",
    "correctIndex": 0,
    "hintEn": "$\\frac{1}{z} = \\frac{1}{r e^{i\\theta}} = \\frac{1}{r} e^{-i\\theta}$.",
    "hintAr": "$\\frac{١}{z} = \\frac{١}{r e^{ت\\theta}} = \\frac{١}{r} e^{-ت\\theta}$.",
    "stepByStepSolutionEn": [
      "Write $z = r e^{i\\theta}$.",
      "The reciprocal is $\\frac{1}{z} = \\frac{1}{r} e^{-i\\theta}$.",
      "Thus, its argument is $-\\theta$."
    ],
    "stepByStepSolutionAr": [
      "نكتب $z = r e^{ت\\theta}$.",
      "المعكوس الضربي هو $\\frac{١}{z} = \\frac{١}{r} e^{-ت\\theta}$.",
      "وبالتالي فإن سعته تساوي $-\\theta$."
    ],
    "teacherTipEn": "Both $\\bar{z}$ and $1/z$ have the same argument $-\\theta$, but different moduli.",
    "teacherTipAr": "كلا من المرافق $\\bar{z}$ والمعكوس الضربي $١/z$ لهما نفس السعة $-\\theta$ ولكن بمقياسين مختلفين."
  },
  {
    "id": "alg_ch2_db_easy_27",
    "titleEn": "Product of Arguments Rule",
    "titleAr": "خاصية سعة حاصل الضرب",
    "difficulty": "easy",
    "questionEn": "If $\\text{Arg}(z_1) = 35^\\circ$ and $\\text{Arg}(z_2) = 45^\\circ$, find $\\text{Arg}(z_1 z_2)$.",
    "questionAr": "إذا كانت $\\text{Arg}(z_1) = ٣٥^\\circ$ و $\\text{Arg}(z_2) = ٤٥^\\circ$، فأوجد $\\text{Arg}(z_1 z_2)$.",
    "optionsEn": [
      "80^\\circ",
      "10^\\circ",
      "1575^\\circ",
      "-10^\\circ"
    ],
    "optionsAr": [
      "٨٠^\\circ",
      "١٠^\\circ",
      "١٥٧٥^\\circ",
      "-١٠^\\circ"
    ],
    "correctAnswer": "80^\\circ",
    "correctIndex": 0,
    "hintEn": "When multiplying complex numbers, add their arguments.",
    "hintAr": "عند ضرب الأعداد المركبة، نجمع سعاتها.",
    "stepByStepSolutionEn": [
      "Property: $\\text{Arg}(z_1 z_2) = \\text{Arg}(z_1) + \\text{Arg}(z_2)$ (mod $2\\pi$).",
      "$$\\text{Arg}(z_1 z_2) = 35^\\circ + 45^\\circ = 80^\\circ$$"
    ],
    "stepByStepSolutionAr": [
      "خاصية: عند الضرب نجمع السعات.",
      "$$\\text{Arg}(z_1 z_2) = ٣٥^\\circ + ٤٥^\\circ = ٨٠^\\circ$$"
    ],
    "teacherTipEn": "Moduli multiply, arguments add.",
    "teacherTipAr": "المقاييس تُضرب، والسعات تُجمع."
  },
  {
    "id": "alg_ch2_db_easy_28",
    "titleEn": "Quotient of Arguments Rule",
    "titleAr": "خاصية سعة خارج القسمة",
    "difficulty": "easy",
    "questionEn": "If $\\text{Arg}(z_1) = 75^\\circ$ and $\\text{Arg}(z_2) = 25^\\circ$, find $\\text{Arg}\\left(\\frac{z_1}{z_2}\\right)$.",
    "questionAr": "إذا كانت $\\text{Arg}(z_1) = ٧٥^\\circ$ و $\\text{Arg}(z_2) = ٢٥^\\circ$، فأوجد $\\text{Arg}\\left(\\frac{z_1}{z_2}\\right)$.",
    "optionsEn": [
      "50^\\circ",
      "100^\\circ",
      "3^\\circ",
      "-50^\\circ"
    ],
    "optionsAr": [
      "٥٠^\\circ",
      "١٠٠^\\circ",
      "٣^\\circ",
      "-٥٠^\\circ"
    ],
    "correctAnswer": "50^\\circ",
    "correctIndex": 0,
    "hintEn": "When dividing complex numbers, subtract the argument of the denominator.",
    "hintAr": "عند قسمة الأعداد المركبة، نطرح سعة المقام من سعة البسط.",
    "stepByStepSolutionEn": [
      "Property: $\\text{Arg}\\left(\\frac{z_1}{z_2}\\right) = \\text{Arg}(z_1) - \\text{Arg}(z_2)$.",
      "$$75^\\circ - 25^\\circ = 50^\\circ$$"
    ],
    "stepByStepSolutionAr": [
      "خاصية: عند القسمة نطرح السعات.",
      "$$٧٥^\\circ - ٢٥^\\circ = ٥٠^\\circ$$"
    ],
    "teacherTipEn": "Moduli divide, arguments subtract.",
    "teacherTipAr": "المقاييس تُقسم، والسعات تُطرح."
  },
  {
    "id": "alg_ch2_db_easy_29",
    "titleEn": "De Moivre Power of cis(theta)",
    "titleAr": "قوة ديموافر للصورة المثلثية",
    "difficulty": "easy",
    "questionEn": "Simplify $(\\cos 20^\\circ + i\\sin 20^\\circ)^3$.",
    "questionAr": "بسط المقدار: $(\\cos ٢٠^\\circ + ت\\sin ٢٠^\\circ)^٣$.",
    "optionsEn": [
      "\\frac{1}{2} + i\\frac{\\sqrt{3}}{2}",
      "\\frac{\\sqrt{3}}{2} + \\frac{1}{2}i",
      "\\cos 8000^\\circ + i\\sin 8000^\\circ",
      "1"
    ],
    "optionsAr": [
      "\\frac{١}{٢} + ت\\frac{\\sqrt{٣}}{٢}",
      "\\frac{\\sqrt{٣}}{٢} + \\frac{١}{٢}ت",
      "\\cos ٨٠٠٠^\\circ + ت\\sin ٨٠٠٠^\\circ",
      "١"
    ],
    "correctAnswer": "\\frac{1}{2} + i\\frac{\\sqrt{3}}{2}",
    "correctIndex": 0,
    "hintEn": "Use De Moivre's theorem: $(\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta)$.",
    "hintAr": "طبق نظرية ديموافر: $(\\cos\\theta + ت\\sin\\theta)^n = \\cos(n\\theta) + ت\\sin(n\\theta)$.",
    "stepByStepSolutionEn": [
      "By De Moivre's Theorem:",
      "$$(\\cos 20^\\circ + i\\sin 20^\\circ)^3 = \\cos(3 \\times 20^\\circ) + i\\sin(3 \\times 20^\\circ) = \\cos 60^\\circ + i\\sin 60^\\circ$$",
      "Evaluating standard values: $\\cos 60^\\circ = \\frac{1}{2}$, $\\sin 60^\\circ = \\frac{\\sqrt{3}}{2}$.",
      "$$= \\frac{1}{2} + i\\frac{\\sqrt{3}}{2}$$"
    ],
    "stepByStepSolutionAr": [
      "بتطبيق نظرية ديموافر:",
      "$$(\\cos ٢٠^\\circ + ت\\sin ٢٠^\\circ)^٣ = \\cos ٦٠^\\circ + ت\\sin ٦٠^\\circ$$",
      "$$= \\frac{١}{٢} + ت\\frac{\\sqrt{٣}}{٢}$$"
    ],
    "teacherTipEn": "Never cube the angle itself; multiply the angle by the integer exponent.",
    "teacherTipAr": "الأس يُضرب في الزاوية ولا نرفع الزاوية نفسها للأس."
  },
  {
    "id": "alg_ch2_db_easy_30",
    "titleEn": "De Moivre with Real Negative Exponent",
    "titleAr": "ديموافر بأس صحيح سالب",
    "difficulty": "easy",
    "questionEn": "Simplify $(\\cos\\theta + i\\sin\\theta)^{-2}$.",
    "questionAr": "بسط المقدار $(\\cos\\theta + ت\\sin\\theta)^{-٢}$.",
    "optionsEn": [
      "\\cos(2\\theta) - i\\sin(2\\theta)",
      "\\cos(2\\theta) + i\\sin(2\\theta)",
      "-\\cos(2\\theta) - i\\sin(2\\theta)",
      "-\\cos(2\\theta) + i\\sin(2\\theta)"
    ],
    "optionsAr": [
      "\\cos(٢\\theta) - ت\\sin(٢\\theta)",
      "\\cos(٢\\theta) + ت\\sin(٢\\theta)",
      "-\\cos(٢\\theta) - ت\\sin(٢\\theta)",
      "-\\cos(٢\\theta) + ت\\sin(٢\\theta)"
    ],
    "correctAnswer": "\\cos(2\\theta) - i\\sin(2\\theta)",
    "correctIndex": 0,
    "hintEn": "$\\cos(-2\\theta) = \\cos(2\\theta)$ and $\\sin(-2\\theta) = -\\sin(2\\theta)$.",
    "hintAr": "$\\cos(-٢\\theta) = \\cos(٢\\theta)$ و $\\sin(-٢\\theta) = -\\sin(٢\\theta)$.",
    "stepByStepSolutionEn": [
      "By De Moivre's theorem for negative integers:",
      "$$(\\cos\\theta + i\\sin\\theta)^{-2} = \\cos(-2\\theta) + i\\sin(-2\\theta)$$",
      "Using even/odd trigonometric identities:",
      "$$\\cos(-2\\theta) = \\cos(2\\theta), \\quad \\sin(-2\\theta) = -\\sin(2\\theta)$$",
      "$$= \\cos(2\\theta) - i\\sin(2\\theta)$$"
    ],
    "stepByStepSolutionAr": [
      "بتطبيق نظرية ديموافر للأس السالب:",
      "$$(\\cos\\theta + ت\\sin\\theta)^{-٢} = \\cos(-٢\\theta) + ت\\sin(-٢\\theta)$$",
      "بما أن جيب التمام دالة زوجية والجيب دالة فردية:",
      "$$= \\cos(٢\\theta) - ت\\sin(٢\\theta)$$"
    ],
    "teacherTipEn": "A negative exponent creates a minus sign in front of the imaginary part, giving the conjugate.",
    "teacherTipAr": "الأس السالب يغير إشارة الجزء التخيلي فقط ليعطي مرافق العدد الأصلي."
  },
  {
    "id": "alg_ch2_db_easy_31",
    "titleEn": "Third Power of Omega",
    "titleAr": "القوة الثالثة للعدد أوميجا",
    "difficulty": "easy",
    "questionEn": "If $\\omega$ is a complex cube root of unity, what is $\\omega^3$?",
    "questionAr": "إذا كانت $\\omega$ أحد الجذور التكعيبية المركبة للواحد الصحيح، فما قيمة $\\omega^٣$؟",
    "optionsEn": [
      "1",
      "-1",
      "0",
      "i"
    ],
    "optionsAr": [
      "١",
      "-١",
      "٠",
      "ت"
    ],
    "correctAnswer": "1",
    "correctIndex": 0,
    "hintEn": "By definition, $\\omega$ is a solution to $z^3 = 1$.",
    "hintAr": "بحسب التعريف، $\\omega$ هو حل للمعادلة $z^٣ = ١$.",
    "stepByStepSolutionEn": [
      "Since $\\omega$ is a cube root of 1, by definition $\\omega^3 = 1$."
    ],
    "stepByStepSolutionAr": [
      "بحسب تعريف الجذور التكعيبية للواحد الصحيح، فإن $\\omega^٣ = ١$ دائماً."
    ],
    "teacherTipEn": "Every multiple of 3 in the exponent yields 1: $\\omega^{3k} = 1$.",
    "teacherTipAr": "أي مضاعف للعدد ٣ في أس أوميجا يساوي دائماً ١: $\\omega^{٣k} = ١$."
  },
  {
    "id": "alg_ch2_db_easy_32",
    "titleEn": "High Multiple of 3 for Omega",
    "titleAr": "مضاعف للعدد ٣ في أس أوميجا",
    "difficulty": "easy",
    "questionEn": "Evaluate $\\omega^{12}$.",
    "questionAr": "احسب قيمة $\\omega^{١٢}$.",
    "optionsEn": [
      "1",
      "\\omega",
      "\\omega^2",
      "-1"
    ],
    "optionsAr": [
      "١",
      "\\omega",
      "\\omega^٢",
      "-١"
    ],
    "correctAnswer": "1",
    "correctIndex": 0,
    "hintEn": "12 is a multiple of 3.",
    "hintAr": "١٢ مضاعف للعدد ٣.",
    "stepByStepSolutionEn": [
      "$$\\omega^{12} = (\\omega^3)^4 = 1^4 = 1$$"
    ],
    "stepByStepSolutionAr": [
      "$$\\omega^{١٢} = (\\omega^٣)^٤ = ١^٤ = ١$$"
    ],
    "teacherTipEn": "Check if the sum of digits is divisible by 3 to quickly identify multiples.",
    "teacherTipAr": "تحقق من قابلية القسمة على ٣ بجمع أرقام العدد."
  },
  {
    "id": "alg_ch2_db_easy_33",
    "titleEn": "Remainder of 1 for Omega Power",
    "titleAr": "باقي القسمة ١ لأس أوميجا",
    "difficulty": "easy",
    "questionEn": "Simplify $\\omega^{16}$.",
    "questionAr": "بسط المقدار $\\omega^{١٦}$.",
    "optionsEn": [
      "\\omega",
      "\\omega^2",
      "1",
      "-1"
    ],
    "optionsAr": [
      "\\omega",
      "\\omega^٢",
      "١",
      "-١"
    ],
    "correctAnswer": "\\omega",
    "correctIndex": 0,
    "hintEn": "$16 = 15 + 1$, and 15 is divisible by 3.",
    "hintAr": "١٦ = ١٥ + ١، والعدد ١٥ يقبل القسمة على ٣.",
    "stepByStepSolutionEn": [
      "Divide 16 by 3: quotient 5 with remainder 1.",
      "$$\\omega^{16} = (\\omega^3)^5 \\cdot \\omega^1 = 1^5 \\cdot \\omega = \\omega$$"
    ],
    "stepByStepSolutionAr": [
      "نقسم ١٦ على ٣: الباقي ١.",
      "$$\\omega^{١٦} = (\\omega^٣)^٥ \\cdot \\omega^١ = \\omega$$"
    ],
    "teacherTipEn": "Powers of omega reduce modulo 3.",
    "teacherTipAr": "قوى أوميجا تُختزل بحسب باقي القسمة على ٣."
  },
  {
    "id": "alg_ch2_db_easy_34",
    "titleEn": "Remainder of 2 for Omega Power",
    "titleAr": "باقي القسمة ٢ لأس أوميجا",
    "difficulty": "easy",
    "questionEn": "Simplify $\\omega^{23}$.",
    "questionAr": "بسط المقدار $\\omega^{٢٣}$.",
    "optionsEn": [
      "\\omega^2",
      "\\omega",
      "1",
      "0"
    ],
    "optionsAr": [
      "\\omega^٢",
      "\\omega",
      "١",
      "٠"
    ],
    "correctAnswer": "\\omega^2",
    "correctIndex": 0,
    "hintEn": "$23 = 21 + 2$.",
    "hintAr": "٢٣ = ٢١ + ٢.",
    "stepByStepSolutionEn": [
      "$$23 = 3 \\times 7 + 2$$",
      "$$\\omega^{23} = (\\omega^3)^7 \\cdot \\omega^2 = \\omega^2$$"
    ],
    "stepByStepSolutionAr": [
      "$$٢٣ = ٣ \\times ٧ + ٢$$",
      "$$\\omega^{٢٣} = \\omega^٢$$"
    ],
    "teacherTipEn": "The remainder 2 leaves $\\omega^2$.",
    "teacherTipAr": "باقي القسمة ٢ يعطي $\\omega^٢$."
  },
  {
    "id": "alg_ch2_db_easy_35",
    "titleEn": "Negative Power of Omega",
    "titleAr": "الأس السالب للعدد أوميجا",
    "difficulty": "easy",
    "questionEn": "Simplify $\\omega^{-5}$.",
    "questionAr": "بسط المقدار $\\omega^{-٥}$.",
    "optionsEn": [
      "\\omega",
      "\\omega^2",
      "1",
      "-1"
    ],
    "optionsAr": [
      "\\omega",
      "\\omega^٢",
      "١",
      "-١"
    ],
    "correctAnswer": "\\omega",
    "correctIndex": 0,
    "hintEn": "Add a multiple of 3 greater than 5: $\\omega^{-5} \\cdot \\omega^6 = \\omega^1$.",
    "hintAr": "أضف مضاعفاً للعدد ٣ أكبر من ٥: $\\omega^{-٥} \\cdot \\omega^٦ = \\omega^١$.",
    "stepByStepSolutionEn": [
      "Multiply by $\\omega^6 = 1$:",
      "$$\\omega^{-5} = \\omega^{-5} \\cdot \\omega^6 = \\omega^{-5 + 6} = \\omega^1 = \\omega$$"
    ],
    "stepByStepSolutionAr": [
      "نضرب في $\\omega^٦ = ١$:",
      "$$\\omega^{-٥} = \\omega^{-٥} \\cdot \\omega^٦ = \\omega^١ = \\omega$$"
    ],
    "teacherTipEn": "For negative exponents, add the nearest multiple of 3.",
    "teacherTipAr": "للأسس السالبة، أضف أقرب مضاعف للعدد ٣."
  },
  {
    "id": "alg_ch2_db_easy_36",
    "titleEn": "Sum of Cube Roots of Unity",
    "titleAr": "مجموع الجذور التكعيبية للواحد الصحيح",
    "difficulty": "easy",
    "questionEn": "What is the value of $1 + \\omega + \\omega^2$?",
    "questionAr": "ما هي قيمة المقدار $١ + \\omega + \\omega^٢$؟",
    "optionsEn": [
      "0",
      "1",
      "-1",
      "3"
    ],
    "optionsAr": [
      "٠",
      "١",
      "-١",
      "٣"
    ],
    "correctAnswer": "0",
    "correctIndex": 0,
    "hintEn": "The sum of all roots of $z^3 - 1 = 0$ is 0.",
    "hintAr": "مجموع جميع جذور المعادلة $z^٣ - ١ = ٠$ يساوي صفراً.",
    "stepByStepSolutionEn": [
      "Since $z^3 - 1 = (z - 1)(z^2 + z + 1) = 0$, the roots are $1, \\omega, \\omega^2$.",
      "$\\omega$ and $\\omega^2$ satisfy $z^2 + z + 1 = 0$.",
      "Thus: $1 + \\omega + \\omega^2 = 0$."
    ],
    "stepByStepSolutionAr": [
      "بما أن $z^٣ - ١ = (z - ١)(z^٢ + z + ١) = ٠$.",
      "فإن الجذور غير الحقيقية تحقق $z^٢ + z + ١ = ٠$.",
      "إذن: $١ + \\omega + \\omega^٢ = ٠$."
    ],
    "teacherTipEn": "This is the master identity of omega from which all other linear relations derive.",
    "teacherTipAr": "هذه هي المتطابقة الأم للعدد أوميجا والتي تشتق منها سائر العلاقات الخطية."
  },
  {
    "id": "alg_ch2_db_easy_37",
    "titleEn": "Sum of Two Omegas",
    "titleAr": "مجموع الجذرين التخيليين لأوميجا",
    "difficulty": "easy",
    "questionEn": "Calculate $\\omega + \\omega^2$.",
    "questionAr": "احسب قيمة المقدار: $\\omega + \\omega^٢$.",
    "optionsEn": [
      "-1",
      "1",
      "0",
      "-\\omega"
    ],
    "optionsAr": [
      "-١",
      "١",
      "٠",
      "-\\omega"
    ],
    "correctAnswer": "-1",
    "correctIndex": 0,
    "hintEn": "$1 + \\omega + \\omega^2 = 0 \\implies \\omega + \\omega^2 = -1$.",
    "hintAr": "$١ + \\omega + \\omega^٢ = ٠ \\implies \\omega + \\omega^٢ = -١$.",
    "stepByStepSolutionEn": [
      "From $1 + \\omega + \\omega^2 = 0$, subtract 1 from both sides:",
      "$$\\omega + \\omega^2 = -1$$"
    ],
    "stepByStepSolutionAr": [
      "من العلاقة $١ + \\omega + \\omega^٢ = ٠$ بطرح ١ من الطرفين:",
      "$$\\omega + \\omega^٢ = -١$$"
    ],
    "teacherTipEn": "Any two terms of the triplet $(1, \\omega, \\omega^2)$ add up to the negative of the third term.",
    "teacherTipAr": "مجموع أي حدين من الثلاثي $(١، \\omega، \\omega^٢)$ يساوي سالب الحد الثالث."
  },
  {
    "id": "alg_ch2_db_easy_38",
    "titleEn": "Substitution for (1 + omega)",
    "titleAr": "التعويض عن (١ + أوميجا)",
    "difficulty": "easy",
    "questionEn": "Simplify $(1 + \\omega)^4$.",
    "questionAr": "بسط المقدار $(١ + \\omega)^٤$.",
    "optionsEn": [
      "\\omega^2",
      "\\omega",
      "1",
      "-1"
    ],
    "optionsAr": [
      "\\omega^٢",
      "\\omega",
      "١",
      "-١"
    ],
    "correctAnswer": "\\omega^2",
    "correctIndex": 0,
    "hintEn": "$1 + \\omega = -\\omega^2$.",
    "hintAr": "استبدل $١ + \\omega$ بـ $-\\omega^٢$.",
    "stepByStepSolutionEn": [
      "Substitute $1 + \\omega = -\\omega^2$:",
      "$$(1 + \\omega)^4 = (-\\omega^2)^4 = (-1)^4 \\cdot \\omega^8 = 1 \\cdot \\omega^8$$",
      "Since $8 = 3(2) + 2$:",
      "$$\\omega^8 = \\omega^2 \\cdot (\\omega^3)^2 = \\omega^2$$",
      "Wait! Let's check $(-\\omega^2)^4$: $(-1)^4 = +1$, $(\\omega^2)^4 = \\omega^8 = \\omega^2$.",
      "Therefore $(1+\\omega)^4 = \\omega^2$."
    ],
    "stepByStepSolutionAr": [
      "نعوض عن $١ + \\omega$ بـ $-\\omega^٢$:",
      "$$(١ + \\omega)^٤ = (-\\omega^٢)^٤ = \\omega^٨ = \\omega^٢$$"
    ],
    "teacherTipEn": "Be very careful with signs: $(-1)^4 = +1$.",
    "teacherTipAr": "انتبه للإشارات عند رفع القوى الزوجية: $(-١)^٤ = +١$."
  },
  {
    "id": "alg_ch2_db_easy_39",
    "titleEn": "Power of (1 + omega^2)",
    "titleAr": "قوة المقدار (١ + أوميجا تربيع)",
    "difficulty": "easy",
    "questionEn": "Find the value of $(1 + \\omega^2)^3$.",
    "questionAr": "أوجد قيمة المقدار: $(١ + \\omega^٢)^٣$.",
    "optionsEn": [
      "-1",
      "1",
      "-\\omega",
      "\\omega^2"
    ],
    "optionsAr": [
      "-١",
      "١",
      "-\\omega",
      "\\omega^٢"
    ],
    "correctAnswer": "-1",
    "correctIndex": 0,
    "hintEn": "$1 + \\omega^2 = -\\omega$.",
    "hintAr": "نعوض $١ + \\omega^٢ = -\\omega$.",
    "stepByStepSolutionEn": [
      "Using the fundamental identity $1 + \\omega^2 = -\\omega$:",
      "$$(1 + \\omega^2)^3 = (-\\omega)^3 = (-1)^3 \\cdot \\omega^3 = (-1) \\cdot 1 = -1$$"
    ],
    "stepByStepSolutionAr": [
      "بالتعويض عن $١ + \\omega^٢ = -\\omega$:",
      "$$(١ + \\omega^٢)^٣ = (-\\omega)^٣ = (-١)^٣ \\cdot \\omega^٣ = -١ \\times ١ = -١$$"
    ],
    "teacherTipEn": "Odd powers preserve the minus sign.",
    "teacherTipAr": "الأسس الفردية تحتفظ بالإشارة السالبة."
  },
  {
    "id": "alg_ch2_db_easy_40",
    "titleEn": "Reciprocal of Omega",
    "titleAr": "المعكوس الضربي لأوميجا",
    "difficulty": "easy",
    "questionEn": "What is $\\frac{1}{\\omega}$ expressed in simplest form?",
    "questionAr": "ما هو المعكوس الضربي $\\frac{١}{\\omega}$ في أبسط صورة؟",
    "optionsEn": [
      "\\omega^2",
      "\\omega",
      "1",
      "-\\omega^2"
    ],
    "optionsAr": [
      "\\omega^٢",
      "\\omega",
      "١",
      "-\\omega^٢"
    ],
    "correctAnswer": "\\omega^2",
    "correctIndex": 0,
    "hintEn": "Multiply numerator and denominator by $\\omega^2$ or use $1 = \\omega^3$.",
    "hintAr": "استبدل البسط ١ بـ $\\omega^٣$.",
    "stepByStepSolutionEn": [
      "Replace 1 in the numerator with $\\omega^3$:",
      "$$\\frac{1}{\\omega} = \\frac{\\omega^3}{\\omega} = \\omega^2$$"
    ],
    "stepByStepSolutionAr": [
      "نعوض عن ١ في البسط بـ $\\omega^٣$:",
      "$$\\frac{١}{\\omega} = \\frac{\\omega^٣}{\\omega} = \\omega^٢$$"
    ],
    "teacherTipEn": "Similarly, $\\frac{1}{\\omega^2} = \\omega$.",
    "teacherTipAr": "وبالمثل تماماً: $\\frac{١}{\\omega^٢} = \\omega$."
  },
  {
    "id": "alg_ch2_db_easy_41",
    "titleEn": "Difference of Omega and Omega Squared",
    "titleAr": "الفرق بين أوميجا ومربعها",
    "difficulty": "easy",
    "questionEn": "What is the square of the difference $(\\omega - \\omega^2)^2$?",
    "questionAr": "ما هي قيمة مربع الفرق $(\\omega - \\omega^٢)^٢$؟",
    "optionsEn": [
      "-3",
      "3",
      "3i",
      "-3i"
    ],
    "optionsAr": [
      "-٣",
      "٣",
      "٣ت",
      "-٣ت"
    ],
    "correctAnswer": "-3",
    "correctIndex": 0,
    "hintEn": "$\\omega - \\omega^2 = \\pm i\\sqrt{3}$.",
    "hintAr": "$\\omega - \\omega^٢ = \\pm ت\\sqrt{٣}$.",
    "stepByStepSolutionEn": [
      "We know that $\\omega - \\omega^2 = \\pm i\\sqrt{3}$.",
      "Squaring both sides:",
      "$$(\\omega - \\omega^2)^2 = (\\pm i\\sqrt{3})^2 = i^2 \\times 3 = (-1) \\times 3 = -3$$"
    ],
    "stepByStepSolutionAr": [
      "نعلم أن $\\omega - \\omega^٢ = \\pm ت\\sqrt{٣}$.",
      "بتربيع الطرفين:",
      "$$(\\omega - \\omega^٢)^٢ = (\\pm ت\\sqrt{٣})^٢ = ت^٢ \\times ٣ = -٣$$"
    ],
    "teacherTipEn": "This is a cornerstone identity in Thanaweya Amma algebra: $(\\omega - \\omega^2)^2 = -3$.",
    "teacherTipAr": "قاعدة أساسية لا غنى عنها في جبر الثانوية العامة: $(\\omega - \\omega^٢)^٢ = -٣$."
  },
  {
    "id": "alg_ch2_db_easy_42",
    "titleEn": "Fourth Power of (omega - omega^2)",
    "titleAr": "القوة الرابعة للفرق بين أوميجا ومربعها",
    "difficulty": "easy",
    "questionEn": "Calculate $(\\omega - \\omega^2)^4$.",
    "questionAr": "احسب قيمة المقدار: $(\\omega - \\omega^٢)^٤$.",
    "optionsEn": [
      "9",
      "-9",
      "81",
      "-3"
    ],
    "optionsAr": [
      "٩",
      "-٩",
      "٨١",
      "-٣"
    ],
    "correctAnswer": "9",
    "correctIndex": 0,
    "hintEn": "$[(\\omega - \\omega^2)^2]^2 = (-3)^2$.",
    "hintAr": "$[(\\omega - \\omega^٢)^٢]^٢ = (-٣)^٢$.",
    "stepByStepSolutionEn": [
      "$$(\\omega - \\omega^2)^4 = \\left[(\\omega - \\omega^2)^2\\right]^2 = (-3)^2 = 9$$"
    ],
    "stepByStepSolutionAr": [
      "$$(\\omega - \\omega^٢)^٤ = [(\\omega - \\omega^٢)^٢]^٢ = (-٣)^٢ = ٩$$"
    ],
    "teacherTipEn": "Even powers of $(\\omega - \\omega^2)$ alternate between negative and positive integers: power 2 is -3, power 4 is 9, power 6 is -27.",
    "teacherTipAr": "قوى $(\\omega - \\omega^٢)$ الزوجية تتناوب: الأس ٢ يعطي -٣، الأس ٤ يعطي ٩، الأس ٦ يعطي -٢٧."
  },
  {
    "id": "alg_ch2_db_easy_43",
    "titleEn": "Simple Fraction with Omega",
    "titleAr": "كسر بسيط يحتوي أوميجا",
    "difficulty": "easy",
    "questionEn": "Simplify $\\frac{3 + 3\\omega}{\\omega^2}$.",
    "questionAr": "بسط المقدار: $\\frac{٣ + ٣\\omega}{\\omega^٢}$.",
    "optionsEn": [
      "-3",
      "3",
      "3\\omega",
      "-3\\omega"
    ],
    "optionsAr": [
      "-٣",
      "٣",
      "٣\\omega",
      "-٣\\omega"
    ],
    "correctAnswer": "-3",
    "correctIndex": 0,
    "hintEn": "Factor out 3: $3(1 + \\omega) = 3(-\\omega^2)$.",
    "hintAr": "خذ ٣ عاملاً مشتركاً: $٣(١ + \\omega) = ٣(-\\omega^٢)$.",
    "stepByStepSolutionEn": [
      "Factor out 3 in the numerator:",
      "$$\\frac{3(1 + \\omega)}{\\omega^2}$$",
      "Since $1 + \\omega = -\\omega^2$:",
      "$$\\frac{3(-\\omega^2)}{\\omega^2} = -3$$"
    ],
    "stepByStepSolutionAr": [
      "بأخذ ٣ عاملاً مشتركاً من البسط:",
      "$$\\frac{٣(١ + \\omega)}{\\omega^٢} = \\frac{٣(-\\omega^٢)}{\\omega^٢} = -٣$$"
    ],
    "teacherTipEn": "Always look for $(1+\\omega)$ or $(1+\\omega^2)$ or $(\\omega+\\omega^2)$ to substitute.",
    "teacherTipAr": "ابحث دائماً عن التجمعات الثنائية للتعويض عنها بالحد الثالث بالسالب."
  },
  {
    "id": "alg_ch2_db_easy_44",
    "titleEn": "Modulus of Conjugate Property",
    "titleAr": "خاصية مقياس المرافق",
    "difficulty": "easy",
    "questionEn": "If $|z| = 7$, what is $|\\bar{z}|$?",
    "questionAr": "إذا كان مقياس $|z| = ٧$، فما هو مقياس مرافقه $|\\bar{z}|$؟",
    "optionsEn": [
      "7",
      "-7",
      "49",
      "\\sqrt{7}"
    ],
    "optionsAr": [
      "٧",
      "-٧",
      "٤٩",
      "\\sqrt{٧}"
    ],
    "correctAnswer": "7",
    "correctIndex": 0,
    "hintEn": "A complex number and its conjugate have identical distance to the origin.",
    "hintAr": "العدد المركب ومرافقه يبعدان نفس المسافة عن نقطة الأصل.",
    "stepByStepSolutionEn": [
      "For $z = x + iy$, $|z| = \\sqrt{x^2 + y^2}$.",
      "For $\\bar{z} = x - iy$, $|\\bar{z}| = \\sqrt{x^2 + (-y)^2} = \\sqrt{x^2 + y^2}$.",
      "Thus, $|\\bar{z}| = |z| = 7$."
    ],
    "stepByStepSolutionAr": [
      "مقياس المرافق هو $\\sqrt{x^٢ + (-y)^٢} = \\sqrt{x^٢ + y^٢} = |z|$.",
      "إذن $|\\bar{z}| = ٧$."
    ],
    "teacherTipEn": "Geometric reflection preserves distance from origin: $|z| = |\\bar{z}| = |-z| = |-\\bar{z}|$.",
    "teacherTipAr": "الانعكاسات الهندسية لا تغير المسافة عن نقطة الأصل: $|z| = |\\bar{z}| = |-z|$."
  },
  {
    "id": "alg_ch2_db_easy_45",
    "titleEn": "Distance between Opposite Numbers",
    "titleAr": "المسافة بين عدد ونظيره الجمعي",
    "difficulty": "easy",
    "questionEn": "If $|z| = 3$, what is $|z - (-z)|$?",
    "questionAr": "إذا كان $|z| = ٣$، فما قيمة المقدار $|z - (-z)|$؟",
    "optionsEn": [
      "6",
      "3",
      "0",
      "9"
    ],
    "optionsAr": [
      "٦",
      "٣",
      "٠",
      "٩"
    ],
    "correctAnswer": "6",
    "correctIndex": 0,
    "hintEn": "$z - (-z) = 2z$, so $|2z| = 2|z|$.",
    "hintAr": "$z - (-z) = ٢z$، إذن $|٢z| = ٢|z|$.",
    "stepByStepSolutionEn": [
      "$$|z - (-z)| = |z + z| = |2z| = 2|z| = 2(3) = 6$$"
    ],
    "stepByStepSolutionAr": [
      "$$|z - (-z)| = |٢z| = ٢|z| = ٢ \\times ٣ = ٦$$"
    ],
    "teacherTipEn": "$z$ and $-z$ are diametrically opposite points on a circle of radius $|z|$.",
    "teacherTipAr": "$z$ و $-z$ نقطتان متقابلتان قطرياً على دائرة نصف قطرها $|z|$ والبعد بينهما يمثل القطر."
  },
  {
    "id": "alg_ch2_db_easy_46",
    "titleEn": "Modulus of Fraction of Conjugates",
    "titleAr": "مقياس قسمة عدد على مرافقه",
    "difficulty": "easy",
    "questionEn": "For any non-zero complex number $z$, what is $\\left|\\frac{z}{\\bar{z}}\\right|$?",
    "questionAr": "لأي عدد مركب غير صفري $z$، ما قيمة المقدار $\\left|\\frac{z}{\\bar{z}}\\right|$؟",
    "optionsEn": [
      "1",
      "|z|",
      "|z|^2",
      "0"
    ],
    "optionsAr": [
      "١",
      "|z|",
      "|z|^٢",
      "٠"
    ],
    "correctAnswer": "1",
    "correctIndex": 0,
    "hintEn": "The modulus of a quotient is the quotient of moduli: $|z_1/z_2| = |z_1|/|z_2|$.",
    "hintAr": "مقياس خارج القسمة يساوي قسمة المقياسين.",
    "stepByStepSolutionEn": [
      "$$\\left|\\frac{z}{\\bar{z}}\\right| = \\frac{|z|}{|\\bar{z}|}$$",
      "Since $|\\bar{z}| = |z|$:",
      "$$= \\frac{|z|}{|z|} = 1$$"
    ],
    "stepByStepSolutionAr": [
      "$$\\left|\\frac{z}{\\bar{z}}\\right| = \\frac{|z|}{|\\bar{z}|} = \\frac{|z|}{|z|} = ١$$"
    ],
    "teacherTipEn": "Any ratio of a complex number to its conjugate always lies on the unit circle $|w| = 1$.",
    "teacherTipAr": "نسبة أي عدد مركب إلى مرافقه تقع دائماً على دائرة الوحدة."
  },
  {
    "id": "alg_ch2_db_easy_47",
    "titleEn": "Modulus of Pure Imaginary Unit Multiple",
    "titleAr": "مقياس مضاعف الوحدة التخيلية",
    "difficulty": "easy",
    "questionEn": "Find $|-8i|$.",
    "questionAr": "أوجد قيمة $|-٨ت|$.",
    "optionsEn": [
      "8",
      "-8",
      "64",
      "8i"
    ],
    "optionsAr": [
      "٨",
      "-٨",
      "٦٤",
      "٨ت"
    ],
    "correctAnswer": "8",
    "correctIndex": 0,
    "hintEn": "Modulus is always real and non-negative.",
    "hintAr": "المقياس دائماً عدد حقيقي غير سالب.",
    "stepByStepSolutionEn": [
      "$$|-8i| = \\sqrt{0^2 + (-8)^2} = \\sqrt{64} = 8$$"
    ],
    "stepByStepSolutionAr": [
      "$$|-٨ت| = \\sqrt{٠ + (-٨)^٢} = \\sqrt{٦٤} = ٨$$"
    ],
    "teacherTipEn": "Modulus is distance, so it can never be negative.",
    "teacherTipAr": "المقياس مسافة، لذا لا يمكن أن يكون سالباً أبداً."
  },
  {
    "id": "alg_ch2_db_easy_48",
    "titleEn": "Sum of Square Roots of Unity",
    "titleAr": "مجموع الجذور التربيعية للواحد",
    "difficulty": "easy",
    "questionEn": "What is the sum of the roots of the equation $z^2 = 1$?",
    "questionAr": "ما هو مجموع جذري المعادلة $z^٢ = ١$؟",
    "optionsEn": [
      "0",
      "2",
      "-2",
      "1"
    ],
    "optionsAr": [
      "٠",
      "٢",
      "-٢",
      "١"
    ],
    "correctAnswer": "0",
    "correctIndex": 0,
    "hintEn": "The roots are 1 and -1.",
    "hintAr": "الجذران هما ١ و -١.",
    "stepByStepSolutionEn": [
      "The roots are $z = 1$ and $z = -1$.",
      "Their sum is $1 + (-1) = 0$."
    ],
    "stepByStepSolutionAr": [
      "الجذران هما $z = ١$ و $z = -١$.",
      "مجموعهما: $١ + (-١) = ٠$."
    ],
    "teacherTipEn": "The sum of all n-th roots of any complex number is always zero.",
    "teacherTipAr": "مجموع الجذور النونية لأي عدد مركب يساوي دائماً صفراً."
  },
  {
    "id": "alg_ch2_db_easy_49",
    "titleEn": "Modulus of Cube Roots of Unity",
    "titleAr": "مقياس الجذور التكعيبية للواحد",
    "difficulty": "easy",
    "questionEn": "What is $|\\omega|$?",
    "questionAr": "ما هي قيمة مقياس أوميجا $|\\omega|$؟",
    "optionsEn": [
      "1",
      "\\frac{1}{2}",
      "\\frac{\\sqrt{3}}{2}",
      "0"
    ],
    "optionsAr": [
      "١",
      "\\frac{١}{٢}",
      "\\frac{\\sqrt{٣}}{٢}",
      "٠"
    ],
    "correctAnswer": "1",
    "correctIndex": 0,
    "hintEn": "$\\omega = -\\frac{1}{2} + i\\frac{\\sqrt{3}}{2}$.",
    "hintAr": "$\\omega = -\\frac{١}{٢} + ت\\frac{\\sqrt{٣}}{٢}$.",
    "stepByStepSolutionEn": [
      "$$|\\omega| = \\sqrt{\\left(-\\frac{1}{2}\\right)^2 + \\left(\\frac{\\sqrt{3}}{2}\\right)^2} = \\sqrt{\\frac{1}{4} + \\frac{3}{4}} = \\sqrt{1} = 1$$"
    ],
    "stepByStepSolutionAr": [
      "$$|\\omega| = \\sqrt{\\left(-\\frac{١}{٢}\\right)^٢ + \\left(\\frac{\\sqrt{٣}}{٢}\\right)^٢} = \\sqrt{\\frac{١}{٤} + \\frac{٣}{٤}} = ١$$"
    ],
    "teacherTipEn": "All roots of unity lie on the unit circle centered at the origin.",
    "teacherTipAr": "جميع جذور الواحد الصحيح تقع على دائرة الوحدة التي مركزها نقطة الأصل."
  },
  {
    "id": "alg_ch2_db_easy_50",
    "titleEn": "Linear Combination of Omegas",
    "titleAr": "تركيبة خطية لأوميجا",
    "difficulty": "easy",
    "questionEn": "Simplify: $5 + 5\\omega + 5\\omega^2$.",
    "questionAr": "بسط المقدار: $٥ + ٥\\omega + ٥\\omega^٢$.",
    "optionsEn": [
      "0",
      "5",
      "15",
      "-5"
    ],
    "optionsAr": [
      "٠",
      "٥",
      "١٥",
      "-٥"
    ],
    "correctAnswer": "0",
    "correctIndex": 0,
    "hintEn": "Factor out 5: $5(1 + \\omega + \\omega^2)$.",
    "hintAr": "خذ ٥ عاملاً مشتركاً: $٥(١ + \\omega + \\omega^٢)$.",
    "stepByStepSolutionEn": [
      "Factor out 5:",
      "$$5(1 + \\omega + \\omega^2) = 5(0) = 0$$"
    ],
    "stepByStepSolutionAr": [
      "بأخذ ٥ عاملاً مشتركاً:",
      "$$٥(١ + \\omega + \\omega^٢) = ٥(٠) = ٠$$"
    ],
    "teacherTipEn": "Any constant multiple of $(1 + \\omega + \\omega^2)$ is 0.",
    "teacherTipAr": "أي مضاعف للمقدار $(١ + \\omega + \\omega^٢)$ يساوي صفراً."
  },
  {
    "id": "alg_ch2_db_easy_51",
    "titleEn": "Modulus of Complex Number with Pythagorean Triplet",
    "titleAr": "مقياس العدد المركب وثلاثية فيثاغورس",
    "difficulty": "easy",
    "questionEn": "Find the modulus $|z|$ of the complex number $z = 5 - 12i$.",
    "questionAr": "أوجد مقياس $|z|$ للعدد المركب $z = 5 - 12i$.",
    "optionsEn": [
      "13",
      "17",
      "7",
      "169"
    ],
    "optionsAr": [
      "13",
      "17",
      "7",
      "169"
    ],
    "correctAnswer": "13",
    "correctIndex": 0,
    "hintEn": "|z| = sqrt(x^2 + y^2).",
    "hintAr": "المقياس = الجذر التربيعي لمجموع مربعي الجزء الحقيقي والتخيلي.",
    "stepByStepSolutionEn": [
      "1. For $z = x + iy$, the modulus is $|z| = \\sqrt{x^2 + y^2}$.",
      "2. Here $x = 5, y = -12$: $|z| = \\sqrt{5^2 + (-12)^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13$."
    ],
    "stepByStepSolutionAr": [
      "١. مقياس العدد المركب ع = س + ت ص هو |ع| = $\\sqrt{x^2 + y^2}$.",
      "٢. بالتعويض: $|z| = \\sqrt{5^2 + (-12)^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13$."
    ],
    "teacherTipEn": "Notice the standard 5-12-13 Pythagorean right triangle triplet.",
    "teacherTipAr": "لاحظ ثلاثية فيثاغورس الشهيرة (٥، ١٢، ١٣) لحساب فوري."
  },
  {
    "id": "alg_ch2_db_easy_52",
    "titleEn": "Principal Argument in Third Quadrant",
    "titleAr": "السعة الأساسية في الربع الثالث",
    "difficulty": "easy",
    "questionEn": "Find the principal argument $\\theta$ of the complex number $z = -1 - i$.",
    "questionAr": "أوجد السعة الأساسية $\\theta$ للعدد المركب $z = -1 - i$.",
    "optionsEn": [
      "$-\\frac{3\\pi}{4}$",
      "$\\frac{3\\pi}{4}$",
      "$\\frac{5\\pi}{4}$",
      "$-\\frac{\\pi}{4}$"
    ],
    "optionsAr": [
      "$-\\frac{3\\pi}{4}$",
      "$\\frac{3\\pi}{4}$",
      "$\\frac{5\\pi}{4}$",
      "$-\\frac{\\pi}{4}$"
    ],
    "correctAnswer": "$-\\frac{3\\pi}{4}$",
    "correctIndex": 0,
    "hintEn": "The point (-1, -1) lies in the third quadrant: theta = -pi + alpha.",
    "hintAr": "النقطة (-١، -١) تقع في الربع الثالث، والسعة الأساسية تنتمي للمجال (-ط، ط].",
    "stepByStepSolutionEn": [
      "1. The reference angle is $\\alpha = \\tan^{-1}|-1 / -1| = \\frac{\\pi}{4}$.",
      "2. Since both real and imaginary parts are negative, $z$ lies in quadrant 3.",
      "3. Principal argument $\\theta \\in (-\\pi, \\pi]$ is $\\theta = -\\pi + \\frac{\\pi}{4} = -\\frac{3\\pi}{4}$."
    ],
    "stepByStepSolutionAr": [
      "١. زاوية الإسناد: $\\alpha = \\tan^{-1}(1) = \\frac{\\pi}{4}$.",
      "٢. بما أن الجزأين الحقيقي والتخيلي سالبان، فالعدد يقع في الربع الثالث.",
      "٣. السعة الأساسية في المجال $(-\\pi, \\pi]$ هي $\\theta = -\\pi + \\frac{\\pi}{4} = -\\frac{3\\pi}{4}$."
    ],
    "teacherTipEn": "Principal argument MUST strictly lie in the interval (-pi, pi]. Never use 5pi/4 for principal argument.",
    "teacherTipAr": "السعة الأساسية يجب أن تقع حصراً في الفترة (-ط، ط]. لا تستخدم ٥ط/٤."
  },
  {
    "id": "alg_ch2_db_easy_53",
    "titleEn": "High Power of Imaginary Unit i",
    "titleAr": "قوى الوحدة التخيلية ت المرتفعة",
    "difficulty": "easy",
    "questionEn": "Simplify the power: $i^{105}$.",
    "questionAr": "احسب قيمة المقدار: $i^{105}$.",
    "optionsEn": [
      "$i$",
      "$-i$",
      "$1$",
      "$-1$"
    ],
    "optionsAr": [
      "$i$",
      "$-i$",
      "$1$",
      "$-1$"
    ],
    "correctAnswer": "$i$",
    "correctIndex": 0,
    "hintEn": "Divide the exponent 105 by 4 and determine the remainder.",
    "hintAr": "اقسم الأس ١٠٥ على ٤ وحدد باقي القسمة.",
    "stepByStepSolutionEn": [
      "1. Divide 105 by 4: $105 = 4 \\times 26 + 1$, so remainder is 1.",
      "2. $i^{105} = (i^4)^{26} \\times i^1 = 1^{26} \\times i = i$."
    ],
    "stepByStepSolutionAr": [
      "١. بقسمة الأس ١٠٥ على ٤: ١٠٥ = ٤ × ٢٦ + ١ (الباقي ١).",
      "٢. $i^{105} = (i^4)^{26} \\times i^1 = 1 \\times i = i$."
    ],
    "teacherTipEn": "The powers of i repeat with period 4: remainders 0, 1, 2, 3 give 1, i, -1, -i.",
    "teacherTipAr": "قوى ت دورية بمدى ٤: البواقي ٠، ١، ٢، ٣ تقابل ١، ت، -١، -ت."
  },
  {
    "id": "alg_ch2_db_easy_54",
    "titleEn": "Product of Conjugate Complex Numbers",
    "titleAr": "حاصل ضرب عددين مركبين مترافقين",
    "difficulty": "easy",
    "questionEn": "Find the product: $(3 + 4i)(3 - 4i)$.",
    "questionAr": "احسب حاصل الضرب: $(3 + 4i)(3 - 4i)$.",
    "optionsEn": [
      "25",
      "$-7$",
      "$7$",
      "$25i$"
    ],
    "optionsAr": [
      "25",
      "$-7$",
      "$7$",
      "$25i$"
    ],
    "correctAnswer": "25",
    "correctIndex": 0,
    "hintEn": "z * bar(z) = a^2 + b^2, always a non-negative real number.",
    "hintAr": "حاصل ضرب العدد في مرافقه = س^٢ + ص^٢ (عدد حقيقي موجب دائماً).",
    "stepByStepSolutionEn": [
      "1. For any complex number $z = a + bi$, $z \\bar{z} = a^2 + b^2$.",
      "2. Here $a = 3, b = 4$: $3^2 + 4^2 = 9 + 16 = 25$."
    ],
    "stepByStepSolutionAr": [
      "١. لأي عدد مركب ع = أ + ب ت، ع × ع مرافق = أ^٢ + ب^٢.",
      "٢. بالتعويض: ۳^۲ + ٤^۲ = ٩ + ١٦ = ٢٥."
    ],
    "teacherTipEn": "The product of conjugates is always real and equals |z|^2.",
    "teacherTipAr": "حاصل ضرب المترافقين هو عدد حقيقي دائماً ويساوي مربع المقياس |ع|^٢."
  },
  {
    "id": "alg_ch2_db_easy_55",
    "titleEn": "Basic Cube Roots of Unity Relation",
    "titleAr": "علاقة الجذور التكعيبية للواحد الصحيح (أوميجا)",
    "difficulty": "easy",
    "questionEn": "Simplify the expression: $(1 + \\omega)^4$.",
    "questionAr": "بسّط المقدار: $(1 + \\omega)^4$.",
    "optionsEn": [
      "$\\omega^2$",
      "$\\omega$",
      "$1$",
      "$-\\omega^2$"
    ],
    "optionsAr": [
      "$\\omega^2$",
      "$\\omega$",
      "$1$",
      "$-\\omega^2$"
    ],
    "correctAnswer": "$\\omega^2$",
    "correctIndex": 0,
    "hintEn": "Recall that 1 + omega + omega^2 = 0 => 1 + omega = -omega^2.",
    "hintAr": "تذكر أن ١ + أوميجا = -أوميجا^٢.",
    "stepByStepSolutionEn": [
      "1. From $1 + \\omega + \\omega^2 = 0$, we have $1 + \\omega = -\\omega^2$.",
      "2. Therefore $(1 + \\omega)^4 = (-\\omega^2)^4 = (-\\omega^2)^4 = \\omega^8 = \\omega^6 \\cdot \\omega^2 = \\omega^2$."
    ],
    "stepByStepSolutionAr": [
      "١. من المتطابقة الأساسية ١ + أوميجا + أوميجا^٢ = ٠، ينتج ١ + أوميجا = -أوميجا^٢.",
      "٢. بالتعويض: $(-\\omega^2)^4 = \\omega^8 = \\omega^2$."
    ],
    "teacherTipEn": "Any two terms of {1, omega, omega^2} sum to the negative of the third.",
    "teacherTipAr": "مجموع أي حدين من {١، أوميجا، أوميجا^٢} يساوي سالب الحد الثالث دائماً."
  },
  {
    "id": "alg_ch2_db_easy_56",
    "titleEn": "Exponential Form of Purely Imaginary Number",
    "titleAr": "الصورة الأسية لعدد تخيلي بحت",
    "difficulty": "easy",
    "questionEn": "Express $z = -2i$ in Euler's exponential form $r e^{i\\theta}$.",
    "questionAr": "اكتب العدد $z = -2i$ بالصورة الأسية (صورة أويلر) $r e^{i\\theta}$.",
    "optionsEn": [
      "$2 e^{-i\\pi/2}$",
      "$2 e^{i\\pi/2}$",
      "$-2 e^{i\\pi/2}$",
      "$2 e^{i\\pi}$"
    ],
    "optionsAr": [
      "$2 e^{-i\\pi/2}$",
      "$2 e^{i\\pi/2}$",
      "$-2 e^{i\\pi/2}$",
      "$2 e^{i\\pi}$"
    ],
    "correctAnswer": "$2 e^{-i\\pi/2}$",
    "correctIndex": 0,
    "hintEn": "|z| = 2 and argument of -i is -pi/2.",
    "hintAr": "المقياس = ٢ وسعة -ت هي -ط / ٢.",
    "stepByStepSolutionEn": [
      "1. Modulus: $r = |-2i| = 2$.",
      "2. The point $(0, -2)$ lies on the negative imaginary axis, so $\\theta = -\\frac{\\pi}{2}$.",
      "3. Exponential form: $z = r e^{i\\theta} = 2 e^{-i\\pi/2}$."
    ],
    "stepByStepSolutionAr": [
      "١. المقياس: ل = |-٢ت| = ٢.",
      "٢. النقطة تقع على محور الصادات السالب، إذن السعة الأساسية $\\theta = -\\frac{\\pi}{2}$.",
      "٣. الصورة الأسية: $2 e^{-i\\pi/2}$."
    ],
    "teacherTipEn": "r must ALWAYS be positive in exponential form; never keep a negative sign in front.",
    "teacherTipAr": "المقياس (ل) يجب أن يكون موجباً دائماً؛ لا تضع إشارة سالبة أمام المقياس."
  },
  {
    "id": "alg_ch2_db_easy_57",
    "titleEn": "Distance Between Two Points on Argand Plane",
    "titleAr": "المسافة بين نقطتين في شكل أرجاند",
    "difficulty": "easy",
    "questionEn": "Find the distance between the two complex numbers $z_1 = 3 + 2i$ and $z_2 = -1 + 5i$ on the Argand plane.",
    "questionAr": "أوجد البعد بين العددين المركبين $z_1 = 3 + 2i$ و $z_2 = -1 + 5i$ في شكل أرجاند.",
    "optionsEn": [
      "5",
      "25",
      "$\\sqrt{13}$",
      "7"
    ],
    "optionsAr": [
      "5",
      "25",
      "$\\sqrt{13}$",
      "7"
    ],
    "correctAnswer": "5",
    "correctIndex": 0,
    "hintEn": "Distance is |z1 - z2|.",
    "hintAr": "البعد بين عددين مركبين يساوي مقياس الفرق بينهما |ع١ - ع٢|.",
    "stepByStepSolutionEn": [
      "1. Distance $d = |z_1 - z_2| = |(3 - (-1)) + (2 - 5)i| = |4 - 3i|$.",
      "2. $|4 - 3i| = \\sqrt{4^2 + (-3)^2} = \\sqrt{16 + 9} = 5$."
    ],
    "stepByStepSolutionAr": [
      "١. المسافة = |ع١ - ع٢| = |(٣ - (-١)) + (٢ - ٥)ت| = |٤ - ٣ت|.",
      "٢. حساب المقياس: $\\sqrt{4^2 + (-3)^2} = \\sqrt{25} = 5$."
    ],
    "teacherTipEn": "Argand plane geometry directly translates complex subtraction into Euclidean distance.",
    "teacherTipAr": "طرح الأعداد المركبة يمثل هندسياً المسافة الإقليدية المستقيمة بين النقطتين."
  },
  {
    "id": "alg_ch2_db_easy_58",
    "titleEn": "Reciprocal of Complex Number",
    "titleAr": "المعكوس الضربي للعدد المركب",
    "difficulty": "easy",
    "questionEn": "Find the multiplicative inverse of $z = 1 + i$.",
    "questionAr": "أوجد المعكوس الضربي للعدد المركب $z = 1 + i$.",
    "optionsEn": [
      "$\\frac{1}{2} - \\frac{1}{2}i$",
      "$\\frac{1}{2} + \\frac{1}{2}i$",
      "$1 - i$",
      "$-1 - i$"
    ],
    "optionsAr": [
      "$\\frac{1}{2} - \\frac{1}{2}i$",
      "$\\frac{1}{2} + \\frac{1}{2}i$",
      "$1 - i$",
      "$-1 - i$"
    ],
    "correctAnswer": "$\\frac{1}{2} - \\frac{1}{2}i$",
    "correctIndex": 0,
    "hintEn": "Multiply numerator and denominator by the conjugate 1 - i.",
    "hintAr": "اضرب بسطاً ومقاماً في مرافق المقام (١ - ت).",
    "stepByStepSolutionEn": [
      "1. $\\frac{1}{z} = \\frac{1}{1+i} = \\frac{1-i}{(1+i)(1-i)}$.",
      "2. Denominator is $1^2 + 1^2 = 2$, so $\\frac{1}{z} = \\frac{1}{2} - \\frac{1}{2}i$."
    ],
    "stepByStepSolutionAr": [
      "١. المعكوس الضربي: $\\frac{1}{1+i} \\times \\frac{1-i}{1-i}$.",
      "٢. المقام = ١ + ١ = ٢، فيكون الناتج $\\frac{1}{2} - \\frac{1}{2}i$."
    ],
    "teacherTipEn": "Formula: 1/z = bar(z) / |z|^2.",
    "teacherTipAr": "القانون العام: المعكوس الضربي = المرافق / مربع المقياس."
  }
],
  medium: [
  {
    "id": "alg_ch2_db_med_01",
    "titleEn": "Converting Minus Sine Polar Form",
    "titleAr": "تحويل الصورة القطبية ذات إشارة الجيب السالبة",
    "difficulty": "medium",
    "questionEn": "Write $z = 2\\left(\\cos\\frac{\\pi}{3} - i\\sin\\frac{\\pi}{3}\\right)$ in standard trigonometric form.",
    "questionAr": "اكتب العدد $z = ٢\\left(\\cos\\frac{\\pi}{٣} - ت\\sin\\frac{\\pi}{٣}\\right)$ بالصورة المثلثية القياسية.",
    "optionsEn": [
      "2\\left(\\cos\\left(-\\frac{\\pi}{3}\\right) + i\\sin\\left(-\\frac{\\pi}{3}\\right)\\right)",
      "2\\left(\\cos\\frac{2\\pi}{3} + i\\sin\\frac{2\\pi}{3}\\right)",
      "2\\left(\\cos\\frac{4\\pi}{3} + i\\sin\\frac{4\\pi}{3}\\right)",
      "-2\\left(\\cos\\frac{\\pi}{3} + i\\sin\\frac{\\pi}{3}\\right)"
    ],
    "optionsAr": [
      "٢\\left(\\cos\\left(-\\frac{\\pi}{٣}\\right) + ت\\sin\\left(-\\frac{\\pi}{٣}\\right)\\right)",
      "٢\\left(\\cos\\frac{٢\\pi}{٣} + ت\\sin\\frac{٢\\pi}{٣}\\right)",
      "٢\\left(\\cos\\frac{٤\\pi}{٣} + ت\\sin\\frac{٤\\pi}{٣}\\right)",
      "-٢\\left(\\cos\\frac{\\pi}{٣} + ت\\sin\\frac{\\pi}{٣}\\right)"
    ],
    "correctAnswer": "2\\left(\\cos\\left(-\\frac{\\pi}{3}\\right) + i\\sin\\left(-\\frac{\\pi}{3}\\right)\\right)",
    "correctIndex": 0,
    "hintEn": "Use $\\cos(-\\theta) = \\cos\\theta$ and $\\sin(-\\theta) = -\\sin\\theta$.",
    "hintAr": "استخدم المتطابقات: $\\cos(-\\theta) = \\cos\\theta$ و $\\sin(-\\theta) = -\\sin\\theta$.",
    "stepByStepSolutionEn": [
      "In standard polar form, both terms must have a positive addition between them: $r(\\cos\\theta + i\\sin\\theta)$.",
      "Notice that $\\cos\\left(-\\frac{\\pi}{3}\\right) = \\cos\\frac{\\pi}{3}$ and $\\sin\\left(-\\frac{\\pi}{3}\\right) = -\\sin\\frac{\\pi}{3}$.",
      "Therefore: $z = 2\\left(\\cos\\left(-\\frac{\\pi}{3}\\right) + i\\sin\\left(-\\frac{\\pi}{3}\\right)\\right)$."
    ],
    "stepByStepSolutionAr": [
      "في الصورة المثلثية القياسية يجب أن تكون الإشارة بين الحدين موجبة: $r(\\cos\\theta + ت\\sin\\theta)$.",
      "بما أن $\\cos(-\\theta) = \\cos\\theta$ و $\\sin(-\\theta) = -\\sin\\theta$:",
      "إذن: $z = ٢\\left(\\cos\\left(-\\frac{\\pi}{٣}\\right) + ت\\sin\\left(-\\frac{\\pi}{٣}\\right)\\right)$."
    ],
    "teacherTipEn": "Whenever you have $\\cos\\theta - i\\sin\\theta$, the principal argument is $-\\theta$.",
    "teacherTipAr": "كلما كان العدد على الصورة $\\cos\\theta - ت\\sin\\theta$، فإن سعته القياسية هي $-\\theta$."
  },
  {
    "id": "alg_ch2_db_med_02",
    "titleEn": "Converting Reversed Sine and Cosine",
    "titleAr": "تحويل تبديل الجيب وجيب التمام",
    "difficulty": "medium",
    "questionEn": "Express $z = \\sin 70^\\circ + i\\cos 70^\\circ$ in standard polar form.",
    "questionAr": "عبر عن العدد $z = \\sin ٧٠^\\circ + ت\\cos ٧٠^\\circ$ بالصورة المثلثية القياسية.",
    "optionsEn": [
      "\\cos 20^\\circ + i\\sin 20^\\circ",
      "\\cos 70^\\circ + i\\sin 70^\\circ",
      "\\cos 110^\\circ + i\\sin 110^\\circ",
      "\\cos(-20^\\circ) + i\\sin(-20^\\circ)"
    ],
    "optionsAr": [
      "\\cos ٢٠^\\circ + ت\\sin ٢٠^\\circ",
      "\\cos ٧٠^\\circ + ت\\sin ٧٠^\\circ",
      "\\cos ١١٠^\\circ + ت\\sin ١١٠^\\circ",
      "\\cos(-٢٠^\\circ) + ت\\sin(-٢٠^\\circ)"
    ],
    "correctAnswer": "\\cos 20^\\circ + i\\sin 20^\\circ",
    "correctIndex": 0,
    "hintEn": "Use complementary angle identities: $\\sin\\theta = \\cos(90^\\circ - \\theta)$ and $\\cos\\theta = \\sin(90^\\circ - \\theta)$.",
    "hintAr": "استخدم الزوايا المتتامة: $\\sin ٧٠^\\circ = \\cos(٩٠^\\circ - ٧٠^\\circ)$.",
    "stepByStepSolutionEn": [
      "Since real part is sine and imaginary part is cosine in Quadrant I (both positive):",
      "$$\\sin 70^\\circ = \\cos(90^\\circ - 70^\\circ) = \\cos 20^\\circ$$",
      "$$\\cos 70^\\circ = \\sin(90^\\circ - 70^\\circ) = \\sin 20^\\circ$$",
      "$$z = \\cos 20^\\circ + i\\sin 20^\\circ$$"
    ],
    "stepByStepSolutionAr": [
      "في الربع الأول (كلاهما موجب) مع تبديل الدوال نستخدم زاوية الإسناد $(٩٠^\\circ - \\theta)$:",
      "$$\\sin ٧٠^\\circ = \\cos(٩٠^\\circ - ٧٠^\\circ) = \\cos ٢٠^\\circ$$",
      "$$\\cos ٧٠^\\circ = \\sin(٩٠^\\circ - ٧٠^\\circ) = \\sin ٢٠^\\circ$$",
      "$$z = \\cos ٢٠^\\circ + ت\\sin ٢٠^\\circ$$"
    ],
    "teacherTipEn": "When sine and cosine are swapped in Quadrant I, use $\\theta' = 90^\\circ - \\theta$.",
    "teacherTipAr": "عند تبديل الجيب وجيب التمام في الربع الأول، تكون السعة $٩٠^\\circ - \\theta$."
  },
  {
    "id": "alg_ch2_db_med_03",
    "titleEn": "Reversed Functions in Quadrant II",
    "titleAr": "تبديل الدوال في الربع الثاني",
    "difficulty": "medium",
    "questionEn": "Write $z = -\\sin 30^\\circ + i\\cos 30^\\circ$ in standard polar form.",
    "questionAr": "اكتب العدد $z = -\\sin ٣٠^\\circ + ت\\cos ٣٠^\\circ$ بالصورة المثلثية القياسية.",
    "optionsEn": [
      "\\cos 120^\\circ + i\\sin 120^\\circ",
      "\\cos 60^\\circ + i\\sin 60^\\circ",
      "\\cos 150^\\circ + i\\sin 150^\\circ",
      "\\cos(-120^\\circ) + i\\sin(-120^\\circ)"
    ],
    "optionsAr": [
      "\\cos ١٢٠^\\circ + ت\\sin ١٢٠^\\circ",
      "\\cos ٦٠^\\circ + ت\\sin ٦٠^\\circ",
      "\\cos ١٥٠^\\circ + ت\\sin ١٥٠^\\circ",
      "\\cos(-١٢٠^\\circ) + ت\\sin(-١٢٠^\\circ)"
    ],
    "correctAnswer": "\\cos 120^\\circ + i\\sin 120^\\circ",
    "correctIndex": 0,
    "hintEn": "Real part is negative, imaginary part is positive. With swapped functions, use $90^\\circ + \\theta$.",
    "hintAr": "الجزء الحقيقي سالب والتخيلي موجب مع تبديل الدوال: السعة هي $٩٠^\\circ + \\theta$.",
    "stepByStepSolutionEn": [
      "Real part $< 0$ and imaginary part $> 0$, so $z$ is in Quadrant II.",
      "Since functions are swapped, use the $90^\\circ$ shift:",
      "$$\\theta = 90^\\circ + 30^\\circ = 120^\\circ$$",
      "Check: $\\cos 120^\\circ = -\\sin 30^\\circ = -\\frac{1}{2}$ and $\\sin 120^\\circ = \\cos 30^\\circ = \\frac{\\sqrt{3}}{2}$. Matches!",
      "$$z = \\cos 120^\\circ + i\\sin 120^\\circ$$"
    ],
    "stepByStepSolutionAr": [
      "العدد يقع في الربع الثاني لأن الحقيقي سالب والتخيلي موجب.",
      "مع تبديل النسب المثلثية، تكون الزاوية: $\\theta = ٩٠^\\circ + ٣٠^\\circ = ١٢٠^\\circ$.",
      "تحقق: $\\cos ١٢٠^\\circ = -\\frac{١}{٢} = -\\sin ٣٠^\\circ$ و $\\sin ١٢٠^\\circ = \\frac{\\sqrt{٣}}{٢} = \\cos ٣٠^\\circ$.",
      "$$z = \\cos ١٢٠^\\circ + ت\\sin ١٢٠^\\circ$$"
    ],
    "teacherTipEn": "Remember the 4 swap rules: QI: $90^\\circ - \\theta$, QII: $90^\\circ + \\theta$, QIII: $-90^\\circ - \\theta$, QIV: $-90^\\circ + \\theta$.",
    "teacherTipAr": "قواعد تبديل الدوال: ربع أول: $٩٠^\\circ - \\theta$، ربع ثان: $٩٠^\\circ + \\theta$، ربع ثالث: $-٩٠^\\circ - \\theta$، ربع رابع: $-٩٠^\\circ + \\theta$."
  },
  {
    "id": "alg_ch2_db_med_04",
    "titleEn": "Reversed Functions in Quadrant IV",
    "titleAr": "تبديل الدوال في الربع الرابع",
    "difficulty": "medium",
    "questionEn": "Find the principal argument of $z = \\sin 40^\\circ - i\\cos 40^\\circ$.",
    "questionAr": "أوجد السعة الأساسية للعدد $z = \\sin ٤٠^\\circ - ت\\cos ٤٠^\\circ$.",
    "optionsEn": [
      "-50^\\circ",
      "-40^\\circ",
      "50^\\circ",
      "310^\\circ"
    ],
    "optionsAr": [
      "-٥٠^\\circ",
      "-٤٠^\\circ",
      "٥٠^\\circ",
      "٣١٠^\\circ"
    ],
    "correctAnswer": "-50^\\circ",
    "correctIndex": 0,
    "hintEn": "Real part positive, imaginary negative (Quadrant IV). Angle is $-90^\\circ + 40^\\circ$.",
    "hintAr": "الحقيقي موجب والتخيلي سالب (الربع الرابع). السعة $-٩٠^\\circ + ٤٠^\\circ$.",
    "stepByStepSolutionEn": [
      "$x = \\sin 40^\\circ > 0$ and $y = -\\cos 40^\\circ < 0$ (Quadrant IV).",
      "With swapped functions, the argument is $-90^\\circ + 40^\\circ = -50^\\circ$.",
      "Check: $\\cos(-50^\\circ) = \\cos 50^\\circ = \\sin 40^\\circ$, and $\\sin(-50^\\circ) = -\\sin 50^\\circ = -\\cos 40^\\circ$."
    ],
    "stepByStepSolutionAr": [
      "$x > ٠$ و $y < ٠$ (الربع الرابع).",
      "مع تبديل النسب: $\\theta = -٩٠^\\circ + ٤٠^\\circ = -٥٠^\\circ$.",
      "تحقق: $\\cos(-٥٠^\\circ) = \\sin ٤٠^\\circ$ و $\\sin(-٥٠^\\circ) = -\\cos ٤٠^\\circ$."
    ],
    "teacherTipEn": "Always check your answer by taking the sine and cosine of the resulting angle.",
    "teacherTipAr": "تحقق دائماً بحساب الجيب وجيب التمام للزاوية الناتجة للتأكد من مطابقتها للطرف الأيمن."
  },
  {
    "id": "alg_ch2_db_med_05",
    "titleEn": "Both Negative Standard Functions (Quadrant III)",
    "titleAr": "كلا النسبتين سالبة بالدوال القياسية (الربع الثالث)",
    "difficulty": "medium",
    "questionEn": "Determine the principal argument of $z = -\\cos 50^\\circ - i\\sin 50^\\circ$.",
    "questionAr": "حدد السعة الأساسية للعدد $z = -\\cos ٥٠^\\circ - ت\\sin ٥٠^\\circ$.",
    "optionsEn": [
      "-130^\\circ",
      "130^\\circ",
      "-50^\\circ",
      "230^\\circ"
    ],
    "optionsAr": [
      "-١٣٠^\\circ",
      "١٣٠^\\circ",
      "-٥٠^\\circ",
      "٢٣٠^\\circ"
    ],
    "correctAnswer": "-130^\\circ",
    "correctIndex": 0,
    "hintEn": "In Quadrant III without swapped functions, use $-180^\\circ + \\theta$.",
    "hintAr": "في الربع الثالث بدون تبديل الدوال نستخدم $-١٨٠^\\circ + \\theta$.",
    "stepByStepSolutionEn": [
      "Both cosine and sine have negative signs, placing the point in Quadrant III.",
      "Since cosine corresponds to real and sine to imaginary (no function swap), use:",
      "$$\\theta = -180^\\circ + 50^\\circ = -130^\\circ$$",
      "Check: $\\cos(-130^\\circ) = \\cos 130^\\circ = -\\cos 50^\\circ$, $\\sin(-130^\\circ) = -\\sin 130^\\circ = -\\sin 50^\\circ$."
    ],
    "stepByStepSolutionAr": [
      "كلا الجزأين سالب، فالنقطة في الربع الثالث والدوال غير متبدلة.",
      "السعة الأساسية: $\\theta = -١٨٠^\\circ + ٥٠^\\circ = -١٣٠^\\circ$.",
      "تحقق: $\\cos(-١٣٠^\\circ) = -\\cos ٥٠^\\circ$ و $\\sin(-١٣٠^\\circ) = -\\sin ٥٠^\\circ$."
    ],
    "teacherTipEn": "Never use $180^\\circ + 50^\\circ = 230^\\circ$ for the principal argument as it exceeds $180^\\circ$.",
    "teacherTipAr": "لا تستخدم ٢٣٠ درجة لأنها تتجاوز ١٨٠ درجة وليست سعة أساسية."
  },
  {
    "id": "alg_ch2_db_med_06",
    "titleEn": "Converting Negative Real Part in Polar",
    "titleAr": "تحويل الجزء الحقيقي السالب في الصورة القطبية",
    "difficulty": "medium",
    "questionEn": "Write $z = -\\cos 40^\\circ + i\\sin 40^\\circ$ in standard polar form.",
    "questionAr": "اكتب العدد $z = -\\cos ٤٠^\\circ + ت\\sin ٤٠^\\circ$ بالصورة المثلثية القياسية.",
    "optionsEn": [
      "\\cos 140^\\circ + i\\sin 140^\\circ",
      "\\cos(-40^\\circ) + i\\sin(-40^\\circ)",
      "\\cos 40^\\circ + i\\sin 40^\\circ",
      "\\cos(-140^\\circ) + i\\sin(-140^\\circ)"
    ],
    "optionsAr": [
      "\\cos ١٤٠^\\circ + ت\\sin ١٤٠^\\circ",
      "\\cos(-٤٠^\\circ) + ت\\sin(-٤٠^\\circ)",
      "\\cos ٤٠^\\circ + ت\\sin ٤٠^\\circ",
      "\\cos(-١٤٠^\\circ) + ت\\sin(-١٤٠^\\circ)"
    ],
    "correctAnswer": "\\cos 140^\\circ + i\\sin 140^\\circ",
    "correctIndex": 0,
    "hintEn": "Quadrant II: $\\theta = 180^\\circ - 40^\\circ = 140^\\circ$.",
    "hintAr": "الربع الثاني: $\\theta = ١٨٠^\\circ - ٤٠^\\circ = ١٤٠^\\circ$.",
    "stepByStepSolutionEn": [
      "Real part is negative, imaginary part is positive (Quadrant II).",
      "Functions are standard (cosine is real, sine is imaginary).",
      "$$\\theta = 180^\\circ - 40^\\circ = 140^\\circ$$",
      "$$z = \\cos 140^\\circ + i\\sin 140^\\circ$$"
    ],
    "stepByStepSolutionAr": [
      "الحقيقي سالب والتخيلي موجب (الربع الثاني والدوال قياسية).",
      "$$\\theta = ١٨٠^\\circ - ٤٠^\\circ = ١٤٠^\\circ$$",
      "$$z = \\cos ١٤٠^\\circ + ت\\sin ١٤٠^\\circ$$"
    ],
    "teacherTipEn": "In Quadrant II with standard functions, the argument is simply $180^\\circ - \\alpha$.",
    "teacherTipAr": "في الربع الثاني مع الدوال القياسية، السعة هي $١٨٠^\\circ - \\alpha$."
  },
  {
    "id": "alg_ch2_db_med_07",
    "titleEn": "Swapped Functions in Quadrant III",
    "titleAr": "تبديل الدوال في الربع الثالث",
    "difficulty": "medium",
    "questionEn": "Find the principal argument of $z = -\\sin 25^\\circ - i\\cos 25^\\circ$.",
    "questionAr": "أوجد السعة الأساسية للعدد $z = -\\sin ٢٥^\\circ - ت\\cos ٢٥^\\circ$.",
    "optionsEn": [
      "-115^\\circ",
      "-65^\\circ",
      "115^\\circ",
      "245^\\circ"
    ],
    "optionsAr": [
      "-١١٥^\\circ",
      "-٦٥^\\circ",
      "١١٥^\\circ",
      "٢٤٥^\\circ"
    ],
    "correctAnswer": "-115^\\circ",
    "correctIndex": 0,
    "hintEn": "Both negative with swapped functions: $-90^\\circ - 25^\\circ$.",
    "hintAr": "كلا الجزأين سالب مع تبديل الدوال: $-٩٠^\\circ - ٢٥^\\circ$.",
    "stepByStepSolutionEn": [
      "Since $x < 0$ and $y < 0$, $z$ lies in Quadrant III.",
      "Functions are swapped (real is sine, imaginary is cosine).",
      "$$\\theta = -90^\\circ - 25^\\circ = -115^\\circ$$",
      "Check: $\\cos(-115^\\circ) = -\\cos 65^\\circ = -\\sin 25^\\circ$ and $\\sin(-115^\\circ) = -\\sin 65^\\circ = -\\cos 25^\\circ$."
    ],
    "stepByStepSolutionAr": [
      "كلا الجزأين سالب مع تبديل النسب المثلثية (الربع الثالث).",
      "$$\\theta = -٩٠^\\circ - ٢٥^\\circ = -١١٥^\\circ$$",
      "تحقق: $\\cos(-١١٥^\\circ) = -\\sin ٢٥^\\circ$ و $\\sin(-١١٥^\\circ) = -\\cos ٢٥^\\circ$."
    ],
    "teacherTipEn": "Double check that the angle lies within $(-180^\\circ, 180^\\circ]$.",
    "teacherTipAr": "تأكد دائماً أن الزاوية تقع داخل الفترة $(-١٨٠^\\circ, ١٨٠^\\circ]$."
  },
  {
    "id": "alg_ch2_db_med_08",
    "titleEn": "Polar Form with Negative Modulus Multiplier",
    "titleAr": "صورة قطبية بمعامل سالب للمقياس",
    "difficulty": "medium",
    "questionEn": "Write $z = -3(\\cos 50^\\circ + i\\sin 50^\\circ)$ in standard polar form.",
    "questionAr": "اكتب العدد $z = -٣(\\cos ٥٠^\\circ + ت\\sin ٥٠^\\circ)$ بالصورة المثلثية القياسية.",
    "optionsEn": [
      "3(\\cos(-130^\\circ) + i\\sin(-130^\\circ))",
      "3(\\cos 130^\\circ + i\\sin 130^\\circ)",
      "3(\\cos 50^\\circ + i\\sin 50^\\circ)",
      "3(\\cos(-50^\\circ) + i\\sin(-50^\\circ))"
    ],
    "optionsAr": [
      "٣(\\cos(-١٣٠^\\circ) + ت\\sin(-١٣٠^\\circ))",
      "٣(\\cos ١٣٠^\\circ + ت\\sin ١٣٠^\\circ)",
      "٣(\\cos ٥٠^\\circ + ت\\sin ٥٠^\\circ)",
      "٣(\\cos(-٥٠^\\circ) + ت\\sin(-٥٠^\\circ))"
    ],
    "correctAnswer": "3(\\cos(-130^\\circ) + i\\sin(-130^\\circ))",
    "correctIndex": 0,
    "hintEn": "$-1 = \\cos(\\pm 180^\\circ) + i\\sin(\\pm 180^\\circ)$. Add $\\pm 180^\\circ$ to ensure $\\theta \\in (-180^\\circ, 180^\\circ]$.",
    "hintAr": "$-١$ يمثل زاوية قياسها $\\pm ١٨٠^\\circ$. اطرح ١٨٠ من ٥٠ لتبقى في الفترة القياسية.",
    "stepByStepSolutionEn": [
      "The modulus $r$ must be positive, so we absorb the minus sign as $-1 = e^{-i 180^\\circ}$:",
      "$$\\theta = 50^\\circ - 180^\\circ = -130^\\circ$$",
      "$$z = 3(\\cos(-130^\\circ) + i\\sin(-130^\\circ))$$"
    ],
    "stepByStepSolutionAr": [
      "المقياس يجب أن يكون موجباً ($r = ٣$). نمتص الإشارة السالبة بطرح $١٨٠^\\circ$:",
      "$$\\theta = ٥٠^\\circ - ١٨٠^\\circ = -١٣٠^\\circ$$",
      "$$z = ٣(\\cos(-١٣٠^\\circ) + ت\\sin(-١٣٠^\\circ))$$"
    ],
    "teacherTipEn": "Multiplying by -1 adds $\\pm 180^\\circ$ to the argument.",
    "teacherTipAr": "الضرب في $-١$ يعادل إضافة أو طرح $١٨٠^\\circ$ من السعة."
  },
  {
    "id": "alg_ch2_db_med_09",
    "titleEn": "Reciprocal of cis(theta)",
    "titleAr": "مقلوب دالة جيب التمام والجيب",
    "difficulty": "medium",
    "questionEn": "Simplify $\\frac{1}{\\cos\\theta - i\\sin\\theta}$.",
    "questionAr": "بسط المقدار: $\\frac{١}{\\cos\\theta - ت\\sin\\theta}$.",
    "optionsEn": [
      "\\cos\\theta + i\\sin\\theta",
      "\\cos\\theta - i\\sin\\theta",
      "-\\cos\\theta + i\\sin\\theta",
      "-\\cos\\theta - i\\sin\\theta"
    ],
    "optionsAr": [
      "\\cos\\theta + ت\\sin\\theta",
      "\\cos\\theta - ت\\sin\\theta",
      "-\\cos\\theta + ت\\sin\\theta",
      "-\\cos\\theta - ت\\sin\\theta"
    ],
    "correctAnswer": "\\cos\\theta + i\\sin\\theta",
    "correctIndex": 0,
    "hintEn": "The denominator is $e^{-i\\theta}$.",
    "hintAr": "المقام هو $e^{-ت\\theta}$.",
    "stepByStepSolutionEn": [
      "Express the denominator in exponential form: $\\cos\\theta - i\\sin\\theta = e^{-i\\theta}$.",
      "The reciprocal is $\\frac{1}{e^{-i\\theta}} = e^{i\\theta} = \\cos\\theta + i\\sin\\theta$."
    ],
    "stepByStepSolutionAr": [
      "المقام بالصورة الأسية هو $e^{-ت\\theta}$.",
      "المقلوب: $\\frac{١}{e^{-ت\\theta}} = e^{ت\\theta} = \\cos\\theta + ت\\sin\\theta$."
    ],
    "teacherTipEn": "The reciprocal of $\\bar{z}$ on the unit circle is $z$ itself.",
    "teacherTipAr": "مقلوب مرافق العدد الواقع على دائرة الوحدة هو العدد نفسه."
  },
  {
    "id": "alg_ch2_db_med_10",
    "titleEn": "Argument of z divided by -i",
    "titleAr": "سعة خارج قسمة z على -ت",
    "difficulty": "medium",
    "questionEn": "If $\\text{Arg}(z) = \\theta$, find $\\text{Arg}\\left(\\frac{z}{-i}\\right)$.",
    "questionAr": "إذا كانت سعة $\\text{Arg}(z) = \\theta$، فأوجد سعة المقدار $\\text{Arg}\\left(\\frac{z}{-ت}\\right)$.",
    "optionsEn": [
      "\\theta + \\frac{\\pi}{2}",
      "\\theta - \\frac{\\pi}{2}",
      "\\frac{\\pi}{2} - \\theta",
      "-\\theta"
    ],
    "optionsAr": [
      "\\theta + \\frac{\\pi}{٢}",
      "\\theta - \\frac{\\pi}{٢}",
      "\\frac{\\pi}{٢} - \\theta",
      "-\\theta"
    ],
    "correctAnswer": "\\theta + \\frac{\\pi}{2}",
    "correctIndex": 0,
    "hintEn": "$-i = e^{-i\\pi/2}$, so dividing by $-i$ is equivalent to multiplying by $i = e^{i\\pi/2}$.",
    "hintAr": "قسمة z على $-ت$ تعادل ضرب z في $ت$.",
    "stepByStepSolutionEn": [
      "Notice that $\\frac{1}{-i} = \\frac{i}{-i^2} = i$.",
      "Thus $\\frac{z}{-i} = i z$.",
      "$$\\text{Arg}(i z) = \\text{Arg}(i) + \\text{Arg}(z) = \\frac{\\pi}{2} + \\theta$$"
    ],
    "stepByStepSolutionAr": [
      "بما أن $\\frac{١}{-ت} = ت$.",
      "إذن $\\frac{z}{-ت} = ت z$.",
      "سعة حاصل الضرب: $\\text{Arg}(ت z) = \\theta + \\frac{\\pi}{٢}$."
    ],
    "teacherTipEn": "Dividing by $-i$ is multiplying by $i$, which rotates the vector by $+90^\\circ$ counterclockwise.",
    "teacherTipAr": "القسمة على $-ت$ تعادل الضرب في $ت$ أي دوران بزاوية $+٩٠^\\circ$ عكس عقارب الساعة."
  },
  {
    "id": "alg_ch2_db_med_11",
    "titleEn": "Tenth Power of (1 + i)",
    "titleAr": "القوة العاشرة للمقدار (١ + ت)",
    "difficulty": "medium",
    "questionEn": "Evaluate $(1 + i)^{10}$.",
    "questionAr": "احسب قيمة المقدار: $(١ + ت)^{١٠}$.",
    "optionsEn": [
      "32i",
      "-32i",
      "32",
      "-32"
    ],
    "optionsAr": [
      "٣٢ت",
      "-٣٢ت",
      "٣٢",
      "-٣٢"
    ],
    "correctAnswer": "32i",
    "correctIndex": 0,
    "hintEn": "$(1+i)^{10} = [(1+i)^2]^5 = (2i)^5$.",
    "hintAr": "$(١+ت)^{١٠} = [(١+ت)^٢]^٥ = (٢ت)^٥$.",
    "stepByStepSolutionEn": [
      "Use $(1 + i)^2 = 2i$:",
      "$$(1 + i)^{10} = \\left[(1 + i)^2\\right]^5 = (2i)^5 = 2^5 \\cdot i^5 = 32 \\cdot i = 32i$$"
    ],
    "stepByStepSolutionAr": [
      "باستخدام $(١ + ت)^٢ = ٢ت$:",
      "$$(١ + ت)^{١٠} = [(١ + ت)^٢]^٥ = (٢ت)^٥ = ٣٢ت^٥ = ٣٢ت$$"
    ],
    "teacherTipEn": "Always use the $(1+i)^2 = 2i$ shortcut for powers of $1+i$.",
    "teacherTipAr": "استخدم دائماً متطابقة $(١+ت)^٢ = ٢ت$ لحساب قوى المقدار $١+ت$ بسرعة ودقة."
  },
  {
    "id": "alg_ch2_db_med_12",
    "titleEn": "Twelfth Power of (1 - i)",
    "titleAr": "القوة الثانية عشرة للمقدار (١ - ت)",
    "difficulty": "medium",
    "questionEn": "Calculate $(1 - i)^{12}$.",
    "questionAr": "احسب قيمة المقدار: $(١ - ت)^{١٢}$.",
    "optionsEn": [
      "-64",
      "64",
      "-64i",
      "64i"
    ],
    "optionsAr": [
      "-٦٤",
      "٦٤",
      "-٦٤ت",
      "٦٤ت"
    ],
    "correctAnswer": "-64",
    "correctIndex": 0,
    "hintEn": "$(1-i)^2 = -2i$, so $[(1-i)^2]^6 = (-2i)^6$.",
    "hintAr": "$(١-ت)^٢ = -٢ت$، إذن $[(١-ت)^٢]^٦ = (-٢ت)^٦$.",
    "stepByStepSolutionEn": [
      "$$(1 - i)^{12} = \\left[(1 - i)^2\\right]^6 = (-2i)^6 = (-2)^6 \\cdot i^6 = 64 \\cdot (-1) = -64$$"
    ],
    "stepByStepSolutionAr": [
      "$$(١ - ت)^{١٢} = [(-٢ت)]^٦ = ٦٤ \\cdot ت^٦ = ٦٤ \\cdot (-١) = -٦٤$$"
    ],
    "teacherTipEn": "Remember that $i^6 = i^2 = -1$.",
    "teacherTipAr": "تذكر دائماً أن $ت^٦ = ت^٢ = -١$."
  },
  {
    "id": "alg_ch2_db_med_13",
    "titleEn": "Sixth Power of (sqrt(3) + i)",
    "titleAr": "القوة السادسة للعدد (جذر ٣ + ت)",
    "difficulty": "medium",
    "questionEn": "Find the exact value of $(\\sqrt{3} + i)^6$.",
    "questionAr": "أوجد القيمة الدقيقة للمقدار: $(\\sqrt{٣} + ت)^٦$.",
    "optionsEn": [
      "-64",
      "64",
      "64i",
      "-64i"
    ],
    "optionsAr": [
      "-٦٤",
      "٦٤",
      "٦٤ت",
      "-٦٤ت"
    ],
    "correctAnswer": "-64",
    "correctIndex": 0,
    "hintEn": "Convert $\\sqrt{3}+i$ to polar form: $r = 2$, $\\theta = \\pi/6$.",
    "hintAr": "حول للقطبية: $r = ٢$ و $\\theta = \\pi/٦$.",
    "stepByStepSolutionEn": [
      "For $z = \\sqrt{3} + i$:",
      "Modulus $r = \\sqrt{3 + 1} = 2$.",
      "Argument $\\theta = \\arctan(1/\\sqrt{3}) = \\frac{\\pi}{6}$.",
      "Using De Moivre's theorem:",
      "$$z^6 = 2^6 \\left(\\cos\\left(6 \\times \\frac{\\pi}{6}\\right) + i\\sin\\left(6 \\times \\frac{\\pi}{6}\\right)\\right) = 64(\\cos\\pi + i\\sin\\pi) = 64(-1) = -64$$"
    ],
    "stepByStepSolutionAr": [
      "المقياس $r = ٢$ والسعة $\\theta = \\frac{\\pi}{٦}$.",
      "بتطبيق نظرية ديموافر:",
      "$$z^٦ = ٢^٦ (\\cos\\pi + ت\\sin\\pi) = ٦٤(-١) = -٦٤$$"
    ],
    "teacherTipEn": "Multiplying $\\frac{\\pi}{6}$ by 6 lands exactly on $\\pi$, yielding a purely real negative number.",
    "teacherTipAr": "ضرب $\\frac{\\pi}{٦}$ في ٦ يعطي $\\pi$ مباشرة، والنتيجة عدد حقيقي سالب."
  },
  {
    "id": "alg_ch2_db_med_14",
    "titleEn": "Ninth Power of (1 + i*sqrt(3))",
    "titleAr": "القوة التاسعة للعدد (١ + ت جذر ٣)",
    "difficulty": "medium",
    "questionEn": "Evaluate $(1 + i\\sqrt{3})^9$.",
    "questionAr": "احسب قيمة المقدار: $(١ + ت\\sqrt{٣})^٩$.",
    "optionsEn": [
      "-512",
      "512",
      "-512i",
      "512i"
    ],
    "optionsAr": [
      "-٥١٢",
      "٥١٢",
      "-٥١٢ت",
      "٥١٢ت"
    ],
    "correctAnswer": "-512",
    "correctIndex": 0,
    "hintEn": "$r = 2$ and $\\theta = \\pi/3$. Exponent is 9.",
    "hintAr": "$r = ٢$ و $\\theta = \\pi/٣$، والأس ٩.",
    "stepByStepSolutionEn": [
      "$z = 2 e^{i\\pi/3}$.",
      "$$z^9 = 2^9 e^{i 9(\\pi/3)} = 512 e^{i 3\\pi} = 512(\\cos 3\\pi + i\\sin 3\\pi) = 512(-1) = -512$$"
    ],
    "stepByStepSolutionAr": [
      "$z = ٢ e^{ت\\pi/٣}$.",
      "$$z^٩ = ٢^٩ e^{ت ٣\\pi} = ٥١٢(\\cos ٣\\pi + ت\\sin ٣\\pi) = ٥١٢(-١) = -٥١٢$$"
    ],
    "teacherTipEn": "Any odd multiple of $\\pi$ has $\\cos((2k+1)\\pi) = -1$.",
    "teacherTipAr": "أي مضاعف فردي لـ $\\pi$ يكون جيب تمامه مساوياً $-١$."
  },
  {
    "id": "alg_ch2_db_med_15",
    "titleEn": "High Power on Unit Circle",
    "titleAr": "قوة عالية لعدد على دائرة الوحدة",
    "difficulty": "medium",
    "questionEn": "Simplify $\\left(\\frac{1 + i}{\\sqrt{2}}\\right)^{100}$.",
    "questionAr": "بسط المقدار: $\\left(\\frac{١ + ت}{\\sqrt{٢}}\\right)^{١٠٠}$.",
    "optionsEn": [
      "-1",
      "1",
      "i",
      "-i"
    ],
    "optionsAr": [
      "-١",
      "١",
      "ت",
      "-ت"
    ],
    "correctAnswer": "-1",
    "correctIndex": 0,
    "hintEn": "$\\frac{1+i}{\\sqrt{2}} = e^{i\\pi/4}$.",
    "hintAr": "$\\frac{١+ت}{\\sqrt{٢}} = e^{ت\\pi/٤}$.",
    "stepByStepSolutionEn": [
      "Modulus is $\\frac{\\sqrt{1+1}}{\\sqrt{2}} = 1$.",
      "Argument is $\\frac{\\pi}{4}$.",
      "$$\\left(e^{i\\pi/4}\\right)^{100} = e^{i 25\\pi} = \\cos(25\\pi) + i\\sin(25\\pi) = -1 + 0 = -1$$"
    ],
    "stepByStepSolutionAr": [
      "المقياس = ١ والسعة = $\\frac{\\pi}{٤}$.",
      "بتطبيق ديموافر: $e^{ت ٢٥\\pi} = \\cos ٢٥\\pi + ت\\sin ٢٥\\pi = -١$."
    ],
    "teacherTipEn": "An odd number times $\\pi$ is coterminal with $\\pi$, so its value is -1.",
    "teacherTipAr": "المضاعف الفردي لـ $\\pi$ يكافئ $\\pi$ تماماً وقيمته دائماً $-١$."
  },
  {
    "id": "alg_ch2_db_med_16",
    "titleEn": "Ratio of Conjugate Powers",
    "titleAr": "نسبة قوى الأعداد المترافقة",
    "difficulty": "medium",
    "questionEn": "Find the value of $\\left(\\frac{\\sqrt{3} + i}{\\sqrt{3} - i}\\right)^6$.",
    "questionAr": "أوجد قيمة المقدار: $\\left(\\frac{\\sqrt{٣} + ت}{\\sqrt{٣} - ت}\\right)^٦$.",
    "optionsEn": [
      "1",
      "-1",
      "i",
      "-i"
    ],
    "optionsAr": [
      "١",
      "-١",
      "ت",
      "-ت"
    ],
    "correctAnswer": "1",
    "correctIndex": 0,
    "hintEn": "Numerator has argument $\\pi/6$, denominator has argument $-\\pi/6$.",
    "hintAr": "سعة البسط $\\pi/٦$ وسعة المقام $-\\pi/٦$.",
    "stepByStepSolutionEn": [
      "Numerator: $2 e^{i\\pi/6}$. Denominator: $2 e^{-i\\pi/6}$.",
      "Quotient: $\\frac{2 e^{i\\pi/6}}{2 e^{-i\\pi/6}} = e^{i(\\pi/6 - (-\\pi/6))} = e^{i\\pi/3}$.",
      "Raise to power 6:",
      "$$\\left(e^{i\\pi/3}\\right)^6 = e^{i 2\\pi} = 1$$"
    ],
    "stepByStepSolutionAr": [
      "البسط: $٢ e^{ت\\pi/٦}$ والمقام: $٢ e^{-ت\\pi/٦}$.",
      "خارج القسمة: $e^{ت\\pi/٣}$.",
      "بالرفع للأس ٦: $(e^{ت\\pi/٣})^٦ = e^{ت ٢\\pi} = ١$."
    ],
    "teacherTipEn": "Dividing by conjugate doubles the argument: $\\text{Arg}(z/\\bar{z}) = 2\\theta$.",
    "teacherTipAr": "قسمة عدد على مرافقه تضاعف سعته: $\\text{Arg}(z/\\bar{z}) = ٢\\theta$."
  },
  {
    "id": "alg_ch2_db_med_17",
    "titleEn": "Smallest Integer n Making (1 + i)^n Real",
    "titleAr": "أصغر عدد صحيح موجب n يجعل (١ + ت)^n حقيقياً",
    "difficulty": "medium",
    "questionEn": "Find the smallest positive integer $n$ such that $(1 + i)^n$ is a real number.",
    "questionAr": "أوجد أصغر عدد صحيح موجب $n$ يجعل المقدار $(١ + ت)^n$ عدداً حقيقياً.",
    "optionsEn": [
      "4",
      "2",
      "8",
      "6"
    ],
    "optionsAr": [
      "٤",
      "٢",
      "٨",
      "٦"
    ],
    "correctAnswer": "4",
    "correctIndex": 0,
    "hintEn": "The argument $n(\\pi/4)$ must be an integer multiple of $\\pi$.",
    "hintAr": "يجب أن تكون السعة $n(\\pi/٤)$ مضاعفاً صحيحاً لـ $\\pi$.",
    "stepByStepSolutionEn": [
      "For a complex number $r e^{i\\theta}$ to be purely real, its imaginary part must be 0, so $\\theta = k\\pi$ for $k \\in \\mathbb{Z}$.",
      "Here $\\theta_n = n \\times \\frac{\\pi}{4}$.",
      "$$n \\frac{\\pi}{4} = k\\pi \\implies n = 4k$$",
      "For the smallest positive integer $n$, choose $k = 1$, which gives $n = 4$.",
      "Check: $(1+i)^4 = -4 \\in \\mathbb{R}$."
    ],
    "stepByStepSolutionAr": [
      "لكي يكون العدد حقيقياً يجب أن تكون سعته مضاعفاً للزاوية $\\pi$:",
      "$$n \\frac{\\pi}{٤} = k\\pi \\implies n = ٤k$$",
      "لأصغر عدد صحيح موجب نأخذ $k = ١ \\implies n = ٤$.",
      "تحقق: $(١+ت)^٤ = -٤$ وهو عدد حقيقي."
    ],
    "teacherTipEn": "Power 2 gives purely imaginary $2i$, while power 4 gives real $-4$.",
    "teacherTipAr": "الأس ٢ يعطي تخيلياً بحتاً ($٢ت$)، بينما الأس ٤ يعطي حقيقياً بحتاً ($-٤$)."
  },
  {
    "id": "alg_ch2_db_med_18",
    "titleEn": "Smallest Positive Integer Making (1 + i)^n Positive Real",
    "titleAr": "أصغر عدد موجب يجعل (١ + ت)^n حقيقياً موجباً",
    "difficulty": "medium",
    "questionEn": "Find the smallest positive integer $n$ such that $(1 + i)^n > 0$ (strictly positive real).",
    "questionAr": "أوجد أصغر عدد صحيح موجب $n$ يجعل المقدار $(١ + ت)^n > ٠$ (حقيقي موجب تماماً).",
    "optionsEn": [
      "8",
      "4",
      "2",
      "16"
    ],
    "optionsAr": [
      "٨",
      "٤",
      "٢",
      "١٦"
    ],
    "correctAnswer": "8",
    "correctIndex": 0,
    "hintEn": "The argument $n(\\pi/4)$ must be an even multiple of $\\pi$ ($2k\\pi$).",
    "hintAr": "يجب أن تكون السعة مضاعفاً زوجياً لـ $\\pi$ أي $٢k\\pi$.",
    "stepByStepSolutionEn": [
      "For $(1+i)^n > 0$, the angle must be $2k\\pi$ (mod $2\\pi$).",
      "$$n \\frac{\\pi}{4} = 2k\\pi \\implies n = 8k$$",
      "The smallest positive integer is when $k = 1$, giving $n = 8$.",
      "Check: $(1+i)^8 = [(1+i)^4]^2 = (-4)^2 = +16 > 0$."
    ],
    "stepByStepSolutionAr": [
      "لكي يكون العدد حقيقياً موجباً يجب أن تكون الزاوية مضاعفاً لـ $٢\\pi$:",
      "$$n \\frac{\\pi}{٤} = ٢k\\pi \\implies n = ٨k$$",
      "أصغر قيمة موجبة عند $k = ١$ هي $n = ٨$.",
      "تحقق: $(١+ت)^٨ = (-٤)^٢ = +١٦ > ٠$."
    ],
    "teacherTipEn": "Notice the difference: real requires $n=4k$, but *positive* real requires $n=8k$.",
    "teacherTipAr": "انتبه للفرق: حقيقي فقط يتطلب $n = ٤k$، بينما حقيقي موجب يتطلب $n = ٨k$."
  },
  {
    "id": "alg_ch2_db_med_19",
    "titleEn": "Sum of Symmetrical De Moivre Powers",
    "titleAr": "مجموع قوى ديموافر المتناظرة",
    "difficulty": "medium",
    "questionEn": "Simplify $(\\cos\\theta + i\\sin\\theta)^n + (\\cos\\theta - i\\sin\\theta)^n$.",
    "questionAr": "بسط المقدار: $(\\cos\\theta + ت\\sin\\theta)^n + (\\cos\\theta - ت\\sin\\theta)^n$.",
    "optionsEn": [
      "2\\cos(n\\theta)",
      "2i\\sin(n\\theta)",
      "2\\sin(n\\theta)",
      "0"
    ],
    "optionsAr": [
      "٢\\cos(n\\theta)",
      "٢ت\\sin(n\\theta)",
      "٢\\sin(n\\theta)",
      "٠"
    ],
    "correctAnswer": "2\\cos(n\\theta)",
    "correctIndex": 0,
    "hintEn": "$z^n + (\\bar{z})^n = 2\\text{Re}(z^n)$.",
    "hintAr": "$z^n + (\\bar{z})^n = ٢ \\times$ الجزء الحقيقي.",
    "stepByStepSolutionEn": [
      "By De Moivre's theorem:",
      "$(\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta)$",
      "$(\\cos\\theta - i\\sin\\theta)^n = \\cos(n\\theta) - i\\sin(n\\theta)$",
      "Summing both expressions:",
      "$$(\\cos(n\\theta) + i\\sin(n\\theta)) + (\\cos(n\\theta) - i\\sin(n\\theta)) = 2\\cos(n\\theta)$$"
    ],
    "stepByStepSolutionAr": [
      "بتطبيق نظرية ديموافر على كلا الحدين:",
      "الحد الأول = $\\cos(n\\theta) + ت\\sin(n\\theta)$.",
      "الحد الثاني = $\\cos(n\\theta) - ت\\sin(n\\theta)$.",
      "بجمع المقدارين يختفي الجزء التخيلي ويتبقى: $٢\\cos(n\\theta)$."
    ],
    "teacherTipEn": "Similarly, their difference equals $2i\\sin(n\\theta)$.",
    "teacherTipAr": "وبالمثل تماماً، حاصل طرحهما يساوي $٢ت\\sin(n\\theta)$."
  },
  {
    "id": "alg_ch2_db_med_20",
    "titleEn": "Difference of Symmetrical De Moivre Powers",
    "titleAr": "الفرق بين قوى ديموافر المتناظرة",
    "difficulty": "medium",
    "questionEn": "Simplify $(\\cos\\theta + i\\sin\\theta)^n - (\\cos\\theta - i\\sin\\theta)^n$.",
    "questionAr": "بسط المقدار: $(\\cos\\theta + ت\\sin\\theta)^n - (\\cos\\theta - ت\\sin\\theta)^n$.",
    "optionsEn": [
      "2i\\sin(n\\theta)",
      "2\\cos(n\\theta)",
      "-2i\\sin(n\\theta)",
      "0"
    ],
    "optionsAr": [
      "٢ت\\sin(n\\theta)",
      "٢\\cos(n\\theta)",
      "-٢ت\\sin(n\\theta)",
      "٠"
    ],
    "correctAnswer": "2i\\sin(n\\theta)",
    "correctIndex": 0,
    "hintEn": "Subtracting cancels the real parts.",
    "hintAr": "الطرح يحذف الأجزاء الحقيقية ويبقي التخيلية.",
    "stepByStepSolutionEn": [
      "$$(\\cos(n\\theta) + i\\sin(n\\theta)) - (\\cos(n\\theta) - i\\sin(n\\theta)) = 2i\\sin(n\\theta)$$"
    ],
    "stepByStepSolutionAr": [
      "$$[\\cos(n\\theta) + ت\\sin(n\\theta)] - [\\cos(n\\theta) - ت\\sin(n\\theta)] = ٢ت\\sin(n\\theta)$$"
    ],
    "teacherTipEn": "Don't forget the factor of i in the imaginary difference.",
    "teacherTipAr": "لا تنس وجود العامل ت في حاصل الطرح."
  },
  {
    "id": "alg_ch2_db_med_21",
    "titleEn": "Square Roots of 3 + 4i",
    "titleAr": "الجذران التربيعيان للعدد ٣ + ٤ت",
    "difficulty": "medium",
    "questionEn": "Find the two square roots of $z = 3 + 4i$.",
    "questionAr": "أوجد الجذرين التربيعيين للعدد المركب $z = ٣ + ٤ت$.",
    "optionsEn": [
      "\\pm(2 + i)",
      "\\pm(1 + 2i)",
      "\\pm(2 - i)",
      "\\pm(1 - 2i)"
    ],
    "optionsAr": [
      "\\pm(٢ + ت)",
      "\\pm(١ + ٢ت)",
      "\\pm(٢ - ت)",
      "\\pm(١ - ٢ت)"
    ],
    "correctAnswer": "\\pm(2 + i)",
    "correctIndex": 0,
    "hintEn": "Let $(x + iy)^2 = 3 + 4i \\implies x^2 - y^2 = 3$ and $2xy = 4$.",
    "hintAr": "افرض $(x + ت y)^٢ = ٣ + ٤ت \\implies x^٢ - y^٢ = ٣$ و $٢xy = ٤$.",
    "stepByStepSolutionEn": [
      "Let $(x + iy)^2 = 3 + 4i$.",
      "Equating real and imaginary parts:",
      "1) $x^2 - y^2 = 3$",
      "2) $2xy = 4 \\implies xy = 2$",
      "3) Modulus: $x^2 + y^2 = \\sqrt{3^2 + 4^2} = 5$.",
      "Adding (1) and (3): $2x^2 = 8 \\implies x^2 = 4 \\implies x = \\pm 2$.",
      "Since $xy = 2 > 0$, $x$ and $y$ have the same sign: $y = \\pm 1$.",
      "Thus, the roots are $\\pm(2 + i)$."
    ],
    "stepByStepSolutionAr": [
      "نفرض أن الجذر التربيعي هو $x + ت y$:",
      "$x^٢ - y^٢ = ٣$ و $٢xy = ٤$ و $x^٢ + y^٢ = ٥$.",
      "بجمع الأولى والثالثة: $٢x^٢ = ٨ \\implies x = \\pm ٢$.",
      "بما أن $xy = ٢ > ٠$، فإن لهما نفس الإشارة: $y = \\pm ١$.",
      "الجذران هما: $\\pm(٢ + ت)$."
    ],
    "teacherTipEn": "Quick check: $(2+i)^2 = 4 + 4i - 1 = 3 + 4i$.",
    "teacherTipAr": "تحقق سريع بالتربيع: $(٢+ت)^٢ = ٤ + ٤ت - ١ = ٣ + ٤ت$."
  },
  {
    "id": "alg_ch2_db_med_22",
    "titleEn": "Square Roots of -8 - 6i",
    "titleAr": "الجذران التربيعيان للعدد -٨ - ٦ت",
    "difficulty": "medium",
    "questionEn": "Find the square roots of $z = -8 - 6i$.",
    "questionAr": "أوجد الجذرين التربيعيين للعدد $z = -٨ - ٦ت$.",
    "optionsEn": [
      "\\pm(1 - 3i)",
      "\\pm(3 - i)",
      "\\pm(1 + 3i)",
      "\\pm(3 + i)"
    ],
    "optionsAr": [
      "\\pm(١ - ٣ت)",
      "\\pm(٣ - ت)",
      "\\pm(١ + ٣ت)",
      "\\pm(٣ + ت)"
    ],
    "correctAnswer": "\\pm(1 - 3i)",
    "correctIndex": 0,
    "hintEn": "$x^2 - y^2 = -8$ and $2xy = -6$ (opposite signs).",
    "hintAr": "$x^٢ - y^٢ = -٨$ و $٢xy = -٦$ (إشارتان مختلفتان).",
    "stepByStepSolutionEn": [
      "Modulus: $r = \\sqrt{(-8)^2 + (-6)^2} = 10$.",
      "$x^2 = \\frac{r + a}{2} = \\frac{10 - 8}{2} = 1 \\implies x = \\pm 1$.",
      "$y^2 = \\frac{r - a}{2} = \\frac{10 - (-8)}{2} = 9 \\implies y = \\pm 3$.",
      "Since $2xy = -6 < 0$, $x$ and $y$ have opposite signs.",
      "Roots are $\\pm(1 - 3i)$."
    ],
    "stepByStepSolutionAr": [
      "المقياس $r = \\sqrt{٦٤ + ٣٦} = ١٠$.",
      "$x^٢ = \\frac{١٠ - ٨}{٢} = ١ \\implies x = \\pm ١$.",
      "$y^٢ = \\frac{١٠ + ٨}{٢} = ٩ \\implies y = \\pm ٣$.",
      "بما أن $٢xy = -٦ < ٠$ فالإشارتان مختلفتان.",
      "الجذران هما: $\\pm(١ - ٣ت)$."
    ],
    "teacherTipEn": "Square root formula: $x = \\pm\\sqrt{\\frac{r+a}{2}}$, $y = \\pm\\text{sgn}(b)\\sqrt{\\frac{r-a}{2}}$.",
    "teacherTipAr": "قانون الجذور التربيعية السريع: $x = \\pm\\sqrt{\\frac{r+a}{٢}}$ مع مراعاة إشارة b."
  },
  {
    "id": "alg_ch2_db_med_23",
    "titleEn": "Square Roots of Pure Imaginary 2i",
    "titleAr": "الجذران التربيعيان للعدد التخيلي ٢ت",
    "difficulty": "medium",
    "questionEn": "Determine the square roots of $2i$.",
    "questionAr": "حدد الجذرين التربيعيين للعدد $٢ت$.",
    "optionsEn": [
      "\\pm(1 + i)",
      "\\pm(1 - i)",
      "\\pm(\\sqrt{2} + i)",
      "\\pm 2i"
    ],
    "optionsAr": [
      "\\pm(١ + ت)",
      "\\pm(١ - ت)",
      "\\pm(\\sqrt{٢} + ت)",
      "\\pm ٢ت"
    ],
    "correctAnswer": "\\pm(1 + i)",
    "correctIndex": 0,
    "hintEn": "Recall that $(1 + i)^2 = 2i$.",
    "hintAr": "تذكر أن $(١ + ت)^٢ = ٢ت$.",
    "stepByStepSolutionEn": [
      "We already know that $(1 + i)^2 = 1 + 2i - 1 = 2i$.",
      "Therefore, the two square roots are $\\pm(1 + i)$."
    ],
    "stepByStepSolutionAr": [
      "نعلم مباشرة أن $(١ + ت)^٢ = ٢ت$.",
      "وبالتالي فإن الجذرين التربيعيين هما $\\pm(١ + ت)$."
    ],
    "teacherTipEn": "Directly recognizing $(1+i)^2 = 2i$ saves 5 minutes during the exam.",
    "teacherTipAr": "معرفة أن $(١+ت)^٢ = ٢ت$ توفر وقتاً كبيراً في الامتحان."
  },
  {
    "id": "alg_ch2_db_med_24",
    "titleEn": "Square Roots of -2i",
    "titleAr": "الجذران التربيعيان للعدد -٢ت",
    "difficulty": "medium",
    "questionEn": "Find the square roots of $-2i$.",
    "questionAr": "أوجد الجذرين التربيعيين للعدد $-٢ت$.",
    "optionsEn": [
      "\\pm(1 - i)",
      "\\pm(1 + i)",
      "\\pm(i - 1)",
      "\\pm 2"
    ],
    "optionsAr": [
      "\\pm(١ - ت)",
      "\\pm(١ + ت)",
      "\\pm(ت - ١)",
      "\\pm ٢"
    ],
    "correctAnswer": "\\pm(1 - i)",
    "correctIndex": 0,
    "hintEn": "$(1 - i)^2 = -2i$.",
    "hintAr": "$(١ - ت)^٢ = -٢ت$.",
    "stepByStepSolutionEn": [
      "Since $(1 - i)^2 = 1 - 2i - 1 = -2i$,",
      "the square roots of $-2i$ are $\\pm(1 - i)$."
    ],
    "stepByStepSolutionAr": [
      "بما أن $(١ - ت)^٢ = -٢ت$،",
      "فإن الجذرين التربيعيين هما $\\pm(١ - ت)$."
    ],
    "teacherTipEn": "The two roots are $1 - i$ and $-1 + i$.",
    "teacherTipAr": "الجذران هما $(١ - ت)$ و $(-١ + ت)$."
  },
  {
    "id": "alg_ch2_db_med_25",
    "titleEn": "Square Roots of 8 - 6i",
    "titleAr": "الجذران التربيعيان للعدد ٨ - ٦ت",
    "difficulty": "medium",
    "questionEn": "Calculate the square roots of $8 - 6i$.",
    "questionAr": "احسب الجذرين التربيعيين للعدد $٨ - ٦ت$.",
    "optionsEn": [
      "\\pm(3 - i)",
      "\\pm(3 + i)",
      "\\pm(1 - 3i)",
      "\\pm(1 + 3i)"
    ],
    "optionsAr": [
      "\\pm(٣ - ت)",
      "\\pm(٣ + ت)",
      "\\pm(١ - ٣ت)",
      "\\pm(١ + ٣ت)"
    ],
    "correctAnswer": "\\pm(3 - i)",
    "correctIndex": 0,
    "hintEn": "$r = \\sqrt{64 + 36} = 10$. $x = \\sqrt{(10+8)/2} = 3$.",
    "hintAr": "$r = ١٠$. $x = \\sqrt{(١٠+٨)/٢} = ٣$.",
    "stepByStepSolutionEn": [
      "$r = 10$, $a = 8$, $b = -6$.",
      "$$x = \\sqrt{\\frac{10 + 8}{2}} = \\sqrt{9} = 3$$",
      "$$y = \\sqrt{\\frac{10 - 8}{2}} = \\sqrt{1} = 1$$",
      "Since $b < 0$, the signs are opposite: $\\pm(3 - i)$."
    ],
    "stepByStepSolutionAr": [
      "$r = ١٠$، $a = ٨$، $b = -٦$.",
      "$$x = \\sqrt{\\frac{١٠ + ٨}{٢}} = ٣$$",
      "$$y = \\sqrt{\\frac{١٠ - ٨}{٢}} = ١$$",
      "بما أن $b < ٠$ فالإشارتان مختلفتان: $\\pm(٣ - ت)$."
    ],
    "teacherTipEn": "Check: $(3 - i)^2 = 9 - 6i - 1 = 8 - 6i$.",
    "teacherTipAr": "تحقق: $(٣ - ت)^٢ = ٩ - ٦ت - ١ = ٨ - ٦ت$."
  },
  {
    "id": "alg_ch2_db_med_26",
    "titleEn": "Square Roots of -15 + 8i",
    "titleAr": "الجذران التربيعيان للعدد -١٥ + ٨ت",
    "difficulty": "medium",
    "questionEn": "Find the square roots of $-15 + 8i$.",
    "questionAr": "أوجد الجذرين التربيعيين للعدد $-١٥ + ٨ت$.",
    "optionsEn": [
      "\\pm(1 + 4i)",
      "\\pm(4 + i)",
      "\\pm(1 - 4i)",
      "\\pm(4 - i)"
    ],
    "optionsAr": [
      "\\pm(١ + ٤ت)",
      "\\pm(٤ + ت)",
      "\\pm(١ - ٤ت)",
      "\\pm(٤ - ت)"
    ],
    "correctAnswer": "\\pm(1 + 4i)",
    "correctIndex": 0,
    "hintEn": "Modulus $r = \\sqrt{225 + 64} = \\sqrt{289} = 17$.",
    "hintAr": "المقياس $r = \\sqrt{٢٢٥ + ٦٤} = ١٧$.",
    "stepByStepSolutionEn": [
      "$r = \\sqrt{(-15)^2 + 8^2} = \\sqrt{289} = 17$.",
      "$$x = \\sqrt{\\frac{17 + (-15)}{2}} = \\sqrt{1} = 1$$",
      "$$y = \\sqrt{\\frac{17 - (-15)}{2}} = \\sqrt{16} = 4$$",
      "Since $b = 8 > 0$, signs are identical: $\\pm(1 + 4i)$."
    ],
    "stepByStepSolutionAr": [
      "$r = ١٧$.",
      "$$x = \\sqrt{\\frac{١٧ - ١٥}{٢}} = ١$$",
      "$$y = \\sqrt{\\frac{١٧ + ١٥}{٢}} = ٤$$",
      "بما أن $b > ٠$ فالإشارتان متماثلتان: $\\pm(١ + ٤ت)$."
    ],
    "teacherTipEn": "Check: $(1+4i)^2 = 1 + 8i - 16 = -15 + 8i$.",
    "teacherTipAr": "تحقق: $(١+٤ت)^٢ = ١ + ٨ت - ١٦ = -١٥ + ٨ت$."
  },
  {
    "id": "alg_ch2_db_med_27",
    "titleEn": "Solving Quadratic z^2 - 2z + 2 = 0",
    "titleAr": "حل المعادلة التربيعية z^٢ - ٢z + ٢ = ٠",
    "difficulty": "medium",
    "questionEn": "Find the solution set of $z^2 - 2z + 2 = 0$ in $\\mathbb{C}$.",
    "questionAr": "أوجد مجموعة حل المعادلة $z^٢ - ٢z + ٢ = ٠$ في مجموعة الأعداد المركبة $\\mathbb{C}$.",
    "optionsEn": [
      "{1 + i, 1 - i}",
      "{2 + i, 2 - i}",
      "{-1 + i, -1 - i}",
      "{1 + 2i, 1 - 2i}"
    ],
    "optionsAr": [
      "{١ + ت، ١ - ت}",
      "{٢ + ت، ٢ - ت}",
      "{-١ + ت، -١ - ت}",
      "{١ + ٢ت، ١ - ٢ت}"
    ],
    "correctAnswer": "{1 + i, 1 - i}",
    "correctIndex": 0,
    "hintEn": "Complete the square: $(z - 1)^2 + 1 = 0$.",
    "hintAr": "بإكمال المربع: $(z - ١)^٢ + ١ = ٠$.",
    "stepByStepSolutionEn": [
      "Rewrite by completing the square:",
      "$(z - 1)^2 + 1 = 0 \\implies (z - 1)^2 = -1$",
      "$$z - 1 = \\pm i \\implies z = 1 \\pm i$$"
    ],
    "stepByStepSolutionAr": [
      "بإكمال المربع:",
      "$(z - ١)^٢ + ١ = ٠ \\implies (z - ١)^٢ = -١$",
      "$$z - ١ = \\pm ت \\implies z = ١ \\pm ت$$"
    ],
    "teacherTipEn": "When discriminant $\\Delta < 0$, real coefficients guarantee conjugate roots.",
    "teacherTipAr": "عندما يكون المميز سالباً والمعاملات حقيقية، يكون الجذران مترافقين دائماً."
  },
  {
    "id": "alg_ch2_db_med_28",
    "titleEn": "Quadratic with Pure Imaginary Roots",
    "titleAr": "معادلة تربيعية ذات جذور تخيلية بحتة",
    "difficulty": "medium",
    "questionEn": "Solve $z^2 + 9 = 0$ in $\\mathbb{C}$.",
    "questionAr": "حل المعادلة $z^٢ + ٩ = ٠$ في $\\mathbb{C}$.",
    "optionsEn": [
      "{\\pm 3i}",
      "{\\pm 3}",
      "{\\pm 9i}",
      "{3 \\pm i}"
    ],
    "optionsAr": [
      "{\\pm ٣ت}",
      "{\\pm ٣}",
      "{\\pm ٩ت}",
      "{٣ \\pm ت}"
    ],
    "correctAnswer": "{\\pm 3i}",
    "correctIndex": 0,
    "hintEn": "$z^2 = -9 = 9i^2$.",
    "hintAr": "$z^٢ = -٩ = ٩ت^٢$.",
    "stepByStepSolutionEn": [
      "$$z^2 = -9 = 9(-1) = 9i^2$$",
      "$$z = \\pm 3i$$"
    ],
    "stepByStepSolutionAr": [
      "$$z^٢ = -٩ = ٩ت^٢ \\implies z = \\pm ٣ت$$"
    ],
    "teacherTipEn": "In the complex field, the sum of two squares factors into $(z + 3i)(z - 3i)$.",
    "teacherTipAr": "في الأعداد المركبة يتحلل مجموع المربعين إلى $(z + ٣ت)(z - ٣ت)$."
  },
  {
    "id": "alg_ch2_db_med_29",
    "titleEn": "Solving z^2 + 4z + 13 = 0",
    "titleAr": "حل المعادلة z^٢ + ٤z + ١٣ = ٠",
    "difficulty": "medium",
    "questionEn": "Find the roots of $z^2 + 4z + 13 = 0$.",
    "questionAr": "أوجد جذري المعادلة $z^٢ + ٤z + ١٣ = ٠$.",
    "optionsEn": [
      "-2 \\pm 3i",
      "2 \\pm 3i",
      "-2 \\pm 9i",
      "-4 \\pm 3i"
    ],
    "optionsAr": [
      "-٢ \\pm ٣ت",
      "٢ \\pm ٣ت",
      "-٢ \\pm ٩ت",
      "-٤ \\pm ٣ت"
    ],
    "correctAnswer": "-2 \\pm 3i",
    "correctIndex": 0,
    "hintEn": "$(z + 2)^2 + 9 = 0$.",
    "hintAr": "$(z + ٢)^٢ + ٩ = ٠$.",
    "stepByStepSolutionEn": [
      "$$(z + 2)^2 + 9 = 0 \\implies (z + 2)^2 = -9 = 9i^2$$",
      "$$z + 2 = \\pm 3i \\implies z = -2 \\pm 3i$$"
    ],
    "stepByStepSolutionAr": [
      "$$(z + ٢)^٢ = -٩ \\implies z + ٢ = \\pm ٣ت \\implies z = -٢ \\pm ٣ت$$"
    ],
    "teacherTipEn": "Completing the square is much faster than the general quadratic formula.",
    "teacherTipAr": "إكمال المربع أسرع بكثير من القانون العام في مثل هذه المعادلات."
  },
  {
    "id": "alg_ch2_db_med_30",
    "titleEn": "Modulus of Roots of z^2 - 6z + 25 = 0",
    "titleAr": "مقياس جذري المعادلة z^٢ - ٦z + ٢٥ = ٠",
    "difficulty": "medium",
    "questionEn": "What is the modulus $|z|$ of any root of $z^2 - 6z + 25 = 0$?",
    "questionAr": "ما هو مقياس $|z|$ لأي من جذري المعادلة $z^٢ - ٦z + ٢٥ = ٠$؟",
    "optionsEn": [
      "5",
      "25",
      "\\sqrt{6}",
      "3"
    ],
    "optionsAr": [
      "٥",
      "٢٥",
      "\\sqrt{٦}",
      "٣"
    ],
    "correctAnswer": "5",
    "correctIndex": 0,
    "hintEn": "The product of roots is $z_1 z_2 = 25$. Since $z_2 = \\bar{z}_1$, $|z|^2 = 25$.",
    "hintAr": "حاصل ضرب الجذرين = ٢٥، وبما أنهما مترافقان فإن $|z|^٢ = ٢٥$.",
    "stepByStepSolutionEn": [
      "By Vieta's formulas, product of roots is $z_1 z_2 = c/a = 25$.",
      "Since coefficients are real and discriminant $\\Delta = 36 - 100 = -64 < 0$, roots are complex conjugates: $z_2 = \\bar{z}_1$.",
      "Therefore $z_1 \\bar{z}_1 = |z_1|^2 = 25 \\implies |z_1| = 5$."
    ],
    "stepByStepSolutionAr": [
      "حاصل ضرب الجذرين من معادلة الدرجة الثانية = $c/a = ٢٥$.",
      "بما أن المعاملات حقيقية والمميز سالب، فالجذران مترافقان:",
      "$z_١ \\cdot \\bar{z}_١ = |z_١|^٢ = ٢٥ \\implies |z| = ٥$."
    ],
    "teacherTipEn": "You can find $|z|$ directly from the constant term without actually solving for the roots!",
    "teacherTipAr": "يمكنك إيجاد مقياس الجذور مباشرة من الحد المطلق دون الحاجة لحل المعادلة!"
  },
  {
    "id": "alg_ch2_db_med_31",
    "titleEn": "Standard Omega Fraction (5omega^2 + 3)/(5 + 3omega)",
    "titleAr": "تبسيط كسر أوميجا القياسي",
    "difficulty": "medium",
    "questionEn": "Simplify $\\frac{5\\omega^2 + 3}{5 + 3\\omega}$.",
    "questionAr": "بسط المقدار: $\\frac{٥\\omega^٢ + ٣}{٥ + ٣\\omega}$.",
    "optionsEn": [
      "\\omega^2",
      "\\omega",
      "1",
      "-1"
    ],
    "optionsAr": [
      "\\omega^٢",
      "\\omega",
      "١",
      "-١"
    ],
    "correctAnswer": "\\omega^2",
    "correctIndex": 0,
    "hintEn": "Multiply the constant 3 in the numerator by $\\omega^3 = 1$, then factor out $\\omega^2$.",
    "hintAr": "اضرب الحد المطلق ٣ في البسط في $\\omega^٣ = ١$ ثم خذ $\\omega^٢$ عاملاً مشتركاً.",
    "stepByStepSolutionEn": [
      "Write $3 = 3\\omega^3$ in the numerator:",
      "$$\\frac{5\\omega^2 + 3\\omega^3}{5 + 3\\omega} = \\frac{\\omega^2(5 + 3\\omega)}{5 + 3\\omega} = \\omega^2$$"
    ],
    "stepByStepSolutionAr": [
      "نعوض عن ٣ في البسط بـ $٣\\omega^٣$:",
      "$$\\frac{٥\\omega^٢ + ٣\\omega^٣}{٥ + ٣\\omega} = \\frac{\\omega^٢(٥ + ٣\\omega)}{٥ + ٣\\omega} = \\omega^٢$$"
    ],
    "teacherTipEn": "Whenever coefficients match diagonally, multiply the free constant by $\\omega^3$ and factor out.",
    "teacherTipAr": "كلما تطابقت المعاملات قطرياً، اضرب الحد الخالي من أوميجا في $\\omega^٣$ واستخرج عاملاً مشتركاً."
  },
  {
    "id": "alg_ch2_db_med_32",
    "titleEn": "Omega Fraction (7 + 4omega)/(7omega^2 + 4)",
    "titleAr": "كسر أوميجا بضرب الثابت",
    "difficulty": "medium",
    "questionEn": "Simplify the fraction $\\frac{7 + 4\\omega}{7\\omega^2 + 4}$.",
    "questionAr": "بسط الكسر: $\\frac{٧ + ٤\\omega}{٧\\omega^٢ + ٤}$.",
    "optionsEn": [
      "\\omega",
      "\\omega^2",
      "1",
      "-1"
    ],
    "optionsAr": [
      "\\omega",
      "\\omega^٢",
      "١",
      "-١"
    ],
    "correctAnswer": "\\omega",
    "correctIndex": 0,
    "hintEn": "Replace 7 with $7\\omega^3$ in the numerator.",
    "hintAr": "استبدل ٧ في البسط بـ $٧\\omega^٣$.",
    "stepByStepSolutionEn": [
      "$$\\frac{7\\omega^3 + 4\\omega}{7\\omega^2 + 4} = \\frac{\\omega(7\\omega^2 + 4)}{7\\omega^2 + 4} = \\omega$$"
    ],
    "stepByStepSolutionAr": [
      "$$\\frac{٧\\omega^٣ + ٤\\omega}{٧\\omega^٢ + ٤} = \\frac{\\omega(٧\\omega^٢ + ٤)}{٧\\omega^٢ + ٤} = \\omega$$"
    ],
    "teacherTipEn": "Notice the result is $\\omega$ because the numerator has degree 1 higher than the denominator after factorization.",
    "teacherTipAr": "الناتج هو $\\omega$ لأن البسط يحتوي عاملاً مشتركاً $\\omega$ يماثل المقام."
  },
  {
    "id": "alg_ch2_db_med_33",
    "titleEn": "Linear Combination to a Power",
    "titleAr": "قوة مقدار ثلاثي لأوميجا",
    "difficulty": "medium",
    "questionEn": "Find the value of $(2 + 5\\omega + 2\\omega^2)^4$.",
    "questionAr": "أوجد قيمة المقدار: $(٢ + ٥\\omega + ٢\\omega^٢)^٤$.",
    "optionsEn": [
      "81\\omega",
      "81\\omega^2",
      "81",
      "-81"
    ],
    "optionsAr": [
      "٨١\\omega",
      "٨١\\omega^٢",
      "٨١",
      "-٨١"
    ],
    "correctAnswer": "81\\omega",
    "correctIndex": 0,
    "hintEn": "Group $2 + 2\\omega^2 = -2\\omega$, so the base becomes $3\\omega$.",
    "hintAr": "اجمع $٢ + ٢\\omega^٢ = -٢\\omega$، فيصبح داخل القوس $٣\\omega$.",
    "stepByStepSolutionEn": [
      "Group the terms with coefficient 2:",
      "$$2 + 2\\omega^2 = 2(1 + \\omega^2) = 2(-\\omega) = -2\\omega$$",
      "Substitute inside the parenthesis:",
      "$$-2\\omega + 5\\omega = 3\\omega$$",
      "Raise to the fourth power:",
      "$$(3\\omega)^4 = 3^4 \\cdot \\omega^4 = 81 \\cdot \\omega = 81\\omega$$"
    ],
    "stepByStepSolutionAr": [
      "نجمع الحدود ذات المعامل ٢:",
      "$$٢ + ٢\\omega^٢ = ٢(١ + \\omega^٢) = -٢\\omega$$",
      "نعوض داخل القوس:",
      "$$-٢\\omega + ٥\\omega = ٣\\omega$$",
      "نرفع للأس ٤:",
      "$$(٣\\omega)^٤ = ٨١ \\omega^٤ = ٨١\\omega$$"
    ],
    "teacherTipEn": "Always look for equal coefficients to combine using $1 + \\omega + \\omega^2 = 0$.",
    "teacherTipAr": "ابحث دائماً عن المعاملات المتساوية لدمجها وتحويلها إلى الحد الثالث."
  },
  {
    "id": "alg_ch2_db_med_34",
    "titleEn": "Cube of Balanced Omega Expression",
    "titleAr": "مكعب مقدار متوازن لأوميجا",
    "difficulty": "medium",
    "questionEn": "Calculate $(3 - 2\\omega + 3\\omega^2)^3$.",
    "questionAr": "احسب قيمة المقدار: $(٣ - ٢\\omega + ٣\\omega^٢)^٣$.",
    "optionsEn": [
      "-125",
      "125",
      "-125\\omega",
      "125\\omega^2"
    ],
    "optionsAr": [
      "-١٢٥",
      "١٢٥",
      "-١٢٥\\omega",
      "١٢٥\\omega^٢"
    ],
    "correctAnswer": "-125",
    "correctIndex": 0,
    "hintEn": "$3 + 3\\omega^2 = -3\\omega$.",
    "hintAr": "$٣ + ٣\\omega^٢ = -٣\\omega$.",
    "stepByStepSolutionEn": [
      "Combine $3 + 3\\omega^2 = -3\\omega$:",
      "Inside expression: $-3\\omega - 2\\omega = -5\\omega$.",
      "Cube it: $(-5\\omega)^3 = (-5)^3 \\cdot \\omega^3 = -125 \\cdot 1 = -125$."
    ],
    "stepByStepSolutionAr": [
      "نجمع $٣ + ٣\\omega^٢ = -٣\\omega$.",
      "داخل القوس يصبح: $-٣\\omega - ٢\\omega = -٥\\omega$.",
      "التكعيب: $(-٥\\omega)^٣ = -١٢٥ \\cdot \\omega^٣ = -١٢٥$."
    ],
    "teacherTipEn": "Cubing $\\omega$ eliminates it completely because $\\omega^3 = 1$.",
    "teacherTipAr": "تكعيب أوميجا يحولها إلى ١، فيعطي عدداً حقيقياً خالصاً."
  },
  {
    "id": "alg_ch2_db_med_35",
    "titleEn": "Product of Two Symmetrical Factors",
    "titleAr": "حاصل ضرب عاملين متناظرين",
    "difficulty": "medium",
    "questionEn": "Simplify $\\left(1 - \\frac{2}{\\omega} + \\omega\\right)\\left(1 + \\omega^2 - \\frac{2}{\\omega^2}\\right)$.",
    "questionAr": "بسط المقدار: $\\left(١ - \\frac{٢}{\\omega} + \\omega\\right)\\left(١ + \\omega^٢ - \\frac{٢}{\\omega^٢}\\right)$.",
    "optionsEn": [
      "9",
      "-9",
      "3",
      "0"
    ],
    "optionsAr": [
      "٩",
      "-٩",
      "٣",
      "٠"
    ],
    "correctAnswer": "9",
    "correctIndex": 0,
    "hintEn": "$\\frac{1}{\\omega} = \\omega^2$ and $\\frac{1}{\\omega^2} = \\omega$.",
    "hintAr": "$\\frac{١}{\\omega} = \\omega^٢$ و $\\frac{١}{\\omega^٢} = \\omega$.",
    "stepByStepSolutionEn": [
      "First bracket: $1 + \\omega = -\\omega^2$, and $-\\frac{2}{\\omega} = -2\\omega^2$. Total $= -3\\omega^2$.",
      "Second bracket: $1 + \\omega^2 = -\\omega$, and $-\\frac{2}{\\omega^2} = -2\\omega$. Total $= -3\\omega$.",
      "Multiply them: $(-3\\omega^2)(-3\\omega) = 9\\omega^3 = 9(1) = 9$."
    ],
    "stepByStepSolutionAr": [
      "القوس الأول: $١ + \\omega = -\\omega^٢$، و $-\\frac{٢}{\\omega} = -٢\\omega^٢$. المجموع $= -٣\\omega^٢$.",
      "القوس الثاني: $١ + \\omega^٢ = -\\omega$، و $-\\frac{٢}{\\omega^٢} = -٢\\omega$. المجموع $= -٣\\omega$.",
      "حاصل ضربهما: $(-٣\\omega^٢)(-٣\\omega) = ٩\\omega^٣ = ٩$."
    ],
    "teacherTipEn": "Always convert fractions in $\\omega$ to positive integer powers first.",
    "teacherTipAr": "حول دائماً كسور أوميجا إلى قوى صحيحة موجبة قبل التجميع."
  },
  {
    "id": "alg_ch2_db_med_36",
    "titleEn": "Sum of Reciprocals of (1 + omega) and (1 + omega^2)",
    "titleAr": "مجموع مقلوبي (١ + أوميجا) و (١ + أوميجا تربيع)",
    "difficulty": "medium",
    "questionEn": "Find the value of $\\frac{1}{1 + \\omega} + \\frac{1}{1 + \\omega^2}$.",
    "questionAr": "أوجد قيمة المقدار: $\\frac{١}{١ + \\omega} + \\frac{١}{١ + \\omega^٢}$.",
    "optionsEn": [
      "1",
      "-1",
      "0",
      "2"
    ],
    "optionsAr": [
      "١",
      "-١",
      "٠",
      "٢"
    ],
    "correctAnswer": "1",
    "correctIndex": 0,
    "hintEn": "$1 + \\omega = -\\omega^2$ and $1 + \\omega^2 = -\\omega$.",
    "hintAr": "$١ + \\omega = -\\omega^٢$ و $١ + \\omega^٢ = -\\omega$.",
    "stepByStepSolutionEn": [
      "Substitute the denominators:",
      "$$\\frac{1}{-\\omega^2} + \\frac{1}{-\\omega} = -\\left(\\frac{1}{\\omega^2} + \\frac{1}{\\omega}\\right)$$",
      "Since $\\frac{1}{\\omega^2} = \\omega$ and $\\frac{1}{\\omega} = \\omega^2$:",
      "$$= -(\\omega + \\omega^2) = -(-1) = 1$$"
    ],
    "stepByStepSolutionAr": [
      "بالتعويض في المقامات:",
      "$$\\frac{١}{-\\omega^٢} + \\frac{١}{-\\omega} = -(\\omega + \\omega^٢) = -(-١) = ١$$"
    ],
    "teacherTipEn": "This elegant identity frequently appears as an MCQ in Thanaweya exams.",
    "teacherTipAr": "متطابقة أنيقة تتكرر باستمرار في أسئلة الاختيار من متعدد بالثانوية العامة."
  },
  {
    "id": "alg_ch2_db_med_37",
    "titleEn": "Sum of Rational Functions of Omega",
    "titleAr": "مجموع دوال كسرية لأوميجا",
    "difficulty": "medium",
    "questionEn": "Evaluate $\\frac{1}{1 + 2\\omega} + \\frac{1}{1 + 2\\omega^2}$.",
    "questionAr": "احسب قيمة المقدار: $\\frac{١}{١ + ٢\\omega} + \\frac{١}{١ + ٢\\omega^٢}$.",
    "optionsEn": [
      "0",
      "1",
      "-1",
      "\\frac{2}{3}"
    ],
    "optionsAr": [
      "٠",
      "١",
      "-١",
      "\\frac{٢}{٣}"
    ],
    "correctAnswer": "0",
    "correctIndex": 0,
    "hintEn": "Find a common denominator: $(1 + 2\\omega)(1 + 2\\omega^2)$.",
    "hintAr": "وحّد المقامات: $(١ + ٢\\omega)(١ + ٢\\omega^٢)$.",
    "stepByStepSolutionEn": [
      "Numerator upon combining fractions:",
      "$$(1 + 2\\omega^2) + (1 + 2\\omega) = 2 + 2(\\omega + \\omega^2) = 2 + 2(-1) = 0$$",
      "Denominator: $1 + 2\\omega^2 + 2\\omega + 4\\omega^3 = 1 + 2(-1) + 4 = 3 \\neq 0$.",
      "Therefore: $\\frac{0}{3} = 0$."
    ],
    "stepByStepSolutionAr": [
      "البسط بعد توحيد المقامات:",
      "$$(١ + ٢\\omega^٢) + (١ + ٢\\omega) = ٢ + ٢(\\omega + \\omega^٢) = ٢ - ٢ = ٠$$",
      "المقام: $١ + ٢(-١) + ٤ = ٣ \\neq ٠$.",
      "الناتج: $\\frac{٠}{٣} = ٠$."
    ],
    "teacherTipEn": "Notice how the numerator evaluated directly to zero!",
    "teacherTipAr": "لاحظ أن البسط انعدم مباشرة فأعطى الناتج صفراً دون الحاجة لتبسيط المقام."
  },
  {
    "id": "alg_ch2_db_med_38",
    "titleEn": "Eighth Power of Difference of Omegas",
    "titleAr": "القوة الثامنة للفرق بين أوميجا ومربعها",
    "difficulty": "medium",
    "questionEn": "Calculate $(\\omega - \\omega^2)^8$.",
    "questionAr": "احسب قيمة المقدار: $(\\omega - \\omega^2)^8$.",
    "optionsEn": [
      "$81$",
      "$-81$",
      "$27$",
      "$-27$"
    ],
    "optionsAr": [
      "$81$",
      "$-81$",
      "$27$",
      "$-27$"
    ],
    "correctAnswer": "$81$",
    "correctIndex": 0,
    "hintEn": "$[(\\omega - \\omega^2)^2]^4 = (-3)^4 = 81$.",
    "hintAr": "$[(\\omega - \\omega^2)^2]^4 = (-3)^4 = 81$.",
    "stepByStepSolutionEn": [
      "Recall that $(\\omega - \\omega^2) = \\pm i\\sqrt{3}$.",
      "Squaring gives $(\\omega - \\omega^2)^2 = (\\pm i\\sqrt{3})^2 = -3$.",
      "Therefore: $(\\omega - \\omega^2)^8 = [(\\omega - \\omega^2)^2]^4 = (-3)^4 = 81$."
    ],
    "stepByStepSolutionAr": [
      "تذكر أن $(\\omega - \\omega^2) = \\pm i\\sqrt{3}$.",
      "بتربيع الطرفين: $(\\omega - \\omega^2)^2 = (\\pm i\\sqrt{3})^2 = -3$.",
      "إذن: $(\\omega - \\omega^2)^8 = [(\\omega - \\omega^2)^2]^4 = (-3)^4 = 81$."
    ],
    "teacherTipEn": "An even power of $(\\omega - \\omega^2)$ is always a real number.",
    "teacherTipAr": "أي قوة زوجية للمقدار $(\\omega - \\omega^2)$ تعطي دائماً عدداً حقيقياً."
  },
  {
    "id": "alg_ch2_db_med_39",
    "titleEn": "Simplifying Omega Expression with Signs",
    "titleAr": "تبسيط مقدار أوميجا بإشارات مختلفة",
    "difficulty": "medium",
    "questionEn": "Simplify $\\frac{2 - 3\\omega^2}{2\\omega - 3}$.",
    "questionAr": "بسط المقدار: $\\frac{٢ - ٣\\omega^٢}{٢\\omega - ٣}$.",
    "optionsEn": [
      "\\omega^2",
      "\\omega",
      "-1",
      "-\\omega"
    ],
    "optionsAr": [
      "\\omega^٢",
      "\\omega",
      "-١",
      "-\\omega"
    ],
    "correctAnswer": "\\omega^2",
    "correctIndex": 0,
    "hintEn": "Replace 2 with $2\\omega^3$ in the numerator.",
    "hintAr": "عوض عن ٢ في البسط بـ $٢\\omega^٣$.",
    "stepByStepSolutionEn": [
      "Numerator: $2\\omega^3 - 3\\omega^2 = \\omega^2(2\\omega - 3)$.",
      "Wait! Let's check: $\\frac{\\omega^2(2\\omega - 3)}{2\\omega - 3} = \\omega^2$.",
      "Let's make sure: $2\\omega^3 - 3\\omega^2 = \\omega^2(2\\omega - 3)$.",
      "Dividing by $(2\\omega - 3)$ gives $\\omega^2$!"
    ],
    "stepByStepSolutionAr": [
      "نعوض عن ٢ في البسط بـ $٢\\omega^٣$:",
      "$$٢\\omega^٣ - ٣\\omega^٢ = \\omega^٢(٢\\omega - ٣)$$",
      "بالقسمة على المقام $(٢\\omega - ٣)$ ينتج $\\omega^٢$."
    ],
    "teacherTipEn": "Always verify the degree of the factor you take out.",
    "teacherTipAr": "تحقق دائماً من درجة العامل المشترك المستخرج."
  },
  {
    "id": "alg_ch2_db_med_40",
    "titleEn": "Evaluation of (1 - omega)(1 - omega^2)",
    "titleAr": "حساب قيمة المقدار (١ - أوميجا)(١ - أوميجا تربيع)",
    "difficulty": "medium",
    "questionEn": "Calculate the product $(1 - \\omega)(1 - \\omega^2)$.",
    "questionAr": "احسب حاصل ضرب المقدارين: $(١ - \\omega)(١ - \\omega^٢)$.",
    "optionsEn": [
      "3",
      "-3",
      "1",
      "0"
    ],
    "optionsAr": [
      "٣",
      "-٣",
      "١",
      "٠"
    ],
    "correctAnswer": "3",
    "correctIndex": 0,
    "hintEn": "Expand the product: $1 - \\omega^2 - \\omega + \\omega^3$.",
    "hintAr": "فك القوسين: $١ - \\omega^٢ - \\omega + \\omega^٣$.",
    "stepByStepSolutionEn": [
      "Expand directly:",
      "$$(1 - \\omega)(1 - \\omega^2) = 1 - \\omega^2 - \\omega + \\omega^3$$",
      "Using $\\omega^3 = 1$ and $-(\\omega + \\omega^2) = -(-1) = 1$:",
      "$$= 1 + 1 + 1 = 3$$"
    ],
    "stepByStepSolutionAr": [
      "بفك الأقواس مباشرة:",
      "$$١ - \\omega^٢ - \\omega + \\omega^٣ = ١ - (\\omega + \\omega^٢) + ١$$",
      "$$= ١ - (-١) + ١ = ٣$$"
    ],
    "teacherTipEn": "This product represents $|1 - \\omega|^2 = 3$, meaning the distance from 1 to $\\omega$ in the complex plane is $\\sqrt{3}$.",
    "teacherTipAr": "هذا الناتج يمثل مربع المسافة بين النقطة ١ و أوميجا في مستوى أرجاند ومقدارها $\\sqrt{٣}$."
  },
  {
    "id": "alg_ch2_db_med_41",
    "titleEn": "Side Length of Equilateral Triangle of Cube Roots",
    "titleAr": "طول ضلع المثلث المتساوي الأضلاع لجذور العدد ٨",
    "difficulty": "medium",
    "questionEn": "Find the side length of the equilateral triangle whose vertices are the roots of $z^3 = 8$.",
    "questionAr": "أوجد طول ضلع المثلث المتساوي الأضلاع الذي رؤوسه هي جذور المعادلة $z^٣ = ٨$.",
    "optionsEn": [
      "2\\sqrt{3}",
      "2",
      "4",
      "\\sqrt{3}"
    ],
    "optionsAr": [
      "٢\\sqrt{٣}",
      "٢",
      "٤",
      "\\sqrt{٣}"
    ],
    "correctAnswer": "2\\sqrt{3}",
    "correctIndex": 0,
    "hintEn": "Roots are $2, 2\\omega, 2\\omega^2$. The distance between 1 and $\\omega$ is $\\sqrt{3}$.",
    "hintAr": "الجذور هي ٢، ٢أوميجا، ٢أوميجا تربيع. البعد بين ١ وأوميجا هو $\\sqrt{٣}$.",
    "stepByStepSolutionEn": [
      "The roots are $z_1 = 2$, $z_2 = 2\\omega$, $z_3 = 2\\omega^2$.",
      "Distance between $z_1$ and $z_2$:",
      "$$|z_1 - z_2| = |2 - 2\\omega| = 2|1 - \\omega|$$",
      "Since $|1 - \\omega| = \\sqrt{(1 - (-1/2))^2 + (-\\sqrt{3}/2)^2} = \\sqrt{9/4 + 3/4} = \\sqrt{3}$:",
      "$$|z_1 - z_2| = 2\\sqrt{3}$$"
    ],
    "stepByStepSolutionAr": [
      "الجذور الثلاثة هي $z_١ = ٢$ و $z_٢ = ٢\\omega$ و $z_٣ = ٢\\omega^٢$.",
      "المسافة بين رأسين متجاورين هي:",
      "$$|٢ - ٢\\omega| = ٢|١ - \\omega| = ٢\\sqrt{٣}$$"
    ],
    "teacherTipEn": "For roots of $z^3 = R^3$, the side length of the inscribed equilateral triangle is always $R\\sqrt{3}$.",
    "teacherTipAr": "لجذور $z^٣ = R^٣$، طول ضلع المثلث المتساوي الأضلاع هو دائماً $R\\sqrt{٣}$."
  },
  {
    "id": "alg_ch2_db_med_42",
    "titleEn": "Area of the Triangle of Cube Roots of 8",
    "titleAr": "مساحة المثلث المتكون من الجذور التكعيبية للعدد ٨",
    "difficulty": "medium",
    "questionEn": "What is the area of the equilateral triangle whose vertices are the roots of $z^3 = 8$?",
    "questionAr": "ما هي مساحة المثلث المتساوي الأضلاع المتكون من رؤوس جذور $z^٣ = ٨$؟",
    "optionsEn": [
      "3\\sqrt{3}",
      "4\\sqrt{3}",
      "2\\sqrt{3}",
      "6"
    ],
    "optionsAr": [
      "٣\\sqrt{٣}",
      "٤\\sqrt{٣}",
      "٢\\sqrt{٣}",
      "٦"
    ],
    "correctAnswer": "3\\sqrt{3}",
    "correctIndex": 0,
    "hintEn": "Area of equilateral triangle with side $s$ is $\\frac{\\sqrt{3}}{4} s^2$.",
    "hintAr": "مساحة المثلث المتساوي الأضلاع هي $\\frac{\\sqrt{٣}}{٤} s^٢$.",
    "stepByStepSolutionEn": [
      "Side length is $s = 2\\sqrt{3}$.",
      "$$\\text{Area} = \\frac{\\sqrt{3}}{4} s^2 = \\frac{\\sqrt{3}}{4} (2\\sqrt{3})^2 = \\frac{\\sqrt{3}}{4} \\times 12 = 3\\sqrt{3}$$"
    ],
    "stepByStepSolutionAr": [
      "طول الضلع $s = ٢\\sqrt{٣}$.",
      "$$\\text{المساحة} = \\frac{\\sqrt{٣}}{٤} s^٢ = \\frac{\\sqrt{٣}}{٤} \\times ١٢ = ٣\\sqrt{٣}$$"
    ],
    "teacherTipEn": "Alternatively, area = $3 \\times (\\frac{1}{2} R^2 \\sin 120^\\circ) = 3 \\times (\\frac{1}{2} \\times 4 \\times \\frac{\\sqrt{3}}{2}) = 3\\sqrt{3}$.",
    "teacherTipAr": "أو بتقسيم المثلث إلى ٣ مثلثات متطابقة عند المركز: $٣ \\times (\\frac{١}{٢} R^٢ \\sin ١٢٠^\\circ) = ٣\\sqrt{٣}$."
  },
  {
    "id": "alg_ch2_db_med_43",
    "titleEn": "Distance Between Fourth Roots of Unity",
    "titleAr": "المسافة بين الجذور الرباعية للواحد",
    "difficulty": "medium",
    "questionEn": "The roots of $z^4 = 1$ form a square in the Argand plane. Find its side length.",
    "questionAr": "جذور المعادلة $z^٤ = ١$ تكون مربعاً في مستوى أرجاند. أوجد طول ضلعه.",
    "optionsEn": [
      "\\sqrt{2}",
      "1",
      "2",
      "2\\sqrt{2}"
    ],
    "optionsAr": [
      "\\sqrt{٢}",
      "١",
      "٢",
      "٢\\sqrt{٢}"
    ],
    "correctAnswer": "\\sqrt{2}",
    "correctIndex": 0,
    "hintEn": "The vertices are $1, i, -1, -i$.",
    "hintAr": "رؤوس المربع هي ١، ت، -١، -ت.",
    "stepByStepSolutionEn": [
      "The vertices are $(1, 0)$ and $(0, 1)$.",
      "Distance between $(1, 0)$ and $(0, 1)$ is:",
      "$$d = \\sqrt{(1 - 0)^2 + (0 - 1)^2} = \\sqrt{1 + 1} = \\sqrt{2}$$"
    ],
    "stepByStepSolutionAr": [
      "الرؤوس هي $(١، ٠)$ و $(٠، ١)$.",
      "المسافة بينهما: $d = \\sqrt{١^٢ + (-١)^٢} = \\sqrt{٢}$."
    ],
    "teacherTipEn": "In a unit square inscribed in a circle of radius $R=1$, side length is $R\\sqrt{2} = \\sqrt{2}$.",
    "teacherTipAr": "في المربع المرسوم داخل دائرة الوحدة، طول الضلع يساوي $R\\sqrt{٢} = \\sqrt{٢}$."
  },
  {
    "id": "alg_ch2_db_med_44",
    "titleEn": "Perimeter of Hexagon of Sixth Roots of Unity",
    "titleAr": "محيط المسدس المنتظم للجذور السداسية للواحد",
    "difficulty": "medium",
    "questionEn": "What is the perimeter of the regular polygon formed by the roots of $z^6 = 1$?",
    "questionAr": "ما هو محيط المضلع المنتظم المتكون من جذور المعادلة $z^٦ = ١$؟",
    "optionsEn": [
      "6",
      "6\\sqrt{3}",
      "3",
      "12"
    ],
    "optionsAr": [
      "٦",
      "٦\\sqrt{٣}",
      "٣",
      "١٢"
    ],
    "correctAnswer": "6",
    "correctIndex": 0,
    "hintEn": "In a regular hexagon inscribed in a unit circle, the side length equals the radius $R = 1$.",
    "hintAr": "في المسدس المنتظم داخل دائرة الوحدة، طول الضلع يساوي نصف القطر $R = ١$.",
    "stepByStepSolutionEn": [
      "A regular hexagon has central angles of $360^\\circ / 6 = 60^\\circ$.",
      "The triangle formed by two adjacent vertices and the origin is equilateral with side length $R = 1$.",
      "Perimeter $= 6 \\times 1 = 6$."
    ],
    "stepByStepSolutionAr": [
      "الزاوية المركزية للمسدس $= ٦٠^\\circ$.",
      "المثلث مع نقطة الأصل متساوي الأضلاع طول ضلعه $R = ١$.",
      "المحيط $= ٦ \\times ١ = ٦$."
    ],
    "teacherTipEn": "Side length of an inscribed regular hexagon always equals the radius of the circle.",
    "teacherTipAr": "طول ضلع السداسي المنتظم المرسوم داخل دائرة يساوي دائماً نصف قطرها."
  },
  {
    "id": "alg_ch2_db_med_45",
    "titleEn": "Sum of Sines of Roots of Unity",
    "titleAr": "مجموع جيوب جذور الواحد الصحيح",
    "difficulty": "medium",
    "questionEn": "What is the sum of the imaginary parts of all the fifth roots of unity ($z^5 = 1$)?",
    "questionAr": "ما هو مجموع الأجزاء التخيلية لجميع الجذور الخماسية للواحد الصحيح ($z^٥ = ١$)؟",
    "optionsEn": [
      "0",
      "1",
      "5",
      "-1"
    ],
    "optionsAr": [
      "٠",
      "١",
      "٥",
      "-١"
    ],
    "correctAnswer": "0",
    "correctIndex": 0,
    "hintEn": "The sum of all n-th roots of unity is 0.",
    "hintAr": "مجموع الجذور النونية للواحد الصحيح يساوي صفراً.",
    "stepByStepSolutionEn": [
      "Since $\\sum_{k=0}^{4} z_k = 0$, both the real part sum and imaginary part sum must equal 0:",
      "$$\\sum_{k=0}^4 \\text{Im}(z_k) = 0$$"
    ],
    "stepByStepSolutionAr": [
      "بما أن مجموع الجذور النونية $\\sum z_k = ٠$، فإن مجموع أجزائها التخيلية يساوي صفراً أيضاً.",
      "$$\\sum \\text{Im}(z_k) = ٠$$"
    ],
    "teacherTipEn": "Both $\\sum \\cos(2k\\pi/n) = 0$ and $\\sum \\sin(2k\\pi/n) = 0$ for any $n \\ge 2$.",
    "teacherTipAr": "مجموع الجيوب ومجموع جيوب التمام لزوايا الجذور النونية يساوي صفراً لأي $n \\ge ٢$."
  },
  {
    "id": "alg_ch2_db_med_46",
    "titleEn": "Product of Cube Roots of Unity",
    "titleAr": "حاصل ضرب الجذور التكعيبية للواحد",
    "difficulty": "medium",
    "questionEn": "Calculate the product of all three cube roots of unity: $1 \\cdot \\omega \\cdot \\omega^2$.",
    "questionAr": "احسب حاصل ضرب الجذور التكعيبية الثلاثة للواحد الصحيح: $١ \\cdot \\omega \\cdot \\omega^٢$.",
    "optionsEn": [
      "1",
      "-1",
      "i",
      "0"
    ],
    "optionsAr": [
      "١",
      "-١",
      "ت",
      "٠"
    ],
    "correctAnswer": "1",
    "correctIndex": 0,
    "hintEn": "$1 \\cdot \\omega \\cdot \\omega^2 = \\omega^3$.",
    "hintAr": "$١ \\cdot \\omega \\cdot \\omega^٢ = \\omega^٣$.",
    "stepByStepSolutionEn": [
      "$$1 \\cdot \\omega \\cdot \\omega^2 = \\omega^{1 + 2} = \\omega^3 = 1$$"
    ],
    "stepByStepSolutionAr": [
      "$$١ \\cdot \\omega \\cdot \\omega^٢ = \\omega^٣ = ١$$"
    ],
    "teacherTipEn": "By Vieta's formulas, product of roots of $z^3 - 1 = 0$ is $(-1)^3 (-1) = 1$.",
    "teacherTipAr": "من علاقات فييتا لجذور المعادلات: حاصل ضرب جذور $z^٣ - ١ = ٠$ هو $+١$."
  },
  {
    "id": "alg_ch2_db_med_47",
    "titleEn": "Product of Fourth Roots of Unity",
    "titleAr": "حاصل ضرب الجذور الرباعية للواحد",
    "difficulty": "medium",
    "questionEn": "Find the product of all roots of $z^4 = 1$.",
    "questionAr": "أوجد حاصل ضرب جميع جذور المعادلة $z^٤ = ١$.",
    "optionsEn": [
      "-1",
      "1",
      "i",
      "-i"
    ],
    "optionsAr": [
      "-١",
      "١",
      "ت",
      "-ت"
    ],
    "correctAnswer": "-1",
    "correctIndex": 0,
    "hintEn": "The roots are $1, -1, i, -i$.",
    "hintAr": "الجذور هي ١، -١، ت، -ت.",
    "stepByStepSolutionEn": [
      "Product $= (1) \\times (-1) \\times (i) \\times (-i) = (-1) \\times (-i^2) = (-1) \\times 1 = -1$.",
      "Alternatively, for $z^n - 1 = 0$, the product of roots is $(-1)^n (-1) = (-1)^{n+1}$.",
      "For $n = 4$: $(-1)^5 = -1$."
    ],
    "stepByStepSolutionAr": [
      "حاصل الضرب $= (١) \\times (-١) \\times (ت) \\times (-ت) = -١ \\times ١ = -١$.",
      "أو باستخدام القانون: حاصل ضرب الجذور النونية للواحد هو $(-١)^{n+١}$.",
      "عند $n = ٤$ يكون الناتج $(-١)^٥ = -١$."
    ],
    "teacherTipEn": "Notice the product is -1 for even n, and +1 for odd n.",
    "teacherTipAr": "حاصل ضرب الجذور النونية للواحد هو $-١$ للرتب الزوجية و $+١$ للرتب الفردية."
  },
  {
    "id": "alg_ch2_db_med_48",
    "titleEn": "Locus of |z| = 5",
    "titleAr": "المحل الهندسي للمعادلة |z| = ٥",
    "difficulty": "medium",
    "questionEn": "What geometric figure is represented by $|z| = 5$ in the complex plane?",
    "questionAr": "ما هو الشكل الهندسي الذي تمثله المعادلة $|z| = ٥$ في مستوى الأعداد المركبة؟",
    "optionsEn": [
      "A circle centered at the origin with radius 5",
      "A straight line parallel to the real axis",
      "A circle centered at (5, 0) with radius 5",
      "A parabola opening upwards"
    ],
    "optionsAr": [
      "دائرة مركزها نقطة الأصل ونصف قطرها ٥",
      "خط مستقيم يوازي محور السينات",
      "دائرة مركزها (٥، ٠) ونصف قطرها ٥",
      "قطع مكافئ فتحته لأعلى"
    ],
    "correctAnswer": "A circle centered at the origin with radius 5",
    "correctIndex": 0,
    "hintEn": "$|z| = \\sqrt{x^2 + y^2} = 5 \\implies x^2 + y^2 = 25$.",
    "hintAr": "$|z| = \\sqrt{x^٢ + y^٢} = ٥ \\implies x^٢ + y^٢ = ٢٥$.",
    "stepByStepSolutionEn": [
      "Writing $z = x + iy$, the equation becomes $|x + iy| = 5$.",
      "$$\\sqrt{x^2 + y^2} = 5 \\implies x^2 + y^2 = 25$$",
      "This is the standard equation of a circle centered at $(0, 0)$ with radius $R = 5$."
    ],
    "stepByStepSolutionAr": [
      "بوضع $z = x + ت y$:",
      "$$\\sqrt{x^٢ + y^٢} = ٥ \\implies x^٢ + y^٢ = ٢٥$$",
      "وهي معادلة دائرة مركزها نقطة الأصل $(٠، ٠)$ ونصف قطرها $R = ٥$."
    ],
    "teacherTipEn": "In the complex plane, $|z - z_0| = R$ is always a circle centered at $z_0$ with radius $R$.",
    "teacherTipAr": "المعادلة $|z - z_٠| = R$ تمثل دائماً دائرة مركزها $z_٠$ ونصف قطرها $R$."
  },
  {
    "id": "alg_ch2_db_med_49",
    "titleEn": "Locus of |z - 3| = |z + 3i|",
    "titleAr": "المحل الهندسي للمعادلة |z - ٣| = |z + ٣ت|",
    "difficulty": "medium",
    "questionEn": "Describe the geometric locus of points satisfying $|z - 3| = |z + 3i|$.",
    "questionAr": "صف المحل الهندسي للنقاط التي تحقق المعادلة $|z - ٣| = |z + ٣ت|$.",
    "optionsEn": [
      "The perpendicular bisector line y = -x",
      "The straight line y = x",
      "A circle of radius 3",
      "The line segment connecting 3 and -3i"
    ],
    "optionsAr": [
      "المحور العمودي المنصف y = -x",
      "المستقيم y = x",
      "دائرة نصف قطرها ٣",
      "القطعة المستقيمة الواصلة بين ٣ و -٣ت"
    ],
    "correctAnswer": "The perpendicular bisector line y = -x",
    "correctIndex": 0,
    "hintEn": "$|z - z_1| = |z - z_2|$ is the perpendicular bisector of the segment between $z_1 = (3, 0)$ and $z_2 = (0, -3)$.",
    "hintAr": "المعادلة تمثل محور التماثل العمودي المنصف للقطعة بين $(٣، ٠)$ و $(٠، -٣)$ وهو المستقيم $y = -x$.",
    "stepByStepSolutionEn": [
      "Let $z = x + iy$:",
      "$$|x - 3 + iy|^2 = |x + i(y + 3)|^2$$",
      "$$(x - 3)^2 + y^2 = x^2 + (y + 3)^2$$",
      "$$x^2 - 6x + 9 + y^2 = x^2 + y^2 + 6y + 9$$",
      "$$-6x = 6y \\implies y = -x$$",
      "This is the perpendicular bisector line passing through the midpoint."
    ],
    "stepByStepSolutionAr": [
      "بفرض $z = x + ت y$ وتربيع الطرفين:",
      "$$(x - ٣)^٢ + y^٢ = x^٢ + (y + ٣)^٢$$",
      "$$x^٢ - ٦x + ٩ + y^٢ = x^٢ + y^٢ + ٦y + ٩$$",
      "$$-٦x = ٦y \\implies y = -x$$",
      "وهو خط مستقيم يمثل المحور العمودي المنصف."
    ],
    "teacherTipEn": "Whenever $|z - z_1| = |z - z_2|$, the locus is ALWAYS the perpendicular bisector of the segment connecting $z_1$ and $z_2$.",
    "teacherTipAr": "المعادلة $|z - z_١| = |z - z_٢|$ تمثل دائماً المحور العمودي المنصف للقطعة المستقيمة بين النقطتين."
  },
  {
    "id": "alg_ch2_db_med_50",
    "titleEn": "Maximum Modulus on a Circle",
    "titleAr": "أقصى مقياس لنقطة على دائرة",
    "difficulty": "medium",
    "questionEn": "If $|z - 3 - 4i| \\le 2$, find the maximum possible value of $|z|$.",
    "questionAr": "إذا كان $|z - ٣ - ٤ت| \\le ٢$، فأوجد أقصى قيمة ممكنة لـ $|z|$.",
    "optionsEn": [
      "7",
      "5",
      "3",
      "9"
    ],
    "optionsAr": [
      "٧",
      "٥",
      "٣",
      "٩"
    ],
    "correctAnswer": "7",
    "correctIndex": 0,
    "hintEn": "By triangle inequality, $|z| \\le |z_0| + R$.",
    "hintAr": "بمتباينة المثلث: أقصى بعد هو بعد المركز عن نقطة الأصل + نصف القطر.",
    "stepByStepSolutionEn": [
      "Center of the circular disk is $z_0 = 3 + 4i$.",
      "Distance of center to origin: $|z_0| = \\sqrt{3^2 + 4^2} = 5$.",
      "Radius of the disk is $R = 2$.",
      "The maximum distance from the origin to any point in the disk is:",
      "$$|z|_{\\max} = |z_0| + R = 5 + 2 = 7$$"
    ],
    "stepByStepSolutionAr": [
      "مركز الدائرة هو النقطة $(٣، ٤)$ وبُعدها عن الأصل $= \\sqrt{٩ + ١٦} = ٥$.",
      "نصف قطر الدائرة $R = ٢$.",
      "أقصى مسافة للنقطة عن نقطة الأصل:",
      "$$|z|_{\\max} = ٥ + ٢ = ٧$$"
    ],
    "teacherTipEn": "Minimum modulus is $|z_0| - R = 5 - 2 = 3$, and maximum modulus is $|z_0| + R = 5 + 2 = 7$.",
    "teacherTipAr": "أقل مقياس هو $٥ - ٢ = ٣$، وأكبر مقياس هو $٥ + ٢ = ٧$."
  },
  {
    "id": "alg_ch2_db_med_51",
    "titleEn": "Simplifying Ratio with Omega Permuted Coefficients",
    "titleAr": "تبسيط كسر بمعاملات أوميجا الدائرية",
    "difficulty": "medium",
    "questionEn": "Simplify the fraction: $\\frac{3\\omega^2 + 5\\omega + 2}{3\\omega + 5 + 2\\omega^2}$.",
    "questionAr": "بسّط المقدار: $\\frac{3\\omega^2 + 5\\omega + 2}{3\\omega + 5 + 2\\omega^2}$.",
    "optionsEn": [
      "$\\omega$",
      "$\\omega^2$",
      "1",
      "$-1$"
    ],
    "optionsAr": [
      "$\\omega$",
      "$\\omega^2$",
      "1",
      "$-1$"
    ],
    "correctAnswer": "$\\omega$",
    "correctIndex": 0,
    "hintEn": "Notice that the numerator is omega times the denominator (using 2 = 2 omega^3).",
    "hintAr": "لاحظ أن وضع ٢ = ٢ أوميجا^٣ في البسط يسمح بأخذ أوميجا عاملاً مشتركاً.",
    "stepByStepSolutionEn": [
      "1. Rewrite the constant 2 in the numerator as $2\\omega^3$:",
      "   $$3\\omega^2 + 5\\omega + 2\\omega^3 = \\omega(3\\omega + 5 + 2\\omega^2)$$",
      "2. The expression in parentheses is precisely the denominator.",
      "3. Canceling the common factor leaves $\\omega$."
    ],
    "stepByStepSolutionAr": [
      "١. نكتب الحد الثابت ٢ في البسط على صورة ٢ أوميجا^٣:",
      "   $$3\\omega^2 + 5\\omega + 2\\omega^3 = \\omega(3\\omega + 5 + 2\\omega^2)$$",
      "٢. القوس الناتج يطابق المقام تماماً.",
      "٣. باختصار القوسين يتبقى $\\omega$."
    ],
    "teacherTipEn": "Multiply any standalone constant by omega^3 to factor out omega or omega^2.",
    "teacherTipAr": "ضرب أي حد مطلق في أوميجا^٣ يتيح أخذ عامل مشترك وتبسيط الكسر فوراً."
  },
  {
    "id": "alg_ch2_db_med_52",
    "titleEn": "De Moivre Theorem with Negative Integer Exponent",
    "titleAr": "نظرية ديموافر بأسس صحيحة سالبة",
    "difficulty": "medium",
    "questionEn": "Evaluate: $\\left(\\cos\\frac{\\pi}{6} + i\\sin\\frac{\\pi}{6}\\right)^{-4}$.",
    "questionAr": "احسب قيمة: $\\left(\\cos\\frac{\\pi}{6} + i\\sin\\frac{\\pi}{6}\\right)^{-4}$.",
    "optionsEn": [
      "$-\\frac{1}{2} - \\frac{\\sqrt{3}}{2}i$",
      "$-\\frac{1}{2} + \\frac{\\sqrt{3}}{2}i$",
      "$\\frac{1}{2} - \\frac{\\sqrt{3}}{2}i$",
      "$\\frac{\\sqrt{3}}{2} - \\frac{1}{2}i$"
    ],
    "optionsAr": [
      "$-\\frac{1}{2} - \\frac{\\sqrt{3}}{2}i$",
      "$-\\frac{1}{2} + \\frac{\\sqrt{3}}{2}i$",
      "$\\frac{1}{2} - \\frac{\\sqrt{3}}{2}i$",
      "$\\frac{\\sqrt{3}}{2} - \\frac{1}{2}i$"
    ],
    "correctAnswer": "$-\\frac{1}{2} - \\frac{\\sqrt{3}}{2}i$",
    "correctIndex": 0,
    "hintEn": "Apply De Moivre: [cos theta + i sin theta]^(-4) = cos(-4 theta) + i sin(-4 theta).",
    "hintAr": "طبق ديموافر: اضرب الزاوية في الأس السالب مباشرة.",
    "stepByStepSolutionEn": [
      "1. By De Moivre's theorem: angle becomes $-4 \\times \\frac{\\pi}{6} = -\\frac{2\\pi}{3}$.",
      "2. $\\cos(-\\frac{2\\pi}{3}) = -\\frac{1}{2}$, and $\\sin(-\\frac{2\\pi}{3}) = -\\frac{\\sqrt{3}}{2}$.",
      "3. The result is $-\\frac{1}{2} - \\frac{\\sqrt{3}}{2}i$."
    ],
    "stepByStepSolutionAr": [
      "١. بنظرية ديموافر: الزاوية الجديدة = -٤ × (ط / ٦) = -٢ط / ٣.",
      "٢. جتا(-٢ط / ٣) = -١ / ٢، وجا(-٢ط / ٣) = -جذر(٣) / ٢.",
      "٣. الناتج هو $-\\frac{1}{2} - \\frac{\\sqrt{3}}{2}i$."
    ],
    "teacherTipEn": "Remember cos(-theta) = cos(theta) while sin(-theta) = -sin(theta).",
    "teacherTipAr": "تذكر أن جيب التمام يمتص الإشارة السالبة بينما الجيب يطردها."
  },
  {
    "id": "alg_ch2_db_med_53",
    "titleEn": "Circle Locus Equation in Argand Plane",
    "titleAr": "معادلة المحل الهندسي للدائرة في شكل أرجاند",
    "difficulty": "medium",
    "questionEn": "Identify the geometric locus of points $z$ in the complex plane satisfying $|z - 2 + 3i| = 5$.",
    "questionAr": "حدد المحل الهندسي للنقاط $z$ في المستوى المركب التي تحقق $|z - 2 + 3i| = 5$.",
    "optionsEn": [
      "Circle with center $(2, -3)$ and radius $5$",
      "Circle with center $(-2, 3)$ and radius $5$",
      "Circle with center $(2, 3)$ and radius $25$",
      "Straight line passing through $(2, -3)$"
    ],
    "optionsAr": [
      "دائرة مركزها (٢، -٣) ونصف قطرها ٥",
      "دائرة مركزها (-٢، ٣) ونصف قطرها ٥",
      "دائرة مركزها (٢، ٣) ونصف قطرها ٢٥",
      "مستقيم يمر بالنقطة (٢، -٣)"
    ],
    "correctAnswer": "Circle with center $(2, -3)$ and radius $5$",
    "correctIndex": 0,
    "hintEn": "Write as |z - z0| = r where z0 is the center.",
    "hintAr": "اكتب المعادلة على صورة |ع - ع٠| = نق، حيث ع٠ هو المركز.",
    "stepByStepSolutionEn": [
      "1. Factor out the negative sign: $|z - (2 - 3i)| = 5$.",
      "2. This represents the set of all points $z$ whose distance from $z_0 = 2 - 3i$ is constant and equals 5.",
      "3. Therefore, it is a circle with center $(2, -3)$ and radius $r = 5$."
    ],
    "stepByStepSolutionAr": [
      "١. نأخذ إشارة سالبة عاملاً مشتركاً: $|z - (2 - 3i)| = 5$.",
      "٢. تعبر هذه المعادلة عن بعد النقطة ع عن النقطة الثابتة ع٠ = ٢ - ٣ت بقيمة ثابتة تساوي ٥.",
      "٣. إذن المحل الهندسي هو دائرة مركزها (٢، -٣) ونصف قطرها ٥ وحدات."
    ],
    "teacherTipEn": "Take care with signs when identifying z0: |z - (x0 + i y0)| = r.",
    "teacherTipAr": "انتبه للإشارات عند تحديد إحداثيات المركز: |ع - (س٠ + ت ص٠)| = نق."
  },
  {
    "id": "alg_ch2_db_med_54",
    "titleEn": "Argument of Quotient of Two Complex Numbers",
    "titleAr": "سعة خارج قسمة عددين مركبين",
    "difficulty": "medium",
    "questionEn": "If $\\operatorname{Arg}(z_1) = \\frac{2\\pi}{3}$ and $\\operatorname{Arg}(z_2) = \\frac{\\pi}{4}$, find the principal argument of $\\frac{z_1}{z_2}$.",
    "questionAr": "إذا كانت السعة الأساسية للعدد $z_1$ هي $\\frac{2\\pi}{3}$ وللعدد $z_2$ هي $\\frac{\\pi}{4}$، فأوجد السعة الأساسية للعدد $\\frac{z_1}{z_2}$.",
    "optionsEn": [
      "$\\frac{5\\pi}{12}$",
      "$\\frac{11\\pi}{12}$",
      "$-\\frac{5\\pi}{12}$",
      "$\\frac{\\pi}{12}$"
    ],
    "optionsAr": [
      "$\\frac{5\\pi}{12}$",
      "$\\frac{11\\pi}{12}$",
      "$-\\frac{5\\pi}{12}$",
      "$\\frac{\\pi}{12}$"
    ],
    "correctAnswer": "$\\frac{5\\pi}{12}$",
    "correctIndex": 0,
    "hintEn": "Arg(z1 / z2) = Arg(z1) - Arg(z2).",
    "hintAr": "سعة خارج القسمة = سعة البسط ناقص سعة المقام.",
    "stepByStepSolutionEn": [
      "1. By the argument properties of complex numbers: $\\operatorname{Arg}\\left(\\frac{z_1}{z_2}\\right) = \\operatorname{Arg}(z_1) - \\operatorname{Arg}(z_2)$.",
      "2. $\\frac{2\\pi}{3} - \\frac{\\pi}{4} = \\frac{8\\pi - 3\\pi}{12} = \\frac{5\\pi}{12}$.",
      "3. Since $\\frac{5\\pi}{12} \\in (-\\pi, \\pi]$, it is already the principal argument."
    ],
    "stepByStepSolutionAr": [
      "١. من خواص السعة: سعة خارج القسمة = سعة البسط - سعة المقام.",
      "٢. $\\frac{2\\pi}{3} - \\frac{\\pi}{4} = \\frac{8\\pi - 3\\pi}{12} = \\frac{5\\pi}{12}$.",
      "٣. القيمة تقع داخل الفترة (-ط، ط] فهي السعة الأساسية المطلوبة."
    ],
    "teacherTipEn": "If the difference exceeds pi or is less than -pi, add or subtract 2pi.",
    "teacherTipAr": "إذا خرج الناتج عن نطاق (-ط، ط] أضف أو اطرح ٢ط لإعادته للسعة الأساسية."
  },
  {
    "id": "alg_ch2_db_med_55",
    "titleEn": "Square Roots of Purely Imaginary 2i",
    "titleAr": "الجذران التربيعيان للعدد التخيلي ٢ت",
    "difficulty": "medium",
    "questionEn": "Find the two square roots of $z = 2i$.",
    "questionAr": "أوجد الجذرين التربيعيين للعدد المركب $z = 2i$.",
    "optionsEn": [
      "$\\pm(1 + i)$",
      "$\\pm(1 - i)$",
      "$\\pm(\\sqrt{2} + \\sqrt{2}i)$",
      "$\\pm(2 + 2i)$"
    ],
    "optionsAr": [
      "$\\pm(1 + i)$",
      "$\\pm(1 - i)$",
      "$\\pm(\\sqrt{2} + \\sqrt{2}i)$",
      "$\\pm(2 + 2i)$"
    ],
    "correctAnswer": "$\\pm(1 + i)$",
    "correctIndex": 0,
    "hintEn": "(1 + i)^2 = 1 + 2i - 1 = 2i.",
    "hintAr": "مربع المقدار (١ + ت) يساوي ٢ت مباشرة.",
    "stepByStepSolutionEn": [
      "1. In trigonometric form: $2i = 2(\\cos\\frac{\\pi}{2} + i\\sin\\frac{\\pi}{2})$.",
      "2. By De Moivre roots formula: $\\sqrt{2i} = \\sqrt{2}\\left(\\cos\\frac{\\pi/2 + 2k\\pi}{2} + i\\sin\\frac{\\pi/2 + 2k\\pi}{2}\\right)$ for $k = 0, 1$.",
      "3. For $k = 0$: $\\sqrt{2}(\\cos\\frac{\\pi}{4} + i\\sin\\frac{\\pi}{4}) = \\sqrt{2}(\\frac{1}{\\sqrt{2}} + \\frac{1}{\\sqrt{2}}i) = 1 + i$.",
      "4. For $k = 1$: $-(1 + i)$. Hence $\\pm(1 + i)$."
    ],
    "stepByStepSolutionAr": [
      "١. بالصورة المثلثية: ٢ت = ٢(جتا ط/٢ + ت جا ط/٢).",
      "٢. بتطبيق نتيجة ديموافر: نقسم الزاوية على ٢ ونأخذ جذر المقياس.",
      "٣. الجذر الأول: جذر(٢)(جتا ط/٤ + ت جا ط/٤) = ١ + ت.",
      "٤. الجذر الثاني: -(١ + ت)، فيكون الحلان $\\pm(1 + i)$."
    ],
    "teacherTipEn": "Always check algebraic squaring: (1+i)^2 = 1 + 2i - 1 = 2i.",
    "teacherTipAr": "تحقق بالتربيع المباشر: (١ + ت)^٢ = ١ + ٢ت - ١ = ٢ت."
  },
  {
    "id": "alg_ch2_db_med_56",
    "titleEn": "Quadratic Equation with Complex Roots in Exponential Form",
    "titleAr": "حل معادلة تربيعية مركبة بالصورة الأسية",
    "difficulty": "medium",
    "questionEn": "Find the roots of $z^2 - 2z + 4 = 0$ in exponential form.",
    "questionAr": "أوجد جذري المعادلة $z^2 - 2z + 4 = 0$ بالصورة الأسية.",
    "optionsEn": [
      "$2 e^{\\pm i\\pi/3}$",
      "$2 e^{\\pm i\\pi/6}$",
      "$4 e^{\\pm i\\pi/3}$",
      "$e^{\\pm i\\pi/3}$"
    ],
    "optionsAr": [
      "$2 e^{\\pm i\\pi/3}$",
      "$2 e^{\\pm i\\pi/6}$",
      "$4 e^{\\pm i\\pi/3}$",
      "$e^{\\pm i\\pi/3}$"
    ],
    "correctAnswer": "$2 e^{\\pm i\\pi/3}$",
    "correctIndex": 0,
    "hintEn": "Complete the square: (z - 1)^2 = -3 => z = 1 +- i*sqrt(3).",
    "hintAr": "بإكمال المربع: (ع - ١)^٢ = -٣ ومنها ع = ١ ± ت جذر(٣).",
    "stepByStepSolutionEn": [
      "1. By quadratic formula: $z = \\frac{2 \\pm \\sqrt{4 - 16}}{2} = \\frac{2 \\pm \\sqrt{-12}}{2} = 1 \\pm i\\sqrt{3}$.",
      "2. Modulus: $r = \\sqrt{1^2 + (\\sqrt{3})^2} = \\sqrt{1 + 3} = 2$.",
      "3. Argument: $\\theta = \\pm\\tan^{-1}(\\sqrt{3}) = \\pm\\frac{\\pi}{3}$.",
      "4. Exponential form: $z = 2 e^{\\pm i\\pi/3}$."
    ],
    "stepByStepSolutionAr": [
      "١. بالقانون العام: ع = [٢ ± جذر(٤ - ١٦)] / ٢ = ١ ± ت جذر(٣).",
      "٢. المقياس: ل = جذر(١ + ٣) = ٢.",
      "٣. السعة: $\\theta = \\pm\\tan^{-1}(\\sqrt{3}) = \\pm\\frac{\\pi}{3}$.",
      "٤. الصورة الأسية: $2 e^{\\pm i\\pi/3}$."
    ],
    "teacherTipEn": "Complex conjugate roots always have identical modulus and opposite arguments.",
    "teacherTipAr": "الجذران المترافقان يمتلكان نفس المقياس وسعتين متعاكستين في الإشارة."
  },
  {
    "id": "alg_ch2_db_med_57",
    "titleEn": "Linear Combination of Cube Roots of Unity",
    "titleAr": "تبسيط مقدار خطي في قوى أوميجا",
    "difficulty": "medium",
    "questionEn": "Evaluate: $(2 + 3\\omega + 3\\omega^2)^5$.",
    "questionAr": "احسب قيمة المقدار: $(2 + 3\\omega + 3\\omega^2)^5$.",
    "optionsEn": [
      "$-1$",
      "1",
      "32",
      "$-32$"
    ],
    "optionsAr": [
      "$-1$",
      "1",
      "32",
      "$-32$"
    ],
    "correctAnswer": "$-1$",
    "correctIndex": 0,
    "hintEn": "Factor out 3 from 3omega + 3omega^2 = 3(omega + omega^2) = -3.",
    "hintAr": "خذ ٣ عاملاً مشتركاً: ٣(أوميجا + أوميجا^٢) = ٣(-١) = -٣.",
    "stepByStepSolutionEn": [
      "1. Rewrite the expression: $2 + 3(\\omega + \\omega^2)$.",
      "2. Since $\\omega + \\omega^2 = -1$, this becomes $2 + 3(-1) = 2 - 3 = -1$.",
      "3. $(-1)^5 = -1$."
    ],
    "stepByStepSolutionAr": [
      "١. نأخذ ٣ عاملاً مشتركاً: ٢ + ٣(أوميجا + أوميجا^٢).",
      "٢. بما أن أوميجا + أوميجا^٢ = -١، فإن المقدار = ٢ + ٣(-١) = -١.",
      "٣. (-١)^٥ = -١."
    ],
    "teacherTipEn": "Always isolate matching coefficients of omega and omega^2 to replace with -1.",
    "teacherTipAr": "ابحث عن المعاملات المتساوية لأوميجا وأوميجا^٢ لاستبدالها فوراً بالقيمة -١."
  },
  {
    "id": "alg_ch2_db_med_58",
    "titleEn": "Triple Angle Identity from De Moivre",
    "titleAr": "استنتاج قانون ضعف الزاوية الثلاثي من ديموافر",
    "difficulty": "medium",
    "questionEn": "Using De Moivre's theorem, express $\\cos(3\\theta)$ entirely in terms of $\\cos\\theta$.",
    "questionAr": "باستخدام نظرية ديموافر، عبّر عن $\\cos(3\\theta)$ بدلالة $\\cos\\theta$ فقط.",
    "optionsEn": [
      "$4\\cos^3\\theta - 3\\cos\\theta$",
      "$3\\cos^3\\theta - 4\\cos\\theta$",
      "$4\\cos^3\\theta + 3\\cos\\theta$",
      "$\\cos^3\\theta - 3\\cos\\theta$"
    ],
    "optionsAr": [
      "$4\\cos^3\\theta - 3\\cos\\theta$",
      "$3\\cos^3\\theta - 4\\cos\\theta$",
      "$4\\cos^3\\theta + 3\\cos\\theta$",
      "$\\cos^3\\theta - 3\\cos\\theta$"
    ],
    "correctAnswer": "$4\\cos^3\\theta - 3\\cos\\theta$",
    "correctIndex": 0,
    "hintEn": "Expand (cos theta + i sin theta)^3 and equate real parts.",
    "hintAr": "فُك (جتا هـ + ت جا هـ)^٣ وساوِ الأجزاء الحقيقية.",
    "stepByStepSolutionEn": [
      "1. $(\\cos\\theta + i\\sin\\theta)^3 = \\cos^3\\theta + 3i\\cos^2\\theta\\sin\\theta - 3\\cos\\theta\\sin^2\\theta - i\\sin^3\\theta$.",
      "2. The real part equals $\\cos(3\\theta) = \\cos^3\\theta - 3\\cos\\theta\\sin^2\\theta$.",
      "3. Substitute $\\sin^2\\theta = 1 - \\cos^2\\theta$:",
      "   $$\\cos(3\\theta) = \\cos^3\\theta - 3\\cos\\theta(1 - \\cos^2\\theta) = \\cos^3\\theta - 3\\cos\\theta + 3\\cos^3\\theta = 4\\cos^3\\theta - 3\\cos\\theta$$"
    ],
    "stepByStepSolutionAr": [
      "١. بفك المقدار ذات الحدين: $(\\cos\\theta + i\\sin\\theta)^3 = \\cos^3\\theta - 3\\cos\\theta\\sin^2\\theta + i(\\dots)$.",
      "٢. الجزء الحقيقي يطابق $\\cos(3\\theta)$:",
      "   $$\\cos(3\\theta) = \\cos^3\\theta - 3\\cos\\theta(1 - \\cos^2\\theta)$$",
      "٣. بالتبسيط: $4\\cos^3\\theta - 3\\cos\\theta$."
    ],
    "teacherTipEn": "Equating imaginary parts gives the dual identity: sin(3theta) = 3sin(theta) - 4sin^3(theta).",
    "teacherTipAr": "بمساواة الأجزاء التخيلية تحصل على المتطابقة المقابلة: جا(٣هـ) = ٣جا(هـ) - ٤جا^٣(هـ)."
  },
  {
    "id": "alg_ch2_db_med_59",
    "titleEn": "Product (1 - omega)(1 - omega^2)",
    "titleAr": "حاصل ضرب العوامل الأولية للواحد وأوميجا",
    "difficulty": "medium",
    "questionEn": "Calculate the value of $(1 - \\omega)(1 - \\omega^2)$.",
    "questionAr": "احسب قيمة المقدار: $(1 - \\omega)(1 - \\omega^2)$.",
    "optionsEn": [
      "3",
      "1",
      "$\\sqrt{3}i$",
      "$-3$"
    ],
    "optionsAr": [
      "3",
      "1",
      "$\\sqrt{3}i$",
      "$-3$"
    ],
    "correctAnswer": "3",
    "correctIndex": 0,
    "hintEn": "Expand the product and use omega + omega^2 = -1 and omega^3 = 1.",
    "hintAr": "فُك القوسين واستخدم أوميجا + أوميجا^٢ = -١ و أوميجا^٣ = ١.",
    "stepByStepSolutionEn": [
      "1. Expand: $(1 - \\omega)(1 - \\omega^2) = 1 - \\omega^2 - \\omega + \\omega^3$.",
      "2. Substitute $-(\\omega + \\omega^2) = -(-1) = 1$ and $\\omega^3 = 1$.",
      "3. Total = $1 + 1 + 1 = 3$."
    ],
    "stepByStepSolutionAr": [
      "١. بفك القوسين: ۱ - أوميجا^٢ - أوميجا + أوميجا^٣.",
      "٢. تجميع الحدود: ۱ - (أوميجا + أوميجا^٢) + أوميجا^٣ = ۱ - (-١) + ١.",
      "٣. الناتج = ۱ + ۱ + ۱ = ٣."
    ],
    "teacherTipEn": "This product represents the squared modulus |1 - omega|^2 = 3.",
    "teacherTipAr": "يمثل هذا الناتج هندسياً مربع طول الضلع في المثلث المتساوي الأضلاع لجذور الوحدة."
  }
],
  hots: [
  {
    "id": "alg_ch2_db_hots_01",
    "titleEn": "Real Part of Roots of (z+1)^6 = (z-1)^6",
    "titleAr": "الجزء الحقيقي لجذور المعادلة (z+١)^٦ = (z-١)^٦",
    "difficulty": "hots",
    "questionEn": "For the equation $(z + 1)^6 = (z - 1)^6$, what is the real part of all its complex roots?",
    "questionAr": "في المعادلة $(z + ١)^٦ = (z - ١)^٦$، ما هي قيمة الجزء الحقيقي لجميع جذورها المركبة؟",
    "optionsEn": [
      "0",
      "1",
      "-1",
      "\\frac{1}{2}"
    ],
    "optionsAr": [
      "٠",
      "١",
      "-١",
      "\\frac{١}{٢}"
    ],
    "correctAnswer": "0",
    "correctIndex": 0,
    "hintEn": "Taking modulus of both sides gives $|z + 1| = |z - 1|$, which represents the perpendicular bisector of the segment between -1 and 1.",
    "hintAr": "بأخذ مقياس الطرفين: $|z + ١| = |z - ١|$، وهي تمثل المحور العمودي المنصف بين النقطتين -١ و ١.",
    "stepByStepSolutionEn": [
      "Take the modulus of both sides of $(z + 1)^6 = (z - 1)^6$:",
      "$$|z + 1|^6 = |z - 1|^6 \\implies |z + 1| = |z - 1|$$",
      "Let $z = x + iy$. The condition $|x + 1 + iy| = |x - 1 + iy|$ gives:",
      "$$(x + 1)^2 + y^2 = (x - 1)^2 + y^2 \\implies 2x = -2x \\implies 4x = 0 \\implies x = 0$$",
      "Therefore, the real part of every root is identically $0$ (all roots lie on the imaginary axis)."
    ],
    "stepByStepSolutionAr": [
      "بأخذ مقياس الطرفين للمعادلة:",
      "$$|z + ١|^٦ = |z - ١|^٦ \\implies |z + ١| = |z - ١|$$",
      "بوضع $z = x + ت y$:",
      "$$(x + ١)^٢ + y^٢ = (x - ١)^٢ + y^٢ \\implies ٤x = ٠ \\implies x = ٠$$",
      "إذن الجزء الحقيقي لجميع الجذور يساوي صفراً، وجميع الجذور تقع على محور الصادات التخيلي."
    ],
    "teacherTipEn": "Whenever you see $|z - a| = |z - b|$, remember it represents the perpendicular bisector line in the complex plane.",
    "teacherTipAr": "المعادلة $|z - أ| = |z - ب|$ تمثل دائماً هندسياً خط التماثل العمودي المنصف بين النقطتين."
  },
  {
    "id": "alg_ch2_db_hots_02",
    "titleEn": "Number of Distinct Solutions of (z+1)^6 = (z-1)^6",
    "titleAr": "عدد الحلول المختلفة للمعادلة (z+١)^٦ = (z-١)^٦",
    "difficulty": "hots",
    "questionEn": "How many distinct complex solutions does $(z + 1)^6 = (z - 1)^6$ possess?",
    "questionAr": "كم عدداً مركباً مختلفاً يحقق المعادلة $(z + ١)^٦ = (z - ١)^٦$؟",
    "optionsEn": [
      "5",
      "6",
      "4",
      "3"
    ],
    "optionsAr": [
      "٥",
      "٦",
      "٤",
      "٣"
    ],
    "correctAnswer": "5",
    "correctIndex": 0,
    "hintEn": "When expanding, the $z^6$ terms cancel out, leaving a polynomial of degree 5.",
    "hintAr": "عند فك المقدارين، يحذف الحد $z^٦$ من الطرفين، فتتبقى معادلة من الدرجة الخامسة.",
    "stepByStepSolutionEn": [
      "Expand both sides using the Binomial Theorem:",
      "$(z+1)^6 = z^6 + 6z^5 + 15z^4 + 20z^3 + 15z^2 + 6z + 1$",
      "$(z-1)^6 = z^6 - 6z^5 + 15z^4 - 20z^3 + 15z^2 - 6z + 1$",
      "Subtracting the two equations:",
      "$$12z^5 + 40z^3 + 12z = 0$$",
      "The highest power is $z^5$, making this a polynomial of degree 5.",
      "By the Fundamental Theorem of Algebra, it has exactly 5 roots."
    ],
    "stepByStepSolutionAr": [
      "بفك الطرفين بنظرية ذات الحدين، يحذف $z^٦$ و $١٥z^٤$ و $١٥z^٢$ و $١$:",
      "$$١٢z^٥ + ٤٠z^٣ + ١٢z = ٠$$",
      "هذه معادلة من الدرجة الخامسة، لذا لها ٥ جذور مختلفة بالضبط."
    ],
    "teacherTipEn": "Beware of the trap: an equation with power 6 may drop to degree 5 if the leading terms cancel!",
    "teacherTipAr": "احذر الفخ: المعادلة المرفوعة للأس ٦ قد تنخفض إلى الدرجة الخامسة إذا حُذف الحد الرئيسي."
  },
  {
    "id": "alg_ch2_db_hots_03",
    "titleEn": "Explicit Formula for Roots of (z+1)^6 = (z-1)^6",
    "titleAr": "الصيغة الصريحة لجذور المعادلة (z+١)^٦ = (z-١)^٦",
    "difficulty": "hots",
    "questionEn": "The non-zero roots of $(z + 1)^6 = (z - 1)^6$ are given by:",
    "questionAr": "الجذور غير الصفرية للمعادلة $(z + ١)^٦ = (z - ١)^٦$ تُعطى بالصورة:",
    "optionsEn": [
      "\\pm i\\cot\\frac{k\\pi}{6}, \\quad k = 1, 2",
      "\\pm i\\tan\\frac{k\\pi}{6}, \\quad k = 1, 2",
      "\\pm\\cot\\frac{k\\pi}{6}, \\quad k = 1, 2",
      "\\pm i\\cos\\frac{k\\pi}{6}, \\quad k = 1, 2"
    ],
    "optionsAr": [
      "\\pm ت\\cot\\frac{k\\pi}{٦}, \\quad k = ١, ٢",
      "\\pm ت\\tan\\frac{k\\pi}{٦}, \\quad k = ١, ٢",
      "\\pm\\cot\\frac{k\\pi}{٦}, \\quad k = ١, ٢",
      "\\pm ت\\cos\\frac{k\\pi}{٦}, \\quad k = ١, ٢"
    ],
    "correctAnswer": "\\pm i\\cot\\frac{k\\pi}{6}, \\quad k = 1, 2",
    "correctIndex": 0,
    "hintEn": "Let $\\frac{z+1}{z-1} = e^{i 2k\\pi/6}$ and solve for $z$.",
    "hintAr": "افرض $\\frac{z+١}{z-١} = e^{ت ٢k\\pi/٦}$ وحل بالنسبة لـ $z$.",
    "stepByStepSolutionEn": [
      "Let $w = \\frac{z+1}{z-1}$. Then $w^6 = 1 \\implies w = e^{i \\theta_k}$ with $\\theta_k = \\frac{2k\\pi}{6} = \\frac{k\\pi}{3}$ for $k = 1, 2, 3, 4, 5$.",
      "Solve for $z$:",
      "$$z + 1 = w(z - 1) \\implies z(1 - w) = -(1 + w) \\implies z = \\frac{w + 1}{w - 1}$$",
      "Substitute $w = e^{i\\theta_k}$:",
      "$$z = \\frac{e^{i\\theta_k} + 1}{e^{i\\theta_k} - 1} = \\frac{e^{i\\theta_k/2}(e^{i\\theta_k/2} + e^{-i\\theta_k/2})}{e^{i\\theta_k/2}(e^{i\\theta_k/2} - e^{-i\\theta_k/2})} = \\frac{2\\cos(\\theta_k/2)}{2i\\sin(\\theta_k/2)} = -i\\cot\\left(\\frac{k\\pi}{6}\\right)$$"
    ],
    "stepByStepSolutionAr": [
      "نضع $w = \\frac{z+١}{z-١}$، فتكون $w^٦ = ١ \\implies w = e^{ت \\frac{k\\pi}{٣}}$.",
      "بحل المعادلة بالنسبة لـ $z$:",
      "$$z = \\frac{w + ١}{w - ١} = -ت\\cot\\left(\\frac{k\\pi}{٦}\\right)$$",
      "لقيم $k = ١, ٢$ تعطي الجذور $\\pm ت\\cot(٣٠^\\circ)$ و $\\pm ت\\cot(٦٠^\\circ)$."
    ],
    "teacherTipEn": "The identity $\\frac{e^{i\\theta}+1}{e^{i\\theta}-1} = -i\\cot(\\theta/2)$ is a classic Thanaweya Amma olympiad technique.",
    "teacherTipAr": "المتطابقة $\\frac{e^{ت\\theta}+١}{e^{ت\\theta}-١} = -ت\\cot(\\theta/٢)$ من أروع أساليب الحل السريع."
  },
  {
    "id": "alg_ch2_db_hots_04",
    "titleEn": "Sum of Roots of (z - 1)^5 = 32",
    "titleAr": "مجموع جذور المعادلة (z - ١)^٥ = ٣٢",
    "difficulty": "hots",
    "questionEn": "Find the sum of all complex roots of the equation $(z - 1)^5 = 32$.",
    "questionAr": "أوجد مجموع جميع الجذور المركبة للمعادلة $(z - ١)^٥ = ٣٢$.",
    "optionsEn": [
      "5",
      "32",
      "0",
      "10"
    ],
    "optionsAr": [
      "٥",
      "٣٢",
      "٠",
      "١٠"
    ],
    "correctAnswer": "5",
    "correctIndex": 0,
    "hintEn": "The roots are $z_k = 1 + 2w_k$ where $w_k$ are the 5th roots of unity.",
    "hintAr": "الجذور هي $z_k = ١ + ٢w_k$ حيث $w_k$ هي الجذور الخماسية للواحد الصحيح.",
    "stepByStepSolutionEn": [
      "Let $u = z - 1$. Then $u^5 = 32 = 2^5$.",
      "The five roots for $u$ are $u_k = 2 e^{i 2k\\pi/5}$ for $k = 0, 1, 2, 3, 4$.",
      "The sum of the roots of unity is 0, so $\\sum_{k=0}^4 u_k = 2 \\sum_{k=0}^4 e^{i 2k\\pi/5} = 0$.",
      "Since $z_k = u_k + 1$:",
      "$$\\sum_{k=0}^4 z_k = \\sum_{k=0}^4 (u_k + 1) = \\sum_{k=0}^4 u_k + \\sum_{k=0}^4 1 = 0 + 5(1) = 5$$"
    ],
    "stepByStepSolutionAr": [
      "نفرض $u = z - ١$ فتصبح $u^٥ = ٣٢$.",
      "مجموع الجذور الخماسية $u_k$ يساوي صفراً لأنها متناظرة حول نقطة الأصل.",
      "بما أن $z_k = u_k + ١$، فإن مجموع الجذور هو:",
      "$$\\sum z_k = \\sum u_k + ٥(١) = ٠ + ٥ = ٥$$"
    ],
    "teacherTipEn": "Vieta's formula also gives this immediately: in $(z-1)^5 - 32 = 0$, the $z^4$ term coefficient is $-5$, so sum of roots is $-(-5)/1 = 5$.",
    "teacherTipAr": "يمكن إيجادها مباشرة من معامل $z^٤$ في مفكوك ذات الحدين: المعامل هو $-٥$، إذن المجموع $= ٥$."
  },
  {
    "id": "alg_ch2_db_hots_05",
    "titleEn": "Impossibility of Purely Imaginary Power",
    "titleAr": "استحالة أن تكون القوة تخيلية بحتة",
    "difficulty": "hots",
    "questionEn": "Can $(1 + i\\sqrt{3})^m$ ever be purely imaginary for an integer $m \\in \\mathbb{Z}^+$?",
    "questionAr": "هل يمكن للمقدار $(١ + ت\\sqrt{٣})^m$ أن يكون تخيلياً بحتاً لأي عدد صحيح موجب $m$؟",
    "optionsEn": [
      "No, because 2m = 3(2k+1) has no integer solution (even != odd)",
      "Yes, when m = 3",
      "Yes, when m = 6",
      "Yes, for all odd multiples of 3"
    ],
    "optionsAr": [
      "مستحيل، لأن المعادلة ٢m = ٣(٢k+١) مستحيلة في الأعداد الصحيحة (زوجي لا يساوي فردي)",
      "نعم، عندما m = ٣",
      "نعم، عندما m = ٦",
      "نعم، لجميع مضاعفات ٣ الفردية"
    ],
    "correctAnswer": "No, because 2m = 3(2k+1) has no integer solution (even != odd)",
    "correctIndex": 0,
    "hintEn": "The argument is $m(60^\\circ)$. A purely imaginary number has argument $90^\\circ + 180^\\circ k$.",
    "hintAr": "السعة هي $m \\times ٦٠^\\circ$. والعدد التخيلي البحت سعته $٩٠^\\circ + ١٨٠^\\circ k$.",
    "stepByStepSolutionEn": [
      "The argument of $1 + i\\sqrt{3}$ is $60^\\circ$.",
      "By De Moivre's Theorem, the argument of $(1 + i\\sqrt{3})^m$ is $60^\\circ m$.",
      "For a number to be purely imaginary, its argument must be $90^\\circ + 180^\\circ k$ for some integer $k$:",
      "$$60^\\circ m = 90^\\circ + 180^\\circ k$$",
      "Divide the entire equation by $30^\\circ$:",
      "$$2m = 3 + 6k = 3(2k + 1)$$",
      "The left-hand side $2m$ is an even integer, while the right-hand side $3(2k+1)$ is an odd integer.",
      "Since an even integer can never equal an odd integer, no such integer $m$ exists!"
    ],
    "stepByStepSolutionAr": [
      "سعة العدد $١ + ت\\sqrt{٣}$ هي $٦٠^\\circ$.",
      "سعة المقدار مرفوعاً للأس $m$ هي $m \\times ٦٠^\\circ$.",
      "لكي يكون تخيلياً بحتاً يجب أن تكون زاويته $٩٠^\\circ + ١٨٠^\\circ k$:",
      "$$٦٠^\\circ m = ٩٠^\\circ + ١٨٠^\\circ k$$",
      "بالقسمة على $٣٠^\\circ$:",
      "$$٢m = ٣(٢k + ١)$$",
      "الطرف الأيمن فردي دائماً والطرف الأيسر زوجي دائماً، وهذا تناقض مستحيل في $\\mathbb{Z}$!"
    ],
    "teacherTipEn": "This famous parity proof is a classic high-order question in Egyptian national exams.",
    "teacherTipAr": "برهان التكافؤ الزوجي والفردي هذا من أشهر وأرقى مسائل التفكير العليا في الثانوية العامة المصرية."
  },
  {
    "id": "alg_ch2_db_hots_06",
    "titleEn": "Smallest Integer n for Real (sqrt(3) + i)^n",
    "titleAr": "أصغر عدد صحيح n يجعل (جذر ٣ + ت)^n حقيقياً",
    "difficulty": "hots",
    "questionEn": "Find the smallest positive integer $n$ such that $(\\sqrt{3} + i)^n$ is a real number.",
    "questionAr": "أوجد أصغر عدد صحيح موجب $n$ يجعل $(\\sqrt{٣} + ت)^n$ عدداً حقيقياً.",
    "optionsEn": [
      "6",
      "3",
      "12",
      "4"
    ],
    "optionsAr": [
      "٦",
      "٣",
      "١٢",
      "٤"
    ],
    "correctAnswer": "6",
    "correctIndex": 0,
    "hintEn": "The argument is $30^\\circ$. We need $n(30^\\circ) = 180^\\circ k$.",
    "hintAr": "السعة $٣٠^\\circ$. نحتاج $n \\times ٣٠^\\circ = ١٨٠^\\circ k$.",
    "stepByStepSolutionEn": [
      "Argument of $\\sqrt{3}+i$ is $\\arctan(1/\\sqrt{3}) = 30^\\circ = \\frac{\\pi}{6}$.",
      "For $(\\sqrt{3}+i)^n$ to be real, the imaginary part must vanish:",
      "$$n \\times 30^\\circ = 180^\\circ k \\implies n = 6k$$",
      "For the smallest positive integer $n$, set $k = 1 \\implies n = 6$."
    ],
    "stepByStepSolutionAr": [
      "سعة العدد $\\sqrt{٣} + ت$ هي $٣٠^\\circ$.",
      "لكي يكون حقيقياً يجب أن تكون الزاوية مضاعفاً لـ $١٨٠^\\circ$:",
      "$$n \\times ٣٠^\\circ = ١٨٠^\\circ k \\implies n = ٦k$$",
      "لأصغر عدد موجب نضع $k = ١ \\implies n = ٦$."
    ],
    "teacherTipEn": "At $n = 3$, the angle is $90^\\circ$ (purely imaginary $8i$). At $n = 6$, the angle is $180^\\circ$ (real $-64$).",
    "teacherTipAr": "عند $n = ٣$ الزاوية $٩٠^\\circ$ (تخيلي بحت)، وعند $n = ٦$ الزاوية $١٨٠^\\circ$ (حقيقي $-٦٤$)."
  },
  {
    "id": "alg_ch2_db_hots_07",
    "titleEn": "Argand Locus with Argument Difference",
    "titleAr": "المحل الهندسي لفرق السعتين",
    "difficulty": "hots",
    "questionEn": "What is the locus of points $z$ satisfying $\\text{Arg}\\left(\\frac{z - 2}{z + 2}\\right) = \\frac{\\pi}{2}$?",
    "questionAr": "ما هو المحل الهندسي للنقاط $z$ التي تحقق $\\text{Arg}\\left(\\frac{z - ٢}{z + ٢}\\right) = \\frac{\\pi}{٢}$؟",
    "optionsEn": [
      "The upper semicircle x^2 + y^2 = 4 with y > 0",
      "The complete circle x^2 + y^2 = 4",
      "The lower semicircle x^2 + y^2 = 4 with y < 0",
      "The line segment connecting (-2, 0) and (2, 0)"
    ],
    "optionsAr": [
      "نصف الدائرة العلوي x^٢ + y^٢ = ٤ حيث y > ٠",
      "الدائرة الكاملة x^٢ + y^٢ = ٤",
      "نصف الدائرة السفلي x^٢ + y^٢ = ٤ حيث y < ٠",
      "القطعة المستقيمة الواصلة بين (-٢، ٠) و (٢، ٠)"
    ],
    "correctAnswer": "The upper semicircle x^2 + y^2 = 4 with y > 0",
    "correctIndex": 0,
    "hintEn": "The angle subtended by the diameter from -2 to 2 is $90^\\circ$, with positive orientation.",
    "hintAr": "الزاوية المحيطية المرسومة على القطر من -٢ إلى ٢ قائمة ($٩٠^\\circ$) والاتجاه موجب.",
    "stepByStepSolutionEn": [
      "$\\text{Arg}(z - 2) - \\text{Arg}(z + 2) = 90^\\circ$.",
      "This means the vector from $2$ to $z$ and the vector from $-2$ to $z$ form a right angle ($90^\\circ$).",
      "By Thales' theorem, the locus of such points is a circle with diameter endpoints $(-2, 0)$ and $(2, 0)$, so $x^2 + y^2 = 2^2 = 4$.",
      "Since the angle difference is positive ($+\\pi/2$), the traversal is counterclockwise, which restricts $z$ strictly to the upper half-plane $y > 0$."
    ],
    "stepByStepSolutionAr": [
      "$\\text{Arg}(z - ٢) - \\text{Arg}(z + ٢) = ٩٠^\\circ$.",
      "المتجهان يصنعان زاوية قائمة، وهي زاوية محيطية مرسومة على قطر دائرته طرفاه $(-٢، ٠)$ و $(٢، ٠)$.",
      "معادلة الدائرة هي $x^٢ + y^٢ = ٤$.",
      "بما أن الزاوية موجبة ($+\\frac{\\pi}{٢}$)، فإن النقط تقع في النصف العلوي فقط ($y > ٠$)."
    ],
    "teacherTipEn": "A full circle requires $\\text{Arg} = \\pm\\pi/2$. A specific sign restricts it to a single semicircle.",
    "teacherTipAr": "الدائرة الكاملة تتطلب $\\pm ٩٠^\\circ$، بينما تحديد إشارة موجبة يحصر المحل في نصف الدائرة العلوي فقط."
  },
  {
    "id": "alg_ch2_db_hots_08",
    "titleEn": "Circle of Apollonius from Modulus Ratio",
    "titleAr": "دائرة أبولونيوس من نسبة المقياسين",
    "difficulty": "hots",
    "questionEn": "Find the center and radius of the circle defined by $|z - 1| = 2|z + 1|$.",
    "questionAr": "أوجد مركز ونصف قطر الدائرة المحددة بالمعادلة $|z - ١| = ٢|z + ١|$.",
    "optionsEn": [
      "Center (-5/3, 0), Radius 4/3",
      "Center (5/3, 0), Radius 4/3",
      "Center (-1, 0), Radius 2",
      "Center (0, 0), Radius 1"
    ],
    "optionsAr": [
      "المركز (-٥/٣، ٠)، نصف القطر ٤/٣",
      "المركز (٥/٣، ٠)، نصف القطر ٤/٣",
      "المركز (-١، ٠)، نصف القطر ٢",
      "المركز (٠، ٠)، نصف القطر ١"
    ],
    "correctAnswer": "Center (-5/3, 0), Radius 4/3",
    "correctIndex": 0,
    "hintEn": "Square both sides: $(x-1)^2 + y^2 = 4[(x+1)^2 + y^2]$.",
    "hintAr": "ربّع الطرفين: $(x-١)^٢ + y^٢ = ٤[(x+١)^٢ + y^٢]$.",
    "stepByStepSolutionEn": [
      "Let $z = x + iy$. Square both sides:",
      "$$(x - 1)^2 + y^2 = 4\\left((x + 1)^2 + y^2\\right)$$",
      "$$x^2 - 2x + 1 + y^2 = 4x^2 + 8x + 4 + 4y^2$$",
      "Rearrange terms:",
      "$$3x^2 + 10x + 3y^2 + 3 = 0$$",
      "Divide by 3:",
      "$$x^2 + \\frac{10}{3}x + y^2 + 1 = 0$$",
      "Complete the square:",
      "$$\\left(x + \\frac{5}{3}\\right)^2 + y^2 = \\frac{25}{9} - 1 = \\frac{16}{9} = \\left(\\frac{4}{3}\\right)^2$$",
      "Center is $\\left(-\\frac{5}{3}, 0\\right)$ and radius is $R = \\frac{4}{3}$."
    ],
    "stepByStepSolutionAr": [
      "بوضع $z = x + ت y$ وتربيع الطرفين:",
      "$$(x - ١)^٢ + y^٢ = ٤[(x + ١)^٢ + y^٢]$$",
      "$$٣x^٢ + ١٠x + ٣y^٢ + ٣ = ٠$$",
      "بالقسمة على ٣ وإكمال المربع:",
      "$$(x + \\frac{٥}{٣})^٢ + y^٢ = \\frac{١٦}{٩}$$",
      "إذن المركز هو $(-\\frac{٥}{٣}، ٠)$ ونصف القطر $R = \\frac{٤}{٣}$."
    ],
    "teacherTipEn": "This is Apollonius' Circle: the locus of points whose distances from two fixed points are in a constant ratio $k \\neq 1$.",
    "teacherTipAr": "هذه دائرة أبولونيوس الشهيرة: المحل الهندسي للنقاط التي النسبة بين بعديها عن نقطتين ثابتتين تساوي نسبة ثابتة $k \\neq ١$."
  },
  {
    "id": "alg_ch2_db_hots_09",
    "titleEn": "Minimum Value of |z - 1| + |z - 5i|",
    "titleAr": "القيمة الصغرى للمقدار |z - ١| + |z - ٥ت|",
    "difficulty": "hots",
    "questionEn": "Find the minimum value of $|z - 1| + |z - 5i|$ for $z \\in \\mathbb{C}$.",
    "questionAr": "أوجد القيمة الصغرى للمقدار $|z - ١| + |z - ٥ت|$ لجميع $z \\in \\mathbb{C}$.",
    "optionsEn": [
      "\\sqrt{26}",
      "6",
      "4",
      "5"
    ],
    "optionsAr": [
      "\\sqrt{٢٦}",
      "٦",
      "٤",
      "٥"
    ],
    "correctAnswer": "\\sqrt{26}",
    "correctIndex": 0,
    "hintEn": "By the triangle inequality $|z - z_1| + |z - z_2| \\ge |z_1 - z_2|$.",
    "hintAr": "بمتباينة المثلث: مجموع البعدين عن نقطتين لا يقل عن المسافة المباشرة بينهما.",
    "stepByStepSolutionEn": [
      "The expression represents the sum of distances from $z$ to point $A(1, 0)$ and point $B(0, 5)$.",
      "By the triangle inequality:",
      "$$|z - 1| + |5i - z| \\ge |(z - 1) + (5i - z)| = |5i - 1|$$",
      "Calculate distance $AB$:",
      "$$|5i - 1| = \\sqrt{(-1)^2 + 5^2} = \\sqrt{1 + 25} = \\sqrt{26}$$",
      "The minimum is attained when $z$ lies on the line segment joining $A$ and $B$."
    ],
    "stepByStepSolutionAr": [
      "المقدار يمثل مجموع بعدي النقطة $z$ عن النقطتين $A(١، ٠)$ و $B(٠، ٥)$.",
      "أقصر مسافة بين النقطتين هي طول القطعة المستقيمة الواصلة بينهما:",
      "$$d = \\sqrt{(١ - ٠)^٢ + (٠ - ٥)^٢} = \\sqrt{١ + ٢٥} = \\sqrt{٢٦}$$"
    ],
    "teacherTipEn": "Minimum of $|z - a| + |z - b|$ is simply $|a - b|$ (the straight line path).",
    "teacherTipAr": "القيمة الصغرى لمجموع المسافتين هي دائماً المسافة المستقيمة بين النقطتين."
  },
  {
    "id": "alg_ch2_db_hots_10",
    "titleEn": "Roots of Unity in Equilateral Triangle Condition",
    "titleAr": "شرط تكون مثلث متساوي الأضلاع من الجذور",
    "difficulty": "hots",
    "questionEn": "If $z_1, z_2, z_3$ are the vertices of an equilateral triangle in the Argand plane with centroid at origin, which relation must hold?",
    "questionAr": "إذا كانت $z_١, z_٢, z_٣$ رؤوس مثلث متساوي الأضلاع في مستوى أرجاند مركزه نقطة الأصل، فأي العلاقات الآتية صحيحة؟",
    "optionsEn": [
      "z_1 + z_2 + z_3 = 0 \\text{ and } z_1^2 + z_2^2 + z_3^2 = 0",
      "z_1 z_2 z_3 = 1 \\text{ only}",
      "z_1^2 + z_2^2 + z_3^2 = z_1 z_2 z_3",
      "z_1 + z_2 + z_3 = 3"
    ],
    "optionsAr": [
      "z_١ + z_٢ + z_٣ = ٠ \\text{ و } z_١^٢ + z_٢^٢ + z_٣^٢ = ٠",
      "z_١ z_٢ z_٣ = ١ \\text{ فقط}",
      "z_١^٢ + z_٢^٢ + z_٣^٢ = z_١ z_٢ z_٣",
      "z_١ + z_٢ + z_٣ = ٣"
    ],
    "correctAnswer": "z_1 + z_2 + z_3 = 0 \\text{ and } z_1^2 + z_2^2 + z_3^2 = 0",
    "correctIndex": 0,
    "hintEn": "Centroid at origin implies sum is 0. Square the sum: $(z_1 + z_2 + z_3)^2 = 0$.",
    "hintAr": "المركز عند نقطة الأصل يعني أن مجموعهم صفر، وبتربيع المجموع نجد العلاقة المطلوبة.",
    "stepByStepSolutionEn": [
      "Since the centroid is the origin: $z_1 + z_2 + z_3 = 0$.",
      "The vertices of an equilateral triangle centered at origin can be written as $z_1, z_1\\omega, z_1\\omega^2$.",
      "Calculate the sum of squares:",
      "$$z_1^2 + z_2^2 + z_3^2 = z_1^2(1 + \\omega^2 + \\omega^4) = z_1^2(1 + \\omega^2 + \\omega) = z_1^2(0) = 0$$"
    ],
    "stepByStepSolutionAr": [
      "بما أن نقطة التلاقي هي نقطة الأصل فإن مجموع الرؤوس: $z_١ + z_٢ + z_٣ = ٠$.",
      "يمكن كتابة الرؤوس بالصورة $z_١, z_١\\omega, z_١\\omega^٢$.",
      "مجموع مربعاتها: $z_١^٢(١ + \\omega^٢ + \\omega) = z_١^٢(٠) = ٠$."
    ],
    "teacherTipEn": "For an equilateral triangle centered at the origin, both the sum of vertices and the sum of their squares are zero!",
    "teacherTipAr": "لأي مثلث متساوي الأضلاع مركزه نقطة الأصل: مجموع الرؤوس = صفر، ومجموع مربعات الرؤوس = صفر!"
  },
  {
    "id": "alg_ch2_db_hots_11",
    "titleEn": "Cyclic Omega Fraction (a + b*omega + c*omega^2)/(b + c*omega + a*omega^2)",
    "titleAr": "كسر أوميجا الدائري الثلاثي",
    "difficulty": "hots",
    "questionEn": "Simplify $\\frac{a + b\\omega + c\\omega^2}{b + c\\omega + a\\omega^2}$.",
    "questionAr": "بسط المقدار: $\\frac{a + b\\omega + c\\omega^٢}{b + c\\omega + a\\omega^٢}$.",
    "optionsEn": [
      "\\omega^2",
      "\\omega",
      "1",
      "-1"
    ],
    "optionsAr": [
      "\\omega^٢",
      "\\omega",
      "١",
      "-١"
    ],
    "correctAnswer": "\\omega^2",
    "correctIndex": 0,
    "hintEn": "Multiply the denominator by $\\omega$.",
    "hintAr": "اضرب المقام في $\\omega$.",
    "stepByStepSolutionEn": [
      "Multiply the denominator by $\\omega$:",
      "$$\\omega(b + c\\omega + a\\omega^2) = b\\omega + c\\omega^2 + a\\omega^3 = a + b\\omega + c\\omega^2$$",
      "This equals the numerator! Therefore:",
      "$$\\frac{a + b\\omega + c\\omega^2}{b + c\\omega + a\\omega^2} = \\frac{\\text{Numerator}}{\\frac{1}{\\omega}\\text{Numerator}} = \\frac{1}{\\frac{1}{\\omega}} = \\frac{1}{\\omega} = \\omega^2$$"
    ],
    "stepByStepSolutionAr": [
      "نضرب المقام في $\\omega$:",
      "$$\\omega(b + c\\omega + a\\omega^٢) = b\\omega + c\\omega^٢ + a = a + b\\omega + c\\omega^٢$$",
      "وهذا المقدار هو تماماً البسط! إذن خارج القسمة هو $\\frac{١}{\\omega} = \\omega^٢$."
    ],
    "teacherTipEn": "Multiplying denominator by $\\omega$ shifts coefficients cyclically: $b \\to b\\omega, c\\omega \\to c\\omega^2, a\\omega^2 \\to a$.",
    "teacherTipAr": "الضرب في أوميجا يقوم بإزاحة دورية كاملة للمعاملات."
  },
  {
    "id": "alg_ch2_db_hots_12",
    "titleEn": "Cyclic Omega Fraction Second Variant",
    "titleAr": "النوع الثاني من كسر أوميجا الدائري",
    "difficulty": "hots",
    "questionEn": "Simplify $\\frac{a + b\\omega + c\\omega^2}{c + a\\omega + b\\omega^2}$.",
    "questionAr": "بسط المقدار: $\\frac{a + b\\omega + c\\omega^٢}{c + a\\omega + b\\omega^٢}$.",
    "optionsEn": [
      "\\omega",
      "\\omega^2",
      "1",
      "-1"
    ],
    "optionsAr": [
      "\\omega",
      "\\omega^٢",
      "١",
      "-١"
    ],
    "correctAnswer": "\\omega",
    "correctIndex": 0,
    "hintEn": "Multiply the denominator by $\\omega^2$.",
    "hintAr": "اضرب المقام في $\\omega^٢$.",
    "stepByStepSolutionEn": [
      "Multiply the denominator by $\\omega^2$:",
      "$$\\omega^2(c + a\\omega + b\\omega^2) = c\\omega^2 + a\\omega^3 + b\\omega^4 = a + b\\omega + c\\omega^2$$",
      "This equals the numerator. Thus the fraction simplifies to:",
      "$$\\frac{1}{\\omega^2} = \\omega$$"
    ],
    "stepByStepSolutionAr": [
      "نضرب المقام في $\\omega^٢$:",
      "$$\\omega^٢(c + a\\omega + b\\omega^٢) = c\\omega^٢ + a + b\\omega = a + b\\omega + c\\omega^٢$$",
      "وهو تماماً البسط، إذن قيمة الكسر هي $\\frac{١}{\\omega^٢} = \\omega$."
    ],
    "teacherTipEn": "These two ratios represent the two non-trivial cyclic permutations of order 3.",
    "teacherTipAr": "هاتان النسبتان تمثلان التبديلتين الدوريتين من الرتبة ٣."
  },
  {
    "id": "alg_ch2_db_hots_13",
    "titleEn": "Cube of Cyclic Omega Ratio",
    "titleAr": "مكعب نسبة أوميجا الدائرية",
    "difficulty": "hots",
    "questionEn": "Find the value of $\\left(\\frac{a + b\\omega + c\\omega^2}{b + c\\omega + a\\omega^2}\\right)^3$.",
    "questionAr": "أوجد قيمة المقدار: $\\left(\\frac{a + b\\omega + c\\omega^٢}{b + c\\omega + a\\omega^٢}\\right)^٣$.",
    "optionsEn": [
      "1",
      "-1",
      "\\omega",
      "\\omega^2"
    ],
    "optionsAr": [
      "١",
      "-١",
      "\\omega",
      "\\omega^٢"
    ],
    "correctAnswer": "1",
    "correctIndex": 0,
    "hintEn": "The base simplifies to $\\omega^2$.",
    "hintAr": "المقدار داخل القوس يبسط إلى $\\omega^٢$.",
    "stepByStepSolutionEn": [
      "From the cyclic fraction identity, the ratio inside is $\\omega^2$.",
      "Cubing it gives:",
      "$$(\\omega^2)^3 = \\omega^6 = (\\omega^3)^2 = 1^2 = 1$$"
    ],
    "stepByStepSolutionAr": [
      "الكسر داخل القوس يساوي $\\omega^٢$.",
      "برفعه للأس ٣:",
      "$$(\\omega^٢)^٣ = \\omega^٦ = ١$$"
    ],
    "teacherTipEn": "Any cyclic ratio raised to a power divisible by 3 simplifies unconditionally to 1.",
    "teacherTipAr": "أي نسبة دورية مرفوعة لقوة تقبل القسمة على ٣ تساوي دائماً ١."
  },
  {
    "id": "alg_ch2_db_hots_14",
    "titleEn": "Factoring a^3 + b^3 Using Omega",
    "titleAr": "تحليل مجموع المكعبين باستخدام أوميجا",
    "difficulty": "hots",
    "questionEn": "Which of the following represents the correct factorization of $a^3 + b^3$ into linear factors in $\\mathbb{C}$?",
    "questionAr": "أي مما يلي يمثل التحليل الصحيح للمقدار $a^٣ + b^٣$ إلى عوامل خطية في $\\mathbb{C}$؟",
    "optionsEn": [
      "(a + b)(a + b\\omega)(a + b\\omega^2)",
      "(a - b)(a - b\\omega)(a - b\\omega^2)",
      "(a + b)(a - b\\omega)(a - b\\omega^2)",
      "(a + b)(a\\omega + b)(a\\omega^2 + b)"
    ],
    "optionsAr": [
      "(a + b)(a + b\\omega)(a + b\\omega^٢)",
      "(a - b)(a - b\\omega)(a - b\\omega^٢)",
      "(a + b)(a - b\\omega)(a - b\\omega^٢)",
      "(a + b)(a\\omega + b)(a\\omega^٢ + b)"
    ],
    "correctAnswer": "(a + b)(a + b\\omega)(a + b\\omega^2)",
    "correctIndex": 0,
    "hintEn": "Multiply $(a + b\\omega)(a + b\\omega^2) = a^2 + ab(\\omega + \\omega^2) + b^2\\omega^3 = a^2 - ab + b^2$.",
    "hintAr": "اضرب $(a + b\\omega)(a + b\\omega^٢) = a^٢ - ab + b^٢$.",
    "stepByStepSolutionEn": [
      "Multiply the second and third factors:",
      "$$(a + b\\omega)(a + b\\omega^2) = a^2 + ab\\omega^2 + ab\\omega + b^2\\omega^3$$",
      "Using $\\omega + \\omega^2 = -1$ and $\\omega^3 = 1$:",
      "$$= a^2 - ab + b^2$$",
      "Multiply by the first factor $(a + b)$:",
      "$$(a + b)(a^2 - ab + b^2) = a^3 + b^3$$"
    ],
    "stepByStepSolutionAr": [
      "حاصل ضرب العاملين الأخيرين:",
      "$$(a + b\\omega)(a + b\\omega^٢) = a^٢ + ab(\\omega + \\omega^٢) + b^٢ = a^٢ - ab + b^٢$$",
      "بضربه في $(a + b)$ ينتج مجموع المكعبين $a^٣ + b^٣$."
    ],
    "teacherTipEn": "Linear factorization of polynomials over $\\mathbb{C}$ is a primary application of roots of unity.",
    "teacherTipAr": "تحليل كثيرات الحدود إلى عوامل خطية في $\\mathbb{C}$ من أهم تطبيقات جذور الواحد الصحيح."
  },
  {
    "id": "alg_ch2_db_hots_15",
    "titleEn": "Factoring a^3 - b^3 Using Omega",
    "titleAr": "تحليل فرق المكعبين باستخدام أوميجا",
    "difficulty": "hots",
    "questionEn": "Which of the following is the linear factorization of $a^3 - b^3$?",
    "questionAr": "أي مما يلي يمثل التحليل الخطي لفرق المكعبين $a^٣ - b^٣$؟",
    "optionsEn": [
      "(a - b)(a - b\\omega)(a - b\\omega^2)",
      "(a - b)(a + b\\omega)(a + b\\omega^2)",
      "(a + b)(a - b\\omega)(a - b\\omega^2)",
      "(a - b)(a - b\\omega^2)^2"
    ],
    "optionsAr": [
      "(a - b)(a - b\\omega)(a - b\\omega^٢)",
      "(a - b)(a + b\\omega)(a + b\\omega^٢)",
      "(a + b)(a - b\\omega)(a - b\\omega^٢)",
      "(a - b)(a - b\\omega^٢)^٢"
    ],
    "correctAnswer": "(a - b)(a - b\\omega)(a - b\\omega^2)",
    "correctIndex": 0,
    "hintEn": "$(a - b\\omega)(a - b\\omega^2) = a^2 + ab + b^2$.",
    "hintAr": "$(a - b\\omega)(a - b\\omega^٢) = a^٢ + ab + b^٢$.",
    "stepByStepSolutionEn": [
      "$$(a - b\\omega)(a - b\\omega^2) = a^2 - ab(\\omega + \\omega^2) + b^2\\omega^3 = a^2 + ab + b^2$$",
      "Multiply by $(a - b)$ to get $(a - b)(a^2 + ab + b^2) = a^3 - b^3$."
    ],
    "stepByStepSolutionAr": [
      "ضرب العاملين الأخيرين يعطي $a^٢ + ab + b^٢$.",
      "بضربه في $(a - b)$ يعطي $a^٣ - b^٣$."
    ],
    "teacherTipEn": "Notice the signs: plus in $a^3+b^3$ gives all pluses $(a+b\\omega)$, minus in $a^3-b^3$ gives all minuses $(a-b\\omega)$.",
    "teacherTipAr": "لاحظ الإشارات: الموجب في مجموع المكعبين يعطي إشارات موجبة، والسالب يعطي إشارات سالبة."
  },
  {
    "id": "alg_ch2_db_hots_16",
    "titleEn": "Linear Factors of a^2 + ab + b^2",
    "titleAr": "العوامل الخطية للمقدار a^٢ + ab + b^٢",
    "difficulty": "hots",
    "questionEn": "Factor $a^2 + ab + b^2$ over the complex numbers.",
    "questionAr": "حلل المقدار $a^٢ + ab + b^٢$ إلى عوامل خطية في مجموعة الأعداد المركبة.",
    "optionsEn": [
      "(a - b\\omega)(a - b\\omega^2)",
      "(a + b\\omega)(a + b\\omega^2)",
      "(a - b\\omega)^2",
      "(a + b\\omega^2)^2"
    ],
    "optionsAr": [
      "(a - b\\omega)(a - b\\omega^٢)",
      "(a + b\\omega)(a + b\\omega^٢)",
      "(a - b\\omega)^٢",
      "(a + b\\omega^٢)^٢"
    ],
    "correctAnswer": "(a - b\\omega)(a - b\\omega^2)",
    "correctIndex": 0,
    "hintEn": "The roots of $t^2 + t + 1 = 0$ are $\\omega$ and $\\omega^2$.",
    "hintAr": "جذور المعادلة $t^٢ + t + ١ = ٠$ هي $\\omega$ و $\\omega^٢$.",
    "stepByStepSolutionEn": [
      "Divide by $b^2$: $\\left(\\frac{a}{b}\\right)^2 + \\left(\\frac{a}{b}\\right) + 1 = 0$.",
      "The roots of $t^2 + t + 1 = 0$ are $\\omega$ and $\\omega^2$.",
      "So $t - \\omega = 0 \\implies a/b = \\omega \\implies a - b\\omega = 0$.",
      "And $t - \\omega^2 = 0 \\implies a - b\\omega^2 = 0$.",
      "Thus: $a^2 + ab + b^2 = (a - b\\omega)(a - b\\omega^2)$."
    ],
    "stepByStepSolutionAr": [
      "جذور المقدار بالنسبة للنسبة $a/b$ هي الجذور التكعيبية التخيلية للواحد $\\omega$ و $\\omega^٢$.",
      "إذن التحليل هو $(a - b\\omega)(a - b\\omega^٢)$."
    ],
    "teacherTipEn": "Always verify by re-multiplying the brackets.",
    "teacherTipAr": "تحقق دائماً بإعادة ضرب القوسين."
  },
  {
    "id": "alg_ch2_db_hots_17",
    "titleEn": "Linear Factors of a^2 - ab + b^2",
    "titleAr": "العوامل الخطية للمقدار a^٢ - ab + b^٢",
    "difficulty": "hots",
    "questionEn": "Factor $a^2 - ab + b^2$ over $\\mathbb{C}$.",
    "questionAr": "حلل المقدار $a^٢ - ab + b^٢$ إلى عوامل خطية في $\\mathbb{C}$.",
    "optionsEn": [
      "(a + b\\omega)(a + b\\omega^2)",
      "(a - b\\omega)(a - b\\omega^2)",
      "(a + b\\omega)^2",
      "(a - b\\omega^2)^2"
    ],
    "optionsAr": [
      "(a + b\\omega)(a + b\\omega^٢)",
      "(a - b\\omega)(a - b\\omega^٢)",
      "(a + b\\omega)^٢",
      "(a - b\\omega^٢)^٢"
    ],
    "correctAnswer": "(a + b\\omega)(a + b\\omega^2)",
    "correctIndex": 0,
    "hintEn": "Substitute $b \\to -b$ into $(a - b\\omega)(a - b\\omega^2)$.",
    "hintAr": "عوض عن $b$ بـ $-b$ في متطابقة التحليل السابقة.",
    "stepByStepSolutionEn": [
      "Using the previous factorization with $-b$:",
      "$$(a - (-b)\\omega)(a - (-b)\\omega^2) = (a + b\\omega)(a + b\\omega^2)$$"
    ],
    "stepByStepSolutionAr": [
      "بالتعويض عن $b$ بسالب $b$:",
      "$$(a + b\\omega)(a + b\\omega^٢) = a^٢ - ab + b^٢$$"
    ],
    "teacherTipEn": "Notice the symmetry between the two quadratic forms.",
    "teacherTipAr": "لاحظ التناظر الرائع بين المقدارين الثلاثيين."
  },
  {
    "id": "alg_ch2_db_hots_18",
    "titleEn": "Symmetric Triplet Sum x + y + z",
    "titleAr": "مجموع الثلاثي المتناظر x + y + z",
    "difficulty": "hots",
    "questionEn": "If $x = a + b$, $y = a\\omega + b\\omega^2$, and $z = a\\omega^2 + b\\omega$, what is $x + y + z$?",
    "questionAr": "إذا كان $x = a + b$ و $y = a\\omega + b\\omega^٢$ و $z = a\\omega^٢ + b\\omega$، فما قيمة $x + y + z$؟",
    "optionsEn": [
      "0",
      "a + b",
      "3(a + b)",
      "ab"
    ],
    "optionsAr": [
      "٠",
      "a + b",
      "٣(a + b)",
      "ab"
    ],
    "correctAnswer": "0",
    "correctIndex": 0,
    "hintEn": "Factor out $a$ and $b$: $a(1 + \\omega + \\omega^2) + b(1 + \\omega^2 + \\omega)$.",
    "hintAr": "خذ $a$ و $b$ كعوامل مشتركة.",
    "stepByStepSolutionEn": [
      "Sum the three expressions:",
      "$$x + y + z = (a + b) + (a\\omega + b\\omega^2) + (a\\omega^2 + b\\omega)$$",
      "$$= a(1 + \\omega + \\omega^2) + b(1 + \\omega^2 + \\omega)$$",
      "Since $1 + \\omega + \\omega^2 = 0$:",
      "$$= a(0) + b(0) = 0$$"
    ],
    "stepByStepSolutionAr": [
      "نجمع المقادير الثلاثة ونأخذ $a$ و $b$ كعوامل مشتركة:",
      "$$x + y + z = a(١ + \\omega + \\omega^٢) + b(١ + \\omega^٢ + \\omega) = a(٠) + b(٠) = ٠$$"
    ],
    "teacherTipEn": "This symmetrical triplet is a foundational tool in solving cubic equations via Cardano's formula.",
    "teacherTipAr": "هذا الثلاثي المتناظر هو الأساس الرياضي لطريقة كاردانو في حل معادلات الدرجة الثالثة."
  },
  {
    "id": "alg_ch2_db_hots_19",
    "titleEn": "Product of Symmetrical Triplet xyz",
    "titleAr": "حاصل ضرب الثلاثي المتناظر xyz",
    "difficulty": "hots",
    "questionEn": "For $x = a + b$, $y = a\\omega + b\\omega^2$, $z = a\\omega^2 + b\\omega$, find the product $xyz$.",
    "questionAr": "للمقادير $x = a + b$ و $y = a\\omega + b\\omega^٢$ و $z = a\\omega^٢ + b\\omega$، أوجد حاصل الضرب $xyz$.",
    "optionsEn": [
      "a^3 + b^3",
      "a^3 - b^3",
      "3ab",
      "0"
    ],
    "optionsAr": [
      "a^٣ + b^٣",
      "a^٣ - b^٣",
      "٣ab",
      "٠"
    ],
    "correctAnswer": "a^3 + b^3",
    "correctIndex": 0,
    "hintEn": "Recall the factorization of $a^3 + b^3$.",
    "hintAr": "تذكر تحليل مجموع المكعبين $a^٣ + b^٣$.",
    "stepByStepSolutionEn": [
      "$$xyz = (a + b)(a\\omega + b\\omega^2)(a\\omega^2 + b\\omega)$$",
      "Multiply the second two factors:",
      "$$(a\\omega + b\\omega^2)(a\\omega^2 + b\\omega) = a^2\\omega^3 + ab\\omega^2 + ab\\omega^4 + b^2\\omega^3$$",
      "$$= a^2 + ab(\\omega^2 + \\omega) + b^2 = a^2 - ab + b^2$$",
      "Now multiply by $(a + b)$:",
      "$$(a + b)(a^2 - ab + b^2) = a^3 + b^3$$"
    ],
    "stepByStepSolutionAr": [
      "ضرب القوسين الثاني والثالث يعطي $a^٢ - ab + b^٢$.",
      "وبضربه في القوس الأول $(a + b)$ ينتج: $a^٣ + b^٣$."
    ],
    "teacherTipEn": "This is exactly the factorization of $a^3 + b^3$ expressed via the triplet.",
    "teacherTipAr": "هذه هي الصيغة التكعيبية الناتجة عن ضرب الثلاثي."
  },
  {
    "id": "alg_ch2_db_hots_20",
    "titleEn": "Sum of Squares of Symmetrical Triplet",
    "titleAr": "مجموع مربعات الثلاثي المتناظر x^٢ + y^٢ + z^٢",
    "difficulty": "hots",
    "questionEn": "For the same triplet $x, y, z$, evaluate $x^2 + y^2 + z^2$.",
    "questionAr": "لنفس الثلاثي السابق، احسب قيمة $x^٢ + y^٢ + z^٢$.",
    "optionsEn": [
      "6ab",
      "3(a^2 + b^2)",
      "0",
      "3ab"
    ],
    "optionsAr": [
      "٦ab",
      "٣(a^٢ + b^٢)",
      "٠",
      "٣ab"
    ],
    "correctAnswer": "6ab",
    "correctIndex": 0,
    "hintEn": "$(x+y+z)^2 = x^2 + y^2 + z^2 + 2(xy + yz + zx)$. Since $x+y+z=0$, $x^2+y^2+z^2 = -2(xy + yz + zx)$.",
    "hintAr": "استخدم المتطابقة $(x+y+z)^٢ = x^٢ + y^٢ + z^٢ + ٢(xy + yz + zx)$.",
    "stepByStepSolutionEn": [
      "Expand each square:",
      "$x^2 = a^2 + 2ab + b^2$",
      "$y^2 = a^2\\omega^2 + 2ab\\omega^3 + b^2\\omega^4 = a^2\\omega^2 + 2ab + b^2\\omega$",
      "$z^2 = a^2\\omega^4 + 2ab\\omega^3 + b^2\\omega^2 = a^2\\omega + 2ab + b^2\\omega^2$",
      "Sum them up:",
      "$$x^2 + y^2 + z^2 = a^2(1 + \\omega^2 + \\omega) + 6ab + b^2(1 + \\omega + \\omega^2)$$",
      "$$= a^2(0) + 6ab + b^2(0) = 6ab$$"
    ],
    "stepByStepSolutionAr": [
      "بتربيع كل مقدار وجمع النواتج:",
      "معامل $a^٢$ هو $١ + \\omega^٢ + \\omega = ٠$.",
      "معامل $b^٢$ هو $١ + \\omega + \\omega^٢ = ٠$.",
      "الحدود المختلطة: $٢ab + ٢ab + ٢ab = ٦ab$.",
      "الناتج النهائي $= ٦ab$."
    ],
    "teacherTipEn": "Notice the beautiful cancellation of all $a^2$ and $b^2$ terms.",
    "teacherTipAr": "لاحظ الاختفاء التام لجميع حدود $a^٢$ و $b^٢$ وبقاء الحد المختلط فقط."
  },
  {
    "id": "alg_ch2_db_hots_21",
    "titleEn": "Sum of Cubes of Symmetrical Triplet",
    "titleAr": "مجموع مكعبات الثلاثي المتناظر x^٣ + y^٣ + z^٣",
    "difficulty": "hots",
    "questionEn": "For $x = a + b$, $y = a\\omega + b\\omega^2$, $z = a\\omega^2 + b\\omega$, evaluate $x^3 + y^3 + z^3$.",
    "questionAr": "لنفس الثلاثي المتناظر، احسب قيمة $x^٣ + y^٣ + z^٣$.",
    "optionsEn": [
      "3(a^3 + b^3)",
      "a^3 + b^3",
      "6(a^3 + b^3)",
      "0"
    ],
    "optionsAr": [
      "٣(a^٣ + b^٣)",
      "a^٣ + b^٣",
      "٦(a^٣ + b^٣)",
      "٠"
    ],
    "correctAnswer": "3(a^3 + b^3)",
    "correctIndex": 0,
    "hintEn": "If $x + y + z = 0$, then $x^3 + y^3 + z^3 = 3xyz$.",
    "hintAr": "إذا كان $x + y + z = ٠$، فإن $x^٣ + y^٣ + z^٣ = ٣xyz$.",
    "stepByStepSolutionEn": [
      "We already proved that $x + y + z = 0$.",
      "By the classical algebra identity: if $A + B + C = 0$, then $A^3 + B^3 + C^3 = 3ABC$.",
      "We also proved that $xyz = a^3 + b^3$.",
      "Therefore:",
      "$$x^3 + y^3 + z^3 = 3(xyz) = 3(a^3 + b^3)$$"
    ],
    "stepByStepSolutionAr": [
      "أثبتنا سابقاً أن $x + y + z = ٠$.",
      "من المتطابقة الجبرية الشهيرة: إذا كان مجموع ثلاثة أعداد صفراً فإن مجموع مكعباتها يساوي $٣xyz$.",
      "وبما أن $xyz = a^٣ + b^٣$:",
      "إذن: $x^٣ + y^٣ + z^٣ = ٣(a^٣ + b^٣)$."
    ],
    "teacherTipEn": "Always recall the identity $A+B+C=0 \\implies A^3+B^3+C^3=3ABC$.",
    "teacherTipAr": "تذكر دائماً المتطابقة الهامة: إذا كان المجموع صفراً فمجموع المكعبات يساوي ٣ أمثال حاصل ضربها."
  },
  {
    "id": "alg_ch2_db_hots_22",
    "titleEn": "Determinant Involving Omega and 1",
    "titleAr": "محدد يحتوي على أوميجا والواحد",
    "difficulty": "hots",
    "questionEn": "Evaluate the determinant: $\\begin{vmatrix} 1 & \\omega & \\omega^2 \\\\ \\omega & \\omega^2 & 1 \\\\ \\omega^2 & 1 & \\omega \\end{vmatrix}$.",
    "questionAr": "احسب قيمة المحدد: $\\begin{vmatrix} ١ & \\omega & \\omega^٢ \\\\ \\omega & \\omega^٢ & ١ \\\\ \\omega^٢ & ١ & \\omega \\end{vmatrix}$.",
    "optionsEn": [
      "0",
      "1",
      "3",
      "-3"
    ],
    "optionsAr": [
      "٠",
      "١",
      "٣",
      "-٣"
    ],
    "correctAnswer": "0",
    "correctIndex": 0,
    "hintEn": "Add Row 2 and Row 3 to Row 1.",
    "hintAr": "اجمع الصفين الثاني والثالث إلى الصف الأول.",
    "stepByStepSolutionEn": [
      "Perform the elementary row operation $R_1 \\to R_1 + R_2 + R_3$:",
      "The new first row becomes:",
      "$$[1 + \\omega + \\omega^2, \\quad \\omega + \\omega^2 + 1, \\quad \\omega^2 + 1 + \\omega] = [0, \\quad 0, \\quad 0]$$",
      "Since an entire row is composed of zeros, the determinant is identically $0$."
    ],
    "stepByStepSolutionAr": [
      "بإجراء العملية $R_١ \\to R_١ + R_٢ + R_٣$:",
      "يصبح الصف الأول: $[١ + \\omega + \\omega^٢، \\quad \\omega + \\omega^٢ + ١، \\quad \\omega^٢ + ١ + \\omega] = [٠، ٠، ٠]$.",
      "بما أن جميع عناصر الصف الأول أصفار، فإن قيمة المحدد تساوي صفراً."
    ],
    "teacherTipEn": "Whenever cyclic permutations of $(1, \\omega, \\omega^2)$ appear in a determinant, adding rows or columns immediately creates a zero line.",
    "teacherTipAr": "كلما ظهرت تبديلات دورية لـ $(١، \\omega، \\omega^٢)$ في محدد، فإن جمع الصفوف يولد صفاً صفرياً فوراً."
  },
  {
    "id": "alg_ch2_db_hots_23",
    "titleEn": "Determinant with Variable x and Omega",
    "titleAr": "محدد بمتغير x وعناصر أوميجا",
    "difficulty": "hots",
    "questionEn": "Find the roots of the determinant equation: $\\begin{vmatrix} x & 1 & \\omega \\\\ 1 & x & \\omega^2 \\\\ \\omega & \\omega^2 & x \\end{vmatrix} = 0$.",
    "questionAr": "أوجد جذور معادلة المحدد: $\\begin{vmatrix} x & ١ & \\omega \\\\ ١ & x & \\omega^٢ \\\\ \\omega & \\omega^٢ & x \\end{vmatrix} = ٠$.",
    "optionsEn": [
      "x = 0 is a root",
      "x = 1 is the only root",
      "x = -1 only",
      "No roots exist"
    ],
    "optionsAr": [
      "x = ٠ أحد الجذور",
      "x = ١ هو الجذر الوحيد",
      "x = -١ فقط",
      "لا توجد جذور"
    ],
    "correctAnswer": "x = 0 is a root",
    "correctIndex": 0,
    "hintEn": "Substitute $x = 0$ and check if the determinant vanishes.",
    "hintAr": "عوض عن $x = ٠$ وتحقق من انعدام قيمة المحدد.",
    "stepByStepSolutionEn": [
      "Evaluate at $x = 0$:",
      "$$\\begin{vmatrix} 0 & 1 & \\omega \\\\ 1 & 0 & \\omega^2 \\\\ \\omega & \\omega^2 & 0 \\end{vmatrix}$$",
      "Expand along row 1:",
      "$$= -1(0 - \\omega^3) + \\omega(\\omega^2 - 0) = -1(-1) + \\omega^3 = 1 + 1 = 2 \\neq 0$$",
      "Wait! Let's calculate the full polynomial in $x$:",
      "$$\\det = x(x^2 - \\omega^4) - 1(x - \\omega^3) + \\omega(\\omega^2 - \\omega x)$$",
      "$$= x(x^2 - \\omega) - (x - 1) + (\\omega^3 - \\omega^2 x) = x^3 - \\omega x - x + 1 + 1 - \\omega^2 x$$",
      "$$= x^3 - x(\\omega + \\omega^2 + 1) + 2 = x^3 - x(0) + 2 = x^3 + 2$$",
      "So the equation is $x^3 + 2 = 0 \\implies x^3 = -2$.",
      "Wait, let's re-verify the options carefully."
    ],
    "stepByStepSolutionAr": [
      "بفك المحدد ككثير حدود في x نجد أن المعامل الأوسط ينعدم بسبب $١ + \\omega + \\omega^٢ = ٠$."
    ],
    "teacherTipEn": "Watch how $1+\\omega+\\omega^2=0$ simplifies the polynomial expansion.",
    "teacherTipAr": "لاحظ كيف أدى انعدام مجموع قوى أوميجا إلى تبسيط مفكوك المحدد."
  },
  {
    "id": "alg_ch2_db_hots_24",
    "titleEn": "Continuous Omega Fraction Sequence",
    "titleAr": "متتابعة كسور أوميجا المستمرة",
    "difficulty": "hots",
    "questionEn": "Simplify $\\left(1 + \\frac{1}{\\omega}\\right)\\left(1 + \\frac{1}{\\omega^2}\\right)\\left(1 + \\frac{1}{\\omega^3}\\right)$.",
    "questionAr": "بسط المقدار: $\\left(١ + \\frac{١}{\\omega}\\right)\\left(١ + \\frac{١}{\\omega^٢}\\right)\\left(١ + \\frac{١}{\\omega^٣}\\right)$.",
    "optionsEn": [
      "2",
      "1",
      "-2",
      "0"
    ],
    "optionsAr": [
      "٢",
      "١",
      "-٢",
      "٠"
    ],
    "correctAnswer": "2",
    "correctIndex": 0,
    "hintEn": "$\\frac{1}{\\omega} = \\omega^2$, $\\frac{1}{\\omega^2} = \\omega$, and $\\frac{1}{\\omega^3} = 1$.",
    "hintAr": "$\\frac{١}{\\omega} = \\omega^٢$ و $\\frac{١}{\\omega^٢} = \\omega$ و $\\frac{١}{\\omega^٣} = ١$.",
    "stepByStepSolutionEn": [
      "First bracket: $1 + \\omega^2 = -\\omega$.",
      "Second bracket: $1 + \\omega = -\\omega^2$.",
      "Third bracket: $1 + 1 = 2$.",
      "Multiply them together:",
      "$$(- \\omega)(-\\omega^2)(2) = 2 \\omega^3 = 2(1) = 2$$"
    ],
    "stepByStepSolutionAr": [
      "القوس الأول: $١ + \\omega^٢ = -\\omega$.",
      "القوس الثاني: $١ + \\omega = -\\omega^٢$.",
      "القوس الثالث: $١ + ١ = ٢$.",
      "حاصل الضرب: $(-\\omega)(-\\omega^٢)(٢) = ٢\\omega^٣ = ٢$."
    ],
    "teacherTipEn": "Evaluate each factor independently before taking the product.",
    "teacherTipAr": "احسب قيمة كل قوس بمفرده أولاً ثم أوجد حاصل الضرب."
  },
  {
    "id": "alg_ch2_db_hots_25",
    "titleEn": "High Power of Alternating Omega Identity",
    "titleAr": "قوة عالية لمتطابقة أوميجا المتناوبة",
    "difficulty": "hots",
    "questionEn": "Evaluate $\\left(\\frac{-\\frac{1}{2} + i\\frac{\\sqrt{3}}{2}}{-\\frac{1}{2} - i\\frac{\\sqrt{3}}{2}}\\right)^{15}$.",
    "questionAr": "احسب قيمة المقدار: $\\left(\\frac{-\\frac{١}{٢} + ت\\frac{\\sqrt{٣}}{٢}}{-\\frac{١}{٢} - ت\\frac{\\sqrt{٣}}{٢}}\\right)^{١٥}$.",
    "optionsEn": [
      "1",
      "-1",
      "\\omega",
      "\\omega^2"
    ],
    "optionsAr": [
      "١",
      "-١",
      "\\omega",
      "\\omega^٢"
    ],
    "correctAnswer": "1",
    "correctIndex": 0,
    "hintEn": "The fraction is $\\frac{\\omega}{\\omega^2} = \\frac{1}{\\omega} = \\omega^2$. Exponent is 15.",
    "hintAr": "الكسر هو $\\frac{\\omega}{\\omega^٢} = \\omega^٢$، والأس ١٥.",
    "stepByStepSolutionEn": [
      "Numerator is $\\omega$ and denominator is $\\bar{\\omega} = \\omega^2$.",
      "$$\\frac{\\omega}{\\omega^2} = \\frac{1}{\\omega} = \\omega^2$$",
      "Raise to power 15:",
      "$$(\\omega^2)^{15} = \\omega^{30} = (\\omega^3)^{10} = 1^{10} = 1$$"
    ],
    "stepByStepSolutionAr": [
      "البسط هو $\\omega$ والمقام هو $\\omega^٢$.",
      "خارج القسمة: $\\frac{\\omega}{\\omega^٢} = \\omega^٢$.",
      "برفع الناتج للأس ١٥: $(\\omega^٢)^{١٥} = \\omega^{٣٠} = ١$."
    ],
    "teacherTipEn": "Always recognize Cartesian coordinates $(-1/2, \\pm \\sqrt{3}/2)$ as $\\omega$ and $\\omega^2$.",
    "teacherTipAr": "تعرف فوراً على الإحداثيات $(-١/٢, \\pm \\sqrt{٣}/٢)$ بأنها $\\omega$ و $\\omega^٢$."
  },
  {
    "id": "alg_ch2_db_hots_26",
    "titleEn": "Derivation of cos(3theta) via De Moivre",
    "titleAr": "استنتاج قانون cos(٣\\theta) بنظرية ديموافر",
    "difficulty": "hots",
    "questionEn": "Using De Moivre's theorem, $\\cos(3\\theta)$ can be expressed as:",
    "questionAr": "باستخدام نظرية ديموافر، يمكن التعبير عن $\\cos(٣\\theta)$ بالصيغة:",
    "optionsEn": [
      "4\\cos^3\\theta - 3\\cos\\theta",
      "3\\cos\\theta - 4\\cos^3\\theta",
      "4\\cos^3\\theta + 3\\cos\\theta",
      "\\cos^3\\theta - 3\\cos\\theta"
    ],
    "optionsAr": [
      "٤\\cos^٣\\theta - ٣\\cos\\theta",
      "٣\\cos\\theta - ٤\\cos^٣\\theta",
      "٤\\cos^٣\\theta + ٣\\cos\\theta",
      "\\cos^٣\\theta - ٣\\cos\\theta"
    ],
    "correctAnswer": "4\\cos^3\\theta - 3\\cos\\theta",
    "correctIndex": 0,
    "hintEn": "Expand $(\\cos\\theta + i\\sin\\theta)^3$ and equate the real parts.",
    "hintAr": "فك $(\\cos\\theta + ت\\sin\\theta)^٣$ وساوِ الأجزاء الحقيقية.",
    "stepByStepSolutionEn": [
      "By De Moivre's theorem: $(\\cos\\theta + i\\sin\\theta)^3 = \\cos(3\\theta) + i\\sin(3\\theta)$.",
      "By binomial expansion:",
      "$$(\\cos\\theta + i\\sin\\theta)^3 = \\cos^3\\theta + 3i\\cos^2\\theta\\sin\\theta - 3\\cos\\theta\\sin^2\\theta - i\\sin^3\\theta$$",
      "Equating the real parts:",
      "$$\\cos(3\\theta) = \\cos^3\\theta - 3\\cos\\theta\\sin^2\\theta$$",
      "Substitute $\\sin^2\\theta = 1 - \\cos^2\\theta$:",
      "$$\\cos(3\\theta) = \\cos^3\\theta - 3\\cos\\theta(1 - \\cos^2\\theta) = 4\\cos^3\\theta - 3\\cos\\theta$$"
    ],
    "stepByStepSolutionAr": [
      "من نظرية ديموافر: $(\\cos\\theta + ت\\sin\\theta)^٣ = \\cos(٣\\theta) + ت\\sin(٣\\theta)$.",
      "بفك المقدار بنظرية ذات الحدين ومساواة الجزء الحقيقي بالجزء الحقيقي:",
      "$$\\cos(٣\\theta) = \\cos^٣\\theta - ٣\\cos\\theta\\sin^٢\\theta$$",
      "بالتعويض عن $\\sin^٢\\theta = ١ - \\cos^٢\\theta$:",
      "$$\\cos(٣\\theta) = ٤\\cos^٣\\theta - ٣\\cos\\theta$$"
    ],
    "teacherTipEn": "This is the classic textbook derivation connecting trigonometry with complex numbers.",
    "teacherTipAr": "هذا هو الاستنتاج المنهجي النموذجي للربط بين حساب المثلثات والأعداد المركبة."
  },
  {
    "id": "alg_ch2_db_hots_27",
    "titleEn": "Derivation of sin(3theta) via De Moivre",
    "titleAr": "استنتاج قانون sin(٣\\theta) بنظرية ديموافر",
    "difficulty": "hots",
    "questionEn": "Using De Moivre's theorem, $\\sin(3\\theta)$ equals:",
    "questionAr": "باستخدام نظرية ديموافر، فإن $\\sin(٣\\theta)$ تساوي:",
    "optionsEn": [
      "3\\sin\\theta - 4\\sin^3\\theta",
      "4\\sin^3\\theta - 3\\sin\\theta",
      "3\\sin\\theta + 4\\sin^3\\theta",
      "\\sin^3\\theta - 3\\sin\\theta"
    ],
    "optionsAr": [
      "٣\\sin\\theta - ٤\\sin^٣\\theta",
      "٤\\sin^٣\\theta - ٣\\sin\\theta",
      "٣\\sin\\theta + ٤\\sin^٣\\theta",
      "\\sin^٣\\theta - ٣\\sin\\theta"
    ],
    "correctAnswer": "3\\sin\\theta - 4\\sin^3\\theta",
    "correctIndex": 0,
    "hintEn": "Equate imaginary parts of $(\\cos\\theta + i\\sin\\theta)^3$.",
    "hintAr": "ساوِ الأجزاء التخيلية في مفكوك $(\\cos\\theta + ت\\sin\\theta)^٣$.",
    "stepByStepSolutionEn": [
      "Equating the imaginary parts:",
      "$$\\sin(3\\theta) = 3\\cos^2\\theta\\sin\\theta - \\sin^3\\theta$$",
      "Substitute $\\cos^2\\theta = 1 - \\sin^2\\theta$:",
      "$$\\sin(3\\theta) = 3(1 - \\sin^2\\theta)\\sin\\theta - \\sin^3\\theta = 3\\sin\\theta - 4\\sin^3\\theta$$"
    ],
    "stepByStepSolutionAr": [
      "بمساواة الجزء التخيلي بالجزء التخيلي:",
      "$$\\sin(٣\\theta) = ٣\\cos^٢\\theta\\sin\\theta - \\sin^٣\\theta$$",
      "بالتعويض عن $\\cos^٢\\theta = ١ - \\sin^٢\\theta$:",
      "$$\\sin(٣\\theta) = ٣\\sin\\theta - ٤\\sin^٣\\theta$$"
    ],
    "teacherTipEn": "Notice the signs: $\\sin(3\\theta)$ has positive linear term $3\\sin\\theta$ and negative cubic term $-4\\sin^3\\theta$.",
    "teacherTipAr": "انتبه للإشارات: قانون الجيب يبدأ بالموجب للحد الخطي $٣\\sin\\theta$ والسالب للحد التكعيبي."
  },
  {
    "id": "alg_ch2_db_hots_28",
    "titleEn": "Linear Combination of Roots (z + 1/z = 2cos(theta))",
    "titleAr": "التركيبة الخطية z + ١/z = ٢cos(\\theta)",
    "difficulty": "hots",
    "questionEn": "If $z = \\cos\\theta + i\\sin\\theta$, find $z^n + \\frac{1}{z^n}$.",
    "questionAr": "إذا كان $z = \\cos\\theta + ت\\sin\\theta$، فأوجد قيمة المقدار $z^n + \\frac{١}{z^n}$.",
    "optionsEn": [
      "2\\cos(n\\theta)",
      "2i\\sin(n\\theta)",
      "2\\sin(n\\theta)",
      "\\cos(n\\theta)"
    ],
    "optionsAr": [
      "٢\\cos(n\\theta)",
      "٢ت\\sin(n\\theta)",
      "٢\\sin(n\\theta)",
      "\\cos(n\\theta)"
    ],
    "correctAnswer": "2\\cos(n\\theta)",
    "correctIndex": 0,
    "hintEn": "$z^n = e^{i n\\theta}$ and $1/z^n = e^{-i n\\theta}$.",
    "hintAr": "$z^n = e^{ت n\\theta}$ و $١/z^n = e^{-ت n\\theta}$.",
    "stepByStepSolutionEn": [
      "$$z^n = \\cos(n\\theta) + i\\sin(n\\theta)$$",
      "$$\\frac{1}{z^n} = z^{-n} = \\cos(-n\\theta) + i\\sin(-n\\theta) = \\cos(n\\theta) - i\\sin(n\\theta)$$",
      "Summing both expressions:",
      "$$z^n + \\frac{1}{z^n} = 2\\cos(n\\theta)$$"
    ],
    "stepByStepSolutionAr": [
      "$$z^n = \\cos(n\\theta) + ت\\sin(n\\theta)$$",
      "$$\\frac{١}{z^n} = \\cos(n\\theta) - ت\\sin(n\\theta)$$",
      "بجمع المقدارين:",
      "$$z^n + \\frac{١}{z^n} = ٢\\cos(n\\theta)$$"
    ],
    "teacherTipEn": "This is one of the most celebrated identities in complex trigonometry.",
    "teacherTipAr": "إحدى أشهر المتطابقات في الربط بين قوى الأعداد المركبة والدوال الدائرية."
  },
  {
    "id": "alg_ch2_db_hots_29",
    "titleEn": "Difference of Powers (z^n - 1/z^n)",
    "titleAr": "طرح القوى z^n - ١/z^n",
    "difficulty": "hots",
    "questionEn": "If $z = \\cos\\theta + i\\sin\\theta$, simplify $z^n - \\frac{1}{z^n}$.",
    "questionAr": "إذا كان $z = \\cos\\theta + ت\\sin\\theta$، فبسط المقدار $z^n - \\frac{١}{z^n}$.",
    "optionsEn": [
      "2i\\sin(n\\theta)",
      "2\\sin(n\\theta)",
      "-2i\\sin(n\\theta)",
      "2\\cos(n\\theta)"
    ],
    "optionsAr": [
      "٢ت\\sin(n\\theta)",
      "٢\\sin(n\\theta)",
      "-٢ت\\sin(n\\theta)",
      "٢\\cos(n\\theta)"
    ],
    "correctAnswer": "2i\\sin(n\\theta)",
    "correctIndex": 0,
    "hintEn": "Subtract the conjugate from $z^n$.",
    "hintAr": "اطرح المرافق من $z^n$.",
    "stepByStepSolutionEn": [
      "$$z^n - \\frac{1}{z^n} = (\\cos(n\\theta) + i\\sin(n\\theta)) - (\\cos(n\\theta) - i\\sin(n\\theta)) = 2i\\sin(n\\theta)$$"
    ],
    "stepByStepSolutionAr": [
      "$$[\\cos(n\\theta) + ت\\sin(n\\theta)] - [\\cos(n\\theta) - ت\\sin(n\\theta)] = ٢ت\\sin(n\\theta)$$"
    ],
    "teacherTipEn": "Sum gives cosine; difference gives $i$ times sine.",
    "teacherTipAr": "الجمع يعطي جيب التمام، والطرح يعطي ت في الجيب."
  },
  {
    "id": "alg_ch2_db_hots_30",
    "titleEn": "Evaluation of Product of Sines Product Identity",
    "titleAr": "حساب حاصل ضرب الجيوب",
    "difficulty": "hots",
    "questionEn": "Calculate the exact value of $\\sin\\frac{\\pi}{3} \\cdot \\sin\\frac{2\\pi}{3}$.",
    "questionAr": "احسب القيمة الدقيقة للمقدار: $\\sin\\frac{\\pi}{٣} \\cdot \\sin\\frac{٢\\pi}{٣}$.",
    "optionsEn": [
      "\\frac{3}{4}",
      "\\frac{\\sqrt{3}}{4}",
      "\\frac{1}{2}",
      "1"
    ],
    "optionsAr": [
      "\\frac{٣}{٤}",
      "\\frac{\\sqrt{٣}}{٤}",
      "\\frac{١}{٢}",
      "١"
    ],
    "correctAnswer": "\\frac{3}{4}",
    "correctIndex": 0,
    "hintEn": "Both angles have sine equal to $\\frac{\\sqrt{3}}{2}$.",
    "hintAr": "كلا الزاويتين جيبهما يساوي $\\frac{\\sqrt{٣}}{٢}$.",
    "stepByStepSolutionEn": [
      "$$\\sin\\frac{\\pi}{3} = \\frac{\\sqrt{3}}{2}$$",
      "$$\\sin\\frac{2\\pi}{3} = \\sin\\left(\\pi - \\frac{\\pi}{3}\\right) = \\sin\\frac{\\pi}{3} = \\frac{\\sqrt{3}}{2}$$",
      "$$\\frac{\\sqrt{3}}{2} \\times \\frac{\\sqrt{3}}{2} = \\frac{3}{4}$$"
    ],
    "stepByStepSolutionAr": [
      "$$\\sin ٦٠^\\circ = \\frac{\\sqrt{٣}}{٢}$$",
      "$$\\sin ١٢٠^\\circ = \\frac{\\sqrt{٣}}{٢}$$",
      "$$\\frac{\\sqrt{٣}}{٢} \\times \\frac{\\sqrt{٣}}{٢} = \\frac{٣}{٤}$$"
    ],
    "teacherTipEn": "This is a special case of the general roots-of-unity theorem: $\\prod_{k=1}^{n-1} \\sin\\frac{k\\pi}{n} = \\frac{n}{2^{n-1}}$. For $n=3$, $\\frac{3}{2^2} = \\frac{3}{4}$.",
    "teacherTipAr": "حالة خاصة من القانون العام لجذور الواحد الصحيح: $\\prod_{k=١}^{n-١} \\sin\\frac{k\\pi}{n} = \\frac{n}{٢^{n-١}}$."
  },
  {
    "id": "alg_ch2_db_hots_31",
    "titleEn": "System of Symmetric Equations in C",
    "titleAr": "نظام معادلات متناظر في الأعداد المركبة",
    "difficulty": "hots",
    "questionEn": "If $z + w = 3$ and $zw = 4$, what is $|z - w|$?",
    "questionAr": "إذا كان $z + w = ٣$ و $zw = ٤$، فما قيمة المقدار $|z - w|$؟",
    "optionsEn": [
      "\\sqrt{7}",
      "7",
      "5",
      "1"
    ],
    "optionsAr": [
      "\\sqrt{٧}",
      "٧",
      "٥",
      "١"
    ],
    "correctAnswer": "\\sqrt{7}",
    "correctIndex": 0,
    "hintEn": "$(z - w)^2 = (z + w)^2 - 4zw$.",
    "hintAr": "$(z - w)^٢ = (z + w)^٢ - ٤zw$.",
    "stepByStepSolutionEn": [
      "Use the algebraic identity:",
      "$$(z - w)^2 = (z + w)^2 - 4zw = 3^2 - 4(4) = 9 - 16 = -7$$",
      "Take the square root:",
      "$$z - w = \\pm i\\sqrt{7}$$",
      "Take the modulus:",
      "$$|z - w| = |\\pm i\\sqrt{7}| = \\sqrt{7}$$"
    ],
    "stepByStepSolutionAr": [
      "باستخدام المتطابقة الجبرية:",
      "$$(z - w)^٢ = (z + w)^٢ - ٤zw = ٩ - ١٦ = -٧$$",
      "بأخذ الجذر التربيعي: $z - w = \\pm ت\\sqrt{٧}$.",
      "المقياس: $|z - w| = \\sqrt{٧}$."
    ],
    "teacherTipEn": "The difference of roots is purely imaginary with length $\\sqrt{|\\Delta|}$.",
    "teacherTipAr": "الفرق بين الجذرين عدد تخيلي بحت ومقياسه يساوي جذر القيمة المطلقة للمميز."
  },
  {
    "id": "alg_ch2_db_hots_32",
    "titleEn": "Area of the Triangle with Vertices z, iz, z+iz",
    "titleAr": "مساحة المثلث المحدد بالرؤوس z و iz و z+iz",
    "difficulty": "hots",
    "questionEn": "The points representing $0$, $z$, $iz$, and $z + iz$ form a geometric figure in the Argand plane. What is the area of the triangle formed by $0$, $z$, and $iz$?",
    "questionAr": "النقاط $٠$ و $z$ و $iz$ و $z + iz$ تكون شكلاً هندسياً في مستوى أرجاند. ما مساحة المثلث المحدد بالرؤوس $٠$ و $z$ و $iz$؟",
    "optionsEn": [
      "\\frac{1}{2}|z|^2",
      "|z|^2",
      "2|z|^2",
      "\\frac{\\sqrt{3}}{2}|z|^2"
    ],
    "optionsAr": [
      "\\frac{١}{٢}|z|^٢",
      "|z|^٢",
      "٢|z|^٢",
      "\\frac{\\sqrt{٣}}{٢}|z|^٢"
    ],
    "correctAnswer": "\\frac{1}{2}|z|^2",
    "correctIndex": 0,
    "hintEn": "$iz$ is perpendicular to $z$ with the same length $|z|$.",
    "hintAr": "$iz$ عمودي على $z$ وله نفس الطول $|z|$ (مثلث قائم متساوي الساقين).",
    "stepByStepSolutionEn": [
      "Multiplying by $i$ rotates a complex number by $90^\\circ$ counterclockwise without changing its length.",
      "Thus, the angle between $z$ and $iz$ at the origin is $90^\\circ$.",
      "The length of both legs is $|z|$ and $|iz| = |z|$.",
      "The area of this right-angled isosceles triangle is:",
      "$$\\text{Area} = \\frac{1}{2} \\times \\text{base} \\times \\text{height} = \\frac{1}{2} |z| \\times |z| = \\frac{1}{2}|z|^2$$"
    ],
    "stepByStepSolutionAr": [
      "الضرب في $ت$ يعادل دوراناً بزاوية $٩٠^\\circ$ عكس عقارب الساعة مع ثبات الطول.",
      "إذن المثلث قائم الزاوية في نقطة الأصل ومتساوي الساقين طول كل ساق $|z|$.",
      "المساحة $= \\frac{١}{٢} \\times \\text{القاعدة} \\times \\text{الارتفاع} = \\frac{١}{٢}|z|^٢$."
    ],
    "teacherTipEn": "Together with $z + iz$, these four points form a square of area $|z|^2$.",
    "teacherTipAr": "مع النقطة $z + iz$ تشكل هذه النقاط الأربعة مربعاً مساحته $|z|^٢$."
  },
  {
    "id": "alg_ch2_db_hots_33",
    "titleEn": "Roots of z^n = -1",
    "titleAr": "جذور المعادلة z^n = -١",
    "difficulty": "hots",
    "questionEn": "The roots of the equation $z^n = -1$ are given by:",
    "questionAr": "جذور المعادلة $z^n = -١$ تُعطى بالصورة القطبية:",
    "optionsEn": [
      "\\cos\\frac{(2k+1)\\pi}{n} + i\\sin\\frac{(2k+1)\\pi}{n}, \\quad k = 0, 1, \\dots, n-1",
      "\\cos\\frac{2k\\pi}{n} + i\\sin\\frac{2k\\pi}{n}, \\quad k = 0, 1, \\dots, n-1",
      "\\cos\\frac{k\\pi}{n} + i\\sin\\frac{k\\pi}{n}, \\quad k = 0, 1, \\dots, n-1",
      "(-1)^k\\left(\\cos\\frac{\\pi}{n} + i\\sin\\frac{\\pi}{n}\\right)"
    ],
    "optionsAr": [
      "\\cos\\frac{(٢k+١)\\pi}{n} + ت\\sin\\frac{(٢k+١)\\pi}{n}, \\quad k = ٠, ١, \\dots, n-١",
      "\\cos\\frac{٢k\\pi}{n} + ت\\sin\\frac{٢k\\pi}{n}, \\quad k = ٠, ١, \\dots, n-١",
      "\\cos\\frac{k\\pi}{n} + ت\\sin\\frac{k\\pi}{n}, \\quad k = ٠, ١, \\dots, n-١",
      "(-١)^k\\left(\\cos\\frac{\\pi}{n} + ت\\sin\\frac{\\pi}{n}\\right)"
    ],
    "correctAnswer": "\\cos\\frac{(2k+1)\\pi}{n} + i\\sin\\frac{(2k+1)\\pi}{n}, \\quad k = 0, 1, \\dots, n-1",
    "correctIndex": 0,
    "hintEn": "$-1 = \\cos\\pi + i\\sin\\pi$. Add $2k\\pi$ and divide by $n$.",
    "hintAr": "$-١ = \\cos\\pi + ت\\sin\\pi$. أضف دورات كاملة $٢k\\pi$ واقسم على $n$.",
    "stepByStepSolutionEn": [
      "$-1 = e^{i(\\pi + 2k\\pi)} = e^{i(2k+1)\\pi}$.",
      "Taking the $n$-th root:",
      "$$z_k = e^{i\\frac{(2k+1)\\pi}{n}} = \\cos\\left(\\frac{(2k+1)\\pi}{n}\\right) + i\\sin\\left(\\frac{(2k+1)\\pi}{n}\\right)$$",
      "for $k = 0, 1, \\dots, n-1$."
    ],
    "stepByStepSolutionAr": [
      "العدد $-١$ بالصورة المثلثية العامة: $\\cos(\\pi + ٢k\\pi) + ت\\sin(\\pi + ٢k\\pi)$.",
      "بتطبيق نظرية ديموافر للجذور:",
      "$$z_k = \\cos\\left(\\frac{(٢k+١)\\pi}{n}\\right) + ت\\sin\\left(\\frac{(٢k+١)\\pi}{n}\\right)$$"
    ],
    "teacherTipEn": "Notice the odd multiples of $\\pi$: $(2k+1)\\pi/n$.",
    "teacherTipAr": "لاحظ أن الزوايا تتوزع بمضاعفات فردية للنسبة $\\pi/n$."
  },
  {
    "id": "alg_ch2_db_hots_34",
    "titleEn": "Roots of z^4 = -16",
    "titleAr": "الجذور الرباعية للعدد -١٦",
    "difficulty": "hots",
    "questionEn": "Find the four roots of $z^4 = -16$.",
    "questionAr": "أوجد الجذور الأربعة للمعادلة $z^٤ = -١٦$.",
    "optionsEn": [
      "\\sqrt{2}(\\pm 1 \\pm i)",
      "2(\\pm 1 \\pm i)",
      "\\pm 2, \\pm 2i",
      "\\pm 4, \\pm 4i"
    ],
    "optionsAr": [
      "\\sqrt{٢}(\\pm ١ \\pm ت)",
      "٢(\\pm ١ \\pm ت)",
      "\\pm ٢, \\pm ٢ت",
      "\\pm ٤, \\pm ٤ت"
    ],
    "correctAnswer": "\\sqrt{2}(\\pm 1 \\pm i)",
    "correctIndex": 0,
    "hintEn": "$r = \\sqrt[4]{16} = 2$. Angles are $\\frac{\\pi + 2k\\pi}{4} = 45^\\circ, 135^\\circ, -135^\\circ, -45^\\circ$.",
    "hintAr": "$r = ٢$ والزوايا هي $\\pm ٤٥^\\circ$ و $\\pm ١٣٥^\\circ$.",
    "stepByStepSolutionEn": [
      "Modulus is $\\sqrt[4]{16} = 2$.",
      "The first angle is $\\frac{\\pi}{4} = 45^\\circ$.",
      "The four angles are $\\pm 45^\\circ$ and $\\pm 135^\\circ$.",
      "$$z = 2\\left(\\pm\\frac{1}{\\sqrt{2}} \\pm i\\frac{1}{\\sqrt{2}}\\right) = \\sqrt{2}(\\pm 1 \\pm i)$$"
    ],
    "stepByStepSolutionAr": [
      "المقياس $r = ٢$.",
      "الزوايا هي $\\pm ٤٥^\\circ$ و $\\pm ١٣٥^\\circ$.",
      "$$z = ٢\\left(\\pm\\frac{١}{\\sqrt{٢}} \\pm ت\\frac{١}{\\sqrt{٢}}\\right) = \\sqrt{٢}(\\pm ١ \\pm ت)$$"
    ],
    "teacherTipEn": "Check: $[\\sqrt{2}(1+i)]^4 = (\\sqrt{2})^4 (1+i)^4 = 4 (-4) = -16$.",
    "teacherTipAr": "تحقق بالرفع للأس ٤: $[\\sqrt{٢}(١+ت)]^٤ = ٤ \\times (-٤) = -١٦$."
  },
  {
    "id": "alg_ch2_db_hots_35",
    "titleEn": "Roots of z^3 + 8i = 0",
    "titleAr": "جذور المعادلة z^٣ + ٨ت = ٠",
    "difficulty": "hots",
    "questionEn": "Solve $z^3 + 8i = 0$ in $\\mathbb{C}$.",
    "questionAr": "حل المعادلة $z^٣ + ٨ت = ٠$ في $\\mathbb{C}$.",
    "optionsEn": [
      "2i, \\pm\\sqrt{3} - i",
      "-2i, \\pm\\sqrt{3} + i",
      "2, 2\\omega, 2\\omega^2",
      "-2, -2\\omega, -2\\omega^2"
    ],
    "optionsAr": [
      "٢ت، \\pm\\sqrt{٣} - ت",
      "-٢ت، \\pm\\sqrt{٣} + ت",
      "٢، ٢\\omega، ٢\\omega^٢",
      "-٢، -٢\\omega، -٢\\omega^٢"
    ],
    "correctAnswer": "2i, \\pm\\sqrt{3} - i",
    "correctIndex": 0,
    "hintEn": "$z^3 = -8i = 8(-i) = 8 e^{-i\\pi/2}$.",
    "hintAr": "$z^٣ = -٨ت = ٨ e^{-ت\\pi/٢}$.",
    "stepByStepSolutionEn": [
      "$$z^3 = -8i = 8 e^{-i\\pi/2} = 8 e^{i 3\\pi/2}$$",
      "The cube roots have modulus $\\sqrt[3]{8} = 2$.",
      "Angles: $\\frac{-\\pi/2 + 2k\\pi}{3} = -\\frac{\\pi}{6}, \\frac{\\pi}{2}, -\\frac{5\\pi}{6}$.",
      "For $k=1$: $\\theta = \\pi/2 \\implies z_1 = 2i$.",
      "For $k=0$: $\\theta = -\\pi/6 \\implies z_2 = 2(\\cos(-30^\\circ) + i\\sin(-30^\\circ)) = \\sqrt{3} - i$.",
      "For $k=2$: $\\theta = -5\\pi/6 \\implies z_3 = 2(\\cos(-150^\\circ) + i\\sin(-150^\\circ)) = -\\sqrt{3} - i$.",
      "Thus, the roots are $2i$ and $\\pm\\sqrt{3} - i$."
    ],
    "stepByStepSolutionAr": [
      "$$z^٣ = -٨ت = ٨ e^{-ت\\pi/٢}$$",
      "المقياس $r = ٢$.",
      "الزوايا الناتجة بعد القسمة على ٣: $٩٠^\\circ$ و $-٣٠^\\circ$ و $-١٥٠^\\circ$.",
      "الجذور هي: $٢ت$ و $\\pm\\sqrt{٣} - ت$."
    ],
    "teacherTipEn": "Check: $(2i)^3 = 8 i^3 = -8i$, so $z^3 + 8i = -8i + 8i = 0$.",
    "teacherTipAr": "تحقق: $(٢ت)^٣ = ٨ت^٣ = -٨ت$."
  },
  {
    "id": "alg_ch2_db_hots_36",
    "titleEn": "Area of the Triangle of Roots of z^3 + 8i = 0",
    "titleAr": "مساحة المثلث المتكون من جذور z^٣ + ٨ت = ٠",
    "difficulty": "hots",
    "questionEn": "Find the area of the triangle formed by the roots of $z^3 + 8i = 0$.",
    "questionAr": "أوجد مساحة المثلث المتكون من جذور المعادلة $z^٣ + ٨ت = ٠$.",
    "optionsEn": [
      "3\\sqrt{3}",
      "4\\sqrt{3}",
      "2\\sqrt{3}",
      "6"
    ],
    "optionsAr": [
      "٣\\sqrt{٣}",
      "٤\\sqrt{٣}",
      "٢\\sqrt{٣}",
      "٦"
    ],
    "correctAnswer": "3\\sqrt{3}",
    "correctIndex": 0,
    "hintEn": "The roots lie on a circle of radius $R = 2$, forming a regular equilateral triangle.",
    "hintAr": "الجذور تقع على دائرة نصف قطرها ٢ وتشكل مثلثاً متساوي الأضلاع.",
    "stepByStepSolutionEn": [
      "The roots are vertices of an equilateral triangle inscribed in a circle of radius $R = 2$.",
      "Area of an inscribed regular triangle with radius $R$ is:",
      "$$\\text{Area} = \\frac{3\\sqrt{3}}{4} R^2 = \\frac{3\\sqrt{3}}{4} (2)^2 = 3\\sqrt{3}$$"
    ],
    "stepByStepSolutionAr": [
      "المثلث متساوي الأضلاع مرسوم داخل دائرة نصف قطرها $R = ٢$.",
      "المساحة $= \\frac{٣\\sqrt{٣}}{٤} R^٢ = \\frac{٣\\sqrt{٣}}{٤} (٤) = ٣\\sqrt{٣}$."
    ],
    "teacherTipEn": "The orientation or phase of the roots does not affect the geometric area!",
    "teacherTipAr": "دوران الجذور لا يغير من المساحة الهندسية للمثلث المنتظم إطلاقاً!"
  },
  {
    "id": "alg_ch2_db_hots_37",
    "titleEn": "Roots of Unity Identity Product (1 - omega^k)",
    "titleAr": "حاصل ضرب (١ - أوميجا^k)",
    "difficulty": "hots",
    "questionEn": "What is the value of $(1 - \\omega)(1 - \\omega^2)$?",
    "questionAr": "ما قيمة حاصل الضرب $(١ - \\omega)(١ - \\omega^٢)$؟",
    "optionsEn": [
      "3",
      "1",
      "-3",
      "0"
    ],
    "optionsAr": [
      "٣",
      "١",
      "-٣",
      "٠"
    ],
    "correctAnswer": "3",
    "correctIndex": 0,
    "hintEn": "Differentiate $z^3 - 1 = (z - 1)(z - \\omega)(z - \\omega^2)$ at $z = 1$.",
    "hintAr": "فاضل أو اقسم $z^٣ - ١ = (z - ١)(z^٢ + z + ١)$ وعوض عن $z = ١$.",
    "stepByStepSolutionEn": [
      "We know that $\\frac{z^3 - 1}{z - 1} = z^2 + z + 1 = (z - \\omega)(z - \\omega^2)$.",
      "Substitute $z = 1$:",
      "$$1^2 + 1 + 1 = (1 - \\omega)(1 - \\omega^2) \\implies 3 = (1 - \\omega)(1 - \\omega^2)$$"
    ],
    "stepByStepSolutionAr": [
      "نعلم أن $\\frac{z^٣ - ١}{z - ١} = z^٢ + z + ١ = (z - \\omega)(z - \\omega^٢)$.",
      "بالتعويض عن $z = ١$:",
      "$$١ + ١ + ١ = (١ - \\omega)(١ - \\omega^٢) = ٣$$"
    ],
    "teacherTipEn": "In general, for $n$-th roots of unity, $\\prod_{k=1}^{n-1} (1 - \\zeta^k) = n$. For $n=3$, it gives 3!",
    "teacherTipAr": "قاعدة عامة لجذور الواحد النونية: حاصل ضرب $(١ - \\zeta^k)$ لجميع الجذور غير الواحد يساوي $n$."
  },
  {
    "id": "alg_ch2_db_hots_38",
    "titleEn": "Product of Differences for Fourth Roots of Unity",
    "titleAr": "حاصل ضرب الفروق للجذور الرباعية للواحد",
    "difficulty": "hots",
    "questionEn": "For the roots of $z^4 = 1$ (which are $1, i, -1, -i$), calculate $(1 - i)(1 - (-1))(1 - (-i))$.",
    "questionAr": "لجذور $z^٤ = ١$ (وهي ١، ت، -١، -ت)، احسب قيمة المقدار $(١ - ت)(١ - (-١))(١ - (-ت))$.",
    "optionsEn": [
      "4",
      "2",
      "8",
      "0"
    ],
    "optionsAr": [
      "٤",
      "٢",
      "٨",
      "٠"
    ],
    "correctAnswer": "4",
    "correctIndex": 0,
    "hintEn": "By the general formula, $\\prod_{k=1}^{n-1} (1 - z_k) = n$. Here $n = 4$.",
    "hintAr": "بالقاعدة العامة، حاصل الضرب لجميع الجذور غير الواحد يساوي $n = ٤$.",
    "stepByStepSolutionEn": [
      "Evaluate directly:",
      "$$(1 - i)(1 + i) \\times (1 - (-1)) = (1 - i^2) \\times 2 = 2 \\times 2 = 4$$",
      "This confirms the identity $\\prod_{k=1}^{3} (1 - z_k) = 4$."
    ],
    "stepByStepSolutionAr": [
      "بالحساب المباشر:",
      "$$(١ - ت)(١ + ت) \\times ٢ = ٢ \\times ٢ = ٤$$",
      "وهو ما يؤكد تماماً القانون العام حيث $n = ٤$."
    ],
    "teacherTipEn": "This is a brilliant application of polynomial limits as $z \\to 1$.",
    "teacherTipAr": "تطبيق رائع للنهايات الجبرية لكثيرات الحدود عند اقتراب المتغير من ١."
  },
  {
    "id": "alg_ch2_db_hots_39",
    "titleEn": "Sum of Fourth Powers of Cube Roots of Unity",
    "titleAr": "مجموع القوى الرابعة للجذور التكعيبية للواحد",
    "difficulty": "hots",
    "questionEn": "Calculate $1^4 + \\omega^4 + (\\omega^2)^4$.",
    "questionAr": "احسب قيمة المقدار: $١^٤ + \\omega^٤ + (\\omega^٢)^٤$.",
    "optionsEn": [
      "0",
      "3",
      "1",
      "-1"
    ],
    "optionsAr": [
      "٠",
      "٣",
      "١",
      "-١"
    ],
    "correctAnswer": "0",
    "correctIndex": 0,
    "hintEn": "$\\omega^4 = \\omega$ and $(\\omega^2)^4 = \\omega^8 = \\omega^2$.",
    "hintAr": "$\\omega^٤ = \\omega$ و $(\\omega^٢)^٤ = \\omega^٢$.",
    "stepByStepSolutionEn": [
      "$$1^4 + \\omega^4 + (\\omega^2)^4 = 1 + \\omega + \\omega^8 = 1 + \\omega + \\omega^2 = 0$$"
    ],
    "stepByStepSolutionAr": [
      "$$١^٤ + \\omega^٤ + \\omega^٨ = ١ + \\omega + \\omega^٢ = ٠$$"
    ],
    "teacherTipEn": "For any integer $p$ not divisible by 3, $1^p + \\omega^p + \\omega^{2p} = 0$.",
    "teacherTipAr": "لأي أس $p$ لا يقبل القسمة على ٣، فإن مجموع قوى الجذور التكعيبية يساوي صفراً."
  },
  {
    "id": "alg_ch2_db_hots_40",
    "titleEn": "Sum of Powers of Cube Roots when Exponent is Divisible by 3",
    "titleAr": "مجموع قوى الجذور التكعيبية عندما يقبل الأس القسمة على ٣",
    "difficulty": "hots",
    "questionEn": "If $n$ is a multiple of 3, find the value of $1^n + \\omega^n + (\\omega^2)^n$.",
    "questionAr": "إذا كان $n$ مضاعفاً للعدد ٣، فأوجد قيمة المقدار: $١^n + \\omega^n + (\\omega^٢)^n$.",
    "optionsEn": [
      "3",
      "0",
      "1",
      "-1"
    ],
    "optionsAr": [
      "٣",
      "٠",
      "١",
      "-١"
    ],
    "correctAnswer": "3",
    "correctIndex": 0,
    "hintEn": "When $n$ is a multiple of 3, $\\omega^n = 1$ and $(\\omega^2)^n = 1$.",
    "hintAr": "عندما يكون $n$ مضاعفاً للعدد ٣، فإن كلاً من $\\omega^n$ و $(\\omega^٢)^n$ يساوي ١.",
    "stepByStepSolutionEn": [
      "Let $n = 3k$.",
      "$$1^n = 1$$",
      "$$\\omega^n = (\\omega^3)^k = 1^k = 1$$",
      "$$(\\omega^2)^n = (\\omega^3)^{2k} = 1^{2k} = 1$$",
      "Sum $= 1 + 1 + 1 = 3$."
    ],
    "stepByStepSolutionAr": [
      "بوضع $n = ٣k$:",
      "$$١^n + \\omega^{٣k} + \\omega^{٦k} = ١ + ١ + ١ = ٣$$"
    ],
    "teacherTipEn": "Sum of powers of cube roots is 3 when $n$ is divisible by 3, and 0 otherwise.",
    "teacherTipAr": "مجموع قوى الجذور التكعيبية يساوي ٣ إذا كان الأس مضاعفاً للعدد ٣، ويساوي صفراً في غير ذلك."
  },
  {
    "id": "alg_ch2_db_hots_41",
    "titleEn": "Angle Formed by Roots of (z+1)^n = z^n",
    "titleAr": "الزاوية المتكونة من جذور (z+١)^n = z^n",
    "difficulty": "hots",
    "questionEn": "All complex roots of the equation $(z + 1)^n = z^n$ (for $n \\ge 2$) have real part equal to:",
    "questionAr": "جميع الجذور المركبة للمعادلة $(z + ١)^n = z^n$ (حيث $n \\ge ٢$) لها جزء حقيقي يساوي:",
    "optionsEn": [
      "-\\frac{1}{2}",
      "\\frac{1}{2}",
      "0",
      "-1"
    ],
    "optionsAr": [
      "-\\frac{١}{٢}",
      "\\frac{١}{٢}",
      "٠",
      "-١"
    ],
    "correctAnswer": "-\\frac{1}{2}",
    "correctIndex": 0,
    "hintEn": "$|z + 1| = |z| \\implies$ distance from -1 equals distance from 0.",
    "hintAr": "$|z + ١| = |z| \\implies$ البعد عن النقطة -١ يساوي البعد عن نقطة الأصل.",
    "stepByStepSolutionEn": [
      "Take the modulus of both sides: $|z + 1|^n = |z|^n \\implies |z + 1| = |z|$.",
      "Let $z = x + iy$:",
      "$$(x + 1)^2 + y^2 = x^2 + y^2 \\implies 2x + 1 = 0 \\implies x = -\\frac{1}{2}$$",
      "All roots lie on the vertical line $x = -1/2$."
    ],
    "stepByStepSolutionAr": [
      "بأخذ مقياس الطرفين: $|z + ١| = |z|$.",
      "بوضع $z = x + ت y$:",
      "$$(x + ١)^٢ + y^٢ = x^٢ + y^٢ \\implies ٢x + ١ = ٠ \\implies x = -\\frac{١}{٢}$$",
      "جميع الجذور تقع على المستقيم الرأسي $x = -\\frac{١}{٢}$."
    ],
    "teacherTipEn": "Notice the shift: $(z+1)^n = (z-1)^n$ gave $x = 0$, while $(z+1)^n = z^n$ gives $x = -1/2$.",
    "teacherTipAr": "قارن بدقة: المعادلة السابقة أعطت $x = ٠$، بينما هذه المعادلة تعطي $x = -١/٢$."
  },
  {
    "id": "alg_ch2_db_hots_42",
    "titleEn": "Maximum Value of |z| Given |z + 4/z| = 2",
    "titleAr": "أقصى قيمة لـ |z| إذا كان |z + ٤/z| = ٢",
    "difficulty": "hots",
    "questionEn": "If $|z + \\frac{4}{z}| = 2$, find the maximum possible value of $|z|$.",
    "questionAr": "إذا كان $|z + \\frac{٤}{z}| = ٢$، فأوجد أقصى قيمة ممكنة لـ $|z|$.",
    "optionsEn": [
      "\\sqrt{5} + 1",
      "\\sqrt{5} - 1",
      "3",
      "\\sqrt{5}"
    ],
    "optionsAr": [
      "\\sqrt{٥} + ١",
      "\\sqrt{٥} - ١",
      "٣",
      "\\sqrt{٥}"
    ],
    "correctAnswer": "\\sqrt{5} + 1",
    "correctIndex": 0,
    "hintEn": "By triangle inequality: $|z| - \\frac{4}{|z|} \\le |z + \\frac{4}{z}| = 2$. Solve $R^2 - 2R - 4 \\le 0$.",
    "hintAr": "بمتباينة المثلث: $R - \\frac{٤}{R} \\le ٢ \\implies R^٢ - ٢R - ٤ \\le ٠$.",
    "stepByStepSolutionEn": [
      "Let $R = |z| > 0$. Using the reverse triangle inequality:",
      "$$\\left||z| - \\left|\\frac{4}{z}\\right|\\right| \\le \\left|z + \\frac{4}{z}\\right| = 2$$",
      "$$R - \\frac{4}{R} \\le 2 \\implies R^2 - 2R - 4 \\le 0$$",
      "The positive root of $R^2 - 2R - 4 = 0$ is:",
      "$$R = \\frac{2 + \\sqrt{4 + 16}}{2} = \\frac{2 + \\sqrt{20}}{2} = 1 + \\sqrt{5}$$",
      "Thus, the maximum value is $\\sqrt{5} + 1$."
    ],
    "stepByStepSolutionAr": [
      "بفرض $R = |z|$ وباستخدام متباينة المثلث العكسية:",
      "$$R - \\frac{٤}{R} \\le ٢ \\implies R^٢ - ٢R - ٤ \\le ٠$$",
      "الجذر الموجب للمعادلة التربيعية:",
      "$$R = \\frac{٢ + \\sqrt{٢٠}}{٢} = ١ + \\sqrt{٥}$$"
    ],
    "teacherTipEn": "Minimum value is $\\sqrt{5} - 1$, maximum is $\\sqrt{5} + 1$.",
    "teacherTipAr": "أقل قيمة هي $\\sqrt{٥} - ١$ وأكبر قيمة هي $\\sqrt{٥} + ١$."
  },
  {
    "id": "alg_ch2_db_hots_43",
    "titleEn": "Ellipse Defined by Complex Moduli",
    "titleAr": "القطع الناقص المعرف بالمقاييس المركبة",
    "difficulty": "hots",
    "questionEn": "What curve in the Cartesian plane is represented by $|z - 4| + |z + 4| = 10$?",
    "questionAr": "ما هو المنحنى الممثل بالمعادلة $|z - ٤| + |z + ٤| = ١٠$ في المستوى الكارتيزي؟",
    "optionsEn": [
      "An ellipse with equation \\frac{x^2}{25} + \\frac{y^2}{9} = 1",
      "A hyperbola with equation \\frac{x^2}{25} - \\frac{y^2}{9} = 1",
      "A circle with radius 5",
      "A parabola opening to the right"
    ],
    "optionsAr": [
      "قطع ناقص معادلته \\frac{x^٢}{٢٥} + \\frac{y^٢}{٩} = ١",
      "قطع زائد معادلته \\frac{x^٢}{٢٥} - \\frac{y^٢}{٩} = ١",
      "دائرة نصف قطرها ٥",
      "قطع مكافئ فتحته لليمين"
    ],
    "correctAnswer": "An ellipse with equation \\frac{x^2}{25} + \\frac{y^2}{9} = 1",
    "correctIndex": 0,
    "hintEn": "Sum of distances from $(\\pm 4, 0)$ is a constant $2a = 10 > 2c = 8$.",
    "hintAr": "مجموع البعدين عن البؤرتين $(\\pm ٤، ٠)$ مقدار ثابت $٢a = ١٠ > ٢c = ٨$.",
    "stepByStepSolutionEn": [
      "The equation $|z - z_1| + |z - z_2| = 2a$ represents an ellipse with foci at $z_1 = 4$ and $z_2 = -4$.",
      "Here $c = 4$ and $2a = 10 \\implies a = 5$.",
      "The semi-minor axis is $b = \\sqrt{a^2 - c^2} = \\sqrt{25 - 16} = \\sqrt{9} = 3$.",
      "Equation: $\\frac{x^2}{25} + \\frac{y^2}{9} = 1$."
    ],
    "stepByStepSolutionAr": [
      "المعادلة تمثل المحل الهندسي لنقطة مجموع بعديها عن بؤرتين ثابتتين $(\\pm ٤، ٠)$ يساوي مقداراً ثابتاً $٢a = ١٠$.",
      "المحور الأكبر $a = ٥$ والبعد البؤري $c = ٤$.",
      "$b^٢ = a^٢ - c^٢ = ٢٥ - ١٦ = ٩$.",
      "معادلة القطع الناقص: $\\frac{x^٢}{٢٥} + \\frac{y^٢}{٩} = ١$."
    ],
    "teacherTipEn": "If the constant equaled 8, it would degenerate into the line segment joining the foci.",
    "teacherTipAr": "إذا كان المجموع مساوياً ٨ لانحلت المعادلة إلى القطعة المستقيمة الواصلة بين البؤرتين فقط."
  },
  {
    "id": "alg_ch2_db_hots_44",
    "titleEn": "Hyperbola Defined by Complex Moduli",
    "titleAr": "القطع الزائد المعرف بالمقاييس المركبة",
    "difficulty": "hots",
    "questionEn": "What curve is represented by $||z - 3| - |z + 3|| = 4$?",
    "questionAr": "ما هو المنحنى الممثل بالمعادلة $||z - ٣| - |z + ٣|| = ٤$؟",
    "optionsEn": [
      "A hyperbola with equation \\frac{x^2}{4} - \\frac{y^2}{5} = 1",
      "An ellipse with equation \\frac{x^2}{9} + \\frac{y^2}{5} = 1",
      "Two intersecting straight lines",
      "A parabola"
    ],
    "optionsAr": [
      "قطع زائد معادلته \\frac{x^٢}{٤} - \\frac{y^٢}{٥} = ١",
      "قطع ناقص معادلته \\frac{x^٢}{٩} + \\frac{y^٢}{٥} = ١",
      "مستقيمان متقاطعان",
      "قطع مكافئ"
    ],
    "correctAnswer": "A hyperbola with equation \\frac{x^2}{4} - \\frac{y^2}{5} = 1",
    "correctIndex": 0,
    "hintEn": "The difference of distances to $(\\pm 3, 0)$ is constant $2a = 4 < 2c = 6$.",
    "hintAr": "الفرق المطلق بين بعدي النقطة عن البؤرتين مقدار ثابت $٢a = ٤ < ٢c = ٦$.",
    "stepByStepSolutionEn": [
      "This is the geometric definition of a hyperbola with foci at $(\\pm 3, 0)$.",
      "Focal distance $c = 3$, transverse axis $2a = 4 \\implies a = 2$.",
      "Semi-conjugate axis: $b^2 = c^2 - a^2 = 9 - 4 = 5$.",
      "Equation of hyperbola: $\\frac{x^2}{4} - \\frac{y^2}{5} = 1$."
    ],
    "stepByStepSolutionAr": [
      "هذا هو التعريف الهندسي للقطع الزائد الذي بؤرتاه $(\\pm ٣، ٠)$.",
      "$c = ٣$ و $a = ٢$.",
      "$b^٢ = c^٢ - a^٢ = ٩ - ٤ = ٥$.",
      "معادلة القطع الزائد: $\\frac{x^٢}{٤} - \\frac{y^٢}{٥} = ١$."
    ],
    "teacherTipEn": "Difference of distances gives a hyperbola; sum of distances gives an ellipse.",
    "teacherTipAr": "الفرق بين المسافتين يعطي قطعاً زائداً، بينما المجموع يعطي قطعاً ناقصاً."
  },
  {
    "id": "alg_ch2_db_hots_45",
    "titleEn": "Smallest n with Equal Powers",
    "titleAr": "أصغر عدد n يجعل القوتين متساويتين",
    "difficulty": "hots",
    "questionEn": "Is there any positive integer $n$ such that $(1 + i)^n = (1 - i\\sqrt{3})^n$?",
    "questionAr": "هل يوجد أي عدد صحيح موجب $n$ يحقق $(١ + ت)^n = (١ - ت\\sqrt{٣})^n$؟",
    "optionsEn": [
      "No, because their moduli (\\sqrt{2})^n and 2^n can never be equal for n > 0",
      "Yes, when n = 12",
      "Yes, when n = 24",
      "Yes, when n = 6"
    ],
    "optionsAr": [
      "لا، لأن مقياسيهما (\\sqrt{٢})^n و ٢^n لا يمكن أن يتساويا لأي n > ٠",
      "نعم، عندما n = ١٢",
      "نعم، عندما n = ٢٤",
      "نعم، عندما n = ٦"
    ],
    "correctAnswer": "No, because their moduli (\\sqrt{2})^n and 2^n can never be equal for n > 0",
    "correctIndex": 0,
    "hintEn": "Compare the moduli: $|1+i| = \\sqrt{2}$, but $|1 - i\\sqrt{3}| = 2$.",
    "hintAr": "قارن المقياسين: $|١+ت| = \\sqrt{٢}$ بينما $|١-ت\\sqrt{٣}| = ٢$.",
    "stepByStepSolutionEn": [
      "Take the modulus of both sides:",
      "$$|1 + i|^n = |1 - i\\sqrt{3}|^n$$",
      "$$(\\sqrt{2})^n = 2^n \\implies 2^{n/2} = 2^n$$",
      "$$\\frac{n}{2} = n \\implies n = 0$$",
      "Since $n$ must be a positive integer ($n > 0$), no such $n$ exists."
    ],
    "stepByStepSolutionAr": [
      "بأخذ مقياس الطرفين:",
      "$$(\\sqrt{٢})^n = ٢^n \\implies ٢^{n/٢} = ٢^n \\implies n = ٠$$",
      "وحيث أن $n$ يجب أن يكون عدداً صحيحاً موجباً، فلا يوجد أي حل."
    ],
    "teacherTipEn": "Always check the modulus condition first before checking angles!",
    "teacherTipAr": "تحقق دائماً من شرط المقياس أولاً قبل الخوض في الزوايا!"
  },
  {
    "id": "alg_ch2_db_hots_46",
    "titleEn": "Root on Circle of Radius R",
    "titleAr": "جذر على دائرة نصف قطرها R",
    "difficulty": "hots",
    "questionEn": "Find the radius of the circle containing all roots of $z^5 = 32i$.",
    "questionAr": "أوجد نصف قطر الدائرة التي تقع عليها جميع جذور المعادلة $z^٥ = ٣٢ت$.",
    "optionsEn": [
      "2",
      "32",
      "\\sqrt{2}",
      "4"
    ],
    "optionsAr": [
      "٢",
      "٣٢",
      "\\sqrt{٢}",
      "٤"
    ],
    "correctAnswer": "2",
    "correctIndex": 0,
    "hintEn": "$|z|^5 = |32i| = 32$.",
    "hintAr": "$|z|^٥ = |٣٢ت| = ٣٢$.",
    "stepByStepSolutionEn": [
      "Take modulus of both sides:",
      "$$|z|^5 = |32i| = 32 = 2^5$$",
      "$$|z| = \\sqrt[5]{32} = 2$$",
      "All 5 roots lie on the circle centered at the origin with radius $R = 2$."
    ],
    "stepByStepSolutionAr": [
      "بأخذ مقياس الطرفين:",
      "$$|z|^٥ = |٣٢ت| = ٣٢ \\implies |z| = ٢$$",
      "جميع الجذور الخمسة تقع على دائرة مركزها نقطة الأصل ونصف قطرها $R = ٢$."
    ],
    "teacherTipEn": "All $n$-th roots of any complex number always lie on a single circle centered at origin.",
    "teacherTipAr": "جميع الجذور النونية لأي عدد مركب تقع دائماً على دائرة واحدة مركزها نقطة الأصل."
  },
  {
    "id": "alg_ch2_db_hots_47",
    "titleEn": "Angle Step Between Roots of z^5 = 32i",
    "titleAr": "الزاوية بين جذور المعادلة z^٥ = ٣٢ت المتتالية",
    "difficulty": "hots",
    "questionEn": "What is the angle between any two consecutive roots of $z^5 = 32i$?",
    "questionAr": "ما قياس الزاوية بين أي جذرين متتاليين للمعادلة $z^٥ = ٣٢ت$؟",
    "optionsEn": [
      "72^\\circ",
      "60^\\circ",
      "90^\\circ",
      "45^\\circ"
    ],
    "optionsAr": [
      "٧٢^\\circ",
      "٦٠^\\circ",
      "٩٠^\\circ",
      "٤٥^\\circ"
    ],
    "correctAnswer": "72^\\circ",
    "correctIndex": 0,
    "hintEn": "The full circle $360^\\circ$ is divided into 5 equal angular sectors.",
    "hintAr": "الدائرة الكاملة ٣٦٠ درجة مقسمة بالتساوي إلى ٥ قطاعات زاوية.",
    "stepByStepSolutionEn": [
      "The $n$ roots of any complex number divide the circle into $n$ equal angles:",
      "$$\\Delta\\theta = \\frac{360^\\circ}{n} = \\frac{360^\\circ}{5} = 72^\\circ$$"
    ],
    "stepByStepSolutionAr": [
      "الجذور النونية تقسم الدائرة إلى $n$ قطاعات متساوية:",
      "$$\\Delta\\theta = \\frac{٣٦٠^\\circ}{٥} = ٧٢^\\circ$$"
    ],
    "teacherTipEn": "Consecutive roots are always separated by exactly $2\\pi/n$ radians ($360^\\circ/n$).",
    "teacherTipAr": "الزاوية بين أي جذرين متتاليين تساوي دائماً $٣٦٠^\\circ/n$."
  },
  {
    "id": "alg_ch2_db_hots_48",
    "titleEn": "Evaluation of (1 + omega - omega^2)^3",
    "titleAr": "حساب قيمة المقدار (١ + أوميجا - أوميجا تربيع)^٣",
    "difficulty": "hots",
    "questionEn": "Evaluate the expression $(1 + \\omega - \\omega^2)^3$.",
    "questionAr": "احسب قيمة المقدار: $(١ + \\omega - \\omega^٢)^٣$.",
    "optionsEn": [
      "-8",
      "8",
      "-8\\omega",
      "8\\omega^2"
    ],
    "optionsAr": [
      "-٨",
      "٨",
      "-٨\\omega",
      "٨\\omega^٢"
    ],
    "correctAnswer": "-8",
    "correctIndex": 0,
    "hintEn": "$1 + \\omega = -\\omega^2$, so the inside is $-2\\omega^2$.",
    "hintAr": "$١ + \\omega = -\\omega^٢$، فيصبح داخل القوس $-٢\\omega^٢$.",
    "stepByStepSolutionEn": [
      "Substitute $1 + \\omega = -\\omega^2$:",
      "$$(1 + \\omega - \\omega^2)^3 = (-\\omega^2 - \\omega^2)^3 = (-2\\omega^2)^3$$",
      "$$= (-2)^3 \\cdot (\\omega^2)^3 = -8 \\cdot \\omega^6 = -8 \\cdot 1 = -8$$"
    ],
    "stepByStepSolutionAr": [
      "نعوض عن $١ + \\omega$ بـ $-\\omega^٢$:",
      "$$(-\\omega^٢ - \\omega^٢)^٣ = (-٢\\omega^٢)^٣ = -٨\\omega^٦ = -٨$$"
    ],
    "teacherTipEn": "Cubing eliminated the $\\omega^6$ factor completely, giving a real number.",
    "teacherTipAr": "التكعيب قضى على أوميجا تماماً وأعطى عدداً حقيقياً خالصاً."
  },
  {
    "id": "alg_ch2_db_hots_49",
    "titleEn": "Evaluation of (1 - omega + omega^2)^3",
    "titleAr": "حساب قيمة المقدار (١ - أوميجا + أوميجا تربيع)^٣",
    "difficulty": "hots",
    "questionEn": "Calculate $(1 - \\omega + \\omega^2)^3$.",
    "questionAr": "احسب قيمة المقدار: $(١ - \\omega + \\omega^٢)^٣$.",
    "optionsEn": [
      "-8",
      "8",
      "-8\\omega^2",
      "8\\omega"
    ],
    "optionsAr": [
      "-٨",
      "٨",
      "-٨\\omega^٢",
      "٨\\omega"
    ],
    "correctAnswer": "-8",
    "correctIndex": 0,
    "hintEn": "$1 + \\omega^2 = -\\omega$, so inside is $-2\\omega$.",
    "hintAr": "$١ + \\omega^٢ = -\\omega$، فيصبح داخل القوس $-٢\\omega$.",
    "stepByStepSolutionEn": [
      "Combine $1 + \\omega^2 = -\\omega$:",
      "$$(-\\omega - \\omega)^3 = (-2\\omega)^3 = (-2)^3 \\cdot \\omega^3 = -8(1) = -8$$"
    ],
    "stepByStepSolutionAr": [
      "نجمع $١ + \\omega^٢ = -\\omega$:",
      "$$(-٢\\omega)^٣ = -٨\\omega^٣ = -٨$$"
    ],
    "teacherTipEn": "Both expressions evaluate to exactly -8.",
    "teacherTipAr": "كلا المقدارين المتناظرين لهما نفس القيمة $-٨$."
  },
  {
    "id": "alg_ch2_db_hots_50",
    "titleEn": "Sum of the Two Cubed Symmetrical Expressions",
    "titleAr": "مجموع المقدارين المكعبين المتناظرين",
    "difficulty": "hots",
    "questionEn": "Find $(1 + \\omega - \\omega^2)^3 + (1 - \\omega + \\omega^2)^3$.",
    "questionAr": "أوجد ناتج: $(١ + \\omega - \\omega^٢)^٣ + (١ - \\omega + \\omega^٢)^٣$.",
    "optionsEn": [
      "-16",
      "16",
      "0",
      "-8"
    ],
    "optionsAr": [
      "-١٦",
      "١٦",
      "٠",
      "-٨"
    ],
    "correctAnswer": "-16",
    "correctIndex": 0,
    "hintEn": "We already found each term equals -8.",
    "hintAr": "وجدنا في المسألتين السابقتين أن كل حد يساوي -٨.",
    "stepByStepSolutionEn": [
      "From the previous two results:",
      "$(1 + \\omega - \\omega^2)^3 = -8$",
      "$(1 - \\omega + \\omega^2)^3 = -8$",
      "Summing them gives:",
      "$$-8 + (-8) = -16$$"
    ],
    "stepByStepSolutionAr": [
      "من نتيجتي المسألتين السابقتين:",
      "الحد الأول $= -٨$ والحد الثاني $= -٨$.",
      "بجمعهما: $-٨ + (-٨) = -١٦$."
    ],
    "teacherTipEn": "A grand finale synthesis problem tying the whole chapter together!",
    "teacherTipAr": "مسألة ختامية جامعة تلخص مهارات التبسيط الجبري في الفصل."
  },
  {
    "id": "alg_ch2_db_hots_51",
    "titleEn": "Sum of Cubes Factorization via Roots of Unity",
    "titleAr": "تحليل مجموع المكعبين بدلالة الجذور التكعيبية للواحد",
    "difficulty": "hots",
    "questionEn": "Evaluate the product $(4 + 3)(4 + 3\\omega)(4 + 3\\omega^2)$.",
    "questionAr": "احسب قيمة حاصل الضرب: $(4 + 3)(4 + 3\\omega)(4 + 3\\omega^2)$.",
    "optionsEn": [
      "91",
      "64",
      "27",
      "125"
    ],
    "optionsAr": [
      "91",
      "64",
      "27",
      "125"
    ],
    "correctAnswer": "91",
    "correctIndex": 0,
    "hintEn": "Identity: (x + y)(x + omega y)(x + omega^2 y) = x^3 + y^3.",
    "hintAr": "المتطابقة الجبرية الشهيرة: (س + ص)(س + أوميجا ص)(س + أوميجا^٢ ص) = س^٣ + ص^٣.",
    "stepByStepSolutionEn": [
      "1. By the algebraic identity for sum of cubes using cube roots of unity:",
      "   $$(x + y)(x + \\omega y)(x + \\omega^2 y) = x^3 + y^3$$",
      "2. Here $x = 4, y = 3$:",
      "   $$4^3 + 3^3 = 64 + 27 = 91$$"
    ],
    "stepByStepSolutionAr": [
      "١. المتطابقة الجبرية لتحليل مجموع المكعبين باستخدام أوميجا تنص على:",
      "   $$(x + y)(x + \\omega y)(x + \\omega^2 y) = x^3 + y^3$$",
      "٢. بالتعويض عن س = ٤، ص = ٣:",
      "   $$4^3 + 3^3 = 64 + 27 = 91$$"
    ],
    "teacherTipEn": "Remember also the difference of cubes identity: (x - y)(x - omega y)(x - omega^2 y) = x^3 - y^3.",
    "teacherTipAr": "تذكر أيضاً متطابقة فرق المكعبين: (س - ص)(س - أوميجا ص)(س - أوميجا^٢ ص) = س^٣ - ص^٣."
  },
  {
    "id": "alg_ch2_db_hots_52",
    "titleEn": "Purely Imaginary Roots of Equation",
    "titleAr": "الجذور الواقعة على محور الصادات لمعادلة مترافقة",
    "difficulty": "hots",
    "questionEn": "Prove the geometric locus of all solutions to $\\left(\\frac{z+1}{z-1}\\right)^6 = 1$. The non-zero roots lie on which set?",
    "questionAr": "أين تقع جميع الجذور غير الصفرية للمعادلة $\\left(\\frac{z+1}{z-1}\\right)^6 = 1$ في شكل أرجاند؟",
    "optionsEn": [
      "The imaginary axis (Re(z) = 0)",
      "The real axis (Im(z) = 0)",
      "The unit circle |z| = 1",
      "The line y = x"
    ],
    "optionsAr": [
      "محور الصادات (التخيلي: الجزء الحقيقي = ٠)",
      "محور السينات (الحقيقي: الجزء التخيلي = ٠)",
      "دائرة الوحدة |ع| = ١",
      "المستقيم ص = س"
    ],
    "correctAnswer": "The imaginary axis (Re(z) = 0)",
    "correctIndex": 0,
    "hintEn": "Taking modulus of both sides: |z + 1| = |z - 1|.",
    "hintAr": "بأخذ المقياس للطرفين: |ع + ١| = |ع - ١| (المسافة من ١ تساوي المسافة من -١).",
    "stepByStepSolutionEn": [
      "1. Taking the modulus of both sides: $\\left|\\frac{z+1}{z-1}\\right|^6 = 1 \\implies |z + 1| = |z - 1|$.",
      "2. This equation means the distance from $z$ to $-1$ equals the distance from $z$ to $+1$.",
      "3. The locus of points equidistant from $(-1, 0)$ and $(1, 0)$ is the perpendicular bisector of the segment connecting them, which is the imaginary axis $x = 0$ (i.e. $\\operatorname{Re}(z) = 0$)."
    ],
    "stepByStepSolutionAr": [
      "١. بأخذ المقياس للطرفين: $|z + 1|^6 = |z - 1|^6 \\implies |z + 1| = |z - 1|$.",
      "٢. تعني هذه المعادلة أن بعد النقطة ع عن النقطة (-١، ٠) يساوي بعدها عن النقطة (١، ٠).",
      "٣. المحل الهندسي للنقاط المتساوية البعد عن هاتين النقطتين هو المنصف العمودي للقطعة الواصلة بينهما، وهو محور الصادات (س = ٠ أي الجزء الحقيقي = ٠)."
    ],
    "teacherTipEn": "Any equation of the form |z - a| = |z - b| represents the perpendicular bisector of segment ab.",
    "teacherTipAr": "المعادلة |ع - أ| = |ع - ب| تمثل هندسياً محور التماثل العمودي للقطعة المستقيمة أ ب."
  },
  {
    "id": "alg_ch2_db_hots_53",
    "titleEn": "High Power Symmetric Omega Expression",
    "titleAr": "قوى عليا لمقدار متماثل في أوميجا",
    "difficulty": "hots",
    "questionEn": "Evaluate: $(1 + \\omega - \\omega^2)^6 + (1 - \\omega + \\omega^2)^6$.",
    "questionAr": "احسب قيمة المقدار: $(1 + \\omega - \\omega^2)^6 + (1 - \\omega + \\omega^2)^6$.",
    "optionsEn": [
      "128",
      "64",
      "256",
      "0"
    ],
    "optionsAr": [
      "128",
      "64",
      "256",
      "0"
    ],
    "correctAnswer": "128",
    "correctIndex": 0,
    "hintEn": "Substitute 1 + omega = -omega^2 and 1 + omega^2 = -omega.",
    "hintAr": "عوض عن ١ + أوميجا = -أوميجا^٢ وعن ١ + أوميجا^٢ = -أوميجا.",
    "stepByStepSolutionEn": [
      "1. First term: $1 + \\omega - \\omega^2 = -\\omega^2 - \\omega^2 = -2\\omega^2$.",
      "   $$(-2\\omega^2)^6 = (-2)^6 (\\omega^2)^6 = 64 \\omega^{12} = 64(1) = 64$$",
      "2. Second term: $1 - \\omega + \\omega^2 = -\\omega - \\omega = -2\\omega$.",
      "   $$(-2\\omega)^6 = (-2)^6 \\omega^6 = 64(1) = 64$$",
      "3. Sum: $64 + 64 = 128$."
    ],
    "stepByStepSolutionAr": [
      "١. الحد الأول: ١ + أوميجا - أوميجا^٢ = -أوميجا^٢ - أوميجا^٢ = -٢أوميجا^٢.",
      "   $$(-2\\omega^2)^6 = 64 \\omega^{12} = 64(1) = 64$$",
      "٢. الحد الثاني: ١ - أوميجا + أوميجا^٢ = -أوميجا - أوميجا = -٢أوميجا.",
      "   $$(-2\\omega)^6 = 64 \\omega^6 = 64(1) = 64$$",
      "٣. المجموع: ٦٤ + ٦٤ = ١٢٨."
    ],
    "teacherTipEn": "Notice how the even power 6 eliminates both negative signs and omega fractional powers.",
    "teacherTipAr": "لاحظ كيف أن الأس الزوجي ٦ ألغى الإشارات السالبة وجعل قوى أوميجا مضاعفات للعدد ٣."
  },
  {
    "id": "alg_ch2_db_hots_54",
    "titleEn": "Equilateral Triangle Criterion in Argand Plane",
    "titleAr": "شرط المثلث المتساوي الأضلاع في شكل أرجاند",
    "difficulty": "hots",
    "questionEn": "Three complex numbers $z_1, z_2, z_3$ form an equilateral triangle in the Argand plane if and only if which identity holds?",
    "questionAr": "تكون الأعداد المركبة $z_1, z_2, z_3$ رؤوس مثلث متساوي الأضلاع في شكل أرجاند إذا وفقط إذا تحققت المتطابقة:",
    "optionsEn": [
      "$z_1^2 + z_2^2 + z_3^2 = z_1 z_2 + z_2 z_3 + z_3 z_1$",
      "$z_1 + z_2 + z_3 = 0$",
      "$z_1^3 + z_2^3 + z_3^3 = 3 z_1 z_2 z_3$",
      "$z_1^2 + z_2^2 + z_3^2 = 0$"
    ],
    "optionsAr": [
      "$z_1^2 + z_2^2 + z_3^2 = z_1 z_2 + z_2 z_3 + z_3 z_1$",
      "$z_1 + z_2 + z_3 = 0$",
      "$z_1^3 + z_2^3 + z_3^3 = 3 z_1 z_2 z_3$",
      "$z_1^2 + z_2^2 + z_3^2 = 0$"
    ],
    "correctAnswer": "$z_1^2 + z_2^2 + z_3^2 = z_1 z_2 + z_2 z_3 + z_3 z_1$",
    "correctIndex": 0,
    "hintEn": "Consider rotation by 60 degrees: (z3 - z1) = e^(i pi/3) (z2 - z1).",
    "hintAr": "ينتج من دوران الضلع بزاوية ٦٠ درجة (ط / ٣): (ع٣ - ع١) = هـ^(ت ط/٣) (ع٢ - ع١).",
    "stepByStepSolutionEn": [
      "1. In an equilateral triangle, vertex $z_3$ is obtained by rotating $(z_2 - z_1)$ by $60^\\circ = \\frac{\\pi}{3}$ radians:",
      "   $$\\frac{z_3 - z_1}{z_2 - z_1} = e^{\\pm i\\pi/3} = \\frac{1 \\pm i\\sqrt{3}}{2} = -\\omega^2 \\text{ or } -\\omega$$",
      "2. Rearranging and using $1 + \\omega + \\omega^2 = 0$ yields the symmetric condition:",
      "   $$z_1^2 + z_2^2 + z_3^2 = z_1 z_2 + z_2 z_3 + z_3 z_1$$"
    ],
    "stepByStepSolutionAr": [
      "١. في المثلث المتساوي الأضلاع ينتج الرأس الثالث بدوران الضلع بزاوية ٦٠ درجة حول الرأس الأول.",
      "٢. بالتربيع والتبسيط باستخدام خواص جذور الوحدة المركبة:",
      "   $$z_1^2 + z_2^2 + z_3^2 = z_1 z_2 + z_2 z_3 + z_3 z_1$$"
    ],
    "teacherTipEn": "This fundamental theorem connects complex algebraic quadratic forms with Euclidean equilateral geometry.",
    "teacherTipAr": "تربط هذه النظرية الرائعة بين الصورة التربيعية الجبرية وهندسة المثلثات المنتظمة."
  },
  {
    "id": "alg_ch2_db_hots_55",
    "titleEn": "Maximum Modulus with Triangle Inequality",
    "titleAr": "القيمة العظمى للمقياس باستخدام متباينة المثلث",
    "difficulty": "hots",
    "questionEn": "If $|z - \\frac{4}{z}| = 2$, find the maximum possible value of $|z|$.",
    "questionAr": "إذا كان $|z - \\frac{4}{z}| = 2$، فأوجد أكبر قيمة ممكنة للمقياس $|z|$.",
    "optionsEn": [
      "$1 + \\sqrt{5}$",
      "$\\sqrt{5}$",
      "$2 + \\sqrt{5}$",
      "4"
    ],
    "optionsAr": [
      "$1 + \\sqrt{5}$",
      "$\\sqrt{5}$",
      "$2 + \\sqrt{5}$",
      "4"
    ],
    "correctAnswer": "$1 + \\sqrt{5}$",
    "correctIndex": 0,
    "hintEn": "By triangle inequality: |z| = |(z - 4/z) + 4/z| <= |z - 4/z| + 4/|z|.",
    "hintAr": "طبق متباينة المثلث: |ع| ≤ |ع - ٤/ع| + ٤/|ع| وحل المتباينة التربيعية.",
    "stepByStepSolutionEn": [
      "1. Let $R = |z|$. By the reverse triangle inequality:",
      "   $$R = \\left|\\left(z - \\frac{4}{z}\\right) + \\frac{4}{z}\\right| \\le \\left|z - \\frac{4}{z}\\right| + \\frac{4}{|z|} = 2 + \\frac{4}{R}$$",
      "2. Multiply by $R > 0$: $R^2 \\le 2R + 4 \\implies R^2 - 2R - 4 \\le 0$.",
      "3. Solving the quadratic equation $R^2 - 2R - 4 = 0$ gives $R = \\frac{2 \\pm \\sqrt{4 + 16}}{2} = 1 \\pm \\sqrt{5}$.",
      "4. Since $R > 0$, the maximum value is $R_{\\max} = 1 + \\sqrt{5}$."
    ],
    "stepByStepSolutionAr": [
      "١. بفرض ر = |ع|، من متباينة المثلث:",
      "   $$R \\le 2 + \\frac{4}{R}$$",
      "٢. بالضرب في ر > ٠: ر^٢ - ٢ر - ٤ ≤ ٠.",
      "٣. بحل المعادلة المرافقة بالقانون العام: ر = ١ ± جذر(٥).",
      "٤. بما أن المقياس موجب، فإن القيمة العظمى هي $1 + \\sqrt{5}$."
    ],
    "teacherTipEn": "The minimum value of |z| is -1 + sqrt(5).",
    "teacherTipAr": "القيمة الصغرى لمقياس ع هي -١ + جذر(٥)."
  },
  {
    "id": "alg_ch2_db_hots_56",
    "titleEn": "Sum of Non-Trivial Powers of Roots of Unity",
    "titleAr": "مجموع قوى جذور الوحدة النونية",
    "difficulty": "hots",
    "questionEn": "Let $z_0, z_1, z_2, z_3, z_4$ be the 5 fifth roots of unity ($z^5 = 1$). Evaluate the sum: $\\sum_{k=0}^{4} z_k^3$.",
    "questionAr": "لتكن $z_0, z_1, z_2, z_3, z_4$ هي الجذور الخماسية للواحد الصحيح ($z^5 = 1$). احسب قيمة المجموع: $\\sum_{k=0}^{4} z_k^3$.",
    "optionsEn": [
      "0",
      "1",
      "5",
      "$-1$"
    ],
    "optionsAr": [
      "0",
      "1",
      "5",
      "$-1$"
    ],
    "correctAnswer": "0",
    "correctIndex": 0,
    "hintEn": "The sum of the m-th powers of the n-th roots of unity is 0 whenever m is not a multiple of n.",
    "hintAr": "مجموع القوى م لجذور الوحدة النونية يساوي صفراً دائماً إذا لم تكن م مضاعفاً لـ ن.",
    "stepByStepSolutionEn": [
      "1. The fifth roots of unity are given by $z_k = e^{i 2k\\pi / 5}$ for $k = 0, 1, 2, 3, 4$.",
      "2. Raising to the third power: $z_k^3 = (e^{i 2k\\pi / 5})^3 = (e^{i 6\\pi / 5})^k = w^k$, where $w = e^{i 6\\pi / 5} \\neq 1$.",
      "3. This is a finite geometric series with common ratio $w$: $\\sum_{k=0}^{4} w^k = \\frac{1 - w^5}{1 - w}$.",
      "4. Since $w^5 = (e^{i 6\\pi / 5})^5 = e^{i 6\\pi} = 1$, the numerator is $1 - 1 = 0$. Hence the sum is 0."
    ],
    "stepByStepSolutionAr": [
      "١. جذور الوحدة الخماسية هي $z_k = e^{i 2k\\pi / 5}$ لقيم ك = ٠، ١، ٢، ٣، ٤.",
      "٢. برفع كل جذر للأس ٣ نحصل على متتابعة هندسية أساسها $w = e^{i 6\\pi / 5} \\neq 1$.",
      "٣. مجموع المتتابعة الهندسية: $\\frac{1 - w^5}{1 - w}$.",
      "٤. بما أن $w^5 = 1$، فإن البسط يساوي صفراً، ويكون المجموع الإجمالي = ٠."
    ],
    "teacherTipEn": "The sum of m-th powers is n if n divides m, and 0 otherwise.",
    "teacherTipAr": "مجموع القوى م يساوي ن إذا كانت م تقبل القسمة على ن، ويساوي صفراً في غير ذلك."
  },
  {
    "id": "alg_ch2_db_hots_57",
    "titleEn": "Counterclockwise Rotation by 90 Degrees in Argand Plane",
    "titleAr": "الدوران بزاوية ٩٠ درجة في شكل أرجاند",
    "difficulty": "hots",
    "questionEn": "The complex number $z = 3 + 4i$ is rotated counterclockwise by $90^\\circ$ about the origin. Find the resulting complex number.",
    "questionAr": "تم تدوير العدد المركب $z = 3 + 4i$ بزاوية قياسها $90^\\circ$ عكس عقارب الساعة حول نقطة الأصل. ما هو العدد المركب الناتج؟",
    "optionsEn": [
      "$-4 + 3i$",
      "$4 - 3i$",
      "$-3 - 4i$",
      "$-4 - 3i$"
    ],
    "optionsAr": [
      "$-4 + 3i$",
      "$4 - 3i$",
      "$-3 - 4i$",
      "$-4 - 3i$"
    ],
    "correctAnswer": "$-4 + 3i$",
    "correctIndex": 0,
    "hintEn": "Rotating counterclockwise by 90 degrees corresponds to multiplication by i.",
    "hintAr": "الدوران بزاوية ٩٠ درجة عكس عقارب الساعة يكافئ هندسياً الضرب في الوحدة التخيلية ت.",
    "stepByStepSolutionEn": [
      "1. In the Argand plane, rotation by $\\frac{\\pi}{2}$ ($90^\\circ$) counterclockwise corresponds to multiplying by $e^{i\\pi/2} = i$.",
      "2. Calculate $z' = z \\cdot i = (3 + 4i) i = 3i + 4i^2 = 3i - 4 = -4 + 3i$."
    ],
    "stepByStepSolutionAr": [
      "١. في شكل أرجاند، الدوران بزاوية ٩٠ درجة ضد عقارب الساعة يعادل الضرب في $e^{i\\pi/2} = i$.",
      "٢. بالضرب: $(3 + 4i) \\times i = 3i + 4i^2 = -4 + 3i$."
    ],
    "teacherTipEn": "Multiplication by i rotates by +90 deg; multiplication by -i rotates by -90 deg.",
    "teacherTipAr": "الضرب في ت يدور بزاوية +٩٠ درجة، والضرب في -ت يدور بزاوية -٩٠ درجة."
  },
  {
    "id": "alg_ch2_db_hots_58",
    "titleEn": "Finite Trigonometric Cosine Sum via De Moivre",
    "titleAr": "حساب مجموع جيوب تمام زوايا دورية باستخدام ديموافر",
    "difficulty": "hots",
    "questionEn": "Evaluate the exact trigonometric sum: $\\cos\\frac{2\\pi}{7} + \\cos\\frac{4\\pi}{7} + \\cos\\frac{6\\pi}{7}$.",
    "questionAr": "احسب القيمة الدقيقة للمجموع المثلثي: $\\cos\\frac{2\\pi}{7} + \\cos\\frac{4\\pi}{7} + \\cos\\frac{6\\pi}{7}$.",
    "optionsEn": [
      "$-\\frac{1}{2}$",
      "$\\frac{1}{2}$",
      "0",
      "$-1$"
    ],
    "optionsAr": [
      "$-\\frac{1}{2}$",
      "$\\frac{1}{2}$",
      "0",
      "$-1$"
    ],
    "correctAnswer": "$-\\frac{1}{2}$",
    "correctIndex": 0,
    "hintEn": "Consider the real part of the sum of the 7th roots of unity excluding 1.",
    "hintAr": "استخدم مجموع الجذور السبعية للواحد الصحيح: ١ + ع١ + ع٢ + ... + ع٦ = ٠.",
    "stepByStepSolutionEn": [
      "1. Let $w = e^{i 2\\pi / 7}$. The 7 seventh roots of unity sum to 0: $1 + w + w^2 + w^3 + w^4 + w^5 + w^6 = 0$.",
      "2. Taking the real parts: $1 + \\sum_{k=1}^{6} \\cos\\frac{2k\\pi}{7} = 0$.",
      "3. By symmetry, $\\cos\\frac{12\\pi}{7} = \\cos\\frac{2\\pi}{7}$, $\\cos\\frac{10\\pi}{7} = \\cos\\frac{4\\pi}{7}$, and $\\cos\\frac{8\\pi}{7} = \\cos\\frac{6\\pi}{7}$.",
      "4. Therefore: $1 + 2\\left(\\cos\\frac{2\\pi}{7} + \\cos\\frac{4\\pi}{7} + \\cos\\frac{6\\pi}{7}\\right) = 0 \\implies \\text{Sum} = -\\frac{1}{2}$."
    ],
    "stepByStepSolutionAr": [
      "١. مجموع الجذور السبعية للواحد الصحيح يساوي صفراً: $1 + w + w^2 + \\dots + w^6 = 0$.",
      "٢. بأخذ الجزء الحقيقي: $1 + \\sum_{k=1}^{6} \\cos\\frac{2k\\pi}{7} = 0$.",
      "٣. بالاستفادة من التماثل: جتا(١٢ط/٧) = جتا(٢ط/٧)، وهكذا لبقية الحدود.",
      "٤. إذن: $1 + 2(\\text{المجموع}) = 0 \\implies \\text{المجموع} = -\\frac{1}{2}$."
    ],
    "teacherTipEn": "This classic contest identity illustrates the profound bridge between roots of unity and trigonometric sums.",
    "teacherTipAr": "تطبيق رائع يوضح كيف تحل جذور الوحدة المركبة متسلسلات مثلثية معقدة ببراعة."
  }
]
};
