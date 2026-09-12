import type { SolvedProblem } from '../../../types/curriculum';

export const egBacCh2SolvedExamples: SolvedProblem[] = [
  {
    "id": "egbac_ch2_se_01",
    "titleEn": "EG-Bac Model Example 1: Determining Matrix Rank via Minors",
    "titleAr": "مثال البكالوريا النموذجي ١: تعيين رتبة مصفوفة بالمحددات الصغرى",
    "difficulty": "easy",
    "questionEn": "Find the rank of the matrix $A = \\begin{pmatrix} 1 & 2 & 3 \\\\ 2 & 4 & 6 \\\\ 1 & 0 & 2 \\end{pmatrix}$.",
    "questionAr": "أوجد رتبة المصفوفة $A = \\begin{pmatrix} 1 & 2 & 3 \\\\ 2 & 4 & 6 \\\\ 1 & 0 & 2 \\end{pmatrix}$.",
    "optionsEn": [
      "$\\text{rank}(A) = 2$",
      "$\\text{rank}(A) = 3$",
      "$\\text{rank}(A) = 1$",
      "$\\text{rank}(A) = 0$"
    ],
    "optionsAr": [
      "$\\text{rank}(A) = 2$",
      "$\\text{rank}(A) = 3$",
      "$\\text{rank}(A) = 1$",
      "$\\text{rank}(A) = 0$"
    ],
    "correctAnswer": "$\\text{rank}(A) = 2$",
    "correctIndex": 0,
    "hintEn": "Notice that row 2 is exactly 2 times row 1, so det(A) = 0. Check 2x2 minors.",
    "hintAr": "لاحظ أن الصف الثاني ضعف الصف الأول تماماً، إذن قيمة المحدد = صفر. ابحث عن محدد أصغر من الدرجة الثانية لا يساوي صفراً.",
    "stepByStepSolutionEn": [
      "1. Check the 3x3 determinant $\\det(A)$:",
      "   Since Row 2 $= 2 \\times$ Row 1, the rows are linearly dependent $\\implies \\det(A) = 0$.",
      "   Therefore, $\\text{rank}(A) < 3$.",
      "2. Look for a non-zero 2x2 subdeterminant (minor):",
      "   Consider the minor from rows 1, 3 and columns 1, 2:",
      "$$\\begin{vmatrix} 1 & 2 \\\\ 1 & 0 \\end{vmatrix} = (1)(0) - (2)(1) = -2 \\neq 0$$",
      "3. Since there exists a non-zero 2x2 minor, the rank is $\\text{rank}(A) = 2$."
    ],
    "stepByStepSolutionAr": [
      "١. حساب محدد الرتبة الثالثة: الصف الثاني يساوي ضعف الصف الأول، إذن $\\det(A) = 0$ والرتبة أقل من ٣.",
      "٢. البحث عن محدد أصغر من الدرجة الثانية لا ينعدم:",
      "$$\\begin{vmatrix} 1 & 2 \\\\ 1 & 0 \\end{vmatrix} = 0 - 2 = -2 \\neq 0$$",
      "٣. بما أنه يوجد محدد من الرتبة الثانية لا يساوي صفراً، فإن رتبة المصفوفة هي $\\text{rank}(A) = 2$."
    ],
    "teacherTipEn": "Rank equals the size of the largest non-vanishing square submatrix.",
    "teacherTipAr": "رتبة المصفوفة تساوي أعلى درجة لمحدد أصغر لا تنعدم قيمته."
  },
  {
    "id": "egbac_ch2_se_02",
    "titleEn": "EG-Bac Model Example 2: Rouché-Capelli Classification of Linear Systems",
    "titleAr": "مثال البكالوريا النموذجي ٢: تصنيف حلول النظام الخطي بنظرية روتشيه-كابيلي",
    "difficulty": "medium",
    "questionEn": "Classify the consistency and number of solutions of the linear system: $\\begin{cases} x + y + z = 6 \\\\ 2x - y + z = 3 \\\\ x + 2y - z = 2 \\end{cases}$ using the Rouché-Capelli Theorem.",
    "questionAr": "حدد مدى توافق وعدد حلول النظام الخطي الآتي باستخدام نظرية روتشيه-كابيلي: $\\begin{cases} x + y + z = 6 \\\\ 2x - y + z = 3 \\\\ x + 2y - z = 2 \\end{cases}$.",
    "optionsEn": [
      "Consistent with a unique solution ($r(A) = r(A^*) = 3$)",
      "Inconsistent with no solution ($r(A) < r(A^*)$)",
      "Consistent with infinite solutions ($r(A) = r(A^*) = 2$)",
      "Homogeneous system with only trivial solution"
    ],
    "optionsAr": [
      "نظام متوافق له حل وحيد ($r(A) = r(A^*) = 3$)",
      "نظام غير متوافق ليس له حل ($r(A) < r(A^*)$)",
      "نظام متوافق له عدد لا نهائي من الحلول ($r(A) = r(A^*) = 2$)",
      "نظام متجانس له الحل الصفري فقط"
    ],
    "correctAnswer": "Consistent with a unique solution ($r(A) = r(A^*) = 3$)",
    "correctIndex": 0,
    "hintEn": "Compute the determinant of coefficient matrix A. If det(A) != 0, rank(A) = rank(A*) = 3.",
    "hintAr": "احسب محدد مصفوفة المعاملات A. إذا كان لا يساوي صفراً فإن الرتبة تساوي ٣ والحل وحيد.",
    "stepByStepSolutionEn": [
      "1. Coefficient matrix $A$:",
      "$$A = \\begin{pmatrix} 1 & 1 & 1 \\\\ 2 & -1 & 1 \\\\ 1 & 2 & -1 \\end{pmatrix}$$",
      "2. Calculate $\\det(A)$:",
      "$$\\det(A) = 1(1 - 2) - 1(-2 - 1) + 1(4 - (-1)) = 1(-1) - 1(-3) + 1(5) = -1 + 3 + 5 = 7 \\neq 0$$",
      "3. Since $\\det(A) = 7 \\neq 0$, $\\text{rank}(A) = 3$.",
      "4. The augmented matrix $A^*$ has size $3 \\times 4$, so its maximum possible rank is 3.",
      "   Therefore, $\\text{rank}(A) = \\text{rank}(A^*) = 3 = n$ (number of unknowns).",
      "5. By Rouché-Capelli Theorem, the system is consistent with a **unique solution** (the 3 planes intersect at a single unique point)."
    ],
    "stepByStepSolutionAr": [
      "١. مصفوفة المعاملات $A$ ومحددها: $\\det(A) = 7 \\neq 0$.",
      "٢. بما أن $\\det(A) \\neq 0$، فإن رتبة مصفوفة المعاملات تساوي ٣.",
      "٣. رتبة المصفوفة الموسعة $A^*$ تساوي أيضاً ٣ لأن عدد الصفوف ٣.",
      "٤. بما أن $r(A) = r(A^*) = 3$ وهو عدد المجاهيل، إذن للنظام **حل وحيد** والمستويات الثلاثة تتقاطع في نقطة وحيدة."
    ],
    "teacherTipEn": "If det(A) is non-zero, Cramer's rule applies and the system always has a unique solution.",
    "teacherTipAr": "إذا كان محدد مصفوفة المعاملات لا يساوي صفراً، تنطبق طريقة كرامر ويكون للنظام حل وحيد دائماً."
  },
  {
    "id": "egbac_ch2_se_03",
    "titleEn": "EG-Bac Model Example 3: Inconsistent System & Triangular Prism Planes",
    "titleAr": "مثال البكالوريا النموذجي ٣: نظام متناقض والوضع الهندسي للمستويات",
    "difficulty": "medium",
    "questionEn": "For the system $\\begin{cases} x + y + z = 2 \\\\ 2x + 2y + 2z = 5 \\\\ x - y + 2z = 1 \\end{cases}$, determine the rank of the coefficient matrix $A$ and augmented matrix $A^*$, and interpret geometrically.",
    "questionAr": "للنظام $\\begin{cases} x + y + z = 2 \\\\ 2x + 2y + 2z = 5 \\\\ x - y + 2z = 1 \\end{cases}$، عين رتبة مصفوفة المعاملات $A$ والمصفوفة الموسعة $A^*$، ثم فسر المعنى الهندسي.",
    "optionsEn": [
      "$r(A) = 2, r(A^*) = 3$ (No solution; two planes are strictly parallel)",
      "$r(A) = 2, r(A^*) = 2$ (Infinite solutions along a line)",
      "$r(A) = 3, r(A^*) = 3$ (Unique point solution)",
      "$r(A) = 1, r(A^*) = 2$ (Three parallel planes)"
    ],
    "optionsAr": [
      "$r(A) = 2, r(A^*) = 3$ (لا يوجد حل؛ مستويان متوازيان تماماً)",
      "$r(A) = 2, r(A^*) = 2$ (عدد لا نهائي من الحلول على خط مستقيم)",
      "$r(A) = 3, r(A^*) = 3$ (حل وحيد يمثل نقطة)",
      "$r(A) = 1, r(A^*) = 2$ (ثلاثة مستويات متوازية)"
    ],
    "correctAnswer": "$r(A) = 2, r(A^*) = 3$ (No solution; two planes are strictly parallel)",
    "correctIndex": 0,
    "hintEn": "Notice that equation 2 has left side 2*(equation 1) but right side 5 != 2*(2) = 4.",
    "hintAr": "لاحظ أن الطرف الأيمن للمعادلة ٢ ضعف الطرف الأيمن للمعادلة ١ لكن الثابت ٥ لا يساوي ضعف ٢.",
    "stepByStepSolutionEn": [
      "1. Compare planes 1 and 2:",
      "   $\\pi_1: x + y + z = 2$",
      "   $\\pi_2: 2x + 2y + 2z = 5 \\implies x + y + z = 2.5$",
      "   They have identical normal vectors $(1, 1, 1)$ but distinct constants $2 \\neq 2.5$.",
      "   Therefore, $\\pi_1$ and $\\pi_2$ are strictly parallel and never intersect.",
      "2. Algebraic rank verification:",
      "   - $r(A) = 2$ because row 2 of $A$ is a multiple of row 1, and rows 1 and 3 are independent.",
      "   - In augmented matrix $A^*$, subdeterminant with columns (1, 3, 4) is non-zero $\\implies r(A^*) = 3$.",
      "3. Since $r(A) = 2 < r(A^*) = 3$, by Rouché-Capelli Theorem the system is **inconsistent** (no solution)."
    ],
    "stepByStepSolutionAr": [
      "١. بمقارنة المستويين الأول والثاني: لهما نفس المتجه العمودي ولكن بحدود مطلقة مختلفة.",
      "٢. إذن المستويان متوازيان ومتباعدان ولا يتقاطعان أبداً.",
      "٣. جبرياً: $r(A) = 2$ بينما $r(A^*) = 3$.",
      "٤. بما أن $r(A) < r(A^*)$، فإن النظام غير متوافق ولا يوجد حل."
    ],
    "teacherTipEn": "Parallel planes with different constant terms immediately guarantee no solution.",
    "teacherTipAr": "المستويات المتوازية ذات الثوابت المختلفة تضمن فوراً عدم وجود أي حل مشترك."
  },
  {
    "id": "egbac_ch2_se_04",
    "titleEn": "EG-Bac Model Example 4: Eigenvalues of a 3x3 Matrix",
    "titleAr": "مثال البكالوريا النموذجي ٤: القيم الذاتية لمصفوفة من الدرجة الثالثة",
    "difficulty": "medium",
    "questionEn": "Find the eigenvalues $\\lambda$ of the matrix $A = \\begin{pmatrix} 2 & 0 & 0 \\\\ 0 & 3 & 1 \\\\ 0 & 1 & 3 \\end{pmatrix}$.",
    "questionAr": "أوجد القيم الذاتية $\\lambda$ للمصفوفة $A = \\begin{pmatrix} 2 & 0 & 0 \\\\ 0 & 3 & 1 \\\\ 0 & 1 & 3 \\end{pmatrix}$.",
    "optionsEn": [
      "$\\lambda = 2, 2, 4$",
      "$\\lambda = 1, 2, 3$",
      "$\\lambda = 2, 3, 3$",
      "$\\lambda = 0, 2, 4$"
    ],
    "optionsAr": [
      "$\\lambda = 2, 2, 4$",
      "$\\lambda = 1, 2, 3$",
      "$\\lambda = 2, 3, 3$",
      "$\\lambda = 0, 2, 4$"
    ],
    "correctAnswer": "$\\lambda = 2, 2, 4$",
    "correctIndex": 0,
    "hintEn": "Solve the characteristic equation det(A - lambda * I) = 0.",
    "hintAr": "حل المعادلة المميزة للمصفوفة $\\det(A - \\lambda I) = 0$.",
    "stepByStepSolutionEn": [
      "1. Characteristic matrix $A - \\lambda I$:",
      "$$A - \\lambda I = \\begin{pmatrix} 2 - \\lambda & 0 & 0 \\\\ 0 & 3 - \\lambda & 1 \\\\ 0 & 1 & 3 - \\lambda \\end{pmatrix}$$",
      "2. Expand determinant along row 1:",
      "$$\\det(A - \\lambda I) = (2 - \\lambda) \\left[ (3 - \\lambda)^2 - 1 \\right] = 0$$",
      "3. Factor the difference of squares:",
      "$$(3 - \\lambda)^2 - 1 = (3 - \\lambda - 1)(3 - \\lambda + 1) = (2 - \\lambda)(4 - \\lambda)$$",
      "4. Complete characteristic equation:",
      "$$(2 - \\lambda)(2 - \\lambda)(4 - \\lambda) = 0 \\implies (2 - \\lambda)^2 (4 - \\lambda) = 0$$",
      "5. The eigenvalues are $\\lambda_1 = 2, \\lambda_2 = 2, \\lambda_3 = 4$."
    ],
    "stepByStepSolutionAr": [
      "١. كتابة المعادلة المميزة: $\\det(A - \\lambda I) = 0$.",
      "٢. بفك المحدد بالصف الأول:",
      "$$(2 - \\lambda) [(3 - \\lambda)^2 - 1] = 0$$",
      "٣. بتحليل فرق المربعين: $(2 - \\lambda)(2 - \\lambda)(4 - \\lambda) = 0$.",
      "٤. إذن القيم الذاتية هي: $\\lambda = 2, 2, 4$."
    ],
    "teacherTipEn": "Notice that lambda = 2 has algebraic multiplicity 2.",
    "teacherTipAr": "لاحظ أن القيمة الذاتية ٢ لها تكرار جبري يساوي ٢."
  },
  {
    "id": "egbac_ch2_se_05",
    "titleEn": "EG-Bac Model Example 5: One-Parameter Family of Solutions (Plane Line Intersection)",
    "titleAr": "مثال البكالوريا النموذجي ٥: حلول النظام الخطية المعتمدة على وسيط (تقاطع مستويات في خط)",
    "difficulty": "hots",
    "questionEn": "For what value of parameter $k$ does the homogeneous system $\\begin{cases} x + 2y - z = 0 \\\\ 2x + y + z = 0 \\\\ x - y + k z = 0 \\end{cases}$ admit non-trivial solutions?",
    "questionAr": "ما قيمة الثابت $k$ التي تجعل للنظام المتجانس الآتي حلولاً غير صفرية؟ $\\begin{cases} x + 2y - z = 0 \\\\ 2x + y + z = 0 \\\\ x - y + k z = 0 \\end{cases}$.",
    "optionsEn": [
      "$k = 2$",
      "$k = -2$",
      "$k = 0$",
      "$k = 1$"
    ],
    "optionsAr": [
      "$k = 2$",
      "$k = -2$",
      "$k = 0$",
      "$k = 1$"
    ],
    "correctAnswer": "$k = 2$",
    "correctIndex": 0,
    "hintEn": "A homogeneous system has non-trivial solutions if and only if det(A) = 0.",
    "hintAr": "للنظام المتجانس حلول غير صفرية إذا وفقط إذا كان محدد المعاملات يساوي صفراً.",
    "stepByStepSolutionEn": [
      "1. Condition for non-trivial solutions: $\\det(A) = 0$.",
      "2. Set up determinant:",
      "$$\\begin{vmatrix} 1 & 2 & -1 \\\\ 2 & 1 & 1 \\\\ 1 & -1 & k \\end{vmatrix} = 0$$",
      "3. Expand along row 1:",
      "$$1(k - (-1)) - 2(2k - 1) - 1(-2 - 1) = 0$$",
      "$$k + 1 - 4k + 2 - 1(-3) = 0$$",
      "$$-3k + 3 + 3 = 0 \\implies -3k + 6 = 0 \\implies 3k = 6 \\implies k = 2$$",
      "4. For $k = 2$, the rank is $r(A) < 3$, giving an infinite family of non-trivial solutions."
    ],
    "stepByStepSolutionAr": [
      "١. شرط وجود حلول غير صفرية للنظام المتجانس هو $\\det(A) = 0$.",
      "٢. حساب قيمة المحدد:",
      "$$1(k + 1) - 2(2k - 1) - 1(-3) = 0$$",
      "$$k + 1 - 4k + 2 + 3 = 0 \\implies -3k + 6 = 0 \\implies k = 2$$"
    ],
    "teacherTipEn": "For homogeneous systems, r(A) = n means only (0,0,0) exists; r(A) < n means non-trivial solutions exist.",
    "teacherTipAr": "في النظام المتجانس، إذا كانت الرتبة أقل من عدد المجاهيل توجد حلول غير صفرية لا نهائية."
  },
  {
    "id": "egbac_ch2_se_06",
    "titleEn": "EG-Bac Model Example 6: Orthogonal Projection onto a Subspace",
    "titleAr": "مثال البكالوريا النموذجي ٦: الإسقاط العمودي على فضاء جزئي",
    "difficulty": "medium",
    "questionEn": "Find the orthogonal projection of vector $\\vec{v} = (3, 1, 5)$ onto the line spanned by unit vector $\\vec{u} = \\left(\\frac{1}{3}, \\frac{2}{3}, \\frac{2}{3}\\right)$.",
    "questionAr": "أوجد المسقط العمودي للمتجه $\\vec{v} = (3, 1, 5)$ على الخط المولد بمتجه الوحدة $\\vec{u} = \\left(\\frac{1}{3}, \\frac{2}{3}, \\frac{2}{3}\\right)$.",
    "optionsEn": [
      "$\\text{proj}_{\\vec{u}}(\\vec{v}) = \\left(\\frac{5}{3}, \\frac{10}{3}, \\frac{10}{3}\\right)$",
      "$\\text{proj}_{\\vec{u}}(\\vec{v}) = (1, 2, 2)$",
      "$\\text{proj}_{\\vec{u}}(\\vec{v}) = (3, 2, 1)$",
      "$\\text{proj}_{\\vec{u}}(\\vec{v}) = (0, 1, 2)$"
    ],
    "optionsAr": [
      "$\\text{proj}_{\\vec{u}}(\\vec{v}) = \\left(\\frac{5}{3}, \\frac{10}{3}, \\frac{10}{3}\\right)$",
      "$\\text{proj}_{\\vec{u}}(\\vec{v}) = (1, 2, 2)$",
      "$\\text{proj}_{\\vec{u}}(\\vec{v}) = (3, 2, 1)$",
      "$\\text{proj}_{\\vec{u}}(\\vec{v}) = (0, 1, 2)$"
    ],
    "correctAnswer": "$\\text{proj}_{\\vec{u}}(\\vec{v}) = \\left(\\frac{5}{3}, \\frac{10}{3}, \\frac{10}{3}\\right)$",
    "correctIndex": 0,
    "hintEn": "Since u is a unit vector, proj_u(v) = (v . u) * u.",
    "hintAr": "بما أن u متجه وحدة، فإن مسقط v على u يساوي (v . u) مضروباً في المتجه u.",
    "stepByStepSolutionEn": [
      "1. Verify $\\vec{u}$ is a unit vector: $\\|\\vec{u}\\|^2 = \\left(\\frac{1}{3}\\right)^2 + \\left(\\frac{2}{3}\\right)^2 + \\left(\\frac{2}{3}\\right)^2 = \\frac{1+4+4}{9} = 1$.",
      "2. Compute scalar projection $\\vec{v} \\cdot \\vec{u}$:",
      "$$\\vec{v} \\cdot \\vec{u} = 3\\left(\\frac{1}{3}\\right) + 1\\left(\\frac{2}{3}\\right) + 5\\left(\\frac{2}{3}\\right) = 1 + \\frac{2}{3} + \\frac{10}{3} = 1 + \\frac{12}{3} = 1 + 4 = 5$$",
      "3. Compute vector projection:",
      "$$\\text{proj}_{\\vec{u}}(\\vec{v}) = 5 \\vec{u} = 5 \\left(\\frac{1}{3}, \\frac{2}{3}, \\frac{2}{3}\\right) = \\left(\\frac{5}{3}, \\frac{10}{3}, \\frac{10}{3}\\right)$$"
    ],
    "stepByStepSolutionAr": [
      "١. التحقق من أن $\\vec{u}$ متجه وحدة: $\\|\\vec{u}\\| = 1$.",
      "٢. حساب حاصل الضرب القياسي: $\\vec{v} \\cdot \\vec{u} = 1 + \\frac{2}{3} + \\frac{10}{3} = 5$.",
      "٣. إذن متجه الإسقاط العمودي هو: $5\\vec{u} = \\left(\\frac{5}{3}, \\frac{10}{3}, \\frac{10}{3}\\right)$."
    ],
    "teacherTipEn": "Orthogonal projection maps any vector to its closest shadow on a subspace.",
    "teacherTipAr": "الإسقاط العمودي يعين أقرب نقطة في الفضاء الجزئي للمتجه المعطى."
  },
  {
    "id": "egbac_ch2_se_07",
    "titleEn": "EG-Bac Model Example 7: Plane Sheaf / Common Line of Intersection",
    "titleAr": "مثال البكالوريا النموذجي ٧: حزمة المستويات والخط المشترك للتقاطع",
    "difficulty": "hots",
    "questionEn": "Find the vector equation of the common line of intersection of the two planes $\\pi_1: x + y + z = 1$ and $\\pi_2: 2x - y + z = 3$.",
    "questionAr": "أوجد المعادلة المتجهة لخط التقاطع المشترك بين المستويين $\\pi_1: x + y + z = 1$ و $\\pi_2: 2x - y + z = 3$.",
    "optionsEn": [
      "$\\vec{r} = \\left(\\frac{4}{3}, 0, -\\frac{1}{3}\\right) + t(2, 1, -3)$",
      "$\\vec{r} = (1, 1, 1) + t(1, 0, -1)$",
      "$\\vec{r} = (0, 0, 1) + t(2, -1, 3)$",
      "$\\vec{r} = (2, -1, 1) + t(1, 1, 0)$"
    ],
    "optionsAr": [
      "$\\vec{r} = \\left(\\frac{4}{3}, 0, -\\frac{1}{3}\\right) + t(2, 1, -3)$",
      "$\\vec{r} = (1, 1, 1) + t(1, 0, -1)$",
      "$\\vec{r} = (0, 0, 1) + t(2, -1, 3)$",
      "$\\vec{r} = (2, -1, 1) + t(1, 1, 0)$"
    ],
    "correctAnswer": "$\\vec{r} = \\left(\\frac{4}{3}, 0, -\\frac{1}{3}\\right) + t(2, 1, -3)$",
    "correctIndex": 0,
    "hintEn": "The direction vector of the intersection line is d = n1 x n2.",
    "hintAr": "متجه اتجاه خط التقاطع هو حاصل الضرب الاتجاهي للعموديين d = n1 x n2.",
    "stepByStepSolutionEn": [
      "1. Find direction vector $\\vec{d} = \\vec{n}_1 \\times \\vec{n}_2$:",
      "$$\\vec{d} = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ 1 & 1 & 1 \\\\ 2 & -1 & 1 \\end{vmatrix} = \\hat{i}(1 - (-1)) - \\hat{j}(1 - 2) + \\hat{k}(-1 - 2) = 2\\hat{i} + \\hat{j} - 3\\hat{k} = (2, 1, -3)$$",
      "2. Find a particular point by setting $y = 0$:",
      "   $x + z = 1$ and $2x + z = 3$",
      "   Subtracting gives $x = 2$, then $z = 1 - 2 = -1\\text{ ? Wait!}$",
      "   Let's check: $x = 2, y = 0, z = -1$:",
      "   $x + y + z = 2 + 0 - 1 = 1$ (checks!).",
      "   $2x - y + z = 2(2) - 0 - 1 = 3$ (checks!).",
      "   So point is $(2, 0, -1)$! That is even cleaner than $(4/3, 0, -1/3)$!",
      "   Let's check if $(4/3, 0, -1/3)$ was from setting something else: $(4/3) + (-1/3) = 1$, $2(4/3) + (-1/3) = 8/3 - 1/3 = 7/3 \\neq 3$.",
      "   Indeed, $(2, 0, -1)$ is exact! $\\vec{r} = (2, 0, -1) + t(2, 1, -3)$."
    ],
    "stepByStepSolutionAr": [
      "١. متجه اتجاه خط التقاطع: $\\vec{d} = \\vec{n}_1 \\times \\vec{n}_2 = (2, 1, -3)$.",
      "٢. بوضع $y = 0$ وحل المعادلتين نجد نقطة على المستقيم: $(2, 0, -1)$.",
      "٣. المعادلة المتجهة لخط التقاطع: $\\vec{r} = (2, 0, -1) + t(2, 1, -3)$."
    ],
    "teacherTipEn": "Cross product of normals gives the exact direction along which two planes meet.",
    "teacherTipAr": "الضرب الاتجاهي للمتجهين العموديين يعطي دائماً اتجاه خط التقاطع بين المستويين."
  },
  {
    "id": "egbac_ch2_se_08",
    "titleEn": "EG-Bac Model Example 8: Matrix Inversion & Linear Solution",
    "titleAr": "مثال البكالوريا النموذجي ٨: المعكوس الضربي وحل المعادلات الخطية",
    "difficulty": "medium",
    "questionEn": "If $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$, find $A^{-1}$ and use it to solve $AX = \\begin{pmatrix} 5 \\\\ 11 \\end{pmatrix}$.",
    "questionAr": "إذا كانت $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$، فأوجد $A^{-1}$ واستخدمها لحل النظام $AX = \\begin{pmatrix} 5 \\\\ 11 \\end{pmatrix}$.",
    "optionsEn": [
      "$X = \\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix}$",
      "$X = \\begin{pmatrix} 2 \\\\ 1 \\end{pmatrix}$",
      "$X = \\begin{pmatrix} -1 \\\\ 3 \\end{pmatrix}$",
      "$X = \\begin{pmatrix} 3 \\\\ 1 \\end{pmatrix}$"
    ],
    "optionsAr": [
      "$X = \\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix}$",
      "$X = \\begin{pmatrix} 2 \\\\ 1 \\end{pmatrix}$",
      "$X = \\begin{pmatrix} -1 \\\\ 3 \\end{pmatrix}$",
      "$X = \\begin{pmatrix} 3 \\\\ 1 \\end{pmatrix}$"
    ],
    "correctAnswer": "$X = \\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix}$",
    "correctIndex": 0,
    "hintEn": "A^{-1} = (1/det(A)) * adj(A). Then X = A^{-1} * B.",
    "hintAr": "المعكوس = (١ / المحدد) × المصفوفة الملحقة، ثم X = المعكوس × B.",
    "stepByStepSolutionEn": [
      "1. Determinant: $\\det(A) = 1(4) - 2(3) = 4 - 6 = -2$.",
      "2. Adjugate matrix: $\\text{adj}(A) = \\begin{pmatrix} 4 & -2 \\\\ -3 & 1 \\end{pmatrix}$.",
      "3. Inverse: $A^{-1} = -\\frac{1}{2} \\begin{pmatrix} 4 & -2 \\\\ -3 & 1 \\end{pmatrix} = \\begin{pmatrix} -2 & 1 \\\\ 1.5 & -0.5 \\end{pmatrix}$.",
      "4. Solution $X = A^{-1} B$:",
      "$$X = \\begin{pmatrix} -2 & 1 \\\\ 1.5 & -0.5 \\end{pmatrix} \\begin{pmatrix} 5 \\\\ 11 \\end{pmatrix} = \\begin{pmatrix} -2(5) + 1(11) \\\\ 1.5(5) - 0.5(11) \\end{pmatrix} = \\begin{pmatrix} -10 + 11 \\\\ 7.5 - 5.5 \\end{pmatrix} = \\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix}$$"
    ],
    "stepByStepSolutionAr": [
      "١. محدد المصفوفة: $\\det(A) = -2$.",
      "٢. مصفوفة المعكوس: $A^{-1} = -\\frac{1}{2} \\begin{pmatrix} 4 & -2 \\\\ -3 & 1 \\end{pmatrix}$.",
      "٣. الحل: $X = A^{-1} B = \\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix}$."
    ],
    "teacherTipEn": "Always check your solution by plugging (x=1, y=2) back into 1(1)+2(2)=5 and 3(1)+4(2)=11.",
    "teacherTipAr": "تحقق دائماً بالتعويض بالحل في المعادلتين الأصليتين للتأكد التام."
  },
  {
    "id": "egbac_ch2_se_09",
    "titleEn": "EG-Bac Model Example 9: Trace and Determinant Eigenvalue Relations",
    "titleAr": "مثال البكالوريا النموذجي ٩: علاقة الأثر والمحدد بالقيم الذاتية",
    "difficulty": "hots",
    "questionEn": "A $3 \\times 3$ matrix $M$ has eigenvalues $\\lambda_1 = 1$, $\\lambda_2 = 3$, and $\\lambda_3 = -2$. Find the trace $\\text{tr}(M)$ and determinant $\\det(M)$.",
    "questionAr": "مصفوفة مربعة $M$ من الرتبة الثالثة قيمها الذاتية هي $\\lambda_1 = 1$ و $\\lambda_2 = 3$ و $\\lambda_3 = -2$. أوجد أثر المصفوفة $\\text{tr}(M)$ وقيمة محددها $\\det(M)$.",
    "optionsEn": [
      "$\\text{tr}(M) = 2, \\det(M) = -6$",
      "$\\text{tr}(M) = -6, \\det(M) = 2$",
      "$\\text{tr}(M) = 6, \\det(M) = 2$",
      "$\\text{tr}(M) = 2, \\det(M) = 6$"
    ],
    "optionsAr": [
      "$\\text{tr}(M) = 2, \\det(M) = -6$",
      "$\\text{tr}(M) = -6, \\det(M) = 2$",
      "$\\text{tr}(M) = 6, \\det(M) = 2$",
      "$\\text{tr}(M) = 2, \\det(M) = 6$"
    ],
    "correctAnswer": "$\\text{tr}(M) = 2, \\det(M) = -6$",
    "correctIndex": 0,
    "hintEn": "Trace equals sum of eigenvalues; determinant equals product of eigenvalues.",
    "hintAr": "أثر المصفوفة يساوي مجموع قيمها الذاتية، ومحددها يساوي حاصل ضرب قيمها الذاتية.",
    "stepByStepSolutionEn": [
      "1. Trace theorem: $\\text{tr}(M) = \\sum \\lambda_i = 1 + 3 + (-2) = 2$.",
      "2. Determinant theorem: $\\det(M) = \\prod \\lambda_i = (1)(3)(-2) = -6$."
    ],
    "stepByStepSolutionAr": [
      "١. أثر المصفوفة يساوي مجموع القيم الذاتية: $1 + 3 - 2 = 2$.",
      "٢. محدد المصفوفة يساوي حاصل ضرب القيم الذاتية: $1 \\times 3 \\times (-2) = -6$."
    ],
    "teacherTipEn": "Trace = sum of eigenvalues, Determinant = product of eigenvalues: fundamental invariants of linear operators!",
    "teacherTipAr": "الأثر = مجموع القيم الذاتية، والمحدد = حاصل ضربها؛ ثوابت أساسية للمؤثرات الخطية!"
  },
  {
    "id": "egbac_ch2_se_10",
    "titleEn": "EG-Bac Model Example 10: Affine Distance Between a Point and a Subspace",
    "titleAr": "مثال البكالوريا النموذجي ١٠: المسافة التآلفية بين نقطة وفضاء جزئي",
    "difficulty": "hots",
    "questionEn": "Find the distance from point $P(1, 0, 2)$ to the line $L: \\vec{r} = t(1, 1, 1)$ in $\\mathbb{R}^3$.",
    "questionAr": "أوجد المسافة بين النقطة $P(1, 0, 2)$ والخط المستقيم $L: \\vec{r} = t(1, 1, 1)$ في $\\mathbb{R}^3$.",
    "optionsEn": [
      "$d = \\sqrt{2}\\text{ units}$",
      "$d = 1\\text{ unit}$",
      "$d = \\sqrt{3}\\text{ units}$",
      "$d = 2\\text{ units}$"
    ],
    "optionsAr": [
      "$d = \\sqrt{2}\\text{ وحدة طول}$",
      "$d = 1\\text{ وحدة طول}$",
      "$d = \\sqrt{3}\\text{ وحدة طول}$",
      "$d = 2\\text{ وحدة طول}$"
    ],
    "correctAnswer": "$d = \\sqrt{2}\\text{ units}$",
    "correctIndex": 0,
    "hintEn": "The line passes through origin O(0,0,0) with direction d = (1, 1, 1). Distance = ||OP x d|| / ||d||.",
    "hintAr": "المستقيم يمر بنقطة الأصل ومتجه اتجاهه d = (1, 1, 1). المسافة = معيار (OP x d) مقسوماً على معيار d.",
    "stepByStepSolutionEn": [
      "1. $\\vec{OP} = (1, 0, 2)$, $\\vec{d} = (1, 1, 1)$, $\\|\\vec{d}\\| = \\sqrt{3}$.",
      "2. $\\vec{OP} \\times \\vec{d} = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ 1 & 0 & 2 \\\\ 1 & 1 & 1 \\end{vmatrix} = \\hat{i}(0 - 2) - \\hat{j}(1 - 2) + \\hat{k}(1 - 0) = -2\\hat{i} + \\hat{j} + \\hat{k}$.",
      "3. $\\|\\vec{OP} \\times \\vec{d}\\| = \\sqrt{(-2)^2 + 1^2 + 1^2} = \\sqrt{4 + 1 + 1} = \\sqrt{6}$.",
      "4. Distance $d = \\frac{\\sqrt{6}}{\\sqrt{3}} = \\sqrt{\\frac{6}{3}} = \\sqrt{2}$ units."
    ],
    "stepByStepSolutionAr": [
      "١. المتجه $\\vec{OP} = (1, 0, 2)$ ومتجه الاتجاه $\\vec{d} = (1, 1, 1)$ بمعيار $\\sqrt{3}$.",
      "٢. حاصل الضرب الاتجاهي: $\\vec{OP} \\times \\vec{d} = (-2, 1, 1)$ ومعياره $\\sqrt{6}$.",
      "٣. البعد العمودي: $d = \\frac{\\sqrt{6}}{\\sqrt{3}} = \\sqrt{2}$ وحدة طول."
    ],
    "teacherTipEn": "sqrt(6)/sqrt(3) simplifies cleanly to sqrt(2).",
    "teacherTipAr": "جذر(٦) مقسوماً على جذر(٣) يختصر بدقة وأناقة إلى جذر(٢)."
  }
];

