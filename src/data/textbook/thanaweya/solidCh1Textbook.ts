import type { SolvedProblem } from '../../../types/curriculum';

export const solidCh1SolvedExamples: SolvedProblem[] = [
  {
    "id": "solid_ch1_se_01",
    "titleEn": "Coordinates, Distances to Planes and Coordinate Axes",
    "titleAr": "إحداثيات نقطة وبعدها عن المستويات الإحداثية والمحاور",
    "difficulty": "easy",
    "questionEn": "For the point $A(3, -4, 12)$ in 3D rectangular coordinates, find:\n1. Its perpendicular distance to the $XY$-plane, $XZ$-plane, and $YZ$-plane.\n2. Its perpendicular distance to the $X$-axis, $Y$-axis, and $Z$-axis.",
    "questionAr": "بالنسبة للنقطة $A(٣، -٤، ١٢)$ في النظام الإحداثي المتعامد ثلاثي الأبعاد، أوجد:\n١. بعدها العمودي عن كل من المستويات: س ص، س ع، ص ع.\n٢. بعدها العمودي عن كل من محاور الإحداثيات: محور السينات، محور الصادات، محور العينات.",
    "optionsEn": [
      "Planes: (12, 4, 3); Axes: (4*sqrt(10), 3*sqrt(17), 5)",
      "Planes: (3, 4, 12); Axes: (5, 12, 13)",
      "Planes: (12, -4, 3); Axes: (160, 153, 25)",
      "Planes: (0, 0, 0); Axes: (3, 4, 12)"
    ],
    "optionsAr": [
      "المستويات: (١٢، ٤، ٣)؛ المحاور: (٤\\sqrt{١٠}، ٣\\sqrt{١٧}، ٥)",
      "المستويات: (٣، ٤، ١٢)؛ المحاور: (٥، ١٢، ١٣)",
      "المستويات: (١٢، -٤، ٣)؛ المحاور: (١٦٠، ١٥٣، ٢٥)",
      "المستويات: (٠، ٠، ٠)؛ المحاور: (٣، ٤، ١٢)"
    ],
    "correctAnswer": "Planes: (12, 4, 3); Axes: (4*sqrt(10), 3*sqrt(17), 5)",
    "correctIndex": 0,
    "hintEn": "Distance to plane is absolute value of the missing coordinate: dist to XY is |z|. Distance to axis is sqrt of sum of squares of other two coordinates.",
    "hintAr": "البعد عن المستوى هو القيمة المطلقة للإحداثي الغائب: البعد عن س ص هو |ع|. والبعد عن المحور هو جذر مجموع مربعي الإحداثيين الآخرين.",
    "stepByStepSolutionEn": [
      "1. Perpendicular distance to coordinate planes:",
      "- To the $XY$-plane: $d = |z| = |12| = 12$ length units.",
      "- To the $XZ$-plane: $d = |y| = |-4| = 4$ length units.",
      "- To the $YZ$-plane: $d = |x| = |3| = 3$ length units.",
      "2. Perpendicular distance to coordinate axes:",
      "- To the $X$-axis: $d_x = \\sqrt{y^2 + z^2} = \\sqrt{(-4)^2 + 12^2} = \\sqrt{16 + 144} = \\sqrt{160} = 4\\sqrt{10}$.",
      "- To the $Y$-axis: $d_y = \\sqrt{x^2 + z^2} = \\sqrt{3^2 + 12^2} = \\sqrt{9 + 144} = \\sqrt{153} = 3\\sqrt{17}$.",
      "- To the $Z$-axis: $d_z = \\sqrt{x^2 + y^2} = \\sqrt{3^2 + (-4)^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$ length units."
    ],
    "stepByStepSolutionAr": [
      "١. الأبعاد العمودية عن المستويات الإحداثية:",
      "- البعد عن المستوى س ص: $|ع| = |١٢| = ١٢$ وحدة طول.",
      "- البعد عن المستوى س ع: $|ص| = |-٤| = ٤$ وحدات طول.",
      "- البعد عن المستوى ص ع: $|س| = |٣| = ٣$ وحدات طول.",
      "٢. الأبعاد العمودية عن المحاور الإحداثية:",
      "- البعد عن محور السينات: $\\sqrt{ص^٢ + ع^٢} = \\sqrt{١٦ + ١٤٤} = \\sqrt{١٦٠} = ٤\\sqrt{١٠}$.",
      "- البعد عن محور الصادات: $\\sqrt{س^٢ + ع^٢} = \\sqrt{٩ + ١٤٤} = \\sqrt{١٥٣} = ٣\\sqrt{١٧}$.",
      "- البعد عن محور العينات: $\\sqrt{س^٢ + ص^٢} = \\sqrt{٩ + ١٦} = ٥$ وحدات طول."
    ],
    "teacherTipEn": "Distance is always positive. Remember: distance to plane uses absolute value, distance to axis uses the Pythagorean square root.",
    "teacherTipAr": "المسافة دائماً موجبة. البعد عن المستوى هو القيمة المطلقة للإحداثي الغائب، والبعد عن المحور هو نظرية فيثاغورس على الإحداثيين الآخرين."
  },
  {
    "id": "solid_ch1_se_02",
    "titleEn": "Distance Between Two Points & Unknown Parameter",
    "titleAr": "البعد بين نقطتين وإيجاد مجهول",
    "difficulty": "easy",
    "questionEn": "If the distance between $A(2, -1, 3)$ and $B(k, 3, 2)$ is $\\sqrt{26}$, find all possible values of $k$.",
    "questionAr": "إذا كان البعد بين النقطتين $A(٢، -١، ٣)$ و $B(k، ٣، ٢)$ يساوي $\\sqrt{٢٦}$، فأوجد جميع القيم الممكنة لـ $k$.",
    "optionsEn": [
      "k = 5 or k = -1",
      "k = 3 or k = -3",
      "k = 1 or k = -5",
      "k = 4 or k = 0"
    ],
    "optionsAr": [
      "k = ٥ أو k = -١",
      "k = ٣ أو k = -٣",
      "k = ١ أو k = -٥",
      "k = ٤ أو k = ٠"
    ],
    "correctAnswer": "k = 5 or k = -1",
    "correctIndex": 0,
    "hintEn": "Apply distance formula $AB^2 = (x_2 - x_1)^2 + (y_2 - y_1)^2 + (z_2 - z_1)^2 = 26$.",
    "hintAr": "طبق قانون مربع البعد: $AB^٢ = (x_٢ - x_١)^٢ + (y_٢ - y_١)^٢ + (z_٢ - z_١)^٢ = ٢٦$.",
    "stepByStepSolutionEn": [
      "Using the 3D distance formula:",
      "$$AB^2 = (k - 2)^2 + (3 - (-1))^2 + (2 - 3)^2 = 26$$",
      "$$(k - 2)^2 + 4^2 + (-1)^2 = 26$$",
      "$$(k - 2)^2 + 16 + 1 = 26$$",
      "$$(k - 2)^2 + 17 = 26 \\implies (k - 2)^2 = 9$$",
      "Taking square roots:",
      "$$k - 2 = \\pm 3$$",
      "- Case 1: $k - 2 = 3 \\implies k = 5$",
      "- Case 2: $k - 2 = -3 \\implies k = -1$"
    ],
    "stepByStepSolutionAr": [
      "باستخدام قانون البعد بين نقطتين في الفراغ:",
      "$$AB^٢ = (k - ٢)^٢ + (٣ - (-١))^٢ + (٢ - ٣)^٢ = ٢٦$$",
      "$$(k - ٢)^٢ + ١٦ + ١ = ٢٦$$",
      "$$(k - ٢)^٢ = ٢٦ - ١٧ = ٩$$",
      "بأخذ الجذر التربيعي للطرفين:",
      "$$k - ٢ = \\pm ٣$$",
      "إما $k = ٢ + ٣ = ٥$ أو $k = ٢ - ٣ = -١$."
    ],
    "teacherTipEn": "Always remember to take both positive and negative square roots $(\\pm 3)$.",
    "teacherTipAr": "تذكر دائماً أخذ كلا الجذرين الموجب والسالب عند حل $(k-a)^2 = c$."
  },
  {
    "id": "solid_ch1_se_03",
    "titleEn": "Standard and General Equations of a Sphere",
    "titleAr": "الصورة القياسية والعامة لمعادلة الكرة",
    "difficulty": "easy",
    "questionEn": "Find both the standard and general equations of the sphere with center $C(2, -3, 5)$ and radius $r = 7$.",
    "questionAr": "أوجد الصورتين القياسية والعامة لمعادلة الكرة التي مركزها $C(٢، -٣، ٥)$ ونصف قطرها $r = ٧$.",
    "optionsEn": [
      "Standard: (x-2)^2 + (y+3)^2 + (z-5)^2 = 49; General: x^2 + y^2 + z^2 - 4x + 6y - 10z - 11 = 0",
      "Standard: (x+2)^2 + (y-3)^2 + (z+5)^2 = 49; General: x^2 + y^2 + z^2 + 4x - 6y + 10z - 11 = 0",
      "Standard: (x-2)^2 + (y+3)^2 + (z-5)^2 = 7; General: x^2 + y^2 + z^2 - 4x + 6y - 10z + 38 = 0",
      "Standard: (x-2)^2 + (y-3)^2 + (z-5)^2 = 49; General: x^2 + y^2 + z^2 - 4x - 6y - 10z - 11 = 0"
    ],
    "optionsAr": [
      "القياسية: (x-٢)^٢ + (y+٣)^٢ + (z-٥)^٢ = ٤٩؛ العامة: x^٢ + y^٢ + z^٢ - ٤x + ٦y - ١٠z - ١١ = ٠",
      "القياسية: (x+٢)^٢ + (y-٣)^٢ + (z+٥)^٢ = ٤٩؛ العامة: x^٢ + y^٢ + z^٢ + ٤x - ٦y + ١٠z - ١١ = ٠",
      "القياسية: (x-٢)^٢ + (y+٣)^٢ + (z-٥)^٢ = ٧؛ العامة: x^٢ + y^٢ + z^٢ - ٤x + ٦y - ١٠z + ٣٨ = ٠",
      "القياسية: (x-٢)^٢ + (y-٣)^٢ + (z-٥)^٢ = ٤٩؛ العامة: x^٢ + y^٢ + z^٢ - ٤x - ٦y - ١٠z - ١١ = ٠"
    ],
    "correctAnswer": "Standard: (x-2)^2 + (y+3)^2 + (z-5)^2 = 49; General: x^2 + y^2 + z^2 - 4x + 6y - 10z - 11 = 0",
    "correctIndex": 0,
    "hintEn": "Standard: $(x-a)^2 + (y-b)^2 + (z-c)^2 = r^2$. Expand to get general form where $d = a^2 + b^2 + c^2 - r^2$.",
    "hintAr": "القياسية: $(x-a)^٢ + (y-b)^٢ + (z-c)^٢ = r^٢$. ثم فك الأقواس حيث $d = a^٢ + b^٢ + c^٢ - r^٢$.",
    "stepByStepSolutionEn": [
      "1. Standard (center-radius) equation:",
      "$$(x - 2)^2 + (y - (-3))^2 + (z - 5)^2 = 7^2$$",
      "$$(x - 2)^2 + (y + 3)^2 + (z - 5)^2 = 49$$",
      "2. General equation by expanding:",
      "$(x^2 - 4x + 4) + (y^2 + 6y + 9) + (z^2 - 10z + 25) = 49$",
      "$x^2 + y^2 + z^2 - 4x + 6y - 10z + (4 + 9 + 25 - 49) = 0$",
      "$$x^2 + y^2 + z^2 - 4x + 6y - 10z - 11 = 0$$"
    ],
    "stepByStepSolutionAr": [
      "١. الصورة القياسية بمعلومية المركز ونصف القطر:",
      "$$(x - ٢)^٢ + (y + ٣)^٢ + (z - ٥)^٢ = ٧^٢ = ٤٩$$",
      "٢. الصورة العامة بفك المربعات وتجميع الحدود:",
      "$$x^٢ - ٤x + ٤ + y^٢ + ٦y + ٩ + z^٢ - ١٠z + ٢٥ - ٤٩ = ٠$$",
      "$$x^٢ + y^٢ + z^٢ - ٤x + ٦y - ١٠z - ١١ = ٠$$"
    ],
    "teacherTipEn": "Notice that $d = 2^2 + (-3)^2 + 5^2 - 7^2 = 4 + 9 + 25 - 49 = -11$.",
    "teacherTipAr": "تأكد من الحد المطلق $d = أ^٢ + ب^٢ + جـ^٢ - نق^٢ = -١١$."
  },
  {
    "id": "solid_ch1_se_04",
    "titleEn": "Finding Center and Radius from General Form",
    "titleAr": "استخراج المركز ونصف القطر من الصورة العامة",
    "difficulty": "medium",
    "questionEn": "Find the center and radius of the sphere whose equation is:\n$$2x^2 + 2y^2 + 2z^2 - 8x + 12y - 4z - 10 = 0$$",
    "questionAr": "أوجد إحداثيات المركز ونصف القطر للكرة التي معادلتها:\n$$٢x^٢ + ٢y^٢ + ٢z^٢ - ٨x + ١٢y - ٤z - ١٠ = ٠$$",
    "optionsEn": [
      "Center (2, -3, 1), Radius r = sqrt(19)",
      "Center (-2, 3, -1), Radius r = sqrt(19)",
      "Center (4, -6, 2), Radius r = sqrt(56)",
      "Center (2, -3, 1), Radius r = 5"
    ],
    "optionsAr": [
      "المركز (٢، -٣، ١)، نصف القطر r = \\sqrt{١٩}",
      "المركز (-٢، ٣، -١)، نصف القطر r = \\sqrt{١٩}",
      "المركز (٤، -٦، ٢)، نصف القطر r = \\sqrt{٥٦}",
      "المركز (٢، -٣، ١)، نصف القطر r = ٥"
    ],
    "correctAnswer": "Center (2, -3, 1), Radius r = sqrt(19)",
    "correctIndex": 0,
    "hintEn": "First divide the entire equation by 2 so that coefficients of $x^2, y^2, z^2$ are 1.",
    "hintAr": "اقسم المعادلة أولاً على ٢ لتجعل معامِلات س^٢، ص^٢، ع^٢ مساوية للواحد الصحيح.",
    "stepByStepSolutionEn": [
      "Step 1: Divide the entire equation by 2:",
      "$$x^2 + y^2 + z^2 - 4x + 6y - 2z - 5 = 0$$",
      "Step 2: Find center $C(a, b, c)$ from coefficients:",
      "$a = -\\frac{\\text{coeff of } x}{2} = -\\frac{-4}{2} = 2$",
      "$b = -\\frac{\\text{coeff of } y}{2} = -\\frac{6}{2} = -3$",
      "$c = -\\frac{\\text{coeff of } z}{2} = -\\frac{-2}{2} = 1$",
      "Center is $C(2, -3, 1)$.",
      "Step 3: Calculate radius using $r = \\sqrt{a^2 + b^2 + c^2 - d}$ with $d = -5$:",
      "$$r = \\sqrt{2^2 + (-3)^2 + 1^2 - (-5)} = \\sqrt{4 + 9 + 1 + 5} = \\sqrt{19}$$"
    ],
    "stepByStepSolutionAr": [
      "الخطوة ١: قسمة جميع حدود المعادلة على ٢:",
      "$$x^٢ + y^٢ + z^٢ - ٤x + ٦y - ٢z - ٥ = ٠$$",
      "الخطوة ٢: استخراج المركز $C(a, b, c)$:",
      "$a = -\\frac{-٤}{٢} = ٢$، $b = -\\frac{٦}{٢} = -٣$، $c = -\\frac{-٢}{٢} = ١$.",
      "إذن المركز هو $C(٢، -٣، ١)$.",
      "الخطوة ٣: حساب نصف القطر $r = \\sqrt{a^٢ + b^٢ + c^٢ - d}$ حيث $d = -٥$:",
      "$$r = \\sqrt{٤ + ٩ + ١ - (-٥)} = \\sqrt{١٩}$$"
    ],
    "teacherTipEn": "Never forget to divide by the leading coefficient first before extracting center coordinates!",
    "teacherTipAr": "تحذير هام: لا تستخرج المركز قبل التأكد من أن معامِلات س^٢ و ص^٢ و ع^٢ تساوي ١."
  },
  {
    "id": "solid_ch1_se_05",
    "titleEn": "Sphere with Diameter Endpoints",
    "titleAr": "معادلة كرة نهايتا قطر فيها معلومتان",
    "difficulty": "medium",
    "questionEn": "Find the equation of the sphere having $AB$ as a diameter, where $A(3, 1, -4)$ and $B(-1, 5, 2)$.",
    "questionAr": "أوجد معادلة الكرة التي فيها القطعة المستقيمة $AB$ قطراً، حيث $A(٣، ١، -٤)$ و $B(-١، ٥، ٢)$.",
    "optionsEn": [
      "(x - 1)^2 + (y - 3)^2 + (z + 1)^2 = 17",
      "(x + 1)^2 + (y + 3)^2 + (z - 1)^2 = 17",
      "(x - 1)^2 + (y - 3)^2 + (z + 1)^2 = 68",
      "(x - 2)^2 + (y - 4)^2 + (z - 2)^2 = 17"
    ],
    "optionsAr": [
      "(x - ١)^٢ + (y - ٣)^٢ + (z + ١)^٢ = ١٧",
      "(x + ١)^٢ + (y + ٣)^٢ + (z - ١)^٢ = ١٧",
      "(x - ١)^٢ + (y - ٣)^٢ + (z + ١)^٢ = ٦٨",
      "(x - ٢)^٢ + (y - ٤)^٢ + (z - ٢)^٢ = ١٧"
    ],
    "correctAnswer": "(x - 1)^2 + (y - 3)^2 + (z + 1)^2 = 17",
    "correctIndex": 0,
    "hintEn": "Center is midpoint of AB; radius is half the length of AB.",
    "hintAr": "المركز هو نقطة منتصف AB، ونصف القطر يساوي نصف طول القطر AB.",
    "stepByStepSolutionEn": [
      "1. Find center $M$ as the midpoint of $AB$:",
      "$$M = \\left(\\frac{3 + (-1)}{2}, \\frac{1 + 5}{2}, \\frac{-4 + 2}{2}\\right) = (1, 3, -1)$$",
      "2. Find the diameter $AB$:",
      "$$AB = \\sqrt{(-1 - 3)^2 + (5 - 1)^2 + (2 - (-4))^2} = \\sqrt{(-4)^2 + 4^2 + 6^2} = \\sqrt{16 + 16 + 36} = \\sqrt{68} = 2\\sqrt{17}$$",
      "3. Radius $r = \\frac{AB}{2} = \\sqrt{17}$, so $r^2 = 17$.",
      "4. Standard equation:",
      "$$(x - 1)^2 + (y - 3)^2 + (z - (-1))^2 = 17 \\implies (x - 1)^2 + (y - 3)^2 + (z + 1)^2 = 17$$"
    ],
    "stepByStepSolutionAr": [
      "١. إحداثيات المركز $M$ هي منتصف $AB$:",
      "$$M = \\left(\\frac{٣ - ١}{٢}، \\frac{١ + ٥}{٢}، \\frac{-٤ + ٢}{٢}\\right) = (١، ٣، -١)$$",
      "٢. طول القطر $AB = \\sqrt{(-٤)^٢ + ٤^٢ + ٦^٢} = \\sqrt{٦٨} = ٢\\sqrt{١٧}$.",
      "٣. نصف القطر $r = \\sqrt{١٧}$ ومربعه $r^٢ = ١٧$.",
      "٤. معادلة الكرة القياسية:",
      "$$(x - ١)^٢ + (y - ٣)^٢ + (z + ١)^٢ = ١٧$$"
    ],
    "teacherTipEn": "Alternatively, test $(x - x_A)(x - x_B) + (y - y_A)(y - y_B) + (z - z_A)(z - z_B) = 0$.",
    "teacherTipAr": "يمكن استخدام الصورة المباشرة لقطر الكرة: $(x - x_١)(x - x_٢) + (y - y_١)(y - y_٢) + (z - z_١)(z - z_٢) = ٠$."
  },
  {
    "id": "solid_ch1_se_06",
    "titleEn": "Sphere Tangent to Coordinate Planes",
    "titleAr": "كرة تمس المستويات الإحداثية",
    "difficulty": "medium",
    "questionEn": "A sphere with center $C(3, -2, 4)$ touches the $XY$-plane. Find its equation and the point of tangency.",
    "questionAr": "كرة مركزها $C(٣، -٢، ٤)$ تمس المستوى الإحداثي س ص. أوجد معادلتها ونقطة التماس.",
    "optionsEn": [
      "Equation: (x-3)^2 + (y+2)^2 + (z-4)^2 = 16; Point: (3, -2, 0)",
      "Equation: (x-3)^2 + (y+2)^2 + (z-4)^2 = 9; Point: (0, -2, 4)",
      "Equation: (x-3)^2 + (y+2)^2 + (z-4)^2 = 4; Point: (3, 0, 4)",
      "Equation: (x+3)^2 + (y-2)^2 + (z+4)^2 = 16; Point: (3, -2, 0)"
    ],
    "optionsAr": [
      "المعادلة: (x-٣)^٢ + (y+٢)^٢ + (z-٤)^٢ = ١٦؛ نقطة التماس: (٣، -٢، ٠)",
      "المعادلة: (x-٣)^٢ + (y+٢)^٢ + (z-٤)^٢ = ٩؛ نقطة التماس: (٠، -٢، ٤)",
      "المعادلة: (x-٣)^٢ + (y+٢)^٢ + (z-٤)^٢ = ٤؛ نقطة التماس: (٣، ٠، ٤)",
      "المعادلة: (x+٣)^٢ + (y-٢)^٢ + (z+٤)^٢ = ١٦؛ نقطة التماس: (٣، -٢، ٠)"
    ],
    "correctAnswer": "Equation: (x-3)^2 + (y+2)^2 + (z-4)^2 = 16; Point: (3, -2, 0)",
    "correctIndex": 0,
    "hintEn": "Tangent to XY-plane means $r = |z_c| = |4| = 4$. The tangency point has z = 0.",
    "hintAr": "تمس المستوى س ص تعني أن $r = |ع| = ٤$، ونقطة التماس تكون عند $z = ٠$.",
    "stepByStepSolutionEn": [
      "When a sphere touches the $XY$-plane ($z = 0$):",
      "1. Radius equals the absolute value of the $z$-coordinate of the center:",
      "$$r = |c| = |4| = 4 \\implies r^2 = 16$$",
      "2. Point of tangency is the projection of the center onto the $XY$-plane, setting $z = 0$:",
      "$$P(3, -2, 0)$$",
      "3. Equation of the sphere:",
      "$$(x - 3)^2 + (y + 2)^2 + (z - 4)^2 = 16$$"
    ],
    "stepByStepSolutionAr": [
      "عندما تمس الكرة المستوى س ص ($z = ٠$):",
      "١. نصف القطر يساوي القيمة المطلقة للإحداثي العيني للمركز:",
      "$$r = |٤| = ٤ \\implies r^٢ = ١٦$$",
      "٢. نقطة التماس هي مسقط المركز على المستوى س ص (بوضع $z = ٠$): النقطة هي $(٣، -٢، ٠)$.",
      "٣. معادلة الكرة:",
      "$$(x - ٣)^٢ + (y + ٢)^٢ + (z - ٤)^٢ = ١٦$$"
    ],
    "teacherTipEn": "Tangent to XY-plane $\\implies r = |z|$, tangent to XZ-plane $\\implies r = |y|$, tangent to YZ-plane $\\implies r = |x|$.",
    "teacherTipAr": "تمس س ص $\\implies r = |ع|$، تمس س ع $\\implies r = |ص|$، تمس ص ع $\\implies r = |س|$."
  },
  {
    "id": "solid_ch1_se_07",
    "titleEn": "Vectors in Space, Magnitude, and Direction Cosines",
    "titleAr": "المتجهات في الفراغ والمعيار وجيوب تمام الاتجاه",
    "difficulty": "medium",
    "questionEn": "For vector $\\vec{A} = 2\\hat{i} - 3\\hat{j} + 6\\hat{k}$, find:\n1. The magnitude $\\|\\vec{A}\\|$. \n2. The unit vector in the direction of $\\vec{A}$. \n3. The direction cosines $\\cos\\alpha, \\cos\\beta, \\cos\\gamma$.",
    "questionAr": "بالنسبة للمتجه $\\vec{A} = ٢\\hat{i} - ٣\\hat{j} + ٦\\hat{k}$، أوجد:\n١. معيار المتجه $\\|\\vec{A}\\|$. \n٢. متجه الوحدة في اتجاه $\\vec{A}$. \n٣. جيوب تمام زوايا الاتجاه $\\cos\\alpha, \\cos\\beta, \\cos\\gamma$.",
    "optionsEn": [
      "Magnitude: 7; Unit vector: (2/7, -3/7, 6/7); Cosines: (2/7, -3/7, 6/7)",
      "Magnitude: 49; Unit vector: (2, -3, 6); Cosines: (2/49, -3/49, 6/49)",
      "Magnitude: 7; Unit vector: (2/7, 3/7, 6/7); Cosines: (2/7, 3/7, 6/7)",
      "Magnitude: 11; Unit vector: (2/11, -3/11, 6/11); Cosines: (2/11, -3/11, 6/11)"
    ],
    "optionsAr": [
      "المعيار: ٧؛ متجه الوحدة: (٢/٧، -٣/٧، ٦/٧)؛ جيوب التمام: (٢/٧، -٣/٧، ٦/٧)",
      "المعيار: ٤٩؛ متجه الوحدة: (٢، -٣، ٦)؛ جيوب التمام: (٢/٤٩، -٣/٤٩، ٦/٤٩)",
      "المعيار: ٧؛ متجه الوحدة: (٢/٧، ٣/٧، ٦/٧)؛ جيوب التمام: (٢/٧، ٣/٧، ٦/٧)",
      "المعيار: ١١؛ متجه الوحدة: (٢/١١، -٣/١١، ٦/١١)؛ جيوب التمام: (٢/١١، -٣/١١، ٦/١١)"
    ],
    "correctAnswer": "Magnitude: 7; Unit vector: (2/7, -3/7, 6/7); Cosines: (2/7, -3/7, 6/7)",
    "correctIndex": 0,
    "hintEn": "$\\|\\vec{A}\\| = \\sqrt{x^2 + y^2 + z^2}$, and unit vector $\\hat{u} = \\vec{A} / \\|\\vec{A}\\| = (\\cos\\alpha, \\cos\\beta, \\cos\\gamma)$.",
    "hintAr": "المعيار $\\|\\vec{A}\\| = \\sqrt{x^٢ + y^٢ + z^٢}$، ومتجه الوحدة هو نفسه ثلاثي جيوب تمام الاتجاه.",
    "stepByStepSolutionEn": [
      "1. Magnitude of $\\vec{A}$:",
      "$$\\|\\vec{A}\\| = \\sqrt{2^2 + (-3)^2 + 6^2} = \\sqrt{4 + 9 + 36} = \\sqrt{49} = 7$$",
      "2. Unit vector $\\hat{u}_A$:",
      "$$\\hat{u}_A = \\frac{\\vec{A}}{\\|\\vec{A}\\|} = \\frac{1}{7}(2, -3, 6) = \\left(\\frac{2}{7}, -\\frac{3}{7}, \\frac{6}{7}\\right)$$",
      "3. Direction cosines are the components of the unit vector:",
      "$$\\cos\\alpha = \\frac{2}{7}, \\quad \\cos\\beta = -\\frac{3}{7}, \\quad \\cos\\gamma = \\frac{6}{7}$$",
      "Verification: $\\cos^2\\alpha + \\cos^2\\beta + \\cos^2\\gamma = \\frac{4}{49} + \\frac{9}{49} + \\frac{36}{49} = \\frac{49}{49} = 1$."
    ],
    "stepByStepSolutionAr": [
      "١. معيار المتجه $\\vec{A}$:",
      "$$\\|\\vec{A}\\| = \\sqrt{٢^٢ + (-٣)^٢ + ٦^٢} = \\sqrt{٤ + ٩ + ٣٦} = \\sqrt{٤٩} = ٧$$",
      "٢. متجه الوحدة في اتجاه $\\vec{A}$:",
      "$$\\hat{u}_A = \\frac{\\vec{A}}{\\|\\vec{A}\\|} = \\left(\\frac{٢}{٧}، -\\frac{٣}{٧}، \\frac{٦}{٧}\\right)$$",
      "٣. جيوب تمام الاتجاه هي مركبات متجه الوحدة نفسه:",
      "$$\\cos\\alpha = \\frac{٢}{٧}، \\quad \\cos\\beta = -\\frac{٣}{٧}، \\quad \\cos\\gamma = \\frac{٦}{٧}$$",
      "التحقق: مجموع مربعاتها $= \\frac{٤ + ٩ + ٣٦}{٤٩} = ١$."
    ],
    "teacherTipEn": "The unit vector in the direction of any vector is IDENTICAL to its direction cosines tuple $(\\cos\\alpha, \\cos\\beta, \\cos\\gamma)$.",
    "teacherTipAr": "متجه الوحدة في اتجاه أي متجه هو نفسه تماماً ثلاثي جيوب تمام زوايا الاتجاه."
  },
  {
    "id": "solid_ch1_se_08",
    "titleEn": "Dot Product, Angle Between Vectors & Projection",
    "titleAr": "الضرب القياسي والزاوية بين متجهين والمسقط الجبري",
    "difficulty": "medium",
    "questionEn": "Given $\\vec{u} = (1, 2, -2)$ and $\\vec{v} = (2, -1, 2)$, find:\n1. The scalar (dot) product $\\vec{u} \\cdot \\vec{v}$. \n2. The angle $\\theta$ between $\\vec{u}$ and $\\vec{v}$. \n3. The scalar projection (component) of $\\vec{u}$ in the direction of $\\vec{v}$.",
    "questionAr": "إذا كان $\\vec{u} = (١، ٢، -٢)$ و $\\vec{v} = (٢، -١، ٢)$، فأوجد:\n١. حاصل الضرب القياسي $\\vec{u} \\cdot \\vec{v}$. \n٢. قياس الزاوية $\\theta$ بين المتجهين. \n٣. المسقط الجبري للمتجه $\\vec{u}$ في اتجاه $\\vec{v}$.",
    "optionsEn": [
      "Dot: -4; Angle: arccos(-4/9) approx 116.4 deg; Scalar projection: -4/3",
      "Dot: 4; Angle: arccos(4/9) approx 63.6 deg; Scalar projection: 4/3",
      "Dot: 0; Angle: 90 deg; Scalar projection: 0",
      "Dot: -4; Angle: 120 deg; Scalar projection: -4/9"
    ],
    "optionsAr": [
      "الضرب القياسي: -٤؛ الزاوية: arccos(-٤/٩) تقريباً ١١٦.٤ درجة؛ المسقط الجبري: -٤/٣",
      "الضرب القياسي: ٤؛ الزاوية: arccos(٤/٩) تقريباً ٦٣.٦ درجة؛ المسقط الجبري: ٤/٣",
      "الضرب القياسي: ٠؛ الزاوية: ٩٠ درجة؛ المسقط الجبري: ٠",
      "الضرب القياسي: -٤؛ الزاوية: ١٢٠ درجة؛ المسقط الجبري: -٤/٩"
    ],
    "correctAnswer": "Dot: -4; Angle: arccos(-4/9) approx 116.4 deg; Scalar projection: -4/3",
    "correctIndex": 0,
    "hintEn": "$\\vec{u} \\cdot \\vec{v} = u_x v_x + u_y v_y + u_z v_z$. Scalar component is $(\\vec{u} \\cdot \\vec{v}) / \\|\\vec{v}\\|$. Angle from $\\cos\\theta = (\\vec{u} \\cdot \\vec{v}) / (\\|\\vec{u}\\| \\|\\vec{v}\\|)$.",
    "hintAr": "الضرب القياسي: مجموع حواضل ضرب المركبات المتناظرة. المسقط الجبري: $\\frac{\\vec{u} \\cdot \\vec{v}}{\\|\\vec{v}\\|}$.",
    "stepByStepSolutionEn": [
      "1. Calculate scalar product:",
      "$$\\vec{u} \\cdot \\vec{v} = (1)(2) + (2)(-1) + (-2)(2) = 2 - 2 - 4 = -4$$",
      "2. Calculate magnitudes:",
      "$$\\|\\vec{u}\\| = \\sqrt{1^2 + 2^2 + (-2)^2} = \\sqrt{1 + 4 + 4} = \\sqrt{9} = 3$$",
      "$$\\|\\vec{v}\\| = \\sqrt{2^2 + (-1)^2 + 2^2} = \\sqrt{4 + 1 + 4} = \\sqrt{9} = 3$$",
      "3. Find angle $\\theta$:",
      "$$\\cos\\theta = \\frac{\\vec{u} \\cdot \\vec{v}}{\\|\\vec{u}\\| \\|\\vec{v}\\|} = \\frac{-4}{3 \\times 3} = -\\frac{4}{9}$$",
      "$$\\theta = \\arccos\\left(-\\frac{4}{9}\\right) \\approx 116.4^\\circ$$",
      "4. Scalar projection of $\\vec{u}$ on $\\vec{v}$:",
      "$$\\text{comp}_{\\vec{v}}(\\vec{u}) = \\frac{\\vec{u} \\cdot \\vec{v}}{\\|\\vec{v}\\|} = \\frac{-4}{3}$$"
    ],
    "stepByStepSolutionAr": [
      "١. الضرب القياسي:",
      "$$\\vec{u} \\cdot \\vec{v} = (١)(٢) + (٢)(-١) + (-٢)(٢) = ٢ - ٢ - ٤ = -٤$$",
      "٢. معيار كل متجه:",
      "$$\\|\\vec{u}\\| = \\sqrt{١ + ٤ + ٤} = ٣، \\quad \\|\\vec{v}\\| = \\sqrt{٤ + ١ + ٤} = ٣$$",
      "٣. قياس الزاوية بينهما:",
      "$$\\cos\\theta = \\frac{-٤}{٣ \\times ٣} = -\\frac{٤}{٩} \\implies \\theta \\approx ١١٦.٤^\\circ$$",
      "٤. المسقط الجبري لـ $\\vec{u}$ في اتجاه $\\vec{v}$:",
      "$$\\frac{\\vec{u} \\cdot \\vec{v}}{\\|\\vec{v}\\|} = \\frac{-٤}{٣}$$"
    ],
    "teacherTipEn": "Notice the difference: scalar projection is a number ($-4/3$), whereas vector projection has direction: $\\left(\\frac{\\vec{u} \\cdot \\vec{v}}{\\|\\vec{v}\\|^2}\\right)\\vec{v}$.",
    "teacherTipAr": "انتبه للفرق: المسقط الجبري عدد حقيقي ($-٤/٣$)، بينما المركبة الاتجاهية متجهة تضرب في متجه وحدة اتجاه $\\vec{v}$."
  },
  {
    "id": "solid_ch1_se_09",
    "titleEn": "Cross Product and Area of Parallelogram",
    "titleAr": "الضرب الاتجاهي ومساحة متوازي الأضلاع",
    "difficulty": "medium",
    "questionEn": "If $\\vec{A} = (3, -1, 2)$ and $\\vec{B} = (1, 2, -1)$, compute $\\vec{A} \\times \\vec{B}$ and the area of the parallelogram formed by $\\vec{A}$ and $\\vec{B}$.",
    "questionAr": "إذا كان $\\vec{A} = (٣، -١، ٢)$ و $\\vec{B} = (١، ٢، -١)$، فاحسب $\\vec{A} \\times \\vec{B}$ ومساحة متوازي الأضلاع الذي فيه $\\vec{A}$ و $\\vec{B}$ ضلعان متجاوران.",
    "optionsEn": [
      "Cross product: (-3, 5, 7); Area: sqrt(83)",
      "Cross product: (3, -5, -7); Area: sqrt(83)",
      "Cross product: (-3, -5, 7); Area: 83",
      "Cross product: (5, -3, 7); Area: sqrt(83)"
    ],
    "optionsAr": [
      "الضرب الاتجاهي: (-٣، ٥، ٧)؛ المساحة: \\sqrt{٨٣}",
      "الضرب الاتجاهي: (٣، -٥، -٧)؛ المساحة: \\sqrt{٨٣}",
      "الضرب الاتجاهي: (-٣، -٥، ٧)؛ المساحة: ٨٣",
      "الضرب الاتجاهي: (٥، -٣، ٧)؛ المساحة: \\sqrt{٨٣}"
    ],
    "correctAnswer": "Cross product: (-3, 5, 7); Area: sqrt(83)",
    "correctIndex": 0,
    "hintEn": "Set up 3x3 determinant with basis vectors i, j, k in row 1. Area is $\\|\\vec{A} \\times \\vec{B}\\|$.",
    "hintAr": "احسب المحدد الثلاثي مع متجهات الوحدة في الصف الأول. المساحة هي معيار متجه الضرب الاتجاهي.",
    "stepByStepSolutionEn": [
      "1. Vector cross product using determinant:",
      "$$\\vec{A} \\times \\vec{B} = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ 3 & -1 & 2 \\\\ 1 & 2 & -1 \\end{vmatrix}$$",
      "$$\\hat{i}\\begin{vmatrix} -1 & 2 \\\\ 2 & -1 \\end{vmatrix} - \\hat{j}\\begin{vmatrix} 3 & 2 \\\\ 1 & -1 \\end{vmatrix} + \\hat{k}\\begin{vmatrix} 3 & -1 \\\\ 1 & 2 \\end{vmatrix}$$",
      "$$= \\hat{i}(1 - 4) - \\hat{j}(-3 - 2) + \\hat{k}(6 - (-1))$$",
      "$$= -3\\hat{i} + 5\\hat{j} + 7\\hat{k} = (-3, 5, 7)$$",
      "2. Area of parallelogram equals the magnitude of the cross product:",
      "$$\\text{Area} = \\|\\vec{A} \\times \\vec{B}\\| = \\sqrt{(-3)^2 + 5^2 + 7^2} = \\sqrt{9 + 25 + 49} = \\sqrt{83} \\text{ square units}$$"
    ],
    "stepByStepSolutionAr": [
      "١. حساب حاصل الضرب الاتجاهي بالمحدد:",
      "$$\\vec{A} \\times \\vec{B} = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ ٣ & -١ & ٢ \\\\ ١ & ٢ & -١ \\end{vmatrix}$$",
      "$$= \\hat{i}(١ - ٤) - \\hat{j}(-٣ - ٢) + \\hat{k}(٦ + ١) = -٣\\hat{i} + ٥\\hat{j} + ٧\\hat{k} = (-٣، ٥، ٧)$$",
      "٢. مساحة متوازي الأضلاع تساوي معيار حاصل الضرب الاتجاهي:",
      "$$\\text{المساحة} = \\sqrt{(-٣)^٢ + ٥^٢ + ٧^٢} = \\sqrt{٩ + ٢٥ + ٤٩} = \\sqrt{٨٣} \\text{ وحدة مربعة}$$"
    ],
    "teacherTipEn": "Area of the triangle having $\\vec{A}$ and $\\vec{B}$ as adjacent sides is half of this: $\\frac{1}{2}\\sqrt{83}$.",
    "teacherTipAr": "مساحة المثلث الذي ضلعاه المتجاوران $\\vec{A}$ و $\\vec{B}$ تساوي نصف هذه القيمة: $\\frac{١}{٢}\\sqrt{٨٣}$."
  },
  {
    "id": "solid_ch1_se_10",
    "titleEn": "Scalar Triple Product and Volume of Parallelepiped",
    "titleAr": "الضرب القياسي الثلاثي وحجم متوازي السطوح",
    "difficulty": "hots",
    "questionEn": "Find the volume of the parallelepiped having coterminous edges $\\vec{A} = (1, 1, 0)$, $\\vec{B} = (0, 2, 1)$, and $\\vec{C} = (1, 0, 3)$.",
    "questionAr": "أوجد حجم متوازي السطوح الذي فيه ثلاثة أحرف متجاورة ملتقية في نقطة واحدة ممثلة بالمتجهات: $\\vec{A} = (١، ١، ٠)$ و $\\vec{B} = (٠، ٢، ١)$ و $\\vec{C} = (١، ٠، ٣)$.",
    "optionsEn": [
      "7 volume units",
      "5 volume units",
      "14 volume units",
      "21 volume units"
    ],
    "optionsAr": [
      "٧ وحدات حجوم",
      "٥ وحدات حجوم",
      "١٤ وحدة حجوم",
      "٢١ وحدة حجوم"
    ],
    "correctAnswer": "7 volume units",
    "correctIndex": 0,
    "hintEn": "Volume $= |\\vec{A} \\cdot (\\vec{B} \\times \\vec{C})| = |\\det[A, B, C]|$.",
    "hintAr": "الحجم = القيمة المطلقة لحاصل الضرب القياسي الثلاثي = القيمة المطلقة للمحدد المكون من المتجهات الثلاثة.",
    "stepByStepSolutionEn": [
      "Volume of parallelepiped is the absolute value of the scalar triple product:",
      "$$V = |\\vec{A} \\cdot (\\vec{B} \\times \\vec{C})| = \\left| \\begin{vmatrix} 1 & 1 & 0 \\\\ 0 & 2 & 1 \\\\ 1 & 0 & 3 \\end{vmatrix} \\right|$$",
      "Expand along row 1:",
      "$$\\det = 1(2 \\times 3 - 1 \\times 0) - 1(0 \\times 3 - 1 \\times 1) + 0$$",
      "$$= 1(6) - 1(-1) = 6 + 1 = 7$$",
      "$$V = |7| = 7 \\text{ cubic units}$$"
    ],
    "stepByStepSolutionAr": [
      "حجم متوازي السطوح هو القيمة المطلقة للضرب القياسي الثلاثي:",
      "$$V = |\\vec{A} \\cdot (\\vec{B} \\times \\vec{C})| = \\left| \\begin{vmatrix} ١ & ١ & ٠ \\\\ ٠ & ٢ & ١ \\\\ ١ & ٠ & ٣ \\end{vmatrix} \\right|$$",
      "بفك المحدد بعناصر الصف الأول:",
      "$$= ١(٦ - ٠) - ١(٠ - ١) + ٠ = ٦ + ١ = ٧$$",
      "الحجم $= |٧| = ٧$ وحدات مكعبة."
    ],
    "teacherTipEn": "If the determinant equals 0, the three vectors are coplanar (lie in the same plane) and form a flat shape with zero volume.",
    "teacherTipAr": "إذا كانت قيمة المحدد تساوي صفراً، فهذا يثبت أن المتجهات الثلاثة تقع في مستوى واحد (مستوية)."
  }
];

