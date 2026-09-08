import type { SolvedProblem } from '../../../types/curriculum';

export const statCh2SolvedExamples: SolvedProblem[] = [
  {
    "id": "stat_ch2_se_01",
    "titleEn": "MoE Example 1: 2D Vector Moment About Origin and Perpendicular Arm",
    "titleAr": "مثال الوزارة ١: عزم قوة في بعدين حول نقطة الأصل وطول العمود",
    "difficulty": "easy",
    "questionEn": "A force $\\vec{F} = 3\\hat{i} - 4\\hat{j}$ acts at the point $A(1, 2)$. Find the moment vector $\\vec{M}_O$ about the origin, and calculate the length of the perpendicular arm $L$ from the origin to the line of action of $\\vec{F}$.",
    "questionAr": "تؤثر القوة $\\vec{F} = 3\\hat{i} - 4\\hat{j}$ في النقطة $A(1, 2)$. أوجد متجه عزم القوة $\\vec{M}_O$ حول نقطة الأصل، ثم احسب طول العمود الساقط $L$ من نقطة الأصل على خط عمل القوة.",
    "optionsEn": [
      "$\\vec{M}_O = -10\\hat{k}, \\, L = 2\\text{ units}$",
      "$\\vec{M}_O = 10\\hat{k}, \\, L = 2\\text{ units}$",
      "$\\vec{M}_O = -2\\hat{k}, \\, L = 0.4\\text{ units}$",
      "$\\vec{M}_O = -10\\hat{k}, \\, L = 5\\text{ units}$"
    ],
    "optionsAr": [
      "$\\vec{M}_O = -10\\hat{k}, \\, L = 2\\text{ وحدة طول}$",
      "$\\vec{M}_O = 10\\hat{k}, \\, L = 2\\text{ وحدة طول}$",
      "$\\vec{M}_O = -2\\hat{k}, \\, L = 0.4\\text{ وحدة طول}$",
      "$\\vec{M}_O = -10\\hat{k}, \\, L = 5\\text{ وحدة طول}$"
    ],
    "correctAnswer": "$\\vec{M}_O = -10\\hat{k}, \\, L = 2\\text{ units}$",
    "correctIndex": 0,
    "hintEn": "$\\vec{M}_O = \\vec{r} \\times \\vec{F} = (x F_y - y F_x)\\hat{k}$ and $L = \\frac{\\|\\vec{M}_O\\|}{\\|\\vec{F}\\|}$.",
    "hintAr": "$\\vec{M}_O = \\vec{r} \\times \\vec{F} = (x F_y - y F_x)\\hat{k}$ وطول العمود $L = \\frac{\\|\\vec{M}_O\\|}{\\|\\vec{F}\\|}$.",
    "stepByStepSolutionEn": [
      "1. Position vector: $\\vec{r} = \\vec{OA} = (1, 2)$.",
      "2. Force vector: $\\vec{F} = (3, -4)$.",
      "3. Cross product for 2D moment:",
      "$$\\vec{M}_O = \\vec{r} \\times \\vec{F} = [(1)(-4) - (2)(3)]\\hat{k} = (-4 - 6)\\hat{k} = -10\\hat{k}$$",
      "4. Magnitude of force: $\\|\\vec{F}\\| = \\sqrt{3^2 + (-4)^2} = \\sqrt{9 + 16} = 5\\text{ units}$.",
      "5. Length of perpendicular arm:",
      "$$L = \\frac{\\|\\vec{M}_O\\|}{\\|\\vec{F}\\|} = \\frac{|-10|}{5} = \\frac{10}{5} = 2\\text{ units}$$"
    ],
    "stepByStepSolutionAr": [
      "١. متجه الموضع: $\\vec{r} = (1, 2)$.",
      "٢. متجه القوة: $\\vec{F} = (3, -4)$.",
      "٣. حاصل الضرب الاتجاهي في المستوى:",
      "$$\\vec{M}_O = [(1)(-4) - (2)(3)]\\hat{k} = -10\\hat{k}$$",
      "٤. معيار القوة: $\\|\\vec{F}\\| = \\sqrt{9 + 16} = 5$.",
      "٥. طول العمود الساقط: $L = \\frac{10}{5} = 2\\text{ وحدة طول}$."
    ],
    "teacherTipEn": "The negative sign in M_O indicates clockwise rotation; the perpendicular arm L is always a positive scalar.",
    "teacherTipAr": "الإشارة السالبة في العزم تعني دوراناً في اتجاه عقارب الساعة، بينما طول العمود الساقط دائماً موجب."
  },
  {
    "id": "stat_ch2_se_02",
    "titleEn": "MoE Example 2: 2D Moment About an Arbitrary Point B",
    "titleAr": "مثال الوزارة ٢: عزم قوة حول نقطة اختيارية ب",
    "difficulty": "medium",
    "questionEn": "A force $\\vec{F} = 2\\hat{i} + 5\\hat{j}$ acts at the point $A(3, 1)$. Find the moment $\\vec{M}_B$ of the force about the point $B(1, -2)$.",
    "questionAr": "تؤثر القوة $\\vec{F} = 2\\hat{i} + 5\\hat{j}$ في النقطة $A(3, 1)$. أوجد عزم القوة $\\vec{M}_B$ حول النقطة $B(1, -2)$.",
    "optionsEn": [
      "$4\\hat{k}$",
      "$-4\\hat{k}$",
      "$16\\hat{k}$",
      "$6\\hat{k}$"
    ],
    "optionsAr": [
      "$4\\hat{k}$",
      "$-4\\hat{k}$",
      "$16\\hat{k}$",
      "$6\\hat{k}$"
    ],
    "correctAnswer": "$4\\hat{k}$",
    "correctIndex": 0,
    "hintEn": "The position vector is $\\vec{r} = \\vec{BA} = A - B$.",
    "hintAr": "متجه الموضع هو $\\vec{r} = \\vec{BA} = A - B$.",
    "stepByStepSolutionEn": [
      "1. Calculate vector $\\vec{r} = \\vec{BA}$ from moment center $B$ to application point $A$:",
      "$$\\vec{r} = A - B = (3 - 1, 1 - (-2)) = (2, 3)$$",
      "2. Compute the vector cross product $\\vec{M}_B = \\vec{r} \\times \\vec{F}$:",
      "$$\\vec{M}_B = (2\\hat{i} + 3\\hat{j}) \\times (2\\hat{i} + 5\\hat{j}) = [(2)(5) - (3)(2)]\\hat{k} = (10 - 6)\\hat{k} = 4\\hat{k}$$"
    ],
    "stepByStepSolutionAr": [
      "١. حساب متجه الموضع من مركز العزم $B$ إلى نقطة التأثير $A$:",
      "$$\\vec{r} = \\vec{BA} = A - B = (3 - 1, 1 - (-2)) = (2, 3)$$",
      "٢. الضرب الاتجاهي:",
      "$$\\vec{M}_B = [(2)(5) - (3)(2)]\\hat{k} = 4\\hat{k}$$"
    ],
    "teacherTipEn": "Always draw the vector from the moment center to the force point: r = BA = A - B.",
    "teacherTipAr": "متجه الموضع دائماً يبدأ من مركز العزم إلى نقطة تأثير القوة: ر = ب أ = أ - ب."
  },
  {
    "id": "stat_ch2_se_03",
    "titleEn": "MoE Example 3: Geometric Criterion for Parallel Line of Action",
    "titleAr": "مثال الوزارة ٣: الخاصية الهندسية لتوازي خط العمل مع قطعة مستقيمة",
    "difficulty": "easy",
    "questionEn": "If the moments of a force $\\vec{F}$ about points $A$ and $B$ satisfy $\\vec{M}_A = \\vec{M}_B \\neq \\vec{0}$, what is the geometric relationship between the line of action of $\\vec{F}$ and the straight line $AB$?",
    "questionAr": "إذا كان عزما قوة $\\vec{F}$ حول النقطتين $A$ و $B$ يحققان $\\vec{M}_A = \\vec{M}_B \\neq \\vec{0}$، فما هي العلاقة الهندسية بين خط عمل القوة والمستقيم $AB$؟",
    "optionsEn": [
      "The line of action of $\\vec{F}$ is parallel to $AB$.",
      "The line of action of $\\vec{F}$ bisects the segment $AB$.",
      "The line of action of $\\vec{F}$ is perpendicular to $AB$.",
      "The line of action of $\\vec{F}$ passes through $A$."
    ],
    "optionsAr": [
      "خط عمل القوة يوازي المستقيم $AB$.",
      "خط عمل القوة ينصف القطعة المستقيمة $AB$.",
      "خط عمل القوة عمودي على المستقيم $AB$.",
      "خط عمل القوة يمر بالنقطة $A$."
    ],
    "correctAnswer": "The line of action of $\\vec{F}$ is parallel to $AB$.",
    "correctIndex": 0,
    "hintEn": "By the moment transfer theorem: $\\vec{M}_B - \\vec{M}_A = \\vec{AB} \\times \\vec{F} = \\vec{0} \\implies \\vec{AB} \\parallel \\vec{F}$.",
    "hintAr": "قانون انتقال العزوم: $\\vec{M}_B - \\vec{M}_A = \\vec{AB} \\times \\vec{F} = \\vec{0} \\implies \\vec{AB} \\parallel \\vec{F}$.",
    "stepByStepSolutionEn": [
      "1. From the moment transfer relation: $\\vec{M}_B = \\vec{M}_A + \\vec{BA} \\times \\vec{F}$.",
      "2. Subtracting $\\vec{M}_A$: $\\vec{M}_B - \\vec{M}_A = -\\vec{AB} \\times \\vec{F}$.",
      "3. Since $\\vec{M}_A = \\vec{M}_B$, we have $\\vec{AB} \\times \\vec{F} = \\vec{0}$.",
      "4. Since $\\vec{F} \\neq \\vec{0}$ and $\\vec{AB} \\neq \\vec{0}$, the cross product being zero proves that the line of action of $\\vec{F}$ is parallel to the line $AB$."
    ],
    "stepByStepSolutionAr": [
      "١. من قانون انتقال العزوم: $\\vec{M}_B - \\vec{M}_A = -\\vec{AB} \\times \\vec{F}$.",
      "٢. بما أن $\\vec{M}_A = \\vec{M}_B$، إذن: $\\vec{AB} \\times \\vec{F} = \\vec{0}$.",
      "٣. بما أن القوة غير صفرية وطول القطعة غير صفري، فإن انعدام الضرب الاتجاهي يعني توازي المتجهين:",
      "خط عمل القوة $\\vec{F}$ يوازي المستقيم $AB$."
    ],
    "teacherTipEn": "Golden rule of moments: M_A = M_B => line of action is parallel to AB.",
    "teacherTipAr": "قاعدة ذهبية: تساوي العزمين حول نقطتين يعني توازي خط عمل القوة مع المستقيم الواصل بينهما."
  },
  {
    "id": "stat_ch2_se_04",
    "titleEn": "MoE Example 4: Geometric Criterion for Bisecting Line Segment",
    "titleAr": "مثال الوزارة ٤: الخاصية الهندسية لتنصيف خط العمل للقطعة المستقيمة",
    "difficulty": "easy",
    "questionEn": "If the moments of a force $\\vec{F}$ about points $A$ and $B$ satisfy $\\vec{M}_A = -\\vec{M}_B \\neq \\vec{0}$, what does this imply about the line of action of $\\vec{F}$?",
    "questionAr": "إذا كان عزما قوة $\\vec{F}$ حول النقطتين $A$ و $B$ يحققان $\\vec{M}_A = -\\vec{M}_B \\neq \\vec{0}$، فماذا نستنتج عن خط عمل القوة $\\vec{F}$؟",
    "optionsEn": [
      "The line of action of $\\vec{F}$ bisects the line segment $AB$.",
      "The line of action of $\\vec{F}$ is parallel to $AB$.",
      "The line of action of $\\vec{F}$ is perpendicular to $AB$.",
      "The line of action of $\\vec{F}$ passes through the origin."
    ],
    "optionsAr": [
      "خط عمل القوة ينصف القطعة المستقيمة $AB$.",
      "خط عمل القوة يوازي المستقيم $AB$.",
      "خط عمل القوة عمودي على المستقيم $AB$.",
      "خط عمل القوة يمر بنقطة الأصل."
    ],
    "correctAnswer": "The line of action of $\\vec{F}$ bisects the line segment $AB$.",
    "correctIndex": 0,
    "hintEn": "If $M_A = -M_B$, the midpoint $C = \\frac{A+B}{2}$ has moment $M_C = \\frac{M_A + M_B}{2} = 0$.",
    "hintAr": "إذا كان $M_A = -M_B$ فإن نقطة المنتصف $C$ ينعدم عندها العزم: $M_C = \\frac{M_A + M_B}{2} = 0$.",
    "stepByStepSolutionEn": [
      "1. Let $C$ be the midpoint of the line segment $AB$: $C = \\frac{A + B}{2}$.",
      "2. The moment about the midpoint is $\\vec{M}_C = \\frac{1}{2}(\\vec{M}_A + \\vec{M}_B)$.",
      "3. Since $\\vec{M}_A = -\\vec{M}_B$, we get $\\vec{M}_C = \\frac{1}{2}(\\vec{M}_A - \\vec{M}_A) = \\vec{0}$.",
      "4. Since the moment about $C$ is zero, the line of action of $\\vec{F}$ passes through the midpoint $C$, which means it bisects the line segment $AB$."
    ],
    "stepByStepSolutionAr": [
      "١. لتكن $C$ منتصف القطعة المستقيمة $AB$.",
      "٢. العزم حول نقطة المنتصف: $\\vec{M}_C = \\frac{1}{2}(\\vec{M}_A + \\vec{M}_B)$.",
      "٣. بالتعويض عن $\\vec{M}_A = -\\vec{M}_B$: نجد أن $\\vec{M}_C = \\vec{0}$.",
      "٤. انعدام العزم حول نقطة المنتصف يعني أن خط عمل القوة يمر بمنتصف القطعة المستقيمة $AB$، أي ينصفها."
    ],
    "teacherTipEn": "M_A = -M_B => line of action bisects AB. M_A = M_B => line of action is parallel to AB.",
    "teacherTipAr": "إذا تساوى العزمان مقداراً وتضادا إشارة فإن خط العمل ينصف، وإذا تساويا تماماً فإنه يوازي."
  },
  {
    "id": "stat_ch2_se_05",
    "titleEn": "MoE Example 5: Parameter Finding in 2D Moments",
    "titleAr": "مثال الوزارة ٥: إيجاد الثوابت المجهولة في عزوم المستوى",
    "difficulty": "medium",
    "questionEn": "A force $\\vec{F} = m\\hat{i} + 3\\hat{j}$ acts at the point $A(2, 5)$. If the moment of $\\vec{F}$ about the origin is $\\vec{M}_O = -19\\hat{k}$, find the value of the constant $m$.",
    "questionAr": "تؤثر القوة $\\vec{F} = m\\hat{i} + 3\\hat{j}$ في النقطة $A(2, 5)$. فإذا كان عزم القوة حول نقطة الأصل $\\vec{M}_O = -19\\hat{k}$، فأوجد قيمة الثابت $m$.",
    "optionsEn": [
      "$5$",
      "$3$",
      "$-5$",
      "$-3$"
    ],
    "optionsAr": [
      "5",
      "3",
      "-5",
      "-3"
    ],
    "correctAnswer": "$5$",
    "correctIndex": 0,
    "hintEn": "$\\vec{M}_O = (x F_y - y F_x)\\hat{k} = -19\\hat{k}$.",
    "hintAr": "$\\vec{M}_O = (x F_y - y F_x)\\hat{k} = -19\\hat{k}$.",
    "stepByStepSolutionEn": [
      "1. Formula for moment about origin in 2D:",
      "$$\\vec{M}_O = [(2)(3) - (5)(m)]\\hat{k} = (6 - 5m)\\hat{k}$$",
      "2. Equate to given value $-19\\hat{k}$:",
      "$$6 - 5m = -19 \\implies -5m = -19 - 6 = -25 \\implies m = 5$$"
    ],
    "stepByStepSolutionAr": [
      "١. قانون العزم حول نقطة الأصل في بعدين:",
      "$$\\vec{M}_O = [(2)(3) - (5)(m)]\\hat{k} = (6 - 5m)\\hat{k}$$",
      "٢. بالمساواة مع المعطى $-19\\hat{k}$:",
      "$$6 - 5m = -19 \\implies -5m = -25 \\implies m = 5$$"
    ],
    "teacherTipEn": "Set up the algebraic equation directly from the cross product components.",
    "teacherTipAr": "كون المعادلة الجبرية مباشرة من مركبات الضرب الاتجاهي."
  },
  {
    "id": "stat_ch2_se_06",
    "titleEn": "MoE Example 6: Varignon's Theorem for Coplanar Forces",
    "titleAr": "مثال الوزارة ٦: نظرية فارينون للقوى المستوية المتلاقية",
    "difficulty": "medium",
    "questionEn": "Two concurrent forces $\\vec{F}_1 = 2\\hat{i} - \\hat{j}$ and $\\vec{F}_2 = \\hat{i} + 4\\hat{j}$ act at the point $A(1, 2)$. Find the moment $\\vec{M}_O$ of their resultant about the origin.",
    "questionAr": "أثرت القوتان المتلاقيتان $\\vec{F}_1 = 2\\hat{i} - \\hat{j}$ و $\\vec{F}_2 = \\hat{i} + 4\\hat{j}$ في النقطة $A(1, 2)$. أوجد عزم محصلتهما $\\vec{M}_O$ حول نقطة الأصل.",
    "optionsEn": [
      "$-3\\hat{k}$",
      "$3\\hat{k}$",
      "$-5\\hat{k}$",
      "$5\\hat{k}$"
    ],
    "optionsAr": [
      "$-3\\hat{k}$",
      "$3\\hat{k}$",
      "$-5\\hat{k}$",
      "$5\\hat{k}$"
    ],
    "correctAnswer": "$-3\\hat{k}$",
    "correctIndex": 0,
    "hintEn": "By Varignon's theorem, moment of resultant equals sum of moments, or simply compute $\\vec{R} = \\vec{F}_1 + \\vec{F}_2$ then $\\vec{M}_O = \\vec{r} \\times \\vec{R}$.",
    "hintAr": "بنظرية فارينون، عزم المحصلة يساوي مجموع العزوم، أو احسب المحصلة $\\vec{R} = \\vec{F}_1 + \\vec{F}_2$ أولاً.",
    "stepByStepSolutionEn": [
      "1. Find the resultant force vector:",
      "$$\\vec{R} = \\vec{F}_1 + \\vec{F}_2 = (2 + 1)\\hat{i} + (-1 + 4)\\hat{j} = 3\\hat{i} + 3\\hat{j}$$",
      "2. The position vector of the common application point $A$:",
      "$$\\vec{r} = (1, 2)$$",
      "3. Compute moment of resultant about origin:",
      "$$\\vec{M}_O = \\vec{r} \\times \\vec{R} = [(1)(3) - (2)(3)]\\hat{k} = (3 - 6)\\hat{k} = -3\\hat{k}$$"
    ],
    "stepByStepSolutionAr": [
      "١. إيجاد محصلة القوتين:",
      "$$\\vec{R} = \\vec{F}_1 + \\vec{F}_2 = 3\\hat{i} + 3\\hat{j}$$",
      "٢. متجه موضع نقطة التأثير المشتركة $A$:",
      "$$\\vec{r} = (1, 2)$$",
      "٣. عزم المحصلة حول نقطة الأصل:",
      "$$\\vec{M}_O = [(1)(3) - (2)(3)]\\hat{k} = -3\\hat{k}$$"
    ],
    "teacherTipEn": "Varignon's theorem allows summing the forces before taking the cross product, which is much faster.",
    "teacherTipAr": "تسمح نظرية فارينون بجمع القوى أولاً ثم إيجاد عزم المحصلة بضرب اتجاهي واحد."
  },
  {
    "id": "stat_ch2_se_07",
    "titleEn": "MoE Example 7: 3D Vector Moment About Origin",
    "titleAr": "مثال الوزارة ٧: عزم قوة في الفراغ ثلاثي الأبعاد حول نقطة الأصل",
    "difficulty": "medium",
    "questionEn": "A force $\\vec{F} = 2\\hat{i} - \\hat{j} + 3\\hat{k}$ acts at the point $A(1, 2, -1)$. Find the moment vector $\\vec{M}_O$ of the force about the origin.",
    "questionAr": "تؤثر القوة $\\vec{F} = 2\\hat{i} - \\hat{j} + 3\\hat{k}$ في النقطة $A(1, 2, -1)$. أوجد متجه عزم القوة $\\vec{M}_O$ حول نقطة الأصل.",
    "optionsEn": [
      "$5\\hat{i} - 5\\hat{j} - 5\\hat{k}$",
      "$5\\hat{i} + 5\\hat{j} - 5\\hat{k}$",
      "$-5\\hat{i} - 5\\hat{j} + 5\\hat{k}$",
      "$7\\hat{i} - \\hat{j} - 5\\hat{k}$"
    ],
    "optionsAr": [
      "$5\\hat{i} - 5\\hat{j} - 5\\hat{k}$",
      "$5\\hat{i} + 5\\hat{j} - 5\\hat{k}$",
      "$-5\\hat{i} - 5\\hat{j} + 5\\hat{k}$",
      "$7\\hat{i} - \\hat{j} - 5\\hat{k}$"
    ],
    "correctAnswer": "$5\\hat{i} - 5\\hat{j} - 5\\hat{k}$",
    "correctIndex": 0,
    "hintEn": "Expand the $3 \\times 3$ determinant: $\\vec{M}_O = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ 1 & 2 & -1 \\\\ 2 & -1 & 3 \\end{vmatrix}$.",
    "hintAr": "فك محدد الرتبة الثالثة: $\\vec{M}_O = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ 1 & 2 & -1 \\\\ 2 & -1 & 3 \\end{vmatrix}$.",
    "stepByStepSolutionEn": [
      "1. Set up the determinant:",
      "$$\\vec{M}_O = \\vec{r} \\times \\vec{F} = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ 1 & 2 & -1 \\\\ 2 & -1 & 3 \\end{vmatrix}$$",
      "2. Compute each component:",
      "$$\\hat{i} \\text{ component}: (2)(3) - (-1)(-1) = 6 - 1 = 5$$",
      "$$\\hat{j} \\text{ component}: -[(1)(3) - (-1)(2)] = -(3 + 2) = -5$$",
      "$$\\hat{k} \\text{ component}: (1)(-1) - (2)(2) = -1 - 4 = -5$$",
      "3. Resulting moment vector:",
      "$$\\vec{M}_O = 5\\hat{i} - 5\\hat{j} - 5\\hat{k}$$"
    ],
    "stepByStepSolutionAr": [
      "١. صياغة محدد الضرب الاتجاهي:",
      "$$\\vec{M}_O = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ 1 & 2 & -1 \\\\ 2 & -1 & 3 \\end{vmatrix}$$",
      "٢. حساب المركبات:",
      "مركبة $\\hat{i}$: $6 - 1 = 5$.",
      "مركبة $\\hat{j}$: $-(3 - (-2)) = -5$.",
      "مركبة $\\hat{k}$: $-1 - 4 = -5$.",
      "٣. متجه العزم: $\\vec{M}_O = 5\\hat{i} - 5\\hat{j} - 5\\hat{k}$."
    ],
    "teacherTipEn": "Careful with the middle sign: j component carries an intrinsic negative sign in determinant cofactor expansion.",
    "teacherTipAr": "انتبه لإشارة السالب المرافقة لمركبة متجه الوحدة ص (j) في فك المحدد."
  },
  {
    "id": "stat_ch2_se_08",
    "titleEn": "MoE Example 8: Moment Components About Coordinate Axes",
    "titleAr": "مثال الوزارة ٨: مركبات العزم حول محاور الإحداثيات",
    "difficulty": "medium",
    "questionEn": "For a force $\\vec{F} = 3\\hat{i} - 2\\hat{j} + 4\\hat{k}$ acting at $A(2, 1, 3)$, what is the algebraic measure of the moment about the $z$-axis ($M_z$)?",
    "questionAr": "لقوة $\\vec{F} = 3\\hat{i} - 2\\hat{j} + 4\\hat{k}$ تؤثر في النقطة $A(2, 1, 3)$، ما هو القياس الجبري لعزم القوة حول محور العينات ($M_z$)؟",
    "optionsEn": [
      "$-7$",
      "$7$",
      "$-10$",
      "$10$"
    ],
    "optionsAr": [
      "-7",
      "7",
      "-10",
      "10"
    ],
    "correctAnswer": "$-7$",
    "correctIndex": 0,
    "hintEn": "The moment component about the $z$-axis is $M_z = x F_y - y F_x$.",
    "hintAr": "مركبة العزم حول محور العينات هي $M_z = x F_y - y F_x$.",
    "stepByStepSolutionEn": [
      "1. Formula for moment about the $z$-axis:",
      "$$M_z = x F_y - y F_x$$",
      "2. Substitute $x = 2, y = 1, F_x = 3, F_y = -2$:",
      "$$M_z = (2)(-2) - (1)(3) = -4 - 3 = -7$$"
    ],
    "stepByStepSolutionAr": [
      "١. قانون مركبة العزم حول محور العينات:",
      "$$M_z = x F_y - y F_x$$",
      "٢. بالتعويض: $M_z = (2)(-2) - (1)(3) = -4 - 3 = -7$."
    ],
    "teacherTipEn": "M_x = y F_z - z F_y, M_y = z F_x - x F_z, M_z = x F_y - y F_x (cyclic permutation x -> y -> z).",
    "teacherTipAr": "مركبات العزم حول المحاور تتبع الترتيب الدوري: س -> ص -> ع."
  },
  {
    "id": "stat_ch2_se_09",
    "titleEn": "MoE Example 9: Perpendicular Distance from Origin in 3D",
    "titleAr": "مثال الوزارة ٩: طول العمود الساقط من نقطة الأصل في الفراغ",
    "difficulty": "hots",
    "questionEn": "A force $\\vec{F} = 2\\hat{i} + 3\\hat{j} + 6\\hat{k}$ acts at $A(1, 0, 0)$. Find the perpendicular distance $L$ from the origin $O$ to the line of action of $\\vec{F}$.",
    "questionAr": "تؤثر القوة $\\vec{F} = 2\\hat{i} + 3\\hat{j} + 6\\hat{k}$ في النقطة $A(1, 0, 0)$. أوجد طول العمود الساقط $L$ من نقطة الأصل $O$ على خط عمل القوة.",
    "optionsEn": [
      "$\\frac{3\\sqrt{5}}{7}\\text{ units}$",
      "$\\frac{7}{3\\sqrt{5}}\\text{ units}$",
      "$\\frac{45}{7}\\text{ units}$",
      "$1\\text{ unit}$"
    ],
    "optionsAr": [
      "\\frac{3\\sqrt{5}}{7}\\text{ وحدة طول}",
      "\\frac{7}{3\\sqrt{5}}\\text{ وحدة طول}",
      "\\frac{45}{7}\\text{ وحدة طول}",
      "1\\text{ وحدة طول}"
    ],
    "correctAnswer": "$\\frac{3\\sqrt{5}}{7}\\text{ units}$",
    "correctIndex": 0,
    "hintEn": "$L = \\frac{\\|\\vec{M}_O\\|}{\\|\\vec{F}\\|}$, where $\\vec{M}_O = \\vec{r} \\times \\vec{F}$.",
    "hintAr": "$L = \\frac{\\|\\vec{M}_O\\|}{\\|\\vec{F}\\|}$ حيث $\\vec{M}_O = \\vec{r} \\times \\vec{F}$.",
    "stepByStepSolutionEn": [
      "1. Position vector: $\\vec{r} = (1, 0, 0)$.",
      "2. Compute moment vector $\\vec{M}_O$:",
      "$$\\vec{M}_O = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ 1 & 0 & 0 \\\\ 2 & 3 & 6 \\end{vmatrix} = 0\\hat{i} - 6\\hat{j} + 3\\hat{k} = -6\\hat{j} + 3\\hat{k}$$",
      "3. Magnitude of moment: $\\|\\vec{M}_O\\| = \\sqrt{(-6)^2 + 3^2} = \\sqrt{36 + 9} = \\sqrt{45} = 3\\sqrt{5}$.",
      "4. Magnitude of force: $\\|\\vec{F}\\| = \\sqrt{2^2 + 3^2 + 6^2} = \\sqrt{4 + 9 + 36} = \\sqrt{49} = 7$.",
      "5. Perpendicular arm length:",
      "$$L = \\frac{\\|\\vec{M}_O\\|}{\\|\\vec{F}\\|} = \\frac{3\\sqrt{5}}{7}\\text{ units}$$"
    ],
    "stepByStepSolutionAr": [
      "١. متجه الموضع: $\\vec{r} = (1, 0, 0)$.",
      "٢. متجه العزم: $\\vec{M}_O = -6\\hat{j} + 3\\hat{k}$.",
      "٣. معيار العزم: $\\|\\vec{M}_O\\| = \\sqrt{36 + 9} = 3\\sqrt{5}$.",
      "٤. معيار القوة: $\\|\\vec{F}\\| = \\sqrt{4 + 9 + 36} = 7$.",
      "٥. طول العمود: $L = \\frac{3\\sqrt{5}}{7}\\text{ وحدة طول}$."
    ],
    "teacherTipEn": "Perpendicular arm in 3D uses the identical formula: L = ||M|| / ||F||.",
    "teacherTipAr": "طول العمود في الفراغ ثلاثي الأبعاد يحسب بنفس القانون: معيار العزم مقسوماً على معيار القوة."
  },
  {
    "id": "stat_ch2_se_10",
    "titleEn": "MoE Example 10: Force of Given Magnitude Directed Along a Vector AB",
    "titleAr": "مثال الوزارة ١٠: قوة معلومة المقدار تعمل في اتجاه متجه أ ب",
    "difficulty": "hots",
    "questionEn": "A force of magnitude $F = 15\\sqrt{2}\\text{ N}$ acts at point $A(1, 0, 2)$ directed along the vector $\\vec{AB}$, where $B(2, 1, 3)$. Find the vector force $\\vec{F}$.",
    "questionAr": "قوة مقدارها $15\\sqrt{2}\\text{ نيوتن}$ تؤثر في النقطة $A(1, 0, 2)$ وتعمل في اتجاه المتجه $\\vec{AB}$، حيث $B(2, 1, 3)$. أوجد متجه القوة $\\vec{F}$.",
    "optionsEn": [
      "$5\\sqrt{6}(\\hat{i} + \\hat{j} + \\hat{k})\\text{ N}$",
      "$15\\hat{i} + 15\\hat{j} + 15\\hat{k}\\text{ N}$",
      "$10(\\hat{i} + \\hat{j} + \\hat{k})\\text{ N}$",
      "$15\\sqrt{6}(\\hat{i} + \\hat{j} + \\hat{k})\\text{ N}$"
    ],
    "optionsAr": [
      "$5\\sqrt{6}(\\hat{i} + \\hat{j} + \\hat{k})\\text{ نيوتن}$",
      "$15\\hat{i} + 15\\hat{j} + 15\\hat{k}\\text{ نيوتن}$",
      "$10(\\hat{i} + \\hat{j} + \\hat{k})\\text{ نيوتن}$",
      "$15\\sqrt{6}(\\hat{i} + \\hat{j} + \\hat{k})\\text{ نيوتن}$"
    ],
    "correctAnswer": "$5\\sqrt{6}(\\hat{i} + \\hat{j} + \\hat{k})\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "Find unit vector $\\hat{u}_{AB} = \\frac{\\vec{AB}}{\\|\\vec{AB}\\|}$, then $\\vec{F} = F \\cdot \\hat{u}_{AB}$.",
    "hintAr": "أوجد متجه الوحدة في اتجاه أ ب: $\\hat{u} = \\frac{\\vec{AB}}{\\|\\vec{AB}\\|}$، ثم $\\vec{F} = F \\cdot \\hat{u}$.",
    "stepByStepSolutionEn": [
      "1. Vector $\\vec{AB} = B - A = (2 - 1, 1 - 0, 3 - 2) = (1, 1, 1)$.",
      "2. Magnitude of $\\vec{AB}$: $\\|\\vec{AB}\\| = \\sqrt{1^2 + 1^2 + 1^2} = \\sqrt{3}$.",
      "3. Unit vector in direction of line of action:",
      "$$\\hat{u}_{AB} = \\frac{1}{\\sqrt{3}}(1, 1, 1)$$",
      "4. Force vector $\\vec{F} = F \\cdot \\hat{u}_{AB}$:",
      "$$\\vec{F} = 15\\sqrt{2} \\cdot \\frac{1}{\\sqrt{3}}(\\hat{i} + \\hat{j} + \\hat{k}) = \\frac{15\\sqrt{6}}{3}(\\hat{i} + \\hat{j} + \\hat{k}) = 10\\sqrt{6}(\\hat{i} + \\hat{j} + \\hat{k})$$"
    ],
    "stepByStepSolutionAr": [
      "١. المتجه $\\vec{AB} = B - A = (1, 1, 1)$.",
      "٢. معيار المتجه: $\\|\\vec{AB}\\| = \\sqrt{3}$.",
      "٣. متجه الوحدة في اتجاه خط عمل القوة: $\\hat{u} = \\frac{1}{\\sqrt{3}}(1, 1, 1)$.",
      "٤. متجه القوة:",
      "$$\\vec{F} = 15\\sqrt{2} \\times \\frac{1}{\\sqrt{3}}(1, 1, 1) = \\frac{15\\sqrt{6}}{3}(1, 1, 1) = 10\\sqrt{6}(\\hat{i} + \\hat{j} + \\hat{k})\\text{ نيوتن}$$"
    ],
    "teacherTipEn": "Always multiply the scalar magnitude by the unit vector of the direction: F_vector = ||F|| * (AB / ||AB||).",
    "teacherTipAr": "تحويل القوة من مقدار قياسي إلى متجه يتطلب ضرب المقدار في متجه الوحدة للاتجاه."
  }
];