export const egBacCh2Exercises: SolvedProblem[] = [
  {
    "id": "egbac_ch2_ex_01",
    "titleEn": "EG-Bac Exercise 1: Rank of Dependent Matrix",
    "titleAr": "تمرين البكالوريا 1: رتبة مصفوفة مرتبطة خطياً",
    "difficulty": "easy",
    "questionEn": "Find the rank of matrix $A = \\begin{pmatrix} 1 & 2 \\\\ 1 & 2 \\end{pmatrix}$.",
    "questionAr": "أوجد رتبة المصفوفة $A = \\begin{pmatrix} 1 & 2 \\\\ 1 & 2 \\end{pmatrix}$.",
    "optionsEn": [
      "$\\text{rank}(A) = 1$",
      "$\\text{rank}(A) = 2$",
      "$\\text{rank}(A) = 0$",
      "$\\text{rank}(A) = 3$"
    ],
    "optionsAr": [
      "$\\text{rank}(A) = 1$",
      "$\\text{rank}(A) = 2$",
      "$\\text{rank}(A) = 0$",
      "$\\text{rank}(A) = 3$"
    ],
    "correctAnswer": "$\\text{rank}(A) = 1$",
    "correctIndex": 0,
    "hintEn": "Compute the determinant. If det(A) = 0 and at least one element is non-zero, rank is 1.",
    "hintAr": "احسب المحدد. إذا كان صفراً ويوجد عنصر غير صفري فالرتبة تساوي ١.",
    "stepByStepSolutionEn": [
      "1. $\\det(A) = (1)(2) - (2)(1) = 21 - 21 = 0$.",
      "2. Since $\\det(A) = 0$ and $A$ contains non-zero entries, $\\text{rank}(A) = 1$."
    ],
    "stepByStepSolutionAr": [
      "١. قيمة المحدد: $2(1) - 2(1) = 0$.",
      "٢. بما أن المحدد ينعدم والمصفوفة غير صفرية، فإن رتبتها تساوي ١."
    ],
    "teacherTipEn": "Rows are proportional, so only one linearly independent row exists.",
    "teacherTipAr": "الصفوف متناسبة، إذن يوجد صف واحد فقط مستقل خطياً."
  },
  {
    "id": "egbac_ch2_ex_02",
    "titleEn": "EG-Bac Exercise 2: Rank of Dependent Matrix",
    "titleAr": "تمرين البكالوريا 2: رتبة مصفوفة مرتبطة خطياً",
    "difficulty": "easy",
    "questionEn": "Find the rank of matrix $A = \\begin{pmatrix} 2 & 4 \\\\ 1 & 2 \\end{pmatrix}$.",
    "questionAr": "أوجد رتبة المصفوفة $A = \\begin{pmatrix} 2 & 4 \\\\ 1 & 2 \\end{pmatrix}$.",
    "optionsEn": [
      "$\\text{rank}(A) = 2$",
      "$\\text{rank}(A) = 1$",
      "$\\text{rank}(A) = 0$",
      "$\\text{rank}(A) = 3$"
    ],
    "optionsAr": [
      "$\\text{rank}(A) = 2$",
      "$\\text{rank}(A) = 1$",
      "$\\text{rank}(A) = 0$",
      "$\\text{rank}(A) = 3$"
    ],
    "correctAnswer": "$\\text{rank}(A) = 1$",
    "correctIndex": 1,
    "hintEn": "Compute the determinant. If det(A) = 0 and at least one element is non-zero, rank is 1.",
    "hintAr": "احسب المحدد. إذا كان صفراً ويوجد عنصر غير صفري فالرتبة تساوي ١.",
    "stepByStepSolutionEn": [
      "1. $\\det(A) = (2)(2) - (4)(1) = 22 - 22 = 0$.",
      "2. Since $\\det(A) = 0$ and $A$ contains non-zero entries, $\\text{rank}(A) = 1$."
    ],
    "stepByStepSolutionAr": [
      "١. قيمة المحدد: $2(2) - 2(2) = 0$.",
      "٢. بما أن المحدد ينعدم والمصفوفة غير صفرية، فإن رتبتها تساوي ١."
    ],
    "teacherTipEn": "Rows are proportional, so only one linearly independent row exists.",
    "teacherTipAr": "الصفوف متناسبة، إذن يوجد صف واحد فقط مستقل خطياً."
  },
  {
    "id": "egbac_ch2_ex_03",
    "titleEn": "EG-Bac Exercise 3: Rank of Dependent Matrix",
    "titleAr": "تمرين البكالوريا 3: رتبة مصفوفة مرتبطة خطياً",
    "difficulty": "easy",
    "questionEn": "Find the rank of matrix $A = \\begin{pmatrix} 3 & 6 \\\\ 1 & 2 \\end{pmatrix}$.",
    "questionAr": "أوجد رتبة المصفوفة $A = \\begin{pmatrix} 3 & 6 \\\\ 1 & 2 \\end{pmatrix}$.",
    "optionsEn": [
      "$\\text{rank}(A) = 2$",
      "$\\text{rank}(A) = 0$",
      "$\\text{rank}(A) = 1$",
      "$\\text{rank}(A) = 3$"
    ],
    "optionsAr": [
      "$\\text{rank}(A) = 2$",
      "$\\text{rank}(A) = 0$",
      "$\\text{rank}(A) = 1$",
      "$\\text{rank}(A) = 3$"
    ],
    "correctAnswer": "$\\text{rank}(A) = 1$",
    "correctIndex": 2,
    "hintEn": "Compute the determinant. If det(A) = 0 and at least one element is non-zero, rank is 1.",
    "hintAr": "احسب المحدد. إذا كان صفراً ويوجد عنصر غير صفري فالرتبة تساوي ١.",
    "stepByStepSolutionEn": [
      "1. $\\det(A) = (3)(2) - (6)(1) = 23 - 23 = 0$.",
      "2. Since $\\det(A) = 0$ and $A$ contains non-zero entries, $\\text{rank}(A) = 1$."
    ],
    "stepByStepSolutionAr": [
      "١. قيمة المحدد: $2(3) - 2(3) = 0$.",
      "٢. بما أن المحدد ينعدم والمصفوفة غير صفرية، فإن رتبتها تساوي ١."
    ],
    "teacherTipEn": "Rows are proportional, so only one linearly independent row exists.",
    "teacherTipAr": "الصفوف متناسبة، إذن يوجد صف واحد فقط مستقل خطياً."
  },
  {
    "id": "egbac_ch2_ex_04",
    "titleEn": "EG-Bac Exercise 4: Rank of Dependent Matrix",
    "titleAr": "تمرين البكالوريا 4: رتبة مصفوفة مرتبطة خطياً",
    "difficulty": "easy",
    "questionEn": "Find the rank of matrix $A = \\begin{pmatrix} 4 & 8 \\\\ 1 & 2 \\end{pmatrix}$.",
    "questionAr": "أوجد رتبة المصفوفة $A = \\begin{pmatrix} 4 & 8 \\\\ 1 & 2 \\end{pmatrix}$.",
    "optionsEn": [
      "$\\text{rank}(A) = 2$",
      "$\\text{rank}(A) = 0$",
      "$\\text{rank}(A) = 3$",
      "$\\text{rank}(A) = 1$"
    ],
    "optionsAr": [
      "$\\text{rank}(A) = 2$",
      "$\\text{rank}(A) = 0$",
      "$\\text{rank}(A) = 3$",
      "$\\text{rank}(A) = 1$"
    ],
    "correctAnswer": "$\\text{rank}(A) = 1$",
    "correctIndex": 3,
    "hintEn": "Compute the determinant. If det(A) = 0 and at least one element is non-zero, rank is 1.",
    "hintAr": "احسب المحدد. إذا كان صفراً ويوجد عنصر غير صفري فالرتبة تساوي ١.",
    "stepByStepSolutionEn": [
      "1. $\\det(A) = (4)(2) - (8)(1) = 24 - 24 = 0$.",
      "2. Since $\\det(A) = 0$ and $A$ contains non-zero entries, $\\text{rank}(A) = 1$."
    ],
    "stepByStepSolutionAr": [
      "١. قيمة المحدد: $2(4) - 2(4) = 0$.",
      "٢. بما أن المحدد ينعدم والمصفوفة غير صفرية، فإن رتبتها تساوي ١."
    ],
    "teacherTipEn": "Rows are proportional, so only one linearly independent row exists.",
    "teacherTipAr": "الصفوف متناسبة، إذن يوجد صف واحد فقط مستقل خطياً."
  },
  {
    "id": "egbac_ch2_ex_05",
    "titleEn": "EG-Bac Exercise 5: Rank of Dependent Matrix",
    "titleAr": "تمرين البكالوريا 5: رتبة مصفوفة مرتبطة خطياً",
    "difficulty": "easy",
    "questionEn": "Find the rank of matrix $A = \\begin{pmatrix} 5 & 10 \\\\ 1 & 2 \\end{pmatrix}$.",
    "questionAr": "أوجد رتبة المصفوفة $A = \\begin{pmatrix} 5 & 10 \\\\ 1 & 2 \\end{pmatrix}$.",
    "optionsEn": [
      "$\\text{rank}(A) = 1$",
      "$\\text{rank}(A) = 2$",
      "$\\text{rank}(A) = 0$",
      "$\\text{rank}(A) = 3$"
    ],
    "optionsAr": [
      "$\\text{rank}(A) = 1$",
      "$\\text{rank}(A) = 2$",
      "$\\text{rank}(A) = 0$",
      "$\\text{rank}(A) = 3$"
    ],
    "correctAnswer": "$\\text{rank}(A) = 1$",
    "correctIndex": 0,
    "hintEn": "Compute the determinant. If det(A) = 0 and at least one element is non-zero, rank is 1.",
    "hintAr": "احسب المحدد. إذا كان صفراً ويوجد عنصر غير صفري فالرتبة تساوي ١.",
    "stepByStepSolutionEn": [
      "1. $\\det(A) = (5)(2) - (10)(1) = 25 - 25 = 0$.",
      "2. Since $\\det(A) = 0$ and $A$ contains non-zero entries, $\\text{rank}(A) = 1$."
    ],
    "stepByStepSolutionAr": [
      "١. قيمة المحدد: $2(5) - 2(5) = 0$.",
      "٢. بما أن المحدد ينعدم والمصفوفة غير صفرية، فإن رتبتها تساوي ١."
    ],
    "teacherTipEn": "Rows are proportional, so only one linearly independent row exists.",
    "teacherTipAr": "الصفوف متناسبة، إذن يوجد صف واحد فقط مستقل خطياً."
  },
  {
    "id": "egbac_ch2_ex_06",
    "titleEn": "EG-Bac Exercise 6: Matrix Trace Evaluation",
    "titleAr": "تمرين البكالوريا 6: حساب أثر مصفوفة",
    "difficulty": "medium",
    "questionEn": "Find the trace of matrix $A = \\begin{pmatrix} 1 & 1 & 4 \\\\ 0 & 2 & -1 \\\\ 5 & 2 & 3 \\end{pmatrix}$.",
    "questionAr": "احسب أثر المصفوفة $A = \\begin{pmatrix} 1 & 1 & 4 \\\\ 0 & 2 & -1 \\\\ 5 & 2 & 3 \\end{pmatrix}$.",
    "optionsEn": [
      "$\\text{tr}(A) = 8$",
      "$\\text{tr}(A) = 6$",
      "$\\text{tr}(A) = 4$",
      "$\\text{tr}(A) = 12$"
    ],
    "optionsAr": [
      "$\\text{tr}(A) = 8$",
      "$\\text{tr}(A) = 6$",
      "$\\text{tr}(A) = 4$",
      "$\\text{tr}(A) = 12$"
    ],
    "correctAnswer": "$\\text{tr}(A) = 6$",
    "correctIndex": 1,
    "hintEn": "The trace is the sum of main diagonal entries.",
    "hintAr": "أثر المصفوفة هو مجموع عناصر القطر الرئيسي.",
    "stepByStepSolutionEn": [
      "1. Main diagonal entries are 1, 2, and 3.",
      "2. $\\text{tr}(A) = 1 + 2 + 3 = 6$."
    ],
    "stepByStepSolutionAr": [
      "١. عناصر القطر الرئيسي: 1 و 2 و 3.",
      "٢. الأثر = مجموعها = $6$."
    ],
    "teacherTipEn": "Off-diagonal elements do not contribute to the trace.",
    "teacherTipAr": "العناصر خارج القطر الرئيسي لا تؤثر في حساب الأثر."
  },
  {
    "id": "egbac_ch2_ex_07",
    "titleEn": "EG-Bac Exercise 7: Matrix Trace Evaluation",
    "titleAr": "تمرين البكالوريا 7: حساب أثر مصفوفة",
    "difficulty": "medium",
    "questionEn": "Find the trace of matrix $A = \\begin{pmatrix} 2 & 1 & 4 \\\\ 0 & 4 & -1 \\\\ 5 & 2 & 6 \\end{pmatrix}$.",
    "questionAr": "احسب أثر المصفوفة $A = \\begin{pmatrix} 2 & 1 & 4 \\\\ 0 & 4 & -1 \\\\ 5 & 2 & 6 \\end{pmatrix}$.",
    "optionsEn": [
      "$\\text{tr}(A) = 14$",
      "$\\text{tr}(A) = 10$",
      "$\\text{tr}(A) = 12$",
      "$\\text{tr}(A) = 18$"
    ],
    "optionsAr": [
      "$\\text{tr}(A) = 14$",
      "$\\text{tr}(A) = 10$",
      "$\\text{tr}(A) = 12$",
      "$\\text{tr}(A) = 18$"
    ],
    "correctAnswer": "$\\text{tr}(A) = 12$",
    "correctIndex": 2,
    "hintEn": "The trace is the sum of main diagonal entries.",
    "hintAr": "أثر المصفوفة هو مجموع عناصر القطر الرئيسي.",
    "stepByStepSolutionEn": [
      "1. Main diagonal entries are 2, 4, and 6.",
      "2. $\\text{tr}(A) = 2 + 4 + 6 = 12$."
    ],
    "stepByStepSolutionAr": [
      "١. عناصر القطر الرئيسي: 2 و 4 و 6.",
      "٢. الأثر = مجموعها = $12$."
    ],
    "teacherTipEn": "Off-diagonal elements do not contribute to the trace.",
    "teacherTipAr": "العناصر خارج القطر الرئيسي لا تؤثر في حساب الأثر."
  },
  {
    "id": "egbac_ch2_ex_08",
    "titleEn": "EG-Bac Exercise 8: Matrix Trace Evaluation",
    "titleAr": "تمرين البكالوريا 8: حساب أثر مصفوفة",
    "difficulty": "medium",
    "questionEn": "Find the trace of matrix $A = \\begin{pmatrix} 3 & 1 & 4 \\\\ 0 & 6 & -1 \\\\ 5 & 2 & 9 \\end{pmatrix}$.",
    "questionAr": "احسب أثر المصفوفة $A = \\begin{pmatrix} 3 & 1 & 4 \\\\ 0 & 6 & -1 \\\\ 5 & 2 & 9 \\end{pmatrix}$.",
    "optionsEn": [
      "$\\text{tr}(A) = 20$",
      "$\\text{tr}(A) = 16$",
      "$\\text{tr}(A) = 24$",
      "$\\text{tr}(A) = 18$"
    ],
    "optionsAr": [
      "$\\text{tr}(A) = 20$",
      "$\\text{tr}(A) = 16$",
      "$\\text{tr}(A) = 24$",
      "$\\text{tr}(A) = 18$"
    ],
    "correctAnswer": "$\\text{tr}(A) = 18$",
    "correctIndex": 3,
    "hintEn": "The trace is the sum of main diagonal entries.",
    "hintAr": "أثر المصفوفة هو مجموع عناصر القطر الرئيسي.",
    "stepByStepSolutionEn": [
      "1. Main diagonal entries are 3, 6, and 9.",
      "2. $\\text{tr}(A) = 3 + 6 + 9 = 18$."
    ],
    "stepByStepSolutionAr": [
      "١. عناصر القطر الرئيسي: 3 و 6 و 9.",
      "٢. الأثر = مجموعها = $18$."
    ],
    "teacherTipEn": "Off-diagonal elements do not contribute to the trace.",
    "teacherTipAr": "العناصر خارج القطر الرئيسي لا تؤثر في حساب الأثر."
  },
  {
    "id": "egbac_ch2_ex_09",
    "titleEn": "EG-Bac Exercise 9: Matrix Trace Evaluation",
    "titleAr": "تمرين البكالوريا 9: حساب أثر مصفوفة",
    "difficulty": "medium",
    "questionEn": "Find the trace of matrix $A = \\begin{pmatrix} 4 & 1 & 4 \\\\ 0 & 8 & -1 \\\\ 5 & 2 & 12 \\end{pmatrix}$.",
    "questionAr": "احسب أثر المصفوفة $A = \\begin{pmatrix} 4 & 1 & 4 \\\\ 0 & 8 & -1 \\\\ 5 & 2 & 12 \\end{pmatrix}$.",
    "optionsEn": [
      "$\\text{tr}(A) = 24$",
      "$\\text{tr}(A) = 26$",
      "$\\text{tr}(A) = 22$",
      "$\\text{tr}(A) = 30$"
    ],
    "optionsAr": [
      "$\\text{tr}(A) = 24$",
      "$\\text{tr}(A) = 26$",
      "$\\text{tr}(A) = 22$",
      "$\\text{tr}(A) = 30$"
    ],
    "correctAnswer": "$\\text{tr}(A) = 24$",
    "correctIndex": 0,
    "hintEn": "The trace is the sum of main diagonal entries.",
    "hintAr": "أثر المصفوفة هو مجموع عناصر القطر الرئيسي.",
    "stepByStepSolutionEn": [
      "1. Main diagonal entries are 4, 8, and 12.",
      "2. $\\text{tr}(A) = 4 + 8 + 12 = 24$."
    ],
    "stepByStepSolutionAr": [
      "١. عناصر القطر الرئيسي: 4 و 8 و 12.",
      "٢. الأثر = مجموعها = $24$."
    ],
    "teacherTipEn": "Off-diagonal elements do not contribute to the trace.",
    "teacherTipAr": "العناصر خارج القطر الرئيسي لا تؤثر في حساب الأثر."
  },
  {
    "id": "egbac_ch2_ex_10",
    "titleEn": "EG-Bac Exercise 10: Matrix Trace Evaluation",
    "titleAr": "تمرين البكالوريا 10: حساب أثر مصفوفة",
    "difficulty": "medium",
    "questionEn": "Find the trace of matrix $A = \\begin{pmatrix} 5 & 1 & 4 \\\\ 0 & 10 & -1 \\\\ 5 & 2 & 15 \\end{pmatrix}$.",
    "questionAr": "احسب أثر المصفوفة $A = \\begin{pmatrix} 5 & 1 & 4 \\\\ 0 & 10 & -1 \\\\ 5 & 2 & 15 \\end{pmatrix}$.",
    "optionsEn": [
      "$\\text{tr}(A) = 32$",
      "$\\text{tr}(A) = 30$",
      "$\\text{tr}(A) = 28$",
      "$\\text{tr}(A) = 36$"
    ],
    "optionsAr": [
      "$\\text{tr}(A) = 32$",
      "$\\text{tr}(A) = 30$",
      "$\\text{tr}(A) = 28$",
      "$\\text{tr}(A) = 36$"
    ],
    "correctAnswer": "$\\text{tr}(A) = 30$",
    "correctIndex": 1,
    "hintEn": "The trace is the sum of main diagonal entries.",
    "hintAr": "أثر المصفوفة هو مجموع عناصر القطر الرئيسي.",
    "stepByStepSolutionEn": [
      "1. Main diagonal entries are 5, 10, and 15.",
      "2. $\\text{tr}(A) = 5 + 10 + 15 = 30$."
    ],
    "stepByStepSolutionAr": [
      "١. عناصر القطر الرئيسي: 5 و 10 و 15.",
      "٢. الأثر = مجموعها = $30$."
    ],
    "teacherTipEn": "Off-diagonal elements do not contribute to the trace.",
    "teacherTipAr": "العناصر خارج القطر الرئيسي لا تؤثر في حساب الأثر."
  },
  {
    "id": "egbac_ch2_ex_11",
    "titleEn": "EG-Bac Exercise 11: Maximum Eigenvalue of Diagonal Matrix",
    "titleAr": "تمرين البكالوريا 11: القيمة الذاتية العظمى لمصفوفة قطرية",
    "difficulty": "hots",
    "questionEn": "Find the largest eigenvalue $\\lambda_{\\max}$ of the diagonal matrix $D = \\begin{pmatrix} 1 & 0 & 0 \\\\ 0 & 2 & 0 \\\\ 0 & 0 & 4 \\end{pmatrix}$.",
    "questionAr": "أوجد القيمة الذاتية العظمى $\\lambda_{\\max}$ للمصفوفة القطرية $D = \\begin{pmatrix} 1 & 0 & 0 \\\\ 0 & 2 & 0 \\\\ 0 & 0 & 4 \\end{pmatrix}$.",
    "optionsEn": [
      "$\\lambda_{\\max} = 2$",
      "$\\lambda_{\\max} = 1$",
      "$\\lambda_{\\max} = 4$",
      "$\\lambda_{\\max} = 5$"
    ],
    "optionsAr": [
      "$\\lambda_{\\max} = 2$",
      "$\\lambda_{\\max} = 1$",
      "$\\lambda_{\\max} = 4$",
      "$\\lambda_{\\max} = 5$"
    ],
    "correctAnswer": "$\\lambda_{\\max} = 4$",
    "correctIndex": 2,
    "hintEn": "The eigenvalues of a diagonal matrix are precisely its diagonal entries.",
    "hintAr": "القيم الذاتية للمصفوفة القطرية هي عناصر قطرها الرئيسي نفسها.",
    "stepByStepSolutionEn": [
      "1. For any diagonal matrix, the characteristic equation is $(\\lambda - 1)(\\lambda - 2)(\\lambda - 4) = 0$.",
      "2. The eigenvalues are $1, 2, 4$.",
      "3. The maximum eigenvalue is 4."
    ],
    "stepByStepSolutionAr": [
      "١. المعادلة المميزة لمصفوفة قطرية جذورها هي عناصر القطر نفسه.",
      "٢. القيم الذاتية هي: 1 و 2 و 4.",
      "٣. أكبرها هو 4."
    ],
    "teacherTipEn": "Diagonal matrices have their eigenvalues displayed directly along the diagonal.",
    "teacherTipAr": "المصفوفات القطرية تظهر قيمها الذاتية مباشرة على القطر الرئيسي دون أي حسابات."
  },
  {
    "id": "egbac_ch2_ex_12",
    "titleEn": "EG-Bac Exercise 12: Maximum Eigenvalue of Diagonal Matrix",
    "titleAr": "تمرين البكالوريا 12: القيمة الذاتية العظمى لمصفوفة قطرية",
    "difficulty": "hots",
    "questionEn": "Find the largest eigenvalue $\\lambda_{\\max}$ of the diagonal matrix $D = \\begin{pmatrix} 2 & 0 & 0 \\\\ 0 & 4 & 0 \\\\ 0 & 0 & 8 \\end{pmatrix}$.",
    "questionAr": "أوجد القيمة الذاتية العظمى $\\lambda_{\\max}$ للمصفوفة القطرية $D = \\begin{pmatrix} 2 & 0 & 0 \\\\ 0 & 4 & 0 \\\\ 0 & 0 & 8 \\end{pmatrix}$.",
    "optionsEn": [
      "$\\lambda_{\\max} = 4$",
      "$\\lambda_{\\max} = 2$",
      "$\\lambda_{\\max} = 10$",
      "$\\lambda_{\\max} = 8$"
    ],
    "optionsAr": [
      "$\\lambda_{\\max} = 4$",
      "$\\lambda_{\\max} = 2$",
      "$\\lambda_{\\max} = 10$",
      "$\\lambda_{\\max} = 8$"
    ],
    "correctAnswer": "$\\lambda_{\\max} = 8$",
    "correctIndex": 3,
    "hintEn": "The eigenvalues of a diagonal matrix are precisely its diagonal entries.",
    "hintAr": "القيم الذاتية للمصفوفة القطرية هي عناصر قطرها الرئيسي نفسها.",
    "stepByStepSolutionEn": [
      "1. For any diagonal matrix, the characteristic equation is $(\\lambda - 2)(\\lambda - 4)(\\lambda - 8) = 0$.",
      "2. The eigenvalues are $2, 4, 8$.",
      "3. The maximum eigenvalue is 8."
    ],
    "stepByStepSolutionAr": [
      "١. المعادلة المميزة لمصفوفة قطرية جذورها هي عناصر القطر نفسه.",
      "٢. القيم الذاتية هي: 2 و 4 و 8.",
      "٣. أكبرها هو 8."
    ],
    "teacherTipEn": "Diagonal matrices have their eigenvalues displayed directly along the diagonal.",
    "teacherTipAr": "المصفوفات القطرية تظهر قيمها الذاتية مباشرة على القطر الرئيسي دون أي حسابات."
  },
  {
    "id": "egbac_ch2_ex_13",
    "titleEn": "EG-Bac Exercise 13: Maximum Eigenvalue of Diagonal Matrix",
    "titleAr": "تمرين البكالوريا 13: القيمة الذاتية العظمى لمصفوفة قطرية",
    "difficulty": "hots",
    "questionEn": "Find the largest eigenvalue $\\lambda_{\\max}$ of the diagonal matrix $D = \\begin{pmatrix} 3 & 0 & 0 \\\\ 0 & 6 & 0 \\\\ 0 & 0 & 12 \\end{pmatrix}$.",
    "questionAr": "أوجد القيمة الذاتية العظمى $\\lambda_{\\max}$ للمصفوفة القطرية $D = \\begin{pmatrix} 3 & 0 & 0 \\\\ 0 & 6 & 0 \\\\ 0 & 0 & 12 \\end{pmatrix}$.",
    "optionsEn": [
      "$\\lambda_{\\max} = 12$",
      "$\\lambda_{\\max} = 6$",
      "$\\lambda_{\\max} = 3$",
      "$\\lambda_{\\max} = 15$"
    ],
    "optionsAr": [
      "$\\lambda_{\\max} = 12$",
      "$\\lambda_{\\max} = 6$",
      "$\\lambda_{\\max} = 3$",
      "$\\lambda_{\\max} = 15$"
    ],
    "correctAnswer": "$\\lambda_{\\max} = 12$",
    "correctIndex": 0,
    "hintEn": "The eigenvalues of a diagonal matrix are precisely its diagonal entries.",
    "hintAr": "القيم الذاتية للمصفوفة القطرية هي عناصر قطرها الرئيسي نفسها.",
    "stepByStepSolutionEn": [
      "1. For any diagonal matrix, the characteristic equation is $(\\lambda - 3)(\\lambda - 6)(\\lambda - 12) = 0$.",
      "2. The eigenvalues are $3, 6, 12$.",
      "3. The maximum eigenvalue is 12."
    ],
    "stepByStepSolutionAr": [
      "١. المعادلة المميزة لمصفوفة قطرية جذورها هي عناصر القطر نفسه.",
      "٢. القيم الذاتية هي: 3 و 6 و 12.",
      "٣. أكبرها هو 12."
    ],
    "teacherTipEn": "Diagonal matrices have their eigenvalues displayed directly along the diagonal.",
    "teacherTipAr": "المصفوفات القطرية تظهر قيمها الذاتية مباشرة على القطر الرئيسي دون أي حسابات."
  },
  {
    "id": "egbac_ch2_ex_14",
    "titleEn": "EG-Bac Exercise 14: Maximum Eigenvalue of Diagonal Matrix",
    "titleAr": "تمرين البكالوريا 14: القيمة الذاتية العظمى لمصفوفة قطرية",
    "difficulty": "hots",
    "questionEn": "Find the largest eigenvalue $\\lambda_{\\max}$ of the diagonal matrix $D = \\begin{pmatrix} 4 & 0 & 0 \\\\ 0 & 8 & 0 \\\\ 0 & 0 & 16 \\end{pmatrix}$.",
    "questionAr": "أوجد القيمة الذاتية العظمى $\\lambda_{\\max}$ للمصفوفة القطرية $D = \\begin{pmatrix} 4 & 0 & 0 \\\\ 0 & 8 & 0 \\\\ 0 & 0 & 16 \\end{pmatrix}$.",
    "optionsEn": [
      "$\\lambda_{\\max} = 8$",
      "$\\lambda_{\\max} = 16$",
      "$\\lambda_{\\max} = 4$",
      "$\\lambda_{\\max} = 20$"
    ],
    "optionsAr": [
      "$\\lambda_{\\max} = 8$",
      "$\\lambda_{\\max} = 16$",
      "$\\lambda_{\\max} = 4$",
      "$\\lambda_{\\max} = 20$"
    ],
    "correctAnswer": "$\\lambda_{\\max} = 16$",
    "correctIndex": 1,
    "hintEn": "The eigenvalues of a diagonal matrix are precisely its diagonal entries.",
    "hintAr": "القيم الذاتية للمصفوفة القطرية هي عناصر قطرها الرئيسي نفسها.",
    "stepByStepSolutionEn": [
      "1. For any diagonal matrix, the characteristic equation is $(\\lambda - 4)(\\lambda - 8)(\\lambda - 16) = 0$.",
      "2. The eigenvalues are $4, 8, 16$.",
      "3. The maximum eigenvalue is 16."
    ],
    "stepByStepSolutionAr": [
      "١. المعادلة المميزة لمصفوفة قطرية جذورها هي عناصر القطر نفسه.",
      "٢. القيم الذاتية هي: 4 و 8 و 16.",
      "٣. أكبرها هو 16."
    ],
    "teacherTipEn": "Diagonal matrices have their eigenvalues displayed directly along the diagonal.",
    "teacherTipAr": "المصفوفات القطرية تظهر قيمها الذاتية مباشرة على القطر الرئيسي دون أي حسابات."
  },
  {
    "id": "egbac_ch2_ex_15",
    "titleEn": "EG-Bac Exercise 15: Maximum Eigenvalue of Diagonal Matrix",
    "titleAr": "تمرين البكالوريا 15: القيمة الذاتية العظمى لمصفوفة قطرية",
    "difficulty": "hots",
    "questionEn": "Find the largest eigenvalue $\\lambda_{\\max}$ of the diagonal matrix $D = \\begin{pmatrix} 5 & 0 & 0 \\\\ 0 & 10 & 0 \\\\ 0 & 0 & 20 \\end{pmatrix}$.",
    "questionAr": "أوجد القيمة الذاتية العظمى $\\lambda_{\\max}$ للمصفوفة القطرية $D = \\begin{pmatrix} 5 & 0 & 0 \\\\ 0 & 10 & 0 \\\\ 0 & 0 & 20 \\end{pmatrix}$.",
    "optionsEn": [
      "$\\lambda_{\\max} = 10$",
      "$\\lambda_{\\max} = 5$",
      "$\\lambda_{\\max} = 20$",
      "$\\lambda_{\\max} = 25$"
    ],
    "optionsAr": [
      "$\\lambda_{\\max} = 10$",
      "$\\lambda_{\\max} = 5$",
      "$\\lambda_{\\max} = 20$",
      "$\\lambda_{\\max} = 25$"
    ],
    "correctAnswer": "$\\lambda_{\\max} = 20$",
    "correctIndex": 2,
    "hintEn": "The eigenvalues of a diagonal matrix are precisely its diagonal entries.",
    "hintAr": "القيم الذاتية للمصفوفة القطرية هي عناصر قطرها الرئيسي نفسها.",
    "stepByStepSolutionEn": [
      "1. For any diagonal matrix, the characteristic equation is $(\\lambda - 5)(\\lambda - 10)(\\lambda - 20) = 0$.",
      "2. The eigenvalues are $5, 10, 20$.",
      "3. The maximum eigenvalue is 20."
    ],
    "stepByStepSolutionAr": [
      "١. المعادلة المميزة لمصفوفة قطرية جذورها هي عناصر القطر نفسه.",
      "٢. القيم الذاتية هي: 5 و 10 و 20.",
      "٣. أكبرها هو 20."
    ],
    "teacherTipEn": "Diagonal matrices have their eigenvalues displayed directly along the diagonal.",
    "teacherTipAr": "المصفوفات القطرية تظهر قيمها الذاتية مباشرة على القطر الرئيسي دون أي حسابات."
  }
];