export const solidCh1Exercises: SolvedProblem[] = [
  {
    "id": "solid_ch1_ex_01",
    "titleEn": "Ratio Division of a Line Segment in Space",
    "titleAr": "تقسيم قطعة مستقيمة في الفراغ بنسبة معلومة",
    "difficulty": "easy",
    "questionEn": "Find the coordinates of point $C$ that divides the directed line segment from $A(1, -2, 3)$ to $B(4, 1, -3)$ internally in the ratio $2 : 1$.",
    "questionAr": "أوجد إحداثيات النقطة $C$ التي تقسم القطعة المستقيمة الموجهة من $A(١، -٢، ٣)$ إلى $B(٤، ١، -٣)$ من الداخل بنسبة $٢ : ١$.",
    "optionsEn": [
      "(3, 0, -1)",
      "(2, -1, 0)",
      "(3, 1, -1)",
      "(5/2, -1/2, 0)"
    ],
    "optionsAr": [
      "(٣، ٠، -١)",
      "(٢، -١، ٠)",
      "(٣، ١، -١)",
      "(٥/٢، -١/٢، ٠)"
    ],
    "correctAnswer": "(3, 0, -1)",
    "correctIndex": 0,
    "hintEn": "Use section formula: $C = \\frac{m_1 A + m_2 B}{m_1 + m_2}$ with $m_1 = 1, m_2 = 2$.",
    "hintAr": "استخدم قانون التقسيم: $C = \\frac{m_١ A + m_٢ B}{m_١ + m_٢}$ حيث النسبة $٢ : ١$.",
    "stepByStepSolutionEn": [
      "Here $m_2 = 2$ and $m_1 = 1$:",
      "$$x = \\frac{1(1) + 2(4)}{1 + 2} = \\frac{1 + 8}{3} = \\frac{9}{3} = 3$$",
      "$$y = \\frac{1(-2) + 2(1)}{1 + 2} = \\frac{-2 + 2}{3} = 0$$",
      "$$z = \\frac{1(3) + 2(-3)}{1 + 2} = \\frac{3 - 6}{3} = \\frac{-3}{3} = -1$$",
      "Coordinates of $C$ are $(3, 0, -1)$."
    ],
    "stepByStepSolutionAr": [
      "التقسيم من الداخل بنسبة $m_٢ : m_١ = ٢ : ١$:",
      "$$x = \\frac{١(١) + ٢(٤)}{٣} = ٣$$",
      "$$y = \\frac{١(-٢) + ٢(١)}{٣} = ٠$$",
      "$$z = \\frac{١(٣) + ٢(-٣)}{٣} = -١$$",
      "النقطة هي $(٣، ٠، -١)$."
    ],
    "teacherTipEn": "Internal division uses addition (+) in numerator and denominator. External division uses subtraction (-).",
    "teacherTipAr": "التقسيم من الداخل نستخدم فيه الجمع (+)، بينما التقسيم من الخارج نستخدم فيه الطرح (-)."
  },
  {
    "id": "solid_ch1_ex_02",
    "titleEn": "External Division of Segment",
    "titleAr": "التقسيم من الخارج لقطعة مستقيمة",
    "difficulty": "medium",
    "questionEn": "Point $C$ divides the segment from $A(2, 3, 1)$ to $B(4, 5, 2)$ externally in the ratio $3 : 1$. Find the coordinates of $C$.",
    "questionAr": "النقطة $C$ تقسم القطعة من $A(٢، ٣، ١)$ إلى $B(٤، ٥، ٢)$ من الخارج بنسبة $٣ : ١$. أوجد إحداثيات النقطة $C$.",
    "optionsEn": [
      "(5, 6, 2.5)",
      "(5, 6, 5/2)",
      "(1, 1, 0.5)",
      "(6, 7, 3)"
    ],
    "optionsAr": [
      "(٥، ٦، ٢.٥)",
      "(٥، ٦، ٥/٢)",
      "(١، ١، ٠.٥)",
      "(٦، ٧، ٣)"
    ],
    "correctAnswer": "(5, 6, 2.5)",
    "correctIndex": 0,
    "hintEn": "Section formula with weights -1 and 3: $C = \\frac{-1 A + 3 B}{3 - 1}$.",
    "hintAr": "التقسيم من الخارج: نضع إشارة سالبة لإحدى النسبتين: $C = \\frac{-A + ٣B}{٢}$.",
    "stepByStepSolutionEn": [
      "$$x = \\frac{-1(2) + 3(4)}{3 - 1} = \\frac{-2 + 12}{2} = 5$$",
      "$$y = \\frac{-1(3) + 3(5)}{3 - 1} = \\frac{-3 + 15}{2} = 6$$",
      "$$z = \\frac{-1(1) + 3(2)}{3 - 1} = \\frac{-1 + 6}{2} = 2.5 = \\frac{5}{2}$$",
      "Point $C$ is $(5, 6, 2.5)$."
    ],
    "stepByStepSolutionAr": [
      "$$x = \\frac{-٢ + ١٢}{٢} = ٥$$",
      "$$y = \\frac{-٣ + ١٥}{٢} = ٦$$",
      "$$z = \\frac{-١ + ٦}{٢} = ٢.٥$$",
      "إحداثيات النقطة $C(٥، ٦، ٢.٥)$."
    ],
    "teacherTipEn": "Always check that the point lies outside the segment $AB$ on the side of $B$ when ratio from $A$ is larger.",
    "teacherTipAr": "النقطة تقع خارج القطعة من جهة B لأن نسبتها من A أكبر."
  },
  {
    "id": "solid_ch1_ex_03",
    "titleEn": "Sphere Touching the Three Coordinate Planes",
    "titleAr": "كرة تمس مستويات الإحداثيات الثلاثة",
    "difficulty": "medium",
    "questionEn": "A sphere located entirely in the first octant touches all three coordinate planes ($XY, XZ, YZ$) and has radius $r = 5$. What is its equation?",
    "questionAr": "كرة تقع بأكملها في الثمن الأول وتمس مستويات الإحداثيات الثلاثة (س ص، س ع، ص ع) ونصف قطرها $r = ٥$. ما هي معادلتها؟",
    "optionsEn": [
      "(x - 5)^2 + (y - 5)^2 + (z - 5)^2 = 25",
      "(x + 5)^2 + (y + 5)^2 + (z + 5)^2 = 25",
      "x^2 + y^2 + z^2 = 25",
      "(x - 5)^2 + (y - 5)^2 + (z - 5)^2 = 5"
    ],
    "optionsAr": [
      "(x - ٥)^٢ + (y - ٥)^٢ + (z - ٥)^٢ = ٢٥",
      "(x + ٥)^٢ + (y + ٥)^٢ + (z + ٥)^٢ = ٢٥",
      "x^٢ + y^٢ + z^٢ = ٢٥",
      "(x - ٥)^٢ + (y - ٥)^٢ + (z - ٥)^٢ = ٥"
    ],
    "correctAnswer": "(x - 5)^2 + (y - 5)^2 + (z - 5)^2 = 25",
    "correctIndex": 0,
    "hintEn": "When a sphere in the 1st octant touches all 3 planes, center is $(r, r, r) = (5, 5, 5)$.",
    "hintAr": "عندما تمس الكرة المستويات الثلاثة في الثمن الأول، يكون مركزها $(r, r, r) = (٥، ٥، ٥)$.",
    "stepByStepSolutionEn": [
      "Since it touches the $XY, XZ, YZ$ planes and lies in the first octant ($x > 0, y > 0, z > 0$):",
      "Center is $C(r, r, r) = (5, 5, 5)$.",
      "Equation: $(x - 5)^2 + (y - 5)^2 + (z - 5)^2 = 5^2 = 25$."
    ],
    "stepByStepSolutionAr": [
      "بما أن الكرة تمس المستويات الثلاثة وتقع في الثمن الأول الموجب:",
      "المركز هو $C(٥، ٥، ٥)$ ونصف القطر $r = ٥$.",
      "المعادلة: $(x - ٥)^٢ + (y - ٥)^٢ + (z - ٥)^٢ = ٢٥$."
    ],
    "teacherTipEn": "There are 8 such spheres of radius 5 touching all 3 planes, one in each of the 8 octants: $(\\pm 5, \\pm 5, \\pm 5)$.",
    "teacherTipAr": "يوجد ٨ كرات تمس المستويات الإحداثية الثلاثة، واحدة في كل ثمن فراغي: $(\\pm ٥، \\pm ٥، \\pm ٥)$."
  },
  {
    "id": "solid_ch1_ex_04",
    "titleEn": "Sphere Touching the Three Coordinate Axes",
    "titleAr": "كرة تمس محاور الإحداثيات الثلاثة",
    "difficulty": "hots",
    "questionEn": "If a sphere centered at $C(a, a, a)$ with $a > 0$ touches all three coordinate axes, what is the relation between its radius $r$ and $a$?",
    "questionAr": "إذا كانت كرة مركزها $C(a, a, a)$ حيث $a > ٠$ تمس محاور الإحداثيات الثلاثة، فما العلاقة بين نصف قطرها $r$ والعدد $a$؟",
    "optionsEn": [
      "r = a*sqrt(2)",
      "r = a",
      "r = a*sqrt(3)",
      "r = 2a"
    ],
    "optionsAr": [
      "r = a\\sqrt{٢}",
      "r = a",
      "r = a\\sqrt{٣}",
      "r = ٢a"
    ],
    "correctAnswer": "r = a*sqrt(2)",
    "correctIndex": 0,
    "hintEn": "Distance from $(a, b, c)$ to the $X$-axis is $\\sqrt{b^2 + c^2}$.",
    "hintAr": "البعد عن محور السينات هو $\\sqrt{ص^٢ + ع^٢} = \\sqrt{a^٢ + a^٢}$.",
    "stepByStepSolutionEn": [
      "The perpendicular distance from center $(a, a, a)$ to the $X$-axis is:",
      "$$d = \\sqrt{a^2 + a^2} = \\sqrt{2a^2} = a\\sqrt{2}$$",
      "Since the sphere touches the axis, this distance must equal the radius:",
      "$$r = a\\sqrt{2}$$"
    ],
    "stepByStepSolutionAr": [
      "البعد العمودي للمركز عن محور السينات:",
      "$$d = \\sqrt{a^٢ + a^٢} = a\\sqrt{٢}$$",
      "بما أن الكرة تمس المحور، فإن هذا البعد يساوي نصف القطر تماماً:",
      "$$r = a\\sqrt{٢}$$"
    ],
    "teacherTipEn": "Notice the difference: touching planes gives $r = a$, touching axes gives $r = a\\sqrt{2}$.",
    "teacherTipAr": "انتبه للفرق: مس المستويات الإحداثية يعطي $r = a$، بينما مس المحاور الإحداثية يعطي $r = a\\sqrt{٢}$."
  },
  {
    "id": "solid_ch1_ex_05",
    "titleEn": "Intersection of Sphere and Plane",
    "titleAr": "تقاطع كرة مع مستوى",
    "difficulty": "hots",
    "questionEn": "Find the radius of the circular cross-section formed by the intersection of the sphere $x^2 + y^2 + z^2 = 25$ with the plane $z = 3$.",
    "questionAr": "أوجد نصف قطر المقطع الدائري الناتج من تقاطع الكرة $x^٢ + y^٢ + z^٢ = ٢٥$ مع المستوى $z = ٣$.",
    "optionsEn": [
      "4",
      "3",
      "5",
      "\\sqrt{34}"
    ],
    "optionsAr": [
      "٤",
      "٣",
      "٥",
      "\\sqrt{٣٤}"
    ],
    "correctAnswer": "4",
    "correctIndex": 0,
    "hintEn": "Substitute $z = 3$ into the sphere equation: $x^2 + y^2 + 3^2 = 25$.",
    "hintAr": "عوض عن $z = ٣$ في معادلة الكرة: $x^٢ + y^٢ + ٩ = ٢٥$.",
    "stepByStepSolutionEn": [
      "Substitute $z = 3$ directly into the equation of the sphere:",
      "$$x^2 + y^2 + 3^2 = 25$$",
      "$$x^2 + y^2 + 9 = 25 \\implies x^2 + y^2 = 16 = 4^2$$",
      "This is the equation of a circle of radius $r_{\\text{circle}} = 4$ in the plane $z = 3$.",
      "Alternatively, using Pythagorean theorem: $r_{\\text{circle}} = \\sqrt{R^2 - d^2} = \\sqrt{25 - 3^2} = \\sqrt{16} = 4$."
    ],
    "stepByStepSolutionAr": [
      "بالتعويض عن $z = ٣$ في معادلة الكرة:",
      "$$x^٢ + y^٢ + ٩ = ٢٥ \\implies x^٢ + y^٢ = ١٦$$",
      "هذه معادلة دائرة نصف قطرها $r = ٤$ في المستوى $z = ٣$.",
      "أو بفيثاغورس: $r = \\sqrt{R^٢ - d^٢} = \\sqrt{٢٥ - ٩} = ٤$."
    ],
    "teacherTipEn": "The cross-section of any sphere intersected by a plane at distance $d < R$ is always a circle of radius $\\sqrt{R^2 - d^2}$.",
    "teacherTipAr": "مقطع أي كرة بمستوى على بعد $d < R$ هو دائماً دائرة نصف قطرها $\\sqrt{R^٢ - d^٢}$."
  },
  {
    "id": "solid_ch1_ex_06",
    "titleEn": "Position of Two Spheres (External Tangency)",
    "titleAr": "الوضع النسبي لكرتين (التماس من الخارج)",
    "difficulty": "medium",
    "questionEn": "Sphere $S_1$ has center $C_1(1, 2, -1)$ and radius $r_1 = 3$. Sphere $S_2$ has center $C_2(4, 6, -1)$ and touches $S_1$ externally. What is the radius $r_2$?",
    "questionAr": "الكرة الأولى مركزها $C_١(١، ٢، -١)$ ونصف قطرها $r_١ = ٣$. والكرة الثانية مركزها $C_٢(٤، ٦، -١)$ وتمس الأولى من الخارج. ما هو نصف قطرها $r_٢$؟",
    "optionsEn": [
      "2",
      "5",
      "8",
      "3"
    ],
    "optionsAr": [
      "٢",
      "٥",
      "٨",
      "٣"
    ],
    "correctAnswer": "2",
    "correctIndex": 0,
    "hintEn": "For external tangency, distance between centers equals the sum of radii: $C_1 C_2 = r_1 + r_2$.",
    "hintAr": "في حالة التماس من الخارج: البعد بين المركزين يساوي مجموع نصفي القطرين $C_١ C_٢ = r_١ + r_٢$.",
    "stepByStepSolutionEn": [
      "Calculate the distance between centers $C_1$ and $C_2$:",
      "$$C_1 C_2 = \\sqrt{(4 - 1)^2 + (6 - 2)^2 + (-1 - (-1))^2} = \\sqrt{3^2 + 4^2 + 0} = \\sqrt{9 + 16} = 5$$",
      "For externally touching spheres:",
      "$$C_1 C_2 = r_1 + r_2 \\implies 5 = 3 + r_2 \\implies r_2 = 2$$"
    ],
    "stepByStepSolutionAr": [
      "نحسب البعد بين المركزين $C_١ C_٢$:",
      "$$C_١ C_٢ = \\sqrt{(٤ - ١)^٢ + (٦ - ٢)^٢ + ٠} = \\sqrt{٩ + ١٦} = ٥$$",
      "شرط التماس من الخارج: $C_١ C_٢ = r_١ + r_٢$:",
      "$$٥ = ٣ + r_٢ \\implies r_٢ = ٢$$"
    ],
    "teacherTipEn": "External tangency: $d = r_1 + r_2$. Internal tangency: $d = |r_1 - r_2|$. Intersecting: $|r_1 - r_2| < d < r_1 + r_2$.",
    "teacherTipAr": "التماس من الخارج: $d = r_١ + r_٢$. التماس من الداخل: $d = |r_١ - r_٢$."
  },
  {
    "id": "solid_ch1_ex_07",
    "titleEn": "Fundamental Identity for Direction Sines",
    "titleAr": "المتطابقة الأساسية لجيوب زوايا الاتجاه",
    "difficulty": "easy",
    "questionEn": "If $\\alpha, \\beta, \\gamma$ are the direction angles of any non-zero vector in 3D space, find $\\sin^2\\alpha + \\sin^2\\beta + \\sin^2\\gamma$.",
    "questionAr": "إذا كانت $\\alpha, \\beta, \\gamma$ هي قياسات زوايا الاتجاه لأي متجه في الفراغ، فما قيمة المقدار: $\\sin^٢\\alpha + \\sin^٢\\beta + \\sin^٢\\gamma$؟",
    "optionsEn": [
      "2",
      "1",
      "3",
      "0"
    ],
    "optionsAr": [
      "٢",
      "١",
      "٣",
      "٠"
    ],
    "correctAnswer": "2",
    "correctIndex": 0,
    "hintEn": "Substitute $\\sin^2\\theta = 1 - \\cos^2\\theta$ into the fundamental direction cosine identity.",
    "hintAr": "عوض عن $\\sin^٢\\theta = ١ - \\cos^٢\\theta$ واستخدم $\\cos^٢\\alpha + \\cos^٢\\beta + \\cos^٢\\gamma = ١$.",
    "stepByStepSolutionEn": [
      "We know that $\\cos^2\\alpha + \\cos^2\\beta + \\cos^2\\gamma = 1$.",
      "Using $\\sin^2\\theta = 1 - \\cos^2\\theta$:",
      "$$\\sin^2\\alpha + \\sin^2\\beta + \\sin^2\\gamma = (1 - \\cos^2\\alpha) + (1 - \\cos^2\\beta) + (1 - \\cos^2\\gamma)$$",
      "$$= 3 - (\\cos^2\\alpha + \\cos^2\\beta + \\cos^2\\gamma) = 3 - 1 = 2$$"
    ],
    "stepByStepSolutionAr": [
      "نعلم أن $\\cos^٢\\alpha + \\cos^٢\\beta + \\cos^٢\\gamma = ١$.",
      "باستبدال كل جيب بـ $(١ - \\cos^٢)$:",
      "$$٣ - (\\cos^٢\\alpha + \\cos^٢\\beta + \\cos^٢\\gamma) = ٣ - ١ = ٢$$"
    ],
    "teacherTipEn": "Remember this pair of identities: $\\sum \\cos^2\\theta = 1$ while $\\sum \\sin^2\\theta = 2$.",
    "teacherTipAr": "احفظ هذا الزوج الشهير: مجموع مربعات جيوب التمام = ١، بينما مجموع مربعات الجيوب = ٢."
  },
  {
    "id": "solid_ch1_ex_08",
    "titleEn": "Finding the Missing Direction Angle",
    "titleAr": "إيجاد زاوية الاتجاه المجهولة",
    "difficulty": "medium",
    "questionEn": "If the direction angles of a vector are $45^\\circ, 60^\\circ, \\gamma$, where $\\gamma$ is acute, find the measure of $\\gamma$.",
    "questionAr": "إذا كانت زوايا الاتجاه لمتجه هي $٤٥^\\circ$ و $٦٠^\\circ$ و $\\gamma$ حيث $\\gamma$ زاوية حادة، فأوجد قياس $\\gamma$.",
    "optionsEn": [
      "60^\\circ",
      "45^\\circ",
      "30^\\circ",
      "75^\\circ"
    ],
    "optionsAr": [
      "٦٠^\\circ",
      "٤٥^\\circ",
      "٣٠^\\circ",
      "٧٥^\\circ"
    ],
    "correctAnswer": "60^\\circ",
    "correctIndex": 0,
    "hintEn": "$\\cos^2 45^\\circ + \\cos^2 60^\\circ + \\cos^2\\gamma = 1$.",
    "hintAr": "$\\cos^٢ ٤٥^\\circ + \\cos^٢ ٦٠^\\circ + \\cos^٢\\gamma = ١$.",
    "stepByStepSolutionEn": [
      "$$\\cos^2 45^\\circ + \\cos^2 60^\\circ + \\cos^2\\gamma = 1$$",
      "$$\\left(\\frac{1}{\\sqrt{2}}\\right)^2 + \\left(\\frac{1}{2}\\right)^2 + \\cos^2\\gamma = 1$$",
      "$$\\frac{1}{2} + \\frac{1}{4} + \\cos^2\\gamma = 1 \\implies \\frac{3}{4} + \\cos^2\\gamma = 1$$",
      "$$\\cos^2\\gamma = 1 - \\frac{3}{4} = \\frac{1}{4}$$",
      "Since $\\gamma$ is acute: $\\cos\\gamma = +\\frac{1}{2} \\implies \\gamma = 60^\\circ$."
    ],
    "stepByStepSolutionAr": [
      "$$\\cos^٢ ٤٥^\\circ + \\cos^٢ ٦٠^\\circ + \\cos^٢\\gamma = ١$$",
      "$$\\frac{١}{٢} + \\frac{١}{٤} + \\cos^٢\\gamma = ١ \\implies \\cos^٢\\gamma = \\frac{١}{٤}$$",
      "بما أن $\\gamma$ زاوية حادة: $\\cos\\gamma = \\frac{١}{٢} \\implies \\gamma = ٦٠^\\circ$."
    ],
    "teacherTipEn": "If $\\gamma$ were obtuse, $\\cos\\gamma = -1/2 \\implies \\gamma = 120^\\circ$.",
    "teacherTipAr": "لو كانت الزاوية منفرجة لكانت $\\cos\\gamma = -١/٢ \\implies \\gamma = ١٢٠^\\circ$."
  },
  {
    "id": "solid_ch1_ex_09",
    "titleEn": "Orthogonality Condition for Vectors",
    "titleAr": "شرط تعامد متجهين في الفراغ",
    "difficulty": "easy",
    "questionEn": "If $\\vec{A} = (m, -2, 4)$ and $\\vec{B} = (3, m, 1)$ are perpendicular, find the value of $m$.",
    "questionAr": "إذا كان المتجهان $\\vec{A} = (m، -٢، ٤)$ و $\\vec{B} = (٣، m، ١)$ متعامدين، فأوجد قيمة $m$.",
    "optionsEn": [
      "-4",
      "4",
      "2",
      "-2"
    ],
    "optionsAr": [
      "-٤",
      "٤",
      "٢",
      "-٢"
    ],
    "correctAnswer": "-4",
    "correctIndex": 0,
    "hintEn": "Perpendicular vectors have zero dot product: $\\vec{A} \\cdot \\vec{B} = 0$.",
    "hintAr": "المتجهان المتعامدان حاصل ضربهما القياسي يساوي صفراً: $\\vec{A} \\cdot \\vec{B} = ٠$.",
    "stepByStepSolutionEn": [
      "$$\\vec{A} \\cdot \\vec{B} = 0$$",
      "$$(m)(3) + (-2)(m) + (4)(1) = 0$$",
      "$$3m - 2m + 4 = 0$$",
      "$$m + 4 = 0 \\implies m = -4$$"
    ],
    "stepByStepSolutionAr": [
      "شرط التعامد هو $\\vec{A} \\cdot \\vec{B} = ٠$:",
      "$$٣m - ٢m + ٤ = ٠ \\implies m + ٤ = ٠ \\implies m = -٤$$"
    ],
    "teacherTipEn": "Two non-zero vectors are perpendicular if and only if their scalar product is zero.",
    "teacherTipAr": "يتعامد متجهان غير صفريين إذا وفقط إذا كان حاصل ضربهما القياسي مساوياً للصفر."
  },
  {
    "id": "solid_ch1_ex_10",
    "titleEn": "Parallelism Condition for Vectors",
    "titleAr": "شرط توازي متجهين في الفراغ",
    "difficulty": "easy",
    "questionEn": "If $\\vec{A} = (2, -3, k)$ is parallel to $\\vec{B} = (6, m, 12)$, find the values of $m$ and $k$.",
    "questionAr": "إذا كان المتجه $\\vec{A} = (٢، -٣، k)$ يوازي المتجه $\\vec{B} = (٦، m، ١٢)$، فأوجد قيمتي $m$ و $k$.",
    "optionsEn": [
      "m = -9, k = 4",
      "m = 9, k = 4",
      "m = -9, k = -4",
      "m = -6, k = 3"
    ],
    "optionsAr": [
      "m = -٩، k = ٤",
      "m = ٩، k = ٤",
      "m = -٩، k = -٤",
      "m = -٦، k = ٣"
    ],
    "correctAnswer": "m = -9, k = 4",
    "correctIndex": 0,
    "hintEn": "For parallel vectors, corresponding components are proportional: $\\frac{2}{6} = \\frac{-3}{m} = \\frac{k}{12}$.",
    "hintAr": "شرط التوازي: تناسب المركبات المتناظرة $\\frac{٢}{٦} = \\frac{-٣}{m} = \\frac{k}{١٢}$.",
    "stepByStepSolutionEn": [
      "$$\\frac{2}{6} = \\frac{-3}{m} = \\frac{k}{12} = \\frac{1}{3}$$",
      "$$\\frac{-3}{m} = \\frac{1}{3} \\implies m = -9$$",
      "$$\\frac{k}{12} = \\frac{1}{3} \\implies k = \\frac{12}{3} = 4$$"
    ],
    "stepByStepSolutionAr": [
      "تناسب المركبات المتناظرة:",
      "$$\\frac{٢}{٦} = \\frac{-٣}{m} = \\frac{k}{١٢} = \\frac{١}{٣}$$",
      "$$m = -٣ \\times ٣ = -٩$$",
      "$$k = \\frac{١٢}{٣} = ٤$$"
    ],
    "teacherTipEn": "Parallel vectors have proportional direction ratios.",
    "teacherTipAr": "المتجهات المتوازية نسب اتجاهها متناسبة."
  },
  {
    "id": "solid_ch1_ex_11",
    "titleEn": "Unit Vector Perpendicular to Two Given Vectors",
    "titleAr": "متجه وحدة عمودي على متجهين معلومين",
    "difficulty": "medium",
    "questionEn": "Find a unit vector perpendicular to both $\\vec{A} = (1, 0, 1)$ and $\\vec{B} = (0, 1, 1)$.",
    "questionAr": "أوجد متجه وحدة عمودياً على كلا المتجهين $\\vec{A} = (١، ٠، ١)$ و $\\vec{B} = (٠، ١، ١)$.",
    "optionsEn": [
      "\\pm\\frac{1}{\\sqrt{3}}(-1, -1, 1)",
      "\\pm\\frac{1}{\\sqrt{2}}(1, 1, 0)",
      "\\pm(1, 1, -1)",
      "\\pm\\frac{1}{3}(-1, -1, 1)"
    ],
    "optionsAr": [
      "\\pm\\frac{١}{\\sqrt{٣}}(-١، -١، ١)",
      "\\pm\\frac{١}{\\sqrt{٢}}(١، ١، ٠)",
      "\\pm(١، ١، -١)",
      "\\pm\\frac{١}{٣}(-١، -١، ١)"
    ],
    "correctAnswer": "\\pm\\frac{1}{\\sqrt{3}}(-1, -1, 1)",
    "correctIndex": 0,
    "hintEn": "The cross product $\\vec{A} \\times \\vec{B}$ is perpendicular to both vectors. Divide by its magnitude.",
    "hintAr": "حاصل الضرب الاتجاهي $\\vec{A} \\times \\vec{B}$ عمودي عليهما معاً، ثم اقسم على معياره للحصول على متجه الوحدة.",
    "stepByStepSolutionEn": [
      "Compute the cross product:",
      "$$\\vec{A} \\times \\vec{B} = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ 1 & 0 & 1 \\\\ 0 & 1 & 1 \\end{vmatrix} = \\hat{i}(0 - 1) - \\hat{j}(1 - 0) + \\hat{k}(1 - 0) = (-1, -1, 1)$$",
      "Magnitude: $\\|\\vec{A} \\times \\vec{B}\\| = \\sqrt{(-1)^2 + (-1)^2 + 1^2} = \\sqrt{3}$.",
      "Unit vector is $\\hat{n} = \\pm \\frac{(-1, -1, 1)}{\\sqrt{3}}$."
    ],
    "stepByStepSolutionAr": [
      "نحسب الضرب الاتجاهي بالمحدد:",
      "$$\\vec{A} \\times \\vec{B} = (-١، -١، ١)$$",
      "معياره $= \\sqrt{١ + ١ + ١} = \\sqrt{٣}$.",
      "متجه الوحدة العمودي: $\\pm \\frac{١}{\\sqrt{٣}}(-١، -١، ١)$."
    ],
    "teacherTipEn": "Always include $\\pm$ because both directions along the normal line are valid unit vectors.",
    "teacherTipAr": "دائماً ضع إشارة $\\pm$ لأن العمودي على المستوى له اتجاهان متعاكسان كلاهما صحيح."
  },
  {
    "id": "solid_ch1_ex_12",
    "titleEn": "Area of Triangle Using Cross Product",
    "titleAr": "مساحة مثلث في الفراغ باستخدام الضرب الاتجاهي",
    "difficulty": "medium",
    "questionEn": "Find the area of triangle $ABC$ with vertices $A(1, 1, 1)$, $B(2, 3, 4)$, and $C(3, 0, -1)$.",
    "questionAr": "أوجد مساحة المثلث $ABC$ الذي رؤوسه $A(١، ١، ١)$ و $B(٢، ٣، ٤)$ و $C(٣، ٠، -١)$.",
    "optionsEn": [
      "\\frac{3\\sqrt{10}}{2}",
      "3\\sqrt{10}",
      "90",
      "\\sqrt{90}"
    ],
    "optionsAr": [
      "\\frac{٣\\sqrt{١٠}}{٢}",
      "٣\\sqrt{١٠}",
      "٩٠",
      "\\sqrt{٩٠}"
    ],
    "correctAnswer": "\\frac{3\\sqrt{10}}{2}",
    "correctIndex": 0,
    "hintEn": "Area of $\\triangle ABC = \\frac{1}{2} \\|\\vec{AB} \\times \\vec{AC}\\|$. Compute $\\vec{AB} = B - A$ and $\\vec{AC} = C - A$.",
    "hintAr": "المساحة $= \\frac{١}{٢}\\|\\vec{AB} \\times \\vec{AC}\\|$. أوجد المتجهين بطرح النقطتين من A.",
    "stepByStepSolutionEn": [
      "$$\\vec{AB} = (2-1, 3-1, 4-1) = (1, 2, 3)$$",
      "$$\\vec{AC} = (3-1, 0-1, -1-1) = (2, -1, -2)$$",
      "$$\\vec{AB} \\times \\vec{AC} = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ 1 & 2 & 3 \\\\ 2 & -1 & -2 \\end{vmatrix} = (-1, 8, -5)$$",
      "$$\\|\\vec{AB} \\times \\vec{AC}\\| = \\sqrt{(-1)^2 + 8^2 + (-5)^2} = \\sqrt{1 + 64 + 25} = \\sqrt{90} = 3\\sqrt{10}$$",
      "$$\\text{Area} = \\frac{1}{2}\\|\\vec{AB} \\times \\vec{AC}\\| = \\frac{3\\sqrt{10}}{2}$$"
    ],
    "stepByStepSolutionAr": [
      "$$\\vec{AB} = (١، ٢، ٣) \\quad \\text{و} \\quad \\vec{AC} = (٢، -١، -٢)$$",
      "$$\\vec{AB} \\times \\vec{AC} = (-١، ٨، -٥)$$",
      "معيار حاصل الضرب $= \\sqrt{١ + ٦٤ + ٢٥} = \\sqrt{٩٠} = ٣\\sqrt{١٠}$.",
      "المساحة $= \\frac{١}{٢} \\times ٣\\sqrt{١٠} = \\frac{٣\\sqrt{١٠}}{٢}$."
    ],
    "teacherTipEn": "Area of any triangle in 3D is half the magnitude of the cross product of two adjacent side vectors.",
    "teacherTipAr": "مساحة أي مثلث في الفراغ تساوي نصف معيار حاصل الضرب الاتجاهي لمتجهي ضلعين متجاورين."
  },
  {
    "id": "solid_ch1_ex_13",
    "titleEn": "Volume of Triangular Pyramid (Tetrahedron)",
    "titleAr": "حجم هرم ثلاثي (رباعي السطوح)",
    "difficulty": "hots",
    "questionEn": "What is the volume of a tetrahedron having three concurrent edges $\\vec{u}, \\vec{v}, \\vec{w}$ if the volume of the parallelepiped spanned by them is 48?",
    "questionAr": "ما هو حجم الهرم الثلاثي الذي أحرفه الثلاثة الملتقية في نقطة واحدة هي $\\vec{u}, \\vec{v}, \\vec{w}$ إذا كان حجم متوازي السطوح المتولد بها يساوي ٤٨؟",
    "optionsEn": [
      "8",
      "24",
      "16",
      "12"
    ],
    "optionsAr": [
      "٨",
      "٢٤",
      "١٦",
      "١٢"
    ],
    "correctAnswer": "8",
    "correctIndex": 0,
    "hintEn": "Volume of tetrahedron is $\\frac{1}{6}$ of the volume of the parallelepiped.",
    "hintAr": "حجم الهرم الثلاثي يساوي سدس (١/٦) حجم متوازي السطوح.",
    "stepByStepSolutionEn": [
      "The volume of a tetrahedron (triangular pyramid) is given by:",
      "$$V_{\\text{tetrahedron}} = \\frac{1}{6} |\\vec{u} \\cdot (\\vec{v} \\times \\vec{w})|$$",
      "Since the volume of the parallelepiped is $|\\vec{u} \\cdot (\\vec{v} \\times \\vec{w})| = 48$:",
      "$$V_{\\text{tetrahedron}} = \\frac{1}{6} \\times 48 = 8 \\text{ volume units}$$"
    ],
    "stepByStepSolutionAr": [
      "حجم الهرم الثلاثي (رباعي السطوح) = $\\frac{١}{٦}$ حجم متوازي السطوح:",
      "$$V = \\frac{١}{٦} \\times ٤٨ = ٨ \\text{ وحدات حجوم}$$"
    ],
    "teacherTipEn": "Volume of parallelepiped $= |\\vec{A} \\cdot (\\vec{B} \\times \\vec{C})|$; Volume of triangular pyramid $= \\frac{1}{6}|\\vec{A} \\cdot (\\vec{B} \\times \\vec{C})|$.",
    "teacherTipAr": "حجم متوازي السطوح $= |\\text{الضرب الثلاثي}|$، بينما حجم الهرم الثلاثي $= \\frac{١}{٦}|\\text{الضرب الثلاثي}|$."
  },
  {
    "id": "solid_ch1_ex_14",
    "titleEn": "Coplanar Vectors Test",
    "titleAr": "شرط وقوع ثلاثة متجهات في مستوى واحد",
    "difficulty": "medium",
    "questionEn": "Find the value of $k$ that makes the vectors $\\vec{A} = (1, 2, 3)$, $\\vec{B} = (0, 1, 2)$, and $\\vec{C} = (2, k, 4)$ coplanar.",
    "questionAr": "أوجد قيمة $k$ التي تجعل المتجهات $\\vec{A} = (١، ٢، ٣)$ و $\\vec{B} = (٠، ١، ٢)$ و $\\vec{C} = (٢، k، ٤)$ تقع في مستوى واحد.",
    "optionsEn": [
      "3",
      "1",
      "-1",
      "2"
    ],
    "optionsAr": [
      "٣",
      "١",
      "-١",
      "٢"
    ],
    "correctAnswer": "3",
    "correctIndex": 0,
    "hintEn": "Coplanar vectors have zero scalar triple product: $\\det[A, B, C] = 0$.",
    "hintAr": "المتجهات المستوية حاصل ضربها القياسي الثلاثي ينعدم: المحدد = ٠.",
    "stepByStepSolutionEn": [
      "Set the scalar triple product to 0:",
      "$$\\begin{vmatrix} 1 & 2 & 3 \\\\ 0 & 1 & 2 \\\\ 2 & k & 4 \\end{vmatrix} = 0$$",
      "Expand along column 1:",
      "$$1(4 - 2k) - 0 + 2(4 - 3) = 0$$",
      "$$4 - 2k + 2(1) = 0 \\implies 6 - 2k = 0 \\implies 2k = 6 \\implies k = 3$$"
    ],
    "stepByStepSolutionAr": [
      "شرط وقوع المتجهات في مستوى واحد هو انعدام المحدد الثلاثي:",
      "$$\\begin{vmatrix} ١ & ٢ & ٣ \\\\ ٠ & ١ & ٢ \\\\ ٢ & k & ٤ \\end{vmatrix} = ٠$$",
      "بالفك بعناصر العمود الأول:",
      "$$١(٤ - ٢k) + ٢(٤ - ٣) = ٠ \\implies ٦ - ٢k = ٠ \\implies k = ٣$$"
    ],
    "teacherTipEn": "Expanding along the column containing zero speeds up computation.",
    "teacherTipAr": "الفك بعناصر الصف أو العمود الذي يحتوي صفراً يختصر الوقت والجهد."
  },
  {
    "id": "solid_ch1_ex_15",
    "titleEn": "Work Done by a Constant Force Vector",
    "titleAr": "الشغل المبذول بواسطة متجه قوة ثابتة",
    "difficulty": "easy",
    "questionEn": "A force $\\vec{F} = (3, -2, 5)$ moves a particle from point $A(1, 2, 0)$ to point $B(4, 1, 3)$. Calculate the work done by the force.",
    "questionAr": "أثرت قوة $\\vec{F} = (٣، -٢، ٥)$ على جسيم فحركته من النقطة $A(١، ٢، ٠)$ إلى النقطة $B(٤، ١، ٣)$. احسب الشغل المبذول بواسطة القوة.",
    "optionsEn": [
      "26 work units",
      "11 work units",
      "15 work units",
      "30 work units"
    ],
    "optionsAr": [
      "٢٦ وحدة شغل",
      "١١ وحدة شغل",
      "١٥ وحدة شغل",
      "٣٠ وحدة شغل"
    ],
    "correctAnswer": "26 work units",
    "correctIndex": 0,
    "hintEn": "Work $W = \\vec{F} \\cdot \\vec{s}$ where displacement $\\vec{s} = \\vec{AB} = B - A$.",
    "hintAr": "الشغل $W = \\vec{F} \\cdot \\vec{s}$ حيث متجه الإزاحة $\\vec{s} = B - A$.",
    "stepByStepSolutionEn": [
      "Find the displacement vector $\\vec{s} = \\vec{AB} = B - A$:",
      "$$\\vec{s} = (4 - 1, 1 - 2, 3 - 0) = (3, -1, 3)$$",
      "Calculate work done via dot product:",
      "$$W = \\vec{F} \\cdot \\vec{s} = (3)(3) + (-2)(-1) + (5)(3) = 9 + 2 + 15 = 26 \\text{ work units}$$"
    ],
    "stepByStepSolutionAr": [
      "نحسب متجه الإزاحة $\\vec{s} = B - A$:",
      "$$\\vec{s} = (٤ - ١، ١ - ٢، ٣ - ٠) = (٣، -١، ٣)$$",
      "الشغل المبذول بالضرب القياسي:",
      "$$W = \\vec{F} \\cdot \\vec{s} = (٣)(٣) + (-٢)(-١) + (٥)(٣) = ٩ + ٢ + ١٥ = ٢٦ \\text{ وحدة شغل}$$"
    ],
    "teacherTipEn": "This problem connects 3D vector geometry directly with mechanics and dynamics.",
    "teacherTipAr": "مسألة تطبيقية نموذجية تربط بين هندسة المتجهات الفراغية والاستاتيكا والديناميكا."
  }
];