export const statCh2Exercises: SolvedProblem[] = [
  {
    "id": "stat_ch2_ex_01",
    "titleEn": "MoE Unit Exercise 1: Finding Unknown Component from Moment",
    "titleAr": "تمرين الوحدة ١: إيجاد مركبة مجهولة للقوة من قيمة العزم",
    "difficulty": "easy",
    "questionEn": "A force $\\vec{F} = m\\hat{i} + 4\\hat{j}$ acts at $A(2, 3)$. If its moment about the origin is $\\vec{M}_O = 2\\hat{k}$, find $m$.",
    "questionAr": "تؤثر القوة $\\vec{F} = m\\hat{i} + 4\\hat{j}$ في النقطة $A(2, 3)$. فإذا كان عزمها حول نقطة الأصل $\\vec{M}_O = 2\\hat{k}$، فأوجد قيمة $m$.",
    "optionsEn": [
      "$2$",
      "$-2$",
      "$4$",
      "$-4$"
    ],
    "optionsAr": [
      "2",
      "-2",
      "4",
      "-4"
    ],
    "correctAnswer": "$2$",
    "correctIndex": 0,
    "hintEn": "$M_O = (2)(4) - (3)(m) = 2$.",
    "hintAr": "$M_O = (2)(4) - (3)(m) = 2$.",
    "stepByStepSolutionEn": [
      "1. $M_O = (2)(4) - (3)(m) = 8 - 3m$.",
      "2. Given $M_O = 2$: $8 - 3m = 2 \\implies 3m = 6 \\implies m = 2$."
    ],
    "stepByStepSolutionAr": [
      "١. العزم حول نقطة الأصل: $8 - 3m = 2$.",
      "٢. إذن $3m = 6 \\implies m = 2$."
    ],
    "teacherTipEn": "Direct cross product component evaluation.",
    "teacherTipAr": "حساب مباشر لمركبة الضرب الاتجاهي."
  },
  {
    "id": "stat_ch2_ex_02",
    "titleEn": "MoE Unit Exercise 2: Perpendicular Distance in 2D",
    "titleAr": "تمرين الوحدة ٢: طول العمود الساقط في بعدين",
    "difficulty": "easy",
    "questionEn": "A force $\\vec{F} = 3\\hat{i} + 4\\hat{j}$ acts at $A(4, 0)$. Find the length of the perpendicular drawn from the origin to the line of action of $\\vec{F}$.",
    "questionAr": "تؤثر القوة $\\vec{F} = 3\\hat{i} + 4\\hat{j}$ في النقطة $A(4, 0)$. أوجد طول العمود الساقط من نقطة الأصل على خط عمل القوة.",
    "optionsEn": [
      "$3.2\\text{ units}$",
      "$4\\text{ units}$",
      "$5\\text{ units}$",
      "$1.6\\text{ units}$"
    ],
    "optionsAr": [
      "3.2 وحدة طول",
      "4 وحدات طول",
      "5 وحدات طول",
      "1.6 وحدة طول"
    ],
    "correctAnswer": "$3.2\\text{ units}$",
    "correctIndex": 0,
    "hintEn": "$\\|\\vec{M}_O\\| = |(4)(4) - (0)(3)| = 16$. Divide by $\\|\\vec{F}\\| = 5$.",
    "hintAr": "معيار العزم = ١٦، ومعيار القوة = ٥.",
    "stepByStepSolutionEn": [
      "1. $\\vec{M}_O = [(4)(4) - (0)(3)]\\hat{k} = 16\\hat{k} \\implies \\|\\vec{M}_O\\| = 16$.",
      "2. $\\|\\vec{F}\\| = \\sqrt{3^2 + 4^2} = 5$.",
      "3. $L = \\frac{16}{5} = 3.2\\text{ units}$."
    ],
    "stepByStepSolutionAr": [
      "١. معيار العزم: $\\|\\vec{M}_O\\| = 16$.",
      "٢. معيار القوة: $\\|\\vec{F}\\| = 5$.",
      "٣. طول العمود: $L = \\frac{16}{5} = 3.2\\text{ وحدة طول}$."
    ],
    "teacherTipEn": "L = ||M|| / ||F||.",
    "teacherTipAr": "طول العمود = معيار العزم / معيار القوة."
  },
  {
    "id": "stat_ch2_ex_03",
    "titleEn": "MoE Unit Exercise 3: Geometric Criterion for Passing Through Point",
    "titleAr": "تمرين الوحدة ٣: شرط مرور خط العمل بنقطة",
    "difficulty": "easy",
    "questionEn": "If the moment of a non-zero force $\\vec{F}$ about a point $A$ is zero ($\\vec{M}_A = \\vec{0}$), this implies that:",
    "questionAr": "إذا كان عزم قوة غير صفرية $\\vec{F}$ حول النقطة $A$ ينعدم ($\\vec{M}_A = \\vec{0}$)، فهذا يعني أن:",
    "optionsEn": [
      "The line of action of $\\vec{F}$ passes through point $A$.",
      "The line of action of $\\vec{F}$ is perpendicular to $A$.",
      "The magnitude of $\\vec{F}$ is zero.",
      "The line of action of $\\vec{F}$ is parallel to $A$."
    ],
    "optionsAr": [
      "خط عمل القوة يمر بالنقطة $A$.",
      "خط عمل القوة عمودي على النقطة $A$.",
      "معيار القوة يساوي صفراً.",
      "خط عمل القوة يوازي النقطة $A$."
    ],
    "correctAnswer": "The line of action of $\\vec{F}$ passes through point $A$.",
    "correctIndex": 0,
    "hintEn": "The moment of a force vanishes about any point lying on its line of action.",
    "hintAr": "ينعدم عزم القوة حول أي نقطة تقع على خط عملها مباشرة لأن ذراع العزم يساوي صفراً.",
    "stepByStepSolutionEn": [
      "Since $\\vec{M}_A = \\vec{r} \\times \\vec{F} = \\vec{0}$ and $\\vec{F} \\neq \\vec{0}$, either $\\vec{r} = \\vec{0}$ (point $A$ is on line of action) or $\\vec{r} \\parallel \\vec{F}$. In both cases, point $A$ lies on the line of action."
    ],
    "stepByStepSolutionAr": [
      "انعدام العزم حول نقطة لقوة غير صفرية يعني أن ذراع العزم منعدم، أي أن النقطة تقع تماماً على خط عمل القوة."
    ],
    "teacherTipEn": "M_A = 0 <=> Line of action passes through A.",
    "teacherTipAr": "انعدام العزم حول نقطة يكافئ مرور خط العمل بتلك النقطة."
  },
  {
    "id": "stat_ch2_ex_04",
    "titleEn": "MoE Unit Exercise 4: Scalar Moment with Given Arm and Angle",
    "titleAr": "تمرين الوحدة ٤: القياس الجبري للعزم بزاوية معلومة وذراع معلوم",
    "difficulty": "easy",
    "questionEn": "A force of magnitude $F = 50\\text{ N}$ acts at an angle of $30^\\circ$ to a rod of length $4\\text{ m}$ at its endpoint, causing counterclockwise rotation about the pivot. Find the algebraic measure of its moment.",
    "questionAr": "قوة مقدارها $50\\text{ نيوتن}$ تؤثر بزاوية $30^\\circ$ على قضيب طوله $4\\text{ أمتار}$ عند طرفه، وتسبب دوراناً ضد عقارب الساعة حول نقطة التعليق. ما القياس الجبري لعزمها؟",
    "optionsEn": [
      "$100\\text{ N}\\cdot\\text{m}$",
      "$-100\\text{ N}\\cdot\\text{m}$",
      "$200\\text{ N}\\cdot\\text{m}$",
      "$100\\sqrt{3}\\text{ N}\\cdot\\text{m}$"
    ],
    "optionsAr": [
      "100 نيوتن.متر",
      "-100 نيوتن.متر",
      "200 نيوتن.متر",
      "100\\sqrt{3} نيوتن.متر"
    ],
    "correctAnswer": "$100\\text{ N}\\cdot\\text{m}$",
    "correctIndex": 0,
    "hintEn": "$M = + F \\cdot L \\cdot \\sin\\theta$.",
    "hintAr": "$M = + F \\cdot L \\cdot \\sin\\theta$.",
    "stepByStepSolutionEn": [
      "1. Counterclockwise rotation is positive.",
      "2. $M = F \\cdot d = 50 \\times (4 \\sin 30^\\circ) = 50 \\times (4 \\times 0.5) = 50 \\times 2 = 100\\text{ N}\\cdot\\text{m}$."
    ],
    "stepByStepSolutionAr": [
      "١. الدوران ضد اتجاه عقارب الساعة موجب.",
      "٢. $M = 50 \\times (4 \\sin 30^\\circ) = 100\\text{ نيوتن.متر}$."
    ],
    "teacherTipEn": "Counterclockwise is positive, clockwise is negative.",
    "teacherTipAr": "عكس عقارب الساعة موجب، ومع عقارب الساعة سالب."
  },
  {
    "id": "stat_ch2_ex_05",
    "titleEn": "MoE Unit Exercise 5: 3D Force Moment About Z-Axis",
    "titleAr": "تمرين الوحدة ٥: عزم قوة فراغية حول محور العينات",
    "difficulty": "medium",
    "questionEn": "A force $\\vec{F} = 4\\hat{i} + 5\\hat{j} - 2\\hat{k}$ acts at $A(3, 2, 1)$. Find the moment of $\\vec{F}$ about the $z$-axis.",
    "questionAr": "تؤثر القوة $\\vec{F} = 4\\hat{i} + 5\\hat{j} - 2\\hat{k}$ في النقطة $A(3, 2, 1)$. أوجد عزم القوة حول محور العينات.",
    "optionsEn": [
      "$7$",
      "$-7$",
      "$23$",
      "$10$"
    ],
    "optionsAr": [
      "7",
      "-7",
      "23",
      "10"
    ],
    "correctAnswer": "$7$",
    "correctIndex": 0,
    "hintEn": "$M_z = x F_y - y F_x$.",
    "hintAr": "$M_z = x F_y - y F_x$.",
    "stepByStepSolutionEn": [
      "$$M_z = (3)(5) - (2)(4) = 15 - 8 = 7$$"
    ],
    "stepByStepSolutionAr": [
      "$$M_z = (3)(5) - (2)(4) = 15 - 8 = 7$$"
    ],
    "teacherTipEn": "M_z depends only on x, y, Fx, Fy.",
    "teacherTipAr": "مركبة العزم حول محور العينات تعتمد فقط على س و ص ومركبتي القوة الأفقيتين."
  },
  {
    "id": "stat_ch2_ex_06",
    "titleEn": "MoE Unit Exercise 6: 3D Force Moment About X-Axis",
    "titleAr": "تمرين الوحدة ٦: عزم قوة فراغية حول محور السينات",
    "difficulty": "medium",
    "questionEn": "A force $\\vec{F} = 4\\hat{i} + 5\\hat{j} - 2\\hat{k}$ acts at $A(3, 2, 1)$. Find the moment of $\\vec{F}$ about the $x$-axis.",
    "questionAr": "تؤثر القوة $\\vec{F} = 4\\hat{i} + 5\\hat{j} - 2\\hat{k}$ في النقطة $A(3, 2, 1)$. أوجد عزم القوة حول محور السينات.",
    "optionsEn": [
      "$-9$",
      "$9$",
      "$-1$",
      "$1$"
    ],
    "optionsAr": [
      "-9",
      "9",
      "-1",
      "1"
    ],
    "correctAnswer": "$-9$",
    "correctIndex": 0,
    "hintEn": "$M_x = y F_z - z F_y$.",
    "hintAr": "$M_x = y F_z - z F_y$.",
    "stepByStepSolutionEn": [
      "$$M_x = (2)(-2) - (1)(5) = -4 - 5 = -9$$"
    ],
    "stepByStepSolutionAr": [
      "$$M_x = (2)(-2) - (1)(5) = -4 - 5 = -9$$"
    ],
    "teacherTipEn": "M_x = y Fz - z Fy.",
    "teacherTipAr": "العزم حول محور السينات = ص ق_ع - ع ق_ص."
  },
  {
    "id": "stat_ch2_ex_07",
    "titleEn": "MoE Unit Exercise 7: 3D Force Moment About Y-Axis",
    "titleAr": "تمرين الوحدة ٧: عزم قوة فراغية حول محور الصادات",
    "difficulty": "medium",
    "questionEn": "A force $\\vec{F} = 4\\hat{i} + 5\\hat{j} - 2\\hat{k}$ acts at $A(3, 2, 1)$. Find the moment of $\\vec{F}$ about the $y$-axis.",
    "questionAr": "تؤثر القوة $\\vec{F} = 4\\hat{i} + 5\\hat{j} - 2\\hat{k}$ في النقطة $A(3, 2, 1)$. أوجد عزم القوة حول محور الصادات.",
    "optionsEn": [
      "$10$",
      "$-10$",
      "$2$",
      "$-2$"
    ],
    "optionsAr": [
      "10",
      "-10",
      "2",
      "-2"
    ],
    "correctAnswer": "$10$",
    "correctIndex": 0,
    "hintEn": "$M_y = z F_x - x F_z$.",
    "hintAr": "$M_y = z F_x - x F_z$.",
    "stepByStepSolutionEn": [
      "$$M_y = (1)(4) - (3)(-2) = 4 - (-6) = 4 + 6 = 10$$"
    ],
    "stepByStepSolutionAr": [
      "$$M_y = (1)(4) - (3)(-2) = 4 + 6 = 10$$"
    ],
    "teacherTipEn": "Notice the order: z Fx - x Fz.",
    "teacherTipAr": "لاحظ الترتيب الدوري: ع ق_س - س ق_ع."
  },
  {
    "id": "stat_ch2_ex_08",
    "titleEn": "MoE Unit Exercise 8: Condition for Line of Action to Intersect an Axis",
    "titleAr": "تمرين الوحدة ٨: شرط تقاطع خط العمل مع أحد المحاور",
    "difficulty": "hots",
    "questionEn": "If the line of action of a force $\\vec{F}$ intersects the $x$-axis, then the moment of $\\vec{F}$ about the $x$-axis must be:",
    "questionAr": "إذا كان خط عمل القوة $\\vec{F}$ يقطع محور السينات، فإن عزم القوة حول محور السينات يجب أن يكون مساوياً لـ:",
    "optionsEn": [
      "$0$",
      "$1$",
      "$\\infty$",
      "$\\|\\vec{F}\\|$"
    ],
    "optionsAr": [
      "0",
      "1",
      "\\infty",
      "\\|\\vec{F}\\|"
    ],
    "correctAnswer": "$0$",
    "correctIndex": 0,
    "hintEn": "If a line intersects an axis, the perpendicular distance from the axis to the line is zero, so the moment about that axis vanishes.",
    "hintAr": "إذا تقاطع خط عمل القوة مع محور، فإن ذراع العزم حول هذا المحور ينعدم فيكون العزم صفراً.",
    "stepByStepSolutionEn": [
      "1. A force has zero moment about an axis if its line of action is either parallel to or intersects that axis.",
      "2. Since the line of action intersects the $x$-axis, its moment about the $x$-axis is zero ($M_x = 0$)."
    ],
    "stepByStepSolutionAr": [
      "ينعدم عزم القوة حول محور إذا كان خط عملها يوازي هذا المحور أو يقطعه. وبما أنه يقطعه فإن $M_x = 0$."
    ],
    "teacherTipEn": "Moment about an axis is zero if the force intersects the axis OR is parallel to the axis.",
    "teacherTipAr": "ينعدم عزم القوة حول محور إذا قطعته القوة أو وازته."
  },
  {
    "id": "stat_ch2_ex_09",
    "titleEn": "MoE Unit Exercise 9: Couple Moment Property",
    "titleAr": "تمرين الوحدة ٩: خاصية عزم الازدواج",
    "difficulty": "easy",
    "questionEn": "Two parallel forces of equal magnitude $20\\text{ N}$ act in opposite directions with perpendicular distance $1.5\\text{ m}$ between them. Find the magnitude of their couple moment.",
    "questionAr": "قوتان متوازيتان ومتساويتان في المقدار ومقدارهما $20\\text{ نيوتن}$ تعملان في اتجاهين متضادين والبعد العمودي بينهما $1.5\\text{ متر}$. أوجد مقدار عزم الازدواج المتكون.",
    "optionsEn": [
      "$30\\text{ N}\\cdot\\text{m}$",
      "$15\\text{ N}\\cdot\\text{m}$",
      "$60\\text{ N}\\cdot\\text{m}$",
      "$20\\text{ N}\\cdot\\text{m}$"
    ],
    "optionsAr": [
      "30 نيوتن.متر",
      "15 نيوتن.متر",
      "60 نيوتن.متر",
      "20 نيوتن.متر"
    ],
    "correctAnswer": "$30\\text{ N}\\cdot\\text{m}$",
    "correctIndex": 0,
    "hintEn": "Couple moment magnitude: $M = F \\cdot d$.",
    "hintAr": "معيار عزم الازدواج: $M = F \\cdot d$.",
    "stepByStepSolutionEn": [
      "$$M = F \\cdot d = 20 \\times 1.5 = 30\\text{ N}\\cdot\\text{m}$$"
    ],
    "stepByStepSolutionAr": [
      "$$M = 20 \\times 1.5 = 30\\text{ نيوتن.متر}$$"
    ],
    "teacherTipEn": "The moment of a couple is invariant and independent of the choice of origin.",
    "teacherTipAr": "عزم الازدواج ثابت وقيمته لا تتغير باختلاف نقطة أخذ العزوم."
  },
  {
    "id": "stat_ch2_ex_10",
    "titleEn": "MoE Unit Exercise 10: Sum of Moments About Center of Square",
    "titleAr": "تمرين الوحدة ١٠: مجموع العزوم حول مركز مربع",
    "difficulty": "medium",
    "questionEn": "Forces of magnitudes $10, 20, 10, 20\\text{ N}$ act along the sides $AB, BC, CD, DA$ of a square of side $2\\text{ m}$ in cyclic order. Find the magnitude of their sum of moments about the center of the square.",
    "questionAr": "قوى مقاديرها $10, 20, 10, 20\\text{ نيوتن}$ تؤثر في الأضلاع $AB, BC, CD, DA$ لمربع طول ضلعه $2\\text{ متر}$ في اتجاه دوري واحد. أوجد مقدار مجموع عزوم القوى حول مركز المربع.",
    "optionsEn": [
      "$60\\text{ N}\\cdot\\text{m}$",
      "$30\\text{ N}\\cdot\\text{m}$",
      "$120\\text{ N}\\cdot\\text{m}$",
      "$0\\text{ N}\\cdot\\text{m}$"
    ],
    "optionsAr": [
      "60 نيوتن.متر",
      "30 نيوتن.متر",
      "120 نيوتن.متر",
      "0 نيوتن.متر"
    ],
    "correctAnswer": "$60\\text{ N}\\cdot\\text{m}$",
    "correctIndex": 0,
    "hintEn": "The distance from the center of the square to each side is $d = 2/2 = 1\\text{ m}$.",
    "hintAr": "البعد العمودي من مركز المربع لكل ضلع هو $d = 1\\text{ متر}$.",
    "stepByStepSolutionEn": [
      "1. Perpendicular arm to each side from center: $d = \\frac{2}{2} = 1\\text{ m}$.",
      "2. Since forces act in cyclic order, all rotate in the same direction:",
      "$$\\sum M = (10 + 20 + 10 + 20) \\times 1 = 60 \\times 1 = 60\\text{ N}\\cdot\\text{m}$$"
    ],
    "stepByStepSolutionAr": [
      "١. طول ذراع كل قوة من مركز المربع: $d = 1\\text{ متر}$.",
      "٢. القوى تدور في اتجاه دوري واحد:",
      "$$\\sum M = (10 + 20 + 10 + 20) \\times 1 = 60\\text{ نيوتن.متر}$$"
    ],
    "teacherTipEn": "In a regular polygon with cyclic forces, arm to centroid is constant for all sides.",
    "teacherTipAr": "في المضلع المنتظم ذي القوى الدورية، يتساوى بعد المركز الهندسي عن جميع الأضلاع."
  },
  {
    "id": "stat_ch2_ex_11",
    "titleEn": "MoE Unit Exercise 11: Moment Magnitude of 3D Force",
    "titleAr": "تمرين الوحدة ١١: معيار عزم قوة في الفراغ",
    "difficulty": "hots",
    "questionEn": "A force $\\vec{F} = \\hat{i} + \\hat{j} + \\hat{k}$ acts at $A(1, 2, 3)$. Find the magnitude of the moment vector $\\|\\vec{M}_O\\|$ about the origin.",
    "questionAr": "تؤثر القوة $\\vec{F} = \\hat{i} + \\hat{j} + \\hat{k}$ في النقطة $A(1, 2, 3)$. أوجد معيار متجه العزم $\\|\\vec{M}_O\\|$ حول نقطة الأصل.",
    "optionsEn": [
      "$\\sqrt{6}\\text{ units}$",
      "$\\sqrt{14}\\text{ units}$",
      "$3\\text{ units}$",
      "$\\sqrt{3}\\text{ units}$"
    ],
    "optionsAr": [
      "\\sqrt{6}\\text{ وحدة عزم}",
      "\\sqrt{14}\\text{ وحدة عزم}",
      "3\\text{ وحدات عزم}",
      "\\sqrt{3}\\text{ وحدة عزم}"
    ],
    "correctAnswer": "$\\sqrt{6}\\text{ units}$",
    "correctIndex": 0,
    "hintEn": "Compute $\\vec{M}_O = \\vec{r} \\times \\vec{F} = (-1, 2, -1)$, then find its magnitude.",
    "hintAr": "احسب $\\vec{M}_O = \\vec{r} \\times \\vec{F} = (-1, 2, -1)$ ثم أوجد معياره.",
    "stepByStepSolutionEn": [
      "1. $\\vec{M}_O = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ 1 & 2 & 3 \\\\ 1 & 1 & 1 \\end{vmatrix} = (2 - 3)\\hat{i} - (1 - 3)\\hat{j} + (1 - 2)\\hat{k} = -\\hat{i} + 2\\hat{j} - \\hat{k}$.",
      "2. $\\|\\vec{M}_O\\| = \\sqrt{(-1)^2 + 2^2 + (-1)^2} = \\sqrt{1 + 4 + 1} = \\sqrt{6}\\text{ units}$."
    ],
    "stepByStepSolutionAr": [
      "١. $\\vec{M}_O = -\\hat{i} + 2\\hat{j} - \\hat{k}$.",
      "٢. المعيار: $\\|\\vec{M}_O\\| = \\sqrt{1 + 4 + 1} = \\sqrt{6}$."
    ],
    "teacherTipEn": "Cross product of (1, 2, 3) and (1, 1, 1) is (-1, 2, -1).",
    "teacherTipAr": "حاصل الضرب الاتجاهي يعطي المتجه (-١، ٢، -١) ومعياره جذر ٦."
  },
  {
    "id": "stat_ch2_ex_12",
    "titleEn": "MoE Unit Exercise 12: Ratio of Moments Along Triangle",
    "titleAr": "تمرين الوحدة ١٢: نسبة العزوم على مثلث",
    "difficulty": "medium",
    "questionEn": "In a triangle $ABC$, a force acts in its plane. If $\\vec{M}_A = 20\\hat{k}$ and $\\vec{M}_B = -20\\hat{k}$, where does the line of action intersect $AB$?",
    "questionAr": "في المثلث $ABC$، تؤثر قوة في مستواه. فإذا كان $\\vec{M}_A = 20\\hat{k}$ و $\\vec{M}_B = -20\\hat{k}$، فأين يقطع خط عمل القوة القطعة $AB$؟",
    "optionsEn": [
      "At the midpoint of $AB$.",
      "At point $A$.",
      "At point $B$.",
      "It does not intersect $AB$."
    ],
    "optionsAr": [
      "في منتصف $AB$.",
      "في النقطة $A$.",
      "في النقطة $B$.",
      "لا يقطع $AB$."
    ],
    "correctAnswer": "At the midpoint of $AB$.",
    "correctIndex": 0,
    "hintEn": "$\\vec{M}_A = -\\vec{M}_B \\implies$ line of action bisects $AB$.",
    "hintAr": "$\\vec{M}_A = -\\vec{M}_B \\implies$ خط العمل ينصف $AB$.",
    "stepByStepSolutionEn": [
      "Since $\\vec{M}_A = -\\vec{M}_B$, the moment about the midpoint $D$ is $\\vec{M}_D = \\frac{\\vec{M}_A + \\vec{M}_B}{2} = \\vec{0}$. Hence the line of action passes through the midpoint of $AB$."
    ],
    "stepByStepSolutionAr": [
      "بما أن $\\vec{M}_A = -\\vec{M}_B$، فإن العزم ينعدم عند منتصف $AB$، مما يثبت أن خط العمل يمر بمنتصفها."
    ],
    "teacherTipEn": "Midpoint moment is always (M_A + M_B) / 2.",
    "teacherTipAr": "العزم عند المنتصف هو المتوسط الحسابي للعزمين دائماً."
  },
  {
    "id": "stat_ch2_ex_13",
    "titleEn": "MoE Unit Exercise 13: Force Magnitude from Moment and Distance",
    "titleAr": "تمرين الوحدة ١٣: مقدار القوة من العزم والبعد العمودي",
    "difficulty": "easy",
    "questionEn": "If the magnitude of the moment of a force about a point is $70\\text{ N}\\cdot\\text{m}$ and the perpendicular distance from the point to its line of action is $3.5\\text{ m}$, find the magnitude of the force.",
    "questionAr": "إذا كان معيار عزم قوة حول نقطة هو $70\\text{ نيوتن.متر}$ والبعد العمودي من تلك النقطة إلى خط عمل القوة هو $3.5\\text{ متر}$، فما هو مقدار القوة؟",
    "optionsEn": [
      "$20\\text{ N}$",
      "$245\\text{ N}$",
      "$10\\text{ N}$",
      "$35\\text{ N}$"
    ],
    "optionsAr": [
      "20 نيوتن",
      "245 نيوتن",
      "10 نيوتن",
      "35 نيوتن"
    ],
    "correctAnswer": "$20\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "$F = M / L$.",
    "hintAr": "$F = M / L$.",
    "stepByStepSolutionEn": [
      "$$F = \\frac{M}{L} = \\frac{70}{3.5} = 20\\text{ N}$$"
    ],
    "stepByStepSolutionAr": [
      "$$F = \\frac{70}{3.5} = 20\\text{ نيوتن}$$"
    ],
    "teacherTipEn": "F = M / L.",
    "teacherTipAr": "القوة = العزم / طول ذراع العزم."
  },
  {
    "id": "stat_ch2_ex_14",
    "titleEn": "MoE Unit Exercise 14: Parallel Force Component Vanishing",
    "titleAr": "تمرين الوحدة ١٤: انعدام العزم لقوة توازي محوراً",
    "difficulty": "medium",
    "questionEn": "A force $\\vec{F} = 5\\hat{k}$ is parallel to the $z$-axis and acts at $A(2, 3, 4)$. Find its moment about the $z$-axis.",
    "questionAr": "قوة $\\vec{F} = 5\\hat{k}$ توازي محور العينات وتؤثر في النقطة $A(2, 3, 4)$. أوجد عزمها حول محور العينات.",
    "optionsEn": [
      "$0$",
      "$10$",
      "$15$",
      "$20$"
    ],
    "optionsAr": [
      "0",
      "10",
      "15",
      "20"
    ],
    "correctAnswer": "$0$",
    "correctIndex": 0,
    "hintEn": "Any force parallel to an axis has zero moment about that axis.",
    "hintAr": "أي قوة توازي محوراً يكون عزمها حول ذلك المحور صفراً.",
    "stepByStepSolutionEn": [
      "1. By formula: $M_z = x F_y - y F_x$.",
      "2. Here $F_x = 0, F_y = 0 \\implies M_z = (2)(0) - (3)(0) = 0$."
    ],
    "stepByStepSolutionAr": [
      "١. بالقانون: $M_z = x F_y - y F_x$.",
      "٢. بما أن القوة في اتجاه ع فقط، فإن $F_x = 0$ و $F_y = 0 \\implies M_z = 0$."
    ],
    "teacherTipEn": "A force parallel to a line has 0 moment about that line.",
    "teacherTipAr": "عزم القوة حول أي خط يوازيها يساوي صفراً دائماً."
  },
  {
    "id": "stat_ch2_ex_15",
    "titleEn": "MoE Unit Exercise 15: Triangle Median Moment Sum",
    "titleAr": "تمرين الوحدة ١٥: مجموع العزوم عند رؤوس مثلث",
    "difficulty": "hots",
    "questionEn": "In a triangle $ABC$, the moments of a force $\\vec{F}$ in its plane about vertices $A, B, C$ satisfy $\\vec{M}_A + \\vec{M}_B + \\vec{M}_C = \\vec{0}$. What does this imply about the centroid $G$ of the triangle?",
    "questionAr": "في المثلث $ABC$، عزوم قوة $\\vec{F}$ في مستواه حول الرؤوس $A, B, C$ تحقق $\\vec{M}_A + \\vec{M}_B + \\vec{M}_C = \\vec{0}$. ماذا نستنتج بالنسبة لنقطة تلاقي المتوسطات $G$؟",
    "optionsEn": [
      "The line of action of $\\vec{F}$ passes through the centroid $G$.",
      "The force $\\vec{F}$ is zero.",
      "The centroid $G$ is the midpoint of $AB$.",
      "The force is perpendicular to $BC$."
    ],
    "optionsAr": [
      "خط عمل القوة يمر بنقطة تلاقي المتوسطات $G$.",
      "القوة $\\vec{F}$ تساوي صفراً.",
      "نقطة تلاقي المتوسطات هي منتصف $AB$.",
      "القوة عمودية على $BC$."
    ],
    "correctAnswer": "The line of action of $\\vec{F}$ passes through the centroid $G$.",
    "correctIndex": 0,
    "hintEn": "The moment about the centroid $G = \\frac{A+B+C}{3}$ is $\\vec{M}_G = \\frac{1}{3}(\\vec{M}_A + \\vec{M}_B + \\vec{M}_C) = \\vec{0}$.",
    "hintAr": "العزم حول نقطة تلاقي المتوسطات هو ثلث مجموع عزوم الرؤوس الثلاثة.",
    "stepByStepSolutionEn": [
      "1. Centroid coordinates: $G = \\frac{A + B + C}{3}$.",
      "2. The moment of any coplanar force system about the centroid is:",
      "$$\\vec{M}_G = \\frac{1}{3}(\\vec{M}_A + \\vec{M}_B + \\vec{M}_C)$$",
      "3. Given $\\vec{M}_A + \\vec{M}_B + \\vec{M}_C = \\vec{0}$, we have $\\vec{M}_G = \\vec{0}$.",
      "4. Therefore, the line of action of $\\vec{F}$ passes through the centroid $G$."
    ],
    "stepByStepSolutionAr": [
      "١. إحداثيات نقطة تلاقي المتوسطات: $G = \\frac{A + B + C}{3}$.",
      "٢. العزم حولها: $\\vec{M}_G = \\frac{1}{3}(\\vec{M}_A + \\vec{M}_B + \\vec{M}_C)$.",
      "٣. بما أن المجموع المعطى يساوي صفراً، فإن $\\vec{M}_G = \\vec{0}$.",
      "٤. إذن خط عمل القوة يمر بنقطة تلاقي متوسطات المثلث $G$."
    ],
    "teacherTipEn": "M_G = (M_A + M_B + M_C) / 3 for any triangle in the plane.",
    "teacherTipAr": "العزم حول نقطة تلاقي المتوسطات يساوي ثلث مجموع العزوم حول الرؤوس الثلاثة دائماً."
  }
];
