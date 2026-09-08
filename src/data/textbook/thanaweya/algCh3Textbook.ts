import type { SolvedProblem } from '../../../types/curriculum';

export const algCh3SolvedExamples: SolvedProblem[] = [
  {
    "id": "alg_ch3_se_01",
    "titleEn": "MoE Example 1: Evaluation of Triangular Determinant",
    "titleAr": "مثال الوزارة ١: حساب قيمة محدد على الصورة المثلثية",
    "difficulty": "easy",
    "questionEn": "Find the value of the determinant $\\Delta = \\begin{vmatrix} 3 & 5 & -2 \\\\ 0 & -2 & 7 \\\\ 0 & 0 & 4 \\end{vmatrix}$.",
    "questionAr": "أوجد قيمة المحدد $\\Delta = \\begin{vmatrix} 3 & 5 & -2 \\\\ 0 & -2 & 7 \\\\ 0 & 0 & 4 \\end{vmatrix}$.",
    "optionsEn": [
      "$-24$",
      "$24$",
      "$-12$",
      "$0$"
    ],
    "optionsAr": [
      "$-24$",
      "$24$",
      "$-12$",
      "$0$"
    ],
    "correctAnswer": "$-24$",
    "correctIndex": 0,
    "hintEn": "The determinant of an upper triangular matrix is the product of the main diagonal elements.",
    "hintAr": "قيمة محدد المصفوفة المثلثية العلوية تساوي حاصل ضرب عناصر القطر الرئيسي.",
    "stepByStepSolutionEn": [
      "1. Notice that all elements below the main diagonal are zero (upper triangular matrix).",
      "2. By properties of determinants, the value equals the product of the main diagonal entries:",
      "$$\\Delta = 3 \\times (-2) \\times 4 = -24$$"
    ],
    "stepByStepSolutionAr": [
      "١. نلاحظ أن جميع العناصر الواقعة أسفل القطر الرئيسي أصفار (محدد على الصورة المثلثية).",
      "٢. من خواص المحددات: قيمة المحدد تساوي حاصل ضرب عناصر القطر الرئيسي:",
      "$$\\Delta = 3 \\times (-2) \\times 4 = -24$$"
    ],
    "teacherTipEn": "Always check for triangular form first; it avoids long expansions!",
    "teacherTipAr": "ابحث دائماً عن الصورة المثلثية أولاً لتجنب الفك الطويل!"
  },
  {
    "id": "alg_ch3_se_02",
    "titleEn": "MoE Example 2: Vanishing Determinant without Expansion",
    "titleAr": "مثال الوزارة ٢: انعدام المحدد دون فكه",
    "difficulty": "easy",
    "questionEn": "Without expanding, show why the determinant $\\begin{vmatrix} 2 & 4 & 6 \\\\ 1 & 2 & 3 \\\\ 5 & -1 & 7 \\end{vmatrix}$ equals zero.",
    "questionAr": "بدون فك المحدد، بين لماذا ينعدم المحدد $\\begin{vmatrix} 2 & 4 & 6 \\\\ 1 & 2 & 3 \\\\ 5 & -1 & 7 \\end{vmatrix}$.",
    "optionsEn": [
      "Row 1 is twice Row 2 (proportional rows)",
      "Row 1 is orthogonal to Row 2",
      "All diagonal elements are positive",
      "Column 1 equals Column 3"
    ],
    "optionsAr": [
      "الصف الأول يساوي ضعف الصف الثاني (تطابق بعد أخذ عامل مشترك)",
      "الصف الأول عمودي على الصف الثاني",
      "جميع عناصر القطر الرئيسي موجبة",
      "العمود الأول يساوي العمود الثالث"
    ],
    "correctAnswer": "Row 1 is twice Row 2 (proportional rows)",
    "correctIndex": 0,
    "hintEn": "Take a common factor of 2 from the first row: $R_1 = 2 R_2$.",
    "hintAr": "بأخذ العامل المشترك 2 من الصف الأول نجد أن $R_1 = 2 R_2$.",
    "stepByStepSolutionEn": [
      "1. Factor out $2$ from the first row $R_1$:",
      "$$\\begin{vmatrix} 2 & 4 & 6 \\\\ 1 & 2 & 3 \\\\ 5 & -1 & 7 \\end{vmatrix} = 2 \\begin{vmatrix} 1 & 2 & 3 \\\\ 1 & 2 & 3 \\\\ 5 & -1 & 7 \\end{vmatrix}$$",
      "2. The first and second rows are now identical ($R_1 = R_2$).",
      "3. By determinant properties, if two rows are identical, the determinant equals zero: $2 \\times 0 = 0$."
    ],
    "stepByStepSolutionAr": [
      "١. بأخذ العامل المشترك 2 من عناصر الصف الأول:",
      "$$\\begin{vmatrix} 2 & 4 & 6 \\\\ 1 & 2 & 3 \\\\ 5 & -1 & 7 \\end{vmatrix} = 2 \\begin{vmatrix} 1 & 2 & 3 \\\\ 1 & 2 & 3 \\\\ 5 & -1 & 7 \\end{vmatrix}$$",
      "٢. الصف الأول يطابق الصف الثاني تماماً.",
      "٣. من خواص المحددات: إذا تساوى صفان في محدد فإن قيمته تنعدم، إذن القيمة = 0."
    ],
    "teacherTipEn": "Two proportional rows or columns always make the determinant zero.",
    "teacherTipAr": "تناسب صفين أو عمودين يجعل المحدد مساوياً للصفر فوراً."
  },
  {
    "id": "alg_ch3_se_03",
    "titleEn": "MoE Example 3: Vandermonde Factorization",
    "titleAr": "مثال الوزارة ٣: تحليل محدد فانديرموند الأساسي",
    "difficulty": "medium",
    "questionEn": "Evaluate the determinant $\\begin{vmatrix} 1 & a & a^2 \\\\ 1 & b & b^2 \\\\ 1 & c & c^2 \\end{vmatrix}$.",
    "questionAr": "أوجد مفكوك المحدد $\\begin{vmatrix} 1 & a & a^2 \\\\ 1 & b & b^2 \\\\ 1 & c & c^2 \\end{vmatrix}$ في أبسط صورة تحليلية.",
    "optionsEn": [
      "$(a - b)(b - c)(c - a)$",
      "$(b - a)(c - b)(a - c)$",
      "$(a + b)(b + c)(c + a)$",
      "$a^2 + b^2 + c^2$"
    ],
    "optionsAr": [
      "$(a - b)(b - c)(c - a)$",
      "$(b - a)(c - b)(a - c)$",
      "$(a + b)(b + c)(c + a)$",
      "$a^2 + b^2 + c^2$"
    ],
    "correctAnswer": "$(a - b)(b - c)(c - a)$",
    "correctIndex": 0,
    "hintEn": "Perform row operations $R_2 - R_1$ and $R_3 - R_1$, then factor out $(b - a)$ and $(c - a)$.",
    "hintAr": "أجرِ العمليتين $R_2 - R_1$ و $R_3 - R_1$، ثم خذ العوامل المشتركة $(b - a)$ و $(c - a)$.",
    "stepByStepSolutionEn": [
      "1. Perform $R_2 \\to R_2 - R_1$ and $R_3 \\to R_3 - R_1$:",
      "$$\\begin{vmatrix} 1 & a & a^2 \\\\ 0 & b - a & b^2 - a^2 \\\\ 0 & c - a & c^2 - a^2 \\end{vmatrix}$$",
      "2. Factor $(b - a)$ from $R_2$ and $(c - a)$ from $R_3$:",
      "$$= (b - a)(c - a) \\begin{vmatrix} 1 & a & a^2 \\\\ 0 & 1 & b + a \\\\ 0 & 1 & c + a \\end{vmatrix}$$",
      "3. Expand along the first column:",
      "$$= (b - a)(c - a) [(c + a) - (b + a)] = (b - a)(c - a)(c - b)$$",
      "4. Rearrange cyclically: $-(a - b) \\cdot (c - a) \\cdot -(b - c) = (a - b)(b - c)(c - a)$."
    ],
    "stepByStepSolutionAr": [
      "١. إجراء العمليتين: $R_2 - R_1$ و $R_3 - R_1$ للحصول على أصفار في العمود الأول.",
      "٢. أخذ $(b - a)$ عاملاً مشتركاً من الصف الثاني و $(c - a)$ من الصف الثالث.",
      "٣. الفك بدلالة عناصر العمود الأول يعطي: $(b - a)(c - a)(c - b)$.",
      "٤. بإعادة الترتيب الدوري: $(a - b)(b - c)(c - a)$."
    ],
    "teacherTipEn": "This is the famous Vandermonde determinant result: (a - b)(b - c)(c - a).",
    "teacherTipAr": "هذا هو محدد فانديرموند الشهير وقيمته تساوي حاصل ضرب فروق المتغيرات الثلاثة."
  },
  {
    "id": "alg_ch3_se_04",
    "titleEn": "MoE Example 4: Determinant with Cube Roots of Unity",
    "titleAr": "مثال الوزارة ٤: محدد يحتوي على الجذور التكعيبية للواحد الصحيح",
    "difficulty": "medium",
    "questionEn": "Find the value of the determinant $\\Delta = \\begin{vmatrix} 1 & \\omega & \\omega^2 \\\\ \\omega & \\omega^2 & 1 \\\\ \\omega^2 & 1 & \\omega \\end{vmatrix}$ where $\\omega$ is a complex cube root of unity.",
    "questionAr": "أوجد قيمة المحدد $\\Delta = \\begin{vmatrix} 1 & \\omega & \\omega^2 \\\\ \\omega & \\omega^2 & 1 \\\\ \\omega^2 & 1 & \\omega \\end{vmatrix}$ حيث $\\omega$ أحد الجذور التكعيبية المركبة للواحد الصحيح.",
    "optionsEn": [
      "$0$",
      "$3$",
      "$-3$",
      "$1$"
    ],
    "optionsAr": [
      "$0$",
      "$3$",
      "$-3$",
      "$1$"
    ],
    "correctAnswer": "$0$",
    "correctIndex": 0,
    "hintEn": "Add all columns to the first column: $C_1 \\to C_1 + C_2 + C_3$, then recall $1 + \\omega + \\omega^2 = 0$.",
    "hintAr": "اجمع جميع الأعمدة إلى العمود الأول: $C_1 + C_2 + C_3$، وتذكر أن $1 + \\omega + \\omega^2 = 0$.",
    "stepByStepSolutionEn": [
      "1. Add columns $C_2$ and $C_3$ to $C_1$:",
      "$$C_1 \\to C_1 + C_2 + C_3 \\implies \\Delta = \\begin{vmatrix} 1 + \\omega + \\omega^2 & \\omega & \\omega^2 \\\\ \\omega + \\omega^2 + 1 & \\omega^2 & 1 \\\\ \\omega^2 + 1 + \\omega & 1 & \\omega \\end{vmatrix}$$",
      "2. Recall the fundamental identity for cube roots of unity: $1 + \\omega + \\omega^2 = 0$.",
      "3. The first column becomes entirely zeros:",
      "$$\\Delta = \\begin{vmatrix} 0 & \\omega & \\omega^2 \\\\ 0 & \\omega^2 & 1 \\\\ 0 & 1 & \\omega \\end{vmatrix} = 0$$"
    ],
    "stepByStepSolutionAr": [
      "١. إضافة العمودين الثاني والثالث إلى العمود الأول: $C_1 + C_2 + C_3$.",
      "٢. تصبح عناصر العمود الأول: $1 + \\omega + \\omega^2$.",
      "٣. بما أن $1 + \\omega + \\omega^2 = 0$، فإن العمود الأول يصبح كلياً أصفاراً.",
      "٤. إذن قيمة المحدد تنعدم وتساوي 0."
    ],
    "teacherTipEn": "A column of zeros immediately makes the determinant zero.",
    "teacherTipAr": "عمود كامل من الأصفار يجعل قيمة المحدد صفراً مباشرة."
  },
  {
    "id": "alg_ch3_se_05",
    "titleEn": "MoE Example 5: Multiplicative Inverse of a 2x2 Matrix",
    "titleAr": "مثال الوزارة ٥: المعكوس الضربي لمصفوفة من الرتبة ٢×٢",
    "difficulty": "easy",
    "questionEn": "Find the multiplicative inverse of the matrix $A = \\begin{pmatrix} 3 & 1 \\\\ 5 & 2 \\end{pmatrix}$.",
    "questionAr": "أوجد المعكوس الضربي للمصفوفة $A = \\begin{pmatrix} 3 & 1 \\\\ 5 & 2 \\end{pmatrix}$.",
    "optionsEn": [
      "$\\begin{pmatrix} 2 & -1 \\\\ -5 & 3 \\end{pmatrix}$",
      "$\\begin{pmatrix} -2 & 1 \\\\ 5 & -3 \\end{pmatrix}$",
      "$\\begin{pmatrix} 3 & -1 \\\\ -5 & 2 \\end{pmatrix}$",
      "$\\begin{pmatrix} 2 & 1 \\\\ 5 & 3 \\end{pmatrix}$"
    ],
    "optionsAr": [
      "$\\begin{pmatrix} 2 & -1 \\\\ -5 & 3 \\end{pmatrix}$",
      "$\\begin{pmatrix} -2 & 1 \\\\ 5 & -3 \\end{pmatrix}$",
      "$\\begin{pmatrix} 3 & -1 \\\\ -5 & 2 \\end{pmatrix}$",
      "$\\begin{pmatrix} 2 & 1 \\\\ 5 & 3 \\end{pmatrix}$"
    ],
    "correctAnswer": "$\\begin{pmatrix} 2 & -1 \\\\ -5 & 3 \\end{pmatrix}$",
    "correctIndex": 0,
    "hintEn": "For $A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$, $A^{-1} = \\frac{1}{|A|} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$.",
    "hintAr": "للمصفوفة $A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$، معكوسها هو $A^{-1} = \\frac{1}{|A|} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$.",
    "stepByStepSolutionEn": [
      "1. Compute the determinant: $|A| = (3)(2) - (1)(5) = 6 - 5 = 1$.",
      "2. Since $|A| = 1 \\ne 0$, the inverse exists.",
      "3. Swap the main diagonal elements and negate the off-diagonal elements:",
      "$$A^{-1} = \\frac{1}{1} \\begin{pmatrix} 2 & -1 \\\\ -5 & 3 \\end{pmatrix} = \\begin{pmatrix} 2 & -1 \\\\ -5 & 3 \\end{pmatrix}$$"
    ],
    "stepByStepSolutionAr": [
      "١. حساب قيمة المحدد: $|A| = (3)(2) - (1)(5) = 6 - 5 = 1$.",
      "٢. بما أن $|A| \\ne 0$، فإن المعكوس الضربي موجود.",
      "٣. نبدل عناصر القطر الرئيسي ونغير إشارات القطر الفرعي:",
      "$$A^{-1} = \\begin{pmatrix} 2 & -1 \\\\ -5 & 3 \\end{pmatrix}$$"
    ],
    "teacherTipEn": "Always check |A| != 0 before attempting to invert a matrix.",
    "teacherTipAr": "تأكد دائماً أن المحدد لا يساوي الصفر قبل إيجاد المعكوس."
  },
  {
    "id": "alg_ch3_se_06",
    "titleEn": "MoE Example 6: Multiplicative Inverse of a 3x3 Matrix via Adjugate",
    "titleAr": "مثال الوزارة ٦: المعكوس الضربي لمصفوفة من الرتبة ٣×٣ باستخدام المصفوفة الملحقة",
    "difficulty": "medium",
    "questionEn": "Given matrix $A = \\begin{pmatrix} 1 & 0 & 2 \\\\ 2 & -1 & 3 \\\\ 4 & 1 & 8 \\end{pmatrix}$, if $|A| = -1$ and $\\text{adj}(A) = \\begin{pmatrix} -11 & 2 & 2 \\\\ -4 & 0 & 1 \\\\ 6 & -1 & -1 \\end{pmatrix}$, find $A^{-1}$.",
    "questionAr": "إذا كانت $A = \\begin{pmatrix} 1 & 0 & 2 \\\\ 2 & -1 & 3 \\\\ 4 & 1 & 8 \\end{pmatrix}$ وكان $|A| = -1$ والمصفوفة الملحقة $\\text{adj}(A) = \\begin{pmatrix} -11 & 2 & 2 \\\\ -4 & 0 & 1 \\\\ 6 & -1 & -1 \\end{pmatrix}$، أوجد المعكوس الضربي $A^{-1}$.",
    "optionsEn": [
      "$\\begin{pmatrix} 11 & -2 & -2 \\\\ 4 & 0 & -1 \\\\ -6 & 1 & 1 \\end{pmatrix}$",
      "$\\begin{pmatrix} -11 & 2 & 2 \\\\ -4 & 0 & 1 \\\\ 6 & -1 & -1 \\end{pmatrix}$",
      "$\\begin{pmatrix} 11 & 2 & 2 \\\\ 4 & 0 & 1 \\\\ 6 & 1 & 1 \\end{pmatrix}$",
      "$\\begin{pmatrix} 1 & 0 & 2 \\\\ 2 & -1 & 3 \\\\ 4 & 1 & 8 \\end{pmatrix}$"
    ],
    "optionsAr": [
      "$\\begin{pmatrix} 11 & -2 & -2 \\\\ 4 & 0 & -1 \\\\ -6 & 1 & 1 \\end{pmatrix}$",
      "$\\begin{pmatrix} -11 & 2 & 2 \\\\ -4 & 0 & 1 \\\\ 6 & -1 & -1 \\end{pmatrix}$",
      "$\\begin{pmatrix} 11 & 2 & 2 \\\\ 4 & 0 & 1 \\\\ 6 & 1 & 1 \\end{pmatrix}$",
      "$\\begin{pmatrix} 1 & 0 & 2 \\\\ 2 & -1 & 3 \\\\ 4 & 1 & 8 \\end{pmatrix}$"
    ],
    "correctAnswer": "$\\begin{pmatrix} 11 & -2 & -2 \\\\ 4 & 0 & -1 \\\\ -6 & 1 & 1 \\end{pmatrix}$",
    "correctIndex": 0,
    "hintEn": "The formula for matrix inverse is $A^{-1} = \\frac{1}{|A|} \\text{adj}(A)$.",
    "hintAr": "قانون المعكوس الضربي للمصفوفة هو $A^{-1} = \\frac{1}{|A|} \\text{adj}(A)$.",
    "stepByStepSolutionEn": [
      "1. Use the inverse formula: $A^{-1} = \\frac{1}{|A|} \\text{adj}(A)$.",
      "2. Given $|A| = -1$, we have $\\frac{1}{|A|} = \\frac{1}{-1} = -1$.",
      "3. Multiply each entry of $\\text{adj}(A)$ by $-1$:",
      "$$A^{-1} = -1 \\begin{pmatrix} -11 & 2 & 2 \\\\ -4 & 0 & 1 \\\\ 6 & -1 & -1 \\end{pmatrix} = \\begin{pmatrix} 11 & -2 & -2 \\\\ 4 & 0 & -1 \\\\ -6 & 1 & 1 \\end{pmatrix}$$"
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق قانون المعكوس الضربي: $A^{-1} = \\frac{1}{|A|} \\text{adj}(A)$.",
      "٢. بما أن $|A| = -1$، إذن نضرب جميع عناصر المصفوفة الملحقة في $-1$.",
      "٣. ينتج:",
      "$$A^{-1} = \\begin{pmatrix} 11 & -2 & -2 \\\\ 4 & 0 & -1 \\\\ -6 & 1 & 1 \\end{pmatrix}$$"
    ],
    "teacherTipEn": "A * adj(A) = |A| * I is another fundamental identity to keep in mind.",
    "teacherTipAr": "العلاقة أ × ملحقة(أ) = |أ| × مصفوفة الوحدة هي علاقة امتحانية ذهبية."
  },
  {
    "id": "alg_ch3_se_07",
    "titleEn": "MoE Example 7: Solving Linear System Using Matrix Inversion",
    "titleAr": "مثال الوزارة ٧: حل نظام معادلات خطية باستخدام المعكوس الضربي",
    "difficulty": "medium",
    "questionEn": "Solve the linear system using matrix inversion: $\\begin{cases} 2x + 5y = 11 \\\\ x + 3y = 7 \\end{cases}$.",
    "questionAr": "حل نظام المعادلات الخطية باستخدام المعكوس الضربي للمصفوفة: $\\begin{cases} 2x + 5y = 11 \\\\ x + 3y = 7 \\end{cases}$.",
    "optionsEn": [
      "$x = -2, \\quad y = 3$",
      "$x = 2, \\quad y = 3$",
      "$x = 3, \\quad y = 1$",
      "$x = 1, \\quad y = 2$"
    ],
    "optionsAr": [
      "$x = -2, \\quad y = 3$",
      "$x = 2, \\quad y = 3$",
      "$x = 3, \\quad y = 1$",
      "$x = 1, \\quad y = 2$"
    ],
    "correctAnswer": "$x = -2, \\quad y = 3$",
    "correctIndex": 0,
    "hintEn": "Write as $A X = B \\implies X = A^{-1} B$, where $A = \\begin{pmatrix} 2 & 5 \\\\ 1 & 3 \\end{pmatrix}$.",
    "hintAr": "اكتب المعادلة المصفوفية $A X = B \\implies X = A^{-1} B$ حيث $A = \\begin{pmatrix} 2 & 5 \\\\ 1 & 3 \\end{pmatrix}$.",
    "stepByStepSolutionEn": [
      "1. Coefficient matrix $A = \\begin{pmatrix} 2 & 5 \\\\ 1 & 3 \\end{pmatrix}$, constants $B = \\begin{pmatrix} 11 \\\\ 7 \\end{pmatrix}$.",
      "2. $|A| = (2)(3) - (5)(1) = 6 - 5 = 1$.",
      "3. $A^{-1} = \\begin{pmatrix} 3 & -5 \\\\ -1 & 2 \\end{pmatrix}$.",
      "4. Compute $X = A^{-1} B$:",
      "$$X = \\begin{pmatrix} 3 & -5 \\\\ -1 & 2 \\end{pmatrix} \\begin{pmatrix} 11 \\\\ 7 \\end{pmatrix} = \\begin{pmatrix} 3(11) - 5(7) \\\\ -1(11) + 2(7) \\end{pmatrix} = \\begin{pmatrix} 33 - 35 \\\\ -11 + 14 \\end{pmatrix} = \\begin{pmatrix} -2 \\\\ 3 \\end{pmatrix}$$",
      "5. Therefore, $x = -2$ and $y = 3$."
    ],
    "stepByStepSolutionAr": [
      "١. مصفوفة المعاملات: $A = \\begin{pmatrix} 2 & 5 \\\\ 1 & 3 \\end{pmatrix}$ ومصفوفة الثوابت $B = \\begin{pmatrix} 11 \\\\ 7 \\end{pmatrix}$.",
      "٢. محدد المعاملات: $|A| = 6 - 5 = 1$.",
      "٣. المعكوس الضربي: $A^{-1} = \\begin{pmatrix} 3 & -5 \\\\ -1 & 2 \\end{pmatrix}$.",
      "٤. ضرب المصفوفات: $X = A^{-1} B = \\begin{pmatrix} 3(11) - 5(7) \\\\ -1(11) + 2(7) \\end{pmatrix} = \\begin{pmatrix} -2 \\\\ 3 \\end{pmatrix}$.",
      "٥. إذن $x = -2$ و $y = 3$."
    ],
    "teacherTipEn": "X = A^{-1} B, order of multiplication is crucial (not B * A^{-1}).",
    "teacherTipAr": "ترتيب الضرب أساسي: س = أ⁻¹ ب وليس ب أ⁻¹."
  },
  {
    "id": "alg_ch3_se_08",
    "titleEn": "MoE Example 8: Cramer's Rule for a 3x3 System",
    "titleAr": "مثال الوزارة ٨: حل نظام خطي ثلاثي بطريقة كرامر",
    "difficulty": "medium",
    "questionEn": "In a system of three linear equations, if the main determinant is $\\Delta = 4$, and the variable determinants are $\\Delta_x = 8$, $\\Delta_y = -4$, and $\\Delta_z = 12$, find the solution $(x, y, z)$.",
    "questionAr": "في نظام معادلات خطية ثلاثي، إذا كانت قيمة المحدد العام $\\Delta = 4$ ومحددات المجاهيل هي $\\Delta_x = 8$ و $\\Delta_y = -4$ و $\\Delta_z = 12$، أوجد الحل $(x, y, z)$.",
    "optionsEn": [
      "$(2, -1, 3)$",
      "$(2, 1, 3)$",
      "$(4, -2, 6)$",
      "$(1, -1, 2)$"
    ],
    "optionsAr": [
      "$(2, -1, 3)$",
      "$(2, 1, 3)$",
      "$(4, -2, 6)$",
      "$(1, -1, 2)$"
    ],
    "correctAnswer": "$(2, -1, 3)$",
    "correctIndex": 0,
    "hintEn": "By Cramer's rule: $x = \\frac{\\Delta_x}{\\Delta}$, $y = \\frac{\\Delta_y}{\\Delta}$, and $z = \\frac{\\Delta_z}{\\Delta}$.",
    "hintAr": "بطريقة كرامر: $x = \\frac{\\Delta_x}{\\Delta}$ و $y = \\frac{\\Delta_y}{\\Delta}$ و $z = \\frac{\\Delta_z}{\\Delta}$.",
    "stepByStepSolutionEn": [
      "1. By Cramer's Rule:",
      "$$x = \\frac{\\Delta_x}{\\Delta} = \\frac{8}{4} = 2$$",
      "$$y = \\frac{\\Delta_y}{\\Delta} = \\frac{-4}{4} = -1$$",
      "$$z = \\frac{\\Delta_z}{\\Delta} = \\frac{12}{4} = 3$$",
      "2. Solution is $(x, y, z) = (2, -1, 3)$."
    ],
    "stepByStepSolutionAr": [
      "١. بتطبيق قاعدة كرامر:",
      "$$x = \\frac{\\Delta_x}{\\Delta} = \\frac{8}{4} = 2$$",
      "$$y = \\frac{\\Delta_y}{\\Delta} = \\frac{-4}{4} = -1$$",
      "$$z = \\frac{\\Delta_z}{\\Delta} = \\frac{12}{4} = 3$$",
      "٢. إذن الحل هو $(2, -1, 3)$."
    ],
    "teacherTipEn": "Cramer's rule requires Delta != 0 for a unique solution.",
    "teacherTipAr": "قاعدة كرامر تشترط دلتا لا تساوي الصفر لضمان وجود حل وحيد."
  },
  {
    "id": "alg_ch3_se_09",
    "titleEn": "MoE Example 9: Rank of a Matrix and Singularity Condition",
    "titleAr": "مثال الوزارة ٩: رتبة مصفوفة وشرط انعدام المحدد",
    "difficulty": "medium",
    "questionEn": "Find the values of $k$ for which the rank of the matrix $A = \\begin{pmatrix} 1 & 2 & 3 \\\\ 2 & k & 6 \\\\ 3 & 6 & 9 \\end{pmatrix}$ is less than 3.",
    "questionAr": "أوجد قيم $k$ التي تجعل رتبة مصفوفة $A = \\begin{pmatrix} 1 & 2 & 3 \\\\ 2 & k & 6 \\\\ 3 & 6 & 9 \\end{pmatrix}$ أقل من 3.",
    "optionsEn": [
      "$k \\in \\mathbb{R}$ (all real numbers)",
      "$k = 4$ only",
      "$k = 0$",
      "$k \\ne 4$"
    ],
    "optionsAr": [
      "$k \\in \\mathbb{R}$ (جميع الأعداد الحقيقية)",
      "$k = 4$ فقط",
      "$k = 0$",
      "$k \\ne 4$"
    ],
    "correctAnswer": "$k \\in \\mathbb{R}$ (all real numbers)",
    "correctIndex": 0,
    "hintEn": "Observe the rows: $R_3 = 3 R_1$ for all values of $k$, so $|A| = 0$ identically.",
    "hintAr": "لاحظ الصفوف: $R_3 = 3 R_1$ دائماً لجميع قيم $k$، وبالتالي المحدد ينعدم ذاتياً.",
    "stepByStepSolutionEn": [
      "1. A $3 \\times 3$ matrix has rank less than 3 if and only if $|A| = 0$.",
      "2. Look at Row 1 and Row 3: $R_3 = (3, 6, 9) = 3 \\times (1, 2, 3) = 3 R_1$.",
      "3. Since $R_3 = 3 R_1$, the third row is always a multiple of the first row, regardless of $k$.",
      "4. Therefore, $|A| = 0$ for all $k \\in \\mathbb{R}$, which means $\\text{rank}(A) < 3$ for every real number $k$."
    ],
    "stepByStepSolutionAr": [
      "١. تكون رتبة مصفوفة من الرتبة الثالثة أقل من 3 إذا وفقط إذا كان $|A| = 0$.",
      "٢. بملاحظة الصفين الأول والثالث: $R_3 = (3, 6, 9) = 3(1, 2, 3) = 3 R_1$.",
      "٣. بما أن الصف الثالث مضاعف للصف الأول بصرف النظر عن $k$، فإن المحدد ينعدم دائماً.",
      "٤. إذن $|A| = 0$ لجميع $k \\in \\mathbb{R}$، وتكون الرتبة أقل من 3 دائماً."
    ],
    "teacherTipEn": "Always scan for identical or proportional rows first!",
    "teacherTipAr": "افحص دائماً وجود صفوف أو أعمدة متناسبة قبل الشروع في فك المحدد بالرموز!"
  },
  {
    "id": "alg_ch3_se_10",
    "titleEn": "MoE Example 10: Non-Trivial Solutions for a Homogeneous System",
    "titleAr": "مثال الوزارة ١٠: وجود حلول غير صفرية لنظام متجانس",
    "difficulty": "hots",
    "questionEn": "Find the value of $m$ such that the homogeneous system has non-trivial solutions: $\\begin{cases} x + 2y - z = 0 \\\\ 2x + my + z = 0 \\\\ x + y + 2z = 0 \\end{cases}$.",
    "questionAr": "أوجد قيمة $m$ التي تجعل للنظام الخطي المتجانس حلولاً غير صفرية: $\\begin{cases} x + 2y - z = 0 \\\\ 2x + my + z = 0 \\\\ x + y + 2z = 0 \\end{cases}$.",
    "optionsEn": [
      "$m = 3$",
      "$m = -3$",
      "$m = 1$",
      "$m = 0$"
    ],
    "optionsAr": [
      "$m = 3$",
      "$m = -3$",
      "$m = 1$",
      "$m = 0$"
    ],
    "correctAnswer": "$m = 3$",
    "correctIndex": 0,
    "hintEn": "A homogeneous system $A X = O$ has non-trivial solutions if and only if $|A| = 0$.",
    "hintAr": "للنظام المتجانس حلول غير صفرية إذا وفقط إذا كان محدد المعاملات مساوياً للصفر: $|A| = 0$.",
    "stepByStepSolutionEn": [
      "1. Coefficient matrix determinant must be zero:",
      "$$|A| = \\begin{vmatrix} 1 & 2 & -1 \\\\ 2 & m & 1 \\\\ 1 & 1 & 2 \\end{vmatrix} = 0$$",
      "2. Expand along the first row:",
      "$$1(2m - 1) - 2(4 - 1) + (-1)(2 - m) = 0$$",
      "3. Simplify:",
      "$$2m - 1 - 6 - 2 + m = 0 \\implies 3m - 9 = 0 \\implies 3m = 9 \\implies m = 3$$"
    ],
    "stepByStepSolutionAr": [
      "١. شرط وجود حلول غير صفرية هو انعدام محدد المعاملات: $|A| = 0$.",
      "٢. فك المحدد بدلالة عناصر الصف الأول:",
      "$$1(2m - 1) - 2(4 - 1) - (2 - m) = 0$$",
      "٣. بالتبسيط: $3m - 9 = 0 \\implies m = 3$."
    ],
    "teacherTipEn": "Homogeneous systems always have the trivial solution (0, 0, 0); non-trivial solutions occur iff |A| = 0.",
    "teacherTipAr": "النظام المتجانس له دائماً الحل الصفري؛ والحلول غير الصفرية تظهر فقط عندما ينعدم المحدد."
  }
];

