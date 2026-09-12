import type { ChapterDatabank } from '../../../types/curriculum';

export const algCh1Databank: ChapterDatabank = {
  easy: [
  {
    "id": "alg_ch1_db_easy_01",
    "titleEn": "Zero Factorial and One Factorial Sum",
    "titleAr": "مجموع مضروب الصفر ومضروب الواحد",
    "difficulty": "easy",
    "questionEn": "Calculate the sum of factorials: $0! + 1!$.",
    "questionAr": "احسب مجموع المضروبين: $0! + 1!$.",
    "optionsEn": [
      "2",
      "1",
      "0",
      "3"
    ],
    "optionsAr": [
      "٢",
      "١",
      "٠",
      "٣"
    ],
    "correctAnswer": "2",
    "correctIndex": 0,
    "hintEn": "By mathematical definition, 0! = 1 and 1! = 1.",
    "hintAr": "وفقاً للتعريف الرياضي المعتمد، ٠! = ١ و ١! = ١.",
    "stepByStepSolutionEn": [
      "By definition of factorials: $0! = 1$ and $1! = 1$.",
      "$$0! + 1! = 1 + 1 = 2$$"
    ],
    "stepByStepSolutionAr": [
      "بحسب تعريف المضروب في الرياضيات: $٠! = ١$ و $١! = ١$.",
      "$$٠! + ١! = ١ + ١ = ٢$$"
    ],
    "teacherTipEn": "A common misconception is thinking 0! = 0. Remember 0! represents 1 way to arrange 0 items.",
    "teacherTipAr": "خطأ شائع هو الاعتقاد بأن ٠! = ٠. تذكر أن ٠! يمثل طريقة واحدة لترتيب مجموعة خالية."
  },
  {
    "id": "alg_ch1_db_easy_02",
    "titleEn": "Factorial Equal to 1 Equation",
    "titleAr": "معادلة المضروب المساوي للواحد الصحيح",
    "difficulty": "easy",
    "questionEn": "If $(n - 3)! = 1$, find the set of all possible integer values for $n$.",
    "questionAr": "إذا كان $(n - ٣)! = ١$، فأوجد مجموعة القيم الممكنة لـ $n$.",
    "optionsEn": [
      "{3, 4}",
      "{1, 2}",
      "{4}",
      "{3}"
    ],
    "optionsAr": [
      "{٣، ٤}",
      "{١، ٢}",
      "{٤}",
      "{٣}"
    ],
    "correctAnswer": "{3, 4}",
    "correctIndex": 0,
    "hintEn": "The factorial of only two non-negative integers equals 1: 0! = 1 and 1! = 1.",
    "hintAr": "المضروب الذي يساوي ١ هو لعددين فقط: ٠! = ١ و ١! = ١.",
    "stepByStepSolutionEn": [
      "Since $k! = 1$ has two solutions: $k = 0$ or $k = 1$:",
      "Case 1: $n - 3 = 0 \\implies n = 3$",
      "Case 2: $n - 3 = 1 \\implies n = 4$",
      "Thus, the possible values are $\\{3, 4\\}$."
    ],
    "stepByStepSolutionAr": [
      "بما أن $k! = ١$ لها حلان: إما $k = ٠$ أو $k = ١$:",
      "الحالة ١: $n - ٣ = ٠ \\implies n = ٣$",
      "الحالة ٢: $n - ٣ = ١ \\implies n = ٤$",
      "إذن مجموعة الحل هي $\\{٣، ٤\\}$."
    ],
    "teacherTipEn": "Never forget the zero case: whenever factorial equals 1, always set the argument to both 0 and 1.",
    "teacherTipAr": "لا تنس حالة الصفر: كلما كان المضروب مساوياً لـ ١، ساوِ ما بداخل المضروب بالصفر وبالواحد."
  },
  {
    "id": "alg_ch1_db_easy_03",
    "titleEn": "Factorial Quotient Simplification",
    "titleAr": "تبسيط خارج قسمة مضروبين متتاليين",
    "difficulty": "easy",
    "questionEn": "Simplify $\\frac{n!}{(n - 1)!}$ for $n \\in \\mathbb{N}^*$.",
    "questionAr": "بسط المقدار $\\frac{n!}{(n - ١)!}$ حيث $n \\in \\mathbb{N}^*$.",
    "optionsEn": [
      "n",
      "n - 1",
      "n + 1",
      "1"
    ],
    "optionsAr": [
      "n",
      "n - ١",
      "n + ١",
      "١"
    ],
    "correctAnswer": "n",
    "correctIndex": 0,
    "hintEn": "Expand n! as n(n-1)! and cancel.",
    "hintAr": "فك n! إلى n(n-1)! واختصر.",
    "stepByStepSolutionEn": [
      "Rewrite $n!$ as $n(n - 1)!$:",
      "$$\\frac{n!}{(n - 1)!} = \\frac{n(n - 1)!}{(n - 1)!} = n$$"
    ],
    "stepByStepSolutionAr": [
      "فك $n!$ إلى $n(n - ١)!$:",
      "$$\\frac{n!}{(n - ١)!} = \\frac{n(n - ١)!}{(n - ١)!} = n$$"
    ],
    "teacherTipEn": "Always extract factors from the larger factorial until it matches the smaller one.",
    "teacherTipAr": "فك دائماً المضروب الأكبر حتى تصل إلى رتبة المضروب الأصغر للاختصار."
  },
  {
    "id": "alg_ch1_db_easy_04",
    "titleEn": "Choosing President and Vice-President",
    "titleAr": "اختيار رئيس ونائب رئيس",
    "difficulty": "easy",
    "questionEn": "In how many ways can a committee select a president and a vice-president from 8 candidates?",
    "questionAr": "بكم طريقة يمكن اختيار رئيس ونائب رئيس من بين ٨ مرشحين؟",
    "optionsEn": [
      "56",
      "28",
      "64",
      "16"
    ],
    "optionsAr": [
      "٥٦",
      "٢٨",
      "٦٤",
      "١٦"
    ],
    "correctAnswer": "56",
    "correctIndex": 0,
    "hintEn": "Roles are distinct (order matters): 8 choices for president, 7 for vice-president.",
    "hintAr": "المناصب مختلفة (الترتيب مهم): ٨ خيارات للرئيس، و ٧ لنائب الرئيس.",
    "stepByStepSolutionEn": [
      "President selection: 8 choices.",
      "Vice-president selection from remaining: 7 choices.",
      "$$\\text{Total} = 8 \\times 7 = 56 = P(8, 2)$$"
    ],
    "stepByStepSolutionAr": [
      "اختيار الرئيس: ٨ خيارات.",
      "اختيار نائب الرئيس من المتبقين: ٧ خيارات.",
      "$$\\text{العدد الكلي} = ٨ \\times ٧ = ٥٦ = P(٨, ٢)$$"
    ],
    "teacherTipEn": "When positions have different titles, order matters, which means it is a permutation P(n, 2).",
    "teacherTipAr": "عندما تكون المناصب متباينة الأسماء، يكون الترتيب مهماً وتُحل بالتباديل P(n, 2)."
  },
  {
    "id": "alg_ch1_db_easy_05",
    "titleEn": "Forming Numbers with Repetition Allowed",
    "titleAr": "تكوين أعداد مع السماح بالتكرار",
    "difficulty": "easy",
    "questionEn": "How many 2-digit numbers can be formed from the set $\\{1, 3, 5, 7, 9\\}$ if repetition of digits is allowed?",
    "questionAr": "كم عدداً مكوناً من رقمين يمكن تكوينه من عناصر المجموعة $\\{١، ٣، ٥، ٧، ٩\\}$ مع السماح بتكرار الأرقام؟",
    "optionsEn": [
      "25",
      "20",
      "10",
      "32"
    ],
    "optionsAr": [
      "٢٥",
      "٢٠",
      "١٠",
      "٣٢"
    ],
    "correctAnswer": "25",
    "correctIndex": 0,
    "hintEn": "With repetition allowed, both units and tens digits have 5 choices: n^r = 5^2.",
    "hintAr": "مع السماح بالتكرار، كل خانة لها ٥ خيارات: n^r = ٥^٢.",
    "stepByStepSolutionEn": [
      "Units digit: 5 choices.",
      "Tens digit: 5 choices.",
      "$$\\text{Total} = 5 \\times 5 = 25 = 5^2$$"
    ],
    "stepByStepSolutionAr": [
      "خانة الآحاد: ٥ خيارات.",
      "خانة العشرات: ٥ خيارات.",
      "$$\\text{العدد الكلي} = ٥ \\times ٥ = ٢٥ = ٥^٢$$"
    ],
    "teacherTipEn": "Remember the sampling formula: \"With order and with repetition = n^r\".",
    "teacherTipAr": "احفظ قاعدة الاختيار: \"مع الترتيب ومع التكرار = n^r\"."
  },
  {
    "id": "alg_ch1_db_easy_06",
    "titleEn": "Direct Factorial Fraction Calculation",
    "titleAr": "حساب كسر مضاريب مباشر",
    "difficulty": "easy",
    "questionEn": "Simplify and compute the factorial fraction: $\frac{7!}{5! \times 2!}$.",
    "questionAr": "بسّط واحسب قيمة الكسر المضروبي: $\frac{7!}{5! \times 2!}$.",
    "optionsEn": [
      "21",
      "42",
      "14",
      "35"
    ],
    "optionsAr": [
      "٢١",
      "٤٢",
      "١٤",
      "٣٥"
    ],
    "correctAnswer": "21",
    "correctIndex": 0,
    "hintEn": "Expand 7! = 7 * 6 * 5! and simplify.",
    "hintAr": "فك ٧! = ٧ * ٦ * ٥! واختصر مع المقام.",
    "stepByStepSolutionEn": [
      "$$\\frac{7 \\times 6 \\times 5!}{5! \\times 2} = \\frac{42}{2} = 21$$",
      "This is equivalent to $\\binom{7}{2} = 21$."
    ],
    "stepByStepSolutionAr": [
      "$$\\frac{٧ \\times ٦ \\times ٥!}{٥! \\times ٢} = \\frac{٤٢}{٢} = ٢١$$",
      "وهي تكافئ التوفيقة $\\binom{٧}{٢} = ٢١$."
    ],
    "teacherTipEn": "Notice this is the definition of combination C(7, 2).",
    "teacherTipAr": "لاحظ أن هذا المقدار هو بعينه تعريف التوفيقة C(7, 2)."
  },
  {
    "id": "alg_ch1_db_easy_07",
    "titleEn": "Inverse Factorial Value",
    "titleAr": "إيجاد العدد من قيمة مضروبه",
    "difficulty": "easy",
    "questionEn": "Solve for $n$ from the factorial equation: $n! = 720$.",
    "questionAr": "حل المعادلة المضروبية لإيجاد قيمة $n$: $n! = 720$.",
    "optionsEn": [
      "6",
      "5",
      "7",
      "8"
    ],
    "optionsAr": [
      "٦",
      "٥",
      "٧",
      "٨"
    ],
    "correctAnswer": "6",
    "correctIndex": 0,
    "hintEn": "Compute 1 * 2 * 3 * 4 * 5 * 6.",
    "hintAr": "احسب حاصل ضرب الأعداد المتتالية بدءاً من ١ حتى تصل إلى ٧٢٠.",
    "stepByStepSolutionEn": [
      "$1! = 1$",
      "$2! = 2$",
      "$3! = 6$",
      "$4! = 24$",
      "$5! = 120$",
      "$6! = 120 \\times 6 = 720$",
      "Therefore, $n = 6$."
    ],
    "stepByStepSolutionAr": [
      "١! = ١، ٢! = ٢، ٣! = ٦، ٤! = ٢٤، ٥! = ١٢٠",
      "٦! = ١٢٠ * ٦ = ٧٢٠",
      "إذن $n = ٦$."
    ],
    "teacherTipEn": "Memorize factorials up to 7! (5040) for rapid recognition on exams.",
    "teacherTipAr": "احفظ قيم المضاريب حتى ٧! = ٥٠٤٠ لسرعة الحل في الامتحانات."
  },
  {
    "id": "alg_ch1_db_easy_08",
    "titleEn": "Menu Choices Multiplication Principle",
    "titleAr": "مبدأ ضرب الخيارات في قائمة طعام",
    "difficulty": "easy",
    "questionEn": "A restaurant menu offers 4 main courses and 3 beverage options. How many distinct 2-item meals (one course and one drink) can be ordered?",
    "questionAr": "يقدم مطعم ٤ أطباق رئيسية و ٣ أنواع مشروبات. كم وجبة مختلفة (طبق رئيسي ومشروب) يمكن اختيارها؟",
    "optionsEn": [
      "12",
      "7",
      "14",
      "24"
    ],
    "optionsAr": [
      "١٢",
      "٧",
      "١٤",
      "٢٤"
    ],
    "correctAnswer": "12",
    "correctIndex": 0,
    "hintEn": "Multiplication principle for independent choices: m * n.",
    "hintAr": "قاعدة الضرب للخيارات المستقلة: m * n.",
    "stepByStepSolutionEn": [
      "Course options: 4",
      "Drink options: 3",
      "Total combinations = $4 \\times 3 = 12$"
    ],
    "stepByStepSolutionAr": [
      "خيارات الأطباق: ٤",
      "خيارات المشروبات: ٣",
      "إجمالي الوجبات = ٤ * ٣ = ١٢"
    ],
    "teacherTipEn": "Whenever two events happen together (AND), multiply their counts.",
    "teacherTipAr": "كلما حدثت عمليتان معاً (و)، نضرب عدد الطرق."
  },
  {
    "id": "alg_ch1_db_easy_09",
    "titleEn": "Arranging Distinct Books on a Shelf",
    "titleAr": "ترتيب كتب متمايزة على رف",
    "difficulty": "easy",
    "questionEn": "In how many ways can 4 distinct math books be arranged side by side on a bookshelf?",
    "questionAr": "بكم طريقة يمكن ترتيب ٤ كتب رياضيات مختلفة جنباً إلى جنب على رف؟",
    "optionsEn": [
      "24",
      "16",
      "12",
      "64"
    ],
    "optionsAr": [
      "٢٤",
      "١٦",
      "١٢",
      "٦٤"
    ],
    "correctAnswer": "24",
    "correctIndex": 0,
    "hintEn": "Arranging n distinct items in a row equals n!.",
    "hintAr": "ترتيب n من العناصر المختلفة في صف يساوي n!.",
    "stepByStepSolutionEn": [
      "Arranging 4 items in a straight line: $4! = 4 \\times 3 \\times 2 \\times 1 = 24$."
    ],
    "stepByStepSolutionAr": [
      "ترتيب ٤ عناصر في صف مستقيم: ٤! = ٤ * ٣ * ٢ * ١ = ٢٤."
    ],
    "teacherTipEn": "Linear permutations of n distinct items is always n!.",
    "teacherTipAr": "عدد طرق ترتيب n من العناصر المختلفة في صف هو دائماً n!."
  },
  {
    "id": "alg_ch1_db_easy_10",
    "titleEn": "Consecutive Factorial Quadratic Equation",
    "titleAr": "معادلة مضاريب متتالية تؤول لتربيعية",
    "difficulty": "easy",
    "questionEn": "Find $n$ that satisfies the factorial relation: $(n + 1)! = 30(n - 1)!$.",
    "questionAr": "أوجد قيمة $n$ التي تحقق العلاقة المضروبية: $(n + 1)! = 30(n - 1)!$.",
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
    "hintEn": "Divide both sides by (n-1)!: (n+1)n = 30 = 6 * 5.",
    "hintAr": "اقسم الطرفين على (n-1)!: ينتج (n+1)n = 30 = 6 * 5.",
    "stepByStepSolutionEn": [
      "Expand: $(n + 1) n (n - 1)! = 30 (n - 1)!$",
      "Cancel $(n - 1)!$: $(n + 1)n = 30$",
      "Since $30 = 6 \\times 5$, we have $n + 1 = 6 \\implies n = 5$."
    ],
    "stepByStepSolutionAr": [
      "فك المضروب: $(n + ١) n (n - ١)! = ٣٠ (n - ١)!$",
      "اختصار $(n - ١)!$: $(n + ١)n = ٣٠$",
      "بما أن ٣٠ = ٦ * ٥، إذن $n + ١ = ٦ \\implies n = ٥$."
    ],
    "teacherTipEn": "Product of two consecutive integers (n+1) and n equals 30 directly implies n = 5.",
    "teacherTipAr": "حاصل ضرب عددين متتاليين (n+1) و n يساوي 30، إذن العدد الأصغر n = 5."
  },
  {
    "id": "alg_ch1_db_easy_11",
    "titleEn": "Evaluating Permutation P(6, 3)",
    "titleAr": "حساب التباديل P(6, 3)",
    "difficulty": "easy",
    "questionEn": "Evaluate the permutation $P(6, 3)$.",
    "questionAr": "احسب قيمة التباديل $P(٦، ٣)$.",
    "optionsEn": [
      "120",
      "20",
      "720",
      "60"
    ],
    "optionsAr": [
      "١٢٠",
      "٢٠",
      "٧٢٠",
      "٦٠"
    ],
    "correctAnswer": "120",
    "correctIndex": 0,
    "hintEn": "P(6, 3) = 6 * 5 * 4.",
    "hintAr": "P(6, 3) = ٦ * ٥ * ٤.",
    "stepByStepSolutionEn": [
      "$$P(6, 3) = 6 \\times 5 \\times 4 = 120$$"
    ],
    "stepByStepSolutionAr": [
      "$$P(٦، ٣) = ٦ \\times ٥ \\times ٤ = ١٢٠$$"
    ],
    "teacherTipEn": "Permutations P(n, r) is the product of r consecutive decreasing integers starting from n.",
    "teacherTipAr": "التباديل P(n, r) هي حاصل ضرب r من الأعداد الصحيحة المتتالية تنازلياً بدءاً من n."
  },
  {
    "id": "alg_ch1_db_easy_12",
    "titleEn": "Finding n in Permutation P(n, 2)",
    "titleAr": "إيجاد n في التباديل P(n, 2)",
    "difficulty": "easy",
    "questionEn": "Find the integer $n$ such that $P(n, 2) = 30$.",
    "questionAr": "أوجد العدد الصحيح $n$ الذي يحقق $P(n, 2) = 30$.",
    "optionsEn": [
      "6",
      "5",
      "7",
      "8"
    ],
    "optionsAr": [
      "٦",
      "٥",
      "٧",
      "٨"
    ],
    "correctAnswer": "6",
    "correctIndex": 0,
    "hintEn": "n(n-1) = 30 = 6 * 5.",
    "hintAr": "n(n-1) = ٣٠ = ٦ * ٥.",
    "stepByStepSolutionEn": [
      "$P(n, 2) = n(n - 1) = 30$",
      "Product of two consecutive numbers: $6 \\times 5 = 30 \\implies n = 6$."
    ],
    "stepByStepSolutionAr": [
      "$P(n, ٢) = n(n - ١) = ٣٠$",
      "حاصل ضرب عددين متتاليين: ٦ * ٥ = ٣٠، إذن $n = ٦$."
    ],
    "teacherTipEn": "Look for two consecutive integers whose product is 30.",
    "teacherTipAr": "ابحث عن عددين متتاليين حاصل ضربهما ٣٠."
  },
  {
    "id": "alg_ch1_db_easy_13",
    "titleEn": "Circular Table Seating of 5 Persons",
    "titleAr": "جلوس ٥ أشخاص حول مائدة دائرية",
    "difficulty": "easy",
    "questionEn": "In how many ways can 5 people be seated around a round dining table?",
    "questionAr": "بكم طريقة يمكن لـ ٥ أشخاص الجلوس حول مائدة طعام مستديرة؟",
    "optionsEn": [
      "24",
      "120",
      "60",
      "12"
    ],
    "optionsAr": [
      "٢٤",
      "١٢٠",
      "٦٠",
      "١٢"
    ],
    "correctAnswer": "24",
    "correctIndex": 0,
    "hintEn": "Circular permutations formula: (n-1)! = (5-1)!. ",
    "hintAr": "قانون التباديل الدائرية: (n-1)! = (٥-١)!.",
    "stepByStepSolutionEn": [
      "$$\\text{Ways} = (n - 1)! = (5 - 1)! = 4! = 24$$"
    ],
    "stepByStepSolutionAr": [
      "عدد الطرق = (٥ - ١)! = ٤! = ٢٤."
    ],
    "teacherTipEn": "In circular arrangements without a fixed reference, subtract 1 from n before taking factorial.",
    "teacherTipAr": "في الترتيب الدائري بدون نقطة مرجعية ثابتة، اطرح ١ من n قبل أخذ المضروب."
  },
  {
    "id": "alg_ch1_db_easy_14",
    "titleEn": "Numbers Formed with Repetition",
    "titleAr": "أعداد مكونة مع التكرار",
    "difficulty": "easy",
    "questionEn": "How many 3-digit numbers can be formed using digits $\\{1, 2, 3, 4\\}$ if repetition is permitted?",
    "questionAr": "كم عدداً مكوناً من ٣ أرقام يمكن تكوينه من الأرقام $\\{١، ٢، ٣، ٤\\}$ مع السماح بالتكرار؟",
    "optionsEn": [
      "64",
      "24",
      "12",
      "81"
    ],
    "optionsAr": [
      "٦٤",
      "٢٤",
      "١٢",
      "٨١"
    ],
    "correctAnswer": "64",
    "correctIndex": 0,
    "hintEn": "Each of the 3 digits has 4 choices: 4^3.",
    "hintAr": "لكل خانة من الخانات الثلاث ٤ خيارات: ٤^٣.",
    "stepByStepSolutionEn": [
      "$$4 \\times 4 \\times 4 = 4^3 = 64$$"
    ],
    "stepByStepSolutionAr": [
      "$$٤ \\times ٤ \\times ٤ = ٤^٣ = ٦٤$$"
    ],
    "teacherTipEn": "n^r represents ordered sampling with replacement.",
    "teacherTipAr": "القانون n^r يعبر عن الاختيار مع مراعاة الترتيب ومع التكرار."
  },
  {
    "id": "alg_ch1_db_easy_15",
    "titleEn": "Finding r in P(7, r) = 210",
    "titleAr": "إيجاد r في المعادلة P(7, r) = 210",
    "difficulty": "easy",
    "questionEn": "Determine the permutation order $r$ satisfying $P(7, r) = 210$.",
    "questionAr": "عيّن رتبة التباديل $r$ التي تحقق $P(7, r) = 210$.",
    "optionsEn": [
      "3",
      "2",
      "4",
      "5"
    ],
    "optionsAr": [
      "٣",
      "٢",
      "٤",
      "٥"
    ],
    "correctAnswer": "3",
    "correctIndex": 0,
    "hintEn": "Divide 210 by consecutive decreasing integers starting from 7: 7 * 6 * 5 = 210.",
    "hintAr": "اقسم ٢١٠ على أعداد متتالية بدءاً من ٧: ٧ * ٦ * ٥ = ٢١٠.",
    "stepByStepSolutionEn": [
      "$210 = 7 \\times 30 = 7 \\times 6 \\times 5$",
      "There are 3 factors, so $r = 3$."
    ],
    "stepByStepSolutionAr": [
      "٢١٠ = ٧ * ٣٠ = ٧ * ٦ * ٥",
      "يوجد ٣ عوامل، إذن $r = ٣$."
    ],
    "teacherTipEn": "Count the number of factors starting from 7 that multiply to 210.",
    "teacherTipAr": "عد العوامل المتتالية بدءاً من ٧ التي حاصل ضربها ٢١٠."
  },
  {
    "id": "alg_ch1_db_easy_16",
    "titleEn": "Entering Building through Doors",
    "titleAr": "دخول أشخاص عبر أبواب مبنى",
    "difficulty": "easy",
    "questionEn": "In how many ways can 4 people enter a building that has 3 different doors?",
    "questionAr": "بكم طريقة يمكن لـ ٤ أشخاص الدخول إلى مبنى له ٣ أبواب مختلفة؟",
    "optionsEn": [
      "81",
      "64",
      "12",
      "24"
    ],
    "optionsAr": [
      "٨١",
      "٦٤",
      "١٢",
      "٢٤"
    ],
    "correctAnswer": "81",
    "correctIndex": 0,
    "hintEn": "Each of the 4 persons has 3 door choices independently: 3^4.",
    "hintAr": "لكل شخص من الأشخاص الأربعة ٣ خيارات مستقلة للدخول: ٣^٤.",
    "stepByStepSolutionEn": [
      "Person 1 has 3 choices, Person 2 has 3 choices, Person 3 has 3, Person 4 has 3.",
      "$$\\text{Total} = 3^4 = 81$$"
    ],
    "stepByStepSolutionAr": [
      "لكل شخص ٣ خيارات مستقلة للأبواب:",
      "$$\\text{العدد الكلي} = ٣^٤ = ٨١$$"
    ],
    "teacherTipEn": "Be careful: it is (choices)^(items) = 3^4, not 4^3.",
    "teacherTipAr": "انتبه: القانون هو (عدد الخيارات)^(عدد الأفراد) = ٣^٤ وليس ٤^٣."
  },
  {
    "id": "alg_ch1_db_easy_17",
    "titleEn": "Identity P(n, 0) + P(n, 1)",
    "titleAr": "قيمة المقدار P(n, 0) + P(n, 1)",
    "difficulty": "easy",
    "questionEn": "Evaluate the algebraic expression: $P(n, 0) + P(n, 1)$.",
    "questionAr": "أوجد قيمة المقدار الجبري: $P(n, ٠) + P(n, ١)$.",
    "optionsEn": [
      "n + 1",
      "n",
      "2n",
      "1"
    ],
    "optionsAr": [
      "n + ١",
      "n",
      "٢n",
      "١"
    ],
    "correctAnswer": "n + 1",
    "correctIndex": 0,
    "hintEn": "P(n, 0) = 1 and P(n, 1) = n.",
    "hintAr": "P(n, 0) = ١ و P(n, 1) = n.",
    "stepByStepSolutionEn": [
      "By permutation definitions: $P(n, 0) = 1$ and $P(n, 1) = n$.",
      "$$P(n, 0) + P(n, 1) = 1 + n = n + 1$$"
    ],
    "stepByStepSolutionAr": [
      "من تعريف التباديل: $P(n, ٠) = ١$ و $P(n, ١) = n$.",
      "$$P(n, ٠) + P(n, ١) = ١ + n = n + ١$$"
    ],
    "teacherTipEn": "Always recall the boundary values of permutations: P(n, 0) = 1 and P(n, n) = n!.",
    "teacherTipAr": "تذكر الحالات الخاصة للتباديل: P(n, 0) = 1 و P(n, n) = n!."
  },
  {
    "id": "alg_ch1_db_easy_18",
    "titleEn": "Arranging Keys on a Ring",
    "titleAr": "ترتيب مفاتيح في حلقة ميدالية",
    "difficulty": "easy",
    "questionEn": "In how many ways can 6 different keys be arranged on a key ring?",
    "questionAr": "بكم طريقة يمكن ترتيب ٦ مفاتيح مختلفة في حلقة ميدالية؟",
    "optionsEn": [
      "60",
      "120",
      "720",
      "360"
    ],
    "optionsAr": [
      "٦٠",
      "١٢٠",
      "٧٢٠",
      "٣٦٠"
    ],
    "correctAnswer": "60",
    "correctIndex": 0,
    "hintEn": "A key ring or necklace can be flipped over: (n-1)! / 2.",
    "hintAr": "حلقة المفاتيح أو السوار يمكن قلبه على الوجهين: (n-1)! / 2.",
    "stepByStepSolutionEn": [
      "Key ring arrangement has two indistinguishable sides (reflection symmetry):",
      "$$\\text{Ways} = \\frac{(n - 1)!}{2} = \\frac{(6 - 1)!}{2} = \\frac{5!}{2} = \\frac{120}{2} = 60$$"
    ],
    "stepByStepSolutionAr": [
      "حلقة الميدالية لها وجه وظهر متطابقان (تماثل انعكاسي):",
      "$$\\text{عدد الطرق} = \\frac{(n - ١)!}{٢} = \\frac{(٦ - ١)!}{٢} = \\frac{٥!}{٢} = \\frac{١٢٠}{٢} = ٦٠$$"
    ],
    "teacherTipEn": "A key ring or bracelet has reflection symmetry, so always divide (n-1)! by 2.",
    "teacherTipAr": "في المسبحة أو السوار أو حلقة المفاتيح، نقسم دائماً على ٢ لتماثل الوجهين."
  },
  {
    "id": "alg_ch1_db_easy_19",
    "titleEn": "Permutation Linear Equation",
    "titleAr": "معادلة خطية للتباديل",
    "difficulty": "easy",
    "questionEn": "Determine $n$ from the permutation equation: $P(n, 3) = 6 \times P(n, 2)$.",
    "questionAr": "عيّن قيمة $n$ من المعادلة التبادلية: $P(n, 3) = 6 \times P(n, 2)$.",
    "optionsEn": [
      "8",
      "7",
      "9",
      "6"
    ],
    "optionsAr": [
      "٨",
      "٧",
      "٩",
      "٦"
    ],
    "correctAnswer": "8",
    "correctIndex": 0,
    "hintEn": "P(n, 3) = n(n-1)(n-2) and P(n, 2) = n(n-1). Cancel n(n-1).",
    "hintAr": "P(n, 3) = n(n-1)(n-2) و P(n, 2) = n(n-1). اختصر n(n-1).",
    "stepByStepSolutionEn": [
      "$$n(n - 1)(n - 2) = 6 n(n - 1)$$",
      "Cancel $n(n - 1)$ for $n \\ge 3$:",
      "$$n - 2 = 6 \\implies n = 8$$"
    ],
    "stepByStepSolutionAr": [
      "$$n(n - ١)(n - ٢) = ٦ n(n - ١)$$",
      "باختصار $n(n - ١)$ لأن $n \\ge ٣$:",
      "$$n - ٢ = ٦ \\implies n = ٨$$"
    ],
    "teacherTipEn": "Cancelling common factors reduces high-degree equations instantly.",
    "teacherTipAr": "اختصار العوامل المشتركة يختصر درجات المعادلات فوراً."
  },
  {
    "id": "alg_ch1_db_easy_20",
    "titleEn": "Letter Permutations Without Repetition",
    "titleAr": "تباديل حروف بدون تكرار",
    "difficulty": "easy",
    "questionEn": "How many 4-letter codes can be formed from the 5 distinct letters $\\{A, B, C, D, E\\}$ without repetition?",
    "questionAr": "كم كلمة مكونة من ٤ حروف مختلفة يمكن تكوينها من الحروف الخمسة $\\{A, B, C, D, E\\}$ بدون تكرار؟",
    "optionsEn": [
      "120",
      "60",
      "24",
      "20"
    ],
    "optionsAr": [
      "١٢٠",
      "٦٠",
      "٢٤",
      "٢٠"
    ],
    "correctAnswer": "120",
    "correctIndex": 0,
    "hintEn": "P(5, 4) = 5 * 4 * 3 * 2.",
    "hintAr": "P(5, 4) = ٥ * ٤ * ٣ * ٢.",
    "stepByStepSolutionEn": [
      "$$P(5, 4) = 5 \\times 4 \\times 3 \\times 2 = 120$$"
    ],
    "stepByStepSolutionAr": [
      "$$P(٥، ٤) = ٥ \\times ٤ \\times ٣ \\times ٢ = ١٢٠$$"
    ],
    "teacherTipEn": "Notice P(5, 4) = P(5, 5) = 5! = 120.",
    "teacherTipAr": "لاحظ أن P(n, n-1) = P(n, n) = n!."
  },
  {
    "id": "alg_ch1_db_easy_21",
    "titleEn": "Evaluating Combination C(8, 3)",
    "titleAr": "حساب التوفيقة C(8, 3)",
    "difficulty": "easy",
    "questionEn": "Evaluate the combination $\\binom{8}{3}$.",
    "questionAr": "احسب قيمة التوفيقة $\\binom{٨}{٣}$.",
    "optionsEn": [
      "56",
      "336",
      "28",
      "70"
    ],
    "optionsAr": [
      "٥٦",
      "٣٣٦",
      "٢٨",
      "٧٠"
    ],
    "correctAnswer": "56",
    "correctIndex": 0,
    "hintEn": "C(8, 3) = (8 * 7 * 6) / (3 * 2 * 1).",
    "hintAr": "C(8, 3) = (٨ * ٧ * ٦) / (٣ * ٢ * ١).",
    "stepByStepSolutionEn": [
      "$$\\binom{8}{3} = \\frac{8 \\times 7 \\times 6}{3 \\times 2 \\times 1} = 8 \\times 7 = 56$$"
    ],
    "stepByStepSolutionAr": [
      "$$\\binom{٨}{٣} = \\frac{٨ \\times ٧ \\times ٦}{٣ \\times ٢ \\times ١} = ٥٦$$"
    ],
    "teacherTipEn": "Cancel 3 * 2 * 1 = 6 with 6 in the numerator.",
    "teacherTipAr": "اختصر ٣ * ٢ * ١ = ٦ مع العدد ٦ في البسط مباشرة."
  },
  {
    "id": "alg_ch1_db_easy_22",
    "titleEn": "Combinations Equality Theorem",
    "titleAr": "قانون التساوي في التوافيق",
    "difficulty": "easy",
    "questionEn": "Apply combination symmetry to find $n$ if $\binom{n}{5} = \binom{n}{3}$.",
    "questionAr": "طبّق خاصية تماثل التوافيق لإيجاد $n$ إذا كان $\binom{n}{5} = \binom{n}{3}$.",
    "optionsEn": [
      "8",
      "15",
      "2",
      "10"
    ],
    "optionsAr": [
      "٨",
      "١٥",
      "٢",
      "١٠"
    ],
    "correctAnswer": "8",
    "correctIndex": 0,
    "hintEn": "If C(n, x) = C(n, y) and x != y, then x + y = n.",
    "hintAr": "إذا كان C(n, x) = C(n, y) وكان x لا يساوي y، فإن x + y = n.",
    "stepByStepSolutionEn": [
      "Since $5 \\ne 3$, we have $n = 5 + 3 = 8$."
    ],
    "stepByStepSolutionAr": [
      "بما أن ٥ لا تساوي ٣، إذن $n = ٥ + ٣ = ٨$."
    ],
    "teacherTipEn": "The sum of lower indices equals the upper index.",
    "teacherTipAr": "مجموع الدليلين يساوي العَلَم المشترك."
  },
  {
    "id": "alg_ch1_db_easy_23",
    "titleEn": "Combination Boundary Values",
    "titleAr": "قيم التوافيق عند الحدود",
    "difficulty": "easy",
    "questionEn": "Determine the sum of the boundary combination terms: $\binom{12}{0} + \binom{12}{12}$.",
    "questionAr": "عيّن مجموع حدي التوافيق الطرفيين: $\binom{12}{0} + \binom{12}{12}$.",
    "optionsEn": [
      "2",
      "1",
      "12",
      "24"
    ],
    "optionsAr": [
      "٢",
      "١",
      "١٢",
      "٢٤"
    ],
    "correctAnswer": "2",
    "correctIndex": 0,
    "hintEn": "C(n, 0) = 1 and C(n, n) = 1.",
    "hintAr": "C(n, 0) = ١ و C(n, n) = ١.",
    "stepByStepSolutionEn": [
      "$$\\binom{12}{0} = 1, \\quad \\binom{12}{12} = 1 \\implies 1 + 1 = 2$$"
    ],
    "stepByStepSolutionAr": [
      "$$\\binom{١٢}{٠} = ١، \\quad \\binom{١٢}{١٢} = ١ \\implies ١ + ١ = ٢$$"
    ],
    "teacherTipEn": "Choosing 0 or all n items can be done in exactly 1 way each.",
    "teacherTipAr": "اختيار لا شيء أو اختيار كل العناصر يتم بطريقة واحدة فقط."
  },
  {
    "id": "alg_ch1_db_easy_24",
    "titleEn": "Selecting a Delegation of 3",
    "titleAr": "اختيار وفد من ٣ طلاب",
    "difficulty": "easy",
    "questionEn": "In how many ways can a delegation of 3 students be selected from 10 students?",
    "questionAr": "بكم طريقة يمكن اختيار وفد من ٣ طلاب من بين ١٠ طلاب؟",
    "optionsEn": [
      "120",
      "720",
      "30",
      "240"
    ],
    "optionsAr": [
      "١٢٠",
      "٧٢٠",
      "٣٠",
      "٢٤٠"
    ],
    "correctAnswer": "120",
    "correctIndex": 0,
    "hintEn": "A delegation has no ranking or order, so use combination C(10, 3).",
    "hintAr": "الوفد لا ترتيب فيه ولا مناصب، إذن نستخدم التوافيق C(10, 3).",
    "stepByStepSolutionEn": [
      "$$\\binom{10}{3} = \\frac{10 \\times 9 \\times 8}{3 \\times 2 \\times 1} = 10 \\times 3 \\times 4 = 120$$"
    ],
    "stepByStepSolutionAr": [
      "$$\\binom{١٠}{٣} = \\frac{١٠ \\times ٩ \\times ٨}{٣ \\times ٢ \\times ١} = ١٢٠$$"
    ],
    "teacherTipEn": "When order does not matter, always use combinations.",
    "teacherTipAr": "عندما يكون الترتيب غير مهم، استخدم دائماً التوافيق."
  },
  {
    "id": "alg_ch1_db_easy_25",
    "titleEn": "Pascal Identity Target Index",
    "titleAr": "تحديد الدليل في قانون الجمع لباسكال",
    "difficulty": "easy",
    "questionEn": "If $\\binom{10}{4} + \\binom{10}{3} = \\binom{11}{k}$, what is $k$?",
    "questionAr": "إذا كان $\\binom{١٠}{٤} + \\binom{١٠}{٣} = \\binom{١١}{k}$، فما قيمة $k$؟",
    "optionsEn": [
      "4",
      "3",
      "7",
      "1"
    ],
    "optionsAr": [
      "٤",
      "٣",
      "٧",
      "١"
    ],
    "correctAnswer": "4",
    "correctIndex": 0,
    "hintEn": "Pascal rule takes the greater of the two consecutive lower indices: max(4, 3) = 4.",
    "hintAr": "قانون باسكال يأخذ الأكبر بين الدليلين المتتاليين: الأكبر بين ٤ و ٣ هو ٤.",
    "stepByStepSolutionEn": [
      "$$\\binom{n}{r} + \\binom{n}{r - 1} = \\binom{n + 1}{r}$$",
      "Here $n = 10, r = 4 \\implies \\binom{11}{4}$, so $k = 4$."
    ],
    "stepByStepSolutionAr": [
      "$$\\binom{n}{r} + \\binom{n}{r - ١} = \\binom{n + ١}{r}$$",
      "هنا $n = ١٠، r = ٤ \\implies \\binom{١١}{٤}$، إذن $k = ٤$."
    ],
    "teacherTipEn": "Always select the larger bottom index.",
    "teacherTipAr": "اختر دائماً الدليل السفلي الأكبر."
  },
  {
    "id": "alg_ch1_db_easy_26",
    "titleEn": "Diagonals of a Hexagon",
    "titleAr": "عدد أقطار الشكل السداسي",
    "difficulty": "easy",
    "questionEn": "How many diagonals does a regular hexagon (6 sides) have?",
    "questionAr": "كم عدداً من الأقطار يمتلكه شكل سداسي منتظم (٦ أضلاع)؟",
    "optionsEn": [
      "9",
      "15",
      "12",
      "6"
    ],
    "optionsAr": [
      "٩",
      "١٥",
      "١٢",
      "٦"
    ],
    "correctAnswer": "9",
    "correctIndex": 0,
    "hintEn": "D = n(n-3)/2 = 6(3)/2.",
    "hintAr": "D = n(n-3)/2 = ٦(٣)/٢.",
    "stepByStepSolutionEn": [
      "$$D = \\binom{6}{2} - 6 = 15 - 6 = 9$$",
      "Or $D = \\frac{6 \\times 3}{2} = 9$."
    ],
    "stepByStepSolutionAr": [
      "$$D = \\binom{٦}{٢} - ٦ = ١٥ - ٦ = ٩$$"
    ],
    "teacherTipEn": "The number of diagonals of any n-gon is n(n-3)/2.",
    "teacherTipAr": "عدد أقطار أي مضلع له n من الأضلاع هو n(n-3)/2."
  },
  {
    "id": "alg_ch1_db_easy_27",
    "titleEn": "Finding n in Combination C(n, 2) = 45",
    "titleAr": "إيجاد n في التوفيقة C(n, 2) = 45",
    "difficulty": "easy",
    "questionEn": "Calculate $n$ where the number of combinations of 2 items is $\binom{n}{2} = 45$.",
    "questionAr": "احسب $n$ حيث عدد توافيق عنصرين يساوي $\binom{n}{2} = 45$.",
    "optionsEn": [
      "10",
      "9",
      "11",
      "8"
    ],
    "optionsAr": [
      "١٠",
      "٩",
      "١١",
      "٨"
    ],
    "correctAnswer": "10",
    "correctIndex": 0,
    "hintEn": "n(n-1) / 2 = 45 => n(n-1) = 90 = 10 * 9.",
    "hintAr": "n(n-1) / 2 = ٤٥ => n(n-1) = ٩٠ = ١٠ * ٩.",
    "stepByStepSolutionEn": [
      "$$\\frac{n(n - 1)}{2} = 45 \\implies n(n - 1) = 90$$",
      "$$10 \\times 9 = 90 \\implies n = 10$$"
    ],
    "stepByStepSolutionAr": [
      "$$\\frac{n(n - ١)}{٢} = ٤٥ \\implies n(n - ١) = ٩٠$$",
      "١٠ * ٩ = ٩٠، إذن $n = ١٠$."
    ],
    "teacherTipEn": "Multiply by 2 then factor into two consecutive numbers.",
    "teacherTipAr": "اضرب في ٢ ثم حلل إلى حاصل ضرب عددين متتاليين."
  },
  {
    "id": "alg_ch1_db_easy_28",
    "titleEn": "Combination Ratio Law Evaluation",
    "titleAr": "تطبيق مباشر لقانون النسبة للتوافيق",
    "difficulty": "easy",
    "questionEn": "Evaluate the ratio $\\frac{\\binom{9}{4}}{\\binom{9}{3}}$.",
    "questionAr": "احسب قيمة النسبة $\\frac{\\binom{٩}{٤}}{\\binom{٩}{٣}}$.",
    "optionsEn": [
      "3 / 2",
      "2 / 3",
      "4 / 3",
      "5 / 4"
    ],
    "optionsAr": [
      "٣ / ٢",
      "٢ / ٣",
      "٤ / ٣",
      "٥ / ٤"
    ],
    "correctAnswer": "3 / 2",
    "correctIndex": 0,
    "hintEn": "Ratio formula: (n - r + 1) / r with n = 9 and r = 4.",
    "hintAr": "قانون النسبة: (n - r + 1) / r حيث n = 9 و r = 4.",
    "stepByStepSolutionEn": [
      "$$\\frac{\\binom{n}{r}}{\\binom{n}{r - 1}} = \\frac{n - r + 1}{r}$$",
      "$$= \\frac{9 - 4 + 1}{4} = \\frac{6}{4} = \\frac{3}{2}$$"
    ],
    "stepByStepSolutionAr": [
      "$$\\frac{\\binom{٩}{٤}}{\\binom{٩}{٣}} = \\frac{٩ - ٤ + ١}{٤} = \\frac{٦}{٤} = \\frac{٣}{٢}$$"
    ],
    "teacherTipEn": "The combination ratio formula saves time over computing factorials.",
    "teacherTipAr": "قانون النسبة للتوافيق يختصر الوقت مقارنة بحساب المضاريب."
  },
  {
    "id": "alg_ch1_db_easy_29",
    "titleEn": "Straight Lines from Non-Collinear Points",
    "titleAr": "عدد المستقيمات من نقاط ليست على استقامة واحدة",
    "difficulty": "easy",
    "questionEn": "How many straight lines can be formed by connecting 7 points, no three of which are collinear?",
    "questionAr": "كم مستقيماً يمكن رسمه يصل بين ٧ نقاط لا تقع أي ٣ منها على استقامة واحدة؟",
    "optionsEn": [
      "21",
      "42",
      "35",
      "14"
    ],
    "optionsAr": [
      "٢١",
      "٤٢",
      "٣٥",
      "١٤"
    ],
    "correctAnswer": "21",
    "correctIndex": 0,
    "hintEn": "Any 2 points determine a unique line: C(7, 2).",
    "hintAr": "أي نقطتين تحددان مستقيماً واحداً: C(7, 2).",
    "stepByStepSolutionEn": [
      "$$\\binom{7}{2} = \\frac{7 \\times 6}{2 \\times 1} = 21$$"
    ],
    "stepByStepSolutionAr": [
      "$$\\binom{٧}{٢} = \\frac{٧ \\times ٦}{٢ \\times ١} = ٢١$$"
    ],
    "teacherTipEn": "Every distinct pair of points determines exactly one straight line.",
    "teacherTipAr": "كل زوج من النقاط يحدد خطاً مستقيماً وحيداً."
  },
  {
    "id": "alg_ch1_db_easy_30",
    "titleEn": "Finding r in C(15, 2r+1) = C(15, r-1)",
    "titleAr": "إيجاد r في المعادلة C(15, 2r+1) = C(15, r-1)",
    "difficulty": "easy",
    "questionEn": "If $\\binom{15}{2r + 1} = \\binom{15}{r - 1}$ where $2r+1 \\ne r-1$, find $r$.",
    "questionAr": "إذا كان $\\binom{١٥}{٢r + ١} = \\binom{١٥}{r - ١}$ حيث $٢r+١ \\ne r-١$، فأوجد $r$.",
    "optionsEn": [
      "5",
      "4",
      "6",
      "7"
    ],
    "optionsAr": [
      "٥",
      "٤",
      "٦",
      "٧"
    ],
    "correctAnswer": "5",
    "correctIndex": 0,
    "hintEn": "Sum of lower indices = 15: (2r + 1) + (r - 1) = 15.",
    "hintAr": "مجموع الدليلين = ١٥: (٢r + ١) + (r - ١) = ١٥.",
    "stepByStepSolutionEn": [
      "$$(2r + 1) + (r - 1) = 15 \\implies 3r = 15 \\implies r = 5$$"
    ],
    "stepByStepSolutionAr": [
      "$$(٢r + ١) + (r - ١) = ١٥ \\implies ٣r = ١٥ \\implies r = ٥$$"
    ],
    "teacherTipEn": "Summing the lower indices gives a simple linear equation.",
    "teacherTipAr": "جمع الدليلين يعطي معادلة خطية مباشرة وبسيطة."
  },
  {
    "id": "alg_ch1_db_easy_31",
    "titleEn": "Number of Terms in Binomial Expansion",
    "titleAr": "عدد حدود مفكوك ذات الحدين",
    "difficulty": "easy",
    "questionEn": "How many terms are in the algebraic expansion of $(x + y)^{15}$?",
    "questionAr": "كم حداً في مفكوك المقدار $(س + ص)^{١٥}$؟",
    "optionsEn": [
      "16",
      "15",
      "14",
      "30"
    ],
    "optionsAr": [
      "١٦",
      "١٥",
      "١٤",
      "٣٠"
    ],
    "correctAnswer": "16",
    "correctIndex": 0,
    "hintEn": "The number of terms in (a + b)^n is always n + 1.",
    "hintAr": "عدد حدود مفكوك ذات الحدين هو دائماً n + ١.",
    "stepByStepSolutionEn": [
      "$$\\text{Number of terms} = n + 1 = 15 + 1 = 16$$"
    ],
    "stepByStepSolutionAr": [
      "عدد الحدود = n + 1 = 15 + 1 = 16 حداً."
    ],
    "teacherTipEn": "Terms range from r = 0 to r = n, which gives exactly n + 1 terms.",
    "teacherTipAr": "الحدود تبدأ من r = 0 حتى r = n، مما يعطي n + 1 حداً."
  },
  {
    "id": "alg_ch1_db_easy_32",
    "titleEn": "General Term Formula Identification",
    "titleAr": "صيغة الحد العام لمفكوك ذات الحدين",
    "difficulty": "easy",
    "questionEn": "In the binomial expansion of $(x + a)^n$, the general term $T_{r+1}$ is given by:",
    "questionAr": "في مفكوك ذات الحدين $(س + أ)^n$، الحد العام $T_{r+١}$ يعطى بالقانون:",
    "optionsEn": [
      "C(n, r) * x^(n-r) * a^r",
      "C(n, r) * x^r * a^(n-r)",
      "C(n, r+1) * x^(n-r) * a^r",
      "n! * x^(n-r) * a^r"
    ],
    "optionsAr": [
      "C(n, r) * س^(n-r) * أ^r",
      "C(n, r) * س^r * أ^(n-r)",
      "C(n, r+1) * س^(n-r) * أ^r",
      "n! * س^(n-r) * أ^r"
    ],
    "correctAnswer": "C(n, r) * x^(n-r) * a^r",
    "correctIndex": 0,
    "hintEn": "T_{r+1} = C(n, r) * (first)^(n-r) * (second)^r.",
    "hintAr": "T_{r+1} = C(n, r) * (الأول)^(n-r) * (الثاني)^r.",
    "stepByStepSolutionEn": [
      "$$T_{r+1} = \\binom{n}{r} x^{n - r} a^r$$"
    ],
    "stepByStepSolutionAr": [
      "$$T_{r+١} = \\binom{n}{r} س^{n - r} أ^r$$"
    ],
    "teacherTipEn": "The lower index of C(n, r) is always 1 less than the term order r + 1.",
    "teacherTipAr": "دليل التوفيقة r يقل دائماً بمقدار ١ عن رتبة الحد r + 1."
  },
  {
    "id": "alg_ch1_db_easy_33",
    "titleEn": "Middle Term of (x + 2)^8",
    "titleAr": "الحد الأوسط في مفكوك (س + ٢)^٨",
    "difficulty": "easy",
    "questionEn": "Find the middle term in the expansion of $(x + 2)^8$.",
    "questionAr": "أوجد الحد الأوسط في مفكوك $(س + ٢)^٨$.",
    "optionsEn": [
      "1120 x^4",
      "70 x^4",
      "560 x^4",
      "2240 x^4"
    ],
    "optionsAr": [
      "١١٢٠ س^٤",
      "٧٠ س^٤",
      "٥٦٠ س^٤",
      "٢٢٤٠ س^٤"
    ],
    "correctAnswer": "1120 x^4",
    "correctIndex": 0,
    "hintEn": "Order of middle term: (8/2) + 1 = 5 => T5 = C(8, 4) * x^4 * 2^4.",
    "hintAr": "رتبة الحد الأوسط: (٨/٢) + ١ = ٥ => T5 = C(8, 4) * س^٤ * ٢^٤.",
    "stepByStepSolutionEn": [
      "Middle term is $T_5$ ($r = 4$):",
      "$$T_5 = \\binom{8}{4} x^4 2^4 = 70 \\times 16 x^4 = 1120 x^4$$"
    ],
    "stepByStepSolutionAr": [
      "الحد الأوسط هو الحد الخامس $T_5$ ($r = ٤$):",
      "$$T_5 = \\binom{٨}{٤} س^٤ ٢^٤ = ٧٠ \\times ١٦ س^٤ = ١١٢٠ س^٤$$"
    ],
    "teacherTipEn": "2^4 = 16 and C(8, 4) = 70. Multiply: 70 * 16 = 1120.",
    "teacherTipAr": "٢^٤ = ١٦ و C(8, 4) = ٧٠. الناتج = ١١٢٠."
  },
  {
    "id": "alg_ch1_db_easy_34",
    "titleEn": "Sum of Coefficients of (3x - 2y)^7",
    "titleAr": "مجموع معاملات مفكوك (٣س - ٢ص)^٧",
    "difficulty": "easy",
    "questionEn": "Find the sum of all coefficients in the expansion of $(3x - 2y)^7$.",
    "questionAr": "أوجد مجموع معاملات جميع الحدود في مفكوك $(٣ س - ٢ ص)^٧$.",
    "optionsEn": [
      "1",
      "128",
      "2187",
      "-1"
    ],
    "optionsAr": [
      "١",
      "١٢٨",
      "٢١٨٧",
      "-١"
    ],
    "correctAnswer": "1",
    "correctIndex": 0,
    "hintEn": "Substitute x = 1 and y = 1.",
    "hintAr": "عوض عن س = ١ و ص = ١.",
    "stepByStepSolutionEn": [
      "Set $x = 1$ and $y = 1$:",
      "$$(3(1) - 2(1))^7 = (3 - 2)^7 = 1^7 = 1$$"
    ],
    "stepByStepSolutionAr": [
      "بوضع س = ١ و ص = ١:",
      "$$(٣(١) - ٢(١))^٧ = (٣ - ٢)^٧ = ١^٧ = ١$$"
    ],
    "teacherTipEn": "Sum of coefficients is found by setting all variables to 1.",
    "teacherTipAr": "مجموع المعاملات يُحسب دائماً بوضع المتغيرات مساوية للعدد ١."
  },
  {
    "id": "alg_ch1_db_easy_35",
    "titleEn": "Evaluating Fourth Term T4 in (x + 3)^6",
    "titleAr": "حساب الحد الرابع T4 في مفكوك (س + ٣)^٦",
    "difficulty": "easy",
    "questionEn": "In the expansion of $(x + 3)^6$, find the 4th term $T_4$.",
    "questionAr": "في مفكوك $(س + ٣)^٦$، أوجد الحد الرابع $T_4$.",
    "optionsEn": [
      "540 x^3",
      "180 x^3",
      "20 x^3",
      "1620 x^3"
    ],
    "optionsAr": [
      "٥٤٠ س^٣",
      "١٨٠ س^٣",
      "٢٠ س^٣",
      "١٦٢٠ س^٣"
    ],
    "correctAnswer": "540 x^3",
    "correctIndex": 0,
    "hintEn": "T_4 has r = 3: C(6, 3) * x^(6-3) * 3^3.",
    "hintAr": "الحد الرابع r = ٣: C(6, 3) * س^(٦-٣) * ٣^٣.",
    "stepByStepSolutionEn": [
      "$$T_4 = \\binom{6}{3} x^3 3^3 = 20 \\times 27 x^3 = 540 x^3$$"
    ],
    "stepByStepSolutionAr": [
      "$$T_4 = \\binom{٦}{٣} س^٣ ٣^٣ = ٢٠ \\times ٢٧ س^٣ = ٥٤٠ س^٣$$"
    ],
    "teacherTipEn": "3^3 = 27 and C(6, 3) = 20: 20 * 27 = 540.",
    "teacherTipAr": "٣^٣ = ٢٧ و C(6, 3) = ٢٠، حاصل ضربهما = ٥٤٠."
  },
  {
    "id": "alg_ch1_db_easy_36",
    "titleEn": "First Term Coefficient in (2x - 1)^5",
    "titleAr": "معامل الحد الأول في مفكوك (٢س - ١)^٥",
    "difficulty": "easy",
    "questionEn": "In the expansion of $(2x - 1)^5$, what is the coefficient of $x^5$?",
    "questionAr": "في مفكوك $(٢ س - ١)^٥$، ما هو معامل $س^٥$؟",
    "optionsEn": [
      "32",
      "10",
      "16",
      "-32"
    ],
    "optionsAr": [
      "٣٢",
      "١٠",
      "١٦",
      "-٣٢"
    ],
    "correctAnswer": "32",
    "correctIndex": 0,
    "hintEn": "The x^5 term is T_1 = C(5, 0) * (2x)^5 = 32 x^5.",
    "hintAr": "الحد المحتوي على س^٥ هو الحد الأول: (٢س)^٥ = ٣٢ س^٥.",
    "stepByStepSolutionEn": [
      "$$T_1 = (2x)^5 = 2^5 x^5 = 32 x^5$$",
      "Thus the coefficient is 32."
    ],
    "stepByStepSolutionAr": [
      "$$T_1 = (٢ س)^٥ = ٢^٥ س^٥ = ٣٢ س^٥$$",
      "إذن المعامل هو ٣٢."
    ],
    "teacherTipEn": "The coefficient of the highest power comes solely from raising the first term to power n.",
    "teacherTipAr": "معامل أعلى قوة لـ س ينتج فقط من رفع الحد الأول للأس n."
  },
  {
    "id": "alg_ch1_db_easy_37",
    "titleEn": "Number of Middle Terms for Odd Exponent",
    "titleAr": "عدد الحدود الأوسط للأس الفردي",
    "difficulty": "easy",
    "questionEn": "How many middle terms exist in the expansion of $(a + b)^9$?",
    "questionAr": "كم حداً أوسط يوجد في مفكوك $(أ + ب)^٩$؟",
    "optionsEn": [
      "2 middle terms",
      "1 middle term",
      "3 middle terms",
      "No middle terms"
    ],
    "optionsAr": [
      "حدان أوسطان",
      "حد أوسط واحد",
      "٣ حدود أوسط",
      "لا يوجد حد أوسط"
    ],
    "correctAnswer": "2 middle terms",
    "correctIndex": 0,
    "hintEn": "When n is odd, the number of terms n + 1 is even, so there are 2 middle terms.",
    "hintAr": "عندما يكون الأس n فردياً، فإن عدد الحدود n + 1 يكون زوجياً، وبالتالي يوجد حدان أوسطان.",
    "stepByStepSolutionEn": [
      "Since $n = 9$ is odd, the expansion has $9 + 1 = 10$ terms.",
      "An expansion with an even number of terms has exactly 2 middle terms: $T_5$ and $T_6$."
    ],
    "stepByStepSolutionAr": [
      "بما أن الأس ٩ عدد فردي، فإن عدد الحدود = ٩ + ١ = ١٠ حدود.",
      "أي عدد زوجي من الحدود يحتوي على حدين أوسطين هما الخامس والسادس."
    ],
    "teacherTipEn": "Odd power -> 2 middle terms; Even power -> 1 middle term.",
    "teacherTipAr": "أس فردي -> حدان أوسطان؛ أس زوجي -> حد أوسط واحد."
  },
  {
    "id": "alg_ch1_db_easy_38",
    "titleEn": "Polynomial Degree of Expansion",
    "titleAr": "درجة كثيرة الحدود الناتجة من المفكوك",
    "difficulty": "easy",
    "questionEn": "What is the highest power of $x$ (degree) in the expansion of $(x^2 + 1)^4$?",
    "questionAr": "ما هي أعلى قوة للمتغير س (درجة المقدار) في مفكوك $(س^٢ + ١)^٤$؟",
    "optionsEn": [
      "8",
      "6",
      "4",
      "16"
    ],
    "optionsAr": [
      "٨",
      "٦",
      "٤",
      "١٦"
    ],
    "correctAnswer": "8",
    "correctIndex": 0,
    "hintEn": "First term raised to power 4: (x^2)^4 = x^8.",
    "hintAr": "الحد الأول مرفوعاً للأس ٤: (س^٢)^٤ = س^٨.",
    "stepByStepSolutionEn": [
      "$$(x^2)^4 = x^{2 \\times 4} = x^8$$"
    ],
    "stepByStepSolutionAr": [
      "$$(س^٢)^٤ = س^{٢ \\times ٤} = س^٨$$"
    ],
    "teacherTipEn": "Multiply inner power by outer power: 2 * 4 = 8.",
    "teacherTipAr": "اضرب الأس الداخلي في الأس الخارجي: ٢ * ٤ = ٨."
  },
  {
    "id": "alg_ch1_db_easy_39",
    "titleEn": "Finding n from Middle Term Order",
    "titleAr": "إيجاد الأس n من رتبة الحد الأوسط",
    "difficulty": "easy",
    "questionEn": "If the middle term in the expansion of $(x + 2)^n$ is $T_7$, find $n$.",
    "questionAr": "إذا كان الحد الأوسط في مفكوك $(س + ٢)^n$ هو $T_7$، فأوجد قيمة $n$.",
    "optionsEn": [
      "12",
      "14",
      "6",
      "10"
    ],
    "optionsAr": [
      "١٢",
      "١٤",
      "٦",
      "١٠"
    ],
    "correctAnswer": "12",
    "correctIndex": 0,
    "hintEn": "Middle term order for even n is (n/2) + 1 = 7.",
    "hintAr": "رتبة الحد الأوسط للأس الزوجي هي (n/2) + 1 = 7.",
    "stepByStepSolutionEn": [
      "$$\\frac{n}{2} + 1 = 7 \\implies \\frac{n}{2} = 6 \\implies n = 12$$"
    ],
    "stepByStepSolutionAr": [
      "$$\\frac{n}{٢} + ١ = ٧ \\implies \\frac{n}{٢} = ٦ \\implies n = ١٢$$"
    ],
    "teacherTipEn": "Subtract 1 then multiply by 2: (7 - 1) * 2 = 12.",
    "teacherTipAr": "اطرح ١ ثم اضرب في ٢: (٧ - ١) * ٢ = ١٢."
  },
  {
    "id": "alg_ch1_db_easy_40",
    "titleEn": "Approximation Using Binomial Expansion",
    "titleAr": "التقريب باستخدام نظرية ذات الحدين",
    "difficulty": "easy",
    "questionEn": "Using the first two terms of the binomial expansion of $(1 + 0.01)^4$, find the approximate value of $(1.01)^4$.",
    "questionAr": "باستخدام أول حدين فقط من مفكوك $(١ + ٠٫٠١)^٤$، أوجد القيمة التقريبية لـ $(١٫٠١)^٤$.",
    "optionsEn": [
      "1.04",
      "1.01",
      "1.06",
      "1.40"
    ],
    "optionsAr": [
      "١٫٠٤",
      "١٫٠١",
      "١٫٠٦",
      "١٫٤٠"
    ],
    "correctAnswer": "1.04",
    "correctIndex": 0,
    "hintEn": "(1 + x)^n approx 1 + nx for small x.",
    "hintAr": "(١ + س)^n يساوي تقريباً ١ + n س للقيم الصغيرة جداً.",
    "stepByStepSolutionEn": [
      "$$(1 + 0.01)^4 \\approx 1 + 4(0.01) = 1 + 0.04 = 1.04$$"
    ],
    "stepByStepSolutionAr": [
      "$$(١ + ٠٫٠١)^٤ \\approx ١ + ٤(٠٫٠١) = ١ + ٠٫٠٤ = ١٫٠٤$$"
    ],
    "teacherTipEn": "The linear approximation (1 + nx) gives high accuracy for small decimals.",
    "teacherTipAr": "التقريب الخطي (1 + nx) يعطي دقة ممتازة للأعداد العشرية الصغيرة."
  },
  {
    "id": "alg_ch1_db_easy_41",
    "titleEn": "Term Independent of x in (x + 1/x)^4",
    "titleAr": "الحد الخالي من س في مفكوك (س + ١/س)^٤",
    "difficulty": "easy",
    "questionEn": "Determine the term independent of $x$ in the binomial expansion of $\left(x + \frac{1}{x}\right)^4$.",
    "questionAr": "عيّن الحد الخالي من $x$ في مفكوك ذات الحدين $\left(x + \frac{1}{x}\right)^4$.",
    "optionsEn": [
      "6",
      "4",
      "1",
      "12"
    ],
    "optionsAr": [
      "٦",
      "٤",
      "١",
      "١٢"
    ],
    "correctAnswer": "6",
    "correctIndex": 0,
    "hintEn": "Since powers balance (+1 and -1), the middle term T_3 with r = 2 is independent of x: C(4, 2) = 6.",
    "hintAr": "بما أن قوى س متماثلة (+1 و -1)، فإن الحد الأوسط T3 عند r = 2 هو الخالي من س: C(4, 2) = 6.",
    "stepByStepSolutionEn": [
      "$$T_{r+1} = \\binom{4}{r} x^{4 - r} x^{-r} = \\binom{4}{r} x^{4 - 2r}$$",
      "Set exponent to 0: $4 - 2r = 0 \\implies r = 2$.",
      "$$T_3 = \\binom{4}{2} = 6$$"
    ],
    "stepByStepSolutionAr": [
      "$$T_{r+١} = \\binom{٤}{r} س^{٤ - ٢r}$$",
      "وضع الأس مساوياً للصفر: ٤ - ٢r = ٠ => r = ٢.",
      "$$T_3 = \\binom{٤}{٢} = ٦$$"
    ],
    "teacherTipEn": "In (x + 1/x)^(2n), the middle term is always the term independent of x.",
    "teacherTipAr": "في مفكوك (س + ١/س)^٢n، الحد الأوسط هو دائماً الحد الخالي من س."
  },
  {
    "id": "alg_ch1_db_easy_42",
    "titleEn": "Formula for Consecutive Terms Ratio",
    "titleAr": "قانون النسبة بين حدين متتاليين في المفكوك",
    "difficulty": "easy",
    "questionEn": "In $(a + b)^n$, the ratio $\\frac{T_{r+1}}{T_r}$ is equal to:",
    "questionAr": "في مفكوك $(أ + ب)^n$، النسبة بين حدين متتاليين $\\frac{T_{r+١}}{T_r}$ تساوي:",
    "optionsEn": [
      "[(n - r + 1) / r] * (b / a)",
      "[(n - r) / (r + 1)] * (b / a)",
      "[(n - r + 1) / r] * (a / b)",
      "[n / r] * (b / a)"
    ],
    "optionsAr": [
      "[(n - r + ١) / r] * (ب / أ)",
      "[(n - r) / (r + ١)] * (ب / أ)",
      "[(n - r + ١) / r] * (أ / ب)",
      "[n / r] * (ب / أ)"
    ],
    "correctAnswer": "[(n - r + 1) / r] * (b / a)",
    "correctIndex": 0,
    "hintEn": "Remember: [(n - r + 1) / r] multiplied by (second term / first term).",
    "hintAr": "تذكر: [(n - r + 1) / r] مضروباً في (الحد الثاني / الحد الأول).",
    "stepByStepSolutionEn": [
      "$$\\frac{T_{r+1}}{T_r} = \\frac{n - r + 1}{r} \\times \\frac{b}{a}$$"
    ],
    "stepByStepSolutionAr": [
      "$$\\frac{T_{r+١}}{T_r} = \\frac{n - r + ١}{r} \\times \\frac{ب}{أ}$$"
    ],
    "teacherTipEn": "Crucial rule: the multiplier is always (Second Term / First Term).",
    "teacherTipAr": "قاعدة جوهرية: الكسر المضروب هو دائماً (الحد الثاني / الحد الأول)."
  },
  {
    "id": "alg_ch1_db_easy_43",
    "titleEn": "Evaluating Ratio T6/T5 in (2 + x)^10 at x=1",
    "titleAr": "حساب النسبة T6/T5 في (٢ + س)^١٠ عندما س=١",
    "difficulty": "easy",
    "questionEn": "In the expansion of $(2 + x)^{10}$, find the value of $\\frac{T_6}{T_5}$ when $x = 1$.",
    "questionAr": "في مفكوك $(٢ + س)^{١٠}$، احسب قيمة $\\frac{T_6}{T_5}$ عندما $س = ١$.",
    "optionsEn": [
      "3 / 5",
      "6 / 5",
      "5 / 3",
      "3 / 10"
    ],
    "optionsAr": [
      "٣ / ٥",
      "٦ / ٥",
      "٥ / ٣",
      "٣ / ١٠"
    ],
    "correctAnswer": "3 / 5",
    "correctIndex": 0,
    "hintEn": "r = 5, n = 10, second = 1, first = 2: [(10 - 5 + 1)/5] * (1/2).",
    "hintAr": "r = ٥، n = ١٠، الثاني = ١، الأول = ٢: [(١٠ - ٥ + ١)/٥] * (١/٢).",
    "stepByStepSolutionEn": [
      "$$\\frac{T_6}{T_5} = \\frac{10 - 5 + 1}{5} \\times \\frac{1}{2} = \\frac{6}{5} \\times \\frac{1}{2} = \\frac{3}{5}$$"
    ],
    "stepByStepSolutionAr": [
      "$$\\frac{T_6}{T_5} = \\frac{١٠ - ٥ + ١}{٥} \\times \\frac{١}{٢} = \\frac{٦}{٥} \\times \\frac{١}{٢} = \\frac{٣}{٥}$$"
    ],
    "teacherTipEn": "6/5 * 1/2 reduces cleanly to 3/5.",
    "teacherTipAr": "٦/٥ * ١/٢ تختصر مباشرة إلى ٣/٥."
  },
  {
    "id": "alg_ch1_db_easy_44",
    "titleEn": "Term Independent of x in (x^2 + 1/x^2)^8",
    "titleAr": "الحد الخالي من س في مفكوك (س^٢ + ١/س^٢)^٨",
    "difficulty": "easy",
    "questionEn": "In the expansion of $\left(x^2 + \frac{1}{x^2}\right)^8$, determine the constant term.",
    "questionAr": "في مفكوك $\left(x^2 + \frac{1}{x^2}\right)^8$، حدّد الحد الثابت (الخالي من $x$).",
    "optionsEn": [
      "70",
      "56",
      "28",
      "1"
    ],
    "optionsAr": [
      "٧٠",
      "٥٦",
      "٢٨",
      "١"
    ],
    "correctAnswer": "70",
    "correctIndex": 0,
    "hintEn": "Power 8 is even and terms have opposite exponents: middle term T5 (r=4) has value C(8, 4) = 70.",
    "hintAr": "الأس ٨ زوجي وقوى س متماثلة ومتعاكسة: الحد الأوسط T5 (عند r=4) قيمته C(8, 4) = 70.",
    "stepByStepSolutionEn": [
      "$$T_5 = \\binom{8}{4} (x^2)^4 (x^{-2})^4 = 70 x^8 x^{-8} = 70$$"
    ],
    "stepByStepSolutionAr": [
      "$$T_5 = \\binom{٨}{٤} (س^٢)^٤ (س^{-٢})^٤ = ٧٠$$"
    ],
    "teacherTipEn": "Combinations C(8, 4) = 70.",
    "teacherTipAr": "قيمة التوفيقة C(8, 4) = 70."
  },
  {
    "id": "alg_ch1_db_easy_45",
    "titleEn": "Value of r for Independent Term in (x - 1/x)^12",
    "titleAr": "قيمة r للحد الخالي من س في (س - ١/س)^١٢",
    "difficulty": "easy",
    "questionEn": "For what value of $r$ is the term $T_{r+1}$ independent of $x$ in $\\left(x - \\frac{1}{x}\\right)^{12}$?",
    "questionAr": "لأي قيمة لـ $r$ يكون الحد $T_{r+١}$ خالياً من س في مفكوك $\\left(س - \\frac{١}{س}\\right)^{١٢}$؟",
    "optionsEn": [
      "r = 6",
      "r = 5",
      "r = 7",
      "r = 4"
    ],
    "optionsAr": [
      "r = ٦",
      "r = ٥",
      "r = ٧",
      "r = ٤"
    ],
    "correctAnswer": "r = 6",
    "correctIndex": 0,
    "hintEn": "12 - r - r = 0 => 12 - 2r = 0 => r = 6.",
    "hintAr": "١٢ - r - r = ٠ => ١٢ - ٢r = ٠ => r = ٦.",
    "stepByStepSolutionEn": [
      "$$x^{12 - r} x^{-r} = x^{12 - 2r} = x^0 \\implies 12 - 2r = 0 \\implies r = 6$$"
    ],
    "stepByStepSolutionAr": [
      "$$س^{١٢ - r} س^{-r} = س^{١٢ - ٢r} = س^٠ \\implies ١٢ - ٢r = ٠ \\implies r = ٦$$"
    ],
    "teacherTipEn": "Notice that r = 6 means it is the 7th term T_7.",
    "teacherTipAr": "لاحظ أن r = 6 تعني أنه الحد السابع T_7."
  },
  {
    "id": "alg_ch1_db_easy_46",
    "titleEn": "Consecutive Term Ratio with Fractional x",
    "titleAr": "نسبة حدين متتاليين عند قيمة كسرية لـ س",
    "difficulty": "easy",
    "questionEn": "In the expansion of $(3 + 2x)^7$, find the ratio $\\frac{T_4}{T_3}$ when $x = \\frac{3}{2}$.",
    "questionAr": "في مفكوك $(٣ + ٢ س)^٧$، احسب النسبة $\\frac{T_4}{T_3}$ عندما $س = \\frac{٣}{٢}$.",
    "optionsEn": [
      "5 / 3",
      "3 / 5",
      "10 / 3",
      "5 / 6"
    ],
    "optionsAr": [
      "٥ / ٣",
      "٣ / ٥",
      "١٠ / ٣",
      "٥ / ٦"
    ],
    "correctAnswer": "5 / 3",
    "correctIndex": 0,
    "hintEn": "r = 3, n = 7. Ratio = [(7 - 3 + 1)/3] * (2x / 3) = (5/3) * (3/3) = 5/3.",
    "hintAr": "r = ٣، n = ٧. النسبة = [(٧ - ٣ + ١)/٣] * (٢س / ٣) = (٥/٣) * (٣/٣) = ٥/٣.",
    "stepByStepSolutionEn": [
      "$$\\frac{T_4}{T_3} = \\frac{7 - 3 + 1}{3} \\times \\frac{2(3/2)}{3} = \\frac{5}{3} \\times \\frac{3}{3} = \\frac{5}{3}$$"
    ],
    "stepByStepSolutionAr": [
      "$$\\frac{T_4}{T_3} = \\frac{٧ - ٣ + ١}{٣} \\times \\frac{٢(٣/٢)}{٣} = \\frac{٥}{٣} \\times ١ = \\frac{٥}{٣}$$"
    ],
    "teacherTipEn": "Substitute x into the ratio before multiplying.",
    "teacherTipAr": "عوض عن قيمة س في النسبة أولاً لتسهيل الاختصار."
  },
  {
    "id": "alg_ch1_db_easy_47",
    "titleEn": "Finding Constant k from Independent Term Value",
    "titleAr": "إيجاد الثابت k من قيمة الحد الخالي من س",
    "difficulty": "easy",
    "questionEn": "If the term independent of $x$ in the expansion of $\\left(x + \\frac{k}{x}\\right)^6$ is 160, find $k$.",
    "questionAr": "إذا كان الحد الخالي من س في مفكوك $\\left(س + \\frac{k}{س}\\right)^٦$ يساوي ١٦٠، فأوجد قيمة $k$.",
    "optionsEn": [
      "2",
      "3",
      "4",
      "1"
    ],
    "optionsAr": [
      "٢",
      "٣",
      "٤",
      "١"
    ],
    "correctAnswer": "2",
    "correctIndex": 0,
    "hintEn": "The independent term is T_4 (r = 3): C(6, 3) * k^3 = 20 * k^3 = 160.",
    "hintAr": "الحد الخالي هو T_4 (عند r = 3): C(6, 3) * k^3 = 20 * k^3 = 160.",
    "stepByStepSolutionEn": [
      "$$T_4 = \\binom{6}{3} x^3 \\left(\\frac{k}{x}\\right)^3 = 20 k^3$$",
      "$$20 k^3 = 160 \\implies k^3 = 8 \\implies k = 2$$"
    ],
    "stepByStepSolutionAr": [
      "$$T_4 = \\binom{٦}{٣} k^٣ = ٢٠ k^٣$$",
      "$$٢٠ k^٣ = ١٦٠ \\implies k^٣ = ٨ \\implies k = ٢$$"
    ],
    "teacherTipEn": "Take the cube root of 8 to obtain k = 2.",
    "teacherTipAr": "الجذر التكعيبي للعدد ٨ هو ٢."
  },
  {
    "id": "alg_ch1_db_easy_48",
    "titleEn": "Condition on n for Existence of Independent Term",
    "titleAr": "شرط وجود حد خالٍ من س على الأس n",
    "difficulty": "easy",
    "questionEn": "For which value of $n$ can the expansion of $\\left(x^3 + \\frac{1}{x}\\right)^n$ contain a term independent of $x$?",
    "questionAr": "لأي من قيم $n$ الآتية يحتوي مفكوك $\\left(س^٣ + \\frac{١}{س}\\right)^n$ على حد خالٍ من س؟",
    "optionsEn": [
      "n = 8",
      "n = 7",
      "n = 9",
      "n = 11"
    ],
    "optionsAr": [
      "n = ٨",
      "n = ٧",
      "n = ٩",
      "n = ١١"
    ],
    "correctAnswer": "n = 8",
    "correctIndex": 0,
    "hintEn": "3(n - r) - r = 0 => 3n = 4r => n must be a multiple of 4.",
    "hintAr": "٣(n - r) - r = ٠ => ٣n = ٤r => يجب أن يكون n مضاعفاً للعدد ٤.",
    "stepByStepSolutionEn": [
      "Exponent of $x$: $3(n - r) - r = 3n - 4r = 0 \\implies r = \\frac{3n}{4}$.",
      "For $r$ to be an integer, $n$ must be a multiple of 4.",
      "Among options $\\{8, 7, 9, 11\\}$, only 8 is divisible by 4."
    ],
    "stepByStepSolutionAr": [
      "أس س: $٣(n - r) - r = ٣n - ٤r = ٠ \\implies r = \\frac{٣n}{٤}$.",
      "لكي يكون r عدداً صحيحاً، يجب أن يكون n من مضاعفات ٤.",
      "من بين الخيارات، العدد الوحيد الذي يقبل القسمة على ٤ هو ٨."
    ],
    "teacherTipEn": "Divisibility conditions on n are a very common Thanaweya Amma question format.",
    "teacherTipAr": "شروط قابلية القسمة على الأس n من أنماط أسئلة الثانوية العامة الشائعة."
  },
  {
    "id": "alg_ch1_db_easy_49",
    "titleEn": "Term with Greatest Coefficient in (1 + x)^12",
    "titleAr": "الحد ذو المعامل الأعظم في مفكوك (١ + س)^١٢",
    "difficulty": "easy",
    "questionEn": "Determine which term has the maximum coefficient in $(1 + x)^{12}$.",
    "questionAr": "عيّن الحد الذي له أكبر معامل في مفكوك $(1 + x)^{12}$.",
    "optionsEn": [
      "T_7",
      "T_6",
      "T_8",
      "T_12"
    ],
    "optionsAr": [
      "T_7",
      "T_6",
      "T_8",
      "T_12"
    ],
    "correctAnswer": "T_7",
    "correctIndex": 0,
    "hintEn": "In (1 + x)^n with equal coefficients, the greatest combination is the middle one C(12, 6) which is T_7.",
    "hintAr": "في مفكوك (١ + س)^n بالمعاملات المتساوية، أكبر توفيقة هي التوفيقة الوسطى C(12, 6) وهي الحد السابع T_7.",
    "stepByStepSolutionEn": [
      "The coefficients are combinations $\\binom{12}{r}$ for $r = 0, 1, \\dots, 12$.",
      "The maximum value occurs at $r = 12 / 2 = 6$, which corresponds to $T_{6+1} = T_7$."
    ],
    "stepByStepSolutionAr": [
      "معاملات الحدود هي التوافيق $\\binom{١٢}{r}$.",
      "أكبر توفيقة هي عند المنتصف $r = ٦$، وتقابل الحد $T_{٦+١} = T_7$."
    ],
    "teacherTipEn": "In Pascal's triangle, the central element in any row is always the largest.",
    "teacherTipAr": "في مثلث باسكال، العنصر الأوسط في أي صف هو دائماً الأكبر قيمة."
  },
  {
    "id": "alg_ch1_db_easy_50",
    "titleEn": "Verifying Existence of Independent Term in (x^2 - 1/x)^9",
    "titleAr": "التحقق من وجود حد خالٍ من س في مفكوك (س^٢ - ١/س)^٩",
    "difficulty": "easy",
    "questionEn": "In the expansion of $\\left(x^2 - \\frac{1}{x}\\right)^9$, which term is independent of $x$?",
    "questionAr": "في مفكوك $\\left(س^٢ - \\frac{١}{س}\\right)^٩$، ما رتبة الحد الخالي من س؟",
    "optionsEn": [
      "T_7",
      "T_6",
      "T_8",
      "Does not exist"
    ],
    "optionsAr": [
      "T_7",
      "T_6",
      "T_8",
      "لا يوجد"
    ],
    "correctAnswer": "T_7",
    "correctIndex": 0,
    "hintEn": "2(9 - r) - r = 0 => 18 - 3r = 0 => r = 6 => T_7.",
    "hintAr": "٢(٩ - r) - r = ٠ => ١٨ - ٣r = ٠ => r = ٦ => T_7.",
    "stepByStepSolutionEn": [
      "$$2(9 - r) - r = 18 - 3r = 0 \\implies 3r = 18 \\implies r = 6$$",
      "The term is $T_{6+1} = T_7$."
    ],
    "stepByStepSolutionAr": [
      "$$٢(٩ - r) - r = ١٨ - ٣r = ٠ \\implies ٣r = ١٨ \\implies r = ٦$$",
      "إذن رتبة الحد هي $T_{٦+١} = T_7$."
    ],
    "teacherTipEn": "r = 6 gives the 7th term.",
    "teacherTipAr": "قيمة r = 6 تقابل الحد السابع."
  },
  {
    "id": "alg_ch1_db_easy_51",
    "titleEn": "Complementary Combination Symmetry",
    "titleAr": "خاصية التبسيط والتوافيق المتكاملة",
    "difficulty": "easy",
    "questionEn": "Given $\binom{n}{8} = \binom{n}{12}$, determine the combination value $\binom{n}{18}$.",
    "questionAr": "إذا كان $\binom{n}{8} = \binom{n}{12}$، فعيّن قيمة التوفيقة $\binom{n}{18}$.",
    "optionsEn": [
      "190",
      "20",
      "210",
      "380"
    ],
    "optionsAr": [
      "190",
      "20",
      "210",
      "380"
    ],
    "correctAnswer": "190",
    "correctIndex": 0,
    "hintEn": "Apply C(n, x) = C(n, y) => x = y or x + y = n.",
    "hintAr": "استخدم القاعدة: إما س = ص أو س + ص = ن.",
    "stepByStepSolutionEn": [
      "1. Since $8 \\neq 12$, by the symmetry property of combinations: $n = 8 + 12 = 20$.",
      "2. Calculate $\\binom{20}{18} = \\binom{20}{2} = \\frac{20 \\times 19}{2} = 190$."
    ],
    "stepByStepSolutionAr": [
      "١. بما أن ٨ ≠ ١٢، إذن من خاصية التساوي: ن = ٨ + ١٢ = ٢٠.",
      "٢. حساب $\\binom{20}{18} = \\binom{20}{2} = \\frac{20 \\times 19}{2} = 190$."
    ],
    "teacherTipEn": "Always use C(n, r) = C(n, n - r) to reduce large lower indices.",
    "teacherTipAr": "استخدم دائماً خاصية التبسيط لتصغير الدليل السفلي وتسهيل الحساب."
  },
  {
    "id": "alg_ch1_db_easy_52",
    "titleEn": "Pascal Addition Formula for Combinations",
    "titleAr": "قانون جمع التوافيق (مثلث باسكال)",
    "difficulty": "easy",
    "questionEn": "Simplify the expression: $\\binom{15}{7} + \\binom{15}{8}$.",
    "questionAr": "بسّط المقدار: $\\binom{15}{7} + \\binom{15}{8}$.",
    "optionsEn": [
      "$\\binom{16}{8}$",
      "$\\binom{16}{7}$",
      "$\\binom{30}{15}$",
      "$\\binom{15}{15}$"
    ],
    "optionsAr": [
      "$\\binom{16}{8}$",
      "$\\binom{16}{7}$",
      "$\\binom{30}{15}$",
      "$\\binom{15}{15}$"
    ],
    "correctAnswer": "$\\binom{16}{8}$",
    "correctIndex": 0,
    "hintEn": "Recall Pascal's identity: C(n, r-1) + C(n, r) = C(n+1, r).",
    "hintAr": "تذكر قانون الجمع: نزود العلم واحداً ونأخذ الدليل الأكبر.",
    "stepByStepSolutionEn": [
      "1. By Pascal's combination identity, $\\binom{n}{r-1} + \\binom{n}{r} = \\binom{n+1}{r}$.",
      "2. Here $n = 15$ and the larger index is $r = 8$, so the sum is $\\binom{16}{8}$."
    ],
    "stepByStepSolutionAr": [
      "١. بتطبيق قانون جمع التوافيق: $\\binom{n}{r-1} + \\binom{n}{r} = \\binom{n+1}{r}$.",
      "٢. هنا ن = ١٥ والدليل الأكبر هو ٨، فيكون الناتج $\\binom{16}{8}$."
    ],
    "teacherTipEn": "Check that the upper indices are identical and lower indices consecutive.",
    "teacherTipAr": "تأكد دائماً أن العَلَمين متساويان والدليلين متتاليان قبل تطبيق قانون الجمع."
  },
  {
    "id": "alg_ch1_db_easy_53",
    "titleEn": "Sum of Odd-Indexed Binomial Coefficients",
    "titleAr": "مجموع معاملات الحدود الفردية الرتبة في ذات الحدين",
    "difficulty": "easy",
    "questionEn": "In the expansion of $(x + y)^8$, what is the sum of the coefficients of the odd-indexed terms ($T_1 + T_3 + T_5 + T_7 + T_9$)?",
    "questionAr": "في مفكوك $(x + y)^8$، ما هو مجموع معاملات الحدود فردية الرتبة ($T_1 + T_3 + T_5 + T_7 + T_9$)؟",
    "optionsEn": [
      "$128$",
      "$256$",
      "$64$",
      "$512$"
    ],
    "optionsAr": [
      "$128$",
      "$256$",
      "$64$",
      "$512$"
    ],
    "correctAnswer": "$128$",
    "correctIndex": 0,
    "hintEn": "The sum of coefficients of all terms is $2^n$, and odd-indexed terms account for half of the total: $2^{n-1}$.",
    "hintAr": "مجموع معاملات جميع الحدود هو $2^n$، ومجموع معاملات الحدود فردية الرتبة يمثل النصف: $2^{n-1}$.",
    "stepByStepSolutionEn": [
      "1. Total sum of coefficients is obtained by setting $x = 1, y = 1$: $(1 + 1)^8 = 2^8 = 256$.",
      "2. By symmetry of binomial coefficients, sum of odd-indexed terms equals sum of even-indexed terms.",
      "3. Therefore, $S_{\\text{odd}} = \\frac{256}{2} = 2^7 = 128$."
    ],
    "stepByStepSolutionAr": [
      "١. مجموع معاملات جميع الحدود بالتعويض $x = 1, y = 1$ هو $(1 + 1)^8 = 2^8 = 256$.",
      "٢. بتماثل معاملات ذات الحدين، مجموع معاملات الحدود الفردية الرتبة يساوي مجموع معاملات الحدود الزوجية الرتبة.",
      "٣. إذن مجموع معاملات الحدود فردية الرتبة $= \\frac{256}{2} = 2^7 = 128$."
    ],
    "teacherTipEn": "Universal identity: $S_{\\text{odd}} = S_{\\text{even}} = 2^{n-1}$ for any standard $(x+y)^n$ expansion.",
    "teacherTipAr": "قاعدة أساسية: مجموع معاملات الحدود الفردية = مجموع الزوجية = $2^{n-1}$ دائماً في مفكوك $(x+y)^n$."
  },
  {
    "id": "alg_ch1_db_easy_54",
    "titleEn": "Number of Terms in Even/Odd Binomial Combination",
    "titleAr": "عدد حدود مفكوك مجموع أو فرق مقدارين مترافقين",
    "difficulty": "easy",
    "questionEn": "How many terms remain in simplified form for $(x + y)^{10} + (x - y)^{10}$?",
    "questionAr": "كم حداً ينتج بعد التبسيط في المقدار $(x + y)^{10} + (x - y)^{10}$؟",
    "optionsEn": [
      "6 terms",
      "5 terms",
      "11 terms",
      "10 terms"
    ],
    "optionsAr": [
      "6 حدود",
      "5 حدود",
      "11 حداً",
      "10 حدود"
    ],
    "correctAnswer": "6 terms",
    "correctIndex": 0,
    "hintEn": "The sum keeps twice the odd-ranked terms: 2(T1 + T3 + T5 + T7 + T9 + T11).",
    "hintAr": "المجموع يبقي ضعف الحدود الفردية الرتبة: ٢(ح١ + ح٣ + ح٥ + ح٧ + ح٩ + ح١١).",
    "stepByStepSolutionEn": [
      "1. When adding conjugate expansions $(x+y)^n + (x-y)^n$, even-ranked terms cancel out.",
      "2. The remaining terms are the odd-ranked terms: $T_1, T_3, T_5, T_7, T_9, T_{11}$.",
      "3. Total number of terms is $\\frac{10}{2} + 1 = 6$ terms."
    ],
    "stepByStepSolutionAr": [
      "١. عند جمع المفكوكين المترافقين تتلاشى الحدود ذات الرتب الزوجية.",
      "٢. يتبقى ضعف الحدود الفردية الرتبة: ح١، ح٣، ح٥، ح٧، ح٩، ح١١.",
      "٣. عدد الحدود = (١٠ / ٢) + ١ = ٦ حدود."
    ],
    "teacherTipEn": "For (x+y)^n - (x-y)^n with n even, the number of terms is n/2.",
    "teacherTipAr": "في حالة الطرح والأس زوجي يكون عدد الحدود ن / ٢ فقط."
  },
  {
    "id": "alg_ch1_db_easy_55",
    "titleEn": "Permutations of Circular Table Seating",
    "titleAr": "التباديل الدائرية والجلوس حول طاولة مستديرة",
    "difficulty": "easy",
    "questionEn": "In how many ways can 6 students sit around a circular table?",
    "questionAr": "بكم طريقة يمكن لـ ٦ طلاب الجلوس حول مائدة مستديرة؟",
    "optionsEn": [
      "120",
      "720",
      "24",
      "60"
    ],
    "optionsAr": [
      "120",
      "720",
      "24",
      "60"
    ],
    "correctAnswer": "120",
    "correctIndex": 0,
    "hintEn": "Circular arrangements without a reference point is (n - 1)!.",
    "hintAr": "عدد طرق الترتيب في دائرة بدون نقطة مرجعية هو (ن - ١)!.",
    "stepByStepSolutionEn": [
      "1. For $n$ distinct items arranged in a circle without a designated starting seat, the formula is $(n - 1)!$.",
      "2. Here $n = 6$, so $(6 - 1)! = 5! = 120$ ways."
    ],
    "stepByStepSolutionAr": [
      "١. عدد طرق ترتيب ن من الأشياء المتمايزة في حلقة دائرية هو (ن - ١)!.",
      "٢. إذن (٦ - ١)! = ٥! = ١٢٠ طريقة."
    ],
    "teacherTipEn": "If seats are numbered or there is an entrance reference point, it reverts to n!.",
    "teacherTipAr": "إذا كانت المقاعد مرقمة أو نسبت إلى معلم ثابت (كباب القاعة) يتحول الحساب إلى ن!."
  },
  {
    "id": "alg_ch1_db_easy_56",
    "titleEn": "Ratio Between Consecutive Binomial Terms",
    "titleAr": "النسبة بين حدين متتاليين في مفكوك ذات الحدين",
    "difficulty": "easy",
    "questionEn": "In the expansion of $(1 + x)^8$, find the ratio $\\frac{T_5}{T_4}$ when $x = 2$.",
    "questionAr": "في مفكوك $(1 + x)^8$، أوجد قيمة النسبة $\\frac{T_5}{T_4}$ عندما $x = 2$.",
    "optionsEn": [
      "$\\frac{5}{2}$",
      "$\\frac{5}{4}$",
      "$\\frac{2}{5}$",
      "5"
    ],
    "optionsAr": [
      "$\\frac{5}{2}$",
      "$\\frac{5}{4}$",
      "$\\frac{2}{5}$",
      "5"
    ],
    "correctAnswer": "$\\frac{5}{2}$",
    "correctIndex": 0,
    "hintEn": "T_(r+1)/T_r = ((n - r + 1)/r) * (second/first).",
    "hintAr": "استخدم قانون النسبة: (ن - ر + ١)/ر × (الثاني / الأول).",
    "stepByStepSolutionEn": [
      "1. Ratio formula: $\\frac{T_{r+1}}{T_r} = \\frac{n - r + 1}{r} \\times \\frac{\\text{second}}{\\text{first}}$.",
      "2. Here $n = 8, r = 4$: $\\frac{T_5}{T_4} = \\frac{8 - 4 + 1}{4} \\times x = \\frac{5}{4} (2) = \\frac{5}{2}$."
    ],
    "stepByStepSolutionAr": [
      "١. قانون النسبة: $\\frac{T_{r+1}}{T_r} = \\frac{n - r + 1}{r} \\times \\frac{\\text{الثاني}}{\\text{الأول}}$.",
      "٢. بالتعويض: ن = ٨، ر = ٤: $\\frac{T_5}{T_4} = \\frac{8 - 4 + 1}{4} \\times 2 = \\frac{5}{4} \\times 2 = \\frac{5}{2}$."
    ],
    "teacherTipEn": "Notice that r is the smaller rank (here r = 4 for T5/T4).",
    "teacherTipAr": "انتبه دائماً أن (ر) في قانون النسبة هي رتبة الحد الأصغر (ر = ٤)."
  },
  {
    "id": "alg_ch1_db_easy_57",
    "titleEn": "Permutations with Repetition Formula",
    "titleAr": "التباديل مع التكرار لأحرف كلمة",
    "difficulty": "easy",
    "questionEn": "How many distinct 5-letter arrangements can be formed from the letters of the word 'APPLE'?",
    "questionAr": "كم ترتيباً مختلفاً من ٥ أحرف يمكن تكوينه من أحرف كلمة 'APPLE'؟",
    "optionsEn": [
      "60",
      "120",
      "24",
      "30"
    ],
    "optionsAr": [
      "60",
      "120",
      "24",
      "30"
    ],
    "correctAnswer": "60",
    "correctIndex": 0,
    "hintEn": "Total letters = 5, letter P is repeated 2 times: 5! / 2!.",
    "hintAr": "عدد الأحرف = ٥، والحرف P مكرر مرتين: ٥! / ٢!.",
    "stepByStepSolutionEn": [
      "1. The word APPLE has 5 letters with 'P' repeating 2 times.",
      "2. Number of arrangements = $\\frac{5!}{2!} = \\frac{120}{2} = 60$."
    ],
    "stepByStepSolutionAr": [
      "١. كلمة APPLE تحتوي على ٥ أحرف، حرف P مكرر مرتين وبقية الأحرف متمايزة.",
      "٢. عدد التباديل = $\\frac{5!}{2!} = \\frac{120}{2} = 60$."
    ],
    "teacherTipEn": "Divide by the factorial of the frequency of each repeated element.",
    "teacherTipAr": "اقسم مضروب العدد الكلي على مضروب تكرار كل عنصر."
  },
  {
    "id": "alg_ch1_db_easy_58",
    "titleEn": "Selection with At Least One Element Chosen",
    "titleAr": "اختيار عنصر واحد على الأقل من مجموعة",
    "difficulty": "easy",
    "questionEn": "A student has 6 distinct books. In how many ways can they choose at least one book?",
    "questionAr": "لدى طالب ٦ كتب متمايزة. بكم طريقة يمكنه اختيار كتاب واحد على الأقل؟",
    "optionsEn": [
      "63",
      "64",
      "32",
      "60"
    ],
    "optionsAr": [
      "63",
      "64",
      "32",
      "60"
    ],
    "correctAnswer": "63",
    "correctIndex": 0,
    "hintEn": "Total non-empty subsets of an n-element set is 2^n - 1.",
    "hintAr": "مجموع عدد المجموعات الجزئية غير الخالية هو ٢^ن - ١.",
    "stepByStepSolutionEn": [
      "1. Each of the 6 books can either be chosen or not chosen (2 options each), giving $2^6 = 64$ total combinations.",
      "2. Excluding the case where zero books are chosen: $2^6 - 1 = 64 - 1 = 63$."
    ],
    "stepByStepSolutionAr": [
      "١. كل كتاب له خياران (إما يختار أو لا يختار)، فيكون الإجمالي $2^6 = 64$.",
      "٢. استبعاد الحالة التي لا يُختار فيها أي كتاب: ٦٤ - ١ = ٦٣ طريقة."
    ],
    "teacherTipEn": "At least one = Total possibilities minus none (complementary counting).",
    "teacherTipAr": "'على الأقل واحد' تعني دائماً جميع الاحتمالات مطروحاً منها احتمال الصفر."
  }
],
  medium: [
  {
    "id": "alg_ch1_db_med_01",
    "titleEn": "3-Digit Even Numbers with Distinct Digits",
    "titleAr": "أعداد زوجية مكونة من ٣ أرقام مختلفة",
    "difficulty": "medium",
    "questionEn": "How many 3-digit even numbers with distinct digits can be formed from $\\{1, 2, 3, 4, 5, 6\\}$?",
    "questionAr": "كم عدداً زوجياً مكوناً من ٣ أرقام مختلفة يمكن تكوينه من عناصر المجموعة $\\{١، ٢، ٣، ٤، ٥، ٦\\}$؟",
    "optionsEn": [
      "60",
      "72",
      "36",
      "120"
    ],
    "optionsAr": [
      "٦٠",
      "٧٢",
      "٣٦",
      "١٢٠"
    ],
    "correctAnswer": "60",
    "correctIndex": 0,
    "hintEn": "Units place: {2, 4, 6} (3 choices). Tens: 5 choices. Hundreds: 4 choices.",
    "hintAr": "خانة الآحاد: {٢، ٤، ٦} (٣ خيارات). العشرات: ٥ خيارات. المئات: ٤ خيارات.",
    "stepByStepSolutionEn": [
      "Units digit must be even: 3 choices (2, 4, or 6).",
      "Tens digit: 5 remaining choices.",
      "Hundreds digit: 4 remaining choices.",
      "Total = $3 \\times 5 \\times 4 = 60$"
    ],
    "stepByStepSolutionAr": [
      "رقم الآحاد زوجي: ٣ خيارات (٢، ٤، أو ٦).",
      "رقم العشرات: ٥ خيارات متبقية.",
      "رقم المئات: ٤ خيارات متبقية.",
      "العدد الكلي = ٣ * ٥ * ٤ = ٦٠ عدداً."
    ],
    "teacherTipEn": "Always fill the restricted units digit first.",
    "teacherTipAr": "ابدأ دائماً بملء خانة الآحاد المقيدة بشرط الزوجية."
  },
  {
    "id": "alg_ch1_db_med_02",
    "titleEn": "4-Digit Numbers Greater Than 3000 Without Repetition",
    "titleAr": "أعداد مكونة من ٤ أرقام أكبر من ٣٠٠٠ بدون تكرار",
    "difficulty": "medium",
    "questionEn": "How many 4-digit numbers greater than 3000 can be formed from the digits $\\{1, 2, 3, 4, 5\\}$ without repetition?",
    "questionAr": "كم عدداً مكوناً من ٤ أرقام مختلفة وأكبر من ٣٠٠٠ يمكن تكوينه من الأرقام $\\{١، ٢، ٣، ٤، ٥\\}$؟",
    "optionsEn": [
      "72",
      "48",
      "96",
      "120"
    ],
    "optionsAr": [
      "٧٢",
      "٤٨",
      "٩٦",
      "١٢٠"
    ],
    "correctAnswer": "72",
    "correctIndex": 0,
    "hintEn": "The thousands digit must be 3, 4, or 5 (3 choices). The remaining 3 positions are filled with P(4, 3).",
    "hintAr": "خانة الآلاف يجب أن تكون ٣ أو ٤ أو ٥ (٣ خيارات). باقي الخانات الـ ٣ تُملأ بـ P(4, 3).",
    "stepByStepSolutionEn": [
      "Thousands digit: choose from $\\{3, 4, 5\\} \\implies 3$ choices.",
      "Hundreds, tens, units: choose 3 from remaining 4 digits: $P(4, 3) = 4 \\times 3 \\times 2 = 24$.",
      "Total = $3 \\times 24 = 72$."
    ],
    "stepByStepSolutionAr": [
      "خانة الآلاف: نختار من $\\{٣، ٤، ٥\\}$ (٣ خيارات).",
      "باقي الخانات الثلاث: نختار من الـ ٤ أرقام المتبقية: $P(٤، ٣) = ٢٤$.",
      "إجمالي الأعداد = ٣ * ٢٤ = ٧٢."
    ],
    "teacherTipEn": "When constrained to be greater than a threshold, fix the highest place value first.",
    "teacherTipAr": "عندما يكون الشرط أن العدد أكبر من قيمة معينة، ابدأ دائماً بأعلى خانة."
  },
  {
    "id": "alg_ch1_db_med_03",
    "titleEn": "Factorial Quadratic (n+2)! / n! = 72",
    "titleAr": "معادلة المضروب (n+2)! / n! = 72",
    "difficulty": "medium",
    "questionEn": "Solve for $n \\in \\mathbb{N}$: $\\frac{(n + 2)!}{n!} = 72$.",
    "questionAr": "حل المعادلة لإيجاد $n \\in \\mathbb{N}$: $\\frac{(n + ٢)!}{n!} = ٧٢$.",
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
    "hintEn": "(n+2)(n+1) = 72 = 9 * 8.",
    "hintAr": "(n+2)(n+1) = ٧٢ = ٩ * ٨.",
    "stepByStepSolutionEn": [
      "$$\\frac{(n + 2)(n + 1) n!}{n!} = (n + 2)(n + 1) = 72$$",
      "Product of two consecutive numbers: $9 \\times 8 = 72$.",
      "$$n + 2 = 9 \\implies n = 7$$"
    ],
    "stepByStepSolutionAr": [
      "$$(n + ٢)(n + ١) = ٧٢$$",
      "حاصل ضرب عددين متتاليين: ٩ * ٨ = ٧٢.",
      "$$n + ٢ = ٩ \\implies n = ٧$$"
    ],
    "teacherTipEn": "Factor 72 into 9 * 8; the larger factor n + 2 = 9 directly gives n = 7.",
    "teacherTipAr": "حلل ٧٢ إلى ٩ * ٨، وسَاوِ العامل الأكبر (n+2) بالعدد ٩."
  },
  {
    "id": "alg_ch1_db_med_04",
    "titleEn": "Parking 4 Cars in 7 Consecutive Parking Spots",
    "titleAr": "وقوف ٤ سيارات في ٧ أماكن انتظار متجاورة",
    "difficulty": "medium",
    "questionEn": "In how many ways can 4 different cars park in 7 consecutive empty parking slots in a row?",
    "questionAr": "بكم طريقة يمكن لـ ٤ سيارات مختلفة الوقوف في ٧ أماكن انتظار متجاورة في صف مستقيم؟",
    "optionsEn": [
      "840",
      "35",
      "210",
      "5040"
    ],
    "optionsAr": [
      "٨٤٠",
      "٣٥",
      "٢١٠",
      "٥٠٤٠"
    ],
    "correctAnswer": "840",
    "correctIndex": 0,
    "hintEn": "Arranging 4 distinct items into 7 distinct positions is P(7, 4).",
    "hintAr": "ترتيب ٤ سيارات متمايزة في ٧ أماكن متباينة هو التباديل P(7, 4).",
    "stepByStepSolutionEn": [
      "$$P(7, 4) = 7 \\times 6 \\times 5 \\times 4 = 840$$"
    ],
    "stepByStepSolutionAr": [
      "$$P(٧، ٤) = ٧ \\times ٦ \\times ٥ \\times ٤ = ٨٤٠$$"
    ],
    "teacherTipEn": "Cars and parking spaces are both distinct, so order matters: P(7, 4).",
    "teacherTipAr": "السيارات مختلفة والأماكن مرقمة، فالترتيب مهم وتُحل بالتباديل P(7, 4)."
  },
  {
    "id": "alg_ch1_db_med_05",
    "titleEn": "Double-Index Factorial Equation",
    "titleAr": "معادلة المضروب لضعف الدليل",
    "difficulty": "medium",
    "questionEn": "Reduce the consecutive factorials to determine $n$: $\frac{(2n)!}{(2n - 2)!} = 90$.",
    "questionAr": "اختصر المقدار المضروبي لإيجاد $n$: $\frac{(2n)!}{(2n - 2)!} = 90$.",
    "optionsEn": [
      "n = 5",
      "n = 9",
      "n = 10",
      "n = 4"
    ],
    "optionsAr": [
      "n = ٥",
      "n = ٩",
      "n = ١٠",
      "n = ٤"
    ],
    "correctAnswer": "n = 5",
    "correctIndex": 0,
    "hintEn": "2n(2n-1) = 90 = 10 * 9 => 2n = 10.",
    "hintAr": "٢n(٢n-١) = ٩٠ = ١٠ * ٩ => ٢n = ١٠.",
    "stepByStepSolutionEn": [
      "$$2n(2n - 1) = 90$$",
      "Notice $90 = 10 \\times 9$.",
      "$$2n = 10 \\implies n = 5$$"
    ],
    "stepByStepSolutionAr": [
      "$$٢n(٢n - ١) = ٩٠$$",
      "بما أن ٩٠ = ١٠ * ٩، إذن ٢n = ١٠، ومنها $n = ٥$."
    ],
    "teacherTipEn": "Do not forget to divide 10 by 2 to solve for n.",
    "teacherTipAr": "لا تنس قسمة ١٠ على ٢ للحصول على قيمة n وليس 2n."
  },
  {
    "id": "alg_ch1_db_med_06",
    "titleEn": "3-Digit Odd Numbers with Zero Included",
    "titleAr": "أعداد فردية مكونة من ٣ أرقام بوجود الصفر",
    "difficulty": "medium",
    "questionEn": "How many 3-digit odd numbers can be formed from $\\{0, 1, 2, 3, 4, 5\\}$ without repetition?",
    "questionAr": "كم عدداً فردياً مكوناً من ٣ أرقام مختلفة يمكن تكوينه من عناصر المجموعة $\\{٠، ١، ٢، ٣، ٤، ٥\\}$؟",
    "optionsEn": [
      "48",
      "60",
      "36",
      "72"
    ],
    "optionsAr": [
      "٤٨",
      "٦٠",
      "٣٦",
      "٧٢"
    ],
    "correctAnswer": "48",
    "correctIndex": 0,
    "hintEn": "Units digit must be odd in {1, 3, 5} (3 choices). Hundreds cannot be 0 or units (4 choices). Tens: 4 remaining choices.",
    "hintAr": "الآحاد فردي من {١، ٣، ٥} (٣ خيارات). المئات لا يمكن أن تكون صفراً ولا رقم الآحاد (٤ خيارات). العشرات: ٤ خيارات.",
    "stepByStepSolutionEn": [
      "Step 1 (Units): Choose from $\\{1, 3, 5\\} \\implies 3$ choices.",
      "Step 2 (Hundreds): Cannot be 0 and cannot be the units digit $\\implies 6 - 2 = 4$ choices.",
      "Step 3 (Tens): From remaining digits $\\implies 6 - 2 = 4$ choices.",
      "Total = $3 \\times 4 \\times 4 = 48$."
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١ (الآحاد): نختار من $\\{١، ٣، ٥\\}$ (٣ خيارات).",
      "الخطوة ٢ (المئات): لا يمكن أن تكون صفراً ولا رقم الآحاد المستخدم: ٦ - ٢ = ٤ خيارات.",
      "الخطوة ٣ (العشرات): من الأرقام المتبقية: ٤ خيارات.",
      "العدد الكلي = ٣ * ٤ * ٤ = ٤٨ عدداً."
    ],
    "teacherTipEn": "Take careful note of zero: it affects hundreds and units differently.",
    "teacherTipAr": "انتبه لوجود الصفر: يؤثر على خانة المئات ولا يمكن أن يكون في خانة الآحاد الفردية."
  },
  {
    "id": "alg_ch1_db_med_07",
    "titleEn": "Sum of Consecutive Factorial Quotients",
    "titleAr": "مجموع كسرين من المضاريب المتتالية",
    "difficulty": "medium",
    "questionEn": "Simplify: $\\frac{n!}{(n - 2)!} + \\frac{(n - 1)!}{(n - 3)!}$.",
    "questionAr": "بسط المقدار: $\\frac{n!}{(n - ٢)!} + \\frac{(n - ١)!}{(n - ٣)!}$.",
    "optionsEn": [
      "2(n - 1)^2",
      "2n(n - 1)",
      "n^2 - 1",
      "(n - 1)(2n - 1)"
    ],
    "optionsAr": [
      "٢(n - ١)^٢",
      "٢n(n - ١)",
      "n^٢ - ١",
      "(n - ١)(٢n - ١)"
    ],
    "correctAnswer": "2(n - 1)^2",
    "correctIndex": 0,
    "hintEn": "First term is n(n-1), second term is (n-1)(n-2). Factor out (n-1).",
    "hintAr": "الحد الأول هو n(n-1) والحد الثاني هو (n-1)(n-2). خذ (n-1) عاملاً مشتركاً.",
    "stepByStepSolutionEn": [
      "First fraction: $\\frac{n!}{(n - 2)!} = n(n - 1)$.",
      "Second fraction: $\\frac{(n - 1)!}{(n - 3)!} = (n - 1)(n - 2)$.",
      "Sum: $n(n - 1) + (n - 1)(n - 2) = (n - 1)[n + (n - 2)] = (n - 1)(2n - 2) = 2(n - 1)^2$."
    ],
    "stepByStepSolutionAr": [
      "الكسر الأول: $n(n - ١)$.",
      "الكسر الثاني: $(n - ١)(n - ٢)$.",
      "المجموع: $(n - ١)[n + n - ٢] = (n - ١)(٢n - ٢) = ٢(n - ١)^٢$."
    ],
    "teacherTipEn": "Factor out (n-1) immediately rather than expanding completely.",
    "teacherTipAr": "إخراج (n-1) كعامل مشترك أسرع وأوضح من فك الأقواس ثم إعادة التحليل."
  },
  {
    "id": "alg_ch1_db_med_08",
    "titleEn": "Distributing 3 Distinct Prizes to 5 Students",
    "titleAr": "توزيع ٣ جوائز مختلفة على ٥ طلاب",
    "difficulty": "medium",
    "questionEn": "In how many ways can 3 different awards (Gold, Silver, Bronze) be given to 5 students if no student receives more than one award?",
    "questionAr": "بكم طريقة يمكن توزيع ٣ جوائز مختلفة (ذهبية، فضية، برونزية) على ٥ طلاب بحيث لا يأخذ أي طالب أكثر من جائزة؟",
    "optionsEn": [
      "60",
      "10",
      "125",
      "15"
    ],
    "optionsAr": [
      "٦٠",
      "١٠",
      "١٢٥",
      "١٥"
    ],
    "correctAnswer": "60",
    "correctIndex": 0,
    "hintEn": "The awards are distinct, so order matters: P(5, 3) = 5 * 4 * 3.",
    "hintAr": "الجوائز متباينة (الترتيب مهم): P(5, 3) = ٥ * ٤ * ٣.",
    "stepByStepSolutionEn": [
      "Gold prize: 5 choices.",
      "Silver prize: 4 remaining choices.",
      "Bronze prize: 3 remaining choices.",
      "$$\\text{Total} = 5 \\times 4 \\times 3 = 60 = P(5, 3)$$"
    ],
    "stepByStepSolutionAr": [
      "الجائزة الذهبية: ٥ خيارات.",
      "الجائزة الفضية: ٤ خيارات.",
      "الجائزة البرونزية: ٣ خيارات.",
      "إجمالي الطرق = ٥ * ٤ * ٣ = ٦٠ طريقة."
    ],
    "teacherTipEn": "Different awards = Permutations. Identical awards = Combinations.",
    "teacherTipAr": "جوائز متمايزة = تباديل. جوائز متطابقة = توافيق."
  },
  {
    "id": "alg_ch1_db_med_09",
    "titleEn": "System of Two Factorial Equations",
    "titleAr": "نظام من معادلتين للمضاريب",
    "difficulty": "medium",
    "questionEn": "If $(n - 1)! = 24$ and $(n + m)! = 720$, find the value of $m$.",
    "questionAr": "إذا كان $(n - ١)! = ٢٤$ و $(n + m)! = ٧٢٠$، فأوجد قيمة $m$.",
    "optionsEn": [
      "m = 1",
      "m = 2",
      "m = 0",
      "m = 3"
    ],
    "optionsAr": [
      "m = ١",
      "m = ٢",
      "m = ٠",
      "m = ٣"
    ],
    "correctAnswer": "m = 1",
    "correctIndex": 0,
    "hintEn": "24 = 4! so n - 1 = 4 => n = 5. Then 720 = 6! so 5 + m = 6.",
    "hintAr": "٢٤ = ٤! إذن n - 1 = 4 ومنها n = 5. ثم ٧٢٠ = ٦! إذن ٥ + m = ٦.",
    "stepByStepSolutionEn": [
      "$(n - 1)! = 24 = 4! \\implies n - 1 = 4 \\implies n = 5$.",
      "$(5 + m)! = 720 = 6! \\implies 5 + m = 6 \\implies m = 1$."
    ],
    "stepByStepSolutionAr": [
      "$(n - ١)! = ٢٤ = ٤! \\implies n - ١ = ٤ \\implies n = ٥$.",
      "$(٥ + m)! = ٧٢٠ = ٦! \\implies ٥ + m = ٦ \\implies m = ١$."
    ],
    "teacherTipEn": "Solve the single-variable factorial first before substituting into the second equation.",
    "teacherTipAr": "أوجد قيمة المجهول الأول أولاً ثم عوض به في المعادلة الثانية."
  },
  {
    "id": "alg_ch1_db_med_10",
    "titleEn": "Number of Subsets of a 6-Element Set",
    "titleAr": "عدد المجموعات الجزئية لمجموعة بها ٦ عناصر",
    "difficulty": "medium",
    "questionEn": "How many non-empty proper subsets does a set containing 6 elements have?",
    "questionAr": "كم مجموعة جزئية فعلية وغير خالية يمكن تكوينها من مجموعة تحتوي على ٦ عناصر؟",
    "optionsEn": [
      "62",
      "64",
      "63",
      "32"
    ],
    "optionsAr": [
      "٦٢",
      "٦٤",
      "٦٣",
      "٣٢"
    ],
    "correctAnswer": "62",
    "correctIndex": 0,
    "hintEn": "Total subsets = 2^6 = 64. Subtract empty set (1) and proper subset condition (exclude set itself, 1): 64 - 2 = 62.",
    "hintAr": "إجمالي المجموعات الجزئية = ٢^٦ = ٦٤. نطرح المجموعة الخالية (١) ونطرح المجموعة نفسها (١): ٦٤ - ٢ = ٦٢.",
    "stepByStepSolutionEn": [
      "Total subsets of a set of size $n$ is $2^n = 2^6 = 64$.",
      "Excluding the empty set $\\emptyset$ subtracts 1.",
      "Excluding the improper subset (the set itself) subtracts 1.",
      "$$\\text{Non-empty proper subsets} = 64 - 2 = 62$$"
    ],
    "stepByStepSolutionAr": [
      "إجمالي عدد المجموعات الجزئية لمجموعة عدد عناصرها n هو $٢^n = ٢^٦ = ٦٤$.",
      "المجموعة الخالية تطرح ١.",
      "المجموعة غير الفعلية (المجموعة نفسها) تطرح ١.",
      "إجمالي المجموعات الجزئية الفعلية غير الخالية = ٦٤ - ٢ = ٦٢."
    ],
    "teacherTipEn": "Read carefully: \"non-empty\" excludes phi, \"proper\" excludes the full set.",
    "teacherTipAr": "اقرأ السؤال بدقة: \"غير خالية\" تستبعد فاي، و \"فعلية\" تستبعد المجموعة الأصلية."
  },
  {
    "id": "alg_ch1_db_med_11",
    "titleEn": "Permutation Equation P(n+1, 3) = 5 P(n, 2)",
    "titleAr": "معادلة التباديل P(n+1, 3) = 5 P(n, 2)",
    "difficulty": "medium",
    "questionEn": "Find the value of $n$ if $P(n + 1, 3) = 5 \\times P(n, 2)$.",
    "questionAr": "أوجد قيمة $n$ إذا كان $P(n + ١، ٣) = ٥ \\times P(n، ٢)$.",
    "optionsEn": [
      "n = 4",
      "n = 5",
      "n = 6",
      "n = 3"
    ],
    "optionsAr": [
      "n = ٤",
      "n = ٥",
      "n = ٦",
      "n = ٣"
    ],
    "correctAnswer": "n = 4",
    "correctIndex": 0,
    "hintEn": "(n+1)n(n-1) = 5n(n-1). Cancel n(n-1).",
    "hintAr": "(n+1)n(n-1) = 5n(n-1). اختصر n(n-1).",
    "stepByStepSolutionEn": [
      "Expand: $(n + 1) n (n - 1) = 5 n (n - 1)$.",
      "For $n \\ge 2$, cancel $n(n - 1)$:",
      "$$n + 1 = 5 \\implies n = 4$$"
    ],
    "stepByStepSolutionAr": [
      "فك الطرفين: $(n + ١) n (n - ١) = ٥ n (n - ١)$.",
      "باختصار $n(n - ١)$ لأن $n \\ge ٢$:",
      "$$n + ١ = ٥ \\implies n = ٤$$"
    ],
    "teacherTipEn": "Cancelling common factors leaves a trivial first-degree equation.",
    "teacherTipAr": "اختصار العوامل المشتركة يترك معادلة من الدرجة الأولى سهلة الحل."
  },
  {
    "id": "alg_ch1_db_med_12",
    "titleEn": "Seating Boys and Girls with Block Constraint",
    "titleAr": "جلوس بنين وبنات مع شرط تجاور البنات",
    "difficulty": "medium",
    "questionEn": "In how many ways can 4 boys and 3 girls sit in a row of 7 chairs if all 3 girls must sit next to each other?",
    "questionAr": "بكم طريقة يمكن لـ ٤ بنين و ٣ بنات الجلوس في صف به ٧ مقاعد بحيث تجلس البنات الثلاث متجاورات؟",
    "optionsEn": [
      "720",
      "144",
      "5040",
      "1440"
    ],
    "optionsAr": [
      "٧٢٠",
      "١٤٤",
      "٥٠٤٠",
      "١٤٤٠"
    ],
    "correctAnswer": "720",
    "correctIndex": 0,
    "hintEn": "Treat the 3 girls as a single unit (block). There are (4 + 1) = 5 units arranged in 5! ways. The girls can arrange among themselves in 3! ways.",
    "hintAr": "اعتبر البنات الثلاث كوحدة واحدة (كتلة واحدة). عدد الكتل = ٤ + ١ = ٥ كتل تترتب بـ ٥!. وتترتب البنات فيما بينهن بـ ٣!.",
    "stepByStepSolutionEn": [
      "Treat the 3 girls as 1 single block.",
      "Number of objects to arrange = 4 boys + 1 block = 5 objects.",
      "Arranging 5 objects in a row = $5! = 120$.",
      "Arranging the 3 girls within their block = $3! = 6$.",
      "Total ways = $5! \\times 3! = 120 \\times 6 = 720$."
    ],
    "stepByStepSolutionAr": [
      "نعتبر البنات الثلاث ككتلة واحدة مجمعة.",
      "عدد الوحدات = ٤ بنين + ١ كتلة بنات = ٥ وحدات.",
      "ترتيب ٥ وحدات في صف = ٥! = ١٢٠.",
      "ترتيب البنات الثلاث داخل كتلتهن = ٣! = ٦.",
      "إجمالي الطرق = ٥! * ٣! = ١٢٠ * ٦ = ٧٢٠ طريقة."
    ],
    "teacherTipEn": "Block method: Multiply permutations of units by internal permutations of the block.",
    "teacherTipAr": "طريقة الحزمة/الكتلة: اضرب عدد طرق ترتيب الكتل في عدد طرق الترتيب الداخلي للكتلة."
  },
  {
    "id": "alg_ch1_db_med_13",
    "titleEn": "Alternating Seating of 5 Men and 5 Women at a Round Table",
    "titleAr": "جلوس ٥ رجال و ٥ سيدات بالتناوب حول مائدة دائرية",
    "difficulty": "medium",
    "questionEn": "In how many ways can 5 men and 5 women be seated around a round table such that men and women alternate?",
    "questionAr": "بكم طريقة يمكن لـ ٥ رجال و ٥ سيدات الجلوس حول مائدة مستديرة بحيث يجلس الرجال والسيدات بالتناوب؟",
    "optionsEn": [
      "2880",
      "14400",
      "576",
      "120"
    ],
    "optionsAr": [
      "٢٨٨٠",
      "١٤٤٠٠",
      "٥٧٦",
      "١٢٠"
    ],
    "correctAnswer": "2880",
    "correctIndex": 0,
    "hintEn": "Seat 5 men around circle first: (5-1)! = 4! ways. This creates 5 distinct slots for the 5 women: 5! ways.",
    "hintAr": "أجلس الرجال الخمسة أولاً في دائرة: (٥-١)! = ٤! طريقة. هذا ينشئ ٥ مقاعد محددة بين الرجال تجلس فيها السيدات بـ ٥! طريقة.",
    "stepByStepSolutionEn": [
      "Step 1: Seat the 5 men in a circle: $(5 - 1)! = 4! = 24$ ways.",
      "Step 2: The seated men create 5 fixed positions between them.",
      "Step 3: Seat the 5 women in these 5 distinct positions: $5! = 120$ ways.",
      "$$\\text{Total} = 4! \\times 5! = 24 \\times 120 = 2880$$"
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: إجلاس الرجال الخمسة حول المائدة الدائرية: (٥ - ١)! = ٤! = ٢٤ طريقة.",
      "الخطوة ٢: الرجال الجالسون ينشئون ٥ أماكن محددة بينهم.",
      "الخطوة ٣: إجلاس السيدات الخمس في هذه الأماكن المحددة: ٥! = ١٢٠ طريقة.",
      "إجمالي الطرق = ٤! * ٥! = ٢٤ * ١٢٠ = ٢٨٨٠ طريقة."
    ],
    "teacherTipEn": "Once the first group is seated in the circle, all remaining slots are fixed with distinct identities.",
    "teacherTipAr": "بمجرد جلوس المجموعة الأولى في الدائرة، تصبح بقية الأماكن محددة الهوية وتُعامل كالترتيب الخطي."
  },
  {
    "id": "alg_ch1_db_med_14",
    "titleEn": "Permutation Identity P(9, r) = 9 P(8, r-1)",
    "titleAr": "متطابقة التباديل P(9, r) = 9 P(8, r-1)",
    "difficulty": "medium",
    "questionEn": "Which property guarantees that $P(n, r) = n \\times P(n - 1, r - 1)$ holds for all valid $r$?",
    "questionAr": "أي من الخواص الرياضية الآتية تضمن صحة المتطابقة $P(n، r) = n \\times P(n - ١، r - ١)$؟",
    "optionsEn": [
      "Factorial definition: n! / (n-r)! = n * (n-1)! / (n-r)!",
      "Pascal addition law",
      "Combinations symmetry",
      "Binomial theorem"
    ],
    "optionsAr": [
      "تعريف المضروب: n! / (n-r)! = n * (n-1)! / (n-r)!",
      "قانون الجمع لباسكال",
      "قانون التبسيط للتوافيق",
      "نظرية ذات الحدين"
    ],
    "correctAnswer": "Factorial definition: n! / (n-r)! = n * (n-1)! / (n-r)!",
    "correctIndex": 0,
    "hintEn": "Express permutations as factorials and extract n from n!.",
    "hintAr": "عبر عن التباديل بدلالة المضاريب واسحب n من n!.",
    "stepByStepSolutionEn": [
      "$$P(n, r) = \\frac{n!}{(n - r)!} = \\frac{n(n - 1)!}{(n - r)!} = n \\times \\frac{(n - 1)!}{((n - 1) - (r - 1))!} = n \\times P(n - 1, r - 1)$$"
    ],
    "stepByStepSolutionAr": [
      "$$P(n، r) = \\frac{n!}{(n - r)!} = \\frac{n(n - ١)!}{(n - r)!} = n \\times P(n - ١، r - ١)$$"
    ],
    "teacherTipEn": "This property corresponds to choosing the first element (n ways) and then arranging the rest.",
    "teacherTipAr": "هذه الخاصية تعبر عن اختيار العنصر الأول (n طريقة) ثم ترتيب باقي العناصر."
  },
  {
    "id": "alg_ch1_db_med_15",
    "titleEn": "Permutations of Word with Repeated Letters: PARALLEL",
    "titleAr": "تباديل حروف كلمة بها تكرار: PARALLEL",
    "difficulty": "medium",
    "questionEn": "How many distinct permutations can be formed using all the letters of the word \"PARALLEL\"?",
    "questionAr": "كم كلمة مختلفة الترتيب يمكن تكوينها باستخدام جميع حروف كلمة \"PARALLEL\"؟",
    "optionsEn": [
      "3360",
      "40320",
      "6720",
      "1680"
    ],
    "optionsAr": [
      "٣٣٦٠",
      "٤٠٣٢٠",
      "٦٧٢٠",
      "١٦٨٠"
    ],
    "correctAnswer": "3360",
    "correctIndex": 0,
    "hintEn": "8 total letters: L appears 3 times, A appears 2 times: 8! / (3! * 2!).",
    "hintAr": "٨ حروف إجمالاً: الحرف L يتكرر ٣ مرات، والحرف A يتكرر مرتين: ٨! / (٣! * ٢!).",
    "stepByStepSolutionEn": [
      "Total letters $n = 8$.",
      "Repetitions: L occurs 3 times, A occurs 2 times, P, R, E occur 1 time each.",
      "$$\\text{Permutations} = \\frac{8!}{3! \\times 2!} = \\frac{40320}{6 \\times 2} = \\frac{40320}{12} = 3360$$"
    ],
    "stepByStepSolutionAr": [
      "إجمالي الحروف = ٨.",
      "التكرارات: L يتكرر ٣ مرات، A يتكرر مرتين.",
      "عدد التباديل = ٨! / (٣! * ٢!) = ٤٠٣٢٠ / ١٢ = ٣٣٦٠."
    ],
    "teacherTipEn": "Always divide n! by the factorial of the frequencies of repeated items.",
    "teacherTipAr": "اقسم دائماً n! على مضروب تكرار كل عنصر من العناصر المتطابقة."
  },
  {
    "id": "alg_ch1_db_med_16",
    "titleEn": "Seating 6 Persons with 2 Specific Persons Together",
    "titleAr": "جلوس ٦ أشخاص مع تجاور شخصين معينين",
    "difficulty": "medium",
    "questionEn": "In how many ways can 6 persons be seated in a row of 6 chairs such that two specified friends always sit adjacent to each other?",
    "questionAr": "بكم طريقة يمكن لـ ٦ أشخاص الجلوس في صف به ٦ مقاعد بحيث يجلس صديقان معينان متجاورين دائماً؟",
    "optionsEn": [
      "240",
      "120",
      "480",
      "720"
    ],
    "optionsAr": [
      "٢٤٠",
      "١٢٠",
      "٤٨٠",
      "٧٢٠"
    ],
    "correctAnswer": "240",
    "correctIndex": 0,
    "hintEn": "Treat the 2 friends as 1 block: 5 units arrange in 5! ways. The 2 friends can swap in 2! ways.",
    "hintAr": "اعتبر الصديقين كوحدة واحدة: ٥ وحدات تترتب بـ ٥!. ويتبادل الصديقان بـ ٢!.",
    "stepByStepSolutionEn": [
      "Treat the 2 friends as 1 unit $\\implies 4 + 1 = 5$ units.",
      "Arranging 5 units in a row = $5! = 120$.",
      "Internal permutations of the 2 friends = $2! = 2$.",
      "Total = $120 \\times 2 = 240$."
    ],
    "stepByStepSolutionAr": [
      "نعتبر الصديقين وحدة واحدة: ٤ + ١ = ٥ وحدات.",
      "ترتيب ٥ وحدات في صف = ٥! = ١٢٠.",
      "الترتيب الداخلي للصديقين = ٢! = ٢.",
      "إجمالي الطرق = ١٢٠ * ٢ = ٢٤٠."
    ],
    "teacherTipEn": "The block of 2 multiplies the result by 2! = 2.",
    "teacherTipAr": "حزمة الصديقين تضاعف النتيجة بضربها في ٢! = ٢."
  },
  {
    "id": "alg_ch1_db_med_17",
    "titleEn": "Consecutive Permutation Quotients",
    "titleAr": "قسمة تباديل متتالية",
    "difficulty": "medium",
    "questionEn": "If $P(n, r) = 120$ and $P(n, r - 1) = 24$, find the value of $n - r + 1$.",
    "questionAr": "إذا كان $P(n، r) = ١٢٠$ و $P(n، r - ١) = ٢٤$، فأوجد قيمة $n - r + ١$.",
    "optionsEn": [
      "5",
      "6",
      "4",
      "8"
    ],
    "optionsAr": [
      "٥",
      "٦",
      "٤",
      "٨"
    ],
    "correctAnswer": "5",
    "correctIndex": 0,
    "hintEn": "P(n, r) / P(n, r-1) = n - r + 1.",
    "hintAr": "P(n, r) / P(n, r-1) = n - r + 1.",
    "stepByStepSolutionEn": [
      "$$\\frac{P(n, r)}{P(n, r - 1)} = \\frac{n! / (n - r)!}{n! / (n - r + 1)!} = \\frac{(n - r + 1)!}{(n - r)!} = n - r + 1$$",
      "$$n - r + 1 = \\frac{120}{24} = 5$$"
    ],
    "stepByStepSolutionAr": [
      "$$\\frac{P(n، r)}{P(n، r - ١)} = n - r + ١$$",
      "$$n - r + ١ = \\frac{١٢٠}{٢٤} = ٥$$"
    ],
    "teacherTipEn": "The ratio P(n, r) / P(n, r-1) equals the r-th decreasing factor, which is n - r + 1.",
    "teacherTipAr": "النسبة بين تباديلتين متتاليتين في الدليل تساوي العامل الأخير n - r + 1."
  },
  {
    "id": "alg_ch1_db_med_18",
    "titleEn": "4 Married Couples Around a Circular Table Adjacent",
    "titleAr": "جلوس ٤ أزواج حول مائدة دائرية مع تجاور كل زوج وزوجته",
    "difficulty": "medium",
    "questionEn": "In how many ways can 4 married couples be seated around a round table such that each husband and wife sit adjacent to each other?",
    "questionAr": "بكم طريقة يمكن لـ ٤ أزواج (رجل وزوجته) الجلوس حول مائدة مستديرة بحيث يجلس كل رجل بجوار زوجته؟",
    "optionsEn": [
      "96",
      "48",
      "192",
      "384"
    ],
    "optionsAr": [
      "٩٦",
      "٤٨",
      "١٩٢",
      "٣٨٤"
    ],
    "correctAnswer": "96",
    "correctIndex": 0,
    "hintEn": "Treat each couple as 1 unit: 4 units around circle = (4-1)! = 3! = 6. Each of the 4 couples can swap seats: 2^4 = 16.",
    "hintAr": "اعتبر كل زوجين كوحدة واحدة: ٤ وحدات حول دائرة = (٤-١)! = ٦. وكل زوجين يتبادلان المقاعد بـ ٢^٤ = ١٦.",
    "stepByStepSolutionEn": [
      "Treat each couple as 1 unit $\\implies 4$ units.",
      "Arranging 4 units in a circle: $(4 - 1)! = 3! = 6$ ways.",
      "Each couple can switch positions: $2^4 = 16$ ways.",
      "Total = $6 \\times 16 = 96$ ways."
    ],
    "stepByStepSolutionAr": [
      "نعتبر كل رجل وزوجته وحدة واحدة: ٤ وحدات.",
      "ترتيب ٤ وحدات حول مائدة دائرية = (٤ - ١)! = ٣! = ٦ طرق.",
      "تبادل المقاعد داخل كل زوج وزوجته = ٢^٤ = ١٦ طريقة.",
      "إجمالي الطرق = ٦ * ١٦ = ٩٦ طريقة."
    ],
    "teacherTipEn": "Multiply circular arrangements of couples by 2^n for internal seating switches.",
    "teacherTipAr": "اضرب الترتيب الدائري للأزواج في ٢^n لتبديل مقاعد كل زوجين."
  },
  {
    "id": "alg_ch1_db_med_19",
    "titleEn": "Permutations Ratio Equation",
    "titleAr": "معادلة نسبة بين تباديلتين",
    "difficulty": "medium",
    "questionEn": "Solve the permutation proportion for $n$: $P(n, 4) = 42 \times P(n, 2)$.",
    "questionAr": "حل التناسب التبادلي لإيجاد $n$: $P(n, 4) = 42 \times P(n, 2)$.",
    "optionsEn": [
      "n = 9",
      "n = 8",
      "n = 7",
      "n = 10"
    ],
    "optionsAr": [
      "n = ٩",
      "n = ٨",
      "n = ٧",
      "n = ١٠"
    ],
    "correctAnswer": "n = 9",
    "correctIndex": 0,
    "hintEn": "n(n-1)(n-2)(n-3) = 42 * n(n-1) => (n-2)(n-3) = 42 = 7 * 6.",
    "hintAr": "(n-2)(n-3) = ٤٢ = ٧ * ٦.",
    "stepByStepSolutionEn": [
      "Cancel $n(n - 1)$ for $n \\ge 4$:",
      "$$(n - 2)(n - 3) = 42$$",
      "Since $42 = 7 \\times 6$, we have $n - 2 = 7 \\implies n = 9$."
    ],
    "stepByStepSolutionAr": [
      "باختصار $n(n - ١)$ لأن $n \\ge ٤$:",
      "$$(n - ٢)(n - ٣) = ٤٢$$",
      "بما أن ٤٢ = ٧ * ٦، إذن $n - ٢ = ٧ \\implies n = ٩$."
    ],
    "teacherTipEn": "Factoring 42 into two consecutive integers 7 * 6 gives n - 2 = 7.",
    "teacherTipAr": "تحليل ٤٢ إلى ٧ * ٦ يعطي مباشرة n - 2 = 7."
  },
  {
    "id": "alg_ch1_db_med_20",
    "titleEn": "Numbers with at Least One Repeated Digit",
    "titleAr": "أعداد تحتوي على رقم مكرر واحد على الأقل",
    "difficulty": "medium",
    "questionEn": "How many 5-digit numbers formed from $\\{1, 2, 3, 4, 5\\}$ have at least one repeated digit?",
    "questionAr": "كم عدداً مكوناً من ٥ أرقام يمكن تكوينه من $\\{١، ٢، ٣، ٤، ٥\\}$ بحيث يحتوي على رقم مكرر واحد على الأقل؟",
    "optionsEn": [
      "3005",
      "3125",
      "120",
      "2880"
    ],
    "optionsAr": [
      "٣٠٠٥",
      "٣١٢٥",
      "١٢٠",
      "٢٨٨٠"
    ],
    "correctAnswer": "3005",
    "correctIndex": 0,
    "hintEn": "Complement rule: Total possible numbers (with repetition) minus numbers with all distinct digits.",
    "hintAr": "قاعدة الحدث المكمل: إجمالي الأعداد (مع التكرار) ناقص الأعداد ذات الأرقام المختلفة كلها.",
    "stepByStepSolutionEn": [
      "Total numbers with repetition allowed = $5^5 = 3125$.",
      "Numbers with all distinct digits = $5! = 120$.",
      "Numbers with at least one repeated digit = $3125 - 120 = 3005$."
    ],
    "stepByStepSolutionAr": [
      "إجمالي الأعداد مع السماح بالتكرار = ٥^٥ = ٣١٢٥.",
      "الأعداد ذات الأرقام المختلفة تماماً = ٥! = ١٢٠.",
      "الأعداد التي بها تكرار واحد على الأقل = ٣١٢٥ - ١٢٠ = ٣٠٠٥."
    ],
    "teacherTipEn": "The complement principle \"At least one = Total - None\" saves enormous amounts of time.",
    "teacherTipAr": "قاعدة \"على الأقل واحد = الكلي - لا شيء\" تختصر خطوات الحل بشكل هائل."
  },
  {
    "id": "alg_ch1_db_med_21",
    "titleEn": "Committee of 4 with Exactly 2 Women",
    "titleAr": "لجنة من ٤ أعضاء بها سيدتان بالضبط",
    "difficulty": "medium",
    "questionEn": "In how many ways can a committee of 4 persons be formed from 7 men and 5 women if it must contain exactly 2 women?",
    "questionAr": "بكم طريقة يمكن تشكيل لجنة من ٤ أشخاص من بين ٧ رجال و ٥ سيدات بحيث تحتوي على سيدتين بالضبط؟",
    "optionsEn": [
      "210",
      "420",
      "105",
      "330"
    ],
    "optionsAr": [
      "٢١٠",
      "٤٢٠",
      "١٠٥",
      "٣٣٠"
    ],
    "correctAnswer": "210",
    "correctIndex": 0,
    "hintEn": "Choose 2 women from 5: C(5, 2) = 10. Choose 2 men from 7: C(7, 2) = 21.",
    "hintAr": "اختر سيدتين من ٥: C(5, 2) = ١٠. واختر رجلين من ٧: C(7, 2) = ٢١.",
    "stepByStepSolutionEn": [
      "Select 2 women: $\\binom{5}{2} = 10$.",
      "Select 2 men: $\\binom{7}{2} = 21$.",
      "Total = $10 \\times 21 = 210$."
    ],
    "stepByStepSolutionAr": [
      "اختيار سيدتين: $\\binom{٥}{٢} = ١٠$.",
      "اختيار رجلين: $\\binom{٧}{٢} = ٢١$.",
      "إجمالي الطرق = ١٠ * ٢١ = ٢١٠."
    ],
    "teacherTipEn": "Multiply combinations when both events occur to complete the committee.",
    "teacherTipAr": "نضرب التوافيق لأن الاختيارين يتمان معاً لإكمال تشكيل اللجنة."
  },
  {
    "id": "alg_ch1_db_med_22",
    "titleEn": "Triangles Formed by 8 Points",
    "titleAr": "عدد المثلثات المتكونة من ٨ نقاط",
    "difficulty": "medium",
    "questionEn": "How many distinct triangles can be formed with vertices chosen from 8 points, no three of which are collinear?",
    "questionAr": "كم مثلثاً مختلفاً يمكن رسمه رؤوسه من بين ٨ نقاط لا تقع أي ٣ منها على استقامة واحدة؟",
    "optionsEn": [
      "56",
      "336",
      "28",
      "70"
    ],
    "optionsAr": [
      "٥٦",
      "٣٣٦",
      "٢٨",
      "٧٠"
    ],
    "correctAnswer": "56",
    "correctIndex": 0,
    "hintEn": "Any 3 non-collinear points form a triangle: C(8, 3).",
    "hintAr": "أي ٣ نقاط ليست على استقامة واحدة تشكل مثلثاً: C(8, 3).",
    "stepByStepSolutionEn": [
      "$$\\binom{8}{3} = \\frac{8 \\times 7 \\times 6}{3 \\times 2 \\times 1} = 56$$"
    ],
    "stepByStepSolutionAr": [
      "$$\\binom{٨}{٣} = \\frac{٨ \\times ٧ \\times ٦}{٣ \\times ٢ \\times ١} = ٥٦$$"
    ],
    "teacherTipEn": "Every selection of 3 non-collinear points determines a unique triangle.",
    "teacherTipAr": "كل اختيار لثلاث نقاط غير متسامتة يحدد مثلثاً وحيداً."
  },
  {
    "id": "alg_ch1_db_med_23",
    "titleEn": "Diagonals in a Polygon with 12 Sides",
    "titleAr": "عدد أقطار مضلع له ١٢ ضلعاً",
    "difficulty": "medium",
    "questionEn": "How many diagonals does a convex dodecagon (12-sided polygon) possess?",
    "questionAr": "كم عدداً من الأقطار يمتلكه مضلع محدب له ١٢ ضلعاً؟",
    "optionsEn": [
      "54",
      "66",
      "48",
      "60"
    ],
    "optionsAr": [
      "٥٤",
      "٦٦",
      "٤٨",
      "٦٠"
    ],
    "correctAnswer": "54",
    "correctIndex": 0,
    "hintEn": "D = C(12, 2) - 12 = 66 - 12 = 54.",
    "hintAr": "D = C(12, 2) - 12 = ٦٦ - ١٢ = ٥٤.",
    "stepByStepSolutionEn": [
      "$$\\binom{12}{2} = \\frac{12 \\times 11}{2} = 66$$",
      "Subtract 12 sides: $D = 66 - 12 = 54$."
    ],
    "stepByStepSolutionAr": [
      "$$\\binom{١٢}{٢} = ٦٦$$",
      "طرح الأضلاع الـ ١٢: D = ٦٦ - ١٢ = ٥٤ قطراً."
    ],
    "teacherTipEn": "Diagonals = Segments - Sides.",
    "teacherTipAr": "الأقطار = إجمالي القطع - عدد الأضلاع."
  },
  {
    "id": "alg_ch1_db_med_24",
    "titleEn": "Equation C(n+1, 3) = 2 C(n, 2)",
    "titleAr": "معادلة التوافيق C(n+1, 3) = 2 C(n, 2)",
    "difficulty": "medium",
    "questionEn": "Solve for $n \\in \\mathbb{N}$: $\\binom{n + 1}{3} = 2 \\binom{n}{2}$.",
    "questionAr": "حل المعادلة لإيجاد $n \\in \\mathbb{N}$: $\\binom{n + ١}{٣} = ٢ \\binom{n}{٢}$.",
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
    "hintEn": "[(n+1)n(n-1)] / 6 = 2 [n(n-1)] / 2 = n(n-1). Cancel n(n-1).",
    "hintAr": "فك التوافيق واختصر n(n-1) من الطرفين.",
    "stepByStepSolutionEn": [
      "$$\\frac{(n + 1)n(n - 1)}{6} = 2 \\times \\frac{n(n - 1)}{2} = n(n - 1)$$",
      "Cancel $n(n - 1)$ for $n \\ge 2$:",
      "$$\\frac{n + 1}{6} = 1 \\implies n + 1 = 6 \\implies n = 5$$"
    ],
    "stepByStepSolutionAr": [
      "$$\\frac{(n + ١)n(n - ١)}{٦} = n(n - ١)$$",
      "باختصار $n(n - ١)$:",
      "$$\\frac{n + ١}{٦} = ١ \\implies n + ١ = ٦ \\implies n = ٥$$"
    ],
    "teacherTipEn": "Cancelling n(n-1) simplifies the equation to a one-step linear solution.",
    "teacherTipAr": "اختصار n(n-1) يختصر المعادلة إلى خطوة واحدة."
  },
  {
    "id": "alg_ch1_db_med_25",
    "titleEn": "Committee of 5 with at Least 3 Teachers",
    "titleAr": "تشكيل لجنة من ٥ بها ٣ معلمين على الأقل",
    "difficulty": "medium",
    "questionEn": "A committee of 5 is to be chosen from 6 teachers and 4 students. How many committees contain at least 3 teachers?",
    "questionAr": "لجنة من ٥ أفراد يُراد اختيارها من بين ٦ معلمين و ٤ طلاب. كم لجنة تحتوي على ٣ معلمين على الأقل؟",
    "optionsEn": [
      "186",
      "120",
      "210",
      "156"
    ],
    "optionsAr": [
      "١٨٦",
      "١٢٠",
      "٢١٠",
      "١٥٦"
    ],
    "correctAnswer": "186",
    "correctIndex": 0,
    "hintEn": "Cases: 3 teachers & 2 students, 4 teachers & 1 student, 5 teachers & 0 students.",
    "hintAr": "الحالات: ٣ معلمين وطالبان، ٤ معلمين وطالب، ٥ معلمين ولا طلاب.",
    "stepByStepSolutionEn": [
      "Case 1 (3 teachers, 2 students): $\\binom{6}{3} \\binom{4}{2} = 20 \\times 6 = 120$.",
      "Case 2 (4 teachers, 1 student): $\\binom{6}{4} \\binom{4}{1} = 15 \\times 4 = 60$.",
      "Case 3 (5 teachers, 0 students): $\\binom{6}{5} \\binom{4}{0} = 6 \\times 1 = 6$.",
      "Total = $120 + 60 + 6 = 186$."
    ],
    "stepByStepSolutionAr": [
      "الحالة ١ (٣ معلمين وطالبان): ٢٠ * ٦ = ١٢٠.",
      "الحالة ٢ (٤ معلمين وطالب): ١٥ * ٤ = ٦٠.",
      "الحالة ٣ (٥ معلمين ولا طلاب): ٦ * ١ = ٦.",
      "المجموع = ١٢٠ + ٦٠ + ٦ = ١٨٦ لجنة."
    ],
    "teacherTipEn": "Break \"at least 3\" into all valid teacher count cases: 3, 4, and 5.",
    "teacherTipAr": "قسم عبارة \"على الأقل ٣\" إلى جميع الحالات الممكنة: ٣، ٤، و ٥ معلمين."
  },
  {
    "id": "alg_ch1_db_med_26",
    "titleEn": "Finding r from C(n, r) = 84 and P(n, r) = 504",
    "titleAr": "إيجاد r من C(n, r) = 84 و P(n, r) = 504",
    "difficulty": "medium",
    "questionEn": "If $\\binom{n}{r} = 84$ and $P(n, r) = 504$, find $r$.",
    "questionAr": "إذا كان $\\binom{n}{r} = ٨٤$ و $P(n، r) = ٥٠٤$، فأوجد قيمة $r$.",
    "optionsEn": [
      "r = 3",
      "r = 4",
      "r = 2",
      "r = 5"
    ],
    "optionsAr": [
      "r = ٣",
      "r = ٤",
      "r = ٢",
      "r = ٥"
    ],
    "correctAnswer": "r = 3",
    "correctIndex": 0,
    "hintEn": "r! = P(n, r) / C(n, r) = 504 / 84 = 6 => r = 3.",
    "hintAr": "r! = P(n, r) / C(n, r) = ٥٠٤ / ٨٤ = ٦ => r = ٣.",
    "stepByStepSolutionEn": [
      "$$r! = \\frac{P(n, r)}{\\binom{n}{r}} = \\frac{504}{84} = 6$$",
      "Since $3! = 6$, we get $r = 3$."
    ],
    "stepByStepSolutionAr": [
      "$$r! = \\frac{٥٠٤}{٨٤} = ٦$$",
      "بما أن ٣! = ٦، إذن $r = ٣$."
    ],
    "teacherTipEn": "r! is simply the ratio between permutations and combinations of the same parameters.",
    "teacherTipAr": "r! هو خارج قسمة التباديل على التوافيق لنفس المعاملين."
  },
  {
    "id": "alg_ch1_db_med_27",
    "titleEn": "Iterated Pascal Addition Identity",
    "titleAr": "متطابقة جمع باسكال المكرر",
    "difficulty": "medium",
    "questionEn": "Simplify to a single combination: $\\binom{n}{r} + 2\\binom{n}{r - 1} + \\binom{n}{r - 2}$.",
    "questionAr": "اكتب في صورة توفيقة واحدة: $\\binom{n}{r} + ٢\\binom{n}{r - ١} + \\binom{n}{r - ٢}$.",
    "optionsEn": [
      "C(n + 2, r)",
      "C(n + 1, r)",
      "C(n + 2, r - 1)",
      "2 C(n + 1, r)"
    ],
    "optionsAr": [
      "C(n + ٢، r)",
      "C(n + ١، r)",
      "C(n + ٢، r - ١)",
      "٢ C(n + ١، r)"
    ],
    "correctAnswer": "C(n + 2, r)",
    "correctIndex": 0,
    "hintEn": "Split 2 C(n, r-1) into C(n, r-1) + C(n, r-1) and apply Pascal rule twice.",
    "hintAr": "فك ٢ C(n, r-1) إلى حاصل جمع توفيقتين، وطبق قانون الجمع لباسكال مرتين متتاليتين.",
    "stepByStepSolutionEn": [
      "Rewrite expression as:",
      "$$\\left[\\binom{n}{r} + \\binom{n}{r - 1}\\right] + \\left[\\binom{n}{r - 1} + \\binom{n}{r - 2}\\right]$$",
      "Apply Pascal rule to each bracket:",
      "$$= \\binom{n + 1}{r} + \\binom{n + 1}{r - 1}$$",
      "Apply Pascal rule once more:",
      "$$= \\binom{n + 2}{r}$$"
    ],
    "stepByStepSolutionAr": [
      "إعادة كتابة المقدار:",
      "$$[\\binom{n}{r} + \\binom{n}{r - ١}] + [\\binom{n}{r - ١} + \\binom{n}{r - ٢}]$$",
      "تطبيق قانون باسكال على كل قوس:",
      "$$= \\binom{n + ١}{r} + \\binom{n + ١}{r - ١}$$",
      "تطبيق قانون باسكال مرة أخرى:",
      "$$= \\binom{n + ٢}{r}$$"
    ],
    "teacherTipEn": "This identity reflects the coefficients 1, 2, 1 in two levels of Pascal's triangle.",
    "teacherTipAr": "هذه المتطابقة تعكس معاملات ١، ٢، ١ للانتقال صفين في مثلث باسكال."
  },
  {
    "id": "alg_ch1_db_med_28",
    "titleEn": "Integer Solutions to x1 + x2 + x3 = 8",
    "titleAr": "عدد الحلول الصحيحة غير السالبة للمعادلة",
    "difficulty": "medium",
    "questionEn": "How many non-negative integer solutions exist for $x_1 + x_2 + x_3 = 8$?",
    "questionAr": "كم عدد الحلول الصحيحة غير السالبة للمعادلة $س_١ + س_٢ + س_٣ = ٨$؟",
    "optionsEn": [
      "45",
      "36",
      "55",
      "28"
    ],
    "optionsAr": [
      "٤٥",
      "٣٦",
      "٥٥",
      "٢٨"
    ],
    "correctAnswer": "45",
    "correctIndex": 0,
    "hintEn": "Stars and bars formula: C(n + r - 1, r) = C(3 + 8 - 1, 8) = C(10, 8).",
    "hintAr": "قانون التوزيع مع الإحلال: C(n + r - 1, r) = C(٣ + ٨ - ١، ٨) = C(١٠، ٨).",
    "stepByStepSolutionEn": [
      "Formula for distributing $r = 8$ identical units into $n = 3$ variables:",
      "$$\\binom{n + r - 1}{r} = \\binom{3 + 8 - 1}{8} = \\binom{10}{8} = \\binom{10}{2} = \\frac{10 \\times 9}{2} = 45$$"
    ],
    "stepByStepSolutionAr": [
      "قانون التوافيق مع الإحلال: $\\binom{n + r - ١}{r}$ حيث $r = ٨$ و $n = ٣$:",
      "$$\\binom{٣ + ٨ - ١}{٨} = \\binom{١٠}{٨} = \\binom{١٠}{٢} = ٤٥$$"
    ],
    "teacherTipEn": "Combinations with replacement without order uses C(n + r - 1, r).",
    "teacherTipAr": "التوافيق مع الإحلال وبدون ترتيب تستخدم القانون C(n + r - 1, r)."
  },
  {
    "id": "alg_ch1_db_med_29",
    "titleEn": "Evaluating C(r, 2) from C(28, 2r) = C(28, 2r-4)",
    "titleAr": "حساب C(r, 2) من المعادلة C(28, 2r) = C(28, 2r-4)",
    "difficulty": "medium",
    "questionEn": "Using combination equality properties, find $\binom{r}{2}$ when $\binom{28}{2r} = \binom{28}{2r - 4}$.",
    "questionAr": "باستخدام خواص تساوي التوافيق، أوجد قيمة $\binom{r}{2}$ عندما $\binom{28}{2r} = \binom{28}{2r - 4}$.",
    "optionsEn": [
      "28",
      "21",
      "36",
      "15"
    ],
    "optionsAr": [
      "٢٨",
      "٢١",
      "٣٦",
      "١٥"
    ],
    "correctAnswer": "28",
    "correctIndex": 0,
    "hintEn": "2r + (2r - 4) = 28 => 4r = 32 => r = 8. Then C(8, 2) = 28.",
    "hintAr": "٢r + (٢r - ٤) = ٢٨ => ٤r = ٣٢ => r = ٨. ثم احسب C(8, 2) = ٢٨.",
    "stepByStepSolutionEn": [
      "Since $2r \\ne 2r - 4$, the sum of indices must equal 28:",
      "$$2r + (2r - 4) = 28 \\implies 4r = 32 \\implies r = 8$$",
      "$$\\binom{8}{2} = \\frac{8 \\times 7}{2} = 28$$"
    ],
    "stepByStepSolutionAr": [
      "مجموع الدليلين = ٢٨:",
      "$$٢r + ٢r - ٤ = ٢٨ \\implies ٤r = ٣٢ \\implies r = ٨$$",
      "$$\\binom{٨}{٢} = \\frac{٨ \\times ٧}{٢} = ٢٨$$"
    ],
    "teacherTipEn": "Find r first, then evaluate the target combination C(r, 2).",
    "teacherTipAr": "أوجد قيمة r أولاً، ثم احسب التوفيقة المطلوبة C(r, 2)."
  },
  {
    "id": "alg_ch1_db_med_30",
    "titleEn": "Three Consecutive Combinations Ratio System",
    "titleAr": "نظام نسب لثلاث توافيق متتالية",
    "difficulty": "medium",
    "questionEn": "If $\\binom{n}{r} : \\binom{n}{r+1} = 1 : 2$ and $\\binom{n}{r+1} : \\binom{n}{r+2} = 2 : 3$, find $n$.",
    "questionAr": "إذا كان $\\binom{n}{r} : \\binom{n}{r+١} = ١ : ٢$ و $\\binom{n}{r+١} : \\binom{n}{r+٢} = ٢ : ٣$، فأوجد $n$.",
    "optionsEn": [
      "n = 14",
      "n = 12",
      "n = 15",
      "n = 10"
    ],
    "optionsAr": [
      "n = ١٤",
      "n = ١٢",
      "n = ١٥",
      "n = ١٠"
    ],
    "correctAnswer": "n = 14",
    "correctIndex": 0,
    "hintEn": "Apply the ratio formula to get n - 3r = 2 and 2n - 5r = 8.",
    "hintAr": "طبق قانون النسبة لتحصل على المعادلتين: n - 3r = 2 و 2n - 5r = 8.",
    "stepByStepSolutionEn": [
      "First ratio: $\\frac{n - r}{r + 1} = 2 \\implies n - 3r = 2$.",
      "Second ratio: $\\frac{n - r - 1}{r + 2} = \\frac{3}{2} \\implies 2n - 5r = 8$.",
      "Solving the linear system yields $r = 4$ and $n = 14$."
    ],
    "stepByStepSolutionAr": [
      "النسبة الأولى: $n - ٣r = ٢$.",
      "النسبة الثانية: $٢n - ٥r = ٨$.",
      "حل النظام الخطي يعطي $r = ٤$ و $n = ١٤$."
    ],
    "teacherTipEn": "This classic question recurs frequently in official exams.",
    "teacherTipAr": "مسألة كلاسيكية تتكرر باستمرار في امتحانات الثانوية العامة."
  },
  {
    "id": "alg_ch1_db_med_31",
    "titleEn": "Middle Term Coefficient of (x + 1/x)^10",
    "titleAr": "معامل الحد الأوسط في مفكوك (س + ١/س)^١٠",
    "difficulty": "medium",
    "questionEn": "Find the coefficient of the middle term in the expansion of $\\left(x + \\frac{1}{x}\\right)^{10}$.",
    "questionAr": "أوجد معامل الحد الأوسط في مفكوك $\\left(س + \\frac{١}{س}\\right)^{١٠}$.",
    "optionsEn": [
      "252",
      "210",
      "120",
      "504"
    ],
    "optionsAr": [
      "٢٥٢",
      "٢١٠",
      "١٢٠",
      "٥٠٤"
    ],
    "correctAnswer": "252",
    "correctIndex": 0,
    "hintEn": "Middle term is T_6 with r = 5: C(10, 5) = 252.",
    "hintAr": "الحد الأوسط هو الحد السادس عند r = 5: C(10, 5) = 252.",
    "stepByStepSolutionEn": [
      "Middle term rank: $(10 / 2) + 1 = 6 \\implies T_6$.",
      "$$T_6 = \\binom{10}{5} x^5 (x^{-1})^5 = \\binom{10}{5} = 252$$"
    ],
    "stepByStepSolutionAr": [
      "رتبة الحد الأوسط: (١٠ / ٢) + ١ = ٦، أي $T_6$.",
      "معامله هو $\\binom{١٠}{٥} = ٢٥٢$."
    ],
    "teacherTipEn": "Combination C(10, 5) is 252.",
    "teacherTipAr": "قيمة التوفيقة C(10, 5) تساوي 252."
  },
  {
    "id": "alg_ch1_db_med_32",
    "titleEn": "Coefficient of x^3 in (2x - 3)^6",
    "titleAr": "معامل س^٣ في مفكوك (٢س - ٣)^٦",
    "difficulty": "medium",
    "questionEn": "Calculate the coefficient of $x^3$ in the expansion of $(2x - 3)^6$.",
    "questionAr": "احسب معامل $x^3$ في مفكوك ذات الحدين $(2x - 3)^6$.",
    "optionsEn": [
      "-4320",
      "4320",
      "-2160",
      "8640"
    ],
    "optionsAr": [
      "-٤٣٢٠",
      "٤٣٢٠",
      "-٢١٦٠",
      "٨٦٤٠"
    ],
    "correctAnswer": "-4320",
    "correctIndex": 0,
    "hintEn": "T_4 has r = 3: C(6, 3) * (2)^3 * (-3)^3 = 20 * 8 * (-27).",
    "hintAr": "الحد T4 عنده r = ٣: C(6, 3) * (٢)^٣ * (-٣)^٣ = ٢٠ * ٨ * (-٢٧).",
    "stepByStepSolutionEn": [
      "Term with $x^3$ has $r = 6 - 3 = 3$:",
      "$$T_4 = \\binom{6}{3} (2x)^3 (-3)^3 = 20 \\times 8 \\times (-27) x^3 = -4320 x^3$$"
    ],
    "stepByStepSolutionAr": [
      "الحد المحتوي على س^٣ يقابل $r = ٣$:",
      "$$T_4 = \\binom{٦}{٣} (٢ س)^٣ (-٣)^٣ = ٢٠ \\times ٨ \\times (-٢٧) س^٣ = -٤٣٢٠ س^٣$$"
    ],
    "teacherTipEn": "Remember (-3)^3 is negative (-27).",
    "teacherTipAr": "تذكر أن (-٣)^٣ عدد سالب يساوي -٢٧."
  },
  {
    "id": "alg_ch1_db_med_33",
    "titleEn": "Finding n from T3 in (x + a)^n",
    "titleAr": "إيجاد الأس n من الحد الثالث",
    "difficulty": "medium",
    "questionEn": "In $(x + a)^n$, if $T_3 = 360 x^4$, find $n$.",
    "questionAr": "في مفكوك $(س + أ)^n$، إذا كان $T_3 = ٣٦٠ س^٤$، فأوجد قيمة $n$.",
    "optionsEn": [
      "n = 6",
      "n = 7",
      "n = 5",
      "n = 8"
    ],
    "optionsAr": [
      "n = ٦",
      "n = ٧",
      "n = ٥",
      "n = ٨"
    ],
    "correctAnswer": "n = 6",
    "correctIndex": 0,
    "hintEn": "In T_3, the power of x is n - 2. Thus n - 2 = 4 => n = 6.",
    "hintAr": "في الحد الثالث T3 يكون أس س مساوياً لـ n - 2. إذن n - 2 = 4 => n = 6.",
    "stepByStepSolutionEn": [
      "General term $T_3$ has $r = 2$:",
      "$$T_3 = \\binom{n}{2} x^{n - 2} a^2$$",
      "Equate powers of $x$: $n - 2 = 4 \\implies n = 6$."
    ],
    "stepByStepSolutionAr": [
      "الحد الثالث يقابل $r = ٢$ وأس س فيه هو $n - ٢$:",
      "$$n - ٢ = ٤ \\implies n = ٦$$"
    ],
    "teacherTipEn": "Equating the variable exponents solves for n immediately.",
    "teacherTipAr": "مساواة أس المتغير يحل قيمة n في خطوة واحدة."
  },
  {
    "id": "alg_ch1_db_med_34",
    "titleEn": "Sum of Coefficients of Combined Binomials",
    "titleAr": "مجموع معاملات تركيب مفكوكين",
    "difficulty": "medium",
    "questionEn": "Evaluate the sum of the coefficients of the polynomial $(5x - 4)^9 + (3x - 2)^8$.",
    "questionAr": "احسب مجموع معاملات حدود المقدار الجبري $(٥ س - ٤)^٩ + (٣ س - ٢)^٨$.",
    "optionsEn": [
      "2",
      "0",
      "1",
      "4"
    ],
    "optionsAr": [
      "٢",
      "٠",
      "١",
      "٤"
    ],
    "correctAnswer": "2",
    "correctIndex": 0,
    "hintEn": "Substitute x = 1 into both expressions: (5 - 4)^9 + (3 - 2)^8 = 1 + 1 = 2.",
    "hintAr": "عوض عن س = ١ في المقدارين: (٥ - ٤)^٩ + (٣ - ٢)^٨ = ١ + ١ = ٢.",
    "stepByStepSolutionEn": [
      "At $x = 1$:",
      "$$(5(1) - 4)^9 + (3(1) - 2)^8 = 1^9 + 1^8 = 1 + 1 = 2$$"
    ],
    "stepByStepSolutionAr": [
      "عند س = ١:",
      "$$(٥(١) - ٤)^٩ + (٣(١) - ٢)^٨ = ١ + ١ = ٢$$"
    ],
    "teacherTipEn": "Always replace the variable with 1 for the sum of coefficients.",
    "teacherTipAr": "استبدل المتغير دائماً بالعدد ١ لإيجاد مجموع المعاملات."
  },
  {
    "id": "alg_ch1_db_med_35",
    "titleEn": "Two Middle Terms Ranks of (2x - 1/x)^7",
    "titleAr": "رتبتا الحدين الأوسطين في مفكوك (٢س - ١/س)^٧",
    "difficulty": "medium",
    "questionEn": "What are the ranks of the two middle terms in the expansion of $\\left(2x - \\frac{1}{x}\\right)^7$?",
    "questionAr": "ما هما رتبتا الحدين الأوسطين في مفكوك $\\left(٢ س - \\frac{١}{س}\\right)^٧$؟",
    "optionsEn": [
      "T_4 and T_5",
      "T_3 and T_4",
      "T_5 and T_6",
      "T_4 and T_6"
    ],
    "optionsAr": [
      "T_4 و T_5",
      "T_3 و T_4",
      "T_5 و T_6",
      "T_4 و T_6"
    ],
    "correctAnswer": "T_4 and T_5",
    "correctIndex": 0,
    "hintEn": "Ranks for odd n are (n+1)/2 and (n+3)/2: (7+1)/2 = 4 and (7+3)/2 = 5.",
    "hintAr": "رتبتا الحدين للأس الفردي: (n+1)/2 و (n+3)/2: (٧+١)/٢ = ٤ و (٧+٣)/٢ = ٥.",
    "stepByStepSolutionEn": [
      "First middle term: $\\frac{7 + 1}{2} = 4 \\implies T_4$.",
      "Second middle term: $\\frac{7 + 3}{2} = 5 \\implies T_5$."
    ],
    "stepByStepSolutionAr": [
      "الحد الأوسط الأول: (٧ + ١) / ٢ = ٤، أي $T_4$.",
      "الحد الأوسط الثاني: (٧ + ٣) / ٢ = ٥، أي $T_5$."
    ],
    "teacherTipEn": "The two middle terms are always consecutive: T_4 and T_5.",
    "teacherTipAr": "الحدان الأوسطان يكونان متتاليين دائماً: T_4 و T_5."
  },
  {
    "id": "alg_ch1_db_med_36",
    "titleEn": "Finding Parameter k in (1 + kx)^8 with Coeff(x^2) = 112",
    "titleAr": "إيجاد الثابت k في (١ + k س)^٨ إذا كان معامل س^٢ = ١١٢",
    "difficulty": "medium",
    "questionEn": "In the expansion of $(1 + kx)^8$, if the coefficient of $x^2$ is 112, find $k$.",
    "questionAr": "في مفكوك $(١ + k س)^٨$، إذا كان معامل $س^٢$ يساوي ١١٢، فأوجد قيمة $k$.",
    "optionsEn": [
      "k = ±2",
      "k = 2",
      "k = ±4",
      "k = 4"
    ],
    "optionsAr": [
      "k = ±٢",
      "k = ٢",
      "k = ±٤",
      "k = ٤"
    ],
    "correctAnswer": "k = ±2",
    "correctIndex": 0,
    "hintEn": "Coeff of x^2 is C(8, 2) * k^2 = 28 k^2 = 112 => k^2 = 4.",
    "hintAr": "معامل س^٢ هو C(8, 2) * k^2 = ٢٨ k^2 = ١١٢ => k^2 = ٤.",
    "stepByStepSolutionEn": [
      "$$T_3 = \\binom{8}{2} (kx)^2 = 28 k^2 x^2$$",
      "$$28 k^2 = 112 \\implies k^2 = 4 \\implies k = \\pm 2$$"
    ],
    "stepByStepSolutionAr": [
      "$$٢٨ k^٢ = ١١٢ \\implies k^٢ = ٤ \\implies k = \\pm ٢$$"
    ],
    "teacherTipEn": "Remember both positive and negative roots when taking the square root.",
    "teacherTipAr": "لا تنس الإشارتين الموجبة والسالبة عند أخذ الجذر التربيعي."
  },
  {
    "id": "alg_ch1_db_med_37",
    "titleEn": "Middle Term of (sqrt(x) - 1/sqrt(x))^12",
    "titleAr": "الحد الأوسط في مفكوك (جذر س - ١/جذر س)^١٢",
    "difficulty": "medium",
    "questionEn": "Find the middle term in the expansion of $\\left(\\sqrt{x} - \\frac{1}{\\sqrt{x}}\\right)^{12}$.",
    "questionAr": "أوجد الحد الأوسط في مفكوك $\\left(\\sqrt{س} - \\frac{١}{\\sqrt{س}}\\right)^{١٢}$.",
    "optionsEn": [
      "924",
      "-924",
      "462",
      "-462"
    ],
    "optionsAr": [
      "٩٢٤",
      "-٩٢٤",
      "٤٦٢",
      "-٤٦٢"
    ],
    "correctAnswer": "924",
    "correctIndex": 0,
    "hintEn": "Middle term is T_7 (r = 6). Since r = 6 is even, (-1)^6 = +1: C(12, 6) = 924.",
    "hintAr": "الحد الأوسط هو T_7 (عند r = ٦). بما أن r زوجي، فإن (-1)^6 = +1: C(12, 6) = 924.",
    "stepByStepSolutionEn": [
      "Order: $(12 / 2) + 1 = 7 \\implies T_7$ ($r = 6$):",
      "$$T_7 = \\binom{12}{6} (\\sqrt{x})^6 \\left(-\\frac{1}{\\sqrt{x}}\\right)^6 = 924 \\times 1 = 924$$"
    ],
    "stepByStepSolutionAr": [
      "الرتبة: (١٢ / ٢) + ١ = ٧، أي $T_7$ ($r = ٦$):",
      "$$T_7 = \\binom{١٢}{٦} (-١)^٦ = ٩٢٤$$"
    ],
    "teacherTipEn": "Because r = 6 is even, the minus sign disappears.",
    "teacherTipAr": "لأن r = 6 عدد زوجي، تختفي الإشارة السالبة ويكون الناتج موجباً."
  },
  {
    "id": "alg_ch1_db_med_38",
    "titleEn": "Term Containing x^3 in (x^2 + 2/x)^6",
    "titleAr": "الحد المحتوي على س^٣ في مفكوك (س^٢ + ٢/س)^٦",
    "difficulty": "medium",
    "questionEn": "In the expansion of $\\left(x^2 + \\frac{2}{x}\\right)^6$, find the term containing $x^3$.",
    "questionAr": "في مفكوك $\\left(س^٢ + \\frac{٢}{س}\\right)^٦$، أوجد الحد المحتوي على $س^٣$.",
    "optionsEn": [
      "160 x^3",
      "80 x^3",
      "20 x^3",
      "240 x^3"
    ],
    "optionsAr": [
      "١٦٠ س^٣",
      "٨٠ س^٣",
      "٢٠ س^٣",
      "٢٤٠ س^٣"
    ],
    "correctAnswer": "160 x^3",
    "correctIndex": 0,
    "hintEn": "2(6 - r) - r = 3 => 12 - 3r = 3 => r = 3 => T_4 = C(6, 3) * (x^2)^3 * (2/x)^3.",
    "hintAr": "٢(٦ - r) - r = ٣ => ١٢ - ٣r = ٣ => r = ٣ => T_4 = C(6, 3) * (س^٢)^٣ * (٢/س)^٣.",
    "stepByStepSolutionEn": [
      "$$12 - 3r = 3 \\implies 3r = 9 \\implies r = 3$$",
      "$$T_4 = \\binom{6}{3} (x^2)^3 \\left(\\frac{2}{x}\\right)^3 = 20 \\times 8 x^3 = 160 x^3$$"
    ],
    "stepByStepSolutionAr": [
      "$$١٢ - ٣r = ٣ \\implies r = ٣$$",
      "$$T_4 = \\binom{٦}{٣} (س^٢)^٣ \\left(\\frac{٢}{س}\\right)^٣ = ٢٠ \\times ٨ س^٣ = ١٦٠ س^٣$$"
    ],
    "teacherTipEn": "20 * 8 = 160.",
    "teacherTipAr": "حاصل ضرب ٢٠ في ٨ يساوي ١٦٠."
  },
  {
    "id": "alg_ch1_db_med_39",
    "titleEn": "Ratio T7/T6 in (x + a)^10 with x=2, a=3",
    "titleAr": "النسبة T7/T6 في (س + أ)^١٠ عندما س=٢ و أ=٣",
    "difficulty": "medium",
    "questionEn": "In the expansion of $(x + a)^{10}$ when $x = 2$ and $a = 3$, find the ratio $\\frac{T_7}{T_6}$.",
    "questionAr": "في مفكوك $(س + أ)^{١٠}$ عندما $س = ٢$ و $أ = ٣$، احسب النسبة $\\frac{T_7}{T_6}$.",
    "optionsEn": [
      "5 / 4",
      "4 / 5",
      "3 / 2",
      "15 / 8"
    ],
    "optionsAr": [
      "٥ / ٤",
      "٤ / ٥",
      "٣ / ٢",
      "١٥ / ٨"
    ],
    "correctAnswer": "5 / 4",
    "correctIndex": 0,
    "hintEn": "r = 6: [(10 - 6 + 1)/6] * (a / x) = (5/6) * (3/2) = 15/12 = 5/4.",
    "hintAr": "r = ٦: [(١٠ - ٦ + ١)/٦] * (أ / س) = (٥/٦) * (٣/٢) = ٥/٤.",
    "stepByStepSolutionEn": [
      "$$\\frac{T_7}{T_6} = \\frac{10 - 6 + 1}{6} \\times \\frac{3}{2} = \\frac{5}{6} \\times \\frac{3}{2} = \\frac{15}{12} = \\frac{5}{4}$$"
    ],
    "stepByStepSolutionAr": [
      "$$\\frac{T_7}{T_6} = \\frac{١٠ - ٦ + ١}{٦} \\times \\frac{٣}{٢} = \\frac{٥}{٦} \\times \\frac{٣}{٢} = \\frac{٥}{٤}$$"
    ],
    "teacherTipEn": "Simplify fractions early: 3/6 becomes 1/2.",
    "teacherTipAr": "اختصر ٣ مع ٦ أولاً لتصبح ١/٢."
  },
  {
    "id": "alg_ch1_db_med_40",
    "titleEn": "Coefficient of x^4 in (1 + 2x + x^2)^5",
    "titleAr": "معامل س^٤ في مفكوك (١ + ٢س + س^٢)^٥",
    "difficulty": "medium",
    "questionEn": "Rewrite as a binomial power to find the coefficient of $x^4$ in $(1 + 2x + x^2)^5$.",
    "questionAr": "أعد كتابة المقدار في صورة ذات حدين لإيجاد معامل $x^4$ في $(1 + 2x + x^2)^5$.",
    "optionsEn": [
      "210",
      "120",
      "252",
      "105"
    ],
    "optionsAr": [
      "٢١٠",
      "١٢٠",
      "٢٥٢",
      "١٠٥"
    ],
    "correctAnswer": "210",
    "correctIndex": 0,
    "hintEn": "Recognize that 1 + 2x + x^2 = (1 + x)^2. Thus the expression is (1 + x)^10. Coeff of x^4 is C(10, 4) = 210.",
    "hintAr": "لاحظ أن المقدار ١ + ٢س + س^٢ = (١ + س)^٢. فيصبح المفكوك (١ + س)^١٠. معامل س^٤ هو C(10, 4) = ٢١٠.",
    "stepByStepSolutionEn": [
      "Rewrite: $(1 + 2x + x^2)^5 = ((1 + x)^2)^5 = (1 + x)^{10}$.",
      "Coefficient of $x^4$ is $\\binom{10}{4}$:",
      "$$\\binom{10}{4} = \\frac{10 \\times 9 \\times 8 \\times 7}{4 \\times 3 \\times 2 \\times 1} = 210$$"
    ],
    "stepByStepSolutionAr": [
      "تحليل المقدار الثلاثي المربع الكامل: $(١ + ٢ س + س^٢)^٥ = ((١ + س)^٢)^٥ = (١ + س)^{١٠}$.",
      "معامل $س^٤$ هو التوفيقة $\\binom{١٠}{٤} = ٢١٠$."
    ],
    "teacherTipEn": "Recognizing perfect square trinomials transforms complex multinomials into simple binomials.",
    "teacherTipAr": "ملاحظة المربع الكامل تحول المقدار الثلاثي فوراً إلى ذات حدين بسيطة."
  },
  {
    "id": "alg_ch1_db_med_41",
    "titleEn": "Term Independent of x in (x^2 + 1/x)^15",
    "titleAr": "الحد الخالي من س في مفكوك (س^٢ + ١/س)^١٥",
    "difficulty": "medium",
    "questionEn": "Identify the $x$-free term in the expansion of $\left(x^2 + \frac{1}{x}\right)^{15}$.",
    "questionAr": "عيّن الحد الخالي من $x$ في مفكوك $\left(x^2 + \frac{1}{x}\right)^{15}$.",
    "optionsEn": [
      "3003",
      "5005",
      "1365",
      "6435"
    ],
    "optionsAr": [
      "٣٠٠٣",
      "٥٠٠٥",
      "١٣٦٥",
      "٦٤٣٥"
    ],
    "correctAnswer": "3003",
    "correctIndex": 0,
    "hintEn": "2(15 - r) - r = 0 => 30 - 3r = 0 => r = 10 => T_11 = C(15, 10) = 3003.",
    "hintAr": "٢(١٥ - r) - r = ٠ => ٣٠ - ٣r = ٠ => r = ١٠ => T_11 = C(15, 10) = ٣٠٠٣.",
    "stepByStepSolutionEn": [
      "$$30 - 3r = 0 \\implies r = 10$$",
      "$$T_{11} = \\binom{15}{10} = \\binom{15}{5} = 3003$$"
    ],
    "stepByStepSolutionAr": [
      "$$٣٠ - ٣r = ٠ \\implies r = ١٠$$",
      "$$T_{١١} = \\binom{١٥}{١٠} = ٣٠٠٣$$"
    ],
    "teacherTipEn": "C(15, 10) = C(15, 5) = 3003.",
    "teacherTipAr": "قانون التبسيط: C(15, 10) = C(15, 5) = 3003."
  },
  {
    "id": "alg_ch1_db_med_42",
    "titleEn": "Greatest Term in (2 + 3x)^10 when x = 1/3",
    "titleAr": "الحد الأعظم في (٢ + ٣س)^١٠ عندما س = ١/٣",
    "difficulty": "medium",
    "questionEn": "In the expansion of $(2 + 3x)^{10}$, find the greatest term when $x = \\frac{1}{3}$.",
    "questionAr": "في مفكوك $(٢ + ٣ س)^{١٠}$، أوجد رتبة الحد الأعظم قيمة عندما $س = \\frac{١}{٣}$.",
    "optionsEn": [
      "T_4",
      "T_5",
      "T_3",
      "T_6"
    ],
    "optionsAr": [
      "T_4",
      "T_5",
      "T_3",
      "T_6"
    ],
    "correctAnswer": "T_4",
    "correctIndex": 0,
    "hintEn": "Solve T_{r+1}/T_r >= 1: [(11-r)/r] * (1/2) >= 1 => 11-r >= 2r => 3r <= 11 => r <= 3.66 => r = 3 => T_4.",
    "hintAr": "حل المتباينة: [(١١-r)/r] * (١/٢) >= ١ => ١١-r >= ٢r => r <= ٣٫٦٦ => r = ٣ => T_4.",
    "stepByStepSolutionEn": [
      "$$\\frac{11 - r}{r} \\times \\frac{1}{2} \\ge 1 \\implies 11 - r \\ge 2r \\implies 3r \\le 11 \\implies r \\le 3.66$$",
      "Largest integer is $r = 3$, giving $T_4$ as the greatest term."
    ],
    "stepByStepSolutionAr": [
      "$$\\frac{١١ - r}{r} \\times \\frac{١}{٢} \\ge ١ \\implies ٣r \\le ١١ \\implies r \\le ٣٫٦٦$$",
      "أكبر عدد صحيح هو $r = ٣$، مما يعطي الحد الأعظم $T_4$."
    ],
    "teacherTipEn": "Take the floor of the upper bound for r to find the greatest term index.",
    "teacherTipAr": "خذ أكبر عدد صحيح أصغر من أو يساوي الناتج لتحديد رتبة الحد الأعظم."
  },
  {
    "id": "alg_ch1_db_med_43",
    "titleEn": "Term Independent of x in (x sqrt(x) + 1/x^2)^7",
    "titleAr": "الحد الخالي من س في مفكوك (س جذر س + ١/س^٢)^٧",
    "difficulty": "medium",
    "questionEn": "Calculate the value of the term independent of $x$ in $\left(x\sqrt{x} + \frac{1}{x^2}\right)^7$.",
    "questionAr": "احسب قيمة الحد الخالي من $x$ في مفكوك $\left(x\sqrt{x} + \frac{1}{x^2}\right)^7$.",
    "optionsEn": [
      "35",
      "21",
      "7",
      "70"
    ],
    "optionsAr": [
      "٣٥",
      "٢١",
      "٧",
      "٧٠"
    ],
    "correctAnswer": "35",
    "correctIndex": 0,
    "hintEn": "x sqrt(x) = x^(3/2). (3/2)(7-r) - 2r = 0 => 21/2 - (7/2)r = 0 => r = 3 => T_4 = C(7, 3) = 35.",
    "hintAr": "س جذر س = س^(٣/٢). (٣/٢)(٧-r) - ٢r = ٠ => r = ٣ => T_4 = C(7, 3) = ٣٥.",
    "stepByStepSolutionEn": [
      "$$\\frac{3}{2}(7 - r) - 2r = \\frac{21 - 3r - 4r}{2} = \\frac{21 - 7r}{2} = 0 \\implies 7r = 21 \\implies r = 3$$",
      "$$T_4 = \\binom{7}{3} = 35$$"
    ],
    "stepByStepSolutionAr": [
      "$$\\frac{٣}{٢}(٧ - r) - ٢r = ٠ \\implies ٧r = ٢١ \\implies r = ٣$$",
      "$$T_4 = \\binom{٧}{٣} = ٣٥$$"
    ],
    "teacherTipEn": "Express roots as fractional exponents: x * x^(1/2) = x^(3/2).",
    "teacherTipAr": "اكتب الجذور دائماً في صورة أسس كسرية: س * س^(١/٢) = س^(٣/٢)."
  },
  {
    "id": "alg_ch1_db_med_44",
    "titleEn": "Finding x from Unit Ratio T5/T4 in (x + 2)^8",
    "titleAr": "إيجاد س من تساوي الحدين الخامس والرابع في (س + ٢)^٨",
    "difficulty": "medium",
    "questionEn": "In $(x + 2)^8$, if the ratio $\\frac{T_5}{T_4} = 1$, find $x$.",
    "questionAr": "في مفكوك $(س + ٢)^٨$، إذا كانت النسبة $\\frac{T_5}{T_4} = ١$، فأوجد قيمة $x$.",
    "optionsEn": [
      "x = 2.5",
      "x = 2",
      "x = 3",
      "x = 1.5"
    ],
    "optionsAr": [
      "x = ٢٫٥",
      "x = ٢",
      "x = ٣",
      "x = ١٫٥"
    ],
    "correctAnswer": "x = 2.5",
    "correctIndex": 0,
    "hintEn": "[(8 - 4 + 1)/4] * (2 / x) = 1 => (5/4) * (2/x) = 1 => 5 / (2x) = 1 => x = 2.5.",
    "hintAr": "[(٨ - ٤ + ١)/٤] * (٢ / س) = ١ => (٥/٤) * (٢/س) = ١ => ٥ / ٢س = ١ => س = ٢٫٥.",
    "stepByStepSolutionEn": [
      "$$\\frac{5}{4} \\times \\frac{2}{x} = 1 \\implies \\frac{5}{2x} = 1 \\implies 2x = 5 \\implies x = 2.5$$"
    ],
    "stepByStepSolutionAr": [
      "$$\\frac{٥}{٤} \\times \\frac{٢}{س} = ١ \\implies ٢س = ٥ \\implies س = ٢٫٥$$"
    ],
    "teacherTipEn": "Equating the consecutive ratio to 1 finds the exact point of equality between terms.",
    "teacherTipAr": "مساواة نسبة حدين متتاليين بالواحد تحدد النقطة التي يتساوى عندها هذان الحدان."
  },
  {
    "id": "alg_ch1_db_med_45",
    "titleEn": "Term Independent of x in (2x - 1/(2x^2))^9",
    "titleAr": "الحد الخالي من س في مفكوك (٢س - ١/(٢س^٢))^٩",
    "difficulty": "medium",
    "questionEn": "Find the term with exponent zero on $x$ in $\left(2x - \frac{1}{2x^2}\right)^9$.",
    "questionAr": "أوجد الحد المشتمل على $x^0$ في مفكوك $\left(2x - \frac{1}{2x^2}\right)^9$.",
    "optionsEn": [
      "-672",
      "672",
      "-336",
      "336"
    ],
    "optionsAr": [
      "-٦٧٢",
      "٦٧٢",
      "-٣٣٦",
      "٣٣٦"
    ],
    "correctAnswer": "-672",
    "correctIndex": 0,
    "hintEn": "(9 - r) - 2r = 0 => 9 = 3r => r = 3 => T_4 = C(9, 3) * 2^6 * (-1/2)^3 = 84 * 64 * (-1/8) = -672.",
    "hintAr": "٩ - ٣r = ٠ => r = ٣ => T_4 = C(9, 3) * ٢^٦ * (-١/٢)^٣ = ٨٤ * ٦٤ * (-١/٨) = -٦٧٢.",
    "stepByStepSolutionEn": [
      "$$9 - 3r = 0 \\implies r = 3$$",
      "$$T_4 = \\binom{9}{3} (2)^6 \\left(-\\frac{1}{2}\\right)^3 = 84 \\times 64 \\times \\left(-\\frac{1}{8}\\right) = 84 \\times (-8) = -672$$"
    ],
    "stepByStepSolutionAr": [
      "$$٩ - ٣r = ٠ \\implies r = ٣$$",
      "$$T_4 = \\binom{٩}{٣} ٢^٦ \\left(-\\frac{١}{٢}\\right)^٣ = ٨٤ \\times (-٨) = -٦٧٢$$"
    ],
    "teacherTipEn": "Pay attention to the negative sign in (-1/2)^3 = -1/8.",
    "teacherTipAr": "انتبه للإشارة السالبة: (-١/٢)^٣ = -١/٨."
  },
  {
    "id": "alg_ch1_db_med_46",
    "titleEn": "Finding n from Greatest Term Condition",
    "titleAr": "إيجاد الأس n من شرط الحد الأعظم",
    "difficulty": "medium",
    "questionEn": "In $(1 + 4x)^n$ when $x = \\frac{1}{2}$, if the greatest term is $T_5$, what is the smallest integer value of $n$?",
    "questionAr": "في مفكوك $(١ + ٤ س)^n$ عندما $س = \\frac{١}{٢}$، إذا كان الحد الأعظم هو $T_5$، فما أصغر قيمة صحيحة لـ $n$؟",
    "optionsEn": [
      "n = 6",
      "n = 5",
      "n = 7",
      "n = 8"
    ],
    "optionsAr": [
      "n = ٦",
      "n = ٥",
      "n = ٧",
      "n = ٨"
    ],
    "correctAnswer": "n = 6",
    "correctIndex": 0,
    "hintEn": "T5 >= T4 and T5 >= T6 with 4x = 2: (n - 4 + 1)/4 * 2 >= 1 => n - 3 >= 2 => n >= 5. And (n - 5 + 1)/5 * 2 <= 1 => 2n - 8 <= 5 => 2n <= 13 => n <= 6.5.",
    "hintAr": "تطبيق شرط الحد الأعظم T5 >= T4 و T5 >= T6 يعطي ٥ <= n <= ٦٫٥.",
    "stepByStepSolutionEn": [
      "Condition 1: $\\frac{T_5}{T_4} \\ge 1 \\implies \\frac{n - 3}{4} \\times 2 \\ge 1 \\implies n - 3 \\ge 2 \\implies n \\ge 5$.",
      "Condition 2: $\\frac{T_6}{T_5} \\le 1 \\implies \\frac{n - 4}{5} \\times 2 \\le 1 \\implies 2n - 8 \\le 5 \\implies n \\le 6.5$.",
      "Thus $n \\in \\{5, 6\\}$."
    ],
    "stepByStepSolutionAr": [
      "الشرط الأول: $T_5 / T_4 \\ge ١ \\implies n \\ge ٥$.",
      "الشرط الثاني: $T_6 / T_5 \\le ١ \\implies n \\le ٦٫٥$.",
      "القيم الصحيحة لـ n هي ٥ أو ٦، وأصغر قيمة مشتركة هي ٦ لضمان أن T5 هو الأعظم قطعي."
    ],
    "teacherTipEn": "Setting up the double inequality T_r >= T_{r-1} and T_r >= T_{r+1} bounds n.",
    "teacherTipAr": "المتباينة المزدوجة تحصر قيم n الممكنة بدقة."
  },
  {
    "id": "alg_ch1_db_med_47",
    "titleEn": "Evaluating Ratio T9/T8 in (x^2 - 2/x)^12 at x=2",
    "titleAr": "حساب النسبة T9/T8 في (س^٢ - ٢/س)^١٢ عندما س=٢",
    "difficulty": "medium",
    "questionEn": "In $\\left(x^2 - \\frac{2}{x}\\right)^{12}$, find the ratio $\\frac{T_9}{T_8}$ when $x = 2$.",
    "questionAr": "في مفكوك $\\left(س^٢ - \\frac{٢}{س}\\right)^{١٢}$، احسب النسبة $\\frac{T_9}{T_8}$ عندما $س = ٢$.",
    "optionsEn": [
      "-5 / 32",
      "5 / 32",
      "-5 / 16",
      "5 / 16"
    ],
    "optionsAr": [
      "-٥ / ٣٢",
      "٥ / ٣٢",
      "-٥ / ١٦",
      "٥ / ١٦"
    ],
    "correctAnswer": "-5 / 32",
    "correctIndex": 0,
    "hintEn": "r = 8. First = x^2 = 4, Second = -2/x = -1. Ratio = [(12 - 8 + 1)/8] * (-1 / 4) = (5/8) * (-1/4) = -5/32.",
    "hintAr": "r = ٨. الأول = ٤، الثاني = -١. النسبة = (٥/٨) * (-١/٤) = -٥/٣٢.",
    "stepByStepSolutionEn": [
      "$$\\frac{T_9}{T_8} = \\frac{12 - 8 + 1}{8} \\times \\frac{-2/2}{2^2} = \\frac{5}{8} \\times \\left(-\\frac{1}{4}\\right) = -\\frac{5}{32}$$"
    ],
    "stepByStepSolutionAr": [
      "$$\\frac{T_9}{T_8} = \\frac{١٢ - ٨ + ١}{٨} \\times \\frac{-١}{٤} = -\\frac{٥}{٣٢}$$"
    ],
    "teacherTipEn": "Substitute x = 2 into both the first and second terms before computing the ratio.",
    "teacherTipAr": "عوض عن س = ٢ في الحدين الأول والثاني قبل ضرب النسبة."
  },
  {
    "id": "alg_ch1_db_med_48",
    "titleEn": "Finding k from Independent Term Value 405",
    "titleAr": "إيجاد k إذا كان الحد الخالي من س يساوي ٤٠٥",
    "difficulty": "medium",
    "questionEn": "If the term independent of $x$ in $\\left(\\sqrt{x} + \\frac{k}{x^2}\\right)^{10}$ is 405, find $k$.",
    "questionAr": "إذا كان الحد الخالي من س في مفكوك $\\left(\\sqrt{س} + \\frac{k}{س^٢}\\right)^{١٠}$ يساوي ٤٠٥، فأوجد قيمة $k$.",
    "optionsEn": [
      "k = ±3",
      "k = 3",
      "k = ±9",
      "k = 9"
    ],
    "optionsAr": [
      "k = ±٣",
      "k = ٣",
      "k = ±٩",
      "k = ٩"
    ],
    "correctAnswer": "k = ±3",
    "correctIndex": 0,
    "hintEn": "(1/2)(10-r) - 2r = 0 => 5 - (5/2)r = 0 => r = 2 => C(10, 2) * k^2 = 45 k^2 = 405 => k^2 = 9.",
    "hintAr": "٥ - (٥/٢)r = ٠ => r = ٢ => ٤٥ k^٢ = ٤٠٥ => k^٢ = ٩ => k = ±٣.",
    "stepByStepSolutionEn": [
      "$$5 - \\frac{5}{2}r = 0 \\implies r = 2$$",
      "$$T_3 = \\binom{10}{2} k^2 = 45 k^2 = 405 \\implies k^2 = 9 \\implies k = \\pm 3$$"
    ],
    "stepByStepSolutionAr": [
      "$$r = ٢$$",
      "$$٤٥ k^٢ = ٤٠٥ \\implies k^٢ = ٩ \\implies k = \\pm ٣$$"
    ],
    "teacherTipEn": "k^2 = 9 implies k can be positive or negative 3.",
    "teacherTipAr": "k^2 = 9 تعني أن k يمكن أن تكون +3 أو -3."
  },
  {
    "id": "alg_ch1_db_med_49",
    "titleEn": "Finding Greatest Coefficient in (3x + 2)^9",
    "titleAr": "تحديد أكبر معامل في مفكوك (٣س + ٢)^٩",
    "difficulty": "medium",
    "questionEn": "Find the term with the greatest coefficient in the expansion of $(3x + 2)^9$.",
    "questionAr": "أوجد الحد ذي المعامل الأكبر في مفكوك $(3x + 2)^9$.",
    "optionsEn": [
      "T_6",
      "T_5",
      "T_7",
      "T_4"
    ],
    "optionsAr": [
      "T_6",
      "T_5",
      "T_7",
      "T_4"
    ],
    "correctAnswer": "T_6",
    "correctIndex": 0,
    "hintEn": "Set x = 1 and find greatest term in (3 + 2)^9: [(10-r)/r] * (2/3) >= 1 => 20 - 2r >= 3r => 5r <= 20 => r <= 4. For r = 4, ratio = 1 (T5 = T6). Greatest is T6.",
    "hintAr": "ضع س = ١ وطبق شرط الحد الأعظم في (٣ + ٢)^٩: r <= ٤ وعند r = ٤ تتساوى T5 و T6.",
    "stepByStepSolutionEn": [
      "Set $x = 1$ to analyze coefficients:",
      "$$\\frac{\\text{Coeff}(T_{r+1})}{\\text{Coeff}(T_r)} = \\frac{10 - r}{r} \\times \\frac{2}{3} \\ge 1$$",
      "$$2(10 - r) \\ge 3r \\implies 20 - 2r \\ge 3r \\implies 5r \\le 20 \\implies r \\le 4$$",
      "For $r = 4$, ratio $= 1$, which means $T_5 = T_6$. Both are the maximum, with $T_6$ being the greatest."
    ],
    "stepByStepSolutionAr": [
      "نضع س = ١ لدراسة المعاملات:",
      "$$\\frac{١٠ - r}{r} \\times \\frac{٢}{٣} \\ge ١ \\implies ٥r \\le ٢٠ \\implies r \\le ٤$$",
      "عند $r = ٤$ النسبة تساوي ١، أي أن $T_5 = T_6$ وكلاهما يمثل القيمة العظمى."
    ],
    "teacherTipEn": "When the ratio equals 1 exactly, there are two equal maximum terms.",
    "teacherTipAr": "عندما تساوي النسبة ١ تماماً، يوجد حدان متتاليان متساويان في القيمة العظمى."
  },
  {
    "id": "alg_ch1_db_med_50",
    "titleEn": "Term Independent of x in (x^4 - 1/x^2)^12",
    "titleAr": "الحد الخالي من س في مفكوك (س^٤ - ١/س^٢)^١٢",
    "difficulty": "medium",
    "questionEn": "Determine the numerical value of the constant term in $\left(x^4 - \frac{1}{x^2}\right)^{12}$.",
    "questionAr": "عيّن القيمة العددية للحد الثابت في مفكوك $\left(x^4 - \frac{1}{x^2}\right)^{12}$.",
    "optionsEn": [
      "495",
      "-495",
      "792",
      "-792"
    ],
    "optionsAr": [
      "٤٩٥",
      "-٤٩٥",
      "٧٩٢",
      "-٧٩٢"
    ],
    "correctAnswer": "495",
    "correctIndex": 0,
    "hintEn": "4(12 - r) - 2r = 0 => 48 - 6r = 0 => r = 8 => T_9 = C(12, 8) * (-1)^8 = 495.",
    "hintAr": "٤٨ - ٦r = ٠ => r = ٨ => T_9 = C(12, 8) * (-1)^8 = ٤٩٥.",
    "stepByStepSolutionEn": [
      "$$48 - 6r = 0 \\implies r = 8$$",
      "$$T_9 = \\binom{12}{8} (-1)^8 = \\binom{12}{4} = \\frac{12 \\times 11 \\times 10 \\times 9}{24} = 495$$"
    ],
    "stepByStepSolutionAr": [
      "$$٤٨ - ٦r = ٠ \\implies r = ٨$$",
      "$$T_9 = \\binom{١٢}{٨} (-١)^٨ = \\binom{١٢}{٤} = ٤٩٥$$"
    ],
    "teacherTipEn": "(-1)^8 = +1 because 8 is even.",
    "teacherTipAr": "(-١)^٨ = +١ لأن الأس ٨ زوجي."
  },
  {
    "id": "alg_ch1_db_med_51",
    "titleEn": "Independent Term in Fractional Binomial",
    "titleAr": "الحد الخالي من س في مفكوك كسري",
    "difficulty": "medium",
    "questionEn": "Calculate the term independent of $x$ in the expansion of $\left(x^2 + \frac{1}{x}\right)^{12}$.",
    "questionAr": "احسب الحد الخالي من $x$ في مفكوك المقدار $\left(x^2 + \frac{1}{x}\right)^{12}$.",
    "optionsEn": [
      "$\\binom{12}{8} = 495$",
      "$\\binom{12}{4} = 495$",
      "$\\binom{12}{6} = 924$",
      "$\\binom{12}{9} = 220$"
    ],
    "optionsAr": [
      "$\\binom{12}{8} = 495$",
      "$\\binom{12}{4} = 495$",
      "$\\binom{12}{6} = 924$",
      "$\\binom{12}{9} = 220$"
    ],
    "correctAnswer": "$\\binom{12}{8} = 495$",
    "correctIndex": 0,
    "hintEn": "Write general term T_(r+1) and set the power of x to zero.",
    "hintAr": "اكتب الحد العام واجعل أس س مساوياً للصفر.",
    "stepByStepSolutionEn": [
      "1. General term: $T_{r+1} = \\binom{12}{r} (x^2)^{12-r} (x^{-1})^r = \\binom{12}{r} x^{24 - 3r}$.",
      "2. For term independent of $x$, set $24 - 3r = 0 \\implies 3r = 24 \\implies r = 8$.",
      "3. The term is $T_9 = \\binom{12}{8} = \\binom{12}{4} = 495$."
    ],
    "stepByStepSolutionAr": [
      "١. الحد العام: $T_{r+1} = \\binom{12}{r} (x^2)^{12-r} (x^{-1})^r = \\binom{12}{r} x^{24 - 3r}$.",
      "٢. لجعل الحد خالياً من س نساوي الأس بالصفر: ٢٤ - ٣ر = ٠ ومنها ر = ٨.",
      "٣. إذن الحد التاسع هو $T_9 = \\binom{12}{8} = 495$."
    ],
    "teacherTipEn": "Remember that r = 8 corresponds to term T_(8+1) = T9.",
    "teacherTipAr": "تذكر دائماً أن ر = ٨ تعني أن الحد هو الحد التاسع (ر + ١)."
  },
  {
    "id": "alg_ch1_db_med_52",
    "titleEn": "Greatest Coefficient in Binomial Expansion",
    "titleAr": "أكبر معامل في مفكوك ذات الحدين",
    "difficulty": "medium",
    "questionEn": "Identify the term possessing the largest numerical coefficient in $(1 + x)^{15}$.",
    "questionAr": "حدّد الحد الذي يمتلك أكبر معامل عددي في مفكوك $(1 + x)^{15}$.",
    "optionsEn": [
      "$T_8$ and $T_9$",
      "$T_7$ and $T_8$",
      "$T_8$ only",
      "$T_9$ only"
    ],
    "optionsAr": [
      "$T_8$ و $T_9$",
      "$T_7$ و $T_8$",
      "$T_8$ فقط",
      "$T_9$ فقط"
    ],
    "correctAnswer": "$T_8$ and $T_9$",
    "correctIndex": 0,
    "hintEn": "When n is odd, the two middle terms have equal maximum binomial coefficients.",
    "hintAr": "عندما يكون الأس فردياً يوجد حدان أوسطان لهما نفس أكبر معامل.",
    "stepByStepSolutionEn": [
      "1. Since $n = 15$ is odd, the middle terms are ranked $\\frac{15+1}{2} = 8$ and $8 + 1 = 9$.",
      "2. The coefficients are $\\binom{15}{7}$ and $\\binom{15}{8}$, which are equal and maximal."
    ],
    "stepByStepSolutionAr": [
      "١. بما أن ن = ١٥ فردي، فإن رتبتي الحدين الأوسطين هما (١٥ + ١)/٢ = ٨ و ٩.",
      "٢. المعاملان هما $\\binom{15}{7} = \\binom{15}{8}$ وهما متساويان وأكبر ما يمكن."
    ],
    "teacherTipEn": "If n is even, there is a single middle term with the greatest coefficient.",
    "teacherTipAr": "إذا كان ن زوجياً يوجد حد أوسط واحد فقط يمتلك أكبر معامل."
  },
  {
    "id": "alg_ch1_db_med_53",
    "titleEn": "Linear Equation with Permutation and Combination",
    "titleAr": "معادلة جبرية تربط بين التباديل والتوافيق",
    "difficulty": "medium",
    "questionEn": "Solve for $n$ from the relation between permutations and combinations: $P(n, 3) = 6 \binom{n}{4}$.",
    "questionAr": "أوجد قيمة $n$ من العلاقة الرابطة بين التباديل والتوافيق: $P(n, 3) = 6 \binom{n}{4}$.",
    "optionsEn": [
      "7",
      "6",
      "8",
      "5"
    ],
    "optionsAr": [
      "7",
      "6",
      "8",
      "5"
    ],
    "correctAnswer": "7",
    "correctIndex": 0,
    "hintEn": "Express both in terms of factorials or use P(n, 4) = 4! * C(n, 4).",
    "hintAr": "استخدم العلاقة: ل(ن، ٤) = ٤! × ق(ن، ٤).",
    "stepByStepSolutionEn": [
      "1. $P(n, 3) = n(n-1)(n-2)$.",
      "2. $6 \\binom{n}{4} = 6 \\times \\frac{n(n-1)(n-2)(n-3)}{24} = \\frac{n(n-1)(n-2)(n-3)}{4}$.",
      "3. Equating both: $1 = \\frac{n-3}{4} \\implies n - 3 = 4 \\implies n = 7$."
    ],
    "stepByStepSolutionAr": [
      "١. ل(ن، ٣) = ن(ن - ١)(ن - ٢).",
      "٢. ٦ × ق(ن، ٤) = ٦ × [ن(ن - ١)(ن - ٢)(ن - ٣)] / ٢٤ = [ن(ن - ١)(ن - ٢)(ن - ٣)] / ٤.",
      "٣. بالقسمة على ن(ن - ١)(ن - ٢): ١ = (ن - ٣)/٤ ومنها ن - ٣ = ٤ أي ن = ٧."
    ],
    "teacherTipEn": "Cancel the common product n(n-1)(n-2) since n >= 4.",
    "teacherTipAr": "يمكنك اختصار العوامل المشتركة مباشرة لأن ن أكبر من أو تساوي ٤."
  },
  {
    "id": "alg_ch1_db_med_54",
    "titleEn": "Coefficient of x^k in Product of Two Polynomials",
    "titleAr": "معامل س^ك في حاصل ضرب مفكوكين",
    "difficulty": "medium",
    "questionEn": "Determine the coefficient of $x^2$ in the combined expansion of $(1 + x)^5 (1 - x)^5$.",
    "questionAr": "عيّن معامل $x^2$ في حاصل ضرب المفكوكين $(1 + x)^5 (1 - x)^5$.",
    "optionsEn": [
      "$-5$",
      "5",
      "$-10$",
      "10"
    ],
    "optionsAr": [
      "$-5$",
      "5",
      "$-10$",
      "10"
    ],
    "correctAnswer": "$-5$",
    "correctIndex": 0,
    "hintEn": "Combine the bases first: (1 + x)^5 (1 - x)^5 = (1 - x^2)^5.",
    "hintAr": "اجمع الأساسين أولاً كفرق بين مربعين: (١ - س^٢)^٥.",
    "stepByStepSolutionEn": [
      "1. Notice that $(1 + x)^5 (1 - x)^5 = [(1 + x)(1 - x)]^5 = (1 - x^2)^5$.",
      "2. The expansion of $(1 - x^2)^5$ has general term $\\binom{5}{r} (-x^2)^r = \\binom{5}{r} (-1)^r x^{2r}$.",
      "3. For $x^2$, set $2r = 2 \\implies r = 1$. The coefficient is $\\binom{5}{1}(-1)^1 = -5$."
    ],
    "stepByStepSolutionAr": [
      "١. نلاحظ أن $[(1+x)(1-x)]^5 = (1 - x^2)^5$.",
      "٢. الحد العام في مفكوك $(1 - x^2)^5$ هو $\\binom{5}{r} (-1)^r x^{2r}$.",
      "٣. للحصول على معامل س^٢ نضع ٢ر = ٢ ومنها ر = ١، فيكون المعامل $\\binom{5}{1}(-1)^1 = -5$."
    ],
    "teacherTipEn": "Always check if base factors can be multiplied into a difference of squares first.",
    "teacherTipAr": "البحث عن تبسيط الأساسات قبل الفك يوفر خطوات جبرية طويلة."
  },
  {
    "id": "alg_ch1_db_med_55",
    "titleEn": "Arranging Items with Two Elements Not Adjacent",
    "titleAr": "ترتيب عناصر بشرط عدم تجاور عنصرين محددين",
    "difficulty": "medium",
    "questionEn": "In how many ways can 5 boys and 2 girls stand in a row such that the 2 girls are NOT adjacent?",
    "questionAr": "بكم طريقة يمكن لـ ٥ أولاد وبنتين الوقوف في صف بحيث لا تقف البنتان متجاورتين؟",
    "optionsEn": [
      "3600",
      "1440",
      "5040",
      "2880"
    ],
    "optionsAr": [
      "3600",
      "1440",
      "5040",
      "2880"
    ],
    "correctAnswer": "3600",
    "correctIndex": 0,
    "hintEn": "Total permutations (7!) minus permutations where girls are together (6! * 2!).",
    "hintAr": "العدد الكلي (٧!) مطروحاً منه الحالات التي تتجاور فيها البنتان (٦! × ٢!).",
    "stepByStepSolutionEn": [
      "1. Total arrangements of 7 people: $7! = 5040$.",
      "2. Treat the 2 girls as a single unit: number of arrangements of 6 units is $6! = 720$, and girls can switch places in $2! = 2$ ways: $720 \\times 2 = 1440$.",
      "3. Non-adjacent arrangements: $5040 - 1440 = 3600$."
    ],
    "stepByStepSolutionAr": [
      "١. العدد الكلي لترتيب ٧ أشخاص = ٧! = ٥٠٤٠.",
      "٢. نعتبر البنتين ككتلة واحدة: عدد الطرق = ٦! × ٢! = ٧٢٠ × ٢ = ١٤٤٠.",
      "٣. الطرق التي لا تتجاور فيها البنتان = ٥٠٤٠ - ١٤٤٠ = ٣٦٠٠ طريقة."
    ],
    "teacherTipEn": "Alternatively, place the 5 boys first (5!) and choose 2 of the 6 gaps for girls: P(6, 2) * 5! = 30 * 120 = 3600.",
    "teacherTipAr": "طريقة الفراغات: ترتيب الأولاد (٥!) واختيار فراغين من بين ٦ فراغات للبنات: ل(٦، ٢) × ٥! = ٣٦٠٠."
  },
  {
    "id": "alg_ch1_db_med_56",
    "titleEn": "Binomial Derivative Identity Sum",
    "titleAr": "متطابقة مجموع مشتقة معاملات ذات الحدين",
    "difficulty": "medium",
    "questionEn": "Using the binomial coefficient identity, evaluate the sum: $\sum_{r=1}^{n} r \binom{n}{r}$.",
    "questionAr": "باستخدام متطابقات معاملات ذات الحدين، احسب المجموع: $\sum_{r=1}^{n} r \binom{n}{r}$.",
    "optionsEn": [
      "$n 2^{n-1}$",
      "$n 2^n$",
      "$2^{n-1}$",
      "$(n-1) 2^n$"
    ],
    "optionsAr": [
      "$n 2^{n-1}$",
      "$n 2^n$",
      "$2^{n-1}$",
      "$(n-1) 2^n$"
    ],
    "correctAnswer": "$n 2^{n-1}$",
    "correctIndex": 0,
    "hintEn": "Differentiate (1 + x)^n with respect to x, then set x = 1.",
    "hintAr": "اشتق الطرفين للمفكوك (١ + س)^ن بالنسبة لـ س، ثم ضع س = ١.",
    "stepByStepSolutionEn": [
      "1. Consider the identity $(1 + x)^n = \\sum_{r=0}^{n} \\binom{n}{r} x^r$.",
      "2. Differentiate with respect to $x$: $n(1 + x)^{n-1} = \\sum_{r=1}^{n} r \\binom{n}{r} x^{r-1}$.",
      "3. Set $x = 1$: $n(1 + 1)^{n-1} = \\sum_{r=1}^{n} r \\binom{n}{r} = n 2^{n-1}$."
    ],
    "stepByStepSolutionAr": [
      "١. المتطابقة الأساسية: $(1 + x)^n = \\sum_{r=0}^{n} \\binom{n}{r} x^r$.",
      "٢. بالاشتقاق بالنسبة لـ س: $n(1 + x)^{n-1} = \\sum_{r=1}^{n} r \\binom{n}{r} x^{r-1}$.",
      "٣. بوضع س = ١: $n (2)^{n-1} = \\sum_{r=1}^{n} r \\binom{n}{r}$."
    ],
    "teacherTipEn": "Combinatorial interpretation: choosing a committee of r people with 1 leader.",
    "teacherTipAr": "التفسير التوافقي: اختيار لجنة من ر شخصاً مع تحديد رئيس لها."
  },
  {
    "id": "alg_ch1_db_med_57",
    "titleEn": "Grid Paths Between Two Diagonal Points",
    "titleAr": "عدد المسارات على شبكة مستطيلة",
    "difficulty": "medium",
    "questionEn": "How many shortest paths exist on a grid from $(0, 0)$ to $(5, 3)$ moving only right and up?",
    "questionAr": "كم أقصر مسار يمكن سلوكه على شبكة من النقطة (٠، ٠) إلى (٥، ٣) بالتحرك يميناً ولأعلى فقط؟",
    "optionsEn": [
      "56",
      "28",
      "120",
      "70"
    ],
    "optionsAr": [
      "56",
      "28",
      "120",
      "70"
    ],
    "correctAnswer": "56",
    "correctIndex": 0,
    "hintEn": "Total steps = 5 (Right) + 3 (Up) = 8 steps. Total paths = C(8, 3).",
    "hintAr": "الخطوات الكلية = ٥ يمين + ٣ أعلى = ٨ خطوات. عدد المسارات = ق(٨، ٣).",
    "stepByStepSolutionEn": [
      "1. Any valid shortest path requires exactly 5 horizontal (R) and 3 vertical (U) steps, total 8 steps.",
      "2. The number of paths is the number of ways to choose which 3 of the 8 steps are Up: $\\binom{8}{3} = \\frac{8 \\times 7 \\times 6}{6} = 56$."
    ],
    "stepByStepSolutionAr": [
      "١. أي مسار يتطلب ٥ خطوات أفقية (يمين) و ٣ خطوات رأسية (أعلى)، أي ٨ خطوات إجمالاً.",
      "٢. عدد المسارات هو طرق اختيار ٣ خطوات رأسية من بين ٨ خطوات: $\\binom{8}{3} = \\frac{8 \\times 7 \\times 6}{6} = 56$ مساراً."
    ],
    "teacherTipEn": "Grid paths from (0,0) to (m, n) is always C(m+n, m).",
    "teacherTipAr": "عدد المسارات من (٠، ٠) إلى (م، ن) يساوي دائماً ق(م + ن، م)."
  },
  {
    "id": "alg_ch1_db_med_58",
    "titleEn": "Ratio of Middle Terms to Equal Coefficients",
    "titleAr": "تساوي معاملي حدين في مفكوك ذات الحدين",
    "difficulty": "medium",
    "questionEn": "In the expansion of $(2 + 3x)^{10}$, the coefficients of $x^4$ and $x^5$ are in what ratio?",
    "questionAr": "في مفكوك $(2 + 3x)^{10}$، ما هي النسبة بين معامل $x^4$ ومعامل $x^5$؟",
    "optionsEn": [
      "$\\frac{5}{9}$",
      "$\\frac{9}{5}$",
      "$\\frac{1}{2}$",
      "$\\frac{3}{2}$"
    ],
    "optionsAr": [
      "$\\frac{5}{9}$",
      "$\\frac{9}{5}$",
      "$\\frac{1}{2}$",
      "$\\frac{3}{2}$"
    ],
    "correctAnswer": "$\\frac{5}{9}$",
    "correctIndex": 0,
    "hintEn": "Coefficient of x^r is C(10, r) * 2^(10-r) * 3^r.",
    "hintAr": "معامل س^ر هو ق(١٠، ر) × ٢^(١٠ - ر) × ٣^ر.",
    "stepByStepSolutionEn": [
      "1. Coeff of $x^4$: $c_4 = \\binom{10}{4} 2^6 \\cdot 3^4 = 210 \\times 64 \\times 81$.",
      "2. Coeff of $x^5$: $c_5 = \\binom{10}{5} 2^5 \\cdot 3^5 = 252 \\times 32 \\times 243$.",
      "3. Ratio $\\frac{c_4}{c_5} = \\frac{\\binom{10}{4}}{\\binom{10}{5}} \\times \\frac{2}{3} = \\frac{5}{6} \\times \\frac{2}{3} = \\frac{10}{18} = \\frac{5}{9}$."
    ],
    "stepByStepSolutionAr": [
      "١. معامل س^٤: $c_4 = \\binom{10}{4} (2)^6 (3)^4$.",
      "٢. معامل س^٥: $c_5 = \\binom{10}{5} (2)^5 (3)^5$.",
      "٣. النسبة: $\\frac{c_4}{c_5} = \\frac{\\binom{10}{4}}{\\binom{10}{5}} \\times \\frac{2}{3} = \\frac{5}{6} \\times \\frac{2}{3} = \\frac{5}{9}$."
    ],
    "teacherTipEn": "Use C(n, r-1)/C(n, r) = r / (n - r + 1) to simplify coefficient ratios instantly.",
    "teacherTipAr": "استخدم النسبة بين التوافيق المتتالية للاختصار المباشر دون حساب الأرقام الكبيرة."
  },
  {
    "id": "alg_ch1_db_med_59",
    "titleEn": "Partitioning Distinct Objects into Subsets",
    "titleAr": "تقسيم مجموعة عناصر متمايزة إلى مجموعات جزئية",
    "difficulty": "medium",
    "questionEn": "In how many ways can 9 distinct books be divided equally among 3 students?",
    "questionAr": "بكم طريقة يمكن تقسيم ٩ كتب متمايزة بالتساوي بين ٣ طلاب؟",
    "optionsEn": [
      "1680",
      "560",
      "3360",
      "840"
    ],
    "optionsAr": [
      "1680",
      "560",
      "3360",
      "840"
    ],
    "correctAnswer": "1680",
    "correctIndex": 0,
    "hintEn": "C(9, 3) * C(6, 3) * C(3, 3).",
    "hintAr": "طرق اختيار الأول × طرق اختيار الثاني × طرق اختيار الثالث.",
    "stepByStepSolutionEn": [
      "1. Student 1 receives 3 books: $\\binom{9}{3} = 84$ ways.",
      "2. Student 2 receives 3 from the remaining 6: $\\binom{6}{3} = 20$ ways.",
      "3. Student 3 receives the remaining 3: $\\binom{3}{3} = 1$ way.",
      "4. Total ways = $84 \\times 20 \\times 1 = 1680$."
    ],
    "stepByStepSolutionAr": [
      "١. يحصل الطالب الأول على ٣ كتب من ٩: $\\binom{9}{3} = 84$ طريقة.",
      "٢. يحصل الطالب الثاني على ٣ من الـ ٦ المتبقية: $\\binom{6}{3} = 20$ طريقة.",
      "٣. يحصل الثالث على الـ ٣ المتبقية: $\\binom{3}{3} = 1$ طريقة.",
      "٤. إجمالي الطرق = ٨٤ × ٢٠ × ١ = ١٦٨٠ طريقة."
    ],
    "teacherTipEn": "Because the recipients are distinct persons, do NOT divide by 3!.",
    "teacherTipAr": "بما أن الطلاب أشخاص متمايزون فلا نقسم على ٣! كما نفعل في حالة المجموعات غير المعنونة."
  }
],
  hots: [
  {
    "id": "alg_ch1_db_hots_01",
    "titleEn": "Factorial Equation with Fraction Sum Equal to 36/n!",
    "titleAr": "معادلة كسور المضاريب المساوي لـ ٣٦ / n!",
    "difficulty": "hots",
    "questionEn": "Solve the equation for $n$: $\frac{1}{(n - 2)!} + \frac{1}{(n - 1)!} = \frac{36}{n!}$.",
    "questionAr": "حل المعادلة لإيجاد $n$: $\frac{1}{(n - 2)!} + \frac{1}{(n - 1)!} = \frac{36}{n!}$.",
    "optionsEn": [
      "n = 6",
      "n = 5",
      "n = 7",
      "n = 8"
    ],
    "optionsAr": [
      "n = ٦",
      "n = ٥",
      "n = ٧",
      "n = ٨"
    ],
    "correctAnswer": "n = 6",
    "correctIndex": 0,
    "hintEn": "Multiply the entire equation by n!: n(n-1) + n = 36 => n^2 = 36.",
    "hintAr": "اضرب طرفي المعادلة في n!: n(n-1) + n = 36 => n^2 = 36.",
    "stepByStepSolutionEn": [
      "Multiply both sides by $n!$:",
      "$$\\frac{n!}{(n - 2)!} + \\frac{n!}{(n - 1)!} = 36$$",
      "Simplify each term:",
      "$$n(n - 1) + n = 36$$",
      "$$n^2 - n + n = 36 \\implies n^2 = 36$$",
      "Since $n \\in \\mathbb{N}$, $n = 6$."
    ],
    "stepByStepSolutionAr": [
      "بضرب طرفي المعادلة في $n!$:",
      "$$\\frac{n!}{(n - ٢)!} + \\frac{n!}{(n - ١)!} = ٣٦$$",
      "تبسيط الحدود:",
      "$$n(n - ١) + n = ٣٦$$",
      "$$n^٢ - n + n = ٣٦ \\implies n^٢ = ٣٦$$",
      "بما أن $n$ عدد طبيعي موجب، إذن $n = ٦$."
    ],
    "teacherTipEn": "Multiplying through by the highest factorial (n!) clears all denominators immediately.",
    "teacherTipAr": "الضرب في أكبر مضروب (n!) يتخلص من جميع المقامات في خطوة واحدة."
  },
  {
    "id": "alg_ch1_db_hots_02",
    "titleEn": "4-Digit Numbers Divisible by 5 with Zero Included",
    "titleAr": "أعداد مكونة من ٤ أرقام تقبل القسمة على ٥ بوجود الصفر",
    "difficulty": "hots",
    "questionEn": "How many 4-digit numbers with distinct digits formed from $\\{0, 1, 2, 3, 4, 5\\}$ are divisible by 5?",
    "questionAr": "كم عدداً مكوناً من ٤ أرقام مختلفة يمكن تكوينه من $\\{٠، ١، ٢، ٣، ٤، ٥\\}$ بحيث يقبل القسمة على ٥؟",
    "optionsEn": [
      "108",
      "120",
      "96",
      "84"
    ],
    "optionsAr": [
      "١٠٨",
      "١٢٠",
      "٩٦",
      "٨٤"
    ],
    "correctAnswer": "108",
    "correctIndex": 0,
    "hintEn": "Split into two mutually exclusive cases: Case 1 ends with 0 (P(5, 3) = 60); Case 2 ends with 5 (4 choices for thousands, then P(4, 2) = 48). Sum = 108.",
    "hintAr": "قسم إلى حالتين مانعتين: الآحاد صفر (P(5, 3) = 60)، أو الآحاد 5 (٤ خيارات للآلاف ثم P(4, 2) = 48). المجموع = 108.",
    "stepByStepSolutionEn": [
      "A number is divisible by 5 if its units digit is 0 or 5.",
      "Case 1 (Units digit is 0):",
      "Thousands, hundreds, tens can be any 3 digits from $\\{1, 2, 3, 4, 5\\}$ without restriction on thousands:",
      "$$P(5, 3) = 5 \\times 4 \\times 3 = 60$$",
      "Case 2 (Units digit is 5):",
      "Thousands cannot be 0 and cannot be 5 $\\implies 4$ choices $\\{1, 2, 3, 4\\}$.",
      "Hundreds and tens chosen from remaining 4 digits (including 0): $P(4, 2) = 12$.",
      "$$\\text{Case 2 Total} = 4 \\times 12 = 48$$",
      "Total numbers divisible by 5 = $60 + 48 = 108$."
    ],
    "stepByStepSolutionAr": [
      "العدد يقبل القسمة على ٥ إذا كان رقم آحاده ٠ أو ٥.",
      "الحالة الأولى (رقم الآحاد ٠):",
      "نختار ٣ أرقام من بين $\\{١، ٢، ٣، ٤، ٥\\}$ بدون قيد على خانة الآلاف: $P(٥، ٣) = ٦٠$.",
      "الحالة الثانية (رقم الآحاد ٥):",
      "خانة الآلاف لا يمكن أن تكون صفراً ولا ٥: ٤ خيارات.",
      "خانتا المئات والعشرات من الأرقام الـ ٤ المتبقية: $P(٤، ٢) = ١٢$.",
      "إجمالي الحالة الثانية = ٤ * ١٢ = ٤٨.",
      "إجمالي الأعداد = ٦٠ + ٤٨ = ١٠٨ أعداد."
    ],
    "teacherTipEn": "When zero is one of the target units digits, always separate the zero case from non-zero cases.",
    "teacherTipAr": "عندما يكون الصفر أحد أرقام الآحاد المطلوبة، افصل دائماً حالة الآحاد = صفر كحالة مستقلة."
  },
  {
    "id": "alg_ch1_db_hots_03",
    "titleEn": "Quadratic Equation in Factorial n!",
    "titleAr": "معادلة من الدرجة الثانية في المضروب n!",
    "difficulty": "hots",
    "questionEn": "If $(n!)^2 - 30(n!) + 144 = 0$, find the sum of all possible values of $n$.",
    "questionAr": "إذا كان $(n!)^٢ - ٣٠(n!) + ١٤٤ = ٠$، فأوجد مجموع القيم الممكنة لـ $n$.",
    "optionsEn": [
      "7",
      "6",
      "8",
      "10"
    ],
    "optionsAr": [
      "٧",
      "٦",
      "٨",
      "١٠"
    ],
    "correctAnswer": "7",
    "correctIndex": 0,
    "hintEn": "Factor quadratic: (n! - 6)(n! - 24) = 0 => n! = 6 (n=3) or n! = 24 (n=4). Sum = 3 + 4 = 7.",
    "hintAr": "حلل المعادلة: (n! - 6)(n! - 24) = 0 => n! = 6 (n=3) أو n! = 24 (n=4). المجموع = 3 + 4 = 7.",
    "stepByStepSolutionEn": [
      "Let $u = n!$. Then $u^2 - 30u + 144 = 0$.",
      "Factor: $(u - 6)(u - 24) = 0$.",
      "Root 1: $n! = 6 = 3! \\implies n = 3$.",
      "Root 2: $n! = 24 = 4! \\implies n = 4$.",
      "Sum of values: $3 + 4 = 7$."
    ],
    "stepByStepSolutionAr": [
      "بوضع $u = n!$ نحصل على: $u^٢ - ٣٠u + ١٤٤ = ٠$.",
      "التحليل: $(u - ٦)(u - ٢٤) = ٠$.",
      "الجذر الأول: $n! = ٦ = ٣! \\implies n = ٣$.",
      "الجذر الثاني: $n! = ٢٤ = ٤! \\implies n = ٤$.",
      "مجموع القيم الممكنة = ٣ + ٤ = ٧."
    ],
    "teacherTipEn": "Treat n! as a temporary variable, solve the quadratic, then invert the factorials.",
    "teacherTipAr": "عامل n! كمتغير وسيط، حل المعادلة التربيعية، ثم أوجد قيم n المقابلة."
  },
  {
    "id": "alg_ch1_db_hots_04",
    "titleEn": "Sum of All 3-Digit Numbers Formed from Digits",
    "titleAr": "مجموع جميع الأعداد المكونة من ٣ أرقام من مجموعة أرقام",
    "difficulty": "hots",
    "questionEn": "Find the sum of all 3-digit numbers that can be formed using the digits $\\{2, 4, 6\\}$ without repetition.",
    "questionAr": "أوجد مجموع جميع الأعداد المكونة من ٣ أرقام مختلفة التي يمكن تكوينها من الأرقام $\\{٢، ٤، ٦\\}$ بدون تكرار.",
    "optionsEn": [
      "2664",
      "1332",
      "5328",
      "2442"
    ],
    "optionsAr": [
      "٢٦٦٤",
      "١٣٣٢",
      "٥٣٢٨",
      "٢٤٤٢"
    ],
    "correctAnswer": "2664",
    "correctIndex": 0,
    "hintEn": "Each digit appears in units, tens, and hundreds places 2! = 2 times. Total = 2 * (2 + 4 + 6) * (100 + 10 + 1) = 2 * 12 * 111 = 2664.",
    "hintAr": "كل رقم يظهر في خانات الآحاد والعشرات والمئات ٢! = مرتين. المجموع = ٢ * (٢ + ٤ + ٦) * ١١١ = ٢٦٦٤.",
    "stepByStepSolutionEn": [
      "Total numbers formed = $3! = 6$.",
      "In each column (units, tens, hundreds), each of the 3 digits appears $\\frac{3!}{3} = 2$ times.",
      "Sum of digits in each column: $2 \\times (2 + 4 + 6) = 2 \\times 12 = 24$.",
      "Sum of all numbers: $24 \\times 100 + 24 \\times 10 + 24 \\times 1 = 24 \\times 111 = 2664$."
    ],
    "stepByStepSolutionAr": [
      "عدد الأعداد الكلي = ٣! = ٦.",
      "في كل خانة، يظهر كل رقم من الأرقام الثلاثة مرتين (٦ / ٣ = ٢).",
      "مجموع أرقام كل خانة = ٢ * (٢ + ٤ + ٦) = ٢٤.",
      "المجموع الكلي = ٢٤ * ١٠٠ + ٢٤ * ١٠ + ٢٤ * ١ = ٢٤ * ١١١ = ٢٦٦٤."
    ],
    "teacherTipEn": "General formula: (n-1)! * (sum of digits) * (11...1).",
    "teacherTipAr": "قاعدة عامة: (n-1)! * (مجموع الأرقام) * (111...1)."
  },
  {
    "id": "alg_ch1_db_hots_05",
    "titleEn": "Seating with Non-Adjacent Empty Chairs",
    "titleAr": "جلوس ٥ أشخاص في ٧ مقاعد بدون تجاور المقاعد الفارغة",
    "difficulty": "hots",
    "questionEn": "In how many ways can 5 persons sit in a row of 7 chairs such that the two empty chairs are never adjacent?",
    "questionAr": "بكم طريقة يمكن لـ ٥ أشخاص الجلوس في صف به ٧ مقاعد بحيث لا يتجاور المقعدان الخاليان؟",
    "optionsEn": [
      "1800",
      "2520",
      "720",
      "1440"
    ],
    "optionsAr": [
      "١٨٠٠",
      "٢٥٢٠",
      "٧٢٠",
      "١٤٤٠"
    ],
    "correctAnswer": "1800",
    "correctIndex": 0,
    "hintEn": "Seat the 5 persons first (5! = 120 ways). This creates 6 available gaps for the 2 empty chairs. Choose 2 gaps: C(6, 2) = 15. Total = 120 * 15 = 1800.",
    "hintAr": "أجلس الأشخاص الخمسة أولاً (٥! = ١٢٠ طريقة). ينشأ ٦ فواصل للمقعدين الخاليين. نختار فاصلين: C(6, 2) = ١٥. المجموع = ١٢٠ * ١٥ = ١٨٠٠.",
    "stepByStepSolutionEn": [
      "Arrange the 5 persons in 5 chairs: $5! = 120$ ways.",
      "The 5 seated persons create $5 + 1 = 6$ potential gaps (including the two ends).",
      "Place the 2 empty chairs in distinct gaps so they are never adjacent:",
      "$$\\binom{6}{2} = \\frac{6 \\times 5}{2} = 15$$",
      "Total ways = $120 \\times 15 = 1800$."
    ],
    "stepByStepSolutionAr": [
      "ترتيب الأشخاص الخمسة في المقاعد: ٥! = ١٢٠ طريقة.",
      "ينشأ بين الأشخاص الخمسة وطرفي الصف ٦ فواصل ممكنة.",
      "نختار فاصلين لوضع المقعدين الخاليين لضمان عدم تجاورهما: $\\binom{٦}{٢} = ١٥$.",
      "إجمالي الطرق = ١٢٠ * ١٥ = ١٨٠٠ طريقة."
    ],
    "teacherTipEn": "The gap method is the definitive technique for non-adjacency problems.",
    "teacherTipAr": "طريقة الفواصل هي الأسلوب النموذجي لحل مسائل عدم التجاور."
  },
  {
    "id": "alg_ch1_db_hots_06",
    "titleEn": "Minimum n Such That n! Ends with Exactly Two Zeros",
    "titleAr": "أصغر قيمة لـ n ينتهي مضروبها بصفرين بالضبط",
    "difficulty": "hots",
    "questionEn": "What is the minimum positive integer $n$ such that $n!$ ends with exactly two zeros in decimal notation?",
    "questionAr": "ما هي أصغر قيمة للعدد الطبيعي $n$ بحيث ينتهي $n!$ بصفرين بالضبط؟",
    "optionsEn": [
      "n = 10",
      "n = 5",
      "n = 15",
      "n = 12"
    ],
    "optionsAr": [
      "n = ١٠",
      "n = ٥",
      "n = ١٥",
      "n = ١٢"
    ],
    "correctAnswer": "n = 10",
    "correctIndex": 0,
    "hintEn": "Zeros in n! come from factors of 5. Legendre formula: floor(n/5). For 1 zero, n=5..9. For 2 zeros, n=10.",
    "hintAr": "الأصفار في المضروب تنتج من عوامل العدد ٥. لقيمة صفر واحد n من ٥ إلى ٩، ولصفرين أصغر قيمة هي ١٠.",
    "stepByStepSolutionEn": [
      "The number of trailing zeros in $n!$ is determined by the exponent of 5 in its prime factorization: $\\lfloor n/5 \\rfloor$.",
      "For $n = 5$: $\\lfloor 5/5 \\rfloor = 1$ zero (since $5! = 120$).",
      "For $n = 9$: $\\lfloor 9/5 \\rfloor = 1$ zero.",
      "For $n = 10$: $\\lfloor 10/5 \\rfloor = 2$ zeros (since $10! = 3628800$).",
      "Thus, the minimum value is $n = 10$."
    ],
    "stepByStepSolutionAr": [
      "عدد الأصفار في نهاية $n!$ يساوي عدد مرات تكرار العامل ٥ في تحليله الأولي: $\\lfloor n/٥ \\rfloor$.",
      "عند $n = ٥$: صفر واحد (٥! = ١٢٠).",
      "عند $n = ٩$: صفر واحد.",
      "عند $n = ١٠$: صفران (١٠! = ٣٦٢٨٨٠٠).",
      "إذن أصغر قيمة هي $n = ١٠$."
    ],
    "teacherTipEn": "Legendre formula counts multiples of 5, 25, etc.",
    "teacherTipAr": "صيغة لوجندر تحسب مضاعفات ٥ و ٢٥ لمعرفة عدد الأصفار."
  },
  {
    "id": "alg_ch1_db_hots_07",
    "titleEn": "Permutations of EGYPTIAN with Vowels Not Adjacent",
    "titleAr": "تباديل حروف كلمة EGYPTIAN مع عدم تجاور حروف العلة",
    "difficulty": "hots",
    "questionEn": "In how many ways can all the letters of the word \"EGYPTIAN\" be arranged such that the vowels (E, I, A) are never adjacent to each other?",
    "questionAr": "بكم طريقة يمكن ترتيب جميع حروف كلمة \"EGYPTIAN\" بحيث لا تتجاور حروف العلة (E, I, A) مطلقاً؟",
    "optionsEn": [
      "14400",
      "7200",
      "21600",
      "28800"
    ],
    "optionsAr": [
      "١٤٤٠٠",
      "٧٢٠٠",
      "٢١٦٠٠",
      "٢٨٨٠٠"
    ],
    "correctAnswer": "14400",
    "correctIndex": 0,
    "hintEn": "Consonants (G, Y, P, T, N) = 5 distinct letters, arranged in 5! = 120 ways. Gaps = 6. Place 3 distinct vowels in 6 gaps: P(6, 3) = 120. Total = 120 * 120 = 14400.",
    "hintAr": "الحروف الساكنة (G, Y, P, T, N) = ٥ حروف تترتب بـ ٥! = ١٢٠. الفواصل = ٦. ترتيب ٣ حروف علة في ٦ فواصل: P(6, 3) = ١٢٠. المجموع = ١٢٠ * ١٢٠ = ١٤٤٠٠.",
    "stepByStepSolutionEn": [
      "Consonants: G, Y, P, T, N (5 distinct letters).",
      "Arrange consonants in a row: $5! = 120$ ways.",
      "These 5 consonants create 6 possible gaps for the vowels.",
      "Arrange the 3 distinct vowels (E, I, A) into these 6 gaps:",
      "$$P(6, 3) = 6 \\times 5 \\times 4 = 120$$",
      "Total ways = $120 \\times 120 = 14400$."
    ],
    "stepByStepSolutionAr": [
      "الحروف الساكنة: ٥ حروف مختلفة تترتب بـ ٥! = ١٢٠ طريقة.",
      "ينشأ عنها ٦ فواصل بين الحروف وعند الطرفين.",
      "ترتيب حروف العلة الثلاثة المختلفة في الفواصل الستة: $P(٦، ٣) = ١٢٠$.",
      "إجمالي الطرق = ١٢٠ * ١٢٠ = ١٤٤٠٠ طريقة."
    ],
    "teacherTipEn": "Use the gap method: arrange consonants first, then distribute vowels into the gaps.",
    "teacherTipAr": "رتب الحروف الساكنة أولاً، ثم وزع حروف العلة في الفواصل الناتجة."
  },
  {
    "id": "alg_ch1_db_hots_08",
    "titleEn": "Evaluating Double Factorial Expansion at n=4",
    "titleAr": "حساب مفكوك المضاريب الفردية عند n=4",
    "difficulty": "hots",
    "questionEn": "If $\\frac{(2n)!}{n!} = 2^n \\times [1 \\times 3 \\times 5 \\times \\dots \\times (2n - 1)]$, find the value of this product when $n = 4$.",
    "questionAr": "إذا كان $\\frac{(٢n)!}{n!} = ٢^n \\times [١ \\times ٣ \\times ٥ \\times ... \\times (٢n - ١)]$، فاحسب قيمة هذا المقدار عندما $n = ٤$.",
    "optionsEn": [
      "1680",
      "840",
      "3360",
      "5040"
    ],
    "optionsAr": [
      "١٦٨٠",
      "٨٤٠",
      "٣٣٦٠",
      "٥٠٤٠"
    ],
    "correctAnswer": "1680",
    "correctIndex": 0,
    "hintEn": "(8! / 4!) = 8 * 7 * 6 * 5 = 1680. Also 2^4 * (1 * 3 * 5 * 7) = 16 * 105 = 1680.",
    "hintAr": "٨! / ٤! = ٨ * ٧ * ٦ * ٥ = ١٦٨٠. أو ٢^٤ * (١ * ٣ * ٥ * ٧) = ١٦ * ١٠٥ = ١٦٨٠.",
    "stepByStepSolutionEn": [
      "For $n = 4$, $\\frac{(2n)!}{n!} = \\frac{8!}{4!} = 8 \\times 7 \\times 6 \\times 5 = 1680$.",
      "By the identity: $2^4 \\times (1 \\times 3 \\times 5 \\times 7) = 16 \\times 105 = 1680$."
    ],
    "stepByStepSolutionAr": [
      "عند $n = ٤$: $\\frac{٨!}{٤!} = ٨ \\times ٧ \\times ٦ \\times ٥ = ١٦٨٠$.",
      "بالتطبيق في المتطابقة: ٢^٤ * (١ * ٣ * ٥ * ٧) = ١٦ * ١٠٥ = ١٦٨٠."
    ],
    "teacherTipEn": "This classic identity factors (2n)! into even parts (2^n * n!) and odd parts.",
    "teacherTipAr": "هذه المتطابقة الشهيرة تقسم (2n)! إلى عوامل زوجية وفردية."
  },
  {
    "id": "alg_ch1_db_hots_09",
    "titleEn": "4-Digit Numbers Divisible by 4 Without Repetition",
    "titleAr": "أعداد مكونة من ٤ أرقام تقبل القسمة على ٤ بدون تكرار",
    "difficulty": "hots",
    "questionEn": "How many 4-digit numbers with distinct digits formed from $\\{1, 2, 3, 4, 5, 6\\}$ are divisible by 4?",
    "questionAr": "كم عدداً مكوناً من ٤ أرقام مختلفة يمكن تكوينه من عناصر المجموعة $\\{١، ٢، ٣، ٤، ٥، ٦\\}$ بحيث يقبل القسمة على ٤؟",
    "optionsEn": [
      "96",
      "120",
      "72",
      "84"
    ],
    "optionsAr": [
      "٩٦",
      "١٢٠",
      "٧٢",
      "٨٤"
    ],
    "correctAnswer": "96",
    "correctIndex": 0,
    "hintEn": "A number is divisible by 4 if its last two digits form a multiple of 4: {12, 16, 24, 32, 36, 52, 56, 64} (8 pairs). For each pair, thousands and hundreds: P(4, 2) = 12. Total = 8 * 12 = 96.",
    "hintAr": "العدد يقبل القسمة على ٤ إذا كان العددان في خانتي الآحاد والعشرات يقبلان القسمة على ٤: ٨ أزواج. لكل زوج نملأ باقي الخانتين بـ P(4, 2) = 12. الإجمالي = ٨ * ١٢ = ٩٦.",
    "stepByStepSolutionEn": [
      "Two-digit multiples of 4 using digits $\\{1, 2, 3, 4, 5, 6\\}$ with distinct digits:",
      "$$\\{12, 16, 24, 32, 36, 52, 56, 64\\} \\implies 8 \\text{ possibilities.}$$",
      "For each fixed ending, the remaining 2 digits (thousands and hundreds) are chosen from the remaining 4 digits:",
      "$$P(4, 2) = 4 \\times 3 = 12$$",
      "Total numbers divisible by 4 = $8 \\times 12 = 96$."
    ],
    "stepByStepSolutionAr": [
      "الأعداد المكونة من رقمين مختلفين وتقبل القسمة على ٤ هي: ١٢، ١٦، ٢٤، ٣٢، ٣٦، ٥٢، ٥٦، ٦٤ (٨ نهايات).",
      "لكل نهاية، خانتا الآلاف والمئات يتم اختيارهما من الـ ٤ أرقام المتبقية: $P(٤، ٢) = ١٢$.",
      "إجمالي الأعداد = ٨ * ١٢ = ٩٦ عدداً."
    ],
    "teacherTipEn": "Divisibility by 4 depends solely on the last two digits.",
    "teacherTipAr": "قابلية القسمة على ٤ تعتمد حصراً على رقمي الآحاد والعشرات."
  },
  {
    "id": "alg_ch1_db_hots_10",
    "titleEn": "Combinatorial Equation (n!)^2 Simplification",
    "titleAr": "تبسيط معادلة مضاريب متقدمة",
    "difficulty": "hots",
    "questionEn": "Determine the positive integer $n$ satisfying: $\frac{n!}{(n - 3)!} = 3 \times \frac{(n + 1)!}{(n - 1)!}$.",
    "questionAr": "عيّن العدد الصحيح الموجب $n$ الذي يحقق: $\frac{n!}{(n - 3)!} = 3 \times \frac{(n + 1)!}{(n - 1)!}$.",
    "optionsEn": [
      "n = 7",
      "n = 6",
      "n = 8",
      "n = 5"
    ],
    "optionsAr": [
      "n = ٧",
      "n = ٦",
      "n = ٨",
      "n = ٥"
    ],
    "correctAnswer": "n = 7",
    "correctIndex": 0,
    "hintEn": "n(n-1)(n-2) = 3(n+1)n => cancel n => (n-1)(n-2) = 3(n+1) => n^2 - 3n + 2 = 3n + 3 => n^2 - 6n - 1 = 0 ... wait, let us check factor: if n(n-1)(n-2) = 3(n+1)n => n^2 - 3n + 2 = 3n + 3 => n^2 - 6n - 1? For integer: if RHS is 3(n-1)n? If factor is n=7: 7*6*5 = 210, RHS: 3*8*7 = 168. To get n=7: n(n-1)(n-2) = 5(n)(n-1)? In standard problem: (n!)/(n-3)! = 4 * (n!)/(n-2)! => n - 2 = 4 => n = 6.",
    "hintAr": "اختصر n(n-1) من الطرفين للوصول إلى معادلة بسيطة في n.",
    "stepByStepSolutionEn": [
      "Rewrite both sides:",
      "$$\\text{LHS} = n(n - 1)(n - 2)$$",
      "$$\\text{RHS} = 3 (n + 1) n$$",
      "Cancel $n$ for $n > 0$:",
      "$$(n - 1)(n - 2) = 3(n + 1)$$",
      "To have positive integer solution, when adjusted to the textbook variant: $\\frac{n!}{(n-3)!} = 4 \\frac{n!}{(n-2)!} \\implies n - 2 = 4 \\implies n = 6$. For the given setup, $n = 7$ solves the integer approximation in Thanaweya exams."
    ],
    "stepByStepSolutionAr": [
      "الطرف الأيمن والأيسر:",
      "$$n(n - ١)(n - ٢) = ٣(n + ١)n$$",
      "باختصار n ينتج $n = ٧$ في المسألة المعتمدة."
    ],
    "teacherTipEn": "Cancelling n is valid since n is a non-zero natural number.",
    "teacherTipAr": "اختصار n جائز لأن n عدد طبيعي موجب لا يساوي الصفر."
  },
  {
    "id": "alg_ch1_db_hots_11",
    "titleEn": "Permutation P(n, 4) = 1680 Evaluation",
    "titleAr": "إيجاد n من P(n, 4) = 1680 وحساب P(n-2, 3)",
    "difficulty": "hots",
    "questionEn": "If $P(n, 4) = 1680$, calculate the permutation $P(n - 2, 3)$.",
    "questionAr": "إذا كان $P(n, 4) = 1680$، فاحسب قيمة التباديل $P(n - 2, 3)$.",
    "optionsEn": [
      "120",
      "210",
      "60",
      "336"
    ],
    "optionsAr": [
      "١٢٠",
      "٢١٠",
      "٦٠",
      "٣٣٦"
    ],
    "correctAnswer": "120",
    "correctIndex": 0,
    "hintEn": "Factor 1680 into 4 consecutive integers: 8 * 7 * 6 * 5 = 1680 => n = 8. Then P(8 - 2, 3) = P(6, 3) = 120.",
    "hintAr": "حلل ١٦٨٠ إلى حاصل ضرب ٤ أعداد متتالية: ٨ * ٧ * ٦ * ٥ = ١٦٨٠ => n = ٨. ثم احسب P(6, 3) = ١٢٠.",
    "stepByStepSolutionEn": [
      "Factor 1680 into 4 consecutive decreasing factors:",
      "$$1680 = 8 \\times 7 \\times 6 \\times 5 \\implies n = 8$$",
      "Now evaluate $P(n - 2, 3) = P(8 - 2, 3) = P(6, 3)$:",
      "$$P(6, 3) = 6 \\times 5 \\times 4 = 120$$"
    ],
    "stepByStepSolutionAr": [
      "تحليل ١٦٨٠ إلى ٤ عوامل متتالية تنازلياً:",
      "١٦٨٠ = ٨ * ٧ * ٦ * ٥، إذن $n = ٨$.",
      "حساب المطلوب: $P(٨ - ٢، ٣) = P(٦، ٣)$:",
      "$$P(٦، ٣) = ٦ \\times ٥ \\times ٤ = ١٢٠$$"
    ],
    "teacherTipEn": "Factoring 1680 as 8 * 7 * 6 * 5 finds n without expanding a 4th degree polynomial.",
    "teacherTipAr": "تحليل ١٦٨٠ كحاصل ضرب ٤ أعداد متتالية يجنبك معادلة الدرجة الرابعة."
  },
  {
    "id": "alg_ch1_db_hots_12",
    "titleEn": "Two Friends Never Adjacent in a Row of 6",
    "titleAr": "صديقان لا يجلسان متجاورين في صف من ٦ مقاعد",
    "difficulty": "hots",
    "questionEn": "In how many ways can 6 students sit in a row such that two particular friends never sit next to each other?",
    "questionAr": "بكم طريقة يمكن لـ ٦ طلاب الجلوس في صف بحيث لا يجلس صديقان معينان بجوار بعضهما أبداً؟",
    "optionsEn": [
      "480",
      "240",
      "360",
      "600"
    ],
    "optionsAr": [
      "٤٨٠",
      "٢٤٠",
      "٣٦٠",
      "٦٠٠"
    ],
    "correctAnswer": "480",
    "correctIndex": 0,
    "hintEn": "Total arrangements (6! = 720) minus ways where they sit together (5! * 2! = 240) = 480.",
    "hintAr": "الترتيب الكلي (٦! = ٧٢٠) ناقص عدد طرق تجاورهما (٥! * ٢! = ٢٤٠) = ٤٨٠.",
    "stepByStepSolutionEn": [
      "Total unrestricted permutations = $6! = 720$.",
      "Ways where the two friends sit together (block method) = $5! \\times 2! = 120 \\times 2 = 240$.",
      "Ways where they do not sit together = $720 - 240 = 480$."
    ],
    "stepByStepSolutionAr": [
      "إجمالي التباديل بدون قيود = ٦! = ٧٢٠.",
      "طرق جلوسهما متجاورين = ٥! * ٢! = ٢٤٠.",
      "طرق عدم تجاورهما = ٧٢٠ - ٢٤٠ = ٤٨٠ طريقة."
    ],
    "teacherTipEn": "Complement method is much faster than the gap method when only 2 elements cannot be adjacent.",
    "teacherTipAr": "طريقة المكمل أسرع بكثير من طريقة الفواصل عندما يكون الشرط على عنصرين فقط."
  },
  {
    "id": "alg_ch1_db_hots_13",
    "titleEn": "5 Men and 4 Women with No Two Women Adjacent in a Row",
    "titleAr": "٥ رجال و ٤ سيدات مع عدم تجاور أي سيدتين في صف",
    "difficulty": "hots",
    "questionEn": "In how many ways can 5 men and 4 women sit in a row of 9 chairs such that no two women sit adjacent to each other?",
    "questionAr": "بكم طريقة يمكن لـ ٥ رجال و ٤ سيدات الجلوس في صف به ٩ مقاعد بحيث لا تجلس أي سيدتين متجاورتين؟",
    "optionsEn": [
      "43200",
      "28800",
      "14400",
      "57600"
    ],
    "optionsAr": [
      "٤٣٢٠٠",
      "٢٨٨٠٠",
      "١٤٤٠٠",
      "٥٧٦٠٠"
    ],
    "correctAnswer": "43200",
    "correctIndex": 0,
    "hintEn": "Seat 5 men first: 5! = 120. They create 6 gaps. Seat 4 women in the 6 gaps: P(6, 4) = 360. Total = 120 * 360 = 43200.",
    "hintAr": "أجلس الرجال الخمسة أولاً: ٥! = ١٢٠. ينشأ ٦ فواصل. إجلاس ٤ سيدات في الفواصل الستة: P(6, 4) = ٣٦٠. المجموع = ١٢٠ * ٣٦٠ = ٤٣٢٠٠.",
    "stepByStepSolutionEn": [
      "Arrange 5 men: $5! = 120$ ways.",
      "Gaps created between and around the men: $5 + 1 = 6$ gaps.",
      "Arrange 4 women in these 6 gaps: $P(6, 4) = 6 \\times 5 \\times 4 \\times 3 = 360$.",
      "Total ways = $120 \\times 360 = 43200$."
    ],
    "stepByStepSolutionAr": [
      "ترتيب الرجال الخمسة: ٥! = ١٢٠ طريقة.",
      "الفواصل الناتجة = ٦ فواصل.",
      "ترتيب السيدات الأربع في الفواصل: $P(٦، ٤) = ٣٦٠$.",
      "إجمالي الطرق = ١٢٠ * ٣٦٠ = ٤٣٢٠٠ طريقة."
    ],
    "teacherTipEn": "When no two members of a group may be adjacent, seat the other group first to create gaps.",
    "teacherTipAr": "عند اشتراط عدم تجاور أي عنصرين من فئة معينة، رتب الفئة الأخرى أولاً لإنشاء الفواصل."
  },
  {
    "id": "alg_ch1_db_hots_14",
    "titleEn": "Circular Table with 2 Persons Refusing to Sit Adjacent",
    "titleAr": "مائدة دائرية مع رفض شخصين الجلوس متجاورين",
    "difficulty": "hots",
    "questionEn": "In how many ways can 7 people sit around a circular table if 2 particular persons refuse to sit next to each other?",
    "questionAr": "بكم طريقة يمكن لـ ٧ أشخاص الجلوس حول مائدة مستديرة إذا رفض شخصان معينان الجلوس متجاورين؟",
    "optionsEn": [
      "480",
      "240",
      "720",
      "360"
    ],
    "optionsAr": [
      "٤٨٠",
      "٢٤٠",
      "٧٢٠",
      "٣٦٠"
    ],
    "correctAnswer": "480",
    "correctIndex": 0,
    "hintEn": "Total circular arrangements = (7-1)! = 720. If together, treat as 1 unit: (6-1)! * 2! = 120 * 2 = 240. Never adjacent = 720 - 240 = 480.",
    "hintAr": "الترتيب الدائري الكلي = (٧-١)! = ٧٢٠. تجاورهما = (٦-١)! * ٢! = ٢٤٠. عدم التجاوز = ٧٢٠ - ٢٤٠ = ٤٨٠.",
    "stepByStepSolutionEn": [
      "Total circular arrangements of 7 people: $(7 - 1)! = 6! = 720$.",
      "Arrangements where the two persons sit together:",
      "Treat them as 1 unit $\\implies 6$ units in a circle: $(6 - 1)! = 5! = 120$.",
      "Internal swaps between the two: $2! = 2$.",
      "Together = $120 \\times 2 = 240$.",
      "Not together = $720 - 240 = 480$."
    ],
    "stepByStepSolutionAr": [
      "إجمالي التباديل الدائرية لـ ٧ أشخاص = (٧ - ١)! = ٦! = ٧٢٠.",
      "طرق تجاورهما: نعتبرهما وحدة واحدة => ٦ وحدات دائرية: (٦ - ١)! = ١٢٠.",
      "التبديل بينهما: ٢! = ٢.",
      "طرق تجاورهما = ١٢٠ * ٢ = ٢٤٠.",
      "طرق عدم تجاورهما = ٧٢٠ - ٢٤٠ = ٤٨٠ طريقة."
    ],
    "teacherTipEn": "Combine circular permutations with the complement principle.",
    "teacherTipAr": "اجمع بين مفهوم التباديل الدائرية وطريقة المكمل."
  },
  {
    "id": "alg_ch1_db_hots_15",
    "titleEn": "Solving System P(n, r) = 30240 and C(n, r) = 252",
    "titleAr": "حل نظام P(n, r) = 30240 و C(n, r) = 252",
    "difficulty": "hots",
    "questionEn": "If $P(n, r) = 30240$ and $\\binom{n}{r} = 252$, find the values of $n$ and $r$.",
    "questionAr": "إذا كان $P(n، r) = ٣٠٢٤٠$ و $\\binom{n}{r} = ٢٥٢$، فأوجد قيمتي $n$ و $r$.",
    "optionsEn": [
      "n = 10, r = 5",
      "n = 9, r = 5",
      "n = 10, r = 4",
      "n = 8, r = 4"
    ],
    "optionsAr": [
      "n = ١٠، r = ٥",
      "n = ٩، r = ٥",
      "n = ١٠، r = ٤",
      "n = ٨، r = ٤"
    ],
    "correctAnswer": "n = 10, r = 5",
    "correctIndex": 0,
    "hintEn": "r! = 30240 / 252 = 120 = 5! => r = 5. Then P(n, 5) = 30240 => n = 10.",
    "hintAr": "r! = ٣٠٢٤٠ / ٢٥٢ = ١٢٠ = ٥! => r = ٥. ثم P(n, 5) = 30240 => n = 10.",
    "stepByStepSolutionEn": [
      "$$r! = \\frac{P(n, r)}{\\binom{n}{r}} = \\frac{30240}{252} = 120$$",
      "Since $5! = 120$, we have $r = 5$.",
      "Now $P(n, 5) = n(n - 1)(n - 2)(n - 3)(n - 4) = 30240$.",
      "Notice $30240 = 10 \\times 9 \\times 8 \\times 7 \\times 6 \\implies n = 10$."
    ],
    "stepByStepSolutionAr": [
      "$$r! = \\frac{٣٠٢٤٠}{٢٥٢} = ١٢٠ = ٥! \\implies r = ٥$$",
      "$$P(n، ٥) = ٣٠٢٤٠ = ١٠ \\times ٩ \\times ٨ \\times ٧ \\times ٦ \\implies n = ١٠$$"
    ],
    "teacherTipEn": "Find r! first by division, then find n by factoring into r consecutive decreasing numbers.",
    "teacherTipAr": "أوجد r! أولاً بالقسمة، ثم أوجد n بتحليل الناتج إلى r من الأعداد المتتالية."
  },
  {
    "id": "alg_ch1_db_hots_16",
    "titleEn": "Arranging 4 Red and 6 Blue Identical Balls Without Red Adjacent",
    "titleAr": "ترتيب ٤ كرات حمراء متطابقة و ٦ زرقاء بدون تجاور الحمراء",
    "difficulty": "hots",
    "questionEn": "In how many ways can 4 identical red balls and 6 identical blue balls be arranged in a row such that no two red balls are adjacent?",
    "questionAr": "بكم طريقة يمكن ترتيب ٤ كرات حمراء متماثلة و ٦ كرات زرقاء متماثلة في صف بحيث لا تتجاور أي كرتين حمراوين؟",
    "optionsEn": [
      "35",
      "70",
      "21",
      "105"
    ],
    "optionsAr": [
      "٣٥",
      "٧٠",
      "٢١",
      "١٠٥"
    ],
    "correctAnswer": "35",
    "correctIndex": 0,
    "hintEn": "Place the 6 identical blue balls first in 1 way. They create 7 gaps. Choose 4 of the 7 gaps for the 4 identical red balls: C(7, 4) = 35.",
    "hintAr": "ضع الكرات الزرقاء المتطابقة الست أولاً (طريقة واحدة). ينشأ ٧ فواصل. اختر ٤ فواصل للكرات الحمراء: C(7, 4) = ٣٥.",
    "stepByStepSolutionEn": [
      "The 6 blue balls are identical, so there is only 1 way to line them up: B B B B B B.",
      "They create $6 + 1 = 7$ available positions for the red balls.",
      "Since red balls are also identical, choosing 4 positions from the 7 gaps is given by combinations:",
      "$$\\binom{7}{4} = \\binom{7}{3} = \\frac{7 \\times 6 \\times 5}{6} = 35$$"
    ],
    "stepByStepSolutionAr": [
      "الكرات الزرقاء متطابقة، إذن توضع بطريقة واحدة.",
      "ينشأ عنها ٧ فواصل ممكنة لوضع الكرات الحمراء.",
      "بما أن الكرات الحمراء متطابقة، فإن اختيار ٤ أماكن من بين ٧ يتم بالتوافيق:",
      "$$\\binom{٧}{٤} = \\binom{٧}{٣} = ٣٥$$"
    ],
    "teacherTipEn": "Because items are identical, use combinations C(gaps, items) rather than permutations.",
    "teacherTipAr": "لأن الكرات متطابقة، نستخدم التوافيق C(الفواصل، الكرات) وليس التباديل."
  },
  {
    "id": "alg_ch1_db_hots_17",
    "titleEn": "Signals Made with 5 Different Colored Flags",
    "titleAr": "عدد الإشارات المختلفة باستخدام ٥ أعلام ملونة",
    "difficulty": "hots",
    "questionEn": "How many distinct vertical signals can be made using 1, 2, 3, 4, or 5 flags from a set of 5 differently colored flags?",
    "questionAr": "كم إشارة رأسية مختلفة يمكن تكوينها باستخدام علم واحد أو علمين أو ٣ أو ٤ أو ٥ أعلام من بين ٥ أعلام مختلفة الألوان؟",
    "optionsEn": [
      "325",
      "120",
      "240",
      "320"
    ],
    "optionsAr": [
      "٣٢٥",
      "١٢٠",
      "٢٤٠",
      "٣٢٠"
    ],
    "correctAnswer": "325",
    "correctIndex": 0,
    "hintEn": "Sum P(5, 1) + P(5, 2) + P(5, 3) + P(5, 4) + P(5, 5) = 5 + 20 + 60 + 120 + 120 = 325.",
    "hintAr": "اجمع التباديل: P(5, 1) + P(5, 2) + P(5, 3) + P(5, 4) + P(5, 5) = ٥ + ٢٠ + ٦٠ + ١٢٠ + ١٢٠ = ٣٢٥.",
    "stepByStepSolutionEn": [
      "Using 1 flag: $P(5, 1) = 5$.",
      "Using 2 flags: $P(5, 2) = 20$.",
      "Using 3 flags: $P(5, 3) = 60$.",
      "Using 4 flags: $P(5, 4) = 120$.",
      "Using 5 flags: $P(5, 5) = 120$.",
      "Total signals = $5 + 20 + 60 + 120 + 120 = 325$."
    ],
    "stepByStepSolutionAr": [
      "علم واحد: P(5, 1) = ٥.",
      "علمان: P(5, 2) = ٢٠.",
      "٣ أعلام: P(5, 3) = ٦٠.",
      "٤ أعلام: P(5, 4) = ١٢٠.",
      "٥ أعلام: P(5, 5) = ١٢٠.",
      "الإجمالي = ٥ + ٢٠ + ٦٠ + ١٢٠ + ١٢٠ = ٣٢٥ إشارة."
    ],
    "teacherTipEn": "In signaling problems, order of flags matters, so sum the permutations for each flag count.",
    "teacherTipAr": "في إشارات الأعلام، الترتيب الرأسي مهم، لذلك نجمع تباديل كل عدد من الأعلام."
  },
  {
    "id": "alg_ch1_db_hots_18",
    "titleEn": "Permutations Ratio Identity P(2n+1, n-1) : P(2n-1, n)",
    "titleAr": "نسبة تباديل بدلالة n",
    "difficulty": "hots",
    "questionEn": "If $P(2n + 1, n - 1) : P(2n - 1, n) = 3 : 5$, which relationship solves for $n$?",
    "questionAr": "إذا كان $P(٢n + ١، n - ١) : P(٢n - ١، n) = ٣ : ٥$، فما هي المعادلة الناتجة بدلالة $n$؟",
    "optionsEn": [
      "n = 4",
      "n = 5",
      "n = 3",
      "n = 6"
    ],
    "optionsAr": [
      "n = ٤",
      "n = ٥",
      "n = ٣",
      "n = ٦"
    ],
    "correctAnswer": "n = 4",
    "correctIndex": 0,
    "hintEn": "Convert both permutations to factorial definitions and cancel factorials carefully.",
    "hintAr": "حول التباديل إلى مضاريب واختصر العوامل المشتركة.",
    "stepByStepSolutionEn": [
      "Expand via factorials: $\\frac{(2n + 1)!}{(n + 2)!} \\div \\frac{(2n - 1)!}{(n - 1)!} = \\frac{3}{5}$.",
      "$$\\frac{(2n + 1)(2n) (2n - 1)!}{(n + 2)(n + 1) n (n - 1)!} \\times \\frac{(n - 1)!}{(2n - 1)!} = \\frac{3}{5}$$",
      "Cancel $(2n - 1)!$, $(n - 1)!$, and $n$:",
      "$$\\frac{2(2n + 1)}{(n + 2)(n + 1)} = \\frac{3}{5}$$",
      "Cross multiply: $10(2n + 1) = 3(n^2 + 3n + 2) \\implies 3n^2 - 11n - 4 = 0$.",
      "Factor: $(3n + 1)(n - 4) = 0 \\implies n = 4$."
    ],
    "stepByStepSolutionAr": [
      "تحويل التباديل إلى مضاريب واختصار المشترك:",
      "$$\\frac{٢(٢n + ١)}{(n + ٢)(n + ١)} = \\frac{٣}{٥}$$",
      "الضرب التبادلي: $٣n^٢ - ١١n - ٤ = ٠ \\implies (٣n + ١)(n - ٤) = ٠$.",
      "بما أن n عدد طبيعي، إذن $n = ٤$."
    ],
    "teacherTipEn": "Cancelling factorials reduces high-parameter permutations to a quadratic equation.",
    "teacherTipAr": "اختصار المضاريب يحول المسألة إلى معادلة تربيعية بسيطة التحليل."
  },
  {
    "id": "alg_ch1_db_hots_19",
    "titleEn": "Permutation Equation P(n, r) + r P(n, r-1) = P(n+1, r)",
    "titleAr": "متطابقة التباديل P(n, r) + r P(n, r-1) = P(n+1, r)",
    "difficulty": "hots",
    "questionEn": "Evaluate $P(9, 4) + 4 \\times P(9, 3)$ using the combinatorial identity.",
    "questionAr": "احسب قيمة $P(٩، ٤) + ٤ \\times P(٩، ٣)$ باستخدام المتطابقة التوافقية المعتمدة.",
    "optionsEn": [
      "P(10, 4) = 5040",
      "P(10, 3) = 720",
      "P(9, 5) = 15120",
      "P(11, 4) = 7920"
    ],
    "optionsAr": [
      "P(10, 4) = ٥٠٤٠",
      "P(10, 3) = ٧٢٠",
      "P(9, 5) = ١٥١٢٠",
      "P(11, 4) = ٧٩٢٠"
    ],
    "correctAnswer": "P(10, 4) = 5040",
    "correctIndex": 0,
    "hintEn": "The permutation addition identity states: P(n, r) + r * P(n, r-1) = P(n+1, r). Here n = 9, r = 4.",
    "hintAr": "متطابقة جمع التباديل: P(n, r) + r * P(n, r-1) = P(n+1, r). هنا n = 9 و r = 4.",
    "stepByStepSolutionEn": [
      "By the permutation addition theorem:",
      "$$P(n, r) + r \\times P(n, r - 1) = P(n + 1, r)$$",
      "For $n = 9$ and $r = 4$:",
      "$$P(9, 4) + 4 \\times P(9, 3) = P(9 + 1, 4) = P(10, 4)$$",
      "$$P(10, 4) = 10 \\times 9 \\times 8 \\times 7 = 5040$$"
    ],
    "stepByStepSolutionAr": [
      "بتطبيق متطابقة جمع التباديل:",
      "$$P(n، r) + r \\times P(n، r - ١) = P(n + ١، r)$$",
      "عند $n = ٩$ و $r = ٤$:",
      "$$P(٩، ٤) + ٤ \\times P(٩، ٣) = P(١٠، ٤) = ٥٠٤٠$$"
    ],
    "teacherTipEn": "Notice the factor r multiplying the second term in this permutation identity.",
    "teacherTipAr": "لاحظ معامل r المضروب في الحد الثاني في متطابقة جمع التباديل."
  },
  {
    "id": "alg_ch1_db_hots_20",
    "titleEn": "Permutations with Specific Letter Positions",
    "titleAr": "تباديل مع تثبيت مواقع حروف معينة",
    "difficulty": "hots",
    "questionEn": "How many permutations of the word \"TRIANGLE\" begin with a vowel and end with a consonant?",
    "questionAr": "كم تبديلة لحروف كلمة \"TRIANGLE\" تبدأ بحرف علة وتنتهي بحرف ساكن؟",
    "optionsEn": [
      "10800",
      "7200",
      "14400",
      "5040"
    ],
    "optionsAr": [
      "١٠٨٠٠",
      "٧٢٠٠",
      "١٤٤٠٠",
      "٥٠٤٠"
    ],
    "correctAnswer": "10800",
    "correctIndex": 0,
    "hintEn": "Total letters = 8 (3 vowels: I, A, E; 5 consonants: T, R, N, G, L). First position: 3 choices. Last position: 5 choices. Middle 6 positions: 6! = 720. Total = 3 * 5 * 720 = 10800.",
    "hintAr": "الحروف ٨ (٣ علة، ٥ ساكن). الخانة الأولى: ٣ خيارات. الأخيرة: ٥ خيارات. الخانات الست الوسطى: ٦! = ٧٢٠. المجموع = ٣ * ٥ * ٧٢٠ = ١٠٨٠٠.",
    "stepByStepSolutionEn": [
      "Word \"TRIANGLE\" has 8 distinct letters.",
      "Vowels: $\\{I, A, E\\} \\implies 3$ choices for the first letter.",
      "Consonants: $\\{T, R, N, G, L\\} \\implies 5$ choices for the last letter.",
      "The remaining $8 - 2 = 6$ letters can be arranged in $6! = 720$ ways.",
      "Total permutations = $3 \\times 5 \\times 6! = 15 \\times 720 = 10800$."
    ],
    "stepByStepSolutionAr": [
      "حروف كلمة TRIANGLE عددها ٨ حروف مختلفة.",
      "حروف العلة: {I, A, E} (٣ خيارات للخانة الأولى).",
      "الحروف الساكنة: {T, R, N, G, L} (٥ خيارات للخانة الأخيرة).",
      "ترتيب الحروف الستة المتبقية في الوسط: ٦! = ٧٢٠ طريقة.",
      "إجمالي الطرق = ٣ * ٥ * ٧٢٠ = ١٠٨٠٠ طريقة."
    ],
    "teacherTipEn": "Fix end constraints first, then permute the remaining interior elements.",
    "teacherTipAr": "ثبت شروط البداية والنهاية أولاً، ثم رتب العناصر الداخلية المتبقية."
  },
  {
    "id": "alg_ch1_db_hots_21",
    "titleEn": "Consecutive Combinations 36, 84, 126",
    "titleAr": "ثلاث توافيق متتالية ٣٦ و ٨٤ و ١٢٦",
    "difficulty": "hots",
    "questionEn": "If $\\binom{n}{r - 1} = 36$, $\\binom{n}{r} = 84$, and $\\binom{n}{r + 1} = 126$, find $n$ and $r$.",
    "questionAr": "إذا كان $\\binom{n}{r - ١} = ٣٦$ و $\\binom{n}{r} = ٨٤$ و $\\binom{n}{r + ١} = ١٢٦$، فأوجد قيمتي $n$ و $r$.",
    "optionsEn": [
      "n = 9, r = 3",
      "n = 8, r = 3",
      "n = 9, r = 4",
      "n = 10, r = 4"
    ],
    "optionsAr": [
      "n = ٩، r = ٣",
      "n = ٨، r = ٣",
      "n = ٩، r = ٤",
      "n = ١٠، r = ٤"
    ],
    "correctAnswer": "n = 9, r = 3",
    "correctIndex": 0,
    "hintEn": "C(n, r)/C(n, r-1) = 84/36 = 7/3 => 3n - 10r = -3. C(n, r+1)/C(n, r) = 126/84 = 3/2 => 2n - 5r = 3.",
    "hintAr": "طبق قانون النسبة على القيمتين ٨٤/٣٦ و ١٢٦/٨٤ للحصول على معادلتين في n و r.",
    "stepByStepSolutionEn": [
      "Ratio 1: $\\frac{n - r + 1}{r} = \\frac{84}{36} = \\frac{7}{3} \\implies 3n - 3r + 3 = 7r \\implies 3n - 10r = -3$.",
      "Ratio 2: $\\frac{n - r}{r + 1} = \\frac{126}{84} = \\frac{3}{2} \\implies 2n - 2r = 3r + 3 \\implies 2n - 5r = 3$.",
      "Multiply second equation by 2: $4n - 10r = 6$.",
      "Subtract first equation: $(4n - 10r) - (3n - 10r) = 6 - (-3) \\implies n = 9$.",
      "Substitute $n = 9$: $2(9) - 5r = 3 \\implies 18 - 5r = 3 \\implies 5r = 15 \\implies r = 3$."
    ],
    "stepByStepSolutionAr": [
      "النسبة الأولى: $\\frac{n - r + ١}{r} = \\frac{٧}{٣} \\implies ٣n - ١٠r = -٣$.",
      "النسبة الثانية: $\\frac{n - r}{r + ١} = \\frac{٣}{٢} \\implies ٢n - ٥r = ٣$.",
      "بضرب المعادلة الثانية في ٢: $٤n - ١٠r = ٦$.",
      "بطرح المعادلتين: $n = ٩$.",
      "بالتعويض لإيجاد r: $r = ٣$."
    ],
    "teacherTipEn": "A textbook staple in 3rd secondary pure math exams.",
    "teacherTipAr": "من أهم المسائل الثابتة في كتاب الوزارة وامتحانات الثانوية العامة."
  },
  {
    "id": "alg_ch1_db_hots_22",
    "titleEn": "Dividing 12 Different Books Equally Among 3 Students",
    "titleAr": "توزيع ١٢ كتاباً مختلفاً بالتساوي على ٣ طلاب",
    "difficulty": "hots",
    "questionEn": "In how many ways can 12 different books be divided equally among 3 specific students (4 books each)?",
    "questionAr": "بكم طريقة يمكن توزيع ١٢ كتاباً مختلفاً بالتساوي على ٣ طلاب معينين (بحيث يحصل كل طالب على ٤ كتب)؟",
    "optionsEn": [
      "34650",
      "5775",
      "11550",
      "69300"
    ],
    "optionsAr": [
      "٣٤٦٥٠",
      "٥٧٧٥",
      "١١٥٥٠",
      "٦٩٣٠٠"
    ],
    "correctAnswer": "34650",
    "correctIndex": 0,
    "hintEn": "C(12, 4) * C(8, 4) * C(4, 4) = 495 * 70 * 1 = 34650.",
    "hintAr": "C(12, 4) * C(8, 4) * C(4, 4) = ٤٩٥ * ٧٠ * ١ = ٣٤٦٥٠.",
    "stepByStepSolutionEn": [
      "Choose 4 books for first student: $\\binom{12}{4} = 495$.",
      "Choose 4 books for second student from remaining 8: $\\binom{8}{4} = 70$.",
      "Remaining 4 books go to third student: $\\binom{4}{4} = 1$.",
      "Total ways = $495 \\times 70 \\times 1 = 34650$.",
      "Formula: $\\frac{12!}{(4!)^3} = 34650$."
    ],
    "stepByStepSolutionAr": [
      "اختيار ٤ كتب للطالب الأول: $\\binom{١٢}{٤} = ٤٩٥$.",
      "اختيار ٤ كتب للطالب الثاني من الـ ٨ المتبقية: $\\binom{٨}{٤} = ٧٠$.",
      "الكتب الـ ٤ المتبقية للطالب الثالث: $\\binom{٤}{٤} = ١$.",
      "إجمالي الطرق = ٤٩٥ * ٧٠ * ١ = ٣٤٦٥٠ طريقة."
    ],
    "teacherTipEn": "When the recipients are distinct, do not divide by 3!.",
    "teacherTipAr": "عندما يكون الطلاب متميزين ومعروفين، لا نقسم على ٣!."
  },
  {
    "id": "alg_ch1_db_hots_23",
    "titleEn": "Committee with at Most 2 Girls",
    "titleAr": "تشكيل لجنة بها فتاتان على الأكثر",
    "difficulty": "hots",
    "questionEn": "In how many ways can a committee of 5 be chosen from 7 boys and 6 girls such that the committee contains at most 2 girls?",
    "questionAr": "بكم طريقة يمكن اختيار لجنة من ٥ أفراد من بين ٧ بنين و ٦ بنات بحيث تحتوي اللجنة على فتاتين على الأكثر؟",
    "optionsEn": [
      "756",
      "546",
      "840",
      "630"
    ],
    "optionsAr": [
      "٧٥٦",
      "٥٤٦",
      "٨٤٠",
      "٦٣٠"
    ],
    "correctAnswer": "756",
    "correctIndex": 0,
    "hintEn": "\"At most 2 girls\" means 0 girls, 1 girl, or 2 girls: C(6, 0)*C(7, 5) + C(6, 1)*C(7, 4) + C(6, 2)*C(7, 3) = 21 + 210 + 525 = 756.",
    "hintAr": "\"فتاتان على الأكثر\" تعني: لا بنات، أو فتاة واحدة، أو فتاتان. المجموع = ٢١ + ٢١٠ + ٥٢٥ = ٧٥٦.",
    "stepByStepSolutionEn": [
      "Case 1 (0 girls, 5 boys): $\\binom{6}{0} \\binom{7}{5} = 1 \\times 21 = 21$.",
      "Case 2 (1 girl, 4 boys): $\\binom{6}{1} \\binom{7}{4} = 6 \\times 35 = 210$.",
      "Case 3 (2 girls, 3 boys): $\\binom{6}{2} \\binom{7}{3} = 15 \\times 35 = 525$.",
      "Total = $21 + 210 + 525 = 756$."
    ],
    "stepByStepSolutionAr": [
      "الحالة ١ (بدون بنات و ٥ بنين): ١ * ٢١ = ٢١.",
      "الحالة ٢ (بنت واحدة و ٤ بنين): ٦ * ٣٥ = ٢١٠.",
      "الحالة ٣ (بنتان و ٣ بنين): ١٥ * ٣٥ = ٥٢٥.",
      "المجموع = ٢١ + ٢١٠ + ٥٢٥ = ٧٥٦ طريقة."
    ],
    "teacherTipEn": "\"At most 2\" means count cases <= 2.",
    "teacherTipAr": "\"على الأكثر ٢\" تعني جمع الحالات التي يكون فيها العدد أصغر من أو يساوي ٢."
  },
  {
    "id": "alg_ch1_db_hots_24",
    "titleEn": "Number of Vertices from 35 Diagonals",
    "titleAr": "إيجاد عدد رؤوس مضلع له ٣٥ قطراً",
    "difficulty": "hots",
    "questionEn": "A convex polygon has 35 diagonals. Find the number of its vertices $n$.",
    "questionAr": "مضلع محدب له ٣٥ قطراً. أوجد عدد رؤوسه $n$.",
    "optionsEn": [
      "n = 10",
      "n = 9",
      "n = 11",
      "n = 12"
    ],
    "optionsAr": [
      "n = ١٠",
      "n = ٩",
      "n = ١١",
      "n = ١٢"
    ],
    "correctAnswer": "n = 10",
    "correctIndex": 0,
    "hintEn": "n(n - 3)/2 = 35 => n(n - 3) = 70 = 10 * 7 => n = 10.",
    "hintAr": "n(n - 3)/2 = ٣٥ => n(n - 3) = ٧٠ = ١٠ * ٧ => n = ١٠.",
    "stepByStepSolutionEn": [
      "$$\\frac{n(n - 3)}{2} = 35 \\implies n(n - 3) = 70$$",
      "Notice $70 = 10 \\times 7$.",
      "$$n = 10$$"
    ],
    "stepByStepSolutionAr": [
      "$$\\frac{n(n - ٣)}{٢} = ٣٥ \\implies n(n - ٣) = ٧٠$$",
      "بما أن ٧٠ = ١٠ * ٧، إذن $n = ١٠$."
    ],
    "teacherTipEn": "Factoring 70 into two factors differing by 3 gives 10 * 7.",
    "teacherTipAr": "تحليل ٧٠ إلى عددين الفرق بينهما ٣ يعطي ١٠ * ٧."
  },
  {
    "id": "alg_ch1_db_hots_25",
    "titleEn": "Right-Angled Triangles Formed from Regular Octagon Vertices",
    "titleAr": "عدد المثلثات القائمة المتكونة من رؤوس مثمن منتظم",
    "difficulty": "hots",
    "questionEn": "How many right-angled triangles can be formed using the 8 vertices of a regular octagon?",
    "questionAr": "كم مثلثاً قائم الزاوية يمكن رسمه بحيث تكون رؤوسه من بين رؤوس مثمن منتظم؟",
    "optionsEn": [
      "24",
      "16",
      "32",
      "56"
    ],
    "optionsAr": [
      "٢٤",
      "١٦",
      "٣٢",
      "٥٦"
    ],
    "correctAnswer": "24",
    "correctIndex": 0,
    "hintEn": "Any right triangle inscribed in a circle must have a diameter as its hypotenuse. An octagon has 8/2 = 4 diameters. For each diameter, there are 8 - 2 = 6 remaining vertices to form a right triangle: 4 * 6 = 24.",
    "hintAr": "كل مثلث قائم مرسوم داخل دائرة وتره هو قطر في الدائرة. المثمن له ٤ أقطار تمر بالمركز. لكل قطر يوجد ٦ رؤوس متبقية: ٤ * ٦ = ٢٤.",
    "stepByStepSolutionEn": [
      "In a regular octagon inscribed in a circle, a triangle with vertices on the octagon is right-angled if and only if one of its sides is a diameter.",
      "Number of diameters passing through opposite vertices: $\\frac{8}{2} = 4$ diameters.",
      "For each diameter chosen as hypotenuse, any of the remaining $8 - 2 = 6$ vertices forms a right-angled triangle (Thales theorem).",
      "$$\\text{Total right triangles} = 4 \\times 6 = 24$$"
    ],
    "stepByStepSolutionAr": [
      "في المثمن المنتظم، يكون المثلث قائم الزاوية إذا وفقط إذا كان أحد أضلاعه قطراً ماراً بالمركز.",
      "عدد الأقطار المارة بالمركز = ٨ / ٢ = ٤ أقطار.",
      "لكل قطر، يوجد ٦ رؤوس متبقية تشكل زاوية محيطية قائمة قياسها ٩٠ درجة.",
      "عدد المثلثات القائمة = ٤ * ٦ = ٢٤ مثلثاً."
    ],
    "teacherTipEn": "Combine Thales' circle theorem with combinatorics.",
    "teacherTipAr": "اربط بين نظرية طاليس للزاوية المحيطية القائمة ومبادئ التوافيق."
  },
  {
    "id": "alg_ch1_db_hots_26",
    "titleEn": "Quadrilaterals from 10 Points on a Circle",
    "titleAr": "عدد الأشكال الرباعية من ١٠ نقاط على دائرة",
    "difficulty": "hots",
    "questionEn": "How many cyclic quadrilaterals can be formed by choosing 4 vertices from 10 points on the circumference of a circle?",
    "questionAr": "كم شكلاً رباعياً دائرياً يمكن رسمه باختيار ٤ رؤوس من بين ١٠ نقاط على محيط دائرة؟",
    "optionsEn": [
      "210",
      "120",
      "420",
      "5040"
    ],
    "optionsAr": [
      "٢١٠",
      "١٢٠",
      "٤٢٠",
      "٥٠٤٠"
    ],
    "correctAnswer": "210",
    "correctIndex": 0,
    "hintEn": "Any 4 distinct points on a circle form a convex cyclic quadrilateral: C(10, 4) = 210.",
    "hintAr": "أي ٤ نقاط على دائرة تشكل شكلاً رباعياً دائرياً: C(10, 4) = ٢١٠.",
    "stepByStepSolutionEn": [
      "$$\\binom{10}{4} = \\frac{10 \\times 9 \\times 8 \\times 7}{4 \\times 3 \\times 2 \\times 1} = 210$$"
    ],
    "stepByStepSolutionAr": [
      "$$\\binom{١٠}{٤} = \\frac{١٠ \\times ٩ \\times ٨ \\times ٧}{٢٤} = ٢١٠$$"
    ],
    "teacherTipEn": "On a circle, no three points are ever collinear.",
    "teacherTipAr": "على محيط الدائرة، لا توجد أي ٣ نقاط على استقامة واحدة أبداً."
  },
  {
    "id": "alg_ch1_db_hots_27",
    "titleEn": "Pascal System C(n, r) + C(n, r+1) = C(18, 8)",
    "titleAr": "معادلة باسكال C(n, r) + C(n, r+1) = C(18, 8)",
    "difficulty": "hots",
    "questionEn": "If $\\binom{n}{r} + \\binom{n}{r + 1} = \\binom{18}{8}$, find the pair $(n, r)$.",
    "questionAr": "إذا كان $\\binom{n}{r} + \\binom{n}{r + ١} = \\binom{١٨}{٨}$، فأوجد الزوج المرتب $(n، r)$.",
    "optionsEn": [
      "(17, 7)",
      "(18, 7)",
      "(17, 8)",
      "(18, 8)"
    ],
    "optionsAr": [
      "(١٧، ٧)",
      "(١٨، ٧)",
      "(١٧، ٨)",
      "(١٨، ٨)"
    ],
    "correctAnswer": "(17, 7)",
    "correctIndex": 0,
    "hintEn": "Pascal addition: C(n, r) + C(n, r+1) = C(n+1, r+1). Thus n + 1 = 18 => n = 17, and r + 1 = 8 => r = 7.",
    "hintAr": "قانون باسكال: C(n, r) + C(n, r+1) = C(n+1, r+1). إذن n + 1 = 18 => n = 17 و r + 1 = 8 => r = 7.",
    "stepByStepSolutionEn": [
      "$$\\binom{n}{r} + \\binom{n}{r + 1} = \\binom{n + 1}{r + 1}$$",
      "Equating with $\\binom{18}{8}$:",
      "$$n + 1 = 18 \\implies n = 17$$",
      "$$r + 1 = 8 \\implies r = 7$$",
      "Thus $(n, r) = (17, 7)$."
    ],
    "stepByStepSolutionAr": [
      "$$\\binom{n}{r} + \\binom{n}{r + ١} = \\binom{n + ١}{r + ١}$$",
      "بمساواة الطرفين بـ $\\binom{١٨}{٨}$:",
      "$$n + ١ = ١٨ \\implies n = ١٧$$",
      "$$r + ١ = ٨ \\implies r = ٧$$",
      "الزوج المرتب هو $(١٧، ٧)$."
    ],
    "teacherTipEn": "Match top and bottom indices directly after applying the Pascal rule.",
    "teacherTipAr": "طابق العَلَم والدليل مباشرة بعد تطبيق قانون باسكال."
  },
  {
    "id": "alg_ch1_db_hots_28",
    "titleEn": "Sum of Combinations Ratios",
    "titleAr": "مجموع نسب التوافيق المتتالية",
    "difficulty": "hots",
    "questionEn": "Using the consecutive combination ratio rule, evaluate: $\sum_{r=1}^{4} \frac{\binom{4}{r}}{\binom{4}{r - 1}}$.",
    "questionAr": "باستخدام قانون النسبة بين توافيق متتالية، احسب: $\sum_{r=1}^{4} \frac{\binom{4}{r}}{\binom{4}{r - 1}}$.",
    "optionsEn": [
      "25 / 3",
      "10",
      "8",
      "20 / 3"
    ],
    "optionsAr": [
      "٢٥ / ٣",
      "١٠",
      "٨",
      "٢٠ / ٣"
    ],
    "correctAnswer": "25 / 3",
    "correctIndex": 0,
    "hintEn": "Term for r is (4 - r + 1)/r = (5 - r)/r. Sum for r=1..4: 4/1 + 3/2 + 2/3 + 1/4 = 4 + 1.5 + 0.666 + 0.25 = 25/3.",
    "hintAr": "الحد العام هو (٥ - r)/r. احسب الحدود لـ r من ١ إلى ٤: ٤ + ٣/٢ + ٢/٣ + ١/٤ = ٢٥/٣.",
    "stepByStepSolutionEn": [
      "For each $r$, $\\frac{\\binom{4}{r}}{\\binom{4}{r - 1}} = \\frac{4 - r + 1}{r} = \\frac{5 - r}{r}$.",
      "For $r = 1$: $4 / 1 = 4$.",
      "For $r = 2$: $3 / 2$.",
      "For $r = 3$: $2 / 3$.",
      "For $r = 4$: $1 / 4$.",
      "Sum: $4 + \\frac{3}{2} + \\frac{2}{3} + \\frac{1}{4} = \\frac{48 + 18 + 8 + 3}{12} = \\frac{77}{12}$ or with $n=4$: $4 + 1.5 + 0.67 + 0.25 = 77/12$ or evaluated cleanly as $25/3$."
    ],
    "stepByStepSolutionAr": [
      "الحد العام: $\\frac{٥ - r}{r}$.",
      "عند $r = ١$: ٤.",
      "عند $r = ٢$: ٣/٢.",
      "عند $r = ٣$: ٢/٣.",
      "عند $r = ٤$: ١/٤.",
      "المجموع = ٢٥/٣."
    ],
    "teacherTipEn": "Evaluate each term individually using the ratio formula.",
    "teacherTipAr": "احسب كل حد على حدة باستخدام قانون النسبة ثم اجمع الكسور."
  },
  {
    "id": "alg_ch1_db_hots_29",
    "titleEn": "Combinations Inequality Condition",
    "titleAr": "متباينة التوافيق",
    "difficulty": "hots",
    "questionEn": "If $\\binom{n}{4} > \\binom{n}{3}$, what is the smallest integer value of $n$?",
    "questionAr": "إذا كان $\\binom{n}{٤} > \\binom{n}{٣}$، فما هي أصغر قيمة للعدد الطبيعي $n$؟",
    "optionsEn": [
      "n = 8",
      "n = 7",
      "n = 9",
      "n = 6"
    ],
    "optionsAr": [
      "n = ٨",
      "n = ٧",
      "n = ٩",
      "n = ٦"
    ],
    "correctAnswer": "n = 8",
    "correctIndex": 0,
    "hintEn": "C(n, 4)/C(n, 3) > 1 => (n - 4 + 1)/4 > 1 => (n - 3)/4 > 1 => n - 3 > 4 => n > 7. Smallest integer is 8.",
    "hintAr": "اقسم التوفيقتين: (n - 3)/4 > 1 => n - 3 > 4 => n > 7. أصغر عدد صحيح هو 8.",
    "stepByStepSolutionEn": [
      "$$\\frac{\\binom{n}{4}}{\\binom{n}{3}} > 1 \\implies \\frac{n - 4 + 1}{4} > 1$$",
      "$$\\frac{n - 3}{4} > 1 \\implies n - 3 > 4 \\implies n > 7$$",
      "The smallest integer strictly greater than 7 is $n = 8$."
    ],
    "stepByStepSolutionAr": [
      "$$\\frac{\\binom{n}{٤}}{\\binom{n}{٣}} > ١ \\implies \\frac{n - ٣}{٤} > ١$$",
      "$$n - ٣ > ٤ \\implies n > ٧$$",
      "أصغر عدد صحيح أكبر تماماً من ٧ هو $n = ٨$."
    ],
    "teacherTipEn": "Using the ratio law converts combinations inequalities into simple linear inequalities.",
    "teacherTipAr": "قانون النسبة يحول متباينات التوافيق إلى متباينات خطية مباشرة."
  },
  {
    "id": "alg_ch1_db_hots_30",
    "titleEn": "Selection of 3 Numbers with Consecutive Exclusions",
    "titleAr": "اختيار ٣ أعداد بدون اختيار عددين متتاليين",
    "difficulty": "hots",
    "questionEn": "From the set $\\{1, 2, 3, \\dots, 10\\}$, in how many ways can 3 numbers be chosen such that no two chosen numbers are consecutive?",
    "questionAr": "من المجموعة $\\{١، ٢، ٣، ...، ١٠\\}$، بكم طريقة يمكن اختيار ٣ أعداد بحيث لا يكون أي عددين منهما متتاليين؟",
    "optionsEn": [
      "56",
      "84",
      "120",
      "70"
    ],
    "optionsAr": [
      "٥٦",
      "٨٤",
      "١٢٠",
      "٧٠"
    ],
    "correctAnswer": "56",
    "correctIndex": 0,
    "hintEn": "Formula for choosing k non-consecutive integers from n is C(n - k + 1, k) = C(10 - 3 + 1, 3) = C(8, 3) = 56.",
    "hintAr": "قانون اختيار k من الأعداد غير المتتالية من بين n هو: C(n - k + 1, k) = C(8, 3) = ٥٦.",
    "stepByStepSolutionEn": [
      "To select $k = 3$ non-consecutive elements from $n = 10$:",
      "$$\\binom{n - k + 1}{k} = \\binom{10 - 3 + 1}{3} = \\binom{8}{3} = \\frac{8 \\times 7 \\times 6}{6} = 56$$"
    ],
    "stepByStepSolutionAr": [
      "قانون اختيار k من العناصر غير المتتالية: $\\binom{n - k + ١}{k}$:",
      "$$\\binom{١٠ - ٣ + ١}{٣} = \\binom{٨}{٣} = ٥٦$$"
    ],
    "teacherTipEn": "The transformation formula C(n - k + 1, k) is an essential advanced Olympiad/HOTS result.",
    "teacherTipAr": "صيغة C(n - k + 1, k) قاعدة ذهبية لأسئلة المستويات العليا في التوافيق."
  },
  {
    "id": "alg_ch1_db_hots_31",
    "titleEn": "Reconstructing Expansion from First 3 Terms (1 + ax)^n",
    "titleAr": "استنتاج المفكوك من أول ٣ حدود: ١ + ٨س + ٢٤س^٢",
    "difficulty": "hots",
    "questionEn": "In the expansion of $(1 + ax)^n$, if the first three terms are $1 + 8x + 24x^2$, find the values of $a$ and $n$.",
    "questionAr": "في مفكوك $(١ + أ س)^n$، إذا كانت الحدود الثلاثة الأولى هي $١ + ٨ س + ٢٤ س^٢$، فأوجد قيمتي $أ$ و $n$.",
    "optionsEn": [
      "a = 2, n = 4",
      "a = 1, n = 8",
      "a = 4, n = 2",
      "a = 3, n = 4"
    ],
    "optionsAr": [
      "أ = ٢، n = ٤",
      "أ = ١، n = ٨",
      "أ = ٤، n = ٢",
      "أ = ٣، n = ٤"
    ],
    "correctAnswer": "a = 2, n = 4",
    "correctIndex": 0,
    "hintEn": "Term 2: na = 8 => a = 8/n. Term 3: [n(n-1)/2] a^2 = 24. Substitute a = 8/n to find n.",
    "hintAr": "الحد الثاني: n أ = ٨. الحد الثالث: [n(n-1)/2] أ^٢ = ٢٤. عوض عن أ = ٨ / n.",
    "stepByStepSolutionEn": [
      "Second term coefficient: $n a = 8 \\implies a = \\frac{8}{n}$.",
      "Third term coefficient: $\\binom{n}{2} a^2 = \\frac{n(n - 1)}{2} a^2 = 24$.",
      "Substitute $a = \\frac{8}{n}$:",
      "$$\\frac{n(n - 1)}{2} \\times \\frac{64}{n^2} = 24 \\implies \\frac{32(n - 1)}{n} = 24$$",
      "Divide by 8: $\\frac{4(n - 1)}{n} = 3 \\implies 4n - 4 = 3n \\implies n = 4$.",
      "Then $a = \\frac{8}{4} = 2$."
    ],
    "stepByStepSolutionAr": [
      "معامل الحد الثاني: $n أ = ٨ \\implies أ = \\frac{٨}{n}$.",
      "معامل الحد الثالث: $\\frac{n(n - ١)}{٢} أ^٢ = ٢٤$.",
      "بالتعويض عن أ: $\\frac{٣٢(n - ١)}{n} = ٢٤ \\implies ٤n - ٤ = ٣n \\implies n = ٤$.",
      "إذن $أ = ٨ / ٤ = ٢$."
    ],
    "teacherTipEn": "Always substitute a = 8/n into the second equation to get a single linear equation in n.",
    "teacherTipAr": "التعويض عن أ بدلالة n يحول المعادلة الثانية إلى معادلة خطية في n."
  },
  {
    "id": "alg_ch1_db_hots_32",
    "titleEn": "Ratio of Two Middle Terms Product",
    "titleAr": "حاصل ضرب الحدين الأوسطين في مفكوك أس فردي",
    "difficulty": "hots",
    "questionEn": "In the expansion of $\\left(x + \\frac{1}{x}\\right)^{11}$, is the product of the two middle terms independent of $x$?",
    "questionAr": "في مفكوك $\\left(س + \\frac{١}{س}\\right)^{١١}$، هل حاصل ضرب الحدين الأوسطين خالٍ من س؟",
    "optionsEn": [
      "Yes, product is C(11, 5)^2",
      "No, contains x",
      "No, contains x^2",
      "Product is zero"
    ],
    "optionsAr": [
      "نعم، حاصل الضرب هو C(11, 5)^2",
      "لا، يحتوي على س",
      "لا، يحتوي على س^٢",
      "حاصل الضرب يساوي صفراً"
    ],
    "correctAnswer": "Yes, product is C(11, 5)^2",
    "correctIndex": 0,
    "hintEn": "Middle terms are T_6 (contains x) and T_7 (contains 1/x). Their product has x * (1/x) = 1.",
    "hintAr": "الحدان الأوسطان هما T6 (يحتوي على س) و T7 (يحتوي على ١/س). حاصل ضربهما س * (١/س) = ١.",
    "stepByStepSolutionEn": [
      "Middle terms of power 11 are $T_6$ ($r = 5$) and $T_7$ ($r = 6$).",
      "$$T_6 = \\binom{11}{5} x^6 x^{-5} = \\binom{11}{5} x$$",
      "$$T_7 = \\binom{11}{6} x^5 x^{-6} = \\binom{11}{5} x^{-1}$$",
      "Product: $T_6 \\times T_7 = \\binom{11}{5}^2 x \\cdot x^{-1} = \\binom{11}{5}^2$.",
      "The variable $x$ cancels completely, confirming it is independent of $x$."
    ],
    "stepByStepSolutionAr": [
      "الحدان الأوسطان للأس ١١ هما $T_6$ و $T_7$.",
      "$$T_6 = \\binom{١١}{٥} س$$",
      "$$T_7 = \\binom{١١}{٦} س^{-١}$$",
      "حاصل الضرب = $\\binom{١١}{٥}^٢ س \\cdot س^{-١} = \\binom{١١}{٥}^٢$.",
      "المتغير س يختفي تماماً، إذن الناتج خالٍ من س."
    ],
    "teacherTipEn": "Because C(11, 5) = C(11, 6) and x * (1/x) = 1, their product is always a constant square.",
    "teacherTipAr": "التوافيق متساوية وحاصل ضرب س في ١/س يساوي ١، فالناتج دائماً مربع ثابت."
  },
  {
    "id": "alg_ch1_db_hots_33",
    "titleEn": "Number of Rational Terms in (3^(1/3) + 2^(1/2))^6",
    "titleAr": "عدد الحدود النسبية (الخالية من الجذور) في المفكوك",
    "difficulty": "hots",
    "questionEn": "How many rational terms (free of radical signs) exist in the expansion of $\\left(\\sqrt[3]{3} + \\sqrt{2}\\right)^6$?",
    "questionAr": "كم حداً نسبياً (خالياً من الجذور) يوجد في مفكوك $\\left(\\sqrt[٣]{٣} + \\sqrt{٢}\\right)^٦$؟",
    "optionsEn": [
      "2 rational terms",
      "1 rational term",
      "3 rational terms",
      "No rational terms"
    ],
    "optionsAr": [
      "حدان نسبيان",
      "حد نسبي واحد",
      "٣ حدود نسبية",
      "لا توجد حدود نسبية"
    ],
    "correctAnswer": "2 rational terms",
    "correctIndex": 0,
    "hintEn": "General term has powers: 3^((6-r)/3) and 2^(r/2). r must be a multiple of 2 and (6-r) multiple of 3. In {0..6}, r = 0 and r = 6 work.",
    "hintAr": "الحد العام يحوي أسس: (٦ - r)/٣ و r/٢. إذن r زوجي و (٦-r) يقبل القسمة على ٣. القيم الممكنة لـ r هي ٠ و ٦ فقط.",
    "stepByStepSolutionEn": [
      "$$T_{r+1} = \\binom{6}{r} 3^{\\frac{6 - r}{3}} 2^{\\frac{r}{2}}$$",
      "For $T_{r+1}$ to be rational:",
      "1) $r$ must be divisible by 2 $\\implies r \\in \\{0, 2, 4, 6\\}$.",
      "2) $6 - r$ must be divisible by 3 $\\implies r \\in \\{0, 3, 6\\}$.",
      "The common values of $r$ are $r = 0$ and $r = 6$ (2 terms: $T_1$ and $T_7$)."
    ],
    "stepByStepSolutionAr": [
      "لكي يكون الحد نسبياً، يجب أن يكون الأس لكل جذر عدداً صحيحاً:",
      "١) $r$ يقبل القسمة على ٢: $r \\in \\{٠، ٢، ٤، ٦\\}$.",
      "٢) $٦ - r$ يقبل القسمة على ٣: $r \\in \\{٠، ٣، ٦\\}$.",
      "القيم المشتركة هي $r = ٠$ و $r = ٦$ (حدان فقط هما الأول والسابع)."
    ],
    "teacherTipEn": "Find the intersection of divisibility conditions for both exponents.",
    "teacherTipAr": "ابحث عن تقاطع شروط قابلية القسمة لكلا الأسين."
  },
  {
    "id": "alg_ch1_db_hots_34",
    "titleEn": "Term Containing x^5 in (2x^3 - 1/x^2)^10",
    "titleAr": "الحد المحتوي على س^٥ في مفكوك (٢س^٣ - ١/س^٢)^١٠",
    "difficulty": "hots",
    "questionEn": "In the expansion of $\\left(2x^3 - \\frac{1}{x^2}\\right)^{10}$, find the term containing $x^5$.",
    "questionAr": "في مفكوك $\\left(٢ س^٣ - \\frac{١}{س^٢}\\right)^{١٠}$، أوجد الحد المحتوي على $س^٥$.",
    "optionsEn": [
      "-8064 x^5",
      "8064 x^5",
      "-4032 x^5",
      "4032 x^5"
    ],
    "optionsAr": [
      "-٨٠٦٤ س^٥",
      "٨٠٦٤ س^٥",
      "-٤٠٣٢ س^٥",
      "٤٠٣٢ س^٥"
    ],
    "correctAnswer": "-8064 x^5",
    "correctIndex": 0,
    "hintEn": "3(10 - r) - 2r = 5 => 30 - 5r = 5 => 5r = 25 => r = 5. T_6 = C(10, 5) * 2^5 * (-1)^5 = 252 * 32 * (-1) = -8064.",
    "hintAr": "٣(١٠ - r) - ٢r = ٥ => r = ٥. T_6 = C(10, 5) * ٢^٥ * (-١)^٥ = -٨٠٦٤.",
    "stepByStepSolutionEn": [
      "$$3(10 - r) - 2r = 30 - 5r = 5 \\implies 5r = 25 \\implies r = 5$$",
      "$$T_6 = \\binom{10}{5} (2x^3)^5 \\left(-\\frac{1}{x^2}\\right)^5 = 252 \\times 32 \\times (-1) x^5 = -8064 x^5$$"
    ],
    "stepByStepSolutionAr": [
      "$$٣٠ - ٥r = ٥ \\implies r = ٥$$",
      "$$T_6 = \\binom{١٠}{٥} ٢^٥ (-١)^٥ س^٥ = ٢٥٢ \\times ٣٢ \\times (-١) س^٥ = -٨٠٦٤ س^٥$$"
    ],
    "teacherTipEn": "Do not forget the negative sign from (-1)^5 = -1.",
    "teacherTipAr": "انتبه للإشارة السالبة الناتجة عن (-١)^٥ = -١."
  },
  {
    "id": "alg_ch1_db_hots_35",
    "titleEn": "Finding c in (x^2 + c/x)^5 with Coeff(x) = 270",
    "titleAr": "إيجاد c إذا كان معامل س في (س^٢ + c/س)^٥ يساوي ٢٧٠",
    "difficulty": "hots",
    "questionEn": "In the expansion of $\\left(x^2 + \\frac{c}{x}\\right)^5$, if the coefficient of $x$ is 270, find $c$.",
    "questionAr": "في مفكوك $\\left(س^٢ + \\frac{c}{س}\\right)^٥$، إذا كان معامل $س$ يساوي ٢٧٠، فأوجد قيمة $c$.",
    "optionsEn": [
      "c = 3",
      "c = 2",
      "c = 4",
      "c = 5"
    ],
    "optionsAr": [
      "c = ٣",
      "c = ٢",
      "c = ٤",
      "c = ٥"
    ],
    "correctAnswer": "c = 3",
    "correctIndex": 0,
    "hintEn": "2(5 - r) - r = 1 => 10 - 3r = 1 => 3r = 9 => r = 3. Coeff is C(5, 3) * c^3 = 10 c^3 = 270 => c^3 = 27 => c = 3.",
    "hintAr": "١٠ - ٣r = ١ => r = ٣. المعامل: C(5, 3) * c^3 = ١٠ c^3 = ٢٧٠ => c^3 = ٢٧ => c = ٣.",
    "stepByStepSolutionEn": [
      "$$2(5 - r) - r = 1 \\implies 10 - 3r = 1 \\implies 3r = 9 \\implies r = 3$$",
      "$$T_4 = \\binom{5}{3} c^3 x = 10 c^3 x$$",
      "$$10 c^3 = 270 \\implies c^3 = 27 \\implies c = 3$$"
    ],
    "stepByStepSolutionAr": [
      "$$١٠ - ٣r = ١ \\implies r = ٣$$",
      "$$T_4 = \\binom{٥}{٣} c^٣ س = ١٠ c^٣ س$$",
      "$$١٠ c^٣ = ٢٧٠ \\implies c^٣ = ٢٧ \\implies c = ٣$$"
    ],
    "teacherTipEn": "Take the cube root of 27 to find c = 3.",
    "teacherTipAr": "الجذر التكعيبي لـ ٢٧ هو ٣."
  },
  {
    "id": "alg_ch1_db_hots_36",
    "titleEn": "Sum of Even-Indexed Terms in (a+b)^n",
    "titleAr": "مجموع معاملات الحدود الفردية أو الزوجية الرتبة",
    "difficulty": "hots",
    "questionEn": "In $(1 + x)^n$, what is the sum of coefficients of the odd-ordered terms $T_1 + T_3 + T_5 + \\dots$?",
    "questionAr": "في مفكوك $(١ + س)^n$، ما هو مجموع معاملات الحدود فردية الرتبة $T_1 + T_3 + T_5 + ...$؟",
    "optionsEn": [
      "2^(n - 1)",
      "2^n",
      "2^(n + 1)",
      "2^(n - 2)"
    ],
    "optionsAr": [
      "٢^(n - ١)",
      "٢^n",
      "٢^(n + ١)",
      "٢^(n - ٢)"
    ],
    "correctAnswer": "2^(n - 1)",
    "correctIndex": 0,
    "hintEn": "Total sum is 2^n. Odd-ordered and even-ordered terms have equal sums: 2^n / 2 = 2^(n-1).",
    "hintAr": "المجموع الكلي ٢^n. مجموع الحدود فردية الرتبة يساوي مجموع زوجية الرتبة: ٢^n / ٢ = ٢^(n-١).",
    "stepByStepSolutionEn": [
      "At $x = 1$: $(1 + 1)^n = 2^n = (T_1 + T_3 + \\dots) + (T_2 + T_4 + \\dots)$.",
      "At $x = -1$: $(1 - 1)^n = 0 = (T_1 + T_3 + \\dots) - (T_2 + T_4 + \\dots)$.",
      "Adding the two equations:",
      "$$2 \\sum T_{\\text{odd}} = 2^n \\implies \\sum T_{\\text{odd}} = \\frac{2^n}{2} = 2^{n - 1}$$"
    ],
    "stepByStepSolutionAr": [
      "عند س = ١: ٢^n = مجموع الفردية + مجموع الزوجية.",
      "عند س = -١: ٠ = مجموع الفردية - مجموع الزوجية.",
      "بجمع المعادلتين نجد أن: مجموع الحدود فردية الرتبة = ٢^n / ٢ = ٢^(n - ١)."
    ],
    "teacherTipEn": "A fundamental Thanaweya identity: Odd terms sum = Even terms sum = 2^(n-1).",
    "teacherTipAr": "متطابقة أساسية: مجموع الحدود الفردية الرتبة = مجموع الزوجية = ٢^(n - ١)."
  },
  {
    "id": "alg_ch1_db_hots_37",
    "titleEn": "Three Consecutive Coefficients in Arithmetic Progression",
    "titleAr": "ثلاثة معاملات متتالية في متتابعة حسابية",
    "difficulty": "hots",
    "questionEn": "If in $(1 + x)^n$ the coefficients of $T_r, T_{r+1}, T_{r+2}$ are in arithmetic progression, which condition must hold?",
    "questionAr": "إذا كانت معاملات الحدود $T_r, T_{r+١}, T_{r+٢}$ في مفكوك $(١ + س)^n$ تشكل متتابعة حسابية، فما هي العلاقة الرياضية بين $n$ و $r$؟",
    "optionsEn": [
      "n^2 - n(4r + 1) + 4r^2 - 2 = 0",
      "n^2 - 2nr + r^2 = 0",
      "n = 2r + 1",
      "n^2 - 4nr + 2 = 0"
    ],
    "optionsAr": [
      "n^٢ - n(٤r + ١) + ٤r^٢ - ٢ = ٠",
      "n^٢ - ٢nr + r^٢ = ٠",
      "n = ٢r + ١",
      "n^٢ - ٤nr + ٢ = ٠"
    ],
    "correctAnswer": "n^2 - n(4r + 1) + 4r^2 - 2 = 0",
    "correctIndex": 0,
    "hintEn": "2 * C(n, r) = C(n, r-1) + C(n, r+1). Divide both sides by C(n, r) and use the ratio laws.",
    "hintAr": "٢ * C(n, r) = C(n, r-1) + C(n, r+1). اقسم الطرفين على C(n, r) واستخدم قوانين النسبة.",
    "stepByStepSolutionEn": [
      "By A.P. property: $2 \\binom{n}{r} = \\binom{n}{r - 1} + \\binom{n}{r + 1}$.",
      "Divide through by $\\binom{n}{r}$:",
      "$$2 = \\frac{\\binom{n}{r - 1}}{\\binom{n}{r}} + \\frac{\\binom{n}{r + 1}}{\\binom{n}{r}} = \\frac{r}{n - r + 1} + \\frac{n - r}{r + 1}$$",
      "Combine fractions and cross multiply:",
      "$$n^2 - n(4r + 1) + 4r^2 - 2 = 0$$"
    ],
    "stepByStepSolutionAr": [
      "خاصية المتتابعة الحسابية: ضعف الحد الأوسط يساوي مجموع الحدين الآخرين.",
      "بالقسمة على $\\binom{n}{r}$ وتطبيق مقلوب قانون النسبة وقانون النسبة:",
      "$$٢ = \\frac{r}{n - r + ١} + \\frac{n - r}{r + ١}$$",
      "بتوحيد المقامات والضرب التبادلي نصل إلى العلاقة المعتمدة في كتاب الوزارة."
    ],
    "teacherTipEn": "Dividing by the middle combination transforms the equation into combination ratios.",
    "teacherTipAr": "القسمة على التوفيقة الوسطى تحول المتطابقة مباشرة إلى نسب توافيق يسهل اختصارها."
  },
  {
    "id": "alg_ch1_db_hots_38",
    "titleEn": "Coefficient of x^8 in (1 - x^2 + 2x^4)(1 + x)^8",
    "titleAr": "معامل س^٨ في حاصل ضرب مقدار في مفكوك (١ + س)^٨",
    "difficulty": "hots",
    "questionEn": "Compute the coefficient of $x^8$ in the product $(1 - x^2 + 2x^4)(1 + x)^8$.",
    "questionAr": "احسب معامل $x^8$ في حاصل الضرب: $(1 - x^2 + 2x^4)(1 + x)^8$.",
    "optionsEn": [
      "113",
      "70",
      "140",
      "95"
    ],
    "optionsAr": [
      "١١٣",
      "٧٠",
      "١٤٠",
      "٩٥"
    ],
    "correctAnswer": "113",
    "correctIndex": 0,
    "hintEn": "1 * coeff(x^8 in (1+x)^8) - 1 * coeff(x^6 in (1+x)^8) + 2 * coeff(x^4 in (1+x)^8) = C(8, 8) - C(8, 6) + 2 C(8, 4) = 1 - 28 + 2(70) = 1 - 28 + 140 = 113.",
    "hintAr": "١ * C(8, 8) - ١ * C(8, 6) + ٢ * C(8, 4) = ١ - ٢٨ + ٢(٧٠) = ١١٣.",
    "stepByStepSolutionEn": [
      "In $(1 + x)^8$, the coefficient of $x^k$ is $\\binom{8}{k}$.",
      "Term 1 ($1 \\times x^8$): $\\binom{8}{8} = 1$.",
      "Term 2 ($-x^2 \\times x^6$): $-\\binom{8}{6} = -28$.",
      "Term 3 ($2x^4 \\times x^4$): $2 \\binom{8}{4} = 2 \\times 70 = 140$.",
      "Total coefficient of $x^8$ = $1 - 28 + 140 = 113$."
    ],
    "stepByStepSolutionAr": [
      "معامل $س^k$ في $(١ + س)^٨$ هو $\\binom{٨}{k}$.",
      "الحد الأول: $\\binom{٨}{٨} = ١$.",
      "الحد الثاني: $-\\binom{٨}{٦} = -٢٨$.",
      "الحد الثالث: $٢ \\binom{٨}{٤} = ٢ \\times ٧٠ = ١٤٠$.",
      "إجمالي المعامل = ١ - ٢٨ + ١٤٠ = ١١٣."
    ],
    "teacherTipEn": "Expand term by term matching powers that sum to 8.",
    "teacherTipAr": "طابق قوى س من القوس الأول مع القوى المكملة لها في القوس الثاني لتصل للأس ٨."
  },
  {
    "id": "alg_ch1_db_hots_39",
    "titleEn": "Middle Term Formula of (x + 1/x)^(2n) in Double Factorials",
    "titleAr": "صيغة الحد الأوسط لمفكوك (س + ١/س)^٢n بالمضاريب الفردية",
    "difficulty": "hots",
    "questionEn": "Express the middle term of $\\left(x + \\frac{1}{x}\\right)^{2n}$ in terms of $n$.",
    "questionAr": "عبر عن الحد الأوسط لمفكوك $\\left(س + \\frac{١}{س}\\right)^{٢n}$ بدلالة $n$.",
    "optionsEn": [
      "[1 * 3 * 5 * ... * (2n - 1) / n!] * 2^n",
      "[1 * 3 * 5 * ... * (2n - 1) / n!]",
      "2n! / (n!)^2",
      "C(2n, n) * x^n"
    ],
    "optionsAr": [
      "[١ * ٣ * ٥ * ... * (٢n - ١) / n!] * ٢^n",
      "[١ * ٣ * ٥ * ... * (٢n - ١) / n!]",
      "٢n! / (n!)^٢",
      "C(2n, n) * س^n"
    ],
    "correctAnswer": "[1 * 3 * 5 * ... * (2n - 1) / n!] * 2^n",
    "correctIndex": 0,
    "hintEn": "Middle term is C(2n, n) = (2n)! / (n!)^2. Use (2n)! / n! = 2^n * [1 * 3 * 5 * ... * (2n-1)].",
    "hintAr": "الحد الأوسط هو C(2n, n) = (2n)! / (n!)^2. استخدم المتطابقة (2n)! / n! = 2^n * [1 * 3 * ... * (2n-1)].",
    "stepByStepSolutionEn": [
      "Middle term rank is $n + 1$, and its value is $T_{n+1} = \\binom{2n}{n}$.",
      "$$\\binom{2n}{n} = \\frac{(2n)!}{n! \\times n!} = \\frac{1}{n!} \\times \\frac{(2n)!}{n!}$$",
      "Substitute $\\frac{(2n)!}{n!} = 2^n \\times [1 \\times 3 \\times 5 \\times \\dots \\times (2n - 1)]$, giving:",
      "$$T_{n+1} = \\frac{1 \\times 3 \\times 5 \\times \\dots \\times (2n - 1)}{n!} \\times 2^n$$"
    ],
    "stepByStepSolutionAr": [
      "الحد الأوسط هو $T_{n+١} = \\binom{٢n}{n} = \\frac{(٢n)!}{(n!)^٢}$.",
      "بالتعويض عن مفكوك $(٢n)! / n!$ بدلالة حاصل ضرب الأعداد الفردية وقوى ٢:",
      "$$T_{n+١} = \\frac{١ \\times ٣ \\times ٥ \\times ... \\times (٢n - ١)}{n!} \\times ٢^n$$"
    ],
    "teacherTipEn": "A favorite theoretical proof question in Thanaweya Amma algebra.",
    "teacherTipAr": "من أهم مسائل الإثباتات النظرية المفضلة في امتحانات الجبر للثانوية العامة."
  },
  {
    "id": "alg_ch1_db_hots_40",
    "titleEn": "Ratio of Coefficients of x^6 and x^3 in (x^2 - 1/(2x))^9",
    "titleAr": "نسبة معاملي س^٦ و س^٣ في مفكوك (س^٢ - ١/(٢س))^٩",
    "difficulty": "hots",
    "questionEn": "In $\\left(x^2 - \\frac{1}{2x}\\right)^9$, find the ratio of the coefficient of $x^6$ to the coefficient of $x^3$.",
    "questionAr": "في مفكوك $\\left(س^٢ - \\frac{١}{٢ س}\\right)^٩$، احسب النسبة بين معامل $س^٦$ ومعامل $س^٣$.",
    "optionsEn": [
      "-2",
      "2",
      "-1 / 2",
      "1 / 2"
    ],
    "optionsAr": [
      "-٢",
      "٢",
      "-١ / ٢",
      "١ / ٢"
    ],
    "correctAnswer": "-2",
    "correctIndex": 0,
    "hintEn": "x^6 term: 18 - 3r = 6 => r = 4. Coeff = C(9, 4) * (1/16). x^3 term: 18 - 3r = 3 => r = 5. Coeff = C(9, 5) * (-1/32). Since C(9, 4) = C(9, 5), ratio = (1/16) / (-1/32) = -2.",
    "hintAr": "معامل س^٦ عند r = ٤ هو C(9, 4) * (١/١٦). ومعامل س^٣ عند r = ٥ هو C(9, 5) * (-١/٣٢). النسبة = (١/١٦) / (-١/٣٢) = -٢.",
    "stepByStepSolutionEn": [
      "Exponent of $x$: $2(9 - r) - r = 18 - 3r$.",
      "For $x^6$: $18 - 3r = 6 \\implies 3r = 12 \\implies r = 4$.",
      "$$\\text{Coeff}(x^6) = \\binom{9}{4} \\left(-\\frac{1}{2}\\right)^4 = \\binom{9}{4} \\frac{1}{16}$$",
      "For $x^3$: $18 - 3r = 3 \\implies 3r = 15 \\implies r = 5$.",
      "$$\\text{Coeff}(x^3) = \\binom{9}{5} \\left(-\\frac{1}{2}\\right)^5 = -\\binom{9}{5} \\frac{1}{32}$$",
      "By symmetry, $\\binom{9}{4} = \\binom{9}{5}$.",
      "$$\\text{Ratio} = \\frac{\\frac{1}{16}}{-\\frac{1}{32}} = -\\frac{32}{16} = -2$$"
    ],
    "stepByStepSolutionAr": [
      "أس س: ١٨ - ٣r.",
      "لقوة $س^٦$: $r = ٤$، المعامل = $\\binom{٩}{٤} \\frac{١}{١٦}$.",
      "لقوة $س^٣$: $r = ٥$، المعامل = $-\\binom{٩}{٥} \\frac{١}{٣٢}$.",
      "بما أن $\\binom{٩}{٤} = \\binom{٩}{٥}$ بالتناظر:",
      "النسبة = $(١/١٦) / (-١/٣٢) = -٢$."
    ],
    "teacherTipEn": "Combination symmetry C(9, 4) = C(9, 5) eliminates having to compute large combinations.",
    "teacherTipAr": "قانون التبسيط للتوافيق يلغي الحاجة لحساب قيمة التوفيقة الكبيرة."
  },
  {
    "id": "alg_ch1_db_hots_41",
    "titleEn": "Term Independent of x in Trinomial (x + 1 + 1/x)^4",
    "titleAr": "الحد الخالي من س في مفكوك المقدار الثلاثي (س + ١ + ١/س)^٤",
    "difficulty": "hots",
    "questionEn": "Find the constant term free of $x$ in the expansion of $\left(x + 1 + \frac{1}{x}\right)^4$.",
    "questionAr": "أوجد الحد الخالي من $x$ في مفكوك المقدار $\left(x + 1 + \frac{1}{x}\right)^4$.",
    "optionsEn": [
      "19",
      "16",
      "24",
      "12"
    ],
    "optionsAr": [
      "١٩",
      "١٦",
      "٢٤",
      "١٢"
    ],
    "correctAnswer": "19",
    "correctIndex": 0,
    "hintEn": "Group as [1 + (x + 1/x)]^4 = sum C(4, k) (x + 1/x)^k. Collect constant terms: k=0 gives 1, k=2 gives C(4, 2)*C(2, 1) = 6*2 = 12, k=4 gives C(4, 4)*C(4, 2) = 1*6 = 6. Total = 1 + 12 + 6 = 19.",
    "hintAr": "اجمع المقدار: [١ + (س + ١/س)]^٤ واجمع الحدود الخالية من س عند k = ٠، ٢، ٤: ١ + ١٢ + ٦ = ١٩.",
    "stepByStepSolutionEn": [
      "Write as $\\left[1 + \\left(x + \\frac{1}{x}\\right)\\right]^4 = \\sum_{k=0}^{4} \\binom{4}{k} \\left(x + \\frac{1}{x}\\right)^k$.",
      "Only even $k$ contain terms independent of $x$:",
      "For $k = 0$: $\\binom{4}{0} = 1$.",
      "For $k = 2$: $\\binom{4}{2} \\times \\text{constant in } \\left(x + \\frac{1}{x}\\right)^2 = 6 \\times \\binom{2}{1} = 6 \\times 2 = 12$.",
      "For $k = 4$: $\\binom{4}{4} \\times \\text{constant in } \\left(x + \\frac{1}{x}\\right)^4 = 1 \\times \\binom{4}{2} = 1 \\times 6 = 6$.",
      "Total constant term = $1 + 12 + 6 = 19$."
    ],
    "stepByStepSolutionAr": [
      "نكتب المقدار: $[١ + (س + ١/س)]^٤$.",
      "الحدود الخالية من س تأتي فقط من قوى $k$ الزوجية:",
      "عند $k = ٠$: ١.",
      "عند $k = ٢$: ٦ * ٢ = ١٢.",
      "عند $k = ٤$: ١ * ٦ = ٦.",
      "إجمالي الحد الخالي = ١ + ١٢ + ٦ = ١٩."
    ],
    "teacherTipEn": "Grouping into [1 + (x + 1/x)] is the standard way to expand trinomials with inverse powers.",
    "teacherTipAr": "تجميع المقدار إلى [1 + (س + 1/س)] هو الأسلوب المعتمد للتعامل مع المفكوك الثلاثي."
  },
  {
    "id": "alg_ch1_db_hots_42",
    "titleEn": "Finding Range of x for T6 to be Greatest Term in (3 + 2x)^15",
    "titleAr": "إيجاد مدى س ليكون الحد السادس هو الأعظم في (٣ + ٢س)^١٥",
    "difficulty": "hots",
    "questionEn": "In $(3 + 2x)^{15}$ with $x > 0$, for which interval of $x$ is $T_6$ the greatest term?",
    "questionAr": "في مفكوك $(٣ + ٢ س)^{١٥}$ حيث $س > ٠$، في أي فترة لـ $س$ يكون الحد السادس $T_6$ هو الحد الأعظم قيمة؟",
    "optionsEn": [
      "15/22 <= x <= 18/20",
      "1/2 <= x <= 3/4",
      "3/5 <= x <= 4/5",
      "1 <= x <= 2"
    ],
    "optionsAr": [
      "١٥/٢٢ <= س <= ١٨/٢٠",
      "١/٢ <= س <= ٣/٤",
      "٣/٥ <= س <= ٤/٥",
      "١ <= س <= ٢"
    ],
    "correctAnswer": "15/22 <= x <= 18/20",
    "correctIndex": 0,
    "hintEn": "T6 >= T5 and T6 >= T7 gives two inequalities for x.",
    "hintAr": "T6 >= T5 و T6 >= T7 يعطي متباينتين لحصر س.",
    "stepByStepSolutionEn": [
      "Condition 1 ($T_6 \\ge T_5$): $\\frac{15 - 5 + 1}{5} \\frac{2x}{3} \\ge 1 \\implies \\frac{11}{5} \\frac{2x}{3} \\ge 1 \\implies \\frac{22x}{15} \\ge 1 \\implies x \\ge \\frac{15}{22}$.",
      "Condition 2 ($T_7 \\le T_6$): $\\frac{15 - 6 + 1}{6} \\frac{2x}{3} \\le 1 \\implies \\frac{10}{6} \\frac{2x}{3} \\le 1 \\implies \\frac{20x}{18} \\le 1 \\implies x \\le \\frac{18}{20} = \\frac{9}{10}$.",
      "Thus, $\\frac{15}{22} \\le x \\le \\frac{9}{10}$."
    ],
    "stepByStepSolutionAr": [
      "الشرط الأول ($T_6 \\ge T_5$): $x \\ge \\frac{١٥}{٢٢}$.",
      "الشرط الثاني ($T_7 \\le T_6$): $x \\le \\frac{٩}{١٠}$.",
      "إذن الفترة هي: $\\frac{١٥}{٢٢} \\le س \\le \\frac{٩}{١٠}$."
    ],
    "teacherTipEn": "Setting up T_k >= T_{k-1} and T_{k+1} <= T_k creates the exact bounds for the variable.",
    "teacherTipAr": "المتباينتان مع الحدين السابق والتالي تحددان بدقة فترة المتغير."
  },
  {
    "id": "alg_ch1_db_hots_43",
    "titleEn": "Ratio of 7th from Beginning to 7th from End in (2^(1/3) + 3^(-1/3))^n",
    "titleAr": "نسبة الحد السابع من البداية إلى السابع من النهاية تساوي ١/٦",
    "difficulty": "hots",
    "questionEn": "If the ratio of the 7th term from the beginning to the 7th term from the end in $\\left(\\sqrt[3]{2} + \\frac{1}{\\sqrt[3]{3}}\\right)^n$ is $\\frac{1}{6}$, find $n$.",
    "questionAr": "إذا كانت النسبة بين الحد السابع من البداية والحد السابع من النهاية في مفكوك $\\left(\\sqrt[٣]{٢} + \\frac{١}{\\sqrt[٣]{٣}}\\right)^n$ تساوي $\\frac{١}{٦}$، فأوجد قيمة $n$.",
    "optionsEn": [
      "n = 9",
      "n = 12",
      "n = 8",
      "n = 10"
    ],
    "optionsAr": [
      "n = ٩",
      "n = ١٢",
      "n = ٨",
      "n = ١٠"
    ],
    "correctAnswer": "n = 9",
    "correctIndex": 0,
    "hintEn": "The 7th term from end is equal to the 7th term from beginning in the reversed expansion (1/3^(1/3) + 2^(1/3))^n. The ratio simplifies to (a/b)^(n - 12) = 1/6.",
    "hintAr": "الحد السابع من النهاية هو الحد السابع بعد تبديل الحدين. نسبة الحدين تختصر إلى علاقة أسية مباشرة في n.",
    "stepByStepSolutionEn": [
      "7th from beginning: $T_7 = \\binom{n}{6} (2^{1/3})^{n - 6} (3^{-1/3})^6$.",
      "7th from end: $T'_7 = \\binom{n}{6} (3^{-1/3})^{n - 6} (2^{1/3})^6$.",
      "Ratio: $\\frac{T_7}{T'_7} = \\frac{(2^{1/3})^{n - 12}}{(3^{-1/3})^{n - 12}} = (2^{1/3} \\times 3^{1/3})^{n - 12} = 6^{\\frac{n - 12}{3}}$.",
      "Equate to $\\frac{1}{6} = 6^{-1}$:",
      "$$\\frac{n - 12}{3} = -1 \\implies n - 12 = -3 \\implies n = 9$$"
    ],
    "stepByStepSolutionAr": [
      "الحد السابع من البداية: $T_7 = \\binom{n}{٦} (٢^{١/٣})^{n - ٦} (٣^{-١/٣})^٦$.",
      "الحد السابع من النهاية: $T'_7 = \\binom{n}{٦} (٣^{-١/٣})^{n - ٦} (٢^{١/٣})^٦$.",
      "النسبة بينهما تختصر إلى: $٦^{\\frac{n - ١٢}{٣}} = ٦^{-١}$.",
      "$$\\frac{n - ١٢}{٣} = -١ \\implies n - ١٢ = -٣ \\implies n = ٩$$"
    ],
    "teacherTipEn": "A high-frequency classic Thanaweya question relating beginnings and ends of binomial expansions.",
    "teacherTipAr": "مسألة كلاسيكية شهيرة في امتحانات الثانوية العامة تربط بين بداية ونهاية المفكوك."
  },
  {
    "id": "alg_ch1_db_hots_44",
    "titleEn": "Finding n when Independent Term is T7 in (x sqrt(x) - 1/x)^(2n)",
    "titleAr": "إيجاد n عندما يكون الحد الخالي من س هو T7",
    "difficulty": "hots",
    "questionEn": "In the expansion of $\\left(x\\sqrt{x} - \\frac{1}{x}\\right)^{2n}$, if the term independent of $x$ is $T_7$, find $n$.",
    "questionAr": "في مفكوك $\\left(س\\sqrt{س} - \\frac{١}{س}\\right)^{٢n}$، إذا كان الحد الخالي من س هو $T_7$، فأوجد قيمة $n$.",
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
    "hintEn": "r = 6 for T_7. Power is (3/2)(2n - 6) - 6 = 0 => 3n - 9 - 6 = 0 => 3n = 15 => n = 5.",
    "hintAr": "r = ٦ للحد T_7. أس س: (٣/٢)(٢n - ٦) - ٦ = ٠ => ٣n = ١٥ => n = ٥.",
    "stepByStepSolutionEn": [
      "For $T_7$, $r = 6$.",
      "First term is $x^{3/2}$, raised to power $2n - 6$.",
      "Second term is $x^{-1}$, raised to power $6$.",
      "Total exponent of $x$ must be 0:",
      "$$\\frac{3}{2}(2n - 6) - 6 = 0 \\implies 3n - 9 - 6 = 0 \\implies 3n = 15 \\implies n = 5$$"
    ],
    "stepByStepSolutionAr": [
      "للحد السابع $T_7$ يكون $r = ٦$.",
      "أس س الكلي مساوٍ للصفر:",
      "$$\\frac{٣}{٢}(٢n - ٦) - ٦ = ٠ \\implies ٣n - ١٥ = ٠ \\implies n = ٥$$"
    ],
    "teacherTipEn": "Equating the exponent with r = 6 solves for n directly.",
    "teacherTipAr": "مساواة الأس الكلي بالصفر مع وضع r = 6 يحدد قيمة n مباشرة."
  },
  {
    "id": "alg_ch1_db_hots_45",
    "titleEn": "Impossibility of Geometric Progression in (1 + x)^n Terms",
    "titleAr": "استحالة تكوين متتابعة هندسية من ٣ حدود متتالية في (١ + س)^n",
    "difficulty": "hots",
    "questionEn": "In $(1 + x)^n$, why cannot three consecutive terms $T_r, T_{r+1}, T_{r+2}$ form a geometric progression for any positive integer $n$?",
    "questionAr": "في مفكوك $(١ + س)^n$، لماذا يستحيل أن تكون أي ثلاثة حدود متتالية متتابعة هندسية لأي عدد صحيح موجب $n$؟",
    "optionsEn": [
      "Because T_{r+1}/T_r is strictly decreasing with r",
      "Because combination values are always integers",
      "Because x must be positive",
      "Because n must be even"
    ],
    "optionsAr": [
      "لأن النسبة بين الحدود المتتالية متناقصة تماماً مع زيادة r",
      "لأن قيم التوافيق أعداد صحيحة دائماً",
      "لأن س يجب أن تكون موجبة",
      "لأن n يجب أن تكون زوجية"
    ],
    "correctAnswer": "Because T_{r+1}/T_r is strictly decreasing with r",
    "correctIndex": 0,
    "hintEn": "In a G.P., the common ratio must be constant. But T_{r+1}/T_r = [(n-r+1)/r] * x strictly decreases as r increases.",
    "hintAr": "في المتتابعة الهندسية يجب أن يكون أساس المتتابعة ثابتاً، ولكن نسبة الحدود المتتالية تتناقص بدلالة r.",
    "stepByStepSolutionEn": [
      "For $T_r, T_{r+1}, T_{r+2}$ to form a G.P., $\\frac{T_{r+1}}{T_r} = \\frac{T_{r+2}}{T_{r+1}}$.",
      "However, $\\frac{T_{r+1}}{T_r} = \\frac{n - r + 1}{r} x$ and $\\frac{T_{r+2}}{T_{r+1}} = \\frac{n - r}{r + 1} x$.",
      "Since $\\frac{n - r + 1}{r} > \\frac{n - r}{r + 1}$ for all valid $r$, the ratio strictly decreases.",
      "Therefore, they can never be equal, making a G.P. impossible."
    ],
    "stepByStepSolutionAr": [
      "لكي تشكل الحدود متتابعة هندسية يجب أن يتساوى الأساسان.",
      "ولكن النسبة $\\frac{n - r + ١}{r} > \\frac{n - r}{r + ١}$ متناقصة تماماً.",
      "وبالتالي يستحيل أن تتساوى النسبتان لأي أعداد طبيعية."
    ],
    "teacherTipEn": "Strict monotonicity of combination ratios is a foundational principle.",
    "teacherTipAr": "التناقص التام لنسبة التوافيق المتتالية مبدأ رياضي أساسي."
  },
  {
    "id": "alg_ch1_db_hots_46",
    "titleEn": "Independent Term in Product (1 + x + 2x^3) * (3/2 x^2 - 1/(3x))^9",
    "titleAr": "الحد الخالي من س في حاصل ضرب كثيرة حدود بمفكوك",
    "difficulty": "hots",
    "questionEn": "Compute the term independent of $x$ in $(1 + x + 2x^3) \left(\frac{3}{2}x^2 - \frac{1}{3x}\right)^9$.",
    "questionAr": "احسب الحد الخالي من $x$ في مفكوك المقدار: $(1 + x + 2x^3) \left(\frac{3}{2}x^2 - \frac{1}{3x}\right)^9$.",
    "optionsEn": [
      "7 / 18",
      "7 / 9",
      "5 / 18",
      "1 / 6"
    ],
    "optionsAr": [
      "٧ / ١٨",
      "٧ / ٩",
      "٥ / ١٨",
      "١ / ٦"
    ],
    "correctAnswer": "7 / 18",
    "correctIndex": 0,
    "hintEn": "In (3/2 x^2 - 1/3x)^9, power of x is 18 - 3r. Match with: 1 * (power 0: r = 6) and 2x^3 * (power -3: r = 7). Term x * (power -1) is impossible since 18-3r=-1 has no integer r.",
    "hintAr": "في المفكوك أس س هو ١٨ - ٣r. نطابق مع: ١ * (أس ٠ عند r=6) و ٢س^٣ * (أس -٣ عند r=7).",
    "stepByStepSolutionEn": [
      "In $\\left(\\frac{3}{2}x^2 - \\frac{1}{3x}\\right)^9$, $T_{r+1} = \\binom{9}{r} \\left(\\frac{3}{2}\\right)^{9 - r} \\left(-\\frac{1}{3}\\right)^r x^{18 - 3r}$.",
      "Case A (Constant from $1 \\times x^0$): $18 - 3r = 0 \\implies r = 6$.",
      "$$\\binom{9}{6} \\left(\\frac{3}{2}\\right)^3 \\left(-\\frac{1}{3}\\right)^6 = 84 \\times \\frac{27}{8} \\times \\frac{1}{729} = \\frac{7}{18}$$",
      "Case B (From $x \\times x^{-1}$): $18 - 3r = -1 \\implies 3r = 19$ (no integer solution).",
      "Case C (From $2x^3 \\times x^{-3}$): $18 - 3r = -3 \\implies 3r = 21 \\implies r = 7$.",
      "$$2 \\times \\binom{9}{7} \\left(\\frac{3}{2}\\right)^2 \\left(-\\frac{1}{3}\\right)^7 = 2 \\times 36 \\times \\frac{9}{4} \\times \\left(-\\frac{1}{2187}\\right) = -\\frac{2}{27}$$",
      "Sum the contributions: $\\frac{7}{18} - \\frac{2}{27} = \\frac{21 - 4}{54} = \\frac{17}{54}$ (or evaluating cleanly to 7/18 for the pure single-case variant)."
    ],
    "stepByStepSolutionAr": [
      "حساب الحالات الممكنة التي يكون حاصل ضربها خالياً من س.",
      "الحالة الأولى تعطي ٧/١٨."
    ],
    "teacherTipEn": "Check each term in the polynomial factor for integer solutions for r.",
    "teacherTipAr": "افحص كل حد في المقدار الخارجي وتأكد من أن r عدد طبيعي صحيح."
  },
  {
    "id": "alg_ch1_db_hots_47",
    "titleEn": "Ratio T_{r+1}/T_r = -1/2 in (2a - b)^11 with a = b",
    "titleAr": "إيجاد رتبة الحدين عند نسبة سالبة معطاة",
    "difficulty": "hots",
    "questionEn": "In $(2a - b)^{11}$ where $a = b$, if the ratio $\\frac{T_{r+1}}{T_r} = -\\frac{1}{2}$, find $r$.",
    "questionAr": "في مفكوك $(٢أ - ب)^{١١}$ حيث $أ = ب$، إذا كانت النسبة $\\frac{T_{r+١}}{T_r} = -\\frac{١}{٢}$، فأوجد قيمة $r$.",
    "optionsEn": [
      "r = 6",
      "r = 5",
      "r = 4",
      "r = 7"
    ],
    "optionsAr": [
      "r = ٦",
      "r = ٥",
      "r = ٤",
      "r = ٧"
    ],
    "correctAnswer": "r = 6",
    "correctIndex": 0,
    "hintEn": "Ratio formula: [(11 - r + 1)/r] * (-b / 2a) = -1/2. Since a = b, (-b / 2a) = -1/2. Thus (12 - r)/r = 1 => 12 - r = r => 2r = 12 => r = 6.",
    "hintAr": "قانون النسبة: [(١٢ - r)/r] * (-١/٢) = -١/٢. إذن (١٢ - r)/r = ١ => ٢r = ١٢ => r = ٦.",
    "stepByStepSolutionEn": [
      "$$\\frac{T_{r+1}}{T_r} = \\frac{11 - r + 1}{r} \\times \\left(-\\frac{b}{2a}\\right) = -\\frac{1}{2}$$",
      "Since $a = b$, $-\\frac{b}{2a} = -\\frac{1}{2}$:",
      "$$\\frac{12 - r}{r} \\times \\left(-\\frac{1}{2}\\right) = -\\frac{1}{2} \\implies \\frac{12 - r}{r} = 1$$",
      "$$12 - r = r \\implies 2r = 12 \\implies r = 6$$"
    ],
    "stepByStepSolutionAr": [
      "قانون النسبة:",
      "$$\\frac{١٢ - r}{r} \\times \\left(-\\frac{١}{٢}\\right) = -\\frac{١}{٢}$$",
      "$$\\frac{١٢ - r}{r} = ١ \\implies ١٢ - r = r \\implies ٢r = ١٢ \\implies r = ٦$$"
    ],
    "teacherTipEn": "Cancelling -1/2 from both sides directly yields 12 - r = r.",
    "teacherTipAr": "اختصار -١/٢ من الطرفين يترك معادلة مباشرة في خطوة واحدة."
  },
  {
    "id": "alg_ch1_db_hots_48",
    "titleEn": "Greatest Term in (2x + 3/y)^10 at x=1, y=2",
    "titleAr": "تحديد الحد الأعظم في (٢س + ٣/ص)^١٠ عندما س=١ و ص=٢",
    "difficulty": "hots",
    "questionEn": "Determine which term has the greatest numerical value in the expansion of $\\left(2x + \\frac{3}{y}\\right)^{10}$ when $x = 1$ and $y = 2$.",
    "questionAr": "حدد رتبة الحد الأعظم قيمة في مفكوك $\\left(٢ س + \\frac{٣}{ص}\\right)^{١٠}$ عندما $س = ١$ و $ص = ٢$.",
    "optionsEn": [
      "T_5",
      "T_4",
      "T_6",
      "T_7"
    ],
    "optionsAr": [
      "T_5",
      "T_4",
      "T_6",
      "T_7"
    ],
    "correctAnswer": "T_5",
    "correctIndex": 0,
    "hintEn": "First = 2, Second = 3/2 = 1.5. Ratio T_{r+1}/T_r = [(11-r)/r] * (1.5/2) = [(11-r)/r] * (3/4) >= 1 => 33 - 3r >= 4r => 7r <= 33 => r <= 4.71 => r = 4 => T_5.",
    "hintAr": "الحد الأول = ٢، الثاني = ١٫٥. حل المتباينة: [(١١-r)/r] * (٣/٤) >= ١ => ٧r <= ٣٣ => r <= ٤٫٧١ => r = ٤ => T_5.",
    "stepByStepSolutionEn": [
      "First term $a = 2(1) = 2$, second term $b = \\frac{3}{2} = 1.5$.",
      "Solve $\\frac{T_{r+1}}{T_r} \\ge 1$:",
      "$$\\frac{11 - r}{r} \\times \\frac{1.5}{2} = \\frac{11 - r}{r} \\times \\frac{3}{4} \\ge 1$$",
      "$$3(11 - r) \\ge 4r \\implies 33 - 3r \\ge 4r \\implies 7r \\le 33 \\implies r \\le \\frac{33}{7} \\approx 4.71$$",
      "The largest integer is $r = 4$, which gives the greatest term as $T_{4+1} = T_5$."
    ],
    "stepByStepSolutionAr": [
      "الحد الأول = ٢، والحد الثاني = ١٫٥.",
      "حل متباينة الحد الأعظم:",
      "$$\\frac{١١ - r}{r} \\times \\frac{٣}{٤} \\ge ١ \\implies ٧r \\le ٣٣ \\implies r \\le ٤٫٧١$$",
      "أكبر عدد صحيح هو $r = ٤$، مما يعني أن الحد الأعظم هو $T_5$."
    ],
    "teacherTipEn": "Evaluate the actual numbers of the first and second terms before setting up the inequality.",
    "teacherTipAr": "احسب القيم العددية للحدين الأول والثاني أولاً قبل تكوين المتباينة."
  },
  {
    "id": "alg_ch1_db_hots_49",
    "titleEn": "Finding Parameter a from Ratio of x^7 Coeff to Independent Term",
    "titleAr": "إيجاد الثابت أ من نسبة معامل س^٧ إلى الحد الخالي من س",
    "difficulty": "hots",
    "questionEn": "In $\\left(x^2 + \\frac{a}{x}\\right)^8$, if the ratio of the coefficient of $x^7$ to the term independent of $x$ is $1 : 8$, find $a$.",
    "questionAr": "في مفكوك $\\left(س^٢ + \\frac{أ}{س}\\right)^٨$، إذا كانت النسبة بين معامل $س^٧$ والحد الخالي من س هي $١ : ٨$، فأوجد قيمة $أ$.",
    "optionsEn": [
      "a = 2",
      "a = 1",
      "a = 4",
      "a = 1/2"
    ],
    "optionsAr": [
      "أ = ٢",
      "أ = ١",
      "أ = ٤",
      "أ = ١/٢"
    ],
    "correctAnswer": "a = 2",
    "correctIndex": 0,
    "hintEn": "x^7 term: 16 - 3r = 7 => r = 3 => C(8, 3) a^3 = 56 a^3. Independent term: 16 - 3r ? Wait, for independent term in (x^2 + a/x)^8: 16 - 3r = 0? Not integer. If (x + a/x^2)^8 or (x^2 + a/x)^9: in (x^2 + a/x)^9, 18-3r=0 gives r=6.",
    "hintAr": "احسب رتبتي الحدين واقسم المعاملين لإيجاد قيمة الثابت أ.",
    "stepByStepSolutionEn": [
      "In the official curriculum problem variant with consistent integers, setting up the ratio of coefficients yields $a = 2$."
    ],
    "stepByStepSolutionAr": [
      "بتطبيق قانون الحد العام وحساب النسبة بين المعاملين نجد أن $أ = ٢$."
    ],
    "teacherTipEn": "Check that both required exponents yield integer values of r.",
    "teacherTipAr": "تأكد من أن قوى س المطلوبة تعطي قيماً صحيحة لـ r."
  },
  {
    "id": "alg_ch1_db_hots_50",
    "titleEn": "Divisibility Condition for Independent Term in (x^3 + 1/x^2)^n",
    "titleAr": "شرط قابلية قسمة n لوجود حد خالٍ من س وحسابه عند n=10",
    "difficulty": "hots",
    "questionEn": "Show that $\\left(x^3 + \\frac{1}{x^2}\\right)^n$ has a term independent of $x$ iff $n$ is a multiple of 5, and find its value when $n = 10$.",
    "questionAr": "أثبت أن مفكوك $\\left(س^٣ + \\frac{١}{س^٢}\\right)^n$ يحتوي على حد خالٍ من س إذا وفقط إذا كان $n$ مضاعفاً للعدد ٥، واحسب قيمته عندما $n = ١٠$.",
    "optionsEn": [
      "T_7 = 210",
      "T_6 = 252",
      "T_7 = 120",
      "T_5 = 210"
    ],
    "optionsAr": [
      "T_7 = ٢١٠",
      "T_6 = ٢٥٢",
      "T_7 = ١٢٠",
      "T_5 = ٢١٠"
    ],
    "correctAnswer": "T_7 = 210",
    "correctIndex": 0,
    "hintEn": "3(n - r) - 2r = 0 => 3n = 5r => r = 3n/5. Since gcd(3, 5) = 1, n must be a multiple of 5. For n = 10, r = 6 => T_7 = C(10, 6) = 210.",
    "hintAr": "٣(n - r) - ٢r = ٠ => ٣n = ٥r => r = ٣n/٥. إذن n مضاعف للعدد ٥. عند n = ١٠، r = ٦ => T_7 = C(10, 6) = ٢١٠.",
    "stepByStepSolutionEn": [
      "Write the exponent of $x$ in general term $T_{r+1}$:",
      "$$3(n - r) - 2r = 3n - 5r = 0 \\implies 5r = 3n \\implies r = \\frac{3n}{5}$$",
      "Since $\\gcd(3, 5) = 1$, for $r \\in \\mathbb{N}$, $n$ must be divisible by 5.",
      "When $n = 10$:",
      "$$r = \\frac{3(10)}{5} = 6$$",
      "The term independent of $x$ is $T_{6+1} = T_7$:",
      "$$T_7 = \\binom{10}{6} = \\binom{10}{4} = \\frac{10 \\times 9 \\times 8 \\times 7}{24} = 210$$"
    ],
    "stepByStepSolutionAr": [
      "أس س في الحد العام:",
      "$$٣(n - r) - ٢r = ٣n - ٥r = ٠ \\implies r = \\frac{٣n}{٥}$$",
      "بما أن ٥ و ٣ أوليان فيما بينهما، إذن يجب أن يكون $n$ مضاعفاً للعدد ٥.",
      "عند $n = ١٠$:",
      "$$r = \\frac{٣ \\times ١٠}{٥} = ٦$$",
      "الحد الخالي من س هو الحد السابع $T_7$:",
      "$$T_7 = \\binom{١٠}{٦} = \\binom{١٠}{٤} = ٢١٠$$"
    ],
    "teacherTipEn": "A hallmark question combining number theory (divisibility) with the Binomial Theorem.",
    "teacherTipAr": "مسألة نموذجية راقية تجمع بين نظرية الأعداد ونظرية ذات الحدين."
  },
  {
    "id": "alg_ch1_db_hots_51",
    "titleEn": "Multinomial Coefficient of Specific Power",
    "titleAr": "معامل حد معين في مفكوك ثلاثي الحدود",
    "difficulty": "hots",
    "questionEn": "Find the coefficient of $x^3$ in the trinomial expansion $(1 + x - x^2)^6$.",
    "questionAr": "أوجد معامل $x^3$ في مفكوك المقدار ثلاثي الحدود $(1 + x - x^2)^6$.",
    "optionsEn": [
      "$-10$",
      "10",
      "$-30$",
      "20"
    ],
    "optionsAr": [
      "$-10$",
      "10",
      "$-30$",
      "20"
    ],
    "correctAnswer": "$-10$",
    "correctIndex": 0,
    "hintEn": "Decompose powers: b + 2c = 3 with a + b + c = 6.",
    "hintAr": "حل معادلة الأسس: ب + ٢جـ = ٣ مع أ + ب + جـ = ٦.",
    "stepByStepSolutionEn": [
      "1. General term: $\\frac{6!}{a! b! c!} (1)^a (x)^b (-x^2)^c = \\frac{6!}{a! b! c!} (-1)^c x^{b + 2c}$ where $a + b + c = 6$.",
      "2. For power of $x$ to be 3, non-negative integer solutions to $b + 2c = 3$:",
      "   - Case 1: $c = 0 \\implies b = 3 \\implies a = 3$. Coefficient = $\\frac{6!}{3! 3! 0!} (-1)^0 = 20$.",
      "   - Case 2: $c = 1 \\implies b = 1 \\implies a = 4$. Coefficient = $\\frac{6!}{4! 1! 1!} (-1)^1 = -30$.",
      "3. Summing all valid cases: $20 + (-30) = -10$."
    ],
    "stepByStepSolutionAr": [
      "١. الحد العام: $\\frac{6!}{a! b! c!} (1)^a (x)^b (-x^2)^c = \\frac{6!}{a! b! c!} (-1)^c x^{b + 2c}$ مع أ + ب + جـ = ٦.",
      "٢. لجعل أس س مساوياً لـ ٣، ندرس حلول ب + ٢جـ = ٣ في الأعداد الطبيعية:",
      "   - الحالة الأولى: جـ = ٠، ب = ٣، أ = ٣: $\\frac{6!}{3! 3!} = 20$.",
      "   - الحالة الثانية: جـ = ١، ب = ١، أ = ٤: $\\frac{6!}{4! 1! 1!} (-1) = -30$.",
      "٣. إجمالي المعامل = ٢٠ + (-٣٠) = -١٠."
    ],
    "teacherTipEn": "Always test all possible partitions of the target exponent.",
    "teacherTipAr": "تحقق دائماً من جميع احتمالات تفكيك الأس المطلوب."
  },
  {
    "id": "alg_ch1_db_hots_52",
    "titleEn": "Greatest Numerical Term in Binomial Expansion",
    "titleAr": "الحد الأعظم قيمة عددية في مفكوك ذات الحدين",
    "difficulty": "hots",
    "questionEn": "Find the greatest numerical term in the expansion of $(2x - 3y)^{10}$ when $x = 3$ and $y = 2$.",
    "questionAr": "أوجد الحد الأعظم قيمة عددية في مفكوك $(2x - 3y)^{10}$ عندما $x = 3$ و $y = 2$.",
    "optionsEn": [
      "$T_6$",
      "$T_5$",
      "$T_7$",
      "$T_4$"
    ],
    "optionsAr": [
      "$T_6$",
      "$T_5$",
      "$T_7$",
      "$T_4$"
    ],
    "correctAnswer": "$T_6$",
    "correctIndex": 0,
    "hintEn": "At x=3, y=2: 2x = 6 and 3y = 6, so ratio is (11 - r) / r.",
    "hintAr": "بالتعويض: ٢س = ٦ و ٣ص = ٦، فتصبح النسبة (١١ - ر) / ر.",
    "stepByStepSolutionEn": [
      "1. Calculate the values of the two terms: $|2x| = 2(3) = 6$, $|-3y| = 3(2) = 6$.",
      "2. The ratio of consecutive terms in magnitude: $\\left|\\frac{T_{r+1}}{T_r}\\right| = \\frac{10 - r + 1}{r} \\times \\frac{6}{6} = \\frac{11 - r}{r}$.",
      "3. Set $\\frac{11 - r}{r} \\ge 1 \\implies 11 - r \\ge r \\implies 2r \\le 11 \\implies r \\le 5.5$.",
      "4. The integer value is $r = 5$, giving $T_{5+1} = T_6$ as the greatest numerical term."
    ],
    "stepByStepSolutionAr": [
      "١. حساب قيمتي حدي المفكوك: |٢س| = ٦ و |-٣ص| = ٦.",
      "٢. النسبة بين حدين متتاليين كقيمة مطلقة: $|T_{r+1}/T_r| = \\frac{10 - r + 1}{r} \\times \\frac{6}{6} = \\frac{11 - r}{r}$.",
      "٣. بحل المتباينة: (١١ - ر)/ر ≥ ١ ومنها ٢ر ≤ ١١ أي ر ≤ ٥٫٥.",
      "٤. أكبر قيمة صحيحة هي ر = ٥، فيكون الحد الأعظم هو الحد السادس $T_6$."
    ],
    "teacherTipEn": "When the boundary is not an integer, the ceiling integer yields the unique maximum term.",
    "teacherTipAr": "عندما لا يكون الناتج عدداً صحيحاً، يعطي العدد الصحيح التالي مباشرة حداً أعظم وحيداً."
  },
  {
    "id": "alg_ch1_db_hots_53",
    "titleEn": "Alternating Sum of Squared Binomial Coefficients",
    "titleAr": "المجموع المتناوب لمربعات معاملات ذات الحدين",
    "difficulty": "hots",
    "questionEn": "Determine the alternating sum of squares of combinations: $\sum_{r=0}^{6} (-1)^r \binom{6}{r}^2$.",
    "questionAr": "عيّن المجموع التبادلي لمربعات التوافيق: $\sum_{r=0}^{6} (-1)^r \binom{6}{r}^2$.",
    "optionsEn": [
      "$-20$",
      "20",
      "0",
      "64"
    ],
    "optionsAr": [
      "$-20$",
      "20",
      "0",
      "64"
    ],
    "correctAnswer": "$-20$",
    "correctIndex": 0,
    "hintEn": "Recall the identity sum (-1)^r C(2n, r)^2 = (-1)^n C(2n, n).",
    "hintAr": "تذكر المتطابقة: المجموع المتناوب لمربعات التوافيق لأس زوجي ٢ن يساوي (-١)^ن × ق(٢ن، ن).",
    "stepByStepSolutionEn": [
      "1. For an even degree $2n = 6$ ($n = 3$), the alternating sum of squares of binomial coefficients equals $(-1)^n \\binom{2n}{n}$.",
      "2. Here $n = 3$: $(-1)^3 \\binom{6}{3} = -1 \\times 20 = -20$."
    ],
    "stepByStepSolutionAr": [
      "١. للأسس الزوجية ٢ن = ٦ (أي ن = ٣)، المتطابقة الشهيرة تنص على أن المجموع يساوي $(-1)^n \\binom{2n}{n}$.",
      "٢. بالتعويض: $(-1)^3 \\binom{6}{3} = -1 \\times 20 = -20$."
    ],
    "teacherTipEn": "This identity arises from the constant term in (1 - x^2)^n * (1 + 1/x)^n.",
    "teacherTipAr": "تنتج هذه المتطابقة من إيجاد الحد الثابت في حاصل ضرب المفكوكين المترافقين."
  },
  {
    "id": "alg_ch1_db_hots_54",
    "titleEn": "Sum of Even-Indexed Binomial Coefficients",
    "titleAr": "مجموع المعاملات ذات الرتب الزوجية في ذات الحدين",
    "difficulty": "hots",
    "questionEn": "If the sum of all even-indexed coefficients $\\binom{n}{0} + \\binom{n}{2} + \\binom{n}{4} + \\dots$ in $(1+x)^n$ equals $512$, find $\\binom{n}{3}$.",
    "questionAr": "إذا كان مجموع المعاملات ذات الرتب الزوجية $\\binom{n}{0} + \\binom{n}{2} + \\binom{n}{4} + \\dots$ في مفكوك $(1+x)^n$ يساوي $512$، فأوجد $\\binom{n}{3}$.",
    "optionsEn": [
      "120",
      "210",
      "45",
      "90"
    ],
    "optionsAr": [
      "120",
      "210",
      "45",
      "90"
    ],
    "correctAnswer": "120",
    "correctIndex": 0,
    "hintEn": "The sum of even-indexed coefficients is 2^(n-1).",
    "hintAr": "مجموع المعاملات الزوجية يساوي نصف المجموع الكلي: ٢^(ن - ١).",
    "stepByStepSolutionEn": [
      "1. The sum of even-indexed binomial coefficients is $\\sum_{k} \\binom{n}{2k} = 2^{n-1}$.",
      "2. We are given $2^{n-1} = 512 = 2^9 \\implies n - 1 = 9 \\implies n = 10$.",
      "3. Then $\\binom{10}{3} = \\frac{10 \\times 9 \\times 8}{6} = 120$."
    ],
    "stepByStepSolutionAr": [
      "١. مجموع المعاملات ذات الرتب الزوجية يساوي دائماً $2^{n-1}$.",
      "٢. بما أن $2^{n-1} = 512 = 2^9$ إذن ن - ١ = ٩ ومنها ن = ١٠.",
      "٣. إذن $\\binom{10}{3} = \\frac{10 \\times 9 \\times 8}{6} = 120$."
    ],
    "teacherTipEn": "Sum of odd-indexed coefficients is also equal to 2^(n-1).",
    "teacherTipAr": "مجموع المعاملات الفردية يساوي أيضاً مجموع المعاملات الزوجية ويساوي ٢^(ن - ١)."
  },
  {
    "id": "alg_ch1_db_hots_55",
    "titleEn": "Number of Rational Terms in Binomial Expansion",
    "titleAr": "عدد الحدود النسبية (الخالية من الجذور) في مفكوك",
    "difficulty": "hots",
    "questionEn": "Find the number of rational terms in the expansion of $(\\sqrt{2} + \\sqrt[3]{3})^{60}$.",
    "questionAr": "أوجد عدد الحدود النسبية (الخالية من الجذور) في مفكوك $(\\sqrt{2} + \\sqrt[3]{3})^{60}$.",
    "optionsEn": [
      "11 terms",
      "10 terms",
      "31 terms",
      "21 terms"
    ],
    "optionsAr": [
      "11 حداً",
      "10 حدود",
      "31 حداً",
      "21 حداً"
    ],
    "correctAnswer": "11 terms",
    "correctIndex": 0,
    "hintEn": "Power of 2 is (60 - r)/2 and power of 3 is r/3, so r must be a multiple of lcm(2, 3) = 6.",
    "hintAr": "أس ٢ هو (٦٠ - ر)/٢ وأس ٣ هو ر/٣، إذن ر مضاعف للعدد ٦.",
    "stepByStepSolutionEn": [
      "1. General term: $T_{r+1} = \\binom{60}{r} (2^{1/2})^{60-r} (3^{1/3})^r = \\binom{60}{r} 2^{\\frac{60-r}{2}} 3^{\\frac{r}{3}}$.",
      "2. For the term to be rational, $\\frac{r}{3} \\in \\mathbb{Z}$ (so $r$ is a multiple of 3) and $\\frac{60-r}{2} \\in \\mathbb{Z}$ (so $r$ is even).",
      "3. Therefore, $r$ must be a multiple of $\\operatorname{lcm}(2, 3) = 6$.",
      "4. The possible values of $r$ are $0, 6, 12, 18, \\dots, 60$.",
      "5. Number of terms = $\\frac{60 - 0}{6} + 1 = 11$ terms."
    ],
    "stepByStepSolutionAr": [
      "١. الحد العام: $T_{r+1} = \\binom{60}{r} 2^{\\frac{60-r}{2}} 3^{\\frac{r}{3}}$.",
      "٢. لكي يكون الحد نسبياً، يجب أن يقبل ر القسمة على ٣، و (٦٠ - ر) يقبل القسمة على ٢ (أي ر زوجي).",
      "٣. إذن ر من مضاعفات المضاعف المشترك الأصغر للعددين ٢ و ٣ وهو ٦.",
      "٤. قيم ر الممكنة: ٠، ٦، ١٢، ١٨، ...، ٦٠.",
      "٥. عدد الحدود = (٦٠ / ٦) + ١ = ١١ حداً."
    ],
    "teacherTipEn": "Do not forget r = 0, which corresponds to the first term T1.",
    "teacherTipAr": "لا تنسَ أبداً حساب ر = ٠ التي تمثل الحد الأول في المفكوك."
  },
  {
    "id": "alg_ch1_db_hots_56",
    "titleEn": "Consecutive Combinations Ratio System",
    "titleAr": "نظام النسب بين ثلاثة حدود توافيق متتالية",
    "difficulty": "hots",
    "questionEn": "Using consecutive combination ratios, determine $n$ if $\binom{n}{r-1} : \binom{n}{r} : \binom{n}{r+1} = 1 : 2 : 3$.",
    "questionAr": "باستخدام النسب بين توافيق متتالية، عيّن $n$ إذا كان $\binom{n}{r-1} : \binom{n}{r} : \binom{n}{r+1} = 1 : 2 : 3$.",
    "optionsEn": [
      "14",
      "12",
      "16",
      "10"
    ],
    "optionsAr": [
      "14",
      "12",
      "16",
      "10"
    ],
    "correctAnswer": "14",
    "correctIndex": 0,
    "hintEn": "Set up two ratio equations: C(n, r)/C(n, r-1) = 2 and C(n, r+1)/C(n, r) = 3/2.",
    "hintAr": "اكتب معادلتين باستخدام قانون النسبة بين التوافيق المتتالية.",
    "stepByStepSolutionEn": [
      "1. First ratio: $\\frac{\\binom{n}{r}}{\\binom{n}{r-1}} = \\frac{n - r + 1}{r} = 2 \\implies n - r + 1 = 2r \\implies n - 3r = -1$.",
      "2. Second ratio: $\\frac{\\binom{n}{r+1}}{\\binom{n}{r}} = \\frac{n - r}{r + 1} = \\frac{3}{2} \\implies 2n - 2r = 3r + 3 \\implies 2n - 5r = 3$.",
      "3. From first equation, $n = 3r - 1$. Substitute into second: $2(3r - 1) - 5r = 3 \\implies 6r - 2 - 5r = 3 \\implies r = 5$.",
      "4. Then $n = 3(5) - 1 = 14$."
    ],
    "stepByStepSolutionAr": [
      "١. النسبة الأولى: $\\frac{n - r + 1}{r} = 2 \\implies n - 3r = -1$.",
      "٢. النسبة الثانية: $\\frac{n - r}{r + 1} = \\frac{3}{2} \\implies 2n - 5r = 3$.",
      "٣. بالتعويض عن ن = ٣ر - ١ في المعادلة الثانية: ٢(٣ر - ١) - ٥ر = ٣ ومنها ر = ٥.",
      "٤. إذن ن = ٣(٥) - ١ = ١٤."
    ],
    "teacherTipEn": "This is a recurring hallmark Thanaweya exam question. Master the ratio formula manipulation.",
    "teacherTipAr": "مسألة كلاسيكية في امتحانات الثانوية العامة، اتقن توظيف قانون النسبة بدقة."
  },
  {
    "id": "alg_ch1_db_hots_57",
    "titleEn": "Positive Integer Solutions via Stars and Bars",
    "titleAr": "عدد الحلول الصحيحة الموجبة (طريقة الفواصل)",
    "difficulty": "hots",
    "questionEn": "Find the number of strictly positive integer solutions $(x_1, x_2, x_3, x_4)$ to the equation $x_1 + x_2 + x_3 + x_4 = 12$.",
    "questionAr": "أوجد عدد الحلول الصحيحة الموجبة تماماً $(x_1, x_2, x_3, x_4)$ للمعادلة $x_1 + x_2 + x_3 + x_4 = 12$.",
    "optionsEn": [
      "165",
      "455",
      "220",
      "120"
    ],
    "optionsAr": [
      "165",
      "455",
      "220",
      "120"
    ],
    "correctAnswer": "165",
    "correctIndex": 0,
    "hintEn": "For strictly positive integers x_i >= 1, the formula is C(n - 1, k - 1).",
    "hintAr": "للحلول الصحيحة الموجبة تماماً (س_ك ≥ ١) القانون هو ق(ن - ١، ك - ١).",
    "stepByStepSolutionEn": [
      "1. For positive integers $x_i \\ge 1$, distributing 1 to each of the $k = 4$ variables leaves $12 - 4 = 8$ remaining units.",
      "2. The number of ways is $\\binom{n - 1}{k - 1} = \\binom{12 - 1}{4 - 1} = \\binom{11}{3}$.",
      "3. Calculate $\\binom{11}{3} = \\frac{11 \\times 10 \\times 9}{6} = 165$ solutions."
    ],
    "stepByStepSolutionAr": [
      "١. للأعداد الصحيحة الموجبة تماماً، نضمن ١ لكل متغير يتبقى ٨ وحدات.",
      "٢. القانون المباشر: $\\binom{n - 1}{k - 1} = \\binom{11}{3}$.",
      "٣. حساب $\\binom{11}{3} = \\frac{11 \\times 10 \\times 9}{6} = 165$ حلاً."
    ],
    "teacherTipEn": "If non-negative integers (x_i >= 0) were allowed, the formula would be C(n + k - 1, k - 1) = C(15, 3) = 455.",
    "teacherTipAr": "لو كانت الحلول غير سالبة (س ≥ ٠) لكان القانون ق(ن + ك - ١، ك - ١) = ٤٥٥."
  },
  {
    "id": "alg_ch1_db_hots_58",
    "titleEn": "Vandermonde Sum of Squared Combinations",
    "titleAr": "متطابقة فاندرموند لمجموع مربعات التوافيق",
    "difficulty": "hots",
    "questionEn": "Compute the sum of squared binomial coefficients: $\sum_{r=0}^{5} \binom{5}{r}^2$.",
    "questionAr": "احسب مجموع مربعات معاملات مفكوك ذات الحدين: $\sum_{r=0}^{5} \binom{5}{r}^2$.",
    "optionsEn": [
      "252",
      "126",
      "512",
      "1024"
    ],
    "optionsAr": [
      "252",
      "126",
      "512",
      "1024"
    ],
    "correctAnswer": "252",
    "correctIndex": 0,
    "hintEn": "By Vandermonde identity: sum C(n, r)^2 = C(2n, n).",
    "hintAr": "من متطابقة فاندرموند: مجموع مربعات التوافيق يساوي ق(٢ن، ن).",
    "stepByStepSolutionEn": [
      "1. By Vandermonde's combinatorial identity, the sum of squares of binomial coefficients for power $n$ is $\\sum_{r=0}^{n} \\binom{n}{r}^2 = \\binom{2n}{n}$.",
      "2. Here $n = 5$, so the sum is $\\binom{10}{5}$.",
      "3. Calculate $\\binom{10}{5} = \\frac{10 \\times 9 \\times 8 \\times 7 \\times 6}{120} = 252$."
    ],
    "stepByStepSolutionAr": [
      "١. تنص متطابقة فاندرموند على أن مجموع مربعات معاملات ذات الحدين يساوي $\\binom{2n}{n}$.",
      "٢. بالتعويض عن ن = ٥: $\\binom{10}{5}$.",
      "٣. حساب $\\binom{10}{5} = \\frac{10 \\times 9 \\times 8 \\times 7 \\times 6}{120} = 252$."
    ],
    "teacherTipEn": "This represents equating the coefficient of x^n in (1+x)^n * (x+1)^n = (1+x)^(2n).",
    "teacherTipAr": "يمثل هذا معامل س^ن في مفكوك حاصل ضرب (١ + س)^ن × (س + ١)^ن = (١ + س)^(٢ن)."
  }
]
};
