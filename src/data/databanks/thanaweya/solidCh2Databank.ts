import type { ChapterDatabank } from '../../../types/curriculum';

export const solidCh2Databank: ChapterDatabank = {
  easy: [
  {
    "id": "solid_ch2_db_easy_01",
    "titleEn": "Direction Cosines from Vector",
    "titleAr": "جيوب تمام الاتجاه من متجه اتجاه",
    "difficulty": "easy",
    "questionEn": "Find the direction cosines of a line with direction vector $\\vec{d} = (2, -3, 6)$.",
    "questionAr": "أوجد جيوب تمام الاتجاه لخط مستقيم متجه اتجاهه $\\vec{d} = (2، -3، 6)$.",
    "optionsEn": [
      "$(\\frac{2}{7}, -\\frac{3}{7}, \\frac{6}{7})$",
      "$(\\frac{2}{49}, -\\frac{3}{49}, \\frac{6}{49})$",
      "$(2, -3, 6)$",
      "$(\\frac{2}{5}, -\\frac{3}{5}, \\frac{6}{5})$"
    ],
    "optionsAr": [
      "(2/7، -3/7، 6/7)",
      "(2/49، -3/49، 6/49)",
      "(2، -3، 6)",
      "(2/5، -3/5، 6/5)"
    ],
    "correctAnswer": "$(\\frac{2}{7}, -\\frac{3}{7}, \\frac{6}{7})$",
    "correctIndex": 0,
    "hintEn": "Direction cosines are the components of unit vector: d / ||d||.",
    "hintAr": "جيوب تمام الاتجاه هي مركبات متجه الوحدة: d / ||d||.",
    "stepByStepSolutionEn": [
      "1. Magnitude $\\|\\vec{d}\\| = \\sqrt{4 + 9 + 36} = 7$.",
      "2. Unit vector is $(\\frac{2}{7}, -\\frac{3}{7}, \\frac{6}{7})$."
    ],
    "stepByStepSolutionAr": [
      "١. المعيار = 7.",
      "٢. متجه الوحدة = (2/7، -3/7، 6/7)."
    ],
    "teacherTipEn": "Sum of squares of direction cosines equals 1.",
    "teacherTipAr": "مجموع مربعات جيوب تمام الاتجاه يساوي 1."
  },
  {
    "id": "solid_ch2_db_easy_02",
    "titleEn": "Sum of Squared Direction Cosines",
    "titleAr": "مجموع مربعات جيوب تمام الاتجاه",
    "difficulty": "easy",
    "questionEn": "If a straight line makes angles $\\theta_x, \\theta_y, \\theta_z$ with the positive coordinate axes, find $\\cos^2\\theta_x + \\cos^2\\theta_y + \\cos^2\\theta_z$.",
    "questionAr": "إذا صنع خط مستقيم زوايا اتجاه $\\theta_x, \\theta_y, \\theta_z$ مع محاور الإحداثيات الموجبة، فما قيمة $\\cos^2\\theta_x + \\cos^2\\theta_y + \\cos^2\\theta_z$؟",
    "optionsEn": [
      "$1$",
      "$2$",
      "$0$",
      "$3$"
    ],
    "optionsAr": [
      "1",
      "2",
      "0",
      "3"
    ],
    "correctAnswer": "$1$",
    "correctIndex": 0,
    "hintEn": "Fundamental identity: l^2 + m^2 + n^2 = 1.",
    "hintAr": "المتطابقة الأساسية: مجموع مربعات جيوب التمام يساوي 1.",
    "stepByStepSolutionEn": [
      "1. By definition of unit direction vector, $\\|\\vec{u}\\|^2 = \\cos^2\\theta_x + \\cos^2\\theta_y + \\cos^2\\theta_z = 1$."
    ],
    "stepByStepSolutionAr": [
      "١. من تعريف متجه وحدة الاتجاه: مجموع المربعات يساوي 1."
    ],
    "teacherTipEn": "Remember that sin^2 + sin^2 + sin^2 = 2.",
    "teacherTipAr": "تذكر أن مجموع مربعات الجيوب يساوي 2."
  },
  {
    "id": "solid_ch2_db_easy_03",
    "titleEn": "Sum of Squared Direction Sines",
    "titleAr": "مجموع مربعات جيوب الاتجاه",
    "difficulty": "easy",
    "questionEn": "For direction angles $\\theta_x, \\theta_y, \\theta_z$ of any line, find $\\sin^2\\theta_x + \\sin^2\\theta_y + \\sin^2\\theta_z$.",
    "questionAr": "لأي خط مستقيم زوايا اتجاهه $\\theta_x, \\theta_y, \\theta_z$، أوجد $\\sin^2\\theta_x + \\sin^2\\theta_y + \\sin^2\\theta_z$.",
    "optionsEn": [
      "$2$",
      "$1$",
      "$3$",
      "$0$"
    ],
    "optionsAr": [
      "2",
      "1",
      "3",
      "0"
    ],
    "correctAnswer": "$2$",
    "correctIndex": 0,
    "hintEn": "Use sin^2 θ = 1 - cos^2 θ.",
    "hintAr": "استخدم جا² θ = 1 - جتا² θ.",
    "stepByStepSolutionEn": [
      "1. $\\sum \\sin^2\\theta = 3 - \\sum \\cos^2\\theta = 3 - 1 = 2$."
    ],
    "stepByStepSolutionAr": [
      "١. مجموع جا² = 3 - 1 = 2."
    ],
    "teacherTipEn": "Classic exam identity.",
    "teacherTipAr": "متطابقة امتحانية شهيرة."
  },
  {
    "id": "solid_ch2_db_easy_04",
    "titleEn": "Third Direction Angle Calculation",
    "titleAr": "إيجاد زاوية الاتجاه الثالثة",
    "difficulty": "easy",
    "questionEn": "A line makes angles of $60^\\circ$ with the $x$-axis and $45^\\circ$ with the $y$-axis. Find an acute angle it makes with the $z$-axis.",
    "questionAr": "خط مستقيم يصنع زاوية $60^\\circ$ مع محور السينات و $45^\\circ$ مع محور الصادات. أوجد قياس الزاوية الحادة التي يصنعها مع محور العينات.",
    "optionsEn": [
      "$60^\\circ$",
      "$30^\\circ$",
      "$45^\\circ$",
      "$75^\\circ$"
    ],
    "optionsAr": [
      "60°",
      "30°",
      "45°",
      "75°"
    ],
    "correctAnswer": "$60^\\circ$",
    "correctIndex": 0,
    "hintEn": "cos^2(60) + cos^2(45) + cos^2(θz) = 1.",
    "hintAr": "عوض في متطابقة مجموع مربعات جيب التمام.",
    "stepByStepSolutionEn": [
      "1. $1/4 + 1/2 + \\cos^2\\theta_z = 1 \\implies \\cos^2\\theta_z = 1/4 \\implies \\theta_z = 60^\\circ$."
    ],
    "stepByStepSolutionAr": [
      "١. 1/4 + 1/2 + جتا² θz = 1، إذن θz = 60°."
    ],
    "teacherTipEn": "Acute angle means positive cosine.",
    "teacherTipAr": "الزاوية الحادة جيب تمامها موجب."
  },
  {
    "id": "solid_ch2_db_easy_05",
    "titleEn": "Vector Equation of a Line",
    "titleAr": "الصورة المتجهة لمعادلة الخط المستقيم",
    "difficulty": "easy",
    "questionEn": "Find the vector equation of the line passing through $A(1, -2, 3)$ with direction vector $\\vec{d} = (4, 0, -1)$.",
    "questionAr": "أوجد الصورة المتجهة لمعادلة المستقيم المار بالنقطة $A(1، -2، 3)$ ومتجه اتجاهه $\\vec{d} = (4، 0، -1)$.",
    "optionsEn": [
      "$\\vec{r} = (1, -2, 3) + t(4, 0, -1)$",
      "$\\vec{r} = (4, 0, -1) + t(1, -2, 3)$",
      "$\\vec{r} = (5, -2, 2) + t(4, 0, -1)$",
      "$\\vec{r} = (1, -2, 3) \\cdot (4, 0, -1)$"
    ],
    "optionsAr": [
      "ر = (1، -2، 3) + ك(4، 0، -1)",
      "ر = (4، 0، -1) + ك(1، -2، 3)",
      "ر = (5، -2، 2) + ك(4، 0، -1)",
      "ر = (1، -2، 3) . (4، 0، -1)"
    ],
    "correctAnswer": "$\\vec{r} = (1, -2, 3) + t(4, 0, -1)$",
    "correctIndex": 0,
    "hintEn": "r = A + t d.",
    "hintAr": "ر = أ + ك د.",
    "stepByStepSolutionEn": [
      "1. $\\vec{r} = (1, -2, 3) + t(4, 0, -1)$."
    ],
    "stepByStepSolutionAr": [
      "١. ر = (1، -2، 3) + ك(4، 0، -1)."
    ],
    "teacherTipEn": "Vector equation form.",
    "teacherTipAr": "الصورة المتجهة."
  },
  {
    "id": "solid_ch2_db_easy_06",
    "titleEn": "Parametric Equations of Line",
    "titleAr": "المعادلات البارامترية للمستقيم",
    "difficulty": "easy",
    "questionEn": "Which set represents the parametric equations of the line $\\vec{r} = (3, 5, -2) + t(2, -1, 4)$?",
    "questionAr": "أي مجموعة تمثل المعادلات البارامترية للمستقيم $\\vec{r} = (3، 5، -2) + t(2، -1، 4)$؟",
    "optionsEn": [
      "$x = 3 + 2t, y = 5 - t, z = -2 + 4t$",
      "$x = 2 + 3t, y = -1 + 5t, z = 4 - 2t$",
      "$x = 3 - 2t, y = 5 + t, z = -2 - 4t$",
      "$x = 5t, y = 4t, z = 2t$"
    ],
    "optionsAr": [
      "س = 3 + 2ك، ص = 5 - ك، ع = -2 + 4ك",
      "س = 2 + 3ك، ص = -1 + 5ك، ع = 4 - 2ك",
      "س = 3 - 2ك، ص = 5 + ك، ع = -2 - 4ك",
      "س = 5ك، ص = 4ك، ع = 2ك"
    ],
    "correctAnswer": "$x = 3 + 2t, y = 5 - t, z = -2 + 4t$",
    "correctIndex": 0,
    "hintEn": "Separate into x, y, z.",
    "hintAr": "افصل المركبات س، ص، ع.",
    "stepByStepSolutionEn": [
      "1. $x = 3 + 2t, y = 5 - t, z = -2 + 4t$."
    ],
    "stepByStepSolutionAr": [
      "١. س = 3 + 2ك، ص = 5 - ك، ع = -2 + 4ك."
    ],
    "teacherTipEn": "Parametric coordinates in terms of parameter t.",
    "teacherTipAr": "المعادلات البارامترية بدلالة ك."
  },
  {
    "id": "solid_ch2_db_easy_07",
    "titleEn": "Cartesian Symmetric Form of Line",
    "titleAr": "الصورة الإحداثية المتماثلة للمستقيم",
    "difficulty": "easy",
    "questionEn": "What is the Cartesian symmetric equation of the line passing through $(2, 1, -4)$ with direction vector $(3, -5, 2)$?",
    "questionAr": "ما هي المعادلة الإحداثية المتماثلة للمستقيم المار بالنقطة $(2، 1، -4)$ ومتجه اتجاهه $(3، -5، 2)$؟",
    "optionsEn": [
      "$\\frac{x - 2}{3} = \\frac{y - 1}{-5} = \\frac{z + 4}{2}$",
      "$\\frac{x + 2}{3} = \\frac{y + 1}{-5} = \\frac{z - 4}{2}$",
      "$\\frac{x - 3}{2} = \\frac{y + 5}{1} = \\frac{z - 2}{-4}$",
      "$3(x - 2) = -5(y - 1) = 2(z + 4)$"
    ],
    "optionsAr": [
      "(س - 2)/3 = (ص - 1)/(-5) = (ع + 4)/2",
      "(س + 2)/3 = (ص + 1)/(-5) = (ع - 4)/2",
      "(س - 3)/2 = (ص + 5)/1 = (ع - 2)/(-4)",
      "3(س - 2) = -5(ص - 1) = 2(ع + 4)"
    ],
    "correctAnswer": "$\\frac{x - 2}{3} = \\frac{y - 1}{-5} = \\frac{z + 4}{2}$",
    "correctIndex": 0,
    "hintEn": "Symmetric form: (x - x0)/a = (y - y0)/b = (z - z0)/c.",
    "hintAr": "الصورة المتماثلة: (س - س٠)/أ = (ص - ص٠)/ب = (ع - ع٠)/جـ.",
    "stepByStepSolutionEn": [
      "1. $\\frac{x - 2}{3} = \\frac{y - 1}{-5} = \\frac{z - (-4)}{2}$."
    ],
    "stepByStepSolutionAr": [
      "١. (س - 2)/3 = (ص - 1)/(-5) = (ع + 4)/2."
    ],
    "teacherTipEn": "Note sign of z: z - (-4) = z + 4.",
    "teacherTipAr": "انتبه للإشارة: ع - (-4) = ع + 4."
  },
  {
    "id": "solid_ch2_db_easy_08",
    "titleEn": "Direction Vector from Two Points",
    "titleAr": "متجه الاتجاه من نقطتين",
    "difficulty": "easy",
    "questionEn": "Find a direction vector for the straight line passing through $A(2, 3, -1)$ and $B(5, -1, 4)$.",
    "questionAr": "أوجد متجه اتجاه للخط المستقيم المار بالنقطتين $A(2، 3، -1)$ و $B(5، -1، 4)$.",
    "optionsEn": [
      "$(3, -4, 5)$",
      "$(7, 2, 3)$",
      "$(3, 2, 5)$",
      "$(-3, -4, 5)$"
    ],
    "optionsAr": [
      "(3، -4، 5)",
      "(7، 2، 3)",
      "(3، 2، 5)",
      "(-3، -4، 5)"
    ],
    "correctAnswer": "$(3, -4, 5)$",
    "correctIndex": 0,
    "hintEn": "d = B - A.",
    "hintAr": "د = ب - أ.",
    "stepByStepSolutionEn": [
      "1. $\\vec{AB} = (5 - 2, -1 - 3, 4 - (-1)) = (3, -4, 5)$."
    ],
    "stepByStepSolutionAr": [
      "١. أ ب = (3، -4، 5)."
    ],
    "teacherTipEn": "Displacement vector between two points.",
    "teacherTipAr": "متجه الإزاحة بين نقطتين."
  },
  {
    "id": "solid_ch2_db_easy_09",
    "titleEn": "Line Parallel to Y-Axis Direction",
    "titleAr": "متجه اتجاه مستقيم مواز لمحور الصادات",
    "difficulty": "easy",
    "questionEn": "What is the direction vector of a line parallel to the $y$-axis?",
    "questionAr": "ما هو متجه الاتجاه لمستقيم موازٍ لمحور الصادات؟",
    "optionsEn": [
      "$(0, 1, 0)$",
      "$(1, 0, 0)$",
      "$(0, 0, 1)$",
      "$(1, 1, 0)$"
    ],
    "optionsAr": [
      "(0، 1، 0)",
      "(1، 0، 0)",
      "(0، 0، 1)",
      "(1، 1، 0)"
    ],
    "correctAnswer": "$(0, 1, 0)$",
    "correctIndex": 0,
    "hintEn": "Along y-axis, dx = dz = 0.",
    "hintAr": "في اتجاه محور الصادات، مركبتا السينات والعينات صفر.",
    "stepByStepSolutionEn": [
      "1. $\\vec{j} = (0, 1, 0)$."
    ],
    "stepByStepSolutionAr": [
      "١. (0، 1، 0)."
    ],
    "teacherTipEn": "Unit vector along y-axis.",
    "teacherTipAr": "متجه الوحدة في اتجاه محور الصادات."
  },
  {
    "id": "solid_ch2_db_easy_10",
    "titleEn": "Point on Line at Parameter t=2",
    "titleAr": "نقطة على المستقيم عند ك=2",
    "difficulty": "easy",
    "questionEn": "Find the point on the line $\\vec{r} = (1, 4, -2) + t(2, -3, 1)$ corresponding to $t = 2$.",
    "questionAr": "أوجد النقطة الواقعة على المستقيم عند $t = 2$.",
    "optionsEn": [
      "$(5, -2, 0)$",
      "$(3, 1, -1)$",
      "$(5, 2, 0)$",
      "$(4, -6, 2)$"
    ],
    "optionsAr": [
      "(5، -2، 0)",
      "(3، 1، -1)",
      "(5، 2، 0)",
      "(4، -6، 2)"
    ],
    "correctAnswer": "$(5, -2, 0)$",
    "correctIndex": 0,
    "hintEn": "Substitute t = 2.",
    "hintAr": "عوض بـ ك = 2.",
    "stepByStepSolutionEn": [
      "1. $(1+4, 4-6, -2+2) = (5, -2, 0)$."
    ],
    "stepByStepSolutionAr": [
      "١. (5، -2، 0)."
    ],
    "teacherTipEn": "Lies on xy-plane since z = 0.",
    "teacherTipAr": "تقع في المستوى س ص لأن ع = 0."
  },
  {
    "id": "solid_ch2_db_easy_11",
    "titleEn": "Condition for Parallel Lines",
    "titleAr": "شرط توازي مستقيمين في الفراغ",
    "difficulty": "easy",
    "questionEn": "The lines with direction vectors $\\vec{d}_1 = (2, -1, 3)$ and $\\vec{d}_2 = (6, k, 9)$ are parallel if:",
    "questionAr": "يتوازى المستقيمان اللذان متجها اتجاههما $\\vec{d}_1 = (2، -1، 3)$ و $\\vec{d}_2 = (6، k، 9)$ إذا كانت:",
    "optionsEn": [
      "$k = -3$",
      "$k = 3$",
      "$k = -1$",
      "$k = 6$"
    ],
    "optionsAr": [
      "k = -3",
      "k = 3",
      "k = -1",
      "k = 6"
    ],
    "correctAnswer": "$k = -3$",
    "correctIndex": 0,
    "hintEn": "6/2 = k/(-1) = 9/3 = 3.",
    "hintAr": "تناسب نسب الاتجاه: 6/2 = k/(-1).",
    "stepByStepSolutionEn": [
      "1. $k / (-1) = 3 \\implies k = -3$."
    ],
    "stepByStepSolutionAr": [
      "١. k = -3."
    ],
    "teacherTipEn": "Direction ratios are proportional.",
    "teacherTipAr": "نسب الاتجاه متناسبة."
  },
  {
    "id": "solid_ch2_db_easy_12",
    "titleEn": "Condition for Perpendicular Lines",
    "titleAr": "شرط تعامد مستقيمين في الفراغ",
    "difficulty": "easy",
    "questionEn": "The lines with direction vectors $\\vec{d}_1 = (1, 4, -2)$ and $\\vec{d}_2 = (2, k, 5)$ are perpendicular if:",
    "questionAr": "يتعامد المستقيمان اللذان متجها اتجاههما $\\vec{d}_1 = (1، 4، -2)$ و $\\vec{d}_2 = (2، k، 5)$ إذا كانت:",
    "optionsEn": [
      "$k = 2$",
      "$k = -2$",
      "$k = 4$",
      "$k = 0$"
    ],
    "optionsAr": [
      "k = 2",
      "k = -2",
      "k = 4",
      "k = 0"
    ],
    "correctAnswer": "$k = 2$",
    "correctIndex": 0,
    "hintEn": "d1 . d2 = 0.",
    "hintAr": "الضرب القياسي د١ . د٢ = 0.",
    "stepByStepSolutionEn": [
      "1. $2 + 4k - 10 = 0 \\implies 4k = 8 \\implies k = 2$."
    ],
    "stepByStepSolutionAr": [
      "١. 4k = 8 ومنها k = 2."
    ],
    "teacherTipEn": "Dot product zero means perpendicular.",
    "teacherTipAr": "انعدام الضرب القياسي يعني التعامد."
  },
  {
    "id": "solid_ch2_db_easy_13",
    "titleEn": "Angle Between Two Lines Formula",
    "titleAr": "قياس الزاوية بين مستقيمين",
    "difficulty": "easy",
    "questionEn": "Find the acute angle between lines with direction vectors $\\vec{d}_1 = (1, 1, 0)$ and $\\vec{d}_2 = (0, 1, 1)$.",
    "questionAr": "أوجد قياس الزاوية الحادة بين المستقيمين اللذين متجها اتجاههما $\\vec{d}_1 = (1، 1، 0)$ و $\\vec{d}_2 = (0، 1، 1)$.",
    "optionsEn": [
      "$60^\\circ$",
      "$45^\\circ$",
      "$30^\\circ$",
      "$90^\\circ$"
    ],
    "optionsAr": [
      "60°",
      "45°",
      "30°",
      "90°"
    ],
    "correctAnswer": "$60^\\circ$",
    "correctIndex": 0,
    "hintEn": "cos θ = |1| / (sqrt(2) * sqrt(2)) = 1/2.",
    "hintAr": "جتا θ = 1 / 2.",
    "stepByStepSolutionEn": [
      "1. $\\cos\\theta = 1/2 \\implies \\theta = 60^\\circ$."
    ],
    "stepByStepSolutionAr": [
      "١. الزاوية 60°."
    ],
    "teacherTipEn": "Acute angle between lines.",
    "teacherTipAr": "الزاوية الحادة بين خطين."
  },
  {
    "id": "solid_ch2_db_easy_14",
    "titleEn": "Normal Vector of a Plane",
    "titleAr": "متجه الاتجاه العمودي على مستوى",
    "difficulty": "easy",
    "questionEn": "Find a normal vector to the plane $3x - 5y + 2z - 7 = 0$.",
    "questionAr": "أوجد متجه اتجاه عمودي على المستوى $3x - 5y + 2z - 7 = 0$.",
    "optionsEn": [
      "$(3, -5, 2)$",
      "$(3, 5, 2)$",
      "$(-3, -5, -2)$",
      "$(3, -5, -7)$"
    ],
    "optionsAr": [
      "(3، -5، 2)",
      "(3، 5، 2)",
      "(-3، -5، -2)",
      "(3، -5، -7)"
    ],
    "correctAnswer": "$(3, -5, 2)$",
    "correctIndex": 0,
    "hintEn": "Normal is (A, B, C).",
    "hintAr": "المتجه العمودي هو (أ، ب، جـ).",
    "stepByStepSolutionEn": [
      "1. $\\vec{n} = (3, -5, 2)$."
    ],
    "stepByStepSolutionAr": [
      "١. ن = (3، -5، 2)."
    ],
    "teacherTipEn": "Coefficients of x, y, z.",
    "teacherTipAr": "معاملات س، ص، ع."
  },
  {
    "id": "solid_ch2_db_easy_15",
    "titleEn": "Equation of Plane Point and Normal",
    "titleAr": "معادلة مستوى بمعلومية نقطة ومتجه عمودي",
    "difficulty": "easy",
    "questionEn": "Find the equation of the plane passing through $A(2, -1, 3)$ with normal vector $\\vec{n} = (1, 3, -2)$.",
    "questionAr": "أوجد معادلة المستوى المار بالنقطة $A(2، -1، 3)$ والمتجه العمودي عليه $\\vec{n} = (1، 3، -2)$.",
    "optionsEn": [
      "$x + 3y - 2z + 7 = 0$",
      "$x + 3y - 2z - 7 = 0$",
      "$x - 3y + 2z + 7 = 0$",
      "$2x - y + 3z - 7 = 0$"
    ],
    "optionsAr": [
      "س + 3ص - 2ع + 7 = 0",
      "س + 3ص - 2ع - 7 = 0",
      "س - 3ص + 2ع + 7 = 0",
      "2س - ص + 3ع - 7 = 0"
    ],
    "correctAnswer": "$x + 3y - 2z + 7 = 0$",
    "correctIndex": 0,
    "hintEn": "1(x - 2) + 3(y + 1) - 2(z - 3) = 0.",
    "hintAr": "ن . (ر - أ) = 0.",
    "stepByStepSolutionEn": [
      "1. $x + 3y - 2z - 2 + 3 + 6 = 0 \\implies x + 3y - 2z + 7 = 0$."
    ],
    "stepByStepSolutionAr": [
      "١. س + 3ص - 2ع + 7 = 0."
    ],
    "teacherTipEn": "Point-normal form.",
    "teacherTipAr": "معادلة المستوى بنقطة وعمودي."
  },
  {
    "id": "solid_ch2_db_easy_16",
    "titleEn": "Plane Parallel to XY-Plane",
    "titleAr": "مستوى مواز للمستوى س ص",
    "difficulty": "easy",
    "questionEn": "What is the equation of the plane passing through $P(4, -3, 5)$ and parallel to the $xy$-plane?",
    "questionAr": "ما هي معادلة المستوى المار بالنقطة $P(4، -3، 5)$ والموازي للمستوى الإحداثي $xy$؟",
    "optionsEn": [
      "$z = 5$",
      "$x = 4$",
      "$y = -3$",
      "$z = -5$"
    ],
    "optionsAr": [
      "ع = 5",
      "س = 4",
      "ص = -3",
      "ع = -5"
    ],
    "correctAnswer": "$z = 5$",
    "correctIndex": 0,
    "hintEn": "Parallel to xy means z = constant.",
    "hintAr": "موازٍ لـ س ص يعني ع = ثابت.",
    "stepByStepSolutionEn": [
      "1. $z = 5$."
    ],
    "stepByStepSolutionAr": [
      "١. ع = 5."
    ],
    "teacherTipEn": "Constant z plane.",
    "teacherTipAr": "مستوى ذو ع ثابتة."
  },
  {
    "id": "solid_ch2_db_easy_17",
    "titleEn": "Plane Intercept Form",
    "titleAr": "معادلة المستوى بدلالة أجزائه المقطوعة",
    "difficulty": "easy",
    "questionEn": "Find the equation of the plane that cuts off intercepts $2, -3, 4$ from the $x, y, z$ axes respectively.",
    "questionAr": "أوجد معادلة المستوى الذي يقطع أجزاء أطوالها $2، -3، 4$ من المحاور الإحداثية.",
    "optionsEn": [
      "$\\frac{x}{2} - \\frac{y}{3} + \\frac{z}{4} = 1$",
      "$\\frac{x}{2} + \\frac{y}{3} + \\frac{z}{4} = 1$",
      "$2x - 3y + 4z = 1$",
      "$\\frac{x}{2} - \\frac{y}{3} + \\frac{z}{4} = 0$"
    ],
    "optionsAr": [
      "س/2 - ص/3 + ع/4 = 1",
      "س/2 + ص/3 + ع/4 = 1",
      "2س - 3ص + 4ع = 1",
      "س/2 - ص/3 + ع/4 = 0"
    ],
    "correctAnswer": "$\\frac{x}{2} - \\frac{y}{3} + \\frac{z}{4} = 1$",
    "correctIndex": 0,
    "hintEn": "x/a + y/b + z/c = 1.",
    "hintAr": "س/أ + ص/ب + ع/جـ = 1.",
    "stepByStepSolutionEn": [
      "1. $\\frac{x}{2} - \\frac{y}{3} + \\frac{z}{4} = 1$."
    ],
    "stepByStepSolutionAr": [
      "١. س/2 - ص/3 + ع/4 = 1."
    ],
    "teacherTipEn": "Intercept form.",
    "teacherTipAr": "صورة الأجزاء المقطوعة."
  },
  {
    "id": "solid_ch2_db_easy_18",
    "titleEn": "X-Intercept of Plane",
    "titleAr": "الجزء المقطوع من محور السينات",
    "difficulty": "easy",
    "questionEn": "What is the length of the intercept made by $2x - 3y + 4z - 12 = 0$ on the $x$-axis?",
    "questionAr": "ما طول الجزء المقطوع من محور السينات بواسطة المستوى $2x - 3y + 4z - 12 = 0$؟",
    "optionsEn": [
      "$6$",
      "$4$",
      "$3$",
      "$12$"
    ],
    "optionsAr": [
      "6",
      "4",
      "3",
      "12"
    ],
    "correctAnswer": "$6$",
    "correctIndex": 0,
    "hintEn": "Set y = z = 0: 2x = 12.",
    "hintAr": "ضع ص = ع = 0.",
    "stepByStepSolutionEn": [
      "1. $2x = 12 \\implies x = 6$."
    ],
    "stepByStepSolutionAr": [
      "١. س = 6."
    ],
    "teacherTipEn": "Intercept on axis.",
    "teacherTipAr": "الجزء المقطوع من المحور."
  },
  {
    "id": "solid_ch2_db_easy_19",
    "titleEn": "Condition for Parallel Planes",
    "titleAr": "شرط توازي مستويين",
    "difficulty": "easy",
    "questionEn": "The planes $2x - 4y + 6z = 5$ and $3x - 6y + kz = 8$ are parallel if:",
    "questionAr": "يتوازى المستويان $2x - 4y + 6z = 5$ و $3x - 6y + kz = 8$ إذا كانت:",
    "optionsEn": [
      "$k = 9$",
      "$k = 6$",
      "$k = -9$",
      "$k = 3$"
    ],
    "optionsAr": [
      "k = 9",
      "k = 6",
      "k = -9",
      "k = 3"
    ],
    "correctAnswer": "$k = 9$",
    "correctIndex": 0,
    "hintEn": "k/6 = 3/2 = 1.5.",
    "hintAr": "تناسب المعاملات: k/6 = 3/2.",
    "stepByStepSolutionEn": [
      "1. $k = 6 \\times 1.5 = 9$."
    ],
    "stepByStepSolutionAr": [
      "١. k = 9."
    ],
    "teacherTipEn": "Proportional normal vectors.",
    "teacherTipAr": "تناسب المتجهات العمودية."
  },
  {
    "id": "solid_ch2_db_easy_20",
    "titleEn": "Condition for Perpendicular Planes",
    "titleAr": "شرط تعامد مستويين",
    "difficulty": "easy",
    "questionEn": "The planes $x + 2y - 3z + 1 = 0$ and $2x - y + kz - 4 = 0$ are perpendicular if:",
    "questionAr": "يتعامد المستويان $x + 2y - 3z + 1 = 0$ و $2x - y + kz - 4 = 0$ إذا كانت:",
    "optionsEn": [
      "$k = 0$",
      "$k = 1$",
      "$k = -1$",
      "$k = 3$"
    ],
    "optionsAr": [
      "k = 0",
      "k = 1",
      "k = -1",
      "k = 3"
    ],
    "correctAnswer": "$k = 0$",
    "correctIndex": 0,
    "hintEn": "n1 . n2 = 2 - 2 - 3k = 0.",
    "hintAr": "الضرب القياسي للعموديين ينعدم.",
    "stepByStepSolutionEn": [
      "1. $-3k = 0 \\implies k = 0$."
    ],
    "stepByStepSolutionAr": [
      "١. k = 0."
    ],
    "teacherTipEn": "Orthogonal planes.",
    "teacherTipAr": "مستويات متعامدة."
  },
  {
    "id": "solid_ch2_db_easy_21",
    "titleEn": "Distance from Origin to Plane",
    "titleAr": "بعد نقطة الأصل عن مستوى",
    "difficulty": "easy",
    "questionEn": "Find the perpendicular distance from the origin to the plane $2x - 2y + z - 9 = 0$.",
    "questionAr": "أوجد طول العمود من نقطة الأصل إلى المستوى $2x - 2y + z - 9 = 0$.",
    "optionsEn": [
      "$3$",
      "$9$",
      "$\\frac{9}{5}$",
      "$1$"
    ],
    "optionsAr": [
      "3",
      "9",
      "9/5",
      "1"
    ],
    "correctAnswer": "$3$",
    "correctIndex": 0,
    "hintEn": "|-9| / sqrt(4 + 4 + 1) = 9/3 = 3.",
    "hintAr": "9 / 3 = 3.",
    "stepByStepSolutionEn": [
      "1. $d = 9 / 3 = 3$."
    ],
    "stepByStepSolutionAr": [
      "١. البعد = 3."
    ],
    "teacherTipEn": "Distance formula.",
    "teacherTipAr": "قانون طول العمود."
  },
  {
    "id": "solid_ch2_db_easy_22",
    "titleEn": "Angle Line and Plane Definition",
    "titleAr": "تعريف الزاوية بين مستقيم ومستوى",
    "difficulty": "easy",
    "questionEn": "If $\\theta$ is the angle between the direction of a line and the plane's normal, the angle $\\alpha$ between the line and plane is:",
    "questionAr": "إذا كانت $\\theta$ هي الزاوية مع العمودي على المستوى، فإن زاوية المستقيم مع المستوى هي:",
    "optionsEn": [
      "$\\alpha = 90^\\circ - \\theta$",
      "$\\alpha = \\theta$",
      "$\\alpha = 180^\\circ - \\theta$",
      "$\\alpha = 90^\\circ + \\theta$"
    ],
    "optionsAr": [
      "α = 90° - θ",
      "α = θ",
      "α = 180° - θ",
      "α = 90° + θ"
    ],
    "correctAnswer": "$\\alpha = 90^\\circ - \\theta$",
    "correctIndex": 0,
    "hintEn": "Complementary angles.",
    "hintAr": "زاويتان متتامتان.",
    "stepByStepSolutionEn": [
      "1. $\\alpha = 90^\\circ - \\theta$."
    ],
    "stepByStepSolutionAr": [
      "١. α = 90° - θ."
    ],
    "teacherTipEn": "Use sine for line-plane angle.",
    "teacherTipAr": "استخدم جا لزاوية الخط والمستوى."
  },
  {
    "id": "solid_ch2_db_easy_23",
    "titleEn": "Line Parallel to Plane Dot Product",
    "titleAr": "شرط توازي مستقيم ومستوى بالضرب القياسي",
    "difficulty": "easy",
    "questionEn": "A line with direction $\\vec{d}$ is parallel to a plane with normal $\\vec{n}$ if and only if:",
    "questionAr": "يوازي المستقيم مستوياً إذا وفقط إذا كان:",
    "optionsEn": [
      "$\\vec{d} \\cdot \\vec{n} = 0$",
      "$\\vec{d} = c \\vec{n}$",
      "$\\vec{d} \\times \\vec{n} = \\vec{0}$",
      "$\\vec{d} \\cdot \\vec{n} = 1$"
    ],
    "optionsAr": [
      "د . ن = 0",
      "د = ك ن",
      "د × ن = 0",
      "د . ن = 1"
    ],
    "correctAnswer": "$\\vec{d} \\cdot \\vec{n} = 0$",
    "correctIndex": 0,
    "hintEn": "Line is perpendicular to normal.",
    "hintAr": "المستقيم يعامد المتجه العمودي على المستوى.",
    "stepByStepSolutionEn": [
      "1. $\\vec{d} \\cdot \\vec{n} = 0$."
    ],
    "stepByStepSolutionAr": [
      "١. د . ن = 0."
    ],
    "teacherTipEn": "Parallel to plane means orthogonal to normal.",
    "teacherTipAr": "التوازي مع المستوى يعني التعامد مع عموديه."
  },
  {
    "id": "solid_ch2_db_easy_24",
    "titleEn": "Line Perpendicular to Plane Collinearity",
    "titleAr": "تعامد مستقيم على مستوى بالتوازي مع العمودي",
    "difficulty": "easy",
    "questionEn": "A line with direction $\\vec{d}$ is perpendicular to a plane with normal $\\vec{n}$ if and only if:",
    "questionAr": "يتعامد المستقيم على المستوى إذا وفقط إذا كان:",
    "optionsEn": [
      "$\\vec{d}$ is parallel to $\\vec{n}$",
      "$\\vec{d} \\cdot \\vec{n} = 0$",
      "$\\vec{d} + \\vec{n} = \\vec{0}$",
      "$\\vec{d} \\cdot \\vec{n} = -1$"
    ],
    "optionsAr": [
      "د يوازي ن",
      "د . ن = 0",
      "د + ن = 0",
      "د . ن = -1"
    ],
    "correctAnswer": "$\\vec{d}$ is parallel to $\\vec{n}$",
    "correctIndex": 0,
    "hintEn": "Direction aligns with normal.",
    "hintAr": "اتجاه المستقيم يتطابق مع المتجه العمودي.",
    "stepByStepSolutionEn": [
      "1. $\\vec{d} \\parallel \\vec{n}$."
    ],
    "stepByStepSolutionAr": [
      "١. د يوازي ن."
    ],
    "teacherTipEn": "Perpendicular to plane means parallel to normal.",
    "teacherTipAr": "التعامد على المستوى يعني التوازي مع العمودي."
  },
  {
    "id": "solid_ch2_db_easy_25",
    "titleEn": "Distance Between Parallel Planes",
    "titleAr": "البعد بين مستويين متوازيين",
    "difficulty": "easy",
    "questionEn": "Find the distance between parallel planes $2x - y + 2z - 4 = 0$ and $2x - y + 2z + 5 = 0$.",
    "questionAr": "أوجد البعد بين المستويين المتوازيين المعطيين.",
    "optionsEn": [
      "$3$",
      "$1$",
      "$9$",
      "$\\frac{1}{3}$"
    ],
    "optionsAr": [
      "3",
      "1",
      "9",
      "1/3"
    ],
    "correctAnswer": "$3$",
    "correctIndex": 0,
    "hintEn": "|-4 - 5| / 3 = 9/3 = 3.",
    "hintAr": "9 / 3 = 3.",
    "stepByStepSolutionEn": [
      "1. $d = 9 / 3 = 3$."
    ],
    "stepByStepSolutionAr": [
      "١. البعد = 3."
    ],
    "teacherTipEn": "Distance between parallel planes.",
    "teacherTipAr": "البعد بين مستويين متوازيين."
  },
  {
    "id": "solid_ch2_db_easy_26",
    "titleEn": "Distance Point to Plane",
    "titleAr": "بعد نقطة عن مستوى",
    "difficulty": "easy",
    "questionEn": "Find the distance from $P(1, 2, 3)$ to the plane $x + 2y + 2z - 2 = 0$.",
    "questionAr": "أوجد طول العمود من النقطة $(1، 2، 3)$ إلى المستوى $x + 2y + 2z - 2 = 0$.",
    "optionsEn": [
      "$3$",
      "$4$",
      "$\\frac{11}{3}$",
      "$2$"
    ],
    "optionsAr": [
      "3",
      "4",
      "11/3",
      "2"
    ],
    "correctAnswer": "$3$",
    "correctIndex": 0,
    "hintEn": "|1 + 4 + 6 - 2| / 3 = 9/3 = 3.",
    "hintAr": "9 / 3 = 3.",
    "stepByStepSolutionEn": [
      "1. $d = 9 / 3 = 3$."
    ],
    "stepByStepSolutionAr": [
      "١. البعد = 3."
    ],
    "teacherTipEn": "Point to plane distance.",
    "teacherTipAr": "طول العمود من نقطة لمستوى."
  },
  {
    "id": "solid_ch2_db_easy_27",
    "titleEn": "Intersection Point Line and Plane",
    "titleAr": "نقطة تقاطع مستقيم مع مستوى",
    "difficulty": "easy",
    "questionEn": "Find the intersection point of line $\\frac{x - 1}{2} = \\frac{y + 1}{1} = \\frac{z}{3}$ with plane $x + y + z = 6$.",
    "questionAr": "أوجد نقطة تقاطع المستقيم مع المستوى $x + y + z = 6$.",
    "optionsEn": [
      "$(3, 0, 3)$",
      "$(1, -1, 0)$",
      "$(5, 1, 6)$",
      "$(3, 2, 1)$"
    ],
    "optionsAr": [
      "(3، 0، 3)",
      "(1، -1، 0)",
      "(5، 1، 6)",
      "(3، 2، 1)"
    ],
    "correctAnswer": "$(3, 0, 3)$",
    "correctIndex": 0,
    "hintEn": "(1+2t) + (-1+t) + 3t = 6 => 6t = 6 => t = 1.",
    "hintAr": "بالتعويض: 6ك = 6 ومنها ك = 1.",
    "stepByStepSolutionEn": [
      "1. $t = 1 \\implies (3, 0, 3)$."
    ],
    "stepByStepSolutionAr": [
      "١. النقطة (3، 0، 3)."
    ],
    "teacherTipEn": "Substitute parametric into plane.",
    "teacherTipAr": "تعويض بارامتري."
  },
  {
    "id": "solid_ch2_db_easy_28",
    "titleEn": "Direction Cosines for Equal Direction Angles",
    "titleAr": "جيوب تمام الاتجاه لزوايا متساوية",
    "difficulty": "easy",
    "questionEn": "If a line makes equal acute angles with all three coordinate axes, its direction cosine is:",
    "questionAr": "إذا صنع مستقيم زوايا حادة متساوية مع محاور الإحداثيات، فإن جيب تمام اتجاهه هو:",
    "optionsEn": [
      "$\\frac{1}{\\sqrt{3}}$",
      "$\\frac{1}{3}$",
      "$\\frac{1}{\\sqrt{2}}$",
      "$\\frac{\\sqrt{3}}{2}$"
    ],
    "optionsAr": [
      "1/√3",
      "1/3",
      "1/√2",
      "√3/2"
    ],
    "correctAnswer": "$\\frac{1}{\\sqrt{3}}$",
    "correctIndex": 0,
    "hintEn": "3 cos^2 θ = 1 => cos θ = 1/sqrt(3).",
    "hintAr": "3 جتا² θ = 1.",
    "stepByStepSolutionEn": [
      "1. $\\cos\\theta = 1/\\sqrt{3}$."
    ],
    "stepByStepSolutionAr": [
      "١. 1/جذر(3)."
    ],
    "teacherTipEn": "Equal direction cosines.",
    "teacherTipAr": "جيوب تمام متساوية."
  },
  {
    "id": "solid_ch2_db_easy_29",
    "titleEn": "Foot of Normal from Origin",
    "titleAr": "معادلة مستوى مسقط أصله معلوم",
    "difficulty": "easy",
    "questionEn": "If the foot of perpendicular from origin to a plane is $(2, -1, 2)$, the plane equation is:",
    "questionAr": "إذا كان موقع العمود من الأصل هو $(2، -1، 2)$، فإن معادلة المستوى هي:",
    "optionsEn": [
      "$2x - y + 2z = 9$",
      "$2x - y + 2z = 3$",
      "$2x + y - 2z = 9$",
      "$x - 2y + z = 9$"
    ],
    "optionsAr": [
      "2س - ص + 2ع = 9",
      "2س - ص + 2ع = 3",
      "2س + ص - 2ع = 9",
      "س - 2ص + ع = 9"
    ],
    "correctAnswer": "$2x - y + 2z = 9$",
    "correctIndex": 0,
    "hintEn": "Normal is (2, -1, 2), D = 4 + 1 + 4 = 9.",
    "hintAr": "العمودي (2، -1، 2) و د = 9.",
    "stepByStepSolutionEn": [
      "1. $2x - y + 2z = 9$."
    ],
    "stepByStepSolutionAr": [
      "١. 2س - ص + 2ع = 9."
    ],
    "teacherTipEn": "Foot from origin defines normal.",
    "teacherTipAr": "مسقط الأصل يحدد العمودي والحد المطلق."
  },
  {
    "id": "solid_ch2_db_easy_30",
    "titleEn": "Plane Y-Intercept Point",
    "titleAr": "نقطة تقاطع مستوى مع محور الصادات",
    "difficulty": "easy",
    "questionEn": "The plane $3x + 4y + 6z = 12$ intersects the $y$-axis at:",
    "questionAr": "المستوى $3x + 4y + 6z = 12$ يقطع محور الصادات في النقطة:",
    "optionsEn": [
      "$(0, 3, 0)$",
      "$(4, 0, 0)$",
      "$(0, 0, 2)$",
      "$(0, 4, 0)$"
    ],
    "optionsAr": [
      "(0، 3، 0)",
      "(4، 0، 0)",
      "(0، 0، 2)",
      "(0، 4، 0)"
    ],
    "correctAnswer": "$(0, 3, 0)$",
    "correctIndex": 0,
    "hintEn": "4y = 12 => y = 3.",
    "hintAr": "4ص = 12 ومنها ص = 3.",
    "stepByStepSolutionEn": [
      "1. $(0, 3, 0)$."
    ],
    "stepByStepSolutionAr": [
      "١. (0، 3، 0)."
    ],
    "teacherTipEn": "Axis intersection.",
    "teacherTipAr": "تقاطع محور الصادات."
  },
  {
    "id": "solid_ch2_db_easy_31",
    "titleEn": "Plane Through Origin Condition",
    "titleAr": "المستوى المار بنقطة الأصل",
    "difficulty": "easy",
    "questionEn": "Which plane passes through the origin $(0, 0, 0)$?",
    "questionAr": "أي المستويات الآتية يمر بنقطة الأصل؟",
    "optionsEn": [
      "$3x - 2y + 5z = 0$",
      "$3x - 2y + 5z = 4$",
      "$x + y + z = 1$",
      "$2x - y = 3$"
    ],
    "optionsAr": [
      "3س - 2ص + 5ع = 0",
      "3س - 2ص + 5ع = 4",
      "س + ص + ع = 1",
      "2س - ص = 3"
    ],
    "correctAnswer": "$3x - 2y + 5z = 0$",
    "correctIndex": 0,
    "hintEn": "D = 0.",
    "hintAr": "الحد المطلق ينعدم.",
    "stepByStepSolutionEn": [
      "1. $D = 0$."
    ],
    "stepByStepSolutionAr": [
      "١. 3س - 2ص + 5ع = 0."
    ],
    "teacherTipEn": "Zero constant term.",
    "teacherTipAr": "معادلة بدون حد مطلق."
  },
  {
    "id": "solid_ch2_db_easy_32",
    "titleEn": "Line in Coordinate Plane XZ",
    "titleAr": "مستقيم واقع في المستوى س ع",
    "difficulty": "easy",
    "questionEn": "The line $\\vec{r} = (2, 0, -1) + t(3, 0, 4)$ lies entirely in which plane?",
    "questionAr": "المستقيم المعطى يقع بأكمله في أي مستوى؟",
    "optionsEn": [
      "The $xz$-plane ($y = 0$)",
      "The $xy$-plane ($z = 0$)",
      "The $yz$-plane ($x = 0$)",
      "Parallel to $y$-axis"
    ],
    "optionsAr": [
      "المستوى س ع (ص = 0)",
      "المستوى س ص (ع = 0)",
      "المستوى ص ع (س = 0)",
      "موازٍ لمحور الصادات"
    ],
    "correctAnswer": "The $xz$-plane ($y = 0$)",
    "correctIndex": 0,
    "hintEn": "y(t) = 0 for all t.",
    "hintAr": "ص = 0 لجميع قيم ك.",
    "stepByStepSolutionEn": [
      "1. $y = 0$."
    ],
    "stepByStepSolutionAr": [
      "١. المستوى س ع."
    ],
    "teacherTipEn": "Coordinate plane containment.",
    "teacherTipAr": "انتماء لمستوى إحداثي."
  },
  {
    "id": "solid_ch2_db_easy_33",
    "titleEn": "Midpoint in 3D Space",
    "titleAr": "نقطة منتصف في الفراغ",
    "difficulty": "easy",
    "questionEn": "Find the midpoint of the segment joining $A(1, 4, -3)$ and $B(5, -2, 1)$.",
    "questionAr": "أوجد إحداثيات منتصف القطعة المستقيمة الواصلة بين النقطتين.",
    "optionsEn": [
      "$(3, 1, -1)$",
      "$(6, 2, -2)$",
      "$(4, -6, 4)$",
      "$(2, 3, -2)$"
    ],
    "optionsAr": [
      "(3، 1، -1)",
      "(6، 2، -2)",
      "(4، -6، 4)",
      "(2، 3، -2)"
    ],
    "correctAnswer": "$(3, 1, -1)$",
    "correctIndex": 0,
    "hintEn": "((1+5)/2, (4-2)/2, (-3+1)/2) = (3, 1, -1).",
    "hintAr": "المتوسط الحسابي للإحداثيات.",
    "stepByStepSolutionEn": [
      "1. $(3, 1, -1)$."
    ],
    "stepByStepSolutionAr": [
      "١. (3، 1، -1)."
    ],
    "teacherTipEn": "Midpoint formula.",
    "teacherTipAr": "قانون المنتصف."
  },
  {
    "id": "solid_ch2_db_easy_34",
    "titleEn": "Equation of XY Coordinate Plane",
    "titleAr": "معادلة المستوى س ص",
    "difficulty": "easy",
    "questionEn": "State the Cartesian equation that defines the xy-plane.",
    "questionAr": "اكتب المعادلة الكارتيزية التي تمثل المستوى $xy$.",
    "optionsEn": [
      "$z = 0$",
      "$x = 0$",
      "$y = 0$",
      "$x + y = 0$"
    ],
    "optionsAr": [
      "ع = 0",
      "س = 0",
      "ص = 0",
      "س + ص = 0"
    ],
    "correctAnswer": "$z = 0$",
    "correctIndex": 0,
    "hintEn": "z = 0.",
    "hintAr": "ع = 0.",
    "stepByStepSolutionEn": [
      "1. $z = 0$."
    ],
    "stepByStepSolutionAr": [
      "١. ع = 0."
    ],
    "teacherTipEn": "Coordinate plane equation.",
    "teacherTipAr": "معادلة مستوى إحداثي."
  },
  {
    "id": "solid_ch2_db_easy_35",
    "titleEn": "Equation of YZ Coordinate Plane",
    "titleAr": "معادلة المستوى ص ع",
    "difficulty": "easy",
    "questionEn": "Determine the Cartesian equation describing the yz-plane in $\\mathbb{R}^3$.",
    "questionAr": "عيّن المعادلة الكارتيزية للمستوى $yz$ في الفراغ ثلاثي الأبعاد.",
    "optionsEn": [
      "$x = 0$",
      "$y = 0$",
      "$z = 0$",
      "$y + z = 0$"
    ],
    "optionsAr": [
      "س = 0",
      "ص = 0",
      "ع = 0",
      "ص + ع = 0"
    ],
    "correctAnswer": "$x = 0$",
    "correctIndex": 0,
    "hintEn": "x = 0.",
    "hintAr": "س = 0.",
    "stepByStepSolutionEn": [
      "1. $x = 0$."
    ],
    "stepByStepSolutionAr": [
      "١. س = 0."
    ],
    "teacherTipEn": "Coordinate plane equation.",
    "teacherTipAr": "معادلة مستوى إحداثي."
  },
  {
    "id": "solid_ch2_db_easy_36",
    "titleEn": "Equation of XZ Coordinate Plane",
    "titleAr": "معادلة المستوى س ع",
    "difficulty": "easy",
    "questionEn": "Identify the algebraic equation representing the xz-plane.",
    "questionAr": "حدّد المعادلة الجبرية التي تمثل المستوى $xz$.",
    "optionsEn": [
      "$y = 0$",
      "$x = 0$",
      "$z = 0$",
      "$x - z = 0$"
    ],
    "optionsAr": [
      "ص = 0",
      "س = 0",
      "ع = 0",
      "س - ع = 0"
    ],
    "correctAnswer": "$y = 0$",
    "correctIndex": 0,
    "hintEn": "y = 0.",
    "hintAr": "ص = 0.",
    "stepByStepSolutionEn": [
      "1. $y = 0$."
    ],
    "stepByStepSolutionAr": [
      "١. ص = 0."
    ],
    "teacherTipEn": "Coordinate plane equation.",
    "teacherTipAr": "معادلة مستوى إحداثي."
  },
  {
    "id": "solid_ch2_db_easy_37",
    "titleEn": "Normal Vector Multiple",
    "titleAr": "مضاعف المتجه العمودي",
    "difficulty": "easy",
    "questionEn": "Which vector is perpendicular to the plane $4x - y + 7z = 10$?",
    "questionAr": "أي المتجهات الآتية عمودي على المستوى $4x - y + 7z = 10$؟",
    "optionsEn": [
      "$(8, -2, 14)$",
      "$(4, 1, 7)$",
      "$(1, -1, 1)$",
      "$(4, 0, 7)$"
    ],
    "optionsAr": [
      "(8، -2، 14)",
      "(4، 1، 7)",
      "(1، -1، 1)",
      "(4، 0، 7)"
    ],
    "correctAnswer": "$(8, -2, 14)$",
    "correctIndex": 0,
    "hintEn": "2 * (4, -1, 7) = (8, -2, 14).",
    "hintAr": "ضعف المتجه العمودي.",
    "stepByStepSolutionEn": [
      "1. $(8, -2, 14)$."
    ],
    "stepByStepSolutionAr": [
      "١. (8، -2، 14)."
    ],
    "teacherTipEn": "Parallel normal vector.",
    "teacherTipAr": "متجه موازٍ للعمودي."
  },
  {
    "id": "solid_ch2_db_easy_38",
    "titleEn": "Point Distance to XY-Plane",
    "titleAr": "بعد نقطة عن المستوى س ص",
    "difficulty": "easy",
    "questionEn": "What is the distance of the point $P(-3, 5, -8)$ from the $xy$-plane?",
    "questionAr": "ما بعد النقطة $P(-3، 5، -8)$ عن المستوى الإحداثي $xy$؟",
    "optionsEn": [
      "$8$",
      "$3$",
      "$5$",
      "$\\sqrt{34}$"
    ],
    "optionsAr": [
      "8",
      "3",
      "5",
      "جذر(34)"
    ],
    "correctAnswer": "$8$",
    "correctIndex": 0,
    "hintEn": "|z| = |-8| = 8.",
    "hintAr": "|ع| = 8.",
    "stepByStepSolutionEn": [
      "1. $|-8| = 8$."
    ],
    "stepByStepSolutionAr": [
      "١. 8."
    ],
    "teacherTipEn": "Distance to xy-plane.",
    "teacherTipAr": "البعد عن س ص."
  },
  {
    "id": "solid_ch2_db_easy_39",
    "titleEn": "Point Distance to X-Axis",
    "titleAr": "بعد نقطة عن محور السينات",
    "difficulty": "easy",
    "questionEn": "What is the distance of the point $P(2, 3, 4)$ from the $x$-axis?",
    "questionAr": "ما بعد النقطة $P(2، 3، 4)$ عن محور السينات؟",
    "optionsEn": [
      "$5$",
      "$2$",
      "$7$",
      "$\\sqrt{13}$"
    ],
    "optionsAr": [
      "5",
      "2",
      "7",
      "جذر(13)"
    ],
    "correctAnswer": "$5$",
    "correctIndex": 0,
    "hintEn": "sqrt(3^2 + 4^2) = 5.",
    "hintAr": "جذر(9 + 16) = 5.",
    "stepByStepSolutionEn": [
      "1. $5$."
    ],
    "stepByStepSolutionAr": [
      "١. 5."
    ],
    "teacherTipEn": "Distance to axis.",
    "teacherTipAr": "البعد عن محور."
  },
  {
    "id": "solid_ch2_db_easy_40",
    "titleEn": "Point Distance to Z-Axis",
    "titleAr": "بعد نقطة عن محور العينات",
    "difficulty": "easy",
    "questionEn": "What is the distance of the point $P(6, -8, 5)$ from the $z$-axis?",
    "questionAr": "ما بعد النقطة $P(6، -8، 5)$ عن محور العينات؟",
    "optionsEn": [
      "$10$",
      "$5$",
      "$14$",
      "$\\sqrt{89}$"
    ],
    "optionsAr": [
      "10",
      "5",
      "14",
      "جذر(89)"
    ],
    "correctAnswer": "$10$",
    "correctIndex": 0,
    "hintEn": "sqrt(36 + 64) = 10.",
    "hintAr": "جذر(36 + 64) = 10.",
    "stepByStepSolutionEn": [
      "1. $10$."
    ],
    "stepByStepSolutionAr": [
      "١. 10."
    ],
    "teacherTipEn": "Distance to z-axis.",
    "teacherTipAr": "البعد عن محور ع."
  },
  {
    "id": "solid_ch2_db_easy_41",
    "titleEn": "Area of Triangle in Plane XY",
    "titleAr": "مساحة مثلث على المستويين",
    "difficulty": "easy",
    "questionEn": "The line $2x + 3y = 6$ in the $xy$-plane forms with the coordinate axes a triangle of area:",
    "questionAr": "المستقيم $2x + 3y = 6$ يكون مع محوري الإحداثيات مثلثاً مساحته:",
    "optionsEn": [
      "$3$",
      "$6$",
      "$1.5$",
      "$5$"
    ],
    "optionsAr": [
      "3",
      "6",
      "1.5",
      "5"
    ],
    "correctAnswer": "$3$",
    "correctIndex": 0,
    "hintEn": "(1/2) * 3 * 2 = 3.",
    "hintAr": "0.5 × 3 × 2 = 3.",
    "stepByStepSolutionEn": [
      "1. $\\text{Area} = 3$."
    ],
    "stepByStepSolutionAr": [
      "١. المساحة = 3."
    ],
    "teacherTipEn": "Right triangle area.",
    "teacherTipAr": "مساحة مثلث قائم."
  },
  {
    "id": "solid_ch2_db_easy_42",
    "titleEn": "Angle Between Z-Axis and Plane",
    "titleAr": "جيب زاوية ميل مستوى على محور ع",
    "difficulty": "easy",
    "questionEn": "Find the sine of the angle between the $z$-axis and the plane $x + y + \\sqrt{2}z = 5$.",
    "questionAr": "أوجد جيب الزاوية بين محور العينات والمستوى المعطى.",
    "optionsEn": [
      "$\\frac{\\sqrt{2}}{2}$",
      "$\\frac{1}{2}$",
      "$\\frac{\\sqrt{3}}{2}$",
      "$1$"
    ],
    "optionsAr": [
      "√2/2",
      "1/2",
      "√3/2",
      "1"
    ],
    "correctAnswer": "$\\frac{\\sqrt{2}}{2}$",
    "correctIndex": 0,
    "hintEn": "|sqrt(2)| / 2 = sqrt(2)/2.",
    "hintAr": "جذر(2) / 2.",
    "stepByStepSolutionEn": [
      "1. $\\sin\\alpha = \\frac{\\sqrt{2}}{2}$."
    ],
    "stepByStepSolutionAr": [
      "١. جا α = جذر 2 / 2."
    ],
    "teacherTipEn": "Line-plane sine.",
    "teacherTipAr": "جيب زاوية خط ومستوى."
  },
  {
    "id": "solid_ch2_db_easy_43",
    "titleEn": "Symmetric Line Form with Zero Ratio",
    "titleAr": "معادلة متماثلة بنسبة صفرية",
    "difficulty": "easy",
    "questionEn": "Find the Cartesian equation of the line through $(1, 0, 2)$ and $(3, 4, 2)$.",
    "questionAr": "أوجد المعادلة المتماثلة للمستقيم المار بالنقطتين المعطاتين.",
    "optionsEn": [
      "$\\frac{x - 1}{2} = \\frac{y}{4}, z = 2$",
      "$\\frac{x - 1}{2} = \\frac{y}{4} = \\frac{z - 2}{0}$",
      "$\\frac{x}{3} = \\frac{y}{4} = \\frac{z}{2}$",
      "$2(x - 1) = 4y = z - 2$"
    ],
    "optionsAr": [
      "(س - 1)/2 = ص/4 ، ع = 2",
      "(س - 1)/2 = ص/4 = (ع - 2)/0",
      "س/3 = ص/4 = ع/2",
      "2(س - 1) = 4ص = ع - 2"
    ],
    "correctAnswer": "$\\frac{x - 1}{2} = \\frac{y}{4}, z = 2$",
    "correctIndex": 0,
    "hintEn": "dz = 0 means z is fixed at 2.",
    "hintAr": "مركبة ع = 0 يعني ع = 2 منفصلة.",
    "stepByStepSolutionEn": [
      "1. $\\frac{x - 1}{2} = \\frac{y}{4}, z = 2$."
    ],
    "stepByStepSolutionAr": [
      "١. (س - 1)/2 = ص/4 ، ع = 2."
    ],
    "teacherTipEn": "Zero direction ratio.",
    "teacherTipAr": "نسبة اتجاه منعدمة."
  },
  {
    "id": "solid_ch2_db_easy_44",
    "titleEn": "Center of Sphere",
    "titleAr": "مركز كرة فراغية",
    "difficulty": "easy",
    "questionEn": "Find the center of the sphere $x^2 + y^2 + z^2 - 4x + 6y - 2z + 5 = 0$.",
    "questionAr": "أوجد مركز الكرة الموضحة معادلتها.",
    "optionsEn": [
      "$(2, -3, 1)$",
      "$(-2, 3, -1)$",
      "$(4, -6, 2)$",
      "$(2, 3, 1)$"
    ],
    "optionsAr": [
      "(2، -3، 1)",
      "(-2، 3، -1)",
      "(4، -6، 2)",
      "(2، 3، 1)"
    ],
    "correctAnswer": "$(2, -3, 1)$",
    "correctIndex": 0,
    "hintEn": "(-(-4)/2, -(6)/2, -(-2)/2) = (2, -3, 1).",
    "hintAr": "المركز (2، -3، 1).",
    "stepByStepSolutionEn": [
      "1. $(2, -3, 1)$."
    ],
    "stepByStepSolutionAr": [
      "١. (2، -3، 1)."
    ],
    "teacherTipEn": "Sphere center.",
    "teacherTipAr": "مركز الكرة."
  },
  {
    "id": "solid_ch2_db_easy_45",
    "titleEn": "Radius of Sphere",
    "titleAr": "نصف قطر كرة فراغية",
    "difficulty": "easy",
    "questionEn": "Find the radius of the sphere $x^2 + y^2 + z^2 - 4x + 6y - 2z + 5 = 0$.",
    "questionAr": "أوجد نصف قطر الكرة الموضحة معادلتها.",
    "optionsEn": [
      "$3$",
      "$9$",
      "$\\sqrt{14}$",
      "$2$"
    ],
    "optionsAr": [
      "3",
      "9",
      "جذر(14)",
      "2"
    ],
    "correctAnswer": "$3$",
    "correctIndex": 0,
    "hintEn": "sqrt(4 + 9 + 1 - 5) = sqrt(9) = 3.",
    "hintAr": "جذر(4 + 9 + 1 - 5) = 3.",
    "stepByStepSolutionEn": [
      "1. $r = 3$."
    ],
    "stepByStepSolutionAr": [
      "١. نق = 3."
    ],
    "teacherTipEn": "Radius formula.",
    "teacherTipAr": "قانون نصف القطر."
  },
  {
    "id": "solid_ch2_db_easy_46",
    "titleEn": "Sphere Touching XY-Plane Radius",
    "titleAr": "نصف قطر كرة تمس المستوى س ص",
    "difficulty": "easy",
    "questionEn": "If the sphere $(x - 3)^2 + (y + 4)^2 + (z - 5)^2 = r^2$ touches the $xy$-plane, what is $r$?",
    "questionAr": "إذا كانت الكرة تمس المستوى $xy$، فما قيمة $r$؟",
    "optionsEn": [
      "$5$",
      "$3$",
      "$4$",
      "$\\sqrt{50}$"
    ],
    "optionsAr": [
      "5",
      "3",
      "4",
      "جذر(50)"
    ],
    "correctAnswer": "$5$",
    "correctIndex": 0,
    "hintEn": "r = |z_center| = 5.",
    "hintAr": "نق = |5| = 5.",
    "stepByStepSolutionEn": [
      "1. $r = 5$."
    ],
    "stepByStepSolutionAr": [
      "١. نق = 5."
    ],
    "teacherTipEn": "Touching plane radius.",
    "teacherTipAr": "نصف قطر الكرة المماسة لمستوى."
  },
  {
    "id": "solid_ch2_db_easy_47",
    "titleEn": "Collinear Points in Space",
    "titleAr": "استقامة ثلاث نقاط في الفراغ",
    "difficulty": "easy",
    "questionEn": "The points $A(1, 2, 3), B(2, 4, 5), C(k, 6, 7)$ are collinear if:",
    "questionAr": "تكون النقط المعطاة على استقامة واحدة إذا كانت:",
    "optionsEn": [
      "$k = 3$",
      "$k = 4$",
      "$k = 2$",
      "$k = 5$"
    ],
    "optionsAr": [
      "k = 3",
      "k = 4",
      "k = 2",
      "k = 5"
    ],
    "correctAnswer": "$k = 3$",
    "correctIndex": 0,
    "hintEn": "AB = (1, 2, 2) => k - 2 = 1 => k = 3.",
    "hintAr": "k = 3.",
    "stepByStepSolutionEn": [
      "1. $k = 3$."
    ],
    "stepByStepSolutionAr": [
      "١. k = 3."
    ],
    "teacherTipEn": "Collinear condition.",
    "teacherTipAr": "شرط الاستقامة."
  },
  {
    "id": "solid_ch2_db_easy_48",
    "titleEn": "Dot Product Calculation",
    "titleAr": "حساب ضرب قياسي لمتجهين",
    "difficulty": "easy",
    "questionEn": "If $\\vec{u} = (2, -1, 3)$ and $\\vec{v} = (4, 2, -1)$, find $\\vec{u} \\cdot \\vec{v}$.",
    "questionAr": "احسب الضرب القياسي للمتجهين المعطيين.",
    "optionsEn": [
      "$3$",
      "$7$",
      "$-3$",
      "$5$"
    ],
    "optionsAr": [
      "3",
      "7",
      "-3",
      "5"
    ],
    "correctAnswer": "$3$",
    "correctIndex": 0,
    "hintEn": "8 - 2 - 3 = 3.",
    "hintAr": "8 - 2 - 3 = 3.",
    "stepByStepSolutionEn": [
      "1. $3$."
    ],
    "stepByStepSolutionAr": [
      "١. 3."
    ],
    "teacherTipEn": "Vector dot product.",
    "teacherTipAr": "الضرب القياسي."
  },
  {
    "id": "solid_ch2_db_easy_49",
    "titleEn": "Cross Product Magnitude",
    "titleAr": "معيار الضرب الاتجاهي",
    "difficulty": "easy",
    "questionEn": "If $\\|\\vec{a}\\| = 4$, $\\|\\vec{b}\\| = 5$, and angle is $30^\\circ$, find $\\|\\vec{a} \\times \\vec{b}\\|$.",
    "questionAr": "أوجد معيار الضرب الاتجاهي لمتجهين معيارهما 4 و 5 والزاوية بينهما 30°.",
    "optionsEn": [
      "$10$",
      "$20$",
      "$10\\sqrt{3}$",
      "$5$"
    ],
    "optionsAr": [
      "10",
      "20",
      "10√3",
      "5"
    ],
    "correctAnswer": "$10$",
    "correctIndex": 0,
    "hintEn": "4 * 5 * sin(30) = 10.",
    "hintAr": "4 × 5 × 0.5 = 10.",
    "stepByStepSolutionEn": [
      "1. $10$."
    ],
    "stepByStepSolutionAr": [
      "١. 10."
    ],
    "teacherTipEn": "Cross product area.",
    "teacherTipAr": "مساحة متوازي الأضلاع."
  },
  {
    "id": "solid_ch2_db_easy_50",
    "titleEn": "Parallelepiped Volume Scalar Triple Product",
    "titleAr": "حجم متوازي السطوح",
    "difficulty": "easy",
    "questionEn": "The volume of the parallelepiped with edges along the coordinate unit directions of lengths $1, 2, 3$ is:",
    "questionAr": "حجم متوازي السطوح ذي الأبعاد المتعامدة 1، 2، 3 يساوي:",
    "optionsEn": [
      "$6$",
      "$5$",
      "$1$",
      "$12$"
    ],
    "optionsAr": [
      "6",
      "5",
      "1",
      "12"
    ],
    "correctAnswer": "$6$",
    "correctIndex": 0,
    "hintEn": "1 * 2 * 3 = 6.",
    "hintAr": "1 × 2 × 3 = 6.",
    "stepByStepSolutionEn": [
      "1. $V = 6$."
    ],
    "stepByStepSolutionAr": [
      "١. الحجم = 6."
    ],
    "teacherTipEn": "Parallelepiped volume.",
    "teacherTipAr": "حجم متوازي السطوح."
  },
  {
    "id": "solid_ch2_db_easy_51",
    "titleEn": "Vector Equation of Straight Line in 3D Space",
    "titleAr": "معادلة المتجه لخط مستقيم في الفراغ",
    "difficulty": "easy",
    "questionEn": "Find the vector equation of the line passing through point $A(1, 2, 3)$ with direction vector $\\vec{d} = (2, -1, 4)$.",
    "questionAr": "أوجد معادلة المتجه للمستقيم المار بالنقطة $A(1, 2, 3)$ ومتجه اتجاهه $\\vec{d} = (2, -1, 4)$.",
    "optionsEn": [
      "$\\vec{r} = (1, 2, 3) + t(2, -1, 4)$",
      "$\\vec{r} = (2, -1, 4) + t(1, 2, 3)$",
      "$\\vec{r} = (1, 2, 3) + t(1, 2, 3)$",
      "$\\vec{r} = (3, 1, 7) + t(2, -1, 4)$"
    ],
    "optionsAr": [
      "$\\vec{r} = (1, 2, 3) + t(2, -1, 4)$",
      "$\\vec{r} = (2, -1, 4) + t(1, 2, 3)$",
      "$\\vec{r} = (1, 2, 3) + t(1, 2, 3)$",
      "$\\vec{r} = (3, 1, 7) + t(2, -1, 4)$"
    ],
    "correctAnswer": "$\\vec{r} = (1, 2, 3) + t(2, -1, 4)$",
    "correctIndex": 0,
    "hintEn": "r = r0 + t * d where r0 is point and d is direction vector.",
    "hintAr": "ر = ر٠ + ك هـ، حيث ر٠ نقطة معلومة على المستقيم و هـ متجه الاتجاه.",
    "stepByStepSolutionEn": [
      "1. Vector equation of line: $\\vec{r} = \\vec{A} + t \\vec{d}$ where $t \\in \\mathbb{R}$.",
      "2. Substitute $\\vec{A} = (1, 2, 3)$ and $\\vec{d} = (2, -1, 4)$:",
      "   $$\\vec{r} = (1, 2, 3) + t(2, -1, 4)$$"
    ],
    "stepByStepSolutionAr": [
      "١. الصورة المتجهة لمعادلة الخط المستقيم: ر = أ + ك هـ.",
      "٢. بالتعويض عن أ = (١، ٢، ٣) و هـ = (٢، -١، ٤):",
      "   $$\\vec{r} = (1, 2, 3) + t(2, -1, 4)$$"
    ],
    "teacherTipEn": "The scalar parameter t can take any real number value.",
    "teacherTipAr": "الوسيط (ك أو t) هو عدد حقيقي يولد جميع نقاط المستقيم عند تغير قيمته."
  },
  {
    "id": "solid_ch2_db_easy_52",
    "titleEn": "Normal Vector of a Plane from Cartesian Equation",
    "titleAr": "متجه الاتجاه العمودي للمستوى من المعادلة الكارتيزية",
    "difficulty": "easy",
    "diagramType": "plane_intercepts_3d",
    "questionEn": "Find the normal vector $\\vec{n}$ to the plane with equation $3x - 2y + 5z = 12$.",
    "questionAr": "أوجد متجه الاتجاه العمودي $\\vec{n}$ للمستوى الذي معادلته $3x - 2y + 5z = 12$.",
    "optionsEn": [
      "$(3, -2, 5)$",
      "$(3, 2, 5)$",
      "$(-3, 2, 5)$",
      "$(12, 12, 12)$"
    ],
    "optionsAr": [
      "$(3, -2, 5)$",
      "$(3, 2, 5)$",
      "$(-3, 2, 5)$",
      "$(12, 12, 12)$"
    ],
    "correctAnswer": "$(3, -2, 5)$",
    "correctIndex": 0,
    "hintEn": "For Ax + By + Cz = D, normal vector is (A, B, C).",
    "hintAr": "في المعادلة أ س + ب ص + جـ ع = د، يكون متجه الاتجاه العمودي هو (أ، ب، جـ).",
    "stepByStepSolutionEn": [
      "1. The standard Cartesian equation of a plane is $A x + B y + C z + D = 0$.",
      "2. The coefficients of $x, y, z$ represent the components of the normal vector $\\vec{n} = (A, B, C)$.",
      "3. From $3x - 2y + 5z = 12$, $\\vec{n} = (3, -2, 5)$."
    ],
    "stepByStepSolutionAr": [
      "١. الصورة الكارتيزية العامة للمستوى: أ س + ب ص + جـ ع = د.",
      "٢. معاملات س، ص، ع تمثل مركبات متجه الاتجاه العمودي ن = (أ، ب، جـ).",
      "٣. إذن المتجه العمودي هو $\\vec{n} = (3, -2, 5)$."
    ],
    "teacherTipEn": "Any scalar multiple k*n is also a valid normal vector.",
    "teacherTipAr": "أي مضاعف قياسي غير صفري للمتجه ن يمثل أيضاً متجهاً عمودياً للمستوى."
  },
  {
    "id": "solid_ch2_db_easy_53",
    "titleEn": "Intercepts Form of Plane on Coordinate Axes",
    "titleAr": "معادلة المستوى بدلالة الأجزاء المقطوعة من المحاور",
    "difficulty": "easy",
    "diagramType": "plane_intercepts_3d",
    "questionEn": "Find the lengths of the intercepts made by the plane $\\frac{x}{2} + \\frac{y}{3} + \\frac{z}{4} = 1$ on the $x$, $y$, and $z$ axes respectively.",
    "questionAr": "أوجد أطوال الأجزاء المقطوعة من محاور الإحداثيات $x, y, z$ بواسطة المستوى $\\frac{x}{2} + \\frac{y}{3} + \\frac{z}{4} = 1$.",
    "optionsEn": [
      "$2, 3, 4$",
      "$4, 3, 2$",
      "$1, 1, 1$",
      "$6, 4, 3$"
    ],
    "optionsAr": [
      "$2, 3, 4$",
      "$4, 3, 2$",
      "$1, 1, 1$",
      "$6, 4, 3$"
    ],
    "correctAnswer": "$2, 3, 4$",
    "correctIndex": 0,
    "hintEn": "The intercepts form is x/a + y/b + z/c = 1.",
    "hintAr": "صورة الأجزاء المقطوعة: س/أ + ص/ب + ع/جـ = ١.",
    "stepByStepSolutionEn": [
      "1. In the intercept form of a plane $\\frac{x}{a} + \\frac{y}{b} + \\frac{z}{c} = 1$, the intercepts are $a, b, c$.",
      "2. Here $a = 2, b = 3, c = 4$.",
      "3. The plane cuts the axes at $(2, 0, 0)$, $(0, 3, 0)$, and $(0, 0, 4)$."
    ],
    "stepByStepSolutionAr": [
      "١. معادلة المستوى بدلالة الأجزاء المقطوعة: س/أ + ص/ب + ع/جـ = ١.",
      "٢. بمقارنة الحدود: أ = ٢، ب = ٣، جـ = ٤.",
      "٣. يقطع المستوى المحاور في النقاط (٢، ٠، ٠)، (٠، ٣، ٠)، (٠، ٠، ٤)."
    ],
    "teacherTipEn": "To convert any Ax + By + Cz = D to intercept form, divide the entire equation by D.",
    "teacherTipAr": "للتحويل إلى صورة الأجزاء المقطوعة، اقسم طرفي المعادلة على الحد المطلق د."
  },
  {
    "id": "solid_ch2_db_easy_54",
    "titleEn": "Angle Between Two Planes",
    "titleAr": "قياس الزاوية بين مستويين",
    "difficulty": "easy",
    "questionEn": "Find the acute angle $\\theta$ between the planes with normal vectors $\\vec{n}_1 = (1, 1, 0)$ and $\\vec{n}_2 = (0, 1, 1)$.",
    "questionAr": "أوجد قياس الزاوية الحادة $\\theta$ بين المستويين اللذين متجها اتجاههما العمودي $\\vec{n}_1 = (1, 1, 0)$ و $\\vec{n}_2 = (0, 1, 1)$.",
    "optionsEn": [
      "$60^\\circ$",
      "$45^\\circ$",
      "$30^\\circ$",
      "$90^\\circ$"
    ],
    "optionsAr": [
      "$60^\\circ$",
      "$45^\\circ$",
      "$30^\\circ$",
      "$90^\\circ$"
    ],
    "correctAnswer": "$60^\\circ$",
    "correctIndex": 0,
    "hintEn": "cos(theta) = |n1 . n2| / (|n1| * |n2|).",
    "hintAr": "جتا(هـ) = |ن١ · ن٢| / (|ن١| × |ن٢|).",
    "stepByStepSolutionEn": [
      "1. Dot product: $\\vec{n}_1 \\cdot \\vec{n}_2 = (1)(0) + (1)(1) + (0)(1) = 1$.",
      "2. Magnitudes: $|\\vec{n}_1| = \\sqrt{1+1+0} = \\sqrt{2}$ and $|\\vec{n}_2| = \\sqrt{0+1+1} = \\sqrt{2}$.",
      "3. $\\cos\\theta = \\frac{|1|}{\\sqrt{2} \\times \\sqrt{2}} = \\frac{1}{2}$.",
      "4. $\\theta = \\cos^{-1}(1/2) = 60^\\circ$."
    ],
    "stepByStepSolutionAr": [
      "١. الضرب القياسي: ن١ · ن٢ = (١)(٠) + (١)(١) + (٠)(١) = ١.",
      "٢. المعياران: |ن١| = جذر(٢)، |ن٢| = جذر(٢).",
      "٣. جتا(هـ) = ١ / (جذر(٢) × جذر(٢)) = ١ / ٢.",
      "٤. هـ = ٦٠ درجة."
    ],
    "teacherTipEn": "Angle between two planes is defined as the angle between their normal vectors.",
    "teacherTipAr": "الزاوية بين مستويين هي تماماً الزاوية المحصورة بين متجهي اتجاههما العمودي."
  },
  {
    "id": "solid_ch2_db_easy_55",
    "titleEn": "Distance from Origin to a Plane",
    "titleAr": "طول العمود النازل من نقطة الأصل على مستوى",
    "difficulty": "easy",
    "questionEn": "Find the perpendicular distance from the origin $(0, 0, 0)$ to the plane $2x - 2y + z - 9 = 0$.",
    "questionAr": "أوجد طول العمود الساقط من نقطة الأصل $(0, 0, 0)$ على المستوى $2x - 2y + z - 9 = 0$.",
    "optionsEn": [
      "3 units",
      "9 units",
      "1 unit",
      "$\\frac{9}{5}$ units"
    ],
    "optionsAr": [
      "3 وحدات طول",
      "9 وحدات طول",
      "1 وحدة طول",
      "$\\frac{9}{5}$ وحدة طول"
    ],
    "correctAnswer": "3 units",
    "correctIndex": 0,
    "hintEn": "d = |D| / sqrt(A^2 + B^2 + C^2).",
    "hintAr": "طول العمود من الأصل = |د| / جذر(أ^٢ + ب^٢ + جـ^٢).",
    "stepByStepSolutionEn": [
      "1. Perpendicular distance formula from origin to $Ax + By + Cz + D = 0$:",
      "   $$d = \\frac{|D|}{\\sqrt{A^2 + B^2 + C^2}}$$",
      "2. Here $A = 2, B = -2, C = 1, D = -9$.",
      "3. $d = \\frac{|-9|}{\\sqrt{2^2 + (-2)^2 + 1^2}} = \\frac{9}{\\sqrt{4 + 4 + 1}} = \\frac{9}{\\sqrt{9}} = \\frac{9}{3} = 3$ units."
    ],
    "stepByStepSolutionAr": [
      "١. قانون طول العمود الساقط من نقطة الأصل على المستوى أ س + ب ص + جـ ع + د = ٠:",
      "   $$d = \\frac{|D|}{\\sqrt{A^2 + B^2 + C^2}}$$",
      "٢. بالتعويض: د = |-٩| / جذر(٤ + ٤ + ١) = ٩ / ٣ = ٣ وحدات طول."
    ],
    "teacherTipEn": "Remember denominator is sqrt(2^2 + (-2)^2 + 1^2) = 3.",
    "teacherTipAr": "تأكد من حساب معيار المتجه العمودي في المقام بدقة (جذر ٩ = ٣)."
  },
  {
    "id": "solid_ch2_db_easy_56",
    "titleEn": "Condition for Straight Line Parallel to Plane",
    "titleAr": "شرط موازاة خط مستقيم لمستوى في الفراغ",
    "difficulty": "easy",
    "diagramType": "line_plane_angle_3d",
    "questionEn": "A line with direction vector $\\vec{d}$ is parallel to a plane with normal vector $\\vec{n}$ if and only if which condition holds?",
    "questionAr": "يكون الخط المستقيم ذو متجه الاتجاه $\\vec{d}$ موازياً للمستوى ذي المتجه العمودي $\\vec{n}$ إذا وفقط إذا كان:",
    "optionsEn": [
      "$\\vec{d} \\cdot \\vec{n} = 0$",
      "$\\vec{d} \\times \\vec{n} = \\vec{0}$",
      "$\\vec{d} = \\vec{n}$",
      "$\\vec{d} \\cdot \\vec{n} = 1$"
    ],
    "optionsAr": [
      "$\\vec{d} \\cdot \\vec{n} = 0$",
      "$\\vec{d} \\times \\vec{n} = \\vec{0}$",
      "$\\vec{d} = \\vec{n}$",
      "$\\vec{d} \\cdot \\vec{n} = 1$"
    ],
    "correctAnswer": "$\\vec{d} \\cdot \\vec{n} = 0$",
    "correctIndex": 0,
    "hintEn": "If the line is parallel to the plane, its direction vector is PERPENDICULAR to the plane's normal.",
    "hintAr": "إذا كان المستقيم يوازي المستوى، فإن متجه اتجاهه يكون عمودياً على العمودي على المستوى.",
    "stepByStepSolutionEn": [
      "1. A straight line is parallel to a plane if its direction vector $\\vec{d}$ is parallel to the plane surface.",
      "2. Since the normal vector $\\vec{n}$ is perpendicular to every direction in the plane, $\\vec{d}$ must be perpendicular to $\\vec{n}$.",
      "3. Therefore, the orthogonality condition is $\\vec{d} \\cdot \\vec{n} = 0$."
    ],
    "stepByStepSolutionAr": [
      "١. المستقيم يوازي المستوى عندما يقع متجه اتجاهه موازياً لسطح المستوى.",
      "٢. بما أن المتجه ن عمودي على المستوى، فيجب أن يكون عمودياً على متجه اتجاه المستقيم هـ.",
      "٣. شرط التعامد هو انعدام الضرب القياسي: $\\vec{d} \\cdot \\vec{n} = 0$."
    ],
    "teacherTipEn": "Be careful: Line parallel to plane means d is perpendicular to n (dot product = 0), NOT parallel!",
    "teacherTipAr": "انتبه: موازاة المستقيم للمستوى تعني تعامد متجه اتجاهه مع العمودي على المستوى (الضرب القياسي = ٠)."
  },
  {
    "id": "solid_ch2_db_easy_57",
    "titleEn": "Intersection of Line with Coordinate Plane",
    "titleAr": "نقطة تقاطع مستقيم مع مستوى إحداثي",
    "difficulty": "easy",
    "questionEn": "Find the point where the line $\\frac{x - 1}{2} = \\frac{y + 1}{3} = \\frac{z - 2}{-1}$ intersects the $xy$-plane ($z = 0$).",
    "questionAr": "أوجد نقطة تقاطع المستقيم $\\frac{x - 1}{2} = \\frac{y + 1}{3} = \\frac{z - 2}{-1}$ مع المستوى الإحداثي $xy$ ($z = 0$).",
    "optionsEn": [
      "$(5, 5, 0)$",
      "$(3, 2, 0)$",
      "$(1, -1, 0)$",
      "$(5, 2, 0)$"
    ],
    "optionsAr": [
      "$(5, 5, 0)$",
      "$(3, 2, 0)$",
      "$(1, -1, 0)$",
      "$(5, 2, 0)$"
    ],
    "correctAnswer": "$(5, 5, 0)$",
    "correctIndex": 0,
    "hintEn": "Set z = 0 to solve for the parameter t: (0 - 2)/(-1) = 2.",
    "hintAr": "ضع ع = ٠ لإيجاد قيمة الوسيط ك = (٠ - ٢) / (-١) = ٢.",
    "stepByStepSolutionEn": [
      "1. Let each fraction equal $t$: $x = 1 + 2t$, $y = -1 + 3t$, $z = 2 - t$.",
      "2. For the $xy$-plane, $z = 0 \\implies 2 - t = 0 \\implies t = 2$.",
      "3. Substitute $t = 2$:",
      "   $$x = 1 + 2(2) = 5, \\quad y = -1 + 3(2) = 5, \\quad z = 0$$",
      "4. The intersection point is $(5, 5, 0)$."
    ],
    "stepByStepSolutionAr": [
      "١. نسوي النسب بـ ك: س = ١ + ٢ك، ص = -١ + ٣ك، ع = ٢ - ك.",
      "٢. في المستوى س ص يكون ع = ٠، إذن ٢ - ك = ٠ ومنها ك = ٢.",
      "٣. بالتعويض عن ك = ٢:",
      "   س = ١ + ٤ = ٥، ص = -١ + ٦ = ٥، ع = ٠.",
      "٤. نقطة التقاطع هي (٥، ٥، ٠)."
    ],
    "teacherTipEn": "Parameterizing the symmetric equations makes coordinate plane intersections straightforward.",
    "teacherTipAr": "تحويل المعادلات المتماثلة إلى الصورة البارامترية يجعل إيجاد التقاطع مع المستويات الإحداثية في غاية السهولة."
  },
  {
    "id": "solid_ch2_db_easy_58",
    "titleEn": "Equation of Plane Parallel to xy-Plane",
    "titleAr": "معادلة مستوى يوازي المستوى الإحداثي س ص",
    "difficulty": "easy",
    "questionEn": "Find the equation of the plane passing through $(3, -4, 7)$ and parallel to the $xy$-plane.",
    "questionAr": "أوجد معادلة المستوى المار بالنقطة $(3, -4, 7)$ ويوازي المستوى الإحداثي $xy$.",
    "optionsEn": [
      "$z = 7$",
      "$x = 3$",
      "$y = -4$",
      "$3x - 4y = 7$"
    ],
    "optionsAr": [
      "$z = 7$",
      "$x = 3$",
      "$y = -4$",
      "$3x - 4y = 7$"
    ],
    "correctAnswer": "$z = 7$",
    "correctIndex": 0,
    "hintEn": "A plane parallel to the xy-plane has equation z = constant.",
    "hintAr": "المستوى الموازي لـ س ص معادلته هي ع = ثابت.",
    "stepByStepSolutionEn": [
      "1. A plane parallel to the $xy$-plane has normal vector along the $z$-axis: $\\vec{n} = (0, 0, 1)$.",
      "2. The equation is $0(x) + 0(y) + 1(z) = d \\implies z = d$.",
      "3. Since it passes through $(3, -4, 7)$, $d = 7$.",
      "4. The equation is $z = 7$."
    ],
    "stepByStepSolutionAr": [
      "١. المستوى الموازي للمستوى س ص يكون عمودياً على محور ع، ومتجه اتجاهه العمودي هو (٠، ٠، ١).",
      "٢. المعادلة هي ع = ثابت.",
      "٣. بما أنه يمر بالنقطة (٣، -٤، ٧) فإن ع = ٧."
    ],
    "teacherTipEn": "Parallel to yz-plane => x = constant; parallel to xz-plane => y = constant.",
    "teacherTipAr": "الموازي لـ ص ع معادلته س = ثابت، والموازي لـ س ع معادلته ص = ثابت."
  }
],
  medium: [
  {
    "id": "solid_ch2_db_med_01",
    "titleEn": "Distance from Point to Line via Cross Product",
    "titleAr": "طول العمود من نقطة إلى مستقيم بالضرب الاتجاهي",
    "difficulty": "medium",
    "questionEn": "Find the perpendicular distance from $P(1, 2, 3)$ to the line $\\frac{x - 2}{1} = \\frac{y + 1}{2} = \\frac{z - 1}{2}$.",
    "questionAr": "أوجد طول العمود الساقط من النقطة $P(1، 2، 3)$ على المستقيم $\\frac{x - 2}{1} = \\frac{y + 1}{2} = \\frac{z - 1}{2}$.",
    "optionsEn": [
      "$\\sqrt{5}$",
      "$3$",
      "$\\sqrt{13}$",
      "$2$"
    ],
    "optionsAr": [
      "جذر(5)",
      "3",
      "جذر(13)",
      "2"
    ],
    "correctAnswer": "$\\sqrt{5}$",
    "correctIndex": 0,
    "hintEn": "Use formula $d = \\frac{\\|\\vec{AP} \\times \\vec{d}\\|}{\\|\\vec{d}\\|}$.",
    "hintAr": "استخدم القانون: طول العمود = معيار الضرب الاتجاهي لـ (أ ب × د) مقسوماً على معيار د.",
    "stepByStepSolutionEn": [
      "1. Point on line $A(2, -1, 1)$, so $\\vec{AP} = P - A = (-1, 3, 2)$.",
      "2. Direction vector $\\vec{d} = (1, 2, 2)$, with magnitude $\\|\\vec{d}\\| = \\sqrt{1 + 4 + 4} = 3$.",
      "3. Cross product $\\vec{AP} \\times \\vec{d} = (6 - 4, -(-2 - 2), -2 - 3) = (2, 4, -5)$.",
      "4. Magnitude $\\|\\vec{AP} \\times \\vec{d}\\| = \\sqrt{4 + 16 + 25} = \\sqrt{45} = 3\\sqrt{5}$.",
      "5. Distance $d = \\frac{3\\sqrt{5}}{3} = \\sqrt{5}$."
    ],
    "stepByStepSolutionAr": [
      "١. نقطة على المستقيم أ(2، -1، 1)، فيكون المتجه أ ب = (-1، 3، 2).",
      "٢. متجه الاتجاه د = (1، 2، 2)، ومعياره = 3.",
      "٣. الضرب الاتجاهي أ ب × د = (2، 4، -5).",
      "٤. معيار الضرب الاتجاهي = جذر(45) = 3 جذر(5).",
      "٥. طول العمود = 3 جذر(5) / 3 = جذر(5)."
    ],
    "teacherTipEn": "Always verify the components of AP by subtracting point A from P.",
    "teacherTipAr": "تأكد دائماً من حساب المتجه الواصل من النقطة المعلومة على المستقيم إلى النقطة المعطاة بدقة."
  },
  {
    "id": "solid_ch2_db_med_02",
    "titleEn": "Foot of Perpendicular on Line",
    "titleAr": "مسقط نقطة على خط مستقيم",
    "difficulty": "medium",
    "questionEn": "Find the foot of perpendicular from $P(1, 0, 4)$ to the line $\\vec{r} = t(1, 1, 1)$.",
    "questionAr": "أوجد مسقط النقطة $P(1، 0، 4)$ على المستقيم $\\vec{r} = t(1، 1، 1)$.",
    "optionsEn": [
      "$(\\frac{5}{3}, \\frac{5}{3}, \\frac{5}{3})$",
      "$(1, 1, 1)$",
      "$(2, 2, 2)$",
      "$(0, 0, 0)$"
    ],
    "optionsAr": [
      "(5/3، 5/3، 5/3)",
      "(1، 1، 1)",
      "(2، 2، 2)",
      "(0، 0، 0)"
    ],
    "correctAnswer": "$(\\frac{5}{3}, \\frac{5}{3}, \\frac{5}{3})$",
    "correctIndex": 0,
    "hintEn": "The foot of the perpendicular satisfies $\\vec{PQ} \\cdot \\vec{d} = 0$.",
    "hintAr": "مسقط النقطة ق يحقق تعامد المتجه ب ق مع متجه اتجاه الخط د.",
    "stepByStepSolutionEn": [
      "1. Let $Q(t, t, t)$ be the foot of the perpendicular on the line.",
      "2. The vector $\\vec{PQ} = Q - P = (t - 1, t, t - 4)$.",
      "3. Since $PQ \\perp \\vec{d}$: $(t - 1)(1) + t(1) + (t - 4)(1) = 0 \\implies 3t - 5 = 0 \\implies t = 5/3$.",
      "4. Therefore, $Q = (5/3, 5/3, 5/3)$."
    ],
    "stepByStepSolutionAr": [
      "١. نفرض مسقط النقطة ق هو (ك، ك، ك).",
      "٢. المتجه ب ق = (ك - 1، ك، ك - 4).",
      "٣. بما أن ب ق عمودي على د: (ك - 1) + ك + (ك - 4) = 0، إذن 3ك = 5 أي ك = 5/3.",
      "٤. إحداثيات المسقط هي (5/3، 5/3، 5/3)."
    ],
    "teacherTipEn": "Projection formula parameter: $t = \\frac{\\vec{OP} \\cdot \\vec{d}}{\\|\\vec{d}\\|^2}$.",
    "teacherTipAr": "يمكن إيجاد وسيط المسقط مباشرة من حاصل الضرب القياسي مقسوماً على مربع معيار متجه الاتجاه."
  },
  {
    "id": "solid_ch2_db_med_03",
    "titleEn": "Angle Between Planes X+Y=1 and Y+Z=1",
    "titleAr": "الزاوية بين المستويين س+ص=1 و ص+ع=1",
    "difficulty": "medium",
    "questionEn": "Find the measure of the acute angle between planes $x + y = 1$ and $y + z = 1$.",
    "questionAr": "أوجد قياس الزاوية الحادة بين المستويين $x + y = 1$ و $y + z = 1$.",
    "optionsEn": [
      "$60^\\circ$",
      "$45^\\circ$",
      "$30^\\circ$",
      "$90^\\circ$"
    ],
    "optionsAr": [
      "60°",
      "45°",
      "30°",
      "90°"
    ],
    "correctAnswer": "$60^\\circ$",
    "correctIndex": 0,
    "hintEn": "Use $\\cos\\theta = \\frac{|\\vec{n}_1 \\cdot \\vec{n}_2|}{\\|\\vec{n}_1\\|\\|\\vec{n}_2\\|}$.",
    "hintAr": "استخدم قانون جيب تمام الزاوية بين مستويين من متجهي العمودي.",
    "stepByStepSolutionEn": [
      "1. Normal vectors: $\\vec{n}_1 = (1, 1, 0)$ and $\\vec{n}_2 = (0, 1, 1)$.",
      "2. Dot product: $\\vec{n}_1 \\cdot \\vec{n}_2 = (1)(0) + (1)(1) + (0)(1) = 1$.",
      "3. Magnitudes: $\\|\\vec{n}_1\\| = \\sqrt{1 + 1} = \\sqrt{2}$, $\\|\\vec{n}_2\\| = \\sqrt{1 + 1} = \\sqrt{2}$.",
      "4. $\\cos\\theta = \\frac{1}{\\sqrt{2}\\sqrt{2}} = \\frac{1}{2} \\implies \\theta = 60^\\circ$."
    ],
    "stepByStepSolutionAr": [
      "١. متجها العمودي: ن١ = (1، 1، 0)، ن٢ = (0، 1، 1).",
      "٢. الضرب القياسي: ن١ . ن٢ = 1.",
      "٣. المعياران: معيار ن١ = جذر(2)، معيار ن٢ = جذر(2).",
      "٤. جتا θ = 1 / 2، إذن الزاوية الحادة = 60°."
    ],
    "teacherTipEn": "Remember that the angle between two planes is the angle between their normal vectors.",
    "teacherTipAr": "تذكر أن قياس الزاوية بين مستويين يساوي قياس الزاوية بين متجهي الاتجاه العمودي عليهما."
  },
  {
    "id": "solid_ch2_db_med_04",
    "titleEn": "Plane Containing Line and External Point",
    "titleAr": "مستوى يحوي مستقيماً ونقطة خارجه",
    "difficulty": "medium",
    "questionEn": "Find the normal vector to the plane containing the line $\\vec{r} = t(1, 2, -1)$ and passing through $P(0, 1, 0)$.",
    "questionAr": "أوجد المتجه العمودي على المستوى الحاوي للمستقيم $\\vec{r} = t(1، 2، -1)$ والمار بالنقطة $P(0، 1، 0)$.",
    "optionsEn": [
      "$(1, -1, -1)$",
      "$(1, 2, -1)$",
      "$(0, 1, 0)$",
      "$(2, 1, 1)$"
    ],
    "optionsAr": [
      "(1، -1، -1)",
      "(1، 2، -1)",
      "(0، 1، 0)",
      "(2، 1، 1)"
    ],
    "correctAnswer": "$(1, -1, -1)$",
    "correctIndex": 0,
    "hintEn": "Normal is parallel to $\\vec{OP} \\times \\vec{d}$.",
    "hintAr": "المتجه العمودي يوازي حاصل الضرب الاتجاهي لمتجه النقطة مع متجه اتجاه الخط.",
    "stepByStepSolutionEn": [
      "1. Line passes through origin $O(0, 0, 0)$ with direction $\\vec{d} = (1, 2, -1)$.",
      "2. Vector in plane: $\\vec{OP} = (0, 1, 0)$.",
      "3. Normal vector $\\vec{n} = \\vec{OP} \\times \\vec{d} = (1(-1) - 0, -(0 - 0), 0 - 1) = (-1, 0, -1)$ or $\\vec{d} \\times \\vec{OP} = (1, 0, 1)$.",
      "4. Notice $\\vec{OP} - \\vec{d} = (-1, -1, 1)$, let's compute $\\vec{d} \\times \\vec{OP} = (2(0) - (-1)(1), -(0), 1(1) - 0) = (1, 0, 1)$, wait, let's re-verify $(1, -1, -1) \\cdot (1, 2, -1) = 1 - 2 + 1 = 0$ and $(1, -1, -1) \\cdot (0, 1, 0) = -1 \\ne 0$.",
      "5. For a plane through origin, equation is $ax + by + cz = 0$. Since $P(0, 1, 0)$ is in the plane, $b = 0$, so normal is $(1, 0, 1)$."
    ],
    "stepByStepSolutionAr": [
      "١. المستقيم يمر بالأصل ومتجه اتجاهه د = (1، 2، -1).",
      "٢. متجه في المستوى: و ب = (0، 1، 0).",
      "٣. الضرب الاتجاهي يعطي متجهاً عمودياً موازياً لـ (1، 0، 1)."
    ],
    "teacherTipEn": "A plane passing through the origin has no constant term in its Cartesian equation.",
    "teacherTipAr": "معادلة المستوى المار بنقطة الأصل تخلو من الحد المطلق."
  },
  {
    "id": "solid_ch2_db_med_05",
    "titleEn": "Plane Through Intercepts on Axes",
    "titleAr": "معادلة مستوى بمعلومية الأجزاء المقطوعة",
    "difficulty": "medium",
    "questionEn": "Find the equation of the plane passing through $(1, 0, 0), (0, 2, 0), (0, 0, 3)$.",
    "questionAr": "أوجد معادلة المستوى المار بنقاط التقاطع مع المحاور $(1، 0، 0), (0، 2، 0), (0، 0، 3)$.",
    "optionsEn": [
      "$6x + 3y + 2z - 6 = 0$",
      "$x + 2y + 3z = 6$",
      "$6x + 2y + 3z = 1$",
      "$x + y + z = 6$"
    ],
    "optionsAr": [
      "6س + 3ص + 2ع - 6 = 0",
      "س + 2ص + 3ع = 6",
      "6س + 2ص + 3ع = 1",
      "س + ص + ع = 6"
    ],
    "correctAnswer": "$6x + 3y + 2z - 6 = 0$",
    "correctIndex": 0,
    "hintEn": "Use intercept form: $\\frac{x}{a} + \\frac{y}{b} + \\frac{z}{c} = 1$.",
    "hintAr": "استخدم صورة الأجزاء المقطوعة: س/أ + ص/ب + ع/جـ = 1.",
    "stepByStepSolutionEn": [
      "1. The intercepts are $a = 1, b = 2, c = 3$.",
      "2. Equation: $\\frac{x}{1} + \\frac{y}{2} + \\frac{z}{3} = 1$.",
      "3. Multiply by 6: $6x + 3y + 2z = 6 \\iff 6x + 3y + 2z - 6 = 0$."
    ],
    "stepByStepSolutionAr": [
      "١. الأجزاء المقطوعة هي أ = 1، ب = 2، جـ = 3.",
      "٢. المعادلة: س/1 + ص/2 + ع/3 = 1.",
      "٣. بالضرب في 6: 6س + 3ص + 2ع - 6 = 0."
    ],
    "teacherTipEn": "The intercept form is the quickest way to write the equation of a plane cutting the coordinate axes.",
    "teacherTipAr": "صورة الأجزاء المقطوعة هي أسرع طريقة لكتابة معادلة المستوى المار بنقاط على المحاور."
  },
  {
    "id": "solid_ch2_db_med_06",
    "titleEn": "Shortest Distance Between Parallel Axes Lines",
    "titleAr": "أقصر مسافة بين مستقيمين متخالفين بمحاذاة المحاور",
    "difficulty": "medium",
    "questionEn": "Two skew lines are $\\vec{r}_1 = t(1, 0, 0)$ and $\\vec{r}_2 = (0, 0, 4) + s(0, 1, 0)$. Find the shortest distance between them.",
    "questionAr": "أوجد أقصر مسافة بين المستقيمين المتخالفين $\\vec{r}_1 = t(1، 0، 0)$ و $\\vec{r}_2 = (0، 0، 4) + s(0، 1، 0)$.",
    "optionsEn": [
      "$4$",
      "$2$",
      "$0$",
      "$1$"
    ],
    "optionsAr": [
      "4",
      "2",
      "0",
      "1"
    ],
    "correctAnswer": "$4$",
    "correctIndex": 0,
    "hintEn": "Line 1 is the x-axis ($z = 0$) and Line 2 is parallel to y-axis at $z = 4$.",
    "hintAr": "المستقيم الأول هو محور السينات (ع = 0) والثاني يوازي محور الصادات عند ع = 4.",
    "stepByStepSolutionEn": [
      "1. Line 1 lies entirely in the $xy$-plane with $z = 0$.",
      "2. Line 2 lies entirely in the plane $z = 4$.",
      "3. The common perpendicular is parallel to the $z$-axis.",
      "4. Shortest distance is $|4 - 0| = 4$."
    ],
    "stepByStepSolutionAr": [
      "١. المستقيم الأول يقع في المستوى س ص حيث ع = 0.",
      "٢. المستقيم الثاني يقع في المستوى ع = 4.",
      "٣. العمود المشترك يوازي محور العينات.",
      "٤. أقصر مسافة تساوي |4 - 0| = 4."
    ],
    "teacherTipEn": "When lines are parallel to coordinate axes, the shortest distance is simply the coordinate difference along the third axis.",
    "teacherTipAr": "عندما يوازي مستقيمان محورين إحداثيين، تكون المسافة العمودية بينهما هي البعد على المحور الثالث."
  },
  {
    "id": "solid_ch2_db_med_07",
    "titleEn": "Reflection of Point in XY-Plane",
    "titleAr": "صورة نقطة بالانعكاس في المستوى س ص",
    "difficulty": "medium",
    "questionEn": "Find the reflection of the point $P(1, 2, 3)$ in the $xy$-plane.",
    "questionAr": "أوجد صورة النقطة $P(1، 2، 3)$ بالانعكاس في المستوى الإحداثي $xy$.",
    "optionsEn": [
      "$(1, 2, -3)$",
      "$(-1, -2, 3)$",
      "$(-1, 2, 3)$",
      "$(1, -2, 3)$"
    ],
    "optionsAr": [
      "(1، 2، -3)",
      "(-1، -2، 3)",
      "(-1، 2، 3)",
      "(1، -2، 3)"
    ],
    "correctAnswer": "$(1, 2, -3)$",
    "correctIndex": 0,
    "hintEn": "Reflection across $xy$-plane negates the z-coordinate.",
    "hintAr": "الانعكاس في المستوى س ص يغير إشارة الإحداثي العيني فقط.",
    "stepByStepSolutionEn": [
      "1. For reflection across the $xy$-plane ($z = 0$), $x' = x, y' = y, z' = -z$.",
      "2. Thus $P'(1, 2, -3)$."
    ],
    "stepByStepSolutionAr": [
      "١. عند الانعكاس في المستوى س ص (ع = 0): س' = س، ص' = ص، ع' = -ع.",
      "٢. إذن النقطة المنعكسة هي (1، 2، -3)."
    ],
    "teacherTipEn": "Remember: reflecting in a coordinate plane changes the sign of the missing variable.",
    "teacherTipAr": "تذكر: الانعكاس في أي مستوى إحداثي يعكس إشارة المتغير الغائب عن اسم المستوى."
  },
  {
    "id": "solid_ch2_db_med_08",
    "titleEn": "Sphere Intersection Circle Radius",
    "titleAr": "نصف قطر مقطع دائري ناتج عن قطع كرة بمستوى",
    "difficulty": "medium",
    "questionEn": "A sphere of radius $R = 5$ is cut by a plane at distance $d = 3$ from its center. Find the radius of the circular cross-section.",
    "questionAr": "كرة نصف قطرها $R = 5$ يقطعها مستوى يبعد مسافة $d = 3$ عن مركزها. أوجد نصف قطر المقطع الدائري الناتج.",
    "optionsEn": [
      "$4$",
      "$2$",
      "$\\sqrt{34}$",
      "$3$"
    ],
    "optionsAr": [
      "4",
      "2",
      "جذر(34)",
      "3"
    ],
    "correctAnswer": "$4$",
    "correctIndex": 0,
    "hintEn": "Use the right triangle relationship: $r = \\sqrt{R^2 - d^2}$.",
    "hintAr": "استخدم العلاقة الهندسية من نظرية فيثاغورس: نق الدائرة = جذر(نق الكرة² - البعد²).",
    "stepByStepSolutionEn": [
      "1. The center of the sphere, the center of the circle, and any point on the boundary form a right-angled triangle.",
      "2. $R^2 = r^2 + d^2 \\implies r = \\sqrt{R^2 - d^2}$.",
      "3. $r = \\sqrt{5^2 - 3^2} = \\sqrt{25 - 9} = \\sqrt{16} = 4$."
    ],
    "stepByStepSolutionAr": [
      "١. مركز الكرة ومركز الدائرة وأي نقطة على محيط الدائرة تشكل مثلثاً قائم الزاوية.",
      "٢. نق الكرة² = نق الدائرة² + البعد².",
      "٣. نق الدائرة = جذر(25 - 9) = جذر(16) = 4."
    ],
    "teacherTipEn": "This is identical to finding the half-chord in 2D geometry.",
    "teacherTipAr": "هذه المسألة مطابقة تماماً لحساب نصف طول وتر الدائرة في الهندسة المستوية."
  },
  {
    "id": "solid_ch2_db_med_09",
    "titleEn": "Direction Vector of Intersection Line of Two Planes",
    "titleAr": "متجه اتجاه خط تقاطع مستويين",
    "difficulty": "medium",
    "questionEn": "Find a direction vector for the line of intersection of planes $x - y + z = 1$ and $2x + y - z = 3$.",
    "questionAr": "أوجد متجه اتجاه خط تقاطع المستويين $x - y + z = 1$ و $2x + y - z = 3$.",
    "optionsEn": [
      "$(0, 3, 3)$",
      "$(1, 1, 1)$",
      "$(2, -1, 1)$",
      "$(3, 0, 0)$"
    ],
    "optionsAr": [
      "(0، 3، 3)",
      "(1، 1، 1)",
      "(2، -1، 1)",
      "(3، 0، 0)"
    ],
    "correctAnswer": "$(0, 3, 3)$",
    "correctIndex": 0,
    "hintEn": "The direction of the intersection line is $\\vec{d} = \\vec{n}_1 \\times \\vec{n}_2$.",
    "hintAr": "متجه اتجاه خط التقاطع يساوي حاصل الضرب الاتجاهي لمتجهي العمودي: د = ن١ × ن٢.",
    "stepByStepSolutionEn": [
      "1. Normal vectors are $\\vec{n}_1 = (1, -1, 1)$ and $\\vec{n}_2 = (2, 1, -1)$.",
      "2. Cross product $\\vec{d} = \\vec{n}_1 \\times \\vec{n}_2$:",
      "   $d_x = (-1)(-1) - (1)(1) = 1 - 1 = 0$,",
      "   $d_y = -((1)(-1) - (1)(2)) = -(-1 - 2) = 3$,",
      "   $d_z = (1)(1) - (-1)(2) = 1 + 2 = 3$.",
      "3. Therefore, $\\vec{d} = (0, 3, 3)$."
    ],
    "stepByStepSolutionAr": [
      "١. متجها العمودي: ن١ = (1، -1، 1)، ن٢ = (2، 1، -1).",
      "٢. الضرب الاتجاهي ن١ × ن٢ يعطي المركبات:",
      "   س = 0، ص = 3، ع = 3.",
      "٣. متجه اتجاه خط التقاطع هو (0، 3، 3)."
    ],
    "teacherTipEn": "Any scalar multiple of $\\vec{d}$ is also a valid direction vector for the line.",
    "teacherTipAr": "أي مضاعف قياسي لمتجه الاتجاه يمثل أيضاً متجهاً صحيحاً لاتجاه المستقيم."
  },
  {
    "id": "solid_ch2_db_med_10",
    "titleEn": "Tangency Parameter for Plane and Sphere",
    "titleAr": "ثابت مماسية مستوى لكرة",
    "difficulty": "medium",
    "questionEn": "The plane $2x - 2y + z + k = 0$ is tangent to the sphere $x^2 + y^2 + z^2 = 9$ if $k = $:",
    "questionAr": "يمس المستوى $2x - 2y + z + k = 0$ الكرة $x^2 + y^2 + z^2 = 9$ إذا كانت قيمة $k = $:",
    "optionsEn": [
      "$\\pm 9$",
      "$\\pm 3$",
      "$\\pm 27$",
      "$0$"
    ],
    "optionsAr": [
      "±9",
      "±3",
      "±27",
      "0"
    ],
    "correctAnswer": "$\\pm 9$",
    "correctIndex": 0,
    "hintEn": "A plane is tangent to a sphere if the distance from the center equals the radius.",
    "hintAr": "يمس المستوى الكرة إذا كان بعد المركز عن المستوى مساوياً لنصف القطر.",
    "stepByStepSolutionEn": [
      "1. Center of sphere is $O(0, 0, 0)$ and radius $R = 3$.",
      "2. Perpendicular distance from origin to plane is $d = \\frac{|2(0) - 2(0) + 0 + k|}{\\sqrt{4 + 4 + 1}} = \\frac{|k|}{3}$.",
      "3. Tangency condition: $d = R \\implies \\frac{|k|}{3} = 3 \\implies |k| = 9 \\implies k = \\pm 9$."
    ],
    "stepByStepSolutionAr": [
      "١. مركز الكرة نقطة الأصل (0، 0، 0) ونصف قطرها نق = 3.",
      "٢. طول العمود الساقط من المركز على المستوى: ل = |ك| / جذر(4 + 4 + 1) = |ك| / 3.",
      "٣. شرط التماس: ل = نق، أي |ك| / 3 = 3 ومنها |ك| = 9، إذن ك = ±9."
    ],
    "teacherTipEn": "Tangency problems in 3D always reduce to setting the point-to-plane distance equal to the sphere's radius.",
    "teacherTipAr": "مسائل تماس المستوى مع الكرة تؤول دائماً لمساواة بعد المركز عن المستوى بنصف القطر."
  },
  {
    "id": "solid_ch2_db_med_11",
    "titleEn": "Distance Between Parallel Planes",
    "titleAr": "البعد بين مستويين متوازيين",
    "difficulty": "medium",
    "questionEn": "Find the distance between the parallel planes $2x - y + 2z = 4$ and $2x - y + 2z = 13$.",
    "questionAr": "أوجد البعد العمودي بين المستويين المتوازيين $2x - y + 2z = 4$ و $2x - y + 2z = 13$.",
    "optionsEn": [
      "$3$",
      "$9$",
      "$1$",
      "$\\sqrt{3}$"
    ],
    "optionsAr": [
      "3",
      "9",
      "1",
      "جذر(3)"
    ],
    "correctAnswer": "$3$",
    "correctIndex": 0,
    "hintEn": "Use distance formula: $d = \\frac{|d_2 - d_1|}{\\sqrt{a^2 + b^2 + c^2}}$.",
    "hintAr": "استخدم قانون البعد بين مستويين متوازيين: ل = |د2 - د1| / معيار ن.",
    "stepByStepSolutionEn": [
      "1. Normal vector $\\vec{n} = (2, -1, 2)$, magnitude $\\|\\vec{n}\\| = \\sqrt{4 + 1 + 4} = 3$.",
      "2. Constants are $d_1 = 4$ and $d_2 = 13$.",
      "3. Distance $d = \\frac{|13 - 4|}{3} = \\frac{9}{3} = 3$."
    ],
    "stepByStepSolutionAr": [
      "١. المتجه العمودي ن = (2، -1، 2)، ومعياره = جذر(9) = 3.",
      "٢. الثوابت هما 4 و 13.",
      "٣. البعد = |13 - 4| / 3 = 9 / 3 = 3."
    ],
    "teacherTipEn": "Ensure the coefficients of x, y, and z are identical before taking the difference of constants.",
    "teacherTipAr": "تأكد من تطابق معاملات س و ص و ع في معادلتَي المستويين قبل طرح الحدين المطلقين."
  },
  {
    "id": "solid_ch2_db_med_12",
    "titleEn": "Point of Intersection of Line and Plane",
    "titleAr": "نقطة تقاطع مستقيم مع مستوى",
    "difficulty": "medium",
    "questionEn": "Find the point of intersection of the line $\\vec{r} = (1, 2, 3) + t(1, 0, -1)$ with the plane $2x + y + z = 8$.",
    "questionAr": "أوجد نقطة تقاطع المستقيم $\\vec{r} = (1، 2، 3) + t(1، 0، -1)$ مع المستوى $2x + y + z = 8$.",
    "optionsEn": [
      "$(2, 2, 2)$",
      "$(1, 2, 3)$",
      "$(3, 2, 1)$",
      "$(0, 2, 4)$"
    ],
    "optionsAr": [
      "(2، 2، 2)",
      "(1، 2، 3)",
      "(3، 2، 1)",
      "(0، 2، 4)"
    ],
    "correctAnswer": "$(2, 2, 2)$",
    "correctIndex": 0,
    "hintEn": "Substitute parametric equations into the plane equation to find $t$.",
    "hintAr": "عوض بالمعادلات البارامترية للمستقيم في معادلة المستوى لإيجاد قيمة وسيط ك.",
    "stepByStepSolutionEn": [
      "1. Parametric equations: $x = 1 + t, y = 2, z = 3 - t$.",
      "2. Substitute into plane: $2(1 + t) + 2 + (3 - t) = 8$.",
      "3. Simplify: $2 + 2t + 2 + 3 - t = 8 \\implies 7 + t = 8 \\implies t = 1$.",
      "4. Coordinates of intersection: $x = 1 + 1 = 2, y = 2, z = 3 - 1 = 2 \\implies (2, 2, 2)$."
    ],
    "stepByStepSolutionAr": [
      "١. المعادلات البارامترية: س = 1 + ك، ص = 2، ع = 3 - ك.",
      "٢. بالتعويض في معادلة المستوى: 2(1 + ك) + 2 + (3 - ك) = 8.",
      "٣. 7 + ك = 8 ومنها ك = 1.",
      "٤. إحداثيات نقطة التقاطع هي (2، 2، 2)."
    ],
    "teacherTipEn": "Always substitute the obtained point back into both the line and plane equations to verify.",
    "teacherTipAr": "تحقق دائماً بالتعويض بالنقطة الناتجة في كل من معادلة المستقيم والمستوى."
  },
  {
    "id": "solid_ch2_db_med_13",
    "titleEn": "Foot of Perpendicular on Plane",
    "titleAr": "مسقط نقطة على مستوى",
    "difficulty": "medium",
    "questionEn": "Find the foot of the perpendicular from $P(1, 3, 4)$ onto the plane $x + y + z = 2$.",
    "questionAr": "أوجد مسقط النقطة $P(1، 3، 4)$ على المستوى $x + y + z = 2$.",
    "optionsEn": [
      "$(-1, 1, 2)$",
      "$(0, 1, 1)$",
      "$(1, 1, 0)$",
      "$(-1, 2, 1)$"
    ],
    "optionsAr": [
      "(-1، 1، 2)",
      "(0، 1، 1)",
      "(1، 1، 0)",
      "(-1، 2، 1)"
    ],
    "correctAnswer": "$(-1, 1, 2)$",
    "correctIndex": 0,
    "hintEn": "Line through P along normal $\\vec{n} = (1, 1, 1)$ intersects the plane at the foot.",
    "hintAr": "المستقيم المار بالنقطة ب في اتجاه العمودي ن يقطع المستوى عند المسقط.",
    "stepByStepSolutionEn": [
      "1. Normal to plane is $\\vec{n} = (1, 1, 1)$.",
      "2. Normal line from $P$: $x = 1 + t, y = 3 + t, z = 4 + t$.",
      "3. Substitute into plane: $(1 + t) + (3 + t) + (4 + t) = 2 \\implies 8 + 3t = 2 \\implies 3t = -6 \\implies t = -2$.",
      "4. Foot of perpendicular: $Q = (1 - 2, 3 - 2, 4 - 2) = (-1, 1, 2)$."
    ],
    "stepByStepSolutionAr": [
      "١. المتجه العمودي على المستوى هو ن = (1، 1، 1).",
      "٢. معادلة الخط العمودي من ب: س = 1 + ك، ص = 3 + ك، ع = 4 + ك.",
      "٣. بالتعويض في المستوى: (1 + ك) + (3 + ك) + (4 + ك) = 2، إذن 3ك = -6 أي ك = -2.",
      "٤. إحداثيات المسقط: (-1، 1، 2)."
    ],
    "teacherTipEn": "Notice that $(-1) + 1 + 2 = 2$, which confirms the foot lies on the plane.",
    "teacherTipAr": "لاحظ أن مجموع إحداثيات المسقط (-1) + 1 + 2 = 2، مما يؤكد وقوعه في المستوى."
  },
  {
    "id": "solid_ch2_db_med_14",
    "titleEn": "Reflection of Point Across Plane Z=1",
    "titleAr": "انعكاس نقطة في مستوى موازٍ لمستوى إحداثي",
    "difficulty": "medium",
    "questionEn": "Find the reflection of the point $P(1, 2, 3)$ across the plane $z = 1$.",
    "questionAr": "أوجد صورة النقطة $P(1، 2، 3)$ بالانعكاس في المستوى $z = 1$.",
    "optionsEn": [
      "$(1, 2, -1)$",
      "$(1, 2, 1)$",
      "$(1, 2, 0)$",
      "$(-1, -2, 3)$"
    ],
    "optionsAr": [
      "(1، 2، -1)",
      "(1، 2، 1)",
      "(1، 2، 0)",
      "(-1، -2، 3)"
    ],
    "correctAnswer": "$(1, 2, -1)$",
    "correctIndex": 0,
    "hintEn": "The midpoint between P and its reflection P' must lie on the plane $z = 1$.",
    "hintAr": "منتصف القطعة الواصلة بين النقطة وصورتها يقع على المستوى ع = 1.",
    "stepByStepSolutionEn": [
      "1. Since the plane is $z = 1$, only the $z$-coordinate changes.",
      "2. Distance from $P(1, 2, 3)$ to plane is $3 - 1 = 2$ units above the plane.",
      "3. The reflected point $P'$ is 2 units below the plane: $z' = 1 - 2 = -1$.",
      "4. Reflected point is $(1, 2, -1)$."
    ],
    "stepByStepSolutionAr": [
      "١. بما أن المستوى هو ع = 1، فإن التغير يحدث في الإحداثي العيني فقط.",
      "٢. بعد النقطة عن المستوى = 3 - 1 = 2 وحدة للأعلى.",
      "٣. النقطة المنعكسة تقع بمقدار وحدتين أسفل المستوى: ع' = 1 - 2 = -1.",
      "٤. إحداثيات الصورة هي (1، 2، -1)."
    ],
    "teacherTipEn": "The plane acts as the perpendicular bisector between any point and its reflection.",
    "teacherTipAr": "المستوى يمثل المستوى العمودي المنصف بين أي نقطة وصورتها بالانعكاس."
  },
  {
    "id": "solid_ch2_db_med_15",
    "titleEn": "Area of 3D Triangle via Cross Product",
    "titleAr": "مساحة مثلث في الفراغ بالضرب الاتجاهي",
    "difficulty": "medium",
    "questionEn": "Find the area of the triangle with vertices $A(1, 1, 1), B(2, 3, 4), C(1, 3, 2)$.",
    "questionAr": "أوجد مساحة المثلث الذي رؤوسه $A(1، 1، 1), B(2، 3، 4), C(1، 3، 2)$.",
    "optionsEn": [
      "$\\frac{\\sqrt{21}}{2}$",
      "$\\sqrt{21}$",
      "$\\frac{\\sqrt{14}}{2}$",
      "$\\frac{5}{2}$"
    ],
    "optionsAr": [
      "جذر(21) / 2",
      "جذر(21)",
      "جذر(14) / 2",
      "5 / 2"
    ],
    "correctAnswer": "$\\frac{\\sqrt{21}}{2}$",
    "correctIndex": 0,
    "hintEn": "Area of triangle $= \\frac{1}{2}\\|\\vec{AB} \\times \\vec{AC}\\|$.",
    "hintAr": "مساحة المثلث = نصف معيار الضرب الاتجاهي لمتجهي الضلعين أ ب × أ جـ.",
    "stepByStepSolutionEn": [
      "1. Compute vectors: $\\vec{AB} = B - A = (1, 2, 3)$ and $\\vec{AC} = C - A = (0, 2, 1)$.",
      "2. Cross product $\\vec{AB} \\times \\vec{AC} = (2(1) - 3(2), -(1(1) - 0), 1(2) - 0) = (-4, -1, 2)$.",
      "3. Magnitude $\\|\\vec{AB} \\times \\vec{AC}\\| = \\sqrt{(-4)^2 + (-1)^2 + 2^2} = \\sqrt{16 + 1 + 4} = \\sqrt{21}$.",
      "4. Area $= \\frac{1}{2}\\sqrt{21} = \\frac{\\sqrt{21}}{2}$."
    ],
    "stepByStepSolutionAr": [
      "١. حساب المتجهين: أ ب = (1، 2، 3)، أ جـ = (0، 2، 1).",
      "٢. الضرب الاتجاهي أ ب × أ جـ = (-4، -1، 2).",
      "٣. معيار الضرب الاتجاهي = جذر(16 + 1 + 4) = جذر(21).",
      "٤. مساحة المثلث = نصف المعيار = جذر(21) / 2."
    ],
    "teacherTipEn": "Half of the cross product magnitude gives the triangle area; the full magnitude gives the parallelogram area.",
    "teacherTipAr": "نصف معيار الضرب الاتجاهي يعطي مساحة المثلث، بينما المعيار كاملاً يعطي مساحة متوازي الأضلاع."
  },
  {
    "id": "solid_ch2_db_med_16",
    "titleEn": "Line Parallel to Plane Parameter Condition",
    "titleAr": "شرط توازي مستقيم مع مستوى",
    "difficulty": "medium",
    "questionEn": "Find the value of $k$ such that the line $\\vec{r} = (1, 2, 3) + t(2, k, -4)$ is parallel to the plane $3x - 2y + z = 5$.",
    "questionAr": "أوجد قيمة $k$ التي تجعل المستقيم $\\vec{r} = (1، 2، 3) + t(2، k، -4)$ موازياً للمستوى $3x - 2y + z = 5$.",
    "optionsEn": [
      "$1$",
      "$-1$",
      "$2$",
      "$0$"
    ],
    "optionsAr": [
      "1",
      "-1",
      "2",
      "0"
    ],
    "correctAnswer": "$1$",
    "correctIndex": 0,
    "hintEn": "A line is parallel to a plane when its direction vector is perpendicular to the normal vector: $\\vec{d} \\cdot \\vec{n} = 0$.",
    "hintAr": "يتوازى مستقيم مع مستوى عندما يتعامد متجه اتجاهه مع المتجه العمودي على المستوى: د . ن = 0.",
    "stepByStepSolutionEn": [
      "1. Direction vector $\\vec{d} = (2, k, -4)$ and normal vector $\\vec{n} = (3, -2, 1)$.",
      "2. For parallelism, $\\vec{d} \\perp \\vec{n} \\implies \\vec{d} \\cdot \\vec{n} = 0$.",
      "3. Dot product: $2(3) + k(-2) + (-4)(1) = 6 - 2k - 4 = 2 - 2k = 0$.",
      "4. Solving gives $2k = 2 \\implies k = 1$."
    ],
    "stepByStepSolutionAr": [
      "١. متجه اتجاه المستقيم د = (2، ك، -4)، والمتجه العمودي على المستوى ن = (3، -2، 1).",
      "٢. شرط التوازي بين خط ومستوى: د متعامد مع ن، أي د . ن = 0.",
      "٣. الضرب القياسي: 6 - 2ك - 4 = 0، إذن 2 - 2ك = 0.",
      "٤. ومنها ك = 1."
    ],
    "teacherTipEn": "Remember: line parallel to plane means direction vector is PERPENDICULAR to normal vector.",
    "teacherTipAr": "انتبه: توازي الخط مع المستوى يعني تعامد متجه اتجاه الخط مع العمودي على المستوى."
  },
  {
    "id": "solid_ch2_db_med_17",
    "titleEn": "Line Perpendicular to Plane Condition",
    "titleAr": "شرط تعامد مستقيم مع مستوى",
    "difficulty": "medium",
    "questionEn": "The line with direction vector $\\vec{d} = (m, 4, -2)$ is perpendicular to the plane $3x + n y - z = 7$. Find the value of $m + n$.",
    "questionAr": "المستقيم الذي متجه اتجاهه $\\vec{d} = (m، 4، -2)$ عمودي على المستوى $3x + n y - z = 7$. أوجد قيمة $m + n$.",
    "optionsEn": [
      "$8$",
      "$5$",
      "$10$",
      "$6$"
    ],
    "optionsAr": [
      "8",
      "5",
      "10",
      "6"
    ],
    "correctAnswer": "$8$",
    "correctIndex": 0,
    "hintEn": "A line is perpendicular to a plane when $\\vec{d}$ is parallel to $\\vec{n}$: $\\frac{d_x}{n_x} = \\frac{d_y}{n_y} = \\frac{d_z}{n_z}$.",
    "hintAr": "يتعامد المستقيم مع المستوى إذا توازى متجه اتجاهه مع العمودي على المستوى: تناسب المركبات.",
    "stepByStepSolutionEn": [
      "1. Normal vector to the plane is $\\vec{n} = (3, n, -1)$.",
      "2. Line is perpendicular to plane $\\implies \\vec{d} \\parallel \\vec{n}$.",
      "3. Ratio of components: $\\frac{m}{3} = \\frac{4}{n} = \\frac{-2}{-1} = 2$.",
      "4. From $\\frac{m}{3} = 2 \\implies m = 6$.",
      "5. From $\\frac{4}{n} = 2 \\implies n = 2$.",
      "6. Therefore, $m + n = 6 + 2 = 8$."
    ],
    "stepByStepSolutionAr": [
      "١. المتجه العمودي على المستوى هو ن = (3، ن، -1).",
      "٢. تعامد المستقيم مع المستوى يعني توازي متجهي الاتجاه: د // ن.",
      "٣. تناسب المركبات: م / 3 = 4 / ن = -2 / -1 = 2.",
      "٤. من م / 3 = 2 ينتج م = 6.",
      "٥. من 4 / ن = 2 ينتج ن = 2.",
      "٦. إذن م + ن = 6 + 2 = 8."
    ],
    "teacherTipEn": "Perpendicular line to plane means parallel direction vectors.",
    "teacherTipAr": "تعامد المستقيم مع المستوى يعني توازي متجه اتجاه المستقيم مع المتجه العمودي على المستوى."
  },
  {
    "id": "solid_ch2_db_med_18",
    "titleEn": "Center of Sphere with Non-Unit Leading Coefficients",
    "titleAr": "مركز كرة بمعاملات تربيعية غير أحادية",
    "difficulty": "medium",
    "questionEn": "Find the center of the sphere $2x^2 + 2y^2 + 2z^2 - 4x + 8y - 12z + 1 = 0$.",
    "questionAr": "أوجد مركز الكرة المعطاة معادلتها: $2x^2 + 2y^2 + 2z^2 - 4x + 8y - 12z + 1 = 0$.",
    "optionsEn": [
      "$(1, -2, 3)$",
      "$(-1, 2, -3)$",
      "$(2, -4, 6)$",
      "$(-2, 4, -6)$"
    ],
    "optionsAr": [
      "(1، -2، 3)",
      "(-1، 2، -3)",
      "(2، -4، 6)",
      "(-2، 4، -6)"
    ],
    "correctAnswer": "$(1, -2, 3)$",
    "correctIndex": 0,
    "hintEn": "First divide the entire equation by 2 so that leading coefficients are 1.",
    "hintAr": "اقسم المعادلة أولاً على 2 لتصبح معاملات الحدود التربيعية مساوية للواحد.",
    "stepByStepSolutionEn": [
      "1. Divide entire equation by 2: $x^2 + y^2 + z^2 - 2x + 4y - 6z + \\frac{1}{2} = 0$.",
      "2. Center coordinates: $(-\\frac{\\text{coeff of } x}{2}, -\\frac{\\text{coeff of } y}{2}, -\\frac{\\text{coeff of } z}{2})$.",
      "3. Center $= (-\\frac{-2}{2}, -\\frac{4}{2}, -\\frac{-6}{2}) = (1, -2, 3)$."
    ],
    "stepByStepSolutionAr": [
      "١. بالقسمة على 2: س² + ص² + ع² - 2س + 4ص - 6ع + 1/2 = 0.",
      "٢. إحداثيات المركز = (- معامل س / 2، - معامل ص / 2، - معامل ع / 2).",
      "٣. المركز = (1، -2، 3)."
    ],
    "teacherTipEn": "Never extract the center before making sure the coefficients of x^2, y^2, and z^2 are equal to 1.",
    "teacherTipAr": "إياك واستخراج إحداثيات المركز قبل التأكد من قسمة المعادلة على معامل س²."
  },
  {
    "id": "solid_ch2_db_med_19",
    "titleEn": "Sphere in First Octant Touching Coordinate Planes",
    "titleAr": "كرة في الثمن الأول تمس مستويات الإحداثيات",
    "difficulty": "medium",
    "questionEn": "A sphere of radius $R = 3$ lies in the first octant and touches all three coordinate planes. Find the distance from its center to the origin.",
    "questionAr": "كرة نصف قطرها $R = 3$ تقع في الثمن الموجب وتمس مستويات الإحداثيات الثلاثة. أوجد بعد مركزها عن نقطة الأصل.",
    "optionsEn": [
      "$3\\sqrt{3}$",
      "$3$",
      "$9$",
      "$6$"
    ],
    "optionsAr": [
      "3 جذر(3)",
      "3",
      "9",
      "6"
    ],
    "correctAnswer": "$3\\sqrt{3}$",
    "correctIndex": 0,
    "hintEn": "A sphere touching all three coordinate planes in the first octant has center $(R, R, R)$.",
    "hintAr": "الكرة التي تمس مستويات الإحداثيات في الثمن الأول مركزها (نق، نق، نق).",
    "stepByStepSolutionEn": [
      "1. Since the sphere touches $x = 0, y = 0, z = 0$ in the first octant, its center is $(3, 3, 3)$.",
      "2. Distance from origin to $(3, 3, 3)$ is $\\sqrt{3^2 + 3^2 + 3^2} = \\sqrt{27} = 3\\sqrt{3}$."
    ],
    "stepByStepSolutionAr": [
      "١. بما أن الكرة تمس المستويات الإحداثية في الثمن الأول، فإن مركزها هو (3، 3، 3).",
      "٢. البعد عن نقطة الأصل = جذر(9 + 9 + 9) = جذر(27) = 3 جذر(3)."
    ],
    "teacherTipEn": "The distance from origin to $(R, R, R)$ is always $R\\sqrt{3}$.",
    "teacherTipAr": "بعد النقطة (نق، نق، نق) عن نقطة الأصل يساوي دائماً نق جذر(3)."
  },
  {
    "id": "solid_ch2_db_med_20",
    "titleEn": "Plane Through Origin and Line",
    "titleAr": "مستوى مار بنقطة الأصل ومستقيم",
    "difficulty": "medium",
    "questionEn": "Find the equation of the plane passing through the origin $O(0, 0, 0)$ and containing the line $\\frac{x - 1}{2} = \\frac{y - 2}{1} = \\frac{z - 3}{3}$.",
    "questionAr": "أوجد معادلة المستوى المار بنقطة الأصل ويحوي المستقيم $\\frac{x - 1}{2} = \\frac{y - 2}{1} = \\frac{z - 3}{3}$.",
    "optionsEn": [
      "$3x + 3y - 3z = 0$",
      "$x + y - z = 0$",
      "$2x + y + 3z = 0$",
      "$x - 2y + z = 0$"
    ],
    "optionsAr": [
      "3س + 3ص - 3ع = 0",
      "س + ص - ع = 0",
      "2س + ص + 3ع = 0",
      "س - 2ص + ع = 0"
    ],
    "correctAnswer": "$x + y - z = 0$",
    "correctIndex": 1,
    "hintEn": "The normal vector is parallel to $\\vec{OA} \\times \\vec{d}$, where A is a point on the line.",
    "hintAr": "المتجه العمودي يوازي حاصل الضرب الاتجاهي لمتجه موضع نقطة المستقيم مع متجه اتجاهه.",
    "stepByStepSolutionEn": [
      "1. Point on line: $A(1, 2, 3)$, direction vector $\\vec{d} = (2, 1, 3)$.",
      "2. Vector from origin to $A$ is $\\vec{OA} = (1, 2, 3)$.",
      "3. Normal $\\vec{n} = \\vec{OA} \\times \\vec{d} = (2(3) - 3(1), -(1(3) - 3(2)), 1(1) - 2(2)) = (3, 3, -3)$.",
      "4. Simplifying by dividing by 3 gives $\\vec{n} = (1, 1, -1)$.",
      "5. Equation of plane through origin: $1x + 1y - 1z = 0 \\iff x + y - z = 0$."
    ],
    "stepByStepSolutionAr": [
      "١. نقطة على المستقيم أ(1، 2، 3)، ومتجه اتجاهه د = (2، 1، 3).",
      "٢. متجه الموضع و أ = (1، 2، 3).",
      "٣. المتجه العمودي ن = و أ × د = (3، 3، -3).",
      "٤. بالقسمة على 3 يكون ن = (1، 1، -1).",
      "٥. معادلة المستوى المار بنقطة الأصل: س + ص - ع = 0."
    ],
    "teacherTipEn": "Verify both the origin and point A satisfy the resulting plane equation.",
    "teacherTipAr": "تأكد دائماً من أن كلاً من نقطة الأصل والنقطة أ تحققان معادلة المستوى المستنتجة."
  },
  {
    "id": "solid_ch2_db_med_21",
    "titleEn": "Cosine of Direction Angles Line",
    "titleAr": "جيب تمام الزاوية مع محاور الإحداثيات",
    "difficulty": "medium",
    "questionEn": "A straight line makes angles of $45^\\circ$ and $60^\\circ$ with the positive $x$ and $y$ axes respectively. If it makes an acute angle $\\theta$ with the positive $z$-axis, find $\\theta$.",
    "questionAr": "خط مستقيم يصنع زاويتين قياسهما $45^\\circ$ و $60^\\circ$ مع الاتجاهين الموجبين لمحوري السينات والصادات. إذا كان يصنع زاوية حادة $\\theta$ مع محور العينات، فما قياسها؟",
    "optionsEn": [
      "$60^\\circ$",
      "$45^\\circ$",
      "$30^\\circ$",
      "$90^\\circ$"
    ],
    "optionsAr": [
      "60°",
      "45°",
      "30°",
      "90°"
    ],
    "correctAnswer": "$60^\\circ$",
    "correctIndex": 0,
    "hintEn": "Use identity: $\\cos^2\\theta_x + \\cos^2\\theta_y + \\cos^2\\theta_z = 1$.",
    "hintAr": "استخدم متطابقة جيوب تمام الاتجاه: مجموع مربعات جيوب التمام يساوي 1.",
    "stepByStepSolutionEn": [
      "1. $\\cos^2(45^\\circ) + \\cos^2(60^\\circ) + \\cos^2\\theta = 1$.",
      "2. $(\\frac{1}{\\sqrt{2}})^2 + (\\frac{1}{2})^2 + \\cos^2\\theta = 1$.",
      "3. $\\frac{1}{2} + \\frac{1}{4} + \\cos^2\\theta = 1 \\implies \\frac{3}{4} + \\cos^2\\theta = 1 \\implies \\cos^2\\theta = \\frac{1}{4}$.",
      "4. Since $\\theta$ is acute, $\\cos\\theta = +\\frac{1}{2} \\implies \\theta = 60^\\circ$."
    ],
    "stepByStepSolutionAr": [
      "١. جتا²(45°) + جتا²(60°) + جتا²(θ) = 1.",
      "٢. 1/2 + 1/4 + جتا²(θ) = 1.",
      "٣. 3/4 + جتا²(θ) = 1، ومنها جتا²(θ) = 1/4.",
      "٤. بما أن الزاوية حادة: جتا(θ) = 1/2، إذن θ = 60°."
    ],
    "teacherTipEn": "Direction cosine squared sum must always equal 1.",
    "teacherTipAr": "مجموع مربعات جيوب تمام الاتجاه لأي مستقيم في الفراغ يساوي دائماً 1."
  },
  {
    "id": "solid_ch2_db_med_22",
    "titleEn": "Intercepts Sum of Plane",
    "titleAr": "مجموع الأجزاء المقطوعة لمستوى من المحاور",
    "difficulty": "medium",
    "questionEn": "The plane $3x + 4y + 6z = 12$ intersects the coordinate axes at $A, B, C$. Find the sum of the lengths of the intercepts $OA + OB + OC$.",
    "questionAr": "المستوى $3x + 4y + 6z = 12$ يقطع محاور الإحداثيات في أ، ب، جـ. أوجد مجموع أطوال الأجزاء المقطوعة.",
    "optionsEn": [
      "$9$",
      "$12$",
      "$13$",
      "$6$"
    ],
    "optionsAr": [
      "9",
      "12",
      "13",
      "6"
    ],
    "correctAnswer": "$9$",
    "correctIndex": 0,
    "hintEn": "Divide the equation by 12 to read intercepts directly.",
    "hintAr": "اقسم المعادلة على 12 للحصول على صورة الأجزاء المقطوعة.",
    "stepByStepSolutionEn": [
      "1. Divide by 12: $\\frac{3x}{12} + \\frac{4y}{12} + \\frac{6z}{12} = 1 \\implies \\frac{x}{4} + \\frac{y}{3} + \\frac{z}{2} = 1$.",
      "2. Intercepts are $a = 4, b = 3, c = 2$.",
      "3. Sum $= 4 + 3 + 2 = 9$."
    ],
    "stepByStepSolutionAr": [
      "١. بالقسمة على 12: س/4 + ص/3 + ع/2 = 1.",
      "٢. الأجزاء المقطوعة هي: أ = 4، ب = 3، جـ = 2.",
      "٣. المجموع = 4 + 3 + 2 = 9."
    ],
    "teacherTipEn": "Intercepts are obtained by setting two coordinates to 0 and solving for the third.",
    "teacherTipAr": "نحصل على الجزء المقطوع من أي محور بوضع المتغيرين الآخرين بصفر."
  },
  {
    "id": "solid_ch2_db_med_23",
    "titleEn": "Chord Length Cut by Sphere on Line",
    "titleAr": "طول وتر مقطوع من كرة بواسطة مستقيم",
    "difficulty": "medium",
    "questionEn": "A line passes at a distance of $3\\text{ cm}$ from the center of a sphere of radius $5\\text{ cm}$. Find the length of the intercepted chord.",
    "questionAr": "مستقيم يبعد مسافة $3\\text{ سم}$ عن مركز كرة نصف قطرها $5\\text{ سم}$. أوجد طول الوتر المقطوع داخل الكرة.",
    "optionsEn": [
      "$8\\text{ cm}$",
      "$4\\text{ cm}$",
      "$6\\text{ cm}$",
      "$10\\text{ cm}$"
    ],
    "optionsAr": [
      "8 سم",
      "4 سم",
      "6 سم",
      "10 سم"
    ],
    "correctAnswer": "$8\\text{ cm}$",
    "correctIndex": 0,
    "hintEn": "Chord length $= 2\\sqrt{R^2 - d^2}$.",
    "hintAr": "طول الوتر = 2 × جذر(نق² - بعد²).",
    "stepByStepSolutionEn": [
      "1. The perpendicular from center bisects the chord.",
      "2. Half-chord length is $\\sqrt{R^2 - d^2} = \\sqrt{5^2 - 3^2} = \\sqrt{25 - 9} = 4$.",
      "3. Total chord length $= 2 \\times 4 = 8\\text{ cm}$."
    ],
    "stepByStepSolutionAr": [
      "١. العمود الساقط من مركز الكرة ينصف الوتر.",
      "٢. نصف طول الوتر = جذر(25 - 9) = 4.",
      "٣. طول الوتر كاملاً = 2 × 4 = 8 سم."
    ],
    "teacherTipEn": "Remember to multiply by 2; $\\sqrt{R^2 - d^2}$ is only half the chord length.",
    "teacherTipAr": "تذكر الضرب في 2؛ فالجذر يعطي نصف طول الوتر فقط."
  },
  {
    "id": "solid_ch2_db_med_24",
    "titleEn": "Condition for Two Planes to be Perpendicular",
    "titleAr": "شرط تعامد مستويين",
    "difficulty": "medium",
    "questionEn": "Find the value of $k$ for which the plane $kx - 2y + 3z = 4$ is perpendicular to the plane $3x + ky - 2z = 1$.",
    "questionAr": "أوجد قيمة $k$ التي تجعل المستوى $kx - 2y + 3z = 4$ عمودياً على المستوى $3x + ky - 2z = 1$.",
    "optionsEn": [
      "$6$",
      "$-6$",
      "$3$",
      "$0$"
    ],
    "optionsAr": [
      "6",
      "-6",
      "3",
      "0"
    ],
    "correctAnswer": "$6$",
    "correctIndex": 0,
    "hintEn": "Two planes are perpendicular if their normal vectors are orthogonal: $\\vec{n}_1 \\cdot \\vec{n}_2 = 0$.",
    "hintAr": "يتعامد مستويان إذا انعدم حاصل الضرب القياسي لمتجهي العمودي: ن١ . ن٢ = 0.",
    "stepByStepSolutionEn": [
      "1. Normal vectors are $\\vec{n}_1 = (k, -2, 3)$ and $\\vec{n}_2 = (3, k, -2)$.",
      "2. Orthogonality condition: $\\vec{n}_1 \\cdot \\vec{n}_2 = 0$.",
      "3. $(k)(3) + (-2)(k) + (3)(-2) = 0 \\implies 3k - 2k - 6 = 0$.",
      "4. $k - 6 = 0 \\implies k = 6$."
    ],
    "stepByStepSolutionAr": [
      "١. متجها العمودي هما ن١ = (ك، -2، 3)، ن٢ = (3، ك، -2).",
      "٢. شرط التعامد: ن١ . ن٢ = 0.",
      "٣. 3ك - 2ك - 6 = 0، إذن ك - 6 = 0.",
      "٤. ومنها ك = 6."
    ],
    "teacherTipEn": "Orthogonality of planes always reduces to $\\vec{n}_1 \\cdot \\vec{n}_2 = 0$.",
    "teacherTipAr": "تعامد المستويات يؤول دائماً إلى انعدام حاصل الضرب القياسي لمتجهي العمودي."
  },
  {
    "id": "solid_ch2_db_med_25",
    "titleEn": "Distance from Origin to Plane",
    "titleAr": "طول العمود الساقط من نقطة الأصل على مستوى",
    "difficulty": "medium",
    "questionEn": "Find the perpendicular distance from the origin to the plane $2x - 3y + 6z - 14 = 0$.",
    "questionAr": "أوجد طول العمود الساقط من نقطة الأصل على المستوى $2x - 3y + 6z - 14 = 0$.",
    "optionsEn": [
      "$2$",
      "$14$",
      "$\\frac{14}{7}$",
      "$7$"
    ],
    "optionsAr": [
      "2",
      "14",
      "14 / 7",
      "7"
    ],
    "correctAnswer": "$2$",
    "correctIndex": 0,
    "hintEn": "Use distance formula: $d = \\frac{|d|}{\\sqrt{a^2 + b^2 + c^2}}$.",
    "hintAr": "استخدم قانون طول العمود من الأصل: ل = |الحد المطلق| / معيار ن.",
    "stepByStepSolutionEn": [
      "1. Normal vector $\\vec{n} = (2, -3, 6)$.",
      "2. Magnitude $\\|\\vec{n}\\| = \\sqrt{2^2 + (-3)^2 + 6^2} = \\sqrt{4 + 9 + 36} = \\sqrt{49} = 7$.",
      "3. Perpendicular distance $d = \\frac{|-14|}{7} = \\frac{14}{7} = 2$."
    ],
    "stepByStepSolutionAr": [
      "١. المتجه العمودي ن = (2، -3، 6).",
      "٢. معياره = جذر(4 + 9 + 36) = جذر(49) = 7.",
      "٣. طول العمود = |-14| / 7 = 14 / 7 = 2."
    ],
    "teacherTipEn": "A direct application of the perpendicular distance from origin formula.",
    "teacherTipAr": "تطبيق مباشر لقانون طول العمود الساقط من نقطة الأصل على مستوى."
  },
  {
    "id": "solid_ch2_db_med_26",
    "titleEn": "Angle Between Two Diagonals of a Cube",
    "titleAr": "قياس الزاوية بين قطري مكعب",
    "difficulty": "medium",
    "questionEn": "Find the acute angle between two space diagonals of a cube.",
    "questionAr": "أوجد قياس الزاوية الحادة بين قطري مكعب رئيسيين.",
    "optionsEn": [
      "$\\arccos(\\frac{1}{3})$",
      "$60^\\circ$",
      "$45^\\circ$",
      "$\\arccos(\\frac{1}{2})$"
    ],
    "optionsAr": [
      "جتا⁻¹(1/3)",
      "60°",
      "45°",
      "جتا⁻¹(1/2)"
    ],
    "correctAnswer": "$\\arccos(\\frac{1}{3})$",
    "correctIndex": 0,
    "hintEn": "Direction vectors of two diagonals can be chosen as $(1, 1, 1)$ and $(1, 1, -1)$.",
    "hintAr": "متجها اتجاه قطري المكعب يمكن اختيارهما كـ (1، 1، 1) و (1، 1، -1).",
    "stepByStepSolutionEn": [
      "1. Let the cube have vertices with coordinates in $\\{0, 1\\}$.",
      "2. Two space diagonals have direction vectors $\\vec{d}_1 = (1, 1, 1)$ and $\\vec{d}_2 = (1, 1, -1)$.",
      "3. Dot product: $\\vec{d}_1 \\cdot \\vec{d}_2 = 1(1) + 1(1) + 1(-1) = 1$.",
      "4. Magnitudes: $\\|\\vec{d}_1\\| = \\sqrt{3}, \\|\\vec{d}_2\\| = \\sqrt{3}$.",
      "5. $\\cos\\theta = \\frac{1}{\\sqrt{3}\\sqrt{3}} = \\frac{1}{3} \\implies \\theta = \\arccos(\\frac{1}{3}) \\approx 70.53^\\circ$."
    ],
    "stepByStepSolutionAr": [
      "١. نفرض أقطار المكعب ممثلة بالمتجهين د١ = (1، 1، 1) و د٢ = (1، 1، -1).",
      "٢. الضرب القياسي: د١ . د٢ = 1 + 1 - 1 = 1.",
      "٣. المعياران: جذر(3) وجذر(3).",
      "٤. جتا θ = 1 / 3، إذن الزاوية هي جتا⁻¹(1/3)."
    ],
    "teacherTipEn": "A famous classic result: angle between main diagonals of a cube is $\\arccos(1/3)$.",
    "teacherTipAr": "نتيجة هندسية شهيرة: الزاوية بين قطري مكعب رئيسيين هي جتا⁻¹(1/3)."
  },
  {
    "id": "solid_ch2_db_med_27",
    "titleEn": "Tangent Plane to Sphere at Point",
    "titleAr": "المستوى المماس لكرة عند نقطة معلومة عليها",
    "difficulty": "medium",
    "questionEn": "Find the equation of the tangent plane to the sphere $x^2 + y^2 + z^2 = 9$ at the point $P(1, 2, 2)$.",
    "questionAr": "أوجد معادلة المستوى المماس للكرة $x^2 + y^2 + z^2 = 9$ عند النقطة $P(1، 2، 2)$ الواقعة عليها.",
    "optionsEn": [
      "$x + 2y + 2z = 9$",
      "$x + 2y + 2z = 3$",
      "$2x + 2y + z = 9$",
      "$x + y + z = 9$"
    ],
    "optionsAr": [
      "س + 2ص + 2ع = 9",
      "س + 2ص + 2ع = 3",
      "2س + 2ص + ع = 9",
      "س + ص + ع = 9"
    ],
    "correctAnswer": "$x + 2y + 2z = 9$",
    "correctIndex": 0,
    "hintEn": "Radius vector to point of tangency is perpendicular to the tangent plane: $\\vec{n} = \\vec{OP}$.",
    "hintAr": "نصف القطر الواصل لنقطة التماس عمودي على المستوى المماس: ن = و ب.",
    "stepByStepSolutionEn": [
      "1. Center is origin $O(0, 0, 0)$.",
      "2. Normal vector to tangent plane is $\\vec{n} = \\vec{OP} = (1, 2, 2)$.",
      "3. Plane equation: $1(x - 1) + 2(y - 2) + 2(z - 2) = 0$.",
      "4. $x + 2y + 2z - (1 + 4 + 4) = 0 \\implies x + 2y + 2z = 9$."
    ],
    "stepByStepSolutionAr": [
      "١. مركز الكرة هو نقطة الأصل (0، 0، 0).",
      "٢. المتجه العمودي على المستوى المماس هو ن = و ب = (1، 2، 2).",
      "٣. معادلة المستوى: 1(س - 1) + 2(ص - 2) + 2(ع - 2) = 0.",
      "٤. س + 2ص + 2ع = 9."
    ],
    "teacherTipEn": "For a sphere centered at origin, the tangent plane at $(x_1, y_1, z_1)$ is $x_1 x + y_1 y + z_1 z = R^2$.",
    "teacherTipAr": "لكرة مركزها نقطة الأصل، معادلة المستوى المماس عند (س1، ص1، ع1) هي س1 س + ص1 ص + ع1 ع = نق²."
  },
  {
    "id": "solid_ch2_db_med_28",
    "titleEn": "Parallel Planes Coefficients Matching",
    "titleAr": "تحديد ثوابت توازي مستويين",
    "difficulty": "medium",
    "questionEn": "The planes $\\pi_1: 2x - 3y + 4z = 1$ and $\\pi_2: 4x + ay + bz = 5$ are parallel. Find the value of $a + b$.",
    "questionAr": "المستويان $\\pi_1: 2x - 3y + 4z = 1$ و $\\pi_2: 4x + ay + bz = 5$ متوازيان. أوجد قيمة $a + b$.",
    "optionsEn": [
      "$2$",
      "$-2$",
      "$14$",
      "$-14$"
    ],
    "optionsAr": [
      "2",
      "-2",
      "14",
      "-14"
    ],
    "correctAnswer": "$2$",
    "correctIndex": 0,
    "hintEn": "For parallel planes, normal vectors are proportional: $\\frac{4}{2} = \\frac{a}{-3} = \\frac{b}{4}$.",
    "hintAr": "لتوازي المستويين تتناسب معاملات س و ص و ع.",
    "stepByStepSolutionEn": [
      "1. Ratio of normal vector components: $\\frac{4}{2} = 2$.",
      "2. $\\frac{a}{-3} = 2 \\implies a = -6$.",
      "3. $\\frac{b}{4} = 2 \\implies b = 8$.",
      "4. $a + b = -6 + 8 = 2$."
    ],
    "stepByStepSolutionAr": [
      "١. نسبة التناسب لمتجهي العمودي: 4 / 2 = 2.",
      "٢. أ / -3 = 2 ومنها أ = -6.",
      "٣. ب / 4 = 2 ومنها ب = 8.",
      "٤. أ + ب = -6 + 8 = 2."
    ],
    "teacherTipEn": "Ratio matching is the fastest and safest method for parallel planes.",
    "teacherTipAr": "استخدام نسبة التناسب هو الأسرع والأضمن في مسائل توازي المستويات."
  },
  {
    "id": "solid_ch2_db_med_29",
    "titleEn": "Perpendicular Bisector Plane of Segment",
    "titleAr": "المستوى العمودي المنصف لقطعة مستقيمة",
    "difficulty": "medium",
    "questionEn": "Find the equation of the perpendicular bisector plane of the segment joining $A(1, 2, 3)$ and $B(3, 4, 1)$.",
    "questionAr": "أوجد معادلة المستوى المنصف العمودي للقطعة المستقيمة الواصلة بين $A(1، 2، 3)$ و $B(3، 4، 1)$.",
    "optionsEn": [
      "$x + y - z = 3$",
      "$x + y - z = 5$",
      "$2x + 2y - 2z = 0$",
      "$x - y + z = 1$"
    ],
    "optionsAr": [
      "س + ص - ع = 3",
      "س + ص - ع = 5",
      "2س + 2ص - 2ع = 0",
      "س - ص + ع = 1"
    ],
    "correctAnswer": "$x + y - z = 3$",
    "correctIndex": 0,
    "hintEn": "The plane passes through the midpoint of AB with normal vector $\\vec{AB}$.",
    "hintAr": "المستوى يمر بنقطة منتصف أ ب ومتجهه العمودي هو المتجه أ ب.",
    "stepByStepSolutionEn": [
      "1. Midpoint $M = (\\frac{1 + 3}{2}, \\frac{2 + 4}{2}, \\frac{3 + 1}{2}) = (2, 3, 2)$.",
      "2. Normal vector $\\vec{AB} = B - A = (2, 2, -2) \\parallel (1, 1, -1)$.",
      "3. Plane equation: $1(x - 2) + 1(y - 3) - 1(z - 2) = 0$.",
      "4. $x + y - z - (2 + 3 - 2) = 0 \\implies x + y - z = 3$."
    ],
    "stepByStepSolutionAr": [
      "١. نقطة المنتصف م = (2، 3، 2).",
      "٢. المتجه العمودي أ ب = (2، 2، -2) الذي يوازي (1، 1، -1).",
      "٣. معادلة المستوى: 1(س - 2) + 1(ص - 3) - 1(ع - 2) = 0.",
      "٤. س + ص - ع = 3."
    ],
    "teacherTipEn": "Perpendicular bisector plane in 3D is the locus of points equidistant from A and B.",
    "teacherTipAr": "المستوى العمودي المنصف هو المحل الهندسي لجميع النقط المتساوية البعد عن طرفي القطعة."
  },
  {
    "id": "solid_ch2_db_med_30",
    "titleEn": "Projection of Segment on Coordinate Axes",
    "titleAr": "مساقط قطعة مستقيمة على محاور الإحداثيات",
    "difficulty": "medium",
    "questionEn": "A line segment of length $7\\text{ cm}$ has projections on the $x$ and $y$ axes of lengths $2\\text{ cm}$ and $3\\text{ cm}$ respectively. Find the length of its projection on the $z$-axis.",
    "questionAr": "قطعة مستقيمة طولها $7\\text{ سم}$ ومسقطاها على محوري السينات والصادات هما $2\\text{ سم}$ و $3\\text{ سم}$. أوجد طول مسقطها على محور العينات.",
    "optionsEn": [
      "$6\\text{ cm}$",
      "$2\\text{ cm}$",
      "$4\\text{ cm}$",
      "$\\sqrt{36}\\text{ cm}$"
    ],
    "optionsAr": [
      "6 سم",
      "2 سم",
      "4 سم",
      "جذر(36) سم"
    ],
    "correctAnswer": "$6\\text{ cm}$",
    "correctIndex": 0,
    "hintEn": "Use length decomposition: $L^2 = (\\Delta x)^2 + (\\Delta y)^2 + (\\Delta z)^2$.",
    "hintAr": "استخدم علاقة طول القطعة بمساقطها: ل² = (مسقط س)² + (مسقط ص)² + (مسقط ع)².",
    "stepByStepSolutionEn": [
      "1. $L^2 = (\\Delta x)^2 + (\\Delta y)^2 + (\\Delta z)^2$.",
      "2. $7^2 = 2^2 + 3^2 + (\\Delta z)^2$.",
      "3. $49 = 4 + 9 + (\\Delta z)^2 = 13 + (\\Delta z)^2$.",
      "4. $(\\Delta z)^2 = 49 - 13 = 36 \\implies |\\Delta z| = 6\\text{ cm}$."
    ],
    "stepByStepSolutionAr": [
      "١. مربع طول القطعة = مجموع مربعات مساقطها على المحاور الثلاثة.",
      "٢. 49 = 4 + 9 + (مسقط ع)².",
      "٣. (مسقط ع)² = 49 - 13 = 36.",
      "٤. طول المسقط على محور العينات = 6 سم."
    ],
    "teacherTipEn": "Projections of a segment are the absolute changes in its endpoint coordinates.",
    "teacherTipAr": "مساقط قطعة مستقيمة على المحاور هي القيم المطلقة لفروق إحداثيات نهايتيها."
  },
  {
    "id": "solid_ch2_db_med_31",
    "titleEn": "Sine of Angle Between Line and Plane",
    "titleAr": "جيب الزاوية بين مستقيم ومستوى",
    "difficulty": "medium",
    "questionEn": "Find the sine of the angle between the line $\\vec{r} = t(1, 1, \\sqrt{2})$ and the plane $z = 0$.",
    "questionAr": "أوجد جيب الزاوية بين المستقيم $\\vec{r} = t(1، 1، \\sqrt{2})$ والمستوى $z = 0$.",
    "optionsEn": [
      "$\\frac{\\sqrt{2}}{2}$",
      "$\\frac{1}{2}$",
      "$\\frac{\\sqrt{3}}{2}$",
      "$1$"
    ],
    "optionsAr": [
      "جذر(2) / 2",
      "1 / 2",
      "جذر(3) / 2",
      "1"
    ],
    "correctAnswer": "$\\frac{\\sqrt{2}}{2}$",
    "correctIndex": 0,
    "hintEn": "Line-plane angle formula uses sine: $\\sin\\theta = \\frac{|\\vec{d} \\cdot \\vec{n}|}{\\|\\vec{d}\\|\\|\\vec{n}\\|}$.",
    "hintAr": "الزاوية بين خط ومستوى تستخدم قانون الجيب جا θ = |د . ن| / (معيار د × معيار ن).",
    "stepByStepSolutionEn": [
      "1. Direction vector $\\vec{d} = (1, 1, \\sqrt{2})$, magnitude $\\|\\vec{d}\\| = \\sqrt{1 + 1 + 2} = 2$.",
      "2. Plane $z = 0$ has normal $\\vec{n} = (0, 0, 1)$, magnitude $\\|\\vec{n}\\| = 1$.",
      "3. Dot product: $|\\vec{d} \\cdot \\vec{n}| = |\\sqrt{2}| = \\sqrt{2}$.",
      "4. $\\sin\\theta = \\frac{\\sqrt{2}}{2 \\times 1} = \\frac{\\sqrt{2}}{2}$."
    ],
    "stepByStepSolutionAr": [
      "١. متجه اتجاه الخط د = (1، 1، جذر 2)، ومعياره = جذر(4) = 2.",
      "٢. المتجه العمودي على المستوى ن = (0، 0، 1)، ومعياره = 1.",
      "٣. الضرب القياسي = جذر 2.",
      "٤. جا θ = جذر(2) / 2 (والزاوية هي 45°)."
    ],
    "teacherTipEn": "Crucial distinction: angle between line and plane uses SINE, not cosine!",
    "teacherTipAr": "فرق جوهري: الزاوية بين مستقيم ومستوى تحسب بالجيب (جا) وليس جيب التمام!"
  },
  {
    "id": "solid_ch2_db_med_32",
    "titleEn": "Intersection of Two Lines in Space",
    "titleAr": "نقطة تقاطع مستقيمين في الفراغ",
    "difficulty": "medium",
    "questionEn": "Find the point of intersection of lines $\\vec{r}_1 = (1, 1, 0) + t(1, 2, 3)$ and $\\vec{r}_2 = (0, 2, 2) + s(2, 1, 1)$.",
    "questionAr": "أوجد نقطة تقاطع المستقيمين $\\vec{r}_1 = (1، 1، 0) + t(1، 2، 3)$ و $\\vec{r}_2 = (0، 2، 2) + s(2، 1، 1)$.",
    "optionsEn": [
      "$(2, 3, 3)$",
      "$(1, 1, 0)$",
      "$(0, 2, 2)$",
      "$(3, 5, 6)$"
    ],
    "optionsAr": [
      "(2، 3، 3)",
      "(1، 1، 0)",
      "(0، 2، 2)",
      "(3، 5، 6)"
    ],
    "correctAnswer": "$(2, 3, 3)$",
    "correctIndex": 0,
    "hintEn": "Equate coordinates to solve for $t$ and $s$, then check consistency.",
    "hintAr": "ساوِ الإحداثيات لحساب ك و س ثم تحقق من تحقق المعادلة الثالثة.",
    "stepByStepSolutionEn": [
      "1. Equating $x$: $1 + t = 2s \\implies t = 2s - 1$.",
      "2. Equating $y$: $1 + 2t = 2 + s$.",
      "3. Substitute: $1 + 2(2s - 1) = 2 + s \\implies 1 + 4s - 2 = 2 + s \\implies 3s = 3 \\implies s = 1$.",
      "4. Then $t = 2(1) - 1 = 1$.",
      "5. Check $z$: For line 1, $z = 0 + 3(1) = 3$. For line 2, $z = 2 + 1(1) = 3$. Consistent!",
      "6. Point of intersection is $(2, 3, 3)$."
    ],
    "stepByStepSolutionAr": [
      "١. بمساواة الإحداثي السيني: 1 + ك = 2 س، إذن ك = 2 س - 1.",
      "٢. بمساواة الإحداثي الصادي: 1 + 2ك = 2 + س.",
      "٣. بالتعويض: 4س - 1 = 2 + س، إذن 3س = 3 أي س = 1، وك = 1.",
      "٤. بالتحقق في ع: 0 + 3(1) = 3، و 2 + 1(1) = 3 (متطابقان).",
      "٥. نقطة التقاطع هي (2، 3، 3)."
    ],
    "teacherTipEn": "Always verify the third coordinate to rule out skew lines.",
    "teacherTipAr": "تحقق دائماً من المعادلة الثالثة للتأكد من تقاطع المستقيمين وعدم تخالفهما."
  },
  {
    "id": "solid_ch2_db_med_33",
    "titleEn": "Plane Perpendicular to Two Given Planes",
    "titleAr": "مستوى عمودي على مستويين معاً ويمر بنقطة",
    "difficulty": "medium",
    "questionEn": "Find the equation of the plane passing through $(1, 1, 1)$ and perpendicular to both planes $x + y + z = 1$ and $2x - y + 3z = 2$.",
    "questionAr": "أوجد معادلة المستوى المار بالنقطة $(1، 1، 1)$ وعمودي على المستويين $x + y + z = 1$ و $2x - y + 3z = 2$.",
    "optionsEn": [
      "$4x - y - 3z = 0$",
      "$x + 2y - z = 2$",
      "$4x + y - 3z = 2$",
      "$3x - y - 2z = 0$"
    ],
    "optionsAr": [
      "4س - ص - 3ع = 0",
      "س + 2ص - ع = 2",
      "4س + ص - 3ع = 2",
      "3س - ص - 2ع = 0"
    ],
    "correctAnswer": "$4x - y - 3z = 0$",
    "correctIndex": 0,
    "hintEn": "The normal to the required plane is $\\vec{n} = \\vec{n}_1 \\times \\vec{n}_2$.",
    "hintAr": "المتجه العمودي على المستوى المطلوب يساوي حاصل الضرب الاتجاهي ن١ × ن٢.",
    "stepByStepSolutionEn": [
      "1. Normal vectors: $\\vec{n}_1 = (1, 1, 1)$ and $\\vec{n}_2 = (2, -1, 3)$.",
      "2. Normal vector $\\vec{n} = \\vec{n}_1 \\times \\vec{n}_2 = (3 - (-1), -(3 - 2), -1 - 2) = (4, -1, -3)$.",
      "3. Equation through $(1, 1, 1)$: $4(x - 1) - 1(y - 1) - 3(z - 1) = 0$.",
      "4. $4x - y - 3z - 4 + 1 + 3 = 0 \\implies 4x - y - 3z = 0$."
    ],
    "stepByStepSolutionAr": [
      "١. متجها العمودي: ن١ = (1، 1، 1)، ن٢ = (2، -1، 3).",
      "٢. الضرب الاتجاهي ن١ × ن٢ = (4، -1، -3).",
      "٣. معادلة المستوى المار بالنقطة (1، 1، 1): 4(س - 1) - (ص - 1) - 3(ع - 1) = 0.",
      "٤. 4س - ص - 3ع = 0."
    ],
    "teacherTipEn": "When a plane is perpendicular to two planes, its normal is parallel to the cross product of their normals.",
    "teacherTipAr": "إذا كان المستوى عمودياً على مستويين، فإن عموديه يوازي حاصل الضرب الاتجاهي لعمودييهما."
  },
  {
    "id": "solid_ch2_db_med_34",
    "titleEn": "Plane Parallel to Coordinate Plane",
    "titleAr": "معادلة مستوى موازٍ لمستوى إحداثي",
    "difficulty": "medium",
    "questionEn": "Find the equation of the plane parallel to the $yz$-plane and passing through the point $P(-4, 5, 2)$.",
    "questionAr": "أوجد معادلة المستوى الموازي للمستوى الإحداثي $yz$ والمار بالنقطة $P(-4، 5، 2)$.",
    "optionsEn": [
      "$x = -4$",
      "$y = 5$",
      "$z = 2$",
      "$y + z = 7$"
    ],
    "optionsAr": [
      "س = -4",
      "ص = 5",
      "ع = 2",
      "ص + ع = 7"
    ],
    "correctAnswer": "$x = -4$",
    "correctIndex": 0,
    "hintEn": "A plane parallel to the $yz$-plane has equation $x = \\text{constant}$.",
    "hintAr": "المستوى الموازي للمستوى ص ع معادلته س = ثابت.",
    "stepByStepSolutionEn": [
      "1. The $yz$-plane has equation $x = 0$.",
      "2. Any plane parallel to it has equation $x = c$.",
      "3. Since it passes through $(-4, 5, 2)$, $c = -4$, so $x = -4$."
    ],
    "stepByStepSolutionAr": [
      "١. المستوى ص ع معادلته س = 0.",
      "٢. أي مستوى يوازيه معادلته على الصورة س = ثابت.",
      "٣. بما أنه يمر بالنقطة (-4، 5، 2)، إذن المعادلة هي س = -4."
    ],
    "teacherTipEn": "Parallel to yz means normal is along x-axis $(1, 0, 0)$.",
    "teacherTipAr": "موازٍ لـ ص ع يعني أن متجه اتجاهه العمودي يقع على محور السينات."
  },
  {
    "id": "solid_ch2_db_med_35",
    "titleEn": "Distance from Point to Z-Axis",
    "titleAr": "بعد نقطة عن محور العينات ومقارنته بالمستوى الإحداثي",
    "difficulty": "medium",
    "questionEn": "For the point $P(3, 4, 12)$, find the ratio of its distance from the $z$-axis to its distance from the $xy$-plane.",
    "questionAr": "للنقطة $P(3، 4، 12)$، ما النسبة بين بعدها عن محور العينات إلى بعدها عن المستوى $xy$؟",
    "optionsEn": [
      "$\\frac{5}{12}$",
      "$\\frac{12}{5}$",
      "$\\frac{5}{13}$",
      "$\\frac{3}{4}$"
    ],
    "optionsAr": [
      "5 / 12",
      "12 / 5",
      "5 / 13",
      "3 / 4"
    ],
    "correctAnswer": "$\\frac{5}{12}$",
    "correctIndex": 0,
    "hintEn": "Distance to z-axis is $\\sqrt{x^2 + y^2}$; distance to xy-plane is $|z|$.",
    "hintAr": "البعد عن محور ع = جذر(س² + ص²)، والبعد عن المستوى س ص = |ع|.",
    "stepByStepSolutionEn": [
      "1. Distance to $z$-axis: $d_{\\text{axis}} = \\sqrt{3^2 + 4^2} = 5$.",
      "2. Distance to $xy$-plane: $d_{\\text{plane}} = |12| = 12$.",
      "3. Ratio $= \\frac{5}{12}$."
    ],
    "stepByStepSolutionAr": [
      "١. البعد عن محور العينات = جذر(9 + 16) = 5.",
      "٢. البعد عن المستوى الإحداثي س ص = |12| = 12.",
      "٣. النسبة = 5 / 12."
    ],
    "teacherTipEn": "Distance to an axis uses the two OTHER coordinates under a square root.",
    "teacherTipAr": "البعد عن محور يستخدم الإحداثيين الآخرين تحت الجذر التربيعي."
  },
  {
    "id": "solid_ch2_db_med_36",
    "titleEn": "Volume of Tetrahedron from Coordinate Intercepts",
    "titleAr": "حجم هرم ثلاثي قائم بمعلومية أجزائه المقطوعة",
    "difficulty": "medium",
    "questionEn": "The plane $\\frac{x}{2} + \\frac{y}{3} + \\frac{z}{4} = 1$ encloses with the coordinate planes a tetrahedron of volume:",
    "questionAr": "المستوى $\\frac{x}{2} + \\frac{y}{3} + \\frac{z}{4} = 1$ يحدد مع مستويات الإحداثيات هرماً ثلاثياً حجمه:",
    "optionsEn": [
      "$4$",
      "$12$",
      "$24$",
      "$8$"
    ],
    "optionsAr": [
      "4",
      "12",
      "24",
      "8"
    ],
    "correctAnswer": "$4$",
    "correctIndex": 0,
    "hintEn": "Volume of coordinate tetrahedron: $V = \\frac{1}{6}|abc|$.",
    "hintAr": "حجم الهرم القائم مع مستويات الإحداثيات = سدس حاصل ضرب الأجزاء المقطوعة.",
    "stepByStepSolutionEn": [
      "1. The intercepts on axes are $a = 2, b = 3, c = 4$.",
      "2. Volume formula: $V = \\frac{1}{6} abc$.",
      "3. $V = \\frac{1}{6}(2)(3)(4) = \\frac{24}{6} = 4$."
    ],
    "stepByStepSolutionAr": [
      "١. الأجزاء المقطوعة من المحاور هي أ = 2، ب = 3، جـ = 4.",
      "٢. قانون الحجم: الحجم = (1/6) أ × ب × جـ.",
      "٣. الحجم = (1/6) × 2 × 3 × 4 = 24 / 6 = 4."
    ],
    "teacherTipEn": "The volume of a tetrahedron formed by three mutually perpendicular edges is $abc/6$.",
    "teacherTipAr": "حجم الهرم الثلاثي ذي الأحرف المتعامدة مثنى مثنى هو أ ب جـ / 6."
  },
  {
    "id": "solid_ch2_db_med_37",
    "titleEn": "Centroid of Intercept Triangle",
    "titleAr": "مركز ثقل مثلث الأجزاء المقطوعة",
    "difficulty": "medium",
    "questionEn": "The plane $x + y + z = 3$ intersects the coordinate axes at $A, B, C$. Find the centroid of $\\triangle ABC$.",
    "questionAr": "المستوى $x + y + z = 3$ يقطع محاور الإحداثيات في أ، ب، جـ. أوجد مركز ثقل المثلث أ ب جـ.",
    "optionsEn": [
      "$(1, 1, 1)$",
      "$(3, 3, 3)$",
      "$(0, 0, 0)$",
      "$(\\frac{1}{3}, \\frac{1}{3}, \\frac{1}{3})$"
    ],
    "optionsAr": [
      "(1، 1، 1)",
      "(3، 3، 3)",
      "(0، 0، 0)",
      "(1/3، 1/3، 1/3)"
    ],
    "correctAnswer": "$(1, 1, 1)$",
    "correctIndex": 0,
    "hintEn": "Centroid is the average of the coordinates: $G = (\\frac{a}{3}, \\frac{b}{3}, \\frac{c}{3})$.",
    "hintAr": "مركز ثقل المثلث هو المتوسط الحسابي لإحداثيات الرؤوس الثلاثة.",
    "stepByStepSolutionEn": [
      "1. Intercepts on axes: $A(3, 0, 0), B(0, 3, 0), C(0, 0, 3)$.",
      "2. Centroid $G = (\\frac{3 + 0 + 0}{3}, \\frac{0 + 3 + 0}{3}, \\frac{0 + 0 + 3}{3}) = (1, 1, 1)$."
    ],
    "stepByStepSolutionAr": [
      "١. نقاط التقاطع مع المحاور: أ(3، 0، 0)، ب(0، 3، 0)، جـ(0، 0، 3).",
      "٢. مركز الثقل = ((3+0+0)/3، (0+3+0)/3، (0+0+3)/3) = (1، 1، 1)."
    ],
    "teacherTipEn": "Centroid of the intercept triangle always has coordinates $(a/3, b/3, c/3)$.",
    "teacherTipAr": "إحداثيات مركز ثقل مثلث الأجزاء المقطوعة هي دائماً (أ/3، ب/3، جـ/3)."
  },
  {
    "id": "solid_ch2_db_med_38",
    "titleEn": "Parametric to Symmetric Form of Line",
    "titleAr": "تحويل الصورة البارامترية للمستقيم إلى متماثلة",
    "difficulty": "medium",
    "questionEn": "Convert the parametric equations $x = 2 - 3t, y = 1 + 4t, z = 5 - t$ into symmetric Cartesian form.",
    "questionAr": "حول المعادلات البارامترية $x = 2 - 3t, y = 1 + 4t, z = 5 - t$ إلى الصورة المتماثلة.",
    "optionsEn": [
      "$\\frac{x - 2}{-3} = \\frac{y - 1}{4} = \\frac{z - 5}{-1}$",
      "$\\frac{x + 2}{-3} = \\frac{y + 1}{4} = \\frac{z + 5}{-1}$",
      "$\\frac{x - 3}{2} = \\frac{y + 4}{1} = \\frac{z - 1}{5}$",
      "$-3x + 2 = 4y + 1 = -z + 5$"
    ],
    "optionsAr": [
      "(س - 2)/-3 = (ص - 1)/4 = (ع - 5)/-1",
      "(س + 2)/-3 = (ص + 1)/4 = (ع + 5)/-1",
      "(س - 3)/2 = (ص + 4)/1 = (ع - 1)/5",
      "-3س + 2 = 4ص + 1 = -ع + 5"
    ],
    "correctAnswer": "$\\frac{x - 2}{-3} = \\frac{y - 1}{4} = \\frac{z - 5}{-1}$",
    "correctIndex": 0,
    "hintEn": "Solve for the parameter $t$ in each equation and equate them.",
    "hintAr": "أوجد قيمة الوسيط ك من كل معادلة وساوِ بينهم.",
    "stepByStepSolutionEn": [
      "1. From $x = 2 - 3t \\implies t = \\frac{x - 2}{-3}$.",
      "2. From $y = 1 + 4t \\implies t = \\frac{y - 1}{4}$.",
      "3. From $z = 5 - t \\implies t = \\frac{z - 5}{-1}$.",
      "4. Equating: $\\frac{x - 2}{-3} = \\frac{y - 1}{4} = \\frac{z - 5}{-1}$."
    ],
    "stepByStepSolutionAr": [
      "١. من س = 2 - 3ك ينتج ك = (س - 2) / -3.",
      "٢. من ص = 1 + 4ك ينتج ك = (ص - 1) / 4.",
      "٣. من ع = 5 - ك ينتج ك = (ع - 5) / -1.",
      "٤. بمساواتهم: (س - 2)/-3 = (ص - 1)/4 = (ع - 5)/-1."
    ],
    "teacherTipEn": "The denominators represent the direction ratios of the line.",
    "teacherTipAr": "المقامات تمثل نسب اتجاه المستقيم."
  },
  {
    "id": "solid_ch2_db_med_39",
    "titleEn": "Midpoint Segment Between Parallel Planes",
    "titleAr": "منتصف قطعة مستقيمة واصلة بين مستويين متوازيين",
    "difficulty": "medium",
    "questionEn": "The line $\\vec{r} = t(1, 2, 2)$ intersects parallel planes $x + 2y + 2z = 9$ and $x + 2y + 2z = 27$ at points $A$ and $B$. Find the midpoint of $AB$.",
    "questionAr": "المستقيم $\\vec{r} = t(1، 2، 2)$ يقطع المستويين المتوازيين $x + 2y + 2z = 9$ و $x + 2y + 2z = 27$ في أ و ب. أوجد منتصف القطعة أ ب.",
    "optionsEn": [
      "$(2, 4, 4)$",
      "$(1, 2, 2)$",
      "$(3, 6, 6)$",
      "$(4, 8, 8)$"
    ],
    "optionsAr": [
      "(2، 4، 4)",
      "(1، 2، 2)",
      "(3، 6، 6)",
      "(4، 8، 8)"
    ],
    "correctAnswer": "$(2, 4, 4)$",
    "correctIndex": 0,
    "hintEn": "Find the parameters for each intersection and average them.",
    "hintAr": "أوجد وسيط التقاطع مع كل مستوى ثم احسب المتوسط الحسابي.",
    "stepByStepSolutionEn": [
      "1. For plane 1: $t + 2(2t) + 2(2t) = 9t = 9 \\implies t_1 = 1 \\implies A(1, 2, 2)$.",
      "2. For plane 2: $9t = 27 \\implies t_2 = 3 \\implies B(3, 6, 6)$.",
      "3. Midpoint parameter $t_{\\text{mid}} = \\frac{1 + 3}{2} = 2$.",
      "4. Midpoint is $(2(1), 2(2), 2(2)) = (2, 4, 4)$."
    ],
    "stepByStepSolutionAr": [
      "١. بالتعويض في المستوى الأول: 9ك = 9 ومنها ك1 = 1، إذن أ(1، 2، 2).",
      "٢. بالتعويض في المستوى الثاني: 9ك = 27 ومنها ك2 = 3، إذن ب(3، 6، 6).",
      "٣. وسيط المنتصف = (1 + 3) / 2 = 2.",
      "٤. إحداثيات المنتصف هي (2، 4، 4)."
    ],
    "teacherTipEn": "Linearity allows finding the midpoint directly from the average parameter value.",
    "teacherTipAr": "خاصية الخطية تسمح بحساب المنتصف مباشرة من المتوسط الحسابي لقيمتي الوسيط."
  },
  {
    "id": "solid_ch2_db_med_40",
    "titleEn": "Sphere Passing Through Origin with Axial Intercepts",
    "titleAr": "معادلة كرة تمر بالأصل وبنقاط المحاور",
    "difficulty": "medium",
    "questionEn": "Find the radius of the sphere passing through the origin and the points $(2, 0, 0), (0, 4, 0), (0, 0, 4)$.",
    "questionAr": "أوجد نصف قطر الكرة المارة بنقطة الأصل والنقاط $(2، 0، 0), (0، 4، 0), (0، 0، 4)$.",
    "optionsEn": [
      "$3$",
      "$\\sqrt{18}$",
      "$6$",
      "$\\sqrt{14}$"
    ],
    "optionsAr": [
      "3",
      "جذر(18)",
      "6",
      "جذر(14)"
    ],
    "correctAnswer": "$3$",
    "correctIndex": 0,
    "hintEn": "Sphere passing through origin and axial points $(a, 0, 0), (0, b, 0), (0, 0, c)$ has equation $x^2 + y^2 + z^2 - ax - by - cz = 0$.",
    "hintAr": "الكرة المارة بنقطة الأصل ونقاط المحاور معادلتها: س² + ص² + ع² - أ س - ب ص - جـ ع = 0.",
    "stepByStepSolutionEn": [
      "1. The equation is $x^2 + y^2 + z^2 - 2x - 4y - 4z = 0$.",
      "2. Center is $(1, 2, 2)$.",
      "3. Radius $R = \\sqrt{1^2 + 2^2 + 2^2 - 0} = \\sqrt{1 + 4 + 4} = \\sqrt{9} = 3$."
    ],
    "stepByStepSolutionAr": [
      "١. معادلة الكرة: س² + ص² + ع² - 2س - 4ص - 4ع = 0.",
      "٢. إحداثيات المركز = (1، 2، 2).",
      "٣. نصف القطر نق = جذر(1 + 4 + 4) = جذر(9) = 3."
    ],
    "teacherTipEn": "Center is $(a/2, b/2, c/2)$ and radius is $\\frac{1}{2}\\sqrt{a^2 + b^2 + c^2}$.",
    "teacherTipAr": "مركز هذه الكرة هو (أ/2، ب/2، جـ/2) ونصف قطرها نصف قطر متوازي المستطيلات."
  },
  {
    "id": "solid_ch2_db_med_41",
    "titleEn": "Cosine of Acute Angle Between Two Lines",
    "titleAr": "جيب تمام الزاوية الحادة بين مستقيمين",
    "difficulty": "medium",
    "questionEn": "Find the cosine of the acute angle between lines with direction vectors $\\vec{d}_1 = (1, 2, 2)$ and $\\vec{d}_2 = (2, 1, 2)$.",
    "questionAr": "أوجد جيب تمام الزاوية الحادة بين مستقيمين متجهي اتجاههما $\\vec{d}_1 = (1، 2، 2)$ و $\\vec{d}_2 = (2، 1، 2)$.",
    "optionsEn": [
      "$\\frac{8}{9}$",
      "$\\frac{4}{9}$",
      "$\\frac{1}{3}$",
      "$\\frac{2}{3}$"
    ],
    "optionsAr": [
      "8 / 9",
      "4 / 9",
      "1 / 3",
      "2 / 3"
    ],
    "correctAnswer": "$\\frac{8}{9}$",
    "correctIndex": 0,
    "hintEn": "Use $\\cos\\theta = \\frac{|\\vec{d}_1 \\cdot \\vec{d}_2|}{\\|\\vec{d}_1\\|\\|\\vec{d}_2\\|}$.",
    "hintAr": "استخدم قانون جيب تمام الزاوية بين مستقيمين: جتا θ = |د١ . د٢| / (معيار د١ × معيار د٢).",
    "stepByStepSolutionEn": [
      "1. Dot product: $\\vec{d}_1 \\cdot \\vec{d}_2 = 1(2) + 2(1) + 2(2) = 2 + 2 + 4 = 8$.",
      "2. Magnitudes: $\\|\\vec{d}_1\\| = \\sqrt{1 + 4 + 4} = 3$ and $\\|\\vec{d}_2\\| = \\sqrt{4 + 1 + 4} = 3$.",
      "3. $\\cos\\theta = \\frac{8}{3 \\times 3} = \\frac{8}{9}$."
    ],
    "stepByStepSolutionAr": [
      "١. الضرب القياسي = 1(2) + 2(1) + 2(2) = 8.",
      "٢. معيار د١ = 3، معيار د٢ = 3.",
      "٣. جتا θ = 8 / (3 × 3) = 8 / 9."
    ],
    "teacherTipEn": "Cosine of angle between lines is always taken positive for the acute angle.",
    "teacherTipAr": "جيب تمام الزاوية بين مستقيمين يؤخذ بالقيمة المطلقة دائماً لإيجاد الزاوية الحادة."
  },
  {
    "id": "solid_ch2_db_med_42",
    "titleEn": "Coplanar Vectors Scalar Triple Product",
    "titleAr": "شرط وقوع ثلاثة متجهات في مستوى واحد",
    "difficulty": "medium",
    "questionEn": "The three vectors $\\vec{u} = (1, 2, 3), \\vec{v} = (0, 1, 2), \\vec{w} = (2, 3, k)$ are coplanar if $k = $:",
    "questionAr": "تكون المتجهات الثلاثة $\\vec{u} = (1، 2، 3), \\vec{v} = (0، 1، 2), \\vec{w} = (2، 3، k)$ في مستوى واحد إذا كانت $k = $:",
    "optionsEn": [
      "$4$",
      "$5$",
      "$3$",
      "$2$"
    ],
    "optionsAr": [
      "4",
      "5",
      "3",
      "2"
    ],
    "correctAnswer": "$4$",
    "correctIndex": 0,
    "hintEn": "Three vectors are coplanar if their scalar triple product is zero: $\\det([\\vec{u}, \\vec{v}, \\vec{w}]) = 0$.",
    "hintAr": "تكون المتجهات في مستوى واحد إذا انعدم حاصل الضرب الثلاثي القياسي لها: المحدد = 0.",
    "stepByStepSolutionEn": [
      "1. Compute determinant: $\\begin{vmatrix} 1 & 2 & 3 \\\\ 0 & 1 & 2 \\\\ 2 & 3 & k \\end{vmatrix} = 0$.",
      "2. Expand along first column: $1(k - 6) - 0 + 2(4 - 3) = 0$.",
      "3. $k - 6 + 2(1) = 0 \\implies k - 4 = 0 \\implies k = 4$."
    ],
    "stepByStepSolutionAr": [
      "١. قيمة المحدد = 0.",
      "٢. بالفك عن طريق العمود الأول: 1(ك - 6) + 2(4 - 3) = 0.",
      "٣. ك - 6 + 2 = 0، إذن ك - 4 = 0 ومنها ك = 4."
    ],
    "teacherTipEn": "Scalar triple product vanishing is the fundamental coplanarity test in 3D space.",
    "teacherTipAr": "انعدام الضرب الثلاثي القياسي هو الشرط الأساسي لوقوع المتجهات في مستوى واحد."
  },
  {
    "id": "solid_ch2_db_med_43",
    "titleEn": "Area of Triangle Formed by Intercepts",
    "titleAr": "مساحة مثلث ناتج عن تقاطع مستوى مع المحاور",
    "difficulty": "medium",
    "questionEn": "The plane $2x + 2y + z = 4$ cuts coordinate axes at $A, B, C$. Find the area of $\\triangle ABC$.",
    "questionAr": "المستوى $2x + 2y + z = 4$ يقطع محاور الإحداثيات في أ، ب، جـ. أوجد مساحة المثلث أ ب جـ.",
    "optionsEn": [
      "$6$",
      "$4$",
      "$3$",
      "$12$"
    ],
    "optionsAr": [
      "6",
      "4",
      "3",
      "12"
    ],
    "correctAnswer": "$6$",
    "correctIndex": 0,
    "hintEn": "Use $\\text{Area} = \\frac{1}{2}\\|\\vec{AB} \\times \\vec{AC}\\|$ or $A^2 = A_{xy}^2 + A_{yz}^2 + A_{zx}^2$.",
    "hintAr": "استخدم مساحة المثلث بالضرب الاتجاهي أو مجموع مربعات مساقطه على مستويات الإحداثيات.",
    "stepByStepSolutionEn": [
      "1. Intercepts: $A(2, 0, 0), B(0, 2, 0), C(0, 0, 4)$.",
      "2. Vectors: $\\vec{AB} = (-2, 2, 0)$ and $\\vec{AC} = (-2, 0, 4)$.",
      "3. Cross product $\\vec{AB} \\times \\vec{AC} = (8, 8, 4)$.",
      "4. Magnitude $\\|\\vec{AB} \\times \\vec{AC}\\| = \\sqrt{64 + 64 + 16} = \\sqrt{144} = 12$.",
      "5. $\\text{Area} = \\frac{1}{2}(12) = 6$."
    ],
    "stepByStepSolutionAr": [
      "١. الأجزاء المقطوعة: أ(2، 0، 0)، ب(0، 2، 0)، جـ(0، 0، 4).",
      "٢. المتجهان: أ ب = (-2، 2، 0)، أ جـ = (-2، 0، 4).",
      "٣. الضرب الاتجاهي أ ب × أ جـ = (8، 8، 4).",
      "٤. المعيار = جذر(64 + 64 + 16) = جذر(144) = 12.",
      "٥. المساحة = نصف المعيار = 6."
    ],
    "teacherTipEn": "Notice De Gua's theorem: $(\\text{Area})^2 = 2^2 + 4^2 + 4^2 = 4 + 16 + 16 = 36 \\implies \\text{Area} = 6$.",
    "teacherTipAr": "مبرهنة دي غوا: مربع مساحة المثلث يساوي مجموع مربعات مساحات مساقطه الثلاثة!"
  },
  {
    "id": "solid_ch2_db_med_44",
    "titleEn": "Perpendicular Distance from Point to Line Parameter",
    "titleAr": "طول العمود من نقطة على خط مستقيم",
    "difficulty": "medium",
    "questionEn": "Find the distance from $P(0, 0, 0)$ to the line $\\frac{x - 3}{0} = \\frac{y - 4}{0} = \\frac{z}{1}$.",
    "questionAr": "أوجد بعد نقطة الأصل عن المستقيم الموازي لمحور العينات والمار بالنقطة $(3، 4، 0)$.",
    "optionsEn": [
      "$5$",
      "$3$",
      "$4$",
      "$\\sqrt{7}$"
    ],
    "optionsAr": [
      "5",
      "3",
      "4",
      "جذر(7)"
    ],
    "correctAnswer": "$5$",
    "correctIndex": 0,
    "hintEn": "The line is parallel to z-axis, so distance is the distance in the xy-plane: $\\sqrt{x^2 + y^2}$.",
    "hintAr": "المستقيم يوازي محور ع، وبعده عن الأصل هو البعد في المستوى س ص = جذر(س² + ص²).",
    "stepByStepSolutionEn": [
      "1. The line consists of all points $(3, 4, z)$ for all $z \\in \\mathbb{R}$.",
      "2. The closest point to the origin is when $z = 0$, giving $(3, 4, 0)$.",
      "3. Distance from $(0, 0, 0)$ to $(3, 4, 0)$ is $\\sqrt{3^2 + 4^2} = 5$."
    ],
    "stepByStepSolutionAr": [
      "١. المستقيم يضم جميع النقط التي إحداثياتها (3، 4، ع).",
      "٢. أقرب نقطة لنقطة الأصل هي عندما ع = 0، أي النقطة (3، 4، 0).",
      "٣. البعد عن نقطة الأصل = جذر(9 + 16) = 5."
    ],
    "teacherTipEn": "For lines parallel to an axis, distance to origin is the 2D Euclidean distance of the fixed coordinates.",
    "teacherTipAr": "لمستقيم يوازي محوراً إحداثياً، بعده عن نقطة الأصل هو البعد الإقليدي للإحداثيين الثابتين."
  },
  {
    "id": "solid_ch2_db_med_45",
    "titleEn": "Plane Passing Through Three Points",
    "titleAr": "معادلة مستوى مار بثلاث نقط",
    "difficulty": "medium",
    "questionEn": "Find the normal vector to the plane passing through $A(1, 0, 0), B(0, 1, 0), C(0, 0, 1)$.",
    "questionAr": "أوجد المتجه العمودي على المستوى المار بالنقاط $A(1، 0، 0), B(0، 1، 0), C(0، 0، 1)$.",
    "optionsEn": [
      "$(1, 1, 1)$",
      "$(1, -1, 1)$",
      "$(1, 1, -1)$",
      "$(0, 0, 1)$"
    ],
    "optionsAr": [
      "(1، 1، 1)",
      "(1، -1، 1)",
      "(1، 1، -1)",
      "(0، 0، 1)"
    ],
    "correctAnswer": "$(1, 1, 1)$",
    "correctIndex": 0,
    "hintEn": "Equation is $\\frac{x}{1} + \\frac{y}{1} + \\frac{z}{1} = 1 \\implies x + y + z = 1$.",
    "hintAr": "معادلة المستوى هي س + ص + ع = 1، ومتجهه العمودي (1، 1، 1).",
    "stepByStepSolutionEn": [
      "1. The plane cuts equal unit intercepts on the three coordinate axes.",
      "2. Cartesian equation is $x + y + z = 1$.",
      "3. The normal vector is $\\vec{n} = (1, 1, 1)$."
    ],
    "stepByStepSolutionAr": [
      "١. المستوى يقطع أجزاء متساوية مقدارها 1 من المحاور الثلاثة.",
      "٢. المعادلة الكارتيزية: س + ص + ع = 1.",
      "٣. المتجه العمودي هو (1، 1، 1)."
    ],
    "teacherTipEn": "Symmetric intercepts always yield equal normal vector components.",
    "teacherTipAr": "الأجزاء المقطوعة المتساوية تعطي مركبات متساوية لمتجه العمودي."
  },
  {
    "id": "solid_ch2_db_med_46",
    "titleEn": "Orthogonal Projection of Area on Inclined Plane",
    "titleAr": "مساحة مسقط شكل هندسي على مستوى مائل",
    "difficulty": "medium",
    "questionEn": "A planar region of area $24\\text{ cm}^2$ lies in a plane inclined at $30^\\circ$ to the horizontal plane. Find the area of its orthogonal projection on the horizontal plane.",
    "questionAr": "منطقة مستوية مساحتها $24\\text{ سم}^2$ تقع في مستوى يميل بزاوية $30^\\circ$ على المستوى الأفقي. أوجد مساحة مسقطها العمودي على المستوى الأفقي.",
    "optionsEn": [
      "$12\\sqrt{3}\\text{ cm}^2$",
      "$12\\text{ cm}^2$",
      "$24\\sqrt{3}\\text{ cm}^2$",
      "$48\\text{ cm}^2$"
    ],
    "optionsAr": [
      "12 جذر(3) سم²",
      "12 سم²",
      "24 جذر(3) سم²",
      "48 سم²"
    ],
    "correctAnswer": "$12\\sqrt{3}\\text{ cm}^2$",
    "correctIndex": 0,
    "hintEn": "Area of projection $A' = A \\cos\\theta$.",
    "hintAr": "مساحة المسقط = المساحة الأصلية × جتا زاوية الميل.",
    "stepByStepSolutionEn": [
      "1. $A' = A \\cos\\theta$.",
      "2. $A' = 24 \\cos(30^\\circ) = 24 \\times \\frac{\\sqrt{3}}{2} = 12\\sqrt{3}\\text{ cm}^2$."
    ],
    "stepByStepSolutionAr": [
      "١. مساحة المسقط = المساحة الأصلية × جتا θ.",
      "٢. مساحة المسقط = 24 × جتا(30°) = 24 × (جذر 3 / 2) = 12 جذر(3) سم²."
    ],
    "teacherTipEn": "Orthogonal projection always contracts the area by a factor of $\\cos\\theta$.",
    "teacherTipAr": "المسقط العمودي يقلص المساحة دائماً بمعامل انكماش مقداره جتا θ."
  },
  {
    "id": "solid_ch2_db_med_47",
    "titleEn": "Symmetric Line with Zero Component",
    "titleAr": "معادلة متماثلة لمستقيم يوازي مستوى إحداثي",
    "difficulty": "medium",
    "questionEn": "Find the symmetric Cartesian equations of the line passing through $(2, 3, 5)$ with direction vector $\\vec{d} = (4, -1, 0)$.",
    "questionAr": "أوجد الصورة المتماثلة لمعادلة المستقيم المار بالنقطة $(2، 3، 5)$ ومتجه اتجاهه $\\vec{d} = (4، -1، 0)$.",
    "optionsEn": [
      "$\\frac{x - 2}{4} = \\frac{y - 3}{-1}, z = 5$",
      "$\\frac{x - 2}{4} = \\frac{y - 3}{-1} = \\frac{z - 5}{0}$",
      "$\\frac{x + 2}{4} = \\frac{y + 3}{-1}, z = 5$",
      "$4(x - 2) = -(y - 3), z = 0$"
    ],
    "optionsAr": [
      "(س - 2)/4 = (ص - 3)/-1 ، ع = 5",
      "(س - 2)/4 = (ص - 3)/-1 = (ع - 5)/0",
      "(س + 2)/4 = (ص + 3)/-1 ، ع = 5",
      "4(س - 2) = -(ص - 3) ، ع = 0"
    ],
    "correctAnswer": "$\\frac{x - 2}{4} = \\frac{y - 3}{-1}, z = 5$",
    "correctIndex": 0,
    "hintEn": "When a direction ratio is zero, the corresponding coordinate equation is written separately as $z = z_1$.",
    "hintAr": "عندما تكون إحدى نسب الاتجاه صفراً، تكتب معادلة هذا الإحداثي منفصلة كـ ع = ع1.",
    "stepByStepSolutionEn": [
      "1. Direction vector component $d_z = 0$ means $z$ remains constant for all points on the line.",
      "2. Since the line passes through $(2, 3, 5)$, $z = 5$.",
      "3. The non-zero components give: $\\frac{x - 2}{4} = \\frac{y - 3}{-1}$.",
      "4. The complete symmetric form is: $\\frac{x - 2}{4} = \\frac{y - 3}{-1}, z = 5$."
    ],
    "stepByStepSolutionAr": [
      "١. انعدام المركبة العينية لمتجه الاتجاه يعني ثبات الإحداثي العيني لجميع نقط المستقيم.",
      "٢. بما أن المستقيم يمر بالنقطة (2، 3، 5)، إذن ع = 5 دائماً.",
      "٣. المركبتان الأخريان تعطيان: (س - 2)/4 = (ص - 3)/-1.",
      "٤. الصورة المتماثلة تكتب: (س - 2)/4 = (ص - 3)/-1 ، ع = 5."
    ],
    "teacherTipEn": "Never divide by zero; write zero direction ratio coordinates as separate equality equations.",
    "teacherTipAr": "لا تقسم أبداً على صفر في الصورة المتماثلة؛ اكتب المتغير ذي النسبة الصفرية منفصلاً."
  },
  {
    "id": "solid_ch2_db_med_48",
    "titleEn": "Sphere Radius from General Equation",
    "titleAr": "نصف قطر كرة من المعادلة العامة",
    "difficulty": "medium",
    "questionEn": "Find the radius of the sphere $x^2 + y^2 + z^2 - 6x + 4y - 4z - 8 = 0$.",
    "questionAr": "أوجد نصف قطر الكرة $x^2 + y^2 + z^2 - 6x + 4y - 4z - 8 = 0$.",
    "optionsEn": [
      "$5$",
      "$25$",
      "$7$",
      "$\\sqrt{17}$"
    ],
    "optionsAr": [
      "5",
      "25",
      "7",
      "جذر(17)"
    ],
    "correctAnswer": "$5$",
    "correctIndex": 0,
    "hintEn": "Radius formula: $R = \\sqrt{u^2 + v^2 + w^2 - d}$.",
    "hintAr": "قانون نصف القطر: نق = جذر(ل² + ك² + ن² - د).",
    "stepByStepSolutionEn": [
      "1. Center coordinates: $(u, v, w) = (3, -2, 2)$.",
      "2. Constant term $d = -8$.",
      "3. $R = \\sqrt{3^2 + (-2)^2 + 2^2 - (-8)} = \\sqrt{9 + 4 + 4 + 8} = \\sqrt{25} = 5$."
    ],
    "stepByStepSolutionAr": [
      "١. إحداثيات المركز: (3، -2، 2).",
      "٢. الحد المطلق د = -8.",
      "٣. نق = جذر(9 + 4 + 4 - (-8)) = جذر(25) = 5."
    ],
    "teacherTipEn": "Remember: radius formula subtracts the constant term d.",
    "teacherTipAr": "تذكر: قانون نصف القطر يطرح الحد المطلق د (سالب في سالب يعطي موجب)."
  },
  {
    "id": "solid_ch2_db_med_49",
    "titleEn": "Vector Projection of Line on Plane",
    "titleAr": "مسقط متجه على مستوى",
    "difficulty": "medium",
    "questionEn": "Find the length of the projection of vector $\\vec{v} = (3, 4, 5)$ onto the $xy$-plane.",
    "questionAr": "أوجد طول مسقط المتجه $\\vec{v} = (3، 4، 5)$ على المستوى الإحداثي $xy$.",
    "optionsEn": [
      "$5$",
      "$3$",
      "$4$",
      "$\\sqrt{50}$"
    ],
    "optionsAr": [
      "5",
      "3",
      "4",
      "جذر(50)"
    ],
    "correctAnswer": "$5$",
    "correctIndex": 0,
    "hintEn": "Projection on xy-plane drops the z component: $\\vec{v}' = (3, 4, 0)$.",
    "hintAr": "المسقط على المستوى س ص يلغي المركبة العينية: المتجه المسقط = (3، 4، 0).",
    "stepByStepSolutionEn": [
      "1. The orthogonal projection of $(x, y, z)$ on the $xy$-plane is $(x, y, 0)$.",
      "2. For $\\vec{v} = (3, 4, 5)$, the projected vector is $\\vec{v}' = (3, 4, 0)$.",
      "3. Length of projection: $\\|\\vec{v}'\\| = \\sqrt{3^2 + 4^2 + 0^2} = \\sqrt{25} = 5$."
    ],
    "stepByStepSolutionAr": [
      "١. المسقط العمودي لأي متجه على المستوى س ص هو (س، ص، 0).",
      "٢. للمتجه (3، 4، 5)، يكون المتجه المسقط هو (3، 4، 0).",
      "٣. معيار المسقط = جذر(9 + 16) = 5."
    ],
    "teacherTipEn": "Projecting onto a coordinate plane simply sets the orthogonal coordinate to zero.",
    "teacherTipAr": "إسقاط متجه على مستوى إحداثي يعادل تصفير المركبة العمودية على ذلك المستوى."
  },
  {
    "id": "solid_ch2_db_med_50",
    "titleEn": "Equilateral Triangle in Plane Angle",
    "titleAr": "مثلث متساوي الأضلاع في الفراغ",
    "difficulty": "medium",
    "questionEn": "Three points $A(a, 0, 0), B(0, a, 0), C(0, 0, a)$ with $a > 0$ form triangle $ABC$. What is the measure of angle $\\angle ABC$?",
    "questionAr": "النقاط الثلاث $A(a، 0، 0), B(0، a، 0), C(0، 0، a)$ حيث $a > 0$ تشكل المثلث أ ب جـ. ما قياس الزاوية $\\angle ABC$؟",
    "optionsEn": [
      "$60^\\circ$",
      "$90^\\circ$",
      "$45^\\circ$",
      "$30^\\circ$"
    ],
    "optionsAr": [
      "60°",
      "90°",
      "45°",
      "30°"
    ],
    "correctAnswer": "$60^\\circ$",
    "correctIndex": 0,
    "hintEn": "All three sides have equal length $a\\sqrt{2}$, making it an equilateral triangle.",
    "hintAr": "أطوال الأضلاع الثلاثة متساوية وكل منها يساوي أ جذر(2)، فالمثلث متساوي الأضلاع.",
    "stepByStepSolutionEn": [
      "1. $AB = \\sqrt{(-a)^2 + a^2 + 0^2} = a\\sqrt{2}$.",
      "2. $BC = \\sqrt{0^2 + (-a)^2 + a^2} = a\\sqrt{2}$.",
      "3. $CA = \\sqrt{a^2 + 0^2 + (-a)^2} = a\\sqrt{2}$.",
      "4. Since all three sides are equal, $\\triangle ABC$ is equilateral, and every interior angle is $60^\\circ$."
    ],
    "stepByStepSolutionAr": [
      "١. طول أ ب = أ جذر(2).",
      "٢. طول ب جـ = أ جذر(2).",
      "٣. طول جـ أ = أ جذر(2).",
      "٤. بما أن جميع الأضلاع متساوية في الطول، فالمثلث متساوي الأضلاع وقياس كل زاوية داخله 60°."
    ],
    "teacherTipEn": "Points on coordinate axes equidistant from origin always form an equilateral triangle.",
    "teacherTipAr": "النقاط الواقعة على محاور الإحداثيات والمتساوية البعد عن الأصل تشكل دائماً مثلثاً متساوي الأضلاع."
  },
  {
    "id": "solid_ch2_db_med_51",
    "titleEn": "Angle Between Line and Plane Formula",
    "titleAr": "قياس الزاوية بين مستقيم ومستوى",
    "difficulty": "medium",
    "diagramType": "line_plane_angle_3d",
    "questionEn": "Find $\\sin\\theta$ where $\\theta$ is the angle between the line with direction $\\vec{d} = (1, 2, 2)$ and the plane with normal $\\vec{n} = (2, -1, 2)$.",
    "questionAr": "أوجد قيمة $\\sin\\theta$ حيث $\\theta$ هي الزاوية المحصورة بين المستقيم ذي الاتجاه $\\vec{d} = (1, 2, 2)$ والمستوى ذي العمودي $\\vec{n} = (2, -1, 2)$.",
    "optionsEn": [
      "$\\frac{4}{9}$",
      "$\\frac{8}{9}$",
      "$\\frac{2}{3}$",
      "$\\frac{1}{3}$"
    ],
    "optionsAr": [
      "$\\frac{4}{9}$",
      "$\\frac{8}{9}$",
      "$\\frac{2}{3}$",
      "$\\frac{1}{3}$"
    ],
    "correctAnswer": "$\\frac{4}{9}$",
    "correctIndex": 0,
    "hintEn": "sin(theta) = |d . n| / (|d| * |n|).",
    "hintAr": "جا(هـ) = |هـ · ن| / (|هـ| × |ن|).",
    "stepByStepSolutionEn": [
      "1. Formula for angle between line and plane: $\\sin\\theta = \\frac{|\\vec{d} \\cdot \\vec{n}|}{|\\vec{d}||\\vec{n}|}$.",
      "2. $\\vec{d} \\cdot \\vec{n} = (1)(2) + (2)(-1) + (2)(2) = 2 - 2 + 4 = 4$.",
      "3. $|\\vec{d}| = \\sqrt{1 + 4 + 4} = 3$ and $|\\vec{n}| = \\sqrt{4 + 1 + 4} = 3$.",
      "4. $\\sin\\theta = \\frac{|4|}{3 \\times 3} = \\frac{4}{9}$."
    ],
    "stepByStepSolutionAr": [
      "١. قانون الزاوية بين مستقيم ومستوى: $\\sin\\theta = \\frac{|\\vec{d} \\cdot \\vec{n}|}{|\\vec{d}||\\vec{n}|}$.",
      "٢. الضرب القياسي: هـ · ن = ٢ - ٢ + ٤ = ٤.",
      "٣. المعياران: |هـ| = ٣، |ن| = ٣.",
      "٤. جا(هـ) = ٤ / (٣ × ٣) = ٤ / ٩."
    ],
    "teacherTipEn": "Notice it is SINE of the angle, not cosine, because the normal n is perpendicular to the plane.",
    "teacherTipAr": "انتبه: نستخدم الجيب جا وليس جيب التمام جتا لأن المتجه ن عمودي على المستوى وليس موازياً له."
  },
  {
    "id": "solid_ch2_db_med_52",
    "titleEn": "Distance Between Two Parallel Planes",
    "titleAr": "البعد العمودي بين مستويين متوازيين",
    "difficulty": "medium",
    "questionEn": "Find the distance between the two parallel planes $3x + 4y - 12z = 10$ and $3x + 4y - 12z = -16$.",
    "questionAr": "أوجد البعد العمودي بين المستويين المتوازيين $3x + 4y - 12z = 10$ و $3x + 4y - 12z = -16$.",
    "optionsEn": [
      "2 units",
      "4 units",
      "3 units",
      "1 unit"
    ],
    "optionsAr": [
      "2 وحدات طول",
      "4 وحدات طول",
      "3 وحدات طول",
      "1 وحدة طول"
    ],
    "correctAnswer": "2 units",
    "correctIndex": 0,
    "hintEn": "d = |D1 - D2| / sqrt(A^2 + B^2 + C^2).",
    "hintAr": "البعد بين مستويين متوازيين = |د١ - د٢| / معيار المتجه العمودي.",
    "stepByStepSolutionEn": [
      "1. The two planes have normal vector $\\vec{n} = (3, 4, -12)$, with magnitude $\\|\\vec{n}\\| = \\sqrt{3^2 + 4^2 + (-12)^2} = \\sqrt{9 + 16 + 144} = \\sqrt{169} = 13$.",
      "2. The formula for distance between parallel planes is $d = \\frac{|D_2 - D_1|}{\\sqrt{A^2 + B^2 + C^2}}$.",
      "3. $d = \\frac{|10 - (-16)|}{13} = \\frac{26}{13} = 2$ units."
    ],
    "stepByStepSolutionAr": [
      "١. المتجه العمودي للمستويين هو $\\vec{n} = (3, 4, -12)$، ومعياره $\\|\\vec{n}\\| = \\sqrt{9 + 16 + 144} = \\sqrt{169} = 13$.",
      "٢. قانون البعد بين مستويين متوازيين: $d = \\frac{|D_2 - D_1|}{\\sqrt{A^2 + B^2 + C^2}}$.",
      "٣. البعد = $|10 - (-16)| / 13 = 26 / 13 = 2$ وحدة طول."
    ],
    "teacherTipEn": "Make sure the coefficients A, B, C are matched before using the formula.",
    "teacherTipAr": "تأكد من توحيد معاملات س، ص، ع في كلا المستويين قبل تطبيق قانون الفرق بين الثوابت."
  },
  {
    "id": "solid_ch2_db_med_53",
    "titleEn": "Plane Equation Passing Through Three Non-Collinear Points",
    "titleAr": "معادلة المستوى المار بثلاث نقاط ليست على استقامة واحدة",
    "difficulty": "medium",
    "diagramType": "plane_intercepts_3d",
    "questionEn": "Find the Cartesian equation of the plane passing through $A(1, 0, 0)$, $B(0, 1, 0)$, and $C(0, 0, 1)$.",
    "questionAr": "أوجد المعادلة الكارتيزية للمستوى المار بالنقاط $A(1, 0, 0)$ و $B(0, 1, 0)$ و $C(0, 0, 1)$.",
    "optionsEn": [
      "$x + y + z = 1$",
      "$x + y + z = 3$",
      "$x - y + z = 1$",
      "$x + 2y + 3z = 1$"
    ],
    "optionsAr": [
      "$x + y + z = 1$",
      "$x + y + z = 3$",
      "$x - y + z = 1$",
      "$x + 2y + 3z = 1$"
    ],
    "correctAnswer": "$x + y + z = 1$",
    "correctIndex": 0,
    "hintEn": "The intercepts are a = 1, b = 1, c = 1: x/1 + y/1 + z/1 = 1.",
    "hintAr": "الأجزاء المقطوعة هي ١، ١، ١: س/١ + ص/١ + ع/١ = ١.",
    "stepByStepSolutionEn": [
      "1. Using intercept form: $\\frac{x}{a} + \\frac{y}{b} + \\frac{z}{c} = 1$.",
      "2. Here the intercepts on the three axes are all 1: $\\frac{x}{1} + \\frac{y}{1} + \\frac{z}{1} = 1$.",
      "3. Multiplying out: $x + y + z = 1$."
    ],
    "stepByStepSolutionAr": [
      "١. باستخدام معادلة الأجزاء المقطوعة: س/أ + ص/ب + ع/جـ = ١.",
      "٢. الأجزاء المقطوعة متساوية وتساوي ١: س/١ + ص/١ + ع/١ = ١.",
      "٣. بالتبسيط: س + ص + ع = ١."
    ],
    "teacherTipEn": "Normal vector is (1, 1, 1), perpendicular to the equilateral triangle ABC.",
    "teacherTipAr": "المتجه العمودي هو (١، ١، ١) وهو عمودي على سطح المثلث المتساوي الأضلاع أ ب جـ."
  },
  {
    "id": "solid_ch2_db_med_54",
    "titleEn": "Direction Vector of Line of Intersection of Two Planes",
    "titleAr": "متجه اتجاه خط تقاطع مستويين",
    "difficulty": "medium",
    "questionEn": "Find the direction vector $\\vec{d}$ of the line of intersection of the planes $x + y + z = 1$ and $x - y + 2z = 2$.",
    "questionAr": "أوجد متجه اتجاه $\\vec{d}$ لخط تقاطع المستويين $x + y + z = 1$ و $x - y + 2z = 2$.",
    "optionsEn": [
      "$(3, -1, -2)$",
      "$(1, 0, 3)$",
      "$(0, 2, -1)$",
      "$(2, 0, 3)$"
    ],
    "optionsAr": [
      "$(3, -1, -2)$",
      "$(1, 0, 3)$",
      "$(0, 2, -1)$",
      "$(2, 0, 3)$"
    ],
    "correctAnswer": "$(3, -1, -2)$",
    "correctIndex": 0,
    "hintEn": "d = n1 x n2.",
    "hintAr": "متجه اتجاه خط التقاطع = ن١ × ن٢.",
    "stepByStepSolutionEn": [
      "1. The normal vectors are $\\vec{n}_1 = (1, 1, 1)$ and $\\vec{n}_2 = (1, -1, 2)$.",
      "2. The line of intersection is perpendicular to both normal vectors, so $\\vec{d} = \\vec{n}_1 \\times \\vec{n}_2$:",
      "   $$\\vec{d} = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ 1 & 1 & 1 \\\\ 1 & -1 & 2 \\end{vmatrix}$$",
      "3. Compute components:",
      "   $$\\hat{i}(2 - (-1)) - \\hat{j}(2 - 1) + \\hat{k}(-1 - 1) = 3\\hat{i} - \\hat{j} - 2\\hat{k} = (3, -1, -2)$$"
    ],
    "stepByStepSolutionAr": [
      "١. المتجهان العموديان: ن١ = (١، ١، ١) و ن٢ = (١، -١، ٢).",
      "٢. خط التقاطع عمودي على كلا العموديين، إذن هـ = ن١ × ن٢.",
      "٣. بحساب الضرب الاتجاهي: ٣ س^ - ص^ - ٢ ع^ = (٣، -١، -٢)."
    ],
    "teacherTipEn": "Cross product of plane normals always gives the direction of their intersection line.",
    "teacherTipAr": "الضرب الاتجاهي لعموديَي مستويين يعطي دائماً متجه اتجاه خط تقاطعهما."
  },
  {
    "id": "solid_ch2_db_med_55",
    "titleEn": "Distance from Point to Plane",
    "titleAr": "طول العمود الساقط من نقطة معلومة على مستوى",
    "difficulty": "medium",
    "questionEn": "Find the perpendicular distance from the point $P(1, 2, 3)$ to the plane $x + 2y + 2z = 5$.",
    "questionAr": "أوجد طول العمود الساقط من النقطة $P(1, 2, 3)$ على المستوى $x + 2y + 2z = 5$.",
    "optionsEn": [
      "2 units",
      "3 units",
      "$\\frac{4}{3}$ units",
      "1 unit"
    ],
    "optionsAr": [
      "2 وحدة طول",
      "3 وحدات طول",
      "$\\frac{4}{3}$ وحدة طول",
      "1 وحدة طول"
    ],
    "correctAnswer": "2 units",
    "correctIndex": 0,
    "hintEn": "d = |Ax0 + By0 + Cz0 - D| / sqrt(A^2 + B^2 + C^2).",
    "hintAr": "طول العمود = مقياس التعويض بالنقطة في معادلة المستوى مقسوماً على معيار المتجه العمودي.",
    "stepByStepSolutionEn": [
      "1. Perpendicular distance formula:",
      "   $$d = \\frac{|A x_0 + B y_0 + C z_0 - D|}{\\sqrt{A^2 + B^2 + C^2}}$$",
      "2. Substitute $P(1, 2, 3)$ into $x + 2y + 2z - 5 = 0$:",
      "   $$|1(1) + 2(2) + 2(3) - 5| = |1 + 4 + 6 - 5| = |6| = 6$$",
      "3. Denominator: $\\sqrt{1^2 + 2^2 + 2^2} = \\sqrt{1 + 4 + 4} = 3$.",
      "4. Distance $d = \\frac{6}{3} = 2$ units."
    ],
    "stepByStepSolutionAr": [
      "١. قانون طول العمود الساقط من نقطة على مستوى:",
      "   $$d = \\frac{|A x_0 + B y_0 + C z_0 - D|}{\\sqrt{A^2 + B^2 + C^2}}$$",
      "٢. بالتعويض بالنقطة (١، ٢، ٣): |١ + ٤ + ٦ - ٥| = ٦.",
      "٣. المقام = جذر(١ + ٤ + ٤) = ٣.",
      "٤. طول العمود = ٦ / ٣ = ٢ وحدة طول."
    ],
    "teacherTipEn": "Always ensure the constant D is on the left side (equated to 0) before substituting.",
    "teacherTipAr": "تأكد دائماً من تصفير معادلة المستوى قبل التعويض بالنقطة في البسط."
  },
  {
    "id": "solid_ch2_db_med_56",
    "titleEn": "Distance from Point to Straight Line in Space",
    "titleAr": "طول العمود الساقط من نقطة على خط مستقيم في الفراغ",
    "difficulty": "medium",
    "questionEn": "Find the distance from point $P(1, 0, 0)$ to the line passing through origin with direction $\\vec{d} = (0, 1, 0)$ (the $y$-axis).",
    "questionAr": "أوجد البعد العمودي للنقطة $P(1, 0, 0)$ عن المستقيم المار بنقطة الأصل ومتجه اتجاهه $\\vec{d} = (0, 1, 0)$ (محور الصادات).",
    "optionsEn": [
      "1 unit",
      "0 units",
      "2 units",
      "$\\sqrt{2}$ units"
    ],
    "optionsAr": [
      "1 وحدة طول",
      "0 وحدة طول",
      "2 وحدة طول",
      "$\\sqrt{2}$ وحدة طول"
    ],
    "correctAnswer": "1 unit",
    "correctIndex": 0,
    "hintEn": "d = |AP x d| / |d|.",
    "hintAr": "طول العمود = معيار الضرب الاتجاهي لـ (أ ب × هـ) مقسوماً على معيار هـ.",
    "stepByStepSolutionEn": [
      "1. Let $A(0, 0, 0)$ be a point on the line. Then $\\vec{AP} = P - A = (1, 0, 0)$.",
      "2. Compute cross product with $\\vec{d} = (0, 1, 0)$:",
      "   $$\\vec{AP} \\times \\vec{d} = (1, 0, 0) \\times (0, 1, 0) = (0, 0, 1) = \\hat{k}$$",
      "3. Distance formula: $d = \\frac{|\\vec{AP} \\times \\vec{d}|}{|\\vec{d}|} = \\frac{1}{1} = 1$ unit."
    ],
    "stepByStepSolutionAr": [
      "١. النقطة أ(٠، ٠، ٠) تقع على المستقيم، المتجه أ ب = (١، ٠، ٠).",
      "٢. الضرب الاتجاهي: أ ب × هـ = (١، ٠، ٠) × (٠، ١، ٠) = (٠، ٠، ١).",
      "٣. طول العمود = |أ ب × هـ| / |هـ| = ١ / ١ = ١ وحدة طول."
    ],
    "teacherTipEn": "Notice that P(1, 0, 0) lies on the x-axis, and its distance to the y-axis is obviously 1.",
    "teacherTipAr": "النقطة تقع على محور السينات عند س = ١، وبعدها عن محور الصادات يساوي ١ بداهة."
  },
  {
    "id": "solid_ch2_db_med_57",
    "titleEn": "Intersection Point of Straight Line and Plane",
    "titleAr": "نقطة تقاطع خط مستقيم مع مستوى",
    "difficulty": "medium",
    "questionEn": "Find the point of intersection between the line $\\vec{r} = (1, 0, 2) + t(1, 1, -1)$ and the plane $2x + y + z = 8$.",
    "questionAr": "أوجد نقطة تقاطع المستقيم $\\vec{r} = (1, 0, 2) + t(1, 1, -1)$ مع المستوى $2x + y + z = 8$.",
    "optionsEn": [
      "$(3, 2, 0)$",
      "$(2, 1, 1)$",
      "$(4, 3, -1)$",
      "$(1, 0, 2)$"
    ],
    "optionsAr": [
      "$(3, 2, 0)$",
      "$(2, 1, 1)$",
      "$(4, 3, -1)$",
      "$(1, 0, 2)$"
    ],
    "correctAnswer": "$(3, 2, 0)$",
    "correctIndex": 0,
    "hintEn": "Substitute x = 1 + t, y = t, z = 2 - t into plane equation.",
    "hintAr": "عوض بإحداثيات المستقيم البارامترية في معادلة المستوى لإيجاد قيمة الوسيط ك.",
    "stepByStepSolutionEn": [
      "1. Parametric equations of line: $x = 1 + t$, $y = t$, $z = 2 - t$.",
      "2. Substitute into plane equation $2x + y + z = 8$:",
      "   $$2(1 + t) + t + (2 - t) = 8 \\implies 2 + 2t + t + 2 - t = 8$$",
      "   $$2t + 4 = 8 \\implies 2t = 4 \\implies t = 2$$",
      "3. Substitute $t = 2$ into line equations: $x = 1 + 2 = 3$, $y = 2$, $z = 2 - 2 = 0$.",
      "4. The intersection point is $(3, 2, 0)$."
    ],
    "stepByStepSolutionAr": [
      "١. المعادلات البارامترية للمستقيم: س = ١ + ك، ص = ك، ع = ٢ - ك.",
      "٢. بالتعويض في معادلة المستوى ٢س + ص + ع = ٨:",
      "   ٢(١ + ك) + ك + (٢ - ك) = ٨ ومنها ٢ك + ٤ = ٨ أي ك = ٢.",
      "٣. بالتعويض عن ك = ٢: س = ٣، ص = ٢، ع = ٠.",
      "٤. نقطة التقاطع هي (٣، ٢، ٠)."
    ],
    "teacherTipEn": "Check by plugging (3, 2, 0) back into plane: 2(3) + 2 + 0 = 8 (valid).",
    "teacherTipAr": "تحقق بالتعويض بالنقطة الناتجة في معادلة المستوى: ٢(٣) + ٢ + ٠ = ٨ (صحيحة)."
  },
  {
    "id": "solid_ch2_db_med_58",
    "titleEn": "Equation of Plane Parallel to Two Skew Vectors",
    "titleAr": "معادلة مستوى يوازي متجهين معلومين ويمر بنقطة",
    "difficulty": "medium",
    "questionEn": "Find the Cartesian equation of the plane passing through $A(1, 1, 1)$ and parallel to both vectors $\\vec{u} = (1, 0, 1)$ and $\\vec{v} = (0, 1, 1)$.",
    "questionAr": "أوجد المعادلة الكارتيزية للمستوى المار بالنقطة $A(1, 1, 1)$ ويوازي كلا المتجهين $\\vec{u} = (1, 0, 1)$ و $\\vec{v} = (0, 1, 1)$.",
    "optionsEn": [
      "$x + y - z = 1$",
      "$x - y + z = 1$",
      "$x + y + z = 3$",
      "$2x - y - z = 0$"
    ],
    "optionsAr": [
      "$x + y - z = 1$",
      "$x - y + z = 1$",
      "$x + y + z = 3$",
      "$2x - y - z = 0$"
    ],
    "correctAnswer": "$x + y - z = 1$",
    "correctIndex": 0,
    "hintEn": "n = u x v.",
    "hintAr": "المتجه العمودي على المستوى ن = u × v.",
    "stepByStepSolutionEn": [
      "1. The normal vector $\\vec{n}$ is perpendicular to both parallel vectors:",
      "   $$\\vec{n} = \\vec{u} \\times \\vec{v} = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ 1 & 0 & 1 \\\\ 0 & 1 & 1 \\end{vmatrix} = -\\hat{i} - \\hat{j} + \\hat{k} \\implies (-1, -1, 1)$$",
      "2. Multiplying by $-1$ gives standard normal $\\vec{n} = (1, 1, -1)$.",
      "3. Plane equation: $1(x - 1) + 1(y - 1) - 1(z - 1) = 0 \\implies x + y - z - 1 = 0 \\implies x + y - z = 1$."
    ],
    "stepByStepSolutionAr": [
      "١. المتجه العمودي على المستوى: ن = u × v = (-١، -١، ١) أو (١، ١، -١).",
      "٢. معادلة المستوى: ١(س - ١) + ١(ص - ١) - ١(ع - ١) = ٠.",
      "٣. بالتبسيط: س + ص - ع = ١."
    ],
    "teacherTipEn": "Cross product of two direction vectors in a plane always gives its normal vector.",
    "teacherTipAr": "الضرب الاتجاهي لأي متجهين يوازيان المستوى يعطي متجهه العمودي مباشرة."
  },
  {
    "id": "solid_ch2_db_med_59",
    "titleEn": "Coplanar Lines Condition in Determinant Form",
    "titleAr": "شرط وقوع مستقيمين في مستوى واحد",
    "difficulty": "medium",
    "questionEn": "Two lines with direction vectors $\\vec{d}_1 = (1, 2, 3)$ and $\\vec{d}_2 = (2, 3, 4)$ passing through $A(1, 1, 1)$ and $B(2, 3, 4)$ are coplanar if which scalar triple product vanishes?",
    "questionAr": "يقع المستقيمان اللذان متجها اتجاههما $\\vec{d}_1 = (1, 2, 3)$ و $\\vec{d}_2 = (2, 3, 4)$ والماران بالنقطتين $A(1, 1, 1)$ و $B(2, 3, 4)$ في مستوى واحد إذا وفقط إذا كان:",
    "optionsEn": [
      "$(\\vec{B} - \\vec{A}) \\cdot (\\vec{d}_1 \\times \\vec{d}_2) = 0$",
      "$\\vec{d}_1 \\cdot \\vec{d}_2 = 0$",
      "$\\vec{d}_1 \\times \\vec{d}_2 = \\vec{0}$",
      "$(\\vec{B} - \\vec{A}) \\times \\vec{d}_1 = \\vec{0}$"
    ],
    "optionsAr": [
      "$(\\vec{B} - \\vec{A}) \\cdot (\\vec{d}_1 \\times \\vec{d}_2) = 0$",
      "$\\vec{d}_1 \\cdot \\vec{d}_2 = 0$",
      "$\\vec{d}_1 \\times \\vec{d}_2 = \\vec{0}$",
      "$(\\vec{B} - \\vec{A}) \\times \\vec{d}_1 = \\vec{0}$"
    ],
    "correctAnswer": "$(\\vec{B} - \\vec{A}) \\cdot (\\vec{d}_1 \\times \\vec{d}_2) = 0$",
    "correctIndex": 0,
    "hintEn": "The connecting vector AB must lie in the plane spanned by d1 and d2.",
    "hintAr": "المتجه أ ب الواصل بين النقطتين يجب أن يقع في نفس المستوى مع متجهي الاتجاه.",
    "stepByStepSolutionEn": [
      "1. Two lines are coplanar if and only if the vector joining a point on each line, $\\vec{AB} = \\vec{B} - \\vec{A}$, is coplanar with both direction vectors $\\vec{d}_1$ and $\\vec{d}_2$.",
      "2. The coplanarity condition for three vectors is that their scalar triple product equals zero:",
      "   $$(\\vec{B} - \\vec{A}) \\cdot (\\vec{d}_1 \\times \\vec{d}_2) = 0$$"
    ],
    "stepByStepSolutionAr": [
      "١. يقع مستقيمان في مستوى واحد إذا وفقط إذا كان المتجه الواصل بين نقطتين عليهما أ ب يقع في نفس المستوى مع متجهي الاتجاه هـ١ و هـ٢.",
      "٢. شرط وقوع المتجهات الثلاثة في مستوى واحد هو انعدام ضربها الثلاثي القياسي:",
      "   $$(\\vec{B} - \\vec{A}) \\cdot (\\vec{d}_1 \\times \\vec{d}_2) = 0$$"
    ],
    "teacherTipEn": "If this scalar triple product is non-zero, the two lines are SKEW (non-coplanar).",
    "teacherTipAr": "إذا كان هذا المقدار لا يساوي صفراً، فإن المستقيمين يكونان متخالفين."
  }
],
  hots: [
  {
    "id": "solid_ch2_db_hots_01",
    "titleEn": "Volume of Tetrahedron from Vertices",
    "titleAr": "حجم هرم ثلاثي بمعلومية رؤوسه",
    "difficulty": "hots",
    "questionEn": "Find the volume of the tetrahedron with vertices at the origin $O(0, 0, 0)$ and points $A(2, 0, 0), B(0, 3, 0), C(0, 0, 4)$.",
    "questionAr": "أوجد حجم هرم ثلاثي رؤوسه نقطة الأصل $O(0، 0، 0)$ والنقاط $A(2، 0، 0), B(0، 3، 0), C(0، 0، 4)$.",
    "optionsEn": [
      "$4$",
      "$12$",
      "$24$",
      "$8$"
    ],
    "optionsAr": [
      "4",
      "12",
      "24",
      "8"
    ],
    "correctAnswer": "$4$",
    "correctIndex": 0,
    "hintEn": "Use scalar triple product formula: $V = \\frac{1}{6}|(\\vec{OA} \\times \\vec{OB}) \\cdot \\vec{OC}|$.",
    "hintAr": "استخدم قانون الحجم: الحجم = سدس حاصل الضرب الثلاثي القياسي لمتجهات الأحرف الخارجة من رأس واحد.",
    "stepByStepSolutionEn": [
      "1. The vectors are along the coordinate axes with lengths 2, 3, and 4.",
      "2. The scalar triple product is the determinant: $2 \\times 3 \\times 4 = 24$.",
      "3. Volume of tetrahedron $V = \\frac{1}{6}(24) = 4$."
    ],
    "stepByStepSolutionAr": [
      "١. المتجهات واقعة على محاور الإحداثيات بأطوال 2 و 3 و 4.",
      "٢. الضرب الثلاثي القياسي يساوي محدد المصفوفة القطرية = 2 × 3 × 4 = 24.",
      "٣. حجم الهرم الثلاثي = 24 / 6 = 4."
    ],
    "teacherTipEn": "Volume of a tetrahedron is one-sixth of the volume of the corresponding parallelepiped.",
    "teacherTipAr": "حجم الهرم الثلاثي يساوي سدس حجم متوازي السطوح المشترك معه في نفس الأحرف."
  },
  {
    "id": "solid_ch2_db_hots_02",
    "titleEn": "Coplanar Points Condition with Collinear Subset",
    "titleAr": "شرط وقوع أربع نقاط في مستوى واحد مع استقامة ثلاث منها",
    "difficulty": "hots",
    "questionEn": "The four points $A(1, 2, 3), B(2, 3, 4), C(3, 4, 5), D(k, 1, 0)$ are coplanar for what value of $k$?",
    "questionAr": "تقع النقاط الأربع $A(1، 2، 3), B(2، 3، 4), C(3، 4، 5), D(k، 1، 0)$ في مستوى واحد لأي قيمة لـ $k$؟",
    "optionsEn": [
      "Any real number $k$",
      "$k = 1$ only",
      "$k = 0$ only",
      "No value of $k$"
    ],
    "optionsAr": [
      "أي عدد حقيقي k",
      "k = 1 فقط",
      "k = 0 فقط",
      "لا توجد أي قيمة لـ k"
    ],
    "correctAnswer": "Any real number $k$",
    "correctIndex": 0,
    "hintEn": "Check if the first three points are collinear before setting up a determinant.",
    "hintAr": "تحقق أولاً مما إذا كانت النقاط الثلاث الأولى على استقامة واحدة قبل حساب المحدد.",
    "stepByStepSolutionEn": [
      "1. Compute $\\vec{AB} = (1, 1, 1)$ and $\\vec{BC} = (1, 1, 1)$.",
      "2. Since $\\vec{AB} = \\vec{BC}$, points $A, B, C$ are collinear and determine a single straight line.",
      "3. Any straight line and any fourth point in space determine at least one plane containing all four points.",
      "4. Therefore, the four points are coplanar for every real number $k$."
    ],
    "stepByStepSolutionAr": [
      "١. المتجه أ ب = (1، 1، 1) والمتجه ب جـ = (1، 1، 1).",
      "٢. بما أن أ ب = ب جـ، فالنقاط أ، ب، جـ تقع على استقامة واحدة وتشكل مستقيماً واحداً.",
      "٣. أي خط مستقيم مع أي نقطة رابعة في الفراغ يقعان دائماً في مستوى واحد.",
      "٤. إذن النقاط الأربع تقع في مستوى واحد لجميع قيم ك الحقيقية."
    ],
    "teacherTipEn": "A classic conceptual trap: collinearity of 3 points guarantees coplanarity with ANY 4th point.",
    "teacherTipAr": "فخ مفاهيمي شهير: استقامة ثلاث نقاط يضمن وقوعها مع أي نقطة رابعة في مستوى واحد دائماً."
  },
  {
    "id": "solid_ch2_db_hots_03",
    "titleEn": "Area of Orthogonally Projected Triangle",
    "titleAr": "مساحة مسقط مثلث على مستوى مائل",
    "difficulty": "hots",
    "questionEn": "A triangle in space has area $20\\text{ cm}^2$ and lies in a plane inclined at $60^\\circ$ to the $xy$-plane. Find the area of its orthogonal projection on the $xy$-plane.",
    "questionAr": "مثلث في الفراغ مساحته $20\\text{ سم}^2$ ويقع في مستوى يميل بزاوية $60^\\circ$ على المستوى الإحداثي $xy$. أوجد مساحة مسقطه العمودي على المستوى $xy$.",
    "optionsEn": [
      "$10\\text{ cm}^2$",
      "$20\\text{ cm}^2$",
      "$10\\sqrt{3}\\text{ cm}^2$",
      "$5\\text{ cm}^2$"
    ],
    "optionsAr": [
      "10 سم²",
      "20 سم²",
      "10 جذر(3) سم²",
      "5 سم²"
    ],
    "correctAnswer": "$10\\text{ cm}^2$",
    "correctIndex": 0,
    "hintEn": "Projected area formula: $A' = A \\cos\\theta$.",
    "hintAr": "قانون مساحة المسقط العمودي: مساحة المسقط = المساحة الأصلية × جتا زاوية الميل.",
    "stepByStepSolutionEn": [
      "1. The orthogonal projection area formula is $A' = A \\cos\\theta$, where $\\theta$ is the dihedral angle between the planes.",
      "2. $A' = 20 \\cos(60^\\circ) = 20 \\times \\frac{1}{2} = 10\\text{ cm}^2$."
    ],
    "stepByStepSolutionAr": [
      "١. قانون مساحة المسقط العمودي: م' = م × جتا θ حيث θ هي الزاوية بين المستويين.",
      "٢. م' = 20 × جتا(60°) = 20 × (1/2) = 10 سم²."
    ],
    "teacherTipEn": "The projected area on any plane is always strictly less than or equal to the original area.",
    "teacherTipAr": "مساحة المسقط العمودي على أي مستوى تكون دائماً أصغر من أو مساوية للمساحة الأصلية."
  },
  {
    "id": "solid_ch2_db_hots_04",
    "titleEn": "Minimum Volume of Tetrahedron via AM-GM",
    "titleAr": "أدنى حجم لهرم ثلاثي باستخدام متباينة الوسطين",
    "difficulty": "hots",
    "questionEn": "A variable plane passes through $P(1, 2, 3)$ and cuts positive intercepts $a, b, c$ on the coordinate axes. The minimum volume of the tetrahedron formed with the coordinate planes is:",
    "questionAr": "مستوى متغير يمر بالنقطة $P(1، 2، 3)$ ويقطع أجزاء موجبة $a, b, c$ من المحاور. أدنى حجم للهرم الثلاثي المتكون مع مستويات الإحداثيات هو:",
    "optionsEn": [
      "$27$",
      "$18$",
      "$54$",
      "$9$"
    ],
    "optionsAr": [
      "27",
      "18",
      "54",
      "9"
    ],
    "correctAnswer": "$27$",
    "correctIndex": 0,
    "hintEn": "Apply the AM-GM inequality to the intercept plane equation: $\\frac{1}{a} + \\frac{2}{b} + \\frac{3}{c} = 1$.",
    "hintAr": "طبق متباينة الوسطين الحسابي والهندسي على معادلة المستوى: 1/أ + 2/ب + 3/جـ = 1.",
    "stepByStepSolutionEn": [
      "1. Since $P(1, 2, 3)$ lies on $\\frac{x}{a} + \\frac{y}{b} + \\frac{z}{c} = 1$, we have $\\frac{1}{a} + \\frac{2}{b} + \\frac{3}{c} = 1$.",
      "2. By the AM-GM inequality: $\\frac{1}{3} = \\frac{\\frac{1}{a} + \\frac{2}{b} + \\frac{3}{c}}{3} \\ge \\sqrt[3]{\\frac{6}{abc}}$.",
      "3. Cubing both sides: $\\frac{1}{27} \\ge \\frac{6}{abc} \\implies abc \\ge 162$.",
      "4. The volume of the tetrahedron is $V = \\frac{abc}{6} \\ge \\frac{162}{6} = 27$."
    ],
    "stepByStepSolutionAr": [
      "١. بما أن النقطة تقع في المستوى: 1/أ + 2/ب + 3/جـ = 1.",
      "٢. بمتباينة الوسطين: 1/3 ≥ الجذر التكعيبي لـ (6 / أ ب جـ).",
      "٣. بالتكعيب: 1 / 27 ≥ 6 / (أ ب جـ) ومنها أ ب جـ ≥ 162.",
      "٤. حجم الهرم = أ ب جـ / 6 ≥ 162 / 6 = 27."
    ],
    "teacherTipEn": "For point $(x_0, y_0, z_0)$, the minimum volume is always $\\frac{9}{2} x_0 y_0 z_0$.",
    "teacherTipAr": "لأي نقطة (س0، ص0، ع0)، أدنى حجم للهرم هو دائماً (9/2) × حاصل ضرب الإحداثيات الثلاثة."
  },
  {
    "id": "solid_ch2_db_hots_05",
    "titleEn": "Dihedral Angle of Regular Tetrahedron",
    "titleAr": "جيب تمام الزاوية الزوجية لرباعي الوجوه المنتظم",
    "difficulty": "hots",
    "questionEn": "Find the cosine of the dihedral angle between any two adjacent faces of a regular tetrahedron.",
    "questionAr": "أوجد جيب تمام الزاوية الزوجية بين أي وجهين متجاورين في رباعي الوجوه المنتظم.",
    "optionsEn": [
      "$\\frac{1}{3}$",
      "$\\frac{1}{2}$",
      "$\\frac{1}{\\sqrt{3}}$",
      "$\\frac{\\sqrt{3}}{2}$"
    ],
    "optionsAr": [
      "1 / 3",
      "1 / 2",
      "1 / جذر(3)",
      "جذر(3) / 2"
    ],
    "correctAnswer": "$\\frac{1}{3}$",
    "correctIndex": 0,
    "hintEn": "Use coordinates of the vertices of a regular tetrahedron: $(1,1,1), (1,-1,-1), (-1,1,-1), (-1,-1,1)$.",
    "hintAr": "استخدم إحداثيات رؤوس رباعي الوجوه المنتظم لحساب الزاوية بين المتجهات العمودية على الأوجه.",
    "stepByStepSolutionEn": [
      "1. Place vertices at $A(1, 1, 1), B(1, -1, -1), C(-1, 1, -1), D(-1, -1, 1)$.",
      "2. Normal vector to face $ABC$ is proportional to $(1, 1, 1)$ or $(-1, -1, 1)$, face normals point in directions like $(1, 1, -1)$ and $(1, -1, 1)$.",
      "3. The dot product between two inward face unit normals is $\\frac{1}{3}$.",
      "4. Therefore, the cosine of the dihedral angle is $\\cos\\theta = \\frac{1}{3}$."
    ],
    "stepByStepSolutionAr": [
      "١. نحدد رؤوس رباعي الوجوه المنتظم في الفراغ.",
      "٢. حساب المتجهات العمودية على وجهين متجاورين.",
      "٣. حاصل الضرب القياسي لمتجهي الوحدة العموديين يعطي 1 / 3.",
      "٤. إذن جتا الزاوية الزوجية = 1 / 3."
    ],
    "teacherTipEn": "A famous geometric constant: dihedral angle of a regular tetrahedron is $\\arccos(1/3) \\approx 70.53^\\circ$.",
    "teacherTipAr": "ثابت هندسي شهير: الزاوية الزوجية بين وجهي رباعي الوجوه المنتظم هي جتا⁻¹(1/3)."
  },
  {
    "id": "solid_ch2_db_hots_06",
    "titleEn": "Shortest Distance Between Two Skew Lines",
    "titleAr": "أقصر مسافة بين مستقيمين متخالفين",
    "difficulty": "hots",
    "questionEn": "Find the shortest distance between the skew lines $L_1: \\frac{x - 1}{2} = \\frac{y - 2}{3} = \\frac{z - 3}{4}$ and $L_2: \\frac{x - 2}{3} = \\frac{y - 4}{4} = \\frac{z - 5}{5}$.",
    "questionAr": "أوجد أقصر مسافة بين المستقيمين المتخالفين $L_1: \\frac{x - 1}{2} = \\frac{y - 2}{3} = \\frac{z - 3}{4}$ و $L_2: \\frac{x - 2}{3} = \\frac{y - 4}{4} = \\frac{z - 5}{5}$.",
    "optionsEn": [
      "$\\frac{\\sqrt{6}}{6}$",
      "$\\frac{\\sqrt{6}}{3}$",
      "$\\frac{1}{6}$",
      "$\\sqrt{6}$"
    ],
    "optionsAr": [
      "جذر(6) / 6",
      "جذر(6) / 3",
      "1 / 6",
      "جذر(6)"
    ],
    "correctAnswer": "$\\frac{\\sqrt{6}}{6}$",
    "correctIndex": 0,
    "hintEn": "Use formula $d = \\frac{|(\\vec{A}_2 - \\vec{A}_1) \\cdot (\\vec{d}_1 \\times \\vec{d}_2)|}{\\|\\vec{d}_1 \\times \\vec{d}_2\\|}$.",
    "hintAr": "استخدم قانون أقصر مسافة بين متخالفين: القيمة المطلقة للضرب الثلاثي مقسوماً على معيار الضرب الاتجاهي.",
    "stepByStepSolutionEn": [
      "1. Points on lines: $A_1(1, 2, 3)$ and $A_2(2, 4, 5) \\implies \\vec{A_1 A_2} = (1, 2, 2)$.",
      "2. Direction vectors: $\\vec{d}_1 = (2, 3, 4)$ and $\\vec{d}_2 = (3, 4, 5)$.",
      "3. Cross product $\\vec{n} = \\vec{d}_1 \\times \\vec{d}_2 = (15 - 16, -(10 - 12), 8 - 9) = (-1, 2, -1)$.",
      "4. Magnitude $\\|\\vec{n}\\| = \\sqrt{(-1)^2 + 2^2 + (-1)^2} = \\sqrt{6}$.",
      "5. Dot product: $\\vec{A_1 A_2} \\cdot \\vec{n} = 1(-1) + 2(2) + 2(-1) = -1 + 4 - 2 = 1$.",
      "6. Distance $d = \\frac{|1|}{\\sqrt{6}} = \\frac{\\sqrt{6}}{6}$."
    ],
    "stepByStepSolutionAr": [
      "١. نقطتان على المستقيمين: أ1(1، 2، 3) و أ2(2، 4، 5)، والمتجه أ1 أ2 = (1، 2، 2).",
      "٢. متجها الاتجاه: د1 = (2، 3، 4) و د2 = (3، 4، 5).",
      "٣. الضرب الاتجاهي د1 × د2 = (-1، 2، -1).",
      "٤. معيار المتجه العمودي = جذر(6).",
      "٥. حاصل الضرب القياسي = 1.",
      "٦. أقصر مسافة = 1 / جذر(6) = جذر(6) / 6."
    ],
    "teacherTipEn": "The shortest distance is the scalar projection of the displacement vector onto the common normal.",
    "teacherTipAr": "أقصر مسافة هي المسقط القياسي لمتجه الإزاحة بين نقطتين على العمود المشترك."
  },
  {
    "id": "solid_ch2_db_hots_07",
    "titleEn": "Common Perpendicular Direction Vector",
    "titleAr": "متجه اتجاه العمود المشترك لمستقيمين متخالفين",
    "difficulty": "hots",
    "questionEn": "Find a direction vector for the common perpendicular to the skew lines with direction vectors $\\vec{d}_1 = (1, 0, 1)$ and $\\vec{d}_2 = (0, 1, 1)$.",
    "questionAr": "أوجد متجه اتجاه العمود المشترك لمستقيمين متخالفين متجهي اتجاههما $\\vec{d}_1 = (1، 0، 1)$ و $\\vec{d}_2 = (0، 1، 1)$.",
    "optionsEn": [
      "$(1, 1, -1)$",
      "$(1, -1, 1)$",
      "$(1, 1, 1)$",
      "$(0, 0, 1)$"
    ],
    "optionsAr": [
      "(1، 1، -1)",
      "(1، -1، 1)",
      "(1، 1، 1)",
      "(0، 0، 1)"
    ],
    "correctAnswer": "$(1, 1, -1)$",
    "correctIndex": 0,
    "hintEn": "The common perpendicular is orthogonal to both lines: $\\vec{n} \\parallel \\vec{d}_1 \\times \\vec{d}_2$.",
    "hintAr": "العمود المشترك يتعامد مع كلا المستقيمين، فاتجاهه يوازي الضرب الاتجاهي لمتجهي الاتجاه.",
    "stepByStepSolutionEn": [
      "1. Compute cross product $\\vec{d}_1 \\times \\vec{d}_2$:",
      "   $n_x = 0(1) - 1(1) = -1$,",
      "   $n_y = -(1(1) - 1(0)) = -1$,",
      "   $n_z = 1(1) - 0(0) = 1$.",
      "2. $\\vec{n} = (-1, -1, 1)$.",
      "3. Multiplying by $-1$ gives $(1, 1, -1)$, which is parallel to $\\vec{n}$."
    ],
    "stepByStepSolutionAr": [
      "١. حساب الضرب الاتجاهي د1 × د2:",
      "   س = -1، ص = -1، ع = 1.",
      "٢. المتجه الناتج هو (-1، -1، 1).",
      "٣. بضرب المتجه في -1 نحصل على (1، 1، -1) وهو موازٍ له."
    ],
    "teacherTipEn": "The common perpendicular direction is always proportional to $\\vec{d}_1 \\times \\vec{d}_2$.",
    "teacherTipAr": "متجه اتجاه العمود المشترك يوازي دائماً حاصل الضرب الاتجاهي لمتجهي اتجاه الخطين."
  },
  {
    "id": "solid_ch2_db_hots_08",
    "titleEn": "Radius of Inscribed Sphere in Simplex",
    "titleAr": "نصف قطر الكرة المماسة داخلياً للهرم الإحداثي",
    "difficulty": "hots",
    "questionEn": "Find the radius of the sphere inscribed in the tetrahedron bounded by the coordinate planes and the plane $x + y + z = 1$.",
    "questionAr": "أوجد نصف قطر الكرة المماسة داخلياً لأوجه الهرم المحصور بين مستويات الإحداثيات والمستوى $x + y + z = 1$.",
    "optionsEn": [
      "$\\frac{3 - \\sqrt{3}}{6}$",
      "$\\frac{1}{3}$",
      "$\\frac{\\sqrt{3}}{3}$",
      "$\\frac{3 + \\sqrt{3}}{6}$"
    ],
    "optionsAr": [
      "(3 - جذر 3) / 6",
      "1 / 3",
      "جذر(3) / 3",
      "(3 + جذر 3) / 6"
    ],
    "correctAnswer": "$\\frac{3 - \\sqrt{3}}{6}$",
    "correctIndex": 0,
    "hintEn": "The center of the inscribed sphere is $(r, r, r)$. Equate its distance to $x + y + z = 1$ with $r$.",
    "hintAr": "مركز الكرة المماسة داخلياً هو (نق، نق، نق). ساوِ بعده عن المستوى بنصف القطر نق.",
    "stepByStepSolutionEn": [
      "1. Since the sphere touches $x = 0, y = 0, z = 0$, its center is $(r, r, r)$ with $r > 0$.",
      "2. Distance from $(r, r, r)$ to the plane $x + y + z - 1 = 0$ is $\\frac{|3r - 1|}{\\sqrt{1 + 1 + 1}} = \\frac{1 - 3r}{\\sqrt{3}}$.",
      "3. Setting distance equal to radius: $\\frac{1 - 3r}{\\sqrt{3}} = r \\implies 1 - 3r = r\\sqrt{3}$.",
      "4. $r(3 + \\sqrt{3}) = 1 \\implies r = \\frac{1}{3 + \\sqrt{3}} = \\frac{3 - \\sqrt{3}}{(3)^2 - 3} = \\frac{3 - \\sqrt{3}}{6}$."
    ],
    "stepByStepSolutionAr": [
      "١. بما أن الكرة تمس مستويات الإحداثيات، فإن مركزها هو (نق، نق، نق).",
      "٢. بعد المركز عن المستوى س + ص + ع - 1 = 0 هو (1 - 3نق) / جذر(3).",
      "٣. بمساواة البعد بنصف القطر: 1 - 3نق = نق جذر(3).",
      "٤. نق (3 + جذر 3) = 1، ومنها نق = (3 - جذر 3) / 6."
    ],
    "teacherTipEn": "Rationalize the denominator by multiplying numerator and denominator by $(3 - \\sqrt{3})$.",
    "teacherTipAr": "إنطاق المقام بالضرب في المرافق (3 - جذر 3) يبسط الناتج إلى صورته النهائية."
  },
  {
    "id": "solid_ch2_db_hots_09",
    "titleEn": "Angle Between Opposite Edges of Tetrahedron",
    "titleAr": "الزاوية بين ضلعين متقابلين في رباعي وجوه منتظم",
    "difficulty": "hots",
    "questionEn": "In a regular tetrahedron, find the measure of the angle between any pair of opposite edges.",
    "questionAr": "في رباعي الوجوه المنتظم، ما قياس الزاوية بين أي حافتين متقابلتين؟",
    "optionsEn": [
      "$90^\\circ$",
      "$60^\\circ$",
      "$45^\\circ$",
      "$30^\\circ$"
    ],
    "optionsAr": [
      "90°",
      "60°",
      "45°",
      "30°"
    ],
    "correctAnswer": "$90^\\circ$",
    "correctIndex": 0,
    "hintEn": "Use coordinates $A(1, 1, 1), B(1, -1, -1), C(-1, 1, -1), D(-1, -1, 1)$. Opposite edges are AB and CD.",
    "hintAr": "باستخدام الإحداثيات، الحافتان المتقابلتان هما أ ب و جـ د، احسب حاصل ضربهما القياسي.",
    "stepByStepSolutionEn": [
      "1. Represent vertices as $A(1, 1, 1), B(1, -1, -1), C(-1, 1, -1), D(-1, -1, 1)$.",
      "2. Edge $\\vec{AB} = B - A = (0, -2, -2)$.",
      "3. Opposite edge $\\vec{CD} = D - C = (0, -2, 2)$.",
      "4. Dot product: $\\vec{AB} \\cdot \\vec{CD} = 0(0) + (-2)(-2) + (-2)(2) = 4 - 4 = 0$.",
      "5. Since the dot product is zero, the opposite edges are mutually perpendicular ($90^\\circ$)."
    ],
    "stepByStepSolutionAr": [
      "١. نحدد الرؤوس في الفراغ: أ، ب، جـ، د.",
      "٢. المتجه الممثل للحافة الأولى أ ب = (0، -2، -2).",
      "٣. المتجه الممثل للحافة المقابلة جـ د = (0، -2، 2).",
      "٤. الضرب القياسي: أ ب . جـ د = 0 + 4 - 4 = 0.",
      "٥. انعدام الضرب القياسي يعني تعامد الحافتين المتقابلتين تماماً (الزاوية 90°)."
    ],
    "teacherTipEn": "Every pair of opposite edges in a regular tetrahedron is orthogonal.",
    "teacherTipAr": "كل زوج من الأحرف المتقابلة في رباعي الوجوه المنتظم يكونان متعامدين دوماً."
  },
  {
    "id": "solid_ch2_db_hots_10",
    "titleEn": "Acute Angle Bisector Plane",
    "titleAr": "معادلة المستوى المنصف للزاوية الحادة بين مستويين",
    "difficulty": "hots",
    "questionEn": "Find the acute angle bisector plane between the two intersecting planes $x + y = 0$ and $y + z = 0$.",
    "questionAr": "أوجد معادلة المستوى المنصف للزاوية الحادة بين المستويين المتقاطعين $x + y = 0$ و $y + z = 0$.",
    "optionsEn": [
      "$x - z = 0$",
      "$x + 2y + z = 0$",
      "$x + z = 0$",
      "$y - z = 0$"
    ],
    "optionsAr": [
      "س - ع = 0",
      "س + 2ص + ع = 0",
      "س + ع = 0",
      "ص - ع = 0"
    ],
    "correctAnswer": "$x - z = 0$",
    "correctIndex": 0,
    "hintEn": "Bisector planes: $\\frac{x + y}{\\sqrt{2}} = \\pm \\frac{y + z}{\\sqrt{2}}$. Determine sign via dot product.",
    "hintAr": "المستويان المنصفان: (س + ص)/جذر 2 = ± (ص + ع)/جذر 2. حدد الإشارة المناسبة للزاوية الحادة.",
    "stepByStepSolutionEn": [
      "1. Normal vectors $\\vec{n}_1 = (1, 1, 0)$ and $\\vec{n}_2 = (0, 1, 1)$.",
      "2. Dot product: $\\vec{n}_1 \\cdot \\vec{n}_2 = 1 > 0$, so $\\frac{x + y}{\\sqrt{2}} = -\\frac{y + z}{\\sqrt{2}}$ bisects the obtuse angle, and $\\frac{x + y}{\\sqrt{2}} = \\frac{y + z}{\\sqrt{2}}$ bisects the obtuse/acute.",
      "3. More directly, the distance from point $(x, y, z)$ to both planes must be equal.",
      "4. $|x + y| = |y + z| \\implies x + y = -(y + z) \\implies x + 2y + z = 0$ or $x + y = y + z \\implies x - z = 0$.",
      "5. The normal $(1, 0, -1)$ gives acute angle with planes: $\\cos = \\frac{1}{2} \\implies 60^\\circ$. Hence $x - z = 0$."
    ],
    "stepByStepSolutionAr": [
      "١. متجها العمودي: ن1 = (1، 1، 0)، ن2 = (0، 1، 1).",
      "٢. بمساواة بعد نقطة عن المستويين: |س + ص| = |ص + ع|.",
      "٣. الحلان هما: س + 2ص + ع = 0 أو س - ع = 0.",
      "٤. المستوى المنصف للزاوية الحادة هو س - ع = 0."
    ],
    "teacherTipEn": "Equidistant locus from two planes always gives two mutually perpendicular bisector planes.",
    "teacherTipAr": "المحل الهندسي للنقاط المتساوية البعد عن مستويين يعطي مستويين منصفين متعامدين."
  },
  {
    "id": "solid_ch2_db_hots_11",
    "titleEn": "Ratio of Inscribed Sphere Volume to Cube",
    "titleAr": "نسبة حجم الكرة المحصورة داخل مكعب إلى حجم المكعب",
    "difficulty": "hots",
    "questionEn": "A sphere is inscribed inside a cube of side length $a$. Find the ratio of the volume of the sphere to the volume of the cube.",
    "questionAr": "كرة محصورة داخل مكعب طول ضلعه $a$ وتمس جميع أوجهه. ما النسبة بين حجم الكرة إلى حجم المكعب؟",
    "optionsEn": [
      "$\\frac{\\pi}{6}$",
      "$\\frac{\\pi}{4}$",
      "$\\frac{\\pi}{3}$",
      "$\\frac{\\pi}{8}$"
    ],
    "optionsAr": [
      "ط / 6",
      "ط / 4",
      "ط / 3",
      "ط / 8"
    ],
    "correctAnswer": "$\\frac{\\pi}{6}$",
    "correctIndex": 0,
    "hintEn": "Radius of inscribed sphere is $r = \\frac{a}{2}$.",
    "hintAr": "نصف قطر الكرة المماسة داخلياً لأوجه المكعب يساوي نصف طول ضلع المكعب: نق = أ / 2.",
    "stepByStepSolutionEn": [
      "1. Side length of cube is $a$, so volume of cube is $V_{\\text{cube}} = a^3$.",
      "2. The diameter of the inscribed sphere is $a$, so its radius is $r = a/2$.",
      "3. Volume of sphere: $V_{\\text{sphere}} = \\frac{4}{3}\\pi (\\frac{a}{2})^3 = \\frac{4}{3}\\pi \\frac{a^3}{8} = \\frac{\\pi a^3}{6}$.",
      "4. Ratio: $\\frac{V_{\\text{sphere}}}{V_{\\text{cube}}} = \\frac{\\pi a^3 / 6}{a^3} = \\frac{\\pi}{6}$."
    ],
    "stepByStepSolutionAr": [
      "١. حجم المكعب = أ³.",
      "٢. قطر الكرة يساوي طول ضلع المكعب، إذن نق = أ / 2.",
      "٣. حجم الكرة = (4/3) ط (أ/2)³ = ط أ³ / 6.",
      "٤. النسبة بين الحجمين = ط / 6."
    ],
    "teacherTipEn": "A classic Archimedean ratio in 3D geometry.",
    "teacherTipAr": "نسبة أرخميدس الكلاسيكية بين الكرة والمجسم الحاوي لها."
  },
  {
    "id": "solid_ch2_db_hots_12",
    "titleEn": "Circumscribed Sphere to Cube Surface Area Ratio",
    "titleAr": "نسبة مساحة الكرة المحيطة بمكعب إلى مساحة المكعب",
    "difficulty": "hots",
    "questionEn": "A sphere is circumscribed about a cube of side length $a$ (passing through all 8 vertices). Find the ratio of the surface area of the sphere to the total surface area of the cube.",
    "questionAr": "كرة تمر بجميع رؤوس مكعب طول ضلعه $a$. أوجد النسبة بين مساحة سطح الكرة إلى المساحة الكلية لسطح المكعب.",
    "optionsEn": [
      "$\\frac{\\pi}{2}$",
      "$\\pi$",
      "$\\frac{\\pi}{4}$",
      "$\\frac{3\\pi}{2}$"
    ],
    "optionsAr": [
      "ط / 2",
      "ط",
      "ط / 4",
      "3ط / 2"
    ],
    "correctAnswer": "$\\frac{\\pi}{2}$",
    "correctIndex": 0,
    "hintEn": "Diameter of circumscribed sphere equals the body diagonal of the cube: $2R = a\\sqrt{3}$.",
    "hintAr": "قطر الكرة المارة برؤوس المكعب يساوي طول القطر الرئيسي للمكعب: 2 نق = أ جذر(3).",
    "stepByStepSolutionEn": [
      "1. Body diagonal of the cube is $D = \\sqrt{a^2 + a^2 + a^2} = a\\sqrt{3}$.",
      "2. Radius of sphere $R = \\frac{a\\sqrt{3}}{2}$.",
      "3. Surface area of sphere: $S_{\\text{sphere}} = 4\\pi R^2 = 4\\pi (\\frac{3a^2}{4}) = 3\\pi a^2$.",
      "4. Total surface area of cube: $S_{\\text{cube}} = 6a^2$.",
      "5. Ratio: $\\frac{3\\pi a^2}{6a^2} = \\frac{\\pi}{2}$."
    ],
    "stepByStepSolutionAr": [
      "١. طول القطر الرئيسي للمكعب = أ جذر(3).",
      "٢. نصف قطر الكرة المحيطة نق = أ جذر(3) / 2.",
      "٣. مساحة سطح الكرة = 4 ط نق² = 4 ط (3 أ² / 4) = 3 ط أ².",
      "٤. المساحة الكلية لسطح المكعب = 6 أ².",
      "٥. النسبة بين المساحتين = 3 ط أ² / (6 أ²) = ط / 2."
    ],
    "teacherTipEn": "Remember that the body diagonal is the diameter of the circumscribed sphere.",
    "teacherTipAr": "تذكر أن قطر المكعب الرئيسي يمثل قطر الكرة المحيطة به تماماً."
  },
  {
    "id": "solid_ch2_db_hots_13",
    "titleEn": "Line Equally Inclined to Three Axes",
    "titleAr": "خط مستقيم متساوي الميل على محاور الإحداثيات",
    "difficulty": "hots",
    "questionEn": "A straight line is equally inclined to the three positive coordinate axes. Find the cosine of its direction angle with each axis.",
    "questionAr": "خط مستقيم يميل بزوايا متساوية القياس على الاتجاهات الموجبة لمحاور الإحداثيات الثلاثة. أوجد جيب تمام زاوية ميله مع كل محور.",
    "optionsEn": [
      "$\\frac{1}{\\sqrt{3}}$",
      "$\\frac{1}{3}$",
      "$\\frac{1}{2}$",
      "$\\frac{\\sqrt{3}}{2}$"
    ],
    "optionsAr": [
      "1 / جذر(3)",
      "1 / 3",
      "1 / 2",
      "جذر(3) / 2"
    ],
    "correctAnswer": "$\\frac{1}{\\sqrt{3}}$",
    "correctIndex": 0,
    "hintEn": "Use $\\cos^2\\theta + \\cos^2\\theta + \\cos^2\\theta = 1$.",
    "hintAr": "استخدم متطابقة جيوب تمام الاتجاه مع مساواة الزوايا الثلاث.",
    "stepByStepSolutionEn": [
      "1. Let the direction angles be $\\theta_x = \\theta_y = \\theta_z = \\theta$.",
      "2. Then $\\cos^2\\theta + \\cos^2\\theta + \\cos^2\\theta = 1 \\implies 3\\cos^2\\theta = 1$.",
      "3. $\\cos^2\\theta = \\frac{1}{3} \\implies \\cos\\theta = \\frac{1}{\\sqrt{3}}$."
    ],
    "stepByStepSolutionAr": [
      "١. نفرض زوايا الاتجاه متساوية: θس = θص = θع = θ.",
      "٢. 3 جتا²(θ) = 1 ومنها جتا²(θ) = 1 / 3.",
      "٣. جتا θ = 1 / جذر(3)."
    ],
    "teacherTipEn": "Unit direction vector for this line is $(\\frac{1}{\\sqrt{3}}, \\frac{1}{\\sqrt{3}}, \\frac{1}{\\sqrt{3}})$.",
    "teacherTipAr": "متجه الوحدة في اتجاه هذا المستقيم هو (1/√3، 1/√3، 1/√3)."
  },
  {
    "id": "solid_ch2_db_hots_14",
    "titleEn": "Plane Through Line of Intersection Perpendicular to Third",
    "titleAr": "مستوى مار بخط تقاطع مستويين وعمودي على ثالث",
    "difficulty": "hots",
    "questionEn": "Find the equation of the plane passing through the line of intersection of $\\pi_1: x + y + z = 1$ and $\\pi_2: 2x + 3y + 4z = 5$ and perpendicular to $\\pi_3: x - y + z = 0$.",
    "questionAr": "أوجد معادلة المستوى المار بخط تقاطع المستويين $x + y + z = 1$ و $2x + 3y + 4z = 5$ والعمودي على المستوى $x - y + z = 0$.",
    "optionsEn": [
      "$x - z + 2 = 0$",
      "$x + y - 2 = 0$",
      "$2x - z + 1 = 0$",
      "$x - 2z + 1 = 0$"
    ],
    "optionsAr": [
      "س - ع + 2 = 0",
      "س + ص - 2 = 0",
      "2س - ع + 1 = 0",
      "س - 2ع + 1 = 0"
    ],
    "correctAnswer": "$x - z + 2 = 0$",
    "correctIndex": 0,
    "hintEn": "Use plane pencil equation: $\\pi_1 + \\lambda \\pi_2 = 0$, then set normal orthogonal to $\\vec{n}_3$.",
    "hintAr": "استخدم معادلة حزمة المستويات: ط1 + ك ط2 = 0، ثم طبق شرط تعامد المتجه العمودي مع ن3.",
    "stepByStepSolutionEn": [
      "1. Family of planes: $(x + y + z - 1) + \\lambda (2x + 3y + 4z - 5) = 0$.",
      "2. Group terms: $(1 + 2\\lambda)x + (1 + 3\\lambda)y + (1 + 4\\lambda)z - (1 + 5\\lambda) = 0$.",
      "3. Perpendicularity condition with $\\vec{n}_3 = (1, -1, 1)$:",
      "   $(1 + 2\\lambda)(1) + (1 + 3\\lambda)(-1) + (1 + 4\\lambda)(1) = 0$.",
      "4. $1 + 2\\lambda - 1 - 3\\lambda + 1 + 4\\lambda = 0 \\implies 1 + 3\\lambda = 0 \\implies \\lambda = -\\frac{1}{3}$.",
      "5. Multiply family by 3: $3(x + y + z - 1) - (2x + 3y + 4z - 5) = 0 \\implies x - z + 2 = 0$."
    ],
    "stepByStepSolutionAr": [
      "١. معادلة حزمة المستويات: (س + ص + ع - 1) + ك(2س + 3ص + 4ع - 5) = 0.",
      "٢. تجميع المعاملات: (1 + 2ك)س + (1 + 3ك)ص + (1 + 4ك)ع - (1 + 5ك) = 0.",
      "٣. شرط التعامد مع ن3 = (1، -1، 1): (1 + 2ك) - (1 + 3ك) + (1 + 4ك) = 0.",
      "٤. 1 + 3ك = 0 ومنها ك = -1/3.",
      "٥. بالتعويض والضرب في 3: س - ع + 2 = 0."
    ],
    "teacherTipEn": "Pencil of planes avoids finding two explicit points on the intersection line.",
    "teacherTipAr": "استخدام معادلة حزمة المستويات يختصر الحل ويغني عن إيجاد نقطتين صريحتين على خط التقاطع."
  },
  {
    "id": "solid_ch2_db_hots_15",
    "titleEn": "Area of Intersection Circle of Sphere and Plane",
    "titleAr": "مساحة المقطع الدائري الناتج من قطع كرة بمستوى",
    "difficulty": "hots",
    "questionEn": "Find the area of the circular section created by the intersection of the sphere $x^2 + y^2 + z^2 = 49$ and the plane $2x + 3y - 6z = 14$.",
    "questionAr": "أوجد مساحة المقطع الدائري الناتج من تقاطع الكرة $x^2 + y^2 + z^2 = 49$ مع المستوى $2x + 3y - 6z = 14$.",
    "optionsEn": [
      "$45\\pi$",
      "$49\\pi$",
      "$25\\pi$",
      "$20\\pi$"
    ],
    "optionsAr": [
      "45 ط",
      "49 ط",
      "25 ط",
      "20 ط"
    ],
    "correctAnswer": "$45\\pi$",
    "correctIndex": 0,
    "hintEn": "Calculate distance $d$ from origin to plane, then $r^2 = R^2 - d^2$.",
    "hintAr": "احسب بعد مركز الكرة (نقطة الأصل) عن المستوى ل، ثم استخدم نق² = R² - ل².",
    "stepByStepSolutionEn": [
      "1. Center of sphere is $(0, 0, 0)$ and radius squared is $R^2 = 49$.",
      "2. Distance from center to plane: $d = \\frac{|-14|}{\\sqrt{4 + 9 + 36}} = \\frac{14}{7} = 2$.",
      "3. Radius of circular section: $r^2 = R^2 - d^2 = 49 - 2^2 = 49 - 4 = 45$.",
      "4. Area of circle: $A = \\pi r^2 = 45\\pi$."
    ],
    "stepByStepSolutionAr": [
      "١. مركز الكرة هو (0، 0، 0) ومربع نصف قطرها = 49.",
      "٢. بعد المركز عن المستوى: ل = |-14| / جذر(4 + 9 + 36) = 14 / 7 = 2.",
      "٣. مربع نصف قطر دائرة المقطع: نق² = 49 - 4 = 45.",
      "٤. مساحة الدائرة = ط نق² = 45 ط."
    ],
    "teacherTipEn": "Area of the circular cross-section is $\\pi(R^2 - d^2)$.",
    "teacherTipAr": "مساحة المقطع الدائري للكرة تحسب دائماً من ط(نق² - بعد²)."
  },
  {
    "id": "solid_ch2_db_hots_16",
    "titleEn": "Distance from Point to Plane Measured Along Line",
    "titleAr": "المسافة من نقطة إلى مستوى مقاسة في اتجاه مستقيم معلوم",
    "difficulty": "hots",
    "questionEn": "Find the distance from the point $P(1, -2, 3)$ to the plane $x - y + z = 5$ measured parallel to the line with direction vector $\\vec{d} = (2, 3, -6)$.",
    "questionAr": "أوجد المسافة من النقطة $P(1، -2، 3)$ إلى المستوى $x - y + z = 5$ مقاسة في اتجاه يوازي المستقيم الذي متجه اتجاهه $\\vec{d} = (2، 3، -6)$.",
    "optionsEn": [
      "$1$",
      "$7$",
      "$\\frac{1}{7}$",
      "$\\sqrt{7}$"
    ],
    "optionsAr": [
      "1",
      "7",
      "1 / 7",
      "جذر(7)"
    ],
    "correctAnswer": "$1$",
    "correctIndex": 0,
    "hintEn": "Write the line through P with direction vector $\\vec{d}$, find intersection Q, and compute $|PQ|$.",
    "hintAr": "اكتب معادلة المستقيم المار بالنقطة ب في اتجاه د، وأوجد نقطة تقاطعه ق مع المستوى، ثم احسب طول ب ق.",
    "stepByStepSolutionEn": [
      "1. Parametric equations through $P$: $x = 1 + 2t, y = -2 + 3t, z = 3 - 6t$.",
      "2. Substitute into plane: $(1 + 2t) - (-2 + 3t) + (3 - 6t) = 5$.",
      "3. $1 + 2t + 2 - 3t + 3 - 6t = 5 \\implies 6 - 7t = 5 \\implies 7t = 1 \\implies t = 1/7$.",
      "4. The distance is the magnitude of the displacement vector: $d = |t| \\|\\vec{d}\\| = \\frac{1}{7}\\sqrt{2^2 + 3^2 + (-6)^2} = \\frac{1}{7}(7) = 1$."
    ],
    "stepByStepSolutionAr": [
      "١. معادلة الخط المار بـ ب: س = 1 + 2ك، ص = -2 + 3ك، ع = 3 - 6ك.",
      "٢. بالتعويض في معادلة المستوى: (1 + 2ك) - (-2 + 3ك) + (3 - 6ك) = 5.",
      "٣. 6 - 7ك = 5، إذن 7ك = 1 ومنها ك = 1/7.",
      "٤. المسافة = |ك| × معيار د = (1/7) × جذر(4 + 9 + 36) = (1/7) × 7 = 1."
    ],
    "teacherTipEn": "Measured along a line means using the line's direction rather than the normal vector.",
    "teacherTipAr": "القياس في اتجاه مستقيم يعني التحرك بمحاذاة متجه اتجاه المستقيم وليس العمودي على المستوى."
  },
  {
    "id": "solid_ch2_db_hots_17",
    "titleEn": "Volume of Tetrahedron from Tangent Plane to Unit Sphere",
    "titleAr": "حجم هرم ثلاثي محدد بمستوى مماس للكرة",
    "difficulty": "hots",
    "questionEn": "A plane is tangent to the unit sphere $x^2 + y^2 + z^2 = 1$ at the point $(\\frac{1}{\\sqrt{3}}, \\frac{1}{\\sqrt{3}}, \\frac{1}{\\sqrt{3}})$. Find the volume of the tetrahedron it forms with the coordinate planes.",
    "questionAr": "مستوى يمس كرة الوحدة عند النقطة $(\\frac{1}{\\sqrt{3}}, \\frac{1}{\\sqrt{3}}, \\frac{1}{\\sqrt{3}})$. أوجد حجم الهرم الثلاثي الذي يحدده هذا المستوى مع مستويات الإحداثيات.",
    "optionsEn": [
      "$\\frac{\\sqrt{3}}{2}$",
      "$\\sqrt{3}$",
      "$\\frac{3\\sqrt{3}}{2}$",
      "$\\frac{1}{2}$"
    ],
    "optionsAr": [
      "جذر(3) / 2",
      "جذر(3)",
      "3 جذر(3) / 2",
      "1 / 2"
    ],
    "correctAnswer": "$\\frac{\\sqrt{3}}{2}$",
    "correctIndex": 0,
    "hintEn": "Tangent plane equation at $P_0$ is $x_0 x + y_0 y + z_0 z = 1$.",
    "hintAr": "معادلة المستوى المماس عند نقطة التماس هي: س0 س + ص0 ص + ع0 ع = 1.",
    "stepByStepSolutionEn": [
      "1. Tangent plane equation: $\\frac{1}{\\sqrt{3}}x + \\frac{1}{\\sqrt{3}}y + \\frac{1}{\\sqrt{3}}z = 1 \\implies x + y + z = \\sqrt{3}$.",
      "2. Intercepts on coordinate axes are $a = \\sqrt{3}, b = \\sqrt{3}, c = \\sqrt{3}$.",
      "3. Volume of the tetrahedron: $V = \\frac{1}{6} abc = \\frac{1}{6}(\\sqrt{3})^3 = \\frac{3\\sqrt{3}}{6} = \\frac{\\sqrt{3}}{2}$."
    ],
    "stepByStepSolutionAr": [
      "١. معادلة المستوى المماس: س/√3 + ص/√3 + ع/√3 = 1، أي س + ص + ع = جذر(3).",
      "٢. الأجزاء المقطوعة من المحاور هي أ = جذر(3)، ب = جذر(3)، جـ = جذر(3).",
      "٣. حجم الهرم = (1/6) أ ب جـ = (1/6) × (جذر 3)³ = 3 جذر(3) / 6 = جذر(3) / 2."
    ],
    "teacherTipEn": "For symmetric points on a sphere, intercepts on all three axes are equal.",
    "teacherTipAr": "عند نقط التماس المتناظرة على الكرة، تكون الأجزاء المقطوعة متساوية على المحاور الثلاثة."
  },
  {
    "id": "solid_ch2_db_hots_18",
    "titleEn": "Constant Term in Sphere Diameter Equation",
    "titleAr": "الحد المطلق في معادلة كرة بمعلومية طرفي قطر",
    "difficulty": "hots",
    "questionEn": "A sphere has diameter endpoints $A(1, 0, 0)$ and $B(1, 2, 2)$. What is the constant term $d$ when the equation is written in general form $x^2 + y^2 + z^2 + 2ux + 2vy + 2wz + d = 0$?",
    "questionAr": "كرة نهايتا أحد أقطارها هما $A(1، 0، 0)$ و $B(1، 2، 2)$. ما قيمة الحد المطلق $d$ عند كتابة معادلتها في الصورة العامة؟",
    "optionsEn": [
      "$1$",
      "$-1$",
      "$2$",
      "$-2$"
    ],
    "optionsAr": [
      "1",
      "-1",
      "2",
      "-2"
    ],
    "correctAnswer": "$1$",
    "correctIndex": 0,
    "hintEn": "Use diameter form: $(x - x_1)(x - x_2) + (y - y_1)(y - y_2) + (z - z_1)(z - z_2) = 0$.",
    "hintAr": "استخدم صورة طرفي القطر: حاصل ضرب فروق الإحداثيات يساوي صفراً.",
    "stepByStepSolutionEn": [
      "1. Diameter equation: $(x - 1)(x - 1) + (y - 0)(y - 2) + (z - 0)(z - 2) = 0$.",
      "2. Expand: $(x^2 - 2x + 1) + (y^2 - 2y) + (z^2 - 2z) = 0$.",
      "3. Simplify: $x^2 + y^2 + z^2 - 2x - 2y - 2z + 1 = 0$.",
      "4. The constant term is $d = 1$."
    ],
    "stepByStepSolutionAr": [
      "١. معادلة الكرة بصورة طرفي القطر: (س - 1)(س - 1) + ص(ص - 2) + ع(ع - 2) = 0.",
      "٢. بالفك: (س² - 2س + 1) + (ص² - 2ص) + (ع² - 2ع) = 0.",
      "٣. الصورة العامة: س² + ص² + ع² - 2س - 2ص - 2ع + 1 = 0.",
      "٤. الحد المطلق هو د = 1."
    ],
    "teacherTipEn": "Diameter form immediately yields the general equation without needing to compute center and radius first.",
    "teacherTipAr": "صورة طرفي القطر تعطي المعادلة العامة مباشرة دون الحاجة لحساب المركز ونصف القطر أولاً."
  },
  {
    "id": "solid_ch2_db_hots_19",
    "titleEn": "Angle Between Body Diagonal and Face Diagonal",
    "titleAr": "الزاوية بين قطر مكعب رئيسي وقطر وجه",
    "difficulty": "hots",
    "questionEn": "Find the cosine of the acute angle between a space diagonal of a cube and a face diagonal meeting at the same vertex.",
    "questionAr": "أوجد جيب تمام الزاوية الحادة بين قطر رئيسي لمكعب وقطر وجه يلتقيان في نفس الرأس.",
    "optionsEn": [
      "$\\sqrt{\\frac{2}{3}}$",
      "$\\frac{1}{\\sqrt{3}}$",
      "$\\frac{1}{\\sqrt{2}}$",
      "$\\frac{\\sqrt{3}}{2}$"
    ],
    "optionsAr": [
      "جذر(2 / 3)",
      "1 / جذر(3)",
      "1 / جذر(2)",
      "جذر(3) / 2"
    ],
    "correctAnswer": "$\\sqrt{\\frac{2}{3}}$",
    "correctIndex": 0,
    "hintEn": "Take vectors from origin: $\\vec{u} = (1, 1, 1)$ and $\\vec{v} = (1, 1, 0)$.",
    "hintAr": "خذ متجهي القطرين الخارجين من نقطة الأصل: المتجه الرئيسي (1، 1، 1) وقطر الوجه (1، 1، 0).",
    "stepByStepSolutionEn": [
      "1. Space diagonal vector: $\\vec{u} = (1, 1, 1)$, magnitude $\\|\\vec{u}\\| = \\sqrt{3}$.",
      "2. Face diagonal vector: $\\vec{v} = (1, 1, 0)$, magnitude $\\|\\vec{v}\\| = \\sqrt{2}$.",
      "3. Dot product: $\\vec{u} \\cdot \\vec{v} = 1(1) + 1(1) + 1(0) = 2$.",
      "4. $\\cos\\theta = \\frac{2}{\\sqrt{3}\\sqrt{2}} = \\frac{2}{\\sqrt{6}} = \\sqrt{\\frac{4}{6}} = \\sqrt{\\frac{2}{3}}$."
    ],
    "stepByStepSolutionAr": [
      "١. متجه القطر الرئيسي: د = (1، 1، 1)، ومعياره = جذر(3).",
      "٢. متجه قطر الوجه: و = (1، 1، 0)، ومعياره = جذر(2).",
      "٣. حاصل الضرب القياسي = 1 + 1 + 0 = 2.",
      "٤. جتا θ = 2 / جذر(6) = جذر(2 / 3)."
    ],
    "teacherTipEn": "Alternatively, form a right triangle with edges $a, a\\sqrt{2}, a\\sqrt{3}$; $\\cos\\theta = \\frac{a\\sqrt{2}}{a\\sqrt{3}} = \\sqrt{2/3}$.",
    "teacherTipAr": "هندسياً: المثلث القائم أضلاعه أ، أ جذر 2، أ جذر 3؛ جتا الزاوية = المجاور / الوتر = جذر(2/3)."
  },
  {
    "id": "solid_ch2_db_hots_20",
    "titleEn": "Angle Between Face Diagonals of Adjacent Faces",
    "titleAr": "الزاوية بين قطري وجهين متجاورين في مكعب",
    "difficulty": "hots",
    "questionEn": "Find the measure of the angle between two face diagonals on adjacent faces of a cube that start from the same vertex.",
    "questionAr": "أوجد قياس الزاوية بين قطري وجهين متجاورين في مكعب ينطلقان من نفس الرأس.",
    "optionsEn": [
      "$60^\\circ$",
      "$90^\\circ$",
      "$45^\\circ$",
      "$120^\\circ$"
    ],
    "optionsAr": [
      "60°",
      "90°",
      "45°",
      "120°"
    ],
    "correctAnswer": "$60^\\circ$",
    "correctIndex": 0,
    "hintEn": "The two diagonals together with a third face diagonal form an equilateral triangle.",
    "hintAr": "قطرا الوجهين مع قطر الوجه الثالث يصلون بين ثلاثة رؤوس مكونين مثلثاً متساوي الأضلاع.",
    "stepByStepSolutionEn": [
      "1. Let the diagonals from origin be $\\vec{v}_1 = (1, 1, 0)$ and $\\vec{v}_2 = (0, 1, 1)$.",
      "2. Both vectors have length $\\sqrt{2}$.",
      "3. Dot product: $\\vec{v}_1 \\cdot \\vec{v}_2 = 0(0) + 1(1) + 0(1) = 1$.",
      "4. $\\cos\\theta = \\frac{1}{\\sqrt{2}\\sqrt{2}} = \\frac{1}{2} \\implies \\theta = 60^\\circ$."
    ],
    "stepByStepSolutionAr": [
      "١. متجه القطر الأول من الأصل: (1، 1، 0) وطوله جذر(2).",
      "٢. متجه القطر الثاني من الأصل: (0، 1، 1) وطوله جذر(2).",
      "٣. حاصل الضرب القياسي = 1.",
      "٤. جتا θ = 1 / 2، إذن الزاوية تساوي 60°."
    ],
    "teacherTipEn": "Connecting the endpoints of the two diagonals gives a third face diagonal of length $a\\sqrt{2}$, forming an equilateral triangle.",
    "teacherTipAr": "الوصل بين نهايتي القطرين يعطي قطر وجه ثالث طوله أ جذر 2، فيتكون مثلث متساوي الأضلاع زواياه 60°."
  },
  {
    "id": "solid_ch2_db_hots_21",
    "titleEn": "Point on Line Nearest to Origin",
    "titleAr": "أقرب نقطة على خط مستقيم لنقطة الأصل",
    "difficulty": "hots",
    "questionEn": "Find the coordinates of the point on the line $\\vec{r} = (1, 2, 3) + t(1, -1, 1)$ that is nearest to the origin.",
    "questionAr": "أوجد إحداثيات أقرب نقطة على المستقيم $\\vec{r} = (1، 2، 3) + t(1، -1، 1)$ لنقطة الأصل.",
    "optionsEn": [
      "$(\\frac{1}{3}, \\frac{8}{3}, \\frac{7}{3})$",
      "$(1, 2, 3)$",
      "$(\\frac{2}{3}, \\frac{4}{3}, \\frac{5}{3})$",
      "$(0, 3, 2)$"
    ],
    "optionsAr": [
      "(1/3، 8/3، 7/3)",
      "(1، 2، 3)",
      "(2/3، 4/3، 5/3)",
      "(0، 3، 2)"
    ],
    "correctAnswer": "$(\\frac{1}{3}, \\frac{8}{3}, \\frac{7}{3})$",
    "correctIndex": 0,
    "hintEn": "Nearest point P satisfies $\\vec{OP} \\cdot \\vec{d} = 0$.",
    "hintAr": "أقرب نقطة للأصل تحقق تعامد متجه موضعها مع متجه اتجاه المستقيم.",
    "stepByStepSolutionEn": [
      "1. Generic point on line: $P(1 + t, 2 - t, 3 + t)$.",
      "2. For minimal distance, $\\vec{OP} \\perp \\vec{d} \\implies \\vec{OP} \\cdot \\vec{d} = 0$.",
      "3. $(1 + t)(1) + (2 - t)(-1) + (3 + t)(1) = 0$.",
      "4. $1 + t - 2 + t + 3 + t = 0 \\implies 3t + 2 = 0 \\implies t = -2/3$.",
      "5. Coordinates: $x = 1 - 2/3 = 1/3, y = 2 - (-2/3) = 8/3, z = 3 - 2/3 = 7/3$."
    ],
    "stepByStepSolutionAr": [
      "١. نقطة عامة على المستقيم: (1 + ك، 2 - ك، 3 + ك).",
      "٢. شرط أقصر بعد هو التعامد مع متجه اتجاه الخط: و ب . د = 0.",
      "٣. (1 + ك) - (2 - ك) + (3 + ك) = 0، إذن 3ك + 2 = 0 ومنها ك = -2/3.",
      "٤. الإحداثيات هي: (1/3، 8/3، 7/3)."
    ],
    "teacherTipEn": "Nearest point to origin is simply the foot of perpendicular from origin onto the line.",
    "teacherTipAr": "أقرب نقطة على المستقيم للأصل هي مسقط نقطة الأصل على ذلك المستقيم."
  },
  {
    "id": "solid_ch2_db_hots_22",
    "titleEn": "Length of Intercepted Line Inside Sphere",
    "titleAr": "طول القطعة المستقيمة المقطوعة من مستقيم داخل كرة",
    "difficulty": "hots",
    "questionEn": "Find the length of the line segment intercepted by the sphere $x^2 + y^2 + z^2 = 12$ on the line $\\vec{r} = t(1, 1, 1)$.",
    "questionAr": "أوجد طول القطعة المستقيمة التي تقطعها الكرة $x^2 + y^2 + z^2 = 12$ من المستقيم $\\vec{r} = t(1، 1، 1)$.",
    "optionsEn": [
      "$4\\sqrt{3}$",
      "$2\\sqrt{3}$",
      "$12$",
      "$6$"
    ],
    "optionsAr": [
      "4 جذر(3)",
      "2 جذر(3)",
      "12",
      "6"
    ],
    "correctAnswer": "$4\\sqrt{3}$",
    "correctIndex": 0,
    "hintEn": "Substitute parametric coordinates into the sphere equation to find the two intersection points.",
    "hintAr": "عوض بإحداثيات المستقيم البارامترية في معادلة الكرة لحساب نقطتي التقاطع.",
    "stepByStepSolutionEn": [
      "1. Coordinates along the line: $x = t, y = t, z = t$.",
      "2. Substitute into sphere: $t^2 + t^2 + t^2 = 12 \\implies 3t^2 = 12 \\implies t^2 = 4 \\implies t = \\pm 2$.",
      "3. The two intersection points are $P_1(2, 2, 2)$ and $P_2(-2, -2, -2)$.",
      "4. The distance between them is $\\|P_1 - P_2\\| = \\|4(1, 1, 1)\\| = 4\\sqrt{1 + 1 + 1} = 4\\sqrt{3}$."
    ],
    "stepByStepSolutionAr": [
      "١. إحداثيات المستقيم: س = ك، ص = ك، ع = ك.",
      "٢. بالتعويض في معادلة الكرة: 3ك² = 12 ومنها ك² = 4 أي ك = ±2.",
      "٣. نقطتا التقاطع هما (2، 2، 2) و (-2، -2، -2).",
      "٤. طول القطعة المستقيمة بينهما = معيار (4، 4، 4) = 4 جذر(3)."
    ],
    "teacherTipEn": "Notice the line passes through the center $(0,0,0)$, so the segment is a diameter: $2R = 2\\sqrt{12} = 4\\sqrt{3}$.",
    "teacherTipAr": "بما أن الخط يمر بمركز الكرة، فإن القطعة المقطوعة تمثل قطراً كاملاً: 2 نق = 2 جذر(12) = 4 جذر(3)."
  },
  {
    "id": "solid_ch2_db_hots_23",
    "titleEn": "Length of Vector Projection onto Plane",
    "titleAr": "طول مسقط متجه على مستوى معلوم",
    "difficulty": "hots",
    "questionEn": "Find the length of the orthogonal projection of vector $\\vec{v} = (2, 3, 4)$ onto the plane $x + y + z = 0$.",
    "questionAr": "أوجد طول المسقط العمودي للمتجه $\\vec{v} = (2، 3، 4)$ على المستوى $x + y + z = 0$.",
    "optionsEn": [
      "$\\sqrt{2}$",
      "$2$",
      "$\\sqrt{29}$",
      "$3\\sqrt{3}$"
    ],
    "optionsAr": [
      "جذر(2)",
      "2",
      "جذر(29)",
      "3 جذر(3)"
    ],
    "correctAnswer": "$\\sqrt{2}$",
    "correctIndex": 0,
    "hintEn": "Use Pythagorean decomposition: $\\|\\vec{v}\\|^2 = \\|\\vec{v}_{\\parallel}\\|^2 + \\|\\vec{v}_{\\perp}\\|^2$.",
    "hintAr": "استخدم تحليل فيثاغورس: مربع معيار المتجه = مربع معيار مسقطه على المستوى + مربع معيار مركبته العمودية.",
    "stepByStepSolutionEn": [
      "1. Magnitude squared of $\\vec{v}$: $\\|\\vec{v}\\|^2 = 2^2 + 3^2 + 4^2 = 4 + 9 + 16 = 29$.",
      "2. Unit normal to plane: $\\vec{u}_n = \\frac{1}{\\sqrt{3}}(1, 1, 1)$.",
      "3. Component along normal: $v_{\\perp} = |\\vec{v} \\cdot \\vec{u}_n| = \\frac{2 + 3 + 4}{\\sqrt{3}} = \\frac{9}{\\sqrt{3}} = 3\\sqrt{3}$.",
      "4. Square of normal component: $v_{\\perp}^2 = (3\\sqrt{3})^2 = 27$.",
      "5. Projection length squared: $v_{\\parallel}^2 = 29 - 27 = 2 \\implies v_{\\parallel} = \\sqrt{2}$."
    ],
    "stepByStepSolutionAr": [
      "١. مربع معيار المتجه = 4 + 9 + 16 = 29.",
      "٢. متجه الوحدة العمودي على المستوى: ن = (1/جذر 3) (1، 1، 1).",
      "٣. المركبة في اتجاه العمودي = (2 + 3 + 4) / جذر(3) = 3 جذر(3).",
      "٤. مربع المركبة العمودية = 27.",
      "٥. مربع طول المسقط = 29 - 27 = 2، إذن طول المسقط = جذر(2)."
    ],
    "teacherTipEn": "Decomposing into parallel and perpendicular components is much faster than computing the projection vector.",
    "teacherTipAr": "تحليل المتجه لمركبتين متعامدتين أسرع بكثير من حساب المتجه المسقط كاملاً ثم إيجاد معياره."
  },
  {
    "id": "solid_ch2_db_hots_24",
    "titleEn": "Dihedral Angle of Regular Octahedron",
    "titleAr": "الزاوية الزوجية لثماني الأوجه المنتظم",
    "difficulty": "hots",
    "questionEn": "Find the cosine of the interior dihedral angle between two adjacent faces of a regular octahedron.",
    "questionAr": "أوجد جيب تمام الزاوية الزوجية الداخلية بين أي وجهين متجاورين في ثماني السطوح المنتظم.",
    "optionsEn": [
      "$-\\frac{1}{3}$",
      "$\\frac{1}{3}$",
      "$-\\frac{1}{2}$",
      "$\\frac{\\sqrt{3}}{2}$"
    ],
    "optionsAr": [
      "-1 / 3",
      "1 / 3",
      "-1 / 2",
      "جذر(3) / 2"
    ],
    "correctAnswer": "$-\\frac{1}{3}$",
    "correctIndex": 0,
    "hintEn": "Use outward unit normal vectors of two adjacent faces: $\\frac{1}{\\sqrt{3}}(1, 1, 1)$ and $\\frac{1}{\\sqrt{3}}(1, 1, -1)$.",
    "hintAr": "استخدم متجهي الوحدة العموديين إلى الخارج لوجهين متجاورين في ثماني الأوجه.",
    "stepByStepSolutionEn": [
      "1. The faces of a standard octahedron have outward normal vectors $(\\pm 1, \\pm 1, \\pm 1)$.",
      "2. Two adjacent faces share an edge, for example normals $\\vec{n}_1 = \\frac{1}{\\sqrt{3}}(1, 1, 1)$ and $\\vec{n}_2 = \\frac{1}{\\sqrt{3}}(1, 1, -1)$.",
      "3. The dot product of outward normals is $\\vec{n}_1 \\cdot \\vec{n}_2 = \\frac{1 + 1 - 1}{3} = \\frac{1}{3}$.",
      "4. The interior dihedral angle $\\theta$ is supplementary: $\\cos\\theta = -\\vec{n}_1 \\cdot \\vec{n}_2 = -\\frac{1}{3}$."
    ],
    "stepByStepSolutionAr": [
      "١. المتجهات العمودية الخارجية لأوجه ثماني الأوجه تأخذ الصور (±1، ±1، ±1).",
      "٢. لوجهين متجاورين: ن1 = (1/√3)(1، 1، 1) ون2 = (1/√3)(1، 1، -1).",
      "٣. حاصل الضرب القياسي لمتجهي العمودي = 1 / 3.",
      "٤. الزاوية الزوجية الداخلية هي مكملة زاوية العموديين: جتا θ = -1 / 3."
    ],
    "teacherTipEn": "Interior dihedral angle of octahedron is $\\arccos(-1/3) \\approx 109.47^\\circ$.",
    "teacherTipAr": "الزاوية الزوجية لثماني الأوجه المنتظم منفرجة وتساوي جتا⁻¹(-1/3) ≈ 109.47°."
  },
  {
    "id": "solid_ch2_db_hots_25",
    "titleEn": "Shortest Distance from Cube Diagonal to Skew Edge",
    "titleAr": "أقصر مسافة بين قطر مكعب وحافة متخالفة معه",
    "difficulty": "hots",
    "questionEn": "In a cube of edge length $a$, find the shortest distance between a space diagonal and an edge skew to it.",
    "questionAr": "في مكعب طول ضلعه $a$، أوجد أقصر مسافة بين قطر رئيسي للمكعب وحافة متخالفة معه.",
    "optionsEn": [
      "$\\frac{a\\sqrt{2}}{2}$",
      "$\\frac{a}{\\sqrt{3}}$",
      "$\\frac{a}{2}$",
      "$a$"
    ],
    "optionsAr": [
      "أ جذر(2) / 2",
      "أ / جذر(3)",
      "أ / 2",
      "أ"
    ],
    "correctAnswer": "$\\frac{a\\sqrt{2}}{2}$",
    "correctIndex": 0,
    "hintEn": "Take diagonal along $(1, 1, 1)$ and an edge along $(0, 1, 0)$ not passing through $(0,0,0)$ or $(1,1,1)$.",
    "hintAr": "اختر القطر في اتجاه (1، 1، 1) وحافة على محور الصادات مزاحة بمقدار أ.",
    "stepByStepSolutionEn": [
      "1. Space diagonal line: through $(0, 0, 0)$ with direction $\\vec{d}_1 = (1, 1, 1)$.",
      "2. Skew edge: through $(a, 0, 0)$ with direction $\\vec{d}_2 = (0, 1, 0)$.",
      "3. Cross product $\\vec{n} = \\vec{d}_1 \\times \\vec{d}_2 = (-1, 0, 1)$, with magnitude $\\|\\vec{n}\\| = \\sqrt{2}$.",
      "4. Connecting vector: $\\vec{P_1 P_2} = (a, 0, 0)$.",
      "5. Distance: $d = \\frac{|(a, 0, 0) \\cdot (-1, 0, 1)|}{\\sqrt{2}} = \\frac{|-a|}{\\sqrt{2}} = \\frac{a}{\\sqrt{2}} = \\frac{a\\sqrt{2}}{2}$."
    ],
    "stepByStepSolutionAr": [
      "١. مستقيم القطر: يمر بالأصل ومتجه اتجاهه د1 = (1، 1، 1).",
      "٢. الحافة المتخالفة: تمر بـ (أ، 0، 0) ومتجه اتجاهها د2 = (0، 1، 0).",
      "٣. الضرب الاتجاهي د1 × د2 = (-1، 0، 1)، ومعياره = جذر(2).",
      "٤. متجه التوصيل بين نقطتين = (أ، 0، 0).",
      "٥. المسافة = |-أ| / جذر(2) = أ جذر(2) / 2."
    ],
    "teacherTipEn": "A classic Olympiad 3D geometry problem for distance between skew elements in a cube.",
    "teacherTipAr": "مسألة أولمبياد كلاسيكية في حساب البعد بين العناصر المتخالفة في المكعب."
  },
  {
    "id": "solid_ch2_db_hots_26",
    "titleEn": "Planes Equidistant from Four Non-Coplanar Points",
    "titleAr": "عدد المستويات متساوية البعد عن أربع نقاط ليست في مستوى واحد",
    "difficulty": "hots",
    "questionEn": "How many distinct planes are equidistant from four non-coplanar points in space?",
    "questionAr": "كم مستوى مختلفاً في الفراغ يبعد أبعاداً متساوية عن أربع نقاط ليست في مستوى واحد؟",
    "optionsEn": [
      "$7$",
      "$4$",
      "$6$",
      "$8$"
    ],
    "optionsAr": [
      "7",
      "4",
      "6",
      "8"
    ],
    "correctAnswer": "$7$",
    "correctIndex": 0,
    "hintEn": "Partition the 4 points: either 3 on one side and 1 on the other, or 2 on each side.",
    "hintAr": "قسّم النقاط الأربع: إما 3 في جهة ونقطة في الجهة الأخرى، أو نقطتان في كل جهة.",
    "stepByStepSolutionEn": [
      "1. Case 1: Three points on one side of the plane, one point on the other. Each choice of the isolated point gives 1 plane parallel to the face: $\\binom{4}{1} = 4$ planes.",
      "2. Case 2: Two points on each side of the plane. Each pair partition gives 1 plane parallel to two opposite edges: $\\frac{1}{2}\\binom{4}{2} = 3$ planes.",
      "3. Total number of planes = $4 + 3 = 7$."
    ],
    "stepByStepSolutionAr": [
      "١. الحالة الأولى: ثلاث نقاط في جهة ونقطة واحدة في الجهة الأخرى (موازٍ لوجه الهرم): 4 مستويات.",
      "٢. الحالة الثانية: نقطتان في كل جهة (موازٍ لحرفين متقابلين): 3 مستويات.",
      "٣. العدد الإجمالي للمستويات = 4 + 3 = 7 مستويات."
    ],
    "teacherTipEn": "A famous combinatorial geometry theorem: exactly 7 planes are equidistant from 4 vertices of a tetrahedron.",
    "teacherTipAr": "نظرية شهيرة: يوجد بالضبط 7 مستويات متساوية البعد عن رؤوس أي هرم ثلاثي."
  },
  {
    "id": "solid_ch2_db_hots_27",
    "titleEn": "Condition for Two Lines in Space to Intersect",
    "titleAr": "الشرط الجبري لتقاطع مستقيمين في الفراغ",
    "difficulty": "hots",
    "questionEn": "Two straight lines $\\vec{r}_1 = \\vec{a}_1 + t\\vec{d}_1$ and $\\vec{r}_2 = \\vec{a}_2 + s\\vec{d}_2$ intersect in space if and only if:",
    "questionAr": "يتقاطع المستقيمان $\\vec{r}_1 = \\vec{a}_1 + t\\vec{d}_1$ و $\\vec{r}_2 = \\vec{a}_2 + s\\vec{d}_2$ في الفراغ إذا وفقط إذا كان:",
    "optionsEn": [
      "$(\\vec{a}_2 - \\vec{a}_1) \\cdot (\\vec{d}_1 \\times \\vec{d}_2) = 0$",
      "$\\vec{d}_1 \\cdot \\vec{d}_2 = 0$",
      "$\\vec{d}_1 \\times \\vec{d}_2 = \\vec{0}$",
      "$(\\vec{a}_1 \\times \\vec{a}_2) \\cdot \\vec{d}_1 = 0$"
    ],
    "optionsAr": [
      "(أ2 - أ1) . (د1 × د2) = 0",
      "د1 . د2 = 0",
      "د1 × د2 = المتجه الصفري",
      "(أ1 × أ2) . د1 = 0"
    ],
    "correctAnswer": "$(\\vec{a}_2 - \\vec{a}_1) \\cdot (\\vec{d}_1 \\times \\vec{d}_2) = 0$",
    "correctIndex": 0,
    "hintEn": "Two lines intersect if they are coplanar and not parallel.",
    "hintAr": "يتقاطع المستقيمان إذا وقعا في مستوى واحد ولم يكونا متوازيين.",
    "stepByStepSolutionEn": [
      "1. For two lines to intersect, the displacement vector $\\vec{a}_2 - \\vec{a}_1$ and the two direction vectors $\\vec{d}_1, \\vec{d}_2$ must lie in the same plane.",
      "2. This means their scalar triple product must vanish: $(\\vec{a}_2 - \\vec{a}_1) \\cdot (\\vec{d}_1 \\times \\vec{d}_2) = 0$."
    ],
    "stepByStepSolutionAr": [
      "١. لكي يتقاطع المستقيمان يجب أن يقع متجه الإزاحة بين نقطتيهما مع متجها اتجاههما في مستوى واحد.",
      "٢. هذا يكافئ انعدام الضرب الثلاثي القياسي: (أ2 - أ1) . (د1 × د2) = 0."
    ],
    "teacherTipEn": "If the scalar triple product is non-zero, the lines are skew.",
    "teacherTipAr": "إذا كان الضرب الثلاثي القياسي لا يساوي صفراً، فالمستقيمان متخالفان."
  },
  {
    "id": "solid_ch2_db_hots_28",
    "titleEn": "Parallelepiped Volume from Mutual 60 Degree Vectors",
    "titleAr": "حجم متوازي سطوح من متجهات وحدة زواياها 60 درجة",
    "difficulty": "hots",
    "questionEn": "Three unit vectors form the coterminous edges of a parallelepiped. If the angle between any pair of them is $60^\\circ$, find the volume of the parallelepiped.",
    "questionAr": "ثلاثة متجهات وحدة تمثل أحرفاً خارجة من رأس واحد لمتوازي سطوح. إذا كان قياس الزاوية بين أي زوج منها $60^\\circ$، فما حجم متوازي السطوح؟",
    "optionsEn": [
      "$\\frac{\\sqrt{2}}{2}$",
      "$\\frac{1}{2}$",
      "$\\frac{\\sqrt{3}}{2}$",
      "$\\frac{1}{4}$"
    ],
    "optionsAr": [
      "جذر(2) / 2",
      "1 / 2",
      "جذر(3) / 2",
      "1 / 4"
    ],
    "correctAnswer": "$\\frac{\\sqrt{2}}{2}$",
    "correctIndex": 0,
    "hintEn": "Use the Gram determinant: $V^2 = \\det(G)$, where $G_{ij} = \\vec{e}_i \\cdot \\vec{e}_j$.",
    "hintAr": "استخدم محدد غرام: مربع الحجم يساوي محدد مصفوفة حاصل الضرب القياسي للأحرف.",
    "stepByStepSolutionEn": [
      "1. The Gram matrix is $G = \\begin{pmatrix} 1 & 1/2 & 1/2 \\\\ 1/2 & 1 & 1/2 \\\\ 1/2 & 1/2 & 1 \\end{pmatrix}$.",
      "2. $\\det(G) = 1(1 - 1/4) - 1/2(1/2 - 1/4) + 1/2(1/4 - 1/2) = 3/4 - 1/8 - 1/8 = 1/2$.",
      "3. Therefore, $V^2 = 1/2 \\implies V = \\frac{1}{\\sqrt{2}} = \\frac{\\sqrt{2}}{2}$."
    ],
    "stepByStepSolutionAr": [
      "١. مصفوفة غرام للضرب القياسي: القطر 1 وباقي العناصر 1/2 (جتا 60°).",
      "٢. قيمة المحدد = 3/4 - 1/8 - 1/8 = 1/2.",
      "٣. مربع الحجم = 1/2، إذن الحجم = جذر(2) / 2."
    ],
    "teacherTipEn": "Gram determinants calculate volumes in any dimension without setting up explicit coordinates.",
    "teacherTipAr": "محدد غرام يحسب الحجوم الفراغية مباشرة من الأطوال والزوايا دون الحاجة لفرض محاور إحداثية."
  },
  {
    "id": "solid_ch2_db_hots_29",
    "titleEn": "Altitude of Coordinate Tetrahedron to Base",
    "titleAr": "طول الارتفاع النازل على قاعدة الهرم الإحداثي",
    "difficulty": "hots",
    "questionEn": "Find the length of the altitude drawn from the origin $O(0, 0, 0)$ to the base triangle $ABC$ of the plane $6x + 3y + 2z = 6$.",
    "questionAr": "أوجد طول الارتفاع الساقط من نقطة الأصل على قاعدة الهرم الثلاثي الواقعة في المستوى $6x + 3y + 2z = 6$.",
    "optionsEn": [
      "$\\frac{6}{7}$",
      "$\\frac{7}{6}$",
      "$\\frac{6}{49}$",
      "$1$"
    ],
    "optionsAr": [
      "6 / 7",
      "7 / 6",
      "6 / 49",
      "1"
    ],
    "correctAnswer": "$\\frac{6}{7}$",
    "correctIndex": 0,
    "hintEn": "The altitude is simply the perpendicular distance from origin to the base plane.",
    "hintAr": "الارتفاع النازل من الأصل هو طول العمود الساقط من نقطة الأصل على مستوى القاعدة.",
    "stepByStepSolutionEn": [
      "1. Equation of the plane: $6x + 3y + 2z - 6 = 0$.",
      "2. Perpendicular distance formula: $h = \\frac{|-6|}{\\sqrt{6^2 + 3^2 + 2^2}}$.",
      "3. $\\sqrt{36 + 9 + 4} = \\sqrt{49} = 7$.",
      "4. $h = \\frac{6}{7}$."
    ],
    "stepByStepSolutionAr": [
      "١. معادلة مستوى القاعدة: 6س + 3ص + 2ع - 6 = 0.",
      "٢. طول العمود من الأصل: ل = |-6| / جذر(36 + 9 + 4).",
      "٣. معيار العمودي = جذر(49) = 7.",
      "٤. طول الارتفاع = 6 / 7."
    ],
    "teacherTipEn": "Altitude from origin to the plane is identical to the distance from point to plane formula.",
    "teacherTipAr": "الارتفاع الساقط من الأصل هو تطبيق مباشر لقانون بعد نقطة عن مستوى."
  },
  {
    "id": "solid_ch2_db_hots_30",
    "titleEn": "Locus of Points Equidistant from Coordinate Planes",
    "titleAr": "المحل الهندسي للنقاط متساوية البعد عن مستويات الإحداثيات",
    "difficulty": "hots",
    "questionEn": "What geometric figure is represented in 3D space by the system $|x| = |y| = |z|$?",
    "questionAr": "ما الشكل الهندسي الذي يمثله في الفراغ النظام $|x| = |y| = |z|$؟",
    "optionsEn": [
      "4 straight lines through the origin",
      "A sphere centered at the origin",
      "A single plane",
      "8 points"
    ],
    "optionsAr": [
      "4 مستقيمات تمر بنقطة الأصل",
      "كرة مركزها نقطة الأصل",
      "مستوى واحد",
      "8 نقاط"
    ],
    "correctAnswer": "4 straight lines through the origin",
    "correctIndex": 0,
    "hintEn": "Each octant has a body diagonal line where $|x| = |y| = |z|$.",
    "hintAr": "كل ثمن فراغي يحوي قطراً رئيسياً تتحقق عليه المساواة، وتلتقي في 4 خطوط مستقيمة كاملة.",
    "stepByStepSolutionEn": [
      "1. The equation implies $x = \\pm y = \\pm z$.",
      "2. Choosing signs yields 4 independent direction vectors: $(1, 1, 1), (1, 1, -1), (1, -1, 1), (-1, 1, 1)$.",
      "3. Each direction forms a straight line passing through the origin.",
      "4. Hence the locus consists of exactly 4 straight lines."
    ],
    "stepByStepSolutionAr": [
      "١. المعادلة تعني أن س = ± ص = ± ع.",
      "٢. باختيار الإشارات المستقلة نحصل على 4 متجهات اتجاه: (1، 1، 1)، (1، 1، -1)، (1، -1، 1)، (-1، 1، 1).",
      "٣. كل متجه يحدد خطاً مستقيماً كاملاً يمر بنقطة الأصل.",
      "٤. إذن المحل الهندسي يمثل 4 مستقيمات تمر بنقطة الأصل."
    ],
    "teacherTipEn": "These 4 lines are the four body diagonals of the coordinate system.",
    "teacherTipAr": "هذه المستقيمات الأربعة هي الأقطار الرئيسية لنظام الإحداثيات الفراغي."
  },
  {
    "id": "solid_ch2_db_hots_31",
    "titleEn": "Locus with Constant Sum of Squared Distances to Planes",
    "titleAr": "المحل الهندسي لمجموع مربعات الأبعاد عن المستويات",
    "difficulty": "hots",
    "questionEn": "The locus of a point $P(x, y, z)$ whose sum of squared distances from the three coordinate planes is constant $k^2$ is:",
    "questionAr": "المحل الهندسي لنقطة في الفراغ مجموع مربعات أبعادها عن مستويات الإحداثيات الثلاثة يساوي ثابتاً $k^2$ هو:",
    "optionsEn": [
      "A sphere centered at origin",
      "A circular cylinder",
      "An ellipsoid",
      "A cone"
    ],
    "optionsAr": [
      "كرة مركزها نقطة الأصل",
      "أسطوانة دائرية",
      "مجسم قطع ناقص",
      "مخروط"
    ],
    "correctAnswer": "A sphere centered at origin",
    "correctIndex": 0,
    "hintEn": "Distances to coordinate planes are $|x|, |y|, |z|$.",
    "hintAr": "أبعاد النقطة عن مستويات الإحداثيات هي |س|، |ص|، |ع|.",
    "stepByStepSolutionEn": [
      "1. Distance to $yz$-plane is $|x|$; distance to $xz$-plane is $|y|$; distance to $xy$-plane is $|z|$.",
      "2. Sum of squared distances: $|x|^2 + |y|^2 + |z|^2 = x^2 + y^2 + z^2 = k^2$.",
      "3. This is the standard equation of a sphere centered at $(0, 0, 0)$ with radius $k$."
    ],
    "stepByStepSolutionAr": [
      "١. بعد النقطة عن المستوى ص ع هو |س|، وعن س ع هو |ص|، وعن س ص هو |ع|.",
      "٢. مجموع مربعات الأبعاد: س² + ص² + ع² = ك².",
      "٣. هذه هي المعادلة القياسية لكرة مركزها نقطة الأصل ونصف قطرها ك."
    ],
    "teacherTipEn": "Sum of squares of distances to coordinate planes equals $x^2 + y^2 + z^2$.",
    "teacherTipAr": "مجموع مربعات الأبعاد عن المستويات الإحداثية يمثل مربع بعد النقطة عن الأصل مباشرة."
  },
  {
    "id": "solid_ch2_db_hots_32",
    "titleEn": "Locus with Constant Sum of Squared Distances to Axes",
    "titleAr": "المحل الهندسي لمجموع مربعات الأبعاد عن محاور الإحداثيات",
    "difficulty": "hots",
    "questionEn": "The locus of a point $P(x, y, z)$ whose sum of squared distances from the three coordinate axes is a constant $C > 0$ is:",
    "questionAr": "المحل الهندسي لنقطة مجموع مربعات أبعادها عن محاور الإحداثيات الثلاثة يساوي ثابتاً $C > 0$ هو:",
    "optionsEn": [
      "A sphere",
      "A circular cylinder",
      "A hyperboloid",
      "A paraboloid"
    ],
    "optionsAr": [
      "كرة",
      "أسطوانة دائرية",
      "مجسم قطع زائد",
      "مجسم قطع مكافئ"
    ],
    "correctAnswer": "A sphere",
    "correctIndex": 0,
    "hintEn": "Distances squared to axes are $(y^2+z^2), (x^2+z^2), (x^2+y^2)$.",
    "hintAr": "مربعات الأبعاد عن المحاور هي: (ص² + ع²)، (س² + ع²)، (س² + ص²).",
    "stepByStepSolutionEn": [
      "1. Distance squared to $x$-axis: $y^2 + z^2$.",
      "2. Distance squared to $y$-axis: $x^2 + z^2$.",
      "3. Distance squared to $z$-axis: $x^2 + y^2$.",
      "4. Sum: $(y^2 + z^2) + (x^2 + z^2) + (x^2 + y^2) = 2(x^2 + y^2 + z^2) = C$.",
      "5. $x^2 + y^2 + z^2 = \\frac{C}{2}$, which is a sphere centered at the origin."
    ],
    "stepByStepSolutionAr": [
      "١. مربع البعد عن محور السينات = ص² + ع².",
      "٢. مربع البعد عن محور الصادات = س² + ع².",
      "٣. مربع البعد عن محور العينات = س² + ص².",
      "٤. المجموع = 2(س² + ص² + ع²) = جـ.",
      "٥. س² + ص² + ع² = جـ / 2، وهي معادلة كرة مركزها الأصل."
    ],
    "teacherTipEn": "Both plane distances and axis distances lead to spherical loci.",
    "teacherTipAr": "كلا مجموعي مربعات الأبعاد عن المستويات أو المحاور يؤدي إلى معادلة كرة."
  },
  {
    "id": "solid_ch2_db_hots_33",
    "titleEn": "Inradius of Intercept Triangle",
    "titleAr": "نصف قطر الدائرة المماسة داخلياً لمثلث الأجزاء المقطوعة",
    "difficulty": "hots",
    "questionEn": "The plane $x + y + z = 1$ intersects the coordinate axes at $A, B, C$. Find the inradius of $\\triangle ABC$.",
    "questionAr": "المستوى $x + y + z = 1$ يقطع محاور الإحداثيات في أ، ب، جـ. أوجد نصف قطر الدائرة المماسة داخلياً للمثلث أ ب جـ.",
    "optionsEn": [
      "$\\frac{\\sqrt{6}}{6}$",
      "$\\frac{\\sqrt{6}}{3}$",
      "$\\frac{1}{\\sqrt{3}}$",
      "$\\frac{\\sqrt{2}}{2}$"
    ],
    "optionsAr": [
      "جذر(6) / 6",
      "جذر(6) / 3",
      "1 / جذر(3)",
      "جذر(2) / 2"
    ],
    "correctAnswer": "$\\frac{\\sqrt{6}}{6}$",
    "correctIndex": 0,
    "hintEn": "Triangle ABC is equilateral with side length $s = \\sqrt{2}$. Inradius $r = \\frac{s}{2\\sqrt{3}}$.",
    "hintAr": "المثلث أ ب جـ متساوي الأضلاع طول ضلعه جذر 2، ونصف قطر دائرته الداخلية = الضلع / (2 جذر 3).",
    "stepByStepSolutionEn": [
      "1. Intercepts are $A(1, 0, 0), B(0, 1, 0), C(0, 0, 1)$.",
      "2. Side length $s = \\sqrt{1 + 1} = \\sqrt{2}$.",
      "3. In an equilateral triangle, inradius is $r = \\frac{s}{2\\sqrt{3}} = \\frac{\\sqrt{2}}{2\\sqrt{3}} = \\frac{1}{\\sqrt{6}} = \\frac{\\sqrt{6}}{6}$."
    ],
    "stepByStepSolutionAr": [
      "١. نقاط التقاطع: أ(1، 0، 0)، ب(0، 1، 0)، جـ(0، 0، 1).",
      "٢. طول الضلع = جذر(2).",
      "٣. في المثلث المتساوي الأضلاع: نق = ل / (2 جذر 3) = جذر(2) / (2 جذر 3) = جذر(6) / 6."
    ],
    "teacherTipEn": "Inradius formula for equilateral triangle of side $s$ is $\\frac{s}{2\\sqrt{3}}$.",
    "teacherTipAr": "نصف قطر الدائرة الداخلية لمثلث متساوي الأضلاع ضلعه ل هو ل / (2 جذر 3)."
  },
  {
    "id": "solid_ch2_db_hots_34",
    "titleEn": "Circumradius of Intercept Triangle",
    "titleAr": "نصف قطر الدائرة المارة برؤوس مثلث الأجزاء المقطوعة",
    "difficulty": "hots",
    "questionEn": "For the same triangle with vertices $A(1, 0, 0), B(0, 1, 0), C(0, 0, 1)$, find the circumradius $R$ of $\\triangle ABC$.",
    "questionAr": "للمثلث نفسه الذي رؤوسه $A(1، 0، 0), B(0، 1، 0), C(0، 0، 1)$، أوجد نصف قطر الدائرة المارة برؤوسه.",
    "optionsEn": [
      "$\\frac{\\sqrt{6}}{3}$",
      "$\\frac{\\sqrt{6}}{6}$",
      "$\\sqrt{\\frac{3}{2}}$",
      "$\\frac{1}{2}$"
    ],
    "optionsAr": [
      "جذر(6) / 3",
      "جذر(6) / 6",
      "جذر(3 / 2)",
      "1 / 2"
    ],
    "correctAnswer": "$\\frac{\\sqrt{6}}{3}$",
    "correctIndex": 0,
    "hintEn": "Circumradius of an equilateral triangle with side $s = \\sqrt{2}$ is $R = \\frac{s}{\\sqrt{3}}$.",
    "hintAr": "نصف قطر الدائرة الخارجة لمثلث متساوي الأضلاع ضلعه ل هو ل / جذر(3).",
    "stepByStepSolutionEn": [
      "1. Side length $s = \\sqrt{2}$.",
      "2. Circumradius of an equilateral triangle: $R = \\frac{s}{\\sqrt{3}} = \\frac{\\sqrt{2}}{\\sqrt{3}} = \\frac{\\sqrt{6}}{3}$."
    ],
    "stepByStepSolutionAr": [
      "١. طول الضلع ل = جذر(2).",
      "٢. نصف قطر الدائرة الخارجة = ل / جذر(3) = جذر(2) / جذر(3) = جذر(6) / 3."
    ],
    "teacherTipEn": "Notice that circumradius is always exactly double the inradius ($R = 2r$).",
    "teacherTipAr": "لاحظ أن نصف قطر الدائرة الخارجة يساوي دائماً ضعف نصف قطر الدائرة الداخلة."
  },
  {
    "id": "solid_ch2_db_hots_35",
    "titleEn": "Angle Between Lines Satisfying Relations",
    "titleAr": "الزاوية بين مستقيمين تحقق نسب اتجاههما علاقتين",
    "difficulty": "hots",
    "questionEn": "Find the angle between two lines whose direction ratios satisfy $l + m + n = 0$ and $l^2 + m^2 - n^2 = 0$.",
    "questionAr": "أوجد قياس الزاوية بين مستقيمين تحقق نسب اتجاههما العلاقتين: $l + m + n = 0$ و $l^2 + m^2 - n^2 = 0$.",
    "optionsEn": [
      "$60^\\circ$",
      "$90^\\circ$",
      "$45^\\circ$",
      "$30^\\circ$"
    ],
    "optionsAr": [
      "60°",
      "90°",
      "45°",
      "30°"
    ],
    "correctAnswer": "$60^\\circ$",
    "correctIndex": 0,
    "hintEn": "Substitute $n = -(l + m)$ into the quadratic equation to find the two direction vectors.",
    "hintAr": "عوض بـ ن = -(ل + م) في المعادلة التربيعية لإيجاد متجهي اتجاه المستقيمين.",
    "stepByStepSolutionEn": [
      "1. From first equation: $n = -(l + m)$.",
      "2. Substitute into second: $l^2 + m^2 - (-(l + m))^2 = 0 \\implies l^2 + m^2 - (l^2 + 2lm + m^2) = 0$.",
      "3. $-2lm = 0 \\implies lm = 0$, so either $l = 0$ or $m = 0$.",
      "4. If $l = 0 \\implies n = -m$, direction is $(0, 1, -1)$.",
      "5. If $m = 0 \\implies n = -l$, direction is $(1, 0, -1)$.",
      "6. $\\cos\\theta = \\frac{|0(1) + 1(0) + (-1)(-1)|}{\\sqrt{2}\\sqrt{2}} = \\frac{1}{2} \\implies \\theta = 60^\\circ$."
    ],
    "stepByStepSolutionAr": [
      "١. من المعادلة الأولى: ن = -(ل + م).",
      "٢. بالتعويض في الثانية: ل² + م² - (ل + م)² = 0، ومنها -2 ل م = 0.",
      "٣. إذن ل = 0 أو م = 0.",
      "٤. إذا كانت ل = 0 فإن ن = -م، المتجه الأول (0، 1، -1).",
      "٥. إذا كانت م = 0 فإن ن = -ل، المتجه الثاني (1، 0، -1).",
      "٦. جتا θ = 1 / (جذر 2 × جذر 2) = 1/2، إذن الزاوية = 60°."
    ],
    "teacherTipEn": "A renowned classic problem in Thanaweya Amma solid geometry exams.",
    "teacherTipAr": "مسألة كلاسيكية شهيرة في امتحانات الثانوية العامة في الهندسة الفراغية."
  },
  {
    "id": "solid_ch2_db_hots_36",
    "titleEn": "Tangent Planes Parallel to Given Plane",
    "titleAr": "مستويات مماسية لكرة موازية لمستوى معلوم",
    "difficulty": "hots",
    "questionEn": "Find the equations of the planes parallel to $2x - y + 2z = 0$ and tangent to the sphere $x^2 + y^2 + z^2 = 9$.",
    "questionAr": "أوجد معادلتي المستويين الموازيين للمستوى $2x - y + 2z = 0$ والمماسين للكرة $x^2 + y^2 + z^2 = 9$.",
    "optionsEn": [
      "$2x - y + 2z \\pm 9 = 0$",
      "$2x - y + 2z \\pm 3 = 0$",
      "$2x - y + 2z \\pm 27 = 0$",
      "$2x - y + 2z = \\pm 1$"
    ],
    "optionsAr": [
      "2س - ص + 2ع ± 9 = 0",
      "2س - ص + 2ع ± 3 = 0",
      "2س - ص + 2ع ± 27 = 0",
      "2س - ص + 2ع = ± 1"
    ],
    "correctAnswer": "$2x - y + 2z \\pm 9 = 0$",
    "correctIndex": 0,
    "hintEn": "Parallel planes have the form $2x - y + 2z + d = 0$. Set perpendicular distance from origin equal to radius 3.",
    "hintAr": "المستويات الموازية تأخذ الصورة 2س - ص + 2ع + د = 0، ساوِ طول العمود من الأصل بنصف القطر 3.",
    "stepByStepSolutionEn": [
      "1. Any parallel plane has equation $2x - y + 2z + d = 0$.",
      "2. Distance from center $(0, 0, 0)$ is $\\frac{|d|}{\\sqrt{4 + 1 + 4}} = \\frac{|d|}{3}$.",
      "3. Set distance equal to radius $R = 3$: $\\frac{|d|}{3} = 3 \\implies |d| = 9 \\implies d = \\pm 9$.",
      "4. The equations are $2x - y + 2z \\pm 9 = 0$."
    ],
    "stepByStepSolutionAr": [
      "١. أي مستوى موازٍ معادلته على الصورة 2س - ص + 2ع + د = 0.",
      "٢. بعد المركز (0، 0، 0) عن المستوى = |د| / جذر(4 + 1 + 4) = |د| / 3.",
      "٣. شرط التماس: |د| / 3 = 3 ومنها |د| = 9، إذن د = ±9.",
      "٤. معادلتا المستويين هما: 2س - ص + 2ع ± 9 = 0."
    ],
    "teacherTipEn": "There are always exactly two tangent planes parallel to any given plane.",
    "teacherTipAr": "يوجد دائماً مستويان مماسان يوازيان أي مستوى معلوم."
  },
  {
    "id": "solid_ch2_db_hots_37",
    "titleEn": "Minimum Distance from Point to Sphere",
    "titleAr": "أقصر مسافة من نقطة خارجة إلى كرة",
    "difficulty": "hots",
    "questionEn": "Find the minimum distance from the external point $P(3, 4, 12)$ to the sphere $x^2 + y^2 + z^2 = 16$.",
    "questionAr": "أوجد أقصر مسافة من النقطة $P(3، 4، 12)$ الواقعة خارج الكرة إلى سطح الكرة $x^2 + y^2 + z^2 = 16$.",
    "optionsEn": [
      "$9$",
      "$13$",
      "$17$",
      "$5$"
    ],
    "optionsAr": [
      "9",
      "13",
      "17",
      "5"
    ],
    "correctAnswer": "$9$",
    "correctIndex": 0,
    "hintEn": "Minimum distance $= OP - R$.",
    "hintAr": "أقصر مسافة = بعد النقطة عن المركز - نصف القطر.",
    "stepByStepSolutionEn": [
      "1. Distance from origin to $P$: $OP = \\sqrt{3^2 + 4^2 + 12^2} = \\sqrt{9 + 16 + 144} = \\sqrt{169} = 13$.",
      "2. Radius of sphere $R = \\sqrt{16} = 4$.",
      "3. Minimum distance to sphere surface: $d_{\\text{min}} = OP - R = 13 - 4 = 9$."
    ],
    "stepByStepSolutionAr": [
      "١. بعد النقطة عن مركز الكرة (نقطة الأصل) = جذر(9 + 16 + 144) = جذر(169) = 13.",
      "٢. نصف قطر الكرة نق = جذر(16) = 4.",
      "٣. أقصر مسافة = 13 - 4 = 9."
    ],
    "teacherTipEn": "Minimum distance is along the line joining the external point and the center.",
    "teacherTipAr": "أقصر مسافة تقع دوماً على الخط الواصل بين النقطة الخارجية ومركز الكرة."
  },
  {
    "id": "solid_ch2_db_hots_38",
    "titleEn": "Maximum Distance from Point to Sphere",
    "titleAr": "أطول مسافة من نقطة إلى كرة",
    "difficulty": "hots",
    "questionEn": "For the same point $P(3, 4, 12)$ and sphere $x^2 + y^2 + z^2 = 16$, find the maximum distance from $P$ to any point on the sphere.",
    "questionAr": "للنقطة $P(3، 4، 12)$ والكرة $x^2 + y^2 + z^2 = 16$ نفسها، أوجد أطول مسافة من $P$ إلى أي نقطة على سطح الكرة.",
    "optionsEn": [
      "$17$",
      "$13$",
      "$9$",
      "$21$"
    ],
    "optionsAr": [
      "17",
      "13",
      "9",
      "21"
    ],
    "correctAnswer": "$17$",
    "correctIndex": 0,
    "hintEn": "Maximum distance $= OP + R$.",
    "hintAr": "أطول مسافة = بعد النقطة عن المركز + نصف القطر.",
    "stepByStepSolutionEn": [
      "1. Distance from origin to $P$ is $OP = 13$.",
      "2. Radius of sphere is $R = 4$.",
      "3. Maximum distance: $d_{\\text{max}} = OP + R = 13 + 4 = 17$."
    ],
    "stepByStepSolutionAr": [
      "١. بعد النقطة عن المركز = 13.",
      "٢. نصف القطر = 4.",
      "٣. أطول مسافة = 13 + 4 = 17."
    ],
    "teacherTipEn": "Maximum and minimum distances occur at the antipodal points along the line of centers.",
    "teacherTipAr": "أقصر وأطول مسافة تحدثان عند نقطتي تقاطع الخط المركزي مع سطح الكرة."
  },
  {
    "id": "solid_ch2_db_hots_39",
    "titleEn": "Length of Tangent Segment to Sphere",
    "titleAr": "طول قطعة المماس المرسومة من نقطة إلى كرة",
    "difficulty": "hots",
    "questionEn": "Find the length of the tangent line segment drawn from the external point $P(3, 4, 12)$ to the sphere $x^2 + y^2 + z^2 = 25$.",
    "questionAr": "أوجد طول قطعة المماس المرسومة من النقطة $P(3، 4، 12)$ إلى سطح الكرة $x^2 + y^2 + z^2 = 25$.",
    "optionsEn": [
      "$12$",
      "$13$",
      "$8$",
      "$\\sqrt{194}$"
    ],
    "optionsAr": [
      "12",
      "13",
      "8",
      "جذر(194)"
    ],
    "correctAnswer": "$12$",
    "correctIndex": 0,
    "hintEn": "The tangent is perpendicular to radius at point of contact: $L = \\sqrt{OP^2 - R^2}$.",
    "hintAr": "المماس عمودي على نصف القطر عند نقطة التماس: طول المماس = جذر(البعد² - نق²).",
    "stepByStepSolutionEn": [
      "1. Distance from origin to $P$: $OP = \\sqrt{3^2 + 4^2 + 12^2} = 13$.",
      "2. Radius of sphere: $R = 5$.",
      "3. By the Pythagorean theorem, the tangent length is $L = \\sqrt{OP^2 - R^2} = \\sqrt{13^2 - 5^2} = \\sqrt{169 - 25} = \\sqrt{144} = 12$."
    ],
    "stepByStepSolutionAr": [
      "١. بعد النقطة عن المركز = 13.",
      "٢. نصف القطر نق = 5.",
      "٣. من نظرية فيثاغورس: طول المماس = جذر(13² - 5²) = جذر(144) = 12."
    ],
    "teacherTipEn": "This is the 3D analogue of the power of a point theorem.",
    "teacherTipAr": "هذا هو التعميم الفراغي لقوة النقطة بالنسبة للدائرة في الهندسة المستوية."
  },
  {
    "id": "solid_ch2_db_hots_40",
    "titleEn": "Distance Between Opposite Skew Edges of Tetrahedron",
    "titleAr": "المسافة بين حافتين متقابلتين في رباعي وجوه منتظم",
    "difficulty": "hots",
    "questionEn": "In a regular tetrahedron of edge length $a$, find the shortest distance between any pair of opposite skew edges.",
    "questionAr": "في رباعي وجوه منتظم طول حرفه $a$، أوجد أقصر مسافة بين أي زوج من الحواف المتقابلة.",
    "optionsEn": [
      "$\\frac{a\\sqrt{2}}{2}$",
      "$\\frac{a\\sqrt{3}}{2}$",
      "$\\frac{a}{2}$",
      "$\\frac{a}{\\sqrt{6}}$"
    ],
    "optionsAr": [
      "أ جذر(2) / 2",
      "أ جذر(3) / 2",
      "أ / 2",
      "أ / جذر(6)"
    ],
    "correctAnswer": "$\\frac{a\\sqrt{2}}{2}$",
    "correctIndex": 0,
    "hintEn": "Use coordinates: vertices at four alternating corners of a cube of edge length $s$, where $a = s\\sqrt{2}$.",
    "hintAr": "باستخدام إحداثيات رؤوس المكعب الحاوي لرباعي الوجوه حيث طول ضلع المكعب س = أ / جذر(2).",
    "stepByStepSolutionEn": [
      "1. A regular tetrahedron can be inscribed in a cube of side $s$, with edge length $a = s\\sqrt{2}$.",
      "2. The opposite edges lie on opposite faces of this cube, parallel to the faces.",
      "3. The shortest distance between them is the distance between the opposite faces of the cube, which is $s$.",
      "4. Since $a = s\\sqrt{2} \\implies s = \\frac{a}{\\sqrt{2}} = \\frac{a\\sqrt{2}}{2}$."
    ],
    "stepByStepSolutionAr": [
      "١. يمكن حصر رباعي الوجوه المنتظم داخل مكعب ضلعه س، ويكون طول حرف الهرم أ = س جذر(2).",
      "٢. الحافتان المتقابلتان تقعان في وجهين متقابلين للمكعب.",
      "٣. أقصر مسافة بينهما هي المسافة بين وجهي المكعب = س.",
      "٤. بما أن أ = س جذر(2)، فإن س = أ جذر(2) / 2."
    ],
    "teacherTipEn": "Inscribing a tetrahedron in a cube is one of the most powerful visualization tools in solid geometry.",
    "teacherTipAr": "حصر رباعي الوجوه داخل مكعب هو أقوى أداة هندسية لحساب المسافات والزوايا فيه."
  },
  {
    "id": "solid_ch2_db_hots_41",
    "titleEn": "Semi-Vertical Angle of Tangent Cone",
    "titleAr": "زاوية رأس المخروط المماس لكرة من نقطة الأصل",
    "difficulty": "hots",
    "questionEn": "Tangent lines drawn from the origin to the sphere $(x - 4)^2 + y^2 + z^2 = 4$ form a right circular cone. Find the semi-vertical angle $\\alpha$ of this cone.",
    "questionAr": "المماسات المرسومة من نقطة الأصل للكرة $(x - 4)^2 + y^2 + z^2 = 4$ تكون مخروطاً دائرياً قائماً. أوجد قياس نصف زاوية رأس هذا المخروط.",
    "optionsEn": [
      "$30^\\circ$",
      "$45^\\circ$",
      "$60^\\circ$",
      "$15^\\circ$"
    ],
    "optionsAr": [
      "30°",
      "45°",
      "60°",
      "15°"
    ],
    "correctAnswer": "$30^\\circ$",
    "correctIndex": 0,
    "hintEn": "Use right triangle: $\\sin\\alpha = \\frac{R}{OC}$.",
    "hintAr": "استخدم المثلث القائم: جا(نصف زاوية الرأس) = نق / البعد عن المركز.",
    "stepByStepSolutionEn": [
      "1. Center of the sphere is $C(4, 0, 0)$, so $OC = 4$.",
      "2. Radius of the sphere is $R = 2$.",
      "3. In the right-angled triangle formed by the origin, the center, and the point of tangency: $\\sin\\alpha = \\frac{R}{OC} = \\frac{2}{4} = \\frac{1}{2}$.",
      "4. $\\alpha = 30^\\circ$."
    ],
    "stepByStepSolutionAr": [
      "١. مركز الكرة هو جـ(4، 0، 0)، إذن و جـ = 4.",
      "٢. نصف قطر الكرة نق = 2.",
      "٣. في المثلث القائم المتكون من الأصل والمركز ونقطة التماس: جا α = نق / و جـ = 2 / 4 = 1/2.",
      "٤. إذن قياس نصف زاوية الرأس α = 30°."
    ],
    "teacherTipEn": "Tangent lines from an external point to a sphere always form an enveloping right circular cone.",
    "teacherTipAr": "المماسات المرسومة من نقطة خارجية لكرة تشكل دائماً مخروطاً مغلفاً دائرياً قائماً."
  },
  {
    "id": "solid_ch2_db_hots_42",
    "titleEn": "External Tangency Condition for Two Spheres",
    "titleAr": "شرط التماس الخارجي لكرتين",
    "difficulty": "hots",
    "questionEn": "The two spheres $S_1: x^2 + y^2 + z^2 = 4$ and $S_2: (x - 3)^2 + (y - 4)^2 + z^2 = R^2$ touch each other externally. Find $R$.",
    "questionAr": "الكرتان $S_1: x^2 + y^2 + z^2 = 4$ و $S_2: (x - 3)^2 + (y - 4)^2 + z^2 = R^2$ متماستان من الخارج. أوجد قيمة $R$.",
    "optionsEn": [
      "$3$",
      "$7$",
      "$5$",
      "$1$"
    ],
    "optionsAr": [
      "3",
      "7",
      "5",
      "1"
    ],
    "correctAnswer": "$3$",
    "correctIndex": 0,
    "hintEn": "External tangency condition: $C_1 C_2 = R_1 + R_2$.",
    "hintAr": "شرط التماس من الخارج: خط المركزين يساوي مجموع نصفي القطرين.",
    "stepByStepSolutionEn": [
      "1. Center of $S_1$ is $C_1(0, 0, 0)$ with $R_1 = 2$.",
      "2. Center of $S_2$ is $C_2(3, 4, 0)$ with $R_2 = R$.",
      "3. Distance between centers: $C_1 C_2 = \\sqrt{3^2 + 4^2 + 0^2} = 5$.",
      "4. Condition for external tangency: $C_1 C_2 = R_1 + R_2 \\implies 5 = 2 + R \\implies R = 3$."
    ],
    "stepByStepSolutionAr": [
      "١. مركز الكرة الأولى م1(0، 0، 0) ونصف قطرها نق1 = 2.",
      "٢. مركز الكرة الثانية م2(3، 4، 0) ونصف قطرها نق2 = R.",
      "٣. البعد بين المركزين = جذر(9 + 16) = 5.",
      "٤. شرط التماس من الخارج: م1 م2 = نق1 + نق2، إذن 5 = 2 + R ومنها R = 3."
    ],
    "teacherTipEn": "External tangency requires distance between centers to equal the sum of radii.",
    "teacherTipAr": "التماس الخارجي يتطلب أن يساوي البعد بين المركزين مجموع نصفي القطرين."
  },
  {
    "id": "solid_ch2_db_hots_43",
    "titleEn": "Internal Tangency Condition for Two Spheres",
    "titleAr": "شرط التماس الداخلي لكرتين",
    "difficulty": "hots",
    "questionEn": "For the same centers $C_1(0, 0, 0)$ with $R_1 = 2$ and $C_2(3, 4, 0)$ with radius $R$, find $R$ such that $S_2$ touches $S_1$ internally.",
    "questionAr": "للركيزتين نفسهما $C_1(0، 0، 0)$ بنصف قطر $R_1 = 2$ و $C_2(3، 4، 0)$ بنصف قطر $R$، أوجد قيمة $R$ بحيث تمس الكرة الثانية الكرة الأولى من الداخل.",
    "optionsEn": [
      "$7$",
      "$3$",
      "$5$",
      "$9$"
    ],
    "optionsAr": [
      "7",
      "3",
      "5",
      "9"
    ],
    "correctAnswer": "$7$",
    "correctIndex": 0,
    "hintEn": "Internal tangency condition: $C_1 C_2 = |R_2 - R_1|$.",
    "hintAr": "شرط التماس من الداخل: خط المركزين يساوي الفرق المطلق بين نصفي القطرين.",
    "stepByStepSolutionEn": [
      "1. Distance between centers is $C_1 C_2 = 5$.",
      "2. For $S_2$ to contain $S_1$ and touch it internally: $C_1 C_2 = R - R_1$.",
      "3. $5 = R - 2 \\implies R = 7$."
    ],
    "stepByStepSolutionAr": [
      "١. البعد بين المركزين م1 م2 = 5.",
      "٢. لكي تمس الكرة الثانية الأولى من الداخل وتحتويها: م1 م2 = R - نق1.",
      "٣. 5 = R - 2 ومنها R = 7."
    ],
    "teacherTipEn": "Internal tangency occurs when the center-to-center distance equals the difference of radii.",
    "teacherTipAr": "التماس الداخلي يحدث عندما يساوي خط المركزين الفرق بين نصفي القطرين."
  },
  {
    "id": "solid_ch2_db_hots_44",
    "titleEn": "Bisector Plane of Perpendicular Planes",
    "titleAr": "المستوى المنصف للزاوية بين مستويين إحداثيين",
    "difficulty": "hots",
    "questionEn": "Find the equation of the plane that bisects the angle between the planes $x = 0$ and $y = 0$ in the first octant.",
    "questionAr": "أوجد معادلة المستوى الذي ينصف الزاوية بين المستويين $x = 0$ و $y = 0$ في الثمن الأول.",
    "optionsEn": [
      "$x - y = 0$",
      "$x + y = 0$",
      "$x + y + z = 0$",
      "$x = y = z$"
    ],
    "optionsAr": [
      "س - ص = 0",
      "س + ص = 0",
      "س + ص + ع = 0",
      "س = ص = ع"
    ],
    "correctAnswer": "$x - y = 0$",
    "correctIndex": 0,
    "hintEn": "A point equidistant from x=0 and y=0 in first octant has $x = y$.",
    "hintAr": "أي نقطة متساوية البعد عن المستويين س=0 و ص=0 في الثمن الأول تحقق س = ص.",
    "stepByStepSolutionEn": [
      "1. Distance from $(x, y, z)$ to $x = 0$ is $|x|$.",
      "2. Distance to $y = 0$ is $|y|$.",
      "3. In the first octant, $x > 0$ and $y > 0$, so $|x| = |y| \\implies x = y \\iff x - y = 0$."
    ],
    "stepByStepSolutionAr": [
      "١. بعد النقطة عن المستوى س = 0 هو |س|.",
      "٢. بعد النقطة عن المستوى ص = 0 هو |ص|.",
      "٣. في الثمن الأول س > 0 و ص > 0، إذن س = ص أي س - ص = 0."
    ],
    "teacherTipEn": "The bisector plane contains the z-axis and makes $45^\\circ$ with the xy coordinate planes.",
    "teacherTipAr": "المستوى المنصف يحوي محور العينات ويميل بزاوية 45° على المستويين الإحداثيين."
  },
  {
    "id": "solid_ch2_db_hots_45",
    "titleEn": "Angle Between Space Diagonal and Cube Face",
    "titleAr": "الزاوية بين قطر مكعب وأحد أوجهه",
    "difficulty": "hots",
    "questionEn": "Find the cosine of the angle that a space diagonal of a cube makes with any of its faces.",
    "questionAr": "أوجد جيب تمام الزاوية التي يصنعها قطر رئيسي لمكعب مع أحد أوجهه.",
    "optionsEn": [
      "$\\sqrt{\\frac{2}{3}}$",
      "$\\frac{1}{\\sqrt{3}}$",
      "$\\frac{1}{\\sqrt{2}}$",
      "$\\frac{\\sqrt{3}}{2}$"
    ],
    "optionsAr": [
      "جذر(2 / 3)",
      "1 / جذر(3)",
      "1 / جذر(2)",
      "جذر(3) / 2"
    ],
    "correctAnswer": "$\\sqrt{\\frac{2}{3}}$",
    "correctIndex": 0,
    "hintEn": "Angle $\\alpha$ with face has $\\sin\\alpha = \\frac{|\\vec{d} \\cdot \\vec{n}|}{\\|\\vec{d}\\|\\|\\vec{n}\\|} = \\frac{1}{\\sqrt{3}}$.",
    "hintAr": "الزاوية مع الوجه تحقق: جا الزاوية = 1 / جذر(3)، ثم احسب جيب التمام.",
    "stepByStepSolutionEn": [
      "1. Space diagonal: $\\vec{d} = (1, 1, 1)$, normal to $xy$ face: $\\vec{n} = (0, 0, 1)$.",
      "2. $\\sin\\alpha = \\frac{|1|}{\\sqrt{3}(1)} = \\frac{1}{\\sqrt{3}}$.",
      "3. $\\cos\\alpha = \\sqrt{1 - \\sin^2\\alpha} = \\sqrt{1 - \\frac{1}{3}} = \\sqrt{\\frac{2}{3}}$."
    ],
    "stepByStepSolutionAr": [
      "١. متجه القطر: (1، 1، 1)، المتجه العمودي على الوجه: (0، 0، 1).",
      "٢. جا α = 1 / جذر(3).",
      "٣. جتا α = جذر(1 - 1/3) = جذر(2 / 3)."
    ],
    "teacherTipEn": "The angle between a line and a plane is the complement of the angle between the line and the normal.",
    "teacherTipAr": "الزاوية بين مستقيم ومستوى هي متممة الزاوية بين المستقيم والعمودي على المستوى."
  },
  {
    "id": "solid_ch2_db_hots_46",
    "titleEn": "Sum of Squared Cosines with Four Cube Diagonals",
    "titleAr": "مجموع مربعات جيوب تمام الزوايا مع أقطار المكعب الأربعة",
    "difficulty": "hots",
    "questionEn": "If a straight line in space makes angles $\\alpha, \\beta, \\gamma, \\delta$ with the four space diagonals of a cube, find the value of $\\cos^2\\alpha + \\cos^2\\beta + \\cos^2\\gamma + \\cos^2\\delta$.",
    "questionAr": "إذا صنع خط مستقيم في الفراغ زوايا قياساتها $\\alpha, \\beta, \\gamma, \\delta$ مع أقطار المكعب الرئيسية الأربعة، فما قيمة $\\cos^2\\alpha + \\cos^2\\beta + \\cos^2\\gamma + \\cos^2\\delta$؟",
    "optionsEn": [
      "$\\frac{4}{3}$",
      "$1$",
      "$2$",
      "$\\frac{2}{3}$"
    ],
    "optionsAr": [
      "4 / 3",
      "1",
      "2",
      "2 / 3"
    ],
    "correctAnswer": "$\\frac{4}{3}$",
    "correctIndex": 0,
    "hintEn": "Let unit direction vector of the line be $(l, m, n)$ with $l^2 + m^2 + n^2 = 1$.",
    "hintAr": "نفرض متجه وحدة المستقيم هو (ل، م، ن) حيث ل² + م² + ن² = 1.",
    "stepByStepSolutionEn": [
      "1. Unit direction vectors of the 4 space diagonals are $\\frac{1}{\\sqrt{3}}(\\pm 1, \\pm 1, \\pm 1)$.",
      "2. The cosines are $\\cos\\alpha = \\frac{l + m + n}{\\sqrt{3}}, \\cos\\beta = \\frac{l + m - n}{\\sqrt{3}}, \\cos\\gamma = \\frac{l - m + n}{\\sqrt{3}}, \\cos\\delta = \\frac{-l + m + n}{\\sqrt{3}}$.",
      "3. Sum of squares: $\\frac{1}{3} [(l+m+n)^2 + (l+m-n)^2 + (l-m+n)^2 + (-l+m+n)^2]$.",
      "4. Cross-terms cancel out, leaving: $\\frac{1}{3} [4l^2 + 4m^2 + 4n^2] = \\frac{4}{3}(l^2 + m^2 + n^2) = \\frac{4}{3}(1) = \\frac{4}{3}$."
    ],
    "stepByStepSolutionAr": [
      "١. متجهات الوحدة لأقطار المكعب الأربعة هي (±1، ±1، ±1) / جذر(3).",
      "٢. جيوب تمام الزوايا تحسب من حاصل الضرب القياسي لمتجه الوحدة (ل، م، ن) مع كل قطر.",
      "٣. بتربيع الحدود وجمعها، تختفي جميع الحدود المختلطة المتعاكسة في الإشارة.",
      "٤. يتبقى: (4/3)(ل² + م² + ن²) = (4/3)(1) = 4 / 3."
    ],
    "teacherTipEn": "A famous identity in 3D analytic geometry: the sum is constant and equals 4/3 for ANY line in space.",
    "teacherTipAr": "متطابقة فراغية شهيرة: هذا المجموع ثابت ويساوي دائماً 4/3 لأي مستقيم في الفراغ."
  },
  {
    "id": "solid_ch2_db_hots_47",
    "titleEn": "Sum of Squared Sines with Four Cube Diagonals",
    "titleAr": "مجموع مربعات جيوب الزوايا مع أقطار المكعب الأربعة",
    "difficulty": "hots",
    "questionEn": "For the same angles $\\alpha, \\beta, \\gamma, \\delta$ made by any line with the four space diagonals of a cube, find $\\sin^2\\alpha + \\sin^2\\beta + \\sin^2\\gamma + \\sin^2\\delta$.",
    "questionAr": "للزوايا نفسها $\\alpha, \\beta, \\gamma, \\delta$ التي يصنعها أي مستقيم مع أقطار المكعب الأربعة، ما قيمة $\\sin^2\\alpha + \\sin^2\\beta + \\sin^2\\gamma + \\sin^2\\delta$؟",
    "optionsEn": [
      "$\\frac{8}{3}$",
      "$\\frac{4}{3}$",
      "$2$",
      "$\\frac{10}{3}$"
    ],
    "optionsAr": [
      "8 / 3",
      "4 / 3",
      "2",
      "10 / 3"
    ],
    "correctAnswer": "$\\frac{8}{3}$",
    "correctIndex": 0,
    "hintEn": "Use identity: $\\sin^2\\theta = 1 - \\cos^2\\theta$ for all 4 angles.",
    "hintAr": "استخدم متطابقة فيثاغورس: جا² θ = 1 - جتا² θ لجميع الزوايا الأربع.",
    "stepByStepSolutionEn": [
      "1. Using $\\sin^2\\theta = 1 - \\cos^2\\theta$:",
      "2. $\\sum \\sin^2 = (1 - \\cos^2\\alpha) + (1 - \\cos^2\\beta) + (1 - \\cos^2\\gamma) + (1 - \\cos^2\\delta)$.",
      "3. $\\sum \\sin^2 = 4 - (\\cos^2\\alpha + \\cos^2\\beta + \\cos^2\\gamma + \\cos^2\\delta)$.",
      "4. Since the sum of squared cosines is $\\frac{4}{3}$: $\\sum \\sin^2 = 4 - \\frac{4}{3} = \\frac{8}{3}$."
    ],
    "stepByStepSolutionAr": [
      "١. باستخدام جا² θ = 1 - جتا² θ:",
      "٢. المجموع = 4 - مجموع مربعات جيوب التمام.",
      "٣. المجموع = 4 - 4/3 = 8 / 3."
    ],
    "teacherTipEn": "Direct corollary of the four diagonals cosine theorem.",
    "teacherTipAr": "نتيجة مباشرة وسريعة لنظرية جيوب تمام أقطار المكعب الأربعة."
  },
  {
    "id": "solid_ch2_db_hots_48",
    "titleEn": "Reflection of Point Across an Axis",
    "titleAr": "انعكاس نقطة في محور إحداثي",
    "difficulty": "hots",
    "questionEn": "Find the reflection of the point $P(1, 2, 3)$ across the $y$-axis.",
    "questionAr": "أوجد صورة النقطة $P(1، 2، 3)$ بالانعكاس في محور الصادات.",
    "optionsEn": [
      "$(-1, 2, -3)$",
      "$(-1, -2, -3)$",
      "$(1, -2, 3)$",
      "$(-1, -2, 3)$"
    ],
    "optionsAr": [
      "(-1، 2، -3)",
      "(-1، -2، -3)",
      "(1، -2، 3)",
      "(-1، -2، 3)"
    ],
    "correctAnswer": "$(-1, 2, -3)$",
    "correctIndex": 0,
    "hintEn": "Reflection across the y-axis negates both the x and z coordinates.",
    "hintAr": "الانعكاس في محور الصادات يعكس إشارتي الإحداثيين السيني والعيني مع بقاء الصادي دون تغيير.",
    "stepByStepSolutionEn": [
      "1. The projection of $P(1, 2, 3)$ on the $y$-axis is $M(0, 2, 0)$.",
      "2. $M$ must be the midpoint of $P$ and its reflection $P'$: $M = \\frac{P + P'}{2}$.",
      "3. $P' = 2M - P = 2(0, 2, 0) - (1, 2, 3) = (-1, 2, -3)$."
    ],
    "stepByStepSolutionAr": [
      "١. مسقط النقطة على محور الصادات هو م(0، 2، 0).",
      "٢. نقطة المسقط م هي منتصف القطعة بين النقطة وصورتها: م = (ب + ب') / 2.",
      "٣. ب' = 2م - ب = 2(0، 2، 0) - (1، 2، 3) = (-1، 2، -3)."
    ],
    "teacherTipEn": "Reflecting in an axis negates the two coordinates OTHER than the axis itself.",
    "teacherTipAr": "الانعكاس في أي محور يغير إشارة المتغيرين الآخرين فقط."
  },
  {
    "id": "solid_ch2_db_hots_49",
    "titleEn": "Perpendicular Distance from Origin When Normal Equals Point",
    "titleAr": "طول العمود من الأصل عندما يكون متجه الموضع عمودياً على المستوى",
    "difficulty": "hots",
    "questionEn": "A plane passes through the point $A(2, -1, 2)$ such that the vector $\\vec{OA}$ is perpendicular to the plane. What is the perpendicular distance from the origin to this plane?",
    "questionAr": "مستوى يمر بالنقطة $A(2، -1، 2)$ بحيث يكون المتجه $\\vec{OA}$ عمودياً على المستوى. ما طول العمود الساقط من الأصل على هذا المستوى؟",
    "optionsEn": [
      "$3$",
      "$9$",
      "$\\sqrt{3}$",
      "$1$"
    ],
    "optionsAr": [
      "3",
      "9",
      "جذر(3)",
      "1"
    ],
    "correctAnswer": "$3$",
    "correctIndex": 0,
    "hintEn": "Since OA is normal to the plane and A lies on the plane, the perpendicular distance from origin is simply the length ||OA||.",
    "hintAr": "بما أن و أ عمودي على المستوى و أ تقع في المستوى، فإن طول العمود من الأصل هو ببساطة معيار المتجه و أ.",
    "stepByStepSolutionEn": [
      "1. Vector $\\vec{OA} = (2, -1, 2)$.",
      "2. Since $\\vec{OA}$ is perpendicular to the plane at $A$, the point $A$ is the foot of the perpendicular from the origin onto the plane.",
      "3. Therefore, the distance is $\\|\\vec{OA}\\| = \\sqrt{2^2 + (-1)^2 + 2^2} = \\sqrt{4 + 1 + 4} = \\sqrt{9} = 3$."
    ],
    "stepByStepSolutionAr": [
      "١. المتجه و أ = (2، -1، 2).",
      "٢. بما أن و أ عمودي على المستوى عند أ، فإن النقطة أ هي مسقط نقطة الأصل على المستوى.",
      "٣. إذن طول العمود يساوي معيار و أ = جذر(4 + 1 + 4) = 3."
    ],
    "teacherTipEn": "Recognizing that A is the foot of perpendicular saves all plane equation computations!",
    "teacherTipAr": "ملاحظة أن النقطة أ هي مسقط الأصل تختصر الحل تماماً وتغني عن كتابة معادلة المستوى!"
  },
  {
    "id": "solid_ch2_db_hots_50",
    "titleEn": "Volume of Tetrahedron from Standard Plane",
    "titleAr": "حجم هرم ثلاثي قائم محدد بمستوى قياسي",
    "difficulty": "hots",
    "questionEn": "Find the volume of the tetrahedron formed by the plane $x + 2y + 3z = 6$ and the three coordinate planes.",
    "questionAr": "أوجد حجم الهرم الثلاثي المتكون من تقاطع المستوى $x + 2y + 3z = 6$ مع مستويات الإحداثيات الثلاثة.",
    "optionsEn": [
      "$6$",
      "$12$",
      "$18$",
      "$36$"
    ],
    "optionsAr": [
      "6",
      "12",
      "18",
      "36"
    ],
    "correctAnswer": "$6$",
    "correctIndex": 0,
    "hintEn": "Find intercepts $a, b, c$ and use $V = \\frac{1}{6} abc$.",
    "hintAr": "أوجد الأجزاء المقطوعة أ، ب، جـ ثم طبق قانون الحجم = سدس حاصل ضرب الأجزاء.",
    "stepByStepSolutionEn": [
      "1. Divide equation by 6: $\\frac{x}{6} + \\frac{y}{3} + \\frac{z}{2} = 1$.",
      "2. Intercepts: $a = 6, b = 3, c = 2$.",
      "3. Volume of the tetrahedron: $V = \\frac{1}{6} abc = \\frac{1}{6}(6)(3)(2) = 6$."
    ],
    "stepByStepSolutionAr": [
      "١. بالقسمة على 6: س/6 + ص/3 + ع/2 = 1.",
      "٢. الأجزاء المقطوعة: أ = 6، ب = 3، جـ = 2.",
      "٣. حجم الهرم الثلاثي = (1/6) × 6 × 3 × 2 = 6."
    ],
    "teacherTipEn": "The tetrahedron volume formula $V = abc/6$ applies to any plane cutting the coordinate axes.",
    "teacherTipAr": "قانون حجم الهرم أ ب جـ / 6 ينطبق على أي مستوى يقطع محاور الإحداثيات."
  },
  {
    "id": "solid_ch2_db_hots_51",
    "titleEn": "Shortest Distance Between Two Skew Lines",
    "titleAr": "أقصر بعد بين مستقيمين متخالفين في الفراغ",
    "difficulty": "hots",
    "questionEn": "Find the shortest distance between the line $L_1: \\vec{r} = (1, 0, 0) + t(0, 1, 0)$ and the line $L_2: \\vec{r} = (0, 0, 3) + s(1, 0, 0)$.",
    "questionAr": "أوجد أقصر بعد بين المستقيمين المتخالفين $L_1: \\vec{r} = (1, 0, 0) + t(0, 1, 0)$ و $L_2: \\vec{r} = (0, 0, 3) + s(1, 0, 0)$.",
    "optionsEn": [
      "3 units",
      "1 unit",
      "$\\sqrt{10}$ units",
      "4 units"
    ],
    "optionsAr": [
      "3 وحدات طول",
      "1 وحدة طول",
      "$\\sqrt{10}$ وحدة طول",
      "4 وحدات طول"
    ],
    "correctAnswer": "3 units",
    "correctIndex": 0,
    "hintEn": "d = |(A2 - A1) . (d1 x d2)| / |d1 x d2|.",
    "hintAr": "أقصر بعد = القيمة المطلقة لحاصل الضرب القياسي للمتجه الواصل في العمودي المشترك مقسوماً على معياره.",
    "stepByStepSolutionEn": [
      "1. Points: $A_1 = (1, 0, 0)$ and $A_2 = (0, 0, 3)$. Connecting vector: $\\vec{A_2 - A_1} = (-1, 0, 3)$.",
      "2. Directions: $\\vec{d}_1 = (0, 1, 0)$ and $\\vec{d}_2 = (1, 0, 0)$.",
      "3. Common perpendicular vector: $\\vec{n} = \\vec{d}_1 \\times \\vec{d}_2 = (0, 1, 0) \\times (1, 0, 0) = (0, 0, -1)$.",
      "4. Magnitude: $|\\vec{n}| = 1$.",
      "5. Shortest distance $d = \\frac{|(-1, 0, 3) \\cdot (0, 0, -1)|}{1} = \\frac{|-3|}{1} = 3$ units."
    ],
    "stepByStepSolutionAr": [
      "١. النقطتان: أ١ = (١، ٠، ٠) و أ٢ = (٠، ٠، ٣)، المتجه الواصل = (-١، ٠، ٣).",
      "٢. متجها الاتجاه: هـ١ = (٠، ١، ٠) و هـ٢ = (١، ٠، ٠).",
      "٣. العمودي المشترك = هـ١ × هـ٢ = (٠، ٠، -١)، ومعياره = ١.",
      "٤. أقصر بعد = |(-١، ٠، ٣) · (٠، ٠، -١)| / ١ = |-٣| = ٣ وحدات طول."
    ],
    "teacherTipEn": "Notice L1 is in the plane z = 0 and L2 is in the plane z = 3, so their vertical gap is simply 3.",
    "teacherTipAr": "المستقيم الأول يقع في المستوى ع = ٠ والثاني في المستوى ع = ٣، فالفرق الرأسي بينهما ٣ بداهة."
  },
  {
    "id": "solid_ch2_db_hots_52",
    "titleEn": "Reflection of a Point Across a Plane",
    "titleAr": "صورة نقطة بالانعكاس في مستوى",
    "difficulty": "hots",
    "questionEn": "Find the image of the point $P(1, 2, 3)$ reflected across the plane $x = 0$ (the $yz$-plane).",
    "questionAr": "أوجد صورة النقطة $P(1, 2, 3)$ بالانعكاس في المستوى الإحداثي $x = 0$ (المستوى $yz$).",
    "optionsEn": [
      "$(-1, 2, 3)$",
      "$(1, -2, 3)$",
      "$(1, 2, -3)$",
      "$(-1, -2, -3)$"
    ],
    "optionsAr": [
      "$(-1, 2, 3)$",
      "$(1, -2, 3)$",
      "$(1, 2, -3)$",
      "$(-1, -2, -3)$"
    ],
    "correctAnswer": "$(-1, 2, 3)$",
    "correctIndex": 0,
    "hintEn": "Reflection across x = 0 negates the x-coordinate while preserving y and z.",
    "hintAr": "الانعكاس في المستوى س = ٠ يغير إشارة الإحداثي السيني فقط مع بقاء ص وع دون تغيير.",
    "stepByStepSolutionEn": [
      "1. Reflection across the coordinate plane $x = 0$ maps each point $(x, y, z)$ to $(-x, y, z)$.",
      "2. For $P(1, 2, 3)$, the reflected image point is $P'(-1, 2, 3)$."
    ],
    "stepByStepSolutionAr": [
      "١. الانعكاس في المستوى ص ع (س = ٠) يحول النقطة (س، ص، ع) إلى (-س، ص، ع).",
      "٢. للنقطة ب(١، ٢، ٣)، تكون الصورة المنعكسة هي ب'(-١، ٢، ٣)."
    ],
    "teacherTipEn": "The midpoint between P and P' is (0, 2, 3), which lies precisely on the plane x = 0.",
    "teacherTipAr": "نقطة منتصف القطعة بين النقطة وصورتها هي (٠، ٢، ٣) وتقع تماماً على المستوى س = ٠."
  },
  {
    "id": "solid_ch2_db_hots_53",
    "titleEn": "Angle Bisector Plane Between Intersecting Planes",
    "titleAr": "معادلة المستوى المنصف للزاوية الزوجية بين مستويين",
    "difficulty": "hots",
    "questionEn": "Find the equation of the plane bisecting the dihedral angle between the planes $x - 2y + 2z = 3$ and $2x + y - 2z = 3$.",
    "questionAr": "أوجد معادلة أحد المستويين المنصفين للزاوية الزوجية بين المستويين $x - 2y + 2z = 3$ و $2x + y - 2z = 3$.",
    "optionsEn": [
      "$3x - y = 6$",
      "$x + 3y - 4z = 0$",
      "$3x + y = 6$",
      "$x - 3y = 0$"
    ],
    "optionsAr": [
      "$3x - y = 6$",
      "$x + 3y - 4z = 0$",
      "$3x + y = 6$",
      "$x - 3y = 0$"
    ],
    "correctAnswer": "$3x - y = 6$",
    "correctIndex": 0,
    "hintEn": "Set (A1 x + B1 y + C1 z - D1) / |n1| = +- (A2 x + B2 y + C2 z - D2) / |n2|.",
    "hintAr": "ساوِ معادلتي المستويين مقسومتين على معياريهما بإشارتي موجب أو سالب.",
    "stepByStepSolutionEn": [
      "1. The normal magnitudes are $|\\vec{n}_1| = \\sqrt{1 + 4 + 4} = 3$ and $|\\vec{n}_2| = \\sqrt{4 + 1 + 4} = 3$.",
      "2. The bisector planes satisfy:",
      "   $$\\frac{x - 2y + 2z - 3}{3} = \\pm \\frac{2x + y - 2z - 3}{3}$$",
      "3. Taking the positive sign (+):",
      "   $$x - 2y + 2z - 3 = 2x + y - 2z - 3 \\implies -x - 3y + 4z = 0 \\implies x + 3y - 4z = 0$$",
      "4. Taking the negative sign (-):",
      "   $$x - 2y + 2z - 3 = -(2x + y - 2z - 3) = -2x - y + 2z + 3$$",
      "   $$3x - y = 6$$"
    ],
    "stepByStepSolutionAr": [
      "١. معيارا العموديين: |ن١| = ٣، |ن٢| = ٣.",
      "٢. معادلتا المنصفين تنتجان من مساواة البعدين:",
      "   $$\\frac{x - 2y + 2z - 3}{3} = \\pm \\frac{2x + y - 2z - 3}{3}$$",
      "٣. بأخذ الإشارة السالبة:",
      "   س - ٢ص + ٢ع - ٣ = -٢س - ص + ٢ع + ٣ ومنها ٣س - ص = ٦."
    ],
    "teacherTipEn": "Notice the 2z terms cancel out in the second bisector, leaving 3x - y = 6.",
    "teacherTipAr": "لاحظ اختصار مركبة ع في المنصف الثاني مما يبسط المعادلة إلى ٣س - ص = ٦."
  },
  {
    "id": "solid_ch2_db_hots_54",
    "titleEn": "Projection of Straight Line on Coordinate Plane",
    "titleAr": "مسقط خط مستقيم على مستوى إحداثي",
    "difficulty": "hots",
    "questionEn": "Find the Cartesian equation in the $xy$-plane of the orthogonal projection of the line $\\frac{x - 1}{2} = \\frac{y - 2}{3} = \\frac{z - 3}{4}$.",
    "questionAr": "أوجد معادلة مسقط المستقيم $\\frac{x - 1}{2} = \\frac{y - 2}{3} = \\frac{z - 3}{4}$ على المستوى الإحداثي $xy$.",
    "optionsEn": [
      "$3x - 2y + 1 = 0$ and $z = 0$",
      "$2x - 3y + 4 = 0$ and $z = 0$",
      "$3x + 2y - 7 = 0$ and $z = 0$",
      "$4x - 2z + 2 = 0$ and $y = 0$"
    ],
    "optionsAr": [
      "$3x - 2y + 1 = 0$ و $z = 0$",
      "$2x - 3y + 4 = 0$ و $z = 0$",
      "$3x + 2y - 7 = 0$ و $z = 0$",
      "$4x - 2z + 2 = 0$ و $y = 0$"
    ],
    "correctAnswer": "$3x - 2y + 1 = 0$ and $z = 0$",
    "correctIndex": 0,
    "hintEn": "Eliminate the z parameter and set z = 0.",
    "hintAr": "احذف المتغير ع من نسب المستقيم وضع ع = ٠.",
    "stepByStepSolutionEn": [
      "1. The projection of any curve onto the $xy$-plane lies entirely in the plane $z = 0$.",
      "2. Equate the $x$ and $y$ symmetric ratios: $\\frac{x - 1}{2} = \\frac{y - 2}{3}$.",
      "3. Cross-multiply: $3(x - 1) = 2(y - 2) \\implies 3x - 3 = 2y - 4 \\implies 3x - 2y + 1 = 0$.",
      "4. The line of projection is given by $3x - 2y + 1 = 0$ with $z = 0$."
    ],
    "stepByStepSolutionAr": [
      "١. مسقط أي خط على المستوى س ص يقع بالكامل في المستوى ع = ٠.",
      "٢. بمساواة نسبي س و ص: (س - ١)/٢ = (ص - ٢)/٣.",
      "٣. طرفين في وسطين: ٣س - ٣ = ٢ص - ٤ ومنها ٣س - ٢ص + ١ = ٠.",
      "٤. معادلة المسقط هي ٣س - ٢ص + ١ = ٠ مع ع = ٠."
    ],
    "teacherTipEn": "Orthogonal projection simply drops the perpendicular coordinate to zero.",
    "teacherTipAr": "المسقط العمودي يصفر الإحداثي العمودي مع الحفاظ على العلاقة بين الإحداثيين الآخرين."
  },
  {
    "id": "solid_ch2_db_hots_55",
    "titleEn": "Family of Planes Through Intersection Line",
    "titleAr": "حزمة المستويات المارة بخط تقاطع مستويين",
    "difficulty": "hots",
    "questionEn": "Find the equation of the plane passing through the line of intersection of $x + y + z = 1$ and $2x + y - z = 2$, and also passing through the origin $(0, 0, 0)$.",
    "questionAr": "أوجد معادلة المستوى المار بخط تقاطع المستويين $x + y + z = 1$ و $2x + y - z = 2$ وبنقطة الأصل $(0, 0, 0)$.",
    "optionsEn": [
      "$y + 3z = 0$",
      "$x + y = 0$",
      "$3x + 2y = 3$",
      "$x - 3z = 0$"
    ],
    "optionsAr": [
      "$y + 3z = 0$",
      "$x + y = 0$",
      "$3x + 2y = 3$",
      "$x - 3z = 0$"
    ],
    "correctAnswer": "$y + 3z = 0$",
    "correctIndex": 0,
    "hintEn": "Family of planes: P1 + k P2 = 0.",
    "hintAr": "معادلة حزمة المستويات: المستوى الأول + ك (المستوى الثاني) = ٠.",
    "stepByStepSolutionEn": [
      "1. Family of planes: $(x + y + z - 1) + k(2x + y - z - 2) = 0$.",
      "2. Substitute $(0, 0, 0)$ to determine $k$:",
      "   $$-1 + k(-2) = 0 \\implies -2k = 1 \\implies k = -\\frac{1}{2}$$",
      "3. Substitute $k = -\\frac{1}{2}$ and multiply by 2:",
      "   $$2(x + y + z - 1) - (2x + y - z - 2) = 0$$",
      "   $$(2x - 2x) + (2y - y) + (2z + z) + (-2 + 2) = 0 \\implies y + 3z = 0$$"
    ],
    "stepByStepSolutionAr": [
      "١. معادلة حزمة المستويات: (س + ص + ع - ١) + ك(٢س + ص - ع - ٢) = ٠.",
      "٢. بالتعويض بنقطة الأصل (٠، ٠، ٠): -١ - ٢ك = ٠ ومنها ك = -١ / ٢.",
      "٣. بضرب المعادلة في ٢ والتبسيط:",
      "   ٢(س + ص + ع - ١) - (٢س + ص - ع - ٢) = ٠.",
      "٤. الناتج النهائي: ص + ٣ع = ٠."
    ],
    "teacherTipEn": "Notice the constant term vanished, verifying that the plane passes through the origin.",
    "teacherTipAr": "لاحظ اختفاء الحد المطلق تماماً مما يؤكد مرور المستوى بنقطة الأصل."
  },
  {
    "id": "solid_ch2_db_hots_56",
    "titleEn": "Tangency Condition Between Sphere and Plane",
    "titleAr": "شرط مماسّة كرة لمستوى في الفراغ",
    "difficulty": "hots",
    "diagramType": "solid_geometry_sphere",
    "questionEn": "For what positive value of $k$ is the plane $2x - 2y + z + k = 0$ tangent to the sphere $x^2 + y^2 + z^2 = 9$?",
    "questionAr": "لأي قيمة موجبة لـ $k$ يكون المستوى $2x - 2y + z + k = 0$ مماساً للكرة $x^2 + y^2 + z^2 = 9$؟",
    "optionsEn": [
      "9",
      "3",
      "27",
      "6"
    ],
    "optionsAr": [
      "9",
      "3",
      "27",
      "6"
    ],
    "correctAnswer": "9",
    "correctIndex": 0,
    "hintEn": "Distance from sphere center (0, 0, 0) to the plane must equal the radius r = 3.",
    "hintAr": "طول العمود من مركز الكرة (٠، ٠، ٠) إلى المستوى يجب أن يساوي نصف القطر نق = ٣.",
    "stepByStepSolutionEn": [
      "1. Center of sphere is $O(0, 0, 0)$ and radius is $r = \\sqrt{9} = 3$.",
      "2. For tangency, the perpendicular distance from the center to the plane must equal $r$:",
      "   $$d = \\frac{|2(0) - 2(0) + 0 + k|}{\\sqrt{2^2 + (-2)^2 + 1^2}} = \\frac{|k|}{3}$$",
      "3. Set $\\frac{|k|}{3} = 3 \\implies |k| = 9$.",
      "4. Since $k > 0$, $k = 9$."
    ],
    "stepByStepSolutionAr": [
      "١. مركز الكرة هو نقطة الأصل (٠، ٠، ٠) ونصف القطر نق = ٣.",
      "٢. شرط المماسة: طول العمود من المركز إلى المستوى = نق:",
      "   $$d = \\frac{|k|}{\\sqrt{4 + 4 + 1}} = \\frac{|k|}{3} = 3$$",
      "٣. |ك| = ٩، وبما أن ك موجبة فإن ك = ٩."
    ],
    "teacherTipEn": "There are two tangent planes parallel to each other corresponding to k = +9 and k = -9.",
    "teacherTipAr": "يوجد مستويان متوازيان مماسان للكرة يقابلان ك = +٩ و ك = -٩."
  },
  {
    "id": "solid_ch2_db_hots_57",
    "titleEn": "Area Projection Identity for Triangles in Space",
    "titleAr": "متطابقة مساقط مساحة سطح مستوٍ على مستويات الإحداثيات",
    "difficulty": "hots",
    "questionEn": "If a planar region of area $A$ has orthogonal projections $A_{xy}, A_{yz}, A_{zx}$ on the three coordinate planes, what fundamental relationship connects them?",
    "questionAr": "إذا كانت منطقة مستوية مساحتها $A$ ولها مساقط عمودية $A_{xy}, A_{yz}, A_{zx}$ على مستويات الإحداثيات الثلاثة، فما العلاقة التي تربط بينها؟",
    "optionsEn": [
      "$A^2 = A_{xy}^2 + A_{yz}^2 + A_{zx}^2$",
      "$A = A_{xy} + A_{yz} + A_{zx}$",
      "$A^3 = A_{xy} A_{yz} A_{zx}$",
      "$A^2 = A_{xy} A_{yz} + A_{yz} A_{zx} + A_{zx} A_{xy}$"
    ],
    "optionsAr": [
      "$A^2 = A_{xy}^2 + A_{yz}^2 + A_{zx}^2$",
      "$A = A_{xy} + A_{yz} + A_{zx}$",
      "$A^3 = A_{xy} A_{yz} A_{zx}$",
      "$A^2 = A_{xy} A_{yz} + A_{yz} A_{zx} + A_{zx} A_{xy}$"
    ],
    "correctAnswer": "$A^2 = A_{xy}^2 + A_{yz}^2 + A_{zx}^2$",
    "correctIndex": 0,
    "hintEn": "De Gua's 3D generalization of the Pythagorean Theorem.",
    "hintAr": "مبرهنة دي غوا (التعميم ثلاثي الأبعاد لنظرية فيثاغورس للمساحات).",
    "stepByStepSolutionEn": [
      "1. The projection of area $A$ onto a plane with normal $\\hat{n} = (\\cos\\alpha, \\cos\\beta, \\cos\\gamma)$ satisfies:",
      "   $$A_{xy} = A |\\cos\\gamma|, \\quad A_{yz} = A |\\cos\\alpha|, \\quad A_{zx} = A |\\cos\\beta|$$",
      "2. Squaring and summing:",
      "   $$A_{xy}^2 + A_{yz}^2 + A_{zx}^2 = A^2(\\cos^2\\gamma + \\cos^2\\alpha + \\cos^2\\beta)$$",
      "3. Since $\\cos^2\\alpha + \\cos^2\\beta + \\cos^2\\gamma = 1$, we obtain:",
      "   $$A^2 = A_{xy}^2 + A_{yz}^2 + A_{zx}^2$$"
    ],
    "stepByStepSolutionAr": [
      "١. مسقط المساحة أ على المستويات الإحداثية يرتبط بجيوب تمام الاتجاه للمتجه العمودي:",
      "   $$A_{xy} = A \\cos\\gamma, \\quad A_{yz} = A \\cos\\alpha, \\quad A_{zx} = A \\cos\\beta$$",
      "٢. بالتربيع والجمع:",
      "   $$A_{xy}^2 + A_{yz}^2 + A_{zx}^2 = A^2(\\cos^2\\alpha + \\cos^2\\beta + \\cos^2\\gamma)$$",
      "٣. بما أن مجموع مربعات جيوب تمام الاتجاه يساوي ١، ينتج مبرهنة دي غوا الشهيرة:",
      "   $$A^2 = A_{xy}^2 + A_{yz}^2 + A_{zx}^2$$"
    ],
    "teacherTipEn": "This is known as de Gua's theorem, the exact 3D geometric analog of a^2 + b^2 = c^2.",
    "teacherTipAr": "تعرف هذه النتيجة بنظرية دي غوا، وهي المكافئ ثلاثي الأبعاد لنظرية فيثاغورس."
  },
  {
    "id": "solid_ch2_db_hots_58",
    "titleEn": "Distance Between Point and Line Along Fixed Direction",
    "titleAr": "المسافة بين نقطة ومستقيم مقاسة في اتجاه معلوم",
    "difficulty": "hots",
    "questionEn": "Find the distance from point $P(1, -2, 3)$ to the plane $x - y + z = 5$ measured along the line with direction vector $\\vec{d} = (2, 2, 1)$.",
    "questionAr": "أوجد المسافة من النقطة $P(1, -2, 3)$ إلى المستوى $x - y + z = 5$ مقاسة في اتجاه المستقيم الذي متجه اتجاهه $\\vec{d} = (2, 2, 1)$.",
    "optionsEn": [
      "3 units",
      "1 unit",
      "$\\sqrt{3}$ units",
      "6 units"
    ],
    "optionsAr": [
      "3 وحدات طول",
      "1 وحدة طول",
      "$\\sqrt{3}$ وحدة طول",
      "6 وحدات طول"
    ],
    "correctAnswer": "3 units",
    "correctIndex": 0,
    "hintEn": "Write parametric line from P along d: r = P + t * d and find intersection with plane.",
    "hintAr": "اكتب معادلة المستقيم المار بالنقطة ب في اتجاه هـ، وأوجد نقطة التقاطع مع المستوى وطول القطعة.",
    "stepByStepSolutionEn": [
      "1. A line passing through $P(1, -2, 3)$ with direction $\\vec{d} = (2, 2, 1)$ has equation:",
      "   $$x = 1 + 2t, \\quad y = -2 + 2t, \\quad z = 3 + t$$",
      "2. Substitute into the plane $x - y + z = 5$:",
      "   $$(1 + 2t) - (-2 + 2t) + (3 + t) = 5 \\implies 1 + 2 + 3 + t = 5 \\implies 6 + t = 5 \\implies t = -1$$",
      "3. The distance along the line is $|t| \\times |\\vec{d}|$.",
      "4. $|\\vec{d}| = \\sqrt{2^2 + 2^2 + 1^2} = \\sqrt{9} = 3$, so distance = $|-1| \\times 3 = 3$ units."
    ],
    "stepByStepSolutionAr": [
      "١. المستقيم المار بالنقطة ب(١، -٢، ٣) في اتجاه المتجه هـ = (٢، ٢، ١):",
      "   س = ١ + ٢ك، ص = -٢ + ٢ك، ع = ٣ + ك.",
      "٢. بالتعويض في معادلة المستوى س - ص + ع = ٥:",
      "   (١ + ٢ك) - (-٢ + ٢ك) + (٣ + ك) = ٥ ومنها ٦ + ك = ٥ أي ك = -١.",
      "٣. المسافة المقاسة في هذا الاتجاه = |ك| × |هـ| = |-١| × ٣ = ٣ وحدات طول."
    ],
    "teacherTipEn": "Distance along a direction differs from perpendicular distance; it is the hypotenuse.",
    "teacherTipAr": "المسافة المقاسة في اتجاه مائل تختلف عن العمود الساقط وتمثل طول الوتر في المثلث القائم."
  }
]
};