export const algCh3Exercises: SolvedProblem[] = [
  {
    "id": "alg_ch3_ex_01",
    "titleEn": "Exercise 1: Scalar Multiple Determinant Property |k A|",
    "titleAr": "تمرين ١: خاصية محدد حاصل ضرب عدد في مصفوفة",
    "difficulty": "easy",
    "questionEn": "If $A$ is a square matrix of order $3 \\times 3$ and $|A| = 5$, find $|2A|$.",
    "questionAr": "إذا كانت $A$ مصفوفة مربعة من الرتبة $3 \\times 3$ وكان $|A| = 5$، أوجد قيمة $|2A|$.",
    "optionsEn": [
      "$40$",
      "$10$",
      "$30$",
      "$80$"
    ],
    "optionsAr": [
      "$40$",
      "$10$",
      "$30$",
      "$80$"
    ],
    "correctAnswer": "$40$",
    "correctIndex": 0,
    "hintEn": "For an $n \\times n$ matrix, $|k A| = k^n |A|$. Here $n = 3$, so $|2A| = 2^3 |A|$.",
    "hintAr": "لمصفوفة من الرتبة $n \\times n$: $|k A| = k^n |A|$. هنا $n = 3$، إذن $|2A| = 2^3 |A|$.",
    "stepByStepSolutionEn": [
      "1. Recall property: $|k A| = k^n |A|$, where $n$ is the order of the matrix.",
      "2. Here $n = 3$ and $k = 2$:",
      "$$|2A| = 2^3 |A| = 8 \\times 5 = 40$$"
    ],
    "stepByStepSolutionAr": [
      "١. خاصية ضرب المصفوفة في عدد حقيقي: $|k A| = k^n |A|$.",
      "٢. بالتعويض عن $n = 3$ و $k = 2$:",
      "$$|2A| = 2^3 |A| = 8 \\times 5 = 40$$"
    ],
    "teacherTipEn": "Do not confuse |kA| = k^n |A| with scalar multiplication of numbers!",
    "teacherTipAr": "انتبه: الثابت يخرج مرفوعاً لأس رتبة المصفوفة ك^ن وليس ك فقط!"
  },
  {
    "id": "alg_ch3_ex_02",
    "titleEn": "Exercise 2: Determinant of Matrix Inverse |A^-1|",
    "titleAr": "تمرين ٢: محدد المعكوس الضربي للمصفوفة",
    "difficulty": "easy",
    "questionEn": "If $A$ is an invertible matrix and $|A| = 4$, find $|A^{-1}|$.",
    "questionAr": "إذا كانت $A$ مصفوفة غير منفردة وكان $|A| = 4$، أوجد $|A^{-1}|$.",
    "optionsEn": [
      "$\\frac{1}{4}$",
      "$-4$",
      "$4$",
      "$\\frac{1}{16}$"
    ],
    "optionsAr": [
      "$\\frac{1}{4}$",
      "$-4$",
      "$4$",
      "$\\frac{1}{16}$"
    ],
    "correctAnswer": "$\\frac{1}{4}$",
    "correctIndex": 0,
    "hintEn": "Since $A \\cdot A^{-1} = I$, $|A| \\cdot |A^{-1}| = |I| = 1 \\implies |A^{-1}| = \\frac{1}{|A|}$.",
    "hintAr": "بما أن $A \\cdot A^{-1} = I$، فإن $|A^{-1}| = \\frac{1}{|A|}$.",
    "stepByStepSolutionEn": [
      "1. Property: $|A^{-1}| = \\frac{1}{|A|}$.",
      "2. Given $|A| = 4$, we have $|A^{-1}| = \\frac{1}{4}$."
    ],
    "stepByStepSolutionAr": [
      "١. خاصية محدد المعكوس: $|A^{-1}| = \\frac{1}{|A|}$.",
      "٢. بالتعويض: $|A^{-1}| = \\frac{1}{4}$."
    ],
    "teacherTipEn": "|A^-1| = 1 / |A| is a direct consequence of |AB| = |A||B|.",
    "teacherTipAr": "محدد المعكوس يساوي مقلوب محدد المصفوفة الأصلية."
  },
  {
    "id": "alg_ch3_ex_03",
    "titleEn": "Exercise 3: Determinant of Product |A B|",
    "titleAr": "تمرين ٣: محدد حاصل ضرب مصفوفتين",
    "difficulty": "easy",
    "questionEn": "If $A$ and $B$ are square matrices of the same order such that $|A| = 3$ and $|B| = -2$, find $|A B|$.",
    "questionAr": "إذا كانت $A$ و $B$ مصفوفتين مربعتين من نفس الرتبة وكان $|A| = 3$ و $|B| = -2$، أوجد $|A B|$.",
    "optionsEn": [
      "$-6$",
      "$6$",
      "$1$",
      "$-5$"
    ],
    "optionsAr": [
      "$-6$",
      "$6$",
      "$1$",
      "$-5$"
    ],
    "correctAnswer": "$-6$",
    "correctIndex": 0,
    "hintEn": "For square matrices: $|A B| = |A| \\cdot |B|$.",
    "hintAr": "للمصفوفات المربعة: $|A B| = |A| \\cdot |B|$.",
    "stepByStepSolutionEn": [
      "1. Property: $|A B| = |A| \\cdot |B|$.",
      "2. Substitute values: $|A B| = 3 \\times (-2) = -6$."
    ],
    "stepByStepSolutionAr": [
      "١. خاصية محدد حاصل الضرب: $|A B| = |A| \\cdot |B|$.",
      "٢. بالتعويض: $|A B| = 3 \\times (-2) = -6$."
    ],
    "teacherTipEn": "Determinant of product equals product of determinants.",
    "teacherTipAr": "محدد حاصل الضرب يساوي حاصل ضرب المحددين."
  },
  {
    "id": "alg_ch3_ex_04",
    "titleEn": "Exercise 4: Matrix Singularity Parameter",
    "titleAr": "تمرين ٤: شرط انفراد مصفوفة من الرتبة ٢×٢",
    "difficulty": "easy",
    "questionEn": "Find the values of $k$ that make the matrix $A = \\begin{pmatrix} k & 8 \\\\ 2 & k \\end{pmatrix}$ singular (non-invertible).",
    "questionAr": "أوجد قيم $k$ التي تجعل المصفوفة $A = \\begin{pmatrix} k & 8 \\\\ 2 & k \\end{pmatrix}$ مصفوفة منفردة (ليس لها معكوس ضربي).",
    "optionsEn": [
      "$k = \\pm 4$",
      "$k = 4$ only",
      "$k = \\pm 16$",
      "$k = 0$"
    ],
    "optionsAr": [
      "$k = \\pm 4$",
      "$k = 4$ فقط",
      "$k = \\pm 16$",
      "$k = 0$"
    ],
    "correctAnswer": "$k = \\pm 4$",
    "correctIndex": 0,
    "hintEn": "A matrix is singular if and only if its determinant is zero: $|A| = 0$.",
    "hintAr": "تكون المصفوفة منفردة إذا وفقط إذا كان محددها صفراً: $|A| = 0$.",
    "stepByStepSolutionEn": [
      "1. Singularity condition: $|A| = 0$.",
      "2. Equation: $k^2 - 16 = 0 \\implies k^2 = 16$.",
      "3. Therefore, $k = \\pm 4$."
    ],
    "stepByStepSolutionAr": [
      "١. شرط انفراد المصفوفة: $|A| = 0$.",
      "٢. المعادلة: $k^2 - 16 = 0 \\implies k^2 = 16$.",
      "٣. إذن $k = \\pm 4$."
    ],
    "teacherTipEn": "Singular means |A| = 0 (no inverse). Non-singular means |A| != 0 (invertible).",
    "teacherTipAr": "المصفوفة المنفردة محددها صفر، وغير المنفردة محددها لا يساوي الصفر."
  },
  {
    "id": "alg_ch3_ex_05",
    "titleEn": "Exercise 5: Adjugate Matrix Identity |adj(A)|",
    "titleAr": "تمرين ٥: محدد المصفوفة الملحقة",
    "difficulty": "medium",
    "questionEn": "If $A$ is a $3 \\times 3$ matrix with $|A| = 3$, find the value of $|\\text{adj}(A)|$.",
    "questionAr": "إذا كانت $A$ مصفوفة من الرتبة $3 \\times 3$ وكان $|A| = 3$، أوجد قيمة $|\\text{adj}(A)|$.",
    "optionsEn": [
      "$9$",
      "$3$",
      "$27$",
      "$1$"
    ],
    "optionsAr": [
      "$9$",
      "$3$",
      "$27$",
      "$1$"
    ],
    "correctAnswer": "$9$",
    "correctIndex": 0,
    "hintEn": "For an $n \\times n$ matrix: $|\\text{adj}(A)| = |A|^{n-1}$. Here $n = 3$, so $|\\text{adj}(A)| = |A|^2$.",
    "hintAr": "لمصفوفة من الرتبة $n$: $|\\text{adj}(A)| = |A|^{n-1}$. هنا $n = 3$، إذن $|\\text{adj}(A)| = |A|^2$.",
    "stepByStepSolutionEn": [
      "1. Identity: $A \\cdot \\text{adj}(A) = |A| I$.",
      "2. Taking determinants on both sides: $|A| \\cdot |\\text{adj}(A)| = ||A| I| = |A|^n |I| = |A|^n$.",
      "3. Divide by $|A|$: $|\\text{adj}(A)| = |A|^{n-1}$.",
      "4. For $n = 3$: $|\\text{adj}(A)| = |A|^2 = 3^2 = 9$."
    ],
    "stepByStepSolutionAr": [
      "١. العلاقة الأساسية: $A \\cdot \\text{adj}(A) = |A| I$.",
      "٢. بأخذ المحدد للطرفين: $|A| \\cdot |\\text{adj}(A)| = |A|^3$.",
      "٣. بالقسمة على $|A|$: $|\\text{adj}(A)| = |A|^{n-1} = |A|^2$.",
      "٤. إذن $|\\text{adj}(A)| = 3^2 = 9$."
    ],
    "teacherTipEn": "|adj(A)| = |A|^(n-1) is an essential exam formula.",
    "teacherTipAr": "محدد المصفوفة الملحقة يساوي |أ|^(ن - ١)."
  },
  {
    "id": "alg_ch3_ex_06",
    "titleEn": "Exercise 6: Transpose Determinant Property",
    "titleAr": "تمرين ٦: محدد مدور مصفوفة",
    "difficulty": "easy",
    "questionEn": "If $A$ is a square matrix with $|A| = 7$, what is $|A^T|$?",
    "questionAr": "إذا كانت $A$ مصفوفة مربعة بحيث $|A| = 7$، فما قيمة محدد مدورها $|A^T|$؟",
    "optionsEn": [
      "$7$",
      "$-7$",
      "$\\frac{1}{7}$",
      "$49$"
    ],
    "optionsAr": [
      "$7$",
      "$-7$",
      "$\\frac{1}{7}$",
      "$49$"
    ],
    "correctAnswer": "$7$",
    "correctIndex": 0,
    "hintEn": "The determinant of a matrix equals the determinant of its transpose: $|A^T| = |A|$.",
    "hintAr": "قيمة محدد المصفوفة تساوي قيمة محدد مدورها: $|A^T| = |A|$.",
    "stepByStepSolutionEn": [
      "1. A fundamental property of determinants is $|A^T| = |A|$.",
      "2. Given $|A| = 7$, we have $|A^T| = 7$."
    ],
    "stepByStepSolutionAr": [
      "١. من خواص المحددات الأساسية: $|A^T| = |A|$.",
      "٢. إذن $|A^T| = 7$."
    ],
    "teacherTipEn": "Transposing rows into columns does not change the determinant value.",
    "teacherTipAr": "تدوير المصفوفة لا يغير من قيمة محددها."
  },
  {
    "id": "alg_ch3_ex_07",
    "titleEn": "Exercise 7: Determinant with Added Multiples of Rows",
    "titleAr": "تمرين ٧: إضافة مضاعفات صف إلى صف آخر",
    "difficulty": "easy",
    "questionEn": "If $\\begin{vmatrix} a & b & c \\\\ d & e & f \\\\ g & h & k \\end{vmatrix} = 15$, find the value of $\\begin{vmatrix} a & b & c \\\\ d + 3a & e + 3b & f + 3c \\\\ g & h & k \\end{vmatrix}$.",
    "questionAr": "إذا كان $\\begin{vmatrix} a & b & c \\\\ d & e & f \\\\ g & h & k \\end{vmatrix} = 15$، فما قيمة $\\begin{vmatrix} a & b & c \\\\ d + 3a & e + 3b & f + 3c \\\\ g & h & k \\end{vmatrix}$؟",
    "optionsEn": [
      "$15$",
      "$45$",
      "$18$",
      "$0$"
    ],
    "optionsAr": [
      "$15$",
      "$45$",
      "$18$",
      "$0$"
    ],
    "correctAnswer": "$15$",
    "correctIndex": 0,
    "hintEn": "Adding a scalar multiple of one row to another row does not change the determinant value.",
    "hintAr": "إضافة مضاعفات صف إلى صف آخر لا تغير من قيمة المحدد.",
    "stepByStepSolutionEn": [
      "1. The operation is $R_2 \\to R_2 + 3 R_1$.",
      "2. By determinant properties, elementary row addition of a scalar multiple does not alter the value.",
      "3. Therefore, the value remains $15$."
    ],
    "stepByStepSolutionAr": [
      "١. العملية المجراة هي $R_2 \\to R_2 + 3 R_1$.",
      "٢. من خواص المحددات: إضافة مضاعفات صف إلى صف آخر تترك قيمة المحدد دون تغيير.",
      "٣. إذن القيمة تظل $15$."
    ],
    "teacherTipEn": "R_i -> R_i + c*R_j leaves the determinant unchanged.",
    "teacherTipAr": "إضافة مضاعف صف لصف آخر لا تؤثر على قيمة المحدد إطلاقاً."
  },
  {
    "id": "alg_ch3_ex_08",
    "titleEn": "Exercise 8: Cramer's Rule for Variable x",
    "titleAr": "تمرين ٨: إيجاد مجهول بقاعدة كرامر",
    "difficulty": "easy",
    "questionEn": "In the system $\\begin{cases} 3x - y = 7 \\\\ 2x + 3y = 1 \\end{cases}$, find the value of the main determinant $\\Delta$.",
    "questionAr": "في النظام الخطي $\\begin{cases} 3x - y = 7 \\\\ 2x + 3y = 1 \\end{cases}$، أوجد قيمة المحدد العام $\\Delta$.",
    "optionsEn": [
      "$11$",
      "$7$",
      "$-7$",
      "$13$"
    ],
    "optionsAr": [
      "$11$",
      "$7$",
      "$-7$",
      "$13$"
    ],
    "correctAnswer": "$11$",
    "correctIndex": 0,
    "hintEn": "The main determinant is formed by the coefficients: $\\Delta = \\begin{vmatrix} 3 & -1 \\\\ 2 & 3 \\end{vmatrix}$.",
    "hintAr": "المحدد العام يتكون من معاملات المجاهيل: $\\Delta = \\begin{vmatrix} 3 & -1 \\\\ 2 & 3 \\end{vmatrix}$.",
    "stepByStepSolutionEn": [
      "1. Write the determinant: $\\Delta = \\begin{vmatrix} 3 & -1 \\\\ 2 & 3 \\end{vmatrix}$.",
      "2. Expand: $\\Delta = (3)(3) - (-1)(2) = 9 - (-2) = 9 + 2 = 11$."
    ],
    "stepByStepSolutionAr": [
      "١. كتابة المحدد: $\\Delta = \\begin{vmatrix} 3 & -1 \\\\ 2 & 3 \\end{vmatrix}$.",
      "٢. الفك: $(3)(3) - (-1)(2) = 9 + 2 = 11$."
    ],
    "teacherTipEn": "Delta is the determinant of the coefficient matrix.",
    "teacherTipAr": "المحدد العام هو محدد مصفوفة المعاملات."
  },
  {
    "id": "alg_ch3_ex_09",
    "titleEn": "Exercise 9: Rank of Augmented Matrix Condition for Inconsistency",
    "titleAr": "تمرين ٩: رتبة المصفوفة الموسعة وشرط عدم وجود حل",
    "difficulty": "medium",
    "questionEn": "A system of linear equations has coefficient matrix $A$ and augmented matrix $(A|B)$. If $\\text{rank}(A) = 2$ and $\\text{rank}(A|B) = 3$, what is the nature of the solutions?",
    "questionAr": "نظام معادلات خطية مصفوفة معاملاته $A$ ومصفوفته الموسعة $(A|B)$. إذا كان $\\text{rank}(A) = 2$ و $\\text{rank}(A|B) = 3$، فما هي طبيعة حلول النظام؟",
    "optionsEn": [
      "No solution (inconsistent system)",
      "A unique solution",
      "Infinitely many solutions",
      "Trivial solution only"
    ],
    "optionsAr": [
      "لا يوجد حل (نظام غير متسق ومستحيل الحل)",
      "حل وحيد",
      "عدد لا نهائي من الحلول",
      "الحل الصفري فقط"
    ],
    "correctAnswer": "No solution (inconsistent system)",
    "correctIndex": 0,
    "hintEn": "By Rouché-Capelli theorem, if $\\text{rank}(A) < \\text{rank}(A|B)$, the system has no solution.",
    "hintAr": "وفق نظرية روتشيه-كابيلي: إذا كانت رتبة مصفوفة المعاملات أقل من رتبة المصفوفة الموسعة فإنه لا يوجد حل.",
    "stepByStepSolutionEn": [
      "1. The Rouché-Capelli Theorem states that a linear system is consistent if and only if $\\text{rank}(A) = \\text{rank}(A|B)$.",
      "2. Here $\\text{rank}(A) = 2 < \\text{rank}(A|B) = 3$.",
      "3. Therefore, the system is inconsistent and has no solution."
    ],
    "stepByStepSolutionAr": [
      "١. تنص نظرية روتشيه-كابيلي على أن النظام يكون متسقاً إذا وفقط إذا تساوت رتبة $A$ مع رتبة $(A|B)$.",
      "٢. هنا $\\text{rank}(A) = 2 \\ne \\text{rank}(A|B) = 3$.",
      "٣. إذن النظام غير متسق ولا يوجد له أي حل."
    ],
    "teacherTipEn": "rank(A) != rank(A|B) means parallel hyperplanes that never intersect: no solution!",
    "teacherTipAr": "اختلاف الرتبتين يعني عدم وجود أي نقطة تقاطع مشتركة وبالتالي استحالة الحل."
  },
  {
    "id": "alg_ch3_ex_10",
    "titleEn": "Exercise 10: Swapping Two Rows in a Determinant",
    "titleAr": "تمرين ١٠: تبديل صفين في محدد",
    "difficulty": "easy",
    "questionEn": "If $\\begin{vmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\\\ 7 & 8 & 9 \\end{vmatrix} = \\Delta$, what is the value of the determinant when the first and second rows are swapped?",
    "questionAr": "إذا كان قيمة محدد هي $\\Delta$، فما قيمة المحدد الناتج عن تبديل الصفين الأول والثاني؟",
    "optionsEn": [
      "$-\\Delta$",
      "$\\Delta$",
      "$\\frac{1}{\\Delta}$",
      "$0$"
    ],
    "optionsAr": [
      "$-\\Delta$",
      "$\\Delta$",
      "$\\frac{1}{\\Delta}$",
      "$0$"
    ],
    "correctAnswer": "$-\\Delta$",
    "correctIndex": 0,
    "hintEn": "Interchanging two rows or two columns multiplies the determinant by $-1$.",
    "hintAr": "تبديل موضعي أي صفين أو عمودين يغير إشارة المحدد (يضرب في $-1$).",
    "stepByStepSolutionEn": [
      "1. A core property of determinants: interchanging any two rows changes the sign of the determinant.",
      "2. Therefore, the new determinant is $-\\Delta$."
    ],
    "stepByStepSolutionAr": [
      "١. من خواص المحددات الأساسية: تبديل صفين يعكس إشارة المحدد.",
      "٢. إذن القيمة الجديدة هي $-\\Delta$."
    ],
    "teacherTipEn": "Each row swap introduces a factor of (-1).",
    "teacherTipAr": "كل تبديل لصفين يغير إشارة المحدد."
  },
  {
    "id": "alg_ch3_ex_11",
    "titleEn": "Exercise 11: Symmetric Matrix Inverse",
    "titleAr": "تمرين ١١: معكوس مصفوفة متماثلة",
    "difficulty": "medium",
    "questionEn": "If $A$ is an invertible symmetric matrix ($A^T = A$), what can be said about its inverse $A^{-1}$?",
    "questionAr": "إذا كانت $A$ مصفوفة متماثلة غير منفردة ($A^T = A$)، فماذا يمكن القول عن معكوسها الضربي $A^{-1}$؟",
    "optionsEn": [
      "$A^{-1}$ is also a symmetric matrix",
      "$A^{-1}$ is a skew-symmetric matrix",
      "$A^{-1}$ is an orthogonal matrix",
      "$A^{-1}$ is a diagonal matrix"
    ],
    "optionsAr": [
      "$A^{-1}$ مصفوفة متماثلة أيضاً",
      "$A^{-1}$ مصفوفة شبه متماثلة",
      "$A^{-1}$ مصفوفة متعامدة",
      "$A^{-1}$ مصفوفة قطرية"
    ],
    "correctAnswer": "$A^{-1}$ is also a symmetric matrix",
    "correctIndex": 0,
    "hintEn": "Take transpose of inverse: $(A^{-1})^T = (A^T)^{-1} = A^{-1}$.",
    "hintAr": "احسب مدور المعكوس: $(A^{-1})^T = (A^T)^{-1} = A^{-1}$.",
    "stepByStepSolutionEn": [
      "1. Property: $(A^{-1})^T = (A^T)^{-1}$.",
      "2. Since $A$ is symmetric, $A^T = A$.",
      "3. Therefore, $(A^{-1})^T = A^{-1}$, which proves $A^{-1}$ is symmetric."
    ],
    "stepByStepSolutionAr": [
      "١. خاصية: $(A^{-1})^T = (A^T)^{-1}$.",
      "٢. بما أن $A$ متماثلة فإن $A^T = A$.",
      "٣. إذن $(A^{-1})^T = A^{-1}$، مما يثبت أن $A^{-1}$ متماثلة أيضاً."
    ],
    "teacherTipEn": "Inverse preserves symmetry.",
    "teacherTipAr": "المعكوس الضربي يحافظ على خاصية التماثل."
  },
  {
    "id": "alg_ch3_ex_12",
    "titleEn": "Exercise 12: Rank of Identity Matrix I_n",
    "titleAr": "تمرين ١٢: رتبة مصفوفة الوحدة",
    "difficulty": "easy",
    "questionEn": "What is the rank of the $3 \\times 3$ identity matrix $I_3$?",
    "questionAr": "ما هي رتبة مصفوفة الوحدة $I_3$ من الرتبة $3 \\times 3$؟",
    "optionsEn": [
      "$3$",
      "$1$",
      "$0$",
      "$9$"
    ],
    "optionsAr": [
      "$3$",
      "$1$",
      "$0$",
      "$9$"
    ],
    "correctAnswer": "$3$",
    "correctIndex": 0,
    "hintEn": "$|I_3| = 1 \\ne 0$, so its rank is maximum.",
    "hintAr": "$|I_3| = 1 \\ne 0$، وبالتالي رتبتها هي الرتبة القصوى.",
    "stepByStepSolutionEn": [
      "1. $|I_3| = 1 \\ne 0$.",
      "2. Since the determinant of order 3 is non-zero, $\\text{rank}(I_3) = 3$."
    ],
    "stepByStepSolutionAr": [
      "١. محدد مصفوفة الوحدة: $|I_3| = 1 \\ne 0$.",
      "٢. بما أن محدد الرتبة الثالثة لا ينعدم فإن رتبتها تساوي 3."
    ],
    "teacherTipEn": "Rank of I_n is always n.",
    "teacherTipAr": "رتبة مصفوفة الوحدة من الدرجة ن تساوي دائماً ن."
  },
  {
    "id": "alg_ch3_ex_13",
    "titleEn": "Exercise 13: Matrix Equation X A = B",
    "titleAr": "تمرين ١٣: حل المعادلة المصفوفية س أ = ب",
    "difficulty": "medium",
    "questionEn": "If $X A = B$ where $A$ is an invertible square matrix, what is $X$?",
    "questionAr": "إذا كان $X A = B$ حيث $A$ مصفوفة مربعة غير منفردة، فما هو التعبير الصحيح للمصفوفة $X$؟",
    "optionsEn": [
      "$X = B A^{-1}$",
      "$X = A^{-1} B$",
      "$X = A B^{-1}$",
      "$X = \\frac{B}{A}$"
    ],
    "optionsAr": [
      "$X = B A^{-1}$",
      "$X = A^{-1} B$",
      "$X = A B^{-1}$",
      "$X = \\frac{B}{A}$"
    ],
    "correctAnswer": "$X = B A^{-1}$",
    "correctIndex": 0,
    "hintEn": "Multiply both sides by $A^{-1}$ from the right: $(X A) A^{-1} = B A^{-1}$.",
    "hintAr": "اضرب طرفي المعادلة في $A^{-1}$ من جهة اليمين: $(X A) A^{-1} = B A^{-1}$.",
    "stepByStepSolutionEn": [
      "1. Matrix multiplication is non-commutative.",
      "2. Since $A$ is on the right of $X$, multiply by $A^{-1}$ from the right:",
      "$$X A A^{-1} = B A^{-1} \\implies X I = B A^{-1} \\implies X = B A^{-1}$$"
    ],
    "stepByStepSolutionAr": [
      "١. ضرب المصفوفات غير إبدالي.",
      "٢. بما أن $A$ تقع على يمين $X$، نضرب الطرفين في $A^{-1}$ من جهة اليمين:",
      "$$X = B A^{-1}$$"
    ],
    "teacherTipEn": "Always multiply by inverse from the side the matrix appears (right vs left).",
    "teacherTipAr": "اضرب في المعكوس دائماً من نفس الجهة التي تقع فيها المصفوفة (يميناً أو يساراً)."
  },
  {
    "id": "alg_ch3_ex_14",
    "titleEn": "Exercise 14: Value of Determinant with 2 Identical Columns",
    "titleAr": "تمرين ١٤: قيمة محدد بعمودين متطابقين",
    "difficulty": "easy",
    "questionEn": "What is the value of $\\begin{vmatrix} 7 & 7 & 1 \\\\ 3 & 3 & 4 \\\\ -2 & -2 & 5 \\end{vmatrix}$?",
    "questionAr": "ما قيمة المحدد $\\begin{vmatrix} 7 & 7 & 1 \\\\ 3 & 3 & 4 \\\\ -2 & -2 & 5 \\end{vmatrix}$؟",
    "optionsEn": [
      "$0$",
      "$49$",
      "$-14$",
      "$21$"
    ],
    "optionsAr": [
      "$0$",
      "$49$",
      "$-14$",
      "$21$"
    ],
    "correctAnswer": "$0$",
    "correctIndex": 0,
    "hintEn": "Column 1 and Column 2 are identical ($C_1 = C_2$).",
    "hintAr": "العمود الأول يطابق العمود الثاني ($C_1 = C_2$).",
    "stepByStepSolutionEn": [
      "1. $C_1 = \\begin{pmatrix} 7 \\\\ 3 \\\\ -2 \\end{pmatrix}$ and $C_2 = \\begin{pmatrix} 7 \\\\ 3 \\\\ -2 \\end{pmatrix}$.",
      "2. Since two columns are identical, the determinant is zero."
    ],
    "stepByStepSolutionAr": [
      "١. العمودان الأول والثاني متطابقان تماماً.",
      "٢. من خواص المحددات: إذا تساوى عمودان ينعدم المحدد ويساوي صفراً."
    ],
    "teacherTipEn": "Identical columns -> determinant is zero.",
    "teacherTipAr": "تطابق عمودين يعني انعدام المحدد."
  },
  {
    "id": "alg_ch3_ex_15",
    "titleEn": "Exercise 15: Condition for Infinitely Many Solutions",
    "titleAr": "تمرين ١٥: شرط وجود عدد لا نهائي من الحلول لنظام غير متجانس",
    "difficulty": "hots",
    "questionEn": "For a non-homogeneous system of 3 linear equations in 3 variables, what condition guarantees infinitely many solutions?",
    "questionAr": "لنظام معادلات خطية غير متجانس مكون من 3 معادلات في 3 مجاهيل، ما الشرط الذي يضمن وجود عدد لا نهائي من الحلول؟",
    "optionsEn": [
      "$\\text{rank}(A) = \\text{rank}(A|B) < 3$",
      "$\\text{rank}(A) = \\text{rank}(A|B) = 3$",
      "$\\text{rank}(A) < \\text{rank}(A|B)$",
      "$|A| \\ne 0$"
    ],
    "optionsAr": [
      "$\\text{rank}(A) = \\text{rank}(A|B) < 3$",
      "$\\text{rank}(A) = \\text{rank}(A|B) = 3$",
      "$\\text{rank}(A) < \\text{rank}(A|B)$",
      "$|A| \\ne 0$"
    ],
    "correctAnswer": "$\\text{rank}(A) = \\text{rank}(A|B) < 3$",
    "correctIndex": 0,
    "hintEn": "Consistency requires $\\text{rank}(A) = \\text{rank}(A|B)$, and infinitely many solutions require this rank to be less than the number of unknowns ($n = 3$).",
    "hintAr": "الاتساق يتطلب تساوي الرتبتين، ووجود عدد لا نهائي من الحلول يتطلب أن تكون الرتبة المشتركة أقل من عدد المجاهيل (3).",
    "stepByStepSolutionEn": [
      "1. For any linear system with $n = 3$ unknowns:",
      "2. $\\text{rank}(A) = \\text{rank}(A|B) = 3 \\implies$ Unique solution.",
      "3. $\\text{rank}(A) = \\text{rank}(A|B) < 3 \\implies$ Infinitely many solutions.",
      "4. $\\text{rank}(A) < \\text{rank}(A|B) \\implies$ No solution."
    ],
    "stepByStepSolutionAr": [
      "١. لنظام خطي به 3 مجاهيل:",
      "٢. تساوي الرتبتين = 3 يعطي حلاً وحيداً.",
      "٣. تساوي الرتبتين < 3 يعطي عدداً لا نهائياً من الحلول.",
      "٤. عدم تساوي الرتبتين يعني استحالة الحل."
    ],
    "teacherTipEn": "Rouché-Capelli summarizes all system solution types in one clean rule.",
    "teacherTipAr": "نظرية روتشيه-كابيلي تلخص جميع أنواع حلول الأنظمة الخطية بقاعدة واحدة."
  }
];
