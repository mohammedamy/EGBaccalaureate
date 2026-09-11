import type { ChapterDatabank } from '../../../types/curriculum';

export const calcCh4Databank: ChapterDatabank = {
  easy: [
  {
    "id": "calc_ch4_db_easy_01",
    "titleEn": "Definite Integral with Identical Limits",
    "titleAr": "تكامل محدد بحدود تكامل متطابقة",
    "difficulty": "easy",
    "questionEn": "Evaluate $\\int_5^5 (x^3 + 7x - 2) dx$.",
    "questionAr": "احسب قيمة $\\int_5^5 (x^3 + 7x - 2) dx$.",
    "optionsEn": [
      "$0$",
      "$5$",
      "$12$",
      "Undefined"
    ],
    "optionsAr": [
      "0",
      "5",
      "12",
      "غير معرف"
    ],
    "correctAnswer": "$0$",
    "correctIndex": 0,
    "hintEn": "Integral from a to a is always 0.",
    "hintAr": "تكامل أي دالة من أ إلى أ يساوي صفراً.",
    "stepByStepSolutionEn": [
      "1. Apply definite integration theorems.",
      "2. Evaluate at integration limits."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق نظريات التكامل المحدد.",
      "٢. التعويض بحدود التكامل."
    ],
    "teacherTipEn": "Direct Thanaweya Amma curriculum question.",
    "teacherTipAr": "سؤال مباشر من كتاب الوزارة للثانوية العامة."
  },
  {
    "id": "calc_ch4_db_easy_02",
    "titleEn": "Reversing Limits of Integration",
    "titleAr": "عكس حدود التكامل المحدد",
    "difficulty": "easy",
    "questionEn": "If $\\int_1^4 f(x) dx = 8$, what is the value of $\\int_4^1 f(x) dx$?",
    "questionAr": "إذا كان $\\int_1^4 f(x) dx = 8$، فما قيمة $\\int_4^1 f(x) dx$؟",
    "optionsEn": [
      "$-8$",
      "$8$",
      "$\\frac{1}{8}$",
      "$0$"
    ],
    "optionsAr": [
      "-8",
      "8",
      "1/8",
      "0"
    ],
    "correctAnswer": "$-8$",
    "correctIndex": 0,
    "hintEn": "int_b^a f(x) dx = - int_a^b f(x) dx.",
    "hintAr": "عكس حدود التكامل يغير إشارة الناتج.",
    "stepByStepSolutionEn": [
      "1. Apply definite integration theorems.",
      "2. Evaluate at integration limits."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق نظريات التكامل المحدد.",
      "٢. التعويض بحدود التكامل."
    ],
    "teacherTipEn": "Direct Thanaweya Amma curriculum question.",
    "teacherTipAr": "سؤال مباشر من كتاب الوزارة للثانوية العامة."
  },
  {
    "id": "calc_ch4_db_easy_03",
    "titleEn": "Interval Additivity Property",
    "titleAr": "خاصية تجزئة فترات التكامل المحدد",
    "difficulty": "easy",
    "questionEn": "If $\\int_0^3 f(x) dx = 4$ and $\\int_3^7 f(x) dx = 9$, find $\\int_0^7 f(x) dx$.",
    "questionAr": "إذا كان $\\int_0^3 f(x) dx = 4$ و $\\int_3^7 f(x) dx = 9$، فأوجد $\\int_0^7 f(x) dx$.",
    "optionsEn": [
      "$13$",
      "$5$",
      "$-5$",
      "$36$"
    ],
    "optionsAr": [
      "13",
      "5",
      "-5",
      "36"
    ],
    "correctAnswer": "$13$",
    "correctIndex": 0,
    "hintEn": "int_0^7 = int_0^3 + int_3^7 = 4 + 9 = 13.",
    "hintAr": "تكامل من 0 إلى 7 = تكامل من 0 إلى 3 + تكامل من 3 إلى 7 = 13.",
    "stepByStepSolutionEn": [
      "1. Apply definite integration theorems.",
      "2. Evaluate at integration limits."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق نظريات التكامل المحدد.",
      "٢. التعويض بحدود التكامل."
    ],
    "teacherTipEn": "Direct Thanaweya Amma curriculum question.",
    "teacherTipAr": "سؤال مباشر من كتاب الوزارة للثانوية العامة."
  },
  {
    "id": "calc_ch4_db_easy_04",
    "titleEn": "Integral of Odd Function on Symmetric Interval",
    "titleAr": "تكامل دالة فردية على فترة متماثلة حول الصفر",
    "difficulty": "easy",
    "questionEn": "Evaluate $\\int_{-4}^4 x^5 dx$.",
    "questionAr": "احسب قيمة $\\int_{-4}^4 x^5 dx$.",
    "optionsEn": [
      "$0$",
      "$256$",
      "$512$",
      "$1024$"
    ],
    "optionsAr": [
      "0",
      "256",
      "512",
      "1024"
    ],
    "correctAnswer": "$0$",
    "correctIndex": 0,
    "hintEn": "x^5 is an odd function, so its integral over [-a, a] is 0.",
    "hintAr": "س⁵ دالة فردية، وتكامل الدالة الفردية على فترة متماثلة حول الصفر يساوي صفراً.",
    "stepByStepSolutionEn": [
      "1. Apply definite integration theorems.",
      "2. Evaluate at integration limits."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق نظريات التكامل المحدد.",
      "٢. التعويض بحدود التكامل."
    ],
    "teacherTipEn": "Direct Thanaweya Amma curriculum question.",
    "teacherTipAr": "سؤال مباشر من كتاب الوزارة للثانوية العامة."
  },
  {
    "id": "calc_ch4_db_easy_05",
    "titleEn": "Integral of Odd Trigonometric Function",
    "titleAr": "تكامل دالة مثلثية فردية على فترة متماثلة",
    "difficulty": "easy",
    "questionEn": "Evaluate $\\int_{-\\pi/2}^{\\pi/2} \\sin x \\, dx$.",
    "questionAr": "احسب قيمة $\\int_{-\\pi/2}^{\\pi/2} \\sin x \\, dx$.",
    "optionsEn": [
      "$0$",
      "$1$",
      "$2$",
      "$-2$"
    ],
    "optionsAr": [
      "0",
      "1",
      "2",
      "-2"
    ],
    "correctAnswer": "$0$",
    "correctIndex": 0,
    "hintEn": "sin x is an odd function, so integral over [-pi/2, pi/2] is 0.",
    "hintAr": "جا س دالة فردية وتكاملها من -ط/2 إلى ط/2 يساوي صفراً.",
    "stepByStepSolutionEn": [
      "1. Apply definite integration theorems.",
      "2. Evaluate at integration limits."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق نظريات التكامل المحدد.",
      "٢. التعويض بحدود التكامل."
    ],
    "teacherTipEn": "Direct Thanaweya Amma curriculum question.",
    "teacherTipAr": "سؤال مباشر من كتاب الوزارة للثانوية العامة."
  },
  {
    "id": "calc_ch4_db_easy_06",
    "titleEn": "Integral of Even Function on Symmetric Interval",
    "titleAr": "تكامل دالة زوجية على فترة متماثلة",
    "difficulty": "easy",
    "questionEn": "If $\\int_0^3 f(x) dx = 5$ and $f(x)$ is an even function, find $\\int_{-3}^3 f(x) dx$.",
    "questionAr": "إذا كان $\\int_0^3 f(x) dx = 5$ وكانت $f(x)$ دالة زوجية، فأوجد $\\int_{-3}^3 f(x) dx$.",
    "optionsEn": [
      "$10$",
      "$0$",
      "$5$",
      "$-10$"
    ],
    "optionsAr": [
      "10",
      "0",
      "5",
      "-10"
    ],
    "correctAnswer": "$10$",
    "correctIndex": 0,
    "hintEn": "For even functions, int_{-a}^a = 2 int_0^a = 2(5) = 10.",
    "hintAr": "للدالة الزوجية: التكامل من -أ إلى أ = 2 × التكامل من 0 إلى أ = 10.",
    "stepByStepSolutionEn": [
      "1. Apply definite integration theorems.",
      "2. Evaluate at integration limits."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق نظريات التكامل المحدد.",
      "٢. التعويض بحدود التكامل."
    ],
    "teacherTipEn": "Direct Thanaweya Amma curriculum question.",
    "teacherTipAr": "سؤال مباشر من كتاب الوزارة للثانوية العامة."
  },
  {
    "id": "calc_ch4_db_easy_07",
    "titleEn": "Linearity of Definite Integral",
    "titleAr": "خاصية خطية التكامل المحدد",
    "difficulty": "easy",
    "questionEn": "If $\\int_1^5 f(x) dx = 6$, find $\\int_1^5 (3f(x) + 2) dx$.",
    "questionAr": "إذا كان $\\int_1^5 f(x) dx = 6$، فأوجد قيمة $\\int_1^5 (3f(x) + 2) dx$.",
    "optionsEn": [
      "$26$",
      "$20$",
      "$18$",
      "$24$"
    ],
    "optionsAr": [
      "26",
      "20",
      "18",
      "24"
    ],
    "correctAnswer": "$26$",
    "correctIndex": 0,
    "hintEn": "3(6) + 2(5 - 1) = 18 + 8 = 26.",
    "hintAr": "3 × 6 + 2 × (5 - 1) = 18 + 8 = 26.",
    "stepByStepSolutionEn": [
      "1. Apply definite integration theorems.",
      "2. Evaluate at integration limits."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق نظريات التكامل المحدد.",
      "٢. التعويض بحدود التكامل."
    ],
    "teacherTipEn": "Direct Thanaweya Amma curriculum question.",
    "teacherTipAr": "سؤال مباشر من كتاب الوزارة للثانوية العامة."
  },
  {
    "id": "calc_ch4_db_easy_08",
    "titleEn": "Integral of Linear Polynomial",
    "titleAr": "تكامل محدد لكثير حدود من الدرجة الأولى",
    "difficulty": "easy",
    "questionEn": "Evaluate $\\int_0^3 (2x + 1) dx$.",
    "questionAr": "احسب قيمة التكامل المحدد $\\int_0^3 (2x + 1) dx$.",
    "optionsEn": [
      "$12$",
      "$9$",
      "$15$",
      "$6$"
    ],
    "optionsAr": [
      "12",
      "9",
      "15",
      "6"
    ],
    "correctAnswer": "$12$",
    "correctIndex": 0,
    "hintEn": "[x^2 + x]_0^3 = (9 + 3) - 0 = 12.",
    "hintAr": "[س² + س] من 0 إلى 3 = 9 + 3 = 12.",
    "stepByStepSolutionEn": [
      "1. Apply definite integration theorems.",
      "2. Evaluate at integration limits."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق نظريات التكامل المحدد.",
      "٢. التعويض بحدود التكامل."
    ],
    "teacherTipEn": "Direct Thanaweya Amma curriculum question.",
    "teacherTipAr": "سؤال مباشر من كتاب الوزارة للثانوية العامة."
  },
  {
    "id": "calc_ch4_db_easy_09",
    "titleEn": "Integral of Monomial x^2",
    "titleAr": "تكامل محدد للدالة التربيعية س²",
    "difficulty": "easy",
    "questionEn": "Evaluate $\\int_0^3 x^2 dx$.",
    "questionAr": "احسب قيمة التكامل المحدد $\\int_0^3 x^2 dx$.",
    "optionsEn": [
      "$9$",
      "$27$",
      "$18$",
      "$3$"
    ],
    "optionsAr": [
      "9",
      "27",
      "18",
      "3"
    ],
    "correctAnswer": "$9$",
    "correctIndex": 0,
    "hintEn": "[x^3 / 3]_0^3 = 27 / 3 = 9.",
    "hintAr": "[س³/3] من 0 إلى 3 = 27/3 = 9.",
    "stepByStepSolutionEn": [
      "1. Apply definite integration theorems.",
      "2. Evaluate at integration limits."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق نظريات التكامل المحدد.",
      "٢. التعويض بحدود التكامل."
    ],
    "teacherTipEn": "Direct Thanaweya Amma curriculum question.",
    "teacherTipAr": "سؤال مباشر من كتاب الوزارة للثانوية العامة."
  },
  {
    "id": "calc_ch4_db_easy_10",
    "titleEn": "Integral of Cosine over Quarter Period",
    "titleAr": "تكامل محدد لدالة جيب التمام في الربع الأول",
    "difficulty": "easy",
    "questionEn": "Evaluate $\\int_0^{\\pi/2} \\cos x \\, dx$.",
    "questionAr": "احسب قيمة التكامل المحدد $\\int_0^{\\pi/2} \\cos x \\, dx$.",
    "optionsEn": [
      "$1$",
      "$0$",
      "$-1$",
      "$\\frac{1}{2}$"
    ],
    "optionsAr": [
      "1",
      "0",
      "-1",
      "1/2"
    ],
    "correctAnswer": "$1$",
    "correctIndex": 0,
    "hintEn": "[sin x]_0^{pi/2} = 1 - 0 = 1.",
    "hintAr": "[جا س] من 0 إلى ط/2 = 1 - 0 = 1.",
    "stepByStepSolutionEn": [
      "1. Apply definite integration theorems.",
      "2. Evaluate at integration limits."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق نظريات التكامل المحدد.",
      "٢. التعويض بحدود التكامل."
    ],
    "teacherTipEn": "Direct Thanaweya Amma curriculum question.",
    "teacherTipAr": "سؤال مباشر من كتاب الوزارة للثانوية العامة."
  },
  {
    "id": "calc_ch4_db_easy_11",
    "titleEn": "Integral of Secant Squared",
    "titleAr": "تكامل محدد لدالة قا² س",
    "difficulty": "easy",
    "questionEn": "Evaluate $\\int_0^{\\pi/4} \\sec^2 x \\, dx$.",
    "questionAr": "احسب قيمة التكامل المحدد $\\int_0^{\\pi/4} \\sec^2 x \\, dx$.",
    "optionsEn": [
      "$1$",
      "$\\sqrt{2}$",
      "$2$",
      "$0$"
    ],
    "optionsAr": [
      "1",
      "√2",
      "2",
      "0"
    ],
    "correctAnswer": "$1$",
    "correctIndex": 0,
    "hintEn": "[tan x]_0^{pi/4} = 1 - 0 = 1.",
    "hintAr": "[ظا س] من 0 إلى ط/4 = 1 - 0 = 1.",
    "stepByStepSolutionEn": [
      "1. Apply definite integration theorems.",
      "2. Evaluate at integration limits."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق نظريات التكامل المحدد.",
      "٢. التعويض بحدود التكامل."
    ],
    "teacherTipEn": "Direct Thanaweya Amma curriculum question.",
    "teacherTipAr": "سؤال مباشر من كتاب الوزارة للثانوية العامة."
  },
  {
    "id": "calc_ch4_db_easy_12",
    "titleEn": "Integral of Absolute Value of x",
    "titleAr": "تكامل دالة مقياس س",
    "difficulty": "easy",
    "questionEn": "Evaluate $\\int_{-1}^2 |x| dx$.",
    "questionAr": "احسب قيمة التكامل المحدد $\\int_{-1}^2 |x| dx$.",
    "optionsEn": [
      "$\\frac{5}{2}$",
      "$2$",
      "$\\frac{3}{2}$",
      "$3$"
    ],
    "optionsAr": [
      "5/2",
      "2",
      "3/2",
      "3"
    ],
    "correctAnswer": "$\\frac{5}{2}$",
    "correctIndex": 0,
    "hintEn": "Area of two triangles: (1/2)(1)(1) + (1/2)(2)(2) = 0.5 + 2 = 2.5.",
    "hintAr": "مساحة مثلثين: 1/2 × 1 × 1 + 1/2 × 2 × 2 = 2.5 = 5/2.",
    "stepByStepSolutionEn": [
      "1. Apply definite integration theorems.",
      "2. Evaluate at integration limits."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق نظريات التكامل المحدد.",
      "٢. التعويض بحدود التكامل."
    ],
    "teacherTipEn": "Direct Thanaweya Amma curriculum question.",
    "teacherTipAr": "سؤال مباشر من كتاب الوزارة للثانوية العامة."
  },
  {
    "id": "calc_ch4_db_easy_13",
    "titleEn": "Integral of Exponential Function",
    "titleAr": "تكامل محدد للدالة الأسية هـ^س",
    "difficulty": "easy",
    "questionEn": "Evaluate $\\int_0^1 e^x dx$.",
    "questionAr": "احسب قيمة التكامل المحدد $\\int_0^1 e^x dx$.",
    "optionsEn": [
      "$e - 1$",
      "$e$",
      "$e + 1$",
      "$1$"
    ],
    "optionsAr": [
      "هـ - 1",
      "هـ",
      "هـ + 1",
      "1"
    ],
    "correctAnswer": "$e - 1$",
    "correctIndex": 0,
    "hintEn": "[e^x]_0^1 = e^1 - e^0 = e - 1.",
    "hintAr": "[هـ^س] من 0 إلى 1 = هـ - 1.",
    "stepByStepSolutionEn": [
      "1. Apply definite integration theorems.",
      "2. Evaluate at integration limits."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق نظريات التكامل المحدد.",
      "٢. التعويض بحدود التكامل."
    ],
    "teacherTipEn": "Direct Thanaweya Amma curriculum question.",
    "teacherTipAr": "سؤال مباشر من كتاب الوزارة للثانوية العامة."
  },
  {
    "id": "calc_ch4_db_easy_14",
    "titleEn": "Integral of Reciprocal Function",
    "titleAr": "تكامل محدد للدالة الكسرية 1/س",
    "difficulty": "easy",
    "questionEn": "Evaluate $\\int_1^2 \\frac{1}{x} dx$.",
    "questionAr": "احسب قيمة التكامل المحدد $\\int_1^2 \\frac{1}{x} dx$.",
    "optionsEn": [
      "$\\ln 2$",
      "$\\frac{1}{2}$",
      "$1$",
      "$2$"
    ],
    "optionsAr": [
      "لو_هـ 2",
      "1/2",
      "1",
      "2"
    ],
    "correctAnswer": "$\\ln 2$",
    "correctIndex": 0,
    "hintEn": "[ln x]_1^2 = ln 2 - ln 1 = ln 2.",
    "hintAr": "[لو_هـ س] من 1 إلى 2 = لو_هـ 2.",
    "stepByStepSolutionEn": [
      "1. Apply definite integration theorems.",
      "2. Evaluate at integration limits."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق نظريات التكامل المحدد.",
      "٢. التعويض بحدود التكامل."
    ],
    "teacherTipEn": "Direct Thanaweya Amma curriculum question.",
    "teacherTipAr": "سؤال مباشر من كتاب الوزارة للثانوية العامة."
  },
  {
    "id": "calc_ch4_db_easy_15",
    "titleEn": "Fundamental Theorem of Calculus Derivative",
    "titleAr": "مشتقة التكامل المحدد بالنسبة للحد العلوي",
    "difficulty": "easy",
    "questionEn": "Find $\\frac{d}{dx} \\left[ \\int_2^x \\sqrt{t^3 + 1} \\, dt \\right]$.",
    "questionAr": "أوجد قيمة $\\frac{d}{dx} \\left[ \\int_2^x \\sqrt{t^3 + 1} \\, dt \\right]$.",
    "optionsEn": [
      "$\\sqrt{x^3 + 1}$",
      "$\\frac{3x^2}{2\\sqrt{x^3+1}}$",
      "$x^3 + 1$",
      "$\\sqrt{x^3 + 1} - 3$"
    ],
    "optionsAr": [
      "√(س³ + 1)",
      "3س² / (2√(س³ + 1))",
      "س³ + 1",
      "√(س³ + 1) - 3"
    ],
    "correctAnswer": "$\\sqrt{x^3 + 1}$",
    "correctIndex": 0,
    "hintEn": "By FTC: d/dx int_a^x f(t) dt = f(x).",
    "hintAr": "النظرية الأساسية للتفاضل والتكامل: مشتقة التكامل بالنسبة لـ س تساوي الدالة الأصلية د(س).",
    "stepByStepSolutionEn": [
      "1. Apply definite integration theorems.",
      "2. Evaluate at integration limits."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق نظريات التكامل المحدد.",
      "٢. التعويض بحدود التكامل."
    ],
    "teacherTipEn": "Direct Thanaweya Amma curriculum question.",
    "teacherTipAr": "سؤال مباشر من كتاب الوزارة للثانوية العامة."
  },
  {
    "id": "calc_ch4_db_easy_16",
    "titleEn": "Area Under Triangle Curve y = 2x",
    "titleAr": "مساحة المنطقة تحت المستقيم ص = 2س",
    "difficulty": "easy",
    "questionEn": "Find the area under $y = 2x$ from $x = 0$ to $x = 3$.",
    "questionAr": "أوجد مساحة المنطقة تحت المستقيم $y = 2x$ ومحور السينات من $x = 0$ إلى $x = 3$.",
    "optionsEn": [
      "$9$",
      "$6$",
      "$18$",
      "$12$"
    ],
    "optionsAr": [
      "9",
      "6",
      "18",
      "12"
    ],
    "correctAnswer": "$9$",
    "correctIndex": 0,
    "hintEn": "Area = int_0^3 2x dx = [x^2]_0^3 = 9.",
    "hintAr": "المساحة = تكامل 2س د س من 0 إلى 3 = 9 وحدات مربعة.",
    "stepByStepSolutionEn": [
      "1. Apply definite integration theorems.",
      "2. Evaluate at integration limits."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق نظريات التكامل المحدد.",
      "٢. التعويض بحدود التكامل."
    ],
    "teacherTipEn": "Direct Thanaweya Amma curriculum question.",
    "teacherTipAr": "سؤال مباشر من كتاب الوزارة للثانوية العامة."
  },
  {
    "id": "calc_ch4_db_easy_17",
    "titleEn": "Area Under Parabola y = x^2",
    "titleAr": "مساحة المنطقة تحت القطع المكافئ ص = س²",
    "difficulty": "easy",
    "questionEn": "Find the area of the region bounded by $y = x^2$, the x-axis, and $x = 3$.",
    "questionAr": "أوجد مساحة المنطقة المحددة بالمنحنى $y = x^2$ ومحور السينات والمستقيم $x = 3$.",
    "optionsEn": [
      "$9$",
      "$27$",
      "$18$",
      "$3$"
    ],
    "optionsAr": [
      "9",
      "27",
      "18",
      "3"
    ],
    "correctAnswer": "$9$",
    "correctIndex": 0,
    "hintEn": "Area = int_0^3 x^2 dx = 9.",
    "hintAr": "المساحة = [س³/3] من 0 إلى 3 = 9 وحدات مربعة.",
    "stepByStepSolutionEn": [
      "1. Apply definite integration theorems.",
      "2. Evaluate at integration limits."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق نظريات التكامل المحدد.",
      "٢. التعويض بحدود التكامل."
    ],
    "teacherTipEn": "Direct Thanaweya Amma curriculum question.",
    "teacherTipAr": "سؤال مباشر من كتاب الوزارة للثانوية العامة."
  },
  {
    "id": "calc_ch4_db_easy_18",
    "titleEn": "Area Under Square Root Curve",
    "titleAr": "مساحة المنطقة تحت منحنى الجذر التربيعي",
    "difficulty": "easy",
    "questionEn": "Find the area bounded by $y = \\sqrt{x}$, the x-axis, and the lines $x = 0$ and $x = 4$.",
    "questionAr": "أوجد مساحة المنطقة المحصورة بين المنحنى $y = \\sqrt{x}$ ومحور السينات والمستقيمين $x = 0$ و $x = 4$.",
    "optionsEn": [
      "$\\frac{16}{3}$",
      "$8$",
      "$4$",
      "$\\frac{8}{3}$"
    ],
    "optionsAr": [
      "16/3",
      "8",
      "4",
      "8/3"
    ],
    "correctAnswer": "$\\frac{16}{3}$",
    "correctIndex": 0,
    "hintEn": "int_0^4 x^(1/2) dx = [(2/3) x^(3/2)]_0^4 = (2/3)(8) = 16/3.",
    "hintAr": "تكامل س^(1/2) = (2/3) × 8 = 16/3 وحدة مربعة.",
    "stepByStepSolutionEn": [
      "1. Apply definite integration theorems.",
      "2. Evaluate at integration limits."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق نظريات التكامل المحدد.",
      "٢. التعويض بحدود التكامل."
    ],
    "teacherTipEn": "Direct Thanaweya Amma curriculum question.",
    "teacherTipAr": "سؤال مباشر من كتاب الوزارة للثانوية العامة."
  },
  {
    "id": "calc_ch4_db_easy_19",
    "titleEn": "Area Under Single Arch of Sine",
    "titleAr": "مساحة القوس الأول لمنحنى دالة الجيب",
    "difficulty": "easy",
    "questionEn": "Find the area bounded by $y = \\sin x$ and the x-axis from $x = 0$ to $x = \\pi$.",
    "questionAr": "أوجد مساحة المنطقة المحددة بالمنحنى $y = \\sin x$ ومحور السينات من $x = 0$ إلى $x = \\pi$.",
    "optionsEn": [
      "$2$",
      "$1$",
      "$\\pi$",
      "$0$"
    ],
    "optionsAr": [
      "2",
      "1",
      "ط",
      "0"
    ],
    "correctAnswer": "$2$",
    "correctIndex": 0,
    "hintEn": "int_0^pi sin x dx = [-cos x]_0^pi = 1 - (-1) = 2.",
    "hintAr": "تكامل جا س من 0 إلى ط = 2 وحدة مربعة.",
    "stepByStepSolutionEn": [
      "1. Apply definite integration theorems.",
      "2. Evaluate at integration limits."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق نظريات التكامل المحدد.",
      "٢. التعويض بحدود التكامل."
    ],
    "teacherTipEn": "Direct Thanaweya Amma curriculum question.",
    "teacherTipAr": "سؤال مباشر من كتاب الوزارة للثانوية العامة."
  },
  {
    "id": "calc_ch4_db_easy_20",
    "titleEn": "Area Under Parabola y = 4 - x^2",
    "titleAr": "مساحة المنطقة المحصورة بين ص = 4 - س² ومحور السينات",
    "difficulty": "easy",
    "questionEn": "Find the area of the region bounded by $y = 4 - x^2$ and the x-axis.",
    "questionAr": "أوجد مساحة المنطقة المحددة بالمنحنى $y = 4 - x^2$ ومحور السينات.",
    "optionsEn": [
      "$\\frac{32}{3}$",
      "$16$",
      "$\\frac{16}{3}$",
      "$8$"
    ],
    "optionsAr": [
      "32/3",
      "16",
      "16/3",
      "8"
    ],
    "correctAnswer": "$\\frac{32}{3}$",
    "correctIndex": 0,
    "hintEn": "Roots at x = +- 2. Area = int_{-2}^2 (4 - x^2) dx = [4x - x^3/3]_{-2}^2 = 32/3.",
    "hintAr": "نقاط التقاطع مع السينات س = ± 2، والمساحة = 32/3 وحدة مربعة.",
    "stepByStepSolutionEn": [
      "1. Apply definite integration theorems.",
      "2. Evaluate at integration limits."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق نظريات التكامل المحدد.",
      "٢. التعويض بحدود التكامل."
    ],
    "teacherTipEn": "Direct Thanaweya Amma curriculum question.",
    "teacherTipAr": "سؤال مباشر من كتاب الوزارة للثانوية العامة."
  },
  {
    "id": "calc_ch4_db_easy_21",
    "titleEn": "Area of Quarter Circle via Integral",
    "titleAr": "مساحة ربع دائرة باستخدام التكامل",
    "difficulty": "easy",
    "questionEn": "Evaluate $\\int_0^3 \\sqrt{9 - x^2} \\, dx$.",
    "questionAr": "احسب قيمة التكامل $\\int_0^3 \\sqrt{9 - x^2} \\, dx$.",
    "optionsEn": [
      "$\\frac{9\\pi}{4}$",
      "$9\\pi$",
      "$\\frac{9\\pi}{2}$",
      "$3\\pi$"
    ],
    "optionsAr": [
      "9ط / 4",
      "9ط",
      "9ط / 2",
      "3ط"
    ],
    "correctAnswer": "$\\frac{9\\pi}{4}$",
    "correctIndex": 0,
    "hintEn": "Area of quarter circle of radius R = 3: (1/4) pi R^2 = 9pi/4.",
    "hintAr": "يمثل التكامل مساحة ربع دائرة نصف قطرها 3: (1/4) ط نق² = 9ط/4.",
    "stepByStepSolutionEn": [
      "1. Apply definite integration theorems.",
      "2. Evaluate at integration limits."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق نظريات التكامل المحدد.",
      "٢. التعويض بحدود التكامل."
    ],
    "teacherTipEn": "Direct Thanaweya Amma curriculum question.",
    "teacherTipAr": "سؤال مباشر من كتاب الوزارة للثانوية العامة."
  },
  {
    "id": "calc_ch4_db_easy_22",
    "titleEn": "Area Under Semicircle",
    "titleAr": "مساحة نصف دائرة بالتكامل",
    "difficulty": "easy",
    "questionEn": "Evaluate $\\int_{-2}^2 \\sqrt{4 - x^2} \\, dx$.",
    "questionAr": "احسب قيمة التكامل المحدد $\\int_{-2}^2 \\sqrt{4 - x^2} \\, dx$.",
    "optionsEn": [
      "$2\\pi$",
      "$4\\pi$",
      "$\\pi$",
      "$\\frac{\\pi}{2}$"
    ],
    "optionsAr": [
      "2ط",
      "4ط",
      "ط",
      "ط/2"
    ],
    "correctAnswer": "$2\\pi$",
    "correctIndex": 0,
    "hintEn": "Area of semicircle of radius 2: (1/2) pi (2^2) = 2pi.",
    "hintAr": "يمثل مساحة نصف دائرة نصف قطرها 2: (1/2) ط (4) = 2ط.",
    "stepByStepSolutionEn": [
      "1. Apply definite integration theorems.",
      "2. Evaluate at integration limits."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق نظريات التكامل المحدد.",
      "٢. التعويض بحدود التكامل."
    ],
    "teacherTipEn": "Direct Thanaweya Amma curriculum question.",
    "teacherTipAr": "سؤال مباشر من كتاب الوزارة للثانوية العامة."
  },
  {
    "id": "calc_ch4_db_easy_23",
    "titleEn": "Total Area with Regions Above and Below X-Axis",
    "titleAr": "المساحة الكلية مع مناطق فوق وتحت محور السينات",
    "difficulty": "easy",
    "questionEn": "Find the total area bounded by $y = x^3$ and the x-axis from $x = -1$ to $x = 1$.",
    "questionAr": "أوجد المساحة الكلية المحددة بالمنحنى $y = x^3$ ومحور السينات من $x = -1$ إلى $x = 1$.",
    "optionsEn": [
      "$\\frac{1}{2}$",
      "$0$",
      "$1$",
      "$\\frac{1}{4}$"
    ],
    "optionsAr": [
      "1/2",
      "0",
      "1",
      "1/4"
    ],
    "correctAnswer": "$\\frac{1}{2}$",
    "correctIndex": 0,
    "hintEn": "Area = int_{-1}^0 (-x^3)dx + int_0^1 x^3 dx = 1/4 + 1/4 = 1/2.",
    "hintAr": "المساحة موجبة دائماً: |تكامل من -1 إلى 0| + تكامل من 0 إلى 1 = 1/4 + 1/4 = 1/2.",
    "stepByStepSolutionEn": [
      "1. Apply definite integration theorems.",
      "2. Evaluate at integration limits."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق نظريات التكامل المحدد.",
      "٢. التعويض بحدود التكامل."
    ],
    "teacherTipEn": "Direct Thanaweya Amma curriculum question.",
    "teacherTipAr": "سؤال مباشر من كتاب الوزارة للثانوية العامة."
  },
  {
    "id": "calc_ch4_db_easy_24",
    "titleEn": "Area Under Exponential between 0 and 2",
    "titleAr": "مساحة تحت دالة أسية من 0 إلى 2",
    "difficulty": "easy",
    "questionEn": "Find the area under $y = e^{2x}$ from $x = 0$ to $x = 1$.",
    "questionAr": "أوجد مساحة المنطقة تحت المنحنى $y = e^{2x}$ ومحور السينات من $x = 0$ إلى $x = 1$.",
    "optionsEn": [
      "$\\frac{e^2 - 1}{2}$",
      "$e^2 - 1$",
      "$\\frac{e^2}{2}$",
      "$e^2$"
    ],
    "optionsAr": [
      "(هـ² - 1)/2",
      "هـ² - 1",
      "هـ²/2",
      "هـ²"
    ],
    "correctAnswer": "$\\frac{e^2 - 1}{2}$",
    "correctIndex": 0,
    "hintEn": "int_0^1 e^(2x) dx = (1/2)(e^2 - 1).",
    "hintAr": "تكامل هـ^(2س) من 0 إلى 1 = (هـ² - 1)/2.",
    "stepByStepSolutionEn": [
      "1. Apply definite integration theorems.",
      "2. Evaluate at integration limits."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق نظريات التكامل المحدد.",
      "٢. التعويض بحدود التكامل."
    ],
    "teacherTipEn": "Direct Thanaweya Amma curriculum question.",
    "teacherTipAr": "سؤال مباشر من كتاب الوزارة للثانوية العامة."
  },
  {
    "id": "calc_ch4_db_easy_25",
    "titleEn": "Area Under 1/x from 1 to 4",
    "titleAr": "مساحة تحت المنحنى 1/س من 1 إلى 4",
    "difficulty": "easy",
    "questionEn": "Find the area bounded by $y = \\frac{1}{x}$, the x-axis, $x = 1$, and $x = 4$.",
    "questionAr": "أوجد مساحة المنطقة المحددة بالمنحنى $y = \\frac{1}{x}$ ومحور السينات والمستقيمين $x = 1$ و $x = 4$.",
    "optionsEn": [
      "$\\ln 4$",
      "$\\frac{3}{4}$",
      "$4$",
      "$\\frac{1}{4}$"
    ],
    "optionsAr": [
      "لو_هـ 4",
      "3/4",
      "4",
      "1/4"
    ],
    "correctAnswer": "$\\ln 4$",
    "correctIndex": 0,
    "hintEn": "int_1^4 (1/x) dx = ln 4 - ln 1 = ln 4.",
    "hintAr": "تكامل 1/س من 1 إلى 4 = لو_هـ 4.",
    "stepByStepSolutionEn": [
      "1. Apply definite integration theorems.",
      "2. Evaluate at integration limits."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق نظريات التكامل المحدد.",
      "٢. التعويض بحدود التكامل."
    ],
    "teacherTipEn": "Direct Thanaweya Amma curriculum question.",
    "teacherTipAr": "سؤال مباشر من كتاب الوزارة للثانوية العامة."
  },
  {
    "id": "calc_ch4_db_easy_26",
    "titleEn": "Area of Strip Along Y-Axis",
    "titleAr": "مساحة منطقة بالتكامل بالنسبة لمحور الصادات",
    "difficulty": "easy",
    "questionEn": "Find the area bounded by $x = y^2$, the y-axis, and $y = 2$.",
    "questionAr": "أوجد مساحة المنطقة المحددة بالمنحنى $x = y^2$ ومحور الصادات والمستقيم $y = 2$.",
    "optionsEn": [
      "$\\frac{8}{3}$",
      "$4$",
      "$\\frac{4}{3}$",
      "$8$"
    ],
    "optionsAr": [
      "8/3",
      "4",
      "4/3",
      "8"
    ],
    "correctAnswer": "$\\frac{8}{3}$",
    "correctIndex": 0,
    "hintEn": "int_0^2 y^2 dy = [y^3 / 3]_0^2 = 8/3.",
    "hintAr": "المساحة بالنسبة لمحور الصادات = [ص³/3] من 0 إلى 2 = 8/3.",
    "stepByStepSolutionEn": [
      "1. Apply definite integration theorems.",
      "2. Evaluate at integration limits."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق نظريات التكامل المحدد.",
      "٢. التعويض بحدود التكامل."
    ],
    "teacherTipEn": "Direct Thanaweya Amma curriculum question.",
    "teacherTipAr": "سؤال مباشر من كتاب الوزارة للثانوية العامة."
  },
  {
    "id": "calc_ch4_db_easy_27",
    "titleEn": "Area between Curve and X-Axis for Cubic Root",
    "titleAr": "مساحة تحت الجذر التكعيبي",
    "difficulty": "easy",
    "questionEn": "Find the area bounded by $y = x^{1/3}$, the x-axis, and $x = 8$.",
    "questionAr": "أوجد مساحة المنطقة المحددة بالمنحنى $y = x^{1/3}$ ومحور السينات والمستقيم $x = 8$.",
    "optionsEn": [
      "$12$",
      "$16$",
      "$8$",
      "$24$"
    ],
    "optionsAr": [
      "12",
      "16",
      "8",
      "24"
    ],
    "correctAnswer": "$12$",
    "correctIndex": 0,
    "hintEn": "int_0^8 x^(1/3) dx = [(3/4) x^(4/3)]_0^8 = (3/4)(16) = 12.",
    "hintAr": "تكامل س^(1/3) = (3/4) × 16 = 12 وحدة مربعة.",
    "stepByStepSolutionEn": [
      "1. Apply definite integration theorems.",
      "2. Evaluate at integration limits."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق نظريات التكامل المحدد.",
      "٢. التعويض بحدود التكامل."
    ],
    "teacherTipEn": "Direct Thanaweya Amma curriculum question.",
    "teacherTipAr": "سؤال مباشر من كتاب الوزارة للثانوية العامة."
  },
  {
    "id": "calc_ch4_db_easy_28",
    "titleEn": "Area of Linear Trapezoid",
    "titleAr": "مساحة شبه منحرف بالتكامل",
    "difficulty": "easy",
    "questionEn": "Find the area under $y = x + 2$ from $x = 1$ to $x = 3$.",
    "questionAr": "أوجد مساحة المنطقة تحت المستقيم $y = x + 2$ ومحور السينات من $x = 1$ إلى $x = 3$.",
    "optionsEn": [
      "$8$",
      "$6$",
      "$10$",
      "$4$"
    ],
    "optionsAr": [
      "8",
      "6",
      "10",
      "4"
    ],
    "correctAnswer": "$8$",
    "correctIndex": 0,
    "hintEn": "[(1/2)x^2 + 2x]_1^3 = (4.5 + 6) - (0.5 + 2) = 10.5 - 2.5 = 8.",
    "hintAr": "المساحة = (10.5 - 2.5) = 8 وحدات مربعة.",
    "stepByStepSolutionEn": [
      "1. Apply definite integration theorems.",
      "2. Evaluate at integration limits."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق نظريات التكامل المحدد.",
      "٢. التعويض بحدود التكامل."
    ],
    "teacherTipEn": "Direct Thanaweya Amma curriculum question.",
    "teacherTipAr": "سؤال مباشر من كتاب الوزارة للثانوية العامة."
  },
  {
    "id": "calc_ch4_db_easy_29",
    "titleEn": "Area Under Parabola in First Quadrant",
    "titleAr": "مساحة تحت قطع مكافئ في الربع الأول",
    "difficulty": "easy",
    "questionEn": "Find the area bounded by $y = 9 - x^2$ in the first quadrant.",
    "questionAr": "أوجد مساحة المنطقة المحددة بالمنحنى $y = 9 - x^2$ في الربع الأول.",
    "optionsEn": [
      "$18$",
      "$9$",
      "$27$",
      "$36$"
    ],
    "optionsAr": [
      "18",
      "9",
      "27",
      "36"
    ],
    "correctAnswer": "$18$",
    "correctIndex": 0,
    "hintEn": "int_0^3 (9 - x^2) dx = [9x - x^3/3]_0^3 = 27 - 9 = 18.",
    "hintAr": "تكامل من 0 إلى 3 للدالة 9 - س² = 27 - 9 = 18.",
    "stepByStepSolutionEn": [
      "1. Apply definite integration theorems.",
      "2. Evaluate at integration limits."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق نظريات التكامل المحدد.",
      "٢. التعويض بحدود التكامل."
    ],
    "teacherTipEn": "Direct Thanaweya Amma curriculum question.",
    "teacherTipAr": "سؤال مباشر من كتاب الوزارة للثانوية العامة."
  },
  {
    "id": "calc_ch4_db_easy_30",
    "titleEn": "Area of Standard Symmetric Parabolic Segment",
    "titleAr": "مساحة القطعة المكافئة المتماثلة",
    "difficulty": "easy",
    "questionEn": "Find the area bounded by $y = 1 - x^2$ and the x-axis.",
    "questionAr": "أوجد مساحة المنطقة المحددة بالمنحنى $y = 1 - x^2$ ومحور السينات.",
    "optionsEn": [
      "$\\frac{4}{3}$",
      "$2$",
      "$\\frac{2}{3}$",
      "$1$"
    ],
    "optionsAr": [
      "4/3",
      "2",
      "2/3",
      "1"
    ],
    "correctAnswer": "$\\frac{4}{3}$",
    "correctIndex": 0,
    "hintEn": "int_{-1}^1 (1 - x^2) dx = 2 [x - x^3/3]_0^1 = 2(2/3) = 4/3.",
    "hintAr": "المساحة = 2 × (2/3) = 4/3 وحدة مربعة.",
    "stepByStepSolutionEn": [
      "1. Apply definite integration theorems.",
      "2. Evaluate at integration limits."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق نظريات التكامل المحدد.",
      "٢. التعويض بحدود التكامل."
    ],
    "teacherTipEn": "Direct Thanaweya Amma curriculum question.",
    "teacherTipAr": "سؤال مباشر من كتاب الوزارة للثانوية العامة."
  },
  {
    "id": "calc_ch4_db_easy_31",
    "titleEn": "Volume of Cone by Revolving Line y = x",
    "titleAr": "حجم مخروط بالدوران حول محور السينات",
    "difficulty": "easy",
    "questionEn": "Find the volume of the solid generated by revolving $y = x$ about the x-axis from $x = 0$ to $x = 3$.",
    "questionAr": "أوجد حجم الجسم الناشئ من دوران المنطقة المحصورة بين $y = x$ ومحور السينات حول محور السينات من $x = 0$ إلى $x = 3$.",
    "optionsEn": [
      "$9\\pi$",
      "$27\\pi$",
      "$3\\pi$",
      "$\\frac{9\\pi}{2}$"
    ],
    "optionsAr": [
      "9ط",
      "27ط",
      "3ط",
      "9ط / 2"
    ],
    "correctAnswer": "$9\\pi$",
    "correctIndex": 0,
    "hintEn": "V = pi int_0^3 x^2 dx = pi [x^3/3]_0^3 = 9pi.",
    "hintAr": "الحجم = ط × تكامل س² من 0 إلى 3 = 9ط وحدة مكعبة.",
    "stepByStepSolutionEn": [
      "1. Apply definite integration theorems.",
      "2. Evaluate at integration limits."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق نظريات التكامل المحدد.",
      "٢. التعويض بحدود التكامل."
    ],
    "teacherTipEn": "Direct Thanaweya Amma curriculum question.",
    "teacherTipAr": "سؤال مباشر من كتاب الوزارة للثانوية العامة."
  },
  {
    "id": "calc_ch4_db_easy_32",
    "titleEn": "Volume of Cylinder by Revolution",
    "titleAr": "حجم أسطوانة بدوران مستقيم أفقي",
    "difficulty": "easy",
    "questionEn": "Find the volume generated by revolving the line $y = 2$ about the x-axis from $x = 0$ to $x = 5$.",
    "questionAr": "أوجد حجم الجسم المتولد من دوران المستقيم $y = 2$ حول محور السينات من $x = 0$ إلى $x = 5$.",
    "optionsEn": [
      "$20\\pi$",
      "$10\\pi$",
      "$40\\pi$",
      "$25\\pi$"
    ],
    "optionsAr": [
      "20ط",
      "10ط",
      "40ط",
      "25ط"
    ],
    "correctAnswer": "$20\\pi$",
    "correctIndex": 0,
    "hintEn": "V = pi int_0^5 2^2 dx = pi (4)(5) = 20pi.",
    "hintAr": "الحجم = ط × 4 × 5 = 20ط وحدة مكعبة.",
    "stepByStepSolutionEn": [
      "1. Apply definite integration theorems.",
      "2. Evaluate at integration limits."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق نظريات التكامل المحدد.",
      "٢. التعويض بحدود التكامل."
    ],
    "teacherTipEn": "Direct Thanaweya Amma curriculum question.",
    "teacherTipAr": "سؤال مباشر من كتاب الوزارة للثانوية العامة."
  },
  {
    "id": "calc_ch4_db_easy_33",
    "titleEn": "Volume of Paraboloid by Revolving y = sqrt(x)",
    "titleAr": "حجم مجسم مكافئ بدوران جذر س",
    "difficulty": "easy",
    "questionEn": "Find the volume of the solid generated by revolving $y = \\sqrt{x}$ about the x-axis from $x = 0$ to $x = 4$.",
    "questionAr": "أوجد حجم الجسم المتولد من دوران $y = \\sqrt{x}$ حول محور السينات من $x = 0$ إلى $x = 4$.",
    "optionsEn": [
      "$8\\pi$",
      "$16\\pi$",
      "$4\\pi$",
      "$\\frac{16\\pi}{3}$"
    ],
    "optionsAr": [
      "8ط",
      "16ط",
      "4ط",
      "16ط / 3"
    ],
    "correctAnswer": "$8\\pi$",
    "correctIndex": 0,
    "hintEn": "V = pi int_0^4 (sqrt(x))^2 dx = pi int_0^4 x dx = pi [x^2/2]_0^4 = 8pi.",
    "hintAr": "الحجم = ط × [س²/2] من 0 إلى 4 = 8ط وحدة مكعبة.",
    "stepByStepSolutionEn": [
      "1. Apply definite integration theorems.",
      "2. Evaluate at integration limits."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق نظريات التكامل المحدد.",
      "٢. التعويض بحدود التكامل."
    ],
    "teacherTipEn": "Direct Thanaweya Amma curriculum question.",
    "teacherTipAr": "سؤال مباشر من كتاب الوزارة للثانوية العامة."
  },
  {
    "id": "calc_ch4_db_easy_34",
    "titleEn": "Volume of Revolution of y = x^2 About X-Axis",
    "titleAr": "حجم دوران القطع المكافئ حول محور السينات",
    "difficulty": "easy",
    "questionEn": "Find the volume generated by revolving $y = x^2$ about the x-axis from $x = 0$ to $x = 2$.",
    "questionAr": "أوجد حجم الجسم الناشئ من دوران $y = x^2$ حول محور السينات من $x = 0$ إلى $x = 2$.",
    "optionsEn": [
      "$\\frac{32\\pi}{5}$",
      "$\\frac{16\\pi}{5}$",
      "$8\\pi$",
      "$\\frac{32\\pi}{3}$"
    ],
    "optionsAr": [
      "32ط / 5",
      "16ط / 5",
      "8ط",
      "32ط / 3"
    ],
    "correctAnswer": "$\\frac{32\\pi}{5}$",
    "correctIndex": 0,
    "hintEn": "V = pi int_0^2 (x^2)^2 dx = pi [x^5/5]_0^2 = 32pi/5.",
    "hintAr": "الحجم = ط × [س⁵/5] من 0 إلى 2 = 32ط/5.",
    "stepByStepSolutionEn": [
      "1. Apply definite integration theorems.",
      "2. Evaluate at integration limits."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق نظريات التكامل المحدد.",
      "٢. التعويض بحدود التكامل."
    ],
    "teacherTipEn": "Direct Thanaweya Amma curriculum question.",
    "teacherTipAr": "سؤال مباشر من كتاب الوزارة للثانوية العامة."
  },
  {
    "id": "calc_ch4_db_easy_35",
    "titleEn": "Volume of Sphere by Integration",
    "titleAr": "حجم كرة كاملة بالتكامل المحدد",
    "difficulty": "easy",
    "questionEn": "Find the volume of the sphere generated by revolving $y = \\sqrt{9 - x^2}$ about the x-axis from $x = -3$ to $x = 3$.",
    "questionAr": "أوجد حجم الكرة المتولدة من دوران $y = \\sqrt{9 - x^2}$ حول محور السينات من $x = -3$ إلى $x = 3$.",
    "optionsEn": [
      "$36\\pi$",
      "$18\\pi$",
      "$72\\pi$",
      "$27\\pi$"
    ],
    "optionsAr": [
      "36ط",
      "18ط",
      "72ط",
      "27ط"
    ],
    "correctAnswer": "$36\\pi$",
    "correctIndex": 0,
    "hintEn": "V = (4/3) pi R^3 = (4/3) pi (27) = 36pi.",
    "hintAr": "الحجم = 4/3 ط نق³ = 4/3 ط (27) = 36ط وحدة مكعبة.",
    "stepByStepSolutionEn": [
      "1. Apply definite integration theorems.",
      "2. Evaluate at integration limits."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق نظريات التكامل المحدد.",
      "٢. التعويض بحدود التكامل."
    ],
    "teacherTipEn": "Direct Thanaweya Amma curriculum question.",
    "teacherTipAr": "سؤال مباشر من كتاب الوزارة للثانوية العامة."
  },
  {
    "id": "calc_ch4_db_easy_36",
    "titleEn": "Volume of Revolution of y = x^2 About Y-Axis",
    "titleAr": "حجم دوران القطع المكافئ حول محور الصادات",
    "difficulty": "easy",
    "questionEn": "Find the volume generated by revolving the region bounded by $y = x^2$, the y-axis, and $y = 4$ about the y-axis.",
    "questionAr": "أوجد حجم الجسم الناشئ من دوران المنطقة المحصورة بين $y = x^2$ ومحور الصادات والمستقيم $y = 4$ حول محور الصادات.",
    "optionsEn": [
      "$8\\pi$",
      "$16\\pi$",
      "$4\\pi$",
      "$\\frac{32\\pi}{3}$"
    ],
    "optionsAr": [
      "8ط",
      "16ط",
      "4ط",
      "32ط / 3"
    ],
    "correctAnswer": "$8\\pi$",
    "correctIndex": 0,
    "hintEn": "V = pi int_0^4 x^2 dy = pi int_0^4 y dy = pi [y^2/2]_0^4 = 8pi.",
    "hintAr": "الحجم حول محور الصادات = ط × تكامل ص د ص من 0 إلى 4 = 8ط.",
    "stepByStepSolutionEn": [
      "1. Apply definite integration theorems.",
      "2. Evaluate at integration limits."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق نظريات التكامل المحدد.",
      "٢. التعويض بحدود التكامل."
    ],
    "teacherTipEn": "Direct Thanaweya Amma curriculum question.",
    "teacherTipAr": "سؤال مباشر من كتاب الوزارة للثانوية العامة."
  },
  {
    "id": "calc_ch4_db_easy_37",
    "titleEn": "Volume of Cone by Revolving About Y-Axis",
    "titleAr": "حجم مخروط بالدوران حول محور الصادات",
    "difficulty": "easy",
    "questionEn": "Find the volume generated by revolving the line $x = 2y$ about the y-axis from $y = 0$ to $y = 3$.",
    "questionAr": "أوجد حجم الجسم المتولد من دوران المستقيم $x = 2y$ حول محور الصادات من $y = 0$ إلى $y = 3$.",
    "optionsEn": [
      "$36\\pi$",
      "$18\\pi$",
      "$12\\pi$",
      "$9\\pi$"
    ],
    "optionsAr": [
      "36ط",
      "18ط",
      "12ط",
      "9ط"
    ],
    "correctAnswer": "$36\\pi$",
    "correctIndex": 0,
    "hintEn": "V = pi int_0^3 (2y)^2 dy = 4 pi [y^3/3]_0^3 = 4 pi (9) = 36pi.",
    "hintAr": "الحجم = ط × 4 × [ص³/3] من 0 إلى 3 = 36ط.",
    "stepByStepSolutionEn": [
      "1. Apply definite integration theorems.",
      "2. Evaluate at integration limits."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق نظريات التكامل المحدد.",
      "٢. التعويض بحدود التكامل."
    ],
    "teacherTipEn": "Direct Thanaweya Amma curriculum question.",
    "teacherTipAr": "سؤال مباشر من كتاب الوزارة للثانوية العامة."
  },
  {
    "id": "calc_ch4_db_easy_38",
    "titleEn": "Volume of Revolution of Sine Curve",
    "titleAr": "حجم دوران قوس الجيب حول محور السينات",
    "difficulty": "easy",
    "questionEn": "Find the volume generated by revolving $y = \\sin x$ about the x-axis from $x = 0$ to $x = \\pi$.",
    "questionAr": "أوجد حجم الجسم المتولد من دوران $y = \\sin x$ حول محور السينات من $x = 0$ إلى $x = \\pi$.",
    "optionsEn": [
      "$\\frac{\\pi^2}{2}$",
      "$\\pi^2$",
      "$2\\pi$",
      "$\\frac{\\pi}{2}$"
    ],
    "optionsAr": [
      "ط² / 2",
      "ط²",
      "2ط",
      "ط / 2"
    ],
    "correctAnswer": "$\\frac{\\pi^2}{2}$",
    "correctIndex": 0,
    "hintEn": "V = pi int_0^pi sin^2 x dx = pi [x/2 - sin(2x)/4]_0^pi = pi^2 / 2.",
    "hintAr": "الحجم = ط × تكامل جا² س من 0 إلى ط = ط²/2.",
    "stepByStepSolutionEn": [
      "1. Apply definite integration theorems.",
      "2. Evaluate at integration limits."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق نظريات التكامل المحدد.",
      "٢. التعويض بحدود التكامل."
    ],
    "teacherTipEn": "Direct Thanaweya Amma curriculum question.",
    "teacherTipAr": "سؤال مباشر من كتاب الوزارة للثانوية العامة."
  },
  {
    "id": "calc_ch4_db_easy_39",
    "titleEn": "Volume of Revolution of Exponential Function",
    "titleAr": "حجم دوران دالة أسية حول محور السينات",
    "difficulty": "easy",
    "questionEn": "Find the volume generated by revolving $y = e^x$ about the x-axis from $x = 0$ to $x = 1$.",
    "questionAr": "أوجد حجم الجسم المتولد من دوران المنحنى $y = e^x$ حول محور السينات من $x = 0$ إلى $x = 1$.",
    "optionsEn": [
      "$\\frac{\\pi}{2}(e^2 - 1)$",
      "$\\pi(e^2 - 1)$",
      "$\\frac{\\pi}{2}e^2$",
      "$\\pi e^2$"
    ],
    "optionsAr": [
      "(ط/2)(هـ² - 1)",
      "ط(هـ² - 1)",
      "(ط/2)هـ²",
      "ط هـ²"
    ],
    "correctAnswer": "$\\frac{\\pi}{2}(e^2 - 1)$",
    "correctIndex": 0,
    "hintEn": "V = pi int_0^1 (e^x)^2 dx = pi int_0^1 e^(2x) dx = (pi/2)(e^2 - 1).",
    "hintAr": "الحجم = ط × [(1/2)هـ^(2س)] من 0 إلى 1 = (ط/2)(هـ² - 1).",
    "stepByStepSolutionEn": [
      "1. Apply definite integration theorems.",
      "2. Evaluate at integration limits."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق نظريات التكامل المحدد.",
      "٢. التعويض بحدود التكامل."
    ],
    "teacherTipEn": "Direct Thanaweya Amma curriculum question.",
    "teacherTipAr": "سؤال مباشر من كتاب الوزارة للثانوية العامة."
  },
  {
    "id": "calc_ch4_db_easy_40",
    "titleEn": "Volume of Revolution of 1/x Curve",
    "titleAr": "حجم دوران منحنى 1/س حول محور السينات",
    "difficulty": "easy",
    "questionEn": "Find the volume generated by revolving $y = \\frac{1}{x}$ about the x-axis from $x = 1$ to $x = 4$.",
    "questionAr": "أوجد حجم الجسم الناشئ من دوران المنحنى $y = \\frac{1}{x}$ حول محور السينات من $x = 1$ إلى $x = 4$.",
    "optionsEn": [
      "$\\frac{3\\pi}{4}$",
      "$\\pi \\ln 4$",
      "$\\frac{\\pi}{4}$",
      "$3\\pi$"
    ],
    "optionsAr": [
      "3ط / 4",
      "ط لو_هـ 4",
      "ط / 4",
      "3ط"
    ],
    "correctAnswer": "$\\frac{3\\pi}{4}$",
    "correctIndex": 0,
    "hintEn": "V = pi int_1^4 (1/x^2) dx = pi [-1/x]_1^4 = pi (1 - 1/4) = 3pi/4.",
    "hintAr": "الحجم = ط × [-1/س] من 1 إلى 4 = 3ط/4.",
    "stepByStepSolutionEn": [
      "1. Apply definite integration theorems.",
      "2. Evaluate at integration limits."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق نظريات التكامل المحدد.",
      "٢. التعويض بحدود التكامل."
    ],
    "teacherTipEn": "Direct Thanaweya Amma curriculum question.",
    "teacherTipAr": "سؤال مباشر من كتاب الوزارة للثانوية العامة."
  },
  {
    "id": "calc_ch4_db_easy_41",
    "titleEn": "Volume Formula Identification",
    "titleAr": "تحديد صيغة الحجم الدوراني حول محور السينات",
    "difficulty": "easy",
    "questionEn": "The volume of the solid generated by revolving $y = f(x)$ from $x = a$ to $x = b$ about the x-axis is given by:",
    "questionAr": "حجم الجسم الناشئ عن دوران المنطقة المحددة بالمنحنى $y = f(x)$ ومحور السينات حول محور السينات يُعطى بالقانون:",
    "optionsEn": [
      "$\\pi \\int_a^b [f(x)]^2 dx$",
      "$2\\pi \\int_a^b f(x) dx$",
      "$\\pi \\int_a^b f(x) dx$",
      "$\\int_a^b [f(x)]^2 dx$"
    ],
    "optionsAr": [
      "ط × تكامل [د(س)]² د س",
      "2ط × تكامل د(س) د س",
      "ط × تكامل د(س) د س",
      "تكامل [د(س)]² د س"
    ],
    "correctAnswer": "$\\pi \\int_a^b [f(x)]^2 dx$",
    "correctIndex": 0,
    "hintEn": "Standard disk method: V = pi int y^2 dx.",
    "hintAr": "طريقة الأقراص الدائرية القياسية: الحجم = ط × تكامل ص² د س.",
    "stepByStepSolutionEn": [
      "1. Apply definite integration theorems.",
      "2. Evaluate at integration limits."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق نظريات التكامل المحدد.",
      "٢. التعويض بحدود التكامل."
    ],
    "teacherTipEn": "Direct Thanaweya Amma curriculum question.",
    "teacherTipAr": "سؤال مباشر من كتاب الوزارة للثانوية العامة."
  },
  {
    "id": "calc_ch4_db_easy_42",
    "titleEn": "Volume Formula Identification for Y-Axis",
    "titleAr": "تحديد صيغة الحجم الدوراني حول محور الصادات",
    "difficulty": "easy",
    "questionEn": "The volume of the solid generated by revolving $x = g(y)$ from $y = c$ to $y = d$ about the y-axis is:",
    "questionAr": "حجم الجسم الناشئ عن دوران المنطقة حول محور الصادات من $y = c$ إلى $y = d$ يُعطى بالقانون:",
    "optionsEn": [
      "$\\pi \\int_c^d [g(y)]^2 dy$",
      "$2\\pi \\int_c^d y g(y) dy$",
      "$\\pi \\int_c^d g(y) dy$",
      "$\\int_c^d [g(y)]^2 dy$"
    ],
    "optionsAr": [
      "ط × تكامل [ر(ص)]² د ص",
      "2ط × تكامل ص ر(ص) د ص",
      "ط × تكامل ر(ص) د ص",
      "تكامل [ر(ص)]² د ص"
    ],
    "correctAnswer": "$\\pi \\int_c^d [g(y)]^2 dy$",
    "correctIndex": 0,
    "hintEn": "Standard disk method around y-axis: V = pi int x^2 dy.",
    "hintAr": "الحجم بالدوران حول محور الصادات = ط × تكامل س² د ص.",
    "stepByStepSolutionEn": [
      "1. Apply definite integration theorems.",
      "2. Evaluate at integration limits."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق نظريات التكامل المحدد.",
      "٢. التعويض بحدود التكامل."
    ],
    "teacherTipEn": "Direct Thanaweya Amma curriculum question.",
    "teacherTipAr": "سؤال مباشر من كتاب الوزارة للثانوية العامة."
  },
  {
    "id": "calc_ch4_db_easy_43",
    "titleEn": "Volume of Semicircular Solid of Revolution",
    "titleAr": "حجم نصف كرة بالدوران",
    "difficulty": "easy",
    "questionEn": "Find the volume of the hemisphere generated by revolving $y = \\sqrt{4 - x^2}$ from $x = 0$ to $x = 2$ about the x-axis.",
    "questionAr": "أوجد حجم نصف الكرة المتولد من دوران $y = \\sqrt{4 - x^2}$ من $x = 0$ إلى $x = 2$ حول محور السينات.",
    "optionsEn": [
      "$\\frac{16\\pi}{3}$",
      "$\\frac{32\\pi}{3}$",
      "$8\\pi$",
      "$4\\pi$"
    ],
    "optionsAr": [
      "16ط / 3",
      "32ط / 3",
      "8ط",
      "4ط"
    ],
    "correctAnswer": "$\\frac{16\\pi}{3}$",
    "correctIndex": 0,
    "hintEn": "V = (1/2) (4/3 pi R^3) = (2/3) pi (8) = 16pi/3.",
    "hintAr": "حجم نصف الكرة = 2/3 ط نق³ = 16ط/3.",
    "stepByStepSolutionEn": [
      "1. Apply definite integration theorems.",
      "2. Evaluate at integration limits."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق نظريات التكامل المحدد.",
      "٢. التعويض بحدود التكامل."
    ],
    "teacherTipEn": "Direct Thanaweya Amma curriculum question.",
    "teacherTipAr": "سؤال مباشر من كتاب الوزارة للثانوية العامة."
  },
  {
    "id": "calc_ch4_db_easy_44",
    "titleEn": "Volume of Revolution of y = 3x",
    "titleAr": "حجم دوران مستقيم يمر بنقطة الأصل",
    "difficulty": "easy",
    "questionEn": "Find the volume of the cone generated by revolving $y = 3x$ from $x = 0$ to $x = 2$ about the x-axis.",
    "questionAr": "أوجد حجم المخروط المتولد من دوران $y = 3x$ من $x = 0$ إلى $x = 2$ حول محور السينات.",
    "optionsEn": [
      "$24\\pi$",
      "$12\\pi$",
      "$36\\pi$",
      "$18\\pi$"
    ],
    "optionsAr": [
      "24ط",
      "12ط",
      "36ط",
      "18ط"
    ],
    "correctAnswer": "$24\\pi$",
    "correctIndex": 0,
    "hintEn": "V = pi int_0^2 9x^2 dx = 9 pi [x^3/3]_0^2 = 9 pi (8/3) = 24pi.",
    "hintAr": "الحجم = ط × 9 × (8/3) = 24ط.",
    "stepByStepSolutionEn": [
      "1. Apply definite integration theorems.",
      "2. Evaluate at integration limits."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق نظريات التكامل المحدد.",
      "٢. التعويض بحدود التكامل."
    ],
    "teacherTipEn": "Direct Thanaweya Amma curriculum question.",
    "teacherTipAr": "سؤال مباشر من كتاب الوزارة للثانوية العامة."
  },
  {
    "id": "calc_ch4_db_easy_45",
    "titleEn": "Volume of Revolution of y = x^3",
    "titleAr": "حجم دوران منحنى تكعيبي حول محور السينات",
    "difficulty": "easy",
    "questionEn": "Find the volume generated by revolving $y = x^3$ from $x = 0$ to $x = 1$ about the x-axis.",
    "questionAr": "أوجد حجم الجسم المتولد من دوران $y = x^3$ من $x = 0$ إلى $x = 1$ حول محور السينات.",
    "optionsEn": [
      "$\\frac{\\pi}{7}$",
      "$\\frac{\\pi}{6}$",
      "$\\frac{\\pi}{5}$",
      "$\\frac{\\pi}{4}$"
    ],
    "optionsAr": [
      "ط / 7",
      "ط / 6",
      "ط / 5",
      "ط / 4"
    ],
    "correctAnswer": "$\\frac{\\pi}{7}$",
    "correctIndex": 0,
    "hintEn": "V = pi int_0^1 (x^3)^2 dx = pi int_0^1 x^6 dx = pi/7.",
    "hintAr": "الحجم = ط × تكامل س⁶ من 0 إلى 1 = ط/7.",
    "stepByStepSolutionEn": [
      "1. Apply definite integration theorems.",
      "2. Evaluate at integration limits."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق نظريات التكامل المحدد.",
      "٢. التعويض بحدود التكامل."
    ],
    "teacherTipEn": "Direct Thanaweya Amma curriculum question.",
    "teacherTipAr": "سؤال مباشر من كتاب الوزارة للثانوية العامة."
  },
  {
    "id": "calc_ch4_db_easy_46",
    "titleEn": "Average Value of Quadratic Function",
    "titleAr": "القيمة المتوسطة لدالة تربيعية",
    "difficulty": "easy",
    "questionEn": "Find the average value of $f(x) = x^2$ on the interval $[0, 3]$.",
    "questionAr": "أوجد القيمة المتوسطة للدالة $f(x) = x^2$ على الفترة $[0, 3]$.",
    "optionsEn": [
      "$3$",
      "$9$",
      "$1$",
      "$\\frac{9}{2}$"
    ],
    "optionsAr": [
      "3",
      "9",
      "1",
      "9/2"
    ],
    "correctAnswer": "$3$",
    "correctIndex": 0,
    "hintEn": "f_avg = (1/(3 - 0)) int_0^3 x^2 dx = (1/3)(9) = 3.",
    "hintAr": "القيمة المتوسطة = (1 / (3 - 0)) × 9 = 3.",
    "stepByStepSolutionEn": [
      "1. Apply definite integration theorems.",
      "2. Evaluate at integration limits."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق نظريات التكامل المحدد.",
      "٢. التعويض بحدود التكامل."
    ],
    "teacherTipEn": "Direct Thanaweya Amma curriculum question.",
    "teacherTipAr": "سؤال مباشر من كتاب الوزارة للثانوية العامة."
  },
  {
    "id": "calc_ch4_db_easy_47",
    "titleEn": "Average Value of Linear Function",
    "titleAr": "القيمة المتوسطة لدالة خطية",
    "difficulty": "easy",
    "questionEn": "Find the average value of $f(x) = 4x$ on $[0, 2]$.",
    "questionAr": "أوجد القيمة المتوسطة للدالة $f(x) = 4x$ على الفترة $[0, 2]$.",
    "optionsEn": [
      "$4$",
      "$8$",
      "$2$",
      "$6$"
    ],
    "optionsAr": [
      "4",
      "8",
      "2",
      "6"
    ],
    "correctAnswer": "$4$",
    "correctIndex": 0,
    "hintEn": "f_avg = (1/2) int_0^2 4x dx = (1/2)(8) = 4.",
    "hintAr": "القيمة المتوسطة = (1/2) × 8 = 4.",
    "stepByStepSolutionEn": [
      "1. Apply definite integration theorems.",
      "2. Evaluate at integration limits."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق نظريات التكامل المحدد.",
      "٢. التعويض بحدود التكامل."
    ],
    "teacherTipEn": "Direct Thanaweya Amma curriculum question.",
    "teacherTipAr": "سؤال مباشر من كتاب الوزارة للثانوية العامة."
  },
  {
    "id": "calc_ch4_db_easy_48",
    "titleEn": "Average Value of Sine on Half Period",
    "titleAr": "القيمة المتوسطة لدالة الجيب على نصف دورة",
    "difficulty": "easy",
    "questionEn": "Find the average value of $f(x) = \\sin x$ on $[0, \\pi]$.",
    "questionAr": "أوجد القيمة المتوسطة للدالة $f(x) = \\sin x$ على الفترة $[0, \\pi]$.",
    "optionsEn": [
      "$\\frac{2}{\\pi}$",
      "$\\frac{1}{\\pi}$",
      "$\\frac{\\pi}{2}$",
      "$0$"
    ],
    "optionsAr": [
      "2 / ط",
      "1 / ط",
      "ط / 2",
      "0"
    ],
    "correctAnswer": "$\\frac{2}{\\pi}$",
    "correctIndex": 0,
    "hintEn": "f_avg = (1/pi) int_0^pi sin x dx = 2/pi.",
    "hintAr": "القيمة المتوسطة = (1/ط) × 2 = 2/ط.",
    "stepByStepSolutionEn": [
      "1. Apply definite integration theorems.",
      "2. Evaluate at integration limits."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق نظريات التكامل المحدد.",
      "٢. التعويض بحدود التكامل."
    ],
    "teacherTipEn": "Direct Thanaweya Amma curriculum question.",
    "teacherTipAr": "سؤال مباشر من كتاب الوزارة للثانوية العامة."
  },
  {
    "id": "calc_ch4_db_easy_49",
    "titleEn": "Integral of Derivative of Composite Function",
    "titleAr": "تكامل مشتقة دالة مركبة",
    "difficulty": "easy",
    "questionEn": "Evaluate $\\int_1^3 f'(x) dx$ if $f(1) = 4$ and $f(3) = 11$.",
    "questionAr": "احسب قيمة التكامل $\\int_1^3 f'(x) dx$ إذا كان $f(1) = 4$ و $f(3) = 11$.",
    "optionsEn": [
      "$7$",
      "$15$",
      "$-7$",
      "$44$"
    ],
    "optionsAr": [
      "7",
      "15",
      "-7",
      "44"
    ],
    "correctAnswer": "$7$",
    "correctIndex": 0,
    "hintEn": "By FTC: int_1^3 f'(x) dx = f(3) - f(1) = 11 - 4 = 7.",
    "hintAr": "تكامل د'(س) = د(3) - د(1) = 11 - 4 = 7.",
    "stepByStepSolutionEn": [
      "1. Apply definite integration theorems.",
      "2. Evaluate at integration limits."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق نظريات التكامل المحدد.",
      "٢. التعويض بحدود التكامل."
    ],
    "teacherTipEn": "Direct Thanaweya Amma curriculum question.",
    "teacherTipAr": "سؤال مباشر من كتاب الوزارة للثانوية العامة."
  },
  {
    "id": "calc_ch4_db_easy_50",
    "titleEn": "Zero Integral of Constant on Degenerate Interval",
    "titleAr": "انعدام التكامل عندما يتساوى حدي التكامل",
    "difficulty": "easy",
    "questionEn": "What is the value of $\\int_a^a \\cos(x^2 + 1) dx$ for any real number $a$?",
    "questionAr": "ما قيمة $\\int_a^a \\cos(x^2 + 1) dx$ لأي عدد حقيقي $a$؟",
    "optionsEn": [
      "$0$",
      "$1$",
      "$\\cos(a^2 + 1)$",
      "Cannot be determined"
    ],
    "optionsAr": [
      "0",
      "1",
      "جتا(أ² + 1)",
      "لا يمكن تحديده"
    ],
    "correctAnswer": "$0$",
    "correctIndex": 0,
    "hintEn": "Integral from a to a is identically zero.",
    "hintAr": "التكامل من أ إلى أ يساوي صفراً دائماً.",
    "stepByStepSolutionEn": [
      "1. Apply definite integration theorems.",
      "2. Evaluate at integration limits."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق نظريات التكامل المحدد.",
      "٢. التعويض بحدود التكامل."
    ],
    "teacherTipEn": "Direct Thanaweya Amma curriculum question.",
    "teacherTipAr": "سؤال مباشر من كتاب الوزارة للثانوية العامة."
  },
  {
    "id": "calc_ch4_db_easy_51",
    "titleEn": "Definite Integral with Symmetric Limits of Odd Function",
    "titleAr": "تكامل محدد لدالة فردية بحدود متماثلة",
    "difficulty": "easy",
    "questionEn": "Evaluate the definite integral: $\\int_{-3}^{3} (x^5 - 4x^3 + 7x) \\, dx$.",
    "questionAr": "احسب التكامل المحدد: $\\int_{-3}^{3} (x^5 - 4x^3 + 7x) \\, dx$.",
    "optionsEn": [
      "$0$",
      "$18$",
      "$36$",
      "$-18$"
    ],
    "optionsAr": [
      "$0$",
      "$18$",
      "$36$",
      "$-18$"
    ],
    "correctIndex": 0,
    "correctAnswer": "$0$",
    "hintEn": "Check if the integrand is an odd function.",
    "hintAr": "تحقق مما إذا كانت الدالة داخل التكامل دالة فردية.",
    "teacherTipEn": "The integral of any odd function over symmetric limits $[-a, a]$ is identically zero.",
    "teacherTipAr": "تكامل أي دالة فردية على فترة متماثلة حول الصفر $[-a, a]$ يساوي صفراً فوراً.",
    "stepByStepSolutionEn": [
      "Check parity: $f(-x) = (-x)^5 - 4(-x)^3 + 7(-x) = -x^5 + 4x^3 - 7x = -f(x)$.",
      "Since $f(x)$ is odd and limits are $[-3, 3]$, $\\int_{-3}^{3} f(x) dx = 0$."
    ],
    "stepByStepSolutionAr": [
      "اختبار نوع الدالة: $f(-x) = -f(x)$، فهي دالة فردية.",
      "تكامل الدالة الفردية على حدود متماثلة يساوي $0$."
    ]
  },
  {
    "id": "calc_ch4_db_easy_52",
    "titleEn": "Area Under a Simple Parabola",
    "titleAr": "المساحة تحت قطع مكافئ بسيط",
    "difficulty": "easy",
    "questionEn": "Find the area of the region bounded by the curve $y = 9 - x^2$ and the x-axis.",
    "questionAr": "أوجد مساحة المنطقة المحدودة بالمنحنى $y = 9 - x^2$ ومحور السينات.",
    "optionsEn": [
      "$36\\text{ sq units}$",
      "$18\\text{ sq units}$",
      "$27\\text{ sq units}$",
      "$54\\text{ sq units}$"
    ],
    "optionsAr": [
      "$36\\text{ وحدة مربعة}$",
      "$18\\text{ وحدة مربعة}$",
      "$27\\text{ وحدة مربعة}$",
      "$54\\text{ وحدة مربعة}$"
    ],
    "correctIndex": 0,
    "correctAnswer": "$36\\text{ sq units}$",
    "hintEn": "Find the x-intercepts by solving $9 - x^2 = 0$, then evaluate $\\int_{-3}^{3} (9 - x^2) dx$.",
    "hintAr": "أوجد نقاط التقاطع مع محور السينات $9 - x^2 = 0$ ثم احسب $\\int_{-3}^{3} (9 - x^2) dx$.",
    "teacherTipEn": "By Archimedes' formula, the area under a parabolic segment is $\\frac{2}{3} \\times \\text{base} \\times \\text{height} = \\frac{2}{3}(6)(9) = 36$.",
    "teacherTipAr": "وفق قاعدة أرخميدس، مساحة القطاع المكافئ تساوي $\\frac{2}{3} \\times \\text{القاعدة} \\times \\text{الارتفاع} = \\frac{2}{3}(6)(9) = 36$.",
    "stepByStepSolutionEn": [
      "Intersection with x-axis: $9 - x^2 = 0 \\implies x = \\pm 3$.",
      "Area: $A = \\int_{-3}^{3} (9 - x^2) dx = 2 \\int_0^3 (9 - x^2) dx$.",
      "Integrate: $2 \\left[ 9x - \\frac{x^3}{3} \\right]_0^3 = 2(27 - 9) = 2(18) = 36\\text{ sq units}$."
    ],
    "stepByStepSolutionAr": [
      "التقاطع مع محور السينات: $x = \\pm 3$.",
      "المساحة: $A = 2\\int_0^3 (9 - x^2) dx = 2[9x - x^3/3]_0^3 = 2(18) = 36\\text{ وحدة مربعة}$."
    ]
  },
  {
    "id": "calc_ch4_db_easy_53",
    "titleEn": "Volume of Revolution of Linear Segment",
    "titleAr": "حجم الجسم الدوراني لقطعة مستقيمة",
    "difficulty": "easy",
    "questionEn": "Find the volume of the solid generated by revolving the region bounded by $y = 2x$, $x = 0$, and $x = 3$ about the x-axis.",
    "questionAr": "أوجد حجم الجسم الناشئ عن دوران المنطقة المحدودة بالمستقيمات $y = 2x$ و $x = 0$ و $x = 3$ دورة كاملة حول محور السينات.",
    "optionsEn": [
      "$36\\pi\\text{ cubic units}$",
      "$18\\pi\\text{ cubic units}$",
      "$72\\pi\\text{ cubic units}$",
      "$24\\pi\\text{ cubic units}$"
    ],
    "optionsAr": [
      "$36\\pi\\text{ وحدة مكعبة}$",
      "$18\\pi\\text{ وحدة مكعبة}$",
      "$72\\pi\\text{ وحدة مكعبة}$",
      "$24\\pi\\text{ وحدة مكعبة}$"
    ],
    "correctIndex": 0,
    "correctAnswer": "$36\\pi\\text{ cubic units}$",
    "hintEn": "Use the disk formula: $V = \\pi \\int_a^b y^2 dx$.",
    "hintAr": "طبق قانون الحجوم بالقرص: $V = \\pi \\int_a^b y^2 dx$.",
    "teacherTipEn": "Revolving a right triangle forms a cone of base radius $R = 6$ and height $H = 3$: $V = \\frac{1}{3}\\pi R^2 H = \\frac{1}{3}\\pi (36)(3) = 36\\pi$.",
    "teacherTipAr": "دوران هذا المثلث القائم يعطي مخروطاً قاعدته $R = 6$ وارتفاعه $H = 3$: $V = \\frac{1}{3}\\pi(36)(3) = 36\\pi$.",
    "stepByStepSolutionEn": [
      "Volume formula: $V = \\pi \\int_0^3 (2x)^2 dx = \\pi \\int_0^3 4x^2 dx$.",
      "Integrate: $\\pi \\left[ \\frac{4x^3}{3} \\right]_0^3 = \\pi \\cdot \\frac{4(27)}{3} = 36\\pi\\text{ cubic units}$."
    ],
    "stepByStepSolutionAr": [
      "قانون الحجم: $V = \\pi \\int_0^3 (2x)^2 dx = 4\\pi \\int_0^3 x^2 dx$.",
      "حساب التكامل: $4\\pi [x^3/3]_0^3 = 4\\pi(9) = 36\\pi\\text{ وحدة مكعبة}$."
    ]
  },
  {
    "id": "calc_ch4_db_easy_54",
    "titleEn": "Integration of Trigonometric Squared Function",
    "titleAr": "تكامل دالة القاطع المربعة",
    "difficulty": "easy",
    "questionEn": "Evaluate: $\\int (3\\sec^2(x) - 2\\sin(x)) \\, dx$.",
    "questionAr": "احسب: $\\int (3\\sec^2(x) - 2\\sin(x)) \\, dx$.",
    "optionsEn": [
      "$3\\tan(x) + 2\\cos(x) + C$",
      "$3\\tan(x) - 2\\cos(x) + C$",
      "$3\\sec(x)\\tan(x) + 2\\cos(x) + C$",
      "$\\tan(3x) + 2\\cos(x) + C$"
    ],
    "optionsAr": [
      "$3\\tan(x) + 2\\cos(x) + C$",
      "$3\\tan(x) - 2\\cos(x) + C$",
      "$3\\sec(x)\\tan(x) + 2\\cos(x) + C$",
      "$\\tan(3x) + 2\\cos(x) + C$"
    ],
    "correctIndex": 0,
    "correctAnswer": "$3\\tan(x) + 2\\cos(x) + C$",
    "hintEn": "Recall $\\int \\sec^2(x) dx = \\tan(x)$ and $\\int \\sin(x) dx = -\\cos(x)$.",
    "hintAr": "تذكر أن تكامل $\\sec^2(x)$ هو $\\tan(x)$ وتكامل $\\sin(x)$ هو $-\\cos(x)$.",
    "teacherTipEn": "Be careful with signs: $-\\int \\sin(x) dx = -(-\\cos(x)) = +\\cos(x)$.",
    "teacherTipAr": "انتبه للإشارات: تكامل $-\\sin(x)$ هو $+\\cos(x)$.",
    "stepByStepSolutionEn": [
      "Integrate term by term: $\\int 3\\sec^2(x) dx = 3\\tan(x)$.",
      "Integrate second term: $\\int -2\\sin(x) dx = 2\\cos(x)$.",
      "Combine: $3\\tan(x) + 2\\cos(x) + C$."
    ],
    "stepByStepSolutionAr": [
      "تكامل الحد الأول: $3\\tan(x)$.",
      "تكامل الحد الثاني: $2\\cos(x)$.",
      "الناتج النهائي: $3\\tan(x) + 2\\cos(x) + C$."
    ]
  },
  {
    "id": "calc_ch4_db_easy_55",
    "titleEn": "Integration by Simple Substitution",
    "titleAr": "تكامل بتعويض جبري مباشر",
    "difficulty": "easy",
    "questionEn": "Evaluate: $\\int 2x (x^2 + 5)^4 \\, dx$.",
    "questionAr": "احسب: $\\int 2x (x^2 + 5)^4 \\, dx$.",
    "optionsEn": [
      "$\\frac{1}{5}(x^2 + 5)^5 + C$",
      "$\\frac{1}{4}(x^2 + 5)^5 + C$",
      "$(x^2 + 5)^5 + C$",
      "$\\frac{2}{5}(x^2 + 5)^5 + C$"
    ],
    "optionsAr": [
      "$\\frac{1}{5}(x^2 + 5)^5 + C$",
      "$\\frac{1}{4}(x^2 + 5)^5 + C$",
      "$(x^2 + 5)^5 + C$",
      "$\\frac{2}{5}(x^2 + 5)^5 + C$"
    ],
    "correctIndex": 0,
    "correctAnswer": "$\\frac{1}{5}(x^2 + 5)^5 + C$",
    "hintEn": "Let $u = x^2 + 5$, so $du = 2x dx$.",
    "hintAr": "ضع $u = x^2 + 5$ فيكون $du = 2x dx$.",
    "teacherTipEn": "Recognize the chain rule in reverse: $\\int [f(x)]^n f'(x) dx = \\frac{[f(x)]^{n+1}}{n+1} + C$.",
    "teacherTipAr": "قاعدة الدالة ومشتقتها: $\\int [f(x)]^n f'(x) dx = \\frac{[f(x)]^{n+1}}{n+1} + C$.",
    "stepByStepSolutionEn": [
      "Substitute $u = x^2 + 5$, $du = 2x dx$.",
      "The integral becomes $\\int u^4 du = \\frac{u^5}{5} + C$.",
      "Substitute back: $\\frac{1}{5}(x^2 + 5)^5 + C$."
    ],
    "stepByStepSolutionAr": [
      "التعويض: $u = x^2 + 5$ و $du = 2x dx$.",
      "التكامل: $\\int u^4 du = \\frac{u^5}{5} + C$.",
      "التعويض بالدالة الأصلية: $\\frac{1}{5}(x^2 + 5)^5 + C$."
    ]
  },
  {
    "id": "calc_ch4_db_easy_56",
    "titleEn": "Definite Integral Additive Interval Property",
    "titleAr": "خاصية تجزئة فترات التكامل المحدد",
    "difficulty": "easy",
    "questionEn": "If $\\int_{1}^{4} f(x) \\, dx = 7$ and $\\int_{2}^{4} f(x) \\, dx = 3$, find $\\int_{1}^{2} f(x) \\, dx$.",
    "questionAr": "إذا كان $\\int_{1}^{4} f(x) \\, dx = 7$ و $\\int_{2}^{4} f(x) \\, dx = 3$، فأوجد $\\int_{1}^{2} f(x) \\, dx$.",
    "optionsEn": [
      "$4$",
      "$10$",
      "$-4$",
      "$2$"
    ],
    "optionsAr": [
      "$4$",
      "$10$",
      "$-4$",
      "$2$"
    ],
    "correctIndex": 0,
    "correctAnswer": "$4$",
    "hintEn": "Use interval addition: $\\int_{1}^{4} f(x) dx = \\int_{1}^{2} f(x) dx + \\int_{2}^{4} f(x) dx$.",
    "hintAr": "استخدم خاصية إضافة الفترات: $\\int_{1}^{4} f(x) dx = \\int_{1}^{2} f(x) dx + \\int_{2}^{4} f(x) dx$.",
    "teacherTipEn": "Keep interval endpoints aligned: $\\int_a^c = \\int_a^b + \\int_b^c$.",
    "teacherTipAr": "خاصية التجزئة تنص على أن $\\int_a^c = \\int_a^b + \\int_b^c$.",
    "stepByStepSolutionEn": [
      "Write relation: $\\int_{1}^{2} f(x) dx = \\int_{1}^{4} f(x) dx - \\int_{2}^{4} f(x) dx$.",
      "Substitute values: $7 - 3 = 4$."
    ],
    "stepByStepSolutionAr": [
      "كتابة العلاقة: $\\int_1^2 f(x) dx = \\int_1^4 f(x) dx - \\int_2^4 f(x) dx$.",
      "التعويض بالأرقام: $7 - 3 = 4$."
    ]
  },
  {
    "id": "calc_ch4_db_easy_57",
    "titleEn": "Integration of Exponential Reciprocal Power",
    "titleAr": "تكامل دالة أسية ذات أس نسبي",
    "difficulty": "easy",
    "questionEn": "Evaluate: $\\int \\frac{e^{\\sqrt{x}}}{\\sqrt{x}} \\, dx$.",
    "questionAr": "احسب: $\\int \\frac{e^{\\sqrt{x}}}{\\sqrt{x}} \\, dx$.",
    "optionsEn": [
      "$2 e^{\\sqrt{x}} + C$",
      "$\\frac{1}{2} e^{\\sqrt{x}} + C$",
      "$e^{\\sqrt{x}} + C$",
      "$2\\sqrt{x} e^{\\sqrt{x}} + C$"
    ],
    "optionsAr": [
      "$2 e^{\\sqrt{x}} + C$",
      "$\\frac{1}{2} e^{\\sqrt{x}} + C$",
      "$e^{\\sqrt{x}} + C$",
      "$2\\sqrt{x} e^{\\sqrt{x}} + C$"
    ],
    "correctIndex": 0,
    "correctAnswer": "$2 e^{\\sqrt{x}} + C$",
    "hintEn": "Substitute $u = \\sqrt{x}$, then $du = \\frac{dx}{2\\sqrt{x}} \\implies \\frac{dx}{\\sqrt{x}} = 2 du$.",
    "hintAr": "ضع $u = \\sqrt{x}$ فيكون $du = \\frac{dx}{2\\sqrt{x}}$.",
    "teacherTipEn": "Notice that $\\frac{1}{\\sqrt{x}}$ is twice the derivative of $\\sqrt{x}$.",
    "teacherTipAr": "لاحظ أن المقدار $\\frac{1}{\\sqrt{x}}$ هو ضعف مشتقة $\\sqrt{x}$.",
    "stepByStepSolutionEn": [
      "Let $u = \\sqrt{x}$, then $du = \\frac{1}{2\\sqrt{x}} dx \\implies \\frac{dx}{\\sqrt{x}} = 2 du$.",
      "Integral becomes: $\\int 2 e^u du = 2 e^u + C = 2 e^{\\sqrt{x}} + C$."
    ],
    "stepByStepSolutionAr": [
      "نفرض $u = \\sqrt{x}$ إذن $du = \\frac{1}{2\\sqrt{x}} dx$.",
      "التكامل: $\\int 2e^u du = 2e^u + C = 2e^{\\sqrt{x}} + C$."
    ]
  },
  {
    "id": "calc_ch4_db_easy_58",
    "titleEn": "Definite Integral of Absolute Value Function",
    "titleAr": "تكامل محدد لدالة القيمة المطلقة",
    "difficulty": "easy",
    "questionEn": "Evaluate the definite integral: $\\int_{-1}^{3} |x - 1| \\, dx$.",
    "questionAr": "احسب التكامل المحدد: $\\int_{-1}^{3} |x - 1| \\, dx$.",
    "optionsEn": [
      "$4$",
      "$2$",
      "$6$",
      "$8$"
    ],
    "optionsAr": [
      "$4$",
      "$2$",
      "$6$",
      "$8$"
    ],
    "correctIndex": 0,
    "correctAnswer": "$4$",
    "hintEn": "Split the integral at the zero of the absolute value, $x = 1$.",
    "hintAr": "جزئ التكامل عند صفر المقياس وهو $x = 1$.",
    "teacherTipEn": "Geometrically, this is the sum of areas of two right isosceles triangles: $\\frac{1}{2}(2)^2 + \\frac{1}{2}(2)^2 = 2 + 2 = 4$.",
    "teacherTipAr": "هندسياً، هذا التكامل يمثل مجموع مساحتي مثلثين قائمين متساويي الساقين: $\\frac{1}{2}(4) + \\frac{1}{2}(4) = 4$.",
    "stepByStepSolutionEn": [
      "Split integral: $\\int_{-1}^{1} -(x - 1) dx + \\int_{1}^{3} (x - 1) dx$.",
      "First part: $\\left[ -\\frac{x^2}{2} + x \\right]_{-1}^1 = \\left(-\\frac{1}{2} + 1\\right) - \\left(-\\frac{1}{2} - 1\\right) = \\frac{1}{2} - \\left(-\\frac{3}{2}\\right) = 2$.",
      "Second part: $\\left[ \\frac{x^2}{2} - x \\right]_1^3 = \\left(\\frac{9}{2} - 3\\right) - \\left(\\frac{1}{2} - 1\\right) = \\frac{3}{2} - \\left(-\\frac{1}{2}\\right) = 2$.",
      "Total: $2 + 2 = 4$."
    ],
    "stepByStepSolutionAr": [
      "تجزئة التكامل: $\\int_{-1}^1 (1 - x) dx + \\int_1^3 (x - 1) dx$.",
      "الجزء الأول: قيمته تساوي $2$.",
      "الجزء الثاني: قيمته تساوي $2$.",
      "المجموع الكلي: $2 + 2 = 4$."
    ]
  }
],
  medium: [
  {
    "id": "calc_ch4_db_med_51",
    "titleEn": "Area Between y = x^2 and y = x",
    "titleAr": "المساحة بين المنحنى ص = س² والمستقيم ص = س",
    "difficulty": "medium",
    "questionEn": "Find the area of the region enclosed between $y = x^2$ and $y = x$.",
    "questionAr": "أوجد مساحة المنطقة المحصورة بين المنحنى $y = x^2$ والمستقيم $y = x$.",
    "optionsEn": [
      "$\\frac{1}{6}$",
      "$\\frac{1}{3}$",
      "$\\frac{1}{2}$",
      "$\\frac{1}{12}$"
    ],
    "optionsAr": [
      "1/6",
      "1/3",
      "1/2",
      "1/12"
    ],
    "correctAnswer": "$\\frac{1}{6}$",
    "correctIndex": 0,
    "hintEn": "Intersection: x^2 = x => x = 0, 1. Area = int_0^1 (x - x^2)dx = 1/2 - 1/3 = 1/6.",
    "hintAr": "نقاط التقاطع س = 0 و 1. المساحة = [س²/2 - س³/3] من 0 إلى 1 = 1/6 وحدة مربعة.",
    "stepByStepSolutionEn": [
      "1. Find intersection points.",
      "2. Set up definite integral for area or volume."
    ],
    "stepByStepSolutionAr": [
      "١. إيجاد نقاط التقاطع وتحديد المنحنى الأعلى.",
      "٢. صياغة التكامل المحدد وحسابه بدقة."
    ],
    "teacherTipEn": "Standard Thanaweya Amma exam level question.",
    "teacherTipAr": "سؤال امتحانات الثانوية العامة المعتاد."
  },
  {
    "id": "calc_ch4_db_med_52",
    "titleEn": "Area Between y = x^2 and y = 2x",
    "titleAr": "المساحة بين المنحنى ص = س² والمستقيم ص = 2س",
    "difficulty": "medium",
    "questionEn": "Find the area enclosed between $y = x^2$ and $y = 2x$.",
    "questionAr": "أوجد مساحة المنطقة المحصورة بين $y = x^2$ و $y = 2x$.",
    "optionsEn": [
      "$\\frac{4}{3}$",
      "$\\frac{2}{3}$",
      "$2$",
      "$\\frac{8}{3}$"
    ],
    "optionsAr": [
      "4/3",
      "2/3",
      "2",
      "8/3"
    ],
    "correctAnswer": "$\\frac{4}{3}$",
    "correctIndex": 0,
    "hintEn": "x^2 = 2x => x = 0, 2. Area = int_0^2 (2x - x^2)dx = [x^2 - x^3/3]_0^2 = 4 - 8/3 = 4/3.",
    "hintAr": "المساحة = [س² - س³/3] من 0 إلى 2 = 4 - 8/3 = 4/3 وحدة مربعة.",
    "stepByStepSolutionEn": [
      "1. Find intersection points.",
      "2. Set up definite integral for area or volume."
    ],
    "stepByStepSolutionAr": [
      "١. إيجاد نقاط التقاطع وتحديد المنحنى الأعلى.",
      "٢. صياغة التكامل المحدد وحسابه بدقة."
    ],
    "teacherTipEn": "Standard Thanaweya Amma exam level question.",
    "teacherTipAr": "سؤال امتحانات الثانوية العامة المعتاد."
  },
  {
    "id": "calc_ch4_db_med_53",
    "titleEn": "Area Between Parabola and Line y = 4",
    "titleAr": "المساحة المحصورة بين ص = س² والمستقيم ص = 4",
    "difficulty": "medium",
    "questionEn": "Find the area of the region bounded by $y = x^2$ and the line $y = 4$.",
    "questionAr": "أوجد مساحة المنطقة المحصورة بين المنحنى $y = x^2$ والمستقيم $y = 4$.",
    "optionsEn": [
      "$\\frac{32}{3}$",
      "$16$",
      "$\\frac{16}{3}$",
      "$8$"
    ],
    "optionsAr": [
      "32/3",
      "16",
      "16/3",
      "8"
    ],
    "correctAnswer": "$\\frac{32}{3}$",
    "correctIndex": 0,
    "hintEn": "Intersection x = +- 2. Area = int_{-2}^2 (4 - x^2) dx = 32/3.",
    "hintAr": "نقاط التقاطع س = ± 2، والمساحة = 32/3.",
    "stepByStepSolutionEn": [
      "1. Find intersection points.",
      "2. Set up definite integral for area or volume."
    ],
    "stepByStepSolutionAr": [
      "١. إيجاد نقاط التقاطع وتحديد المنحنى الأعلى.",
      "٢. صياغة التكامل المحدد وحسابه بدقة."
    ],
    "teacherTipEn": "Standard Thanaweya Amma exam level question.",
    "teacherTipAr": "سؤال امتحانات الثانوية العامة المعتاد."
  },
  {
    "id": "calc_ch4_db_med_54",
    "titleEn": "Area Between Two Opposing Parabolas",
    "titleAr": "المساحة المحصورة بين قطعين مكافئين متقابلين",
    "difficulty": "medium",
    "questionEn": "Find the area enclosed between $y = x^2$ and $y = 4x - x^2$.",
    "questionAr": "أوجد مساحة المنطقة المحصورة بين المنحنيين $y = x^2$ و $y = 4x - x^2$.",
    "optionsEn": [
      "$\\frac{8}{3}$",
      "$\\frac{4}{3}$",
      "$\\frac{16}{3}$",
      "$4$"
    ],
    "optionsAr": [
      "8/3",
      "4/3",
      "16/3",
      "4"
    ],
    "correctAnswer": "$\\frac{8}{3}$",
    "correctIndex": 0,
    "hintEn": "x^2 = 4x - x^2 => 2x^2 - 4x = 0 => x = 0, 2. Area = int_0^2 (4x - 2x^2) dx = [2x^2 - 2x^3/3]_0^2 = 8 - 16/3 = 8/3.",
    "hintAr": "المساحة = [2س² - 2س³/3] من 0 إلى 2 = 8/3.",
    "stepByStepSolutionEn": [
      "1. Find intersection points.",
      "2. Set up definite integral for area or volume."
    ],
    "stepByStepSolutionAr": [
      "١. إيجاد نقاط التقاطع وتحديد المنحنى الأعلى.",
      "٢. صياغة التكامل المحدد وحسابه بدقة."
    ],
    "teacherTipEn": "Standard Thanaweya Amma exam level question.",
    "teacherTipAr": "سؤال امتحانات الثانوية العامة المعتاد."
  },
  {
    "id": "calc_ch4_db_med_55",
    "titleEn": "Area Between y = sqrt(x) and y = x^2",
    "titleAr": "المساحة المحصورة بين ص = جذر س وص = س²",
    "difficulty": "medium",
    "questionEn": "Find the area enclosed between $y = \\sqrt{x}$ and $y = x^2$.",
    "questionAr": "أوجد مساحة المنطقة المحصورة بين المنحنيين $y = \\sqrt{x}$ و $y = x^2$.",
    "optionsEn": [
      "$\\frac{1}{3}$",
      "$\\frac{2}{3}$",
      "$\\frac{1}{6}$",
      "$\\frac{1}{2}$"
    ],
    "optionsAr": [
      "1/3",
      "2/3",
      "1/6",
      "1/2"
    ],
    "correctAnswer": "$\\frac{1}{3}$",
    "correctIndex": 0,
    "hintEn": "Intersection x = 0, 1. Area = int_0^1 (sqrt(x) - x^2) dx = 2/3 - 1/3 = 1/3.",
    "hintAr": "المساحة = [2/3 س^(3/2) - س³/3] من 0 إلى 1 = 1/3.",
    "stepByStepSolutionEn": [
      "1. Find intersection points.",
      "2. Set up definite integral for area or volume."
    ],
    "stepByStepSolutionAr": [
      "١. إيجاد نقاط التقاطع وتحديد المنحنى الأعلى.",
      "٢. صياغة التكامل المحدد وحسابه بدقة."
    ],
    "teacherTipEn": "Standard Thanaweya Amma exam level question.",
    "teacherTipAr": "سؤال امتحانات الثانوية العامة المعتاد."
  },
  {
    "id": "calc_ch4_db_med_56",
    "titleEn": "Area Between Cubic and Linear Curve",
    "titleAr": "المساحة المحصورة بين المنحنى التكعيبي والمستقيم",
    "difficulty": "medium",
    "questionEn": "Find the total area of the regions enclosed between $y = x^3$ and $y = x$.",
    "questionAr": "أوجد المساحة الكلية للمنطقتين المحصورتين بين $y = x^3$ و $y = x$.",
    "optionsEn": [
      "$\\frac{1}{2}$",
      "$1$",
      "$\\frac{1}{4}$",
      "$\\frac{3}{4}$"
    ],
    "optionsAr": [
      "1/2",
      "1",
      "1/4",
      "3/4"
    ],
    "correctAnswer": "$\\frac{1}{2}$",
    "correctIndex": 0,
    "hintEn": "By symmetry: 2 * int_0^1 (x - x^3) dx = 2 * (1/2 - 1/4) = 2 * 1/4 = 1/2.",
    "hintAr": "بالتماثل: 2 × [س²/2 - س⁴/4] من 0 إلى 1 = 1/2.",
    "stepByStepSolutionEn": [
      "1. Find intersection points.",
      "2. Set up definite integral for area or volume."
    ],
    "stepByStepSolutionAr": [
      "١. إيجاد نقاط التقاطع وتحديد المنحنى الأعلى.",
      "٢. صياغة التكامل المحدد وحسابه بدقة."
    ],
    "teacherTipEn": "Standard Thanaweya Amma exam level question.",
    "teacherTipAr": "سؤال امتحانات الثانوية العامة المعتاد."
  },
  {
    "id": "calc_ch4_db_med_57",
    "titleEn": "Area Between Sine and Cosine Curves",
    "titleAr": "المساحة بين منحنى الجيب وجيب التمام",
    "difficulty": "medium",
    "questionEn": "Find the area of the region bounded by $y = \\sin x$ and $y = \\cos x$ from $x = 0$ to $x = \\frac{\\pi}{4}$.",
    "questionAr": "أوجد مساحة المنطقة المحصورة بين $y = \\sin x$ و $y = \\cos x$ من $x = 0$ إلى $x = \\frac{\\pi}{4}$.",
    "optionsEn": [
      "$\\sqrt{2} - 1$",
      "$1 - \\frac{\\sqrt{2}}{2}$",
      "$\\sqrt{2}$",
      "$\\frac{\\sqrt{2}}{2}$"
    ],
    "optionsAr": [
      "√2 - 1",
      "1 - √2 / 2",
      "√2",
      "√2 / 2"
    ],
    "correctAnswer": "$\\sqrt{2} - 1$",
    "correctIndex": 0,
    "hintEn": "int_0^{pi/4} (cos x - sin x) dx = [sin x + cos x]_0^{pi/4} = (sqrt(2)/2 + sqrt(2)/2) - (0 + 1) = sqrt(2) - 1.",
    "hintAr": "المساحة = [جا س + جتا س] من 0 إلى ط/4 = √2 - 1.",
    "stepByStepSolutionEn": [
      "1. Find intersection points.",
      "2. Set up definite integral for area or volume."
    ],
    "stepByStepSolutionAr": [
      "١. إيجاد نقاط التقاطع وتحديد المنحنى الأعلى.",
      "٢. صياغة التكامل المحدد وحسابه بدقة."
    ],
    "teacherTipEn": "Standard Thanaweya Amma exam level question.",
    "teacherTipAr": "سؤال امتحانات الثانوية العامة المعتاد."
  },
  {
    "id": "calc_ch4_db_med_58",
    "titleEn": "Area Between Parabola and Slanted Line",
    "titleAr": "المساحة بين قطع مكافئ ومستقيم مائل",
    "difficulty": "medium",
    "questionEn": "Find the area enclosed between $y = x^2 - 2x$ and $y = x$.",
    "questionAr": "أوجد مساحة المنطقة المحصورة بين المنحنى $y = x^2 - 2x$ والمستقيم $y = x$.",
    "optionsEn": [
      "$\\frac{9}{2}$",
      "$9$",
      "$\\frac{27}{6}$",
      "$\\frac{7}{2}$"
    ],
    "optionsAr": [
      "9/2",
      "9",
      "27/6",
      "7/2"
    ],
    "correctAnswer": "$\\frac{9}{2}$",
    "correctIndex": 0,
    "hintEn": "x^2 - 2x = x => x^2 - 3x = 0 => x = 0, 3. Area = int_0^3 (3x - x^2) dx = 27/2 - 9 = 9/2.",
    "hintAr": "المساحة = [3س²/2 - س³/3] من 0 إلى 3 = 9/2.",
    "stepByStepSolutionEn": [
      "1. Find intersection points.",
      "2. Set up definite integral for area or volume."
    ],
    "stepByStepSolutionAr": [
      "١. إيجاد نقاط التقاطع وتحديد المنحنى الأعلى.",
      "٢. صياغة التكامل المحدد وحسابه بدقة."
    ],
    "teacherTipEn": "Standard Thanaweya Amma exam level question.",
    "teacherTipAr": "سؤال امتحانات الثانوية العامة المعتاد."
  },
  {
    "id": "calc_ch4_db_med_59",
    "titleEn": "Area Integrating Along Y-Axis for Parabolas",
    "titleAr": "المساحة بين منحنى بالنسبة لمحور الصادات ومستقيم",
    "difficulty": "medium",
    "questionEn": "Find the area enclosed between $x = y^2$ and $x = y + 2$.",
    "questionAr": "أوجد مساحة المنطقة المحصورة بين المنحنى $x = y^2$ والمستقيم $x = y + 2$.",
    "optionsEn": [
      "$\\frac{9}{2}$",
      "$9$",
      "$\\frac{7}{2}$",
      "$\\frac{11}{2}$"
    ],
    "optionsAr": [
      "9/2",
      "9",
      "7/2",
      "11/2"
    ],
    "correctAnswer": "$\\frac{9}{2}$",
    "correctIndex": 0,
    "hintEn": "y^2 = y + 2 => y^2 - y - 2 = 0 => y = -1, 2. Area = int_{-1}^2 (y + 2 - y^2) dy = 9/2.",
    "hintAr": "بالتكامل بالنسبة لـ ص من -1 إلى 2 نجد المساحة = 9/2.",
    "stepByStepSolutionEn": [
      "1. Find intersection points.",
      "2. Set up definite integral for area or volume."
    ],
    "stepByStepSolutionAr": [
      "١. إيجاد نقاط التقاطع وتحديد المنحنى الأعلى.",
      "٢. صياغة التكامل المحدد وحسابه بدقة."
    ],
    "teacherTipEn": "Standard Thanaweya Amma exam level question.",
    "teacherTipAr": "سؤال امتحانات الثانوية العامة المعتاد."
  },
  {
    "id": "calc_ch4_db_med_60",
    "titleEn": "Area Bounded by Absolute Value and Constant Line",
    "titleAr": "المساحة المحصورة بين دالة المقياس ومستقيم أفقي",
    "difficulty": "medium",
    "questionEn": "Find the area of the region enclosed between $y = |x|$ and $y = 3$.",
    "questionAr": "أوجد مساحة المنطقة المحصورة بين $y = |x|$ والمستقيم $y = 3$.",
    "optionsEn": [
      "$9$",
      "$6$",
      "$18$",
      "$12$"
    ],
    "optionsAr": [
      "9",
      "6",
      "18",
      "12"
    ],
    "correctAnswer": "$9$",
    "correctIndex": 0,
    "hintEn": "Triangle with base 6 and height 3: Area = (1/2)(6)(3) = 9.",
    "hintAr": "مثلث متساوي الساقين قاعدته 6 وارتفاعه 3 ومساحته 9.",
    "stepByStepSolutionEn": [
      "1. Find intersection points.",
      "2. Set up definite integral for area or volume."
    ],
    "stepByStepSolutionAr": [
      "١. إيجاد نقاط التقاطع وتحديد المنحنى الأعلى.",
      "٢. صياغة التكامل المحدد وحسابه بدقة."
    ],
    "teacherTipEn": "Standard Thanaweya Amma exam level question.",
    "teacherTipAr": "سؤال امتحانات الثانوية العامة المعتاد."
  },
  {
    "id": "calc_ch4_db_med_61",
    "titleEn": "Washer Volume Revolving Between y = x and y = x^2 About X-Axis",
    "titleAr": "حجم مجسم الدوران بين ص = س وص = س² حول محور السينات",
    "difficulty": "medium",
    "questionEn": "Find the volume generated by revolving the region between $y = x$ and $y = x^2$ about the x-axis.",
    "questionAr": "أوجد حجم الجسم الناشئ من دوران المنطقة المحصورة بين $y = x$ و $y = x^2$ حول محور السينات.",
    "optionsEn": [
      "$\\frac{2\\pi}{15}$",
      "$\\frac{\\pi}{15}$",
      "$\\frac{4\\pi}{15}$",
      "$\\frac{\\pi}{6}$"
    ],
    "optionsAr": [
      "2ط / 15",
      "ط / 15",
      "4ط / 15",
      "ط / 6"
    ],
    "correctAnswer": "$\\frac{2\\pi}{15}$",
    "correctIndex": 0,
    "hintEn": "V = pi int_0^1 (x^2 - x^4) dx = pi [x^3/3 - x^5/5]_0^1 = pi (1/3 - 1/5) = 2pi/15.",
    "hintAr": "طريقة الحلقات (الواشر): ط × (1/3 - 1/5) = 2ط/15.",
    "stepByStepSolutionEn": [
      "1. Find intersection points.",
      "2. Set up definite integral for area or volume."
    ],
    "stepByStepSolutionAr": [
      "١. إيجاد نقاط التقاطع وتحديد المنحنى الأعلى.",
      "٢. صياغة التكامل المحدد وحسابه بدقة."
    ],
    "teacherTipEn": "Standard Thanaweya Amma exam level question.",
    "teacherTipAr": "سؤال امتحانات الثانوية العامة المعتاد."
  },
  {
    "id": "calc_ch4_db_med_62",
    "titleEn": "Washer Volume Revolving Between y = 2x and y = x^2 About X-Axis",
    "titleAr": "حجم الدوران بين ص = 2س وص = س² حول محور السينات",
    "difficulty": "medium",
    "questionEn": "Find the volume generated by revolving the region between $y = 2x$ and $y = x^2$ about the x-axis.",
    "questionAr": "أوجد حجم الجسم الناشئ من دوران المنطقة بين $y = 2x$ و $y = x^2$ حول محور السينات.",
    "optionsEn": [
      "$\\frac{64\\pi}{15}$",
      "$\\frac{32\\pi}{15}$",
      "$\\frac{16\\pi}{5}$",
      "$\\frac{64\\pi}{5}$"
    ],
    "optionsAr": [
      "64ط / 15",
      "32ط / 15",
      "16ط / 5",
      "64ط / 5"
    ],
    "correctAnswer": "$\\frac{64\\pi}{15}$",
    "correctIndex": 0,
    "hintEn": "V = pi int_0^2 (4x^2 - x^4) dx = pi [4x^3/3 - x^5/5]_0^2 = pi (32/3 - 32/5) = 64pi/15.",
    "hintAr": "الحجم = ط × (32/3 - 32/5) = 64ط/15.",
    "stepByStepSolutionEn": [
      "1. Find intersection points.",
      "2. Set up definite integral for area or volume."
    ],
    "stepByStepSolutionAr": [
      "١. إيجاد نقاط التقاطع وتحديد المنحنى الأعلى.",
      "٢. صياغة التكامل المحدد وحسابه بدقة."
    ],
    "teacherTipEn": "Standard Thanaweya Amma exam level question.",
    "teacherTipAr": "سؤال امتحانات الثانوية العامة المعتاد."
  },
  {
    "id": "calc_ch4_db_med_63",
    "titleEn": "Washer Volume Revolving Between sqrt(x) and x^2",
    "titleAr": "حجم الدوران بين جذر س وس² حول محور السينات",
    "difficulty": "medium",
    "questionEn": "Find the volume generated by revolving the region between $y = \\sqrt{x}$ and $y = x^2$ about the x-axis.",
    "questionAr": "أوجد حجم الجسم المتولد من دوران المنطقة بين $y = \\sqrt{x}$ و $y = x^2$ حول محور السينات.",
    "optionsEn": [
      "$\\frac{3\\pi}{10}$",
      "$\\frac{\\pi}{5}$",
      "$\\frac{3\\pi}{5}$",
      "$\\frac{\\pi}{10}$"
    ],
    "optionsAr": [
      "3ط / 10",
      "ط / 5",
      "3ط / 5",
      "ط / 10"
    ],
    "correctAnswer": "$\\frac{3\\pi}{10}$",
    "correctIndex": 0,
    "hintEn": "V = pi int_0^1 (x - x^4) dx = pi [x^2/2 - x^5/5]_0^1 = pi (1/2 - 1/5) = 3pi/10.",
    "hintAr": "الحجم = ط × (1/2 - 1/5) = 3ط/10.",
    "stepByStepSolutionEn": [
      "1. Find intersection points.",
      "2. Set up definite integral for area or volume."
    ],
    "stepByStepSolutionAr": [
      "١. إيجاد نقاط التقاطع وتحديد المنحنى الأعلى.",
      "٢. صياغة التكامل المحدد وحسابه بدقة."
    ],
    "teacherTipEn": "Standard Thanaweya Amma exam level question.",
    "teacherTipAr": "سؤال امتحانات الثانوية العامة المعتاد."
  },
  {
    "id": "calc_ch4_db_med_64",
    "titleEn": "Volume Revolving Region between y = x and y = x^2 About Y-Axis",
    "titleAr": "حجم دوران المنطقة بين ص = س وص = س² حول محور الصادات",
    "difficulty": "medium",
    "questionEn": "Find the volume generated by revolving the region between $y = x$ and $y = x^2$ about the y-axis.",
    "questionAr": "أوجد حجم الجسم المتولد من دوران المنطقة بين $y = x$ و $y = x^2$ حول محور الصادات.",
    "optionsEn": [
      "$\\frac{\\pi}{6}$",
      "$\\frac{\\pi}{3}$",
      "$\\frac{2\\pi}{15}$",
      "$\\frac{\\pi}{12}$"
    ],
    "optionsAr": [
      "ط / 6",
      "ط / 3",
      "2ط / 15",
      "ط / 12"
    ],
    "correctAnswer": "$\\frac{\\pi}{6}$",
    "correctIndex": 0,
    "hintEn": "x_outer = sqrt(y), x_inner = y. V = pi int_0^1 (y - y^2) dy = pi (1/2 - 1/3) = pi/6.",
    "hintAr": "الحجم حول محور الصادات = ط × تكامل (ص - ص²) د ص = ط/6.",
    "stepByStepSolutionEn": [
      "1. Find intersection points.",
      "2. Set up definite integral for area or volume."
    ],
    "stepByStepSolutionAr": [
      "١. إيجاد نقاط التقاطع وتحديد المنحنى الأعلى.",
      "٢. صياغة التكامل المحدد وحسابه بدقة."
    ],
    "teacherTipEn": "Standard Thanaweya Amma exam level question.",
    "teacherTipAr": "سؤال امتحانات الثانوية العامة المعتاد."
  },
  {
    "id": "calc_ch4_db_med_65",
    "titleEn": "Definite Integral with Scaled Argument",
    "titleAr": "تكامل محدد بتغيير المعامل داخل الدالة",
    "difficulty": "medium",
    "questionEn": "If $\\int_0^6 f(x) dx = 12$, find $\\int_0^2 f(3x) dx$.",
    "questionAr": "إذا كان $\\int_0^6 f(x) dx = 12$، فأوجد قيمة $\\int_0^2 f(3x) dx$.",
    "optionsEn": [
      "$4$",
      "$36$",
      "$12$",
      "$6$"
    ],
    "optionsAr": [
      "4",
      "36",
      "12",
      "6"
    ],
    "correctAnswer": "$4$",
    "correctIndex": 0,
    "hintEn": "Let u = 3x, du = 3dx => (1/3) int_0^6 f(u) du = 12 / 3 = 4.",
    "hintAr": "بالتعويض ع = 3س، يكون الناتج = 12 / 3 = 4.",
    "stepByStepSolutionEn": [
      "1. Find intersection points.",
      "2. Set up definite integral for area or volume."
    ],
    "stepByStepSolutionAr": [
      "١. إيجاد نقاط التقاطع وتحديد المنحنى الأعلى.",
      "٢. صياغة التكامل المحدد وحسابه بدقة."
    ],
    "teacherTipEn": "Standard Thanaweya Amma exam level question.",
    "teacherTipAr": "سؤال امتحانات الثانوية العامة المعتاد."
  },
  {
    "id": "calc_ch4_db_med_66",
    "titleEn": "Linear Transformation of Limits",
    "titleAr": "تحويل خطي لحدود التكامل المحدد",
    "difficulty": "medium",
    "questionEn": "If $\\int_1^4 f(x) dx = 10$, find $\\int_0^3 f(x + 1) dx$.",
    "questionAr": "إذا كان $\\int_1^4 f(x) dx = 10$، فأوجد $\\int_0^3 f(x + 1) dx$.",
    "optionsEn": [
      "$10$",
      "$9$",
      "$11$",
      "$20$"
    ],
    "optionsAr": [
      "10",
      "9",
      "11",
      "20"
    ],
    "correctAnswer": "$10$",
    "correctIndex": 0,
    "hintEn": "Let u = x + 1. When x goes from 0 to 3, u goes from 1 to 4 => identical value 10.",
    "hintAr": "بوضع ع = س + 1 تتغير الحدود من 1 إلى 4 وتظل القيمة متطابقة 10.",
    "stepByStepSolutionEn": [
      "1. Find intersection points.",
      "2. Set up definite integral for area or volume."
    ],
    "stepByStepSolutionAr": [
      "١. إيجاد نقاط التقاطع وتحديد المنحنى الأعلى.",
      "٢. صياغة التكامل المحدد وحسابه بدقة."
    ],
    "teacherTipEn": "Standard Thanaweya Amma exam level question.",
    "teacherTipAr": "سؤال امتحانات الثانوية العامة المعتاد."
  },
  {
    "id": "calc_ch4_db_med_67",
    "titleEn": "Integral with King's Property Transformation",
    "titleAr": "خاصية جمع الحدود وطرح المتغير",
    "difficulty": "medium",
    "questionEn": "Evaluate $\\int_0^{\\pi/2} \\frac{\\sin x}{\\sin x + \\cos x} dx$.",
    "questionAr": "احسب قيمة التكامل $\\int_0^{\\pi/2} \\frac{\\sin x}{\\sin x + \\cos x} dx$.",
    "optionsEn": [
      "$\\frac{\\pi}{4}$",
      "$\\frac{\\pi}{2}$",
      "$1$",
      "$0$"
    ],
    "optionsAr": [
      "ط / 4",
      "ط / 2",
      "1",
      "0"
    ],
    "correctAnswer": "$\\frac{\\pi}{4}$",
    "correctIndex": 0,
    "hintEn": "Using int_0^a f(x)dx = int_0^a f(a-x)dx: 2I = int_0^{pi/2} 1 dx = pi/2 => I = pi/4.",
    "hintAr": "باستخدام خاصية التكامل: 2ت = ط/2 إذن ت = ط/4.",
    "stepByStepSolutionEn": [
      "1. Find intersection points.",
      "2. Set up definite integral for area or volume."
    ],
    "stepByStepSolutionAr": [
      "١. إيجاد نقاط التقاطع وتحديد المنحنى الأعلى.",
      "٢. صياغة التكامل المحدد وحسابه بدقة."
    ],
    "teacherTipEn": "Standard Thanaweya Amma exam level question.",
    "teacherTipAr": "سؤال امتحانات الثانوية العامة المعتاد."
  },
  {
    "id": "calc_ch4_db_med_68",
    "titleEn": "Integration by Parts on Definite Integral with Exponential",
    "titleAr": "تكامل بالتجزيء لتكامل محدد مع دالة أسية",
    "difficulty": "medium",
    "questionEn": "Evaluate the definite integral $\\int_0^1 x e^{2x} \\, dx$.",
    "questionAr": "احسب قيمة التكامل المحدد $\\int_0^1 x e^{2x} \\, dx$.",
    "optionsEn": [
      "$\\frac{e^2 + 1}{4}$",
      "$\\frac{e^2 - 1}{4}$",
      "$\\frac{e^2 + 1}{2}$",
      "$\\frac{e^2}{4}$"
    ],
    "optionsAr": [
      "(هـ² + 1) / 4",
      "(هـ² - 1) / 4",
      "(هـ² + 1) / 2",
      "هـ² / 4"
    ],
    "correctAnswer": "$\\frac{e^2 + 1}{4}$",
    "correctIndex": 0,
    "hintEn": "Use integration by parts with u = x, dv = e^(2x) dx to get [(x/2 - 1/4)e^(2x)]_0^1.",
    "hintAr": "استخدم التكامل بالتجزيء مع ع = س، دص = هـ^(2س) د س للوصول إلى [(س/2 - 1/4)هـ^(2س)] من 0 إلى 1.",
    "stepByStepSolutionEn": [
      "1. Let $u = x \\implies du = dx$, and $dv = e^{2x}dx \\implies v = \\frac{1}{2}e^{2x}$.",
      "2. $\\int x e^{2x}dx = \\frac{x}{2}e^{2x} - \\frac{1}{2}\\int e^{2x}dx = \\left(\\frac{x}{2} - \\frac{1}{4}\\right)e^{2x}$.",
      "3. Evaluate from $0$ to $1$: at $x=1$, $\\left(\\frac{1}{2} - \\frac{1}{4}\\right)e^2 = \\frac{e^2}{4}$; at $x=0$, $\\left(0 - \\frac{1}{4}\\right)e^0 = -\\frac{1}{4}$.",
      "4. Difference: $\\frac{e^2}{4} - \\left(-\\frac{1}{4}\\right) = \\frac{e^2 + 1}{4}$."
    ],
    "stepByStepSolutionAr": [
      "١. نفرض $u = x \\implies du = dx$، و $dv = e^{2x}dx \\implies v = \\frac{1}{2}e^{2x}$.",
      "٢. بالتجزيء: التكامل غير المحدد هو $\\left(\\frac{x}{2} - \\frac{1}{4}\\right)e^{2x}$.",
      "٣. التعويض بالحدود: عند $x=1$ نحصل على $\\frac{e^2}{4}$، وعند $x=0$ نحصل على $-\\frac{1}{4}$.",
      "٤. الناتج النهائي: $\\frac{e^2}{4} - \\left(-\\frac{1}{4}\\right) = \\frac{e^2 + 1}{4}$."
    ],
    "teacherTipEn": "Do not forget to evaluate the lower limit when it is 0, since e^0 = 1 is non-zero.",
    "teacherTipAr": "لا تنس التعويض بالحد السفلي عند الصفر، لأن هـ^0 = 1 قيمة غير صفرية."
  },
  {
    "id": "calc_ch4_db_med_69",
    "titleEn": "Definite Integral of x^2 ln(x)",
    "titleAr": "تكامل محدد لحاصل ضرب س² في لوغاريتم س",
    "difficulty": "medium",
    "questionEn": "Evaluate the definite integral $\\int_1^e x^2 \\ln x \\, dx$.",
    "questionAr": "احسب قيمة التكامل المحدد $\\int_1^e x^2 \\ln x \\, dx$.",
    "optionsEn": [
      "$\\frac{2e^3 + 1}{9}$",
      "$\\frac{2e^3 - 1}{9}$",
      "$\\frac{e^3 + 1}{9}$",
      "$\\frac{e^3}{3}$"
    ],
    "optionsAr": [
      "(2هـ³ + 1) / 9",
      "(2هـ³ - 1) / 9",
      "(هـ³ + 1) / 9",
      "هـ³ / 3"
    ],
    "correctAnswer": "$\\frac{2e^3 + 1}{9}$",
    "correctIndex": 0,
    "hintEn": "Integration by parts: u = ln x, dv = x^2 dx gives [(x^3/3)ln x - x^3/9]_1^e.",
    "hintAr": "بالتكامل بالتجزيء: ع = لو هـ س، دص = س² د س ينتج [(س³/3)لو س - س³/9] من 1 إلى هـ.",
    "stepByStepSolutionEn": [
      "1. Let $u = \\ln x \\implies du = \\frac{1}{x}dx$, and $dv = x^2 dx \\implies v = \\frac{x^3}{3}$.",
      "2. $\\int x^2 \\ln x \\, dx = \\frac{x^3}{3}\\ln x - \\int \\frac{x^2}{3} dx = \\frac{x^3}{3}\\ln x - \\frac{x^3}{9}$.",
      "3. Upper limit $x = e$: $\\frac{e^3}{3}(1) - \\frac{e^3}{9} = \\frac{2e^3}{9}$.",
      "4. Lower limit $x = 1$: $0 - \\frac{1}{9} = -\\frac{1}{9}$.",
      "5. Value: $\\frac{2e^3}{9} - \\left(-\\frac{1}{9}\\right) = \\frac{2e^3 + 1}{9}$."
    ],
    "stepByStepSolutionAr": [
      "١. نضع $u = \\ln x \\implies du = \\frac{1}{x}dx$، و $dv = x^2 dx \\implies v = \\frac{x^3}{3}$.",
      "٢. بالصيغة: $\\frac{x^3}{3}\\ln x - \\int \\frac{x^2}{3}dx = \\frac{x^3}{3}\\ln x - \\frac{x^3}{9}$.",
      "٣. عند الحد العلوي $x=e$: $\\frac{e^3}{3} - \\frac{e^3}{9} = \\frac{2e^3}{9}$.",
      "٤. عند الحد السفلي $x=1$: $0 - \\frac{1}{9} = -\\frac{1}{9}$.",
      "٥. القيمة النهائية: $\\frac{2e^3}{9} - \\left(-\\frac{1}{9}\\right) = \\frac{2e^3 + 1}{9}$."
    ],
    "teacherTipEn": "In integration by parts involving logarithmic functions, always pick u = ln(x) since differentiating ln(x) eliminates the logarithm.",
    "teacherTipAr": "في التكامل بالتجزيء الحاوي على لوغاريتم، اختر دائماً ع = لو(س) لأن اشتقاقها يحولها إلى دالة جبرية بسيطة."
  },
  {
    "id": "calc_ch4_db_med_70",
    "titleEn": "Average Value of Sqrt(x)",
    "titleAr": "القيمة المتوسطة لدالة الجذر التربيعي",
    "difficulty": "medium",
    "questionEn": "Find the average value of $f(x) = \\sqrt{x}$ on $[0, 4]$.",
    "questionAr": "أوجد القيمة المتوسطة للدالة $f(x) = \\sqrt{x}$ على الفترة $[0, 4]$.",
    "optionsEn": [
      "$\\frac{4}{3}$",
      "$2$",
      "$\\frac{8}{3}$",
      "$1$"
    ],
    "optionsAr": [
      "4/3",
      "2",
      "8/3",
      "1"
    ],
    "correctAnswer": "$\\frac{4}{3}$",
    "correctIndex": 0,
    "hintEn": "f_avg = (1/4) int_0^4 sqrt(x) dx = (1/4)(16/3) = 4/3.",
    "hintAr": "القيمة المتوسطة = (1/4) × (16/3) = 4/3.",
    "stepByStepSolutionEn": [
      "1. Find intersection points.",
      "2. Set up definite integral for area or volume."
    ],
    "stepByStepSolutionAr": [
      "١. إيجاد نقاط التقاطع وتحديد المنحنى الأعلى.",
      "٢. صياغة التكامل المحدد وحسابه بدقة."
    ],
    "teacherTipEn": "Standard Thanaweya Amma exam level question.",
    "teacherTipAr": "سؤال امتحانات الثانوية العامة المعتاد."
  },
  {
    "id": "calc_ch4_db_med_71",
    "titleEn": "Integral of Derivative over Quadratic",
    "titleAr": "تكامل دالة كسرية بسطها مشتقة مقامها المحدد",
    "difficulty": "medium",
    "questionEn": "Evaluate $\\int_0^1 \\frac{2x}{x^2 + 1} dx$.",
    "questionAr": "احسب قيمة $\\int_0^1 \\frac{2x}{x^2 + 1} dx$.",
    "optionsEn": [
      "$\\ln 2$",
      "$\\ln 3$",
      "$1$",
      "$\\frac{1}{2}\\ln 2$"
    ],
    "optionsAr": [
      "لو_هـ 2",
      "لو_هـ 3",
      "1",
      "(1/2)لو_هـ 2"
    ],
    "correctAnswer": "$\\ln 2$",
    "correctIndex": 0,
    "hintEn": "[ln(x^2 + 1)]_0^1 = ln 2 - ln 1 = ln 2.",
    "hintAr": "[لو_هـ(س² + 1)] من 0 إلى 1 = لو_هـ 2.",
    "stepByStepSolutionEn": [
      "1. Find intersection points.",
      "2. Set up definite integral for area or volume."
    ],
    "stepByStepSolutionAr": [
      "١. إيجاد نقاط التقاطع وتحديد المنحنى الأعلى.",
      "٢. صياغة التكامل المحدد وحسابه بدقة."
    ],
    "teacherTipEn": "Standard Thanaweya Amma exam level question.",
    "teacherTipAr": "سؤال امتحانات الثانوية العامة المعتاد."
  },
  {
    "id": "calc_ch4_db_med_72",
    "titleEn": "Definite Integral with Partial Fractions",
    "titleAr": "تكامل محدد باستخدام الكسور الجزئية",
    "difficulty": "medium",
    "questionEn": "Evaluate $\\int_2^3 \\frac{1}{x^2 - 1} dx$.",
    "questionAr": "احسب قيمة التكامل $\\int_2^3 \\frac{1}{x^2 - 1} dx$.",
    "optionsEn": [
      "$\\frac{1}{2}\\ln\\left(\\frac{3}{2}\\right)$",
      "$\\ln 2$",
      "$\\frac{1}{2}\\ln 2$",
      "$\\ln 3$"
    ],
    "optionsAr": [
      "(1/2)لو_هـ(3/2)",
      "لو_هـ 2",
      "(1/2)لو_هـ 2",
      "لو_هـ 3"
    ],
    "correctAnswer": "$\\frac{1}{2}\\ln\\left(\\frac{3}{2}\\right)$",
    "correctIndex": 0,
    "hintEn": "(1/2) [ln|(x-1)/(x+1)|]_2^3 = (1/2) [ln(2/4) - ln(1/3)] = (1/2) ln(6/4) = (1/2)ln(3/2).",
    "hintAr": "بالكسور الجزئية: (1/2) [لو_هـ|(س-1)/(س+1)|] = (1/2) لو_هـ(3/2).",
    "stepByStepSolutionEn": [
      "1. Find intersection points.",
      "2. Set up definite integral for area or volume."
    ],
    "stepByStepSolutionAr": [
      "١. إيجاد نقاط التقاطع وتحديد المنحنى الأعلى.",
      "٢. صياغة التكامل المحدد وحسابه بدقة."
    ],
    "teacherTipEn": "Standard Thanaweya Amma exam level question.",
    "teacherTipAr": "سؤال امتحانات الثانوية العامة المعتاد."
  },
  {
    "id": "calc_ch4_db_med_73",
    "titleEn": "Area Enclosed by Closed Ellipse",
    "titleAr": "مساحة القطع الناقص بالتكامل",
    "difficulty": "medium",
    "questionEn": "Find the total area enclosed by the ellipse $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ with $a = 4, b = 3$.",
    "questionAr": "أوجد المساحة الكلية لسطح القطع الناقص $\\frac{x^2}{16} + \\frac{y^2}{9} = 1$.",
    "optionsEn": [
      "$12\\pi$",
      "$24\\pi$",
      "$25\\pi$",
      "$7\\pi$"
    ],
    "optionsAr": [
      "12ط",
      "24ط",
      "25ط",
      "7ط"
    ],
    "correctAnswer": "$12\\pi$",
    "correctIndex": 0,
    "hintEn": "Area of ellipse is pi * a * b = pi * 4 * 3 = 12pi.",
    "hintAr": "مساحة القطع الناقص بالتكامل = ط × أ × ب = 12ط وحدة مربعة.",
    "stepByStepSolutionEn": [
      "1. Find intersection points.",
      "2. Set up definite integral for area or volume."
    ],
    "stepByStepSolutionAr": [
      "١. إيجاد نقاط التقاطع وتحديد المنحنى الأعلى.",
      "٢. صياغة التكامل المحدد وحسابه بدقة."
    ],
    "teacherTipEn": "Standard Thanaweya Amma exam level question.",
    "teacherTipAr": "سؤال امتحانات الثانوية العامة المعتاد."
  },
  {
    "id": "calc_ch4_db_med_74",
    "titleEn": "Volume of Ellipsoid",
    "titleAr": "حجم المجسم الإهليلجي المتولد من دوران قطع ناقص",
    "difficulty": "medium",
    "questionEn": "The volume generated by revolving the ellipse $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ with $a = 3, b = 2$ about the x-axis is:",
    "questionAr": "حجم المجسم الإهليلجي المتولد من دوران القطع الناقص $\\frac{x^2}{9} + \\frac{y^2}{4} = 1$ حول محور السينات هو:",
    "optionsEn": [
      "$16\\pi$",
      "$12\\pi$",
      "$24\\pi$",
      "$8\\pi$"
    ],
    "optionsAr": [
      "16ط",
      "12ط",
      "24ط",
      "8ط"
    ],
    "correctAnswer": "$16\\pi$",
    "correctIndex": 0,
    "hintEn": "V = (4/3) pi a b^2 = (4/3) pi (3)(4) = 16pi.",
    "hintAr": "الحجم = 4/3 ط أ ب² = 4/3 ط (3)(4) = 16ط.",
    "stepByStepSolutionEn": [
      "1. Find intersection points.",
      "2. Set up definite integral for area or volume."
    ],
    "stepByStepSolutionAr": [
      "١. إيجاد نقاط التقاطع وتحديد المنحنى الأعلى.",
      "٢. صياغة التكامل المحدد وحسابه بدقة."
    ],
    "teacherTipEn": "Standard Thanaweya Amma exam level question.",
    "teacherTipAr": "سؤال امتحانات الثانوية العامة المعتاد."
  },
  {
    "id": "calc_ch4_db_med_75",
    "titleEn": "Area of Loop of Nodal Cubic Curve",
    "titleAr": "مساحة عروة منحنى تكعيبي",
    "difficulty": "medium",
    "questionEn": "The area enclosed by the loop of $y^2 = x^2(1 - x)$ for $x \\in [0, 1]$ is:",
    "questionAr": "مساحة المنطقة المحددة بالعروة المغلقة للمنحنى $y^2 = x^2(1 - x)$ حيث $x \\in [0, 1]$ هي:",
    "optionsEn": [
      "$\\frac{8}{15}$",
      "$\\frac{4}{15}$",
      "$\\frac{2}{15}$",
      "$\\frac{1}{3}$"
    ],
    "optionsAr": [
      "8/15",
      "4/15",
      "2/15",
      "1/3"
    ],
    "correctAnswer": "$\\frac{8}{15}$",
    "correctIndex": 0,
    "hintEn": "Area = 2 int_0^1 x sqrt(1-x) dx = 2(4/15) = 8/15.",
    "hintAr": "المساحة = 2 × تكامل س√(1-س) د س = 8/15.",
    "stepByStepSolutionEn": [
      "1. Find intersection points.",
      "2. Set up definite integral for area or volume."
    ],
    "stepByStepSolutionAr": [
      "١. إيجاد نقاط التقاطع وتحديد المنحنى الأعلى.",
      "٢. صياغة التكامل المحدد وحسابه بدقة."
    ],
    "teacherTipEn": "Standard Thanaweya Amma exam level question.",
    "teacherTipAr": "سؤال امتحانات الثانوية العامة المعتاد."
  },
  {
    "id": "calc_ch4_db_med_76",
    "titleEn": "Integration by Parts of x Cosine x",
    "titleAr": "تكامل بالتجزيء لحاصل ضرب س في جتا س",
    "difficulty": "medium",
    "questionEn": "Find the indefinite integral: $\\int x \\cos x \\, dx$.",
    "questionAr": "احسب التكامل غير المحدد: $\\int x \\cos x \\, dx$.",
    "optionsEn": [
      "$x \\sin x + \\cos x + C$",
      "$x \\sin x - \\cos x + C$",
      "$-x \\sin x + \\cos x + C$",
      "$\\frac{x^2}{2} \\sin x + C$"
    ],
    "optionsAr": [
      "س جا س + جتا س + ث",
      "س جا س - جتا س + ث",
      "-س جا س + جتا س + ث",
      "0.5 س² جا س + ث"
    ],
    "correctAnswer": "$x \\sin x + \\cos x + C$",
    "correctIndex": 0,
    "hintEn": "Use integration by parts: $\\int u dv = u v - \\int v du$ with $u = x$ and $dv = \\cos x dx$.",
    "hintAr": "استخدم التكامل بالتجزيء: ص = س و د ع = جتا س د س.",
    "stepByStepSolutionEn": [
      "1. Let $u = x \\implies du = dx$.",
      "2. Let $dv = \\cos x dx \\implies v = \\sin x$.",
      "3. Applying formula: $\\int x \\cos x dx = x \\sin x - \\int \\sin x dx$.",
      "4. Since $\\int \\sin x dx = -\\cos x$, we get $x \\sin x - (-\\cos x) + C = x \\sin x + \\cos x + C$."
    ],
    "stepByStepSolutionAr": [
      "١. نفرض ص = س، فيكون د ص = د س.",
      "٢. نفرض د ع = جتا س د س، فيكون ع = جا س.",
      "٣. قانون التجزيء: تكامل س جتا س د س = س جا س - تكامل جا س د س.",
      "٤. تكامل جا س هو -جتا س، إذن الناتج = س جا س + جتا س + ث."
    ],
    "teacherTipEn": "LIATE rule: Algebraic (x) comes before Trigonometric (cos x).",
    "teacherTipAr": "قاعدة أسبقية التجزيء: الحدود الجبرية تسبق الدوال المثلثية في اختيار ص."
  },
  {
    "id": "calc_ch4_db_med_77",
    "titleEn": "Integration by Parts of x Sine 2x",
    "titleAr": "تكامل بالتجزيء لحاصل ضرب س في جا 2س",
    "difficulty": "medium",
    "questionEn": "Find the indefinite integral: $\\int x \\sin 2x \\, dx$.",
    "questionAr": "احسب التكامل غير المحدد: $\\int x \\sin 2x \\, dx$.",
    "optionsEn": [
      "$-\\frac{x}{2}\\cos 2x + \\frac{1}{4}\\sin 2x + C$",
      "$\\frac{x}{2}\\cos 2x - \\frac{1}{4}\\sin 2x + C$",
      "$-\\frac{x}{2}\\cos 2x - \\frac{1}{4}\\sin 2x + C$",
      "$-x \\cos 2x + \\sin 2x + C$"
    ],
    "optionsAr": [
      "-0.5 س جتا 2س + 0.25 جا 2س + ث",
      "0.5 س جتا 2س - 0.25 جا 2س + ث",
      "-0.5 س جتا 2س - 0.25 جا 2س + ث",
      "-س جتا 2س + جا 2س + ث"
    ],
    "correctAnswer": "$-\\frac{x}{2}\\cos 2x + \\frac{1}{4}\\sin 2x + C$",
    "correctIndex": 0,
    "hintEn": "Set $u = x$ and $dv = \\sin 2x dx \\implies v = -\\frac{1}{2}\\cos 2x$.",
    "hintAr": "نفرض ص = س و د ع = جا 2س د س، إذن ع = -0.5 جتا 2س.",
    "stepByStepSolutionEn": [
      "1. $u = x \\implies du = dx$.",
      "2. $dv = \\sin 2x dx \\implies v = -\\frac{1}{2}\\cos 2x$.",
      "3. $\\int x \\sin 2x dx = -\\frac{x}{2}\\cos 2x - \\int (-\\frac{1}{2}\\cos 2x) dx$.",
      "4. $-\\frac{x}{2}\\cos 2x + \\frac{1}{2}(\\frac{1}{2}\\sin 2x) + C = -\\frac{x}{2}\\cos 2x + \\frac{1}{4}\\sin 2x + C$."
    ],
    "stepByStepSolutionAr": [
      "١. ص = س ومنها د ص = د س.",
      "٢. د ع = جا 2س د س ومنها ع = -0.5 جتا 2س.",
      "٣. بالتجزيء: -0.5 س جتا 2س + 0.5 تكامل جتا 2س د س.",
      "٤. الناتج = -0.5 س جتا 2س + 0.25 جا 2س + ث."
    ],
    "teacherTipEn": "Remember to divide by the angle coefficient 2 when integrating $\\sin 2x$.",
    "teacherTipAr": "تذكر دائماً القسمة على معامل الزاوية 2 عند مكاملة جا 2س."
  },
  {
    "id": "calc_ch4_db_med_78",
    "titleEn": "Definite Integral by Parts of x Sine x",
    "titleAr": "تكامل محدد بالتجزيء لـ س جا س من صفر إلى ط",
    "difficulty": "medium",
    "questionEn": "Evaluate the definite integral: $\\int_0^\\pi x \\sin x \\, dx$.",
    "questionAr": "احسب قيمة التكامل المحدد: $\\int_0^\\pi x \\sin x \\, dx$.",
    "optionsEn": [
      "$\\pi$",
      "$2\\pi$",
      "$0$",
      "$2$"
    ],
    "optionsAr": [
      "ط",
      "2ط",
      "0",
      "2"
    ],
    "correctAnswer": "$\\pi$",
    "correctIndex": 0,
    "hintEn": "Antiderivative is $-x \\cos x + \\sin x$. Evaluate from 0 to $\\pi$.",
    "hintAr": "الدالة المقابلة بالتجزيء هي -س جتا س + جا س. عوض بحدود التكامل من 0 إلى ط.",
    "stepByStepSolutionEn": [
      "1. Integration by parts: $\\int x \\sin x dx = -x \\cos x + \\sin x$.",
      "2. Evaluate at upper limit $\\pi$: $-\\pi \\cos\\pi + \\sin\\pi = -\\pi(-1) + 0 = \\pi$.",
      "3. Evaluate at lower limit $0$: $-0 \\cos 0 + \\sin 0 = 0$.",
      "4. The definite integral equals $\\pi - 0 = \\pi$."
    ],
    "stepByStepSolutionAr": [
      "١. بالتجزيء: تكامل س جا س د س = -س جتا س + جا س.",
      "٢. عند الحد العلوي ط: -ط جتا ط + جا ط = -ط(-1) + 0 = ط.",
      "٣. عند الحد السفلي 0: 0 + 0 = 0.",
      "٤. قيمة التكامل المحدد = ط - 0 = ط."
    ],
    "teacherTipEn": "A famous standard definite integral frequently asked in national examinations.",
    "teacherTipAr": "من أشهر مسائل التكامل المحدد الكلاسيكية في امتحانات الثانوية العامة."
  },
  {
    "id": "calc_ch4_db_med_79",
    "titleEn": "Integral of Form f prime over Root f",
    "titleAr": "تكامل دالة كسرية بسطها مشتقة ما تحت الجذر التربيعي في المقام",
    "difficulty": "medium",
    "questionEn": "Find the indefinite integral: $\\int \\frac{x}{\\sqrt{x^2 + 9}} dx$.",
    "questionAr": "احسب التكامل غير المحدد: $\\int \\frac{x}{\\sqrt{x^2 + 9}} dx$.",
    "optionsEn": [
      "$\\sqrt{x^2 + 9} + C$",
      "$2\\sqrt{x^2 + 9} + C$",
      "$\\frac{1}{2}\\sqrt{x^2 + 9} + C$",
      "$\\ln\\sqrt{x^2 + 9} + C$"
    ],
    "optionsAr": [
      "جذر(س² + 9) + ث",
      "2 جذر(س² + 9) + ث",
      "0.5 جذر(س² + 9) + ث",
      "لوـهـ(جذر(س² + 9)) + ث"
    ],
    "correctAnswer": "$\\sqrt{x^2 + 9} + C$",
    "correctIndex": 0,
    "hintEn": "Use rule: $\\int \\frac{f'(x)}{2\\sqrt{f(x)}} dx = \\sqrt{f(x)} + C$.",
    "hintAr": "استخدم قاعدة تكامل مشتقة ما تحت الجذر: تكامل دَ(س) / (2 جذر د(س)) = جذر د(س) + ث.",
    "stepByStepSolutionEn": [
      "1. Rewrite as $\\frac{1}{2} \\int \\frac{2x}{\\sqrt{x^2 + 9}} dx$.",
      "2. Here $f(x) = x^2 + 9$ and $f'(x) = 2x$.",
      "3. $\\frac{1}{2} \\cdot 2\\sqrt{x^2 + 9} + C = \\sqrt{x^2 + 9} + C$."
    ],
    "stepByStepSolutionAr": [
      "١. نضرب ونقسم على 2: 0.5 تكامل [2س / جذر(س² + 9)] د س.",
      "٢. البسط مشتقة ما تحت الجذر في المقام.",
      "٣. الناتج = 0.5 × 2 جذر(س² + 9) + ث = جذر(س² + 9) + ث."
    ],
    "teacherTipEn": "Recognizing $\\frac{d}{dx}\\sqrt{u} = \\frac{u'}{2\\sqrt{u}}$ solves this in one line.",
    "teacherTipAr": "تذكر أن مشتقة جذر د(س) هي دَ(س) / (2 جذر د(س)) يحل المسألة في سطر واحد."
  },
  {
    "id": "calc_ch4_db_med_80",
    "titleEn": "Definite Integral of Even Function Property",
    "titleAr": "خاصية تكامل دالة زوجية على فترة متناظرة",
    "difficulty": "medium",
    "questionEn": "If $f(x)$ is an even continuous function such that $\\int_0^3 f(x) dx = 7$, find $\\int_{-3}^3 f(x) dx$.",
    "questionAr": "إذا كانت $f(x)$ دالة زوجية متصلة بحيث $\\int_0^3 f(x) dx = 7$، فما قيمة $\\int_{-3}^3 f(x) dx$؟",
    "optionsEn": [
      "$14$",
      "$0$",
      "$7$",
      "$-7$"
    ],
    "optionsAr": [
      "14",
      "0",
      "7",
      "-7"
    ],
    "correctAnswer": "$14$",
    "correctIndex": 0,
    "hintEn": "For an even function: $\\int_{-a}^a f(x) dx = 2\\int_0^a f(x) dx$.",
    "hintAr": "لأي دالة زوجية: تكامل من -أ إلى أ يساوي ضعف التكامل من 0 إلى أ.",
    "stepByStepSolutionEn": [
      "1. For any even function $f(-x) = f(x)$, the graph is symmetric about the y-axis.",
      "2. $\\int_{-a}^a f(x) dx = 2\\int_0^a f(x) dx$.",
      "3. $\\int_{-3}^3 f(x) dx = 2 \\times 7 = 14$."
    ],
    "stepByStepSolutionAr": [
      "١. للدالة الزوجية، المنحنى متماثل تماماً حول محور الصادات.",
      "٢. تكامل د(س) من -3 إلى 3 = 2 × تكامل د(س) من 0 إلى 3.",
      "٣. الناتج = 2 × 7 = 14."
    ],
    "teacherTipEn": "Symmetry property of even functions doubles the integral from 0 to a.",
    "teacherTipAr": "خاصية تماثل الدالة الزوجية تضاعف قيمة التكامل من صفر إلى أ."
  },
  {
    "id": "calc_ch4_db_med_81",
    "titleEn": "Definite Integral of Odd Function Property",
    "titleAr": "خاصية تكامل دالة فردية على فترة متناظرة",
    "difficulty": "medium",
    "questionEn": "Evaluate the definite integral: $\\int_{-5}^5 \\frac{x^3 + \\sin x}{x^4 + 1} dx$.",
    "questionAr": "احسب قيمة التكامل المحدد: $\\int_{-5}^5 \\frac{x^3 + \\sin x}{x^4 + 1} dx$.",
    "optionsEn": [
      "$0$",
      "$10$",
      "$5$",
      "$1$"
    ],
    "optionsAr": [
      "0",
      "10",
      "5",
      "1"
    ],
    "correctAnswer": "$0$",
    "correctIndex": 0,
    "hintEn": "Check whether the integrand is an odd function.",
    "hintAr": "تحقق مما إذا كانت الدالة المكاملة دالة فردية.",
    "stepByStepSolutionEn": [
      "1. Let $g(x) = \\frac{x^3 + \\sin x}{x^4 + 1}$.",
      "2. $g(-x) = \\frac{(-x)^3 + \\sin(-x)}{(-x)^4 + 1} = \\frac{-x^3 - \\sin x}{x^4 + 1} = -\\frac{x^3 + \\sin x}{x^4 + 1} = -g(x)$.",
      "3. Since $g(x)$ is odd and the interval $[-5, 5]$ is symmetric about origin, $\\int_{-5}^5 g(x) dx = 0$."
    ],
    "stepByStepSolutionAr": [
      "١. نفرض د(س) = الكسر المعطى داخل التكامل.",
      "٢. د(-س) = -د(س)، إذن الدالة فردية.",
      "٣. تكامل أي دالة فردية متصلة على فترة متناظرة حول الصفر [-5، 5] يساوي صفراً مباشرة."
    ],
    "teacherTipEn": "For any odd function integrated over $[-a, a]$, the answer is always 0.",
    "teacherTipAr": "تكامل أي دالة فردية على فترة متماثلة [-أ، أ] يساوي صفراً دوماً دون إجراء التكامل."
  },
  {
    "id": "calc_ch4_db_med_82",
    "titleEn": "Linear Shift Substitution in Power Integral",
    "titleAr": "تكامل بالتعويض بإزاحة خطية س (س - 1)⁵",
    "difficulty": "medium",
    "questionEn": "Find the indefinite integral: $\\int x(x - 1)^5 dx$.",
    "questionAr": "احسب التكامل غير المحدد: $\\int x(x - 1)^5 dx$.",
    "optionsEn": [
      "$\\frac{(x - 1)^7}{7} + \\frac{(x - 1)^6}{6} + C$",
      "$\\frac{(x - 1)^7}{7} - \\frac{(x - 1)^6}{6} + C$",
      "$\\frac{x^2(x - 1)^6}{12} + C$",
      "$\\frac{(x - 1)^6}{6} + C$"
    ],
    "optionsAr": [
      "(س - 1)⁷ / 7 + (س - 1)⁶ / 6 + ث",
      "(س - 1)⁷ / 7 - (س - 1)⁶ / 6 + ث",
      "س²(س - 1)⁶ / 12 + ث",
      "(س - 1)⁶ / 6 + ث"
    ],
    "correctAnswer": "$\\frac{(x - 1)^7}{7} + \\frac{(x - 1)^6}{6} + C$",
    "correctIndex": 0,
    "hintEn": "Substitute $u = x - 1 \\implies x = u + 1$ and $dx = du$.",
    "hintAr": "استخدم التعويض: ع = س - 1 فتكون س = ع + 1 و د س = د ع.",
    "stepByStepSolutionEn": [
      "1. Let $u = x - 1 \\implies x = u + 1$ and $dx = du$.",
      "2. The integral becomes $\\int (u + 1)u^5 du = \\int (u^6 + u^5) du$.",
      "3. $\\int (u^6 + u^5) du = \\frac{u^7}{7} + \\frac{u^6}{6} + C$.",
      "4. Substitute back $u = x - 1$: $\\frac{(x - 1)^7}{7} + \\frac{(x - 1)^6}{6} + C$."
    ],
    "stepByStepSolutionAr": [
      "١. نفرض ع = س - 1، إذن س = ع + 1، د س = د ع.",
      "٢. يتحول التكامل إلى تكامل (ع + 1) ع⁵ د ع = تكامل (ع⁶ + ع⁵) د ع.",
      "٣. ناتج التكامل = ع⁷ / 7 + ع⁶ / 6 + ث.",
      "٤. بالتعويض عن ع: (س - 1)⁷ / 7 + (س - 1)⁶ / 6 + ث."
    ],
    "teacherTipEn": "Linear substitution $u = x - c$ easily distributes powers over binomial terms.",
    "teacherTipAr": "التعويض الخطي يبسط توزيع القوى الكبيرة دون الحاجة لفك ذي الحدين."
  },
  {
    "id": "calc_ch4_db_med_83",
    "titleEn": "Definite Integral of Shifted Absolute Value",
    "titleAr": "تكامل محدد لدالة مقياس مزاحة |س - 2|",
    "difficulty": "medium",
    "questionEn": "Evaluate the definite integral: $\\int_0^4 |x - 2| \\, dx$.",
    "questionAr": "احسب قيمة التكامل المحدد: $\\int_0^4 |x - 2| \\, dx$.",
    "optionsEn": [
      "$4$",
      "$8$",
      "$2$",
      "$0$"
    ],
    "optionsAr": [
      "4",
      "8",
      "2",
      "0"
    ],
    "correctAnswer": "$4$",
    "correctIndex": 0,
    "hintEn": "Split the integral at $x = 2$: $\\int_0^2 (2 - x) dx + \\int_2^4 (x - 2) dx$.",
    "hintAr": "جزئ التكامل عند صفر المقياس س = 2 إلى تكاملين.",
    "stepByStepSolutionEn": [
      "1. Zero of the absolute value is at $x = 2$.",
      "2. For $0 \\le x \\le 2$, $|x - 2| = 2 - x$. Area of this triangle is $\\frac{1}{2}(2)(2) = 2$.",
      "3. For $2 \\le x \\le 4$, $|x - 2| = x - 2$. Area of this triangle is $\\frac{1}{2}(2)(2) = 2$.",
      "4. $\\int_0^4 |x - 2| dx = 2 + 2 = 4$."
    ],
    "stepByStepSolutionAr": [
      "١. صفر المقياس هو س = 2.",
      "٢. في الفترة [0، 2]: |س - 2| = 2 - س، وتكاملها يعطي مساحة مثلث = 2.",
      "٣. في الفترة [2، 4]: |س - 2| = س - 2، وتكاملها يعطي مساحة مثلث = 2.",
      "٤. قيمة التكامل الإجمالية = 2 + 2 = 4."
    ],
    "teacherTipEn": "Geometrically, this integral represents the sum of the areas of two congruent right triangles.",
    "teacherTipAr": "هندسياً، يمثل هذا التكامل مجموع مساحتي مثلثين قائمين متطابقين مساحة كل منهما 2."
  },
  {
    "id": "calc_ch4_db_med_84",
    "titleEn": "Area Enclosed by Horizontal Parabola and Y-Axis",
    "titleAr": "المساحة المحصورة بين قطع مكافئ أفقي ومحور الصادات",
    "difficulty": "medium",
    "questionEn": "Find the area of the region bounded by $x = 4 - y^2$ and the y-axis ($x = 0$).",
    "questionAr": "أوجد مساحة المنطقة المحصورة بين منحنى القطع المكافئ $x = 4 - y^2$ ومحور الصادات ($x = 0$).",
    "optionsEn": [
      "$\\frac{32}{3}$",
      "$\\frac{16}{3}$",
      "$16$",
      "$8$"
    ],
    "optionsAr": [
      "32 / 3",
      "16 / 3",
      "16",
      "8"
    ],
    "correctAnswer": "$\\frac{32}{3}$",
    "correctIndex": 0,
    "hintEn": "Integrate with respect to y from $y = -2$ to $y = 2$: $A = \\int_{-2}^2 (4 - y^2) dy$.",
    "hintAr": "كامل بالنسبة لـ ص من ص = -2 إلى ص = 2: م = تكامل (4 - ص²) د ص.",
    "stepByStepSolutionEn": [
      "1. Find intersection with y-axis: $4 - y^2 = 0 \\implies y = \\pm 2$.",
      "2. Area formula: $A = \\int_{-2}^2 (4 - y^2) dy = 2\\int_0^2 (4 - y^2) dy$.",
      "3. $A = 2 \\left[ 4y - \\frac{y^3}{3} \\right]_0^2 = 2 \\left[ 8 - \\frac{8}{3} \\right] = 2 (\\frac{16}{3}) = \\frac{32}{3}$."
    ],
    "stepByStepSolutionAr": [
      "١. نقاط التقاطع مع محور الصادات: 4 - ص² = 0 ومنها ص = ±2.",
      "٢. قانون المساحة بالتكامل بالنسبة لـ ص: م = 2 × تكامل (4 - ص²) د ص من 0 إلى 2.",
      "٣. م = 2 [4ص - ص³/3] من 0 إلى 2 = 2 × (8 - 8/3) = 32 / 3 وحدة مربعة."
    ],
    "teacherTipEn": "Integrating with respect to y is natural when curves are given in the form $x = g(y)$.",
    "teacherTipAr": "التكامل بالنسبة لـ ص هو الخيار الأمثل والمباشر عندما تكون الدالة معطاة بصورة س = د(ص)."
  },
  {
    "id": "calc_ch4_db_med_85",
    "titleEn": "Volume of Revolution of Square Root Curve",
    "titleAr": "حجم الجسم الدوراني لـ ص = جذر(س) حول محور السينات",
    "difficulty": "medium",
    "questionEn": "Find the volume of the solid generated by revolving the region bounded by $y = \\sqrt{x}$, the x-axis, and $x = 4$ about the x-axis.",
    "questionAr": "أوجد حجم الجسم الدوراني الناشئ من دوران المنطقة المحصورة بين $y = \\sqrt{x}$ ومحور السينات والمستقيم $x = 4$ دورة كاملة حول محور السينات.",
    "optionsEn": [
      "$8\\pi$",
      "$16\\pi$",
      "$4\\pi$",
      "$\\frac{16\\pi}{3}$"
    ],
    "optionsAr": [
      "8 ط",
      "16 ط",
      "4 ط",
      "16 ط / 3"
    ],
    "correctAnswer": "$8\\pi$",
    "correctIndex": 0,
    "hintEn": "Volume $V = \\pi \\int_0^4 y^2 dx = \\pi \\int_0^4 x dx$.",
    "hintAr": "الحجم ح = ط × تكامل ص² د س = ط × تكامل س د س من 0 إلى 4.",
    "stepByStepSolutionEn": [
      "1. Volume formula: $V = \\pi \\int_0^4 (\\sqrt{x})^2 dx = \\pi \\int_0^4 x dx$.",
      "2. $\\int_0^4 x dx = \\left[ \\frac{x^2}{2} \\right]_0^4 = \\frac{16}{2} = 8$.",
      "3. Volume $V = 8\\pi$."
    ],
    "stepByStepSolutionAr": [
      "١. قانون الحجم الدوراني حول محور السينات: ح = ط × تكامل (جذر س)² د س من 0 إلى 4.",
      "٢. تكامل س د س = س² / 2 من 0 إلى 4 = 16 / 2 = 8.",
      "٣. الحجم = 8 ط وحدة مكعبة."
    ],
    "teacherTipEn": "Squaring $\\sqrt{x}$ eliminates the root, turning the volume integral into a simple power.",
    "teacherTipAr": "تربيع دالة الجذر التربيعي يلغي الجذر ويجعل التكامل بسيطاً ومباشراً للغاية."
  },
  {
    "id": "calc_ch4_db_med_86",
    "titleEn": "Volume of Revolution of Parabola About Y-Axis",
    "titleAr": "حجم دوران القطع المكافئ حول محور الصادات",
    "difficulty": "medium",
    "questionEn": "Find the volume of the solid generated by revolving the region bounded by $y = x^2$, the y-axis, and $y = 4$ about the y-axis.",
    "questionAr": "أوجد حجم الجسم الدوراني الناشئ من دوران المنطقة المحصورة بين $y = x^2$ ومحور الصادات والمستقيم $y = 4$ دورة كاملة حول محور الصادات.",
    "optionsEn": [
      "$8\\pi$",
      "$16\\pi$",
      "$\\frac{32\\pi}{5}$",
      "$4\\pi$"
    ],
    "optionsAr": [
      "8 ط",
      "16 ط",
      "32 ط / 5",
      "4 ط"
    ],
    "correctAnswer": "$8\\pi$",
    "correctIndex": 0,
    "hintEn": "Volume about y-axis: $V = \\pi \\int_0^4 x^2 dy = \\pi \\int_0^4 y dy$.",
    "hintAr": "الحجم حول محور الصادات: ح = ط × تكامل س² د ص = ط × تكامل ص د ص من 0 إلى 4.",
    "stepByStepSolutionEn": [
      "1. Revolve about the $y$-axis: $V = \\pi \\int_0^4 x^2 dy$.",
      "2. From $y = x^2$, we have $x^2 = y$.",
      "3. $V = \\pi \\int_0^4 y dy = \\pi \\left[ \\frac{y^2}{2} \\right]_0^4 = \\pi (\\frac{16}{2}) = 8\\pi$."
    ],
    "stepByStepSolutionAr": [
      "١. قانون الدوران حول محور الصادات: ح = ط × تكامل س² د ص.",
      "٢. من معادلة المنحنى: س² = ص.",
      "٣. الحجم = ط × تكامل ص د ص من 0 إلى 4 = ط × [ص² / 2] = 8 ط وحدة مكعبة."
    ],
    "teacherTipEn": "For revolution about the y-axis, integrate $\\pi x^2$ with respect to y.",
    "teacherTipAr": "عند الدوران حول محور الصادات، نكامل المقدار ط س² بالنسبة لـ ص."
  },
  {
    "id": "calc_ch4_db_med_87",
    "titleEn": "Volume of Sphere Derived via Calculus",
    "titleAr": "اشتقاق حجم الكرة بالتكامل الدوراني",
    "difficulty": "medium",
    "questionEn": "Find the volume of a sphere of radius $R = 3$ obtained by revolving the semicircle $y = \\sqrt{9 - x^2}$ about the x-axis.",
    "questionAr": "أوجد حجم كرة نصف قطرها $R = 3$ ناشئة من دوران نصف الدائرة $y = \\sqrt{9 - x^2}$ دورة كاملة حول محور السينات.",
    "optionsEn": [
      "$36\\pi$",
      "$18\\pi$",
      "$27\\pi$",
      "$72\\pi$"
    ],
    "optionsAr": [
      "36 ط",
      "18 ط",
      "27 ط",
      "72 ط"
    ],
    "correctAnswer": "$36\\pi$",
    "correctIndex": 0,
    "hintEn": "Formula: $V = \\frac{4}{3}\\pi R^3 = \\frac{4}{3}\\pi(3^3)$.",
    "hintAr": "قانون حجم الكرة: ح = (4/3) ط نق³.",
    "stepByStepSolutionEn": [
      "1. Volume integral: $V = \\pi \\int_{-3}^3 (9 - x^2) dx = 2\\pi \\int_0^3 (9 - x^2) dx$.",
      "2. $V = 2\\pi \\left[ 9x - \\frac{x^3}{3} \\right]_0^3 = 2\\pi [27 - 9] = 2\\pi(18) = 36\\pi$.",
      "3. This matches the standard sphere volume formula: $\\frac{4}{3}\\pi(3)^3 = 36\\pi$."
    ],
    "stepByStepSolutionAr": [
      "١. تكامل الحجم الدوراني: ح = 2 ط × تكامل (9 - س²) د س من 0 إلى 3.",
      "٢. ح = 2 ط × [9س - س³/3] من 0 إلى 3 = 2 ط × (27 - 9) = 36 ط.",
      "٣. يطابق قانون حجم الكرة الكلاسيكي: (4/3) ط (3)³ = 36 ط."
    ],
    "teacherTipEn": "Calculus verifies the Greek geometric formula $V = \\frac{4}{3}\\pi R^3$.",
    "teacherTipAr": "التفاضل والتكامل يبرهن بدقة قانون حجم الكرة اليوناني القديم."
  },
  {
    "id": "calc_ch4_db_med_88",
    "titleEn": "Volume of Right Circular Cone via Revolution",
    "titleAr": "حجم المخروط الدائري القائم بالتكامل الدوراني",
    "difficulty": "medium",
    "questionEn": "Find the volume of a right circular cone of base radius $r = 3$ and height $h = 4$ formed by revolving the line $y = \\frac{3}{4}x$ about the x-axis from $x = 0$ to $x = 4$.",
    "questionAr": "أوجد حجم مخروط دائري قائم نصف قطر قاعدته $r = 3$ وارتفاعه $h = 4$ متكون من دوران المستقيم $y = \\frac{3}{4}x$ حول محور السينات من $x = 0$ إلى $x = 4$.",
    "optionsEn": [
      "$12\\pi$",
      "$36\\pi$",
      "$24\\pi$",
      "$16\\pi$"
    ],
    "optionsAr": [
      "12 ط",
      "36 ط",
      "24 ط",
      "16 ط"
    ],
    "correctAnswer": "$12\\pi$",
    "correctIndex": 0,
    "hintEn": "Formula: $V = \\frac{1}{3}\\pi r^2 h = \\frac{1}{3}\\pi (3^2)(4) = 12\\pi$.",
    "hintAr": "قانون حجم المخروط: ح = (1/3) ط نق² ع = (1/3) ط × 9 × 4 = 12 ط.",
    "stepByStepSolutionEn": [
      "1. Revolve line $y = \\frac{3}{4}x$ about $x$-axis from $0$ to $4$:",
      "   $V = \\pi \\int_0^4 (\\frac{3}{4}x)^2 dx = \\frac{9\\pi}{16} \\int_0^4 x^2 dx$.",
      "2. $\\int_0^4 x^2 dx = \\left[ \\frac{x^3}{3} \\right]_0^4 = \\frac{64}{3}$.",
      "3. $V = \\frac{9\\pi}{16} \\times \\frac{64}{3} = 3\\pi \\times 4 = 12\\pi$."
    ],
    "stepByStepSolutionAr": [
      "١. تكامل الحجم: ح = ط × تكامل (3/4 س)² د س من 0 إلى 4.",
      "٢. تكامل س² د س من 0 إلى 4 = 64 / 3.",
      "٣. الحجم = (9 ط / 16) × (64 / 3) = 12 ط."
    ],
    "teacherTipEn": "Revolving a right-angled triangle around a leg always produces a right circular cone.",
    "teacherTipAr": "دوران مثلث قائم حول أحد ضلعي قائمته يولد مخروطاً دائرياً قائماً دائماً."
  },
  {
    "id": "calc_ch4_db_med_89",
    "titleEn": "Definite Integral of Piecewise Continuous Function",
    "titleAr": "تكامل محدد لدالة متصلة معرفة بأكثر من قاعدة",
    "difficulty": "medium",
    "questionEn": "Evaluate $\\int_0^2 f(x) dx$ for $f(x) = \\begin{cases} 2x & 0 \\le x \\le 1 \\\\ 3x^2 & 1 < x \\le 2 \\end{cases}$.",
    "questionAr": "احسب قيمة $\\int_0^2 f(x) dx$ للدالة المعرفة بأكثر من قاعدة الموضحة أعلاه.",
    "optionsEn": [
      "$8$",
      "$7$",
      "$9$",
      "$6$"
    ],
    "optionsAr": [
      "8",
      "7",
      "9",
      "6"
    ],
    "correctAnswer": "$8$",
    "correctIndex": 0,
    "hintEn": "Split the definite integral at the boundary $x = 1$.",
    "hintAr": "قسم التكامل المحدد إلى تكاملين عند نقطة التشعب س = 1.",
    "stepByStepSolutionEn": [
      "1. Split integral: $\\int_0^2 f(x) dx = \\int_0^1 2x dx + \\int_1^2 3x^2 dx$.",
      "2. First part: $\\int_0^1 2x dx = [x^2]_0^1 = 1 - 0 = 1$.",
      "3. Second part: $\\int_1^2 3x^2 dx = [x^3]_1^2 = 8 - 1 = 7$.",
      "4. Total integral: $1 + 7 = 8$."
    ],
    "stepByStepSolutionAr": [
      "١. تجزئة التكامل: تكامل من 0 إلى 1 + تكامل من 1 إلى 2.",
      "٢. الجزء الأول: تكامل 2س د س من 0 إلى 1 = 1.",
      "٣. الجزء الثاني: تكامل 3س² د س من 1 إلى 2 = 8 - 1 = 7.",
      "٤. المجموع = 1 + 7 = 8."
    ],
    "teacherTipEn": "The additivity of definite integrals allows integration across piecewise intervals.",
    "teacherTipAr": "خاصية إضافة فترات التكامل تسمح بحساب تكامل الدوال متعددة التعريف بسهولة."
  },
  {
    "id": "calc_ch4_db_med_90",
    "titleEn": "Trigonometric Power Integral Sine Squared",
    "titleAr": "تكامل جا²(س) بالنسبة لـ س",
    "difficulty": "medium",
    "questionEn": "Find the indefinite integral: $\\int \\sin^2 x \\, dx$.",
    "questionAr": "احسب التكامل غير المحدد: $\\int \\sin^2 x \\, dx$.",
    "optionsEn": [
      "$\\frac{x}{2} - \\frac{\\sin 2x}{4} + C$",
      "$\\frac{x}{2} + \\frac{\\sin 2x}{4} + C$",
      "$-\\frac{\\cos^3 x}{3} + C$",
      "$\\frac{\\sin^3 x}{3} + C$"
    ],
    "optionsAr": [
      "س / 2 - 0.25 جا 2س + ث",
      "س / 2 + 0.25 جا 2س + ث",
      "-1/3 جتا³ س + ث",
      "1/3 جا³ س + ث"
    ],
    "correctAnswer": "$\\frac{x}{2} - \\frac{\\sin 2x}{4} + C$",
    "correctIndex": 0,
    "hintEn": "Use half-angle identity: $\\sin^2 x = \\frac{1 - \\cos 2x}{2}$.",
    "hintAr": "استخدم متطابقة نصف الزاوية: جا² س = (1 - جتا 2س) / 2.",
    "stepByStepSolutionEn": [
      "1. Replace $\\sin^2 x$ with $\\frac{1 - \\cos 2x}{2}$.",
      "2. $\\int \\frac{1 - \\cos 2x}{2} dx = \\frac{1}{2}\\int 1 dx - \\frac{1}{2}\\int \\cos 2x dx$.",
      "3. $\\frac{x}{2} - \\frac{1}{2}(\\frac{\\sin 2x}{2}) + C = \\frac{x}{2} - \\frac{\\sin 2x}{4} + C$."
    ],
    "stepByStepSolutionAr": [
      "١. بالتعويض بقانون نصف الزاوية: جا² س = (1 - جتا 2س) / 2.",
      "٢. تفكيك التكامل: 0.5 تكامل 1 د س - 0.5 تكامل جتا 2س د س.",
      "٣. الناتج = س / 2 - 0.25 جا 2س + ث."
    ],
    "teacherTipEn": "Even powers of sine and cosine are integrated using half-angle reduction formulas.",
    "teacherTipAr": "القوى الزوجية للجا والجتا تكامل دائماً باستخدام متطابقات نصف الزاوية لتخفيض القوة."
  },
  {
    "id": "calc_ch4_db_med_91",
    "titleEn": "Trigonometric Power Integral Cosine Squared",
    "titleAr": "تكامل جتا²(س) بالنسبة لـ س",
    "difficulty": "medium",
    "questionEn": "Find the indefinite integral: $\\int \\cos^2 x \\, dx$.",
    "questionAr": "احسب التكامل غير المحدد: $\\int \\cos^2 x \\, dx$.",
    "optionsEn": [
      "$\\frac{x}{2} + \\frac{\\sin 2x}{4} + C$",
      "$\\frac{x}{2} - \\frac{\\sin 2x}{4} + C$",
      "$\\frac{\\cos^3 x}{3} + C$",
      "$\\frac{x}{2} + \\frac{\\cos 2x}{4} + C$"
    ],
    "optionsAr": [
      "س / 2 + 0.25 جا 2س + ث",
      "س / 2 - 0.25 جا 2س + ث",
      "1/3 جتا³ س + ث",
      "س / 2 + 0.25 جتا 2س + ث"
    ],
    "correctAnswer": "$\\frac{x}{2} + \\frac{\\sin 2x}{4} + C$",
    "correctIndex": 0,
    "hintEn": "Use half-angle identity: $\\cos^2 x = \\frac{1 + \\cos 2x}{2}$.",
    "hintAr": "استخدم متطابقة نصف الزاوية: جتا² س = (1 + جتا 2س) / 2.",
    "stepByStepSolutionEn": [
      "1. Replace $\\cos^2 x$ with $\\frac{1 + \\cos 2x}{2}$.",
      "2. $\\int \\frac{1 + \\cos 2x}{2} dx = \\frac{1}{2}\\int 1 dx + \\frac{1}{2}\\int \\cos 2x dx$.",
      "3. $\\frac{x}{2} + \\frac{\\sin 2x}{4} + C$."
    ],
    "stepByStepSolutionAr": [
      "١. بالتعويض بمتطابقة نصف الزاوية: جتا² س = (1 + جتا 2س) / 2.",
      "٢. تكامل 1 هو س، وتكامل جتا 2س هو 0.5 جا 2س.",
      "٣. الناتج = س / 2 + 0.25 جا 2س + ث."
    ],
    "teacherTipEn": "Cosine squared integral differs from sine squared only by the plus sign.",
    "teacherTipAr": "تكامل جتا² س يختلف عن تكامل جا² س في الإشارة الموجبة للحد الثاني فقط."
  },
  {
    "id": "calc_ch4_db_med_92",
    "titleEn": "Definite Integral of Sine Squared on Quarter Period",
    "titleAr": "تكامل محدد لـ جا²(س) من صفر إلى ط/2",
    "difficulty": "medium",
    "questionEn": "Evaluate the definite integral: $\\int_0^{\\pi/2} \\sin^2 x \\, dx$.",
    "questionAr": "احسب قيمة التكامل المحدد: $\\int_0^{\\pi/2} \\sin^2 x \\, dx$.",
    "optionsEn": [
      "$\\frac{\\pi}{4}$",
      "$\\frac{\\pi}{2}$",
      "$1$",
      "$0$"
    ],
    "optionsAr": [
      "ط / 4",
      "ط / 2",
      "1",
      "0"
    ],
    "correctAnswer": "$\\frac{\\pi}{4}$",
    "correctIndex": 0,
    "hintEn": "Use antiderivative $\\frac{x}{2} - \\frac{\\sin 2x}{4}$ from 0 to $\\pi/2$.",
    "hintAr": "عوض بحدود التكامل في الدالة المقابلة (س/2 - 0.25 جا 2س).",
    "stepByStepSolutionEn": [
      "1. Antiderivative: $F(x) = \\frac{x}{2} - \\frac{\\sin 2x}{4}$.",
      "2. At $x = \\pi/2$: $F(\\pi/2) = \\frac{\\pi/2}{2} - \\frac{\\sin\\pi}{4} = \\frac{\\pi}{4} - 0 = \\frac{\\pi}{4}$.",
      "3. At $x = 0$: $F(0) = 0 - 0 = 0$.",
      "4. Value is $\\frac{\\pi}{4}$."
    ],
    "stepByStepSolutionAr": [
      "١. الدالة المقابلة: ف(س) = س / 2 - 0.25 جا 2س.",
      "٢. عند الحد العلوي ط/2: ط / 4 - 0 = ط / 4.",
      "٣. عند الحد السفلي 0: 0.",
      "٤. قيمة التكامل المحدد = ط / 4."
    ],
    "teacherTipEn": "Symmetry: $\\int_0^{\\pi/2} \\sin^2 x dx = \\int_0^{\\pi/2} \\cos^2 x dx = \\frac{1}{2}(\\frac{\\pi}{2}) = \\frac{\\pi}{4}$.",
    "teacherTipAr": "بالتماثل: تكامل جا² س وتكامل جتا² س متساويان ومجموعهما يساوي تكامل 1 (ط/2)، فكل منهما ط/4."
  },
  {
    "id": "calc_ch4_db_med_93",
    "titleEn": "Integration of Tangent Squared",
    "titleAr": "تكامل ظا²(س) بالنسبة لـ س",
    "difficulty": "medium",
    "questionEn": "Find the indefinite integral: $\\int \\tan^2 x \\, dx$.",
    "questionAr": "احسب التكامل غير المحدد: $\\int \\tan^2 x \\, dx$.",
    "optionsEn": [
      "$\\tan x - x + C$",
      "$\\tan x + x + C$",
      "$\\frac{\\tan^3 x}{3} + C$",
      "$\\sec^2 x + C$"
    ],
    "optionsAr": [
      "ظا س - س + ث",
      "ظا س + س + ث",
      "1/3 ظا³ س + ث",
      "قا² س + ث"
    ],
    "correctAnswer": "$\\tan x - x + C$",
    "correctIndex": 0,
    "hintEn": "Use identity $\\tan^2 x = \\sec^2 x - 1$.",
    "hintAr": "استخدم المتطابقة المثلثية: ظا² س = قا² س - 1.",
    "stepByStepSolutionEn": [
      "1. Replace $\\tan^2 x$ with $\\sec^2 x - 1$.",
      "2. $\\int (\\sec^2 x - 1) dx = \\int \\sec^2 x dx - \\int 1 dx$.",
      "3. Since $\\frac{d}{dx}[\\tan x] = \\sec^2 x$, we obtain $\\tan x - x + C$."
    ],
    "stepByStepSolutionAr": [
      "١. بالتعويض بالمتطابقة: ظا² س = قا² س - 1.",
      "٢. تكامل قا² س هو ظا س، وتكامل 1 هو س.",
      "٣. الناتج = ظا س - س + ث."
    ],
    "teacherTipEn": "Never use substitution for $\\tan^2 x$; always convert to $\\sec^2 x - 1$.",
    "teacherTipAr": "لا تستخدم التعويض لمكاملة ظا² س؛ حولها فوراً إلى قا² س - 1."
  },
  {
    "id": "calc_ch4_db_med_94",
    "titleEn": "Integration of Cotangent Squared",
    "titleAr": "تكامل ظتا²(س) بالنسبة لـ س",
    "difficulty": "medium",
    "questionEn": "Find the indefinite integral: $\\int \\cot^2 x \\, dx$.",
    "questionAr": "احسب التكامل غير المحدد: $\\int \\cot^2 x \\, dx$.",
    "optionsEn": [
      "$-\\cot x - x + C$",
      "$-\\cot x + x + C$",
      "$\\cot x - x + C$",
      "$-\\frac{\\cot^3 x}{3} + C$"
    ],
    "optionsAr": [
      "-ظتا س - س + ث",
      "-ظتا س + س + ث",
      "ظتا س - س + ث",
      "-1/3 ظتا³ س + ث"
    ],
    "correctAnswer": "$-\\cot x - x + C$",
    "correctIndex": 0,
    "hintEn": "Use identity $\\cot^2 x = \\csc^2 x - 1$.",
    "hintAr": "استخدم المتطابقة المثلثية: ظتا² س = قتا² س - 1.",
    "stepByStepSolutionEn": [
      "1. Replace $\\cot^2 x$ with $\\csc^2 x - 1$.",
      "2. $\\int (\\csc^2 x - 1) dx = \\int \\csc^2 x dx - \\int 1 dx$.",
      "3. Since $\\frac{d}{dx}[-\\cot x] = \\csc^2 x$, we obtain $-\\cot x - x + C$."
    ],
    "stepByStepSolutionAr": [
      "١. بالتعويض بالمتطابقة: ظتا² س = قتا² س - 1.",
      "٢. تكامل قتا² س هو -ظتا س، وتكامل 1 هو س.",
      "٣. الناتج = -ظتا س - س + ث."
    ],
    "teacherTipEn": "Analogous to tangent squared: $\\cot^2 x = \\csc^2 x - 1$.",
    "teacherTipAr": "مطابقة لمسألة الظل: تحول ظتا² س إلى قتا² س - 1."
  },
  {
    "id": "calc_ch4_db_med_95",
    "titleEn": "Definite Integral Additivity Across Intervals",
    "titleAr": "خاصية جمع فترات التكامل المحدد",
    "difficulty": "medium",
    "questionEn": "If $\\int_1^5 f(x) dx = 10$ and $\\int_1^3 f(x) dx = 4$, find $\\int_3^5 f(x) dx$.",
    "questionAr": "إذا كان $\\int_1^5 f(x) dx = 10$ و $\\int_1^3 f(x) dx = 4$، فما قيمة $\\int_3^5 f(x) dx$؟",
    "optionsEn": [
      "$6$",
      "$14$",
      "$40$",
      "$2.5$"
    ],
    "optionsAr": [
      "6",
      "14",
      "40",
      "2.5"
    ],
    "correctAnswer": "$6$",
    "correctIndex": 0,
    "hintEn": "Use interval property: $\\int_1^5 f(x) dx = \\int_1^3 f(x) dx + \\int_3^5 f(x) dx$.",
    "hintAr": "استخدم خاصية تجزئة الفترات: تكامل من 1 إلى 5 = تكامل من 1 إلى 3 + تكامل من 3 إلى 5.",
    "stepByStepSolutionEn": [
      "1. $\\int_1^5 f(x) dx = \\int_1^3 f(x) dx + \\int_3^5 f(x) dx$.",
      "2. $10 = 4 + \\int_3^5 f(x) dx$.",
      "3. $\\int_3^5 f(x) dx = 10 - 4 = 6$."
    ],
    "stepByStepSolutionAr": [
      "١. علاقة شال لتجزئة فترات التكامل: تكامل(1 إلى 5) = تكامل(1 إلى 3) + تكامل(3 إلى 5).",
      "٢. 10 = 4 + تكامل(3 إلى 5).",
      "٣. قيمة التكامل المطلوب = 10 - 4 = 6."
    ],
    "teacherTipEn": "Integration over contiguous intervals is additive.",
    "teacherTipAr": "التكامل على فترات متصلة متتالية يحقق خاصية الجمع الجبري."
  },
  {
    "id": "calc_ch4_db_med_96",
    "titleEn": "Average Value of Function on Interval",
    "titleAr": "القيمة المتوسطة لدالة على فترة",
    "difficulty": "medium",
    "questionEn": "Find the average value of $f(x) = 3x^2$ on the interval $[0, 2]$.",
    "questionAr": "أوجد القيمة المتوسطة للدالة $f(x) = 3x^2$ على الفترة $[0، 2]$.",
    "optionsEn": [
      "$4$",
      "$8$",
      "$6$",
      "$2$"
    ],
    "optionsAr": [
      "4",
      "8",
      "6",
      "2"
    ],
    "correctAnswer": "$4$",
    "correctIndex": 0,
    "hintEn": "Average value formula: $f_{\\text{avg}} = \\frac{1}{b - a}\\int_a^b f(x) dx$.",
    "hintAr": "قانون القيمة المتوسطة لدالة: ق = [1 / (ب - أ)] × تكامل د(س) من أ إلى ب.",
    "stepByStepSolutionEn": [
      "1. $f_{\\text{avg}} = \\frac{1}{2 - 0}\\int_0^2 3x^2 dx$.",
      "2. $\\int_0^2 3x^2 dx = [x^3]_0^2 = 8 - 0 = 8$.",
      "3. $f_{\\text{avg}} = \\frac{1}{2}(8) = 4$."
    ],
    "stepByStepSolutionAr": [
      "١. قانون القيمة المتوسطة: ق = 0.5 × تكامل 3س² د س من 0 إلى 2.",
      "٢. تكامل 3س² هو س³، وقيمته من 0 إلى 2 تساوي 8.",
      "٣. القيمة المتوسطة = 8 / 2 = 4."
    ],
    "teacherTipEn": "Average value represents the height of a rectangle with the same area over the interval.",
    "teacherTipAr": "القيمة المتوسطة تمثل هندسياً ارتفاع المستطيل المشترك مع المنحنى في نفس المساحة."
  },
  {
    "id": "calc_ch4_db_med_97",
    "titleEn": "Fundamental Theorem with Chain Rule (Leibniz Rule)",
    "titleAr": "مشتقة التكامل المحدد بحد علوي دالة (قاعدة لايبنتز)",
    "difficulty": "medium",
    "questionEn": "Find $\\frac{d}{dx} \\left[ \\int_1^{x^2} \\sqrt{t^2 + 5} \\, dt \\right]$.",
    "questionAr": "أوجد $\\frac{d}{dx} \\left[ \\int_1^{x^2} \\sqrt{t^2 + 5} \\, dt \\right]$.",
    "optionsEn": [
      "$2x \\sqrt{x^4 + 5}$",
      "$\\sqrt{x^4 + 5}$",
      "$2x \\sqrt{x^2 + 5}$",
      "$\\frac{2x}{\\sqrt{x^4 + 5}}$"
    ],
    "optionsAr": [
      "2س جذر(س⁴ + 5)",
      "جذر(س⁴ + 5)",
      "2س جذر(س² + 5)",
      "2س / جذر(س⁴ + 5)"
    ],
    "correctAnswer": "$2x \\sqrt{x^4 + 5}$",
    "correctIndex": 0,
    "hintEn": "By Leibniz Rule / FTC with chain rule: $\\frac{d}{dx} \\int_a^{u(x)} f(t) dt = f(u(x)) \\cdot u'(x)$.",
    "hintAr": "باستخدام قاعدة لايبنتز (النظرية الأساسية مع قاعدة السلسلة): نضرب قيمة الدالة عند الحد العلوي في مشتقة الحد العلوي.",
    "stepByStepSolutionEn": [
      "1. By Leibniz Rule: $\\frac{d}{dx} \\int_a^{u(x)} f(t) dt = f(u(x)) \\cdot u'(x)$.",
      "2. Here $u(x) = x^2 \\implies u'(x) = 2x$, and $f(t) = \\sqrt{t^2 + 5}$.",
      "3. Therefore, $F'(x) = \\sqrt{(x^2)^2 + 5} \\cdot 2x = 2x \\sqrt{x^4 + 5}$."
    ],
    "stepByStepSolutionAr": [
      "١. بالنظرية الأساسية وقاعدة السلسلة: مشتقة التكامل بالنسبة لـ س = د(الحد العلوي) × مشتقة الحد العلوي.",
      "٢. الحد العلوي هو س² ومشتقته 2س، والدالة هي جذر(ع² + 5).",
      "٣. إذن المشتقة = جذر((س²)² + 5) × 2س = 2س جذر(س⁴ + 5)."
    ],
    "teacherTipEn": "Remember to multiply by the derivative of the upper limit $u'(x) = 2x$.",
    "teacherTipAr": "تذكر دائماً ضرب الناتج في مشتقة الحد العلوي س² (وهي 2س) تطبيقاً لقاعدة السلسلة."
  },
  {
    "id": "calc_ch4_db_med_98",
    "titleEn": "Total Area Between Cubic Curve and X-Axis",
    "titleAr": "المساحة الكلية المحصورة بين منحنى س³ ومحور السينات على فترة متناظرة",
    "difficulty": "medium",
    "questionEn": "Find the total area of the region bounded by $y = x^3$ and the x-axis from $x = -1$ to $x = 1$.",
    "questionAr": "أوجد المساحة الكلية للمنطقة المحصورة بين المنحنى $y = x^3$ ومحور السينات في الفترة من $x = -1$ إلى $x = 1$.",
    "optionsEn": [
      "$\\frac{1}{2}$",
      "$0$",
      "$1$",
      "$\\frac{1}{4}$"
    ],
    "optionsAr": [
      "1 / 2",
      "0",
      "1",
      "1 / 4"
    ],
    "correctAnswer": "$\\frac{1}{2}$",
    "correctIndex": 0,
    "hintEn": "Area is always non-negative: sum the absolute areas of the two symmetric lobes.",
    "hintAr": "المساحة موجبة دائماً: اجمع مساحتي الجزأين المتناظرين بالقيمة المطلقة.",
    "stepByStepSolutionEn": [
      "1. On $[-1, 0]$, $y = x^3 \\le 0$, so area is $\\int_{-1}^0 (-x^3) dx = \\left[ -\\frac{x^4}{4} \\right]_{-1}^0 = 0 - (-\\frac{1}{4}) = \\frac{1}{4}$.",
      "2. On $[0, 1]$, $y = x^3 \\ge 0$, so area is $\\int_0^1 x^3 dx = \\frac{1}{4}$.",
      "3. Total area $= \\frac{1}{4} + \\frac{1}{4} = \\frac{1}{2}$."
    ],
    "stepByStepSolutionAr": [
      "١. في الفترة [-1، 0]: المنحنى أسفل المحور، فالمساحة = - تكامل س³ = 1/4.",
      "٢. في الفترة [0، 1]: المنحنى أعلى المحور، فالمساحة = تكامل س³ = 1/4.",
      "٣. المساحة الكلية = 1/4 + 1/4 = 1/2 وحدة مربعة."
    ],
    "teacherTipEn": "Do not simply integrate $\\int_{-1}^1 x^3 dx$, which gives 0 because area above and below cancel out.",
    "teacherTipAr": "انتبه: تكامل س³ من -1 إلى 1 يعطي صفراً؛ لكن المساحة تتطلب أخذ القيمة المطلقة لكل جزء."
  },
  {
    "id": "calc_ch4_db_med_99",
    "titleEn": "Volume by Washer Method Between Line and Parabola",
    "titleAr": "حجم دوران منطقة بطريقة الحلقات (الواشر) حول محور السينات",
    "difficulty": "medium",
    "questionEn": "Find the volume of the solid generated by revolving the region enclosed between $y = x$ and $y = x^2$ about the x-axis.",
    "questionAr": "أوجد حجم الجسم الدوراني الناشئ من دوران المنطقة المحصورة بين $y = x$ و $y = x^2$ دورة كاملة حول محور السينات.",
    "optionsEn": [
      "$\\frac{2\\pi}{15}$",
      "$\\frac{\\pi}{15}$",
      "$\\frac{4\\pi}{15}$",
      "$\\frac{\\pi}{30}$"
    ],
    "optionsAr": [
      "2ط / 15",
      "ط / 15",
      "4ط / 15",
      "ط / 30"
    ],
    "correctAnswer": "$\\frac{2\\pi}{15}$",
    "correctIndex": 0,
    "hintEn": "Use washer method: $V = \\pi \\int_0^1 (R_{\\text{outer}}^2 - r_{\\text{inner}}^2) dx$.",
    "hintAr": "استخدم طريقة الحلقات: ح = ط × تكامل (نق_خارجي² - نق_داخلي²) د س.",
    "stepByStepSolutionEn": [
      "1. Intersection points: $x = x^2 \\implies x(1 - x) = 0 \\implies x = 0$ and $x = 1$.",
      "2. On $[0, 1]$, $x \\ge x^2$, so outer radius is $R(x) = x$ and inner radius is $r(x) = x^2$.",
      "3. Volume: $V = \\pi \\int_0^1 (x^2 - (x^2)^2) dx = \\pi \\int_0^1 (x^2 - x^4) dx$.",
      "4. $V = \\pi \\left[ \\frac{x^3}{3} - \\frac{x^5}{5} \\right]_0^1 = \\pi (\\frac{1}{3} - \\frac{1}{5}) = \\frac{2\\pi}{15}$."
    ],
    "stepByStepSolutionAr": [
      "١. نقاط التقاطع: س = س² ومنها س = 0 و س = 1.",
      "٢. في الفترة [0، 1]: المستقيم يقع أعلى القطع المكافئ، إذن نصف القطر الخارجي = س والداخلي = س².",
      "٣. الحجم = ط × تكامل (س² - س⁴) د س من 0 إلى 1.",
      "٤. الحجم = ط × (1/3 - 1/5) = 2ط / 15 وحدة مكعبة."
    ],
    "teacherTipEn": "Washer method subtracts the volume of the inner hole from the outer solid.",
    "teacherTipAr": "طريقة الحلقات تطرح حجم الفراغ الداخلي من الحجم الخارجي للجسم الدوراني."
  },
  {
    "id": "calc_ch4_db_med_100",
    "titleEn": "Volume by Washer Method Between Line and Parabola Around Y-Axis",
    "titleAr": "حجم دوران المنطقة المحصورة بين ص = س و ص = س² حول محور الصادات",
    "difficulty": "medium",
    "questionEn": "Find the volume of the solid generated by revolving the region enclosed between $y = x$ and $y = x^2$ about the y-axis.",
    "questionAr": "أوجد حجم الجسم الدوراني الناشئ من دوران المنطقة المحصورة بين $y = x$ و $y = x^2$ دورة كاملة حول محور الصادات.",
    "optionsEn": [
      "$\\frac{\\pi}{6}$",
      "$\\frac{2\\pi}{15}$",
      "$\\frac{\\pi}{3}$",
      "$\\frac{\\pi}{12}$"
    ],
    "optionsAr": [
      "ط / 6",
      "2ط / 15",
      "ط / 3",
      "ط / 12"
    ],
    "correctAnswer": "$\\frac{\\pi}{6}$",
    "correctIndex": 0,
    "hintEn": "Revolve about y-axis: $V = \\pi \\int_0^1 (x_{\\text{right}}^2 - x_{\\text{left}}^2) dy = \\pi \\int_0^1 (y - y^2) dy$.",
    "hintAr": "الدوران حول محور الصادات: ح = ط × تكامل (س_يمين² - س_يسار²) د ص = ط × تكامل (ص - ص²) د ص.",
    "stepByStepSolutionEn": [
      "1. Curves in terms of $y$: outer boundary is $x = \\sqrt{y}$, inner boundary is $x = y$.",
      "2. Volume: $V = \\pi \\int_0^1 ((\\sqrt{y})^2 - y^2) dy = \\pi \\int_0^1 (y - y^2) dy$.",
      "3. $V = \\pi \\left[ \\frac{y^2}{2} - \\frac{y^3}{3} \\right]_0^1 = \\pi (\\frac{1}{2} - \\frac{1}{3}) = \\frac{\\pi}{6}$."
    ],
    "stepByStepSolutionAr": [
      "١. حدود المنطقة بدلالة ص: الحد الخارجي س = جذر(ص)، والداخلي س = ص.",
      "٢. الحجم = ط × تكامل (ص - ص²) د ص من 0 إلى 1.",
      "٣. الحجم = ط × (1/2 - 1/3) = ط / 6 وحدة مكعبة."
    ],
    "teacherTipEn": "Notice that revolving about the y-axis gives $\\pi/6$, whereas revolving about the x-axis gave $2\\pi/15$.",
    "teacherTipAr": "لاحظ أن الدوران حول محور الصادات يعطي ط/6، بينما حول السينات أعطى 2ط/15؛ فالشكلان الفراغيان مختلفان تماماً."
  },
  {
    "id": "calc_ch4_db_med_101",
    "titleEn": "Area Enclosed Between Parabola and Straight Line",
    "titleAr": "المساحة المحصورة بين قطع مكافئ ومستقيم",
    "difficulty": "medium",
    "questionEn": "Find the area of the region enclosed between the parabola $y = x^2$ and the line $y = 2x + 3$.",
    "questionAr": "أوجد مساحة المنطقة المحصورة بين القطع المكافئ $y = x^2$ والمستقيم $y = 2x + 3$.",
    "optionsEn": [
      "$\\frac{32}{3}\\text{ sq units}$",
      "$\\frac{16}{3}\\text{ sq units}$",
      "$\\frac{64}{3}\\text{ sq units}$",
      "$10\\text{ sq units}$"
    ],
    "optionsAr": [
      "$\\frac{32}{3}\\text{ وحدة مربعة}$",
      "$\\frac{16}{3}\\text{ وحدة مربعة}$",
      "$\\frac{64}{3}\\text{ وحدة مربعة}$",
      "$10\\text{ وحدة مربعة}$"
    ],
    "correctIndex": 0,
    "correctAnswer": "$\\frac{32}{3}\\text{ sq units}$",
    "hintEn": "Find intersection points: $x^2 = 2x + 3 \\implies (x - 3)(x + 1) = 0$. Integrate $(2x + 3 - x^2)$.",
    "hintAr": "أوجد نقاط التقاطع $x^2 - 2x - 3 = 0$ ثم احسب $\\int_{-1}^3 (2x + 3 - x^2) dx$.",
    "teacherTipEn": "For a parabola intersecting a line at roots $a, b$, the enclosed area is $\\frac{|A|}{6}(b - a)^3 = \\frac{1}{6}(3 - (-1))^3 = \\frac{64}{6} = \\frac{32}{3}$.",
    "teacherTipAr": "قاعدة سريعة للمساحة المحصورة بين قطع مكافئ ومستقيم: المساحة $= \\frac{1}{6}(b - a)^3 = \\frac{64}{6} = \\frac{32}{3}$.",
    "stepByStepSolutionEn": [
      "Intersections: $x^2 - 2x - 3 = 0 \\implies x = -1, 3$.",
      "Area: $A = \\int_{-1}^{3} (2x + 3 - x^2) dx = \\left[ x^2 + 3x - \\frac{x^3}{3} \\right]_{-1}^3$.",
      "Upper limit: $9 + 9 - 9 = 9$.",
      "Lower limit: $1 - 3 + 1/3 = -5/3$.",
      "Subtract: $9 - (-5/3) = \\frac{32}{3}\\text{ sq units}$."
    ],
    "stepByStepSolutionAr": [
      "نقاط التقاطع: $x = -1$ و $x = 3$.",
      "المساحة: $A = \\int_{-1}^3 (2x + 3 - x^2) dx$.",
      "التعويض وحساب الناتج: $9 - (-5/3) = \\frac{32}{3}\\text{ وحدة مربعة}$."
    ]
  },
  {
    "id": "calc_ch4_db_med_102",
    "titleEn": "Integration by Parts with Algebraic and Exponential Factors",
    "titleAr": "تكامل بالتجزيء لحاصل ضرب جبري وأسي",
    "difficulty": "medium",
    "questionEn": "Evaluate the definite integral: $\\int_{0}^{2} x e^{3x} \\, dx$.",
    "questionAr": "احسب التكامل المحدد: $\\int_{0}^{2} x e^{3x} \\, dx$.",
    "optionsEn": [
      "$\\frac{5e^6 + 1}{9}$",
      "$\\frac{5e^6 - 1}{9}$",
      "$\\frac{6e^6 - 1}{9}$",
      "$\\frac{2e^6 + 1}{3}$"
    ],
    "optionsAr": [
      "$\\frac{5e^6 + 1}{9}$",
      "$\\frac{5e^6 - 1}{9}$",
      "$\\frac{6e^6 - 1}{9}$",
      "$\\frac{2e^6 + 1}{3}$"
    ],
    "correctIndex": 0,
    "correctAnswer": "$\\frac{5e^6 + 1}{9}$",
    "hintEn": "Use parts: $u = x$, $dv = e^{3x} dx \\implies v = \\frac{1}{3}e^{3x}$.",
    "hintAr": "طبق التكامل بالتجزيء: $u = x$ و $dv = e^{3x} dx$.",
    "teacherTipEn": "Antiderivative of $x e^{kx}$ is $\\frac{e^{kx}}{k^2}(kx - 1)$. Here $k = 3$, so $\\frac{e^{3x}}{9}(3x - 1)$.",
    "teacherTipAr": "الدالة المقابلة لـ $x e^{kx}$ هي دائماً $\\frac{e^{kx}}{k^2}(kx - 1)$.",
    "stepByStepSolutionEn": [
      "Integration by parts: $\\int x e^{3x} dx = \\frac{x}{3}e^{3x} - \\int \\frac{1}{3}e^{3x} dx = \\frac{x}{3}e^{3x} - \\frac{1}{9}e^{3x} = \\frac{e^{3x}}{9}(3x - 1)$.",
      "At $x = 2$: $\\frac{e^6}{9}(6 - 1) = \\frac{5e^6}{9}$.",
      "At $x = 0$: $\\frac{e^0}{9}(0 - 1) = -\\frac{1}{9}$.",
      "Subtract: $\\frac{5e^6}{9} - \\left(-\\frac{1}{9}\\right) = \\frac{5e^6 + 1}{9}$."
    ],
    "stepByStepSolutionAr": [
      "التكامل بالتجزيء: $\\frac{e^{3x}}{9}(3x - 1)$.",
      "التعويض بـ $x = 2$: $\\frac{5e^6}{9}$.",
      "التعويض بـ $x = 0$: $-\\frac{1}{9}$.",
      "طرح الحدين: $\\frac{5e^6 + 1}{9}$."
    ]
  },
  {
    "id": "calc_ch4_db_med_103",
    "titleEn": "Volume of Revolution by Washer Method",
    "titleAr": "حجم دوراني بطريقة الحلقات الدائرية",
    "difficulty": "medium",
    "questionEn": "Find the volume of the solid generated by revolving the region enclosed between $y = x^2$ and $y = 2x$ about the x-axis.",
    "questionAr": "أوجد حجم الجسم الناشئ عن دوران المنطقة المحصورة بين $y = x^2$ و $y = 2x$ دورة كاملة حول محور السينات.",
    "optionsEn": [
      "$\\frac{64\\pi}{15}\\text{ cubic units}$",
      "$\\frac{32\\pi}{15}\\text{ cubic units}$",
      "$\\frac{16\\pi}{15}\\text{ cubic units}$",
      "$\\frac{8\\pi}{3}\\text{ cubic units}$"
    ],
    "optionsAr": [
      "$\\frac{64\\pi}{15}\\text{ وحدة مكعبة}$",
      "$\\frac{32\\pi}{15}\\text{ وحدة مكعبة}$",
      "$\\frac{16\\pi}{15}\\text{ وحدة مكعبة}$",
      "$\\frac{8\\pi}{3}\\text{ وحدة مكعبة}$"
    ],
    "correctIndex": 0,
    "correctAnswer": "$\\frac{64\\pi}{15}\\text{ cubic units}$",
    "hintEn": "Outer radius is $R = 2x$, inner radius is $r = x^2$. Use $V = \\pi \\int_0^2 (R^2 - r^2) dx$.",
    "hintAr": "نصف القطر الخارجي $R = 2x$ والداخلي $r = x^2$. طبق $V = \\pi \\int_0^2 (R^2 - r^2) dx$.",
    "teacherTipEn": "Always identify which curve is on top ($y = 2x > x^2$ on $(0, 2)$) to set the outer radius correctly.",
    "teacherTipAr": "حدد دائماً المنحنى العلوي على الفترة ليكون نصف القطر الخارجي للحلقة.",
    "stepByStepSolutionEn": [
      "Intersections: $x^2 = 2x \\implies x = 0, 2$.",
      "Washer formula: $V = \\pi \\int_0^2 ((2x)^2 - (x^2)^2) dx = \\pi \\int_0^2 (4x^2 - x^4) dx$.",
      "Integrate: $\\pi \\left[ \\frac{4x^3}{3} - \\frac{x^5}{5} \\right]_0^2 = \\pi \\left( \\frac{32}{3} - \\frac{32}{5} \\right) = 32\\pi \\left( \\frac{5 - 3}{15} \\right) = \\frac{64\\pi}{15}\\text{ cubic units}$."
    ],
    "stepByStepSolutionAr": [
      "نقاط التقاطع: $x = 0$ و $x = 2$.",
      "قانون الحلقات: $V = \\pi \\int_0^2 (4x^2 - x^4) dx$.",
      "حساب الناتج: $\\pi [32/3 - 32/5] = \\frac{64\\pi}{15}\\text{ وحدة مكعبة}$."
    ]
  },
  {
    "id": "calc_ch4_db_med_104",
    "titleEn": "Integration of Rational Fraction via Partial Fractions",
    "titleAr": "تكامل كسر نسبي باستخدام الكسور الجزئية",
    "difficulty": "medium",
    "questionEn": "Evaluate: $\\int \\frac{5x - 2}{x^2 - x - 6} \\, dx$.",
    "questionAr": "احسب: $\\int \\frac{5x - 2}{x^2 - x - 6} \\, dx$.",
    "optionsEn": [
      "$\\frac{13}{5}\\ln|x - 3| + \\frac{12}{5}\\ln|x + 2| + C$",
      "$\\frac{12}{5}\\ln|x - 3| + \\frac{13}{5}\\ln|x + 2| + C$",
      "$5\\ln|x^2 - x - 6| + C$",
      "$\\frac{5}{2}\\ln|x - 3| + \\frac{5}{2}\\ln|x + 2| + C$"
    ],
    "optionsAr": [
      "$\\frac{13}{5}\\ln|x - 3| + \\frac{12}{5}\\ln|x + 2| + C$",
      "$\\frac{12}{5}\\ln|x - 3| + \\frac{13}{5}\\ln|x + 2| + C$",
      "$5\\ln|x^2 - x - 6| + C$",
      "$\\frac{5}{2}\\ln|x - 3| + \\frac{5}{2}\\ln|x + 2| + C$"
    ],
    "correctIndex": 0,
    "correctAnswer": "$\\frac{13}{5}\\ln|x - 3| + \\frac{12}{5}\\ln|x + 2| + C$",
    "hintEn": "Decompose $\\frac{5x - 2}{(x - 3)(x + 2)} = \\frac{A}{x - 3} + \\frac{B}{x + 2}$.",
    "hintAr": "فكك الكسر إلى كسور جزئية: $\\frac{A}{x - 3} + \\frac{B}{x + 2}$.",
    "teacherTipEn": "Use Heaviside cover-up: $A = \\frac{5(3) - 2}{3 + 2} = \\frac{13}{5}$ and $B = \\frac{5(-2) - 2}{-2 - 3} = \\frac{-12}{-5} = \\frac{12}{5}$.",
    "teacherTipAr": "طريقة الحذف السريع لهيفايسايد: احجب القوس وعوض بصفر المقام لإيجاد الثوابت في خطوة واحدة.",
    "stepByStepSolutionEn": [
      "Factor denominator: $x^2 - x - 6 = (x - 3)(x + 2)$.",
      "Decompose: $\\frac{5x - 2}{(x - 3)(x + 2)} = \\frac{A}{x - 3} + \\frac{B}{x + 2}$.",
      "Cover-up for $A$: at $x = 3$, $A = \\frac{15 - 2}{3 + 2} = \\frac{13}{5}$.",
      "Cover-up for $B$: at $x = -2$, $B = \\frac{-10 - 2}{-2 - 3} = \\frac{12}{5}$.",
      "Integrate: $\\frac{13}{5}\\ln|x - 3| + \\frac{12}{5}\\ln|x + 2| + C$."
    ],
    "stepByStepSolutionAr": [
      "تحليل المقام: $(x - 3)(x + 2)$.",
      "الكسور الجزئية: $A = 13/5$ و $B = 12/5$.",
      "التكامل اللوغاريتمي: $\\frac{13}{5}\\ln|x - 3| + \\frac{12}{5}\\ln|x + 2| + C$."
    ]
  },
  {
    "id": "calc_ch4_db_med_105",
    "titleEn": "Definite Integral of Symmetrical Trig Expression",
    "titleAr": "تكامل محدد لدالة جيب التمام المربعة",
    "difficulty": "medium",
    "questionEn": "Evaluate the definite integral: $\\int_{0}^{\\pi} \\sin^2(x) \\, dx$.",
    "questionAr": "احسب التكامل المحدد: $\\int_{0}^{\\pi} \\sin^2(x) \\, dx$.",
    "optionsEn": [
      "$\\frac{\\pi}{2}$",
      "$\\pi$",
      "$\\frac{\\pi}{4}$",
      "$2\\pi$"
    ],
    "optionsAr": [
      "$\\frac{\\pi}{2}$",
      "$\\pi$",
      "$\\frac{\\pi}{4}$",
      "$2\\pi$"
    ],
    "correctIndex": 0,
    "correctAnswer": "$\\frac{\\pi}{2}$",
    "hintEn": "Use the half-angle identity: $\\sin^2(x) = \\frac{1 - \\cos(2x)}{2}$.",
    "hintAr": "استخدم متطابقة نصف الزاوية: $\\sin^2(x) = \\frac{1 - \\cos(2x)}{2}$.",
    "teacherTipEn": "Notice that $\\int_0^\\pi \\sin^2(x) dx = \\int_0^\\pi \\cos^2(x) dx = \\frac{1}{2} \\int_0^\\pi 1 dx = \\frac{\\pi}{2}$.",
    "teacherTipAr": "لاحظ أن تكامل $\\sin^2(x)$ يساوي تكامل $\\cos^2(x)$ على نصف الدورة، ومجموعهما يساوي $\\pi$.",
    "stepByStepSolutionEn": [
      "Rewrite: $\\int_0^\\pi \\frac{1 - \\cos(2x)}{2} dx = \\left[ \\frac{x}{2} - \\frac{\\sin(2x)}{4} \\right]_0^\\pi$.",
      "Evaluate: $\\left( \\frac{\\pi}{2} - 0 \\right) - (0 - 0) = \\frac{\\pi}{2}$."
    ],
    "stepByStepSolutionAr": [
      "تحويل المقدار: $\\int_0^\\pi \\frac{1 - \\cos(2x)}{2} dx$.",
      "الدالة المقابلة: $[x/2 - \\sin(2x)/4]_0^\\pi = \\frac{\\pi}{2}$."
    ]
  },
  {
    "id": "calc_ch4_db_med_106",
    "titleEn": "Area Enclosed by Two Intersecting Parabolas",
    "titleAr": "المساحة المحصورة بين قطعين مكافئين متقاطعين",
    "difficulty": "medium",
    "questionEn": "Find the area enclosed between the two curves $y^2 = 4x$ and $x^2 = 4y$.",
    "questionAr": "أوجد مساحة المنطقة المحصورة بين المنحنيين $y^2 = 4x$ و $x^2 = 4y$.",
    "optionsEn": [
      "$\\frac{16}{3}\\text{ sq units}$",
      "$\\frac{8}{3}\\text{ sq units}$",
      "$\\frac{32}{3}\\text{ sq units}$",
      "$\\frac{64}{3}\\text{ sq units}$"
    ],
    "optionsAr": [
      "$\\frac{16}{3}\\text{ وحدة مربعة}$",
      "$\\frac{8}{3}\\text{ وحدة مربعة}$",
      "$\\frac{32}{3}\\text{ وحدة مربعة}$",
      "$\\frac{64}{3}\\text{ وحدة مربعة}$"
    ],
    "correctIndex": 0,
    "correctAnswer": "$\\frac{16}{3}\\text{ sq units}$",
    "hintEn": "Intersections occur at $(0, 0)$ and $(4, 4)$. Area is $\\int_0^4 (2\\sqrt{x} - \\frac{x^2}{4}) dx$.",
    "hintAr": "نقاط التقاطع عند $(0, 0)$ و $(4, 4)$. المساحة هي $\\int_0^4 (2\\sqrt{x} - \\frac{x^2}{4}) dx$.",
    "teacherTipEn": "The area between $y^2 = 4ax$ and $x^2 = 4by$ is always $\\frac{16}{3}ab$. Here $a = 1, b = 1$, so Area $= \\frac{16}{3}$.",
    "teacherTipAr": "قاعدة شهيرة: المساحة بين $y^2 = 4ax$ و $x^2 = 4by$ تساوي دائماً $\\frac{16}{3}ab$. هنا $a = 1, b = 1$.",
    "stepByStepSolutionEn": [
      "Solve $y = \\frac{x^2}{4} \\implies \\left(\\frac{x^2}{4}\\right)^2 = 4x \\implies x^4 = 64x \\implies x(x^3 - 64) = 0$. Roots: $x = 0, 4$.",
      "Area: $A = \\int_0^4 \\left( 2x^{1/2} - \\frac{x^2}{4} \\right) dx = \\left[ \\frac{4}{3}x^{3/2} - \\frac{x^3}{12} \\right]_0^4$.",
      "Substitute $x = 4$: $\\frac{4}{3}(8) - \\frac{64}{12} = \\frac{32}{3} - \\frac{16}{3} = \\frac{16}{3}\\text{ sq units}$."
    ],
    "stepByStepSolutionAr": [
      "التقاطع: $x = 0$ و $x = 4$.",
      "المساحة: $A = \\int_0^4 (2\\sqrt{x} - x^2/4) dx = [\\frac{4}{3}x^{3/2} - \\frac{x^3}{12}]_0^4$.",
      "الناتج: $\\frac{32}{3} - \\frac{16}{3} = \\frac{16}{3}\\text{ وحدة مربعة}$."
    ]
  },
  {
    "id": "calc_ch4_db_med_107",
    "titleEn": "Integration by Trigonometric Substitution",
    "titleAr": "تكامل بتعويض مثلثي لدائرة",
    "difficulty": "medium",
    "questionEn": "Evaluate the definite integral: $\\int_{0}^{2} \\sqrt{4 - x^2} \\, dx$.",
    "questionAr": "احسب التكامل المحدد: $\\int_{0}^{2} \\sqrt{4 - x^2} \\, dx$.",
    "optionsEn": [
      "$\\pi$",
      "$2\\pi$",
      "$\\frac{\\pi}{2}$",
      "$4$"
    ],
    "optionsAr": [
      "$\\pi$",
      "$2\\pi$",
      "$\\frac{\\pi}{2}$",
      "$4$"
    ],
    "correctIndex": 0,
    "correctAnswer": "$\\pi$",
    "hintEn": "Recognize the geometry: $y = \\sqrt{4 - x^2}$ is a quadrant of a circle of radius $2$.",
    "hintAr": "تذكر المعنى الهندسي: $y = \\sqrt{4 - x^2}$ يمثل ربع دائرة نصف قطرها $2$.",
    "teacherTipEn": "Evaluating through geometric area is instantaneous: $\\frac{1}{4}\\pi R^2 = \\frac{1}{4}\\pi(2^2) = \\pi$.",
    "teacherTipAr": "الحل بالمعنى الهندسي فوري: مساحة ربع دائرة نصف قطرها 2 تساوي $\\frac{1}{4}\\pi (2^2) = \\pi$.",
    "stepByStepSolutionEn": [
      "Geometric interpretation: area of a quarter circle of radius $R = 2$.",
      "Area: $A = \\frac{1}{4}\\pi R^2 = \\frac{1}{4}\\pi(4) = \\pi$."
    ],
    "stepByStepSolutionAr": [
      "التفسير الهندسي: مساحة ربع دائرة نصف قطرها $R = 2$.",
      "المساحة: $\\frac{1}{4}\\pi (2^2) = \\pi$."
    ]
  },
  {
    "id": "calc_ch4_db_med_108",
    "titleEn": "Volume of Revolution About the Y-Axis",
    "titleAr": "حجم دوراني حول محور الصادات",
    "difficulty": "medium",
    "questionEn": "Find the volume generated by revolving the region bounded by $y = x^3$, $y = 8$, and the y-axis about the y-axis.",
    "questionAr": "أوجد حجم الجسم الناشئ عن دوران المنطقة المحدودة بالمنحنى $y = x^3$ والمستقيم $y = 8$ ومحور الصادات دورة كاملة حول محور الصادات.",
    "optionsEn": [
      "$\\frac{96\\pi}{5}\\text{ cubic units}$",
      "$\\frac{48\\pi}{5}\\text{ cubic units}$",
      "$\\frac{64\\pi}{5}\\text{ cubic units}$",
      "$16\\pi\\text{ cubic units}$"
    ],
    "optionsAr": [
      "$\\frac{96\\pi}{5}\\text{ وحدة مكعبة}$",
      "$\\frac{48\\pi}{5}\\text{ وحدة مكعبة}$",
      "$\\frac{64\\pi}{5}\\text{ وحدة مكعبة}$",
      "$16\\pi\\text{ وحدة مكعبة}$"
    ],
    "correctIndex": 0,
    "correctAnswer": "$\\frac{96\\pi}{5}\\text{ cubic units}$",
    "hintEn": "Express $x$ in terms of $y$: $x = y^{1/3}$. Use $V = \\pi \\int_0^8 x^2 dy$.",
    "hintAr": "عبر عن $x$ بدلالة $y$: $x = y^{1/3}$. وطبق $V = \\pi \\int_0^8 x^2 dy$.",
    "teacherTipEn": "When rotating around the y-axis, integrate with respect to $y$ using $x = f(y)$.",
    "teacherTipAr": "عند الدوران حول محور الصادات، نكامل بالنسبة للمتغير $y$ باستخدام $x = f(y)$.",
    "stepByStepSolutionEn": [
      "Invert function: $x = y^{1/3} \\implies x^2 = y^{2/3}$.",
      "Volume formula: $V = \\pi \\int_0^8 y^{2/3} dy = \\pi \\left[ \\frac{3}{5}y^{5/3} \\right]_0^8$.",
      "Substitute $y = 8$: $8^{5/3} = (2)^5 = 32$.",
      "Result: $\\pi \\cdot \\frac{3}{5}(32) = \\frac{96\\pi}{5}\\text{ cubic units}$."
    ],
    "stepByStepSolutionAr": [
      "دالة $x$ بدلالة $y$: $x^2 = y^{2/3}$.",
      "قانون الحجم: $V = \\pi \\int_0^8 y^{2/3} dy = \\frac{3\\pi}{5}[y^{5/3}]_0^8$.",
      "التعويض بـ $y = 8$: $8^{5/3} = 32$. الناتج $= \\frac{96\\pi}{5}\\text{ وحدة مكعبة}$."
    ]
  },
  {
    "id": "calc_ch4_db_med_109",
    "titleEn": "Definite Integral Evaluation of Product of Sines",
    "titleAr": "تكامل محدد لحاصل ضرب دالتي جيب",
    "difficulty": "medium",
    "questionEn": "Evaluate the definite integral: $\\int_{0}^{\\pi} \\sin(3x) \\sin(x) \\, dx$.",
    "questionAr": "احسب التكامل المحدد: $\\int_{0}^{\\pi} \\sin(3x) \\sin(x) \\, dx$.",
    "optionsEn": [
      "$0$",
      "$\\frac{\\pi}{2}$",
      "$\\frac{\\pi}{4}$",
      "$1$"
    ],
    "optionsAr": [
      "$0$",
      "$\\frac{\\pi}{2}$",
      "$\\frac{\\pi}{4}$",
      "$1$"
    ],
    "correctIndex": 0,
    "correctAnswer": "$0$",
    "hintEn": "Use product-to-sum identity: $\\sin(A)\\sin(B) = \\frac{1}{2}[\\cos(A - B) - \\cos(A + B)]$.",
    "hintAr": "استخدم متطابقة تحويل الضرب إلى مجموع: $\\sin(A)\\sin(B) = \\frac{1}{2}[\\cos(A - B) - \\cos(A + B)]$.",
    "teacherTipEn": "Orthogonality of sines: $\\int_0^\\pi \\sin(nx) \\sin(mx) dx = 0$ whenever $n \\neq m$.",
    "teacherTipAr": "خاصية تعامد الدوال المثلثية: تكامل $\\sin(nx)\\sin(mx)$ على $[0, \\pi]$ يساوي صفراً لأي قيمتين غير متساويتين $n \\neq m$.",
    "stepByStepSolutionEn": [
      "Product-to-sum: $\\sin(3x)\\sin(x) = \\frac{1}{2}[\\cos(2x) - \\cos(4x)]$.",
      "Integrate: $\\frac{1}{2} \\left[ \\frac{\\sin(2x)}{2} - \\frac{\\sin(4x)}{4} \\right]_0^\\pi$.",
      "Since $\\sin(2\\pi) = \\sin(4\\pi) = \\sin(0) = 0$, the value is $0$."
    ],
    "stepByStepSolutionAr": [
      "تحويل الضرب إلى فرق: $\\frac{1}{2}[\\cos(2x) - \\cos(4x)]$.",
      "إجراء التكامل المحدد من $0$ إلى $\\pi$: الناتج هو $0$."
    ]
  }
],
  hots: [
  {
    "id": "calc_ch4_db_hots_101",
    "titleEn": "Leibniz Rule for Variable Limits of Integration",
    "titleAr": "قاعدة لايبنتز لمشتقة تكامل بحدود متغيرة",
    "difficulty": "hots",
    "questionEn": "Find $\\frac{d}{dx} \\left[ \\int_0^{x^2} \\sqrt{1 + t^2} \\, dt \\right]$.",
    "questionAr": "أوجد قيمة $\\frac{d}{dx} \\left[ \\int_0^{x^2} \\sqrt{1 + t^2} \\, dt \\right]$.",
    "optionsEn": [
      "$2x \\sqrt{1 + x^4}$",
      "$\\sqrt{1 + x^4}$",
      "$2x \\sqrt{1 + x^2}$",
      "$\\frac{x}{\\sqrt{1+x^4}}$"
    ],
    "optionsAr": [
      "2س √(1 + س⁴)",
      "√(1 + س⁴)",
      "2س √(1 + س²)",
      "س / √(1 + س⁴)"
    ],
    "correctAnswer": "$2x \\sqrt{1 + x^4}$",
    "correctIndex": 0,
    "hintEn": "d/dx int_0^{u(x)} f(t) dt = f(u(x)) * u'(x) = sqrt(1 + (x^2)^2) * 2x = 2x sqrt(1 + x^4).",
    "hintAr": "قاعدة لايبنتز: نعوض بالحد العلوي ونضرب في مشتقته.",
    "stepByStepSolutionEn": [
      "1. Formulate advanced integration problem.",
      "2. Deduce exact result."
    ],
    "stepByStepSolutionAr": [
      "١. صياغة مسألة التكامل المتقدمة.",
      "٢. استنتاج الناتج الدقيق."
    ],
    "teacherTipEn": "STEM Baccalaureate and Ministry High-Order Thinking Problem.",
    "teacherTipAr": "مسألة متقدمة من بنك أسئلة الوزارة ومدارس المتفوقين STEM."
  },
  {
    "id": "calc_ch4_db_hots_102",
    "titleEn": "L'Hopital Rule with Definite Integral Limit",
    "titleAr": "نهاية تتضمن تكاملاً محدداً وقاعدة لوبيتال",
    "difficulty": "hots",
    "questionEn": "Evaluate the limit: $\\lim_{x \\to 0} \\frac{\\int_0^x \\sin(t^2) \\, dt}{x^3}$.",
    "questionAr": "احسب قيمة النهاية: $\\lim_{x \\to 0} \\frac{\\int_0^x \\sin(t^2) \\, dt}{x^3}$.",
    "optionsEn": [
      "$\\frac{1}{3}$",
      "$1$",
      "$0$",
      "$\\frac{1}{2}$"
    ],
    "optionsAr": [
      "1/3",
      "1",
      "0",
      "1/2"
    ],
    "correctAnswer": "$\\frac{1}{3}$",
    "correctIndex": 0,
    "hintEn": "Differentiate numerator and denominator: lim sin(x^2) / (3x^2) = 1/3.",
    "hintAr": "باشتقاق البسط والمقام حسب قاعدة لوبيتال: جا(س²)/(3س²) = 1/3.",
    "stepByStepSolutionEn": [
      "1. Formulate advanced integration problem.",
      "2. Deduce exact result."
    ],
    "stepByStepSolutionAr": [
      "١. صياغة مسألة التكامل المتقدمة.",
      "٢. استنتاج الناتج الدقيق."
    ],
    "teacherTipEn": "STEM Baccalaureate and Ministry High-Order Thinking Problem.",
    "teacherTipAr": "مسألة متقدمة من بنك أسئلة الوزارة ومدارس المتفوقين STEM."
  },
  {
    "id": "calc_ch4_db_hots_103",
    "titleEn": "Integral of Logarithm of Tangent (King's Property)",
    "titleAr": "تكامل لوغاريتم دالة الظل على الربع الأول",
    "difficulty": "hots",
    "questionEn": "Evaluate $\\int_0^{\\pi/2} \\ln(\\tan x) \\, dx$.",
    "questionAr": "احسب قيمة التكامل $\\int_0^{\\pi/2} \\ln(\\tan x) \\, dx$.",
    "optionsEn": [
      "$0$",
      "$\\frac{\\pi}{2}$",
      "$\\ln 2$",
      "$-\\frac{\\pi}{2}\\ln 2$"
    ],
    "optionsAr": [
      "0",
      "ط / 2",
      "لو_هـ 2",
      "-(ط/2) لو_هـ 2"
    ],
    "correctAnswer": "$0$",
    "correctIndex": 0,
    "hintEn": "Using x -> pi/2 - x: tan becomes cot = 1/tan. I = -I => 2I = 0 => I = 0.",
    "hintAr": "بالتعويض عن س بـ (ط/2 - س) يتحول ظا إلى ظتا ومجموع التكاملين صفر.",
    "stepByStepSolutionEn": [
      "1. Formulate advanced integration problem.",
      "2. Deduce exact result."
    ],
    "stepByStepSolutionAr": [
      "١. صياغة مسألة التكامل المتقدمة.",
      "٢. استنتاج الناتج الدقيق."
    ],
    "teacherTipEn": "STEM Baccalaureate and Ministry High-Order Thinking Problem.",
    "teacherTipAr": "مسألة متقدمة من بنك أسئلة الوزارة ومدارس المتفوقين STEM."
  },
  {
    "id": "calc_ch4_db_hots_104",
    "titleEn": "Symmetric Integral with Exponential and Odd Part",
    "titleAr": "تكامل دالة كسرية بمقام أسي على فترة متماثلة",
    "difficulty": "hots",
    "questionEn": "Evaluate $\\int_{-1}^1 \\frac{x^4 \\sin x}{1 + x^2} dx$.",
    "questionAr": "احسب قيمة $\\int_{-1}^1 \\frac{x^4 \\sin x}{1 + x^2} dx$.",
    "optionsEn": [
      "$0$",
      "$1$",
      "$\\frac{\\pi}{4}$",
      "$\\frac{1}{2}$"
    ],
    "optionsAr": [
      "0",
      "1",
      "ط / 4",
      "1/2"
    ],
    "correctAnswer": "$0$",
    "correctIndex": 0,
    "hintEn": "The integrand is odd because (-x)^4 sin(-x) / (1 + (-x)^2) = - (x^4 sin x)/(1 + x^2).",
    "hintAr": "الدالة فردية وتكامل الدالة الفردية على فترة متماثلة حول الصفر يساوي صفراً.",
    "stepByStepSolutionEn": [
      "1. Formulate advanced integration problem.",
      "2. Deduce exact result."
    ],
    "stepByStepSolutionAr": [
      "١. صياغة مسألة التكامل المتقدمة.",
      "٢. استنتاج الناتج الدقيق."
    ],
    "teacherTipEn": "STEM Baccalaureate and Ministry High-Order Thinking Problem.",
    "teacherTipAr": "مسألة متقدمة من بنك أسئلة الوزارة ومدارس المتفوقين STEM."
  },
  {
    "id": "calc_ch4_db_hots_105",
    "titleEn": "Rotation About Shifted Horizontal Axis",
    "titleAr": "دوران المنطقة حول مستقيم أفقي مواز لمحور السينات",
    "difficulty": "hots",
    "questionEn": "Find the volume of the solid generated by revolving the region bounded by $y = x^2$ and $y = 4$ about the line $y = 4$.",
    "questionAr": "أوجد حجم الجسم الناشئ من دوران المنطقة المحصورة بين $y = x^2$ والمستقيم $y = 4$ حول المستقيم $y = 4$.",
    "optionsEn": [
      "$\\frac{512\\pi}{15}$",
      "$\\frac{256\\pi}{15}$",
      "$\\frac{128\\pi}{5}$",
      "$\\frac{64\\pi}{3}$"
    ],
    "optionsAr": [
      "512ط / 15",
      "256ط / 15",
      "128ط / 5",
      "64ط / 3"
    ],
    "correctAnswer": "$\\frac{512\\pi}{15}$",
    "correctIndex": 0,
    "hintEn": "V = pi int_{-2}^2 (4 - x^2)^2 dx = 2 pi int_0^2 (16 - 8x^2 + x^4) dx = 2 pi (32 - 64/3 + 32/5) = 512pi/15.",
    "hintAr": "نصف القطر هو (4 - س²)، والحجم = ط × تكامل (4 - س²)² من -2 إلى 2 = 512ط/15.",
    "stepByStepSolutionEn": [
      "1. Formulate advanced integration problem.",
      "2. Deduce exact result."
    ],
    "stepByStepSolutionAr": [
      "١. صياغة مسألة التكامل المتقدمة.",
      "٢. استنتاج الناتج الدقيق."
    ],
    "teacherTipEn": "STEM Baccalaureate and Ministry High-Order Thinking Problem.",
    "teacherTipAr": "مسألة متقدمة من بنك أسئلة الوزارة ومدارس المتفوقين STEM."
  },
  {
    "id": "calc_ch4_db_hots_106",
    "titleEn": "Volume of Torus by Pappus's Theorem / Integration",
    "titleAr": "حجم الحلقة الدورانية (التورس) بالتكامل",
    "difficulty": "hots",
    "questionEn": "A circular disk of radius $r = 2$ centered at $(5, 0)$ is revolved about the y-axis. Find the volume of the resulting torus.",
    "questionAr": "قرص دائري نصف قطره $r = 2$ ومركزه النقطة $(5، 0)$ دار دورة كاملة حول محور الصادات. أوجد حجم الحلقة الدورانية الناتجة.",
    "optionsEn": [
      "$40\\pi^2$",
      "$20\\pi^2$",
      "$80\\pi^2$",
      "$10\\pi^2$"
    ],
    "optionsAr": [
      "40ط²",
      "20ط²",
      "80ط²",
      "10ط²"
    ],
    "correctAnswer": "$40\\pi^2$",
    "correctIndex": 0,
    "hintEn": "V = (Area of disk) * (Circumference of centroid path) = (pi r^2) * (2 pi R) = 4pi * 10pi = 40pi^2.",
    "hintAr": "نظرية بابوس: الحجم = مساحة الدائرة × محيط مسار المركز = (4ط) × (10ط) = 40ط².",
    "stepByStepSolutionEn": [
      "1. Formulate advanced integration problem.",
      "2. Deduce exact result."
    ],
    "stepByStepSolutionAr": [
      "١. صياغة مسألة التكامل المتقدمة.",
      "٢. استنتاج الناتج الدقيق."
    ],
    "teacherTipEn": "STEM Baccalaureate and Ministry High-Order Thinking Problem.",
    "teacherTipAr": "مسألة متقدمة من بنك أسئلة الوزارة ومدارس المتفوقين STEM."
  },
  {
    "id": "calc_ch4_db_hots_107",
    "titleEn": "Steinmetz Solid: Intersection of Two Cylinders",
    "titleAr": "حجم التقاطع المتعامد لأسطوانتين بنفس نصف القطر",
    "difficulty": "hots",
    "questionEn": "Two identical cylinders of radius $R = 3$ intersect at right angles through their axes. Find the volume of their intersection.",
    "questionAr": "أسطوانتان دائريتان قائمتان متطابقتان نصف قطر كل منهما $R = 3$ تتقاطعان ومحوراهما متعامدان. ما حجم المجسم المشترك بينهما؟",
    "optionsEn": [
      "$144$",
      "$72\\pi$",
      "$144\\pi$",
      "$108$"
    ],
    "optionsAr": [
      "144",
      "72ط",
      "144ط",
      "108"
    ],
    "correctAnswer": "$144$",
    "correctIndex": 0,
    "hintEn": "Volume of bicylinder intersection = (16/3) R^3 = (16/3)(27) = 144.",
    "hintAr": "حجم تقاطع أسطوانتين متعامدتين = 16/3 نق³ = 16/3 × 27 = 144 وحدة مكعبة.",
    "stepByStepSolutionEn": [
      "1. Formulate advanced integration problem.",
      "2. Deduce exact result."
    ],
    "stepByStepSolutionAr": [
      "١. صياغة مسألة التكامل المتقدمة.",
      "٢. استنتاج الناتج الدقيق."
    ],
    "teacherTipEn": "STEM Baccalaureate and Ministry High-Order Thinking Problem.",
    "teacherTipAr": "مسألة متقدمة من بنك أسئلة الوزارة ومدارس المتفوقين STEM."
  },
  {
    "id": "calc_ch4_db_hots_108",
    "titleEn": "Work Done Pumping Water from Hemispherical Tank",
    "titleAr": "الشغل المبذول لتفريغ خزان نصف كروي بالتكامل",
    "difficulty": "hots",
    "questionEn": "A hemispherical tank of radius $R = 4\\text{ m}$ is full of water (density $\\rho$, gravity $g$). The work done pumping all water over the top rim is:",
    "questionAr": "خزان على شكل نصف كرة نصف قطرها $R = 4\\text{ م}$ ممتلئ بالماء (الكثافة $\\rho$، عجلة الجاذبية $g$). الشغل المبذول لضخ كامل الماء لأعلى حافة الخزان يُعطى بالتكامل ويساوي:",
    "optionsEn": [
      "$64\\pi \\rho g$",
      "$32\\pi \\rho g$",
      "$128\\pi \\rho g$",
      "$256\\pi \\rho g$"
    ],
    "optionsAr": [
      "64ط ث ج",
      "32ط ث ج",
      "128ط ث ج",
      "256ط ث ج"
    ],
    "correctAnswer": "$64\\pi \\rho g$",
    "correctIndex": 0,
    "hintEn": "W = rho g pi int_0^4 y(16 - y^2) dy = rho g pi [8y^2 - y^4/4]_0^4 = rho g pi (128 - 64) = 64 pi rho g.",
    "hintAr": "الشغل = ث ج ط × تكامل ص(16 - ص²) د ص من 0 إلى 4 = 64ط ث ج.",
    "stepByStepSolutionEn": [
      "1. Formulate advanced integration problem.",
      "2. Deduce exact result."
    ],
    "stepByStepSolutionAr": [
      "١. صياغة مسألة التكامل المتقدمة.",
      "٢. استنتاج الناتج الدقيق."
    ],
    "teacherTipEn": "STEM Baccalaureate and Ministry High-Order Thinking Problem.",
    "teacherTipAr": "مسألة متقدمة من بنك أسئلة الوزارة ومدارس المتفوقين STEM."
  },
  {
    "id": "calc_ch4_db_hots_109",
    "titleEn": "Centroid of Parabolic Planar Region",
    "titleAr": "الإحداثي الصادي لمركز ثقل صفيحة متجانسة محصورة بين قطع مكافئ ومحور السينات",
    "difficulty": "hots",
    "questionEn": "Find the y-coordinate of the centroid of the region bounded by $y = 4 - x^2$ and the x-axis.",
    "questionAr": "أوجد الإحداثي الصادي لمركز ثقل صفيحة مستوية متجانسة محددة بالمنحنى $y = 4 - x^2$ ومحور السينات.",
    "optionsEn": [
      "$\\frac{8}{5}$",
      "$\\frac{4}{5}$",
      "$2$",
      "$\\frac{16}{5}$"
    ],
    "optionsAr": [
      "8/5",
      "4/5",
      "2",
      "16/5"
    ],
    "correctAnswer": "$\\frac{8}{5}$",
    "correctIndex": 0,
    "hintEn": "y_bar = (1/(2A)) int_{-2}^2 y^2 dx = (1/(2 * 32/3)) int_{-2}^2 (4 - x^2)^2 dx = (3/64)(512/15) = 8/5.",
    "hintAr": "الإحداثي الصادي لمركز الثقل = 8/5.",
    "stepByStepSolutionEn": [
      "1. Formulate advanced integration problem.",
      "2. Deduce exact result."
    ],
    "stepByStepSolutionAr": [
      "١. صياغة مسألة التكامل المتقدمة.",
      "٢. استنتاج الناتج الدقيق."
    ],
    "teacherTipEn": "STEM Baccalaureate and Ministry High-Order Thinking Problem.",
    "teacherTipAr": "مسألة متقدمة من بنك أسئلة الوزارة ومدارس المتفوقين STEM."
  },
  {
    "id": "calc_ch4_db_hots_110",
    "titleEn": "Integral Leading to Complete Gamma / Factorial",
    "titleAr": "تكامل دالة أسية مضروبة في قوة لـ س",
    "difficulty": "hots",
    "questionEn": "Evaluate $\\int_0^\\infty x^3 e^{-x} dx$.",
    "questionAr": "احسب قيمة $\\int_0^\\infty x^3 e^{-x} dx$.",
    "optionsEn": [
      "$6$",
      "$3$",
      "$24$",
      "$2$"
    ],
    "optionsAr": [
      "6",
      "3",
      "24",
      "2"
    ],
    "correctAnswer": "$6$",
    "correctIndex": 0,
    "hintEn": "Standard Gamma integral: Gamma(4) = 3! = 6.",
    "hintAr": "تكامل دالة غاما الشهير: مضروب 3 = 6.",
    "stepByStepSolutionEn": [
      "1. Formulate advanced integration problem.",
      "2. Deduce exact result."
    ],
    "stepByStepSolutionAr": [
      "١. صياغة مسألة التكامل المتقدمة.",
      "٢. استنتاج الناتج الدقيق."
    ],
    "teacherTipEn": "STEM Baccalaureate and Ministry High-Order Thinking Problem.",
    "teacherTipAr": "مسألة متقدمة من بنك أسئلة الوزارة ومدارس المتفوقين STEM."
  },
  {
    "id": "calc_ch4_db_hots_111",
    "titleEn": "Arc Length Integral Formulation",
    "titleAr": "صيغة طول قوس المنحنى",
    "difficulty": "hots",
    "questionEn": "The arc length of $y = f(x)$ from $x = a$ to $x = b$ is given by:",
    "questionAr": "طول قوس المنحنى $y = f(x)$ من $x = a$ إلى $x = b$ يُعطى بالتكامل المحدد:",
    "optionsEn": [
      "$\\int_a^b \\sqrt{1 + [f'(x)]^2} \\, dx$",
      "$\\int_a^b (1 + [f'(x)]^2) dx$",
      "$\\int_a^b \\sqrt{1 + f(x)} dx$",
      "$\\pi \\int_a^b \\sqrt{1 + [f'(x)]^2} dx$"
    ],
    "optionsAr": [
      "تكامل √(1 + [د'(س)]²) د س",
      "تكامل (1 + [د'(س)]²) د س",
      "تكامل √(1 + د(س)) د س",
      "ط × تكامل √(1 + [د'(س)]²) د س"
    ],
    "correctAnswer": "$\\int_a^b \\sqrt{1 + [f'(x)]^2} \\, dx$",
    "correctIndex": 0,
    "hintEn": "Standard arc length formula: L = int sqrt(1 + (dy/dx)^2) dx.",
    "hintAr": "الصيغة القياسية لطول القوس: تكامل الجذر التربيعي لـ 1 + (المشتقة)².",
    "stepByStepSolutionEn": [
      "1. Formulate advanced integration problem.",
      "2. Deduce exact result."
    ],
    "stepByStepSolutionAr": [
      "١. صياغة مسألة التكامل المتقدمة.",
      "٢. استنتاج الناتج الدقيق."
    ],
    "teacherTipEn": "STEM Baccalaureate and Ministry High-Order Thinking Problem.",
    "teacherTipAr": "مسألة متقدمة من بنك أسئلة الوزارة ومدارس المتفوقين STEM."
  },
  {
    "id": "calc_ch4_db_hots_112",
    "titleEn": "Surface Area of Revolution Formulation",
    "titleAr": "صيغة المساحة السطحية لمجسم دوراني",
    "difficulty": "hots",
    "questionEn": "The surface area of the solid obtained by revolving $y = f(x) \\geq 0$ from $x = a$ to $x = b$ about the x-axis is:",
    "questionAr": "مساحة السطح المتولد من دوران منحنى $y = f(x) \\geq 0$ حول محور السينات تُعطى بالقانون:",
    "optionsEn": [
      "$2\\pi \\int_a^b f(x) \\sqrt{1 + [f'(x)]^2} \\, dx$",
      "$\\pi \\int_a^b [f(x)]^2 dx$",
      "$2\\pi \\int_a^b [f'(x)]^2 dx$",
      "$\\pi \\int_a^b f(x) dx$"
    ],
    "optionsAr": [
      "2ط × تكامل د(س) √(1 + [د'(س)]²) د س",
      "ط × تكامل [د(س)]² د س",
      "2ط × تكامل [د'(س)]² د س",
      "ط × تكامل د(س) د س"
    ],
    "correctAnswer": "$2\\pi \\int_a^b f(x) \\sqrt{1 + [f'(x)]^2} \\, dx$",
    "correctIndex": 0,
    "hintEn": "Surface area = 2 pi int y ds = 2 pi int f(x) sqrt(1 + (f')^2) dx.",
    "hintAr": "المساحة السطحية للمجسم الدوراني = 2ط × تكامل ص × جذر(1 + (ص')²).",
    "stepByStepSolutionEn": [
      "1. Formulate advanced integration problem.",
      "2. Deduce exact result."
    ],
    "stepByStepSolutionAr": [
      "١. صياغة مسألة التكامل المتقدمة.",
      "٢. استنتاج الناتج الدقيق."
    ],
    "teacherTipEn": "STEM Baccalaureate and Ministry High-Order Thinking Problem.",
    "teacherTipAr": "مسألة متقدمة من بنك أسئلة الوزارة ومدارس المتفوقين STEM."
  },
  {
    "id": "calc_ch4_db_hots_113",
    "titleEn": "Integral of Logarithm of Sine from 0 to pi/2",
    "titleAr": "التكامل القياسي للوغاريتم جيب الزاوية",
    "difficulty": "hots",
    "questionEn": "Evaluate Euler's integral: $\\int_0^{\\pi/2} \\ln(\\sin x) \\, dx$.",
    "questionAr": "احسب قيمة تكامل أويلر الشهير: $\\int_0^{\\pi/2} \\ln(\\sin x) \\, dx$.",
    "optionsEn": [
      "$-\\frac{\\pi}{2}\\ln 2$",
      "$\\frac{\\pi}{2}\\ln 2$",
      "$-\\pi \\ln 2$",
      "$0$"
    ],
    "optionsAr": [
      "-(ط/2) لو_هـ 2",
      "(ط/2) لو_هـ 2",
      "-ط لو_هـ 2",
      "0"
    ],
    "correctAnswer": "$-\\frac{\\pi}{2}\\ln 2$",
    "correctIndex": 0,
    "hintEn": "Famous Euler integral result is -(pi/2) ln 2.",
    "hintAr": "تكامل أويلر الكلاسيكي الشهير = -(ط/2) لو_هـ 2.",
    "stepByStepSolutionEn": [
      "1. Formulate advanced integration problem.",
      "2. Deduce exact result."
    ],
    "stepByStepSolutionAr": [
      "١. صياغة مسألة التكامل المتقدمة.",
      "٢. استنتاج الناتج الدقيق."
    ],
    "teacherTipEn": "STEM Baccalaureate and Ministry High-Order Thinking Problem.",
    "teacherTipAr": "مسألة متقدمة من بنك أسئلة الوزارة ومدارس المتفوقين STEM."
  },
  {
    "id": "calc_ch4_db_hots_114",
    "titleEn": "Improper Integral Evaluation with Exponential Decay",
    "titleAr": "تكامل معتل لسرعة اضمحلال أسية",
    "difficulty": "hots",
    "questionEn": "Evaluate $\\int_0^\\infty e^{-3x} dx$.",
    "questionAr": "احسب قيمة التكامل المعتل $\\int_0^\\infty e^{-3x} dx$.",
    "optionsEn": [
      "$\\frac{1}{3}$",
      "$3$",
      "$1$",
      "Diverges"
    ],
    "optionsAr": [
      "1/3",
      "3",
      "1",
      "متباعد"
    ],
    "correctAnswer": "$\\frac{1}{3}$",
    "correctIndex": 0,
    "hintEn": "lim_{b->inf} [-1/3 e^(-3x)]_0^b = 0 - (-1/3) = 1/3.",
    "hintAr": "نهاية [-1/3 هـ^(-3س)] = 1/3.",
    "stepByStepSolutionEn": [
      "1. Formulate advanced integration problem.",
      "2. Deduce exact result."
    ],
    "stepByStepSolutionAr": [
      "١. صياغة مسألة التكامل المتقدمة.",
      "٢. استنتاج الناتج الدقيق."
    ],
    "teacherTipEn": "STEM Baccalaureate and Ministry High-Order Thinking Problem.",
    "teacherTipAr": "مسألة متقدمة من بنك أسئلة الوزارة ومدارس المتفوقين STEM."
  },
  {
    "id": "calc_ch4_db_hots_115",
    "titleEn": "Area Between Curve and Its Tangent Line",
    "titleAr": "المساحة المحصورة بين منحنى ومماسه",
    "difficulty": "hots",
    "questionEn": "Find the area enclosed between $y = x^3$ and its tangent line at $x = 1$.",
    "questionAr": "أوجد مساحة المنطقة المحصورة بين المنحنى $y = x^3$ ومماسه عند النقطة $(1، 1)$.",
    "optionsEn": [
      "$\\frac{27}{4}$",
      "$\\frac{9}{4}$",
      "$\\frac{81}{4}$",
      "$6$"
    ],
    "optionsAr": [
      "27/4",
      "9/4",
      "81/4",
      "6"
    ],
    "correctAnswer": "$\\frac{27}{4}$",
    "correctIndex": 0,
    "hintEn": "Tangent line is y = 3x - 2. Intersection: x^3 - 3x + 2 = (x - 1)^2 (x + 2) = 0 => x = -2, 1. Area = int_{-2}^1 (x^3 - 3x + 2) dx = 27/4.",
    "hintAr": "معادلة المماس ص = 3س - 2 ونقطة التقاطع الأخرى س = -2، والمساحة = 27/4.",
    "stepByStepSolutionEn": [
      "1. Formulate advanced integration problem.",
      "2. Deduce exact result."
    ],
    "stepByStepSolutionAr": [
      "١. صياغة مسألة التكامل المتقدمة.",
      "٢. استنتاج الناتج الدقيق."
    ],
    "teacherTipEn": "STEM Baccalaureate and Ministry High-Order Thinking Problem.",
    "teacherTipAr": "مسألة متقدمة من بنك أسئلة الوزارة ومدارس المتفوقين STEM."
  },
  {
    "id": "calc_ch4_db_hots_116",
    "titleEn": "Volume Revolved About Shifted Horizontal Axis",
    "titleAr": "حجم دوران منطقة حول محور أفقي مزاح ص = -1",
    "difficulty": "hots",
    "questionEn": "Find the volume of the solid generated by revolving the region bounded by $y = x^2$ and the line $y = 1$ about the shifted line $y = -1$.",
    "questionAr": "أوجد حجم الجسم الدوراني الناشئ من دوران المنطقة المحصورة بين $y = x^2$ والمستقيم $y = 1$ دورة كاملة حول المستقيم $y = -1$.",
    "optionsEn": [
      "$\\frac{64\\pi}{15}$",
      "$\\frac{32\\pi}{15}$",
      "$\\frac{16\\pi}{5}$",
      "$\\frac{8\\pi}{3}$"
    ],
    "optionsAr": [
      "64ط / 15",
      "32ط / 15",
      "16ط / 5",
      "8ط / 3"
    ],
    "correctAnswer": "$\\frac{64\\pi}{15}$",
    "correctIndex": 0,
    "hintEn": "Outer radius $R(x) = 1 - (-1) = 2$, inner radius $r(x) = x^2 - (-1) = x^2 + 1$.",
    "hintAr": "نصف القطر الخارجي R = 1 - (-1) = 2، ونصف القطر الداخلي r = س² - (-1) = س² + 1.",
    "stepByStepSolutionEn": [
      "1. Intersections: $x^2 = 1 \\implies x = \\pm 1$.",
      "2. The axis of rotation is $y = -1$.",
      "3. Outer radius: $R(x) = 1 - (-1) = 2$.",
      "4. Inner radius: $r(x) = x^2 - (-1) = x^2 + 1$.",
      "5. Volume: $V = \\pi \\int_{-1}^1 [2^2 - (x^2 + 1)^2] dx = 2\\pi \\int_0^1 (4 - x^4 - 2x^2 - 1) dx = 2\\pi \\int_0^1 (3 - 2x^2 - x^4) dx$.",
      "6. $V = 2\\pi \\left[ 3x - \\frac{2x^3}{3} - \\frac{x^5}{5} \\right]_0^1 = 2\\pi (3 - \\frac{2}{3} - \\frac{1}{5}) = 2\\pi (\\frac{32}{15}) = \\frac{64\\pi}{15}$."
    ],
    "stepByStepSolutionAr": [
      "١. نقاط التقاطع: س = ±1.",
      "٢. محور الدوران هو ص = -1.",
      "٣. نصف القطر الخارجي = 1 - (-1) = 2.",
      "٤. نصف القطر الداخلي = س² - (-1) = س² + 1.",
      "٥. الحجم = 2 ط × تكامل (3 - 2س² - س⁴) د س من 0 إلى 1.",
      "٦. الحجم = 2 ط × (3 - 2/3 - 1/5) = 64ط / 15."
    ],
    "teacherTipEn": "When revolving around $y = c$, radius is measured as $|y - c|$.",
    "teacherTipAr": "عند الدوران حول مستقيم ص = جـ، يحسب نصف القطر بالبعد العمودي |ص - جـ|."
  },
  {
    "id": "calc_ch4_db_hots_117",
    "titleEn": "Volume Revolved About Shifted Vertical Axis",
    "titleAr": "حجم دوران منطقة حول محور رأسي مزاح س = 2",
    "difficulty": "hots",
    "questionEn": "Find the volume of the solid generated by revolving the region bounded by $y = x^2$, the x-axis, and $x = 1$ about the line $x = 2$.",
    "questionAr": "أوجد حجم الجسم الدوراني الناشئ من دوران المنطقة المحصورة بين $y = x^2$ ومحور السينات والمستقيم $x = 1$ حول المستقيم $x = 2$.",
    "optionsEn": [
      "$\\frac{5\\pi}{6}$",
      "$\\frac{2\\pi}{3}$",
      "$\\frac{\\pi}{2}$",
      "$\\frac{7\\pi}{6}$"
    ],
    "optionsAr": [
      "5ط / 6",
      "2ط / 3",
      "ط / 2",
      "7ط / 6"
    ],
    "correctAnswer": "$\\frac{5\\pi}{6}$",
    "correctIndex": 0,
    "hintEn": "Use cylindrical shells with radius $(2 - x)$ and height $x^2$: $V = 2\\pi \\int_0^1 (2 - x)x^2 dx$.",
    "hintAr": "استخدم طريقة الأسطوانات الدورانية: نصف القطر = 2 - س والارتفاع = س².",
    "stepByStepSolutionEn": [
      "1. By the shell method, radius of a representative shell is $r(x) = 2 - x$ and height is $h(x) = x^2$.",
      "2. Volume formula: $V = 2\\pi \\int_0^1 (2 - x) x^2 dx = 2\\pi \\int_0^1 (2x^2 - x^3) dx$.",
      "3. $V = 2\\pi \\left[ \\frac{2x^3}{3} - \\frac{x^4}{4} \\right]_0^1 = 2\\pi (\\frac{2}{3} - \\frac{1}{4}) = 2\\pi (\\frac{5}{12}) = \\frac{5\\pi}{6}$."
    ],
    "stepByStepSolutionAr": [
      "١. بطريقة الأسطوانات الدائرية: نصف قطر الأسطوانة = 2 - س، وارتفاعها = س².",
      "٢. قانون الحجم: ح = 2 ط × تكامل (2 - س) س² د س من 0 إلى 1.",
      "٣. الحجم = 2 ط × (2/3 - 1/4) = 2 ط × (5/12) = 5ط / 6 وحدة مكعبة."
    ],
    "teacherTipEn": "The shell method is often far simpler than washer method when rotating around vertical lines.",
    "teacherTipAr": "طريقة الأسطوانات الدورانية أسهل وأسرع بكثير من الحلقات عند الدوران حول محاور رأسية."
  },
  {
    "id": "calc_ch4_db_hots_118",
    "titleEn": "Area of Loop of Curve",
    "titleAr": "مساحة عروة منحنى مغلقة ص² = س(س - 3)²",
    "difficulty": "hots",
    "questionEn": "Find the area enclosed by the loop of the curve $y^2 = x(3 - x)^2$ for $x \\in [0, 3]$.",
    "questionAr": "أوجد مساحة المنطقة المحصورة داخل عروة المنحنى $y^2 = x(3 - x)^2$ في الفترة $x \\in [0، 3]$.",
    "optionsEn": [
      "$\\frac{24\\sqrt{3}}{5}$",
      "$\\frac{12\\sqrt{3}}{5}$",
      "$\\frac{18\\sqrt{3}}{5}$",
      "$6\\sqrt{3}$"
    ],
    "optionsAr": [
      "24 جذر(3) / 5",
      "12 جذر(3) / 5",
      "18 جذر(3) / 5",
      "6 جذر(3)"
    ],
    "correctAnswer": "$\\frac{24\\sqrt{3}}{5}$",
    "correctIndex": 0,
    "hintEn": "Integrate $2\\int_0^3 (3 - x)\\sqrt{x} dx$.",
    "hintAr": "المساحة = 2 × تكامل (3 - س) جذر(س) د س من 0 إلى 3.",
    "stepByStepSolutionEn": [
      "1. The curve has two symmetric branches: $y = \\pm (3 - x)\\sqrt{x}$ on $[0, 3]$.",
      "2. Area: $A = 2\\int_0^3 (3\\sqrt{x} - x^{3/2}) dx$.",
      "3. $A = 2 \\left[ 2x^{3/2} - \\frac{2}{5}x^{5/2} \\right]_0^3 = 2 \\left[ 2(3\\sqrt{3}) - \\frac{2}{5}(9\\sqrt{3}) \\right] = 2\\sqrt{3} \\left( 6 - \\frac{18}{5} \\right) = 2\\sqrt{3}(\\frac{12}{5}) = \\frac{24\\sqrt{3}}{5}$."
    ],
    "stepByStepSolutionAr": [
      "١. المنحنى متماثل حول محور السينات بفرعين: ص = ± (3 - س) جذر(س).",
      "٢. المساحة = 2 × تكامل (3 جذر(س) - س^(3/2)) د س من 0 إلى 3.",
      "٣. م = 2 [2 س^(3/2) - (2/5) س^(5/2)] من 0 إلى 3.",
      "٤. م = 2 جذر(3) × (6 - 18/5) = 24 جذر(3) / 5."
    ],
    "teacherTipEn": "Loop area problems require finding the self-intersection points and exploiting symmetry.",
    "teacherTipAr": "مسائل عروات المنحنيات تتطلب إيجاد نقطة التقاطع الذاتي واستغلال التماثل حول المحور."
  },
  {
    "id": "calc_ch4_db_hots_119",
    "titleEn": "Area of Ellipse Derived by Definite Integral",
    "titleAr": "مساحة القطع الناقص بالتكامل المحدد",
    "difficulty": "hots",
    "questionEn": "Find the area enclosed by the ellipse $\\frac{x^2}{16} + \\frac{y^2}{9} = 1$.",
    "questionAr": "أوجد المساحة المحصورة داخل القطع الناقص $\\frac{x^2}{16} + \\frac{y^2}{9} = 1$.",
    "optionsEn": [
      "$12\\pi$",
      "$24\\pi$",
      "$16\\pi$",
      "$9\\pi$"
    ],
    "optionsAr": [
      "12 ط",
      "24 ط",
      "16 ط",
      "9 ط"
    ],
    "correctAnswer": "$12\\pi$",
    "correctIndex": 0,
    "hintEn": "Area of ellipse is $A = \\pi a b$, with $a = 4$ and $b = 3$.",
    "hintAr": "مساحة القطع الناقص = ط × أ × ب، حيث أ = 4 و ب = 3.",
    "stepByStepSolutionEn": [
      "1. Semi-major axis $a = 4$ and semi-minor axis $b = 3$.",
      "2. In the first quadrant: $y = 3\\sqrt{1 - \\frac{x^2}{16}} = \\frac{3}{4}\\sqrt{16 - x^2}$.",
      "3. Total area: $A = 4 \\int_0^4 \\frac{3}{4}\\sqrt{16 - x^2} dx = 3 \\int_0^4 \\sqrt{16 - x^2} dx$.",
      "4. The integral represents a quarter-circle of radius 4: $\\int_0^4 \\sqrt{16 - x^2} dx = \\frac{\\pi(4^2)}{4} = 4\\pi$.",
      "5. Total area $= 3(4\\pi) = 12\\pi$."
    ],
    "stepByStepSolutionAr": [
      "١. طول نصف المحور الأكبر أ = 4، ونصف الأصغر ب = 3.",
      "٢. في الربع الأول: ص = (3/4) جذر(16 - س²).",
      "٣. المساحة الكلية = 4 × (3/4) × تكامل جذر(16 - س²) د س من 0 إلى 4.",
      "٤. التكامل يمثل مساحة ربع دائرة نصف قطرها 4 = 4 ط.",
      "٥. المساحة الكلية للقطع الناقص = 3 × 4 ط = 12 ط."
    ],
    "teacherTipEn": "Formula: Area of an ellipse with semi-axes a and b is always $\\pi a b$.",
    "teacherTipAr": "القانون العام: مساحة القطع الناقص الذي نصفا محوريه أ و ب هي ط أ ب دائماً."
  },
  {
    "id": "calc_ch4_db_hots_120",
    "titleEn": "Volume of Ellipsoid of Revolution Prolate",
    "titleAr": "حجم مجسم القطع الناقص الدوراني حول المحور الأكبر",
    "difficulty": "hots",
    "questionEn": "Find the volume of the ellipsoid obtained by revolving the ellipse $\\frac{x^2}{9} + \\frac{y^2}{4} = 1$ about the x-axis.",
    "questionAr": "أوجد حجم مجسم القطع الناقص الدوراني الناتج من دوران القطع الناقص $\\frac{x^2}{9} + \\frac{y^2}{4} = 1$ حول محور السينات.",
    "optionsEn": [
      "$16\\pi$",
      "$24\\pi$",
      "$12\\pi$",
      "$36\\pi$"
    ],
    "optionsAr": [
      "16 ط",
      "24 ط",
      "12 ط",
      "36 ط"
    ],
    "correctAnswer": "$16\\pi$",
    "correctIndex": 0,
    "hintEn": "Volume is $V = \\frac{4}{3}\\pi a b^2$ with $a = 3$ and $b = 2$.",
    "hintAr": "حجم مجسم القطع الناقص الدوراني حول المحور س: ح = (4/3) ط أ ب².",
    "stepByStepSolutionEn": [
      "1. Revolve $y^2 = 4(1 - \\frac{x^2}{9})$ about the $x$-axis from $x = -3$ to $x = 3$.",
      "2. $V = \\pi \\int_{-3}^3 4(1 - \\frac{x^2}{9}) dx = 8\\pi \\int_0^3 (1 - \\frac{x^2}{9}) dx$.",
      "3. $V = 8\\pi \\left[ x - \\frac{x^3}{27} \\right]_0^3 = 8\\pi [3 - 1] = 8\\pi(2) = 16\\pi$."
    ],
    "stepByStepSolutionAr": [
      "١. دوران ص² = 4(1 - س²/9) حول محور السينات من -3 إلى 3.",
      "٢. الحجم = 8 ط × تكامل (1 - س²/9) د س من 0 إلى 3.",
      "٣. الحجم = 8 ط × [3 - 1] = 16 ط وحدة مكعبة."
    ],
    "teacherTipEn": "General formula for ellipsoid revolving about x-axis: $V = \\frac{4}{3}\\pi a b^2$.",
    "teacherTipAr": "القانون العام لدوران القطع الناقص حول محور السينات: ح = (4/3) ط أ ب²."
  },
  {
    "id": "calc_ch4_db_hots_121",
    "titleEn": "Volume of Ellipsoid of Revolution Oblate",
    "titleAr": "حجم مجسم القطع الناقص الدوراني حول المحور الأصغر",
    "difficulty": "hots",
    "questionEn": "Find the volume of the ellipsoid obtained by revolving the same ellipse $\\frac{x^2}{9} + \\frac{y^2}{4} = 1$ about the y-axis.",
    "questionAr": "أوجد حجم مجسم القطع الناقص الدوراني الناتج من دوران القطع الناقص نفسه $\\frac{x^2}{9} + \\frac{y^2}{4} = 1$ حول محور الصادات.",
    "optionsEn": [
      "$24\\pi$",
      "$16\\pi$",
      "$36\\pi$",
      "$18\\pi$"
    ],
    "optionsAr": [
      "24 ط",
      "16 ط",
      "36 ط",
      "18 ط"
    ],
    "correctAnswer": "$24\\pi$",
    "correctIndex": 0,
    "hintEn": "Volume is $V = \\frac{4}{3}\\pi a^2 b$ with $a = 3$ and $b = 2$.",
    "hintAr": "حجم مجسم القطع الناقص الدوراني حول المحور ص: ح = (4/3) ط أ² ب.",
    "stepByStepSolutionEn": [
      "1. Revolve $x^2 = 9(1 - \\frac{y^2}{4})$ about the $y$-axis from $y = -2$ to $y = 2$.",
      "2. $V = \\pi \\int_{-2}^2 9(1 - \\frac{y^2}{4}) dy = 18\\pi \\int_0^2 (1 - \\frac{y^2}{4}) dy$.",
      "3. $V = 18\\pi \\left[ y - \\frac{y^3}{12} \\right]_0^2 = 18\\pi [2 - \\frac{8}{12}] = 18\\pi [2 - \\frac{2}{3}] = 18\\pi (\\frac{4}{3}) = 24\\pi$."
    ],
    "stepByStepSolutionAr": [
      "١. دوران س² = 9(1 - ص²/4) حول محور الصادات من -2 إلى 2.",
      "٢. الحجم = 18 ط × تكامل (1 - ص²/4) د ص من 0 إلى 2.",
      "٣. الحجم = 18 ط × (2 - 2/3) = 18 ط × (4/3) = 24 ط وحدة مكعبة."
    ],
    "teacherTipEn": "Revolving about the minor axis produces an oblate spheroid with larger volume than the prolate one.",
    "teacherTipAr": "الدوران حول المحور الأصغر يعطي مجسماً مفلطحاً حجمه أكبر من المجسم المغزلي الناشئ عن المحور الأكبر."
  },
  {
    "id": "calc_ch4_db_hots_122",
    "titleEn": "Integral by King Property of x Sine Over One Plus Cos Squared",
    "titleAr": "تكامل بالتماثل لـ س جا س / (1 + جتا² س) من 0 إلى ط",
    "difficulty": "hots",
    "questionEn": "Evaluate the definite integral: $\\int_0^\\pi \\frac{x \\sin x}{1 + \\cos^2 x} dx$.",
    "questionAr": "احسب قيمة التكامل المحدد: $\\int_0^\\pi \\frac{x \\sin x}{1 + \\cos^2 x} dx$.",
    "optionsEn": [
      "$\\frac{\\pi^2}{4}$",
      "$\\frac{\\pi^2}{2}$",
      "$\\frac{\\pi}{4}$",
      "$\\pi^2$"
    ],
    "optionsAr": [
      "ط² / 4",
      "ط² / 2",
      "ط / 4",
      "ط²"
    ],
    "correctAnswer": "$\\frac{\\pi^2}{4}$",
    "correctIndex": 0,
    "hintEn": "Use symmetry substitution $x \\to \\pi - x$ to eliminate $x$ in the numerator.",
    "hintAr": "استخدم خاصية التماثل س ← ط - س للتخلص من العامل س في البسط.",
    "stepByStepSolutionEn": [
      "1. Let $I = \\int_0^\\pi \\frac{x \\sin x}{1 + \\cos^2 x} dx$.",
      "2. Substitute $x = \\pi - t$: $I = \\int_0^\\pi \\frac{(\\pi - t)\\sin(\\pi - t)}{1 + \\cos^2(\\pi - t)} dt = \\int_0^\\pi \\frac{(\\pi - t)\\sin t}{1 + \\cos^2 t} dt$.",
      "3. Adding the two expressions: $2I = \\pi \\int_0^\\pi \\frac{\\sin t}{1 + \\cos^2 t} dt$.",
      "4. Let $u = \\cos t \\implies du = -\\sin t dt$. When $t = 0 \\implies u = 1$; when $t = \\pi \\implies u = -1$.",
      "5. $2I = \\pi \\int_{-1}^1 \\frac{1}{1 + u^2} du = \\pi [\\arctan u]_{-1}^1 = \\pi (\\frac{\\pi}{4} - (-\\frac{\\pi}{4})) = \\pi (\\frac{\\pi}{2}) = \\frac{\\pi^2}{2}$.",
      "6. Therefore, $I = \\frac{\\pi^2}{4}$."
    ],
    "stepByStepSolutionAr": [
      "١. نفرض ت = التكامل المعطى.",
      "٢. بالتعويض س = ط - ص: ت = تكامل (ط - ص) جا ص / (1 + جتا² ص) د ص.",
      "٣. بجمع المعادلتين: 2 ت = ط × تكامل جا ص / (1 + جتا² ص) د ص من 0 إلى ط.",
      "٤. بالتعويض ع = جتا ص: ينتج 2 ت = ط × [ظا⁻¹(ع)] من -1 إلى 1 = ط × (ط/2) = ط² / 2.",
      "٥. إذن ت = ط² / 4."
    ],
    "teacherTipEn": "King's property $\\int_0^\\pi x f(\\sin x) dx = \\frac{\\pi}{2}\\int_0^\\pi f(\\sin x) dx$ is an Olympiad staple.",
    "teacherTipAr": "خاصية التماثل لطمس العامل س من البسط تعد من أقوى أدوات التكامل المتقدم."
  },
  {
    "id": "calc_ch4_db_hots_123",
    "titleEn": "Integral of Log One Plus Tan x",
    "titleAr": "تكامل لوـهـ(1 + ظا س) من صفر إلى ط/4",
    "difficulty": "hots",
    "questionEn": "Evaluate the definite integral: $\\int_0^{\\pi/4} \\ln(1 + \\tan x) \\, dx$.",
    "questionAr": "احسب قيمة التكامل المحدد: $\\int_0^{\\pi/4} \\ln(1 + \\tan x) \\, dx$.",
    "optionsEn": [
      "$\\frac{\\pi}{8}\\ln 2$",
      "$\\frac{\\pi}{4}\\ln 2$",
      "$\\frac{1}{2}\\ln 2$",
      "$\\frac{\\pi}{8}$"
    ],
    "optionsAr": [
      "(ط / 8) لوـهـ(2)",
      "(ط / 4) لوـهـ(2)",
      "0.5 لوـهـ(2)",
      "ط / 8"
    ],
    "correctAnswer": "$\\frac{\\pi}{8}\\ln 2$",
    "correctIndex": 0,
    "hintEn": "Use substitution $x = \\frac{\\pi}{4} - t$ and identity for $\\tan(\\frac{\\pi}{4} - t)$.",
    "hintAr": "استخدم التعويض س = ط/4 - ص ومتطابقة ظل فرق زاويتين.",
    "stepByStepSolutionEn": [
      "1. Let $I = \\int_0^{\\pi/4} \\ln(1 + \\tan x) dx$.",
      "2. Substitute $x = \\frac{\\pi}{4} - t$: $\\tan(\\frac{\\pi}{4} - t) = \\frac{1 - \\tan t}{1 + \\tan t}$.",
      "3. $1 + \\tan x = 1 + \\frac{1 - \\tan t}{1 + \\tan t} = \\frac{2}{1 + \\tan t}$.",
      "4. $I = \\int_0^{\\pi/4} \\ln(\\frac{2}{1 + \\tan t}) dt = \\int_0^{\\pi/4} [\\ln 2 - \\ln(1 + \\tan t)] dt = \\frac{\\pi}{4}\\ln 2 - I$.",
      "5. $2I = \\frac{\\pi}{4}\\ln 2 \\implies I = \\frac{\\pi}{8}\\ln 2$."
    ],
    "stepByStepSolutionAr": [
      "١. نفرض ت = التكامل المطلوب.",
      "٢. بالتعويض س = ط/4 - ص: ظا(ط/4 - ص) = (1 - ظا ص) / (1 + ظا ص).",
      "٣. 1 + ظا س = 2 / (1 + ظا ص).",
      "٤. ت = تكامل [لوـهـ(2) - لوـهـ(1 + ظا ص)] د ص = (ط/4) لوـهـ(2) - ت.",
      "٥. 2 ت = (ط/4) لوـهـ(2) ومنها ت = (ط/8) لوـهـ(2)."
    ],
    "teacherTipEn": "A legendary definite integral originally discovered by Euler.",
    "teacherTipAr": "تكامل محدد تاريخي أسطوري اكتشفه أويلر."
  },
  {
    "id": "calc_ch4_db_hots_124",
    "titleEn": "Arc Length of Astroid",
    "titleAr": "طول محيط منحنى النجمة الفلكية (الأسترويد)",
    "difficulty": "hots",
    "questionEn": "Find the total perimeter (arc length) of the astroid $x^{2/3} + y^{2/3} = a^{2/3}$ with $a = 2$.",
    "questionAr": "أوجد المحيط الكلي (طول القوس) لمنحنى النجمة الفلكية $x^{2/3} + y^{2/3} = a^{2/3}$ عندما $a = 2$.",
    "optionsEn": [
      "$12$",
      "$6$",
      "$8$",
      "$16$"
    ],
    "optionsAr": [
      "12",
      "6",
      "8",
      "16"
    ],
    "correctAnswer": "$12$",
    "correctIndex": 0,
    "hintEn": "Use parametric equations $x = a\\cos^3 t, y = a\\sin^3 t$.",
    "hintAr": "استخدم المعادلات البارامترية: س = أ جتا³(ن)، ص = أ جا³(ن).",
    "stepByStepSolutionEn": [
      "1. Parametric form: $x = a\\cos^3 t, y = a\\sin^3 t$ for $t \\in [0, 2\\pi]$.",
      "2. $\\frac{dx}{dt} = -3a\\cos^2 t \\sin t$ and $\\frac{dy}{dt} = 3a\\sin^2 t \\cos t$.",
      "3. $\\sqrt{(dx/dt)^2 + (dy/dt)^2} = \\sqrt{9a^2\\cos^2 t\\sin^2 t(\\cos^2 t + \\sin^2 t)} = 3a\\sin t \\cos t$ in the first quadrant.",
      "4. Total perimeter: $L = 4 \\int_0^{\\pi/2} 3a\\sin t \\cos t \\, dt = 12a \\left[ \\frac{\\sin^2 t}{2} \\right]_0^{\\pi/2} = 12a (\\frac{1}{2}) = 6a$.",
      "5. For $a = 2$, $L = 6(2) = 12$."
    ],
    "stepByStepSolutionAr": [
      "١. الصورة البارامترية: س = أ جتا³ ن، ص = أ جا³ ن.",
      "٢. د س/د ن = -3 أ جتا² ن جا ن، د ص/د ن = 3 أ جا² ن جتا ن.",
      "٣. جذر مجموع المربعين = 3 أ جا ن جتا ن في الربع الأول.",
      "٤. المحيط الكلي = 4 × تكامل (3 أ جا ن جتا ن) د ن من 0 إلى ط/2 = 6 أ.",
      "٥. عندما أ = 2، يكون المحيط = 6 × 2 = 12."
    ],
    "teacherTipEn": "The perimeter of the astroid of scale a is always $6a$.",
    "teacherTipAr": "محيط النجمة الفلكية ذات المقياس أ يساوي دائماً 6 أ."
  },
  {
    "id": "calc_ch4_db_hots_125",
    "titleEn": "Area Enclosed by Astroid",
    "titleAr": "المساحة المحصورة داخل منحنى النجمة الفلكية",
    "difficulty": "hots",
    "questionEn": "Find the total area enclosed by the astroid $x^{2/3} + y^{2/3} = a^{2/3}$ with $a = 4$.",
    "questionAr": "أوجد المساحة الكلية المحصورة داخل منحنى النجمة الفلكية $x^{2/3} + y^{2/3} = a^{2/3}$ عندما $a = 4$.",
    "optionsEn": [
      "$6\\pi$",
      "$12\\pi$",
      "$8\\pi$",
      "$16\\pi$"
    ],
    "optionsAr": [
      "6 ط",
      "12 ط",
      "8 ط",
      "16 ط"
    ],
    "correctAnswer": "$6\\pi$",
    "correctIndex": 0,
    "hintEn": "Area is given by $A = \\frac{3}{8}\\pi a^2$.",
    "hintAr": "المساحة الكلية تعطى بالقانون: م = (3/8) ط أ².",
    "stepByStepSolutionEn": [
      "1. By Green's theorem or parametric integration: $A = 4 \\int_0^{\\pi/2} y \\frac{dx}{dt} dt = 4 \\int_0^{\\pi/2} (a\\sin^3 t)(3a\\cos^2 t\\sin t) dt$.",
      "2. $A = 12a^2 \\int_0^{\\pi/2} \\sin^4 t \\cos^2 t dt$.",
      "3. Evaluating using Wallis formula yields $A = \\frac{3}{8}\\pi a^2$.",
      "4. For $a = 4$: $A = \\frac{3}{8}\\pi (16) = 6\\pi$."
    ],
    "stepByStepSolutionAr": [
      "١. بالتكامل البارامتري: م = 12 أ² × تكامل جا⁴ ن جتا² ن د ن من 0 إلى ط/2.",
      "٢. بصيغة واليس للتكاملات المثلثية: المساحة = (3/8) ط أ².",
      "٣. عندما أ = 4: م = (3/8) ط (16) = 6 ط."
    ],
    "teacherTipEn": "Formula: the area enclosed by an astroid is $\\frac{3}{8}\\pi a^2$.",
    "teacherTipAr": "قانون عام: المساحة المحصورة داخل النجمة الفلكية هي (3/8) ط أ²."
  },
  {
    "id": "calc_ch4_db_hots_126",
    "titleEn": "Volume of Gabriel Horn Torricelli Trumpet",
    "titleAr": "حجم بوق غابرييل (بوق تورشيللي) اللانهائي",
    "difficulty": "hots",
    "questionEn": "The region bounded by $y = \\frac{1}{x}$ and the x-axis for $x \\in [1, \\infty)$ is revolved about the x-axis. Find the volume of the resulting infinite trumpet.",
    "questionAr": "المنطقة المحصورة بين منحنى $y = \\frac{1}{x}$ ومحور السينات لـ $x \\in [1، \\infty)$ دارت دورة كاملة حول محور السينات. ما حجم هذا البوق اللانهائي الناتج؟",
    "optionsEn": [
      "$\\pi$",
      "$2\\pi$",
      "$\\infty$",
      "$\\frac{\\pi}{2}$"
    ],
    "optionsAr": [
      "ط",
      "2ط",
      "∞",
      "ط / 2"
    ],
    "correctAnswer": "$\\pi$",
    "correctIndex": 0,
    "hintEn": "Improper volume integral: $V = \\pi \\int_1^\\infty \\frac{1}{x^2} dx$.",
    "hintAr": "تكامل الحجم المعتل: ح = ط × تكامل (1 / س²) د س من 1 إلى المالانهاية.",
    "stepByStepSolutionEn": [
      "1. Volume: $V = \\pi \\int_1^\\infty y^2 dx = \\pi \\int_1^\\infty \\frac{1}{x^2} dx$.",
      "2. Antiderivative: $\\int \\frac{1}{x^2} dx = -\\frac{1}{x}$.",
      "3. Evaluate: $\\lim_{b \\to \\infty} \\left[ -\\frac{1}{x} \\right]_1^b = \\lim_{b \\to \\infty} (-\\frac{1}{b} - (-1)) = 0 + 1 = 1$.",
      "4. Volume $V = \\pi(1) = \\pi$."
    ],
    "stepByStepSolutionAr": [
      "١. قانون الحجم الدوراني: ح = ط × تكامل (1/س)² د س من 1 إلى ∞.",
      "٢. الدالة المقابلة لـ 1/س² هي -1/س.",
      "٣. بالتعويض بالحدود: [-1/∞ - (-1/1)] = 0 + 1 = 1.",
      "٤. الحجم = ط وحدة مكعبة."
    ],
    "teacherTipEn": "Gabriel's horn has finite volume (\\pi) but infinite surface area!",
    "teacherTipAr": "مفارقة بوق غابرييل الشهيرة: حجمه منتهٍ ويساوي ط، بينما مساحة سطحه لا نهائية!"
  },
  {
    "id": "calc_ch4_db_hots_127",
    "titleEn": "Area Between Sine and Cosine Consecutive Intersections",
    "titleAr": "المساحة بين منحنيي الجيب وجيب التمام بين نقطتي تقاطع متتاليتين",
    "difficulty": "hots",
    "questionEn": "Find the area of the region enclosed between $y = \\sin x$ and $y = \\cos x$ between two consecutive intersection points.",
    "questionAr": "أوجد مساحة المنطقة المحصورة بين منحنيي $y = \\sin x$ و $y = \\cos x$ بين نقطتي تقاطع متتاليتين لهما.",
    "optionsEn": [
      "$2\\sqrt{2}$",
      "$\\sqrt{2}$",
      "$2$",
      "$4$"
    ],
    "optionsAr": [
      "2 جذر(2)",
      "جذر(2)",
      "2",
      "4"
    ],
    "correctAnswer": "$2\\sqrt{2}$",
    "correctIndex": 0,
    "hintEn": "Integrate from $x = \\pi/4$ to $x = 5\\pi/4$: $A = \\int_{\\pi/4}^{5\\pi/4} (\\sin x - \\cos x) dx$.",
    "hintAr": "كامل من س = ط/4 إلى س = 5ط/4: م = تكامل (جا س - جتا س) د س.",
    "stepByStepSolutionEn": [
      "1. Consecutive intersection points: $\\sin x = \\cos x \\implies x = \\pi/4$ and $x = 5\\pi/4$.",
      "2. On $[\\pi/4, 5\\pi/4]$, $\\sin x \\ge \\cos x$.",
      "3. Area: $A = \\int_{\\pi/4}^{5\\pi/4} (\\sin x - \\cos x) dx = \\left[ -\\cos x - \\sin x \\right]_{\\pi/4}^{5\\pi/4}$.",
      "4. At $5\\pi/4$: $-(-\\frac{\\sqrt{2}}{2}) - (-\\frac{\\sqrt{2}}{2}) = \\sqrt{2}$.",
      "5. At $\\pi/4$: $-\\frac{\\sqrt{2}}{2} - \\frac{\\sqrt{2}}{2} = -\\sqrt{2}$.",
      "6. Total area $= \\sqrt{2} - (-\\sqrt{2}) = 2\\sqrt{2}$."
    ],
    "stepByStepSolutionAr": [
      "١. نقطتا التقاطع المتتاليتان: س = ط/4 و س = 5ط/4.",
      "٢. في هذه الفترة جا س تقع أعلى جتا س.",
      "٣. المساحة = تكامل (جا س - جتا س) د س = [-جتا س - جا س].",
      "٤. بالتعويض: جذر(2) - (-جذر 2) = 2 جذر(2)."
    ],
    "teacherTipEn": "Each lobe enclosed between sine and cosine has identical area $2\\sqrt{2}$.",
    "teacherTipAr": "كل فص محصور بين منحنيي الجيب وجيب التمام مساحته ثابتة وتساوي 2 جذر(2)."
  },
  {
    "id": "calc_ch4_db_hots_128",
    "titleEn": "Definite Integral of Floor Function",
    "titleAr": "تكامل محدد لدالة أكبر عدد صحيح (دالة المقياس الأرضي)",
    "difficulty": "hots",
    "questionEn": "Evaluate the definite integral: $\\int_0^3 \\lfloor x \\rfloor dx$.",
    "questionAr": "احسب قيمة التكامل المحدد لدالة أكبر عدد صحيح: $\\int_0^3 \\lfloor x \\rfloor dx$.",
    "optionsEn": [
      "$3$",
      "$6$",
      "$1.5$",
      "$4$"
    ],
    "optionsAr": [
      "3",
      "6",
      "1.5",
      "4"
    ],
    "correctAnswer": "$3$",
    "correctIndex": 0,
    "hintEn": "Split the integral into unit intervals where $\\lfloor x \\rfloor$ is constant.",
    "hintAr": "قسم التكامل على فترات طول كل منها وحدة واحدة حيث تكون قيمة الدالة ثابتة.",
    "stepByStepSolutionEn": [
      "1. On $[0, 1)$, $\\lfloor x \\rfloor = 0$. $\\int_0^1 0 dx = 0$.",
      "2. On $[1, 2)$, $\\lfloor x \\rfloor = 1$. $\\int_1^2 1 dx = 1$.",
      "3. On $[2, 3)$, $\\lfloor x \\rfloor = 2$. $\\int_2^3 2 dx = 2$.",
      "4. Sum: $0 + 1 + 2 = 3$."
    ],
    "stepByStepSolutionAr": [
      "١. على الفترة [0، 1): الدالة = 0، وتكاملها = 0.",
      "٢. على الفترة [1، 2): الدالة = 1، وتكاملها = 1.",
      "٣. على الفترة [2، 3): الدالة = 2، وتكاملها = 2.",
      "٤. المجموع = 0 + 1 + 2 = 3."
    ],
    "teacherTipEn": "Formula: $\\int_0^n \\lfloor x \\rfloor dx = \\frac{n(n - 1)}{2}$. Here $\\frac{3(2)}{2} = 3$.",
    "teacherTipAr": "قاعدة عامة: تكامل دالة الصحيح من 0 إلى ن يساوي ن(ن - 1) / 2."
  },
  {
    "id": "calc_ch4_db_hots_129",
    "titleEn": "Limit of Riemann Sum Linear",
    "titleAr": "نهاية مجموع ريمان لدالة خطية",
    "difficulty": "hots",
    "questionEn": "Evaluate the limit of the Riemann sum: $\\lim_{n \\to \\infty} \\frac{1}{n^2} \\sum_{k=1}^n k$.",
    "questionAr": "احسب نهاية مجموع ريمان: $\\lim_{n \\to \\infty} \\frac{1}{n^2} \\sum_{k=1}^n k$.",
    "optionsEn": [
      "$\\frac{1}{2}$",
      "$1$",
      "$2$",
      "$0$"
    ],
    "optionsAr": [
      "1 / 2",
      "1",
      "2",
      "0"
    ],
    "correctAnswer": "$\\frac{1}{2}$",
    "correctIndex": 0,
    "hintEn": "Write as $\\lim_{n \\to \\infty} \\frac{1}{n} \\sum_{k=1}^n \\frac{k}{n} = \\int_0^1 x dx$.",
    "hintAr": "أعد كتابة المجموع بصورة ريمان: (1/ن) مجموع (ك/ن) = تكامل س د س من 0 إلى 1.",
    "stepByStepSolutionEn": [
      "1. Rewrite: $\\lim_{n \\to \\infty} \\frac{1}{n}\\sum_{k=1}^n (\\frac{k}{n})$.",
      "2. This is the definition of the Riemann integral of $f(x) = x$ on $[0, 1]$ with $\\Delta x = 1/n$ and $x_k = k/n$.",
      "3. $\\int_0^1 x dx = \\left[ \\frac{x^2}{2} \\right]_0^1 = \\frac{1}{2}$."
    ],
    "stepByStepSolutionAr": [
      "١. نعيد كتابة المقدار: نهاية (1/ن) مجموع (ك/ن).",
      "٢. هذا يمثل تعريف ريمان لتكامل د(س) = س على الفترة [0، 1].",
      "٣. تكامل س د س من 0 إلى 1 = س² / 2 = 1/2."
    ],
    "teacherTipEn": "Connecting limits of sums to definite integrals is the cornerstone of integration theory.",
    "teacherTipAr": "ربط نهاية المجموع بالتكامل المحدد هو حجر الأساس في نظرية التكامل."
  },
  {
    "id": "calc_ch4_db_hots_130",
    "titleEn": "Riemann Sum Harmonic Limit",
    "titleAr": "نهاية مجموع ريمان التوافقي لوـهـ(2)",
    "difficulty": "hots",
    "questionEn": "Evaluate the limit: $\\lim_{n \\to \\infty} \\sum_{k=1}^n \\frac{1}{n + k}$.",
    "questionAr": "احسب قيمة النهاية: $\\lim_{n \\to \\infty} \\sum_{k=1}^n \\frac{1}{n + k}$.",
    "optionsEn": [
      "$\\ln 2$",
      "$1$",
      "$\\frac{1}{2}$",
      "$\\infty$"
    ],
    "optionsAr": [
      "لوـهـ(2)",
      "1",
      "1 / 2",
      "∞"
    ],
    "correctAnswer": "$\\ln 2$",
    "correctIndex": 0,
    "hintEn": "Factor out $1/n$ to recognize $\\int_0^1 \\frac{1}{1 + x} dx$.",
    "hintAr": "أخرج 1/ن عاملاً مشتركاً لتحويل المجموع إلى تكامل 1 / (1 + س).",
    "stepByStepSolutionEn": [
      "1. Rewrite: $\\lim_{n \\to \\infty} \\frac{1}{n} \\sum_{k=1}^n \\frac{1}{1 + k/n}$.",
      "2. This is the Riemann sum for $f(x) = \\frac{1}{1 + x}$ on $[0, 1]$.",
      "3. $\\int_0^1 \\frac{1}{1 + x} dx = [\\ln(1 + x)]_0^1 = \\ln 2 - \\ln 1 = \\ln 2$."
    ],
    "stepByStepSolutionAr": [
      "١. بإخراج 1/ن: نهاية (1/ن) مجموع [1 / (1 + ك/ن)].",
      "٢. هذا يطابق تكامل ريمان للدالة د(س) = 1 / (1 + س) على [0، 1].",
      "٣. تكامل 1/(1 + س) = لوـهـ(1 + س) من 0 إلى 1 = لوـهـ(2)."
    ],
    "teacherTipEn": "Classic exam problem connecting discrete harmonic sums to continuous logarithmic integrals.",
    "teacherTipAr": "مسألة امتحانات نموذجية تربط المجاميع التوافقية بالتكامل اللوغاريتمي المتصل."
  },
  {
    "id": "calc_ch4_db_hots_131",
    "titleEn": "Volume of Sine Arch Revolved Around X-Axis",
    "titleAr": "حجم دوران قوس دالة الجيب حول محور السينات",
    "difficulty": "hots",
    "questionEn": "Find the volume of the solid generated by revolving one arch of the sine curve $y = \\sin x$ ($x \\in [0, \\pi]$) about the x-axis.",
    "questionAr": "أوجد حجم الجسم الدوراني الناتج من دوران قوس واحد لمنحنى الجيب $y = \\sin x$ ($x \\in [0، \\pi]$) دورة كاملة حول محور السينات.",
    "optionsEn": [
      "$\\frac{\\pi^2}{2}$",
      "$\\pi^2$",
      "$2\\pi$",
      "$\\frac{\\pi}{2}$"
    ],
    "optionsAr": [
      "ط² / 2",
      "ط²",
      "2ط",
      "ط / 2"
    ],
    "correctAnswer": "$\\frac{\\pi^2}{2}$",
    "correctIndex": 0,
    "hintEn": "Volume $V = \\pi \\int_0^\\pi \\sin^2 x dx = \\pi(\\frac{\\pi}{2})$.",
    "hintAr": "الحجم ح = ط × تكامل جا² س د س من 0 إلى ط = ط (ط/2).",
    "stepByStepSolutionEn": [
      "1. Volume formula: $V = \\pi \\int_0^\\pi \\sin^2 x dx$.",
      "2. Using half-angle identity: $\\int_0^\\pi \\sin^2 x dx = \\int_0^\\pi \\frac{1 - \\cos 2x}{2} dx = \\left[ \\frac{x}{2} - \\frac{\\sin 2x}{4} \\right]_0^\\pi = \\frac{\\pi}{2}$.",
      "3. Therefore, $V = \\pi (\\frac{\\pi}{2}) = \\frac{\\pi^2}{2}$."
    ],
    "stepByStepSolutionAr": [
      "١. قانون الحجم: ح = ط × تكامل جا² س د س من 0 إلى ط.",
      "٢. بقانون نصف الزاوية: تكامل جا² س من 0 إلى ط = ط / 2.",
      "٣. الحجم = ط × (ط / 2) = ط² / 2."
    ],
    "teacherTipEn": "The volume of revolution of one sine arch is $\\pi^2 / 2$.",
    "teacherTipAr": "حجم دوران قوس كامل لمنحنى الجيب حول محور السينات يساوي ط² / 2 دائماً."
  },
  {
    "id": "calc_ch4_db_hots_132",
    "titleEn": "Area of Loop of Strophoid Curve",
    "titleAr": "مساحة عروة منحنى ص² = س² - س⁴",
    "difficulty": "hots",
    "questionEn": "Find the area enclosed by the loop of the curve $y^2 = x^2 - x^4$ for $x \\ge 0$.",
    "questionAr": "أوجد مساحة المنطقة المحصورة داخل عروة المنحنى $y^2 = x^2 - x^4$ لـ $x \\ge 0$.",
    "optionsEn": [
      "$\\frac{2}{3}$",
      "$\\frac{4}{3}$",
      "$\\frac{1}{3}$",
      "$1$"
    ],
    "optionsAr": [
      "2 / 3",
      "4 / 3",
      "1 / 3",
      "1"
    ],
    "correctAnswer": "$\\frac{2}{3}$",
    "correctIndex": 0,
    "hintEn": "Area is $A = 2\\int_0^1 x\\sqrt{1 - x^2} dx$.",
    "hintAr": "المساحة م = 2 × تكامل س جذر(1 - س²) د س من 0 إلى 1.",
    "stepByStepSolutionEn": [
      "1. For $x \\ge 0$, $y = \\pm x\\sqrt{1 - x^2}$ on $[0, 1]$.",
      "2. Area: $A = 2 \\int_0^1 x\\sqrt{1 - x^2} dx = -\\int_0^1 (-2x)(1 - x^2)^{1/2} dx$.",
      "3. $A = -\\left[ \\frac{2}{3}(1 - x^2)^{3/2} \\right]_0^1 = -[0 - \\frac{2}{3}] = \\frac{2}{3}$."
    ],
    "stepByStepSolutionAr": [
      "١. على الفترة [0، 1]: ص = ± س جذر(1 - س²).",
      "٢. المساحة = 2 × تكامل س جذر(1 - س²) د س من 0 إلى 1.",
      "٣. باستخدام قاعدة مشتقة ما بداخل القوس: م = 2/3 وحدة مربعة."
    ],
    "teacherTipEn": "The substitution $u = 1 - x^2$ makes this integral completely elementary.",
    "teacherTipAr": "التعويض ع = 1 - س² يحول التكامل إلى صورة قياسية مباشرة."
  },
  {
    "id": "calc_ch4_db_hots_133",
    "titleEn": "Archimedes Parabolic Segment Area",
    "titleAr": "مبرهنة أرخميدس لمساحة القطاع المكافئ",
    "difficulty": "hots",
    "questionEn": "Find the area of the region bounded by the parabola $y = x^2$ and the line $y = 2x + 3$.",
    "questionAr": "أوجد مساحة المنطقة المحصورة بين القطع المكافئ $y = x^2$ والمستقيم $y = 2x + 3$.",
    "optionsEn": [
      "$\\frac{32}{3}$",
      "$\\frac{16}{3}$",
      "$\\frac{64}{3}$",
      "$8$"
    ],
    "optionsAr": [
      "32 / 3",
      "16 / 3",
      "64 / 3",
      "8"
    ],
    "correctAnswer": "$\\frac{32}{3}$",
    "correctIndex": 0,
    "hintEn": "Use Archimedes' formula $A = \\frac{1}{6}(x_2 - x_1)^3$ for a parabola and a line.",
    "hintAr": "استخدم صيغة أرخميدس: المساحة = (1/6) (س2 - س1)³ حيث س1 و س2 جذور التقاطع.",
    "stepByStepSolutionEn": [
      "1. Intersection points: $x^2 = 2x + 3 \\implies x^2 - 2x - 3 = 0 \\implies (x - 3)(x + 1) = 0 \\implies x_1 = -1, x_2 = 3$.",
      "2. Area: $A = \\int_{-1}^3 (2x + 3 - x^2) dx = \\left[ x^2 + 3x - \\frac{x^3}{3} \\right]_{-1}^3$.",
      "3. At $x = 3$: $9 + 9 - 9 = 9$.",
      "4. At $x = -1$: $1 - 3 - (-1/3) = -2 + 1/3 = -5/3$.",
      "5. $A = 9 - (-5/3) = 9 + 5/3 = \\frac{32}{3}$."
    ],
    "stepByStepSolutionAr": [
      "١. نقطتا التقاطع: س² - 2س - 3 = 0 ومنها س1 = -1 و س2 = 3.",
      "٢. دالة المساحة = تكامل (2س + 3 - س²) د س من -1 إلى 3.",
      "٣. عند س = 3: 9.",
      "٤. عند س = -1: -5/3.",
      "٥. المساحة = 9 - (-5/3) = 32 / 3 وحدة مربعة."
    ],
    "teacherTipEn": "Archimedes formula shortcut: $\\frac{1}{6}(3 - (-1))^3 = \\frac{4^3}{6} = \\frac{64}{6} = \\frac{32}{3}$.",
    "teacherTipAr": "قاعدة أرخميدس السريعة: (1/6) (3 - (-1))³ = 64 / 6 = 32 / 3."
  },
  {
    "id": "calc_ch4_db_hots_134",
    "titleEn": "Centroid of Semicircular Region",
    "titleAr": "إحداثي ص لمركز ثقل نصف قرص دائري",
    "difficulty": "hots",
    "questionEn": "Find the y-coordinate $\\bar{y}$ of the centroid of the semicircular region bounded by $y = \\sqrt{R^2 - x^2}$ and the x-axis.",
    "questionAr": "أوجد الإحداثي الصادي $\\bar{y}$ لمركز ثقل المنطقة نصف الدائرية المحصورة بين $y = \\sqrt{R^2 - x^2}$ ومحور السينات.",
    "optionsEn": [
      "$\\frac{4R}{3\\pi}$",
      "$\\frac{2R}{3\\pi}$",
      "$\\frac{3R}{4\\pi}$",
      "$\\frac{R}{2}$"
    ],
    "optionsAr": [
      "4R / (3ط)",
      "2R / (3ط)",
      "3R / (4ط)",
      "R / 2"
    ],
    "correctAnswer": "$\\frac{4R}{3\\pi}$",
    "correctIndex": 0,
    "hintEn": "Use centroid formula: $\\bar{y} = \\frac{1}{A}\\int_{-R}^R \\frac{1}{2}y^2 dx$ with $A = \\frac{1}{2}\\pi R^2$.",
    "hintAr": "قانون مركز الثقل: ص_م = (1 / المساحة) × تكامل (0.5 ص²) د س.",
    "stepByStepSolutionEn": [
      "1. Area of semicircle: $A = \\frac{1}{2}\\pi R^2$.",
      "2. Moment about x-axis: $M_x = \\int_{-R}^R \\frac{1}{2} y^2 dx = \\frac{1}{2}\\int_{-R}^R (R^2 - x^2) dx = \\int_0^R (R^2 - x^2) dx = \\left[ R^2 x - \\frac{x^3}{3} \\right]_0^R = \\frac{2}{3}R^3$.",
      "3. Centroid coordinate: $\\bar{y} = \\frac{M_x}{A} = \\frac{\\frac{2}{3}R^3}{\\frac{1}{2}\\pi R^2} = \\frac{4R}{3\\pi}$."
    ],
    "stepByStepSolutionAr": [
      "١. مساحة نصف الدائرة: م = 0.5 ط R².",
      "٢. عزم المساحة حول محور السينات: ع_س = تكامل (0.5 ص²) د س = (2/3) R³.",
      "٣. مركز الثقل: ص_م = ع_س / م = (2/3 R³) / (0.5 ط R²) = 4R / (3ط)."
    ],
    "teacherTipEn": "A foundational result in calculus and mechanics: centroid of a semicircle is $\\frac{4R}{3\\pi}$.",
    "teacherTipAr": "نتيجة فيزيائية ورياضية شهيرة: بعد مركز ثقل نصف القرص الدائري عن القطر هو 4R / (3ط)."
  },
  {
    "id": "calc_ch4_db_hots_135",
    "titleEn": "Symmetric Integral of Exp Fraction Over Symmetric Interval",
    "titleAr": "تكامل دالة كسرية مع هـ^س على فترة متناظرة",
    "difficulty": "hots",
    "questionEn": "Evaluate the definite integral: $\\int_{-3}^3 \\frac{1}{1 + e^x} dx$.",
    "questionAr": "احسب قيمة التكامل المحدد: $\\int_{-3}^3 \\frac{1}{1 + e^x} dx$.",
    "optionsEn": [
      "$3$",
      "$6$",
      "$0$",
      "$1$"
    ],
    "optionsAr": [
      "3",
      "6",
      "0",
      "1"
    ],
    "correctAnswer": "$3$",
    "correctIndex": 0,
    "hintEn": "Use symmetry property: $\\int_{-a}^a \\frac{1}{1 + e^x} dx = a$.",
    "hintAr": "استخدم خاصية التماثل: تكامل 1 / (1 + هـ^س) من -أ إلى أ يساوي أ دائماً.",
    "stepByStepSolutionEn": [
      "1. Let $I = \\int_{-3}^3 \\frac{1}{1 + e^x} dx$.",
      "2. Substitute $x = -u$: $I = \\int_3^{-3} \\frac{1}{1 + e^{-u}} (-du) = \\int_{-3}^3 \\frac{e^u}{e^u + 1} du$.",
      "3. Adding the two expressions: $2I = \\int_{-3}^3 \\left( \\frac{1}{1 + e^x} + \\frac{e^x}{1 + e^x} \\right) dx = \\int_{-3}^3 1 dx = 3 - (-3) = 6$.",
      "4. Therefore, $I = \\frac{6}{2} = 3$."
    ],
    "stepByStepSolutionAr": [
      "١. نفرض ت = التكامل المعطى.",
      "٢. بالتعويض س = -ع: يتحول التكامل إلى تكامل هـ^ع / (1 + هـ^ع) د ع من -3 إلى 3.",
      "٣. بجمع الصورتين: 2 ت = تكامل (1) د س من -3 إلى 3 = 6.",
      "٤. إذن ت = 6 / 2 = 3."
    ],
    "teacherTipEn": "Theorem: $\\int_{-a}^a \\frac{1}{1 + e^x} dx = a$ for any real number $a$.",
    "teacherTipAr": "نظرية عامة: تكامل 1 / (1 + هـ^س) من -أ إلى أ يساوي أ دوماً لأي قيمة حقيقية أ."
  },
  {
    "id": "calc_ch4_db_hots_136",
    "titleEn": "Integral with King Property Cosine Over Exp Plus One",
    "titleAr": "تكامل جتا س / (هـ^س + 1) على فترة متناظرة",
    "difficulty": "hots",
    "questionEn": "Evaluate the definite integral: $\\int_{-\\pi/2}^{\\pi/2} \\frac{\\cos x}{e^x + 1} dx$.",
    "questionAr": "احسب قيمة التكامل المحدد: $\\int_{-\\pi/2}^{\\pi/2} \\frac{\\cos x}{e^x + 1} dx$.",
    "optionsEn": [
      "$1$",
      "$2$",
      "$0$",
      "$\\frac{\\pi}{2}$"
    ],
    "optionsAr": [
      "1",
      "2",
      "0",
      "ط / 2"
    ],
    "correctAnswer": "$1$",
    "correctIndex": 0,
    "hintEn": "Use $x \\to -x$ symmetry to combine fractions.",
    "hintAr": "استخدم خاصية التماثل س ← -س لجمع الدالتين والتخلص من هـ^س.",
    "stepByStepSolutionEn": [
      "1. Let $I = \\int_{-\\pi/2}^{\\pi/2} \\frac{\\cos x}{e^x + 1} dx$.",
      "2. By substitution $x = -t$: $I = \\int_{-\\pi/2}^{\\pi/2} \\frac{\\cos(-t)}{e^{-t} + 1} dt = \\int_{-\\pi/2}^{\\pi/2} \\frac{e^t \\cos t}{e^t + 1} dt$.",
      "3. Adding the two integrals: $2I = \\int_{-\\pi/2}^{\\pi/2} \\cos t \\, dt = [\\sin t]_{-\\pi/2}^{\\pi/2} = 1 - (-1) = 2$.",
      "4. Therefore, $I = 1$."
    ],
    "stepByStepSolutionAr": [
      "١. بفرض ت = التكامل المعطى.",
      "٢. بالتعويض س = -ص: يتحول التكامل إلى تكامل (هـ^ص جتا ص) / (هـ^ص + 1) د ص.",
      "٣. بجمع المعادلتين: 2 ت = تكامل جتا ص د ص من -ط/2 إلى ط/2 = 1 - (-1) = 2.",
      "٤. إذن ت = 1."
    ],
    "teacherTipEn": "The exponential denominator disappears completely when paired with its reflection.",
    "teacherTipAr": "المقام الأسي يختفي تماماً عند جمعه مع صورته المنعكسة."
  },
  {
    "id": "calc_ch4_db_hots_137",
    "titleEn": "Second Pappus Theorem for Torus Volume",
    "titleAr": "نظرية بابوس الثانية لحجم الطارة الدورانية",
    "difficulty": "hots",
    "questionEn": "A circular disk of radius $r = 1$ centered at $(4, 0)$ is revolved about the y-axis. Find the volume of the resulting solid torus using Pappus's Centroid Theorem.",
    "questionAr": "قرص دائري نصف قطره $r = 1$ ومركزه $(4، 0)$ دار دورة كاملة حول محور الصادات. احسب حجم الطارة الناتجة باستخدام نظرية بابوس للمركز الهندسي.",
    "optionsEn": [
      "$8\\pi^2$",
      "$4\\pi^2$",
      "$16\\pi^2$",
      "$2\\pi^2$"
    ],
    "optionsAr": [
      "8 ط²",
      "4 ط²",
      "16 ط²",
      "2 ط²"
    ],
    "correctAnswer": "$8\\pi^2$",
    "correctIndex": 0,
    "hintEn": "Pappus's theorem: $V = 2\\pi \\bar{x} A$.",
    "hintAr": "نظرية بابوس: الحجم = 2 ط × بعد مركز الثقل × مساحة الشكل المستوي.",
    "stepByStepSolutionEn": [
      "1. Area of the circular disk: $A = \\pi r^2 = \\pi(1^2) = \\pi$.",
      "2. The centroid of the circle is at its center: $\\bar{x} = 4$.",
      "3. Distance traveled by the centroid during revolution: $d = 2\\pi \\bar{x} = 2\\pi(4) = 8\\pi$.",
      "4. Volume by Pappus's Theorem: $V = A \\times d = \\pi \\times 8\\pi = 8\\pi^2$."
    ],
    "stepByStepSolutionAr": [
      "١. مساحة القرص الدائري: م = ط نق² = ط.",
      "٢. مركز ثقل الدائرة يقع عند مركزها: س_م = 4.",
      "٣. المسافة التي يقطعها مركز الثقل أثناء الدوران = 2 ط س_م = 8 ط.",
      "٤. حجم الطارة = المساحة × المسافة المقطوعة = ط × 8 ط = 8 ط²."
    ],
    "teacherTipEn": "Pappus's theorem computes complex revolution volumes with simple geometry.",
    "teacherTipAr": "نظرية بابوس تحسب حجوم الأجسام الدورانية المعقدة بخطوة هندسية واحدة."
  },
  {
    "id": "calc_ch4_db_hots_138",
    "titleEn": "Area Between Reciprocal and Linear Line",
    "titleAr": "المساحة المحصورة بين منحنى 1/س ومستقيم",
    "difficulty": "hots",
    "questionEn": "Find the area of the region enclosed between $y = \\frac{1}{x}$ and the line $y = \\frac{5}{2} - x$.",
    "questionAr": "أوجد مساحة المنطقة المحصورة بين المنحنى $y = \\frac{1}{x}$ والمستقيم $y = \\frac{5}{2} - x$.",
    "optionsEn": [
      "$\\frac{15}{8} - 2\\ln 2$",
      "$\\frac{15}{8} - \\ln 2$",
      "$\\frac{5}{4} - \\ln 2$",
      "$\\frac{9}{8} - 2\\ln 2$"
    ],
    "optionsAr": [
      "15/8 - 2 لوـهـ(2)",
      "15/8 - لوـهـ(2)",
      "5/4 - لوـهـ(2)",
      "9/8 - 2 لوـهـ(2)"
    ],
    "correctAnswer": "$\\frac{15}{8} - 2\\ln 2$",
    "correctIndex": 0,
    "hintEn": "Find intersection points: $x + 1/x = 5/2 \\implies 2x^2 - 5x + 2 = 0$.",
    "hintAr": "أوجد نقطتي التقاطع بحل المعادلة: 2س² - 5س + 2 = 0.",
    "stepByStepSolutionEn": [
      "1. Intersection: $\\frac{5}{2} - x = \\frac{1}{x} \\implies 2x^2 - 5x + 2 = 0 \\implies (2x - 1)(x - 2) = 0 \\implies x = 1/2, 2$.",
      "2. Area: $A = \\int_{1/2}^2 (\\frac{5}{2} - x - \\frac{1}{x}) dx = \\left[ \\frac{5}{2}x - \\frac{x^2}{2} - \\ln x \\right]_{1/2}^2$.",
      "3. At $x = 2$: $5 - 2 - \\ln 2 = 3 - \\ln 2$.",
      "4. At $x = 1/2$: $\\frac{5}{4} - \\frac{1}{8} - \\ln(1/2) = \\frac{9}{8} + \\ln 2$.",
      "5. $A = (3 - \\ln 2) - (\\frac{9}{8} + \\ln 2) = \\frac{15}{8} - 2\\ln 2$."
    ],
    "stepByStepSolutionAr": [
      "١. نقطتا التقاطع: 2س² - 5س + 2 = 0 ومنها س = 1/2 و س = 2.",
      "٢. دالة المساحة = تكامل (5/2 - س - 1/س) د س من 1/2 إلى 2.",
      "٣. عند س = 2: 3 - لوـهـ(2).",
      "٤. عند س = 1/2: 9/8 + لوـهـ(2).",
      "٥. المساحة = 15/8 - 2 لوـهـ(2)."
    ],
    "teacherTipEn": "Notice $\\ln(1/2) = -\\ln 2$, so subtracting gives $-2\\ln 2$.",
    "teacherTipAr": "انتبه إلى أن لوـهـ(1/2) = -لوـهـ(2)، فطرحهما يعطي -2 لوـهـ(2)."
  },
  {
    "id": "calc_ch4_db_hots_139",
    "titleEn": "Steinmetz Solid Intersection of Two Cylinders Radius 1",
    "titleAr": "حجم مجسم شتاينمتز الناتج من تقاطع أسطوانتين متعامدتين",
    "difficulty": "hots",
    "questionEn": "Find the volume of the intersection of two identical circular cylinders of radius $R = 1$ intersecting at right angles through their axes.",
    "questionAr": "أوجد حجم مجسم شتاينمتز الناتج من تقاطع أسطوانتين دائريتين متطابقتين نصف قطر كل منهما $R = 1$ ومحوراهما متعامدان.",
    "optionsEn": [
      "$\\frac{16}{3}$",
      "$8$",
      "$4\\pi$",
      "$\\frac{8}{3}$"
    ],
    "optionsAr": [
      "16 / 3",
      "8",
      "4ط",
      "8 / 3"
    ],
    "correctAnswer": "$\\frac{16}{3}$",
    "correctIndex": 0,
    "hintEn": "Cross-sections perpendicular to both axes are squares of side $2\\sqrt{R^2 - z^2}$.",
    "hintAr": "المقاطع العرضية العمودية على المحورين هي مربعات طول ضلع كل منها 2 جذر(R² - ع²).",
    "stepByStepSolutionEn": [
      "1. The solid is bounded by $x^2 + z^2 \\le R^2$ and $y^2 + z^2 \\le R^2$.",
      "2. For a horizontal slice at height $z$, $-R \\le z \\le R$, the cross-section is a square of side $2\\sqrt{R^2 - z^2}$.",
      "3. Cross-sectional area: $A(z) = (2\\sqrt{R^2 - z^2})^2 = 4(R^2 - z^2)$.",
      "4. Volume: $V = \\int_{-R}^R 4(R^2 - z^2) dz = 8\\int_0^R (R^2 - z^2) dz = 8 [R^2 z - \\frac{z^3}{3}]_0^R = \\frac{16}{3}R^3$.",
      "5. For $R = 1$, $V = \\frac{16}{3}$."
    ],
    "stepByStepSolutionAr": [
      "١. المجسم محدد بالمعادلتين س² + ع² ≤ 1 و ص² + ع² ≤ 1.",
      "٢. المقطع الأفقي عند الارتفاع ع هو مربع طول ضلعه 2 جذر(1 - ع²).",
      "٣. مساحة المقطع المربع: م(ع) = 4(1 - ع²).",
      "٤. الحجم = 8 × تكامل (1 - ع²) د ع من 0 إلى 1 = 16 / 3."
    ],
    "teacherTipEn": "A famous classical result: the volume contains NO $\\pi$, despite being bounded by curved cylinders!",
    "teacherTipAr": "مفارقة شهيرة: حجم تقاطع الأسطوانتين لا يحوي النسبة التقريبية ط إطلاقاً!"
  },
  {
    "id": "calc_ch4_db_hots_140",
    "titleEn": "Arc Length of Parabola from Vertex",
    "titleAr": "طول قوس من منحنى القطع المكافئ",
    "difficulty": "hots",
    "questionEn": "The arc length of $y = \\frac{1}{2}x^2$ from $x = 0$ to $x = 1$ is represented by the integral:",
    "questionAr": "طول قوس المنحنى $y = \\frac{1}{2}x^2$ من $x = 0$ إلى $x = 1$ يمثله التكامل:",
    "optionsEn": [
      "$\\int_0^1 \\sqrt{1 + x^2} \\, dx$",
      "$\\int_0^1 \\sqrt{1 + x^4} \\, dx$",
      "$\\int_0^1 (1 + x) \\, dx$",
      "$\\int_0^1 \\sqrt{1 + \\frac{x^2}{4}} \\, dx$"
    ],
    "optionsAr": [
      "تكامل جذر(1 + س²) د س",
      "تكامل جذر(1 + س⁴) د س",
      "تكامل (1 + س) د س",
      "تكامل جذر(1 + س²/4) د س"
    ],
    "correctAnswer": "$\\int_0^1 \\sqrt{1 + x^2} \\, dx$",
    "correctIndex": 0,
    "hintEn": "Use arc length formula: $L = \\int_a^b \\sqrt{1 + (y')^2} dx$.",
    "hintAr": "قانون طول القوس: ل = تكامل جذر(1 + (صَ)²) د س.",
    "stepByStepSolutionEn": [
      "1. First derivative: $y' = \\frac{d}{dx}(\\frac{1}{2}x^2) = x$.",
      "2. Square of derivative: $(y')^2 = x^2$.",
      "3. Arc length integrand: $\\sqrt{1 + (y')^2} = \\sqrt{1 + x^2}$.",
      "4. The integral is $\\int_0^1 \\sqrt{1 + x^2} dx$."
    ],
    "stepByStepSolutionAr": [
      "١. المشتقة الأولى: صَ = س.",
      "٢. مربع المشتقة: (صَ)² = س².",
      "٣. المقدار تحت الجذر: 1 + س².",
      "٤. التكامل المعبر عن طول القوس هو تكامل جذر(1 + س²) د س من 0 إلى 1."
    ],
    "teacherTipEn": "Arc length formula: $L = \\int \\sqrt{1 + f'(x)^2} dx$.",
    "teacherTipAr": "الصيغة القياسية لطول القوس تعتمد على مربع المشتقة الأولى تحت الجذر التربيعي."
  },
  {
    "id": "calc_ch4_db_hots_141",
    "titleEn": "Leibniz Rule with Both Variable Limits",
    "titleAr": "قاعدة لايبنتز لمشتقة تكامل ذي حدين متغيرين",
    "difficulty": "hots",
    "questionEn": "Find $\\frac{d}{dx} \\left[ \\int_x^{2x} \\frac{1}{t} dt \\right]$ for $x > 0$.",
    "questionAr": "أوجد $\\frac{d}{dx} \\left[ \\int_x^{2x} \\frac{1}{t} dt \\right]$ لـ $x > 0$.",
    "optionsEn": [
      "$0$",
      "$\\frac{1}{x}$",
      "$\\ln 2$",
      "$\\frac{1}{2x}$"
    ],
    "optionsAr": [
      "0",
      "1 / س",
      "لوـهـ(2)",
      "1 / (2س)"
    ],
    "correctAnswer": "$0$",
    "correctIndex": 0,
    "hintEn": "Evaluate the integral directly first: $\\int_x^{2x} \\frac{1}{t} dt = \\ln(2x) - \\ln x = \\ln 2$.",
    "hintAr": "احسب التكامل أولاً: تكامل 1/ع = لوـهـ(2س) - لوـهـ(س) = لوـهـ(2)، ثم اشتق الثابت.",
    "stepByStepSolutionEn": [
      "1. Notice that $\\int_x^{2x} \\frac{1}{t} dt = [\\ln t]_x^{2x} = \\ln(2x) - \\ln x = \\ln(\\frac{2x}{x}) = \\ln 2$.",
      "2. Since $\\ln 2$ is a constant, its derivative with respect to $x$ is $0$.",
      "3. By Leibniz rule directly: $\\frac{1}{2x} \\cdot 2 - \\frac{1}{x} \\cdot 1 = \\frac{1}{x} - \\frac{1}{x} = 0$."
    ],
    "stepByStepSolutionAr": [
      "١. قيمة التكامل المباشرة = [لوـهـ ع] من س إلى 2س = لوـهـ(2س / س) = لوـهـ(2).",
      "٢. بما أن الناتج هو عدد ثابت لوـهـ(2)، فإن مشتقته بالنسبة لـ س تساوي صفراً.",
      "٣. بقاعدة لايبنتز مباشرة: (1 / 2س) × 2 - (1 / س) × 1 = 1/س - 1/س = 0."
    ],
    "teacherTipEn": "A wonderful conceptual problem where the integral is constant independent of x.",
    "teacherTipAr": "مسألة مفاهيمية رائعة؛ قيمة التكامل ثابتة ولا تعتمد على س، فمشتقته صفر."
  },
  {
    "id": "calc_ch4_db_hots_142",
    "titleEn": "Definite Integral Symmetry on Sine Tangent",
    "titleAr": "تكامل دالة فردية مثلثية على فترة متناظرة",
    "difficulty": "hots",
    "questionEn": "Evaluate the definite integral: $\\int_{-\\pi/3}^{\\pi/3} x^2 \\sin x \\, dx$.",
    "questionAr": "احسب قيمة التكامل المحدد: $\\int_{-\\pi/3}^{\\pi/3} x^2 \\sin x \\, dx$.",
    "optionsEn": [
      "$0$",
      "$\\frac{\\pi}{3}$",
      "$1$",
      "$2$"
    ],
    "optionsAr": [
      "0",
      "ط / 3",
      "1",
      "2"
    ],
    "correctAnswer": "$0$",
    "correctIndex": 0,
    "hintEn": "The integrand is the product of an even function ($x^2$) and an odd function ($\\sin x$), so it is odd.",
    "hintAr": "الدالة المكاملة هي حاصل ضرب دالة زوجية (س²) في دالة فردية (جا س)، فتكون فردية.",
    "stepByStepSolutionEn": [
      "1. Let $f(x) = x^2 \\sin x$.",
      "2. $f(-x) = (-x)^2 \\sin(-x) = x^2(-\\sin x) = -x^2 \\sin x = -f(x)$.",
      "3. Since $f(x)$ is an odd function and the limits $[-\\pi/3, \\pi/3]$ are symmetric, the integral is $0$."
    ],
    "stepByStepSolutionAr": [
      "١. د(-س) = (-س)² جا(-س) = -س² جا س = -د(س).",
      "٢. الدالة فردية والفترة متناظرة حول الصفر.",
      "٣. قيمة التكامل المحدد تساوي صفراً مباشرة."
    ],
    "teacherTipEn": "Even times odd equals odd.",
    "teacherTipAr": "حاصل ضرب دالة زوجية في دالة فردية يعطي دالة فردية دائماً."
  },
  {
    "id": "calc_ch4_db_hots_143",
    "titleEn": "Area Between y = e^x and y = e^(-x)",
    "titleAr": "المساحة المحصورة بين المنحنيين الأسيين هـ^س و هـ^(-س)",
    "difficulty": "hots",
    "questionEn": "Find the area enclosed between $y = e^x$ and $y = e^{-x}$ from $x = 0$ to $x = 1$.",
    "questionAr": "أوجد مساحة المنطقة المحصورة بين المنحنيين $y = e^x$ و $y = e^{-x}$ من $x = 0$ إلى $x = 1$.",
    "optionsEn": [
      "$e + \\frac{1}{e} - 2$",
      "$e - \\frac{1}{e}$",
      "$e + \\frac{1}{e}$",
      "$2$"
    ],
    "optionsAr": [
      "هـ + 1/هـ - 2",
      "هـ - 1/هـ",
      "هـ + 1/هـ",
      "2"
    ],
    "correctAnswer": "$e + \\frac{1}{e} - 2$",
    "correctIndex": 0,
    "hintEn": "Integrate $(e^x - e^{-x})$ from 0 to 1.",
    "hintAr": "كامل الفرق بين الدالتين: تكامل (هـ^س - هـ^(-س)) د س من 0 إلى 1.",
    "stepByStepSolutionEn": [
      "1. On $[0, 1]$, $e^x \\ge e^{-x}$.",
      "2. Area: $A = \\int_0^1 (e^x - e^{-x}) dx = \\left[ e^x + e^{-x} \\right]_0^1$.",
      "3. At $x = 1$: $e^1 + e^{-1} = e + \\frac{1}{e}$.",
      "4. At $x = 0$: $e^0 + e^0 = 1 + 1 = 2$.",
      "5. Total area $= e + \\frac{1}{e} - 2$."
    ],
    "stepByStepSolutionAr": [
      "١. على الفترة [0، 1]: هـ^س ≥ هـ^(-س).",
      "٢. المساحة = تكامل (هـ^س - هـ^(-س)) د س من 0 إلى 1.",
      "٣. الدالة المقابلة = هـ^س + هـ^(-س).",
      "٤. بالتعويض: (هـ + 1/هـ) - (1 + 1) = هـ + 1/هـ - 2."
    ],
    "teacherTipEn": "Notice $(e^{1/2} - e^{-1/2})^2 = e + 1/e - 2$, showing the area is strictly positive.",
    "teacherTipAr": "المساحة موجبة دائماً وتساوي مربع (هـ^(1/2) - هـ^(-1/2))."
  },
  {
    "id": "calc_ch4_db_hots_144",
    "titleEn": "King Property on Rational Trig Fraction",
    "titleAr": "تكامل دالة كسرية مثلثية بخاصية الملك",
    "difficulty": "hots",
    "questionEn": "Evaluate $\\int_0^{\\pi/2} \\frac{1}{1 + \\tan^3 x} dx$.",
    "questionAr": "احسب قيمة التكامل المحدد: $\\int_0^{\\pi/2} \\frac{1}{1 + \\tan^3 x} dx$.",
    "optionsEn": [
      "$\\frac{\\pi}{4}$",
      "$\\frac{\\pi}{2}$",
      "$1$",
      "$0$"
    ],
    "optionsAr": [
      "ط / 4",
      "ط / 2",
      "1",
      "0"
    ],
    "correctAnswer": "$\\frac{\\pi}{4}$",
    "correctIndex": 0,
    "hintEn": "Write $\\tan^3 x = \\frac{\\sin^3 x}{\\cos^3 x}$, then apply King's property.",
    "hintAr": "اكتب ظا³ س بدلالة الجا والجتا ثم طبق خاصية التماثل.",
    "stepByStepSolutionEn": [
      "1. Rewrite: $\\frac{1}{1 + \\tan^3 x} = \\frac{\\cos^3 x}{\\cos^3 x + \\sin^3 x}$.",
      "2. By King's property ($x \\to \\pi/2 - x$), the integral equals $\\int_0^{\\pi/2} \\frac{\\sin^3 x}{\\sin^3 x + \\cos^3 x} dx$.",
      "3. Adding both copies gives $\\int_0^{\\pi/2} 1 dx = \\frac{\\pi}{2}$.",
      "4. The integral value is $\\frac{\\pi}{4}$."
    ],
    "stepByStepSolutionAr": [
      "١. الكسر يكافئ: جتا³ س / (جتا³ س + جا³ س).",
      "٢. بخاصية الملك (س ← ط/2 - س): يتحول الكسر إلى جا³ س / (جا³ س + جتا³ س).",
      "٣. بجمع الصورتين: 2 ت = تكامل 1 د س من 0 إلى ط/2 = ط/2.",
      "٤. إذن ت = ط / 4."
    ],
    "teacherTipEn": "For any power n, $\\int_0^{\\pi/2} \\frac{1}{1 + \\tan^n x} dx = \\frac{\\pi}{4}$.",
    "teacherTipAr": "لأي قوة ن، قيمة هذا التكامل تساوي دائماً ط / 4."
  },
  {
    "id": "calc_ch4_db_hots_145",
    "titleEn": "Volume of Solid with Semicircular Base and Square Slices",
    "titleAr": "حجم مجسم قاعدته نصف دائرية ومقاطعه العرضية مربعات",
    "difficulty": "hots",
    "questionEn": "A solid has a semicircular base $x^2 + y^2 \\le 4$ with $y \\ge 0$. Cross-sections perpendicular to the x-axis are squares with one side in the base. Find the volume of the solid.",
    "questionAr": "مجسم قاعدته نصف الدائرة $x^2 + y^2 \\le 4$ حيث $y \\ge 0$. المقاطع العرضية العمودية على محور السينات هي مربعات تستند إحدى قواعدها على أرضية المجسم. ما حجم هذا المجسم؟",
    "optionsEn": [
      "$\\frac{32}{3}$",
      "$16$",
      "$\\frac{16}{3}$",
      "$8\\pi$"
    ],
    "optionsAr": [
      "32 / 3",
      "16",
      "16 / 3",
      "8ط"
    ],
    "correctAnswer": "$\\frac{32}{3}$",
    "correctIndex": 0,
    "hintEn": "Side of square slice is $y = \\sqrt{4 - x^2}$. Slice area is $A(x) = y^2 = 4 - x^2$.",
    "hintAr": "ضلع المقطع المربع هو ص = جذر(4 - س²)، فيكون مساحة المقطع م(س) = ص² = 4 - س².",
    "stepByStepSolutionEn": [
      "1. For any $x \\in [-2, 2]$, the side length of the square cross-section is $y = \\sqrt{4 - x^2}$.",
      "2. Area of square cross-section: $A(x) = y^2 = 4 - x^2$.",
      "3. Volume: $V = \\int_{-2}^2 (4 - x^2) dx = 2\\int_0^2 (4 - x^2) dx = 2 \\left[ 4x - \\frac{x^3}{3} \\right]_0^2 = 2 [8 - \\frac{8}{3}] = \\frac{32}{3}$."
    ],
    "stepByStepSolutionAr": [
      "١. طول ضلع المقطع المربع عند أي س هو ص = جذر(4 - س²).",
      "٢. مساحة المقطع المربع = ص² = 4 - س².",
      "٣. الحجم = تكامل (4 - س²) د س من -2 إلى 2 = 2 [8 - 8/3] = 32 / 3 وحدة مكعبة."
    ],
    "teacherTipEn": "Cavalieri's slicing method integrates cross-sectional area directly: $V = \\int A(x) dx$.",
    "teacherTipAr": "طريقة الشرائح لكافالييري تكامل مساحات المقاطع العرضية مباشرة."
  },
  {
    "id": "calc_ch4_db_hots_146",
    "titleEn": "Volume of Solid with Circular Base and Equilateral Triangle Slices",
    "titleAr": "حجم مجسم قاعدته دائرية ومقاطعه مثلثات متساوية الأضلاع",
    "difficulty": "hots",
    "questionEn": "A solid has a circular base $x^2 + y^2 \\le 1$. Cross-sections perpendicular to the x-axis are equilateral triangles. Find the volume of this solid.",
    "questionAr": "مجسم قاعدته الدائرة $x^2 + y^2 \\le 1$. المقاطع العرضية العمودية على محور السينات هي مثلثات متساوية الأضلاع. أوجد حجم هذا المجسم.",
    "optionsEn": [
      "$\\frac{4\\sqrt{3}}{3}$",
      "$\\frac{2\\sqrt{3}}{3}$",
      "$\\sqrt{3}$",
      "$2\\sqrt{3}$"
    ],
    "optionsAr": [
      "4 جذر(3) / 3",
      "2 جذر(3) / 3",
      "جذر(3)",
      "2 جذر(3)"
    ],
    "correctAnswer": "$\\frac{4\\sqrt{3}}{3}$",
    "correctIndex": 0,
    "hintEn": "Base of triangle is $2y = 2\\sqrt{1 - x^2}$. Area is $\\frac{\\sqrt{3}}{4} s^2$.",
    "hintAr": "قاعدة المثلث 2ص = 2 جذر(1 - س²). مساحة المثلث المتساوي الأضلاع = (جذر 3 / 4) × طول الضلع².",
    "stepByStepSolutionEn": [
      "1. For each $x \\in [-1, 1]$, side length is $s = 2y = 2\\sqrt{1 - x^2}$.",
      "2. Area of equilateral triangle slice: $A(x) = \\frac{\\sqrt{3}}{4} s^2 = \\frac{\\sqrt{3}}{4} (4(1 - x^2)) = \\sqrt{3}(1 - x^2)$.",
      "3. Volume: $V = \\int_{-1}^1 \\sqrt{3}(1 - x^2) dx = 2\\sqrt{3} \\int_0^1 (1 - x^2) dx = 2\\sqrt{3} [1 - \\frac{1}{3}] = \\frac{4\\sqrt{3}}{3}$."
    ],
    "stepByStepSolutionAr": [
      "١. طول ضلع المثلث عند أي س = 2ص = 2 جذر(1 - س²).",
      "٢. مساحة المقطع المثلث: م(س) = (جذر 3 / 4) × (2ص)² = جذر(3)(1 - س²).",
      "٣. الحجم = تكامل م(س) د س من -1 إلى 1 = 2 جذر(3) × (1 - 1/3) = 4 جذر(3) / 3."
    ],
    "teacherTipEn": "Equilateral triangle slice formula: $A = \\frac{\\sqrt{3}}{4}\\text{side}^2$.",
    "teacherTipAr": "مساحة المثلث المتساوي الأضلاع تساوي (جذر 3 / 4) × مربع طول ضلعه."
  },
  {
    "id": "calc_ch4_db_hots_147",
    "titleEn": "Area Between Cubic and Tangent at Extrema",
    "titleAr": "المساحة المحصورة بين منحنى تكعيبي ومماسه عند القمة",
    "difficulty": "hots",
    "questionEn": "Find the area enclosed between the curve $y = x^3 - 3x^2 + 4$ and its horizontal tangent line $y = 4$ at $x = 0$.",
    "questionAr": "أوجد مساحة المنطقة المحصورة بين المنحنى $y = x^3 - 3x^2 + 4$ ومماسه الأفقي $y = 4$ عند النقطة $(0، 4)$.",
    "optionsEn": [
      "$\\frac{27}{4}$",
      "$\\frac{9}{4}$",
      "$\\frac{27}{2}$",
      "$9$"
    ],
    "optionsAr": [
      "27 / 4",
      "9 / 4",
      "27 / 2",
      "9"
    ],
    "correctAnswer": "$\\frac{27}{4}$",
    "correctIndex": 0,
    "hintEn": "Find the second intersection point: $x^3 - 3x^2 + 4 = 4 \\implies x^2(x - 3) = 0 \\implies x = 3$.",
    "hintAr": "أوجد نقطة التقاطع الثانية: س²(س - 3) = 0 ومنها س = 3، ثم كامل الفرق.",
    "stepByStepSolutionEn": [
      "1. Curve and tangent intersect at: $x^3 - 3x^2 + 4 = 4 \\implies x^2(x - 3) = 0 \\implies x = 0$ (tangency) and $x = 3$.",
      "2. On $[0, 3]$, $4 \\ge x^3 - 3x^2 + 4$, so the difference is $4 - (x^3 - 3x^2 + 4) = 3x^2 - x^3$.",
      "3. Area: $A = \\int_0^3 (3x^2 - x^3) dx = \\left[ x^3 - \\frac{x^4}{4} \\right]_0^3 = 27 - \\frac{81}{4} = \\frac{108 - 81}{4} = \\frac{27}{4}$."
    ],
    "stepByStepSolutionAr": [
      "١. تقاطع المنحنى مع المماس: س³ - 3س² = 0 ومنها س = 0 (تماس) و س = 3 (تقاطع).",
      "٢. الفرق بين الدالتين: 4 - (س³ - 3س² + 4) = 3س² - س³.",
      "٣. المساحة = تكامل (3س² - س³) د س من 0 إلى 3 = [س³ - س⁴/4] = 27 - 81/4 = 27 / 4."
    ],
    "teacherTipEn": "For any cubic tangent at an extreme point, the enclosed area is $\\frac{L^4}{12}$. Here $3^4 / 12 = 81/12 = 27/4$.",
    "teacherTipAr": "قاعدة سريعة لمساحة المنحنى التكعيبي مع مماسه: الطول⁴ / 12 = 81 / 12 = 27 / 4."
  },
  {
    "id": "calc_ch4_db_hots_148",
    "titleEn": "Volume with Cylindrical Shells Inside Sphere",
    "titleAr": "حجم ثقب أسطواني محفور في مركز كرة",
    "difficulty": "hots",
    "questionEn": "A cylindrical hole of radius $r = 1$ is bored through the center of a sphere of radius $R = 2$. Find the volume of the sphere material REMAINING (the napkin ring problem).",
    "questionAr": "ثُقب أسطواني نصف قطره $r = 1$ حُفر عبر مركز كرة نصف قطرها $R = 2$. أوجد حجم مادة الكرة المتبقية (مسألة حلقة المناديل).",
    "optionsEn": [
      "$4\\sqrt{3}\\pi$",
      "$2\\sqrt{3}\\pi$",
      "$\\frac{32\\pi}{3}$",
      "$8\\pi$"
    ],
    "optionsAr": [
      "4 جذر(3) ط",
      "2 جذر(3) ط",
      "32 ط / 3",
      "8 ط"
    ],
    "correctAnswer": "$4\\sqrt{3}\\pi$",
    "correctIndex": 0,
    "hintEn": "Height of the ring is $h = 2\\sqrt{R^2 - r^2} = 2\\sqrt{4 - 1} = 2\\sqrt{3}$. Volume is $V = \\frac{\\pi}{6} h^3$.",
    "hintAr": "ارتفاع الحلقة المتبقية ع = 2 جذر(4 - 1) = 2 جذر(3). حجم الحلقة = (ط / 6) ع³.",
    "stepByStepSolutionEn": [
      "1. Height of the napkin ring: $h = 2\\sqrt{R^2 - r^2} = 2\\sqrt{2^2 - 1^2} = 2\\sqrt{3}$.",
      "2. By the classic Napkin Ring Theorem, the remaining volume depends ONLY on height $h$: $V = \\frac{1}{6}\\pi h^3$.",
      "3. $V = \\frac{1}{6}\\pi (2\\sqrt{3})^3 = \\frac{1}{6}\\pi (24\\sqrt{3}) = 4\\sqrt{3}\\pi$."
    ],
    "stepByStepSolutionAr": [
      "١. ارتفاع حلقة المناديل المتبقية: ع = 2 جذر(4 - 1) = 2 جذر(3).",
      "٢. بنظرية حلقة المناديل الشهيرة، يعتمد الحجم المتبقي على الارتفاع ع فقط: الحجم = (1/6) ط ع³.",
      "٣. الحجم = (1/6) ط × (2 جذر 3)³ = (1/6) ط × 24 جذر(3) = 4 جذر(3) ط."
    ],
    "teacherTipEn": "The Napkin Ring Theorem proves the volume depends solely on the ring height h, independent of sphere radius!",
    "teacherTipAr": "نظرية حلقة المناديل المدهشة تثبت أن الحجم المتبقي يعتمد فقط على ارتفاع الحلقة بصرف النظر عن حجم الكرة الأصلية!"
  },
  {
    "id": "calc_ch4_db_hots_149",
    "titleEn": "Area Enclosed by Cardioid Curve Polar",
    "titleAr": "مساحة شكل القلب (الكارديويد) بالتكامل",
    "difficulty": "hots",
    "questionEn": "The area enclosed by the cardioid $r = a(1 + \\cos\\theta)$ in polar coordinates is given by:",
    "questionAr": "المساحة المحصورة داخل منحنى شكل القلب (الكارديويد) $r = a(1 + \\cos\\theta)$ بالإحداثيات القطبية تساوي:",
    "optionsEn": [
      "$\\frac{3}{2}\\pi a^2$",
      "$2\\pi a^2$",
      "$\\pi a^2$",
      "$3\\pi a^2$"
    ],
    "optionsAr": [
      "1.5 ط أ²",
      "2 ط أ²",
      "ط أ²",
      "3 ط أ²"
    ],
    "correctAnswer": "$\\frac{3}{2}\\pi a^2$",
    "correctIndex": 0,
    "hintEn": "Polar area formula: $A = \\frac{1}{2}\\int_0^{2\\pi} r^2 d\\theta$.",
    "hintAr": "قانون المساحة في الإحداثيات القطبية: م = 0.5 × تكامل نق² د θ من 0 إلى 2ط.",
    "stepByStepSolutionEn": [
      "1. Polar area formula: $A = \\frac{1}{2}\\int_0^{2\\pi} a^2(1 + \\cos\\theta)^2 d\\theta = \\frac{a^2}{2}\\int_0^{2\\pi} (1 + 2\\cos\\theta + \\cos^2\\theta) d\\theta$.",
      "2. $\\int_0^{2\\pi} 1 d\\theta = 2\\pi$.",
      "3. $\\int_0^{2\\pi} 2\\cos\\theta d\\theta = 0$.",
      "4. $\\int_0^{2\\pi} \\cos^2\\theta d\\theta = \\pi$.",
      "5. $A = \\frac{a^2}{2}(2\\pi + 0 + \\pi) = \\frac{3}{2}\\pi a^2$."
    ],
    "stepByStepSolutionAr": [
      "١. قانون المساحة القطبية: م = 0.5 أ² × تكامل (1 + 2 جتا θ + جتا² θ) د θ من 0 إلى 2ط.",
      "٢. تكامل 1 يعطي 2ط.",
      "٣. تكامل جتا θ يعطي صفراً على الدورة الكاملة.",
      "٤. تكامل جتا² θ يعطي ط.",
      "٥. المساحة = 0.5 أ² (2ط + ط) = 1.5 ط أ²."
    ],
    "teacherTipEn": "Cardioid area formula: $A = \\frac{3}{2}\\pi a^2$.",
    "teacherTipAr": "الصيغة الكلاسيكية لمساحة الكارديويد هي دائماً 1.5 ط أ²."
  },
  {
    "id": "calc_ch4_db_hots_150",
    "titleEn": "Definite Integral of Symmetrical Odd and Cosine Product",
    "titleAr": "تكامل دالة مختلطة على فترة متناظرة",
    "difficulty": "hots",
    "questionEn": "Evaluate the definite integral: $\\int_{-\\pi}^\\pi (x^5 \\cos x + x^2) dx$.",
    "questionAr": "احسب قيمة التكامل المحدد: $\\int_{-\\pi}^\\pi (x^5 \\cos x + x^2) dx$.",
    "optionsEn": [
      "$\\frac{2\\pi^3}{3}$",
      "$0$",
      "$\\frac{\\pi^3}{3}$",
      "$\\pi^3$"
    ],
    "optionsAr": [
      "2ط³ / 3",
      "0",
      "ط³ / 3",
      "ط³"
    ],
    "correctAnswer": "$\\frac{2\\pi^3}{3}$",
    "correctIndex": 0,
    "hintEn": "Split into odd part $x^5 \\cos x$ (integrates to 0) and even part $x^2$.",
    "hintAr": "فصل التكامل إلى جزء فردي س⁵ جتا س (تكاملها صفر) وجزء زوجي س².",
    "stepByStepSolutionEn": [
      "1. Split: $\\int_{-\\pi}^\\pi x^5 \\cos x dx + \\int_{-\\pi}^\\pi x^2 dx$.",
      "2. The function $x^5 \\cos x$ is odd, so $\\int_{-\\pi}^\\pi x^5 \\cos x dx = 0$.",
      "3. The function $x^2$ is even, so $\\int_{-\\pi}^\\pi x^2 dx = 2\\int_0^\\pi x^2 dx = 2 \\left[ \\frac{x^3}{3} \\right]_0^\\pi = \\frac{2\\pi^3}{3}$.",
      "4. Total integral is $0 + \\frac{2\\pi^3}{3} = \\frac{2\\pi^3}{3}$."
    ],
    "stepByStepSolutionAr": [
      "١. تجزئة التكامل إلى جزأين: تكامل س⁵ جتا س + تكامل س².",
      "٢. دالة س⁵ جتا س فردية، فتكاملها على الفترات المتناظرة يساوي صفراً.",
      "٣. دالة س² زوجية، فتكاملها = 2 × [س³/3] من 0 إلى ط = 2ط³ / 3.",
      "٤. قيمة التكامل الإجمالية = 2ط³ / 3."
    ],
    "teacherTipEn": "Splitting into odd and even parts simplifies complicated definite integrals immediately.",
    "teacherTipAr": "تفكيك الدوال المعقدة إلى مكونات زوجية وفردية يختصر الحسابات على الفترات المتناظرة فوراً."
  },
  {
    "id": "calc_ch4_db_hots_151",
    "titleEn": "Leibniz Integral Rule Derivative",
    "titleAr": "مشتقة دالة معرفة بتكامل محدد (قاعدة لايبنتز)",
    "difficulty": "hots",
    "questionEn": "If $F(x) = \\int_{x}^{x^2} \\sqrt{1 + t^3} \\, dt$, find the derivative $F'(1)$.",
    "questionAr": "إذا كانت $F(x) = \\int_{x}^{x^2} \\sqrt{1 + t^3} \\, dt$، فأوجد قيمة المشتقة $F'(1)$.",
    "optionsEn": [
      "$\\sqrt{2}$",
      "$2\\sqrt{2}$",
      "$0$",
      "$\\frac{\\sqrt{2}}{2}$"
    ],
    "optionsAr": [
      "$\\sqrt{2}$",
      "$2\\sqrt{2}$",
      "$0$",
      "$\\frac{\\sqrt{2}}{2}$"
    ],
    "correctIndex": 0,
    "correctAnswer": "$\\sqrt{2}$",
    "hintEn": "Apply Leibniz rule: $F'(x) = f(b(x)) b'(x) - f(a(x)) a'(x)$.",
    "hintAr": "طبق قاعدة لايبنتز: $F'(x) = f(b(x)) b'(x) - f(a(x)) a'(x)$.",
    "teacherTipEn": "Fundamental Theorem of Calculus with variable limits requires applying the chain rule to each limit of integration.",
    "teacherTipAr": "النظرية الأساسية للتفاضل والتكامل مع حدود متغيرة تتطلب ضرب قيمة الدالة عند الحد في مشتقة الحد.",
    "stepByStepSolutionEn": [
      "Apply Leibniz rule: $F'(x) = \\sqrt{1 + (x^2)^3} \\cdot (2x) - \\sqrt{1 + x^3} \\cdot (1) = 2x\\sqrt{1 + x^6} - \\sqrt{1 + x^3}$.",
      "Substitute $x = 1$: $F'(1) = 2(1)\\sqrt{1 + 1} - \\sqrt{1 + 1} = 2\\sqrt{2} - \\sqrt{2} = \\sqrt{2}$."
    ],
    "stepByStepSolutionAr": [
      "تطبيق قاعدة لايبنتز: $F'(x) = 2x\\sqrt{1 + x^6} - \\sqrt{1 + x^3}$.",
      "التعويض عن $x = 1$: $F'(1) = 2\\sqrt{2} - \\sqrt{2} = \\sqrt{2}$."
    ]
  },
  {
    "id": "calc_ch4_db_hots_152",
    "titleEn": "Definite Integral of Fractional Symmetrical Function",
    "titleAr": "تكامل محدد لدالة كسرية متماثلة بجذور",
    "difficulty": "hots",
    "questionEn": "Evaluate the definite integral: $\\int_{2}^{7} \\frac{\\sqrt{x}}{\\sqrt{x} + \\sqrt{9 - x}} \\, dx$.",
    "questionAr": "احسب التكامل المحدد: $\\int_{2}^{7} \\frac{\\sqrt{x}}{\\sqrt{x} + \\sqrt{9 - x}} \\, dx$.",
    "optionsEn": [
      "$\\frac{5}{2}$",
      "$5$",
      "$\\frac{9}{2}$",
      "$2$"
    ],
    "optionsAr": [
      "$\\frac{5}{2}$",
      "$5$",
      "$\\frac{9}{2}$",
      "$2$"
    ],
    "correctIndex": 0,
    "correctAnswer": "$\\frac{5}{2}$",
    "hintEn": "Use King's property: $\\int_a^b f(x) dx = \\int_a^b f(a + b - x) dx$. Here $a + b = 9$.",
    "hintAr": "استخدم خاصية حدود التكامل: $\\int_a^b f(x) dx = \\int_a^b f(a + b - x) dx$، حيث $a + b = 9$.",
    "teacherTipEn": "Whenever $f(x) + f(a + b - x) = 1$, the integral is simply $\\frac{b - a}{2} = \\frac{7 - 2}{2} = \\frac{5}{2}$.",
    "teacherTipAr": "إذا كان مجموع الدالة وانعكاسها يساوي 1، فإن قيمة التكامل تساوي نصف طول الفترة $\\frac{b - a}{2} = 2.5$.",
    "stepByStepSolutionEn": [
      "Let $I = \\int_2^7 \\frac{\\sqrt{x}}{\\sqrt{x} + \\sqrt{9 - x}} dx$.",
      "Using $x \\to 2 + 7 - x = 9 - x$: $I = \\int_2^7 \\frac{\\sqrt{9 - x}}{\\sqrt{9 - x} + \\sqrt{x}} dx$.",
      "Add the two equations: $2I = \\int_2^7 \\frac{\\sqrt{x} + \\sqrt{9 - x}}{\\sqrt{x} + \\sqrt{9 - x}} dx = \\int_2^7 1 dx = 7 - 2 = 5$.",
      "Divide by 2: $I = \\frac{5}{2}$."
    ],
    "stepByStepSolutionAr": [
      "بفرض التكامل $I$.",
      "بالتعويض عن $x$ بـ $9 - x$: نحصل على صورة متطابقة للمقام مع تبادل البسطين.",
      "جمع المعادلتين: $2I = \\int_2^7 1 dx = 5$.",
      "الناتج النهائي: $I = \\frac{5}{2}$."
    ]
  },
  {
    "id": "calc_ch4_db_hots_153",
    "titleEn": "Volume of Torus (Donut) of Revolution",
    "titleAr": "حجم الحلقة الدائرية (التورس) الناشئة عن الدوران",
    "difficulty": "hots",
    "questionEn": "The circle $(x - 5)^2 + y^2 = 4$ is revolved completely about the y-axis. Find the volume of the resulting torus.",
    "questionAr": "الدائرة $(x - 5)^2 + y^2 = 4$ دارت دورة كاملة حول محور الصادات. أوجد حجم الحلقة الدائرية (التورس) الناشئة.",
    "optionsEn": [
      "$40\\pi^2\\text{ cubic units}$",
      "$20\\pi^2\\text{ cubic units}$",
      "$80\\pi^2\\text{ cubic units}$",
      "$10\\pi^2\\text{ cubic units}$"
    ],
    "optionsAr": [
      "$40\\pi^2\\text{ وحدة مكعبة}$",
      "$20\\pi^2\\text{ وحدة مكعبة}$",
      "$80\\pi^2\\text{ وحدة مكعبة}$",
      "$10\\pi^2\\text{ وحدة مكعبة}$"
    ],
    "correctIndex": 0,
    "correctAnswer": "$40\\pi^2\\text{ cubic units}$",
    "hintEn": "Use Pappus's Centroid Theorem: $V = 2\\pi \\bar{x} \\cdot A$.",
    "hintAr": "استخدم نظرية بابوس لمركز الثقل: $V = 2\\pi \\bar{x} \\cdot A$.",
    "teacherTipEn": "Pappus's Theorem states that volume equals (area of cross-section) $\\times$ (distance traveled by its centroid): $V = (\\pi r^2)(2\\pi R) = 2\\pi^2 R r^2$. Here $R = 5, r = 2 \\implies 2\\pi^2(5)(4) = 40\\pi^2$.",
    "teacherTipAr": "نظرية بابوس: الحجم = مساحة المقطع $\\times$ محيط مسار مركز الثقل $= (\\pi r^2)(2\\pi R)$. هنا $R = 5$ و $r = 2$ فالناتج $40\\pi^2$.",
    "stepByStepSolutionEn": [
      "Center of circle: $(5, 0)$, radius $r = 2$.",
      "Area of circle: $A = \\pi r^2 = \\pi (2^2) = 4\\pi$.",
      "Distance of centroid to rotation axis (y-axis): $R = 5$.",
      "Circumference traced by centroid: $2\\pi R = 2\\pi(5) = 10\\pi$.",
      "Volume by Pappus: $V = A \\times (2\\pi R) = 4\\pi \\times 10\\pi = 40\\pi^2\\text{ cubic units}$."
    ],
    "stepByStepSolutionAr": [
      "مركز الدائرة: $(5, 0)$ ونصف قطرها $r = 2$.",
      "مساحة الدائرة: $A = 4\\pi$.",
      "بعد مركز الثقل عن محور الدوران: $R = 5$.",
      "الحجم بنظرية بابوس: $V = 4\\pi \\times 2\\pi(5) = 40\\pi^2\\text{ وحدة مكعبة}$."
    ]
  },
  {
    "id": "calc_ch4_db_hots_154",
    "titleEn": "Definite Integral of Floor-Related Function",
    "titleAr": "تكامل محدد لدالة كسرية مع مقلوب",
    "difficulty": "hots",
    "questionEn": "Evaluate the definite integral: $\\int_{1/2}^{2} \\frac{\\ln(x)}{1 + x^2} \\, dx$.",
    "questionAr": "احسب التكامل المحدد: $\\int_{1/2}^{2} \\frac{\\ln(x)}{1 + x^2} \\, dx$.",
    "optionsEn": [
      "$0$",
      "$\\frac{1}{2}$",
      "$\\ln(2)$",
      "$\\frac{\\pi}{4}$"
    ],
    "optionsAr": [
      "$0$",
      "$\\frac{1}{2}$",
      "$\\ln(2)$",
      "$\\frac{\\pi}{4}$"
    ],
    "correctIndex": 0,
    "correctAnswer": "$0$",
    "hintEn": "Substitute $x = \\frac{1}{u}$ and note that $\\ln(1/u) = -\\ln(u)$.",
    "hintAr": "عوض بـ $x = 1/u$ ولاحظ أن $\\ln(1/u) = -\\ln(u)$.",
    "teacherTipEn": "The reciprocal transformation $x = 1/u$ is magical for integrals with reciprocal limits $[1/a, a]$.",
    "teacherTipAr": "التعويض بالمقلوب $x = 1/u$ أداة سحرية للتكاملات ذات الحدود المقلوبة $[1/a, a]$.",
    "stepByStepSolutionEn": [
      "Let $x = \\frac{1}{u} \\implies dx = -\\frac{du}{u^2}$. Limits become $2$ to $1/2$.",
      "Integrand: $\\frac{\\ln(1/u)}{1 + (1/u)^2} \\left(-\\frac{du}{u^2}\\right) = \\frac{-\\ln(u)}{\\frac{u^2+1}{u^2}} \\left(-\\frac{du}{u^2}\\right) = \\frac{\\ln(u)}{1 + u^2} du$.",
      "With reversed limits: $I = \\int_2^{1/2} \\frac{\\ln u}{1 + u^2} du = -\\int_{1/2}^2 \\frac{\\ln u}{1 + u^2} du = -I$.",
      "Therefore, $2I = 0 \\implies I = 0$."
    ],
    "stepByStepSolutionAr": [
      "نفرض $x = 1/u$ إذن $dx = -du/u^2$.",
      "بالتعويض وتعديل حدود التكامل نجد أن $I = -I$.",
      "إذن $2I = 0 \\implies I = 0$."
    ]
  },
  {
    "id": "calc_ch4_db_hots_155",
    "titleEn": "Definite Integral of Trigonometric Power Function",
    "titleAr": "تكامل محدد لقوى دوال مثلثية (صيغة واليس)",
    "difficulty": "hots",
    "questionEn": "Evaluate: $\\int_{0}^{\\pi/2} \\sin^4(x) \\cos^2(x) \\, dx$.",
    "questionAr": "احسب: $\\int_{0}^{\\pi/2} \\sin^4(x) \\cos^2(x) \\, dx$.",
    "optionsEn": [
      "$\\frac{\\pi}{32}$",
      "$\\frac{\\pi}{16}$",
      "$\\frac{\\pi}{64}$",
      "$\\frac{3\\pi}{32}$"
    ],
    "optionsAr": [
      "$\\frac{\\pi}{32}$",
      "$\\frac{\\pi}{16}$",
      "$\\frac{\\pi}{64}$",
      "$\\frac{3\\pi}{32}$"
    ],
    "correctIndex": 0,
    "correctAnswer": "$\\frac{\\pi}{32}$",
    "hintEn": "Use Wallis's formula: $\\frac{(3 \\cdot 1)(1)}{6 \\cdot 4 \\cdot 2} \\times \\frac{\\pi}{2}$.",
    "hintAr": "طبق صيغة واليس للتكاملات المثلثية: $\\frac{(3 \\times 1)(1)}{6 \\times 4 \\times 2} \\times \\frac{\\pi}{2}$.",
    "teacherTipEn": "Wallis's formula for $\\int_0^{\\pi/2} \\sin^m(x) \\cos^n(x) dx$ with both $m, n$ even gives $\\frac{(m-1)!!(n-1)!!}{(m+n)!!} \\cdot \\frac{\\pi}{2}$.",
    "teacherTipAr": "صيغة واليس عند كون الأسين زوجيين تعطي $\\frac{(3 \\times 1)(1)}{6 \\times 4 \\times 2} \\times \\frac{\\pi}{2} = \\frac{3}{48} \\times \\frac{\\pi}{2} = \\frac{\\pi}{32}$.",
    "stepByStepSolutionEn": [
      "Apply Wallis formula: numerator is $(4 - 1)(4 - 3) \\times (2 - 1) = 3 \\times 1 \\times 1 = 3$.",
      "Denominator is $(4 + 2)(4 + 2 - 2)(4 + 2 - 4) = 6 \\times 4 \\times 2 = 48$.",
      "Multiply by $\\frac{\\pi}{2}$ (since both powers are even): $\\frac{3}{48} \\times \\frac{\\pi}{2} = \\frac{1}{16} \\times \\frac{\\pi}{2} = \\frac{\\pi}{32}$."
    ],
    "stepByStepSolutionAr": [
      "تطبيق صيغة واليس: البسط $= 3 \\times 1 = 3$.",
      "المقام $= 6 \\times 4 \\times 2 = 48$.",
      "الضرب في $\\pi/2$: $\\frac{3}{48} \\times \\frac{\\pi}{2} = \\frac{\\pi}{32}$."
    ]
  },
  {
    "id": "calc_ch4_db_hots_156",
    "titleEn": "Volume of Revolution with Shifted Axis of Rotation",
    "titleAr": "حجم دوراني حول محور موازٍ لمحور السينات",
    "difficulty": "hots",
    "questionEn": "Find the volume generated by revolving the region bounded by $y = x^2$ and $y = 4$ about the line $y = 4$.",
    "questionAr": "أوجد حجم الجسم الناشئ عن دوران المنطقة المحدودة بالمنحنى $y = x^2$ والمستقيم $y = 4$ دورة كاملة حول المستقيم $y = 4$.",
    "optionsEn": [
      "$\\frac{256\\pi}{15}\\text{ cubic units}$",
      "$\\frac{128\\pi}{15}\\text{ cubic units}$",
      "$\\frac{512\\pi}{15}\\text{ cubic units}$",
      "$\\frac{64\\pi}{5}\\text{ cubic units}$"
    ],
    "optionsAr": [
      "$\\frac{256\\pi}{15}\\text{ وحدة مكعبة}$",
      "$\\frac{128\\pi}{15}\\text{ وحدة مكعبة}$",
      "$\\frac{512\\pi}{15}\\text{ وحدة مكعبة}$",
      "$\\frac{64\\pi}{5}\\text{ وحدة مكعبة}$"
    ],
    "correctIndex": 0,
    "correctAnswer": "$\\frac{256\\pi}{15}\\text{ cubic units}$",
    "hintEn": "The distance from the curve to the rotation axis $y = 4$ is $R(x) = 4 - x^2$. Use $V = \\pi \\int_{-2}^{2} (4 - x^2)^2 dx$.",
    "hintAr": "بعد المنحنى عن محور الدوران $y = 4$ هو $R(x) = 4 - x^2$. طبق $V = \\pi \\int_{-2}^2 (4 - x^2)^2 dx$.",
    "teacherTipEn": "When rotating around $y = k$, the radius of the disk is $|k - y(x)|$.",
    "teacherTipAr": "عند الدوران حول خط موازٍ $y = k$، يكون نصف قطر القرص مساوياً $|k - y(x)|$.",
    "stepByStepSolutionEn": [
      "Intersections: $x^2 = 4 \\implies x = \\pm 2$.",
      "Radius of disk: $R(x) = 4 - x^2$.",
      "Volume: $V = \\pi \\int_{-2}^2 (4 - x^2)^2 dx = 2\\pi \\int_0^2 (16 - 8x^2 + x^4) dx$.",
      "Integrate: $2\\pi \\left[ 16x - \\frac{8x^3}{3} + \\frac{x^5}{5} \\right]_0^2 = 2\\pi \\left( 32 - \\frac{64}{3} + \\frac{32}{5} \\right) = 64\\pi \\left( 1 - \\frac{2}{3} + \\frac{1}{5} \\right) = 64\\pi \\left( \\frac{4}{15} \\right) = \\frac{256\\pi}{15}\\text{ cubic units}$."
    ],
    "stepByStepSolutionAr": [
      "حدود التكامل: $x = \\pm 2$.",
      "نصف قطر القرص: $R(x) = 4 - x^2$.",
      "الحساب: $V = 2\\pi \\int_0^2 (16 - 8x^2 + x^4) dx = \\frac{256\\pi}{15}\\text{ وحدة مكعبة}$."
    ]
  },
  {
    "id": "calc_ch4_db_hots_157",
    "titleEn": "Infinite Limit of Riemann Sum",
    "titleAr": "نهاية مجموع ريمان اللانهائي كتكامل محدد",
    "difficulty": "hots",
    "questionEn": "Evaluate the limit of the Riemann sum: $\\lim_{n \\to \\infty} \\sum_{r=1}^{n} \\frac{n}{n^2 + r^2}$.",
    "questionAr": "احسب نهاية مجموع ريمان: $\\lim_{n \\to \\infty} \\sum_{r=1}^{n} \\frac{n}{n^2 + r^2}$.",
    "optionsEn": [
      "$\\frac{\\pi}{4}$",
      "$\\frac{\\pi}{2}$",
      "$\\ln(2)$",
      "$1$"
    ],
    "optionsAr": [
      "$\\frac{\\pi}{4}$",
      "$\\frac{\\pi}{2}$",
      "$\\ln(2)$",
      "$1$"
    ],
    "correctIndex": 0,
    "correctAnswer": "$\\frac{\\pi}{4}$",
    "hintEn": "Factor out $\\frac{1}{n}$: $\\lim_{n \\to \\infty} \\frac{1}{n} \\sum_{r=1}^n \\frac{1}{1 + (r/n)^2} = \\int_0^1 \\frac{1}{1 + x^2} dx$.",
    "hintAr": "أخرج $\\frac{1}{n}$ عاملاً مشتركاً لتحويل المجموع إلى تكامل ريمان $\\int_0^1 \\frac{1}{1+x^2} dx$.",
    "teacherTipEn": "Every Riemann limit of form $\\lim_{n \\to \\infty} \\frac{1}{n} \\sum f(r/n)$ equals $\\int_0^1 f(x) dx$.",
    "teacherTipAr": "أي نهاية لمجموع ريمان بالصورة $\\frac{1}{n}\\sum f(r/n)$ تكافئ مباشرة التكامل المحدد $\\int_0^1 f(x) dx$.",
    "stepByStepSolutionEn": [
      "Rewrite term: $\\frac{n}{n^2 + r^2} = \\frac{1}{n} \\cdot \\frac{1}{1 + (r/n)^2}$.",
      "Convert to integral: $\\lim_{n \\to \\infty} \\frac{1}{n} \\sum_{r=1}^n \\frac{1}{1 + (r/n)^2} = \\int_0^1 \\frac{1}{1 + x^2} dx$.",
      "Integrate: $[\\tan^{-1}(x)]_0^1 = \\tan^{-1}(1) - \\tan^{-1}(0) = \\frac{\\pi}{4}$."
    ],
    "stepByStepSolutionAr": [
      "إعادة كتابة الحد: $\\frac{1}{n} \\cdot \\frac{1}{1 + (r/n)^2}$.",
      "التحويل للتكامل: $\\int_0^1 \\frac{1}{1 + x^2} dx$.",
      "حساب الناتج: $[\\tan^{-1}(x)]_0^1 = \\frac{\\pi}{4}$."
    ]
  },
  {
    "id": "calc_ch4_db_hots_158",
    "titleEn": "Area of Region Bounded by Loop of Parametric Curve",
    "titleAr": "مساحة المنطقة المحصورة داخل عروة منحنى بارامتري",
    "difficulty": "hots",
    "questionEn": "Find the area of the loop formed by the parametric curve $x = 3 - t^2$, $y = t(3 - t^2)$.",
    "questionAr": "أوجد مساحة العروة المغلقة للمنحنى البارامتري $x = 3 - t^2$ و $y = t(3 - t^2)$.",
    "optionsEn": [
      "$\\frac{24\\sqrt{3}}{5}\\text{ sq units}$",
      "$\\frac{12\\sqrt{3}}{5}\\text{ sq units}$",
      "$\\frac{16\\sqrt{3}}{5}\\text{ sq units}$",
      "$4\\sqrt{3}\\text{ sq units}$"
    ],
    "optionsAr": [
      "$\\frac{24\\sqrt{3}}{5}\\text{ وحدة مربعة}$",
      "$\\frac{12\\sqrt{3}}{5}\\text{ وحدة مربعة}$",
      "$\\frac{16\\sqrt{3}}{5}\\text{ وحدة مربعة}$",
      "$4\\sqrt{3}\\text{ وحدة مربعة}$"
    ],
    "correctIndex": 0,
    "correctAnswer": "$\\frac{24\\sqrt{3}}{5}\\text{ sq units}$",
    "hintEn": "The loop crosses itself at $x = 0$ when $t = \\pm \\sqrt{3}$. Use $A = \\int_{-\\sqrt{3}}^{\\sqrt{3}} y \\frac{dx}{dt} dt$.",
    "hintAr": "العروة تغلق عند $t = \\pm \\sqrt{3}$. طبق قانون المساحة البارامترية $A = \\int y dx = \\int y(t) x'(t) dt$.",
    "teacherTipEn": "For parametric loops, taking the absolute value of $\\int y(t) x'(t) dt$ over the parameter interval that traces the loop gives the exact area.",
    "teacherTipAr": "لحساب مساحة عروة بارامترية، نكامل $y(t) x'(t) dt$ بين قيمتي الوسيط اللتين تغلقان العروة.",
    "stepByStepSolutionEn": [
      "The loop closes at the origin/self-intersection: $y = 0 \\implies t(3 - t^2) = 0 \\implies t = \\pm \\sqrt{3}$.",
      "Derivatives: $\\frac{dx}{dt} = -2t$.",
      "Area integral: $A = \\left| \\int_{-\\sqrt{3}}^{\\sqrt{3}} t(3 - t^2)(-2t) dt \\right| = 2 \\int_0^{\\sqrt{3}} 2t^2(3 - t^2) dt$.",
      "Integrate: $4 \\int_0^{\\sqrt{3}} (3t^2 - t^4) dt = 4 \\left[ t^3 - \\frac{t^5}{5} \\right]_0^{\\sqrt{3}}$.",
      "Substitute $t = \\sqrt{3}$: $4 \\left( 3\\sqrt{3} - \\frac{9\\sqrt{3}}{5} \\right) = 4 \\left( \\frac{15\\sqrt{3} - 9\\sqrt{3}}{5} \\right) = 4 \\left( \\frac{6\\sqrt{3}}{5} \\right) = \\frac{24\\sqrt{3}}{5}\\text{ sq units}$."
    ],
    "stepByStepSolutionAr": [
      "حدود العروة عند $y = 0$: $t = \\pm \\sqrt{3}$.",
      "مشتقة $x$: $x'(t) = -2t$.",
      "التكامل: $A = 4 \\int_0^{\\sqrt{3}} (3t^2 - t^4) dt = 4 [t^3 - t^5/5]_0^{\\sqrt{3}}$.",
      "التعويض: $4(3\\sqrt{3} - 9\\sqrt{3}/5) = \\frac{24\\sqrt{3}}{5}\\text{ وحدة مربعة}$."
    ]
  }
]
};
